function get_sign() {}

var e = {
    157: function(e, t, n) {
        var i, r, s;
        e.exports = (s = n(148),
        r = (i = s).lib.WordArray,
        i.enc.Base64 = {
            stringify: function(e) {
                var t = e.words
                  , n = e.sigBytes
                  , i = this._map;
                e.clamp();
                for (var r = [], s = 0; s < n; s += 3)
                    for (var o = (t[s >>> 2] >>> 24 - s % 4 * 8 & 255) << 16 | (t[s + 1 >>> 2] >>> 24 - (s + 1) % 4 * 8 & 255) << 8 | t[s + 2 >>> 2] >>> 24 - (s + 2) % 4 * 8 & 255, a = 0; a < 4 && s + .75 * a < n; a++)
                        r.push(i.charAt(o >>> 6 * (3 - a) & 63));
                var l = i.charAt(64);
                if (l)
                    for (; r.length % 4; )
                        r.push(l);
                return r.join("")
            },
            parse: function(e) {
                var t = e.length
                  , n = this._map
                  , i = this._reverseMap;
                if (!i) {
                    i = this._reverseMap = [];
                    for (var s = 0; s < n.length; s++)
                        i[n.charCodeAt(s)] = s
                }
                var o = n.charAt(64);
                if (o) {
                    var a = e.indexOf(o);
                    -1 !== a && (t = a)
                }
                return function(e, t, n) {
                    for (var i = [], s = 0, o = 0; o < t; o++)
                        if (o % 4) {
                            var a = n[e.charCodeAt(o - 1)] << o % 4 * 2
                              , l = n[e.charCodeAt(o)] >>> 6 - o % 4 * 2;
                            i[s >>> 2] |= (a | l) << 24 - s % 4 * 8,
                            s++
                        }
                    return r.create(i, s)
                }(e, t, i)
            },
            _map: "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/="
        },
        s.enc.Base64)
    },
    156: function (e, t, n) {
        var i;
        e.exports = (i = n(148),
            function (e) {
                var t = i
                    , n = t.lib
                    , r = n.WordArray
                    , s = n.Hasher
                    , o = t.algo
                    , a = []
                    , l = [];
                !function () {
                    function t(t) {
                        for (var n = e.sqrt(t), i = 2; i <= n; i++)
                            if (!(t % i))
                                return !1;
                        return !0
                    }

                    function n(e) {
                        return 4294967296 * (e - (0 | e)) | 0
                    }

                    for (var i = 2, r = 0; r < 64;)
                        t(i) && (r < 8 && (a[r] = n(e.pow(i, .5))),
                            l[r] = n(e.pow(i, 1 / 3)),
                            r++),
                            i++
                }();
                var c = []
                    , u = o.SHA256 = s.extend({
                    _doReset: function () {
                        this._hash = new r.init(a.slice(0))
                    },
                    _doProcessBlock: function (e, t) {
                        for (var n = this._hash.words, i = n[0], r = n[1], s = n[2], o = n[3], a = n[4], u = n[5], d = n[6], h = n[7], p = 0; p < 64; p++) {
                            if (p < 16)
                                c[p] = 0 | e[t + p];
                            else {
                                var f = c[p - 15]
                                    , v = (f << 25 | f >>> 7) ^ (f << 14 | f >>> 18) ^ f >>> 3
                                    , m = c[p - 2]
                                    , g = (m << 15 | m >>> 17) ^ (m << 13 | m >>> 19) ^ m >>> 10;
                                c[p] = v + c[p - 7] + g + c[p - 16]
                            }
                            var b = i & r ^ i & s ^ r & s
                                , y = (i << 30 | i >>> 2) ^ (i << 19 | i >>> 13) ^ (i << 10 | i >>> 22)
                                ,
                                w = h + ((a << 26 | a >>> 6) ^ (a << 21 | a >>> 11) ^ (a << 7 | a >>> 25)) + (a & u ^ ~a & d) + l[p] + c[p];
                            h = d,
                                d = u,
                                u = a,
                                a = o + w | 0,
                                o = s,
                                s = r,
                                r = i,
                                i = w + (y + b) | 0
                        }
                        n[0] = n[0] + i | 0,
                            n[1] = n[1] + r | 0,
                            n[2] = n[2] + s | 0,
                            n[3] = n[3] + o | 0,
                            n[4] = n[4] + a | 0,
                            n[5] = n[5] + u | 0,
                            n[6] = n[6] + d | 0,
                            n[7] = n[7] + h | 0
                    },
                    _doFinalize: function () {
                        var t = this._data
                            , n = t.words
                            , i = 8 * this._nDataBytes
                            , r = 8 * t.sigBytes;
                        return n[r >>> 5] |= 128 << 24 - r % 32,
                            n[14 + (r + 64 >>> 9 << 4)] = e.floor(i / 4294967296),
                            n[15 + (r + 64 >>> 9 << 4)] = i,
                            t.sigBytes = 4 * n.length,
                            this._process(),
                            this._hash
                    },
                    clone: function () {
                        var e = s.clone.call(this);
                        return e._hash = this._hash.clone(),
                            e
                    }
                });
                t.SHA256 = s._createHelper(u),
                    t.HmacSHA256 = s._createHmacHelper(u)
            }(Math),
            i.SHA256)
    },
    148: function(e, t, n) {
        var i;
        e.exports = (i = i || function(e, t) {
            var n = Object.create || function() {
                function e() {}
                return function(t) {
                    var n;
                    return e.prototype = t,
                    n = new e,
                    e.prototype = null,
                    n
                }
            }()
              , i = {}
              , r = i.lib = {}
              , s = r.Base = {
                extend: function(e) {
                    var t = n(this);
                    return e && t.mixIn(e),
                    t.hasOwnProperty("init") && this.init !== t.init || (t.init = function() {
                        t.$super.init.apply(this, arguments)
                    }
                    ),
                    t.init.prototype = t,
                    t.$super = this,
                    t
                },
                create: function() {
                    var e = this.extend();
                    return e.init.apply(e, arguments),
                    e
                },
                init: function() {},
                mixIn: function(e) {
                    for (var t in e)
                        e.hasOwnProperty(t) && (this[t] = e[t]);
                    e.hasOwnProperty("toString") && (this.toString = e.toString)
                },
                clone: function() {
                    return this.init.prototype.extend(this)
                }
            }
              , o = r.WordArray = s.extend({
                init: function(e, t) {
                    e = this.words = e || [],
                    this.sigBytes = null != t ? t : 4 * e.length
                },
                toString: function(e) {
                    return (e || l).stringify(this)
                },
                concat: function(e) {
                    var t = this.words
                      , n = e.words
                      , i = this.sigBytes
                      , r = e.sigBytes;
                    if (this.clamp(),
                    i % 4)
                        for (var s = 0; s < r; s++) {
                            var o = n[s >>> 2] >>> 24 - s % 4 * 8 & 255;
                            t[i + s >>> 2] |= o << 24 - (i + s) % 4 * 8
                        }
                    else
                        for (s = 0; s < r; s += 4)
                            t[i + s >>> 2] = n[s >>> 2];
                    return this.sigBytes += r,
                    this
                },
                clamp: function() {
                    var t = this.words
                      , n = this.sigBytes;
                    t[n >>> 2] &= 4294967295 << 32 - n % 4 * 8,
                    t.length = e.ceil(n / 4)
                },
                clone: function() {
                    var e = s.clone.call(this);
                    return e.words = this.words.slice(0),
                    e
                },
                random: function(t) {
                    for (var n, i = [], r = function(t) {
                        t = t;
                        var n = 987654321
                          , i = 4294967295;
                        return function() {
                            var r = ((n = 36969 * (65535 & n) + (n >> 16) & i) << 16) + (t = 18e3 * (65535 & t) + (t >> 16) & i) & i;
                            return r /= 4294967296,
                            (r += .5) * (e.random() > .5 ? 1 : -1)
                        }
                    }, s = 0; s < t; s += 4) {
                        var a = r(4294967296 * (n || e.random()));
                        n = 987654071 * a(),
                        i.push(4294967296 * a() | 0)
                    }
                    return new o.init(i,t)
                }
            })
              , a = i.enc = {}
              , l = a.Hex = {
                stringify: function(e) {
                    for (var t = e.words, n = e.sigBytes, i = [], r = 0; r < n; r++) {
                        var s = t[r >>> 2] >>> 24 - r % 4 * 8 & 255;
                        i.push((s >>> 4).toString(16)),
                        i.push((15 & s).toString(16))
                    }
                    return i.join("")
                },
                parse: function(e) {
                    for (var t = e.length, n = [], i = 0; i < t; i += 2)
                        n[i >>> 3] |= parseInt(e.substr(i, 2), 16) << 24 - i % 8 * 4;
                    return new o.init(n,t / 2)
                }
            }
              , c = a.Latin1 = {
                stringify: function(e) {
                    for (var t = e.words, n = e.sigBytes, i = [], r = 0; r < n; r++) {
                        var s = t[r >>> 2] >>> 24 - r % 4 * 8 & 255;
                        i.push(String.fromCharCode(s))
                    }
                    return i.join("")
                },
                parse: function(e) {
                    for (var t = e.length, n = [], i = 0; i < t; i++)
                        n[i >>> 2] |= (255 & e.charCodeAt(i)) << 24 - i % 4 * 8;
                    return new o.init(n,t)
                }
            }
              , u = a.Utf8 = {
                stringify: function(e) {
                    try {
                        return decodeURIComponent(escape(c.stringify(e)))
                    } catch (e) {
                        throw new Error("Malformed UTF-8 data")
                    }
                },
                parse: function(e) {
                    return c.parse(unescape(encodeURIComponent(e)))
                }
            }
              , d = r.BufferedBlockAlgorithm = s.extend({
                reset: function() {
                    this._data = new o.init,
                    this._nDataBytes = 0
                },
                _append: function(e) {
                    "string" == typeof e && (e = u.parse(e)),
                    this._data.concat(e),
                    this._nDataBytes += e.sigBytes
                },
                _process: function(t) {
                    var n = this._data
                      , i = n.words
                      , r = n.sigBytes
                      , s = this.blockSize
                      , a = r / (4 * s)
                      , l = (a = t ? e.ceil(a) : e.max((0 | a) - this._minBufferSize, 0)) * s
                      , c = e.min(4 * l, r);
                    if (l) {
                        for (var u = 0; u < l; u += s)
                            this._doProcessBlock(i, u);
                        var d = i.splice(0, l);
                        n.sigBytes -= c
                    }
                    return new o.init(d,c)
                },
                clone: function() {
                    var e = s.clone.call(this);
                    return e._data = this._data.clone(),
                    e
                },
                _minBufferSize: 0
            })
              , h = (r.Hasher = d.extend({
                cfg: s.extend(),
                init: function(e) {
                    this.cfg = this.cfg.extend(e),
                    this.reset()
                },
                reset: function() {
                    d.reset.call(this),
                    this._doReset()
                },
                update: function(e) {
                    return this._append(e),
                    this._process(),
                    this
                },
                finalize: function(e) {
                    return e && this._append(e),
                    this._doFinalize()
                },
                blockSize: 16,
                _createHelper: function(e) {
                    return function(t, n) {
                        return new e.init(n).finalize(t)
                    }
                },
                _createHmacHelper: function(e) {
                    return function(t, n) {
                        return new h.HMAC.init(e,n).finalize(t)
                    }
                }
            }),
            i.algo = {});
            return i
        }(Math),
        i)
    }
}

