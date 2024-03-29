// 补环境
window = global;

CanvasRenderingContext2D = {};
HTMLCanvasElement = {
    getContent: CanvasRenderingContext2D
};

window['document'] = {
    body: "",
    head: "",
    documentElement: "",
    getElementsByTagName: function (name) {
        return "";
    },
    createElement: function (element) {
        return HTMLCanvasElement;
    }
};
window["location"] = {
    protocol: 'https:'
};
window["navigator"] = {
    userAgent: "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/90.0.4430.212 Safari/537.36"
};
window['screen'] = {
    colorDepth: 24
};
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

var T = window["document"]
    , c = window["location"]
    , _ = T["body"] || T["getElementsByTagName"]("body")[0]
    , f = T["head"] || T["getElementsByTagName"]("head")[0]
    , w = T["documentElement"] || _
    , n = c["protocol"] + "//"
    , C = window["navigator"];
var d = function () {
    // var e = T["createElement"]("canvas");
    // var t = e["getContext"] && e["getContext"]("2d");
    // var r = /msie/i["test"](C["userAgent"]);
    // return !t && r;
    return false;
}();
var g = /Mobi/i["test"](C["userAgent"]);
var v = /msie 6\.0/i["test"](C["userAgent"]);
var m = /msie 7\.0/i["test"](C["userAgent"]);
var x = T["compatMode"] === "BackCompat";
var y = parseFloat(C["userAgent"]["slice"](C["userAgent"]["indexOf"]("Android") + 8)) < 5 ? true : false;
var b = parseFloat(C["userAgent"]["slice"](C["userAgent"]["indexOf"]("Android") + 8)) < 4.4 ? true : false;
var E = C["userAgent"]["indexOf"]("Android") > -1;
var k = "Network Error";
var A = "geetest_";
var Re = "init"
    , Pe = "ready"
    , De = "start_detect"
    , Oe = "detect"
    , Fe = "wait_compute"
    , Le = "start_compute"
    , Ne = "compute_1"
    , Be = "compute_2"
    , He = "radar_success"
    , je = "radar_error"
    , Ge = "radar_click"
    , Ue = "radar_click_ready"
    , qe = "radar_click_hide"
    , Xe = "click_error"
    , Ve = "success"
    , ze = "error"
    , We = "not_compatible"
    , $e = "reset"
    , Ye = "close"
    , Ke = "back";
var Je = "float"
    , Ze = "popup"
    , Qe = "bind"
    , et = "custom";

var uu = {
    "DaAe": {
        "EMXU": "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789()",
        "FXqN": ".",
        "GEgP": 7274496,
        "HvJz": 9483264,
        "IMbq": 19220,
        "JJUj": 235,
        "KuCj": 24
    },
    "EMXU": "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789()",
    "FXqN": ".",
    "GEgP": 7274496,
    "HvJz": 9483264,
    "IMbq": 19220,
    "JJUj": 235,
    "KuCj": 24,
    "LDqx": function (e) {
        var t = [];

        for (var r = 0, n = e["length"]; r < n; r += 1) {
            t["push"](e["charCodeAt"](r));
        }

        return t;
    },
    "MGtE": function (e) {
        var t = "";

        for (var r = 0, n = e["length"]; r < n; r += 1) {
            t += String["fromCharCode"](e[r]);
        }

        return t;
    },
    "NCbB": function (e) {
        var t = this["EMXU"];

        if (e < 0 || e >= t["length"]) {
            return ".";
        }

        return t["charAt"](e);
    },
    "OiAg": function (e) {
        var t = this["EMXU"];
        return t["indexOf"](e);
    },
    "PBIg": function (e, t) {
        return e >> t & 1;
    },
    "QRME": function (e, i) {
        var a = this;

        if (!i) {
            i = a;
        }

        function t(e, t) {
            var r = 0;

            for (var n = i["KuCj"] - 1; n >= 0; n -= 1) {
                if (a["PBIg"](t, n) === 1) {
                    r = (r << 1) + a["PBIg"](e, n);
                }
            }

            return r;
        }

        var r = ""
            , n = "";
        var o = e["length"];

        for (var s = 0; s < o; s += 3) {
            var c;

            if (s + 2 < o) {
                c = (e[s] << 16) + (e[s + 1] << 8) + e[s + 2];
                r += a["NCbB"](t(c, i["GEgP"])) + a["NCbB"](t(c, i["HvJz"])) + a["NCbB"](t(c, i["IMbq"])) + a["NCbB"](t(c, i["JJUj"]));
            } else {
                var _ = o % 3;

                if (_ === 2) {
                    c = (e[s] << 16) + (e[s + 1] << 8);
                    r += a["NCbB"](t(c, i["GEgP"])) + a["NCbB"](t(c, i["HvJz"])) + a["NCbB"](t(c, i["IMbq"]));
                    n = i["FXqN"];
                } else if (_ === 1) {
                    c = e[s] << 16;
                    r += a["NCbB"](t(c, i["GEgP"])) + a["NCbB"](t(c, i["HvJz"]));
                    n = i["FXqN"] + i["FXqN"];
                }
            }
        }

        return {
            "res": r,
            "end": n
        };
    },
    "RrSY": function (e) {
        var t = this;
        var r = t["QRME"](t["LDqx"](e));
        return r["res"] + r["end"];
    },
    "SBoX": function (e) {
        var t = this;
        var r = t["QRME"](e);
        return r["res"] + r["end"];
    },
    "TsNJ": function (e, a) {
        var o = this;

        if (!a) {
            a = o;
        }

        function t(e, t) {
            if (e < 0) {
                return 0;
            }

            var r = 5;
            var n = 0;

            for (var i = a["KuCj"] - 1; i >= 0; i -= 1) {
                if (o["PBIg"](t, i) === 1) {
                    n += o["PBIg"](e, r) << i;
                    r -= 1;
                }
            }

            return n;
        }

        var r = e["length"];
        var n = "";

        for (var i = 0; i < r; i += 4) {
            var s = t(o["OiAg"](e["charAt"](i)), a["GEgP"]) + t(o["OiAg"](e["charAt"](i + 1)), a["HvJz"]) + t(o["OiAg"](e["charAt"](i + 2)), a["IMbq"]) + t(o["OiAg"](e["charAt"](i + 3)), a["JJUj"]);
            var c = s >> 16 & 255;
            n += String["fromCharCode"](c);

            if (e["charAt"](i + 2) !== a["FXqN"]) {
                var _ = s >> 8 & 255;

                n += String["fromCharCode"](_);

                if (e["charAt"](i + 3) !== a["FXqN"]) {
                    var l = s & 255;
                    n += String["fromCharCode"](l);
                }
            }
        }

        return n;
    },
    "UgRL": function (e) {
        var t = this;
        var r = 4 - e["length"] % 4;

        if (r < 4) {
            for (var n = 0; n < r; n += 1) {
                e += t["FXqN"];
            }
        }

        return t["TsNJ"](e);
    },
    "VPcw": function (e) {
        var t = this;
        return t["UgRL"](e);
    }
};

