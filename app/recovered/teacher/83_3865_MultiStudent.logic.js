/**
 * Webpack module logic recovery
 * Source: assets/www/js/83.js -> module "3865"
 * Route: /teacher/leave/multiStudent
 * Component guess: MultiStudent
 * Fidelity: exact module body, beautified only (webpack wrapper retained)
 * Note: variable names inside the original production module are preserved as evidence.
 */
3865: function(e, t, a) {
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
      }), a("q-toolbar-title", [e._v("请假学生")])], 1)], 1), a("q-page-container", [a("q-page", {
        staticClass: "bg-grey-3"
      }, [a("q-pull-to-refresh", {
        on: {
          refresh: e.refresh
        }
      }, [e._l(e.student_list, (function(t) {
        return a("q-card", {
          key: t.id,
          staticClass: "bg-white q-mb-sm q-mx-sm",
          attrs: {
            flat: ""
          }
        }, [a("q-item", [a("q-item-section", [a("q-item-label", [a("q-icon", {
          directives: [{
            name: "show",
            rawName: "v-show",
            value: "男" == t.sex_name,
            expression: "item.sex_name == '男'"
          }],
          attrs: {
            name: "person",
            color: "blue"
          }
        }), a("q-icon", {
          directives: [{
            name: "show",
            rawName: "v-show",
            value: "女" == t.sex_name,
            expression: "item.sex_name == '女'"
          }],
          attrs: {
            name: "person",
            color: "pink"
          }
        }), e._v("\n                " + e._s(t.name) + " (" + e._s(t.login_name) + ")\n              ")], 1), a("q-item-label", [e._v("\n                " + e._s(t.report_status_name) + " " + e._s(t.mob) + "\n              ")]), a("q-item-label", {
          attrs: {
            caption: ""
          }
        }, [e._v("\n                " + e._s(e.counsellorlabel) + "：" + e._s(t.counsellor) + "\n              ")]), a("q-item-label", {
          attrs: {
            lines: "2",
            caption: ""
          }
        }, [e._v(e._s(t.class_name) + " " + e._s(t.major_name) + " " + e._s(t.dep_name) + " " + e._s(t.grade_name))])], 1)], 1)], 1)
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
            return e.getLeaveByStudent(null)
          }
        }
      }, [e._v("\n          加载更多...\n        ")]), a("div", {
        directives: [{
          name: "show",
          rawName: "v-show",
          value: !e.isLoading && e.paging.pageCount == e.paging.pageNum && 0 != e.student_list.length,
          expression: "!isLoading && paging.pageCount == paging.pageNum && student_list.length != 0"
        }],
        staticClass: "text-center text-grey q-pt-sm q-pb-md"
      }, [e._v("\n          没有更多了\n        ")]), a("div", {
        directives: [{
          name: "show",
          rawName: "v-show",
          value: !e.isLoading && 0 == e.student_list.length,
          expression: "!isLoading && student_list.length == 0"
        }],
        staticClass: "text-center text-grey q-pt-sm q-pb-md"
      }, [e._v("\n          暂无学生\n        ")]), a("div", {
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
      })], 1)], 2)], 1)], 1)], 1)
    },
    n = [],
    i = a("ded3"),
    o = a.n(i),
    r = {
      name: "MultiStudent",
      data() {
        return {
          student_list: [],
          paging: {
            pageSize: 30,
            pageNum: 0,
            pageCount: 0
          },
          isLoading: !1,
          counsellorlabel: localStorage.getItem("counsellorlabel")
        }
      },
      destroyed() {
        window.removeEventListener("popstate", this.goBack, !1)
      },
      mounted() {
        window.history && window.history.pushState && (history.pushState(null, null, document.URL), window.addEventListener("popstate", this.goBack, !1)), this.getLeaveByStudent((() => {}))
      },
      methods: {
        getLeaveByStudent(e) {
          e && (this.paging.pageNum = 0, this.student_list = []), this.paging.pageNum += 1, this.isLoading = !0, this.$axiosAction("api/teacher/leave/leave.api", {
            action: "getMultiLeaveStudent",
            student_no_list: this.$route.query.students,
            id: parseInt(this.$route.query.id),
            pageSize: this.paging.pageSize,
            pageNum: this.paging.pageNum
          }).then((t => {
            if (0 === t.data.code) {
              const e = t.data.list.list;
              this.student_list = this.student_list.concat(e);
              const {
                pageSize: a,
                pageNum: s,
                rowCount: n,
                pageCount: i,
                startIndex: r,
                endIndex: l
              } = o()({}, t.data.list);
              this.paging = {
                pageSize: a,
                pageNum: s,
                rowCount: n,
                pageCount: i,
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
          this.student_list = [], this.paging = {
            pageSize: 30,
            pageNum: 0,
            pageCount: 0
          }
        },
        refresh(e) {
          this.getLeaveByStudent(e)
        },
        goBack() {
          this.$router.push(`/teacher/leave/multidetail?id=${this.$route.query.id}&tab=${this.$route.query.tab}`)
        }
      }
    },
    l = r,
    g = a("2877"),
    u = a("4d5a"),
    d = a("e359"),
    p = a("65c6"),
    m = a("6ac5"),
    c = a("0016"),
    h = a("9c40"),
    _ = a("09e3"),
    v = a("9989"),
    w = a("59d7"),
    q = a("f09f"),
    b = a("66e5"),
    x = a("4074"),
    L = a("0170"),
    y = a("8380"),
    f = a("eebe"),
    C = a.n(f),
    N = Object(g["a"])(l, s, n, !1, null, null, null);
  t["default"] = N.exports;
  C()(N, "components", {
    QLayout: u["a"],
    QHeader: d["a"],
    QToolbar: p["a"],
    QToolbarTitle: m["a"],
    QIcon: c["a"],
    QBtn: h["a"],
    QPageContainer: _["a"],
    QPage: v["a"],
    QPullToRefresh: w["a"],
    QCard: q["a"],
    QItem: b["a"],
    QItemSection: x["a"],
    QItemLabel: L["a"],
    QSpinnerDots: y["a"]
  })
}
