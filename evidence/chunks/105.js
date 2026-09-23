(window["webpackJsonp"] = window["webpackJsonp"] || []).push([
  [105],
  {
    "0fc5": function (e, t, s) {
      "use strict";
      s.r(t);
      var i = function () {
          var e = this,
            t = this,
            s = t.$createElement,
            i = t._self._c || s;
          return i(
            "q-layout",
            { attrs: { view: "lHh lpr lFf" } },
            [
              i(
                "q-header",
                { staticClass: "bg-grey-3 text-black" },
                [
                  i(
                    "q-toolbar",
                    [
                      i("q-btn", {
                        attrs: { flat: "", round: "", dense: "", icon: "keyboard_arrow_left" },
                        on: { click: t.goBack },
                      }),
                      i("q-toolbar-title", [
                        t._v(t._s("a" == t.type ? "新建" : "编辑") + t._s(t.menuInfo.title)),
                      ]),
                    ],
                    1,
                  ),
                ],
                1,
              ),
              i(
                "q-page-container",
                [
                  i(
                    "q-page",
                    { staticClass: "bg-white-3" },
                    [
                      i(
                        "q-form",
                        {
                          staticClass: "q-gutter-sm full-width",
                          on: { submit: t.saveProcessType },
                        },
                        [
                          t.menuInfo
                            ? i(
                                "q-card",
                                { staticClass: "full-width", attrs: { flat: "" } },
                                [
                                  i(
                                    "q-list",
                                    [
                                      i(
                                        "q-item",
                                        [
                                          i("q-item-section", { attrs: { avatar: "" } }, [
                                            i(
                                              "div",
                                              { staticClass: "neu-css-before-red-asterisk" },
                                              [t._v("\n                流程名称\n              ")],
                                            ),
                                          ]),
                                          i(
                                            "q-item-section",
                                            [
                                              i("q-input", {
                                                attrs: {
                                                  outlined: "",
                                                  dense: "",
                                                  disable: !t.record.is_author && "e" == t.type,
                                                  "hide-bottom-space": "",
                                                  "lazy-rules": "",
                                                  rules: [
                                                    function (e) {
                                                      return !!e || "请填写该项";
                                                    },
                                                  ],
                                                },
                                                model: {
                                                  value: t.record.process_type_name,
                                                  callback: function (e) {
                                                    t.$set(t.record, "process_type_name", e);
                                                  },
                                                  expression: "record.process_type_name",
                                                },
                                              }),
                                            ],
                                            1,
                                          ),
                                        ],
                                        1,
                                      ),
                                      i("q-separator"),
                                      i(
                                        "q-item",
                                        [
                                          i("q-item-section", { attrs: { avatar: "" } }, [
                                            i(
                                              "div",
                                              { staticClass: "neu-css-before-red-asterisk" },
                                              [t._v("\n                流程描述\n              ")],
                                            ),
                                          ]),
                                          i(
                                            "q-item-section",
                                            [
                                              i("q-input", {
                                                attrs: {
                                                  outlined: "",
                                                  dense: "",
                                                  disable: !t.record.is_author && "e" == t.type,
                                                  "hide-bottom-space": "",
                                                  "lazy-rules": "",
                                                  rules: [
                                                    function (e) {
                                                      return !!e || "请填写该项";
                                                    },
                                                  ],
                                                },
                                                model: {
                                                  value: t.record.process_type_detail,
                                                  callback: function (e) {
                                                    t.$set(t.record, "process_type_detail", e);
                                                  },
                                                  expression: "record.process_type_detail",
                                                },
                                              }),
                                            ],
                                            1,
                                          ),
                                        ],
                                        1,
                                      ),
                                      i("q-separator"),
                                      i(
                                        "q-item",
                                        [
                                          i("q-item-section", { attrs: { avatar: "" } }, [
                                            i(
                                              "div",
                                              { staticClass: "neu-css-before-red-asterisk" },
                                              [t._v("\n                申请限制\n              ")],
                                            ),
                                          ]),
                                          i(
                                            "q-item-section",
                                            [
                                              i("q-select", {
                                                attrs: {
                                                  outlined: "",
                                                  dense: "",
                                                  disable: !t.record.is_author && "e" == t.type,
                                                  options: t.options,
                                                  label: "选择申请限制",
                                                },
                                                model: {
                                                  value: t.record.processlimit,
                                                  callback: function (e) {
                                                    t.$set(t.record, "processlimit", e);
                                                  },
                                                  expression: "record.processlimit",
                                                },
                                              }),
                                            ],
                                            1,
                                          ),
                                        ],
                                        1,
                                      ),
                                      i("q-separator"),
                                      i(
                                        "q-item",
                                        [
                                          i("q-item-section", { attrs: { avatar: "" } }, [
                                            i(
                                              "div",
                                              { staticClass: "neu-css-before-red-asterisk" },
                                              [t._v("\n                启用\n              ")],
                                            ),
                                          ]),
                                          i("q-item-section"),
                                          i(
                                            "q-item-section",
                                            { attrs: { side: "" } },
                                            [
                                              i("q-toggle", {
                                                attrs: {
                                                  size: "lg",
                                                  "checked-icon": "check",
                                                  disable: !t.record.is_author && "e" == t.type,
                                                  "unchecked-icon": "clear",
                                                  dense: "",
                                                  "false-value": "0",
                                                  "true-value": "1",
                                                },
                                                model: {
                                                  value: t.record.process_type_status_app,
                                                  callback: function (e) {
                                                    t.$set(t.record, "process_type_status_app", e);
                                                  },
                                                  expression: "record.process_type_status_app",
                                                },
                                              }),
                                            ],
                                            1,
                                          ),
                                        ],
                                        1,
                                      ),
                                      i("q-separator"),
                                      i(
                                        "q-item",
                                        [
                                          i("q-item-section", { attrs: { avatar: "" } }, [
                                            i(
                                              "div",
                                              { staticClass: "neu-css-before-red-asterisk" },
                                              [
                                                t._v(
                                                  "\n                是否需要学生定位信息\n              ",
                                                ),
                                              ],
                                            ),
                                          ]),
                                          i("q-item-section"),
                                          i(
                                            "q-item-section",
                                            { attrs: { side: "" } },
                                            [
                                              i("q-toggle", {
                                                attrs: {
                                                  size: "lg",
                                                  "checked-icon": "check",
                                                  disable: !t.record.is_author && "e" == t.type,
                                                  "unchecked-icon": "clear",
                                                  dense: "",
                                                  "false-value": "0",
                                                  "true-value": "1",
                                                },
                                                model: {
                                                  value: t.record.process_need_locate_app,
                                                  callback: function (e) {
                                                    t.$set(t.record, "process_need_locate_app", e);
                                                  },
                                                  expression: "record.process_need_locate_app",
                                                },
                                              }),
                                            ],
                                            1,
                                          ),
                                        ],
                                        1,
                                      ),
                                      "G" === t.service_flag ? i("q-separator") : t._e(),
                                      "G" === t.service_flag
                                        ? i(
                                            "q-item",
                                            [
                                              i("q-item-section", { attrs: { avatar: "" } }, [
                                                i(
                                                  "div",
                                                  { staticClass: "neu-css-before-red-asterisk" },
                                                  [
                                                    t._v(
                                                      "\n                开启入校核验\n              ",
                                                    ),
                                                  ],
                                                ),
                                                i(
                                                  "span",
                                                  {
                                                    directives: [
                                                      {
                                                        name: "show",
                                                        rawName: "v-show",
                                                        value: 1 != t.checkSwitch.into_campus,
                                                        expression: "checkSwitch.into_campus != 1",
                                                      },
                                                    ],
                                                    staticClass: "text-grey text-caption",
                                                  },
                                                  [t._v("入校园核验功能已关闭，相关内容不能修改")],
                                                ),
                                              ]),
                                              i("q-item-section"),
                                              i(
                                                "q-item-section",
                                                { attrs: { side: "" } },
                                                [
                                                  i("q-toggle", {
                                                    attrs: {
                                                      size: "lg",
                                                      "checked-icon": "check",
                                                      disable:
                                                        (!t.record.is_author && "e" == t.type) ||
                                                        1 != t.checkSwitch.into_campus,
                                                      "unchecked-icon": "clear",
                                                      dense: "",
                                                      "false-value": "0",
                                                      "true-value": "1",
                                                    },
                                                    model: {
                                                      value: t.record.into_campus_app,
                                                      callback: function (e) {
                                                        t.$set(t.record, "into_campus_app", e);
                                                      },
                                                      expression: "record.into_campus_app",
                                                    },
                                                  }),
                                                ],
                                                1,
                                              ),
                                            ],
                                            1,
                                          )
                                        : t._e(),
                                      "1" == t.record.into_campus_app
                                        ? i(
                                            "q-item",
                                            [
                                              i("q-item-section", { attrs: { avatar: "" } }, [
                                                i("div", [
                                                  t._v(
                                                    "\n                入校申请开始时间\n              ",
                                                  ),
                                                ]),
                                              ]),
                                              i(
                                                "q-item-section",
                                                [
                                                  i("q-field", {
                                                    staticStyle: { width: "200px" },
                                                    attrs: {
                                                      outlined: "",
                                                      dense: "",
                                                      "stack-label": "",
                                                      disable:
                                                        1 != t.checkSwitch.into_campus ||
                                                        (!t.record.is_author && "e" == t.type),
                                                      "hide-bottom-space": "",
                                                      "lazy-rules": "",
                                                      rules: [
                                                        function (e) {
                                                          return !!e || "请填写该项";
                                                        },
                                                      ],
                                                      value: t.record.into_campus_apply_begin,
                                                    },
                                                    scopedSlots: t._u(
                                                      [
                                                        {
                                                          key: "control",
                                                          fn: function () {
                                                            return [
                                                              t._v(
                                                                t._s(
                                                                  t.record.into_campus_apply_begin,
                                                                ),
                                                              ),
                                                            ];
                                                          },
                                                          proxy: !0,
                                                        },
                                                        {
                                                          key: "append",
                                                          fn: function () {
                                                            return [
                                                              i(
                                                                "q-icon",
                                                                {
                                                                  staticClass: "cursor-pointer",
                                                                  attrs: { name: "event" },
                                                                },
                                                                [
                                                                  i(
                                                                    "q-popup-proxy",
                                                                    {
                                                                      attrs: {
                                                                        "transition-show": "scale",
                                                                        "transition-hide": "scale",
                                                                      },
                                                                    },
                                                                    [
                                                                      i(
                                                                        "div",
                                                                        [
                                                                          i(
                                                                            "q-date",
                                                                            {
                                                                              attrs: {
                                                                                flat: "",
                                                                                minimal: "",
                                                                                mask: "YYYY-MM-DD HH:mm",
                                                                              },
                                                                              model: {
                                                                                value:
                                                                                  t.record
                                                                                    .into_campus_apply_begin,
                                                                                callback: function (
                                                                                  e,
                                                                                ) {
                                                                                  t.$set(
                                                                                    t.record,
                                                                                    "into_campus_apply_begin",
                                                                                    e,
                                                                                  );
                                                                                },
                                                                                expression:
                                                                                  "record.into_campus_apply_begin",
                                                                              },
                                                                            },
                                                                            [
                                                                              i(
                                                                                "div",
                                                                                {
                                                                                  staticClass:
                                                                                    "row items-center justify-end",
                                                                                },
                                                                                [
                                                                                  i("q-btn", {
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
                                                              i(
                                                                "q-icon",
                                                                {
                                                                  staticClass: "cursor-pointer",
                                                                  attrs: { name: "access_time" },
                                                                },
                                                                [
                                                                  i(
                                                                    "q-popup-proxy",
                                                                    {
                                                                      attrs: {
                                                                        "transition-show": "scale",
                                                                        "transition-hide": "scale",
                                                                      },
                                                                    },
                                                                    [
                                                                      i(
                                                                        "div",
                                                                        {
                                                                          staticClass:
                                                                            "row items-start",
                                                                        },
                                                                        [
                                                                          i(
                                                                            "q-time",
                                                                            {
                                                                              attrs: {
                                                                                flat: "",
                                                                                mask: "YYYY-MM-DD HH:mm",
                                                                                format24h: "",
                                                                              },
                                                                              model: {
                                                                                value:
                                                                                  t.record
                                                                                    .into_campus_apply_begin,
                                                                                callback: function (
                                                                                  e,
                                                                                ) {
                                                                                  t.$set(
                                                                                    t.record,
                                                                                    "into_campus_apply_begin",
                                                                                    e,
                                                                                  );
                                                                                },
                                                                                expression:
                                                                                  "record.into_campus_apply_begin",
                                                                              },
                                                                            },
                                                                            [
                                                                              i(
                                                                                "div",
                                                                                {
                                                                                  staticClass:
                                                                                    "row items-center justify-end",
                                                                                },
                                                                                [
                                                                                  i("q-btn", {
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
                                                      4226798345,
                                                    ),
                                                  }),
                                                ],
                                                1,
                                              ),
                                            ],
                                            1,
                                          )
                                        : t._e(),
                                      "1" == t.record.into_campus_app
                                        ? i(
                                            "q-item",
                                            [
                                              i("q-item-section", { attrs: { avatar: "" } }, [
                                                i("div", [
                                                  t._v(
                                                    "\n                入校申请结束时间\n              ",
                                                  ),
                                                ]),
                                              ]),
                                              i(
                                                "q-item-section",
                                                [
                                                  i("q-field", {
                                                    staticStyle: { width: "200px" },
                                                    attrs: {
                                                      outlined: "",
                                                      dense: "",
                                                      "stack-label": "",
                                                      disable:
                                                        1 != t.checkSwitch.into_campus ||
                                                        (!t.record.is_author && "e" == t.type),
                                                      "hide-bottom-space": "",
                                                      "lazy-rules": "",
                                                      rules: [
                                                        function (e) {
                                                          return !!e || "请填写该项";
                                                        },
                                                        function (t) {
                                                          return (
                                                            t > e.record.into_campus_apply_begin ||
                                                            "请填写申请时间之后的时间"
                                                          );
                                                        },
                                                      ],
                                                      value: t.record.into_campus_apply_end,
                                                    },
                                                    scopedSlots: t._u(
                                                      [
                                                        {
                                                          key: "control",
                                                          fn: function () {
                                                            return [
                                                              t._v(
                                                                t._s(
                                                                  t.record.into_campus_apply_end,
                                                                ),
                                                              ),
                                                            ];
                                                          },
                                                          proxy: !0,
                                                        },
                                                        {
                                                          key: "append",
                                                          fn: function () {
                                                            return [
                                                              i(
                                                                "q-icon",
                                                                {
                                                                  staticClass: "cursor-pointer",
                                                                  attrs: { name: "event" },
                                                                },
                                                                [
                                                                  i(
                                                                    "q-popup-proxy",
                                                                    {
                                                                      attrs: {
                                                                        "transition-show": "scale",
                                                                        "transition-hide": "scale",
                                                                      },
                                                                    },
                                                                    [
                                                                      i(
                                                                        "div",
                                                                        [
                                                                          i(
                                                                            "q-date",
                                                                            {
                                                                              attrs: {
                                                                                flat: "",
                                                                                minimal: "",
                                                                                mask: "YYYY-MM-DD HH:mm",
                                                                              },
                                                                              model: {
                                                                                value:
                                                                                  t.record
                                                                                    .into_campus_apply_end,
                                                                                callback: function (
                                                                                  e,
                                                                                ) {
                                                                                  t.$set(
                                                                                    t.record,
                                                                                    "into_campus_apply_end",
                                                                                    e,
                                                                                  );
                                                                                },
                                                                                expression:
                                                                                  "record.into_campus_apply_end",
                                                                              },
                                                                            },
                                                                            [
                                                                              i(
                                                                                "div",
                                                                                {
                                                                                  staticClass:
                                                                                    "row items-center justify-end",
                                                                                },
                                                                                [
                                                                                  i("q-btn", {
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
                                                              i(
                                                                "q-icon",
                                                                {
                                                                  staticClass: "cursor-pointer",
                                                                  attrs: { name: "access_time" },
                                                                },
                                                                [
                                                                  i(
                                                                    "q-popup-proxy",
                                                                    {
                                                                      attrs: {
                                                                        "transition-show": "scale",
                                                                        "transition-hide": "scale",
                                                                      },
                                                                    },
                                                                    [
                                                                      i(
                                                                        "div",
                                                                        {
                                                                          staticClass:
                                                                            "row items-start",
                                                                        },
                                                                        [
                                                                          i(
                                                                            "q-time",
                                                                            {
                                                                              attrs: {
                                                                                flat: "",
                                                                                mask: "YYYY-MM-DD HH:mm",
                                                                                format24h: "",
                                                                              },
                                                                              model: {
                                                                                value:
                                                                                  t.record
                                                                                    .into_campus_apply_end,
                                                                                callback: function (
                                                                                  e,
                                                                                ) {
                                                                                  t.$set(
                                                                                    t.record,
                                                                                    "into_campus_apply_end",
                                                                                    e,
                                                                                  );
                                                                                },
                                                                                expression:
                                                                                  "record.into_campus_apply_end",
                                                                              },
                                                                            },
                                                                            [
                                                                              i(
                                                                                "div",
                                                                                {
                                                                                  staticClass:
                                                                                    "row items-center justify-end",
                                                                                },
                                                                                [
                                                                                  i("q-btn", {
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
                                                      4132586497,
                                                    ),
                                                  }),
                                                ],
                                                1,
                                              ),
                                            ],
                                            1,
                                          )
                                        : t._e(),
                                      "1" == t.record.into_campus_app
                                        ? i(
                                            "q-item",
                                            [
                                              i("q-item-section", { attrs: { avatar: "" } }, [
                                                i("div", [
                                                  t._v(
                                                    "\n                入校核验开始时间\n              ",
                                                  ),
                                                ]),
                                              ]),
                                              i(
                                                "q-item-section",
                                                [
                                                  i("q-field", {
                                                    staticStyle: { width: "200px" },
                                                    attrs: {
                                                      outlined: "",
                                                      dense: "",
                                                      "stack-label": "",
                                                      disable:
                                                        1 != t.checkSwitch.into_campus ||
                                                        (!t.record.is_author && "e" == t.type),
                                                      "hide-bottom-space": "",
                                                      "lazy-rules": "",
                                                      rules: [
                                                        function (e) {
                                                          return !!e || "请填写该项";
                                                        },
                                                      ],
                                                      value: t.record.into_campus_begin_time,
                                                    },
                                                    scopedSlots: t._u(
                                                      [
                                                        {
                                                          key: "control",
                                                          fn: function () {
                                                            return [
                                                              t._v(
                                                                t._s(
                                                                  t.record.into_campus_begin_time,
                                                                ),
                                                              ),
                                                            ];
                                                          },
                                                          proxy: !0,
                                                        },
                                                        {
                                                          key: "append",
                                                          fn: function () {
                                                            return [
                                                              i(
                                                                "q-icon",
                                                                {
                                                                  staticClass: "cursor-pointer",
                                                                  attrs: { name: "event" },
                                                                },
                                                                [
                                                                  i(
                                                                    "q-popup-proxy",
                                                                    {
                                                                      attrs: {
                                                                        "transition-show": "scale",
                                                                        "transition-hide": "scale",
                                                                      },
                                                                    },
                                                                    [
                                                                      i(
                                                                        "div",
                                                                        [
                                                                          i(
                                                                            "q-date",
                                                                            {
                                                                              attrs: {
                                                                                flat: "",
                                                                                minimal: "",
                                                                                mask: "YYYY-MM-DD HH:mm",
                                                                              },
                                                                              model: {
                                                                                value:
                                                                                  t.record
                                                                                    .into_campus_begin_time,
                                                                                callback: function (
                                                                                  e,
                                                                                ) {
                                                                                  t.$set(
                                                                                    t.record,
                                                                                    "into_campus_begin_time",
                                                                                    e,
                                                                                  );
                                                                                },
                                                                                expression:
                                                                                  "record.into_campus_begin_time",
                                                                              },
                                                                            },
                                                                            [
                                                                              i(
                                                                                "div",
                                                                                {
                                                                                  staticClass:
                                                                                    "row items-center justify-end",
                                                                                },
                                                                                [
                                                                                  i("q-btn", {
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
                                                              i(
                                                                "q-icon",
                                                                {
                                                                  staticClass: "cursor-pointer",
                                                                  attrs: { name: "access_time" },
                                                                },
                                                                [
                                                                  i(
                                                                    "q-popup-proxy",
                                                                    {
                                                                      attrs: {
                                                                        "transition-show": "scale",
                                                                        "transition-hide": "scale",
                                                                      },
                                                                    },
                                                                    [
                                                                      i(
                                                                        "div",
                                                                        {
                                                                          staticClass:
                                                                            "row items-start",
                                                                        },
                                                                        [
                                                                          i(
                                                                            "q-time",
                                                                            {
                                                                              attrs: {
                                                                                flat: "",
                                                                                mask: "YYYY-MM-DD HH:mm",
                                                                                format24h: "",
                                                                              },
                                                                              model: {
                                                                                value:
                                                                                  t.record
                                                                                    .into_campus_begin_time,
                                                                                callback: function (
                                                                                  e,
                                                                                ) {
                                                                                  t.$set(
                                                                                    t.record,
                                                                                    "into_campus_begin_time",
                                                                                    e,
                                                                                  );
                                                                                },
                                                                                expression:
                                                                                  "record.into_campus_begin_time",
                                                                              },
                                                                            },
                                                                            [
                                                                              i(
                                                                                "div",
                                                                                {
                                                                                  staticClass:
                                                                                    "row items-center justify-end",
                                                                                },
                                                                                [
                                                                                  i("q-btn", {
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
                                                      4169676424,
                                                    ),
                                                  }),
                                                ],
                                                1,
                                              ),
                                            ],
                                            1,
                                          )
                                        : t._e(),
                                      "1" == t.record.into_campus_app
                                        ? i(
                                            "q-item",
                                            [
                                              i("q-item-section", { attrs: { avatar: "" } }, [
                                                i("div", [
                                                  t._v(
                                                    "\n                入校核验结束时间\n              ",
                                                  ),
                                                ]),
                                              ]),
                                              i(
                                                "q-item-section",
                                                [
                                                  i("q-field", {
                                                    staticStyle: { width: "200px" },
                                                    attrs: {
                                                      outlined: "",
                                                      dense: "",
                                                      "stack-label": "",
                                                      disable:
                                                        1 != t.checkSwitch.into_campus ||
                                                        (!t.record.is_author && "e" == t.type),
                                                      "hide-bottom-space": "",
                                                      "lazy-rules": "",
                                                      rules: [
                                                        function (e) {
                                                          return !!e || "请填写该项";
                                                        },
                                                        function (t) {
                                                          return (
                                                            t > e.record.into_campus_begin_time ||
                                                            "请填写申请时间之后的时间"
                                                          );
                                                        },
                                                      ],
                                                      value: t.record.into_campus_end_time,
                                                    },
                                                    scopedSlots: t._u(
                                                      [
                                                        {
                                                          key: "control",
                                                          fn: function () {
                                                            return [
                                                              t._v(
                                                                t._s(t.record.into_campus_end_time),
                                                              ),
                                                            ];
                                                          },
                                                          proxy: !0,
                                                        },
                                                        {
                                                          key: "append",
                                                          fn: function () {
                                                            return [
                                                              i(
                                                                "q-icon",
                                                                {
                                                                  staticClass: "cursor-pointer",
                                                                  attrs: { name: "event" },
                                                                },
                                                                [
                                                                  i(
                                                                    "q-popup-proxy",
                                                                    {
                                                                      attrs: {
                                                                        "transition-show": "scale",
                                                                        "transition-hide": "scale",
                                                                      },
                                                                    },
                                                                    [
                                                                      i(
                                                                        "div",
                                                                        [
                                                                          i(
                                                                            "q-date",
                                                                            {
                                                                              attrs: {
                                                                                flat: "",
                                                                                minimal: "",
                                                                                mask: "YYYY-MM-DD HH:mm",
                                                                              },
                                                                              model: {
                                                                                value:
                                                                                  t.record
                                                                                    .into_campus_end_time,
                                                                                callback: function (
                                                                                  e,
                                                                                ) {
                                                                                  t.$set(
                                                                                    t.record,
                                                                                    "into_campus_end_time",
                                                                                    e,
                                                                                  );
                                                                                },
                                                                                expression:
                                                                                  "record.into_campus_end_time",
                                                                              },
                                                                            },
                                                                            [
                                                                              i(
                                                                                "div",
                                                                                {
                                                                                  staticClass:
                                                                                    "row items-center justify-end",
                                                                                },
                                                                                [
                                                                                  i("q-btn", {
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
                                                              i(
                                                                "q-icon",
                                                                {
                                                                  staticClass: "cursor-pointer",
                                                                  attrs: { name: "access_time" },
                                                                },
                                                                [
                                                                  i(
                                                                    "q-popup-proxy",
                                                                    {
                                                                      attrs: {
                                                                        "transition-show": "scale",
                                                                        "transition-hide": "scale",
                                                                      },
                                                                    },
                                                                    [
                                                                      i(
                                                                        "div",
                                                                        {
                                                                          staticClass:
                                                                            "row items-start",
                                                                        },
                                                                        [
                                                                          i(
                                                                            "q-time",
                                                                            {
                                                                              attrs: {
                                                                                flat: "",
                                                                                mask: "YYYY-MM-DD HH:mm",
                                                                                format24h: "",
                                                                              },
                                                                              model: {
                                                                                value:
                                                                                  t.record
                                                                                    .into_campus_end_time,
                                                                                callback: function (
                                                                                  e,
                                                                                ) {
                                                                                  t.$set(
                                                                                    t.record,
                                                                                    "into_campus_end_time",
                                                                                    e,
                                                                                  );
                                                                                },
                                                                                expression:
                                                                                  "record.into_campus_end_time",
                                                                              },
                                                                            },
                                                                            [
                                                                              i(
                                                                                "div",
                                                                                {
                                                                                  staticClass:
                                                                                    "row items-center justify-end",
                                                                                },
                                                                                [
                                                                                  i("q-btn", {
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
                                                      1102659968,
                                                    ),
                                                  }),
                                                ],
                                                1,
                                              ),
                                            ],
                                            1,
                                          )
                                        : t._e(),
                                      "G" === t.service_flag ? i("q-separator") : t._e(),
                                      "G" === t.service_flag
                                        ? i(
                                            "q-item",
                                            [
                                              i("q-item-section", { attrs: { avatar: "" } }, [
                                                i(
                                                  "div",
                                                  { staticClass: "neu-css-before-red-asterisk" },
                                                  [
                                                    t._v(
                                                      "\n                开启离校核验\n              ",
                                                    ),
                                                  ],
                                                ),
                                                i(
                                                  "span",
                                                  {
                                                    directives: [
                                                      {
                                                        name: "show",
                                                        rawName: "v-show",
                                                        value: 1 != t.checkSwitch.out_campus,
                                                        expression: "checkSwitch.out_campus != 1",
                                                      },
                                                    ],
                                                    staticClass: "text-grey text-caption",
                                                  },
                                                  [t._v("出校园核验功能已关闭，相关内容不能修改")],
                                                ),
                                              ]),
                                              i("q-item-section"),
                                              i(
                                                "q-item-section",
                                                { attrs: { side: "" } },
                                                [
                                                  i("q-toggle", {
                                                    attrs: {
                                                      size: "lg",
                                                      "checked-icon": "check",
                                                      disable:
                                                        (!t.record.is_author && "e" == t.type) ||
                                                        1 != t.checkSwitch.out_campus,
                                                      "unchecked-icon": "clear",
                                                      dense: "",
                                                      "false-value": "0",
                                                      "true-value": "1",
                                                    },
                                                    model: {
                                                      value: t.record.out_campus_app,
                                                      callback: function (e) {
                                                        t.$set(t.record, "out_campus_app", e);
                                                      },
                                                      expression: "record.out_campus_app",
                                                    },
                                                  }),
                                                ],
                                                1,
                                              ),
                                            ],
                                            1,
                                          )
                                        : t._e(),
                                      "1" == t.record.out_campus_app
                                        ? i(
                                            "q-item",
                                            [
                                              i("q-item-section", { attrs: { avatar: "" } }, [
                                                i("div", [
                                                  t._v(
                                                    "\n                离校申请开始时间\n              ",
                                                  ),
                                                ]),
                                              ]),
                                              i(
                                                "q-item-section",
                                                [
                                                  i("q-field", {
                                                    staticStyle: { width: "200px" },
                                                    attrs: {
                                                      outlined: "",
                                                      dense: "",
                                                      "stack-label": "",
                                                      disable:
                                                        1 != t.checkSwitch.out_campus ||
                                                        (!t.record.is_author && "e" == t.type),
                                                      "hide-bottom-space": "",
                                                      "lazy-rules": "",
                                                      rules: [
                                                        function (e) {
                                                          return !!e || "请填写该项";
                                                        },
                                                      ],
                                                      value: t.record.out_campus_apply_begin,
                                                    },
                                                    scopedSlots: t._u(
                                                      [
                                                        {
                                                          key: "control",
                                                          fn: function () {
                                                            return [
                                                              t._v(
                                                                t._s(
                                                                  t.record.out_campus_apply_begin,
                                                                ),
                                                              ),
                                                            ];
                                                          },
                                                          proxy: !0,
                                                        },
                                                        {
                                                          key: "append",
                                                          fn: function () {
                                                            return [
                                                              i(
                                                                "q-icon",
                                                                {
                                                                  staticClass: "cursor-pointer",
                                                                  attrs: { name: "event" },
                                                                },
                                                                [
                                                                  i(
                                                                    "q-popup-proxy",
                                                                    {
                                                                      attrs: {
                                                                        "transition-show": "scale",
                                                                        "transition-hide": "scale",
                                                                      },
                                                                    },
                                                                    [
                                                                      i(
                                                                        "div",
                                                                        [
                                                                          i(
                                                                            "q-date",
                                                                            {
                                                                              attrs: {
                                                                                flat: "",
                                                                                minimal: "",
                                                                                mask: "YYYY-MM-DD HH:mm",
                                                                              },
                                                                              model: {
                                                                                value:
                                                                                  t.record
                                                                                    .out_campus_apply_begin,
                                                                                callback: function (
                                                                                  e,
                                                                                ) {
                                                                                  t.$set(
                                                                                    t.record,
                                                                                    "out_campus_apply_begin",
                                                                                    e,
                                                                                  );
                                                                                },
                                                                                expression:
                                                                                  "record.out_campus_apply_begin",
                                                                              },
                                                                            },
                                                                            [
                                                                              i(
                                                                                "div",
                                                                                {
                                                                                  staticClass:
                                                                                    "row items-center justify-end",
                                                                                },
                                                                                [
                                                                                  i("q-btn", {
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
                                                              i(
                                                                "q-icon",
                                                                {
                                                                  staticClass: "cursor-pointer",
                                                                  attrs: { name: "access_time" },
                                                                },
                                                                [
                                                                  i(
                                                                    "q-popup-proxy",
                                                                    {
                                                                      attrs: {
                                                                        "transition-show": "scale",
                                                                        "transition-hide": "scale",
                                                                      },
                                                                    },
                                                                    [
                                                                      i(
                                                                        "div",
                                                                        {
                                                                          staticClass:
                                                                            "row items-start",
                                                                        },
                                                                        [
                                                                          i(
                                                                            "q-time",
                                                                            {
                                                                              attrs: {
                                                                                flat: "",
                                                                                mask: "YYYY-MM-DD HH:mm",
                                                                                format24h: "",
                                                                              },
                                                                              model: {
                                                                                value:
                                                                                  t.record
                                                                                    .out_campus_apply_begin,
                                                                                callback: function (
                                                                                  e,
                                                                                ) {
                                                                                  t.$set(
                                                                                    t.record,
                                                                                    "out_campus_apply_begin",
                                                                                    e,
                                                                                  );
                                                                                },
                                                                                expression:
                                                                                  "record.out_campus_apply_begin",
                                                                              },
                                                                            },
                                                                            [
                                                                              i(
                                                                                "div",
                                                                                {
                                                                                  staticClass:
                                                                                    "row items-center justify-end",
                                                                                },
                                                                                [
                                                                                  i("q-btn", {
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
                                                      1820052315,
                                                    ),
                                                  }),
                                                ],
                                                1,
                                              ),
                                            ],
                                            1,
                                          )
                                        : t._e(),
                                      "1" == t.record.out_campus_app
                                        ? i(
                                            "q-item",
                                            [
                                              i("q-item-section", { attrs: { avatar: "" } }, [
                                                i("div", [
                                                  t._v(
                                                    "\n                离校申请结束时间\n              ",
                                                  ),
                                                ]),
                                              ]),
                                              i(
                                                "q-item-section",
                                                [
                                                  i("q-field", {
                                                    staticStyle: { width: "200px" },
                                                    attrs: {
                                                      outlined: "",
                                                      dense: "",
                                                      "stack-label": "",
                                                      disable:
                                                        1 != t.checkSwitch.out_campus ||
                                                        (!t.record.is_author && "e" == t.type),
                                                      "hide-bottom-space": "",
                                                      "lazy-rules": "",
                                                      rules: [
                                                        function (e) {
                                                          return !!e || "请填写该项";
                                                        },
                                                        function (t) {
                                                          return (
                                                            t > e.record.out_campus_apply_begin ||
                                                            "请填写申请时间之后的时间"
                                                          );
                                                        },
                                                      ],
                                                      value: t.record.out_campus_apply_end,
                                                    },
                                                    scopedSlots: t._u(
                                                      [
                                                        {
                                                          key: "control",
                                                          fn: function () {
                                                            return [
                                                              t._v(
                                                                t._s(t.record.out_campus_apply_end),
                                                              ),
                                                            ];
                                                          },
                                                          proxy: !0,
                                                        },
                                                        {
                                                          key: "append",
                                                          fn: function () {
                                                            return [
                                                              i(
                                                                "q-icon",
                                                                {
                                                                  staticClass: "cursor-pointer",
                                                                  attrs: { name: "event" },
                                                                },
                                                                [
                                                                  i(
                                                                    "q-popup-proxy",
                                                                    {
                                                                      attrs: {
                                                                        "transition-show": "scale",
                                                                        "transition-hide": "scale",
                                                                      },
                                                                    },
                                                                    [
                                                                      i(
                                                                        "div",
                                                                        [
                                                                          i(
                                                                            "q-date",
                                                                            {
                                                                              attrs: {
                                                                                flat: "",
                                                                                minimal: "",
                                                                                mask: "YYYY-MM-DD HH:mm",
                                                                              },
                                                                              model: {
                                                                                value:
                                                                                  t.record
                                                                                    .out_campus_apply_end,
                                                                                callback: function (
                                                                                  e,
                                                                                ) {
                                                                                  t.$set(
                                                                                    t.record,
                                                                                    "out_campus_apply_end",
                                                                                    e,
                                                                                  );
                                                                                },
                                                                                expression:
                                                                                  "record.out_campus_apply_end",
                                                                              },
                                                                            },
                                                                            [
                                                                              i(
                                                                                "div",
                                                                                {
                                                                                  staticClass:
                                                                                    "row items-center justify-end",
                                                                                },
                                                                                [
                                                                                  i("q-btn", {
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
                                                              i(
                                                                "q-icon",
                                                                {
                                                                  staticClass: "cursor-pointer",
                                                                  attrs: { name: "access_time" },
                                                                },
                                                                [
                                                                  i(
                                                                    "q-popup-proxy",
                                                                    {
                                                                      attrs: {
                                                                        "transition-show": "scale",
                                                                        "transition-hide": "scale",
                                                                      },
                                                                    },
                                                                    [
                                                                      i(
                                                                        "div",
                                                                        {
                                                                          staticClass:
                                                                            "row items-start",
                                                                        },
                                                                        [
                                                                          i(
                                                                            "q-time",
                                                                            {
                                                                              attrs: {
                                                                                flat: "",
                                                                                mask: "YYYY-MM-DD HH:mm",
                                                                                format24h: "",
                                                                              },
                                                                              model: {
                                                                                value:
                                                                                  t.record
                                                                                    .out_campus_apply_end,
                                                                                callback: function (
                                                                                  e,
                                                                                ) {
                                                                                  t.$set(
                                                                                    t.record,
                                                                                    "out_campus_apply_end",
                                                                                    e,
                                                                                  );
                                                                                },
                                                                                expression:
                                                                                  "record.out_campus_apply_end",
                                                                              },
                                                                            },
                                                                            [
                                                                              i(
                                                                                "div",
                                                                                {
                                                                                  staticClass:
                                                                                    "row items-center justify-end",
                                                                                },
                                                                                [
                                                                                  i("q-btn", {
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
                                                      2546923987,
                                                    ),
                                                  }),
                                                ],
                                                1,
                                              ),
                                            ],
                                            1,
                                          )
                                        : t._e(),
                                      "1" == t.record.out_campus_app
                                        ? i(
                                            "q-item",
                                            [
                                              i("q-item-section", { attrs: { avatar: "" } }, [
                                                i("div", [
                                                  t._v(
                                                    "\n                离校核验开始时间\n              ",
                                                  ),
                                                ]),
                                              ]),
                                              i(
                                                "q-item-section",
                                                [
                                                  i("q-field", {
                                                    staticStyle: { width: "200px" },
                                                    attrs: {
                                                      outlined: "",
                                                      dense: "",
                                                      "stack-label": "",
                                                      disable:
                                                        1 != t.checkSwitch.out_campus ||
                                                        (!t.record.is_author && "e" == t.type),
                                                      "hide-bottom-space": "",
                                                      "lazy-rules": "",
                                                      rules: [
                                                        function (e) {
                                                          return !!e || "请填写该项";
                                                        },
                                                      ],
                                                      value: t.record.out_campus_begin_time,
                                                    },
                                                    scopedSlots: t._u(
                                                      [
                                                        {
                                                          key: "control",
                                                          fn: function () {
                                                            return [
                                                              t._v(
                                                                t._s(
                                                                  t.record.out_campus_begin_time,
                                                                ),
                                                              ),
                                                            ];
                                                          },
                                                          proxy: !0,
                                                        },
                                                        {
                                                          key: "append",
                                                          fn: function () {
                                                            return [
                                                              i(
                                                                "q-icon",
                                                                {
                                                                  staticClass: "cursor-pointer",
                                                                  attrs: { name: "event" },
                                                                },
                                                                [
                                                                  i(
                                                                    "q-popup-proxy",
                                                                    {
                                                                      attrs: {
                                                                        "transition-show": "scale",
                                                                        "transition-hide": "scale",
                                                                      },
                                                                    },
                                                                    [
                                                                      i(
                                                                        "div",
                                                                        [
                                                                          i(
                                                                            "q-date",
                                                                            {
                                                                              attrs: {
                                                                                flat: "",
                                                                                minimal: "",
                                                                                mask: "YYYY-MM-DD HH:mm",
                                                                              },
                                                                              model: {
                                                                                value:
                                                                                  t.record
                                                                                    .out_campus_begin_time,
                                                                                callback: function (
                                                                                  e,
                                                                                ) {
                                                                                  t.$set(
                                                                                    t.record,
                                                                                    "out_campus_begin_time",
                                                                                    e,
                                                                                  );
                                                                                },
                                                                                expression:
                                                                                  "record.out_campus_begin_time",
                                                                              },
                                                                            },
                                                                            [
                                                                              i(
                                                                                "div",
                                                                                {
                                                                                  staticClass:
                                                                                    "row items-center justify-end",
                                                                                },
                                                                                [
                                                                                  i("q-btn", {
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
                                                              i(
                                                                "q-icon",
                                                                {
                                                                  staticClass: "cursor-pointer",
                                                                  attrs: { name: "access_time" },
                                                                },
                                                                [
                                                                  i(
                                                                    "q-popup-proxy",
                                                                    {
                                                                      attrs: {
                                                                        "transition-show": "scale",
                                                                        "transition-hide": "scale",
                                                                      },
                                                                    },
                                                                    [
                                                                      i(
                                                                        "div",
                                                                        {
                                                                          staticClass:
                                                                            "row items-start",
                                                                        },
                                                                        [
                                                                          i(
                                                                            "q-time",
                                                                            {
                                                                              attrs: {
                                                                                flat: "",
                                                                                mask: "YYYY-MM-DD HH:mm",
                                                                                format24h: "",
                                                                              },
                                                                              model: {
                                                                                value:
                                                                                  t.record
                                                                                    .out_campus_begin_time,
                                                                                callback: function (
                                                                                  e,
                                                                                ) {
                                                                                  t.$set(
                                                                                    t.record,
                                                                                    "out_campus_begin_time",
                                                                                    e,
                                                                                  );
                                                                                },
                                                                                expression:
                                                                                  "record.out_campus_begin_time",
                                                                              },
                                                                            },
                                                                            [
                                                                              i(
                                                                                "div",
                                                                                {
                                                                                  staticClass:
                                                                                    "row items-center justify-end",
                                                                                },
                                                                                [
                                                                                  i("q-btn", {
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
                                                      2332778842,
                                                    ),
                                                  }),
                                                ],
                                                1,
                                              ),
                                            ],
                                            1,
                                          )
                                        : t._e(),
                                      "1" == t.record.out_campus_app
                                        ? i(
                                            "q-item",
                                            [
                                              i("q-item-section", { attrs: { avatar: "" } }, [
                                                i("div", [
                                                  t._v(
                                                    "\n                离校核验结束时间\n              ",
                                                  ),
                                                ]),
                                              ]),
                                              i(
                                                "q-item-section",
                                                [
                                                  i("q-field", {
                                                    staticStyle: { width: "200px" },
                                                    attrs: {
                                                      outlined: "",
                                                      dense: "",
                                                      "stack-label": "",
                                                      disable:
                                                        1 != t.checkSwitch.out_campus ||
                                                        (!t.record.is_author && "e" == t.type),
                                                      "hide-bottom-space": "",
                                                      "lazy-rules": "",
                                                      rules: [
                                                        function (e) {
                                                          return !!e || "请填写该项";
                                                        },
                                                        function (t) {
                                                          return (
                                                            t > e.record.out_campus_begin_time ||
                                                            "请填写申请时间之后的时间"
                                                          );
                                                        },
                                                      ],
                                                      value: t.record.out_campus_end_time,
                                                    },
                                                    scopedSlots: t._u(
                                                      [
                                                        {
                                                          key: "control",
                                                          fn: function () {
                                                            return [
                                                              t._v(
                                                                t._s(t.record.out_campus_end_time),
                                                              ),
                                                            ];
                                                          },
                                                          proxy: !0,
                                                        },
                                                        {
                                                          key: "append",
                                                          fn: function () {
                                                            return [
                                                              i(
                                                                "q-icon",
                                                                {
                                                                  staticClass: "cursor-pointer",
                                                                  attrs: { name: "event" },
                                                                },
                                                                [
                                                                  i(
                                                                    "q-popup-proxy",
                                                                    {
                                                                      attrs: {
                                                                        "transition-show": "scale",
                                                                        "transition-hide": "scale",
                                                                      },
                                                                    },
                                                                    [
                                                                      i(
                                                                        "div",
                                                                        [
                                                                          i(
                                                                            "q-date",
                                                                            {
                                                                              attrs: {
                                                                                flat: "",
                                                                                minimal: "",
                                                                                mask: "YYYY-MM-DD HH:mm",
                                                                              },
                                                                              model: {
                                                                                value:
                                                                                  t.record
                                                                                    .out_campus_end_time,
                                                                                callback: function (
                                                                                  e,
                                                                                ) {
                                                                                  t.$set(
                                                                                    t.record,
                                                                                    "out_campus_end_time",
                                                                                    e,
                                                                                  );
                                                                                },
                                                                                expression:
                                                                                  "record.out_campus_end_time",
                                                                              },
                                                                            },
                                                                            [
                                                                              i(
                                                                                "div",
                                                                                {
                                                                                  staticClass:
                                                                                    "row items-center justify-end",
                                                                                },
                                                                                [
                                                                                  i("q-btn", {
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
                                                              i(
                                                                "q-icon",
                                                                {
                                                                  staticClass: "cursor-pointer",
                                                                  attrs: { name: "access_time" },
                                                                },
                                                                [
                                                                  i(
                                                                    "q-popup-proxy",
                                                                    {
                                                                      attrs: {
                                                                        "transition-show": "scale",
                                                                        "transition-hide": "scale",
                                                                      },
                                                                    },
                                                                    [
                                                                      i(
                                                                        "div",
                                                                        {
                                                                          staticClass:
                                                                            "row items-start",
                                                                        },
                                                                        [
                                                                          i(
                                                                            "q-time",
                                                                            {
                                                                              attrs: {
                                                                                flat: "",
                                                                                mask: "YYYY-MM-DD HH:mm",
                                                                                format24h: "",
                                                                              },
                                                                              model: {
                                                                                value:
                                                                                  t.record
                                                                                    .out_campus_end_time,
                                                                                callback: function (
                                                                                  e,
                                                                                ) {
                                                                                  t.$set(
                                                                                    t.record,
                                                                                    "out_campus_end_time",
                                                                                    e,
                                                                                  );
                                                                                },
                                                                                expression:
                                                                                  "record.out_campus_end_time",
                                                                              },
                                                                            },
                                                                            [
                                                                              i(
                                                                                "div",
                                                                                {
                                                                                  staticClass:
                                                                                    "row items-center justify-end",
                                                                                },
                                                                                [
                                                                                  i("q-btn", {
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
                                                      4197014482,
                                                    ),
                                                  }),
                                                ],
                                                1,
                                              ),
                                            ],
                                            1,
                                          )
                                        : t._e(),
                                      i("q-separator"),
                                      i(
                                        "q-item",
                                        [
                                          t.record.is_author || "e" != t.type
                                            ? i(
                                                "q-item-section",
                                                { attrs: { avatar: "" } },
                                                [
                                                  i("q-item-label", [t._v("可申请对象")]),
                                                  i("q-item-label", { attrs: { caption: "" } }, [
                                                    t._v("不设置则全校学生可申请"),
                                                  ]),
                                                ],
                                                1,
                                              )
                                            : t._e(),
                                          t.record.is_author || "e" != t.type
                                            ? t._e()
                                            : i(
                                                "q-item-section",
                                                [
                                                  i("q-item-label", [t._v("可申请对象")]),
                                                  i("q-item-label", { attrs: { caption: "" } }, [
                                                    t._v("不设置则全校学生可申请"),
                                                  ]),
                                                  i(
                                                    "q-item-label",
                                                    { attrs: { caption: "" } },
                                                    [
                                                      i("neu-view-assigned-student", {
                                                        attrs: { value: t.record.task_target },
                                                      }),
                                                    ],
                                                    1,
                                                  ),
                                                ],
                                                1,
                                              ),
                                          (t.record.is_author && "e" == t.type) || "a" == t.type
                                            ? i("q-item-section")
                                            : t._e(),
                                          (t.record.is_author && "e" == t.type) || "a" == t.type
                                            ? i(
                                                "q-item-section",
                                                { attrs: { side: "" } },
                                                [
                                                  i(
                                                    "q-item-label",
                                                    { staticClass: "row items-center" },
                                                    [
                                                      i(
                                                        "span",
                                                        {
                                                          class:
                                                            0 === t.record.task_target.length
                                                              ? "text-grey"
                                                              : "text-primary",
                                                          attrs: { size: "md" },
                                                          on: {
                                                            click: function (e) {
                                                              t.taskTargetDialog = !0;
                                                            },
                                                          },
                                                        },
                                                        [
                                                          t._v(
                                                            t._s(
                                                              0 === t.record.task_target.length
                                                                ? "请选择"
                                                                : "已选择 (" +
                                                                    t.record.task_target.length +
                                                                    ")",
                                                            ),
                                                          ),
                                                        ],
                                                      ),
                                                      i("q-icon", {
                                                        class:
                                                          0 === t.record.task_target.length
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
                                              )
                                            : t._e(),
                                        ],
                                        1,
                                      ),
                                      i("q-separator"),
                                      i(
                                        "q-item",
                                        [
                                          i("q-item-section", { attrs: { avatar: "" } }, [
                                            i("div", [
                                              t._v("\n                表单项目\n              "),
                                            ]),
                                          ]),
                                          i("q-item-section"),
                                          t.record.is_author || "a" == t.type
                                            ? i(
                                                "q-item-section",
                                                { attrs: { side: "" } },
                                                [
                                                  i(
                                                    "q-item-label",
                                                    { staticClass: "row items-center" },
                                                    [
                                                      i(
                                                        "span",
                                                        {
                                                          class:
                                                            0 ===
                                                            t.record.process_info_config.length
                                                              ? "text-grey"
                                                              : "text-primary",
                                                          attrs: { size: "md" },
                                                          on: {
                                                            click: function (e) {
                                                              return t.addInfoConfig(
                                                                t.record.process_info_config.length,
                                                              );
                                                            },
                                                          },
                                                        },
                                                        [t._v("添加")],
                                                      ),
                                                      i("q-icon", {
                                                        class:
                                                          0 === t.record.process_info_config.length
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
                                              )
                                            : t._e(),
                                        ],
                                        1,
                                      ),
                                      i(
                                        "q-item",
                                        {
                                          directives: [
                                            {
                                              name: "show",
                                              rawName: "v-show",
                                              value: 0 !== t.record.process_info_config.length,
                                              expression: "record.process_info_config.length !== 0",
                                            },
                                          ],
                                        },
                                        [
                                          i(
                                            "q-item-section",
                                            t._l(t.record.process_info_config, function (e, s) {
                                              return i(
                                                "div",
                                                {
                                                  key: s,
                                                  staticClass: "bg-grey-2 q-pa-sm q-mt-sm",
                                                },
                                                [
                                                  t.record.is_author || "a" == t.type
                                                    ? i("div", [
                                                        i(
                                                          "span",
                                                          { staticClass: "neu-css-after-colon" },
                                                          [t._v("第" + t._s(s + 1) + "检查项")],
                                                        ),
                                                        i(
                                                          "span",
                                                          {
                                                            staticClass:
                                                              "text-primary cursor-pointer q-ml-sm",
                                                            on: {
                                                              click: function (e) {
                                                                return t.editInfoConfig(s);
                                                              },
                                                            },
                                                          },
                                                          [t._v("编辑")],
                                                        ),
                                                        i(
                                                          "span",
                                                          {
                                                            staticClass:
                                                              "text-negative cursor-pointer q-ml-sm",
                                                            on: {
                                                              click: function (e) {
                                                                return t.deleteInfoConfig(s);
                                                              },
                                                            },
                                                          },
                                                          [t._v("删除")],
                                                        ),
                                                        i(
                                                          "span",
                                                          {
                                                            directives: [
                                                              {
                                                                name: "show",
                                                                rawName: "v-show",
                                                                value:
                                                                  s + 1 !=
                                                                  t.record.process_info_config
                                                                    .length,
                                                                expression:
                                                                  "index + 1 != record.process_info_config.length",
                                                              },
                                                            ],
                                                            staticClass:
                                                              "text-primary cursor-pointer q-ml-sm",
                                                            on: {
                                                              click: function (e) {
                                                                return t.moveInfoConfig(s, 1);
                                                              },
                                                            },
                                                          },
                                                          [t._v("下移")],
                                                        ),
                                                        i(
                                                          "span",
                                                          {
                                                            directives: [
                                                              {
                                                                name: "show",
                                                                rawName: "v-show",
                                                                value: 0 != s,
                                                                expression: "index != 0",
                                                              },
                                                            ],
                                                            staticClass:
                                                              "text-primary cursor-pointer q-ml-sm",
                                                            on: {
                                                              click: function (e) {
                                                                return t.moveInfoConfig(s, -1);
                                                              },
                                                            },
                                                          },
                                                          [t._v("上移")],
                                                        ),
                                                      ])
                                                    : t._e(),
                                                  i("neu-widget", {
                                                    attrs: {
                                                      config: e,
                                                      viewMode: !0,
                                                      showRiskInfo: !0,
                                                    },
                                                    model: {
                                                      value: t.infoModel[s],
                                                      callback: function (e) {
                                                        t.$set(t.infoModel, s, e);
                                                      },
                                                      expression: "infoModel[index]",
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
                                      "e" == t.type
                                        ? i("q-separator", {
                                            staticStyle: { height: "7px" },
                                            attrs: { color: "grey-3" },
                                          })
                                        : t._e(),
                                      "e" == t.type
                                        ? i(
                                            "q-item",
                                            [
                                              i(
                                                "q-item-section",
                                                [
                                                  i("q-item-label", { staticClass: "text-bold" }, [
                                                    t._v("审批流程"),
                                                  ]),
                                                  i(
                                                    "span",
                                                    { staticClass: "text-grey text-caption" },
                                                    [t._v("更改后自动保存")],
                                                  ),
                                                ],
                                                1,
                                              ),
                                            ],
                                            1,
                                          )
                                        : t._e(),
                                      "e" == t.type ? i("q-separator") : t._e(),
                                      t._l(t.record.configs, function (e, s) {
                                        return i(
                                          "q-item",
                                          { key: e.review_level },
                                          [
                                            "e" == t.type
                                              ? i(
                                                  "q-card",
                                                  {
                                                    staticStyle: { width: "100%" },
                                                    attrs: { flat: "", bordered: "" },
                                                  },
                                                  [
                                                    i("q-card-section", [
                                                      i(
                                                        "div",
                                                        [
                                                          t._v(
                                                            "\n                    " +
                                                              t._s(e.review_level) +
                                                              "级审核人\n                    ",
                                                          ),
                                                          t.editPermit && t.record.is_author
                                                            ? i(
                                                                "q-btn",
                                                                {
                                                                  directives: [
                                                                    {
                                                                      name: "show",
                                                                      rawName: "v-show",
                                                                      value:
                                                                        s ==
                                                                        t.record.configs.length - 1,
                                                                      expression:
                                                                        "lvlIndex == record.configs.length - 1",
                                                                    },
                                                                  ],
                                                                  staticStyle: { width: "50px" },
                                                                  attrs: {
                                                                    flat: "",
                                                                    dense: "",
                                                                    color: "primary",
                                                                    icon: "add",
                                                                    size: "sm",
                                                                  },
                                                                  on: {
                                                                    click: function (e) {
                                                                      return t.openReviewerProcessDialog(
                                                                        t.record.id,
                                                                        null,
                                                                      );
                                                                    },
                                                                  },
                                                                },
                                                                [
                                                                  i("q-tooltip", [
                                                                    t._v("新增下一级审核人"),
                                                                  ]),
                                                                ],
                                                                1,
                                                              )
                                                            : t._e(),
                                                          t.editPermit && t.record.is_author
                                                            ? i(
                                                                "q-btn",
                                                                {
                                                                  staticStyle: { width: "50px" },
                                                                  attrs: {
                                                                    flat: "",
                                                                    dense: "",
                                                                    color: "primary",
                                                                    icon: "edit",
                                                                    size: "sm",
                                                                  },
                                                                  on: {
                                                                    click: function (s) {
                                                                      return t.openReviewerProcessDialog(
                                                                        t.record.id,
                                                                        e,
                                                                      );
                                                                    },
                                                                  },
                                                                },
                                                                [i("q-tooltip", [t._v("编辑")])],
                                                                1,
                                                              )
                                                            : t._e(),
                                                          t.editPermit && t.record.is_author
                                                            ? i(
                                                                "q-btn",
                                                                {
                                                                  directives: [
                                                                    {
                                                                      name: "show",
                                                                      rawName: "v-show",
                                                                      value: 0 != s,
                                                                      expression: "lvlIndex != 0",
                                                                    },
                                                                  ],
                                                                  staticStyle: { width: "50px" },
                                                                  attrs: {
                                                                    flat: "",
                                                                    dense: "",
                                                                    color: "primary",
                                                                    icon: "keyboard_arrow_up",
                                                                    size: "sm",
                                                                  },
                                                                  on: {
                                                                    click: function (s) {
                                                                      return t.moveProcessReviewer(
                                                                        t.record.id,
                                                                        e,
                                                                        e.review_level,
                                                                        -1,
                                                                      );
                                                                    },
                                                                  },
                                                                },
                                                                [
                                                                  i("q-tooltip", [
                                                                    t._v(
                                                                      "降为" +
                                                                        t._s(e.review_level - 1) +
                                                                        "级审核人",
                                                                    ),
                                                                  ]),
                                                                ],
                                                                1,
                                                              )
                                                            : t._e(),
                                                          t.editPermit && t.record.is_author
                                                            ? i(
                                                                "q-btn",
                                                                {
                                                                  directives: [
                                                                    {
                                                                      name: "show",
                                                                      rawName: "v-show",
                                                                      value:
                                                                        s !=
                                                                        t.record.configs.length - 1,
                                                                      expression:
                                                                        "lvlIndex != record.configs.length - 1",
                                                                    },
                                                                  ],
                                                                  staticStyle: { width: "50px" },
                                                                  attrs: {
                                                                    flat: "",
                                                                    dense: "",
                                                                    color: "primary",
                                                                    icon: "keyboard_arrow_down",
                                                                    size: "sm",
                                                                  },
                                                                  on: {
                                                                    click: function (s) {
                                                                      return t.moveProcessReviewer(
                                                                        t.record.id,
                                                                        e,
                                                                        e.review_level,
                                                                        1,
                                                                      );
                                                                    },
                                                                  },
                                                                },
                                                                [
                                                                  i("q-tooltip", [
                                                                    t._v(
                                                                      "升为" +
                                                                        t._s(e.review_level + 1) +
                                                                        "级审核人",
                                                                    ),
                                                                  ]),
                                                                ],
                                                                1,
                                                              )
                                                            : t._e(),
                                                          t.editPermit &&
                                                          t.record.configs.length > 1 &&
                                                          t.record.is_author
                                                            ? i(
                                                                "q-btn",
                                                                {
                                                                  staticStyle: { width: "50px" },
                                                                  attrs: {
                                                                    flat: "",
                                                                    dense: "",
                                                                    color: "negative",
                                                                    icon: "delete",
                                                                    size: "sm",
                                                                  },
                                                                  on: {
                                                                    click: function (s) {
                                                                      return t.deleteProcessReviewer(
                                                                        t.record.id,
                                                                        e.review_level,
                                                                      );
                                                                    },
                                                                  },
                                                                },
                                                                [i("q-tooltip", [t._v("删除")])],
                                                                1,
                                                              )
                                                            : t._e(),
                                                        ],
                                                        1,
                                                      ),
                                                      i(
                                                        "div",
                                                        [
                                                          i("neu-view-assigned-teacher", {
                                                            attrs: { value: e.teacher },
                                                          }),
                                                        ],
                                                        1,
                                                      ),
                                                    ]),
                                                  ],
                                                  1,
                                                )
                                              : t._e(),
                                          ],
                                          1,
                                        );
                                      }),
                                    ],
                                    2,
                                  ),
                                ],
                                1,
                              )
                            : t._e(),
                          t.record.is_author || "a" == t.type
                            ? i(
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
                                  "a" == t.type
                                    ? i("q-btn", {
                                        staticStyle: { width: "40%", height: "100%" },
                                        attrs: { outline: "", color: "grey", label: "取消" },
                                        on: {
                                          click: function (e) {
                                            return t.goBack();
                                          },
                                        },
                                      })
                                    : t._e(),
                                  "e" == t.type
                                    ? i("q-btn", {
                                        staticStyle: { width: "40%", height: "100%" },
                                        attrs: { color: "red", label: "删除" },
                                        on: { click: t.deleteProcessType },
                                      })
                                    : t._e(),
                                  i("q-btn", {
                                    staticStyle: { width: "60%", height: "100%" },
                                    attrs: {
                                      color: "primary",
                                      label: "a" == t.type ? "发布" : "保存",
                                      type: "submit",
                                    },
                                  }),
                                ],
                                1,
                              )
                            : t._e(),
                        ],
                        1,
                      ),
                      i(
                        "q-dialog",
                        {
                          attrs: { persistent: "", maximized: !0 },
                          model: {
                            value: t.infoConfigDialog,
                            callback: function (e) {
                              t.infoConfigDialog = e;
                            },
                            expression: "infoConfigDialog",
                          },
                        },
                        [
                          i(
                            "q-card",
                            { staticClass: "full-width", attrs: { flat: "" } },
                            [
                              i("q-card-section", [
                                i("div", { staticClass: "text-bold" }, [t._v("流程配置")]),
                              ]),
                              i(
                                "q-card-section",
                                [
                                  i("neu-define-widget", {
                                    attrs: { risk: !0 },
                                    on: {
                                      save: function (e) {
                                        t.infoConfigDialog = !1;
                                      },
                                      cancel: t.cancelInfoConfig,
                                    },
                                    model: {
                                      value: t.record.process_info_config[t.infoConfigIndex],
                                      callback: function (e) {
                                        t.$set(t.record.process_info_config, t.infoConfigIndex, e);
                                      },
                                      expression: "record.process_info_config[infoConfigIndex]",
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
                      i(
                        "q-dialog",
                        {
                          attrs: { persistent: "", maximized: !0 },
                          model: {
                            value: t.teacherDialog,
                            callback: function (e) {
                              t.teacherDialog = e;
                            },
                            expression: "teacherDialog",
                          },
                        },
                        [
                          i(
                            "q-card",
                            { staticClass: "full-width", attrs: { flat: "" } },
                            [
                              i("q-card-section", [
                                i("div", { staticClass: "text-bold" }, [t._v("设置审核人")]),
                              ]),
                              i(
                                "q-card-section",
                                [
                                  i("neu-assign-teacher", {
                                    model: {
                                      value: t.reviewer.teacher,
                                      callback: function (e) {
                                        t.$set(t.reviewer, "teacher", e);
                                      },
                                      expression: "reviewer.teacher",
                                    },
                                  }),
                                ],
                                1,
                              ),
                              i(
                                "q-card-section",
                                { staticClass: "q-gutter-sm row justify-end" },
                                [
                                  i("q-btn", {
                                    attrs: { unelevated: "", color: "primary", label: "保存" },
                                    on: { click: t.saveTypeConfigReviewer },
                                  }),
                                  i("q-btn", {
                                    attrs: { outline: "", color: "grey", label: "取消" },
                                    on: {
                                      click: function (e) {
                                        t.teacherDialog = !1;
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
                      i(
                        "q-dialog",
                        {
                          attrs: { persistent: "", fullWidth: "", maximized: !0 },
                          model: {
                            value: t.taskTargetDialog,
                            callback: function (e) {
                              t.taskTargetDialog = e;
                            },
                            expression: "taskTargetDialog",
                          },
                        },
                        [
                          i(
                            "q-layout",
                            {
                              staticClass: "bg-white",
                              attrs: { view: "lHh lpr lFf", container: "" },
                            },
                            [
                              i(
                                "q-header",
                                { staticClass: "full-width bg-white" },
                                [
                                  i("q-toolbar", [
                                    i(
                                      "div",
                                      {
                                        staticClass:
                                          "full-width row items-center justify-between q-px-xs q-py-sm",
                                      },
                                      [
                                        i("div", { staticClass: "text-bold text-black" }, [
                                          t._v("设置可申请对象"),
                                        ]),
                                        i("q-btn", {
                                          attrs: {
                                            unelevated: "",
                                            color: "primary",
                                            label: "完成",
                                          },
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
                              i(
                                "q-page-container",
                                [
                                  i(
                                    "q-page",
                                    [
                                      i("neu-assign-student", {
                                        attrs: {
                                          permit: t.menuInfo ? t.menuInfo.edit_permit : null,
                                          "permit-mode": "E",
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
                  ),
                ],
                1,
              ),
            ],
            1,
          );
        },
        a = [],
        o = (s("13d5"), s("a434"), s("ded3")),
        r = s.n(o),
        c = s("f395"),
        n = s("4aac"),
        l = s("974f"),
        p = s("8bef"),
        d = s("5333"),
        u = s("9a3d"),
        _ = {
          name: "processTypeNew",
          components: {
            NeuWidget: l["a"],
            NeuDefineWidget: p["a"],
            NeuViewAssignedTeacher: d["a"],
            NeuAssignTeacher: u["a"],
            NeuAssignStudent: c["a"],
            NeuViewAssignedStudent: n["a"],
          },
          data() {
            return {
              editPermit: !0,
              id: null,
              type: null,
              menuInfo: null,
              infoConfigDialog: !1,
              infoConfigIndex: 0,
              record: {
                process_info_config: [],
                process_type_status_app: "1",
                process_need_locate_app: "1",
                out_campus: 0,
                out_campus_app: "0",
                out_campus_apply_begin: null,
                out_campus_apply_end: null,
                out_campus_begin_time: null,
                out_campus_end_time: null,
                into_campus: 0,
                into_campus_app: "0",
                into_campus_apply_begin: null,
                into_campus_apply_end: null,
                into_campus_begin_time: null,
                into_campus_end_time: null,
                task_target: [],
              },
              infoModel: [],
              reviewer: { teacher: [] },
              typeConfig: {},
              teacherDialog: !1,
              user: window.localStorage.userinfo
                ? JSON.parse(window.localStorage.getItem("userinfo"))
                : {},
              options: [],
              checkSwitch: {},
              taskTargetDialog: !1,
              service_flag: "N",
              is_copy: !1,
            };
          },
          mounted() {
            let e = "process";
            (this.$route.params && this.$route.params.record
              ? ((this.record = this.$route.params.record),
                (this.record.task_target = this.record.task_target ? this.record.task_target : []),
                (this.record.process_info_config = this.record.process_info_config
                  ? this.record.process_info_config
                  : []),
                (this.type = this.$route.params.type),
                (this.is_copy = this.record.is_copy),
                (this.id = this.record.id),
                window.localStorage.getItem("menu") &&
                  ((this.service_flag = this.$route.params.service_flag),
                  (e = "N" === this.service_flag ? "process" : "process_gate"),
                  (this.menuInfo = JSON.parse(window.localStorage.getItem("menu")).find(
                    (t) => t.id === e,
                  ))))
              : (window.localStorage.getItem("menu") &&
                  ((this.service_flag = this.$route.query.service_flag),
                  (e = "N" === this.service_flag ? "process" : "process_gate"),
                  (this.menuInfo = JSON.parse(window.localStorage.getItem("menu")).find(
                    (t) => t.id === e,
                  ))),
                (this.id = this.$route.query.id),
                (this.type = this.$route.query.type)),
              this.getSys(),
              void 0 !== this.id && null !== this.id
                ? this.getTypeDetail()
                : this.getTypeDetailOption());
          },
          methods: {
            goBack() {
              "a" === this.type
                ? this.$router.push("/teacher/process/index?service_flag=" + this.service_flag)
                : this.$router.push(
                    "/teacher/process/processTypeList?type_id=" +
                      this.id +
                      "&service_flag=" +
                      this.service_flag,
                  );
            },
            getTypeDetail() {
              this.$axiosAction("/api/teacher/process/process.api", {
                action: "queryList",
                id: this.id,
                roleId: this.user.role_id,
              })
                .then((e) => {
                  0 === e.data.code &&
                    ((this.record = e.data.result.list[0]),
                    void 0 === this.record && this.goBack(),
                    null === this.record.task_target && (this.record.task_target = []),
                    (this.options = e.data.opinion));
                })
                .catch((e) => {});
            },
            getTypeDetailOption() {
              this.$axiosAction("/api/teacher/process/process.api", {
                action: "queryListOpinion",
                roleId: this.user.role_id,
              })
                .then((e) => {
                  0 === e.data.code && (this.options = e.data.opinion);
                })
                .catch((e) => {});
            },
            saveProcessType() {
              if ((this.$q.loading.show(), void 0 === this.record.processlimit))
                return (this.$q.loading.hide(), this.$showErrorNotify("请选择申请限制"));
              (void 0 === this.record.processlimit.value
                ? (this.record.process_apply_limit = this.options.find(
                    (e) => e.label === this.record.processlimit,
                  ).value)
                : (this.record.process_apply_limit = this.options.find(
                    (e) => e.label === this.record.processlimit.label,
                  ).value),
                "1" === this.record.process_type_status_app
                  ? (this.record.process_type_status = 1)
                  : (this.record.process_type_status = 0),
                "1" === this.record.process_need_locate_app
                  ? (this.record.process_need_locate = 1)
                  : (this.record.process_need_locate = 0),
                "1" === this.record.into_campus_app
                  ? (this.record.into_campus = 1)
                  : ((this.record.into_campus = 0),
                    (this.into_campus_apply_begin = null),
                    (this.into_campus_apply_end = null),
                    (this.into_campus_begin_time = null),
                    (this.into_campus_end_time = null)),
                "1" === this.record.out_campus_app
                  ? (this.record.out_campus = 1)
                  : ((this.record.out_campus = 0),
                    (this.out_campus_apply_begin = null),
                    (this.out_campus_apply_end = null),
                    (this.out_campus_begin_time = null),
                    (this.out_campus_end_time = null)));
              const e = r()({}, this.record);
              ((e.process_info_config = JSON.stringify(e.process_info_config)),
                (e.task_target =
                  e.task_target && e.task_target.length > 0 ? JSON.stringify(e.task_target) : null),
                (e.service_flag = this.service_flag),
                this.is_copy
                  ? ((e.configs = JSON.stringify(e.configs)),
                    this.$axiosAction(
                      "/api/teacher/process/process.api",
                      r()({ action: "copyProcessType" }, e),
                    )
                      .then((e) => {
                        (0 === e.data.code && this.goBack(), this.$q.loading.hide());
                      })
                      .catch((e) => {
                        this.$q.loading.hide();
                      }))
                  : this.$axiosAction(
                      "/api/teacher/process/process.api",
                      r()({ action: "insertProcessType" }, e),
                    )
                      .then((e) => {
                        (0 === e.data.code && this.goBack(), this.$q.loading.hide());
                      })
                      .catch((e) => {
                        this.$q.loading.hide();
                      }));
            },
            cancelInfoConfig() {
              (this.record.process_info_config[this.infoConfigIndex] ||
                (this.record.process_info_config.splice(this.infoConfigIndex, 1),
                this.infoModel.splice(this.infoConfigIndex, 1)),
                (this.infoConfigDialog = !1));
            },
            addInfoConfig(e) {
              (this.record.process_info_config.splice(e, 0, null),
                this.infoModel.splice(e, 0, null),
                (this.infoConfigDialog = !0),
                (this.infoConfigIndex = e));
            },
            editInfoConfig(e) {
              ((this.infoConfigDialog = !0), (this.infoConfigIndex = e));
            },
            deleteInfoConfig(e) {
              (this.record.process_info_config.splice(e, 1), this.infoModel.splice(e, 1));
            },
            moveInfoConfig(e, t) {
              (this.record.process_info_config.splice(
                e + t,
                0,
                this.record.process_info_config.splice(e, 1)[0],
              ),
                this.infoModel.splice(e + t, 0, this.infoModel.splice(e, 1)[0]));
            },
            deleteProcessType() {
              this.doDelete([this.record.id]);
            },
            openReviewerProcessDialog(e, t) {
              ((this.teacherDialog = !0),
                (this.reviewer = {
                  id: e,
                  teacher: t ? t.teacher : [],
                  review_level: t ? t.review_level : null,
                }));
            },
            moveProcessReviewer(e, t, s, i) {
              const a = this.record.configs,
                o = a.findIndex((e) => e.review_level === s),
                r = Math.min(o, o + i),
                c = a.splice(r, 1);
              a.splice(r + 1, 0, c[0]);
              for (let l = 0; l < a.length; l++) a[l].review_level = l + 1;
              const n = { id: e, reviewer: JSON.stringify(a) };
              this.doUpdateTypeConfigReviewer(n);
            },
            deleteProcessReviewer(e, t) {
              this.$q
                .dialog({
                  title: "确认删除",
                  message: "该审核人将被删除。</span>",
                  html: !0,
                  persistent: !0,
                  cancel: { label: "取消", outline: !0, color: "grey" },
                  ok: { label: "删除", unelevated: !0, color: "negative" },
                })
                .onOk(() => {
                  const s = {
                    id: e,
                    reviewer: JSON.stringify(
                      this.record.configs.reduce(
                        (e, s) =>
                          s.review_level < t
                            ? e.concat(s)
                            : s.review_level > t
                              ? e.concat({ teacher: s.teacher, review_level: s.review_level - 1 })
                              : e,
                        [],
                      ),
                    ),
                  };
                  this.doUpdateTypeConfigReviewer(s);
                });
            },
            saveTypeConfigReviewer() {
              if (!this.reviewer.teacher || 0 === this.reviewer.teacher.length)
                return void this.$showErrorNotify("请设置审核人");
              const e = this.record.configs,
                t = {
                  id: this.reviewer.id,
                  reviewer: JSON.stringify(
                    this.reviewer.review_level
                      ? e.reduce(
                          (e, t) =>
                            t.review_level !== this.reviewer.review_level
                              ? e.concat(t)
                              : e.concat({
                                  teacher: this.reviewer.teacher,
                                  review_level: this.reviewer.review_level,
                                }),
                          [],
                        )
                      : e.concat({ teacher: this.reviewer.teacher, review_level: e.length + 1 }),
                  ),
                };
              this.doUpdateTypeConfigReviewer(t);
            },
            doUpdateTypeConfigReviewer(e) {
              (this.$q.loading.show(),
                this.$axiosAction(
                  "/api/teacher/process/process.api",
                  r()({ action: "updateTypeConfigReviewer" }, e),
                )
                  .then((e) => {
                    (0 === e.data.code && ((this.teacherDialog = !1), this.getTypeDetail()),
                      this.$q.loading.hide());
                  })
                  .catch((e) => {
                    this.$q.loading.hide();
                  }));
            },
            doDelete(e) {
              this.$q
                .dialog({
                  title: "确认删除",
                  message: "该流程将被删除。</span>",
                  html: !0,
                  persistent: !0,
                  cancel: { label: "取消", outline: !0, color: "grey" },
                  ok: { label: "删除", unelevated: !0, color: "negative" },
                })
                .onOk(() => {
                  (this.$q.loading.show(),
                    this.$axiosAction("/api/teacher/process/process.api", {
                      action: "deleteProcessType",
                      ids: e,
                    })
                      .then((e) => {
                        (0 === e.data.code &&
                          this.$router.push(
                            "/teacher/process/index?service_flag=" + this.service_flag,
                          ),
                          this.$q.loading.hide());
                      })
                      .catch((e) => {
                        this.$q.loading.hide();
                      }));
                });
            },
            getSys() {
              this.$axiosAction("/api/teacher/process/process.api", { action: "checkIntoOrOut" })
                .then((e) => {
                  0 === e.data.code && (this.checkSwitch = e.data.result);
                })
                .catch((e) => {});
            },
          },
        },
        m = _,
        h = s("2877"),
        f = s("4d5a"),
        v = s("e359"),
        g = s("65c6"),
        y = s("9c40"),
        q = s("6ac5"),
        w = s("09e3"),
        b = s("9989"),
        k = s("0378"),
        x = s("f09f"),
        C = s("1c1c"),
        D = s("66e5"),
        S = s("4074"),
        Y = s("27f9"),
        $ = s("eb85"),
        I = s("ddd8"),
        N = s("9564"),
        M = s("8572"),
        H = s("0016"),
        T = s("7cbe"),
        Q = s("52ee"),
        z = s("ca78"),
        P = s("0170"),
        j = s("a370"),
        O = s("05c0"),
        R = s("4b7e"),
        A = s("7ff0"),
        J = s("24e8"),
        B = s("7f67"),
        L = s("eebe"),
        F = s.n(L),
        E = Object(h["a"])(m, i, a, !1, null, null, null);
      t["default"] = E.exports;
      (F()(E, "components", {
        QLayout: f["a"],
        QHeader: v["a"],
        QToolbar: g["a"],
        QBtn: y["a"],
        QToolbarTitle: q["a"],
        QPageContainer: w["a"],
        QPage: b["a"],
        QForm: k["a"],
        QCard: x["a"],
        QList: C["a"],
        QItem: D["a"],
        QItemSection: S["a"],
        QInput: Y["a"],
        QSeparator: $["a"],
        QSelect: I["a"],
        QToggle: N["a"],
        QField: M["a"],
        QIcon: H["a"],
        QPopupProxy: T["a"],
        QDate: Q["a"],
        QTime: z["a"],
        QItemLabel: P["a"],
        QCardSection: j["a"],
        QTooltip: O["a"],
        QCardActions: R["a"],
        QFooter: A["a"],
        QDialog: J["a"],
      }),
        F()(E, "directives", { ClosePopup: B["a"] }));
    },
  },
]);
