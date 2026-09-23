/**
 * Webpack module logic recovery
 * Source: assets/www/js/47.js -> module "7c65"
 * Route: /student/sanitation/index
 * Component guess: sanitationStudentIndex
 * Fidelity: exact module body, beautified only (webpack wrapper retained)
 * Note: variable names inside the original production module are preserved as evidence.
 */
"7c65": function(t, e, a) {
  "use strict";
  a.r(e);
  var i = function() {
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
      }), a("q-toolbar-title", [t._v("寝室检查")]), a("q-btn", {
        attrs: {
          flat: "",
          round: "",
          dense: "",
          icon: "search"
        },
        on: {
          click: t.open
        }
      }, [a("q-badge", {
        directives: [{
          name: "show",
          rawName: "v-show",
          value: 0 != t.condCount,
          expression: "condCount != 0"
        }],
        attrs: {
          color: "orange",
          floating: "",
          transparent: ""
        }
      }, [t._v(t._s(t.condCount))])], 1)], 1)], 1), a("q-pull-to-refresh", {
        ref: "pageRefresh",
        on: {
          refresh: t.refresh
        }
      }, [a("q-page-container", [a("q-page", {
        staticClass: "bg-grey-3 q-pb-sm"
      }, [t._l(t.list, (function(e) {
        return a("q-card", {
          key: e.id,
          staticClass: "bg-white q-mb-sm q-mx-sm",
          style: "0" == e.status_color ? "border-left:0.25rem solid #f2c037;" : "1" == e.status_color ? "border-left:0.25rem solid #" + t.menuColor + ";" : "border-left:0.25rem solid #b5b3b3;",
          attrs: {
            flat: ""
          },
          on: {
            click: function(a) {
              return t.goDetail(e.sanitation_id, e.sanitation_result_id)
            }
          }
        }, [a("q-item", [a("q-item-section", [a("q-item-label", {
          staticClass: "q-mb-xs",
          attrs: {
            caption: ""
          }
        }, [a("span", {
          staticClass: "neu-css-after-colon"
        }, [t._v("检查教师")]), t._v(t._s(e.name) + "\n                  ")]), a("q-item-label", {
          staticStyle: {
            "min-width": "250px"
          },
          attrs: {
            caption: "",
            lines: "1"
          }
        }, [a("span", {
          staticClass: "neu-css-after-colon "
        }, [t._v("检查日期")]), t._v(t._s(e.check_date) + "\n                  ")]), null === e.edit_time ? a("q-item-label", {
          staticStyle: {
            "min-width": "250px"
          },
          attrs: {
            caption: "",
            lines: "1"
          }
        }, [a("span", {
          staticClass: "neu-css-after-colon "
        }, [t._v("提交时间")]), t._v(t._s(e.create_time) + "\n                  ")]) : t._e(), null !== e.edit_time ? a("q-item-label", {
          staticStyle: {
            "min-width": "250px"
          },
          attrs: {
            caption: "",
            lines: "1"
          }
        }, [a("span", {
          staticClass: "neu-css-after-colon "
        }, [t._v("提交时间")]), t._v(t._s(e.edit_time) + "\n                  ")]) : t._e()], 1), a("q-item-section", {
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
      }, [t._v("\n              加载更多...\n            ")]), a("div", {
        directives: [{
          name: "show",
          rawName: "v-show",
          value: !t.isLoading && t.paging.pageCount == t.paging.pageNum && 0 != t.list.length,
          expression: "!isLoading && paging.pageCount == paging.pageNum && list.length != 0"
        }],
        staticClass: "text-center text-grey q-pt-sm q-pb-md"
      }, [t._v("\n              没有更多了\n            ")]), a("div", {
        directives: [{
          name: "show",
          rawName: "v-show",
          value: !t.isLoading && 0 == t.list.length,
          expression: "!isLoading && list.length == 0"
        }],
        staticClass: "text-center text-grey q-pt-sm q-pb-md"
      }, [t._v("\n              暂无寝室检查结果\n            ")]), a("div", {
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
      })], 1)], 2)], 1)], 1), a("q-dialog", {
        attrs: {
          position: "bottom"
        },
        model: {
          value: t.dialog,
          callback: function(e) {
            t.dialog = e
          },
          expression: "dialog"
        }
      }, [a("q-card", {
        staticStyle: {
          width: "350px"
        }
      }, [a("q-linear-progress", {
        attrs: {
          value: 1,
          color: "primary"
        }
      }), a("q-card-section", {
        staticClass: "row items-center justify-between",
        attrs: {
          dense: ""
        }
      }, [a("q-btn", {
        attrs: {
          outline: "",
          label: "取消",
          color: "grey",
          size: "md"
        },
        on: {
          click: function(e) {
            return t.close()
          }
        }
      }), a("q-btn", {
        attrs: {
          unelevated: "",
          label: "确定",
          color: "primary",
          size: "md"
        },
        on: {
          click: t.getCondition
        }
      })], 1), a("q-separator"), a("q-list", {
        attrs: {
          bordered: ""
        }
      }, [a("q-item", {
        directives: [{
          name: "ripple",
          rawName: "v-ripple"
        }],
        attrs: {
          clickable: ""
        }
      }, [a("q-item-section", {
        attrs: {
          avatar: "",
          top: ""
        }
      }, [a("span", [t._v("综合查询")])]), a("q-item-section", [a("q-input", {
        attrs: {
          outlined: "",
          clearable: "",
          dense: ""
        },
        model: {
          value: t.queryModel.mutli_search,
          callback: function(e) {
            t.$set(t.queryModel, "mutli_search", e)
          },
          expression: "queryModel.mutli_search"
        }
      }), a("q-item-label", {
        staticClass: "q-mt-xs",
        attrs: {
          caption: ""
        }
      }, [t._v("可以查询检查老师")])], 1)], 1)], 1)], 1)], 1)], 1)
    },
    s = [],
    n = (a("13d5"), a("ded3")),
    o = a.n(n),
    r = a("ad56"),
    l = {
      name: "sanitationStudentIndex",
      data() {
        return {
          menuColor: Object(r["d"])("sanitation"),
          menuInfo: null,
          dialog: !1,
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
          condCount: 0,
          originalCond: {},
          isLoading: !1
        }
      },
      mounted() {
        window.localStorage.getItem("menu") && (this.menuInfo = JSON.parse(window.localStorage.getItem("menu")).find((t => "sanitation" === t.id))), window.history && window.history.pushState && (history.pushState(null, null, document.URL), window.addEventListener("popstate", this.goBack, !1)), this.loadList((() => {}))
      },
      destroyed() {
        window.removeEventListener("popstate", this.goBack, !1)
      },
      methods: {
        refresh(t) {
          this.loadList(t)
        },
        loadList(t) {
          t && (this.paging.pageNum = 0, this.list = []), this.paging.pageNum += 1, this.isLoading = !0, this.$axiosAction("/api/student/sanitation/sanitation.api", o()(o()({
            action: "querySanitationStuResultList"
          }, this.queryModel), {}, {
            pageSize: this.paging.pageSize,
            pageNum: this.paging.pageNum
          })).then((e => {
            if (0 === e.data.code) {
              this.list = this.list.concat(e.data.result.list);
              const {
                pageSize: t,
                pageNum: a,
                rowCount: i,
                pageCount: s,
                startIndex: n,
                endIndex: r
              } = o()({}, e.data.result);
              this.paging = {
                pageSize: t,
                pageNum: a,
                rowCount: i,
                pageCount: s,
                startIndex: n,
                endIndex: r
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
          this.$router.push("/student/index")
        },
        open() {
          this.dialog = !0, this.originalCond = Object.keys(this.queryModel).reduce(((t, e) => (t[e] = this.queryModel[e], t)), {})
        },
        close() {
          this.dialog = !1, this.queryModel = Object.keys(this.originalCond).reduce(((t, e) => (t[e] = this.originalCond[e], t)), {})
        },
        getCondition() {
          this.condCount = Object.keys(this.queryModel).reduce(((t, e) => this.queryModel[e] ? t + 1 : t), 0), this.$refs.pageRefresh.trigger(), this.dialog = !1
        },
        getValue(t) {
          this.queryModel.status === t ? this.queryModel.status = "" : this.queryModel.status = t
        },
        goDetail(t, e) {
          this.$router.push("/student/sanitation/detailResult?id=" + t + "&rId=" + e)
        }
      }
    },
    d = l,
    c = a("2877"),
    u = a("4d5a"),
    g = a("e359"),
    p = a("65c6"),
    m = a("9c40"),
    h = a("6ac5"),
    q = a("58a81"),
    b = a("59d7"),
    v = a("09e3"),
    w = a("9989"),
    f = a("f09f"),
    _ = a("66e5"),
    y = a("4074"),
    C = a("0170"),
    x = a("0016"),
    L = a("8380"),
    k = a("24e8"),
    S = a("6b1d"),
    Q = a("a370"),
    N = a("eb85"),
    I = a("1c1c"),
    M = a("27f9"),
    z = a("714f"),
    D = a("eebe"),
    R = a.n(D),
    j = Object(c["a"])(d, i, s, !1, null, null, null);
  e["default"] = j.exports;
  R()(j, "components", {
    QLayout: u["a"],
    QHeader: g["a"],
    QToolbar: p["a"],
    QBtn: m["a"],
    QToolbarTitle: h["a"],
    QBadge: q["a"],
    QPullToRefresh: b["a"],
    QPageContainer: v["a"],
    QPage: w["a"],
    QCard: f["a"],
    QItem: _["a"],
    QItemSection: y["a"],
    QItemLabel: C["a"],
    QIcon: x["a"],
    QSpinnerDots: L["a"],
    QDialog: k["a"],
    QLinearProgress: S["a"],
    QCardSection: Q["a"],
    QSeparator: N["a"],
    QList: I["a"],
    QInput: M["a"]
  }), R()(j, "directives", {
    Ripple: z["a"]
  })
}
