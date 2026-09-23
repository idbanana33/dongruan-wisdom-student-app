/**
 * Webpack module logic recovery
 * Source: assets/www/js/94.js -> module "6b6a"
 * Route: /teacher/news/detail
 * Component guess: newsDetail
 * Fidelity: exact module body, beautified only (webpack wrapper retained)
 * Note: variable names inside the original production module are preserved as evidence.
 */
"6b6a": function(e, t, s) {
  "use strict";
  s.r(t);
  var a = function() {
      var e = this,
        t = this,
        s = t.$createElement,
        a = t._self._c || s;
      return t.menuInfo ? a("q-layout", {
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
          click: t.goBack
        }
      }), a("q-toolbar-title", [t._v(t._s(t.menuInfo.title) + "详情")])], 1), "A" == t.roleId || t.news.is_author ? a("q-expansion-item", {
        staticClass: "bg-white full-width q-ml-sm",
        attrs: {
          "switch-toggle-side": "",
          "expand-icon-toggle": "",
          "expand-separator": ""
        },
        scopedSlots: t._u([{
          key: "header",
          fn: function() {
            return [a("q-item-section", [a("q-item-label", {
              staticStyle: {
                "font-size": "1.3em"
              }
            }, [t._v(t._s(t.news.title))])], 1), a("q-item-section", {
              attrs: {
                side: ""
              }
            }, [a("q-btn", {
              attrs: {
                flat: "",
                dense: "",
                icon: "more_vert",
                size: "sm"
              },
              on: {
                click: function(e) {
                  t.drawerRight = !t.drawerRight
                }
              }
            })], 1)]
          },
          proxy: !0
        }], null, !1, 3618729250)
      }, [a("q-card", [a("q-card-section", [a("div", {
        staticClass: "row"
      }, [a("div", [a("span", {
        staticClass: "text-grey neu-css-after-colon"
      }, [t._v("发布者")]), t._v(t._s(t.news.name) + "\n            ")])]), a("div", {
        staticClass: "row"
      }, [a("div", {
        staticClass: "col-12"
      }, [a("span", {
        staticClass: "text-grey neu-css-after-colon"
      }, [t._v("发布时间")]), t._v(t._s(t.news.create_time) + "\n            ")])]), a("div", {
        staticClass: "row"
      }, [a("div", {
        staticClass: "col-12"
      }, [a("span", {
        staticClass: "text-grey neu-css-after-colon"
      }, [t._v("结束时间")]), t._v(t._s(null == t.news.banner_end_date ? "未设置" : t.news.banner_end_date) + "\n            ")])]), a("div", {
        staticClass: "row"
      }, [a("div", {
        staticClass: "col-6"
      }, [a("span", {
        staticClass: "text-grey neu-css-after-colon"
      }, [t._v("推送教师")]), t._v(t._s(t.news.push_teacher) + "\n            ")]), a("div", {
        staticClass: "col-6"
      }, [a("span", {
        staticClass: "text-grey neu-css-after-colon"
      }, [t._v("推送在籍学生")]), t._v(t._s(t.news.push_student) + "\n            ")])]), "" != t.news.link && null != t.news.link ? a("div", {
        staticClass: "row"
      }, [a("div", [a("span", {
        staticClass: "text-grey neu-css-after-colon"
      }, [t._v("链接新闻")]), "" != t.news.link && null != t.news.link ? a("span", {
        staticStyle: {
          color: "blue"
        },
        on: {
          click: t.openLink
        }
      }, [t._v(t._s(t.news.link))]) : t._e()])]) : t._e(), "" !== t.news.dep_name && null !== t.news.dep_name ? a("div", {
        staticClass: "row"
      }, [a("div", {
        staticClass: "col-12"
      }, [a("span", {
        staticClass: "text-grey neu-css-after-colon"
      }, [t._v("发布单位")]), t._v(t._s(t.news.dep_name) + "\n            ")])]) : t._e()])], 1)], 1) : t._e()], 1), a("q-page-container", [a("q-page", {
        staticClass: "bg-grey-3 q-py-sm"
      }, [a("q-card", {
        staticClass: "bg-white q-mb-sm q-mx-sm",
        attrs: {
          flat: ""
        }
      }, ["A" === t.roleId || t.news.is_author ? t._e() : a("q-card-section", {
        staticClass: "text-center"
      }, [a("h5", [t._v(t._s(t.news.title))])]), "A" === t.roleId || t.news.is_author ? t._e() : a("q-card-section", {
        staticClass: "text-right text-grey"
      }, [a("div", [t._v("发布者：" + t._s(t.news.name))]), null !== t.news.dep_name ? a("div", [t._v("发布单位：" + t._s(t.news.dep_name))]) : t._e(), a("div", [t._v("发布时间：" + t._s(t.news.create_time))])]), a("q-card-section", ["" !== t.news.detail && null !== t.news.detail ? a("q-editor", {
        attrs: {
          flat: "",
          "min-height": "10em",
          readonly: "",
          toolbar: [],
          "hide-bottom-space": ""
        },
        model: {
          value: t.news.detail,
          callback: function(e) {
            t.$set(t.news, "detail", e)
          },
          expression: "news.detail"
        }
      }) : t._e()], 1), a("q-card-section", {
        staticClass: "text-right"
      }, [a("span", {
        staticClass: "text-grey"
      }, [t._v("阅读量：" + t._s(t.count))])])], 1)], 1)], 1), a("q-drawer", {
        attrs: {
          side: "right",
          width: 200,
          breakpoint: 100,
          overlay: "",
          bordered: "",
          "content-class": "bg-white-3"
        },
        model: {
          value: t.drawerRight,
          callback: function(e) {
            t.drawerRight = e
          },
          expression: "drawerRight"
        }
      }, [a("q-scroll-area", {
        staticClass: "fit"
      }, [a("q-list", {
        staticStyle: {
          "border-left": "0.15rem solid #027be3"
        },
        attrs: {
          separator: ""
        }
      }, ["1" != t.news.status_color && "2" != t.news.status_color || !t.news.is_author ? t._e() : a("q-item", {
        directives: [{
          name: "ripple",
          rawName: "v-ripple"
        }],
        attrs: {
          clickable: ""
        },
        on: {
          click: t.openExtendDialog
        }
      }, [a("q-item-section", {
        attrs: {
          avatar: ""
        }
      }, [a("q-icon", {
        attrs: {
          name: "access_time",
          size: "sm",
          color: "primary"
        }
      })], 1), a("q-item-section", {
        staticClass: "text-primary",
        staticStyle: {
          "font-size": "1.1rem"
        }
      }, [t._v("延期")])], 1), "0" == t.news.status_color && t.news.is_author ? a("q-item", {
        directives: [{
          name: "ripple",
          rawName: "v-ripple"
        }],
        attrs: {
          clickable: ""
        },
        on: {
          click: t.openExtendDialog
        }
      }, [a("q-item-section", {
        attrs: {
          avatar: ""
        }
      }, [a("q-icon", {
        attrs: {
          name: "access_time",
          size: "sm",
          color: "primary"
        }
      })], 1), a("q-item-section", {
        staticClass: "text-primary",
        staticStyle: {
          "font-size": "1.1rem"
        }
      }, [t._v("设置结束时间")])], 1) : t._e(), t.news.is_author || "A" == t.roleId ? a("q-item", {
        directives: [{
          name: "ripple",
          rawName: "v-ripple"
        }],
        attrs: {
          clickable: ""
        },
        on: {
          click: t.deleteNews
        }
      }, [a("q-item-section", {
        attrs: {
          avatar: ""
        }
      }, [a("q-icon", {
        attrs: {
          name: "delete",
          size: "sm",
          color: "red"
        }
      })], 1), a("q-item-section", {
        staticClass: "text-red",
        staticStyle: {
          "font-size": "1.1rem"
        }
      }, [t._v("删除")])], 1) : t._e()], 1)], 1)], 1), a("q-dialog", {
        attrs: {
          persistent: ""
        },
        model: {
          value: t.extendDialog,
          callback: function(e) {
            t.extendDialog = e
          },
          expression: "extendDialog"
        }
      }, [a("q-card", {
        staticClass: "full-width",
        attrs: {
          flat: ""
        }
      }, [a("q-form", {
        on: {
          submit: t.updateDate
        }
      }, [a("q-card-section", {
        staticClass: "text-h6"
      }, [t._v("\n              " + t._s("1" == t.news.status_color ? "确认延期" : "设置结束时间") + "\n            ")]), a("q-card-section", [a("div", {
        staticClass: "row items-center"
      }, [t._v("\n                " + t._s("1" == t.news.status_color ? "延期" : "设置") + "结束日期至：\n                "), a("q-field", {
        staticStyle: {
          width: "200px"
        },
        attrs: {
          outlined: "",
          dense: "",
          "stack-label": "",
          "hide-bottom-space": "",
          "lazy-rules": "",
          rules: [function(e) {
            return !!e || "请填写该项"
          }, function(t) {
            return t >= e.news.banner_end_date || "请填写原截止日期之后或未来的日期，新设置不能设置今天"
          }],
          value: t.endDate
        },
        scopedSlots: t._u([{
          key: "control",
          fn: function() {
            return [t._v(t._s(t.endDate))]
          },
          proxy: !0
        }, {
          key: "append",
          fn: function() {
            return [a("q-icon", {
              staticClass: "cursor-pointer",
              attrs: {
                name: "event"
              }
            }, [a("q-popup-proxy", {
              attrs: {
                "transition-show": "scale",
                "transition-hide": "scale"
              }
            }, [a("div", [a("q-date", {
              attrs: {
                flat: "",
                minimal: "",
                mask: "YYYY-MM-DD HH:mm"
              },
              model: {
                value: t.endDate,
                callback: function(e) {
                  t.endDate = e
                },
                expression: "endDate"
              }
            }, [a("div", {
              staticClass: "row items-center justify-end"
            }, [a("q-btn", {
              directives: [{
                name: "close-popup",
                rawName: "v-close-popup"
              }],
              attrs: {
                dense: "",
                label: "关闭",
                flat: ""
              }
            })], 1)])], 1)])], 1), a("q-icon", {
              staticClass: "cursor-pointer",
              attrs: {
                name: "access_time"
              }
            }, [a("q-popup-proxy", {
              attrs: {
                "transition-show": "scale",
                "transition-hide": "scale"
              }
            }, [a("div", {
              staticClass: "row items-start"
            }, [a("q-time", {
              attrs: {
                flat: "",
                mask: "YYYY-MM-DD HH:mm",
                format24h: ""
              },
              model: {
                value: t.endDate,
                callback: function(e) {
                  t.endDate = e
                },
                expression: "endDate"
              }
            }, [a("div", {
              staticClass: "row items-center justify-end"
            }, [a("q-btn", {
              directives: [{
                name: "close-popup",
                rawName: "v-close-popup"
              }],
              attrs: {
                dense: "",
                label: "关闭",
                flat: ""
              }
            })], 1)])], 1)])], 1)]
          },
          proxy: !0
        }], null, !1, 971780568)
      }), a("span", {
        staticClass: "text-grey text-caption"
      }, [t._v("设置该新闻在app主页中轮播的结束时间，不设置则不在app轮播中显示")])], 1)]), a("q-card-section", {
        staticClass: "row q-gutter-sm justify-end"
      }, [a("q-btn", {
        attrs: {
          outline: "",
          color: "grey",
          label: "取消"
        },
        on: {
          click: function(e) {
            return t.closeDialog()
          }
        }
      }), a("q-btn", {
        attrs: {
          unelevated: "",
          color: "primary",
          label: "1" == t.news.status_color ? "延期" : "设置",
          type: "submit"
        }
      })], 1)], 1)], 1)], 1)], 1) : t.menuInfo ? t._e() : a("q-layout", [a("q-card", {
        staticStyle: {
          height: "3.5rem",
          "align-items": "center",
          display: "flex",
          "justify-content": "center"
        },
        attrs: {
          flat: ""
        }
      }, [t._v("\n    无访问权限\n  ")])], 1)
    },
    i = [],
    n = {
      name: "newsDetail",
      data() {
        return {
          roleId: JSON.parse(window.localStorage.getItem("userinfo")).role_id,
          role_type: JSON.parse(window.localStorage.getItem("userinfo")).role_type,
          drawerRight: !1,
          id: null,
          menuInfo: null,
          news: {
            detail: ""
          },
          extendDialog: !1,
          endDate: "",
          count: 0
        }
      },
      destroyed() {
        window.removeEventListener("popstate", this.goBack, !1)
      },
      mounted() {
        this.id = this.$route.query.id, window.localStorage.getItem("menu") && (this.menuInfo = JSON.parse(window.localStorage.getItem("menu")).find((e => "news" === e.id))), this.$axiosAction("/api/teacher/news/news.api", {
          action: "insertNewsLog",
          id: this.id,
          roleId: this.roleId,
          role_type: this.role_type
        }).then((e => {
          0 === e.data.code || 2001 === e.data.code && this.goBack()
        })).catch((e => {
          this.$showErrorNotify("系统错误")
        })), window.history && window.history.pushState && (history.pushState(null, null, document.URL), window.addEventListener("popstate", this.goBack, !1)), this.getDetailInfo()
      },
      methods: {
        getDetailInfo() {
          this.$q.loading.show(), this.$axiosAction("/api/teacher/news/news.api", {
            action: "getNewsList",
            id: this.id,
            roleId: this.roleId
          }).then((e => {
            0 === e.data.code && (this.news = e.data.result.list[0], this.count = e.data.count.count, this.news.is_author || "A" === this.roleId || 1 !== this.news.external_flag || (cordova.InAppBrowser.open(this.news.link, "_system"), "S" === this.role_type ? this.$router.push("/student/index") : this.$router.push("/teacher/index"))), this.$q.loading.hide()
          })).catch((e => {
            this.news = {}, this.$q.loading.hide()
          }))
        },
        goBack() {
          "S" === this.role_type ? this.$router.push("/student/news/index") : this.$router.push("/teacher/news/index")
        },
        openLink() {
          cordova.InAppBrowser.open(this.news.link, "_system")
        },
        deleteNews() {
          this.$q.dialog({
            title: "确认删除",
            message: "该新闻将被删除。</span>",
            html: !0,
            persistent: !0,
            cancel: {
              label: "取消",
              outline: !0,
              color: "grey"
            },
            ok: {
              label: "删除",
              unelevated: !0,
              color: "negative"
            }
          }).onOk((() => {
            this.$q.loading.show(), this.$axiosAction("/api/teacher/news/news.api", {
              action: "deleteNews",
              id: this.id,
              roleId: this.roleId,
              title: this.news.title
            }).then((e => {
              0 === e.data.code && this.$router.push("/teacher/news/index"), this.$q.loading.hide()
            })).catch((e => {
              this.$q.loading.hide()
            }))
          }))
        },
        openExtendDialog() {
          if ("0" === this.news.status_color) {
            const e = new Date,
              t = e.getFullYear();
            let s = e.getMonth() + 1;
            s < 10 && (s = "0" + s.toString());
            const a = e.getDate();
            this.news.banner_end_date = t.toString() + "-" + s.toString() + "-" + a.toString() + " 23:59"
          }
          this.endDate = this.news.banner_end_date, this.extendDialog = !0
        },
        updateDate() {
          this.$q.loading.show(), this.$axiosAction("/api/teacher/news/news.api", {
            action: "updateTime",
            id: this.id,
            endDate: this.endDate,
            roleId: this.roleId
          }).then((e => {
            0 === e.data.code && (this.extendDialog = !1, this.getDetailInfo()), this.$q.loading.hide()
          })).catch((e => {
            this.news = {}, this.$q.loading.hide()
          }))
        },
        closeDialog() {
          this.extendDialog = !1, "0" === this.news.status_color && (this.news.banner_end_date = "", this.endDate = "")
        }
      }
    },
    o = n,
    r = s("2877"),
    l = s("4d5a"),
    c = s("e359"),
    d = s("65c6"),
    p = s("9c40"),
    h = s("6ac5"),
    u = s("3b73"),
    w = s("4074"),
    m = s("0170"),
    _ = s("f09f"),
    g = s("a370"),
    v = s("09e3"),
    f = s("9989"),
    q = s("d66b"),
    y = s("9404"),
    b = s("4983"),
    x = s("1c1c"),
    C = s("66e5"),
    k = s("0016"),
    D = s("24e8"),
    I = s("0378"),
    S = s("8572"),
    Q = s("7cbe"),
    $ = s("52ee"),
    N = s("ca78"),
    A = s("714f"),
    L = s("7f67"),
    z = s("eebe"),
    E = s.n(z),
    Y = Object(r["a"])(o, a, i, !1, null, null, null);
  t["default"] = Y.exports;
  E()(Y, "components", {
    QLayout: l["a"],
    QHeader: c["a"],
    QToolbar: d["a"],
    QBtn: p["a"],
    QToolbarTitle: h["a"],
    QExpansionItem: u["a"],
    QItemSection: w["a"],
    QItemLabel: m["a"],
    QCard: _["a"],
    QCardSection: g["a"],
    QPageContainer: v["a"],
    QPage: f["a"],
    QEditor: q["a"],
    QDrawer: y["a"],
    QScrollArea: b["a"],
    QList: x["a"],
    QItem: C["a"],
    QIcon: k["a"],
    QDialog: D["a"],
    QForm: I["a"],
    QField: S["a"],
    QPopupProxy: Q["a"],
    QDate: $["a"],
    QTime: N["a"]
  }), E()(Y, "directives", {
    Ripple: A["a"],
    ClosePopup: L["a"]
  })
}
