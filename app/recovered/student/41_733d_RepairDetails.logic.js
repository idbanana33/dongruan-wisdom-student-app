/**
 * Webpack module logic recovery
 * Source: assets/www/js/41.js -> module "733d"
 * Route: /student/repair/detail
 * Component guess: RepairDetails
 * Fidelity: exact module body, beautified only (webpack wrapper retained)
 * Note: variable names inside the original production module are preserved as evidence.
 */
"733d": function(t, s, a) {
  "use strict";
  a.r(s);
  var e = function() {
      var t = this,
        s = t.$createElement,
        a = t._self._c || s;
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
          click: t.goBack
        }
      }), a("q-toolbar-title", [t._v("报修详情")])], 1)], 1), a("q-page-container", [a("q-page", {
        staticClass: "bg-grey-3"
      }, [a("q-card", {
        staticClass: "full-width row q-mt-sm",
        attrs: {
          flat: ""
        }
      }, [a("q-card-section", {
        staticClass: "full-width row justify-around",
        attrs: {
          avatar: ""
        }
      }, [a("div", {
        staticClass: "col-12 q-mb-md text-left text-weight-bold"
      }, [t._v("\n            报修信息\n            "), a("q-chip", {
        attrs: {
          square: "",
          color: "grey-4",
          "text-color": "black",
          size: "sm"
        }
      }, [t._v("\n              " + t._s(t.details.statusinfo) + "\n            ")])], 1), a("div", {
        staticClass: "col-12"
      }, [a("span", {
        staticClass: "text-grey"
      }, [t._v("姓名：")]), a("span", [t._v(t._s(t.details.name))])]), a("div", {
        staticClass: "col-12 q-mt-sm"
      }, [a("span", {
        staticClass: "text-grey"
      }, [t._v("学号：")]), a("span", [t._v(t._s(t.details.student_no))])]), a("div", {
        staticClass: "col-12 q-mt-sm"
      }, [a("span", {
        staticClass: "text-grey"
      }, [t._v("学院：")]), a("span", [t._v(t._s(t.details.dep_name))])]), a("div", {
        staticClass: "col-12 q-mt-sm"
      }, [a("span", {
        staticClass: "text-grey"
      }, [t._v("联系电话：")]), a("span", [t._v(t._s(t.details.mob))])]), a("div", {
        staticClass: "col-12 q-mt-sm"
      }, [a("span", {
        staticClass: "text-grey"
      }, [t._v("报修时间：")]), a("span", [t._v(t._s(t.details.repair_time))])]), a("div", {
        staticClass: "col-12 q-mt-sm"
      }, [a("span", {
        staticClass: "text-grey"
      }, [t._v("报修类型：")]), a("span", [t._v(t._s(t.details.repair_type_name))])]), a("div", {
        staticClass: "col-12 q-mt-sm"
      }, [a("span", {
        staticClass: "text-grey"
      }, [t._v("报修区域：")]), a("span", [t._v(t._s(t.details.repair_range_name))])]), a("div", {
        staticClass: "col-12 q-mt-sm"
      }, [a("span", {
        staticClass: "text-grey"
      }, [t._v("详细地点：")]), a("span", [t._v(t._s(t.details.address))])]), a("div", {
        staticClass: "col-12 q-mt-sm"
      }, [a("span", {
        staticClass: "text-grey"
      }, [t._v("故障类型：")]), a("span", [t._v(t._s(t.details.fault_type_name))])]), a("div", {
        staticClass: "col-12 q-mt-sm"
      }, [a("span", {
        staticClass: "text-grey"
      }, [t._v("故障描述：")]), a("span", [t._v(t._s(t.details.description))])]), a("div", {
        staticClass: "col-12 q-mt-sm"
      }, [a("span", {
        staticClass: "text-grey"
      }, [t._v("期望上门时间：")]), a("span", [t._v(t._s(t.details.visit_time))])]), t.details.attachment && 0 != t.details.attachment.length ? a("div", {
        staticClass: "col-12 q-mt-sm"
      }, [a("span", {
        staticClass: "text-grey"
      }, [t._v("故障附件：")]), a("div", {
        staticStyle: {
          display: "flex",
          "overflow-x": "auto",
          "white-space": "nowrap",
          width: "100%"
        }
      }, t._l(t.details.attachment, (function(s) {
        return a("div", {
          key: s.link,
          staticClass: "q-mt-sm",
          staticStyle: {
            "margin-right": "10px"
          }
        }, ["1" == s.type ? a("q-img", {
          staticStyle: {
            height: "150px",
            width: "150px"
          },
          attrs: {
            src: t.serverUrl + s.link,
            ratio: 1
          }
        }) : t._e(), "2" == s.type ? a("q-video", {
          staticStyle: {
            height: "150px",
            width: "150px"
          },
          attrs: {
            src: t.serverUrl + s.link,
            ratio: 16 / 9
          }
        }) : t._e()], 1)
      })), 0)]) : t._e()])], 1), "0" !== t.details.status && "3" !== t.details.status && "6" !== t.details.status ? a("q-card", {
        staticClass: "full-width row q-mt-sm",
        attrs: {
          flat: ""
        }
      }, [a("q-card-section", {
        staticClass: "full-width row justify-around",
        attrs: {
          avatar: ""
        }
      }, [a("div", {
        staticClass: "col-12 q-mb-md text-left text-weight-bold"
      }, [t._v("\n            维修进度\n          ")]), a("div", {
        staticClass: "col-12"
      }, ["1" == t.details.status ? a("span", {
        staticClass: "text-grey"
      }, [t._v("分配维修人员：")]) : a("span", {
        staticClass: "text-grey"
      }, [t._v("维修人员：")]), a("span", [t._v(t._s(t.details.maintainer_name))]), a("span", {
        staticClass: "text-blue",
        staticStyle: {
          "font-size": "11px",
          "margin-left": "5%"
        },
        on: {
          click: function(s) {
            return t.goMaintainerInfo(t.details.maintainer_no)
          }
        }
      }, [t._v("个人主页")])]), "1" != t.details.status ? a("div", {
        staticClass: "col-12 q-mt-sm"
      }, [a("span", {
        staticClass: "text-grey"
      }, [t._v("接单时间：")]), a("span", [t._v(t._s(t.details.order_receiving_time))])]) : t._e(), "4" == t.details.status || "5" == t.details.status ? a("div", {
        staticClass: "row col-12"
      }, [a("div", {
        staticClass: "col-12 q-mt-sm"
      }, [a("span", {
        staticClass: "text-grey"
      }, [t._v("维修完成时间：")]), a("span", [t._v(t._s(t.details.completion_time))])]), a("div", {
        staticClass: "col-12 q-mt-sm"
      }, [a("span", {
        staticClass: "text-grey"
      }, [t._v("故障类型：")]), a("span", [t._v(t._s(t.details.fault_type_name))])]), a("div", {
        staticClass: "col-12 q-mt-sm"
      }, [a("span", {
        staticClass: "text-grey"
      }, [t._v("维修描述：")]), a("span", [t._v(t._s(t.details.repair_description))])]), t.details.repair_attachments && 0 != t.details.repair_attachments.length ? a("div", {
        staticClass: "col-12 q-mt-sm"
      }, [a("span", {
        staticClass: "text-grey"
      }, [t._v("维修附件：")]), a("div", {
        staticStyle: {
          display: "flex",
          "overflow-x": "auto",
          "white-space": "nowrap",
          width: "100%"
        }
      }, t._l(t.details.repair_attachments, (function(s) {
        return a("div", {
          key: s.link,
          staticClass: "q-mt-sm",
          staticStyle: {
            "margin-right": "10px"
          }
        }, ["1" == s.type ? a("q-img", {
          staticStyle: {
            height: "150px",
            width: "150px"
          },
          attrs: {
            src: t.serverUrl + s.link,
            ratio: 1
          }
        }) : t._e(), "2" == s.type ? a("q-video", {
          staticStyle: {
            height: "150px",
            width: "150px"
          },
          attrs: {
            src: t.serverUrl + s.link,
            ratio: 16 / 9
          }
        }) : t._e()], 1)
      })), 0)]) : t._e()]) : t._e(), "5" == t.details.status ? a("div", {
        staticClass: "row col-12"
      }, [a("div", {
        staticClass: "col-12 q-mt-sm"
      }, [a("span", {
        staticClass: "text-grey"
      }, [t._v("本次维修满意度星级评分：")]), a("p", [a("q-rating", {
        attrs: {
          readonly: "",
          max: "5",
          size: "2.5em"
        },
        model: {
          value: t.details.mark,
          callback: function(s) {
            t.$set(t.details, "mark", s)
          },
          expression: "details.mark"
        }
      }), t._v("\n                " + t._s(t.details.mark) + "星\n              ")], 1)]), a("div", {
        staticClass: "col-12 q-mt-sm"
      }, [a("span", {
        staticClass: "text-grey"
      }, [t._v("意见反馈：")]), a("p", [a("span", [t._v(t._s(t.details.evaluate))])])])]) : t._e()])], 1) : t._e(), "3" == t.details.status ? a("q-card", {
        staticClass: "full-width row q-mt-sm",
        attrs: {
          flat: ""
        }
      }, [a("q-card-section", {
        staticClass: "full-width row justify-around",
        attrs: {
          avatar: ""
        }
      }, [a("div", {
        staticClass: "col-12 q-mb-md text-left text-weight-bold"
      }, [t._v("\n            维修进度\n          ")]), a("div", {
        staticClass: "col-12"
      }, [a("span", {
        staticClass: "text-grey"
      }, [t._v("原维修人员：")]), a("span", [t._v(t._s(t.details.original_maintainer_name))]), a("span", {
        staticClass: "text-blue",
        staticStyle: {
          "font-size": "11px",
          "margin-left": "5%"
        },
        on: {
          click: function(s) {
            return t.goMaintainerInfo(t.details.original_maintainer_no)
          }
        }
      }, [t._v("个人主页")])]), a("div", {
        staticClass: "col-12 q-mt-sm"
      }, [a("span", {
        staticClass: "text-grey"
      }, [t._v("改派人员：")]), a("span", [t._v(t._s(t.details.new_maintainer_name))]), a("span", {
        staticClass: "text-blue",
        staticStyle: {
          "font-size": "11px",
          "margin-left": "5%"
        },
        on: {
          click: function(s) {
            return t.goMaintainerInfo(t.details.new_maintainer_no)
          }
        }
      }, [t._v("个人主页")])]), a("div", {
        staticClass: "col-12 q-mt-sm"
      }, [a("span", {
        staticClass: "text-grey"
      }, [t._v("改派原因：")]), a("span", [t._v(t._s(t.details.reason))])]), a("div", {
        staticClass: "col-12 q-mt-sm"
      }, [a("span", {
        staticClass: "text-grey"
      }, [t._v("改派时间：")]), a("span", [t._v(t._s(t.details.alter_time))])])])], 1) : t._e(), "6" == t.details.status ? a("q-card", {
        staticClass: "full-width row q-mt-sm",
        attrs: {
          flat: ""
        }
      }, [a("q-card-section", {
        staticClass: "full-width row justify-around",
        attrs: {
          avatar: ""
        }
      }, [a("div", {
        staticClass: "col-12 q-mb-md text-left text-weight-bold"
      }, [t._v("\n            维修进度\n          ")]), a("div", {
        staticClass: "col-12"
      }, [a("span", {
        staticClass: "text-grey"
      }, [t._v("退回原因：")]), a("span", [t._v(t._s(t.details.opinion))])]), a("div", {
        staticClass: "col-12 q-mt-sm"
      }, [a("span", {
        staticClass: "text-grey"
      }, [t._v("退回时间：")]), a("span", [t._v(t._s(t.details.review_time))])])])], 1) : t._e(), "4" == t.details.status ? a("q-footer", {
        staticClass: "bg-white text-primary",
        attrs: {
          bordered: ""
        }
      }, [a("div", {
        staticClass: "row justify-center"
      }, [a("q-btn", {
        staticClass: "bg-primary",
        staticStyle: {
          width: "100%",
          height: "2.8rem"
        },
        attrs: {
          flat: "",
          unelevated: "",
          color: "white",
          label: "评价"
        },
        on: {
          click: t.goEvaluate
        }
      })], 1)]) : t._e()], 1)], 1)], 1)
    },
    i = [],
    l = {
      name: "RepairDetails",
      components: {},
      data() {
        return {
          serverUrl: window.localStorage.server,
          details: {},
          userInfo: JSON.parse(window.localStorage.getItem("userinfo"))
        }
      },
      computed: {},
      destroyed() {
        window.removeEventListener("popstate", this.goBack, !1)
      },
      mounted() {
        this.loadInfo(), window.history && window.history.pushState && (history.pushState(null, null, document.URL), window.addEventListener("popstate", this.goBack, !1))
      },
      methods: {
        goBack() {
          this.$router.push("/student/repair/index")
        },
        loadInfo() {
          this.$axiosAction("/api/student/repair/repair.api", {
            action: "queryForRepairInfo",
            id: this.$route.query.repair_id
          }).then((t => {
            this.details = t.data.info
          }))
        },
        goEvaluate() {
          this.$router.push(`/student/repair/evaluate?repair_id=${this.details.id}`)
        },
        goMaintainerInfo(t) {
          this.$router.push(`/student/repair/maintainerInfo?repair_id=${this.details.id}&no=${t}`)
        }
      }
    },
    r = l,
    n = a("2877"),
    c = a("4d5a"),
    o = a("e359"),
    d = a("65c6"),
    _ = a("9c40"),
    p = a("6ac5"),
    v = a("09e3"),
    m = a("9989"),
    u = a("f09f"),
    C = a("a370"),
    g = a("b047"),
    h = a("068f"),
    y = a("6ac0"),
    f = a("daf4"),
    x = a("7ff0"),
    w = a("eebe"),
    q = a.n(w),
    b = Object(n["a"])(r, e, i, !1, null, null, null);
  s["default"] = b.exports;
  q()(b, "components", {
    QLayout: c["a"],
    QHeader: o["a"],
    QToolbar: d["a"],
    QBtn: _["a"],
    QToolbarTitle: p["a"],
    QPageContainer: v["a"],
    QPage: m["a"],
    QCard: u["a"],
    QCardSection: C["a"],
    QChip: g["a"],
    QImg: h["a"],
    QVideo: y["a"],
    QRating: f["a"],
    QFooter: x["a"]
  })
}
