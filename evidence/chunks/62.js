(window["webpackJsonp"] = window["webpackJsonp"] || []).push([
  [62],
  {
    "4c50": function (t, e, a) {
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
                      a("q-toolbar-title", [t._v("教师信息收集数据分析")]),
                    ],
                    1,
                  ),
                ],
                1,
              ),
              a(
                "q-page-container",
                [
                  a("q-page", { staticClass: "bg-grey-3 q-pb-sm" }, [a("message-analysis")], 1),
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
                                  a("neu-assign-teacher", {
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
        i = [],
        l = a("9a3d"),
        n = function () {
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
                    [a("label", [t._v("请选择统计时间和统计教师！")])],
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
                          a("q-tab", { attrs: { name: "realTime", label: "教师数据" } }),
                          a("q-tab", { attrs: { name: "generalSituation", label: "院系数据" } }),
                        ],
                        1,
                      ),
                      a("q-separator"),
                      [
                        "realTime" == t.applyTab
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
                                            return t.ApplyRule();
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
                                          t._v(t._s(e.messaged)),
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
                                          t._v(t._s(e.nomessage)),
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
                                  a("neu-assign-teacher", {
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
        o = [],
        r = a("313e"),
        c = {
          name: "ApplyAnalysis",
          props: {},
          components: { NeuAssignTeacher: l["a"] },
          computed: {
            applyShortTitle() {
              return "收集";
            },
          },
          data() {
            return {
              applyTab: "realTime",
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
            ApplyRule() {
              ((this.ruleTitle = "填写率"),
                (this.ruleMessage = "已填写的人数/总人数"),
                (this.countRuleShow = !0));
            },
            ringPic(t, e, a) {
              const s = document.getElementById(t),
                i = r["a"](s);
              var l = {};
              ((l = {
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
                l && i.setOption(l),
                (window.onresize = function () {
                  (i.resize(), r["a"](document.getElementById("collects")).resize());
                }));
            },
            columnPic(t, e, a, s) {
              const i = document.getElementById(t),
                l = r["a"](i);
              var n = {};
              ((n = {
                legend: { type: "scroll" },
                tooltip: {},
                dataset: { dimensions: e, source: a },
                xAxis: { axisLabel: { show: !0, interval: "auto", formatter: "{value}" } },
                yAxis: { type: "category" },
                series: s,
              }),
                n && l.setOption(n, !0),
                (window.onresize = function () {
                  (l.resize(), r["a"](document.getElementById("collectDep")).resize());
                }));
            },
            getCollectAllNum() {
              0 !== this.begin_time.length &&
              0 !== this.end_time.length &&
              0 !== this.task_target.length
                ? this.$axiosAction("/api/teacher/teaanalysis/tanalysis.api", {
                    action: "getMessageAllNum",
                    task_target: JSON.stringify(this.task_target),
                    begin_time: this.begin_time,
                    end_time: this.end_time,
                    teacher_no: this.loginName,
                  })
                    .then((t) => {
                      const e = [],
                        a = ["product"],
                        s = { product: "收\n集\n人\n数" },
                        i = [],
                        l = [];
                      if (0 === t.data.code)
                        if ("realTime" === this.applyTab) {
                          this.collectNumList = t.data.collectResult;
                          for (let s = 0; s < t.data.collectResult.length; s++)
                            (e.push(
                              {
                                name: "已收集人数",
                                value: t.data.collectResult[s].messaged,
                                itemStyle: { color: "#FA8072" },
                              },
                              {
                                name: "未收集人数",
                                value: t.data.collectResult[s].nomessage,
                                itemStyle: { color: "#33CCFF" },
                              },
                            ),
                              (this.collectAllNum = t.data.collectResult[s].total),
                              (this.collectEdNum = t.data.collectResult[s].messaged));
                          const a =
                            this.percent(this.collectEdNum, this.collectAllNum) + "%\n收集率";
                          (this.$q.loading.hide(), this.ringPic("collects", e, a));
                        } else {
                          for (let e = 0; e < t.data.depresult.length; e++) {
                            const i = t.data.depresult[e].dep_name,
                              n = t.data.depresult[e].depmessage,
                              o = i + " " + n + "人";
                            (a.push(o), l.push({ type: "bar" }), (s[o] = n));
                          }
                          (i.push(s),
                            this.$q.loading.hide(),
                            this.columnPic("collectDep", a, i, l));
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
                    message: "请选择统计时间与统计教师！",
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
                        message: "请选择统计教师！",
                      }))
                    : this.$axiosAction("/api/teacher/teaanalysis/tanalysis.api", {
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
        d = c,
        m = a("2877"),
        h = a("f09f"),
        g = a("3b73"),
        u = a("1c1c"),
        p = a("66e5"),
        _ = a("4074"),
        b = a("8572"),
        v = a("0016"),
        w = a("7cbe"),
        y = a("52ee"),
        f = a("9c40"),
        x = a("eb85"),
        q = a("0170"),
        k = a("8f8e"),
        C = a("429b"),
        T = a("7460"),
        S = a("24e8"),
        N = a("4b7e"),
        Q = a("4d5a"),
        A = a("e359"),
        I = a("65c6"),
        D = a("09e3"),
        P = a("9989"),
        z = a("7f67"),
        E = a("eebe"),
        R = a.n(E),
        $ = Object(m["a"])(d, n, o, !1, null, null, null),
        F = $.exports;
      (R()($, "components", {
        QCard: h["a"],
        QExpansionItem: g["a"],
        QList: u["a"],
        QItem: p["a"],
        QItemSection: _["a"],
        QField: b["a"],
        QIcon: v["a"],
        QPopupProxy: w["a"],
        QDate: y["a"],
        QBtn: f["a"],
        QSeparator: x["a"],
        QItemLabel: q["a"],
        QCheckbox: k["a"],
        QTabs: C["a"],
        QTab: T["a"],
        QDialog: S["a"],
        QCardActions: N["a"],
        QLayout: Q["a"],
        QHeader: A["a"],
        QToolbar: I["a"],
        QPageContainer: D["a"],
        QPage: P["a"],
      }),
        R()($, "directives", { ClosePopup: z["a"] }));
      var L = {
          name: "AnalysisStuData",
          components: { NeuAssignTeacher: l["a"], MessageAnalysis: F },
          data() {
            return {
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
        M = L,
        O = a("6ac5"),
        j = Object(m["a"])(M, s, i, !1, null, null, null);
      e["default"] = j.exports;
      R()(j, "components", {
        QLayout: Q["a"],
        QHeader: A["a"],
        QToolbar: I["a"],
        QBtn: f["a"],
        QToolbarTitle: O["a"],
        QPageContainer: D["a"],
        QPage: P["a"],
        QDialog: S["a"],
      });
    },
  },
]);
