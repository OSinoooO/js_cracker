import requests
from loguru import logger


class SliderCracker:
    """极验滑块验证码破解"""

    def __init__(self):
        self.register_url = "https://www.geetest.com/api/user/register/register-sms"
        self.headers = {
            'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/90.0.4430.212 Safari/537.36',
        }

    def get_gt_and_challenge(self):
        """注册并获取gt值和challenge值"""
        resp = requests.post(self.register_url, headers=self.headers)
        result = resp.json()
        return result['gt'], result['challenge']

    def crack(self):
        """破解流程"""
        gt, challenge = self.get_gt_and_challenge()
        logger.info(f'注册成功：gt -> {gt}, challenge -> {challenge}')


if __name__ == '__main__':
    c = SliderCracker()
    c.crack()
