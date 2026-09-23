/**
 * Webpack module logic recovery
 * Source: assets/www/js/38.js -> module "839a"
 * Route: /student/process/index
 * Component guess: processStudentIndex
 * Fidelity: exact module body, beautified only (webpack wrapper retained)
 * Note: variable names inside the original production module are preserved as evidence.
 */
"839a": function(e, t, s) {
  "use strict";
  s.r(t);
  var a = function() {
      var e = this,
        t = e.$createElement,
        s = e._self._c || t;
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
          icon: "keyboard_arrow_left"
        },
        on: {
          click: e.goBack
        }
      }), s("q-toolbar-title", [e._v("我的" + e._s(e.menuInfo.title) + "申请")])], 1)], 1), s("q-pull-to-refresh", {
        ref: "pageRefresh",
        on: {
          refresh: e.refresh
        }
      }, [s("q-page-container", [s("q-page", {
        staticClass: "bg-grey-3 q-py-sm"
      }, [e._l(e.list, (function(t) {
        return s("q-card", {
          key: t.id,
          staticClass: "bg-white q-mb-sm q-mx-sm",
          style: "W" == t.review_status ? "border-left:0.25rem solid #77ac98;" : "A" == t.review_status ? "border-left:0.25rem solid #" + e.menuColor + ";" : "border-left:0.25rem solid #d71345;",
          attrs: {
            flat: ""
          },
          on: {
            click: function(s) {
              return e.goDetail(t.id)
            }
          }
        }, [s("q-item", [s("q-item-section", [s("q-item-label", {
          staticClass: "q-mb-xs",
          attrs: {
            caption: ""
          }
        }, [s("span", {
          staticClass: "neu-css-after-colon"
        }, [e._v("流程名称")]), e._v(e._s(t.process_type_name) + "\n                  ")]), "G" === e.service_flag ? s("q-item-label", {
          staticStyle: {
            "min-width": "250px"
          },
          attrs: {
            caption: "",
            lines: "1"
          }
        }, [s("span", {
          staticClass: "text-grey",
          staticStyle: {
            "font-size": "0.8rem"
          }
        }, [e._v(e._s(0 == t.into_campus && 0 == t.out_campus ? "不需要核验" : 1 == t.into_campus && 1 == t.out_campus ? "需要入校、离校核验" : 1 == t.into_campus ? "需要入校核验" : "需要离校核验") + " ")])]) : e._e(), s("q-item-label", {
          staticStyle: {
            "min-width": "250px"
          },
          attrs: {
            caption: "",
            lines: "1"
          }
        }, [s("span", {
          staticClass: "neu-css-after-colon "
        }, [e._v("提交日期")]), e._v(e._s(t.create_time) + "\n                  ")])], 1), s("q-item-section", {
          attrs: {
            side: ""
          }
        }, [s("q-item-label", [s("q-icon", {
          attrs: {
            name: "keyboard_arrow_right",
            size: "xs"
          }
        })], 1)], 1)], 1)], 1)
      })), s("div", {
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
      }, [e._v("\n              加载更多...\n            ")]), s("div", {
        directives: [{
          name: "show",
          rawName: "v-show",
          value: !e.isLoading && e.paging.pageCount == e.paging.pageNum && 0 != e.list.length,
          expression: "!isLoading && paging.pageCount == paging.pageNum && list.length != 0"
        }],
        staticClass: "text-center text-grey q-pt-sm q-pb-md"
      }, [e._v("\n              没有更多了\n            ")]), s("div", {
        directives: [{
          name: "show",
          rawName: "v-show",
          value: !e.isLoading && 0 == e.list.length,
          expression: "!isLoading && list.length == 0"
        }],
        staticClass: "text-center text-grey q-pt-sm q-pb-md"
      }, [e._v("\n              暂无流程申请\n            ")]), s("div", {
        directives: [{
          name: "show",
          rawName: "v-show",
          value: e.isLoading,
          expression: "isLoading"
        }],
        staticClass: "text-center text-grey q-pt-sm q-pb-md"
      }, [s("q-spinner-dots", {
        attrs: {
          color: "primary",
          size: "md"
        }
      })], 1)], 2)], 1)], 1), s("q-page-sticky", {
        attrs: {
          position: "bottom-right",
          offset: e.fabPos
        }
      }, [s("q-btn", {
        directives: [{
          name: "touch-pan",
          rawName: "v-touch-pan.prevent.mouse",
          value: e.moveFab,
          expression: "moveFab",
          modifiers: {
            prevent: !0,
            mouse: !0
          }
        }],
        attrs: {
          round: "",
          color: "primary",
          icon: "add"
        },
        on: {
          click: e.addClick
        }
      })], 1)], 1)
    },
    i = [],
    n = s("ded3"),
    o = s.n(n),
    r = s("ad56"),
    l = {
      name: "processStudentIndex",
      data() {
        return {
          menuColor: Object(r["d"])("process"),
          menuInfo: null,
          title: "",
          list: [],
          paging: {
            pageSize: 30,
            pageNum: 0,
            pageCount: 0
          },
          queryModel: {
            status: "",
            mutli_search: ""
          },
          isLoading: !1,
          service_flag: "N",
          fabPos: [30, 40]
        }
      },
      mounted() {
        if (window.localStorage.getItem("menu")) {
          this.service_flag = this.$route.query.service_flag;
          let e = "process";
          e = "N" === this.service_flag ? "process" : "process_gate", this.menuInfo = JSON.parse(window.localStorage.getItem("menu")).find((t => t.id === e))
        }
        window.history && window.history.pushState && (history.pushState(null, null, document.URL), window.addEventListener("popstate", this.goBack, !1)), this.loadList((() => {}))
      },
      destroyed() {
        window.removeEventListener("popstate", this.goBack, !1)
      },
      methods: {
        refresh(e) {
          this.loadList(e)
        },
        loadList(e) {
          e && (this.paging.pageNum = 0, this.list = []), this.paging.pageNum += 1, this.isLoading = !0, this.$axiosAction("/api/student/process/process.api", o()(o()({
            action: "getStudentProcess"
          }, this.queryModel), {}, {
            pageSize: this.paging.pageSize,
            pageNum: this.paging.pageNum,
            service_flag: this.service_flag
          })).then((t => {
            if (0 === t.data.code) {
              this.list = this.list.concat(t.data.result.list);
              const {
                pageSize: e,
                pageNum: s,
                rowCount: a,
                pageCount: i,
                startIndex: n,
                endIndex: r
              } = o()({}, t.data.result);
              this.paging = {
                pageSize: e,
                pageNum: s,
                rowCount: a,
                pageCount: i,
                startIndex: n,
                endIndex: r
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
        goBack() {
          this.$router.push("/student/index")
        },
        goDetail(e) {
          this.$router.push(`/student/process/detail?process_id=${e}&service_flag=${this.service_flag}`)
        },
        addClick() {
          this.$router.push(`/student/process/new?service_flag=${this.service_flag}`)
        },
        moveFab(e) {
          this.draggingFab = !0 !== e.isFirst && !0 !== e.isFinal, this.fabPos = [this.fabPos[0] - e.delta.x, this.fabPos[1] - e.delta.y]
        }
      }
    },
    c = l,
    g = s("2877"),
    p = s("4d5a"),
    d = s("e359"),
    u = s("65c6"),
    m = s("9c40"),
    h = s("6ac5"),
    f = s("59d7"),
    v = s("09e3"),
    _ = s("9989"),
    w = s("f09f"),
    b = s("66e5"),
    q = s("4074"),
    y = s("0170"),
    x = s("0016"),
    C = s("8380"),
    L = s("de5e"),
    N = s("75c3"),
    S = s("eebe"),
    k = s.n(S),
    Q = Object(g["a"])(c, a, i, !1, null, null, null);
  t["default"] = Q.exports;
  k()(Q, "components", {
    QLayout: p["a"],
    QHeader: d["a"],
    QToolbar: u["a"],
    QBtn: m["a"],
    QToolbarTitle: h["a"],
    QPullToRefresh: f["a"],
    QPageContainer: v["a"],
    QPage: _["a"],
    QCard: w["a"],
    QItem: b["a"],
    QItemSection: q["a"],
    QItemLabel: y["a"],
    QIcon: x["a"],
    QSpinnerDots: C["a"],
    QPageSticky: L["a"]
  }), k()(Q, "directives", {
    TouchPan: N["a"]
  })
}
