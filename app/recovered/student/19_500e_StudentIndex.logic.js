/**
 * Webpack module logic recovery
 * Source: assets/www/js/19.js -> module "500e"
 * Route: /student/index
 * Component guess: StudentIndex
 * Fidelity: exact module body, beautified only (webpack wrapper retained)
 * Note: variable names inside the original production module are preserved as evidence.
 */
"500e": function(t, e, s) {
  "use strict";
  s.r(e);
  var o = function() {
      var t = this,
        e = t.$createElement,
        s = t._self._c || e;
      return s("q-layout", {
        attrs: {
          view: "lHh lpr lFf"
        }
      }, [s("q-header", {
        staticClass: "bg-grey-3 text-black"
      }, [s("q-toolbar", [s("q-btn", {
        attrs: {
          flat: "",
          round: "",
          dense: "",
          icon: "reorder"
        },
        on: {
          click: function(e) {
            t.drawer = !t.drawer
          }
        }
      }), s("q-toolbar-title", [t._v("智慧学工")]), s("q-btn", {
        attrs: {
          flat: "",
          round: "",
          dense: "",
          icon: "mail_outline",
          to: "/student/todo"
        }
      }, [s("q-badge", {
        directives: [{
          name: "show",
          rawName: "v-show",
          value: 0 != t.badgeCount,
          expression: "badgeCount != 0"
        }],
        attrs: {
          color: "red",
          floating: "",
          rounded: ""
        }
      }, [t._v(t._s(t.badgeCount > 99 ? "···" : t.badgeCount))])], 1)], 1)], 1), s("q-drawer", {
        attrs: {
          width: 250,
          overlay: "",
          bordered: "",
          "content-class": "bg-grey-3"
        },
        model: {
          value: t.drawer,
          callback: function(e) {
            t.drawer = e
          },
          expression: "drawer"
        }
      }, [s("q-scroll-area", {
        staticClass: "fit"
      }, [s("div", {
        staticClass: "row q-ma-md"
      }, [s("span", {
        staticStyle: {
          "font-size": "17px"
        }
      }, [t._v("您好，" + t._s(t.user.name) + "同学")])]), s("q-card", {
        staticClass: "q-ma-sm",
        attrs: {
          flat: ""
        }
      }, [s("q-list", [s("q-item", {
        directives: [{
          name: "ripple",
          rawName: "v-ripple"
        }],
        attrs: {
          clickable: ""
        },
        on: {
          click: function(e) {
            return t.moveTo("/user/account")
          }
        }
      }, [s("q-item-section", [t._v("账号安全")]), s("q-item-section", {
        attrs: {
          side: ""
        }
      }, [s("q-icon", {
        attrs: {
          name: "keyboard_arrow_right",
          size: "sm"
        }
      })], 1)], 1), s("q-separator", {
        staticClass: "bg-grey-3",
        staticStyle: {
          height: "0.5rem"
        }
      }), s("q-item", {
        directives: [{
          name: "ripple",
          rawName: "v-ripple"
        }],
        attrs: {
          clickable: ""
        },
        on: {
          click: function(e) {
            return t.moveTo("/student/basic/stuInfo")
          }
        }
      }, [s("q-item-section", [t._v("我的信息")]), s("q-item-section", {
        attrs: {
          side: ""
        }
      }, [s("q-icon", {
        attrs: {
          name: "keyboard_arrow_right",
          size: "sm"
        }
      })], 1)], 1), s("q-separator", {
        staticClass: "bg-grey-3",
        staticStyle: {
          height: "0.5rem"
        }
      }), s("q-item", {
        directives: [{
          name: "ripple",
          rawName: "v-ripple"
        }],
        attrs: {
          clickable: ""
        },
        on: {
          click: function(e) {
            return t.moveTo("/user/qrCode")
          }
        }
      }, [s("q-item-section", [t._v("我的二维码")]), s("q-item-section", {
        attrs: {
          side: ""
        }
      }, [s("q-icon", {
        attrs: {
          name: "keyboard_arrow_right",
          size: "sm"
        }
      })], 1)], 1), s("q-separator", {
        staticClass: "bg-grey-3",
        staticStyle: {
          height: "0.5rem"
        }
      }), s("q-item", {
        directives: [{
          name: "ripple",
          rawName: "v-ripple"
        }],
        attrs: {
          clickable: ""
        },
        on: {
          click: t.goExperience
        }
      }, [s("q-item-section", [t._v("综合统计")]), s("q-item-section", {
        attrs: {
          side: ""
        }
      }, [s("q-icon", {
        attrs: {
          name: "keyboard_arrow_right",
          size: "sm"
        }
      })], 1)], 1), s("q-separator", {
        staticClass: "bg-grey-3",
        staticStyle: {
          height: "0.5rem"
        }
      }), s("q-item", {
        directives: [{
          name: "ripple",
          rawName: "v-ripple"
        }],
        attrs: {
          clickable: ""
        },
        on: {
          click: function(e) {
            return t.moveTo("/user/passport?direction=in")
          }
        }
      }, [s("q-item-section", [t._v("入校通行卡")]), s("q-item-section", {
        attrs: {
          side: ""
        }
      }, [s("q-icon", {
        attrs: {
          name: "keyboard_arrow_right",
          size: "sm"
        }
      })], 1)], 1), s("q-separator", {
        staticClass: "bg-grey-3",
        staticStyle: {
          height: "0.5rem"
        }
      }), s("q-item", {
        directives: [{
          name: "ripple",
          rawName: "v-ripple"
        }],
        attrs: {
          clickable: ""
        },
        on: {
          click: function(e) {
            return t.moveTo("/user/passport?direction=out")
          }
        }
      }, [s("q-item-section", [t._v("离校通行卡")]), s("q-item-section", {
        attrs: {
          side: ""
        }
      }, [s("q-icon", {
        attrs: {
          name: "keyboard_arrow_right",
          size: "sm"
        }
      })], 1)], 1), s("q-separator", {
        staticClass: "bg-grey-3",
        staticStyle: {
          height: "0.5rem"
        }
      }), s("q-item", {
        attrs: {
          clickable: ""
        },
        on: {
          click: t.checkVersion
        }
      }, [s("q-item-section", {
        staticClass: "text-center"
      }, [t._v("检查新版本")])], 1), s("q-separator", {
        staticClass: "bg-grey-3",
        staticStyle: {
          height: "0.5rem"
        }
      }), s("q-item", {
        attrs: {
          clickable: ""
        },
        on: {
          click: t.logout
        }
      }, [s("q-item-section", {
        staticClass: "text-center text-red"
      }, [t._v("退出当前帐号")])], 1)], 1)], 1)], 1), s("div", {
        staticClass: "text-grey text-center absolute-bottom q-mb-xs"
      }, [s("div", [s("span", {
        staticClass: "text-primary",
        on: {
          click: function(e) {
            return t.moveTo("/policy/termsOfUse")
          }
        }
      }, [t._v("用户协议")]), s("span", {
        staticClass: "text-grey"
      }, [t._v(" | ")]), s("span", {
        staticClass: "text-primary",
        on: {
          click: function(e) {
            return t.moveTo("/policy/privacyPolicy")
          }
        }
      }, [t._v("隐私政策")])]), s("div", [t._v(t._s(t.title) + " v" + t._s(t.appVer))])])], 1), s("q-page-container", [s("q-page", {
        staticClass: "bg-grey-3"
      }, [t.newsInfo && t.newsInfo.view_permit && 0 !== t.newslist.length ? s("q-card", {
        staticClass: "q-px-sm q-pb-xs bg-grey-3",
        attrs: {
          flat: ""
        }
      }, [s("q-item", {
        staticClass: "text-white",
        style: "background-color: #" + t.menuColor + ";"
      }, [s("q-item-section", {
        attrs: {
          avatar: ""
        }
      }, [s("q-icon", {
        attrs: {
          size: "sm",
          name: "mdi-trumpet"
        }
      })], 1), s("q-item-section", {
        on: {
          click: function(e) {
            return t.toNews(t.newslist[t.topId].id, t.newslist[t.topId].link)
          }
        }
      }, [t._v("\n            " + t._s(t.newstitle) + "\n          ")])], 1)], 1) : t._e(), s("q-pull-to-refresh", {
        on: {
          refresh: t.refreshMenu
        }
      }, [t.topApps ? s("div", {
        staticClass: "q-px-sm q-py-xs"
      }, [s("div", {
        staticClass: "row items-start q-gutter-sm"
      }, [s("q-responsive", {
        staticClass: "col",
        attrs: {
          ratio: 1
        },
        on: {
          click: function(e) {
            return t.moveTo(t.topApps[0].link)
          }
        }
      }, [s("div", {
        staticClass: "rounded-borders q-pa-sm",
        class: ["bg-" + (t.topApps[0].color.background, t.topApps[0].color.background), "text-" + t.topApps[0].color.text]
      }, [t._v("\n                " + t._s(t.topApps[0].title) + "\n                "), s("q-icon", {
        staticClass: "absolute-bottom-right q-mb-sm q-mr-sm",
        attrs: {
          size: "xl",
          name: t.topApps[0].icon
        }
      })], 1)]), s("q-responsive", {
        staticClass: "col",
        attrs: {
          ratio: 1
        }
      }, [s("div", {
        staticClass: "column justify-between"
      }, [s("div", {
        staticClass: "col row"
      }, [s("q-responsive", {
        staticClass: "col",
        attrs: {
          ratio: 2
        },
        on: {
          click: function(e) {
            return t.moveTo(t.topApps[1].link)
          }
        }
      }, [s("div", {
        staticClass: "rounded-borders q-pa-sm",
        class: ["bg-" + (t.topApps[1].color.background, t.topApps[1].color.background), "text-" + t.topApps[1].color.text]
      }, [t._v("\n                      " + t._s(t.topApps[1].title) + "\n                      "), s("q-icon", {
        staticClass: "absolute-bottom-right q-mb-sm q-mr-sm",
        attrs: {
          size: "sm",
          name: t.topApps[1].icon
        }
      })], 1)])], 1), s("div", {
        staticClass: "col row q-mt-sm"
      }, [s("q-responsive", {
        staticClass: "col",
        attrs: {
          ratio: 1
        },
        on: {
          click: function(e) {
            return t.moveTo(t.topApps[2].link)
          }
        }
      }, [s("div", {
        staticClass: "rounded-borders q-pa-sm",
        class: ["bg-" + (t.topApps[2].color.background, t.topApps[2].color.background), "text-" + t.topApps[2].color.text]
      }, [t._v("\n                      " + t._s(t.topApps[2].title) + "\n                      "), s("q-icon", {
        staticClass: "absolute-bottom-right q-mb-sm q-mr-sm",
        attrs: {
          size: "sm",
          name: t.topApps[2].icon
        }
      })], 1)]), s("q-responsive", {
        staticClass: "col q-ml-sm",
        attrs: {
          ratio: 1
        },
        on: {
          click: function(e) {
            return t.moveTo(t.topApps[3].link)
          }
        }
      }, [s("div", {
        staticClass: "rounded-borders q-pa-sm",
        class: ["bg-" + (t.topApps[3].color.background, t.topApps[3].color.background), "text-" + t.topApps[3].color.text]
      }, [t._v("\n                      " + t._s(t.topApps[3].title) + "\n                      "), s("q-icon", {
        staticClass: "absolute-bottom-right q-mb-sm q-mr-sm",
        attrs: {
          size: "sm",
          name: t.topApps[3].icon
        }
      })], 1)])], 1)])])], 1)]) : t._e(), t._l(Math.ceil((t.normalApps ? t.normalApps.length : 0) / 4), (function(e) {
        return s("div", {
          key: e,
          staticClass: "q-px-sm q-py-xs"
        }, [s("div", {
          staticClass: "row items-start q-gutter-sm"
        }, t._l(Math.min((t.normalApps ? t.normalApps.length : 0) - 4 * (e - 1), 4), (function(o) {
          return s("q-responsive", {
            key: o,
            staticClass: "col",
            attrs: {
              ratio: 4 / Math.min((t.normalApps ? t.normalApps.length : 0) - 4 * (e - 1), 4) / 1
            },
            on: {
              click: function(s) {
                t.moveTo(t.normalApps[4 * (e - 1) + o - 1].link)
              }
            }
          }, [s("div", {
            staticClass: "rounded-borders q-pa-sm",
            class: ["bg-" + (t.normalApps[4 * (e - 1) + o - 1].color.background, t.normalApps[4 * (e - 1) + o - 1].color.background), "text-" + t.normalApps[4 * (e - 1) + o - 1].color.text]
          }, [t._v("\n                " + t._s(t.normalApps[4 * (e - 1) + o - 1].title) + "\n                "), s("q-icon", {
            staticClass: "absolute-bottom-right q-mb-sm q-mr-sm",
            attrs: {
              size: "sm",
              name: t.normalApps[4 * (e - 1) + o - 1].icon
            }
          })], 1)])
        })), 1)])
      }))], 2)], 1)], 1)], 1)
    },
    a = [],
    i = (s("13d5"), s("ad56")),
    r = {
      name: "StudentIndex",
      data() {
        return {
          appVer: window.localStorage.appversion,
          title: this.$appConf.title,
          drawer: !1,
          note: !1,
          menus: window.localStorage.menu ? JSON.parse(window.localStorage.getItem("menu")) : [],
          user: window.localStorage.userinfo ? JSON.parse(window.localStorage.getItem("userinfo")) : {},
          newslist: [],
          newstitle: "加载中",
          menuColor: Object(i["d"])("news"),
          topId: 0,
          badgeCount: 0
        }
      },
      mounted() {
        window.history && window.history.pushState && (history.pushState(null, null, document.URL), window.addEventListener("popstate", this.goBack, !1)), this.appVer !== window.localStorage.getItem("menuappver") && this.refreshMenu((() => {})), this.newList(), this.refreshTodoBadge()
      },
      created() {
        document.addEventListener("backbutton", this.backButton, !1), document.addEventListener("refreshTodoBadge", this.refreshTodoBadge, !1)
      },
      destroyed() {
        window.removeEventListener("popstate", this.goBack, !1), document.removeEventListener("backbutton", this.exitApp, !1), document.removeEventListener("backbutton", this.backButton, !1), document.removeEventListener("refreshTodoBadge", this.refreshTodoBadge, !1)
      },
      computed: {
        apps() {
          return (this.menus || []).reduce(((t, e) => "S" === e.domain ? t.concat(e) : t), [])
        },
        topApps() {
          return this.apps && this.apps.length > 3 ? this.apps.reduce(((t, e, s) => s < 4 ? t.concat(e) : t), []) : null
        },
        normalApps() {
          return this.apps && this.apps.length > 3 ? this.apps.reduce(((t, e, s) => s > 3 ? t.concat(e) : t), []) : this.apps
        },
        newsInfo() {
          return (this.menus || []).find((t => "news" === t.id))
        }
      },
      watch: {
        topId() {
          this.setCarousel()
        }
      },
      methods: {
        refreshTodoBadge() {
          cordova.plugins.notification.badge.get((t => {
            this.badgeCount = t
          }))
        },
        moveTo(t) {
          t && this.$router.push(t)
        },
        logout() {
          this.$q.dialog({
            title: "确认",
            message: "是否退出当前帐号？",
            persistent: !0,
            cancel: {
              label: "取消",
              outline: !0,
              color: "grey"
            },
            ok: {
              label: "确认",
              unelevated: !0,
              color: "negative"
            }
          }).onOk((() => {
            this.$axiosAction("/api/user/user.api", {
              action: "logout"
            }).then((t => {
              this.$addStorageEvent(1, "userinfo", null, !0), this.$addStorageEvent(1, "menu", null, !0), this.$addStorageEvent(1, "menuappver", null, !0), JPush.deleteAlias({
                sequence: 1
              }, null, null);
              const e = new CustomEvent("setNotificationBadge", {
                detail: {
                  badge: 0
                }
              });
              window.dispatchEvent(e), this.$router.push("/")
            }))
          }))
        },
        goBack() {
          history.pushState(null, null, document.URL)
        },
        backButton() {
          if (!1 === this.note) {
            this.$q.notify({
              message: `再按一次退出${this.$appConf.title}`,
              timeout: 1500,
              position: "bottom"
            }), this.note = !0;
            var t = setInterval((() => {
              this.note = !1, clearInterval(t)
            }), 2e3)
          }
          document.addEventListener("backbutton", this.exitApp, !1);
          var e = setInterval((() => {
            clearInterval(e), document.removeEventListener("backbutton", this.exitApp, !1)
          }), 2e3)
        },
        exitApp() {
          navigator.app.exitApp()
        },
        getMenuColor(t) {
          return Object(i["d"])(t)
        },
        goExperience() {
          this.$router.push({
            name: "/student/experience/index",
            query: {
              stuNo: this.user.login_name
            }
          })
        },
        newList() {
          this.$axiosAction("/api/teacher/news/news.api", {
            action: "getPublicNewList"
          }).then((t => {
            0 === t.data.code && (this.newslist = t.data.result, this.newstitle = this.newslist[this.topId].title, this.setCarousel())
          })).catch((t => {
            this.newslist = []
          }))
        },
        toNews(t, e) {
          "" !== e && null !== e ? (this.$axiosAction("/api/teacher/news/news.api", {
            action: "insertNewsLog",
            id: t,
            roleId: this.user.role_id,
            role_type: this.user.role_type
          }).then((t => {
            0 === t.data.code || "2001" === t.data.code && (this.$showErrorNotify("该新闻被删除或不存在"), this.$router.push("student/news/index"))
          })).catch((t => {
            this.$showErrorNotify("系统错误")
          })), cordova.InAppBrowser.open(e, "_system")) : this.$router.push(`/student/news/detail?id=${t}`)
        },
        setCarousel() {
          this.newslist.length > 0 && setTimeout((() => {
            this.topId = this.topId + 1, this.topId > this.newslist.length && (this.topId = 0), this.newstitle = this.newslist[this.topId].title
          }), 4e3)
        },
        checkVersion() {
          Object(i["b"])(this, !1)
        },
        refreshMenu(t) {
          this.$axiosAction("/api/user/user.api", {
            action: "queryMenus"
          }).then((e => {
            0 === e.data.code && (this.menus = e.data.menus, this.$addStorageEvent(1, "menu", JSON.stringify(e.data.menus), !1), this.$addStorageEvent(1, "menuappver", this.appVer, !1)), t()
          }))
        }
      }
    },
    n = r,
    c = s("2877"),
    l = s("4d5a"),
    p = s("e359"),
    d = s("65c6"),
    m = s("9c40"),
    u = s("6ac5"),
    h = s("58a81"),
    g = s("9404"),
    v = s("4983"),
    b = s("f09f"),
    q = s("1c1c"),
    w = s("66e5"),
    k = s("4074"),
    f = s("0016"),
    C = s("eb85"),
    y = s("09e3"),
    _ = s("9989"),
    A = s("59d7"),
    x = s("0e51"),
    S = s("714f"),
    I = s("eebe"),
    T = s.n(I),
    $ = Object(c["a"])(n, o, a, !1, null, null, null);
  e["default"] = $.exports;
  T()($, "components", {
    QLayout: l["a"],
    QHeader: p["a"],
    QToolbar: d["a"],
    QBtn: m["a"],
    QToolbarTitle: u["a"],
    QBadge: h["a"],
    QDrawer: g["a"],
    QScrollArea: v["a"],
    QCard: b["a"],
    QList: q["a"],
    QItem: w["a"],
    QItemSection: k["a"],
    QIcon: f["a"],
    QSeparator: C["a"],
    QPageContainer: y["a"],
    QPage: _["a"],
    QPullToRefresh: A["a"],
    QResponsive: x["a"]
  }), T()($, "directives", {
    Ripple: S["a"]
  })
}