!function (e) {
    var n = {}
        , a = {
        13: 0
    }
        , o = {
        13: 0
    }
        , c = [];

    function d(t) {
        if (n[t])
            return n[t].exports;
        var r = n[t] = {
            i: t,
            l: !1,
            exports: {}
        };
        return e[t].call(r.exports, r, r.exports, d),
            r.l = !0,
            r.exports
    }

    d.o = function(e, t) {
        return Object.prototype.hasOwnProperty.call(e, t)
    }

    d.d = function (e, t, r) {
        d.o(e, t) || Object.defineProperty(e, t, {
            enumerable: !0,
            get: r
        })
    }

    d.n = function (e) {
        var t = e && e.__esModule ? function () {
                return e.default
            }
            : function () {
                return e
            }
        ;
        return d.d(t, "a", t),
            t
    }

    function _get_sign() {
        var n = d;
        var a = n(156)
          , i = n.n(a)
          , c = n(157)
          , s = n.n(c)

        var t, n, r = (new Date).getTime(), o = "timestamp=".concat(r, "&secret=").concat("aHVheWluZ19zZWNyZXRfYXBp"),
            a = (t = o,
            n = i()(t),
            encodeURIComponent(s.a.stringify(n)));
        return [r, a]
    }

    get_sign = _get_sign
}(e);


console.log(get_sign())