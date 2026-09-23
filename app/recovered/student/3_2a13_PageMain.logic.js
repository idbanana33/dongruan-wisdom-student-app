/**
 * Webpack module logic recovery
 * Source: assets/www/js/3.js -> module "2a13"
 * Route: /student/signin/qrScanning
 * Component guess: PageMain
 * Fidelity: exact module body, beautified only (webpack wrapper retained)
 * Note: variable names inside the original production module are preserved as evidence.
 */
"2a13": function(t, a, e) {
  "use strict";
  e.r(a);
  var s = function() {
      var t = this,
        a = t.$createElement,
        e = t._self._c || a;
      return e("q-layout", {
        attrs: {
          view: "lHh lpr lFf"
        }
      }, [e("q-header", {
        staticClass: "bg-grey-3 text-black"
      }, [e("q-toolbar", [e("q-btn", {
        attrs: {
          flat: "",
          round: "",
          dense: "",
          icon: "keyboard_arrow_left"
        },
        on: {
          click: t.back
        }
      }), e("q-toolbar-title", [t._v("二维码扫描")])], 1)], 1), e("div", {
        staticClass: "scroll-container scan-container"
      }, [e("div", {
        staticClass: "scan-none-1"
      }), e("div", {
        staticClass: "scan-box-container"
      }, [e("div", {
        staticClass: "scan-none-2"
      }), e("div", {
        staticClass: "scan-box"
      }, [e("div", {
        staticClass: "scan-box-area"
      }, [e("div", {
        staticClass: "top-left"
      }), e("div", {
        staticClass: "top-right"
      }), e("div", {
        staticClass: "bottom-left"
      }), e("div", {
        staticClass: "bottom-right"
      }), e("div", {
        directives: [{
          name: "show",
          rawName: "v-show",
          value: t.scanning,
          expression: "scanning"
        }],
        staticClass: "through-line"
      }), e("div", {
        staticClass: "light text-center",
        on: {
          click: t.onLightTrigger
        }
      }, [e("q-btn", {
        staticClass: "lighti full-width",
        attrs: {
          flat: "",
          icon: 1 == t.light ? "mdi-flashlight" : "mdi-flashlight-off"
        }
      }), e("span", {
        staticClass: "full-width"
      }, [t._v("轻触 " + t._s(t.light ? "关闭" : "打开"))])], 1)])]), e("div", {
        staticClass: "scan-none-2"
      })]), e("div", {
        staticClass: "scan-none-1"
      }, [t._v("\n      放入框内，自动扫描\n    ")])]), e("q-dialog", {
        attrs: {
          qrcode: ""
        },
        model: {
          value: t.qrcode,
          callback: function(a) {
            t.qrcode = a
          },
          expression: "qrcode"
        }
      }, [e("q-card", {
        staticStyle: {
          "border-radius": "25px",
          width: "15rem"
        }
      }, [e("q-item", [e("q-item-section", {
        staticClass: "flex flex-center"
      }, [e("q-item-label", {
        staticClass: "text-weight-bold"
      }, [t._v("签到失败")])], 1)], 1), e("q-item", {
        staticClass: "text-center q-mb-sm",
        attrs: {
          dense: ""
        }
      }, [e("q-item-section", [e("q-item-label", {
        staticClass: "text-red"
      }, [t._v("请扫描正确的二维码!")])], 1)], 1), e("q-separator"), e("q-card-actions", {
        attrs: {
          align: "around"
        }
      }, [e("q-btn", {
        attrs: {
          flat: "",
          color: "primary"
        },
        on: {
          click: t.closeQrcode
        }
      }, [t._v("确定")])], 1)], 1)], 1)], 1)
    },
    n = [],
    i = {
      name: "PageMain",
      data() {
        return {
          light: !1,
          id: this.$route.params.id,
          sig: this.$route.params.sig,
          batch_no: this.$route.params.batch_no,
          qrcode: !1,
          scanning: !0
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
      methods: {
        onScan() {
          try {
            QRScanner.show((t => {})), QRScanner.scan(((t, a) => {
              t ? QRScanner.destroy((t => {
                this.$router.back()
              })) : this.$axiosAction("/api/student/signin/signin.api", {
                action: "stuDecryptQrCode",
                text: a,
                id: this.$route.params.id,
                batch_no: this.$route.params.batch_no
              }, "post", !1).then((t => {
                0 === t.data.code ? QRScanner.destroy((() => {
                  this.$router.push({
                    name: "/student/signin/signinSuccess",
                    query: {
                      id: this.$route.params.id,
                      batch_no: this.$route.params.batch_no
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
                  this.scanning = !0, QRScanner.prepare(this.onScan)
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
        closeQrcode() {
          this.qrcode = !1, this.scanning = !0, QRScanner.prepare(this.onScan)
        },
        back() {
          QRScanner.destroy((() => {
            this.$router.push({
              name: "/student/signin/signin",
              query: {
                id: this.$route.params.id,
                batch_no: this.$route.params.batch_no
              }
            })
          }))
        }
      }
    },
    o = i,
    r = (e("c9b2"), e("2877")),
    c = e("4d5a"),
    l = e("e359"),
    d = e("65c6"),
    h = e("9c40"),
    u = e("6ac5"),
    b = e("24e8"),
    g = e("f09f"),
    p = e("66e5"),
    m = e("4074"),
    f = e("0170"),
    y = e("eb85"),
    q = e("4b7e"),
    v = e("eebe"),
    C = e.n(v),
    Q = Object(r["a"])(o, s, n, !1, null, "4c9fd406", null);
  a["default"] = Q.exports;
  C()(Q, "components", {
    QLayout: c["a"],
    QHeader: l["a"],
    QToolbar: d["a"],
    QBtn: h["a"],
    QToolbarTitle: u["a"],
    QDialog: b["a"],
    QCard: g["a"],
    QItem: p["a"],
    QItemSection: m["a"],
    QItemLabel: f["a"],
    QSeparator: y["a"],
    QCardActions: q["a"]
  })
}
