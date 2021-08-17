import requests
import time
import json
import execjs
from loguru import logger


class SliderCracker:
    """极验滑块验证码破解"""

    def __init__(self):
        self.register_url = 'https://www.geetest.com/api/user/register/register-sms'
        self.info_url = 'https://api.geetest.com/get.php'
        self.reset_info_url = 'https://api.geetest.com/refresh.php'
        self.captcha_type_url = 'https://api.geetest.com/ajax.php'
        self.headers = {
            'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/90.0.4430.212 Safari/537.36',
        }
        self.timeout = 30

        with open('js/w1_cracker.js', encoding='utf-8') as f:
            self.w1_compile = execjs.compile(f.read())
        with open('js/w2_cracker.js', encoding='utf-8') as f:
            self.w2_compile = execjs.compile(f.read())

    def get_gt_and_challenge(self):
        """注册并获取gt值和challenge值"""
        resp = requests.post(self.register_url, headers=self.headers, timeout=self.timeout)
        result = resp.json()
        return result['gt'], result['challenge']

    def get_info(self, gt, challenge, w1=None):
        """获取验证码信息"""
        callback = f'geetest_{int(time.time() * 1000)}'
        params = {
            'gt': gt,
            'challenge': challenge,
            'lang': 'zh-cn',
            'pt': '0',
            'client_type': 'web',
            'callback': callback,
        }
        if w1:
            params['w'] = w1
        resp = requests.get(self.info_url, params=params, headers=self.headers, timeout=self.timeout)
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
        resp = requests.get(self.reset_info_url, params=params, headers=self.headers, timeout=self.timeout)
        if not resp.text.startswith(f'{callback}('):
            raise RuntimeError(f'重置验证码信息失败： {resp.text}')
        return json.loads(resp.text[22:-1])

    def get_captcha_type(self, gt, challenge, w2):
        """提交gt值和challenge值获取验证码类型"""
        callback = f'geetest_{int(time.time() * 1000)}'
        params = {
            'gt': gt,
            'challenge': challenge,
            'w': w2,
            'lang': 'zh-cn',
            'pt': '0',
            'client_type': 'web',
            'callback': callback,
        }
        resp = requests.get(self.captcha_type_url, params=params, headers=self.headers, timeout=self.timeout)
        if not resp.text.startswith(f'{callback}('):
            raise RuntimeError(f'获取captcha-type失败： {resp.text}')
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
        logger.info(f'成功获取用于生成w2参数的信息： config_info -> {config_info}')

        # 获取验证码类型 - slide
        w2 = self.get_w2(gt, challenge, config_info['data']['s'], aes_key)
        logger.info(f'生成加密参数：\nw2 -> {w2}')
        ret = self.get_captcha_type(gt, challenge, w2)
        if ret['data']['result'] == 'slide':
            captcha_info = self.get_info(gt, challenge)
            logger.info(f'成功获取验证码图片信息： captcha_info -> {captcha_info}')
        else:
            raise RuntimeError(f'获取到错误的验证码类型： {ret}')


if __name__ == '__main__':
    c = SliderCracker()
    c.crack()
