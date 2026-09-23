/**
 * Webpack module logic recovery
 * Source: assets/www/js/67.js -> module "d03a"
 * Route: /teacher/apply/statistics
 * Component guess: applyStatistics
 * Fidelity: exact module body, beautified only (webpack wrapper retained)
 * Note: variable names inside the original production module are preserved as evidence.
 */
d03a: function(e, t, a) {
  "use strict";
  a.r(t);
  var s = function() {
      var e = this,
        t = this,
        a = t.$createElement,
        s = t._self._c || a;
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
          click: t.goBack
        }
      }), s("q-toolbar-title", [t._v(t._s(this.taskTitle))]), s("q-btn", {
        attrs: {
          flat: "",
          round: "",
          dense: "",
          icon: "get_app"
        },
        on: {
          click: t.exportList
        }
      })], 1), s("q-expansion-item", {
        staticClass: "bg-white full-width q-ml-sm",
        attrs: {
          "switch-toggle-side": "",
          "expand-icon-toggle": "",
          "expand-separator": ""
        },
        scopedSlots: t._u([{
          key: "header",
          fn: function() {
            return [s("q-item-section", [s("q-item-label", {
              staticStyle: {
                "font-size": "1.3em"
              },
              attrs: {
                lines: "1"
              }
            }, [t._v(t._s(t.record.title))]), s("q-item-label", {
              attrs: {
                caption: ""
              }
            }, [t._v(t._s(t.record.notice_priority_name))])], 1), s("q-item-section", {
              attrs: {
                side: ""
              }
            }, [s("q-btn", {
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
            })], 1)]
          },
          proxy: !0
        }])
      }, [s("q-card", [s("q-item", [s("q-item-section", [s("q-item-label", {
        attrs: {
          caption: ""
        }
      }, [s("span", {
        staticClass: "neu-css-after-colon"
      }, [t._v("发起人")]), t._v(t._s(t.record.teacher_name) + "\n              "), s("span", {
        staticClass: "neu-css-after-colon q-ml-lg"
      }, [t._v("已/总执行次数")]), t._v(t._s(t.record.done_total) + "/" + t._s(t.record.total) + "\n            ")]), s("q-item-label", {
        attrs: {
          caption: ""
        }
      }, [s("span", {
        staticClass: "neu-css-after-colon"
      }, [t._v("执行频率")]), t._v(t._s(t.record.frequency_name) + "\n            ")]), s("q-item-label", {
        attrs: {
          caption: ""
        }
      }, [s("span", {
        staticClass: "neu-css-after-colon"
      }, [t._v("执行时间")]), t._v(t._s(t.timeSlot) + "\n            ")]), 0 != t.record.apply_max && t.menuInfo ? s("q-item-label", {
        attrs: {
          caption: ""
        }
      }, [s("span", {
        staticClass: "text-grey neu-css-after-colon"
      }, [t._v(t._s(t.applyShortTitle) + "人数限制")]), t._v(t._s(t.record.apply_max) + "\n            ")]) : t._e(), 0 == t.record.apply_max && t.menuInfo ? s("q-item-label", {
        attrs: {
          caption: ""
        }
      }, [s("span", {
        staticClass: "text-grey neu-css-after-colon"
      }, [t._v(t._s(t.applyShortTitle) + "人数限制")]), t._v("无\n            ")]) : t._e(), null !== t.record.dep_name ? s("q-item-label", {
        attrs: {
          caption: ""
        }
      }, [s("span", {
        staticClass: "text-grey neu-css-after-colon"
      }, [t._v("发布单位")]), t._v(t._s(t.record.dep_name) + "\n            ")]) : t._e()], 1)], 1)], 1)], 1), s("q-separator", {
        staticStyle: {
          height: "0.1rem"
        },
        attrs: {
          color: "grey-3"
        }
      }), s("q-drawer", {
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
      }, [s("q-scroll-area", {
        staticClass: "fit"
      }, [s("q-list", {
        staticStyle: {
          "border-left": "0.15rem solid #027be3"
        },
        attrs: {
          separator: ""
        }
      }, [s("q-item", {
        directives: [{
          name: "ripple",
          rawName: "v-ripple"
        }],
        attrs: {
          clickable: ""
        },
        on: {
          click: function(e) {
            t.detailDialog = !0
          }
        }
      }, [s("q-item-section", {
        attrs: {
          avatar: ""
        }
      }, [s("q-icon", {
        attrs: {
          name: "remove_red_eye",
          size: "sm"
        }
      })], 1), s("q-item-section", {
        staticStyle: {
          "font-size": "1.1rem"
        }
      }, [t._v("预览正文")])], 1), t.record.is_author ? s("q-item", {
        directives: [{
          name: "ripple",
          rawName: "v-ripple"
        }],
        attrs: {
          clickable: ""
        },
        on: {
          click: t.copyApply
        }
      }, [s("q-item-section", {
        attrs: {
          avatar: ""
        }
      }, [s("q-icon", {
        attrs: {
          name: "content_copy",
          size: "sm",
          color: "primary"
        }
      })], 1), s("q-item-section", {
        staticClass: "text-primary",
        staticStyle: {
          "font-size": "1.1rem"
        }
      }, [t._v("复制")])], 1) : t._e(), 1 == t.record.status && t.record.is_author ? s("q-item", {
        directives: [{
          name: "ripple",
          rawName: "v-ripple"
        }],
        attrs: {
          clickable: ""
        },
        on: {
          click: t.terminateJoblog
        }
      }, [s("q-item-section", {
        attrs: {
          avatar: ""
        }
      }, [s("q-icon", {
        attrs: {
          name: "check",
          size: "sm",
          color: "primary"
        }
      })], 1), s("q-item-section", {
        staticClass: "text-primary",
        staticStyle: {
          "font-size": "1.1rem"
        }
      }, [t._v("提前结束")])], 1) : t._e(), t.record.is_author && "S" == t.record.frequency && 0 !== t.record.status ? s("q-item", {
        directives: [{
          name: "ripple",
          rawName: "v-ripple"
        }],
        attrs: {
          clickable: ""
        },
        on: {
          click: t.openExtendDialog
        }
      }, [s("q-item-section", {
        attrs: {
          avatar: ""
        }
      }, [s("q-icon", {
        attrs: {
          name: 2 == t.record.status ? "refresh" : "access_time",
          size: "sm",
          color: "primary"
        }
      })], 1), s("q-item-section", {
        staticClass: "text-primary",
        staticStyle: {
          "font-size": "1.1rem"
        }
      }, [t._v(t._s(2 == t.record.status ? "重新开启" : "延期"))])], 1) : t._e(), t.record.is_author || "A" == t.roleId ? s("q-item", {
        directives: [{
          name: "ripple",
          rawName: "v-ripple"
        }],
        attrs: {
          clickable: ""
        },
        on: {
          click: t.deleteApply
        }
      }, [s("q-item-section", {
        attrs: {
          avatar: ""
        }
      }, [s("q-icon", {
        attrs: {
          name: "delete",
          size: "sm",
          color: "red"
        }
      })], 1), s("q-item-section", {
        staticClass: "text-red",
        staticStyle: {
          "font-size": "1.1rem"
        }
      }, [t._v("删除")])], 1) : t._e()], 1)], 1)], 1)], 1), s("q-page-container", [s("q-page", {
        staticClass: "bg-grey-3 q-pb-sm"
      }, [s("q-pull-to-refresh", {
        ref: "pageRefresh",
        on: {
          refresh: t.refresh
        }
      }, [t._l(t.list, (function(e) {
        return s("q-card", {
          key: e.id,
          staticClass: "bg-white q-mb-sm q-mx-sm",
          attrs: {
            flat: ""
          },
          on: {
            click: function(a) {
              return t.goDetail(e.batch_no)
            }
          }
        }, [s("q-item", [s("q-item-section", [s("q-item-label", {
          staticClass: "q-mb-xs",
          attrs: {
            caption: "",
            lines: "1"
          }
        }, [s("span", {
          staticClass: "neu-css-after-colon"
        }, [t._v(t._s(t.menuInfo.title) + "时间段")]), t._v(t._s(e.timeslot) + "\n                ")]), s("q-item-label", {
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
          staticClass: "neu-css-after-colon"
        }, [t._v(t._s(t.menuInfo.title) + "率")]), t._v(t._s(e.applyedrate) + " %")]), s("div", {
          staticClass: "col-6"
        }, [s("span", {
          staticClass: "neu-css-after-colon"
        }, [t._v("可" + t._s(t.menuInfo.title) + "人数")]), t._v(t._s(e.applytotal))])]), s("q-item-label", {
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
          staticClass: "neu-css-after-colon"
        }, [t._v("已" + t._s(t.menuInfo.title) + "人数")]), t._v(t._s(e.applyed))]), s("div", {
          staticClass: "col-6"
        }, [s("span", {
          staticClass: "neu-css-after-colon"
        }, [t._v("未" + t._s(t.menuInfo.title) + "人数")]), t._v(t._s(e.noapply))])])], 1), s("q-item-section", {
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
          value: !t.isLoading && t.paging.pageCount != t.paging.pageNum,
          expression: "!isLoading && paging.pageCount != paging.pageNum"
        }],
        staticClass: "text-center text-grey q-pt-sm q-pb-md",
        on: {
          click: function(e) {
            return t.getStatisticsList(null)
          }
        }
      }, [t._v("\n            加载更多...\n          ")]), s("div", {
        directives: [{
          name: "show",
          rawName: "v-show",
          value: !t.isLoading && t.paging.pageCount == t.paging.pageNum && 0 != t.list.length,
          expression: "!isLoading && paging.pageCount == paging.pageNum && list.length != 0"
        }],
        staticClass: "text-center text-grey q-pt-sm q-pb-md"
      }, [t._v("\n            没有更多了\n          ")]), s("div", {
        directives: [{
          name: "show",
          rawName: "v-show",
          value: !t.isLoading && 0 == t.list.length,
          expression: "!isLoading && list.length == 0"
        }],
        staticClass: "text-center text-grey q-pt-sm q-pb-md"
      }, [t._v("\n            暂无" + t._s(t.menuInfo.title) + "数据\n          ")]), s("div", {
        directives: [{
          name: "show",
          rawName: "v-show",
          value: t.isLoading,
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
          maximized: t.maximizedToggle
        },
        model: {
          value: t.detailDialog,
          callback: function(e) {
            t.detailDialog = e
          },
          expression: "detailDialog"
        }
      }, [s("q-card", {
        staticClass: "full-width",
        attrs: {
          flat: ""
        }
      }, [s("q-card-section", {
        staticClass: "row items-center justify-between"
      }, [s("div", {
        staticClass: "text-h6"
      }, [t._v("预览")]), s("q-btn", {
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
      })], 1), s("q-separator"), s("q-card-section", [s("div", {
        staticClass: "q-mt-sm text-bold"
      }, [t._v(t._s(t.record.title))]), s("div", {
        staticClass: "q-mt-sm"
      }, [s("span", {
        staticClass: "text-grey neu-css-after-colon"
      }, [t._v("发起人")]), t._v(t._s(t.record.teacher_name) + "\n              ")]), s("div", [s("span", {
        staticClass: "text-grey neu-css-after-colon"
      }, [t._v("创建时间")]), t._v(t._s(t.record.create_time) + "\n              ")]), s("div", {
        staticClass: "q-mt-sm",
        domProps: {
          innerHTML: t._s(t.record.detail)
        }
      }), t.record.attachment && 0 != t.record.attachment.length ? s("div", {
        staticClass: "q-mt-sm",
        class: t.record.attachment && 1 == t.record.attachment.length ? "row" : ""
      }, [s("div", {
        staticClass: "text-grey neu-css-after-colon"
      }, [t._v("附件")]), s("div", t._l(t.record.attachment, (function(e) {
        return s("div", {
          key: e.servername,
          staticClass: "cursor-pointer",
          on: {
            click: function(a) {
              return t.downloadFile(e.link, e.srcname)
            }
          }
        }, [t._v(t._s(e.srcname))])
      })), 0)]) : t._e()]), s("q-separator"), s("q-card-section", [s("div", [s("span", {
        staticClass: "text-grey neu-css-after-colon"
      }, [t._v("执行频率")]), t._v(t._s(t.record.frequency_name) + "\n              ")]), "S" == t.record.frequency ? s("div", [s("span", {
        staticClass: "text-grey neu-css-after-colon"
      }, [t._v("开始截止时间")]), t._v(t._s(t.record.single_begin_time) + " ~ " + t._s(t.record.single_end_time) + "\n              ")]) : t._e(), "L" == t.record.frequency ? s("div", [s("span", {
        staticClass: "text-grey neu-css-after-colon"
      }, [t._v("循环频率")]), t._v(t._s(t.getLoopFrequencyName(t.record.loop_frequency)) + "\n              ")]) : t._e(), "L" == t.record.frequency ? s("div", [s("span", {
        staticClass: "text-grey neu-css-after-colon"
      }, [t._v("开始截止日期")]), t._v(t._s(t.record.loop_begin_date) + " ~ " + t._s(t.record.loop_end_date) + "\n              ")]) : t._e(), "L" == t.record.frequency ? s("div", [s("span", {
        staticClass: "text-grey neu-css-after-colon"
      }, [t._v(t._s((t.menuInfo || {}).title) + "时间段")]), t._v(t._s(t.record.loop_begin_time) + " ~ " + t._s(t.record.loop_end_time) + "\n              ")]) : t._e(), "A" == t.record.frequency ? s("div", {
        staticClass: "row"
      }, [s("span", {
        staticClass: "text-grey neu-css-after-colon"
      }, [t._v("开始截止时间")]), s("div", t._l(t.record.appointed_date, (function(e, a) {
        return s("div", {
          key: a
        }, [t._v(t._s(e.begin_time) + " ~ " + t._s(e.end_time))])
      })), 0)]) : t._e(), s("div", [s("span", {
        staticClass: "text-grey neu-css-after-colon"
      }, [t._v(t._s(t.applyShortTitle) + "人数限制")]), t._v(t._s(t.record.apply_max > 0 ? t.record.apply_max : "无") + "\n              ")]), s("div", [s("span", {
        staticClass: "text-grey neu-css-after-colon"
      }, [t._v("需要学生定位信息")]), t._v(t._s(1 === t.record.need_location ? "是" : "否") + "\n              ")]), s("div", [s("span", {
        staticClass: "text-grey neu-css-after-colon"
      }, [t._v("允许" + t._s(t.counsellorlabel) + "撤回学生数据")]), t._v(t._s(1 === t.record.allow_counsellor ? "是" : "否") + "\n                "), s("div", {
        staticStyle: {
          float: "right",
          "margin-top": "-10px"
        }
      }, [t.record.is_author ? s("q-toggle", {
        staticClass: "q-pa-sm",
        attrs: {
          size: "lg",
          "checked-icon": "check",
          "unchecked-icon": "clear",
          dense: "",
          "false-value": 0,
          "true-value": 1
        },
        on: {
          input: t.changeAllowCounsellor
        },
        model: {
          value: t.record.allow_counsellor,
          callback: function(e) {
            t.$set(t.record, "allow_counsellor", e)
          },
          expression: "record.allow_counsellor"
        }
      }) : t._e()], 1)])]), s("q-separator"), s("q-card-section", [s("div", [s("span", {
        staticClass: "text-grey neu-css-after-colon"
      }, [t._v("允许班级干部查看任务数据")]), t._v(t._s(1 === t.record.stu_manage_flag ? "是" : "否") + "\n              "), s("div", {
        staticStyle: {
          float: "right",
          "margin-top": "-7px"
        }
      }, [t.record.is_author ? s("q-toggle", {
        staticClass: "q-pa-sm",
        attrs: {
          size: "lg",
          "checked-icon": "check",
          "unchecked-icon": "clear",
          dense: "",
          "false-value": 0,
          "true-value": 1
        },
        on: {
          input: t.changeAllowStuManageFlag
        },
        model: {
          value: t.record.stu_manage_flag,
          callback: function(e) {
            t.$set(t.record, "stu_manage_flag", e)
          },
          expression: "record.stu_manage_flag"
        }
      }) : t._e()], 1)])]), s("q-separator"), s("q-card-section", [s("div", [s("span", {
        staticClass: "text-grey neu-css-after-colon"
      }, [t._v(t._s((t.menuInfo || {}).title) + "对象")]), s("div", {
        staticStyle: {
          float: "right"
        }
      }, [s("span", {
        directives: [{
          name: "show",
          rawName: "v-show",
          value: t.record.is_author && "S" != t.record.frequency,
          expression: "record.is_author && record.frequency != 'S'"
        }],
        staticClass: "text-grey",
        on: {
          click: function(e) {
            return t.taskTargetDialogOpen()
          }
        }
      }, [t._v("选择")]), s("q-icon", {
        directives: [{
          name: "show",
          rawName: "v-show",
          value: t.record.is_author && "S" != t.record.frequency,
          expression: "record.is_author && record.frequency != 'S'"
        }],
        staticClass: "text-grey",
        attrs: {
          name: "keyboard_arrow_right",
          size: "sm"
        }
      })], 1), s("br"), t.record.is_author && "S" != t.record.frequency ? s("span", {
        staticClass: "text-grey text-caption"
      }, [t._v("周循环，指定日期频率修改任务对象后下次执行生效")]) : t._e()]), s("neu-view-assigned-student", {
        attrs: {
          value: t.record.task_target
        }
      })], 1), s("q-separator"), s("q-card-section", [s("div", [s("span", {
        staticClass: "text-grey neu-css-after-colon"
      }, [t._v("无需" + t._s((t.menuInfo || {}).title) + "对象")]), s("div", {
        staticStyle: {
          float: "right"
        }
      }, [s("span", {
        directives: [{
          name: "show",
          rawName: "v-show",
          value: t.record.is_author && "S" != t.record.frequency,
          expression: "record.is_author && record.frequency != 'S'"
        }],
        staticClass: "text-grey",
        on: {
          click: function(e) {
            return t.taskTargetExcludDialogOpen()
          }
        }
      }, [t._v("选择")]), s("q-icon", {
        directives: [{
          name: "show",
          rawName: "v-show",
          value: t.record.is_author && "S" != t.record.frequency,
          expression: "record.is_author && record.frequency != 'S'"
        }],
        staticClass: "text-grey",
        attrs: {
          name: "keyboard_arrow_right",
          size: "sm"
        }
      })], 1), s("br"), t.record.is_author && "S" != t.record.frequency ? s("span", {
        staticClass: "text-grey text-caption"
      }, [t._v("周循环，指定日期频率修改无需任务对象后下次执行生效")]) : t._e()]), s("neu-view-assigned-student", {
        attrs: {
          value: t.record.task_target_excluding
        }
      })], 1), s("q-separator"), s("q-card-section", [s("div", [s("span", {
        staticClass: "text-grey neu-css-after-colon"
      }, [t._v("共享")]), s("div", {
        staticStyle: {
          float: "right"
        }
      }, [s("span", {
        directives: [{
          name: "show",
          rawName: "v-show",
          value: t.record.is_author,
          expression: "record.is_author"
        }],
        staticClass: "text-grey",
        on: {
          click: t.openShareDialog
        }
      }, [t._v("选择")]), s("q-icon", {
        directives: [{
          name: "show",
          rawName: "v-show",
          value: t.record.is_author,
          expression: "record.is_author"
        }],
        staticClass: "text-grey",
        attrs: {
          name: "keyboard_arrow_right",
          size: "sm"
        }
      })], 1)]), s("neu-view-assigned-teacher", {
        attrs: {
          value: t.record.share_target
        }
      })], 1), t.record.info_config ? s("q-separator") : t._e(), t.record.info_config ? s("q-card-section", [s("div", [s("span", {
        staticClass: "text-grey neu-css-after-colon"
      }, [t._v("信息收集表单")])]), t._l(t.record.info_config, (function(e, a) {
        return s("div", {
          key: a,
          staticClass: "bg-grey-2 q-pa-sm q-mt-sm"
        }, [s("neu-widget", {
          attrs: {
            config: e,
            viewMode: !0
          },
          model: {
            value: t.infoModel[a],
            callback: function(e) {
              t.$set(t.infoModel, a, e)
            },
            expression: "infoModel[index]"
          }
        })], 1)
      }))], 2) : t._e(), t.record.reviewer ? s("q-separator") : t._e(), t.record.reviewer ? s("q-card-section", [s("div", [s("span", {
        staticClass: "text-grey neu-css-after-colon"
      }, [t._v("审批流程")])]), t._l(t.record.reviewer, (function(e, a) {
        return s("div", {
          key: a,
          staticClass: "bg-grey-2 q-pa-sm q-mt-sm"
        }, [s("div", [s("span", {
          staticClass: "neu-css-after-colon"
        }, [t._v(t._s(e.review_level) + "级审批人员")])]), s("neu-view-assigned-teacher", {
          attrs: {
            value: e.teacher
          }
        })], 1)
      }))], 2) : t._e()], 1)], 1), s("q-dialog", {
        attrs: {
          persistent: "",
          maximized: !0
        },
        model: {
          value: t.taskTargetDialog,
          callback: function(e) {
            t.taskTargetDialog = e
          },
          expression: "taskTargetDialog"
        }
      }, [s("q-card", {
        staticClass: "full-width",
        attrs: {
          flat: ""
        }
      }, [s("q-toolbar", [s("div", {
        staticClass: "full-width row items-center justify-between q-px-xs q-py-sm"
      }, [s("div", {
        staticClass: "text-bold text-black"
      }, [t._v("设置" + t._s((t.menuInfo || {}).title) + "对象")]), s("q-btn", {
        attrs: {
          unelevated: "",
          color: "primary",
          label: "完成"
        },
        on: {
          click: t.updateActionTarget
        }
      })], 1)]), s("q-card-section", [s("neu-assign-student", {
        attrs: {
          permit: t.menuInfo ? t.menuInfo.edit_permit : null,
          "permit-mode": "E",
          "menu-id": t.menuInfo ? t.menuInfo.id : null
        },
        model: {
          value: t.actionTarget,
          callback: function(e) {
            t.actionTarget = e
          },
          expression: "actionTarget"
        }
      })], 1)], 1)], 1), s("q-dialog", {
        attrs: {
          persistent: "",
          maximized: !0
        },
        model: {
          value: t.taskTargetExcludDialog,
          callback: function(e) {
            t.taskTargetExcludDialog = e
          },
          expression: "taskTargetExcludDialog"
        }
      }, [s("q-card", {
        staticClass: "full-width",
        attrs: {
          flat: ""
        }
      }, [s("q-toolbar", [s("div", {
        staticClass: "full-width row items-center justify-between q-px-xs q-py-sm"
      }, [s("div", {
        staticClass: "text-bold text-black"
      }, [t._v("设置无需" + t._s((t.menuInfo || {}).title) + "对象")]), s("q-btn", {
        attrs: {
          unelevated: "",
          color: "primary",
          label: "完成"
        },
        on: {
          click: t.updateNoActionTarget
        }
      })], 1)]), s("q-card-section", [s("neu-assign-student", {
        attrs: {
          permit: t.menuInfo ? t.menuInfo.edit_permit : null,
          "permit-mode": "E",
          "menu-id": t.menuInfo ? t.menuInfo.id : null
        },
        model: {
          value: t.noActionTarget,
          callback: function(e) {
            t.noActionTarget = e
          },
          expression: "noActionTarget"
        }
      })], 1)], 1)], 1), s("q-dialog", {
        attrs: {
          persistent: "",
          fullWidth: "",
          maximized: t.maximizedToggle
        },
        model: {
          value: t.shareDialog,
          callback: function(e) {
            t.shareDialog = e
          },
          expression: "shareDialog"
        }
      }, [s("div", {
        staticClass: "full-width bg-white"
      }, [s("div", {
        staticClass: "full-width row items-center justify-between q-px-md q-py-sm"
      }, [s("div", {
        staticClass: "text-bold"
      }, [t._v("修改共享对象")]), s("q-btn", {
        attrs: {
          unelevated: "",
          color: "primary",
          label: "完成"
        },
        on: {
          click: t.updateShareTarget
        }
      })], 1), s("neu-assign-teacher", {
        model: {
          value: t.shareTarget,
          callback: function(e) {
            t.shareTarget = e
          },
          expression: "shareTarget"
        }
      })], 1)]), s("q-dialog", {
        attrs: {
          persistent: ""
        },
        model: {
          value: t.extendDialog,
          callback: function(e) {
            t.extendDialog = e
          },
          expression: "extendDialog"
        }
      }, [s("q-card", {
        staticClass: "full-width",
        attrs: {
          flat: ""
        }
      }, [s("q-form", {
        on: {
          submit: t.resetTime
        }
      }, [s("q-card-section", {
        staticClass: "text-h6"
      }, [t._v("\n                " + t._s(1 == t.record.status ? "确认延期" : "确认重新开启") + "\n              ")]), s("q-card-section", [s("div", {
        directives: [{
          name: "show",
          rawName: "v-show",
          value: 2 == t.record.status,
          expression: "record.status == 2"
        }]
      }, [t._v("重新开启后，"), s("span", {
        staticClass: "text-red"
      }, [t._v("未填写学生")]), t._v("将再次收到提醒。")]), s("div", {
        staticClass: "row items-center"
      }, [t._v("\n                  " + t._s(1 == t.record.status ? "延期" : "重新开启") + "反馈截止时间至：\n                  "), s("q-field", {
        staticStyle: {
          width: "200px"
        },
        attrs: {
          outlined: "",
          dense: "",
          "stack-label": "",
          "hide-bottom-space": "",
          "lazy-rules": "",
          rules: [function(e) {
            return !!e || "请填写该项"
          }, function(t) {
            return t > e.record.end_time || "请填写原截止时间之后的时间"
          }],
          value: t.collect_end_time
        },
        scopedSlots: t._u([{
          key: "control",
          fn: function() {
            return [t._v(t._s(t.collect_end_time))]
          },
          proxy: !0
        }, {
          key: "append",
          fn: function() {
            return [s("q-icon", {
              staticClass: "cursor-pointer",
              attrs: {
                name: "event"
              }
            }, [s("q-popup-proxy", {
              attrs: {
                "transition-show": "scale",
                "transition-hide": "scale"
              }
            }, [s("div", [s("q-date", {
              attrs: {
                flat: "",
                minimal: "",
                mask: "YYYY-MM-DD HH:mm"
              },
              model: {
                value: t.collect_end_time,
                callback: function(e) {
                  t.collect_end_time = e
                },
                expression: "collect_end_time"
              }
            }, [s("div", {
              staticClass: "row items-center justify-end"
            }, [s("q-btn", {
              directives: [{
                name: "close-popup",
                rawName: "v-close-popup"
              }],
              attrs: {
                dense: "",
                label: "关闭",
                flat: ""
              }
            })], 1)])], 1)])], 1), s("q-icon", {
              staticClass: "cursor-pointer",
              attrs: {
                name: "access_time"
              }
            }, [s("q-popup-proxy", {
              attrs: {
                "transition-show": "scale",
                "transition-hide": "scale"
              }
            }, [s("div", {
              staticClass: "row items-start"
            }, [s("q-time", {
              attrs: {
                flat: "",
                mask: "YYYY-MM-DD HH:mm",
                format24h: ""
              },
              model: {
                value: t.collect_end_time,
                callback: function(e) {
                  t.collect_end_time = e
                },
                expression: "collect_end_time"
              }
            }, [s("div", {
              staticClass: "row items-center justify-end"
            }, [s("q-btn", {
              directives: [{
                name: "close-popup",
                rawName: "v-close-popup"
              }],
              attrs: {
                dense: "",
                label: "关闭",
                flat: ""
              }
            })], 1)])], 1)])], 1)]
          },
          proxy: !0
        }])
      })], 1)]), s("q-card-section", {
        staticClass: "row q-gutter-sm justify-end"
      }, [s("q-btn", {
        directives: [{
          name: "close-popup",
          rawName: "v-close-popup"
        }],
        attrs: {
          outline: "",
          color: "grey",
          label: "取消"
        }
      }), s("q-btn", {
        attrs: {
          unelevated: "",
          color: "primary",
          label: 1 == t.record.status ? "延期" : "重新开启",
          type: "submit"
        }
      })], 1)], 1)], 1)], 1), s("neu-export-data", {
        attrs: {
          config: t.exportCompConfig
        }
      })], 1)], 1)], 1)
    },
    i = [],
    r = (a("c975"), a("13d5"), a("ded3")),
    o = a.n(r),
    n = a("ad56"),
    l = a("f395"),
    c = a("9a3d"),
    d = a("4aac"),
    p = a("5333"),
    u = a("974f"),
    h = a("d852"),
    g = {
      name: "applyStatistics",
      components: {
        NeuAssignStudent: l["a"],
        NeuAssignTeacher: c["a"],
        NeuViewAssignedStudent: d["a"],
        NeuViewAssignedTeacher: p["a"],
        NeuWidget: u["a"],
        NeuExportData: h["a"]
      },
      data() {
        return {
          taskTitle: "",
          menuInfo: null,
          menuId: "",
          applyId: this.$route.query.id,
          applyType: this.$route.query.apply_type,
          applyTypeName: this.$route.query.apply_type_name,
          rowList: [],
          list: [],
          color: "",
          paging: {
            pageSize: 30,
            pageNum: 0,
            pageCount: 0
          },
          originalCond: {},
          isLoading: !1,
          drawerRight: !1,
          record: {},
          applyShortTitle: "",
          detailDialog: !1,
          taskTargetDialog: !1,
          taskTargetExcludDialog: !1,
          extendDialog: !1,
          shareDialog: !1,
          shareTarget: [],
          actionTarget: [],
          noActionTarget: [],
          infoModel: [],
          maximizedToggle: !0,
          collect_end_time: "",
          roleId: JSON.parse(window.localStorage.getItem("userinfo")).role_id,
          exportCompConfig: null,
          timeSlot: "",
          counsellorlabel: localStorage.getItem("counsellorlabel"),
          cId: this.$route.query.compositeId
        }
      },
      destroyed() {
        window.removeEventListener("popstate", this.goBack, !1)
      },
      mounted() {
        window.history && window.history.pushState && (history.pushState(null, null, document.URL), window.addEventListener("popstate", this.goBack, !1)), "A" === this.applyType ? (this.menuId = "apply", this.applyShortTitle = "申请", this.menuInfo = JSON.parse(window.localStorage.getItem("menu")).find((e => e.id === this.menuId))) : "S" === this.applyType ? (this.menuId = "signup", this.applyShortTitle = "报名", this.menuInfo = JSON.parse(window.localStorage.getItem("menu")).find((e => e.id === this.menuId))) : "C" === this.applyType && (this.menuId = "collect", this.applyShortTitle = "填写", this.menuInfo = JSON.parse(window.localStorage.getItem("menu")).find((e => e.id === this.menuId)));
        const e = this.$route.query.status;
        this.color = 0 === e ? "border-left:0.25rem solid #f2c037;" : 1 === e ? "border-left:0.25rem solid #027be3;" : "border-left:0.25rem solid #b5b3b3;", this.getStatisticsList((() => {}));
        const t = this.menuInfo.title;
        this.rowList = [t + "时间段", t + "率", "可" + t + "人数", "已" + t + "人数", "未" + t + "人数"], this.resetDetail()
      },
      methods: {
        getStatisticsList(e) {
          e && (this.paging.pageNum = 0, this.list = []), this.paging.pageNum += 1, this.isLoading = !0, this.$axiosAction("/api/teacher/apply/apply.api", {
            action: "applyStatisticsDate",
            apply_id: this.applyId,
            menu_id: this.menuId,
            pageSize: this.paging.pageSize,
            pageNum: this.paging.pageNum
          }).then((t => {
            if (0 === t.data.code) {
              this.taskTitle = t.data.title + this.menuInfo.title + "统计", this.list = this.list.concat(t.data.result.list);
              const {
                pageSize: e,
                pageNum: a,
                rowCount: s,
                pageCount: i,
                startIndex: r,
                endIndex: n
              } = o()({}, t.data.result);
              this.paging = {
                pageSize: e,
                pageNum: a,
                rowCount: s,
                pageCount: i,
                startIndex: r,
                endIndex: n
              }
            } else this.setDefaultList();
            e && e(), this.isLoading = !1
          })).catch((t => {
            this.list = [], this.setDefaultList(), e && e(), this.isLoading = !1
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
          this.getStatisticsList(e)
        },
        goBack() {
          null !== this.cId && void 0 !== this.cId ? this.$router.push("/teacher/composite/detail?id=" + this.$route.query.compositeId) : this.$router.push("/teacher/apply/index?apply_type=" + this.applyType)
        },
        goDetail(e) {
          null !== this.cId && void 0 !== this.cId ? this.$router.push(`/teacher/apply/detail?id=${this.applyId}&batch_no=${e}&apply_type=${this.applyType}&compositeId=${this.cId}`) : this.$router.push(`/teacher/apply/detail?id=${this.applyId}&batch_no=${e}&apply_type=${this.applyType}`)
        },
        exportList() {
          this.$q.loading.show(), this.exportCompConfig = ["/api/teacher/apply/apply.api", "exportaApplyStatisticsDate", {
            apply_id: this.applyId,
            menu_id: this.menuId
          }, {
            [this.taskTitle + "数据"]: "result"
          }, this.taskTitle + "数据", null, e => e.reduce(((e, t) => {
            const a = {};
            return a[`${this.rowList[0]}`] = t.timeslot, a[`${this.rowList[1]}`] = t.applyedrate + "%", a[`${this.rowList[2]}`] = t.applytotal, a[`${this.rowList[3]}`] = t.applyed, a[`${this.rowList[4]}`] = t.noapply, e.concat(a)
          }), []), 1e3, 5e3], this.$q.loading.hide()
        },
        downloadFile(e, t) {
          Object(n["c"])(e, t)
        },
        getLoopFrequencyName(e) {
          if (e && 0 !== e.length) {
            const t = ["周一", "周二", "周三", "周四", "周五", "周六", "周日"].reduce(((t, a, s) => e.indexOf(((s + 1) % 7).toString()) > -1 ? t.concat(a) : t), []);
            return t.join("、")
          }
          return ""
        },
        taskTargetDialogOpen() {
          this.taskTargetDialog = !0, this.actionTarget = JSON.parse(JSON.stringify(this.record.task_target))
        },
        taskTargetExcludDialogOpen() {
          this.taskTargetExcludDialog = !0, this.noActionTarget = JSON.parse(JSON.stringify(this.record.task_target_excluding))
        },
        updateActionTarget() {
          if (this.actionTarget.length <= 0) return this.$showErrorNotify("任务对象不能为空");
          this.$q.loading.show(), this.$axiosAction("/api/teacher/apply/apply.api", {
            action: "updateActionTarget",
            id: this.applyId,
            task_target: this.actionTarget && this.actionTarget.length > 0 ? JSON.stringify(this.actionTarget) : null
          }).then((e => {
            0 === e.data.code && (this.record.task_target = this.actionTarget, this.taskTargetDialog = !1), this.$q.loading.hide()
          })).catch((e => {
            this.$q.loading.hide()
          }))
        },
        updateNoActionTarget() {
          this.$q.loading.show(), this.$axiosAction("/api/teacher/apply/apply.api", {
            action: "updateNoActionTarget",
            id: this.applyId,
            task_target_excluding: this.noActionTarget && this.noActionTarget.length > 0 ? JSON.stringify(this.noActionTarget) : null
          }).then((e => {
            0 === e.data.code && (this.record.task_target_excluding = this.noActionTarget, this.taskTargetExcludDialog = !1), this.$q.loading.hide()
          })).catch((e => {
            this.$q.loading.hide()
          }))
        },
        openShareDialog() {
          null !== this.cId && void 0 !== this.cId || null !== this.record.composite_id ? this.$q.dialog({
            title: "修改组合共享",
            message: `该${this.menuInfo.title}为组合任务<span class="text-red">点击确定进入组合详情修改。</span>`,
            html: !0,
            persistent: !0,
            cancel: {
              label: "取消",
              outline: !0,
              color: "grey"
            },
            ok: {
              label: "确定",
              unelevated: !0,
              color: "primary"
            }
          }).onOk((() => {
            null !== this.record.composite_id && (this.cId = this.record.composite_id), this.$router.push("/teacher/composite/detail?id=" + this.cId)
          })) : (this.shareDialog = !0, this.shareTarget = this.record.share_target)
        },
        updateShareTarget() {
          this.$q.loading.show(), this.$axiosAction("/api/teacher/apply/apply.api", {
            action: "updateShareTarget",
            id: this.applyId,
            share_target: this.shareTarget && this.shareTarget.length > 0 ? JSON.stringify(this.shareTarget) : null
          }).then((e => {
            0 === e.data.code && (this.record.share_target = this.shareTarget, this.shareDialog = !1), this.$q.loading.hide()
          })).catch((e => {
            this.$q.loading.hide()
          }))
        },
        copyApply() {
          let e = "";
          null !== this.record.composite_id && (e = "，该任务为组合任务子任务"), this.$q.dialog({
            title: "确认复制",
            message: `复制该${this.menuInfo.title}设置数据并全新发布${e}`,
            html: !0,
            persistent: !0,
            cancel: {
              label: "取消",
              outline: !0,
              color: "grey"
            },
            ok: {
              label: "复制",
              unelevated: !0,
              color: "primary"
            }
          }).onOk((() => {
            this.$axiosAction("/api/teacher/apply/apply.api", {
              action: "queryApplyForEditing",
              id: this.applyId,
              role_id: this.roleId,
              apply_type: this.applyType
            }).then((e => {
              if (0 === e.data.code) {
                let t = {};
                t = null !== this.record.composite_id ? {
                  apply_type: this.applyType,
                  compositeId: this.record.composite_id,
                  befrom: "copy"
                } : {
                  apply_type: this.applyType
                }, this.$router.push({
                  name: "/teacher/apply/new",
                  query: t,
                  params: {
                    record: e.data.result
                  }
                })
              }
            })).catch((e => {}))
          }))
        },
        openExtendDialog() {
          this.extendDialog = !0, this.collect_end_time = this.record.end_time
        },
        resetTime() {
          this.$q.loading.show(), this.$axiosAction("/api/teacher/apply/apply.api", {
            action: "updateEndTime",
            id: this.applyId,
            collect_end_time: this.collect_end_time,
            title: this.record.title,
            status: this.record.status,
            apply_type: this.applyType,
            batch_no: 1,
            apply_type_name: this.menuInfo.title,
            menu_id: this.menuInfo.id
          }).then((e => {
            0 === e.data.code && (this.extendDialog = !1, this.resetDetail()), this.$q.loading.hide()
          })).catch((e => {
            this.$q.loading.hide()
          }))
        },
        deleteApply() {
          this.$q.dialog({
            title: "确认删除",
            message: `该${this.menuInfo.title}及其产生的<span class="text-red">数据将被清空。</span>`,
            html: !0,
            persistent: !0,
            cancel: {
              label: "取消",
              outline: !0,
              color: "grey"
            },
            ok: {
              label: "删除",
              unelevated: !0,
              color: "negative"
            }
          }).onOk((() => {
            this.$q.loading.show(), this.$axiosAction("/api/teacher/apply/apply.api", {
              action: "deleteApply",
              id: this.applyId,
              apply_type: this.applyType
            }).then((e => {
              0 === e.data.code && this.goBack(), this.$q.loading.hide()
            })).catch((e => {
              this.$q.loading.hide()
            }))
          }))
        },
        terminateJoblog() {
          this.$q.dialog({
            title: "确认提前结束",
            message: `该${this.menuInfo.title}执行频率若为周循环则当天依然有效！`,
            html: !0,
            persistent: !0,
            cancel: {
              label: "取消",
              outline: !0,
              color: "grey"
            },
            ok: {
              label: "结束",
              unelevated: !0,
              color: "negative"
            }
          }).onOk((() => {
            this.$q.loading.show(), this.$axiosAction("/api/teacher/apply/apply.api", {
              action: "updateEndTimeToEnd",
              id: this.applyId,
              frequency: this.record.frequency
            }).then((e => {
              0 === e.data.code && (this.resetDetail(), this.getStatisticsList((() => {}))), this.$q.loading.hide()
            })).catch((e => {
              this.$q.loading.hide()
            }))
          }))
        },
        resetDetail() {
          this.$axiosAction("/api/teacher/apply/apply.api", {
            action: "queryApply",
            id: this.$route.query.id,
            apply_type: this.applyType
          }).then((e => {
            0 === e.data.code ? (this.record = e.data.result, this.record.begin_time_befor === this.record.end_time_befor ? this.timeSlot = this.record.begin_time + " ~ " + this.record.end_time_after : this.timeSlot = this.record.begin_time + " ~ " + this.record.end_time) : 2002 === e.data.code && this.goBack()
          })).catch((e => {
            this.record = {}
          }))
        },
        changeAllowCounsellor() {
          this.$axiosAction("/api/teacher/apply/apply.api", {
            action: "updateAllowCounsellor",
            id: this.$route.query.id,
            allow_counsellor: this.record.allow_counsellor
          }).then((e => {
            0 === e.data.code || this.$router.push(`/teacher/apply/index?apply_type=${this.applyType}&apply_type_name=${(this.menuInfo||{}).title}`)
          })).catch((e => {
            this.record = {}
          }))
        },
        changeAllowStuManageFlag() {
          this.$axiosAction("/api/teacher/apply/apply.api", {
            action: "updateStuManageFlag",
            id: this.$route.query.id,
            stu_manage_flag: this.record.stu_manage_flag
          }).then((e => {
            0 === e.data.code || this.$router.push("/teacher/apply/index")
          })).catch((e => {
            this.record = {}
          }))
        }
      }
    },
    m = g,
    _ = a("2877"),
    y = a("4d5a"),
    v = a("e359"),
    f = a("65c6"),
    q = a("9c40"),
    x = a("6ac5"),
    w = a("3b73"),
    b = a("4074"),
    C = a("0170"),
    k = a("f09f"),
    T = a("66e5"),
    S = a("eb85"),
    I = a("9404"),
    $ = a("4983"),
    D = a("1c1c"),
    N = a("0016"),
    A = a("09e3"),
    L = a("9989"),
    z = a("59d7"),
    Q = a("8380"),
    E = a("24e8"),
    O = a("a370"),
    J = a("9564"),
    M = a("0378"),
    F = a("8572"),
    j = a("7cbe"),
    R = a("52ee"),
    Y = a("ca78"),
    B = a("714f"),
    H = a("7f67"),
    P = a("eebe"),
    V = a.n(P),
    W = Object(_["a"])(m, s, i, !1, null, null, null);
  t["default"] = W.exports;
  V()(W, "components", {
    QLayout: y["a"],
    QHeader: v["a"],
    QToolbar: f["a"],
    QBtn: q["a"],
    QToolbarTitle: x["a"],
    QExpansionItem: w["a"],
    QItemSection: b["a"],
    QItemLabel: C["a"],
    QCard: k["a"],
    QItem: T["a"],
    QSeparator: S["a"],
    QDrawer: I["a"],
    QScrollArea: $["a"],
    QList: D["a"],
    QIcon: N["a"],
    QPageContainer: A["a"],
    QPage: L["a"],
    QPullToRefresh: z["a"],
    QSpinnerDots: Q["a"],
    QDialog: E["a"],
    QCardSection: O["a"],
    QToggle: J["a"],
    QForm: M["a"],
    QField: F["a"],
    QPopupProxy: j["a"],
    QDate: R["a"],
    QTime: Y["a"]
  }), V()(W, "directives", {
    Ripple: B["a"],
    ClosePopup: H["a"]
  })
}
