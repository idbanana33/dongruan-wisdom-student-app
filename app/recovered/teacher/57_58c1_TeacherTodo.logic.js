/**
 * Webpack module logic recovery
 * Source: assets/www/js/57.js -> module "58c1"
 * Route: /teacher/todo
 * Component guess: TeacherTodo
 * Fidelity: exact module body, beautified only (webpack wrapper retained)
 * Note: variable names inside the original production module are preserved as evidence.
 */
"58c1": function(e, t, i) {
  "use strict";
  i.r(t);
  var a = function() {
      var e = this,
        t = e.$createElement,
        i = e._self._c || t;
      return i("q-layout", {
        attrs: {
          view: "lHh lpr lFf"
        }
      }, [i("q-header", {
        staticClass: "bg-grey-3 text-black"
      }, [i("q-toolbar", [i("q-btn", {
        attrs: {
          flat: "",
          round: "",
          dense: "",
          icon: "keyboard_arrow_left"
        },
        on: {
          click: e.goBack
        }
      }), i("q-toolbar-title", [e._v("未读消息")]), i("q-item-label", {
        directives: [{
          name: "show",
          rawName: "v-show",
          value: 0 != e.list.length,
          expression: "list.length != 0"
        }],
        attrs: {
          caption: ""
        },
        on: {
          click: e.clearList
        }
      }, [e._v("清除")])], 1)], 1), i("q-page-container", [i("q-page", {
        staticClass: "bg-grey-3 q-pb-sm"
      }, [i("q-pull-to-refresh", {
        on: {
          refresh: e.refresh
        }
      }, [e._l(e.list, (function(t, a) {
        return i("q-card", {
          key: a,
          staticClass: "bg-white q-mb-sm q-mx-sm",
          style: "border-left:0.25rem solid #" + e.getMenuColor(t.menu_id),
          attrs: {
            flat: ""
          }
        }, [i("q-item", {
          directives: [{
            name: "ripple",
            rawName: "v-ripple"
          }],
          attrs: {
            clickable: ""
          },
          on: {
            click: function(i) {
              return e.goDetail(t.id, t.link)
            }
          }
        }, [i("q-item-section", [i("q-item-label", {
          attrs: {
            lines: "1"
          }
        }, [e._v(e._s(t.title))]), i("q-item-label", {
          attrs: {
            caption: "",
            lines: "2"
          }
        }, [e._v("\n                " + e._s(t.message) + "\n              ")])], 1), i("q-item-section", {
          attrs: {
            side: "",
            top: ""
          }
        }, [i("q-item-label", {
          attrs: {
            caption: ""
          }
        }, [e._v("\n                " + e._s(t.days > 1 ? t.push_date : 1 == t.days ? t.days + "天前" : 0 != t.hours ? t.hours + "小时前" : 0 != t.mins ? t.mins + "分钟前" : "刚刚") + "\n              ")])], 1)], 1)], 1)
      })), i("div", {
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
      }, [e._v("\n          加载更多...\n        ")]), i("div", {
        directives: [{
          name: "show",
          rawName: "v-show",
          value: !e.isLoading && e.paging.pageCount == e.paging.pageNum && 0 != e.list.length,
          expression: "!isLoading && paging.pageCount == paging.pageNum && list.length != 0"
        }],
        staticClass: "text-center text-grey q-pt-sm q-pb-md"
      }, [e._v("\n          没有更多了\n        ")]), i("div", {
        directives: [{
          name: "show",
          rawName: "v-show",
          value: !e.isLoading && 0 == e.list.length,
          expression: "!isLoading && list.length == 0"
        }],
        staticClass: "text-center text-grey q-pt-sm q-pb-md"
      }, [e._v("\n          暂无未读消息\n        ")]), i("div", {
        directives: [{
          name: "show",
          rawName: "v-show",
          value: e.isLoading,
          expression: "isLoading"
        }],
        staticClass: "text-center text-grey q-pt-sm q-pb-md"
      }, [i("q-spinner-dots", {
        attrs: {
          color: "primary",
          size: "md"
        }
      })], 1)], 2)], 1)], 1)], 1)
    },
    s = [],
    n = i("ded3"),
    o = i.n(n),
    r = i("ad56"),
    d = {
      name: "TeacherTodo",
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
      computed: {},
      created() {
        window.addEventListener("refreshTodoList", this.refreshTodoList, !1)
      },
      destroyed() {
        window.removeEventListener("popstate", this.goBack, !1), window.removeEventListener("refreshTodoList", this.refreshTodoList, !1)
      },
      mounted() {
        window.history && window.history.pushState && (history.pushState(null, null, document.URL), window.addEventListener("popstate", this.goBack, !1)), this.refreshTodoList()
      },
      methods: {
        refreshTodoList() {
          this.loadList((() => {}))
        },
        loadList(e) {
          e && (this.paging.pageNum = 0, this.list = []), this.paging.pageNum += 1, this.isLoading = !0, this.$axiosAction("/api/teacher/home/home.api", {
            action: "getHomeList",
            pageSize: this.paging.pageSize,
            pageNum: this.paging.pageNum
          }).then((t => {
            if (0 === t.data.code) {
              this.list = this.list.concat(t.data.result.list);
              const {
                pageSize: e,
                pageNum: i,
                rowCount: a,
                pageCount: s,
                startIndex: n,
                endIndex: r
              } = o()({}, t.data.result);
              this.paging = {
                pageSize: e,
                pageNum: i,
                rowCount: a,
                pageCount: s,
                startIndex: n,
                endIndex: r
              };
              const d = new CustomEvent("setNotificationBadge", {
                detail: {
                  badge: a
                }
              });
              window.dispatchEvent(d)
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
          };
          const e = new CustomEvent("setNotificationBadge", {
            detail: {
              badge: 0
            }
          });
          window.dispatchEvent(e)
        },
        refresh(e) {
          this.loadList(e)
        },
        clearList() {
          this.$q.dialog({
            title: "确认清除",
            message: "确认清除当前列表信息？",
            cancel: !0
          }).onOk((() => {
            this.$axiosAction("/api/push/push.api", {
              action: "clearStatus"
            }).then((() => {
              this.refreshTodoList()
            }))
          }))
        },
        goDetail(e, t) {
          t && (this.$axiosAction("/api/push/push.api", {
            action: "updateStatus",
            id: e
          }, "post", !1).then((e => {
            if (0 === e.data.code) {
              const t = new CustomEvent("setNotificationBadge", {
                detail: {
                  badge: e.data.badge
                }
              });
              window.dispatchEvent(t)
            }
          })), this.$router.push(t))
        },
        getMenuColor(e) {
          return Object(r["d"])(e)
        },
        goBack() {
          this.$router.push("/teacher/index")
        }
      }
    },
    l = d,
    g = i("2877"),
    p = i("4d5a"),
    c = i("e359"),
    h = i("65c6"),
    u = i("9c40"),
    m = i("6ac5"),
    w = i("0170"),
    v = i("09e3"),
    L = i("9989"),
    f = i("59d7"),
    b = i("f09f"),
    q = i("66e5"),
    x = i("4074"),
    C = i("8380"),
    N = i("714f"),
    y = i("eebe"),
    _ = i.n(y),
    k = Object(g["a"])(l, a, s, !1, null, null, null);
  t["default"] = k.exports;
  _()(k, "components", {
    QLayout: p["a"],
    QHeader: c["a"],
    QToolbar: h["a"],
    QBtn: u["a"],
    QToolbarTitle: m["a"],
    QItemLabel: w["a"],
    QPageContainer: v["a"],
    QPage: L["a"],
    QPullToRefresh: f["a"],
    QCard: b["a"],
    QItem: q["a"],
    QItemSection: x["a"],
    QSpinnerDots: C["a"]
  }), _()(k, "directives", {
    Ripple: N["a"]
  })
}
