(window["webpackJsonp"] = window["webpackJsonp"] || []).push([
  [75],
  {
    "18bf": function (e, t, a) {
      "use strict";
      a.r(t);
      var i = function () {
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
                      a("q-toolbar-title", [e._v("新建模板")]),
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
                    { staticClass: "bg-white-3" },
                    [
                      a(
                        "q-form",
                        { staticClass: "q-gutter-sm full-width", on: { submit: e.saveRecord } },
                        [
                          e.menuInfo
                            ? a(
                                "q-card",
                                { staticClass: "full-width", attrs: { flat: "" } },
                                [
                                  a(
                                    "q-list",
                                    [
                                      a(
                                        "q-item",
                                        [
                                          a(
                                            "q-item-section",
                                            [
                                              a("q-item-label", { staticClass: "text-bold" }, [
                                                e._v("模板说明"),
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
                                        [
                                          a("q-item-section", { attrs: { avatar: "" } }, [
                                            a(
                                              "div",
                                              { staticClass: "neu-css-before-red-asterisk" },
                                              [e._v("\n                名称\n              ")],
                                            ),
                                          ]),
                                          a(
                                            "q-item-section",
                                            [
                                              a("q-input", {
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
                                                  value: e.record.title,
                                                  callback: function (t) {
                                                    e.$set(e.record, "title", t);
                                                  },
                                                  expression: "record.title",
                                                },
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
                                          a(
                                            "q-item-section",
                                            [
                                              a(
                                                "q-item-label",
                                                {
                                                  staticClass:
                                                    "neu-css-before-red-asterisk q-my-sm",
                                                },
                                                [e._v("要求")],
                                              ),
                                              a("q-editor", {
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
                                                  value: e.record.detail,
                                                  callback: function (t) {
                                                    e.$set(e.record, "detail", t);
                                                  },
                                                  expression: "record.detail",
                                                },
                                              }),
                                            ],
                                            1,
                                          ),
                                        ],
                                        1,
                                      ),
                                      a("q-separator", {
                                        staticStyle: { height: "7px" },
                                        attrs: { color: "grey-3" },
                                      }),
                                      a(
                                        "q-item",
                                        [
                                          a(
                                            "q-item-section",
                                            [
                                              a("q-item-label", { staticClass: "text-bold" }, [
                                                e._v("填写有效期间"),
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
                                        [
                                          a("q-item-section", { attrs: { avatar: "" } }, [
                                            a(
                                              "div",
                                              { staticClass: "neu-css-before-red-asterisk" },
                                              [e._v("\n                开始时间\n              ")],
                                            ),
                                          ]),
                                          a(
                                            "q-item-section",
                                            [
                                              a("q-field", {
                                                staticStyle: { width: "100%" },
                                                attrs: {
                                                  outlined: "",
                                                  dense: "",
                                                  "stack-label": "",
                                                  "hide-bottom-space": "",
                                                  "lazy-rules": "",
                                                  rules: [
                                                    function (e) {
                                                      return !!e || "请填写该项";
                                                    },
                                                  ],
                                                  value: e.record.begin_date,
                                                },
                                                scopedSlots: e._u(
                                                  [
                                                    {
                                                      key: "control",
                                                      fn: function () {
                                                        return [e._v(e._s(e.record.begin_date))];
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
                                                                            value:
                                                                              e.record.begin_date,
                                                                            callback: function (t) {
                                                                              e.$set(
                                                                                e.record,
                                                                                "begin_date",
                                                                                t,
                                                                              );
                                                                            },
                                                                            expression:
                                                                              "record.begin_date",
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
                                                  1320188691,
                                                ),
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
                                            a(
                                              "div",
                                              { staticClass: "neu-css-before-red-asterisk" },
                                              [e._v("\n                截止时间\n              ")],
                                            ),
                                          ]),
                                          a(
                                            "q-item-section",
                                            [
                                              a("q-field", {
                                                staticStyle: { width: "100%" },
                                                attrs: {
                                                  outlined: "",
                                                  dense: "",
                                                  "stack-label": "",
                                                  "hide-bottom-space": "",
                                                  "lazy-rules": "",
                                                  rules: [
                                                    function (e) {
                                                      return !!e || "请填写该项";
                                                    },
                                                    function (t) {
                                                      return (
                                                        t > e.record.begin_date ||
                                                        "截止日期应在开始日期之后"
                                                      );
                                                    },
                                                  ],
                                                  value: e.record.end_date,
                                                },
                                                scopedSlots: e._u(
                                                  [
                                                    {
                                                      key: "control",
                                                      fn: function () {
                                                        return [e._v(e._s(e.record.end_date))];
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
                                                                            value:
                                                                              e.record.end_date,
                                                                            callback: function (t) {
                                                                              e.$set(
                                                                                e.record,
                                                                                "end_date",
                                                                                t,
                                                                              );
                                                                            },
                                                                            expression:
                                                                              "record.end_date",
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
                                                  182337299,
                                                ),
                                              }),
                                            ],
                                            1,
                                          ),
                                        ],
                                        1,
                                      ),
                                      a("q-separator", {
                                        staticStyle: { height: "7px" },
                                        attrs: { color: "grey-3" },
                                      }),
                                      a(
                                        "q-item",
                                        [
                                          a("q-item-section", { attrs: { avatar: "" } }, [
                                            a(
                                              "div",
                                              { staticClass: "neu-css-before-red-asterisk" },
                                              [e._v("\n                填写对象\n              ")],
                                            ),
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
                                                      class:
                                                        0 === e.record.task_target.length
                                                          ? "text-grey"
                                                          : "text-primary",
                                                      attrs: { size: "md" },
                                                      on: {
                                                        click: function (t) {
                                                          e.taskTargetDialog = !0;
                                                        },
                                                      },
                                                    },
                                                    [
                                                      e._v(
                                                        e._s(
                                                          0 === e.record.task_target.length
                                                            ? "请选择"
                                                            : "已选择 (" +
                                                                e.record.task_target.length +
                                                                ")",
                                                        ),
                                                      ),
                                                    ],
                                                  ),
                                                  a("q-icon", {
                                                    class:
                                                      0 === e.record.task_target.length
                                                        ? "text-grey"
                                                        : "text-primary",
                                                    attrs: {
                                                      name: "keyboard_arrow_right",
                                                      size: "sm",
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
                                      a("q-separator", {
                                        staticStyle: { height: "7px" },
                                        attrs: { color: "grey-3" },
                                      }),
                                      a(
                                        "q-item",
                                        [
                                          a("q-item-section", { attrs: { avatar: "" } }, [
                                            a(
                                              "div",
                                              { staticClass: "neu-css-before-red-asterisk" },
                                              [
                                                e._v(
                                                  "\n                允许填报人自己删除记录\n              ",
                                                ),
                                              ],
                                            ),
                                          ]),
                                          a("q-item-section"),
                                          a(
                                            "q-item-section",
                                            { attrs: { side: "" } },
                                            [
                                              a("q-toggle", {
                                                attrs: {
                                                  size: "lg",
                                                  "checked-icon": "check",
                                                  "unchecked-icon": "clear",
                                                  dense: "",
                                                  "false-value": 0,
                                                  "true-value": 1,
                                                },
                                                model: {
                                                  value: e.record.allow_delete,
                                                  callback: function (t) {
                                                    e.$set(e.record, "allow_delete", t);
                                                  },
                                                  expression: "record.allow_delete",
                                                },
                                              }),
                                            ],
                                            1,
                                          ),
                                        ],
                                        1,
                                      ),
                                      a("q-separator", {
                                        staticStyle: { height: "7px" },
                                        attrs: { color: "grey-3" },
                                      }),
                                      a(
                                        "q-item",
                                        [
                                          a("q-item-section", { attrs: { avatar: "" } }, [
                                            a(
                                              "div",
                                              { staticClass: "neu-css-before-red-asterisk" },
                                              [
                                                e._v(
                                                  "\n                填报日志系统管理员是否可见\n              ",
                                                ),
                                              ],
                                            ),
                                          ]),
                                          a("q-item-section"),
                                          a(
                                            "q-item-section",
                                            { attrs: { side: "" } },
                                            [
                                              a("q-toggle", {
                                                attrs: {
                                                  size: "lg",
                                                  "checked-icon": "check",
                                                  "unchecked-icon": "clear",
                                                  dense: "",
                                                  "false-value": 1,
                                                  "true-value": 0,
                                                },
                                                model: {
                                                  value: e.record.allow_look,
                                                  callback: function (t) {
                                                    e.$set(e.record, "allow_look", t);
                                                  },
                                                  expression: "record.allow_look",
                                                },
                                              }),
                                            ],
                                            1,
                                          ),
                                        ],
                                        1,
                                      ),
                                      a("q-separator", {
                                        staticStyle: { height: "7px" },
                                        attrs: { color: "grey-3" },
                                      }),
                                      a(
                                        "q-item",
                                        [
                                          a(
                                            "q-item-section",
                                            { attrs: { avatar: "" } },
                                            [
                                              a("q-item-label", [e._v("共享对象")]),
                                              a("q-item-label", { attrs: { caption: "" } }, [
                                                e._v("将该日志统计数据共享给他老师"),
                                              ]),
                                            ],
                                            1,
                                          ),
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
                                                      class:
                                                        0 === e.record.share_target.length
                                                          ? "text-grey"
                                                          : "text-primary",
                                                      attrs: { size: "md" },
                                                      on: {
                                                        click: function (t) {
                                                          e.shareDialog = !0;
                                                        },
                                                      },
                                                    },
                                                    [
                                                      e._v(
                                                        e._s(
                                                          0 === e.record.share_target.length
                                                            ? "请选择"
                                                            : "已选择 (" +
                                                                e.record.share_target.length +
                                                                ")",
                                                        ),
                                                      ),
                                                    ],
                                                  ),
                                                  a("q-icon", {
                                                    class:
                                                      0 === e.record.share_target.length
                                                        ? "text-grey"
                                                        : "text-primary",
                                                    attrs: {
                                                      name: "keyboard_arrow_right",
                                                      size: "sm",
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
                                      a(
                                        "div",
                                        {
                                          directives: [
                                            {
                                              name: "show",
                                              rawName: "v-show",
                                              value: !1,
                                              expression: "false",
                                            },
                                          ],
                                          staticClass: "row items-center",
                                        },
                                        [
                                          a(
                                            "div",
                                            {
                                              staticClass:
                                                "col-12 col-md-2 col-sm-3 neu-css-after-colon neu-css-before-red-asterisk",
                                              class: e.$q.screen.lt.sm ? "" : "text-right",
                                            },
                                            [e._v("已选择")],
                                          ),
                                          a(
                                            "div",
                                            { staticClass: "col-12 col-md-10 col-sm-9" },
                                            [
                                              a("neu-view-assigned-teacher", {
                                                attrs: { value: e.record.task_target },
                                              }),
                                            ],
                                            1,
                                          ),
                                        ],
                                      ),
                                      a("q-separator", {
                                        staticStyle: { height: "7px" },
                                        attrs: { color: "grey-3" },
                                      }),
                                      a(
                                        "div",
                                        {
                                          directives: [
                                            {
                                              name: "show",
                                              rawName: "v-show",
                                              value: !1,
                                              expression: "false",
                                            },
                                          ],
                                          staticClass: "row items-center",
                                        },
                                        [
                                          a(
                                            "div",
                                            {
                                              staticClass:
                                                "col-12 col-md-2 col-sm-3 neu-css-after-colon",
                                              class: e.$q.screen.lt.sm ? "" : "text-right",
                                            },
                                            [e._v("已选择")],
                                          ),
                                          a(
                                            "div",
                                            { staticClass: "col-12 col-md-10 col-sm-9" },
                                            [
                                              a("neu-view-assigned-teacher", {
                                                attrs: { value: e.record.share_target },
                                              }),
                                            ],
                                            1,
                                          ),
                                        ],
                                      ),
                                      a(
                                        "q-item",
                                        [
                                          a("q-item-section", { attrs: { avatar: "" } }, [
                                            a(
                                              "div",
                                              { staticClass: "neu-css-before-red-asterisk" },
                                              [
                                                e._v(
                                                  "\n                工作日志表单设置\n              ",
                                                ),
                                              ],
                                            ),
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
                                                      class:
                                                        0 === e.record.info_config.length
                                                          ? "text-grey"
                                                          : "text-primary",
                                                      attrs: { size: "md" },
                                                      on: {
                                                        click: function (t) {
                                                          return e.addInfoConfig(
                                                            e.record.info_config.length,
                                                          );
                                                        },
                                                      },
                                                    },
                                                    [e._v("添加")],
                                                  ),
                                                  a("q-icon", {
                                                    class:
                                                      0 === e.record.info_config.length
                                                        ? "text-grey"
                                                        : "text-primary",
                                                    attrs: {
                                                      name: "keyboard_arrow_right",
                                                      size: "sm",
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
                                      a(
                                        "q-item",
                                        {
                                          directives: [
                                            {
                                              name: "show",
                                              rawName: "v-show",
                                              value: 0 !== e.record.info_config.length,
                                              expression: "record.info_config.length !==0 ",
                                            },
                                          ],
                                        },
                                        [
                                          a(
                                            "q-item-section",
                                            [
                                              a("q-item-label", { staticClass: "q-my-sm" }, [
                                                e._v("工作日志表单项目"),
                                              ]),
                                              e._l(e.record.info_config, function (t, i) {
                                                return a(
                                                  "div",
                                                  {
                                                    key: i,
                                                    staticClass: "bg-grey-2 q-pa-sm q-mt-sm",
                                                  },
                                                  [
                                                    a("div", [
                                                      a(
                                                        "span",
                                                        { staticClass: "neu-css-after-colon" },
                                                        [e._v("第" + e._s(i + 1) + "题")],
                                                      ),
                                                      a(
                                                        "span",
                                                        {
                                                          staticClass:
                                                            "text-primary cursor-pointer q-ml-sm",
                                                          on: {
                                                            click: function (t) {
                                                              return e.editInfoConfig(i);
                                                            },
                                                          },
                                                        },
                                                        [e._v("编辑")],
                                                      ),
                                                      a(
                                                        "span",
                                                        {
                                                          staticClass:
                                                            "text-negative cursor-pointer q-ml-sm",
                                                          on: {
                                                            click: function (t) {
                                                              return e.deleteInfoConfig(i);
                                                            },
                                                          },
                                                        },
                                                        [e._v("删除")],
                                                      ),
                                                      a(
                                                        "span",
                                                        {
                                                          directives: [
                                                            {
                                                              name: "show",
                                                              rawName: "v-show",
                                                              value:
                                                                i + 1 !=
                                                                e.record.info_config.length,
                                                              expression:
                                                                "index + 1 != record.info_config.length",
                                                            },
                                                          ],
                                                          staticClass:
                                                            "text-primary cursor-pointer q-ml-sm",
                                                          on: {
                                                            click: function (t) {
                                                              return e.moveInfoConfig(i, 1);
                                                            },
                                                          },
                                                        },
                                                        [e._v("下移")],
                                                      ),
                                                      a(
                                                        "span",
                                                        {
                                                          directives: [
                                                            {
                                                              name: "show",
                                                              rawName: "v-show",
                                                              value: 0 != i,
                                                              expression: "index != 0",
                                                            },
                                                          ],
                                                          staticClass:
                                                            "text-primary cursor-pointer q-ml-sm",
                                                          on: {
                                                            click: function (t) {
                                                              return e.moveInfoConfig(i, -1);
                                                            },
                                                          },
                                                        },
                                                        [e._v("上移")],
                                                      ),
                                                    ]),
                                                    a("neu-widget", {
                                                      attrs: { config: t, viewMode: !0 },
                                                      model: {
                                                        value: e.infoModel[i],
                                                        callback: function (t) {
                                                          e.$set(e.infoModel, i, t);
                                                        },
                                                        expression: "infoModel[index]",
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
                                        1,
                                      ),
                                    ],
                                    1,
                                  ),
                                ],
                                1,
                              )
                            : e._e(),
                          a(
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
                              a("q-btn", {
                                staticStyle: { width: "40%", height: "100%" },
                                attrs: {
                                  outline: "",
                                  color: "grey",
                                  label: "取消",
                                  to: "/teacher/joblog/index",
                                },
                              }),
                              a("q-btn", {
                                staticStyle: { width: "60%", height: "100%" },
                                attrs: { color: "primary", label: "发布", type: "submit" },
                              }),
                            ],
                            1,
                          ),
                        ],
                        1,
                      ),
                      a(
                        "q-dialog",
                        {
                          attrs: { persistent: "", fullWidth: "", maximized: !0 },
                          model: {
                            value: e.taskTargetDialog,
                            callback: function (t) {
                              e.taskTargetDialog = t;
                            },
                            expression: "taskTargetDialog",
                          },
                        },
                        [
                          a(
                            "q-card",
                            { staticClass: "full-width", attrs: { flat: "" } },
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
                                      e._v("设置填写对象"),
                                    ]),
                                    a("q-btn", {
                                      attrs: { unelevated: "", color: "primary", label: "完成" },
                                      on: {
                                        click: function (t) {
                                          e.taskTargetDialog = !1;
                                        },
                                      },
                                    }),
                                  ],
                                  1,
                                ),
                              ]),
                              a(
                                "q-card-section",
                                [
                                  a("neu-assign-teacher", {
                                    model: {
                                      value: e.record.task_target,
                                      callback: function (t) {
                                        e.$set(e.record, "task_target", t);
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
                      a(
                        "q-dialog",
                        {
                          attrs: { persistent: "", fullWidth: "", maximized: !0 },
                          model: {
                            value: e.shareDialog,
                            callback: function (t) {
                              e.shareDialog = t;
                            },
                            expression: "shareDialog",
                          },
                        },
                        [
                          a(
                            "q-card",
                            { staticClass: "full-width", attrs: { flat: "" } },
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
                                      e._v("设置共享对象"),
                                    ]),
                                    a("q-btn", {
                                      attrs: { unelevated: "", color: "primary", label: "完成" },
                                      on: {
                                        click: function (t) {
                                          e.shareDialog = !1;
                                        },
                                      },
                                    }),
                                  ],
                                  1,
                                ),
                              ]),
                              a(
                                "q-card-section",
                                [
                                  a("neu-assign-teacher", {
                                    model: {
                                      value: e.record.share_target,
                                      callback: function (t) {
                                        e.$set(e.record, "share_target", t);
                                      },
                                      expression: "record.share_target",
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
                      a(
                        "q-dialog",
                        {
                          attrs: { persistent: "", maximized: !0 },
                          model: {
                            value: e.infoConfigDialog,
                            callback: function (t) {
                              e.infoConfigDialog = t;
                            },
                            expression: "infoConfigDialog",
                          },
                        },
                        [
                          a(
                            "q-card",
                            { staticClass: "full-width", attrs: { flat: "" } },
                            [
                              a("q-card-section", [
                                a("div", { staticClass: "text-bold" }, [e._v("设置工作日志表单")]),
                              ]),
                              a(
                                "q-card-section",
                                [
                                  a("neu-define-widget", {
                                    on: {
                                      save: function (t) {
                                        e.infoConfigDialog = !1;
                                      },
                                      cancel: e.cancelInfoConfig,
                                    },
                                    model: {
                                      value: e.record.info_config[e.infoConfigIndex],
                                      callback: function (t) {
                                        e.$set(e.record.info_config, e.infoConfigIndex, t);
                                      },
                                      expression: "record.info_config[infoConfigIndex]",
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
        o = (a("a434"), a("ded3")),
        r = a.n(o),
        n = a("9a3d"),
        l = a("5333"),
        c = a("8bef"),
        d = a("974f"),
        f = {
          name: "JoblogIndex",
          components: {
            NeuAssignTeacher: n["a"],
            NeuViewAssignedTeacher: l["a"],
            NeuDefineWidget: c["a"],
            NeuWidget: d["a"],
          },
          data() {
            return {
              editorToolBar: JSON.parse(window.localStorage.editorToolBar),
              editorFonts: JSON.parse(window.localStorage.editorFonts),
              menuInfo: null,
              record: {
                title: "",
                detail: "",
                begin_date: "",
                end_date: "",
                task_target: [],
                share_target: [],
                info_config: [],
                allow_delete: 0,
                allow_look: 0,
              },
              taskTargetDialog: !1,
              shareDialog: !1,
              infoConfigDialog: !1,
              infoConfigIndex: 0,
              infoModel: [],
            };
          },
          mounted() {
            (window.localStorage.getItem("menu") &&
              (this.menuInfo = JSON.parse(window.localStorage.getItem("menu")).find(
                (e) => "joblog" === e.id,
              )),
              this.$route.params &&
                this.$route.params.record &&
                ((this.record = this.$route.params.record),
                null == this.record.share_target && (this.record.share_target = [])));
          },
          methods: {
            goBack() {
              this.$router.push("/teacher/joblog/index");
            },
            addInfoConfig(e) {
              (this.record.info_config.splice(e, 0, null),
                this.infoModel.splice(e, 0, null),
                (this.infoConfigDialog = !0),
                (this.infoConfigIndex = e));
            },
            cancelInfoConfig() {
              (this.record.info_config[this.infoConfigIndex] ||
                (this.record.info_config.splice(this.infoConfigIndex, 1),
                this.infoModel.splice(this.infoConfigIndex, 1)),
                (this.infoConfigDialog = !1));
            },
            editInfoConfig(e) {
              ((this.infoConfigDialog = !0), (this.infoConfigIndex = e));
            },
            deleteInfoConfig(e) {
              (this.record.info_config.splice(e, 1), this.infoModel.splice(e, 1));
            },
            moveInfoConfig(e, t) {
              (this.record.info_config.splice(e + t, 0, this.record.info_config.splice(e, 1)[0]),
                this.infoModel.splice(e + t, 0, this.infoModel.splice(e, 1)[0]));
            },
            saveRecord() {
              if (!this.record.detail) return void this.$showErrorNotify("请填写要求");
              if (!this.record.task_target || 0 === this.record.task_target.length)
                return void this.$showErrorNotify("请设置填写对象");
              if (!this.record.info_config || 0 === this.record.info_config.length)
                return void this.$showErrorNotify("请设置工作日志表单项目");
              this.$q.loading.show();
              const e = r()({}, this.record);
              ((e.task_target = JSON.stringify(e.task_target)),
                (e.share_target =
                  e.share_target && e.share_target.length > 0
                    ? JSON.stringify(e.share_target)
                    : null),
                (e.info_config = JSON.stringify(e.info_config)),
                this.$axiosAction("/api/teacher/joblog/joblog.api", r()({ action: "insert" }, e))
                  .then((e) => {
                    (0 === e.data.code && this.$router.push("/teacher/joblog/index"),
                      this.$q.loading.hide());
                  })
                  .catch((e) => {
                    this.$q.loading.hide();
                  }));
            },
          },
        },
        g = f,
        u = a("2877"),
        m = a("4d5a"),
        h = a("e359"),
        p = a("65c6"),
        v = a("9c40"),
        _ = a("6ac5"),
        q = a("09e3"),
        b = a("9989"),
        x = a("0378"),
        k = a("f09f"),
        w = a("1c1c"),
        y = a("66e5"),
        C = a("4074"),
        I = a("0170"),
        D = a("eb85"),
        S = a("27f9"),
        $ = a("d66b"),
        Q = a("8572"),
        N = a("0016"),
        z = a("7cbe"),
        T = a("52ee"),
        M = a("9564"),
        j = a("7ff0"),
        J = a("24e8"),
        Y = a("a370"),
        F = a("7f67"),
        O = a("eebe"),
        B = a.n(O),
        E = Object(u["a"])(g, i, s, !1, null, null, null);
      t["default"] = E.exports;
      (B()(E, "components", {
        QLayout: m["a"],
        QHeader: h["a"],
        QToolbar: p["a"],
        QBtn: v["a"],
        QToolbarTitle: _["a"],
        QPageContainer: q["a"],
        QPage: b["a"],
        QForm: x["a"],
        QCard: k["a"],
        QList: w["a"],
        QItem: y["a"],
        QItemSection: C["a"],
        QItemLabel: I["a"],
        QSeparator: D["a"],
        QInput: S["a"],
        QEditor: $["a"],
        QField: Q["a"],
        QIcon: N["a"],
        QPopupProxy: z["a"],
        QDate: T["a"],
        QToggle: M["a"],
        QFooter: j["a"],
        QDialog: J["a"],
        QCardSection: Y["a"],
      }),
        B()(E, "directives", { ClosePopup: F["a"] }));
    },
  },
]);
