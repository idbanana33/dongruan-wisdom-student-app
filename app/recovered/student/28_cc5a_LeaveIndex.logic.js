/**
 * Webpack module logic recovery
 * Source: assets/www/js/28.js -> module "cc5a"
 * Route: /student/leave/index
 * Component guess: LeaveIndex
 * Fidelity: exact module body, beautified only (webpack wrapper retained)
 * Note: variable names inside the original production module are preserved as evidence.
 */
cc5a: function(e, t, a) {
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
      }), a("q-toolbar-title", [e._v("请假")])], 1)], 1), a("q-page-container", [a("q-page", {
        staticClass: "bg-grey-3"
      }, [a("q-pull-to-refresh", {
        ref: "pageRefresh",
        on: {
          refresh: e.refresh
        }
      }, [e._l(e.leave, (function(t) {
        return a("q-card", {
          key: t.id,
          staticClass: "bg-white q-mb-sm q-mx-sm",
          style: "驳回" == t.review_name ? "border-left:0.25rem solid #FF0000;" : "审批中" == t.review_name ? "border-left:0.25rem solid #20B2AA;" : "border-left:0.25rem solid #32CD32;",
          attrs: {
            flat: ""
          },
          on: {
            click: function(a) {
              return e.goDetails(t.id)
            }
          }
        }, [a("q-item", [a("q-item-section", [a("q-item-label", [a("q-chip", {
          attrs: {
            square: "",
            color: "primary",
            "text-color": "white",
            size: "sm"
          }
        }, [e._v("\n                  " + e._s(t.leave_type_name) + "\n                ")]), a("span", {
          directives: [{
            name: "show",
            rawName: "v-show",
            value: 1 === t.walk_out,
            expression: "item.walk_out === 1"
          }],
          staticClass: "text-grey",
          staticStyle: {
            "font-size": "0.8rem"
          }
        }, [e._v(" " + e._s(1 == t.walk_out ? "需要离校" : "否") + " ")]), a("span", {
          directives: [{
            name: "show",
            rawName: "v-show",
            value: 1 === t.city_out,
            expression: "item.city_out === 1"
          }],
          staticClass: "text-grey",
          staticStyle: {
            "font-size": "0.8rem"
          }
        }, [e._v(" " + e._s(1 == t.city_out ? "需要离市" : "否") + " ")]), a("span", {
          directives: [{
            name: "show",
            rawName: "v-show",
            value: 1 === t.province_out,
            expression: "item.province_out === 1"
          }],
          staticClass: "text-grey",
          staticStyle: {
            "font-size": "0.8rem"
          }
        }, [e._v(" " + e._s(1 == t.province_out ? "需要离省" : "否") + " ")]), 1 === t.need_report ? a("span", {
          staticClass: "text-grey",
          staticStyle: {
            "font-size": "0.8rem"
          }
        }, [e._v(e._s(t.report_status_name))]) : e._e()], 1), a("q-item-label", {
          attrs: {
            lines: "2"
          }
        }, [e._v("\n                " + e._s(t.leave_time) + "\n              ")])], 1), a("q-item-section", {
          attrs: {
            side: ""
          }
        }, [a("q-item-label", [a("q-icon", {
          attrs: {
            name: "keyboard_arrow_right",
            size: "sm"
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
            return e.getLeaveList(null)
          }
        }
      }, [e._v("\n          加载更多...\n        ")]), a("div", {
        directives: [{
          name: "show",
          rawName: "v-show",
          value: !e.isLoading && e.paging.pageCount == e.paging.pageNum && 0 != e.leave.length,
          expression: "!isLoading && paging.pageCount == paging.pageNum && leave.length != 0"
        }],
        staticClass: "text-center text-grey q-pt-sm q-pb-md"
      }, [e._v("\n          没有更多了\n        ")]), a("div", {
        directives: [{
          name: "show",
          rawName: "v-show",
          value: !e.isLoading && 0 == e.leave.length,
          expression: "!isLoading && leave.length == 0"
        }],
        staticClass: "text-center text-grey q-pt-sm q-pb-md"
      }, [e._v("\n          暂无请假\n        ")]), a("div", {
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
      })], 1)], 2), a("q-page-sticky", {
        attrs: {
          position: "bottom-right",
          offset: e.fabPos
        }
      }, [a("q-btn", {
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
          click: e.onClick
        }
      })], 1)], 1)], 1)], 1)
    },
    i = [],
    n = a("ded3"),
    o = a.n(n),
    r = a("2b0e"),
    l = {
      name: "LeaveIndex",
      data() {
        return {
          leave: [],
          paging: {
            pageSize: 30,
            pageNum: 0,
            pageCount: 0
          },
          isLoading: !1,
          fabPos: [30, 40]
        }
      },
      computed: {},
      destroyed() {
        window.removeEventListener("popstate", this.goHome, !1)
      },
      mounted() {
        window.history && window.history.pushState && (history.pushState(null, null, document.URL), window.addEventListener("popstate", this.goHome, !1)), this.getLeaveList((() => {}))
      },
      methods: {
        refresh(e) {
          this.getLeaveList(e)
        },
        goBack() {
          this.$router.push("/student/index")
        },
        onClick() {
          this.$router.push("/student/leave/leave")
        },
        goDetails(e) {
          const t = this.leave.findIndex((t => t.id === e));
          r["a"].set(this.leave[t]), this.$router.push(`/student/leave/detail?leave_id=${e}`), this.$addStorageEvent(2, "leave", JSON.stringify(this.leave), !1)
        },
        getLeaveList(e) {
          e && (this.paging.pageNum = 0, this.leave = []), this.paging.pageNum += 1, this.isLoading = !0;
          const t = JSON.parse(localStorage.getItem("userinfo"));
          this.$axiosAction("/api/student/leave/leave.api", {
            action: "getLeaveList",
            login_name: t.login_name,
            pageSize: this.paging.pageSize,
            pageNum: this.paging.pageNum
          }).then((t => {
            if (0 === t.data.code) {
              const e = t.data.list.list;
              for (let t = 0; t < e.length; t++) e[t].leave_time = e[t].short_time + "(" + e[t].time_info + ")";
              this.leave = this.leave.concat(t.data.list.list);
              const {
                pageSize: a,
                pageNum: s,
                rowCount: i,
                pageCount: n,
                startIndex: r,
                endIndex: l
              } = o()({}, t.data.list);
              this.paging = {
                pageSize: a,
                pageNum: s,
                rowCount: i,
                pageCount: n,
                startIndex: r,
                endIndex: l
              }
            } else this.setDefaultList();
            e && e(), this.isLoading = !1
          })).catch((t => {
            this.setDefaultList(), e && e(), this.isLoading = !1
          }))
        },
        setDefaultList() {
          this.leave = [], this.paging = {
            pageSize: 30,
            pageNum: 0,
            pageCount: 0
          }
        },
        goHome() {
          this.$router.push("/student/index")
        },
        moveFab(e) {
          this.draggingFab = !0 !== e.isFirst && !0 !== e.isFinal, this.fabPos = [this.fabPos[0] - e.delta.x, this.fabPos[1] - e.delta.y]
        }
      }
    },
    g = l,
    p = a("2877"),
    d = a("4d5a"),
    c = a("e359"),
    m = a("65c6"),
    u = a("9c40"),
    v = a("6ac5"),
    h = a("09e3"),
    w = a("9989"),
    _ = a("59d7"),
    f = a("f09f"),
    b = a("66e5"),
    y = a("4074"),
    x = a("0170"),
    q = a("b047"),
    L = a("0016"),
    C = a("8380"),
    N = a("de5e"),
    k = a("75c3"),
    S = a("eebe"),
    Q = a.n(S),
    z = Object(p["a"])(g, s, i, !1, null, null, null);
  t["default"] = z.exports;
  Q()(z, "components", {
    QLayout: d["a"],
    QHeader: c["a"],
    QToolbar: m["a"],
    QBtn: u["a"],
    QToolbarTitle: v["a"],
    QPageContainer: h["a"],
    QPage: w["a"],
    QPullToRefresh: _["a"],
    QCard: f["a"],
    QItem: b["a"],
    QItemSection: y["a"],
    QItemLabel: x["a"],
    QChip: q["a"],
    QIcon: L["a"],
    QSpinnerDots: C["a"],
    QPageSticky: N["a"]
  }), Q()(z, "directives", {
    TouchPan: k["a"]
  })
}
