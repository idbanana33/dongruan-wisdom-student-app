/**
 * Webpack module logic recovery
 * Source: assets/www/js/74.js -> module "326a"
 * Route: /teacher/joblog/index
 * Component guess: JoblogIndex
 * Fidelity: exact module body, beautified only (webpack wrapper retained)
 * Note: variable names inside the original production module are preserved as evidence.
 */
"326a": function(e, t, a) {
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
      }), a("q-toolbar-title", [e._v(e._s((e.menuInfo || {}).title))]), a("q-btn", {
        attrs: {
          flat: "",
          round: "",
          dense: "",
          icon: "search"
        },
        on: {
          click: e.open
        }
      }, [a("q-badge", {
        directives: [{
          name: "show",
          rawName: "v-show",
          value: 0 != e.condCount,
          expression: "condCount != 0"
        }],
        attrs: {
          color: "orange",
          floating: "",
          transparent: ""
        }
      }, [e._v(e._s(e.condCount))])], 1)], 1)], 1), a("q-pull-to-refresh", {
        ref: "pageRefresh",
        on: {
          refresh: e.refresh
        }
      }, [a("q-page-container", [a("q-page", {
        staticClass: "bg-grey-3 q-pb-sm"
      }, [e._l(e.list, (function(t) {
        return a("q-card", {
          key: t.id,
          staticClass: "bg-white q-mb-sm q-mx-sm",
          style: "0" == t.status_color ? "border-left:0.25rem solid #f2c037;" : "1" == t.status_color ? "border-left:0.25rem solid #027be3;" : "border-left:0.25rem solid #b5b3b3;",
          attrs: {
            flat: ""
          },
          on: {
            click: function(a) {
              return e.goDetail(t.id)
            }
          }
        }, [a("q-item", [a("q-item-section", [a("q-item-label", {
          staticClass: "text-subtitle1 row items-center"
        }, [e._v("\n                    " + e._s(t.title) + "\n                  ")]), a("q-item-label", {
          staticClass: "q-mb-xs",
          attrs: {
            caption: ""
          }
        }, [a("span", {
          staticClass: "neu-css-after-colon"
        }, [e._v("日志提交数")]), e._v(e._s(t.total) + "\n                  ")]), a("q-item-label", {
          staticClass: "q-mb-xs",
          attrs: {
            caption: ""
          }
        }, [a("span", {
          staticClass: "neu-css-after-colon"
        }, [e._v("发起人")]), e._v(e._s(t.teacher_name) + "\n                  ")]), a("q-item-label", {
          staticStyle: {
            "min-width": "250px"
          },
          attrs: {
            caption: "",
            lines: "1"
          }
        }, [a("span", {
          staticClass: "neu-css-after-colon "
        }, [e._v("填写有效时间")]), e._v(e._s(t.begin_date) + " 至 " + e._s(t.end_date) + "\n                  ")])], 1), a("q-item-section", {
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
          value: !e.isLoading && e.paging.pageCount != e.paging.pageNum,
          expression: "!isLoading && paging.pageCount != paging.pageNum"
        }],
        staticClass: "text-center text-grey q-pt-sm q-pb-md",
        on: {
          click: function(t) {
            return e.loadList(null)
          }
        }
      }, [e._v("\n              加载更多...\n            ")]), a("div", {
        directives: [{
          name: "show",
          rawName: "v-show",
          value: !e.isLoading && e.paging.pageCount == e.paging.pageNum && 0 != e.list.length,
          expression: "!isLoading && paging.pageCount == paging.pageNum && list.length != 0"
        }],
        staticClass: "text-center text-grey q-pt-sm q-pb-md"
      }, [e._v("\n              没有更多了\n            ")]), a("div", {
        directives: [{
          name: "show",
          rawName: "v-show",
          value: !e.isLoading && 0 == e.list.length,
          expression: "!isLoading && list.length == 0"
        }],
        staticClass: "text-center text-grey q-pt-sm q-pb-md"
      }, [e._v("\n              暂无日志\n            ")]), a("div", {
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
      })], 1)], 2)], 1)], 1), "A" == (e.menuInfo || {}).edit_permit ? a("q-page-sticky", {
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
          click: e.addJoblog
        }
      })], 1) : e._e(), a("q-dialog", {
        attrs: {
          position: "bottom"
        },
        model: {
          value: e.dialog,
          callback: function(t) {
            e.dialog = t
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
          click: function(t) {
            return e.close()
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
          click: e.getCondition
        }
      })], 1), a("q-separator"), a("q-list", {
        attrs: {
          bordered: ""
        }
      }, [a("q-item", {
        attrs: {
          clickable: ""
        }
      }, [a("q-item-section", {
        attrs: {
          avatar: "",
          top: ""
        }
      }, [a("span", [e._v("任务状态")])]), a("q-item-section", [a("div", {
        staticClass: "row justify-evenly"
      }, e._l([{
        label: "进行中",
        value: "1"
      }, {
        label: "已结束/未进行",
        value: "2"
      }], (function(t) {
        return a("q-btn", {
          key: t.value,
          attrs: {
            outline: "",
            color: t.value == e.queryModel.status ? "primary" : "grey"
          },
          on: {
            click: function(a) {
              return e.getValue(t.value)
            }
          }
        }, [e._v("\n                      " + e._s(t.label) + "\n                      "), a("q-badge", {
          directives: [{
            name: "show",
            rawName: "v-show",
            value: e.queryModel.status == t.value,
            expression: "queryModel.status == item.value"
          }],
          attrs: {
            color: "orange",
            floating: ""
          }
        }, [e._v("√")])], 1)
      })), 1)])], 1), a("q-separator"), a("q-item", {
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
      }, [a("span", [e._v("综合查询")])]), a("q-item-section", [a("q-input", {
        attrs: {
          outlined: "",
          clearable: "",
          dense: ""
        },
        model: {
          value: e.queryModel.mutli_search,
          callback: function(t) {
            e.$set(e.queryModel, "mutli_search", t)
          },
          expression: "queryModel.mutli_search"
        }
      }), a("q-item-label", {
        staticStyle: {
          "margin-top": "4px"
        },
        attrs: {
          caption: ""
        }
      }, [e._v("可以查询日志任务名称")])], 1)], 1)], 1)], 1)], 1)], 1)
    },
    i = [],
    o = (a("13d5"), a("ded3")),
    n = a.n(o),
    r = {
      name: "JoblogIndex",
      data() {
        return {
          roleId: JSON.parse(window.localStorage.getItem("userinfo")).role_id,
          menuInfo: null,
          dialog: !1,
          title: "",
          list: [],
          fabPos: [30, 40],
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
        window.localStorage.getItem("menu") && (this.menuInfo = JSON.parse(window.localStorage.getItem("menu")).find((e => "joblog" === e.id))), window.history && window.history.pushState && (history.pushState(null, null, document.URL), window.addEventListener("popstate", this.goBack, !1)), this.loadList((() => {}))
      },
      destroyed() {
        window.removeEventListener("popstate", this.goBack, !1)
      },
      methods: {
        refresh(e) {
          this.loadList(e)
        },
        loadList(e) {
          e && (this.paging.pageNum = 0, this.list = []), this.paging.pageNum += 1, this.isLoading = !0, this.$axiosAction("/api/teacher/joblog/joblog.api", n()(n()({
            action: "queryList"
          }, this.queryModel), {}, {
            pageSize: this.paging.pageSize,
            pageNum: this.paging.pageNum,
            roleId: this.roleId
          })).then((t => {
            if (0 === t.data.code) {
              this.list = this.list.concat(t.data.result.list);
              const {
                pageSize: e,
                pageNum: a,
                rowCount: s,
                pageCount: i,
                startIndex: o,
                endIndex: r
              } = n()({}, t.data.result);
              this.paging = {
                pageSize: e,
                pageNum: a,
                rowCount: s,
                pageCount: i,
                startIndex: o,
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
          this.$router.push("/teacher/index")
        },
        goDetail(e) {
          this.$router.push("/teacher/joblog/Detail?id=" + e)
        },
        moveFab(e) {
          this.draggingFab = !0 !== e.isFirst && !0 !== e.isFinal, this.fabPos = [this.fabPos[0] - e.delta.x, this.fabPos[1] - e.delta.y]
        },
        addJoblog() {
          this.$router.push("/teacher/joblog/new")
        },
        open() {
          this.dialog = !0, this.originalCond = Object.keys(this.queryModel).reduce(((e, t) => (e[t] = this.queryModel[t], e)), {})
        },
        close() {
          this.dialog = !1, this.queryModel = Object.keys(this.originalCond).reduce(((e, t) => (e[t] = this.originalCond[t], e)), {})
        },
        getCondition() {
          this.condCount = Object.keys(this.queryModel).reduce(((e, t) => this.queryModel[t] ? e + 1 : e), 0), this.$refs.pageRefresh.trigger(), this.dialog = !1
        },
        getValue(e) {
          this.queryModel.status === e ? this.queryModel.status = "" : this.queryModel.status = e
        }
      }
    },
    l = r,
    d = a("2877"),
    c = a("4d5a"),
    u = a("e359"),
    g = a("65c6"),
    p = a("9c40"),
    m = a("6ac5"),
    h = a("58a81"),
    b = a("59d7"),
    q = a("09e3"),
    v = a("9989"),
    f = a("f09f"),
    w = a("66e5"),
    y = a("4074"),
    _ = a("0170"),
    C = a("0016"),
    x = a("8380"),
    k = a("de5e"),
    L = a("24e8"),
    N = a("6b1d"),
    Q = a("a370"),
    S = a("eb85"),
    I = a("1c1c"),
    M = a("27f9"),
    j = a("75c3"),
    P = a("714f"),
    z = a("eebe"),
    D = a.n(z),
    F = Object(d["a"])(l, s, i, !1, null, null, null);
  t["default"] = F.exports;
  D()(F, "components", {
    QLayout: c["a"],
    QHeader: u["a"],
    QToolbar: g["a"],
    QBtn: p["a"],
    QToolbarTitle: m["a"],
    QBadge: h["a"],
    QPullToRefresh: b["a"],
    QPageContainer: q["a"],
    QPage: v["a"],
    QCard: f["a"],
    QItem: w["a"],
    QItemSection: y["a"],
    QItemLabel: _["a"],
    QIcon: C["a"],
    QSpinnerDots: x["a"],
    QPageSticky: k["a"],
    QDialog: L["a"],
    QLinearProgress: N["a"],
    QCardSection: Q["a"],
    QSeparator: S["a"],
    QList: I["a"],
    QInput: M["a"]
  }), D()(F, "directives", {
    TouchPan: j["a"],
    Ripple: P["a"]
  })
}
