/**
 * Webpack module logic recovery
 * Source: assets/www/js/chunk-common.js -> module "971b"
 * Route: (shared/core)
 * Component guess: NeuCollectSearch
 * Fidelity: exact module body, beautified only (webpack wrapper retained)
 * Note: variable names inside the original production module are preserved as evidence.
 */
"971b": function(e, t, i) {
  "use strict";
  var a = function() {
      var e = this,
        t = e.$createElement,
        i = e._self._c || t;
      return i("div", [0 == e.infoConfigList.length ? i("div", [i("q-card", {
        staticStyle: {
          height: "3.5rem",
          "align-items": "center",
          display: "flex",
          "justify-content": "center"
        },
        attrs: {
          flat: ""
        }
      }, [e._v("\n      暂无查询内容\n    ")])], 1) : e._e(), i("q-card", {
        staticClass: "full-width",
        attrs: {
          flat: ""
        }
      }, e._l(e.infoConfigList, (function(t, a) {
        return i("q-list", {
          key: a,
          attrs: {
            bordered: ""
          }
        }, [i("q-card-section", ["T" == t.type || "N" == t.type || "R" == t.type ? i("div", {
          class: e.$q.screen.lt.sm ? "" : "text-left"
        }, [e._v(e._s(t.label)), i("q-btn", {
          attrs: {
            dense: "",
            icon: "cancel",
            flat: "",
            color: "grey"
          },
          on: {
            click: function(t) {
              return e.closeIndex(a)
            }
          }
        })], 1) : e._e(), "T" == t.type ? i("div", {
          staticClass: "col-12"
        }, [i("q-input", {
          attrs: {
            outlined: "",
            dense: "",
            "hide-bottom-space": "",
            "lazy-rules": ""
          },
          model: {
            value: e.infoResultList[a],
            callback: function(t) {
              e.$set(e.infoResultList, a, t)
            },
            expression: "infoResultList[index]"
          }
        })], 1) : e._e(), "N" == t.type ? i("div", {
          staticClass: "row col-12"
        }, [i("div", {
          staticClass: "col-12"
        }, [i("q-input", {
          attrs: {
            type: "number",
            outlined: "",
            dense: "",
            "input-class": "text-right",
            "hide-bottom-space": "",
            "lazy-rules": ""
          },
          scopedSlots: e._u([{
            key: "prepend",
            fn: function() {
              return [i("span", {
                staticClass: "text-body2"
              }, [e._v("大于等于")])]
            },
            proxy: !0
          }], null, !0),
          model: {
            value: e.infoResultList[a].more,
            callback: function(t) {
              e.$set(e.infoResultList[a], "more", e._n(t))
            },
            expression: "infoResultList[index].more"
          }
        })], 1), i("div", {
          staticClass: "col-12",
          staticStyle: {
            "margin-top": "6px"
          }
        }, [i("q-input", {
          attrs: {
            type: "number",
            outlined: "",
            dense: "",
            "input-class": "text-right",
            "hide-bottom-space": "",
            "lazy-rules": ""
          },
          scopedSlots: e._u([{
            key: "prepend",
            fn: function() {
              return [i("span", {
                staticClass: "text-body2"
              }, [e._v("小于等于")])]
            },
            proxy: !0
          }], null, !0),
          model: {
            value: e.infoResultList[a].less,
            callback: function(t) {
              e.$set(e.infoResultList[a], "less", e._n(t))
            },
            expression: "infoResultList[index].less"
          }
        })], 1)]) : e._e(), "R" == t.type ? i("div", {
          staticClass: "row col-12"
        }, ["R" == t.selectPattern ? i("div", {
          staticClass: "q-gutter-sm"
        }, [e._l(t.options, (function(t, s) {
          return i("q-radio", {
            key: s,
            attrs: {
              val: t.value,
              label: t.label
            },
            model: {
              value: e.infoResultList[a],
              callback: function(t) {
                e.$set(e.infoResultList, a, t)
              },
              expression: "infoResultList[index]"
            }
          })
        })), i("q-radio", {
          directives: [{
            name: "show",
            rawName: "v-show",
            value: t.isOther,
            expression: "item.isOther"
          }],
          attrs: {
            val: "其他",
            label: "其他"
          },
          model: {
            value: e.infoResultList[a],
            callback: function(t) {
              e.$set(e.infoResultList, a, t)
            },
            expression: "infoResultList[index]"
          }
        })], 2) : e._e(), "S" == t.selectPattern ? i("q-select", {
          staticStyle: {
            width: "330px"
          },
          attrs: {
            outlined: "",
            dense: "",
            options: t.options,
            "emit-value": "",
            "map-options": "",
            label: "请选择"
          },
          model: {
            value: e.infoResultList[a],
            callback: function(t) {
              e.$set(e.infoResultList, a, t)
            },
            expression: "infoResultList[index]"
          }
        }) : e._e()], 1) : e._e()])], 1)
      })), 1), i("q-footer", {
        staticClass: "bg-white text-primary",
        staticStyle: {
          height: "2.8rem",
          "margin-left": "0px",
          border: "0px"
        },
        attrs: {
          bordered: ""
        }
      }, [i("q-btn", {
        staticStyle: {
          width: "40%",
          height: "100%"
        },
        attrs: {
          outline: "",
          color: "grey",
          label: "重置"
        },
        on: {
          click: e.resetInfoResultList
        }
      }), i("q-btn", {
        staticStyle: {
          width: "60%",
          height: "100%"
        },
        attrs: {
          color: "primary",
          label: "查询"
        },
        on: {
          click: e.searchInfo
        }
      })], 1)], 1)
    },
    s = [],
    l = (i("a434"), i("ddb0"), {
      name: "NeuCollectSearch",
      props: {
        configList: Array,
        configSet: Array,
        returnForm: Array
      },
      data() {
        return {
          infoResultList: [],
          infoConfigList: [],
          configsRessultList: [],
          beforResult: []
        }
      },
      mounted() {
        this.initModelValue(this.configList)
      },
      watch: {
        configList(e) {
          this.initModelValue(e)
        },
        configSet(e) {
          this.configSet = null !== e ? e : []
        }
      },
      methods: {
        initModelValue(e) {
          this.infoConfigList = JSON.parse(JSON.stringify(e)), this.infoResultList = [], this.returnForm.length > 0 && (this.beforResult = this.returnForm);
          for (const t in this.infoConfigList) "T" === this.infoConfigList[t].type && this.$set(this.infoResultList, t, ""), "N" === this.infoConfigList[t].type && this.$set(this.infoResultList, t, {
            more: null,
            less: null
          }), "R" === this.infoConfigList[t].type && this.$set(this.infoResultList, t, null), "T" !== this.infoConfigList[t].type && "N" !== this.infoConfigList[t].type && "R" !== this.infoConfigList[t].type || -1 !== this.beforResult.findIndex((e => e.label === this.infoConfigList[t].label && e.index === this.infoConfigList[t].index)) && this.$set(this.infoResultList, t, this.beforResult[this.beforResult.findIndex((e => e.label === this.infoConfigList[t].label && e.index === this.infoConfigList[t].index))].value)
        },
        searchInfo() {
          this.configsRessultList = [];
          for (const e in this.infoResultList) "" !== this.infoResultList[e] && "T" === this.infoConfigList[e].type && this.configsRessultList.push({
            index: this.configSet.findIndex((t => t.label === this.infoConfigList[e].label && t.index === this.infoConfigList[e].index)),
            value: this.infoResultList[e],
            configType: this.infoConfigList[e].type,
            label: this.infoConfigList[e].label
          }), "N" !== this.infoConfigList[e].type || null === this.infoResultList[e].more && null === this.infoResultList[e].less || this.configsRessultList.push({
            index: this.configSet.findIndex((t => t.label === this.infoConfigList[e].label && t.index === this.infoConfigList[e].index)),
            value: this.infoResultList[e],
            configType: this.infoConfigList[e].type,
            label: this.infoConfigList[e].label
          }), null !== this.infoResultList[e] && "R" === this.infoConfigList[e].type && ("R" === this.infoConfigList[e].selectPattern ? this.configsRessultList.push({
            index: this.configSet.findIndex((t => t.label === this.infoConfigList[e].label && t.index === this.infoConfigList[e].index)),
            value: this.infoResultList[e],
            configType: this.infoConfigList[e].type,
            label: this.infoConfigList[e].label
          }) : "S" === this.infoConfigList[e].selectPattern && this.configsRessultList.push({
            index: this.configSet.findIndex((t => t.label === this.infoConfigList[e].label && t.index === this.infoConfigList[e].index)),
            value: this.infoResultList[e],
            configType: this.infoConfigList[e].type + "S",
            label: this.infoConfigList[e].label
          }));
          this.$emit("input", [...this.configsRessultList]), this.$emit("saveForm", JSON.parse(JSON.stringify(this.configsRessultList))), this.beforResult = JSON.parse(JSON.stringify(this.configsRessultList))
        },
        resetInfoResultList() {
          this.infoResultList = [], this.beforResult = [], this.$emit("reset")
        },
        closeIndex(e) {
          this.configList.splice(e, 1)
        }
      }
    }),
    o = l,
    n = i("2877"),
    r = i("f09f"),
    c = i("1c1c"),
    u = i("a370"),
    d = i("9c40"),
    m = i("27f9"),
    f = i("3786"),
    p = i("ddd8"),
    h = i("7ff0"),
    y = i("eebe"),
    g = i.n(y),
    b = Object(n["a"])(o, a, s, !1, null, null, null);
  t["a"] = b.exports;
  g()(b, "components", {
    QCard: r["a"],
    QList: c["a"],
    QCardSection: u["a"],
    QBtn: d["a"],
    QInput: m["a"],
    QRadio: f["a"],
    QSelect: p["a"],
    QFooter: h["a"]
  })
}
