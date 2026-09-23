/**
 * Webpack module logic recovery
 * Source: assets/www/js/30.js -> module "750d"
 * Route: /student/leave/reportleave
 * Component guess: ReportLeave
 * Fidelity: exact module body, beautified only (webpack wrapper retained)
 * Note: variable names inside the original production module are preserved as evidence.
 */
"750d": function(t, e, a) {
  "use strict";
  a.r(e);
  var i = function() {
      var t = this,
        e = t.$createElement,
        a = t._self._c || e;
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
          click: t.goBackLeave
        }
      }), a("q-toolbar-title", [t._v("销假")])], 1)], 1), a("q-page-container", [a("q-page", {
        staticClass: "bg-grey-3"
      }, [a("q-form", {
        on: {
          submit: t.onSubmit
        }
      }, [a("q-card", {
        staticClass: "full-width row q-mt-sm",
        attrs: {
          flat: ""
        }
      }, [a("q-list", {
        staticClass: "full-width"
      }, [a("q-item", [a("q-item-section", [a("q-item-label", {
        staticClass: "neu-css-before-white-space"
      }, [t._v("\n                  添加附件\n                ")]), a("q-item-label", {
        staticClass: "neu-css-before-white-space q-my-sm",
        attrs: {
          caption: ""
        }
      }, [t._v("图片格式支持：.jpg、.png、.jpeg")]), a("q-uploader", {
        staticClass: "full-width",
        attrs: {
          multiple: "",
          "max-files": "4",
          url: t.uploader,
          "auto-upload": "",
          "max-file-size": "5242880",
          accept: ".jpg, .png, ,.jpeg, image/*"
        },
        on: {
          uploaded: t.afterUploaded,
          rejected: t.onRejected,
          removed: t.afterRemoved
        },
        scopedSlots: t._u([{
          key: "header",
          fn: function(e) {
            return [a("div", {
              staticClass: "row no-wrap items-center q-pa-sm q-gutter-xs"
            }, [a("div", {
              staticClass: "col"
            }, [t._v("图片上传(每张5M以内)")]), e.canAddFiles ? a("q-btn", {
              attrs: {
                type: "a",
                icon: "add_box",
                round: "",
                dense: "",
                flat: ""
              }
            }, [a("q-uploader-add-trigger"), a("q-tooltip", [t._v("选择文件并上传")])], 1) : t._e()], 1)]
          }
        }]),
        model: {
          value: t.filesMaxNumber,
          callback: function(e) {
            t.filesMaxNumber = e
          },
          expression: "filesMaxNumber"
        }
      })], 1)], 1)], 1)], 1), a("q-card", {
        staticClass: "full-width row q-mt-sm",
        attrs: {
          flat: ""
        }
      }, [a("q-list", {
        staticClass: "full-width",
        attrs: {
          padding: ""
        }
      }, [a("q-item", [a("q-item-section", {
        attrs: {
          avatar: ""
        }
      }, [a("div", {
        staticClass: "neu-css-before-white-space"
      }, [t._v("\n                  定位\n                ")])]), a("q-item-section", [t._v("\n                " + t._s(t.location.address) + "\n                "), a("neu-geo-location", {
        attrs: {
          needAddr: !0,
          location: t.research
        },
        on: {
          completed: t.locationCompleted,
          error: t.locationError
        }
      })], 1), a("q-item-section", {
        attrs: {
          side: ""
        }
      }, [a("span", {
        staticClass: "text-primary cursor-pointer",
        on: {
          click: function(e) {
            t.research = t.research + 1
          }
        }
      }, [t._v("重新定位")])])], 1)], 1)], 1), t.inLocal ? t._e() : a("div", {
        staticClass: "q-my-sm text-center"
      }, [a("span", [t._v("你不在销假范围内，暂时不能销假")])]), t.inLocal ? a("q-footer", {
        staticClass: "bg-white text-primary",
        attrs: {
          bordered: ""
        }
      }, [a("div", {
        staticClass: "row justify-between"
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
          label: "确认销假",
          type: "submit"
        }
      })], 1)]) : t._e()], 1)], 1)], 1)], 1)
    },
    s = [],
    o = (a("a434"), a("ddb0"), a("46f3")),
    r = {
      components: {
        NeuGeoLocation: o["a"]
      },
      name: "ReportLeave",
      data() {
        return {
          menuInfo: null,
          uploader: window.localStorage.server + this.$appConf.fileUploader,
          model: null,
          text: "",
          filesMaxNumber: null,
          location: {
            point: null,
            address: null,
            addressComponents: null
          },
          research: 0,
          locationStatus: !1,
          user: {},
          attachment: [],
          showPicList: [],
          atta: "",
          inLocal: !1,
          reportNeedPicture: 0
        }
      },
      computed: {},
      mounted() {
        window.localStorage.getItem("menu") && (this.menuInfo = JSON.parse(window.localStorage.getItem("menu")).find((t => "leave" === t.id)))
      },
      methods: {
        checkOutReportFlag() {
          this.location.point.lng && this.location.point.lat && this.$axiosAction("/api/student/leave/leave.api", {
            action: "checkOutReportFlag",
            lng: this.location.point.lng,
            lat: this.location.point.lat
          }).then((t => {
            0 === t.data.code && (this.inLocal = t.data.result.range, this.reportNeedPicture = t.data.result.report_need_picture)
          }))
        },
        locationCompleted(t) {
          this.location = t, this.checkOutReportFlag(), this.locationStatus && (this.locationStatus = !1, this.saveSunmit(1))
        },
        goBackLeave() {
          this.$router.push(`/student/leave/detail?leave_id=${this.$route.query.id}`)
        },
        onRejected(t) {
          this.$q.notify({
            type: "negative",
            message: `${t.length}份文件不符合格式限制！`
          })
        },
        afterUploaded(t) {
          this.showPicList = [];
          const e = JSON.parse(t.xhr.response);
          e.error ? this.$showErrorNotify(e.error) : this.attachment ? this.attachment.push(e) : this.attachment = [e], this.addUrl()
        },
        afterRemoved(t) {
          for (const e of t) {
            const t = JSON.parse(e.xhr.response);
            this.removeFile(t.servername)
          }
        },
        addUrl() {
          for (let t = 0; t < this.attachment.length; t++) this.showPicList.push({
            link: encodeURI(`${window.localStorage.server}${this.attachment[t].link}`),
            servername: this.attachment[t].servername
          })
        },
        removeFile(t) {
          this.showPicList = [];
          const e = this.attachment.findIndex((e => e.servername === t));
          this.attachment.splice(e, 1), this.addUrl()
        },
        onSubmit() {
          1 === this.reportNeedPicture && 0 === this.attachment.length ? this.$q.notify({
            color: "red-5",
            textColor: "white",
            icon: "warning",
            message: "请上传附件！"
          }) : (this.locationStatus = !0, this.research = this.research + 1)
        },
        locationError(t) {
          this.$showErrorNotify("定位失败,不能销假")
        },
        saveSunmit(t) {
          this.atta = JSON.stringify(this.attachment), this.$q.loading.show(), this.user = JSON.parse(localStorage.getItem("userinfo")), this.$axiosAction("/api/student/leave/leave.api", {
            action: "updateLeaveReport",
            id: parseInt(this.$route.query.id),
            report_attachment: this.atta,
            report_location: JSON.stringify(this.location),
            student_name: this.user.name,
            teacher_no: this.$route.query.teacher_no,
            begin_time: this.$route.query.begin_time,
            end_time: this.$route.query.end_time
          }).then((t => {
            0 === t.data.code ? (this.atta = "", this.$q.loading.hide(), this.goBackLeave()) : this.$q.loading.hide()
          }))
        }
      }
    },
    n = r,
    l = a("2877"),
    c = a("4d5a"),
    d = a("e359"),
    h = a("65c6"),
    u = a("6ac5"),
    m = a("0016"),
    p = a("9c40"),
    f = a("09e3"),
    g = a("9989"),
    v = a("0378"),
    q = a("f09f"),
    w = a("1c1c"),
    b = a("66e5"),
    _ = a("4074"),
    y = a("0170"),
    C = a("ee89"),
    S = a("cc04"),
    x = a("05c0"),
    $ = a("7ff0"),
    Q = a("eebe"),
    L = a.n(Q),
    k = Object(l["a"])(n, i, s, !1, null, null, null);
  e["default"] = k.exports;
  L()(k, "components", {
    QLayout: c["a"],
    QHeader: d["a"],
    QToolbar: h["a"],
    QToolbarTitle: u["a"],
    QIcon: m["a"],
    QBtn: p["a"],
    QPageContainer: f["a"],
    QPage: g["a"],
    QForm: v["a"],
    QCard: q["a"],
    QList: w["a"],
    QItem: b["a"],
    QItemSection: _["a"],
    QItemLabel: y["a"],
    QUploader: C["a"],
    QUploaderAddTrigger: S["a"],
    QTooltip: x["a"],
    QFooter: $["a"]
  })
}
