/**
 * Webpack module logic recovery
 * Source: assets/www/js/35.js -> module "cb82"
 * Route: /student/notice/stumanage
 * Component guess: NoticeStumanage
 * Fidelity: exact module body, beautified only (webpack wrapper retained)
 * Note: variable names inside the original production module are preserved as evidence.
 */
cb82: function(t, e, a) {
  "use strict";
  a.r(e);
  var s = function() {
      var t = this,
        e = t.$createElement,
        a = t._self._c || e;
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
          click: t.goBack
        }
      }), a("q-toolbar-title", [t._v("班级协助")])], 1)], 1), a("q-page-container", [a("q-page", {
        staticClass: "bg-grey-3 q-pb-sm"
      }, [a("q-pull-to-refresh", {
        on: {
          refresh: t.refresh
        }
      }, [t._l(t.list, (function(e) {
        return a("q-card", {
          key: e.notice_id,
          staticClass: "q-mb-sm q-mx-sm",
          style: "border-left:0.25rem solid #" + t.menuColor,
          attrs: {
            flat: ""
          },
          on: {
            click: function(a) {
              return t.checkDetail(e.notice_id)
            }
          }
        }, [a("q-item", [a("q-item-section", [a("q-item-label", {
          attrs: {
            lines: "1"
          }
        }, [a("span", {
          staticClass: "text-bold"
        }, [t._v(t._s(e.title))])]), a("q-item-label", {
          attrs: {
            caption: "",
            lines: "2"
          }
        }, [a("span", {
          staticClass: "neu-css-after-colon"
        }, [t._v("应阅读")]), t._v(t._s(e.feedback_total) + "\n                  "), a("span", {
          staticClass: "neu-css-after-colon q-ml-lg"
        }, [t._v("未阅读")]), a("span", {
          class: e.no_feedback_total > 0 ? "text-red" : ""
        }, [t._v(t._s(e.no_feedback_total))])]), a("q-item-label", {
          directives: [{
            name: "show",
            rawName: "v-show",
            value: 1 === e.confirm_flag,
            expression: "item.confirm_flag === 1"
          }],
          attrs: {
            caption: "",
            lines: "2"
          }
        }, [a("span", {
          staticClass: "neu-css-after-colon"
        }, [t._v("应确认")]), t._v(t._s(e.confirm_total) + "\n                  "), a("span", {
          staticClass: "neu-css-after-colon q-ml-lg"
        }, [t._v("未确认")]), a("span", {
          class: e.no_confirm_total > 0 ? "text-red" : ""
        }, [t._v(t._s(e.no_confirm_total))])])], 1), a("q-item-section", {
          attrs: {
            side: ""
          }
        }, [a("q-item-label", [a("q-icon", {
          attrs: {
            name: "keyboard_arrow_right",
            size: "xs"
          }
        })], 1)], 1)], 1)], 1)
      })), a("div", {
        directives: [{
          name: "show",
          rawName: "v-show",
          value: !t.isLoading && t.paging.pageCount != t.paging.pageNum,
          expression: "!isLoading && paging.pageCount != paging.pageNum"
        }],
        staticClass: "text-center text-grey q-pt-sm q-pb-md",
        on: {
          click: function(e) {
            return t.loadList(null)
          }
        }
      }, [t._v("\n          加载更多...\n        ")]), a("div", {
        directives: [{
          name: "show",
          rawName: "v-show",
          value: !t.isLoading && t.paging.pageCount == t.paging.pageNum && 0 != t.list.length,
          expression: "!isLoading && paging.pageCount == paging.pageNum && list.length != 0"
        }],
        staticClass: "text-center text-grey q-pt-sm q-pb-md"
      }, [t._v("\n          没有更多了\n        ")]), a("div", {
        directives: [{
          name: "show",
          rawName: "v-show",
          value: !t.isLoading && 0 == t.list.length,
          expression: "!isLoading && list.length == 0"
        }],
        staticClass: "text-center text-grey q-pt-sm q-pb-md"
      }, [t._v("\n          暂无通知\n        ")]), a("div", {
        directives: [{
          name: "show",
          rawName: "v-show",
          value: t.isLoading,
          expression: "isLoading"
        }],
        staticClass: "text-center text-grey q-pt-sm q-pb-md"
      }, [a("q-spinner-dots", {
        attrs: {
          color: "primary",
          size: "md"
        }
      })], 1)], 2)], 1)], 1)], 1)
    },
    i = [],
    n = a("ded3"),
    o = a.n(n),
    l = a("ad56"),
    r = {
      name: "NoticeStumanage",
      data() {
        return {
          list: [],
          paging: {
            pageSize: 30,
            pageNum: 0,
            pageCount: 0
          },
          menuColor: "",
          isLoading: !1,
          badgeCount: 1
        }
      },
      computed: {},
      destroyed() {
        window.removeEventListener("popstate", this.goBack, !1)
      },
      mounted() {
        window.history && window.history.pushState && (history.pushState(null, null, document.URL), window.addEventListener("popstate", this.goBack, !1)), this.menuColor = Object(l["d"])("notice"), this.loadList((() => {}))
      },
      methods: {
        loadList(t) {
          t && (this.paging.pageNum = 0, this.list = []), this.paging.pageNum += 1, this.isLoading = !0, this.$axiosAction("/api/student/notice/notice.api", {
            action: "getStuManageList",
            pageSize: this.paging.pageSize,
            pageNum: this.paging.pageNum
          }).then((e => {
            if (0 === e.data.code) {
              this.list = this.list.concat(e.data.result.list);
              const {
                pageSize: t,
                pageNum: a,
                rowCount: s,
                pageCount: i,
                startIndex: n,
                endIndex: l
              } = o()({}, e.data.result);
              this.paging = {
                pageSize: t,
                pageNum: a,
                rowCount: s,
                pageCount: i,
                startIndex: n,
                endIndex: l
              }
            } else this.setDefaultList();
            t && t(), this.isLoading = !1
          })).catch((e => {
            this.setDefaultList(), t && t(), this.isLoading = !1
          }))
        },
        setDefaultList() {
          this.list = [], this.paging = {
            pageSize: 30,
            pageNum: 0,
            pageCount: 0
          }
        },
        goBack() {
          this.$router.push("/student/notice/index")
        },
        checkDetail(t) {
          this.$router.push(`/student/notice/StuManageDetail?id=${t}`)
        },
        refresh(t) {
          this.loadList(t)
        }
      }
    },
    c = r,
    g = a("2877"),
    p = a("4d5a"),
    d = a("e359"),
    u = a("65c6"),
    m = a("9c40"),
    h = a("6ac5"),
    _ = a("09e3"),
    v = a("9989"),
    f = a("59d7"),
    w = a("f09f"),
    b = a("66e5"),
    q = a("4074"),
    C = a("0170"),
    x = a("0016"),
    L = a("8380"),
    k = a("eebe"),
    N = a.n(k),
    y = Object(g["a"])(c, s, i, !1, null, null, null);
  e["default"] = y.exports;
  N()(y, "components", {
    QLayout: p["a"],
    QHeader: d["a"],
    QToolbar: u["a"],
    QBtn: m["a"],
    QToolbarTitle: h["a"],
    QPageContainer: _["a"],
    QPage: v["a"],
    QPullToRefresh: f["a"],
    QCard: w["a"],
    QItem: b["a"],
    QItemSection: q["a"],
    QItemLabel: C["a"],
    QIcon: x["a"],
    QSpinnerDots: L["a"]
  })
}
