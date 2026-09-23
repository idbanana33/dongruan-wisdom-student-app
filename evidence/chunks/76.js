(window["webpackJsonp"] = window["webpackJsonp"] || []).push([
  [76],
  {
    efa0: function (e, t, s) {
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
                      s("q-toolbar-title", [e._v("请假详情")]),
                      "A" == e.userinfo.role_id &&
                      "A" == e.record.review_status &&
                      null === e.record.leave_multi_id &&
                      "已销假" !== e.record.report_status_name
                        ? s("q-btn", {
                            staticClass: "q-mr-sm",
                            attrs: {
                              flat: "",
                              round: "",
                              dense: "",
                              icon: "clear",
                              color: "negative",
                            },
                            on: { click: e.RefuseLeave },
                          })
                        : e._e(),
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
                      1 == e.pageType && e.menuInfo
                        ? s(
                            "div",
                            [
                              s(
                                "q-card",
                                {
                                  staticStyle: {
                                    height: "100px",
                                    "align-items": "center",
                                    display: "flex",
                                    "justify-content": "center",
                                  },
                                  attrs: { flat: "" },
                                },
                                [e._v("\n          该请假信息已被撤回！\n        ")],
                              ),
                            ],
                            1,
                          )
                        : e._e(),
                      1 != e.pageType || e.menuInfo
                        ? e._e()
                        : s(
                            "div",
                            [
                              s(
                                "q-card",
                                {
                                  staticStyle: {
                                    height: "100px",
                                    "align-items": "center",
                                    display: "flex",
                                    "justify-content": "center",
                                  },
                                  attrs: { flat: "" },
                                },
                                [e._v("\n          您无权限查看此详情！\n        ")],
                              ),
                            ],
                            1,
                          ),
                      0 == e.pageType && e.menuInfo
                        ? s(
                            "q-card",
                            { staticClass: "full-width row q-mt-sm", attrs: { flat: "" } },
                            [
                              s(
                                "q-card-section",
                                {
                                  staticClass: "full-width row justify-around",
                                  attrs: { avatar: "" },
                                },
                                [
                                  s(
                                    "div",
                                    { staticClass: "col-6 q-mb-md text-left text-weight-bold" },
                                    [e._v("\n            学生信息\n          ")],
                                  ),
                                  s(
                                    "div",
                                    { staticClass: "col-6 q-mb-md text-right text-weight-bold" },
                                    [
                                      s(
                                        "span",
                                        {
                                          staticClass: "text-primary cursor-pointer",
                                          on: {
                                            click: function (t) {
                                              return e.getStudentHistory(
                                                e.record.student_no,
                                                e.record.name,
                                              );
                                            },
                                          },
                                        },
                                        [e._v("查看历史请假")],
                                      ),
                                    ],
                                  ),
                                  s("div", { staticClass: "col-6" }, [
                                    s("span", { staticClass: "text-grey" }, [e._v("姓名：")]),
                                    s("span", { staticClass: "text-bold" }, [
                                      e._v(e._s(e.record.name)),
                                    ]),
                                  ]),
                                  s("div", { staticClass: "col-6" }, [
                                    s("span", { staticClass: "text-grey" }, [e._v("性别：")]),
                                    s("span", { staticClass: "text-bold" }, [
                                      e._v(e._s(e.record.sex_name)),
                                    ]),
                                  ]),
                                  s("div", { staticClass: "col-6 q-mt-sm" }, [
                                    s("span", { staticClass: "text-grey" }, [e._v("学号：")]),
                                    s("span", [e._v(e._s(e.record.student_no))]),
                                  ]),
                                  s("div", { staticClass: "col-6 q-mt-sm" }, [
                                    s("span", { staticClass: "text-grey" }, [e._v("请假次数：")]),
                                    s("span", [e._v(e._s(e.record.leave_history_count))]),
                                  ]),
                                  s("div", { staticClass: "col-12 q-mt-sm" }, [
                                    s("span", { staticClass: "text-grey" }, [e._v("院系：")]),
                                    s("span", [
                                      e._v(
                                        e._s(e.record.grade_name) +
                                          "/" +
                                          e._s(e.record.dep_name) +
                                          "/" +
                                          e._s(e.record.major_name) +
                                          "/" +
                                          e._s(e.record.class_name),
                                      ),
                                    ]),
                                  ]),
                                ],
                              ),
                            ],
                            1,
                          )
                        : e._e(),
                      0 == e.pageType
                        ? s(
                            "q-card",
                            { staticClass: "full-width row q-mt-sm", attrs: { flat: "" } },
                            [
                              s(
                                "q-card-section",
                                {
                                  staticClass: "full-width row justify-around",
                                  attrs: { avatar: "" },
                                },
                                [
                                  s(
                                    "div",
                                    { staticClass: "col-12 q-mb-md text-left text-weight-bold" },
                                    [e._v("\n            请假详情\n          ")],
                                  ),
                                  s("div", { staticClass: "col-12" }, [
                                    s("span", { staticClass: "text-grey" }, [e._v("请假时间：")]),
                                    s("span", [e._v(e._s(e.record.leave_period))]),
                                  ]),
                                  s("div", { staticClass: "col-12 q-mt-sm" }, [
                                    s("span", { staticClass: "text-grey" }, [e._v("发起时间：")]),
                                    s("span", [e._v(e._s(e.record.create_time))]),
                                  ]),
                                  s("div", { staticClass: "col-12 q-mt-sm" }, [
                                    s("span", { staticClass: "text-grey" }, [e._v("请假类型：")]),
                                    s("span", [e._v(e._s(e.record.leave_type_name))]),
                                  ]),
                                  s("div", { staticClass: "col-12 q-mt-sm" }, [
                                    s("span", { staticClass: "text-grey" }, [e._v("是否离校：")]),
                                    s("span", [e._v(e._s(e.record.walk_out))]),
                                  ]),
                                  s("div", { staticClass: "col-12 q-mt-sm" }, [
                                    s("span", { staticClass: "text-grey" }, [e._v("是否出市：")]),
                                    s("span", [e._v(e._s(1 == e.record.city_out ? "是" : "否"))]),
                                  ]),
                                  s("div", { staticClass: "col-12 q-mt-sm" }, [
                                    s("span", { staticClass: "text-grey" }, [e._v("是否出省：")]),
                                    s("span", [
                                      e._v(e._s(1 == e.record.province_out ? "是" : "否")),
                                    ]),
                                  ]),
                                  1 === e.record.need_report
                                    ? s("div", { staticClass: "col-12 q-mt-sm" }, [
                                        s("span", { staticClass: "text-grey" }, [
                                          e._v("销假状态："),
                                        ]),
                                        s("span", [e._v(e._s(e.record.report_status_name))]),
                                        "已销假" == e.record.report_status_name
                                          ? s("span", [
                                              e._v("(" + e._s(e.record.report_time) + ")"),
                                            ])
                                          : e._e(),
                                      ])
                                    : e._e(),
                                  s(
                                    "div",
                                    { staticClass: "col-12 q-mt-sm" },
                                    [
                                      s("span", { staticClass: "text-grey" }, [e._v("审批状态：")]),
                                      s(
                                        "q-chip",
                                        {
                                          directives: [
                                            {
                                              name: "show",
                                              rawName: "v-show",
                                              value: "A" == e.record.review_status,
                                              expression: "record.review_status == 'A'",
                                            },
                                          ],
                                          staticClass: "text-positive",
                                          attrs: { dense: "" },
                                        },
                                        [
                                          s("q-avatar", {
                                            attrs: {
                                              icon: "check",
                                              color: "positive",
                                              "text-color": "white",
                                            },
                                          }),
                                          e._v(
                                            "\n              " + e._s(e.record.review_status_name),
                                          ),
                                          s(
                                            "span",
                                            {
                                              directives: [
                                                {
                                                  name: "show",
                                                  rawName: "v-show",
                                                  value: 1 == e.record.auto_passed,
                                                  expression: "record.auto_passed == 1",
                                                },
                                              ],
                                            },
                                            [e._v("(无需审批)")],
                                          ),
                                        ],
                                        1,
                                      ),
                                      s(
                                        "q-chip",
                                        {
                                          directives: [
                                            {
                                              name: "show",
                                              rawName: "v-show",
                                              value: "R" == e.record.review_status,
                                              expression: "record.review_status == 'R'",
                                            },
                                          ],
                                          staticClass: "text-red",
                                          attrs: { dense: "" },
                                        },
                                        [
                                          s("q-avatar", {
                                            attrs: {
                                              icon: "clear",
                                              color: "red",
                                              "text-color": "white",
                                            },
                                          }),
                                          e._v(
                                            "\n              " +
                                              e._s(e.record.review_status_name) +
                                              "\n            ",
                                          ),
                                        ],
                                        1,
                                      ),
                                      s(
                                        "span",
                                        {
                                          directives: [
                                            {
                                              name: "show",
                                              rawName: "v-show",
                                              value: "W" == e.record.review_status,
                                              expression: "record.review_status == 'W'",
                                            },
                                          ],
                                        },
                                        [e._v(e._s(e.record.review_status_name))],
                                      ),
                                    ],
                                    1,
                                  ),
                                  s("div", { staticClass: "col-12 q-mt-sm" }, [
                                    s("span", { staticClass: "text-grey" }, [e._v("请假原因：")]),
                                    s("span", [e._v(e._s(e.record.reason))]),
                                  ]),
                                  e.record.leave_multi_id
                                    ? s("div", { staticClass: "col-12 q-mt-sm" }, [
                                        s("span", { staticClass: "text-grey" }, [
                                          e._v("批量请假教师："),
                                        ]),
                                        s("span", [e._v(e._s(e.m_teacher_name))]),
                                      ])
                                    : e._e(),
                                  s("div", { staticClass: "col-12 q-mt-sm" }, [
                                    s("span", { staticClass: "text-grey" }, [e._v("课程信息：")]),
                                    s(
                                      "span",
                                      {
                                        staticClass: "text-primary cursor-pointer",
                                        on: {
                                          click: function (t) {
                                            return e.showCourseInfo(
                                              e.record.student_no,
                                              e.record.name,
                                              e.record.begin_day,
                                              e.record.end_day,
                                            );
                                          },
                                        },
                                      },
                                      [e._v("查看")],
                                    ),
                                  ]),
                                  e.record.location
                                    ? s("div", { staticClass: "col-12 q-mt-sm" }, [
                                        s("span", { staticClass: "text-grey" }, [
                                          e._v("发起位置："),
                                        ]),
                                        s("span", [e._v(e._s(e.record.location.address))]),
                                      ])
                                    : e._e(),
                                  s(
                                    "div",
                                    {
                                      directives: [
                                        {
                                          name: "show",
                                          rawName: "v-show",
                                          value:
                                            e.record.attachment && 0 != e.record.attachment.length,
                                          expression:
                                            "record.attachment && record.attachment.length != 0",
                                        },
                                      ],
                                      staticClass: "col-12 q-mt-sm",
                                    },
                                    [
                                      s("span", { staticClass: "text-grey" }, [e._v("附件：")]),
                                      e._l(e.record.attachment, function (t) {
                                        return s(
                                          "div",
                                          { key: t.link, staticClass: "q-mt-sm" },
                                          [
                                            s("q-img", {
                                              staticStyle: {
                                                height: "200px",
                                                "max-width": "200px",
                                              },
                                              attrs: { src: e.serverUrl + t.link, ratio: 1 },
                                              on: {
                                                click: function (s) {
                                                  return e.showBig(t.link, t.srcname);
                                                },
                                              },
                                            }),
                                          ],
                                          1,
                                        );
                                      }),
                                    ],
                                    2,
                                  ),
                                ],
                              ),
                            ],
                            1,
                          )
                        : e._e(),
                      0 == e.pageType
                        ? s(
                            "q-card",
                            { staticClass: "full-width row q-mt-sm", attrs: { flat: "" } },
                            [
                              s(
                                "q-list",
                                { staticClass: "full-width" },
                                [
                                  s("div", { staticClass: "row q-ml-md q-mt-md" }, [
                                    s("div", { staticClass: "col-12 text-left text-weight-bold" }, [
                                      e._v("审批流程"),
                                    ]),
                                  ]),
                                  s("q-item", [
                                    0 == e.showReview
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
                                                      subtitle: e.record.create_time_short,
                                                      color: "grey",
                                                    },
                                                  },
                                                  [
                                                    e._v(
                                                      "\n                  " +
                                                        e._s(e.record.name) +
                                                        " - 发起申请\n                ",
                                                    ),
                                                  ],
                                                ),
                                                e._l(e.record.review_list, function (t, a) {
                                                  return s(
                                                    "q-timeline-entry",
                                                    {
                                                      key: t.id,
                                                      attrs: {
                                                        subtitle: t.review_time,
                                                        color:
                                                          "W" != e.record.review_status &&
                                                          e.record.review_list &&
                                                          a == e.record.review_list.length - 1
                                                            ? "A" == t.review_status
                                                              ? "positive"
                                                              : "red"
                                                            : "grey",
                                                      },
                                                    },
                                                    [
                                                      e._v(
                                                        "\n                  " +
                                                          e._s(t.teacher_name) +
                                                          " - " +
                                                          e._s(t.review_status_name) +
                                                          "\n                  ",
                                                      ),
                                                      s(
                                                        "p",
                                                        {
                                                          directives: [
                                                            {
                                                              name: "show",
                                                              rawName: "v-show",
                                                              value: null != t.opinion,
                                                              expression: "item.opinion != null",
                                                            },
                                                          ],
                                                          staticStyle: { "font-size": "11px" },
                                                        },
                                                        [e._v("审批意见：" + e._s(t.opinion))],
                                                      ),
                                                    ],
                                                  );
                                                }),
                                                "W" != e.r_review.r_status &&
                                                e.nextTeacher.length > 0
                                                  ? s(
                                                      "q-timeline-entry",
                                                      {
                                                        attrs: {
                                                          subtitle: "当前审核教师",
                                                          color: "warning",
                                                        },
                                                      },
                                                      [
                                                        e._l(
                                                          e.nextTeacher.slice(0, 3),
                                                          function (t, a) {
                                                            return s(
                                                              "span",
                                                              { key: t.teacher_no },
                                                              [
                                                                e._v(e._s(t.name)),
                                                                a != e.nextTeacher.length - 1 &&
                                                                2 != a &&
                                                                e.nextTeacher.length > 1
                                                                  ? s("span", [e._v(", ")])
                                                                  : e._e(),
                                                              ],
                                                            );
                                                          },
                                                        ),
                                                        e.nextTeacher.length > 3
                                                          ? s("span", [
                                                              e._v(
                                                                "等" +
                                                                  e._s(e.nextTeacher.length) +
                                                                  "人审核中",
                                                              ),
                                                            ])
                                                          : e._e(),
                                                      ],
                                                      2,
                                                    )
                                                  : e._e(),
                                                "W" == e.r_review.r_status
                                                  ? s(
                                                      "q-timeline-entry",
                                                      {
                                                        attrs: {
                                                          subtitle: "现在",
                                                          color: "warning",
                                                          icon: "check",
                                                        },
                                                      },
                                                      [
                                                        s(
                                                          "div",
                                                          { staticClass: "neu-css-after-colon" },
                                                          [e._v("审批意见")],
                                                        ),
                                                        s("q-input", {
                                                          staticClass: "q-mb-sm",
                                                          attrs: {
                                                            outlined: "",
                                                            dense: "",
                                                            type: "textarea",
                                                          },
                                                          model: {
                                                            value: e.opition,
                                                            callback: function (t) {
                                                              e.opition = t;
                                                            },
                                                            expression: "opition",
                                                          },
                                                        }),
                                                        s(
                                                          "div",
                                                          { staticClass: "q-gutter-sm row" },
                                                          [
                                                            s("q-btn", {
                                                              attrs: {
                                                                unelevated: "",
                                                                color: "positive",
                                                                label: "通过",
                                                              },
                                                              on: {
                                                                click: function (t) {
                                                                  return e.Operation(1);
                                                                },
                                                              },
                                                            }),
                                                            s("q-btn", {
                                                              attrs: {
                                                                unelevated: "",
                                                                color: "red",
                                                                label: "驳回",
                                                              },
                                                              on: {
                                                                click: function (t) {
                                                                  return e.Operation(2);
                                                                },
                                                              },
                                                            }),
                                                          ],
                                                          1,
                                                        ),
                                                      ],
                                                      1,
                                                    )
                                                  : e._e(),
                                                e.record.report_time
                                                  ? s(
                                                      "q-timeline-entry",
                                                      {
                                                        attrs: {
                                                          subtitle: e.record.report_time,
                                                          color: "grey",
                                                        },
                                                      },
                                                      [
                                                        e._v(
                                                          "\n                  " +
                                                            e._s(e.record.name) +
                                                            " - 销假成功\n                  ",
                                                        ),
                                                        s(
                                                          "div",
                                                          { staticClass: "row full-width" },
                                                          e._l(
                                                            e.record.report_attachment,
                                                            function (t) {
                                                              return s("q-img", {
                                                                key: t.link,
                                                                staticClass: "q-mx-sm q-my-sm",
                                                                staticStyle: {
                                                                  cursor: "pointer",
                                                                  height: "auto",
                                                                  width: "40%",
                                                                },
                                                                attrs: {
                                                                  src: e.serverUrl + t.link,
                                                                  ratio: 1,
                                                                },
                                                                on: {
                                                                  click: function (s) {
                                                                    return e.showBig(
                                                                      t.link,
                                                                      t.srcname,
                                                                    );
                                                                  },
                                                                },
                                                              });
                                                            },
                                                          ),
                                                          1,
                                                        ),
                                                      ],
                                                    )
                                                  : e._e(),
                                              ],
                                              2,
                                            ),
                                          ],
                                          1,
                                        )
                                      : e._e(),
                                    1 == e.showReview
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
                                                      subtitle: e.create_time_short,
                                                      color: "grey",
                                                    },
                                                  },
                                                  [
                                                    e._v(
                                                      "\n                  " +
                                                        e._s(e.m_teacher_name) +
                                                        " - 发起申请\n                ",
                                                    ),
                                                  ],
                                                ),
                                                e._l(e.review_list, function (t, a) {
                                                  return s(
                                                    "q-timeline-entry",
                                                    {
                                                      key: t.id,
                                                      attrs: {
                                                        subtitle: t.review_time,
                                                        color:
                                                          "W" != e.record.review_status &&
                                                          e.record.review_list &&
                                                          a == e.record.review_list.length - 1
                                                            ? "A" == t.review_status
                                                              ? "positive"
                                                              : "red"
                                                            : "grey",
                                                      },
                                                    },
                                                    [
                                                      e._v(
                                                        "\n                  " +
                                                          e._s(t.teacher_name) +
                                                          " - " +
                                                          e._s(t.review_status_name) +
                                                          "\n                  ",
                                                      ),
                                                      s(
                                                        "p",
                                                        {
                                                          directives: [
                                                            {
                                                              name: "show",
                                                              rawName: "v-show",
                                                              value: null != t.opinion,
                                                              expression: "item.opinion != null",
                                                            },
                                                          ],
                                                          staticStyle: { "font-size": "11px" },
                                                        },
                                                        [e._v("审批意见：" + e._s(t.opinion))],
                                                      ),
                                                    ],
                                                  );
                                                }),
                                                "W" == e.r_review.r_status
                                                  ? s(
                                                      "q-timeline-entry",
                                                      {
                                                        attrs: {
                                                          subtitle: "现在",
                                                          color: "warning",
                                                          icon: "check",
                                                        },
                                                      },
                                                      [
                                                        s(
                                                          "div",
                                                          { staticClass: "neu-css-after-colon" },
                                                          [e._v("审批意见")],
                                                        ),
                                                        s("q-input", {
                                                          staticClass: "q-mb-sm",
                                                          attrs: {
                                                            outlined: "",
                                                            dense: "",
                                                            type: "textarea",
                                                          },
                                                          model: {
                                                            value: e.opition,
                                                            callback: function (t) {
                                                              e.opition = t;
                                                            },
                                                            expression: "opition",
                                                          },
                                                        }),
                                                        s(
                                                          "div",
                                                          { staticClass: "q-gutter-sm row" },
                                                          [
                                                            s("q-btn", {
                                                              attrs: {
                                                                unelevated: "",
                                                                color: "positive",
                                                                label: "通过",
                                                              },
                                                              on: {
                                                                click: function (t) {
                                                                  return e.Operation(1);
                                                                },
                                                              },
                                                            }),
                                                            s("q-btn", {
                                                              attrs: {
                                                                unelevated: "",
                                                                color: "red",
                                                                label: "驳回",
                                                              },
                                                              on: {
                                                                click: function (t) {
                                                                  return e.Operation(2);
                                                                },
                                                              },
                                                            }),
                                                          ],
                                                          1,
                                                        ),
                                                      ],
                                                      1,
                                                    )
                                                  : e._e(),
                                                e.record.report_time
                                                  ? s(
                                                      "q-timeline-entry",
                                                      {
                                                        attrs: {
                                                          subtitle: e.record.report_time,
                                                          color: "grey",
                                                        },
                                                      },
                                                      [
                                                        e._v(
                                                          "\n                  " +
                                                            e._s(e.record.name) +
                                                            " - 销假成功\n                  ",
                                                        ),
                                                        s(
                                                          "div",
                                                          { staticClass: "row full-width" },
                                                          e._l(
                                                            e.record.report_attachment,
                                                            function (t) {
                                                              return s("q-img", {
                                                                key: t.link,
                                                                staticClass: "q-mx-sm q-my-sm",
                                                                staticStyle: {
                                                                  cursor: "pointer",
                                                                  height: "auto",
                                                                  width: "40%",
                                                                },
                                                                attrs: {
                                                                  src: e.serverUrl + t.link,
                                                                  ratio: 1,
                                                                },
                                                                on: {
                                                                  click: function (s) {
                                                                    return e.showBig(
                                                                      t.link,
                                                                      t.srcname,
                                                                    );
                                                                  },
                                                                },
                                                              });
                                                            },
                                                          ),
                                                          1,
                                                        ),
                                                      ],
                                                    )
                                                  : e._e(),
                                              ],
                                              2,
                                            ),
                                          ],
                                          1,
                                        )
                                      : e._e(),
                                  ]),
                                  s("q-separator"),
                                ],
                                1,
                              ),
                            ],
                            1,
                          )
                        : e._e(),
                    ],
                    1,
                  ),
                ],
                1,
              ),
              s("neu-full-screen-image", {
                attrs: { url: e.bigPicUrl, name: e.bigPicName },
                model: {
                  value: e.showBigPic,
                  callback: function (t) {
                    e.showBigPic = t;
                  },
                  expression: "showBigPic",
                },
              }),
              s(
                "q-dialog",
                {
                  model: {
                    value: e.courseInfoDialog,
                    callback: function (t) {
                      e.courseInfoDialog = t;
                    },
                    expression: "courseInfoDialog",
                  },
                },
                [
                  s(
                    "q-card",
                    { staticClass: "full-width", attrs: { flat: "" } },
                    [
                      s("q-card-section", [
                        s("div", { staticClass: "text-bold" }, [
                          e._v(e._s(e.courseInfoTitle) + " 的课表及活动"),
                        ]),
                      ]),
                      0 == e.courseInfo.length ? s("hr") : e._e(),
                      0 == e.courseInfo.length
                        ? s(
                            "div",
                            {
                              staticClass:
                                "text-h6 text-bold q-mb-md row justify-center full-width",
                            },
                            [e._v("当日暂无课表及活动信息！")],
                          )
                        : e._e(),
                      0 != e.courseInfo.length
                        ? s("q-markup-table", { attrs: { bordered: "", flat: "" } }, [
                            s("thead", { staticClass: "bg-grey-3" }, [
                              s("tr", [
                                s("th", { staticClass: "text-left text-bold" }, [e._v("日期")]),
                                s("th", { staticClass: "text-left text-bold" }, [e._v("内容")]),
                              ]),
                            ]),
                            s(
                              "tbody",
                              e._l(e.courseInfo, function (t) {
                                return s("tr", { key: t.date }, [
                                  s("td", [e._v(e._s(t.date))]),
                                  s("td", { domProps: { innerHTML: e._s(t.content) } }),
                                ]);
                              }),
                              0,
                            ),
                          ])
                        : e._e(),
                    ],
                    1,
                  ),
                ],
                1,
              ),
              s(
                "q-dialog",
                {
                  model: {
                    value: e.writeOpinion,
                    callback: function (t) {
                      e.writeOpinion = t;
                    },
                    expression: "writeOpinion",
                  },
                },
                [
                  s(
                    "q-card",
                    { staticStyle: { width: "700px", "max-width": "80vw" } },
                    [
                      s("q-card-section", [
                        s("div", { staticClass: "text-h6" }, [e._v("审批意见")]),
                      ]),
                      s(
                        "q-card-section",
                        { staticClass: "q-pt-none" },
                        [
                          s("q-input", {
                            attrs: { dense: "", autofocus: "" },
                            model: {
                              value: e.opition,
                              callback: function (t) {
                                e.opition = t;
                              },
                              expression: "opition",
                            },
                          }),
                        ],
                        1,
                      ),
                      s(
                        "q-card-actions",
                        { staticClass: "text-primary", attrs: { align: "right" } },
                        [
                          s("q-btn", {
                            directives: [{ name: "close-popup", rawName: "v-close-popup" }],
                            attrs: { flat: "", label: "取消" },
                          }),
                          s("q-btn", {
                            directives: [{ name: "close-popup", rawName: "v-close-popup" }],
                            attrs: { flat: "", label: "确认" },
                            on: {
                              click: function (t) {
                                return e.forceOperation();
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
          );
        },
        i = [],
        r = (s("5319"), s("ded3")),
        n = s.n(r),
        o = s("33be"),
        l = {
          name: "LeaveDetail",
          components: { NeuFullScreenImage: o["a"] },
          data() {
            return {
              serverUrl: window.localStorage.server,
              paging: {
                pageSize: 30,
                pageNum: 1,
                rowCount: 1,
                pageCount: 1,
                startIndex: 1,
                endIndex: 1,
              },
              menuInfo: null,
              historyDialog: !1,
              record: {},
              history: [],
              pagination: { rowsPerPage: 0 },
              chooseReview: null,
              opition: "",
              leaveTypeId: null,
              student_no: null,
              r_review: {},
              begin_time: null,
              end_time: null,
              student_name: null,
              pageType: 0,
              bigPicUrl: "",
              bigPicName: "",
              showBigPic: !1,
              m_teacher_name: "",
              review_num: "",
              showReview: 0,
              m_teacher_no: "",
              review_list: [],
              create_time_short: "",
              courseInfoDialog: !1,
              courseInfo: [],
              courseInfoTitle: "",
              nextTeacher: [],
              userinfo: window.localStorage.userinfo
                ? JSON.parse(window.localStorage.getItem("userinfo"))
                : {},
              writeOpinion: !1,
              leaveLevel: 0,
            };
          },
          destroyed() {
            window.removeEventListener("popstate", this.goBack, !1);
          },
          mounted() {
            (window.localStorage.getItem("menu") &&
              (this.menuInfo = JSON.parse(window.localStorage.getItem("menu")).find(
                (e) => "leave" === e.id,
              )),
              this.menuInfo
                ? this.getLeaveReviewInfo()
                : ((this.pageType = 1),
                  this.$q.notify({
                    color: "red-5",
                    textColor: "white",
                    icon: "warning",
                    message: "您无权限查看此详情！",
                  }),
                  this.$router.push("/teacher/index")),
              window.history &&
                window.history.pushState &&
                (history.pushState(null, null, document.URL),
                window.addEventListener("popstate", this.goBack, !1)));
          },
          computed: {},
          methods: {
            showBig(e, t) {
              ((this.bigPicUrl = e), (this.bigPicName = t), (this.showBigPic = !0));
            },
            getLeaveReviewInfo() {
              const e = JSON.parse(localStorage.getItem("userinfo"));
              this.$axiosAction("/api/teacher/leave/leave.api", {
                action: "getLeaveReviewInfo",
                id: parseInt(this.$route.query.id),
                pageSize: this.paging.pageSize,
                pageNum: this.paging.pageNum,
                teacher_no: e.login_name,
              }).then((e) => {
                if (2001 === e.data.code)
                  ((this.pageType = 1),
                    this.$router.push(`/teacher/leave/list?tab=${this.$route.query.tab}`));
                else {
                  this.pageType = 0;
                  const t = e.data.reviewInfo,
                    s = e.data.leaveByStudent.list;
                  ((this.r_review = e.data.reviewStauts[0]),
                    (t.leave_period = t.short_time + "(" + t.time_info + ")"),
                    (this.begin_time = t.begin_time),
                    (this.end_time = t.end_time),
                    (t.review_list = e.data.review_list),
                    (this.leaveLevel = e.data.review_list.length + 1),
                    null !== t.leave_multi_id
                      ? ((this.showReview = 1), this.getMultiReviewInfo(t.leave_multi_id))
                      : (this.showReview = 0),
                    (this.record = t),
                    (this.nextTeacher = e.data.nextTeacher),
                    (this.student_no = t.student_no),
                    (this.leaveTypeId = t.leave_type_id),
                    (this.student_name = t.name));
                  for (let e = 0; e < s.length; e++)
                    s[e].leave_period = s[e].short_time + "(" + s[e].time_info + ")";
                  this.history = s;
                  const {
                    pageSize: a,
                    pageNum: i,
                    rowCount: r,
                    pageCount: o,
                    startIndex: l,
                    endIndex: c,
                  } = n()({}, e.data.leaveByStudent);
                  this.paging = {
                    pageSize: a,
                    pageNum: i,
                    rowCount: r,
                    pageCount: o,
                    startIndex: l,
                    endIndex: c,
                  };
                }
              });
            },
            showCourseInfo(e, t, s, a) {
              ((this.courseInfo = []),
                (this.courseInfoDialog = !0),
                (this.courseInfoTitle = t),
                this.$axiosAction("api/teacher/leave/leave.api", {
                  action: "getStudentCourseInfo",
                  student_no: e,
                }).then((e) => {
                  if (0 === e.data.code) {
                    const t = new Date(s),
                      i = new Date(a),
                      r = [];
                    for (const s in e.data.list.course_info) {
                      const a = new Date(s);
                      t <= a &&
                        a <= i &&
                        r.push({
                          date: s,
                          content: e.data.list.course_info[s]
                            .replace(/(\r\n)/g, "<br>")
                            .replace(/\n/g, "<br>"),
                        });
                    }
                    this.courseInfo = r;
                  }
                }));
            },
            getMultiReviewInfo(e) {
              this.$axiosAction("/api/teacher/leave/leave.api", {
                action: "getMultiLeaveTeacherInfo",
                id: e,
              }).then((e) => {
                ((this.review_list = e.data.review_list),
                  (this.m_teacher_name = e.data.list.teacher_name),
                  (this.m_teacher_no = e.data.list.teacher_no),
                  (this.create_time_short = e.data.list.create_time_short));
              });
            },
            Operation(e) {
              if (null === this.menuInfo.edit_permit)
                this.$q.notify({
                  color: "red-5",
                  textColor: "white",
                  icon: "warning",
                  message: "您没有权限执行此操作！",
                });
              else {
                const t = JSON.parse(localStorage.getItem("userinfo"));
                this.chooseReview = 1 === e ? "A" : "R";
                let s = "updateLeaveReview";
                (this.writeOpinion && (s = "updateLeaveRefuse"),
                  this.$axiosAction("/api/teacher/leave/leave.api", {
                    action: s,
                    teacher_no: t.login_name,
                    id: parseInt(this.$route.query.id),
                    review_status: this.chooseReview,
                    opinion: this.opition,
                    leave_type_id: this.leaveTypeId,
                    begin_time: this.begin_time,
                    end_time: this.end_time,
                    student_no: this.student_no,
                    student_name: this.student_name,
                    leave_level: this.leaveLevel,
                  }).then((e) => {
                    0 === e.data.code && this.getLeaveReviewInfo();
                  }));
              }
            },
            getStudentHistory(e, t) {
              this.$router.push(
                `/teacher/leave/history?student_no=${e}&id=${this.$route.query.id}&student_name=${t}&tab=${this.$route.query.tab}`,
              );
            },
            goBack() {
              this.$router.push(`/teacher/leave/list?tab=${this.$route.query.tab}`);
            },
            RefuseLeave() {
              ((this.opition = ""), (this.writeOpinion = !0));
            },
            forceOperation() {
              this.Operation(2);
            },
          },
        },
        c = l,
        d = s("2877"),
        _ = s("4d5a"),
        u = s("e359"),
        v = s("65c6"),
        p = s("9c40"),
        m = s("6ac5"),
        h = s("09e3"),
        w = s("9989"),
        g = s("f09f"),
        f = s("a370"),
        y = s("b047"),
        q = s("cb32"),
        x = s("068f"),
        b = s("1c1c"),
        C = s("66e5"),
        I = s("05eb"),
        k = s("74af"),
        S = s("27f9"),
        T = s("eb85"),
        Q = s("24e8"),
        $ = s("2bb1"),
        N = s("7ff0"),
        R = s("429b"),
        L = s("7460"),
        O = s("4b7e"),
        P = s("7f67"),
        B = s("eebe"),
        A = s.n(B),
        D = Object(d["a"])(c, a, i, !1, null, null, null);
      t["default"] = D.exports;
      (A()(D, "components", {
        QLayout: _["a"],
        QHeader: u["a"],
        QToolbar: v["a"],
        QBtn: p["a"],
        QToolbarTitle: m["a"],
        QPageContainer: h["a"],
        QPage: w["a"],
        QCard: g["a"],
        QCardSection: f["a"],
        QChip: y["a"],
        QAvatar: q["a"],
        QImg: x["a"],
        QList: b["a"],
        QItem: C["a"],
        QTimeline: I["a"],
        QTimelineEntry: k["a"],
        QInput: S["a"],
        QSeparator: T["a"],
        QDialog: Q["a"],
        QMarkupTable: $["a"],
        QFooter: N["a"],
        QTabs: R["a"],
        QTab: L["a"],
        QCardActions: O["a"],
      }),
        A()(D, "directives", { ClosePopup: P["a"] }));
    },
  },
]);
