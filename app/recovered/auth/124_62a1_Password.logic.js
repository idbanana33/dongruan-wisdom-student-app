/**
 * Webpack module logic recovery
 * Source: assets/www/js/124.js -> module "62a1"
 * Route: /user/password
 * Component guess: Password
 * Fidelity: exact module body, beautified only (webpack wrapper retained)
 * Note: variable names inside the original production module are preserved as evidence.
 */
"62a1": function(t, s, e) {
  "use strict";
  e.r(s);
  var a = function() {
      var t = this,
        s = this,
        e = s.$createElement,
        a = s._self._c || e;
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
          click: s.goBack
        }
      }), a("q-toolbar-title", [s._v("修改密码")])], 1)], 1), a("q-page-container", [a("q-page", {
        staticClass: "bg-white"
      }, [a("q-form", {
        on: {
          submit: s.onSubmit
        }
      }, [a("q-list", [a("q-item", [a("q-item-section", {
        attrs: {
          avatar: ""
        }
      }, [s._v("原密码")]), a("q-item-section", [a("q-input", {
        attrs: {
          type: s.isPwd0 ? "password" : "text",
          dense: "",
          "hide-bottom-space": "",
          "lazy-rules": "",
          rules: [function(t) {
            return t && t.length > 0 || "请输入原密码"
          }]
        },
        scopedSlots: s._u([{
          key: "append",
          fn: function() {
            return [a("q-icon", {
              staticClass: "cursor-pointer",
              attrs: {
                name: s.isPwd0 ? "visibility_off" : "visibility"
              },
              on: {
                click: function(t) {
                  s.isPwd0 = !s.isPwd0
                }
              }
            })]
          },
          proxy: !0
        }]),
        model: {
          value: s.oldpassword,
          callback: function(t) {
            s.oldpassword = t
          },
          expression: "oldpassword"
        }
      })], 1)], 1), a("q-item", [a("q-item-section", {
        attrs: {
          avatar: ""
        }
      }, [s._v("新密码")]), a("q-item-section", [a("q-input", {
        ref: "password",
        attrs: {
          type: s.isPwd ? "password" : "text",
          dense: "",
          "hide-bottom-space": "",
          "lazy-rules": "",
          rules: [function(t) {
            return s.checkPwd(t)
          }]
        },
        on: {
          blur: s.validConfirmPwd
        },
        scopedSlots: s._u([{
          key: "append",
          fn: function() {
            return [a("q-icon", {
              staticClass: "cursor-pointer",
              attrs: {
                name: s.isPwd ? "visibility_off" : "visibility"
              },
              on: {
                click: function(t) {
                  s.isPwd = !s.isPwd
                }
              }
            })]
          },
          proxy: !0
        }]),
        model: {
          value: s.newpassword,
          callback: function(t) {
            s.newpassword = t
          },
          expression: "newpassword"
        }
      })], 1)], 1), a("q-item", [a("q-item-section", {
        attrs: {
          avatar: ""
        }
      }, [s._v("确认密码")]), a("q-item-section", [a("q-input", {
        ref: "password2",
        attrs: {
          type: s.isPwd2 ? "password" : "text",
          dense: "",
          "hide-bottom-space": "",
          "lazy-rules": "",
          rules: [function(s) {
            return s == t.$refs.password.value || "两次密码输入的不一致"
          }]
        },
        scopedSlots: s._u([{
          key: "append",
          fn: function() {
            return [a("q-icon", {
              staticClass: "cursor-pointer",
              attrs: {
                name: s.isPwd2 ? "visibility_off" : "visibility"
              },
              on: {
                click: function(t) {
                  s.isPwd2 = !s.isPwd2
                }
              }
            })]
          },
          proxy: !0
        }]),
        model: {
          value: s.password2,
          callback: function(t) {
            s.password2 = t
          },
          expression: "password2"
        }
      })], 1)], 1), a("q-item", [a("q-item-section", [a("q-btn", {
        staticClass: "full-width",
        attrs: {
          unelevated: "",
          label: "修改",
          type: "submit",
          color: "primary"
        }
      })], 1)], 1)], 1)], 1)], 1)], 1)], 1)
    },
    o = [],
    i = {
      name: "Password",
      data() {
        return {
          oldpassword: null,
          newpassword: null,
          password2: null,
          isPwd0: !0,
          isPwd: !0,
          isPwd2: !0
        }
      },
      methods: {
        checkPwd(t) {
          const s = new RegExp("^(?=.*[A-Z])(?=.*[a-z])(?=.*[0-9])(?=.*[~!@#$%^&*)(_+}{|:?><]).{8,30}$");
          return !!s.test(t) || "密码中必须包含大小写字母、数字、特殊字符，至少8个字符，最多30个字符。"
        },
        validConfirmPwd() {
          this.$refs.password2.validate()
        },
        onSubmit() {
          let t = "";
          t = "S" === JSON.parse(window.localStorage.userinfo).role_type ? "updateStudentPassword" : "T" === JSON.parse(window.localStorage.userinfo).role_type ? "updateTeacherPassword" : "updateMaintainerPassword", this.$axiosAction("/api/user/user.api", {
            action: t,
            id: window.localStorage.userinfo.id,
            oldpassword: this.oldpassword,
            newpassword: this.newpassword
          }).then((t => {
            0 === t.data.code && this.$router.push("/user/login")
          }))
        },
        goBack() {
          this.$router.push("/user/account")
        }
      }
    },
    n = i,
    r = e("2877"),
    l = e("4d5a"),
    d = e("e359"),
    c = e("65c6"),
    u = e("9c40"),
    p = e("6ac5"),
    w = e("09e3"),
    f = e("9989"),
    m = e("0378"),
    b = e("1c1c"),
    q = e("66e5"),
    h = e("4074"),
    P = e("27f9"),
    v = e("0016"),
    y = e("eebe"),
    k = e.n(y),
    _ = Object(r["a"])(n, a, o, !1, null, null, null);
  s["default"] = _.exports;
  k()(_, "components", {
    QLayout: l["a"],
    QHeader: d["a"],
    QToolbar: c["a"],
    QBtn: u["a"],
    QToolbarTitle: p["a"],
    QPageContainer: w["a"],
    QPage: f["a"],
    QForm: m["a"],
    QList: b["a"],
    QItem: q["a"],
    QItemSection: h["a"],
    QInput: P["a"],
    QIcon: v["a"]
  })
}