function it() {
    var r = Object["create"] || function () {
        function F() {
        }

        return function (e) {
            var t;
            F["prototype"] = e;
            t = new F();
            F["prototype"] = null;
            return t;
        }
            ;
    }();

    var e = {};
    var t = e["lib"] = {};

    var n = t["Base"] = function () {
        return {
            "extend": function (e) {
                var t = r(this);

                if (e) {
                    t["mixIn"](e);
                }

                if (!t["hasOwnProperty"]("init") || this["init"] === t["init"]) {
                    t["init"] = function () {
                        t["$super"]["init"]["apply"](this, arguments);
                    }
                    ;
                }

                t["init"]["prototype"] = t;
                t["$super"] = this;
                return t;
            },
            "create": function () {
                var e = this["extend"]();
                e["init"]["apply"](e, arguments);
                return e;
            },
            "init": function () {
            },
            "mixIn": function (e) {
                for (var t in e) {
                    if (e["hasOwnProperty"](t)) {
                        this[t] = e[t];
                    }
                }

                if (e["hasOwnProperty"]("toString")) {
                    this["toString"] = e["toString"];
                }
            }
        };
    }();

    var u = t["WordArray"] = n["extend"]({
        "init": function (e, t) {
            e = this["words"] = e || [];

            if (t != undefined) {
                this["sigBytes"] = t;
            } else {
                this["sigBytes"] = e["length"] * 4;
            }
        },
        "concat": function (e) {
            var t = this["words"];
            var r = e["words"];
            var n = this["sigBytes"];
            var i = e["sigBytes"];
            this["clamp"]();

            if (n % 4) {
                for (var a = 0; a < i; a++) {
                    var o = r[a >>> 2] >>> 24 - a % 4 * 8 & 255;
                    t[n + a >>> 2] |= o << 24 - (n + a) % 4 * 8;
                }
            } else {
                for (var a = 0; a < i; a += 4) {
                    t[n + a >>> 2] = r[a >>> 2];
                }
            }

            this["sigBytes"] += i;
            return this;
        },
        "clamp": function () {
            var e = this["words"];
            var t = this["sigBytes"];
            e[t >>> 2] &= 4294967295 << 32 - t % 4 * 8;
            e["length"] = Math["ceil"](t / 4);
        }
    });
    var i = e["enc"] = {};
    var l = i["Latin1"] = {
        "parse": function (e) {
            var t = e["length"];
            var r = [];

            for (var n = 0; n < t; n++) {
                r[n >>> 2] |= (e["charCodeAt"](n) & 255) << 24 - n % 4 * 8;
            }

            return new u["init"](r, t);
        }
    };
    var a = i["Utf8"] = {
        "parse": function (e) {
            return l["parse"](unescape(encodeURIComponent(e)));
        }
    };
    var o = t["BufferedBlockAlgorithm"] = n["extend"]({
        "reset": function () {
            this["TRdL"] = new u["init"]();
            this["ALXj"] = 0;
        },
        "BdzC": function (e) {
            if (typeof e == "string") {
                e = a["parse"](e);
            }

            this["TRdL"]["concat"](e);
            this["ALXj"] += e["sigBytes"];
        },
        "CQlA": function (e) {
            var t = this["TRdL"];
            var r = t["words"];
            var n = t["sigBytes"];
            var i = this["blockSize"];
            var a = i * 4;
            var o = n / a;

            if (e) {
                o = Math["ceil"](o);
            } else {
                o = Math["max"]((o | 0) - this["DBL_"], 0);
            }

            var s = o * i;
            var c = Math["min"](s * 4, n);

            if (s) {
                for (var _ = 0; _ < s; _ += i) {
                    this["EDMm"](r, _);
                }

                var l = r["splice"](0, s);
                t["sigBytes"] -= c;
            }

            return new u["init"](l, c);
        },
        "DBL_": 0
    });
    var s = e["algo"] = {};
    var c = t["Cipher"] = o["extend"]({
        "cfg": n["extend"](),
        "createEncryptor": function (e, t) {
            return this["create"](this["Fbrm"], e, t);
        },
        "init": function (e, t, r) {
            this["cfg"] = this["cfg"]["extend"](r);
            this["Gdob"] = e;
            this["Hjcm"] = t;
            this["reset"]();
        },
        "reset": function () {
            o["reset"]["call"](this);
            this["Icvl"]();
        },
        "process": function (e) {
            this["BdzC"](e);
            return this["CQlA"]();
        },
        "finalize": function (e) {
            if (e) {
                this["BdzC"](e);
            }

            var t = this["JaTd"]();
            return t;
        },
        "keySize": 128 / 32,
        "ivSize": 128 / 32,
        "Fbrm": 1,
        "KcCq": 2,
        "LTfr": function () {
            return function (_) {
                return {
                    "encrypt": function (e, t, r) {
                        var t = l["parse"](t);

                        if (!r || !r["iv"]) {
                            r = r || {};
                            r["iv"] = l["parse"]("0000000000000000");
                        }

                        var n = m["encrypt"](_, e, t, r);
                        var i = n["ciphertext"]["words"];
                        var a = n["ciphertext"]["sigBytes"];
                        var o = [];

                        for (var s = 0; s < a; s++) {
                            var c = i[s >>> 2] >>> 24 - s % 4 * 8 & 255;
                            o["push"](c);
                        }

                        return o;
                    },
                    "encrypt1": function (e, t, r) {
                        var t = l["parse"](t);

                        if (!r || !r["iv"]) {
                            r = r || {};
                            r["iv"] = l["parse"]("0000000000000000");
                        }

                        var n = m["encrypt"](_, e, t, r);
                        var i = n["ciphertext"]["words"];
                        var a = n["ciphertext"]["sigBytes"];
                        var o = [];

                        for (var s = 0; s < a; s++) {
                            var c = i[s >>> 2] >>> 24 - s % 4 * 8 & 255;
                            o["push"](c);
                        }

                        return o;
                    }
                };
            }
                ;
        }()
    });

    var _ = e["mode"] = {};

    var f = t["BlockCipherMode"] = n["extend"]({
        "createEncryptor": function (e, t) {
            return this["Encryptor"]["create"](e, t);
        },
        "init": function (e, t) {
            this["MVPD"] = e;
            this["NTXi"] = t;
        }
    });

    var p = _["CBC"] = function () {
        var e = f["extend"]();
        e["Encryptor"] = e["extend"]({
            "processBlock": function (e, t) {
                var r = this["MVPD"];
                var n = r["blockSize"];
                rnUH["call"](this, e, t, n);
                r["encryptBlock"](e, t);
                this["OgTK"] = e["slice"](t, t + n);
            }
        });

        function rnUH(e, t, r) {
            var n = this["NTXi"];

            if (n) {
                var i = n;
                this["NTXi"] = undefined;
            } else {
                var i = this["OgTK"];
            }

            for (var a = 0; a < r; a++) {
                e[t + a] ^= i[a];
            }
        }

        return e;
    }();

    var h = e["pad"] = {};
    var g = h["Pkcs7"] = {
        "pad": function (e, t) {
            var r = t * 4;
            var n = r - e["sigBytes"] % r;
            var i = n << 24 | n << 16 | n << 8 | n;
            var a = [];

            for (var o = 0; o < n; o += 4) {
                a["push"](i);
            }

            var s = u["create"](a, n);
            e["concat"](s);
        }
    };
    var d = t["BlockCipher"] = c["extend"]({
        "cfg": c["cfg"]["extend"]({
            "mode": p,
            "padding": g
        }),
        "reset": function () {
            c["reset"]["call"](this);
            var e = this["cfg"];
            var t = e["iv"];
            var r = e["mode"];

            if (this["Gdob"] == this["Fbrm"]) {
                var n = r["createEncryptor"];
            }

            if (this["Pg_p"] && this["Pg_p"]["QLtQ"] == n) {
                this["Pg_p"]["init"](this, t && t["words"]);
            } else {
                this["Pg_p"] = n["call"](r, this, t && t["words"]);
                this["Pg_p"]["QLtQ"] = n;
            }
        },
        "EDMm": function (e, t) {
            this["Pg_p"]["processBlock"](e, t);
        },
        "JaTd": function () {
            var e = this["cfg"]["padding"];

            if (this["Gdob"] == this["Fbrm"]) {
                e["pad"](this["TRdL"], this["blockSize"]);
                var t = this["CQlA"](!!"flush");
            }

            return t;
        },
        "blockSize": 128 / 32
    });
    var v = t["CipherParams"] = n["extend"]({
        "init": function (e) {
            this["mixIn"](e);
        }
    });
    var m = t["SerializableCipher"] = n["extend"]({
        "cfg": n["extend"](),
        "encrypt": function (e, t, r, n) {
            n = this["cfg"]["extend"](n);
            var i = e["createEncryptor"](r, n);
            var a = i["finalize"](t);
            var o = i["cfg"];
            return v["create"]({
                "ciphertext": a,
                "key": r,
                "iv": o["iv"],
                "algorithm": e,
                "mode": o["mode"],
                "padding": o["padding"],
                "blockSize": e["blockSize"],
                "formatter": n["format"]
            });
        }
    });
    var w = [];
    var x = [];
    var y = [];
    var b = [];
    var E = [];
    var S = [];
    var T = [];
    var C = [];
    var A = [];
    var k = [];

    (function () {
            var e = [];

            for (var t = 0; t < 256; t++) {
                if (t < 128) {
                    e[t] = t << 1;
                } else {
                    e[t] = t << 1 ^ 283;
                }
            }

            var r = 0;
            var n = 0;

            for (var t = 0; t < 256; t++) {
                var i = n ^ n << 1 ^ n << 2 ^ n << 3 ^ n << 4;
                i = i >>> 8 ^ i & 255 ^ 99;
                w[r] = i;
                x[i] = r;
                var a = e[r];
                var o = e[a];
                var s = e[o];
                var c = e[i] * 257 ^ i * 16843008;
                y[r] = c << 24 | c >>> 8;
                b[r] = c << 16 | c >>> 16;
                E[r] = c << 8 | c >>> 24;
                S[r] = c;
                var c = s * 16843009 ^ o * 65537 ^ a * 257 ^ r * 16843008;
                T[i] = c << 24 | c >>> 8;
                C[i] = c << 16 | c >>> 16;
                A[i] = c << 8 | c >>> 24;
                k[i] = c;

                if (!r) {
                    r = n = 1;
                } else {
                    r = a ^ e[e[e[s ^ a]]];
                    n ^= e[e[n]];
                }
            }
        }
    )();

    var I = [0, 1, 2, 4, 8, 16, 32, 64, 128, 27, 54];
    var M = s["AES"] = d["extend"]({
        "Icvl": function () {
            if (this["RyjV"] && this["Sher"] === this["Hjcm"]) {
                return;
            }

            var e = this["Sher"] = this["Hjcm"];
            var t = e["words"];
            var r = e["sigBytes"] / 4;
            var n = this["RyjV"] = r + 6;
            var i = (n + 1) * 4;
            var a = this["TUaH"] = [];

            for (var o = 0; o < i; o++) {
                if (o < r) {
                    a[o] = t[o];
                } else {
                    var s = a[o - 1];

                    if (!(o % r)) {
                        s = s << 8 | s >>> 24;
                        s = w[s >>> 24] << 24 | w[s >>> 16 & 255] << 16 | w[s >>> 8 & 255] << 8 | w[s & 255];
                        s ^= I[o / r | 0] << 24;
                    } else if (r > 6 && o % r == 4) {
                        s = w[s >>> 24] << 24 | w[s >>> 16 & 255] << 16 | w[s >>> 8 & 255] << 8 | w[s & 255];
                    }

                    a[o] = a[o - r] ^ s;
                }
            }

            var c = this["UwcY"] = [];

            for (var _ = 0; _ < i; _++) {
                var o = i - _;

                if (_ % 4) {
                    var s = a[o];
                } else {
                    var s = a[o - 4];
                }

                if (_ < 4 || o <= 4) {
                    c[_] = s;
                } else {
                    c[_] = T[w[s >>> 24]] ^ C[w[s >>> 16 & 255]] ^ A[w[s >>> 8 & 255]] ^ k[w[s & 255]];
                }
            }
        },
        "encryptBlock": function (e, t) {
            this["Vnag"](e, t, this["TUaH"], y, b, E, S, w);
        },
        "Vnag": function (e, t, r, n, i, a, o, s) {
            var c = this["RyjV"];

            var _ = e[t] ^ r[0];

            var l = e[t + 1] ^ r[1];
            var u = e[t + 2] ^ r[2];
            var f = e[t + 3] ^ r[3];
            var p = 4;

            for (var h = 1; h < c; h++) {
                var g = n[_ >>> 24] ^ i[l >>> 16 & 255] ^ a[u >>> 8 & 255] ^ o[f & 255] ^ r[p++];
                var d = n[l >>> 24] ^ i[u >>> 16 & 255] ^ a[f >>> 8 & 255] ^ o[_ & 255] ^ r[p++];
                var v = n[u >>> 24] ^ i[f >>> 16 & 255] ^ a[_ >>> 8 & 255] ^ o[l & 255] ^ r[p++];
                var m = n[f >>> 24] ^ i[_ >>> 16 & 255] ^ a[l >>> 8 & 255] ^ o[u & 255] ^ r[p++];
                _ = g;
                l = d;
                u = v;
                f = m;
            }

            var g = (s[_ >>> 24] << 24 | s[l >>> 16 & 255] << 16 | s[u >>> 8 & 255] << 8 | s[f & 255]) ^ r[p++];
            var d = (s[l >>> 24] << 24 | s[u >>> 16 & 255] << 16 | s[f >>> 8 & 255] << 8 | s[_ & 255]) ^ r[p++];
            var v = (s[u >>> 24] << 24 | s[f >>> 16 & 255] << 16 | s[_ >>> 8 & 255] << 8 | s[l & 255]) ^ r[p++];
            var m = (s[f >>> 24] << 24 | s[_ >>> 16 & 255] << 16 | s[l >>> 8 & 255] << 8 | s[u & 255]) ^ r[p++];
            e[t] = g;
            e[t + 1] = d;
            e[t + 2] = v;
            e[t + 3] = m;
        },
        "keySize": 256 / 32
    });
    e["AES"] = d["LTfr"](M);
    return e["AES"];
}

function iZrR(e) {
    this["USyc"] = e;
}

iZrR["prototype"] = {
    "bOlF": function (e) {
        var t = this["USyc"];

        for (var r in t) {
            if (t["hasOwnProperty"](r)) {
                e(r, t[r]);
            }
        }

        return this;
    },
    "VRIt": function () {
        var e = this["USyc"];

        for (var t in e) {
            if (e["hasOwnProperty"](t)) {
                return false;
            }
        }

        return true;
    }
};

function fe(r, e) {
    new iZrR(e)["bOlF"](function (e, t) {
        r[e] = t;
    });
}

function se() {
    return function () {
        return parseInt(Math["random"]() * 1e4) + new Date()["valueOf"]();
    }
}

function ye(e) {
    try {
        return (e / xe)["toFixed"](4) + we;
    } catch (t) {
        return e + "px";
    }
}

function wDdk(e) {
    var t = this;
    t["bZsF"] = se();
    t["Wnw_"]({
        "protocol": "https://"
    })["Wnw_"](e);
}

wDdk["prototype"] = {
    "challenge": "",
    "gt": "",
    "type": "fullpage",
    "api_server": "api.geetest.com",
    "static_servers": ["static.geetest.com", "dn-staticdown.qbox.me"],
    "product": "popup",
    "lang": "zh-cn",
    "width": ye(300),
    "logo": true,
    "protocol": "http://",
    "https": false,
    "autoReset": true,
    "version": "9.0.7",
    "theme": "wind",
    "theme_version": "1.5.8",
    "homepage": "https://www.geetest.com/first_page",
    "Wnw_": function (e) {
        var t = this;
        fe(t, e);
        return t;
    }
};

function me(e, t, r) {
    if (!t || !r) {
        return e;
    }

    var n = 0;
    var i = 2;
    var a;
    var o = e;
    var s = t[0]
        , c = t[2]
        , _ = t[4];

    while (a = r["substr"](n, i)) {
        n += i;
        var l = parseInt(a, 16);
        var u = String["fromCharCode"](l);
        var f = (s * l * l + c * l + _) % e["length"];
        o = o["substr"](0, f) + u + o["substr"](f);
    }

    return o;
}

