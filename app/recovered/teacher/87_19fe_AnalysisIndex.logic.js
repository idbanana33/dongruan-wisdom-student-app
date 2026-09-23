/**
 * Webpack module logic recovery
 * Source: assets/www/js/87.js -> module "19fe"
 * Route: /teacher/message/index
 * Component guess: AnalysisIndex
 * Fidelity: exact module body, beautified only (webpack wrapper retained)
 * Note: variable names inside the original production module are preserved as evidence.
 */
"19fe": function(e, t, a) {
  "use strict";
  a.r(t);
  var o = function() {
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
      }), a("q-toolbar-title", [e._v(e._s((e.menuInfo || {}).title))])], 1)], 1), a("q-page-container", [a("q-page", {
        staticClass: "bg-grey-3 q-pb-sm"
      }, ["A" == e.role_id || "M" == e.role_id || "D" == e.role_id ? a("q-card", {
        staticClass: "bg-white q-mb-sm q-mx-sm q-py-md",
        attrs: {
          flat: ""
        },
        on: {
          click: function(t) {
            return e.moveTo("/teacher/message/messageIndex")
          }
        }
      }, [a("q-item", [a("q-item-section", {
        attrs: {
          avatar: ""
        }
      }, [a("q-item-label", [a("q-icon", {
        attrs: {
          size: "sm",
          name: e.menuInfo.icon,
          color: e.menuInfo.color.background
        }
      })], 1)], 1), a("q-item-section", [a("q-item-label", {
        staticStyle: {
          "font-size": "1.01rem"
        }
      }, [e._v("\n            教师信息收集管理\n          ")]), a("q-item-label", {
        attrs: {
          caption: ""
        }
      }, [e._v("\n            管理教师信息收集的数据\n          ")])], 1), a("q-item-section", {
        attrs: {
          side: ""
        }
      }, [a("q-item-label", [a("q-icon", {
        attrs: {
          name: "keyboard_arrow_right",
          size: "sm"
        }
      })], 1)], 1)], 1)], 1) : e._e(), a("q-card", {
        staticClass: "bg-white q-mb-sm q-mx-sm q-py-md",
        attrs: {
          flat: ""
        },
        on: {
          click: function(t) {
            return e.moveTo("/teacher/message/message")
          }
        }
      }, [a("q-item", [a("q-item-section", {
        attrs: {
          avatar: ""
        }
      }, [a("q-item-label", [a("q-icon", {
        attrs: {
          size: "sm",
          name: e.menuInfo.icon,
          color: e.menuInfo.color.background
        }
      })], 1)], 1), a("q-item-section", [a("q-item-label", {
        staticStyle: {
          "font-size": "1.01rem"
        }
      }, [e._v("\n            教师信息收集填报\n          ")]), a("q-item-label", {
        attrs: {
          caption: ""
        }
      }, [e._v("\n            需要进行填报的教师信息收集\n          ")])], 1), a("q-item-section", {
        attrs: {
          side: ""
        }
      }, [a("q-item-label", [a("q-icon", {
        attrs: {
          name: "keyboard_arrow_right",
          size: "sm"
        }
      })], 1)], 1)], 1)], 1)], 1)], 1)], 1)
    },
    n = [],
    s = {
      name: "AnalysisIndex",
      data() {
        return {
          role_id: JSON.parse(localStorage.getItem("userinfo")).role_id
        }
      },
      destroyed() {
        window.removeEventListener("popstate", this.goBack, !1)
      },
      mounted() {
        window.history && window.history.pushState && (history.pushState(null, null, document.URL), window.addEventListener("popstate", this.goBack, !1)), this.loadList(null)
      },
      computed: {
        menuInfo() {
          return window.localStorage.getItem("menu") ? JSON.parse(window.localStorage.getItem("menu")).find((e => "message" === e.id)) : null
        }
      },
      methods: {
        goBack() {
          this.$router.push("/teacher/index")
        },
        moveTo(e) {
          e && this.$router.push(e)
        }
      }
    },
    i = s,
    r = a("2877"),
    l = a("4d5a"),
    m = a("e359"),
    c = a("65c6"),
    d = a("9c40"),
    u = a("6ac5"),
    q = a("09e3"),
    b = a("9989"),
    g = a("f09f"),
    p = a("66e5"),
    f = a("4074"),
    h = a("0170"),
    w = a("0016"),
    _ = a("eebe"),
    v = a.n(_),
    y = Object(r["a"])(i, o, n, !1, null, null, null);
  t["default"] = y.exports;
  v()(y, "components", {
    QLayout: l["a"],
    QHeader: m["a"],
    QToolbar: c["a"],
    QBtn: d["a"],
    QToolbarTitle: u["a"],
    QPageContainer: q["a"],
    QPage: b["a"],
    QCard: g["a"],
    QItem: p["a"],
    QItemSection: f["a"],
    QItemLabel: h["a"],
    QIcon: w["a"]
  })
}
