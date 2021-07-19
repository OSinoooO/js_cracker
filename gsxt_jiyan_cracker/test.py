from playwright.sync_api import sync_playwright
import time


driver = sync_playwright().start().chromium.launch(headless=False, proxy={'server': 'http://127.0.0.1:8080'})
context = driver.new_context()
context.set_default_timeout(120000)
with open('stealth.min.js', encoding='utf-8') as f:
    context.add_init_script(f.read())
page = context.new_page()
# page.route(
#     'http://static.geetest.com/static/js/fullpage.9.0.7.js',
#     lambda route: route.fulfill(path="1.js")
# )
page.goto('http://www.gsxt.gov.cn/index.html')
input()
