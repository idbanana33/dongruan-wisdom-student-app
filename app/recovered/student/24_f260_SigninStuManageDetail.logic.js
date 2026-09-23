/**
 * Webpack module logic recovery
 * Source: assets/www/js/24.js -> module "f260"
 * Route: /student/apply/stumanagedetail
 * Component guess: SigninStuManageDetail
 * Fidelity: exact module body, beautified only (webpack wrapper retained)
 * Note: variable names inside the original production module are preserved as evidence.
 */
f260: function(e, t, a) {
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
      }), e.menuInfo ? a("q-toolbar-title", [e._v(e._s(e.menuInfo.title) + "详情")]) : e._e(), a("q-btn", {
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
      }, [e._v(e._s(e.condCount))])], 1)], 1), a("q-expansion-item", {
        staticClass: "bg-white full-width q-ml-sm",
        attrs: {
          "switch-toggle-side": "",
          "expand-icon-toggle": "",
          "expand-separator": ""
        },
        scopedSlots: e._u([{
          key: "header",
          fn: function() {
            return [a("q-item-section", [a("q-item-label", {
              staticStyle: {
                "font-size": "1.3em"
              },
              attrs: {
                lines: "1"
              }
            }, [e._v(e._s(e.record.title))])], 1), a("q-item-section", {
              attrs: {
                side: ""
              }
            }, [a("q-btn", {
              attrs: {
                flat: "",
                dense: "",
                icon: "more_vert",
                size: "sm"
              },
              on: {
                click: function(t) {
                  e.drawerRight = !e.drawerRight
                }
              }
            })], 1)]
          },
          proxy: !0
        }])
      }, [a("q-card", [a("q-item", [a("q-item-section", [a("q-item-label", {
        attrs: {
          caption: ""
        }
      }, [a("span", {
        staticClass: "neu-css-after-colon"
      }, [e._v("发起人")]), e._v(e._s(e.record.name) + "\n            ")]), a("q-item-label", {
        attrs: {
          caption: ""
        }
      }, [a("span", {
        staticClass: "neu-css-after-colon"
      }, [e._v(e._s(e.menuInfo.title) + "时间")]), e._v(e._s(e.timeSlot) + "\n            ")]), null !== e.record.dep_name ? a("q-item-label", {
        attrs: {
          caption: ""
        }
      }, [a("span", {
        staticClass: "text-grey neu-css-after-colon"
      }, [e._v("发布单位")]), e._v(e._s(e.record.dep_name) + "\n            ")]) : e._e()], 1)], 1)], 1)], 1), a("q-separator", {
        staticStyle: {
          height: "0.1rem"
        },
        attrs: {
          color: "grey-3"
        }
      })], 1), a("q-drawer", {
        attrs: {
          side: "right",
          width: 200,
          breakpoint: 100,
          overlay: "",
          bordered: "",
          "content-class": "bg-white-3"
        },
        model: {
          value: e.drawerRight,
          callback: function(t) {
            e.drawerRight = t
          },
          expression: "drawerRight"
        }
      }, [a("q-scroll-area", {
        staticClass: "fit"
      }, [a("q-list", {
        staticStyle: {
          "border-left": "0.15rem solid #027be3"
        },
        attrs: {
          separator: ""
        }
      }, [a("q-item", {
        directives: [{
          name: "ripple",
          rawName: "v-ripple"
        }],
        attrs: {
          clickable: ""
        },
        on: {
          click: e.exportList
        }
      }, [a("q-item-section", {
        attrs: {
          avatar: ""
        }
      }, [a("q-icon", {
        attrs: {
          name: "get_app",
          size: "sm"
        }
      })], 1), a("q-item-section", {
        staticStyle: {
          "font-size": "1.1rem"
        }
      }, [e._v("导出")])], 1)], 1)], 1)], 1), a("q-page-container", [a("q-page", {
        staticClass: "bg-grey-3"
      }, [a("q-pull-to-refresh", {
        ref: "pageRefresh",
        on: {
          refresh: e.refresh
        }
      }, [e._l(e.list, (function(t) {
        return a("q-card", {
          key: t.id,
          staticClass: "bg-white q-my-sm q-mx-sm",
          style: 0 == t.apply_status ? "border-left:0.25rem solid #c10015;" : 1 == t.apply_status ? "border-left:0.25rem solid #21ba45;" : "border-left:0.25rem solid #027be3;",
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
        }), e._v("\n                " + e._s(t.student_name) + " "), a("span", {
          staticClass: "text-grey"
        }, [e._v("(" + e._s(t.student_no) + ")")])], 1), a("q-item-label", {
          directives: [{
            name: "show",
            rawName: "v-show",
            value: 1 === e.record.need_location && null !== t.address,
            expression: "record.need_location === 1 && item.address !== null"
          }],
          attrs: {
            lines: "1",
            caption: ""
          }
        }, [e._v("提交时的定位信息：" + e._s(t.address))])], 1), a("q-item-section", {
          attrs: {
            side: "",
            top: ""
          }
        }, [a("q-item-label", [0 == t.apply_status ? a("span", {
          staticClass: "text-red",
          on: {
            click: function(a) {
              return e.showInfoResult(t.id)
            }
          }
        }, [e._v(e._s("未" + e.applyShortTitle))]) : e._e(), 1 == t.apply_status && null == t.info_result ? a("span", {
          staticClass: "text-black"
        }, [e._v(e._s("已" + e.applyShortTitle))]) : e._e(), 1 == t.apply_status && null != t.info_result ? a("span", {
          staticClass: "text-primary",
          on: {
            click: function(a) {
              return e.showInfoResult(t.id)
            }
          }
        }, [e._v(e._s("已" + e.applyShortTitle))]) : e._e()])], 1)], 1)], 1)
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
      }, [e._v("\n          暂无数据\n        ")]), a("div", {
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
      })], 1), a("q-list", {
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
      }, [a("span", [e._v("进度")])]), a("q-item-section", [a("div", {
        staticClass: "row justify-evenly"
      }, e._l([{
        label: "未" + e.applyShortTitle,
        value: "1"
      }, {
        label: "已" + e.applyShortTitle,
        value: "2"
      }], (function(t) {
        return a("q-btn", {
          key: t.value,
          attrs: {
            outline: "",
            color: t.value == e.queryModel.apply_status ? "primary" : "grey"
          },
          on: {
            click: function(a) {
              return e.getValue("apply_status", t.value)
            }
          }
        }, [e._v("\n                  " + e._s(t.label) + "\n                  "), a("q-badge", {
          directives: [{
            name: "show",
            rawName: "v-show",
            value: e.queryModel.apply_status == t.value,
            expression: "queryModel.apply_status == item.value"
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
        staticClass: "q-mt-sm",
        attrs: {
          caption: ""
        }
      }, [e._v("可以查询学号、姓名、性别、手机号")])], 1)], 1)], 1)], 1)], 1)], 1)], 1), a("neu-export-data", {
        attrs: {
          config: e.exportCompConfig
        }
      })], 1)
    },
    i = [],
    o = (a("13d5"), a("fb6a"), a("ded3")),
    r = a.n(o),
    n = a("d852"),
    l = a("ad56"),
    p = {
      components: {
        NeuExportData: n["a"]
      },
      name: "SigninStuManageDetail",
      data() {
        return {
          id: this.$route.query.id,
          batchNo: this.$route.query.batch_no,
          apply_type: this.$route.query.apply_type,
          type: this.$route.query.type,
          menuInfo: {},
          condCount: 0,
          record: {},
          drawerRight: !1,
          applyShortTitle: "",
          list: [],
          menuColor: "",
          paging: {
            pageSize: 30,
            pageNum: 0,
            pageCount: 0
          },
          isLoading: !1,
          dialog: !1,
          queryModel: {
            apply_status: "",
            location_status: "",
            mutli_search: ""
          },
          originalCond: {},
          exportCompConfig: null,
          timeSlot: ""
        }
      },
      destroyed() {
        window.removeEventListener("popstate", this.goBack, !1)
      },
      computed: {},
      mounted() {
        this.menuInfo = JSON.parse(window.localStorage.getItem("menu")).find((e => e.id === this.apply_type)), this.menuColor = Object(l["d"])(this.apply_type), "A" === this.type ? this.applyShortTitle = "申请" : "C" === this.type ? this.applyShortTitle = "收集" : this.applyShortTitle = "报名", this.$axiosAction("/api/student/apply/apply.api", {
          action: "queryListStu",
          id: this.id,
          batch_no: this.batchNo
        }).then((e => {
          0 === e.data.code && (this.record = e.data.result, this.getTimeSlot()), this.record && this.record.apply_id || (this.$showErrorNotify("该条信息不存在或您权限不足！"), this.goBack())
        })).catch((e => {
          this.record = {}
        })), this.loadList((() => {}))
      },
      methods: {
        goBack() {
          this.$router.push("/student/apply/stumanage?apply_type=" + this.$route.query.apply_type + "&type=" + this.$route.query.type)
        },
        exportList() {
          this.id && (this.exportCompConfig = ["/api/student/apply/apply.api", "queryFeedbackListStu", r()(r()({}, this.queryModel), {}, {
            batch_no: this.batchNo,
            id: this.id,
            menu_id: this.apply_type
          }), {
            [this.record.title]: "result"
          }, this.record.title, null, e => e.reduce(((e, t) => {
            const a = {
              "进度": 1 === t.apply_status ? `已${this.applyShortTitle}` : `未${this.applyShortTitle}`,
              "学号": t.student_no,
              "姓名": t.student_name,
              "性别": t.sex_name,
              "手机号": t.mob
            };
            return 1 === this.record.need_location && (a.提交时的定位信息 = t.address), e.concat(a)
          }), []), 1e3, 5e3])
        },
        loadList(e) {
          e && (this.paging.pageNum = 0, this.list = []), this.paging.pageNum += 1, this.isLoading = !0, this.id && this.$axiosAction("/api/student/apply/apply.api", r()(r()({
            action: "queryFeedbackListStu"
          }, this.queryModel), {}, {
            batch_no: this.batchNo,
            id: this.id,
            pageSize: this.paging.pageSize,
            pageNum: this.paging.pageNum,
            menu_id: this.apply_type
          })).then((t => {
            if (0 === t.data.code) {
              this.list = this.list.concat(t.data.result.list);
              const {
                pageSize: e,
                pageNum: a,
                rowCount: s,
                pageCount: i,
                startIndex: o,
                endIndex: n
              } = r()({}, t.data.result);
              this.paging = {
                pageSize: e,
                pageNum: a,
                rowCount: s,
                pageCount: i,
                startIndex: o,
                endIndex: n
              }
            } else this.setDefaultList();
            e && e(), this.isLoading = !1
          })).catch((t => {
            this.setDefaultList(), e && e(), this.isLoading = !1
          }))
        },
        showInfoResult(e) {},
        setDefaultList() {
          this.list = [], this.paging = {
            pageSize: 30,
            pageNum: 0,
            pageCount: 0
          }
        },
        open() {
          this.dialog = !0, this.originalCond = Object.keys(this.queryModel).reduce(((e, t) => (e[t] = this.queryModel[t], e)), {})
        },
        close() {
          this.dialog = !1, this.queryModel = Object.keys(this.originalCond).reduce(((e, t) => (e[t] = this.originalCond[t], e)), {})
        },
        getValue(e, t) {
          this.queryModel[e] === t ? this.queryModel[e] = "" : this.queryModel[e] = t
        },
        getCondition() {
          this.condCount = Object.keys(this.queryModel).reduce(((e, t) => this.queryModel[t] ? e + 1 : e), 0), this.loadList((() => {})), this.dialog = !1
        },
        refresh(e) {
          this.loadList(e)
        },
        getTimeSlot() {
          const e = this.record.begin_time.slice(0, 10),
            t = this.record.end_time.slice(0, 10),
            a = this.record.end_time.slice(-5);
          this.timeSlot = e === t ? this.record.begin_time + "~" + a : this.record.begin_time + "~" + this.record.end_time
        }
      }
    },
    c = p,
    d = a("2877"),
    u = a("4d5a"),
    h = a("e359"),
    m = a("65c6"),
    g = a("9c40"),
    y = a("6ac5"),
    _ = a("58a81"),
    q = a("3b73"),
    b = a("4074"),
    v = a("0170"),
    f = a("f09f"),
    w = a("66e5"),
    x = a("eb85"),
    C = a("9404"),
    S = a("4983"),
    k = a("1c1c"),
    L = a("0016"),
    N = a("09e3"),
    Q = a("9989"),
    I = a("59d7"),
    M = a("8380"),
    T = a("24e8"),
    $ = a("6b1d"),
    z = a("a370"),
    R = a("27f9"),
    D = a("714f"),
    j = a("eebe"),
    B = a.n(j),
    O = Object(d["a"])(c, s, i, !1, null, null, null);
  t["default"] = O.exports;
  B()(O, "components", {
    QLayout: u["a"],
    QHeader: h["a"],
    QToolbar: m["a"],
    QBtn: g["a"],
    QToolbarTitle: y["a"],
    QBadge: _["a"],
    QExpansionItem: q["a"],
    QItemSection: b["a"],
    QItemLabel: v["a"],
    QCard: f["a"],
    QItem: w["a"],
    QSeparator: x["a"],
    QDrawer: C["a"],
    QScrollArea: S["a"],
    QList: k["a"],
    QIcon: L["a"],
    QPageContainer: N["a"],
    QPage: Q["a"],
    QPullToRefresh: I["a"],
    QSpinnerDots: M["a"],
    QDialog: T["a"],
    QLinearProgress: $["a"],
    QCardSection: z["a"],
    QInput: R["a"]
  }), B()(O, "directives", {
    Ripple: D["a"]
  })
}
