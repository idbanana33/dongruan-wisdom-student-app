(window["webpackJsonp"] = window["webpackJsonp"] || []).push([
  [110],
  {
    c4d2: function (t, e, s) {
      "use strict";
      s.r(e);
      var a = function () {
          var t = this,
            e = t.$createElement,
            s = t._self._c || e;
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
                        on: { click: t.goBack },
                      }),
                      s("q-toolbar-title", [t._v("请假信息核验")]),
                    ],
                    1,
                  ),
                ],
                1,
              ),
              s(
                "q-page-container",
                [
                  s(
                    "q-page",
                    { staticClass: "bg-grey-3" },
                    [
                      s(
                        "q-card",
                        { staticClass: "full-width row", attrs: { flat: "" } },
                        [
                          s(
                            "q-card-section",
                            {
                              staticClass: "full-width row justify-center",
                              class: "bg-" + t.details.color,
                              staticStyle: { height: "65px" },
                            },
                            [
                              s(
                                "div",
                                { staticClass: "text-white", attrs: { caption: "" } },
                                [
                                  s(
                                    "q-icon",
                                    {
                                      directives: [
                                        {
                                          name: "show",
                                          rawName: "v-show",
                                          value: "3" == t.details.time_type,
                                          expression: "details.time_type == '3'",
                                        },
                                      ],
                                      attrs: { name: "check", size: "sm" },
                                    },
                                    [
                                      s("span", { staticStyle: { "font-size": "25px" } }, [
                                        t._v(t._s(t.details.leave_s)),
                                      ]),
                                    ],
                                  ),
                                  s(
                                    "span",
                                    {
                                      directives: [
                                        {
                                          name: "show",
                                          rawName: "v-show",
                                          value: "1" == t.details.time_type,
                                          expression: "details.time_type == '1'",
                                        },
                                      ],
                                      staticStyle: { "font-size": "25px" },
                                      attrs: { size: "sm" },
                                    },
                                    [t._v(t._s(t.details.leave_s))],
                                  ),
                                  s(
                                    "q-icon",
                                    {
                                      directives: [
                                        {
                                          name: "show",
                                          rawName: "v-show",
                                          value: "2" == t.details.time_type,
                                          expression: "details.time_type == '2'",
                                        },
                                      ],
                                      attrs: { name: "×", size: "sm" },
                                    },
                                    [
                                      s("span", { staticStyle: { "font-size": "25px" } }, [
                                        t._v(t._s(t.details.leave_s)),
                                      ]),
                                    ],
                                  ),
                                ],
                                1,
                              ),
                            ],
                          ),
                          s("q-card-section", { staticClass: "full-width row justify-around" }, [
                            s("div", { staticClass: "col-12" }, [
                              s("span", { staticClass: "text-grey" }, [t._v("请假时间：")]),
                              s("span", [t._v(t._s(t.details.leave_time))]),
                            ]),
                          ]),
                        ],
                        1,
                      ),
                      s(
                        "q-card",
                        { staticClass: "full-width row q-mt-sm", attrs: { flat: "" } },
                        [
                          s(
                            "q-card-section",
                            { staticClass: "full-width row justify-around", attrs: { avatar: "" } },
                            [
                              s(
                                "div",
                                { staticClass: "col-12 q-mb-md text-left text-weight-bold" },
                                [t._v("\n            请假详情\n          ")],
                              ),
                              s("div", { staticClass: "col-12" }, [
                                s("span", { staticClass: "text-grey" }, [t._v("请假类型：")]),
                                s("span", [t._v(t._s(t.details.leave_type_name))]),
                              ]),
                              s("div", { staticClass: "col-12 q-mt-sm" }, [
                                s("span", { staticClass: "text-grey" }, [t._v("需要离校：")]),
                                s(
                                  "span",
                                  {
                                    directives: [
                                      {
                                        name: "show",
                                        rawName: "v-show",
                                        value: "是" == t.details.walk_out,
                                        expression: "details.walk_out == '是'",
                                      },
                                    ],
                                    staticClass: "text-warning",
                                  },
                                  [t._v(t._s(t.details.walk_out))],
                                ),
                                s(
                                  "span",
                                  {
                                    directives: [
                                      {
                                        name: "show",
                                        rawName: "v-show",
                                        value: "否" == t.details.walk_out,
                                        expression: "details.walk_out == '否'",
                                      },
                                    ],
                                  },
                                  [t._v(t._s(t.details.walk_out))],
                                ),
                              ]),
                              s("div", { staticClass: "col-12 q-mt-sm" }, [
                                s("span", { staticClass: "text-grey" }, [t._v("需要离市：")]),
                                s(
                                  "span",
                                  { class: 1 === t.details.city_out ? "text-warning" : "" },
                                  [t._v(t._s(1 === t.details.city_out ? "是" : "否"))],
                                ),
                              ]),
                              s("div", { staticClass: "col-12 q-mt-sm" }, [
                                s("span", { staticClass: "text-grey" }, [t._v("需要离省：")]),
                                s(
                                  "span",
                                  { class: 1 === t.details.province_out ? "text-warning" : "" },
                                  [t._v(t._s(1 === t.details.province_out ? "是" : "否"))],
                                ),
                              ]),
                              s("div", { staticClass: "col-12 q-mt-sm" }, [
                                s("span", { staticClass: "text-grey" }, [t._v("请假原因：")]),
                                s("span", [t._v(t._s(t.details.reason))]),
                              ]),
                              s("div", { staticClass: "col-12 q-mt-sm" }, [
                                s("span", { staticClass: "text-grey" }, [t._v("发起时间：")]),
                                s("span", [t._v(t._s(t.details.create_time))]),
                              ]),
                              t.details.location
                                ? s("div", { staticClass: "col-12 q-mt-sm" }, [
                                    s("span", { staticClass: "text-grey" }, [t._v("发起位置：")]),
                                    s("span", [t._v(t._s(t.details.location.address))]),
                                  ])
                                : t._e(),
                            ],
                          ),
                        ],
                        1,
                      ),
                      s(
                        "q-card",
                        { staticClass: "full-width row q-mt-sm", attrs: { flat: "" } },
                        [
                          s(
                            "q-list",
                            { staticClass: "full-width" },
                            [
                              s("div", { staticClass: "row q-ml-md q-mt-md" }, [
                                s("div", { staticClass: "col-12 text-left text-weight-bold" }, [
                                  t._v("请假流程记录"),
                                ]),
                              ]),
                              s("q-item", [
                                0 == t.showReview
                                  ? s(
                                      "div",
                                      { staticClass: "q-px-sm q-pb-xs" },
                                      [
                                        s(
                                          "q-timeline",
                                          [
                                            s(
                                              "q-timeline-entry",
                                              {
                                                attrs: {
                                                  subtitle: t.details.create_time,
                                                  color: "grey",
                                                },
                                              },
                                              [
                                                t._v(
                                                  "\n                " +
                                                    t._s(t.details.name) +
                                                    " - 发起申请\n              ",
                                                ),
                                              ],
                                            ),
                                            t._l(t.details.review_list, function (e, a) {
                                              return s(
                                                "q-timeline-entry",
                                                {
                                                  key: e.id,
                                                  attrs: {
                                                    subtitle: e.review_time,
                                                    color:
                                                      "W" != t.details.review_status &&
                                                      t.details.review_list &&
                                                      a == t.details.review_list.length - 1
                                                        ? "A" == e.review_status
                                                          ? "positive"
                                                          : "red"
                                                        : "grey",
                                                  },
                                                },
                                                [
                                                  t._v(
                                                    "\n                " +
                                                      t._s(e.teacher_name) +
                                                      " - " +
                                                      t._s(e.review_status_name) +
                                                      "\n                ",
                                                  ),
                                                  s(
                                                    "p",
                                                    {
                                                      directives: [
                                                        {
                                                          name: "show",
                                                          rawName: "v-show",
                                                          value: null != e.opinion,
                                                          expression: "item.opinion != null",
                                                        },
                                                      ],
                                                      staticStyle: { "font-size": "11px" },
                                                    },
                                                    [t._v("审批意见：" + t._s(e.opinion))],
                                                  ),
                                                ],
                                              );
                                            }),
                                          ],
                                          2,
                                        ),
                                      ],
                                      1,
                                    )
                                  : t._e(),
                                1 == t.showReview
                                  ? s(
                                      "div",
                                      { staticClass: "q-px-sm q-pb-xs" },
                                      [
                                        s(
                                          "q-timeline",
                                          [
                                            s(
                                              "q-timeline-entry",
                                              {
                                                attrs: {
                                                  subtitle: t.create_time_short,
                                                  color: "grey",
                                                },
                                              },
                                              [
                                                t._v(
                                                  "\n                " +
                                                    t._s(t.m_teacher_name) +
                                                    " - 发起申请\n              ",
                                                ),
                                              ],
                                            ),
                                            t._l(t.review_list, function (e, a) {
                                              return s(
                                                "q-timeline-entry",
                                                {
                                                  key: e.id,
                                                  attrs: {
                                                    subtitle: e.review_time,
                                                    color:
                                                      "W" != t.details.review_status &&
                                                      t.details.review_list &&
                                                      a == t.details.review_list.length - 1
                                                        ? "A" == e.review_status
                                                          ? "positive"
                                                          : "red"
                                                        : "grey",
                                                  },
                                                },
                                                [
                                                  t._v(
                                                    "\n                " +
                                                      t._s(e.teacher_name) +
                                                      " - " +
                                                      t._s(e.review_status_name) +
                                                      "\n                ",
                                                  ),
                                                  s(
                                                    "p",
                                                    {
                                                      directives: [
                                                        {
                                                          name: "show",
                                                          rawName: "v-show",
                                                          value: null != e.opinion,
                                                          expression: "item.opinion != null",
                                                        },
                                                      ],
                                                      staticStyle: { "font-size": "11px" },
                                                    },
                                                    [t._v("审批意见：" + t._s(e.opinion))],
                                                  ),
                                                ],
                                              );
                                            }),
                                          ],
                                          2,
                                        ),
                                      ],
                                      1,
                                    )
                                  : t._e(),
                              ]),
                              s("q-separator"),
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
        i = [],
        l = {
          components: {},
          data() {
            return {
              details: {},
              m_teacher_name: "",
              review_num: "",
              showReview: 0,
              m_teacher_no: "",
              review_list: [],
              create_time_short: "",
            };
          },
          mounted() {
            this.getLeave();
          },
          methods: {
            getLeave() {
              this.$axiosAction("/api/teacher/scanning/scanning.api", {
                action: "getLeaveReviewInfoByQR",
                text: this.$route.params.qrcode,
                jobType: "V",
              }).then((t) => {
                if (0 === t.data.code) {
                  const e = t.data.reviewInfo;
                  (null !== e.leave_multi_id
                    ? ((this.showReview = 1), this.getMultiReviewInfo(e.leave_multi_id))
                    : (this.showReview = 0),
                    (this.details = t.data.reviewInfo),
                    (this.details.leave_time = e.short_time + "(" + e.time_info + ")"),
                    (this.details.review_list = t.data.review_list));
                }
              });
            },
            getMultiReviewInfo(t) {
              this.$axiosAction("/api/teacher/scanning/scanning.api", {
                action: "getMultiLeaveTeacherInfo",
                id: t,
              }).then((t) => {
                ((this.review_list = t.data.review_list),
                  (this.m_teacher_name = t.data.list.teacher_name),
                  (this.m_teacher_no = t.data.list.teacher_no),
                  (this.create_time_short = t.data.list.create_time_short));
              });
            },
            goBack() {
              this.$router.push("/teacher/index");
            },
          },
        },
        n = l,
        r = s("2877"),
        o = s("4d5a"),
        c = s("e359"),
        _ = s("65c6"),
        d = s("9c40"),
        v = s("6ac5"),
        m = s("09e3"),
        w = s("9989"),
        p = s("f09f"),
        h = s("a370"),
        u = s("0016"),
        y = s("1c1c"),
        g = s("66e5"),
        f = s("05eb"),
        q = s("74af"),
        x = s("eb85"),
        C = s("eebe"),
        b = s.n(C),
        k = Object(r["a"])(n, a, i, !1, null, null, null);
      e["default"] = k.exports;
      b()(k, "components", {
        QLayout: o["a"],
        QHeader: c["a"],
        QToolbar: _["a"],
        QBtn: d["a"],
        QToolbarTitle: v["a"],
        QPageContainer: m["a"],
        QPage: w["a"],
        QCard: p["a"],
        QCardSection: h["a"],
        QIcon: u["a"],
        QList: y["a"],
        QItem: g["a"],
        QTimeline: f["a"],
        QTimelineEntry: q["a"],
        QSeparator: x["a"],
      });
    },
  },
]);
