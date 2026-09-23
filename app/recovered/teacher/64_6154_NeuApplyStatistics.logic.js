/**
 * Webpack module logic recovery
 * Source: assets/www/js/64.js -> module "6154"
 * Route: /teacher/apply/detail
 * Component guess: NeuApplyStatistics
 * Fidelity: exact module body, beautified only (webpack wrapper retained)
 * Note: variable names inside the original production module are preserved as evidence.
 */
6154: function(t, e, a) {
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
      }), t.menuInfo ? a("q-toolbar-title", [t._v(t._s(t.menuInfo.title) + "详情")]) : t._e(), a("q-btn", {
        directives: [{
          name: "show",
          rawName: "v-show",
          value: "progress" == t.tab && 1 == t.checkBatchNo,
          expression: "tab == 'progress' && checkBatchNo == 1"
        }],
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
      }, [t._v(t._s(t.condCount))])], 1)], 1), a("q-card", {
        staticClass: "bg-white",
        attrs: {
          flat: ""
        }
      }, [a("q-item", [a("q-item-section", [a("q-item-label", {
        staticStyle: {
          "font-size": "1.3em"
        }
      }, [t._v(t._s(t.record.title))]), a("q-item-label", {
        attrs: {
          caption: ""
        }
      }, [t._v(t._s(t.record.signin_type_name))])], 1), a("q-item-section", {
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
          click: function(e) {
            t.drawerRight = !t.drawerRight
          }
        }
      }, [a("q-badge", {
        directives: [{
          name: "show",
          rawName: "v-show",
          value: 0 != t.configsRessultList.length,
          expression: "configsRessultList.length != 0"
        }],
        attrs: {
          color: "orange",
          floating: "",
          transparent: ""
        }
      }, [t._v(t._s(t.configsRessultList.length))])], 1)], 1)], 1)], 1), a("q-separator", {
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
          value: t.drawerRight,
          callback: function(e) {
            t.drawerRight = e
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
        }, {
          name: "show",
          rawName: "v-show",
          value: "progress" == t.tab && 1 == t.checkBatchNo,
          expression: "tab == 'progress' && checkBatchNo == 1"
        }],
        attrs: {
          clickable: ""
        },
        on: {
          click: t.exportList
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
      }, [t._v("导出")])], 1), a("q-item", {
        directives: [{
          name: "ripple",
          rawName: "v-ripple"
        }, {
          name: "show",
          rawName: "v-show",
          value: "statistics" == t.tab && 1 == t.checkBatchNo,
          expression: "tab == 'statistics' && checkBatchNo == 1"
        }],
        attrs: {
          clickable: ""
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
        },
        on: {
          click: t.exportLists
        }
      }, [t._v("导出")])], 1), a("q-item", {
        directives: [{
          name: "ripple",
          rawName: "v-ripple"
        }, {
          name: "show",
          rawName: "v-show",
          value: "progress" == t.tab && 0 != t.time && t.record.is_author,
          expression: "tab == 'progress' && time != 0 && record.is_author"
        }],
        attrs: {
          clickable: ""
        }
      }, [a("q-item-section", {
        attrs: {
          avatar: ""
        }
      }, [a("q-icon", {
        attrs: {
          name: "notifications",
          size: "sm",
          color: "primary"
        }
      })], 1), a("q-item-section", {
        staticClass: "text-primary",
        staticStyle: {
          "font-size": "1.1rem"
        },
        on: {
          click: t.unApplyAlert
        }
      }, [t._v("未" + t._s(t.applyShortTitle) + "提醒(APP推送)")])], 1), a("q-item", {
        directives: [{
          name: "ripple",
          rawName: "v-ripple"
        }, {
          name: "show",
          rawName: "v-show",
          value: "progress" == t.tab && 0 != t.time && t.record.is_author && t.allowSmsRemind,
          expression: "tab == 'progress' && time != 0 && record.is_author && allowSmsRemind"
        }],
        attrs: {
          clickable: ""
        }
      }, [a("q-item-section", {
        attrs: {
          avatar: ""
        }
      }, [a("q-icon", {
        attrs: {
          name: "notifications",
          size: "sm",
          color: "primary"
        }
      })], 1), a("q-item-section", {
        staticClass: "text-primary",
        staticStyle: {
          "font-size": "1.1rem"
        },
        on: {
          click: t.sendSmsRemind
        }
      }, [t._v("未" + t._s(t.applyShortTitle) + "提醒(短信提醒)")])], 1), a("q-item", {
        directives: [{
          name: "ripple",
          rawName: "v-ripple"
        }, {
          name: "show",
          rawName: "v-show",
          value: "progress" == t.tab && "C" === t.applyType,
          expression: "tab == 'progress' && applyType === 'C'"
        }],
        attrs: {
          clickable: ""
        }
      }, [a("q-item-section", {
        attrs: {
          avatar: ""
        }
      }, [a("q-icon", {
        attrs: {
          name: "search",
          size: "sm",
          color: "primary"
        }
      })], 1), a("q-item-section", {
        staticClass: "text-primary",
        staticStyle: {
          "font-size": "1.1rem"
        },
        on: {
          click: t.showConfigSearch
        }
      }, [t._v("收集内容查询\n              " + t._s(0 != t.configsRessultList.length ? "(" + t.configsRessultList.length + ")" : "") + "\n            ")])], 1)], 1)], 1)], 1), a("q-page-container", [a("q-page", {
        staticClass: "bg-grey-3"
      }, [a("q-card", {
        directives: [{
          name: "show",
          rawName: "v-show",
          value: "progress" == t.tab || "statistics" == t.tab,
          expression: "tab == 'progress' || tab == 'statistics'"
        }],
        attrs: {
          flat: ""
        }
      }, [a("q-item", {
        directives: [{
          name: "show",
          rawName: "v-show",
          value: t.batchNoList && 0 != t.batchNoList.length,
          expression: "batchNoList && batchNoList.length != 0"
        }],
        attrs: {
          clickable: ""
        },
        on: {
          click: t.changeApplyTime
        }
      }, [a("q-item-section", [a("q-item-label", [a("div", {
        staticClass: "text-grey"
      }, [t._v(t._s(t.applyShortTitle) + "时间段")])]), a("q-item-label", {
        staticClass: "q-mb-sm"
      }, [t._v("\n              " + t._s(t.batchLabel) + "\n            ")]), a("q-item-label", [a("div", {
        directives: [{
          name: "show",
          rawName: "v-show",
          value: t.records.total,
          expression: "records.total"
        }],
        staticClass: "text-grey"
      }, [t._v("\n                本次" + t._s(t.applyShortTitle) + "率 "), a("span", {
        staticClass: "text-black"
      }, [t._v(t._s(t.records.applied_ratio) + "%(" + t._s(t.records.applied_total) + "/" + t._s(t.records.total) + ")")])])])], 1), a("q-item-section", {
        directives: [{
          name: "show",
          rawName: "v-show",
          value: "单次" != t.record.frequency_name,
          expression: "record.frequency_name != '单次'"
        }],
        attrs: {
          side: "",
          top: ""
        }
      }, [a("q-icon", {
        attrs: {
          name: "arrow_drop_down"
        }
      })], 1)], 1), "statistics" == t.tab ? a("q-item", [a("q-item-section", [a("q-item-label", [a("div", {
        staticClass: "text-grey"
      }, [t._v("统计方式")])]), a("q-item-label", [a("q-btn-toggle", {
        attrs: {
          unelevated: "",
          size: "sm",
          options: [{
            label: "按班级统计",
            value: "1"
          }, {
            label: "按专业统计",
            value: "2"
          }, {
            label: "按院系统计",
            value: "3"
          }, {
            label: "按" + t.counsellorlabel + "统计",
            value: "4"
          }]
        },
        model: {
          value: t.model.applyStatistics,
          callback: function(e) {
            t.$set(t.model, "applyStatistics", e)
          },
          expression: "model.applyStatistics"
        }
      })], 1)], 1)], 1) : t._e()], 1), a("q-pull-to-refresh", {
        directives: [{
          name: "show",
          rawName: "v-show",
          value: "progress" == t.tab,
          expression: "tab == 'progress'"
        }],
        on: {
          refresh: t.refresh
        }
      }, [t._l(t.list, (function(e) {
        return a("q-card", {
          key: e.id,
          staticClass: "bg-white q-my-sm q-mx-sm",
          style: 0 == e.apply_status ? "border-left:0.25rem solid #c10015;" : 1 == e.apply_status ? "border-left:0.25rem solid #21ba45;" : "border-left:0.25rem solid #027be3;",
          attrs: {
            flat: ""
          }
        }, [a("q-item", [a("q-item-section", [a("q-item-label", [a("q-icon", {
          directives: [{
            name: "show",
            rawName: "v-show",
            value: "男" == e.sex_name,
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
            value: "女" == e.sex_name,
            expression: "item.sex_name == '女'"
          }],
          attrs: {
            name: "person",
            color: "pink"
          }
        }), t._v("\n                " + t._s(e.student_name) + " "), a("span", {
          staticClass: "text-grey"
        }, [t._v("(" + t._s(e.student_no) + ")")])], 1), a("q-item-label", {
          attrs: {
            lines: "1",
            caption: ""
          }
        }, [t._v(t._s(e.class_name) + " " + t._s(e.major_name) + " " + t._s(e.dep_name))]), a("q-item-label", {
          attrs: {
            lines: "1",
            caption: ""
          }
        }, [t._v(t._s(t.counsellorlabel) + "：" + t._s(e.counsellor))]), a("q-item-label", {
          directives: [{
            name: "show",
            rawName: "v-show",
            value: 1 === t.record.need_location && null !== e.address,
            expression: "record.need_location === 1 && item.address !== null"
          }],
          attrs: {
            lines: "1",
            caption: ""
          }
        }, [t._v("提交时的定位信息：" + t._s(e.address))])], 1), a("q-item-section", {
          attrs: {
            side: "",
            top: ""
          }
        }, [a("q-item-label", [0 == e.apply_status ? a("span", {
          staticClass: "text-red",
          on: {
            click: function(a) {
              return t.showInfoResult(e.id)
            }
          }
        }, [t._v(t._s("未" + t.applyShortTitle)), a("q-icon", {
          attrs: {
            name: "keyboard_arrow_right",
            size: "sm"
          }
        })], 1) : t._e(), 1 == e.apply_status && null == e.info_result ? a("span", {
          staticClass: "text-black"
        }, [t._v(t._s("已" + t.applyShortTitle))]) : t._e(), 1 == e.apply_status && null != e.info_result ? a("span", {
          staticClass: "text-primary",
          on: {
            click: function(a) {
              return t.showInfoResult(e.id)
            }
          }
        }, [t._v(t._s("已" + t.applyShortTitle)), a("q-icon", {
          attrs: {
            name: "keyboard_arrow_right",
            size: "sm"
          }
        })], 1) : t._e()]), a("q-item-label", [1 == e.apply_status && t.record.is_author && 0 != t.time || 1 == e.apply_status && 1 == t.record.allow_counsellor && "C" == t.roleId && 0 != t.time ? a("span", {
          staticClass: "text-primary",
          on: {
            click: function(a) {
              return t.returnBefor(e.id)
            }
          }
        }, [t._v("撤回" + t._s(t.applyShortTitle)), a("q-icon", {
          attrs: {
            name: "keyboard_arrow_right",
            size: "sm"
          }
        })], 1) : t._e()])], 1)], 1)], 1)
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
      }, [t._v("\n          加载更多...\n        ")]), a("div", {
        directives: [{
          name: "show",
          rawName: "v-show",
          value: !t.isLoading && t.paging.pageCount == t.paging.pageNum && 0 != t.list.length,
          expression: "!isLoading && paging.pageCount == paging.pageNum && list.length != 0"
        }],
        staticClass: "text-center text-grey q-pt-sm q-pb-md"
      }, [t._v("\n          没有更多了\n        ")]), a("div", {
        directives: [{
          name: "show",
          rawName: "v-show",
          value: !t.isLoading && 0 == t.list.length,
          expression: "!isLoading && list.length == 0"
        }],
        staticClass: "text-center text-grey q-pt-sm q-pb-md"
      }, [t._v("\n          暂无数据\n        ")]), a("div", {
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
      })], 1), a("q-dialog", {
        attrs: {
          timeDialog: ""
        },
        model: {
          value: t.timeDialog,
          callback: function(e) {
            t.timeDialog = e
          },
          expression: "timeDialog"
        }
      }, [a("q-card", {
        staticStyle: {
          "border-radius": "25px",
          width: "15rem"
        }
      }, [a("q-item", [a("q-item-section", {
        staticClass: "flex flex-center"
      }, [a("q-item-label", {
        staticClass: "text-weight-bold"
      }, [t._v("时间段选择")])], 1)], 1), a("q-item", {
        staticClass: "text-center q-mb-sm",
        attrs: {
          dense: ""
        }
      }, [a("q-item-section", [a("q-item-label", [t._v("请至少选择一个时间段!")])], 1)], 1), a("q-separator"), a("q-card-actions", {
        attrs: {
          align: "around"
        }
      }, [a("q-btn", {
        attrs: {
          flat: "",
          color: "primary"
        },
        on: {
          click: t.chooseSigninTime
        }
      }, [t._v("确定")])], 1)], 1)], 1), a("q-dialog", {
        model: {
          value: t.applyTime,
          callback: function(e) {
            t.applyTime = e
          },
          expression: "applyTime"
        }
      }, [a("q-card", {
        staticClass: "full-width",
        attrs: {
          flat: ""
        }
      }, [a("q-card-section", {
        staticClass: "row items-center justify-between"
      }, [a("div", {
        staticClass: "text-bold"
      }, [t._v(t._s(t.applyShortTitle) + "时间段选择")]), a("q-btn", {
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
      })], 1), a("q-separator"), t._l(t.batchNoList, (function(e, i) {
        return a("q-list", {
          key: e.value
        }, [a("q-item", {
          attrs: {
            clickable: ""
          }
        }, [a("q-item-section", [t._v("\n                  " + t._s(e.label) + "\n                ")]), a("q-item-section", {
          attrs: {
            side: ""
          }
        }, [a("q-toggle", {
          attrs: {
            "checked-icon": "check",
            color: "primary",
            val: e.value
          },
          on: {
            input: function(e) {
              return t.checkBatchno(i)
            }
          },
          model: {
            value: t.getBatchnoList[i],
            callback: function(e) {
              t.$set(t.getBatchnoList, i, e)
            },
            expression: "getBatchnoList[index]"
          }
        })], 1)], 1)], 1)
      }))], 2)], 1), a("q-dialog", {
        attrs: {
          maximized: t.maximizedToggle
        },
        model: {
          value: t.infoResultDialog,
          callback: function(e) {
            t.infoResultDialog = e
          },
          expression: "infoResultDialog"
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
      }, [t._v("表单填写详情")]), a("span", {
        class: 0 == t.writeStatus ? "text-red" : "text-blue"
      }, [t._v(t._s(0 == t.writeStatus ? "未填写" : "已填写"))]), a("q-btn", {
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
      })], 1), a("q-card-section", [a("div", {
        staticClass: "row q-gutter-md"
      }, ["S" !== t.record.frequency ? a("q-select", {
        staticStyle: {
          width: "230px"
        },
        attrs: {
          outlined: "",
          dense: "",
          "emit-value": "",
          label: "填写时间段",
          "map-options": "",
          options: t.batchNoList
        },
        on: {
          input: function(e) {
            return t.changeDetail(0)
          }
        },
        model: {
          value: t.batchNoDetail,
          callback: function(e) {
            t.batchNoDetail = e
          },
          expression: "batchNoDetail"
        }
      }) : t._e(), t.batchNoDetail > 1 ? a("q-btn", {
        attrs: {
          icon: "mdi-arrow-up",
          flat: "",
          round: "",
          dense: "",
          size: "sm"
        },
        on: {
          click: function(e) {
            return t.changeDetail(-1)
          }
        }
      }, [a("q-tooltip", [t._v("\n                    上个时间段\n                  ")])], 1) : t._e(), t.batchNoDetail < t.batchNoList.length ? a("q-btn", {
        attrs: {
          icon: "mdi-arrow-down",
          flat: "",
          round: "",
          dense: "",
          size: "sm"
        },
        on: {
          click: function(e) {
            return t.changeDetail(1)
          }
        }
      }, [a("q-tooltip", [t._v("\n                    下个时间段\n                  ")])], 1) : t._e()], 1), t._l(t.record.info_config, (function(e, i) {
        return a("div", {
          key: i,
          staticClass: "bg-grey-2 q-pa-sm q-mt-sm"
        }, [a("neu-widget", {
          attrs: {
            config: e,
            value: t.infoResult[i],
            no: i + 1,
            viewMode: !0
          }
        })], 1)
      }))], 2)], 1)], 1), a("q-dialog", {
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
        attrs: {
          clickable: ""
        }
      }, [a("q-item-section", {
        attrs: {
          avatar: "",
          top: ""
        }
      }, [a("span", [t._v("进度")])]), a("q-item-section", [a("div", {
        staticClass: "row justify-evenly"
      }, t._l([{
        label: "未" + t.applyShortTitle,
        value: "1"
      }, {
        label: "已" + t.applyShortTitle,
        value: "2"
      }], (function(e) {
        return a("q-btn", {
          key: e.value,
          attrs: {
            outline: "",
            color: e.value == t.queryModel.apply_status ? "primary" : "grey"
          },
          on: {
            click: function(a) {
              return t.getValue(e.value)
            }
          }
        }, [t._v("\n                    " + t._s(e.label) + "\n                    "), a("q-badge", {
          directives: [{
            name: "show",
            rawName: "v-show",
            value: t.queryModel.apply_status == e.value,
            expression: "queryModel.apply_status == item.value"
          }],
          attrs: {
            color: "orange",
            floating: ""
          }
        }, [t._v("√")])], 1)
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
      }, [t._v("可以查询学号、姓名、性别、手机号、年级、院系、专业、班级信息")])], 1)], 1)], 1)], 1)], 1)], 2), a("neu-manage-qa", {
        directives: [{
          name: "show",
          rawName: "v-show",
          value: "qa" == t.tab,
          expression: "tab == 'qa'"
        }],
        staticClass: "bg-grey-3",
        attrs: {
          taskMenuId: "A" == t.applyType ? "apply" : "S" == t.applyType ? "signup" : "collect",
          taskId: t.record.id + "",
          readonly: !t.record.is_author
        }
      }), a("neu-apply-statistics", {
        directives: [{
          name: "show",
          rawName: "v-show",
          value: "statistics" == t.tab,
          expression: "tab == 'statistics'"
        }],
        attrs: {
          id: t.applyId,
          title: t.record.title,
          task_target: t.record.task_target,
          apply_type: t.applyType,
          applyShortTitle: t.applyShortTitle,
          batchNo: t.batchNo.toString(),
          applyStatistics: t.model.applyStatistics
        }
      })], 1)], 1), "A" == t.applyType ? a("q-footer", {
        staticClass: "bg-white text-primary",
        attrs: {
          bordered: ""
        }
      }, [a("q-tabs", {
        staticClass: "text-black",
        attrs: {
          "no-caps": "",
          "active-color": "primary",
          "indicator-color": "transparent",
          align: "justify"
        },
        model: {
          value: t.tab,
          callback: function(e) {
            t.tab = e
          },
          expression: "tab"
        }
      }, [a("q-tab", {
        attrs: {
          name: "progress",
          label: "申请进度"
        }
      }), a("q-separator", {
        attrs: {
          vertical: ""
        }
      }), a("q-tab", {
        attrs: {
          name: "statistics",
          label: "申请统计"
        }
      }), a("q-separator", {
        attrs: {
          vertical: ""
        }
      }), a("q-tab", {
        attrs: {
          name: "qa",
          label: "学生提问"
        }
      })], 1)], 1) : t._e(), "S" == t.applyType ? a("q-footer", {
        staticClass: "bg-white text-primary",
        attrs: {
          bordered: ""
        }
      }, [a("q-tabs", {
        staticClass: "text-black",
        attrs: {
          "no-caps": "",
          "active-color": "primary",
          "indicator-color": "transparent",
          align: "justify"
        },
        model: {
          value: t.tab,
          callback: function(e) {
            t.tab = e
          },
          expression: "tab"
        }
      }, [a("q-tab", {
        attrs: {
          name: "progress",
          label: "报名进度"
        }
      }), a("q-separator", {
        attrs: {
          vertical: ""
        }
      }), a("q-tab", {
        attrs: {
          name: "statistics",
          label: "报名统计"
        }
      }), a("q-separator", {
        attrs: {
          vertical: ""
        }
      }), a("q-tab", {
        attrs: {
          name: "qa",
          label: "学生提问"
        }
      })], 1)], 1) : t._e(), "C" == t.applyType ? a("q-footer", {
        staticClass: "bg-white text-primary",
        attrs: {
          bordered: ""
        }
      }, [a("q-tabs", {
        staticClass: "text-black",
        attrs: {
          "no-caps": "",
          "active-color": "primary",
          "indicator-color": "transparent",
          align: "justify"
        },
        model: {
          value: t.tab,
          callback: function(e) {
            t.tab = e
          },
          expression: "tab"
        }
      }, [a("q-tab", {
        attrs: {
          name: "progress",
          label: "收集进度"
        }
      }), a("q-separator", {
        attrs: {
          vertical: ""
        }
      }), a("q-tab", {
        attrs: {
          name: "statistics",
          label: "收集统计"
        }
      }), a("q-separator", {
        attrs: {
          vertical: ""
        }
      }), a("q-tab", {
        attrs: {
          name: "qa",
          label: "学生提问"
        }
      })], 1)], 1) : t._e(), a("neu-export-data", {
        attrs: {
          config: t.exportCompConfig
        }
      }), a("q-dialog", {
        attrs: {
          persistent: "",
          fullWidth: "",
          maximized: t.maximizedToggle
        },
        model: {
          value: t.searchDialog,
          callback: function(e) {
            t.searchDialog = e
          },
          expression: "searchDialog"
        }
      }, [a("q-layout", {
        staticClass: "bg-white",
        attrs: {
          view: "lHh lpr lFf",
          container: ""
        }
      }, [a("q-header", {
        staticClass: "bg-white"
      }, [a("q-toolbar", [a("div", {
        staticClass: "full-width row items-center justify-between q-px-xs q-py-sm"
      }, [a("div", {
        staticClass: "text-bold text-black"
      }, [t._v("收集内容查询")]), a("div", [a("q-btn", {
        staticClass: "q-ml-sm",
        attrs: {
          outline: "",
          color: "grey",
          label: "关闭"
        },
        on: {
          click: function(e) {
            t.searchDialog = !1
          }
        }
      })], 1)])]), a("q-separator")], 1), a("q-page-container", [a("q-page", [a("q-card-section", [a("q-select", {
        attrs: {
          outlined: "",
          dense: "",
          label: "选择查询内容",
          hint: "仅支持查询文本、数字、单选类型收集内容",
          options: this.configSet,
          "emit-value": "",
          "map-options": "",
          multiple: "",
          "option-disable": function(t) {
            return Object(t) !== t || "T" !== t.type && "N" !== t.type && "R" !== t.type
          }
        },
        scopedSlots: t._u([t.infoConfigList.length > 0 ? {
          key: "append",
          fn: function() {
            return [a("q-icon", {
              staticClass: "cursor-pointer",
              attrs: {
                name: "cancel"
              },
              on: {
                click: function(e) {
                  e.stopPropagation(), t.infoConfigList = []
                }
              }
            })]
          },
          proxy: !0
        } : null], null, !0),
        model: {
          value: t.infoConfigList,
          callback: function(e) {
            t.infoConfigList = e
          },
          expression: "infoConfigList"
        }
      })], 1), a("neu-collect-search", {
        attrs: {
          configList: t.infoConfigList,
          configSet: t.configSet,
          returnForm: t.saveFormInit
        },
        on: {
          input: t.searchInfo,
          reset: t.resetInfoResultList,
          saveForm: t.saveForm
        }
      })], 1)], 1)], 1)], 1)], 1)
    },
    s = [],
    o = (a("13d5"), a("ddb0"), a("ded3")),
    l = a.n(o),
    r = a("58a84"),
    n = a("974f"),
    c = a("156a"),
    p = function() {
      var t = this,
        e = t.$createElement,
        a = t._self._c || e;
      return a("div", t._l(t.list, (function(e, i) {
        return a("q-card", {
          key: i,
          staticClass: "bg-white q-my-sm q-mx-sm",
          staticStyle: {
            "border-left": "0.25rem solid #b5b3b3"
          },
          attrs: {
            flat: ""
          }
        }, [a("q-item", [a("q-item-section", [a("q-item-label", {
          directives: [{
            name: "show",
            rawName: "v-show",
            value: "1" == t.applyStatistics,
            expression: "applyStatistics == '1'"
          }]
        }, [t._v(t._s(e.apply_class))]), a("q-item-label", {
          directives: [{
            name: "show",
            rawName: "v-show",
            value: "2" == t.applyStatistics,
            expression: "applyStatistics == '2'"
          }]
        }, [t._v(t._s(e.apply_major))]), a("q-item-label", {
          directives: [{
            name: "show",
            rawName: "v-show",
            value: "3" == t.applyStatistics,
            expression: "applyStatistics == '3'"
          }]
        }, [t._v(t._s(e.apply_dep))]), a("q-item-label", {
          directives: [{
            name: "show",
            rawName: "v-show",
            value: "4" == t.applyStatistics,
            expression: "applyStatistics == '4'"
          }]
        }, [t._v(t._s(e.name) + "(" + t._s(e.tea_no) + ")")]), a("q-item-label", {
          staticClass: "row justify-between",
          attrs: {
            lines: "1",
            caption: ""
          }
        }, [t._v("\n          应" + t._s(t.applyShortTitle) + "人数：" + t._s(e.apply_total) + "\n          "), a("span", [t._v("已" + t._s(t.applyShortTitle) + "人数：" + t._s(e.apply_count))])]), a("q-item-label", {
          staticClass: "row justify-between",
          attrs: {
            lines: "1",
            caption: ""
          }
        }, [t._v("\n          未" + t._s(t.applyShortTitle) + "人数：" + t._s(e.unapply_total) + "\n        ")])], 1)], 1)], 1)
      })), 1)
    },
    h = [],
    d = {
      name: "NeuApplyStatistics",
      props: {
        id: String,
        title: String,
        task_target: Array,
        apply_type: String,
        applyShortTitle: String,
        batchNo: String,
        applyStatistics: String
      },
      data() {
        return {
          list: []
        }
      },
      mounted() {
        this.loadList()
      },
      watch: {
        id(t) {
          this.id = t, this.loadList()
        },
        title(t) {
          this.title = t, this.loadList()
        },
        batchNo(t) {
          this.batchNo = t, this.loadList()
        },
        applyStatistics(t) {
          this.applyStatistics = t, this.loadList()
        }
      },
      methods: {
        loadList() {
          this.id && this.title && this.batchNo && this.$axiosAction("/api/teacher/apply/apply.api", {
            action: "getNumList",
            apply_id: this.id,
            batch_no: this.batchNo,
            applyStatistics: this.applyStatistics,
            apply_type: this.apply_type
          }).then((t => {
            0 === t.data.code && (this.list = t.data.result)
          })).catch((t => {
            this.list = []
          }))
        }
      }
    },
    u = d,
    m = a("2877"),
    y = a("f09f"),
    g = a("66e5"),
    b = a("4074"),
    _ = a("0170"),
    f = a("eebe"),
    v = a.n(f),
    q = Object(m["a"])(u, p, h, !1, null, null, null),
    w = q.exports;
  v()(q, "components", {
    QCard: y["a"],
    QItem: g["a"],
    QItemSection: b["a"],
    QItemLabel: _["a"]
  });
  var S = a("d852"),
    N = a("971b"),
    x = {
      components: {
        NeuWidget: n["a"],
        NeuManageQa: c["a"],
        NeuApplyStatistics: w,
        NeuExportData: S["a"],
        NeuCollectSearch: N["a"]
      },
      name: "ApplyDetail",
      data() {
        return {
          applyId: this.$route.query.id,
          batchNoParam: this.$route.query.batch_no,
          applyType: this.$route.query.apply_type,
          uploader: window.localStorage.server + this.$appConf.fileUploader,
          tab: "progress",
          record: {},
          records: {},
          batchNoList: [],
          condition: [],
          drawerRight: !1,
          list: [],
          paging: {
            pageSize: 30,
            pageNum: 0,
            pageCount: 0
          },
          infoResult: [],
          dialog: !1,
          queryModel: {
            apply_status: "",
            mutli_search: ""
          },
          condCount: 0,
          batchNo: "",
          originalCond: {},
          infoResultDialog: !1,
          maximizedToggle: !0,
          isLoading: !1,
          batchLabel: "",
          applyTime: !1,
          getBatchnoList: [],
          timeDialog: !1,
          time: "",
          model: {
            applyStatistics: "1"
          },
          roleId: JSON.parse(window.localStorage.getItem("userinfo")).role_id,
          batchNoDetail: null,
          writeStatus: null,
          detailStudentNo: "",
          allowSmsRemind: !1,
          exportCompConfig: null,
          counsellorlabel: localStorage.getItem("counsellorlabel"),
          cId: this.$route.query.compositeId,
          configsRessultList: [],
          searchDialog: !1,
          infoConfigList: [],
          configSet: [],
          saveFormInit: []
        }
      },
      computed: {
        applyShortTitle() {
          return "A" === this.applyType ? "申请" : "C" === this.applyType ? "填写" : "S" === this.applyType ? "报名" : ""
        },
        checkBatchNo() {
          let t = "";
          return t = this.batchNo ? 1 : 0, t
        },
        menuInfo() {
          return "A" === this.applyType ? JSON.parse(window.localStorage.getItem("menu")).find((t => "apply" === t.id)) : "S" === this.applyType ? JSON.parse(window.localStorage.getItem("menu")).find((t => "signup" === t.id)) : "C" === this.applyType ? JSON.parse(window.localStorage.getItem("menu")).find((t => "collect" === t.id)) : {}
        },
        menuId() {
          return "A" === this.applyType ? "apply" : "S" === this.applyType ? "signup" : "C" === this.applyType ? "collect" : {}
        }
      },
      destroyed() {
        window.removeEventListener("popstate", this.goBack, !1)
      },
      watch: {},
      mounted() {
        this.initBatchNoList(), this.$axiosAction("/api/teacher/apply/apply.api", {
          action: "queryApply",
          id: this.applyId,
          apply_type: this.applyType
        }).then((t => {
          0 === t.data.code ? this.record = t.data.result : 2002 === t.data.code && this.$router.push(`/teacher/apply/index?apply_type=${this.applyType}`)
        })).catch((t => {
          this.record = {}
        })), this.allowSmsRemind = "true" === localStorage.getItem("remind"), window.history && window.history.pushState && (history.pushState(null, null, document.URL), window.addEventListener("popstate", this.goBack, !1))
      },
      methods: {
        goBack() {
          null !== this.cId && void 0 !== this.cId ? this.$router.push(`/teacher/apply/statistics?apply_type=${this.applyType}&id=${this.applyId}&compositeId=${this.cId}`) : this.$router.push(`/teacher/apply/statistics?apply_type=${this.applyType}&id=${this.applyId}`)
        },
        initBatchNoList() {
          this.$axiosAction("/api/teacher/apply/apply.api", {
            action: "queryApplyPeriodList",
            apply_id: this.applyId
          }).then((t => {
            if (0 === t.data.code)
              if (this.batchNoList = t.data.result, this.getBatchnoList.length = this.batchNoList.length, this.batchNoList && this.batchNoList.length > 0) {
                if (void 0 !== this.batchNoParam && "" !== this.batchNoParam && null !== this.batchNoParam) {
                  this.batchNo = Number(this.batchNoParam);
                  const t = this.batchNoList.findIndex((t => t.value === this.batchNo));
                  this.batchLabel = this.batchNoList[t].label;
                  for (let e = 0; e < this.batchNoList.length; e++) this.getBatchnoList[e] = e === t
                } else {
                  this.batchNo = this.batchNoList[0].value, this.batchLabel = this.batchNoList[0].label;
                  for (let t = 0; t < this.batchNoList.length; t++) this.getBatchnoList[t] = 0 === t
                }
                this.changeBatchNo()
              } else this.batchNo = "", this.list = [], this.records = {}
          })).catch((t => {
            this.batchNoList = [], this.list = [], this.records = {}
          }))
        },
        checkBatchno(t) {
          if (null != t) {
            this.batchNo = this.batchNoList[t].value, this.batchLabel = this.batchNoList[t].label;
            for (let e = 0; e < this.getBatchnoList.length; e++) e !== t && (this.getBatchnoList[e] = !1);
            !1 === this.getBatchnoList[t] ? (this.timeDialog = !0, this.getBatchnoList[t] = !0) : this.changeBatchNo()
          }
        },
        changeBatchNo() {
          this.$axiosAction("/api/teacher/apply/apply.api", {
            action: "queryApplyResultStat",
            apply_id: this.applyId,
            batch_no: this.batchNo
          }).then((t => {
            if (0 === t.data.code) {
              if (this.records = t.data.result, this.configSet = JSON.parse(JSON.stringify(this.record.info_config ? this.record.info_config : [])), this.configSet.length > 0)
                for (const t in this.configSet) this.configSet[t].index = Number(t);
              this.time = t.data.time, this.loadList((() => {}))
            }
          })).catch((t => {
            this.records = {}
          })), this.applyTime = !1
        },
        loadList(t) {
          this.applyId && this.batchNo ? (t && (this.paging.pageNum = 0, this.list = []), this.paging.pageNum += 1, this.isLoading = !0, this.$axiosAction("/api/teacher/apply/apply.api", l()(l()({
            action: "queryApplyResultList",
            apply_id: this.applyId,
            batch_no: this.batchNo
          }, this.queryModel), {}, {
            pageSize: this.paging.pageSize,
            pageNum: this.paging.pageNum,
            menu_id: this.menuId,
            configsList: this.configsRessultList
          })).then((e => {
            if (0 === e.data.code) {
              if (this.records.info_config)
                for (let l = 0; l < this.records.info_config.length; l++)
                  for (const t of e.data.result.list) t.info_result && (t["info" + l] = Object(r["c"])(this.records.info_config[l], t.info_result[l]));
              this.list = this.list.concat(e.data.result.list), this.listLength = this.list.length;
              const {
                pageSize: t,
                pageNum: a,
                rowCount: i,
                pageCount: s,
                startIndex: o,
                endIndex: n
              } = l()({}, e.data.result);
              this.paging = {
                pageSize: t,
                pageNum: a,
                rowCount: i,
                pageCount: s,
                startIndex: o,
                endIndex: n
              }
            } else this.setDefaultList();
            t && t(), this.isLoading = !1, this.searchDialog = !1
          })).catch((e => {
            this.setDefaultList(), t && t(), this.listLength = 0, this.isLoading = !1
          }))) : t && t()
        },
        setDefaultList() {
          this.list = [], this.paging = {
            pageSize: 30,
            pageNum: 0,
            pageCount: 0
          }
        },
        refresh(t) {
          this.loadList(t)
        },
        exportList() {
          this.applyId && (this.exportCompConfig = ["/api/teacher/apply/apply.api", "exportApplyResultList", l()(l()({
            apply_id: this.applyId,
            batch_no: this.batchNo
          }, this.queryModel), {}, {
            menu_id: this.menuId,
            configsList: this.configsRessultList
          }), {
            [this.record.title]: "result"
          }, this.record.title, null, t => t.reduce(((t, e) => {
            const a = /^(-)?\d+(\.\d+)?$/,
              i = {
                "进度": 1 === e.apply_status ? `已${this.applyShortTitle}` : `未${this.applyShortTitle}`,
                "学号": e.student_no,
                "姓名": e.student_name,
                "性别": e.sex_name,
                [this.counsellorlabel]: e.counsellor,
                "手机号": e.mob,
                "年级": e.grade_name,
                "院系": e.dep_name,
                "专业": e.major_name,
                "班级": e.class_name
              };
            if (1 === this.record.need_location && (i.提交时的定位信息 = e.address), this.record.info_config)
              for (let s = 0; s < this.record.info_config.length; s++) i[`${s+1}.${this.record.info_config[s].label}${a.test(this.record.info_config[s].label)?" ":""}`] = e.info_result ? Object(r["c"])(this.record.info_config[s], e.info_result[s]) : null;
            return t.concat(i)
          }), []), 1e3, 5e3])
        },
        open() {
          this.dialog = !0, this.originalCond = Object.keys(this.queryModel).reduce(((t, e) => (t[e] = this.queryModel[e], t)), {})
        },
        close() {
          this.dialog = !1, this.queryModel = Object.keys(this.originalCond).reduce(((t, e) => (t[e] = this.originalCond[e], t)), {})
        },
        getValue(t) {
          this.queryModel.apply_status === t ? this.queryModel.apply_status = "" : this.queryModel.apply_status = t
        },
        getCondition() {
          this.condCount = Object.keys(this.queryModel).reduce(((t, e) => this.queryModel[e] ? t + 1 : t), 0), this.loadList((() => {})), this.dialog = !1
        },
        showInfoResult(t) {
          this.batchNoDetail = this.batchNo, this.infoResultDialog = !0, this.detailStudentNo = this.list.find((e => e.id === t)).student_no, this.writeStatus = this.list.find((e => e.id === t)).apply_status, this.infoResult = this.list.find((e => e.id === t)).info_result, null === this.infoResult && (this.infoResult = [])
        },
        changeApplyTime() {
          "单次" !== this.record.frequency_name && (this.applyTime = !0)
        },
        chooseSigninTime() {
          this.timeDialog = !1, this.signinTime = !0
        },
        unApplyAlert() {
          this.$axiosAction("/api/teacher/apply/apply.api", {
            action: "insertAgain",
            id: this.applyId,
            batch_no: this.batchNo,
            apply_type: this.applyType
          }).then((t => {}))
        },
        sendSmsRemind() {
          this.$q.loading.show(), this.$axiosAction("/api/teacher/apply/apply.api", {
            action: "sendSmsRemind",
            id: this.applyId,
            title: this.record.title,
            batch_no: this.batchNo,
            apply_type: this.applyType,
            menu_id: this.menuInfo.id,
            menu_name: this.menuInfo.title
          }).then((t => {
            this.$q.loading.hide()
          }))
        },
        exportLists() {
          this.applyId && (this.exportCompConfig = ["/api/teacher/apply/apply.api", "getNumList", {
            apply_id: this.applyId,
            batch_no: this.batchNo,
            applyStatistics: this.model.applyStatistics,
            apply_type: this.applyType
          }, {
            [`${this.record.title}${this.applyShortTitle}的统计`]: "result"
          }, `${this.record.title}${this.applyShortTitle}的统计`, null, t => ({
            [`${this.record.title}${this.applyShortTitle}的统计`]: t[`${this.record.title}${this.applyShortTitle}的统计`].reduce(((t, e) => "1" === this.model.applyStatistics ? t.concat({
              "班级名称": e.apply_class,
              ["已" + this.applyShortTitle + "人数"]: e.apply_count,
              ["应" + this.applyShortTitle + "人数"]: e.apply_total,
              ["未" + this.applyShortTitle + "人数"]: e.unapply_total
            }) : "2" === this.model.applyStatistics ? t.concat({
              "专业名称": e.apply_major,
              ["已" + this.applyShortTitle + "人数"]: e.apply_count,
              ["应" + this.applyShortTitle + "人数"]: e.apply_total,
              ["未" + this.applyShortTitle + "人数"]: e.unapply_total
            }) : "3" === this.model.applyStatistics ? t.concat({
              "院系名称": e.apply_dep,
              ["已" + this.applyShortTitle + "人数"]: e.apply_count,
              ["应" + this.applyShortTitle + "人数"]: e.apply_total,
              ["未" + this.applyShortTitle + "人数"]: e.unapply_total
            }) : "4" === this.model.applyStatistics ? t.concat({
              [this.counsellorlabel + "姓名"]: e.name + "(" + e.tea_no + ")",
              ["已" + this.applyShortTitle + "人数"]: e.apply_count,
              ["应" + this.applyShortTitle + "人数"]: e.apply_total,
              ["未" + this.applyShortTitle + "人数"]: e.unapply_total
            }) : t.concat(e)), [])
          }), null, null])
        },
        changeDetail(t) {
          0 !== t && (this.batchNoDetail = this.batchNoDetail + t), this.$q.loading.show(), this.$axiosAction("/api/teacher/apply/apply.api", {
            action: "getDetaiInfoResult",
            batch_no: this.batchNoDetail,
            apply_id: this.applyId,
            student_no: this.detailStudentNo
          }).then((t => {
            0 === t.data.code && (null === t.data.result.info_result ? (this.infoResult = [], this.writeStatus = 0) : (this.infoResult = t.data.result.info_result, this.writeStatus = t.data.result.apply_status)), this.$q.loading.hide()
          }))
        },
        returnBefor(t) {
          this.$q.dialog({
            title: "确认撤回",
            message: `该学生${this.applyShortTitle}将被撤回。</span>`,
            html: !0,
            persistent: !0,
            cancel: {
              label: "取消",
              outline: !0,
              color: "grey"
            },
            ok: {
              label: "撤回",
              unelevated: !0,
              color: "negative"
            }
          }).onOk((() => {
            this.$q.loading.show(), this.$axiosAction("/api/teacher/apply/apply.api", {
              action: "getBackBefor",
              batch_no: this.batchNo,
              apply_id: this.applyId,
              id: t
            }).then((t => {
              0 === t.data.code && this.changeBatchNo(), this.$q.loading.hide()
            }))
          }))
        },
        showConfigSearch() {
          if (this.saveFormInit.length > 0) {
            this.infoConfigList = [];
            for (const t in this.configSet) this.saveFormInit.findIndex((e => e.label === this.configSet[t].label && e.index === this.configSet[t].index)) > -1 && this.infoConfigList.push(this.configSet[t])
          }
          this.searchDialog = !0
        },
        searchInfo(t) {
          this.configsRessultList = JSON.parse(JSON.stringify(t)), this.loadList((() => {}))
        },
        resetInfoResultList() {
          this.infoConfigList = [], this.configsRessultList = [], this.saveFormInit = [], this.changeBatchNo()
        },
        saveForm(t) {
          this.saveFormInit = t
        }
      }
    },
    L = x,
    C = a("4d5a"),
    k = a("e359"),
    T = a("65c6"),
    I = a("9c40"),
    $ = a("6ac5"),
    R = a("58a81"),
    D = a("eb85"),
    B = a("9404"),
    Q = a("4983"),
    z = a("1c1c"),
    A = a("0016"),
    j = a("09e3"),
    M = a("9989"),
    O = a("6a67"),
    P = a("59d7"),
    F = a("8380"),
    J = a("24e8"),
    E = a("4b7e"),
    H = a("a370"),
    U = a("3786"),
    V = a("9564"),
    W = a("ddd8"),
    G = a("05c0"),
    K = a("6b1d"),
    X = a("27f9"),
    Y = a("7ff0"),
    Z = a("429b"),
    tt = a("7460"),
    et = a("714f"),
    at = a("7f67"),
    it = Object(m["a"])(L, i, s, !1, null, null, null);
  e["default"] = it.exports;
  v()(it, "components", {
    QLayout: C["a"],
    QHeader: k["a"],
    QToolbar: T["a"],
    QBtn: I["a"],
    QToolbarTitle: $["a"],
    QBadge: R["a"],
    QCard: y["a"],
    QItem: g["a"],
    QItemSection: b["a"],
    QItemLabel: _["a"],
    QSeparator: D["a"],
    QDrawer: B["a"],
    QScrollArea: Q["a"],
    QList: z["a"],
    QIcon: A["a"],
    QPageContainer: j["a"],
    QPage: M["a"],
    QBtnToggle: O["a"],
    QPullToRefresh: P["a"],
    QSpinnerDots: F["a"],
    QDialog: J["a"],
    QCardActions: E["a"],
    QCardSection: H["a"],
    QRadio: U["a"],
    QToggle: V["a"],
    QSelect: W["a"],
    QTooltip: G["a"],
    QLinearProgress: K["a"],
    QInput: X["a"],
    QFooter: Y["a"],
    QTabs: Z["a"],
    QTab: tt["a"]
  }), v()(it, "directives", {
    Ripple: et["a"],
    ClosePopup: at["a"]
  })
}
