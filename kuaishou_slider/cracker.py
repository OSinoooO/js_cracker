import os
import re
from loguru import logger
import requests
import random
import urllib.parse
from encrypt import Encrypt
from slide_gap import SlideCrack


class Cracker:

    def __init__(self):
        self.img_config_url = 'https://api.zt.kuaishou.com/rest/zt/captcha/sliding/config'
        self.img_reset_url = 'https://api.zt.kuaishou.com/rest/zt/captcha/refSes'
        self.verify_url = 'https://api.zt.kuaishou.com/rest/zt/captcha/sliding/verify'
        self.base_info_url = 'https://www.kuaishou.com/graphql'
        self.data_url = 'https://www.kuaishou.com/graphql'

        self.headers = {
            'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/92.0.4515.107 Safari/537.36',
            # 'Cookie': 'clientid=3; did=web_963208ddb71e45fdbdd6f2008f1e658d'
        }
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

    def get_did(self):
        """获取cookie值did"""
        resp = requests.get(self.base_info_url, headers=self.headers, timeout=10)
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

    def get_captcha_session(self):
        """获取captchaSession"""
        data = {"operationName":"visionSearchPhoto","variables":{"keyword":"你","pcursor":"1","page":"search","searchSessionId":"MTRfMF8xNjM0NjE0ODEzMTY4X-S9oF8zMzAx"},"query":"query visionSearchPhoto($keyword: String, $pcursor: String, $searchSessionId: String, $page: String, $webPageArea: String) {  visionSearchPhoto(keyword: $keyword, pcursor: $pcursor, searchSessionId: $searchSessionId, page: $page, webPageArea: $webPageArea) {    result    llsid    webPageArea    feeds {      type      author {        id        name        following        headerUrl        headerUrls {          cdn          url          __typename        }        __typename      }      tags {        type        name        __typename      }      photo {        id        duration        caption        likeCount        realLikeCount        coverUrl        photoUrl        liked        timestamp        expTag        coverUrls {          cdn          url          __typename        }        photoUrls {          cdn          url          __typename        }        animatedCoverUrl        stereoType        videoRatio        __typename      }      canAddComment      currentPcursor      llsid      status      __typename    }    searchSessionId    pcursor    aladdinBanner {      imgUrl      link      __typename    }    __typename  }}"}
        headers = self.headers
        headers['Referer'] = 'https://www.kuaishou.com/search/video?searchKey=%E4%BD%A0'
        resp = requests.post(self.data_url, json=data, headers=self.headers, timeout=self.req_timeout)
        assert resp.status_code == 200
        result = re.search(r'captchaSession=(.*?)&', resp.text)
        if result:
            result = result.group(1)
            logger.debug(f'成功获取captchaSession：{result}')
            return result
        else:
            logger.error(f'未获取captchaSession：{result}')
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

    def crack(self):
        self.headers['Cookie'] = 'clientid=3; did=' + self.get_did()
        # 获取captcha_session
        captcha_session = self.get_captcha_session()
        # 获取验证码图片信息
        img_config = self.get_img_config(captcha_session)
        # 下载验证码
        self.download_captcha_img(img_config['bgPicUrl'], img_config['cutPicUrl'], img_config['captchaSn'])
        # 获取验证码缺口距离
        gap_distance = self.get_gap_distance()
        # 从轨迹库中选择相应轨迹
        trajectory = self.choice_trajectory(int(gap_distance))
        if trajectory:
            # 拼接待加密的参数
            sign = self.init_sign(img_config, trajectory)
            # 获取加密参数
            encrypt_sign = self.encrypt(sign)
            # 验证
            return self.verify(encrypt_sign)


if __name__ == '__main__':
    cracker = Cracker()
    result = cracker.crack()
    logger.info(f'验证结果，拿好咯：{result}')
    # 带上请求头去请求，只请求一次，然后丢掉该请求头
    # identity-verification-token = result['captchaToken']
    # identity-verification-type = result['unifiedType']
