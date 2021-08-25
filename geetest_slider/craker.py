import random
import requests
import os
import time
import json
import execjs
from loguru import logger
from model.re_captcha_img import ReCaptchaImg
from model.slider_gap import SlideGap
from decorator import decorator


@decorator
def timer(func, *args, **kwargs):
    start_time = time.time()
    result = func(args[0])
    end_time = time.time()
    logger.debug(f'{func.__name__} 函数耗时 -> {end_time - start_time}')
    return result


class SliderCracker:
    """极验滑块验证码破解"""

    def __init__(self):
        self.register_url = 'https://www.geetest.com/api/user/register/register-sms'
        self.info_url = 'https://api.geetest.com/get.php'
        self.reset_info_url = 'https://api.geetest.com/refresh.php'
        self.verify_url = 'https://api.geetest.com/ajax.php'
        self.img_base_url = 'https://static.geetest.com/'
        self.headers = {
            'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/90.0.4430.212 Safari/537.36',
        }
        self.timeout = 30
        self.session = requests.Session()

        with open('js/w1_cracker.js', encoding='utf-8') as f:
            self.w1_compile = execjs.compile(f.read())
        with open('js/w2_cracker.js', encoding='utf-8') as f:
            self.w2_compile = execjs.compile(f.read())
        with open('js/w3_cracker.js', encoding='utf-8') as f:
            self.w3_compile = execjs.compile(f.read())

        base_captcha_path = 'data/captcha_img'
        if not os.path.exists(base_captcha_path):
            os.makedirs(base_captcha_path)
        self.captcha_bg_path = os.path.join(base_captcha_path, 'bg.jpg')
        self.captcha_full_bg_path = os.path.join(base_captcha_path, 'full.jpg')
        self.re_captcha = ReCaptchaImg()
        self.slide_gap = SlideGap()

        self.trajectory_db = self.load_trajectory_db()  # 轨迹库
        self.x_threshold = 1  # 缺口距离允许的偏移量

    @staticmethod
    def load_trajectory_db():
        """加载轨迹库"""
        with open('data/trajectory.txt', encoding='utf-8') as f:
            trajectory_db = [eval(i.rstrip()) for i in f]
            print(f'成功加载轨迹库，当前共【{len(trajectory_db)}】条轨迹（。＾▽＾）')
            return trajectory_db

    def get_gt_and_challenge(self):
        """注册并获取gt值和challenge值"""
        resp = self.session.post(self.register_url, headers=self.headers, timeout=self.timeout)
        result = resp.json()
        return result['gt'], result['challenge']

    def get_info(self, gt, challenge, w=None):
        """获取验证码信息"""
        callback = f'geetest_{int(time.time() * 1000)}'
        params = {
            'is_next': 'true',
            'type': 'slide3',
            'gt': gt,
            'challenge': challenge,
            'lang': 'zh-cn',
            'https': 'true',
            'protocol': 'https://',
            'offline': 'false',
            'product': 'embed',
            'api_server': 'api.geetest.com',
            'isPC': 'true',
            'autoReset': 'true',
            'width': '100%',
            'callback': callback,
        }
        if w:
            params['w'] = w
        resp = self.session.get(self.info_url, params=params, headers=self.headers, timeout=self.timeout)
        if not resp.text.startswith(f'{callback}('):
            raise RuntimeError(f'获取验证码信息失败： {resp.text}')
        return json.loads(resp.text[22:-1])

    def reset_info(self, gt, challenge):
        """重置验证码信息"""
        callback = f'geetest_{int(time.time() * 1000)}'
        params = {
            'gt': gt,
            'challenge': challenge,
            'lang': 'zh-cn',
            'type': 'multilink',
            'callback': callback,
        }
        resp = self.session.get(self.reset_info_url, params=params, headers=self.headers, timeout=self.timeout)
        if not resp.text.startswith(f'{callback}('):
            raise RuntimeError(f'重置验证码信息失败： {resp.text}')
        return json.loads(resp.text[22:-1])

    def get_verify_result(self, gt, challenge, w):
        """提交gt值和challenge值获取验证码类型或验证结果"""
        callback = f'geetest_{int(time.time() * 1000)}'
        params = {
            'gt': gt,
            'challenge': challenge,
            'w': w,
            'lang': 'zh-cn',
            'pt': '0',
            'client_type': 'web',
            'callback': callback,
        }
        resp = self.session.get(self.verify_url, params=params, headers=self.headers, timeout=self.timeout)
        if not resp.text.startswith(f'{callback}('):
            raise RuntimeError(f'验证失败： {resp.text}')
        return json.loads(resp.text[22:-1])

    def get_w1(self, gt, challenge):
        """获取w1加密参数
        args:
            gt: 注册接口返回的gt值
            challenge: 注册接口返回的challenge值
        """
        return self.w1_compile.call('get_w1', gt, challenge)

    def get_w2(self, gt, challenge, s, aes_key):
        """获取w2加密参数
        args:
            gt: 注册接口返回的gt值
            challenge: 注册接口返回的challenge值
            s: 使用w1加密参数从/get.php接口获取的config信息中的s值
            aes_key: 加密w1参数时的aesKey
        """
        return self.w2_compile.call('get_w2', gt, challenge, s, aes_key)

    def get_w3(self, gt, challenge, c, s, trajectory):
        """获取w2加密参数
        args:
            gt: 注册接口返回的gt值
            challenge: 注册接口返回的challenge值
            c: 使用w1加密参数从/get.php接口获取的config信息中的c值
            s: 使用w1加密参数从/get.php接口获取的config信息中的s值
            trajectory: 滑动轨迹列表
        """
        return self.w3_compile.call('get_w3', trajectory, c, s, gt, challenge)

    def download_captcha_img(self, url, save_path):
        """下载验证码图片"""
        resp = self.session.get(url, headers=self.headers, timeout=self.timeout)
        assert resp.status_code == 200, f'验证码图片下载失败： status [{resp.status_code}]'
        with open(save_path, 'wb') as f:
            f.write(resp.content)
        logger.debug(f'图片下载完成 -> {save_path}')

    def choice_trajectory(self, x):
        """选择滑动轨迹
        :param x: 缺口距离
        """
        trajectory_x = x

        trajectory_list = []
        for trajectory in self.trajectory_db:
            if trajectory_x - self.x_threshold <= trajectory[0] <= trajectory_x + self.x_threshold:
                trajectory_list.append(trajectory[1])
        if trajectory_list:
            logger.debug(f'匹配到【{len(trajectory_list)}】条轨迹，随机选取一条')
            return random.choice(trajectory_list)

    @timer
    def crack(self):
        """破解流程"""
        # 第一步：获取验证码图片信息
        # 注册
        gt, challenge = self.get_gt_and_challenge()
        logger.info(f'注册成功：gt -> {gt}, challenge -> {challenge}')

        # 获取用于生成w2参数的信息
        w1, aes_key = self.get_w1(gt, challenge)
        logger.info(f'生成加密参数：\nw1 -> {w1}\naes_key -> {aes_key}')
        config_info = self.get_info(gt, challenge, w1)
        s = config_info['data']['s']
        c = config_info['data']['c']
        logger.info(f'成功获取用于生成w2参数的信息： config_info -> {config_info}')

        # 获取验证码类型 - slide
        w2 = self.get_w2(gt, challenge, s, aes_key)
        logger.info(f'生成加密参数：\nw2 -> {w2}')
        ret = self.get_verify_result(gt, challenge, w2)
        if ret['data']['result'] == 'slide':
            captcha_info = self.get_info(gt, challenge)
            s = captcha_info['s']
            challenge = captcha_info['challenge']
            logger.info(f'成功获取验证码图片信息： captcha_info -> {captcha_info}')
        else:
            raise RuntimeError(f'获取到错误的验证码类型： {ret}')

        # 第二步：验证码缺口识别
        # 下载验证码图片
        bg_url = self.img_base_url + captcha_info['bg']
        full_bg_url = self.img_base_url + captcha_info['fullbg']
        self.download_captcha_img(bg_url, self.captcha_bg_path)
        self.download_captcha_img(full_bg_url, self.captcha_full_bg_path)

        # 验证码图片还原
        self.re_captcha.restore()

        # 识别缺口
        gap = self.slide_gap.crack(self.captcha_bg_path, self.captcha_full_bg_path)
        # 使缺口距离适配当前环境
        gap -= 6
        logger.debug(f'真实缺口距离： gap -> {gap}')

        # 匹配轨迹库
        trajectory = self.choice_trajectory(gap)
        if trajectory:
            logger.info(f'匹配到轨迹 -> {trajectory}')
        else:
            logger.error(f'未匹配到响应轨迹，请补充轨迹库... gap - {gap}')
            return

        # 加密轨迹
        w3 = self.get_w3(gt, challenge, c, s, trajectory)
        logger.info(f'生成加密参数：\nw3 -> {w3}')

        # 提交验证
        result = self.get_verify_result(gt, challenge, w3)
        logger.info(f'验证结果 -> {result}')
        return result


if __name__ == '__main__':
    c = SliderCracker()
    ret = c.crack()
