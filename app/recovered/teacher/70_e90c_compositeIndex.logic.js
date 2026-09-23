/**
 * Webpack module logic recovery
 * Source: assets/www/js/70.js -> module "e90c"
 * Route: /teacher/composite/index
 * Component guess: compositeIndex
 * Fidelity: exact module body, beautified only (webpack wrapper retained)
 * Note: variable names inside the original production module are preserved as evidence.
 */
e90c: function(e, t, a) {
  "use strict";
  a.r(t);
  var i = function() {
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
      }), a("q-toolbar-title", [e._v(e._s(e.menuInfo.title))]), a("q-btn", {
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
      }, [e._v(e._s(e.condCount))])], 1)], 1)], 1), a("q-dialog", {
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
      }, [e._v("可以查询组合名称")])], 1)], 1)], 1)], 1)], 1), a("q-pull-to-refresh", {
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
          style: "border-left:0.25rem solid #" + e.menuColor,
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
        }, [e._v("创建人")]), e._v(e._s(t.name) + "\n                  ")]), a("q-item-label", {
          staticStyle: {
            "min-width": "250px"
          },
          attrs: {
            caption: "",
            lines: "1"
          }
        }, [a("span", {
          staticClass: "neu-css-after-colon "
        }, [e._v("创建时间")]), e._v(e._s(t.create_time) + "\n                  ")])], 1), a("q-item-section", {
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
      }, [e._v("\n              暂无" + e._s(e.menuInfo.title) + "\n            ")]), a("div", {
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
      })], 1), a("q-dialog", {
        attrs: {
          maximized: e.maximizedToggle
        },
        model: {
          value: e.newDialog,
          callback: function(t) {
            e.newDialog = t
          },
          expression: "newDialog"
        }
      }, [a("q-card", {
        staticClass: "full-width",
        attrs: {
          flat: ""
        }
      }, [a("q-card-section", {
        staticClass: "row items-center justify-between"
      }, [a("div", {
        staticClass: "text-h6"
      }, [e._v("新建组合")]), a("q-btn", {
        directives: [{
          name: "close-popup",
          rawName: "v-close-popup"
        }],
        attrs: {
          icon: "close",
          flat: "",
          round: "",
          dense: "",
          size: "sm"
        }
      })], 1), a("q-form", {
        on: {
          submit: function(t) {
            return e.saveNewComposite()
          }
        }
      }, [a("q-card-section", [a("q-list", [a("q-item", [a("q-item-section", {
        attrs: {
          avatar: ""
        }
      }, [a("div", {
        staticClass: "neu-css-before-red-asterisk"
      }, [e._v("\n                        名称\n                      ")])]), a("q-item-section", [a("q-input", {
        attrs: {
          outlined: "",
          dense: "",
          "hide-bottom-space": "",
          "lazy-rules": "",
          rules: [function(e) {
            return !!e || "请填写该项"
          }]
        },
        model: {
          value: e.record.title,
          callback: function(t) {
            e.$set(e.record, "title", t)
          },
          expression: "record.title"
        }
      })], 1)], 1), a("q-separator"), a("q-item", [a("q-item-section", {
        attrs: {
          avatar: ""
        }
      }, [a("q-item-label", [e._v("共享对象")]), a("q-item-label", {
        attrs: {
          caption: ""
        }
      }, [e._v("将" + e._s(e.menuInfo.title) + "共享给其他老师")])], 1), a("q-item-section"), a("q-item-section", {
        attrs: {
          side: ""
        }
      }, [a("q-item-label", {
        staticClass: "row items-center"
      }, [a("span", {
        class: 0 === e.record.share_target.length ? "text-grey" : "text-primary",
        attrs: {
          size: "md"
        },
        on: {
          click: function(t) {
            e.shareDialog = !0
          }
        }
      }, [e._v(e._s(0 === e.record.share_target.length ? "请选择" : "已选择 (" + e.record.share_target.length + ")"))]), a("q-icon", {
        class: 0 === e.record.share_target.length ? "text-grey" : "text-primary",
        attrs: {
          name: "keyboard_arrow_right",
          size: "sm"
        }
      })], 1)], 1)], 1)], 1)], 1), a("q-card-section", {
        staticClass: "q-gutter-sm row justify-end"
      }, [a("q-btn", {
        attrs: {
          outline: "",
          color: "grey",
          label: "取消"
        },
        on: {
          click: function(t) {
            e.newDialog = !1
          }
        }
      }), a("q-btn", {
        attrs: {
          unelevated: "",
          color: "primary",
          label: "完成",
          type: "submit"
        }
      })], 1)], 1)], 1)], 1), a("q-dialog", {
        attrs: {
          persistent: "",
          fullWidth: "",
          maximized: e.maximizedToggle
        },
        model: {
          value: e.shareDialog,
          callback: function(t) {
            e.shareDialog = t
          },
          expression: "shareDialog"
        }
      }, [a("q-layout", {
        staticClass: "bg-white",
        attrs: {
          view: "lHh lpr lFf",
          container: ""
        }
      }, [a("q-header", {
        staticClass: "full-width bg-white"
      }, [a("q-toolbar", [a("div", {
        staticClass: "full-width row items-center justify-between q-px-xs q-py-sm"
      }, [a("div", {
        staticClass: "text-bold text-black"
      }, [e._v("设置共享对象")]), a("q-btn", {
        attrs: {
          unelevated: "",
          color: "primary",
          label: "完成"
        },
        on: {
          click: function(t) {
            e.shareDialog = !1
          }
        }
      })], 1)])], 1), a("q-page-container", [a("q-page", [a("neu-assign-teacher", {
        model: {
          value: e.record.share_target,
          callback: function(t) {
            e.$set(e.record, "share_target", t)
          },
          expression: "record.share_target"
        }
      })], 1)], 1)], 1)], 1)], 2)], 1)], 1), e.menuInfo.edit_permit ? a("q-page-sticky", {
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
          click: e.addComposite
        }
      })], 1) : e._e()], 1)
    },
    s = [],
    o = (a("13d5"), a("ded3")),
    r = a.n(o),
    n = a("ad56"),
    l = a("9a3d"),
    c = {
      name: "compositeIndex",
      components: {
        NeuAssignTeacher: l["a"]
      },
      data() {
        return {
          menuInfo: null,
          drawerRight: !1,
          teacher_name: "",
          list: [],
          paging: {
            pageSize: 30,
            pageNum: 0,
            pageCount: 0
          },
          otherSearch: !1,
          fabPos: [30, 40],
          dialog: !1,
          condCount: 0,
          originalCond: {},
          queryModel: {
            mutli_search: ""
          },
          isLoading: !1,
          menuColor: Object(n["d"])("composite"),
          newDialog: !1,
          record: {
            share_target: []
          },
          maximizedToggle: !0,
          shareDialog: !1,
          shareTarget: []
        }
      },
      destroyed() {
        window.removeEventListener("popstate", this.goBack, !1)
      },
      mounted() {
        window.localStorage.getItem("menu") && (this.menuInfo = JSON.parse(window.localStorage.getItem("menu")).find((e => "composite" === e.id))), window.history && window.history.pushState && (history.pushState(null, null, document.URL), window.addEventListener("popstate", this.goBack, !1)), this.loadList((() => {}))
      },
      methods: {
        refresh(e) {
          this.loadList(e)
        },
        loadList(e) {
          e && (this.paging.pageNum = 0, this.list = []), this.paging.pageNum += 1, this.isLoading = !0, this.$axiosAction("/api/teacher/composite/composite.api", r()(r()({
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
                rowCount: i,
                pageCount: s,
                startIndex: o,
                endIndex: n
              } = r()({}, t.data.result);
              this.paging = {
                pageSize: e,
                pageNum: a,
                rowCount: i,
                pageCount: s,
                startIndex: o,
                endIndex: n
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
          this.$router.push(`/teacher/composite/detail?id=${e}`)
        },
        addComposite() {
          this.record = {
            share_target: []
          }, this.newDialog = !0
        },
        moveFab(e) {
          this.draggingFab = !0 !== e.isFirst && !0 !== e.isFinal, this.fabPos = [this.fabPos[0] - e.delta.x, this.fabPos[1] - e.delta.y]
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
        saveNewComposite() {
          this.$q.loading.show();
          const e = r()({}, this.record);
          e.share_target = e.share_target && e.share_target.length > 0 ? JSON.stringify(e.share_target) : null, this.$axiosAction("/api/teacher/composite/composite.api", r()({
            action: "insert"
          }, e)).then((e => {
            0 === e.data.code && (this.newDialog = !1, this.loadList((() => {}))), this.$q.loading.hide()
          })).catch((e => {
            this.$q.loading.hide()
          }))
        }
      }
    },
    d = c,
    g = a("2877"),
    p = a("4d5a"),
    u = a("e359"),
    m = a("65c6"),
    h = a("9c40"),
    q = a("6ac5"),
    b = a("58a81"),
    v = a("24e8"),
    f = a("f09f"),
    w = a("6b1d"),
    y = a("a370"),
    _ = a("eb85"),
    C = a("1c1c"),
    x = a("66e5"),
    k = a("4074"),
    L = a("27f9"),
    N = a("0170"),
    Q = a("59d7"),
    S = a("09e3"),
    D = a("9989"),
    z = a("0016"),
    I = a("8380"),
    $ = a("0378"),
    P = a("de5e"),
    M = a("714f"),
    T = a("7f67"),
    j = a("75c3"),
    F = a("eebe"),
    O = a.n(F),
    B = Object(g["a"])(d, i, s, !1, null, null, null);
  t["default"] = B.exports;
  O()(B, "components", {
    QLayout: p["a"],
    QHeader: u["a"],
    QToolbar: m["a"],
    QBtn: h["a"],
    QToolbarTitle: q["a"],
    QBadge: b["a"],
    QDialog: v["a"],
    QCard: f["a"],
    QLinearProgress: w["a"],
    QCardSection: y["a"],
    QSeparator: _["a"],
    QList: C["a"],
    QItem: x["a"],
    QItemSection: k["a"],
    QInput: L["a"],
    QItemLabel: N["a"],
    QPullToRefresh: Q["a"],
    QPageContainer: S["a"],
    QPage: D["a"],
    QIcon: z["a"],
    QSpinnerDots: I["a"],
    QForm: $["a"],
    QPageSticky: P["a"]
  }), O()(B, "directives", {
    Ripple: M["a"],
    ClosePopup: T["a"],
    TouchPan: j["a"]
  })
}
