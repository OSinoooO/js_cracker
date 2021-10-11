import requests
import execjs


class LoginSDK:

    def __init__(self):
        self.account = '13364002546'
        self.password = '123456'

    def encrypt_password(self, password):
        """密码加密"""
        js_code = """
        CryptoJS = require('crypto-js');
        function sdk (e) {
            var a = CryptoJS.MD5("login.189.cn");
            var c = CryptoJS.enc.Utf8.parse(a);
            var b = CryptoJS.enc.Utf8.parse("1234567812345678");
            var d = CryptoJS.AES.encrypt(e, c, {
                iv: b
            });
            return d + ""
        }
        """
        return execjs.compile(js_code).call('sdk', password)

    def run(self):
        ret = self.encrypt_password(self.password)
        print(ret)


if __name__ == '__main__':
    sdk = LoginSDK()
    sdk.run()
