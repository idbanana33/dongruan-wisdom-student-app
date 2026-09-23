/**
 * Webpack module logic recovery
 * Source: assets/www/js/chunk-common.js -> module "974f"
 * Route: (shared/core)
 * Component guess: NeuWidget
 * Fidelity: exact module body, beautified only (webpack wrapper retained)
 * Note: variable names inside the original production module are preserved as evidence.
 */
"974f": function(e, t, i) {
  "use strict";
  var a = function() {
      var e = this,
        t = this,
        i = t.$createElement,
        a = t._self._c || i;
      return a("div", {
        staticClass: "full-width row items-center",
        class: {
          "bg-orange": t.riskTip
        }
      }, [t.conf.label ? a("div", {
        class: [{
          "neu-css-before-red-asterisk": t.conf.required,
          "text-right": t.lTextRight,
          "neu-css-after-colon": t.lColon
        }, t.lClass]
      }, [t._v("\n    " + t._s(t.lNo ? t.lNo + ". " : "") + t._s(t.conf.label) + "\n  ")]) : t._e(), t.conf.hint ? a("span", {
        staticClass: "q-ml-xs",
        staticStyle: {
          color: "grey",
          "font-size": "13px"
        }
      }, [t._v(t._s(t.conf.hint))]) : t._e(), a("div", {
        class: t.cClass
      }, ["T" != t.conf.type || t.readonly ? t._e() : a("q-input", {
        attrs: {
          outlined: "",
          dense: "",
          type: t.conf.isTextarea ? "textarea" : "text",
          placeholder: t.readonly ? "" : t.textPlaceholder,
          "hide-bottom-space": "",
          "lazy-rules": t.conf.required,
          rules: [function(e) {
            return !!e || !t.conf.required || t.readonly || "请填写该项"
          }, function(i) {
            return t.conf.maxLength && (!i || i.length <= t.conf.maxLength) || !t.conf.maxLength || "最多填写" + e.conf.maxLength + "个字"
          }, function(i) {
            return t.conf.minLength && (!i || i.length >= t.conf.minLength) || !t.conf.minLength || "最少填写" + e.conf.minLength + "个字"
          }],
          readonly: t.readonly
        },
        model: {
          value: t.modelValue,
          callback: function(e) {
            t.modelValue = e
          },
          expression: "modelValue"
        }
      }), "T" == t.conf.type && t.readonly ? a("span", [t._v(t._s(t.modelValue))]) : t._e(), "N" == t.conf.type ? a("q-input", {
        attrs: {
          outlined: "",
          dense: "",
          type: "number",
          step: t.numberStep,
          placeholder: t.readonly ? "" : t.numberPlaceholder,
          "hide-bottom-space": "",
          "lazy-rules": t.conf.required,
          rules: [function(e) {
            return t.checkNumber(e)
          }],
          readonly: t.readonly
        },
        model: {
          value: t.modelValue,
          callback: function(e) {
            t.modelValue = t._n(e)
          },
          expression: "modelValue"
        }
      }) : t._e(), "R" == t.conf.type && "S" == t.conf.selectPattern ? a("q-select", {
        attrs: {
          outlined: "",
          dense: "",
          "hide-bottom-space": "",
          "lazy-rules": "",
          rules: [function(e) {
            return !!e || 0 == e || !t.conf.required || t.readonly || "请选择该项"
          }],
          options: t.conf.options,
          "emit-value": "",
          "map-options": "",
          readonly: t.readonly,
          clearable: !t.conf.required
        },
        model: {
          value: t.modelValue,
          callback: function(e) {
            t.modelValue = e
          },
          expression: "modelValue"
        }
      }) : t._e(), "R" != t.conf.type || "S" == t.conf.selectPattern || t.conf.isOther ? t._e() : a("q-field", {
        attrs: {
          borderless: "",
          dense: "",
          "hide-bottom-space": "",
          "lazy-rules": "",
          rules: [function(e) {
            return !!e || 0 == e || !t.conf.required || t.readonly || "请填写该项"
          }],
          value: t.modelValue,
          readonly: t.readonly
        },
        scopedSlots: t._u([{
          key: "control",
          fn: function() {
            return t._l(t.conf.options, (function(e) {
              return a("q-radio", {
                key: e.value,
                staticClass: "q-mr-sm",
                attrs: {
                  dense: "",
                  val: e.value,
                  label: e.label,
                  disable: t.readonly
                },
                model: {
                  value: t.modelValue,
                  callback: function(e) {
                    t.modelValue = e
                  },
                  expression: "modelValue"
                }
              })
            }))
          },
          proxy: !0
        }], null, !1, 3508303379)
      }), "R" == t.conf.type && "S" != t.conf.selectPattern && t.conf.isOther ? a("q-field", {
        attrs: {
          borderless: "",
          dense: "",
          "hide-bottom-space": "",
          "lazy-rules": "",
          rules: [function(e) {
            return (!!e || 0 == e) && ("其他" != e || !!t.modelValue.other) || !t.conf.required || t.readonly || "请填写该项"
          }],
          value: t.modelValue.value,
          readonly: t.readonly
        },
        scopedSlots: t._u([{
          key: "control",
          fn: function() {
            return [t._l(t.conf.options, (function(e) {
              return a("q-radio", {
                key: e.value,
                staticClass: "q-mr-sm",
                attrs: {
                  dense: "",
                  val: e.value,
                  label: e.label,
                  disable: t.readonly
                },
                on: {
                  input: t.toggleOther
                },
                model: {
                  value: t.modelValue.value,
                  callback: function(e) {
                    t.$set(t.modelValue, "value", e)
                  },
                  expression: "modelValue.value"
                }
              })
            })), a("q-radio", {
              staticClass: "q-mr-sm",
              attrs: {
                dense: "",
                val: "其他",
                label: "其他",
                disable: t.readonly
              },
              on: {
                input: t.toggleOther
              },
              model: {
                value: t.modelValue.value,
                callback: function(e) {
                  t.$set(t.modelValue, "value", e)
                },
                expression: "modelValue.value"
              }
            }), a("q-input", {
              attrs: {
                outlined: "",
                dense: "",
                placeholder: t.readonly ? "" : "请填写其他内容",
                disable: "其他" != t.modelValue.value,
                readonly: t.readonly,
                "input-style": "text-indent:10px;"
              },
              model: {
                value: t.modelValue.other,
                callback: function(e) {
                  t.$set(t.modelValue, "other", e)
                },
                expression: "modelValue.other"
              }
            })]
          },
          proxy: !0
        }], null, !1, 2131013615)
      }) : t._e(), "C" != t.conf.type || t.conf.isOther ? t._e() : a("q-field", {
        attrs: {
          borderless: "",
          dense: "",
          "hide-bottom-space": "",
          "lazy-rules": "",
          rules: [function(e) {
            return (!!e || 0 == e) && e.length > 0 || !t.conf.required || t.readonly || "请填写该项"
          }],
          value: t.modelValue,
          readonly: t.readonly
        },
        scopedSlots: t._u([{
          key: "control",
          fn: function() {
            return t._l(t.conf.options, (function(e) {
              return a("q-checkbox", {
                key: e.value,
                staticClass: "q-mr-sm",
                attrs: {
                  dense: "",
                  val: e.value,
                  label: e.label,
                  disable: t.readonly
                },
                model: {
                  value: t.modelValue,
                  callback: function(e) {
                    t.modelValue = e
                  },
                  expression: "modelValue"
                }
              })
            }))
          },
          proxy: !0
        }], null, !1, 740339825)
      }), "C" == t.conf.type && t.conf.isOther ? a("q-field", {
        attrs: {
          borderless: "",
          dense: "",
          "hide-bottom-space": "",
          "lazy-rules": "",
          rules: [function(e) {
            return (!!e || 0 == e) && e.length > 0 && (e.indexOf("其他") < 0 || !!t.modelValue.other) || !t.conf.required || t.readonly || "请填写该项"
          }],
          value: t.modelValue.value,
          readonly: t.readonly
        },
        scopedSlots: t._u([{
          key: "control",
          fn: function() {
            return [t._l(t.conf.options, (function(e) {
              return a("q-checkbox", {
                key: e.value,
                staticClass: "q-mr-sm",
                attrs: {
                  dense: "",
                  val: e.value,
                  label: e.label,
                  disable: t.readonly
                },
                on: {
                  input: t.toggleOther
                },
                model: {
                  value: t.modelValue.value,
                  callback: function(e) {
                    t.$set(t.modelValue, "value", e)
                  },
                  expression: "modelValue.value"
                }
              })
            })), a("q-checkbox", {
              staticClass: "q-mr-sm",
              attrs: {
                dense: "",
                val: "其他",
                label: "其他",
                disable: t.readonly
              },
              on: {
                input: t.toggleOther
              },
              model: {
                value: t.modelValue.value,
                callback: function(e) {
                  t.$set(t.modelValue, "value", e)
                },
                expression: "modelValue.value"
              }
            }), a("q-input", {
              attrs: {
                outlined: "",
                dense: "",
                placeholder: t.readonly ? "" : "请填写其他内容",
                disable: !t.modelValue.value || t.modelValue.value.indexOf("其他") < 0,
                readonly: t.readonly,
                "input-style": "text-indent:10px;"
              },
              model: {
                value: t.modelValue.other,
                callback: function(e) {
                  t.$set(t.modelValue, "other", e)
                },
                expression: "modelValue.other"
              }
            })]
          },
          proxy: !0
        }], null, !1, 4047062791)
      }) : t._e(), "D" == t.conf.type && "T" != t.conf.dtPattern && "DT" != t.conf.dtPattern ? a("q-field", {
        attrs: {
          outlined: "",
          dense: "",
          "hide-bottom-space": "",
          "lazy-rules": "",
          rules: [function(e) {
            return !!e || !t.conf.required || t.readonly || "请填写该项"
          }],
          value: t.modelValue,
          readonly: t.readonly
        },
        scopedSlots: t._u([{
          key: "control",
          fn: function() {
            return [t._v(t._s(t.modelValue))]
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
                "transition-hide": "scale",
                target: !t.readonly
              }
            }, [a("q-date", {
              attrs: {
                flat: "",
                minimal: "",
                mask: "YYYY-MM-DD"
              },
              model: {
                value: t.modelValue,
                callback: function(e) {
                  t.modelValue = e
                },
                expression: "modelValue"
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
            })], 1)])], 1)], 1), !t.conf.required && t.modelValue ? a("q-icon", {
              staticClass: "cursor-pointer",
              attrs: {
                name: "cancel",
                color: t.clearIconColor
              },
              on: {
                mouseover: function(e) {
                  t.clearIconColor = null
                },
                mouseleave: function(e) {
                  t.clearIconColor = "grey"
                },
                click: function(e) {
                  e.stopPropagation(), t.modelValue = null
                }
              }
            }) : t._e()]
          },
          proxy: !0
        }], null, !1, 1103268238)
      }) : t._e(), "D" == t.conf.type && "T" == t.conf.dtPattern ? a("q-field", {
        attrs: {
          outlined: "",
          dense: "",
          "hide-bottom-space": "",
          "lazy-rules": "",
          rules: [function(e) {
            return !!e || !t.conf.required || t.readonly || "请填写该项"
          }],
          value: t.modelValue,
          readonly: t.readonly
        },
        scopedSlots: t._u([{
          key: "control",
          fn: function() {
            return [t._v(t._s(t.modelValue))]
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
                "transition-hide": "scale",
                target: !t.readonly
              }
            }, [a("q-time", {
              attrs: {
                flat: "",
                mask: "HH:mm",
                format24h: "",
                landscape: ""
              },
              model: {
                value: t.modelValue,
                callback: function(e) {
                  t.modelValue = e
                },
                expression: "modelValue"
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
            })], 1)])], 1)], 1), !t.conf.required && t.modelValue ? a("q-icon", {
              staticClass: "cursor-pointer",
              attrs: {
                name: "cancel",
                color: t.clearIconColor
              },
              on: {
                mouseover: function(e) {
                  t.clearIconColor = null
                },
                mouseleave: function(e) {
                  t.clearIconColor = "grey"
                },
                click: function(e) {
                  e.stopPropagation(), t.modelValue = null
                }
              }
            }) : t._e()]
          },
          proxy: !0
        }], null, !1, 4024011308)
      }) : t._e(), "D" == t.conf.type && "DT" == t.conf.dtPattern ? a("q-field", {
        attrs: {
          outlined: "",
          dense: "",
          "hide-bottom-space": "",
          "lazy-rules": "",
          rules: [function(e) {
            return !!e || !t.conf.required || t.readonly || "请填写该项"
          }],
          value: t.modelValue,
          readonly: t.readonly
        },
        scopedSlots: t._u([{
          key: "control",
          fn: function() {
            return [t._v(t._s(t.modelValue))]
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
                "transition-hide": "scale",
                target: !t.readonly
              }
            }, [a("q-date", {
              attrs: {
                flat: "",
                minimal: "",
                mask: "YYYY-MM-DD HH:mm"
              },
              model: {
                value: t.modelValue,
                callback: function(e) {
                  t.modelValue = e
                },
                expression: "modelValue"
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
            })], 1)])], 1)], 1), a("q-icon", {
              staticClass: "cursor-pointer",
              attrs: {
                name: "access_time"
              }
            }, [a("q-popup-proxy", {
              attrs: {
                "transition-show": "scale",
                "transition-hide": "scale"
              }
            }, [a("q-time", {
              attrs: {
                flat: "",
                mask: "YYYY-MM-DD HH:mm",
                format24h: "",
                landscape: ""
              },
              model: {
                value: t.modelValue,
                callback: function(e) {
                  t.modelValue = e
                },
                expression: "modelValue"
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
            })], 1)])], 1)], 1), !t.conf.required && t.modelValue ? a("q-icon", {
              staticClass: "cursor-pointer",
              attrs: {
                name: "cancel",
                color: t.clearIconColor
              },
              on: {
                mouseover: function(e) {
                  t.clearIconColor = null
                },
                mouseleave: function(e) {
                  t.clearIconColor = "grey"
                },
                click: function(e) {
                  e.stopPropagation(), t.modelValue = null
                }
              }
            }) : t._e()]
          },
          proxy: !0
        }], null, !1, 1355562672)
      }) : t._e(), "S" == t.conf.type && t.modelValue ? a("q-img", {
        attrs: {
          src: t.modelValue,
          width: "100px"
        },
        on: {
          click: function(e) {
            t.dialog = !t.readonly
          }
        }
      }) : t._e(), "S" != t.conf.type || t.modelValue ? t._e() : a("q-input", {
        attrs: {
          borderless: "",
          dense: "",
          type: "text",
          placeholder: "未签名",
          "hide-bottom-space": "",
          "lazy-rules": t.conf.required,
          rules: [function(e) {
            return !!e || !t.conf.required || t.readonly || "请签名"
          }],
          readonly: !0
        },
        on: {
          click: function(e) {
            t.dialog = !t.readonly
          }
        },
        model: {
          value: t.modelValue,
          callback: function(e) {
            t.modelValue = e
          },
          expression: "modelValue"
        }
      }), "S" == t.conf.type ? a("q-dialog", {
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
        staticClass: "full-width",
        attrs: {
          flat: ""
        }
      }, [a("q-card-section", {
        staticClass: "row items-center justify-between"
      }, [a("div", {
        staticClass: "text-bold"
      }, [t._v("请签名")]), a("q-btn", {
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
      })], 1), a("q-card-section", {
        staticClass: "bg-grey-3 q-pa-xs"
      }, [a("vue-esign", {
        ref: "esign",
        attrs: {
          height: 100,
          isCrop: !0,
          lineWidth: 3,
          lineColor: "#000000"
        }
      })], 1), a("q-card-section", {
        staticClass: "q-gutter-sm row justify-end"
      }, [a("q-btn", {
        attrs: {
          unelevated: "",
          label: "清除"
        },
        on: {
          click: t.resetEsign
        }
      }), a("q-btn", {
        attrs: {
          unelevated: "",
          color: "primary",
          label: "完成"
        },
        on: {
          click: t.generateEsign
        }
      })], 1)], 1)], 1) : t._e(), "A" != t.conf.type || t.readonly ? t._e() : a("q-input", {
        attrs: {
          outlined: "",
          dense: "",
          type: "text",
          placeholder: "省、市、区、街道",
          "hide-bottom-space": "",
          "lazy-rules": t.conf.required,
          rules: [function(e) {
            return !!e || !t.conf.required || t.readonly || "请选择"
          }],
          readonly: !0
        },
        on: {
          click: t.openPcasDialog
        },
        model: {
          value: t.modelValue.value,
          callback: function(e) {
            t.$set(t.modelValue, "value", e)
          },
          expression: "modelValue.value"
        }
      }), "A" == t.conf.type && t.readonly ? a("span", [t._v(t._s(t.modelValue.value))]) : t._e(), "A" != t.conf.type || t.readonly ? t._e() : a("q-dialog", {
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
        staticClass: "full-width",
        attrs: {
          flat: ""
        }
      }, [a("q-card-section", {
        staticClass: "row items-center justify-between"
      }, [a("div", {
        staticClass: "text-bold"
      }, [t._v("\n            请选择地区\n            "), a("span", {
        staticClass: "text-primary cursor-pointer q-ml-sm",
        on: {
          click: t.autoLocation
        }
      }, [t._v("自动定位")]), a("neu-geo-location", {
        attrs: {
          needAddr: !0,
          nonauto: !0,
          location: t.research
        },
        on: {
          completed: t.locationCompleted,
          error: t.locationError
        }
      })], 1), a("q-btn", {
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
      })], 1), a("q-separator"), a("q-card-section", [a("q-list", t._l(t.pcas.code, (function(e, i) {
        return a("q-item", {
          key: e,
          attrs: {
            dense: ""
          }
        }, [a("q-item-section", {
          on: {
            click: function(a) {
              return t.extendPcasByLevel(e, i + 1)
            }
          }
        }, [a("q-item-label", [t._v(t._s(t.pcas.name[i]))])], 1), a("q-item-section", {
          attrs: {
            side: ""
          },
          on: {
            click: function(a) {
              return t.extendPcasByLevel(e, i + 1)
            }
          }
        }, [a("q-item-label", [a("q-icon", {
          attrs: {
            name: "keyboard_arrow_right",
            size: "xs"
          }
        })], 1)], 1)], 1)
      })), 1), a("q-item-label", {
        directives: [{
          name: "show",
          rawName: "v-show",
          value: 1 == t.currLevel,
          expression: "currLevel == 1"
        }],
        attrs: {
          caption: ""
        }
      }, [t._v("请选择省（自治区、直辖市）")]), a("q-item-label", {
        directives: [{
          name: "show",
          rawName: "v-show",
          value: 2 == t.currLevel,
          expression: "currLevel == 2"
        }],
        attrs: {
          caption: ""
        }
      }, [t._v("请选择市（州、盟、县、区）")]), a("q-item-label", {
        directives: [{
          name: "show",
          rawName: "v-show",
          value: 3 == t.currLevel,
          expression: "currLevel == 3"
        }],
        attrs: {
          caption: ""
        }
      }, [t._v("请选择区（市、县、旗、街道、镇、乡）")]), a("q-item-label", {
        directives: [{
          name: "show",
          rawName: "v-show",
          value: 4 == t.currLevel,
          expression: "currLevel == 4"
        }],
        attrs: {
          caption: ""
        }
      }, [t._v("请选择街道（镇、乡）")])], 1), a("q-separator"), a("q-card-section", [a("q-list", t._l(t.currList, (function(e) {
        return a("q-item", {
          key: e.code,
          attrs: {
            dense: ""
          }
        }, [a("q-item-section", {
          on: {
            click: function(i) {
              return t.extendPcas(e.code, e.name)
            }
          }
        }, [t._v("\n                " + t._s(e.name) + "\n              ")])], 1)
      })), 1)], 1)], 1)], 1), "F" == t.conf.type ? a("q-field", {
        attrs: {
          borderless: "",
          dense: "",
          "hide-bottom-space": "",
          "lazy-rules": "",
          rules: [function(e) {
            return !!e && (e || []).length > 0 || !t.conf.required || t.readonly || "请选择"
          }],
          value: t.modelValue,
          readonly: t.readonly
        },
        scopedSlots: t._u([{
          key: "control",
          fn: function() {
            return [0 == t.isHarmonyOS ? a("q-uploader", {
              staticClass: "full-width",
              attrs: {
                flat: "",
                color: "grey",
                url: t.uploader,
                "auto-upload": "",
                filter: t.checkFile,
                readonly: t.readonly,
                accept: ".doc, .docx, .xls, .xlsx, .ppt, .pptx, .pdf, .zip, .rar, .7z, .jpg, .jpeg, .png, audio/*, image/*"
              },
              on: {
                start: t.startUpload,
                finish: t.finishUpload,
                uploaded: t.afterUploaded,
                rejected: t.onRejected,
                removed: t.afterRemoved
              },
              scopedSlots: t._u([{
                key: "header",
                fn: function(e) {
                  return [a("div", {
                    staticClass: "row no-wrap items-center q-pa-sm q-gutter-xs"
                  }, [a("div", {
                    staticClass: "col"
                  }, [t._v("最多" + t._s(t.conf.fileCount) + "个文件(" + t._s(t.conf.fileSize) + "MB以内)")]), !t.readonly && e.canAddFiles && (t.modelValue || []).length < t.conf.fileCount ? a("q-btn", {
                    attrs: {
                      type: "a",
                      icon: "add_box",
                      round: "",
                      dense: "",
                      flat: ""
                    }
                  }, [a("q-uploader-add-trigger"), a("q-tooltip", [t._v("选择文件并上传")])], 1) : t._e()], 1)]
                }
              }, {
                key: "list",
                fn: function(e) {
                  return [a("q-list", {
                    attrs: {
                      separator: ""
                    }
                  }, [t._l(e.files, (function(i) {
                    return a("q-item", {
                      key: i.name
                    }, [a("q-item-section", [a("q-item-label", {
                      staticClass: "full-width ellipsis cursor-pointer",
                      on: {
                        click: function(e) {
                          return t.downloadUploaderFile(i)
                        }
                      }
                    }, [t._v("\n                    " + t._s(i.name) + "\n                  ")])], 1), a("q-item-section", {
                      attrs: {
                        side: ""
                      }
                    }, [t.readonly ? t._e() : a("q-btn", {
                      attrs: {
                        flat: "",
                        dense: "",
                        color: "negative",
                        icon: "delete",
                        size: "sm"
                      },
                      on: {
                        click: function(t) {
                          return e.removeFile(i)
                        }
                      }
                    }, [a("q-tooltip", [t._v("删除")])], 1)], 1)], 1)
                  })), t._l(t.matchingUploadedFiles(t.modelValue, e.files), (function(e) {
                    return a("q-item", {
                      key: e.servername
                    }, [a("q-item-section", [a("q-item-label", {
                      staticClass: "full-width ellipsis cursor-pointer",
                      on: {
                        click: function(i) {
                          return t.downloadFile(e.link, e.servername)
                        }
                      }
                    }, [t._v("\n                    " + t._s(e.srcname) + "\n                  ")])], 1), a("q-item-section", {
                      attrs: {
                        side: ""
                      }
                    }, [t.readonly ? t._e() : a("q-btn", {
                      attrs: {
                        flat: "",
                        dense: "",
                        color: "negative",
                        icon: "delete",
                        size: "sm"
                      },
                      on: {
                        click: function(i) {
                          return t.removeFile(e.servername)
                        }
                      }
                    }, [a("q-tooltip", [t._v("删除")])], 1)], 1)], 1)
                  }))], 2)]
                }
              }], null, !1, 865478785)
            }) : t._e(), 1 == t.isHarmonyOS ? a("q-uploader", {
              staticClass: "full-width",
              attrs: {
                flat: "",
                color: "grey",
                url: t.uploader,
                "auto-upload": "",
                filter: t.checkFile,
                readonly: t.readonly
              },
              on: {
                start: t.startUpload,
                finish: t.finishUpload,
                uploaded: t.afterUploaded,
                removed: t.afterRemoved
              },
              scopedSlots: t._u([{
                key: "header",
                fn: function(e) {
                  return [a("div", {
                    staticClass: "row no-wrap items-center q-pa-sm q-gutter-xs"
                  }, [a("div", {
                    staticClass: "col"
                  }, [t._v("最多" + t._s(t.conf.fileCount) + "个文件(" + t._s(t.conf.fileSize) + "MB以内)")]), !t.readonly && e.canAddFiles && (t.modelValue || []).length < t.conf.fileCount ? a("q-btn", {
                    attrs: {
                      type: "a",
                      icon: "add_box",
                      round: "",
                      dense: "",
                      flat: ""
                    }
                  }, [a("q-uploader-add-trigger"), a("q-tooltip", [t._v("选择文件并上传")])], 1) : t._e()], 1)]
                }
              }, {
                key: "list",
                fn: function(e) {
                  return [a("q-list", {
                    attrs: {
                      separator: ""
                    }
                  }, [t._l(e.files, (function(i) {
                    return a("q-item", {
                      key: i.name
                    }, [a("q-item-section", [a("q-item-label", {
                      staticClass: "full-width ellipsis cursor-pointer",
                      on: {
                        click: function(e) {
                          return t.downloadUploaderFile(i)
                        }
                      }
                    }, [t._v("\n                    " + t._s(i.name) + "\n                  ")])], 1), a("q-item-section", {
                      attrs: {
                        side: ""
                      }
                    }, [t.readonly ? t._e() : a("q-btn", {
                      attrs: {
                        flat: "",
                        dense: "",
                        color: "negative",
                        icon: "delete",
                        size: "sm"
                      },
                      on: {
                        click: function(t) {
                          return e.removeFile(i)
                        }
                      }
                    }, [a("q-tooltip", [t._v("删除")])], 1)], 1)], 1)
                  })), t._l(t.matchingUploadedFiles(t.modelValue, e.files), (function(e) {
                    return a("q-item", {
                      key: e.servername
                    }, [a("q-item-section", [a("q-item-label", {
                      staticClass: "full-width ellipsis cursor-pointer",
                      on: {
                        click: function(i) {
                          return t.downloadFile(e.link, e.servername)
                        }
                      }
                    }, [t._v("\n                    " + t._s(e.srcname) + "\n                  ")])], 1), a("q-item-section", {
                      attrs: {
                        side: ""
                      }
                    }, [t.readonly ? t._e() : a("q-btn", {
                      attrs: {
                        flat: "",
                        dense: "",
                        color: "negative",
                        icon: "delete",
                        size: "sm"
                      },
                      on: {
                        click: function(i) {
                          return t.removeFile(e.servername)
                        }
                      }
                    }, [a("q-tooltip", [t._v("删除")])], 1)], 1)], 1)
                  }))], 2)]
                }
              }], null, !1, 865478785)
            }) : t._e()]
          },
          proxy: !0
        }], null, !1, 2730052466)
      }) : t._e(), t.riskConfInfo ? a("div", {
        staticClass: "text-orange",
        domProps: {
          innerHTML: t._s(t.riskConfInfo)
        }
      }) : t._e()], 1), "F" == t.conf.type ? a("neu-full-screen-image", {
        attrs: {
          url: t.bigPicUrl,
          name: t.bigPicName
        },
        model: {
          value: t.showBigPic,
          callback: function(e) {
            t.showBigPic = e
          },
          expression: "showBigPic"
        }
      }) : t._e()], 1)
    },
    s = [],
    l = (i("c975"), i("baa5"), i("13d5"), i("a434"), i("5319"), i("ddb0"), i("afcb")),
    o = i.n(l),
    n = i("ad56"),
    r = i("58a84"),
    c = i("46f3"),
    u = i("33be"),
    d = {
      name: "NeuWidget",
      components: {
        vueEsign: o.a,
        NeuGeoLocation: c["a"],
        NeuFullScreenImage: u["a"]
      },
      props: {
        value: null,
        config: Object,
        labelClass: String,
        controlClass: String,
        labelColon: Boolean,
        labelTextRight: Boolean,
        viewMode: Boolean,
        no: Number,
        showRiskInfo: Boolean
      },
      data() {
        return {
          modelValue: null,
          conf: {},
          lClass: "col-12",
          cClass: "col-12",
          lColon: !1,
          lTextRight: !1,
          readonly: !1,
          lNo: null,
          clearIconColor: "grey",
          dialog: !1,
          provinces: [],
          areas: [],
          currList: [],
          currLevel: 1,
          pcas: {},
          uploader: window.localStorage.server + this.$appConf.fileUploader,
          research: null,
          showBigPic: !1,
          bigPicUrl: "",
          bigPicName: "",
          showRiskConf: !1,
          isHarmonyOS: !1
        }
      },
      mounted() {
        this.labelClass && (this.lClass = this.labelClass), this.controlClass && (this.cClass = this.controlClass), this.readonly = this.viewMode, this.modelValue = this.value, this.lColon = this.labelColon, this.lTextRight = this.labelTextRight, this.lNo = this.no, this.showRiskConf = this.showRiskInfo, this.initConf(this.config), this.detectOperatingSystem()
      },
      computed: {
        riskTip() {
          return !!this.readonly && Object(r["a"])(this.conf, this.modelValue)
        },
        riskConfInfo() {
          return this.showRiskConf && this.conf.riskMode ? ("R" === this.conf.type || "C" === this.conf.type) && this.conf.riskConfig && this.conf.riskConfig.length > 0 ? "风险提示选项：" + this.conf.riskConfig.reduce(((e, t) => `${e}<br>${t}`), "") : "A" !== this.conf.type && "T" !== this.conf.type || !this.conf.riskConfig ? "N" === this.conf.type && this.conf.riskConfig ? `风险提示区间：[${this.conf.riskConfig.min}, ${this.conf.riskConfig.max}]` : null : "风险提示数据：<br>" + this.conf.riskConfig.replace(/(\r\n)/g, /\n/).replace(/(\n)/g, "<br>") : null
        },
        textPlaceholder() {
          return !this.conf.minLength && 0 !== this.conf.minLength || !this.conf.maxLength && 0 !== this.conf.maxLength ? this.conf.minLength || 0 === this.conf.minLength ? `最少填写${this.conf.minLength}个字` : this.conf.maxLength || this.conf.maxLength ? `最多填写${this.conf.maxLength}个字` : "" : `请填写${this.conf.minLength}~${this.conf.maxLength}个字`
        },
        numberPlaceholder() {
          return !this.conf.minValue && 0 !== this.conf.minValue || !this.conf.maxValue && 0 !== this.conf.maxValue ? this.conf.minValue || 0 === this.conf.minValue ? `最小值${this.conf.minValue}` : this.conf.maxValue || 0 === this.conf.maxValue ? `最大值${this.conf.maxValue}` : "" : `请填写${this.conf.minValue}~${this.conf.maxValue}的${this.conf.isDecimal?"":"整"}数`
        },
        numberStep() {
          return this.conf.isDecimal ? 1 / Math.pow(10, this.conf.decimalPlaces ? this.conf.decimalPlaces : 2) : 1
        }
      },
      watch: {
        value(e) {
          this.modelValue = e, this.initConf(this.conf)
        },
        modelValue(e) {
          this.$emit("input", e)
        },
        viewMode(e) {
          this.readonly = e
        },
        labelClass(e) {
          this.lClass = e
        },
        controlClass(e) {
          this.cClass = e
        },
        config(e) {
          this.initConf(e)
        },
        labelColon(e) {
          this.lColon = e
        },
        labelTextRight(e) {
          this.lTextRight = e
        },
        no(e) {
          this.lNo = e
        },
        showRiskInfo(e) {
          this.showRiskConf = e
        }
      },
      methods: {
        initConf(e) {
          this.conf = e || {
            label: "",
            hint: "",
            type: "T",
            required: !1,
            minLength: 1,
            maxLength: 100,
            isTextarea: !1,
            minValue: 0,
            maxValue: 100,
            isDecimal: !1,
            decimalPlaces: 2,
            selectPattern: "R",
            options: [],
            isOther: !1,
            dtPattern: "D",
            fileCount: 1,
            fileSize: 1,
            fileExts: []
          }, "T" !== this.conf.type && "D" !== this.conf.type && "S" !== this.conf.type || !this.modelValue || "string" === typeof this.modelValue ? "N" === this.conf.type && this.modelValue && "string" !== typeof this.modelValue && "number" !== typeof this.modelValue || "F" === this.conf.type && this.modelValue && !Array.isArray(this.modelValue) ? this.modelValue = null : "R" === this.conf.type && "S" !== this.conf.selectPattern && this.conf.isOther ? this.modelValue ? this.modelValue && ("object" !== typeof this.modelValue || Array.isArray(this.modelValue)) && (this.modelValue = {
            value: "",
            other: ""
          }) : this.modelValue = {
            value: "",
            other: ""
          } : "R" !== this.conf.type || "S" !== this.conf.selectPattern && ("S" === this.conf.selectPattern || this.conf.isOther) || "string" === typeof this.modelValue || "number" === typeof this.modelValue ? "C" !== this.conf.type || this.conf.isOther ? "C" === this.conf.type && this.conf.isOther ? this.modelValue ? this.modelValue && ("object" !== typeof this.modelValue || Array.isArray(this.modelValue)) && (this.modelValue = {
            value: [],
            other: ""
          }) : this.modelValue = {
            value: [],
            other: ""
          } : "A" === this.conf.type && (this.modelValue ? this.modelValue && ("object" !== typeof this.modelValue || Array.isArray(this.modelValue)) && (this.modelValue = {
            code: [],
            name: [],
            value: ""
          }) : this.modelValue = {
            code: [],
            name: [],
            value: ""
          }, this.$axiosAction(`${this.$appConf.portalUrl}/api/pcas_new/0.json`, null, "post", !1).then((e => {
            this.provinces = e.data
          }))) : this.modelValue ? this.modelValue && !Array.isArray(this.modelValue) && (this.modelValue = []) : this.modelValue = [] : this.modelValue = null : this.modelValue = null
        },
        detectOperatingSystem() {
          const e = navigator.userAgent.toLowerCase();
          e.indexOf("harmonyos") >= 0 || e.indexOf("huawei") >= 0 || e.indexOf("emui") >= 0 ? this.isHarmonyOS = !0 : (e.indexOf("android") >= 0 || e.indexOf("linux") >= 0) && (this.isHarmonyOS = !1)
        },
        checkNumber(e) {
          if (this.readonly) return;
          if (!e && 0 !== e) return !this.conf.required || "请填写该项";
          const t = this.conf.isDecimal ? `^(-?\\d+)(\\.\\d{1,${this.conf.decimalPlaces||2}})?$` : "^-?\\d+$",
            i = new RegExp(t);
          return i.test(e) ? (this.conf.maxValue || 0 === this.conf.maxValue) && e > this.conf.maxValue ? `最大填写${this.conf.maxValue}` : !this.conf.minValue && 0 !== this.conf.minValue || !(e < this.conf.minValue) || `最小填写${this.conf.minValue}` : this.conf.isDecimal ? `请填写不超过${this.conf.decimalPlaces||2}位的小数` : "请填写整数"
        },
        toggleOther() {
          ("R" === this.conf.type && "S" !== this.conf.selectPattern && "其他" !== this.modelValue.value || "C" === this.conf.type && this.modelValue.value && this.modelValue.value.indexOf("其他") < 0) && (this.modelValue.other = "")
        },
        generateEsign() {
          this.$refs.esign.generate().then((e => {
            this.modelValue = e, this.dialog = !1
          })).catch((() => {
            this.conf.required ? this.$showErrorNotify("请签名") : (this.modelValue = null, this.dialog = !1)
          }))
        },
        resetEsign() {
          this.$refs.esign.reset()
        },
        openPcasDialog() {
          this.readonly || (this.dialog = !0, this.pcas = {
            code: ((this.modelValue || {}).code || []).reduce(((e, t) => e.concat(t)), []),
            name: ((this.modelValue || {}).name || []).reduce(((e, t) => e.concat(t)), []),
            value: ((this.modelValue || {}).name || []).reduce(((e, t) => e + t), "")
          }, 0 === this.pcas.code.length ? (this.currList = this.provinces, this.currLevel = 1) : 1 === this.pcas.code.length ? (this.currList = this.provinces.find((e => e.code === this.pcas.code[0])).children, this.currLevel = 2) : (this.currList = [], this.$axiosAction(`${this.$appConf.portalUrl}/api/pcas_new/${this.pcas.code[1]}.json`, null, "post", !1).then((e => {
            this.areas = e.data, 2 === this.pcas.code.length ? (this.currList = this.areas, this.currLevel = 3) : this.pcas.code.length > 2 && (this.currList = this.areas.find((e => e.code === this.pcas.code[2])).children, this.currLevel = 4, this.currList || (this.currList = this.areas, this.currLevel = 3))
          }))))
        },
        extendPcas(e, t) {
          this.resetPcas(e, t, this.currLevel), 1 === this.currLevel ? this.currList = this.provinces.find((e => e.code === this.pcas.code[0])).children : 2 === this.currLevel ? (this.currList = [], this.$axiosAction(`${this.$appConf.portalUrl}/api/pcas_new/${e}.json`, null, "post", !1).then((e => {
            this.areas = e.data, this.currList = this.areas
          }))) : 3 === this.currLevel ? (this.currList = this.areas.find((t => t.code === e)).children, this.currList && 0 !== this.currList.length || this.closePcasDialog()) : 4 === this.currLevel && this.closePcasDialog(), this.currLevel += 1
        },
        extendPcasByLevel(e, t) {
          this.resetPcas(t < 2 ? null : this.pcas.code[t - 2], t < 2 ? null : this.pcas.name[t - 2], t - 1), this.currLevel = t, 1 === t ? this.currList = this.provinces : 2 === t ? this.currList = this.provinces.find((e => e.code === this.pcas.code[t - 2])).children : 3 === t && (this.currList = this.areas)
        },
        resetPcas(e, t, i) {
          0 === i ? this.pcas = {
            code: [],
            name: [],
            value: ""
          } : (this.pcas.code = this.pcas.code.reduce(((e, t, a) => a < i - 1 ? e.concat(t) : e), []).concat(e), this.pcas.name = this.pcas.name.reduce(((e, t, a) => a < i - 1 ? e.concat(t) : e), []).concat(t), this.pcas.value = this.pcas.name.reduce(((e, t) => e + t), ""))
        },
        closePcasDialog() {
          this.modelValue = this.pcas, this.dialog = !1
        },
        matchingUploadedFiles(e, t) {
          return (e || []).reduce(((e, i) => t && t.length > 0 ? 0 === t.reduce(((e, t) => {
            if (t.xhr.response) {
              const a = JSON.parse(t.xhr.response);
              return a.servername === i.servername ? e + 1 : e
            }
            return e
          }), 0) ? e.concat(i) : e : e.concat(i)), [])
        },
        startUpload() {
          this.$q.loading.show()
        },
        finishUpload() {
          this.$q.loading.hide()
        },
        afterUploaded(e) {
          const t = JSON.parse(e.xhr.response);
          t.error ? this.$showErrorNotify(t.error) : this.modelValue ? this.modelValue.push(t) : this.modelValue = [t]
        },
        checkFile(e) {
          return e.filter((e => {
            const t = 1048576 * this.conf.fileSize;
            if (e.size >= t) return this.$showErrorNotify(`文件大小应限制在${this.conf.fileSize}MB以内`), !1;
            const i = e.name.lastIndexOf(".");
            if (!(i > 0)) return this.$showErrorNotify("不支持该类型文件上传"), !1;
            {
              const t = e.name.substring(i + 1).toLowerCase();
              if (-1 === (this.conf.fileExts || []).indexOf(t)) return this.$showErrorNotify("不支持该类型文件上传"), !1
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
          const t = this.modelValue.findIndex((t => t.servername === e));
          this.modelValue.splice(t, 1)
        },
        downloadUploaderFile(e) {
          const t = JSON.parse(e.xhr.response),
            i = t.link.substring(t.link.lastIndexOf(".") + 1).toLowerCase();
          this.$appConf.pictureExts.findIndex((e => e === i)) > -1 ? (this.bigPicUrl = t.link, this.bigPicName = t.srcname, this.showBigPic = !0) : Object(n["c"])(t.link, t.srcname)
        },
        downloadFile(e, t) {
          const i = e.substring(e.lastIndexOf(".") + 1).toLowerCase();
          this.$appConf.pictureExts.findIndex((e => e === i)) > -1 ? (this.bigPicUrl = e, this.bigPicName = t, this.showBigPic = !0) : Object(n["c"])(e, t)
        },
        autoLocation() {
          this.research = (this.research ? this.research : 0) + 1
        },
        locationCompleted(e) {
          const {
            province: t,
            city: i,
            district: a
          } = e.addressComponents;
          if (i && t !== i) {
            const e = this.provinces.find((e => e.name === t));
            if (e) {
              this.resetPcas(e.code, e.name, 1);
              const t = e.children.find((e => e.name === i));
              t ? (this.resetPcas(t.code, t.name, 2), this.currList = [], this.$axiosAction(`${this.$appConf.portalUrl}/api/pcas_new/${t.code}.json`, null, "post", !1).then((e => {
                this.areas = e.data;
                const t = this.areas.find((e => e.name === a));
                t ? (this.resetPcas(t.code, t.name, 3), this.currList = t.children, this.currLevel = 4) : (this.currList = this.areas, this.currLevel = 3)
              }))) : (this.currList = e.children, this.currLevel = 2)
            }
          } else {
            const e = this.provinces.find((e => e.name === t));
            if (e) {
              this.resetPcas(e.code, e.name, 1);
              const t = e.children.find((e => e.name === a));
              t ? (this.resetPcas(t.code, t.name, 2), this.currList = [], this.$axiosAction(`${this.$appConf.portalUrl}/api/pcas_new/${t.code}.json`, null, "post", !1).then((e => {
                this.areas = e.data, this.currList = this.areas, this.currLevel = 3
              }))) : (this.currList = e.children, this.currLevel = 2)
            }
          }
        },
        locationError(e) {
          this.$showErrorNotify("定位失败")
        }
      }
    },
    m = d,
    f = i("2877"),
    p = i("27f9"),
    h = i("ddd8"),
    y = i("8572"),
    g = i("3786"),
    b = i("8f8e"),
    v = i("0016"),
    _ = i("7cbe"),
    T = i("52ee"),
    x = i("9c40"),
    w = i("ca78"),
    k = i("068f"),
    q = i("24e8"),
    C = i("f09f"),
    L = i("a370"),
    V = i("eb85"),
    D = i("1c1c"),
    S = i("66e5"),
    P = i("4074"),
    N = i("0170"),
    I = i("ee89"),
    M = i("cc04"),
    R = i("05c0"),
    $ = i("7f67"),
    O = i("eebe"),
    A = i.n(O),
    Q = Object(f["a"])(m, a, s, !1, null, null, null);
  t["a"] = Q.exports;
  A()(Q, "components", {
    QInput: p["a"],
    QSelect: h["a"],
    QField: y["a"],
    QRadio: g["a"],
    QCheckbox: b["a"],
    QIcon: v["a"],
    QPopupProxy: _["a"],
    QDate: T["a"],
    QBtn: x["a"],
    QTime: w["a"],
    QImg: k["a"],
    QDialog: q["a"],
    QCard: C["a"],
    QCardSection: L["a"],
    QSeparator: V["a"],
    QList: D["a"],
    QItem: S["a"],
    QItemSection: P["a"],
    QItemLabel: N["a"],
    QUploader: I["a"],
    QUploaderAddTrigger: M["a"],
    QTooltip: R["a"]
  }), A()(Q, "directives", {
    ClosePopup: $["a"]
  })
}
