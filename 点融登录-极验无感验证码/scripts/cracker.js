window = global;
window.document = {
    body: "<body></body>",
    head: "<head></head>",
    documentElement: "<html></html>",
    createElement: (v) => {
        return v === "canvas" ? Canvas : "<" + v + "></" + v + ">"
    },
    compatMode: "CSS1Compat"
};
Canvas = {
    toString: () => {
        return "<canvas></canvas>"
    },
    getContext: (v) => {
        return {}
    }
};
window.location = {
    protocol: "https:"
};
window.navigator = {
    userAgent: "Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/95.0.4638.54 Safari/537.36",
    hardwareConcurrency: 12,
    language: 'zh-CN',
    languages: ["zh-CN", "zh", "ru"],
    cookieEnabled: true,
    onLine: true,
    platform: 'Linux x86_64',
    doNotTrack: null
};
window.devicePixelRatio = 1;
window.innerWidth = 930;
window.innerHeight = 910;
window.outerWidth = 1920;
window.outerHeight = 1020;
window.screenLeft = 0;
window.screenTop = 0;
window.screen = {
    colorDepth: 24,
    width: 1920,
    height: 1080,
    availWidth: 1920,
    availHeight: 1020,
    availLeft: 0,
    availTop: 0,
};
window.localStorage = {};
window.sessionStorage = {};
window.indexedDB = {};
const now = new Date().getTime();
window['performance'] = {
    timing: {
        "connectStart": now,
        "navigationStart": now - 6,
        "loadEventEnd": now + 2793,
        "domLoading": now + 398,
        "secureConnectionStart": now,
        "fetchStart": now - 6,
        "domContentLoadedEventStart": now + 565,
        "responseStart": now + 62,
        "responseEnd": now + 65,
        "domInteractive": now + 565,
        "domainLookupEnd": now - 6,
        "redirectStart": 0,
        "requestStart": now + 31,
        "unloadEventEnd": now + 368,
        "unloadEventStart": now + 301,
        "domComplete": now + 2792,
        "domainLookupStart": now - 6,
        "loadEventStart": now + 2792,
        "domContentLoadedEventEnd": now + 565,
        "redirectEnd": 0,
        "connectEnd": now + 31
    }
};

Config = {
    "gt": "d0c564b676a464712f435ff74c480b4f",
    "challenge": "d3f0ead19f600ef509ad48a993fa263f",
    "offline": false,
    "new_captcha": true,
    "protocol": "https://",
    "type": "fullpage",
    "static_servers": [
        "static.geetest.com/",
        "dn-staticdown.qbox.me/"
    ],
    "voice": "/static/js/voice.1.2.0.js",
    "click": "/static/js/click.3.0.2.js",
    "beeline": "/static/js/beeline.1.0.1.js",
    "pencil": "/static/js/pencil.1.0.3.js",
    "fullpage": "/static/js/fullpage.9.0.9.js",
    "slide": "/static/js/slide.7.8.6.js",
    "geetest": "/static/js/geetest.6.0.9.js",
    "aspect_radio": {
        "slide": 103,
        "click": 128,
        "voice": 128,
        "pencil": 128,
        "beeline": 50
    }
}
Config.prototype = {
    "api_server": "api.geetest.com",
    "protocol": "http://",
    "type_path": "/gettype.php",
    "fallback_config": {
        "slide": {
            "static_servers": [
                "static.geetest.com",
                "dn-staticdown.qbox.me"
            ],
            "type": "slide",
            "slide": "/static/js/geetest.0.0.0.js"
        },
        "fullpage": {
            "static_servers": [
                "static.geetest.com",
                "dn-staticdown.qbox.me"
            ],
            "type": "fullpage",
            "fullpage": "/static/js/fullpage.0.0.0.js"
        },
        "_extend": function () {
        },
        "_get_fallback_config": function () {
        }
    }
}

var O = window["document"],
    l = window["location"],
    h = O["body"] || O["getElementsByTagName"]("body")[0],
    f = O["head"] || O["getElementsByTagName"]("head")[0],
    m = O["documentElement"] || h,
    g = l["protocol"] + "//",
    pe = window["navigator"],
    w = (t = O["createElement"]("canvas"),
        n = t["getContext"] && t["getContext"]("2d"),
        r = /msie/i["test"](pe["userAgent"]),
    !n && r),
    x = /Mobi/i["test"](pe["userAgent"]),
    y = /msie 6\.0/i["test"](pe["userAgent"]),
    b = /msie 7\.0/i["test"](pe["userAgent"]),
    E = false;
var I = "Network Error",
F = "geetest_";
var De = "init"
  , Oe = "ready"
  , Le = "start_detect"
  , Ne = "detect"
  , Pe = "wait_compute"
  , Fe = "start_compute"
  , Ie = "compute_1"
  , Be = "compute_2"
  , je = "radar_success"
  , He = "radar_error"
  , Ge = "radar_click"
  , Ue = "radar_click_ready"
  , Ve = "radar_click_hide"
  , Xe = "success"
  , qe = "error"
  , ze = "not_compatible"
  , We = "close"
  , $e = "back",
    Ye = (S = function() {
        return !!h && ("transition"in h["style"] || "webkitTransition"in h["style"] || "mozTransition"in h["style"] || "msTransition"in h["style"])
    }, function(e) {
        var t = e["i18n_labels"]
          , n = {
            "zh-tw": {
                "ready": "\u8f15\u89f8\u6309\u9215\u9032\u884c\u9a57\u8b49",
                "fullpage": "\u667a\u6167\u6aa2\u67e5\u4e2d",
                "success": "\u9a57\u8b49\u6210\u529f",
                "reset": "\u8acb\u8f15\u89f8\u91cd\u8a66",
                "next": "\u6b63\u5728\u8f09\u5165\u9a57\u8b49",
                "next_ready": "\u8acb\u5b8c\u6210\u9a57\u8b49",
                "goto_homepage": "\u662f\u5426\u524d\u5f80\u9a57\u8b49\u670d\u52d9 Geetest \u5b98\u7db2",
                "goto_confirm": "\u524d\u5f80",
                "goto_cancel": "\u53d6\u6d88",
                "loading_content": "\u667a\u6167\u9a57\u8b49\u6aa2\u67e5\u4e2d",
                "success_title": "\u5df2\u9a57\u8b49",
                "error_title": "\u7db2\u8def\u903e\u6642",
                "copyright": "Geetest",
                "refresh_page": "\u9801\u9762\u51fa\u73fe\u932f\u8aa4\u5566\uff01\u6b32\u7e7c\u7e8c\u64cd\u4f5c\uff0c\u8acb\u91cd\u65b0\u6574\u7406\u6b64\u9801\u9762\u3002",
                "error_content": "\u8acb\u8f15\u89f8\u91cd\u8a66",
                "error": "\u7db2\u8def\u7570\u5e38"
            },
            "ja": {
                "ready": "\u30af\u30ea\u30c3\u30af\u3057\u3066\u691c\u8a3c",
                "fullpage": "\u691c\u8a3c\u4e2d",
                "success": "\u5408\u683c",
                "reset": "\u518d\u8a66\u884c",
                "next": "\u8aad\u307f\u8fbc\u307f\u4e2d",
                "next_ready": "\u672a\u5b8c\u4e86",
                "goto_homepage": "Geetest\u306e\u516c\u5f0f\u30a6\u30a7\u30d6\u30b5\u30a4\u30c8\u306b\u79fb\u52d5\u3057\u307e\u3059\u304b\uff1f",
                "goto_confirm": "OK",
                "goto_cancel": "\u30ad\u30e3\u30f3\u30bb\u30eb",
                "loading_content": "\u691c\u8a3c\u4e2d",
                "success_title": "\u5408\u683c",
                "error_title": "\u30bf\u30a4\u30e0\u30a2\u30a6\u30c8",
                "copyright": "Geetest",
                "refresh_page": "\u30a8\u30e9\u30fc\u3002\u691c\u8a3c\u3092\u7d9a\u884c\u3059\u308b\u306b\u306f\u3001\u3053\u306e\u30da\u30fc\u30b8\u3092\u66f4\u65b0\u3057\u3066\u304f\u3060\u3055\u3044\u3002",
                "error_content": "\u518d\u8a66\u884c",
                "error": "\u30a8\u30e9\u30fc"
            },
            "ko": {
                "ready": "\ud074\ub9ad\ud558\uc5ec \ud655\uc778",
                "fullpage": "\ud655\uc778 \uc911",
                "success": "\ud1b5\uacfc\ud588\uc2b5\ub2c8\ub2e4",
                "reset": "\uc7ac\uc2dc\ub3c4",
                "next": "\ub85c\ub529 \uc911",
                "next_ready": "\ubbf8\uc644\ub8cc",
                "goto_homepage": "\uacf5\uc2dd Geetest \uc6f9\uc0ac\uc774\ud2b8\ub85c \uc774\ub3d9\ud558\uc2dc\uaca0\uc2b5\ub2c8\uae4c?",
                "goto_confirm": "\ud655\uc778",
                "goto_cancel": "\ucde8\uc18c",
                "loading_content": "\ud655\uc778 \uc911",
                "success_title": "\ud1b5\uacfc\ud588\uc2b5\ub2c8\ub2e4",
                "error_title": "\uc2dc\uac04 \ub9cc\ub8cc",
                "copyright": "Geetest",
                "refresh_page": "\ubb38\uc81c\uac00 \ubc1c\uc0dd\ud588\uc2b5\ub2c8\ub2e4. \ud655\uc778\uc744 \uacc4\uc18d\ud558\ub824\uba74 \uc774 \ud398\uc774\uc9c0\ub97c \uc0c8\ub85c \uace0\uce68\ud558\uc2ed\uc2dc\uc624.",
                "error_content": "\uc7ac\uc2dc\ub3c4",
                "error": "\uc624\ub958"
            },
            "id": {
                "ready": "Klik untuk memverifikasi",
                "fullpage": "Memverifikasi",
                "success": "Anda lulus",
                "reset": "Coba lagi",
                "next": "Memuat",
                "next_ready": "Belum selesai",
                "goto_homepage": "Buka situs web Geetest resmi?",
                "goto_confirm": "OK",
                "goto_cancel": "Batal",
                "loading_content": "Memverifikasi",
                "success_title": "Anda lulus",
                "error_title": "Waktu tunggu habis",
                "copyright": "Geetest",
                "refresh_page": "Ada masalah. Segarkan halaman ini untuk melanjutkan verifikasi.",
                "error_content": "Coba lagi",
                "error": "Kesalahan"
            },
            "ru": {
                "ready": "\u041d\u0430\u0436\u043c\u0438\u0442\u0435 \u0434\u043b\u044f \u043f\u043e\u0434\u0442\u0432\u0435\u0440\u0436\u0434\u0435\u043d\u0438\u044f",
                "fullpage": "\u041f\u043e\u0434\u0442\u0432\u0435\u0440\u0436\u0434\u0435\u043d\u0438\u0435",
                "success": "\u041f\u043e\u0434\u0442\u0432\u0435\u0440\u0436\u0434\u0435\u043d\u043e",
                "reset": "\u041f\u043e\u0432\u0442\u043e\u0440",
                "next": "\u0417\u0430\u0433\u0440\u0443\u0437\u043a\u0430",
                "next_ready": "\u041d\u0435 \u0432\u044b\u043f\u043e\u043b\u043d\u0435\u043d\u043e",
                "goto_homepage": "\u041f\u0435\u0440\u0435\u0439\u0442\u0438 \u043d\u0430 \u043e\u0444\u0438\u0446\u0438\u0430\u043b\u044c\u043d\u044b\u0439 \u0432\u0435\u0431-\u0441\u0430\u0439\u0442 Geetest?",
                "goto_confirm": "OK",
                "goto_cancel": "\u041e\u0442\u043c\u0435\u043d\u0430",
                "loading_content": "\u041f\u043e\u0434\u0442\u0432\u0435\u0440\u0436\u0434\u0435\u043d\u0438\u0435",
                "success_title": "\u041f\u043e\u0434\u0442\u0432\u0435\u0440\u0436\u0434\u0435\u043d\u043e",
                "error_title": "\u0422\u0430\u0439\u043c-\u0430\u0443\u0442",
                "copyright": "Geetest",
                "refresh_page": "\u041e\u0448\u0438\u0431\u043a\u0430. \u041e\u0431\u043d\u043e\u0432\u0438\u0442\u0435 \u044d\u0442\u0443 \u0441\u0442\u0440\u0430\u043d\u0438\u0446\u0443 \u0434\u043b\u044f \u0437\u0430\u0432\u0435\u0440\u0448\u0435\u043d\u0438\u044f \u043f\u0440\u043e\u0446\u0435\u0441\u0441\u0430 \u043f\u043e\u0434\u0442\u0432\u0435\u0440\u0436\u0434\u0435\u043d\u0438\u044f.",
                "error_content": "\u041f\u043e\u0432\u0442\u043e\u0440",
                "error": "\u041e\u0448\u0438\u0431\u043a\u0430"
            },
            "ar": {
                "ready": "\u0627\u0646\u0642\u0631 \u0644\u0625\u062a\u0645\u0627\u0645 \u0627\u0644\u062a\u062d\u0642\u0642",
                "fullpage": "\u062c\u0627\u0631\u0650 \u0627\u0644\u062a\u062d\u0642\u0642",
                "success": "\u0623\u0643\u0645\u0644\u062a \u0627\u0644\u0639\u0645\u0644\u064a\u0629 \u0628\u0646\u062c\u0627\u062d",
                "reset": "\u0625\u0639\u0627\u062f\u0629 \u0627\u0644\u0645\u062d\u0627\u0648\u0644\u0629",
                "next": "\u062c\u0627\u0631\u0650 \u0627\u0644\u062a\u062d\u0642\u0642",
                "next_ready": "\u063a\u064a\u0631 \u0645\u0643\u062a\u0645\u0644",
                "goto_homepage": "\u0647\u0644 \u062a\u0631\u064a\u062f \u0627\u0644\u0627\u0646\u062a\u0642\u0627\u0644 \u0625\u0644\u0649 \u0645\u0648\u0642\u0639 Geetest \u0627\u0644\u0631\u0633\u0645\u064a\u061f",
                "goto_confirm": "\u0645\u0648\u0627\u0641\u0642",
                "goto_cancel": "\u0625\u0644\u063a\u0627\u0621",
                "loading_content": "\u062c\u0627\u0631\u064d \u0627\u0644\u062a\u062d\u0642\u0642",
                "success_title": "\u0623\u0643\u0645\u0644\u062a \u0627\u0644\u0639\u0645\u0644\u064a\u0629 \u0628\u0646\u062c\u0627\u062d",
                "error_title": "\u0627\u0646\u062a\u0647\u062a \u0627\u0644\u0645\u0647\u0644\u0629",
                "copyright": "Geetest",
                "refresh_page": "\u062d\u062f\u062b\u062a \u0645\u0634\u0643\u0644\u0629 \u0645\u0627. \u0642\u0645 \u0628\u062a\u062d\u062f\u064a\u062b \u0645\u062d\u062a\u0648\u0649 \u0627\u0644\u0635\u0641\u062d\u0629 \u0644\u0645\u062a\u0627\u0628\u0639\u0629 \u0639\u0645\u0644\u064a\u0629 \u0627\u0644\u062a\u062d\u0642\u0642.",
                "error_content": "\u0625\u0639\u0627\u062f\u0629 \u0627\u0644\u0645\u062d\u0627\u0648\u0644\u0629",
                "error": "\u062e\u0637\u0623"
            },
            "es": {
                "ready": "Hacer clic para comprobar",
                "fullpage": "Comprobando",
                "success": "Aprobado",
                "reset": "Reintentar",
                "next": "Cargando",
                "next_ready": "Sin completar",
                "goto_homepage": "\u00bfIr al sitio web oficial de Geetest?",
                "goto_confirm": "Aceptar",
                "goto_cancel": "Cancelar",
                "loading_content": "Comprobando",
                "success_title": "Aprobado",
                "error_title": "Fin del tiempo de espera",
                "copyright": "Geetest",
                "refresh_page": "Se ha producido un error. Actualice esta p\u00e1gina para continuar con la comprobaci\u00f3n.",
                "error_content": "Reintentar",
                "error": "Error"
            },
            "pt-pt": {
                "ready": "Clique para verificar",
                "fullpage": "A verificar",
                "success": "Aprovado",
                "reset": "Tentar novamente",
                "next": "A carregar",
                "next_ready": "Incompleto",
                "goto_homepage": "Aceder ao website oficial do Geetest?",
                "goto_confirm": "OK",
                "goto_cancel": "Cancelar",
                "loading_content": "A verificar",
                "success_title": "Aprovado",
                "error_title": "Tempo limite excedido",
                "copyright": "Geetest",
                "refresh_page": "Ocorreu um erro. Atualize esta p\u00e1gina para continuar a verificar.",
                "error_content": "Tentar novamente",
                "error": "Erro"
            },
            "fr": {
                "ready": "Cliquer pour v\u00e9rifier",
                "fullpage": "V\u00e9rification en cours.",
                "success": "Vous avez r\u00e9ussi",
                "reset": "R\u00e9essayer",
                "next": "Chargement en cours",
                "next_ready": "Incomplet",
                "goto_homepage": "Aller au site Internet officiel Geetest ?",
                "goto_confirm": "OK",
                "goto_cancel": "Annuler",
                "loading_content": "V\u00e9rification en cours.",
                "success_title": "Vous avez r\u00e9ussi",
                "error_title": "D\u00e9lai expir\u00e9",
                "copyright": "Geetest",
                "refresh_page": "Un probl\u00e8me est survenu. Veuillez rafra\u00eechir cette page pour continuer la v\u00e9rification.",
                "error_content": "R\u00e9essayer",
                "error": "Erreur"
            },
            "$_BBn": {
                "ready": "Klicken zum \u00dcberpr\u00fcfen",
                "fullpage": "\u00dcberpr\u00fcfung",
                "success": "Bestanden",
                "reset": "Erneut versuchen",
                "next": "Wird geladen\u2026",
                "next_ready": "Nicht abgeschlossen",
                "goto_homepage": "Zur offiziellen Geetest Website navigieren?",
                "goto_confirm": "OK",
                "goto_cancel": "Abbrechen",
                "loading_content": "\u00dcberpr\u00fcfung",
                "success_title": "Bestanden",
                "error_title": "Zeit\u00fcberschreitung",
                "copyright": "Geetest",
                "refresh_page": "Etwas ist schiefgelaufen. Seite aktualisieren, um die \u00dcberpr\u00fcfung fortzusetzen.",
                "error_content": "Erneut versuchen",
                "error": "Fehler"
            },
            "zh-cn": {
                "ready": "\u70b9\u51fb\u6309\u94ae\u8fdb\u884c\u9a8c\u8bc1",
                "fullpage": "\u667a\u80fd\u68c0\u6d4b\u4e2d",
                "success": "\u9a8c\u8bc1\u6210\u529f",
                "reset": "\u8bf7\u70b9\u51fb\u91cd\u8bd5",
                "next": "\u6b63\u5728\u52a0\u8f7d\u9a8c\u8bc1",
                "next_ready": "\u8bf7\u5b8c\u6210\u9a8c\u8bc1",
                "goto_homepage": "\u662f\u5426\u524d\u5f80\u9a8c\u8bc1\u670d\u52a1Geetest\u5b98\u7f51\uff1f",
                "goto_confirm": "\u524d\u5f80",
                "goto_cancel": "\u53d6\u6d88",
                "loading_content": "\u667a\u80fd\u9a8c\u8bc1\u68c0\u6d4b\u4e2d",
                "success_title": "\u901a\u8fc7\u9a8c\u8bc1",
                "error_title": "\u7f51\u7edc\u8d85\u65f6",
                "copyright": "\u7531\u6781\u9a8c\u63d0\u4f9b\u6280\u672f\u652f\u6301",
                "refresh_page": "\u9875\u9762\u51fa\u73b0\u9519\u8bef\u5566\uff01\u8981\u7ee7\u7eed\u64cd\u4f5c\uff0c\u8bf7\u5237\u65b0\u6b64\u9875\u9762\u3002",
                "error_content": "\u8bf7\u70b9\u51fb\u6b64\u5904\u91cd\u8bd5",
                "error": "\u7f51\u7edc\u6545\u969c"
            },
            "en": {
                "ready": "Click to pass",
                "fullpage": "Detecting",
                "success": "Succeeded",
                "error": "Network failure",
                "reset": "Click to retry",
                "next": "Loading",
                "next_ready": "Please finish it",
                "goto_homepage": "Going to Geetest\uff08verification service provider\uff09\uff1f",
                "goto_confirm": "Yes",
                "goto_cancel": "Cancel",
                "loading_content": "Detecting",
                "success_title": "Success",
                "error_title": "Network timeout",
                "error_content": "Click to retry",
                "copyright": "Provided by Geetest",
                "refresh_page": "An error occured. Please refresh and try again!"
            },
            "zh-hk": {
                "ready": "\u9ede\u64ca\u6309\u9215\u9032\u884c\u9a57\u8b49",
                "fullpage": "\u667a\u80fd\u6aa2\u6e2c\u4e2d",
                "success": "\u9a57\u8b49\u6210\u529f",
                "error": "\u7db2\u7d61\u6545\u969c",
                "reset": "\u8acb\u9ede\u64ca\u91cd\u8a66",
                "next": "\u6b63\u5728\u52a0\u8f09\u9a57\u8b49",
                "next_ready": "\u8acb\u5b8c\u6210\u9a57\u8b49",
                "goto_homepage": "\u662f\u5426\u524d\u5f80\u9a57\u8b49\u670d\u52d9Geetest\u5b98\u7db2\uff1f",
                "goto_confirm": "\u524d\u5f80",
                "goto_cancel": "\u53d6\u6d88",
                "loading_content": "\u667a\u80fd\u9a57\u8b49\u6aa2\u6e2c\u4e2d",
                "success_title": "\u901a\u904e\u9a57\u8b49",
                "error_title": "\u7db2\u7d61\u8d85\u6642",
                "error_content": "\u8acb\u9ede\u64ca\u6b64\u8655\u91cd\u8a66",
                "copyright": "\u7531\u6975\u9a57\u63d0\u4f9b\u6280\u8853\u652f\u6301",
                "refresh_page": "\u9801\u9762\u51fa\u73fe\u932f\u8aa4\u5566\uff01\u8981\u7e7c\u7e8c\u64cd\u4f5c\uff0c\u8acb\u5237\u65b0\u6b64\u9801\u9762\u3002"
            }
        };
        for (var r in t) {
            if ("object" == typeof t && t["hasOwnProperty"](r)) {
                return t
            }
        }
        return e && e["offline"] && -1 < new ee(["zh-cn", "en", "zh-hk", "ar", "zh-tw", "ja", "ko", "id", "ru", "es", "pt-pt", "fr", "de"])["$_BAIt"](e["lang"]) ? n[e["lang"]] : n["en"]
    });

