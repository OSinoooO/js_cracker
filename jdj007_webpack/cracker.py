import requests
import execjs


url = 'https://www.jdj007.com/api/match/list'

headers = {
  'authority': 'www.jdj007.com',
  'sec-ch-ua': '"Chromium";v="92", " Not A;Brand";v="99", "Google Chrome";v="92"',
  'accept': 'application/json, text/plain, */*',
  'x-requested-with': 'XMLHttpRequest',
  'sec-ch-ua-mobile': '?0',
  'user-agent': 'Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/92.0.4515.131 Safari/537.36',
  'sec-fetch-site': 'same-origin',
  'sec-fetch-mode': 'cors',
  'sec-fetch-dest': 'empty',
  'referer': 'https://www.jdj007.com/schedule?gameType=1',
  'accept-language': 'zh-CN,zh;q=0.9'
}

with open('js/sign_cracker.js') as f:
    timestamp, sign = execjs.compile(f.read()).call('get_sign')

params = {
    'gameType': '1',
    'beginTime': '1629993600000',
    'endTime': '1630079999999',
    'sortTypes[]': '1',
    'sortTypes[]': '23',
    'isWithoutBattle': 'true',
    'timestamp': timestamp,
    'sign': sign,
}
resp = requests.get(url, headers=headers, params=params)
print(resp.text)