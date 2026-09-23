/**
 * Webpack module logic recovery
 * Source: assets/www/js/114.js -> module "2045"
 * Route: /teacher/signin/new
 * Component guess: back
 * Fidelity: exact module body, beautified only (webpack wrapper retained)
 * Note: variable names inside the original production module are preserved as evidence.
 */
2045: function(e, t, s) {
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
      }), s("q-toolbar-title", [e._v("新建" + e._s(e.menuInfo.title))])], 1)], 1), s("q-page-container", [s("q-page", {
        staticClass: "bg-grey-3"
      }, [s("q-form", {
        ref: "form",
        staticClass: "full-width",
        on: {
          submit: e.saveRecord
        }
      }, [s("q-card", {
        staticClass: "full-width row",
        attrs: {
          flat: ""
        }
      }, [s("q-list", {
        staticClass: "full-width"
      }, [s("q-item", [s("q-item-section", [s("q-item-label", {
        staticClass: "text-bold"
      }, [e._v("签到通知内容")])], 1)], 1), s("q-separator"), s("q-item", [s("q-item-section", {
        attrs: {
          avatar: ""
        }
      }, [s("q-item-label", {
        staticClass: "neu-css-before-red-asterisk"
      }, [e._v("签到类型")])], 1), s("q-item-section", [s("q-select", {
        attrs: {
          dense: "",
          outlined: "",
          "emit-value": "",
          "map-options": "",
          options: e.signinTypeList
        },
        model: {
          value: e.record.signin_type,
          callback: function(t) {
            e.$set(e.record, "signin_type", t)
          },
          expression: "record.signin_type"
        }
      })], 1)], 1), s("q-separator"), s("q-item", [s("q-item-section", {
        attrs: {
          avatar: ""
        }
      }, [s("q-item-label", {
        staticClass: "neu-css-before-red-asterisk"
      }, [e._v("签到任务名称")])], 1), s("q-item-section", [s("q-input", {
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
      })], 1)], 1), s("q-separator"), s("q-item", [s("q-item-section", {
        attrs: {
          avatar: ""
        }
      }, [s("div", [e._v("\n                发布单位\n              ")])]), s("q-item-section", [s("q-select", {
        attrs: {
          outlined: "",
          "emit-value": "",
          "map-options": "",
          dense: "",
          options: e.depoptions,
          clearable: ""
        },
        model: {
          value: e.record.dep_no,
          callback: function(t) {
            e.$set(e.record, "dep_no", t)
          },
          expression: "record.dep_no"
        }
      })], 1)], 1), s("q-separator"), s("q-item", [s("q-item-section", [s("q-item-label", {
        staticClass: "neu-css-before-red-asterisk q-my-sm"
      }, [e._v("签到说明")]), s("q-editor", {
        attrs: {
          toolbar: e.editorToolBar,
          fonts: e.editorFonts,
          "min-height": "8em",
          "hide-bottom-space": "",
          "lazy-rules": "",
          rules: [function(e) {
            return !!e || "请填写该项"
          }]
        },
        model: {
          value: e.record.detail,
          callback: function(t) {
            e.$set(e.record, "detail", t)
          },
          expression: "record.detail"
        }
      })], 1)], 1), s("q-separator"), s("q-item", [s("q-item-section", [s("q-item-label", {
        staticClass: "q-my-sm"
      }, [e._v("附件")]), s("q-item-label", {
        staticClass: "q-mb-sm",
        attrs: {
          caption: ""
        }
      }, [e._v("附件格式支持：Word、Excel、PowerPoint、PDF")]), 0 == e.isHarmonyOS ? s("q-uploader", {
        staticClass: "full-width",
        attrs: {
          flat: "",
          color: "grey",
          url: e.uploader,
          "auto-upload": "",
          filter: e.checkFile,
          accept: ".pdf, .pptx, .ppt, .xls, .xlsx, .doc, .docx, audio/*, video/*"
        },
        on: {
          uploaded: e.afterUploaded,
          rejected: e.onRejected,
          removed: e.afterRemoved
        },
        scopedSlots: e._u([{
          key: "header",
          fn: function(t) {
            return [s("div", {
              staticClass: "row no-wrap items-center q-pa-sm q-gutter-xs"
            }, [s("div", {
              staticClass: "col"
            }, [e._v("附件上传(10M以内)")]), t.canAddFiles ? s("q-btn", {
              attrs: {
                type: "a",
                icon: "add_box",
                round: "",
                dense: "",
                flat: ""
              }
            }, [s("q-uploader-add-trigger"), s("q-tooltip", [e._v("选择文件并上传")])], 1) : e._e()], 1)]
          }
        }, {
          key: "list",
          fn: function(t) {
            return [s("q-list", {
              attrs: {
                separator: ""
              }
            }, [e._l(t.files, (function(a) {
              return s("q-item", {
                key: a.name
              }, [s("q-item-section", [s("q-item-label", {
                staticClass: "full-width ellipsis cursor-pointer",
                on: {
                  click: function(t) {
                    return e.downloadUploaderFile(a)
                  }
                }
              }, [e._v("\n                            " + e._s(a.name) + "\n                          ")])], 1), s("q-item-section", {
                attrs: {
                  side: ""
                }
              }, [s("q-btn", {
                attrs: {
                  flat: "",
                  dense: "",
                  color: "negative",
                  icon: "delete",
                  size: "sm"
                },
                on: {
                  click: function(e) {
                    return t.removeFile(a)
                  }
                }
              }, [s("q-tooltip", [e._v("删除")])], 1)], 1)], 1)
            })), e._l(e.matchingUploadedFiles(e.record.attachment, t.files), (function(t) {
              return s("q-item", {
                key: t.servername
              }, [s("q-item-section", [s("q-item-label", {
                staticClass: "full-width ellipsis cursor-pointer",
                on: {
                  click: function(s) {
                    return e.downloadFile(t.link, t.srcname)
                  }
                }
              }, [e._v("\n                            " + e._s(t.srcname) + "\n                          ")])], 1), s("q-item-section", {
                attrs: {
                  side: ""
                }
              }, [s("q-btn", {
                attrs: {
                  flat: "",
                  dense: "",
                  color: "negative",
                  icon: "delete",
                  size: "sm"
                },
                on: {
                  click: function(s) {
                    return e.removeFile(t.servername)
                  }
                }
              }, [s("q-tooltip", [e._v("删除")])], 1)], 1)], 1)
            }))], 2)]
          }
        }], null, !1, 2233407681)
      }) : e._e(), 1 == e.isHarmonyOS ? s("q-uploader", {
        staticClass: "full-width",
        attrs: {
          flat: "",
          color: "grey",
          url: e.uploader,
          "auto-upload": "",
          filter: e.checkFile
        },
        on: {
          uploaded: e.afterUploaded,
          removed: e.afterRemoved
        },
        scopedSlots: e._u([{
          key: "header",
          fn: function(t) {
            return [s("div", {
              staticClass: "row no-wrap items-center q-pa-sm q-gutter-xs"
            }, [s("div", {
              staticClass: "col"
            }, [e._v("附件上传(10M以内)")]), t.canAddFiles ? s("q-btn", {
              attrs: {
                type: "a",
                icon: "add_box",
                round: "",
                dense: "",
                flat: ""
              }
            }, [s("q-uploader-add-trigger"), s("q-tooltip", [e._v("选择文件并上传")])], 1) : e._e()], 1)]
          }
        }, {
          key: "list",
          fn: function(t) {
            return [s("q-list", {
              attrs: {
                separator: ""
              }
            }, [e._l(t.files, (function(a) {
              return s("q-item", {
                key: a.name
              }, [s("q-item-section", [s("q-item-label", {
                staticClass: "full-width ellipsis cursor-pointer",
                on: {
                  click: function(t) {
                    return e.downloadUploaderFile(a)
                  }
                }
              }, [e._v("\n                            " + e._s(a.name) + "\n                          ")])], 1), s("q-item-section", {
                attrs: {
                  side: ""
                }
              }, [s("q-btn", {
                attrs: {
                  flat: "",
                  dense: "",
                  color: "negative",
                  icon: "delete",
                  size: "sm"
                },
                on: {
                  click: function(e) {
                    return t.removeFile(a)
                  }
                }
              }, [s("q-tooltip", [e._v("删除")])], 1)], 1)], 1)
            })), e._l(e.matchingUploadedFiles(e.record.attachment, t.files), (function(t) {
              return s("q-item", {
                key: t.servername
              }, [s("q-item-section", [s("q-item-label", {
                staticClass: "full-width ellipsis cursor-pointer",
                on: {
                  click: function(s) {
                    return e.downloadFile(t.link, t.srcname)
                  }
                }
              }, [e._v("\n                            " + e._s(t.srcname) + "\n                          ")])], 1), s("q-item-section", {
                attrs: {
                  side: ""
                }
              }, [s("q-btn", {
                attrs: {
                  flat: "",
                  dense: "",
                  color: "negative",
                  icon: "delete",
                  size: "sm"
                },
                on: {
                  click: function(s) {
                    return e.removeFile(t.servername)
                  }
                }
              }, [s("q-tooltip", [e._v("删除")])], 1)], 1)], 1)
            }))], 2)]
          }
        }], null, !1, 2233407681)
      }) : e._e()], 1)], 1)], 1)], 1), s("q-card", {
        staticClass: "full-width row q-mt-sm",
        attrs: {
          flat: ""
        }
      }, [s("q-list", {
        staticClass: "full-width"
      }, [s("q-item", [s("q-item-section", [s("q-item-label", {
        staticClass: "text-bold"
      }, [e._v("签到方式")])], 1)], 1), s("q-separator"), s("q-item", [s("q-item-section", {
        attrs: {
          avatar: ""
        }
      }, [s("q-item-label", {
        staticClass: "neu-css-before-red-asterisk"
      }, [e._v("签到方式")])], 1), s("q-item-section", [s("q-select", {
        attrs: {
          dense: "",
          outlined: "",
          "emit-value": "",
          "map-options": "",
          options: e.signinMethodList
        },
        model: {
          value: e.record.signin_method,
          callback: function(t) {
            e.$set(e.record, "signin_method", t)
          },
          expression: "record.signin_method"
        }
      })], 1)], 1), s("q-separator"), "L" == e.record.signin_method ? s("q-item", [s("q-item-section", {
        attrs: {
          avatar: ""
        }
      }, [s("q-item-label", {
        staticClass: "neu-css-before-red-asterisk"
      }, [e._v("签到范围")])], 1), s("q-item-section"), s("q-item-section", {
        attrs: {
          side: ""
        }
      }, [s("q-item-label", {
        staticClass: "row items-center"
      }, [s("span", {
        directives: [{
          name: "show",
          rawName: "v-show",
          value: !e.record.range || 0 == e.record.range.length,
          expression: "!record.range || record.range.length == 0 "
        }],
        staticClass: "text-grey",
        on: {
          click: function(t) {
            e.rangeDialog = !0
          }
        }
      }, [e._v("选择")]), s("q-icon", {
        directives: [{
          name: "show",
          rawName: "v-show",
          value: !e.record.range || 0 == e.record.range.length,
          expression: "!record.range || record.range.length == 0 "
        }],
        staticClass: "text-grey",
        attrs: {
          name: "keyboard_arrow_right",
          size: "sm"
        }
      }), s("span", {
        directives: [{
          name: "show",
          rawName: "v-show",
          value: !e.record.range || 0 != e.record.range.length,
          expression: "!record.range || record.range.length != 0 "
        }],
        staticClass: "text-primary",
        on: {
          click: function(t) {
            e.rangeDialog = !0
          }
        }
      }, [e._v("已选择 (" + e._s(e.record.range.length) + ")")]), s("q-icon", {
        directives: [{
          name: "show",
          rawName: "v-show",
          value: !e.record.range || 0 != e.record.range.length,
          expression: "!record.range || record.range.length != 0 "
        }],
        staticClass: "text-primary",
        attrs: {
          name: "keyboard_arrow_right",
          size: "sm"
        }
      })], 1)], 1)], 1) : e._e(), "L" == e.record.signin_method ? s("q-separator") : e._e(), "L" == e.record.signin_method ? s("q-item", [s("q-item-section", {
        attrs: {
          avatar: ""
        }
      }, [s("q-item-label", {
        staticClass: "neu-css-before-red-asterisk"
      }, [e._v("允许范围外签到")])], 1), s("q-item-section"), s("q-item-section", {
        attrs: {
          side: ""
        }
      }, [s("q-toggle", {
        attrs: {
          size: "lg",
          dense: "",
          "false-value": 0,
          "true-value": 1
        },
        model: {
          value: e.record.allow_outside,
          callback: function(t) {
            e.$set(e.record, "allow_outside", t)
          },
          expression: "record.allow_outside"
        }
      })], 1)], 1) : e._e(), "L" == e.record.signin_method ? s("q-separator") : e._e(), "L" == e.record.signin_method ? s("q-item", [s("q-item-section", {
        attrs: {
          avatar: ""
        }
      }, [s("q-item-label", {
        staticClass: "neu-css-before-red-asterisk"
      }, [e._v("签到时进行拍照")])], 1), s("q-item-section"), s("q-item-section", {
        attrs: {
          side: ""
        }
      }, [s("q-toggle", {
        attrs: {
          size: "lg",
          dense: "",
          "false-value": 0,
          "true-value": 1
        },
        model: {
          value: e.record.picture_evidence,
          callback: function(t) {
            e.$set(e.record, "picture_evidence", t)
          },
          expression: "record.picture_evidence"
        }
      })], 1)], 1) : e._e(), "DQR" == e.record.signin_method || "SQR" == e.record.signin_method ? s("q-item", [s("q-item-section", {
        attrs: {
          avatar: ""
        }
      }, [s("q-item-label", [e._v("二维码负责人(学生)")])], 1), s("q-item-section"), s("q-item-section", {
        attrs: {
          side: ""
        }
      }, [s("q-item-label", {
        staticClass: "row items-center"
      }, [s("span", {
        directives: [{
          name: "show",
          rawName: "v-show",
          value: !e.record.student_showing || 0 == e.record.student_showing.length,
          expression: "!record.student_showing || record.student_showing.length == 0 "
        }],
        staticClass: "text-grey",
        on: {
          click: function(t) {
            e.studentShowingDialog = !0
          }
        }
      }, [e._v("选择")]), s("q-icon", {
        directives: [{
          name: "show",
          rawName: "v-show",
          value: !e.record.student_showing || 0 == e.record.student_showing.length,
          expression: "!record.student_showing || record.student_showing.length == 0 "
        }],
        staticClass: "text-grey",
        attrs: {
          name: "keyboard_arrow_right",
          size: "sm"
        }
      }), s("span", {
        directives: [{
          name: "show",
          rawName: "v-show",
          value: !e.record.student_showing || 0 != e.record.student_showing.length,
          expression: "!record.student_showing || record.student_showing.length != 0 "
        }],
        staticClass: "text-primary",
        on: {
          click: function(t) {
            e.studentShowingDialog = !0
          }
        }
      }, [e._v("已选择 (" + e._s(e.record.student_showing.length) + ")")]), s("q-icon", {
        directives: [{
          name: "show",
          rawName: "v-show",
          value: !e.record.student_showing || 0 != e.record.student_showing.length,
          expression: "!record.student_showing || record.student_showing.length != 0 "
        }],
        staticClass: "text-primary",
        attrs: {
          name: "keyboard_arrow_right",
          size: "sm"
        }
      })], 1)], 1)], 1) : e._e(), "DQR" == e.record.signin_method || "SQR" == e.record.signin_method ? s("q-separator") : e._e(), "DQR" == e.record.signin_method || "SQR" == e.record.signin_method ? s("q-item", [s("q-item-section", {
        attrs: {
          avatar: ""
        }
      }, [s("q-item-label", [e._v("二维码负责人(教师)")])], 1), s("q-item-section"), s("q-item-section", {
        attrs: {
          side: ""
        }
      }, [s("q-item-label", {
        staticClass: "row items-center"
      }, [s("span", {
        directives: [{
          name: "show",
          rawName: "v-show",
          value: !e.record.teacher_showing || 0 == e.record.teacher_showing.length,
          expression: "!record.teacher_showing || record.teacher_showing.length == 0 "
        }],
        staticClass: "text-grey",
        on: {
          click: function(t) {
            e.teacherShowingDialog = !0
          }
        }
      }, [e._v("选择")]), s("q-icon", {
        directives: [{
          name: "show",
          rawName: "v-show",
          value: !e.record.teacher_showing || 0 == e.record.teacher_showing.length,
          expression: "!record.teacher_showing || record.teacher_showing.length == 0 "
        }],
        staticClass: "text-grey",
        attrs: {
          name: "keyboard_arrow_right",
          size: "sm"
        }
      }), s("span", {
        directives: [{
          name: "show",
          rawName: "v-show",
          value: e.record.teacher_showing && 0 != e.record.teacher_showing.length,
          expression: "record.teacher_showing && record.teacher_showing.length != 0 "
        }],
        staticClass: "text-primary",
        on: {
          click: function(t) {
            e.teacherShowingDialog = !0
          }
        }
      }, [e._v("已选择 (" + e._s(e.record.teacher_showing.length) + ")")]), s("q-icon", {
        directives: [{
          name: "show",
          rawName: "v-show",
          value: e.record.teacher_showing && 0 != e.record.teacher_showing.length,
          expression: "record.teacher_showing && record.teacher_showing.length != 0 "
        }],
        staticClass: "text-primary",
        attrs: {
          name: "keyboard_arrow_right",
          size: "sm"
        }
      })], 1)], 1)], 1) : e._e()], 1)], 1), s("q-card", {
        staticClass: "full-width row q-mt-sm",
        attrs: {
          flat: ""
        }
      }, [s("q-list", {
        staticClass: "full-width"
      }, [s("q-item", [s("q-item-section", [s("q-item-label", {
        staticClass: "text-bold"
      }, [e._v("签到频率")])], 1)], 1), s("q-separator"), s("q-item", [s("q-item-section", {
        attrs: {
          avatar: ""
        }
      }, [s("q-item-label", {
        staticClass: "neu-css-before-red-asterisk"
      }, [e._v("签到频率")])], 1), s("q-item-section", [s("q-item-label", [s("q-select", {
        attrs: {
          dense: "",
          outlined: "",
          "emit-value": "",
          "map-options": "",
          options: e.frequencyList
        },
        model: {
          value: e.record.frequency,
          callback: function(t) {
            e.$set(e.record, "frequency", t)
          },
          expression: "record.frequency"
        }
      })], 1)], 1)], 1), s("q-separator"), "S" == e.record.frequency ? s("q-item", [s("q-item-section", {
        attrs: {
          avatar: ""
        }
      }, [s("q-item-label", {
        staticClass: "neu-css-before-red-asterisk"
      }, [e._v("开始时间")])], 1), s("q-item-section", [s("q-field", {
        staticClass: "full-width",
        attrs: {
          outlined: "",
          dense: "",
          "stack-label": "",
          "hide-bottom-space": "",
          "lazy-rules": "",
          rules: [function(e) {
            return !!e || "请填写该项"
          }],
          value: e.record.single_begin_time
        },
        scopedSlots: e._u([{
          key: "control",
          fn: function() {
            return [e._v(e._s(e.record.single_begin_time))]
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
                value: e.record.single_begin_time,
                callback: function(t) {
                  e.$set(e.record, "single_begin_time", t)
                },
                expression: "record.single_begin_time"
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
                value: e.record.single_begin_time,
                callback: function(t) {
                  e.$set(e.record, "single_begin_time", t)
                },
                expression: "record.single_begin_time"
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
        }], null, !1, 212698312)
      })], 1)], 1) : e._e(), "S" == e.record.frequency ? s("q-separator") : e._e(), "S" == e.record.frequency ? s("q-item", [s("q-item-section", {
        attrs: {
          avatar: ""
        }
      }, [s("q-item-label", {
        staticClass: "neu-css-before-red-asterisk"
      }, [e._v("截止时间")])], 1), s("q-item-section", [s("q-field", {
        staticClass: "full-width",
        attrs: {
          outlined: "",
          dense: "",
          "stack-label": "",
          "hide-bottom-space": "",
          "lazy-rules": "",
          rules: [function(e) {
            return !!e || "请填写该项"
          }, function(t) {
            return t > e.record.single_begin_time || "截止时间应在开始时间之后"
          }],
          value: e.record.single_end_time
        },
        scopedSlots: e._u([{
          key: "control",
          fn: function() {
            return [e._v(e._s(e.record.single_end_time))]
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
                value: e.record.single_end_time,
                callback: function(t) {
                  e.$set(e.record, "single_end_time", t)
                },
                expression: "record.single_end_time"
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
                value: e.record.single_end_time,
                callback: function(t) {
                  e.$set(e.record, "single_end_time", t)
                },
                expression: "record.single_end_time"
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
        }], null, !1, 1003576768)
      })], 1)], 1) : e._e(), "L" == e.record.frequency ? s("q-item", [s("q-item-section", [s("q-item-label", {
        staticClass: "neu-css-before-red-asterisk q-my-sm"
      }, [e._v("循环签到频率")]), s("q-item-label", e._l([{
        value: "1",
        label: "周一"
      }, {
        value: "2",
        label: "周二"
      }, {
        value: "3",
        label: "周三"
      }, {
        value: "4",
        label: "周四"
      }, {
        value: "5",
        label: "周五"
      }, {
        value: "6",
        label: "周六"
      }, {
        value: "0",
        label: "周日"
      }], (function(t) {
        return s("q-checkbox", {
          key: t.value,
          staticClass: "q-mr-sm",
          attrs: {
            dense: "",
            "keep-color": "",
            val: t.value,
            label: t.label
          },
          model: {
            value: e.record.loop_frequency,
            callback: function(t) {
              e.$set(e.record, "loop_frequency", t)
            },
            expression: "record.loop_frequency"
          }
        })
      })), 1)], 1)], 1) : e._e(), "L" == e.record.frequency ? s("q-separator") : e._e(), "L" == e.record.frequency ? s("q-item", [s("q-item-section", {
        attrs: {
          avatar: ""
        }
      }, [s("q-item-label", {
        staticClass: "neu-css-before-red-asterisk"
      }, [e._v("开始日期")])], 1), s("q-item-section", [s("q-field", {
        staticClass: "full-width",
        attrs: {
          outlined: "",
          dense: "",
          "stack-label": "",
          "hide-bottom-space": "",
          "lazy-rules": "",
          rules: [function(e) {
            return !!e || "请填写该项"
          }],
          value: e.record.loop_begin_date
        },
        scopedSlots: e._u([{
          key: "control",
          fn: function() {
            return [e._v(e._s(e.record.loop_begin_date))]
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
                mask: "YYYY-MM-DD"
              },
              model: {
                value: e.record.loop_begin_date,
                callback: function(t) {
                  e.$set(e.record, "loop_begin_date", t)
                },
                expression: "record.loop_begin_date"
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
        }], null, !1, 3353248819)
      })], 1)], 1) : e._e(), "L" == e.record.frequency ? s("q-separator") : e._e(), "L" == e.record.frequency ? s("q-item", [s("q-item-section", {
        attrs: {
          avatar: ""
        }
      }, [s("q-item-label", {
        staticClass: "neu-css-before-red-asterisk"
      }, [e._v("截止日期")])], 1), s("q-item-section", [s("q-field", {
        staticClass: "full-width",
        attrs: {
          outlined: "",
          dense: "",
          "stack-label": "",
          "hide-bottom-space": "",
          "lazy-rules": "",
          rules: [function(e) {
            return !!e || "请填写该项"
          }, function(t) {
            return t > e.record.loop_begin_date || "截止日期应在开始日期之后"
          }],
          value: e.record.loop_end_date
        },
        scopedSlots: e._u([{
          key: "control",
          fn: function() {
            return [e._v(e._s(e.record.loop_end_date))]
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
                mask: "YYYY-MM-DD"
              },
              model: {
                value: e.record.loop_end_date,
                callback: function(t) {
                  e.$set(e.record, "loop_end_date", t)
                },
                expression: "record.loop_end_date"
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
        }], null, !1, 2647163443)
      })], 1)], 1) : e._e(), "L" == e.record.frequency ? s("q-separator") : e._e(), "L" == e.record.frequency ? s("q-item", [s("q-item-section", {
        attrs: {
          avatar: ""
        }
      }, [s("q-item-label", {
        staticClass: "neu-css-before-red-asterisk"
      }, [e._v("签到开始时间")])], 1), s("q-item-section", [s("q-field", {
        staticClass: "full-width",
        attrs: {
          outlined: "",
          dense: "",
          "stack-label": "",
          "hide-bottom-space": "",
          "lazy-rules": "",
          rules: [function(e) {
            return !!e || "请填写该项"
          }],
          value: e.record.loop_begin_time
        },
        scopedSlots: e._u([{
          key: "control",
          fn: function() {
            return [e._v(e._s(e.record.loop_begin_time))]
          },
          proxy: !0
        }, {
          key: "append",
          fn: function() {
            return [s("q-icon", {
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
                mask: "HH:mm",
                format24h: ""
              },
              model: {
                value: e.record.loop_begin_time,
                callback: function(t) {
                  e.$set(e.record, "loop_begin_time", t)
                },
                expression: "record.loop_begin_time"
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
        }], null, !1, 2154724003)
      })], 1)], 1) : e._e(), "L" == e.record.frequency ? s("q-separator") : e._e(), "L" == e.record.frequency ? s("q-item", [s("q-item-section", {
        attrs: {
          avatar: ""
        }
      }, [s("q-item-label", {
        staticClass: "neu-css-before-red-asterisk"
      }, [e._v("签到结束时间")])], 1), s("q-item-section", [s("q-field", {
        staticClass: "full-width",
        attrs: {
          outlined: "",
          dense: "",
          "stack-label": "",
          "hide-bottom-space": "",
          "lazy-rules": "",
          rules: [function(e) {
            return !!e || "请填写该项"
          }, function(t) {
            return t > e.record.loop_begin_time || "截止时间应在开始时间之后"
          }],
          value: e.record.loop_end_time
        },
        scopedSlots: e._u([{
          key: "control",
          fn: function() {
            return [e._v(e._s(e.record.loop_end_time))]
          },
          proxy: !0
        }, {
          key: "append",
          fn: function() {
            return [s("q-icon", {
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
                mask: "HH:mm",
                format24h: ""
              },
              model: {
                value: e.record.loop_end_time,
                callback: function(t) {
                  e.$set(e.record, "loop_end_time", t)
                },
                expression: "record.loop_end_time"
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
        }], null, !1, 3580282019)
      })], 1)], 1) : e._e(), "A" == e.record.frequency ? s("q-item", [s("q-item-section", {
        attrs: {
          avatar: ""
        }
      }, [s("q-item-label", {
        staticClass: "neu-css-before-red-asterisk"
      }, [e._v("开始截止时间")])], 1), s("q-item-section"), s("q-item-section", {
        attrs: {
          side: ""
        }
      }, [s("q-item-label", {
        staticClass: "text-primary",
        on: {
          click: e.addAppointedDate
        }
      }, [e._v("添加")])], 1)], 1) : e._e(), e._l("A" == e.record.frequency ? e.record.appointed_date : [], (function(t, a) {
        return s("q-item", {
          key: t.begin_time
        }, [s("q-item-section", {
          attrs: {
            avatar: ""
          }
        }, [s("q-item-label", [e._v("时间段" + e._s(a + 1))])], 1), s("q-item-section", [s("q-item-label", [s("q-field", {
          staticClass: "full-width",
          attrs: {
            outlined: "",
            dense: "",
            "stack-label": "",
            "hide-bottom-space": "",
            "lazy-rules": "",
            rules: [function(e) {
              return !!e || "请填写该项"
            }],
            value: t.begin_time
          },
          scopedSlots: e._u([{
            key: "control",
            fn: function() {
              return [e._v(e._s(t.begin_time))]
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
                  value: t.begin_time,
                  callback: function(s) {
                    e.$set(t, "begin_time", s)
                  },
                  expression: "item.begin_time"
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
                  value: t.begin_time,
                  callback: function(s) {
                    e.$set(t, "begin_time", s)
                  },
                  expression: "item.begin_time"
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
          }], null, !0)
        })], 1), s("q-item-label", [s("q-field", {
          staticClass: "full-width",
          attrs: {
            outlined: "",
            dense: "",
            "stack-label": "",
            "hide-bottom-space": "",
            "lazy-rules": "",
            rules: [function(e) {
              return !!e || "请填写该项"
            }, function(e) {
              return e > t.begin_time || "截止时间应在开始时间之后"
            }],
            value: t.end_time
          },
          scopedSlots: e._u([{
            key: "control",
            fn: function() {
              return [e._v(e._s(t.end_time))]
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
                  value: t.end_time,
                  callback: function(s) {
                    e.$set(t, "end_time", s)
                  },
                  expression: "item.end_time"
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
                  value: t.end_time,
                  callback: function(s) {
                    e.$set(t, "end_time", s)
                  },
                  expression: "item.end_time"
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
          }], null, !0)
        })], 1)], 1), s("q-item-section", {
          attrs: {
            side: ""
          }
        }, [s("q-item-label", {
          directives: [{
            name: "show",
            rawName: "v-show",
            value: e.record.appointed_date.length > 1,
            expression: "record.appointed_date.length > 1"
          }],
          staticClass: "text-negative cursor-pointer",
          on: {
            click: function(t) {
              return e.removeAppointedDate(a)
            }
          }
        }, [e._v("\n                  删除"), s("q-tooltip", [e._v("删除该时间段")])], 1)], 1)], 1)
      }))], 2)], 1), s("q-card", {
        staticClass: "full-width row q-mt-sm",
        attrs: {
          flat: ""
        }
      }, [s("q-list", {
        staticClass: "full-width"
      }, [s("q-item", [s("q-item-section", [s("q-item-label", {
        staticClass: "neu-css-before-red-asterisk"
      }, [e._v("允许班级干部查看任务数据")])], 1), s("q-item-section", {
        attrs: {
          side: ""
        }
      }, [s("q-toggle", {
        attrs: {
          size: "lg",
          dense: "",
          "false-value": 0,
          "true-value": 1
        },
        model: {
          value: e.record.stu_manage_flag,
          callback: function(t) {
            e.$set(e.record, "stu_manage_flag", t)
          },
          expression: "record.stu_manage_flag"
        }
      })], 1)], 1)], 1)], 1), s("q-card", {
        staticClass: "full-width row q-mt-sm",
        attrs: {
          flat: ""
        }
      }, [s("q-list", {
        staticClass: "full-width"
      }, [s("q-item", [s("q-item-section", [s("q-item-label", {
        staticClass: "text-bold"
      }, [e._v("通知设定")])], 1)], 1), s("q-separator"), s("q-item", [s("q-item-section", {
        staticClass: "full-width"
      }, [s("q-item-label", {
        staticClass: "neu-css-before-red-asterisk"
      }, [e._v("通知提前推送时间(分)")]), s("div", {
        staticClass: "full-width q-mt-lg"
      }, [s("q-slider", {
        attrs: {
          label: "",
          "label-always": "",
          min: 0,
          max: 60
        },
        model: {
          value: e.record.in_advance,
          callback: function(t) {
            e.$set(e.record, "in_advance", t)
          },
          expression: "record.in_advance"
        }
      })], 1)], 1)], 1)], 1)], 1), s("q-card", {
        staticClass: "full-width row q-mt-sm",
        attrs: {
          flat: ""
        }
      }, [s("q-list", {
        staticClass: "full-width"
      }, [s("q-item", [s("q-item-section", {
        attrs: {
          avatar: ""
        }
      }, [s("q-item-label", {
        staticClass: "neu-css-before-red-asterisk"
      }, [e._v("签到对象")])], 1), s("q-item-section"), s("q-item-section", {
        attrs: {
          side: ""
        }
      }, [s("q-item-label", {
        staticClass: "row items-center"
      }, [s("span", {
        directives: [{
          name: "show",
          rawName: "v-show",
          value: !e.record.task_target || 0 == e.record.task_target.length,
          expression: "!record.task_target || record.task_target.length == 0 "
        }],
        staticClass: "text-grey",
        on: {
          click: function(t) {
            e.taskTargetDialog = !0
          }
        }
      }, [e._v("选择")]), s("q-icon", {
        directives: [{
          name: "show",
          rawName: "v-show",
          value: !e.record.task_target || 0 == e.record.task_target.length,
          expression: "!record.task_target || record.task_target.length == 0 "
        }],
        staticClass: "text-grey",
        attrs: {
          name: "keyboard_arrow_right",
          size: "sm"
        }
      }), s("span", {
        directives: [{
          name: "show",
          rawName: "v-show",
          value: e.record.task_target && 0 != e.record.task_target.length,
          expression: "record.task_target && record.task_target.length != 0 "
        }],
        staticClass: "text-primary",
        on: {
          click: function(t) {
            e.taskTargetDialog = !0
          }
        }
      }, [e._v("已选择 (" + e._s(e.record.task_target.length) + ")")]), s("q-icon", {
        directives: [{
          name: "show",
          rawName: "v-show",
          value: e.record.task_target && 0 != e.record.task_target.length,
          expression: "record.task_target && record.task_target.length != 0 "
        }],
        staticClass: "text-primary",
        attrs: {
          name: "keyboard_arrow_right",
          size: "sm"
        }
      })], 1)], 1)], 1)], 1)], 1), s("q-card", {
        staticClass: "full-width row q-mt-sm",
        attrs: {
          flat: ""
        }
      }, [s("q-list", {
        staticClass: "full-width"
      }, [s("q-item", [s("q-item-section", {
        attrs: {
          avatar: ""
        }
      }, [s("q-item-label", [e._v("无需签到对象")])], 1), s("q-item-section"), s("q-item-section", {
        attrs: {
          side: ""
        }
      }, [s("q-item-label", {
        staticClass: "row items-center"
      }, [s("span", {
        directives: [{
          name: "show",
          rawName: "v-show",
          value: !e.record.task_target_excluding || 0 == e.record.task_target_excluding.length,
          expression: "!record.task_target_excluding || record.task_target_excluding.length == 0 "
        }],
        staticClass: "text-grey",
        on: {
          click: function(t) {
            e.taskTargetExcludingDialog = !0
          }
        }
      }, [e._v("选择")]), s("q-icon", {
        directives: [{
          name: "show",
          rawName: "v-show",
          value: !e.record.task_target_excluding || 0 == e.record.task_target_excluding.length,
          expression: "!record.task_target_excluding || record.task_target_excluding.length == 0 "
        }],
        staticClass: "text-grey",
        attrs: {
          name: "keyboard_arrow_right",
          size: "sm"
        }
      }), s("span", {
        directives: [{
          name: "show",
          rawName: "v-show",
          value: e.record.task_target_excluding && 0 != e.record.task_target_excluding.length,
          expression: "record.task_target_excluding && record.task_target_excluding.length != 0 "
        }],
        staticClass: "text-primary",
        on: {
          click: function(t) {
            e.taskTargetExcludingDialog = !0
          }
        }
      }, [e._v("已选择 (" + e._s(e.record.task_target_excluding.length) + ")")]), s("q-icon", {
        directives: [{
          name: "show",
          rawName: "v-show",
          value: e.record.task_target_excluding && 0 != e.record.task_target_excluding.length,
          expression: "record.task_target_excluding && record.task_target_excluding.length != 0 "
        }],
        staticClass: "text-primary",
        attrs: {
          name: "keyboard_arrow_right",
          size: "sm"
        }
      })], 1)], 1)], 1)], 1)], 1), s("q-card", {
        staticClass: "full-width row q-mt-sm",
        attrs: {
          flat: ""
        }
      }, [s("q-list", {
        staticClass: "full-width"
      }, [s("q-item", [s("q-item-section", {
        attrs: {
          avatar: ""
        }
      }, [s("q-item-label", [e._v("共享对象")]), e.shareDisable ? e._e() : s("q-item-label", {
        attrs: {
          caption: ""
        }
      }, [e._v("将该" + e._s((e.menuInfo || {}).title) + "统计数据共享给其他老师")]), e.shareDisable ? s("q-item-label", {
        attrs: {
          caption: ""
        }
      }, [e._v("组合子任务不可更改分享对象")]) : e._e()], 1), s("q-item-section"), s("q-item-section", {
        attrs: {
          side: ""
        }
      }, [s("q-item-label", {
        staticClass: "row items-center"
      }, [s("span", {
        directives: [{
          name: "show",
          rawName: "v-show",
          value: (!e.record.share_target || 0 == e.record.share_target.length) && !e.shareDisable,
          expression: "(!record.share_target || record.share_target.length == 0) && !shareDisable "
        }],
        staticClass: "text-grey",
        on: {
          click: function(t) {
            e.shareDialog = !0
          }
        }
      }, [e._v("选择")]), s("q-icon", {
        directives: [{
          name: "show",
          rawName: "v-show",
          value: (!e.record.share_target || 0 == e.record.share_target.length) && !e.shareDisable,
          expression: "(!record.share_target || record.share_target.length == 0) && !shareDisable "
        }],
        staticClass: "text-grey",
        attrs: {
          name: "keyboard_arrow_right",
          size: "sm"
        }
      }), s("span", {
        directives: [{
          name: "show",
          rawName: "v-show",
          value: e.record.share_target && 0 != e.record.share_target.length && !e.shareDisable,
          expression: "record.share_target && record.share_target.length != 0 && !shareDisable"
        }],
        staticClass: "text-primary",
        on: {
          click: function(t) {
            e.shareDialog = !0
          }
        }
      }, [e._v("已选择 (" + e._s(e.record.share_target.length) + ")")]), s("q-icon", {
        directives: [{
          name: "show",
          rawName: "v-show",
          value: e.record.share_target && 0 != e.record.share_target.length && !e.shareDisable,
          expression: "record.share_target && record.share_target.length != 0 && !shareDisable"
        }],
        staticClass: "text-primary",
        attrs: {
          name: "keyboard_arrow_right",
          size: "sm"
        }
      }), s("span", {
        directives: [{
          name: "show",
          rawName: "v-show",
          value: e.shareDisable,
          expression: "shareDisable "
        }],
        class: 0 == e.record.share_target.length ? "text-grey" : "text-primary",
        on: {
          click: e.openSharetarget
        }
      }, [e._v("查看(" + e._s(e.record.share_target.length > 0 ? e.record.share_target.length : "") + ")")]), s("q-icon", {
        directives: [{
          name: "show",
          rawName: "v-show",
          value: e.shareDisable,
          expression: "shareDisable "
        }],
        class: 0 == e.record.share_target.length ? "text-grey" : "text-primary",
        attrs: {
          name: "keyboard_arrow_right",
          size: "sm"
        }
      })], 1)], 1)], 1)], 1)], 1), s("q-separator", {
        staticClass: "bg-grey-3",
        staticStyle: {
          height: "0.5rem"
        }
      })], 1), s("q-dialog", {
        attrs: {
          persistent: "",
          fullWidth: "",
          maximized: e.maximizedToggle
        },
        model: {
          value: e.rangeDialog,
          callback: function(t) {
            e.rangeDialog = t
          },
          expression: "rangeDialog"
        }
      }, [s("q-layout", {
        staticClass: "bg-white",
        attrs: {
          view: "lHh lpr lFf",
          container: ""
        }
      }, [s("q-header", {
        staticClass: "bg-white"
      }, [s("q-toolbar", [s("div", {
        staticClass: "full-width row items-center justify-between q-px-xs q-py-sm"
      }, [s("div", {
        staticClass: "text-bold text-black"
      }, [e._v("选择签到范围")]), s("q-btn", {
        attrs: {
          unelevated: "",
          color: "primary",
          label: "完成"
        },
        on: {
          click: function(t) {
            e.rangeDialog = !1
          }
        }
      })], 1)]), s("q-separator")], 1), s("q-page-container", [s("q-page", [s("neu-signin-range", {
        model: {
          value: e.record.range,
          callback: function(t) {
            e.$set(e.record, "range", t)
          },
          expression: "record.range"
        }
      })], 1)], 1)], 1)], 1), s("q-dialog", {
        attrs: {
          persistent: "",
          fullWidth: "",
          maximized: e.maximizedToggle
        },
        model: {
          value: e.studentShowingDialog,
          callback: function(t) {
            e.studentShowingDialog = t
          },
          expression: "studentShowingDialog"
        }
      }, [s("q-layout", {
        staticClass: "bg-white",
        attrs: {
          view: "lHh lpr lFf",
          container: ""
        }
      }, [s("q-header", {
        staticClass: "full-width bg-white"
      }, [s("q-toolbar", [s("div", {
        staticClass: "full-width row items-center justify-between q-px-xs q-py-sm"
      }, [s("div", {
        staticClass: "text-bold text-black"
      }, [e._v("添加学生二维码负责人")]), s("q-btn", {
        attrs: {
          unelevated: "",
          color: "primary",
          label: "完成"
        },
        on: {
          click: function(t) {
            e.studentShowingDialog = !1
          }
        }
      })], 1)])], 1), s("q-page-container", [s("q-page", [s("neu-assign-student", {
        attrs: {
          permit: e.menuInfo ? e.menuInfo.edit_permit : null,
          "permit-mode": "E",
          "menu-id": e.menuInfo ? e.menuInfo.id : null
        },
        model: {
          value: e.record.student_showing,
          callback: function(t) {
            e.$set(e.record, "student_showing", t)
          },
          expression: "record.student_showing"
        }
      })], 1)], 1)], 1)], 1), s("q-dialog", {
        attrs: {
          persistent: "",
          fullWidth: "",
          maximized: e.maximizedToggle
        },
        model: {
          value: e.teacherShowingDialog,
          callback: function(t) {
            e.teacherShowingDialog = t
          },
          expression: "teacherShowingDialog"
        }
      }, [s("q-layout", {
        staticClass: "bg-white",
        attrs: {
          view: "lHh lpr lFf",
          container: ""
        }
      }, [s("q-header", {
        staticClass: "full-width bg-white"
      }, [s("q-toolbar", [s("div", {
        staticClass: "full-width row items-center justify-between q-px-xs q-py-sm"
      }, [s("div", {
        staticClass: "text-bold text-black"
      }, [e._v("添加教师二维码负责人")]), s("q-btn", {
        attrs: {
          unelevated: "",
          color: "primary",
          label: "完成"
        },
        on: {
          click: function(t) {
            e.teacherShowingDialog = !1
          }
        }
      })], 1)])], 1), s("q-page-container", [s("q-page", [s("neu-assign-teacher", {
        model: {
          value: e.record.teacher_showing,
          callback: function(t) {
            e.$set(e.record, "teacher_showing", t)
          },
          expression: "record.teacher_showing"
        }
      })], 1)], 1)], 1)], 1), s("q-dialog", {
        attrs: {
          persistent: "",
          fullWidth: "",
          maximized: e.maximizedToggle
        },
        model: {
          value: e.taskTargetDialog,
          callback: function(t) {
            e.taskTargetDialog = t
          },
          expression: "taskTargetDialog"
        }
      }, [s("q-layout", {
        staticClass: "bg-white",
        attrs: {
          view: "lHh lpr lFf",
          container: ""
        }
      }, [s("q-header", {
        staticClass: "full-width bg-white"
      }, [s("q-toolbar", [s("div", {
        staticClass: "full-width row items-center justify-between q-px-xs q-py-sm"
      }, [s("div", {
        staticClass: "text-bold text-black"
      }, [e._v("设置签到对象")]), s("q-btn", {
        attrs: {
          unelevated: "",
          color: "primary",
          label: "完成"
        },
        on: {
          click: function(t) {
            e.taskTargetDialog = !1
          }
        }
      })], 1)])], 1), s("q-page-container", [s("q-page", [s("neu-assign-student", {
        attrs: {
          permit: e.menuInfo ? e.menuInfo.edit_permit : null,
          "permit-mode": "E",
          "menu-id": e.menuInfo ? e.menuInfo.id : null
        },
        model: {
          value: e.record.task_target,
          callback: function(t) {
            e.$set(e.record, "task_target", t)
          },
          expression: "record.task_target"
        }
      })], 1)], 1)], 1)], 1), s("q-dialog", {
        attrs: {
          persistent: "",
          fullWidth: "",
          maximized: e.maximizedToggle
        },
        model: {
          value: e.taskTargetExcludingDialog,
          callback: function(t) {
            e.taskTargetExcludingDialog = t
          },
          expression: "taskTargetExcludingDialog"
        }
      }, [s("q-layout", {
        staticClass: "bg-white",
        attrs: {
          view: "lHh lpr lFf",
          container: ""
        }
      }, [s("q-header", {
        staticClass: "full-width bg-white"
      }, [s("q-toolbar", [s("div", {
        staticClass: "full-width row items-center justify-between q-px-xs q-py-sm"
      }, [s("div", {
        staticClass: "text-bold text-black"
      }, [e._v("设置无需签到对象")]), s("q-btn", {
        attrs: {
          unelevated: "",
          color: "primary",
          label: "完成"
        },
        on: {
          click: function(t) {
            e.taskTargetExcludingDialog = !1
          }
        }
      })], 1)])], 1), s("q-page-container", [s("q-page", [s("neu-assign-student", {
        attrs: {
          permit: e.menuInfo ? e.menuInfo.edit_permit : null,
          "permit-mode": "E",
          "menu-id": e.menuInfo ? e.menuInfo.id : null
        },
        model: {
          value: e.record.task_target_excluding,
          callback: function(t) {
            e.$set(e.record, "task_target_excluding", t)
          },
          expression: "record.task_target_excluding"
        }
      })], 1)], 1)], 1)], 1), s("q-dialog", {
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
      }, [s("q-layout", {
        staticClass: "bg-white",
        attrs: {
          view: "lHh lpr lFf",
          container: ""
        }
      }, [s("q-header", {
        staticClass: "full-width bg-white"
      }, [s("q-toolbar", [s("div", {
        staticClass: "full-width row items-center justify-between q-px-xs q-py-sm"
      }, [s("div", {
        staticClass: "text-bold text-black"
      }, [e._v("设置共享对象")]), s("q-btn", {
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
      })], 1)])], 1), s("q-page-container", [s("q-page", [s("neu-assign-teacher", {
        model: {
          value: e.record.share_target,
          callback: function(t) {
            e.$set(e.record, "share_target", t)
          },
          expression: "record.share_target"
        }
      })], 1)], 1)], 1)], 1), s("q-dialog", {
        attrs: {
          maximized: e.maximizedToggle
        },
        model: {
          value: e.compositeShareDialog,
          callback: function(t) {
            e.compositeShareDialog = t
          },
          expression: "compositeShareDialog"
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
      }, [e._v("共享对象")]), s("q-btn", {
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
      })], 1), s("q-separator"), s("q-card-section", [s("neu-view-assigned-teacher", {
        attrs: {
          value: e.record.share_target
        }
      })], 1)], 1)], 1)], 1)], 1), s("q-footer", {
        staticClass: "bg-white text-primary",
        attrs: {
          bordered: ""
        }
      }, [s("div", {
        staticClass: "row justify-between"
      }, [s("q-btn", {
        staticStyle: {
          width: "40%",
          height: "2.8rem"
        },
        attrs: {
          flat: "",
          color: "grey",
          label: "取消",
          to: "/teacher/signin/index"
        }
      }), s("q-btn", {
        staticClass: "bg-primary",
        staticStyle: {
          width: "60%",
          height: "2.8rem"
        },
        attrs: {
          flat: "",
          unelevated: "",
          color: "white",
          label: "发布"
        },
        on: {
          click: e.submitForm
        }
      })], 1)])], 1)
    },
    i = [],
    r = (s("c975"), s("baa5"), s("13d5"), s("a434"), s("ddb0"), s("ded3")),
    o = s.n(r),
    n = function() {
      var e = this,
        t = e.$createElement,
        s = e._self._c || t;
      return s("div", [0 == e.list.length ? s("div", [s("q-card", {
        staticStyle: {
          height: "3.5rem",
          "align-items": "center",
          display: "flex",
          "justify-content": "center"
        },
        attrs: {
          flat: ""
        }
      }, [e._v("\n      暂无签到地点\n    ")])], 1) : e._e(), s("q-card", {
        staticClass: "full-width",
        attrs: {
          flat: ""
        }
      }, [s("q-list", {
        attrs: {
          bordered: "",
          separator: ""
        }
      }, [e._l(e.list, (function(t, a) {
        return s("q-item", {
          key: t.id,
          attrs: {
            clickable: "",
            "row-key": "id"
          },
          on: {
            click: function(t) {
              return e.viewMap(a)
            }
          }
        }, [s("q-item-section", {
          attrs: {
            side: "",
            top: ""
          }
        }, [s("q-checkbox", {
          attrs: {
            val: t
          },
          on: {
            input: e.getValue
          },
          model: {
            value: e.selected,
            callback: function(t) {
              e.selected = t
            },
            expression: "selected"
          }
        })], 1), s("q-item-section", [s("q-item-label", {
          staticClass: "text-primary cursor-pointer",
          staticStyle: {
            "font-size": "1.01rem"
          }
        }, [e._v(e._s(t.title))]), s("q-item-label", {
          staticClass: "row justify-between",
          attrs: {
            caption: ""
          }
        }, [s("div", [s("span", {
          staticClass: "neu-css-after-colon"
        }, [e._v("有效范围")]), s("span", {
          staticClass: "text-black"
        }, [e._v(e._s("circle" == t.area ? "半径" + t.radius + "米" : "多边形"))])]), s("div", [s("span", {
          staticClass: "neu-css-after-colon"
        }, [e._v("添加人")]), s("span", {
          staticClass: "text-black"
        }, [e._v(e._s(t.teacher_name))])])])], 1)], 1)
      })), s("q-item", {
        directives: [{
          name: "show",
          rawName: "v-show",
          value: e.paging.pageCount != e.paging.pageNum,
          expression: "paging.pageCount != paging.pageNum"
        }],
        attrs: {
          clickable: ""
        },
        on: {
          click: e.onLoad
        }
      }, [s("q-item-section", {
        staticClass: "text-center"
      }, [s("div", {
        staticClass: "text-grey"
      }, [e._v("加载更多")])])], 1), s("q-item", {
        directives: [{
          name: "show",
          rawName: "v-show",
          value: e.paging.pageCount == e.paging.pageNum,
          expression: "paging.pageCount == paging.pageNum"
        }],
        attrs: {
          clickable: ""
        },
        on: {
          click: e.onLoad
        }
      }, [s("q-item-section", {
        staticClass: "text-center"
      }, [s("div", {
        staticClass: "text-grey"
      }, [e._v("没有更多了")])])], 1)], 2)], 1), s("q-dialog", {
        attrs: {
          fullWidth: "",
          maximized: e.maximizedToggle
        },
        model: {
          value: e.mapViewDialog,
          callback: function(t) {
            e.mapViewDialog = t
          },
          expression: "mapViewDialog"
        }
      }, [s("q-card", {
        staticClass: "full-width",
        attrs: {
          flat: ""
        }
      }, [s("q-card-section", [s("neu-view-map", {
        attrs: {
          value: e.record,
          "popup-close-btn": !0
        }
      })], 1)], 1)], 1)], 1)
    },
    l = [],
    c = s("a086"),
    d = {
      name: "back",
      components: {
        NeuViewMap: c["a"]
      },
      props: {
        value: Array
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
        this.subTitle = this.title, this.refresh(null), this.modelValue = this.value, this.selected = this.modelValue, this.changeSelect()
      },
      watch: {
        value(e) {
          this.modelValue = e, this.selected = this.modelValue, this.changeSelect()
        },
        modelValue(e) {
          this.$emit("input", e)
        }
      },
      methods: {
        loadList(e, t) {
          t && (this.paging.pageNum = 0), this.paging.pageCount !== this.paging.pageNum ? (this.paging.pageNum += 1, this.$axiosAction("/api/teacher/basic/location.api", {
            action: "getLocationShareList",
            pageSize: this.paging.pageSize,
            pageNum: this.paging.pageNum
          }).then((s => {
            if (0 === s.data.code) {
              this.list = t ? s.data.result.list : this.list.concat(s.data.result.list);
              const {
                pageSize: e,
                pageNum: a,
                rowCount: i,
                pageCount: r,
                startIndex: n,
                endIndex: l
              } = o()({}, s.data.result);
              this.paging = {
                pageSize: e,
                pageNum: a,
                rowCount: i,
                pageCount: r,
                startIndex: n,
                endIndex: l
              }
            }
            e && e(), this.changeSelect()
          })).catch((t => {
            this.list = [], e && e()
          }))) : e && e()
        },
        refresh(e) {
          this.loadList(e, !0)
        },
        onLoad(e, t) {
          this.loadList(t, !1)
        },
        viewMap(e) {
          this.mapViewDialog = !0, this.record = o()({}, this.list[e])
        },
        goConfig() {
          this.$router.push("/teacher/basic/config")
        },
        getValue() {
          this.modelValue = this.selected
        },
        changeSelect() {
          const e = this.selected;
          for (let t = 0; t < e.length; t++)
            for (let s = 0; s < this.list.length; s++) e[t].id === this.list[s].id && (e[t] = this.list[s]);
          this.selected = e
        }
      }
    },
    u = d,
    m = s("2877"),
    g = s("f09f"),
    h = s("1c1c"),
    p = s("66e5"),
    _ = s("4074"),
    f = s("8f8e"),
    q = s("0170"),
    v = s("24e8"),
    w = s("a370"),
    b = s("eebe"),
    y = s.n(b),
    x = Object(m["a"])(u, n, l, !1, null, null, null),
    k = x.exports;
  y()(x, "components", {
    QCard: g["a"],
    QList: h["a"],
    QItem: p["a"],
    QItemSection: _["a"],
    QCheckbox: f["a"],
    QItemLabel: q["a"],
    QDialog: v["a"],
    QCardSection: w["a"]
  });
  var C = s("f395"),
    D = s("9a3d"),
    S = s("5333"),
    N = s("ad56"),
    $ = {
      name: "SigninNew",
      components: {
        NeuSigninRange: k,
        NeuAssignStudent: C["a"],
        NeuAssignTeacher: D["a"],
        NeuViewAssignedTeacher: S["a"]
      },
      data() {
        return {
          editorToolBar: JSON.parse(window.localStorage.editorToolBar),
          editorFonts: JSON.parse(window.localStorage.editorFonts),
          menuInfo: null,
          signinTypeList: [],
          frequencyList: [],
          signinMethodList: [],
          uploader: window.localStorage.server + this.$appConf.fileUploader,
          record: {
            signin_type: "",
            title: "",
            detail: "",
            attachment: [],
            signin_method: "L",
            student_showing: [],
            teacher_showing: [],
            range: [],
            allow_outside: 0,
            picture_evidence: 0,
            frequency: "S",
            single_begin_time: "",
            single_end_time: "",
            loop_frequency: [],
            loop_begin_date: "",
            loop_end_date: "",
            loop_begin_time: "",
            loop_end_time: "",
            appointed_date: [{
              begin_time: "",
              end_time: ""
            }],
            in_advance: 5,
            task_target: [],
            task_target_excluding: [],
            share_target: [],
            info_config: [],
            reviewer: [],
            dep_no: null,
            stu_manage_flag: 0,
            composite_id: null
          },
          rangeDialog: !1,
          studentShowingDialog: !1,
          teacherShowingDialog: !1,
          taskTargetDialog: !1,
          taskTargetExcludingDialog: !1,
          shareDialog: !1,
          infoConfigDialog: !1,
          infoConfigIndex: 0,
          infoModel: [],
          maximizedToggle: !0,
          reviewerDialog: !1,
          reviewerIndex: 0,
          depoptions: [],
          dep_no: JSON.parse(localStorage.getItem("userinfo")).dep_no,
          cId: this.$route.query.compositeId,
          shareDisable: !1,
          compositeShareDialog: !1,
          isHarmonyOS: !1
        }
      },
      destroyed() {
        window.removeEventListener("popstate", this.goBack, !1)
      },
      mounted() {
        window.localStorage.getItem("menu") && (this.menuInfo = JSON.parse(window.localStorage.getItem("menu")).find((e => "signin" === e.id))), this.$axiosAction("/api/public.api", {
          action: "queryResultOfFunction",
          functionName: "basic.f_query_option_list('signin_type')"
        }).then((e => {
          0 === e.data.code && (this.signinTypeList = e.data.list, this.signinTypeList && this.signinTypeList.length > 0 ? this.record.signin_type = this.signinTypeList[0].value : this.record.signin_type = "", this.$route.params && this.$route.params.record ? (this.getDepList(2), this.record = this.$route.params.record, this.record.signin_type = this.record.signin_type ? this.record.signin_type : [], this.record.range = this.record.range ? this.record.range : [], this.record.signin_method = this.record.signin_method ? this.record.signin_method : [], this.record.attachment = this.record.attachment ? this.record.attachment : [], this.record.loop_frequency = this.record.loop_frequency ? this.record.loop_frequency : [], this.record.task_target = this.record.task_target ? this.record.task_target : [], this.record.task_target_excluding = this.record.task_target_excluding ? this.record.task_target_excluding : [], this.record.share_target = this.record.share_target ? this.record.share_target : [], this.record.info_config = this.record.info_config ? this.record.info_config : [], this.record.reviewer = this.record.reviewer ? this.record.reviewer : [], this.record.student_showing = this.record.student_showing ? this.record.student_showing : [], this.record.teacher_showing = this.record.teacher_showing ? this.record.teacher_showing : [], this.record.appointed_date = this.record.appointed_date ? this.record.appointed_date : [{
            begin_time: "",
            end_time: ""
          }], this.record.composite_id = this.record.composite_id ? this.record.composite_id : null, this.shareDisable = null !== this.record.composite_id) : this.getDepList(1))
        })), this.$axiosAction("/api/public.api", {
          action: "queryResultOfFunction",
          functionName: "basic.f_query_option_list('frequency')"
        }).then((e => {
          0 === e.data.code && (this.frequencyList = e.data.list)
        })), this.$axiosAction("/api/public.api", {
          action: "queryResultOfFunction",
          functionName: "basic.f_query_option_list('signin_method')"
        }).then((e => {
          0 === e.data.code && (this.signinMethodList = e.data.list)
        })), window.history && window.history.pushState && (history.pushState(null, null, document.URL), window.addEventListener("popstate", this.goBack, !1)), this.$route.params && this.$route.params.taskTarget && (this.record.task_target = this.$route.params.taskTarget ? this.$route.params.taskTarget : []), null !== this.cId && void 0 !== this.cId && (this.record.title = this.$route.query.compositeTitle + "-" + this.menuInfo.title, "copy" !== this.$route.query.befrom && (this.record.share_target = this.$route.params.share_target ? this.$route.params.share_target : []), this.shareDisable = !0), this.detectOperatingSystem()
      },
      methods: {
        detectOperatingSystem() {
          const e = navigator.userAgent.toLowerCase();
          e.indexOf("harmonyos") >= 0 || e.indexOf("huawei") >= 0 || e.indexOf("emui") >= 0 ? this.isHarmonyOS = !0 : (e.indexOf("android") >= 0 || e.indexOf("linux") >= 0) && (this.isHarmonyOS = !1)
        },
        matchingUploadedFiles(e, t) {
          return e.reduce(((e, s) => t && t.length > 0 ? 0 === t.reduce(((e, t) => {
            if (t.xhr.response) {
              const a = JSON.parse(t.xhr.response);
              return a.servername === s.servername ? e + 1 : e
            }
            return e
          }), 0) ? e.concat(s) : e : e.concat(s)), [])
        },
        afterUploaded(e) {
          const t = JSON.parse(e.xhr.response);
          t.error ? this.$showErrorNotify(t.error) : this.record.attachment ? this.record.attachment.push(t) : this.record.attachment = [t]
        },
        checkFile(e) {
          return e.filter((e => {
            if (e.size >= 10485760) return this.$showErrorNotify("文件大小应限制在10M以内"), !1;
            const t = e.name.lastIndexOf(".");
            if (!(t > 0)) return this.$showErrorNotify("不支持该类型文件上传"), !1;
            {
              const s = e.name.substring(t + 1).toLowerCase();
              if (-1 === this.$appConf.fileExts.indexOf(s)) return this.$showErrorNotify("不支持该类型文件上传"), !1
            }
            return !0
          }))
        },
        onRejected(e) {
          this.$q.notify({
            type: "negative",
            message: `${e.length}份文件不符合格式限制！`
          })
        },
        afterRemoved(e) {
          for (const t of e) {
            const e = JSON.parse(t.xhr.response);
            this.removeFile(e.servername)
          }
        },
        removeFile(e) {
          const t = this.record.attachment.findIndex((t => t.servername === e));
          this.record.attachment.splice(t, 1)
        },
        downloadUploaderFile(e) {
          const t = JSON.parse(e.xhr.response);
          Object(N["c"])(t.link, t.srcname)
        },
        downloadFile(e, t) {
          Object(N["c"])(e, t)
        },
        addAppointedDate() {
          this.record.appointed_date.splice(this.record.appointed_date.length, 0, {
            begin_time: "",
            end_time: ""
          })
        },
        removeAppointedDate(e) {
          this.record.appointed_date.splice(e, 1)
        },
        saveRecord() {
          if (!this.record.detail) return void this.$showErrorNotify("请填写签到说明");
          if (!this.record.task_target || 0 === this.record.task_target.length) return void this.$showErrorNotify("请设置签到对象");
          if (0 === this.record.range.length && "L" === this.record.signin_method) return this.$showErrorNotify("请设置签到地点");
          if ("A" === this.record.frequency) {
            const e = this.record.appointed_date.reduce(((e, t) => e.concat(t.begin_time + "-" + t.end_time)), []),
              t = [...new Set(e)];
            if (e.length > t.length) return this.$showErrorNotify("指定日期开始截止时间段不能重复！");
            const s = this.record.appointed_date.reduce(((e, t) => e.concat(t.begin_time)), []),
              a = [...new Set(s)];
            if (s.length > a.length) return this.$showErrorNotify("指定日期开始时间不能重复！")
          }
          "" !== this.record.dep_no && void 0 !== this.record.dep_no || (this.record.dep_no = null), this.$q.loading.show();
          const e = o()({}, this.record);
          e.attachment = e.attachment && e.attachment.length > 0 ? JSON.stringify(e.attachment) : null, e.task_target = JSON.stringify(e.task_target), e.range = e.range && e.range.length > 0 ? JSON.stringify(e.range) : null, e.student_showing = e.student_showing && e.student_showing.length > 0 ? JSON.stringify(e.student_showing) : null, e.teacher_showing = e.teacher_showing && e.teacher_showing.length > 0 ? JSON.stringify(e.teacher_showing) : null, e.task_target_excluding = e.task_target_excluding && e.task_target_excluding.length > 0 ? JSON.stringify(e.task_target_excluding) : null, e.share_target = e.share_target && e.share_target.length > 0 ? JSON.stringify(e.share_target) : null, e.info_config = e.info_config && e.info_config.length > 0 ? JSON.stringify(e.info_config) : null, e.reviewer = e.reviewer && e.reviewer.length > 0 ? JSON.stringify(e.reviewer) : null, "S" === e.frequency ? (e.loop_frequency = null, e.loop_begin_date = null, e.loop_end_date = null, e.loop_begin_time = null, e.loop_end_time = null, e.appointed_date = null) : "L" === e.frequency ? (e.single_begin_time = null, e.single_end_time = null, e.appointed_date = null, e.loop_frequency = JSON.stringify(e.loop_frequency)) : "A" === e.frequency && (e.single_begin_time = null, e.single_end_time = null, e.loop_frequency = null, e.loop_begin_date = null, e.loop_end_date = null, e.loop_begin_time = null, e.loop_end_time = null, e.appointed_date = JSON.stringify(e.appointed_date)), "L" === e.signin_method ? (e.student_showing = null, e.teacher_showing = null) : (e.range = null, e.picture_evidence = 0), null !== this.cId && void 0 !== this.cId ? e.composite_id = this.$route.query.compositeId : e.composite_id = this.record.composite_id, this.$axiosAction("/api/teacher/signin/signin.api", o()({
            action: "insert"
          }, e)).then((e => {
            0 === e.data.code && this.goBack(), this.$q.loading.hide()
          })).catch((e => {
            this.$q.loading.hide()
          }))
        },
        submitForm() {
          this.$refs.form.submit()
        },
        goBack() {
          null !== this.cId && void 0 !== this.cId ? this.$router.push("/teacher/composite/detail?id=" + this.$route.query.compositeId) : this.$router.push("/teacher/signin/index")
        },
        getDepList(e) {
          this.$axiosAction("/api/public.api", {
            action: "queryResultOfFunction",
            functionName: "basic.f_query_department_list()"
          }).then((t => {
            0 === t.data.code && (this.depoptions = t.data.list, 1 === e && (this.record.dep_no = this.depoptions.find((e => e.value === this.dep_no)).value))
          })).catch((e => {
            this.options = []
          }))
        },
        openSharetarget() {
          this.compositeShareDialog = !0
        }
      }
    },
    z = $,
    L = s("4d5a"),
    T = s("e359"),
    I = s("65c6"),
    Q = s("9c40"),
    O = s("6ac5"),
    F = s("09e3"),
    Y = s("9989"),
    H = s("0378"),
    M = s("eb85"),
    j = s("ddd8"),
    E = s("27f9"),
    A = s("d66b"),
    J = s("ee89"),
    R = s("cc04"),
    V = s("05c0"),
    U = s("0016"),
    B = s("9564"),
    P = s("8572"),
    W = s("7cbe"),
    G = s("52ee"),
    K = s("ca78"),
    X = s("c1d0"),
    Z = s("7ff0"),
    ee = s("7f67"),
    te = Object(m["a"])(z, a, i, !1, null, null, null);
  t["default"] = te.exports;
  y()(te, "components", {
    QLayout: L["a"],
    QHeader: T["a"],
    QToolbar: I["a"],
    QBtn: Q["a"],
    QToolbarTitle: O["a"],
    QPageContainer: F["a"],
    QPage: Y["a"],
    QForm: H["a"],
    QCard: g["a"],
    QList: h["a"],
    QItem: p["a"],
    QItemSection: _["a"],
    QItemLabel: q["a"],
    QSeparator: M["a"],
    QSelect: j["a"],
    QInput: E["a"],
    QEditor: A["a"],
    QUploader: J["a"],
    QUploaderAddTrigger: R["a"],
    QTooltip: V["a"],
    QIcon: U["a"],
    QToggle: B["a"],
    QField: P["a"],
    QPopupProxy: W["a"],
    QDate: G["a"],
    QTime: K["a"],
    QCheckbox: f["a"],
    QSlider: X["a"],
    QDialog: v["a"],
    QCardSection: w["a"],
    QFooter: Z["a"]
  }), y()(te, "directives", {
    ClosePopup: ee["a"]
  })
}