function sdk() {

    // 初始化Config
    if (arguments.length) {
        Config.gt = arguments[0];
        Config.challenge = arguments[1];
    }

    function Qe(e, t) {
        var n = this
            , r = new et(e);
        r["remUnit"] && !isNaN(r["remUnit"]) && (fe = "rem",
            ge = r["remUnit"]),
        r["autoLanguage"] && !r["hasOwnProperty"]("lang") && (r["lang"] = 'zh'),
        r["https"] && (r["protocol"] = "https://"),
        e["debugConfig"] && r["$_BIJr"](e["debugConfig"]),
        "float" !== r["product"] && "popup" !== r["product"] && "custom" !== r["product"] && "bind" !== r["product"] && (r["product"] = "float"),
        (x || y) && "float" === r["product"] && (r["product"] = "popup"),
        y && "custom" === r["product"] && (r["product"] = "popup"),
            r["cc"] = pe["hardwareConcurrency"] || 0,
            r["supportWorker"] = "undefined" != typeof Worker,
            n["$_BJAv"] = new Re(),  // 环境检测
            n["$_EFF"] = r,
            n["$_EGi"] = e,
            n["$_BJBH"] = new J(n),
            n["$_JHW"] = new Z(function (e, t) {
                    n["$_BJCV"](e, t)  // 生成了一个w，请求了get.php接口
                }
            ),
            n["$_BJDv"] = t,
            n["$_BJEV"] = x ? 3 : 0,
            n["$_BJFL"] = x ? "web_mobile" : "web",
            n["$_BJGL"] = -1,
            n["$_EFF"]["$_FCd"] = {
                "pt": n["$_BJEV"]
            },
            n["$_JHW"]["$_HFz"](De),
            n["$_BJHV"] = new Ce();  // 一些鼠标轨迹检测，不严格
            n["$_BDFa"] = new Me()  // 一些dom操作，先注释操作部分
    }

    Qe.prototype = {
        "$_BJCV": function (e, t) {
            var n = this
                , r = n["$_CAHr"]
                , o = n["$_JHW"]
                , i = n["$_BJBH"]
                , s = n["$_EFF"]
                , a = "bind" === s["product"];
            if (!o["$_JIs"](t) && t !== ze) {
                if (o["$_JIs"](De) || (r && r["$_CAIb"](e, t),
                r && r["$_CAJD"]()),
                    o["$_JIs"](De)) {
                    n["$_CBAl"] = n["$_BGEc"]()
                    // n["$_CBAl"] = n["$_BGEc"]()["$_FB_"](function () {
                    //     o["$_HFz"](Oe),
                    //         i["$_JEU"](De),
                    //     s["vip_content"] && n["$_CBBE"]()
                    // })
                } else {
                    if (o["$_JIs"](Ge)) {
                        r["$_IFZ"](n["$_CBCp"])
                    } else {
                        if (o["$_JIs"](Ue)) {
                            r["$_CBDV"](),
                            a && s["pure"] && i["$_JEU"](Ue)
                        } else {
                            if (o["$_JIs"](Ve)) {
                                r["$_CBEm"](),
                                    i["$_JEU"](We)
                            } else {
                                if (o["$_JIs"]([je])) {
                                    r["$_CBFM"](n["$_CBGF"]),
                                        d(function () {
                                            a ? (n["$_BJHV"] = new Ce(),
                                                r["$_CBHu"](),
                                            s["pure"] && d(function () {
                                                r["$_CBIK"]()
                                            }, 300)) : n["$_BJHV"]["$_JFc"](),
                                                i["$_JEU"](Xe)
                                        }, 400)
                                } else {
                                    if (o["$_JIs"]([He, "click_error"])) {
                                        a && (s["pure"] ? (r && r["$_CBHu"](),
                                            d(function () {
                                                r && r["$_CBIK"]()
                                            }, 300)) : (r && r["$_CBIK"](),
                                        r && r["$_CBJP"]())),
                                        n["$_CCAQ"] && "error_21" === n["$_CCAQ"]["code"] && r && r["$_CCBH"](),
                                            i["$_JEU"](qe, n["$_CCAQ"])
                                    } else {
                                        if (o["$_JIs"](Be)) {
                                            a && !s["pure"] && r["$_CCCL"](),
                                                r["$_CCDD"]()
                                        } else {
                                            if (o["$_JIs"]($e)) {
                                                return
                                            }
                                        }
                                    }
                                }
                            }
                        }
                    }
                }
            }
        },
        "$_BGEc": function () {
            var t = this
                , n = t["$_EFF"];
            if (!n["gt"] || !n["challenge"]) {
                return V(H("config_lack", t))
            }
            var e = t["$_BJAv"]["$_BHDt"]();
            t["$_CCET"] = e,
                t["$_EGi"]["cc"] = n["cc"],
                t["$_EGi"]["ww"] = n["supportWorker"],
                t["$_EGi"]["i"] = e;
            var r = t["$_CCFP"]()
                , o = $_BDg()["encrypt1"](he["stringify"](t["$_EGi"]), t["$_CCGs"]())
                , i = p["$_HBh"](o)
                , s = {
                "gt": t["$_EGi"]["gt"],
                "challenge": t["$_EGi"]["challenge"],
                "lang": n["lang"],
                "pt": t["$_BJEV"],
                "client_type": t["$_BJFL"],
                "w": i + r
            };
            return s;
            // return N(n, p["$_HDX"]("fFtZ0VaY4Gg"), s)["$_FB_"](function (e) {
            //     return e["status"] === qe ? V(G(e, t, "/get.php")) : (n["$_BIJr"](e["data"]),
            //     n["apiserver"] && (n["api_server"] = n["apiserver"]),
            //     n["staticservers"] && (n["static_servers"] = n["staticservers"]),
            //     n["debugConfig"] && n["$_BIJr"](n["debugConfig"]),
            //         t["$_CAHr"] = new rt(t),
            //         t["$_CCHj"](),
            //         t["$_CAHr"]["$_CCIm"])
            // }, function () {
            //     return V(H("url_get", t))
            // })
        },
        "$_CCHj": function () {
            var t = this["$_EFF"]
                , n = this["$_JHW"];
            this["$"];
            try {
                if (O && O["getElementById"] && O["getElementById"]("geetest_data_share_plugin")) {
                    var e = O["getElementById"]("geetest_data_share_plugin")
                        , r = new CustomEvent("geetestPlugin", {
                        "detail": {
                            "challenge": t["challenge"],
                            "gt": t["gt"]
                        }
                    });
                    e["addEventListener"]("geetestEvent", function (e) {
                        "bind" !== t["product"] && n["$_HFz"](Be)
                    }),
                        e["dispatchEvent"](r)
                }
            } catch (o) {
            }
        },
        "$_JFc": function () {
            var e = this;
            e["$_CAHr"] && e["$_CAHr"]["$_JFc"](),
                e["$_BJBH"]["$_JFc"](),
                e["$_BJHV"]["$_JFc"](),
                e["$_BDFa"]["$_JFc"](),
            e["$_CCJZ"] && e["$_CCJZ"]["$_JFc"]()
        },
        "$_EHX": function (e) {
            return this["$_CCAQ"] = e,
                this["$_JHW"]["$_HFz"](He),
                this
        },
        "$_FEx": function (e) {
            var t = this;
            return "bind" === t["$_EFF"]["product"] || t["$_CBAl"]["$_FB_"](function () {
                t["$_CAHr"]["$_FEx"](e)
            }),
                t
        },
        "$_CDAz": function (e) {
            this["$_CDBv"] = e
        },
        "$_CDCA": function (e) {
            this["$_CDDQ"] = e
        },
        "$_CDEJ": function (e) {
            var t = this;
            t["$_CBAl"]["$_FB_"](function () {
                t["$_CAHr"]["$_CDEJ"](e)
            })
        },
        "$_CDFv": function (e) {
            var t = this;
            t["$_CBAl"]["$_FB_"](function () {
                t["$_CAHr"]["$_CDFv"](e)
            })
        },
        "$_CDGp": function () {
            var e = this;
            e["$_EFF"]["vip_content"] ? !0 !== e["$_CDHe"] && (e["$_CDHe"] = !0,
                e["$_CDIW"]()) : e["$_CDJU"]()
        },
        "$_CDIW": function () {
            var e = this;
            v(e["$_CEAw"]),
                !e["powworkerdone"] && e["pow_progress"] ? e["$_CEAw"] = d(function () {
                    e["powworkerdone"] = !0,
                        e["$_CCJZ"]["$_BFDU"](),
                        e["$_CDIW"]()
                }, 2000) : e["powworkerdone"] || !e["pow_starting"] || e["pow_wait_once"] ? (e["$_CDHe"] = !1,
                    e["pow_wait_once"] = !1,
                    e["$_CDJU"]()) : (e["pow_wait_once"] = !0,
                    e["$_CEAw"] = d(function () {
                        e["$_CDIW"]()
                    }, 500))
        },
        "$_CDJU": function () {
            var t = this
                , e = t["$_EFF"];
            t["$_CEBq"]();
            var n = {};
            n["gt"] = e["gt"],
                n["challenge"] = e["challenge"],
                n["lang"] = e["lang"] || "zh-cn",
                n["pt"] = t["$_BJEV"],
                n["client_type"] = t["$_BJFL"],
                n["w"] = t["$_CECf"],
                N(t["$_EFF"], p["$_HDX"]("fEkexGxOwUyY"), n)["$_FB_"](function (e) {
                    if (e["status"] === qe) {
                        return V(G(e, t, "/ajax.php"))
                    }
                    t["$_CEDH"](e["data"])
                }, function () {
                    return V(H("url_ajax", t))
                })
        },
        "$_CEBq": function () {
            var i = this
                , e = i["$_BJHV"]["$_BHDt"]()
                , t = i["$_BJHV"]["$_BHEo"]()
                , n = i["$_BJAv"]["$_BHEo"]()
                , r = i["$_BDFa"]["$_BHDt"]()
                , o = i["$_EFF"]
                , s = $_Ge() - ot + 50;  // 时间差，加50
            i["$_CEEm"] = "";
            for (var a = [["lang", o["lang"] || "zh-cn"], ["type", "fullpage"], ["tt", function (e, t, n) {
                if (!t || !n) {
                    return e
                }
                var r, o = 0, i = e, s = t[0], a = t[2], c = t[4];
                while (r = n["substr"](o, 2)) {
                    o += 2;
                    var _ = parseInt(r, 16)
                        , l = String["fromCharCode"](_)
                        , u = (s * _ * _ + a * _ + c) % e["length"];
                    i = i["substr"](0, u) + l + i["substr"](u)
                }
                return i
            }(e, o["c"], o["s"]) || -1], ["light", r || -1], ["s", j(p["$_HAl"](t))], ["h", j(p["$_HAl"](n))], ["hh", j(n)], ["hi", j(i["$_CCET"])], ["vip_order", i["vip_order"] || -1], ["ct", i["ct"] || -1], ["ep", i["$_CEFh"]() || -1], ["passtime", s || -1], ["rp", j(o["gt"] + o["challenge"] + s)]], c = 0; c < a["length"]; c++) {
                i["$_CEEm"] += '"' + a[c][0] + '":' + he["stringify"](a[c][1]) + ","
            }
            var _ = $_BDg();
            i["$_CEGn"] = function l() {
                var t = ["bbOy"];
                return function (e) {
                    t["push"](e["toString"]());
                    var r = "";
                    !function o(e, t) {
                        function n(e) {
                            var t = 5381
                                , n = e["length"]
                                , r = 0;
                            while (n--) {
                                t = (t << 5) + t + e["charCodeAt"](r++)
                            }
                            return t &= ~(1 << 31)
                        }

                        100 < new Date()["getTime"]() - t["getTime"]() && (e = "qwe"),
                        // 这里有代码修改检测，不严格
                        r = "{" + i["$_CEEm"] + '"captcha_token":"' + n(o["toString"]() + n(n["toString"]()) + n(e["toString"]())) + '"}'
                    }(t["shift"](), new Date()),
                    i["$_CECf"] = p["$_HBh"](_["encrypt"](r, i["$_CCGs"]()))
                }
            }(),
            i["$_CEGn"]("");
            return i["$_CECf"]
        },
        "$_CEDH": function (e) {
            var t, n = this, r = n["$_EFF"];
            if ("success" === e["result"]) {
                var o = e["validate"]["split"]("|")[0];
                n["$_CBGF"] = {
                    "geetest_challenge": r["challenge"],
                    "geetest_validate": o,
                    "geetest_seccode": o + "|jordan"
                },
                    n["$_CEHw"] = e["score"],
                    t = je
            } else {
                if ("forbidden" === e["result"]) {
                    return V(H("server_forbidden", n))
                }
                t = Ge,
                    n["$_CBCp"] = e["result"]
            }
            n["$_JHW"]["$_HFz"](t)
        },
        "$_CEIj": function () {
            return this["$_CBGF"]
        },
        "$_CEJq": function () {
            this["$_CBGF"] = null
        },
        "$_JDD": function (e, t) {
            return this["$_BJBH"]["$_JDD"](e, t),
                this
        },
        "$_CFAk": function () {
            return this["$_CAHr"] && this["$_CAHr"]["$_CFAk"](),
                this
        },
        "$_BBDP": function () {
            this["$_JHW"]["$_HFz"](Ve)
        },
        "$_BBEm": function () {
            this["$_JHW"]["$_HFz"](Ue)
        },
        "$_CFBG": function () {
            var e = this["$_CAHr"]
                , t = this["$_EFF"]
                , n = this["$_JHW"];
            "bind" === t["product"] && ("function" != typeof this["$_CDDQ"] || this["$_CDDQ"]()) && (this["$_BJGL"] = 2,
                n["$_JIs"](Oe) ? n["$_HFz"](Be) : n["$_JIs"](Ve) ? n["$_HFz"](Ue) : n["$_JIs"]([He, je]) && e && e["$_CFAk"]()["$_FB_"](function () {
                    n["$_HFz"](Be)
                }))
        },
        "$_CBBE": function () {
            var i = this
                , e = i["$_EFF"];
            i["powworkerdone"] = !1,
                i["pow_starting"] = !1,
                i["$_CCJZ"] = new xe({
                    "config": e,
                    "beforeStart": function () {
                        i["pow_starting"] = !0
                    },
                    "progress": function () {
                        i["pow_progress"] = !0
                    },
                    "done": function (e, t) {
                        if (i["powworkerdone"] = !0,
                            e) {
                            var n = e["join"]();
                            if (y || b) {
                                for (var r = n["split"](","), o = r["length"] - 1; 0 <= o; o--) {
                                    r[o] = Math["round"](r[o])
                                }
                                n = r["join"]()
                            }
                            i["vip_order"] = n,
                                i["ct"] = t
                        } else {
                            i["vip_order"] = "",
                                i["ct"] = ""
                        }
                        i["$_CDHe"] && i["$_CDIW"]()
                    }
                })
        },
        "$_CFCt": function () {
            var e = this
                , t = e["$_EFF"];
            e["$_CCJZ"] && (e["powworkerdone"] = !1,
                e["pow_starting"] = !1,
                e["pow_progress"] = !1,
                e["vip_order"] = "",
                e["ct"] = "",
                e["$_CCJZ"]["$_BFCM"]({
                    "vip_content": t["vip_content"],
                    "vip_answer": t["vip_answer"],
                    "vip_key": t["vip_key"]
                }))
        },
        "$_CFDb": function () {
            this["$_BJBH"]["$_JEU"](We)
        },
        "$_CEFh": function () {
            var e = {
                "v": "9.0.9"
            };
            this["$_EFF"];
            e["$_BBn"] = false,
            // e["$_BBn"] = ke["deviceorientation"],  // 执行了Ce的prototype
            e["te"] = false,
            // e["te"] = ke["touchEvent"],
            e["$_BCU"] = true;
            // e["$_BCU"] = ke["mouseEvent"];
            var Te = {
                "puppet": false,
                "phantom": false,
                "nightmare": false,
                "selenium": false,
                "vendor": "Google Inc. (Intel)",
                "renderer": "ANGLE (Intel, Mesa Intel(R) UHD Graphics 630 (CFL GT2), OpenGL 4.6 (Core Profile) Mesa 20.3.4)"
            };
            var t = !x && Te;
            return e["ven"] = t["vendor"] || -1,
                e["ren"] = t["renderer"] || -1,
                e["fp"] = [
                    "move",
                    1017,
                    403,
                    Date.now(),
                    "pointermove"
                ],
                // e["fp"] = this["$_BJHV"]["$_BFJq"],
                e["lp"] = [
                    "up",
                    829,
                    411,
                    Date.now() + 109,
                    "pointerup"
                ],
                // e["lp"] = this["$_BJHV"]["$_BGAh"],
                e["em"] = {
                    "ph": 0,
                    "cp": 0,
                    "ek": "11",
                    "wd": 1,
                    "nt": 0,
                    "si": 0,
                    "sc": 0
                },
                // Q([], e["em"]),
                e["tm"] = new be()["$_BFEr"](),
                e["by"] = 0,
                // e["by"] = this["$_BJGL"],
                e
        },
        "$_CCGs": function (e) {
            return this["$_EFF"]["aeskey"] && !e || (this["$_EFF"]["aeskey"] = ie()),
                this["$_EFF"]["aeskey"]
        },
        "$_CCFP": function (e) {
            var t = new X()["encrypt"](this["$_CCGs"](e));
            while (!t || 256 !== t["length"]) {
                t = new X()["encrypt"](this["$_CCGs"](!0))
            }
            return t
        }
    }

    function be() {}
    be["prototype"] = {
        "$_BFEr": function() {
            return window["performance"] && window["performance"]["timing"] && this["$_BFFG"]() || -1
        },
        "$_BFFG": function() {
            var e = window["performance"]["timing"];
            return {
                "a": e["navigationStart"],
                "b": e["unloadEventStart"],
                "c": e["unloadEventEnd"],
                "d": e["redirectStart"],
                "e": e["redirectEnd"],
                "f": e["fetchStart"],
                "g": e["domainLookupStart"],
                "h": e["domainLookupEnd"],
                "i": e["connectStart"],
                "j": e["connectEnd"],
                "k": e["secureConnectionStart"],
                "l": e["requestStart"],
                "m": e["responseStart"],
                "n": e["responseEnd"],
                "o": e["domLoading"],
                "p": e["domInteractive"],
                "q": e["domContentLoadedEventStart"],
                "r": e["domContentLoadedEventEnd"],
                "s": e["domComplete"],
                "t": e["loadEventStart"],
                "u": e["loadEventEnd"]
            }
        }
    };

    function Me() {
        var t = this;
        t["$_CCl"] = [],
        t["$_BHFa"] = 0,
        t["$_BHGn"] = [],
        t["$_BGFo"] = 30,
        t["$_BHHs"] = O["body"] && O["body"]["nodeType"],
        t["$_BHIF"] = new ne(O)
        // t["$_BHIF"]["$_JDD"]("click", function (e) {
        //     t["$_BHJp"](e["$_IM"])
        // })
    }

    Me["prototype"] = {
        "$_BHCI": function () {
            return this["$_CCl"]["join"]("|")["length"]
        },
        "$_BHDt": function () {
            var e = this["$_CCl"] || [];
            return this["$_CCl"] = [],
                this["$_BHFa"] = 0,
                this["$_BHGn"] = [],
            (y || b || w) && (e = e["slice"](0, 10)),
                e["join"]("|")
        },
        "$_JFc": function () {
            this["$_BHIF"]["$_BCJZ"]()
        },
        "$_BHJp": function (e) {
            var t = this
                , n = t["$_CCl"];
            n["length"] >= t["$_BGFo"] && n["splice"](0, 1);
            var r = e["target"] || e["srcElement"];
            if (r && r["nodeType"] === t["$_BHHs"]) {
                for (var o = null, i = t["$_BHGn"]["length"] - 1; 0 <= i; i--) {
                    if (t["$_BHGn"][i]["el"] === r) {
                        o = t["$_BHGn"][i];
                        break
                    }
                }
                o ? n["push"](o["el"]["tagName"] + "_" + o["index"]) : (t["$_BHGn"]["push"]({
                    "el": r,
                    "index": t["$_BHFa"]
                }),
                    n["push"](r["tagName"] + "_" + t["$_BHFa"]),
                    t["$_BHFa"]++)
            } else {
                n["push"]("")
            }
        }
    }

    function Ce() {
        var e = this;
        e["posX"] = 0,
        e["posY"] = 0,
        e["scrollLeft"] = 0,
        e["scrollTop"] = 0,
        e["lastTime"] = 0,
        e["$_CCl"] = [],
        e["$_BFHu"] = new ne(O),
        e["$_BFIp"] = new ne(window),
        e["$_BFJq"] = null,
        e["$_BGAh"] = null,
        e["$_BGBs"] = 0,
        e["$_BGCG"] = 0,
        e["$_BGDO"] = 0
        // e["$_BGEc"]()
    }

    Ce["prototype"] = {
        "$_BGFo": y || b || w ? 150 : 300,
        "$_BGEc": function () {
            var r = this;
            r["$_BFHu"]["$_JDD"]("move", function (e) {
                r["$_BGGz"](),
                    r["posX"] = e["$_BEGd"](),
                    r["posY"] = e["$_BEHB"](),
                    r["$_BGHB"]("move", r["posX"], r["posY"], e["$_IM"]["type"])
            })["$_JDD"]("down", function (e) {
                var t = r["$_CCl"]["length"];
                r["$_CCl"][t - 1] && "down" === r["$_CCl"][t - 1][0] || (r["$_BGGz"](),
                    r["posX"] = e["$_BEGd"](),
                    r["posY"] = e["$_BEHB"](),
                    r["$_BGHB"]("down", r["posX"], r["posY"], e["$_IM"]["type"]),
                r["$_CCl"][t - 2] && "move" === r["$_CCl"][t - 2][0] && r["$_CCl"][t - 3] && "up" === r["$_CCl"][t - 3][0] && r["$_BGId"](t - 2))
            })["$_JDD"]("up", function (e) {
                var t = r["$_CCl"]["length"];
                r["$_CCl"][t - 1] && "up" === r["$_CCl"][t - 1][0] || (r["$_BGGz"](),
                    r["posX"] = e["$_BEGd"](),
                    r["posY"] = e["$_BEHB"](),
                    r["$_BGHB"]("up", r["posX"], r["posY"], e["$_IM"]["type"]),
                r["$_CCl"][t - 2] && "move" === r["$_CCl"][t - 2][0] && r["$_CCl"][t - 3] && "down" === r["$_CCl"][t - 3][0] && r["$_BGId"](t - 2))
            })["$_JDD"]("focusin", function () {
                r["$_BGHB"]("focus")
            }),
                r["$_BFIp"]["$_JDD"]("scroll", function () {
                    var e = ("pageXOffset" in window)
                        , t = e ? window["pageXOffset"] : O["body"]["scrollLeft"]
                        , n = e ? window["pageYOffset"] : O["body"]["scrollTop"];
                    r["posX"] = t - r["scrollLeft"] + r["posX"],
                        r["posY"] = n - r["scrollTop"] + r["posY"],
                        r["$_BGHB"]("scroll", t - r["scrollLeft"] + r["posX"], n - r["scrollTop"] + r["posY"]),
                        r["$_BGGz"]()
                })["$_JDD"]("focus", function () {
                    r["$_BGHB"]("focus")
                })["$_JDD"]("blur", function () {
                    r["$_BGHB"]("blur")
                })["$_JDD"]("unload", function () {
                    r["$_BGHB"]("unload")
                })
        },
        "$_BGGz": function () {
            var e = ("pageXOffset" in window)
                , t = e ? window["pageXOffset"] : O["body"]["scrollLeft"]
                , n = e ? window["pageYOffset"] : O["body"]["scrollTop"];
            return {
                "x": this["scrollLeft"] = t,
                "y": this["scrollTop"] = n
            }
        },
        "$_BGHB": function (e, t, n, r) {
            var o = $_Ge()
                , i = this
                , s = i["$_BGBs"]
                , a = i["$_BGCG"]
                , c = i["$_BGDO"]
                , _ = i["$_CCl"];
            if (-1 < new ee(["move", "down", "up", "scroll"])["$_BAIt"](e)) {
                if ("move" === e) {
                    if (t === s && n === a || c === o) {
                        return
                    }
                    i["$_BGBs"] = t,
                        i["$_BGCG"] = n,
                        i["$_BGDO"] = o
                }
                _["push"]([e, i["$_BGJP"](t), i["$_BGJP"](n), o, r])
            } else {
                _["push"]([e, o])
            }
            return i
        },
        "$_BGId": function (e) {
            this["$_CCl"]["splice"](e, 1)
        },
        "$_JFc": function () {
            this["$_BFIp"]["$_BCJZ"](),
                this["$_BFHu"]["$_BCJZ"]()
        },
        "$_BHAh": function (e) {
            var t = 0
                , n = 0
                , r = []
                , o = this
                , i = o["lastTime"];
            if (e["length"] <= 0) {
                return []
            }
            for (var s = null, a = null, c = o["$_BHBw"](e), _ = c["length"], l = _ < this["$_BGFo"] ? 0 : _ - this["$_BGFo"]; l < _; l += 1) {
                var u = c[l]
                    , p = u[0];
                -1 < new ee(["down", "move", "up", "scroll"])["$_BAIt"](p) ? (s || (s = u),
                    a = u,
                    r["push"]([p, [u[1] - t, u[2] - n], o["$_BGJP"](i ? u[3] - i : i)]),
                    t = u[1],
                    n = u[2],
                    i = u[3]) : -1 < new ee(["blur", "focus", "unload"])["$_BAIt"](p) && (r["push"]([p, o["$_BGJP"](i ? u[1] - i : i)]),
                    i = u[1])
            }
            return o["$_BFJq"] = s,
                o["$_BGAh"] = a,
                r
        },
        "$_BHBw": function (e) {
            var t = ""
                , n = 0;
            (e || [])["length"];
            while (!t && e[n]) {
                t = e[n] && e[n][4],
                    n++
            }
            if (!t) {
                return e
            }
            for (var r = "", o = ["mouse", "touch", "pointer", "MSPointer"], i = 0, s = o["length"]; i < s; i++) {
                0 === t["indexOf"](o[i]) && (r = o[i])
            }
            for (var a = e["slice"](), c = a["length"] - 1; 0 <= c; c--) {
                var _ = a[c]
                    , l = _[0];
                if (-1 < new ee(["move", "down", "up"])["$_BAIt"](l)) {
                    0 !== (_[4] || "")["indexOf"](r) && a["splice"](c, 1)
                }
            }
            return a
        },
        "$_HAl": function (e) {
            var p = {
                "move": 0,
                "down": 1,
                "up": 2,
                "scroll": 3,
                "focus": 4,
                "blur": 5,
                "unload": 6,
                "unknown": 7
            };

            function h(e, t) {
                for (var n = e["toString"](2), r = "", o = n["length"] + 1; o <= t; o += 1) {
                    r += "0"
                }
                return n = r + n
            }

            var f = function (e) {
                var t = []
                    , n = e["length"]
                    , r = 0;
                while (r < n) {
                    var o = e[r]
                        , i = 0;
                    while (1) {
                        if (16 <= i) {
                            break
                        }
                        var s = r + i + 1;
                        if (n <= s) {
                            break
                        }
                        if (e[s] !== o) {
                            break
                        }
                        i += 1
                    }
                    r = r + 1 + i;
                    var a = p[o];
                    0 != i ? (t["push"](8 | a),
                        t["push"](i - 1)) : t["push"](a)
                }
                for (var c = h(32768 | n, 16), _ = "", l = 0, u = t["length"]; l < u; l += 1) {
                    _ += h(t[l], 4)
                }
                return c + _
            };

            function _(e, t) {
                for (var n = [], r = 0, o = e["length"]; r < o; r += 1) {
                    n["push"](t(e[r]))
                }
                return n
            }

            function g(e, t) {
                e = function c(e) {
                    var t = 32767
                        , n = (e = _(e, function (e) {
                        return t < e ? t : e < -t ? -t : e
                    }))["length"]
                        , r = 0
                        , o = [];
                    while (r < n) {
                        var i = 1
                            , s = e[r]
                            , a = Math["abs"](s);
                        while (1) {
                            if (n <= r + i) {
                                break
                            }
                            if (e[r + i] !== s) {
                                break
                            }
                            if (127 <= a || 127 <= i) {
                                break
                            }
                            i += 1
                        }
                        1 < i ? o["push"]((s < 0 ? 49152 : 32768) | i << 7 | a) : o["push"](s),
                            r += i
                    }
                    return o
                }(e);
                var n, r = [], o = [];
                _(e, function (e) {
                    var t = Math["ceil"](function n(e, t) {
                        return 0 === e ? 0 : Math["log"](e) / Math["log"](t)
                    }(Math["abs"](e) + 1, 16));
                    0 === t && (t = 1),
                        r["push"](h(t - 1, 2)),
                        o["push"](h(Math["abs"](e), 4 * t))
                });
                var i = r["join"]("")
                    , s = o["join"]("");
                return n = t ? _(function a(e, t) {
                    var n = [];
                    return _(e, function (e) {
                        t(e) && n["push"](e)
                    }),
                        n
                }(e, function (e) {
                    return 0 != e && e >> 15 != 1
                }), function (e) {
                    return e < 0 ? "1" : "0"
                })["join"]("") : "",
                h(32768 | e["length"], 16) + i + s + n
            }

            return function (e) {
                for (var t = [], n = [], r = [], o = [], i = 0, s = e["length"]; i < s; i += 1) {
                    var a = e[i]
                        , c = a["length"];
                    t["push"](a[0]),
                        n["push"](2 === c ? a[1] : a[2]),
                    3 === c && (r["push"](a[1][0]),
                        o["push"](a[1][1]))
                }
                var _ = f(t) + g(n, !1) + g(r, !0) + g(o, !0)
                    , l = _["length"];
                return l % 6 != 0 && (_ += h(0, 6 - l % 6)),
                    function u(e) {
                        for (var t = "", n = e["length"] / 6, r = 0; r < n; r += 1) {
                            t += "()*,-./0123456789:?@ABCDEFGHIJKLMNOPQRSTUVWXYZ_abcdefghijklmnopqrstuvwxyz~"["charAt"](window["parseInt"](e["slice"](6 * r, 6 * (r + 1)), 2))
                        }
                        return t
                    }(_)
            }(e)
        },
        "$_BGJP": function (e) {
            var t = 32767;
            return "number" != typeof e ? e : (t < e ? e = t : e < -t && (e = -t),
                Math["round"](e))
        },
        "$_BHCI": function () {
            return this["$_HAl"](this["$_BHAh"](this["$_CCl"]))["length"]
        },
        "$_BHDt": function () {
            var e = this["$_CCl"];
            return this["$_CCl"] = [],
                this["$_HAl"](this["$_BHAh"](e))
        },
        "$_BHEo": function () {
            return this["$_HAl"](this["$_CCl"])
        }
    }

    function j(e) {
        function c(e, t) {
            return e << t | e >>> 32 - t
        }

        function _(e, t) {
            var n, r, o, i, s;
            return o = 2147483648 & e,
                i = 2147483648 & t,
                s = (1073741823 & e) + (1073741823 & t),
                (n = 1073741824 & e) & (r = 1073741824 & t) ? 2147483648 ^ s ^ o ^ i : n | r ? 1073741824 & s ? 3221225472 ^ s ^ o ^ i : 1073741824 ^ s ^ o ^ i : s ^ o ^ i
        }

        function t(e, t, n, r, o, i, s) {
            return _(c(e = _(e, _(_(function a(e, t, n) {
                return e & t | ~e & n
            }(t, n, r), o), s)), i), t)
        }

        function n(e, t, n, r, o, i, s) {
            return _(c(e = _(e, _(_(function a(e, t, n) {
                return e & n | t & ~n
            }(t, n, r), o), s)), i), t)
        }

        function r(e, t, n, r, o, i, s) {
            return _(c(e = _(e, _(_(function a(e, t, n) {
                return e ^ t ^ n
            }(t, n, r), o), s)), i), t)
        }

        function o(e, t, n, r, o, i, s) {
            return _(c(e = _(e, _(_(function a(e, t, n) {
                return t ^ (e | ~n)
            }(t, n, r), o), s)), i), t)
        }

        function i(e) {
            var t, n = "", r = "";
            for (t = 0; t <= 3; t++) {
                n += (r = "0" + (e >>> 8 * t & 255)["toString"](16))["substr"](r["length"] - 2, 2)
            }
            return n
        }

        var s, a, l, u, p, h, f, g, d, v;
        for (s = function m(e) {
            var t, n = e["length"], r = n + 8, o = 16 * (1 + (r - r % 64) / 64), i = Array(o - 1), s = 0, a = 0;
            while (a < n) {
                s = a % 4 * 8,
                    i[t = (a - a % 4) / 4] = i[t] | e["charCodeAt"](a) << s,
                    a++
            }
            return s = a % 4 * 8,
                i[t = (a - a % 4) / 4] = i[t] | 128 << s,
                i[o - 2] = n << 3,
                i[o - 1] = n >>> 29,
                i
        }(e = function w(e) {
            e = e["replace"](/\r\n/g, "\n");
            for (var t = "", n = 0; n < e["length"]; n++) {
                var r = e["charCodeAt"](n);
                r < 128 ? t += String["fromCharCode"](r) : (127 < r && r < 2048 ? t += String["fromCharCode"](r >> 6 | 192) : (t += String["fromCharCode"](r >> 12 | 224),
                    t += String["fromCharCode"](r >> 6 & 63 | 128)),
                    t += String["fromCharCode"](63 & r | 128))
            }
            return t
        }(e)),
                 f = 1732584193,
                 g = 4023233417,
                 d = 2562383102,
                 v = 271733878,
                 a = 0; a < s["length"]; a += 16) {
            g = o(g = o(g = o(g = o(g = r(g = r(g = r(g = r(g = n(g = n(g = n(g = n(g = t(g = t(g = t(g = t(u = g, d = t(p = d, v = t(h = v, f = t(l = f, g, d, v, s[a + 0], 7, 3614090360), g, d, s[a + 1], 12, 3905402710), f, g, s[a + 2], 17, 606105819), v, f, s[a + 3], 22, 3250441966), d = t(d, v = t(v, f = t(f, g, d, v, s[a + 4], 7, 4118548399), g, d, s[a + 5], 12, 1200080426), f, g, s[a + 6], 17, 2821735955), v, f, s[a + 7], 22, 4249261313), d = t(d, v = t(v, f = t(f, g, d, v, s[a + 8], 7, 1770035416), g, d, s[a + 9], 12, 2336552879), f, g, s[a + 10], 17, 4294925233), v, f, s[a + 11], 22, 2304563134), d = t(d, v = t(v, f = t(f, g, d, v, s[a + 12], 7, 1804603682), g, d, s[a + 13], 12, 4254626195), f, g, s[a + 14], 17, 2792965006), v, f, s[a + 15], 22, 1236535329), d = n(d, v = n(v, f = n(f, g, d, v, s[a + 1], 5, 4129170786), g, d, s[a + 6], 9, 3225465664), f, g, s[a + 11], 14, 643717713), v, f, s[a + 0], 20, 3921069994), d = n(d, v = n(v, f = n(f, g, d, v, s[a + 5], 5, 3593408605), g, d, s[a + 10], 9, 38016083), f, g, s[a + 15], 14, 3634488961), v, f, s[a + 4], 20, 3889429448), d = n(d, v = n(v, f = n(f, g, d, v, s[a + 9], 5, 568446438), g, d, s[a + 14], 9, 3275163606), f, g, s[a + 3], 14, 4107603335), v, f, s[a + 8], 20, 1163531501), d = n(d, v = n(v, f = n(f, g, d, v, s[a + 13], 5, 2850285829), g, d, s[a + 2], 9, 4243563512), f, g, s[a + 7], 14, 1735328473), v, f, s[a + 12], 20, 2368359562), d = r(d, v = r(v, f = r(f, g, d, v, s[a + 5], 4, 4294588738), g, d, s[a + 8], 11, 2272392833), f, g, s[a + 11], 16, 1839030562), v, f, s[a + 14], 23, 4259657740), d = r(d, v = r(v, f = r(f, g, d, v, s[a + 1], 4, 2763975236), g, d, s[a + 4], 11, 1272893353), f, g, s[a + 7], 16, 4139469664), v, f, s[a + 10], 23, 3200236656), d = r(d, v = r(v, f = r(f, g, d, v, s[a + 13], 4, 681279174), g, d, s[a + 0], 11, 3936430074), f, g, s[a + 3], 16, 3572445317), v, f, s[a + 6], 23, 76029189), d = r(d, v = r(v, f = r(f, g, d, v, s[a + 9], 4, 3654602809), g, d, s[a + 12], 11, 3873151461), f, g, s[a + 15], 16, 530742520), v, f, s[a + 2], 23, 3299628645), d = o(d, v = o(v, f = o(f, g, d, v, s[a + 0], 6, 4096336452), g, d, s[a + 7], 10, 1126891415), f, g, s[a + 14], 15, 2878612391), v, f, s[a + 5], 21, 4237533241), d = o(d, v = o(v, f = o(f, g, d, v, s[a + 12], 6, 1700485571), g, d, s[a + 3], 10, 2399980690), f, g, s[a + 10], 15, 4293915773), v, f, s[a + 1], 21, 2240044497), d = o(d, v = o(v, f = o(f, g, d, v, s[a + 8], 6, 1873313359), g, d, s[a + 15], 10, 4264355552), f, g, s[a + 6], 15, 2734768916), v, f, s[a + 13], 21, 1309151649), d = o(d, v = o(v, f = o(f, g, d, v, s[a + 4], 6, 4149444226), g, d, s[a + 11], 10, 3174756917), f, g, s[a + 2], 15, 718787259), v, f, s[a + 9], 21, 3951481745),
                f = _(f, l),
                g = _(g, u),
                d = _(d, p),
                v = _(v, h)
        }
        return (i(f) + i(g) + i(d) + i(v))["toLowerCase"]()
    }

    function ne(e) {
        this["$_FFX"] = "string" == typeof e ? O["createElement"](e) : e
    }

    function $_BDg() {
        var e, n = Object["create"] || function () {
            function n() {
            }

            return function (e) {
                var t;
                return n["prototype"] = e,
                    t = new n(),
                    n["prototype"] = null,
                    t
            }
        }(), t = {}, r = t["lib"] = {}, o = r["Base"] = {
            "extend": function (e) {
                var t = n(this);
                return e && t["mixIn"](e),
                t["hasOwnProperty"]("init") && this["init"] !== t["init"] || (t["init"] = function () {
                        t["$super"]["init"]["apply"](this, arguments)
                    }
                ),
                    (t["init"]["prototype"] = t)["$super"] = this,
                    t
            },
            "create": function () {
                var e = this["extend"]();
                return e["init"]["apply"](e, arguments),
                    e
            },
            "init": function () {
            },
            "mixIn": function (e) {
                for (var t in e) {
                    e["hasOwnProperty"](t) && (this[t] = e[t])
                }
                e["hasOwnProperty"]("toString") && (this["toString"] = e["toString"])
            }
        }, l = r["WordArray"] = o["extend"]({
            "init": function (e, t) {
                e = this["words"] = e || [],
                    t != undefined ? this["sigBytes"] = t : this["sigBytes"] = 4 * e["length"]
            },
            "concat": function (e) {
                var t = this["words"]
                    , n = e["words"]
                    , r = this["sigBytes"]
                    , o = e["sigBytes"];
                if (this["clamp"](),
                r % 4) {
                    for (var i = 0; i < o; i++) {
                        var s = n[i >>> 2] >>> 24 - i % 4 * 8 & 255;
                        t[r + i >>> 2] |= s << 24 - (r + i) % 4 * 8
                    }
                } else {
                    for (i = 0; i < o; i += 4) {
                        t[r + i >>> 2] = n[i >>> 2]
                    }
                }
                return this["sigBytes"] += o,
                    this
            },
            "clamp": function () {
                var e = this["words"]
                    , t = this["sigBytes"];
                e[t >>> 2] &= 4294967295 << 32 - t % 4 * 8,
                    e["length"] = Math["ceil"](t / 4)
            }
        }), i = t["enc"] = {}, u = i["Latin1"] = {
            "parse": function (e) {
                for (var t = e["length"], n = [], r = 0; r < t; r++) {
                    n[r >>> 2] |= (255 & e["charCodeAt"](r)) << 24 - r % 4 * 8
                }
                return new l["init"](n, t)
            }
        }, s = i["Utf8"] = {
            "parse": function (e) {
                return u["parse"](unescape(encodeURIComponent(e)))
            }
        }, a = r["BufferedBlockAlgorithm"] = o["extend"]({
            "reset": function () {
                this["$_CCl"] = new l["init"](),
                    this["$_CDa"] = 0
            },
            "$_CEF": function (e) {
                "string" == typeof e && (e = s["parse"](e)),
                    this["$_CCl"]["concat"](e),
                    this["$_CDa"] += e["sigBytes"]
            },
            "$_CFr": function (e) {
                var t = this["$_CCl"]
                    , n = t["words"]
                    , r = t["sigBytes"]
                    , o = this["blockSize"]
                    , i = r / (4 * o)
                    , s = (i = e ? Math["ceil"](i) : Math["max"]((0 | i) - this["$_CGA"], 0)) * o
                    , a = Math["min"](4 * s, r);
                if (s) {
                    for (var c = 0; c < s; c += o) {
                        this["$_CHj"](n, c)
                    }
                    var _ = n["splice"](0, s);
                    t["sigBytes"] -= a
                }
                return new l["init"](_, a)
            },
            "$_CGA": 0
        }), c = t["algo"] = {}, _ = r["Cipher"] = a["extend"]({
            "cfg": o["extend"](),
            "createEncryptor": function (e, t) {
                return this["create"](this["$_CIE"], e, t)
            },
            "init": function (e, t, n) {
                this["cfg"] = this["cfg"]["extend"](n),
                    this["$_CJg"] = e,
                    this["$_DAG"] = t,
                    this["reset"]()
            },
            "reset": function () {
                a["reset"]["call"](this),
                    this["$_DBy"]()
            },
            "process": function (e) {
                return this["$_CEF"](e),
                    this["$_CFr"]()
            },
            "finalize": function (e) {
                return e && this["$_CEF"](e),
                    this["$_DCM"]()
            },
            "keySize": 4,
            "ivSize": 4,
            "$_CIE": 1,
            "$_DDW": 2,
            "$_DEG": function (_) {
                return {
                    "encrypt": function (e, t, n) {
                        t = u["parse"](t),
                        n && n["iv"] || ((n = n || {})["iv"] = u["parse"]("0000000000000000"));
                        for (var r = m["encrypt"](_, e, t, n), o = r["ciphertext"]["words"], i = r["ciphertext"]["sigBytes"], s = [], a = 0; a < i; a++) {
                            var c = o[a >>> 2] >>> 24 - a % 4 * 8 & 255;
                            s["push"](c)
                        }
                        return s
                    },
                    "encrypt1": function (e, t, n) {
                        t = u["parse"](t),
                        n && n["iv"] || ((n = n || {})["iv"] = u["parse"]("0000000000000000"));
                        for (var r = m["encrypt"](_, e, t, n), o = r["ciphertext"]["words"], i = r["ciphertext"]["sigBytes"], s = [], a = 0; a < i; a++) {
                            var c = o[a >>> 2] >>> 24 - a % 4 * 8 & 255;
                            s["push"](c)
                        }
                        return s
                    }
                }
            }
        }), p = t["mode"] = {}, h = r["BlockCipherMode"] = o["extend"]({
            "createEncryptor": function (e, t) {
                return this["Encryptor"]["create"](e, t)
            },
            "init": function (e, t) {
                this["$_DFP"] = e,
                    this["$_DGI"] = t
            }
        }), f = p["CBC"] = ((e = h["extend"]())["Encryptor"] = e["extend"]({
            "processBlock": function (e, t) {
                var n = this["$_DFP"]
                    , r = n["blockSize"];
                (function s(e, t, n) {
                        var r = this["$_DGI"];
                        if (r) {
                            var o = r;
                            this["$_DGI"] = undefined
                        } else {
                            var o = this["$_DHC"]
                        }
                        for (var i = 0; i < n; i++) {
                            e[t + i] ^= o[i]
                        }
                    }
                )["call"](this, e, t, r),
                    n["encryptBlock"](e, t),
                    this["$_DHC"] = e["slice"](t, t + r)
            }
        }),
            e), g = (t["pad"] = {})["Pkcs7"] = {
            "pad": function (e, t) {
                for (var n = 4 * t, r = n - e["sigBytes"] % n, o = r << 24 | r << 16 | r << 8 | r, i = [], s = 0; s < r; s += 4) {
                    i["push"](o)
                }
                var a = l["create"](i, r);
                e["concat"](a)
            }
        }, d = r["BlockCipher"] = _["extend"]({
            "cfg": _["cfg"]["extend"]({
                "mode": f,
                "padding": g
            }),
            "reset": function () {
                _["reset"]["call"](this);
                var e = this["cfg"]
                    , t = e["iv"]
                    , n = e["mode"];
                if (this["$_CJg"] == this["$_CIE"]) {
                    var r = n["createEncryptor"]
                }
                this["$_DIm"] && this["$_DIm"]["$_DJG"] == r ? this["$_DIm"]["init"](this, t && t["words"]) : (this["$_DIm"] = r["call"](n, this, t && t["words"]),
                    this["$_DIm"]["$_DJG"] = r)
            },
            "$_CHj": function (e, t) {
                this["$_DIm"]["processBlock"](e, t)
            },
            "$_DCM": function () {
                var e = this["cfg"]["padding"];
                if (this["$_CJg"] == this["$_CIE"]) {
                    e["pad"](this["$_CCl"], this["blockSize"]);
                    var t = this["$_CFr"](!0)
                }
                return t
            },
            "blockSize": 4
        }), v = r["CipherParams"] = o["extend"]({
            "init": function (e) {
                this["mixIn"](e)
            }
        }), m = r["SerializableCipher"] = o["extend"]({
            "cfg": o["extend"](),
            "encrypt": function (e, t, n, r) {
                r = this["cfg"]["extend"](r);
                var o = e["createEncryptor"](n, r)
                    , i = o["finalize"](t)
                    , s = o["cfg"];
                return v["create"]({
                    "ciphertext": i,
                    "key": n,
                    "iv": s["iv"],
                    "algorithm": e,
                    "mode": s["mode"],
                    "padding": s["padding"],
                    "blockSize": e["blockSize"],
                    "formatter": r["format"]
                })
            }
        }), w = [], x = [], y = [], b = [], E = [], S = [], T = [], C = [], A = [], k = [];
        !function () {
            for (var e = [], t = 0; t < 256; t++) {
                e[t] = t < 128 ? t << 1 : t << 1 ^ 283
            }
            var n = 0
                , r = 0;
            for (t = 0; t < 256; t++) {
                var o = r ^ r << 1 ^ r << 2 ^ r << 3 ^ r << 4;
                o = o >>> 8 ^ 255 & o ^ 99,
                    w[n] = o;
                var i = e[x[o] = n]
                    , s = e[i]
                    , a = e[s]
                    , c = 257 * e[o] ^ 16843008 * o;
                y[n] = c << 24 | c >>> 8,
                    b[n] = c << 16 | c >>> 16,
                    E[n] = c << 8 | c >>> 24,
                    S[n] = c;
                c = 16843009 * a ^ 65537 * s ^ 257 * i ^ 16843008 * n;
                T[o] = c << 24 | c >>> 8,
                    C[o] = c << 16 | c >>> 16,
                    A[o] = c << 8 | c >>> 24,
                    k[o] = c,
                    n ? (n = i ^ e[e[e[a ^ i]]],
                        r ^= e[e[r]]) : n = r = 1
            }
        }();
        var M = [0, 1, 2, 4, 8, 16, 32, 64, 128, 27, 54]
            , R = c["AES"] = d["extend"]({
            "$_DBy": function () {
                if (!this["$_EAS"] || this["$_EBY"] !== this["$_DAG"]) {
                    for (var e = this["$_EBY"] = this["$_DAG"], t = e["words"], n = e["sigBytes"] / 4, r = 4 * (1 + (this["$_EAS"] = 6 + n)), o = this["$_ECe"] = [], i = 0; i < r; i++) {
                        if (i < n) {
                            o[i] = t[i]
                        } else {
                            var s = o[i - 1];
                            i % n ? 6 < n && i % n == 4 && (s = w[s >>> 24] << 24 | w[s >>> 16 & 255] << 16 | w[s >>> 8 & 255] << 8 | w[255 & s]) : (s = w[(s = s << 8 | s >>> 24) >>> 24] << 24 | w[s >>> 16 & 255] << 16 | w[s >>> 8 & 255] << 8 | w[255 & s],
                                s ^= M[i / n | 0] << 24),
                                o[i] = o[i - n] ^ s
                        }
                    }
                    for (var a = this["$_EDm"] = [], c = 0; c < r; c++) {
                        i = r - c;
                        if (c % 4) {
                            s = o[i]
                        } else {
                            s = o[i - 4]
                        }
                        a[c] = c < 4 || i <= 4 ? s : T[w[s >>> 24]] ^ C[w[s >>> 16 & 255]] ^ A[w[s >>> 8 & 255]] ^ k[w[255 & s]]
                    }
                }
            },
            "encryptBlock": function (e, t) {
                this["$_EEV"](e, t, this["$_ECe"], y, b, E, S, w)
            },
            "$_EEV": function (e, t, n, r, o, i, s, a) {
                for (var c = this["$_EAS"], _ = e[t] ^ n[0], l = e[t + 1] ^ n[1], u = e[t + 2] ^ n[2], p = e[t + 3] ^ n[3], h = 4, f = 1; f < c; f++) {
                    var g = r[_ >>> 24] ^ o[l >>> 16 & 255] ^ i[u >>> 8 & 255] ^ s[255 & p] ^ n[h++]
                        , d = r[l >>> 24] ^ o[u >>> 16 & 255] ^ i[p >>> 8 & 255] ^ s[255 & _] ^ n[h++]
                        , v = r[u >>> 24] ^ o[p >>> 16 & 255] ^ i[_ >>> 8 & 255] ^ s[255 & l] ^ n[h++]
                        , m = r[p >>> 24] ^ o[_ >>> 16 & 255] ^ i[l >>> 8 & 255] ^ s[255 & u] ^ n[h++];
                    _ = g,
                        l = d,
                        u = v,
                        p = m
                }
                g = (a[_ >>> 24] << 24 | a[l >>> 16 & 255] << 16 | a[u >>> 8 & 255] << 8 | a[255 & p]) ^ n[h++],
                    d = (a[l >>> 24] << 24 | a[u >>> 16 & 255] << 16 | a[p >>> 8 & 255] << 8 | a[255 & _]) ^ n[h++],
                    v = (a[u >>> 24] << 24 | a[p >>> 16 & 255] << 16 | a[_ >>> 8 & 255] << 8 | a[255 & l]) ^ n[h++],
                    m = (a[p >>> 24] << 24 | a[_ >>> 16 & 255] << 16 | a[l >>> 8 & 255] << 8 | a[255 & u]) ^ n[h++];
                e[t] = g,
                    e[t + 1] = d,
                    e[t + 2] = v,
                    e[t + 3] = m
            },
            "keySize": 8
        });
        return t["AES"] = d["$_DEG"](R),
            t["AES"]
    }

    var p = {
        "$_FGX": {
            "$_FHp": "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789()",
            "$_FIg": ".",
            "$_FJm": 7274496,
            "$_GAV": 9483264,
            "$_GBW": 19220,
            "$_GCY": 235,
            "$_GDj": 24
        },
        "$_FHp": "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789()",
        "$_FIg": ".",
        "$_FJm": 7274496,
        "$_GAV": 9483264,
        "$_GBW": 19220,
        "$_GCY": 235,
        "$_GDj": 24,
        "$_GEW": function (e) {
            for (var t = [], n = 0, r = e["length"]; n < r; n += 1) {
                t["push"](e["charCodeAt"](n))
            }
            return t
        },
        "$_GFv": function (e) {
            for (var t = "", n = 0, r = e["length"]; n < r; n += 1) {
                t += String["fromCharCode"](e[n])
            }
            return t
        },
        "$_GGr": function (e) {
            var t = this["$_FHp"];
            return e < 0 || e >= t["length"] ? "." : t["charAt"](e)
        },
        "$_GHZ": function (e) {
            return this["$_FHp"]["indexOf"](e)
        },
        "$_GIs": function (e, t) {
            return e >> t & 1
        },
        "$_GJq": function (e, o) {
            var i = this;
            o || (o = i);
            for (var t = function (e, t) {
                for (var n = 0, r = o["$_GDj"] - 1; 0 <= r; r -= 1) {
                    1 === i["$_GIs"](t, r) && (n = (n << 1) + i["$_GIs"](e, r))
                }
                return n
            }, n = "", r = "", s = e["length"], a = 0; a < s; a += 3) {
                var c;
                if (a + 2 < s) {
                    c = (e[a] << 16) + (e[a + 1] << 8) + e[a + 2],
                        n += i["$_GGr"](t(c, o["$_FJm"])) + i["$_GGr"](t(c, o["$_GAV"])) + i["$_GGr"](t(c, o["$_GBW"])) + i["$_GGr"](t(c, o["$_GCY"]))
                } else {
                    var _ = s % 3;
                    2 == _ ? (c = (e[a] << 16) + (e[a + 1] << 8),
                        n += i["$_GGr"](t(c, o["$_FJm"])) + i["$_GGr"](t(c, o["$_GAV"])) + i["$_GGr"](t(c, o["$_GBW"])),
                        r = o["$_FIg"]) : 1 == _ && (c = e[a] << 16,
                        n += i["$_GGr"](t(c, o["$_FJm"])) + i["$_GGr"](t(c, o["$_GAV"])),
                        r = o["$_FIg"] + o["$_FIg"])
                }
            }
            return {
                "res": n,
                "end": r
            }
        },
        "$_HAl": function (e) {
            var t = this["$_GJq"](this["$_GEW"](e));
            return t["res"] + t["end"]
        },
        "$_HBh": function (e) {
            var t = this["$_GJq"](e);
            return t["res"] + t["end"]
        },
        "$_HCe": function (e, i) {
            var s = this;
            i || (i = s);
            for (var t = function (e, t) {
                if (e < 0) {
                    return 0
                }
                for (var n = 5, r = 0, o = i["$_GDj"] - 1; 0 <= o; o -= 1) {
                    1 === s["$_GIs"](t, o) && (r += s["$_GIs"](e, n) << o,
                        n -= 1)
                }
                return r
            }, n = e["length"], r = "", o = 0; o < n; o += 4) {
                var a = t(s["$_GHZ"](e["charAt"](o)), i["$_FJm"]) + t(s["$_GHZ"](e["charAt"](o + 1)), i["$_GAV"]) + t(s["$_GHZ"](e["charAt"](o + 2)), i["$_GBW"]) + t(s["$_GHZ"](e["charAt"](o + 3)), i["$_GCY"])
                    , c = a >> 16 & 255;
                if (r += String["fromCharCode"](c),
                e["charAt"](o + 2) !== i["$_FIg"]) {
                    var _ = a >> 8 & 255;
                    if (r += String["fromCharCode"](_),
                    e["charAt"](o + 3) !== i["$_FIg"]) {
                        var l = 255 & a;
                        r += String["fromCharCode"](l)
                    }
                }
            }
            return r
        },
        "$_HDX": function (e) {
            var t = 4 - e["length"] % 4;
            if (t < 4) {
                for (var n = 0; n < t; n += 1) {
                    e += this["$_FIg"]
                }
            }
            return this["$_HCe"](e)
        },
        "$_HEq": function (e) {
            return this["$_HDX"](e)
        }
    };

    var he = function () {
        var l, u, n, p, e = {},
            t = /[\\"\u0000-\u001f\u007f-\u009f\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g;

        function r(e) {
            return e < 10 ? "0" + e : e
        }

        function o() {
            return this["valueOf"]()
        }

        function h(e) {
            return t["lastIndex"] = 0,
                t["test"](e) ? '"' + e["replace"](t, function (e) {
                    var t = n[e];
                    return "string" == typeof t ? t : "\\u" + ("0000" + e["charCodeAt"](0)["toString"](16))["slice"](-4)
                }) + '"' : '"' + e + '"'
        }

        return "function" != typeof Date["prototype"]["toJSON"] && (Date["prototype"]["toJSON"] = function () {
            return isFinite(this["valueOf"]()) ? this["getUTCFullYear"]() + "-" + r(this["getUTCMonth"]() + 1) + "-" + r(this["getUTCDate"]()) + "T" + r(this["getUTCHours"]()) + ":" + r(this["getUTCMinutes"]()) + ":" + r(this["getUTCSeconds"]()) + "Z" : null
        }
            ,
            Boolean["prototype"]["toJSON"] = o,
            Number["prototype"]["toJSON"] = o,
            String["prototype"]["toJSON"] = o),
            n = {
                "\b": "\\b",
                "\t": "\\t",
                "\n": "\\n",
                "\f": "\\f",
                "\r": "\\r",
                '"': '\\"',
                "\\": "\\\\"
            },
            e["stringify"] = function (e, t, n) {
                var r;
                if (u = l = "",
                "number" == typeof n) {
                    for (r = 0; r < n; r += 1) {
                        u += " "
                    }
                } else {
                    "string" == typeof n && (u = n)
                }
                if ((p = t) && "function" != typeof t && ("object" != typeof t || "number" != typeof t["length"])) {
                    throw new Error("JSON.stringify")
                }
                return function _(e, t) {
                    var n, r, o, i, s, a = l, c = t[e];
                    switch (c && "object" == typeof c && "function" == typeof c["toJSON"] && (c = c["toJSON"](e)),
                    "function" == typeof p && (c = p["call"](t, e, c)),
                        typeof c) {
                        case "string":
                            return h(c);
                        case "number":
                            return isFinite(c) ? String(c) : "null";
                        case "boolean":
                        case "null":
                            return String(c);
                        case "object":
                            if (!c) {
                                return "null"
                            }
                            if (l += u,
                                s = [],
                            "[object Array]" === Object["prototype"]["toString"]["apply"](c)) {
                                for (i = c["length"],
                                         n = 0; n < i; n += 1) {
                                    s[n] = _(n, c) || "null"
                                }
                                return o = 0 === s["length"] ? "[]" : l ? "[\n" + l + s["join"](",\n" + l) + "\n" + a + "]" : "[" + s["join"](",") + "]",
                                    l = a,
                                    o
                            }
                            if (p && "object" == typeof p) {
                                for (i = p["length"],
                                         n = 0; n < i; n += 1) {
                                    "string" == typeof p[n] && (o = _(r = p[n], c)) && s["push"](h(r) + (l ? ": " : ":") + o)
                                }
                            } else {
                                for (r in c) {
                                    Object["prototype"]["hasOwnProperty"]["call"](c, r) && (o = _(r, c)) && s["push"](h(r) + (l ? ": " : ":") + o)
                                }
                            }
                            return o = 0 === s["length"] ? "{}" : l ? "{\n" + l + s["join"](",\n" + l) + "\n" + a + "}" : "{" + s["join"](",") + "}",
                                l = a,
                                o
                    }
                }("", {
                    "": e
                })
            }
            ,
            e
    }();

    var ie = function () {
        function e() {
            return (65536 * (1 + Math["random"]()) | 0)["toString"](16)["substring"](1)
        }

        return function () {
            return e() + e() + e() + e()
        }
    }();

    var X = function () {
        function n() {
            this["i"] = 0,
                this["j"] = 0,
                this["S"] = []
        }

        n["prototype"]["init"] = function S(e) {
            var t, n, r;
            for (t = 0; t < 256; ++t) {
                this["S"][t] = t
            }
            for (t = n = 0; t < 256; ++t) {
                n = n + this["S"][t] + e[t % e["length"]] & 255,
                    r = this["S"][t],
                    this["S"][t] = this["S"][n],
                    this["S"][n] = r
            }
            this["i"] = 0,
                this["j"] = 0
        }
            ,
            n["prototype"]["next"] = function T() {
                var e;
                return this["i"] = this["i"] + 1 & 255,
                    this["j"] = this["j"] + this["S"][this["i"]] & 255,
                    e = this["S"][this["i"]],
                    this["S"][this["i"]] = this["S"][this["j"]],
                    this["S"][this["j"]] = e,
                    this["S"][e + this["S"][this["i"]] & 255]
            }
        ;
        var r, o, i, e, s = 256;
        if (null == o) {
            var t;
            o = [],
                i = 0;
            try {
                if (window["crypto"] && window["crypto"]["getRandomValues"]) {
                    var a = new Uint32Array(256);
                    for (window["crypto"]["getRandomValues"](a),
                             t = 0; t < a["length"]; ++t) {
                        o[i++] = 255 & a[t]
                    }
                }
            } catch (C) {
            }
            var c = 0
                , _ = function (e) {
                if (256 <= (c = c || 0) || s <= i) {
                    window["removeEventListener"] ? (c = 0,
                        window["removeEventListener"]("mousemove", _, !1)) : window["detachEvent"] && (c = 0,
                        window["detachEvent"]("onmousemove", _))
                } else {
                    try {
                        var t = e["x"] + e["y"];
                        o[i++] = 255 & t,
                            c += 1
                    } catch (C) {
                    }
                }
            };
            window["addEventListener"] ? window["addEventListener"]("mousemove", _, !1) : window["attachEvent"] && window["attachEvent"]("onmousemove", _)
        }

        function l() {
            if (null == r) {
                r = function t() {
                    return new n()
                }();
                while (i < s) {
                    var e = Math["floor"](65536 * Math["random"]());
                    o[i++] = 255 & e
                }
                for (r["init"](o),
                         i = 0; i < o["length"]; ++i) {
                    o[i] = 0
                }
                i = 0
            }
            return r["next"]()
        }

        function u() {
        }

        u["prototype"]["nextBytes"] = function A(e) {
            var t;
            for (t = 0; t < e["length"]; ++t) {
                e[t] = l()
            }
        }
        ;

        function w(e, t, n) {
            null != e && ("number" == typeof e ? this["fromNumber"](e, t, n) : null == t && "string" != typeof e ? this["fromString"](e, 256) : this["fromString"](e, t))
        }

        function x() {
            return new w(null)
        }

        e = "Microsoft Internet Explorer" == pe["appName"] ? (w["prototype"]["am"] = function k(e, t, n, r, o, i) {
            var s = 32767 & t
                , a = t >> 15;
            while (0 <= --i) {
                var c = 32767 & this[e]
                    , _ = this[e++] >> 15
                    , l = a * c + _ * s;
                o = ((c = s * c + ((32767 & l) << 15) + n[r] + (1073741823 & o)) >>> 30) + (l >>> 15) + a * _ + (o >>> 30),
                    n[r++] = 1073741823 & c
            }
            return o
        }
            ,
            30) : "Netscape" != pe["appName"] ? (w["prototype"]["am"] = function M(e, t, n, r, o, i) {
            while (0 <= --i) {
                var s = t * this[e++] + n[r] + o;
                o = Math["floor"](s / 67108864),
                    n[r++] = 67108863 & s
            }
            return o
        }
            ,
            26) : (w["prototype"]["am"] = function R(e, t, n, r, o, i) {
            var s = 16383 & t
                , a = t >> 14;
            while (0 <= --i) {
                var c = 16383 & this[e]
                    , _ = this[e++] >> 14
                    , l = a * c + _ * s;
                o = ((c = s * c + ((16383 & l) << 14) + n[r] + o) >> 28) + (l >> 14) + a * _,
                    n[r++] = 268435455 & c
            }
            return o
        }
            ,
            28),
            w["prototype"]["DB"] = e,
            w["prototype"]["DM"] = (1 << e) - 1,
            w["prototype"]["DV"] = 1 << e;
        w["prototype"]["FV"] = Math["pow"](2, 52),
            w["prototype"]["F1"] = 52 - e,
            w["prototype"]["F2"] = 2 * e - 52;
        var p, h, f = "0123456789abcdefghijklmnopqrstuvwxyz", g = [];
        for (p = "0"["charCodeAt"](0),
                 h = 0; h <= 9; ++h) {
            g[p++] = h
        }
        for (p = "a"["charCodeAt"](0),
                 h = 10; h < 36; ++h) {
            g[p++] = h
        }
        for (p = "A"["charCodeAt"](0),
                 h = 10; h < 36; ++h) {
            g[p++] = h
        }

        function d(e) {
            return f["charAt"](e)
        }

        function v(e) {
            var t = x();
            return t["fromInt"](e),
                t
        }

        function y(e) {
            var t, n = 1;
            return 0 != (t = e >>> 16) && (e = t,
                n += 16),
            0 != (t = e >> 8) && (e = t,
                n += 8),
            0 != (t = e >> 4) && (e = t,
                n += 4),
            0 != (t = e >> 2) && (e = t,
                n += 2),
            0 != (t = e >> 1) && (e = t,
                n += 1),
                n
        }

        function m(e) {
            this["m"] = e
        }

        function b(e) {
            this["m"] = e,
                this["mp"] = e["invDigit"](),
                this["mpl"] = 32767 & this["mp"],
                this["mph"] = this["mp"] >> 15,
                this["um"] = (1 << e["DB"] - 15) - 1,
                this["mt2"] = 2 * e["t"]
        }

        function E() {
            this["n"] = null,
                this["e"] = 0,
                this["d"] = null,
                this["p"] = null,
                this["q"] = null,
                this["dmp1"] = null,
                this["dmq1"] = null,
                this["coeff"] = null;
            this["setPublic"]("00C1E3934D1614465B33053E7F48EE4EC87B14B95EF88947713D25EECBFF7E74C7977D02DC1D9451F79DD5D1C10C29ACB6A9B4D6FB7D0A0279B6719E1772565F09AF627715919221AEF91899CAE08C0D686D748B20A3603BE2318CA6BC2B59706592A9219D0BF05C9F65023A21D2330807252AE0066D59CEEFA5F2748EA80BAB81", "10001")
        }

        return m["prototype"]["convert"] = function D(e) {
            return e["s"] < 0 || 0 <= e["compareTo"](this["m"]) ? e["mod"](this["m"]) : e
        }
            ,
            m["prototype"]["revert"] = function O(e) {
                return e
            }
            ,
            m["prototype"]["reduce"] = function L(e) {
                e["divRemTo"](this["m"], null, e)
            }
            ,
            m["prototype"]["mulTo"] = function N(e, t, n) {
                e["multiplyTo"](t, n),
                    this["reduce"](n)
            }
            ,
            m["prototype"]["sqrTo"] = function P(e, t) {
                e["squareTo"](t),
                    this["reduce"](t)
            }
            ,
            b["prototype"]["convert"] = function F(e) {
                var t = x();
                return e["abs"]()["dlShiftTo"](this["m"]["t"], t),
                    t["divRemTo"](this["m"], null, t),
                e["s"] < 0 && 0 < t["compareTo"](w["ZERO"]) && this["m"]["subTo"](t, t),
                    t
            }
            ,
            b["prototype"]["revert"] = function I(e) {
                var t = x();
                return e["copyTo"](t),
                    this["reduce"](t),
                    t
            }
            ,
            b["prototype"]["reduce"] = function B(e) {
                while (e["t"] <= this["mt2"]) {
                    e[e["t"]++] = 0
                }
                for (var t = 0; t < this["m"]["t"]; ++t) {
                    var n = 32767 & e[t]
                        ,
                        r = n * this["mpl"] + ((n * this["mph"] + (e[t] >> 15) * this["mpl"] & this["um"]) << 15) & e["DM"];
                    e[n = t + this["m"]["t"]] += this["m"]["am"](0, r, e, t, 0, this["m"]["t"]);
                    while (e[n] >= e["DV"]) {
                        e[n] -= e["DV"],
                            e[++n]++
                    }
                }
                e["clamp"](),
                    e["drShiftTo"](this["m"]["t"], e),
                0 <= e["compareTo"](this["m"]) && e["subTo"](this["m"], e)
            }
            ,
            b["prototype"]["mulTo"] = function j(e, t, n) {
                e["multiplyTo"](t, n),
                    this["reduce"](n)
            }
            ,
            b["prototype"]["sqrTo"] = function H(e, t) {
                e["squareTo"](t),
                    this["reduce"](t)
            }
            ,
            w["prototype"]["copyTo"] = function G(e) {
                for (var t = this["t"] - 1; 0 <= t; --t) {
                    e[t] = this[t]
                }
                e["t"] = this["t"],
                    e["s"] = this["s"]
            }
            ,
            w["prototype"]["fromInt"] = function U(e) {
                this["t"] = 1,
                    this["s"] = e < 0 ? -1 : 0,
                    0 < e ? this[0] = e : e < -1 ? this[0] = e + this["DV"] : this["t"] = 0
            }
            ,
            w["prototype"]["fromString"] = function V(e, t) {
                var n;
                if (16 == t) {
                    n = 4
                } else {
                    if (8 == t) {
                        n = 3
                    } else {
                        if (256 == t) {
                            n = 8
                        } else {
                            if (2 == t) {
                                n = 1
                            } else {
                                if (32 == t) {
                                    n = 5
                                } else {
                                    if (4 != t) {
                                        return void this["fromRadix"](e, t)
                                    }
                                    n = 2
                                }
                            }
                        }
                    }
                }
                this["t"] = 0,
                    this["s"] = 0;
                var r, o, i = e["length"], s = !1, a = 0;
                while (0 <= --i) {
                    var c = 8 == n ? 255 & e[i] : (r = i,
                        null == (o = g[e["charCodeAt"](r)]) ? -1 : o);
                    c < 0 ? "-" == e["charAt"](i) && (s = !0) : (s = !1,
                        0 == a ? this[this["t"]++] = c : a + n > this["DB"] ? (this[this["t"] - 1] |= (c & (1 << this["DB"] - a) - 1) << a,
                            this[this["t"]++] = c >> this["DB"] - a) : this[this["t"] - 1] |= c << a,
                    (a += n) >= this["DB"] && (a -= this["DB"]))
                }
                8 == n && 0 != (128 & e[0]) && (this["s"] = -1,
                0 < a && (this[this["t"] - 1] |= (1 << this["DB"] - a) - 1 << a)),
                    this["clamp"](),
                s && w["ZERO"]["subTo"](this, this)
            }
            ,
            w["prototype"]["clamp"] = function X() {
                var e = this["s"] & this["DM"];
                while (0 < this["t"] && this[this["t"] - 1] == e) {
                    --this["t"]
                }
            }
            ,
            w["prototype"]["dlShiftTo"] = function q(e, t) {
                var n;
                for (n = this["t"] - 1; 0 <= n; --n) {
                    t[n + e] = this[n]
                }
                for (n = e - 1; 0 <= n; --n) {
                    t[n] = 0
                }
                t["t"] = this["t"] + e,
                    t["s"] = this["s"]
            }
            ,
            w["prototype"]["drShiftTo"] = function z(e, t) {
                for (var n = e; n < this["t"]; ++n) {
                    t[n - e] = this[n]
                }
                t["t"] = Math["max"](this["t"] - e, 0),
                    t["s"] = this["s"]
            }
            ,
            w["prototype"]["lShiftTo"] = function W(e, t) {
                var n, r = e % this["DB"], o = this["DB"] - r, i = (1 << o) - 1, s = Math["floor"](e / this["DB"]),
                    a = this["s"] << r & this["DM"];
                for (n = this["t"] - 1; 0 <= n; --n) {
                    t[n + s + 1] = this[n] >> o | a,
                        a = (this[n] & i) << r
                }
                for (n = s - 1; 0 <= n; --n) {
                    t[n] = 0
                }
                t[s] = a,
                    t["t"] = this["t"] + s + 1,
                    t["s"] = this["s"],
                    t["clamp"]()
            }
            ,
            w["prototype"]["rShiftTo"] = function $(e, t) {
                t["s"] = this["s"];
                var n = Math["floor"](e / this["DB"]);
                if (n >= this["t"]) {
                    t["t"] = 0
                } else {
                    var r = e % this["DB"]
                        , o = this["DB"] - r
                        , i = (1 << r) - 1;
                    t[0] = this[n] >> r;
                    for (var s = n + 1; s < this["t"]; ++s) {
                        t[s - n - 1] |= (this[s] & i) << o,
                            t[s - n] = this[s] >> r
                    }
                    0 < r && (t[this["t"] - n - 1] |= (this["s"] & i) << o),
                        t["t"] = this["t"] - n,
                        t["clamp"]()
                }
            }
            ,
            w["prototype"]["subTo"] = function Y(e, t) {
                var n = 0
                    , r = 0
                    , o = Math["min"](e["t"], this["t"]);
                while (n < o) {
                    r += this[n] - e[n],
                        t[n++] = r & this["DM"],
                        r >>= this["DB"]
                }
                if (e["t"] < this["t"]) {
                    r -= e["s"];
                    while (n < this["t"]) {
                        r += this[n],
                            t[n++] = r & this["DM"],
                            r >>= this["DB"]
                    }
                    r += this["s"]
                } else {
                    r += this["s"];
                    while (n < e["t"]) {
                        r -= e[n],
                            t[n++] = r & this["DM"],
                            r >>= this["DB"]
                    }
                    r -= e["s"]
                }
                t["s"] = r < 0 ? -1 : 0,
                    r < -1 ? t[n++] = this["DV"] + r : 0 < r && (t[n++] = r),
                    t["t"] = n,
                    t["clamp"]()
            }
            ,
            w["prototype"]["multiplyTo"] = function K(e, t) {
                var n = this["abs"]()
                    , r = e["abs"]()
                    , o = n["t"];
                t["t"] = o + r["t"];
                while (0 <= --o) {
                    t[o] = 0
                }
                for (o = 0; o < r["t"]; ++o) {
                    t[o + n["t"]] = n["am"](0, r[o], t, o, 0, n["t"])
                }
                t["s"] = 0,
                    t["clamp"](),
                this["s"] != e["s"] && w["ZERO"]["subTo"](t, t)
            }
            ,
            w["prototype"]["squareTo"] = function J(e) {
                var t = this["abs"]()
                    , n = e["t"] = 2 * t["t"];
                while (0 <= --n) {
                    e[n] = 0
                }
                for (n = 0; n < t["t"] - 1; ++n) {
                    var r = t["am"](n, t[n], e, 2 * n, 0, 1);
                    (e[n + t["t"]] += t["am"](n + 1, 2 * t[n], e, 2 * n + 1, r, t["t"] - n - 1)) >= t["DV"] && (e[n + t["t"]] -= t["DV"],
                        e[n + t["t"] + 1] = 1)
                }
                0 < e["t"] && (e[e["t"] - 1] += t["am"](n, t[n], e, 2 * n, 0, 1)),
                    e["s"] = 0,
                    e["clamp"]()
            }
            ,
            w["prototype"]["divRemTo"] = function Z(e, t, n) {
                var r = e["abs"]();
                if (!(r["t"] <= 0)) {
                    var o = this["abs"]();
                    if (o["t"] < r["t"]) {
                        return null != t && t["fromInt"](0),
                            void (null != n && this["copyTo"](n))
                    }
                    null == n && (n = x());
                    var i = x()
                        , s = this["s"]
                        , a = e["s"]
                        , c = this["DB"] - y(r[r["t"] - 1]);
                    0 < c ? (r["lShiftTo"](c, i),
                        o["lShiftTo"](c, n)) : (r["copyTo"](i),
                        o["copyTo"](n));
                    var _ = i["t"]
                        , l = i[_ - 1];
                    if (0 != l) {
                        var u = l * (1 << this["F1"]) + (1 < _ ? i[_ - 2] >> this["F2"] : 0)
                            , p = this["FV"] / u
                            , h = (1 << this["F1"]) / u
                            , f = 1 << this["F2"]
                            , g = n["t"]
                            , d = g - _
                            , v = null == t ? x() : t;
                        i["dlShiftTo"](d, v),
                        0 <= n["compareTo"](v) && (n[n["t"]++] = 1,
                            n["subTo"](v, n)),
                            w["ONE"]["dlShiftTo"](_, v),
                            v["subTo"](i, i);
                        while (i["t"] < _) {
                            i[i["t"]++] = 0
                        }
                        while (0 <= --d) {
                            var m = n[--g] == l ? this["DM"] : Math["floor"](n[g] * p + (n[g - 1] + f) * h);
                            if ((n[g] += i["am"](0, m, n, d, 0, _)) < m) {
                                i["dlShiftTo"](d, v),
                                    n["subTo"](v, n);
                                while (n[g] < --m) {
                                    n["subTo"](v, n)
                                }
                            }
                        }
                        null != t && (n["drShiftTo"](_, t),
                        s != a && w["ZERO"]["subTo"](t, t)),
                            n["t"] = _,
                            n["clamp"](),
                        0 < c && n["rShiftTo"](c, n),
                        s < 0 && w["ZERO"]["subTo"](n, n)
                    }
                }
            }
            ,
            w["prototype"]["invDigit"] = function Q() {
                if (this["t"] < 1) {
                    return 0
                }
                var e = this[0];
                if (0 == (1 & e)) {
                    return 0
                }
                var t = 3 & e;
                return 0 < (t = (t = (t = (t = t * (2 - (15 & e) * t) & 15) * (2 - (255 & e) * t) & 255) * (2 - ((65535 & e) * t & 65535)) & 65535) * (2 - e * t % this["DV"]) % this["DV"]) ? this["DV"] - t : -t
            }
            ,
            w["prototype"]["isEven"] = function ee() {
                return 0 == (0 < this["t"] ? 1 & this[0] : this["s"])
            }
            ,
            w["prototype"]["exp"] = function te(e, t) {
                if (4294967295 < e || e < 1) {
                    return w["ONE"]
                }
                var n = x()
                    , r = x()
                    , o = t["convert"](this)
                    , i = y(e) - 1;
                o["copyTo"](n);
                while (0 <= --i) {
                    if (t["sqrTo"](n, r),
                    0 < (e & 1 << i)) {
                        t["mulTo"](r, o, n)
                    } else {
                        var s = n;
                        n = r,
                            r = s
                    }
                }
                return t["revert"](n)
            }
            ,
            w["prototype"]["toString"] = function ne(e) {
                if (this["s"] < 0) {
                    return "-" + this["negate"]()["toString"](e)
                }
                var t;
                if (16 == e) {
                    t = 4
                } else {
                    if (8 == e) {
                        t = 3
                    } else {
                        if (2 == e) {
                            t = 1
                        } else {
                            if (32 == e) {
                                t = 5
                            } else {
                                if (4 != e) {
                                    return this["toRadix"](e)
                                }
                                t = 2
                            }
                        }
                    }
                }
                var n, r = (1 << t) - 1, o = !1, i = "", s = this["t"], a = this["DB"] - s * this["DB"] % t;
                if (0 < s--) {
                    a < this["DB"] && 0 < (n = this[s] >> a) && (o = !0,
                        i = d(n));
                    while (0 <= s) {
                        a < t ? (n = (this[s] & (1 << a) - 1) << t - a,
                            n |= this[--s] >> (a += this["DB"] - t)) : (n = this[s] >> (a -= t) & r,
                        a <= 0 && (a += this["DB"],
                            --s)),
                        0 < n && (o = !0),
                        o && (i += d(n))
                    }
                }
                return o ? i : "0"
            }
            ,
            w["prototype"]["negate"] = function re() {
                var e = x();
                return w["ZERO"]["subTo"](this, e),
                    e
            }
            ,
            w["prototype"]["abs"] = function $_En() {
                return this["s"] < 0 ? this["negate"]() : this
            }
            ,
            w["prototype"]["compareTo"] = function ie(e) {
                var t = this["s"] - e["s"];
                if (0 != t) {
                    return t
                }
                var n = this["t"];
                if (0 != (t = n - e["t"])) {
                    return this["s"] < 0 ? -t : t
                }
                while (0 <= --n) {
                    if (0 != (t = this[n] - e[n])) {
                        return t
                    }
                }
                return 0
            }
            ,
            w["prototype"]["bitLength"] = function $_FT() {
                return this["t"] <= 0 ? 0 : this["DB"] * (this["t"] - 1) + y(this[this["t"] - 1] ^ this["s"] & this["DM"])
            }
            ,
            w["prototype"]["mod"] = function $_Ge(e) {
                var t = x();
                return this["abs"]()["divRemTo"](e, null, t),
                this["s"] < 0 && 0 < t["compareTo"](w["ZERO"]) && e["subTo"](t, t),
                    t
            }
            ,
            w["prototype"]["modPowInt"] = function $_HD(e, t) {
                var n;
                return n = e < 256 || t["isEven"]() ? new m(t) : new b(t),
                    this["exp"](e, n)
            }
            ,
            w["ZERO"] = v(0),
            w["ONE"] = v(1),
            E["prototype"]["doPublic"] = function $_IM(e) {
                return e["modPowInt"](this["e"], this["n"])
            }
            ,
            E["prototype"]["setPublic"] = function $_Jv(e, t) {
                null != e && null != t && 0 < e["length"] && 0 < t["length"] ? (this["n"] = function n(e, t) {
                    return new w(e, t)
                }(e, 16),
                    this["e"] = parseInt(t, 16)) : console && console["error"] && console["error"]("Invalid RSA public key")
            }
            ,
            E["prototype"]["encrypt"] = function $_BAx(e) {
                var t = function a(e, t) {
                    if (t < e["length"] + 11) {
                        return console && console["error"] && console["error"]("Message too long for RSA"),
                            null
                    }
                    var n = []
                        , r = e["length"] - 1;
                    while (0 <= r && 0 < t) {
                        var o = e["charCodeAt"](r--);
                        o < 128 ? n[--t] = o : 127 < o && o < 2048 ? (n[--t] = 63 & o | 128,
                            n[--t] = o >> 6 | 192) : (n[--t] = 63 & o | 128,
                            n[--t] = o >> 6 & 63 | 128,
                            n[--t] = o >> 12 | 224)
                    }
                    n[--t] = 0;
                    var i = new u()
                        , s = [];
                    while (2 < t) {
                        s[0] = 0;
                        while (0 == s[0]) {
                            i["nextBytes"](s)
                        }
                        n[--t] = s[0]
                    }
                    return n[--t] = 2,
                        n[--t] = 0,
                        new w(n)
                }(e, this["n"]["bitLength"]() + 7 >> 3);
                if (null == t) {
                    return null
                }
                var n = this["doPublic"](t);
                if (null == n) {
                    return null
                }
                var r = n["toString"](16);
                return 0 == (1 & r["length"]) ? r : "0" + r
            }
            ,
            E
    }()

    function Z(e) {
        this["$_JCk"] = e
    }

    Z["prototype"] = {
        "$_HFz": function(e) {
            var t = this;
            return t["$_JGC"] = t["$_JHW"],
            t["$_JHW"] = e,
            t["$_JCk"](t["$_JHW"], t["$_JGC"]),
            t
        },
        "$_HGm": function() {
            return this["$_JHW"]
        },
        "$_JIs": function(e) {
            for (var t = ee["$_JJv"](e) ? e : [e], n = 0, r = t["length"]; n < r; n += 1) {
                if (t[n] === this["$_HGm"]()) {
                    return !0
                }
            }
            return !1
        }
    }

    function ee(e) {
        this["$_BABs"] = e || []
    }

    ee["prototype"] = {
        "$_HGm": function (e) {
            return this["$_BABs"][e]
        },
        "$_BADm": function () {
            return this["$_BABs"]["length"]
        },
        "$_BFL": function (e, t) {
            return new ee(W(t) ? this["$_BABs"]["slice"](e, t) : this["$_BABs"]["slice"](e))
        },
        "$_BAEm": function (e) {
            return this["$_BABs"]["push"](e),
                this
        },
        "$_BAFX": function (e, t) {
            return this["$_BABs"]["splice"](e, t || 1)
        },
        "$_BHX": function (e) {
            return this["$_BABs"]["join"](e)
        },
        "$_BAGZ": function (e) {
            return new ee(this["$_BABs"]["concat"](e))
        },
        "$_BGx": function (e) {
            var t = this["$_BABs"];
            if (t["map"]) {
                return new ee(t["map"](e))
            }
            for (var n = [], r = 0, o = t["length"]; r < o; r += 1) {
                n[r] = e(t[r], r, this)
            }
            return new ee(n)
        },
        "$_BAHY": function (e) {
            var t = this["$_BABs"];
            if (t["filter"]) {
                return new ee(t["filter"](e))
            }
            for (var n = [], r = 0, o = t["length"]; r < o; r += 1) {
                e(t[r], r, this) && n["push"](t[r])
            }
            return new ee(n)
        },
        "$_BAIt": function (e) {
            var t = this["$_BABs"];
            if (t["indexOf"]) {
                return t["indexOf"](e)
            }
            for (var n = 0, r = t["length"]; n < r; n += 1) {
                if (t[n] === e) {
                    return n
                }
            }
            return -1
        },
        "$_BAJo": function (e) {
            var t = this["$_BABs"];
            if (!t["forEach"]) {
                for (var n = arguments[1], r = 0; r < t["length"]; r++) {
                    r in t && e["call"](n, t[r], r, this)
                }
            }
            return t["forEach"](e)
        }
    },
    ee["$_JJv"] = function (e) {
        return Array["isArray"] ? Array["isArray"](e) : "[object Array]" === Object["prototype"]["toString"]["call"](e)
    }

    function J(e) {
        this["$_JAr"] = e,
        this["$_JBb"] = {}
    }

    J["prototype"] = {
        "$_JDD": function(e, t) {
            return this["$_JBb"][e] ? this["$_JBb"][e]["push"](t) : this["$_JBb"][e] = [t],
            this
        },
        "$_JEU": function(e, t) {
            var n = this
              , r = n["$_JBb"][e];
            if (r) {
                for (var o = 0, i = r["length"]; o < i; o += 1) {
                    try {
                        r[o](t)
                    } catch (a) {
                        var s = {
                            "error": a,
                            "type": e
                        };
                        return V(H("user_callback", n["$_JAr"], s))
                    }
                }
                return n
            }
        },
        "$_JFc": function() {
            this["$_JBb"] = {}
        }
    }

    function $_Ge() {
        return new Date()["getTime"]()
    }

    function Re() {
        this["$_CCl"] = this["$_BIAy"]()
    }

    Re["prototype"] = {
        "$_BIBS": -1,
        "$_BICD": 1,
        "$_BIDM": 0,
        "$_BIEj": function (e) {
            return e ? this["$_BICD"] : this["$_BIDM"]
        },
        "$_BIFS": function (e) {
            return void 0 === e
        },
        "$_BIGk": ["A", "ARTICLE", "ASIDE", "AUDIO", "BASE", "BUTTON", "CANVAS", "CODE", "IFRAME", "IMG", "INPUT", "LABEL", "LINK", "NAV", "OBJECT", "OL", "PICTURE", "PRE", "SECTION", "SELECT", "SOURCE", "SPAN", "STYLE", "TABLE", "TEXTAREA", "VIDEO"],
        "$_BIHf": ["DIV", "P", "UL", "LI", "SCRIPT"],
        "$_BIIC": function () {
            return ["textLength", "HTMLLength", "documentMode"]["concat"](this["$_BIGk"])["concat"](["screenLeft", "screenTop", "screenAvailLeft", "screenAvailTop", "innerWidth", "innerHeight", "outerWidth", "outerHeight", "browserLanguage", "browserLanguages", "systemLanguage", "devicePixelRatio", "colorDepth", "userAgent", "cookieEnabled", "netEnabled", "screenWidth", "screenHeight", "screenAvailWidth", "screenAvailHeight", "localStorageEnabled", "sessionStorageEnabled", "indexedDBEnabled", "CPUClass", "platform", "doNotTrack", "timezone", "canvas2DFP", "canvas3DFP", "plugins", "maxTouchPoints", "flashEnabled", "javaEnabled", "hardwareConcurrency", "jsFonts", "timestamp", "performanceTiming", "internalip", "mediaDevices"])["concat"](this["$_BIHf"])["concat"](["deviceorientation", "touchEvent"])
        },
        "$_BIAy": function () {
            function s(e) {
                if (e) {
                    if (1 === e["nodeType"]) {
                        var t = (e["nodeName"] || "")["toUpperCase"]();
                        -1 < new ee(f["$_BIGk"]["concat"](f["$_BIHf"]))["$_BAIt"](t) && (i[t] ? i[t] += 1 : i[t] = 1)
                    }
                    for (var n = e["childNodes"], r = 0, o = n["length"]; r < o; r += 1) {
                        s(n[r])
                    }
                }
            }

            var e = window
                , t = e["screen"]
                , p = e["document"]
                , h = e["navigator"]
                , n = p["documentElement"]
                , f = this
                , i = {};
            // s(p);  dom操作，没有实际意义，直接注释
            // var r = n["textContent"] || n["innerText"];
            // i["textLength"] = r["length"];  检测文本长度，直接写死
            i["textLength"] = 1021;
            try {
                // var o = n["innerHTML"];
                // i["HTMLLength"] = o["length"]  检测文本长度，直接写死
                i["HTMLLength"] = 11117
            } catch (g) {
            }
            i["documentMode"] = p["documentMode"] || p["compatMode"],
            i["browserLanguage"] = h["language"] || h["userLanguage"],
            i["browserLanguages"] = h["languages"] && h["languages"]["join"](","),
            i["systemLanguage"] = h["systemLanguage"],
            i["devicePixelRatio"] = e["devicePixelRatio"],
            i["colorDepth"] = t["colorDepth"],
            i["userAgent"] = h["userAgent"],
            i["cookieEnabled"] = f["$_BIEj"](h["cookieEnabled"]),
            i["netEnabled"] = f["$_BIEj"](h["onLine"]),
            i["innerWidth"] = e["innerWidth"],
            i["innerHeight"] = e["innerHeight"];
            try {
                i["outerWidth"] = e["outerWidth"],
                i["outerHeight"] = e["outerHeight"]
            } catch (g) {
                i["outerWidth"] = f["$_BIDM"],
                i["outerHeight"] = f["$_BIDM"]
            }
            i["screenWidth"] = t["width"],
            i["screenHeight"] = t["height"],
            i["screenAvailWidth"] = t["availWidth"],
            i["screenAvailHeight"] = t["availHeight"],
            i["screenLeft"] = t["left"] || e["screenLeft"],
            i["screenTop"] = t["top"] || e["screenTop"],
            i["screenAvailLeft"] = t["availLeft"],
            i["screenAvailTop"] = t["availTop"];
            try {
                i["localStorageEnabled"] = f["$_BIEj"](e["localStorage"])
            } catch (g) {
                i["localStorageEnabled"] = f["$_BIDM"]
            }
            try {
                i["sessionStorageEnabled"] = f["$_BIEj"](e["sessionStorage"])
            } catch (g) {
                i["sessionStorageEnabled"] = f["$_BIDM"]
            }
            return i["indexedDBEnabled"] = f["$_BIEj"](e["indexedDB"]),
                i["CPUClass"] = h["cpuClass"],
                i["platform"] = h["platform"],
                i["doNotTrack"] = f["$_BIEj"](h["doNotTrack"]),
                i["timezone"] = new Date()["getTimezoneOffset"]() / 60,
                i["canvas2DFP"] = function () {
                    var e = p["createElement"]("canvas")
                        , t = e["getContext"] && e["getContext"]("2d");
                    if (t) {
                        var n = [];
                        return "95b7568b82add71109874e3a62b93498"  // canvas检测不严格，同一个浏览器指纹不变，直接写死
                        // return e["width"] = 2000,
                            // e["height"] = 200,
                            // e["style"]["display"] = "inline",
                            // t["rect"](0, 0, 11, 11),
                            // t["rect"](3, 3, 6, 6),
                            // n["push"]("canvas winding:" + (!1 === t["isPointInPath"](5, 5, "evenodd") ? "yes" : "no")),
                            // t["textBaseline"] = "alphabetic",
                            // t["fillStyle"] = "#f60",
                            // t["fillRect"](125, 1, 62, 20),
                            // t["fillStyle"] = "#069",
                            // t["font"] = "11pt Arial",
                            // t["fillText"]("Cwm fjordbank glyphs vext quiz, \ud83d\ude03", 2, 15),
                            // t["fillStyle"] = "rgba(102, 204, 0, 0.7)",
                            // t["font"] = "18pt Arial",
                            // t["fillText"]("Cwm fjordbank glyphs vext quiz, \ud83d\ude03", 4, 45),
                            // t["globalCompositeOperation"] = "multiply",
                            // t["fillStyle"] = "rgb(255,0,255)",
                            // t["beginPath"](),
                            // t["arc"](52, 50, 50, 0, 2 * Math["PI"], !0),
                            // t["closePath"](),
                            // t["fill"](),
                            // t["fillStyle"] = "rgb(0,255,255)",
                            // t["beginPath"](),
                            // t["arc"](100, 50, 50, 0, 2 * Math["PI"], !0),
                            // t["closePath"](),
                            // t["fill"](),
                            // t["fillStyle"] = "rgb(255,255,0)",
                            // t["beginPath"](),
                            // t["arc"](75, 100, 50, 0, 2 * Math["PI"], !0),
                            // t["closePath"](),
                            // t["fill"](),
                            // t["fillStyle"] = "rgb(255,0,255)",
                            // t["arc"](75, 75, 75, 0, 2 * Math["PI"], !0),
                            // t["arc"](75, 75, 25, 0, 2 * Math["PI"], !0),
                            // t["fill"]("evenodd"),
                            // n["push"]("canvas fp:" + e["toDataURL"]()),
                            // j(n["join"]("~"))
                    }
                    return f["$_BIDM"]
                }(),
                i["canvas3DFP"] = function () {
                    try {
                        if (/\(i[^;]+;( U;)? CPU.+Mac OS X/["test"](h["userAgent"])) {
                            return f["$_BIDM"]
                        }
                        var e = p["createElement"]("canvas")
                            ,
                            t = e["getContext"] && (e["getContext"]("webgl") || e["getContext"]("experimental-webgl"));
                        if (t) {
                            var r = []
                                , o = t["createBuffer"]();
                            t["bindBuffer"](t["ARRAY_BUFFER"], o);
                            var i = new Float32Array([-0.2, -0.9, 0, 0.4, -0.26, 0, 0, 0.732134444, 0]);
                            t["bufferData"](t["ARRAY_BUFFER"], i, t["STATIC_DRAW"]),
                                o["itemSize"] = 3,
                                o["numItems"] = 3;
                            var s = t["createProgram"]()
                                , a = t["createShader"](t["VERTEX_SHADER"]);
                            t["shaderSource"](a, "attribute vec2 attrVertex;varying vec2 varyinTexCoordinate;uniform vec2 uniformOffset;void main(){varyinTexCoordinate=attrVertex+uniformOffset;gl_Position=vec4(attrVertex,0,1);}"),
                                t["compileShader"](a);
                            var c = t["createShader"](t["FRAGMENT_SHADER"]);
                            return t["shaderSource"](c, "precision mediump float;varying vec2 varyinTexCoordinate;void main() {gl_FragColor=vec4(varyinTexCoordinate,0,1);}"),
                                t["compileShader"](c),
                                t["attachShader"](s, a),
                                t["attachShader"](s, c),
                                t["linkProgram"](s),
                                t["useProgram"](s),
                                s["vertexPosAttrib"] = t["getAttribLocation"](s, "attrVertex"),
                                s["offsetUniform"] = t["getUniformLocation"](s, "uniformOffset"),
                                t["enableVertexAttribArray"](s["vertexPosArray"]),
                                t["vertexAttribPointer"](s["vertexPosAttrib"], o["itemSize"], t["FLOAT"], !1, 0, 0),
                                t["uniform2f"](s["offsetUniform"], 1, 1),
                                t["drawArrays"](t["TRIANGLE_STRIP"], 0, o["numItems"]),
                            null != t["canvas"] && r["push"](t["canvas"]["toDataURL"]()),
                                r["push"]("extensions:" + t["getSupportedExtensions"]()["join"](";")),
                                r["push"]("webgl aliased line width range:" + n(t["getParameter"](t["ALIASED_LINE_WIDTH_RANGE"]))),
                                r["push"]("webgl aliased point size range:" + n(t["getParameter"](t["ALIASED_POINT_SIZE_RANGE"]))),
                                r["push"]("webgl alpha bits:" + t["getParameter"](t["ALPHA_BITS"])),
                                r["push"]("webgl antialiasing:" + (t["getContextAttributes"]()["antialias"] ? "yes" : "no")),
                                r["push"]("webgl blue bits:" + t["getParameter"](t["BLUE_BITS"])),
                                r["push"]("webgl depth bits:" + t["getParameter"](t["DEPTH_BITS"])),
                                r["push"]("webgl green bits:" + t["getParameter"](t["GREEN_BITS"])),
                                r["push"]("webgl max anisotropy:" + ((u = (_ = t)["getExtension"]("EXT_texture_filter_anisotropic") || _["getExtension"]("WEBKIT_EXT_texture_filter_anisotropic") || _["getExtension"]("MOZ_EXT_texture_filter_anisotropic")) ? (0 === (l = _["getParameter"](u["MAX_TEXTURE_MAX_ANISOTROPY_EXT"])) && (l = 2),
                                    l) : null)),
                                r["push"]("webgl max combined texture image units:" + t["getParameter"](t["MAX_COMBINED_TEXTURE_IMAGE_UNITS"])),
                                r["push"]("webgl max cube map texture size:" + t["getParameter"](t["MAX_CUBE_MAP_TEXTURE_SIZE"])),
                                r["push"]("webgl max fragment uniform vectors:" + t["getParameter"](t["MAX_FRAGMENT_UNIFORM_VECTORS"])),
                                r["push"]("webgl max render buffer size:" + t["getParameter"](t["MAX_RENDERBUFFER_SIZE"])),
                                r["push"]("webgl max texture image units:" + t["getParameter"](t["MAX_TEXTURE_IMAGE_UNITS"])),
                                r["push"]("webgl max texture size:" + t["getParameter"](t["MAX_TEXTURE_SIZE"])),
                                r["push"]("webgl max varying vectors:" + t["getParameter"](t["MAX_VARYING_VECTORS"])),
                                r["push"]("webgl max vertex attribs:" + t["getParameter"](t["MAX_VERTEX_ATTRIBS"])),
                                r["push"]("webgl max vertex texture image units:" + t["getParameter"](t["MAX_VERTEX_TEXTURE_IMAGE_UNITS"])),
                                r["push"]("webgl max vertex uniform vectors:" + t["getParameter"](t["MAX_VERTEX_UNIFORM_VECTORS"])),
                                r["push"]("webgl max viewport dims:" + n(t["getParameter"](t["MAX_VIEWPORT_DIMS"]))),
                                r["push"]("webgl red bits:" + t["getParameter"](t["RED_BITS"])),
                                r["push"]("webgl renderer:" + t["getParameter"](t["RENDERER"])),
                                r["push"]("webgl shading language version:" + t["getParameter"](t["SHADING_LANGUAGE_VERSION"])),
                                r["push"]("webgl stencil bits:" + t["getParameter"](t["STENCIL_BITS"])),
                                r["push"]("webgl vendor:" + t["getParameter"](t["VENDOR"])),
                                r["push"]("webgl version:" + t["getParameter"](t["VERSION"])),
                                t["getShaderPrecisionFormat"] ? (r["push"]("webgl vertex shader high float precision:" + t["getShaderPrecisionFormat"](t["VERTEX_SHADER"], t["HIGH_FLOAT"])["precision"]),
                                    r["push"]("webgl vertex shader high float precision rangeMin:" + t["getShaderPrecisionFormat"](t["VERTEX_SHADER"], t["HIGH_FLOAT"])["rangeMin"]),
                                    r["push"]("webgl vertex shader high float precision rangeMax:" + t["getShaderPrecisionFormat"](t["VERTEX_SHADER"], t["HIGH_FLOAT"])["rangeMax"]),
                                    r["push"]("webgl vertex shader medium float precision:" + t["getShaderPrecisionFormat"](t["VERTEX_SHADER"], t["MEDIUM_FLOAT"])["precision"]),
                                    r["push"]("webgl vertex shader medium float precision rangeMin:" + t["getShaderPrecisionFormat"](t["VERTEX_SHADER"], t["MEDIUM_FLOAT"])["rangeMin"]),
                                    r["push"]("webgl vertex shader medium float precision rangeMax:" + t["getShaderPrecisionFormat"](t["VERTEX_SHADER"], t["MEDIUM_FLOAT"])["rangeMax"]),
                                    r["push"]("webgl vertex shader low float precision:" + t["getShaderPrecisionFormat"](t["VERTEX_SHADER"], t["LOW_FLOAT"])["precision"]),
                                    r["push"]("webgl vertex shader low float precision rangeMin:" + t["getShaderPrecisionFormat"](t["VERTEX_SHADER"], t["LOW_FLOAT"])["rangeMin"]),
                                    r["push"]("webgl vertex shader low float precision rangeMax:" + t["getShaderPrecisionFormat"](t["VERTEX_SHADER"], t["LOW_FLOAT"])["rangeMax"]),
                                    r["push"]("webgl fragment shader high float precision:" + t["getShaderPrecisionFormat"](t["FRAGMENT_SHADER"], t["HIGH_FLOAT"])["precision"]),
                                    r["push"]("webgl fragment shader high float precision rangeMin:" + t["getShaderPrecisionFormat"](t["FRAGMENT_SHADER"], t["HIGH_FLOAT"])["rangeMin"]),
                                    r["push"]("webgl fragment shader high float precision rangeMax:" + t["getShaderPrecisionFormat"](t["FRAGMENT_SHADER"], t["HIGH_FLOAT"])["rangeMax"]),
                                    r["push"]("webgl fragment shader medium float precision:" + t["getShaderPrecisionFormat"](t["FRAGMENT_SHADER"], t["MEDIUM_FLOAT"])["precision"]),
                                    r["push"]("webgl fragment shader medium float precision rangeMin:" + t["getShaderPrecisionFormat"](t["FRAGMENT_SHADER"], t["MEDIUM_FLOAT"])["rangeMin"]),
                                    r["push"]("webgl fragment shader medium float precision rangeMax:" + t["getShaderPrecisionFormat"](t["FRAGMENT_SHADER"], t["MEDIUM_FLOAT"])["rangeMax"]),
                                    r["push"]("webgl fragment shader low float precision:" + t["getShaderPrecisionFormat"](t["FRAGMENT_SHADER"], t["LOW_FLOAT"])["precision"]),
                                    r["push"]("webgl fragment shader low float precision rangeMin:" + t["getShaderPrecisionFormat"](t["FRAGMENT_SHADER"], t["LOW_FLOAT"])["rangeMin"]),
                                    r["push"]("webgl fragment shader low float precision rangeMax:" + t["getShaderPrecisionFormat"](t["FRAGMENT_SHADER"], t["LOW_FLOAT"])["rangeMax"]),
                                    r["push"]("webgl vertex shader high int precision:" + t["getShaderPrecisionFormat"](t["VERTEX_SHADER"], t["HIGH_INT"])["precision"]),
                                    r["push"]("webgl vertex shader high int precision rangeMin:" + t["getShaderPrecisionFormat"](t["VERTEX_SHADER"], t["HIGH_INT"])["rangeMin"]),
                                    r["push"]("webgl vertex shader high int precision rangeMax:" + t["getShaderPrecisionFormat"](t["VERTEX_SHADER"], t["HIGH_INT"])["rangeMax"]),
                                    r["push"]("webgl vertex shader medium int precision:" + t["getShaderPrecisionFormat"](t["VERTEX_SHADER"], t["MEDIUM_INT"])["precision"]),
                                    r["push"]("webgl vertex shader medium int precision rangeMin:" + t["getShaderPrecisionFormat"](t["VERTEX_SHADER"], t["MEDIUM_INT"])["rangeMin"]),
                                    r["push"]("webgl vertex shader medium int precision rangeMax:" + t["getShaderPrecisionFormat"](t["VERTEX_SHADER"], t["MEDIUM_INT"])["rangeMax"]),
                                    r["push"]("webgl vertex shader low int precision:" + t["getShaderPrecisionFormat"](t["VERTEX_SHADER"], t["LOW_INT"])["precision"]),
                                    r["push"]("webgl vertex shader low int precision rangeMin:" + t["getShaderPrecisionFormat"](t["VERTEX_SHADER"], t["LOW_INT"])["rangeMin"]),
                                    r["push"]("webgl vertex shader low int precision rangeMax:" + t["getShaderPrecisionFormat"](t["VERTEX_SHADER"], t["LOW_INT"])["rangeMax"]),
                                    r["push"]("webgl fragment shader high int precision:" + t["getShaderPrecisionFormat"](t["FRAGMENT_SHADER"], t["HIGH_INT"])["precision"]),
                                    r["push"]("webgl fragment shader high int precision rangeMin:" + t["getShaderPrecisionFormat"](t["FRAGMENT_SHADER"], t["HIGH_INT"])["rangeMin"]),
                                    r["push"]("webgl fragment shader high int precision rangeMax:" + t["getShaderPrecisionFormat"](t["FRAGMENT_SHADER"], t["HIGH_INT"])["rangeMax"]),
                                    r["push"]("webgl fragment shader medium int precision:" + t["getShaderPrecisionFormat"](t["FRAGMENT_SHADER"], t["MEDIUM_INT"])["precision"]),
                                    r["push"]("webgl fragment shader medium int precision rangeMin:" + t["getShaderPrecisionFormat"](t["FRAGMENT_SHADER"], t["MEDIUM_INT"])["rangeMin"]),
                                    r["push"]("webgl fragment shader medium int precision rangeMax:" + t["getShaderPrecisionFormat"](t["FRAGMENT_SHADER"], t["MEDIUM_INT"])["rangeMax"]),
                                    r["push"]("webgl fragment shader low int precision:" + t["getShaderPrecisionFormat"](t["FRAGMENT_SHADER"], t["LOW_INT"])["precision"]),
                                    r["push"]("webgl fragment shader low int precision rangeMin:" + t["getShaderPrecisionFormat"](t["FRAGMENT_SHADER"], t["LOW_INT"])["rangeMin"]),
                                    r["push"]("webgl fragment shader low int precision rangeMax:" + t["getShaderPrecisionFormat"](t["FRAGMENT_SHADER"], t["LOW_INT"])["rangeMax"]),
                                    j(r["join"]("~"))) : j(r["join"]("~"))
                        }
                        return f["$_BIDM"]
                    } catch (g) {
                        return f["$_BIDM"]
                    }
                    var _, l, u
                }(),
                i["plugins"] = 'internal-pdf-viewer,internal-pdf-viewer,internal-pdf-viewer,internal-pdf-viewer,internal-pdf-viewer',
                // i["plugins"] = function () {
                //     if (!h["plugins"]) {
                //         return f["$_BIBS"]
                //     }
                //     for (var e = [], t = 0, n = 40 < h["plugins"]["length"] ? 40 : h["plugins"]["length"]; t < n; t += 1) {
                //         var r = h["plugins"][t];
                //         e["push"](r["filename"] && r["filename"]["replace"](/\s/g, ""))
                //     }
                //     return e["join"](",")
                // }(),
                // i["maxTouchPoints"] = f["$_BIFS"](h["maxTouchPoints"]) ? f["$_BIFS"](h["msMaxTouchPoints"]) ? 0 : h["msMaxTouchPoints"] : h["maxTouchPoints"],
                i["maxTouchPoints"] = 0,
                // i["flashEnabled"] = f["$_BIFS"](e["swfobject"]) ? f["$_BIBS"] : f["$_BIEj"](e["swfobject"]["hasFlashPlayerVersion"] && e["swfobject"]["hasFlashPlayerVersion"]("9.0.0")),
                i["flashEnabled"] = -1,
                i["javaEnabled"] = function () {
                    try {
                        // return f["$_BIFS"](h["javaEnabled"]) ? f["$_BIBS"] : f["$_BIEj"](h["javaEnabled"]())
                        return 0
                    } catch (g) {
                        return f["$_BIBS"]
                    }
                }(),
                i["hardwareConcurrency"] = h["hardwareConcurrency"],
                i["jsFonts"] = 'Arial,Courier,CourierNew,Helvetica,Times,TimesNewRoman,Wingdings,Wingdings2,Wingdings3',
                i["mediaDevices"] = f["$_BIBS"],
                // 以防万一，还是直接替换了i的值
                {"SCRIPT":20,"LINK":4,"IFRAME":1,"DIV":37,"UL":2,"LI":4,"A":21,"SPAN":5,"IMG":3,"P":7,"INPUT":4,"LABEL":2,"BUTTON":1,"textLength":1021,"HTMLLength":11117,"documentMode":"CSS1Compat","browserLanguage":"zh-CN","browserLanguages":"zh-CN,zh,ru","devicePixelRatio":1,"colorDepth":24,"userAgent":"Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/95.0.4638.54 Safari/537.36","cookieEnabled":1,"netEnabled":1,"innerWidth":930,"innerHeight":910,"outerWidth":1920,"outerHeight":1020,"screenWidth":1920,"screenHeight":1080,"screenAvailWidth":1920,"screenAvailHeight":1020,"screenLeft":0,"screenTop":0,"screenAvailLeft":0,"screenAvailTop":0,"localStorageEnabled":1,"sessionStorageEnabled":1,"indexedDBEnabled":1,"platform":"Linux x86_64","doNotTrack":0,"timezone":-8,"canvas2DFP":"95b7568b82add71109874e3a62b93498","canvas3DFP":0,"plugins":"internal-pdf-viewer,internal-pdf-viewer,internal-pdf-viewer,internal-pdf-viewer,internal-pdf-viewer","maxTouchPoints":0,"flashEnabled":-1,"javaEnabled":0,"hardwareConcurrency":12,"jsFonts":"Arial,Courier,CourierNew,Helvetica,Times,TimesNewRoman,Wingdings,Wingdings2,Wingdings3","mediaDevices":-1}
        },
        "$_BHCI": function () {
            return this["$_BHDt"]()["length"]
        },
        "$_BHEo": function (e, t) {
            var n = this
                , r = n["$_CCl"]
                , o = [];
            return new ee(n["$_BIIC"]())["$_BGx"](function (e) {
                var t = r[e];
                o["push"](n["$_BIFS"](t) ? n["$_BIBS"] : t)
            }),
                o["join"]("magic data")
        },
        "$_BHDt": function () {
            var n = this
                , r = n["$_CCl"];
            r["timestamp"] = new Date()["getTime"](),
                r["deviceorientation"] = n["$_BIBS"],
                r["touchEvent"] = n["$_BIBS"],
                r["performanceTiming"] = n["$_BIBS"],
                r["internalip"] = n["$_BIBS"];
            var o = [];
            return new ee(n["$_BIIC"]())["$_BGx"](function (e) {
                var t = r[e];
                o["push"](n["$_BIFS"](t) ? n["$_BIBS"] : t)
            }),
                o["join"]("!!")
        }
    }

    function $_En() {
        return parseInt(10000 * Math["random"]()) + new Date()["valueOf"]()
    }

    function et(e) {
        this["$_BJIQ"] = $_En(),
            this["$_BIJr"]({
                "protocol": g
            })["$_BIJr"](e)
    }

    et["prototype"] = {
        "challenge": "",
        "gt": "",
        "type": "fullpage",
        "api_server": "api.geetest.com",
        "static_servers": ["static.geetest.com", "dn-staticdown.qbox.me"],
        "product": "popup",
        "lang": "zh-cn",
        "width": '300.0000px',
        "logo": !0,
        "protocol": "http://",
        "https": !1,
        "autoReset": !0,
        "version": "9.0.9",
        "theme": "wind",
        "theme_version": "1.5.8",
        "homepage": "https://www.geetest.com/first_page",
        "$_BIJr": function (e) {
            return function (n, e) {
                new te(e)["$_CAe"](function (e, t) {
                    n[e] = t
                })
            }(this, e),
                this
        }
    }

    function te(e) {
        this["$_BACN"] = e
    }

    te["prototype"] = {
        "$_CAe": function (e) {
            var t = this["$_BACN"];
            for (var n in t) {
                t["hasOwnProperty"](n) && e(n, t[n])
            }
            return this
        },
        "$_BBAC": function () {
            var e = this["$_BACN"];
            for (var t in e) {
                if (e["hasOwnProperty"](t)) {
                    return !1
                }
            }
            return !0
        }
    }

    var ot = $_Ge();
    var qe = new Qe(Config);
    return qe['$_CEBq']();
}

console.log(sdk());