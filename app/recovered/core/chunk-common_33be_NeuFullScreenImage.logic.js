/**
 * Webpack module logic recovery
 * Source: assets/www/js/chunk-common.js -> module "33be"
 * Route: (shared/core)
 * Component guess: NeuFullScreenImage
 * Fidelity: exact module body, beautified only (webpack wrapper retained)
 * Note: variable names inside the original production module are preserved as evidence.
 */
"33be": function(e, t, i) {
  "use strict";
  var a = function() {
      var e = this,
        t = e.$createElement,
        i = e._self._c || t;
      return i("q-dialog", {
        attrs: {
          maximized: ""
        },
        model: {
          value: e.showBigPic,
          callback: function(t) {
            e.showBigPic = t
          },
          expression: "showBigPic"
        }
      }, [i("div", {
        staticStyle: {
          "background-color": "black"
        }
      }, [i("div", {
        ref: "bigPicPanel"
      }, [i("q-img", {
        attrs: {
          src: e.serverUrl + e.bigPicUrl
        }
      })], 1), i("q-page-sticky", {
        attrs: {
          position: "bottom-right",
          offset: [18, 18]
        }
      }, [i("q-fab", {
        attrs: {
          icon: "keyboard_arrow_left",
          direction: "left",
          color: "secondary"
        }
      }, [i("q-fab-action", {
        directives: [{
          name: "close-popup",
          rawName: "v-close-popup"
        }],
        attrs: {
          icon: "close",
          color: "accent"
        }
      }), i("q-fab-action", {
        attrs: {
          icon: "get_app",
          color: "primary"
        },
        on: {
          click: e.downloadPicture
        }
      }), i("div", {
        ref: "plusPic"
      }, [i("q-fab-action", {
        attrs: {
          icon: "mdi-magnify-plus",
          color: "amber"
        }
      })], 1), i("div", {
        ref: "minusPic"
      }, [i("q-fab-action", {
        attrs: {
          icon: "mdi-magnify-minus",
          color: "amber"
        }
      })], 1)], 1)], 1)], 1)])
    },
    s = [],
    l = i("ad56"),
    o = i("c8b5"),
    n = i.n(o);

  function r(e, t, i) {
    var a = function() {
        return window[n.a.prefixed(window, "requestAnimationFrame")] || function(e) {
          window.setTimeout(e, 1e3 / 60)
        }
      }(),
      s = !1,
      l = 1,
      o = "",
      r = x(0, 0),
      c = x(0, 0),
      u = x(0, 0),
      d = x(e.offsetWidth / 2, e.offsetHeight / 2),
      m = x(e.offsetWidth / 2, e.offsetHeight / 2);
    if (v(), t) {
      var f = new n.a(t);
      f.on("tap", (() => {
        y({
          center: x(0, 0)
        })
      }))
    }
    if (i) {
      var p = new n.a(i);
      p.on("tap", (() => {
        y({
          center: x(0, 0)
        })
      }))
    }
    var h = new n.a(e);

    function y(t) {
      if (o = "", c = x(r.x, r.y), d = x(m.x + c.x, m.y + c.y), u = x(t.center.x - d.x, t.center.y - d.y), l > 1) l = 1, r = x(0, 0);
      else {
        l = 2;
        let t = Number((1 - l) * u.x + c.x),
          i = Number((1 - l) * u.y + c.y),
          a = e.getBoundingClientRect().width / 2 - e.offsetWidth / 2,
          s = e.getBoundingClientRect().height / 2 - e.offsetHeight / 2;
        Math.abs(t) > Math.abs(a) && (t = _(t, a)), Math.abs(i) > Math.abs(s) && (i = _(i, s)), r = x(t, i)
      }
      g()
    }

    function g() {
      s || (a(b), s = !0)
    }

    function b() {
      e.style.transition = o, e.style.transform = "translate(" + r.x + "px," + r.y + "px) scale(" + l + "," + l + ")", e.style.WebkitTransform = "translate(" + r.x + "px," + r.y + "px) scale(" + l + "," + l + ")", e.style.msTransform = "translate(" + r.x + "px," + r.y + "px) scale(" + l + "," + l + ")", v(), s = !1
    }

    function v() {
      t && (t.style.display = 1 === l ? "inline" : "none"), i && (i.style.display = 1 === l ? "none" : "inline")
    }

    function _(e, t) {
      let i = T(e),
        a = T(t),
        s = 0;
      return s = Number(!i && a ? "-" + t : t), s
    }

    function T(e) {
      var t = new RegExp("^-?[0-9]*.?[0-9]*$");
      if (t.test(e)) {
        var i = Math.abs(e);
        return e === i
      }
    }

    function x(e, t) {
      return {
        x: e,
        y: t
      }
    }
    h.on("doubletap", (e => {
      y(e)
    })), h.on("panstart", (e => {
      c = x(r.x, r.y)
    })), h.on("panmove", (t => {
      o = "1.6";
      let i = Number(c.x + t.deltaX),
        a = Number(c.y + t.deltaY),
        s = e.getBoundingClientRect().width / 2 - e.offsetWidth / 2,
        l = e.getBoundingClientRect().height / 2 - e.offsetHeight / 2;
      Math.abs(i) > Math.abs(s) && (i = _(i, s)), Math.abs(a) > Math.abs(l) && (a = _(a, l)), r = x(i, a), g()
    })), h.on("pinchstart", (e => {
      o = "", c = x(r.x, r.y), d = x(m.x + c.x, m.y + c.y), u = x(e.center.x - d.x, e.center.y - d.y)
    })), h.on("pinchmove", (t => {
      let i = l * t.scale;
      i < 1 ? i = 1 : i > 3 && (i = 3), l = i;
      let a = Number((1 - l) * u.x + c.x),
        s = Number((1 - l) * u.y + c.y),
        o = e.getBoundingClientRect().width / 2 - e.offsetWidth / 2,
        n = e.getBoundingClientRect().height / 2 - e.offsetHeight / 2;
      Math.abs(a) > Math.abs(o) && (a = _(a, o)), Math.abs(s) > Math.abs(n) && (s = _(s, n)), r = x(a, s), g()
    }))
  }
  var c = {
      name: "NeuFullScreenImage",
      props: {
        value: null,
        url: {
          type: String,
          required: !1
        },
        name: {
          type: String,
          required: !1
        }
      },
      data() {
        return {
          serverUrl: window.localStorage.server,
          showBigPic: !1,
          bigPicUrl: "",
          bigPicName: ""
        }
      },
      mounted() {
        this.bigPicUrl = this.url, this.bigPicName = this.name
      },
      computed: {},
      watch: {
        value(e) {
          this.showBigPic = e, this.showBigPic && this.$nextTick((() => {
            r(this.$refs.bigPicPanel, this.$refs.plusPic, this.$refs.minusPic)
          }))
        },
        url(e) {
          this.bigPicUrl = e
        },
        name(e) {
          this.bigPicName = e
        },
        showBigPic(e) {
          this.$emit("input", e)
        }
      },
      methods: {
        downloadPicture() {
          Object(l["c"])(this.bigPicUrl, this.bigPicName)
        }
      }
    },
    u = c,
    d = i("2877"),
    m = i("24e8"),
    f = i("068f"),
    p = i("de5e"),
    h = i("c294"),
    y = i("72db"),
    g = i("7f67"),
    b = i("eebe"),
    v = i.n(b),
    _ = Object(d["a"])(u, a, s, !1, null, null, null);
  t["a"] = _.exports;
  v()(_, "components", {
    QDialog: m["a"],
    QImg: f["a"],
    QPageSticky: p["a"],
    QFab: h["a"],
    QFabAction: y["a"]
  }), v()(_, "directives", {
    ClosePopup: g["a"]
  })
}
