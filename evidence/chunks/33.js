(window["webpackJsonp"] = window["webpackJsonp"] || []).push([
  [33],
  {
    "4f38": function (e, t, a) {
      "use strict";
      a.r(t);
      var r = function () {
          var e = this,
            t = e.$createElement,
            a = e._self._c || t;
          return a(
            "q-layout",
            { attrs: { view: "lHh lpr lFf" } },
            [
              a(
                "q-header",
                { staticClass: "bg-grey-3 text-black" },
                [
                  a(
                    "q-toolbar",
                    [
                      a("q-btn", {
                        attrs: { flat: "", round: "", dense: "", icon: "keyboard_arrow_left" },
                        on: { click: e.goBack },
                      }),
                      a("q-toolbar-title", [e._v("通知详情")]),
                    ],
                    1,
                  ),
                ],
                1,
              ),
              a(
                "q-page-container",
                [
                  a(
                    "q-page",
                    { staticClass: "bg-grey-3" },
                    [
                      a(
                        "q-card",
                        { staticClass: "full-width", attrs: { flat: "" } },
                        [
                          a(
                            "q-tab-panels",
                            {
                              model: {
                                value: e.tab,
                                callback: function (t) {
                                  e.tab = t;
                                },
                                expression: "tab",
                              },
                            },
                            [
                              a(
                                "q-tab-panel",
                                { attrs: { name: "detail" } },
                                [
                                  a(
                                    "div",
                                    [
                                      a(
                                        "q-chip",
                                        {
                                          attrs: {
                                            square: "",
                                            color: e.record.notice_priority_color,
                                            "text-color": "white",
                                            icon: "email",
                                            size: "sm",
                                          },
                                        },
                                        [
                                          e._v(
                                            "\n                " +
                                              e._s(e.record.notice_priority_name) +
                                              "\n              ",
                                          ),
                                        ],
                                      ),
                                    ],
                                    1,
                                  ),
                                  a("div", { staticClass: "text-h6" }, [
                                    e._v(e._s(e.record.title)),
                                  ]),
                                  null !== e.record.dep_name
                                    ? a("div", { staticClass: "q-ml-sm row" }, [
                                        a(
                                          "span",
                                          { staticClass: "neu-css-after-colon text-grey" },
                                          [e._v("发布单位")],
                                        ),
                                        e._v(e._s(e.record.dep_name) + "\n            "),
                                      ])
                                    : e._e(),
                                  a("div", { staticClass: "q-ml-sm row" }, [
                                    a("span", { staticClass: "neu-css-after-colon text-grey" }, [
                                      e._v("查阅学生"),
                                    ]),
                                    a("span", [
                                      e._v(
                                        e._s(e.userInfo.name) +
                                          "(" +
                                          e._s(e.userInfo.login_name) +
                                          ")",
                                      ),
                                    ]),
                                  ]),
                                  a("q-separator", { staticClass: "q-mt-sm q-mb-md" }),
                                  a("div", {
                                    staticClass: "q-pt-none",
                                    domProps: { innerHTML: e._s(e.record.detail) },
                                  }),
                                  a("q-separator", {
                                    directives: [
                                      {
                                        name: "show",
                                        rawName: "v-show",
                                        value: null != e.record.attachment,
                                        expression: "record.attachment != null",
                                      },
                                    ],
                                    staticClass: "q-mt-md q-mb-md",
                                  }),
                                  a(
                                    "div",
                                    {
                                      directives: [
                                        {
                                          name: "show",
                                          rawName: "v-show",
                                          value: null != e.record.attachment,
                                          expression: "record.attachment != null",
                                        },
                                      ],
                                      staticClass: "q-mt-sm",
                                    },
                                    e._l(e.record.attachment, function (t) {
                                      return a(
                                        "div",
                                        {
                                          key: t.size,
                                          staticClass: "text-grey",
                                          on: {
                                            click: function (a) {
                                              return e.downloadFile(t.link, t.srcname);
                                            },
                                          },
                                        },
                                        [
                                          a("q-icon", {
                                            attrs: {
                                              name: "attach_file",
                                              color: "grey",
                                              size: "xs",
                                            },
                                          }),
                                          e._v(
                                            "\n                " +
                                              e._s(t.srcname) +
                                              "\n              ",
                                          ),
                                        ],
                                        1,
                                      );
                                    }),
                                    0,
                                  ),
                                  a("q-separator", {
                                    directives: [
                                      {
                                        name: "show",
                                        rawName: "v-show",
                                        value:
                                          1 == e.record.confirm_flag &&
                                          null == e.record.confirm_time &&
                                          2 == e.record.jude,
                                        expression:
                                          "record.confirm_flag == 1 && record.confirm_time == null && record.jude == 2",
                                      },
                                    ],
                                    staticClass: "q-mt-md q-mb-md",
                                  }),
                                  a(
                                    "div",
                                    {
                                      directives: [
                                        {
                                          name: "show",
                                          rawName: "v-show",
                                          value:
                                            1 == e.record.confirm_flag &&
                                            null == e.record.confirm_time &&
                                            2 == e.record.jude,
                                          expression:
                                            "record.confirm_flag == 1 && record.confirm_time == null && record.jude == 2",
                                        },
                                      ],
                                      staticClass: "row",
                                    },
                                    e._l(e.info_config, function (t, r) {
                                      return a(
                                        "div",
                                        { key: r, staticClass: "col-12" },
                                        [
                                          a("neu-widget", {
                                            attrs: {
                                              labelClass:
                                                "col-12 col-md-6 col-sm-9 text-left text-grey" +
                                                (e.$q.screen.lt.sm ? "text-right" : ""),
                                              controlClass: "col-12 col-md-11 col-sm-9",
                                              config: t,
                                              viewMode: !1,
                                            },
                                            model: {
                                              value: e.info_result[r],
                                              callback: function (t) {
                                                e.$set(e.info_result, r, t);
                                              },
                                              expression: "info_result[index]",
                                            },
                                          }),
                                        ],
                                        1,
                                      );
                                    }),
                                    0,
                                  ),
                                  a(
                                    "q-btn",
                                    {
                                      directives: [
                                        {
                                          name: "show",
                                          rawName: "v-show",
                                          value:
                                            1 == e.record.confirm_flag &&
                                            null == e.record.confirm_time &&
                                            2 == e.record.jude,
                                          expression:
                                            "record.confirm_flag == 1 && record.confirm_time == null && record.jude == 2",
                                        },
                                      ],
                                      staticClass: "full-width q-mt-md",
                                      attrs: { color: "primary" },
                                      on: { click: e.update_confirm_flag },
                                    },
                                    [e._v("确认已读")],
                                  ),
                                ],
                                1,
                              ),
                            ],
                            1,
                          ),
                          a(
                            "q-card",
                            {
                              directives: [
                                {
                                  name: "show",
                                  rawName: "v-show",
                                  value: "qa" == e.tab,
                                  expression: "tab == 'qa'",
                                },
                              ],
                              staticClass: "bg-grey-3",
                              attrs: { flat: "" },
                            },
                            [
                              a(
                                "q-card-section",
                                [
                                  a("neu-qa-list", {
                                    attrs: { taskMenuId: "notice", taskId: e.id + "" },
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
              ),
              a(
                "q-footer",
                { staticClass: "bg-white text-primary", attrs: { bordered: "" } },
                [
                  a(
                    "q-tabs",
                    {
                      staticClass: "text-grey",
                      attrs: {
                        "no-caps": "",
                        "active-color": "primary",
                        "indicator-color": "transparent",
                        align: "justify",
                      },
                      model: {
                        value: e.tab,
                        callback: function (t) {
                          e.tab = t;
                        },
                        expression: "tab",
                      },
                    },
                    [
                      a("q-tab", { attrs: { name: "detail", label: "通知详情" } }),
                      a("q-separator", { attrs: { vertical: "" } }),
                      a("q-tab", { attrs: { name: "qa", label: "提问" } }),
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
        s = [],
        o = a("974f"),
        i = a("7590"),
        n = a("ad56"),
        l = {
          components: { NeuQaList: i["a"], NeuWidget: o["a"] },
          name: "NoticeDetail",
          data() {
            return {
              record: {},
              tab: "detail",
              id: this.$route.query.id,
              dialog: !1,
              modelValue: null,
              info_result: [],
              info_config: [{ type: "S", label: "请签名", required: !1 }],
              userInfo: JSON.parse(window.localStorage.getItem("userinfo")),
            };
          },
          destroyed() {
            window.removeEventListener("popstate", this.goBack, !1);
          },
          mounted() {
            (this.$axiosAction("/api/student/notice/notice.api", {
              action: "getNoticeDetail",
              id: this.id,
            }).then((e) => {
              0 === e.data.code
                ? (this.record = e.data.result)
                : 2002 === e.data.code && this.$router.push("/student/notice/index");
            }),
              window.history &&
                window.history.pushState &&
                (history.pushState(null, null, document.URL),
                window.addEventListener("popstate", this.goBack, !1)));
          },
          computed: {},
          methods: {
            update_confirm_flag() {
              if (
                1 === this.record.confirm_flag &&
                null === this.record.confirm_time &&
                2 === this.record.jude &&
                void 0 === this.info_result[0]
              )
                return this.$showErrorNotify("请签名");
              this.$q.loading.show();
              const e =
                this.info_result && this.info_result.length > 0 && void 0 !== this.info_result[0]
                  ? JSON.stringify(this.info_result)
                  : null;
              this.$axiosAction("/api/student/notice/notice.api", {
                action: "updateConfirmtime",
                id: this.id,
                signature: e,
              }).then((e) => {
                (this.$q.loading.hide(), this.$router.push("/student/notice/index"));
              });
            },
            downloadFile(e, t) {
              Object(n["c"])(e, t);
            },
            goBack() {
              this.$router.push("/student/notice/index");
            },
            generateEsign() {
              this.$refs.esign
                .generate()
                .then((e) => {
                  ((this.modelValue = e), (this.dialog = !1));
                })
                .catch(() => {
                  null === this.modelValue
                    ? this.$showErrorNotify("请签名")
                    : ((this.modelValue = null), (this.dialog = !1));
                });
            },
            resetEsign() {
              this.$refs.esign.reset();
            },
          },
        },
        c = l,
        d = a("2877"),
        u = a("4d5a"),
        m = a("e359"),
        f = a("65c6"),
        h = a("9c40"),
        p = a("6ac5"),
        _ = a("09e3"),
        g = a("9989"),
        b = a("f09f"),
        v = a("adad"),
        w = a("823b"),
        q = a("b047"),
        y = a("eb85"),
        x = a("0016"),
        C = a("a370"),
        k = a("7ff0"),
        Q = a("429b"),
        $ = a("7460"),
        N = a("eebe"),
        j = a.n(N),
        S = Object(d["a"])(c, r, s, !1, null, null, null);
      t["default"] = S.exports;
      j()(S, "components", {
        QLayout: u["a"],
        QHeader: m["a"],
        QToolbar: f["a"],
        QBtn: h["a"],
        QToolbarTitle: p["a"],
        QPageContainer: _["a"],
        QPage: g["a"],
        QCard: b["a"],
        QTabPanels: v["a"],
        QTabPanel: w["a"],
        QChip: q["a"],
        QSeparator: y["a"],
        QIcon: x["a"],
        QCardSection: C["a"],
        QFooter: k["a"],
        QTabs: Q["a"],
        QTab: $["a"],
      });
    },
  },
]);
