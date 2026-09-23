/**
 * Webpack module logic recovery
 * Source: assets/www/js/27.js -> module "3076"
 * Route: /student/leave/detail
 * Component guess: LeaveDetails
 * Fidelity: exact module body, beautified only (webpack wrapper retained)
 * Note: variable names inside the original production module are preserved as evidence.
 */
3076: function(e, t, s) {
  "use strict";
  s.r(t);
  var a = function() {
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
      }), s("q-toolbar-title", [e._v("请假信息")]), s("q-btn", {
        directives: [{
          name: "show",
          rawName: "v-show",
          value: 0 === e.reviewNum && "审批中" === e.details.review_name,
          expression: "reviewNum === 0 && details.review_name === '审批中'"
        }],
        attrs: {
          flat: "",
          round: "",
          dense: "",
          icon: "delete"
        },
        on: {
          click: e.deleteLeave
        }
      })], 1)], 1), s("q-page-container", [s("q-page", {
        staticClass: "bg-grey-3"
      }, [s("q-card", {
        staticClass: "full-width row",
        attrs: {
          flat: ""
        }
      }, [s("q-card-section", {
        staticClass: "full-width text-center text-white",
        class: "bg-" + e.details.color
      }, [1 == e.needReport ? s("div", {
        staticClass: "row items-center justify-center"
      }, [s("q-icon", {
        directives: [{
          name: "show",
          rawName: "v-show",
          value: "审批中" != e.details.review_name,
          expression: "details.review_name != '审批中'"
        }],
        attrs: {
          name: "审批通过" == e.details.review_name ? "done" : "clear",
          size: "0.9rem"
        }
      }), s("span", {
        staticStyle: {
          "font-size": "0.9rem"
        }
      }, [e._v(e._s(e.details.review_name))])], 1) : e._e(), 0 == e.needReport ? s("div", {
        staticClass: "row items-center justify-center"
      }, [s("q-icon", {
        directives: [{
          name: "show",
          rawName: "v-show",
          value: "审批中" != e.details.review_name,
          expression: "details.review_name != '审批中'"
        }],
        attrs: {
          name: "审批通过" == e.details.review_name ? "done" : "clear",
          size: "2rem"
        }
      }), s("span", {
        staticStyle: {
          "font-size": "1.5rem"
        }
      }, [e._v(e._s(e.details.review_name))])], 1) : e._e(), 1 == e.needReport ? s("div", {
        staticClass: "row items-center justify-center"
      }, [s("span", {
        staticStyle: {
          "font-size": "1.5rem"
        }
      }, [e._v(e._s(e.details.report_status_name))]), "已销假" == e.details.report_status_name ? s("span", {
        staticStyle: {
          "font-size": "1rem"
        }
      }, [e._v("(" + e._s(e.details.report_time) + ")")]) : e._e()]) : e._e()]), s("q-card-section", {
        staticClass: "full-width row justify-around"
      }, [s("div", {
        staticClass: "col-6"
      }, [s("span", {
        staticClass: "text-grey"
      }, [e._v("请假类型：")]), s("span", [e._v(e._s(e.details.leave_type_name))])]), s("div", {
        staticClass: "col-6"
      }, [s("span", {
        staticClass: "text-grey"
      }, [e._v("需要离校：")]), s("span", {
        directives: [{
          name: "show",
          rawName: "v-show",
          value: "是" == e.details.walk_out,
          expression: "details.walk_out == '是'"
        }],
        staticClass: "text-warning"
      }, [e._v(e._s(e.details.walk_out))]), s("span", {
        directives: [{
          name: "show",
          rawName: "v-show",
          value: "否" == e.details.walk_out,
          expression: "details.walk_out == '否'"
        }]
      }, [e._v(e._s(e.details.walk_out))])]), s("div", {
        staticClass: "col-6"
      }, [s("span", {
        staticClass: "text-grey"
      }, [e._v("需要出市：")]), s("span", {
        class: 1 == e.details.city_out ? "text-warning" : ""
      }, [e._v(e._s(1 == e.details.city_out ? "是" : "否"))])]), s("div", {
        staticClass: "col-6"
      }, [s("span", {
        staticClass: "text-grey"
      }, [e._v("需要出省：")]), s("span", {
        class: 1 == e.details.province_out ? "text-warning" : ""
      }, [e._v(e._s(1 == e.details.province_out ? "是" : "否"))])]), s("div", {
        staticClass: "col-12"
      }, [s("span", {
        staticClass: "text-grey"
      }, [e._v("请假学生：")]), s("span", [e._v(e._s(e.userInfo.name) + "(" + e._s(e.userInfo.login_name) + ")")])]), e.details.leave_multi_id ? s("div", {
        staticClass: "col-12"
      }, [s("span", {
        staticClass: "text-grey"
      }, [e._v("批量请假教师：")]), s("span", [e._v(e._s(e.m_teacher_name))])]) : e._e()])], 1), s("q-card", {
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
      }, [e._v("\n            请假详情\n          ")]), s("div", {
        staticClass: "col-12"
      }, [s("span", {
        staticClass: "text-grey"
      }, [e._v("请假时间：")]), s("span", [e._v(e._s(e.details.leave_time))])]), s("div", {
        staticClass: "col-12 q-mt-sm"
      }, [s("span", {
        staticClass: "text-grey"
      }, [e._v("发起时间：")]), s("span", [e._v(e._s(e.details.create_time))])]), s("div", {
        staticClass: "col-12 q-mt-sm"
      }, [s("span", {
        staticClass: "text-grey"
      }, [e._v("请假原因：")]), s("span", [e._v(e._s(e.details.reason))])]), e.details.location ? s("div", {
        staticClass: "col-12 q-mt-sm"
      }, [s("span", {
        staticClass: "text-grey"
      }, [e._v("发起位置：")]), s("span", [e._v(e._s(e.details.location.address))])]) : e._e(), e.details.attachment && 0 != e.details.attachment.length ? s("div", {
        staticClass: "col-12 q-mt-sm"
      }, [s("span", {
        staticClass: "text-grey"
      }, [e._v("附件：")]), e._l(e.details.attachment, (function(t) {
        return s("div", {
          key: t.link,
          staticClass: "q-mt-sm"
        }, [s("q-img", {
          staticStyle: {
            height: "200px",
            "max-width": "200px"
          },
          attrs: {
            src: e.serverUrl + t.link,
            ratio: 1
          },
          on: {
            click: function(s) {
              return e.showBig(t.link, t.srcname)
            }
          }
        })], 1)
      }))], 2) : e._e()])], 1), s("q-card", {
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
      }, [e._v("请假流程记录")])]), s("q-item", [0 == e.showReview ? s("div", {
        staticClass: "q-px-sm q-pb-xs"
      }, [s("q-timeline", [s("q-timeline-entry", {
        attrs: {
          subtitle: e.details.create_time,
          color: "grey"
        }
      }, [e._v("\n                " + e._s(e.details.name) + " - 发起申请\n              ")]), e._l(e.details.review_list, (function(t, a) {
        return s("q-timeline-entry", {
          key: t.id,
          attrs: {
            subtitle: t.review_time,
            color: "W" != e.details.review_status && e.details.review_list && a == e.details.review_list.length - 1 ? "A" == t.review_status ? "positive" : "red" : "grey"
          }
        }, [e._v("\n                " + e._s(t.teacher_name) + " - " + e._s(t.review_status_name) + "\n                "), s("p", {
          directives: [{
            name: "show",
            rawName: "v-show",
            value: null != t.opinion,
            expression: "item.opinion != null"
          }],
          staticStyle: {
            "font-size": "11px"
          }
        }, [e._v("审批意见：" + e._s(t.opinion))])])
      })), "W" == e.details.review_status && e.nextTeacher.length > 0 ? s("q-timeline-entry", {
        attrs: {
          subtitle: "当前审核教师",
          color: "warning"
        }
      }, [e._l(e.nextTeacher.slice(0, 3), (function(t, a) {
        return s("span", {
          key: t.teacher_no
        }, [e._v(e._s(t.name)), a != e.nextTeacher.length - 1 && 2 != a && e.nextTeacher.length > 1 ? s("span", [e._v(", ")]) : e._e()])
      })), e.nextTeacher.length > 3 ? s("span", [e._v("等" + e._s(e.nextTeacher.length) + "人审核中")]) : e._e()], 2) : e._e(), e.details.report_time ? s("q-timeline-entry", {
        attrs: {
          subtitle: e.details.report_time,
          color: "grey"
        }
      }, [e._v("\n                " + e._s(e.details.name) + " - 销假成功\n                "), s("div", {
        staticClass: "row full-width"
      }, e._l(e.details.report_attachment, (function(t) {
        return s("q-img", {
          key: t.link,
          staticClass: "q-mx-sm q-my-sm",
          staticStyle: {
            cursor: "pointer",
            height: "auto",
            width: "40%"
          },
          attrs: {
            src: e.serverUrl + t.link,
            ratio: 1
          },
          on: {
            click: function(s) {
              return e.showBig(t.link, t.srcname)
            }
          }
        })
      })), 1)]) : e._e()], 2)], 1) : e._e(), 1 == e.showReview ? s("div", {
        staticClass: "q-px-sm q-pb-xs"
      }, [s("q-timeline", [s("q-timeline-entry", {
        attrs: {
          subtitle: e.create_time_short,
          color: "grey"
        }
      }, [e._v("\n                " + e._s(e.m_teacher_name) + " - 发起申请\n              ")]), e._l(e.review_list, (function(t, a) {
        return s("q-timeline-entry", {
          key: t.id,
          attrs: {
            subtitle: t.review_time,
            color: "W" != e.details.review_status && e.details.review_list && a == e.details.review_list.length - 1 ? "A" == t.review_status ? "positive" : "red" : "grey"
          }
        }, [e._v("\n                " + e._s(t.teacher_name) + " - " + e._s(t.review_status_name) + "\n                "), s("p", {
          directives: [{
            name: "show",
            rawName: "v-show",
            value: null != t.opinion,
            expression: "item.opinion != null"
          }],
          staticStyle: {
            "font-size": "11px"
          }
        }, [e._v("审批意见：" + e._s(t.opinion))])])
      })), e.details.report_time ? s("q-timeline-entry", {
        attrs: {
          subtitle: e.details.report_time,
          color: "grey"
        }
      }, [e._v("\n                " + e._s(e.details.name) + " - 销假成功\n                "), s("div", {
        staticClass: "row full-width"
      }, e._l(e.details.report_attachment, (function(t) {
        return s("q-img", {
          key: t.link,
          staticClass: "q-mx-sm q-my-sm",
          staticStyle: {
            cursor: "pointer",
            height: "auto",
            width: "40%"
          },
          attrs: {
            src: e.serverUrl + t.link,
            ratio: 1
          },
          on: {
            click: function(s) {
              return e.showBig(t.link, t.srcname)
            }
          }
        })
      })), 1)]) : e._e()], 2)], 1) : e._e()]), s("q-separator")], 1)], 1)], 1)], 1), s("q-dialog", {
        model: {
          value: e.qrShowingDialog,
          callback: function(t) {
            e.qrShowingDialog = t
          },
          expression: "qrShowingDialog"
        }
      }, [s("q-card", {
        staticClass: "full-width",
        attrs: {
          flat: ""
        }
      }, [s("q-card-section", {
        staticClass: "row items-center justify-between"
      }, [s("div", {
        staticClass: "text-h6"
      }, [e._v("二维码展示")]), s("q-btn", {
        directives: [{
          name: "close-popup",
          rawName: "v-close-popup"
        }],
        attrs: {
          icon: "close",
          flat: "",
          round: "",
          dense: "",
          size: "sm"
        },
        on: {
          click: e.clearScan
        }
      })], 1), s("q-separator"), s("q-card-section", {
        staticClass: "text-center"
      }, [
        [s("vue-qr", {
          staticClass: "q-mb-xl",
          attrs: {
            text: e.downloadData.text,
            margin: 0,
            colorDark: "#3B3B3B",
            colorLight: "#fff",
            logoScale: .3,
            size: 250
          }
        })]
      ], 2)], 1)], 1), s("neu-full-screen-image", {
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
      }), s("q-footer", {
        directives: [{
          name: "show",
          rawName: "v-show",
          value: "A" == e.details.review_status,
          expression: "details.review_status == 'A'"
        }],
        staticClass: "bg-white text-primary",
        staticStyle: {
          height: "55px"
        },
        attrs: {
          bordered: ""
        }
      }, [s("div", {
        staticClass: "row justify-between"
      }, [1 != e.needReport || e.details.report_time ? e._e() : s("q-btn", {
        staticStyle: {
          width: "60%",
          height: "55px"
        },
        on: {
          click: e.showQrCode
        }
      }, [s("span", {
        staticStyle: {
          "font-size": "16px"
        }
      }, [e._v("请假信息二维码")])]), 0 == e.needReport || e.details.report_time ? s("q-btn", {
        staticStyle: {
          width: "100%",
          height: "55px"
        },
        on: {
          click: e.showQrCode
        }
      }, [s("span", {
        staticStyle: {
          "font-size": "16px"
        }
      }, [e._v("请假信息二维码")])]) : e._e(), 1 != e.needReport || e.details.report_time ? e._e() : s("q-btn", {
        staticClass: "bg-primary",
        staticStyle: {
          width: "40%",
          height: "55px"
        },
        attrs: {
          flat: "",
          unelevated: "",
          color: "white",
          label: "销假"
        },
        on: {
          click: function(t) {
            return e.goReport()
          }
        }
      })], 1)])], 1)
    },
    i = [],
    r = s("658f"),
    l = s.n(r),
    n = s("33be"),
    o = {
      name: "LeaveDetails",
      components: {
        vueQr: l.a,
        NeuFullScreenImage: n["a"]
      },
      data() {
        return {
          serverUrl: window.localStorage.server,
          details: {},
          user: {},
          qrShowingDialog: !1,
          downloadData: {
            text: ""
          },
          reviewNum: 0,
          bigPicUrl: "",
          bigPicName: "",
          showBigPic: !1,
          m_teacher_name: "",
          review_num: "",
          showReview: 0,
          m_teacher_no: "",
          review_list: [],
          create_time_short: "",
          needReport: 0,
          firstTeacherNo: "",
          nextTeacher: [],
          userInfo: JSON.parse(window.localStorage.getItem("userinfo"))
        }
      },
      computed: {},
      destroyed() {
        window.removeEventListener("popstate", this.goBack, !1)
      },
      mounted() {
        this.getLeaveInfo(), window.history && window.history.pushState && (history.pushState(null, null, document.URL), window.addEventListener("popstate", this.goBack, !1))
      },
      methods: {
        clearScan() {
          this.qrShowingDialog = !1, clearInterval(this.setInter)
        },
        showBig(e, t) {
          this.bigPicUrl = e, this.bigPicName = t, this.showBigPic = !0
        },
        goBack() {
          this.$router.push("/student/leave/index")
        },
        goReport() {
          this.$router.push(`/student/leave/reportleave?id=${this.details.id}&teacher_no=${this.firstTeacherNo}&begin_time=${this.details.begin_time}&end_time=${this.details.end_time}`)
        },
        getLeaveInfo() {
          this.user = JSON.parse(localStorage.getItem("userinfo")), this.$axiosAction("/api/student/leave/leave.api", {
            action: "getLeaveInfo",
            login_name: this.user.login_name,
            leave_id: parseInt(this.$route.query.leave_id)
          }).then((e => {
            const t = e.data.list;
            this.needReport = t.need_report, this.reviewNum = e.data.review_num.count, t.leave_time = t.short_time + "(" + t.time_info + ")", this.details = t, this.nextTeacher = e.data.nextTeacher, null !== e.data.list.leave_multi_id ? (this.showReview = 1, this.getMultiReviewInfo(e.data.list.leave_multi_id)) : (this.showReview = 0, this.details.review_list = e.data.review_list, this.firstTeacherNo = e.data.review_list[0].teacher_no)
          }))
        },
        getMultiReviewInfo(e) {
          this.$axiosAction("/api/student/leave/leave.api", {
            action: "getMultiLeaveInfoReview",
            id: e
          }).then((e => {
            this.review_list = e.data.review_list, this.m_teacher_name = e.data.list.teacher_name, this.m_teacher_no = e.data.list.teacher_no, this.firstTeacherNo = e.data.list.teacher_no, this.create_time_short = e.data.list.create_time_short
          }))
        },
        deleteLeave() {
          this.$q.dialog({
            title: "确认撤回",
            message: '该请假及其产生的<span class="text-red">数据将被清空。</span>',
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
            this.$axiosAction("/api/student/leave/leave.api", {
              action: "deleteLeave",
              leave_id: parseInt(this.$route.query.leave_id)
            }).then((e => {
              0 === e.data.code && this.$router.push("/student/leave/index")
            }))
          }))
        },
        showQrCode() {
          this.qrShowingDialog = !0, this.getEncryptionQrCode(), this.setInter = setInterval((() => {
            this.getEncryptionQrCode()
          }), 6e4)
        },
        getEncryptionQrCode() {
          this.$q.loading.show(), this.$axiosAction("/api/student/leave/leave.api", {
            action: "getEncryptionQrCode",
            leave_id: this.details.id
          }).then((e => {
            0 === e.data.code && (this.downloadData.text = e.data.qrcode), this.$q.loading.hide()
          }))
        }
      }
    },
    c = o,
    d = s("2877"),
    _ = s("4d5a"),
    v = s("e359"),
    h = s("65c6"),
    m = s("9c40"),
    w = s("6ac5"),
    u = s("0016"),
    p = s("09e3"),
    g = s("9989"),
    f = s("f09f"),
    y = s("a370"),
    q = s("068f"),
    x = s("1c1c"),
    C = s("66e5"),
    b = s("05eb"),
    k = s("74af"),
    S = s("eb85"),
    Q = s("24e8"),
    N = s("7ff0"),
    I = s("7f67"),
    R = s("eebe"),
    T = s.n(R),
    B = Object(d["a"])(c, a, i, !1, null, null, null);
  t["default"] = B.exports;
  T()(B, "components", {
    QLayout: _["a"],
    QHeader: v["a"],
    QToolbar: h["a"],
    QBtn: m["a"],
    QToolbarTitle: w["a"],
    QIcon: u["a"],
    QPageContainer: p["a"],
    QPage: g["a"],
    QCard: f["a"],
    QCardSection: y["a"],
    QImg: q["a"],
    QList: x["a"],
    QItem: C["a"],
    QTimeline: b["a"],
    QTimelineEntry: k["a"],
    QSeparator: S["a"],
    QDialog: Q["a"],
    QFooter: N["a"]
  }), T()(B, "directives", {
    ClosePopup: I["a"]
  })
}
