/**
 * Webpack module logic recovery
 * Source: assets/www/js/66.js -> module "ac1c"
 * Route: /teacher/apply/new
 * Component guess: NoticeNew
 * Fidelity: exact module body, beautified only (webpack wrapper retained)
 * Note: variable names inside the original production module are preserved as evidence.
 */
ac1c: function(e, t, a) {
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
      }), e.menuInfo ? a("q-toolbar-title", [e._v("新建" + e._s(e.menuInfo.title))]) : e._e()], 1)], 1), a("q-page-container", [a("q-page", {
        staticClass: "bg-grey-3"
      }, [e.menuInfo ? e._e() : a("div", {
        staticClass: "text-h6 text-bold q-mb-md row justify-center full-width"
      }, [e._v("\n          您没有当前页面访问权限\n      ")]), a("q-form", {
        ref: "form",
        staticClass: "full-width",
        on: {
          submit: e.saveRecord
        }
      }, [a("q-card", {
        staticClass: "full-width row",
        attrs: {
          flat: ""
        }
      }, [a("q-list", {
        staticClass: "full-width"
      }, [a("q-item", [a("q-item-section", [a("q-item-label", {
        staticClass: "text-bold"
      }, [e._v(e._s((e.menuInfo || {}).title) + "通知内容")])], 1)], 1), a("q-separator"), a("q-item", [a("q-item-section", {
        attrs: {
          avatar: ""
        }
      }, [a("q-item-label", {
        staticClass: "neu-css-before-red-asterisk"
      }, [e._v("名称")])], 1), a("q-item-section", [a("q-input", {
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
      }, [a("div", [e._v("\n                发布单位\n              ")])]), a("q-item-section", [a("q-select", {
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
      })], 1)], 1), a("q-separator"), a("q-item", [a("q-item-section", [a("q-item-label", {
        staticClass: "neu-css-before-red-asterisk q-my-sm"
      }, [e._v("说明")]), a("q-editor", {
        attrs: {
          toolbar: e.editorToolBar,
          fonts: e.editorFonts,
          "min-height": "10em",
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
      })], 1)], 1), a("q-separator"), a("q-item", [a("q-item-section", [a("q-item-label", {
        staticClass: "q-my-sm"
      }, [e._v("附件")]), a("q-item-label", {
        staticClass: "q-mb-sm",
        attrs: {
          caption: ""
        }
      }, [e._v("附件格式支持：Word、Excel、PowerPoint、PDF")]), 0 == e.isHarmonyOS ? a("q-uploader", {
        staticClass: "full-width",
        attrs: {
          color: "grey",
          flat: "",
          url: e.uploader,
          "auto-upload": "",
          filter: e.checkFile,
          accept: ".pdf, .pptx, .ppt, .xls, .xlsx, .doc, .docx, audio/*, image/*, video/*"
        },
        on: {
          uploaded: e.afterUploaded,
          rejected: e.onRejected,
          removed: e.afterRemoved
        },
        scopedSlots: e._u([{
          key: "header",
          fn: function(t) {
            return [a("div", {
              staticClass: "row no-wrap items-center q-pa-sm q-gutter-xs"
            }, [a("div", {
              staticClass: "col"
            }, [e._v("附件上传(10M以内)")]), t.canAddFiles ? a("q-btn", {
              attrs: {
                type: "a",
                icon: "add_box",
                round: "",
                dense: "",
                flat: ""
              }
            }, [a("q-uploader-add-trigger"), a("q-tooltip", [e._v("选择文件并上传")])], 1) : e._e()], 1)]
          }
        }, {
          key: "list",
          fn: function(t) {
            return [a("q-list", {
              attrs: {
                separator: ""
              }
            }, [e._l(t.files, (function(i) {
              return a("q-item", {
                key: i.name
              }, [a("q-item-section", [a("q-item-label", {
                staticClass: "full-width ellipsis cursor-pointer",
                on: {
                  click: function(t) {
                    return e.downloadUploaderFile(i)
                  }
                }
              }, [e._v("\n                            " + e._s(i.name) + "\n                          ")])], 1), a("q-item-section", {
                attrs: {
                  side: ""
                }
              }, [a("q-btn", {
                attrs: {
                  flat: "",
                  dense: "",
                  color: "negative",
                  icon: "delete",
                  size: "sm"
                },
                on: {
                  click: function(e) {
                    return t.removeFile(i)
                  }
                }
              }, [a("q-tooltip", [e._v("删除")])], 1)], 1)], 1)
            })), e._l(e.matchingUploadedFiles(e.record.attachment, t.files), (function(t) {
              return a("q-item", {
                key: t.servername
              }, [a("q-item-section", [a("q-item-label", {
                staticClass: "full-width ellipsis cursor-pointer",
                on: {
                  click: function(a) {
                    return e.downloadFile(t.link, t.servername)
                  }
                }
              }, [e._v("\n                            " + e._s(t.srcname) + "\n                          ")])], 1), a("q-item-section", {
                attrs: {
                  side: ""
                }
              }, [a("q-btn", {
                attrs: {
                  flat: "",
                  dense: "",
                  color: "negative",
                  icon: "delete",
                  size: "sm"
                },
                on: {
                  click: function(a) {
                    return e.removeFile(t.servername)
                  }
                }
              }, [a("q-tooltip", [e._v("删除")])], 1)], 1)], 1)
            }))], 2)]
          }
        }], null, !1, 2478645286)
      }) : e._e(), 1 == e.isHarmonyOS ? a("q-uploader", {
        staticClass: "full-width",
        attrs: {
          color: "grey",
          flat: "",
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
            return [a("div", {
              staticClass: "row no-wrap items-center q-pa-sm q-gutter-xs"
            }, [a("div", {
              staticClass: "col"
            }, [e._v("附件上传(10M以内)")]), t.canAddFiles ? a("q-btn", {
              attrs: {
                type: "a",
                icon: "add_box",
                round: "",
                dense: "",
                flat: ""
              }
            }, [a("q-uploader-add-trigger"), a("q-tooltip", [e._v("选择文件并上传")])], 1) : e._e()], 1)]
          }
        }, {
          key: "list",
          fn: function(t) {
            return [a("q-list", {
              attrs: {
                separator: ""
              }
            }, [e._l(t.files, (function(i) {
              return a("q-item", {
                key: i.name
              }, [a("q-item-section", [a("q-item-label", {
                staticClass: "full-width ellipsis cursor-pointer",
                on: {
                  click: function(t) {
                    return e.downloadUploaderFile(i)
                  }
                }
              }, [e._v("\n                            " + e._s(i.name) + "\n                          ")])], 1), a("q-item-section", {
                attrs: {
                  side: ""
                }
              }, [a("q-btn", {
                attrs: {
                  flat: "",
                  dense: "",
                  color: "negative",
                  icon: "delete",
                  size: "sm"
                },
                on: {
                  click: function(e) {
                    return t.removeFile(i)
                  }
                }
              }, [a("q-tooltip", [e._v("删除")])], 1)], 1)], 1)
            })), e._l(e.matchingUploadedFiles(e.record.attachment, t.files), (function(t) {
              return a("q-item", {
                key: t.servername
              }, [a("q-item-section", [a("q-item-label", {
                staticClass: "full-width ellipsis cursor-pointer",
                on: {
                  click: function(a) {
                    return e.downloadFile(t.link, t.servername)
                  }
                }
              }, [e._v("\n                            " + e._s(t.srcname) + "\n                          ")])], 1), a("q-item-section", {
                attrs: {
                  side: ""
                }
              }, [a("q-btn", {
                attrs: {
                  flat: "",
                  dense: "",
                  color: "negative",
                  icon: "delete",
                  size: "sm"
                },
                on: {
                  click: function(a) {
                    return e.removeFile(t.servername)
                  }
                }
              }, [a("q-tooltip", [e._v("删除")])], 1)], 1)], 1)
            }))], 2)]
          }
        }], null, !1, 2478645286)
      }) : e._e()], 1)], 1)], 1)], 1), a("q-card", {
        staticClass: "full-width row q-mt-sm",
        attrs: {
          flat: ""
        }
      }, [a("q-list", {
        staticClass: "full-width"
      }, [a("q-item", [a("q-item-section", [a("q-item-label", {
        staticClass: "text-bold"
      }, [e._v("执行频率")])], 1)], 1), a("q-separator"), a("q-item", [a("q-item-section", {
        attrs: {
          avatar: ""
        }
      }, [a("q-item-label", {
        staticClass: "neu-css-before-red-asterisk"
      }, [e._v(e._s((e.menuInfo || {}).title) + "频率")])], 1), a("q-item-section", [a("q-item-label", [a("q-select", {
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
      })], 1)], 1)], 1), a("q-separator"), "S" == e.record.frequency ? a("q-item", [a("q-item-section", {
        attrs: {
          avatar: ""
        }
      }, [a("q-item-label", {
        staticClass: "neu-css-before-red-asterisk"
      }, [e._v("开始时间")])], 1), a("q-item-section", [a("q-field", {
        staticClass: "full-width",
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
            return [a("q-icon", {
              staticClass: "cursor-pointer",
              attrs: {
                name: "event"
              }
            }, [a("q-popup-proxy", {
              attrs: {
                "transition-show": "scale",
                "transition-hide": "scale"
              }
            }, [a("div", [a("q-date", {
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
            }, [a("div", {
              staticClass: "row items-center justify-end"
            }, [a("q-btn", {
              directives: [{
                name: "close-popup",
                rawName: "v-close-popup"
              }],
              attrs: {
                dense: "",
                label: "关闭",
                flat: ""
              }
            })], 1)])], 1)])], 1), a("q-icon", {
              staticClass: "cursor-pointer",
              attrs: {
                name: "access_time"
              }
            }, [a("q-popup-proxy", {
              attrs: {
                "transition-show": "scale",
                "transition-hide": "scale"
              }
            }, [a("div", {
              staticClass: "row items-start"
            }, [a("q-time", {
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
            }, [a("div", {
              staticClass: "row items-center justify-end"
            }, [a("q-btn", {
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
      })], 1)], 1) : e._e(), "S" == e.record.frequency ? a("q-separator") : e._e(), "S" == e.record.frequency ? a("q-item", [a("q-item-section", {
        attrs: {
          avatar: ""
        }
      }, [a("q-item-label", {
        staticClass: "neu-css-before-red-asterisk"
      }, [e._v("截止时间")])], 1), a("q-item-section", [a("q-field", {
        staticClass: "full-width",
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
            return [a("q-icon", {
              staticClass: "cursor-pointer",
              attrs: {
                name: "event"
              }
            }, [a("q-popup-proxy", {
              attrs: {
                "transition-show": "scale",
                "transition-hide": "scale"
              }
            }, [a("div", [a("q-date", {
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
            }, [a("div", {
              staticClass: "row items-center justify-end"
            }, [a("q-btn", {
              directives: [{
                name: "close-popup",
                rawName: "v-close-popup"
              }],
              attrs: {
                dense: "",
                label: "关闭",
                flat: ""
              }
            })], 1)])], 1)])], 1), a("q-icon", {
              staticClass: "cursor-pointer",
              attrs: {
                name: "access_time"
              }
            }, [a("q-popup-proxy", {
              attrs: {
                "transition-show": "scale",
                "transition-hide": "scale"
              }
            }, [a("div", {
              staticClass: "row items-start"
            }, [a("q-time", {
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
            }, [a("div", {
              staticClass: "row items-center justify-end"
            }, [a("q-btn", {
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
      })], 1)], 1) : e._e(), "L" == e.record.frequency ? a("q-item", [a("q-item-section", [a("q-item-label", {
        staticClass: "neu-css-before-red-asterisk q-my-sm"
      }, [e._v("循环" + e._s((e.menuInfo || {}).title) + "频率")]), a("q-item-label", e._l([{
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
        return a("q-checkbox", {
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
      })), 1)], 1)], 1) : e._e(), "L" == e.record.frequency ? a("q-separator") : e._e(), "L" == e.record.frequency ? a("q-item", [a("q-item-section", {
        attrs: {
          avatar: ""
        }
      }, [a("q-item-label", {
        staticClass: "neu-css-before-red-asterisk"
      }, [e._v("开始日期")])], 1), a("q-item-section", [a("q-field", {
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
            return [a("q-icon", {
              staticClass: "cursor-pointer",
              attrs: {
                name: "event"
              }
            }, [a("q-popup-proxy", {
              attrs: {
                "transition-show": "scale",
                "transition-hide": "scale"
              }
            }, [a("div", [a("q-date", {
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
            }, [a("div", {
              staticClass: "row items-center justify-end"
            }, [a("q-btn", {
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
      })], 1)], 1) : e._e(), "L" == e.record.frequency ? a("q-separator") : e._e(), "L" == e.record.frequency ? a("q-item", [a("q-item-section", {
        attrs: {
          avatar: ""
        }
      }, [a("q-item-label", {
        staticClass: "neu-css-before-red-asterisk"
      }, [e._v("截止日期")])], 1), a("q-item-section", [a("q-field", {
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
            return [a("q-icon", {
              staticClass: "cursor-pointer",
              attrs: {
                name: "event"
              }
            }, [a("q-popup-proxy", {
              attrs: {
                "transition-show": "scale",
                "transition-hide": "scale"
              }
            }, [a("div", [a("q-date", {
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
            }, [a("div", {
              staticClass: "row items-center justify-end"
            }, [a("q-btn", {
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
      })], 1)], 1) : e._e(), "L" == e.record.frequency ? a("q-separator") : e._e(), "L" == e.record.frequency ? a("q-item", [a("q-item-section", {
        attrs: {
          avatar: ""
        }
      }, [a("q-item-label", {
        staticClass: "neu-css-before-red-asterisk"
      }, [e._v("开始时间")])], 1), a("q-item-section", [a("q-field", {
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
            return [a("q-icon", {
              staticClass: "cursor-pointer",
              attrs: {
                name: "access_time"
              }
            }, [a("q-popup-proxy", {
              attrs: {
                "transition-show": "scale",
                "transition-hide": "scale"
              }
            }, [a("div", {
              staticClass: "row items-start"
            }, [a("q-time", {
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
            }, [a("div", {
              staticClass: "row items-center justify-end"
            }, [a("q-btn", {
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
      })], 1)], 1) : e._e(), "L" == e.record.frequency ? a("q-separator") : e._e(), "L" == e.record.frequency ? a("q-item", [a("q-item-section", {
        attrs: {
          avatar: ""
        }
      }, [a("q-item-label", {
        staticClass: "neu-css-before-red-asterisk"
      }, [e._v("结束时间")])], 1), a("q-item-section", [a("q-field", {
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
            return [a("q-icon", {
              staticClass: "cursor-pointer",
              attrs: {
                name: "access_time"
              }
            }, [a("q-popup-proxy", {
              attrs: {
                "transition-show": "scale",
                "transition-hide": "scale"
              }
            }, [a("div", {
              staticClass: "row items-start"
            }, [a("q-time", {
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
            }, [a("div", {
              staticClass: "row items-center justify-end"
            }, [a("q-btn", {
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
      })], 1)], 1) : e._e(), "A" == e.record.frequency ? a("q-item", [a("q-item-section", {
        attrs: {
          avatar: ""
        }
      }, [a("q-item-label", {
        staticClass: "neu-css-before-red-asterisk"
      }, [e._v("开始截止时间")])], 1), a("q-item-section"), a("q-item-section", {
        attrs: {
          side: ""
        }
      }, [a("q-item-label", {
        staticClass: "text-primary",
        on: {
          click: e.addAppointedDate
        }
      }, [e._v("添加")])], 1)], 1) : e._e(), e._l("A" == e.record.frequency ? e.record.appointed_date : [], (function(t, i) {
        return a("q-item", {
          key: t.begin_time
        }, [a("q-item-section", {
          attrs: {
            avatar: ""
          }
        }, [a("q-item-label", [e._v("时间段" + e._s(i + 1))])], 1), a("q-item-section", [a("q-item-label", [a("q-field", {
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
              return [a("q-icon", {
                staticClass: "cursor-pointer",
                attrs: {
                  name: "event"
                }
              }, [a("q-popup-proxy", {
                attrs: {
                  "transition-show": "scale",
                  "transition-hide": "scale"
                }
              }, [a("div", [a("q-date", {
                attrs: {
                  flat: "",
                  minimal: "",
                  mask: "YYYY-MM-DD HH:mm"
                },
                model: {
                  value: t.begin_time,
                  callback: function(a) {
                    e.$set(t, "begin_time", a)
                  },
                  expression: "item.begin_time"
                }
              }, [a("div", {
                staticClass: "row items-center justify-end"
              }, [a("q-btn", {
                directives: [{
                  name: "close-popup",
                  rawName: "v-close-popup"
                }],
                attrs: {
                  dense: "",
                  label: "关闭",
                  flat: ""
                }
              })], 1)])], 1)])], 1), a("q-icon", {
                staticClass: "cursor-pointer",
                attrs: {
                  name: "access_time"
                }
              }, [a("q-popup-proxy", {
                attrs: {
                  "transition-show": "scale",
                  "transition-hide": "scale"
                }
              }, [a("div", {
                staticClass: "row items-start"
              }, [a("q-time", {
                attrs: {
                  flat: "",
                  mask: "YYYY-MM-DD HH:mm",
                  format24h: ""
                },
                model: {
                  value: t.begin_time,
                  callback: function(a) {
                    e.$set(t, "begin_time", a)
                  },
                  expression: "item.begin_time"
                }
              }, [a("div", {
                staticClass: "row items-center justify-end"
              }, [a("q-btn", {
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
        })], 1), a("q-item-label", [a("q-field", {
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
              return [a("q-icon", {
                staticClass: "cursor-pointer",
                attrs: {
                  name: "event"
                }
              }, [a("q-popup-proxy", {
                attrs: {
                  "transition-show": "scale",
                  "transition-hide": "scale"
                }
              }, [a("div", [a("q-date", {
                attrs: {
                  flat: "",
                  minimal: "",
                  mask: "YYYY-MM-DD HH:mm"
                },
                model: {
                  value: t.end_time,
                  callback: function(a) {
                    e.$set(t, "end_time", a)
                  },
                  expression: "item.end_time"
                }
              }, [a("div", {
                staticClass: "row items-center justify-end"
              }, [a("q-btn", {
                directives: [{
                  name: "close-popup",
                  rawName: "v-close-popup"
                }],
                attrs: {
                  dense: "",
                  label: "关闭",
                  flat: ""
                }
              })], 1)])], 1)])], 1), a("q-icon", {
                staticClass: "cursor-pointer",
                attrs: {
                  name: "access_time"
                }
              }, [a("q-popup-proxy", {
                attrs: {
                  "transition-show": "scale",
                  "transition-hide": "scale"
                }
              }, [a("div", {
                staticClass: "row items-start"
              }, [a("q-time", {
                attrs: {
                  flat: "",
                  mask: "YYYY-MM-DD HH:mm",
                  format24h: ""
                },
                model: {
                  value: t.end_time,
                  callback: function(a) {
                    e.$set(t, "end_time", a)
                  },
                  expression: "item.end_time"
                }
              }, [a("div", {
                staticClass: "row items-center justify-end"
              }, [a("q-btn", {
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
        })], 1)], 1), a("q-item-section", {
          attrs: {
            side: ""
          }
        }, [a("q-item-label", {
          directives: [{
            name: "show",
            rawName: "v-show",
            value: e.record.appointed_date.length > 1,
            expression: "record.appointed_date.length > 1"
          }],
          staticClass: "text-negative cursor-pointer",
          on: {
            click: function(t) {
              return e.removeAppointedDate(i)
            }
          }
        }, [e._v("\n                  删除"), a("q-tooltip", [e._v("删除该时间段")])], 1)], 1)], 1)
      }))], 2)], 1), a("q-card", {
        staticClass: "full-width row q-mt-sm",
        attrs: {
          flat: ""
        }
      }, [a("q-list", {
        staticClass: "full-width"
      }, [a("q-item", [a("q-item-section", [a("q-item-label", {
        staticClass: "text-bold"
      }, [e._v("条件限定")])], 1)], 1), a("q-separator"), "C" != e.record.apply_type ? a("q-item", [a("q-item-section", {
        attrs: {
          avatar: ""
        }
      }, [a("q-item-label", {
        staticClass: "neu-css-before-red-asterisk"
      }, [e._v(e._s(e.applyShortTitle) + "人数限制")])], 1), a("q-item-section"), a("q-item-section", {
        attrs: {
          side: ""
        }
      }, [a("q-toggle", {
        attrs: {
          size: "lg",
          dense: "",
          "false-value": 0,
          "true-value": 1
        },
        model: {
          value: e.applyMaxToggle,
          callback: function(t) {
            e.applyMaxToggle = t
          },
          expression: "applyMaxToggle"
        }
      })], 1)], 1) : e._e(), 1 == e.applyMaxToggle ? a("q-item", [a("q-item-section", [a("q-input", {
        directives: [{
          name: "show",
          rawName: "v-show",
          value: 1 == e.applyMaxToggle,
          expression: "applyMaxToggle == 1"
        }],
        attrs: {
          outlined: "",
          dense: "",
          type: "number",
          "hide-bottom-space": "",
          "lazy-rules": "",
          rules: [function(t) {
            return !!t || 0 == e.applyMaxToggle || t > 0 || "请填写该项"
          }]
        },
        model: {
          value: e.record.apply_max,
          callback: function(t) {
            e.$set(e.record, "apply_max", e._n(t))
          },
          expression: "record.apply_max"
        }
      })], 1)], 1) : e._e(), "C" !== e.record.apply_type ? a("q-separator") : e._e(), a("q-item", [a("q-item-section", {
        attrs: {
          avatar: ""
        }
      }, [a("q-item-label", {
        staticClass: "neu-css-before-red-asterisk"
      }, [e._v("需要学生定位信息")])], 1), a("q-item-section"), a("q-item-section", {
        attrs: {
          side: ""
        }
      }, [a("q-toggle", {
        attrs: {
          size: "lg",
          dense: "",
          "false-value": 0,
          "true-value": 1
        },
        model: {
          value: e.need_location,
          callback: function(t) {
            e.need_location = t
          },
          expression: "need_location"
        }
      })], 1)], 1), a("q-separator"), a("q-item", [a("q-item-section", {
        attrs: {
          avatar: ""
        }
      }, [a("q-item-label", {
        staticClass: "neu-css-before-red-asterisk"
      }, [e._v("允许" + e._s(e.counsellorlabel) + "撤回学生数据")])], 1), a("q-item-section"), a("q-item-section", {
        attrs: {
          side: ""
        }
      }, [a("q-toggle", {
        attrs: {
          size: "lg",
          dense: "",
          "false-value": 0,
          "true-value": 1
        },
        model: {
          value: e.allow_counsellor,
          callback: function(t) {
            e.allow_counsellor = t
          },
          expression: "allow_counsellor"
        }
      })], 1)], 1), a("q-separator")], 1)], 1), a("q-card", {
        staticClass: "full-width row q-mt-sm",
        attrs: {
          flat: ""
        }
      }, [a("q-list", {
        staticClass: "full-width"
      }, [a("q-item", [a("q-item-section", [a("q-item-label", {
        staticClass: "neu-css-before-red-asterisk"
      }, [e._v("允许班级干部查看任务数据")])], 1), a("q-item-section", {
        attrs: {
          side: ""
        }
      }, [a("q-toggle", {
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
      })], 1)], 1)], 1)], 1), a("q-card", {
        staticClass: "full-width row q-mt-sm",
        attrs: {
          flat: ""
        }
      }, [a("q-list", {
        staticClass: "full-width"
      }, [a("q-item", [a("q-item-section", [a("q-item-label", {
        staticClass: "text-bold"
      }, [e._v("通知设定")])], 1)], 1), a("q-separator"), a("q-item", [a("q-item-section", {
        staticClass: "full-width"
      }, [a("q-item-label", {
        staticClass: "neu-css-before-red-asterisk"
      }, [e._v("通知提前推送时间(分)")]), a("div", {
        staticClass: "full-width q-mt-lg"
      }, [a("q-slider", {
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
      })], 1)], 1)], 1)], 1)], 1), a("q-card", {
        staticClass: "full-width row q-mt-sm",
        attrs: {
          flat: ""
        }
      }, [a("q-list", {
        staticClass: "full-width"
      }, [a("q-item", [a("q-item-section", {
        attrs: {
          avatar: ""
        }
      }, [a("q-item-label", {
        staticClass: "neu-css-before-red-asterisk"
      }, [e._v(e._s((e.menuInfo || {}).title) + "对象")])], 1), a("q-item-section"), a("q-item-section", {
        attrs: {
          side: ""
        }
      }, [a("q-item-label", {
        staticClass: "row items-center"
      }, [a("span", {
        directives: [{
          name: "show",
          rawName: "v-show",
          value: !e.record.task_target || 0 == e.record.task_target.length,
          expression: "!record.task_target || record.task_target.length == 0"
        }],
        staticClass: "text-grey",
        on: {
          click: function(t) {
            e.taskTargetDialog = !0
          }
        }
      }, [e._v("选择")]), a("q-icon", {
        directives: [{
          name: "show",
          rawName: "v-show",
          value: !e.record.task_target || 0 == e.record.task_target.length,
          expression: "!record.task_target || record.task_target.length == 0"
        }],
        staticClass: "text-grey",
        attrs: {
          name: "keyboard_arrow_right",
          size: "sm"
        }
      }), a("span", {
        directives: [{
          name: "show",
          rawName: "v-show",
          value: e.record.task_target && 0 != e.record.task_target.length,
          expression: "record.task_target && record.task_target.length != 0"
        }],
        staticClass: "text-primary",
        on: {
          click: function(t) {
            e.taskTargetDialog = !0
          }
        }
      }, [e._v("已选择 (" + e._s(e.record.task_target.length) + ")")]), a("q-icon", {
        directives: [{
          name: "show",
          rawName: "v-show",
          value: e.record.task_target && 0 != e.record.task_target.length,
          expression: "record.task_target && record.task_target.length != 0"
        }],
        staticClass: "text-primary",
        attrs: {
          name: "keyboard_arrow_right",
          size: "sm"
        }
      })], 1)], 1)], 1)], 1)], 1), a("q-card", {
        staticClass: "full-width row q-mt-sm",
        attrs: {
          flat: ""
        }
      }, [a("q-list", {
        staticClass: "full-width"
      }, [a("q-item", [a("q-item-section", {
        attrs: {
          avatar: ""
        }
      }, [a("q-item-label", [e._v("无需" + e._s((e.menuInfo || {}).title) + "对象")])], 1), a("q-item-section"), a("q-item-section", {
        attrs: {
          side: ""
        }
      }, [a("q-item-label", {
        staticClass: "row items-center"
      }, [a("span", {
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
      }, [e._v("选择")]), a("q-icon", {
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
      }), a("span", {
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
      }, [e._v("已选择 (" + e._s(e.record.task_target_excluding.length) + ")")]), a("q-icon", {
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
      })], 1)], 1)], 1)], 1)], 1), a("q-card", {
        staticClass: "full-width row q-mt-sm",
        attrs: {
          flat: ""
        }
      }, [a("q-list", {
        staticClass: "full-width"
      }, [a("q-item", [a("q-item-section", {
        attrs: {
          avatar: ""
        }
      }, [a("q-item-label", [e._v("共享对象")]), e.shareDisable ? e._e() : a("q-item-label", {
        attrs: {
          caption: ""
        }
      }, [e._v("将该" + e._s((e.menuInfo || {}).title) + "统计数据共享给其他老师")]), e.shareDisable ? a("q-item-label", {
        attrs: {
          caption: ""
        }
      }, [e._v("组合子任务不可更改分享对象")]) : e._e()], 1), a("q-item-section"), a("q-item-section", {
        attrs: {
          side: ""
        }
      }, [a("q-item-label", {
        staticClass: "row items-center"
      }, [a("span", {
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
      }, [e._v("选择")]), a("q-icon", {
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
      }), a("span", {
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
      }, [e._v("已选择 (" + e._s(e.record.share_target.length) + ")")]), a("q-icon", {
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
      }), a("span", {
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
      }, [e._v("查看(" + e._s(e.record.share_target.length > 0 ? e.record.share_target.length : "") + ")")]), a("q-icon", {
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
      })], 1)], 1)], 1)], 1)], 1), a("q-card", {
        staticClass: "full-width row q-mt-sm",
        attrs: {
          flat: ""
        }
      }, [a("q-list", {
        staticClass: "full-width"
      }, [a("q-item", [a("q-item-section", {
        attrs: {
          avatar: ""
        }
      }, [a("q-item-label", [e._v("信息收集")])], 1), a("q-item-section"), a("q-item-section", {
        attrs: {
          side: ""
        }
      }, [a("q-item-label", {
        staticClass: "row items-center"
      }, [a("span", {
        staticClass: "text-primary",
        on: {
          click: function(t) {
            return e.addInfoConfig(e.record.info_config.length)
          }
        }
      }, [e._v("添加")]), a("q-icon", {
        staticClass: "text-primary",
        attrs: {
          name: "keyboard_arrow_right",
          size: "sm"
        }
      })], 1)], 1)], 1), 0 !== e.record.info_config.length ? a("q-item", [a("q-item-section", [a("div", {
        staticClass: "row items-center"
      }, [a("div", {
        staticClass: "col-12 col-md-2 col-sm-3 neu-css-after-colon",
        class: {
          "text-right": !e.$q.screen.lt.sm,
          "neu-css-before-red-asterisk": "C" == e.applyType
        }
      }, [e._v("信息收集项目")]), a("div", {
        staticClass: "col-12 col-md-10 col-sm-9"
      }, e._l(e.record.info_config, (function(t, i) {
        return a("div", {
          key: i,
          staticClass: "bg-grey-2 q-pa-sm q-mt-sm"
        }, [a("div", [a("span", {
          staticClass: "neu-css-after-colon"
        }, [e._v("第" + e._s(i + 1) + "题")]), a("span", {
          staticClass: "text-primary cursor-pointer q-ml-sm",
          on: {
            click: function(t) {
              return e.editInfoConfig(i)
            }
          }
        }, [e._v("编辑")]), a("span", {
          staticClass: "text-negative cursor-pointer q-ml-sm",
          on: {
            click: function(t) {
              return e.deleteInfoConfig(i)
            }
          }
        }, [e._v("删除")]), a("span", {
          directives: [{
            name: "show",
            rawName: "v-show",
            value: i + 1 != e.record.info_config.length,
            expression: "index + 1 != record.info_config.length"
          }],
          staticClass: "text-primary cursor-pointer q-ml-sm",
          on: {
            click: function(t) {
              return e.moveInfoConfig(i, 1)
            }
          }
        }, [e._v("下移")]), a("span", {
          directives: [{
            name: "show",
            rawName: "v-show",
            value: 0 != i,
            expression: "index != 0"
          }],
          staticClass: "text-primary cursor-pointer q-ml-sm",
          on: {
            click: function(t) {
              return e.moveInfoConfig(i, -1)
            }
          }
        }, [e._v("上移")])]), a("neu-widget", {
          attrs: {
            config: t,
            viewMode: !0
          },
          model: {
            value: e.infoModel[i],
            callback: function(t) {
              e.$set(e.infoModel, i, t)
            },
            expression: "infoModel[index]"
          }
        })], 1)
      })), 0)])])], 1) : e._e()], 1)], 1), a("q-separator", {
        staticClass: "bg-grey-3",
        staticStyle: {
          height: "0.5rem"
        }
      })], 1), a("q-dialog", {
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
      }, [e._v("设置" + e._s(e.applyShortTitle) + "对象")]), a("q-btn", {
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
      })], 1)])], 1), a("q-page-container", [a("q-page", [a("neu-assign-student", {
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
      })], 1)], 1)], 1)], 1), a("q-dialog", {
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
      }, [e._v("设置无需" + e._s(e.applyShortTitle) + "对象")]), a("q-btn", {
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
      })], 1)])], 1), a("q-page-container", [a("q-page", [a("neu-assign-student", {
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
      })], 1)], 1)], 1)], 1), a("q-dialog", {
        attrs: {
          persistent: "",
          maximized: e.maximizedToggle
        },
        model: {
          value: e.infoConfigDialog,
          callback: function(t) {
            e.infoConfigDialog = t
          },
          expression: "infoConfigDialog"
        }
      }, [a("q-card", {
        staticClass: "full-width",
        attrs: {
          flat: ""
        }
      }, [a("q-card-section", [a("div", {
        staticClass: "text-bold"
      }, [e._v("设置信息收集项目")])]), a("q-card-section", [a("neu-define-widget", {
        on: {
          save: function(t) {
            e.infoConfigDialog = !1
          },
          cancel: e.cancelInfoConfig
        },
        model: {
          value: e.record.info_config[e.infoConfigIndex],
          callback: function(t) {
            e.$set(e.record.info_config, e.infoConfigIndex, t)
          },
          expression: "record.info_config[infoConfigIndex]"
        }
      })], 1)], 1)], 1), a("q-dialog", {
        attrs: {
          persistent: "",
          fullWidth: ""
        },
        model: {
          value: e.reviewerDialog,
          callback: function(t) {
            e.reviewerDialog = t
          },
          expression: "reviewerDialog"
        }
      }, [a("q-card", {
        staticClass: "full-width",
        attrs: {
          flat: ""
        }
      }, [a("q-card-section", [a("div", {
        staticClass: "text-bold"
      }, [e._v("设置审批人员")])]), a("q-card-section", [e.record.reviewer && e.record.reviewer.length > 0 ? a("neu-assign-teacher", {
        model: {
          value: e.record.reviewer[e.reviewerIndex].teacher,
          callback: function(t) {
            e.$set(e.record.reviewer[e.reviewerIndex], "teacher", t)
          },
          expression: "record.reviewer[reviewerIndex].teacher"
        }
      }) : e._e()], 1), a("q-card-section", {
        staticClass: "q-gutter-sm row justify-end"
      }, [a("q-btn", {
        attrs: {
          unelevated: "",
          color: "primary",
          label: "完成"
        },
        on: {
          click: function(t) {
            e.reviewerDialog = !1
          }
        }
      })], 1)], 1)], 1)], 1), a("q-dialog", {
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
      }, [a("q-card", {
        staticClass: "full-width",
        attrs: {
          flat: ""
        }
      }, [a("q-card-section", {
        staticClass: "row items-center justify-between"
      }, [a("div", {
        staticClass: "text-h6"
      }, [e._v("共享对象")]), a("q-btn", {
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
      })], 1), a("q-separator"), a("q-card-section", [a("neu-view-assigned-teacher", {
        attrs: {
          value: e.record.share_target
        }
      })], 1)], 1)], 1)], 1), a("q-footer", {
        staticClass: "bg-white text-primary",
        attrs: {
          bordered: ""
        }
      }, [a("div", {
        staticClass: "row justify-between"
      }, [a("q-btn", {
        staticStyle: {
          width: "40%",
          height: "2.8rem"
        },
        attrs: {
          flat: "",
          color: "grey",
          label: "取消",
          to: "/teacher/apply/index?apply_type=" + this.applyType
        }
      }), a("q-btn", {
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
    s = [],
    r = (a("c975"), a("baa5"), a("13d5"), a("a434"), a("ddb0"), a("ded3")),
    o = a.n(r),
    n = a("f395"),
    l = a("9a3d"),
    c = a("5333"),
    d = a("8bef"),
    u = a("974f"),
    p = a("ad56"),
    m = {
      name: "NoticeNew",
      components: {
        NeuAssignStudent: n["a"],
        NeuAssignTeacher: l["a"],
        NeuViewAssignedTeacher: c["a"],
        NeuDefineWidget: d["a"],
        NeuWidget: u["a"]
      },
      data() {
        return {
          editorToolBar: JSON.parse(window.localStorage.editorToolBar),
          editorFonts: JSON.parse(window.localStorage.editorFonts),
          menuInfo: null,
          applyType: "",
          uploader: window.localStorage.server + this.$appConf.fileUploader,
          frequencyList: [],
          applySwitchList: [],
          applyMaxToggle: 0,
          record: {
            apply_type: this.$route.query.apply_type,
            title: "",
            detail: "",
            attachment: [],
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
            apply_switch: "M",
            apply_max: 0,
            task_target: [],
            task_target_excluding: [],
            share_target: [],
            info_config: [],
            reviewer: [],
            dep_no: null,
            stu_manage_flag: 0,
            composite_id: null
          },
          taskTargetDialog: !1,
          taskTargetExcludingDialog: !1,
          shareDialog: !1,
          infoConfigDialog: !1,
          infoConfigIndex: 0,
          infoModel: [],
          reviewerDialog: !1,
          reviewerIndex: 0,
          maximizedToggle: !0,
          need_location: 0,
          allow_counsellor: 0,
          dep_no: JSON.parse(window.localStorage.getItem("userinfo")).dep_no,
          depoptions: [],
          counsellorlabel: localStorage.getItem("counsellorlabel"),
          cId: this.$route.query.compositeId,
          shareDisable: !1,
          compositeShareDialog: !1,
          isHarmonyOS: !1
        }
      },
      destroyed() {
        window.removeEventListener("popstate", this.goBack, !1)
      },
      computed: {
        applyShortTitle() {
          return "A" === this.applyType ? "申请" : "C" === this.applyType ? "填写" : "S" === this.applyType ? "报名" : ""
        }
      },
      mounted() {
        if (window.localStorage.getItem("menu")) {
          this.applyType = this.$route.query.apply_type;
          let e = "";
          "A" === this.$route.query.apply_type ? e = "apply" : "S" === this.$route.query.apply_type ? e = "signup" : "C" === this.$route.query.apply_type && (e = "collect"), this.menuInfo = JSON.parse(window.localStorage.getItem("menu")).find((t => t.id === e))
        }
        this.$axiosAction("/api/public.api", {
          action: "queryResultOfFunction",
          functionName: "basic.f_query_option_list('frequency')"
        }).then((e => {
          0 === e.data.code && (this.frequencyList = e.data.list)
        })), this.$axiosAction("/api/public.api", {
          action: "queryResultOfFunction",
          functionName: "basic.f_query_option_list('apply_switch')"
        }).then((e => {
          0 === e.data.code && (this.applySwitchList = e.data.list)
        })), this.$route.params && this.$route.params.record ? (this.getDepList(2), this.record = this.$route.params.record, this.record.appointed_date = this.record.appointed_date ? this.record.appointed_date : [{
          begin_time: "",
          end_time: ""
        }], this.record.attachment = this.record.attachment ? this.record.attachment : [], this.record.loop_frequency = this.record.loop_frequency ? this.record.loop_frequency : [], this.record.task_target = this.record.task_target ? this.record.task_target : [], this.record.task_target_excluding = this.record.task_target_excluding ? this.record.task_target_excluding : [], this.record.share_target = this.record.share_target ? this.record.share_target : [], this.record.info_config = this.record.info_config ? this.record.info_config : [], this.record.reviewer = this.record.reviewer ? this.record.reviewer : [], this.applyMaxToggle = this.record.apply_max > 0 ? 1 : 0, this.need_location = this.record.need_location, this.allow_counsellor = this.record.allow_counsellor, this.record.composite_id = this.record.composite_id ? this.record.composite_id : null, this.shareDisable = null !== this.record.composite_id) : this.getDepList(1), window.history && window.history.pushState && (history.pushState(null, null, document.URL), window.addEventListener("popstate", this.goBack, !1)), this.$route.params && this.$route.params.taskTarget && (this.record.task_target = this.$route.params.taskTarget ? this.$route.params.taskTarget : []), null !== this.cId && void 0 !== this.cId && (void 0 !== this.$route.query.compositeTitle && (this.record.title = this.$route.query.compositeTitle + "-" + this.menuInfo.title), "copy" !== this.$route.query.befrom && (this.record.share_target = this.$route.params.share_target ? this.$route.params.share_target : []), this.shareDisable = !0), this.detectOperatingSystem()
      },
      methods: {
        detectOperatingSystem() {
          const e = navigator.userAgent.toLowerCase();
          e.indexOf("harmonyos") >= 0 || e.indexOf("huawei") >= 0 || e.indexOf("emui") >= 0 ? this.isHarmonyOS = !0 : (e.indexOf("android") >= 0 || e.indexOf("linux") >= 0) && (this.isHarmonyOS = !1)
        },
        matchingUploadedFiles(e, t) {
          return e.reduce(((e, a) => t && t.length > 0 ? 0 === t.reduce(((e, t) => {
            if (t.xhr.response) {
              const i = JSON.parse(t.xhr.response);
              return i.servername === a.servername ? e + 1 : e
            }
            return e
          }), 0) ? e.concat(a) : e : e.concat(a)), [])
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
              const a = e.name.substring(t + 1).toLowerCase();
              if (-1 === this.$appConf.fileExts.indexOf(a)) return this.$showErrorNotify("不支持该类型文件上传"), !1
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
          Object(p["c"])(t.link, t.srcname)
        },
        downloadFile(e, t) {
          Object(p["c"])(e, t)
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
        addInfoConfig(e) {
          this.record.info_config.splice(e, 0, null), this.infoModel.splice(e, 0, null), this.infoConfigDialog = !0, this.infoConfigIndex = e
        },
        cancelInfoConfig() {
          this.record.info_config[this.infoConfigIndex] || (this.record.info_config.splice(this.infoConfigIndex, 1), this.infoModel.splice(this.infoConfigIndex, 1)), this.infoConfigDialog = !1
        },
        editInfoConfig(e) {
          this.infoConfigDialog = !0, this.infoConfigIndex = e
        },
        deleteInfoConfig(e) {
          this.record.info_config.splice(e, 1), this.infoModel.splice(e, 1)
        },
        moveInfoConfig(e, t) {
          this.record.info_config.splice(e + t, 0, this.record.info_config.splice(e, 1)[0]), this.infoModel.splice(e + t, 0, this.infoModel.splice(e, 1)[0])
        },
        addReviewer(e) {
          this.record.reviewer.splice(e, 0, {
            review_level: e + 1,
            teacher: []
          }), this.reviewerIndex = e, this.reviewerDialog = !0
        },
        editReviewer(e) {
          this.reviewerIndex = e, this.reviewerDialog = !0
        },
        deleteReviewer(e) {
          this.reviewerIndex = 0, this.record.reviewer = this.record.reviewer.reduce(((t, a, i) => e === i ? t : t.concat({
            review_level: i + 1,
            teacher: a.teacher
          })), [])
        },
        moveReviewer(e, t) {
          this.reviewerIndex = 0, this.record.reviewer.splice(e + t, 0, this.record.reviewer.splice(e, 1)[0]), this.record.reviewer = this.record.reviewer.reduce(((e, t, a) => e.concat({
            review_level: a + 1,
            teacher: t.teacher
          })), [])
        },
        saveRecord() {
          if (!this.record.detail) return void this.$showErrorNotify("请填写通知正文");
          if (!this.record.task_target || 0 === this.record.task_target.length) return void this.$showErrorNotify(`请设置${this.menuInfo.title}对象`);
          if ("C" === this.applyType && (!this.record.info_config || 0 === this.record.info_config.length)) return void this.$showErrorNotify("请设置信息收集项目");
          if ("" !== this.record.dep_no && void 0 !== this.record.dep_no || (this.record.dep_no = null), "A" === this.record.frequency) {
            const e = this.record.appointed_date.reduce(((e, t) => e.concat(t.begin_time + "-" + t.end_time)), []),
              t = [...new Set(e)];
            if (e.length > t.length) return this.$showErrorNotify("指定日期开始截止时间段不能重复！");
            const a = this.record.appointed_date.reduce(((e, t) => e.concat(t.begin_time)), []),
              i = [...new Set(a)];
            if (a.length > i.length) return this.$showErrorNotify("指定日期开始时间不能重复！")
          }
          this.$q.loading.show();
          const e = o()({}, this.record);
          e.attachment = e.attachment && e.attachment.length > 0 ? JSON.stringify(e.attachment) : null, e.task_target = JSON.stringify(e.task_target), e.task_target_excluding = e.task_target_excluding && e.task_target_excluding.length > 0 ? JSON.stringify(e.task_target_excluding) : null, e.share_target = e.share_target && e.share_target.length > 0 ? JSON.stringify(e.share_target) : null, e.info_config = e.info_config && e.info_config.length > 0 ? JSON.stringify(e.info_config) : null, e.reviewer = e.reviewer && e.reviewer.length > 0 ? JSON.stringify(e.reviewer) : null, "S" === e.frequency ? (e.loop_frequency = null, e.loop_begin_date = null, e.loop_end_date = null, e.loop_begin_time = null, e.loop_end_time = null, e.appointed_date = null) : "L" === e.frequency ? (e.single_begin_time = null, e.single_end_time = null, e.appointed_date = null, e.loop_frequency = JSON.stringify(e.loop_frequency)) : "A" === e.frequency && (e.single_begin_time = null, e.single_end_time = null, e.loop_frequency = null, e.loop_begin_date = null, e.loop_end_date = null, e.loop_begin_time = null, e.loop_end_time = null, e.appointed_date = JSON.stringify(e.appointed_date)), 0 === this.applyMaxToggle && (e.apply_max = 0), e.need_location = this.need_location, e.allow_counsellor = this.allow_counsellor, null !== this.cId && void 0 !== this.cId ? e.composite_id = this.$route.query.compositeId : e.composite_id = this.record.composite_id, this.$axiosAction("/api/teacher/apply/apply.api", o()({
            action: "insert"
          }, e)).then((e => {
            0 === e.data.code && this.goBack(), this.$q.loading.hide()
          })).catch((e => {
            this.$q.loading.hide()
          }))
        },
        goBack() {
          null !== this.cId && void 0 !== this.cId ? this.$router.push("/teacher/composite/detail?id=" + this.$route.query.compositeId) : this.$router.push(`/teacher/apply/index?apply_type=${this.applyType}`)
        },
        submitForm() {
          this.$refs.form.submit()
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
    _ = m,
    f = a("2877"),
    g = a("4d5a"),
    h = a("e359"),
    q = a("65c6"),
    v = a("9c40"),
    b = a("6ac5"),
    w = a("09e3"),
    y = a("9989"),
    x = a("0378"),
    k = a("f09f"),
    C = a("1c1c"),
    D = a("66e5"),
    S = a("4074"),
    $ = a("0170"),
    I = a("eb85"),
    N = a("27f9"),
    T = a("ddd8"),
    M = a("d66b"),
    z = a("ee89"),
    Y = a("cc04"),
    F = a("05c0"),
    O = a("8572"),
    Q = a("0016"),
    H = a("7cbe"),
    L = a("52ee"),
    j = a("ca78"),
    E = a("8f8e"),
    A = a("9564"),
    J = a("c1d0"),
    R = a("24e8"),
    U = a("a370"),
    B = a("7ff0"),
    P = a("7f67"),
    W = a("eebe"),
    V = a.n(W),
    G = Object(f["a"])(_, i, s, !1, null, null, null);
  t["default"] = G.exports;
  V()(G, "components", {
    QLayout: g["a"],
    QHeader: h["a"],
    QToolbar: q["a"],
    QBtn: v["a"],
    QToolbarTitle: b["a"],
    QPageContainer: w["a"],
    QPage: y["a"],
    QForm: x["a"],
    QCard: k["a"],
    QList: C["a"],
    QItem: D["a"],
    QItemSection: S["a"],
    QItemLabel: $["a"],
    QSeparator: I["a"],
    QInput: N["a"],
    QSelect: T["a"],
    QEditor: M["a"],
    QUploader: z["a"],
    QUploaderAddTrigger: Y["a"],
    QTooltip: F["a"],
    QField: O["a"],
    QIcon: Q["a"],
    QPopupProxy: H["a"],
    QDate: L["a"],
    QTime: j["a"],
    QCheckbox: E["a"],
    QToggle: A["a"],
    QSlider: J["a"],
    QDialog: R["a"],
    QCardSection: U["a"],
    QFooter: B["a"]
  }), V()(G, "directives", {
    ClosePopup: P["a"]
  })
}
