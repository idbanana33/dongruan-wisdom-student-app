/**
 * Webpack module logic recovery
 * Source: assets/www/js/104.js -> module "1e9e"
 * Route: /teacher/process/index
 * Component guess: processStudentIndex
 * Fidelity: exact module body, beautified only (webpack wrapper retained)
 * Note: variable names inside the original production module are preserved as evidence.
 */
"1e9e": function(e, t, s) {
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
      }), s("q-toolbar-title", [e._v(e._s(e.menuInfo.title))]), s("q-btn", {
        attrs: {
          flat: "",
          round: "",
          dense: "",
          icon: "get_app"
        },
        on: {
          click: e.exportList
        }
      }), s("q-btn", {
        attrs: {
          flat: "",
          round: "",
          dense: "",
          icon: "search"
        },
        on: {
          click: e.open
        }
      }, [s("q-badge", {
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
      }, [e._v(e._s(e.condCount))])], 1)], 1)], 1), s("q-pull-to-refresh", {
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
          style: 0 == t.process_type_status ? "border-left:0.25rem solid #f2c037;" : 1 == t.process_type_status ? "border-left:0.25rem solid #" + e.menuColor + ";" : "border-left:0.25rem solid #b5b3b3;",
          attrs: {
            flat: ""
          },
          on: {
            click: function(s) {
              return e.goDetail(t.id, t.process_type_name)
            }
          }
        }, [s("q-item", [s("q-item-section", [s("q-item-label", {
          attrs: {
            lines: "1"
          }
        }, [s("span", {
          class: "text-bold"
        }, [e._v(e._s(t.process_type_name))])]), s("q-item-label", {
          staticStyle: {
            "min-width": "250px"
          },
          attrs: {
            caption: "",
            lines: "1"
          }
        }, [s("span", {
          staticClass: "neu-css-after-colon "
        }, [e._v("流程说明")]), e._v(e._s(t.process_type_detail) + "\n                  ")]), "G" === e.service_flag ? s("q-item-label", {
          staticClass: "row",
          staticStyle: {
            "min-width": "250px"
          },
          attrs: {
            caption: "",
            lines: "1"
          }
        }, [s("div", {
          staticClass: "col-6"
        }, [s("span", {
          staticClass: "neu-css-after-colon "
        }, [e._v("入校核验")]), e._v(e._s(1 == t.into_campus ? "开启" : "关闭"))]), s("div", {
          staticClass: "col-6"
        }, [s("span", {
          staticClass: "neu-css-after-colon "
        }, [e._v("离校核验")]), e._v(e._s(1 == t.out_campus ? "开启" : "关闭"))])]) : e._e(), s("q-item-label", {
          staticClass: "row",
          staticStyle: {
            "min-width": "250px"
          },
          attrs: {
            caption: "",
            lines: "1"
          }
        }, [s("div", {
          staticClass: "col-6"
        }, [s("span", {
          staticClass: "neu-css-after-colon "
        }, [e._v("已审批次数")]), e._v(e._s(t.applyar))]), s("div", {
          staticClass: "col-6"
        }, [s("span", {
          staticClass: "neu-css-after-colon "
        }, [e._v("审批中")]), e._v(e._s(t.applyw))])]), s("q-item-label", {
          staticClass: "row",
          staticStyle: {
            "min-width": "250px"
          },
          attrs: {
            caption: "",
            lines: "1"
          }
        }, [s("div", {
          staticClass: "col-6"
        }, [s("span", {
          staticClass: "neu-css-after-colon "
        }, [e._v("通过次数")]), e._v(e._s(t.applya))]), s("div", {
          staticClass: "col-6"
        }, [s("span", {
          staticClass: "neu-css-after-colon "
        }, [e._v("通过人数")]), e._v(e._s(t.applyapeo))])]), s("q-item-label", {
          staticClass: "row",
          staticStyle: {
            "min-width": "250px"
          },
          attrs: {
            caption: "",
            lines: "1"
          }
        }, [s("div", {
          staticClass: "col-6"
        }, [s("span", {
          staticClass: "neu-css-after-colon "
        }, [e._v("驳回次数")]), e._v(e._s(t.applyr))]), s("div", {
          staticClass: "col-6"
        }, [s("span", {
          staticClass: "neu-css-after-colon "
        }, [e._v("驳回人数")]), e._v(e._s(t.applyrpeo))])]), s("q-item-label", {
          staticClass: "row",
          staticStyle: {
            "min-width": "250px"
          },
          attrs: {
            caption: "",
            lines: "1"
          }
        }, [s("div", {
          staticClass: "col-6"
        }, [s("span", {
          staticClass: "neu-css-after-colon "
        }, [e._v("申请次数")]), e._v(e._s(t.applynum))]), s("div", {
          staticClass: "col-6"
        }, [s("span", {
          staticClass: "neu-css-after-colon "
        }, [e._v("申请人数")]), e._v(e._s(t.applypeo))])]), s("q-item-label", {
          staticClass: "row",
          staticStyle: {
            "min-width": "250px"
          },
          attrs: {
            caption: "",
            lines: "1"
          }
        }, [s("div", {
          class: "col-6" + (t.mycount > 0 ? " text-red" : "")
        }, [s("span", {
          staticClass: "neu-css-after-colon"
        }, [e._v("需我审批")]), e._v(e._s(t.mycount))])])], 1), s("q-item-section", {
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
      }, [e._v("\n              暂无流程\n            ")]), s("div", {
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
      })], 1)], 2), s("q-dialog", {
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
      }, [s("q-card", {
        staticStyle: {
          width: "350px"
        }
      }, [s("q-linear-progress", {
        attrs: {
          value: 1,
          color: "primary"
        }
      }), s("q-card-section", {
        staticClass: "row items-center justify-between",
        attrs: {
          dense: ""
        }
      }, [s("q-btn", {
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
      }), s("q-btn", {
        attrs: {
          unelevated: "",
          label: "确定",
          color: "primary",
          size: "md"
        },
        on: {
          click: e.getCondition
        }
      })], 1), s("q-separator"), s("q-list", {
        attrs: {
          bordered: ""
        }
      }, [s("q-item", {
        directives: [{
          name: "ripple",
          rawName: "v-ripple"
        }],
        attrs: {
          clickable: ""
        }
      }, [s("q-item-section", {
        attrs: {
          avatar: "",
          top: ""
        }
      }, [s("span", [e._v("综合查询")])]), s("q-item-section", [s("q-input", {
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
      }), s("q-item-label", {
        staticStyle: {
          "margin-top": "4px"
        },
        attrs: {
          caption: ""
        }
      }, [e._v("可以查询流程名称")])], 1)], 1)], 1)], 1)], 1)], 1)], 1), "A" == e.menuInfo.edit_permit ? s("q-page-sticky", {
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
          click: e.addType
        }
      })], 1) : e._e(), s("neu-export-data", {
        attrs: {
          config: e.exportCompConfig
        }
      })], 1)
    },
    i = [],
    o = (s("13d5"), s("ded3")),
    n = s.n(o),
    r = s("ad56"),
    l = s("d852"),
    c = {
      name: "processStudentIndex",
      components: {
        NeuExportData: l["a"]
      },
      data() {
        return {
          menuColor: Object(r["d"])("process"),
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
          isLoading: !1,
          fabPos: [30, 40],
          user: window.localStorage.userinfo ? JSON.parse(window.localStorage.getItem("userinfo")) : {},
          toId: null,
          toTypeName: "",
          service_flag: "",
          exportCompConfig: null
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
          e && (this.paging.pageNum = 0, this.list = []), this.paging.pageNum += 1, this.isLoading = !0, this.$axiosAction("/api/teacher/process/process.api", n()(n()({
            action: "queryListNew"
          }, this.queryModel), {}, {
            roleId: this.user.role_id,
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
                startIndex: o,
                endIndex: r
              } = n()({}, t.data.result);
              this.paging = {
                pageSize: e,
                pageNum: s,
                rowCount: a,
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
        },
        goDetail(e, t) {
          this.toId = e, this.toTypeName = t, this.$router.push("/teacher/process/processTypeList?type_id=" + this.toId + "&service_flag=" + this.service_flag)
        },
        moveFab(e) {
          this.draggingFab = !0 !== e.isFirst && !0 !== e.isFinal, this.fabPos = [this.fabPos[0] - e.delta.x, this.fabPos[1] - e.delta.y]
        },
        addType() {
          this.$router.push("/teacher/process/typeDetail?type=a&service_flag=" + this.service_flag)
        },
        exportList() {
          this.exportCompConfig = ["/api/teacher/process/process.api", "queryListNewExport", {
            roleId: this.user.role_id,
            service_flag: this.service_flag
          }, {
            [this.menuInfo.title]: "result"
          }, this.menuInfo.title, null, e => e.reduce(((e, t) => {
            const s = {
              "流程名称": t.process_type_name,
              "申请次数": t.applynum,
              "申请人数": t.applypeo,
              "已审批": t.applyar,
              "审批中": t.applyw,
              "通过次数": t.applya,
              "通过人数": t.applyapeo,
              "驳回次数": t.applyr,
              "驳回人数": t.applyrpeo,
              "流程说明": t.process_type_detail,
              "状态": t.process_type_status_name,
              "申请限制": t.processlimit,
              "创建人": t.create_user
            };
            return "G" === this.service_flag && (s.开启核验 = t.is_check), e.concat(s)
          }), []), 1e3, 5e3]
        }
      }
    },
    p = c,
    d = s("2877"),
    u = s("4d5a"),
    g = s("e359"),
    m = s("65c6"),
    h = s("6ac5"),
    _ = s("0016"),
    v = s("9c40"),
    y = s("58a81"),
    f = s("59d7"),
    b = s("09e3"),
    q = s("9989"),
    C = s("f09f"),
    w = s("66e5"),
    x = s("4074"),
    L = s("0170"),
    S = s("8380"),
    k = s("24e8"),
    N = s("6b1d"),
    I = s("a370"),
    Q = s("eb85"),
    M = s("1c1c"),
    P = s("27f9"),
    z = s("de5e"),
    T = s("714f"),
    D = s("75c3"),
    $ = s("eebe"),
    F = s.n($),
    O = Object(d["a"])(p, a, i, !1, null, null, null);
  t["default"] = O.exports;
  F()(O, "components", {
    QLayout: u["a"],
    QHeader: g["a"],
    QToolbar: m["a"],
    QToolbarTitle: h["a"],
    QIcon: _["a"],
    QBtn: v["a"],
    QBadge: y["a"],
    QPullToRefresh: f["a"],
    QPageContainer: b["a"],
    QPage: q["a"],
    QCard: C["a"],
    QItem: w["a"],
    QItemSection: x["a"],
    QItemLabel: L["a"],
    QSpinnerDots: S["a"],
    QDialog: k["a"],
    QLinearProgress: N["a"],
    QCardSection: I["a"],
    QSeparator: Q["a"],
    QList: M["a"],
    QInput: P["a"],
    QPageSticky: z["a"]
  }), F()(O, "directives", {
    Ripple: T["a"],
    TouchPan: D["a"]
  })
}