function Z(e) {
    function HoFV(e, t) {
        return e << t | e >>> 32 - t;
    }

    function Indm(e, t) {
        var r, n, i, a, o;
        i = e & 2147483648;
        a = t & 2147483648;
        r = e & 1073741824;
        n = t & 1073741824;
        o = (e & 1073741823) + (t & 1073741823);

        if (r & n) {
            return o ^ 2147483648 ^ i ^ a;
        }

        if (r | n) {
            if (o & 1073741824) {
                return o ^ 3221225472 ^ i ^ a;
            } else {
                return o ^ 1073741824 ^ i ^ a;
            }
        } else {
            return o ^ i ^ a;
        }
    }

    function F(e, t, r) {
        return e & t | ~e & r;
    }

    function G(e, t, r) {
        return e & r | t & ~r;
    }

    function H(e, t, r) {
        return e ^ t ^ r;
    }

    function I(e, t, r) {
        return t ^ (e | ~r);
    }

    function FF(e, t, r, n, i, a, o) {
        e = Indm(e, Indm(Indm(F(t, r, n), i), o));
        return Indm(HoFV(e, a), t);
    }

    function GG(e, t, r, n, i, a, o) {
        e = Indm(e, Indm(Indm(G(t, r, n), i), o));
        return Indm(HoFV(e, a), t);
    }

    function HH(e, t, r, n, i, a, o) {
        e = Indm(e, Indm(Indm(H(t, r, n), i), o));
        return Indm(HoFV(e, a), t);
    }

    function II(e, t, r, n, i, a, o) {
        e = Indm(e, Indm(Indm(I(t, r, n), i), o));
        return Indm(HoFV(e, a), t);
    }

    function JUDF(e) {
        var t;
        var r = e["length"];
        var n = r + 8;
        var i = (n - n % 64) / 64;
        var a = (i + 1) * 16;
        var o = Array(a - 1);
        var s = 0;
        var c = 0;

        while (c < r) {
            t = (c - c % 4) / 4;
            s = c % 4 * 8;
            o[t] = o[t] | e["charCodeAt"](c) << s;
            c++;
        }

        t = (c - c % 4) / 4;
        s = c % 4 * 8;
        o[t] = o[t] | 128 << s;
        o[a - 2] = r << 3;
        o[a - 1] = r >>> 29;
        return o;
    }

    function KvGJ(e) {
        var t = "", r = "", n, i;

        for (i = 0; i <= 3; i++) {
            n = e >>> i * 8 & 255;
            r = "0" + n["toString"](16);
            t = t + r["substr"](r["length"] - 2, 2);
        }

        return t;
    }

    function LCAS(e) {
        e = e["replace"](/\r\n/g, "\n");
        var t = "";

        for (var r = 0; r < e["length"]; r++) {
            var n = e["charCodeAt"](r);

            if (n < 128) {
                t += String["fromCharCode"](n);
            } else if (n > 127 && n < 2048) {
                t += String["fromCharCode"](n >> 6 | 192);
                t += String["fromCharCode"](n & 63 | 128);
            } else {
                t += String["fromCharCode"](n >> 12 | 224);
                t += String["fromCharCode"](n >> 6 & 63 | 128);
                t += String["fromCharCode"](n & 63 | 128);
            }
        }

        return t;
    }

    var t = [];

    var r, n, i, a, o, s, c, _, l;

    var u = 7
        , f = 12
        , p = 17
        , h = 22;
    var g = 5
        , d = 9
        , v = 14
        , m = 20;
    var w = 4
        , x = 11
        , y = 16
        , b = 23;
    var E = 6
        , S = 10
        , T = 15
        , C = 21;
    e = LCAS(e);
    t = JUDF(e);
    s = 1732584193;
    c = 4023233417;
    _ = 2562383102;
    l = 271733878;

    for (r = 0; r < t["length"]; r += 16) {
        n = s;
        i = c;
        a = _;
        o = l;
        s = FF(s, c, _, l, t[r + 0], u, 3614090360);
        l = FF(l, s, c, _, t[r + 1], f, 3905402710);
        _ = FF(_, l, s, c, t[r + 2], p, 606105819);
        c = FF(c, _, l, s, t[r + 3], h, 3250441966);
        s = FF(s, c, _, l, t[r + 4], u, 4118548399);
        l = FF(l, s, c, _, t[r + 5], f, 1200080426);
        _ = FF(_, l, s, c, t[r + 6], p, 2821735955);
        c = FF(c, _, l, s, t[r + 7], h, 4249261313);
        s = FF(s, c, _, l, t[r + 8], u, 1770035416);
        l = FF(l, s, c, _, t[r + 9], f, 2336552879);
        _ = FF(_, l, s, c, t[r + 10], p, 4294925233);
        c = FF(c, _, l, s, t[r + 11], h, 2304563134);
        s = FF(s, c, _, l, t[r + 12], u, 1804603682);
        l = FF(l, s, c, _, t[r + 13], f, 4254626195);
        _ = FF(_, l, s, c, t[r + 14], p, 2792965006);
        c = FF(c, _, l, s, t[r + 15], h, 1236535329);
        s = GG(s, c, _, l, t[r + 1], g, 4129170786);
        l = GG(l, s, c, _, t[r + 6], d, 3225465664);
        _ = GG(_, l, s, c, t[r + 11], v, 643717713);
        c = GG(c, _, l, s, t[r + 0], m, 3921069994);
        s = GG(s, c, _, l, t[r + 5], g, 3593408605);
        l = GG(l, s, c, _, t[r + 10], d, 38016083);
        _ = GG(_, l, s, c, t[r + 15], v, 3634488961);
        c = GG(c, _, l, s, t[r + 4], m, 3889429448);
        s = GG(s, c, _, l, t[r + 9], g, 568446438);
        l = GG(l, s, c, _, t[r + 14], d, 3275163606);
        _ = GG(_, l, s, c, t[r + 3], v, 4107603335);
        c = GG(c, _, l, s, t[r + 8], m, 1163531501);
        s = GG(s, c, _, l, t[r + 13], g, 2850285829);
        l = GG(l, s, c, _, t[r + 2], d, 4243563512);
        _ = GG(_, l, s, c, t[r + 7], v, 1735328473);
        c = GG(c, _, l, s, t[r + 12], m, 2368359562);
        s = HH(s, c, _, l, t[r + 5], w, 4294588738);
        l = HH(l, s, c, _, t[r + 8], x, 2272392833);
        _ = HH(_, l, s, c, t[r + 11], y, 1839030562);
        c = HH(c, _, l, s, t[r + 14], b, 4259657740);
        s = HH(s, c, _, l, t[r + 1], w, 2763975236);
        l = HH(l, s, c, _, t[r + 4], x, 1272893353);
        _ = HH(_, l, s, c, t[r + 7], y, 4139469664);
        c = HH(c, _, l, s, t[r + 10], b, 3200236656);
        s = HH(s, c, _, l, t[r + 13], w, 681279174);
        l = HH(l, s, c, _, t[r + 0], x, 3936430074);
        _ = HH(_, l, s, c, t[r + 3], y, 3572445317);
        c = HH(c, _, l, s, t[r + 6], b, 76029189);
        s = HH(s, c, _, l, t[r + 9], w, 3654602809);
        l = HH(l, s, c, _, t[r + 12], x, 3873151461);
        _ = HH(_, l, s, c, t[r + 15], y, 530742520);
        c = HH(c, _, l, s, t[r + 2], b, 3299628645);
        s = II(s, c, _, l, t[r + 0], E, 4096336452);
        l = II(l, s, c, _, t[r + 7], S, 1126891415);
        _ = II(_, l, s, c, t[r + 14], T, 2878612391);
        c = II(c, _, l, s, t[r + 5], C, 4237533241);
        s = II(s, c, _, l, t[r + 12], E, 1700485571);
        l = II(l, s, c, _, t[r + 3], S, 2399980690);
        _ = II(_, l, s, c, t[r + 10], T, 4293915773);
        c = II(c, _, l, s, t[r + 1], C, 2240044497);
        s = II(s, c, _, l, t[r + 8], E, 1873313359);
        l = II(l, s, c, _, t[r + 15], S, 4264355552);
        _ = II(_, l, s, c, t[r + 6], T, 2734768916);
        c = II(c, _, l, s, t[r + 13], C, 1309151649);
        s = II(s, c, _, l, t[r + 4], E, 4149444226);
        l = II(l, s, c, _, t[r + 11], S, 3174756917);
        _ = II(_, l, s, c, t[r + 2], T, 718787259);
        c = II(c, _, l, s, t[r + 9], C, 3951481745);
        s = Indm(s, n);
        c = Indm(c, i);
        _ = Indm(_, a);
        l = Indm(l, o);
    }

    var A = KvGJ(s) + KvGJ(c) + KvGJ(_) + KvGJ(l);
    return A["toLowerCase"]();
}

function le() {
    return new Date()["getTime"]();
}

var ct = le();

