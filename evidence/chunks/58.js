(window["webpackJsonp"] = window["webpackJsonp"] || []).push([
  [58],
  {
    "9ddf": function (t, e, a) {
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
                { staticClass: "bg-grey-3 text-black" },
                [
                  a(
                    "q-toolbar",
                    [
                      a("q-btn", {
                        attrs: { flat: "", round: "", dense: "", icon: "keyboard_arrow_left" },
                        on: { click: t.goBack },
                      }),
                      a("q-toolbar-title", [t._v(t._s(t.TeacherTitle))]),
                    ],
                    1,
                  ),
                ],
                1,
              ),
              a(
                "q-page-container",
                [
                  t.roleSet
                    ? a(
                        "q-page",
                        { staticClass: "bg-grey-3 q-pb-sm" },
                        [
                          t.stuNo !== t.user.login_name
                            ? a(
                                "q-card",
                                { staticClass: "q-mx-md q-mb-sm", attrs: { flat: "" } },
                                [
                                  a(
                                    "q-item",
                                    [
                                      a(
                                        "q-item-section",
                                        { attrs: { avatar: "" } },
                                        [
                                          a("q-item-label", { staticClass: "text-bold" }, [
                                            t._v("教师信息"),
                                          ]),
                                        ],
                                        1,
                                      ),
                                      a("q-item-section"),
                                    ],
                                    1,
                                  ),
                                  a("q-separator"),
                                  t._l(t.teacherInfoSet.slice(0, 6), function (e, s) {
                                    return a(
                                      "q-item",
                                      { key: s, attrs: { dense: "" } },
                                      [
                                        a(
                                          "q-item-section",
                                          { attrs: { avatar: "" } },
                                          [
                                            a(
                                              "q-item-label",
                                              { staticClass: "q-pt-xs text-grey" },
                                              [t._v(" " + t._s(e))],
                                            ),
                                          ],
                                          1,
                                        ),
                                        a(
                                          "q-item-section",
                                          [
                                            a(
                                              "q-item-label",
                                              { staticClass: "q-pt-xs text-right" },
                                              [t._v(t._s(t.teacherInfo[s]))],
                                            ),
                                          ],
                                          1,
                                        ),
                                      ],
                                      1,
                                    );
                                  }),
                                  a(
                                    "q-item",
                                    { attrs: { dense: "" } },
                                    [
                                      a(
                                        "q-item-section",
                                        { attrs: { avatar: "" } },
                                        [
                                          a("q-item-label", { staticClass: "q-pt-xs text-grey" }, [
                                            t._v(" " + t._s(t.teacherInfoSet[6])),
                                          ]),
                                        ],
                                        1,
                                      ),
                                      a(
                                        "q-item-section",
                                        [
                                          a(
                                            "q-item-label",
                                            {
                                              staticClass: "q-pt-xs text-right",
                                              class:
                                                "已接入" == t.teacherInfo[6]
                                                  ? "text-positive"
                                                  : "text-red",
                                            },
                                            [t._v(t._s(t.teacherInfo[6]))],
                                          ),
                                        ],
                                        1,
                                      ),
                                    ],
                                    1,
                                  ),
                                ],
                                2,
                              )
                            : t._e(),
                          a(
                            "q-card",
                            { staticClass: "q-mx-md", attrs: { flat: "" } },
                            [
                              a(
                                "q-item",
                                [
                                  a(
                                    "q-item-section",
                                    { attrs: { avatar: "" } },
                                    [
                                      a("q-item-label", { staticClass: "text-bold" }, [
                                        t._v("请假"),
                                      ]),
                                    ],
                                    1,
                                  ),
                                  a("q-item-section"),
                                ],
                                1,
                              ),
                              a("q-separator"),
                              t._l(t.leave, function (e, s) {
                                return a(
                                  "q-item",
                                  {
                                    key: e.id,
                                    class:
                                      0 != s && s != t.leave.length - 1 && s != t.leave.length - 2
                                        ? "q-ml-md"
                                        : "",
                                    attrs: { dense: "" },
                                  },
                                  [
                                    a(
                                      "q-item-section",
                                      { attrs: { avatar: "" } },
                                      [
                                        a("q-item-label", { staticClass: "q-pt-xs text-grey" }, [
                                          t._v(" " + t._s(e.title)),
                                        ]),
                                      ],
                                      1,
                                    ),
                                    a(
                                      "q-item-section",
                                      [
                                        a("q-item-label", { staticClass: "q-pt-xs text-right" }, [
                                          t._v(t._s(e.total) + "次"),
                                        ]),
                                      ],
                                      1,
                                    ),
                                  ],
                                  1,
                                );
                              }),
                            ],
                            2,
                          ),
                          a(
                            "q-card",
                            { staticClass: "q-mx-md q-mt-sm", attrs: { flat: "" } },
                            [
                              a(
                                "q-item",
                                [
                                  a(
                                    "q-item-section",
                                    { attrs: { avatar: "" } },
                                    [
                                      a("q-item-label", { staticClass: "text-bold" }, [
                                        t._v("批量请假"),
                                      ]),
                                    ],
                                    1,
                                  ),
                                  a("q-item-section"),
                                ],
                                1,
                              ),
                              a("q-separator"),
                              t._l(t.leaveMutil, function (e, s) {
                                return a(
                                  "q-item",
                                  {
                                    key: e.id,
                                    class: 0 != s && 1 != s ? "q-ml-md" : "",
                                    attrs: { dense: "" },
                                  },
                                  [
                                    a(
                                      "q-item-section",
                                      { attrs: { avatar: "" } },
                                      [
                                        a("q-item-label", { staticClass: "q-pt-xs text-grey" }, [
                                          t._v(" " + t._s(e.title)),
                                        ]),
                                      ],
                                      1,
                                    ),
                                    a(
                                      "q-item-section",
                                      [
                                        a("q-item-label", { staticClass: "q-pt-xs text-right" }, [
                                          t._v(t._s(e.total) + "次"),
                                        ]),
                                      ],
                                      1,
                                    ),
                                  ],
                                  1,
                                );
                              }),
                            ],
                            2,
                          ),
                          a(
                            "q-card",
                            { staticClass: "q-mx-md q-mt-sm", attrs: { flat: "" } },
                            [
                              a(
                                "q-item",
                                [
                                  a(
                                    "q-item-section",
                                    { attrs: { avatar: "" } },
                                    [
                                      a("q-item-label", { staticClass: "text-bold" }, [
                                        t._v("通知"),
                                      ]),
                                    ],
                                    1,
                                  ),
                                ],
                                1,
                              ),
                              a("q-separator"),
                              t._l(t.notice, function (e, s) {
                                return a(
                                  "q-item",
                                  {
                                    key: e.id,
                                    class: 0 != s ? "q-ml-md" : "",
                                    attrs: { dense: "" },
                                  },
                                  [
                                    a(
                                      "q-item-section",
                                      { attrs: { avatar: "" } },
                                      [
                                        a("q-item-label", { staticClass: "q-pt-xs text-grey" }, [
                                          t._v(" " + t._s(e.title)),
                                        ]),
                                      ],
                                      1,
                                    ),
                                    a(
                                      "q-item-section",
                                      [
                                        a("q-item-label", { staticClass: "q-pt-xs text-right" }, [
                                          t._v(t._s(e.total) + "次"),
                                        ]),
                                      ],
                                      1,
                                    ),
                                  ],
                                  1,
                                );
                              }),
                            ],
                            2,
                          ),
                          t._l(t.apply.slice(0, 2), function (e) {
                            return a(
                              "q-card",
                              { key: e.seq, staticClass: "q-mx-md q-mt-sm", attrs: { flat: "" } },
                              [
                                a(
                                  "q-item",
                                  [
                                    a(
                                      "q-item-section",
                                      { attrs: { avatar: "" } },
                                      [
                                        a("q-item-label", { staticClass: "text-bold" }, [
                                          t._v(t._s(e.title)),
                                        ]),
                                      ],
                                      1,
                                    ),
                                  ],
                                  1,
                                ),
                                a("q-separator"),
                                a(
                                  "q-item",
                                  { attrs: { dense: "" } },
                                  [
                                    a(
                                      "q-item-section",
                                      { attrs: { avatar: "" } },
                                      [
                                        a("q-item-label", { staticClass: "q-pt-xs text-grey" }, [
                                          t._v("发布数量"),
                                        ]),
                                      ],
                                      1,
                                    ),
                                    a(
                                      "q-item-section",
                                      [
                                        a("q-item-label", { staticClass: "q-pt-xs text-right" }, [
                                          t._v(t._s(e.total) + "次"),
                                        ]),
                                      ],
                                      1,
                                    ),
                                  ],
                                  1,
                                ),
                              ],
                              1,
                            );
                          }),
                          a(
                            "q-card",
                            { staticClass: "q-mx-md q-mt-sm", attrs: { flat: "" } },
                            [
                              a(
                                "q-item",
                                [
                                  a(
                                    "q-item-section",
                                    { attrs: { avatar: "" } },
                                    [
                                      a("q-item-label", { staticClass: "text-bold" }, [
                                        t._v("信息收集"),
                                      ]),
                                    ],
                                    1,
                                  ),
                                ],
                                1,
                              ),
                              a("q-separator"),
                              a(
                                "q-item",
                                { attrs: { dense: "" } },
                                [
                                  a(
                                    "q-item-section",
                                    { attrs: { avatar: "" } },
                                    [
                                      a("q-item-label", { staticClass: "q-pt-xs text-grey" }, [
                                        t._v("发布数量"),
                                      ]),
                                    ],
                                    1,
                                  ),
                                  a(
                                    "q-item-section",
                                    [
                                      a("q-item-label", { staticClass: "q-pt-xs text-right" }, [
                                        t._v(t._s(t.apply[2].total) + "次"),
                                      ]),
                                    ],
                                    1,
                                  ),
                                ],
                                1,
                              ),
                              a(
                                "q-item",
                                { attrs: { dense: "" } },
                                [
                                  a(
                                    "q-item-section",
                                    { attrs: { avatar: "" } },
                                    [
                                      a("q-item-label", { staticClass: "q-pt-xs text-grey" }, [
                                        t._v("收集率"),
                                      ]),
                                    ],
                                    1,
                                  ),
                                  a(
                                    "q-item-section",
                                    [
                                      a("q-item-label", { staticClass: "q-pt-xs text-right" }, [
                                        t._v(
                                          t._s(t.apply_c.rate) +
                                            "%(" +
                                            t._s(t.apply_c.status_one + "/") +
                                            t._s(t.apply_c.status_one + t.apply_c.status_zeno) +
                                            ")",
                                        ),
                                      ]),
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
                            "q-card",
                            { staticClass: "q-mx-md q-mt-sm", attrs: { flat: "" } },
                            [
                              a(
                                "q-item",
                                [
                                  a(
                                    "q-item-section",
                                    { attrs: { avatar: "" } },
                                    [
                                      a("q-item-label", { staticClass: "text-bold" }, [
                                        t._v("签到"),
                                      ]),
                                    ],
                                    1,
                                  ),
                                ],
                                1,
                              ),
                              a("q-separator"),
                              t._l(t.sign, function (e, s) {
                                return a(
                                  "q-item",
                                  {
                                    key: e.id,
                                    class: 0 != s ? "q-ml-md" : "",
                                    attrs: { dense: "" },
                                  },
                                  [
                                    a(
                                      "q-item-section",
                                      { attrs: { avatar: "" } },
                                      [
                                        a("q-item-label", { staticClass: "q-pt-xs text-grey" }, [
                                          t._v(" " + t._s(e.title)),
                                        ]),
                                      ],
                                      1,
                                    ),
                                    a(
                                      "q-item-section",
                                      [
                                        a("q-item-label", { staticClass: "q-pt-xs text-right" }, [
                                          t._v(t._s(e.total) + "次"),
                                        ]),
                                      ],
                                      1,
                                    ),
                                  ],
                                  1,
                                );
                              }),
                            ],
                            2,
                          ),
                          a(
                            "q-card",
                            { staticClass: "q-mx-md q-mt-sm", attrs: { flat: "" } },
                            [
                              a(
                                "q-item",
                                [
                                  a(
                                    "q-item-section",
                                    { attrs: { avatar: "" } },
                                    [
                                      a("q-item-label", { staticClass: "text-bold" }, [
                                        t._v("日志"),
                                      ]),
                                    ],
                                    1,
                                  ),
                                ],
                                1,
                              ),
                              a("q-separator"),
                              a(
                                "q-item",
                                { attrs: { dense: "" } },
                                [
                                  a(
                                    "q-item-section",
                                    { attrs: { avatar: "" } },
                                    [
                                      a("q-item-label", { staticClass: "q-pt-xs text-grey" }, [
                                        t._v("提交数量"),
                                      ]),
                                    ],
                                    1,
                                  ),
                                  a(
                                    "q-item-section",
                                    [
                                      a("q-item-label", { staticClass: "q-pt-xs text-right" }, [
                                        t._v(t._s(this.joblogCount) + "次"),
                                      ]),
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
                            "q-card",
                            { staticClass: "q-mx-md q-mt-sm", attrs: { flat: "" } },
                            [
                              a(
                                "q-item",
                                [
                                  a(
                                    "q-item-section",
                                    { attrs: { avatar: "" } },
                                    [
                                      a("q-item-label", { staticClass: "text-bold" }, [
                                        t._v("寝室检查"),
                                      ]),
                                    ],
                                    1,
                                  ),
                                ],
                                1,
                              ),
                              a("q-separator"),
                              a(
                                "q-item",
                                { attrs: { dense: "" } },
                                [
                                  a(
                                    "q-item-section",
                                    { attrs: { avatar: "" } },
                                    [
                                      a("q-item-label", { staticClass: "q-pt-xs text-grey" }, [
                                        t._v("提交数量"),
                                      ]),
                                    ],
                                    1,
                                  ),
                                  a(
                                    "q-item-section",
                                    [
                                      a("q-item-label", { staticClass: "q-pt-xs text-right" }, [
                                        t._v(t._s(this.sanitationCount) + "次"),
                                      ]),
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
                            "q-card",
                            { staticClass: "q-mx-md q-mt-sm", attrs: { flat: "" } },
                            [
                              a(
                                "q-item",
                                [
                                  a(
                                    "q-item-section",
                                    { attrs: { avatar: "" } },
                                    [
                                      a("q-item-label", { staticClass: "text-bold" }, [
                                        t._v("日常流程"),
                                      ]),
                                    ],
                                    1,
                                  ),
                                  a("q-item-section"),
                                ],
                                1,
                              ),
                              a("q-separator"),
                              t._l(t.process, function (e, s) {
                                return a(
                                  "q-item",
                                  {
                                    key: e.id,
                                    class: 0 != s ? "q-ml-md" : "",
                                    attrs: { dense: "" },
                                  },
                                  [
                                    a(
                                      "q-item-section",
                                      { attrs: { avatar: "" } },
                                      [
                                        a("q-item-label", { staticClass: "q-pt-xs text-grey" }, [
                                          t._v(" " + t._s(e.title)),
                                        ]),
                                      ],
                                      1,
                                    ),
                                    a(
                                      "q-item-section",
                                      [
                                        a("q-item-label", { staticClass: "q-pt-xs text-right" }, [
                                          t._v(t._s(e.total)),
                                        ]),
                                      ],
                                      1,
                                    ),
                                  ],
                                  1,
                                );
                              }),
                            ],
                            2,
                          ),
                          a(
                            "q-card",
                            { staticClass: "q-mx-md q-mt-sm", attrs: { flat: "" } },
                            [
                              a(
                                "q-item",
                                [
                                  a(
                                    "q-item-section",
                                    { attrs: { avatar: "" } },
                                    [
                                      a("q-item-label", { staticClass: "text-bold" }, [
                                        t._v("返校离校流程"),
                                      ]),
                                    ],
                                    1,
                                  ),
                                  a("q-item-section"),
                                ],
                                1,
                              ),
                              a("q-separator"),
                              t._l(t.processGate, function (e, s) {
                                return a(
                                  "q-item",
                                  {
                                    key: e.id,
                                    class: 0 != s ? "q-ml-md" : "",
                                    attrs: { dense: "" },
                                  },
                                  [
                                    a(
                                      "q-item-section",
                                      { attrs: { avatar: "" } },
                                      [
                                        a("q-item-label", { staticClass: "q-pt-xs text-grey" }, [
                                          t._v(" " + t._s(e.title)),
                                        ]),
                                      ],
                                      1,
                                    ),
                                    a(
                                      "q-item-section",
                                      [
                                        a("q-item-label", { staticClass: "q-pt-xs text-right" }, [
                                          t._v(t._s(e.total)),
                                        ]),
                                      ],
                                      1,
                                    ),
                                  ],
                                  1,
                                );
                              }),
                            ],
                            2,
                          ),
                        ],
                        2,
                      )
                    : t.roleSet
                      ? t._e()
                      : a(
                          "q-page",
                          {
                            staticClass: "flex column justify-start items-start q-pa-md bg-grey-3",
                          },
                          [
                            a(
                              "div",
                              {
                                staticClass:
                                  "text-h6 text-bold q-mb-md row justify-center full-width",
                              },
                              [t._v("\n        " + t._s(t.titleTip) + "\n      ")],
                            ),
                          ],
                        ),
                ],
                1,
              ),
            ],
            1,
          );
        },
        i = [],
        l = {
          name: "achievementIndex",
          data() {
            return {
              stuNo: this.$route.query.stuNo,
              menuInfo: null,
              leave: [],
              leaveMutil: [],
              sign: [],
              notice: [],
              joblogCount: 0,
              apply: [],
              apply_c: {},
              sanitationCount: 0,
              roleSet: !1,
              titleTip: "正在加载",
              teacherInfoSet: ["教工号", "姓名", "性别", "院系", "角色", "手机号", "App接入"],
              teacherInfo: [],
              user: window.localStorage.userinfo
                ? JSON.parse(window.localStorage.getItem("userinfo"))
                : {},
              TeacherTitle: "教师综合统计",
              process: [],
              processGate: [],
            };
          },
          mounted() {
            (this.stuNo === this.user.login_name && (this.TeacherTitle = "综合统计"),
              window.localStorage.getItem("menu") &&
                ((this.menuInfo = JSON.parse(window.localStorage.getItem("menu")).find(
                  (t) => "achievement" === t.id,
                )),
                void 0 === this.menuInfo && (this.menuInfo = { view_permit: "S" })),
              this.getAchievement());
          },
          methods: {
            goBack() {
              this.$router.push("/teacher/index");
            },
            getAchievement() {
              (this.$q.loading.show(),
                this.$axiosAction("/api/teacher/achievement/achievement.api", {
                  action: "getAchievement",
                  stuNo: this.stuNo,
                  view_permit: this.menuInfo.view_permit,
                })
                  .then((t) => {
                    if (0 === t.data.code) {
                      ((this.leave = t.data.leave),
                        (this.leaveMutil = t.data.leaveMulti),
                        (this.sign = t.data.sign),
                        (this.notice = t.data.notice),
                        (this.joblogCount = t.data.joblog.count),
                        (this.sanitationCount = t.data.sanitation.count),
                        (this.apply = t.data.apply),
                        (this.apply_c = t.data.apply_c),
                        (this.process = t.data.process),
                        (this.processGate = t.data.process_gate));
                      const e = Object.values(t.data.teaInfo);
                      ((this.teacherInfo = e), (this.roleSet = !0));
                    } else ((this.roleSet = !1), (this.titleTip = "您没有访问权限"));
                    this.$q.loading.hide();
                  })
                  .catch((t) => {}));
            },
          },
        },
        r = l,
        o = a("2877"),
        c = a("4d5a"),
        m = a("e359"),
        q = a("65c6"),
        n = a("9c40"),
        d = a("6ac5"),
        p = a("09e3"),
        _ = a("9989"),
        v = a("f09f"),
        x = a("66e5"),
        h = a("4074"),
        b = a("0170"),
        u = a("eb85"),
        g = a("eebe"),
        C = a.n(g),
        f = Object(o["a"])(r, s, i, !1, null, null, null);
      e["default"] = f.exports;
      C()(f, "components", {
        QLayout: c["a"],
        QHeader: m["a"],
        QToolbar: q["a"],
        QBtn: n["a"],
        QToolbarTitle: d["a"],
        QPageContainer: p["a"],
        QPage: _["a"],
        QCard: v["a"],
        QItem: x["a"],
        QItemSection: h["a"],
        QItemLabel: b["a"],
        QSeparator: u["a"],
      });
    },
  },
]);
