(window["webpackJsonp"] = window["webpackJsonp"] || []).push([
  [50],
  {
    b6d3: function (t, e, a) {
      "use strict";
      a.r(e);
      var s = function () {
          var t = this,
            e = t.$createElement,
            a = t._self._c || e;
          return a(
            "q-layout",
            { attrs: { view: "lHh lpr lFf" } },
            [
              a(
                "q-header",
                {
                  directives: [
                    {
                      name: "show",
                      rawName: "v-show",
                      value: "scan" == t.tab,
                      expression: "tab == 'scan'",
                    },
                  ],
                  staticClass: "bg-grey-3 text-black",
                },
                [
                  a(
                    "q-toolbar",
                    [
                      a("q-btn", {
                        attrs: { flat: "", round: "", dense: "", icon: "keyboard_arrow_left" },
                        on: { click: t.goBack },
                      }),
                      a("q-toolbar-title", [t._v(t._s(t.title))]),
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
                      a("q-card", { staticClass: "full-width", attrs: { flat: "" } }, [
                        a(
                          "div",
                          [
                            a(
                              "q-chip",
                              {
                                staticClass: "q-ma-sm",
                                attrs: {
                                  square: "",
                                  color: "red",
                                  "text-color": "white",
                                  icon: "gradient",
                                  size: "sm",
                                },
                              },
                              [t._v("\n            二维码负责人\n          ")],
                            ),
                          ],
                          1,
                        ),
                        a("div", { staticClass: "q-ml-sm row" }, [
                          a(
                            "span",
                            {
                              staticClass: "full-width text-weight-bold",
                              staticStyle: { "font-size": "15px" },
                            },
                            [t._v(t._s(t.record.title))],
                          ),
                          a("span", { staticClass: "neu-css-after-colon text-grey" }, [
                            t._v("发起人"),
                          ]),
                          t._v(t._s(t.record.name) + "\n        "),
                        ]),
                        a("div", { staticClass: "q-ml-sm row" }, [
                          a("span", { staticClass: "neu-css-after-colon text-grey" }, [
                            t._v("签到时间段"),
                          ]),
                          t._v(
                            t._s(t.record.begin_time) +
                              " 至 " +
                              t._s(t.record.end_time) +
                              "\n        ",
                          ),
                        ]),
                        a("div", { staticClass: "q-ml-sm row" }, [
                          a("span", { staticClass: "neu-css-after-colon text-grey" }, [
                            t._v("二维码负责人"),
                          ]),
                          t._v(t._s(t.stuName) + " (" + t._s(t.loginName) + ")\n        "),
                        ]),
                      ]),
                      a(
                        "q-card",
                        {
                          directives: [
                            {
                              name: "show",
                              rawName: "v-show",
                              value: "scan" == t.tab,
                              expression: "tab == 'scan'",
                            },
                          ],
                          staticClass: "full-width q-mt-sm",
                          attrs: { flat: "" },
                        },
                        [
                          a(
                            "q-card-section",
                            {
                              directives: [
                                {
                                  name: "show",
                                  rawName: "v-show",
                                  value: "SQR" == t.record.signin_method,
                                  expression: "record.signin_method == 'SQR'",
                                },
                              ],
                              staticClass: "text-center",
                            },
                            [
                              [
                                a("vue-qr", {
                                  attrs: {
                                    text: t.downloadData.text,
                                    colorDark: "#3B3B3B",
                                    colorLight: "#fff",
                                    size: 350,
                                  },
                                }),
                              ],
                            ],
                            2,
                          ),
                          a(
                            "q-card-section",
                            {
                              directives: [
                                {
                                  name: "show",
                                  rawName: "v-show",
                                  value: "DQR" == t.record.signin_method,
                                  expression: "record.signin_method == 'DQR'",
                                },
                              ],
                              staticClass: "text-center",
                            },
                            [
                              [
                                a("vue-qr", {
                                  attrs: {
                                    text: t.downloadData.text,
                                    colorDark: "#3B3B3B",
                                    colorLight: "#fff",
                                    size: 350,
                                  },
                                }),
                              ],
                            ],
                            2,
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
                      staticClass: "text-black",
                      attrs: {
                        "no-caps": "",
                        "active-color": "primary",
                        "indicator-color": "transparent",
                        align: "justify",
                      },
                      model: {
                        value: t.tab,
                        callback: function (e) {
                          t.tab = e;
                        },
                        expression: "tab",
                      },
                    },
                    [
                      a("q-tab", { attrs: { name: "scan", label: "签到扫描" } }),
                      a("q-separator", { attrs: { vertical: "" } }),
                      a("q-tab", {
                        attrs: { name: "personnel", label: "签到人员列表" },
                        on: {
                          click: function (e) {
                            return t.goPersonnel(t.id, t.batch_no, t.title);
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
          );
        },
        i = [],
        o = a("658f"),
        n = a.n(o),
        r = {
          components: { vueQr: n.a },
          name: "signin",
          data() {
            return {
              tab: "scan",
              record: {},
              loginName: JSON.parse(localStorage.getItem("userinfo")).login_name,
              stuName: JSON.parse(localStorage.getItem("userinfo")).name,
              downloadData: { text: "" },
              setInter: "",
              title: this.$route.params.title,
              id: this.$route.params.id,
              batch_no: this.$route.params.batch_no,
            };
          },
          destroyed() {
            window.removeEventListener("popstate", this.goBack, !1);
          },
          mounted() {
            (this.onload(),
              window.history &&
                window.history.pushState &&
                (history.pushState(null, null, document.URL),
                window.addEventListener("popstate", this.goBack, !1)));
          },
          methods: {
            onload() {
              this.$axiosAction("/api/student/signin/signin.api", {
                action: "getSigninPersonalDetails",
                id: this.$route.params.id,
                batch_no: this.$route.params.batch_no,
              }).then((t) => {
                0 === t.data.code
                  ? ((this.record = t.data.result),
                    "SQR" === this.record.signin_method
                      ? (this.getSqrCode(),
                        (this.setInter = setInterval(() => {
                          this.getSqrCode();
                        }, 31536e7)))
                      : (this.getQrCode(),
                        (this.setInter = setInterval(() => {
                          this.getQrCode();
                        }, 6e4))))
                  : this.goBack();
              });
            },
            getSqrCode() {
              this.$axiosAction("/api/student/signin/signin.api", {
                action: "stuEncrytedQrCode",
                signin_method: this.record.signin_method,
                id: this.$route.params.id,
                batch_no: this.$route.params.batch_no,
                role_type: "S",
                login_name: this.loginName,
                name: this.stuName,
              }).then((t) => {
                this.downloadData.text = t.data.qrcode;
              });
            },
            getQrCode() {
              (this.$q.loading.show(),
                this.$axiosAction("/api/student/signin/signin.api", {
                  action: "stuEncrytedQrCode",
                  signin_method: this.record.signin_method,
                  id: this.$route.params.id,
                  batch_no: this.$route.params.batch_no,
                  role_type: "S",
                  login_name: this.loginName,
                  name: this.stuName,
                }).then((t) => {
                  ((this.downloadData.text = t.data.qrcode), this.$q.loading.hide());
                }));
            },
            goBack() {
              this.$router.push("/student/signin/qrcodePerson");
            },
            goPersonnel(t, e, a) {
              this.$router.push({
                name: "/student/signin/signinPersonnel",
                query: { id: t, batch_no: e, title: a },
              });
            },
          },
        },
        c = r,
        l = a("2877"),
        d = a("4d5a"),
        h = a("e359"),
        m = a("65c6"),
        u = a("9c40"),
        g = a("6ac5"),
        p = a("09e3"),
        b = a("9989"),
        _ = a("f09f"),
        w = a("b047"),
        v = a("a370"),
        q = a("7ff0"),
        f = a("429b"),
        C = a("7460"),
        x = a("eb85"),
        Q = a("eebe"),
        y = a.n(Q),
        S = Object(l["a"])(c, s, i, !1, null, null, null);
      e["default"] = S.exports;
      y()(S, "components", {
        QLayout: d["a"],
        QHeader: h["a"],
        QToolbar: m["a"],
        QBtn: u["a"],
        QToolbarTitle: g["a"],
        QPageContainer: p["a"],
        QPage: b["a"],
        QCard: _["a"],
        QChip: w["a"],
        QCardSection: v["a"],
        QFooter: q["a"],
        QTabs: f["a"],
        QTab: C["a"],
        QSeparator: x["a"],
      });
    },
  },
]);
