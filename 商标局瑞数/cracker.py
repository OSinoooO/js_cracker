import requests
import execjs
import re
import json
from parsel import Selector


class SDK:
    """
    本案例使用sbj瑞数（5代）测试，2021-11-24测试可用。
    完成了cookies加密破解（已可用于实践），对url后缀研究暂缓。
    暂不支持并发，并发需要生成对应的home_page.html文件
    """

    def __init__(self) -> None:
        self.ts_page = 'http://wsgg.sbj.cnipa.gov.cn:9080/c5rxzYrjRT2h/cCdzB9ZjDFks.9887446.js'
        self.home_page = 'http://wsgg.sbj.cnipa.gov.cn:9080/tmann/annInfoView/annSearch.html?annNum=1768'
        self.check_url = 'http://wsgg.sbj.cnipa.gov.cn:9080/tmann/annInfoView/annSearchDG.html'

        headers = {
            "Accept": "*/*",
            "Accept-Encoding": "gzip, deflate",
            "Accept-Language": "zh-CN,zh;q=0.9,ru;q=0.8",
            "Cache-Control": "no-cache",
            "Connection": "keep-alive",
            "Host": "wsgg.sbj.cnipa.gov.cn:9080",
            "Pragma": "no-cache",
            "Referer": self.home_page,
            "User-Agent": "Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/95.0.4638.54 Safari/537.36"
        }
        self.session = requests.Session()
        self.session.headers = headers
        self.session
        self.req_timeout = 60

    def req(self, url, resp_text=True):
        """请求并获取页面数据"""
        resp = self.session.get(url, timeout=self.req_timeout)
        return resp.text if resp_text else resp

    def extract_js_code_1(self, data):
        """提取第一层动态js"""
        sel = Selector(data)
        code = sel.xpath('//script/text()').get()
        if code:
            # 对code做处理，方便提取第二层动态js及动态ts对象
            # return re.sub(r'\S{14}\[13\]\]\(.*?,(.*?)\);', r'window.js_code_2=\1;throw Error("ok");', code, re.S)
            return re.sub(r'\S{14}\[13\]\]\(.*?,(.*?)\);', r'eval(\1);throw Error("ok");', code, re.S)
        raise RuntimeError(f'未能提取到第一层动态js')

    def eval_code(self, code_1, ts_code):
        """提取第二层动态js"""
        with open('./sdk.js') as f:
            code = f.read() % (ts_code, json.dumps(code_1, ensure_ascii=False))
        with open('test.js', 'w') as f:
            f.write(code)
        result = execjs.compile(code).call('sdk')
        return result['cookie'], result['page_url'].split('?')[-1]

    def check_cookies(self, params, cookies, page):
        """检查cookies有效性"""
        self.session.cookies.update(cookies)
        data = {
            "page": str(page),
            "rows": "20",
            "annNum": "1768",
            "annType": "",
            "tmType": "",
            "coowner": "",
            "recUserName": "",
            "allowUserName": "",
            "byAllowUserName": "",
            "appId": "",
            "appIdZhiquan": "",
            "bfchangedAgengedName": "",
            "changeLastName": "",
            "transferUserName": "",
            "acceptUserName": "",
            "regName": "",
            "tmName": "",
            "intCls": "",
            "fileType": "",
            "totalYOrN": "false",
            "appDateBegin": "",
            "appDateEnd": "",
            "agentName": ""
        }
        # url = self.check_url + '?' + params  # 这个param没有提取对，少了一节，128位数组超过了20位不搞了- -
        url = self.check_url
        resp = self.session.post(url, data=data, timeout=self.req_timeout)
        if resp.status_code == 200:
            print(f'完成第【{page}】页采集：{resp.text}')
            return resp.text
        else:
            print('gg!!!')
            return 'gg!!!'

    def crack(self, page=1):
        # 请求并获取动态ts对象生成代码
        ts_gen_code = self.req(self.ts_page)

        # 请求并获取homePage数据
        home_page_code = self.req(self.home_page)
        with open('./home_page.html', 'w') as f:
            f.write(home_page_code)
        # 提取第一层动态js
        js_code_1 = self.extract_js_code_1(home_page_code)

        # 执行动态js获取cookie
        cookies, params = self.eval_code(js_code_1, ts_gen_code)
        cookies = {i.split('=')[0]: i.split('=')[1]for i in cookies.split('; ')}
        self.check_cookies(params, cookies, page=page)
        return cookies


if __name__ == '__main__':
    sdk = SDK()
    sdk.crack(page)
