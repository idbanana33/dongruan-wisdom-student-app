/**
 * Webpack module logic recovery
 * Source: assets/www/js/111.js -> module "7e9c"
 * Route: /teacher/scanning/signinVer
 * Component guess: 111_7e9c
 * Fidelity: exact module body, beautified only (webpack wrapper retained)
 * Note: variable names inside the original production module are preserved as evidence.
 */
"7e9c": function(t, s, a) {
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
      }), a("q-toolbar-title", [t._v("签到信息核验")])], 1)], 1), a("q-page-container", [a("q-page", {
        staticClass: "bg-grey-3"
      }, [a("q-card", {
        staticClass: "bg-positive",
        attrs: {
          flat: "",
          "full-width": ""
        }
      }, [a("q-card-section", {
        staticClass: "text-white"
      }, [a("q-icon", {
        staticClass: "full-width",
        attrs: {
          name: "check_circle",
          size: "80px"
        }
      }), a("div", {
        staticClass: "row"
      }, [a("div", {
        staticClass: "q-mt-xs full-width text-center"
      }, [a("span", {
        staticStyle: {
          "font-size": "18px"
        }
      }, [t._v("已签到")])]), a("div", {
        staticClass: "q-mt-xs"
      }, [a("span", {
        staticClass: "neu-css-after-colon",
        staticStyle: {
          "font-size": "15px"
        }
      }, [t._v("签到时间")]), t._v(t._s(t.record.signin_time) + "\n            ")])]), a("div", {
        staticClass: "row"
      }, [a("div", {
        directives: [{
          name: "show",
          rawName: "v-show",
          value: null != t.record.signin_location,
          expression: "record.signin_location != null"
        }],
        staticClass: "q-mt-xs"
      }, [a("span", {
        staticClass: "neu-css-after-colon"
      }, [t._v("签到位置")]), t._v(t._s(t.record.address) + "\n            ")]), a("div", {
        directives: [{
          name: "show",
          rawName: "v-show",
          value: null != t.record.qrcode_source,
          expression: "record.qrcode_source != null"
        }],
        staticClass: "q-mt-xs"
      }, [a("span", {
        staticClass: "neu-css-after-colon",
        staticStyle: {
          "font-size": "15px"
        }
      }, [t._v("扫码来源")]), t._v(t._s(t.record.qr_name) + "\n            ")])])], 1)], 1), a("q-card", {
        staticClass: "full-width",
        attrs: {
          flat: ""
        }
      }, [a("q-card-section", [a("div", {
        staticClass: "row"
      }, [a("span", {
        staticClass: "full-width text-weight-bold",
        staticStyle: {
          "font-size": "18px"
        }
      }, [t._v(t._s(t.record.title))])]), a("div", {
        directives: [{
          name: "show",
          rawName: "v-show",
          value: null != t.record.info_result,
          expression: "record.info_result != null"
        }],
        staticClass: "q-mt-xs row"
      }, [a("span", {
        staticClass: "neu-css-after-colon text-grey"
      }, [t._v("附加信息")]), t._v("已填写\n          ")])])], 1), a("q-card", {
        staticClass: "q-mt-sm",
        attrs: {
          flat: "",
          "full-width": ""
        }
      }, [a("q-card-section", [a("div", {
        staticClass: "row q-mt-xs"
      }, [a("span", {
        staticClass: "neu-css-after-colon text-grey",
        staticStyle: {
          "font-size": "15px"
        }
      }, [t._v("姓名(学号)")]), t._v(t._s(t.record.stu_name) + "(" + t._s(t.record.student_no) + ")\n          ")]), a("div", {
        staticClass: "row q-mt-xs"
      }, [a("span", {
        staticClass: "neu-css-after-colon text-grey",
        staticStyle: {
          "font-size": "15px"
        }
      }, [t._v("性别")]), t._v(t._s(t.record.sex_name) + "\n          ")]), a("div", {
        staticClass: "row q-mt-xs"
      }, [a("span", {
        staticClass: "neu-css-after-colon text-grey",
        staticStyle: {
          "font-size": "15px"
        }
      }, [t._v("学院")]), t._v(t._s(t.record.dep_name) + "\n          ")]), a("div", {
        staticClass: "row q-mt-xs"
      }, [a("span", {
        staticClass: "neu-css-after-colon text-grey",
        staticStyle: {
          "font-size": "15px"
        }
      }, [t._v("专业")]), t._v(t._s(t.record.major_name) + "\n          ")]), a("div", {
        staticClass: "row q-mt-xs"
      }, [a("span", {
        staticClass: "neu-css-after-colon text-grey",
        staticStyle: {
          "font-size": "15px"
        }
      }, [t._v("班级")]), t._v(t._s(t.record.class_name) + "\n          ")])])], 1)], 1)], 1)], 1)
    },
    c = [],
    r = {
      components: {},
      data() {
        return {
          record: {}
        }
      },
      mounted() {
        this.$axiosAction("/api/teacher/scanning/scanning.api", {
          action: "decryptSigninQrCode",
          text: this.$route.params.qrcode,
          jobType: "V"
        }).then((t => {
          0 === t.data.code && (this.record = t.data.result)
        }))
      },
      methods: {
        goBack() {
          this.$router.push("/teacher/index")
        }
      }
    },
    n = r,
    i = a("2877"),
    o = a("4d5a"),
    l = a("e359"),
    d = a("65c6"),
    _ = a("9c40"),
    u = a("6ac5"),
    v = a("09e3"),
    p = a("9989"),
    f = a("f09f"),
    x = a("a370"),
    w = a("0016"),
    C = a("eebe"),
    m = a.n(C),
    q = Object(i["a"])(n, e, c, !1, null, null, null);
  s["default"] = q.exports;
  m()(q, "components", {
    QLayout: o["a"],
    QHeader: l["a"],
    QToolbar: d["a"],
    QBtn: _["a"],
    QToolbarTitle: u["a"],
    QPageContainer: v["a"],
    QPage: p["a"],
    QCard: f["a"],
    QCardSection: x["a"],
    QIcon: w["a"]
  })
}
