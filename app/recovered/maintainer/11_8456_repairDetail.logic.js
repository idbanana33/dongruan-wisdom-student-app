/**
 * Webpack module logic recovery
 * Source: assets/www/js/11.js -> module "8456"
 * Route: /maintainer/detail
 * Component guess: repairDetail
 * Fidelity: exact module body, beautified only (webpack wrapper retained)
 * Note: variable names inside the original production module are preserved as evidence.
 */
8456: function(t, s, a) {
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
        staticClass: "full-width q-mb-md text-left text-weight-bold"
      }, [a("span", {
        staticClass: "q-mr-sm",
        staticStyle: {
          "font-size": "1.3em"
        }
      }, [t._v("报修信息")]), a("q-chip", {
        attrs: {
          square: "",
          color: "grey-4",
          "text-color": "black",
          size: "sm"
        }
      }, [t._v("\n              " + t._s(t.details.statusinfo) + "\n            ")])], 1), a("div", {
        staticClass: "full-width"
      }, [a("span", {
        staticClass: "text-grey neu-css-after-colon"
      }, [t._v("姓名")]), a("span", [t._v(t._s(t.details.name))])]), a("div", {
        staticClass: "full-width q-mt-sm"
      }, [a("span", {
        staticClass: "text-grey neu-css-after-colon"
      }, [t._v("学号")]), a("span", [t._v(t._s(t.details.student_no))])]), a("div", {
        staticClass: "full-width q-mt-sm"
      }, [a("span", {
        staticClass: "text-grey neu-css-after-colon"
      }, [t._v("学院")]), a("span", [t._v(t._s(t.details.dep_name))])]), a("div", {
        staticClass: "full-width q-mt-sm"
      }, [a("span", {
        staticClass: "text-grey neu-css-after-colon"
      }, [t._v("联系电话")]), a("span", [t._v(t._s(t.details.mob))])]), a("div", {
        staticClass: "full-width q-mt-sm"
      }, [a("span", {
        staticClass: "text-grey neu-css-after-colon"
      }, [t._v("报修时间")]), a("span", [t._v(t._s(t.details.repair_time))])]), a("div", {
        staticClass: "full-width q-mt-sm"
      }, [a("span", {
        staticClass: "text-grey neu-css-after-colon"
      }, [t._v("报修类型")]), a("span", [t._v(t._s(t.details.repair_type_name))])]), a("div", {
        staticClass: "full-width q-mt-sm"
      }, [a("span", {
        staticClass: "text-grey neu-css-after-colon"
      }, [t._v("报修区域")]), a("span", [t._v(t._s(t.details.repair_range_name))])]), a("div", {
        staticClass: "full-width q-mt-sm"
      }, [a("span", {
        staticClass: "text-grey neu-css-after-colon"
      }, [t._v("详细地点")]), a("span", [t._v(t._s(t.details.address))])]), a("div", {
        staticClass: "full-width q-mt-sm"
      }, [a("span", {
        staticClass: "text-grey neu-css-after-colon"
      }, [t._v("故障类型")]), a("span", [t._v(t._s(t.details.fault_type_name))])]), a("div", {
        staticClass: "full-width q-mt-sm"
      }, [a("span", {
        staticClass: "text-grey neu-css-after-colon"
      }, [t._v("故障描述")]), a("span", [t._v(t._s(t.details.description))])]), a("div", {
        staticClass: "full-width q-mt-sm"
      }, [a("span", {
        staticClass: "text-grey neu-css-after-colon"
      }, [t._v("期望上门时间")]), a("span", [t._v(t._s(t.details.visit_time))])]), t.details.attachment && 0 != t.details.attachment.length ? a("div", {
        staticClass: "col-12 q-mt-sm"
      }, [a("span", {
        staticClass: "text-grey neu-css-after-colon"
      }, [t._v("故障附件")]), a("div", {
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
      })), 0)]) : t._e()])], 1), "0" !== t.details.status && "6" !== t.details.status ? a("q-card", {
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
        staticClass: "full-width q-mb-md text-left text-weight-bold"
      }, [a("span", {
        staticClass: "q-mr-sm",
        staticStyle: {
          "font-size": "1.3em"
        }
      }, [t._v("维修进度")])]), "1" == t.details.status ? a("div", {
        staticClass: "full-width"
      }, [a("span", {
        staticClass: "text-grey neu-css-after-colon"
      }, [t._v("分配维修人员")]), a("span", [t._v(t._s(t.details.maintainer_name))])]) : t._e(), "1" == t.details.status && null != t.details.opinion && t.details.opinion.length > 0 ? a("div", {
        staticClass: "full-width"
      }, [a("span", {
        staticClass: "text-grey neu-css-after-colon"
      }, [t._v("驳回时间")]), a("span", [t._v(t._s(t.details.review_time))])]) : t._e(), "1" == t.details.status && null != t.details.opinion && t.details.opinion.length > 0 ? a("div", {
        staticClass: "full-width"
      }, [a("span", {
        staticClass: "text-grey neu-css-after-colon"
      }, [t._v("驳回原因")]), a("span", [t._v(t._s(t.details.opinion))])]) : t._e(), "2" == t.details.status || "4" == t.details.status || "5" == t.details.status ? a("div", {
        staticClass: "full-width"
      }, [a("span", {
        staticClass: "text-grey neu-css-after-colon"
      }, [t._v("维修人员")]), a("span", [t._v(t._s(t.details.maintainer_name))])]) : t._e(), "3" == t.details.status ? a("div", {
        staticClass: "full-width q-mt-sm"
      }, [a("span", {
        staticClass: "text-grey neu-css-after-colon"
      }, [t._v("原维修人员")]), a("span", [t._v(t._s(t.details.maintainer_name))])]) : t._e(), "3" == t.details.status ? a("div", {
        staticClass: "full-width q-mt-sm"
      }, [a("span", {
        staticClass: "text-grey neu-css-after-colon"
      }, [t._v("改派人员")]), a("span", [t._v(t._s(t.details.new_maintainer_name))])]) : t._e(), "3" == t.details.status ? a("div", {
        staticClass: "full-width q-mt-sm"
      }, [a("span", {
        staticClass: "text-grey neu-css-after-colon"
      }, [t._v("改派原因")]), a("span", [t._v(t._s(t.details.reason))])]) : t._e(), "3" == t.details.status ? a("div", {
        staticClass: "full-width q-mt-sm"
      }, [a("span", {
        staticClass: "text-grey neu-css-after-colon"
      }, [t._v("改派时间")]), a("span", [t._v(t._s(t.details.alter_time))])]) : t._e(), "1" != t.details.status && "3" != t.details.status ? a("div", {
        staticClass: "full-width q-mt-sm"
      }, [a("span", {
        staticClass: "text-grey neu-css-after-colon"
      }, [t._v("接单时间")]), a("span", [t._v(t._s(t.details.order_receiving_time))])]) : t._e(), "4" == t.details.status || "5" == t.details.status ? a("div", {
        staticClass: "row full-width"
      }, [a("div", {
        staticClass: "full-width q-mt-sm"
      }, [a("span", {
        staticClass: "text-grey neu-css-after-colon"
      }, [t._v("维修完成时间")]), a("span", [t._v(t._s(t.details.completion_time))])]), a("div", {
        staticClass: "full-width q-mt-sm"
      }, [a("span", {
        staticClass: "text-grey neu-css-after-colon"
      }, [t._v("故障类型")]), a("span", [t._v(t._s(t.details.fault_type_name))])]), a("div", {
        staticClass: "full-width q-mt-sm"
      }, [a("span", {
        staticClass: "text-grey neu-css-after-colon"
      }, [t._v("维修描述")]), a("span", [t._v(t._s(t.details.repair_description))])]), t.details.repair_attachments && 0 != t.details.repair_attachments.length ? a("div", {
        staticClass: "col-12 q-mt-sm"
      }, [a("span", {
        staticClass: "text-grey neu-css-after-colon"
      }, [t._v("维修附件")]), a("div", {
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
        staticClass: "row full-width"
      }, [a("div", {
        staticClass: "full-width q-mt-sm"
      }, [a("span", {
        staticClass: "text-grey neu-css-after-colon"
      }, [t._v("本次维修满意度星级评分")]), a("p", [a("q-rating", {
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
        staticClass: "full-width q-mt-sm"
      }, [a("span", {
        staticClass: "text-grey neu-css-after-colon"
      }, [t._v("意见反馈")]), a("p", [a("span", [t._v(t._s(t.details.evaluate))])])])]) : t._e()])], 1) : t._e()], 1)], 1)], 1)
    },
    i = [],
    l = {
      name: "repairDetail",
      data() {
        return {
          serverUrl: window.localStorage.server,
          details: {}
        }
      },
      destroyed() {
        window.removeEventListener("popstate", this.goBack, !1)
      },
      mounted() {
        this.loadInfo(), window.history && window.history.pushState && (history.pushState(null, null, document.URL), window.addEventListener("popstate", this.goBack, !1))
      },
      methods: {
        goBack() {
          this.$router.push("/maintainer/repairList")
        },
        loadInfo() {
          this.$axiosAction("/api/teacher/basic/maintainer.api", {
            action: "queryMaintainerDetailInfo",
            id: this.$route.query.id
          }).then((t => {
            this.details = t.data.info
          }))
        }
      }
    },
    n = l,
    r = a("2877"),
    c = a("4d5a"),
    d = a("e359"),
    o = a("65c6"),
    _ = a("9c40"),
    u = a("6ac5"),
    p = a("09e3"),
    v = a("9989"),
    m = a("f09f"),
    f = a("a370"),
    h = a("b047"),
    w = a("068f"),
    C = a("6ac0"),
    y = a("daf4"),
    g = a("eebe"),
    x = a.n(g),
    q = Object(r["a"])(n, e, i, !1, null, null, null);
  s["default"] = q.exports;
  x()(q, "components", {
    QLayout: c["a"],
    QHeader: d["a"],
    QToolbar: o["a"],
    QBtn: _["a"],
    QToolbarTitle: u["a"],
    QPageContainer: p["a"],
    QPage: v["a"],
    QCard: m["a"],
    QCardSection: f["a"],
    QChip: h["a"],
    QImg: w["a"],
    QVideo: C["a"],
    QRating: y["a"]
  })
}
