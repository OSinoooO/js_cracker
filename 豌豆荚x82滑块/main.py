from playwright.sync_api import sync_playwright
import time


def get_track(distance):
    # 移动轨迹
    track = []
    # 当前位移
    current = 0
    # 减速阈值
    # mid = distance * 4 / 5
    # 计算间隔
    t = 2
    # 初速度
    v = 10
    while current < distance:
        # if current < mid:
        #     加速度为2
            # a = 4
        # else:
        #     加速度为-2
            # a = -3
        a = 5
        v0 = v
        # 当前速度
        v = v0 + a * t
        # 移动距离
        move = v0 * t + 1 / 2 * a * t * t
        # 当前位移
        current += move
        # 加入轨迹
        track.append(round(move))
    return track


with sync_playwright() as p:
    browser = p.chromium.launch(headless=True)
    context = browser.new_context()
    context.set_default_navigation_timeout(10 * 1000)
    context.set_default_timeout(10 * 1000)
    with open('stealth.min.js') as f:
        context.add_init_script(f.read())
    page = context.new_page()
    page.goto("https://www.wandoujia.com/apps/8089213")
    while True:
        while page.title() != '验证码拦截':
            page.reload()
        print(f'开始执行自动化验证步骤...')
        slider = page.wait_for_selector("//span[@id='nc_1_n1z']")
        slider_box = slider.bounding_box()

        # 验证之前模拟一下鼠标轨迹，提高验证通过率
        print(f'模拟鼠标轨迹')
        slider_title = page.wait_for_selector("//div[@class='warnning-text']")
        slider_title_box = slider_title.bounding_box()
        page.mouse.move(slider_title_box["x"] + slider_title_box["width"] * 0.4, slider_title_box["y"] + slider_title_box["height"] / 2, steps=20)
        page.mouse.down()
        page.mouse.move(slider_title_box["x"] + slider_title_box["width"] * 0.3, slider_title_box["y"] + slider_title_box["height"] / 2, steps=10)
        page.mouse.up()
        time.sleep(0.5)

        # 拖动滑块
        print("拖动滑块")
        page.mouse.move(slider_box["x"] + slider_box["width"] / 2, slider_box["y"] + slider_box["height"] / 2 - 1, steps=1)
        page.mouse.down()
        x = slider_box["x"] + slider_box["width"] / 2
        tracks = get_track(300)
        for track in tracks:
            page.mouse.move(x + track, -1, steps=10)
            x += track
        page.mouse.up()

        try:
            # 等待一秒钟看是否会出现“刷新”提示
            print('验证中')
            refresh_btn = page.wait_for_selector("//a[@id='nc_1_refresh1']", timeout=3000)
        except Exception:
            # page.screenshot(path='1.png')
            break

        print('验证失败，准备重试...\n' + '=' * 50)
        page.reload()

    cookies = {c['name']: c['value'] for c in context.cookies()}
    print(f"验证成功 -> {cookies}")
    browser.close()

