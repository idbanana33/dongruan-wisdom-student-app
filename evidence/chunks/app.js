(function (e) {
  function n(n) {
    for (var a, o, r = n[0], d = n[1], c = n[2], s = 0, p = []; s < r.length; s++)
      ((o = r[s]),
        Object.prototype.hasOwnProperty.call(i, o) && i[o] && p.push(i[o][0]),
        (i[o] = 0));
    for (a in d) Object.prototype.hasOwnProperty.call(d, a) && (e[a] = d[a]);
    m && m(n);
    while (p.length) p.shift()();
    return (l.push.apply(l, c || []), t());
  }
  function t() {
    for (var e, n = 0; n < l.length; n++) {
      for (var t = l[n], a = !0, o = 1; o < t.length; o++) {
        var r = t[o];
        0 !== i[r] && (a = !1);
      }
      a && (l.splice(n--, 1), (e = d((d.s = t[0]))));
    }
    return e;
  }
  var a = {},
    o = { 2: 0 },
    i = { 2: 0 },
    l = [];
  function r(e) {
    return d.p + "js/" + ({ 1: "chunk-common" }[e] || e) + ".js";
  }
  function d(n) {
    if (a[n]) return a[n].exports;
    var t = (a[n] = { i: n, l: !1, exports: {} });
    return (e[n].call(t.exports, t, t.exports, d), (t.l = !0), t.exports);
  }
  ((d.e = function (e) {
    var n = [],
      t = { 1: 1, 3: 1, 4: 1, 5: 1 };
    o[e]
      ? n.push(o[e])
      : 0 !== o[e] &&
        t[e] &&
        n.push(
          (o[e] = new Promise(function (n, t) {
            for (
              var a =
                  "css/" +
                  ({ 1: "chunk-common" }[e] || e) +
                  "." +
                  {
                    1: "305c656c",
                    3: "e6b317c5",
                    4: "0a33d270",
                    5: "c80b1d1c",
                    6: "31d6cfe0",
                    7: "31d6cfe0",
                    8: "31d6cfe0",
                    9: "31d6cfe0",
                    10: "31d6cfe0",
                    11: "31d6cfe0",
                    12: "31d6cfe0",
                    13: "31d6cfe0",
                    14: "31d6cfe0",
                    15: "31d6cfe0",
                    16: "31d6cfe0",
                    17: "31d6cfe0",
                    18: "31d6cfe0",
                    19: "31d6cfe0",
                    20: "31d6cfe0",
                    21: "31d6cfe0",
                    22: "31d6cfe0",
                    23: "31d6cfe0",
                    24: "31d6cfe0",
                    25: "31d6cfe0",
                    26: "31d6cfe0",
                    27: "31d6cfe0",
                    28: "31d6cfe0",
                    29: "31d6cfe0",
                    30: "31d6cfe0",
                    31: "31d6cfe0",
                    32: "31d6cfe0",
                    33: "31d6cfe0",
                    34: "31d6cfe0",
                    35: "31d6cfe0",
                    36: "31d6cfe0",
                    37: "31d6cfe0",
                    38: "31d6cfe0",
                    39: "31d6cfe0",
                    40: "31d6cfe0",
                    41: "31d6cfe0",
                    42: "31d6cfe0",
                    43: "31d6cfe0",
                    44: "31d6cfe0",
                    45: "31d6cfe0",
                    46: "31d6cfe0",
                    47: "31d6cfe0",
                    48: "31d6cfe0",
                    49: "31d6cfe0",
                    50: "31d6cfe0",
                    51: "31d6cfe0",
                    52: "31d6cfe0",
                    53: "31d6cfe0",
                    54: "31d6cfe0",
                    55: "31d6cfe0",
                    56: "31d6cfe0",
                    57: "31d6cfe0",
                    58: "31d6cfe0",
                    59: "31d6cfe0",
                    60: "31d6cfe0",
                    61: "31d6cfe0",
                    62: "31d6cfe0",
                    63: "31d6cfe0",
                    64: "31d6cfe0",
                    65: "31d6cfe0",
                    66: "31d6cfe0",
                    67: "31d6cfe0",
                    68: "31d6cfe0",
                    69: "31d6cfe0",
                    70: "31d6cfe0",
                    71: "31d6cfe0",
                    72: "31d6cfe0",
                    73: "31d6cfe0",
                    74: "31d6cfe0",
                    75: "31d6cfe0",
                    76: "31d6cfe0",
                    77: "31d6cfe0",
                    78: "31d6cfe0",
                    79: "31d6cfe0",
                    80: "31d6cfe0",
                    81: "31d6cfe0",
                    82: "31d6cfe0",
                    83: "31d6cfe0",
                    84: "31d6cfe0",
                    85: "31d6cfe0",
                    86: "31d6cfe0",
                    87: "31d6cfe0",
                    88: "31d6cfe0",
                    89: "31d6cfe0",
                    90: "31d6cfe0",
                    91: "31d6cfe0",
                    92: "31d6cfe0",
                    93: "31d6cfe0",
                    94: "31d6cfe0",
                    95: "31d6cfe0",
                    96: "31d6cfe0",
                    97: "31d6cfe0",
                    98: "31d6cfe0",
                    99: "31d6cfe0",
                    100: "31d6cfe0",
                    101: "31d6cfe0",
                    102: "31d6cfe0",
                    103: "31d6cfe0",
                    104: "31d6cfe0",
                    105: "31d6cfe0",
                    106: "31d6cfe0",
                    107: "31d6cfe0",
                    108: "31d6cfe0",
                    109: "31d6cfe0",
                    110: "31d6cfe0",
                    111: "31d6cfe0",
                    112: "31d6cfe0",
                    113: "31d6cfe0",
                    114: "31d6cfe0",
                    115: "31d6cfe0",
                    116: "31d6cfe0",
                    117: "31d6cfe0",
                    118: "31d6cfe0",
                    119: "31d6cfe0",
                    120: "31d6cfe0",
                    121: "31d6cfe0",
                    122: "31d6cfe0",
                    123: "31d6cfe0",
                    124: "31d6cfe0",
                    125: "31d6cfe0",
                  }[e] +
                  ".css",
                i = d.p + a,
                l = document.getElementsByTagName("link"),
                r = 0;
              r < l.length;
              r++
            ) {
              var c = l[r],
                s = c.getAttribute("data-href") || c.getAttribute("href");
              if ("stylesheet" === c.rel && (s === a || s === i)) return n();
            }
            var p = document.getElementsByTagName("style");
            for (r = 0; r < p.length; r++) {
              ((c = p[r]), (s = c.getAttribute("data-href")));
              if (s === a || s === i) return n();
            }
            var m = document.createElement("link");
            ((m.rel = "stylesheet"),
              (m.type = "text/css"),
              (m.onload = n),
              (m.onerror = function (n) {
                var a = (n && n.target && n.target.src) || i,
                  l = new Error("Loading CSS chunk " + e + " failed.\n(" + a + ")");
                ((l.code = "CSS_CHUNK_LOAD_FAILED"),
                  (l.request = a),
                  delete o[e],
                  m.parentNode.removeChild(m),
                  t(l));
              }),
              (m.href = i));
            var h = document.getElementsByTagName("head")[0];
            h.appendChild(m);
          }).then(function () {
            o[e] = 0;
          })),
        );
    var a = i[e];
    if (0 !== a)
      if (a) n.push(a[2]);
      else {
        var l = new Promise(function (n, t) {
          a = i[e] = [n, t];
        });
        n.push((a[2] = l));
        var c,
          s = document.createElement("script");
        ((s.charset = "utf-8"),
          (s.timeout = 120),
          d.nc && s.setAttribute("nonce", d.nc),
          (s.src = r(e)));
        var p = new Error();
        c = function (n) {
          ((s.onerror = s.onload = null), clearTimeout(m));
          var t = i[e];
          if (0 !== t) {
            if (t) {
              var a = n && ("load" === n.type ? "missing" : n.type),
                o = n && n.target && n.target.src;
              ((p.message = "Loading chunk " + e + " failed.\n(" + a + ": " + o + ")"),
                (p.name = "ChunkLoadError"),
                (p.type = a),
                (p.request = o),
                t[1](p));
            }
            i[e] = void 0;
          }
        };
        var m = setTimeout(function () {
          c({ type: "timeout", target: s });
        }, 12e4);
        ((s.onerror = s.onload = c), document.head.appendChild(s));
      }
    return Promise.all(n);
  }),
    (d.m = e),
    (d.c = a),
    (d.d = function (e, n, t) {
      d.o(e, n) || Object.defineProperty(e, n, { enumerable: !0, get: t });
    }),
    (d.r = function (e) {
      ("undefined" !== typeof Symbol &&
        Symbol.toStringTag &&
        Object.defineProperty(e, Symbol.toStringTag, { value: "Module" }),
        Object.defineProperty(e, "__esModule", { value: !0 }));
    }),
    (d.t = function (e, n) {
      if ((1 & n && (e = d(e)), 8 & n)) return e;
      if (4 & n && "object" === typeof e && e && e.__esModule) return e;
      var t = Object.create(null);
      if (
        (d.r(t),
        Object.defineProperty(t, "default", { enumerable: !0, value: e }),
        2 & n && "string" != typeof e)
      )
        for (var a in e)
          d.d(
            t,
            a,
            function (n) {
              return e[n];
            }.bind(null, a),
          );
      return t;
    }),
    (d.n = function (e) {
      var n =
        e && e.__esModule
          ? function () {
              return e["default"];
            }
          : function () {
              return e;
            };
      return (d.d(n, "a", n), n);
    }),
    (d.o = function (e, n) {
      return Object.prototype.hasOwnProperty.call(e, n);
    }),
    (d.p = ""),
    (d.oe = function (e) {
      throw (console.error(e), e);
    }));
  var c = (window["webpackJsonp"] = window["webpackJsonp"] || []),
    s = c.push.bind(c);
  ((c.push = n), (c = c.slice()));
  for (var p = 0; p < c.length; p++) n(c[p]);
  var m = s;
  (l.push([1, 0]), t());
})({
  "0047": function (e, n, t) {},
  "034f": function (e, n, t) {
    "use strict";
    t("ed82");
  },
  1: function (e, n, t) {
    e.exports = t("2f39");
  },
  "2a19a": function (e, n, t) {},
  "2f39": function (e, n, t) {
    "use strict";
    t.r(n);
    (t("e6cf"), t("5319"), t("9f29"), t("7d6e"), t("e54f"), t("985d"), t("0047"), t("2a19a"));
    var a = t("2b0e"),
      o = t("bf69"),
      i = t("42d2"),
      l = t("b05d"),
      r = t("2a19"),
      d = t("f508"),
      c = t("436b"),
      s = t("7518");
    a["a"].use(l["a"], {
      config: { notify: { position: "top", timeout: 3e3 } },
      lang: o["a"],
      iconSet: i["a"],
      plugins: { Notify: r["a"], Loading: d["a"], Dialog: c["a"], BottomSheet: s["a"] },
    });
    var p = function () {
        var e = this,
          n = e.$createElement,
          t = e._self._c || n;
        return t("div", { staticStyle: { height: "100%" }, attrs: { id: "q-app" } }, [
          t(
            "div",
            { staticStyle: { height: "100%" } },
            [e.RouterState ? t("router-view") : e._e()],
            1,
          ),
        ]);
      },
      m = [],
      h = t("ad56");
    ((a["a"].prototype.$showSuccessNotify = function (e) {
      return this.$q.notify({ color: "green-4", icon: "cloud_done", message: e });
    }),
      (a["a"].prototype.$showErrorNotify = function (e) {
        return this.$q.notify({ color: "red-5", icon: "error", message: e });
      }),
      (a["a"].prototype.$showConfirmNotify = function (e, n, t) {
        return this.$q.notify({
          message: e,
          color: t || "negative",
          position: "center",
          actions: n,
        });
      }),
      (a["a"].prototype.$addStorageEvent = function (e, n, t, a) {
        if (1 === e) {
          const e = document.createEvent("StorageEvent"),
            o = {
              setItem: function (n, t) {
                (localStorage.setItem(n, t),
                  e.initStorageEvent("setItem", !1, !1, n, null, t, null, null),
                  window.dispatchEvent(e));
              },
              removeItem: function (n) {
                (localStorage.removeItem(n),
                  e.initStorageEvent("setItem", !1, !1, n, null, null, null, null),
                  window.dispatchEvent(e));
              },
            };
          return a ? o.removeItem(n) : o.setItem(n, t);
        }
        {
          const e = document.createEvent("StorageEvent"),
            o = {
              setItem: function (n, t) {
                (sessionStorage.setItem(n, t),
                  e.initStorageEvent("setItem", !1, !1, n, null, t, null, null),
                  window.dispatchEvent(e));
              },
              removeItem: function (n) {
                (sessionStorage.removeItem(n),
                  e.initStorageEvent("setItem", !1, !1, n, null, null, null, null),
                  window.dispatchEvent(e));
              },
            };
          return a ? o.removeItem(n) : o.setItem(n, t);
        }
      }));
    var u = {
        name: "App",
        provide() {
          return { reload: this.reload };
        },
        data() {
          return { RouterState: !0 };
        },
        created() {
          (window.localStorage.setItem("appversion", this.$appConf.appVersion),
            this.$axios.interceptors.response.use(
              (e) => {
                if (!e.config.headers.forbid_notify && e.data.message)
                  if (401 === e.data.code)
                    "/" !== this.$route.path &&
                      (this.$showErrorNotify("会话已过期，请重新登录"),
                      this.$addStorageEvent(1, "userinfo", null, !0),
                      this.$addStorageEvent(1, "menu", null, !0),
                      this.$addStorageEvent(1, "menuappver", null, !0),
                      this.$router.replace({
                        path: "/",
                        query: {
                          path: this.$route.path,
                          query: this.$route.query,
                          params: this.$route.params,
                        },
                      }));
                  else {
                    if (901 === e.data.code)
                      return (
                        this.$showErrorNotify(e.data.message),
                        Object(h["b"])(this, !0),
                        Promise.reject(e)
                      );
                    0 === e.data.code
                      ? this.$showSuccessNotify(e.data.message)
                      : this.$showErrorNotify(e.data.message);
                  }
                return (this.checkNewlyVer(e.data.systemmillisecond), e);
              },
              (e) => (
                this.$q.loading.hide(),
                this.$showErrorNotify("服务器出现错误"),
                Promise.reject(e)
              ),
            ));
        },
        methods: {
          reload() {
            ((this.RouterState = !1),
              this.$nextTick(() => {
                this.RouterState = !0;
              }));
          },
          checkNewlyVer(e) {
            try {
              if (!e) return;
              if (
                window.localStorage.lastcheckvertime &&
                !(parseInt(window.localStorage.lastcheckvertime) + 864e5 < e)
              )
                return;
              (window.localStorage.setItem("lastcheckvertime", e), Object(h["b"])(this, !0));
            } catch (n) {}
          },
        },
      },
      f = u,
      g = (t("034f"), t("2877")),
      b = Object(g["a"])(f, p, m, !1, null, null, null),
      P = b.exports,
      v = t("8c4f");
    const w = [
      {
        path: "/",
        component: () => t.e(6).then(t.bind(null, "713b")),
        children: [
          { path: "", component: () => Promise.all([t.e(0), t.e(10)]).then(t.bind(null, "35a8")) },
          {
            path: "/user/login",
            component: () => Promise.all([t.e(0), t.e(5)]).then(t.bind(null, "dc6c")),
          },
          {
            path: "/transfer",
            name: "/transfer",
            component: () => Promise.all([t.e(0), t.e(8)]).then(t.bind(null, "46fe")),
          },
          {
            path: "/update",
            component: () => Promise.all([t.e(0), t.e(9)]).then(t.bind(null, "da3b")),
          },
          {
            path: "/policy/privacyPolicy",
            component: () => Promise.all([t.e(0), t.e(17)]).then(t.bind(null, "261e")),
          },
          {
            path: "/policy/termsOfUse",
            component: () => Promise.all([t.e(0), t.e(18)]).then(t.bind(null, "f26b")),
          },
          {
            path: "/user/findPwd",
            component: () => Promise.all([t.e(0), t.e(122)]).then(t.bind(null, "5e71")),
          },
          {
            path: "/user/password",
            component: () => Promise.all([t.e(0), t.e(124)]).then(t.bind(null, "62a1")),
            meta: { needLogin: !0 },
          },
          {
            path: "/student/index",
            component: () => Promise.all([t.e(0), t.e(19)]).then(t.bind(null, "500e")),
            meta: { needLogin: !0 },
          },
          {
            path: "/student/apply/index",
            name: "/student/apply/index",
            component: () => Promise.all([t.e(0), t.e(22)]).then(t.bind(null, "0a0d")),
            meta: { needLogin: !0 },
          },
          {
            path: "/student/apply/applyDetail",
            name: "/student/apply/applyDetail",
            component: () => Promise.all([t.e(0), t.e(1), t.e(21)]).then(t.bind(null, "d0ce")),
            meta: { needLogin: !0 },
          },
          {
            path: "/student/apply/stumanage",
            component: () => Promise.all([t.e(0), t.e(23)]).then(t.bind(null, "def2")),
            meta: { needLogin: !0 },
          },
          {
            path: "/student/apply/stumanagedetail",
            component: () => Promise.all([t.e(0), t.e(1), t.e(24)]).then(t.bind(null, "f260")),
            meta: { needLogin: !0 },
          },
          {
            path: "/student/leave/index",
            component: () => Promise.all([t.e(0), t.e(28)]).then(t.bind(null, "cc5a")),
            meta: { needLogin: !0 },
          },
          {
            path: "/student/leave/leave",
            component: () => Promise.all([t.e(0), t.e(1), t.e(29)]).then(t.bind(null, "fffb")),
            meta: { needLogin: !0 },
          },
          {
            path: "/student/leave/detail",
            component: () => Promise.all([t.e(0), t.e(1), t.e(27)]).then(t.bind(null, "3076")),
            meta: { needLogin: !0 },
          },
          {
            path: "/student/notice/index",
            component: () => Promise.all([t.e(0), t.e(34)]).then(t.bind(null, "d2bb0")),
            meta: { needLogin: !0 },
          },
          {
            path: "/student/notice/detail",
            component: () => Promise.all([t.e(0), t.e(1), t.e(33)]).then(t.bind(null, "4f38")),
            meta: { needLogin: !0 },
          },
          {
            path: "/student/notice/stumanage",
            component: () => Promise.all([t.e(0), t.e(35)]).then(t.bind(null, "cb82")),
            meta: { needLogin: !0 },
          },
          {
            path: "/student/notice/stumanagedetail",
            component: () => Promise.all([t.e(0), t.e(1), t.e(36)]).then(t.bind(null, "90a6")),
            meta: { needLogin: !0 },
          },
          {
            path: "/student/leave/reportleave",
            component: () => Promise.all([t.e(0), t.e(1), t.e(30)]).then(t.bind(null, "750d")),
            meta: { needLogin: !0 },
          },
          {
            path: "/student/signin/index",
            name: "/student/signin/index",
            component: () => Promise.all([t.e(0), t.e(48)]).then(t.bind(null, "be3e")),
            meta: { needLogin: !0 },
          },
          {
            path: "/student/signin/stumanage",
            component: () => Promise.all([t.e(0), t.e(53)]).then(t.bind(null, "a2f3")),
            meta: { needLogin: !0 },
          },
          {
            path: "/student/signin/signin",
            name: "/student/signin/signin",
            component: () => Promise.all([t.e(0), t.e(1), t.e(51)]).then(t.bind(null, "df96")),
            meta: { needLogin: !0 },
          },
          {
            path: "/student/signin/qrcodePerson",
            component: () => Promise.all([t.e(0), t.e(49)]).then(t.bind(null, "048f")),
            meta: { needLogin: !0 },
          },
          {
            path: "/student/signin/qrcodePersonDetails",
            name: "/student/signin/qrcodePersonDetails",
            component: () => Promise.all([t.e(0), t.e(50)]).then(t.bind(null, "b6d3")),
            meta: { needLogin: !0 },
          },
          {
            path: "/student/signin/qrScanning",
            name: "/student/signin/qrScanning",
            component: () => Promise.all([t.e(0), t.e(3)]).then(t.bind(null, "2a13")),
          },
          {
            path: "/student/signin/signinSuccess",
            name: "/student/signin/signinSuccess",
            component: () => Promise.all([t.e(0), t.e(1), t.e(52)]).then(t.bind(null, "1a43")),
            meta: { needLogin: !0 },
          },
          {
            path: "/student/signin/signinPersonnel",
            name: "/student/signin/signinPersonnel",
            component: () => Promise.all([t.e(0), t.e(54)]).then(t.bind(null, "4ab0")),
            meta: { needLogin: !0 },
          },
          {
            path: "/student/signin/stumanagedetail",
            component: () => Promise.all([t.e(0), t.e(1), t.e(55)]).then(t.bind(null, "a6f6")),
            meta: { needLogin: !0 },
          },
          {
            path: "/student/sanitation/index",
            component: () => Promise.all([t.e(0), t.e(47)]).then(t.bind(null, "7c65")),
            meta: { needLogin: !0 },
          },
          {
            path: "/student/sanitation/detailResult",
            component: () => Promise.all([t.e(0), t.e(1), t.e(46)]).then(t.bind(null, "93dc")),
            meta: { needLogin: !0 },
          },
          {
            path: "/student/experience/index",
            name: "/student/experience/index",
            component: () => Promise.all([t.e(0), t.e(26)]).then(t.bind(null, "a1b2")),
            meta: { needLogin: !0 },
          },
          {
            path: "/student/repair/index",
            component: () => Promise.all([t.e(0), t.e(43)]).then(t.bind(null, "8a70")),
            meta: { needLogin: !0 },
          },
          {
            path: "/student/repair/new",
            component: () => Promise.all([t.e(0), t.e(45)]).then(t.bind(null, "b25f")),
            meta: { needLogin: !0 },
          },
          {
            path: "/student/repair/detail",
            component: () => Promise.all([t.e(0), t.e(41)]).then(t.bind(null, "733d")),
            meta: { needLogin: !0 },
          },
          {
            path: "/student/repair/evaluate",
            component: () => Promise.all([t.e(0), t.e(42)]).then(t.bind(null, "dc02")),
            meta: { needLogin: !0 },
          },
          {
            path: "/student/repair/maintainerInfo",
            component: () => Promise.all([t.e(0), t.e(44)]).then(t.bind(null, "866f")),
            meta: { needLogin: !0 },
          },
          {
            path: "/teacher/index",
            component: () => Promise.all([t.e(0), t.e(56)]).then(t.bind(null, "69c3")),
            meta: { needLogin: !0 },
          },
          {
            path: "/teacher/qrcodeScanning",
            component: () => Promise.all([t.e(0), t.e(4)]).then(t.bind(null, "0611")),
            meta: { needLogin: !0 },
          },
          {
            path: "/teacher/verification/signinVer",
            name: "/teacher/verification/signinVer",
            component: () => Promise.all([t.e(0), t.e(118)]).then(t.bind(null, "87c4")),
            meta: { needLogin: !0 },
          },
          {
            path: "/teacher/verification/leaveVer",
            name: "/teacher/verification/leaveVer",
            component: () => Promise.all([t.e(0), t.e(117)]).then(t.bind(null, "0930")),
            meta: { needLogin: !0 },
          },
          {
            path: "/teacher/signin/index",
            component: () => Promise.all([t.e(0), t.e(113)]).then(t.bind(null, "6822")),
            meta: { needLogin: !0 },
          },
          {
            path: "/teacher/signin/new",
            name: "/teacher/signin/new",
            component: () => Promise.all([t.e(0), t.e(1), t.e(114)]).then(t.bind(null, "2045")),
            meta: { needLogin: !0 },
          },
          {
            path: "/teacher/signin/detail",
            name: "/teacher/signin/detail",
            component: () => Promise.all([t.e(0), t.e(1), t.e(112)]).then(t.bind(null, "a0ab")),
            meta: { needLogin: !0 },
          },
          {
            path: "/teacher/signin/statistics",
            component: () => Promise.all([t.e(0), t.e(1), t.e(116)]).then(t.bind(null, "49de")),
            meta: { needLogin: !0 },
          },
          {
            path: "/teacher/signin/signinExperience",
            name: "/teacher/signin/signinExperience",
            component: () => Promise.all([t.e(0), t.e(1), t.e(115)]).then(t.bind(null, "92f0")),
            meta: { needLogin: !0 },
          },
          {
            path: "/teacher/leave/list",
            component: () => Promise.all([t.e(0), t.e(1), t.e(78)]).then(t.bind(null, "3cd2")),
            meta: { needLogin: !0 },
          },
          {
            path: "/teacher/leave/index",
            component: () => Promise.all([t.e(0), t.e(84)]).then(t.bind(null, "a858")),
            meta: { needLogin: !0 },
          },
          {
            path: "/teacher/leave/multilist",
            component: () => Promise.all([t.e(0), t.e(1), t.e(81)]).then(t.bind(null, "493a")),
            meta: { needLogin: !0, pathInfo: [{ label: "教师端批量请假" }] },
          },
          {
            path: "/teacher/leave/multidetail",
            component: () => Promise.all([t.e(0), t.e(1), t.e(82)]).then(t.bind(null, "965e")),
            meta: { needLogin: !0, pathInfo: [{ label: "教师端批量请假详情" }] },
          },
          {
            path: "/teacher/leave/leaveExperience",
            name: "/teacher/leave/leaveExperience",
            component: () => Promise.all([t.e(0), t.e(1), t.e(79)]).then(t.bind(null, "f3d1")),
            meta: { needLogin: !0, pathInfo: [{ label: "请假历史记录" }] },
          },
          {
            path: "/teacher/leave/multiHistory",
            name: "/teacher/leave/multiHistory",
            component: () => Promise.all([t.e(0), t.e(80)]).then(t.bind(null, "2727")),
            meta: { needLogin: !0, pathInfo: [{ label: "批量请假历史记录" }] },
          },
          {
            path: "/teacher/leave/newMultiLeave",
            name: "/teacher/leave/newMultiLeave",
            component: () => Promise.all([t.e(0), t.e(1), t.e(85)]).then(t.bind(null, "43e8")),
            meta: { needLogin: !0, pathInfo: [{ label: "批量请假" }] },
          },
          {
            path: "/teacher/leave/multiStudent",
            name: "/teacher/leave/multiStudent",
            component: () => Promise.all([t.e(0), t.e(83)]).then(t.bind(null, "3865")),
            meta: { needLogin: !0, pathInfo: [{ label: "批量请假全部学生" }] },
          },
          {
            path: "/teacher/sanitation/index",
            component: () => Promise.all([t.e(0), t.e(108)]).then(t.bind(null, "1563")),
            meta: { needLogin: !0 },
          },
          {
            path: "/teacher/joblog/index",
            component: () => Promise.all([t.e(0), t.e(74)]).then(t.bind(null, "326a")),
            meta: { needLogin: !0 },
          },
          {
            path: "/teacher/joblog/detail",
            component: () => Promise.all([t.e(0), t.e(1), t.e(72)]).then(t.bind(null, "d79d")),
            meta: { needLogin: !0 },
          },
          {
            path: "/teacher/notice/index",
            component: () => Promise.all([t.e(0), t.e(98)]).then(t.bind(null, "7f35")),
            meta: { needLogin: !0 },
          },
          {
            path: "/teacher/notice/detail",
            component: () => Promise.all([t.e(0), t.e(1), t.e(97)]).then(t.bind(null, "03ca")),
            meta: { needLogin: !0 },
          },
          {
            path: "/teacher/notice/new",
            name: "/teacher/notice/new",
            component: () => Promise.all([t.e(0), t.e(1), t.e(99)]).then(t.bind(null, "66de")),
            meta: { needLogin: !0 },
          },
          {
            path: "/teacher/notice/noticeExperience",
            name: "/teacher/notice/noticeExperience",
            component: () => Promise.all([t.e(0), t.e(1), t.e(100)]).then(t.bind(null, "60e8")),
            meta: { needLogin: !0 },
          },
          {
            path: "/teacher/joblog/new",
            name: "/teacher/joblog/new",
            component: () => Promise.all([t.e(0), t.e(1), t.e(75)]).then(t.bind(null, "18bf")),
            meta: { needLogin: !0 },
          },
          {
            path: "/teacher/sanitation/detail",
            component: () => Promise.all([t.e(0), t.e(1), t.e(106)]).then(t.bind(null, "3b5c")),
            meta: { needLogin: !0 },
          },
          {
            path: "/teacher/sanitation/detailresult",
            component: () => Promise.all([t.e(0), t.e(1), t.e(107)]).then(t.bind(null, "a22e")),
            meta: { needLogin: !0 },
          },
          {
            path: "/teacher/leave/detail",
            component: () => Promise.all([t.e(0), t.e(1), t.e(76)]).then(t.bind(null, "efa0")),
            meta: { needLogin: !0 },
          },
          {
            path: "/teacher/sanitation/new",
            name: "/teacher/sanitation/new",
            component: () => Promise.all([t.e(0), t.e(1), t.e(109)]).then(t.bind(null, "54fe")),
            meta: { needLogin: !0 },
          },
          {
            path: "/teacher/leave/history",
            component: () => Promise.all([t.e(0), t.e(77)]).then(t.bind(null, "07ff")),
            meta: { needLogin: !0 },
          },
          {
            path: "/teacher/apply/index",
            component: () => Promise.all([t.e(0), t.e(65)]).then(t.bind(null, "fdfc")),
            meta: { needLogin: !0 },
          },
          {
            path: "/teacher/apply/detail",
            component: () => Promise.all([t.e(0), t.e(1), t.e(64)]).then(t.bind(null, "6154")),
            meta: { needLogin: !0 },
          },
          {
            path: "/teacher/apply/statistics",
            component: () => Promise.all([t.e(0), t.e(1), t.e(67)]).then(t.bind(null, "d03a")),
            meta: { needLogin: !0 },
          },
          {
            path: "/teacher/apply/new",
            name: "/teacher/apply/new",
            component: () => Promise.all([t.e(0), t.e(1), t.e(66)]).then(t.bind(null, "ac1c")),
            meta: { needLogin: !0 },
          },
          {
            path: "/teacher/apply/applyExperience",
            name: "/teacher/apply/applyExperience",
            component: () => Promise.all([t.e(0), t.e(1), t.e(63)]).then(t.bind(null, "64e7")),
            meta: { needLogin: !0 },
          },
          {
            path: "/teacher/joblog/detailresult",
            component: () => Promise.all([t.e(0), t.e(1), t.e(73)]).then(t.bind(null, "b6da")),
            meta: { needLogin: !0 },
          },
          {
            path: "/teacher/experience/index",
            name: "/teacher/experience/index",
            component: () => Promise.all([t.e(0), t.e(71)]).then(t.bind(null, "a0d5")),
            meta: { needLogin: !0 },
          },
          {
            path: "/teacher/achievement/index",
            name: "/teacher/achievement/index",
            component: () => Promise.all([t.e(0), t.e(58)]).then(t.bind(null, "9ddf")),
            meta: { needLogin: !0 },
          },
          {
            path: "/teacher/analysis/index",
            component: () => Promise.all([t.e(0), t.e(59)]).then(t.bind(null, "c676")),
            meta: { needLogin: !0 },
          },
          {
            path: "/student/basic/stuInfo",
            component: () => Promise.all([t.e(0), t.e(1), t.e(25)]).then(t.bind(null, "c3b1")),
            meta: { needLogin: !0 },
          },
          {
            path: "/teacher/basic/teaInfo",
            component: () => Promise.all([t.e(0), t.e(68)]).then(t.bind(null, "ad93")),
            meta: { needLogin: !0 },
          },
          {
            path: "/user/bindingMob",
            component: () => Promise.all([t.e(0), t.e(120)]).then(t.bind(null, "d313")),
            meta: { needLogin: !0 },
          },
          {
            path: "/teacher/monitor/index",
            component: () => Promise.all([t.e(0), t.e(1), t.e(93)]).then(t.bind(null, "daec")),
            meta: { needLogin: !0 },
          },
          {
            path: "/teacher/scanning/signinVer",
            name: "/teacher/scanning/signinVer",
            component: () => Promise.all([t.e(0), t.e(111)]).then(t.bind(null, "7e9c")),
            meta: { needLogin: !0 },
          },
          {
            path: "/teacher/scanning/leaveVer",
            name: "/teacher/scanning/leaveVer",
            component: () => Promise.all([t.e(0), t.e(110)]).then(t.bind(null, "c4d2")),
            meta: { needLogin: !0 },
          },
          {
            path: "/teacher/news/index",
            component: () => Promise.all([t.e(0), t.e(95)]).then(t.bind(null, "c201")),
            meta: { needLogin: !0 },
          },
          {
            path: "/teacher/news/detail",
            component: () => Promise.all([t.e(0), t.e(94)]).then(t.bind(null, "6b6a")),
            meta: { needLogin: !0 },
          },
          {
            path: "/teacher/news/new",
            name: "/teacher/news/new",
            component: () => Promise.all([t.e(0), t.e(96)]).then(t.bind(null, "8087")),
            meta: { needLogin: !0 },
          },
          {
            path: "/student/news/index",
            component: () => Promise.all([t.e(0), t.e(32)]).then(t.bind(null, "5542")),
            meta: { needLogin: !0 },
          },
          {
            path: "/student/news/detail",
            component: () => Promise.all([t.e(0), t.e(31)]).then(t.bind(null, "579a")),
            meta: { needLogin: !0 },
          },
          {
            path: "/student/process/index",
            component: () => Promise.all([t.e(0), t.e(38)]).then(t.bind(null, "839a")),
            meta: { needLogin: !0 },
          },
          {
            path: "/student/process/new",
            name: "/student/process/new",
            component: () => Promise.all([t.e(0), t.e(39)]).then(t.bind(null, "f3a7")),
            meta: { needLogin: !0 },
          },
          {
            path: "/student/process/detail",
            component: () => Promise.all([t.e(0), t.e(1), t.e(37)]).then(t.bind(null, "5e52")),
            meta: { needLogin: !0 },
          },
          {
            path: "/student/process/NewProcess",
            name: "/student/process/NewProcess",
            component: () => Promise.all([t.e(0), t.e(1), t.e(40)]).then(t.bind(null, "c054")),
            meta: { needLogin: !0 },
          },
          {
            path: "/teacher/process/index",
            component: () => Promise.all([t.e(0), t.e(1), t.e(104)]).then(t.bind(null, "1e9e")),
            meta: { needLogin: !0 },
          },
          {
            path: "/teacher/process/detail",
            component: () => Promise.all([t.e(0), t.e(1), t.e(101)]).then(t.bind(null, "32f5")),
            meta: { needLogin: !0 },
          },
          {
            path: "/teacher/process/list",
            component: () => Promise.all([t.e(0), t.e(1), t.e(103)]).then(t.bind(null, "897e")),
            meta: { needLogin: !0 },
          },
          {
            path: "/teacher/process/processTypeList",
            component: () => Promise.all([t.e(0), t.e(102)]).then(t.bind(null, "40d3")),
            meta: { needLogin: !0 },
          },
          {
            path: "/teacher/process/typeDetail",
            name: "/teacher/process/processTypeNew",
            component: () => Promise.all([t.e(0), t.e(1), t.e(105)]).then(t.bind(null, "0fc5")),
            meta: { needLogin: !0 },
          },
          {
            path: "/user/qrCode",
            component: () => Promise.all([t.e(0), t.e(125)]).then(t.bind(null, "2971")),
            meta: { needLogin: !0 },
          },
          {
            path: "/user/passport",
            component: () => Promise.all([t.e(0), t.e(123)]).then(t.bind(null, "1e4d")),
            meta: { needLogin: !0 },
          },
          {
            path: "/teacher/analysis/stuData",
            component: () => Promise.all([t.e(0), t.e(1), t.e(60)]).then(t.bind(null, "7778")),
            meta: { needLogin: !0 },
          },
          {
            path: "/teacher/analysis/stuLocation",
            component: () => Promise.all([t.e(0), t.e(1), t.e(61)]).then(t.bind(null, "23a6")),
            meta: { needLogin: !0 },
          },
          {
            path: "/student/todo",
            component: () => Promise.all([t.e(0), t.e(20)]).then(t.bind(null, "700f")),
            meta: { needLogin: !0 },
          },
          {
            path: "/teacher/todo",
            component: () => Promise.all([t.e(0), t.e(57)]).then(t.bind(null, "58c1")),
            meta: { needLogin: !0 },
          },
          {
            path: "/user/doBindingMob",
            component: () => Promise.all([t.e(0), t.e(121)]).then(t.bind(null, "a3a5")),
            meta: { needLogin: !0 },
          },
          {
            path: "/user/account",
            component: () => Promise.all([t.e(0), t.e(119)]).then(t.bind(null, "f7d9")),
            meta: { needLogin: !0 },
          },
          {
            path: "/teacher/composite/index",
            component: () => Promise.all([t.e(0), t.e(1), t.e(70)]).then(t.bind(null, "e90c")),
            meta: { needLogin: !0 },
          },
          {
            path: "/teacher/composite/detail",
            component: () => Promise.all([t.e(0), t.e(1), t.e(69)]).then(t.bind(null, "ebc5")),
            meta: { needLogin: !0 },
          },
          {
            path: "/teacher/message/index",
            component: () => Promise.all([t.e(0), t.e(87)]).then(t.bind(null, "19fe")),
            meta: { needLogin: !0 },
          },
          {
            path: "/teacher/message/messageIndex",
            component: () => Promise.all([t.e(0), t.e(90)]).then(t.bind(null, "710a")),
            meta: { needLogin: !0 },
          },
          {
            path: "/teacher/message/new",
            name: "/teacher/message/new",
            component: () => Promise.all([t.e(0), t.e(1), t.e(91)]).then(t.bind(null, "8060")),
            meta: { needLogin: !0 },
          },
          {
            path: "/teacher/message/statistics",
            component: () => Promise.all([t.e(0), t.e(1), t.e(92)]).then(t.bind(null, "0df3")),
            meta: { needLogin: !0 },
          },
          {
            path: "/teacher/message/detail",
            component: () => Promise.all([t.e(0), t.e(1), t.e(86)]).then(t.bind(null, "9c8e")),
            meta: { needLogin: !0 },
          },
          {
            path: "/teacher/analysis/teaMessage",
            component: () => Promise.all([t.e(0), t.e(1), t.e(62)]).then(t.bind(null, "4c50")),
            meta: { needLogin: !0 },
          },
          {
            path: "/teacher/message/message",
            name: "/teacher/message/message",
            component: () => Promise.all([t.e(0), t.e(88)]).then(t.bind(null, "098e")),
            meta: { needLogin: !0 },
          },
          {
            path: "/teacher/message/messageDetail",
            name: "/teacher/message/messageDetail",
            component: () => Promise.all([t.e(0), t.e(1), t.e(89)]).then(t.bind(null, "2a54")),
            meta: { needLogin: !0 },
          },
          {
            path: "/maintainer/index",
            component: () => Promise.all([t.e(0), t.e(12)]).then(t.bind(null, "7ee9")),
            meta: { needLogin: !0 },
          },
          {
            path: "/maintainer/todo",
            component: () => Promise.all([t.e(0), t.e(16)]).then(t.bind(null, "b6c5")),
            meta: { needLogin: !0 },
          },
          {
            path: "/maintainer/repairList",
            component: () => Promise.all([t.e(0), t.e(14)]).then(t.bind(null, "f741")),
            meta: { needLogin: !0 },
          },
          {
            path: "/maintainer/detail",
            component: () => Promise.all([t.e(0), t.e(11)]).then(t.bind(null, "8456")),
            meta: { needLogin: !0 },
          },
          {
            path: "/maintainer/receivingOrder",
            component: () => Promise.all([t.e(0), t.e(13)]).then(t.bind(null, "2c02")),
            meta: { needLogin: !0 },
          },
          {
            path: "/maintainer/repairOrder",
            component: () => Promise.all([t.e(0), t.e(15)]).then(t.bind(null, "589c")),
            meta: { needLogin: !0 },
          },
        ],
      },
      { path: "*", component: () => Promise.all([t.e(0), t.e(7)]).then(t.bind(null, "e51e")) },
    ];
    var L = w;
    const y = v["a"].prototype.push;
    ((v["a"].prototype.push = function (e) {
      return y.call(this, e).catch((e) => e);
    }),
      a["a"].use(v["a"]));
    var x = function () {
        const e = new v["a"]({
          scrollBehavior: () => ({ x: 0, y: 0 }),
          routes: L,
          mode: "hash",
          base: "",
        });
        return (
          e.beforeEach((e, n, t) => {
            e.meta.needLogin
              ? window.localStorage.userinfo
                ? t()
                : t({ path: "/", query: { path: e.path, query: e.query } })
              : t();
          }),
          e
        );
      },
      S = async function () {
        const e = "function" === typeof x ? await x({ Vue: a["a"] }) : x,
          n = { router: e, render: (e) => e(P), el: "#q-app" };
        return { app: n, router: e };
      },
      E = t("bc3a"),
      I = t.n(E),
      $ = t("ac02");
    ((a["a"].prototype.$axios = I.a),
      (a["a"].prototype.$appConf = $),
      (a["a"].prototype.$axiosAction = function (e, n, t = "post", a = !0) {
        return this.$axios({
          url: e,
          method: t,
          data: JSON.stringify(n),
          baseURL: window.localStorage.server + $.base,
          headers: { forbid_notify: a ? "" : "true" },
        });
      }),
      I.a.interceptors.request.use(
        (e) => (
          (e.headers["Content-Type"] = "application/json"),
          window.localStorage.userinfo &&
            window.localStorage.jwt &&
            (e.headers.Authorization = window.localStorage.getItem("jwt")),
          (e.headers["App-Version"] = window.localStorage.appversion),
          e
        ),
        (e) => Promise.reject(e),
      ),
      I.a.interceptors.response.use(
        (e) => (
          e.headers.token && window.localStorage.setItem("jwt", e.headers.token),
          200 === e.status ? Promise.resolve(e) : Promise.reject(e)
        ),
      ));
    var j = t("59d7"),
      q = t("ef35"),
      N = async ({ app: e, urlPath: n, redirect: t, router: a }) => {
        (document.addEventListener(
          "jpush.receiveMessage",
          function (e) {
            JPush.addLocalNotification(10, e.message, "提示", 4, 1e4, {});
          },
          !0,
        ),
          document.addEventListener(
            "jpush.receiveNotification",
            function (e) {
              const n = new CustomEvent("refreshTodoList", null);
              window.dispatchEvent(n);
              const t = new CustomEvent("resetBadge", null);
              window.dispatchEvent(t);
            },
            !0,
          ),
          document.addEventListener("jpush.receiveRegistrationId", function (e) {}, !0),
          document.addEventListener(
            "jpush.openNotification",
            function (e) {
              if (JPush.isPlatformIOS()) {
                a.push({ name: "/transfer", params: { path: e.extras.path } });
                const n = new CustomEvent("updateBadge", { detail: { id: e.extras.pushid } });
                window.dispatchEvent(n);
              } else {
                const n = "cn.jpush.android.EXTRA",
                  t = e.extras[n];
                a.push({ name: "/transfer", params: { path: t.path } });
                const o = new CustomEvent("updateBadge", { detail: { id: t.pushid } });
                window.dispatchEvent(o);
              }
            },
            !1,
          ),
          window.addEventListener(
            "launchapp.open",
            ({ detail: { path: e } }) => {
              a.push({ name: "/transfer", params: { path: e } });
            },
            !1,
          ));
      };
    a["a"].use(l["a"], { components: { QPullToRefresh: j["a"], QInfiniteScroll: q["a"] } });
    const O = "";
    async function k() {
      const { app: e, router: n } = await S();
      let t = !1;
      const o = (e) => {
          t = !0;
          const a = Object(e) === e ? n.resolve(e).route.fullPath : e;
          window.location.href = a;
        },
        i = window.location.href.replace(window.location.origin, ""),
        l = [void 0, N];
      for (let d = 0; !1 === t && d < l.length; d++)
        if ("function" === typeof l[d])
          try {
            await l[d]({
              app: e,
              router: n,
              Vue: a["a"],
              ssrContext: null,
              redirect: o,
              urlPath: i,
              publicPath: O,
            });
          } catch (r) {
            return r && r.url
              ? void (window.location.href = r.url)
              : void console.error("[Quasar] boot error:", r);
          }
      !0 !== t &&
        document.addEventListener(
          "deviceready",
          () => {
            ((a["a"].prototype.$q.cordova = window.cordova), new a["a"](e));
          },
          !1,
        );
    }
    k();
  },
  ac02: function (e) {
    e.exports = JSON.parse(
      '{"title":"东软智慧学工","copyright":"©2021-2024 东软教育科技集团","base":"/","fileUploader":"/api/file_uploader.jsp","fileExts":["doc","docx","xls","xlsx","ppt","pptx","pdf","zip","rar","7z"],"pictureExts":["jpg","jpeg","png"],"portalUrl":"https://wisestu.neumooc.com/portal","appleStore":"itms-apps://itunes.apple.com/cn/app/id1561919020","androidAppName":"wisestu-app-v","bMapAk":"[REDACTED_BAIDU_MAP_AK]","appVersion":"2.0.1","homepage":"https://wisestu.neumooc.com","androidStore":"https://a.app.qq.com/o/simple.jsp?pkgname=com.neuedu.wisestu"}',
    );
  },
  ad56: function (e, n, t) {
    "use strict";
    (t.d(n, "d", function () {
      return a;
    }),
      t.d(n, "c", function () {
        return o;
      }),
      t.d(n, "a", function () {
        return i;
      }),
      t.d(n, "e", function () {
        return l;
      }),
      t.d(n, "b", function () {
        return s;
      }));
    t("e6cf");
    function a(e) {
      const n = (
        window.localStorage.menu ? JSON.parse(window.localStorage.getItem("menu")) : []
      ).find((n) => n.id === e);
      return n && n.color.backgroundValue ? n.color.backgroundValue : "A5D6A7";
    }
    function o(e, n) {
      window.requestFileSystem(
        window.LocalFileSystem.PERSISTENT,
        0,
        (t) => {
          t.root.getFile(
            n,
            { create: !0, exclusive: !1 },
            (t) => {
              const a = new window.FileTransfer(),
                o = encodeURI(`${window.localStorage.server}/${e}`),
                i = cordova.file.dataDirectory + n;
              a.download(
                o,
                i,
                (e) => {
                  e.file((e) => {
                    cordova.plugins.fileOpener2.showOpenWithDialog(
                      i,
                      e.type,
                      (e) => {},
                      (e) => {},
                    );
                  });
                },
                () => {},
              );
            },
            () => {},
          );
        },
        () => {},
      );
    }
    function i(e) {
      const n = /^[1][3,4,5,6,7,8,9][0-9]{9}$/;
      return n.test(e) ? null : "手机号码不正确";
    }
    function l(e, n, t) {
      JPush.isPushStopped((a) => {
        (0 === a || JPush.resumePush(),
          JPush.getRegistrationID((a) => {
            ((r = 10), d(e, n, t));
          }));
      });
    }
    var r = 10;
    function d(e, n, t) {
      0 !== r &&
        (r--,
        JPush.setAlias(
          { sequence: 1, alias: e },
          (a) => {
            c(e, n, t);
          },
          () => {
            setTimeout(() => {
              d(e, n, t);
            }, 2e3);
          },
        ));
    }
    async function c(e, n, t) {
      let a = "";
      ((a =
        "T" === n
          ? "updateTeacherDeviceId"
          : "S" === n
            ? "updateStudentDeviceId"
            : "updateMaintainerDeviceId"),
        t.$axiosAction(
          "/api/user/user.api",
          {
            action: a,
            device_id: e,
            device_extra: JSON.stringify({
              platform: window.device.platform,
              is_ios: JPush.isPlatformIOS(),
              app_version: window.localStorage.appversion,
            }),
          },
          "post",
          !1,
        ));
    }
    function s(e, n) {
      e.$axiosAction(
        `${e.$appConf.portalUrl}/api/server.api`,
        {
          action: "queryVersion",
          platform: JPush.isPlatformIOS() ? "ios" : "android",
          version: window.localStorage.appversion,
        },
        "post",
        !1,
      ).then((t) => {
        0 === t.data.code && t.data.upgrading
          ? e.$router.push({
              path: "/update",
              query: { ver: t.data.ver, mandatory: t.data.mandatory },
            })
          : n || e.$showSuccessNotify("无新版本");
      });
    }
  },
  ed82: function (e, n, t) {},
});
