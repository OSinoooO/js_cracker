var CryptoJS = require('crypto-js');
var window = {};
window.deciphering = function(e, t) {
    t = t || 32;
    for (var n = "ABCDEFGHJKMNPQRSTWXYZabcdefhijkmnprstwxyz2345678", o = n.length, i = 0; i < t; i++)
        n.charAt(Math.floor(Math.random() * o));
    return e
}

function get_sum(funcStr) {
    return eval(funcStr)
}

/**
 * AES加密方法
 * @param content 要加密的字符串
 * @param secretKey 密钥
 * @returns {string} 加密结果
 */
function encrypt(content, secretKey) {
    var key = CryptoJS.enc.Base64.parse(secretKey);
    var srcs = CryptoJS.enc.Utf8.parse(content);
    var encrypted = CryptoJS.AES.encrypt(srcs, key, {
        mode: CryptoJS.mode.ECB,
        padding: CryptoJS.pad.Pkcs7
    });
    return encrypted.toString();
}

/**
 * AES解密方法
 * @param encryptStr 要解密的字符串
 * @param secretKey 密钥
 * @returns {string} 解密结果
 */
function decrypt(encryptStr, secretKey) {
    let key = CryptoJS.enc.Base64.parse(secretKey);
    let decrypt = CryptoJS.AES.decrypt(encryptStr, key, {
        mode: CryptoJS.mode.ECB,
        padding: CryptoJS.pad.Pkcs7
    });
    return CryptoJS.enc.Utf8.stringify(decrypt).toString();
}

// 加密
// var key = "4tBlCLWFZ3eD93CvDE2lpw==";  // 秘钥，必须由16位字符组成
// var data = '{"id":"44442092aa97cf29e1e5e1c66da074dc","sum":15264327540}';
// var result = encrypt(data, key);
// console.log(result);

// 解密
var key = "5opkytHOggKj5utjZOgszg==";
var data = 'truiLeKm7AKyuie+33QCYe1pjMsRUwEafbBMjLsUpm8wkGCIJxBX7TRSl7XZVJ3hlWlWSZgweEA7YPdkyK4va9NbX7sITRPRIMVM7i3k90QJFSaQ0dI+a1fpz7cCFPHPZ/k/KLoV4/18OwJUlWT8PAgNhykqRU2nswHeBolSwWdTHpAStYjGZAn4Q8eQm3KJ5NbXf2ojliM3iL4tLXaNnQ==';
var result = decrypt(data, key);
console.log(result);

// var func = '(function(){let a=545;let b=4;let x=237;let y=712;let result=x*a - y*b ;return window.deciphering(result)})();'
// var ret = eval(func);
// console.log(ret);