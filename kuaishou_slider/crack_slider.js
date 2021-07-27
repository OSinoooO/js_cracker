function v(t) {
    var n = {};
    n[s("0x1e")] = s("0x1f"),
    n[s("0x20")] = function(t, n, e, r) {
        return t(n, e, r)
    }
    ;
    var e = n[s("0x1e")][s("0xd")]("|")
      , r = 0;
    while (1) {
        switch (e[r++]) {
        case "0":
            var c = decodeURIComponent(l)[s("0xd")](",");
            continue;
        case "1":
            var o = a.a[s("0x21")](f, i.a[s("0x22")](c[0]), n[s("0x20")](h, {}, u, i.a[s("0x22")](c[1])));
            continue;
        case "2":
            return o[s("0x23")]();
        case "3":
            var u = ["i", "v"][s("0x24")]("");
            continue;
        case "4":
            var f = x.a[s("0x25")](t);
            continue
        }
        break
    }
}