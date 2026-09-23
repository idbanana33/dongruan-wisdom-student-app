/**
 * Webpack module logic recovery
 * Source: assets/www/js/37.js -> module "5e52"
 * Route: /student/process/detail
 * Component guess: processDetails
 * Fidelity: exact module body, beautified only (webpack wrapper retained)
 * Note: variable names inside the original production module are preserved as evidence.
 */
"5e52": function(e, t, s) {
  "use strict";
  s.r(t);
  var o = function() {
      var e = this,
        t = e.$createElement,
        s = e._self._c || t;
      return s("q-layout", {
        attrs: {
          view: "lHh lpr lFf"
        }
      }, [s("q-header", {
        staticClass: "bg-grey-3 text-black"
      }, [s("q-toolbar", [s("q-btn", {
        attrs: {
          flat: "",
          round: "",
          dense: "",
          icon: "keyboard_arrow_left"
        },
        on: {
          click: e.goBack
        }
      }), s("q-toolbar-title", [e._v(e._s(e.menuInfo.title) + "申请详情")])], 1)], 1), s("q-page-container", [s("q-page", {
        staticClass: "bg-grey-3"
      }, [s("q-card", {
        staticClass: "full-width row",
        attrs: {
          flat: ""
        }
      }, [s("q-card-section", {
        staticClass: "full-width row justify-center text-white",
        class: "bg-" + e.color,
        staticStyle: {
          height: "4rem",
          "font-size": "1.5rem"
        }
      }, [s("q-icon", {
        directives: [{
          name: "show",
          rawName: "v-show",
          value: "W" != e.record.review_status,
          expression: "record.review_status != 'W'"
        }],
        attrs: {
          name: "A" == e.record.review_status ? "done" : "clear",
          size: "2rem"
        }
      }), e._v(e._s("W" == e.record.review_status ? "审批中" : "A" == e.record.review_status ? "审批通过" : "审批驳回") + "\n        ")], 1), s("q-card-section", {
        staticClass: "full-width row"
      }, [s("div", {
        staticClass: "text-left"
      }, [s("span", {
        staticClass: "text-grey"
      }, [e._v("流程名称：")]), s("span", [e._v(e._s(e.record.process_type_name))])]), s("div", {
        staticClass: "col-12 q-mt-sm"
      }, [s("span", {
        staticClass: "text-grey"
      }, [e._v("申请学生：")]), s("span", [e._v(e._s(e.userinfo.name) + "(" + e._s(e.userinfo.login_name) + ")")]), s("q-btn", {
        staticClass: "absolute-top-right q-mr-mb q-mt-sm",
        staticStyle: {
          color: "red",
          "z-index": "100",
          "margin-right": "8px"
        },
        attrs: {
          outline: "",
          size: "sm",
          color: "negative",
          label: "撤回"
        },
        on: {
          click: e.deleteProcess
        }
      })], 1)])], 1), s("q-form", {
        on: {
          submit: e.saveProcess
        }
      }, [s("q-card", {
        staticClass: "full-width row q-mt-sm",
        attrs: {
          flat: ""
        }
      }, [s("q-card-section", {
        staticClass: "full-width row justify-around",
        attrs: {
          avatar: ""
        }
      }, [s("div", {
        staticClass: "col-12 q-mb-md text-left text-weight-bold"
      }, [e._v("\n            流程详情\n          ")]), s("div", {
        staticClass: "col-12"
      }, [s("span", {
        staticClass: "text-grey"
      }, [e._v("申请时间：")]), s("span", [e._v(e._s(e.record.create_time))])]), 1 == e.record.into_campus ? s("div", {
        staticClass: "col-12"
      }, [s("span", {
        staticClass: "text-grey"
      }, [e._v("入校申请时间段：")]), s("span", [e._v(e._s(e.record.timeslotintoapply))])]) : e._e(), 1 == e.record.into_campus ? s("div", {
        staticClass: "col-12"
      }, [s("span", {
        staticClass: "text-grey"
      }, [e._v("入校核验时间段：")]), s("span", [e._v(e._s(e.record.timeslotintobegin))])]) : e._e(), 1 == e.record.out_campus ? s("div", {
        staticClass: "col-12"
      }, [s("span", {
        staticClass: "text-grey"
      }, [e._v("离校申请时间段：")]), s("span", [e._v(e._s(e.record.timeslotoutapply))])]) : e._e(), 1 == e.record.out_campus ? s("div", {
        staticClass: "col-12"
      }, [s("span", {
        staticClass: "text-grey"
      }, [e._v("离校核验时间段：")]), s("span", [e._v(e._s(e.record.timeslotoutbegin))])]) : e._e(), e._l(e.record.info_config, (function(t, o) {
        return s("div", {
          key: o,
          staticClass: "col-12"
        }, [s("neu-widget", {
          staticStyle: {
            "margin-top": "4px"
          },
          attrs: {
            labelClass: "col-12 col-md-6 col-sm-9 text-left text-grey" + (e.$q.screen.lt.sm ? "text-right" : ""),
            controlClass: "col-12 col-md-11 col-sm-9",
            config: t,
            viewMode: e.viewMode
          },
          model: {
            value: e.record.info_result[o],
            callback: function(t) {
              e.$set(e.record.info_result, o, t)
            },
            expression: "record.info_result[index]"
          }
        })], 1)
      })), s("div", {
        directives: [{
          name: "show",
          rawName: "v-show",
          value: e.deleteShow,
          expression: "deleteShow"
        }],
        staticClass: "col-12",
        staticStyle: {
          "margin-top": "6px"
        }
      }, [s("span", {
        staticClass: "text-grey"
      }, [e._v("紧急联系号码：")]), s("span", [s("q-input", {
        attrs: {
          outlined: "",
          type: "number",
          dense: "",
          "hide-bottom-space": ""
        },
        model: {
          value: e.record.contact,
          callback: function(t) {
            e.$set(e.record, "contact", t)
          },
          expression: "record.contact"
        }
      })], 1)]), s("div", {
        directives: [{
          name: "show",
          rawName: "v-show",
          value: !e.deleteShow && !("" == e.record.contact || null == e.record.contact),
          expression: "!deleteShow && !(record.contact == '' || record.contact == null)"
        }],
        staticClass: "col-12",
        staticStyle: {
          "margin-top": "4px"
        }
      }, [s("span", {
        staticClass: "text-grey"
      }, [e._v("紧急联系号码：")]), s("span", [e._v(e._s("" == e.record.contact ? "未填写" : e.record.contact))])]), 1 != e.record.process_need_locate || "" == e.record.location || null == e.record.location || e.deleteShow ? e._e() : s("div", {
        staticClass: "col-12",
        staticStyle: {
          "margin-top": "4px"
        }
      }, [s("span", {
        staticClass: "text-grey"
      }, [e._v("申请位置：")]), s("span", [e._v(e._s("" == e.record.location ? "未填写" : e.record.location))])]), s("div", {
        directives: [{
          name: "show",
          rawName: "v-show",
          value: 1 == e.record.process_need_locate && e.deleteShow,
          expression: "record.process_need_locate == 1 && deleteShow"
        }],
        staticClass: "col-12",
        staticStyle: {
          "margin-top": "4px"
        }
      }, [e._v("\n            当前所在位置：" + e._s(e.location.address) + "\n            "), s("neu-geo-location", {
        attrs: {
          needAddr: !0,
          location: e.research
        },
        on: {
          completed: e.locationCompleted,
          error: e.locationError
        }
      })], 1)], 2)], 1), s("q-footer", {
        directives: [{
          name: "show",
          rawName: "v-show",
          value: e.deleteShow,
          expression: "deleteShow"
        }],
        staticClass: "bg-white text-primary",
        staticStyle: {
          height: "2.8rem",
          "margin-left": "0px",
          border: "0px"
        },
        attrs: {
          bordered: ""
        }
      }, [s("q-btn", {
        staticStyle: {
          width: "100%",
          height: "100%"
        },
        attrs: {
          color: "primary",
          label: "保存",
          type: "submit"
        }
      })], 1)], 1), s("q-card", {
        staticClass: "full-width row q-mt-sm",
        attrs: {
          flat: ""
        }
      }, [s("q-list", {
        staticClass: "full-width"
      }, [s("div", {
        staticClass: "row q-ml-md q-mt-md"
      }, [s("div", {
        staticClass: "col-12 text-left text-weight-bold"
      }, [e._v("流程记录")])]), s("q-item", [s("div", {
        staticClass: "q-px-sm q-pb-xs"
      }, [s("q-timeline", [s("q-timeline-entry", {
        attrs: {
          subtitle: e.record.create_time,
          color: "grey"
        }
      }, [e._v("\n                " + e._s(e.record.name) + " - 发起申请\n              ")]), e._l(e.review_list, (function(t) {
        return s("q-timeline-entry", {
          key: t.id,
          attrs: {
            subtitle: t.review_time,
            color: "A" == t.review_status ? "positive" : "red"
          }
        }, [e._v("\n                " + e._s(t.name) + " - " + e._s(t.review_status_name) + "\n                "), s("p", {
          directives: [{
            name: "show",
            rawName: "v-show",
            value: null != t.process_opinion,
            expression: "item.process_opinion != null"
          }],
          staticStyle: {
            "font-size": "11px"
          }
        }, [e._v("审批意见：" + e._s(t.process_opinion))])])
      })), "W" == e.record.review_status && e.nextTeacher.length > 0 ? s("q-timeline-entry", {
        attrs: {
          subtitle: "当前审核教师",
          color: "warning"
        }
      }, [e._l(e.nextTeacher.slice(0, 3), (function(t, o) {
        return s("span", {
          key: t.teacher_no
        }, [e._v(e._s(t.name)), o != e.nextTeacher.length - 1 && 2 != o && e.nextTeacher.length > 1 ? s("span", [e._v(", ")]) : e._e()])
      })), e.nextTeacher.length > 3 ? s("span", [e._v("等" + e._s(e.nextTeacher.length) + "人审核中")]) : e._e()], 2) : e._e()], 2)], 1)]), s("q-separator")], 1)], 1)], 1)], 1)], 1)
    },
    a = [],
    i = s("46f3"),
    r = s("974f"),
    c = {
      name: "processDetails",
      components: {
        NeuWidget: r["a"],
        NeuGeoLocation: i["a"]
      },
      data() {
        return {
          id: this.$route.query.id,
          userinfo: window.localStorage.userinfo ? JSON.parse(window.localStorage.getItem("userinfo")) : null,
          process_id: this.$route.query.process_id,
          menuInfo: null,
          viewMode: !0,
          record: {},
          opinion: "",
          review_list: [],
          color: "",
          deleteShow: !1,
          nextTeacher: [],
          service_flag: "N",
          location: {
            point: null,
            address: null,
            addressComponents: null
          },
          research: 0,
          locationStatus: !1
        }
      },
      computed: {},
      destroyed() {
        window.removeEventListener("popstate", this.goBack, !1)
      },
      mounted() {
        if (window.localStorage.getItem("menu")) {
          this.service_flag = this.$route.query.service_flag;
          let e = "process";
          e = "N" === this.service_flag ? "process" : "process_gate", this.menuInfo = JSON.parse(window.localStorage.getItem("menu")).find((t => t.id === e))
        }
        this.getProcessReviewInfo(), window.history && window.history.pushState && (history.pushState(null, null, document.URL), window.addEventListener("popstate", this.goBack, !1))
      },
      methods: {
        goBack() {
          this.$router.push("/student/process/index?service_flag=" + this.service_flag)
        },
        deleteProcess() {
          this.$q.dialog({
            title: "确认撤回",
            message: '该流程及其产生的<span class="text-red">数据将被清空。</span>',
            html: !0,
            persistent: !0,
            cancel: {
              label: "取消",
              outline: !0,
              color: "grey"
            },
            ok: {
              label: "撤回",
              unelevated: !0,
              color: "negative"
            }
          }).onOk((() => {
            this.$axiosAction("/api/student/process/process.api", {
              action: "deleteProcess",
              id: this.process_id
            }).then((e => {
              0 === e.data.code && this.goBack()
            }))
          }))
        },
        getProcessReviewInfo() {
          this.$axiosAction("/api/teacher/process/process.api", {
            action: "getProcessDetail",
            process_id: this.process_id,
            tab: "reviewing"
          }).then((e => {
            0 === e.data.code && (this.record = e.data.result.list[0]), null !== this.record.id && "" !== this.record.id && void 0 !== this.record.id || this.goBack(), this.nextTeacher = e.data.nextTeacher.nextTeacher, "R" === this.record.review_status ? this.color = "red" : "A" === this.record.review_status ? this.color = "green" : "W" === this.record.review_status && (this.color = "teal"), this.review_list = e.data.review_list.review_list, void 0 === this.review_list[0] && (this.deleteShow = !0, this.viewMode = !1)
          })).catch((e => {
            this.record = {}
          }))
        },
        saveProcess() {
          if (null === this.record.id || void 0 === this.record.id || "" === this.record.id) return this.$showErrorNotify("系统加载错误，请返回刷新");
          this.locationStatus = !0, this.research = this.research + 1
        },
        locationCompleted(e) {
          this.location = e, this.locationStatus && (this.locationStatus = !1, this.saveSubmit(1))
        },
        locationError(e) {
          this.locationStatus && (this.locationStatus = !1, this.saveSubmit(2))
        },
        saveSubmit(e) {
          let t = {};
          t = 1 === e ? JSON.stringify(this.location) : "", this.$q.loading.show(), this.$axiosAction("/api/student/process/process.api", {
            action: "updateProcessStudent",
            id: this.process_id,
            info_result: JSON.stringify(this.record.info_result),
            contact: this.record.contact,
            location: t
          }).then((e => {
            0 === e.data.code && this.goBack(), this.$q.loading.hide()
          })).catch((e => {
            this.record = {}, this.$q.loading.hide()
          }))
        }
      }
    },
    l = c,
    n = s("2877"),
    d = s("4d5a"),
    h = s("e359"),
    u = s("65c6"),
    p = s("9c40"),
    _ = s("6ac5"),
    v = s("09e3"),
    m = s("9989"),
    w = s("f09f"),
    g = s("a370"),
    f = s("0016"),
    x = s("0378"),
    y = s("27f9"),
    b = s("7ff0"),
    C = s("1c1c"),
    q = s("66e5"),
    S = s("05eb"),
    k = s("74af"),
    Q = s("eb85"),
    $ = s("eebe"),
    N = s.n($),
    T = Object(n["a"])(l, o, a, !1, null, null, null);
  t["default"] = T.exports;
  N()(T, "components", {
    QLayout: d["a"],
    QHeader: h["a"],
    QToolbar: u["a"],
    QBtn: p["a"],
    QToolbarTitle: _["a"],
    QPageContainer: v["a"],
    QPage: m["a"],
    QCard: w["a"],
    QCardSection: g["a"],
    QIcon: f["a"],
    QForm: x["a"],
    QInput: y["a"],
    QFooter: b["a"],
    QList: C["a"],
    QItem: q["a"],
    QTimeline: S["a"],
    QTimelineEntry: k["a"],
    QSeparator: Q["a"]
  })
}
