/**
 * Webpack module logic recovery
 * Source: assets/www/js/chunk-common.js -> module "156a"
 * Route: (shared/core)
 * Component guess: NeuManageQa
 * Fidelity: exact module body, beautified only (webpack wrapper retained)
 * Note: variable names inside the original production module are preserved as evidence.
 */
"156a": function(e, t, i) {
  "use strict";
  var a = function() {
      var e = this,
        t = e.$createElement,
        i = e._self._c || t;
      return i("q-card", {
        staticClass: "full-width",
        attrs: {
          flat: ""
        }
      }, [i("q-tabs", {
        staticClass: "bg-white",
        attrs: {
          dense: "",
          "active-color": "primary",
          "indicator-color": "primary",
          align: "justify"
        },
        model: {
          value: e.tab,
          callback: function(t) {
            e.tab = t
          },
          expression: "tab"
        }
      }, [i("q-tab", {
        attrs: {
          name: "unAnswer",
          label: "待回答"
        }
      }), i("q-tab", {
        attrs: {
          name: "answer",
          label: "已回答"
        }
      })], 1), i("q-card-section", {
        directives: [{
          name: "show",
          rawName: "v-show",
          value: "unAnswer" == e.tab,
          expression: "tab == 'unAnswer'"
        }]
      }, [i("div", {
        directives: [{
          name: "show",
          rawName: "v-show",
          value: !e.askingList || 0 == e.askingList.length,
          expression: "!askingList || askingList.length == 0"
        }],
        staticClass: "text-center text-grey"
      }, [e._v("暂无待回答问题")]), e._l(e.askingList, (function(t, a) {
        return i("q-item", {
          key: t.id,
          staticClass: "q-pa-md row justify-center"
        }, [i("q-item-section", {
          staticStyle: {
            width: "100%",
            "max-width": "400px"
          }
        }, [i("q-chat-message", {
          attrs: {
            name: t.sender_name + "(" + t.sender_no + ")",
            "text-color": "black",
            "bg-color": "white",
            stamp: t.create_time
          }
        }, [e._v("\n            " + e._s(t.content) + "\n          ")]), i("q-chat-message", {
          directives: [{
            name: "show",
            rawName: "v-show",
            value: !e.viewMode,
            expression: "!viewMode"
          }],
          attrs: {
            name: "我",
            sent: "",
            "text-color": "white",
            "bg-color": "blue-grey-5"
          }
        }, [i("div", {
          directives: [{
            name: "show",
            rawName: "v-show",
            value: !e.viewMode,
            expression: "!viewMode"
          }]
        }, [i("q-input", {
          staticClass: "bg-white",
          attrs: {
            outlined: "",
            dense: "",
            placeholder: "请在此处填写回答内容",
            clearable: "",
            "clear-icon": "close"
          },
          scopedSlots: e._u([{
            key: "after",
            fn: function() {
              return [i("q-btn", {
                staticClass: "q-mr-xs",
                attrs: {
                  color: "blue-grey-5",
                  label: "回答"
                },
                on: {
                  click: function(t) {
                    return e.submitAnswer(a)
                  }
                }
              })]
            },
            proxy: !0
          }], null, !0),
          model: {
            value: t.answer,
            callback: function(i) {
              e.$set(t, "answer", i)
            },
            expression: "item.answer"
          }
        }), i("q-checkbox", {
          staticClass: "q-mt-xs",
          attrs: {
            dense: "",
            label: "仅提问人可见（隐私保护）",
            "true-value": 1,
            "false-value": 0
          },
          model: {
            value: t.secret_flag,
            callback: function(i) {
              e.$set(t, "secret_flag", i)
            },
            expression: "item.secret_flag"
          }
        })], 1)])], 1)], 1)
      }))], 2), i("q-card-section", {
        directives: [{
          name: "show",
          rawName: "v-show",
          value: "answer" == e.tab,
          expression: "tab == 'answer'"
        }]
      }, [i("div", {
        directives: [{
          name: "show",
          rawName: "v-show",
          value: !e.answerList || 0 == e.answerList.length,
          expression: "!answerList || answerList.length == 0"
        }],
        staticClass: "text-center text-grey"
      }, [e._v("暂无已回答问题")]), e._l(e.answerList, (function(t) {
        return i("q-item", {
          key: t.id,
          staticClass: "q-pa-md row justify-center"
        }, [i("div", {
          staticStyle: {
            width: "100%",
            "max-width": "400px"
          }
        }, [i("q-chat-message", {
          attrs: {
            name: t.sender_no == e.user.login_name ? "我" : t.sender_name + "(" + t.sender_no + ")",
            sent: "T" == t.role_type,
            "text-color": "T" == t.role_type ? "white" : "black",
            "bg-color": "T" == t.role_type ? "brown-5" : "white",
            stamp: t.create_time
          }
        }, [i("span", {
          directives: [{
            name: "show",
            rawName: "v-show",
            value: 1 == t.secret_flag,
            expression: "item.secret_flag == 1"
          }],
          staticClass: "text-grey text-caption q-mr-sm"
        }, [e._v("仅提问人可见")]), i("q-badge", {
          directives: [{
            name: "show",
            rawName: "v-show",
            value: !e.viewMode && t.istop_time,
            expression: "!viewMode && item.istop_time"
          }],
          staticClass: "cursor-pointer",
          attrs: {
            outline: "T" != t.role_type,
            color: "grey",
            label: "取消置顶"
          },
          on: {
            click: function(i) {
              return e.setTop(t.id, 0)
            }
          }
        }), i("q-badge", {
          directives: [{
            name: "show",
            rawName: "v-show",
            value: !e.viewMode && !t.istop_time,
            expression: "!viewMode && !item.istop_time"
          }],
          staticClass: "cursor-pointer",
          attrs: {
            outline: "T" != t.role_type,
            color: "grey",
            label: "置顶"
          },
          on: {
            click: function(i) {
              return e.setTop(t.id, 1)
            }
          }
        }), i("q-badge", {
          directives: [{
            name: "show",
            rawName: "v-show",
            value: !e.viewMode && "T" == t.role_type,
            expression: "!viewMode && item.role_type == 'T'"
          }],
          staticClass: "q-ml-sm cursor-pointer",
          attrs: {
            outline: "T" != t.role_type,
            color: "negative",
            label: "删除"
          },
          on: {
            click: function(i) {
              return e.deleteQa(t.id, 0)
            }
          }
        }), i("div", {
          staticClass: "q-mt-xs"
        }, [e._v(e._s(t.content))])], 1), e._l(t.answers, (function(t) {
          return i("div", {
            key: t.id,
            staticStyle: {
              width: "100%",
              "max-width": "400px"
            }
          }, [i("q-chat-message", {
            attrs: {
              name: t.sender_no == e.user.login_name ? "我" : t.sender_name + "(" + t.sender_no + ")",
              stamp: t.create_time,
              "text-color": "white",
              "bg-color": "blue-grey-5",
              sent: ""
            }
          }, [i("div", {
            staticClass: "text-right"
          }, [i("q-badge", {
            directives: [{
              name: "show",
              rawName: "v-show",
              value: !e.viewMode && "T" == t.role_type,
              expression: "!viewMode && sub.role_type == 'T'"
            }],
            staticClass: "cursor-pointer",
            attrs: {
              color: "negative",
              label: "删除"
            },
            on: {
              click: function(i) {
                return e.deleteQa(t.id, t.parent_id)
              }
            }
          })], 1), i("div", {
            staticClass: "q-mt-xs"
          }, [e._v(e._s(t.content))])])], 1)
        }))], 2)])
      })), i("q-page-sticky", {
        attrs: {
          position: "bottom-right",
          offset: e.fabPos
        }
      }, [i("q-btn", {
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
          icon: "question_answer"
        },
        on: {
          click: e.open
        }
      })], 1)], 2), i("q-dialog", {
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
      }, [i("q-card", {
        staticStyle: {
          width: "350px"
        }
      }, [i("q-linear-progress", {
        attrs: {
          value: 1,
          color: "primary"
        }
      }), i("q-card-section", {
        staticClass: "row items-center justify-between",
        attrs: {
          dense: ""
        }
      }, [i("q-input", {
        staticClass: "full-width",
        attrs: {
          outlined: "",
          dense: "",
          placeholder: "输入留言内容，所有学生均可见",
          clearable: "",
          "clear-icon": "close",
          filled: ""
        },
        scopedSlots: e._u([{
          key: "prepend",
          fn: function() {
            return [i("q-icon", {
              staticClass: "cursor-pointer",
              attrs: {
                name: "create"
              }
            })]
          },
          proxy: !0
        }, {
          key: "after",
          fn: function() {
            return [i("q-btn", {
              staticClass: "q-ml-md",
              attrs: {
                color: "primary",
                label: "留言"
              },
              on: {
                click: e.leaveMessage
              }
            })]
          },
          proxy: !0
        }]),
        model: {
          value: e.message,
          callback: function(t) {
            e.message = t
          },
          expression: "message"
        }
      })], 1)], 1)], 1)], 1)
    },
    s = [],
    l = i("ded3"),
    o = i.n(l),
    n = {
      name: "NeuManageQa",
      props: {
        taskMenuId: {
          type: String,
          required: !0
        },
        taskId: {
          type: String,
          required: !0
        },
        readonly: {
          type: Boolean,
          required: !0
        }
      },
      data() {
        return {
          tMenuId: "",
          tId: "",
          fabPos: [30, 20],
          dialog: !1,
          viewMode: !0,
          askingList: [],
          answerList: [],
          message: "",
          tab: "unAnswer",
          user: window.localStorage.userinfo ? JSON.parse(window.localStorage.getItem("userinfo")) : {}
        }
      },
      mounted() {
        this.tMenuId = this.taskMenuId, this.tId = this.taskId, this.viewMode = this.readonly, this.loadList()
      },
      watch: {
        taskMenuId(e) {
          this.tMenuId = e, this.loadList()
        },
        taskId(e) {
          this.tId = e, this.loadList()
        },
        readonly(e) {
          this.viewMode = e
        }
      },
      methods: {
        loadList() {
          if (!this.tMenuId || !this.tId) return this.askingList = [], void(this.answerList = []);
          this.$axiosAction("/api/teacher/basic/qa.api", {
            action: "queryAskingList",
            task_menu_id: this.tMenuId,
            task_id: this.tId
          }).then((e => {
            0 === e.data.code && (this.askingList = e.data.result)
          })).catch((e => {
            this.askingList = []
          })), this.$axiosAction("/api/teacher/basic/qa.api", {
            action: "queryAnswerList",
            task_menu_id: this.tMenuId,
            task_id: this.tId
          }).then((e => {
            0 === e.data.code && (this.answerList = e.data.result)
          })).catch((e => {
            this.answerList = []
          }))
        },
        submitAnswer(e) {
          const t = o()({}, this.askingList[e]);
          t.answer ? (this.$q.loading.show(), this.$axiosAction("/api/teacher/basic/qa.api", o()({
            action: "answerQa"
          }, t)).then((e => {
            this.loadList(), this.$q.loading.hide()
          })).catch((e => {
            this.$q.loading.hide()
          }))) : this.$showErrorNotify("请填写回答内容")
        },
        leaveMessage() {
          this.tMenuId && this.tId ? this.message ? (this.$q.loading.show(), this.$axiosAction("/api/teacher/basic/qa.api", {
            action: "leaveMessage",
            task_menu_id: this.tMenuId,
            task_id: this.tId,
            message: this.message
          }).then((e => {
            0 === e.data.code && this.loadList(), this.$q.loading.hide(), this.dialog = !1, this.message = ""
          })).catch((e => {
            this.$q.loading.hide()
          }))) : this.$showErrorNotify("请填写留言内容") : this.$showErrorNotify("参数设置有误")
        },
        setTop(e, t) {
          this.$q.loading.show(), this.$axiosAction("/api/teacher/basic/qa.api", {
            action: t ? "setTop" : "cancelTop",
            task_menu_id: this.tMenuId,
            task_id: this.tId,
            id: e
          }).then((e => {
            0 === e.data.code && this.loadList(), this.$q.loading.hide()
          })).catch((e => {
            this.$q.loading.hide()
          }))
        },
        deleteQa(e, t) {
          this.$q.loading.show(), this.$axiosAction("/api/teacher/basic/qa.api", {
            action: "deleteQa",
            task_menu_id: this.tMenuId,
            task_id: this.tId,
            id: e,
            parent_id: t
          }).then((e => {
            0 === e.data.code && this.loadList(), this.$q.loading.hide()
          })).catch((e => {
            this.$q.loading.hide()
          }))
        },
        moveFab(e) {
          this.draggingFab = !0 !== e.isFirst && !0 !== e.isFinal, this.fabPos = [this.fabPos[0] - e.delta.x, this.fabPos[1] - e.delta.y]
        },
        open() {
          this.dialog = !0
        }
      }
    },
    r = n,
    c = i("2877"),
    u = i("f09f"),
    d = i("429b"),
    m = i("7460"),
    f = i("a370"),
    p = i("66e5"),
    h = i("4074"),
    y = i("8169"),
    g = i("27f9"),
    b = i("9c40"),
    v = i("8f8e"),
    _ = i("58a81"),
    T = i("de5e"),
    x = i("24e8"),
    w = i("6b1d"),
    k = i("0016"),
    q = i("75c3"),
    C = i("eebe"),
    L = i.n(C),
    V = Object(c["a"])(r, a, s, !1, null, null, null);
  t["a"] = V.exports;
  L()(V, "components", {
    QCard: u["a"],
    QTabs: d["a"],
    QTab: m["a"],
    QCardSection: f["a"],
    QItem: p["a"],
    QItemSection: h["a"],
    QChatMessage: y["a"],
    QInput: g["a"],
    QBtn: b["a"],
    QCheckbox: v["a"],
    QBadge: _["a"],
    QPageSticky: T["a"],
    QDialog: x["a"],
    QLinearProgress: w["a"],
    QIcon: k["a"]
  }), L()(V, "directives", {
    TouchPan: q["a"]
  })
}
