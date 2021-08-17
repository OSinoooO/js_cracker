// 补环境
window = global;

CanvasRenderingContext2D = {
    rect: function () {},
    fillRect: function () {},
    fillText: function () {},
    beginPath: function () {},
    arc: function () {},
    fill: function () {},
    closePath: function () {},
    isPointInPath: function () {return true},
};
HTMLCanvasElement = {
    getContext: function (e) {
        return CanvasRenderingContext2D;
    },
    style: {},
    toDataURL: function () {},
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

var Q = function() {
    function MYEL() {
        this["i"] = 0;
        this["j"] = 0;
        this["S"] = [];
    }

    function Nocs(e) {
        var t, r, n;

        for (t = 0; t < 256; ++t)
            this["S"][t] = t;

        r = 0;

        for (t = 0; t < 256; ++t) {
            r = r + this["S"][t] + e[t % e["length"]] & 255;
            n = this["S"][t];
            this["S"][t] = this["S"][r];
            this["S"][r] = n;
        }

        this["i"] = 0;
        this["j"] = 0;
    }

    function OXBF() {
        var e;
        this["i"] = this["i"] + 1 & 255;
        this["j"] = this["j"] + this["S"][this["i"]] & 255;
        e = this["S"][this["i"]];
        this["S"][this["i"]] = this["S"][this["j"]];
        this["S"][this["j"]] = e;
        return this["S"][e + this["S"][this["i"]] & 255];
    }

    MYEL["prototype"]["init"] = Nocs;
    MYEL["prototype"]["next"] = OXBF;

    function PLCi() {
        return new MYEL();
    }

    var r = 256;
    var t;
    var n;
    var i;

    if (n == null) {
        n = [];
        i = 0;
        var e;

        try {
            if (window["crypto"] && window["crypto"]["getRandomValues"]) {
                var a = new Uint32Array(256);
                window["crypto"]["getRandomValues"](a);

                for (e = 0; e < a["length"]; ++e)
                    n[i++] = a[e] & 255;
            }
        } catch (d) {}

        var o = 0;

        function s(e) {
            o = o || 0;

            if (o >= 256 || i >= r) {
                if (window["removeEventListener"]) {
                    o = 0;
                    window["removeEventListener"]("mousemove", s, false);
                } else if (window["detachEvent"]) {
                    o = 0;
                    window["detachEvent"]("onmousemove", s);
                }

                return;
            }

            try {
                var t = e["x"] + e["y"];
                n[i++] = t & 255;
                o += 1;
            } catch (d) {}
        }

        if (window["addEventListener"])
            window["addEventListener"]("mousemove", s, false);
        else if (window["attachEvent"])
            window["attachEvent"]("onmousemove", s);
    }

    function QDta() {
        if (t == null) {
            t = PLCi();

            while (i < r) {
                var e = Math["floor"](65536 * Math["random"]());
                n[i++] = e & 255;
            }

            t["init"](n);

            for (i = 0; i < n["length"]; ++i)
                n[i] = 0;

            i = 0;
        }

        return t["next"]();
    }

    function RlwG(e) {
        var t;

        for (t = 0; t < e["length"]; ++t)
            e[t] = QDta();
    }

    function SC_r() {}

    SC_r["prototype"]["nextBytes"] = RlwG;
    var c;
    var _ = 0xdeadbeefcafe;
    var l = (_ & 16777215) == 15715070;

    function TrYW(e, t, r) {
        if (e != null)
            if ("number" == typeof e)
                this["fromNumber"](e, t, r);
            else if (t == null && "string" != typeof e)
                this["fromString"](e, 256);
            else
                this["fromString"](e, t);
    }

    function UAxW() {
        return new TrYW(null);
    }

    function VuAW(e, t, r, n, i, a) {
        while (--a >= 0) {
            var o = t * this[e++] + r[n] + i;
            i = Math["floor"](o / 67108864);
            r[n++] = o & 67108863;
        }

        return i;
    }

    function WxEV(e, t, r, n, i, a) {
        var o = t & 32767
            , s = t >> 15;

        while (--a >= 0) {
            var c = this[e] & 32767;

            var _ = this[e++] >> 15;

            var l = s * c + _ * o;
            c = o * c + ((l & 32767) << 15) + r[n] + (i & 1073741823);
            i = (c >>> 30) + (l >>> 15) + s * _ + (i >>> 30);
            r[n++] = c & 1073741823;
        }

        return i;
    }

    function XZFR(e, t, r, n, i, a) {
        var o = t & 16383
            , s = t >> 14;

        while (--a >= 0) {
            var c = this[e] & 16383;

            var _ = this[e++] >> 14;

            var l = s * c + _ * o;
            c = o * c + ((l & 16383) << 14) + r[n] + i;
            i = (c >> 28) + (l >> 14) + s * _;
            r[n++] = c & 268435455;
        }

        return i;
    }

    if (l && C["appName"] == "Microsoft Internet Explorer") {
        TrYW["prototype"]["am"] = WxEV;
        c = 30;
    } else if (l && C["appName"] != "Netscape") {
        TrYW["prototype"]["am"] = VuAW;
        c = 26;
    } else {
        TrYW["prototype"]["am"] = XZFR;
        c = 28;
    }

    TrYW["prototype"]["DB"] = c;
    TrYW["prototype"]["DM"] = (1 << c) - 1;
    TrYW["prototype"]["DV"] = 1 << c;
    var u = 52;
    TrYW["prototype"]["FV"] = Math["pow"](2, u);
    TrYW["prototype"]["F1"] = u - c;
    TrYW["prototype"]["F2"] = 2 * c - u;
    var f = "0123456789abcdefghijklmnopqrstuvwxyz";
    var p = [];
    var h, g;
    h = "0"["charCodeAt"](0);

    for (g = 0; g <= 9; ++g)
        p[h++] = g;

    h = "a"["charCodeAt"](0);

    for (g = 10; g < 36; ++g)
        p[h++] = g;

    h = "A"["charCodeAt"](0);

    for (g = 10; g < 36; ++g)
        p[h++] = g;

    function YNCf(e) {
        return f["charAt"](e);
    }

    function Zdjh(e, t) {
        var r = p[e["charCodeAt"](t)];
        return r == null ? -1 : r;
    }

    function aeQH(e) {
        for (var t = this["t"] - 1; t >= 0; --t)
            e[t] = this[t];

        e["t"] = this["t"];
        e["s"] = this["s"];
    }

    function bhBS(e) {
        this["t"] = 1;
        this["s"] = e < 0 ? -1 : 0;
        if (e > 0)
            this[0] = e;
        else if (e < -1)
            this[0] = e + this["DV"];
        else
            this["t"] = 0;
    }

    function csIg(e) {
        var t = UAxW();
        t["fromInt"](e);
        return t;
    }

    function dafw(e, t) {
        var r;
        if (t == 16)
            r = 4;
        else if (t == 8)
            r = 3;
        else if (t == 256)
            r = 8;
        else if (t == 2)
            r = 1;
        else if (t == 32)
            r = 5;
        else if (t == 4)
            r = 2;
        else {
            this["fromRadix"](e, t);
            return;
        }
        this["t"] = 0;
        this["s"] = 0;
        var n = e["length"]
            , i = false
            , a = 0;

        while (--n >= 0) {
            var o = r == 8 ? e[n] & 255 : Zdjh(e, n);

            if (o < 0) {
                if (e["charAt"](n) == "-")
                    i = true;
                continue;
            }

            i = false;
            if (a == 0)
                this[this["t"]++] = o;
            else if (a + r > this["DB"]) {
                this[this["t"] - 1] |= (o & (1 << this["DB"] - a) - 1) << a;
                this[this["t"]++] = o >> this["DB"] - a;
            } else
                this[this["t"] - 1] |= o << a;
            a += r;
            if (a >= this["DB"])
                a -= this["DB"];
        }

        if (r == 8 && (e[0] & 128) != 0) {
            this["s"] = -1;
            if (a > 0)
                this[this["t"] - 1] |= (1 << this["DB"] - a) - 1 << a;
        }

        this["clamp"]();
        if (i)
            TrYW["ZERO"]["subTo"](this, this);
    }

    function evnQ() {
        var e = this["s"] & this["DM"];

        while (this["t"] > 0 && this[this["t"] - 1] == e)
            --this["t"];
    }

    function fFkJ(e) {
        if (this["s"] < 0)
            return "-" + this["negate"]()["toString"](e);
        var t;
        if (e == 16)
            t = 4;
        else if (e == 8)
            t = 3;
        else if (e == 2)
            t = 1;
        else if (e == 32)
            t = 5;
        else if (e == 4)
            t = 2;
        else
            return this["toRadix"](e);
        var r = (1 << t) - 1, n, i = false, a = "", o = this["t"];
        var s = this["DB"] - o * this["DB"] % t;

        if (o-- > 0) {
            if (s < this["DB"] && (n = this[o] >> s) > 0) {
                i = true;
                a = YNCf(n);
            }

            while (o >= 0) {
                if (s < t) {
                    n = (this[o] & (1 << s) - 1) << t - s;
                    n |= this[--o] >> (s += this["DB"] - t);
                } else {
                    n = this[o] >> (s -= t) & r;

                    if (s <= 0) {
                        s += this["DB"];
                        --o;
                    }
                }

                if (n > 0)
                    i = true;
                if (i)
                    a += YNCf(n);
            }
        }

        return i ? a : "0";
    }

    function gbAZ() {
        var e = UAxW();
        TrYW["ZERO"]["subTo"](this, e);
        return e;
    }

    function hpgi() {
        return this["s"] < 0 ? this["negate"]() : this;
    }

    function iWnB(e) {
        var t = this["s"] - e["s"];
        if (t != 0)
            return t;
        var r = this["t"];
        t = r - e["t"];
        if (t != 0)
            return this["s"] < 0 ? -t : t;

        while (--r >= 0)
            if ((t = this[r] - e[r]) != 0)
                return t;

        return 0;
    }

    function jCaq(e) {
        var t = 1, r;

        if ((r = e >>> 16) != 0) {
            e = r;
            t += 16;
        }

        if ((r = e >> 8) != 0) {
            e = r;
            t += 8;
        }

        if ((r = e >> 4) != 0) {
            e = r;
            t += 4;
        }

        if ((r = e >> 2) != 0) {
            e = r;
            t += 2;
        }

        if ((r = e >> 1) != 0) {
            e = r;
            t += 1;
        }

        return t;
    }

    function kcsy() {
        if (this["t"] <= 0)
            return 0;
        return this["DB"] * (this["t"] - 1) + jCaq(this[this["t"] - 1] ^ this["s"] & this["DM"]);
    }

    function lnxr(e, t) {
        var r;

        for (r = this["t"] - 1; r >= 0; --r)
            t[r + e] = this[r];

        for (r = e - 1; r >= 0; --r)
            t[r] = 0;

        t["t"] = this["t"] + e;
        t["s"] = this["s"];
    }

    function muBY(e, t) {
        for (var r = e; r < this["t"]; ++r)
            t[r - e] = this[r];

        t["t"] = Math["max"](this["t"] - e, 0);
        t["s"] = this["s"];
    }

    function nAqI(e, t) {
        var r = e % this["DB"];
        var n = this["DB"] - r;
        var i = (1 << n) - 1;
        var a = Math["floor"](e / this["DB"]), o = this["s"] << r & this["DM"], s;

        for (s = this["t"] - 1; s >= 0; --s) {
            t[s + a + 1] = this[s] >> n | o;
            o = (this[s] & i) << r;
        }

        for (s = a - 1; s >= 0; --s)
            t[s] = 0;

        t[a] = o;
        t["t"] = this["t"] + a + 1;
        t["s"] = this["s"];
        t["clamp"]();
    }

    function oG__(e, t) {
        t["s"] = this["s"];
        var r = Math["floor"](e / this["DB"]);

        if (r >= this["t"]) {
            t["t"] = 0;
            return;
        }

        var n = e % this["DB"];
        var i = this["DB"] - n;
        var a = (1 << n) - 1;
        t[0] = this[r] >> n;

        for (var o = r + 1; o < this["t"]; ++o) {
            t[o - r - 1] |= (this[o] & a) << i;
            t[o - r] = this[o] >> n;
        }

        if (n > 0)
            t[this["t"] - r - 1] |= (this["s"] & a) << i;
        t["t"] = this["t"] - r;
        t["clamp"]();
    }

    function pI_b(e, t) {
        var r = 0
            , n = 0
            , i = Math["min"](e["t"], this["t"]);

        while (r < i) {
            n += this[r] - e[r];
            t[r++] = n & this["DM"];
            n >>= this["DB"];
        }

        if (e["t"] < this["t"]) {
            n -= e["s"];

            while (r < this["t"]) {
                n += this[r];
                t[r++] = n & this["DM"];
                n >>= this["DB"];
            }

            n += this["s"];
        } else {
            n += this["s"];

            while (r < e["t"]) {
                n -= e[r];
                t[r++] = n & this["DM"];
                n >>= this["DB"];
            }

            n -= e["s"];
        }

        t["s"] = n < 0 ? -1 : 0;
        if (n < -1)
            t[r++] = this["DV"] + n;
        else if (n > 0)
            t[r++] = n;
        t["t"] = r;
        t["clamp"]();
    }

    function qQvm(e, t) {
        var r = this["abs"]()
            , n = e["abs"]();
        var i = r["t"];
        t["t"] = i + n["t"];

        while (--i >= 0)
            t[i] = 0;

        for (i = 0; i < n["t"]; ++i)
            t[i + r["t"]] = r["am"](0, n[i], t, i, 0, r["t"]);

        t["s"] = 0;
        t["clamp"]();
        if (this["s"] != e["s"])
            TrYW["ZERO"]["subTo"](t, t);
    }

    function rZsb(e) {
        var t = this["abs"]();
        var r = e["t"] = 2 * t["t"];

        while (--r >= 0)
            e[r] = 0;

        for (r = 0; r < t["t"] - 1; ++r) {
            var n = t["am"](r, t[r], e, 2 * r, 0, 1);

            if ((e[r + t["t"]] += t["am"](r + 1, 2 * t[r], e, 2 * r + 1, n, t["t"] - r - 1)) >= t["DV"]) {
                e[r + t["t"]] -= t["DV"];
                e[r + t["t"] + 1] = 1;
            }
        }

        if (e["t"] > 0)
            e[e["t"] - 1] += t["am"](r, t[r], e, 2 * r, 0, 1);
        e["s"] = 0;
        e["clamp"]();
    }

    function sSHT(e, t, r) {
        var n = e["abs"]();
        if (n["t"] <= 0)
            return;
        var i = this["abs"]();

        if (i["t"] < n["t"]) {
            if (t != null)
                t["fromInt"](0);
            if (r != null)
                this["copyTo"](r);
            return;
        }

        if (r == null)
            r = UAxW();
        var a = UAxW()
            , o = this["s"]
            , s = e["s"];
        var c = this["DB"] - jCaq(n[n["t"] - 1]);

        if (c > 0) {
            n["lShiftTo"](c, a);
            i["lShiftTo"](c, r);
        } else {
            n["copyTo"](a);
            i["copyTo"](r);
        }

        var _ = a["t"];
        var l = a[_ - 1];
        if (l == 0)
            return;
        var u = l * (1 << this["F1"]) + (_ > 1 ? a[_ - 2] >> this["F2"] : 0);
        var f = this["FV"] / u
            , p = (1 << this["F1"]) / u
            , h = 1 << this["F2"];
        var g = r["t"]
            , d = g - _
            , v = t == null ? UAxW() : t;
        a["dlShiftTo"](d, v);

        if (r["compareTo"](v) >= 0) {
            r[r["t"]++] = 1;
            r["subTo"](v, r);
        }

        TrYW["ONE"]["dlShiftTo"](_, v);
        v["subTo"](a, a);

        while (a["t"] < _)
            a[a["t"]++] = 0;

        while (--d >= 0) {
            var m = r[--g] == l ? this["DM"] : Math["floor"](r[g] * f + (r[g - 1] + h) * p);

            if ((r[g] += a["am"](0, m, r, d, 0, _)) < m) {
                a["dlShiftTo"](d, v);
                r["subTo"](v, r);

                while (r[g] < --m)
                    r["subTo"](v, r);
            }
        }

        if (t != null) {
            r["drShiftTo"](_, t);
            if (o != s)
                TrYW["ZERO"]["subTo"](t, t);
        }

        r["t"] = _;
        r["clamp"]();
        if (c > 0)
            r["rShiftTo"](c, r);
        if (o < 0)
            TrYW["ZERO"]["subTo"](r, r);
    }

    function toeG(e) {
        var t = UAxW();
        this["abs"]()["divRemTo"](e, null, t);
        if (this["s"] < 0 && t["compareTo"](TrYW["ZERO"]) > 0)
            e["subTo"](t, t);
        return t;
    }

    function ulgJ(e) {
        this["m"] = e;
    }

    function vfvB(e) {
        if (e["s"] < 0 || e["compareTo"](this["m"]) >= 0)
            return e["mod"](this["m"]);
        else
            return e;
    }

    function wXeh(e) {
        return e;
    }

    function xrzX(e) {
        e["divRemTo"](this["m"], null, e);
    }

    function yJzt(e, t, r) {
        e["multiplyTo"](t, r);
        this["reduce"](r);
    }

    function AJAV(e, t) {
        e["squareTo"](t);
        this["reduce"](t);
    }

    ulgJ["prototype"]["convert"] = vfvB;
    ulgJ["prototype"]["revert"] = wXeh;
    ulgJ["prototype"]["reduce"] = xrzX;
    ulgJ["prototype"]["mulTo"] = yJzt;
    ulgJ["prototype"]["sqrTo"] = AJAV;

    function Bryw() {
        if (this["t"] < 1)
            return 0;
        var e = this[0];
        if ((e & 1) == 0)
            return 0;
        var t = e & 3;
        t = t * (2 - (e & 15) * t) & 15;
        t = t * (2 - (e & 255) * t) & 255;
        t = t * (2 - ((e & 65535) * t & 65535)) & 65535;
        t = t * (2 - e * t % this["DV"]) % this["DV"];
        return t > 0 ? this["DV"] - t : -t;
    }

    function CqZf(e) {
        this["m"] = e;
        this["mp"] = e["invDigit"]();
        this["mpl"] = this["mp"] & 32767;
        this["mph"] = this["mp"] >> 15;
        this["um"] = (1 << e["DB"] - 15) - 1;
        this["mt2"] = 2 * e["t"];
    }

    function DmVA(e) {
        var t = UAxW();
        e["abs"]()["dlShiftTo"](this["m"]["t"], t);
        t["divRemTo"](this["m"], null, t);
        if (e["s"] < 0 && t["compareTo"](TrYW["ZERO"]) > 0)
            this["m"]["subTo"](t, t);
        return t;
    }

    function EeAr(e) {
        var t = UAxW();
        e["copyTo"](t);
        this["reduce"](t);
        return t;
    }

    function FAvk(e) {
        while (e["t"] <= this["mt2"])
            e[e["t"]++] = 0;

        for (var t = 0; t < this["m"]["t"]; ++t) {
            var r = e[t] & 32767;
            var n = r * this["mpl"] + ((r * this["mph"] + (e[t] >> 15) * this["mpl"] & this["um"]) << 15) & e["DM"];
            r = t + this["m"]["t"];
            e[r] += this["m"]["am"](0, n, e, t, 0, this["m"]["t"]);

            while (e[r] >= e["DV"]) {
                e[r] -= e["DV"];
                e[++r]++;
            }
        }

        e["clamp"]();
        e["drShiftTo"](this["m"]["t"], e);
        if (e["compareTo"](this["m"]) >= 0)
            e["subTo"](this["m"], e);
    }

    function GcQ_(e, t) {
        e["squareTo"](t);
        this["reduce"](t);
    }

    function HtIr(e, t, r) {
        e["multiplyTo"](t, r);
        this["reduce"](r);
    }

    CqZf["prototype"]["convert"] = DmVA;
    CqZf["prototype"]["revert"] = EeAr;
    CqZf["prototype"]["reduce"] = FAvk;
    CqZf["prototype"]["mulTo"] = HtIr;
    CqZf["prototype"]["sqrTo"] = GcQ_;

    function IkVT() {
        return (this["t"] > 0 ? this[0] & 1 : this["s"]) == 0;
    }

    function JuLo(e, t) {
        if (e > 4294967295 || e < 1)
            return TrYW["ONE"];
        var r = UAxW()
            , n = UAxW()
            , i = t["convert"](this)
            , a = jCaq(e) - 1;
        i["copyTo"](r);

        while (--a >= 0) {
            t["sqrTo"](r, n);
            if ((e & 1 << a) > 0)
                t["mulTo"](n, i, r);
            else {
                var o = r;
                r = n;
                n = o;
            }
        }

        return t["revert"](r);
    }

    function KMac(e, t) {
        var r;
        if (e < 256 || t["isEven"]())
            r = new ulgJ(t);
        else
            r = new CqZf(t);
        return this["exp"](e, r);
    }

    TrYW["prototype"]["copyTo"] = aeQH;
    TrYW["prototype"]["fromInt"] = bhBS;
    TrYW["prototype"]["fromString"] = dafw;
    TrYW["prototype"]["clamp"] = evnQ;
    TrYW["prototype"]["dlShiftTo"] = lnxr;
    TrYW["prototype"]["drShiftTo"] = muBY;
    TrYW["prototype"]["lShiftTo"] = nAqI;
    TrYW["prototype"]["rShiftTo"] = oG__;
    TrYW["prototype"]["subTo"] = pI_b;
    TrYW["prototype"]["multiplyTo"] = qQvm;
    TrYW["prototype"]["squareTo"] = rZsb;
    TrYW["prototype"]["divRemTo"] = sSHT;
    TrYW["prototype"]["invDigit"] = Bryw;
    TrYW["prototype"]["isEven"] = IkVT;
    TrYW["prototype"]["exp"] = JuLo;
    TrYW["prototype"]["toString"] = fFkJ;
    TrYW["prototype"]["negate"] = gbAZ;
    TrYW["prototype"]["abs"] = hpgi;
    TrYW["prototype"]["compareTo"] = iWnB;
    TrYW["prototype"]["bitLength"] = kcsy;
    TrYW["prototype"]["mod"] = toeG;
    TrYW["prototype"]["modPowInt"] = KMac;
    TrYW["ZERO"] = csIg(0);
    TrYW["ONE"] = csIg(1);

    function LhZU(e, t) {
        return new TrYW(e,t);
    }

    function MCTG(e, t) {
        if (t < e["length"] + 11) {
            console && console["error"] && console["error"]("Message too long for RSA");
            return null;
        }

        var r = [];
        var n = e["length"] - 1;

        while (n >= 0 && t > 0) {
            var i = e["charCodeAt"](n--);

            if (i < 128) {
                r[--t] = i;
            } else if (i > 127 && i < 2048) {
                r[--t] = i & 63 | 128;
                r[--t] = i >> 6 | 192;
            } else {
                r[--t] = i & 63 | 128;
                r[--t] = i >> 6 & 63 | 128;
                r[--t] = i >> 12 | 224;
            }
        }

        r[--t] = 0;
        var a = new SC_r();
        var o = [];

        while (t > 2) {
            o[0] = 0;

            while (o[0] == 0)
                a["nextBytes"](o);

            r[--t] = o[0];
        }

        r[--t] = 2;
        r[--t] = 0;
        return new TrYW(r);
    }

    function NnnF() {
        this["n"] = null;
        this["e"] = 0;
        this["d"] = null;
        this["p"] = null;
        this["q"] = null;
        this["dmp1"] = null;
        this["dmq1"] = null;
        this["coeff"] = null;
        var e = "00C1E3934D1614465B33053E7F48EE4EC87B14B95EF88947713D25EECBFF7E74C7977D02DC1D9451F79DD5D1C10C29ACB6A9B4D6FB7D0A0279B6719E1772565F09AF627715919221AEF91899CAE08C0D686D748B20A3603BE2318CA6BC2B59706592A9219D0BF05C9F65023A21D2330807252AE0066D59CEEFA5F2748EA80BAB81";
        var t = "10001";
        this["setPublic"](e, t);
    }

    function OkdO(e, t) {
        if (e != null && t != null && e["length"] > 0 && t["length"] > 0) {
            this["n"] = LhZU(e, 16);
            this["e"] = parseInt(t, 16);
        } else
            console && console["error"] && console["error"]("Invalid RSA public key");
    }

    function PGtx(e) {
        return e["modPowInt"](this["e"], this["n"]);
    }

    function QtWm(e) {
        var t = MCTG(e, this["n"]["bitLength"]() + 7 >> 3);
        if (t == null)
            return null;
        var r = this["doPublic"](t);
        if (r == null)
            return null;
        var n = r["toString"](16);
        if ((n["length"] & 1) == 0)
            return n;
        else
            return "0" + n;
    }

    NnnF["prototype"]["doPublic"] = PGtx;
    NnnF["prototype"]["setPublic"] = OkdO;
    NnnF["prototype"]["encrypt"] = QtWm;
    return NnnF;
}();

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

var ce = function() {
    function S4() {
        return ((1 + Math["random"]()) * 65536 | 0)["toString"](16)["substring"](1);
    }

    return function() {
        return S4() + S4() + S4() + S4();
    }
        ;
}();

function ye(e) {
    try {
        return (e / xe)["toFixed"](4) + we;
    } catch (t) {
        return e + "px";
    }
}

var se = function () {
    return function () {
        return parseInt(Math["random"]() * 1e4) + new Date()["valueOf"]();
    }
}();

function fe(r, e) {
    new iZrR(e)["bOlF"](function (e, t) {
        r[e] = t;
    });
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

function wDdk(e) {
    var t = this;
    t["bZsF"] = se();
    t["Wnw_"]({
        "protocol": 'https://'
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
    "Wnw_": function(e) {
        var t = this;
        fe(t, e);
        return t;
    }
};

function ptfl() {
    var e = this;
    e["TRdL"] = e["lKMm"]();
}

ptfl["prototype"] = {
    "mPUd": -1,
    "nYTE": 1,
    "osbI": 0,
    "pQaQ": function(e) {
        var t = this;
        return e ? t["nYTE"] : t["osbI"];
    },
    "qmpd": function(e) {
        return typeof e === "undefined";
    },
    "rcjF": ["A", "ARTICLE", "ASIDE", "AUDIO", "BASE", "BUTTON", "CANVAS", "CODE", "IFRAME", "IMG", "INPUT", "LABEL", "LINK", "NAV", "OBJECT", "OL", "PICTURE", "PRE", "SECTION", "SELECT", "SOURCE", "SPAN", "STYLE", "TABLE", "TEXTAREA", "VIDEO"],
    "sZdF": ["DIV", "P", "UL", "LI", "SCRIPT"],
    "tUCn": function() {
        return ["textLength", "HTMLLength", "documentMode"]["concat"](this["rcjF"])["concat"](["screenLeft", "screenTop", "screenAvailLeft", "screenAvailTop", "innerWidth", "innerHeight", "outerWidth", "outerHeight", "browserLanguage", "browserLanguages", "systemLanguage", "devicePixelRatio", "colorDepth", "userAgent", "cookieEnabled", "netEnabled", "screenWidth", "screenHeight", "screenAvailWidth", "screenAvailHeight", "localStorageEnabled", "sessionStorageEnabled", "indexedDBEnabled", "CPUClass", "platform", "doNotTrack", "timezone", "canvas2DFP", "canvas3DFP", "plugins", "maxTouchPoints", "flashEnabled", "javaEnabled", "hardwareConcurrency", "jsFonts", "timestamp", "performanceTiming", "internalip", "mediaDevices"])["concat"](this["sZdF"])["concat"](["deviceorientation", "touchEvent"]);
    },
    "lKMm": function() {
        var e = window;
        var t = e["screen"];
        var f = e["document"];
        var p = e["navigator"];
        var r = f["documentElement"];
        var o = 1;
        var h = this;
        var s = {};

        function c(e) {
            if (!e) {
                return;
            }

            var t = e["nodeType"];

            if (t === o) {
                var r = (e["nodeName"] || "")["toUpperCase"]();

                if (new hfAt(h["rcjF"]["concat"](h["sZdF"]))["SDqZ"](r) > -1) {
                    if (s[r]) {
                        s[r] += 1;
                    } else {
                        s[r] = 1;
                    }
                }
            }

            var n = e["childNodes"];

            for (var i = 0, a = n["length"]; i < a; i = i + 1) {
                c(n[i]);
            }
        }

        // c(f);
        var n = r["textContent"] || r["innerText"];
        // s["textLength"] = n["length"];
        s["textLength"] = 883132;

        try {
            var i = r["innerHTML"];
            // s["HTMLLength"] = i["length"];
            s["HTMLLength"] = 982447;
        } catch (g) {}

        s["documentMode"] = f["documentMode"] || f["compatMode"];
        s["browserLanguage"] = p["language"] || p["userLanguage"];
        s["browserLanguages"] = p["languages"] && p["languages"]["join"](",");
        s["systemLanguage"] = p["systemLanguage"];
        s["devicePixelRatio"] = e["devicePixelRatio"];
        s["colorDepth"] = t["colorDepth"];
        s["userAgent"] = p["userAgent"];
        s["cookieEnabled"] = h["pQaQ"](p["cookieEnabled"]);
        s["netEnabled"] = h["pQaQ"](p["onLine"]);
        s["innerWidth"] = e["innerWidth"];
        s["innerHeight"] = e["innerHeight"];

        try {
            s["outerWidth"] = e["outerWidth"];
            s["outerHeight"] = e["outerHeight"];
        } catch (g) {
            s["outerWidth"] = h["osbI"];
            s["outerHeight"] = h["osbI"];
        }

        s["screenWidth"] = t["width"];
        s["screenHeight"] = t["height"];
        s["screenAvailWidth"] = t["availWidth"];
        s["screenAvailHeight"] = t["availHeight"];
        s["screenLeft"] = t["left"] || e["screenLeft"];
        s["screenTop"] = t["top"] || e["screenTop"];
        s["screenAvailLeft"] = t["availLeft"];
        s["screenAvailTop"] = t["availTop"];

        try {
            s["localStorageEnabled"] = h["pQaQ"](e["localStorage"]);
        } catch (g) {
            s["localStorageEnabled"] = h["osbI"];
        }

        try {
            s["sessionStorageEnabled"] = h["pQaQ"](e["sessionStorage"]);
        } catch (g) {
            s["sessionStorageEnabled"] = h["osbI"];
        }

        s["indexedDBEnabled"] = h["pQaQ"](e["indexedDB"]);
        s["CPUClass"] = p["cpuClass"];
        s["platform"] = p["platform"];
        s["doNotTrack"] = h["pQaQ"](p["doNotTrack"]);
        s["timezone"] = new Date()["getTimezoneOffset"]() / 60;

        s["canvas2DFP"] = function() {
            var e = f["createElement"]("canvas");
            var t = e["getContext"] && e["getContext"]("2d");

            if (t) {
                var r = [];
                e["width"] = 2e3;
                e["height"] = 200;
                e["style"]["display"] = "inline";
                t["rect"](0, 0, 11, 11);
                t["rect"](3, 3, 6, 6);
                r["push"]("canvas winding:" + (t["isPointInPath"](5, 5, "evenodd") === false ? "yes" : "no"));
                t["textBaseline"] = "alphabetic";
                t["fillStyle"] = "#f60";
                t["fillRect"](125, 1, 62, 20);
                t["fillStyle"] = "#069";
                t["font"] = "11pt Arial";
                t["fillText"]("Cwm fjordbank glyphs vext quiz, \ud83d\ude03", 2, 15);
                t["fillStyle"] = "rgba(102, 204, 0, 0.7)";
                t["font"] = "18pt Arial";
                t["fillText"]("Cwm fjordbank glyphs vext quiz, \ud83d\ude03", 4, 45);
                t["globalCompositeOperation"] = "multiply";
                t["fillStyle"] = "rgb(255,0,255)";
                t["beginPath"]();
                t["arc"](52, 50, 50, 0, Math["PI"] * 2, true);
                t["closePath"]();
                t["fill"]();
                t["fillStyle"] = "rgb(0,255,255)";
                t["beginPath"]();
                t["arc"](100, 50, 50, 0, Math["PI"] * 2, true);
                t["closePath"]();
                t["fill"]();
                t["fillStyle"] = "rgb(255,255,0)";
                t["beginPath"]();
                t["arc"](75, 100, 50, 0, Math["PI"] * 2, true);
                t["closePath"]();
                t["fill"]();
                t["fillStyle"] = "rgb(255,0,255)";
                t["arc"](75, 75, 75, 0, Math["PI"] * 2, true);
                t["arc"](75, 75, 25, 0, Math["PI"] * 2, true);
                t["fill"]("evenodd");
                r["push"]("canvas fp:" + e["toDataURL"]());
                // return Z(r["join"]("~"));
                return 'ec7c335bf74657c936dd67ab696b3d97';
            } else {
                return h["osbI"];
            }
        }();

        s["canvas3DFP"] = function() {
            try {
                if (/\(i[^;]+;( U;)? CPU.+Mac OS X/["test"](p["userAgent"])) {
                    return h["osbI"];
                }

                var e = f["createElement"]("canvas");
                var t = e["getContext"] && (e["getContext"]("webgl") || e["getContext"]("experimental-webgl"));

                if (t) {
                    function r(e) {
                        t["clearColor"](0, 0, 0, 1);
                        t["enable"](t["DEPTH_TEST"]);
                        t["depthFunc"](t["LEQUAL"]);
                        t["clear"](t["COLOR_BUFFER_BIT"] | t["DEPTH_BUFFER_BIT"]);
                        return "[" + e[0] + ", " + e[1] + "]";
                    }

                    function n(e) {
                        var t, r = e["getExtension"]("EXT_texture_filter_anisotropic") || e["getExtension"]("WEBKIT_EXT_texture_filter_anisotropic") || e["getExtension"]("MOZ_EXT_texture_filter_anisotropic");
                        return r ? (t = e["getParameter"](r["MAX_TEXTURE_MAX_ANISOTROPY_EXT"]),
                        0 === t && (t = 2),
                            t) : null;
                    }

                    var i = [];
                    var a = "attribute vec2 attrVertex;varying vec2 varyinTexCoordinate;uniform vec2 uniformOffset;void main(){varyinTexCoordinate=attrVertex+uniformOffset;gl_Position=vec4(attrVertex,0,1);}";
                    var o = "precision mediump float;varying vec2 varyinTexCoordinate;void main() {gl_FragColor=vec4(varyinTexCoordinate,0,1);}";
                    var s = t["createBuffer"]();
                    t["bindBuffer"](t["ARRAY_BUFFER"], s);
                    var c = new Float32Array([-.2, -.9, 0, .4, -.26, 0, 0, .732134444, 0]);
                    t["bufferData"](t["ARRAY_BUFFER"], c, t["STATIC_DRAW"]);
                    s["itemSize"] = 3;
                    s["numItems"] = 3;

                    var _ = t["createProgram"]()
                        , l = t["createShader"](t["VERTEX_SHADER"]);

                    t["shaderSource"](l, a);
                    t["compileShader"](l);
                    var u = t["createShader"](t["FRAGMENT_SHADER"]);
                    t["shaderSource"](u, o);
                    t["compileShader"](u);
                    t["attachShader"](_, l);
                    t["attachShader"](_, u);
                    t["linkProgram"](_);
                    t["useProgram"](_);
                    _["vertexPosAttrib"] = t["getAttribLocation"](_, "attrVertex");
                    _["offsetUniform"] = t["getUniformLocation"](_, "uniformOffset");
                    t["enableVertexAttribArray"](_["vertexPosArray"]);
                    t["vertexAttribPointer"](_["vertexPosAttrib"], s["itemSize"], t["FLOAT"], !1, 0, 0);
                    t["uniform2f"](_["offsetUniform"], 1, 1);
                    t["drawArrays"](t["TRIANGLE_STRIP"], 0, s["numItems"]);

                    if (t["canvas"] != null) {
                        i["push"](t["canvas"]["toDataURL"]());
                    }

                    i["push"]("extensions:" + t["getSupportedExtensions"]()["join"](";"));
                    i["push"]("webgl aliased line width range:" + r(t["getParameter"](t["ALIASED_LINE_WIDTH_RANGE"])));
                    i["push"]("webgl aliased point size range:" + r(t["getParameter"](t["ALIASED_POINT_SIZE_RANGE"])));
                    i["push"]("webgl alpha bits:" + t["getParameter"](t["ALPHA_BITS"]));
                    i["push"]("webgl antialiasing:" + (t["getContextAttributes"]()["antialias"] ? "yes" : "no"));
                    i["push"]("webgl blue bits:" + t["getParameter"](t["BLUE_BITS"]));
                    i["push"]("webgl depth bits:" + t["getParameter"](t["DEPTH_BITS"]));
                    i["push"]("webgl green bits:" + t["getParameter"](t["GREEN_BITS"]));
                    i["push"]("webgl max anisotropy:" + n(t));
                    i["push"]("webgl max combined texture image units:" + t["getParameter"](t["MAX_COMBINED_TEXTURE_IMAGE_UNITS"]));
                    i["push"]("webgl max cube map texture size:" + t["getParameter"](t["MAX_CUBE_MAP_TEXTURE_SIZE"]));
                    i["push"]("webgl max fragment uniform vectors:" + t["getParameter"](t["MAX_FRAGMENT_UNIFORM_VECTORS"]));
                    i["push"]("webgl max render buffer size:" + t["getParameter"](t["MAX_RENDERBUFFER_SIZE"]));
                    i["push"]("webgl max texture image units:" + t["getParameter"](t["MAX_TEXTURE_IMAGE_UNITS"]));
                    i["push"]("webgl max texture size:" + t["getParameter"](t["MAX_TEXTURE_SIZE"]));
                    i["push"]("webgl max varying vectors:" + t["getParameter"](t["MAX_VARYING_VECTORS"]));
                    i["push"]("webgl max vertex attribs:" + t["getParameter"](t["MAX_VERTEX_ATTRIBS"]));
                    i["push"]("webgl max vertex texture image units:" + t["getParameter"](t["MAX_VERTEX_TEXTURE_IMAGE_UNITS"]));
                    i["push"]("webgl max vertex uniform vectors:" + t["getParameter"](t["MAX_VERTEX_UNIFORM_VECTORS"]));
                    i["push"]("webgl max viewport dims:" + r(t["getParameter"](t["MAX_VIEWPORT_DIMS"])));
                    i["push"]("webgl red bits:" + t["getParameter"](t["RED_BITS"]));
                    i["push"]("webgl renderer:" + t["getParameter"](t["RENDERER"]));
                    i["push"]("webgl shading language version:" + t["getParameter"](t["SHADING_LANGUAGE_VERSION"]));
                    i["push"]("webgl stencil bits:" + t["getParameter"](t["STENCIL_BITS"]));
                    i["push"]("webgl vendor:" + t["getParameter"](t["VENDOR"]));
                    i["push"]("webgl version:" + t["getParameter"](t["VERSION"]));

                    if (!t["getShaderPrecisionFormat"]) {
                        return Z(i["join"]("~"));
                    }

                    i["push"]("webgl vertex shader high float precision:" + t["getShaderPrecisionFormat"](t["VERTEX_SHADER"], t["HIGH_FLOAT"])["precision"]);
                    i["push"]("webgl vertex shader high float precision rangeMin:" + t["getShaderPrecisionFormat"](t["VERTEX_SHADER"], t["HIGH_FLOAT"])["rangeMin"]);
                    i["push"]("webgl vertex shader high float precision rangeMax:" + t["getShaderPrecisionFormat"](t["VERTEX_SHADER"], t["HIGH_FLOAT"])["rangeMax"]);
                    i["push"]("webgl vertex shader medium float precision:" + t["getShaderPrecisionFormat"](t["VERTEX_SHADER"], t["MEDIUM_FLOAT"])["precision"]);
                    i["push"]("webgl vertex shader medium float precision rangeMin:" + t["getShaderPrecisionFormat"](t["VERTEX_SHADER"], t["MEDIUM_FLOAT"])["rangeMin"]);
                    i["push"]("webgl vertex shader medium float precision rangeMax:" + t["getShaderPrecisionFormat"](t["VERTEX_SHADER"], t["MEDIUM_FLOAT"])["rangeMax"]);
                    i["push"]("webgl vertex shader low float precision:" + t["getShaderPrecisionFormat"](t["VERTEX_SHADER"], t["LOW_FLOAT"])["precision"]);
                    i["push"]("webgl vertex shader low float precision rangeMin:" + t["getShaderPrecisionFormat"](t["VERTEX_SHADER"], t["LOW_FLOAT"])["rangeMin"]);
                    i["push"]("webgl vertex shader low float precision rangeMax:" + t["getShaderPrecisionFormat"](t["VERTEX_SHADER"], t["LOW_FLOAT"])["rangeMax"]);
                    i["push"]("webgl fragment shader high float precision:" + t["getShaderPrecisionFormat"](t["FRAGMENT_SHADER"], t["HIGH_FLOAT"])["precision"]);
                    i["push"]("webgl fragment shader high float precision rangeMin:" + t["getShaderPrecisionFormat"](t["FRAGMENT_SHADER"], t["HIGH_FLOAT"])["rangeMin"]);
                    i["push"]("webgl fragment shader high float precision rangeMax:" + t["getShaderPrecisionFormat"](t["FRAGMENT_SHADER"], t["HIGH_FLOAT"])["rangeMax"]);
                    i["push"]("webgl fragment shader medium float precision:" + t["getShaderPrecisionFormat"](t["FRAGMENT_SHADER"], t["MEDIUM_FLOAT"])["precision"]);
                    i["push"]("webgl fragment shader medium float precision rangeMin:" + t["getShaderPrecisionFormat"](t["FRAGMENT_SHADER"], t["MEDIUM_FLOAT"])["rangeMin"]);
                    i["push"]("webgl fragment shader medium float precision rangeMax:" + t["getShaderPrecisionFormat"](t["FRAGMENT_SHADER"], t["MEDIUM_FLOAT"])["rangeMax"]);
                    i["push"]("webgl fragment shader low float precision:" + t["getShaderPrecisionFormat"](t["FRAGMENT_SHADER"], t["LOW_FLOAT"])["precision"]);
                    i["push"]("webgl fragment shader low float precision rangeMin:" + t["getShaderPrecisionFormat"](t["FRAGMENT_SHADER"], t["LOW_FLOAT"])["rangeMin"]);
                    i["push"]("webgl fragment shader low float precision rangeMax:" + t["getShaderPrecisionFormat"](t["FRAGMENT_SHADER"], t["LOW_FLOAT"])["rangeMax"]);
                    i["push"]("webgl vertex shader high int precision:" + t["getShaderPrecisionFormat"](t["VERTEX_SHADER"], t["HIGH_INT"])["precision"]);
                    i["push"]("webgl vertex shader high int precision rangeMin:" + t["getShaderPrecisionFormat"](t["VERTEX_SHADER"], t["HIGH_INT"])["rangeMin"]);
                    i["push"]("webgl vertex shader high int precision rangeMax:" + t["getShaderPrecisionFormat"](t["VERTEX_SHADER"], t["HIGH_INT"])["rangeMax"]);
                    i["push"]("webgl vertex shader medium int precision:" + t["getShaderPrecisionFormat"](t["VERTEX_SHADER"], t["MEDIUM_INT"])["precision"]);
                    i["push"]("webgl vertex shader medium int precision rangeMin:" + t["getShaderPrecisionFormat"](t["VERTEX_SHADER"], t["MEDIUM_INT"])["rangeMin"]);
                    i["push"]("webgl vertex shader medium int precision rangeMax:" + t["getShaderPrecisionFormat"](t["VERTEX_SHADER"], t["MEDIUM_INT"])["rangeMax"]);
                    i["push"]("webgl vertex shader low int precision:" + t["getShaderPrecisionFormat"](t["VERTEX_SHADER"], t["LOW_INT"])["precision"]);
                    i["push"]("webgl vertex shader low int precision rangeMin:" + t["getShaderPrecisionFormat"](t["VERTEX_SHADER"], t["LOW_INT"])["rangeMin"]);
                    i["push"]("webgl vertex shader low int precision rangeMax:" + t["getShaderPrecisionFormat"](t["VERTEX_SHADER"], t["LOW_INT"])["rangeMax"]);
                    i["push"]("webgl fragment shader high int precision:" + t["getShaderPrecisionFormat"](t["FRAGMENT_SHADER"], t["HIGH_INT"])["precision"]);
                    i["push"]("webgl fragment shader high int precision rangeMin:" + t["getShaderPrecisionFormat"](t["FRAGMENT_SHADER"], t["HIGH_INT"])["rangeMin"]);
                    i["push"]("webgl fragment shader high int precision rangeMax:" + t["getShaderPrecisionFormat"](t["FRAGMENT_SHADER"], t["HIGH_INT"])["rangeMax"]);
                    i["push"]("webgl fragment shader medium int precision:" + t["getShaderPrecisionFormat"](t["FRAGMENT_SHADER"], t["MEDIUM_INT"])["precision"]);
                    i["push"]("webgl fragment shader medium int precision rangeMin:" + t["getShaderPrecisionFormat"](t["FRAGMENT_SHADER"], t["MEDIUM_INT"])["rangeMin"]);
                    i["push"]("webgl fragment shader medium int precision rangeMax:" + t["getShaderPrecisionFormat"](t["FRAGMENT_SHADER"], t["MEDIUM_INT"])["rangeMax"]);
                    i["push"]("webgl fragment shader low int precision:" + t["getShaderPrecisionFormat"](t["FRAGMENT_SHADER"], t["LOW_INT"])["precision"]);
                    i["push"]("webgl fragment shader low int precision rangeMin:" + t["getShaderPrecisionFormat"](t["FRAGMENT_SHADER"], t["LOW_INT"])["rangeMin"]);
                    i["push"]("webgl fragment shader low int precision rangeMax:" + t["getShaderPrecisionFormat"](t["FRAGMENT_SHADER"], t["LOW_INT"])["rangeMax"]);
                    // return Z(i["join"]("~"));
                    return 'f2d2e0dd416d822848daae7931504cd5';
                } else {
                    return h["osbI"];
                }
            } catch (g) {
                // return h["osbI"];
                return 'f2d2e0dd416d822848daae7931504cd5';
            }
        }();

        s["plugins"] = function() {
            if (!p["plugins"]) {
                return h["mPUd"];
            }

            var e = [];
            var t = 40;
            var r = p["plugins"]["length"] > t ? t : p["plugins"]["length"];

            for (var n = 0, i = r; n < i; n = n + 1) {
                var a = p["plugins"][n];
                e["push"](a["filename"] && a["filename"]["replace"](/\s/g, ""));
            }

            return e["join"](",");
        }();

        s["maxTouchPoints"] = function() {
            if (!h["qmpd"](p["maxTouchPoints"])) {
                return p["maxTouchPoints"];
            } else if (!h["qmpd"](p["msMaxTouchPoints"])) {
                return p["msMaxTouchPoints"];
            } else {
                return 0;
            }
        }();

        s["flashEnabled"] = function() {
            if (h["qmpd"](e["swfobject"])) {
                return h["mPUd"];
            } else {
                return h["pQaQ"](e["swfobject"]["hasFlashPlayerVersion"] && e["swfobject"]["hasFlashPlayerVersion"]("9.0.0"));
            }
        }();

        s["javaEnabled"] = function() {
            try {
                if (h["qmpd"](p["javaEnabled"])) {
                    return h["mPUd"];
                } else {
                    return h["pQaQ"](p["javaEnabled"]());
                }
            } catch (g) {
                return h["mPUd"];
            }
        }();

        s["hardwareConcurrency"] = p["hardwareConcurrency"];
        s["jsFonts"] = v || m || d ? ["monospace", "sans-serif", "serif"]["join"](",") : function() {
            var s = ["monospace", "sans-serif", "serif"];
            var c = ["Andale Mono", "Arial", "Arial Black", "Arial Hebrew", "Arial MT", "Arial Narrow", "Arial Rounded MT Bold", "Arial Unicode MS", "Bitstream Vera Sans Mono", "Book Antiqua", "Bookman Old Style", "Calibri", "Cambria", "Cambria Math", "Century", "Century Gothic", "Century Schoolbook", "Comic Sans", "Comic Sans MS", "Consolas", "Courier", "Courier New", "Garamond", "Geneva", "Georgia", "Helvetica", "Helvetica Neue", "Impact", "Lucida Bright", "Lucida Calligraphy", "Lucida Console", "Lucida Fax", "LUCIDA GRANDE", "Lucida Handwriting", "Lucida Sans", "Lucida Sans Typewriter", "Lucida Sans Unicode", "Microsoft Sans Serif", "Monaco", "Monotype Corsiva", "MS Gothic", "MS Outlook", "MS PGothic", "MS Reference Sans Serif", "MS Sans Serif", "MS Serif", "MYRIAD", "MYRIAD PRO", "Palatino", "Palatino Linotype", "Segoe Print", "Segoe Script", "Segoe UI", "Segoe UI Light", "Segoe UI Semibold", "Segoe UI Symbol", "Tahoma", "Times", "Times New Roman", "Times New Roman PS", "Trebuchet MS", "Verdana", "Wingdings", "Wingdings 2", "Wingdings 3"];
            var t = "mmmmmmmmmmlli";
            var r = "72px";
            var e = T["getElementsByTagName"]("body")[0];

            if (!e) {
                s["push"]("Aria1");
                return s["join"](",");
            }

            var i = T["createElement"]("div");

            var _ = T["createElement"]("div");

            var n = {};
            var a = {};

            function o() {
                var e = T["createElement"]("span");
                e["style"]["position"] = "absolute";
                e["style"]["left"] = "-9999px";
                e["style"]["fontSize"] = r;
                e["innerHTML"] = t;
                return e;
            }

            function l(e, t) {
                var r = o();
                r["style"]["fontFamily"] = "'" + e + "'," + t;
                return r;
            }

            function u() {
                var e = [];

                for (var t = 0, r = s["length"]; t < r; t++) {
                    var n = o();
                    n["style"]["fontFamily"] = s[t];
                    i["appendChild"](n);
                    e["push"](n);
                }

                return e;
            }

            function f() {
                var e = {};

                for (var t = 0, r = c["length"]; t < r; t++) {
                    var n = [];

                    for (var i = 0, a = s["length"]; i < a; i++) {
                        var o = l(c[t], s[i]);

                        _["appendChild"](o);

                        n["push"](o);
                    }

                    e[c[t]] = n;
                }

                return e;
            }

            function p(e) {
                var t = false;

                for (var r = 0; r < s["length"]; r++) {
                    t = e[r]["offsetWidth"] !== n[s[r]] || e[r]["offsetHeight"] !== a[s[r]];

                    if (t) {
                        return t;
                    }
                }

                return t;
            }

            var h = u();
            e["appendChild"](i);

            for (var g = 0, d = s["length"]; g < d; g++) {
                n[s[g]] = h[g]["offsetWidth"];
                a[s[g]] = h[g]["offsetHeight"];
            }

            var v = f();
            e["appendChild"](_);
            var m = [];

            for (var w = 0, x = c["length"]; w < x; w++) {
                if (p(v[c[w]])) {
                    m["push"](c[w]["replace"](/\s/g, ""));
                }
            }

            var y = m["join"](",");
            e["removeChild"](_);
            e["removeChild"](i);
            return y;
        }();
        s["mediaDevices"] = h["mPUd"];
        s = {
            "SCRIPT": 29,
            "LINK": 12,
            "STYLE": 15,
            "DIV": 362,
            "P": 38,
            "A": 75,
            "IMG": 21,
            "UL": 4,
            "LI": 4,
            "INPUT": 5,
            "SPAN": 566,
            "IFRAME": 1,
            "textLength": 883132,
            "HTMLLength": 982447,
            "documentMode": "CSS1Compat",
            "browserLanguage": "zh-CN",
            "browserLanguages": "zh-CN,zh",
            "devicePixelRatio": 1,
            "colorDepth": 24,
            "userAgent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/90.0.4430.212 Safari/537.36",
            "cookieEnabled": 1,
            "netEnabled": 1,
            "innerWidth": 816,
            "innerHeight": 937,
            "outerWidth": 1920,
            "outerHeight": 1040,
            "screenWidth": 1920,
            "screenHeight": 1080,
            "screenAvailWidth": 1920,
            "screenAvailHeight": 1040,
            "screenLeft": 0,
            "screenTop": 0,
            "screenAvailLeft": 0,
            "screenAvailTop": 0,
            "localStorageEnabled": 1,
            "sessionStorageEnabled": 1,
            "indexedDBEnabled": 1,
            "platform": "Win32",
            "doNotTrack": 0,
            "timezone": -8,
            "canvas2DFP": "ec7c335bf74657c936dd67ab696b3d97",
            "canvas3DFP": "f2d2e0dd416d822848daae7931504cd5",
            "plugins": "internal-pdf-viewer,mhjfbmdgcfjbbpaeojofohoefgiehjai,internal-nacl-plugin",
            "maxTouchPoints": 0,
            "flashEnabled": -1,
            "javaEnabled": 0,
            "hardwareConcurrency": 4,
            "jsFonts": "Arial,ArialBlack,ArialNarrow,Calibri,Cambria,CambriaMath,ComicSansMS,Consolas,Courier,CourierNew,Georgia,Helvetica,Impact,LucidaConsole,LucidaSansUnicode,MicrosoftSansSerif,MSGothic,MSPGothic,MSSansSerif,MSSerif,PalatinoLinotype,SegoePrint,SegoeScript,SegoeUI,SegoeUILight,SegoeUISemibold,SegoeUISymbol,Tahoma,Times,TimesNewRoman,TrebuchetMS,Verdana,Wingdings",
            "mediaDevices": -1
        };
        return s;
    },
    "iZiT": function() {
        return this["jLTV"]()["length"];
    },
    "kdvq": function(e, t) {
        var r = this;
        var n = "magic data";
        var i = r["TRdL"];
        var a = [];
        new hfAt(r["tUCn"]())["QqNY"](function(e) {
            var t = i[e];
            a["push"](r["qmpd"](t) ? r["mPUd"] : t);
        });
        return a["join"](n);
    },
    "jLTV": function() {
        var e = window;
        var r = this;
        var n = r["TRdL"];
        n["timestamp"] = new Date()["getTime"]();
        n["deviceorientation"] = r["mPUd"];
        n["touchEvent"] = r["mPUd"];
        n["performanceTiming"] = r["mPUd"];
        n["internalip"] = r["mPUd"];
        var i = [];
        new hfAt(r["tUCn"]())["QqNY"](function(e) {
            var t = n[e];
            i["push"](r["qmpd"](t) ? r["mPUd"] : t);
        });
        return i["join"]("!!");
    }
};

function UuyG(e) {
    this["wWQh"] = e;
    this["xJtG"] = {};
}

UuyG["prototype"] = {
    "yfqn": function(e, t) {
        var r = this;

        if (r["xJtG"][e]) {
            r["xJtG"][e]["push"](t);
        } else {
            r["xJtG"][e] = [t];
        }

        return r;
    },
    "AZiJ": function(e, t) {
        var r = this;
        var n = r["xJtG"][e];

        if (!n) {
            return;
        }

        for (var i = 0, a = n["length"]; i < a; i = i + 1) {
            try {
                n[i](t);
            } catch (s) {
                var o = {
                    "error": s,
                    "type": e
                };
                return J($("user_callback", r["wWQh"], o));
            }
        }

        return r;
    },
    "BRRC": function() {
        this["xJtG"] = {};
    }
};

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

function WGlu(e) {
    var t = this;
    t["Cgpm"] = e;
}

WGlu["prototype"] = {
    "eLRn": function(e) {
        var t = this;
        t["DvPV"] = t["EBEk"];
        t["EBEk"] = e;
        t["Cgpm"](t["EBEk"], t["DvPV"]);
        return t;
    },
    "fIlW": function() {
        var e = this;
        return e["EBEk"];
    },
    "FBQm": function(e) {
        var t = this;
        var r = hfAt["GGYj"](e) ? e : [e];

        for (var n = 0, i = r["length"]; n < i; n = n + 1) {
            if (r[n] === t["fIlW"]()) {
                return true;
            }
        }

        return false;
    }
};

function sOLg(e, t) {
    var r = this;
    var n = new wDdk(e);

    if (n["remUnit"] && !isNaN(n["remUnit"])) {
        we = "rem";
        xe = n["remUnit"];
    }

    if (n["autoLanguage"] && !n["hasOwnProperty"]("lang")) {
        n["lang"] = ge(de());
    }

    if (n["https"]) {
        n["protocol"] = "https://";
    }

    if (e["debugConfig"]) {
        n["Wnw_"](e["debugConfig"]);
    }

    if (n["product"] !== "float" && n["product"] !== "popup" && n["product"] !== "custom" && n["product"] !== "bind") {
        n["product"] = "float";
    }

    if (g || v) {
        if (n["product"] === "float") {
            n["product"] = "popup";
        }
    }

    if (v) {
        if (n["product"] === "custom") {
            n["product"] = "popup";
        }
    }

    n["cc"] = C["hardwareConcurrency"] || 0;
    n["supportWorker"] = typeof Worker !== "undefined";
    r["XJvb"] = new ptfl();
    r["hQhs"] = n;
    r["grHJ"] = e;
    r["YDsS"] = new UuyG(r);
    r["EBEk"] = new WGlu(function(e, t) {
            r["ZAys"](e, t);
        }
    );
    r["aTZq"] = t;
    r["bQPx"] = g ? 3 : 0;
    r["cclR"] = g ? "web_mobile" : "web";
    r["doqA"] = -1;
    r["hQhs"]["cxsQ"] = {
        "pt": r["bQPx"]
    };
    r["EBEk"]["eLRn"](Re);
    r["enMq"] = new hUUu();
    r["wGcd"] = new qPiT();
}

function hUUu() {}
function qPiT() {}

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

sOLg["prototype"] = {
    "ZAys": function(e, t) {
        var r = this;
        var n = r["fhhe"];
        var i = r["EBEk"];
        var a = r["YDsS"];
        var o = r["hQhs"];
        var s = o["product"] === "bind";

        if (i["FBQm"](t)) {
            return;
        }

        if (t === We) {
            return;
        }

        if (!i["FBQm"](Re)) {
            n && n["gFVW"](e, t);
            n && n["hKkY"]();
        }

        if (i["FBQm"](Re)) {
            return;
            // r["ixaF"] = r["VktP"]()["BBgB"](function() {
            //     i["eLRn"](Pe);
            //     a["AZiJ"](Re);
            //
            //     if (o["vip_content"]) {
            //         r["jRJV"]();
            //     }
            // });
        } else if (i["FBQm"](Ge)) {
            n["lmkG"](r["kxlx"]);
        } else if (i["FBQm"](Ue)) {
            n["lnRT"]();

            if (s && o["pure"]) {
                a["AZiJ"](Ue);
            }
        } else if (i["FBQm"](qe)) {
            n["mKzG"]();
            a["AZiJ"](Ye);
        } else if (i["FBQm"]([He])) {
            n["nxUA"](r["oxWz"]);
            p(function() {
                if (s) {
                    r["enMq"] = new hUUu();
                    n["pbry"]();

                    if (o["pure"]) {
                        p(function() {
                            n["qDOQ"]();
                        }, 300);
                    }
                } else {
                    r["enMq"]["BRRC"]();
                }

                a["AZiJ"](Ve);
            }, 400);
        } else if (i["FBQm"]([je, Xe])) {
            if (s) {
                if (o["pure"]) {
                    n && n["pbry"]();
                    p(function() {
                        n && n["qDOQ"]();
                    }, 300);
                } else {
                    n && n["qDOQ"]();
                    n && n["rCfr"]();
                }
            }

            if (r["swie"] && r["swie"]["code"] === "error_21" && n) {
                n["tAGG"]();
            }

            a["AZiJ"](ze, r["swie"]);
        } else if (i["FBQm"](Be)) {
            if (s && !o["pure"]) {
                n["umRU"]();
            }

            n["vaNt"]();
        } else if (i["FBQm"](Ke)) {
            return;
        }
    },
    "VktP": function() {
        var t = this;
        var r = t["hQhs"];

        if (!r["gt"] || !r["challenge"]) {
            return J($("config_lack", t));
        }

        var e = t["XJvb"]["jLTV"]();
        t["wtlf"] = e;
        t["grHJ"]["cc"] = r["cc"];
        t["grHJ"]["ww"] = r["supportWorker"];
        t["grHJ"]["i"] = e;
        var n = t["xUrh"]();
        var i = it()["encrypt1"](ve['stringify'](t["grHJ"]), t["ylBh"]());
        var a = uu["SBoX"](i);
        var o = {
            "gt": t["grHJ"]["gt"],
            "challenge": t["grHJ"]["challenge"],
            "lang": r["lang"],
            "pt": t["bQPx"],
            "client_type": t["cclR"],
            "w": a + n
        };
        return [a + n, t["ylBh"]()];
        // return q(r, u["UgRL"]("fFtZ0VaY4Gg"), o)["BBgB"](function(e) {
        //     if (e["status"] === ze) {
        //         return J(Y(e, t, "/get.php"));
        //     }
        //
        //     r["Wnw_"](e["data"]);
        //
        //     if (r["apiserver"]) {
        //         r["api_server"] = r["apiserver"];
        //     }
        //
        //     if (r["staticservers"]) {
        //         r["static_servers"] = r["staticservers"];
        //     }
        //
        //     if (r["debugConfig"]) {
        //         r["Wnw_"](r["debugConfig"]);
        //     }
        //
        //     t["fhhe"] = new UI(t);
        //     t["AUBg"]();
        //     return t["fhhe"]["BmBD"];
        // }, function() {
        //     return J($("url_get", t));
        // });
    },
    "AUBg": function() {
        var e = this;
        var t = e["hQhs"];
        var r = e["EBEk"];
        var n = e["$"];

        try {
            if (T && T["getElementById"] && T["getElementById"]("geetest_data_share_plugin")) {
                var i = T["getElementById"]("geetest_data_share_plugin");
                var a = new CustomEvent("geetestPlugin",{
                    "detail": {
                        "challenge": t["challenge"],
                        "gt": t["gt"]
                    }
                });
                i["addEventListener"]("geetestEvent", function(e) {
                    if (t["product"] !== "bind") {
                        r["eLRn"](Be);
                    }
                });
                i["dispatchEvent"](a);
            }
        } catch (o) {}
    },
    "BRRC": function() {
        var e = this;
        e["fhhe"] && e["fhhe"]["BRRC"]();
        e["YDsS"]["BRRC"]();
        e["enMq"]["BRRC"]();
        e["wGcd"]["BRRC"]();

        if (e["CVIP"]) {
            e["CVIP"]["BRRC"]();
        }
    },
    "ieWu": function(e) {
        var t = this;
        t["swie"] = e;
        t["EBEk"]["eLRn"](je);
        return t;
    },
    "ZoiU": function(e) {
        var t = this;

        if (t["hQhs"]["product"] === "bind") {
            return t;
        }

        t["ixaF"]["BBgB"](function() {
            t["fhhe"]["ZoiU"](e);
        });
        return t;
    },
    "DxRN": function(e) {
        this["ECMz"] = e;
    },
    "FiAv": function(e) {
        this["GQpg"] = e;
    },
    "HvTE": function(e) {
        var t = this;
        t["ixaF"]["BBgB"](function() {
            t["fhhe"]["HvTE"](e);
        });
    },
    "Ittj": function(e) {
        var t = this;
        t["ixaF"]["BBgB"](function() {
            t["fhhe"]["Ittj"](e);
        });
    },
    "Jq_y": function() {
        var e = this;

        if (!e["hQhs"]["vip_content"]) {
            e["Kpvo"]();
            return;
        }

        if (e["LoFO"] === true) {
            return;
        }

        e["LoFO"] = true;
        e["MjGm"]();
    },
    "MjGm": function() {
        var e = this;
        h(e["NXDq"]);

        if (!e["powworkerdone"] && e["pow_progress"]) {
            e["NXDq"] = p(function() {
                e["powworkerdone"] = true;
                e["CVIP"]["PbLP"]();
                e["MjGm"]();
            }, 2e3);
        } else if (!e["powworkerdone"] && e["pow_starting"] && !e["pow_wait_once"]) {
            e["pow_wait_once"] = true;
            e["NXDq"] = p(function() {
                e["MjGm"]();
            }, 500);
        } else {
            e["LoFO"] = false;
            e["pow_wait_once"] = false;
            e["Kpvo"]();
        }
    },
    "Kpvo": function() {
        var t = this;
        var e = t["hQhs"];
        t["Ojfk"]();
        var r = {};
        r["gt"] = e["gt"];
        r["challenge"] = e["challenge"];
        r["lang"] = e["lang"] || "zh-cn";
        r["pt"] = t["bQPx"];
        r["client_type"] = t["cclR"];
        r["w"] = t["PTyY"];
        q(t["hQhs"], u["UgRL"]("fEkexGxOwUyY"), r)["BBgB"](function(e) {
            if (e["status"] === ze) {
                return J(Y(e, t, "/ajax.php"));
            }

            t["QPbI"](e["data"]);
        }, function() {
            return J($("url_ajax", t));
        });
    },
    "Ojfk": function() {
        var r = this;
        var e = r["enMq"]["jLTV"]();
        var t = r["enMq"]["kdvq"]();
        var n = r["XJvb"]["kdvq"]();
        var i = r["wGcd"]["jLTV"]();
        var a = r["hQhs"];
        var o = le() - ct;
        r["RpfL"] = "";
        var s = [["lang", a["lang"] || "zh-cn"], ["type", "fullpage"], ["tt", me(e, a["c"], a["s"]) || -1], ["light", i || -1], ["s", Z(u["RrSY"](t))], ["h", Z(u["RrSY"](n))], ["hh", Z(n)], ["hi", Z(r["wtlf"])], ["vip_order", r["vip_order"] || -1], ["ct", r["ct"] || -1], ["ep", r["STir"]() || -1], ["passtime", o || -1], ["rp", Z(a["gt"] + a["challenge"] + o)]];

        for (var c = 0; c < s["length"]; c++) {
            r["RpfL"] += "\"" + s[c][0] + "\":" + ve["stringify"](s[c][1]) + ",";
        }

        var _ = it();

        function tTLf() {
            var t = ["bbOy"];
            return function(e) {
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
                        uHyn = "{" + r["RpfL"] + "\"captcha_token\":\"" + vrju(addHash["toString"]() + vrju(vrju["toString"]()) + vrju(e["toString"]())) + "\"" + "}";
                    }
                )(t["shift"](), new Date());

                r["PTyY"] = u["SBoX"](_["encrypt"](uHyn, r["ylBh"]()));
            }
                ;
        }

        r["TNTO"] = tTLf();
        r["TNTO"]("");
    },
    "QPbI": function(e) {
        var t = this;
        var r = t["hQhs"];
        var n;

        if (e["result"] === "success") {
            var i = e["validate"]["split"]("|")[0];
            t["oxWz"] = {
                "geetest_challenge": r["challenge"],
                "geetest_validate": i,
                "geetest_seccode": i + "|jordan"
            };
            t["UERC"] = e["score"];
            n = He;
        } else if (e["result"] === "forbidden") {
            return J($("server_forbidden", t));
        } else {
            n = Ge;
            t["kxlx"] = e["result"];
        }

        t["EBEk"]["eLRn"](n);
    },
    "VsXD": function() {
        return this["oxWz"];
    },
    "WpaB": function() {
        this["oxWz"] = null;
    },
    "yfqn": function(e, t) {
        var r = this;
        r["YDsS"]["yfqn"](e, t);
        return r;
    },
    "XPbX": function() {
        var e = this;
        e["fhhe"] && e["fhhe"]["XPbX"]();
        return e;
    },
    "YbzU": function() {
        var e = this;
        var t = e["EBEk"];
        t["eLRn"](qe);
    },
    "ZLXm": function() {
        var e = this;
        var t = e["EBEk"];
        t["eLRn"](Ue);
    },
    "YrJR": function() {
        var e = this;
        var t = e["fhhe"];
        var r = e["hQhs"];
        var n = e["EBEk"];

        if (r["product"] !== "bind") {
            return;
        }

        if (!(typeof this["GQpg"] === "function" ? this["GQpg"]() : true)) {
            return;
        }

        e["doqA"] = 2;

        if (n["FBQm"](Pe)) {
            n["eLRn"](Be);
        } else if (n["FBQm"](qe)) {
            n["eLRn"](Ue);
        } else if (n["FBQm"]([je, He])) {
            t && t["XPbX"]()["BBgB"](function() {
                n["eLRn"](Be);
            });
        }
    },
    "jRJV": function() {
        var a = this;
        var e = a["hQhs"];
        a["powworkerdone"] = false;
        a["pow_starting"] = false;
        a["CVIP"] = new ke({
            "config": e,
            "beforeStart": function() {
                a["pow_starting"] = true;
            },
            "progress": function() {
                a["pow_progress"] = true;
            },
            "done": function(e, t) {
                a["powworkerdone"] = true;

                if (e) {
                    var r = e["join"]();

                    if (v || m) {
                        var n = r["split"](",");

                        for (var i = n["length"] - 1; i >= 0; i--) {
                            n[i] = Math["round"](n[i]);
                        }

                        r = n["join"]();
                    }

                    a["vip_order"] = r;
                    a["ct"] = t;
                } else {
                    a["vip_order"] = "";
                    a["ct"] = "";
                }

                if (a["LoFO"]) {
                    a["MjGm"]();
                }
            }
        });
    },
    "Zgbp": function() {
        var e = this;
        var t = e["hQhs"];

        if (e["CVIP"]) {
            e["powworkerdone"] = false;
            e["pow_starting"] = false;
            e["pow_progress"] = false;
            e["vip_order"] = "";
            e["ct"] = "";
            e["CVIP"]["OpAg"]({
                "vip_content": t["vip_content"],
                "vip_answer": t["vip_answer"],
                "vip_key": t["vip_key"]
            });
        }
    },
    "aakd": function() {
        var e = this;
        var t = e["YDsS"];
        t["AZiJ"](Ye);
    },
    "STir": function() {
        var e = {};
        e["v"] = "9.0.7";
        var t = this["hQhs"] || {};
        e["de"] = Me["deviceorientation"];
        e["te"] = Me["touchEvent"];
        e["me"] = Me["mouseEvent"];
        var r = !g && Ie;
        e["ven"] = r["vendor"] || -1;
        e["ren"] = r["renderer"] || -1;
        e["fp"] = this["enMq"]["WWPU"];
        e["lp"] = this["enMq"]["XEQf"];
        e["em"] = {};
        te([], e["em"]);
        e["tm"] = new UhwE()["QiLd"]();
        e["by"] = this["doqA"];
        return e;
    },
    "ylBh": function(e) {
        var t = this;

        if (!t["hQhs"]["aeskey"] || e) {
            t["hQhs"]["aeskey"] = ce();
        }

        return t["hQhs"]["aeskey"];
    },
    "xUrh": function(e) {
        var t = this;
        var r = new Q()["encrypt"](t["ylBh"](e));

        while (!r || r["length"] !== 256) {
            r = new Q()["encrypt"](t["ylBh"](true));
        }

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


function get_w1(gt, challenge) {
    Config['gt'] = gt;
    Config['challenge'] = challenge;
    return new sOLg(Config)['VktP']();
}


test_gt = '011e260466268eeb81114b4cc8e8a133'
test_challenge = 'ec92a449931f32734a1ae5e9c548ed8b'
const result = get_w1(test_gt, test_challenge)
console.log(result[0]);  // w1
console.log(result[1]);  // aes_key
