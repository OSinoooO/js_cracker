window = global;

function atob(s) {
    return Buffer.from(s, "base64").toString("binary")
}


function get_data(data) {

    function s(e) {
        return (s = "function" == typeof Symbol && "symbol" == typeof Symbol.A ? function (e) {
                    return typeof e
                }
                : function (e) {
                    return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
                }
        )(e)
    }

    var A = "2.0"
        , __g = {};

    function t() {
    }

    function i(e) {
        this.s = (2048 & e) >> 11,
            this.t = (1536 & e) >> 9,
            this.i = 511 & e,
            this.h = 511 & e
    }

    function h(e) {
        this.t = (3072 & e) >> 10,
            this.h = 1023 & e
    }

    function B(e) {
        this.B = (3072 & e) >> 10,
            this.n = (768 & e) >> 8,
            this.Q = (192 & e) >> 6,
            this.s = 63 & e
    }

    function n(e) {
        this.t = e >> 10 & 3,
            this.i = 1023 & e
    }

    function Q() {
    }

    function a(e) {
        this.B = (3072 & e) >> 10,
            this.n = (768 & e) >> 8,
            this.Q = (192 & e) >> 6,
            this.s = 63 & e
    }

    function C(e) {
        this.h = (4095 & e) >> 2,
            this.s = 3 & e
    }

    function c(e) {
        this.t = e >> 10 & 3,
            this.i = e >> 2 & 255,
            this.s = 3 & e
    }

    t.prototype.a = function (e) {
        e.C = !1
    }
        ,
        i.prototype.a = function (e) {
            switch (this.s) {
                case 0:
                    e.c[this.t] = this.i;
                    break;
                case 1:
                    e.c[this.t] = e.e[this.h]
            }
        }
        ,
        h.prototype.a = function (e) {
            e.e[this.h] = e.c[this.t]
        }
        ,
        B.prototype.a = function (e) {
            switch (this.s) {
                case 0:
                    e.c[this.B] = e.c[this.n] + e.c[this.Q];
                    break;
                case 1:
                    e.c[this.B] = e.c[this.n] - e.c[this.Q];
                    break;
                case 2:
                    e.c[this.B] = e.c[this.n] * e.c[this.Q];
                    break;
                case 3:
                    e.c[this.B] = e.c[this.n] / e.c[this.Q];
                    break;
                case 4:
                    e.c[this.B] = e.c[this.n] % e.c[this.Q];
                    break;
                case 5:
                    e.c[this.B] = e.c[this.n] == e.c[this.Q];
                    break;
                case 6:
                    e.c[this.B] = e.c[this.n] >= e.c[this.Q];
                    break;
                case 7:
                    e.c[this.B] = e.c[this.n] || e.c[this.Q];
                    break;
                case 8:
                    e.c[this.B] = e.c[this.n] && e.c[this.Q];
                    break;
                case 9:
                    e.c[this.B] = e.c[this.n] !== e.c[this.Q];
                    break;
                case 10:
                    e.c[this.B] = s(e.c[this.n]);
                    break;
                case 11:
                    e.c[this.B] = e.c[this.n] in e.c[this.Q];
                    break;
                case 12:
                    e.c[this.B] = e.c[this.n] > e.c[this.Q];
                    break;
                case 13:
                    e.c[this.B] = -e.c[this.n];
                    break;
                case 14:
                    e.c[this.B] = e.c[this.n] < e.c[this.Q];
                    break;
                case 15:
                    e.c[this.B] = e.c[this.n] & e.c[this.Q];
                    break;
                case 16:
                    e.c[this.B] = e.c[this.n] ^ e.c[this.Q];
                    break;
                case 17:
                    e.c[this.B] = e.c[this.n] << e.c[this.Q];
                    break;
                case 18:
                    e.c[this.B] = e.c[this.n] >>> e.c[this.Q];
                    break;
                case 19:
                    e.c[this.B] = e.c[this.n] | e.c[this.Q];
                    break;
                case 20:
                    e.c[this.B] = !e.c[this.n]
            }
        }
        ,
        n.prototype.a = function (e) {
            e.o.push(e.k),
                e.g.push(e.e),
                e.k = e.c[this.t],
                e.e = [];
            for (var t = 0; t < this.i; t++)
                e.e.unshift(e.G.pop());
            e.r.push(e.G),
                e.G = []
        }
        ,
        Q.prototype.a = function (e) {
            e.k = e.o.pop(),
                e.e = e.g.pop(),
                e.G = e.r.pop()
        }
        ,
        a.prototype.a = function (e) {
            switch (this.s) {
                case 0:
                    e.w = e.c[this.B] >= e.c[this.n];
                    break;
                case 1:
                    e.w = e.c[this.B] <= e.c[this.n];
                    break;
                case 2:
                    e.w = e.c[this.B] > e.c[this.n];
                    break;
                case 3:
                    e.w = e.c[this.B] < e.c[this.n];
                    break;
                case 4:
                    e.w = e.c[this.B] == e.c[this.n];
                    break;
                case 5:
                    e.w = e.c[this.B] != e.c[this.n];
                    break;
                case 6:
                    e.w = e.c[this.B];
                    break;
                case 7:
                    e.w = !e.c[this.B]
            }
        }
        ,
        C.prototype.a = function (e) {
            switch (this.s) {
                case 0:
                    e.k = this.h;
                    break;
                case 1:
                    e.w && (e.k = this.h);
                    break;
                case 2:
                    e.w || (e.k = this.h);
                    break;
                case 3:
                    e.k = this.h,
                        e.D = null
            }
            e.w = !1
        }
        ,
        c.prototype.a = function (e) {
            switch (this.s) {
                case 0:
                    for (var t = [], n = 0; n < this.i; n++)
                        t.unshift(e.G.pop());
                    e.c[3] = e.c[this.t](t[0], t[1]);
                    break;
                case 1:
                    for (var r = e.G.pop(), a = [], i = 0; i < this.i; i++)
                        a.unshift(e.G.pop());
                    e.c[3] = e.c[this.t][r](a[0], a[1]);
                    break;
                case 2:
                    for (var o = [], c = 0; c < this.i; c++)
                        o.unshift(e.G.pop());
                    e.c[3] = new e.c[this.t](o[0], o[1])
            }
        }
    ;
    var e = function (e) {
        for (var t = 66, n = [], r = 0; r < e.length; r++) {
            var a = 24 ^ e.charCodeAt(r) ^ t;
            n.push(String.fromCharCode(a)),
                t = a
        }
        return n.join("")
    };

    function o(e) {
        this.s = (4095 & e) >> 10,
            this.t = (1023 & e) >> 8,
            this.i = 1023 & e,
            this.h = 63 & e
    }

    function k(e) {
        this.s = (4095 & e) >> 10,
            this.B = (1023 & e) >> 8,
            this.n = (255 & e) >> 6
    }

    function g(e) {
        this.t = (3072 & e) >> 10,
            this.h = 1023 & e
    }

    function G(e) {
        this.h = 4095 & e
    }

    function r(e) {
        this.t = (3072 & e) >> 10
    }

    function w(e) {
        this.h = 4095 & e
    }

    function E(e) {
        this.s = (3840 & e) >> 8,
            this.t = (192 & e) >> 6,
            this.i = 63 & e
    }

    function D() {
        this.c = [0, 0, 0, 0],
            this.k = 0,
            this.o = [],
            this.e = [],
            this.g = [],
            this.G = [],
            this.r = [],
            this.w = !1,
            this.R = [],
            this.I = [],
            this.C = !1,
            this.D = null,
            this.Y = null,
            this.f = [],
            this.J = 0,
            this.u = {
                0: t,
                1: i,
                2: h,
                3: B,
                4: n,
                5: Q,
                6: a,
                7: C,
                8: c,
                9: o,
                10: k,
                11: g,
                12: G,
                13: r,
                14: w,
                15: E
            }
    }

    o.prototype.a = function (t) {
        switch (this.s) {
            case 0:
                t.G.push(t.c[this.t]);
                break;
            case 1:
                t.G.push(this.i);
                break;
            case 2:
                t.G.push(t.e[this.h]);
                break;
            case 3:
                t.G.push(e(t.I[this.h]))
        }
    }
        ,
        k.prototype.a = function (A) {
            switch (this.s) {
                case 0:
                    var s = A.G.pop();
                    A.c[this.B] = A.c[this.n][s];
                    break;
                case 1:
                    var t = A.G.pop()
                        , i = A.G.pop();
                    A.c[this.n][t] = i;
                    break;
                case 2:
                    var h = A.G.pop();
                    A.c[this.B] = eval(h)
            }
        }
        ,
        g.prototype.a = function (t) {
            t.c[this.t] = e(t.I[this.h])
        }
        ,
        G.prototype.a = function (e) {
            e.D = this.h
        }
        ,
        r.prototype.a = function (e) {
            throw e.c[this.t]
        }
        ,
        w.prototype.a = function (e) {
            var t = this
                , n = [0];
            e.e.forEach((function (e) {
                    n.push(e)
                }
            ));
            var r = function (r) {
                var a = new D;
                return a.e = n,
                    a.e[0] = r,
                    a.b(e.R, t.h, e.I, e.f),
                    a.c[3]
            };
            r.toString = function () {
                return "() { [native code] }"
            },
                e.c[3] = r;
            window.encrypt = r
        }
        ,
        E.prototype.a = function (e) {
            switch (this.s) {
                case 0:
                    for (var t = {}, n = 0; n < this.i; n++) {
                        var r = e.G.pop();
                        t[e.G.pop()] = r
                    }
                    e.c[this.t] = t;
                    break;
                case 1:
                    for (var a = [], i = 0; i < this.i; i++)
                        a.unshift(e.G.pop());
                    e.c[this.t] = a
            }
        }
        ,
        D.prototype.x = function (e) {
            for (var t = atob(e), n = t.charCodeAt(0) << 8 | t.charCodeAt(1), r = [], a = 2; a < n + 2; a += 2)
                r.push(t.charCodeAt(a) << 8 | t.charCodeAt(a + 1));
            this.R = r;
            for (var i = [], o = n + 2; o < t.length;) {
                var c = t.charCodeAt(o) << 8 | t.charCodeAt(o + 1)
                    , u = t.slice(o + 2, o + 2 + c);
                i.push(u),
                    o += c + 2
            }
            this.I = i
        }
        ,
        D.prototype.b = function (e, t, n) {
            for (t = t || 0,
                     n = n || [],
                     this.k = t,
                     "string" == typeof e ? this.x(e) : (this.R = e,
                         this.I = n),
                     this.C = !0,
                     this.J = Date.now(); this.C;) {
                var r = this.R[this.k++];
                if ("number" != typeof r)
                    break;
                var a = Date.now();
                if (5e8 < a - this.J)
                    return;
                this.J = a;
                try {
                    this.a(r)
                } catch (e) {
                    this.Y = e,
                    this.D && (this.k = this.D)
                }
            }
        }
        ,
        D.prototype.a = function (e) {
            var t = (61440 & e) >> 12;
            new this.u[t](e).a(this)
        }
        ,
        ee = new D()['b']("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");

    var R = function (e) {
        return window.encrypt(encodeURI(e))
    }
        , I = function (e) {
        return __g._e1(encodeURI(e))
    };
    return R(data);
}


