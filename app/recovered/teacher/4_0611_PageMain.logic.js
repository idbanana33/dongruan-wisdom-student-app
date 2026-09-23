/**
 * Webpack module logic recovery
 * Source: assets/www/js/4.js -> module "0611"
 * Route: /teacher/qrcodeScanning
 * Component guess: PageMain
 * Fidelity: exact module body, beautified only (webpack wrapper retained)
 * Note: variable names inside the original production module are preserved as evidence.
 */
"0611": function(t, n, a) {
  "use strict";
  a.r(n);
  var e = function() {
      var t = this,
        n = t.$createElement,
        a = t._self._c || n;
      return a("q-layout", {
        attrs: {
          view: "lHh lpr lFf"
        }
      }, [a("q-header", {
        staticClass: "bg-grey-3 text-black"
      }, [a("q-toolbar", [a("q-btn", {
        attrs: {
          flat: "",
          round: "",
          dense: "",
          icon: "keyboard_arrow_left"
        },
        on: {
          click: t.back
        }
      }), a("q-toolbar-title", [t._v("信息核验")])], 1)], 1), a("div", {
        staticClass: "scroll-container scan-container"
      }, [a("div", {
        staticClass: "scan-none-1"
      }), a("div", {
        staticClass: "scan-box-container"
      }, [a("div", {
        staticClass: "scan-none-2"
      }), a("div", {
        staticClass: "scan-box"
      }, [a("div", {
        staticClass: "scan-box-area"
      }, [a("div", {
        staticClass: "top-left"
      }), a("div", {
        staticClass: "top-right"
      }), a("div", {
        staticClass: "bottom-left"
      }), a("div", {
        staticClass: "bottom-right"
      }), a("div", {
        directives: [{
          name: "show",
          rawName: "v-show",
          value: t.scanning,
          expression: "scanning"
        }],
        staticClass: "through-line"
      }), a("div", {
        staticClass: "light text-center",
        on: {
          click: t.onLightTrigger
        }
      }, [a("q-btn", {
        staticClass: "lighti full-width",
        attrs: {
          flat: "",
          icon: 1 == t.light ? "mdi-flashlight" : "mdi-flashlight-off"
        }
      }), a("span", {
        staticClass: "full-width"
      }, [t._v("轻触 " + t._s(t.light ? "关闭" : "打开"))])], 1)])]), a("div", {
        staticClass: "scan-none-2"
      })]), a("div", {
        staticClass: "scan-none-1"
      }, [t._v("\n      放入框内，自动扫描\n    ")])])], 1)
    },
    s = [],
    i = {
      name: "PageMain",
      data() {
        return {
          light: !1,
          scanning: !0,
          menus: window.localStorage.menu ? JSON.parse(window.localStorage.getItem("menu")) : []
        }
      },
      beforeCreate() {
        document.getElementById("q-app").style.backgroundColor = "transparent", document.querySelector("body").style.backgroundColor = "transparent"
      },
      beforeDestroy() {
        document.getElementById("q-app").style.backgroundColor = "#ffffff", document.querySelector("body").style.backgroundColor = "#ffffff";
        try {
          QRScanner.hide((t => {})), QRScanner.destroy((function(t) {}))
        } catch (t) {}
      },
      destroyed() {
        window.removeEventListener("popstate", this.back, !1)
      },
      mounted() {
        this.onScan(), window.history && window.history.pushState && (history.pushState(null, null, document.URL), window.addEventListener("popstate", this.back, !1))
      },
      computed: {
        scanMenuInfo() {
          return (this.menus || []).find((t => "scanning" === t.id))
        }
      },
      methods: {
        onScan() {
          try {
            QRScanner.show((t => {})), QRScanner.scan(((t, n) => {
              t ? QRScanner.destroy((t => {
                this.$router.back()
              })) : this.scanMenuInfo && this.scanMenuInfo.view_permit && this.$axiosAction("/api/teacher/scanning/scanning.api", {
                action: "decryptQrCodeApp",
                text: n,
                jobType: "V"
              }, "post", !1).then((t => {
                0 === t.data.code ? "leave" === t.data.menu_id ? QRScanner.destroy((() => {
                  this.$router.push({
                    name: "/teacher/scanning/leaveVer",
                    params: {
                      qrcode: n
                    }
                  })
                })) : "signin" === t.data.menu_id && QRScanner.destroy((() => {
                  this.$router.push({
                    name: "/teacher/scanning/signinVer",
                    params: {
                      qrcode: n
                    }
                  })
                })) : (QRScanner.destroy((() => {
                  this.scanning = !1
                })), this.$q.dialog({
                  title: "扫码失败",
                  message: "不合法的二维码。",
                  ok: "重新扫描",
                  cancel: "返回"
                }).onOk((() => {
                  this.onScan()
                })).onCancel((() => {
                  this.$router.back()
                })).onDismiss((() => {})))
              }))
            }))
          } catch (t) {}
        },
        onLightTrigger() {
          try {
            this.light ? QRScanner.disableLight((() => {})) : QRScanner.enableLight((() => {}))
          } catch (t) {
            return
          }
          this.light = !this.light
        },
        back() {
          QRScanner.destroy((() => {
            this.$router.back()
          }))
        }
      }
    },
    o = i,
    c = (a("cc95"), a("2877")),
    r = a("4d5a"),
    l = a("e359"),
    d = a("65c6"),
    h = a("9c40"),
    u = a("6ac5"),
    g = a("eebe"),
    p = a.n(g),
    f = Object(c["a"])(o, e, s, !1, null, "5250ca1a", null);
  n["default"] = f.exports;
  p()(f, "components", {
    QLayout: r["a"],
    QHeader: l["a"],
    QToolbar: d["a"],
    QBtn: h["a"],
    QToolbarTitle: u["a"]
  })
}
