(window["webpackJsonp"] = window["webpackJsonp"] || []).push([
  [97],
  {
    "03ca": function (e, t, a) {
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
                      t.menuInfo
                        ? i("q-toolbar-title", [t._v(t._s(t.menuInfo.title) + "详情")])
                        : t._e(),
                      i(
                        "q-btn",
                        {
                          directives: [
                            {
                              name: "show",
                              rawName: "v-show",
                              value: "progress" == t.tab,
                              expression: "tab == 'progress'",
                            },
                          ],
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
                                  i(
                                    "q-item-label",
                                    {
                                      staticStyle: { "font-size": "1.3em" },
                                      attrs: { lines: "1" },
                                    },
                                    [t._v(t._s(t.record.title))],
                                  ),
                                  i("q-item-label", { attrs: { caption: "" } }, [
                                    t._v(
                                      t._s(t.record.notice_priority_name) +
                                        ", " +
                                        t._s(t.record.status_name),
                                    ),
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
                          i(
                            "q-item",
                            [
                              i(
                                "q-item-section",
                                [
                                  i("q-item-label", { attrs: { caption: "" } }, [
                                    i("span", { staticClass: "neu-css-after-colon" }, [
                                      t._v("发起人"),
                                    ]),
                                    t._v(t._s(t.record.teacher_name) + "\n            "),
                                  ]),
                                  i("q-item-label", { attrs: { caption: "" } }, [
                                    i("span", { staticClass: "text-grey neu-css-after-colon" }, [
                                      t._v("阅读率"),
                                    ]),
                                    t._v(
                                      t._s(t.record.feedback_total) +
                                        "/" +
                                        t._s(t.record.total) +
                                        " \n              ",
                                    ),
                                    i(
                                      "span",
                                      {
                                        class:
                                          t.record.feedback_ratio >= 85
                                            ? "text-positive"
                                            : t.record.feedback_ratio >= 60
                                              ? "text-warning"
                                              : "text-red",
                                      },
                                      [t._v(t._s(t.record.feedback_ratio) + "%")],
                                    ),
                                  ]),
                                  i("q-item-label", { attrs: { caption: "" } }, [
                                    i("span", { staticClass: "neu-css-after-colon" }, [
                                      t._v("通知时间"),
                                    ]),
                                    t._v(t._s(t.record.push_time) + "\n            "),
                                  ]),
                                  1 == t.record.confirm_flag
                                    ? i("q-item-label", { attrs: { caption: "" } }, [
                                        i(
                                          "span",
                                          { staticClass: "text-grey neu-css-after-colon" },
                                          [t._v("确认率")],
                                        ),
                                        t._v(
                                          t._s(t.record.confirm_total) +
                                            "/" +
                                            t._s(t.record.total) +
                                            " \n              ",
                                        ),
                                        i(
                                          "span",
                                          {
                                            class:
                                              t.record.confirm_ratio >= 85
                                                ? "text-positive"
                                                : t.record.confirm_ratio >= 60
                                                  ? "text-warning"
                                                  : "text-red",
                                          },
                                          [t._v(t._s(t.record.confirm_ratio) + "%")],
                                        ),
                                      ])
                                    : t._e(),
                                  i("q-item-label", { attrs: { caption: "" } }, [
                                    i("span", { staticClass: "text-grey neu-css-after-colon" }, [
                                      t._v("反馈截止时间"),
                                    ]),
                                    t._v(t._s(t.record.feedback_deadline) + "\n            "),
                                  ]),
                                  null !== t.record.dep_name
                                    ? i("q-item-label", { attrs: { caption: "" } }, [
                                        i(
                                          "span",
                                          { staticClass: "text-grey neu-css-after-colon" },
                                          [t._v("发布单位")],
                                        ),
                                        t._v(t._s(t.record.dep_name) + "\n            "),
                                      ])
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
                    ],
                    1,
                  ),
                  i("q-separator", {
                    staticStyle: { height: "0.1rem" },
                    attrs: { color: "grey-3" },
                  }),
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
                                t._v("预览正文"),
                              ]),
                            ],
                            1,
                          ),
                          0 == t.record.status && t.record.is_author
                            ? i(
                                "q-item",
                                {
                                  directives: [{ name: "ripple", rawName: "v-ripple" }],
                                  attrs: { clickable: "" },
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
                                      on: { click: t.openExtendDialog },
                                    },
                                    [t._v("重新开启")],
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
                                      on: { click: t.terminateNotice },
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
                                      on: { click: t.openExtendDialog },
                                    },
                                    [t._v("延期")],
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
                                },
                                [
                                  i(
                                    "q-item-section",
                                    { attrs: { avatar: "" } },
                                    [
                                      i("q-icon", {
                                        attrs: { name: "reply", size: "sm", color: "negative" },
                                      }),
                                    ],
                                    1,
                                  ),
                                  i(
                                    "q-item-section",
                                    {
                                      staticClass: "text-negative",
                                      staticStyle: { "font-size": "1.1rem" },
                                      on: { click: t.withdrawNotice },
                                    },
                                    [t._v("撤回")],
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
                                      on: { click: t.deleteNotice },
                                    },
                                    [t._v("删除")],
                                  ),
                                ],
                                1,
                              )
                            : t._e(),
                          i(
                            "q-item",
                            {
                              directives: [
                                { name: "ripple", rawName: "v-ripple" },
                                {
                                  name: "show",
                                  rawName: "v-show",
                                  value: "progress" == t.tab,
                                  expression: "tab == 'progress'",
                                },
                              ],
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
                          ),
                          i(
                            "q-item",
                            {
                              directives: [
                                { name: "ripple", rawName: "v-ripple" },
                                {
                                  name: "show",
                                  rawName: "v-show",
                                  value: "statistics" == t.tab,
                                  expression: "tab == 'statistics'",
                                },
                              ],
                              attrs: { clickable: "" },
                            },
                            [
                              i(
                                "q-item-section",
                                { attrs: { avatar: "" } },
                                [i("q-icon", { attrs: { name: "get_app", size: "sm" } })],
                                1,
                              ),
                              i(
                                "q-item-section",
                                {
                                  staticStyle: { "font-size": "1.1rem" },
                                  on: { click: t.exportLists },
                                },
                                [t._v("导出")],
                              ),
                            ],
                            1,
                          ),
                          i(
                            "q-item",
                            {
                              directives: [
                                { name: "ripple", rawName: "v-ripple" },
                                {
                                  name: "show",
                                  rawName: "v-show",
                                  value: "progress" == t.tab && 0 != t.time && t.record.is_author,
                                  expression: "tab == 'progress' && time != 0 && record.is_author",
                                },
                              ],
                              attrs: { clickable: "" },
                            },
                            [
                              i(
                                "q-item-section",
                                { attrs: { avatar: "" } },
                                [
                                  i("q-icon", {
                                    attrs: { name: "notifications", size: "sm", color: "primary" },
                                  }),
                                ],
                                1,
                              ),
                              i(
                                "q-item-section",
                                {
                                  staticClass: "text-primary",
                                  staticStyle: { "font-size": "1.1rem" },
                                  on: { click: t.unnoticeAlert },
                                },
                                [t._v("未阅读提醒(APP推送)")],
                              ),
                            ],
                            1,
                          ),
                          i(
                            "q-item",
                            {
                              directives: [
                                { name: "ripple", rawName: "v-ripple" },
                                {
                                  name: "show",
                                  rawName: "v-show",
                                  value:
                                    "progress" == t.tab &&
                                    0 != t.time &&
                                    t.record.is_author &&
                                    t.allowSmsRemind,
                                  expression:
                                    "tab == 'progress' && time != 0 && record.is_author && allowSmsRemind",
                                },
                              ],
                              attrs: { clickable: "" },
                            },
                            [
                              i(
                                "q-item-section",
                                { attrs: { avatar: "" } },
                                [
                                  i("q-icon", {
                                    attrs: { name: "notifications", size: "sm", color: "primary" },
                                  }),
                                ],
                                1,
                              ),
                              i(
                                "q-item-section",
                                {
                                  staticClass: "text-primary",
                                  staticStyle: { "font-size": "1.1rem" },
                                  on: { click: t.sendSmsRemind },
                                },
                                [t._v("未阅读提醒(短信提醒)")],
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
                "q-page-container",
                [
                  i(
                    "q-page",
                    { staticClass: "bg-grey-3" },
                    [
                      i(
                        "q-card",
                        { attrs: { flat: "" } },
                        [
                          "statistics" == t.tab
                            ? i(
                                "q-item",
                                [
                                  i(
                                    "q-item-section",
                                    [
                                      i("q-item-label", [
                                        i("div", { staticClass: "text-grey" }, [t._v("统计方式")]),
                                      ]),
                                      i(
                                        "q-item-label",
                                        [
                                          i("q-btn-toggle", {
                                            attrs: {
                                              unelevated: "",
                                              size: "sm",
                                              options: [
                                                { label: "按班级统计", value: "1" },
                                                { label: "按专业统计", value: "2" },
                                                { label: "按院系统计", value: "3" },
                                                {
                                                  label: "按" + t.counsellorlabel + "统计",
                                                  value: "4",
                                                },
                                              ],
                                            },
                                            model: {
                                              value: t.model.noticeStatistics,
                                              callback: function (e) {
                                                t.$set(t.model, "noticeStatistics", e);
                                              },
                                              expression: "model.noticeStatistics",
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
                            : t._e(),
                        ],
                        1,
                      ),
                      i(
                        "q-pull-to-refresh",
                        {
                          directives: [
                            {
                              name: "show",
                              rawName: "v-show",
                              value: "progress" == t.tab,
                              expression: "tab == 'progress'",
                            },
                          ],
                          on: { refresh: t.refresh },
                        },
                        [
                          t._l(t.list, function (e) {
                            return i(
                              "q-card",
                              {
                                key: e.id,
                                staticClass: "bg-white q-mb-sm q-mx-sm",
                                style:
                                  "未阅读" == e.feedback_status_name
                                    ? "border-left:0.25rem solid #c10015;"
                                    : "已阅读" == e.feedback_status_name &&
                                        "未确认" == e.confirm_status_name
                                      ? "border-left:0.25rem solid #b5b3b3;"
                                      : "border-left:0.25rem solid #027be3;",
                                attrs: { flat: "" },
                              },
                              [
                                i(
                                  "q-item",
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
                                            t._v("\n              " + t._s(e.student_name) + " "),
                                            i("span", { staticClass: "text-grey" }, [
                                              t._v("(" + t._s(e.student_no) + ")"),
                                            ]),
                                          ],
                                          1,
                                        ),
                                        i("q-item-label", { attrs: { lines: "1", caption: "" } }, [
                                          t._v(
                                            t._s(e.class_name) +
                                              " " +
                                              t._s(e.major_name) +
                                              " " +
                                              t._s(e.dep_name),
                                          ),
                                        ]),
                                        i("q-item-label", { attrs: { lines: "1", caption: "" } }, [
                                          t._v(t._s(t.counsellorlabel) + "：" + t._s(e.counsellor)),
                                        ]),
                                        i(
                                          "q-item-label",
                                          {
                                            directives: [
                                              {
                                                name: "show",
                                                rawName: "v-show",
                                                value: e.feedback_time,
                                                expression: "item.feedback_time",
                                              },
                                            ],
                                            attrs: { caption: "" },
                                          },
                                          [t._v("阅读时间：" + t._s(e.feedback_time))],
                                        ),
                                      ],
                                      1,
                                    ),
                                    i(
                                      "q-item-section",
                                      { attrs: { side: "", top: "" } },
                                      [
                                        i("q-item-label", [
                                          i(
                                            "span",
                                            {
                                              class:
                                                "未阅读" == e.feedback_status_name
                                                  ? "text-red"
                                                  : "已阅读" == e.feedback_status_name
                                                    ? "text-primary"
                                                    : "text-positive",
                                            },
                                            [t._v(t._s(e.feedback_status_name))],
                                          ),
                                        ]),
                                        1 == t.record.confirm_flag
                                          ? i("q-item-label", [
                                              i(
                                                "span",
                                                {
                                                  staticClass: "q-ml-md",
                                                  class:
                                                    "未确认" == e.confirm_status_name
                                                      ? "text-red"
                                                      : "已确认" == e.confirm_status_name
                                                        ? "text-primary"
                                                        : "text-positive",
                                                },
                                                [t._v(t._s(e.confirm_status_name))],
                                              ),
                                            ])
                                          : t._e(),
                                        "已确认" == e.confirm_status_name && null !== e.signature
                                          ? i(
                                              "q-item-label",
                                              {
                                                on: {
                                                  click: function (a) {
                                                    return t.showSignature(e.signature);
                                                  },
                                                },
                                              },
                                              [
                                                i("span", { staticClass: "q-ml-md text-primary" }, [
                                                  t._v("显示签名"),
                                                ]),
                                              ],
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
                            [t._v("\n        加载更多...\n      ")],
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
                            [t._v("\n        没有更多了\n      ")],
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
                            [t._v("\n        暂无数据\n      ")],
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
                      i(
                        "q-dialog",
                        {
                          attrs: { maximized: t.maximizedToggle },
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
                                    attrs: {
                                      icon: "close",
                                      flat: "",
                                      round: "",
                                      dense: "",
                                      size: "sm",
                                    },
                                  }),
                                ],
                                1,
                              ),
                              i("q-separator"),
                              i("q-card-section", [
                                i(
                                  "div",
                                  [
                                    i(
                                      "q-chip",
                                      {
                                        attrs: {
                                          square: "",
                                          "text-color": "white",
                                          icon: (t.menuInfo || {}).icon,
                                          size: "sm",
                                          color: t.record.notice_priority_color,
                                        },
                                      },
                                      [
                                        t._v(
                                          "\n              " +
                                            t._s(t.record.notice_priority_name) +
                                            "\n            ",
                                        ),
                                      ],
                                    ),
                                  ],
                                  1,
                                ),
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
                                    t._v("反馈截止时间"),
                                  ]),
                                  t._v(t._s(t.record.feedback_deadline) + "\n          "),
                                ]),
                                i("div", {
                                  staticClass: "q-mt-sm",
                                  domProps: { innerHTML: t._s(t.record.detail) },
                                }),
                                t.record.attachment && 0 != t.record.attachment.length
                                  ? i(
                                      "div",
                                      {
                                        staticClass: "q-mt-sm",
                                        class:
                                          t.record.attachment && 1 == t.record.attachment.length
                                            ? "row"
                                            : "",
                                      },
                                      [
                                        i(
                                          "span",
                                          { staticClass: "text-grey neu-css-after-colon" },
                                          [t._v("附件")],
                                        ),
                                        t._l(t.record.attachment, function (e) {
                                          return i(
                                            "div",
                                            {
                                              key: e.servername,
                                              staticClass: "cursor-pointer",
                                              on: {
                                                click: function (a) {
                                                  return t.downloadFile(e.link, e.srcname);
                                                },
                                              },
                                            },
                                            [t._v(t._s(e.srcname))],
                                          );
                                        }),
                                      ],
                                      2,
                                    )
                                  : t._e(),
                              ]),
                              i("q-separator"),
                              i("q-card-section", [
                                i("div", [
                                  i("span", { staticClass: "text-grey neu-css-after-colon" }, [
                                    t._v("允许班级干部查看任务数据"),
                                  ]),
                                  t._v(
                                    t._s(1 === t.record.stu_manage_flag ? "是" : "否") +
                                      "\n          ",
                                  ),
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
                                            on: { input: t.changeAllowStuManageFlag },
                                            model: {
                                              value: t.record.stu_manage_flag,
                                              callback: function (e) {
                                                t.$set(t.record, "stu_manage_flag", e);
                                              },
                                              expression: "record.stu_manage_flag",
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
                                      t._v("通知对象"),
                                    ]),
                                  ]),
                                  i("neu-view-assigned-student", {
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
                                    i(
                                      "div",
                                      { staticStyle: { float: "right" } },
                                      [
                                        i(
                                          "span",
                                          {
                                            directives: [
                                              {
                                                name: "show",
                                                rawName: "v-show",
                                                value: t.record.is_author,
                                                expression: "record.is_author",
                                              },
                                            ],
                                            staticClass: "text-grey",
                                            on: { click: t.openShareDialog },
                                          },
                                          [t._v("选择")],
                                        ),
                                        i("q-icon", {
                                          directives: [
                                            {
                                              name: "show",
                                              rawName: "v-show",
                                              value: t.record.is_author,
                                              expression: "record.is_author",
                                            },
                                          ],
                                          staticClass: "text-grey",
                                          attrs: { name: "keyboard_arrow_right", size: "sm" },
                                        }),
                                      ],
                                      1,
                                    ),
                                  ]),
                                  i("neu-view-assigned-teacher", {
                                    attrs: { value: t.record.share_target },
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
                          attrs: { persistent: "", fullWidth: "", maximized: t.maximizedToggle },
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
                                {
                                  staticClass: "row items-center justify-between",
                                  attrs: { dense: "" },
                                },
                                [
                                  i("q-btn", {
                                    attrs: {
                                      outline: "",
                                      label: "取消",
                                      color: "grey",
                                      size: "md",
                                    },
                                    on: {
                                      click: function (e) {
                                        return t.close();
                                      },
                                    },
                                  }),
                                  i("q-btn", {
                                    attrs: {
                                      unelevated: "",
                                      label: "确定",
                                      color: "primary",
                                      size: "md",
                                    },
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
                                  i(
                                    "q-item",
                                    { attrs: { clickable: "" } },
                                    [
                                      i("q-item-section", { attrs: { avatar: "", top: "" } }, [
                                        i("span", [t._v("阅读状态")]),
                                      ]),
                                      i("q-item-section", [
                                        i(
                                          "div",
                                          { staticClass: "row justify-evenly" },
                                          t._l(
                                            [
                                              { label: "未阅读", value: "1" },
                                              { label: "已阅读", value: "2" },
                                            ],
                                            function (e) {
                                              return i(
                                                "q-btn",
                                                {
                                                  key: e.value,
                                                  attrs: {
                                                    outline: "",
                                                    color:
                                                      e.value == t.queryModel.feedback_status
                                                        ? "primary"
                                                        : "grey",
                                                  },
                                                  on: {
                                                    click: function (a) {
                                                      return t.getFeedValue(e.value);
                                                    },
                                                  },
                                                },
                                                [
                                                  t._v(
                                                    "\n                    " +
                                                      t._s(e.label) +
                                                      "\n                    ",
                                                  ),
                                                  i(
                                                    "q-badge",
                                                    {
                                                      directives: [
                                                        {
                                                          name: "show",
                                                          rawName: "v-show",
                                                          value:
                                                            t.queryModel.feedback_status == e.value,
                                                          expression:
                                                            "queryModel.feedback_status == item.value",
                                                        },
                                                      ],
                                                      attrs: { color: "orange", floating: "" },
                                                    },
                                                    [t._v("√")],
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
                                  ),
                                  i("q-separator"),
                                  i(
                                    "q-item",
                                    {
                                      directives: [
                                        {
                                          name: "show",
                                          rawName: "v-show",
                                          value: 1 == t.record.confirm_flag,
                                          expression: "record.confirm_flag == 1",
                                        },
                                      ],
                                      attrs: { clickable: "" },
                                    },
                                    [
                                      i("q-item-section", { attrs: { avatar: "", top: "" } }, [
                                        i("span", [t._v("确认状态")]),
                                      ]),
                                      i("q-item-section", [
                                        i(
                                          "div",
                                          { staticClass: "row justify-evenly" },
                                          t._l(
                                            [
                                              { label: "未确认", value: "1" },
                                              { label: "已确认", value: "2" },
                                            ],
                                            function (e) {
                                              return i(
                                                "q-btn",
                                                {
                                                  key: e.value,
                                                  attrs: {
                                                    outline: "",
                                                    color:
                                                      e.value == t.queryModel.confirm_status
                                                        ? "primary"
                                                        : "grey",
                                                  },
                                                  on: {
                                                    click: function (a) {
                                                      return t.getConValue(e.value);
                                                    },
                                                  },
                                                },
                                                [
                                                  t._v(
                                                    "\n                    " +
                                                      t._s(e.label) +
                                                      "\n                    ",
                                                  ),
                                                  i(
                                                    "q-badge",
                                                    {
                                                      directives: [
                                                        {
                                                          name: "show",
                                                          rawName: "v-show",
                                                          value:
                                                            t.queryModel.confirm_status == e.value,
                                                          expression:
                                                            "queryModel.confirm_status == item.value",
                                                        },
                                                      ],
                                                      attrs: { color: "orange", floating: "" },
                                                    },
                                                    [t._v("√")],
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
                                  ),
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
                                            { staticClass: "q-mt-xs", attrs: { caption: "" } },
                                            [
                                              t._v(
                                                "可以查询学号、姓名、性别、手机号、年级、院系、专业、班级信息",
                                              ),
                                            ],
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
                                { on: { submit: t.extendNotice } },
                                [
                                  i("q-card-section", { staticClass: "text-h6" }, [
                                    t._v(
                                      "\n            " +
                                        t._s(1 == t.record.status ? "确认延期" : "确认重新开启") +
                                        "\n          ",
                                    ),
                                  ]),
                                  i("q-card-section", [
                                    i(
                                      "div",
                                      {
                                        directives: [
                                          {
                                            name: "show",
                                            rawName: "v-show",
                                            value: 0 == t.record.status,
                                            expression: "record.status == 0",
                                          },
                                        ],
                                      },
                                      [
                                        t._v("重新开启后，"),
                                        i("span", { staticClass: "text-red" }, [
                                          t._v("未阅读学生"),
                                        ]),
                                        t._v("将再次收到提醒。"),
                                      ],
                                    ),
                                    i(
                                      "div",
                                      { staticClass: "row items-center" },
                                      [
                                        t._v(
                                          "\n              " +
                                            t._s(1 == t.record.status ? "延期" : "重新开启") +
                                            "反馈截止时间至：\n              ",
                                        ),
                                        i("q-field", {
                                          staticStyle: { width: "200px" },
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
                                                  t > e.record.feedback_deadline ||
                                                  "请填写原截止时间之后的时间"
                                                );
                                              },
                                            ],
                                            value: t.feedbackDeadline,
                                          },
                                          scopedSlots: t._u([
                                            {
                                              key: "control",
                                              fn: function () {
                                                return [t._v(t._s(t.feedbackDeadline))];
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
                                                                    value: t.feedbackDeadline,
                                                                    callback: function (e) {
                                                                      t.feedbackDeadline = e;
                                                                    },
                                                                    expression: "feedbackDeadline",
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
                                                            { staticClass: "row items-start" },
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
                                                                    value: t.feedbackDeadline,
                                                                    callback: function (e) {
                                                                      t.feedbackDeadline = e;
                                                                    },
                                                                    expression: "feedbackDeadline",
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
                                        directives: [
                                          { name: "close-popup", rawName: "v-close-popup" },
                                        ],
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
                          attrs: { persistent: "" },
                          model: {
                            value: t.signatureStatus,
                            callback: function (e) {
                              t.signatureStatus = e;
                            },
                            expression: "signatureStatus",
                          },
                        },
                        [
                          i(
                            "q-card",
                            { staticClass: "full-width", attrs: { flat: "" } },
                            [
                              i("q-card-section", { staticClass: "text-h6" }, [
                                t._v("\n            签名详情\n          "),
                              ]),
                              i("q-card-section", [
                                i(
                                  "div",
                                  { staticClass: "row items-center" },
                                  [i("q-img", { attrs: { src: t.stu_signature } })],
                                  1,
                                ),
                              ]),
                              i(
                                "q-card-section",
                                { staticClass: "row q-gutter-sm justify-end" },
                                [
                                  i("q-btn", {
                                    directives: [{ name: "close-popup", rawName: "v-close-popup" }],
                                    attrs: { unelevated: "", color: "primary", label: "确定" },
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
                      i("neu-manage-qa", {
                        directives: [
                          {
                            name: "show",
                            rawName: "v-show",
                            value: "qa" == t.tab,
                            expression: "tab == 'qa'",
                          },
                        ],
                        staticClass: "bg-grey-3",
                        attrs: {
                          taskMenuId: "notice",
                          taskId: t.record.id + "",
                          readonly: !t.record.is_author,
                          align: "justify",
                        },
                      }),
                      i("neu-notice-statistics", {
                        directives: [
                          {
                            name: "show",
                            rawName: "v-show",
                            value: "statistics" == t.tab,
                            expression: "tab == 'statistics'",
                          },
                        ],
                        attrs: {
                          id: t.id,
                          title: t.record.title,
                          task_target: t.record.task_target,
                          noticeStatistics: t.model.noticeStatistics,
                          confirm_flag: t.record.confirm_flag,
                        },
                      }),
                    ],
                    1,
                  ),
                ],
                1,
              ),
              i(
                "q-footer",
                { staticClass: "bg-white text-primary", attrs: { bordered: "" } },
                [
                  i(
                    "q-tabs",
                    {
                      staticClass: "text-black",
                      attrs: {
                        "no-caps": "",
                        "active-color": "primary",
                        "indicator-color": "transparent",
                        align: "justify",
                      },
                      model: {
                        value: t.tab,
                        callback: function (e) {
                          t.tab = e;
                        },
                        expression: "tab",
                      },
                    },
                    [
                      i("q-tab", { attrs: { name: "progress", label: "通知进度" } }),
                      i("q-separator", { attrs: { vertical: "" } }),
                      i("q-tab", { attrs: { name: "statistics", label: "通知统计" } }),
                      i("q-separator", { attrs: { vertical: "" } }),
                      i("q-tab", { attrs: { name: "qa", label: "学生提问" } }),
                    ],
                    1,
                  ),
                ],
                1,
              ),
              i("neu-export-data", { attrs: { config: t.exportCompConfig } }),
            ],
            1,
          );
        },
        s = [],
        o = (a("13d5"), a("ded3")),
        r = a.n(o),
        n = a("156a"),
        c = a("9a3d"),
        l = a("5333"),
        d = a("4aac"),
        m = a("ad56"),
        u = a("92db"),
        p = a("d852"),
        h = {
          components: {
            NeuManageQa: n["a"],
            NeuAssignTeacher: c["a"],
            NeuViewAssignedTeacher: l["a"],
            NeuViewAssignedStudent: d["a"],
            NeuNoticeStatistics: u["a"],
            NeuExportData: p["a"],
          },
          name: "SigninIndex",
          data() {
            return {
              id: this.$route.query.id,
              menuInfo: null,
              tab: "progress",
              record: {},
              detailDialog: !1,
              extendDialog: !1,
              feedbackDeadline: null,
              shareDialog: !1,
              shareTarget: [],
              condition: [],
              drawerRight: !1,
              draggingFab: !1,
              noticeId: this.$route.query.id,
              noticeConfirmFlag: 0,
              queryModel: { feedback_status: "", confirm_status: "", mutli_search: "" },
              pagination: { rowsPerPage: 0 },
              list: [],
              paging: { pageSize: 30, pageNum: 0, pageCount: 0 },
              isLoading: !1,
              condCount: 0,
              originalCond: {},
              dialog: !1,
              maximizedToggle: !0,
              time: "",
              model: { noticeStatistics: "1" },
              roleId: JSON.parse(window.localStorage.getItem("userinfo")).role_id,
              allowSmsRemind: !1,
              signatureStatus: !1,
              stu_signature: "",
              exportCompConfig: null,
              counsellorlabel: localStorage.getItem("counsellorlabel"),
              cId: this.$route.query.compositeId,
            };
          },
          destroyed() {
            window.removeEventListener("popstate", this.goBack, !1);
          },
          mounted() {
            (window.localStorage.getItem("menu") &&
              (this.menuInfo = JSON.parse(window.localStorage.getItem("menu")).find(
                (e) => "notice" === e.id,
              )),
              this.$axiosAction("/api/teacher/notice/notice.api", {
                action: "queryNotice",
                id: this.noticeId,
              })
                .then((e) => {
                  (0 === e.data.code &&
                    ((this.record = e.data.result),
                    (this.noticeConfirmFlag = this.record.confirm_flag)),
                    (this.record && this.record.id) ||
                      (this.$showErrorNotify("该条信息不存在或您权限不足！"),
                      this.$router.push("/teacher/notice/index")));
                })
                .catch((e) => {
                  this.record = {};
                }),
              (this.allowSmsRemind = "true" === localStorage.getItem("remind")),
              window.history &&
                window.history.pushState &&
                (history.pushState(null, null, document.URL),
                window.addEventListener("popstate", this.goBack, !1)),
              this.loadList(() => {}));
          },
          methods: {
            goBack() {
              null !== this.cId && void 0 !== this.cId
                ? this.$router.push("/teacher/composite/detail?id=" + this.$route.query.compositeId)
                : this.$router.push("/teacher/notice/index");
            },
            loadList(e) {
              this.noticeId
                ? (e && ((this.paging.pageNum = 0), (this.list = [])),
                  (this.paging.pageNum += 1),
                  (this.isLoading = !0),
                  this.$axiosAction(
                    "/api/teacher/notice/notice.api",
                    r()(
                      r()(
                        { action: "queryFeedbackList", notice_id: this.noticeId },
                        this.queryModel,
                      ),
                      {},
                      { pageSize: this.paging.pageSize, pageNum: this.paging.pageNum },
                    ),
                  )
                    .then((t) => {
                      if (0 === t.data.code) {
                        ((this.time = t.data.time),
                          (this.list = this.list.concat(t.data.result.list)));
                        const {
                          pageSize: e,
                          pageNum: a,
                          rowCount: i,
                          pageCount: s,
                          startIndex: o,
                          endIndex: n,
                        } = r()({}, t.data.result);
                        this.paging = {
                          pageSize: e,
                          pageNum: a,
                          rowCount: i,
                          pageCount: s,
                          startIndex: o,
                          endIndex: n,
                        };
                      } else this.setDefaultList();
                      (e && e(), (this.isLoading = !1));
                    })
                    .catch((t) => {
                      (this.setDefaultList(), e && e(), (this.isLoading = !1));
                    }))
                : e && e();
            },
            setDefaultList() {
              ((this.list = []), (this.paging = { pageSize: 30, pageNum: 0, pageCount: 0 }));
            },
            exportList() {
              this.noticeId &&
                (this.exportCompConfig = [
                  "/api/teacher/notice/notice.api",
                  "exportFeedbackList",
                  r()({ notice_id: this.noticeId }, this.queryModel),
                  { [this.record.title]: "result" },
                  this.record.title,
                  null,
                  null,
                  1e3,
                  5e3,
                ]);
            },
            refresh(e) {
              this.loadList(e);
            },
            deleteNotice() {
              this.$q
                .dialog({
                  title: "确认删除",
                  message: '该通知及其产生的<span class="text-red">数据将被清空。</span>',
                  html: !0,
                  persistent: !0,
                  cancel: { label: "取消", outline: !0, color: "grey" },
                  ok: { label: "删除", unelevated: !0, color: "negative" },
                })
                .onOk(() => {
                  (this.$q.loading.show(),
                    this.$axiosAction("/api/teacher/notice/notice.api", {
                      action: "deleteNotice",
                      id: this.noticeId,
                    })
                      .then((e) => {
                        (0 === e.data.code && this.$router.push("/teacher/notice/index"),
                          this.$q.loading.hide());
                      })
                      .catch((e) => {
                        this.$q.loading.hide();
                      }));
                });
            },
            terminateNotice() {
              this.$q
                .dialog({
                  title: "确认提前结束",
                  message: "提前结束后将不再统计后续学生的阅读率。",
                  html: !0,
                  persistent: !0,
                  cancel: { label: "取消", outline: !0, color: "grey" },
                  ok: { label: "提前结束", unelevated: !0, color: "primary" },
                })
                .onOk(() => {
                  (this.$q.loading.show(),
                    this.$axiosAction("/api/teacher/notice/notice.api", {
                      action: "terminateNotice",
                      id: this.noticeId,
                    })
                      .then((e) => {
                        (0 === e.data.code && this.$router.push("/teacher/notice/index"),
                          this.$q.loading.hide());
                      })
                      .catch((e) => {
                        this.$q.loading.hide();
                      }));
                });
            },
            openExtendDialog() {
              ((this.extendDialog = !0), (this.feedbackDeadline = this.record.feedback_deadline));
            },
            extendNotice() {
              (this.$q.loading.show(),
                this.$axiosAction("/api/teacher/notice/notice.api", {
                  action: 1 === this.record.status ? "extendNotice" : "restartNotice",
                  id: this.noticeId,
                  feedback_deadline: this.feedbackDeadline,
                })
                  .then((e) => {
                    (0 === e.data.code &&
                      (1 === this.record.status
                        ? ((this.record.feedback_deadline = this.feedbackDeadline),
                          (this.extendDialog = !1))
                        : this.$router.push("/teacher/notice/index")),
                      this.$q.loading.hide());
                  })
                  .catch((e) => {
                    this.$q.loading.hide();
                  }));
            },
            withdrawNotice() {
              this.$q
                .dialog({
                  title: "确认撤回",
                  message:
                    '您可再次编辑并发布该通知。<br>原通知及其产生的<span class="text-red">数据将被清空。</span>',
                  html: !0,
                  persistent: !0,
                  cancel: { label: "取消", outline: !0, color: "grey" },
                  ok: { label: "撤回", unelevated: !0, color: "negative" },
                })
                .onOk(() => {
                  this.$axiosAction("/api/teacher/notice/notice.api", {
                    action: "queryNoticeForEditing",
                    id: this.noticeId,
                  })
                    .then((e) => {
                      0 === e.data.code &&
                        this.$axiosAction("/api/teacher/notice/notice.api", {
                          action: "deleteNotice",
                          id: this.noticeId,
                        }).then((t) => {
                          0 === t.data.code &&
                            this.$router.push({
                              name: "/teacher/notice/new",
                              params: { record: e.data.result },
                            });
                        });
                    })
                    .catch((e) => {});
                });
            },
            openShareDialog() {
              (null !== this.cId && void 0 !== this.cId) || null !== this.record.composite_id
                ? this.$q
                    .dialog({
                      title: "修改组合共享",
                      message: `该${this.menuInfo.title}为组合任务<span class="text-red">点击确定进入组合详情修改。</span>`,
                      html: !0,
                      persistent: !0,
                      cancel: { label: "取消", outline: !0, color: "grey" },
                      ok: { label: "确定", unelevated: !0, color: "primary" },
                    })
                    .onOk(() => {
                      (null !== this.record.composite_id && (this.cId = this.record.composite_id),
                        this.$router.push("/teacher/composite/detail?id=" + this.cId));
                    })
                : ((this.shareDialog = !0), (this.shareTarget = this.record.share_target));
            },
            updateShareTarget() {
              (this.$q.loading.show(),
                this.$axiosAction("/api/teacher/notice/notice.api", {
                  action: "updateShareTarget",
                  id: this.noticeId,
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
            getFeedValue(e) {
              this.queryModel.feedback_status === e
                ? (this.queryModel.feedback_status = "")
                : (this.queryModel.feedback_status = e);
            },
            getConValue(e) {
              this.queryModel.confirm_status === e
                ? (this.queryModel.confirm_status = "")
                : (this.queryModel.confirm_status = e);
            },
            getCondition() {
              ((this.condCount = Object.keys(this.queryModel).reduce(
                (e, t) => (this.queryModel[t] ? e + 1 : e),
                0,
              )),
                this.loadList(() => {}),
                (this.dialog = !1));
            },
            downloadFile(e, t) {
              Object(m["c"])(e, t);
            },
            unnoticeAlert() {
              this.$axiosAction("/api/teacher/notice/notice.api", {
                action: "insertAgain",
                id: this.noticeId,
              }).then((e) => {});
            },
            sendSmsRemind() {
              (this.$q.loading.show(),
                this.$axiosAction("/api/teacher/notice/notice.api", {
                  action: "sendSmsRemind",
                  id: this.noticeId,
                  title: this.record.title,
                  menu_id: this.menuInfo.id,
                  menu_name: this.menuInfo.title,
                }).then((e) => {
                  this.$q.loading.hide();
                }));
            },
            exportLists() {
              this.exportCompConfig = [
                "/api/teacher/notice/notice.api",
                "getNoticeNumList",
                { notice_id: this.id, noticeStatistics: this.model.noticeStatistics },
                { [`${this.record.title}的统计`]: "feedbackResult" },
                `${this.record.title}的统计`,
                null,
                (e) => ({
                  [`${this.record.title}的统计`]: e[`${this.record.title}的统计`].reduce(
                    (e, t) =>
                      "1" === this.model.noticeStatistics && 1 === this.record.confirm_flag
                        ? e.concat({
                            班级名称: t.class_name,
                            应阅读人数: t.feedback_total,
                            已阅读人数: t.feedback_count,
                            未阅读人数: t.no_feedback_total,
                            应确认人数: t.confirm_total,
                            已确认人数: t.confirm_count,
                            未确认人数: t.no_confirm_total,
                          })
                        : "1" === this.model.noticeStatistics && 0 === this.record.confirm_flag
                          ? e.concat({
                              班级名称: t.class_name,
                              应阅读人数: t.feedback_total,
                              已阅读人数: t.feedback_count,
                              未阅读人数: t.no_feedback_total,
                            })
                          : "2" === this.model.noticeStatistics && 1 === this.record.confirm_flag
                            ? e.concat({
                                专业名称: t.major_name,
                                应阅读人数: t.feedback_total,
                                已阅读人数: t.feedback_count,
                                未阅读人数: t.no_feedback_total,
                                应确认人数: t.confirm_total,
                                已确认人数: t.confirm_count,
                                未确认人数: t.no_confirm_total,
                              })
                            : "2" === this.model.noticeStatistics && 0 === this.record.confirm_flag
                              ? e.concat({
                                  专业名称: t.major_name,
                                  应阅读人数: t.feedback_total,
                                  已阅读人数: t.feedback_count,
                                  未阅读人数: t.no_feedback_total,
                                })
                              : "3" === this.model.noticeStatistics &&
                                  1 === this.record.confirm_flag
                                ? e.concat({
                                    院系名称: t.dep_name,
                                    应阅读人数: t.feedback_total,
                                    已阅读人数: t.feedback_count,
                                    未阅读人数: t.no_feedback_total,
                                    应确认人数: t.confirm_total,
                                    已确认人数: t.confirm_count,
                                    未确认人数: t.no_confirm_total,
                                  })
                                : "3" === this.model.noticeStatistics &&
                                    0 === this.record.confirm_flag
                                  ? e.concat({
                                      院系名称: t.dep_name,
                                      应阅读人数: t.feedback_total,
                                      已阅读人数: t.feedback_count,
                                      未阅读人数: t.no_feedback_total,
                                    })
                                  : "4" === this.model.noticeStatistics &&
                                      0 === this.record.confirm_flag
                                    ? e.concat({
                                        [this.counsellorlabel + "姓名"]:
                                          t.name + "(" + t.tea_no + ")",
                                        应阅读人数: t.feedback_total,
                                        已阅读人数: t.feedback_count,
                                        未阅读人数: t.no_feedback_total,
                                      })
                                    : "4" === this.model.noticeStatistics &&
                                        1 === this.record.confirm_flag
                                      ? e.concat({
                                          [this.counsellorlabel + "姓名"]:
                                            t.name + "(" + t.tea_no + ")",
                                          应阅读人数: t.feedback_total,
                                          已阅读人数: t.feedback_count,
                                          未阅读人数: t.no_feedback_total,
                                          应确认人数: t.confirm_total,
                                          已确认人数: t.confirm_count,
                                          未确认人数: t.no_confirm_total,
                                        })
                                      : e.concat(t),
                    [],
                  ),
                }),
                null,
                null,
              ];
            },
            showSignature(e) {
              ((this.stu_signature = e), (this.signatureStatus = !0));
            },
            changeAllowStuManageFlag() {
              this.$axiosAction("/api/teacher/notice/notice.api", {
                action: "updateStuManageFlag",
                id: this.noticeId,
                stu_manage_flag: this.record.stu_manage_flag,
              })
                .then((e) => {
                  0 === e.data.code || this.$router.push("/teacher/notice/index");
                })
                .catch((e) => {
                  this.record = {};
                });
            },
          },
        },
        g = h,
        _ = a("2877"),
        v = a("4d5a"),
        f = a("e359"),
        b = a("65c6"),
        q = a("9c40"),
        w = a("6ac5"),
        x = a("58a81"),
        k = a("3b73"),
        y = a("4074"),
        C = a("0170"),
        S = a("f09f"),
        N = a("a370"),
        I = a("66e5"),
        $ = a("eb85"),
        D = a("9404"),
        z = a("4983"),
        Q = a("1c1c"),
        L = a("0016"),
        M = a("09e3"),
        T = a("9989"),
        A = a("6a67"),
        j = a("59d7"),
        F = a("8380"),
        R = a("24e8"),
        O = a("b047"),
        P = a("9564"),
        E = a("6b1d"),
        Y = a("27f9"),
        B = a("0378"),
        H = a("8572"),
        V = a("7cbe"),
        J = a("52ee"),
        U = a("ca78"),
        W = a("068f"),
        G = a("7ff0"),
        K = a("429b"),
        X = a("7460"),
        Z = a("714f"),
        ee = a("7f67"),
        te = a("eebe"),
        ae = a.n(te),
        ie = Object(_["a"])(g, i, s, !1, null, null, null);
      t["default"] = ie.exports;
      (ae()(ie, "components", {
        QLayout: v["a"],
        QHeader: f["a"],
        QToolbar: b["a"],
        QBtn: q["a"],
        QToolbarTitle: w["a"],
        QBadge: x["a"],
        QExpansionItem: k["a"],
        QItemSection: y["a"],
        QItemLabel: C["a"],
        QCard: S["a"],
        QCardSection: N["a"],
        QItem: I["a"],
        QSeparator: $["a"],
        QDrawer: D["a"],
        QScrollArea: z["a"],
        QList: Q["a"],
        QIcon: L["a"],
        QPageContainer: M["a"],
        QPage: T["a"],
        QBtnToggle: A["a"],
        QPullToRefresh: j["a"],
        QSpinnerDots: F["a"],
        QDialog: R["a"],
        QChip: O["a"],
        QToggle: P["a"],
        QLinearProgress: E["a"],
        QInput: Y["a"],
        QForm: B["a"],
        QField: H["a"],
        QPopupProxy: V["a"],
        QDate: J["a"],
        QTime: U["a"],
        QImg: W["a"],
        QFooter: G["a"],
        QTabs: K["a"],
        QTab: X["a"],
      }),
        ae()(ie, "directives", { Ripple: Z["a"], ClosePopup: ee["a"] }));
    },
  },
]);
