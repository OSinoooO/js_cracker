/* ******************补环境 start****************** */
var _window = require('./jsdom_impl.js').window;

function Window() {
    this.window = _window;
}

var { window } = new Window();
__filename = undefined;
__dirname = undefined;
window._clearInterval = window.clearInterval;

// 置空setTimeout，防止后续的无限debug
setTimeout = function () {};
setTimeout.toString = () => {return "function setTimeout() { [native code] }"}
window.setTimeout = setTimeout;

setInterval.toString = () => {return "function setInterval() { [native code] }"}

window.webkitRequestFileSystem = function () { };
window.webkitRequestFileSystem.toString = () => { return 'function webkitRequestFileSystem() { [native code] }' };

var Database = function () { this.version = '' };
window.openDatabase = function () { return new Database() };

window.navigator.getBattery = function () { return { then: function (val) { return val } } };
window.navigator.getBattery.toString = () => { return 'function getBattery() { [native code] }' };

window.navigator.webkitPersistentStorage = {};
Object.defineProperties(window.navigator, {
    'platform': { value: 'Linux x86_64', writable: true }
});
window.navigator.maxTouchPoints = 0;
window.navigator.connection = {
    "downlink": 1.3,
    "effectiveType": "4g",
    "onchange": null,
    "rtt": 150,
    "saveData": false
};
window.indexedDB = {};
window.chrome = {};

window.navigator.webdriver = false;
window.clientInformation = window.navigator;

window.document.exitFullscreen = () => { };

window.TEMPORARY = 0;

window.name = '';

window.localStorage.setItem('$_YWTU', 'jfFoISwbIgaRc.N12BzpU9oQyPbGn7fKIM7GSKoc1VQ');
window.localStorage.setItem('$_f0', "lzIOMtt2awuxckGAlz6seVKF9_L");
window.localStorage.setItem('$_f1', "TVjYnQRrY_AWDAstnKP_Nilk3cQ");
window.localStorage.setItem('$_ff', "_16WtzmEmyvsAJvYRun_nG4WJe_gJdJdB53tptazmnRFBhywD3oSBILKQZ92VhlY");
window.localStorage.setItem('$_fh1', "2m8sz8FDdMceZ1GGDLu.cfrB427");
window.localStorage.setItem('$_nd', "39170");
window.localStorage.setItem('$_cDro', "WOE");
window.localStorage.setItem('__#classType', "localStorage");

window.sessionStorage.setItem('$_YWTU', window.localStorage.getItem('$_YWTU'));
window.sessionStorage.setItem('$_cDro', window.localStorage.getItem('$_cDro'));

// 第一处传参，补$_ts对象
%s;

window.$_ts = $_ts;
document = window.document;
Object.freeze(window.navigator);
/* ******************补环境 end****************** */

// 第二处传参，第一层动态js，用json格式化一下
var code_1 = %s;

function sdk() {
    try {
        eval(code_1);
    } catch(e) {
        var xmlreq = new window.XMLHttpRequest();
        xmlreq.open("POST", "/annSearchDG.html", true);
        page_url = xmlreq[Object.getOwnPropertySymbols(xmlreq)[0]].flag.uri;
        return {'code': window.js_code_2, 'ts': window.$_ts, 'cookie': document.cookie, 'page_url': page_url};
    }
    return '大问题！！'
}