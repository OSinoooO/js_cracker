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
                    n["$_BJCV"](e, t)
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
            n["$_BJHV"] = new Ce(),
            n["$_BDFa"] = new Me()
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
                    n["$_CBAl"] = n["$_BGEc"]()["$_FB_"](function () {
                        o["$_HFz"](Oe),
                            i["$_JEU"](De),
                        s["vip_content"] && n["$_CBBE"]()
                    })
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
            return N(n, p["$_HDX"]("fFtZ0VaY4Gg"), s)["$_FB_"](function (e) {
                return e["status"] === qe ? V(G(e, t, "/get.php")) : (n["$_BIJr"](e["data"]),
                n["apiserver"] && (n["api_server"] = n["apiserver"]),
                n["staticservers"] && (n["static_servers"] = n["staticservers"]),
                n["debugConfig"] && n["$_BIJr"](n["debugConfig"]),
                    t["$_CAHr"] = new rt(t),
                    t["$_CCHj"](),
                    t["$_CAHr"]["$_CCIm"])
            }, function () {
                return V(H("url_get", t))
            })
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
                , s = $_Ge() - ot;
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
                            r = "{" + i["$_CEEm"] + '"captcha_token":"' + n(o["toString"]() + n(n["toString"]()) + n(e["toString"]())) + '"}'
                    }(t["shift"](), new Date()),
                        i["$_CECf"] = p["$_HBh"](_["encrypt"](r, i["$_CCGs"]()))
                }
            }(),
                i["$_CEGn"]("")
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
            e["$_BBn"] = ke["deviceorientation"],
                e["te"] = ke["touchEvent"],
                e["$_BCU"] = ke["mouseEvent"];
            var t = !x && Te;
            return e["ven"] = t["vendor"] || -1,
                e["ren"] = t["renderer"] || -1,
                e["fp"] = this["$_BJHV"]["$_BFJq"],
                e["lp"] = this["$_BJHV"]["$_BGAh"],
                e["em"] = {},
                Q([], e["em"]),
                e["tm"] = new be()["$_BFEr"](),
                e["by"] = this["$_BJGL"],
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

    var qe = new Qe(Config)
}

sdk();