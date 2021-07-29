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

        self.headers = {
            'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/92.0.4515.107 Safari/537.36',
        }
        self.req_timeout = 10  # 请求超时时间

        # 加密器配置
        self.aes_key = 'v4dj1g1lfekof8sz'
        self.aes_iv = 'hs2s8eop6pn6cf89'
        self.encrypter = Encrypt(key=self.aes_key, iv=self.aes_iv)

        self.scale_ratio = 0.60932944606414  # 验证码缩放比例
        self.slide_init_x = 10.358600583090379  # 滑块起始横坐标（17 * self.scale_ratio）
        self.cut_slide_ratio = 0.358  # 滑块x坐标与轨迹总长度的比例
        self.trajectory_db = self.load_trajectory_db()  # 轨迹库
        self.x_threshold = 2  # 缺口距离浮动阈值

        self.cut_img_path = "img/cutPic.png"  # 滑块图片路径
        self.bg_img_path = "img/bgPic.png"  # 背景图片路径
        self.ret_img_path = "img/result.png"  # 处理结果图片路径,用红线标注

    @staticmethod
    def load_trajectory_db():
        """加载轨迹库"""
        with open('data/trajectory.txt', encoding='utf-8') as f:
            trajectory_db = [i.rstrip() for i in f]
            print(f'成功加载轨迹库，当前共【{len(trajectory_db)}】条轨迹（。＾▽＾）')
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
            print(f'成功获取验证码图片配置信息：{result}')
            return result
        else:
            print(f'需要重置captchaSession：{result}')
            captcha_session = self.reset_img(captcha_session)
            return self.get_img_config(captcha_session)

    def reset_img(self, captcha_session: str):
        """重置验证码"""
        print(f'正在重置captchaSession...')
        result = self._request(self.img_reset_url, captcha_session)
        if result.get('result') == 1:
            return result['captchaSession']
        else:
            raise RuntimeError(f'重置captchaSession失败：{result}')

    def init_sign(self, config, trajectory):
        """初始化加密参数"""
        # trajectory = "558-0-283,558-0-284,561-0-288,564-0-301,567-0-306,569-0-316,569-0-326,572-0-333,575-0-335,578-0-345,581-0-349,581-0-353,581-0-355,583-0-357,586-0-362,589-0-364,592-0-370,592-0-373,594-0-381,597-0-386,600-0-395,603-0-396,603-0-406,606-0-415,606-0-418,608-0-427,611-0-429,614-0-439,614-0-450,617-0-469,620-0-478,620-0-497,622-0-499,622-0-500,625-0-510,625-0-524,628-0-536,631-0-542,634-0-561,636-0-581,636-0-587,639-0-596,642-0-600,645-0-614,645-0-618,648-0-619,648-0-623,650-0-630,653-0-638,656-0-642,659-0-647,659-0-649,659-0-650,662-0-660,664-0-665,667-0-668,670-0-673,670-0-683,673-0-690,675-0-696,678-0-700,681-0-709,681-0-722,684-0-726,687-0-746,689-0-755,692-0-774,692-0-786,695-0-795,698-0-817,701-0-823,703-0-851,703-0-855,706-0-879,709-0-888,712-0-924,715-0-933,715-0-963,717-0-983,717-0-1018,720-0-1018,723-0-1023,726-0-1063,726-0-1089,729-0-1139,731-0-1190,734-0-1217,737-0-1274,737-0-1357,740-0-1373,743-0-1422,743-0-1519,745-0-1656,748-0-1744,748-0-1773,748-0-1789,751-0-1793,754-0-1832,756-0-1940,756-0-2018"
        sign = {
            "captchaSn": config['captchaSn'],
            "bgDisWidth": round(config['bgPicWidth'] * self.scale_ratio),
            "bgDisHeight": round(config['bgPicHeight'] * self.scale_ratio),
            "cutDisWidth": round(config['cutPicWidth'] * self.scale_ratio),
            "cutDisHeight": round(config['cutPicHeight'] * self.scale_ratio),
            "relativeX": round(int(trajectory.split(',')[-1].split('-')[0]) * self.cut_slide_ratio + config[
                'disX'] * self.scale_ratio),
            "relativeY": round(config['disY'] * self.scale_ratio),
            "trajectory": trajectory  # 滑块轨迹
        }
        return urllib.parse.urlencode(sign)

    def verify(self, data):
        """验证逻辑"""
        headers = self.headers
        headers['Content-Type'] = 'text/plain'
        resp = requests.post(self.verify_url, data=data, headers=headers, timeout=self.req_timeout)
        assert resp.status_code == 200, f'验证服务异常：{resp.status_code}'
        result = resp.json()
        if result.get('result') == 1:
            print('* 验证通过！O(∩_∩)O')
            return result
        else:
            print('* 验证失败！/(ㄒoㄒ)/~~')

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

        # 下载背景图
        with open(self.bg_img_path, 'wb') as f:
            f.write(_downloader(bg_img_url))

        # 下载滑块图
        with open(self.cut_img_path, 'wb') as f:
            f.write(_downloader(cut_img_url))
        print(f'验证码图片下载完成 -> {self.bg_img_path} {self.cut_img_path}')

    def get_gap_distance(self):
        """获取缺口距离"""
        sc = SlideCrack(self.cut_img_path, self.bg_img_path, self.ret_img_path)
        return sc.discern()

    def choice_trajectory(self, x):
        """
        选择滑动轨迹
        :param x: 缺口距离
        """
        # 使缺口距离适配当前环境（686为验证码原图宽度，418为实际验证码宽度，1000为滑块滑动最大长度）
        trajectory_x = round((x / 686 * 418 - self.slide_init_x) / self.cut_slide_ratio)

        trajectory_list = []
        for trajectory in self.trajectory_db:
            if trajectory_x - self.x_threshold < int(trajectory[:3]) < trajectory_x + self.x_threshold:
                trajectory_list.append(trajectory[4:])
        if trajectory_list:
            print(f'匹配到【{len(trajectory_list)}】条轨迹，随机选取一条')
            return random.choice(trajectory_list)
        else:
            print(f'未匹配到响应轨迹，请补充轨迹库... x - {x}')

    def crack(self, captcha_session):
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
    captcha_session = 'Cgp6dC5jYXB0Y2hhEu4BhrFlzKlXo5uDBVpHWUSqCJyBWg7rlip036LEQ_1LC3pkKqfQorAOOhI-tDZRckgDIykZYVJuzBz0PYyRRw9yXjs1YJ3ZaDwrTN_QaIXpFZrW-cEPbHMTAx5HyQG0wAWR2UQtcMlLCvO3suwEEJNRtw23XKJGBaJKC8KbNQWw79fijbl2RGlM79Q86Es9f6cZj3BViRs1duk9kUaq-uiCI1G8ZzScbSHj-9jwFtcMmCWGmQCht45eZiG1g436lYxSgLwMC4B8jLNYaaduQVkpvbT8AvbggjOZ9uxgwoicrS9lkaJKUCOS1CP7aqhnGRoSHzu-JyybXJ56fSg-i-K_agFkKAUwAg'
    result = cracker.crack(captcha_session)
    print(f'验证结果，拿好咯：{result}')
    # 带上请求头去请求，只请求一次，然后丢掉该请求头
    # identity-verification-token = result['captchaToken']
    # identity-verification-type = result['unifiedType']