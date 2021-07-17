import requests
import time
import execjs
import re
import json
from loguru import logger
from crack_jsl_clearance import get_jsl_clearance


class SliderCracker:
    """gsxt极验滑块破解"""

    def __init__(self):
        self.search_item_captcha_api = 'http://www.gsxt.gov.cn/SearchItemCaptcha?t={timestamp}'
        self.captcha_img_api = 'http://api.geetest.com/get.php?is_next=true&type=slide3&gt={gt}&challenge={challenge}&lang=zh-cn&https=false&protocol=http%3A%2F%2F&offline=false&product=embed&api_server=api.geetest.com&isPC=true&autoReset=true&width=100%25'
        self.validate_api = 'http://api.geetest.com/ajax.php?gt=62756445cd524543f5a16418cd920ffd&challenge=fd714339e41584c5eef619e71bc33e4272&lang=zh-cn&pt=0&client_type=web&w=np4jmtlTp5H2N(c(BDVL0n3B19zT)PrHUr8uSg0ooJfl(5BYGs7G0JDRxzBkqPJl4YGNMxEw(2OZQNHSCgCOa(ZUPl6cArTJrFyhmVdclFTDr1WkRmevcqHjWZk58zlXZkCNPIQa6YbrK5LyAiUi4)sMZw5acc)yUzAAHdBFznHo03OFcAaX)S(1ZB)C6P)8Drvz(mwI(sTFvHrIKnf0rv(Nmouf9elo0gbHnQyCk3OP5uGp7ByVW7ewwKhiwzcnMRXr0Ltj5oerum11UR3KP3gyplbxuVlFeoFlnIde5lx9vZcIwxgcaOxRgOZp9bMoFxaaCMet1c)mC3s1pXNSUU46v)SK0DHzkFzqFIQdQuy61JXo(ckUGcLJ)vGPPZ3kyBeJ7xw1uEaud(Y4bWnmhPaihgOeyTuIy(vUP8O(e69WUzQw7QZqSyrwinzcXZYaMQsaf8njGCU83czKUMAchtPAsbVqn8XwjLNpx7m)ounPbOx7ghA1hXi16VTQ9rDrwiifukOzMRapCDqv)df5(jsnzyRePHNVMexNYZDLfPQLxIKofXs8o5MToMMJKIQP8V(x(oerT9VgVsghhNuGvqaoW6rc14o4vUeIgZXaw029iN(0Y8iuDCZRyxmsZzibDuhXUcYiSbOWgjgmt175XFnquCwKWzQ3G(FtVBCfdYKnaVY5BDxyCV9ZJLrD)LA)7BKOHq89)50zATSup2XFQEIMUTr(w3pwcfldyDIFFrs(9YVcrAey5zQWWxYR9e0Al98wHjUI7ZIelSsTO7BMw3QTh)13kW44LTwh3BaNwQSIpJPd6XEBY1KxRItmS42xYc(i0RR9JqlMapOTACNZPY4Ao8Lg7wu4sY5REdEa96yL(iu5WF3ZmRMmQtjPPZn9p442IHS5EwuVANLZvizsgLvKsBtBCwvoVdIo4SXfEO0TSLti0tqkLybCHy9F0UwCIE99kkHtNDVI)zU5GVPC3tv0jIb6rG71c6muo7DbGQc.736382921c1d59887c5579faf24d37b07d51caffaa0749f16710d66360dc6b4c7e3712c7b4ee4b4d8f7d0f278facb9160b1ae1fe774da5c71568af9fc0e073091db183b488b35df8f6b0e2a6d75a9845fea79b70d6a81f43b89e6eb8924ae6f78ae01952425d7cd4a67d06dd1147bd73919906162b63d2c75f4a99101446b662&callback=geetest_1625582363372'
        self.headers = {
            'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/90.0.4430.212 Safari/537.36'
        }
        self.session = requests.Session()
        self.connect_timeout = 30

    @staticmethod
    def __get_now_timestamp():
        """获取当前时间戳，13位数"""
        return round(time.time() * 1000)

    def get_gt_and_challenge(self):
        """获取gt值和challenge值"""
        url = self.search_item_captcha_api.format(timestamp=self.__get_now_timestamp())
        headers = self.headers
        headers['Host'] = 'www.gsxt.gov.cn'

        def __get_response():
            nonlocal self, url, headers
            return self.session.get(url, headers=headers, timeout=self.connect_timeout)

        resp = __get_response()
        if resp.status_code == 521 and resp.text.startswith('<script>document.cookie='):
            __jsl_clearance = execjs.eval(re.search(r'\(.*\)', resp.text, re.S).group())
            __jsl_clearance = re.search(r'__jsl_clearance=(.*?);', __jsl_clearance).group(1)
            self.session.cookies.set('__jsl_clearance', __jsl_clearance)
            return self.get_gt_and_challenge()
        if resp.status_code == 521 and resp.text.startswith('<script>var'):
            go = eval(re.search(r';go\(({.*?})\)', resp.text, re.S).group(1))
            jsl_clearance = get_jsl_clearance(go['ct'], go['bts'], go['chars'])
            self.session.cookies.set('__jsl_clearance', jsl_clearance)
            return self.get_gt_and_challenge()
        if resp.status_code == 200:
            result = resp.json()
            return result['gt'], result['challenge']
        raise RuntimeError(f'获取gt、challenge值请求异常，状态码：{resp.status_code}')

    def get_captcha_info(self, gt, challenge):
        """获取滑块验证码信息"""
        url = self.captcha_img_api.format(gt=gt, challenge=challenge)
        resp = self.session.get(url, headers=self.headers, timeout=self.connect_timeout)
        assert resp.status_code == 200, f'获取验证码信息失败：status [{resp.status_code}]'
        captcha_info = resp.text
        if captcha_info.startswith('('):
            captcha_info = captcha_info[1:-1]
        captcha_info = json.loads(captcha_info)
        if captcha_info['status'] == 'error':
            raise RuntimeError('获取验证码信息失败：gt值或challenge值不正确')
        return captcha_info

    def crack(self):
        """破解逻辑"""
        # 首先获取gt、challenge值
        gt, challenge = self.get_gt_and_challenge()
        logger.info(f'获取 gt -> {gt}, challenge -> {challenge}')
        captcha_info = self.get_captcha_info(gt, challenge)
        print(captcha_info)


if __name__ == '__main__':
    cracker = SliderCracker()
    cracker.crack()
