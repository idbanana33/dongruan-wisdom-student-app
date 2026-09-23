/**
 * Webpack module logic recovery
 * Source: assets/www/js/116.js -> module "49de"
 * Route: /teacher/signin/statistics
 * Component guess: NeuSigninRangeNow
 * Fidelity: exact module body, beautified only (webpack wrapper retained)
 * Note: variable names inside the original production module are preserved as evidence.
 */
"49de": function(t, e, i) {
  "use strict";
  i.r(e);
  var a = function() {
      var t = this,
        e = t.$createElement,
        i = t._self._c || e;
      return i("q-layout", {
        attrs: {
          view: "lHh lpr lFf"
        }
      }, [i("q-header", {
        staticClass: "bg-grey-3 text-black"
      }, [i("q-toolbar", [i("q-btn", {
        attrs: {
          flat: "",
          round: "",
          dense: "",
          icon: "keyboard_arrow_left"
        },
        on: {
          click: t.goBack
        }
      }), i("q-toolbar-title", [t._v(t._s(this.taskTitle))]), i("q-btn", {
        attrs: {
          flat: "",
          round: "",
          dense: "",
          icon: "get_app"
        },
        on: {
          click: t.exportList
        }
      })], 1), i("q-expansion-item", {
        staticClass: "bg-white full-width q-ml-sm",
        attrs: {
          "switch-toggle-side": "",
          "expand-icon-toggle": "",
          "expand-separator": ""
        },
        scopedSlots: t._u([{
          key: "header",
          fn: function() {
            return [i("q-item-section", [i("q-item-label", {
              staticStyle: {
                "font-size": "1.3em"
              }
            }, [t._v(t._s(t.record.title))]), i("q-item-label", {
              attrs: {
                caption: ""
              }
            }, [t._v(t._s(t.record.signin_type_name))])], 1), i("q-item-section", {
              attrs: {
                side: ""
              }
            }, [i("q-btn", {
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
      }, [i("q-card", [i("q-item", [i("q-item-section", [i("q-item-label", [i("span", {
        staticClass: "text-grey neu-css-after-colon"
      }, [t._v("发起人")]), t._v(t._s(t.record.creator) + "\n            ")]), i("q-item-label", [i("span", {
        staticClass: "text-grey neu-css-after-colon"
      }, [t._v("总签到率")]), i("label", {
        staticClass: "text-right",
        staticStyle: {
          color: "#1E90FF"
        },
        on: {
          click: function(e) {
            return t.CountRule("signin")
          }
        }
      }, [t._v("计算规则>")]), i("span", {
        staticClass: "q-ml-md q-mr-sm"
      }, [t._v(t._s(t.record.signin_total) + "/" + t._s(t.record.signin_count - t.record.leave_total))]), i("span", {
        class: t.record.signin_ratio >= 85 ? "text-positive" : t.record.signin_ratio >= 60 ? "text-warning" : "text-red"
      }, [t._v(t._s(t.record.signin_ratio) + "%")])]), i("q-item-label", [i("span", {
        staticClass: "text-grey neu-css-after-colon"
      }, [t._v("总请假率")]), i("label", {
        staticClass: "text-right",
        staticStyle: {
          color: "#1E90FF"
        },
        on: {
          click: function(e) {
            return t.CountRule("leave")
          }
        }
      }, [t._v("计算规则>")]), i("span", {
        staticClass: "q-ml-md"
      }, [t._v(t._s(t.record.leave_total) + "/" + t._s(t.record.signin_count))]), i("span", {
        staticClass: "q-ml-sm"
      }, [t._v(t._s(t.record.leave_ratio) + "%")])]), i("q-item-label", {
        directives: [{
          name: "show",
          rawName: "v-show",
          value: "1" == t.record.picture_evidence,
          expression: "record.picture_evidence == '1'"
        }]
      }, [i("span", {
        staticClass: "text-grey neu-css-after-colon"
      }, [t._v("签到方式")]), t._v(t._s(t.record.signin_method_name) + " + 拍照"), "L" == t.record.signin_method ? i("span", [t._v("(" + t._s(1 == t.record.allow_outside ? "允许范围外签到" : "不允许范围外签到") + ")"), i("span", {
        staticClass: "text-primary cursor-pointer",
        on: {
          click: t.lookRange
        }
      }, [t._v("查看范围")])]) : t._e()]), i("q-item-label", {
        directives: [{
          name: "show",
          rawName: "v-show",
          value: "0" == t.record.picture_evidence,
          expression: "record.picture_evidence == '0'"
        }]
      }, [i("span", {
        staticClass: "text-grey neu-css-after-colon"
      }, [t._v("签到方式")]), t._v(t._s(t.record.signin_method_name)), "L" == t.record.signin_method ? i("span", [t._v("(" + t._s(1 == t.record.allow_outside ? "允许范围外签到" : "不允许范围外签到") + ")"), i("span", {
        staticClass: "text-primary cursor-pointer",
        on: {
          click: t.lookRange
        }
      }, [t._v("查看范围")])]) : t._e()]), i("q-item-label", [i("span", {
        staticClass: "text-grey neu-css-after-colon"
      }, [t._v("签到频率")]), t._v(t._s(t.record.frequency_name) + "\n              "), i("span", {
        staticClass: "text-grey neu-css-after-colon q-ml-lg"
      }, [t._v("已/总执行次数")]), t._v(t._s(t.record.done_count) + "/" + t._s(t.record.total) + "\n            ")]), i("q-item-label", [i("span", {
        staticClass: "text-grey neu-css-after-colon"
      }, [t._v("执行周期")]), t._v(t._s(t.record.begin_time) + " ~ " + t._s(t.record.end_time) + "\n            ")]), null !== t.record.dep_name ? i("q-item-label", [i("span", {
        staticClass: "text-grey neu-css-after-colon"
      }, [t._v("发布单位")]), t._v(t._s(t.record.dep_name) + "\n            ")]) : t._e()], 1)], 1)], 1)], 1), i("q-separator", {
        staticStyle: {
          height: "0.1rem"
        },
        attrs: {
          color: "grey-3"
        }
      })], 1), i("q-drawer", {
        attrs: {
          side: "right",
          width: 200,
          breakpoint: 10,
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
      }, [i("q-scroll-area", {
        staticClass: "fit"
      }, [i("q-list", {
        staticStyle: {
          "border-left": "0.15rem solid #027be3"
        },
        attrs: {
          separator: ""
        }
      }, [i("q-item", {
        directives: [{
          name: "ripple",
          rawName: "v-ripple"
        }],
        attrs: {
          clickable: ""
        }
      }, [i("q-item-section", {
        attrs: {
          avatar: ""
        }
      }, [i("q-icon", {
        attrs: {
          name: "remove_red_eye",
          size: "sm"
        }
      })], 1), i("q-item-section", {
        staticStyle: {
          "font-size": "1.1rem"
        },
        on: {
          click: function(e) {
            return t.detailDialogOpen()
          }
        }
      }, [t._v("预览正文")])], 1), 1 == t.record.status && t.record.is_author ? i("q-item", {
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
      }, [i("q-item-section", {
        attrs: {
          avatar: ""
        }
      }, [i("q-icon", {
        attrs: {
          name: "check",
          size: "sm",
          color: "primary"
        }
      })], 1), i("q-item-section", {
        staticClass: "text-primary",
        staticStyle: {
          "font-size": "1.1rem"
        }
      }, [t._v("提前结束")])], 1) : t._e(), t.record.is_author ? i("q-item", {
        directives: [{
          name: "ripple",
          rawName: "v-ripple"
        }],
        attrs: {
          clickable: ""
        }
      }, [i("q-item-section", {
        attrs: {
          avatar: ""
        }
      }, [i("q-icon", {
        attrs: {
          name: "content_copy",
          size: "sm",
          color: "primary"
        }
      })], 1), i("q-item-section", {
        staticClass: "text-primary",
        staticStyle: {
          "font-size": "1.1rem"
        },
        on: {
          click: t.copySignin
        }
      }, [t._v("复制")])], 1) : t._e(), t.record.is_author || "A" == t.roleId ? i("q-item", {
        directives: [{
          name: "ripple",
          rawName: "v-ripple"
        }],
        attrs: {
          clickable: ""
        }
      }, [i("q-item-section", {
        attrs: {
          avatar: ""
        }
      }, [i("q-icon", {
        attrs: {
          name: "delete",
          size: "sm",
          color: "red"
        }
      })], 1), i("q-item-section", {
        staticClass: "text-red",
        staticStyle: {
          "font-size": "1.1rem"
        },
        on: {
          click: t.deleteSignin
        }
      }, [t._v("删除")])], 1) : t._e()], 1)], 1)], 1), i("q-page-container", [i("q-page", {
        staticClass: "bg-grey-3 q-pb-sm"
      }, [i("q-pull-to-refresh", {
        ref: "pageRefresh",
        on: {
          refresh: t.refresh
        }
      }, [t._l(t.list, (function(e) {
        return i("q-card", {
          key: e.id,
          staticClass: "bg-white q-mb-sm q-mx-sm",
          attrs: {
            flat: ""
          },
          on: {
            click: function(i) {
              return t.goDetail(e.batch_no)
            }
          }
        }, [i("q-item", [i("q-item-section", [i("q-item-label", {
          staticClass: "q-mb-xs",
          attrs: {
            caption: "",
            lines: "1"
          }
        }, [i("span", {
          staticClass: "neu-css-after-colon"
        }, [t._v("签到时间段")]), t._v(t._s(e.timeslot) + "\n                ")]), i("q-item-label", {
          staticClass: "row",
          staticStyle: {
            "min-width": "250px"
          },
          attrs: {
            caption: "",
            lines: "1"
          }
        }, [i("div", {
          staticClass: "col-6"
        }, [i("span", {
          staticClass: "neu-css-after-colon"
        }, [t._v("签到率")]), t._v(t._s(e.signinedrate) + " %")]), i("div", {
          staticClass: "col-6"
        }, [i("span", {
          staticClass: "neu-css-after-colon"
        }, [t._v("请假率")]), t._v(t._s(e.leaverate) + " %")])]), i("q-item-label", {
          staticClass: "row",
          staticStyle: {
            "min-width": "250px"
          },
          attrs: {
            caption: "",
            lines: "1"
          }
        }, [i("div", {
          staticClass: "col-6"
        }, [i("span", {
          staticClass: "neu-css-after-colon"
        }, [t._v("应签人数")]), t._v(t._s(e.signintotal))]), i("div", {
          staticClass: "col-6"
        }, [i("span", {
          staticClass: "neu-css-after-colon"
        }, [t._v("已签人数")]), t._v(t._s(e.signined))])]), i("q-item-label", {
          staticClass: "row",
          staticStyle: {
            "min-width": "250px"
          },
          attrs: {
            caption: "",
            lines: "1"
          }
        }, [i("div", {
          staticClass: "col-6"
        }, [i("span", {
          staticClass: "neu-css-after-colon"
        }, [t._v("已请假人数")]), t._v(t._s(e.leaved))]), i("div", {
          staticClass: "col-6"
        }, [i("span", {
          staticClass: "neu-css-after-colon"
        }, [t._v("未签到人数")]), t._v(t._s(e.nosignin))])]), i("q-item-label", {
          directives: [{
            name: "show",
            rawName: "v-show",
            value: t.allowOutside,
            expression: "allowOutside"
          }],
          staticClass: "row",
          attrs: {
            caption: "",
            lines: "1"
          }
        }, [i("span", {
          staticClass: "neu-css-after-colon"
        }, [t._v("范围外签到人数")]), t._v(t._s(e.outsidecount) + "\n                  ")])], 1), i("q-item-section", {
          attrs: {
            side: ""
          }
        }, [i("q-item-label", [i("q-icon", {
          attrs: {
            name: "keyboard_arrow_right",
            size: "xs"
          }
        })], 1)], 1)], 1)], 1)
      })), i("div", {
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
      }, [t._v("\n            加载更多...\n          ")]), i("div", {
        directives: [{
          name: "show",
          rawName: "v-show",
          value: !t.isLoading && t.paging.pageCount == t.paging.pageNum && 0 != t.list.length,
          expression: "!isLoading && paging.pageCount == paging.pageNum && list.length != 0"
        }],
        staticClass: "text-center text-grey q-pt-sm q-pb-md"
      }, [t._v("\n            没有更多了\n          ")]), i("div", {
        directives: [{
          name: "show",
          rawName: "v-show",
          value: !t.isLoading && 0 == t.list.length,
          expression: "!isLoading && list.length == 0"
        }],
        staticClass: "text-center text-grey q-pt-sm q-pb-md"
      }, [t._v("\n            暂无" + t._s(t.menuInfo.title) + "数据\n          ")]), i("div", {
        directives: [{
          name: "show",
          rawName: "v-show",
          value: t.isLoading,
          expression: "isLoading"
        }],
        staticClass: "text-center text-grey q-pt-sm q-pb-md"
      }, [i("q-spinner-dots", {
        attrs: {
          color: "primary",
          size: "md"
        }
      })], 1)], 2), i("q-dialog", {
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
      }, [i("q-card", {
        staticClass: "full-width",
        attrs: {
          flat: ""
        }
      }, [i("q-card-section", {
        staticClass: "row items-center justify-between"
      }, [i("div", {
        staticClass: "text-bold"
      }, [t._v("预览")]), i("q-btn", {
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
      })], 1), i("q-separator"), i("q-card-section", [i("div", {
        staticClass: "q-mt-sm text-bold"
      }, [t._v(t._s(t.record.title))]), i("div", {
        staticClass: "q-mt-sm"
      }, [i("span", {
        staticClass: "text-grey neu-css-after-colon"
      }, [t._v("发起人")]), t._v(t._s(t.record.creator) + "\n        ")]), i("div", [i("span", {
        staticClass: "text-grey neu-css-after-colon"
      }, [t._v("创建时间")]), t._v(t._s(t.record.create_time) + "\n        ")]), t.record.attachment && 0 != t.record.attachment.length ? i("div", {
        staticClass: "q-mt-sm",
        class: t.record.attachment && 1 == t.record.attachment.length ? "row" : ""
      }, [i("div", {
        staticClass: "text-grey neu-css-after-colon"
      }, [t._v("附件")]), i("div", t._l(t.record.attachment, (function(e) {
        return i("div", {
          key: e.servername,
          staticClass: "cursor-pointer",
          on: {
            click: function(i) {
              return t.downloadFile(e.link, e.srcname)
            }
          }
        }, [t._v(t._s(e.srcname))])
      })), 0)]) : t._e()]), i("q-separator"), i("q-card-section", [i("div", [i("span", {
        staticClass: "text-grey neu-css-after-colon"
      }, [t._v("执行频率")]), t._v(t._s(t.record.frequency_name) + "\n        ")]), "S" == t.record.frequency ? i("div", {
        staticClass: "row"
      }, [i("span", {
        staticClass: "text-grey neu-css-after-colon"
      }, [t._v("开始截止时间")]), t._v(t._s(t.record.single_begin_time) + " ~ " + t._s(t.record.single_end_time) + "\n        ")]) : t._e(), "L" == t.record.frequency ? i("div", [i("span", {
        staticClass: "text-grey neu-css-after-colon"
      }, [t._v("循环频率")]), t._v(t._s(t.getLoopFrequencyName(t.record.loop_frequency)) + "\n        ")]) : t._e(), "L" == t.record.frequency ? i("div", {
        staticClass: "row"
      }, [i("span", {
        staticClass: "text-grey neu-css-after-colon"
      }, [t._v("开始截止日期")]), t._v(t._s(t.record.loop_begin_date) + " ~ " + t._s(t.record.loop_end_date) + "\n        ")]) : t._e(), "L" == t.record.frequency ? i("div", {
        staticClass: "row"
      }, [i("span", {
        staticClass: "text-grey neu-css-after-colon"
      }, [t._v("签到时间段")]), t._v(t._s(t.record.loop_begin_time) + " ~ " + t._s(t.record.loop_end_time) + "\n        ")]) : t._e(), "A" == t.record.frequency ? i("div", {
        staticClass: "row"
      }, [i("span", {
        staticClass: "text-grey neu-css-after-colon"
      }, [t._v("开始截止时间")]), i("div", t._l(t.record.appointed_date, (function(e, a) {
        return i("div", {
          key: a
        }, [t._v(t._s(e.begin_time) + " ~ " + t._s(e.end_time))])
      })), 0)]) : t._e()]), "SQR" == t.record.signin_method || "DQR" == t.record.signin_method ? i("q-separator") : t._e(), "SQR" == t.record.signin_method || "DQR" == t.record.signin_method ? i("q-card-section", [i("div", [i("span", {
        staticClass: "text-grey neu-css-after-colon"
      }, [t._v("二维码负责人（学生）")]), t.record.is_author ? i("div", {
        staticStyle: {
          float: "right"
        }
      }, [i("span", {
        staticClass: "text-grey",
        on: {
          click: function(e) {
            return t.updateShowOpen(1)
          }
        }
      }, [t._v("选择")]), i("q-icon", {
        staticClass: "text-grey",
        attrs: {
          name: "keyboard_arrow_right",
          size: "sm"
        }
      })], 1) : t._e()]), i("neu-view-assigned-student", {
        attrs: {
          value: t.record.student_showing
        }
      })], 1) : t._e(), "SQR" == t.record.signin_method || "DQR" == t.record.signin_method ? i("q-separator") : t._e(), "SQR" == t.record.signin_method || "DQR" == t.record.signin_method ? i("q-card-section", [i("div", [i("span", {
        staticClass: "text-grey neu-css-after-colon"
      }, [t._v("二维码负责人（教师）")]), t.record.is_author ? i("div", {
        staticStyle: {
          float: "right"
        }
      }, [i("span", {
        staticClass: "text-grey",
        on: {
          click: function(e) {
            return t.updateShowOpen(2)
          }
        }
      }, [t._v("选择")]), i("q-icon", {
        staticClass: "text-grey",
        attrs: {
          name: "keyboard_arrow_right",
          size: "sm"
        }
      })], 1) : t._e()]), i("neu-view-assigned-teacher", {
        attrs: {
          value: t.record.teacher_showing
        }
      })], 1) : t._e(), i("q-separator"), i("q-card-section", [i("div", [i("span", {
        staticClass: "text-grey neu-css-after-colon"
      }, [t._v("允许班级干部查看任务数据")]), t._v(t._s(1 === t.record.stu_manage_flag ? "是" : "否") + "\n        "), i("div", {
        staticStyle: {
          float: "right",
          "margin-top": "-7px"
        }
      }, [t.record.is_author ? i("q-toggle", {
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
      }) : t._e()], 1)])]), i("q-separator"), i("q-card-section", [i("div", [i("span", {
        staticClass: "text-grey neu-css-after-colon"
      }, [t._v(t._s((t.menuInfo || {}).title) + "对象")]), i("div", {
        staticStyle: {
          float: "right"
        }
      }, [i("span", {
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
      }, [t._v("选择")]), i("q-icon", {
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
      })], 1), i("br"), t.record.is_author && "S" != t.record.frequency ? i("span", {
        staticClass: "text-grey text-caption"
      }, [t._v("周循环，指定日期频率修改签到对象后下次执行生效")]) : t._e()]), i("neu-view-assigned-student", {
        attrs: {
          value: t.record.task_target
        }
      })], 1), i("q-separator"), i("q-card-section", [i("div", [i("span", {
        staticClass: "text-grey neu-css-after-colon"
      }, [t._v("无需" + t._s((t.menuInfo || {}).title) + "对象")]), i("div", {
        staticStyle: {
          float: "right"
        }
      }, [i("span", {
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
      }, [t._v("选择")]), i("q-icon", {
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
      })], 1), i("br"), t.record.is_author && "S" != t.record.frequency ? i("span", {
        staticClass: "text-grey text-caption"
      }, [t._v("周循环，指定日期频率修改无需签到对象后下次执行生效")]) : t._e()]), i("neu-view-assigned-student", {
        attrs: {
          value: t.record.task_target_excluding
        }
      })], 1), i("q-separator"), i("q-card-section", [i("div", [i("span", {
        staticClass: "text-grey neu-css-after-colon"
      }, [t._v("共享")]), i("div", {
        directives: [{
          name: "show",
          rawName: "v-show",
          value: t.record.is_author && t.editPermit,
          expression: "record.is_author && editPermit"
        }],
        staticStyle: {
          float: "right"
        }
      }, [i("span", {
        staticClass: "text-grey",
        on: {
          click: t.openShareDialog
        }
      }, [t._v("选择")]), i("q-icon", {
        staticClass: "text-grey",
        attrs: {
          name: "keyboard_arrow_right",
          size: "sm"
        }
      })], 1)]), i("neu-view-assigned-teacher", {
        attrs: {
          value: t.record.share_target
        }
      })], 1), t.record.info_config ? i("q-separator") : t._e(), t.record.info_config ? i("q-card-section", [i("div", [i("span", {
        staticClass: "text-grey neu-css-after-colon"
      }, [t._v("签到附加题表单")])]), t._l(t.record.info_config, (function(e, a) {
        return i("div", {
          key: a,
          staticClass: "bg-grey-2 q-pa-sm q-mt-sm"
        }, [i("neu-widget", {
          attrs: {
            config: e
          },
          model: {
            value: t.infoModel[a],
            callback: function(e) {
              t.$set(t.infoModel, a, e)
            },
            expression: "infoModel[index]"
          }
        })], 1)
      }))], 2) : t._e()], 1)], 1), i("q-dialog", {
        attrs: {
          persistent: "",
          fullWidth: ""
        },
        model: {
          value: t.showStuDialog,
          callback: function(e) {
            t.showStuDialog = e
          },
          expression: "showStuDialog"
        }
      }, [i("q-card", {
        staticClass: "full-width",
        attrs: {
          flat: ""
        }
      }, [i("q-toolbar", [i("div", {
        staticClass: "full-width row items-center justify-between q-px-xs q-py-sm"
      }, [i("div", {
        staticClass: "text-bold text-black"
      }, [t._v("设置二维码负责人(学生)")]), i("q-btn", {
        attrs: {
          unelevated: "",
          color: "primary",
          label: "完成"
        },
        on: {
          click: function(e) {
            return t.updateShowTarget(1)
          }
        }
      })], 1)]), i("q-card-section", [i("neu-assign-student", {
        attrs: {
          permit: t.menuInfo ? t.menuInfo.edit_permit : null,
          "permit-mode": "E",
          "menu-id": t.menuInfo ? t.menuInfo.id : null
        },
        model: {
          value: t.studentShowing,
          callback: function(e) {
            t.studentShowing = e
          },
          expression: "studentShowing"
        }
      })], 1)], 1)], 1), i("q-dialog", {
        attrs: {
          persistent: "",
          fullWidth: ""
        },
        model: {
          value: t.showTeaDialog,
          callback: function(e) {
            t.showTeaDialog = e
          },
          expression: "showTeaDialog"
        }
      }, [i("q-card", {
        staticClass: "full-width",
        attrs: {
          flat: ""
        }
      }, [i("q-toolbar", [i("div", {
        staticClass: "full-width row items-center justify-between q-px-xs q-py-sm"
      }, [i("div", {
        staticClass: "text-bold text-black"
      }, [t._v("设置二维码负责人(教师)")]), i("q-btn", {
        attrs: {
          unelevated: "",
          color: "primary",
          label: "完成"
        },
        on: {
          click: function(e) {
            return t.updateShowTarget(2)
          }
        }
      })], 1)]), i("q-card-section", [i("neu-assign-teacher", {
        attrs: {
          permit: t.menuInfo ? t.menuInfo.edit_permit : null,
          "permit-mode": "E",
          "menu-id": t.menuInfo ? t.menuInfo.id : null
        },
        model: {
          value: t.teacherShowing,
          callback: function(e) {
            t.teacherShowing = e
          },
          expression: "teacherShowing"
        }
      })], 1)], 1)], 1), i("q-dialog", {
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
      }, [i("div", {
        staticClass: "full-width bg-white"
      }, [i("div", {
        staticClass: "full-width row items-center justify-between q-px-md q-py-sm"
      }, [i("div", {
        staticClass: "text-bold"
      }, [t._v("修改共享对象")]), i("q-btn", {
        attrs: {
          unelevated: "",
          color: "primary",
          label: "完成"
        },
        on: {
          click: t.updateShareTarget
        }
      })], 1), i("neu-assign-teacher", {
        model: {
          value: t.shareTarget,
          callback: function(e) {
            t.shareTarget = e
          },
          expression: "shareTarget"
        }
      })], 1)]), i("q-dialog", {
        attrs: {
          persistent: "",
          fullWidth: ""
        },
        model: {
          value: t.showStuDialog,
          callback: function(e) {
            t.showStuDialog = e
          },
          expression: "showStuDialog"
        }
      }, [i("q-card", {
        staticClass: "full-width",
        attrs: {
          flat: ""
        }
      }, [i("q-toolbar", [i("div", {
        staticClass: "full-width row items-center justify-between q-px-xs q-py-sm"
      }, [i("div", {
        staticClass: "text-bold text-black"
      }, [t._v("设置二维码负责人(学生)")]), i("q-btn", {
        attrs: {
          unelevated: "",
          color: "primary",
          label: "完成"
        },
        on: {
          click: function(e) {
            return t.updateShowTarget(1)
          }
        }
      })], 1)]), i("q-card-section", [i("neu-assign-student", {
        attrs: {
          permit: t.menuInfo ? t.menuInfo.edit_permit : null,
          "permit-mode": "E",
          "menu-id": t.menuInfo ? t.menuInfo.id : null
        },
        model: {
          value: t.studentShowing,
          callback: function(e) {
            t.studentShowing = e
          },
          expression: "studentShowing"
        }
      })], 1)], 1)], 1), i("q-dialog", {
        attrs: {
          persistent: "",
          fullWidth: ""
        },
        model: {
          value: t.showTeaDialog,
          callback: function(e) {
            t.showTeaDialog = e
          },
          expression: "showTeaDialog"
        }
      }, [i("q-card", {
        staticClass: "full-width",
        attrs: {
          flat: ""
        }
      }, [i("q-toolbar", [i("div", {
        staticClass: "full-width row items-center justify-between q-px-xs q-py-sm"
      }, [i("div", {
        staticClass: "text-bold text-black"
      }, [t._v("设置二维码负责人(教师)")]), i("q-btn", {
        attrs: {
          unelevated: "",
          color: "primary",
          label: "完成"
        },
        on: {
          click: function(e) {
            return t.updateShowTarget(2)
          }
        }
      })], 1)]), i("q-card-section", [i("neu-assign-teacher", {
        attrs: {
          permit: t.menuInfo ? t.menuInfo.edit_permit : null,
          "permit-mode": "E",
          "menu-id": t.menuInfo ? t.menuInfo.id : null
        },
        model: {
          value: t.teacherShowing,
          callback: function(e) {
            t.teacherShowing = e
          },
          expression: "teacherShowing"
        }
      })], 1)], 1)], 1), i("q-dialog", {
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
      }, [i("q-card", {
        staticClass: "full-width",
        attrs: {
          flat: ""
        }
      }, [i("q-toolbar", [i("div", {
        staticClass: "full-width row items-center justify-between q-px-xs q-py-sm"
      }, [i("div", {
        staticClass: "text-bold text-black"
      }, [t._v("设置" + t._s((t.menuInfo || {}).title) + "对象")]), i("q-btn", {
        attrs: {
          unelevated: "",
          color: "primary",
          label: "完成"
        },
        on: {
          click: t.updateActionTarget
        }
      })], 1)]), i("q-card-section", [i("neu-assign-student", {
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
      })], 1)], 1)], 1), i("q-dialog", {
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
      }, [i("q-card", {
        staticClass: "full-width",
        attrs: {
          flat: ""
        }
      }, [i("q-toolbar", [i("div", {
        staticClass: "full-width row items-center justify-between q-px-xs q-py-sm"
      }, [i("div", {
        staticClass: "text-bold text-black"
      }, [t._v("设置无需" + t._s((t.menuInfo || {}).title) + "对象")]), i("q-btn", {
        attrs: {
          unelevated: "",
          color: "primary",
          label: "完成"
        },
        on: {
          click: t.updateNoActionTarget
        }
      })], 1)]), i("q-card-section", [i("neu-assign-student", {
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
      })], 1)], 1)], 1), i("q-dialog", {
        attrs: {
          countRuleShow: ""
        },
        model: {
          value: t.countRuleShow,
          callback: function(e) {
            t.countRuleShow = e
          },
          expression: "countRuleShow"
        }
      }, [i("q-card", {
        staticStyle: {
          "border-radius": "25px"
        }
      }, [i("q-item", [i("q-item-section", {
        staticClass: "flex flex-center"
      }, [i("q-item-label", {
        staticClass: "text-weight-bold"
      }, [t._v(t._s(t.ruleTitle))])], 1)], 1), i("q-item", {
        staticClass: "q-my-sm",
        attrs: {
          dense: ""
        }
      }, [i("q-item-section", [i("q-item-label", [t._v(t._s(t.ruleMessage))])], 1)], 1), i("q-separator"), i("q-card-actions", {
        attrs: {
          align: "around"
        }
      }, [i("q-btn", {
        directives: [{
          name: "close-popup",
          rawName: "v-close-popup"
        }],
        attrs: {
          flat: "",
          color: "primary"
        }
      }, [t._v("知道了")])], 1)], 1)], 1), i("neu-export-data", {
        attrs: {
          config: t.exportCompConfig
        }
      }), i("q-dialog", {
        attrs: {
          persistent: "",
          fullWidth: "",
          maximized: t.maximizedToggle
        },
        model: {
          value: t.rangeDialog,
          callback: function(e) {
            t.rangeDialog = e
          },
          expression: "rangeDialog"
        }
      }, [i("q-layout", {
        staticClass: "bg-white",
        attrs: {
          view: "lHh lpr lFf",
          container: ""
        }
      }, [i("q-header", {
        staticClass: "bg-white"
      }, [i("q-toolbar", [i("div", {
        staticClass: "full-width row items-center justify-between q-px-xs q-py-sm"
      }, [i("div", {
        staticClass: "text-bold text-black"
      }, [t._v("签到范围")]), i("div", [(t.record.is_author, t._e()), i("q-btn", {
        staticClass: "q-ml-sm",
        attrs: {
          outline: "",
          color: "grey",
          label: "关闭"
        },
        on: {
          click: function(e) {
            t.rangeDialog = !1
          }
        }
      })], 1)])]), i("q-separator")], 1), i("q-page-container", [i("q-page", [i("neu-signin-range-now", {
        attrs: {
          selectList: t.selectList,
          id: t.signinId
        },
        model: {
          value: t.record.range,
          callback: function(e) {
            t.$set(t.record, "range", e)
          },
          expression: "record.range"
        }
      })], 1)], 1)], 1)], 1)], 1)], 1)], 1)
    },
    s = [],
    n = (i("c975"), i("13d5"), i("ded3")),
    r = i.n(n),
    o = i("f395"),
    l = i("9a3d"),
    c = i("5333"),
    d = i("4aac"),
    g = i("974f"),
    u = i("ad56"),
    h = i("d852"),
    p = function() {
      var t = this,
        e = t.$createElement,
        i = t._self._c || e;
      return i("div", [0 == t.list.length ? i("div", [i("q-card", {
        staticStyle: {
          height: "3.5rem",
          "align-items": "center",
          display: "flex",
          "justify-content": "center"
        },
        attrs: {
          flat: ""
        }
      }, [t._v("\n      暂无签到地点\n    ")])], 1) : t._e(), i("q-card", {
        staticClass: "full-width",
        attrs: {
          flat: ""
        }
      }, [i("q-list", {
        attrs: {
          bordered: "",
          separator: ""
        }
      }, [t._l(t.list, (function(e, a) {
        return i("q-item", {
          key: e.id,
          attrs: {
            clickable: "",
            "row-key": "id"
          },
          on: {
            click: function(e) {
              return t.viewMap(a)
            }
          }
        }, [i("q-item-section", [i("q-item-label", {
          staticClass: "text-primary cursor-pointer",
          staticStyle: {
            "font-size": "1.01rem"
          }
        }, [t._v(t._s(e.title))]), i("q-item-label", {
          staticClass: "row justify-between",
          attrs: {
            caption: ""
          }
        }, [i("div", [i("span", {
          staticClass: "neu-css-after-colon"
        }, [t._v("有效范围")]), i("span", {
          staticClass: "text-black"
        }, [t._v(t._s("circle" == e.area ? "半径" + e.radius + "米" : "多边形"))])]), i("div", [i("span", {
          staticClass: "neu-css-after-colon"
        }, [t._v("添加人")]), i("span", {
          staticClass: "text-black"
        }, [t._v(t._s(e.teacher_name))])])])], 1)], 1)
      })), i("q-item", {
        directives: [{
          name: "show",
          rawName: "v-show",
          value: t.paging.pageCount != t.paging.pageNum,
          expression: "paging.pageCount != paging.pageNum"
        }],
        attrs: {
          clickable: ""
        },
        on: {
          click: t.onLoad
        }
      }, [i("q-item-section", {
        staticClass: "text-center"
      }, [i("div", {
        staticClass: "text-grey"
      }, [t._v("加载更多")])])], 1), i("q-item", {
        directives: [{
          name: "show",
          rawName: "v-show",
          value: t.paging.pageCount == t.paging.pageNum,
          expression: "paging.pageCount == paging.pageNum"
        }],
        attrs: {
          clickable: ""
        },
        on: {
          click: t.onLoad
        }
      }, [i("q-item-section", {
        staticClass: "text-center"
      }, [i("div", {
        staticClass: "text-grey"
      }, [t._v("没有更多了")])])], 1)], 2)], 1), i("q-dialog", {
        attrs: {
          fullWidth: "",
          maximized: t.maximizedToggle
        },
        model: {
          value: t.mapViewDialog,
          callback: function(e) {
            t.mapViewDialog = e
          },
          expression: "mapViewDialog"
        }
      }, [i("q-card", {
        staticClass: "full-width",
        attrs: {
          flat: ""
        }
      }, [i("q-card-section", [i("neu-view-map", {
        attrs: {
          value: t.record,
          "popup-close-btn": !0
        }
      })], 1)], 1)], 1)], 1)
    },
    m = [],
    _ = i("a086"),
    v = {
      name: "NeuSigninRangeNow",
      components: {
        NeuViewMap: _["a"]
      },
      props: {
        selectList: Array,
        id: String
      },
      data() {
        return {
          subTitle: "",
          list: [],
          selected: [],
          paging: {
            pageSize: 10,
            pageNum: 1,
            pageCount: 2
          },
          record: {},
          modelValue: null,
          maximizedToggle: !0,
          mapViewDialog: !1
        }
      },
      mounted() {
        this.subTitle = this.title, this.refresh(null), this.modelValue = this.selectList, this.selected = this.modelValue, this.changeSelect()
      },
      watch: {
        selectList(t) {
          this.modelValue = t, this.selected = this.modelValue, this.changeSelect()
        },
        modelValue(t) {
          this.$emit("input", t)
        },
        id(t) {
          this.loadList()
        }
      },
      methods: {
        loadList(t, e) {
          e && (this.paging.pageNum = 0), this.paging.pageCount !== this.paging.pageNum ? (this.paging.pageNum += 1, this.$axiosAction("/api/teacher/signin/signin.api", {
            action: "querySelectedRangePage",
            id: this.id,
            pageSize: this.paging.pageSize,
            pageNum: this.paging.pageNum
          }).then((i => {
            if (0 === i.data.code) {
              this.list = e ? i.data.result.list : this.list.concat(i.data.result.list);
              const {
                pageSize: t,
                pageNum: a,
                rowCount: s,
                pageCount: n,
                startIndex: o,
                endIndex: l
              } = r()({}, i.data.result);
              this.paging = {
                pageSize: t,
                pageNum: a,
                rowCount: s,
                pageCount: n,
                startIndex: o,
                endIndex: l
              }
            }
            t && t(), this.changeSelect()
          })).catch((e => {
            this.list = [], t && t()
          }))) : t && t()
        },
        refresh(t) {
          this.loadList(t, !0)
        },
        onLoad(t, e) {
          this.loadList(e, !1)
        },
        viewMap(t) {
          this.mapViewDialog = !0, this.record = r()({}, this.list[t])
        },
        goConfig() {
          this.$router.push("/teacher/basic/config")
        },
        getValue() {
          this.modelValue = this.selected
        },
        changeSelect() {
          const t = this.selected;
          for (let e = 0; e < t.length; e++)
            for (let i = 0; i < this.list.length; i++) t[e].id === this.list[i].id && (t[e] = this.list[i]);
          this.selected = t
        }
      }
    },
    f = v,
    w = i("2877"),
    q = i("f09f"),
    x = i("1c1c"),
    b = i("66e5"),
    y = i("4074"),
    C = i("8f8e"),
    S = i("0170"),
    k = i("24e8"),
    T = i("a370"),
    I = i("eebe"),
    D = i.n(I),
    N = Object(w["a"])(f, p, m, !1, null, null, null),
    $ = N.exports;
  D()(N, "components", {
    QCard: q["a"],
    QList: x["a"],
    QItem: b["a"],
    QItemSection: y["a"],
    QCheckbox: C["a"],
    QItemLabel: S["a"],
    QDialog: k["a"],
    QCardSection: T["a"]
  });
  var L = {
      components: {
        NeuAssignTeacher: l["a"],
        NeuViewAssignedTeacher: c["a"],
        NeuViewAssignedStudent: d["a"],
        NeuAssignStudent: o["a"],
        NeuWidget: g["a"],
        NeuExportData: h["a"],
        NeuSigninRangeNow: $
      },
      name: "SigninStatistics",
      data() {
        return {
          signinId: this.$route.query.id,
          taskTitle: "",
          list: [],
          color: "",
          paging: {
            pageSize: 30,
            pageNum: 0,
            pageCount: 0
          },
          originalCond: {},
          menuInfo: null,
          isLoading: !1,
          allowOutside: !1,
          record: {},
          ruleTitle: "",
          drawerRight: !1,
          detailDialog: !1,
          roleId: JSON.parse(window.localStorage.getItem("userinfo")).role_id,
          maximizedToggle: !0,
          showStuDialog: !1,
          studentShowing: [],
          showTeaDialog: !1,
          teacherShowing: [],
          taskTargetDialog: !1,
          taskTargetExcludDialog: !1,
          editPermit: null,
          shareDialog: !1,
          shareTarget: [],
          infoModel: [],
          actionTarget: [],
          noActionTarget: [],
          countRuleShow: !1,
          ruleMessage: "",
          exportCompConfig: null,
          cId: this.$route.query.compositeId,
          rangeDialog: !1,
          selectList: []
        }
      },
      destroyed() {
        window.removeEventListener("popstate", this.goBack, !1)
      },
      mounted() {
        window.history && window.history.pushState && (history.pushState(null, null, document.URL), window.addEventListener("popstate", this.goBack, !1));
        const t = this.$route.query.status;
        this.color = 0 === t ? "#f2c037;" : 1 === t ? "#027be3;" : "#b5b3b3;", window.localStorage.getItem("menu") && (this.menuInfo = JSON.parse(window.localStorage.getItem("menu")).find((t => "signin" === t.id)), this.editPermit = this.menuInfo.edit_permit), this.getData(), this.getStatisticsList((() => {}))
      },
      methods: {
        CountRule(t) {
          "signin" === t ? (this.ruleTitle = "签到率", this.ruleMessage = "签到率计算规则：已签到次数/(应签到次数-已请假次数)") : "leave" === t && (this.ruleTitle = "请假率", this.ruleMessage = "请假率计算规则：已请假次数/应签到次数"), this.countRuleShow = !0
        },
        getData() {
          this.$axiosAction("/api/teacher/signin/signin.api", {
            action: "querySignin",
            id: this.signinId
          }).then((t => {
            0 === t.data.code ? this.record = t.data.result : this.goBack()
          })).catch((t => {
            this.record = {}
          }))
        },
        getStatisticsList(t) {
          t && (this.paging.pageNum = 0, this.list = []), this.paging.pageNum += 1, this.isLoading = !0, this.$axiosAction("/api/teacher/signin/signin.api", {
            action: "signinStatisticsDate",
            signin_id: this.signinId,
            pageSize: this.paging.pageSize,
            pageNum: this.paging.pageNum
          }).then((e => {
            if (0 === e.data.code) {
              this.taskTitle = e.data.title + this.menuInfo.title + "统计", this.allowOutside = 1 === e.data.allowOutside, this.list = this.list.concat(e.data.result.list);
              const {
                pageSize: t,
                pageNum: i,
                rowCount: a,
                pageCount: s,
                startIndex: n,
                endIndex: o
              } = r()({}, e.data.result);
              this.paging = {
                pageSize: t,
                pageNum: i,
                rowCount: a,
                pageCount: s,
                startIndex: n,
                endIndex: o
              }
            } else this.setDefaultList();
            t && t(), this.isLoading = !1
          })).catch((e => {
            this.list = [], this.setDefaultList(), t && t(), this.isLoading = !1
          }))
        },
        setDefaultList() {
          this.list = [], this.paging = {
            pageSize: 30,
            pageNum: 0,
            pageCount: 0
          }
        },
        refresh(t) {
          this.getStatisticsList(t)
        },
        goBack() {
          null !== this.cId && void 0 !== this.cId ? this.$router.push("/teacher/composite/detail?id=" + this.$route.query.compositeId) : this.$router.push("/teacher/signin/index")
        },
        goDetail(t) {
          null !== this.cId && void 0 !== this.cId ? this.$router.push(`/teacher/signin/detail?id=${this.signinId}&batch_no=${t}&compositeId=${this.cId}`) : this.$router.push(`/teacher/signin/detail?id=${this.signinId}&batch_no=${t}`)
        },
        exportList() {
          this.$q.loading.show(), this.exportCompConfig = ["/api/teacher/signin/signin.api", "exportSigninStatisticsDate", {
            signin_id: this.signinId
          }, {
            [this.taskTitle + "数据"]: "result"
          }, this.taskTitle + "数据", null, t => t.reduce(((t, e) => {
            const i = {
              "签到时间段": e.timeslot,
              "签到率": e.signinedrate + "%",
              "请假率": e.leaverate + "%",
              "应签人数": e.signintotal,
              "已签人数": e.signined,
              "已请假人数": e.leaved,
              "未签到人数": e.nosignin
            };
            return 1 === this.record.allow_outside && (i.范围外签到人数 = e.outsidecount), t.concat(i)
          }), []), 1e3, 5e3], this.$q.loading.hide()
        },
        detailDialogOpen() {
          this.$q.loading.show(), this.$axiosAction("/api/teacher/signin/signin.api", {
            action: "querySigninAfter",
            id: this.signinId
          }).then((t => {
            0 === t.data.code && (this.record.loop_frequency = t.data.result.loop_frequency, this.record.attachment = t.data.result.attachment, this.record.create_time = t.data.result.create_time, this.record.detail = t.data.result.detail, this.record.frequency = t.data.result.frequency, this.record.info_config = t.data.result.info_config, this.record.is_author = t.data.result.is_author, this.record.loop_begin_date = t.data.result.loop_begin_date, this.record.loop_begin_time = t.data.result.loop_begin_time, this.record.loop_end_date = t.data.result.loop_end_date, this.record.loop_end_time = t.data.result.loop_end_time, this.record.share_target = t.data.result.share_target, this.record.single_begin_time = t.data.result.single_begin_time, this.record.single_end_time = t.data.result.single_end_time, this.record.student_showing = t.data.result.student_showing, this.record.task_target = t.data.result.task_target, this.record.task_target_excluding = t.data.result.task_target_excluding, this.record.teacher_showing = t.data.result.teacher_showing, this.record.appointed_date = t.data.result.appointed_date, this.detailDialog = !0), this.$q.loading.hide()
          })).catch((t => {
            this.$q.loading.hide()
          }))
        },
        copySignin() {
          let t = "";
          null !== this.record.composite_id && (t = "，该任务为组合任务子任务"), this.$q.dialog({
            title: "确认复制",
            message: `复制该签到信息设置数据并全新发布${t}`,
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
            this.$axiosAction("/api/teacher/signin/signin.api", {
              action: "querySigninForEditing",
              id: this.signinId
            }).then((t => {
              if (0 === t.data.code) {
                let e = {};
                null !== this.record.composite_id && (e = {
                  compositeId: this.record.composite_id,
                  befrom: "copy"
                }), this.$router.push({
                  name: "/teacher/signin/new",
                  query: e,
                  params: {
                    record: t.data.result
                  }
                })
              }
            })).catch((t => {}))
          }))
        },
        deleteSignin() {
          this.$q.dialog({
            title: "确认删除",
            message: '该签到信息及其产生的<span class="text-red">数据将被清空。</span>',
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
            this.$q.loading.show(), this.$axiosAction("/api/teacher/signin/signin.api", {
              action: "deleteSignin",
              id: this.signinId
            }).then((t => {
              0 === t.data.code && this.$router.push("/teacher/signin/index"), this.$q.loading.hide()
            })).catch((t => {
              this.$q.loading.hide()
            }))
          }))
        },
        downloadFile(t, e) {
          Object(u["c"])(t, e)
        },
        getLoopFrequencyName(t) {
          if (t && 0 !== t.length) {
            const e = ["周一", "周二", "周三", "周四", "周五", "周六", "周日"].reduce(((e, i, a) => t.indexOf(((a + 1) % 7).toString()) > -1 ? e.concat(i) : e), []);
            return e.join("、")
          }
          return ""
        },
        updateShowOpen(t) {
          if (1 === t) return this.showStuDialog = !0, void(this.studentShowing = JSON.parse(JSON.stringify(this.record.student_showing)));
          2 === t && (this.showTeaDialog = !0, this.teacherShowing = JSON.parse(JSON.stringify(this.record.teacher_showing)))
        },
        taskTargetDialogOpen() {
          this.taskTargetDialog = !0, this.actionTarget = JSON.parse(JSON.stringify(this.record.task_target))
        },
        taskTargetExcludDialogOpen() {
          this.taskTargetExcludDialog = !0, this.noActionTarget = JSON.parse(JSON.stringify(this.record.task_target_excluding))
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
        updateShowTarget(t) {
          this.$q.loading.show(), 1 !== t ? 2 === t && this.$axiosAction("/api/teacher/signin/signin.api", {
            action: "updateTeaShow",
            id: this.signinId,
            teacher_showing: this.teacherShowing && this.teacherShowing.length > 0 ? JSON.stringify(this.teacherShowing) : null
          }).then((t => {
            0 === t.data.code && (this.record.teacher_showing = this.teacherShowing, this.showTeaDialog = !1), this.$q.loading.hide()
          })).catch((t => {
            this.$q.loading.hide()
          })) : this.$axiosAction("/api/teacher/signin/signin.api", {
            action: "updateStuShow",
            id: this.signinId,
            student_showing: this.studentShowing && this.studentShowing.length > 0 ? JSON.stringify(this.studentShowing) : null
          }).then((t => {
            0 === t.data.code && (this.record.student_showing = this.studentShowing, this.showStuDialog = !1), this.$q.loading.hide()
          })).catch((t => {
            this.$q.loading.hide()
          }))
        },
        updateShareTarget() {
          this.$q.loading.show(), this.$axiosAction("/api/teacher/signin/signin.api", {
            action: "updateShareTarget",
            id: this.signinId,
            share_target: this.shareTarget && this.shareTarget.length > 0 ? JSON.stringify(this.shareTarget) : null
          }).then((t => {
            0 === t.data.code && (this.record.share_target = this.shareTarget, this.shareDialog = !1), this.$q.loading.hide()
          })).catch((t => {
            this.$q.loading.hide()
          }))
        },
        updateActionTarget() {
          if (this.actionTarget.length <= 0) return this.$showErrorNotify("任务对象不能为空");
          this.$q.loading.show(), this.$axiosAction("/api/teacher/signin/signin.api", {
            action: "updateActionTarget",
            id: this.$route.query.id,
            task_target: this.actionTarget && this.actionTarget.length > 0 ? JSON.stringify(this.actionTarget) : null
          }).then((t => {
            0 === t.data.code && (this.record.task_target = this.actionTarget, this.taskTargetDialog = !1), this.$q.loading.hide()
          })).catch((t => {
            this.$q.loading.hide()
          }))
        },
        updateNoActionTarget() {
          this.$q.loading.show(), this.$axiosAction("/api/teacher/signin/signin.api", {
            action: "updateNoActionTarget",
            id: this.$route.query.id,
            task_target_excluding: this.noActionTarget && this.noActionTarget.length > 0 ? JSON.stringify(this.noActionTarget) : null
          }).then((t => {
            0 === t.data.code && (this.record.task_target_excluding = this.noActionTarget, this.taskTargetExcludDialog = !1), this.$q.loading.hide()
          })).catch((t => {
            this.$q.loading.hide()
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
            this.$q.loading.show(), this.$axiosAction("/api/teacher/signin/signin.api", {
              action: "updateEndTimeToEnd",
              id: this.signinId,
              frequency: this.record.frequency
            }).then((t => {
              0 === t.data.code && (this.getData(), this.getStatisticsList((() => {}))), this.$q.loading.hide()
            })).catch((t => {
              this.$q.loading.hide()
            }))
          }))
        },
        changeAllowStuManageFlag() {
          this.$axiosAction("/api/teacher/signin/signin.api", {
            action: "updateStuManageFlag",
            id: this.signinId,
            stu_manage_flag: this.record.stu_manage_flag
          }).then((t => {
            0 === t.data.code || this.$router.push("/teacher/signin/index")
          })).catch((t => {
            this.record = {}
          }))
        },
        lookRange() {
          this.getSelected(0, [])
        },
        getSelected(t, e) {
          this.rangeDialog = !0
        },
        resetRange() {
          if (this.record.range.length < 1) return this.$showErrorNotify("请选择签到范围");
          this.$q.dialog({
            title: "重新选择范围",
            message: "重新选择范围后，该任务签到范围为最新签到范围",
            html: !0,
            persistent: !0,
            cancel: {
              label: "取消",
              outline: !0,
              color: "grey"
            },
            ok: {
              label: "确认",
              unelevated: !0,
              color: "primary"
            }
          }).onOk((() => {
            let t = [];
            t = (this.record.range || []).reduce(((t, e) => t.concat(e.id)), []), this.getSelected(1, t)
          }))
        },
        updateRange(t) {
          this.$q.loading.show(), this.$axiosAction("/api/teacher/signin/signin.api", {
            action: "updateRangeNow",
            signin_id: this.signinId,
            range: t
          }).then((t => {
            0 === t.data.code && (this.rangeDialog = !1)
          })).catch((t => {
            this.$q.loading.hide()
          }))
        }
      }
    },
    z = L,
    A = i("4d5a"),
    Q = i("e359"),
    O = i("65c6"),
    R = i("9c40"),
    E = i("6ac5"),
    J = i("3b73"),
    V = i("eb85"),
    j = i("9404"),
    F = i("4983"),
    M = i("0016"),
    P = i("09e3"),
    W = i("9989"),
    B = i("59d7"),
    H = i("8380"),
    U = i("9564"),
    G = i("4b7e"),
    K = i("714f"),
    X = i("7f67"),
    Y = Object(w["a"])(z, a, s, !1, null, null, null);
  e["default"] = Y.exports;
  D()(Y, "components", {
    QLayout: A["a"],
    QHeader: Q["a"],
    QToolbar: O["a"],
    QBtn: R["a"],
    QToolbarTitle: E["a"],
    QExpansionItem: J["a"],
    QItemSection: y["a"],
    QItemLabel: S["a"],
    QCard: q["a"],
    QItem: b["a"],
    QSeparator: V["a"],
    QDrawer: j["a"],
    QScrollArea: F["a"],
    QList: x["a"],
    QIcon: M["a"],
    QPageContainer: P["a"],
    QPage: W["a"],
    QPullToRefresh: B["a"],
    QSpinnerDots: H["a"],
    QDialog: k["a"],
    QCardSection: T["a"],
    QToggle: U["a"],
    QCardActions: G["a"]
  }), D()(Y, "directives", {
    Ripple: K["a"],
    ClosePopup: X["a"]
  })
}
