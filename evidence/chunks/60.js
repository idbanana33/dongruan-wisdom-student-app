(window["webpackJsonp"] = window["webpackJsonp"] || []).push([
  [60],
  {
    7778: function (t, e, a) {
      "use strict";
      a.r(e);
      var i = function () {
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
                      a("q-toolbar-title", [t._v("业务数据分析")]),
                      a(
                        "q-btn-dropdown",
                        { attrs: { "auto-close": "", stretch: "", flat: "", label: t.tabName } },
                        [
                          a(
                            "q-list",
                            [
                              a(
                                "q-item",
                                {
                                  attrs: { clickable: "" },
                                  on: {
                                    click: function (e) {
                                      ((t.tab = "leave"), (t.tabName = "请假"));
                                    },
                                  },
                                },
                                [a("q-item-section", [t._v("请假")])],
                                1,
                              ),
                              a(
                                "q-item",
                                {
                                  attrs: { clickable: "" },
                                  on: {
                                    click: function (e) {
                                      ((t.tab = "notice"), (t.tabName = "通知"));
                                    },
                                  },
                                },
                                [a("q-item-section", [t._v("通知")])],
                                1,
                              ),
                              a(
                                "q-item",
                                {
                                  attrs: { clickable: "" },
                                  on: {
                                    click: function (e) {
                                      ((t.tab = "apply"), (t.tabName = "申请"));
                                    },
                                  },
                                },
                                [a("q-item-section", [t._v("申请")])],
                                1,
                              ),
                              a(
                                "q-item",
                                {
                                  attrs: { clickable: "" },
                                  on: {
                                    click: function (e) {
                                      ((t.tab = "signup"), (t.tabName = "活动报名"));
                                    },
                                  },
                                },
                                [a("q-item-section", [t._v("活动报名")])],
                                1,
                              ),
                              a(
                                "q-item",
                                {
                                  attrs: { clickable: "" },
                                  on: {
                                    click: function (e) {
                                      ((t.tab = "collect"), (t.tabName = "信息收集"));
                                    },
                                  },
                                },
                                [a("q-item-section", [t._v("信息收集")])],
                                1,
                              ),
                              a(
                                "q-item",
                                {
                                  attrs: { clickable: "" },
                                  on: {
                                    click: function (e) {
                                      ((t.tab = "signin"), (t.tabName = "签到"));
                                    },
                                  },
                                },
                                [a("q-item-section", [t._v("签到")])],
                                1,
                              ),
                              a(
                                "q-item",
                                {
                                  attrs: { clickable: "" },
                                  on: {
                                    click: function (e) {
                                      ((t.tab = "process"), (t.tabName = "日常流程"));
                                    },
                                  },
                                },
                                [a("q-item-section", [t._v("日常流程")])],
                                1,
                              ),
                              a(
                                "q-item",
                                {
                                  attrs: { clickable: "" },
                                  on: {
                                    click: function (e) {
                                      ((t.tab = "process_gate"), (t.tabName = "返校离校流程"));
                                    },
                                  },
                                },
                                [a("q-item-section", [t._v("返校离校流程")])],
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
                "q-page-container",
                [
                  a(
                    "q-page",
                    { staticClass: "bg-grey-3 q-pb-sm" },
                    [
                      a("leave-analysis", {
                        directives: [
                          {
                            name: "show",
                            rawName: "v-show",
                            value: "leave" == t.tab,
                            expression: "tab == 'leave'",
                          },
                        ],
                      }),
                      a("signin-analysis", {
                        directives: [
                          {
                            name: "show",
                            rawName: "v-show",
                            value: "signin" == t.tab,
                            expression: "tab == 'signin'",
                          },
                        ],
                      }),
                      a("notice-analysis", {
                        directives: [
                          {
                            name: "show",
                            rawName: "v-show",
                            value: "notice" == t.tab,
                            expression: "tab == 'notice'",
                          },
                        ],
                      }),
                      a("apply-analysis", {
                        directives: [
                          {
                            name: "show",
                            rawName: "v-show",
                            value: "apply" == t.tab,
                            expression: "tab == 'apply'",
                          },
                        ],
                        attrs: { applyType: "A" },
                      }),
                      a("signup-analysis", {
                        directives: [
                          {
                            name: "show",
                            rawName: "v-show",
                            value: "signup" == t.tab,
                            expression: "tab == 'signup'",
                          },
                        ],
                        attrs: { applyType: "S" },
                      }),
                      a("collects-analysis", {
                        directives: [
                          {
                            name: "show",
                            rawName: "v-show",
                            value: "collect" == t.tab,
                            expression: "tab == 'collect'",
                          },
                        ],
                        attrs: { applyType: "C" },
                      }),
                      a("process-analysis", {
                        directives: [
                          {
                            name: "show",
                            rawName: "v-show",
                            value: "process" == t.tab,
                            expression: "tab == 'process'",
                          },
                        ],
                        attrs: { service_flag: "N" },
                      }),
                      a("process-gate-analysis", {
                        directives: [
                          {
                            name: "show",
                            rawName: "v-show",
                            value: "process_gate" == t.tab,
                            expression: "tab == 'process_gate'",
                          },
                        ],
                        attrs: { service_flag: "G" },
                      }),
                    ],
                    1,
                  ),
                  a(
                    "q-dialog",
                    {
                      attrs: { persistent: "", fullWidth: "", maximized: t.maximizedToggle },
                      model: {
                        value: t.taskTargetDialog,
                        callback: function (e) {
                          t.taskTargetDialog = e;
                        },
                        expression: "taskTargetDialog",
                      },
                    },
                    [
                      a(
                        "q-layout",
                        { staticClass: "bg-white", attrs: { view: "lHh lpr lFf", container: "" } },
                        [
                          a(
                            "q-header",
                            { staticClass: "full-width bg-white" },
                            [
                              a("q-toolbar", [
                                a(
                                  "div",
                                  {
                                    staticClass:
                                      "full-width row items-center justify-between q-px-xs q-py-sm",
                                  },
                                  [
                                    a("div", { staticClass: "text-bold text-black" }, [
                                      t._v("设置统计对象"),
                                    ]),
                                    a("q-btn", {
                                      attrs: { unelevated: "", color: "primary", label: "完成" },
                                      on: {
                                        click: function (e) {
                                          t.taskTargetDialog = !1;
                                        },
                                      },
                                    }),
                                  ],
                                  1,
                                ),
                              ]),
                            ],
                            1,
                          ),
                          a(
                            "q-page-container",
                            [
                              a(
                                "q-page",
                                [
                                  a("neu-assign-student", {
                                    attrs: {
                                      permit: t.menuInfo ? t.menuInfo.view_permit : null,
                                      "permit-mode": "V",
                                      "menu-id": t.menuInfo ? t.menuInfo.id : null,
                                    },
                                    model: {
                                      value: t.task_target,
                                      callback: function (e) {
                                        t.task_target = e;
                                      },
                                      expression: "task_target",
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
              ),
            ],
            1,
          );
        },
        s = [],
        n = a("f395"),
        l = function () {
          var t = this,
            e = t.$createElement,
            a = t._self._c || e;
          return a(
            "q-card",
            { staticClass: "bg-white q-mb-sm q-mx-sm", attrs: { flat: "" } },
            [
              a(
                "q-expansion-item",
                {
                  attrs: {
                    "switch-toggle-side": "",
                    "expand-separator": "",
                    icon: "search",
                    label: "检索",
                  },
                  model: {
                    value: t.showExp,
                    callback: function (e) {
                      t.showExp = e;
                    },
                    expression: "showExp",
                  },
                },
                [
                  a(
                    "q-card",
                    [
                      a(
                        "q-list",
                        { staticClass: "full-width" },
                        [
                          a(
                            "q-item",
                            [
                              a("q-item-section", { attrs: { avatar: "" } }, [
                                a("div", { staticClass: "neu-css-before-red-asterisk" }, [
                                  t._v("\n              开始时间\n            "),
                                ]),
                              ]),
                              a("q-item-section"),
                              a(
                                "q-item-section",
                                { attrs: { side: "" } },
                                [
                                  a("q-field", {
                                    staticStyle: { width: "200px" },
                                    attrs: {
                                      outlined: "",
                                      dense: "",
                                      "stack-label": "",
                                      "hide-bottom-space": "",
                                      "lazy-rules": "",
                                      value: t.begin_time,
                                    },
                                    scopedSlots: t._u([
                                      {
                                        key: "control",
                                        fn: function () {
                                          return [t._v(t._s(t.begin_time))];
                                        },
                                        proxy: !0,
                                      },
                                      {
                                        key: "append",
                                        fn: function () {
                                          return [
                                            a(
                                              "q-icon",
                                              {
                                                staticClass: "cursor-pointer",
                                                attrs: { name: "event" },
                                              },
                                              [
                                                a(
                                                  "q-popup-proxy",
                                                  {
                                                    attrs: {
                                                      "transition-show": "scale",
                                                      "transition-hide": "scale",
                                                    },
                                                  },
                                                  [
                                                    a(
                                                      "div",
                                                      [
                                                        a(
                                                          "q-date",
                                                          {
                                                            attrs: {
                                                              flat: "",
                                                              minimal: "",
                                                              mask: "YYYY-MM-DD",
                                                            },
                                                            model: {
                                                              value: t.begin_time,
                                                              callback: function (e) {
                                                                t.begin_time = e;
                                                              },
                                                              expression: "begin_time",
                                                            },
                                                          },
                                                          [
                                                            a(
                                                              "div",
                                                              {
                                                                staticClass:
                                                                  "row items-center justify-end",
                                                              },
                                                              [
                                                                a("q-btn", {
                                                                  directives: [
                                                                    {
                                                                      name: "close-popup",
                                                                      rawName: "v-close-popup",
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
                                    ]),
                                  }),
                                ],
                                1,
                              ),
                            ],
                            1,
                          ),
                          a("q-separator"),
                          a(
                            "q-item",
                            [
                              a("q-item-section", { attrs: { avatar: "" } }, [
                                a("div", { staticClass: "neu-css-before-red-asterisk" }, [
                                  t._v("\n              结束时间\n            "),
                                ]),
                              ]),
                              a("q-item-section"),
                              a(
                                "q-item-section",
                                { attrs: { side: "" } },
                                [
                                  a("q-field", {
                                    staticStyle: { width: "200px" },
                                    attrs: {
                                      outlined: "",
                                      dense: "",
                                      "stack-label": "",
                                      "hide-bottom-space": "",
                                      "lazy-rules": "",
                                      rules: [
                                        function (e) {
                                          return e >= t.begin_time || "截止时间应在开始时间之后";
                                        },
                                      ],
                                      value: t.end_time,
                                    },
                                    scopedSlots: t._u([
                                      {
                                        key: "control",
                                        fn: function () {
                                          return [t._v(t._s(t.end_time))];
                                        },
                                        proxy: !0,
                                      },
                                      {
                                        key: "append",
                                        fn: function () {
                                          return [
                                            a(
                                              "q-icon",
                                              {
                                                staticClass: "cursor-pointer",
                                                attrs: { name: "event" },
                                              },
                                              [
                                                a(
                                                  "q-popup-proxy",
                                                  {
                                                    attrs: {
                                                      "transition-show": "scale",
                                                      "transition-hide": "scale",
                                                    },
                                                  },
                                                  [
                                                    a(
                                                      "div",
                                                      [
                                                        a(
                                                          "q-date",
                                                          {
                                                            attrs: {
                                                              flat: "",
                                                              minimal: "",
                                                              mask: "YYYY-MM-DD",
                                                            },
                                                            model: {
                                                              value: t.end_time,
                                                              callback: function (e) {
                                                                t.end_time = e;
                                                              },
                                                              expression: "end_time",
                                                            },
                                                          },
                                                          [
                                                            a(
                                                              "div",
                                                              {
                                                                staticClass:
                                                                  "row items-center justify-end",
                                                              },
                                                              [
                                                                a("q-btn", {
                                                                  directives: [
                                                                    {
                                                                      name: "close-popup",
                                                                      rawName: "v-close-popup",
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
                                    ]),
                                  }),
                                ],
                                1,
                              ),
                            ],
                            1,
                          ),
                          a("q-separator"),
                          a(
                            "q-item",
                            [
                              a("q-item-section", { attrs: { avatar: "" } }, [
                                a("div", { staticClass: "neu-css-before-red-asterisk" }, [
                                  t._v("\n              统计对象\n            "),
                                ]),
                              ]),
                              a("q-item-section"),
                              a(
                                "q-item-section",
                                { attrs: { side: "" } },
                                [
                                  a(
                                    "q-item-label",
                                    { staticClass: "row items-center" },
                                    [
                                      a(
                                        "span",
                                        {
                                          directives: [
                                            {
                                              name: "show",
                                              rawName: "v-show",
                                              value: !t.task_target || 0 == t.task_target.length,
                                              expression:
                                                "!task_target || task_target.length == 0 ",
                                            },
                                          ],
                                          staticClass: "text-grey",
                                          on: {
                                            click: function (e) {
                                              t.taskTargetDialog = !0;
                                            },
                                          },
                                        },
                                        [t._v("选择")],
                                      ),
                                      a("q-icon", {
                                        directives: [
                                          {
                                            name: "show",
                                            rawName: "v-show",
                                            value: !t.task_target || 0 == t.task_target.length,
                                            expression: "!task_target || task_target.length == 0 ",
                                          },
                                        ],
                                        staticClass: "text-grey",
                                        attrs: { name: "keyboard_arrow_right", size: "sm" },
                                      }),
                                      a(
                                        "span",
                                        {
                                          directives: [
                                            {
                                              name: "show",
                                              rawName: "v-show",
                                              value: t.task_target && 0 != t.task_target.length,
                                              expression: "task_target && task_target.length != 0 ",
                                            },
                                          ],
                                          staticClass: "text-primary",
                                          on: {
                                            click: function (e) {
                                              t.taskTargetDialog = !0;
                                            },
                                          },
                                        },
                                        [t._v("已选择 (" + t._s(t.task_target.length) + ")")],
                                      ),
                                      a("q-icon", {
                                        directives: [
                                          {
                                            name: "show",
                                            rawName: "v-show",
                                            value: t.task_target && 0 != t.task_target.length,
                                            expression: "task_target && task_target.length != 0 ",
                                          },
                                        ],
                                        staticClass: "text-primary",
                                        attrs: { name: "keyboard_arrow_right", size: "sm" },
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
                          a("q-separator"),
                          a(
                            "q-item",
                            [
                              a("q-item-section", { attrs: { avatar: "" } }, [
                                t._v("\n            请假类型\n          "),
                              ]),
                              a("q-item-section", [
                                a(
                                  "div",
                                  { staticClass: "q-gutter-xs" },
                                  t._l(t.leaveTypeList, function (e) {
                                    return a("q-checkbox", {
                                      key: e.value,
                                      attrs: { val: e.value, label: e.label },
                                      model: {
                                        value: t.selection,
                                        callback: function (e) {
                                          t.selection = e;
                                        },
                                        expression: "selection",
                                      },
                                    });
                                  }),
                                  1,
                                ),
                              ]),
                            ],
                            1,
                          ),
                          a("q-separator"),
                          a("q-item", [
                            a(
                              "div",
                              { staticClass: "col text-center" },
                              [
                                a("q-btn", {
                                  staticClass: "q-mx-md",
                                  attrs: { unelevated: "", color: "primary", label: "生成统计图" },
                                  on: { click: t.checkTime },
                                }),
                              ],
                              1,
                            ),
                          ]),
                          a("q-separator"),
                        ],
                        1,
                      ),
                    ],
                    1,
                  ),
                ],
                1,
              ),
              a("q-separator"),
              a(
                "div",
                {
                  directives: [
                    {
                      name: "show",
                      rawName: "v-show",
                      value: 0 === t.showPic,
                      expression: "showPic === 0",
                    },
                  ],
                  staticClass: "q-py-sm text-center text-grey",
                },
                [a("label", [t._v("请选择统计时间和统计学生！")])],
              ),
              a(
                "div",
                {
                  directives: [
                    {
                      name: "show",
                      rawName: "v-show",
                      value: 1 === t.showPic,
                      expression: "showPic === 1",
                    },
                  ],
                },
                [
                  a(
                    "q-tabs",
                    {
                      staticClass: "text-grey full-width",
                      attrs: {
                        dense: "",
                        "active-color": "primary",
                        "indicator-color": "primary",
                        align: "justify",
                        "narrow-indicator": "",
                      },
                      on: { click: t.checkTime },
                      model: {
                        value: t.leaveTab,
                        callback: function (e) {
                          t.leaveTab = e;
                        },
                        expression: "leaveTab",
                      },
                    },
                    [
                      a("q-tab", { attrs: { name: "realTime", label: "统计数据" } }),
                      a("q-tab", { attrs: { name: "detailed", label: "详细数据" } }),
                      a("q-tab", { attrs: { name: "generalSituation", label: "请假概况" } }),
                    ],
                    1,
                  ),
                  a("q-separator"),
                  [
                    a(
                      "div",
                      {
                        directives: [
                          {
                            name: "show",
                            rawName: "v-show",
                            value: "realTime" == t.leaveTab,
                            expression: "leaveTab == 'realTime'",
                          },
                        ],
                        staticClass: "text-center q-my-md",
                      },
                      [
                        a("div", { staticClass: "row" }, [
                          a("div", { staticClass: "col" }),
                          a("div", { staticClass: "col-6" }, [
                            a(
                              "label",
                              {
                                staticStyle: {
                                  "font-size": "16px",
                                  color: "#454c5c",
                                  "font-weight": "700",
                                  "margin-top": "10px",
                                },
                              },
                              [t._v("请假率")],
                            ),
                          ]),
                          a(
                            "div",
                            {
                              staticClass: "col row items-center",
                              staticStyle: { float: "right" },
                            },
                            [
                              a(
                                "label",
                                {
                                  staticClass: "text-right",
                                  staticStyle: { color: "#1E90FF" },
                                  on: {
                                    click: function (e) {
                                      return t.CountRule("leave");
                                    },
                                  },
                                },
                                [t._v("计算规则>")],
                              ),
                            ],
                          ),
                        ]),
                        a("div", { staticStyle: { height: "260px" }, attrs: { id: "main" } }),
                        a(
                          "div",
                          { staticClass: "text-center", staticStyle: { height: "35%" } },
                          t._l(t.AllLeaveStudentNum, function (e) {
                            return a("div", { key: e.name, staticClass: "row" }, [
                              a("div", { staticClass: "col" }),
                              a("div", { staticClass: "row q-mt-sm col-7 justify-bewteen" }, [
                                a("div", { staticClass: "col-9 row items-center" }, [
                                  a("span", {
                                    directives: [
                                      {
                                        name: "show",
                                        rawName: "v-show",
                                        value: 0 !== e.itemStyle.color.length,
                                        expression: "item.itemStyle.color.length !== 0",
                                      },
                                    ],
                                    staticClass: "q-mx-sm",
                                    staticStyle: {
                                      float: "left",
                                      width: "10px",
                                      height: "10px",
                                      "border-radius": "50px",
                                    },
                                    style: { background: e.itemStyle.color },
                                  }),
                                  a("span", { staticClass: "text-grey" }, [
                                    t._v(t._s(e.name) + "："),
                                  ]),
                                ]),
                                a("div", { staticClass: "col text-grey" }, [
                                  a("label", { staticStyle: { float: "right" } }, [
                                    t._v(t._s(e.value)),
                                  ]),
                                ]),
                              ]),
                              a("div", { staticClass: "col" }),
                            ]);
                          }),
                          0,
                        ),
                      ],
                    ),
                    a("hr", {
                      directives: [
                        {
                          name: "show",
                          rawName: "v-show",
                          value: "realTime" == t.leaveTab,
                          expression: "leaveTab == 'realTime'",
                        },
                      ],
                    }),
                    a(
                      "div",
                      {
                        directives: [
                          {
                            name: "show",
                            rawName: "v-show",
                            value: "realTime" == t.leaveTab,
                            expression: "leaveTab == 'realTime'",
                          },
                        ],
                        staticClass: "text-center q-my-md",
                      },
                      [
                        a("div", { staticClass: "row" }, [
                          a("div", { staticClass: "col" }),
                          a("div", { staticClass: "col-6" }, [
                            a(
                              "label",
                              {
                                staticStyle: {
                                  "font-size": "16px",
                                  color: "#454c5c",
                                  "font-weight": "700",
                                  "margin-top": "10px",
                                },
                              },
                              [t._v("离校率")],
                            ),
                          ]),
                          a(
                            "div",
                            {
                              staticClass: "col row items-center",
                              staticStyle: { float: "right" },
                            },
                            [
                              a(
                                "label",
                                {
                                  staticClass: "text-right",
                                  staticStyle: { color: "#1E90FF" },
                                  on: {
                                    click: function (e) {
                                      return t.CountRule("walkout");
                                    },
                                  },
                                },
                                [t._v("计算规则>")],
                              ),
                            ],
                          ),
                        ]),
                        a("div", { staticStyle: { height: "260px" }, attrs: { id: "main2" } }),
                        a(
                          "div",
                          { staticClass: "text-center", staticStyle: { height: "35%" } },
                          t._l(t.WalkOutLeaveStudent, function (e) {
                            return a("div", { key: e.name, staticClass: "row" }, [
                              a("div", { staticClass: "col" }),
                              a("div", { staticClass: "row q-mt-sm col-7 justify-bewteen" }, [
                                a("div", { staticClass: "col-9 row items-center" }, [
                                  a("span", {
                                    directives: [
                                      {
                                        name: "show",
                                        rawName: "v-show",
                                        value: 0 !== e.itemStyle.color.length,
                                        expression: "item.itemStyle.color.length !== 0",
                                      },
                                    ],
                                    staticClass: "q-mx-sm",
                                    staticStyle: {
                                      float: "left",
                                      width: "10px",
                                      height: "10px",
                                      "border-radius": "50px",
                                    },
                                    style: { background: e.itemStyle.color },
                                  }),
                                  a("span", { staticClass: "text-grey" }, [
                                    t._v(t._s(e.name) + "："),
                                  ]),
                                ]),
                                a("div", { staticClass: "col text-grey" }, [
                                  a("label", { staticStyle: { float: "right" } }, [
                                    t._v(t._s(e.value)),
                                  ]),
                                ]),
                              ]),
                              a("div", { staticClass: "col" }),
                            ]);
                          }),
                          0,
                        ),
                      ],
                    ),
                    a("hr", {
                      directives: [
                        {
                          name: "show",
                          rawName: "v-show",
                          value: "realTime" == t.leaveTab,
                          expression: "leaveTab == 'realTime'",
                        },
                      ],
                    }),
                    a(
                      "div",
                      {
                        directives: [
                          {
                            name: "show",
                            rawName: "v-show",
                            value: "realTime" == t.leaveTab,
                            expression: "leaveTab == 'realTime'",
                          },
                        ],
                        staticClass: "text-center q-my-md",
                      },
                      [
                        a("div", { staticClass: "row" }, [
                          a("div", { staticClass: "col" }),
                          a("div", { staticClass: "col-6" }, [
                            a(
                              "label",
                              {
                                staticStyle: {
                                  "font-size": "16px",
                                  color: "#454c5c",
                                  "font-weight": "700",
                                  "margin-top": "10px",
                                },
                              },
                              [t._v("补请假率")],
                            ),
                          ]),
                          a(
                            "div",
                            {
                              staticClass: "col row items-center",
                              staticStyle: { float: "right" },
                            },
                            [
                              a(
                                "label",
                                {
                                  staticClass: "text-right",
                                  staticStyle: { color: "#1E90FF" },
                                  on: {
                                    click: function (e) {
                                      return t.CountRule("pass");
                                    },
                                  },
                                },
                                [t._v("计算规则>")],
                              ),
                            ],
                          ),
                        ]),
                        a("div", { staticStyle: { height: "260px" }, attrs: { id: "main7" } }),
                        a(
                          "div",
                          { staticClass: "text-center", staticStyle: { height: "35%" } },
                          t._l(t.LeaveAllowPassStudent, function (e) {
                            return a("div", { key: e.name, staticClass: "row" }, [
                              a("div", { staticClass: "col" }),
                              a("div", { staticClass: "row q-mt-sm col-7 justify-bewteen" }, [
                                a("div", { staticClass: "col-9 row items-center" }, [
                                  a("span", {
                                    directives: [
                                      {
                                        name: "show",
                                        rawName: "v-show",
                                        value: 0 !== e.itemStyle.color.length,
                                        expression: "item.itemStyle.color.length !== 0",
                                      },
                                    ],
                                    staticClass: "q-mx-sm",
                                    staticStyle: {
                                      float: "left",
                                      width: "10px",
                                      height: "10px",
                                      "border-radius": "50px",
                                    },
                                    style: { background: e.itemStyle.color },
                                  }),
                                  a("span", { staticClass: "text-grey" }, [
                                    t._v(t._s(e.name) + "："),
                                  ]),
                                ]),
                                a("div", { staticClass: "col text-grey" }, [
                                  a("label", { staticStyle: { float: "right" } }, [
                                    t._v(t._s(e.value)),
                                  ]),
                                ]),
                              ]),
                              a("div", { staticClass: "col" }),
                            ]);
                          }),
                          0,
                        ),
                      ],
                    ),
                    a("hr", {
                      directives: [
                        {
                          name: "show",
                          rawName: "v-show",
                          value: "realTime" == t.leaveTab,
                          expression: "leaveTab == 'realTime'",
                        },
                      ],
                    }),
                  ],
                  [
                    a(
                      "div",
                      {
                        directives: [
                          {
                            name: "show",
                            rawName: "v-show",
                            value: "detailed" == t.leaveTab,
                            expression: "leaveTab == 'detailed'",
                          },
                        ],
                        staticClass: "text-center q-my-md",
                      },
                      [
                        a("div", { staticClass: "row" }, [
                          a("div", { staticClass: "col" }),
                          a("div", { staticClass: "col-6" }, [
                            a(
                              "label",
                              {
                                staticStyle: {
                                  "font-size": "16px",
                                  color: "#454c5c",
                                  "font-weight": "700",
                                  "margin-top": "10px",
                                },
                              },
                              [t._v("按时长统计请假次数")],
                            ),
                          ]),
                          a(
                            "div",
                            {
                              staticClass: "col row items-center",
                              staticStyle: { float: "right" },
                            },
                            [
                              a(
                                "label",
                                {
                                  staticClass: "text-right",
                                  staticStyle: { color: "#1E90FF" },
                                  on: {
                                    click: function (e) {
                                      return t.CountRule("timeLong");
                                    },
                                  },
                                },
                                [t._v("计算规则>")],
                              ),
                            ],
                          ),
                        ]),
                        a("div", { staticStyle: { height: "260px" }, attrs: { id: "main5" } }),
                        a(
                          "div",
                          { staticClass: "text-center", staticStyle: { height: "35%" } },
                          t._l(t.LeaveTimeLongStudent, function (e) {
                            return a("div", { key: e.name, staticClass: "row" }, [
                              a("div", { staticClass: "col" }),
                              a("div", { staticClass: "row q-mt-sm col-7 justify-bewteen" }, [
                                a("div", { staticClass: "col-9 row items-center" }, [
                                  a("span", {
                                    directives: [
                                      {
                                        name: "show",
                                        rawName: "v-show",
                                        value: 0 !== e.itemStyle.color.length,
                                        expression: "item.itemStyle.color.length !== 0",
                                      },
                                    ],
                                    staticClass: "q-mx-sm",
                                    staticStyle: {
                                      float: "left",
                                      width: "10px",
                                      height: "10px",
                                      "border-radius": "50px",
                                    },
                                    style: { background: e.itemStyle.color },
                                  }),
                                  a("span", { staticClass: "text-grey" }, [
                                    t._v(t._s(e.name) + "："),
                                  ]),
                                ]),
                                a("div", { staticClass: "col text-grey" }, [
                                  a("label", { staticStyle: { float: "right" } }, [
                                    t._v(t._s(e.value)),
                                  ]),
                                ]),
                              ]),
                              a("div", { staticClass: "col" }),
                            ]);
                          }),
                          0,
                        ),
                      ],
                    ),
                    a("hr", {
                      directives: [
                        {
                          name: "show",
                          rawName: "v-show",
                          value: "detailed" == t.leaveTab,
                          expression: "leaveTab == 'detailed'",
                        },
                      ],
                    }),
                    a(
                      "div",
                      {
                        directives: [
                          {
                            name: "show",
                            rawName: "v-show",
                            value: "detailed" == t.leaveTab,
                            expression: "leaveTab == 'detailed'",
                          },
                        ],
                        staticClass: "text-center q-my-md",
                      },
                      [
                        a("div", { staticClass: "row" }, [
                          a("div", { staticClass: "col" }),
                          a("div", { staticClass: "col-6" }, [
                            a(
                              "label",
                              {
                                staticStyle: {
                                  "font-size": "16px",
                                  color: "#454c5c",
                                  "font-weight": "700",
                                  "margin-top": "10px",
                                },
                              },
                              [t._v("按类型统计请假次数")],
                            ),
                          ]),
                          a("div", {
                            staticClass: "col row items-center",
                            staticStyle: { float: "right" },
                          }),
                        ]),
                        a("div", { staticStyle: { height: "260px" }, attrs: { id: "main3" } }),
                        a(
                          "div",
                          { staticClass: "text-center", staticStyle: { height: "35%" } },
                          t._l(t.LeaveTypeStudent, function (e) {
                            return a("div", { key: e.name, staticClass: "row" }, [
                              a("div", { staticClass: "col" }),
                              a("div", { staticClass: "row q-mt-sm col-7 justify-bewteen" }, [
                                a("div", { staticClass: "col-9 row items-center" }, [
                                  a("span", {
                                    directives: [
                                      {
                                        name: "show",
                                        rawName: "v-show",
                                        value: 0 !== e.itemStyle.color.length,
                                        expression: "item.itemStyle.color.length !== 0",
                                      },
                                    ],
                                    staticClass: "q-mx-sm",
                                    staticStyle: {
                                      float: "left",
                                      width: "10px",
                                      height: "10px",
                                      "border-radius": "50px",
                                    },
                                    style: { background: e.itemStyle.color },
                                  }),
                                  a("span", { staticClass: "text-grey" }, [
                                    t._v(t._s(e.name) + "："),
                                  ]),
                                ]),
                                a("div", { staticClass: "col text-grey" }, [
                                  a("label", { staticStyle: { float: "right" } }, [
                                    t._v(t._s(e.value)),
                                  ]),
                                ]),
                              ]),
                              a("div", { staticClass: "col" }),
                            ]);
                          }),
                          0,
                        ),
                      ],
                    ),
                    a("hr", {
                      directives: [
                        {
                          name: "show",
                          rawName: "v-show",
                          value: "detailed" == t.leaveTab,
                          expression: "leaveTab == 'detailed'",
                        },
                      ],
                    }),
                    a(
                      "div",
                      {
                        directives: [
                          {
                            name: "show",
                            rawName: "v-show",
                            value: "detailed" == t.leaveTab,
                            expression: "leaveTab == 'detailed'",
                          },
                        ],
                        staticClass: "text-center q-my-md",
                      },
                      [
                        a("div", { staticClass: "row" }, [
                          a("div", { staticClass: "col" }),
                          a("div", { staticClass: "col-6" }, [
                            a(
                              "label",
                              {
                                staticStyle: {
                                  "font-size": "16px",
                                  color: "#454c5c",
                                  "font-weight": "700",
                                  "margin-top": "10px",
                                },
                              },
                              [t._v("按性别统计请假次数")],
                            ),
                          ]),
                          a("div", {
                            staticClass: "col row items-center",
                            staticStyle: { float: "right" },
                          }),
                        ]),
                        a("div", { staticStyle: { height: "260px" }, attrs: { id: "main8" } }),
                        a(
                          "div",
                          { staticClass: "text-center", staticStyle: { height: "35%" } },
                          t._l(t.LeaveSexStudent, function (e) {
                            return a("div", { key: e.name, staticClass: "row" }, [
                              a("div", { staticClass: "col" }),
                              a("div", { staticClass: "row q-mt-sm col-7 justify-bewteen" }, [
                                a("div", { staticClass: "col-9 row items-center" }, [
                                  a("span", {
                                    directives: [
                                      {
                                        name: "show",
                                        rawName: "v-show",
                                        value: 0 !== e.itemStyle.color.length,
                                        expression: "item.itemStyle.color.length !== 0",
                                      },
                                    ],
                                    staticClass: "q-mx-sm",
                                    staticStyle: {
                                      float: "left",
                                      width: "10px",
                                      height: "10px",
                                      "border-radius": "50px",
                                    },
                                    style: { background: e.itemStyle.color },
                                  }),
                                  a("span", { staticClass: "text-grey" }, [
                                    t._v(t._s(e.name) + "："),
                                  ]),
                                ]),
                                a("div", { staticClass: "col text-grey" }, [
                                  a("label", { staticStyle: { float: "right" } }, [
                                    t._v(t._s(e.value)),
                                  ]),
                                ]),
                              ]),
                              a("div", { staticClass: "col" }),
                            ]);
                          }),
                          0,
                        ),
                      ],
                    ),
                    a("hr", {
                      directives: [
                        {
                          name: "show",
                          rawName: "v-show",
                          value: "detailed" == t.leaveTab,
                          expression: "leaveTab == 'detailed'",
                        },
                      ],
                    }),
                  ],
                  [
                    a(
                      "div",
                      {
                        directives: [
                          {
                            name: "show",
                            rawName: "v-show",
                            value: "generalSituation" == t.leaveTab,
                            expression: "leaveTab == 'generalSituation'",
                          },
                        ],
                        staticClass: "text-center q-my-md",
                      },
                      [
                        a("div", { staticClass: "row" }, [
                          a("div", { staticClass: "col" }),
                          a("div", { staticClass: "col-6" }, [
                            a(
                              "label",
                              {
                                staticStyle: {
                                  "font-size": "16px",
                                  color: "#454c5c",
                                  "font-weight": "700",
                                  "margin-top": "10px",
                                },
                              },
                              [t._v("按年级统计请假信息")],
                            ),
                          ]),
                          a("div", {
                            staticClass: "col row items-center",
                            staticStyle: { float: "right" },
                          }),
                        ]),
                        a("div", { staticStyle: { height: "260px" }, attrs: { id: "main4" } }),
                        a(
                          "div",
                          { staticClass: "text-center", staticStyle: { height: "35%" } },
                          t._l(t.LeaveByGrade, function (e) {
                            return a("div", { key: e.product, staticClass: "row" }, [
                              a("div", { staticClass: "col" }),
                              a("div", { staticClass: "row q-mt-sm col-10 justify-bewteen" }, [
                                a("div", { staticClass: "col-12 row items-center" }, [
                                  a(
                                    "span",
                                    { staticClass: "text-grey", staticStyle: { float: "left" } },
                                    [t._v(t._s(e.product) + ":")],
                                  ),
                                ]),
                                a("div", { staticClass: "col-6 text-grey" }, [
                                  a("label", { staticStyle: { float: "left" } }, [
                                    t._v("请假人数：" + t._s(e.请假人数)),
                                  ]),
                                ]),
                                a("div", { staticClass: "col-6 text-grey" }, [
                                  a("label", { staticStyle: { float: "left" } }, [
                                    t._v("请假次数：" + t._s(e.请假次数)),
                                  ]),
                                ]),
                              ]),
                              a("div", { staticClass: "col" }),
                            ]);
                          }),
                          0,
                        ),
                      ],
                    ),
                    a("hr", {
                      directives: [
                        {
                          name: "show",
                          rawName: "v-show",
                          value: "generalSituation" == t.leaveTab,
                          expression: "leaveTab == 'generalSituation'",
                        },
                      ],
                    }),
                    a(
                      "div",
                      {
                        directives: [
                          {
                            name: "show",
                            rawName: "v-show",
                            value: "generalSituation" == t.leaveTab && "A" === t.viewPermit,
                            expression: "leaveTab == 'generalSituation' && viewPermit === 'A'",
                          },
                        ],
                        staticClass: "text-center q-my-md",
                      },
                      [
                        a("div", { staticClass: "row" }, [
                          a("div", { staticClass: "col" }),
                          a("div", { staticClass: "col-6" }, [
                            a(
                              "label",
                              {
                                staticStyle: {
                                  "font-size": "16px",
                                  color: "#454c5c",
                                  "font-weight": "700",
                                  "margin-top": "10px",
                                },
                              },
                              [t._v("按院系统计请假信息")],
                            ),
                          ]),
                          a("div", {
                            staticClass: "col row items-center",
                            staticStyle: { float: "right" },
                          }),
                        ]),
                        a("div", { staticStyle: { height: "260px" }, attrs: { id: "main6" } }),
                        a(
                          "div",
                          { staticClass: "text-center", staticStyle: { height: "35%" } },
                          t._l(t.LeaveByDep, function (e) {
                            return a("div", { key: e.product, staticClass: "row" }, [
                              a("div", { staticClass: "col" }),
                              a("div", { staticClass: "row q-mt-sm col-10 justify-bewteen" }, [
                                a("div", { staticClass: "col-12 row items-center" }, [
                                  a(
                                    "span",
                                    { staticClass: "text-grey", staticStyle: { float: "left" } },
                                    [t._v(t._s(e.product) + ":")],
                                  ),
                                ]),
                                a("div", { staticClass: "col-6 text-grey" }, [
                                  a("label", { staticStyle: { float: "left" } }, [
                                    t._v("请假人数：" + t._s(e.请假人数)),
                                  ]),
                                ]),
                                a("div", { staticClass: "col-6 text-grey" }, [
                                  a("label", { staticStyle: { float: "left" } }, [
                                    t._v("请假次数：" + t._s(e.请假次数)),
                                  ]),
                                ]),
                              ]),
                              a("div", { staticClass: "col" }),
                            ]);
                          }),
                          0,
                        ),
                      ],
                    ),
                    a("hr", {
                      directives: [
                        {
                          name: "show",
                          rawName: "v-show",
                          value: "generalSituation" == t.leaveTab && "A" === t.viewPermit,
                          expression: "leaveTab == 'generalSituation' && viewPermit === 'A'",
                        },
                      ],
                    }),
                    a(
                      "div",
                      {
                        directives: [
                          {
                            name: "show",
                            rawName: "v-show",
                            value: "generalSituation" == t.leaveTab && "D" === t.viewPermit,
                            expression: "leaveTab == 'generalSituation' && viewPermit === 'D'",
                          },
                        ],
                        staticClass: "text-center q-my-md",
                      },
                      [
                        a("div", { staticClass: "row" }, [
                          a("div", { staticClass: "col" }),
                          a("div", { staticClass: "col-6" }, [
                            a(
                              "label",
                              {
                                staticStyle: {
                                  "font-size": "16px",
                                  color: "#454c5c",
                                  "font-weight": "700",
                                  "margin-top": "10px",
                                },
                              },
                              [t._v("按专业统计请假信息")],
                            ),
                          ]),
                          a("div", {
                            staticClass: "col row items-center",
                            staticStyle: { float: "right" },
                          }),
                        ]),
                        a("div", { staticStyle: { height: "260px" }, attrs: { id: "main10" } }),
                        a(
                          "div",
                          { staticClass: "text-center", staticStyle: { height: "35%" } },
                          t._l(t.LeaveByMajor, function (e) {
                            return a("div", { key: e.product, staticClass: "row" }, [
                              a("div", { staticClass: "col" }),
                              a("div", { staticClass: "row q-mt-sm col-10 justify-bewteen" }, [
                                a("div", { staticClass: "col-12 row items-center" }, [
                                  a(
                                    "span",
                                    { staticClass: "text-grey", staticStyle: { float: "left" } },
                                    [t._v(t._s(e.product) + ":")],
                                  ),
                                ]),
                                a("div", { staticClass: "col-6 text-grey" }, [
                                  a("label", { staticStyle: { float: "left" } }, [
                                    t._v("请假人数：" + t._s(e.请假人数)),
                                  ]),
                                ]),
                                a("div", { staticClass: "col-6 text-grey" }, [
                                  a("label", { staticStyle: { float: "left" } }, [
                                    t._v("请假次数：" + t._s(e.请假次数)),
                                  ]),
                                ]),
                              ]),
                              a("div", { staticClass: "col" }),
                            ]);
                          }),
                          0,
                        ),
                      ],
                    ),
                    a("hr", {
                      directives: [
                        {
                          name: "show",
                          rawName: "v-show",
                          value: "generalSituation" == t.leaveTab && "D" === t.viewPermit,
                          expression: "leaveTab == 'generalSituation' && viewPermit === 'D'",
                        },
                      ],
                    }),
                    a(
                      "div",
                      {
                        directives: [
                          {
                            name: "show",
                            rawName: "v-show",
                            value: "generalSituation" == t.leaveTab && "S" === t.viewPermit,
                            expression: "leaveTab == 'generalSituation' && viewPermit === 'S'",
                          },
                        ],
                        staticClass: "text-center q-my-md",
                      },
                      [
                        a("div", { staticClass: "row" }, [
                          a("div", { staticClass: "col" }),
                          a("div", { staticClass: "col-6" }, [
                            a(
                              "label",
                              {
                                staticStyle: {
                                  "font-size": "16px",
                                  color: "#454c5c",
                                  "font-weight": "700",
                                  "margin-top": "10px",
                                },
                              },
                              [t._v("按班级统计请假信息")],
                            ),
                          ]),
                          a("div", {
                            staticClass: "col row items-center",
                            staticStyle: { float: "right" },
                          }),
                        ]),
                        a("div", { staticStyle: { height: "260px" }, attrs: { id: "main11" } }),
                        a(
                          "div",
                          { staticClass: "text-center", staticStyle: { height: "35%" } },
                          t._l(t.LeaveByClass, function (e) {
                            return a("div", { key: e.product, staticClass: "row" }, [
                              a("div", { staticClass: "col" }),
                              a("div", { staticClass: "row q-mt-sm col-10 justify-bewteen" }, [
                                a("div", { staticClass: "col-12 row items-center" }, [
                                  a(
                                    "span",
                                    { staticClass: "text-grey", staticStyle: { float: "left" } },
                                    [t._v(t._s(e.product) + ":")],
                                  ),
                                ]),
                                a("div", { staticClass: "col-6 text-grey" }, [
                                  a("label", { staticStyle: { float: "left" } }, [
                                    t._v("请假人数：" + t._s(e.请假人数)),
                                  ]),
                                ]),
                                a("div", { staticClass: "col-6 text-grey" }, [
                                  a("label", { staticStyle: { float: "left" } }, [
                                    t._v("请假次数：" + t._s(e.请假次数)),
                                  ]),
                                ]),
                              ]),
                              a("div", { staticClass: "col" }),
                            ]);
                          }),
                          0,
                        ),
                      ],
                    ),
                    a("hr", {
                      directives: [
                        {
                          name: "show",
                          rawName: "v-show",
                          value: "generalSituation" == t.leaveTab && "S" === t.viewPermit,
                          expression: "leaveTab == 'generalSituation' && viewPermit === 'S'",
                        },
                      ],
                    }),
                  ],
                ],
                2,
              ),
              a(
                "q-dialog",
                {
                  attrs: { countRuleShow: "" },
                  model: {
                    value: t.countRuleShow,
                    callback: function (e) {
                      t.countRuleShow = e;
                    },
                    expression: "countRuleShow",
                  },
                },
                [
                  a(
                    "q-card",
                    { staticStyle: { "border-radius": "25px" } },
                    [
                      a(
                        "q-item",
                        [
                          a(
                            "q-item-section",
                            { staticClass: "flex flex-center" },
                            [
                              a("q-item-label", { staticClass: "text-weight-bold" }, [
                                t._v(t._s(t.ruleTitle)),
                              ]),
                            ],
                            1,
                          ),
                        ],
                        1,
                      ),
                      a(
                        "q-item",
                        { staticClass: "q-my-sm", attrs: { dense: "" } },
                        [a("q-item-section", [a("q-item-label", [t._v(t._s(t.ruleMessage))])], 1)],
                        1,
                      ),
                      a("q-separator"),
                      a(
                        "q-card-actions",
                        { attrs: { align: "around" } },
                        [
                          a(
                            "q-btn",
                            {
                              directives: [{ name: "close-popup", rawName: "v-close-popup" }],
                              attrs: { flat: "", color: "primary" },
                            },
                            [t._v("知道了")],
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
                "q-dialog",
                {
                  attrs: { persistent: "", fullWidth: "", maximized: t.maximizedToggle },
                  model: {
                    value: t.taskTargetDialog,
                    callback: function (e) {
                      t.taskTargetDialog = e;
                    },
                    expression: "taskTargetDialog",
                  },
                },
                [
                  a(
                    "q-layout",
                    { staticClass: "bg-white", attrs: { view: "lHh lpr lFf", container: "" } },
                    [
                      a(
                        "q-header",
                        { staticClass: "full-width bg-white" },
                        [
                          a("q-toolbar", [
                            a(
                              "div",
                              {
                                staticClass:
                                  "full-width row items-center justify-between q-px-xs q-py-sm",
                              },
                              [
                                a("div", { staticClass: "text-bold text-black" }, [
                                  t._v("设置统计对象"),
                                ]),
                                a("q-btn", {
                                  attrs: { unelevated: "", color: "primary", label: "完成" },
                                  on: {
                                    click: function (e) {
                                      t.taskTargetDialog = !1;
                                    },
                                  },
                                }),
                              ],
                              1,
                            ),
                          ]),
                        ],
                        1,
                      ),
                      a(
                        "q-page-container",
                        [
                          a(
                            "q-page",
                            [
                              a("neu-assign-student", {
                                attrs: {
                                  permit: t.menuInfo ? t.menuInfo.view_permit : null,
                                  "permit-mode": "V",
                                  "menu-id": t.menuInfo ? t.menuInfo.id : null,
                                },
                                model: {
                                  value: t.task_target,
                                  callback: function (e) {
                                    t.task_target = e;
                                  },
                                  expression: "task_target",
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
        o = [],
        r = (a("13d5"), a("313e"));
      const c = [
        "#2585a6",
        "#65c294",
        "#fdb933",
        "#f15a22",
        "#33a3dc",
        "#90d7ec",
        "#dea32c",
        "#1d953f",
        "#cd9a5b",
        "#6950a1",
        "#abc88b",
        "#bed742",
        "#fab27b",
        "#f391a9",
        "#f8aba6",
        "#f47920",
        "#8a2e3b",
        "#918597",
        "#5c7a29",
        "#2a5caa",
      ];
      var d = {
          name: "LeaveAnalysis",
          components: { NeuAssignStudent: n["a"] },
          data() {
            return {
              viewPermit: "",
              leaveTab: "realTime",
              AllLeaveStudentNum: [],
              WalkOutLeaveStudent: [],
              LeaveTypeStudent: [],
              LeaveTimeLongStudent: [],
              LeaveAllowPassStudent: [],
              LeaveSexStudent: [],
              LeaveByGrade: [],
              LeaveByDep: [],
              LeaveByMajor: [],
              LeaveByClass: [],
              leaveNum: 0,
              allPersonNum: 0,
              passLeaveNum: 0,
              allLeaveNum: 0,
              workLeaveNum: 0,
              countRuleShow: !1,
              ruleTitle: "",
              ruleMessage: "",
              chooseTime: !1,
              begin_time: "",
              end_time: "",
              task_target: [],
              taskTargetDialog: !1,
              maximizedToggle: !0,
              menuInfo: null,
              begin_date: "",
              end_date: "",
              selection: [],
              leave_type_id: "",
              leaveTypeList: [],
              showExp: !1,
              showPic: 0,
            };
          },
          computed: {},
          mounted() {
            (window.localStorage.getItem("menu") &&
              ((this.menuInfo = JSON.parse(window.localStorage.getItem("menu")).find(
                (t) => "analysis" === t.id,
              )),
              (this.viewPermit = this.menuInfo.view_permit)),
              this.getWeekDate(),
              this.getLeaveType());
          },
          methods: {
            getWeekDate() {
              this.$axiosAction("/api/public.api", { action: "queryDefaultStatPeriod" }).then(
                (t) => {
                  0 === t.data.code &&
                    ((this.begin_time = t.data.begin_date),
                    (this.end_time = t.data.end_date),
                    (this.begin_date = t.data.begin_date),
                    (this.end_date = t.data.end_date));
                },
              );
            },
            getLeaveType() {
              this.$axiosAction("/api/teacher/analysis/analysis.api", {
                action: "getLeaveType",
              }).then((t) => {
                0 === t.data.code &&
                  ((this.leaveTypeList = t.data.list),
                  (this.selection = this.leaveTypeList.reduce((t, e) => t.concat(e.value), [])));
              });
            },
            checkTime() {
              0 === this.begin_time.length &&
              0 === this.end_time.length &&
              0 === this.task_target.length
                ? ((this.showPic = 0),
                  this.$q.notify({
                    color: "red-5",
                    textColor: "white",
                    icon: "warning",
                    message: "请选择统计时间与统计学生！",
                  }))
                : 0 === this.begin_time.length || 0 === this.end_time.length
                  ? ((this.showPic = 0),
                    this.$q.notify({
                      color: "red-5",
                      textColor: "white",
                      icon: "warning",
                      message: "请选择统计时间！",
                    }))
                  : 0 === this.task_target.length
                    ? ((this.showPic = 0),
                      this.$q.notify({
                        color: "red-5",
                        textColor: "white",
                        icon: "warning",
                        message: "请选择统计学生！",
                      }))
                    : this.$axiosAction("/api/teacher/analysis/analysis.api", {
                        action: "checkTime",
                        begin_time: this.begin_time,
                        end_time: this.end_time,
                      }).then((t) => {
                        0 === t.data.code
                          ? ((this.showPic = 1),
                            (this.begin_date = this.begin_time),
                            (this.end_date = this.end_time),
                            this.chooseReal(),
                            this.$q.loading.show(),
                            (this.showExp = !1))
                          : ((this.showPic = 0), (this.begin_date = ""), (this.end_date = ""));
                      });
            },
            showTimeChoose(t) {
              this.chooseTime = !t;
            },
            CountRule(t) {
              ("leave" === t
                ? ((this.ruleTitle = "请假率"),
                  (this.ruleMessage = "请假率计算规则：（请假人数/总人数）"))
                : "walkout" === t
                  ? ((this.ruleTitle = "离校率"),
                    (this.ruleMessage = "离校率计算规则：（离校请假次数/总请假次数）"))
                  : "pass" === t
                    ? ((this.ruleTitle = "补请假率"),
                      (this.ruleMessage = "补假率计算规则：（补假次数/总请假次数）"))
                    : "timeLong" === t &&
                      ((this.ruleTitle = "时长规则"),
                      (this.ruleMessage =
                        "一天内及一天：小于等于24小时; 一天至三天：大于24小时，小于等于72小时; 一天至三天：大于72小时")),
                (this.countRuleShow = !0));
            },
            chooseReal() {
              (0 === this.selection.length
                ? (this.leave_type_id = "")
                : (this.leave_type_id = this.selection),
                "realTime" === this.leaveTab
                  ? (this.getAllLeaveStudentNum(),
                    this.getWalkOutLeaveStudent(),
                    this.getLeaveAllowPassStudent())
                  : "detailed" === this.leaveTab
                    ? (this.getLeaveTimeLongStudent(),
                      this.getLeaveTypeStudent(),
                      this.getLeaveSexStudent())
                    : (this.getLeaveInfoByGrade(),
                      this.getLeaveInfoByDep(),
                      this.getLeaveInfoByMajor(),
                      this.getLeaveInfoByClass()));
            },
            getAllLeaveStudentNum() {
              (0 !== this.begin_date.length &&
                0 !== this.end_date.length &&
                0 !== this.task_target.length &&
                this.$axiosAction("/api/teacher/analysis/analysis.api", {
                  action: "getAllLeaveStudentNum",
                  task_target: JSON.stringify(this.task_target),
                  begin_time: this.begin_date,
                  end_time: this.end_date,
                  leave_type_id: this.leave_type_id,
                }).then((t) => {
                  if (0 === t.data.code) {
                    this.nowType = t.data.nowType;
                    const e = [];
                    for (let i = 0; i < t.data.list.length; i++)
                      ("请假人数" === t.data.list[i].name
                        ? ((this.leaveNum = t.data.list[i].value), e.push(t.data.list[i]))
                        : "未请假人数" === t.data.list[i].name
                          ? e.push(t.data.list[i])
                          : "总人数" === t.data.list[i].name &&
                            (this.allPersonNum = t.data.list[i].value),
                        0 === t.data.nowType
                          ? "休假中人数" !== t.data.list[i].name &&
                            this.AllLeaveStudentNum.push(t.data.list[i])
                          : this.AllLeaveStudentNum.push(t.data.list[i]));
                    const a = this.Percentage(this.leaveNum, this.allPersonNum) + "%\n请假率";
                    (this.ringPic("main", e, a), this.$q.loading.hide());
                  }
                }),
                (this.AllLeaveStudentNum = []));
            },
            getWalkOutLeaveStudent() {
              (0 !== this.begin_date.length &&
                0 !== this.end_date.length &&
                0 !== this.task_target.length &&
                this.$axiosAction("/api/teacher/analysis/analysis.api", {
                  action: "getWalkOutLeaveStudent",
                  task_target: JSON.stringify(this.task_target),
                  begin_time: this.begin_date,
                  end_time: this.end_date,
                  leave_type_id: this.leave_type_id,
                }).then((t) => {
                  if (0 === t.data.code) {
                    const e = [];
                    for (let i = 0; i < t.data.list.length; i++)
                      ("总请假次数" !== t.data.list[i].name
                        ? e.push(t.data.list[i])
                        : (this.allLeaveNum = t.data.list[i].value),
                        "离校请假" === t.data.list[i].name &&
                          (this.workLeaveNum = t.data.list[i].value),
                        this.WalkOutLeaveStudent.push(t.data.list[i]));
                    const a = this.Percentage(this.workLeaveNum, this.allLeaveNum) + "%\n离校率";
                    this.ringPic("main2", e, a);
                  }
                }),
                (this.WalkOutLeaveStudent = []));
            },
            getLeaveTypeStudent() {
              (0 !== this.begin_date.length &&
                0 !== this.end_date.length &&
                0 !== this.task_target.length &&
                this.$axiosAction("/api/teacher/analysis/analysis.api", {
                  action: "getLeaveTypeStudent",
                  task_target: JSON.stringify(this.task_target),
                  begin_time: this.begin_date,
                  end_time: this.end_date,
                  leave_type_id: this.leave_type_id,
                }).then((t) => {
                  if (0 === t.data.code) {
                    const e = [];
                    for (let a = 0; a < t.data.list.length; a++)
                      ("总请假次数" !== t.data.list[a].name
                        ? ((t.data.list[a].itemStyle = { color: c[a % c.length] }),
                          e.push(t.data.list[a]))
                        : (t.data.list[a].itemStyle = { color: "white" }),
                        this.LeaveTypeStudent.push(t.data.list[a]));
                    (this.cakePic("main3", e), this.$q.loading.hide());
                  }
                }),
                (this.LeaveTypeStudent = []));
            },
            getLeaveTimeLongStudent() {
              (0 !== this.begin_date.length &&
                0 !== this.end_date.length &&
                0 !== this.task_target.length &&
                this.$axiosAction("/api/teacher/analysis/analysis.api", {
                  action: "getLeaveTimeLongStudent",
                  task_target: JSON.stringify(this.task_target),
                  begin_time: this.begin_date,
                  end_time: this.end_date,
                  leave_type_id: this.leave_type_id,
                }).then((t) => {
                  if (0 === t.data.code) {
                    const e = [];
                    for (let a = 0; a < t.data.list.length; a++)
                      ("总请假次数" !== t.data.list[a].name && e.push(t.data.list[a]),
                        this.LeaveTimeLongStudent.push(t.data.list[a]));
                    this.cakePic("main5", e);
                  }
                }),
                (this.LeaveTimeLongStudent = []));
            },
            getLeaveAllowPassStudent() {
              (0 !== this.begin_date.length &&
                0 !== this.end_date.length &&
                0 !== this.task_target.length &&
                this.$axiosAction("/api/teacher/analysis/analysis.api", {
                  action: "getLeaveAllowPassStudent",
                  task_target: JSON.stringify(this.task_target),
                  begin_time: this.begin_date,
                  end_time: this.end_date,
                  leave_type_id: this.leave_type_id,
                }).then((t) => {
                  if (0 === t.data.code) {
                    const e = [];
                    for (let i = 0; i < t.data.list.length; i++)
                      ("总请假次数" !== t.data.list[i].name
                        ? e.push(t.data.list[i])
                        : (this.allLeaveNum = t.data.list[i].value),
                        "补请假" === t.data.list[i].name &&
                          (this.passLeaveNum = t.data.list[i].value),
                        this.LeaveAllowPassStudent.push(t.data.list[i]));
                    const a = this.Percentage(this.passLeaveNum, this.allLeaveNum) + "%\n补假率";
                    this.ringPic("main7", e, a);
                  }
                }),
                (this.LeaveAllowPassStudent = []),
                (this.allLeaveNum = 0));
            },
            getLeaveSexStudent() {
              (0 !== this.begin_date.length &&
                0 !== this.end_date.length &&
                0 !== this.task_target.length &&
                this.$axiosAction("/api/teacher/analysis/analysis.api", {
                  action: "getLeaveSexStudent",
                  task_target: JSON.stringify(this.task_target),
                  begin_time: this.begin_date,
                  end_time: this.end_date,
                  leave_type_id: this.leave_type_id,
                }).then((t) => {
                  if (0 === t.data.code) {
                    const e = [];
                    for (let a = 0; a < t.data.list.length; a++)
                      ("总请假次数" !== t.data.list[a].name
                        ? ((t.data.list[a].itemStyle = { color: c[a % c.length] }),
                          e.push(t.data.list[a]))
                        : (t.data.list[a].itemStyle = { color: "white" }),
                        this.LeaveSexStudent.push(t.data.list[a]));
                    this.cakePic("main8", e);
                  }
                }),
                (this.LeaveSexStudent = []));
            },
            getLeaveInfoByGrade() {
              0 !== this.begin_date.length &&
                0 !== this.end_date.length &&
                0 !== this.task_target.length &&
                this.$axiosAction("/api/teacher/analysis/analysis.api", {
                  action: "getLeaveInfoByGrade",
                  task_target: JSON.stringify(this.task_target),
                  begin_time: this.begin_date,
                  end_time: this.end_date,
                  leave_type_id: this.leave_type_id,
                }).then((t) => {
                  if (0 === t.data.code) {
                    const e = ["product", "请假人数", "请假次数"];
                    ((this.LeaveByGrade = t.data.list),
                      this.columnPic("main4", e, t.data.list),
                      this.$q.loading.hide());
                  }
                });
            },
            getLeaveInfoByDep() {
              0 !== this.begin_date.length &&
                0 !== this.end_date.length &&
                0 !== this.task_target.length &&
                this.$axiosAction("/api/teacher/analysis/analysis.api", {
                  action: "getLeaveInfoByDep",
                  task_target: JSON.stringify(this.task_target),
                  begin_time: this.begin_date,
                  end_time: this.end_date,
                  leave_type_id: this.leave_type_id,
                }).then((t) => {
                  if (0 === t.data.code) {
                    const e = ["product", "请假人数", "请假次数"];
                    ((this.LeaveByDep = t.data.list), this.columnPic("main6", e, t.data.list));
                  }
                });
            },
            getLeaveInfoByMajor() {
              0 !== this.begin_date.length &&
                0 !== this.end_date.length &&
                0 !== this.task_target.length &&
                this.$axiosAction("/api/teacher/analysis/analysis.api", {
                  action: "getLeaveInfoByMajor",
                  task_target: JSON.stringify(this.task_target),
                  begin_time: this.begin_date,
                  end_time: this.end_date,
                  leave_type_id: this.leave_type_id,
                }).then((t) => {
                  if (0 === t.data.code) {
                    const e = ["product", "请假人数", "请假次数"];
                    ((this.LeaveByMajor = t.data.list), this.columnPic("main10", e, t.data.list));
                  }
                });
            },
            getLeaveInfoByClass() {
              0 !== this.begin_date.length &&
                0 !== this.end_date.length &&
                0 !== this.task_target.length &&
                this.$axiosAction("/api/teacher/analysis/analysis.api", {
                  action: "getLeaveInfoByClass",
                  task_target: JSON.stringify(this.task_target),
                  begin_time: this.begin_date,
                  end_time: this.end_date,
                  leave_type_id: this.leave_type_id,
                }).then((t) => {
                  if (0 === t.data.code) {
                    const e = ["product", "请假人数", "请假次数"];
                    ((this.LeaveByClass = t.data.list), this.columnPic("main11", e, t.data.list));
                  }
                });
            },
            Percentage(t, e) {
              return 0 === t || 0 === e ? 0 : Math.round((t / e) * 1e4) / 100;
            },
            cakePic(t, e) {
              const a = document.getElementById(t),
                i = r["a"](a);
              var s = {};
              ((s = {
                tooltip: { trigger: "item" },
                legend: { show: !1 },
                series: [
                  {
                    type: "pie",
                    radius: "70%",
                    emphasis: {
                      itemStyle: {
                        shadowBlur: 10,
                        shadowOffsetX: 0,
                        shadowColor: "rgba(0, 0, 0, 0.5)",
                      },
                    },
                    label: { show: !1 },
                    data: e,
                  },
                ],
              }),
                s && i.setOption(s));
            },
            ringPic(t, e, a) {
              const i = document.getElementById(t),
                s = r["a"](i);
              var n = {};
              ((n = {
                tooltip: { trigger: "item", formatter: "{b}:{c}<br>{d}%" },
                legend: { show: !1 },
                series: [
                  {
                    type: "pie",
                    radius: ["40%", "70%"],
                    avoidLabelOverlap: !1,
                    label: {
                      show: !0,
                      position: "center",
                      formatter: function () {
                        return a;
                      },
                      textStyle: { fontSize: 20, fontWeight: "bold" },
                    },
                    labelLine: { show: !1 },
                    data: e,
                  },
                ],
              }),
                n && s.setOption(n));
            },
            columnPic(t, e, a) {
              const i = document.getElementById(t),
                s = r["a"](i);
              var n = {};
              ((n = {
                legend: {},
                tooltip: {},
                dataset: { dimensions: e, source: a },
                xAxis: { axisLabel: { show: !0, interval: "auto" } },
                grid: { left: "3%", right: "4%", bottom: "3%", containLabel: !0 },
                yAxis: { type: "category" },
                series: [{ type: "bar" }, { type: "bar" }],
              }),
                n && s.setOption(n, !0));
            },
          },
        },
        m = d,
        h = a("2877"),
        u = a("f09f"),
        p = a("3b73"),
        g = a("1c1c"),
        v = a("66e5"),
        w = a("4074"),
        _ = a("8572"),
        y = a("0016"),
        b = a("7cbe"),
        f = a("52ee"),
        x = a("9c40"),
        C = a("eb85"),
        q = a("0170"),
        S = a("8f8e"),
        k = a("429b"),
        T = a("7460"),
        N = a("24e8"),
        P = a("4b7e"),
        I = a("4d5a"),
        L = a("e359"),
        R = a("65c6"),
        D = a("09e3"),
        A = a("9989"),
        Q = a("7f67"),
        z = a("eebe"),
        j = a.n(z),
        $ = Object(h["a"])(m, l, o, !1, null, null, null),
        E = $.exports;
      (j()($, "components", {
        QCard: u["a"],
        QExpansionItem: p["a"],
        QList: g["a"],
        QItem: v["a"],
        QItemSection: w["a"],
        QField: _["a"],
        QIcon: y["a"],
        QPopupProxy: b["a"],
        QDate: f["a"],
        QBtn: x["a"],
        QSeparator: C["a"],
        QItemLabel: q["a"],
        QCheckbox: S["a"],
        QTabs: k["a"],
        QTab: T["a"],
        QDialog: N["a"],
        QCardActions: P["a"],
        QLayout: I["a"],
        QHeader: L["a"],
        QToolbar: R["a"],
        QPageContainer: D["a"],
        QPage: A["a"],
      }),
        j()($, "directives", { ClosePopup: Q["a"] }));
      var M = function () {
          var t = this,
            e = t.$createElement,
            a = t._self._c || e;
          return a(
            "q-card",
            { staticClass: "bg-white q-mb-sm q-mx-sm", attrs: { flat: "" } },
            [
              a(
                "q-expansion-item",
                {
                  attrs: {
                    "switch-toggle-side": "",
                    "expand-separator": "",
                    icon: "search",
                    label: "检索",
                  },
                  model: {
                    value: t.showExp,
                    callback: function (e) {
                      t.showExp = e;
                    },
                    expression: "showExp",
                  },
                },
                [
                  a(
                    "q-card",
                    [
                      a(
                        "q-list",
                        { staticClass: "full-width" },
                        [
                          a(
                            "q-item",
                            [
                              a("q-item-section", { attrs: { avatar: "" } }, [
                                a("div", { staticClass: "neu-css-before-red-asterisk" }, [
                                  t._v("\n              开始时间\n            "),
                                ]),
                              ]),
                              a("q-item-section"),
                              a(
                                "q-item-section",
                                { attrs: { side: "" } },
                                [
                                  a("q-field", {
                                    staticStyle: { width: "200px" },
                                    attrs: {
                                      outlined: "",
                                      dense: "",
                                      "stack-label": "",
                                      "hide-bottom-space": "",
                                      "lazy-rules": "",
                                      value: t.begin_time,
                                    },
                                    scopedSlots: t._u([
                                      {
                                        key: "control",
                                        fn: function () {
                                          return [t._v(t._s(t.begin_time))];
                                        },
                                        proxy: !0,
                                      },
                                      {
                                        key: "append",
                                        fn: function () {
                                          return [
                                            a(
                                              "q-icon",
                                              {
                                                staticClass: "cursor-pointer",
                                                attrs: { name: "event" },
                                              },
                                              [
                                                a(
                                                  "q-popup-proxy",
                                                  {
                                                    attrs: {
                                                      "transition-show": "scale",
                                                      "transition-hide": "scale",
                                                    },
                                                  },
                                                  [
                                                    a(
                                                      "div",
                                                      [
                                                        a(
                                                          "q-date",
                                                          {
                                                            attrs: {
                                                              flat: "",
                                                              minimal: "",
                                                              mask: "YYYY-MM-DD",
                                                            },
                                                            model: {
                                                              value: t.begin_time,
                                                              callback: function (e) {
                                                                t.begin_time = e;
                                                              },
                                                              expression: "begin_time",
                                                            },
                                                          },
                                                          [
                                                            a(
                                                              "div",
                                                              {
                                                                staticClass:
                                                                  "row items-center justify-end",
                                                              },
                                                              [
                                                                a("q-btn", {
                                                                  directives: [
                                                                    {
                                                                      name: "close-popup",
                                                                      rawName: "v-close-popup",
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
                                    ]),
                                  }),
                                ],
                                1,
                              ),
                            ],
                            1,
                          ),
                          a("q-separator"),
                          a(
                            "q-item",
                            [
                              a("q-item-section", { attrs: { avatar: "" } }, [
                                a("div", { staticClass: "neu-css-before-red-asterisk" }, [
                                  t._v("\n              结束时间\n            "),
                                ]),
                              ]),
                              a("q-item-section"),
                              a(
                                "q-item-section",
                                { attrs: { side: "" } },
                                [
                                  a("q-field", {
                                    staticStyle: { width: "200px" },
                                    attrs: {
                                      outlined: "",
                                      dense: "",
                                      "stack-label": "",
                                      "hide-bottom-space": "",
                                      "lazy-rules": "",
                                      rules: [
                                        function (e) {
                                          return e >= t.begin_time || "截止时间应在开始时间之后";
                                        },
                                      ],
                                      value: t.end_time,
                                    },
                                    scopedSlots: t._u([
                                      {
                                        key: "control",
                                        fn: function () {
                                          return [t._v(t._s(t.end_time))];
                                        },
                                        proxy: !0,
                                      },
                                      {
                                        key: "append",
                                        fn: function () {
                                          return [
                                            a(
                                              "q-icon",
                                              {
                                                staticClass: "cursor-pointer",
                                                attrs: { name: "event" },
                                              },
                                              [
                                                a(
                                                  "q-popup-proxy",
                                                  {
                                                    attrs: {
                                                      "transition-show": "scale",
                                                      "transition-hide": "scale",
                                                    },
                                                  },
                                                  [
                                                    a(
                                                      "div",
                                                      [
                                                        a(
                                                          "q-date",
                                                          {
                                                            attrs: {
                                                              flat: "",
                                                              minimal: "",
                                                              mask: "YYYY-MM-DD",
                                                            },
                                                            model: {
                                                              value: t.end_time,
                                                              callback: function (e) {
                                                                t.end_time = e;
                                                              },
                                                              expression: "end_time",
                                                            },
                                                          },
                                                          [
                                                            a(
                                                              "div",
                                                              {
                                                                staticClass:
                                                                  "row items-center justify-end",
                                                              },
                                                              [
                                                                a("q-btn", {
                                                                  directives: [
                                                                    {
                                                                      name: "close-popup",
                                                                      rawName: "v-close-popup",
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
                                    ]),
                                  }),
                                ],
                                1,
                              ),
                            ],
                            1,
                          ),
                          a("q-separator"),
                          a(
                            "q-item",
                            [
                              a("q-item-section", { attrs: { avatar: "" } }, [
                                a("div", { staticClass: "neu-css-before-red-asterisk" }, [
                                  t._v("\n              统计对象\n            "),
                                ]),
                              ]),
                              a("q-item-section"),
                              a(
                                "q-item-section",
                                { attrs: { side: "" } },
                                [
                                  a(
                                    "q-item-label",
                                    { staticClass: "row items-center" },
                                    [
                                      a(
                                        "span",
                                        {
                                          directives: [
                                            {
                                              name: "show",
                                              rawName: "v-show",
                                              value: !t.task_target || 0 == t.task_target.length,
                                              expression:
                                                "!task_target || task_target.length == 0 ",
                                            },
                                          ],
                                          staticClass: "text-grey",
                                          on: {
                                            click: function (e) {
                                              t.taskTargetDialog = !0;
                                            },
                                          },
                                        },
                                        [t._v("选择")],
                                      ),
                                      a("q-icon", {
                                        directives: [
                                          {
                                            name: "show",
                                            rawName: "v-show",
                                            value: !t.task_target || 0 == t.task_target.length,
                                            expression: "!task_target || task_target.length == 0 ",
                                          },
                                        ],
                                        staticClass: "text-grey",
                                        attrs: { name: "keyboard_arrow_right", size: "sm" },
                                      }),
                                      a(
                                        "span",
                                        {
                                          directives: [
                                            {
                                              name: "show",
                                              rawName: "v-show",
                                              value: t.task_target && 0 != t.task_target.length,
                                              expression: "task_target && task_target.length != 0 ",
                                            },
                                          ],
                                          staticClass: "text-primary",
                                          on: {
                                            click: function (e) {
                                              t.taskTargetDialog = !0;
                                            },
                                          },
                                        },
                                        [t._v("已选择 (" + t._s(t.task_target.length) + ")")],
                                      ),
                                      a("q-icon", {
                                        directives: [
                                          {
                                            name: "show",
                                            rawName: "v-show",
                                            value: t.task_target && 0 != t.task_target.length,
                                            expression: "task_target && task_target.length != 0 ",
                                          },
                                        ],
                                        staticClass: "text-primary",
                                        attrs: { name: "keyboard_arrow_right", size: "sm" },
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
                          a("q-separator"),
                          a(
                            "q-item",
                            [
                              a("q-item-section", { attrs: { avatar: "" } }, [
                                t._v("\n            通知类型\n          "),
                              ]),
                              a("q-item-section", [
                                a(
                                  "div",
                                  { staticClass: "q-gutter-xs" },
                                  t._l(t.getNoitceTypeList, function (e) {
                                    return a("q-checkbox", {
                                      key: e.value,
                                      attrs: { val: e.value, label: e.label },
                                      model: {
                                        value: t.selection,
                                        callback: function (e) {
                                          t.selection = e;
                                        },
                                        expression: "selection",
                                      },
                                    });
                                  }),
                                  1,
                                ),
                              ]),
                            ],
                            1,
                          ),
                          a("q-separator"),
                          a(
                            "q-item",
                            [
                              a(
                                "q-item-section",
                                { staticClass: "text-white", attrs: { avatar: "" } },
                                [t._v("自己发布")],
                              ),
                              a("q-item-section", [
                                a(
                                  "div",
                                  { staticClass: "q-gutter-xs" },
                                  [
                                    a("q-checkbox", {
                                      attrs: {
                                        dense: "",
                                        "keep-color": "",
                                        "false-value": "",
                                        "true-value": t.teacher_no,
                                        label: "仅自己发布的",
                                      },
                                      model: {
                                        value: t.loginName,
                                        callback: function (e) {
                                          t.loginName = e;
                                        },
                                        expression: "loginName",
                                      },
                                    }),
                                  ],
                                  1,
                                ),
                              ]),
                            ],
                            1,
                          ),
                          a("q-separator"),
                          a("q-item", [
                            a(
                              "div",
                              { staticClass: "col text-center" },
                              [
                                a("q-btn", {
                                  staticClass: "q-mx-md",
                                  attrs: { unelevated: "", color: "primary", label: "生成统计图" },
                                  on: { click: t.checkTime },
                                }),
                              ],
                              1,
                            ),
                          ]),
                          a("q-separator"),
                        ],
                        1,
                      ),
                    ],
                    1,
                  ),
                ],
                1,
              ),
              a("q-separator"),
              a(
                "div",
                {
                  directives: [
                    {
                      name: "show",
                      rawName: "v-show",
                      value: 0 === t.showPic,
                      expression: "showPic === 0",
                    },
                  ],
                  staticClass: "q-py-sm text-center text-grey",
                },
                [a("label", [t._v("请选择统计时间和统计学生！")])],
              ),
              a(
                "div",
                {
                  directives: [
                    {
                      name: "show",
                      rawName: "v-show",
                      value: 1 === t.showPic,
                      expression: "showPic === 1",
                    },
                  ],
                },
                [
                  a(
                    "q-tabs",
                    {
                      staticClass: "text-grey",
                      attrs: {
                        dense: "",
                        "active-color": "primary",
                        "indicator-color": "primary",
                        align: "justify",
                        "narrow-indicator": "",
                      },
                      on: { click: t.getAllNum },
                      model: {
                        value: t.noticeTab,
                        callback: function (e) {
                          t.noticeTab = e;
                        },
                        expression: "noticeTab",
                      },
                    },
                    [
                      a("q-tab", { attrs: { name: "realTime", label: "学生数据" } }),
                      a("q-tab", { attrs: { name: "generalSituation", label: "年级数据" } }),
                    ],
                    1,
                  ),
                  a("q-separator"),
                  [
                    a(
                      "div",
                      {
                        directives: [
                          {
                            name: "show",
                            rawName: "v-show",
                            value: "realTime" == t.noticeTab,
                            expression: "noticeTab == 'realTime'",
                          },
                        ],
                        staticClass: "text-center q-my-md",
                      },
                      [
                        a("div", { staticClass: "row" }, [
                          a("div", { staticClass: "col" }),
                          a("div", { staticClass: "col-6" }, [
                            a(
                              "label",
                              {
                                staticStyle: {
                                  "font-size": "16px",
                                  color: "#454c5c",
                                  "font-weight": "700",
                                  "margin-top": "10px",
                                },
                              },
                              [t._v("阅读率")],
                            ),
                          ]),
                          a(
                            "div",
                            {
                              staticClass: "col row items-center",
                              staticStyle: { float: "right" },
                            },
                            [
                              a(
                                "label",
                                {
                                  staticClass: "text-right",
                                  staticStyle: { color: "#1E90FF" },
                                  on: {
                                    click: function (e) {
                                      return t.NoticeRule("read");
                                    },
                                  },
                                },
                                [t._v("计算规则>")],
                              ),
                            ],
                          ),
                        ]),
                        a("div", { staticStyle: { height: "260px" }, attrs: { id: "read" } }),
                        a(
                          "div",
                          { staticClass: "text-center", staticStyle: { height: "35%" } },
                          [
                            t._l(t.readList, function (e) {
                              return a("div", { key: e.name, staticClass: "row" }, [
                                a("div", { staticClass: "col" }),
                                a("div", { staticClass: "row q-mt-sm col-7 justify-bewteen" }, [
                                  a("div", { staticClass: "col-9 row items-center" }, [
                                    a("span", {
                                      directives: [
                                        {
                                          name: "show",
                                          rawName: "v-show",
                                          value: 0 !== e.itemStyle.color.length,
                                          expression: "item.itemStyle.color.length !== 0",
                                        },
                                      ],
                                      staticClass: "q-mx-sm",
                                      staticStyle: {
                                        float: "left",
                                        width: "10px",
                                        height: "10px",
                                        "border-radius": "50px",
                                      },
                                      style: { background: e.itemStyle.color },
                                    }),
                                    a("span", { staticClass: "text-grey" }, [t._v(t._s(e.name))]),
                                  ]),
                                  a("div", { staticClass: "col text-grey" }, [
                                    a("label", { staticStyle: { float: "right" } }, [
                                      t._v(t._s(e.value)),
                                    ]),
                                  ]),
                                ]),
                                a("div", { staticClass: "col" }),
                              ]);
                            }),
                            t._l(t.readTypeList, function (e) {
                              return a("div", { key: e.value, staticClass: "row" }, [
                                a("div", { staticClass: "col-2" }),
                                0 != e.total
                                  ? a("div", { staticClass: "row q-mt-sm col-9 justify-bewteen" }, [
                                      a("div", { staticClass: "col-12 row items-center" }, [
                                        a("span", {
                                          staticClass: "q-mx-sm",
                                          staticStyle: {
                                            float: "left",
                                            width: "10px",
                                            height: "10px",
                                            "border-radius": "50px",
                                          },
                                        }),
                                        a("span", {
                                          staticClass: "text-grey q-mx-sm",
                                          domProps: {
                                            textContent: t._s(e.label + t.readTate + "："),
                                          },
                                        }),
                                        a("label", {
                                          staticClass: "text-grey q-mx-sm",
                                          staticStyle: { float: "right" },
                                          domProps: {
                                            textContent: t._s(
                                              Math.round((e.feedbacked / e.total) * 1e4) / 100 +
                                                "%",
                                            ),
                                          },
                                        }),
                                        a("span", { staticClass: "text-grey q-mx-sm" }, [
                                          t._v(
                                            "(" + t._s(e.feedbacked) + " / " + t._s(e.total) + ")",
                                          ),
                                        ]),
                                      ]),
                                    ])
                                  : t._e(),
                                a("div", { staticClass: "col" }),
                              ]);
                            }),
                          ],
                          2,
                        ),
                      ],
                    ),
                    a("hr", {
                      directives: [
                        {
                          name: "show",
                          rawName: "v-show",
                          value: "realTime" == t.noticeTab,
                          expression: "noticeTab == 'realTime'",
                        },
                      ],
                    }),
                    a(
                      "div",
                      {
                        directives: [
                          {
                            name: "show",
                            rawName: "v-show",
                            value: "realTime" == t.noticeTab,
                            expression: "noticeTab == 'realTime'",
                          },
                        ],
                        staticClass: "text-center q-my-md",
                      },
                      [
                        a("div", { staticClass: "row" }, [
                          a("div", { staticClass: "col" }),
                          a("div", { staticClass: "col-6" }, [
                            a(
                              "label",
                              {
                                staticStyle: {
                                  "font-size": "16px",
                                  color: "#454c5c",
                                  "font-weight": "700",
                                  "margin-top": "10px",
                                },
                              },
                              [t._v("确认率")],
                            ),
                          ]),
                          a(
                            "div",
                            {
                              staticClass: "col row items-center",
                              staticStyle: { float: "right" },
                            },
                            [
                              a(
                                "label",
                                {
                                  staticClass: "text-right",
                                  staticStyle: { color: "#1E90FF" },
                                  on: {
                                    click: function (e) {
                                      return t.NoticeRule("confirm");
                                    },
                                  },
                                },
                                [t._v("计算规则>")],
                              ),
                            ],
                          ),
                        ]),
                        a("div", { staticStyle: { height: "260px" }, attrs: { id: "true" } }),
                        a(
                          "div",
                          { staticClass: "text-center", staticStyle: { height: "35%" } },
                          [
                            t._l(t.realList, function (e) {
                              return a("div", { key: e.name, staticClass: "row" }, [
                                a("div", { staticClass: "col" }),
                                a("div", { staticClass: "row q-mt-sm col-7 justify-bewteen" }, [
                                  a("div", { staticClass: "col-9 row items-center" }, [
                                    a("span", {
                                      directives: [
                                        {
                                          name: "show",
                                          rawName: "v-show",
                                          value: 0 !== e.itemStyle.color.length,
                                          expression: "item.itemStyle.color.length !== 0",
                                        },
                                      ],
                                      staticClass: "q-mx-sm",
                                      staticStyle: {
                                        float: "left",
                                        width: "10px",
                                        height: "10px",
                                        "border-radius": "50px",
                                      },
                                      style: { background: e.itemStyle.color },
                                    }),
                                    a("span", { staticClass: "text-grey" }, [t._v(t._s(e.name))]),
                                  ]),
                                  a("div", { staticClass: "col text-grey" }, [
                                    a("label", { staticStyle: { float: "right" } }, [
                                      t._v(t._s(e.value)),
                                    ]),
                                  ]),
                                ]),
                                a("div", { staticClass: "col" }),
                              ]);
                            }),
                            t._l(t.realTypeList, function (e) {
                              return a("div", { key: e.value, staticClass: "row" }, [
                                a("div", { staticClass: "col-2" }),
                                0 != e.total
                                  ? a("div", { staticClass: "row q-mt-sm col-9 justify-bewteen" }, [
                                      a("div", { staticClass: "col-12 row items-center" }, [
                                        a("span", {
                                          staticClass: "q-mx-sm",
                                          staticStyle: {
                                            float: "left",
                                            width: "10px",
                                            height: "10px",
                                            "border-radius": "50px",
                                          },
                                        }),
                                        a("span", {
                                          staticClass: "text-grey q-mx-sm",
                                          domProps: {
                                            textContent: t._s(e.label + t.trueTate + "："),
                                          },
                                        }),
                                        a("label", {
                                          staticClass: "text-grey q-mx-sm",
                                          staticStyle: { float: "right" },
                                          domProps: {
                                            textContent: t._s(
                                              Math.round((e.confirm / e.total) * 1e4) / 100 + "%",
                                            ),
                                          },
                                        }),
                                        a("span", { staticClass: "text-grey q-mx-sm" }, [
                                          t._v("(" + t._s(e.confirm) + " / " + t._s(e.total) + ")"),
                                        ]),
                                      ]),
                                    ])
                                  : t._e(),
                                a("div", { staticClass: "col" }),
                              ]);
                            }),
                          ],
                          2,
                        ),
                      ],
                    ),
                  ],
                  [
                    a(
                      "div",
                      {
                        directives: [
                          {
                            name: "show",
                            rawName: "v-show",
                            value: "generalSituation" == t.noticeTab,
                            expression: "noticeTab == 'generalSituation'",
                          },
                        ],
                        staticClass: "text-center q-my-md",
                      },
                      [
                        a("div", { staticClass: "row" }, [
                          a("div", { staticClass: "col" }),
                          a("div", { staticClass: "col-6" }, [
                            a(
                              "label",
                              {
                                staticStyle: {
                                  "font-size": "16px",
                                  color: "#454c5c",
                                  "font-weight": "700",
                                  "margin-top": "10px",
                                },
                              },
                              [t._v("按年级统计阅读率")],
                            ),
                          ]),
                          a(
                            "div",
                            {
                              staticClass: "col row items-center",
                              staticStyle: { float: "right" },
                            },
                            [
                              a(
                                "label",
                                {
                                  staticClass: "text-right",
                                  staticStyle: { color: "#1E90FF" },
                                  on: {
                                    click: function (e) {
                                      return t.NoticeRule("graderead");
                                    },
                                  },
                                },
                                [t._v("计算规则>")],
                              ),
                            ],
                          ),
                        ]),
                        a("div", { staticStyle: { height: "260px" }, attrs: { id: "graderead" } }),
                      ],
                    ),
                    a("hr", {
                      directives: [
                        {
                          name: "show",
                          rawName: "v-show",
                          value: "generalSituation" == t.noticeTab,
                          expression: "noticeTab == 'generalSituation'",
                        },
                      ],
                    }),
                    a(
                      "div",
                      {
                        directives: [
                          {
                            name: "show",
                            rawName: "v-show",
                            value: "generalSituation" == t.noticeTab,
                            expression: "noticeTab == 'generalSituation'",
                          },
                        ],
                        staticClass: "text-center q-my-md",
                      },
                      [
                        a("div", { staticClass: "row" }, [
                          a("div", { staticClass: "col" }),
                          a("div", { staticClass: "col-6" }, [
                            a(
                              "label",
                              {
                                staticStyle: {
                                  "font-size": "16px",
                                  color: "#454c5c",
                                  "font-weight": "700",
                                  "margin-top": "10px",
                                },
                              },
                              [t._v("按年级统计确认率")],
                            ),
                          ]),
                          a(
                            "div",
                            {
                              staticClass: "col row items-center",
                              staticStyle: { float: "right" },
                            },
                            [
                              a(
                                "label",
                                {
                                  staticClass: "text-right",
                                  staticStyle: { color: "#1E90FF" },
                                  on: {
                                    click: function (e) {
                                      return t.NoticeRule("gradeconfirm");
                                    },
                                  },
                                },
                                [t._v("计算规则>")],
                              ),
                            ],
                          ),
                        ]),
                        a("div", {
                          staticStyle: { height: "260px" },
                          attrs: { id: "gradeconfirm" },
                        }),
                      ],
                    ),
                    a("hr", {
                      directives: [
                        {
                          name: "show",
                          rawName: "v-show",
                          value:
                            "generalSituation" == t.noticeTab &&
                            t.menuInfo &&
                            "A" === t.menuInfo.view_permit,
                          expression:
                            "noticeTab == 'generalSituation' && menuInfo && menuInfo.view_permit === 'A'",
                        },
                      ],
                    }),
                    a(
                      "div",
                      {
                        directives: [
                          {
                            name: "show",
                            rawName: "v-show",
                            value:
                              "generalSituation" == t.noticeTab &&
                              t.menuInfo &&
                              "A" === t.menuInfo.view_permit,
                            expression:
                              "noticeTab == 'generalSituation' && menuInfo && menuInfo.view_permit === 'A'",
                          },
                        ],
                        staticClass: "text-center q-my-md",
                      },
                      [
                        a("div", { staticClass: "row" }, [
                          a("div", { staticClass: "col" }),
                          a("div", { staticClass: "col-6" }, [
                            a(
                              "label",
                              {
                                staticStyle: {
                                  "font-size": "16px",
                                  color: "#454c5c",
                                  "font-weight": "700",
                                  "margin-top": "10px",
                                },
                              },
                              [t._v("按院系统计阅读率")],
                            ),
                          ]),
                          a(
                            "div",
                            {
                              staticClass: "col row items-center",
                              staticStyle: { float: "right" },
                            },
                            [
                              a(
                                "label",
                                {
                                  staticClass: "text-right",
                                  staticStyle: { color: "#1E90FF" },
                                  on: {
                                    click: function (e) {
                                      return t.NoticeRule("depfeedbacked");
                                    },
                                  },
                                },
                                [t._v("计算规则>")],
                              ),
                            ],
                          ),
                        ]),
                        a("div", {
                          staticStyle: { height: "260px" },
                          attrs: { id: "depfeedbacked" },
                        }),
                      ],
                    ),
                    a("hr", {
                      directives: [
                        {
                          name: "show",
                          rawName: "v-show",
                          value:
                            "generalSituation" == t.noticeTab &&
                            t.menuInfo &&
                            "A" === t.menuInfo.view_permit,
                          expression:
                            "noticeTab == 'generalSituation' && menuInfo && menuInfo.view_permit === 'A'",
                        },
                      ],
                    }),
                    a(
                      "div",
                      {
                        directives: [
                          {
                            name: "show",
                            rawName: "v-show",
                            value:
                              "generalSituation" == t.noticeTab &&
                              t.menuInfo &&
                              "A" === t.menuInfo.view_permit,
                            expression:
                              "noticeTab == 'generalSituation' && menuInfo && menuInfo.view_permit === 'A'",
                          },
                        ],
                        staticClass: "text-center q-my-md",
                      },
                      [
                        a("div", { staticClass: "row" }, [
                          a("div", { staticClass: "col" }),
                          a("div", { staticClass: "col-6" }, [
                            a(
                              "label",
                              {
                                staticStyle: {
                                  "font-size": "16px",
                                  color: "#454c5c",
                                  "font-weight": "700",
                                  "margin-top": "10px",
                                },
                              },
                              [t._v("按院系统计确认率")],
                            ),
                          ]),
                          a(
                            "div",
                            {
                              staticClass: "col row items-center",
                              staticStyle: { float: "right" },
                            },
                            [
                              a(
                                "label",
                                {
                                  staticClass: "text-right",
                                  staticStyle: { color: "#1E90FF" },
                                  on: {
                                    click: function (e) {
                                      return t.NoticeRule("depconfirm");
                                    },
                                  },
                                },
                                [t._v("计算规则>")],
                              ),
                            ],
                          ),
                        ]),
                        a("div", { staticStyle: { height: "260px" }, attrs: { id: "depconfirm" } }),
                      ],
                    ),
                    a("hr", {
                      directives: [
                        {
                          name: "show",
                          rawName: "v-show",
                          value:
                            "generalSituation" == t.noticeTab &&
                            t.menuInfo &&
                            "D" === t.menuInfo.view_permit,
                          expression:
                            "noticeTab == 'generalSituation' && menuInfo && menuInfo.view_permit === 'D'",
                        },
                      ],
                    }),
                    a(
                      "div",
                      {
                        directives: [
                          {
                            name: "show",
                            rawName: "v-show",
                            value:
                              "generalSituation" == t.noticeTab &&
                              t.menuInfo &&
                              "D" === t.menuInfo.view_permit,
                            expression:
                              "noticeTab == 'generalSituation' && menuInfo && menuInfo.view_permit === 'D'",
                          },
                        ],
                        staticClass: "text-center q-my-md",
                      },
                      [
                        a("div", { staticClass: "row" }, [
                          a("div", { staticClass: "col" }),
                          a("div", { staticClass: "col-6" }, [
                            a(
                              "label",
                              {
                                staticStyle: {
                                  "font-size": "16px",
                                  color: "#454c5c",
                                  "font-weight": "700",
                                  "margin-top": "10px",
                                },
                              },
                              [t._v("按专业统计阅读率")],
                            ),
                          ]),
                          a(
                            "div",
                            {
                              staticClass: "col row items-center",
                              staticStyle: { float: "right" },
                            },
                            [
                              a(
                                "label",
                                {
                                  staticClass: "text-right",
                                  staticStyle: { color: "#1E90FF" },
                                  on: {
                                    click: function (e) {
                                      return t.NoticeRule("majornamefeedbacked");
                                    },
                                  },
                                },
                                [t._v("计算规则>")],
                              ),
                            ],
                          ),
                        ]),
                        a("div", {
                          staticStyle: { height: "260px" },
                          attrs: { id: "majornamefeedbacked" },
                        }),
                      ],
                    ),
                    a("hr", {
                      directives: [
                        {
                          name: "show",
                          rawName: "v-show",
                          value:
                            "generalSituation" == t.noticeTab &&
                            t.menuInfo &&
                            "D" === t.menuInfo.view_permit,
                          expression:
                            "noticeTab == 'generalSituation' && menuInfo && menuInfo.view_permit === 'D'",
                        },
                      ],
                    }),
                    a(
                      "div",
                      {
                        directives: [
                          {
                            name: "show",
                            rawName: "v-show",
                            value:
                              "generalSituation" == t.noticeTab &&
                              t.menuInfo &&
                              "D" === t.menuInfo.view_permit,
                            expression:
                              "noticeTab == 'generalSituation' && menuInfo && menuInfo.view_permit === 'D'",
                          },
                        ],
                        staticClass: "text-center q-my-md",
                      },
                      [
                        a("div", { staticClass: "row" }, [
                          a("div", { staticClass: "col" }),
                          a("div", { staticClass: "col-6" }, [
                            a(
                              "label",
                              {
                                staticStyle: {
                                  "font-size": "16px",
                                  color: "#454c5c",
                                  "font-weight": "700",
                                  "margin-top": "10px",
                                },
                              },
                              [t._v("按专业统计确认率")],
                            ),
                          ]),
                          a(
                            "div",
                            {
                              staticClass: "col row items-center",
                              staticStyle: { float: "right" },
                            },
                            [
                              a(
                                "label",
                                {
                                  staticClass: "text-right",
                                  staticStyle: { color: "#1E90FF" },
                                  on: {
                                    click: function (e) {
                                      return t.NoticeRule("majornameconfirm");
                                    },
                                  },
                                },
                                [t._v("计算规则>")],
                              ),
                            ],
                          ),
                        ]),
                        a("div", {
                          staticStyle: { height: "260px" },
                          attrs: { id: "majornameconfirm" },
                        }),
                      ],
                    ),
                    a("hr", {
                      directives: [
                        {
                          name: "show",
                          rawName: "v-show",
                          value:
                            "generalSituation" == t.noticeTab &&
                            t.menuInfo &&
                            "S" === t.menuInfo.view_permit,
                          expression:
                            "noticeTab == 'generalSituation' && menuInfo && menuInfo.view_permit === 'S'",
                        },
                      ],
                    }),
                    a(
                      "div",
                      {
                        directives: [
                          {
                            name: "show",
                            rawName: "v-show",
                            value:
                              "generalSituation" == t.noticeTab &&
                              t.menuInfo &&
                              "S" === t.menuInfo.view_permit,
                            expression:
                              "noticeTab == 'generalSituation' && menuInfo && menuInfo.view_permit === 'S'",
                          },
                        ],
                        staticClass: "text-center q-my-md",
                      },
                      [
                        a("div", { staticClass: "row" }, [
                          a("div", { staticClass: "col" }),
                          a("div", { staticClass: "col-6" }, [
                            a(
                              "label",
                              {
                                staticStyle: {
                                  "font-size": "16px",
                                  color: "#454c5c",
                                  "font-weight": "700",
                                  "margin-top": "10px",
                                },
                              },
                              [t._v("按班级统计阅读率")],
                            ),
                          ]),
                          a(
                            "div",
                            {
                              staticClass: "col row items-center",
                              staticStyle: { float: "right" },
                            },
                            [
                              a(
                                "label",
                                {
                                  staticClass: "text-right",
                                  staticStyle: { color: "#1E90FF" },
                                  on: {
                                    click: function (e) {
                                      return t.NoticeRule("classfeebacked");
                                    },
                                  },
                                },
                                [t._v("计算规则>")],
                              ),
                            ],
                          ),
                        ]),
                        a("div", {
                          staticStyle: { height: "260px" },
                          attrs: { id: "classfeebacked" },
                        }),
                      ],
                    ),
                    a("hr", {
                      directives: [
                        {
                          name: "show",
                          rawName: "v-show",
                          value:
                            "generalSituation" == t.noticeTab &&
                            t.menuInfo &&
                            "S" === t.menuInfo.view_permit,
                          expression:
                            "noticeTab == 'generalSituation' && menuInfo && menuInfo.view_permit === 'S'",
                        },
                      ],
                    }),
                    a(
                      "div",
                      {
                        directives: [
                          {
                            name: "show",
                            rawName: "v-show",
                            value:
                              "generalSituation" == t.noticeTab &&
                              t.menuInfo &&
                              "S" === t.menuInfo.view_permit,
                            expression:
                              "noticeTab == 'generalSituation' && menuInfo && menuInfo.view_permit === 'S'",
                          },
                        ],
                        staticClass: "text-center q-my-md",
                      },
                      [
                        a("div", { staticClass: "row" }, [
                          a("div", { staticClass: "col" }),
                          a("div", { staticClass: "col-6" }, [
                            a(
                              "label",
                              {
                                staticStyle: {
                                  "font-size": "16px",
                                  color: "#454c5c",
                                  "font-weight": "700",
                                  "margin-top": "10px",
                                },
                              },
                              [t._v("按班级统计确认率")],
                            ),
                          ]),
                          a(
                            "div",
                            {
                              staticClass: "col row items-center",
                              staticStyle: { float: "right" },
                            },
                            [
                              a(
                                "label",
                                {
                                  staticClass: "text-right",
                                  staticStyle: { color: "#1E90FF" },
                                  on: {
                                    click: function (e) {
                                      return t.NoticeRule("classnameconfirm");
                                    },
                                  },
                                },
                                [t._v("计算规则>")],
                              ),
                            ],
                          ),
                        ]),
                        a("div", {
                          staticStyle: { height: "260px" },
                          attrs: { id: "classnameconfirm" },
                        }),
                      ],
                    ),
                  ],
                ],
                2,
              ),
              a(
                "q-dialog",
                {
                  attrs: { countRuleShow: "" },
                  model: {
                    value: t.countRuleShow,
                    callback: function (e) {
                      t.countRuleShow = e;
                    },
                    expression: "countRuleShow",
                  },
                },
                [
                  a(
                    "q-card",
                    { staticStyle: { "border-radius": "25px" } },
                    [
                      a(
                        "q-item",
                        [
                          a(
                            "q-item-section",
                            { staticClass: "flex flex-center" },
                            [
                              a("q-item-label", { staticClass: "text-weight-bold" }, [
                                t._v(t._s(t.ruleTitle)),
                              ]),
                            ],
                            1,
                          ),
                        ],
                        1,
                      ),
                      a(
                        "q-item",
                        { staticClass: "q-my-sm", attrs: { dense: "" } },
                        [a("q-item-section", [a("q-item-label", [t._v(t._s(t.ruleMessage))])], 1)],
                        1,
                      ),
                      a("q-separator"),
                      a(
                        "q-card-actions",
                        { attrs: { align: "around" } },
                        [
                          a(
                            "q-btn",
                            {
                              directives: [{ name: "close-popup", rawName: "v-close-popup" }],
                              attrs: { flat: "", color: "primary" },
                            },
                            [t._v("知道了")],
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
                "q-dialog",
                {
                  attrs: { persistent: "", fullWidth: "", maximized: t.maximizedToggle },
                  model: {
                    value: t.taskTargetDialog,
                    callback: function (e) {
                      t.taskTargetDialog = e;
                    },
                    expression: "taskTargetDialog",
                  },
                },
                [
                  a(
                    "q-layout",
                    { staticClass: "bg-white", attrs: { view: "lHh lpr lFf", container: "" } },
                    [
                      a(
                        "q-header",
                        { staticClass: "full-width bg-white" },
                        [
                          a("q-toolbar", [
                            a(
                              "div",
                              {
                                staticClass:
                                  "full-width row items-center justify-between q-px-xs q-py-sm",
                              },
                              [
                                a("div", { staticClass: "text-bold text-black" }, [
                                  t._v("设置统计对象"),
                                ]),
                                a("q-btn", {
                                  attrs: { unelevated: "", color: "primary", label: "完成" },
                                  on: {
                                    click: function (e) {
                                      t.taskTargetDialog = !1;
                                    },
                                  },
                                }),
                              ],
                              1,
                            ),
                          ]),
                        ],
                        1,
                      ),
                      a(
                        "q-page-container",
                        [
                          a(
                            "q-page",
                            [
                              a("neu-assign-student", {
                                attrs: {
                                  permit: t.menuInfo ? t.menuInfo.view_permit : null,
                                  "permit-mode": "V",
                                  "menu-id": t.menuInfo ? t.menuInfo.id : null,
                                },
                                model: {
                                  value: t.task_target,
                                  callback: function (e) {
                                    t.task_target = e;
                                  },
                                  expression: "task_target",
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
        B = [],
        O = {
          name: "NoticeAnalysis",
          props: {},
          components: { NeuAssignStudent: n["a"] },
          data() {
            return {
              noticeTab: "realTime",
              TrueNotice: null,
              allNotice: null,
              allRead: null,
              read: null,
              realList: [],
              readList: [],
              readTypeList: [],
              realTypeList: [],
              label: null,
              readTate: "阅读率",
              trueTate: "确认率",
              countRuleShow: !1,
              ruleTitle: "",
              ruleMessage: "",
              menuInfo: null,
              showPic: 0,
              showExp: !1,
              begin_date: "",
              end_date: "",
              begin_time: "",
              end_time: "",
              task_target: [],
              taskTargetDialog: !1,
              maximizedToggle: !0,
              teacher_no: JSON.parse(window.localStorage.getItem("userinfo")).login_name,
              loginName: "",
              getNoitceTypeList: [],
              selection: [],
              notice_priority: "",
            };
          },
          computed: {},
          mounted() {
            (window.localStorage.getItem("menu") &&
              (this.menuInfo = JSON.parse(window.localStorage.getItem("menu")).find(
                (t) => "analysis" === t.id,
              )),
              this.getWeekDate(),
              this.getNoitceType());
          },
          methods: {
            getWeekDate() {
              this.$axiosAction("/api/public.api", { action: "queryDefaultStatPeriod" }).then(
                (t) => {
                  0 === t.data.code &&
                    ((this.begin_time = t.data.begin_date),
                    (this.end_time = t.data.end_date),
                    (this.begin_date = t.data.begin_date),
                    (this.end_date = t.data.end_date));
                },
              );
            },
            NoticeRule(t) {
              ("confirm" === t
                ? ((this.ruleTitle = "确认率"),
                  (this.ruleMessage = "已经确认通知总数/需要确认通知总数"))
                : "read" === t
                  ? ((this.ruleTitle = "阅读率"), (this.ruleMessage = "已阅读总数/通知总数"))
                  : "gradeconfirm" === t
                    ? ((this.ruleTitle = "按年级统计确认率"),
                      (this.ruleMessage =
                        "(选中对应年级下所选学生)已经确认通知总数/需要确认通知总数"))
                    : "graderead" === t
                      ? ((this.ruleTitle = "按年级统计阅读率"),
                        (this.ruleMessage = "(选中对应年级下所选学生)已阅读总数/通知总数"))
                      : "majornamefeedbacked" === t
                        ? ((this.ruleTitle = "按专业统计阅读率"),
                          (this.ruleMessage = "(选中对应专业下所选学生)已阅读总数/通知总数"))
                        : "majornameconfirm" === t
                          ? ((this.ruleTitle = "按专业统计阅读率"),
                            (this.ruleMessage =
                              "(选中对应专业下所选学生)已经确认通知总数/需要确认通知总数"))
                          : "depconfirm" === t
                            ? ((this.ruleTitle = "按院系统计阅读率"),
                              (this.ruleMessage =
                                "(选中对应院系下所选学生)已经确认通知总数/需要确认通知总数"))
                            : "depfeedbacked" === t
                              ? ((this.ruleTitle = "按院系统计阅读率"),
                                (this.ruleMessage = "(选中对应院系下所选学生)已阅读总数/通知总数"))
                              : "classnameconfirm" === t
                                ? ((this.ruleTitle = "按班级统计阅读率"),
                                  (this.ruleMessage =
                                    "(选中对应班级下所选学生)已经确认通知总数/需要确认通知总数"))
                                : "classfeebacked" === t &&
                                  ((this.ruleTitle = "按班级统计阅读率"),
                                  (this.ruleMessage =
                                    "(选中对应班级下所选学生)已阅读总数/通知总数")),
                (this.countRuleShow = !0));
            },
            ringPic(t, e, a) {
              const i = document.getElementById(t),
                s = r["a"](i);
              var n = {};
              ((n = {
                tooltip: { trigger: "item", formatter: "{b}:{c}<br>{d}%" },
                legend: { show: !1 },
                series: [
                  {
                    type: "pie",
                    radius: ["40%", "70%"],
                    avoidLabelOverlap: !1,
                    label: {
                      show: !0,
                      position: "center",
                      formatter: function () {
                        return a;
                      },
                      textStyle: { fontSize: 20, fontWeight: "bold" },
                    },
                    labelLine: { show: !1 },
                    data: e,
                  },
                ],
              }),
                n && s.setOption(n));
            },
            columnPic(t, e, a, i) {
              const s = document.getElementById(t),
                n = r["a"](s);
              var l = {};
              ((l = {
                legend: { type: "scroll" },
                tooltip: {},
                dataset: { dimensions: e, source: a },
                xAxis: { axisLabel: { show: !0, interval: "auto", formatter: "{value} %" } },
                yAxis: { type: "category" },
                series: i,
              }),
                l && n.setOption(l, !0));
            },
            getAllNum() {
              0 !== this.begin_time.length &&
                0 !== this.end_time.length &&
                0 !== this.task_target.length &&
                this.$axiosAction("/api/teacher/analysis/analysis.api", {
                  action: "getNoticeAllPcNum",
                  task_target: JSON.stringify(this.task_target),
                  begin_time: this.begin_time,
                  end_time: this.end_time,
                  teacher_no: this.loginName,
                  notice_priority: this.selection,
                })
                  .then((t) => {
                    const e = [],
                      a = ["product"],
                      i = { product: "年\n级\n通\n知\n确\n认\n率" },
                      s = [],
                      n = [],
                      l = ["product"],
                      o = { product: "年\n级\n通\n知\n阅\n读\n率" },
                      r = [],
                      c = ["product"],
                      d = { product: "院\n系\n通\n知\n阅\n读\n率" },
                      m = [],
                      h = [],
                      u = ["product"],
                      p = { product: "院\n系\n通\n知\n确\n认\n率" },
                      g = [],
                      v = [],
                      w = ["product"],
                      _ = { product: "专\n业\n通\n知\n阅\n读\n率" },
                      y = [],
                      b = [],
                      f = ["product"],
                      x = { product: "专\n业\n通\n知\n确\n认\n率" },
                      C = [],
                      q = [],
                      S = ["product"],
                      k = { product: "班\n级\n通\n知\n阅\n度\n率" },
                      T = [],
                      N = [],
                      P = ["product"],
                      I = { product: "班\n级\n通\n知\n确\n认\n率" },
                      L = [],
                      R = [],
                      D = [],
                      A = [];
                    if (0 === t.data.code)
                      if ("realTime" === this.noticeTab) {
                        this.realList = t.data.confirmResult;
                        for (let e = 0; e < t.data.confirmResult.length; e++)
                          "未确认通知" === t.data.confirmResult[e].name
                            ? D.push(t.data.confirmResult[e])
                            : "已经确认通知" === t.data.confirmResult[e].name
                              ? (D.push(t.data.confirmResult[e]),
                                (this.TrueNotice = t.data.confirmResult[e].value))
                              : (this.allNotice = t.data.confirmResult[e].value);
                        (this.$q.loading.hide(),
                          this.ringPic(
                            "true",
                            D,
                            this.percent(this.TrueNotice, this.allNotice) + "%\n确认率",
                          ),
                          (this.realTypeList = t.data.confirmTypeResult),
                          (this.readList = t.data.readResult));
                        for (let e = 0; e < t.data.readResult.length; e++)
                          "未阅读" === t.data.readResult[e].name
                            ? A.push(t.data.readResult[e])
                            : "阅读" === t.data.readResult[e].name
                              ? (A.push(t.data.readResult[e]),
                                (this.read = t.data.readResult[e].value))
                              : (this.allRead = t.data.readResult[e].value);
                        (this.$q.loading.hide(),
                          this.ringPic(
                            "read",
                            A,
                            this.percent(this.read, this.allRead) + "%\n阅读率",
                          ),
                          (this.readTypeList = t.data.readTypeResult));
                      } else if ("generalSituation" === this.noticeTab) {
                        for (let e = 0; e < t.data.gradeReadNumResult.length; e++) {
                          const a = t.data.gradeReadNumResult[e].grade_name,
                            i =
                              this.percent(
                                t.data.gradeReadNumResult[e].gradefeedbacked,
                                t.data.gradeReadNumResult[e].total,
                              ) + "%",
                            s =
                              a +
                              " " +
                              i +
                              "(" +
                              t.data.gradeReadNumResult[e].gradefeedbacked +
                              "/" +
                              t.data.gradeReadNumResult[e].total +
                              ")";
                          (r.push({ type: "bar" }),
                            l.push(s),
                            (o[s] = this.percent(
                              t.data.gradeReadNumResult[e].gradefeedbacked,
                              t.data.gradeReadNumResult[e].total,
                            )));
                        }
                        (n.push(o), this.$q.loading.hide(), this.columnPic("graderead", l, n, r));
                        for (let e = 0; e < t.data.gradeConfirNumResult.length; e++) {
                          const n = t.data.gradeConfirNumResult[e].grade_name,
                            l =
                              this.percent(
                                t.data.gradeConfirNumResult[e].gradeconfirm,
                                t.data.gradeConfirNumResult[e].total,
                              ) + "%",
                            o =
                              n +
                              " " +
                              l +
                              "(" +
                              t.data.gradeConfirNumResult[e].gradeconfirm +
                              "/" +
                              t.data.gradeConfirNumResult[e].total +
                              ")";
                          (a.push(o),
                            s.push({ type: "bar" }),
                            (i[o] = this.percent(
                              t.data.gradeConfirNumResult[e].gradeconfirm,
                              t.data.gradeConfirNumResult[e].total,
                            )));
                        }
                        (e.push(i),
                          this.$q.loading.hide(),
                          this.columnPic("gradeconfirm", a, e, s));
                        for (let e = 0; e < t.data.majorReadNumResult.length; e++) {
                          const a = t.data.majorReadNumResult[e].majorfeedback,
                            i =
                              this.percent(
                                t.data.majorReadNumResult[e].majfeedbacked,
                                t.data.majorReadNumResult[e].total,
                              ) + "%",
                            s =
                              a +
                              " " +
                              i +
                              "(" +
                              t.data.majorReadNumResult[e].majfeedbacked +
                              "/" +
                              t.data.majorReadNumResult[e].total +
                              ")";
                          (y.push({ type: "bar" }),
                            w.push(s),
                            (_[s] = this.percent(
                              t.data.majorReadNumResult[e].majfeedbacked,
                              t.data.majorReadNumResult[e].total,
                            )));
                        }
                        (b.push(_),
                          this.$q.loading.hide(),
                          this.columnPic("majornamefeedbacked", w, b, y));
                        for (let e = 0; e < t.data.majorConfirNumResult.length; e++) {
                          const a = t.data.majorConfirNumResult[e].majorconfirm,
                            i =
                              this.percent(
                                t.data.majorConfirNumResult[e].majconfirmnum,
                                t.data.majorConfirNumResult[e].total,
                              ) + "%",
                            s =
                              a +
                              " " +
                              i +
                              "(" +
                              t.data.majorConfirNumResult[e].majconfirmnum +
                              "/" +
                              t.data.majorConfirNumResult[e].total +
                              ")";
                          (C.push({ type: "bar" }),
                            f.push(s),
                            (x[s] = this.percent(
                              t.data.majorConfirNumResult[e].majconfirmnum,
                              t.data.majorConfirNumResult[e].total,
                            )));
                        }
                        (q.push(x),
                          this.$q.loading.hide(),
                          this.columnPic("majornameconfirm", f, q, C));
                        for (let e = 0; e < t.data.depReadNumResult.length; e++) {
                          const a = t.data.depReadNumResult[e].depfeedback,
                            i =
                              this.percent(
                                t.data.depReadNumResult[e].depfeedbacked,
                                t.data.depReadNumResult[e].total,
                              ) + "%",
                            s =
                              a +
                              " " +
                              i +
                              "(" +
                              t.data.depReadNumResult[e].depfeedbacked +
                              "/" +
                              t.data.depReadNumResult[e].total +
                              ")";
                          (m.push({ type: "bar" }),
                            c.push(s),
                            (d[s] = this.percent(
                              t.data.depReadNumResult[e].depfeedbacked,
                              t.data.depReadNumResult[e].total,
                            )));
                        }
                        (h.push(d),
                          this.$q.loading.hide(),
                          this.columnPic("depfeedbacked", c, h, m));
                        for (let e = 0; e < t.data.depConfirmNumResult.length; e++) {
                          const a = t.data.depConfirmNumResult[e].depconfirm,
                            i =
                              this.percent(
                                t.data.depConfirmNumResult[e].depconfirmnum,
                                t.data.depConfirmNumResult[e].total,
                              ) + "%",
                            s =
                              a +
                              " " +
                              i +
                              "(" +
                              t.data.depConfirmNumResult[e].depconfirmnum +
                              "/" +
                              t.data.depConfirmNumResult[e].total +
                              ")";
                          (g.push({ type: "bar" }),
                            u.push(s),
                            (p[s] = this.percent(
                              t.data.depConfirmNumResult[e].depconfirmnum,
                              t.data.depConfirmNumResult[e].total,
                            )));
                        }
                        (v.push(p), this.$q.loading.hide(), this.columnPic("depconfirm", u, v, g));
                        for (let e = 0; e < t.data.classReadNumResult.length; e++) {
                          const a = t.data.classReadNumResult[e].class_name,
                            i =
                              this.percent(
                                t.data.classReadNumResult[e].noclassfeedback,
                                t.data.classReadNumResult[e].total,
                              ) + "%",
                            s =
                              a +
                              " " +
                              i +
                              "(" +
                              t.data.classReadNumResult[e].noclassfeedback +
                              "/" +
                              t.data.classReadNumResult[e].total +
                              ")";
                          (T.push({ type: "bar" }),
                            S.push(s),
                            (k[s] = this.percent(
                              t.data.classReadNumResult[e].noclassfeedback,
                              t.data.classReadNumResult[e].total,
                            )));
                        }
                        (N.push(k),
                          this.$q.loading.hide(),
                          this.columnPic("classfeebacked", S, N, T));
                        for (let e = 0; e < t.data.classConfirmNumResult.length; e++) {
                          const a = t.data.classConfirmNumResult[e].class_name,
                            i =
                              this.percent(
                                t.data.classConfirmNumResult[e].classconfirm,
                                t.data.classConfirmNumResult[e].total,
                              ) + "%",
                            s =
                              a +
                              " " +
                              i +
                              "(" +
                              t.data.classConfirmNumResult[e].classconfirm +
                              "/" +
                              t.data.classConfirmNumResult[e].total +
                              ")";
                          (L.push({ type: "bar" }),
                            P.push(s),
                            (I[s] = this.percent(
                              t.data.classConfirmNumResult[e].classconfirm,
                              t.data.classConfirmNumResult[e].total,
                            )));
                        }
                        (R.push(I),
                          this.$q.loading.hide(),
                          this.columnPic("classnameconfirm", P, R, L));
                      }
                  })
                  .catch((t) => {
                    ((this.gradeReadList = []),
                      (this.gradeConfirmList = []),
                      (this.majorReadList = []),
                      (this.majorConfirmList = []),
                      (this.depReadList = []),
                      (this.depConfirmList = []),
                      (this.classReadList = []),
                      (this.classConfirmList = []));
                  });
            },
            percent(t, e) {
              return 0 === t || 0 === e ? 0 : Math.round((t / e) * 1e4) / 100;
            },
            checkTime() {
              0 === this.begin_time.length &&
              0 === this.end_time.length &&
              0 === this.task_target.length
                ? ((this.showPic = 0),
                  this.$q.notify({
                    color: "red-5",
                    textColor: "white",
                    icon: "warning",
                    message: "请选择统计时间与统计学生！",
                  }))
                : 0 === this.begin_time.length || 0 === this.end_time.length
                  ? ((this.showPic = 0),
                    this.$q.notify({
                      color: "red-5",
                      textColor: "white",
                      icon: "warning",
                      message: "请选择统计时间！",
                    }))
                  : 0 === this.task_target.length
                    ? ((this.showPic = 0),
                      this.$q.notify({
                        color: "red-5",
                        textColor: "white",
                        icon: "warning",
                        message: "请选择统计学生！",
                      }))
                    : this.$axiosAction("/api/teacher/analysis/analysis.api", {
                        action: "checkTime",
                        begin_time: this.begin_time,
                        end_time: this.end_time,
                      }).then((t) => {
                        0 === t.data.code
                          ? ((this.showPic = 1),
                            (this.begin_date = this.begin_time),
                            (this.end_date = this.end_time),
                            this.getAllNum(),
                            this.$q.loading.show(),
                            (this.showExp = !1))
                          : ((this.showPic = 0), (this.begin_date = ""), (this.end_date = ""));
                      });
            },
            getNoitceType() {
              this.$axiosAction("/api/teacher/analysis/analysis.api", {
                action: "getNoitceType",
              }).then((t) => {
                ((this.getNoitceTypeList = t.data.getNoitceType),
                  (this.selection = this.getNoitceTypeList.reduce(
                    (t, e) => t.concat(e.value),
                    [],
                  )));
              });
            },
          },
        },
        F = O,
        Y = Object(h["a"])(F, M, B, !1, null, null, null),
        G = Y.exports;
      (j()(Y, "components", {
        QCard: u["a"],
        QExpansionItem: p["a"],
        QList: g["a"],
        QItem: v["a"],
        QItemSection: w["a"],
        QField: _["a"],
        QIcon: y["a"],
        QPopupProxy: b["a"],
        QDate: f["a"],
        QBtn: x["a"],
        QSeparator: C["a"],
        QItemLabel: q["a"],
        QCheckbox: S["a"],
        QTabs: k["a"],
        QTab: T["a"],
        QDialog: N["a"],
        QCardActions: P["a"],
        QLayout: I["a"],
        QHeader: L["a"],
        QToolbar: R["a"],
        QPageContainer: D["a"],
        QPage: A["a"],
      }),
        j()(Y, "directives", { ClosePopup: Q["a"] }));
      var J = function () {
          var t = this,
            e = t.$createElement,
            a = t._self._c || e;
          return a(
            "q-card",
            { staticClass: "bg-white q-mb-sm q-mx-sm", attrs: { flat: "" } },
            [
              a(
                "q-expansion-item",
                {
                  attrs: {
                    "switch-toggle-side": "",
                    "expand-separator": "",
                    icon: "search",
                    label: "检索",
                  },
                  model: {
                    value: t.showExp,
                    callback: function (e) {
                      t.showExp = e;
                    },
                    expression: "showExp",
                  },
                },
                [
                  a(
                    "q-card",
                    [
                      a(
                        "q-list",
                        { staticClass: "full-width" },
                        [
                          a(
                            "q-item",
                            [
                              a("q-item-section", { attrs: { avatar: "" } }, [
                                a("div", { staticClass: "neu-css-before-red-asterisk" }, [
                                  t._v("\n              开始时间\n            "),
                                ]),
                              ]),
                              a("q-item-section"),
                              a(
                                "q-item-section",
                                { attrs: { side: "" } },
                                [
                                  a("q-field", {
                                    staticStyle: { width: "200px" },
                                    attrs: {
                                      outlined: "",
                                      dense: "",
                                      "stack-label": "",
                                      "hide-bottom-space": "",
                                      "lazy-rules": "",
                                      value: t.begin_time,
                                    },
                                    scopedSlots: t._u([
                                      {
                                        key: "control",
                                        fn: function () {
                                          return [t._v(t._s(t.begin_time))];
                                        },
                                        proxy: !0,
                                      },
                                      {
                                        key: "append",
                                        fn: function () {
                                          return [
                                            a(
                                              "q-icon",
                                              {
                                                staticClass: "cursor-pointer",
                                                attrs: { name: "event" },
                                              },
                                              [
                                                a(
                                                  "q-popup-proxy",
                                                  {
                                                    attrs: {
                                                      "transition-show": "scale",
                                                      "transition-hide": "scale",
                                                    },
                                                  },
                                                  [
                                                    a(
                                                      "div",
                                                      [
                                                        a(
                                                          "q-date",
                                                          {
                                                            attrs: {
                                                              flat: "",
                                                              minimal: "",
                                                              mask: "YYYY-MM-DD",
                                                            },
                                                            model: {
                                                              value: t.begin_time,
                                                              callback: function (e) {
                                                                t.begin_time = e;
                                                              },
                                                              expression: "begin_time",
                                                            },
                                                          },
                                                          [
                                                            a(
                                                              "div",
                                                              {
                                                                staticClass:
                                                                  "row items-center justify-end",
                                                              },
                                                              [
                                                                a("q-btn", {
                                                                  directives: [
                                                                    {
                                                                      name: "close-popup",
                                                                      rawName: "v-close-popup",
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
                                    ]),
                                  }),
                                ],
                                1,
                              ),
                            ],
                            1,
                          ),
                          a("q-separator"),
                          a(
                            "q-item",
                            [
                              a("q-item-section", { attrs: { avatar: "" } }, [
                                a("div", { staticClass: "neu-css-before-red-asterisk" }, [
                                  t._v("\n              结束时间\n            "),
                                ]),
                              ]),
                              a("q-item-section"),
                              a(
                                "q-item-section",
                                { attrs: { side: "" } },
                                [
                                  a("q-field", {
                                    staticStyle: { width: "200px" },
                                    attrs: {
                                      outlined: "",
                                      dense: "",
                                      "stack-label": "",
                                      "hide-bottom-space": "",
                                      "lazy-rules": "",
                                      rules: [
                                        function (e) {
                                          return e >= t.begin_time || "截止时间应在开始时间之后";
                                        },
                                      ],
                                      value: t.end_time,
                                    },
                                    scopedSlots: t._u([
                                      {
                                        key: "control",
                                        fn: function () {
                                          return [t._v(t._s(t.end_time))];
                                        },
                                        proxy: !0,
                                      },
                                      {
                                        key: "append",
                                        fn: function () {
                                          return [
                                            a(
                                              "q-icon",
                                              {
                                                staticClass: "cursor-pointer",
                                                attrs: { name: "event" },
                                              },
                                              [
                                                a(
                                                  "q-popup-proxy",
                                                  {
                                                    attrs: {
                                                      "transition-show": "scale",
                                                      "transition-hide": "scale",
                                                    },
                                                  },
                                                  [
                                                    a(
                                                      "div",
                                                      [
                                                        a(
                                                          "q-date",
                                                          {
                                                            attrs: {
                                                              flat: "",
                                                              minimal: "",
                                                              mask: "YYYY-MM-DD",
                                                            },
                                                            model: {
                                                              value: t.end_time,
                                                              callback: function (e) {
                                                                t.end_time = e;
                                                              },
                                                              expression: "end_time",
                                                            },
                                                          },
                                                          [
                                                            a(
                                                              "div",
                                                              {
                                                                staticClass:
                                                                  "row items-center justify-end",
                                                              },
                                                              [
                                                                a("q-btn", {
                                                                  directives: [
                                                                    {
                                                                      name: "close-popup",
                                                                      rawName: "v-close-popup",
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
                                    ]),
                                  }),
                                ],
                                1,
                              ),
                            ],
                            1,
                          ),
                          a("q-separator"),
                          a(
                            "q-item",
                            [
                              a("q-item-section", { attrs: { avatar: "" } }, [
                                a("div", { staticClass: "neu-css-before-red-asterisk" }, [
                                  t._v("\n              统计对象\n            "),
                                ]),
                              ]),
                              a("q-item-section"),
                              a(
                                "q-item-section",
                                { attrs: { side: "" } },
                                [
                                  a(
                                    "q-item-label",
                                    { staticClass: "row items-center" },
                                    [
                                      a(
                                        "span",
                                        {
                                          directives: [
                                            {
                                              name: "show",
                                              rawName: "v-show",
                                              value: !t.task_target || 0 == t.task_target.length,
                                              expression:
                                                "!task_target || task_target.length == 0 ",
                                            },
                                          ],
                                          staticClass: "text-grey",
                                          on: {
                                            click: function (e) {
                                              t.taskTargetDialog = !0;
                                            },
                                          },
                                        },
                                        [t._v("选择")],
                                      ),
                                      a("q-icon", {
                                        directives: [
                                          {
                                            name: "show",
                                            rawName: "v-show",
                                            value: !t.task_target || 0 == t.task_target.length,
                                            expression: "!task_target || task_target.length == 0 ",
                                          },
                                        ],
                                        staticClass: "text-grey",
                                        attrs: { name: "keyboard_arrow_right", size: "sm" },
                                      }),
                                      a(
                                        "span",
                                        {
                                          directives: [
                                            {
                                              name: "show",
                                              rawName: "v-show",
                                              value: t.task_target && 0 != t.task_target.length,
                                              expression: "task_target && task_target.length != 0 ",
                                            },
                                          ],
                                          staticClass: "text-primary",
                                          on: {
                                            click: function (e) {
                                              t.taskTargetDialog = !0;
                                            },
                                          },
                                        },
                                        [t._v("已选择 (" + t._s(t.task_target.length) + ")")],
                                      ),
                                      a("q-icon", {
                                        directives: [
                                          {
                                            name: "show",
                                            rawName: "v-show",
                                            value: t.task_target && 0 != t.task_target.length,
                                            expression: "task_target && task_target.length != 0 ",
                                          },
                                        ],
                                        staticClass: "text-primary",
                                        attrs: { name: "keyboard_arrow_right", size: "sm" },
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
                          a("q-separator"),
                          a(
                            "q-item",
                            [
                              a("q-item-section", { attrs: { avatar: "" } }, [
                                t._v("\n            签到类型\n          "),
                              ]),
                              a("q-item-section", [
                                a(
                                  "div",
                                  { staticClass: "q-gutter-xs" },
                                  t._l(t.signinRadioTypeList, function (e) {
                                    return a("q-checkbox", {
                                      key: e.value,
                                      staticClass: "q-mr-sm",
                                      attrs: {
                                        dense: "",
                                        "keep-color": "",
                                        val: e.value,
                                        label: e.label,
                                      },
                                      model: {
                                        value: t.signin_type,
                                        callback: function (e) {
                                          t.signin_type = e;
                                        },
                                        expression: "signin_type",
                                      },
                                    });
                                  }),
                                  1,
                                ),
                              ]),
                            ],
                            1,
                          ),
                          a("q-separator"),
                          a(
                            "q-item",
                            [
                              a("q-item-section", { attrs: { avatar: "" } }, [
                                t._v("\n            签到方式\n          "),
                              ]),
                              a("q-item-section", [
                                a(
                                  "div",
                                  { staticClass: "q-gutter-xs" },
                                  t._l(t.signinMethodList, function (e) {
                                    return a("q-checkbox", {
                                      key: e.value,
                                      staticClass: "q-mr-sm",
                                      attrs: {
                                        dense: "",
                                        "keep-color": "",
                                        val: e.value,
                                        label: e.label,
                                      },
                                      model: {
                                        value: t.signin_method,
                                        callback: function (e) {
                                          t.signin_method = e;
                                        },
                                        expression: "signin_method",
                                      },
                                    });
                                  }),
                                  1,
                                ),
                              ]),
                            ],
                            1,
                          ),
                          a("q-separator"),
                          a(
                            "q-item",
                            [
                              a(
                                "q-item-section",
                                { staticClass: "text-white", attrs: { avatar: "" } },
                                [t._v("自己发布")],
                              ),
                              a("q-item-section", [
                                a(
                                  "div",
                                  { staticClass: "q-gutter-xs" },
                                  [
                                    a("q-checkbox", {
                                      attrs: { dense: "", "keep-color": "", label: "仅自己发布的" },
                                      model: {
                                        value: t.is_author,
                                        callback: function (e) {
                                          t.is_author = e;
                                        },
                                        expression: "is_author",
                                      },
                                    }),
                                  ],
                                  1,
                                ),
                              ]),
                            ],
                            1,
                          ),
                          a("q-separator"),
                          a(
                            "q-item",
                            [
                              a("q-item-section", [
                                a(
                                  "div",
                                  { staticClass: "col text-center" },
                                  [
                                    a("q-btn", {
                                      staticClass: "q-mx-md",
                                      attrs: {
                                        unelevated: "",
                                        color: "primary",
                                        label: "生成统计图",
                                      },
                                      on: { click: t.checkTime },
                                    }),
                                  ],
                                  1,
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
                ],
                1,
              ),
              a("q-separator"),
              a(
                "div",
                {
                  directives: [
                    {
                      name: "show",
                      rawName: "v-show",
                      value: 0 === t.showPic,
                      expression: "showPic === 0",
                    },
                  ],
                  staticClass: "q-py-sm text-center text-grey",
                },
                [a("label", [t._v("请选择统计时间和统计学生！")])],
              ),
              a(
                "div",
                {
                  directives: [
                    {
                      name: "show",
                      rawName: "v-show",
                      value: 1 === t.showPic,
                      expression: "showPic === 1",
                    },
                  ],
                },
                [
                  a(
                    "q-tabs",
                    {
                      staticClass: "text-grey",
                      attrs: {
                        dense: "",
                        "active-color": "primary",
                        "indicator-color": "primary",
                        align: "justify",
                        "narrow-indicator": "",
                      },
                      on: { click: t.chooseReal },
                      model: {
                        value: t.signinTab,
                        callback: function (e) {
                          t.signinTab = e;
                        },
                        expression: "signinTab",
                      },
                    },
                    [
                      a("q-tab", { attrs: { name: "signinData", label: "签到数据" } }),
                      a("q-tab", { attrs: { name: "generalSituation", label: "签到概况" } }),
                    ],
                    1,
                  ),
                  a("q-separator"),
                  [
                    a(
                      "div",
                      {
                        directives: [
                          {
                            name: "show",
                            rawName: "v-show",
                            value: "signinData" == t.signinTab,
                            expression: "signinTab == 'signinData'",
                          },
                        ],
                        staticClass: "text-center q-my-md",
                      },
                      [
                        a("div", { staticClass: "row" }, [
                          a("div", { staticClass: "col" }),
                          a("div", { staticClass: "col-6" }, [
                            a(
                              "label",
                              {
                                staticStyle: {
                                  "font-size": "16px",
                                  color: "#454c5c",
                                  "font-weight": "700",
                                  "margin-top": "10px",
                                },
                              },
                              [t._v("签到率")],
                            ),
                          ]),
                          a(
                            "div",
                            {
                              staticClass: "col row items-center",
                              staticStyle: { float: "right" },
                            },
                            [
                              a(
                                "label",
                                {
                                  staticClass: "text-right",
                                  staticStyle: { color: "#1E90FF" },
                                  on: {
                                    click: function (e) {
                                      return t.CountRule("signin");
                                    },
                                  },
                                },
                                [t._v("计算规则>")],
                              ),
                            ],
                          ),
                        ]),
                        a("div", { staticStyle: { height: "260px" }, attrs: { id: "signinMain" } }),
                        a(
                          "div",
                          { staticClass: "text-center", staticStyle: { height: "35%" } },
                          [
                            t._l(t.signinDataList, function (e, i) {
                              return a("div", { key: i, staticClass: "row" }, [
                                a("div", { staticClass: "col" }),
                                a("div", { staticClass: "row q-mt-sm col-7 justify-bewteen" }, [
                                  a("div", { staticClass: "col-9 row items-center" }, [
                                    a("span", {
                                      directives: [
                                        {
                                          name: "show",
                                          rawName: "v-show",
                                          value: e.itemStyle.color,
                                          expression: "item.itemStyle.color",
                                        },
                                      ],
                                      staticClass: "q-mx-sm",
                                      staticStyle: {
                                        float: "left",
                                        width: "10px",
                                        height: "10px",
                                        "border-radius": "50px",
                                      },
                                      style: { background: e.itemStyle.color },
                                    }),
                                    a("span", { staticClass: "text-grey" }, [
                                      t._v(t._s(e.name) + "："),
                                    ]),
                                  ]),
                                  a("div", { staticClass: "col text-grey" }, [
                                    a("label", { staticStyle: { float: "right" } }, [
                                      t._v(t._s(e.value)),
                                    ]),
                                  ]),
                                ]),
                                a("div", { staticClass: "col" }),
                              ]);
                            }),
                            a(
                              "table",
                              { staticClass: "full-width" },
                              [
                                a(
                                  "tr",
                                  {
                                    directives: [
                                      {
                                        name: "show",
                                        rawName: "v-show",
                                        value: 0 !== t.countSigninMethod.length,
                                        expression: "countSigninMethod.length !== 0",
                                      },
                                    ],
                                  },
                                  [
                                    a("td"),
                                    a("td", { staticClass: "text-grey" }, [t._v("签到率")]),
                                    a("td", { staticClass: "text-grey" }, [t._v("请假率")]),
                                  ],
                                ),
                                t._l(t.countSigninMethod, function (e, i) {
                                  return a("tr", { key: "b" + i }, [
                                    a("td", { staticClass: "text-grey" }, [
                                      t._v(
                                        "\n                " + t._s(e.label) + "\n              ",
                                      ),
                                    ]),
                                    a(
                                      "td",
                                      { staticClass: "text-grey cursor-pointer" },
                                      [
                                        t._v(
                                          "\n                " +
                                            t._s(e.signin_radio) +
                                            "%\n                ",
                                        ),
                                        a("q-tooltip", [
                                          t._v(
                                            "\n                  ( " +
                                              t._s(e.signin_total) +
                                              " / " +
                                              t._s(e.total) +
                                              " )\n                ",
                                          ),
                                        ]),
                                      ],
                                      1,
                                    ),
                                    a(
                                      "td",
                                      { staticClass: "text-grey cursor-pointer" },
                                      [
                                        t._v(
                                          "\n                " +
                                            t._s(e.leave_radio) +
                                            "%\n                ",
                                        ),
                                        a("q-tooltip", [
                                          t._v(
                                            "\n                  ( " +
                                              t._s(e.leave_total) +
                                              " / " +
                                              t._s(e.total) +
                                              " )\n                ",
                                          ),
                                        ]),
                                      ],
                                      1,
                                    ),
                                  ]);
                                }),
                              ],
                              2,
                            ),
                          ],
                          2,
                        ),
                      ],
                    ),
                    a("hr", {
                      directives: [
                        {
                          name: "show",
                          rawName: "v-show",
                          value: "signinData" == t.signinTab,
                          expression: "signinTab == 'signinData'",
                        },
                      ],
                    }),
                    a(
                      "div",
                      {
                        directives: [
                          {
                            name: "show",
                            rawName: "v-show",
                            value: "signinData" == t.signinTab,
                            expression: "signinTab == 'signinData'",
                          },
                        ],
                        staticClass: "text-center q-my-md",
                      },
                      [
                        a("div", { staticClass: "row" }, [
                          a("div", { staticClass: "col" }),
                          a("div", { staticClass: "col-6" }, [
                            a(
                              "label",
                              {
                                staticStyle: {
                                  "font-size": "16px",
                                  color: "#454c5c",
                                  "font-weight": "700",
                                  "margin-top": "10px",
                                },
                              },
                              [t._v("修改率")],
                            ),
                          ]),
                          a(
                            "div",
                            {
                              staticClass: "col row items-center",
                              staticStyle: { float: "right" },
                            },
                            [
                              a(
                                "label",
                                {
                                  staticClass: "text-right",
                                  staticStyle: { color: "#1E90FF" },
                                  on: {
                                    click: function (e) {
                                      return t.CountRule("change");
                                    },
                                  },
                                },
                                [t._v("计算规则>")],
                              ),
                            ],
                          ),
                        ]),
                        a("div", {
                          staticStyle: { height: "260px" },
                          attrs: { id: "signinChange" },
                        }),
                        a(
                          "div",
                          { staticClass: "text-center", staticStyle: { height: "35%" } },
                          [
                            t._l(t.changeDataList, function (e, i) {
                              return a("div", { key: "a" + i, staticClass: "row" }, [
                                a("div", { staticClass: "col" }),
                                a("div", { staticClass: "row q-mt-sm col-7 justify-bewteen" }, [
                                  a("div", { staticClass: "col-9 row items-center" }, [
                                    a("span", {
                                      directives: [
                                        {
                                          name: "show",
                                          rawName: "v-show",
                                          value: 0 !== e.itemStyle.color.length,
                                          expression: "item.itemStyle.color.length !== 0",
                                        },
                                      ],
                                      staticClass: "q-mx-sm",
                                      staticStyle: {
                                        float: "left",
                                        width: "10px",
                                        height: "10px",
                                        "border-radius": "50px",
                                      },
                                      style: { background: e.itemStyle.color },
                                    }),
                                    a("span", { staticClass: "text-grey" }, [
                                      t._v(t._s(e.name) + "："),
                                    ]),
                                  ]),
                                  a("div", { staticClass: "col text-grey" }, [
                                    a("label", { staticStyle: { float: "right" } }, [
                                      t._v(t._s(e.value)),
                                    ]),
                                  ]),
                                ]),
                                a("div", { staticClass: "col" }),
                              ]);
                            }),
                            t._l(t.countChangeSigninMethod, function (e, i) {
                              return a("div", { key: "c" + i, staticClass: "row" }, [
                                a("div", { staticClass: "col" }),
                                a("div", { staticClass: "row q-mt-sm col-9 justify-bewteen" }, [
                                  a("div", { staticClass: "col-9 row items-center" }, [
                                    a("span", { staticClass: "text-grey q-ml-md" }, [
                                      t._v(t._s(e.label) + "："),
                                    ]),
                                  ]),
                                  a("div", { staticClass: "col-3 text-grey" }, [
                                    a(
                                      "label",
                                      { staticStyle: { float: "right", width: "100px" } },
                                      [
                                        t._v(
                                          t._s(e.signin_radio) +
                                            "% (" +
                                            t._s(e.signin_total) +
                                            "/" +
                                            t._s(e.total) +
                                            ")",
                                        ),
                                      ],
                                    ),
                                  ]),
                                ]),
                                a("div", { staticClass: "col" }),
                              ]);
                            }),
                          ],
                          2,
                        ),
                      ],
                    ),
                    a("hr", {
                      directives: [
                        {
                          name: "show",
                          rawName: "v-show",
                          value: "signinData" == t.signinTab,
                          expression: "signinTab == 'signinData'",
                        },
                      ],
                    }),
                  ],
                  [
                    a(
                      "div",
                      {
                        directives: [
                          {
                            name: "show",
                            rawName: "v-show",
                            value: "generalSituation" == t.signinTab,
                            expression: "signinTab == 'generalSituation'",
                          },
                        ],
                        staticClass: "text-center q-my-md",
                      },
                      [
                        a("div", { staticClass: "row" }, [
                          a("div", { staticClass: "col" }),
                          a("div", { staticClass: "col-6" }, [
                            a(
                              "label",
                              {
                                staticStyle: {
                                  "font-size": "16px",
                                  color: "#454c5c",
                                  "font-weight": "700",
                                  "margin-top": "10px",
                                },
                              },
                              [t._v("按年级统计签到率")],
                            ),
                          ]),
                          a(
                            "div",
                            {
                              staticClass: "col row items-center",
                              staticStyle: { float: "right" },
                            },
                            [
                              a(
                                "label",
                                {
                                  staticClass: "text-right",
                                  staticStyle: { color: "#1E90FF" },
                                  on: {
                                    click: function (e) {
                                      return t.CountRule("grade");
                                    },
                                  },
                                },
                                [t._v("计算规则>")],
                              ),
                            ],
                          ),
                        ]),
                        a("div", {
                          staticStyle: { height: "260px" },
                          attrs: { id: "signinGrade" },
                        }),
                      ],
                    ),
                    a("hr", {
                      directives: [
                        {
                          name: "show",
                          rawName: "v-show",
                          value: "generalSituation" == t.signinTab,
                          expression: "signinTab == 'generalSituation'",
                        },
                      ],
                    }),
                    a(
                      "div",
                      {
                        directives: [
                          {
                            name: "show",
                            rawName: "v-show",
                            value: "generalSituation" == t.signinTab && "A" === t.viewPermit,
                            expression: "signinTab == 'generalSituation' && viewPermit === 'A'",
                          },
                        ],
                        staticClass: "text-center q-my-md",
                      },
                      [
                        a("div", { staticClass: "row" }, [
                          a("div", { staticClass: "col" }),
                          a("div", { staticClass: "col-6" }, [
                            a(
                              "label",
                              {
                                staticStyle: {
                                  "font-size": "16px",
                                  color: "#454c5c",
                                  "font-weight": "700",
                                  "margin-top": "10px",
                                },
                              },
                              [t._v("按院系统计签到率")],
                            ),
                          ]),
                          a(
                            "div",
                            {
                              staticClass: "col row items-center",
                              staticStyle: { float: "right" },
                            },
                            [
                              a(
                                "label",
                                {
                                  staticClass: "text-right",
                                  staticStyle: { color: "#1E90FF" },
                                  on: {
                                    click: function (e) {
                                      return t.CountRule("dep");
                                    },
                                  },
                                },
                                [t._v("计算规则>")],
                              ),
                            ],
                          ),
                        ]),
                        a("div", { staticStyle: { height: "260px" }, attrs: { id: "signinDep" } }),
                      ],
                    ),
                    a("hr", {
                      directives: [
                        {
                          name: "show",
                          rawName: "v-show",
                          value: "generalSituation" == t.signinTab && "A" === t.viewPermit,
                          expression: "signinTab == 'generalSituation' && viewPermit === 'A'",
                        },
                      ],
                    }),
                    a(
                      "div",
                      {
                        directives: [
                          {
                            name: "show",
                            rawName: "v-show",
                            value: "generalSituation" == t.signinTab && "D" === t.viewPermit,
                            expression: "signinTab == 'generalSituation' && viewPermit === 'D'",
                          },
                        ],
                        staticClass: "text-center q-my-md",
                      },
                      [
                        a("div", { staticClass: "row" }, [
                          a("div", { staticClass: "col" }),
                          a("div", { staticClass: "col-6" }, [
                            a(
                              "label",
                              {
                                staticStyle: {
                                  "font-size": "16px",
                                  color: "#454c5c",
                                  "font-weight": "700",
                                  "margin-top": "10px",
                                },
                              },
                              [t._v("按专业统计签到率")],
                            ),
                          ]),
                          a(
                            "div",
                            {
                              staticClass: "col row items-center",
                              staticStyle: { float: "right" },
                            },
                            [
                              a(
                                "label",
                                {
                                  staticClass: "text-right",
                                  staticStyle: { color: "#1E90FF" },
                                  on: {
                                    click: function (e) {
                                      return t.CountRule("major");
                                    },
                                  },
                                },
                                [t._v("计算规则>")],
                              ),
                            ],
                          ),
                        ]),
                        a("div", {
                          staticStyle: { height: "260px" },
                          attrs: { id: "signinMajor" },
                        }),
                      ],
                    ),
                    a("hr", {
                      directives: [
                        {
                          name: "show",
                          rawName: "v-show",
                          value: "generalSituation" == t.signinTab && "D" === t.viewPermit,
                          expression: "signinTab == 'generalSituation' && viewPermit === 'D'",
                        },
                      ],
                    }),
                    a(
                      "div",
                      {
                        directives: [
                          {
                            name: "show",
                            rawName: "v-show",
                            value: "generalSituation" == t.signinTab && "S" === t.viewPermit,
                            expression: "signinTab == 'generalSituation' && viewPermit === 'S'",
                          },
                        ],
                        staticClass: "text-center q-my-md",
                      },
                      [
                        a("div", { staticClass: "row" }, [
                          a("div", { staticClass: "col" }),
                          a("div", { staticClass: "col-6" }, [
                            a(
                              "label",
                              {
                                staticStyle: {
                                  "font-size": "16px",
                                  color: "#454c5c",
                                  "font-weight": "700",
                                  "margin-top": "10px",
                                },
                              },
                              [t._v("按班级统计签到率")],
                            ),
                          ]),
                          a(
                            "div",
                            {
                              staticClass: "col row items-center",
                              staticStyle: { float: "right" },
                            },
                            [
                              a(
                                "label",
                                {
                                  staticClass: "text-right",
                                  staticStyle: { color: "#1E90FF" },
                                  on: {
                                    click: function (e) {
                                      return t.CountRule("class");
                                    },
                                  },
                                },
                                [t._v("计算规则>")],
                              ),
                            ],
                          ),
                        ]),
                        a("div", {
                          staticStyle: { height: "260px" },
                          attrs: { id: "signinClass" },
                        }),
                      ],
                    ),
                    a("hr", {
                      directives: [
                        {
                          name: "show",
                          rawName: "v-show",
                          value: "generalSituation" == t.signinTab && "S" === t.viewPermit,
                          expression: "signinTab == 'generalSituation' && viewPermit === 'S'",
                        },
                      ],
                    }),
                  ],
                ],
                2,
              ),
              a(
                "q-dialog",
                {
                  attrs: { countRuleShow: "" },
                  model: {
                    value: t.countRuleShow,
                    callback: function (e) {
                      t.countRuleShow = e;
                    },
                    expression: "countRuleShow",
                  },
                },
                [
                  a(
                    "q-card",
                    { staticStyle: { "border-radius": "25px" } },
                    [
                      a(
                        "q-item",
                        [
                          a(
                            "q-item-section",
                            { staticClass: "flex flex-center" },
                            [
                              a("q-item-label", { staticClass: "text-weight-bold" }, [
                                t._v(t._s(t.ruleTitle)),
                              ]),
                            ],
                            1,
                          ),
                        ],
                        1,
                      ),
                      a(
                        "q-item",
                        { staticClass: "q-my-sm", attrs: { dense: "" } },
                        [a("q-item-section", [a("q-item-label", [t._v(t._s(t.ruleMessage))])], 1)],
                        1,
                      ),
                      a("q-separator"),
                      a(
                        "q-card-actions",
                        { attrs: { align: "around" } },
                        [
                          a(
                            "q-btn",
                            {
                              directives: [{ name: "close-popup", rawName: "v-close-popup" }],
                              attrs: { flat: "", color: "primary" },
                            },
                            [t._v("知道了")],
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
                "q-dialog",
                {
                  attrs: { persistent: "", fullWidth: "", maximized: t.maximizedToggle },
                  model: {
                    value: t.taskTargetDialog,
                    callback: function (e) {
                      t.taskTargetDialog = e;
                    },
                    expression: "taskTargetDialog",
                  },
                },
                [
                  a(
                    "q-layout",
                    { staticClass: "bg-white", attrs: { view: "lHh lpr lFf", container: "" } },
                    [
                      a(
                        "q-header",
                        { staticClass: "full-width bg-white" },
                        [
                          a("q-toolbar", [
                            a(
                              "div",
                              {
                                staticClass:
                                  "full-width row items-center justify-between q-px-xs q-py-sm",
                              },
                              [
                                a("div", { staticClass: "text-bold text-black" }, [
                                  t._v("设置统计对象"),
                                ]),
                                a("q-btn", {
                                  attrs: { unelevated: "", color: "primary", label: "完成" },
                                  on: {
                                    click: function (e) {
                                      t.taskTargetDialog = !1;
                                    },
                                  },
                                }),
                              ],
                              1,
                            ),
                          ]),
                        ],
                        1,
                      ),
                      a(
                        "q-page-container",
                        [
                          a(
                            "q-page",
                            [
                              a("neu-assign-student", {
                                attrs: {
                                  permit: t.menuInfo ? t.menuInfo.view_permit : null,
                                  "permit-mode": "V",
                                  "menu-id": t.menuInfo ? t.menuInfo.id : null,
                                },
                                model: {
                                  value: t.task_target,
                                  callback: function (e) {
                                    t.task_target = e;
                                  },
                                  expression: "task_target",
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
        W = [],
        H =
          (a("c975"),
          {
            name: "SigninAnalysis",
            components: { NeuAssignStudent: n["a"] },
            data() {
              return {
                viewPermit: "",
                showExp: !1,
                begin_time: "",
                end_time: "",
                task_target: [],
                signin_type: [],
                signin_method: [],
                is_author: !1,
                signinTab: "signinData",
                signinRadioTypeList: [],
                signinMethodList: [],
                showPic: 0,
                taskTargetDialog: !1,
                maximizedToggle: !0,
                menuInfo: null,
                signinDataList: [],
                changeDataList: [],
                signinTypeList: [],
                signinChangeList: [],
                countRuleShow: !1,
                total: 0,
                dataValue: 0,
                num3: 0,
                changeTotal: 0,
                signinBy: ["product", "签到率", "请假率"],
                signinByGradeList: [],
                signinByDepList: [],
                signinByMajorList: [],
                signinByClassList: [],
                signinMethodStatus: [],
                ruleTitle: "",
                ruleMessage: "",
              };
            },
            mounted() {
              (window.localStorage.getItem("menu") &&
                ((this.menuInfo = JSON.parse(window.localStorage.getItem("menu")).find(
                  (t) => "analysis" === t.id,
                )),
                (this.viewPermit = this.menuInfo.view_permit)),
                this.$axiosAction("/api/public.api", { action: "queryDefaultStatPeriod" }).then(
                  (t) => {
                    0 === t.data.code &&
                      ((this.begin_time = t.data.begin_date), (this.end_time = t.data.end_date));
                  },
                ),
                this.$axiosAction("/api/public.api", {
                  action: "queryResultOfFunction",
                  functionName: "basic.f_query_option_list('signin_type')",
                }).then((t) => {
                  0 === t.data.code &&
                    ((this.signinRadioTypeList = t.data.list),
                    (this.signin_type = this.signinRadioTypeList.reduce(
                      (t, e) => t.concat(e.value),
                      [],
                    )));
                }),
                this.$axiosAction("/api/public.api", {
                  action: "queryResultOfFunction",
                  functionName: "basic.f_query_option_list('signin_method')",
                }).then((t) => {
                  0 === t.data.code &&
                    ((this.signinMethodList = t.data.list),
                    (this.signin_method = this.signinMethodList.reduce(
                      (t, e) => t.concat(e.value),
                      [],
                    )));
                }));
            },
            computed: {
              countSigninMethod() {
                return this.signinTypeList.reduce(
                  (t, e, a) =>
                    (0 === a && this.signinMethodStatus.indexOf("L") > -1) ||
                    (1 === a && this.signinMethodStatus.indexOf("DQR") > -1) ||
                    (2 === a && this.signinMethodStatus.indexOf("SQR") > -1)
                      ? t.concat(e)
                      : t,
                  [],
                );
              },
              countChangeSigninMethod() {
                return this.signinChangeList.reduce(
                  (t, e, a) =>
                    (0 === a && this.signinMethodStatus.indexOf("L") > -1) ||
                    (1 === a && this.signinMethodStatus.indexOf("DQR") > -1) ||
                    (2 === a && this.signinMethodStatus.indexOf("SQR") > -1)
                      ? t.concat(e)
                      : t,
                  [],
                );
              },
            },
            methods: {
              CountRule(t) {
                ("signin" === t
                  ? ((this.ruleTitle = "签到率"),
                    (this.ruleMessage = "签到率计算规则：已签到次数/(应签到次数-已请假次数)"))
                  : "change" === t
                    ? ((this.ruleTitle = "修改率"),
                      (this.ruleMessage =
                        "修改率计算规则：已修改签到次数/已签到总次数（不包含已请假次数）"))
                    : "grade" === t
                      ? ((this.ruleTitle = "各年级签到率"),
                        (this.ruleMessage =
                          "各年级签到率计算规则：各年级已签到次数/(各年级应签到次数-各年级已请假次数)"))
                      : "dep" === t
                        ? ((this.ruleTitle = "各院系签到率"),
                          (this.ruleMessage =
                            "各院系签到率计算规则：各院系已签到次数/(各院系应签到次数-各院系已请假次数)"))
                        : "major" === t
                          ? ((this.ruleTitle = "各专业签到率"),
                            (this.ruleMessage =
                              "各专业签到率计算规则：各专业已签到次数/(各专业应签到次数-各专业已请假次数)"))
                          : "class" === t &&
                            ((this.ruleTitle = "各班级签到率"),
                            (this.ruleMessage =
                              "各班级签到率计算规则：各班级已签到次数/(各班级应签到次数-各班级已请假次数)")),
                  (this.countRuleShow = !0));
              },
              checkTime() {
                null === this.begin_time && null === this.end_time && 0 === this.task_target.length
                  ? ((this.showPic = 0),
                    this.$q.notify({
                      color: "red-5",
                      textColor: "white",
                      icon: "warning",
                      message: "请选择统计时间与统计学生！",
                    }))
                  : null === this.begin_time || null === this.end_time
                    ? ((this.showPic = 0),
                      this.$q.notify({
                        color: "red-5",
                        textColor: "white",
                        icon: "warning",
                        message: "请选择统计时间！",
                      }))
                    : 0 === this.task_target.length
                      ? ((this.showPic = 0),
                        this.$q.notify({
                          color: "red-5",
                          textColor: "white",
                          icon: "warning",
                          message: "请选择统计学生！",
                        }))
                      : ((this.signinMethodStatus = this.signin_method.reduce(
                          (t, e) => t.concat(e),
                          [],
                        )),
                        this.$axiosAction("/api/teacher/analysis/analysis.api", {
                          action: "checkTime",
                          begin_time: this.begin_time,
                          end_time: this.end_time,
                        }).then((t) => {
                          0 === t.data.code
                            ? ((this.showPic = 1),
                              this.chooseReal(),
                              this.$q.loading.show(),
                              (this.showExp = !1))
                            : (this.showPic = 0);
                        }));
              },
              chooseReal() {
                "signinData" === this.signinTab
                  ? (this.getStuSigninRate(), this.getStuChangeRate(), this.getSigninRate())
                  : "generalSituation" === this.signinTab && this.completeSigninRate();
              },
              getStuSigninRate() {
                (0 !== this.begin_time.length &&
                  (0 !== this.end_time.length) & (0 !== this.task_target.length) &&
                  this.$axiosAction("/api/teacher/analysis/analysis.api", {
                    action: "getStuSigninRate",
                    task_target: JSON.stringify(this.task_target),
                    begin_time: this.begin_time,
                    end_time: this.end_time,
                    signin_type: this.signin_type,
                    signin_method: this.signin_method,
                    is_author: this.is_author,
                  }).then((t) => {
                    if (0 === t.data.code) {
                      ((this.signinDataList = [
                        {
                          name: "总人次数",
                          value: t.data.result.total,
                          itemStyle: { color: "#fcaf17" },
                        },
                        {
                          name: "已签到",
                          value: t.data.result.signined_total,
                          itemStyle: { color: "#c77eb5" },
                        },
                        {
                          name: "已请假",
                          value: t.data.result.leave_total,
                          itemStyle: { color: "#33CCFF" },
                        },
                        {
                          name: "未签到",
                          value: t.data.result.unsignin_total,
                          itemStyle: { color: "#FA8072" },
                        },
                      ]),
                        (this.dataValue = t.data.result.signined_total),
                        (this.total = t.data.result.total));
                      const e = t.data.result.leave_total;
                      (this.ringPic(
                        "signinMain",
                        this.signinDataList,
                        this.Percentage(this.dataValue, this.total, e) + "%\n签到率",
                      ),
                        this.$q.loading.hide());
                    }
                  }),
                  (this.signinDataList = []));
              },
              getStuChangeRate() {
                (0 !== this.begin_time.length &&
                  (0 !== this.end_time.length) & (0 !== this.task_target.length) &&
                  this.$axiosAction("/api/teacher/analysis/analysis.api", {
                    action: "getStuChangeRate",
                    task_target: JSON.stringify(this.task_target),
                    begin_time: this.begin_time,
                    end_time: this.end_time,
                    signin_type: this.signin_type,
                    signin_method: this.signin_method,
                    is_author: this.is_author,
                  }).then((t) => {
                    if (0 === t.data.code) {
                      const e = [];
                      for (let a = 0; a < t.data.list.length; a++)
                        (("已修改" !== t.data.list[a].name && "未修改" !== t.data.list[a].name) ||
                          e.push(t.data.list[a]),
                          "已签到总次数" === t.data.list[a].name &&
                            (this.changeTotal = t.data.list[a].value),
                          "已修改" === t.data.list[a].name && (this.num3 = t.data.list[a].value),
                          this.changeDataList.push(t.data.list[a]));
                      (this.ringPic(
                        "signinChange",
                        e,
                        this.changePercentage(this.num3, this.changeTotal) + "%\n修改率",
                      ),
                        this.$q.loading.hide());
                    }
                  }),
                  (this.changeDataList = []));
              },
              getSigninRate() {
                (0 !== this.begin_time.length &&
                  (0 !== this.end_time.length) & (0 !== this.task_target.length) &&
                  this.$axiosAction("/api/teacher/analysis/analysis.api", {
                    action: "getSigninTypeRate",
                    task_target: JSON.stringify(this.task_target),
                    begin_time: this.begin_time,
                    end_time: this.end_time,
                    signin_type: this.signin_type,
                    signin_method: this.signin_method,
                    is_author: this.is_author,
                  }).then((t) => {
                    0 === t.data.code &&
                      ((this.signinTypeList = t.data.completeResult),
                      (this.signinChangeList = t.data.editResult));
                  }),
                  (this.signinTypeList = []),
                  (this.signinChangeList = []));
              },
              completeSigninRate() {
                (0 !== this.begin_time.length &&
                  (0 !== this.end_time.length) & (0 !== this.task_target.length) &&
                  this.$axiosAction("/api/teacher/analysis/analysis.api", {
                    action: "completeSigninRate",
                    task_target: JSON.stringify(this.task_target),
                    begin_time: this.begin_time,
                    end_time: this.end_time,
                    signin_type: this.signin_type,
                    signin_method: this.signin_method,
                    is_author: this.is_author,
                  }).then((t) => {
                    0 === t.data.code &&
                      (this.changeGradeBar("signinGrade", t.data.gradeResult),
                      this.changeDepBar("signinDep", t.data.depResult),
                      this.changeMajorBar("signinMajor", t.data.majorResult),
                      this.changeClassBar("signinClass", t.data.classResult));
                  }),
                  (this.signinByGradeList = []),
                  (this.signinByDepList = []),
                  (this.signinByMajorList = []),
                  (this.signinByClassList = []));
              },
              changeGradeBar(t, e) {
                let a = [];
                for (let i = 0; i < e.length; i++)
                  a = a.concat({
                    product: e[i].name,
                    签到率: e[i].signin_radio,
                    请假率: e[i].leave_radio,
                  });
                ((this.signinByGradeList = a),
                  this.columnPic(t, this.signinBy, this.signinByGradeList),
                  this.$q.loading.hide());
              },
              changeDepBar(t, e) {
                let a = [];
                for (let i = 0; i < e.length; i++)
                  a = a.concat({
                    product: e[i].name,
                    签到率: e[i].signin_radio,
                    请假率: e[i].leave_radio,
                  });
                ((this.signinByDepList = a),
                  this.columnPic(t, this.signinBy, this.signinByDepList),
                  this.$q.loading.hide());
              },
              changeMajorBar(t, e) {
                let a = [];
                for (let i = 0; i < e.length; i++)
                  a = a.concat({
                    product: e[i].name,
                    签到率: e[i].signin_radio,
                    请假率: e[i].leave_radio,
                  });
                ((this.signinByMajorList = a),
                  this.columnPic(t, this.signinBy, this.signinByMajorList),
                  this.$q.loading.hide());
              },
              changeClassBar(t, e) {
                let a = [];
                for (let i = 0; i < e.length; i++)
                  a = a.concat({
                    product: e[i].name,
                    签到率: e[i].signin_radio,
                    请假率: e[i].leave_radio,
                  });
                ((this.signinByClassList = a),
                  this.columnPic(t, this.signinBy, this.signinByClassList),
                  this.$q.loading.hide());
              },
              ringPic(t, e, a) {
                const i = document.getElementById(t),
                  s = r["a"](i);
                var n = {};
                ((n = {
                  tooltip: { trigger: "item" },
                  legend: { show: !1 },
                  series: [
                    {
                      type: "pie",
                      radius: ["45%", "70%"],
                      avoidLabelOverlap: !1,
                      label: {
                        show: !0,
                        position: "center",
                        formatter: function () {
                          return a;
                        },
                        textStyle: { fontSize: 20, fontWeight: "bold" },
                      },
                      labelLine: { show: !1 },
                      data: e,
                    },
                  ],
                }),
                  n && s.setOption(n));
              },
              columnPic(t, e, a) {
                const i = document.getElementById(t),
                  s = r["a"](i);
                var n = {};
                ((n = {
                  legend: {},
                  tooltip: {
                    formatter: (t) =>
                      t.marker + t.name + t.seriesName + "：" + t.value[t.seriesName] + "%",
                  },
                  dataset: { dimensions: e, source: a },
                  grid: { left: "2%", right: "7%", bottom: "3%", containLabel: !0 },
                  xAxis: {
                    max: 100,
                    axisLabel: { show: !0, interval: "auto", formatter: "{value} %" },
                  },
                  yAxis: { type: "category" },
                  series: [{ type: "bar" }, { type: "bar" }],
                }),
                  n && s.setOption(n, !0),
                  (window.onresize = function () {
                    (s.resize(),
                      r["a"](document.getElementById("signinMain")).resize(),
                      r["a"](document.getElementById("signinChange")).resize(),
                      r["a"](document.getElementById("signinGrade")).resize(),
                      r["a"](document.getElementById("signinDep")).resize(),
                      r["a"](document.getElementById("signinMajor")).resize(),
                      r["a"](document.getElementById("signinClass")).resize());
                  }));
              },
              Percentage(t, e, a) {
                return 0 === t || 0 === e ? 0 : Math.round((t / (e - a)) * 1e4) / 100;
              },
              changePercentage(t, e) {
                return 0 === t || 0 === e ? 0 : Math.round((t / e) * 1e4) / 100;
              },
            },
          }),
        V = H,
        X = a("05c0"),
        K = Object(h["a"])(V, J, W, !1, null, null, null),
        U = K.exports;
      (j()(K, "components", {
        QCard: u["a"],
        QExpansionItem: p["a"],
        QList: g["a"],
        QItem: v["a"],
        QItemSection: w["a"],
        QField: _["a"],
        QIcon: y["a"],
        QPopupProxy: b["a"],
        QDate: f["a"],
        QBtn: x["a"],
        QSeparator: C["a"],
        QItemLabel: q["a"],
        QCheckbox: S["a"],
        QTabs: k["a"],
        QTab: T["a"],
        QTooltip: X["a"],
        QDialog: N["a"],
        QCardActions: P["a"],
        QLayout: I["a"],
        QHeader: L["a"],
        QToolbar: R["a"],
        QPageContainer: D["a"],
        QPage: A["a"],
      }),
        j()(K, "directives", { ClosePopup: Q["a"] }));
      var Z = function () {
          var t = this,
            e = t.$createElement,
            a = t._self._c || e;
          return a(
            "div",
            [
              a(
                "q-card",
                { staticClass: "bg-white q-mb-sm q-mx-sm", attrs: { flat: "" } },
                [
                  a(
                    "q-expansion-item",
                    {
                      attrs: {
                        "switch-toggle-side": "",
                        "expand-separator": "",
                        icon: "search",
                        label: "检索",
                      },
                      model: {
                        value: t.showExp,
                        callback: function (e) {
                          t.showExp = e;
                        },
                        expression: "showExp",
                      },
                    },
                    [
                      a(
                        "q-card",
                        [
                          a(
                            "q-list",
                            { staticClass: "full-width" },
                            [
                              a(
                                "q-item",
                                [
                                  a("q-item-section", { attrs: { avatar: "" } }, [
                                    a("div", { staticClass: "neu-css-before-red-asterisk" }, [
                                      t._v("\r\n                开始时间\r\n              "),
                                    ]),
                                  ]),
                                  a("q-item-section"),
                                  a(
                                    "q-item-section",
                                    { attrs: { side: "" } },
                                    [
                                      a("q-field", {
                                        staticStyle: { width: "200px" },
                                        attrs: {
                                          outlined: "",
                                          dense: "",
                                          "stack-label": "",
                                          "hide-bottom-space": "",
                                          "lazy-rules": "",
                                          value: t.begin_time,
                                        },
                                        scopedSlots: t._u([
                                          {
                                            key: "control",
                                            fn: function () {
                                              return [t._v(t._s(t.begin_time))];
                                            },
                                            proxy: !0,
                                          },
                                          {
                                            key: "append",
                                            fn: function () {
                                              return [
                                                a(
                                                  "q-icon",
                                                  {
                                                    staticClass: "cursor-pointer",
                                                    attrs: { name: "event" },
                                                  },
                                                  [
                                                    a(
                                                      "q-popup-proxy",
                                                      {
                                                        attrs: {
                                                          "transition-show": "scale",
                                                          "transition-hide": "scale",
                                                        },
                                                      },
                                                      [
                                                        a(
                                                          "div",
                                                          [
                                                            a(
                                                              "q-date",
                                                              {
                                                                attrs: {
                                                                  flat: "",
                                                                  minimal: "",
                                                                  mask: "YYYY-MM-DD",
                                                                },
                                                                model: {
                                                                  value: t.begin_time,
                                                                  callback: function (e) {
                                                                    t.begin_time = e;
                                                                  },
                                                                  expression: "begin_time",
                                                                },
                                                              },
                                                              [
                                                                a(
                                                                  "div",
                                                                  {
                                                                    staticClass:
                                                                      "row items-center justify-end",
                                                                  },
                                                                  [
                                                                    a("q-btn", {
                                                                      directives: [
                                                                        {
                                                                          name: "close-popup",
                                                                          rawName: "v-close-popup",
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
                                        ]),
                                      }),
                                    ],
                                    1,
                                  ),
                                ],
                                1,
                              ),
                              a("q-separator"),
                              a(
                                "q-item",
                                [
                                  a("q-item-section", { attrs: { avatar: "" } }, [
                                    a("div", { staticClass: "neu-css-before-red-asterisk" }, [
                                      t._v("\r\n                结束时间\r\n              "),
                                    ]),
                                  ]),
                                  a("q-item-section"),
                                  a(
                                    "q-item-section",
                                    { attrs: { side: "" } },
                                    [
                                      a("q-field", {
                                        staticStyle: { width: "200px" },
                                        attrs: {
                                          outlined: "",
                                          dense: "",
                                          "stack-label": "",
                                          "hide-bottom-space": "",
                                          "lazy-rules": "",
                                          rules: [
                                            function (e) {
                                              return (
                                                e >= t.begin_time || "截止时间应在开始时间之后"
                                              );
                                            },
                                          ],
                                          value: t.end_time,
                                        },
                                        scopedSlots: t._u([
                                          {
                                            key: "control",
                                            fn: function () {
                                              return [t._v(t._s(t.end_time))];
                                            },
                                            proxy: !0,
                                          },
                                          {
                                            key: "append",
                                            fn: function () {
                                              return [
                                                a(
                                                  "q-icon",
                                                  {
                                                    staticClass: "cursor-pointer",
                                                    attrs: { name: "event" },
                                                  },
                                                  [
                                                    a(
                                                      "q-popup-proxy",
                                                      {
                                                        attrs: {
                                                          "transition-show": "scale",
                                                          "transition-hide": "scale",
                                                        },
                                                      },
                                                      [
                                                        a(
                                                          "div",
                                                          [
                                                            a(
                                                              "q-date",
                                                              {
                                                                attrs: {
                                                                  flat: "",
                                                                  minimal: "",
                                                                  mask: "YYYY-MM-DD",
                                                                },
                                                                model: {
                                                                  value: t.end_time,
                                                                  callback: function (e) {
                                                                    t.end_time = e;
                                                                  },
                                                                  expression: "end_time",
                                                                },
                                                              },
                                                              [
                                                                a(
                                                                  "div",
                                                                  {
                                                                    staticClass:
                                                                      "row items-center justify-end",
                                                                  },
                                                                  [
                                                                    a("q-btn", {
                                                                      directives: [
                                                                        {
                                                                          name: "close-popup",
                                                                          rawName: "v-close-popup",
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
                                        ]),
                                      }),
                                    ],
                                    1,
                                  ),
                                ],
                                1,
                              ),
                              a("q-separator"),
                              a(
                                "q-item",
                                [
                                  a("q-item-section", { attrs: { avatar: "" } }, [
                                    a("div", { staticClass: "neu-css-before-red-asterisk" }, [
                                      t._v("\r\n                统计对象\r\n              "),
                                    ]),
                                  ]),
                                  a("q-item-section"),
                                  a(
                                    "q-item-section",
                                    { attrs: { side: "" } },
                                    [
                                      a(
                                        "q-item-label",
                                        { staticClass: "row items-center" },
                                        [
                                          a(
                                            "span",
                                            {
                                              directives: [
                                                {
                                                  name: "show",
                                                  rawName: "v-show",
                                                  value:
                                                    !t.task_target || 0 == t.task_target.length,
                                                  expression:
                                                    "!task_target || task_target.length == 0 ",
                                                },
                                              ],
                                              staticClass: "text-grey",
                                              on: {
                                                click: function (e) {
                                                  t.taskTargetDialog = !0;
                                                },
                                              },
                                            },
                                            [t._v("选择")],
                                          ),
                                          a("q-icon", {
                                            directives: [
                                              {
                                                name: "show",
                                                rawName: "v-show",
                                                value: !t.task_target || 0 == t.task_target.length,
                                                expression:
                                                  "!task_target || task_target.length == 0 ",
                                              },
                                            ],
                                            staticClass: "text-grey",
                                            attrs: { name: "keyboard_arrow_right", size: "sm" },
                                          }),
                                          a(
                                            "span",
                                            {
                                              directives: [
                                                {
                                                  name: "show",
                                                  rawName: "v-show",
                                                  value: t.task_target && 0 != t.task_target.length,
                                                  expression:
                                                    "task_target && task_target.length != 0 ",
                                                },
                                              ],
                                              staticClass: "text-primary",
                                              on: {
                                                click: function (e) {
                                                  t.taskTargetDialog = !0;
                                                },
                                              },
                                            },
                                            [t._v("已选择 (" + t._s(t.task_target.length) + ")")],
                                          ),
                                          a("q-icon", {
                                            directives: [
                                              {
                                                name: "show",
                                                rawName: "v-show",
                                                value: t.task_target && 0 != t.task_target.length,
                                                expression:
                                                  "task_target && task_target.length != 0 ",
                                              },
                                            ],
                                            staticClass: "text-primary",
                                            attrs: { name: "keyboard_arrow_right", size: "sm" },
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
                              a("q-separator"),
                              a(
                                "q-item",
                                [
                                  a(
                                    "q-item-section",
                                    { staticClass: "text-white", attrs: { avatar: "" } },
                                    [t._v("自己发布")],
                                  ),
                                  a("q-item-section", [
                                    a(
                                      "div",
                                      { staticClass: "q-gutter-xs" },
                                      [
                                        a("q-checkbox", {
                                          attrs: {
                                            dense: "",
                                            "keep-color": "",
                                            "false-value": "",
                                            "true-value": t.teacher_no,
                                            label: "仅自己发布的",
                                          },
                                          model: {
                                            value: t.loginName,
                                            callback: function (e) {
                                              t.loginName = e;
                                            },
                                            expression: "loginName",
                                          },
                                        }),
                                      ],
                                      1,
                                    ),
                                  ]),
                                ],
                                1,
                              ),
                              a("q-separator"),
                              a("q-item", [
                                a(
                                  "div",
                                  { staticClass: "col text-center" },
                                  [
                                    a("q-btn", {
                                      staticClass: "q-mx-md",
                                      attrs: {
                                        unelevated: "",
                                        color: "primary",
                                        label: "生成统计图",
                                      },
                                      on: { click: t.checkTime },
                                    }),
                                  ],
                                  1,
                                ),
                              ]),
                              a("q-separator"),
                            ],
                            1,
                          ),
                        ],
                        1,
                      ),
                    ],
                    1,
                  ),
                  a("q-separator"),
                  a(
                    "div",
                    {
                      directives: [
                        {
                          name: "show",
                          rawName: "v-show",
                          value: 0 === t.showPic,
                          expression: "showPic === 0",
                        },
                      ],
                      staticClass: "q-py-sm text-center text-grey",
                    },
                    [a("label", [t._v("请选择统计时间和统计学生！")])],
                  ),
                  a(
                    "div",
                    {
                      directives: [
                        {
                          name: "show",
                          rawName: "v-show",
                          value: 1 === t.showPic,
                          expression: "showPic === 1",
                        },
                      ],
                    },
                    [
                      a(
                        "q-tabs",
                        {
                          staticClass: "text-grey",
                          attrs: {
                            dense: "",
                            "active-color": "primary",
                            "indicator-color": "primary",
                            align: "justify",
                            "narrow-indicator": "",
                          },
                          on: { click: t.getApplyAllNum },
                          model: {
                            value: t.applyTab,
                            callback: function (e) {
                              t.applyTab = e;
                            },
                            expression: "applyTab",
                          },
                        },
                        [a("q-tab", { attrs: { name: "generalSituation", label: "年级数据" } })],
                        1,
                      ),
                      a("q-separator"),
                      [
                        a(
                          "div",
                          {
                            directives: [
                              {
                                name: "show",
                                rawName: "v-show",
                                value: "generalSituation" == t.applyTab,
                                expression: "applyTab == 'generalSituation'",
                              },
                            ],
                            staticClass: "text-center q-my-md",
                          },
                          [
                            a("div", { staticClass: "row" }, [
                              a("div", { staticClass: "col" }),
                              a("div", { staticClass: "col-6" }, [
                                a(
                                  "label",
                                  {
                                    staticStyle: {
                                      "font-size": "16px",
                                      color: "#454c5c",
                                      "font-weight": "700",
                                      "margin-top": "10px",
                                    },
                                  },
                                  [t._v("按年级统计" + t._s(t.applyShortTitle) + "人数")],
                                ),
                              ]),
                              a("div", {
                                staticClass: "col row items-center",
                                staticStyle: { float: "right" },
                              }),
                            ]),
                            a("div", {
                              staticStyle: { height: "260px" },
                              attrs: { id: "applyGrade" },
                            }),
                          ],
                        ),
                        a("hr", {
                          directives: [
                            {
                              name: "show",
                              rawName: "v-show",
                              value: "generalSituation" == t.applyTab,
                              expression: "applyTab == 'generalSituation'",
                            },
                          ],
                        }),
                      ],
                      [
                        a(
                          "div",
                          {
                            directives: [
                              {
                                name: "show",
                                rawName: "v-show",
                                value:
                                  "generalSituation" == t.applyTab &&
                                  t.menuInfo &&
                                  "A" === t.menuInfo.view_permit,
                                expression:
                                  "applyTab == 'generalSituation' && menuInfo && menuInfo.view_permit === 'A'",
                              },
                            ],
                            staticClass: "text-center q-my-md",
                          },
                          [
                            a("div", { staticClass: "row" }, [
                              a("div", { staticClass: "col" }),
                              a("div", { staticClass: "col-6" }, [
                                a(
                                  "label",
                                  {
                                    staticStyle: {
                                      "font-size": "16px",
                                      color: "#454c5c",
                                      "font-weight": "700",
                                      "margin-top": "10px",
                                    },
                                  },
                                  [t._v("按院系统计" + t._s(t.applyShortTitle) + "人数")],
                                ),
                              ]),
                              a("div", {
                                staticClass: "col row items-center",
                                staticStyle: { float: "right" },
                              }),
                            ]),
                            a("div", {
                              staticStyle: { height: "260px" },
                              attrs: { id: "applyDep" },
                            }),
                          ],
                        ),
                        a("hr", {
                          directives: [
                            {
                              name: "show",
                              rawName: "v-show",
                              value:
                                "generalSituation" == t.applyTab &&
                                t.menuInfo &&
                                "A" === t.menuInfo.view_permit,
                              expression:
                                "applyTab == 'generalSituation' && menuInfo && menuInfo.view_permit === 'A'",
                            },
                          ],
                        }),
                      ],
                      [
                        a(
                          "div",
                          {
                            directives: [
                              {
                                name: "show",
                                rawName: "v-show",
                                value:
                                  "generalSituation" == t.applyTab &&
                                  t.menuInfo &&
                                  "D" === t.menuInfo.view_permit,
                                expression:
                                  "applyTab == 'generalSituation' && menuInfo && menuInfo.view_permit === 'D'",
                              },
                            ],
                            staticClass: "text-center q-my-md",
                          },
                          [
                            a("div", { staticClass: "row" }, [
                              a("div", { staticClass: "col" }),
                              a("div", { staticClass: "col-6" }, [
                                a(
                                  "label",
                                  {
                                    staticStyle: {
                                      "font-size": "16px",
                                      color: "#454c5c",
                                      "font-weight": "700",
                                      "margin-top": "10px",
                                    },
                                  },
                                  [t._v("按专业统计" + t._s(t.applyShortTitle) + "人数")],
                                ),
                              ]),
                              a("div", {
                                staticClass: "col row items-center",
                                staticStyle: { float: "right" },
                              }),
                            ]),
                            a("div", {
                              staticStyle: { height: "260px" },
                              attrs: { id: "applyMajor" },
                            }),
                          ],
                        ),
                        a("hr", {
                          directives: [
                            {
                              name: "show",
                              rawName: "v-show",
                              value:
                                "generalSituation" == t.applyTab &&
                                t.menuInfo &&
                                "D" === t.menuInfo.view_permit,
                              expression:
                                "applyTab == 'generalSituation' && menuInfo && menuInfo.view_permit === 'D'",
                            },
                          ],
                        }),
                      ],
                      [
                        a(
                          "div",
                          {
                            directives: [
                              {
                                name: "show",
                                rawName: "v-show",
                                value:
                                  "generalSituation" == t.applyTab &&
                                  t.menuInfo &&
                                  "S" === t.menuInfo.view_permit,
                                expression:
                                  "applyTab == 'generalSituation' && menuInfo && menuInfo.view_permit === 'S'",
                              },
                            ],
                            staticClass: "text-center q-my-md",
                          },
                          [
                            a("div", { staticClass: "row" }, [
                              a("div", { staticClass: "col" }),
                              a("div", { staticClass: "col-6" }, [
                                a(
                                  "label",
                                  {
                                    staticStyle: {
                                      "font-size": "16px",
                                      color: "#454c5c",
                                      "font-weight": "700",
                                      "margin-top": "10px",
                                    },
                                  },
                                  [t._v("按年级统计" + t._s(t.applyShortTitle) + "人数")],
                                ),
                              ]),
                              a("div", {
                                staticClass: "col row items-center",
                                staticStyle: { float: "right" },
                              }),
                            ]),
                            a("div", {
                              staticStyle: { height: "260px" },
                              attrs: { id: "applyClass" },
                            }),
                          ],
                        ),
                        a("hr", {
                          directives: [
                            {
                              name: "show",
                              rawName: "v-show",
                              value:
                                "generalSituation" == t.applyTab &&
                                t.menuInfo &&
                                "S" === t.menuInfo.view_permit,
                              expression:
                                "applyTab == 'generalSituation' && menuInfo && menuInfo.view_permit === 'S'",
                            },
                          ],
                        }),
                      ],
                    ],
                    2,
                  ),
                  a(
                    "q-dialog",
                    {
                      attrs: { countRuleShow: "" },
                      model: {
                        value: t.countRuleShow,
                        callback: function (e) {
                          t.countRuleShow = e;
                        },
                        expression: "countRuleShow",
                      },
                    },
                    [
                      a(
                        "q-card",
                        { staticStyle: { "border-radius": "25px" } },
                        [
                          a(
                            "q-item",
                            [
                              a(
                                "q-item-section",
                                { staticClass: "flex flex-center" },
                                [
                                  a("q-item-label", { staticClass: "text-weight-bold" }, [
                                    t._v(t._s(t.ruleTitle)),
                                  ]),
                                ],
                                1,
                              ),
                            ],
                            1,
                          ),
                          a(
                            "q-item",
                            { staticClass: "q-my-sm", attrs: { dense: "" } },
                            [
                              a(
                                "q-item-section",
                                [a("q-item-label", [t._v(t._s(t.ruleMessage))])],
                                1,
                              ),
                            ],
                            1,
                          ),
                          a("q-separator"),
                          a(
                            "q-card-actions",
                            { attrs: { align: "around" } },
                            [
                              a(
                                "q-btn",
                                {
                                  directives: [{ name: "close-popup", rawName: "v-close-popup" }],
                                  attrs: { flat: "", color: "primary" },
                                },
                                [t._v("知道了")],
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
                    "q-dialog",
                    {
                      attrs: { persistent: "", fullWidth: "", maximized: t.maximizedToggle },
                      model: {
                        value: t.taskTargetDialog,
                        callback: function (e) {
                          t.taskTargetDialog = e;
                        },
                        expression: "taskTargetDialog",
                      },
                    },
                    [
                      a(
                        "q-layout",
                        { staticClass: "bg-white", attrs: { view: "lHh lpr lFf", container: "" } },
                        [
                          a(
                            "q-header",
                            { staticClass: "full-width bg-white" },
                            [
                              a("q-toolbar", [
                                a(
                                  "div",
                                  {
                                    staticClass:
                                      "full-width row items-center justify-between q-px-xs q-py-sm",
                                  },
                                  [
                                    a("div", { staticClass: "text-bold text-black" }, [
                                      t._v("设置统计对象"),
                                    ]),
                                    a("q-btn", {
                                      attrs: { unelevated: "", color: "primary", label: "完成" },
                                      on: {
                                        click: function (e) {
                                          t.taskTargetDialog = !1;
                                        },
                                      },
                                    }),
                                  ],
                                  1,
                                ),
                              ]),
                            ],
                            1,
                          ),
                          a(
                            "q-page-container",
                            [
                              a(
                                "q-page",
                                [
                                  a("neu-assign-student", {
                                    attrs: {
                                      permit: t.menuInfo ? t.menuInfo.view_permit : null,
                                      "permit-mode": "V",
                                      "menu-id": t.menuInfo ? t.menuInfo.id : null,
                                    },
                                    model: {
                                      value: t.task_target,
                                      callback: function (e) {
                                        t.task_target = e;
                                      },
                                      expression: "task_target",
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
              ),
            ],
            1,
          );
        },
        tt = [],
        et = {
          name: "ApplyAnalysis",
          components: { NeuAssignStudent: n["a"] },
          props: { applyType: String },
          computed: {
            applyShortTitle() {
              return "A" === this.applyType
                ? "申请"
                : "C" === this.applyType
                  ? "收集"
                  : "S" === this.applyType
                    ? "报名"
                    : "";
            },
          },
          data() {
            return {
              applyTab: "generalSituation",
              countRuleShow: !1,
              ruleTitle: "",
              ruleMessage: "",
              menuInfo: null,
              showPic: 0,
              showExp: !1,
              begin_date: "",
              end_date: "",
              begin_time: "",
              end_time: "",
              task_target: [],
              taskTargetDialog: !1,
              maximizedToggle: !0,
              teacher_no: JSON.parse(window.localStorage.getItem("userinfo")).login_name,
              loginName: "",
            };
          },
          mounted() {
            (this.getApplyAllNum(),
              window.localStorage.getItem("menu") &&
                (this.menuInfo = JSON.parse(window.localStorage.getItem("menu")).find(
                  (t) => "analysis" === t.id,
                )),
              this.getWeekDate());
          },
          methods: {
            getWeekDate() {
              this.$axiosAction("/api/public.api", { action: "queryDefaultStatPeriod" }).then(
                (t) => {
                  0 === t.data.code &&
                    ((this.begin_time = t.data.begin_date),
                    (this.end_time = t.data.end_date),
                    (this.begin_date = t.data.begin_date),
                    (this.end_date = t.data.end_date));
                },
              );
            },
            ApplyRule(t) {
              ("collect" === t &&
                ((this.ruleTitle = "填写率"), (this.ruleMessage = "已填写的人数/总人数")),
                (this.countRuleShow = !0));
            },
            ringPic(t, e, a) {
              const i = document.getElementById(t),
                s = r["a"](i);
              var n = {};
              ((n = {
                tooltip: { trigger: "item", formatter: "{b}:{c}<br>{d}%" },
                legend: { show: !1 },
                series: [
                  {
                    type: "pie",
                    radius: ["40%", "70%"],
                    avoidLabelOverlap: !1,
                    label: { show: !1, position: "center" },
                    emphasis: {
                      label: { show: !0, fontSize: "20", fontWeight: "bold", formatter: a },
                    },
                    labelLine: { show: !1 },
                    data: e,
                  },
                ],
              }),
                n && s.setOption(n, !0));
            },
            columnPic(t, e, a, i) {
              const s = document.getElementById(t),
                n = r["a"](s);
              var l = {};
              ((l = {
                legend: { type: "scroll" },
                tooltip: {},
                dataset: { dimensions: e, source: a },
                xAxis: { axisLabel: { show: !0, interval: "auto", formatter: "{value}" } },
                yAxis: { type: "category" },
                series: i,
              }),
                l && n.setOption(l, !0),
                (window.onresize = function () {
                  (n.resize(),
                    r["a"](document.getElementById("applyGrade")).resize(),
                    r["a"](document.getElementById("applyDep")).resize(),
                    r["a"](document.getElementById("applyMajor")).resize(),
                    r["a"](document.getElementById("applyClass")).resize());
                }));
            },
            getApplyAllNum() {
              0 !== this.begin_time.length &&
                0 !== this.end_time.length &&
                0 !== this.task_target.length &&
                this.$axiosAction("/api/teacher/analysis/analysis.api", {
                  action: "getApplyAllNum",
                  task_target: JSON.stringify(this.task_target),
                  begin_time: this.begin_time,
                  end_time: this.end_time,
                  apply_type: this.applyType,
                  teacher_no: this.loginName,
                })
                  .then((t) => {
                    const e = ["product"],
                      a = { product: "申\n请\n人\n数" },
                      i = [],
                      s = [],
                      n = ["product"],
                      l = { product: "申\n请\n人\n数" },
                      o = [],
                      r = [],
                      c = ["product"],
                      d = { product: "申\n请\n人\n数" },
                      m = [],
                      h = [],
                      u = ["product"],
                      p = { product: "申\n请\n人\n数" },
                      g = [],
                      v = [];
                    if (0 === t.data.code) {
                      for (let i = 0; i < t.data.graderesult.length; i++) {
                        const n = t.data.graderesult[i].grade_name,
                          l = t.data.graderesult[i].gradeapply,
                          o = n + " " + l + "人";
                        (e.push(o), s.push({ type: "bar" }), (a[o] = l));
                      }
                      (i.push(a), this.$q.loading.hide(), this.columnPic("applyGrade", e, i, s));
                      for (let e = 0; e < t.data.depresult.length; e++) {
                        const a = t.data.depresult[e].dep_name,
                          i = t.data.depresult[e].depapply,
                          s = a + " " + i + "人";
                        (n.push(s), r.push({ type: "bar" }), (l[s] = i));
                      }
                      (o.push(l), this.$q.loading.hide(), this.columnPic("applyDep", n, o, r));
                      for (let e = 0; e < t.data.majorresult.length; e++) {
                        const a = t.data.majorresult[e].major_name,
                          i = t.data.majorresult[e].majorapply,
                          s = a + " " + i + "人";
                        (c.push(s), h.push({ type: "bar" }), (d[s] = i));
                      }
                      (m.push(d), this.$q.loading.hide(), this.columnPic("applyMajor", c, m, h));
                      for (let e = 0; e < t.data.classresult.length; e++) {
                        const a = t.data.classresult[e].class_name,
                          i = t.data.classresult[e].classapply,
                          s = a + " " + i + "人";
                        (u.push(s), v.push({ type: "bar" }), (p[s] = i));
                      }
                      (g.push(p), this.$q.loading.hide(), this.columnPic("applyClass", u, g, v));
                    }
                  })
                  .catch((t) => {});
            },
            checkTime() {
              0 === this.begin_time.length &&
              0 === this.end_time.length &&
              0 === this.task_target.length
                ? ((this.showPic = 0),
                  this.$q.notify({
                    color: "red-5",
                    textColor: "white",
                    icon: "warning",
                    message: "请选择统计时间与统计学生！",
                  }))
                : 0 === this.begin_time.length || 0 === this.end_time.length
                  ? ((this.showPic = 0),
                    this.$q.notify({
                      color: "red-5",
                      textColor: "white",
                      icon: "warning",
                      message: "请选择统计时间！",
                    }))
                  : 0 === this.task_target.length
                    ? ((this.showPic = 0),
                      this.$q.notify({
                        color: "red-5",
                        textColor: "white",
                        icon: "warning",
                        message: "请选择统计学生！",
                      }))
                    : this.$axiosAction("/api/teacher/analysis/analysis.api", {
                        action: "checkTime",
                        begin_time: this.begin_time,
                        end_time: this.end_time,
                      }).then((t) => {
                        0 === t.data.code
                          ? ((this.showPic = 1),
                            (this.begin_date = this.begin_time),
                            (this.end_date = this.end_time),
                            this.getApplyAllNum(),
                            this.$q.loading.show(),
                            (this.showExp = !1))
                          : ((this.showPic = 0), (this.begin_date = ""), (this.end_date = ""));
                      });
            },
          },
        },
        at = et,
        it = Object(h["a"])(at, Z, tt, !1, null, null, null),
        st = it.exports;
      (j()(it, "components", {
        QCard: u["a"],
        QExpansionItem: p["a"],
        QList: g["a"],
        QItem: v["a"],
        QItemSection: w["a"],
        QField: _["a"],
        QIcon: y["a"],
        QPopupProxy: b["a"],
        QDate: f["a"],
        QBtn: x["a"],
        QSeparator: C["a"],
        QItemLabel: q["a"],
        QCheckbox: S["a"],
        QTabs: k["a"],
        QTab: T["a"],
        QDialog: N["a"],
        QCardActions: P["a"],
        QLayout: I["a"],
        QHeader: L["a"],
        QToolbar: R["a"],
        QPageContainer: D["a"],
        QPage: A["a"],
      }),
        j()(it, "directives", { ClosePopup: Q["a"] }));
      var nt = function () {
          var t = this,
            e = t.$createElement,
            a = t._self._c || e;
          return a(
            "div",
            [
              a(
                "q-card",
                { staticClass: "bg-white q-mb-sm q-mx-sm", attrs: { flat: "" } },
                [
                  a(
                    "q-expansion-item",
                    {
                      attrs: {
                        "switch-toggle-side": "",
                        "expand-separator": "",
                        icon: "search",
                        label: "检索",
                      },
                      model: {
                        value: t.showExp,
                        callback: function (e) {
                          t.showExp = e;
                        },
                        expression: "showExp",
                      },
                    },
                    [
                      a(
                        "q-card",
                        [
                          a(
                            "q-list",
                            { staticClass: "full-width" },
                            [
                              a(
                                "q-item",
                                [
                                  a("q-item-section", { attrs: { avatar: "" } }, [
                                    a("div", { staticClass: "neu-css-before-red-asterisk" }, [
                                      t._v("\r\n                开始时间\r\n              "),
                                    ]),
                                  ]),
                                  a("q-item-section"),
                                  a(
                                    "q-item-section",
                                    { attrs: { side: "" } },
                                    [
                                      a("q-field", {
                                        staticStyle: { width: "200px" },
                                        attrs: {
                                          outlined: "",
                                          dense: "",
                                          "stack-label": "",
                                          "hide-bottom-space": "",
                                          "lazy-rules": "",
                                          value: t.begin_time,
                                        },
                                        scopedSlots: t._u([
                                          {
                                            key: "control",
                                            fn: function () {
                                              return [t._v(t._s(t.begin_time))];
                                            },
                                            proxy: !0,
                                          },
                                          {
                                            key: "append",
                                            fn: function () {
                                              return [
                                                a(
                                                  "q-icon",
                                                  {
                                                    staticClass: "cursor-pointer",
                                                    attrs: { name: "event" },
                                                  },
                                                  [
                                                    a(
                                                      "q-popup-proxy",
                                                      {
                                                        attrs: {
                                                          "transition-show": "scale",
                                                          "transition-hide": "scale",
                                                        },
                                                      },
                                                      [
                                                        a(
                                                          "div",
                                                          [
                                                            a(
                                                              "q-date",
                                                              {
                                                                attrs: {
                                                                  flat: "",
                                                                  minimal: "",
                                                                  mask: "YYYY-MM-DD",
                                                                },
                                                                model: {
                                                                  value: t.begin_time,
                                                                  callback: function (e) {
                                                                    t.begin_time = e;
                                                                  },
                                                                  expression: "begin_time",
                                                                },
                                                              },
                                                              [
                                                                a(
                                                                  "div",
                                                                  {
                                                                    staticClass:
                                                                      "row items-center justify-end",
                                                                  },
                                                                  [
                                                                    a("q-btn", {
                                                                      directives: [
                                                                        {
                                                                          name: "close-popup",
                                                                          rawName: "v-close-popup",
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
                                        ]),
                                      }),
                                    ],
                                    1,
                                  ),
                                ],
                                1,
                              ),
                              a("q-separator"),
                              a(
                                "q-item",
                                [
                                  a("q-item-section", { attrs: { avatar: "" } }, [
                                    a("div", { staticClass: "neu-css-before-red-asterisk" }, [
                                      t._v("\r\n                结束时间\r\n              "),
                                    ]),
                                  ]),
                                  a("q-item-section"),
                                  a(
                                    "q-item-section",
                                    { attrs: { side: "" } },
                                    [
                                      a("q-field", {
                                        staticStyle: { width: "200px" },
                                        attrs: {
                                          outlined: "",
                                          dense: "",
                                          "stack-label": "",
                                          "hide-bottom-space": "",
                                          "lazy-rules": "",
                                          rules: [
                                            function (e) {
                                              return (
                                                e >= t.begin_time || "截止时间应在开始时间之后"
                                              );
                                            },
                                          ],
                                          value: t.end_time,
                                        },
                                        scopedSlots: t._u([
                                          {
                                            key: "control",
                                            fn: function () {
                                              return [t._v(t._s(t.end_time))];
                                            },
                                            proxy: !0,
                                          },
                                          {
                                            key: "append",
                                            fn: function () {
                                              return [
                                                a(
                                                  "q-icon",
                                                  {
                                                    staticClass: "cursor-pointer",
                                                    attrs: { name: "event" },
                                                  },
                                                  [
                                                    a(
                                                      "q-popup-proxy",
                                                      {
                                                        attrs: {
                                                          "transition-show": "scale",
                                                          "transition-hide": "scale",
                                                        },
                                                      },
                                                      [
                                                        a(
                                                          "div",
                                                          [
                                                            a(
                                                              "q-date",
                                                              {
                                                                attrs: {
                                                                  flat: "",
                                                                  minimal: "",
                                                                  mask: "YYYY-MM-DD",
                                                                },
                                                                model: {
                                                                  value: t.end_time,
                                                                  callback: function (e) {
                                                                    t.end_time = e;
                                                                  },
                                                                  expression: "end_time",
                                                                },
                                                              },
                                                              [
                                                                a(
                                                                  "div",
                                                                  {
                                                                    staticClass:
                                                                      "row items-center justify-end",
                                                                  },
                                                                  [
                                                                    a("q-btn", {
                                                                      directives: [
                                                                        {
                                                                          name: "close-popup",
                                                                          rawName: "v-close-popup",
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
                                        ]),
                                      }),
                                    ],
                                    1,
                                  ),
                                ],
                                1,
                              ),
                              a("q-separator"),
                              a(
                                "q-item",
                                [
                                  a("q-item-section", { attrs: { avatar: "" } }, [
                                    a("div", { staticClass: "neu-css-before-red-asterisk" }, [
                                      t._v("\r\n                统计对象\r\n              "),
                                    ]),
                                  ]),
                                  a("q-item-section"),
                                  a(
                                    "q-item-section",
                                    { attrs: { side: "" } },
                                    [
                                      a(
                                        "q-item-label",
                                        { staticClass: "row items-center" },
                                        [
                                          a(
                                            "span",
                                            {
                                              directives: [
                                                {
                                                  name: "show",
                                                  rawName: "v-show",
                                                  value:
                                                    !t.task_target || 0 == t.task_target.length,
                                                  expression:
                                                    "!task_target || task_target.length == 0 ",
                                                },
                                              ],
                                              staticClass: "text-grey",
                                              on: {
                                                click: function (e) {
                                                  t.taskTargetDialog = !0;
                                                },
                                              },
                                            },
                                            [t._v("选择")],
                                          ),
                                          a("q-icon", {
                                            directives: [
                                              {
                                                name: "show",
                                                rawName: "v-show",
                                                value: !t.task_target || 0 == t.task_target.length,
                                                expression:
                                                  "!task_target || task_target.length == 0 ",
                                              },
                                            ],
                                            staticClass: "text-grey",
                                            attrs: { name: "keyboard_arrow_right", size: "sm" },
                                          }),
                                          a(
                                            "span",
                                            {
                                              directives: [
                                                {
                                                  name: "show",
                                                  rawName: "v-show",
                                                  value: t.task_target && 0 != t.task_target.length,
                                                  expression:
                                                    "task_target && task_target.length != 0 ",
                                                },
                                              ],
                                              staticClass: "text-primary",
                                              on: {
                                                click: function (e) {
                                                  t.taskTargetDialog = !0;
                                                },
                                              },
                                            },
                                            [t._v("已选择 (" + t._s(t.task_target.length) + ")")],
                                          ),
                                          a("q-icon", {
                                            directives: [
                                              {
                                                name: "show",
                                                rawName: "v-show",
                                                value: t.task_target && 0 != t.task_target.length,
                                                expression:
                                                  "task_target && task_target.length != 0 ",
                                              },
                                            ],
                                            staticClass: "text-primary",
                                            attrs: { name: "keyboard_arrow_right", size: "sm" },
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
                              a("q-separator"),
                              a(
                                "q-item",
                                [
                                  a(
                                    "q-item-section",
                                    { staticClass: "text-white", attrs: { avatar: "" } },
                                    [t._v("自己发布")],
                                  ),
                                  a("q-item-section", [
                                    a(
                                      "div",
                                      { staticClass: "q-gutter-xs" },
                                      [
                                        a("q-checkbox", {
                                          attrs: {
                                            dense: "",
                                            "keep-color": "",
                                            "false-value": "",
                                            "true-value": t.teacher_no,
                                            label: "仅自己发布的",
                                          },
                                          model: {
                                            value: t.loginName,
                                            callback: function (e) {
                                              t.loginName = e;
                                            },
                                            expression: "loginName",
                                          },
                                        }),
                                      ],
                                      1,
                                    ),
                                  ]),
                                ],
                                1,
                              ),
                              a("q-separator"),
                              a("q-item", [
                                a(
                                  "div",
                                  { staticClass: "col text-center" },
                                  [
                                    a("q-btn", {
                                      staticClass: "q-mx-md",
                                      attrs: {
                                        unelevated: "",
                                        color: "primary",
                                        label: "生成统计图",
                                      },
                                      on: { click: t.checkTime },
                                    }),
                                  ],
                                  1,
                                ),
                              ]),
                              a("q-separator"),
                            ],
                            1,
                          ),
                        ],
                        1,
                      ),
                    ],
                    1,
                  ),
                  a("q-separator"),
                  a(
                    "div",
                    {
                      directives: [
                        {
                          name: "show",
                          rawName: "v-show",
                          value: 0 === t.showPic,
                          expression: "showPic === 0",
                        },
                      ],
                      staticClass: "q-py-sm text-center text-grey",
                    },
                    [a("label", [t._v("请选择统计时间和统计学生！")])],
                  ),
                  a(
                    "div",
                    {
                      directives: [
                        {
                          name: "show",
                          rawName: "v-show",
                          value: 1 === t.showPic,
                          expression: "showPic === 1",
                        },
                      ],
                    },
                    [
                      a(
                        "q-tabs",
                        {
                          staticClass: "text-grey",
                          attrs: {
                            dense: "",
                            "active-color": "primary",
                            "indicator-color": "primary",
                            align: "justify",
                            "narrow-indicator": "",
                          },
                          on: { click: t.getCollectAllNum },
                          model: {
                            value: t.applyTab,
                            callback: function (e) {
                              t.applyTab = e;
                            },
                            expression: "applyTab",
                          },
                        },
                        [
                          "C" == t.applyType
                            ? a("q-tab", { attrs: { name: "realTime", label: "学生数据" } })
                            : t._e(),
                          a("q-tab", { attrs: { name: "generalSituation", label: "年级数据" } }),
                        ],
                        1,
                      ),
                      a("q-separator"),
                      [
                        "realTime" == t.applyTab && "C" == t.applyType
                          ? a("div", { staticClass: "text-center q-my-md" }, [
                              a("div", { staticClass: "row" }, [
                                a("div", { staticClass: "col" }),
                                a("div", { staticClass: "col-6" }, [
                                  a(
                                    "label",
                                    {
                                      staticStyle: {
                                        "font-size": "16px",
                                        color: "#454c5c",
                                        "font-weight": "700",
                                        "margin-top": "10px",
                                      },
                                    },
                                    [t._v(t._s(t.applyShortTitle) + "率")],
                                  ),
                                ]),
                                a(
                                  "div",
                                  {
                                    staticClass: "col row items-center",
                                    staticStyle: { float: "right" },
                                  },
                                  [
                                    a(
                                      "label",
                                      {
                                        staticClass: "text-right",
                                        staticStyle: { color: "#1E90FF" },
                                        on: {
                                          click: function (e) {
                                            return t.ApplyRule("collect");
                                          },
                                        },
                                      },
                                      [t._v("计算规则>")],
                                    ),
                                  ],
                                ),
                              ]),
                              a("div", {
                                staticStyle: { height: "260px" },
                                attrs: { id: "collects" },
                              }),
                              a(
                                "div",
                                { staticClass: "text-center", staticStyle: { height: "35%" } },
                                t._l(t.collectNumList, function (e) {
                                  return a("div", { key: e.name, staticClass: "row" }, [
                                    a("div", { staticClass: "col" }),
                                    a("div", { staticClass: "row q-mt-sm col-7 justify-bewteen" }, [
                                      a("div", { staticClass: "col-9 row items-center" }, [
                                        a("span", {
                                          staticClass: "q-mx-sm",
                                          staticStyle: {
                                            float: "left",
                                            width: "10px",
                                            height: "10px",
                                            "border-radius": "50px",
                                          },
                                        }),
                                        a("span", { staticClass: "text-grey" }, [t._v("总人数：")]),
                                      ]),
                                      a("div", { staticClass: "col text-grey" }, [
                                        a("label", { staticStyle: { float: "right" } }, [
                                          t._v(t._s(e.total)),
                                        ]),
                                      ]),
                                      a("div", { staticClass: "col-9 row items-center" }, [
                                        a("span", {
                                          staticClass: "q-mx-sm",
                                          staticStyle: {
                                            float: "left",
                                            width: "10px",
                                            height: "10px",
                                            "border-radius": "50px",
                                            background: "#FA8072",
                                          },
                                        }),
                                        a("span", { staticClass: "text-grey" }, [t._v("已收集：")]),
                                      ]),
                                      a("div", { staticClass: "col text-grey" }, [
                                        a("label", { staticStyle: { float: "right" } }, [
                                          t._v(t._s(e.applied)),
                                        ]),
                                      ]),
                                      a("div", { staticClass: "col-9 row items-center" }, [
                                        a("span", {
                                          staticClass: "q-mx-sm",
                                          staticStyle: {
                                            float: "left",
                                            width: "10px",
                                            height: "10px",
                                            "border-radius": "50px",
                                            background: "#33CCFF",
                                          },
                                        }),
                                        a("span", { staticClass: "text-grey" }, [t._v("未收集：")]),
                                      ]),
                                      a("div", { staticClass: "col text-grey" }, [
                                        a("label", { staticStyle: { float: "right" } }, [
                                          t._v(t._s(e.noapply)),
                                        ]),
                                      ]),
                                    ]),
                                    a("div", { staticClass: "col" }),
                                  ]);
                                }),
                                0,
                              ),
                            ])
                          : t._e(),
                      ],
                      [
                        a(
                          "div",
                          {
                            directives: [
                              {
                                name: "show",
                                rawName: "v-show",
                                value: "generalSituation" == t.applyTab,
                                expression: "applyTab == 'generalSituation'",
                              },
                            ],
                            staticClass: "text-center q-my-md",
                          },
                          [
                            a("div", { staticClass: "row" }, [
                              a("div", { staticClass: "col" }),
                              a("div", { staticClass: "col-6" }, [
                                a(
                                  "label",
                                  {
                                    staticStyle: {
                                      "font-size": "16px",
                                      color: "#454c5c",
                                      "font-weight": "700",
                                      "margin-top": "10px",
                                    },
                                  },
                                  [t._v("按年级统计" + t._s(t.applyShortTitle) + "人数")],
                                ),
                              ]),
                              a("div", {
                                staticClass: "col row items-center",
                                staticStyle: { float: "right" },
                              }),
                            ]),
                            a("div", {
                              staticStyle: { height: "260px" },
                              attrs: { id: "collectGrade" },
                            }),
                          ],
                        ),
                        a("hr", {
                          directives: [
                            {
                              name: "show",
                              rawName: "v-show",
                              value: "generalSituation" == t.applyTab,
                              expression: "applyTab == 'generalSituation'",
                            },
                          ],
                        }),
                      ],
                      [
                        a(
                          "div",
                          {
                            directives: [
                              {
                                name: "show",
                                rawName: "v-show",
                                value:
                                  "generalSituation" == t.applyTab &&
                                  t.menuInfo &&
                                  "A" === t.menuInfo.view_permit,
                                expression:
                                  "applyTab == 'generalSituation' && menuInfo && menuInfo.view_permit === 'A'",
                              },
                            ],
                            staticClass: "text-center q-my-md",
                          },
                          [
                            a("div", { staticClass: "row" }, [
                              a("div", { staticClass: "col" }),
                              a("div", { staticClass: "col-6" }, [
                                a(
                                  "label",
                                  {
                                    staticStyle: {
                                      "font-size": "16px",
                                      color: "#454c5c",
                                      "font-weight": "700",
                                      "margin-top": "10px",
                                    },
                                  },
                                  [t._v("按院系统计" + t._s(t.applyShortTitle) + "人数")],
                                ),
                              ]),
                              a("div", {
                                staticClass: "col row items-center",
                                staticStyle: { float: "right" },
                              }),
                            ]),
                            a("div", {
                              staticStyle: { height: "260px" },
                              attrs: { id: "collectDep" },
                            }),
                          ],
                        ),
                        a("hr", {
                          directives: [
                            {
                              name: "show",
                              rawName: "v-show",
                              value:
                                "generalSituation" == t.applyTab &&
                                t.menuInfo &&
                                "A" === t.menuInfo.view_permit,
                              expression:
                                "applyTab == 'generalSituation' && menuInfo && menuInfo.view_permit === 'A'",
                            },
                          ],
                        }),
                      ],
                      [
                        a(
                          "div",
                          {
                            directives: [
                              {
                                name: "show",
                                rawName: "v-show",
                                value:
                                  "generalSituation" == t.applyTab &&
                                  t.menuInfo &&
                                  "D" === t.menuInfo.view_permit,
                                expression:
                                  "applyTab == 'generalSituation' && menuInfo && menuInfo.view_permit === 'D'",
                              },
                            ],
                            staticClass: "text-center q-my-md",
                          },
                          [
                            a("div", { staticClass: "row" }, [
                              a("div", { staticClass: "col" }),
                              a("div", { staticClass: "col-6" }, [
                                a(
                                  "label",
                                  {
                                    staticStyle: {
                                      "font-size": "16px",
                                      color: "#454c5c",
                                      "font-weight": "700",
                                      "margin-top": "10px",
                                    },
                                  },
                                  [t._v("按专业统计" + t._s(t.applyShortTitle) + "人数")],
                                ),
                              ]),
                              a("div", {
                                staticClass: "col row items-center",
                                staticStyle: { float: "right" },
                              }),
                            ]),
                            a("div", {
                              staticStyle: { height: "260px" },
                              attrs: { id: "collectMajor" },
                            }),
                          ],
                        ),
                        a("hr", {
                          directives: [
                            {
                              name: "show",
                              rawName: "v-show",
                              value:
                                "generalSituation" == t.applyTab &&
                                t.menuInfo &&
                                "D" === t.menuInfo.view_permit,
                              expression:
                                "applyTab == 'generalSituation' && menuInfo && menuInfo.view_permit === 'D'",
                            },
                          ],
                        }),
                      ],
                      [
                        a(
                          "div",
                          {
                            directives: [
                              {
                                name: "show",
                                rawName: "v-show",
                                value:
                                  "generalSituation" == t.applyTab &&
                                  t.menuInfo &&
                                  "S" === t.menuInfo.view_permit,
                                expression:
                                  "applyTab == 'generalSituation' && menuInfo && menuInfo.view_permit === 'S'",
                              },
                            ],
                            staticClass: "text-center q-my-md",
                          },
                          [
                            a("div", { staticClass: "row" }, [
                              a("div", { staticClass: "col" }),
                              a("div", { staticClass: "col-6" }, [
                                a(
                                  "label",
                                  {
                                    staticStyle: {
                                      "font-size": "16px",
                                      color: "#454c5c",
                                      "font-weight": "700",
                                      "margin-top": "10px",
                                    },
                                  },
                                  [t._v("按班级统计" + t._s(t.applyShortTitle) + "人数")],
                                ),
                              ]),
                              a("div", {
                                staticClass: "col row items-center",
                                staticStyle: { float: "right" },
                              }),
                            ]),
                            a("div", {
                              staticStyle: { height: "260px" },
                              attrs: { id: "collectClass" },
                            }),
                          ],
                        ),
                        a("hr", {
                          directives: [
                            {
                              name: "show",
                              rawName: "v-show",
                              value:
                                "generalSituation" == t.applyTab &&
                                t.menuInfo &&
                                "S" === t.menuInfo.view_permit,
                              expression:
                                "applyTab == 'generalSituation' && menuInfo && menuInfo.view_permit === 'S'",
                            },
                          ],
                        }),
                      ],
                    ],
                    2,
                  ),
                  a(
                    "q-dialog",
                    {
                      attrs: { countRuleShow: "" },
                      model: {
                        value: t.countRuleShow,
                        callback: function (e) {
                          t.countRuleShow = e;
                        },
                        expression: "countRuleShow",
                      },
                    },
                    [
                      a(
                        "q-card",
                        { staticStyle: { "border-radius": "25px" } },
                        [
                          a(
                            "q-item",
                            [
                              a(
                                "q-item-section",
                                { staticClass: "flex flex-center" },
                                [
                                  a("q-item-label", { staticClass: "text-weight-bold" }, [
                                    t._v(t._s(t.ruleTitle)),
                                  ]),
                                ],
                                1,
                              ),
                            ],
                            1,
                          ),
                          a(
                            "q-item",
                            { staticClass: "q-my-sm", attrs: { dense: "" } },
                            [
                              a(
                                "q-item-section",
                                [a("q-item-label", [t._v(t._s(t.ruleMessage))])],
                                1,
                              ),
                            ],
                            1,
                          ),
                          a("q-separator"),
                          a(
                            "q-card-actions",
                            { attrs: { align: "around" } },
                            [
                              a(
                                "q-btn",
                                {
                                  directives: [{ name: "close-popup", rawName: "v-close-popup" }],
                                  attrs: { flat: "", color: "primary" },
                                },
                                [t._v("知道了")],
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
                    "q-dialog",
                    {
                      attrs: { persistent: "", fullWidth: "", maximized: t.maximizedToggle },
                      model: {
                        value: t.taskTargetDialog,
                        callback: function (e) {
                          t.taskTargetDialog = e;
                        },
                        expression: "taskTargetDialog",
                      },
                    },
                    [
                      a(
                        "q-layout",
                        { staticClass: "bg-white", attrs: { view: "lHh lpr lFf", container: "" } },
                        [
                          a(
                            "q-header",
                            { staticClass: "full-width bg-white" },
                            [
                              a("q-toolbar", [
                                a(
                                  "div",
                                  {
                                    staticClass:
                                      "full-width row items-center justify-between q-px-xs q-py-sm",
                                  },
                                  [
                                    a("div", { staticClass: "text-bold text-black" }, [
                                      t._v("设置统计对象"),
                                    ]),
                                    a("q-btn", {
                                      attrs: { unelevated: "", color: "primary", label: "完成" },
                                      on: {
                                        click: function (e) {
                                          t.taskTargetDialog = !1;
                                        },
                                      },
                                    }),
                                  ],
                                  1,
                                ),
                              ]),
                            ],
                            1,
                          ),
                          a(
                            "q-page-container",
                            [
                              a(
                                "q-page",
                                [
                                  a("neu-assign-student", {
                                    attrs: {
                                      permit: t.menuInfo ? t.menuInfo.view_permit : null,
                                      "permit-mode": "V",
                                      "menu-id": t.menuInfo ? t.menuInfo.id : null,
                                    },
                                    model: {
                                      value: t.task_target,
                                      callback: function (e) {
                                        t.task_target = e;
                                      },
                                      expression: "task_target",
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
              ),
            ],
            1,
          );
        },
        lt = [],
        ot = {
          name: "ApplyAnalysis",
          props: { applyType: String },
          components: { NeuAssignStudent: n["a"] },
          computed: {
            applyShortTitle() {
              return "A" === this.applyType
                ? "申请"
                : "C" === this.applyType
                  ? "收集"
                  : "S" === this.applyType
                    ? "报名"
                    : "";
            },
          },
          data() {
            return {
              applyTab: "generalSituation",
              collectNumList: [],
              collectAllNum: 0,
              collectEdNum: 0,
              nocollectNum: 0,
              countRuleShow: !1,
              ruleTitle: "",
              ruleMessage: "",
              menuInfo: null,
              showPic: 0,
              showExp: !1,
              begin_date: "",
              end_date: "",
              begin_time: "",
              end_time: "",
              task_target: [],
              taskTargetDialog: !1,
              maximizedToggle: !0,
              teacher_no: JSON.parse(window.localStorage.getItem("userinfo")).login_name,
              loginName: "",
            };
          },
          mounted() {
            (window.localStorage.getItem("menu") &&
              (this.menuInfo = JSON.parse(window.localStorage.getItem("menu")).find(
                (t) => "analysis" === t.id,
              )),
              this.getWeekDate());
          },
          methods: {
            getWeekDate() {
              this.$axiosAction("/api/public.api", { action: "queryDefaultStatPeriod" }).then(
                (t) => {
                  0 === t.data.code &&
                    ((this.begin_time = t.data.begin_date),
                    (this.end_time = t.data.end_date),
                    (this.begin_date = t.data.begin_date),
                    (this.end_date = t.data.end_date));
                },
              );
            },
            ApplyRule(t) {
              ("collect" === t &&
                ((this.ruleTitle = "填写率"), (this.ruleMessage = "已填写的人数/总人数")),
                (this.countRuleShow = !0));
            },
            ringPic(t, e, a) {
              const i = document.getElementById(t),
                s = r["a"](i);
              var n = {};
              ((n = {
                tooltip: { trigger: "item", formatter: "{b}:{c}<br>{d}%" },
                legend: { show: !1 },
                series: [
                  {
                    type: "pie",
                    radius: ["40%", "70%"],
                    avoidLabelOverlap: !1,
                    label: {
                      show: !0,
                      position: "center",
                      formatter: function () {
                        return a;
                      },
                      textStyle: { fontSize: 20, fontWeight: "bold" },
                    },
                    labelLine: { show: !1 },
                    data: e,
                  },
                ],
              }),
                n && s.setOption(n),
                (window.onresize = function () {
                  (s.resize(), r["a"](document.getElementById("collects")).resize());
                }));
            },
            columnPic(t, e, a, i) {
              const s = document.getElementById(t),
                n = r["a"](s);
              var l = {};
              ((l = {
                legend: { type: "scroll" },
                tooltip: {},
                dataset: { dimensions: e, source: a },
                xAxis: { axisLabel: { show: !0, interval: "auto", formatter: "{value}" } },
                yAxis: { type: "category" },
                series: i,
              }),
                l && n.setOption(l, !0),
                (window.onresize = function () {
                  (n.resize(),
                    r["a"](document.getElementById("collectGrade")).resize(),
                    r["a"](document.getElementById("collectDep")).resize(),
                    r["a"](document.getElementById("collectMajor")).resize(),
                    r["a"](document.getElementById("collectClass")).resize());
                }));
            },
            getCollectAllNum() {
              0 !== this.begin_time.length &&
              0 !== this.end_time.length &&
              0 !== this.task_target.length
                ? this.$axiosAction("/api/teacher/analysis/analysis.api", {
                    action: "getApplyAllNum",
                    task_target: JSON.stringify(this.task_target),
                    begin_time: this.begin_time,
                    end_time: this.end_time,
                    apply_type: this.applyType,
                    teacher_no: this.loginName,
                  })
                    .then((t) => {
                      const e = [],
                        a = ["product"],
                        i = { product: "收\n集\n人\n数" },
                        s = [],
                        n = [],
                        l = ["product"],
                        o = { product: "收\n集\n人\n数" },
                        r = [],
                        c = [],
                        d = ["product"],
                        m = { product: "收\n集\n人\n数" },
                        h = [],
                        u = [],
                        p = ["product"],
                        g = { product: "收\n集\n人\n数" },
                        v = [],
                        w = [];
                      if (0 === t.data.code)
                        if ("realTime" === this.applyTab) {
                          this.collectNumList = t.data.collectResult;
                          for (let i = 0; i < t.data.collectResult.length; i++)
                            (e.push(
                              {
                                name: "已收集人数",
                                value: t.data.collectResult[i].applied,
                                itemStyle: { color: "#FA8072" },
                              },
                              {
                                name: "未收集人数",
                                value: t.data.collectResult[i].noapply,
                                itemStyle: { color: "#33CCFF" },
                              },
                            ),
                              (this.collectAllNum = t.data.collectResult[i].total),
                              (this.collectEdNum = t.data.collectResult[i].applied));
                          const a =
                            this.percent(this.collectEdNum, this.collectAllNum) + "%\n收集率";
                          (this.$q.loading.hide(), this.ringPic("collects", e, a));
                        } else {
                          for (let e = 0; e < t.data.graderesult.length; e++) {
                            const s = t.data.graderesult[e].grade_name,
                              l = t.data.graderesult[e].gradeapply,
                              o = s + " " + l + "人";
                            (a.push(o), n.push({ type: "bar" }), (i[o] = l));
                          }
                          (s.push(i),
                            this.columnPic("collectGrade", a, s, n),
                            this.$q.loading.hide());
                          for (let e = 0; e < t.data.depresult.length; e++) {
                            const a = t.data.depresult[e].dep_name,
                              i = t.data.depresult[e].depapply,
                              s = a + " " + i + "人";
                            (l.push(s), c.push({ type: "bar" }), (o[s] = i));
                          }
                          (r.push(o),
                            this.$q.loading.hide(),
                            this.columnPic("collectDep", l, r, c));
                          for (let e = 0; e < t.data.majorresult.length; e++) {
                            const a = t.data.majorresult[e].major_name,
                              i = t.data.majorresult[e].majorapply,
                              s = a + " " + i + "人";
                            (d.push(s), u.push({ type: "bar" }), (m[s] = i));
                          }
                          (h.push(m),
                            this.$q.loading.hide(),
                            this.columnPic("collectMajor", d, h, u));
                          for (let e = 0; e < t.data.classresult.length; e++) {
                            const a = t.data.classresult[e].class_name,
                              i = t.data.classresult[e].classapply,
                              s = a + " " + i + "人";
                            (p.push(s), w.push({ type: "bar" }), (g[s] = i));
                          }
                          (v.push(g),
                            this.$q.loading.hide(),
                            this.columnPic("collectClass", p, v, w));
                        }
                    })
                    .catch((t) => {
                      this.collectNumList = [];
                    })
                : (this.collectNumList = []);
            },
            percent(t, e) {
              return 0 === t || 0 === e ? 0 : Math.round((t / e) * 1e4) / 100;
            },
            checkTime() {
              0 === this.begin_time.length &&
              0 === this.end_time.length &&
              0 === this.task_target.length
                ? ((this.showPic = 0),
                  this.$q.notify({
                    color: "red-5",
                    textColor: "white",
                    icon: "warning",
                    message: "请选择统计时间与统计学生！",
                  }))
                : 0 === this.begin_time.length || 0 === this.end_time.length
                  ? ((this.showPic = 0),
                    this.$q.notify({
                      color: "red-5",
                      textColor: "white",
                      icon: "warning",
                      message: "请选择统计时间！",
                    }))
                  : 0 === this.task_target.length
                    ? ((this.showPic = 0),
                      this.$q.notify({
                        color: "red-5",
                        textColor: "white",
                        icon: "warning",
                        message: "请选择统计学生！",
                      }))
                    : this.$axiosAction("/api/teacher/analysis/analysis.api", {
                        action: "checkTime",
                        begin_time: this.begin_time,
                        end_time: this.end_time,
                      }).then((t) => {
                        0 === t.data.code
                          ? ((this.showPic = 1),
                            (this.begin_date = this.begin_time),
                            (this.end_date = this.end_time),
                            this.getCollectAllNum(),
                            this.$q.loading.show(),
                            (this.showExp = !1))
                          : ((this.showPic = 0), (this.begin_date = ""), (this.end_date = ""));
                      });
            },
          },
        },
        rt = ot,
        ct = Object(h["a"])(rt, nt, lt, !1, null, null, null),
        dt = ct.exports;
      (j()(ct, "components", {
        QCard: u["a"],
        QExpansionItem: p["a"],
        QList: g["a"],
        QItem: v["a"],
        QItemSection: w["a"],
        QField: _["a"],
        QIcon: y["a"],
        QPopupProxy: b["a"],
        QDate: f["a"],
        QBtn: x["a"],
        QSeparator: C["a"],
        QItemLabel: q["a"],
        QCheckbox: S["a"],
        QTabs: k["a"],
        QTab: T["a"],
        QDialog: N["a"],
        QCardActions: P["a"],
        QLayout: I["a"],
        QHeader: L["a"],
        QToolbar: R["a"],
        QPageContainer: D["a"],
        QPage: A["a"],
      }),
        j()(ct, "directives", { ClosePopup: Q["a"] }));
      var mt = function () {
          var t = this,
            e = t.$createElement,
            a = t._self._c || e;
          return a(
            "div",
            [
              a(
                "q-card",
                { staticClass: "bg-white q-mb-sm q-mx-sm", attrs: { flat: "" } },
                [
                  a(
                    "q-expansion-item",
                    {
                      attrs: {
                        "switch-toggle-side": "",
                        "expand-separator": "",
                        icon: "search",
                        label: "检索",
                      },
                      model: {
                        value: t.showExp,
                        callback: function (e) {
                          t.showExp = e;
                        },
                        expression: "showExp",
                      },
                    },
                    [
                      a(
                        "q-card",
                        [
                          a(
                            "q-list",
                            { staticClass: "full-width" },
                            [
                              a(
                                "q-item",
                                [
                                  a("q-item-section", { attrs: { avatar: "" } }, [
                                    a("div", { staticClass: "neu-css-before-red-asterisk" }, [
                                      t._v("\r\n                开始时间\r\n              "),
                                    ]),
                                  ]),
                                  a("q-item-section"),
                                  a(
                                    "q-item-section",
                                    { attrs: { side: "" } },
                                    [
                                      a("q-field", {
                                        staticStyle: { width: "200px" },
                                        attrs: {
                                          outlined: "",
                                          dense: "",
                                          "stack-label": "",
                                          "hide-bottom-space": "",
                                          "lazy-rules": "",
                                          value: t.begin_time,
                                        },
                                        scopedSlots: t._u([
                                          {
                                            key: "control",
                                            fn: function () {
                                              return [t._v(t._s(t.begin_time))];
                                            },
                                            proxy: !0,
                                          },
                                          {
                                            key: "append",
                                            fn: function () {
                                              return [
                                                a(
                                                  "q-icon",
                                                  {
                                                    staticClass: "cursor-pointer",
                                                    attrs: { name: "event" },
                                                  },
                                                  [
                                                    a(
                                                      "q-popup-proxy",
                                                      {
                                                        attrs: {
                                                          "transition-show": "scale",
                                                          "transition-hide": "scale",
                                                        },
                                                      },
                                                      [
                                                        a(
                                                          "div",
                                                          [
                                                            a(
                                                              "q-date",
                                                              {
                                                                attrs: {
                                                                  flat: "",
                                                                  minimal: "",
                                                                  mask: "YYYY-MM-DD",
                                                                },
                                                                model: {
                                                                  value: t.begin_time,
                                                                  callback: function (e) {
                                                                    t.begin_time = e;
                                                                  },
                                                                  expression: "begin_time",
                                                                },
                                                              },
                                                              [
                                                                a(
                                                                  "div",
                                                                  {
                                                                    staticClass:
                                                                      "row items-center justify-end",
                                                                  },
                                                                  [
                                                                    a("q-btn", {
                                                                      directives: [
                                                                        {
                                                                          name: "close-popup",
                                                                          rawName: "v-close-popup",
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
                                        ]),
                                      }),
                                    ],
                                    1,
                                  ),
                                ],
                                1,
                              ),
                              a("q-separator"),
                              a(
                                "q-item",
                                [
                                  a("q-item-section", { attrs: { avatar: "" } }, [
                                    a("div", { staticClass: "neu-css-before-red-asterisk" }, [
                                      t._v("\r\n                结束时间\r\n              "),
                                    ]),
                                  ]),
                                  a("q-item-section"),
                                  a(
                                    "q-item-section",
                                    { attrs: { side: "" } },
                                    [
                                      a("q-field", {
                                        staticStyle: { width: "200px" },
                                        attrs: {
                                          outlined: "",
                                          dense: "",
                                          "stack-label": "",
                                          "hide-bottom-space": "",
                                          "lazy-rules": "",
                                          rules: [
                                            function (e) {
                                              return (
                                                e >= t.begin_time || "截止时间应在开始时间之后"
                                              );
                                            },
                                          ],
                                          value: t.end_time,
                                        },
                                        scopedSlots: t._u([
                                          {
                                            key: "control",
                                            fn: function () {
                                              return [t._v(t._s(t.end_time))];
                                            },
                                            proxy: !0,
                                          },
                                          {
                                            key: "append",
                                            fn: function () {
                                              return [
                                                a(
                                                  "q-icon",
                                                  {
                                                    staticClass: "cursor-pointer",
                                                    attrs: { name: "event" },
                                                  },
                                                  [
                                                    a(
                                                      "q-popup-proxy",
                                                      {
                                                        attrs: {
                                                          "transition-show": "scale",
                                                          "transition-hide": "scale",
                                                        },
                                                      },
                                                      [
                                                        a(
                                                          "div",
                                                          [
                                                            a(
                                                              "q-date",
                                                              {
                                                                attrs: {
                                                                  flat: "",
                                                                  minimal: "",
                                                                  mask: "YYYY-MM-DD",
                                                                },
                                                                model: {
                                                                  value: t.end_time,
                                                                  callback: function (e) {
                                                                    t.end_time = e;
                                                                  },
                                                                  expression: "end_time",
                                                                },
                                                              },
                                                              [
                                                                a(
                                                                  "div",
                                                                  {
                                                                    staticClass:
                                                                      "row items-center justify-end",
                                                                  },
                                                                  [
                                                                    a("q-btn", {
                                                                      directives: [
                                                                        {
                                                                          name: "close-popup",
                                                                          rawName: "v-close-popup",
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
                                        ]),
                                      }),
                                    ],
                                    1,
                                  ),
                                ],
                                1,
                              ),
                              a("q-separator"),
                              a(
                                "q-item",
                                [
                                  a("q-item-section", { attrs: { avatar: "" } }, [
                                    a("div", { staticClass: "neu-css-before-red-asterisk" }, [
                                      t._v("\r\n                统计对象\r\n              "),
                                    ]),
                                  ]),
                                  a("q-item-section"),
                                  a(
                                    "q-item-section",
                                    { attrs: { side: "" } },
                                    [
                                      a(
                                        "q-item-label",
                                        { staticClass: "row items-center" },
                                        [
                                          a(
                                            "span",
                                            {
                                              directives: [
                                                {
                                                  name: "show",
                                                  rawName: "v-show",
                                                  value:
                                                    !t.task_target || 0 == t.task_target.length,
                                                  expression:
                                                    "!task_target || task_target.length == 0 ",
                                                },
                                              ],
                                              staticClass: "text-grey",
                                              on: {
                                                click: function (e) {
                                                  t.taskTargetDialog = !0;
                                                },
                                              },
                                            },
                                            [t._v("选择")],
                                          ),
                                          a("q-icon", {
                                            directives: [
                                              {
                                                name: "show",
                                                rawName: "v-show",
                                                value: !t.task_target || 0 == t.task_target.length,
                                                expression:
                                                  "!task_target || task_target.length == 0 ",
                                              },
                                            ],
                                            staticClass: "text-grey",
                                            attrs: { name: "keyboard_arrow_right", size: "sm" },
                                          }),
                                          a(
                                            "span",
                                            {
                                              directives: [
                                                {
                                                  name: "show",
                                                  rawName: "v-show",
                                                  value: t.task_target && 0 != t.task_target.length,
                                                  expression:
                                                    "task_target && task_target.length != 0 ",
                                                },
                                              ],
                                              staticClass: "text-primary",
                                              on: {
                                                click: function (e) {
                                                  t.taskTargetDialog = !0;
                                                },
                                              },
                                            },
                                            [t._v("已选择 (" + t._s(t.task_target.length) + ")")],
                                          ),
                                          a("q-icon", {
                                            directives: [
                                              {
                                                name: "show",
                                                rawName: "v-show",
                                                value: t.task_target && 0 != t.task_target.length,
                                                expression:
                                                  "task_target && task_target.length != 0 ",
                                              },
                                            ],
                                            staticClass: "text-primary",
                                            attrs: { name: "keyboard_arrow_right", size: "sm" },
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
                              a("q-separator"),
                              a(
                                "q-item",
                                [
                                  a(
                                    "q-item-section",
                                    { staticClass: "text-white", attrs: { avatar: "" } },
                                    [t._v("自己发布")],
                                  ),
                                  a("q-item-section", [
                                    a(
                                      "div",
                                      { staticClass: "q-gutter-xs" },
                                      [
                                        a("q-checkbox", {
                                          attrs: {
                                            dense: "",
                                            "keep-color": "",
                                            "false-value": "",
                                            "true-value": t.teacher_no,
                                            label: "仅自己发布的",
                                          },
                                          model: {
                                            value: t.loginName,
                                            callback: function (e) {
                                              t.loginName = e;
                                            },
                                            expression: "loginName",
                                          },
                                        }),
                                      ],
                                      1,
                                    ),
                                  ]),
                                ],
                                1,
                              ),
                              a("q-separator"),
                              a("q-item", [
                                a(
                                  "div",
                                  { staticClass: "col text-center" },
                                  [
                                    a("q-btn", {
                                      staticClass: "q-mx-md",
                                      attrs: {
                                        unelevated: "",
                                        color: "primary",
                                        label: "生成统计图",
                                      },
                                      on: { click: t.checkTime },
                                    }),
                                  ],
                                  1,
                                ),
                              ]),
                              a("q-separator"),
                            ],
                            1,
                          ),
                        ],
                        1,
                      ),
                    ],
                    1,
                  ),
                  a("q-separator"),
                  a(
                    "div",
                    {
                      directives: [
                        {
                          name: "show",
                          rawName: "v-show",
                          value: 0 === t.showPic,
                          expression: "showPic === 0",
                        },
                      ],
                      staticClass: "q-py-sm text-center text-grey",
                    },
                    [a("label", [t._v("请选择统计时间和统计学生！")])],
                  ),
                  a(
                    "div",
                    {
                      directives: [
                        {
                          name: "show",
                          rawName: "v-show",
                          value: 1 === t.showPic,
                          expression: "showPic === 1",
                        },
                      ],
                    },
                    [
                      a(
                        "q-tabs",
                        {
                          staticClass: "text-grey",
                          attrs: {
                            dense: "",
                            "active-color": "primary",
                            "indicator-color": "primary",
                            align: "justify",
                            "narrow-indicator": "",
                          },
                          on: { click: t.getSignupAllNum },
                          model: {
                            value: t.applyTab,
                            callback: function (e) {
                              t.applyTab = e;
                            },
                            expression: "applyTab",
                          },
                        },
                        [a("q-tab", { attrs: { name: "generalSituation", label: "年级数据" } })],
                        1,
                      ),
                      a("q-separator"),
                      [
                        a(
                          "div",
                          {
                            directives: [
                              {
                                name: "show",
                                rawName: "v-show",
                                value: "generalSituation" == t.applyTab,
                                expression: "applyTab == 'generalSituation'",
                              },
                            ],
                            staticClass: "text-center q-my-md",
                          },
                          [
                            a("div", { staticClass: "row" }, [
                              a("div", { staticClass: "col" }),
                              a("div", { staticClass: "col-6" }, [
                                a(
                                  "label",
                                  {
                                    staticStyle: {
                                      "font-size": "16px",
                                      color: "#454c5c",
                                      "font-weight": "700",
                                      "margin-top": "10px",
                                    },
                                  },
                                  [t._v("按年级统计" + t._s(t.applyShortTitle) + "人数")],
                                ),
                              ]),
                              a("div", {
                                staticClass: "col row items-center",
                                staticStyle: { float: "right" },
                              }),
                            ]),
                            a("div", {
                              staticStyle: { height: "260px" },
                              attrs: { id: "signupGrade" },
                            }),
                          ],
                        ),
                        a("hr", {
                          directives: [
                            {
                              name: "show",
                              rawName: "v-show",
                              value: "generalSituation" == t.applyTab,
                              expression: "applyTab == 'generalSituation'",
                            },
                          ],
                        }),
                      ],
                      [
                        a(
                          "div",
                          {
                            directives: [
                              {
                                name: "show",
                                rawName: "v-show",
                                value:
                                  "generalSituation" == t.applyTab &&
                                  t.menuInfo &&
                                  "A" === t.menuInfo.view_permit,
                                expression:
                                  "applyTab == 'generalSituation' && menuInfo && menuInfo.view_permit === 'A'",
                              },
                            ],
                            staticClass: "text-center q-my-md",
                          },
                          [
                            a("div", { staticClass: "row" }, [
                              a("div", { staticClass: "col" }),
                              a("div", { staticClass: "col-6" }, [
                                a(
                                  "label",
                                  {
                                    staticStyle: {
                                      "font-size": "16px",
                                      color: "#454c5c",
                                      "font-weight": "700",
                                      "margin-top": "10px",
                                    },
                                  },
                                  [t._v("按院系统计" + t._s(t.applyShortTitle) + "人数")],
                                ),
                              ]),
                              a("div", {
                                staticClass: "col row items-center",
                                staticStyle: { float: "right" },
                              }),
                            ]),
                            a("div", {
                              staticStyle: { height: "260px" },
                              attrs: { id: "signupDep" },
                            }),
                          ],
                        ),
                        a("hr", {
                          directives: [
                            {
                              name: "show",
                              rawName: "v-show",
                              value:
                                "generalSituation" == t.applyTab &&
                                t.menuInfo &&
                                "A" === t.menuInfo.view_permit,
                              expression:
                                "applyTab == 'generalSituation' && menuInfo && menuInfo.view_permit === 'A'",
                            },
                          ],
                        }),
                      ],
                      [
                        a(
                          "div",
                          {
                            directives: [
                              {
                                name: "show",
                                rawName: "v-show",
                                value:
                                  "generalSituation" == t.applyTab &&
                                  t.menuInfo &&
                                  "D" === t.menuInfo.view_permit,
                                expression:
                                  "applyTab == 'generalSituation' && menuInfo &&menuInfo.view_permit === 'D'",
                              },
                            ],
                            staticClass: "text-center q-my-md",
                          },
                          [
                            a("div", { staticClass: "row" }, [
                              a("div", { staticClass: "col" }),
                              a("div", { staticClass: "col-6" }, [
                                a(
                                  "label",
                                  {
                                    staticStyle: {
                                      "font-size": "16px",
                                      color: "#454c5c",
                                      "font-weight": "700",
                                      "margin-top": "10px",
                                    },
                                  },
                                  [t._v("按专业统计" + t._s(t.applyShortTitle) + "人数")],
                                ),
                              ]),
                              a("div", {
                                staticClass: "col row items-center",
                                staticStyle: { float: "right" },
                              }),
                            ]),
                            a("div", {
                              staticStyle: { height: "260px" },
                              attrs: { id: "signupMajor" },
                            }),
                          ],
                        ),
                        a("hr", {
                          directives: [
                            {
                              name: "show",
                              rawName: "v-show",
                              value:
                                "generalSituation" == t.applyTab &&
                                t.menuInfo &&
                                "D" === t.menuInfo.view_permit,
                              expression:
                                "applyTab == 'generalSituation' && menuInfo && menuInfo.view_permit === 'D'",
                            },
                          ],
                        }),
                      ],
                      [
                        a(
                          "div",
                          {
                            directives: [
                              {
                                name: "show",
                                rawName: "v-show",
                                value:
                                  "generalSituation" == t.applyTab &&
                                  t.menuInfo &&
                                  "S" === t.menuInfo.view_permit,
                                expression:
                                  "applyTab == 'generalSituation' && menuInfo && menuInfo.view_permit === 'S'",
                              },
                            ],
                            staticClass: "text-center q-my-md",
                          },
                          [
                            a("div", { staticClass: "row" }, [
                              a("div", { staticClass: "col" }),
                              a("div", { staticClass: "col-6" }, [
                                a(
                                  "label",
                                  {
                                    staticStyle: {
                                      "font-size": "16px",
                                      color: "#454c5c",
                                      "font-weight": "700",
                                      "margin-top": "10px",
                                    },
                                  },
                                  [t._v("按年级统计" + t._s(t.applyShortTitle) + "人数")],
                                ),
                              ]),
                              a("div", {
                                staticClass: "col row items-center",
                                staticStyle: { float: "right" },
                              }),
                            ]),
                            a("div", {
                              staticStyle: { height: "260px" },
                              attrs: { id: "signupClass" },
                            }),
                          ],
                        ),
                        a("hr", {
                          directives: [
                            {
                              name: "show",
                              rawName: "v-show",
                              value:
                                "generalSituation" == t.applyTab &&
                                t.menuInfo &&
                                "S" === t.menuInfo.view_permit,
                              expression:
                                "applyTab == 'generalSituation' && menuInfo && menuInfo.view_permit === 'S'",
                            },
                          ],
                        }),
                      ],
                    ],
                    2,
                  ),
                  a(
                    "q-dialog",
                    {
                      attrs: { countRuleShow: "" },
                      model: {
                        value: t.countRuleShow,
                        callback: function (e) {
                          t.countRuleShow = e;
                        },
                        expression: "countRuleShow",
                      },
                    },
                    [
                      a(
                        "q-card",
                        { staticStyle: { "border-radius": "25px" } },
                        [
                          a(
                            "q-item",
                            [
                              a(
                                "q-item-section",
                                { staticClass: "flex flex-center" },
                                [
                                  a("q-item-label", { staticClass: "text-weight-bold" }, [
                                    t._v(t._s(t.ruleTitle)),
                                  ]),
                                ],
                                1,
                              ),
                            ],
                            1,
                          ),
                          a(
                            "q-item",
                            { staticClass: "q-my-sm", attrs: { dense: "" } },
                            [
                              a(
                                "q-item-section",
                                [a("q-item-label", [t._v(t._s(t.ruleMessage))])],
                                1,
                              ),
                            ],
                            1,
                          ),
                          a("q-separator"),
                          a(
                            "q-card-actions",
                            { attrs: { align: "around" } },
                            [
                              a(
                                "q-btn",
                                {
                                  directives: [{ name: "close-popup", rawName: "v-close-popup" }],
                                  attrs: { flat: "", color: "primary" },
                                },
                                [t._v("知道了")],
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
                    "q-dialog",
                    {
                      attrs: { persistent: "", fullWidth: "", maximized: t.maximizedToggle },
                      model: {
                        value: t.taskTargetDialog,
                        callback: function (e) {
                          t.taskTargetDialog = e;
                        },
                        expression: "taskTargetDialog",
                      },
                    },
                    [
                      a(
                        "q-layout",
                        { staticClass: "bg-white", attrs: { view: "lHh lpr lFf", container: "" } },
                        [
                          a(
                            "q-header",
                            { staticClass: "full-width bg-white" },
                            [
                              a("q-toolbar", [
                                a(
                                  "div",
                                  {
                                    staticClass:
                                      "full-width row items-center justify-between q-px-xs q-py-sm",
                                  },
                                  [
                                    a("div", { staticClass: "text-bold text-black" }, [
                                      t._v("设置统计对象"),
                                    ]),
                                    a("q-btn", {
                                      attrs: { unelevated: "", color: "primary", label: "完成" },
                                      on: {
                                        click: function (e) {
                                          t.taskTargetDialog = !1;
                                        },
                                      },
                                    }),
                                  ],
                                  1,
                                ),
                              ]),
                            ],
                            1,
                          ),
                          a(
                            "q-page-container",
                            [
                              a(
                                "q-page",
                                [
                                  a("neu-assign-student", {
                                    attrs: {
                                      permit: t.menuInfo ? t.menuInfo.view_permit : null,
                                      "permit-mode": "V",
                                      "menu-id": t.menuInfo ? t.menuInfo.id : null,
                                    },
                                    model: {
                                      value: t.task_target,
                                      callback: function (e) {
                                        t.task_target = e;
                                      },
                                      expression: "task_target",
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
              ),
            ],
            1,
          );
        },
        ht = [],
        ut = {
          name: "ApplyAnalysis",
          props: { applyType: String },
          components: { NeuAssignStudent: n["a"] },
          computed: {
            applyShortTitle() {
              return "A" === this.applyType
                ? "申请"
                : "C" === this.applyType
                  ? "收集"
                  : "S" === this.applyType
                    ? "报名"
                    : "";
            },
          },
          data() {
            return {
              applyTab: "generalSituation",
              countRuleShow: !1,
              ruleTitle: "",
              ruleMessage: "",
              menuInfo: null,
              showPic: 0,
              showExp: !1,
              begin_date: "",
              end_date: "",
              begin_time: "",
              end_time: "",
              task_target: [],
              taskTargetDialog: !1,
              maximizedToggle: !0,
              teacher_no: JSON.parse(window.localStorage.getItem("userinfo")).login_name,
              loginName: "",
            };
          },
          mounted() {
            (window.localStorage.getItem("menu") &&
              (this.menuInfo = JSON.parse(window.localStorage.getItem("menu")).find(
                (t) => "analysis" === t.id,
              )),
              this.getWeekDate());
          },
          methods: {
            getWeekDate() {
              this.$axiosAction("/api/public.api", { action: "queryDefaultStatPeriod" }).then(
                (t) => {
                  0 === t.data.code &&
                    ((this.begin_time = t.data.begin_date),
                    (this.end_time = t.data.end_date),
                    (this.begin_date = t.data.begin_date),
                    (this.end_date = t.data.end_date));
                },
              );
            },
            ApplyRule(t) {
              ("collect" === t &&
                ((this.ruleTitle = "填写率"), (this.ruleMessage = "已填写的人数/总人数")),
                (this.countRuleShow = !0));
            },
            ringPic(t, e, a) {
              const i = document.getElementById(t),
                s = r["a"](i);
              var n = {};
              ((n = {
                tooltip: { trigger: "item", formatter: "{b}:{c}<br>{d}%" },
                legend: { show: !1 },
                series: [
                  {
                    type: "pie",
                    radius: ["40%", "70%"],
                    avoidLabelOverlap: !1,
                    label: { show: !1, position: "center" },
                    emphasis: {
                      label: { show: !0, fontSize: "20", fontWeight: "bold", formatter: a },
                    },
                    labelLine: { show: !1 },
                    data: e,
                  },
                ],
              }),
                n && s.setOption(n, !0));
            },
            columnPic(t, e, a, i) {
              const s = document.getElementById(t),
                n = r["a"](s);
              var l = {};
              ((l = {
                legend: { type: "scroll" },
                tooltip: {},
                dataset: { dimensions: e, source: a },
                xAxis: { axisLabel: { show: !0, interval: "auto", formatter: "{value}" } },
                yAxis: { type: "category" },
                series: i,
              }),
                l && n.setOption(l, !0),
                (window.onresize = function () {
                  (n.resize(),
                    r["a"](document.getElementById("signupGrade")).resize(),
                    r["a"](document.getElementById("signupDep")).resize(),
                    r["a"](document.getElementById("signupMajor")).resize(),
                    r["a"](document.getElementById("signupClass")).resize());
                }));
            },
            getSignupAllNum() {
              0 !== this.begin_time.length &&
                0 !== this.end_time.length &&
                0 !== this.task_target.length &&
                this.$axiosAction("/api/teacher/analysis/analysis.api", {
                  action: "getApplyAllNum",
                  task_target: JSON.stringify(this.task_target),
                  begin_time: this.begin_time,
                  end_time: this.end_time,
                  apply_type: this.applyType,
                  teacher_no: this.loginName,
                })
                  .then((t) => {
                    const e = ["product"],
                      a = { product: "报\n名\n人\n数" },
                      i = [],
                      s = [],
                      n = ["product"],
                      l = { product: "报\n名\n人\n数" },
                      o = [],
                      r = [],
                      c = ["product"],
                      d = { product: "报\n名\n人\n数" },
                      m = [],
                      h = [],
                      u = ["product"],
                      p = { product: "报\n名\n人\n数" },
                      g = [],
                      v = [];
                    if (0 === t.data.code) {
                      for (let i = 0; i < t.data.graderesult.length; i++) {
                        const n = t.data.graderesult[i].grade_name,
                          l = t.data.graderesult[i].gradeapply,
                          o = n + " " + l + "人";
                        (e.push(o), s.push({ type: "bar" }), (a[o] = l));
                      }
                      (i.push(a), this.$q.loading.hide(), this.columnPic("signupGrade", e, i, s));
                      for (let e = 0; e < t.data.depresult.length; e++) {
                        const a = t.data.depresult[e].dep_name,
                          i = t.data.depresult[e].depapply,
                          s = a + " " + i + "人";
                        (n.push(s), r.push({ type: "bar" }), (l[s] = i));
                      }
                      (o.push(l), this.columnPic("signupDep", n, o, r), this.$q.loading.hide());
                      for (let e = 0; e < t.data.majorresult.length; e++) {
                        const a = t.data.majorresult[e].major_name,
                          i = t.data.majorresult[e].majorapply,
                          s = a + " " + i + "人";
                        (c.push(s), h.push({ type: "bar" }), (d[s] = i));
                      }
                      (m.push(d), this.$q.loading.hide(), this.columnPic("signupMajor", c, m, h));
                      for (let e = 0; e < t.data.classresult.length; e++) {
                        const a = t.data.classresult[e].class_name,
                          i = t.data.classresult[e].classapply,
                          s = a + " " + i + "人";
                        (u.push(s), v.push({ type: "bar" }), (p[s] = i));
                      }
                      (g.push(p), this.$q.loading.hide(), this.columnPic("signupClass", u, g, v));
                    }
                  })
                  .catch((t) => {});
            },
            checkTime() {
              0 === this.begin_time.length &&
              0 === this.end_time.length &&
              0 === this.task_target.length
                ? ((this.showPic = 0),
                  this.$q.notify({
                    color: "red-5",
                    textColor: "white",
                    icon: "warning",
                    message: "请选择统计时间与统计学生！",
                  }))
                : 0 === this.begin_time.length || 0 === this.end_time.length
                  ? ((this.showPic = 0),
                    this.$q.notify({
                      color: "red-5",
                      textColor: "white",
                      icon: "warning",
                      message: "请选择统计时间！",
                    }))
                  : 0 === this.task_target.length
                    ? ((this.showPic = 0),
                      this.$q.notify({
                        color: "red-5",
                        textColor: "white",
                        icon: "warning",
                        message: "请选择统计学生！",
                      }))
                    : this.$axiosAction("/api/teacher/analysis/analysis.api", {
                        action: "checkTime",
                        begin_time: this.begin_time,
                        end_time: this.end_time,
                      }).then((t) => {
                        0 === t.data.code
                          ? ((this.showPic = 1),
                            (this.begin_date = this.begin_time),
                            (this.end_date = this.end_time),
                            this.getSignupAllNum(),
                            this.$q.loading.show(),
                            (this.showExp = !1))
                          : ((this.showPic = 0), (this.begin_date = ""), (this.end_date = ""));
                      });
            },
          },
        },
        pt = ut,
        gt = Object(h["a"])(pt, mt, ht, !1, null, null, null),
        vt = gt.exports;
      (j()(gt, "components", {
        QCard: u["a"],
        QExpansionItem: p["a"],
        QList: g["a"],
        QItem: v["a"],
        QItemSection: w["a"],
        QField: _["a"],
        QIcon: y["a"],
        QPopupProxy: b["a"],
        QDate: f["a"],
        QBtn: x["a"],
        QSeparator: C["a"],
        QItemLabel: q["a"],
        QCheckbox: S["a"],
        QTabs: k["a"],
        QTab: T["a"],
        QDialog: N["a"],
        QCardActions: P["a"],
        QLayout: I["a"],
        QHeader: L["a"],
        QToolbar: R["a"],
        QPageContainer: D["a"],
        QPage: A["a"],
      }),
        j()(gt, "directives", { ClosePopup: Q["a"] }));
      var wt = function () {
          var t = this,
            e = t.$createElement,
            a = t._self._c || e;
          return a(
            "q-card",
            { staticClass: "bg-white q-mb-sm q-mx-sm", attrs: { flat: "" } },
            [
              a(
                "q-expansion-item",
                {
                  attrs: {
                    "switch-toggle-side": "",
                    "expand-separator": "",
                    icon: "search",
                    label: "检索",
                  },
                  model: {
                    value: t.showExp,
                    callback: function (e) {
                      t.showExp = e;
                    },
                    expression: "showExp",
                  },
                },
                [
                  a(
                    "q-card",
                    [
                      a(
                        "q-list",
                        { staticClass: "full-width" },
                        [
                          a(
                            "q-item",
                            [
                              a("q-item-section", { attrs: { avatar: "" } }, [
                                a("div", { staticClass: "neu-css-before-red-asterisk" }, [
                                  t._v("\n              开始时间\n            "),
                                ]),
                              ]),
                              a("q-item-section"),
                              a(
                                "q-item-section",
                                { attrs: { side: "" } },
                                [
                                  a("q-field", {
                                    staticStyle: { width: "200px" },
                                    attrs: {
                                      outlined: "",
                                      dense: "",
                                      "stack-label": "",
                                      "hide-bottom-space": "",
                                      "lazy-rules": "",
                                      value: t.record.begin_time,
                                    },
                                    scopedSlots: t._u([
                                      {
                                        key: "control",
                                        fn: function () {
                                          return [t._v(t._s(t.record.begin_time))];
                                        },
                                        proxy: !0,
                                      },
                                      {
                                        key: "append",
                                        fn: function () {
                                          return [
                                            a(
                                              "q-icon",
                                              {
                                                staticClass: "cursor-pointer",
                                                attrs: { name: "event" },
                                              },
                                              [
                                                a(
                                                  "q-popup-proxy",
                                                  {
                                                    attrs: {
                                                      "transition-show": "scale",
                                                      "transition-hide": "scale",
                                                    },
                                                  },
                                                  [
                                                    a(
                                                      "div",
                                                      [
                                                        a(
                                                          "q-date",
                                                          {
                                                            attrs: {
                                                              flat: "",
                                                              minimal: "",
                                                              mask: "YYYY-MM-DD",
                                                            },
                                                            model: {
                                                              value: t.record.begin_time,
                                                              callback: function (e) {
                                                                t.$set(t.record, "begin_time", e);
                                                              },
                                                              expression: "record.begin_time",
                                                            },
                                                          },
                                                          [
                                                            a(
                                                              "div",
                                                              {
                                                                staticClass:
                                                                  "row items-center justify-end",
                                                              },
                                                              [
                                                                a("q-btn", {
                                                                  directives: [
                                                                    {
                                                                      name: "close-popup",
                                                                      rawName: "v-close-popup",
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
                                    ]),
                                  }),
                                ],
                                1,
                              ),
                            ],
                            1,
                          ),
                          a("q-separator"),
                          a(
                            "q-item",
                            [
                              a("q-item-section", { attrs: { avatar: "" } }, [
                                a("div", { staticClass: "neu-css-before-red-asterisk" }, [
                                  t._v("\n              结束时间\n            "),
                                ]),
                              ]),
                              a("q-item-section"),
                              a(
                                "q-item-section",
                                { attrs: { side: "" } },
                                [
                                  a("q-field", {
                                    staticStyle: { width: "200px" },
                                    attrs: {
                                      outlined: "",
                                      dense: "",
                                      "stack-label": "",
                                      "hide-bottom-space": "",
                                      "lazy-rules": "",
                                      rules: [
                                        function (e) {
                                          return (
                                            e >= t.record.begin_time || "截止时间应在开始时间之后"
                                          );
                                        },
                                      ],
                                      value: t.record.end_time,
                                    },
                                    scopedSlots: t._u([
                                      {
                                        key: "control",
                                        fn: function () {
                                          return [t._v(t._s(t.record.end_time))];
                                        },
                                        proxy: !0,
                                      },
                                      {
                                        key: "append",
                                        fn: function () {
                                          return [
                                            a(
                                              "q-icon",
                                              {
                                                staticClass: "cursor-pointer",
                                                attrs: { name: "event" },
                                              },
                                              [
                                                a(
                                                  "q-popup-proxy",
                                                  {
                                                    attrs: {
                                                      "transition-show": "scale",
                                                      "transition-hide": "scale",
                                                    },
                                                  },
                                                  [
                                                    a(
                                                      "div",
                                                      [
                                                        a(
                                                          "q-date",
                                                          {
                                                            attrs: {
                                                              flat: "",
                                                              minimal: "",
                                                              mask: "YYYY-MM-DD",
                                                            },
                                                            model: {
                                                              value: t.record.end_time,
                                                              callback: function (e) {
                                                                t.$set(t.record, "end_time", e);
                                                              },
                                                              expression: "record.end_time",
                                                            },
                                                          },
                                                          [
                                                            a(
                                                              "div",
                                                              {
                                                                staticClass:
                                                                  "row items-center justify-end",
                                                              },
                                                              [
                                                                a("q-btn", {
                                                                  directives: [
                                                                    {
                                                                      name: "close-popup",
                                                                      rawName: "v-close-popup",
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
                                    ]),
                                  }),
                                ],
                                1,
                              ),
                            ],
                            1,
                          ),
                          a("q-separator"),
                          a(
                            "q-item",
                            [
                              a("q-item-section", { attrs: { avatar: "" } }, [
                                a("div", { staticClass: "neu-css-before-red-asterisk" }, [
                                  t._v("\n              统计对象\n            "),
                                ]),
                              ]),
                              a("q-item-section"),
                              a(
                                "q-item-section",
                                { attrs: { side: "" } },
                                [
                                  a(
                                    "q-item-label",
                                    { staticClass: "row items-center" },
                                    [
                                      a(
                                        "span",
                                        {
                                          directives: [
                                            {
                                              name: "show",
                                              rawName: "v-show",
                                              value:
                                                !t.record.task_target ||
                                                0 == t.record.task_target.length,
                                              expression:
                                                "!record.task_target || record.task_target.length == 0 ",
                                            },
                                          ],
                                          staticClass: "text-grey",
                                          on: {
                                            click: function (e) {
                                              t.taskTargetDialog = !0;
                                            },
                                          },
                                        },
                                        [t._v("选择")],
                                      ),
                                      a("q-icon", {
                                        directives: [
                                          {
                                            name: "show",
                                            rawName: "v-show",
                                            value:
                                              !t.record.task_target ||
                                              0 == t.record.task_target.length,
                                            expression:
                                              "!record.task_target || record.task_target.length == 0 ",
                                          },
                                        ],
                                        staticClass: "text-grey",
                                        attrs: { name: "keyboard_arrow_right", size: "sm" },
                                      }),
                                      a(
                                        "span",
                                        {
                                          directives: [
                                            {
                                              name: "show",
                                              rawName: "v-show",
                                              value:
                                                t.record.task_target &&
                                                0 != t.record.task_target.length,
                                              expression:
                                                "record.task_target && record.task_target.length != 0 ",
                                            },
                                          ],
                                          staticClass: "text-primary",
                                          on: {
                                            click: function (e) {
                                              t.taskTargetDialog = !0;
                                            },
                                          },
                                        },
                                        [
                                          t._v(
                                            "已选择 (" + t._s(t.record.task_target.length) + ")",
                                          ),
                                        ],
                                      ),
                                      a("q-icon", {
                                        directives: [
                                          {
                                            name: "show",
                                            rawName: "v-show",
                                            value:
                                              t.record.task_target &&
                                              0 != t.record.task_target.length,
                                            expression:
                                              "record.task_target && record.task_target.length != 0 ",
                                          },
                                        ],
                                        staticClass: "text-primary",
                                        attrs: { name: "keyboard_arrow_right", size: "sm" },
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
                          a("q-separator"),
                          a(
                            "q-item",
                            [
                              a("q-item-section", { attrs: { avatar: "" } }, [
                                t._v("\n            日常流程名称\n          "),
                              ]),
                              a("q-item-section", [
                                a(
                                  "div",
                                  { staticClass: "q-gutter-xs" },
                                  t._l(t.getProcessTypeList, function (e) {
                                    return a("q-checkbox", {
                                      key: e.value,
                                      staticClass: "q-mr-sm",
                                      attrs: {
                                        dense: "",
                                        "keep-color": "",
                                        disable: t.loginName === t.teacher_no,
                                        val: e.value,
                                        label: e.label,
                                      },
                                      model: {
                                        value: t.selection,
                                        callback: function (e) {
                                          t.selection = e;
                                        },
                                        expression: "selection",
                                      },
                                    });
                                  }),
                                  1,
                                ),
                              ]),
                            ],
                            1,
                          ),
                          a("q-separator"),
                          a(
                            "q-item",
                            {
                              directives: [
                                {
                                  name: "show",
                                  rawName: "v-show",
                                  value: "A" === t.viewPermit,
                                  expression: "viewPermit === 'A'",
                                },
                              ],
                            },
                            [
                              a(
                                "q-item-section",
                                { staticClass: "text-white", attrs: { avatar: "" } },
                                [t._v("自己发布")],
                              ),
                              a("q-item-section", [
                                a(
                                  "div",
                                  { staticClass: "q-gutter-xs" },
                                  [
                                    a("q-checkbox", {
                                      attrs: {
                                        "false-value": "",
                                        "true-value": t.teacher_no,
                                        label: "仅自己创建的",
                                      },
                                      model: {
                                        value: t.loginName,
                                        callback: function (e) {
                                          t.loginName = e;
                                        },
                                        expression: "loginName",
                                      },
                                    }),
                                  ],
                                  1,
                                ),
                              ]),
                            ],
                            1,
                          ),
                          a("q-separator", {
                            directives: [
                              {
                                name: "show",
                                rawName: "v-show",
                                value: "A" === t.viewPermit,
                                expression: "viewPermit === 'A'",
                              },
                            ],
                          }),
                          a(
                            "q-item",
                            [
                              a("q-item-section", [
                                a(
                                  "div",
                                  { staticClass: "col text-center" },
                                  [
                                    a("q-btn", {
                                      staticClass: "q-mx-md",
                                      attrs: {
                                        unelevated: "",
                                        color: "primary",
                                        label: "生成统计图",
                                      },
                                      on: { click: t.getAllNum },
                                    }),
                                  ],
                                  1,
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
                ],
                1,
              ),
              a("q-separator"),
              a(
                "div",
                {
                  directives: [
                    {
                      name: "show",
                      rawName: "v-show",
                      value: 0 === t.showPic && 0 === t.record.task_target.length,
                      expression: "showPic === 0 && record.task_target.length === 0",
                    },
                  ],
                  staticClass: "q-py-sm text-center text-grey",
                },
                [a("label", [t._v("请选择统计时间和统计学生！")])],
              ),
              a(
                "div",
                {
                  directives: [
                    {
                      name: "show",
                      rawName: "v-show",
                      value: 1 === t.showPic,
                      expression: "showPic === 1",
                    },
                  ],
                },
                [
                  a(
                    "q-tabs",
                    {
                      staticClass: "text-grey",
                      attrs: {
                        dense: "",
                        "active-color": "primary",
                        "indicator-color": "primary",
                        align: "justify",
                        "narrow-indicator": "",
                      },
                      on: { click: t.chooseReal },
                      model: {
                        value: t.processTab,
                        callback: function (e) {
                          t.processTab = e;
                        },
                        expression: "processTab",
                      },
                    },
                    [a("q-tab", { attrs: { name: "generalSituation", label: "流程概况" } })],
                    1,
                  ),
                  a("q-separator"),
                  [
                    a(
                      "div",
                      {
                        directives: [
                          {
                            name: "show",
                            rawName: "v-show",
                            value: "generalSituation" == t.processTab,
                            expression: "processTab == 'generalSituation'",
                          },
                        ],
                        staticClass: "text-center q-my-md",
                      },
                      [
                        a("div", { staticClass: "row" }, [
                          a("div", { staticClass: "col" }),
                          a("div", { staticClass: "col-6" }, [
                            a(
                              "label",
                              {
                                staticStyle: {
                                  "font-size": "16px",
                                  color: "#454c5c",
                                  "font-weight": "700",
                                  "margin-top": "10px",
                                },
                              },
                              [t._v("按年级统计流程信息")],
                            ),
                          ]),
                          a("div", {
                            staticClass: "col row items-center",
                            staticStyle: { float: "right" },
                          }),
                        ]),
                        a("div", {
                          staticStyle: { height: "260px" },
                          attrs: { id: "processCountOne" },
                        }),
                      ],
                    ),
                    a("hr", {
                      directives: [
                        {
                          name: "show",
                          rawName: "v-show",
                          value: "generalSituation" == t.processTab,
                          expression: "processTab == 'generalSituation'",
                        },
                      ],
                    }),
                    a(
                      "div",
                      {
                        directives: [
                          {
                            name: "show",
                            rawName: "v-show",
                            value: "generalSituation" == t.processTab && "A" === t.viewPermit,
                            expression: "processTab == 'generalSituation' && viewPermit === 'A'",
                          },
                        ],
                        staticClass: "text-center q-my-md",
                      },
                      [
                        a("div", { staticClass: "row" }, [
                          a("div", { staticClass: "col" }),
                          a("div", { staticClass: "col-6" }, [
                            a(
                              "label",
                              {
                                staticStyle: {
                                  "font-size": "16px",
                                  color: "#454c5c",
                                  "font-weight": "700",
                                  "margin-top": "10px",
                                },
                              },
                              [t._v("按院系统计流程信息")],
                            ),
                          ]),
                          a("div", {
                            staticClass: "col row items-center",
                            staticStyle: { float: "right" },
                          }),
                        ]),
                        a("div", {
                          staticStyle: { height: "260px" },
                          attrs: { id: "processCountTwo" },
                        }),
                      ],
                    ),
                    a("hr", {
                      directives: [
                        {
                          name: "show",
                          rawName: "v-show",
                          value: "generalSituation" == t.processTab && "A" === t.viewPermit,
                          expression: "processTab == 'generalSituation' && viewPermit === 'A'",
                        },
                      ],
                    }),
                    a(
                      "div",
                      {
                        directives: [
                          {
                            name: "show",
                            rawName: "v-show",
                            value: "generalSituation" == t.processTab && "D" === t.viewPermit,
                            expression: "processTab == 'generalSituation' && viewPermit === 'D'",
                          },
                        ],
                        staticClass: "text-center q-my-md",
                      },
                      [
                        a("div", { staticClass: "row" }, [
                          a("div", { staticClass: "col" }),
                          a("div", { staticClass: "col-6" }, [
                            a(
                              "label",
                              {
                                staticStyle: {
                                  "font-size": "16px",
                                  color: "#454c5c",
                                  "font-weight": "700",
                                  "margin-top": "10px",
                                },
                              },
                              [t._v("按专业统计流程信息")],
                            ),
                          ]),
                          a("div", {
                            staticClass: "col row items-center",
                            staticStyle: { float: "right" },
                          }),
                        ]),
                        a("div", {
                          staticStyle: { height: "260px" },
                          attrs: { id: "processCountFour" },
                        }),
                      ],
                    ),
                    a("hr", {
                      directives: [
                        {
                          name: "show",
                          rawName: "v-show",
                          value: "generalSituation" == t.processTab && "D" === t.viewPermit,
                          expression: "processTab == 'generalSituation' && viewPermit === 'D'",
                        },
                      ],
                    }),
                    a(
                      "div",
                      {
                        directives: [
                          {
                            name: "show",
                            rawName: "v-show",
                            value: "generalSituation" == t.processTab && "S" === t.viewPermit,
                            expression: "processTab == 'generalSituation' && viewPermit === 'S'",
                          },
                        ],
                        staticClass: "text-center q-my-md",
                      },
                      [
                        a("div", { staticClass: "row" }, [
                          a("div", { staticClass: "col" }),
                          a("div", { staticClass: "col-6" }, [
                            a(
                              "label",
                              {
                                staticStyle: {
                                  "font-size": "16px",
                                  color: "#454c5c",
                                  "font-weight": "700",
                                  "margin-top": "10px",
                                },
                              },
                              [t._v("按班级统计流程信息")],
                            ),
                          ]),
                          a("div", {
                            staticClass: "col row items-center",
                            staticStyle: { float: "right" },
                          }),
                        ]),
                        a("div", {
                          staticStyle: { height: "260px" },
                          attrs: { id: "processCountThree" },
                        }),
                      ],
                    ),
                    a("hr", {
                      directives: [
                        {
                          name: "show",
                          rawName: "v-show",
                          value: "generalSituation" == t.processTab && "S" === t.viewPermit,
                          expression: "processTab == 'generalSituation' && viewPermit === 'S'",
                        },
                      ],
                    }),
                  ],
                ],
                2,
              ),
              a(
                "q-dialog",
                {
                  attrs: { persistent: "", fullWidth: "", maximized: t.maximizedToggle },
                  model: {
                    value: t.taskTargetDialog,
                    callback: function (e) {
                      t.taskTargetDialog = e;
                    },
                    expression: "taskTargetDialog",
                  },
                },
                [
                  a(
                    "q-layout",
                    { staticClass: "bg-white", attrs: { view: "lHh lpr lFf", container: "" } },
                    [
                      a(
                        "q-header",
                        { staticClass: "full-width bg-white" },
                        [
                          a("q-toolbar", [
                            a(
                              "div",
                              {
                                staticClass:
                                  "full-width row items-center justify-between q-px-xs q-py-sm",
                              },
                              [
                                a("div", { staticClass: "text-bold text-black" }, [
                                  t._v("设置统计对象"),
                                ]),
                                a("q-btn", {
                                  attrs: { unelevated: "", color: "primary", label: "完成" },
                                  on: {
                                    click: function (e) {
                                      t.taskTargetDialog = !1;
                                    },
                                  },
                                }),
                              ],
                              1,
                            ),
                          ]),
                        ],
                        1,
                      ),
                      a(
                        "q-page-container",
                        [
                          a(
                            "q-page",
                            [
                              a("neu-assign-student", {
                                attrs: {
                                  permit: t.menuInfo ? t.menuInfo.view_permit : null,
                                  "permit-mode": "V",
                                  "menu-id": t.menuInfo ? t.menuInfo.id : null,
                                },
                                model: {
                                  value: t.record.task_target,
                                  callback: function (e) {
                                    t.$set(t.record, "task_target", e);
                                  },
                                  expression: "record.task_target",
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
        _t = [],
        yt = {
          name: "ProcessAnalysis",
          components: { NeuAssignStudent: n["a"] },
          data() {
            return {
              menuInfo: null,
              showExp: !1,
              processTab: "generalSituation",
              viewPermit: "",
              roleId: JSON.parse(window.localStorage.getItem("userinfo")).role_id,
              taskTargetDialog: !1,
              record: { begin_time: "", end_time: "", task_target: [] },
              teacher_no: JSON.parse(window.localStorage.getItem("userinfo")).login_name,
              getProcessTypeList: [],
              selection: [],
              showPic: 0,
              loginName: "",
              processOneTitle: ["product", "申请人数", "申请次数"],
              maximizedToggle: !0,
            };
          },
          watch: {
            loginName(t) {
              t === this.teacher_no
                ? (this.selection = this.getProcessTypeList.reduce(
                    (t, e) => t.concat(!0 === e.iscreate ? e.value : 0),
                    [],
                  ))
                : (this.selection = this.getProcessTypeList.reduce(
                    (t, e) => t.concat(e.value),
                    [],
                  ));
            },
          },
          mounted() {
            (window.localStorage.getItem("menu") &&
              ((this.menuInfo = JSON.parse(window.localStorage.getItem("menu")).find(
                (t) => "analysis" === t.id,
              )),
              (this.viewPermit = this.menuInfo.view_permit)),
              this.$axiosAction("/api/public.api", { action: "queryDefaultStatPeriod" }).then(
                (t) => {
                  0 === t.data.code &&
                    ((this.record.begin_time = t.data.begin_date),
                    (this.record.end_time = t.data.end_date));
                },
              ),
              this.getProcessType());
          },
          computed: {},
          methods: {
            chooseReal() {},
            getProcessType() {
              this.$axiosAction("/api/teacher/process/process.api", {
                action: "queryTypeListSimple",
                service_flag: "N",
              }).then((t) => {
                ((this.getProcessTypeList = t.data.result),
                  (this.selection = this.getProcessTypeList.reduce(
                    (t, e) => t.concat(e.value),
                    [],
                  )));
              });
            },
            getAllNum() {
              0 !== this.selection.length
                ? null === this.record.begin_time &&
                  null === this.record.end_time &&
                  0 === this.record.task_target.length
                  ? ((this.showPic = 0),
                    this.$q.notify({
                      color: "red-5",
                      textColor: "white",
                      icon: "warning",
                      message: "请选择统计时间与统计学生！",
                    }))
                  : null === this.record.begin_time || null === this.record.end_time
                    ? ((this.showPic = 0),
                      this.$q.notify({
                        color: "red-5",
                        textColor: "white",
                        icon: "warning",
                        message: "请选择统计时间！",
                      }))
                    : 0 === this.record.task_target.length
                      ? ((this.showPic = 0),
                        this.$q.notify({
                          color: "red-5",
                          textColor: "white",
                          icon: "warning",
                          message: "请选择统计学生！",
                        }))
                      : this.$axiosAction("/api/teacher/analysis/analysis.api", {
                          action: "checkTime",
                          begin_time: this.record.begin_time,
                          end_time: this.record.end_time,
                        }).then((t) => {
                          0 === t.data.code
                            ? ((this.showPic = 1), (this.showExp = !1), this.getPic())
                            : (this.showPic = 0);
                        })
                : this.$showErrorNotify("请至少选择一个流程名称");
            },
            columnPic(t, e, a) {
              const i = document.getElementById(t),
                s = r["a"](i);
              var n = {};
              ((n = {
                legend: {},
                tooltip: {},
                dataset: { dimensions: e, source: a },
                grid: { left: "3%", right: "4%", bottom: "3%", containLabel: !0 },
                xAxis: { axisLabel: { show: !0, interval: "auto" } },
                yAxis: { type: "category" },
                series: [{ type: "bar" }, { type: "bar" }],
              }),
                n && s.setOption(n, !0),
                (window.onresize = function () {
                  (s.resize(),
                    r["a"](document.getElementById("processCountOne")).resize(),
                    r["a"](document.getElementById("processCountTwo")).resize(),
                    r["a"](document.getElementById("processCountThree")).resize(),
                    r["a"](document.getElementById("processCountFour")).resize());
                }));
            },
            getPic() {
              (this.$axiosAction("/api/teacher/analysis/analysis.api", {
                action: "getProcessGradeAnalysis",
                begin_time: this.record.begin_time,
                end_time: this.record.end_time,
                task_target: JSON.stringify(this.record.task_target),
                selection: this.selection,
                service_flag: "N",
              }).then((t) => {
                (0 === t.data.code
                  ? ((this.showPic = 1),
                    this.columnPic("processCountOne", this.processOneTitle, t.data.grade),
                    this.columnPic("processCountTwo", this.processOneTitle, t.data.dep),
                    this.columnPic("processCountThree", this.processOneTitle, t.data.class),
                    this.columnPic("processCountFour", this.processOneTitle, t.data.major),
                    this.$q.loading.show())
                  : (this.showPic = 0),
                  this.$q.loading.hide());
              }),
                this.$q.loading.hide());
            },
          },
        },
        bt = yt,
        ft = Object(h["a"])(bt, wt, _t, !1, null, null, null),
        xt = ft.exports;
      (j()(ft, "components", {
        QCard: u["a"],
        QExpansionItem: p["a"],
        QList: g["a"],
        QItem: v["a"],
        QItemSection: w["a"],
        QField: _["a"],
        QIcon: y["a"],
        QPopupProxy: b["a"],
        QDate: f["a"],
        QBtn: x["a"],
        QSeparator: C["a"],
        QItemLabel: q["a"],
        QCheckbox: S["a"],
        QTabs: k["a"],
        QTab: T["a"],
        QDialog: N["a"],
        QLayout: I["a"],
        QHeader: L["a"],
        QToolbar: R["a"],
        QPageContainer: D["a"],
        QPage: A["a"],
      }),
        j()(ft, "directives", { ClosePopup: Q["a"] }));
      var Ct = function () {
          var t = this,
            e = t.$createElement,
            a = t._self._c || e;
          return a(
            "q-card",
            { staticClass: "bg-white q-mb-sm q-mx-sm", attrs: { flat: "" } },
            [
              a(
                "q-expansion-item",
                {
                  attrs: {
                    "switch-toggle-side": "",
                    "expand-separator": "",
                    icon: "search",
                    label: "检索",
                  },
                  model: {
                    value: t.showExp,
                    callback: function (e) {
                      t.showExp = e;
                    },
                    expression: "showExp",
                  },
                },
                [
                  a(
                    "q-card",
                    [
                      a(
                        "q-list",
                        { staticClass: "full-width" },
                        [
                          a(
                            "q-item",
                            [
                              a("q-item-section", { attrs: { avatar: "" } }, [
                                a("div", { staticClass: "neu-css-before-red-asterisk" }, [
                                  t._v("\n              开始时间\n            "),
                                ]),
                              ]),
                              a("q-item-section"),
                              a(
                                "q-item-section",
                                { attrs: { side: "" } },
                                [
                                  a("q-field", {
                                    staticStyle: { width: "200px" },
                                    attrs: {
                                      outlined: "",
                                      dense: "",
                                      "stack-label": "",
                                      "hide-bottom-space": "",
                                      "lazy-rules": "",
                                      value: t.record.begin_time,
                                    },
                                    scopedSlots: t._u([
                                      {
                                        key: "control",
                                        fn: function () {
                                          return [t._v(t._s(t.record.begin_time))];
                                        },
                                        proxy: !0,
                                      },
                                      {
                                        key: "append",
                                        fn: function () {
                                          return [
                                            a(
                                              "q-icon",
                                              {
                                                staticClass: "cursor-pointer",
                                                attrs: { name: "event" },
                                              },
                                              [
                                                a(
                                                  "q-popup-proxy",
                                                  {
                                                    attrs: {
                                                      "transition-show": "scale",
                                                      "transition-hide": "scale",
                                                    },
                                                  },
                                                  [
                                                    a(
                                                      "div",
                                                      [
                                                        a(
                                                          "q-date",
                                                          {
                                                            attrs: {
                                                              flat: "",
                                                              minimal: "",
                                                              mask: "YYYY-MM-DD",
                                                            },
                                                            model: {
                                                              value: t.record.begin_time,
                                                              callback: function (e) {
                                                                t.$set(t.record, "begin_time", e);
                                                              },
                                                              expression: "record.begin_time",
                                                            },
                                                          },
                                                          [
                                                            a(
                                                              "div",
                                                              {
                                                                staticClass:
                                                                  "row items-center justify-end",
                                                              },
                                                              [
                                                                a("q-btn", {
                                                                  directives: [
                                                                    {
                                                                      name: "close-popup",
                                                                      rawName: "v-close-popup",
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
                                    ]),
                                  }),
                                ],
                                1,
                              ),
                            ],
                            1,
                          ),
                          a("q-separator"),
                          a(
                            "q-item",
                            [
                              a("q-item-section", { attrs: { avatar: "" } }, [
                                a("div", { staticClass: "neu-css-before-red-asterisk" }, [
                                  t._v("\n              结束时间\n            "),
                                ]),
                              ]),
                              a("q-item-section"),
                              a(
                                "q-item-section",
                                { attrs: { side: "" } },
                                [
                                  a("q-field", {
                                    staticStyle: { width: "200px" },
                                    attrs: {
                                      outlined: "",
                                      dense: "",
                                      "stack-label": "",
                                      "hide-bottom-space": "",
                                      "lazy-rules": "",
                                      rules: [
                                        function (e) {
                                          return (
                                            e >= t.record.begin_time || "截止时间应在开始时间之后"
                                          );
                                        },
                                      ],
                                      value: t.record.end_time,
                                    },
                                    scopedSlots: t._u([
                                      {
                                        key: "control",
                                        fn: function () {
                                          return [t._v(t._s(t.record.end_time))];
                                        },
                                        proxy: !0,
                                      },
                                      {
                                        key: "append",
                                        fn: function () {
                                          return [
                                            a(
                                              "q-icon",
                                              {
                                                staticClass: "cursor-pointer",
                                                attrs: { name: "event" },
                                              },
                                              [
                                                a(
                                                  "q-popup-proxy",
                                                  {
                                                    attrs: {
                                                      "transition-show": "scale",
                                                      "transition-hide": "scale",
                                                    },
                                                  },
                                                  [
                                                    a(
                                                      "div",
                                                      [
                                                        a(
                                                          "q-date",
                                                          {
                                                            attrs: {
                                                              flat: "",
                                                              minimal: "",
                                                              mask: "YYYY-MM-DD",
                                                            },
                                                            model: {
                                                              value: t.record.end_time,
                                                              callback: function (e) {
                                                                t.$set(t.record, "end_time", e);
                                                              },
                                                              expression: "record.end_time",
                                                            },
                                                          },
                                                          [
                                                            a(
                                                              "div",
                                                              {
                                                                staticClass:
                                                                  "row items-center justify-end",
                                                              },
                                                              [
                                                                a("q-btn", {
                                                                  directives: [
                                                                    {
                                                                      name: "close-popup",
                                                                      rawName: "v-close-popup",
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
                                    ]),
                                  }),
                                ],
                                1,
                              ),
                            ],
                            1,
                          ),
                          a("q-separator"),
                          a(
                            "q-item",
                            [
                              a("q-item-section", { attrs: { avatar: "" } }, [
                                a("div", { staticClass: "neu-css-before-red-asterisk" }, [
                                  t._v("\n              统计对象\n            "),
                                ]),
                              ]),
                              a("q-item-section"),
                              a(
                                "q-item-section",
                                { attrs: { side: "" } },
                                [
                                  a(
                                    "q-item-label",
                                    { staticClass: "row items-center" },
                                    [
                                      a(
                                        "span",
                                        {
                                          directives: [
                                            {
                                              name: "show",
                                              rawName: "v-show",
                                              value:
                                                !t.record.task_target ||
                                                0 == t.record.task_target.length,
                                              expression:
                                                "!record.task_target || record.task_target.length == 0 ",
                                            },
                                          ],
                                          staticClass: "text-grey",
                                          on: {
                                            click: function (e) {
                                              t.taskTargetDialog = !0;
                                            },
                                          },
                                        },
                                        [t._v("选择")],
                                      ),
                                      a("q-icon", {
                                        directives: [
                                          {
                                            name: "show",
                                            rawName: "v-show",
                                            value:
                                              !t.record.task_target ||
                                              0 == t.record.task_target.length,
                                            expression:
                                              "!record.task_target || record.task_target.length == 0 ",
                                          },
                                        ],
                                        staticClass: "text-grey",
                                        attrs: { name: "keyboard_arrow_right", size: "sm" },
                                      }),
                                      a(
                                        "span",
                                        {
                                          directives: [
                                            {
                                              name: "show",
                                              rawName: "v-show",
                                              value:
                                                t.record.task_target &&
                                                0 != t.record.task_target.length,
                                              expression:
                                                "record.task_target && record.task_target.length != 0 ",
                                            },
                                          ],
                                          staticClass: "text-primary",
                                          on: {
                                            click: function (e) {
                                              t.taskTargetDialog = !0;
                                            },
                                          },
                                        },
                                        [
                                          t._v(
                                            "已选择 (" + t._s(t.record.task_target.length) + ")",
                                          ),
                                        ],
                                      ),
                                      a("q-icon", {
                                        directives: [
                                          {
                                            name: "show",
                                            rawName: "v-show",
                                            value:
                                              t.record.task_target &&
                                              0 != t.record.task_target.length,
                                            expression:
                                              "record.task_target && record.task_target.length != 0 ",
                                          },
                                        ],
                                        staticClass: "text-primary",
                                        attrs: { name: "keyboard_arrow_right", size: "sm" },
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
                          a("q-separator"),
                          a(
                            "q-item",
                            [
                              a("q-item-section", { attrs: { avatar: "" } }, [
                                t._v("\n            返校离校流程名称\n          "),
                              ]),
                              a("q-item-section", [
                                a(
                                  "div",
                                  { staticClass: "q-gutter-xs" },
                                  t._l(t.getProcessTypeList, function (e) {
                                    return a("q-checkbox", {
                                      key: e.value,
                                      staticClass: "q-mr-sm",
                                      attrs: {
                                        dense: "",
                                        "keep-color": "",
                                        disable: t.loginName === t.teacher_no,
                                        val: e.value,
                                        label: e.label,
                                      },
                                      model: {
                                        value: t.selection,
                                        callback: function (e) {
                                          t.selection = e;
                                        },
                                        expression: "selection",
                                      },
                                    });
                                  }),
                                  1,
                                ),
                              ]),
                            ],
                            1,
                          ),
                          a("q-separator"),
                          a(
                            "q-item",
                            {
                              directives: [
                                {
                                  name: "show",
                                  rawName: "v-show",
                                  value: "A" === t.viewPermit,
                                  expression: "viewPermit === 'A'",
                                },
                              ],
                            },
                            [
                              a(
                                "q-item-section",
                                { staticClass: "text-white", attrs: { avatar: "" } },
                                [t._v("自己发布")],
                              ),
                              a("q-item-section", [
                                a(
                                  "div",
                                  { staticClass: "q-gutter-xs" },
                                  [
                                    a("q-checkbox", {
                                      attrs: {
                                        "false-value": "",
                                        "true-value": t.teacher_no,
                                        label: "仅自己创建的",
                                      },
                                      model: {
                                        value: t.loginName,
                                        callback: function (e) {
                                          t.loginName = e;
                                        },
                                        expression: "loginName",
                                      },
                                    }),
                                  ],
                                  1,
                                ),
                              ]),
                            ],
                            1,
                          ),
                          a("q-separator", {
                            directives: [
                              {
                                name: "show",
                                rawName: "v-show",
                                value: "A" === t.viewPermit,
                                expression: "viewPermit === 'A'",
                              },
                            ],
                          }),
                          a(
                            "q-item",
                            [
                              a("q-item-section", [
                                a(
                                  "div",
                                  { staticClass: "col text-center" },
                                  [
                                    a("q-btn", {
                                      staticClass: "q-mx-md",
                                      attrs: {
                                        unelevated: "",
                                        color: "primary",
                                        label: "生成统计图",
                                      },
                                      on: { click: t.getAllNum },
                                    }),
                                  ],
                                  1,
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
                ],
                1,
              ),
              a("q-separator"),
              a(
                "div",
                {
                  directives: [
                    {
                      name: "show",
                      rawName: "v-show",
                      value: 0 === t.showPic && 0 === t.record.task_target.length,
                      expression: "showPic === 0 && record.task_target.length === 0",
                    },
                  ],
                  staticClass: "q-py-sm text-center text-grey",
                },
                [a("label", [t._v("请选择统计时间和统计学生！")])],
              ),
              a(
                "div",
                {
                  directives: [
                    {
                      name: "show",
                      rawName: "v-show",
                      value: 1 === t.showPic,
                      expression: "showPic === 1",
                    },
                  ],
                },
                [
                  a(
                    "q-tabs",
                    {
                      staticClass: "text-grey",
                      attrs: {
                        dense: "",
                        "active-color": "primary",
                        "indicator-color": "primary",
                        align: "justify",
                        "narrow-indicator": "",
                      },
                      on: { click: t.chooseReal },
                      model: {
                        value: t.processTab,
                        callback: function (e) {
                          t.processTab = e;
                        },
                        expression: "processTab",
                      },
                    },
                    [a("q-tab", { attrs: { name: "generalSituation", label: "流程概况" } })],
                    1,
                  ),
                  a("q-separator"),
                  [
                    a(
                      "div",
                      {
                        directives: [
                          {
                            name: "show",
                            rawName: "v-show",
                            value: "generalSituation" == t.processTab,
                            expression: "processTab == 'generalSituation'",
                          },
                        ],
                        staticClass: "text-center q-my-md",
                      },
                      [
                        a("div", { staticClass: "row" }, [
                          a("div", { staticClass: "col" }),
                          a("div", { staticClass: "col-6" }, [
                            a(
                              "label",
                              {
                                staticStyle: {
                                  "font-size": "16px",
                                  color: "#454c5c",
                                  "font-weight": "700",
                                  "margin-top": "10px",
                                },
                              },
                              [t._v("按年级统计流程信息")],
                            ),
                          ]),
                          a("div", {
                            staticClass: "col row items-center",
                            staticStyle: { float: "right" },
                          }),
                        ]),
                        a("div", {
                          staticStyle: { height: "260px" },
                          attrs: { id: "processGateCountOne" },
                        }),
                      ],
                    ),
                    a("hr", {
                      directives: [
                        {
                          name: "show",
                          rawName: "v-show",
                          value: "generalSituation" == t.processTab,
                          expression: "processTab == 'generalSituation'",
                        },
                      ],
                    }),
                    a(
                      "div",
                      {
                        directives: [
                          {
                            name: "show",
                            rawName: "v-show",
                            value: "generalSituation" == t.processTab && "A" === t.viewPermit,
                            expression: "processTab == 'generalSituation' && viewPermit === 'A'",
                          },
                        ],
                        staticClass: "text-center q-my-md",
                      },
                      [
                        a("div", { staticClass: "row" }, [
                          a("div", { staticClass: "col" }),
                          a("div", { staticClass: "col-6" }, [
                            a(
                              "label",
                              {
                                staticStyle: {
                                  "font-size": "16px",
                                  color: "#454c5c",
                                  "font-weight": "700",
                                  "margin-top": "10px",
                                },
                              },
                              [t._v("按院系统计流程信息")],
                            ),
                          ]),
                          a("div", {
                            staticClass: "col row items-center",
                            staticStyle: { float: "right" },
                          }),
                        ]),
                        a("div", {
                          staticStyle: { height: "260px" },
                          attrs: { id: "processGateCountTwo" },
                        }),
                      ],
                    ),
                    a("hr", {
                      directives: [
                        {
                          name: "show",
                          rawName: "v-show",
                          value: "generalSituation" == t.processTab && "A" === t.viewPermit,
                          expression: "processTab == 'generalSituation' && viewPermit === 'A'",
                        },
                      ],
                    }),
                    a(
                      "div",
                      {
                        directives: [
                          {
                            name: "show",
                            rawName: "v-show",
                            value: "generalSituation" == t.processTab && "D" === t.viewPermit,
                            expression: "processTab == 'generalSituation' && viewPermit === 'D'",
                          },
                        ],
                        staticClass: "text-center q-my-md",
                      },
                      [
                        a("div", { staticClass: "row" }, [
                          a("div", { staticClass: "col" }),
                          a("div", { staticClass: "col-6" }, [
                            a(
                              "label",
                              {
                                staticStyle: {
                                  "font-size": "16px",
                                  color: "#454c5c",
                                  "font-weight": "700",
                                  "margin-top": "10px",
                                },
                              },
                              [t._v("按专业统计流程信息")],
                            ),
                          ]),
                          a("div", {
                            staticClass: "col row items-center",
                            staticStyle: { float: "right" },
                          }),
                        ]),
                        a("div", {
                          staticStyle: { height: "260px" },
                          attrs: { id: "processGateCountFour" },
                        }),
                      ],
                    ),
                    a("hr", {
                      directives: [
                        {
                          name: "show",
                          rawName: "v-show",
                          value: "generalSituation" == t.processTab && "D" === t.viewPermit,
                          expression: "processTab == 'generalSituation' && viewPermit === 'D'",
                        },
                      ],
                    }),
                    a(
                      "div",
                      {
                        directives: [
                          {
                            name: "show",
                            rawName: "v-show",
                            value: "generalSituation" == t.processTab && "S" === t.viewPermit,
                            expression: "processTab == 'generalSituation' && viewPermit === 'S'",
                          },
                        ],
                        staticClass: "text-center q-my-md",
                      },
                      [
                        a("div", { staticClass: "row" }, [
                          a("div", { staticClass: "col" }),
                          a("div", { staticClass: "col-6" }, [
                            a(
                              "label",
                              {
                                staticStyle: {
                                  "font-size": "16px",
                                  color: "#454c5c",
                                  "font-weight": "700",
                                  "margin-top": "10px",
                                },
                              },
                              [t._v("按班级统计流程信息")],
                            ),
                          ]),
                          a("div", {
                            staticClass: "col row items-center",
                            staticStyle: { float: "right" },
                          }),
                        ]),
                        a("div", {
                          staticStyle: { height: "260px" },
                          attrs: { id: "processGateCountThree" },
                        }),
                      ],
                    ),
                    a("hr", {
                      directives: [
                        {
                          name: "show",
                          rawName: "v-show",
                          value: "generalSituation" == t.processTab && "S" === t.viewPermit,
                          expression: "processTab == 'generalSituation' && viewPermit === 'S'",
                        },
                      ],
                    }),
                  ],
                ],
                2,
              ),
              a(
                "q-dialog",
                {
                  attrs: { persistent: "", fullWidth: "", maximized: t.maximizedToggle },
                  model: {
                    value: t.taskTargetDialog,
                    callback: function (e) {
                      t.taskTargetDialog = e;
                    },
                    expression: "taskTargetDialog",
                  },
                },
                [
                  a(
                    "q-layout",
                    { staticClass: "bg-white", attrs: { view: "lHh lpr lFf", container: "" } },
                    [
                      a(
                        "q-header",
                        { staticClass: "full-width bg-white" },
                        [
                          a("q-toolbar", [
                            a(
                              "div",
                              {
                                staticClass:
                                  "full-width row items-center justify-between q-px-xs q-py-sm",
                              },
                              [
                                a("div", { staticClass: "text-bold text-black" }, [
                                  t._v("设置统计对象"),
                                ]),
                                a("q-btn", {
                                  attrs: { unelevated: "", color: "primary", label: "完成" },
                                  on: {
                                    click: function (e) {
                                      t.taskTargetDialog = !1;
                                    },
                                  },
                                }),
                              ],
                              1,
                            ),
                          ]),
                        ],
                        1,
                      ),
                      a(
                        "q-page-container",
                        [
                          a(
                            "q-page",
                            [
                              a("neu-assign-student", {
                                attrs: {
                                  permit: t.menuInfo ? t.menuInfo.view_permit : null,
                                  "permit-mode": "V",
                                  "menu-id": t.menuInfo ? t.menuInfo.id : null,
                                },
                                model: {
                                  value: t.record.task_target,
                                  callback: function (e) {
                                    t.$set(t.record, "task_target", e);
                                  },
                                  expression: "record.task_target",
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
        qt = [],
        St = {
          name: "ProcessAnalysis",
          components: { NeuAssignStudent: n["a"] },
          data() {
            return {
              menuInfo: null,
              showExp: !1,
              processTab: "generalSituation",
              viewPermit: "",
              roleId: JSON.parse(window.localStorage.getItem("userinfo")).role_id,
              taskTargetDialog: !1,
              record: { begin_time: "", end_time: "", task_target: [] },
              teacher_no: JSON.parse(window.localStorage.getItem("userinfo")).login_name,
              getProcessTypeList: [],
              selection: [],
              showPic: 0,
              loginName: "",
              processOneTitle: ["product", "申请人数", "申请次数"],
              maximizedToggle: !0,
            };
          },
          watch: {
            loginName(t) {
              t === this.teacher_no
                ? (this.selection = this.getProcessTypeList.reduce(
                    (t, e) => t.concat(!0 === e.iscreate ? e.value : 0),
                    [],
                  ))
                : (this.selection = this.getProcessTypeList.reduce(
                    (t, e) => t.concat(e.value),
                    [],
                  ));
            },
          },
          mounted() {
            (window.localStorage.getItem("menu") &&
              ((this.menuInfo = JSON.parse(window.localStorage.getItem("menu")).find(
                (t) => "analysis" === t.id,
              )),
              (this.viewPermit = this.menuInfo.view_permit)),
              this.$axiosAction("/api/public.api", { action: "queryDefaultStatPeriod" }).then(
                (t) => {
                  0 === t.data.code &&
                    ((this.record.begin_time = t.data.begin_date),
                    (this.record.end_time = t.data.end_date));
                },
              ),
              this.getProcessType());
          },
          computed: {},
          methods: {
            chooseReal() {},
            getProcessType() {
              this.$axiosAction("/api/teacher/process/process.api", {
                action: "queryTypeListSimple",
                service_flag: "G",
              }).then((t) => {
                ((this.getProcessTypeList = t.data.result),
                  (this.selection = this.getProcessTypeList.reduce(
                    (t, e) => t.concat(e.value),
                    [],
                  )));
              });
            },
            getAllNum() {
              0 !== this.selection.length
                ? null === this.record.begin_time &&
                  null === this.record.end_time &&
                  0 === this.record.task_target.length
                  ? ((this.showPic = 0),
                    this.$q.notify({
                      color: "red-5",
                      textColor: "white",
                      icon: "warning",
                      message: "请选择统计时间与统计学生！",
                    }))
                  : null === this.record.begin_time || null === this.record.end_time
                    ? ((this.showPic = 0),
                      this.$q.notify({
                        color: "red-5",
                        textColor: "white",
                        icon: "warning",
                        message: "请选择统计时间！",
                      }))
                    : 0 === this.record.task_target.length
                      ? ((this.showPic = 0),
                        this.$q.notify({
                          color: "red-5",
                          textColor: "white",
                          icon: "warning",
                          message: "请选择统计学生！",
                        }))
                      : this.$axiosAction("/api/teacher/analysis/analysis.api", {
                          action: "checkTime",
                          begin_time: this.record.begin_time,
                          end_time: this.record.end_time,
                        }).then((t) => {
                          0 === t.data.code
                            ? ((this.showPic = 1), (this.showExp = !1), this.getPic())
                            : (this.showPic = 0);
                        })
                : this.$showErrorNotify("请至少选择一个流程名称");
            },
            columnPic(t, e, a) {
              const i = document.getElementById(t),
                s = r["a"](i);
              var n = {};
              ((n = {
                legend: {},
                tooltip: {},
                dataset: { dimensions: e, source: a },
                grid: { left: "3%", right: "4%", bottom: "3%", containLabel: !0 },
                xAxis: { axisLabel: { show: !0, interval: "auto" } },
                yAxis: { type: "category" },
                series: [{ type: "bar" }, { type: "bar" }],
              }),
                n && s.setOption(n, !0),
                (window.onresize = function () {
                  (s.resize(),
                    r["a"](document.getElementById("processGateCountOne")).resize(),
                    r["a"](document.getElementById("processGateCountTwo")).resize(),
                    r["a"](document.getElementById("processGateCountThree")).resize(),
                    r["a"](document.getElementById("processGateCountFour")).resize());
                }));
            },
            getPic() {
              (this.$axiosAction("/api/teacher/analysis/analysis.api", {
                action: "getProcessGradeAnalysis",
                begin_time: this.record.begin_time,
                end_time: this.record.end_time,
                task_target: JSON.stringify(this.record.task_target),
                selection: this.selection,
                service_flag: "G",
              }).then((t) => {
                (0 === t.data.code
                  ? ((this.showPic = 1),
                    this.columnPic("processGateCountOne", this.processOneTitle, t.data.grade),
                    this.columnPic("processGateCountTwo", this.processOneTitle, t.data.dep),
                    this.columnPic("processGateCountThree", this.processOneTitle, t.data.class),
                    this.columnPic("processGateCountFour", this.processOneTitle, t.data.major),
                    this.$q.loading.show())
                  : (this.showPic = 0),
                  this.$q.loading.hide());
              }),
                this.$q.loading.hide());
            },
          },
        },
        kt = St,
        Tt = Object(h["a"])(kt, Ct, qt, !1, null, null, null),
        Nt = Tt.exports;
      (j()(Tt, "components", {
        QCard: u["a"],
        QExpansionItem: p["a"],
        QList: g["a"],
        QItem: v["a"],
        QItemSection: w["a"],
        QField: _["a"],
        QIcon: y["a"],
        QPopupProxy: b["a"],
        QDate: f["a"],
        QBtn: x["a"],
        QSeparator: C["a"],
        QItemLabel: q["a"],
        QCheckbox: S["a"],
        QTabs: k["a"],
        QTab: T["a"],
        QDialog: N["a"],
        QLayout: I["a"],
        QHeader: L["a"],
        QToolbar: R["a"],
        QPageContainer: D["a"],
        QPage: A["a"],
      }),
        j()(Tt, "directives", { ClosePopup: Q["a"] }));
      var Pt = {
          name: "AnalysisStuData",
          components: {
            NeuAssignStudent: n["a"],
            LeaveAnalysis: E,
            NoticeAnalysis: G,
            SigninAnalysis: U,
            ApplyAnalysis: st,
            CollectsAnalysis: dt,
            SignupAnalysis: vt,
            ProcessAnalysis: xt,
            ProcessGateAnalysis: Nt,
          },
          data() {
            return {
              tabName: "请假",
              tab: "leave",
              leaveTab: "",
              applyType: null,
              begin_time: "",
              end_time: "",
              task_target: [],
              begin_date: "",
              end_date: "",
              chooseTime: !1,
              taskTargetDialog: !1,
              maximizedToggle: !0,
            };
          },
          watch: {
            begin_time() {
              this.checkTime();
            },
            end_time() {
              this.checkTime();
            },
          },
          computed: {
            menuInfo() {
              return window.localStorage.getItem("menu")
                ? JSON.parse(window.localStorage.getItem("menu")).find((t) => "analysis" === t.id)
                : null;
            },
          },
          mounted() {
            this.$axiosAction("/api/public.api", { action: "queryDefaultStatPeriod" }).then((t) => {
              0 === t.data.code &&
                ((this.begin_time = t.data.begin_date),
                (this.end_time = t.data.end_date),
                (this.begin_date = t.data.begin_date),
                (this.end_date = t.data.end_date));
            });
          },
          methods: {
            checkTime() {
              0 !== this.begin_time.length &&
                0 !== this.end_time.length &&
                this.$axiosAction("/api/teacher/analysis/analysis.api", {
                  action: "checkTime",
                  begin_time: this.begin_time,
                  end_time: this.end_time,
                }).then((t) => {
                  0 === t.data.code
                    ? ((this.begin_date = this.begin_time), (this.end_date = this.end_time))
                    : ((this.begin_date = ""), (this.end_date = ""));
                });
            },
            showTimeChoose(t) {
              this.chooseTime = !t;
            },
            goBack() {
              this.$router.push("/teacher/analysis/index");
            },
          },
        },
        It = Pt,
        Lt = a("6ac5"),
        Rt = a("f20b"),
        Dt = Object(h["a"])(It, i, s, !1, null, null, null);
      e["default"] = Dt.exports;
      j()(Dt, "components", {
        QLayout: I["a"],
        QHeader: L["a"],
        QToolbar: R["a"],
        QBtn: x["a"],
        QToolbarTitle: Lt["a"],
        QBtnDropdown: Rt["a"],
        QList: g["a"],
        QItem: v["a"],
        QItemSection: w["a"],
        QPageContainer: D["a"],
        QPage: A["a"],
        QDialog: N["a"],
      });
    },
  },
]);
