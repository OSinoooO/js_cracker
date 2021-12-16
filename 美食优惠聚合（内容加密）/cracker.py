import requests
import os

url = 'https://api.waitwaitpay.com/api/vendors/nearby?latitude=30.54868&longitude=104.05906&page=1&request_id=807578ff-3d6b-418e-a8ce-820ff91211c9&type=all&with_vouchers=false'
headers = {
    'UserAgent': 'Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/95.0.4638.54 Safari/537.36'
}
resp = requests.get(url, headers=headers)

content = resp.text.replace('\n', '')
ret = os.popen(f'node ./sdk.js {content}').readlines()[-1].strip()
print(ret)