/**
 * Webpack module logic recovery
 * Source: assets/www/js/90.js -> module "710a"
 * Route: /teacher/message/messageIndex
 * Component guess: MessageIndex
 * Fidelity: exact module body, beautified only (webpack wrapper retained)
 * Note: variable names inside the original production module are preserved as evidence.
 */
"710a": function(e, t, a) {
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
      }), e.menuInfo ? a("q-toolbar-title", [e._v(e._s(e.menuInfo.title))]) : e._e(), a("q-btn", {
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
      }, [e._v(e._s(e.condCount))])], 1)], 1)], 1), a("q-page-container", [a("q-page", {
        staticClass: "bg-grey-3 q-pb-sm"
      }, [a("q-pull-to-refresh", {
        ref: "pageRefresh",
        on: {
          refresh: e.refresh
        }
      }, [e._l(e.list, (function(t) {
        return a("q-card", {
          key: t.id,
          staticClass: "bg-white q-mb-sm q-mx-sm",
          style: 0 == t.status ? "border-left:0.25rem solid #f2c037;" : 1 == t.status ? "border-left:0.25rem solid #027be3;" : "border-left:0.25rem solid #b5b3b3;",
          attrs: {
            flat: ""
          },
          on: {
            click: function(a) {
              return e.goDetail(t.id)
            }
          }
        }, [a("q-item", [a("q-item-section", [a("q-item-label", {
          staticStyle: {
            "font-size": "1.01rem"
          }
        }, [e._v(e._s(t.title))]), a("q-item-label", {
          staticClass: "q-mb-xs",
          attrs: {
            caption: ""
          }
        }, [a("span", {
          staticClass: "neu-css-after-colon"
        }, [e._v("执行频率")]), e._v(e._s(t.frequency_name) + "\n              ")]), a("q-item-label", {
          staticClass: "q-mb-xs",
          attrs: {
            caption: ""
          }
        }, [a("span", {
          staticClass: "neu-css-after-colon"
        }, [e._v("发起人")]), e._v(e._s(t.teacher_name) + "\n                "), a("span", {
          staticClass: "neu-css-after-colon q-ml-lg"
        }, [e._v("已/总执行次数")]), e._v(e._s(t.done_total) + "/" + e._s(t.total) + "\n              ")]), a("q-item-label", {
          staticStyle: {
            "min-width": "250px"
          },
          attrs: {
            caption: "",
            lines: "1"
          }
        }, [a("span", {
          staticClass: "neu-css-after-colon"
        }, [e._v("执行时间")]), e._v(e._s(t.begin_time) + " 至 " + e._s(t.end_time) + "\n              ")])], 1), a("q-item-section", {
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
      }, [e._v("\n          加载更多...\n        ")]), a("div", {
        directives: [{
          name: "show",
          rawName: "v-show",
          value: !e.isLoading && e.paging.pageCount == e.paging.pageNum && 0 != e.list.length,
          expression: "!isLoading && paging.pageCount == paging.pageNum && list.length != 0"
        }],
        staticClass: "text-center text-grey q-pt-sm q-pb-md"
      }, [e._v("\n          没有更多了\n        ")]), a("div", {
        directives: [{
          name: "show",
          rawName: "v-show",
          value: !e.isLoading && 0 == e.list.length,
          expression: "!isLoading && list.length == 0"
        }],
        staticClass: "text-center text-grey q-pt-sm q-pb-md"
      }, [e._v("\n          暂无" + e._s(e.menuInfo.title) + "任务数据\n        ")]), a("div", {
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
      })], 1)], 2), a("q-dialog", {
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
        }, [e._v("\n                  " + e._s(t.label) + "\n                  "), a("q-badge", {
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
        staticClass: "q-mt-xs",
        attrs: {
          caption: ""
        }
      }, [e._v("可以查询任务名称")])], 1)], 1)], 1)], 1)], 1), a("q-page-sticky", {
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
        }, {
          name: "show",
          rawName: "v-show",
          value: null != e.menuInfo.edit_permit,
          expression: "menuInfo.edit_permit != null"
        }],
        attrs: {
          round: "",
          color: "primary",
          icon: "add"
        },
        on: {
          click: e.addApply
        }
      })], 1)], 1)], 1)], 1)
    },
    i = [],
    n = (a("13d5"), a("a434"), a("ded3")),
    o = a.n(n),
    r = {
      name: "MessageIndex",
      data() {
        return {
          condition: [],
          list: [],
          name: "",
          drawerRight: !1,
          fabPos: [30, 40],
          draggingFab: !1,
          paging: {
            pageSize: 30,
            pageNum: 0,
            pageCount: 0
          },
          dialog: !1,
          queryModel: {
            status: "",
            mutli_search: ""
          },
          condCount: 0,
          originalCond: {},
          isLoading: !1
        }
      },
      destroyed() {
        window.removeEventListener("popstate", this.goBack, !1)
      },
      mounted() {
        window.history && window.history.pushState && (history.pushState(null, null, document.URL), window.addEventListener("popstate", this.goBack, !1)), this.loadList(null)
      },
      computed: {
        menuInfo() {
          return JSON.parse(window.localStorage.getItem("menu")).find((e => "message" === e.id))
        }
      },
      methods: {
        goBack() {
          this.$router.push("/teacher/message/index")
        },
        loadList(e) {
          e && (this.paging.pageNum = 0, this.list = []), this.paging.pageNum += 1, this.isLoading = !0, this.$axiosAction("/api/teacher/message/message.api", o()(o()({
            action: "queryList"
          }, this.queryModel), {}, {
            pageSize: this.paging.pageSize,
            pageNum: this.paging.pageNum
          })).then((t => {
            if (0 === t.data.code) {
              this.list = this.list.concat(t.data.result.list);
              const {
                pageSize: e,
                pageNum: a,
                rowCount: s,
                pageCount: i,
                startIndex: n,
                endIndex: r
              } = o()({}, t.data.result);
              this.paging = {
                pageSize: e,
                pageNum: a,
                rowCount: s,
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
        refresh(e) {
          this.loadList(e)
        },
        search(e, t) {
          const a = this.condition.findIndex((t => t.name === e));
          a >= 0 ? this.queryModel[e] ? this.condition.splice(a, 1, {
            name: e,
            label: t,
            value: this.queryModel[e]
          }) : this.condition.splice(a, 1) : this.condition = this.condition.concat({
            name: e,
            label: t,
            value: this.queryModel[e]
          }), this.loadList((() => {}))
        },
        addApply() {
          this.$router.push("/teacher/message/new")
        },
        moveFab(e) {
          this.draggingFab = !0 !== e.isFirst && !0 !== e.isFinal, this.fabPos = [this.fabPos[0] - e.delta.x, this.fabPos[1] - e.delta.y]
        },
        goDetail(e) {
          this.$router.push(`/teacher/message/statistics?id=${e}`)
        },
        open() {
          this.dialog = !0, this.originalCond = Object.keys(this.queryModel).reduce(((e, t) => (e[t] = this.queryModel[t], e)), {})
        },
        close() {
          this.dialog = !1, this.queryModel = Object.keys(this.originalCond).reduce(((e, t) => (e[t] = this.originalCond[t], e)), {})
        },
        getValue(e) {
          this.queryModel.status === e ? this.queryModel.status = "" : this.queryModel.status = e
        },
        getCondition() {
          this.condCount = Object.keys(this.queryModel).reduce(((e, t) => this.queryModel[t] ? e + 1 : e), 0), this.$refs.pageRefresh.trigger(), this.dialog = !1
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
    q = a("09e3"),
    v = a("9989"),
    b = a("59d7"),
    f = a("f09f"),
    y = a("66e5"),
    w = a("4074"),
    _ = a("0170"),
    C = a("0016"),
    x = a("8380"),
    k = a("24e8"),
    L = a("6b1d"),
    N = a("a370"),
    Q = a("eb85"),
    M = a("1c1c"),
    I = a("27f9"),
    S = a("de5e"),
    z = a("714f"),
    P = a("75c3"),
    F = a("eebe"),
    $ = a.n(F),
    D = Object(d["a"])(l, s, i, !1, null, null, null);
  t["default"] = D.exports;
  $()(D, "components", {
    QLayout: c["a"],
    QHeader: u["a"],
    QToolbar: g["a"],
    QBtn: p["a"],
    QToolbarTitle: m["a"],
    QBadge: h["a"],
    QPageContainer: q["a"],
    QPage: v["a"],
    QPullToRefresh: b["a"],
    QCard: f["a"],
    QItem: y["a"],
    QItemSection: w["a"],
    QItemLabel: _["a"],
    QIcon: C["a"],
    QSpinnerDots: x["a"],
    QDialog: k["a"],
    QLinearProgress: L["a"],
    QCardSection: N["a"],
    QSeparator: Q["a"],
    QList: M["a"],
    QInput: I["a"],
    QPageSticky: S["a"]
  }), $()(D, "directives", {
    Ripple: z["a"],
    TouchPan: P["a"]
  })
}
