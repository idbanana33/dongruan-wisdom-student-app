(window["webpackJsonp"] = window["webpackJsonp"] || []).push([
  [96],
  {
    8087: function (e, t, s) {
      "use strict";
      s.r(t);
      var a = function () {
          var e = this,
            t = e.$createElement,
            s = e._self._c || t;
          return s(
            "q-layout",
            { attrs: { view: "lHh lpr lFf" } },
            [
              s(
                "q-header",
                { staticClass: "bg-grey-3 text-black" },
                [
                  s(
                    "q-toolbar",
                    [
                      s("q-btn", {
                        attrs: { flat: "", round: "", dense: "", icon: "keyboard_arrow_left" },
                        on: { click: e.goBack },
                      }),
                      s("q-toolbar-title", [e._v("新建" + e._s(e.menuInfo.title))]),
                    ],
                    1,
                  ),
                  s("q-separator"),
                ],
                1,
              ),
              s(
                "q-page-container",
                [
                  s(
                    "q-page",
                    { staticClass: "bg-white-3" },
                    [
                      s(
                        "q-form",
                        { staticClass: "q-gutter-sm full-width", on: { submit: e.saveNews } },
                        [
                          e.menuInfo
                            ? s(
                                "q-card",
                                { staticClass: "full-width", attrs: { flat: "" } },
                                [
                                  s(
                                    "q-list",
                                    [
                                      s(
                                        "q-item",
                                        [
                                          s(
                                            "q-item-section",
                                            [
                                              s("q-item-label", { staticClass: "text-bold" }, [
                                                e._v("新闻内容"),
                                              ]),
                                            ],
                                            1,
                                          ),
                                        ],
                                        1,
                                      ),
                                      s("q-separator"),
                                      s(
                                        "q-item",
                                        [
                                          s("q-item-section", { attrs: { avatar: "" } }, [
                                            s(
                                              "div",
                                              { staticClass: "neu-css-before-red-asterisk" },
                                              [e._v("\n                标题\n              ")],
                                            ),
                                          ]),
                                          s(
                                            "q-item-section",
                                            [
                                              s("q-input", {
                                                attrs: {
                                                  outlined: "",
                                                  dense: "",
                                                  "hide-bottom-space": "",
                                                  "lazy-rules": "",
                                                  rules: [
                                                    function (e) {
                                                      return !!e || "请填写该项";
                                                    },
                                                  ],
                                                },
                                                model: {
                                                  value: e.news.title,
                                                  callback: function (t) {
                                                    e.$set(e.news, "title", t);
                                                  },
                                                  expression: "news.title",
                                                },
                                              }),
                                            ],
                                            1,
                                          ),
                                        ],
                                        1,
                                      ),
                                      s("q-separator"),
                                      s(
                                        "q-item",
                                        [
                                          s("q-item-section", { attrs: { avatar: "" } }, [
                                            s("div", [
                                              e._v("\n                发布单位\n              "),
                                            ]),
                                          ]),
                                          s(
                                            "q-item-section",
                                            [
                                              s("q-select", {
                                                attrs: {
                                                  outlined: "",
                                                  "emit-value": "",
                                                  "map-options": "",
                                                  dense: "",
                                                  options: e.depoptions,
                                                  clearable: "",
                                                },
                                                model: {
                                                  value: e.news.dep_no,
                                                  callback: function (t) {
                                                    e.$set(e.news, "dep_no", t);
                                                  },
                                                  expression: "news.dep_no",
                                                },
                                              }),
                                            ],
                                            1,
                                          ),
                                        ],
                                        1,
                                      ),
                                      s("q-separator"),
                                      s(
                                        "q-item",
                                        [
                                          s("q-item-section", { attrs: { avatar: "" } }, [
                                            s("div", [
                                              e._v(
                                                "\n                添加链接新闻\n              ",
                                              ),
                                            ]),
                                          ]),
                                          s("q-item-section"),
                                          s(
                                            "q-item-section",
                                            { attrs: { side: "" } },
                                            [
                                              s("q-toggle", {
                                                attrs: {
                                                  size: "lg",
                                                  "checked-icon": "check",
                                                  "unchecked-icon": "clear",
                                                  dense: "",
                                                  "false-value": "0",
                                                  "true-value": "1",
                                                },
                                                model: {
                                                  value: e.news.external_flag,
                                                  callback: function (t) {
                                                    e.$set(e.news, "external_flag", t);
                                                  },
                                                  expression: "news.external_flag",
                                                },
                                              }),
                                            ],
                                            1,
                                          ),
                                        ],
                                        1,
                                      ),
                                      s("q-separator"),
                                      "0" == e.news.external_flag
                                        ? s(
                                            "q-item",
                                            [
                                              s(
                                                "q-item-section",
                                                [
                                                  s(
                                                    "q-item-label",
                                                    {
                                                      staticClass:
                                                        "neu-css-before-red-asterisk q-my-sm",
                                                    },
                                                    [e._v("正文")],
                                                  ),
                                                  s("q-editor", {
                                                    attrs: {
                                                      toolbar: e.editorToolBar,
                                                      fonts: e.editorFonts,
                                                      "min-height": "8em",
                                                      "hide-bottom-space": "",
                                                      "lazy-rules": "",
                                                      rules: [
                                                        function (e) {
                                                          return !!e || "请填写该项";
                                                        },
                                                      ],
                                                    },
                                                    model: {
                                                      value: e.news.detail,
                                                      callback: function (t) {
                                                        e.$set(e.news, "detail", t);
                                                      },
                                                      expression: "news.detail",
                                                    },
                                                  }),
                                                ],
                                                1,
                                              ),
                                            ],
                                            1,
                                          )
                                        : e._e(),
                                      "0" == e.news.external_flag ? s("q-separator") : e._e(),
                                      "1" == e.news.external_flag
                                        ? s(
                                            "q-item",
                                            [
                                              s("q-item-section", { attrs: { avatar: "" } }, [
                                                s(
                                                  "div",
                                                  { staticClass: "neu-css-before-red-asterisk" },
                                                  [
                                                    e._v(
                                                      "\n                链接新闻\n              ",
                                                    ),
                                                  ],
                                                ),
                                              ]),
                                              s(
                                                "q-item-section",
                                                [
                                                  s("q-input", {
                                                    attrs: {
                                                      outlined: "",
                                                      dense: "",
                                                      "hide-bottom-space": "",
                                                      "lazy-rules": "",
                                                      rules: [
                                                        function (e) {
                                                          return !!e || "请填写该项";
                                                        },
                                                      ],
                                                    },
                                                    model: {
                                                      value: e.news.link,
                                                      callback: function (t) {
                                                        e.$set(e.news, "link", t);
                                                      },
                                                      expression: "news.link",
                                                    },
                                                  }),
                                                ],
                                                1,
                                              ),
                                            ],
                                            1,
                                          )
                                        : e._e(),
                                      "1" == e.news.external_flag ? s("q-separator") : e._e(),
                                      s(
                                        "q-item",
                                        [
                                          s("q-item-section", { attrs: { avatar: "" } }, [
                                            s("div", [
                                              e._v(
                                                "\n                推送至在籍学生\n              ",
                                              ),
                                            ]),
                                          ]),
                                          s("q-item-section"),
                                          s(
                                            "q-item-section",
                                            { attrs: { side: "" } },
                                            [
                                              s("q-toggle", {
                                                attrs: {
                                                  size: "lg",
                                                  "checked-icon": "check",
                                                  "unchecked-icon": "clear",
                                                  dense: "",
                                                  "false-value": "0",
                                                  "true-value": "1",
                                                },
                                                model: {
                                                  value: e.news.push_to_student,
                                                  callback: function (t) {
                                                    e.$set(e.news, "push_to_student", t);
                                                  },
                                                  expression: "news.push_to_student",
                                                },
                                              }),
                                            ],
                                            1,
                                          ),
                                        ],
                                        1,
                                      ),
                                      s("q-separator"),
                                      s(
                                        "q-item",
                                        [
                                          s("q-item-section", { attrs: { avatar: "" } }, [
                                            s("div", [
                                              e._v("\n                推送至教师\n              "),
                                            ]),
                                          ]),
                                          s("q-item-section"),
                                          s(
                                            "q-item-section",
                                            { attrs: { side: "" } },
                                            [
                                              s("q-toggle", {
                                                attrs: {
                                                  size: "lg",
                                                  "checked-icon": "check",
                                                  "unchecked-icon": "clear",
                                                  dense: "",
                                                  "false-value": "0",
                                                  "true-value": "1",
                                                },
                                                model: {
                                                  value: e.news.push_to_teacher,
                                                  callback: function (t) {
                                                    e.$set(e.news, "push_to_teacher", t);
                                                  },
                                                  expression: "news.push_to_teacher",
                                                },
                                              }),
                                            ],
                                            1,
                                          ),
                                        ],
                                        1,
                                      ),
                                      s("q-separator"),
                                      s(
                                        "q-item",
                                        [
                                          s("q-item-section", { attrs: { avatar: "" } }, [
                                            s("div", [
                                              e._v("\n                结束时间\n              "),
                                            ]),
                                          ]),
                                          s(
                                            "q-item-section",
                                            [
                                              s("q-field", {
                                                staticStyle: { width: "200px" },
                                                attrs: {
                                                  outlined: "",
                                                  dense: "",
                                                  "stack-label": "",
                                                  "hide-bottom-space": "",
                                                  "lazy-rules": "",
                                                  value: e.news.banner_end_date,
                                                },
                                                scopedSlots: e._u(
                                                  [
                                                    {
                                                      key: "control",
                                                      fn: function () {
                                                        return [e._v(e._s(e.news.banner_end_date))];
                                                      },
                                                      proxy: !0,
                                                    },
                                                    {
                                                      key: "append",
                                                      fn: function () {
                                                        return [
                                                          s(
                                                            "q-icon",
                                                            {
                                                              staticClass: "cursor-pointer",
                                                              attrs: { name: "event" },
                                                            },
                                                            [
                                                              s(
                                                                "q-popup-proxy",
                                                                {
                                                                  attrs: {
                                                                    "transition-show": "scale",
                                                                    "transition-hide": "scale",
                                                                  },
                                                                },
                                                                [
                                                                  s(
                                                                    "div",
                                                                    [
                                                                      s(
                                                                        "q-date",
                                                                        {
                                                                          attrs: {
                                                                            flat: "",
                                                                            minimal: "",
                                                                            mask: "YYYY-MM-DD HH:mm",
                                                                          },
                                                                          model: {
                                                                            value:
                                                                              e.news
                                                                                .banner_end_date,
                                                                            callback: function (t) {
                                                                              e.$set(
                                                                                e.news,
                                                                                "banner_end_date",
                                                                                t,
                                                                              );
                                                                            },
                                                                            expression:
                                                                              "news.banner_end_date",
                                                                          },
                                                                        },
                                                                        [
                                                                          s(
                                                                            "div",
                                                                            {
                                                                              staticClass:
                                                                                "row items-center justify-end",
                                                                            },
                                                                            [
                                                                              s("q-btn", {
                                                                                directives: [
                                                                                  {
                                                                                    name: "close-popup",
                                                                                    rawName:
                                                                                      "v-close-popup",
                                                                                  },
                                                                                ],
                                                                                attrs: {
                                                                                  dense: "",
                                                                                  label: "关闭",
                                                                                  flat: "",
                                                                                },
                                                                              }),
                                                                            ],
                                                                            1,
                                                                          ),
                                                                        ],
                                                                      ),
                                                                    ],
                                                                    1,
                                                                  ),
                                                                ],
                                                              ),
                                                            ],
                                                            1,
                                                          ),
                                                          s(
                                                            "q-icon",
                                                            {
                                                              staticClass: "cursor-pointer",
                                                              attrs: { name: "access_time" },
                                                            },
                                                            [
                                                              s(
                                                                "q-popup-proxy",
                                                                {
                                                                  attrs: {
                                                                    "transition-show": "scale",
                                                                    "transition-hide": "scale",
                                                                  },
                                                                },
                                                                [
                                                                  s(
                                                                    "div",
                                                                    {
                                                                      staticClass:
                                                                        "row items-start",
                                                                    },
                                                                    [
                                                                      s(
                                                                        "q-time",
                                                                        {
                                                                          attrs: {
                                                                            flat: "",
                                                                            mask: "YYYY-MM-DD HH:mm",
                                                                            format24h: "",
                                                                          },
                                                                          model: {
                                                                            value:
                                                                              e.news
                                                                                .banner_end_date,
                                                                            callback: function (t) {
                                                                              e.$set(
                                                                                e.news,
                                                                                "banner_end_date",
                                                                                t,
                                                                              );
                                                                            },
                                                                            expression:
                                                                              "news.banner_end_date",
                                                                          },
                                                                        },
                                                                        [
                                                                          s(
                                                                            "div",
                                                                            {
                                                                              staticClass:
                                                                                "row items-center justify-end",
                                                                            },
                                                                            [
                                                                              s("q-btn", {
                                                                                directives: [
                                                                                  {
                                                                                    name: "close-popup",
                                                                                    rawName:
                                                                                      "v-close-popup",
                                                                                  },
                                                                                ],
                                                                                attrs: {
                                                                                  dense: "",
                                                                                  label: "关闭",
                                                                                  flat: "",
                                                                                },
                                                                              }),
                                                                            ],
                                                                            1,
                                                                          ),
                                                                        ],
                                                                      ),
                                                                    ],
                                                                    1,
                                                                  ),
                                                                ],
                                                              ),
                                                            ],
                                                            1,
                                                          ),
                                                        ];
                                                      },
                                                      proxy: !0,
                                                    },
                                                  ],
                                                  null,
                                                  !1,
                                                  618999661,
                                                ),
                                              }),
                                            ],
                                            1,
                                          ),
                                        ],
                                        1,
                                      ),
                                      s(
                                        "q-item",
                                        [
                                          s("q-item-label", [
                                            s("span", { staticClass: "text-grey text-caption" }, [
                                              e._v(
                                                "设置该新闻在app主页中轮播的结束时间，不设置则不在app轮播中显示",
                                              ),
                                            ]),
                                          ]),
                                        ],
                                        1,
                                      ),
                                    ],
                                    1,
                                  ),
                                ],
                                1,
                              )
                            : e._e(),
                          s(
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
                              s("q-btn", {
                                staticStyle: { width: "40%", height: "100%" },
                                attrs: {
                                  outline: "",
                                  color: "grey",
                                  label: "取消",
                                  to: "/teacher/news/index",
                                },
                              }),
                              s("q-btn", {
                                staticStyle: { width: "60%", height: "100%" },
                                attrs: { color: "primary", label: "发布", type: "submit" },
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
        n = [],
        i = (s("fb6a"), s("ded3")),
        o = s.n(i),
        r = {
          name: "newsNew",
          data() {
            return {
              editorToolBar: JSON.parse(window.localStorage.editorToolBar),
              editorFonts: JSON.parse(window.localStorage.editorFonts),
              menuInfo: null,
              news: {
                portal_flag: 0,
                banner_end_date: null,
                detail: "",
                external_flag: "0",
                push_to_student: "0",
                push_to_teacher: "0",
                link: null,
                dep_no: null,
              },
              pushType: 0,
              depoptions: [],
              dep_no: JSON.parse(localStorage.getItem("userinfo")).dep_no,
              roleId: JSON.parse(localStorage.getItem("userinfo")).role_id,
            };
          },
          mounted() {
            (window.localStorage.getItem("menu") &&
              (this.menuInfo = JSON.parse(window.localStorage.getItem("menu")).find(
                (e) => "news" === e.id,
              )),
              this.getDepList());
          },
          methods: {
            goBack() {
              this.$router.push("/teacher/news/index");
            },
            saveNews() {
              (this.news.link && !1 === this.checkLink()) ||
                (this.news.title.length > 50
                  ? this.$showErrorNotify("标题长度不能超过50")
                  : "0" !== this.news.external_flag || "" !== this.news.detail
                    ? ("1" === this.news.external_flag
                        ? (this.news.detail = "")
                        : (this.news.link = ""),
                      "1" === this.news.push_to_student && "1" === this.news.push_to_teacher
                        ? (this.pushType = 3)
                        : "0" === this.news.push_to_student && "1" === this.news.push_to_teacher
                          ? (this.pushType = 1)
                          : "1" === this.news.push_to_student &&
                            "0" === this.news.push_to_teacher &&
                            (this.pushType = 2),
                      ("" !== this.news.dep_no && void 0 !== this.news.dep_no) ||
                        (this.news.dep_no = null),
                      this.$q.loading.show(),
                      this.$axiosAction(
                        "/api/teacher/news/news.api",
                        o()(
                          o()({ action: "insertNews" }, this.news),
                          {},
                          { roleId: this.roleId, pushType: this.pushType },
                        ),
                      )
                        .then((e) => {
                          (0 === e.data.code && this.$router.push("/teacher/news/index"),
                            this.$q.loading.hide());
                        })
                        .catch((e) => {
                          (this.$q.loading.hide(), (this.list = []));
                        }))
                    : this.$showErrorNotify("请填写正文"));
            },
            checkLink() {
              const e = this.news.link;
              return (
                "http://" === e.slice(0, 7) ||
                "https://" === e.slice(0, 8) ||
                (this.$showErrorNotify("链接开头必须包含http://或者https://"), !1)
              );
            },
            getDepList() {
              this.$axiosAction("/api/public.api", {
                action: "queryResultOfFunction",
                functionName: "basic.f_query_department_list()",
              })
                .then((e) => {
                  0 === e.data.code &&
                    ((this.depoptions = e.data.list),
                    (this.news.dep_no = this.depoptions.find(
                      (e) => e.value === this.dep_no,
                    ).value));
                })
                .catch((e) => {
                  this.options = [];
                });
            },
          },
        },
        l = r,
        c = s("2877"),
        d = s("4d5a"),
        p = s("e359"),
        u = s("65c6"),
        h = s("9c40"),
        m = s("6ac5"),
        w = s("eb85"),
        _ = s("09e3"),
        q = s("9989"),
        f = s("0378"),
        b = s("f09f"),
        v = s("1c1c"),
        g = s("66e5"),
        k = s("4074"),
        x = s("0170"),
        y = s("27f9"),
        Q = s("ddd8"),
        $ = s("9564"),
        S = s("d66b"),
        C = s("8572"),
        I = s("0016"),
        N = s("7cbe"),
        T = s("52ee"),
        F = s("ca78"),
        Y = s("7ff0"),
        z = s("7f67"),
        D = s("eebe"),
        J = s.n(D),
        L = Object(c["a"])(l, a, n, !1, null, null, null);
      t["default"] = L.exports;
      (J()(L, "components", {
        QLayout: d["a"],
        QHeader: p["a"],
        QToolbar: u["a"],
        QBtn: h["a"],
        QToolbarTitle: m["a"],
        QSeparator: w["a"],
        QPageContainer: _["a"],
        QPage: q["a"],
        QForm: f["a"],
        QCard: b["a"],
        QList: v["a"],
        QItem: g["a"],
        QItemSection: k["a"],
        QItemLabel: x["a"],
        QInput: y["a"],
        QSelect: Q["a"],
        QToggle: $["a"],
        QEditor: S["a"],
        QField: C["a"],
        QIcon: I["a"],
        QPopupProxy: N["a"],
        QDate: T["a"],
        QTime: F["a"],
        QFooter: Y["a"],
      }),
        J()(L, "directives", { ClosePopup: z["a"] }));
    },
  },
]);
