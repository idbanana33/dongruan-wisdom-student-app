(window["webpackJsonp"] = window["webpackJsonp"] || []).push([
  [72],
  {
    d79d: function (e, t, a) {
      "use strict";
      a.r(t);
      var i = function () {
          var e = this,
            t = this,
            a = t.$createElement,
            i = t._self._c || a;
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
                      i("q-toolbar-title", [t._v("日志详情")]),
                      i(
                        "q-btn",
                        {
                          attrs: { flat: "", round: "", dense: "", icon: "search" },
                          on: { click: t.open },
                        },
                        [
                          i(
                            "q-badge",
                            {
                              directives: [
                                {
                                  name: "show",
                                  rawName: "v-show",
                                  value: 0 != t.condCount,
                                  expression: "condCount != 0",
                                },
                              ],
                              attrs: { color: "orange", floating: "", transparent: "" },
                            },
                            [t._v(t._s(t.condCount))],
                          ),
                        ],
                        1,
                      ),
                    ],
                    1,
                  ),
                  i(
                    "q-expansion-item",
                    {
                      staticClass: "bg-white full-width q-ml-sm",
                      attrs: {
                        "switch-toggle-side": "",
                        "expand-icon-toggle": "",
                        "expand-separator": "",
                      },
                      scopedSlots: t._u([
                        {
                          key: "header",
                          fn: function () {
                            return [
                              i(
                                "q-item-section",
                                [
                                  i("q-item-label", { staticStyle: { "font-size": "1.3em" } }, [
                                    t._v(t._s(t.record.title)),
                                  ]),
                                ],
                                1,
                              ),
                              i(
                                "q-item-section",
                                { attrs: { side: "" } },
                                [
                                  i("q-btn", {
                                    attrs: { flat: "", dense: "", icon: "more_vert", size: "sm" },
                                    on: {
                                      click: function (e) {
                                        t.drawerRight = !t.drawerRight;
                                      },
                                    },
                                  }),
                                ],
                                1,
                              ),
                            ];
                          },
                          proxy: !0,
                        },
                      ]),
                    },
                    [
                      i(
                        "q-card",
                        [
                          i("q-card-section", [
                            i("div", { staticClass: "row" }, [
                              i("div", [
                                i("span", { staticClass: "text-grey neu-css-after-colon" }, [
                                  t._v("发起人"),
                                ]),
                                t._v(t._s(t.record.teacher_name) + "\n              "),
                              ]),
                              i("div", { staticClass: "q-ml-xl" }, [
                                i("span", { staticClass: "text-grey" }, [t._v(" ")]),
                              ]),
                              i("div", [
                                i("span", { staticClass: "text-grey neu-css-after-colon" }, [
                                  t._v("创建时间"),
                                ]),
                                t._v(t._s(t.record.create_time) + "\n              "),
                              ]),
                              i("div", [
                                i("span", { staticClass: "text-grey neu-css-after-colon" }, [
                                  t._v("填写有效时间"),
                                ]),
                                t._v(
                                  t._s(t.record.begin_date) +
                                    " ~ " +
                                    t._s(t.record.end_date) +
                                    "\n              ",
                                ),
                              ]),
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
              ),
              i(
                "q-dialog",
                {
                  attrs: { persistent: "" },
                  model: {
                    value: t.extendDialog,
                    callback: function (e) {
                      t.extendDialog = e;
                    },
                    expression: "extendDialog",
                  },
                },
                [
                  i(
                    "q-card",
                    { staticClass: "full-width", attrs: { flat: "" } },
                    [
                      i(
                        "q-form",
                        { on: { submit: t.extendJoblog } },
                        [
                          i("q-card-section", { staticClass: "text-h6" }, [
                            t._v(
                              "\n              " +
                                t._s(1 == t.record.status ? "确认延期" : "确认重新开启") +
                                "\n            ",
                            ),
                          ]),
                          i("q-card-section", [
                            i(
                              "div",
                              { staticClass: "row items-center" },
                              [
                                t._v(
                                  "\n                " +
                                    t._s(1 == t.record.status ? "延期" : "重新开启") +
                                    "截止日期至：\n                ",
                                ),
                                i("q-field", {
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
                                          t >= e.record.end_date || "请填写原截止日期之后的日期"
                                        );
                                      },
                                    ],
                                    value: t.endDate,
                                  },
                                  scopedSlots: t._u([
                                    {
                                      key: "control",
                                      fn: function () {
                                        return [t._v(t._s(t.endDate))];
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
                                                            mask: "YYYY-MM-DD",
                                                          },
                                                          model: {
                                                            value: t.endDate,
                                                            callback: function (e) {
                                                              t.endDate = e;
                                                            },
                                                            expression: "endDate",
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
                          ]),
                          i(
                            "q-card-section",
                            { staticClass: "row q-gutter-sm justify-end" },
                            [
                              i("q-btn", {
                                directives: [{ name: "close-popup", rawName: "v-close-popup" }],
                                attrs: { outline: "", color: "grey", label: "取消" },
                              }),
                              i("q-btn", {
                                attrs: {
                                  unelevated: "",
                                  color: "primary",
                                  label: 1 == t.record.status ? "延期" : "重新开启",
                                  type: "submit",
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
              i(
                "q-dialog",
                {
                  attrs: { maximized: !0 },
                  model: {
                    value: t.detailDialog,
                    callback: function (e) {
                      t.detailDialog = e;
                    },
                    expression: "detailDialog",
                  },
                },
                [
                  i(
                    "q-card",
                    { staticClass: "full-width", attrs: { flat: "" } },
                    [
                      i(
                        "q-card-section",
                        { staticClass: "row items-center justify-between" },
                        [
                          i("div", { staticClass: "text-h6" }, [t._v("预览")]),
                          i("q-btn", {
                            directives: [{ name: "close-popup", rawName: "v-close-popup" }],
                            attrs: { icon: "close", flat: "", round: "", dense: "", size: "sm" },
                          }),
                        ],
                        1,
                      ),
                      i("q-separator"),
                      i("q-card-section", [
                        i("div", { staticClass: "q-mt-sm text-bold" }, [
                          t._v(t._s(t.record.title)),
                        ]),
                        i("div", { staticClass: "q-mt-sm" }, [
                          i("span", { staticClass: "text-grey neu-css-after-colon" }, [
                            t._v("发起人"),
                          ]),
                          t._v(t._s(t.record.teacher_name) + "\n          "),
                        ]),
                        i("div", [
                          i("span", { staticClass: "text-grey neu-css-after-colon" }, [
                            t._v("填写有效期间"),
                          ]),
                          t._v(
                            t._s(t.record.begin_date) +
                              " ~ " +
                              t._s(t.record.end_date) +
                              "\n          ",
                          ),
                        ]),
                        i("div", {
                          staticClass: "q-mt-sm",
                          domProps: { innerHTML: t._s(t.record.detail) },
                        }),
                      ]),
                      i("q-separator"),
                      i("q-card-section", [
                        i("div", [
                          i("span", { staticClass: "text-grey neu-css-after-colon" }, [
                            t._v("允许填报人自己删除记录"),
                          ]),
                          t._v(t._s(1 === t.record.allow_delete ? "是" : "否") + "\n            "),
                          i(
                            "div",
                            { staticStyle: { float: "right", "margin-top": "-7px" } },
                            [
                              t.record.is_author
                                ? i("q-toggle", {
                                    staticClass: "q-pa-sm",
                                    attrs: {
                                      size: "lg",
                                      "checked-icon": "check",
                                      "unchecked-icon": "clear",
                                      dense: "",
                                      "false-value": 0,
                                      "true-value": 1,
                                    },
                                    on: { input: t.changeAllowDelete },
                                    model: {
                                      value: t.record.allow_delete,
                                      callback: function (e) {
                                        t.$set(t.record, "allow_delete", e);
                                      },
                                      expression: "record.allow_delete",
                                    },
                                  })
                                : t._e(),
                            ],
                            1,
                          ),
                        ]),
                      ]),
                      i("q-separator"),
                      i("q-card-section", [
                        i("div", [
                          i("span", { staticClass: "text-grey neu-css-after-colon" }, [
                            t._v("填报日志系统管理员是否可见"),
                          ]),
                          t._v(t._s(1 === t.record.allow_look ? "否" : "是") + "\n            "),
                          i(
                            "div",
                            { staticStyle: { float: "right", "margin-top": "-7px" } },
                            [
                              t.record.is_author
                                ? i("q-toggle", {
                                    staticClass: "q-pa-sm",
                                    attrs: {
                                      size: "lg",
                                      "checked-icon": "check",
                                      "unchecked-icon": "clear",
                                      dense: "",
                                      "false-value": 1,
                                      "true-value": 0,
                                    },
                                    on: { input: t.changeAllowLook },
                                    model: {
                                      value: t.record.allow_look,
                                      callback: function (e) {
                                        t.$set(t.record, "allow_look", e);
                                      },
                                      expression: "record.allow_look",
                                    },
                                  })
                                : t._e(),
                            ],
                            1,
                          ),
                        ]),
                      ]),
                      i("q-separator"),
                      i(
                        "q-card-section",
                        [
                          i("div", [
                            i("span", { staticClass: "text-grey neu-css-after-colon" }, [
                              t._v("填写对象"),
                            ]),
                            t.record.is_author && null !== t.menuInfo.edit_permit
                              ? i(
                                  "div",
                                  { staticStyle: { float: "right" } },
                                  [
                                    i(
                                      "span",
                                      {
                                        staticClass: "text-grey",
                                        on: { click: t.taskTargetDialogOpen },
                                      },
                                      [t._v("选择")],
                                    ),
                                    i("q-icon", {
                                      staticClass: "text-grey",
                                      attrs: { name: "keyboard_arrow_right", size: "sm" },
                                    }),
                                  ],
                                  1,
                                )
                              : t._e(),
                          ]),
                          i("neu-view-assigned-teacher", {
                            attrs: { value: t.record.task_target },
                          }),
                        ],
                        1,
                      ),
                      i("q-separator"),
                      i(
                        "q-card-section",
                        [
                          i("div", [
                            i("span", { staticClass: "text-grey neu-css-after-colon" }, [
                              t._v("共享"),
                            ]),
                            t.record.is_author && null !== t.menuInfo.edit_permit
                              ? i(
                                  "div",
                                  { staticStyle: { float: "right" } },
                                  [
                                    i(
                                      "span",
                                      {
                                        staticClass: "text-grey",
                                        on: { click: t.openShareDialog },
                                      },
                                      [t._v("选择")],
                                    ),
                                    i("q-icon", {
                                      staticClass: "text-grey",
                                      attrs: { name: "keyboard_arrow_right", size: "sm" },
                                    }),
                                  ],
                                  1,
                                )
                              : t._e(),
                          ]),
                          i("neu-view-assigned-teacher", {
                            attrs: { value: t.record.share_target },
                          }),
                        ],
                        1,
                      ),
                      i("q-separator"),
                      i(
                        "q-card-section",
                        [
                          i("div", [
                            i("span", { staticClass: "text-grey neu-css-after-colon" }, [
                              t._v("工作日志表单"),
                            ]),
                          ]),
                          t._l(t.record.info_config, function (e, a) {
                            return i(
                              "div",
                              { key: a, staticClass: "bg-grey-2 q-pa-sm q-mt-sm" },
                              [
                                i("neu-widget", {
                                  attrs: { config: e, viewMode: !0 },
                                  model: {
                                    value: t.infoModel[a],
                                    callback: function (e) {
                                      t.$set(t.infoModel, a, e);
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
              i(
                "q-dialog",
                {
                  attrs: { persistent: "", maximized: !0 },
                  model: {
                    value: t.editDialog,
                    callback: function (e) {
                      t.editDialog = e;
                    },
                    expression: "editDialog",
                  },
                },
                [
                  i(
                    "q-card",
                    { staticClass: "full-width", attrs: { flat: "" } },
                    [
                      i(
                        "q-form",
                        { on: { submit: t.submitJoblogResult } },
                        [
                          i("q-card-section", { staticClass: "row items-center justify-between" }, [
                            i("div", { staticClass: "text-h6" }, [t._v("工作日志")]),
                          ]),
                          i("q-separator"),
                          i(
                            "q-card-section",
                            t._l(t.infoConfig, function (e, a) {
                              return i(
                                "div",
                                { key: a, staticClass: "bg-grey-2 q-pa-sm q-mt-sm" },
                                [
                                  i("neu-widget", {
                                    attrs: { config: e, "view-mode": t.viewMode },
                                    model: {
                                      value: t.result.info_result[a],
                                      callback: function (e) {
                                        t.$set(t.result.info_result, a, e);
                                      },
                                      expression: "result.info_result[index]",
                                    },
                                  }),
                                ],
                                1,
                              );
                            }),
                            0,
                          ),
                          i(
                            "q-card-section",
                            { staticClass: "row q-gutter-sm justify-end" },
                            [
                              i("q-btn", {
                                directives: [{ name: "close-popup", rawName: "v-close-popup" }],
                                attrs: { outline: "", color: "grey", label: "取消" },
                              }),
                              i("q-btn", {
                                directives: [
                                  {
                                    name: "show",
                                    rawName: "v-show",
                                    value: !t.viewMode,
                                    expression: "!viewMode",
                                  },
                                ],
                                attrs: {
                                  unelevated: "",
                                  color: "grey",
                                  label: "暂存",
                                  type: "submit",
                                },
                                on: {
                                  click: function (e) {
                                    t.result.status = 0;
                                  },
                                },
                              }),
                              i("q-btn", {
                                directives: [
                                  {
                                    name: "show",
                                    rawName: "v-show",
                                    value: !t.viewMode,
                                    expression: "!viewMode",
                                  },
                                ],
                                attrs: {
                                  unelevated: "",
                                  color: "primary",
                                  label: "提交",
                                  type: "submit",
                                },
                                on: {
                                  click: function (e) {
                                    t.result.status = 1;
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
              ),
              i(
                "q-dialog",
                {
                  attrs: { persistent: "", fullWidth: "", maximized: !0 },
                  model: {
                    value: t.shareDialog,
                    callback: function (e) {
                      t.shareDialog = e;
                    },
                    expression: "shareDialog",
                  },
                },
                [
                  i(
                    "div",
                    { staticClass: "full-width bg-white" },
                    [
                      i(
                        "div",
                        {
                          staticClass:
                            "full-width row items-center justify-between q-px-md q-py-sm",
                        },
                        [
                          i("div", { staticClass: "text-bold" }, [t._v("修改共享对象")]),
                          i("q-btn", {
                            attrs: { unelevated: "", color: "primary", label: "完成" },
                            on: { click: t.updateShareTarget },
                          }),
                        ],
                        1,
                      ),
                      i("neu-assign-teacher", {
                        model: {
                          value: t.shareTarget,
                          callback: function (e) {
                            t.shareTarget = e;
                          },
                          expression: "shareTarget",
                        },
                      }),
                    ],
                    1,
                  ),
                ],
              ),
              i(
                "q-dialog",
                {
                  attrs: { position: "bottom" },
                  model: {
                    value: t.dialog,
                    callback: function (e) {
                      t.dialog = e;
                    },
                    expression: "dialog",
                  },
                },
                [
                  i(
                    "q-card",
                    { staticStyle: { width: "350px" } },
                    [
                      i("q-linear-progress", { attrs: { value: 1, color: "primary" } }),
                      i(
                        "q-card-section",
                        { staticClass: "row items-center justify-between", attrs: { dense: "" } },
                        [
                          i("q-btn", {
                            attrs: { outline: "", label: "取消", color: "grey", size: "md" },
                            on: {
                              click: function (e) {
                                return t.close();
                              },
                            },
                          }),
                          i("q-btn", {
                            attrs: { unelevated: "", label: "确定", color: "primary", size: "md" },
                            on: { click: t.getCondition },
                          }),
                        ],
                        1,
                      ),
                      i("q-separator"),
                      i(
                        "q-list",
                        { attrs: { bordered: "" } },
                        [
                          i("q-separator"),
                          i(
                            "q-item",
                            {
                              directives: [{ name: "ripple", rawName: "v-ripple" }],
                              attrs: { clickable: "" },
                            },
                            [
                              i("q-item-section", { attrs: { avatar: "", top: "" } }, [
                                i("span", [t._v("综合查询")]),
                              ]),
                              i(
                                "q-item-section",
                                [
                                  i("q-input", {
                                    attrs: { outlined: "", clearable: "", dense: "" },
                                    model: {
                                      value: t.queryModel.mutli_search,
                                      callback: function (e) {
                                        t.$set(t.queryModel, "mutli_search", e);
                                      },
                                      expression: "queryModel.mutli_search",
                                    },
                                  }),
                                  i(
                                    "q-item-label",
                                    {
                                      staticStyle: { "margin-top": "4px" },
                                      attrs: { caption: "" },
                                    },
                                    [t._v("可以查询教工号、姓名、性别、部门")],
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
                    "q-card",
                    { staticClass: "full-width", attrs: { flat: "" } },
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
                              t._v("设置填写对象"),
                            ]),
                            i("q-btn", {
                              attrs: { unelevated: "", color: "primary", label: "完成" },
                              on: { click: t.updateActionTarget },
                            }),
                          ],
                          1,
                        ),
                      ]),
                      i(
                        "q-card-section",
                        [
                          i("neu-assign-teacher", {
                            model: {
                              value: t.actionTarget,
                              callback: function (e) {
                                t.actionTarget = e;
                              },
                              expression: "actionTarget",
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
              i("neu-export-data", { attrs: { config: t.exportCompConfig } }),
              i(
                "q-pull-to-refresh",
                { ref: "pageRefresh", on: { refresh: t.refresh } },
                [
                  i(
                    "q-page-container",
                    [
                      i(
                        "q-page",
                        { staticClass: "bg-grey-3 q-py-sm" },
                        [
                          t._l(t.list, function (e) {
                            return i(
                              "q-card",
                              {
                                key: e.id,
                                staticClass: "bg-white q-mb-sm q-mx-sm",
                                style:
                                  0 == e.status
                                    ? "border-left:0.25rem solid #b5b3b3;"
                                    : "border-left:0.25rem solid #027be3;",
                                attrs: { flat: "" },
                                on: {
                                  click: function (a) {
                                    return t.goDetail(
                                      e.id,
                                      !e.allow_edit,
                                      e.teacher_no,
                                      e.allow_look,
                                    );
                                  },
                                },
                              },
                              [
                                i(
                                  "q-item",
                                  { attrs: { clickable: "" } },
                                  [
                                    i(
                                      "q-item-section",
                                      [
                                        i(
                                          "q-item-label",
                                          [
                                            i("q-icon", {
                                              directives: [
                                                {
                                                  name: "show",
                                                  rawName: "v-show",
                                                  value: "男" == e.sex_name,
                                                  expression: "item.sex_name == '男'",
                                                },
                                              ],
                                              attrs: { name: "person", color: "blue" },
                                            }),
                                            i("q-icon", {
                                              directives: [
                                                {
                                                  name: "show",
                                                  rawName: "v-show",
                                                  value: "女" == e.sex_name,
                                                  expression: "item.sex_name == '女'",
                                                },
                                              ],
                                              attrs: { name: "person", color: "pink" },
                                            }),
                                            t._v(
                                              "\n                      " +
                                                t._s(e.teacher_name) +
                                                " ",
                                            ),
                                            i("span", { staticClass: "text-grey" }, [
                                              t._v("(" + t._s(e.teacher_no) + ")"),
                                            ]),
                                          ],
                                          1,
                                        ),
                                        i("q-item-label", { attrs: { lines: "1", caption: "" } }, [
                                          t._v(" " + t._s(e.dep_name) + " "),
                                        ]),
                                        i(
                                          "q-item-label",
                                          { staticClass: "q-mb-xs", attrs: { caption: "" } },
                                          [
                                            i("span", { staticClass: "neu-css-after-colon" }, [
                                              t._v("提交时间"),
                                            ]),
                                            t._v(t._s(e.submit_time) + "\n                    "),
                                          ],
                                        ),
                                      ],
                                      1,
                                    ),
                                    i(
                                      "q-item-section",
                                      { staticClass: "q-mt-sm", attrs: { side: "" } },
                                      [
                                        i(
                                          "q-item-label",
                                          [
                                            i("q-icon", {
                                              attrs: { name: "keyboard_arrow_right", size: "xs" },
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
                          }),
                          i(
                            "div",
                            {
                              directives: [
                                {
                                  name: "show",
                                  rawName: "v-show",
                                  value: !t.isLoading && t.paging.pageCount != t.paging.pageNum,
                                  expression: "!isLoading && paging.pageCount != paging.pageNum",
                                },
                              ],
                              staticClass: "text-center text-grey q-pt-sm q-pb-md",
                              on: {
                                click: function (e) {
                                  return t.loadList(null);
                                },
                              },
                            },
                            [t._v("\n                加载更多...\n              ")],
                          ),
                          i(
                            "div",
                            {
                              directives: [
                                {
                                  name: "show",
                                  rawName: "v-show",
                                  value:
                                    !t.isLoading &&
                                    t.paging.pageCount == t.paging.pageNum &&
                                    0 != t.list.length,
                                  expression:
                                    "!isLoading && paging.pageCount == paging.pageNum && list.length != 0",
                                },
                              ],
                              staticClass: "text-center text-grey q-pt-sm q-pb-md",
                            },
                            [t._v("\n                没有更多了\n              ")],
                          ),
                          i(
                            "div",
                            {
                              directives: [
                                {
                                  name: "show",
                                  rawName: "v-show",
                                  value: !t.isLoading && 0 == t.list.length,
                                  expression: "!isLoading && list.length == 0",
                                },
                              ],
                              staticClass: "text-center text-grey q-pt-sm q-pb-md",
                            },
                            [t._v("\n                暂无数据\n              ")],
                          ),
                          i(
                            "div",
                            {
                              directives: [
                                {
                                  name: "show",
                                  rawName: "v-show",
                                  value: t.isLoading,
                                  expression: "isLoading",
                                },
                              ],
                              staticClass: "text-center text-grey q-pt-sm q-pb-md",
                            },
                            [i("q-spinner-dots", { attrs: { color: "primary", size: "md" } })],
                            1,
                          ),
                        ],
                        2,
                      ),
                    ],
                    1,
                  ),
                ],
                1,
              ),
              i(
                "q-drawer",
                {
                  attrs: {
                    side: "right",
                    width: 200,
                    breakpoint: 100,
                    overlay: "",
                    bordered: "",
                    "content-class": "bg-white-3",
                  },
                  model: {
                    value: t.drawerRight,
                    callback: function (e) {
                      t.drawerRight = e;
                    },
                    expression: "drawerRight",
                  },
                },
                [
                  i(
                    "q-scroll-area",
                    { staticClass: "fit" },
                    [
                      i(
                        "q-list",
                        {
                          staticStyle: { "border-left": "0.15rem solid #027be3" },
                          attrs: { separator: "" },
                        },
                        [
                          i(
                            "q-item",
                            {
                              directives: [{ name: "ripple", rawName: "v-ripple" }],
                              attrs: { clickable: "" },
                              on: {
                                click: function (e) {
                                  t.detailDialog = !0;
                                },
                              },
                            },
                            [
                              i(
                                "q-item-section",
                                { attrs: { avatar: "" } },
                                [i("q-icon", { attrs: { name: "remove_red_eye", size: "sm" } })],
                                1,
                              ),
                              i("q-item-section", { staticStyle: { "font-size": "1.1rem" } }, [
                                t._v("预览模板"),
                              ]),
                            ],
                            1,
                          ),
                          1 == t.record.status && t.record.is_author
                            ? i(
                                "q-item",
                                {
                                  directives: [{ name: "ripple", rawName: "v-ripple" }],
                                  attrs: { clickable: "" },
                                  on: { click: t.terminateJoblog },
                                },
                                [
                                  i(
                                    "q-item-section",
                                    { attrs: { avatar: "" } },
                                    [
                                      i("q-icon", {
                                        attrs: { name: "check", size: "sm", color: "primary" },
                                      }),
                                    ],
                                    1,
                                  ),
                                  i(
                                    "q-item-section",
                                    {
                                      staticClass: "text-primary",
                                      staticStyle: { "font-size": "1.1rem" },
                                    },
                                    [t._v("提前结束")],
                                  ),
                                ],
                                1,
                              )
                            : t._e(),
                          1 == t.record.status && t.record.is_author
                            ? i(
                                "q-item",
                                {
                                  directives: [{ name: "ripple", rawName: "v-ripple" }],
                                  attrs: { clickable: "" },
                                  on: { click: t.openExtendDialog },
                                },
                                [
                                  i(
                                    "q-item-section",
                                    { attrs: { avatar: "" } },
                                    [
                                      i("q-icon", {
                                        attrs: {
                                          name: "access_time",
                                          size: "sm",
                                          color: "primary",
                                        },
                                      }),
                                    ],
                                    1,
                                  ),
                                  i(
                                    "q-item-section",
                                    {
                                      staticClass: "text-primary",
                                      staticStyle: { "font-size": "1.1rem" },
                                    },
                                    [t._v("延期")],
                                  ),
                                ],
                                1,
                              )
                            : t._e(),
                          0 == t.record.status && t.record.is_author
                            ? i(
                                "q-item",
                                {
                                  directives: [{ name: "ripple", rawName: "v-ripple" }],
                                  attrs: { clickable: "" },
                                  on: { click: t.openExtendDialog },
                                },
                                [
                                  i(
                                    "q-item-section",
                                    { attrs: { avatar: "" } },
                                    [
                                      i("q-icon", {
                                        attrs: { name: "refresh", size: "sm", color: "primary" },
                                      }),
                                    ],
                                    1,
                                  ),
                                  i(
                                    "q-item-section",
                                    {
                                      staticClass: "text-primary",
                                      staticStyle: { "font-size": "1.1rem" },
                                    },
                                    [t._v("重新开启")],
                                  ),
                                ],
                                1,
                              )
                            : t._e(),
                          t.record.is_author
                            ? i(
                                "q-item",
                                {
                                  directives: [{ name: "ripple", rawName: "v-ripple" }],
                                  attrs: { clickable: "" },
                                  on: { click: t.copyApply },
                                },
                                [
                                  i(
                                    "q-item-section",
                                    { attrs: { avatar: "" } },
                                    [
                                      i("q-icon", {
                                        attrs: {
                                          name: "content_copy",
                                          size: "sm",
                                          color: "primary",
                                        },
                                      }),
                                    ],
                                    1,
                                  ),
                                  i(
                                    "q-item-section",
                                    {
                                      staticClass: "text-primary",
                                      staticStyle: { "font-size": "1.1rem" },
                                    },
                                    [t._v("复制")],
                                  ),
                                ],
                                1,
                              )
                            : t._e(),
                          t.record.is_author || "A" == t.roleId
                            ? i(
                                "q-item",
                                {
                                  directives: [{ name: "ripple", rawName: "v-ripple" }],
                                  attrs: { clickable: "" },
                                  on: { click: t.deleteJoblog },
                                },
                                [
                                  i(
                                    "q-item-section",
                                    { attrs: { avatar: "" } },
                                    [
                                      i("q-icon", {
                                        attrs: { name: "delete", size: "sm", color: "red" },
                                      }),
                                    ],
                                    1,
                                  ),
                                  i(
                                    "q-item-section",
                                    {
                                      staticClass: "text-red",
                                      staticStyle: { "font-size": "1.1rem" },
                                    },
                                    [t._v("删除")],
                                  ),
                                ],
                                1,
                              )
                            : t._e(),
                          0 == t.record.allow_look || "A" != t.roleId
                            ? i(
                                "q-item",
                                {
                                  directives: [{ name: "ripple", rawName: "v-ripple" }],
                                  attrs: { clickable: "" },
                                  on: { click: t.exportList },
                                },
                                [
                                  i(
                                    "q-item-section",
                                    { attrs: { avatar: "" } },
                                    [i("q-icon", { attrs: { name: "get_app", size: "sm" } })],
                                    1,
                                  ),
                                  i("q-item-section", { staticStyle: { "font-size": "1.1rem" } }, [
                                    t._v("导出"),
                                  ]),
                                ],
                                1,
                              )
                            : t._e(),
                        ],
                        1,
                      ),
                    ],
                    1,
                  ),
                ],
                1,
              ),
              t.aCreate
                ? i(
                    "q-page-sticky",
                    { attrs: { position: "bottom-right", offset: t.fabPos } },
                    [
                      i("q-btn", {
                        directives: [
                          {
                            name: "touch-pan",
                            rawName: "v-touch-pan.prevent.mouse",
                            value: t.moveFab,
                            expression: "moveFab",
                            modifiers: { prevent: !0, mouse: !0 },
                          },
                        ],
                        attrs: { round: "", color: "primary", icon: "edit" },
                        on: {
                          click: function (e) {
                            return t.goDetail(null, !1);
                          },
                        },
                      }),
                    ],
                    1,
                  )
                : t._e(),
            ],
            1,
          );
        },
        s = [],
        o = (a("13d5"), a("ded3")),
        r = a.n(o),
        l = a("9a3d"),
        n = a("5333"),
        c = a("974f"),
        d = a("d852"),
        g = a("58a84"),
        h = {
          name: "JoblogDetail",
          components: {
            NeuAssignTeacher: l["a"],
            NeuViewAssignedTeacher: n["a"],
            NeuWidget: c["a"],
            NeuExportData: d["a"],
          },
          data() {
            return {
              roleId: JSON.parse(window.localStorage.getItem("userinfo")).role_id,
              drawerRight: !1,
              tab: "DetailList",
              id: null,
              menuInfo: null,
              record: { allow_delete: 0, allow_look: 0 },
              detailDialog: !1,
              extendDialog: !1,
              endDate: null,
              shareDialog: !1,
              shareTarget: [],
              infoModel: [],
              infoConfig: [],
              viewMode: !0,
              result: { info_result: [] },
              list: [],
              paging: { pageSize: 30, pageNum: 0, pageCount: 0 },
              aCreate: !1,
              editDialog: !1,
              condition: [],
              condCount: 0,
              dialog: !1,
              originalCond: {},
              queryModel: { mutli_search: "" },
              isLoading: !1,
              fabPos: [30, 40],
              exportCompConfig: null,
              taskTargetDialog: !1,
              actionTarget: [],
            };
          },
          destroyed() {
            window.removeEventListener("popstate", this.goBack, !1);
          },
          mounted() {
            ((this.id = this.$route.query.id),
              window.localStorage.getItem("menu") &&
                (this.menuInfo = JSON.parse(window.localStorage.getItem("menu")).find(
                  (e) => "joblog" === e.id,
                )),
              this.getDetail(),
              window.history &&
                window.history.pushState &&
                (history.pushState(null, null, document.URL),
                window.addEventListener("popstate", this.goBack, !1)),
              this.loadList(() => {}));
          },
          methods: {
            loadList(e) {
              (e && ((this.paging.pageNum = 0), (this.list = [])),
                (this.paging.pageNum += 1),
                (this.isLoading = !0),
                this.$axiosAction(
                  "/api/teacher/joblog/joblog.api",
                  r()(
                    r()({ action: "queryJoblogResultList", joblog_id: this.id }, this.queryModel),
                    {},
                    { pageSize: this.paging.pageSize, pageNum: this.paging.pageNum },
                  ),
                )
                  .then((t) => {
                    if (0 === t.data.code) {
                      this.list = this.list.concat(t.data.result.list);
                      const {
                        pageSize: e,
                        pageNum: a,
                        rowCount: i,
                        pageCount: s,
                        startIndex: o,
                        endIndex: l,
                      } = r()({}, t.data.result);
                      this.paging = {
                        pageSize: e,
                        pageNum: a,
                        rowCount: i,
                        pageCount: s,
                        startIndex: o,
                        endIndex: l,
                      };
                    } else this.setDefaultList();
                    (e && e(), (this.isLoading = !1));
                  })
                  .catch((t) => {
                    (this.setDefaultList(), e && e(), (this.isLoading = !1));
                  }));
            },
            setDefaultList() {
              ((this.list = []), (this.paging = { pageSize: 30, pageNum: 0, pageCount: 0 }));
            },
            refresh(e) {
              this.loadList(e);
            },
            goBack() {
              this.$router.push("/teacher/joblog/index");
            },
            terminateJoblog() {
              this.$q
                .dialog({
                  title: "确认提前结束",
                  message: "提前结束后教师将不能再填写该模板工作日志。",
                  html: !0,
                  persistent: !0,
                  cancel: { label: "取消", outline: !0, color: "grey" },
                  ok: { label: "提前结束", unelevated: !0, color: "primary" },
                })
                .onOk(() => {
                  (this.$q.loading.show(),
                    this.$axiosAction("/api/teacher/joblog/joblog.api", {
                      action: "terminateJoblog",
                      id: this.id,
                    })
                      .then((e) => {
                        (0 === e.data.code && this.$router.push("/teacher/joblog/index"),
                          this.$q.loading.hide());
                      })
                      .catch((e) => {
                        this.$q.loading.hide();
                      }));
                });
            },
            openExtendDialog() {
              ((this.extendDialog = !0), (this.endDate = this.record.end_date));
            },
            copyApply() {
              this.$q
                .dialog({
                  title: "确认复制",
                  message: "复制该模板设置数据并全新发布",
                  html: !0,
                  persistent: !0,
                  cancel: { label: "取消", outline: !0, color: "grey" },
                  ok: { label: "复制", unelevated: !0, color: "primary" },
                })
                .onOk(() => {
                  this.$axiosAction("/api/teacher/joblog/joblog.api", {
                    action: "queryJoblogForEditing",
                    id: this.id,
                  })
                    .then((e) => {
                      0 === e.data.code &&
                        this.$router.push({
                          name: "/teacher/joblog/new",
                          params: { record: e.data.result },
                        });
                    })
                    .catch((e) => {});
                });
            },
            extendJoblog() {
              this.$axiosAction("/api/teacher/joblog/joblog.api", {
                action: 1 === this.record.status ? "extendJoblog" : "restartJoblog",
                id: this.id,
                end_date: this.endDate,
              })
                .then((e) => {
                  0 === e.data.code &&
                    (1 === this.record.status
                      ? ((this.record.end_date = this.endDate), (this.extendDialog = !1))
                      : this.$router.push("/teacher/joblog/index"));
                })
                .catch((e) => {
                  this.$q.loading.hide();
                });
            },
            deleteJoblog() {
              this.$q
                .dialog({
                  title: "确认删除",
                  message: "该工作日志模板及各位老师已填写的数据将被清空。</span>",
                  html: !0,
                  persistent: !0,
                  cancel: { label: "取消", outline: !0, color: "grey" },
                  ok: { label: "删除", unelevated: !0, color: "negative" },
                })
                .onOk(() => {
                  (this.$q.loading.show(),
                    this.$axiosAction("/api/teacher/joblog/joblog.api", {
                      action: "deleteJoblog",
                      id: this.id,
                      roleId: this.roleId,
                      teacher_no: this.record.teacher_no,
                      title: this.record.title,
                    })
                      .then((e) => {
                        (0 === e.data.code && this.$router.push("/teacher/joblog/index"),
                          this.$q.loading.hide());
                      })
                      .catch((e) => {
                        this.$q.loading.hide();
                      }));
                });
            },
            submitJoblogResult() {
              const e = r()({}, this.result);
              ((e.info_result = JSON.stringify(e.info_result)),
                this.$axiosAction(
                  "/api/teacher/joblog/joblog.api",
                  r()({ action: e.id ? "updateJoblogResult" : "insertJoblogResult" }, e),
                )
                  .then((e) => {
                    0 === e.data.code && ((this.editDialog = !1), this.loadList(() => {}));
                  })
                  .catch((e) => {}));
            },
            exportList() {
              if (!this.id) return;
              const e = this.condition.reduce((e, t) => ((e[t.name] = t.value), e), {});
              ((e.joblog_id = this.id),
                (this.exportCompConfig = [
                  "/api/teacher/joblog/joblog.api",
                  "queryJoblogResultList",
                  e,
                  { [this.record.title]: "result" },
                  this.record.title,
                  null,
                  (e) =>
                    e.reduce((e, t) => {
                      const a = {
                        教工号: t.teacher_no,
                        姓名: t.teacher_name,
                        性别: t.sex_name,
                        部门院系: t.dep_name,
                        提交时间: t.submit_time,
                      };
                      if (this.infoConfig)
                        for (let i = 0; i < this.infoConfig.length; i++)
                          a[(i + 1).toString() + "." + this.infoConfig[i].label] = t.info_result
                            ? Object(g["c"])(this.infoConfig[i], t.info_result[i])
                            : null;
                      return e.concat(a);
                    }, []),
                  1e3,
                  5e3,
                ]));
            },
            openShareDialog() {
              ((this.shareDialog = !0), (this.shareTarget = this.record.share_target));
            },
            updateShareTarget() {
              (this.$q.loading.show(),
                this.$axiosAction("/api/teacher/joblog/joblog.api", {
                  action: "updateShareTarget",
                  id: this.id,
                  share_target:
                    this.shareTarget && this.shareTarget.length > 0
                      ? JSON.stringify(this.shareTarget)
                      : null,
                })
                  .then((e) => {
                    (0 === e.data.code &&
                      ((this.record.share_target = this.shareTarget), (this.shareDialog = !1)),
                      this.$q.loading.hide());
                  })
                  .catch((e) => {
                    this.$q.loading.hide();
                  }));
            },
            open() {
              ((this.dialog = !0),
                (this.originalCond = Object.keys(this.queryModel).reduce(
                  (e, t) => ((e[t] = this.queryModel[t]), e),
                  {},
                )));
            },
            close() {
              ((this.dialog = !1),
                (this.queryModel = Object.keys(this.originalCond).reduce(
                  (e, t) => ((e[t] = this.originalCond[t]), e),
                  {},
                )));
            },
            getCondition() {
              ((this.condCount = Object.keys(this.queryModel).reduce(
                (e, t) => (this.queryModel[t] ? e + 1 : e),
                0,
              )),
                this.$refs.pageRefresh.trigger(),
                (this.dialog = !1));
            },
            goDetail(e, t, a, i) {
              if (1 === i && "A" === this.roleId)
                this.$q.dialog({
                  title: "无法查看",
                  message: "该工作日志已设置管理员无法查看详情。",
                  html: !0,
                  persistent: !0,
                  ok: { label: "确定", outline: !0, color: "primary" },
                });
              else {
                let i = "";
                ((i = t ? "d" : "u"),
                  e
                    ? (this.result = {
                        info_result: this.list.find((t) => t.id === e).info_result,
                        id: e,
                      })
                    : ((i = "n"), (this.result = { info_result: [], joblog_id: this.id })));
                const s = this.aCreate && 1 === this.record.allow_delete && "n" !== i;
                ((this.viewMode = t),
                  window.localStorage.setItem("joblog_result_detail", JSON.stringify(this.result)),
                  window.localStorage.setItem("joblog_infoConfig", JSON.stringify(this.infoConfig)),
                  this.$router.push(
                    "/teacher/joblog/detailResult?type=" +
                      i +
                      "&jobId=" +
                      this.id +
                      "&joblogRstId=" +
                      e +
                      "&viewMode=" +
                      this.viewMode +
                      "&teacher_no=" +
                      a +
                      "&getAllowDelete=" +
                      s,
                  ));
              }
            },
            moveFab(e) {
              ((this.draggingFab = !0 !== e.isFirst && !0 !== e.isFinal),
                (this.fabPos = [this.fabPos[0] - e.delta.x, this.fabPos[1] - e.delta.y]));
            },
            taskTargetDialogOpen() {
              ((this.taskTargetDialog = !0),
                (this.actionTarget = JSON.parse(JSON.stringify(this.record.task_target))));
            },
            updateActionTarget() {
              (this.$q.loading.show(),
                this.$axiosAction("/api/teacher/joblog/joblog.api", {
                  action: "updateActionTarget",
                  id: this.id,
                  task_target:
                    this.actionTarget && this.actionTarget.length > 0
                      ? JSON.stringify(this.actionTarget)
                      : null,
                })
                  .then((e) => {
                    (0 === e.data.code &&
                      ((this.record.task_target = this.actionTarget), (this.taskTargetDialog = !1)),
                      this.$q.loading.hide());
                  })
                  .catch((e) => {
                    this.$q.loading.hide();
                  }));
            },
            changeAllowDelete() {
              this.$axiosAction("/api/teacher/joblog/joblog.api", {
                action: "updateAllowDelete",
                id: this.$route.query.id,
                allow_delete: this.record.allow_delete,
              })
                .then((e) => {
                  0 === e.data.code ? this.getDetail() : this.goBack();
                })
                .catch((e) => {
                  this.record = {};
                });
            },
            changeAllowLook() {
              this.$axiosAction("/api/teacher/joblog/joblog.api", {
                action: "updateAllowLook",
                id: this.$route.query.id,
                allow_look: this.record.allow_look,
              })
                .then((e) => {
                  0 === e.data.code ? this.getDetail() : this.goBack();
                })
                .catch((e) => {
                  this.record = {};
                });
            },
            getDetail() {
              this.$axiosAction("/api/teacher/joblog/joblog.api", {
                action: "queryJoblog",
                id: this.id,
                roleId: this.roleId,
              })
                .then((e) => {
                  0 === e.data.code &&
                    ("" === e.data.result &&
                      (this.$showErrorNotify("该条信息不存在或您权限不足"), this.goBack()),
                    (this.infoConfig = e.data.result.info_config),
                    (this.record = e.data.result),
                    (this.aCreate = this.record.allow_create));
                })
                .catch((e) => {
                  this.record = {};
                });
            },
          },
        },
        u = h,
        p = a("2877"),
        m = a("4d5a"),
        v = a("e359"),
        b = a("65c6"),
        f = a("9c40"),
        q = a("6ac5"),
        _ = a("58a81"),
        w = a("3b73"),
        y = a("4074"),
        x = a("0170"),
        k = a("f09f"),
        C = a("a370"),
        D = a("24e8"),
        S = a("0378"),
        j = a("8572"),
        N = a("0016"),
        $ = a("7cbe"),
        T = a("52ee"),
        z = a("eb85"),
        L = a("9564"),
        J = a("6b1d"),
        Q = a("1c1c"),
        A = a("66e5"),
        I = a("27f9"),
        M = a("59d7"),
        O = a("09e3"),
        R = a("9989"),
        P = a("8380"),
        E = a("9404"),
        F = a("4983"),
        B = a("de5e"),
        Y = a("7f67"),
        H = a("714f"),
        W = a("75c3"),
        U = a("eebe"),
        V = a.n(U),
        G = Object(p["a"])(u, i, s, !1, null, null, null);
      t["default"] = G.exports;
      (V()(G, "components", {
        QLayout: m["a"],
        QHeader: v["a"],
        QToolbar: b["a"],
        QBtn: f["a"],
        QToolbarTitle: q["a"],
        QBadge: _["a"],
        QExpansionItem: w["a"],
        QItemSection: y["a"],
        QItemLabel: x["a"],
        QCard: k["a"],
        QCardSection: C["a"],
        QDialog: D["a"],
        QForm: S["a"],
        QField: j["a"],
        QIcon: N["a"],
        QPopupProxy: $["a"],
        QDate: T["a"],
        QSeparator: z["a"],
        QToggle: L["a"],
        QLinearProgress: J["a"],
        QList: Q["a"],
        QItem: A["a"],
        QInput: I["a"],
        QPullToRefresh: M["a"],
        QPageContainer: O["a"],
        QPage: R["a"],
        QSpinnerDots: P["a"],
        QDrawer: E["a"],
        QScrollArea: F["a"],
        QPageSticky: B["a"],
      }),
        V()(G, "directives", { ClosePopup: Y["a"], Ripple: H["a"], TouchPan: W["a"] }));
    },
  },
]);
