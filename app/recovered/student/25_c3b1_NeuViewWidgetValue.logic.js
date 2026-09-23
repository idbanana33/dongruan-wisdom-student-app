/**
 * Webpack module logic recovery
 * Source: assets/www/js/25.js -> module "c3b1"
 * Route: /student/basic/stuInfo
 * Component guess: NeuViewWidgetValue
 * Fidelity: exact module body, beautified only (webpack wrapper retained)
 * Note: variable names inside the original production module are preserved as evidence.
 */
c3b1: function(e, t, i) {
  "use strict";
  i.r(t);
  var a = function() {
      var e = this,
        t = e.$createElement,
        i = e._self._c || t;
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
          click: e.goBack
        }
      }), i("q-toolbar-title", [e._v("我的信息")])], 1)], 1), i("q-page-container", [i("q-page", {
        staticClass: "bg-grey-3 q-pb-sm"
      }, [i("q-card", {
        staticClass: "q-mx-md",
        attrs: {
          flat: ""
        }
      }, e._l(e.commonCols, (function(t) {
        return i("q-item", {
          key: t.field,
          attrs: {
            dense: ""
          }
        }, [i("q-item-section", {
          attrs: {
            avatar: ""
          }
        }, [i("q-item-label", {
          staticClass: "text-grey"
        }, [e._v(e._s(t.label))])], 1), i("q-item-section", [i("q-item-label", {
          staticClass: "text-right"
        }, [e._v("\n              " + e._s(e.record[t.field])), (e.record.role_id = "class_name" === t.field) ? i("span", [e._v("(" + e._s(e.record.role_name) + ")")]) : e._e()])], 1)], 1)
      })), 1), e._l(e.record.stu_info_config || [], (function(t, a) {
        return i("q-card", {
          key: a,
          staticClass: "q-mx-md q-mt-sm",
          attrs: {
            flat: ""
          }
        }, [i("q-item", [i("q-item-section", {
          attrs: {
            avatar: ""
          }
        }, [i("q-item-label", {
          staticClass: "text-bold"
        }, [e._v(e._s(t.group))])], 1)], 1), e._l(t.items, (function(t) {
          return i("q-item", {
            key: t.id,
            attrs: {
              dense: ""
            }
          }, [i("q-item-section", {
            attrs: {
              avatar: ""
            }
          }, [i("q-item-label", {
            staticClass: "text-grey"
          }, [e._v(e._s(t.config.label))])], 1), i("q-item-section", {
            on: {
              click: function(i) {
                -1 != t.authority.indexOf("O") && e.openEditDialog(t.id, t.config)
              }
            }
          }, [i("q-item-label", {
            staticClass: "text-right",
            class: e.record.stu_info && e.record.stu_info[t.id] && 1 != e.record.stu_info[t.id].status ? "text-red" : ""
          }, [i("neu-view-widget-value", {
            attrs: {
              config: t.config,
              value: e.record.stu_info && e.record.stu_info[t.id] ? e.record.stu_info[t.id].value : ""
            }
          }), i("q-icon", {
            directives: [{
              name: "show",
              rawName: "v-show",
              value: -1 != t.authority.indexOf("O"),
              expression: "item.authority.indexOf('O') != -1"
            }],
            class: e.record.stu_info && e.record.stu_info[t.id] && 1 != e.record.stu_info[t.id].status ? "text-red" : "text-grey",
            attrs: {
              name: "keyboard_arrow_right",
              size: "xs"
            }
          })], 1)], 1)], 1)
        }))], 2)
      })), i("q-dialog", {
        attrs: {
          position: "bottom"
        },
        model: {
          value: e.editDialog,
          callback: function(t) {
            e.editDialog = t
          },
          expression: "editDialog"
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
      }, [i("q-btn", {
        attrs: {
          outline: "",
          label: "取消",
          color: "grey",
          size: "md"
        },
        on: {
          click: function(t) {
            e.editDialog = !1
          }
        }
      }), i("q-btn", {
        attrs: {
          unelevated: "",
          label: "保存",
          color: "primary",
          size: "md"
        },
        on: {
          click: e.saveEditDialog
        }
      })], 1), i("q-separator"), i("q-list", {
        attrs: {
          bordered: ""
        }
      }, [i("q-item", {
        directives: [{
          name: "ripple",
          rawName: "v-ripple"
        }]
      }, [i("q-item-section", [i("q-form", {
        ref: "editForm",
        on: {
          submit: e.saveStuInfo
        }
      }, [i("neu-widget", {
        attrs: {
          config: e.editModel.config
        },
        model: {
          value: e.editModel.value,
          callback: function(t) {
            e.$set(e.editModel, "value", t)
          },
          expression: "editModel.value"
        }
      })], 1)], 1)], 1)], 1)], 1)], 1)], 2)], 1)], 1)
    },
    o = [],
    l = i("58a84"),
    s = i("974f"),
    n = function() {
      var e = this,
        t = e.$createElement,
        i = e._self._c || t;
      return i("span", ["S" == e.conf.type && e.modelValue ? i("q-img", {
        attrs: {
          src: e.modelValue,
          width: "100px"
        }
      }) : e._e(), e._v(e._s(e.dispValue) + "\n  "), "F" == e.conf.type && e.modelValue ? i("div", e._l(e.modelValue || [], (function(t) {
        return i("div", {
          key: t.servername,
          staticClass: "cursor-pointer",
          on: {
            click: function(i) {
              return e.downloadFile(t.link, t.srcname)
            }
          }
        }, [e._v(e._s(t.srcname))])
      })), 0) : e._e(), "F" == e.conf.type && e.modelValue ? i("neu-full-screen-image", {
        attrs: {
          url: e.bigPicUrl,
          name: e.bigPicName
        },
        model: {
          value: e.showBigPic,
          callback: function(t) {
            e.showBigPic = t
          },
          expression: "showBigPic"
        }
      }) : e._e()], 1)
    },
    r = [],
    d = (i("baa5"), i("ad56")),
    c = i("33be"),
    u = {
      name: "NeuViewWidgetValue",
      components: {
        NeuFullScreenImage: c["a"]
      },
      props: {
        value: null,
        config: Object
      },
      data() {
        return {
          modelValue: null,
          conf: {},
          showBigPic: !1,
          bigPicUrl: "",
          bigPicName: ""
        }
      },
      mounted() {
        this.modelValue = this.value, this.conf = this.config
      },
      computed: {
        dispValue() {
          return "S" !== this.conf.type && "F" !== this.conf.type ? Object(l["c"])(this.conf, this.modelValue) : ""
        }
      },
      watch: {
        value(e) {
          this.modelValue = e
        },
        config(e) {
          this.conf = e
        }
      },
      methods: {
        downloadFile(e, t) {
          const i = e.substring(e.lastIndexOf(".") + 1).toLowerCase();
          this.$appConf.pictureExts.findIndex((e => e === i)) > -1 ? (this.bigPicUrl = e, this.bigPicName = t, this.showBigPic = !0) : Object(d["c"])(e, t)
        }
      }
    },
    f = u,
    m = i("2877"),
    g = i("068f"),
    h = i("eebe"),
    b = i.n(h),
    _ = Object(m["a"])(f, n, r, !1, null, null, null),
    p = _.exports;
  b()(_, "components", {
    QImg: g["a"]
  });
  var v = {
      name: "BasicStuInfo",
      components: {
        NeuWidget: s["a"],
        NeuViewWidgetValue: p
      },
      data() {
        return {
          record: {},
          commonCols: [{
            label: "学号",
            field: "login_name"
          }, {
            label: "姓名",
            field: "name"
          }, {
            label: "性别",
            field: "sex_name"
          }, {
            label: "年级",
            field: "grade_name"
          }, {
            label: "班级",
            field: "class_name"
          }, {
            label: "专业",
            field: "major_name"
          }, {
            label: "院系",
            field: "dep_name"
          }, {
            label: "培养层次",
            field: "edu_level_name"
          }, {
            label: "学籍状态",
            field: "school_roll_status"
          }, {
            label: "寝室",
            field: "room_name"
          }, {
            label: "身份证号",
            field: "id_card"
          }, {
            label: "手机号",
            field: "mob"
          }],
          editDialog: !1,
          editModel: {
            id: "",
            config: {},
            value: ""
          }
        }
      },
      mounted() {
        this.loadData()
      },
      methods: {
        loadData() {
          this.$axiosAction("/api/student/basic/stuInfo.api", {
            action: "queryMyStuInfo"
          }).then((e => {
            0 === e.data.code && (this.record = e.data.result)
          }))
        },
        goBack() {
          this.$router.push("/student/index")
        },
        openEditDialog(e, t) {
          this.editDialog = !0, this.editModel = {
            id: e,
            config: t,
            value: this.record && this.record.stu_info && this.record.stu_info[e] ? JSON.parse(JSON.stringify(this.record.stu_info[e])).value : null
          }
        },
        saveEditDialog() {
          this.$refs.editForm.submit()
        },
        saveStuInfo() {
          Object(l["b"])(this.editModel.config, this.editModel.value, this.record.stu_info && this.record.stu_info[this.editModel.id] ? this.record.stu_info[this.editModel.id].value : null) ? this.editDialog = !1 : (this.$q.loading.show(), this.$axiosAction("/api/student/basic/stuInfo.api", {
            action: "updateMyStuInfo",
            [this.editModel.id]: JSON.stringify({
              value: this.editModel.value
            }),
            colsConfig: [this.editModel.id]
          }).then((e => {
            0 === e.data.code && (this.loadData(), this.editDialog = !1), this.$q.loading.hide()
          })).catch((e => {
            this.$q.loading.hide()
          })))
        }
      }
    },
    q = v,
    w = i("4d5a"),
    y = i("e359"),
    x = i("65c6"),
    k = i("9c40"),
    C = i("6ac5"),
    Q = i("09e3"),
    D = i("9989"),
    O = i("f09f"),
    I = i("66e5"),
    M = i("4074"),
    S = i("0170"),
    V = i("0016"),
    P = i("24e8"),
    N = i("6b1d"),
    $ = i("a370"),
    F = i("eb85"),
    B = i("1c1c"),
    j = i("0378"),
    E = i("714f"),
    J = Object(m["a"])(q, a, o, !1, null, null, null);
  t["default"] = J.exports;
  b()(J, "components", {
    QLayout: w["a"],
    QHeader: y["a"],
    QToolbar: x["a"],
    QBtn: k["a"],
    QToolbarTitle: C["a"],
    QPageContainer: Q["a"],
    QPage: D["a"],
    QCard: O["a"],
    QItem: I["a"],
    QItemSection: M["a"],
    QItemLabel: S["a"],
    QIcon: V["a"],
    QDialog: P["a"],
    QLinearProgress: N["a"],
    QCardSection: $["a"],
    QSeparator: F["a"],
    QList: B["a"],
    QForm: j["a"]
  }), b()(J, "directives", {
    Ripple: E["a"]
  })
}
