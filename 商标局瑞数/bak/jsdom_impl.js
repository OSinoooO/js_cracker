var jsdom = require('jsdom');
var fs = require('fs');
var resourceLoader = new jsdom.ResourceLoader({
    appVersion: "5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/95.0.4638.54 Safari/537.36",
    userAgent: "Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/95.0.4638.54 Safari/537.36",
    platform: "Linux x86_64",
});
var {JSDOM} = jsdom;
let sourceCode = fs.readFileSync('./home_page.html', {encoding: "utf-8"});
var {window} = new JSDOM(
    sourceCode,
    {
        url: 'http://wsgg.sbj.cnipa.gov.cn:9080/tmann/annInfoView/homePage.html',
        resources: resourceLoader
    })


module.exports = {
    window: window
}