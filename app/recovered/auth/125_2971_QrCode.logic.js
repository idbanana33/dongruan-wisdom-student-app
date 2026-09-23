/**
 * Webpack module logic recovery
 * Source: assets/www/js/125.js -> module "2971"
 * Route: /user/qrCode
 * Component guess: QrCode
 * Fidelity: exact module body, beautified only (webpack wrapper retained)
 * Note: variable names inside the original production module are preserved as evidence.
 */
2971: function(t, e, a) {
  "use strict";
  a.r(e);
  var o = function() {
      var t = this,
        e = t.$createElement,
        a = t._self._c || e;
      return a("q-layout", {
        attrs: {
          view: "lHh lpr lFf"
        }
      }, [a("q-header", {
        staticClass: "bg-white text-black"
      }, [a("q-toolbar", [a("q-btn", {
        attrs: {
          flat: "",
          round: "",
          dense: "",
          icon: "close"
        },
        on: {
          click: t.goBack
        }
      }), a("q-toolbar-title", [t._v("我的二维码")])], 1)], 1), a("q-page-container", [a("q-page", {
        staticClass: "bg-white"
      }, [a("q-card", {
        staticClass: "full-width",
        attrs: {
          flat: ""
        }
      }, [a("q-card-section", {
        staticClass: "text-center"
      }, [a("vue-qr", {
        staticClass: "q-mb-xl",
        attrs: {
          text: t.qrCodeValue,
          margin: 0,
          colorDark: "#3B3B3B",
          colorLight: "#fff",
          size: 250
        }
      }), a("div", [t._v(t._s(t.downcount) + "秒后二维码自动刷新")])], 1)], 1)], 1)], 1)], 1)
    },
    r = [],
    n = a("658f"),
    s = a.n(n),
    l = {
      components: {
        vueQr: s.a
      },
      name: "QrCode",
      data() {
        return {
          qrCodeValue: "",
          qrCodeInterval: null,
          downcount: 60,
          downcountInterval: null
        }
      },
      mounted() {
        this.showQrCode(), this.qrCodeInterval = setInterval((() => {
          this.showQrCode()
        }), 6e4)
      },
      destroyed() {
        clearInterval(this.qrCodeInterval), clearInterval(this.downcountInterval)
      },
      methods: {
        showQrCode() {
          clearInterval(this.downcountInterval), this.downcount = 60, this.$axiosAction("/api/user/user.api", {
            action: "queryUserQrCode"
          }).then((t => {
            0 === t.data.code && (this.qrCodeValue = t.data.qrcode, this.downcountInterval = setInterval((() => {
              this.downcount--
            }), 1e3))
          }))
        },
        goBack() {
          "S" === JSON.parse(window.localStorage.userinfo).role_type ? this.$router.push("/student/index") : this.$router.push("/teacher/index")
        }
      }
    },
    c = l,
    i = a("2877"),
    d = a("4d5a"),
    u = a("e359"),
    h = a("65c6"),
    w = a("9c40"),
    v = a("6ac5"),
    q = a("09e3"),
    C = a("9989"),
    p = a("f09f"),
    f = a("a370"),
    Q = a("eebe"),
    b = a.n(Q),
    I = Object(i["a"])(c, o, r, !1, null, null, null);
  e["default"] = I.exports;
  b()(I, "components", {
    QLayout: d["a"],
    QHeader: u["a"],
    QToolbar: h["a"],
    QBtn: w["a"],
    QToolbarTitle: v["a"],
    QPageContainer: q["a"],
    QPage: C["a"],
    QCard: p["a"],
    QCardSection: f["a"]
  })
}
