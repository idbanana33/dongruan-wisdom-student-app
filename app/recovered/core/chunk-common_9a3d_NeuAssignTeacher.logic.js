/**
 * Webpack module logic recovery
 * Source: assets/www/js/chunk-common.js -> module "9a3d"
 * Route: (shared/core)
 * Component guess: NeuAssignTeacher
 * Fidelity: exact module body, beautified only (webpack wrapper retained)
 * Note: variable names inside the original production module are preserved as evidence.
 */
"9a3d": function(e, t, i) {
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
      })), e._l(e.roleData, (function(t) {
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
      })), e._l(e.userData, (function(t) {
        return i("q-item", {
          key: t.target_level + t.target_no
        }, [i("q-item-section", [i("q-item-label", [e._v(e._s(t.target_name))]), i("q-item-label", {
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
      }), i("q-tab", {
        attrs: {
          name: "role",
          label: "角色"
        }
      })], 1), i("q-breadcrumbs", {
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
            label: t.target_name
          },
          on: {
            click: function(i) {
              return e.changeNavi(t)
            }
          }
        })
      })), 1), i("div", {
        directives: [{
          name: "show",
          rawName: "v-show",
          value: "team" == e.tab && (!e.treeDatas || 0 == e.treeDatas.length),
          expression: "tab == 'team' && (!treeDatas || treeDatas.length == 0)"
        }],
        staticClass: "text-center text-grey"
      }, [e._v("暂无组织架构数据")]), i("q-list", {
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
      })], 1), i("q-item-section", [e._v(e._s((e.teamNode || {}).target_name))])], 1) : e._e(), e._l((e.teamNode || {}).children, (function(t) {
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
        })], 1), i("q-item-section", [e._v(e._s(t.target_name))]), i("q-item-section", {
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
        }, [e._v(e._s(t.login_name) + " " + e._s(t.sex_name) + " " + e._s(t.role_name))])], 1)], 1)
      })), 1), i("q-list", {
        directives: [{
          name: "show",
          rawName: "v-show",
          value: "role" == e.tab,
          expression: "tab == 'role'"
        }],
        attrs: {
          bordered: "",
          separator: ""
        }
      }, e._l(e.roleList, (function(t) {
        return i("q-item", {
          key: t.role_id
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
            input: e.selectRole
          },
          model: {
            value: e.roleSelected,
            callback: function(t) {
              e.roleSelected = t
            },
            expression: "roleSelected"
          }
        })], 1), i("q-item-section", [e._v(e._s(t.role_name))])], 1)
      })), 1)], 1)
    },
    s = [];
  i("c975"), i("13d5"), i("a434"), i("ddb0");
  const l = ["all", "dep"];
  var o = {
      name: "NeuAssignTeacher",
      props: {
        value: null
      },
      data() {
        return {
          tab: "team",
          assignedData: [],
          treeDatas: [],
          teamNode: null,
          teamSelected: [],
          teamPath: [],
          roleList: [],
          roleSelected: [],
          list: [],
          selected: []
        }
      },
      mounted() {
        this.assignedData = this.value || [], this.$axiosAction("/api/teacher/basic/teacher.api", {
          action: "queryDepTree"
        }).then((e => {
          if (0 === e.data.code && (this.treeDatas = e.data.list, this.treeDatas && 0 !== this.treeDatas.length)) {
            this.teamPath = [this.treeDatas[0]], this.teamNode = this.treeDatas[0];
            for (const e of this.assignedData)
              if (l.indexOf(e.target_level) >= 0) {
                const t = this.findNodeByKey(this.treeDatas[0], "_" + e.target_level + "_" + e.target_no);
                t && (this.teamSelected = this.teamSelected.concat(t).concat(this.selectAllChildren(t)))
              }
          }
        })), this.$axiosAction("/api/teacher/basic/role.api", {
          action: "queryTeacherRoleList"
        }).then((e => {
          if (0 === e.data.code) {
            this.roleList = e.data.list;
            for (const e of this.assignedData)
              if ("role" === e.target_level) {
                const t = this.roleList.findIndex((t => t.role_id === e.target_no));
                t >= 0 && (this.roleSelected = this.roleSelected.concat(this.roleList[t]))
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
        roleData() {
          return this.assignedData.reduce(((e, t) => "role" === t.target_level ? e.concat(t) : e), [])
        },
        teamData() {
          return this.assignedData.reduce(((e, t) => l.indexOf(t.target_level) >= 0 ? e.concat(t) : e), [])
        }
      },
      methods: {
        loadList(e) {
          this.$axiosAction("/api/teacher/basic/teacher.api", {
            action: "queryListForAssignNoPaging",
            dep_no: e.target_no
          }).then((e => {
            0 === e.data.code && (this.list = e.data.list, this.selected = this.assignedData.reduce(((e, t) => "user" === t.target_level && this.list.find((e => e.login_name === t.target_no)) ? e.concat(this.list.find((e => e.login_name === t.target_no))) : e), []))
          })).catch((e => {
            this.list = [], this.selected = []
          }))
        },
        removeData(e) {
          if (l.indexOf(e.target_level) >= 0) {
            const t = this.assignedData.findIndex((t => t.target_level === e.target_level && t.target_no === e.target_no)),
              i = this.findNodeByKey(this.treeDatas[0] || {}, "_" + e.target_level + "_" + e.target_no);
            if (i) {
              const e = this.teamSelected.findIndex((e => e.node_key === i.node_key));
              e >= 0 && this.teamSelected.splice(e, 1), this.unselectAllChildren(i)
            }
            this.assignedData.splice(t, 1)
          } else if ("user" === e.target_level) {
            let t = this.selected.findIndex((t => t.login_name === e.target_no));
            t >= 0 && this.selected.splice(t, 1), t = this.assignedData.findIndex((t => t.target_level === e.target_level && t.target_no === e.target_no)), this.assignedData.splice(t, 1)
          } else if ("role" === e.target_level) {
            let t = this.roleSelected.findIndex((t => t.role_id === e.target_no));
            t >= 0 && this.roleSelected.splice(t, 1), t = this.assignedData.findIndex((t => t.target_level === e.target_level && t.target_no === e.target_no)), this.assignedData.splice(t, 1)
          }
        },
        removeAll() {
          this.assignedData = [], this.selected = [], this.roleSelected = [], this.teamSelected = []
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
        selectRole() {
          this.assignedData = this.assignedData.reduce(((e, t) => "role" === t.target_level ? e : e.concat(t)), []).concat(this.roleSelected.reduce(((e, t) => e.concat({
            target_level: "role",
            target_no: t.role_id,
            target_name: t.role_name
          })), []))
        },
        expandNode(e) {
          this.teamPath = this.teamPath.concat(e), this.teamNode = e, e.children ? (this.list = [], this.selected = []) : this.loadList(e)
        },
        changeNavi(e) {
          const t = this.teamPath.findIndex((t => t.node_key === e.node_key));
          this.teamPath !== t + 1 && (this.teamPath.splice(t + 1, this.teamPath.length - (t + 1)), this.teamNode = e), e.children && (this.list = [], this.selected = [])
        },
        selectTeam(e) {
          this.teamSelected.findIndex((t => t.node_key === e.node_key)) >= 0 ? this.teamSelected = this.teamSelected.concat(this.selectAllChildren(e)).concat(this.selectParent(e)) : (this.unselectAllChildren(e), this.unselectParent(e)), this.assignedData = this.assignedData.reduce(((e, t) => l.indexOf(t.target_level) >= 0 ? e : e.concat(t)), []).concat(this.treeDatas.reduce(((e, t) => e.concat(this.createAssignedTeam(t))), []))
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
            target_name: e.target_name
          }] : e.children ? e.children.reduce(((e, t) => e.concat(this.createAssignedTeam(t))), []) : []
        }
      }
    },
    n = o,
    r = i("2877"),
    c = i("1c1c"),
    u = i("3b73"),
    d = i("4074"),
    m = i("66e5"),
    f = i("0016"),
    p = i("0170"),
    h = i("429b"),
    y = i("7460"),
    g = i("ead5"),
    b = i("079e"),
    v = i("8f8e"),
    _ = i("eebe"),
    T = i.n(_),
    x = Object(r["a"])(n, a, s, !1, null, null, null);
  t["a"] = x.exports;
  T()(x, "components", {
    QList: c["a"],
    QExpansionItem: u["a"],
    QItemSection: d["a"],
    QItem: m["a"],
    QIcon: f["a"],
    QItemLabel: p["a"],
    QTabs: h["a"],
    QTab: y["a"],
    QBreadcrumbs: g["a"],
    QBreadcrumbsEl: b["a"],
    QCheckbox: v["a"]
  })
}
