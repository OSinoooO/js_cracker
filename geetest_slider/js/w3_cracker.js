function ahok(e) {
    this["urSW"] = e || [];
}

ahok["prototype"] = {
    "snKX": function (e) {
        return this["urSW"][e];
    },
    "vcTC": function () {
        return this["urSW"]["length"];
    },
    "wIvb": function (e, t) {
        var r = this;
        var n;

        if (ne(t)) {
            n = r["urSW"]["slice"](e, t);
        } else {
            n = r["urSW"]["slice"](e);
        }

        return new ahok(n);
    },
    "xESh": function (e) {
        var t = this;
        t["urSW"]["push"](e);
        return t;
    },
    "yRDg": function (e, t) {
        return this["urSW"]["splice"](e, t || 1);
    },
    "AweH": function (e) {
        return this["urSW"]["join"](e);
    },
    "BDre": function (e) {
        var t = this["urSW"]["concat"](e);
        return new ahok(t);
    },
    "mgJc": function (e) {
        var t = this;
        var r = t["urSW"];

        if (r["map"]) {
            return new ahok(r["map"](e));
        }

        var n = [];

        for (var i = 0, o = r["length"]; i < o; i = i + 1) {
            n[i] = e(r[i], i, t);
        }

        return new ahok(n);
    },
    "CMQO": function (e) {
        var t = this;
        var r = t["urSW"];

        if (r["filter"]) {
            return new ahok(r["filter"](e));
        }

        var n = [];

        for (var i = 0, o = r["length"]; i < o; i = i + 1) {
            if (e(r[i], i, t)) {
                n["push"](r[i]);
            }
        }

        return new ahok(n);
    },
    "DyXj": function (e) {
        var t = this;
        var r = t["urSW"];

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
    "EqgR": function (e) {
        var t = this;
        var r = t["urSW"];

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

ahok["tNrQ"] = function (e) {
    if (Array["isArray"]) {
        return Array["isArray"](e);
    }

    return Object["prototype"]["toString"]["call"](e) === "[object Array]";
};

function YqSr(e) {
    this["wHVU"] = e;
}

YqSr["prototype"] = {
    "lyrX": function (e) {
        var t = this;
        t["wHVU"]["push"](e);
        return t;
    },
    "SOQd": function () {
        function e(e) {
            var t = [];
            var r = 0;
            var n, i, o;

            for (var a = 0, s = e["length"] - 1; a < s; a++) {
                n = Math["round"](e[a + 1][0] - e[a][0]);
                i = Math["round"](e[a + 1][1] - e[a][1]);
                o = Math["round"](e[a + 1][2] - e[a][2]);

                if (n == 0 && i == 0 && o == 0) {
                    continue;
                }

                if (n == 0 && i == 0) {
                    r += o;
                } else {
                    t["push"]([n, i, o + r]);
                    r = 0;
                }
            }

            if (r !== 0) {
                t["push"]([n, i, r]);
            }

            return t;
        }

        function r(e) {
            var t = "()*,-./0123456789:?@ABCDEFGHIJKLMNOPQRSTUVWXYZ_abcdefghijklmnopqr";
            var r = t["length"];
            var n = "";
            var i = Math["abs"](e);
            var o = parseInt(i / r);

            if (o >= r) {
                o = r - 1;
            }

            if (o) {
                n = t["charAt"](o);
            }

            i = i % r;
            var a = "";

            if (e < 0) {
                a += "!";
            }

            if (n) {
                a += "$";
            }

            return a + n + t["charAt"](i);
        }

        function n(e) {
            var t = [[1, 0], [2, 0], [1, -1], [1, 1], [0, 1], [0, -1], [3, 0], [2, -1], [2, 1]];
            var r = "stuvwxyz~";

            for (var n = 0, i = t["length"]; n < i; n++) {
                if (e[0] == t[n][0] && e[1] == t[n][1]) {
                    return r[n];
                }
            }

            return 0;
        }

        var t = e(this["wHVU"]);
        var i = [],
            o = [],
            a = [];
        new ahok(t)["mgJc"](function (e) {
            var t = n(e);

            if (!t) {
                i["push"](r(e[0]));
                o["push"](r(e[1]));
            } else {
                o["push"](t);
            }

            a["push"](r(e[2]));
        });
        return i["join"]("") + "!!" + o["join"]("") + "!!" + a["join"]("");
    },
    "nStF": function (e, t, r) {
        if (!t || !r) {
            return e;
        }

        var n = 0;
        var i = 2;
        var o;
        var a = e;
        var s = t[0],
            u = t[2],
            _ = t[4];

        while (o = r["substr"](n, i)) {
            n += i;
            var c = parseInt(o, 16);
            var f = String["fromCharCode"](c);
            var l = (s * c * c + u * c + _) % e["length"];
            a = a["substr"](0, l) + f + a["substr"](l);
        }

        return a;
    },
    "ohis": function (e, t, r) {
        if (!t || !r || e === 0) {
            return e;
        }

        var n = t[1],
            i = t[3],
            o = t[5];
        var a = 50;
        var s = (n * r * r + i * r + o) % a;
        return e + s;
    }
};

function UI() {
}

UI["prototype"] = {
    "fFvD": 260,
    "oWyk": 300,
    "WBvu": 116,
    "Rw_H": 0,
    "pxxR": 200,
    "qcYK": function () {
        var e = this;
        var t = e["uRsI"];
        var r = "/static/" + t["theme"] + "/style" + (t["protocol"] === "https://" ? "_https" : "") + "." + t["theme_version"] + ".css";
        var n = t["debugConfig"];

        if (n && n["skin_path"]) {
            r = r["replace"]("/static", n["skin_path"]);
        }

        return j(t, "css", t["protocol"], t["static_servers"] || t["staticservers"], r);
    },
    "SAHp": function (e, t) {
        var r = this;
        var n = r["$"];
        var i = r["uRsI"];
        n(".slider")["XrLu"](e, t || null);
        return r;
    },
    "wuAi": function () {
        var e = this;
        var t = e["uRsI"];
        var r = e["$"];
        var n = e["urgG"];
        r(".slider_tip")["cgMl"](n["slide"]);
        r(".feedback_tip")["cgMl"](n["feedback"]);
        r(".loading_tip")["cgMl"](n["loading"]);
        r(".refresh")["nGlT"]({
            "href": "javascript:;"
        });

        if (t["product"] === "popup" || t["product"] === "custom") {
        }

        if (t["feedback"]) {
            r(".feedback")["nGlT"]({
                "target": "_blank",
                "href": t["feedback"]
            });
        } else {
            r(".feedback")["JXXj"]();
        }

        if (t["is_next"]) {
            r(".refresh_tip")["cgMl"](n["refresh"]);
            r(".refresh_1")["nGlT"]({
                "href": "javascript:;"
            });
            r(".close_tip")["cgMl"](n["close"]);
            r(".copyright_tip")["cgMl"](n["logo"]);

            if (t["logo"]) {
                r(".copyright")["nGlT"]({
                    "target": "_blank",
                    "href": t["homepage"]
                });
            } else {
                r(".copyright")["JXXj"]();
            }
        } else {
            if (t["logo"]) {
                r(".logo")["nGlT"]({
                    "target": "_blank",
                    "href": t["homepage"]
                });
            } else {
                r(".logo")["JXXj"]();
            }
        }

        if (t["hideClose"]) {
            r(".geetest_close")["kCWO"]();
        }

        if (t["hideRefresh"]) {
            r(".geetest_refresh_1")["kCWO"]();
        }

        if (m) {
            r(".feedback_tip")["kCWO"]();
            r(".refresh_tip")["kCWO"]();
            r(".close_tip")["kCWO"]();
        }

        if (t["link"]) {
            r(".link")["nGlT"]({
                "target": "_blank",
                "href": t["link"]
            });
        }

        e["KXDT"] = new ASlQ(r, n);
        e["WNQc"] = e["qcYK"]();

        if (t["remUnit"] && !isNaN(t["remUnit"])) {
            e["rAeO"]();
        }

        e["gvsP"] = new GZif(function () {
            e["QCjR"](e["xuRW"] || e["Rw_H"]);
        });
        e["XeNX"] = 1;
        e["tlpy"](t["width"]);
        return e;
    },
    "rAeO": function () {
        var e = xe(Qe);
        var t = new cItK("style");
        t["type"] = "text/css";
        t["ecej"](e);
        t["mPPX"](new cItK(f));
    },
    "ZbDH": function () {
        var s = this;
        var u = s["$"];
        var _ = s["uRsI"];

        if (_["product"] === "float") {
            u(".holder")["ZbDH"]("enter", function () {
                s["BNLF"](true);
            })["ZbDH"]("leave", function () {
                s["BNLF"](false);
            });
        } else if (_["product"] === "popup" || _["product"] === "custom") {
            u(".popup_ghost")["ZbDH"]("click", function () {
                s["stya"]();
            });
            u(".popup_close")["ZbDH"]("click", function () {
                s["stya"]();
            });
        }

        if (_["is_next"]) {
            u(".close")["ZbDH"]("click", function () {
                if (_["product"] === "popup" || _["product"] === "custom") {
                    s["stya"]();
                } else {
                    s["MpOZ"]["jVhA"](Le);
                }
            });
            u(".refresh_1")["ZbDH"]("click", function (e) {
                s["rDBZ"]["rLSO"](je);
                e["sSvV"]();
            });
        }

        u(".slider_button")["ZbDH"]("down", function (e) {
            e["sSvV"]();
            s["Hhks"](e, true);
            s["tyHH"]();
        });
        u(".canvas_slice")["ZbDH"]("down", function (e) {
            var t = s["wIvb"]["GaNY"];
            var r = s["wIvb"]["HYgv"];
            var n = t + 60;
            var i = r + 65;
            var o = e["qlhn"]() - e["jxea"]["aQPw"]()["left"];
            var a = e["rPAV"]() - e["jxea"]["aQPw"]()["top"];

            try {
                if (t < o && o < n && r < a && a < i) {
                    s["Hhks"](e, false);
                    s["tyHH"]();

                    if (_["link"]) {
                        u(".link")["NlrW"](["href", "target"]);
                    }
                }
            } catch (e) {
            }
        });
        u(".div_slice")["ZbDH"]("down", function (e) {
            s["Hhks"](e, false);
            s["tyHH"]();
        });
        u(".holder")["ZbDH"]("move", function (e) {
            s["KmVD"](e);
        })["ZbDH"]("up", function (e) {
            s["uOND"](e);
        });
        S && u(".holder")["ZbDH"]("cancel", function (e) {
            s["uOND"](e, true);
        });
        u(".refresh")["ZbDH"]("click", function (e) {
            s["rDBZ"]["rLSO"](je);
            e["sSvV"]();
        });
    },
    "tyHH": function () {
        var t = this;
        t["vKhD"] = new cItK(h);
        t["woza"] = new cItK(window);
        t["vKhD"]["ZbDH"]("up", function (e) {
            t["uOND"](e);
            t["vKhD"]["bDRg"]("up");
        });
        t["woza"]["ZbDH"]("up", function (e) {
            t["uOND"](e);
            t["vKhD"]["bDRg"]("up");
        });
    },
    "mPPX": function (e) {
        var t = this;
        var r = t["uRsI"];
        var n = t["$"];
        t["xyrs"] = cItK["$"](e);

        if (!t["xyrs"]) {
            return Z(J("api_appendTo", t["hJW_"]));
        }

        if (r["product"] === "popup" || r["product"] === "custom") {
            t["vJph"]["mPPX"](new cItK(u));
        } else {
            t["vJph"]["mPPX"](t["xyrs"]);
        }

        if (r["product"] === "float") {
            if (r["sandbox"]) {
                t["AYOH"]();
            } else {
                t["vJph"]["neAS"]();
            }
        }

        if (r["product"] !== "embed") {
            t["yqqZ"]();
        }

        t["uRsI"]["show_voice"] && t["ASaX"]();
        t["BciX"] = ce();
    },
    "hLkW": function () {
        var t = this;
        var r = t["$"];
        var n = r(".wrap")["lLPw"]();
        var i = 0;

        function o() {
            var e = r(".wrap")["lLPw"]();

            if (n === e && n !== 0 || i > 5) {
                t["yqqZ"]();
            } else {
                i = i + 1;
                n = e;
                v(o, 100);
            }
        }

        v(o, 100);
    },
    "yqqZ": function () {
        var e = this;
        var t = e["uRsI"];
        var r = e["$"];
        var n = r(".slider")["lLPw"]();
        var i = r(".slider_track")["lLPw"]();

        if (n < i) {
            r(".slider_tip")["TRhS"]("multi_slide");
        }

        var o = ["ar", "fa", "iw", "ur"];

        if (new ahok(o)["DyXj"](t["lang"] && t["lang"]["split"]("-")[0]) > -1) {
            r(".wrap")["$_sTyyle"]({
                "direction": "rtl"
            });
            r(".slider_tip")["$_sTyyle"]({
                "textAlign": "right"
            });
            r(".slider_track")["$_sTyyle"]({
                "width": "70%"
            });
            r(".result_content")["TRhS"]("right_space");
        }
    },
    "ASaX": function () {
        var t = this;
        var e = t["$"];
        var r = t["urgG"];
        var n = t["rDBZ"];
        e(".small")["nGlT"]({
            "tabIndex": "-1"
        })["kWnI"]()["$_sTyyle"]({
            "outline": "none"
        });
        e(".voice_tip")["cgMl"](r["voice"]);
        e(".close")["nGlT"]({
            "tabIndex": "-1"
        });
        e(".refresh_1")["nGlT"]({
            "tabIndex": "-1"
        });
        e(".feedback")["nGlT"]({
            "tabIndex": "-1"
        });
        e(".voice")["nGlT"]({
            "tabIndex": "0",
            "aria-label": r["voice"],
            "role": "button"
        })["$_sTyyle"]({
            "display": "inline-block"
        })["kWnI"]();
        e(".voice")["ZbDH"]("keydown", function (e) {
            if (e["akzS"]["keyCode"] === 13) {
                n["rLSO"](He);
                t["hJW_"]["kTYY"]();
            }
        });
        e(".voice")["ZbDH"]("click", function () {
            n["rLSO"](He);
            t["hJW_"]["kTYY"]();
        });
    },
    "msUC": function (e) {
        var t = this;

        if (t["uRsI"]["product"] !== "popup" || t["uRsI"]["product"] === "custom") {
            return t;
        }

        t["Ccrd"] = cItK["$"](e);

        if (!t["Ccrd"]) {
            return Z(J("api_bindOn", t["hJW_"]));
        }

        var r = t["Ccrd"]["fOCJ"](true);
        r["QwLt"](t["Ccrd"]);
        t["Ccrd"]["JXXj"]();
        r["ZbDH"]("click", function (e) {
            t["DGFq"]();
            e["sSvV"]();
        });
        return t;
    },
    "KLrE": function () {
        var e = this;

        if (e["uRsI"]["product"] !== "popup" && e["uRsI"]["product"] !== "custom") {
            return e;
        }

        e["DGFq"]();
        return e;
    },
    "JXXj": function () {
        var e = this;

        if (e["uRsI"]["product"] !== "popup" && e["uRsI"]["product"] !== "custom") {
            return e;
        }

        e["stya"]();
        return e;
    },
    "DGFq": function () {
        var e = this;

        if (e["uRsI"]["product"] === "custom") {
            e["cOlE"]();
        }

        e["vJph"]["KLrE"]();
        v(function () {
            e["vJph"]["LrvT"](1);
        }, 10);
    },
    "stya": function () {
        var t = this;
        t["vJph"]["LrvT"](0);
        return new te(function (e) {
            v(function () {
                t["vJph"]["JXXj"]();
                t["MpOZ"]["jVhA"](Le);
                e();
            }, 0);
        });
    },
    "EWSM": function () {
        var e = this;
        var t = e["urgG"];
        var r = e["$"];
        r(".popup_tip")["cgMl"](t["popup_finish"]);
        return new te(function (e) {
            v(e, 1e3);
        });
    },
    "IQGV": function (e, t, r) {
        var n = this;
        var i = n["rDBZ"];

        if (i["snKX"]() !== Ae) {
            return;
        }

        i["rLSO"](Re);
        e["sSvV"]();
        n["FvXJ"] = e["type"] == "pointerdown";
        var o = n["$"](".slider_button")["aQPw"]();
        var a = n["$"](".canvas_slice")["aQPw"]();
        n["GsXZ"] = ce();
        var s = n["XeNX"];
        n["HFcC"] = e["qlhn"]() / s;
        n["IbDP"] = e["rPAV"]() / s;
        var u;

        var _;

        if (t) {
            u = o["top"];
            _ = o["left"];
        } else {
            u = a["top"] + n["wIvb"]["HYgv"];
            _ = a["left"];
        }

        n["JPiA"] = new YqSr([Math["round"](_ / s - n["HFcC"]), Math["round"](u / s - n["IbDP"]), 0])["lyrX"]([0, 0, 0]);
        n["xuRW"] = n["Rw_H"];
        n["gvsP"]["iiOB"]();
        n["lastPoint"] = {
            "x": 0,
            "y": 0
        };

        if (ae(r)) {
            r();
        }

        return n;
    },
    "KmVD": function (e) {
        var t = this;
        var r = t["rDBZ"];

        if (r["snKX"]() !== Re) {
            return;
        }

        if (t["FvXJ"] && e["type"] != "pointermove") {
            return;
        }

        e["sSvV"]();
        var n = t["XeNX"];
        var i = e["qlhn"]() / n - t["HFcC"];
        var o = t["IbDP"] - e["rPAV"]() / n;
        t["xuRW"] = i;
        t["JPiA"]["lyrX"]([Math["round"](i), Math["round"](o), ce() - t["GsXZ"]]);

        if (t["lastPoint"]) {
            t["lastPoint"]["x"] = i;
            t["lastPoint"]["y"] = o;
        }

        if (i >= t["pxxR"]) {
            t["uOND"](e);
        }
    },
    "uOND": function (e, t) {
        var r = this;
        var n = r["hJW_"];
        var i = r["rDBZ"];
        var o = r["uRsI"];
        var a = r["$"];

        try {
            if (i["snKX"]() !== Re) {
                return;
            }

            if (r["FvXJ"] && e["type"] != "pointerup") {
                return;
            }

            v(function () {
                if (o["link"]) {
                    a(".link")["nGlT"]({
                        "target": "_blank",
                        "href": o["link"]
                    });
                }
            }, 0);
            e["sSvV"]();
            i["rLSO"](Oe);
            var s = r["XeNX"];
            var u = t ? r["lastPoint"]["x"] : e["qlhn"]() / s - r["HFcC"];

            var _ = t ? r["lastPoint"]["y"] : r["IbDP"] - e["rPAV"]() / s;

            r["MVjA"] = ce() - r["GsXZ"];
            r["JPiA"]["lyrX"]([Math["round"](u), Math["round"](_), r["MVjA"]]);
            var c = parseInt(u);
            var f = r["JPiA"]["nStF"](r["JPiA"]["SOQd"](), r["uRsI"]["c"], r["uRsI"]["s"]);
            n["ntwj"](c, f, r["MVjA"]);
            r["gvsP"]["ecgX"]();
        } catch (e) {
            n["vUEY"](e);
        }

        return r;
    },
    "cKMk": function () {
        var t = this;
        var r = t["$"];
        var n = t["uRsI"];
        var i = t["rDBZ"];
        r(".loading")["KLrE"]()["LrvT"](1);
        r(".fullbg")["LrvT"](1)["KLrE"]();
        r(".slice")["LrvT"](1);
        H(n, "/refresh.php", {
            "gt": n["gt"],
            "challenge": n["challenge"],
            "lang": n["lang"] || "zh-cn",
            "type": n["type"]
        })["CT_r"](function (e) {
            if (e["status"] == Me) {
                return Z(Y(e, t["hJW_"], "/refresh.php"));
            }

            t["PLth"]();
            t["QCjR"](t["Rw_H"]);
            n["LdXn"](he(e));

            if (n["link"]) {
                r(".link")["nGlT"]({
                    "target": "_blank",
                    "href": n["link"]
                });
            }

            i["rLSO"](Te);
        }, function () {
            return Z(J("url_refresh", t["hJW_"]));
        });
    },
    "bgVH": function () {
        var e = this;
        var t = e["$"];
        var r = e["uRsI"];

        if (!r["mobile"]) {
            t(".slice")["LrvT"](.8);
        }

        return e;
    },
    "alsZ": function () {
        var e = this;
        var t = e["$"];
        t(".fullbg")["LrvT"](0);
        v(function () {
            t(".fullbg")["JXXj"]();
        }, 200);
    },
    "ThpT": function () {
        var e = this;
        e["JVNE"](Me, true);
    },
    "UgUC": function () {
        var e = this;
        e["JVNE"](Be);
        return new te(function (e) {
            v(e, 1500);
        });
    },
    "VWcx": function () {
        var e = this;
        e["JVNE"](De);
        return new te(function (e) {
            v(e, 1500);
        });
    },
    "QCjR": function (e, t) {
        var r = this;
        var n = r["$"];
        var i = t ? -20 : r["Rw_H"];

        if (e < i) {
            e = r["Rw_H"];
        } else if (e > r["pxxR"]) {
            e = r["pxxR"];
        }

        if (t) {
            var o = e / 20 + 1;
            n(".slider_button")["$_sTyyle"]({
                "opacity": o
            });
        }

        if ("webkitTransform" in h["body"]["style"] || "transform" in h["body"]["style"]) {
            if (E || /EzvizStudio/["test"](g["userAgent"])) {
                var a = "translate(" + e * r["XeNX"] + "px, -10px)";
            } else {
                var a = "translate(" + e * r["XeNX"] + "px, 0px)";
            }

            n(".slider_button")["$_sTyyle"]({
                "transform": a,
                "webkitTransform": a
            });
        } else {
            n(".slider_button")["$_sTyyle"]({
                "left": e * r["XeNX"] + "px"
            });
        }

        var s = n(".slider_button")["lLPw"]() * .9;
        n(".progress_left") && n(".progress_left")["$_sTyyle"]({
            "width": e * r["XeNX"] + s + "px",
            "opacity": 1
        });

        if (typeof r["uRsI"]["so"] !== "undefined" && r["uRsI"]["so"] !== 0 && r["JPiA"]) {
            e = r["JPiA"]["ohis"](parseInt(e), r["uRsI"]["c"], r["uRsI"]["so"]);
        }

        if (r["wIvb"]) {
            r["wIvb"]["KmVD"](e);
        }
    },
    "kTYY": function () {
        var e = this;
        var t = e["$"];
        t(".holder")["kCWO"]();
    }
}

function get_w3(t, c, s) {
    const JPiA = new YqSr(t);
    const trajectory_encrypted = JPiA.nStF(JPiA.SOQd(), c, s)
    console.log(trajectory_encrypted);

}


const trajectory = [[-26, -38, 0], [0, 0, 0], [2, 0, 49], [3, 0, 53], [4, 0, 55], [5, 0, 57], [5, -1, 59], [6, -1, 59], [7, -1, 61], [8, -1, 64], [10, -1, 65], [11, -1, 68], [12, -1, 68], [13, -1, 70], [14, -3, 71], [15, -3, 71], [16, -3, 74], [18, -3, 74], [19, -3, 75], [20, -3, 76], [21, -3, 77], [22, -3, 78], [23, -3, 79], [24, -3, 80], [25, -3, 82], [27, -3, 82], [28, -3, 85], [29, -3, 85], [30, -3, 86], [31, -3, 87], [32, -3, 88], [33, -3, 89], [35, -3, 90], [36, -3, 91], [37, -3, 92], [38, -3, 94], [39, -3, 95], [40, -3, 96], [41, -3, 97], [43, -3, 100], [44, -3, 100], [45, -3, 102], [46, -3, 103], [47, -3, 104], [48, -3, 106], [49, -3, 108], [51, -3, 110], [52, -3, 112], [53, -3, 114], [54, -3, 117], [55, -3, 119], [56, -3, 122], [57, -3, 125], [58, -3, 130], [60, -3, 135], [61, -3, 141], [62, -3, 151], [62, -3, 302]];
const c = [12, 58, 98, 36, 43, 95, 62, 15, 12];
const s = '445f307e';
get_w3(trajectory, c, s);