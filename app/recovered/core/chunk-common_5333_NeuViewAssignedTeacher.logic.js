/**
 * Webpack module logic recovery
 * Source: assets/www/js/chunk-common.js -> module "5333"
 * Route: (shared/core)
 * Component guess: NeuViewAssignedTeacher
 * Fidelity: exact module body, beautified only (webpack wrapper retained)
 * Note: variable names inside the original production module are preserved as evidence.
 */
5333: function(e, t, i) {
  "use strict";
  var a = function() {
      var e = this,
        t = e.$createElement,
        i = e._self._c || t;
      return i("q-list", {
        attrs: {
          separator: ""
        }
      }, [e._l(e.teamData, (function(t) {
        return i("q-item", {
          key: t.target_level + t.target_no
        }, [i("q-item-section", [e._v(e._s(t.target_name))])], 1)
      })), e._l(e.roleData, (function(t) {
        return i("q-item", {
          key: t.target_level + t.target_no
        }, [i("q-item-section", [e._v(e._s(t.target_name))])], 1)
      })), e._l(e.userData, (function(t) {
        return i("q-item", {
          key: t.target_level + t.target_no
        }, [i("q-item-section", [i("q-item-label", [e._v(e._s(t.target_name))]), i("q-item-label", {
          attrs: {
            caption: ""
          }
        }, [e._v(e._s(t.target_no))])], 1)], 1)
      })), i("q-item", {
        directives: [{
          name: "show",
          rawName: "v-show",
          value: e.hideFlag,
          expression: "hideFlag"
        }]
      }, [i("q-item-section", {
        on: {
          click: function(t) {
            e.hideFlag = !1
          }
        }
      }, [e._v("共" + e._s(e.assignedData.length) + "个对象，"), i("span", {
        staticClass: "text-primary"
      }, [e._v("点击")]), e._v("显示全部。")])], 1)], 2)
    },
    s = [];
  i("c975"), i("13d5");
  const l = ["all", "dep"],
    o = 20;
  var n = {
      name: "NeuViewAssignedTeacher",
      props: {
        value: null
      },
      data() {
        return {
          assignedData: [],
          hideFlag: !0
        }
      },
      mounted() {
        this.assignedData = this.value || [], this.hideFlag = this.assignedData.length > o
      },
      watch: {
        value(e) {
          this.assignedData = e || [], this.hideFlag = this.assignedData.length > o
        }
      },
      computed: {
        userData() {
          return this.hideFlag ? [] : this.assignedData.reduce(((e, t) => "user" === t.target_level ? e.concat(t) : e), [])
        },
        roleData() {
          return this.hideFlag ? [] : this.assignedData.reduce(((e, t) => "role" === t.target_level ? e.concat(t) : e), [])
        },
        teamData() {
          return this.hideFlag ? [] : this.assignedData.reduce(((e, t) => l.indexOf(t.target_level) >= 0 ? e.concat(t) : e), [])
        }
      },
      methods: {}
    },
    r = n,
    c = i("2877"),
    u = i("1c1c"),
    d = i("66e5"),
    m = i("4074"),
    f = i("0170"),
    p = i("eebe"),
    h = i.n(p),
    y = Object(c["a"])(r, a, s, !1, null, null, null);
  t["a"] = y.exports;
  h()(y, "components", {
    QList: u["a"],
    QItem: d["a"],
    QItemSection: m["a"],
    QItemLabel: f["a"]
  })
}
