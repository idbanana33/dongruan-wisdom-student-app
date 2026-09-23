(window["webpackJsonp"] = window["webpackJsonp"] || []).push([
  [103],
  {
    "897e": function (e, t, s) {
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
                      s("q-toolbar-title", [
                        e._v(
                          e._s(
                            "reviewing" == e.tab
                              ? "待审批" + e.menuInfo.title + "申请"
                              : "reviewed" == e.tab
                                ? "已审批" + e.menuInfo.title + "申请"
                                : e.menuInfo.title + "申请记录",
                          ),
                        ),
                      ]),
                      s("q-btn", {
                        attrs: { flat: "", round: "", dense: "", icon: "get_app" },
                        on: { click: e.exportList },
                      }),
                      s(
                        "q-btn",
                        {
                          attrs: { flat: "", round: "", dense: "", icon: "search" },
                          on: { click: e.open },
                        },
                        [
                          s(
                            "q-badge",
                            {
                              directives: [
                                {
                                  name: "show",
                                  rawName: "v-show",
                                  value: 0 != e.condCount,
                                  expression: "condCount != 0",
                                },
                              ],
                              attrs: { color: "orange", floating: "", transparent: "" },
                            },
                            [e._v(e._s(e.condCount))],
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
              s(
                "q-dialog",
                {
                  attrs: { position: "bottom" },
                  model: {
                    value: e.dialog,
                    callback: function (t) {
                      e.dialog = t;
                    },
                    expression: "dialog",
                  },
                },
                [
                  s(
                    "q-card",
                    { staticStyle: { width: "350px" } },
                    [
                      s("q-linear-progress", { attrs: { value: 1, color: "primary" } }),
                      s(
                        "q-card-section",
                        { staticClass: "row items-center justify-between", attrs: { dense: "" } },
                        [
                          s("q-btn", {
                            attrs: { outline: "", label: "取消", color: "grey", size: "md" },
                            on: {
                              click: function (t) {
                                return e.close();
                              },
                            },
                          }),
                          s("q-btn", {
                            attrs: { unelevated: "", label: "重置时间", color: "grey", size: "md" },
                            on: {
                              click: function (t) {
                                return e.resetTime();
                              },
                            },
                          }),
                          s("q-btn", {
                            attrs: { unelevated: "", label: "确定", color: "primary", size: "md" },
                            on: { click: e.getCondition },
                          }),
                        ],
                        1,
                      ),
                      s(
                        "q-list",
                        { attrs: { bordered: "" } },
                        [
                          "reviewing" !== e.tab
                            ? s(
                                "q-item",
                                [
                                  s("q-item-section", { attrs: { avatar: "", top: "" } }, [
                                    s("span", [e._v("审批状态")]),
                                  ]),
                                  s("q-item-section", [
                                    s(
                                      "div",
                                      { staticClass: "row justify-evenly" },
                                      e._l(
                                        [
                                          { label: "通过", value: "1" },
                                          { label: "驳回", value: "2" },
                                          { label: "审批中", value: "3" },
                                        ],
                                        function (t) {
                                          return s(
                                            "q-btn",
                                            {
                                              key: t.value,
                                              attrs: {
                                                outline: "",
                                                color:
                                                  t.value == e.queryModel.status
                                                    ? "primary"
                                                    : "grey",
                                              },
                                              on: {
                                                click: function (s) {
                                                  return e.getValue(t.value);
                                                },
                                              },
                                            },
                                            [
                                              e._v(
                                                "\n                      " +
                                                  e._s(t.label) +
                                                  "\n                      ",
                                              ),
                                              s(
                                                "q-badge",
                                                {
                                                  directives: [
                                                    {
                                                      name: "show",
                                                      rawName: "v-show",
                                                      value: e.queryModel.status == t.value,
                                                      expression: "queryModel.status == item.value",
                                                    },
                                                  ],
                                                  attrs: { color: "orange", floating: "" },
                                                },
                                                [e._v("√")],
                                              ),
                                            ],
                                            1,
                                          );
                                        },
                                      ),
                                      1,
                                    ),
                                  ]),
                                ],
                                1,
                              )
                            : e._e(),
                          s("q-separator"),
                          s(
                            "q-item",
                            [
                              s("q-item-section", { attrs: { avatar: "", top: "" } }, [
                                s("span", [e._v("提交时间")]),
                              ]),
                              s(
                                "q-item-section",
                                [
                                  s(
                                    "q-item-label",
                                    [
                                      s("q-field", {
                                        attrs: {
                                          outlined: "",
                                          dense: "",
                                          "stack-label": "",
                                          "hide-bottom-space": "",
                                          "lazy-rules": "",
                                          label: "开始时间",
                                          value: e.queryModel.begin_time,
                                        },
                                        scopedSlots: e._u([
                                          {
                                            key: "control",
                                            fn: function () {
                                              return [e._v(e._s(e.queryModel.begin_time))];
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
                                                                  value: e.queryModel.begin_time,
                                                                  callback: function (t) {
                                                                    e.$set(
                                                                      e.queryModel,
                                                                      "begin_time",
                                                                      t,
                                                                    );
                                                                  },
                                                                  expression:
                                                                    "queryModel.begin_time",
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
                                                          { staticClass: "row items-start" },
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
                                                                  value: e.queryModel.begin_time,
                                                                  callback: function (t) {
                                                                    e.$set(
                                                                      e.queryModel,
                                                                      "begin_time",
                                                                      t,
                                                                    );
                                                                  },
                                                                  expression:
                                                                    "queryModel.begin_time",
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
                                  s(
                                    "q-item-label",
                                    [
                                      s("q-field", {
                                        attrs: {
                                          outlined: "",
                                          dense: "",
                                          "stack-label": "",
                                          "hide-bottom-space": "",
                                          label: "结束时间",
                                          "lazy-rules": "",
                                          value: e.queryModel.end_time,
                                        },
                                        scopedSlots: e._u([
                                          {
                                            key: "control",
                                            fn: function () {
                                              return [e._v(e._s(e.queryModel.end_time))];
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
                                                                  value: e.queryModel.end_time,
                                                                  callback: function (t) {
                                                                    e.$set(
                                                                      e.queryModel,
                                                                      "end_time",
                                                                      t,
                                                                    );
                                                                  },
                                                                  expression: "queryModel.end_time",
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
                                                          { staticClass: "row items-start" },
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
                                                                  value: e.queryModel.end_time,
                                                                  callback: function (t) {
                                                                    e.$set(
                                                                      e.queryModel,
                                                                      "end_time",
                                                                      t,
                                                                    );
                                                                  },
                                                                  expression: "queryModel.end_time",
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
                            ],
                            1,
                          ),
                          s(
                            "q-item",
                            [
                              s("q-item-section", { attrs: { avatar: "", top: "" } }, [
                                s("span", [e._v("综合查询")]),
                              ]),
                              s(
                                "q-item-section",
                                [
                                  s("q-input", {
                                    attrs: { outlined: "", clearable: "", dense: "" },
                                    model: {
                                      value: e.queryModel.mutli_search,
                                      callback: function (t) {
                                        e.$set(e.queryModel, "mutli_search", t);
                                      },
                                      expression: "queryModel.mutli_search",
                                    },
                                  }),
                                  s(
                                    "q-item-label",
                                    {
                                      staticStyle: { "margin-top": "4px" },
                                      attrs: { caption: "" },
                                    },
                                    [e._v("可以查询学号、姓名、院系、专业、年级信息、流程名称")],
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
              s(
                "q-pull-to-refresh",
                { ref: "pageRefresh", on: { refresh: e.refresh } },
                [
                  s(
                    "q-page-container",
                    [
                      s(
                        "q-page",
                        { staticClass: "bg-grey-3 q-py-sm" },
                        [
                          e.menuInfo
                            ? e._e()
                            : s(
                                "div",
                                {
                                  staticClass:
                                    "text-h6 text-bold q-mb-md row justify-center full-width",
                                },
                                [e._v("\n              您没有当前页面访问权限\n          ")],
                              ),
                          e._l(e.list, function (t, a) {
                            return s(
                              "q-card",
                              {
                                directives: [
                                  {
                                    name: "touch-hold",
                                    rawName: "v-touch-hold.mouse",
                                    value: function (t) {
                                      return e.handleHold(a);
                                    },
                                    expression: "(e)=>handleHold(index)",
                                    modifiers: { mouse: !0 },
                                  },
                                ],
                                key: t.id,
                                staticClass: "bg-white q-mb-sm q-mx-sm",
                                style:
                                  "R" == t.review_status
                                    ? "border-left:0.25rem solid #FF0000;"
                                    : "W" == t.review_status
                                      ? "border-left:0.25rem solid #20B2AA;"
                                      : "border-left:0.25rem solid #32CD32;",
                                attrs: { flat: "" },
                                on: {
                                  click: function (s) {
                                    return e.goDetail(t.id, t.process_id, a);
                                  },
                                },
                              },
                              [
                                e.menuInfo
                                  ? s(
                                      "q-item",
                                      [
                                        s(
                                          "q-item-section",
                                          {
                                            directives: [
                                              {
                                                name: "show",
                                                rawName: "v-show",
                                                value: "reviewing" === e.tab && e.operateDisplay,
                                                expression: "tab === 'reviewing' && operateDisplay",
                                              },
                                            ],
                                            attrs: { avatar: "" },
                                          },
                                          [
                                            s(
                                              "q-item-label",
                                              [
                                                s("q-checkbox", {
                                                  attrs: { id: "processItem" + a, val: t },
                                                  model: {
                                                    value: e.selected,
                                                    callback: function (t) {
                                                      e.selected = t;
                                                    },
                                                    expression: "selected",
                                                  },
                                                }),
                                              ],
                                              1,
                                            ),
                                          ],
                                          1,
                                        ),
                                        s(
                                          "q-item-section",
                                          [
                                            s(
                                              "q-item-label",
                                              [
                                                s("q-icon", {
                                                  directives: [
                                                    {
                                                      name: "show",
                                                      rawName: "v-show",
                                                      value: "1" == t.sex,
                                                      expression: "item.sex == '1'",
                                                    },
                                                  ],
                                                  attrs: { name: "person", color: "blue" },
                                                }),
                                                s("q-icon", {
                                                  directives: [
                                                    {
                                                      name: "show",
                                                      rawName: "v-show",
                                                      value: "2" == t.sex,
                                                      expression: "item.sex == '2'",
                                                    },
                                                  ],
                                                  attrs: { name: "person", color: "pink" },
                                                }),
                                                e._v("\n                  " + e._s(t.name) + " "),
                                                s("span", { staticClass: "text-grey" }, [
                                                  e._v("(" + e._s(t.student_no) + ") "),
                                                ]),
                                                s(
                                                  "span",
                                                  {
                                                    staticClass: "text-grey",
                                                    staticStyle: { "font-size": "0.8rem" },
                                                  },
                                                  [e._v(e._s(t.report_status_name))],
                                                ),
                                              ],
                                              1,
                                            ),
                                            s(
                                              "q-item-label",
                                              { attrs: { lines: "1", caption: "" } },
                                              [
                                                s(
                                                  "q-badge",
                                                  {
                                                    attrs: {
                                                      square: "",
                                                      color: "grey-5",
                                                      "text-color": "white",
                                                      size: "sm",
                                                    },
                                                  },
                                                  [
                                                    e._v(
                                                      "\n                    " +
                                                        e._s(t.process_type_name) +
                                                        "\n                  ",
                                                    ),
                                                  ],
                                                ),
                                                s(
                                                  "span",
                                                  {
                                                    staticClass: "text-grey",
                                                    staticStyle: { "font-size": "0.8rem" },
                                                  },
                                                  [
                                                    e._v(
                                                      " " +
                                                        e._s(
                                                          0 == t.into_campus && 0 == t.out_campus
                                                            ? "不需要核验"
                                                            : 1 == t.into_campus &&
                                                                1 == t.out_campus
                                                              ? "需要入校、离校核验"
                                                              : 1 == t.into_campus
                                                                ? "需要入校核验"
                                                                : "需要离校核验",
                                                        ) +
                                                        " ",
                                                    ),
                                                  ],
                                                ),
                                              ],
                                              1,
                                            ),
                                            s(
                                              "q-item-label",
                                              { attrs: { lines: "1", caption: "" } },
                                              [
                                                e._v(
                                                  e._s(t.class_name) +
                                                    " " +
                                                    e._s(t.major_name) +
                                                    " " +
                                                    e._s(t.dep_name),
                                                ),
                                              ],
                                            ),
                                            s("q-item-label", { attrs: { lines: "2" } }, [
                                              e._v(
                                                "\n                  " +
                                                  e._s(t.leave_period) +
                                                  "\n                ",
                                              ),
                                            ]),
                                            s(
                                              "q-item-label",
                                              {
                                                staticStyle: { "min-width": "250px" },
                                                attrs: { caption: "", lines: "1" },
                                              },
                                              [
                                                s("span", { staticClass: "neu-css-after-colon " }, [
                                                  e._v("提交日期"),
                                                ]),
                                                e._v(e._s(t.create_time) + "\n                "),
                                              ],
                                            ),
                                            s(
                                              "q-item-label",
                                              {
                                                staticStyle: { "min-width": "250px" },
                                                attrs: { caption: "", lines: "1" },
                                              },
                                              [
                                                s("span", { staticClass: "neu-css-after-colon " }, [
                                                  e._v(e._s(e.counsellorlabel)),
                                                ]),
                                                e._v(e._s(t.counsellor) + "\n                "),
                                              ],
                                            ),
                                          ],
                                          1,
                                        ),
                                        s(
                                          "q-item-section",
                                          { attrs: { side: "" } },
                                          [
                                            s(
                                              "q-item-label",
                                              [
                                                s("q-icon", {
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
                                    )
                                  : e._e(),
                              ],
                              1,
                            );
                          }),
                          s(
                            "div",
                            {
                              directives: [
                                {
                                  name: "show",
                                  rawName: "v-show",
                                  value: !e.isLoading && e.paging.pageCount != e.paging.pageNum,
                                  expression: "!isLoading && paging.pageCount != paging.pageNum",
                                },
                              ],
                              staticClass: "text-center text-grey q-pt-sm q-pb-md",
                              on: {
                                click: function (t) {
                                  return e.loadList(null);
                                },
                              },
                            },
                            [e._v("\n              加载更多...\n            ")],
                          ),
                          s(
                            "div",
                            {
                              directives: [
                                {
                                  name: "show",
                                  rawName: "v-show",
                                  value:
                                    !e.isLoading &&
                                    e.paging.pageCount == e.paging.pageNum &&
                                    0 != e.list.length,
                                  expression:
                                    "!isLoading && paging.pageCount == paging.pageNum && list.length != 0",
                                },
                              ],
                              staticClass: "text-center text-grey q-pt-sm q-pb-md",
                            },
                            [e._v("\n              没有更多了\n            ")],
                          ),
                          s(
                            "div",
                            {
                              directives: [
                                {
                                  name: "show",
                                  rawName: "v-show",
                                  value: !e.isLoading && 0 == e.list.length,
                                  expression: "!isLoading && list.length == 0",
                                },
                              ],
                              staticClass: "text-center text-grey q-pt-sm q-pb-md",
                            },
                            [e._v("\n              暂无流程申请\n            ")],
                          ),
                          s(
                            "div",
                            {
                              directives: [
                                {
                                  name: "show",
                                  rawName: "v-show",
                                  value: e.isLoading,
                                  expression: "isLoading",
                                },
                              ],
                              staticClass: "text-center text-grey q-pt-sm q-pb-md",
                            },
                            [s("q-spinner-dots", { attrs: { color: "primary", size: "md" } })],
                            1,
                          ),
                        ],
                        2,
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
                                      value: e.opinion,
                                      callback: function (t) {
                                        e.opinion = t;
                                      },
                                      expression: "opinion",
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
                                        return e.Operations();
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
                      s(
                        "q-dialog",
                        {
                          model: {
                            value: e.alertDialog,
                            callback: function (t) {
                              e.alertDialog = t;
                            },
                            expression: "alertDialog",
                          },
                        },
                        [
                          s(
                            "q-card",
                            [
                              s("q-card-section", [
                                s("div", { staticClass: "text-h6" }, [e._v("审批提示")]),
                              ]),
                              s(
                                "q-card-section",
                                { staticClass: "q-pt-none" },
                                [
                                  s(
                                    "q-list",
                                    { attrs: { bordered: "", separator: "" } },
                                    e._l(e.resErrorList, function (t, a) {
                                      return s(
                                        "q-item",
                                        {
                                          directives: [{ name: "ripple", rawName: "v-ripple" }],
                                          key: a,
                                          attrs: { clickable: "" },
                                        },
                                        [s("q-item-section", [e._v(e._s(t))])],
                                        1,
                                      );
                                    }),
                                    1,
                                  ),
                                  s("span", { staticClass: "text-grey text-caption q-ml-sm" }, [
                                    e._v(
                                      "部分审批下一级审批人没有权限或被删除，请联系管理员或刷新",
                                    ),
                                  ]),
                                ],
                                1,
                              ),
                              s(
                                "q-card-actions",
                                { attrs: { align: "right" } },
                                [
                                  s("q-btn", {
                                    directives: [{ name: "close-popup", rawName: "v-close-popup" }],
                                    attrs: { flat: "", label: "确认", color: "primary" },
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
                      s(
                        "q-dialog",
                        {
                          model: {
                            value: e.warnDialog,
                            callback: function (t) {
                              e.warnDialog = t;
                            },
                            expression: "warnDialog",
                          },
                        },
                        [
                          s(
                            "q-card",
                            [
                              s("q-card-section", [
                                s("div", { staticClass: "text-h6" }, [
                                  e._v("以下学生存在风险选项"),
                                ]),
                              ]),
                              s(
                                "q-card-section",
                                { staticClass: "q-pt-none" },
                                e._l(e.ProcessWarnList, function (t) {
                                  return s(
                                    "q-item",
                                    { key: t.id },
                                    [
                                      s(
                                        "q-item-section",
                                        [
                                          s(
                                            "q-item-label",
                                            [
                                              s("q-icon", {
                                                directives: [
                                                  {
                                                    name: "show",
                                                    rawName: "v-show",
                                                    value: "1" == t.sex,
                                                    expression: "item.sex == '1'",
                                                  },
                                                ],
                                                attrs: { name: "person", color: "blue" },
                                              }),
                                              s("q-icon", {
                                                directives: [
                                                  {
                                                    name: "show",
                                                    rawName: "v-show",
                                                    value: "2" == t.sex,
                                                    expression: "item.sex == '2'",
                                                  },
                                                ],
                                                attrs: { name: "person", color: "pink" },
                                              }),
                                              e._v("\n                      " + e._s(t.name) + " "),
                                              s("span", { staticClass: "text-grey" }, [
                                                e._v("(" + e._s(t.student_no) + ") "),
                                              ]),
                                              s(
                                                "span",
                                                {
                                                  staticClass: "text-grey",
                                                  staticStyle: { "font-size": "0.8rem" },
                                                },
                                                [e._v(e._s(t.report_status_name))],
                                              ),
                                            ],
                                            1,
                                          ),
                                          s(
                                            "q-item-label",
                                            { attrs: { lines: "1", caption: "" } },
                                            [
                                              s(
                                                "q-badge",
                                                {
                                                  attrs: {
                                                    square: "",
                                                    color: "grey-5",
                                                    "text-color": "white",
                                                    size: "sm",
                                                  },
                                                },
                                                [
                                                  e._v(
                                                    "\n                        " +
                                                      e._s(t.process_type_name) +
                                                      "\n                      ",
                                                  ),
                                                ],
                                              ),
                                              s(
                                                "span",
                                                {
                                                  staticClass: "text-grey",
                                                  staticStyle: { "font-size": "0.8rem" },
                                                },
                                                [
                                                  e._v(
                                                    " " +
                                                      e._s(
                                                        0 == t.into_campus && 0 == t.out_campus
                                                          ? "不需要核验"
                                                          : 1 == t.into_campus && 1 == t.out_campus
                                                            ? "需要入校、离校核验"
                                                            : 1 == t.into_campus
                                                              ? "需要入校核验"
                                                              : "需要离校核验",
                                                      ) +
                                                      " ",
                                                  ),
                                                ],
                                              ),
                                            ],
                                            1,
                                          ),
                                          s("q-item-label", { attrs: { lines: "2" } }, [
                                            e._v(
                                              "\n                      " +
                                                e._s(t.leave_period) +
                                                "\n                    ",
                                            ),
                                          ]),
                                          s(
                                            "q-item-label",
                                            {
                                              staticStyle: { "min-width": "250px" },
                                              attrs: { caption: "", lines: "1" },
                                            },
                                            [
                                              s("span", { staticClass: "neu-css-after-colon " }, [
                                                e._v("提交日期"),
                                              ]),
                                              e._v(
                                                e._s(t.create_time) + "\n                      ",
                                              ),
                                              s("q-separator"),
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
                                1,
                              ),
                              s(
                                "q-card-actions",
                                { attrs: { align: "right" } },
                                [
                                  s("q-btn", {
                                    attrs: { flat: "", label: "取消", color: "grey" },
                                    on: {
                                      click: function (t) {
                                        e.warnDialog = !1;
                                      },
                                    },
                                  }),
                                  s("q-btn", {
                                    attrs: { flat: "", label: "确认", color: "primary" },
                                    on: { click: e.getWarnSure },
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
              s(
                "q-page-sticky",
                { attrs: { position: "bottom-right", offset: e.fabPos } },
                [
                  s(
                    "q-fab",
                    {
                      directives: [
                        {
                          name: "show",
                          rawName: "v-show",
                          value: "reviewing" === e.tab && e.operateDisplay,
                          expression: "tab === 'reviewing' && operateDisplay",
                        },
                        {
                          name: "touch-pan",
                          rawName: "v-touch-pan.prevent.mouse",
                          value: e.moveFab,
                          expression: "moveFab",
                          modifiers: { prevent: !0, mouse: !0 },
                        },
                      ],
                      attrs: {
                        label: "操作",
                        icon: "keyboard_arrow_up",
                        direction: "up",
                        color: "primary",
                        disable: e.draggingFab,
                      },
                      model: {
                        value: e.fab,
                        callback: function (t) {
                          e.fab = t;
                        },
                        expression: "fab",
                      },
                    },
                    [
                      s("q-fab-action", {
                        attrs: { color: "primary", label: "通过", disable: e.draggingFab },
                        on: {
                          click: function (t) {
                            return e.Pass("A");
                          },
                        },
                      }),
                      s("q-fab-action", {
                        attrs: { color: "primary", label: "驳回", disable: e.draggingFab },
                        on: {
                          click: function (t) {
                            return e.Pass("R");
                          },
                        },
                      }),
                      s("q-fab-action", {
                        attrs: { color: "primary", label: "取消", disable: e.draggingFab },
                        on: {
                          click: function (t) {
                            return e.Pass("C");
                          },
                        },
                      }),
                    ],
                    1,
                  ),
                ],
                1,
              ),
              s("neu-export-data", { attrs: { config: e.exportCompConfig } }),
            ],
            1,
          );
        },
        i = [],
        o = (s("13d5"), s("ded3")),
        n = s.n(o),
        r = s("58a84"),
        l = s("d852"),
        c = {
          name: "SanitationIndex",
          components: { NeuExportData: l["a"] },
          data() {
            return {
              roleId: JSON.parse(window.localStorage.getItem("userinfo")).role_id,
              menuType: "",
              menuInfo: null,
              drawerRight: !1,
              teacher_name: "",
              list: [],
              paging: { pageSize: 30, pageNum: 0, pageCount: 0 },
              otherSearch: !1,
              fabPos: [30, 40],
              fab: !0,
              dialog: !1,
              condCount: 0,
              originalCond: {},
              tab: this.$route.query.tab,
              typeName: this.$route.query.typeName,
              queryModel: {
                tab: this.$route.query.tab,
                mutli_search: "",
                status: "",
                begin_time: "",
                end_time: "",
              },
              isLoading: !1,
              operateDisplay: !1,
              selected: [],
              draggingFab: !1,
              reviewStatus: "",
              opinion: "",
              writeOpinion: !1,
              alertDialog: !1,
              resErrorList: [],
              ProcessWarnList: [],
              warnDialog: !1,
              service_flag: "N",
              exportCompConfig: null,
              counsellorlabel: localStorage.getItem("counsellorlabel"),
            };
          },
          destroyed() {
            window.removeEventListener("popstate", this.goBack, !1);
          },
          mounted() {
            (window.localStorage.getItem("menu") &&
              ((this.service_flag = this.$route.query.service_flag),
              "N" === this.service_flag
                ? (this.menuType = "process")
                : (this.menuType = "process_gate"),
              (this.menuInfo = JSON.parse(window.localStorage.getItem("menu")).find(
                (e) => e.id === this.menuType,
              ))),
              window.history &&
                window.history.pushState &&
                (history.pushState(null, null, document.URL),
                window.addEventListener("popstate", this.goBack, !1)),
              this.loadList(() => {}));
          },
          methods: {
            refresh(e) {
              this.loadList(e);
            },
            loadList(e) {
              (e && ((this.paging.pageNum = 0), (this.list = [])),
                (this.paging.pageNum += 1),
                (this.isLoading = !0),
                this.$axiosAction(
                  "/api/teacher/process/process.api",
                  n()(
                    n()(
                      {
                        action: "getTeacherReviewNew",
                        pageSize: this.paging.pageSize,
                        pageNum: this.paging.pageNum,
                      },
                      this.queryModel,
                    ),
                    {},
                    { type_id: this.$route.query.type_id },
                  ),
                )
                  .then((t) => {
                    if (0 === t.data.code) {
                      this.list = this.list.concat(t.data.result.list);
                      const {
                        pageSize: e,
                        pageNum: s,
                        rowCount: a,
                        pageCount: i,
                        startIndex: o,
                        endIndex: r,
                      } = n()({}, t.data.result);
                      this.paging = {
                        pageSize: e,
                        pageNum: s,
                        rowCount: a,
                        pageCount: i,
                        startIndex: o,
                        endIndex: r,
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
            goBack() {
              this.$router.push(
                "/teacher/process/processTypeList?type_id=" +
                  this.$route.query.type_id +
                  "&service_flag=" +
                  this.service_flag,
              );
            },
            goDetail(e, t, s) {
              this.operateDisplay
                ? document.getElementById("processItem" + s).click()
                : this.$router.push(
                    `/teacher/process/detail?process_id=${t}&id=${e}&tab=${this.tab}&type_id=${this.$route.query.type_id}&service_flag=${this.service_flag}`,
                  );
            },
            moveFab(e) {
              ((this.draggingFab = !0 !== e.isFirst && !0 !== e.isFinal),
                (this.fabPos = [this.fabPos[0] - e.delta.x, this.fabPos[1] - e.delta.y]));
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
              if ("" !== this.queryModel.begin_time && "" !== this.queryModel.end_time) {
                const e = this.checkTime();
                if (!e) return this.$showErrorNotify("结束时间应大于开始时间");
              }
              ((this.condCount =
                Object.keys(this.queryModel).reduce((e, t) => (this.queryModel[t] ? e + 1 : e), 0) -
                1),
                this.$refs.pageRefresh.trigger(),
                (this.dialog = !1));
            },
            getValue(e) {
              this.queryModel.status === e
                ? (this.queryModel.status = "")
                : (this.queryModel.status = e);
            },
            handleHold(e) {
              "reviewing" === this.tab &&
                ((this.operateDisplay = !0), document.getElementById("processItem" + e).click());
            },
            Pass(e) {
              "C" === e
                ? ((this.operateDisplay = !1), (this.selected = []), (this.fab = !0))
                : 0 !== this.selected.length
                  ? ((this.reviewStatus = e), (this.writeOpinion = !0))
                  : this.$q.notify({
                      color: "red-5",
                      textColor: "white",
                      icon: "warning",
                      message: "至少选择一项！",
                    });
            },
            Operations() {
              this.ProcessWarnList = [];
              for (let e = 0; e < this.selected.length; e++)
                for (let t = 0; t < this.selected[e].info_config.length; t++) {
                  const s = Object(r["a"])(
                    this.selected[e].info_config[t],
                    this.selected[e].info_result[t],
                  );
                  if (s) {
                    this.ProcessWarnList.push(this.selected[e]);
                    break;
                  }
                }
              this.ProcessWarnList.length > 0 && "A" === this.reviewStatus
                ? (this.warnDialog = !0)
                : this.getWarnSure();
            },
            exportList() {
              this.$axiosAction(
                "/api/teacher/process/process.api",
                n()(
                  n()({ action: "getTeacherReviewExportNewInfoConfigMaxLength" }, this.queryModel),
                  {},
                  { type_id: this.$route.query.type_id, service_flag: this.service_flag },
                ),
              ).then((e) => {
                if (0 === e.data.code) {
                  const t = e.data.maxLength;
                  this.exportCompConfig = [
                    "/api/teacher/process/process.api",
                    "getTeacherReviewExportNew",
                    n()(
                      n()({}, this.queryModel),
                      {},
                      {
                        exportList: "export",
                        type_id: this.$route.query.type_id,
                        service_flag: this.service_flag,
                      },
                    ),
                    {
                      [this.typeName +
                      "-" +
                      ("reviewing" === this.tab
                        ? "待审批流程申请"
                        : "reviewed" === this.tab
                          ? "已审批流程申请"
                          : "流程申请记录")]: "result",
                    },
                    this.typeName +
                      "-" +
                      ("reviewing" === this.tab
                        ? "待审批流程申请"
                        : "reviewed" === this.tab
                          ? "已审批流程申请"
                          : "流程申请记录"),
                    null,
                    (e) =>
                      e.reduce((e, s) => {
                        const a = {
                          流程名称: s.process_type_name,
                          学号: s.student_no,
                          姓名: s.name,
                          性别: "1" === s.sex ? "男" : "女",
                          [this.counsellorlabel]: s.counsellor,
                          手机号: s.mob,
                          年级: s.grade_name,
                          院系: s.dep_name,
                          专业: s.major_name,
                          班级: s.class_name,
                          审批状态: s.review_status_name,
                          申请时间: s.create_time,
                          紧急联系号码: s.contact,
                        };
                        if (
                          ("G" === this.service_flag &&
                            ((a.入校核验 = 0 === s.into_campus ? "关闭" : "开启"),
                            (a.入校申请开始时间 = s.into_campus_apply_begin),
                            (a.入校申请结束时间 = s.into_campus_apply_end),
                            (a.入校核验开始时间 = s.into_campus_begin_time),
                            (a.入校核验结束时间 = s.into_campus_end_time),
                            (a.离校核验 = 0 === s.out_campus ? "关闭" : "开启"),
                            (a.离校申请开始时间 = s.out_campus_apply_begin),
                            (a.离校申请结束时间 = s.out_campus_apply_end),
                            (a.离校核验开始时间 = s.out_campus_begin_time),
                            (a.离校核验结束时间 = s.out_campus_end_time)),
                          t > 0)
                        )
                          for (let i = 1; i <= t; i++) {
                            const e = s.info_config[i - 1];
                            let t = "",
                              o = "";
                            (void 0 === e
                              ? ((t = ""), (o = ""))
                              : ((t = e.label),
                                (o = Object(r["c"])(s.info_config[i - 1], s.info_result[i - 1]))),
                              this.$set(a, "标题" + i.toString(), t),
                              this.$set(a, "内容" + i.toString(), o));
                          }
                        return e.concat(a);
                      }, []),
                    100,
                    3e3,
                  ];
                }
              });
            },
            getWarnSure() {
              const e = [],
                t = {};
              let s = {};
              for (const a in this.selected) {
                s = this.selected[a];
                const i = n()({}, s);
                ((t.id = i.id),
                  (t.reviewStatus = this.reviewStatus),
                  (t.opinion = this.opinion),
                  "A" === this.reviewStatus && i.review_level < i.process_reviewer.length
                    ? (t.level = i.review_level + 1)
                    : (t.level = 0),
                  (t.levelIng = i.review_level),
                  (t.process_id = i.process_id),
                  (t.student_no = i.student_no),
                  (t.process_type_id = i.process_type_id),
                  (t.process_type_name = i.process_type_name),
                  (t.create_time = i.create_time),
                  (t.name = i.name),
                  (t.service_flag = this.service_flag),
                  (t.menu_id = this.menuType),
                  (t.menuTypeName = this.menuInfo.title));
                const o = n()({}, t);
                e.push(o);
              }
              (this.$q.loading.show(),
                this.$axiosAction("/api/teacher/process/process.api", {
                  action: "updateProcessReview",
                  resultViews: e,
                }).then((e) => {
                  0 === e.data.code &&
                    (e.data.result.length > 0
                      ? ((this.resErrorList = e.data.result),
                        (this.alertDialog = !0),
                        (this.opinion = ""),
                        this.$q.loading.hide(),
                        this.$showErrorNotify(
                          "部分审批下一级审批人没有权限或被删除，请联系管理员或刷新",
                        ))
                      : (this.$showSuccessNotify("操作成功"),
                        this.$q.loading.hide(),
                        (this.opinion = ""),
                        this.loadList(() => {})));
                }));
            },
            checkTime() {
              const e = new Date(this.queryModel.begin_time),
                t = new Date(this.queryModel.end_time);
              return t > e;
            },
            resetTime() {
              ((this.queryModel.begin_time = ""), (this.queryModel.end_time = ""));
            },
          },
        },
        p = c,
        d = s("2877"),
        u = s("4d5a"),
        m = s("e359"),
        g = s("65c6"),
        h = s("9c40"),
        _ = s("6ac5"),
        v = s("58a81"),
        b = s("24e8"),
        q = s("f09f"),
        y = s("6b1d"),
        f = s("a370"),
        w = s("eb85"),
        x = s("1c1c"),
        C = s("66e5"),
        k = s("4074"),
        N = s("0170"),
        M = s("8572"),
        S = s("0016"),
        L = s("7cbe"),
        D = s("52ee"),
        $ = s("ca78"),
        I = s("27f9"),
        Q = s("59d7"),
        P = s("09e3"),
        T = s("9989"),
        z = s("8f8e"),
        F = s("8380"),
        Y = s("4b7e"),
        j = s("de5e"),
        O = s("c294"),
        H = s("72db"),
        E = s("7f67"),
        R = s("f449"),
        A = s("714f"),
        B = s("75c3"),
        W = s("eebe"),
        J = s.n(W),
        V = Object(d["a"])(p, a, i, !1, null, null, null);
      t["default"] = V.exports;
      (J()(V, "components", {
        QLayout: u["a"],
        QHeader: m["a"],
        QToolbar: g["a"],
        QBtn: h["a"],
        QToolbarTitle: _["a"],
        QBadge: v["a"],
        QDialog: b["a"],
        QCard: q["a"],
        QLinearProgress: y["a"],
        QCardSection: f["a"],
        QSeparator: w["a"],
        QList: x["a"],
        QItem: C["a"],
        QItemSection: k["a"],
        QItemLabel: N["a"],
        QField: M["a"],
        QIcon: S["a"],
        QPopupProxy: L["a"],
        QDate: D["a"],
        QTime: $["a"],
        QInput: I["a"],
        QPullToRefresh: Q["a"],
        QPageContainer: P["a"],
        QPage: T["a"],
        QCheckbox: z["a"],
        QSpinnerDots: F["a"],
        QCardActions: Y["a"],
        QPageSticky: j["a"],
        QFab: O["a"],
        QFabAction: H["a"],
      }),
        J()(V, "directives", {
          ClosePopup: E["a"],
          TouchHold: R["a"],
          Ripple: A["a"],
          TouchPan: B["a"],
        }));
    },
  },
]);
