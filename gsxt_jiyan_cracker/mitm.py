import mitmproxy.http
from mitmproxy import ctx


class Counter:

    def response(self, flow: mitmproxy.http.HTTPFlow):
        if flow.request.url == 'http://static.geetest.com/static/js/fullpage.9.0.7.js':
            with open('1.js', encoding='utf-8') as f:
                flow.response.set_text(f.read())
            ctx.log.info('=' * 50 + f'get:{flow.request.url}' + "=" * 50)


addons = [
    Counter()
]