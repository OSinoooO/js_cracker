import requests
import execjs
import json
import re
import urllib.parse

headers = {
    "authority": "api.theone.art",
    "pragma": "no-cache",
    "cache-control": "no-cache",
    "sec-ch-ua": "\"Google Chrome\";v=\"95\", \"Chromium\";v=\"95\", \";Not A Brand\";v=\"99\"",
    "accept": "application/json, text/plain, */*",
    "sec-ch-ua-mobile": "?0",
    "user-agent": "Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/95.0.4638.54 Safari/537.36",
    "sec-ch-ua-platform": "\"Linux\"",
    "content-type": "application/json;charset=UTF-8",
    "origin": "https://theone.art",
    "sec-fetch-site": "same-site",
    "sec-fetch-mode": "cors",
    "sec-fetch-dest": "empty",
    "referer": "https://theone.art/",
    "accept-language": "zh-CN,zh;q=0.9,ru;q=0.8"
}

with open('sdk.js') as f:
    js_executor = execjs.compile(f.read())
secret_key = '4tBlCLWFZ3eD93CvDE2lpw=='  # 密钥
session = requests.Session()


def get_sig(data):
    return js_executor.call('encrypt', data, secret_key)


def req_for_key():
    url = 'https://api.theone.art/base/api/key/get'
    resp = session.get(url, headers=headers)
    assert resp.status_code == 200
    return resp.json()


def req_detail():
    encrypt_data = js_executor.call('decrypt', req_for_key()['data'], '5opkytHOggKj5utjZOgszg==')
    sum = js_executor.call('get_sum', re.search(r'js=(.*;),', encrypt_data).group(1))
    eid = re.search(r'id=(.*)}', encrypt_data).group(1)
    encrypt_data = {'id': eid, 'sum': sum}
    sig = get_sig(json.dumps(encrypt_data, ensure_ascii=False))
    url = "https://api.theone.art/goods/api/saleRecord/list"
    headers['sig'] = urllib.parse.quote_plus(sig)
    data = {
        "authorId": None,
        "chainContract": None,
        "commodityCategoryId": None,
        "commodityId": None,
        "highPrice": "",
        "lowPrice": "",
        "pageCount": 1,
        "pageSize": 20,
        "seriesWorks": None,
        "seriesWorksId": None,
        "sort": None,
        "statusSell": 1,
        "topicId": None,
        "typeMarket": None,
        "sig": sig
    }
    response = session.post(url, headers=headers, json=data)

    print(response.json())


if __name__ == '__main__':
    req_detail()