import requests


class CaptchaSDK:
    """极验无感验证码破解"""

    def __init__(self):
        self.headers = {
            "Connection": "keep-alive",
            "Pragma": "no-cache",
            "Cache-Control": "no-cache",
            "sec-ch-ua": "\"Google Chrome\";v=\"95\", \"Chromium\";v=\"95\", \";Not A Brand\";v=\"99\"",
            "Content-Type": "application/x-www-form-urlencoded",
            "sec-ch-ua-mobile": "?0",
            "X-Role": "LENDER",
            "User-Agent": "Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/95.0.4638.54 Safari/537.36",
            "sec-ch-ua-platform": "\"Linux\"",
            "Accept": "*/*",
            "Origin": "https://www.dianrong.com",
            "Sec-Fetch-Site": "same-site",
            "Sec-Fetch-Mode": "cors",
            "Sec-Fetch-Dest": "empty",
            "Referer": "https://www.dianrong.com/",
            "Accept-Language": "zh-CN,zh;q=0.9,ru;q=0.8"
        }
        self.session = requests.Session()
        self.req_timeout = 30

    def get_gt_and_challenge(self):
        url = "https://auth.dianrong.com/auth-server/api/users/captcha/geetest-query"
        params = {
            "code": "DR_WEB_3"
        }
        response = self.session.get(url, headers=self.headers, params=params, timeout=self.req_timeout)
        result = response.json()
        if result.get('result', '') == 'success':
            content = result['content']
            return content['gt'], content['challenge']
        raise RuntimeError(f'获取gt和challenge值失败：{result}')

    def crack(self):
        gt, challenge = self.get_gt_and_challenge()
        print(gt, challenge)


if __name__ == '__main__':
    sdk = CaptchaSDK()
    sdk.crack()
