(window["webpackJsonp"] = window["webpackJsonp"] || []).push([
  [73],
  {
    b6da: function (e, t, o) {
      "use strict";
      o.r(t);
      var i = function () {
          var e = this,
            t = e.$createElement,
            o = e._self._c || t;
          return o(
            "q-layout",
            { attrs: { view: "lHh lpr lFf" } },
            [
              o(
                "q-header",
                { staticClass: "bg-grey-3 text-black" },
                [
                  o(
                    "q-toolbar",
                    [
                      o("q-btn", {
                        attrs: { flat: "", round: "", dense: "", icon: "keyboard_arrow_left" },
                        on: { click: e.goBack },
                      }),
                      o("q-toolbar-title", [e._v("日志内容")]),
                    ],
                    1,
                  ),
                ],
                1,
              ),
              o(
                "q-page-container",
                [
                  o(
                    "q-page",
                    { staticClass: "bg-grey-3" },
                    [
                      o(
                        "q-form",
                        {
                          staticClass: "q-gutter-sm full-width",
                          on: { submit: e.submitJoblogResult },
                        },
                        [
                          e.menuInfo
                            ? o(
                                "q-card",
                                { staticClass: "full-width", attrs: { flat: "" } },
                                [
                                  o(
                                    "q-list",
                                    [
                                      o(
                                        "q-card-section",
                                        e._l(e.infoConfig, function (t, i) {
                                          return o(
                                            "div",
                                            { key: i, staticClass: "bg-grey-2 q-pa-sm q-mt-sm" },
                                            [
                                              o("neu-widget", {
                                                attrs: { config: t, "view-mode": e.viewMode },
                                                model: {
                                                  value: e.result.info_result[i],
                                                  callback: function (t) {
                                                    e.$set(e.result.info_result, i, t);
                                                  },
                                                  expression: "result.info_result[index]",
                                                },
                                              }),
                                            ],
                                            1,
                                          );
                                        }),
                                        0,
                                      ),
                                    ],
                                    1,
                                  ),
                                ],
                                1,
                              )
                            : e._e(),
                          "u" === e.detailType
                            ? o(
                                "q-footer",
                                {
                                  staticClass: "bg-white text-primary",
                                  staticStyle: {
                                    height: "2.8rem",
                                    "margin-left": "0px",
                                    border: "0px",
                                  },
                                  attrs: { bordered: "" },
                                },
                                [
                                  o("q-btn", {
                                    staticStyle: { width: "30%", height: "100%" },
                                    attrs: { color: "red", label: "删除" },
                                    on: {
                                      click: function (t) {
                                        return e.deleteJoblogResult();
                                      },
                                    },
                                  }),
                                  o("q-btn", {
                                    directives: [
                                      {
                                        name: "show",
                                        rawName: "v-show",
                                        value: !e.viewMode,
                                        expression: "!viewMode",
                                      },
                                    ],
                                    staticStyle: { width: "30%", height: "100%" },
                                    attrs: {
                                      outline: "",
                                      color: "grey",
                                      label: "暂存",
                                      type: "submit",
                                    },
                                    on: {
                                      click: function (t) {
                                        e.result.status = 0;
                                      },
                                    },
                                  }),
                                  o("q-btn", {
                                    directives: [
                                      {
                                        name: "show",
                                        rawName: "v-show",
                                        value: !e.viewMode,
                                        expression: "!viewMode",
                                      },
                                    ],
                                    staticStyle: { width: "40%", height: "100%" },
                                    attrs: { color: "primary", label: "提交", type: "submit" },
                                    on: {
                                      click: function (t) {
                                        e.result.status = 1;
                                      },
                                    },
                                  }),
                                ],
                                1,
                              )
                            : e._e(),
                          o(
                            "q-footer",
                            {
                              directives: [
                                {
                                  name: "show",
                                  rawName: "v-show",
                                  value: "n" === e.detailType,
                                  expression: "detailType === 'n'",
                                },
                              ],
                              staticClass: "bg-white text-primary",
                              staticStyle: {
                                height: "2.8rem",
                                "margin-left": "0px",
                                border: "0px",
                              },
                              attrs: { bordered: "" },
                            },
                            [
                              o("q-btn", {
                                staticStyle: { width: "40%", height: "100%" },
                                attrs: {
                                  outline: "",
                                  color: "grey",
                                  label: "暂存",
                                  type: "submit",
                                },
                                on: {
                                  click: function (t) {
                                    e.result.status = 0;
                                  },
                                },
                              }),
                              o("q-btn", {
                                staticStyle: { width: "60%", height: "100%" },
                                attrs: { color: "primary", label: "提交", type: "submit" },
                                on: {
                                  click: function (t) {
                                    e.result.status = 1;
                                  },
                                },
                              }),
                            ],
                            1,
                          ),
                          o(
                            "q-footer",
                            {
                              directives: [
                                {
                                  name: "show",
                                  rawName: "v-show",
                                  value:
                                    (e.getAllowDelete &&
                                      "d" === e.detailType &&
                                      e.teacherNo === e.teacher_no_ing) ||
                                    ("A" === e.roleId && "d" === e.detailType),
                                  expression:
                                    "(getAllowDelete && (detailType === 'd') && (teacherNo === teacher_no_ing)) || (roleId === 'A' && detailType === 'd')",
                                },
                              ],
                              staticClass: "bg-white text-primary",
                              staticStyle: {
                                height: "2.8rem",
                                "margin-left": "0px",
                                border: "0px",
                              },
                              attrs: { bordered: "" },
                            },
                            [
                              o("q-btn", {
                                staticStyle: { width: "100%", height: "100%" },
                                attrs: { color: "red", label: "删除" },
                                on: {
                                  click: function (t) {
                                    return e.deleteJoblogResult();
                                  },
                                },
                              }),
                            ],
                            1,
                          ),
                        ],
                        1,
                      ),
                    ],
                    1,
                  ),
                ],
                1,
              ),
            ],
            1,
          );
        },
        l = [],
        a = o("ded3"),
        s = o.n(a),
        r = o("974f"),
        n = {
          name: "JoblogDetailResult",
          components: { NeuWidget: r["a"] },
          data() {
            return {
              roleId: JSON.parse(window.localStorage.getItem("userinfo")).role_id,
              teacherNo: "",
              menuInfo: null,
              jobId: null,
              detailType: "",
              joblogRstId: null,
              getAllowDelete: !1,
              infoModel: [],
              infoConfig: [],
              viewMode: !0,
              result: { info_result: [] },
              teacher_no_ing: JSON.parse(window.localStorage.getItem("userinfo")).login_name,
            };
          },
          mounted() {
            ((this.jobId = this.$route.query.jobId),
              (this.joblogRstId = this.$route.query.joblogRstId),
              (this.teacherNo = this.$route.query.teacher_no),
              (this.getAllowDelete = "true" === this.$route.query.getAllowDelete),
              (this.detailType = this.$route.query.type),
              window.localStorage.getItem("menu") &&
                (this.menuInfo = JSON.parse(window.localStorage.getItem("menu")).find(
                  (e) => "joblog" === e.id,
                )));
            const e = window.localStorage.getItem("joblog_result_detail"),
              t = window.localStorage.getItem("joblog_infoConfig"),
              o = JSON.parse(e),
              i = JSON.parse(t);
            ((this.result = s()({}, o)),
              (this.infoConfig = s()({}, i)),
              ("u" !== this.detailType && "n" !== this.detailType) || (this.viewMode = !1));
          },
          methods: {
            goBack() {
              this.$router.push("/teacher/joblog/Detail?id=" + this.jobId);
            },
            submitJoblogResult() {
              const e = s()({}, this.result);
              ((e.info_result = JSON.stringify(e.info_result)),
                this.$axiosAction(
                  "/api/teacher/joblog/joblog.api",
                  s()({ action: e.id ? "updateJoblogResult" : "insertJoblogResult" }, e),
                )
                  .then((e) => {
                    0 === e.data.code &&
                      ((this.editDialog = !1),
                      this.$router.push("/teacher/joblog/Detail?id=" + this.jobId));
                  })
                  .catch((e) => {}));
            },
            deleteJoblogResult() {
              this.$q
                .dialog({
                  title: "确认删除",
                  message: "该工作日志内容将被删除。</span>",
                  html: !0,
                  persistent: !0,
                  cancel: { label: "取消", outline: !0, color: "grey" },
                  ok: { label: "删除", unelevated: !0, color: "negative" },
                })
                .onOk(() => {
                  this.$axiosAction("/api/teacher/joblog/joblog.api", {
                    action: "deleteJoblogResult",
                    id: this.joblogRstId,
                  })
                    .then((e) => {
                      0 === e.data.code &&
                        this.$router.push("/teacher/joblog/Detail?id=" + this.jobId);
                    })
                    .catch((e) => {});
                });
            },
          },
        },
        c = n,
        d = o("2877"),
        u = o("4d5a"),
        h = o("e359"),
        g = o("65c6"),
        b = o("9c40"),
        p = o("6ac5"),
        w = o("09e3"),
        f = o("9989"),
        m = o("0378"),
        y = o("f09f"),
        q = o("1c1c"),
        v = o("a370"),
        _ = o("7ff0"),
        I = o("7f67"),
        S = o("eebe"),
        j = o.n(S),
        x = Object(d["a"])(c, i, l, !1, null, null, null);
      t["default"] = x.exports;
      (j()(x, "components", {
        QLayout: u["a"],
        QHeader: h["a"],
        QToolbar: g["a"],
        QBtn: b["a"],
        QToolbarTitle: p["a"],
        QPageContainer: w["a"],
        QPage: f["a"],
        QForm: m["a"],
        QCard: y["a"],
        QList: q["a"],
        QCardSection: v["a"],
        QFooter: _["a"],
      }),
        j()(x, "directives", { ClosePopup: I["a"] }));
    },
  },
]);
