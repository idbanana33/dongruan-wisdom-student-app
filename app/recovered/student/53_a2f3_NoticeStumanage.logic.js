/**
 * Webpack module logic recovery
 * Source: assets/www/js/53.js -> module "a2f3"
 * Route: /student/signin/stumanage
 * Component guess: NoticeStumanage
 * Fidelity: exact module body, beautified only (webpack wrapper retained)
 * Note: variable names inside the original production module are preserved as evidence.
 */
a2f3: function(t, e, a) {
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
          key: e.id,
          staticClass: "bg-white q-mb-sm q-mx-sm",
          style: "border-left:0.25rem solid #" + t.menuColor,
          attrs: {
            flat: ""
          }
        }, [a("q-item", {
          attrs: {
            clickable: ""
          },
          on: {
            click: function(a) {
              return t.checkDetail(e.signin_id, e.batch_no)
            }
          }
        }, [a("q-item-section", [a("q-item-label", {
          staticClass: "text-subtitle1 row items-center"
        }, [t._v("\n                  " + t._s(e.title) + "\n                  ")]), a("q-item-label", {
          attrs: {
            caption: "",
            lines: "2"
          }
        }, [a("span", {
          staticClass: "neu-css-after-colon"
        }, [t._v("应签人数")]), t._v(t._s(e.signintotal) + "\n                      "), a("span", {
          staticClass: "neu-css-after-colon q-ml-lg"
        }, [t._v("已签人数")]), t._v(t._s(e.signined) + "\n                  ")]), a("q-item-label", {
          attrs: {
            caption: "",
            lines: "2"
          }
        }, [a("span", {
          staticClass: "neu-css-after-colon"
        }, [t._v("请假人数")]), t._v(t._s(e.leaved) + "\n                      "), a("span", {
          staticClass: "neu-css-after-colon q-ml-lg"
        }, [t._v("未签人数")]), a("span", {
          class: e.nosignin > 0 ? "text-red" : ""
        }, [t._v(t._s(e.nosignin))])])], 1), a("q-item-section", {
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
          value: !t.isLoading && t.paging.pageCount != t.paging.pageNum,
          expression: "!isLoading && paging.pageCount != paging.pageNum"
        }],
        staticClass: "text-center text-grey q-pt-sm q-pb-md",
        on: {
          click: function(e) {
            return t.loadList(null)
          }
        }
      }, [t._v("\n              加载更多...\n          ")]), a("div", {
        directives: [{
          name: "show",
          rawName: "v-show",
          value: !t.isLoading && t.paging.pageCount == t.paging.pageNum && 0 != t.list.length,
          expression: "!isLoading && paging.pageCount == paging.pageNum && list.length != 0"
        }],
        staticClass: "text-center text-grey q-pt-sm q-pb-md"
      }, [t._v("\n              没有更多了\n          ")]), a("div", {
        directives: [{
          name: "show",
          rawName: "v-show",
          value: !t.isLoading && 0 == t.list.length,
          expression: "!isLoading && list.length == 0"
        }],
        staticClass: "text-center text-grey q-pt-sm q-pb-md"
      }, [t._v("\n              暂无进行的签到\n          ")]), a("div", {
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
          menuColor: Object(l["d"])("signin"),
          paging: {
            pageSize: 30,
            pageNum: 0,
            pageCount: 0
          },
          isLoading: !1,
          badgeCount: 1
        }
      },
      computed: {},
      destroyed() {
        window.removeEventListener("popstate", this.goBack, !1)
      },
      mounted() {
        window.history && window.history.pushState && (history.pushState(null, null, document.URL), window.addEventListener("popstate", this.goBack, !1)), this.loadList((() => {}))
      },
      methods: {
        loadList(t) {
          t && (this.paging.pageNum = 0, this.list = []), this.paging.pageNum += 1, this.isLoading = !0, this.$axiosAction("/api/student/signin/signin.api", {
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
          this.$router.push("/student/signin/index")
        },
        checkDetail(t, e) {
          this.$router.push(`/student/signin/StuManageDetail?id=${t}&batch_no=${e}&test=111`)
        },
        refresh(t) {
          this.loadList(t)
        }
      }
    },
    g = r,
    c = a("2877"),
    p = a("4d5a"),
    d = a("e359"),
    u = a("65c6"),
    m = a("9c40"),
    h = a("6ac5"),
    v = a("09e3"),
    b = a("9989"),
    w = a("59d7"),
    q = a("f09f"),
    f = a("66e5"),
    C = a("4074"),
    _ = a("0170"),
    x = a("58a81"),
    L = a("0016"),
    y = a("8380"),
    N = a("eebe"),
    k = a.n(N),
    Q = Object(c["a"])(g, s, i, !1, null, null, null);
  e["default"] = Q.exports;
  k()(Q, "components", {
    QLayout: p["a"],
    QHeader: d["a"],
    QToolbar: u["a"],
    QBtn: m["a"],
    QToolbarTitle: h["a"],
    QPageContainer: v["a"],
    QPage: b["a"],
    QPullToRefresh: w["a"],
    QCard: q["a"],
    QItem: f["a"],
    QItemSection: C["a"],
    QItemLabel: _["a"],
    QBadge: x["a"],
    QIcon: L["a"],
    QSpinnerDots: y["a"]
  })
}