var ve = function() {
    "use strict";

    var e = {};
    var t = /^[\],:{}\s]*$/;
    var r = /\\(?:["\\\/bfnrt]|u[0-9a-fA-F]{4})/g;
    var n = /"[^"\\\n\r]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?/g;
    var i = /(?:^|:|,)(?:\s*\[)+/g;
    var a = /[\\"\u0000-\u001f\u007f-\u009f\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g;
    var o = /[\u0000\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g;

    function f(e) {
        return e < 10 ? "0" + e : e;
    }

    function mXvp() {
        return this["valueOf"]();
    }

    if (typeof Date["prototype"]["toJSON"] !== "function") {
        Date["prototype"]["toJSON"] = function() {
            return isFinite(this["valueOf"]()) ? this["getUTCFullYear"]() + "-" + f(this["getUTCMonth"]() + 1) + "-" + f(this["getUTCDate"]()) + "T" + f(this["getUTCHours"]()) + ":" + f(this["getUTCMinutes"]()) + ":" + f(this["getUTCSeconds"]()) + "Z" : null;
        }
        ;

        Boolean["prototype"]["toJSON"] = mXvp;
        Number["prototype"]["toJSON"] = mXvp;
        String["prototype"]["toJSON"] = mXvp;
    }

    var _;

    var l;
    var s;
    var u;

    function npNg(e) {
        a["lastIndex"] = 0;
        return a["test"](e) ? "\"" + e["replace"](a, function(e) {
            var t = s[e];
            return typeof t === "string" ? t : "\\u" + ("0000" + e["charCodeAt"](0)["toString"](16))["slice"](-4);
        }) + "\"" : "\"" + e + "\"";
    }

    function oPMp(e, t) {
        var r;
        var n;
        var i;
        var a;
        var o = _;
        var s;
        var c = t[e];

        if (c && typeof c === "object" && typeof c["toJSON"] === "function") {
            c = c["toJSON"](e);
        }

        if (typeof u === "function") {
            c = u["call"](t, e, c);
        }

        switch (typeof c) {
            case "string":
                return npNg(c);

            case "number":
                return isFinite(c) ? String(c) : "null";

            case "boolean":
            case "null":
                return String(c);

            case "object":
                if (!c) {
                    return "null";
                }

                _ += l;
                s = [];

                if (Object["prototype"]["toString"]["apply"](c) === "[object Array]") {
                    a = c["length"];

                    for (r = 0; r < a; r += 1) {
                        s[r] = oPMp(r, c) || "null";
                    }

                    i = s["length"] === 0 ? "[]" : _ ? "[\n" + _ + s["join"](",\n" + _) + "\n" + o + "]" : "[" + s["join"](",") + "]";
                    _ = o;
                    return i;
                }

                if (u && typeof u === "object") {
                    a = u["length"];

                    for (r = 0; r < a; r += 1) {
                        if (typeof u[r] === "string") {
                            n = u[r];
                            i = oPMp(n, c);

                            if (i) {
                                s["push"](npNg(n) + (_ ? ": " : ":") + i);
                            }
                        }
                    }
                } else {
                    for (n in c) {
                        if (Object["prototype"]["hasOwnProperty"]["call"](c, n)) {
                            i = oPMp(n, c);

                            if (i) {
                                s["push"](npNg(n) + (_ ? ": " : ":") + i);
                            }
                        }
                    }
                }

                i = s["length"] === 0 ? "{}" : _ ? "{\n" + _ + s["join"](",\n" + _) + "\n" + o + "}" : "{" + s["join"](",") + "}";
                _ = o;
                return i;
        }
    }

    s = {
        "\b": "\\b",
        "\t": "\\t",
        "\n": "\\n",
        "\f": "\\f",
        "\r": "\\r",
        "\"": "\\\"",
        "\\": "\\\\"
    };

    e["stringify"] = function(e, t, r) {
        var n;
        _ = "";
        l = "";

        if (typeof r === "number") {
            for (n = 0; n < r; n += 1) {
                l += " ";
            }
        } else if (typeof r === "string") {
            l = r;
        }

        u = t;

        if (t && typeof t !== "function" && (typeof t !== "object" || typeof t["length"] !== "number")) {
            throw new Error("JSON.stringify");
        }

        return oPMp("", {
            "": e
        });
    }
    ;

    return e;
}();

var ce = function() {
    function S4() {
        return ((1 + Math["random"]()) * 65536 | 0)["toString"](16)["substring"](1);
    }

    return function() {
        return S4() + S4() + S4() + S4();
    }
        ;
}();

function hfAt(e) {
    this["JxgI"] = e || [];
}

hfAt["prototype"] = {
    "fIlW": function(e) {
        return this["JxgI"][e];
    },
    "KjuM": function() {
        return this["JxgI"]["length"];
    },
    "LC_c": function(e, t) {
        var r = this;
        var n;

        if (ne(t)) {
            n = r["JxgI"]["slice"](e, t);
        } else {
            n = r["JxgI"]["slice"](e);
        }

        return new hfAt(n);
    },
    "MFRn": function(e) {
        var t = this;
        t["JxgI"]["push"](e);
        return t;
    },
    "Ng_n": function(e, t) {
        return this["JxgI"]["splice"](e, t || 1);
    },
    "OxHq": function(e) {
        return this["JxgI"]["join"](e);
    },
    "PnRJ": function(e) {
        var t = this["JxgI"]["concat"](e);
        return new hfAt(t);
    },
    "QqNY": function(e) {
        var t = this;
        var r = t["JxgI"];

        if (r["kjjG"]) {
            return new hfAt(r["kjjG"](e));
        }

        var n = [];

        for (var i = 0, a = r["length"]; i < a; i = i + 1) {
            n[i] = e(r[i], i, t);
        }

        return new hfAt(n);
    },
    "RAlK": function(e) {
        var t = this;
        var r = t["JxgI"];

        if (r["lKMX"]) {
            return new hfAt(r["lKMX"](e));
        }

        var n = [];

        for (var i = 0, a = r["length"]; i < a; i = i + 1) {
            if (e(r[i], i, t)) {
                n["push"](r[i]);
            }
        }

        return new hfAt(n);
    },
    "SDqZ": function(e) {
        var t = this;
        var r = t["JxgI"];

        if (!r["indexOf"]) {
            for (var n = 0, i = r["length"]; n < i; n = n + 1) {
                if (r[n] === e) {
                    return n;
                }
            }

            return -1;
        }

        return r["indexOf"](e);
    },
    "Tvhi": function(e) {
        var t = this;
        var r = t["JxgI"];

        if (!r["forEach"]) {
            var n = arguments[1];

            for (var i = 0; i < r["length"]; i++) {
                if (i in r) {
                    e["call"](n, r[i], i, t);
                }
            }
        }

        return r["forEach"](e);
    }
};

hfAt["GGYj"] = function(e) {
    if (Array["isArray"]) {
        return Array["isArray"](e);
    }

    return Object["prototype"]["toString"]["call"](e) === "[object Array]";
};

function jYwQ(e) {
    if (typeof e == "string") {
        this["WtHi"] = T["createElement"](e);
    } else {
        this["WtHi"] = e;
    }
}

jYwQ["prototype"] = {
    "Wyvf": {
        "down": ["mousedown", "touchstart", "pointerdown", "MSPointerDown"],
        "move": ["mousemove", "touchmove", "pointermove", "MSPointerMove"],
        "up": ["mouseup", "touchend", "pointerup", "MSPointerUp"],
        "enter": ["mouseenter"],
        "leave": ["mouseleave"],
        "cancel": ["touchcancel"],
        "click": ["click"],
        "scroll": ["scroll"],
        "resize": ["resize"],
        "blur": ["blur"],
        "focus": ["focus"],
        "unload": ["unload"],
        "input": ["input"],
        "keyup": ["keyup"],
        "ended": ["ended"],
        "keydown": ["keydown"],
        "beforeunload": ["beforeunload"],
        "focusin": ["focusin"],
        "pageshow": ["pageshow"]
    },
    "XRCQ": function() {
        var e = this;
        var t = e["WtHi"];
        t["innerHTML"] = "";

        if (t["tagName"]["toLocaleLowerCase"]() === "input") {
            t["value"] = "";
        }

        return e;
    },
    "YbzU": function() {
        return this["$_sTyyle"]({
            "display": "none"
        });
    },
    "ZLXm": function() {
        return this["$_sTyyle"]({
            "display": "block"
        });
    },
    "ayaC": function(e) {
        return this["$_sTyyle"]({
            "opacity": e
        });
    },
    "bjy_": function(e) {
        return this["WtHi"]["getAttribute"](e);
    },
    "aunq": function(e) {
        var t = this;
        var r = t["WtHi"];
        new iZrR(e)["bOlF"](function(e, t) {
            r["setAttribute"](e, t);
        });
        return t;
    },
    "cRxK": function(e) {
        var t = this;
        var r = t["WtHi"];
        new hfAt(e)["QqNY"](function(e) {
            r["removeAttribute"](e);
        });
        return t;
    },
    "YDJr": function(e) {
        var t = this;
        var r = t["WtHi"];
        new iZrR(e)["bOlF"](function(e, t) {
            r[e] = t;
        });
        return t;
    },
    "$_sTyyle": function(e) {
        var t = this;
        var r = t["WtHi"];
        new iZrR(e)["bOlF"](function(e, t) {
            r["style"][e] = t;
        });
        return t;
    },
    "setStyles": function(e) {
        var t = this;
        var r = t["WtHi"];
        new iZrR(e)["bOlF"](function(e, t) {
            r["style"][e] = t;
        });
        return t;
    },
    "doqQ": function() {
        return new jYwQ(this["WtHi"]["parentNode"]);
    },
    "ZoiU": function(e) {
        e["WtHi"]["appendChild"](this["WtHi"]);
        return this;
    },
    "eubZ": function(e) {
        var t = this;
        var r = t["WtHi"];
        r["parentNode"]["removeChild"](r);
        t["ZoiU"](e);
        return t;
    },
    "fiLk": function(e) {
        var t = this;
        e["WtHi"]["parentNode"]["insertBefore"](t["WtHi"], e["WtHi"]);
        return t;
    },
    "gyVh": function(e) {
        var t = this;
        e["ZoiU"](t);
        return t;
    },
    "XcEj": function() {
        var e = this;
        var t = e["WtHi"];
        var r = t["parentNode"];

        if (r) {
            r["removeChild"](t);
        }

        return e;
    },
    "hRVE": function(e) {
        var t = this;
        var r = t["WtHi"];
        var n = r["className"] ? r["className"]["split"](" ") : [];
        var i = new hfAt(n);
        var a = i["SDqZ"](A + e);

        if (a === -1) {
            t["iiIP"](e);
        } else {
            t["jsNm"](e);
        }

        return t;
    },
    "iiIP": function(e) {
        var t = this;
        var r = t["WtHi"];
        var n = r["className"] ? r["className"]["split"](" ") : [];
        var i = new hfAt(n);
        e = A + e;
        var a = i["SDqZ"](e);

        if (a == -1) {
            i["MFRn"](e);
            r["className"] = i["OxHq"](" ");
        }

        return t;
    },
    "kRIJ": function() {
        var e = this;
        var t = e["WtHi"];
        return t["children"];
    },
    "ltoK": function() {
        var e = this;
        var t = e["WtHi"];
        return t && t["style"] && t["style"]["right"] || 0;
    },
    "jsNm": function(e) {
        var t = this;
        var r = t["WtHi"];
        var n = new hfAt(r["className"]["split"](" "));
        e = A + e;
        var i = n["SDqZ"](e);

        if (i > -1) {
            n["Ng_n"](i);
            r["className"] = n["OxHq"](" ");
        }

        return t;
    },
    "moYg": function(e, t) {
        var r = this;
        r["jsNm"](t)["iiIP"](e);
        return r;
    },
    "nUqI": function(e, r) {
        var n = this;
        var i = n["WtHi"];
        var t = n["Wyvf"][e];

        function a(e) {
            r(new kjNL(n,e));
        }

        var o = null;
        new hfAt(t)["QqNY"](function(e) {
            if (T["addEventListener"]) {
                i["addEventListener"](e, a);
            } else if (T["attachEvent"]) {
                i["attachEvent"]("on" + e, a);
            } else {
                var t = i["on" + e];

                i["on" + e] = function(e) {
                    r(new kjNL(n,e));

                    if (typeof t === "function") {
                        t["call"](this, e);
                    }
                }
                ;
            }
        });
        return {
            "BRRC": function() {
                new hfAt(t)["QqNY"](function(e) {
                    if (T["removeEventListener"]) {
                        i["removeEventListener"](e, a);
                    } else if (T["detachEvent"]) {
                        i["detachEvent"]("on" + e, a);
                    } else {
                        i["on" + e] = o || null;
                    }
                });
            }
        };
    },
    "yfqn": function(e, t) {
        var r = this;
        var n = r["nUqI"](e, t);
        r["oBFz"] = r["oBFz"] || {};

        if (r["oBFz"][e]) {
            r["oBFz"][e]["push"](n);
        } else {
            r["oBFz"][e] = [n];
        }

        return r;
    },
    "pJia": function(e) {
        var t = this;

        if (t["oBFz"]) {
            if (e) {
                if (t["oBFz"][e] && t["oBFz"][e]["length"] > 0) {
                    for (var r = t["oBFz"][e]["length"] - 1; r >= 0; r--) {
                        t["oBFz"][e][r]["BRRC"]();
                    }
                }
            } else {
                for (var n in t["oBFz"]) {
                    if (t["oBFz"][n] && t["oBFz"][n]["length"] > 0) {
                        for (var r = t["oBFz"][n]["length"] - 1; r >= 0; r--) {
                            t["oBFz"][n][r]["BRRC"]();
                        }
                    }
                }
            }
        }

        return t;
    },
    "qIdx": function(e) {
        var t = this["WtHi"]["getBoundingClientRect"]();
        var e = e || 1;

        if (e !== 1) {
            t["x"] = t["x"] * e;
            t["y"] = t["y"] * e;
            t["top"] = t["top"] * e;
            t["left"] = t["left"] * e;
            t["right"] = t["right"] * e;
            t["bottom"] = t["bottom"] * e;
            t["width"] = t["width"] * e;
            t["height"] = t["height"] * e;
        }

        return t;
    },
    "rEDI": function(e) {
        var t = this["qIdx"]();
        var r = T["body"];
        var n = T["documentElement"];
        var i = window["pageYOffset"] || n["scrollTop"] || r["scrollTop"];
        var a = window["pageXOffset"] || n["scrollLeft"] || r["scrollLeft"];
        var o = n["clientTop"] || r["clientTop"] || 0;
        var s = n["clientLeft"] || r["clientLeft"] || 0;
        var c = t["top"] + i - o;

        var _ = t["left"] + a - s;

        return {
            "top": Math["round"](c),
            "left": Math["round"](_),
            "width": t["right"] - t["left"],
            "height": t["bottom"] - t["top"]
        };
    },
    "sNTA": function(e) {
        var t = this;
        var r = t["WtHi"];
        t["XRCQ"]();
        r["appendChild"](T["createTextNode"](e));
        return t;
    },
    "tSIr": function(e) {
        var t = this;
        var r = t["WtHi"];
        r["innerHTML"] = e;
        return t;
    },
    "uooL": function(e) {
        var t = this;
        var r = t["WtHi"];
        T["getElementsByTagName"]("head")[0]["appendChild"](r);

        if (r["styleSheet"]) {
            r["styleSheet"]["cssText"] = e;
        } else {
            r["appendChild"](T["createTextNode"](e));
        }

        return t;
    },
    "vaXe": function(e) {
        var t = this;
        var r = t["WtHi"];
        var n;

        var i = function() {
            var e = T["createElement"]("canvas");
            var t = e["getContext"] && e["getContext"]("2d");
            return !t;
        }();

        if (e) {
            if (i) {
                var a = T["createElement"]("div");
                a["innerHTML"] = r["outerHTML"];
                n = new jYwQ(a["childNodes"][0]);
            } else {
                n = new jYwQ(t["WtHi"]["cloneNode"](true));
            }

            r["id"] = "origin_" + r["id"];
            n["cRxK"](["href"]);
        } else {
            n = new jYwQ(t["WtHi"]["cloneNode"](false));
            n["iiIP"]("sandbox");
        }

        return n;
    },
    "wGcd": function() {
        var e = this;
        e["WtHi"]["click"]();
        return e;
    },
    "xcAB": function() {
        var e = this;
        e["WtHi"]["play"]();
        return e;
    },
    "ytYv": function() {
        var e = this;
        e["WtHi"]["currentTime"] = 0;
        e["WtHi"]["play"]();
        return e;
    },
    "Abax": function() {
        var e = this;
        e["WtHi"]["currentTime"] = 0;
        e["WtHi"]["pause"]();
        return e;
    },
    "BLKu": function() {
        var e = this;
        return e["WtHi"]["value"];
    },
    "CFni": function() {
        var e = this;
        var t = e["WtHi"];
        t["focus"]();
        return e;
    },
    "Duld": function() {
        var e = this;
        var t = e["qIdx"]();
        return t["right"] - t["left"];
    },
    "EvhA": function(e) {
        var t = this["WtHi"];
        var r = window["getComputedStyle"] ? window["getComputedStyle"](t)[e] : t["currentStyle"][e];
        return r;
    },
    "FDwS": function() {
        function e(e, t) {
            var r;

            if (e["currentStyle"]) {
                r = e["currentStyle"][t];
            } else if (window["getComputedStyle"]) {
                r = window["getComputedStyle"](e, null)["getPropertyValue"](t);
            }

            return r;
        }

        var t = this;

        try {
            var r = t["WtHi"];
            var n = r;

            while (n["parentNode"] != T["body"] && r["offsetTop"] - n["parentNode"]["offsetTop"] < 160) {
                n = n["parentNode"];

                if (e(n, "overflow") == "hidden") {
                    n["style"]["overflow"] = "visible";
                }
            }
        } catch (i) {}

        return t;
    },
    "GUcE": function() {
        var e = this;
        var t = e["WtHi"];
        var r = t["offsetLeft"];
        var n = t["offsetParent"];

        while (n !== null) {
            r += n["offsetLeft"];
            n = n["offsetParent"];
        }

        return r;
    },
    "HDGL": function() {
        var e = this;
        var t = e["WtHi"];
        var r = t["offsetTop"];
        var n = t["offsetParent"];

        while (n !== null) {
            r += n["offsetTop"];
            n = n["offsetParent"];
        }

        return r;
    }
};

jYwQ["$"] = function(e) {
    var t;

    if (typeof e == "string") {
        if (e[0] === "#") {
            t = T["getElementById"](e["slice"](1));
        } else if ("querySelector"in T) {
            t = T["querySelector"](e);
        } else if (oe(window["jQuery"])) {
            t = window["jQuery"](e)[0];
        } else if (e["slice"](0, 1) === "#") {
            t = T["getElementById"](e["slice"](1));
        }
    } else if (e["length"]) {
        t = e[0];
    } else {
        t = e;
    }

    var r;

    try {
        r = Node["ELEMENT_NODE"];
    } catch (n) {
        r = 1;
    }

    try {
        if (t["nodeType"] === r) {
            return new jYwQ(t);
        }
    } catch (n) {
        return false;
    }
}
;

function hUUu() {
    var e = this;
    e["posX"] = 0;
    e["posY"] = 0;
    e["scrollLeft"] = 0;
    e["scrollTop"] = 0;
    e["lastTime"] = 0;
    e["TRdL"] = [];
    e["UDeS"] = new jYwQ(T);
    e["VcK_"] = new jYwQ(window);
    e["WWPU"] = null;
    e["XEQf"] = null;
    e["YJbk"] = 0;
    e["ZlSY"] = 0;
    e["atFN"] = 0;
    e["VktP"]();
}

hUUu["prototype"] = {
    "bSgp": v || m || d ? 150 : 300,
    "VktP": function() {
        var n = this;
        n["UDeS"]["yfqn"]("move", function(e) {
            n["coUs"]();
            n["posX"] = e["IjQX"]();
            n["posY"] = e["JAkr"]();
            n["dmzY"]("move", n["posX"], n["posY"], e["Ibwa"]["type"]);
        })["yfqn"]("down", function(e) {
            var t = n["TRdL"]["length"];

            if (n["TRdL"][t - 1] && n["TRdL"][t - 1][0] === "down") {
                return;
            }

            n["coUs"]();
            n["posX"] = e["IjQX"]();
            n["posY"] = e["JAkr"]();
            n["dmzY"]("down", n["posX"], n["posY"], e["Ibwa"]["type"]);

            if (n["TRdL"][t - 2] && n["TRdL"][t - 2][0] === "move" && n["TRdL"][t - 3] && n["TRdL"][t - 3][0] === "up") {
                n["eaQq"](t - 2);
            }
        })["yfqn"]("up", function(e) {
            var t = n["TRdL"]["length"];

            if (n["TRdL"][t - 1] && n["TRdL"][t - 1][0] === "up") {
                return;
            }

            n["coUs"]();
            n["posX"] = e["IjQX"]();
            n["posY"] = e["JAkr"]();
            n["dmzY"]("up", n["posX"], n["posY"], e["Ibwa"]["type"]);

            if (n["TRdL"][t - 2] && n["TRdL"][t - 2][0] === "move" && n["TRdL"][t - 3] && n["TRdL"][t - 3][0] === "down") {
                n["eaQq"](t - 2);
            }
        })["yfqn"]("focusin", function() {
            n["dmzY"]("focus");
        });
        n["VcK_"]["yfqn"]("scroll", function() {
            var e = ("pageXOffset"in window);
            var t = e ? window["pageXOffset"] : T["body"]["scrollLeft"];
            var r = e ? window["pageYOffset"] : T["body"]["scrollTop"];
            n["posX"] = t - n["scrollLeft"] + n["posX"];
            n["posY"] = r - n["scrollTop"] + n["posY"];
            n["dmzY"]("scroll", t - n["scrollLeft"] + n["posX"], r - n["scrollTop"] + n["posY"]);
            n["coUs"]();
        })["yfqn"]("focus", function() {
            n["dmzY"]("focus");
        })["yfqn"]("blur", function() {
            n["dmzY"]("blur");
        })["yfqn"]("unload", function() {
            n["dmzY"]("unload");
        });
    },
    "coUs": function() {
        var e = this;
        var t = ("pageXOffset"in window);
        var r = t ? window["pageXOffset"] : T["body"]["scrollLeft"];
        var n = t ? window["pageYOffset"] : T["body"]["scrollTop"];
        e["scrollLeft"] = r;
        e["scrollTop"] = n;
        return {
            "x": r,
            "y": n
        };
    },
    "dmzY": function() {
        return function(e, t, r, n) {
            var i = le();
            var a = this;
            var o = a["YJbk"];
            var s = a["ZlSY"];
            var c = a["atFN"];
            var _ = a["TRdL"];

            if (new hfAt(["move", "down", "up", "scroll"])["SDqZ"](e) > -1) {
                if (e === "move") {
                    if (t === o && r === s || c === i) {
                        return;
                    }

                    a["YJbk"] = t;
                    a["ZlSY"] = r;
                    a["atFN"] = i;
                }

                _["push"]([e, a["fKNd"](t), a["fKNd"](r), i, n]);
            } else {
                _["push"]([e, i]);
            }

            return a;
        }
            ;
    }(),
    "eaQq": function(e) {
        var t = this;
        t["TRdL"]["splice"](e, 1);
    },
    "BRRC": function() {
        var e = this;
        e["VcK_"]["pJia"]();
        e["UDeS"]["pJia"]();
    },
    "gREV": function(e) {
        var t = 0
            , r = 0
            , n = 0
            , i = 0;
        var a = [];
        var o = this;
        var s = o["lastTime"];

        if (e["length"] <= 0) {
            return [];
        }

        var c = null;
        var _ = null;
        var l = o["hg_M"](e);
        var u = l["length"];
        var f = u < this["bSgp"] ? 0 : u - this["bSgp"];

        for (; f < u; f = f + 1) {
            var p = l[f];
            var h = p[0];

            if (new hfAt(["down", "move", "up", "scroll"])["SDqZ"](h) > -1) {
                if (!c) {
                    c = p;
                }

                _ = p;
                a["push"]([h, [p[1] - t, p[2] - r], o["fKNd"](s ? p[3] - s : s)]);
                t = p[1];
                r = p[2];
                s = p[3];
            } else if (new hfAt(["blur", "focus", "unload"])["SDqZ"](h) > -1) {
                a["push"]([h, o["fKNd"](s ? p[1] - s : s)]);
                s = p[1];
            }
        }

        o["WWPU"] = c;
        o["XEQf"] = _;
        return a;
    },
    "hg_M": function(e) {
        var t = ""
            , r = 0;
        var n = (e || [])["length"];

        while (!t && e[r]) {
            t = e[r] && e[r][4];
            r++;
        }

        if (!t) {
            return e;
        }

        var i = "";
        var a = ["mouse", "touch", "pointer", "MSPointer"];

        for (var o = 0, s = a["length"]; o < s; o++) {
            if (t["indexOf"](a[o]) === 0) {
                i = a[o];
            }
        }

        var c = e["slice"]();

        for (var _ = c["length"] - 1; _ >= 0; _--) {
            var l = c[_];
            var u = l[0];

            if (new hfAt(["move", "down", "up"])["SDqZ"](u) > -1) {
                var f = l[4] || "";

                if (f["indexOf"](i) !== 0) {
                    c["splice"](_, 1);
                }
            }
        }

        return c;
    },
    "RrSY": function encode(e) {
        var i = "()*,-./0123456789:?@ABCDEFGHIJKLMNOPQRSTUVWXYZ_abcdefghijklmnopqrstuvwxyz~";

        function iSTU(e) {
            var t = "";
            var r = e["length"] / 6;

            for (var n = 0; n < r; n = n + 1) {
                t += i["charAt"](window["parseInt"](e["slice"](n * 6, (n + 1) * 6), 2));
            }

            return t;
        }

        function t(e) {
            var t = [];
            var r = [];
            var n = [];
            var i = [];

            for (var a = 0, o = e["length"]; a < o; a = a + 1) {
                var s = e[a];
                var c = s["length"];
                t["push"](s[0]);
                r["push"](c === 2 ? s[1] : s[2]);

                if (c === 3) {
                    n["push"](s[1][0]);
                    i["push"](s[1][1]);
                }
            }

            var _ = g(t);

            var l = optV(r, false);
            var u = optV(n, true);
            var f = optV(i, true);
            var p = _ + l + u + f;
            var h = p["length"];

            if (h % 6 != 0) {
                p += jyGM(0, 6 - h % 6);
            }

            return iSTU(p);
        }

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
        var h = 8;

        function jyGM(e, t) {
            var r = e["toString"](2);
            var n = r["length"];
            var i = "";

            for (var a = n + 1; a <= t; a = a + 1) {
                i += "0";
            }

            r = i + r;
            return r;
        }

        function g(e) {
            var t = [];
            var r = e["length"];
            var n = 0;

            while (n < r) {
                var i = e[n];
                var a = 0;

                while (true) {
                    if (a >= 1 << 4) {
                        break;
                    }

                    var o = n + a + 1;

                    if (o >= r) {
                        break;
                    }

                    var s = e[o];

                    if (s !== i) {
                        break;
                    }

                    a += 1;
                }

                n = n + 1 + a;
                var c = p[i];

                if (a != 0) {
                    t["push"](c | h);
                    t["push"](a - 1);
                } else {
                    t["push"](c);
                }
            }

            var _ = jyGM(r | 32768, 16);

            var l = "";

            for (var u = 0, f = t["length"]; u < f; u = u + 1) {
                l += jyGM(t[u], 4);
            }

            return _ + l;
        }

        function kjjG(e, t) {
            var r = [];

            for (var n = 0, i = e["length"]; n < i; n = n + 1) {
                r["push"](t(e[n]));
            }

            return r;
        }

        function lKMX(e, t) {
            var r = [];
            kjjG(e, function(e) {
                if (t(e)) {
                    r["push"](e);
                }
            });
            return r;
        }

        function mont(e) {
            var t = (1 << 15) - 1;
            e = kjjG(e, function(e) {
                if (e > t) {
                    return t;
                } else if (e < -t) {
                    return -t;
                }

                return e;
            });
            var r = e["length"];
            var n = 0;
            var i = [];

            while (n < r) {
                var a = 1;
                var o = e[n];
                var s = Math["abs"](o);

                while (true) {
                    if (n + a >= r) {
                        break;
                    }

                    if (e[n + a] !== o) {
                        break;
                    }

                    if (s >= 127 || a >= 127) {
                        break;
                    }

                    a += 1;
                }

                if (a > 1) {
                    i["push"]((o < 0 ? 49152 : 32768) | a << 7 | s);
                } else {
                    i["push"](o);
                }

                n += a;
            }

            return i;
        }

        function nawE(e, t) {
            if (e === 0) {
                return 0;
            }

            return Math["log"](e) / Math["log"](t);
        }

        function optV(e, t) {
            e = mont(e);
            var r = [], n = [], i;
            kjjG(e, function(e) {
                var t = Math["ceil"](nawE(Math["abs"](e) + 1, 16));

                if (t === 0) {
                    t = 1;
                }

                r["push"](jyGM(t - 1, 2));
                n["push"](jyGM(Math["abs"](e), t * 4));
            });
            var a = r["join"]("");
            var o = n["join"]("");

            if (!t) {
                i = "";
            } else {
                i = kjjG(lKMX(e, function(e) {
                    return e != 0 && e >> 15 != 1;
                }), function(e) {
                    return e < 0 ? "1" : "0";
                })["join"]("");
            }

            var s = jyGM(e["length"] | 32768, 16);
            return s + a + o + i;
        }

        return t(e);
    },
    "fKNd": function(e) {
        var t = (1 << 15) - 1;

        if (typeof e !== "number") {
            return e;
        } else if (e > t) {
            e = t;
        } else if (e < -t) {
            e = -t;
        }

        return Math["round"](e);
    },
    "iZiT": function() {
        var e = this;
        return e["RrSY"](e["gREV"](e["TRdL"]))["length"];
    },
    "jLTV": function() {
        var e = this;
        var t = e["TRdL"];
        e["TRdL"] = [];
        return e["RrSY"](e["gREV"](t));
    },
    "kdvq": function() {
        var e = this;
        return e["RrSY"](e["TRdL"]);
    }
};

var te = function() {
    function XXTp(e, t) {
        return e in t;
    }

    function YfzE(e) {
        return e ? s : o;
    }

    function ZfDq(e) {
        return e ? c : s;
    }

    var o = 0
        , s = 1
        , c = 2
        , _ = 8
        , l = 9;

    function aI_M(e) {
        return typeof e;
    }

    var a = window
        , e = Object
        , t = T
        , r = "undefined"
        , n = "function"
        , i = e["getPrototypeOf"]
        , u = aI_M(i) == n;

    function bIRR(e) {
        if (aI_M(e) == r) {
            return;
        }

        var t;

        if (u) {
            t = i(e);
        }

        if (aI_M(t) != r) {
            return t;
        }

        t = e["HGjP"];

        if (aI_M(t) != r) {
            return t;
        }

        t = e["constructor"];

        if (aI_M(t) != r) {
            return t["prototype"];
        }
    }

    function cqxW(r, n) {
        return function(e, t) {
            return YfzE(XXTp(r, n));
        }
            ;
    }

    var f = "hantom";
    var p = cqxW(["_p", f]["join"](""), a);

    function dEhs() {
        var e = "callP" + f, t = XXTp(e, a), r;

        if (!t) {
            return o;
        }

        try {
            var n = "\n" + a[e];
        } catch (i) {
            r = [];
        }

        return r ? l : s;
    }

    function eeDN() {
        var e = Math["random"](2) * 5
            , t = e - 1
            , r = [];

        try {
            r["push"](e(r, t));
        } catch (c) {
            r = c;
        }

        var n = ["line", "column", "Number"]
            , i = [n[0], n[1], n[0] + n[2], n[1] + n[2], "fileName", "message", n[2]["toLowerCase"](), "description", "sourceURL", "stack"]
            , a = i["slice"](i["length"]);

        for (var o = 0, s = i["length"]; o < s; ++o) {
            a[o] = YfzE(XXTp(i[o], r));
        }

        return parseInt(a["join"](""), 2)["toString"](4 << 2);
    }

    var h = e["getOwnPropertyDescriptor"]
        , g = aI_M(h) == n
        , d = "webdriver";

    function fSJ_() {
        var e = d
            , t = C
            , r = bIRR(t);

        if (!r) {
            return _;
        }

        var n = XXTp(e, r);

        if (!n) {
            return XXTp(e, t) ? t[e] ? c : s : o;
        }

        if (!g) {
            return ZfDq(t[e]);
        }

        var i = h(r, e)
            , a = "get";

        if (aI_M(i) != "object") {
            return l;
        }

        if (i[a]) {
            return ZfDq(i[a]["call"](t));
        }

        return ZfDq(i["value"]);
    }

    var v = cqxW(["_", "_nig", "htma", "re"]["join"](""), a);

    var m = function(e) {
        var t = "_"
            , r = [t, d, "script", "fn"]["join"](t);
        return cqxW(r, e);
    }(t);

    var w = function(e) {
        var t = ["$cdc_as", "djflasu", "topfhvc", "ZLmcfl_"]["join"]("");
        return cqxW(t, e);
    }(t);

    var x = ["ph", "cp", "ek", "wd", "nt", "si", "sc"]
        , y = [p, dEhs, eeDN, fSJ_, v, m, w]
        , b = [];

    for (var E = -1, S = x["length"]; ++E < S; ) {
        b[E] = [x[E], y[E]];
    }

    function guQs(e, t) {
        var r = b, n, i;

        for (var a = -1, o = r["length"]; ++a < o; ) {
            n = r[a];
            i = n[1](a);
            t[n[0]] = i;
        }

        return e;
    }

    return guQs;
}();

function UhwE() {}

UhwE["prototype"] = {
    "QiLd": function() {
        var e = this;
        return window["performance"] && window["performance"]["timing"] && e["RYuD"]() || -1;
    },
    "RYuD": function() {
        var e = window["performance"]["timing"];
        var t = this;
        var r = {};
        r = {
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
        };
        return r;
    }
};

const Config = {
    "gt": "011e260466268eeb81114b4cc8e8a133",
    "challenge": "ec92a449931f32734a1ae5e9c548ed8b",
    "offline": false,
    "new_captcha": true,
    "product": "bind",
    "width": "300px",
    "https": true,
    "protocol": "https://",
    "type": "fullpage",
    "static_servers": [
        "static.geetest.com/",
        "dn-staticdown.qbox.me/"
    ],
    "aspect_radio": {
        "slide": 103,
        "click": 128,
        "voice": 128,
        "pencil": 128,
        "beeline": 50
    },
    "beeline": "/static/js/beeline.1.0.1.js",
    "voice": "/static/js/voice.1.2.0.js",
    "click": "/static/js/click.3.0.1.js",
    "fullpage": "/static/js/fullpage.9.0.7.js",
    "pencil": "/static/js/pencil.1.0.3.js",
    "slide": "/static/js/slide.7.8.3.js",
    "geetest": "/static/js/geetest.6.0.9.js"
};

Config.__proto__ = {
    "api_server": "api.geetest.com",
    "protocol": "http://",
    "typePath": "/gettype.php",
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
        }
    }
};

// 获取加密的w参数
function get_w2(gt, challenge, config_s, aes_key) {
    var r = {};
    r["enMq"] = new hUUu();
    const start_time = window['performance']['timing']['loadEventEnd'] + 20;
    r["enMq"]['TRdL'] = [['move', 636, 365, start_time + 0, 'pointermove'], ['down', 636, 365, start_time + 1, 'pointerdown'], ['focus', start_time + 9], ['up', 636, 365, start_time + 39, 'pointerup'], ['move', 650, 354, start_time + 145, 'pointermove'], ['move', 651, 354, start_time + 357, 'pointermove'], ['move', 652, 354, start_time + 400, 'pointermove'], ['move', 653, 354, start_time + 406, 'pointermove'], ['move', 654, 354, start_time + 409, 'pointermove'], ['move', 656, 354, start_time + 413, 'pointermove'], ['move', 657, 353, start_time + 416, 'pointermove'], ['move', 658, 353, start_time + 420, 'pointermove'], ['move', 659, 353, start_time + 423, 'pointermove'], ['move', 660, 353, start_time + 424, 'pointermove'], ['move', 661, 353, start_time + 425, 'pointermove'], ['move', 662, 353, start_time + 428, 'pointermove'], ['move', 663, 353, start_time + 430, 'pointermove'], ['move', 665, 353, start_time + 432, 'pointermove'], ['move', 666, 353, start_time + 433, 'pointermove'], ['move', 667, 353, start_time + 435, 'pointermove'], ['move', 668, 353, start_time + 437, 'pointermove'], ['move', 669, 353, start_time + 440, 'pointermove'], ['move', 670, 353, start_time + 442, 'pointermove'], ['move', 671, 353, start_time + 443, 'pointermove'], ['move', 673, 353, start_time + 444, 'pointermove'], ['move', 674, 353, start_time + 445, 'pointermove'], ['move', 675, 353, start_time + 447, 'pointermove'], ['move', 676, 353, start_time + 449, 'pointermove'], ['move', 677, 353, start_time + 451, 'pointermove'], ['move', 678, 353, start_time + 452, 'pointermove'], ['move', 679, 353, start_time + 454, 'pointermove'], ['move', 681, 353, start_time + 457, 'pointermove'], ['move', 682, 353, start_time + 459, 'pointermove'], ['move', 684, 353, start_time + 461, 'pointermove'], ['move', 685, 353, start_time + 464, 'pointermove'], ['move', 686, 353, start_time + 466, 'pointermove'], ['move', 688, 353, start_time + 469, 'pointermove'], ['move', 690, 353, start_time + 470, 'pointermove'], ['move', 691, 353, start_time + 473, 'pointermove'], ['move', 692, 353, start_time + 474, 'pointermove'], ['move', 693, 353, start_time + 476, 'pointermove'], ['move', 694, 353, start_time + 478, 'pointermove'], ['move', 695, 354, start_time + 480, 'pointermove'], ['move', 696, 354, start_time + 481, 'pointermove'], ['move', 698, 354, start_time + 484, 'pointermove'], ['move', 699, 354, start_time + 486, 'pointermove'], ['move', 700, 354, start_time + 490, 'pointermove'], ['move', 701, 354, start_time + 491, 'pointermove'], ['move', 701, 355, start_time + 492, 'pointermove'], ['move', 702, 355, start_time + 493, 'pointermove'], ['move', 703, 355, start_time + 495, 'pointermove'], ['move', 704, 355, start_time + 497, 'pointermove'], ['move', 706, 356, start_time + 499, 'pointermove'], ['move', 707, 356, start_time + 501, 'pointermove'], ['move', 708, 356, start_time + 503, 'pointermove'], ['move', 709, 356, start_time + 507, 'pointermove'], ['move', 709, 357, start_time + 508, 'pointermove'], ['move', 711, 357, start_time + 510, 'pointermove'], ['move', 712, 357, start_time + 513, 'pointermove'], ['move', 714, 357, start_time + 516, 'pointermove'], ['move', 714, 359, start_time + 518, 'pointermove'], ['move', 715, 359, start_time + 519, 'pointermove'], ['move', 716, 359, start_time + 523, 'pointermove'], ['move', 717, 359, start_time + 526, 'pointermove'], ['move', 718, 360, start_time + 529, 'pointermove'], ['move', 719, 360, start_time + 534, 'pointermove'], ['move', 720, 360, start_time + 539, 'pointermove'], ['move', 720, 361, start_time + 543, 'pointermove'], ['move', 721, 361, start_time + 547, 'pointermove'], ['move', 723, 361, start_time + 563, 'pointermove'], ['move', 723, 362, start_time + 691, 'pointermove'], ['move', 722, 362, start_time + 694, 'pointermove'], ['move', 722, 363, start_time + 696, 'pointermove'], ['move', 721, 364, start_time + 706, 'pointermove'], ['move', 721, 365, start_time + 714, 'pointermove'], ['move', 720, 365, start_time + 718, 'pointermove'], ['move', 720, 366, start_time + 724, 'pointermove'], ['move', 719, 366, start_time + 726, 'pointermove'], ['move', 719, 368, start_time + 732, 'pointermove'], ['move', 718, 368, start_time + 734, 'pointermove'], ['move', 718, 369, start_time + 740, 'pointermove'], ['move', 717, 369, start_time + 743, 'pointermove'], ['move', 717, 370, start_time + 748, 'pointermove'], ['move', 716, 370, start_time + 754, 'pointermove'], ['move', 716, 371, start_time + 761, 'pointermove'], ['move', 715, 371, start_time + 1015, 'pointermove'], ['move', 715, 372, start_time + 1018, 'pointermove'], ['move', 713, 372, start_time + 1030, 'pointermove'], ['move', 713, 373, start_time + 1032, 'pointermove'], ['move', 712, 373, start_time + 1042, 'pointermove'], ['move', 712, 374, start_time + 1043, 'pointermove'], ['move', 711, 374, start_time + 1054, 'pointermove'], ['move', 711, 376, start_time + 1057, 'pointermove'], ['move', 710, 376, start_time + 1064, 'pointermove'], ['move', 709, 377, start_time + 1073, 'pointermove'], ['move', 709, 378, start_time + 1077, 'pointermove'], ['move', 708, 378, start_time + 1080, 'pointermove'], ['move', 707, 378, start_time + 1090, 'pointermove'], ['move', 705, 378, start_time + 1103, 'pointermove'], ['move', 705, 379, start_time + 1104, 'pointermove'], ['move', 704, 379, start_time + 1115, 'pointermove'], ['move', 703, 379, start_time + 1129, 'pointermove'], ['move', 702, 379, start_time + 1136, 'pointermove'], ['move', 702, 378, start_time + 1140, 'pointermove'], ['move', 701, 378, start_time + 1142, 'pointermove'], ['move', 701, 377, start_time + 1143, 'pointermove'], ['move', 700, 377, start_time + 1147, 'pointermove'], ['move', 700, 375, start_time + 1148, 'pointermove'], ['move', 699, 375, start_time + 1150, 'pointermove'], ['move', 697, 373, start_time + 1155, 'pointermove'], ['move', 696, 372, start_time + 1158, 'pointermove'], ['move', 696, 371, start_time + 1161, 'pointermove'], ['move', 695, 370, start_time + 1163, 'pointermove'], ['move', 694, 370, start_time + 1164, 'pointermove'], ['move', 694, 369, start_time + 1166, 'pointermove'], ['move', 693, 369, start_time + 1168, 'pointermove'], ['move', 693, 367, start_time + 1169, 'pointermove'], ['move', 692, 366, start_time + 1173, 'pointermove'], ['move', 691, 365, start_time + 1174, 'pointermove'], ['move', 691, 364, start_time + 1177, 'pointermove'], ['move', 689, 364, start_time + 1178, 'pointermove'], ['move', 688, 363, start_time + 1180, 'pointermove'], ['move', 688, 362, start_time + 1181, 'pointermove'], ['move', 687, 361, start_time + 1182, 'pointermove'], ['move', 687, 360, start_time + 1184, 'pointermove'], ['move', 686, 360, start_time + 1185, 'pointermove'], ['move', 686, 358, start_time + 1188, 'pointermove'], ['move', 685, 358, start_time + 1189, 'pointermove'], ['move', 685, 357, start_time + 1190, 'pointermove'], ['move', 684, 356, start_time + 1192, 'pointermove'], ['move', 683, 355, start_time + 1194, 'pointermove'], ['move', 683, 354, start_time + 1196, 'pointermove'], ['move', 682, 353, start_time + 1198, 'pointermove'], ['move', 680, 352, start_time + 1200, 'pointermove'], ['move', 680, 350, start_time + 1202, 'pointermove'], ['move', 679, 349, start_time + 1203, 'pointermove'], ['move', 678, 348, start_time + 1207, 'pointermove'], ['move', 678, 347, start_time + 1209, 'pointermove'], ['move', 677, 346, start_time + 1210, 'pointermove'], ['move', 676, 345, start_time + 1212, 'pointermove'], ['move', 676, 344, start_time + 1213, 'pointermove'], ['move', 675, 344, start_time + 1214, 'pointermove'], ['move', 675, 342, start_time + 1216, 'pointermove'], ['move', 675, 341, start_time + 1217, 'pointermove'], ['move', 674, 341, start_time + 1218, 'pointermove'], ['move', 674, 340, start_time + 1219, 'pointermove'], ['move', 672, 339, start_time + 1223, 'pointermove'], ['move', 671, 338, start_time + 1225, 'pointermove'], ['move', 671, 337, start_time + 1227, 'pointermove'], ['move', 670, 336, start_time + 1228, 'pointermove'], ['move', 669, 334, start_time + 1232, 'pointermove'], ['move', 669, 333, start_time + 1234, 'pointermove'], ['move', 668, 333, start_time + 1235, 'pointermove'], ['move', 668, 332, start_time + 1236, 'pointermove'], ['move', 667, 331, start_time + 1239, 'pointermove'], ['move', 667, 330, start_time + 1241, 'pointermove'], ['move', 666, 330, start_time + 1243, 'pointermove'], ['move', 666, 329, start_time + 1245, 'pointermove'], ['move', 664, 329, start_time + 1246, 'pointermove'], ['move', 664, 328, start_time + 1247, 'pointermove'], ['move', 663, 327, start_time + 1251, 'pointermove'], ['move', 663, 325, start_time + 1254, 'pointermove'], ['move', 662, 325, start_time + 1256, 'pointermove'], ['move', 662, 324, start_time + 1259, 'pointermove'], ['move', 661, 324, start_time + 1260, 'pointermove'], ['move', 661, 323, start_time + 1266, 'pointermove'], ['move', 660, 323, start_time + 1270, 'pointermove'], ['move', 659, 322, start_time + 1281, 'pointermove'], ['move', 659, 321, start_time + 1287, 'pointermove'], ['move', 658, 321, start_time + 1373, 'pointermove'], ['move', 658, 322, start_time + 1377, 'pointermove'], ['move', 658, 323, start_time + 1383, 'pointermove'], ['move', 657, 323, start_time + 1386, 'pointermove'], ['move', 657, 324, start_time + 1390, 'pointermove'], ['move', 657, 326, start_time + 1394, 'pointermove'], ['move', 655, 327, start_time + 1399, 'pointermove'], ['move', 655, 328, start_time + 1404, 'pointermove'], ['move', 655, 329, start_time + 1409, 'pointermove'], ['move', 654, 330, start_time + 1414, 'pointermove'], ['move', 654, 331, start_time + 1416, 'pointermove'], ['move', 654, 332, start_time + 1424, 'pointermove'], ['move', 654, 333, start_time + 1427, 'pointermove'], ['move', 654, 335, start_time + 1432, 'pointermove'], ['move', 654, 336, start_time + 1440, 'pointermove'], ['move', 654, 337, start_time + 1443, 'pointermove'], ['move', 654, 338, start_time + 1448, 'pointermove'], ['move', 654, 339, start_time + 1452, 'pointermove'], ['move', 654, 340, start_time + 1456, 'pointermove'], ['move', 654, 341, start_time + 1461, 'pointermove'], ['move', 654, 343, start_time + 1464, 'pointermove'], ['move', 654, 344, start_time + 1468, 'pointermove'], ['move', 654, 345, start_time + 1472, 'pointermove'], ['move', 654, 346, start_time + 1475, 'pointermove'], ['move', 654, 347, start_time + 1478, 'pointermove'], ['move', 654, 348, start_time + 1481, 'pointermove'], ['move', 656, 349, start_time + 1483, 'pointermove'], ['move', 656, 351, start_time + 1486, 'pointermove'], ['move', 657, 351, start_time + 1488, 'pointermove'], ['move', 657, 352, start_time + 1490, 'pointermove'], ['move', 657, 353, start_time + 1491, 'pointermove'], ['move', 662, 361, start_time + 1509, 'pointermove'], ['move', 663, 362, start_time + 1511, 'pointermove'], ['move', 663, 363, start_time + 1513, 'pointermove'], ['move', 665, 364, start_time + 1515, 'pointermove'], ['move', 666, 365, start_time + 1518, 'pointermove'], ['move', 667, 366, start_time + 1520, 'pointermove'], ['move', 668, 368, start_time + 1523, 'pointermove'], ['move', 670, 370, start_time + 1525, 'pointermove'], ['move', 671, 371, start_time + 1528, 'pointermove'], ['move', 673, 371, start_time + 1530, 'pointermove'], ['move', 673, 372, start_time + 1531, 'pointermove'], ['move', 674, 372, start_time + 1532, 'pointermove'], ['move', 675, 373, start_time + 1534, 'pointermove'], ['move', 675, 374, start_time + 1536, 'pointermove'], ['move', 676, 374, start_time + 1537, 'pointermove'], ['move', 676, 376, start_time + 1538, 'pointermove'], ['move', 677, 376, start_time + 1540, 'pointermove'], ['move', 678, 376, start_time + 1541, 'pointermove'], ['move', 679, 377, start_time + 1542, 'pointermove'], ['move', 679, 378, start_time + 1543, 'pointermove'], ['move', 681, 378, start_time + 1545, 'pointermove'], ['move', 682, 379, start_time + 1547, 'pointermove'], ['move', 683, 380, start_time + 1549, 'pointermove'], ['move', 684, 381, start_time + 1550, 'pointermove'], ['move', 685, 381, start_time + 1551, 'pointermove'], ['move', 686, 382, start_time + 1554, 'pointermove'], ['move', 687, 382, start_time + 1556, 'pointermove'], ['move', 687, 384, start_time + 1557, 'pointermove'], ['move', 688, 384, start_time + 1558, 'pointermove'], ['move', 690, 385, start_time + 1559, 'pointermove'], ['move', 691, 385, start_time + 1561, 'pointermove'], ['move', 692, 386, start_time + 1562, 'pointermove'], ['move', 693, 387, start_time + 1563, 'pointermove'], ['move', 694, 387, start_time + 1565, 'pointermove'], ['move', 695, 388, start_time + 1566, 'pointermove'], ['move', 696, 388, start_time + 1568, 'pointermove'], ['move', 696, 389, start_time + 1569, 'pointermove'], ['move', 698, 389, start_time + 1570, 'pointermove'], ['move', 699, 389, start_time + 1571, 'pointermove'], ['move', 699, 390, start_time + 1573, 'pointermove'], ['move', 701, 390, start_time + 1574, 'pointermove'], ['move', 702, 392, start_time + 1575, 'pointermove'], ['move', 703, 393, start_time + 1578, 'pointermove'], ['move', 715, 397, start_time + 1593, 'pointermove'], ['move', 716, 398, start_time + 1595, 'pointermove'], ['move', 717, 399, start_time + 1598, 'pointermove'], ['move', 719, 399, start_time + 1600, 'pointermove'], ['move', 720, 401, start_time + 1601, 'pointermove'], ['move', 721, 401, start_time + 1604, 'pointermove'], ['move', 723, 401, start_time + 1605, 'pointermove'], ['move', 724, 402, start_time + 1607, 'pointermove'], ['move', 725, 402, start_time + 1610, 'pointermove'], ['move', 726, 403, start_time + 1612, 'pointermove'], ['move', 727, 403, start_time + 1614, 'pointermove'], ['move', 728, 403, start_time + 1617, 'pointermove'], ['move', 729, 404, start_time + 1619, 'pointermove'], ['move', 731, 404, start_time + 1623, 'pointermove'], ['move', 731, 405, start_time + 1626, 'pointermove'], ['move', 733, 405, start_time + 1631, 'pointermove'], ['move', 734, 405, start_time + 1637, 'pointermove'], ['move', 734, 406, start_time + 1642, 'pointermove'], ['move', 735, 406, start_time + 1647, 'pointermove'], ['move', 736, 406, start_time + 1725, 'pointermove'], ['move', 737, 406, start_time + 1737, 'pointermove'], ['move', 739, 406, start_time + 1745, 'pointermove'], ['move', 740, 406, start_time + 1751, 'pointermove'], ['move', 741, 406, start_time + 1756, 'pointermove'], ['move', 741, 405, start_time + 1761, 'pointermove'], ['move', 742, 405, start_time + 1763, 'pointermove'], ['move', 743, 404, start_time + 1768, 'pointermove'], ['move', 744, 404, start_time + 1773, 'pointermove'], ['move', 744, 403, start_time + 1776, 'pointermove'], ['move', 745, 403, start_time + 1781, 'pointermove'], ['move', 745, 402, start_time + 1784, 'pointermove'], ['move', 747, 402, start_time + 1792, 'pointermove'], ['move', 747, 400, start_time + 1796, 'pointermove'], ['move', 748, 400, start_time + 1847, 'pointermove'], ['move', 748, 401, start_time + 1853, 'pointermove'], ['move', 749, 401, start_time + 1854, 'pointermove'], ['move', 750, 401, start_time + 1860, 'pointermove'], ['move', 750, 402, start_time + 1861, 'pointermove'], ['move', 751, 402, start_time + 1862, 'pointermove'], ['move', 752, 402, start_time + 1866, 'pointermove'], ['move', 752, 403, start_time + 1870, 'pointermove'], ['move', 753, 403, start_time + 1871, 'pointermove'], ['move', 754, 403, start_time + 1874, 'pointermove'], ['move', 754, 404, start_time + 1875, 'pointermove'], ['move', 756, 404, start_time + 1879, 'pointermove'], ['move', 756, 405, start_time + 1881, 'pointermove'], ['move', 757, 405, start_time + 1882, 'pointermove'], ['move', 758, 405, start_time + 1885, 'pointermove'], ['move', 759, 406, start_time + 1889, 'pointermove'], ['move', 760, 407, start_time + 1893, 'pointermove'], ['move', 761, 407, start_time + 1897, 'pointermove'], ['move', 762, 407, start_time + 1900, 'pointermove'], ['move', 762, 409, start_time + 1901, 'pointermove'], ['move', 764, 409, start_time + 1904, 'pointermove'], ['move', 765, 410, start_time + 1908, 'pointermove'], ['move', 766, 410, start_time + 1913, 'pointermove'], ['move', 766, 411, start_time + 1916, 'pointermove'], ['move', 768, 411, start_time + 1923, 'pointermove'], ['move', 769, 412, start_time + 1928, 'pointermove'], ['move', 770, 412, start_time + 1938, 'pointermove'], ['down', 770, 412, start_time + 2049, 'pointerdown'], ['up', 770, 412, start_time + 2126, 'pointerup']];
    var e = r["enMq"]["jLTV"]();
    var t = r["enMq"]["kdvq"]();
    var n = '883132magic data982447magic dataCSS1Compatmagic data75magic data-1magic data-1magic data-1magic data-1magic data-1magic data-1magic data-1magic data1magic data21magic data5magic data-1magic data12magic data-1magic data-1magic data-1magic data-1magic data-1magic data-1magic data-1magic data-1magic data566magic data15magic data-1magic data-1magic data-1magic data0magic data0magic data0magic data0magic data816magic data937magic data1920magic data1040magic datazh-CNmagic datazh-CN,zhmagic data-1magic data1magic data24magic dataMozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/90.0.4430.212 Safari/537.36magic data1magic data1magic data1920magic data1080magic data1920magic data1040magic data1magic data1magic data1magic data-1magic dataWin32magic data0magic data-8magic dataec7c335bf74657c936dd67ab696b3d97magic dataf2d2e0dd416d822848daae7931504cd5magic datainternal-pdf-viewer,mhjfbmdgcfjbbpaeojofohoefgiehjai,internal-nacl-pluginmagic data0magic data-1magic data0magic data4magic dataArial,ArialBlack,ArialNarrow,Calibri,Cambria,CambriaMath,ComicSansMS,Consolas,Courier,CourierNew,Georgia,Helvetica,Impact,LucidaConsole,LucidaSansUnicode,MicrosoftSansSerif,MSGothic,MSPGothic,MSSansSerif,MSSerif,PalatinoLinotype,SegoePrint,SegoeScript,SegoeUI,SegoeUILight,SegoeUISemibold,SegoeUISymbol,Tahoma,Times,TimesNewRoman,TrebuchetMS,Verdana,Wingdingsmagic data1629022149443magic data-1magic data-1magic data-1magic data362magic data38magic data4magic data4magic data29magic data-1magic data-1';
    var i = "INPUT_0";
    Config['gt'] = gt;
    Config['challenge'] = challenge;
    var a = new wDdk(Config);
    a['c'] = [12,58,98,36,43,95,62,15,12];
    a["s"] = config_s;
    var o = le() - ct + parseInt(Math.random() * (4000 - 3000 + 1) + 3000, 10);
    r["RpfL"] = "";
    r["STir"] = function() {
        var e = {};
        var Me = {
            "deviceorientation": false,
            "mouseEvent": true,
            "touchEvent": false
        };
        e["v"] = "9.0.7";
        var t = this["hQhs"] || {};
        e["de"] = Me["deviceorientation"];
        e["te"] = Me["touchEvent"];
        e["me"] = Me["mouseEvent"];
        var Ie = {
            "puppet": false,
            "phantom": false,
            "nightmare": false,
            "selenium": false,
            "vendor": "Google Inc. (Intel)",
            "renderer": "ANGLE (Intel, Mesa Intel(R) UHD Graphics 630 (CFL GT2), OpenGL 4.6 (Core Profile) Mesa 20.3.4)"
        };
        var r = Ie;
        e["ven"] = r["vendor"] || -1;
        e["ren"] = r["renderer"] || -1;
        e["fp"] = this["enMq"]["WWPU"];
        e["lp"] = this["enMq"]["XEQf"];
        e["em"] = {};
        te([], e["em"]);
        e["em"]['wd'] = 1;
        e["tm"] = new UhwE()["QiLd"]();
        // e["by"] = this["doqA"];
        e["by"] = 2;
        return e;
    };
    r['wtlf'] = '883132!!982447!!CSS1Compat!!75!!-1!!-1!!-1!!-1!!-1!!-1!!-1!!1!!21!!5!!-1!!12!!-1!!-1!!-1!!-1!!-1!!-1!!-1!!-1!!566!!15!!-1!!-1!!-1!!0!!0!!0!!0!!816!!937!!1920!!1040!!zh-CN!!zh-CN,zh!!-1!!1!!24!!Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/90.0.4430.212 Safari/537.36!!1!!1!!1920!!1080!!1920!!1040!!1!!1!!1!!-1!!Win32!!0!!-8!!ec7c335bf74657c936dd67ab696b3d97!!f2d2e0dd416d822848daae7931504cd5!!internal-pdf-viewer,mhjfbmdgcfjbbpaeojofohoefgiehjai,internal-nacl-plugin!!0!!-1!!0!!4!!Arial,ArialBlack,ArialNarrow,Calibri,Cambria,CambriaMath,ComicSansMS,Consolas,Courier,CourierNew,Georgia,Helvetica,Impact,LucidaConsole,LucidaSansUnicode,MicrosoftSansSerif,MSGothic,MSPGothic,MSSansSerif,MSSerif,PalatinoLinotype,SegoePrint,SegoeScript,SegoeUI,SegoeUILight,SegoeUISemibold,SegoeUISymbol,Tahoma,Times,TimesNewRoman,TrebuchetMS,Verdana,Wingdings!!' + le() + '!!-1!!-1!!-1!!362!!38!!4!!4!!29!!-1!!-1';
    var s = [["lang", a["lang"] || "zh-cn"], ["type", "fullpage"], ["tt", me(e, a["c"], a["s"]) || -1], ["light", i || -1], ["s", Z(uu["RrSY"](t))], ["h", Z(uu["RrSY"](n))], ["hh", Z(n)], ["hi", Z(r["wtlf"])], ["vip_order", r["vip_order"] || -1], ["ct", r["ct"] || -1], ["ep", r["STir"]() || -1], ["passtime", o || -1], ["rp", Z(a["gt"] + a["challenge"] + o)]];
    for (var c = 0; c < s["length"]; c++) {
        r["RpfL"] += "\"" + s[c][0] + "\":" + ve["stringify"](s[c][1]) + ",";
    }
    var t = ["bbOy"];
    var e = "";
    t["push"](e["toString"]());
    var uHyn = "";

    (function addHash(e, t) {
            function vrju(e) {
                var t = 5381;
                var r = e["length"]
                    , n = 0;

                while (r--) {
                    t = (t << 5) + t + e["charCodeAt"](n++);
                }

                t &= ~(1 << 31);
                return t;
            }

            new Date()["getTime"]() - t["getTime"]() > 100 && (e = "qwe");
            // uHyn = "{" + r["RpfL"] + "\"captcha_token\":\"" + vrju(addHash["toString"]() + vrju(vrju["toString"]()) + vrju(e["toString"]())) + "\"" + "}";
            uHyn = "{" + r["RpfL"] + "\"captcha_token\":\"" + '448404039' + "\"" + "}";
        }
    )(t["shift"](), new Date());
    var _ = it();
    r['hQhs'] = {};
    r["ylBh"] = function(e) {
        var t = this;

        if (!t["hQhs"]["aeskey"] || e) {
            t["hQhs"]["aeskey"] = ce();
        }

        return t["hQhs"]["aeskey"];
    };
    // return uu["SBoX"](_["encrypt"](uHyn, r["ylBh"]()));
    return uu["SBoX"](_["encrypt"](uHyn, aes_key));
}


test_gt = '011e260466268eeb81114b4cc8e8a133';
test_challenge = '4de3fc03f0e54920142c6a3af161730c';
test_s = '76682d32';
test_aes_key = 'bceb32bdd91400a2';
console.log(get_w2(test_gt, test_challenge, test_s, test_aes_key));