const org_data = {
    "color_depth": 24,
    "dpi_x": 96,
    "dpi_y": 96,
    "device_pixel_ratio": 1,
    "client_rects": {
        "0": {
            "x": 0,
            "y": 0,
            "width": 803,
            "height": 2553,
            "top": 0,
            "right": 803,
            "bottom": 2553,
            "left": 0
        }
    },
    "inner_height": 937,
    "max_touch_points": 0,
    "outer_height": 1040,
    "screen_orientation": "portrait",
    "screen_width": 1920,
    "screen_height": 1080,
    "screen_vail_width": 1920,
    "screen_vail_heigth": 1040,
    "language": "zh-CN",
    "navigator_properties_num": 60,
    "track": false,
    "flash_enabled": false,
    "js_enabled": true,
    "cookie_enabled": true,
    "touch_support": false,
    "vb_enable": false,
    "webrtc_enable": true,
    "battery": {
        "charging": true,
        "chargingTime": null,
        "dischargingTime": null,
        "level": 0
    },
    "platform": "Win32",
    "created": new Date().getTime(),
    "connection_type": "wifi",
    "user_agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/90.0.4430.212 Safari/537.36",
    "websocket_enable": true,
    "debug_enable": true,
    "memory": 8,
    "plugins": [
        [
            "Chrome PDF Plugin",
            "Portable Document Format",
            [
                [
                    "application/x-google-chrome-pdf",
                    "pdf"
                ]
            ]
        ],
        [
            "Chrome PDF Viewer",
            "",
            [
                [
                    "application/pdf",
                    "pdf"
                ]
            ]
        ],
        [
            "Native Client",
            "",
            [
                [
                    "application/x-nacl",
                    ""
                ],
                [
                    "application/x-pnacl",
                    ""
                ]
            ]
        ]
    ],
    "canvas_fp": "170e1d2e8105a0a202a8fc777367cd3f",
    "webgl_fp": "b21eecbbd89975e538e39f91e11699d7",
    "graphics": "Google Inc. (NVIDIA)~ANGLE (NVIDIA, NVIDIA GeForce GTX 1050 Ti Direct3D11 vs_5_0 ps_5_0, D3D11-26.21.14.4166)",
    "adblock": false,
    "audio_fp": "001304bf682489f9e803b474ffa024ea",
    "audio_enable": true,
    "nonce": "",
    "SESSIONID": "Sb4DBqklhIBBESDqTM6HUCcYVTuPNNw9jL4c4s66Xxi"  //TODO: 获取SESSIONID
};

const data = get_data(JSON.stringify(org_data));
console.log(data);

C = function(e, t, n) {
    var r = {};
    r[c("0x10f")] = function(e, t) {
        return e < t
    }
        ,
        r[c("0x110")] = function(e, t) {
            return e * t
        }
        ,
        r[c("0x111")] = function(e, t) {
            return e - t
        }
        ,
        r[c("0x112")] = function(e, t) {
            return e * t
        }
        ,
        r[c("0x113")] = function(e, t) {
            return e - t
        }
    ;
    for (var a = "1|2|4|0|3"[c("0x7f")]("|"), i = 0; ; ) {
        switch (a[i++]) {
            case "0":
                for (var o = 0; r.JapPp(o, s); o++) {
                    u += x[Math[c("0x114")](r[c("0x110")](Math.random(), r.tfNgJ(x[c("0x104")], 1)))]
                }
                continue;
            case "1":
                var u = ""
                    , s = t;
                continue;
            case "2":
                var x = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z", "A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
                continue;
            case "3":
                return u;
            case "4":
                e && (s = Math[c("0x114")](r.NGqZi(Math[c("0x115")](), r.rqwtS(n, t))) + t);
                continue
        }
        break
    }
}(!1, 43);