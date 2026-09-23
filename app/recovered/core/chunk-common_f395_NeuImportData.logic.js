/**
 * Webpack module logic recovery
 * Source: assets/www/js/chunk-common.js -> module "f395"
 * Route: (shared/core)
 * Component guess: NeuImportData
 * Fidelity: exact module body, beautified only (webpack wrapper retained)
 * Note: variable names inside the original production module are preserved as evidence.
 */
f395: function(e, t, i) {
  "use strict";
  var a = function() {
      var e = this,
        t = e.$createElement,
        i = e._self._c || t;
      return i("div", {
        staticClass: "full-width"
      }, [i("q-list", {
        attrs: {
          bordered: "",
          separator: ""
        }
      }, [i("q-expansion-item", {
        attrs: {
          "expand-icon-toggle": "",
          "switch-toggle-side": ""
        },
        scopedSlots: e._u([{
          key: "header",
          fn: function() {
            return [i("q-item-section", {
              staticClass: "text-center"
            }, [e._v("\n          已选择（" + e._s(e.assignedData ? e.assignedData.length : 0) + "）\n        ")]), i("q-item-section", {
              attrs: {
                side: ""
              }
            }, [i("span", {
              staticClass: "text-primary cursor-pointer",
              on: {
                click: e.openImportDialog
              }
            }, [e._v("学号批量导入")]), i("span", {
              staticClass: "text-negative cursor-pointer",
              on: {
                click: e.removeAll
              }
            }, [e._v("清空已选")])])]
          },
          proxy: !0
        }])
      }, [i("q-list", {
        attrs: {
          separator: ""
        }
      }, [e._l(e.teamData, (function(t) {
        return i("q-item", {
          key: t.target_level + t.target_no + t.grade_no
        }, [i("q-item-section", {
          attrs: {
            avatar: ""
          }
        }, [i("q-icon", {
          staticClass: "cursor-pointer",
          attrs: {
            name: "more_vert"
          },
          on: {
            click: function(i) {
              e.schooleRollStatusDialog = !0, e.srsItem = t
            }
          }
        })], 1), i("q-item-section", [i("q-item-label", [e._v(e._s(t.target_name)), "class" != t.target_level ? i("span", [e._v(" - " + e._s(t.grade_name))]) : e._e()]), i("q-item-label", {
          attrs: {
            caption: ""
          }
        }, [i("span", {
          directives: [{
            name: "show",
            rawName: "v-show",
            value: t.school_roll_status_name,
            expression: "item.school_roll_status_name"
          }]
        }, [e._v(e._s(t.school_roll_status_name))]), i("span", {
          directives: [{
            name: "show",
            rawName: "v-show",
            value: t.education_level_name,
            expression: "item.education_level_name"
          }]
        }, [e._v(" " + e._s(t.education_level_name))])])], 1), i("q-item-section", {
          attrs: {
            side: ""
          }
        }, [i("q-icon", {
          attrs: {
            name: "cancel",
            color: "negative"
          },
          on: {
            click: function(i) {
              return e.removeData(t)
            }
          }
        })], 1)], 1)
      })), e._l(e.userData, (function(t) {
        return i("q-item", {
          key: t.target_level + t.target_no
        }, [i("q-item-section", {
          directives: [{
            name: "show",
            rawName: "v-show",
            value: e.teamData && 0 != e.teamData.length,
            expression: "teamData && teamData.length != 0"
          }],
          attrs: {
            avatar: ""
          }
        }), i("q-item-section", [i("q-item-label", [e._v(e._s(t.target_name))]), i("q-item-label", {
          attrs: {
            caption: ""
          }
        }, [e._v(e._s(t.target_no))])], 1), i("q-item-section", {
          attrs: {
            side: ""
          }
        }, [i("q-icon", {
          attrs: {
            name: "cancel",
            color: "negative"
          },
          on: {
            click: function(i) {
              return e.removeData(t)
            }
          }
        })], 1)], 1)
      })), e._l(e.groupData, (function(t) {
        return i("q-item", {
          key: t.target_level + t.target_no
        }, [i("q-item-section", [e._v(e._s(t.target_name))]), i("q-item-section", {
          attrs: {
            side: ""
          }
        }, [i("q-icon", {
          attrs: {
            name: "cancel",
            color: "negative"
          },
          on: {
            click: function(i) {
              return e.removeData(t)
            }
          }
        })], 1)], 1)
      }))], 2)], 1)], 1), i("q-tabs", {
        staticClass: "text-grey",
        attrs: {
          dense: "",
          "active-color": "primary",
          "indicator-color": "primary",
          align: "justify",
          "narrow-indicator": ""
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
          name: "team",
          label: "组织架构"
        }
      }), e.hideGroup ? e._e() : i("q-tab", {
        attrs: {
          name: "group",
          label: "分组"
        }
      })], 1), i("q-select", {
        directives: [{
          name: "show",
          rawName: "v-show",
          value: "team" == e.tab,
          expression: "tab == 'team'"
        }],
        staticClass: "q-mt-sm",
        attrs: {
          filled: "",
          dense: "",
          label: "年级",
          options: e.gradeList,
          "emit-value": "",
          "map-options": ""
        },
        on: {
          input: e.changeGrade
        },
        model: {
          value: e.gradeNo,
          callback: function(t) {
            e.gradeNo = t
          },
          expression: "gradeNo"
        }
      }), i("div", {
        directives: [{
          name: "show",
          rawName: "v-show",
          value: "team" == e.tab && e.gradeNo && (!e.treeDatas || 0 == e.treeDatas.length),
          expression: "tab == 'team' && gradeNo && (!treeDatas || treeDatas.length == 0)"
        }],
        staticClass: "text-center text-grey"
      }, [e._v("该年级下暂无数据")]), i("q-breadcrumbs", {
        directives: [{
          name: "show",
          rawName: "v-show",
          value: "team" == e.tab && 0 != e.teamPath.length,
          expression: "tab == 'team' && teamPath.length != 0"
        }],
        staticClass: "q-mt-sm q-ml-md",
        scopedSlots: e._u([{
          key: "separator",
          fn: function() {
            return [i("q-icon", {
              attrs: {
                name: "chevron_right"
              }
            })]
          },
          proxy: !0
        }])
      }, e._l(e.teamPath, (function(t, a) {
        return i("q-breadcrumbs-el", {
          key: a,
          attrs: {
            label: t.label
          },
          on: {
            click: function(i) {
              return e.changeNavi(t)
            }
          }
        })
      })), 1), i("q-list", {
        directives: [{
          name: "show",
          rawName: "v-show",
          value: "team" == e.tab && e.teamNode && (!e.list || 0 == e.list.length),
          expression: "tab == 'team' && teamNode && (!list || list.length == 0)"
        }],
        attrs: {
          bordered: "",
          separator: ""
        }
      }, ["all" == (e.teamNode || {}).target_level ? i("q-item", [i("q-item-section", {
        attrs: {
          avatar: ""
        }
      }, [i("q-checkbox", {
        attrs: {
          dense: "",
          val: e.teamNode || {}
        },
        on: {
          input: function(t) {
            return e.selectTeam(e.teamNode || {})
          }
        },
        model: {
          value: e.teamSelected,
          callback: function(t) {
            e.teamSelected = t
          },
          expression: "teamSelected"
        }
      })], 1), i("q-item-section", [e._v(e._s((e.teamNode || {}).label))])], 1) : e._e(), e._l((e.teamNode || {}).children, (function(t) {
        return i("q-item", {
          key: t.node_key
        }, [i("q-item-section", {
          attrs: {
            avatar: ""
          }
        }, [i("q-checkbox", {
          attrs: {
            dense: "",
            val: t
          },
          on: {
            input: function(i) {
              return e.selectTeam(t)
            }
          },
          model: {
            value: e.teamSelected,
            callback: function(t) {
              e.teamSelected = t
            },
            expression: "teamSelected"
          }
        })], 1), i("q-item-section", [e._v(e._s(t.label))]), i("q-item-section", {
          attrs: {
            side: ""
          }
        }, [i("span", {
          staticClass: "text-primary cursor-pointer",
          on: {
            click: function(i) {
              return e.expandNode(t)
            }
          }
        }, [e._v("展开")])])], 1)
      }))], 2), i("q-list", {
        directives: [{
          name: "show",
          rawName: "v-show",
          value: "team" == e.tab && e.list && 0 != e.list.length,
          expression: "tab == 'team' && list && list.length != 0"
        }],
        attrs: {
          bordered: "",
          separator: ""
        }
      }, e._l(e.list, (function(t) {
        return i("q-item", {
          key: t.login_name
        }, [i("q-item-section", {
          attrs: {
            avatar: ""
          }
        }, [i("q-checkbox", {
          attrs: {
            dense: "",
            val: t
          },
          on: {
            input: function(i) {
              return e.selectUser(t)
            }
          },
          model: {
            value: e.selected,
            callback: function(t) {
              e.selected = t
            },
            expression: "selected"
          }
        })], 1), i("q-item-section", [i("q-item-label", [e._v(e._s(t.name))]), i("q-item-label", {
          attrs: {
            caption: ""
          }
        }, [e._v(e._s(t.login_name) + " " + e._s(t.sex_name) + " " + e._s(t.school_roll_status))])], 1)], 1)
      })), 1), i("q-list", {
        directives: [{
          name: "show",
          rawName: "v-show",
          value: "group" == e.tab,
          expression: "tab == 'group'"
        }],
        attrs: {
          bordered: "",
          separator: ""
        }
      }, e._l(e.groupList, (function(t) {
        return i("q-item", {
          key: t.id
        }, [i("q-item-section", {
          attrs: {
            avatar: ""
          }
        }, [i("q-checkbox", {
          attrs: {
            dense: "",
            val: t
          },
          on: {
            input: e.selectGroup
          },
          model: {
            value: e.groupSelected,
            callback: function(t) {
              e.groupSelected = t
            },
            expression: "groupSelected"
          }
        })], 1), i("q-item-section", [e._v(e._s(t.title))])], 1)
      })), 1), i("q-dialog", {
        model: {
          value: e.importDialog,
          callback: function(t) {
            e.importDialog = t
          },
          expression: "importDialog"
        }
      }, [i("q-card", {
        staticClass: "full-width",
        attrs: {
          flat: ""
        }
      }, [i("q-card-section", [i("div", {
        staticClass: "text-bold"
      }, [e._v("学号批量导入")])]), i("q-card-section", [i("q-form", {
        staticClass: "q-gutter-sm full-width",
        on: {
          submit: e.importStudents
        }
      }, [i("div", {
        staticClass: "full-width"
      }, [i("q-input", {
        attrs: {
          outlined: "",
          dense: "",
          type: "textarea",
          placeholder: "请将学号粘贴至此，每个学号占一行。",
          "hide-bottom-space": "",
          "lazy-rules": "",
          rules: [function(e) {
            return !!e || "请填写该项"
          }]
        },
        model: {
          value: e.studentsModel,
          callback: function(t) {
            e.studentsModel = t
          },
          expression: "studentsModel"
        }
      }), i("div", {
        directives: [{
          name: "show",
          rawName: "v-show",
          value: e.importErrorMessage,
          expression: "importErrorMessage"
        }],
        staticClass: "text-red"
      }, [e._v(e._s(e.importErrorMessage))])], 1), i("div", {
        staticClass: "q-gutter-sm"
      }, [i("q-btn", {
        attrs: {
          unelevated: "",
          color: "primary",
          label: "导入",
          type: "submit"
        }
      }), i("q-btn", {
        attrs: {
          outline: "",
          color: "grey",
          label: "取消"
        },
        on: {
          click: function(t) {
            e.importDialog = !1
          }
        }
      })], 1)])], 1)], 1)], 1), i("q-dialog", {
        model: {
          value: e.schooleRollStatusDialog,
          callback: function(t) {
            e.schooleRollStatusDialog = t
          },
          expression: "schooleRollStatusDialog"
        }
      }, [i("q-card", {
        staticClass: "full-width",
        attrs: {
          flat: ""
        }
      }, [i("q-item", [i("q-item-section", {
        attrs: {
          avatar: ""
        }
      }, [e._v("学籍状态")]), i("q-item-section", [i("q-select", {
        attrs: {
          outlined: "",
          dense: "",
          options: e.schoolRollStatusList,
          "emit-value": "",
          "map-options": "",
          multiple: ""
        },
        on: {
          input: function(t) {
            return e.setSchoolRollStatusName(e.srsItem)
          }
        },
        model: {
          value: e.srsItem.school_roll_status,
          callback: function(t) {
            e.$set(e.srsItem, "school_roll_status", t)
          },
          expression: "srsItem.school_roll_status"
        }
      })], 1)], 1), "class" != e.srsItem.target_level ? i("q-item", [i("q-item-section", {
        attrs: {
          avatar: ""
        }
      }, [e._v("培养层次")]), i("q-item-section", [i("q-select", {
        attrs: {
          outlined: "",
          dense: "",
          options: e.educationLevelList,
          "emit-value": "",
          "map-options": "",
          multiple: ""
        },
        on: {
          input: function(t) {
            return e.setEducationLevelName(e.srsItem)
          }
        },
        model: {
          value: e.srsItem.education_level,
          callback: function(t) {
            e.$set(e.srsItem, "education_level", t)
          },
          expression: "srsItem.education_level"
        }
      })], 1)], 1) : e._e()], 1)], 1), i("neu-import-data", {
        attrs: {
          config: e.importCompConfig
        }
      })], 1)
    },
    s = [],
    l = (i("c975"), i("13d5"), i("a434"), i("5319"), i("ddb0"), i("ded3")),
    o = i.n(l),
    n = function() {
      var e = this,
        t = e.$createElement,
        i = e._self._c || t;
      return i("q-dialog", {
        attrs: {
          persistent: ""
        },
        model: {
          value: e.progressDialog,
          callback: function(t) {
            e.progressDialog = t
          },
          expression: "progressDialog"
        }
      }, [i("q-card", {
        staticClass: "full-width",
        attrs: {
          flat: ""
        }
      }, [i("q-card-section", [i("q-item-section", {
        directives: [{
          name: "show",
          rawName: "v-show",
          value: !e.progressError,
          expression: "!progressError"
        }]
      }, [e._v("处理中（数据量大时处理速度会比较慢，请耐心等候）...")]), i("q-item-section", {
        directives: [{
          name: "show",
          rawName: "v-show",
          value: !e.progressError,
          expression: "!progressError"
        }]
      }, [i("q-linear-progress", {
        attrs: {
          size: "25px",
          value: e.progress,
          color: "accent"
        }
      }, [i("div", {
        staticClass: "absolute-full flex flex-center"
      }, [i("q-badge", {
        attrs: {
          color: "white",
          "text-color": "accent",
          label: e.progressLabel
        }
      })], 1)])], 1), i("q-item-section", {
        directives: [{
          name: "show",
          rawName: "v-show",
          value: e.progressError,
          expression: "progressError"
        }]
      }, [e._v("处理结果")]), i("q-item-section", {
        directives: [{
          name: "show",
          rawName: "v-show",
          value: e.progressError,
          expression: "progressError"
        }]
      }, [i("q-input", {
        attrs: {
          type: "textarea",
          readonly: ""
        },
        model: {
          value: e.progressError,
          callback: function(t) {
            e.progressError = t
          },
          expression: "progressError"
        }
      })], 1), i("q-item-section", {
        directives: [{
          name: "show",
          rawName: "v-show",
          value: e.progressError,
          expression: "progressError"
        }]
      }, [i("q-btn", {
        staticClass: "q-mt-sm",
        attrs: {
          outline: "",
          color: "grey",
          label: "关闭"
        },
        on: {
          click: function(t) {
            e.progressDialog = !1
          }
        }
      })], 1)], 1)], 1)], 1)
    },
    r = [],
    c = (i("fb6a"), i("e6cf"), i("cd81")),
    u = {
      name: "NeuImportData",
      props: {
        config: {
          type: Array,
          required: !1
        },
        excel: {
          type: Array,
          required: !1
        }
      },
      data() {
        return {
          progressDialog: !1,
          progress: 0,
          progressError: ""
        }
      },
      watch: {
        config(e) {
          !e || 8 !== e.length && 9 !== e.length || this.doImport(...e)
        },
        excel(e) {
          e && 2 === e.length && this.doReadExcel(...e)
        }
      },
      computed: {
        progressLabel() {
          return (100 * this.progress).toFixed(2) + "%"
        }
      },
      methods: {
        async doImport(e, t, i, a, s, l, n, r, c = null) {
          const u = 10,
            d = Math.ceil(s.length / u);
          let m = "",
            f = "";
          this.progress = 0, this.progressError = "", this.progressDialog = !0;
          for (let p = 0; p < d; p++)
            if (await this.$axiosAction(e, o()(o()({
                action: t
              }, i), {}, {
                [a]: s.slice(p * u, Math.min(p * u + u, s.length))
              }), "post", !1).then((e => {
                this.progress = (p + 1) * u / s.length, 0 === e.data.code || e.data.count ? 0 !== e.data.code && e.data.count && r ? f += `${r(p*u+e.data.count,p*u+1,Math.min(p*u+u,s.length))}\n` : 0 === e.data.code && c && c(e.data) : m = e.data.message
              })), m) break;
          m ? (this.progressError = m, n && n()) : f ? (this.progressError = f, n && n()) : (this.progressDialog = !1, this.$showSuccessNotify("处理成功"), l && l())
        },
        doReadExcel(e, t) {
          Object(c["c"])(e, (e => {
            t && t(e)
          }))
        }
      }
    },
    d = u,
    m = i("2877"),
    f = i("24e8"),
    p = i("f09f"),
    h = i("a370"),
    y = i("4074"),
    g = i("6b1d"),
    b = i("58a81"),
    v = i("27f9"),
    _ = i("9c40"),
    T = i("eebe"),
    x = i.n(T),
    w = Object(m["a"])(d, n, r, !1, null, null, null),
    k = w.exports;
  x()(w, "components", {
    QDialog: f["a"],
    QCard: p["a"],
    QCardSection: h["a"],
    QItemSection: y["a"],
    QLinearProgress: g["a"],
    QBadge: b["a"],
    QInput: v["a"],
    QBtn: _["a"]
  });
  const q = ["all", "dep", "major", "class"];
  var C = {
      name: "NeuAssignStudent",
      components: {
        NeuImportData: k
      },
      props: {
        value: null,
        menuId: String,
        permit: String,
        permitMode: String,
        hideGroup: Boolean
      },
      data() {
        return {
          assignedData: [],
          schoolRollStatusList: [],
          educationLevelList: [],
          gradeList: [],
          gradeNo: "",
          treeDatas: [],
          teamPath: [],
          teamNode: null,
          teamSelected: [],
          list: [],
          selected: [],
          importDialog: !1,
          studentsModel: "",
          importErrorMessage: "",
          schooleRollStatusDialog: !1,
          srsItem: {},
          tab: "team",
          groupList: [],
          groupSelected: [],
          importCompConfig: null
        }
      },
      mounted() {
        this.assignedData = this.value || [], this.$axiosAction("/api/public.api", {
          action: "queryResultOfFunction",
          functionName: "basic.f_query_grade_list()"
        }).then((e => {
          0 === e.data.code && (this.gradeList = e.data.list)
        })), this.$axiosAction("/api/public.api", {
          action: "queryResultOfFunction",
          functionName: "basic.f_query_option_list('school_roll_status')"
        }).then((e => {
          0 === e.data.code && (this.schoolRollStatusList = e.data.list)
        })), this.$axiosAction("/api/public.api", {
          action: "queryResultOfFunction",
          functionName: "basic.f_query_education_level_list()"
        }).then((e => {
          0 === e.data.code && (this.educationLevelList = e.data.list)
        })), this.hideGroup || this.$axiosAction("/api/teacher/basic/memberGroup.api", {
          action: "queryListForAssignStudent"
        }).then((e => {
          if (0 === e.data.code) {
            this.groupList = e.data.list;
            for (const e of this.assignedData)
              if ("group" === e.target_level) {
                const t = this.groupList.findIndex((t => t.id === e.target_no));
                t >= 0 && (this.groupSelected = this.groupSelected.concat(this.groupList[t]))
              }
          }
        }))
      },
      watch: {
        value(e) {
          this.assignedData = e || []
        },
        assignedData(e) {
          this.$emit("input", e)
        }
      },
      computed: {
        userData() {
          return this.assignedData.reduce(((e, t) => "user" === t.target_level ? e.concat(t) : e), [])
        },
        teamData() {
          return this.assignedData.reduce(((e, t) => q.indexOf(t.target_level) >= 0 ? e.concat(t) : e), [])
        },
        groupData() {
          return this.assignedData.reduce(((e, t) => "group" === t.target_level ? e.concat(t) : e), [])
        }
      },
      methods: {
        changeGrade() {
          this.gradeNo ? (this.list = [], this.selected = [], this.$axiosAction("/api/teacher/basic/student.api", {
            action: "queryDepMajorClassListByGrade",
            menu_id: this.menuId,
            permit_mode: this.permitMode,
            grade_nos: [this.gradeNo]
          }).then((e => {
            if (0 === e.data.code)
              if ("D" === this.permit ? this.treeDatas = e.data.list.reduce(((e, t) => e.concat(o()(o()({}, t.children[0]), {}, {
                  label: `${t.children[0].label} - ${t.children[0].grade_name}`
                }))), []) : this.treeDatas = e.data.list, this.treeDatas && 0 !== this.treeDatas.length) {
                this.teamPath = [this.treeDatas[0]], this.teamNode = this.treeDatas[0], this.teamSelected = [];
                for (const e of this.assignedData)
                  if (q.indexOf(e.target_level) >= 0) {
                    const t = this.findNodeByKey(this.treeDatas[0], e.grade_no + "_" + e.target_level + "_" + e.target_no);
                    t && (this.teamSelected = this.teamSelected.concat(t).concat(this.selectAllChildren(t)))
                  }
              } else this.teamPath = [], this.teamNode = null, this.teamSelected = []
          }))) : (this.treeDatas = [], this.teamPath = [], this.teamNode = null, this.teamSelected = [])
        },
        loadList(e) {
          this.$axiosAction("/api/teacher/basic/student.api", {
            action: "queryListForAssignNoPaging",
            menu_id: this.menuId,
            permit_mode: this.permitMode,
            grade_no: e.grade_no,
            class_no: e.target_no
          }).then((e => {
            0 === e.data.code && (this.list = e.data.list, this.selected = this.assignedData.reduce(((e, t) => "user" === t.target_level && this.list.find((e => e.login_name === t.target_no)) ? e.concat(this.list.find((e => e.login_name === t.target_no))) : e), []))
          })).catch((e => {
            this.list = [], this.selected = []
          }))
        },
        removeData(e) {
          if (q.indexOf(e.target_level) >= 0) {
            const t = this.assignedData.findIndex((t => t.target_level === e.target_level && t.target_no === e.target_no && t.grade_no === e.grade_no)),
              i = this.findNodeByKey(this.treeDatas[0] || {}, e.grade_no + "_" + e.target_level + "_" + e.target_no);
            if (i) {
              const e = this.teamSelected.findIndex((e => e.node_key === i.node_key));
              e >= 0 && this.teamSelected.splice(e, 1), this.unselectAllChildren(i)
            }
            this.assignedData.splice(t, 1)
          } else if ("user" === e.target_level) {
            let t = this.selected.findIndex((t => t.login_name === e.target_no));
            t >= 0 && this.selected.splice(t, 1), t = this.assignedData.findIndex((t => t.target_level === e.target_level && t.target_no === e.target_no)), this.assignedData.splice(t, 1)
          } else if ("group" === e.target_level) {
            let t = this.groupSelected.findIndex((t => t.id === e.target_no));
            t >= 0 && this.groupSelected.splice(t, 1), t = this.assignedData.findIndex((t => t.target_level === e.target_level && t.target_no === e.target_no)), this.assignedData.splice(t, 1)
          }
        },
        selectUser(e) {
          if (this.selected.findIndex((t => t.login_name === e.login_name)) >= 0) this.assignedData.findIndex((t => "user" === t.target_level && t.target_no === e.login_name)) < 0 && (this.assignedData = this.assignedData.concat({
            target_level: "user",
            target_no: e.login_name,
            target_name: e.name
          }));
          else {
            const t = this.assignedData.findIndex((t => "user" === t.target_level && t.target_no === e.login_name));
            t >= 0 && this.assignedData.splice(t, 1)
          }
        },
        removeAll() {
          this.tab = "team", this.assignedData = [], this.selected = [], this.teamSelected = [], this.groupSelected = []
        },
        setSchoolRollStatusName(e) {
          e.school_roll_status && e.school_roll_status.length > 0 ? e.school_roll_status_name = this.schoolRollStatusList.reduce(((t, i) => e.school_roll_status.indexOf(i.value) >= 0 ? t.concat(i.label) : t), []).join(",") : e.school_roll_status_name = ""
        },
        setEducationLevelName(e) {
          e.education_level && e.education_level.length > 0 ? e.education_level_name = this.educationLevelList.reduce(((t, i) => e.education_level.indexOf(i.value) >= 0 ? t.concat(i.label) : t), []).join(",") : e.education_level_name = ""
        },
        expandNode(e) {
          this.teamPath = this.teamPath.concat(e), this.teamNode = e, e.children ? (this.list = [], this.selected = []) : this.loadList(e)
        },
        changeNavi(e) {
          const t = this.teamPath.findIndex((t => t.node_key === e.node_key));
          this.teamPath !== t + 1 && (this.teamPath.splice(t + 1, this.teamPath.length - (t + 1)), this.teamNode = e), e.children && (this.list = [], this.selected = [])
        },
        selectTeam(e) {
          this.teamSelected.findIndex((t => t.node_key === e.node_key)) >= 0 ? this.teamSelected = this.teamSelected.concat(this.selectAllChildren(e)).concat(this.selectParent(e)) : (this.unselectAllChildren(e), this.unselectParent(e)), this.assignedData = this.assignedData.reduce(((e, t) => q.indexOf(t.target_level) >= 0 && this.gradeNo === t.grade_no ? e : e.concat(t)), []).concat(this.treeDatas.reduce(((e, t) => e.concat(this.createAssignedTeam(t))), []))
        },
        findNodeByKey(e, t) {
          if (e.node_key === t) return e;
          if (e.children) {
            for (const i of e.children) {
              if (i.node_key === t) return i;
              if (i.children) {
                const e = this.findNodeByKey(i, t);
                if (e) return e
              }
            }
            return null
          }
          return null
        },
        findParentOfNode(e, t) {
          for (const i of e.children) {
            if (i.node_key === t) return e;
            if (i.children) {
              const e = this.findParentOfNode(i, t);
              if (e) return e
            }
          }
          return null
        },
        selectParent(e) {
          const t = this.findParentOfNode(this.treeDatas[0], e.node_key);
          return t && t.children.reduce(((t, i) => this.teamSelected.findIndex((t => t.node_key === i.node_key && i.node_key !== e.node_key)) >= 0 ? t + 1 : t), 0) === t.children.length - 1 ? [t].concat(this.selectParent(t)) : []
        },
        selectAllChildren(e) {
          return e.children ? e.children.reduce(((e, t) => this.teamSelected.findIndex((e => e.node_key === t.node_key)) >= 0 ? e : e.concat(t).concat(this.selectAllChildren(t))), []) : []
        },
        unselectParent(e) {
          const t = this.findParentOfNode(this.treeDatas[0], e.node_key);
          if (t) {
            const e = this.teamSelected.findIndex((e => e.node_key === t.node_key));
            e >= 0 && (this.teamSelected.splice(e, 1), this.unselectParent(t))
          }
        },
        unselectAllChildren(e) {
          if (e.children)
            for (const t of e.children) {
              const e = this.teamSelected.findIndex((e => e.node_key === t.node_key));
              e >= 0 && this.teamSelected.splice(e, 1), this.unselectAllChildren(t)
            }
        },
        createAssignedTeam(e) {
          return this.teamSelected.findIndex((t => t.node_key === e.node_key)) >= 0 ? [{
            target_level: e.target_level,
            target_no: e.target_no,
            grade_no: e.grade_no,
            target_name: e.target_name,
            grade_name: e.grade_name
          }] : e.children ? e.children.reduce(((e, t) => e.concat(this.createAssignedTeam(t))), []) : []
        },
        openImportDialog() {
          this.importDialog = !0, this.studentsModel = "", this.importErrorMessage = ""
        },
        importStudents() {
          var e = new RegExp(/.*["'`^~&+%?*@#!=()|{}.,:;<> /\\]{1,}.*/);
          if (e.test(this.studentsModel)) return void this.$showErrorNotify("粘贴的内容中包含非法字符");
          if (0 === this.studentsModel.replace(/(\r\n)/g, /\n/).replace(/\n/g, "").length) return void this.$showErrorNotify("请粘贴有效数据");
          const t = this.studentsModel.replace(/(\r\n)/g, /\n/).split(/\n/).reduce(((e, t) => t || 0 === t ? e.concat(t) : e), []),
            i = t.length;
          this.importCompConfig = ["/api/teacher/basic/student.api", "queryImportedListForAssign", {
            menu_id: this.menuId,
            permit_mode: this.permitMode
          }, "students", t.reduce(((e, t) => e.concat(t)), []), () => {
            this.afterImportStudents(i, t)
          }, () => {
            this.afterImportStudents(i, t)
          }, null, e => {
            for (const i of e.list) {
              if (this.assignedData.findIndex((e => "user" === e.target_level && e.target_no === i.login_name)) < 0) {
                this.assignedData = this.assignedData.concat({
                  target_level: "user",
                  target_no: i.login_name,
                  target_name: i.name
                });
                const e = this.list.find((e => e.login_name === i.login_name));
                e && (this.selected = this.selected.concat(e))
              }
              t.splice(t.findIndex((e => e === i.login_name)), 1)
            }
          }]
        },
        afterImportStudents(e, t) {
          t && 0 !== t.length ? (this.importErrorMessage = `本次共计${e}名学生，其中${e-t.length}人已设置完毕，另有${t.length}名学生学号不存在或您无权设置，具体学号名单如上，请核准后重新操作。`, this.studentsModel = t.reduce(((e, t) => e ? e + "\n" + t : t), "")) : this.importDialog = !1
        },
        selectGroup() {
          this.assignedData = this.assignedData.reduce(((e, t) => "group" === t.target_level ? e : e.concat(t)), []).concat(this.groupSelected.reduce(((e, t) => e.concat({
            target_level: "group",
            target_no: t.id,
            target_name: t.title
          })), []))
        }
      }
    },
    L = C,
    V = i("1c1c"),
    D = i("3b73"),
    S = i("66e5"),
    P = i("0016"),
    N = i("0170"),
    I = i("429b"),
    M = i("7460"),
    R = i("ddd8"),
    $ = i("ead5"),
    O = i("079e"),
    A = i("8f8e"),
    Q = i("0378"),
    z = Object(m["a"])(L, a, s, !1, null, null, null);
  t["a"] = z.exports;
  x()(z, "components", {
    QList: V["a"],
    QExpansionItem: D["a"],
    QItemSection: y["a"],
    QItem: S["a"],
    QIcon: P["a"],
    QItemLabel: N["a"],
    QTabs: I["a"],
    QTab: M["a"],
    QSelect: R["a"],
    QBreadcrumbs: $["a"],
    QBreadcrumbsEl: O["a"],
    QCheckbox: A["a"],
    QDialog: f["a"],
    QCard: p["a"],
    QCardSection: h["a"],
    QForm: Q["a"],
    QInput: v["a"],
    QBtn: _["a"]
  })
}
