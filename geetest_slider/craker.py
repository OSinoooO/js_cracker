import requests
import execjs
from loguru import logger


class SliderCracker:
    """极验滑块验证码破解"""

    def __init__(self):
        self.register_url = 'https://www.geetest.com/api/user/register/register-sms'
        self.check_url = 'https://api.geetest.com/ajax.php'
        self.headers = {
            'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/90.0.4430.212 Safari/537.36',
        }
        self.timeout = 30

    def get_gt_and_challenge(self):
        """注册并获取gt值和challenge值"""
        resp = requests.post(self.register_url, headers=self.headers, timeout=self.timeout)
        result = resp.json()
        return result['gt'], result['challenge']

    def check_captcha_type(self, gt, challenge, w):
        """提交gt值和challenge值获取验证码类型"""
        params = {
            'gt': '011e260466268eeb81114b4cc8e8a133',
            'challenge': 'ddcc496aab745cf3a405dc29a9830ad1',
            'w': "AFR1a5P7w3jACwbzTs6PCjgXi8KVmpwIaaakm)1qdW5nCIChw(FcJJr2UxvP5qu83xEzj7eDfQVgkk2ecUoEw5Km6Mx34e8QcYgvlBoMNv2C3HG2J8ZzZCZ(TmW)DRf9i7pWtTjFg2I9eYW2YE0TZwKG8TBallicDaX8PVM78pDg2SxFPgwdDwE98EtJSD1b9cc5PJU1bS9sD6RVscg33UNUrbw7W5yOSL2)eDcCYiHLgHTJpMJ1W1vP2EOWyuZHPyWihbeM2tIulUHJISylfffG(kBhS1fUAiceW3XhtERDC12BiQmBnL8WYueqyxWFDz8gy1p6FR9xibb2TfnElfUPhEL3xDWhbsluORcnVI1wdOZNR36Z)TICObwG4sMqSgTf8onLkyQebD9SWdEqgEUSwwozKS)S6wfouuMFtmoZeocRl0hPckmPxw6imSW8YqHrkzow1DX3REL3MI9MunggQeYLQRZdMfWf1sENrPxvyMRHyUiqM8zOIc8xYjCZUUckvrHt6tWS2KJHHp2UMPRLKVy1a1WQFgE2bSKCn(uMgRpS(VOOMMBYEM8dnn3TUeyEU0FTU8DFpz)3wn(vrdzxGLb95Hs2Tp1OLXKA8n8MiDPXwl25P)FGxvUy7EYCdUiUomKL3DSlT3j2sGu34xSQZfri37vZDtDnYvfFwSqFdykpmqrw0ZQsMkRW(wj0gNgcJtsTDMDZn5l7M3BD06(iYImLvQYhNf(i8ZJ)hF(8J)WFQSAuV)gkTa5LswuiR)AeOv9if2PFOdMGaPSWDAcpxHs4tg9)rGvVxPe75GMLCyYNwfor9ODPtTLEwAOxF(1rKggS1o7rnRv1jcw22vS)GpglbrBLlZ6VVqQp17EpkthQMicEi2y8WtSW4O)Ej3)eMo)kOONKz9OHL9L6ip4xnRHtOrRaOVxDWm(798IXa7O4(SxKXxfi)f3kzRLtYfObmMHaVf1rXOTdt7yb0G5iZbMpCXfvwrhI6kfYPxaCKZIeQeLtj(abvd03mPkeLP2Ma9SQMxFPtdKk6TK20sOyVRqPBmsIHgUZn1idaD1Hlb7iR0oeYElGNOu1HSgq1MjYyN9UlQm)OQyky2K8ZE4Zvebe25iBrolyIED9SPdscghkA3rpgHyFEEA08SjlAFw)PgdsmdYDsx(gpahORpDQboUlBbDNn8j4FuK23t4j)T8xxM8GjxLwIhr(1oEGOGquYhM7cPfAsjs5btfjxWuqrOZ9jk5Hpu8UXQi8pVo2VPI8kaSovngOltmf014YFc(SafDxjIHfoHqQJmksHEJfS511kdMDLM9B3CO6lqkOmPqHq3RUEhye7NHKPEAhKJfyyq8gVGrGGXx4V3EAsRNikBLUl3tbAqJtMMWgJpiVHPzTkJNobsqq81U0BFFdVYIEFxD0ZOSrfSK)qiCbRrUbnC(WOMaOW44ML4Q8zY)asY8jbdQkIFQrkIZvne7smJotywfPMxXhO1bzUcqh1bKklEeYcpm(SA2lvxwj3AslECgsG7k4frvcP2)4aLAjuH3VIb5NiMlqa9lI9y5j)OZIgOQ(ZO0HcsxnjD3Z4OSNagDQ92h6yEEBKWUApBjQqjLntg6vB1wM)NxaHrWh6Kb7JZZ57IPA16MHruoJ(mQ0ylZvYh08MlQmx8F3Fr6mNkCNAdJhFNxX0Xkj1ARJue27vKOj))AAO54v5H9FLvINnNsi4AYJ79mmVamAnQsQ)qg4cxc)ViI0IFVESDM6opFNFYUH5p0EgTEEmrbMBKt0HZ2la3OLBcmw2qSPUFeeWBBaP6bIFiAEyNwZvTTQxSdouscllBiU6rVdTVzwgu)1i7(Hroi3bPmULesdLASeWKFnX529FPEgIf92WJFtk2WvRu(tZI0a5fIFh(7wjAwqYRlqoNUOl5IRzVkdOEwNXQ4AX57SZNBgBXqCDBQbael8NiKXxW)XfuAME3wxyeL9Vw43kbzrPjHDf)S4tNMjgAsydt5WPzrHyfEgHU3o0sYTRvteHcgLE8Ykvsae2zxlcaK(lLSQe0jQLwT3kfceei5(9o(scAht2wfLQSfLP3cb4JerkmiZzSOjYAqtP2kFpyLTfchljh)iU0yAXrzc7fa7bcddec343d667f3fb3a7d5ef40a213be0824435ed4cbbfdd98142f1331398b01b83827b9027827fe1ae1590286c1f2a1f18ad4d507abfe18dd0f20b86c1e2ebb9108add7fe440272b64168ab862dbd5f543e19080b0f38e14f1c708e00f2b0e7f2cca333c0547e57d8d6f42911bd86cde63f0df807dd551d2bd37c716a8f",
            'lang': 'zh-cn',
            'pt': '0',
            'client_type': 'web',
        }
        resp = requests.get(self.check_url, params=params, headers=self.headers, timeout=self.timeout)
        print(resp.text)

    def get_w_1(self, gt, challenge):
        """获取w加密参数"""
        with open('fullpage.9.0.7.js', encoding='utf-8') as f:
            return execjs.compile(f.read()).call('get_w', gt, challenge)

    def crack(self):
        """破解流程"""
        gt, challenge = self.get_gt_and_challenge()
        logger.info(f'注册成功：gt -> {gt}, challenge -> {challenge}')
        w = self.get_w_1(gt, challenge)
        logger.info(f'获取加密参数：w -> {w}')
        self.check_captcha_type(gt, challenge, w)


if __name__ == '__main__':
    c = SliderCracker()
    c.crack()
