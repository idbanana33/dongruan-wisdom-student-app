/**
 * Webpack module logic recovery
 * Source: assets/www/js/88.js -> module "098e"
 * Route: /teacher/message/message
 * Component guess: MessageHistory
 * Fidelity: exact module body, beautified only (webpack wrapper retained)
 * Note: variable names inside the original production module are preserved as evidence.
 */
"098e": function(e, t, a) {
  "use strict";
  a.r(t);
  var s = function() {
      var e = this,
        t = e.$createElement,
        a = e._self._c || t;
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
          click: e.goBack
        }
      }), e.menuInfo ? a("q-toolbar-title", [e._v(e._s(e.menuInfo.title))]) : e._e()], 1)], 1), a("q-page-container", [a("q-page", {
        staticClass: "bg-grey-3 q-pb-sm"
      }, ["doing" == e.tab ? a("message-form") : e._e(), "history" == e.tab ? a("message-history") : e._e()], 1)], 1), e.menuInfo ? a("q-footer", {
        staticClass: "bg-white text-primary",
        attrs: {
          bordered: ""
        }
      }, [a("q-tabs", {
        staticClass: "text-black",
        attrs: {
          "no-caps": "",
          "active-color": "primary",
          "indicator-color": "transparent",
          align: "justify"
        },
        model: {
          value: e.tab,
          callback: function(t) {
            e.tab = t
          },
          expression: "tab"
        }
      }, [a("q-tab", {
        attrs: {
          name: "doing",
          label: "正在进行"
        }
      }), a("q-separator", {
        attrs: {
          vertical: ""
        }
      }), a("q-tab", {
        attrs: {
          name: "history",
          label: "历史"
        }
      })], 1)], 1) : e._e()], 1)
    },
    i = [],
    n = function() {
      var e = this,
        t = e.$createElement,
        a = e._self._c || t;
      return a("q-pull-to-refresh", {
        on: {
          refresh: e.refresh
        }
      }, [e._l(e.list, (function(t, s) {
        return a("q-card", {
          key: s,
          staticClass: "q-mb-sm q-mx-sm",
          style: null == t.message_time ? "border-left:0.25rem solid #c10015;" : "border-left:0.25rem solid #21ba45;",
          attrs: {
            flat: ""
          }
        }, [a("q-item", {
          attrs: {
            clickable: ""
          },
          on: {
            click: function(a) {
              return e.goDetail(t.message_id, t.batch_no)
            }
          }
        }, [a("q-item-section", [a("q-item-label", {
          staticClass: "q-mb-xs"
        }, [a("span", {
          staticClass: "text-bold"
        }, [e._v(e._s(t.title))]), a("q-icon", {
          directives: [{
            name: "show",
            rawName: "v-show",
            value: t.attachment,
            expression: "item.attachment"
          }],
          attrs: {
            name: "attach_file",
            color: "grey",
            size: "xs"
          }
        })], 1), a("q-item-label", {
          staticClass: "q-mb-xs"
        }, [a("span", {
          staticClass: "neu-css-after-colon text-grey",
          staticStyle: {
            "font-size": "12px"
          }
        }, [e._v("发起人")]), a("span", {
          staticStyle: {
            "font-size": "12px"
          }
        }, [e._v(e._s(t.tea_name))])]), a("q-item-label", {
          staticStyle: {
            "min-width": "250px"
          },
          attrs: {
            caption: "",
            lines: "1"
          }
        }, [a("span", {
          staticClass: "neu-css-after-colon text-grey",
          staticStyle: {
            "font-size": "12px"
          }
        }, [e._v("申请时间")]), a("span", {
          staticStyle: {
            "font-size": "12px"
          }
        }, [e._v(e._s(t.begin_time) + " 至 " + e._s(t.end_time))])])], 1), a("q-item-section", {
          attrs: {
            side: ""
          }
        }, [a("q-item-label", [a("q-icon", {
          staticClass: "text-grey",
          attrs: {
            name: "keyboard_arrow_right",
            size: "xs"
          }
        })], 1)], 1)], 1), a("div", {
          directives: [{
            name: "show",
            rawName: "v-show",
            value: null == t.message_time,
            expression: "item.message_time == null"
          }],
          staticClass: "absolute-right q-mr-xl q-mt-sm",
          staticStyle: {
            width: "50px",
            height: "50px"
          },
          style: "background: url(" + e.undoImage + ") no-repeat;"
        })], 1)
      })), a("div", {
        directives: [{
          name: "show",
          rawName: "v-show",
          value: !e.isLoading && e.paging.pageCount != e.paging.pageNum,
          expression: "!isLoading && paging.pageCount != paging.pageNum"
        }],
        staticClass: "text-center text-grey q-pt-sm q-pb-md",
        on: {
          click: function(t) {
            return e.loadList(null)
          }
        }
      }, [e._v("\n    加载更多...\n  ")]), a("div", {
        directives: [{
          name: "show",
          rawName: "v-show",
          value: !e.isLoading && e.paging.pageCount == e.paging.pageNum && 0 != e.list.length,
          expression: "!isLoading && paging.pageCount == paging.pageNum && list.length != 0"
        }],
        staticClass: "text-center text-grey q-pt-sm q-pb-md"
      }, [e._v("\n    没有更多了\n  ")]), a("div", {
        directives: [{
          name: "show",
          rawName: "v-show",
          value: !e.isLoading && 0 == e.list.length,
          expression: "!isLoading && list.length == 0"
        }],
        staticClass: "text-center text-grey q-pt-sm q-pb-md"
      }, [e._v("\n    暂无历史" + e._s(e.menuInfo.title) + "数据\n  ")]), a("div", {
        directives: [{
          name: "show",
          rawName: "v-show",
          value: e.isLoading,
          expression: "isLoading"
        }],
        staticClass: "text-center text-grey q-pt-sm q-pb-md"
      }, [a("q-spinner-dots", {
        attrs: {
          color: "primary",
          size: "md"
        }
      })], 1)], 2)
    },
    o = [],
    r = a("ded3"),
    l = a.n(r),
    g = {
      name: "MessageHistory",
      data() {
        return {
          list: [],
          paging: {
            pageSize: 30,
            pageNum: 0,
            pageCount: 0
          },
          isLoading: !1
        }
      },
      computed: {
        undoImage() {
          return `${cordova.file.applicationDirectory}www/img/nocollect.png`
        },
        menuInfo() {
          return JSON.parse(window.localStorage.getItem("menu")).find((e => "message" === e.id))
        }
      },
      mounted() {
        this.loadList((() => {}))
      },
      methods: {
        loadList(e) {
          e && (this.paging.pageNum = 0, this.list = []), this.paging.pageNum += 1, this.isLoading = !0, this.$axiosAction("/api/teacher/message/teamessage.api", {
            action: "getHisMessageList",
            pageSize: this.paging.pageSize,
            pageNum: this.paging.pageNum
          }).then((t => {
            if (0 === t.data.code) {
              this.list = this.list.concat(t.data.result.list);
              const {
                pageSize: e,
                pageNum: a,
                rowCount: s,
                pageCount: i,
                startIndex: n,
                endIndex: o
              } = l()({}, t.data.result);
              this.paging = {
                pageSize: e,
                pageNum: a,
                rowCount: s,
                pageCount: i,
                startIndex: n,
                endIndex: o
              }
            } else this.setDefaultList();
            e && e(), this.isLoading = !1
          })).catch((t => {
            this.setDefaultList(), e && e(), this.isLoading = !1
          }))
        },
        setDefaultList() {
          this.list = [], this.paging = {
            pageSize: 30,
            pageNum: 0,
            pageCount: 0
          }
        },
        refresh(e) {
          this.loadList(e)
        },
        goDetail(e, t) {
          this.$router.push({
            name: "/teacher/message/messageDetail",
            query: {
              id: e,
              batch_no: t,
              tab: "history"
            }
          })
        }
      }
    },
    m = g,
    c = a("2877"),
    p = a("59d7"),
    d = a("f09f"),
    u = a("66e5"),
    h = a("4074"),
    b = a("0170"),
    f = a("0016"),
    x = a("8380"),
    v = a("eebe"),
    w = a.n(v),
    q = Object(c["a"])(m, n, o, !1, null, null, null),
    _ = q.exports;
  w()(q, "components", {
    QPullToRefresh: p["a"],
    QCard: d["a"],
    QItem: u["a"],
    QItemSection: h["a"],
    QItemLabel: b["a"],
    QIcon: f["a"],
    QSpinnerDots: x["a"]
  });
  var y = function() {
      var e = this,
        t = e.$createElement,
        a = e._self._c || t;
      return a("q-pull-to-refresh", {
        on: {
          refresh: e.refresh
        }
      }, [e._l(e.list, (function(t, s) {
        return a("q-card", {
          key: s,
          staticClass: "q-mb-sm q-mx-sm",
          style: "border-left:0.25rem solid #" + e.menuColor,
          attrs: {
            flat: ""
          }
        }, [a("q-item", {
          attrs: {
            clickable: ""
          },
          on: {
            click: function(a) {
              return e.goDetail(t.message_id, t.batch_no)
            }
          }
        }, [a("q-item-section", [a("q-item-label", [a("span", {
          staticClass: "text-bold"
        }, [e._v(e._s(t.title))]), a("q-icon", {
          directives: [{
            name: "show",
            rawName: "v-show",
            value: t.attachment,
            expression: "items.attachment"
          }],
          attrs: {
            name: "attach_file",
            color: "grey",
            size: "xs"
          }
        })], 1), a("q-item-label", {
          staticClass: "q-mb-xs"
        }, [a("span", {
          staticClass: "neu-css-after-colon text-grey",
          staticStyle: {
            "font-size": "12px"
          }
        }, [e._v("发起人")]), a("span", {
          staticStyle: {
            "font-size": "12px"
          }
        }, [e._v(e._s(t.tea_name))])]), a("q-item-label", {
          staticStyle: {
            "min-width": "250px"
          },
          attrs: {
            caption: "",
            lines: "1"
          }
        }, [a("span", {
          staticClass: "neu-css-after-colon text-grey",
          staticStyle: {
            "font-size": "12px"
          }
        }, [e._v("信息收集时间")]), a("span", {
          staticStyle: {
            "font-size": "12px"
          }
        }, [e._v(e._s(t.begin_time) + " 至 " + e._s(t.end_time))])])], 1), a("q-item-section", {
          attrs: {
            side: ""
          }
        }, [a("q-item-label", [a("q-icon", {
          staticClass: "text-grey",
          attrs: {
            name: "keyboard_arrow_right",
            size: "xs"
          }
        })], 1)], 1)], 1)], 1)
      })), a("div", {
        directives: [{
          name: "show",
          rawName: "v-show",
          value: !e.isLoading && e.paging.pageCount != e.paging.pageNum,
          expression: "!isLoading && paging.pageCount != paging.pageNum"
        }],
        staticClass: "text-center text-grey q-pt-sm q-pb-md",
        on: {
          click: function(t) {
            return e.loadList(null)
          }
        }
      }, [e._v("\n    加载更多...\n  ")]), a("div", {
        directives: [{
          name: "show",
          rawName: "v-show",
          value: !e.isLoading && e.paging.pageCount == e.paging.pageNum && 0 != e.list.length,
          expression: "!isLoading && paging.pageCount == paging.pageNum && list.length != 0"
        }],
        staticClass: "text-center text-grey q-pt-sm q-pb-md"
      }, [e._v("\n    没有更多了\n  ")]), a("div", {
        directives: [{
          name: "show",
          rawName: "v-show",
          value: !e.isLoading && 0 == e.list.length,
          expression: "!isLoading && list.length == 0"
        }],
        staticClass: "text-center text-grey q-pt-sm q-pb-md"
      }, [e._v("\n    暂无进行中的" + e._s(e.menuInfo.title) + "\n  ")]), a("div", {
        directives: [{
          name: "show",
          rawName: "v-show",
          value: e.isLoading,
          expression: "isLoading"
        }],
        staticClass: "text-center text-grey q-pt-sm q-pb-md"
      }, [a("q-spinner-dots", {
        attrs: {
          color: "primary",
          size: "md"
        }
      })], 1)], 2)
    },
    C = [],
    L = a("ad56"),
    N = {
      name: "MessageForm",
      data() {
        return {
          list: [],
          paging: {
            pageSize: 30,
            pageNum: 0,
            pageCount: 0
          },
          isLoading: !1
        }
      },
      computed: {
        menuColor() {
          return Object(L["d"])("collect")
        },
        menuInfo() {
          return JSON.parse(window.localStorage.getItem("menu")).find((e => "message" === e.id))
        }
      },
      mounted() {
        this.loadList((() => {}))
      },
      methods: {
        loadList(e) {
          e && (this.paging.pageNum = 0, this.list = []), this.paging.pageNum += 1, this.isLoading = !0, this.$axiosAction("/api/teacher/message/teamessage.api", {
            action: "getMessageList",
            pageSize: this.paging.pageSize,
            pageNum: this.paging.pageNum
          }).then((t => {
            if (0 === t.data.code) {
              this.list = this.list.concat(t.data.result.list);
              const {
                pageSize: e,
                pageNum: a,
                rowCount: s,
                pageCount: i,
                startIndex: n,
                endIndex: o
              } = l()({}, t.data.result);
              this.paging = {
                pageSize: e,
                pageNum: a,
                rowCount: s,
                pageCount: i,
                startIndex: n,
                endIndex: o
              }
            } else this.setDefaultList();
            e && e(), this.isLoading = !1
          })).catch((t => {
            this.setDefaultList(), e && e(), this.isLoading = !1
          }))
        },
        setDefaultList() {
          this.list = [], this.paging = {
            pageSize: 30,
            pageNum: 0,
            pageCount: 0
          }
        },
        refresh(e) {
          this.loadList(e)
        },
        goDetail(e, t) {
          this.$router.push({
            name: "/teacher/message/messageDetail",
            query: {
              id: e,
              batch_no: t
            }
          })
        }
      }
    },
    S = N,
    I = Object(c["a"])(S, y, C, !1, null, null, null),
    z = I.exports;
  w()(I, "components", {
    QPullToRefresh: p["a"],
    QCard: d["a"],
    QItem: u["a"],
    QItemSection: h["a"],
    QItemLabel: b["a"],
    QIcon: f["a"],
    QSpinnerDots: x["a"]
  });
  var Q = {
      components: {
        MessageHistory: _,
        MessageForm: z
      },
      name: "Message",
      data() {
        return {
          menuInfo: null,
          tab: this.$route.query.tab ? this.$route.query.tab : "doing"
        }
      },
      computed: {},
      destroyed() {
        window.removeEventListener("popstate", this.goBack, !1)
      },
      mounted() {
        this.menuInfo = JSON.parse(window.localStorage.getItem("menu")).find((e => "message" === e.id)), window.history && window.history.pushState && (history.pushState(null, null, document.URL), window.addEventListener("popstate", this.goBack, !1))
      },
      methods: {
        goBack() {
          this.$router.push("/teacher/message/index")
        }
      }
    },
    k = Q,
    D = a("4d5a"),
    $ = a("e359"),
    M = a("65c6"),
    O = a("9c40"),
    T = a("6ac5"),
    j = a("09e3"),
    B = a("9989"),
    E = a("7ff0"),
    H = a("429b"),
    J = a("7460"),
    F = a("eb85"),
    P = Object(c["a"])(k, s, i, !1, null, null, null);
  t["default"] = P.exports;
  w()(P, "components", {
    QLayout: D["a"],
    QHeader: $["a"],
    QToolbar: M["a"],
    QBtn: O["a"],
    QToolbarTitle: T["a"],
    QPageContainer: j["a"],
    QPage: B["a"],
    QFooter: E["a"],
    QTabs: H["a"],
    QTab: J["a"],
    QSeparator: F["a"]
  })
}
