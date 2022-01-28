import os
import time
import json
import re
import requests
import random
import urllib.parse
from loguru import logger
from encrypt import Encrypt
from slide_gap import SlideCrack
from retrying import retry
from functools import lru_cache


class VerifyError(Exception):
    """ Unspecified verify error. """

    def __init__(self, *args, **kwargs):
        pass


class Cracker:

    def __init__(self):
        self.img_config_url = 'https://api.zt.kuaishou.com/rest/zt/captcha/sliding/config'
        self.img_reset_url = 'https://api.zt.kuaishou.com/rest/zt/captcha/refSes'
        self.verify_url = 'https://api.zt.kuaishou.com/rest/zt/captcha/sliding/verify'
        self.base_info_url = 'https://www.kuaishou.com/graphql'

        self.headers = {
            "Connection": "keep-alive",
            "Pragma": "no-cache",
            "Cache-Control": "no-cache",
            "sec-ch-ua": "\"Google Chrome\";v=\"95\", \"Chromium\";v=\"95\", \";Not A Brand\";v=\"99\"",
            "accept-language": "zh-CN,zh;q=0.9,ru;q=0.8",
            "sec-ch-ua-mobile": "?0",
            "User-Agent": "Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/95.0.4638.54 Safari/537.36",
            "content-type": "application/json",
            "accept": "*/*",
            "sec-ch-ua-platform": "\"Linux\"",
            "Origin": "https://www.kuaishou.com",
            "Sec-Fetch-Site": "same-origin",
            "Sec-Fetch-Mode": "cors",
            "Sec-Fetch-Dest": "empty",
            "Referer": "https://www.kuaishou.com/search/video?searchKey=%E4%BD%A0%E5%AF%B9%E7%88%B1"
        }
        self.cookies = {}
        self.req_timeout = 10  # 请求超时时间

        # 加密器配置
        self.aes_key = 'v4dj1g1lfekof8sz'
        self.aes_iv = 'hs2s8eop6pn6cf89'
        self.encrypter = Encrypt(key=self.aes_key, iv=self.aes_iv)

        self.scale_ratio = 0.478134110787172  # 验证码缩放比例
        self.slide_init_x = 8.128279883381923  # 滑块起始横坐标（17 * self.scale_ratio）
        self.cut_slide_ratio = 0.28  # 滑块x坐标与轨迹总长度的比例
        self.trajectory_path = 'data/trajectory.txt'
        self.trajectory_db = self.load_trajectory_db()  # 轨迹库
        self.x_threshold = 2  # 缺口距离浮动阈值

        self.cut_img_path = "img/cutPic.png"  # 滑块图片路径
        self.bg_img_path = "img/bgPic.png"  # 背景图片路径
        self.ret_img_path = "img/result.png"  # 处理结果图片路径,用红线标注

        self.max_verify_count = 5  # 最大验证次数

    @lru_cache(maxsize=1)
    def get_did(self, _):
        """获取cookie值did"""
        url = 'https://www.kuaishou.com/search/video?searchKey=%E4%BD%A0%E5%AF%B9%E7%88%B1'
        resp = requests.get(url, headers=self.headers, timeout=10)
        logger.info(f'获取新的did值 -> {resp.cookies.get("did")}')
        return resp.cookies.get('did')

    def load_trajectory_db(self):
        """加载轨迹库"""
        with open(self.trajectory_path, encoding='utf-8') as f:
            trajectory_db = [i.rstrip() for i in f]
            logger.info(f'成功加载轨迹库，当前共【{len(trajectory_db)}】条轨迹（。＾▽＾）')
            return trajectory_db

    def _request(self, url, captcha_session):
        """请求服务器，获取验证码相关信息"""
        data = f'captchaSession={captcha_session}'
        headers = self.headers
        headers['Content-Type'] = 'application/x-www-form-urlencoded'
        resp = requests.post(url, data=data, headers=headers, timeout=self.req_timeout)
        assert resp.status_code == 200, f'获取验证码图片信息失败：{resp.status_code}'
        return resp.json()

    def get_img_config(self, captcha_session: str):
        """获取验证码图片配置信息"""
        result = self._request(self.img_config_url, captcha_session)
        if result.get('result') == 1:
            logger.debug(f'成功获取验证码图片配置信息：{result}')
            return result
        else:
            logger.debug(f'需要重置captchaSession：{result}')
            captcha_session = self.reset_img(captcha_session)
            return self.get_img_config(captcha_session)

    def reset_captcha_session(self, captcha_session):
        """重置captchaSession"""
        headers = {
            "Connection": "keep-alive",
            "Pragma": "no-cache",
            "Cache-Control": "no-cache",
            "sec-ch-ua": "\"Google Chrome\";v=\"95\", \"Chromium\";v=\"95\", \";Not A Brand\";v=\"99\"",
            "Accept": "application/json, text/plain, */*",
            "Content-Type": "application/x-www-form-urlencoded",
            "sec-ch-ua-mobile": "?0",
            "User-Agent": "Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/95.0.4638.54 Safari/537.36",
            "sec-ch-ua-platform": "\"Linux\"",
            "Origin": "https://captcha.zt.kuaishou.com",
            "Sec-Fetch-Site": "same-origin",
            "Sec-Fetch-Mode": "cors",
            "Sec-Fetch-Dest": "empty",
            "Referer": f"https://captcha.zt.kuaishou.com/iframe/index.html?captchaSession={captcha_session}&type=1&configUrl=https%3A%2F%2Fcaptcha.zt.kuaishou.com%2Frest%2Fzt%2Fcaptcha%2Fsliding%2Fconfig",
            "Accept-Language": "zh-CN,zh;q=0.9,ru;q=0.8"
        }
        cookies = {
            "clientid": "3",
            "did": self.cookies.get('did')
        }
        url = "https://captcha.zt.kuaishou.com/rest/zt/captcha/refSes"
        data = {
            "captchaSession": captcha_session
        }
        response = requests.post(url, headers=headers, cookies=cookies, data=data)
        captcha_session = response.json().get('captchaSession')
        assert captcha_session, 'captcha_session重置失败'
        return captcha_session

    @retry(stop_max_attempt_number=10)
    def get_captcha_session(self):
        """获取captchaSession"""
        cookies = {
            "kpf": "PC_WEB",
            "kpn": "KUAISHOU_VISION",
            "clientid": "3",
            "did": self.get_did(time.time() // 60)
        }
        self.cookies = cookies
        url = 'https://www.kuaishou.com/search/video?searchKey=%E4%BD%A0%E5%AF%B9%E7%88%B1'
        session = requests.Session()
        session.get(url, headers=self.headers, cookies=cookies)

        url = "https://www.kuaishou.com/graphql"
        data = {
            "operationName": "visionConfigQuery",
            "variables": {},
            "query": "query visionConfigQuery {\n  visionConfig {\n    coronaTabs {\n      tabId\n      name\n      folded\n      selected\n      __typename\n    }\n    tubeTabs {\n      tabId\n      name\n      folded\n      selected\n      subTabs {\n        subTabId\n        subTabName\n        __typename\n      }\n      __typename\n    }\n    banners {\n      id\n      landingUrl\n      imageUrl\n      __typename\n    }\n    movieTagTypes {\n      movieTagType\n      movieTagValues\n      __typename\n    }\n    disabledModules\n    __typename\n  }\n}\n"
        }
        data = json.dumps(data)
        resp = session.post(url, headers=self.headers, cookies=cookies, data=data)
        assert resp.status_code == 200
        result = re.search(r'captchaSession=(.*?)&', resp.text)
        if result:
            result = result.group(1)
            logger.debug(f'成功获取captchaSession：{result}')
            return result
        else:
            logger.error(f'未获取captchaSession：{result}')
            time.sleep(0.5)
            raise ValueError(f'未获取captchaSession：{result}')

    def reset_img(self, captcha_session: str):
        """重置验证码"""
        logger.debug(f'正在重置captchaSession...')
        result = self._request(self.img_reset_url, captcha_session)
        if result.get('result') == 1:
            return result['captchaSession']
        else:
            raise RuntimeError(f'重置captchaSession失败：{result}')

    def init_sign(self, config, trajectory):
        """初始化加密参数"""
        sign = {
            "captchaSn": config['captchaSn'],
            "bgDisWidth": round(config['bgPicWidth'] * self.scale_ratio),
            "bgDisHeight": round(config['bgPicHeight'] * self.scale_ratio),
            "cutDisWidth": round(config['cutPicWidth'] * self.scale_ratio),
            "cutDisHeight": round(config['cutPicHeight'] * self.scale_ratio),
            "relativeX": round(int(trajectory.split(',')[-1].split('|')[0]) * self.cut_slide_ratio + config['disX'] * self.scale_ratio),
            "relativeY": round(config['disY'] * self.scale_ratio),
            "trajectory": trajectory,  # 滑块轨迹
        }
        sign = urllib.parse.urlencode(sign)
        sign += '&gpuInfo=%7B%22glRenderer%22%3A%22WebKit%20WebGL%22%2C%22glVendor%22%3A%22WebKit%22%2C%22unmaskRenderer%22%3A%22ANGLE%20%28Intel%2C%20Mesa%20Intel%28R%29%20UHD%20Graphics%20630%20%28CFL%20GT2%29%2C%20OpenGL%204.6%20%28Core%20Profile%29%20Mesa%2020.3.4%29%22%2C%22unmaskVendor%22%3A%22Google%20Inc.%20%28Intel%29%22%7D'
        sign += '&captchaExtraParam=' + urllib.parse.quote_plus(json.dumps(
            {
                "ua": "Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/95.0.4638.54 Safari/537.36",
                "userAgent": "Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/95.0.4638.54 Safari/537.36",
                "timeZone": "UTC+8",
                "language": "zh-CN",
                "cpuCoreCnt": "12",
                "platform": "Linux x86_64",
                "riskBrowser": "false",
                "webDriver": "false",
                "exactRiskBrowser": "false",
                "webDriverDeep": "false",
                "exactRiskBrowser2": "false",
                "webDriverDeep2": "false",
                "battery": "1",
                "plugins": "1a68ba429dd293b14e41a28b6535aa590",
                "resolution": "1920x1080",
                "pixelDepth": "24",
                "colorDepth": "24",
                "canvasGraphFingerPrint": "105cfd80a894b674d0d59f0b26e28ed73",
                "canvasGraph": "105cfd80a894b674d0d59f0b26e28ed73",
                "canvasTextFingerPrintEn": "1e19fbedaaa2f9475898383d4d0a26e33",
                "canvasTextEn": "1e19fbedaaa2f9475898383d4d0a26e33",
                "canvasTextFingerPrintZh": "1bbfe4d6611d7d2ffc7744834b97884fa",
                "canvasTextZh": "1bbfe4d6611d7d2ffc7744834b97884fa",
                "webglGraphFingerPrint": "14dc51ccd006f78c818999c374ac62402",
                "webglGraph": "14dc51ccd006f78c818999c374ac62402",
                "webglGPUFingerPrint": "186c99f4a6103b3a7bd5318db2fad2479",
                "webglGpu": "186c99f4a6103b3a7bd5318db2fad2479",
                "cssFontFingerPrintEn": "1eca0d153a3ffbc167d77a8b7eee0602e",
                "fontListEn": "1eca0d153a3ffbc167d77a8b7eee0602e",
                "cssFontFingerPrintZh": "12458c4e79f66c410dab21e945db43b02",
                "fontListZh": "12458c4e79f66c410dab21e945db43b02",
                "voiceFingerPrint": "1dd96cac4e826abdbbe261dc4f3a08292",
                "audioTriangle": "1dd96cac4e826abdbbe261dc4f3a08292",
                "nativeFunc": "1973dcbb27a04c3a2ee240d9d2549e105"
            }, ensure_ascii=False
        )).replace('+', '%20')
        return sign

    def verify(self, data):
        """验证逻辑"""
        headers = self.headers
        headers['Content-Type'] = 'text/plain'
        resp = requests.post(self.verify_url, data=data, headers=headers, timeout=self.req_timeout)
        assert resp.status_code == 200, f'验证服务异常：{resp.status_code}'
        result = resp.json()
        if result.get('result') == 1:
            logger.success('* 验证通过！O(∩_∩)O')
            return result
        else:
            logger.warning('* 验证失败！/(ㄒoㄒ)/~~')
            raise VerifyError('* 验证失败！/(ㄒoㄒ)/~~')

    def encrypt(self, data):
        """加密逻辑，AES-CBC"""
        return self.encrypter.aes_encrypt(data)

    def download_captcha_img(self, bg_img_url, cut_img_url, captcha_sn):
        """下载验证码图片"""
        params = {'captchaSn': captcha_sn}

        def _downloader(url):
            resp = requests.get(url, params=params, headers=self.headers, timeout=self.req_timeout)
            assert resp.status_code == 200, f'下载验证码图片失败：{url} [{resp.status_code}]'
            return resp.content

        if not os.path.exists('img'):
            os.makedirs('img')

        # 下载背景图
        with open(self.bg_img_path, 'wb') as f:
            f.write(_downloader(bg_img_url))

        # 下载滑块图
        with open(self.cut_img_path, 'wb') as f:
            f.write(_downloader(cut_img_url))
        logger.debug(f'验证码图片下载完成 -> {self.bg_img_path} {self.cut_img_path}')

    def get_gap_distance(self):
        """获取缺口距离"""
        sc = SlideCrack(self.cut_img_path, self.bg_img_path, self.ret_img_path)
        return sc.discern()

    def choice_trajectory(self, x):
        """
        选择滑动轨迹
        :param x: 缺口距离
        """
        # 使缺口距离适配当前环境
        trajectory_x = round((x - 17) / 0.593)

        trajectory_list = []
        for trajectory in self.trajectory_db:
            if trajectory_x - self.x_threshold < int(trajectory.split('-')[0]) < trajectory_x + self.x_threshold:
                trajectory_list.append(trajectory.split('-')[1])
        if trajectory_list:
            logger.debug(f'匹配到【{len(trajectory_list)}】条轨迹，随机选取一条')
            return random.choice(trajectory_list)
        else:
            logger.debug(f'未匹配到相应轨迹，请补充轨迹库... x - {x}')
            raise VerifyError('未匹配到相应轨迹')

    def crack(self, captcha_session=None, _count=1):
        if not captcha_session:
            # 获取captcha_session
            captcha_session = self.get_captcha_session()
        # 获取验证码图片信息
        img_config = self.get_img_config(captcha_session)
        # 下载验证码
        self.download_captcha_img(img_config['bgPicUrl'], img_config['cutPicUrl'], img_config['captchaSn'])
        # 获取验证码缺口距离
        gap_distance = self.get_gap_distance()
        try:
            # 从轨迹库中选择相应轨迹
            trajectory = self.choice_trajectory(int(gap_distance))
            if trajectory:
                # 拼接待加密的参数
                sign = self.init_sign(img_config, trajectory)
                # 获取加密参数
                encrypt_sign = self.encrypt(sign)
                # 验证
                return self.verify(encrypt_sign)
        except VerifyError:
            _count += 1
            if _count > self.max_verify_count:
                logger.warning(f'达到最大验证次数')
                return
            captcha_session = self.reset_captcha_session(captcha_session)
            return self.crack(captcha_session, _count)


if __name__ == '__main__':
    cracker = Cracker()
    result = cracker.crack()
    logger.info(f'验证结果，拿好咯：{result}')
    # 带上请求头去请求，只请求一次，然后丢掉该请求头
    # identity-verification-token = result['captchaToken']
    # identity-verification-type = result['unifiedType']
