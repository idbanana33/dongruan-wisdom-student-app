(window["webpackJsonp"] = window["webpackJsonp"] || []).push([
  [69],
  {
    ebc5: function (t, e, a) {
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
                      a("q-toolbar-title", [t._v("组合任务详情")]),
                      a(
                        "q-btn",
                        {
                          attrs: { flat: "", round: "", dense: "", icon: "search" },
                          on: { click: t.open },
                        },
                        [
                          a(
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
                  a(
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
                              a(
                                "q-item-section",
                                [
                                  a("q-item-label", { staticStyle: { "font-size": "1.3em" } }, [
                                    t._v(t._s(t.record.title)),
                                  ]),
                                ],
                                1,
                              ),
                              a(
                                "q-item-section",
                                { attrs: { side: "" } },
                                [
                                  a("q-btn", {
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
                      a(
                        "q-card",
                        [
                          a("q-card-section", [
                            a("div", { staticClass: "row" }, [
                              a("div", [
                                a("span", { staticClass: "text-grey neu-css-after-colon" }, [
                                  t._v("发起人"),
                                ]),
                                t._v(t._s(t.record.name) + "\n            "),
                              ]),
                              a("div", { staticClass: "q-ml-xl" }, [
                                a("span", { staticClass: "text-grey" }, [t._v(" ")]),
                              ]),
                              a("div", [
                                a("span", { staticClass: "text-grey neu-css-after-colon" }, [
                                  t._v("创建时间"),
                                ]),
                                t._v(t._s(t.record.create_time) + "\n            "),
                              ]),
                            ]),
                          ]),
                        ],
                        1,
                      ),
                    ],
                    1,
                  ),
                  a("q-separator"),
                ],
                1,
              ),
              a(
                "q-pull-to-refresh",
                { ref: "pageRefresh", on: { refresh: t.refresh } },
                [
                  a(
                    "q-page-container",
                    [
                      a(
                        "q-page",
                        { staticClass: "bg-grey-3 q-py-sm" },
                        [
                          t._l(t.list, function (e) {
                            return a(
                              "q-card",
                              {
                                key: e.id,
                                staticClass: "bg-white q-mb-sm q-mx-sm",
                                style: "border-left:0.25rem solid #" + t.menuColor,
                                attrs: { flat: "" },
                              },
                              [
                                a(
                                  "q-item",
                                  [
                                    a(
                                      "q-item-section",
                                      [
                                        a("q-item-label", { attrs: { lines: "1", caption: "" } }, [
                                          t._v(" " + t._s(e.dep_name) + " "),
                                        ]),
                                        a(
                                          "q-item-label",
                                          { staticClass: "q-mb-xs", attrs: { caption: "" } },
                                          [
                                            a("span", { staticClass: "neu-css-after-colon " }, [
                                              t._v("任务名称"),
                                            ]),
                                            t._v(t._s(e.title) + "\n                  "),
                                          ],
                                        ),
                                        a(
                                          "q-item-label",
                                          { staticClass: "q-mb-xs", attrs: { caption: "" } },
                                          [
                                            a("span", { staticClass: "neu-css-after-colon " }, [
                                              t._v("类型"),
                                            ]),
                                            t._v(t._s(e.typetitle) + "\n                  "),
                                          ],
                                        ),
                                        a(
                                          "q-item-label",
                                          { staticClass: "q-mb-xs", attrs: { caption: "" } },
                                          [
                                            a("span", { staticClass: "neu-css-after-colon " }, [
                                              t._v("创建时间"),
                                            ]),
                                            t._v(t._s(e.create_time) + "\n                  "),
                                          ],
                                        ),
                                      ],
                                      1,
                                    ),
                                    a(
                                      "q-item-section",
                                      { attrs: { side: "" } },
                                      [
                                        a("q-item-label", [
                                          a(
                                            "span",
                                            {
                                              staticClass: "text-primary",
                                              on: {
                                                click: function (a) {
                                                  return t.openEditDialog(
                                                    e.id,
                                                    e.allow_edit,
                                                    e.typename,
                                                  );
                                                },
                                              },
                                            },
                                            [
                                              t._v("查看"),
                                              a("q-icon", {
                                                attrs: { name: "keyboard_arrow_right", size: "sm" },
                                              }),
                                            ],
                                            1,
                                          ),
                                        ]),
                                        t.record.teacher_no == t.userInfo.login_name
                                          ? a("q-item-label", [
                                              a(
                                                "span",
                                                {
                                                  staticClass: "text-primary",
                                                  on: {
                                                    click: function (a) {
                                                      return t.newTaskOpenDialog(
                                                        e.id,
                                                        e.typename,
                                                        e.frequency,
                                                      );
                                                    },
                                                  },
                                                },
                                                [
                                                  t._v("发布新任务"),
                                                  a("q-icon", {
                                                    attrs: {
                                                      name: "keyboard_arrow_right",
                                                      size: "sm",
                                                    },
                                                  }),
                                                ],
                                                1,
                                              ),
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
                            );
                          }),
                          a(
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
                            [t._v("\n              加载更多...\n            ")],
                          ),
                          a(
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
                            [t._v("\n              没有更多了\n            ")],
                          ),
                          a(
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
                            [t._v("\n              暂无任务\n            ")],
                          ),
                          a(
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
                            [a("q-spinner-dots", { attrs: { color: "primary", size: "md" } })],
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
              a(
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
                  a(
                    "q-scroll-area",
                    { staticClass: "fit" },
                    [
                      a(
                        "q-list",
                        {
                          staticStyle: { "border-left": "0.15rem solid #027be3" },
                          attrs: { separator: "" },
                        },
                        [
                          a(
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
                              a(
                                "q-item-section",
                                { attrs: { avatar: "" } },
                                [a("q-icon", { attrs: { name: "remove_red_eye", size: "sm" } })],
                                1,
                              ),
                              a("q-item-section", { staticStyle: { "font-size": "1.1rem" } }, [
                                t._v("预览任务"),
                              ]),
                            ],
                            1,
                          ),
                          t.cCreate
                            ? a(
                                "q-item",
                                {
                                  directives: [{ name: "ripple", rawName: "v-ripple" }],
                                  attrs: { clickable: "" },
                                  on: { click: t.deleteComposite },
                                },
                                [
                                  a(
                                    "q-item-section",
                                    { attrs: { avatar: "" } },
                                    [
                                      a("q-icon", {
                                        attrs: { name: "delete", size: "sm", color: "red" },
                                      }),
                                    ],
                                    1,
                                  ),
                                  a(
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
                          t.cCreate
                            ? a(
                                "q-item",
                                {
                                  directives: [{ name: "ripple", rawName: "v-ripple" }],
                                  attrs: { clickable: "" },
                                  on: { click: t.exportList },
                                },
                                [
                                  a(
                                    "q-item-section",
                                    { attrs: { avatar: "" } },
                                    [a("q-icon", { attrs: { name: "get_app", size: "sm" } })],
                                    1,
                                  ),
                                  a("q-item-section", { staticStyle: { "font-size": "1.1rem" } }, [
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
              a(
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
                  a(
                    "q-card",
                    { staticStyle: { width: "350px" } },
                    [
                      a("q-linear-progress", { attrs: { value: 1, color: "primary" } }),
                      a(
                        "q-card-section",
                        { staticClass: "row items-center justify-between", attrs: { dense: "" } },
                        [
                          a("q-btn", {
                            attrs: { outline: "", label: "取消", color: "grey", size: "md" },
                            on: {
                              click: function (e) {
                                return t.close();
                              },
                            },
                          }),
                          a("q-btn", {
                            attrs: { unelevated: "", label: "确定", color: "primary", size: "md" },
                            on: { click: t.getCondition },
                          }),
                        ],
                        1,
                      ),
                      a("q-separator"),
                      a(
                        "q-list",
                        { attrs: { bordered: "" } },
                        [
                          a("q-separator"),
                          a(
                            "q-item",
                            {
                              directives: [{ name: "ripple", rawName: "v-ripple" }],
                              attrs: { clickable: "" },
                            },
                            [
                              a("q-item-section", { attrs: { avatar: "", top: "" } }, [
                                a("span", [t._v("综合查询")]),
                              ]),
                              a(
                                "q-item-section",
                                [
                                  a("q-input", {
                                    attrs: { outlined: "", clearable: "", dense: "" },
                                    model: {
                                      value: t.queryModel.mutli_search,
                                      callback: function (e) {
                                        t.$set(t.queryModel, "mutli_search", e);
                                      },
                                      expression: "queryModel.mutli_search",
                                    },
                                  }),
                                  a(
                                    "q-item-label",
                                    {
                                      staticStyle: { "margin-top": "4px" },
                                      attrs: { caption: "" },
                                    },
                                    [t._v("可以查询任务名称和类型")],
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
              a(
                "q-dialog",
                {
                  model: {
                    value: t.newDialog,
                    callback: function (e) {
                      t.newDialog = e;
                    },
                    expression: "newDialog",
                  },
                },
                [
                  a(
                    "q-card",
                    { staticClass: "full-width", attrs: { flat: "" } },
                    [
                      a(
                        "q-card-section",
                        { staticClass: "row items-center justify-between" },
                        [
                          a("div", { staticClass: "text-h6" }, [t._v("新建")]),
                          a("q-btn", {
                            directives: [{ name: "close-popup", rawName: "v-close-popup" }],
                            attrs: { icon: "close", flat: "", round: "", dense: "", size: "sm" },
                          }),
                        ],
                        1,
                      ),
                      a(
                        "q-card-section",
                        { staticClass: "q-pt-none" },
                        [
                          a(
                            "q-list",
                            { staticClass: "q-gutter-sm", attrs: { separator: "" } },
                            t._l(t.resNewList, function (e, i) {
                              return a(
                                "q-btn",
                                {
                                  key: i,
                                  attrs: { color: e.color },
                                  on: {
                                    click: function (a) {
                                      return t.goNewLink(e.id);
                                    },
                                  },
                                },
                                [t._v(t._s(e.title))],
                              );
                            }),
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
                "q-dialog",
                {
                  model: {
                    value: t.newTaskDialog,
                    callback: function (e) {
                      t.newTaskDialog = e;
                    },
                    expression: "newTaskDialog",
                  },
                },
                [
                  a(
                    "q-card",
                    { staticClass: "full-width", attrs: { flat: "" } },
                    [
                      a(
                        "q-card-section",
                        { staticClass: "row items-center justify-between" },
                        [
                          a("div", { staticClass: "text-h6" }, [t._v("获取对象发布")]),
                          a("q-btn", {
                            directives: [{ name: "close-popup", rawName: "v-close-popup" }],
                            attrs: { icon: "close", flat: "", round: "", dense: "", size: "sm" },
                          }),
                        ],
                        1,
                      ),
                      a(
                        "q-card-section",
                        { staticClass: "q-pt-none" },
                        [
                          a(
                            "q-list",
                            { attrs: { bordered: "", separator: "" } },
                            t._l(t.taskTargetList, function (e, i) {
                              return a(
                                "q-item",
                                {
                                  directives: [{ name: "ripple", rawName: "v-ripple" }],
                                  key: i,
                                  attrs: { clickable: "" },
                                  on: {
                                    click: function (a) {
                                      return t.newTask(e.type);
                                    },
                                  },
                                },
                                [
                                  a(
                                    "q-item-section",
                                    [t._v(t._s(e.title)), a("q-tooltip", [t._v("点击去发布")])],
                                    1,
                                  ),
                                ],
                                1,
                              );
                            }),
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
                "q-dialog",
                {
                  model: {
                    value: t.batchNoDialog,
                    callback: function (e) {
                      t.batchNoDialog = e;
                    },
                    expression: "batchNoDialog",
                  },
                },
                [
                  a(
                    "q-card",
                    { staticClass: "full-width", attrs: { flat: "" } },
                    [
                      a(
                        "q-card-section",
                        { staticClass: "row items-center justify-between" },
                        [
                          a("div", { staticClass: "text-h6" }, [t._v("选择时间段")]),
                          a("q-btn", {
                            directives: [{ name: "close-popup", rawName: "v-close-popup" }],
                            attrs: { icon: "close", flat: "", round: "", dense: "", size: "sm" },
                          }),
                        ],
                        1,
                      ),
                      a(
                        "q-card-section",
                        { staticClass: "q-pt-none" },
                        [
                          a("q-select", {
                            attrs: {
                              outlined: "",
                              dense: "",
                              "option-value": "batch_no",
                              "option-label": "label",
                              "emit-value": "",
                              "map-options": "",
                              options: t.batchNoList,
                            },
                            model: {
                              value: t.rowInfo.batch_no,
                              callback: function (e) {
                                t.$set(t.rowInfo, "batch_no", e);
                              },
                              expression: "rowInfo.batch_no",
                            },
                          }),
                        ],
                        1,
                      ),
                      a(
                        "q-card-actions",
                        { attrs: { align: "right" } },
                        [
                          a("q-btn", {
                            attrs: { unelevated: "", color: "primary", label: "确认" },
                            on: { click: t.openSelectTaskDialog },
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
                  model: {
                    value: t.deleteDialog,
                    callback: function (e) {
                      t.deleteDialog = e;
                    },
                    expression: "deleteDialog",
                  },
                },
                [
                  a(
                    "q-card",
                    { staticClass: "full-width", attrs: { flat: "" } },
                    [
                      a(
                        "q-card-section",
                        { staticClass: "row items-center justify-between" },
                        [
                          a("div", { staticClass: "text-h6" }, [t._v("确定删除")]),
                          a("q-btn", {
                            directives: [{ name: "close-popup", rawName: "v-close-popup" }],
                            attrs: { icon: "close", flat: "", round: "", dense: "", size: "sm" },
                          }),
                        ],
                        1,
                      ),
                      a(
                        "q-card-section",
                        { staticClass: "q-pt-none" },
                        [
                          a("span", { staticClass: "text-red" }, [t._v("组合任务包含")]),
                          t._l(t.typeListCount, function (e, i) {
                            return a("span", { key: e.type, staticClass: "text-red" }, [
                              t._v(t._s(e.typetitle) + t._s(e.count) + "个"),
                              a("span", [
                                t._v(t._s(i !== t.typeListCount.length - 1 ? "," : "。")),
                              ]),
                            ]);
                          }),
                          a("span", { staticClass: "text-red" }, [
                            t._v("任务及其下面的数据也会被删除！"),
                          ]),
                        ],
                        2,
                      ),
                      a(
                        "q-card-actions",
                        { attrs: { align: "right" } },
                        [
                          a("q-btn", {
                            attrs: { unelevated: "", color: "red", label: "确认" },
                            on: { click: t.deleteSure },
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
                  a(
                    "q-card",
                    { staticClass: "full-width", attrs: { flat: "" } },
                    [
                      a(
                        "q-card-section",
                        { staticClass: "row items-center justify-between" },
                        [
                          a("div", { staticClass: "text-h6" }, [t._v("预览")]),
                          a("q-btn", {
                            directives: [{ name: "close-popup", rawName: "v-close-popup" }],
                            attrs: { icon: "close", flat: "", round: "", dense: "", size: "sm" },
                          }),
                        ],
                        1,
                      ),
                      a("q-separator"),
                      a("q-card-section", [
                        a("div", { staticClass: "q-mt-sm text-bold" }, [
                          t._v(t._s(t.record.title)),
                        ]),
                        a("div", { staticClass: "q-mt-sm" }, [
                          a("span", { staticClass: "text-grey neu-css-after-colon" }, [
                            t._v("创建人"),
                          ]),
                          t._v(t._s(t.record.name) + "\n        "),
                        ]),
                        a("div", [
                          a("span", { staticClass: "text-grey neu-css-after-colon" }, [
                            t._v("创建时间"),
                          ]),
                          t._v(t._s(t.record.create_time) + "\n        "),
                        ]),
                        a("div", {
                          staticClass: "q-mt-sm",
                          domProps: { innerHTML: t._s(t.record.detail) },
                        }),
                        t.record.attachment && 0 != t.record.attachment.length
                          ? a(
                              "div",
                              {
                                staticClass: "q-mt-sm",
                                class:
                                  t.record.attachment && 1 == t.record.attachment.length
                                    ? "row"
                                    : "",
                              },
                              [
                                a("div", { staticClass: "text-grey neu-css-after-colon" }, [
                                  t._v("附件"),
                                ]),
                                a(
                                  "div",
                                  t._l(t.record.attachment, function (e) {
                                    return a(
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
                                  0,
                                ),
                              ],
                            )
                          : t._e(),
                      ]),
                      a("q-separator"),
                      a(
                        "q-card-section",
                        [
                          a("div", [
                            a("span", { staticClass: "text-grey neu-css-after-colon" }, [
                              t._v("共享"),
                            ]),
                            t.record.teacher_no == t.userInfo.login_name
                              ? a(
                                  "div",
                                  { staticStyle: { float: "right" } },
                                  [
                                    a(
                                      "span",
                                      {
                                        staticClass: "text-grey",
                                        on: { click: t.openShareDialog },
                                      },
                                      [t._v("选择")],
                                    ),
                                    a("q-icon", {
                                      staticClass: "text-grey",
                                      attrs: { name: "keyboard_arrow_right", size: "sm" },
                                    }),
                                  ],
                                  1,
                                )
                              : t._e(),
                          ]),
                          a("neu-view-assigned-teacher", {
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
              a(
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
                  a(
                    "div",
                    { staticClass: "full-width bg-white" },
                    [
                      a(
                        "div",
                        {
                          staticClass:
                            "full-width row items-center justify-between q-px-md q-py-sm",
                        },
                        [
                          a("div", { staticClass: "text-bold" }, [t._v("修改共享对象")]),
                          a("q-btn", {
                            attrs: { unelevated: "", color: "primary", label: "完成" },
                            on: { click: t.updateShareTarget },
                          }),
                        ],
                        1,
                      ),
                      a("neu-assign-teacher", {
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
              t.record.teacher_no == t.userInfo.login_name
                ? a(
                    "q-page-sticky",
                    {
                      attrs: { position: "bottom-right", offset: t.fabPos },
                      on: {
                        click: function (e) {
                          return t.openNewDialog(1);
                        },
                      },
                    },
                    [
                      a("q-btn", {
                        directives: [
                          {
                            name: "touch-pan",
                            rawName: "v-touch-pan.prevent.mouse",
                            value: t.moveFab,
                            expression: "moveFab",
                            modifiers: { prevent: !0, mouse: !0 },
                          },
                        ],
                        attrs: { round: "", color: "primary", icon: "add" },
                      }),
                    ],
                    1,
                  )
                : t._e(),
              a("neu-export-data", { attrs: { config: t.exportCompConfig } }),
            ],
            1,
          );
        },
        s = [],
        o = (a("13d5"), a("fb6a"), a("ddb0"), a("ded3")),
        r = a.n(o),
        n = a("9a3d"),
        l = a("5333"),
        c = a("d852"),
        d = a("ad56"),
        p = {
          components: {
            NeuExportData: c["a"],
            NeuAssignTeacher: n["a"],
            NeuViewAssignedTeacher: l["a"],
          },
          name: "CompositeDetail",
          filters: {
            ellipsis(t) {
              return t ? (t.length > 9 ? t.slice(0, 9) + "..." : t) : "";
            },
          },
          data() {
            return {
              userInfo: JSON.parse(window.localStorage.getItem("userinfo")),
              drawerRight: !1,
              id: null,
              menuInfo: null,
              list: [],
              paging: { pageSize: 30, pageNum: 0, pageCount: 0 },
              condition: [],
              condCount: 0,
              dialog: !1,
              originalCond: {},
              queryModel: { mutli_search: "" },
              isLoading: !1,
              fabPos: [30, 40],
              exportCompConfig: null,
              cCreate: !1,
              record: {},
              resNewList: [],
              toNewType: 1,
              toNewTypeMenu: "",
              newDialog: !1,
              linkDetailList: [
                { type: "notice", link: "/teacher/notice/detail?id=" },
                {
                  type: "apply",
                  link: "/teacher/apply/statistics?apply_type=A&apply_type_name=申请&id=",
                },
                {
                  type: "collect",
                  link: "/teacher/apply/statistics?apply_type=C&apply_type_name=信息收集&id=",
                },
                {
                  type: "signup",
                  link: "/teacher/apply/statistics?apply_type=S&apply_type_name=活动报名&id=",
                },
                { type: "signin", link: "/teacher/signin/statistics?id=" },
              ],
              linkListParam: [
                { type: "notice", link: "/teacher/notice/new", query: {} },
                {
                  type: "apply",
                  link: "/teacher/apply/new",
                  query: { apply_type: "A", apply_type_name: "申请" },
                },
                {
                  type: "collect",
                  link: "/teacher/apply/new",
                  query: { apply_type: "C", apply_type_name: "信息收集" },
                },
                {
                  type: "signup",
                  link: "/teacher/apply/new",
                  query: { apply_type: "S", apply_type_name: "活动报名" },
                },
                { type: "signin", link: "/teacher/signin/new", query: {} },
              ],
              newTaskDialog: !1,
              menuColor: Object(d["d"])("composite"),
              rowInfo: { batch_no: 1 },
              taskTargetList: [
                { type: "1", title: "选择已完成任务对象" },
                { type: "2", title: "选择全部任务对象" },
              ],
              batchNoList: [],
              batchNoDialog: !1,
              deleteDialog: !1,
              typeListCount: [],
              detailDialog: !1,
              maximizedToggle: !0,
              shareTarget: [],
              shareDialog: !1,
            };
          },
          destroyed() {
            window.removeEventListener("popstate", this.goBack, !1);
          },
          mounted() {
            ((this.id = this.$route.query.id),
              this.id,
              window.localStorage.getItem("menu") &&
                (this.menuInfo = JSON.parse(window.localStorage.getItem("menu")).find(
                  (t) => "composite" === t.id,
                )),
              this.showDetailInfo(),
              window.history &&
                window.history.pushState &&
                (history.pushState(null, null, document.URL),
                window.addEventListener("popstate", this.goBack, !1)),
              this.loadList(() => {}));
          },
          methods: {
            showDetailInfo() {
              (this.$q.loading.show(),
                this.$axiosAction("/api/teacher/composite/composite.api", {
                  action: "queryListDetail",
                  id: this.id,
                })
                  .then((t) => {
                    (0 === t.data.code &&
                      ((this.record = t.data.result),
                      (this.record.teacher_no !== this.userInfo.login_name &&
                        "A" !== this.userInfo.role_id) ||
                        (this.cCreate = !0),
                      "" === t.data.result &&
                        (this.$showErrorNotify("该内容为空，或无权限"), this.goBack())),
                      this.$q.loading.hide());
                  })
                  .catch((t) => {
                    ((this.record = []), this.$q.loading.hide());
                  }));
            },
            loadList(t) {
              (t && ((this.paging.pageNum = 0), (this.list = [])),
                (this.paging.pageNum += 1),
                (this.isLoading = !0),
                this.$axiosAction(
                  "/api/teacher/composite/composite.api",
                  r()(
                    r()({ action: "queryChildrenList" }, this.queryModel),
                    {},
                    {
                      composite_id: this.id,
                      pageSize: this.paging.pageSize,
                      pageNum: this.paging.pageNum,
                    },
                  ),
                )
                  .then((e) => {
                    if (0 === e.data.code) {
                      this.list = this.list.concat(e.data.result.list);
                      const {
                        pageSize: t,
                        pageNum: a,
                        rowCount: i,
                        pageCount: s,
                        startIndex: o,
                        endIndex: n,
                      } = r()({}, e.data.result);
                      this.paging = {
                        pageSize: t,
                        pageNum: a,
                        rowCount: i,
                        pageCount: s,
                        startIndex: o,
                        endIndex: n,
                      };
                    } else this.setDefaultList();
                    (t && t(), (this.isLoading = !1));
                  })
                  .catch((e) => {
                    (this.setDefaultList(), t && t(), (this.isLoading = !1));
                  }));
            },
            setDefaultList() {
              ((this.list = []), (this.paging = { pageSize: 30, pageNum: 0, pageCount: 0 }));
            },
            refresh(t) {
              this.loadList(t);
            },
            goBack() {
              this.$router.push("/teacher/composite/index");
            },
            openEditDialog(t, e, a) {
              let i = this.linkDetailList.find((t) => t.type === a).link;
              ((i = i + t + "&compositeId=" + this.id), this.$router.push(i));
            },
            openNewDialog(t) {
              this.resNewList = [];
              const e = ["notice", "apply", "collect", "signup", "signin"];
              for (const a of e) {
                const t = JSON.parse(window.localStorage.getItem("menu")).find((t) => t.id === a);
                void 0 !== t &&
                  this.resNewList.push({
                    id: t.id,
                    title: t.title,
                    edit_permit: t.edit_permit,
                    color: t.color.background,
                  });
              }
              this.resNewList.length < 1
                ? this.$showErrorNotify("您没有新建相关任务权限，请联系管理员")
                : ((this.toNewType = t), (this.newDialog = !0));
            },
            exportList() {
              this.exportCompConfig = [
                "/api/teacher/composite/composite.api",
                "queryChildrenList",
                r()(r()({}, this.queryModel), {}, { composite_id: this.id }),
                { [this.record.title]: "result" },
                this.record.title,
                null,
                (t) =>
                  t.reduce((t, e) => {
                    const a = { 任务名称: e.title, 类型: e.typetitle, 创建时间: e.create_time };
                    return t.concat(a);
                  }, []),
                1e3,
                5e3,
              ];
            },
            open() {
              ((this.dialog = !0),
                (this.originalCond = Object.keys(this.queryModel).reduce(
                  (t, e) => ((t[e] = this.queryModel[e]), t),
                  {},
                )));
            },
            close() {
              ((this.dialog = !1),
                (this.queryModel = Object.keys(this.originalCond).reduce(
                  (t, e) => ((t[e] = this.originalCond[e]), t),
                  {},
                )));
            },
            getCondition() {
              ((this.condCount = Object.keys(this.queryModel).reduce(
                (t, e) => (this.queryModel[e] ? t + 1 : t),
                0,
              )),
                this.$refs.pageRefresh.trigger(),
                (this.dialog = !1));
            },
            moveFab(t) {
              ((this.draggingFab = !0 !== t.isFirst && !0 !== t.isFinal),
                (this.fabPos = [this.fabPos[0] - t.delta.x, this.fabPos[1] - t.delta.y]));
            },
            goNewLink(t) {
              if (1 === this.toNewType) {
                const e = this.linkListParam.find((e) => e.type === t);
                ((e.query.compositeId = this.id),
                  (e.query.compositeTitle = this.record.title),
                  this.$router.push({
                    name: e.link,
                    query: e.query,
                    params: { share_target: this.record.share_target },
                  }));
              } else ((this.toNewTypeMenu = t), (this.newTaskDialog = !0));
            },
            newTaskOpenDialog(t, e, a) {
              "S" === a
                ? ((this.rowInfo.id = t), (this.rowInfo.type = e), this.openNewDialog(2))
                : (this.$q.loading.show(),
                  this.$axiosAction("/api/teacher/composite/composite.api", {
                    action: "getBatchNo",
                    id: t,
                    type: e,
                  })
                    .then((a) => {
                      (0 === a.data.code &&
                        ((this.batchNoList = a.data.result),
                        (this.rowInfo.batch_no = this.batchNoList.length),
                        (this.rowInfo.id = t),
                        (this.rowInfo.type = e),
                        (this.batchNoDialog = !0)),
                        this.$q.loading.hide());
                    })
                    .catch((t) => {
                      this.$q.loading.hide();
                    }));
            },
            newTask(t) {
              (this.$q.loading.show(),
                (this.rowInfo.typeId = t),
                this.$axiosAction(
                  "/api/teacher/composite/composite.api",
                  r()({ action: "getTaskTarget" }, this.rowInfo),
                )
                  .then((e) => {
                    if (0 === e.data.code) {
                      const a = this.linkListParam.find((t) => t.type === this.toNewTypeMenu);
                      ((a.query.compositeId = this.id),
                        (a.query.compositeTitle = this.record.title),
                        ("1" === t || ("2" === t && "A" !== this.userInfo.role_id)) && "1" === t
                          ? this.$router.push({
                              name: a.link,
                              query: a.query,
                              params: {
                                taskTarget: e.data.tasklist,
                                share_target: this.record.share_target,
                              },
                            })
                          : this.$router.push({
                              name: a.link,
                              query: a.query,
                              params: {
                                taskTarget: e.data.tasklist.task_target,
                                share_target: this.record.share_target,
                              },
                            }),
                        (this.batchNoDialog = !1));
                    }
                    this.$q.loading.hide();
                  })
                  .catch((t) => {
                    this.$q.loading.hide();
                  }));
            },
            openSelectTaskDialog() {
              this.openNewDialog(2);
            },
            deleteComposite() {
              (this.$q.loading.show(),
                this.$axiosAction("/api/teacher/composite/composite.api", {
                  action: "queryChildrenListCount",
                  composite_id: this.id,
                })
                  .then((t) => {
                    (0 === t.data.code &&
                      ((this.typeListCount = t.data.result), (this.deleteDialog = !0)),
                      this.$q.loading.hide());
                  })
                  .catch((t) => {
                    this.$q.loading.hide();
                  }));
            },
            deleteSure() {
              (this.$q.loading.show(),
                this.$axiosAction("/api/teacher/composite/composite.api", {
                  action: "deleteComposite",
                  composite_id: this.id,
                })
                  .then((t) => {
                    (0 === t.data.code && this.goBack(), this.$q.loading.hide());
                  })
                  .catch((t) => {
                    this.$q.loading.hide();
                  }));
            },
            openShareDialog() {
              ((this.shareDialog = !0), (this.shareTarget = this.record.share_target));
            },
            updateShareTarget() {
              (this.$q.loading.show(),
                this.$axiosAction("/api/teacher/composite/composite.api", {
                  action: "updateShareTarget",
                  composite_id: this.id,
                  share_target:
                    this.shareTarget && this.shareTarget.length > 0
                      ? JSON.stringify(this.shareTarget)
                      : null,
                })
                  .then((t) => {
                    (0 === t.data.code &&
                      ((this.record.share_target = this.shareTarget), (this.shareDialog = !1)),
                      this.$q.loading.hide());
                  })
                  .catch((t) => {
                    this.$q.loading.hide();
                  }));
            },
          },
        },
        h = p,
        g = a("2877"),
        m = a("4d5a"),
        u = a("e359"),
        q = a("65c6"),
        y = a("9c40"),
        w = a("6ac5"),
        _ = a("58a81"),
        v = a("3b73"),
        f = a("4074"),
        b = a("0170"),
        C = a("f09f"),
        k = a("a370"),
        x = a("eb85"),
        N = a("59d7"),
        D = a("09e3"),
        L = a("9989"),
        T = a("1c1c"),
        S = a("66e5"),
        I = a("0016"),
        $ = a("8380"),
        z = a("9404"),
        Q = a("4983"),
        P = a("24e8"),
        A = a("6b1d"),
        M = a("27f9"),
        j = a("05c0"),
        O = a("4b7e"),
        R = a("ddd8"),
        B = a("de5e"),
        E = a("714f"),
        F = a("7f67"),
        J = a("75c3"),
        H = a("eebe"),
        U = a.n(H),
        V = Object(g["a"])(h, i, s, !1, null, null, null);
      e["default"] = V.exports;
      (U()(V, "components", {
        QLayout: m["a"],
        QHeader: u["a"],
        QToolbar: q["a"],
        QBtn: y["a"],
        QToolbarTitle: w["a"],
        QBadge: _["a"],
        QExpansionItem: v["a"],
        QItemSection: f["a"],
        QItemLabel: b["a"],
        QCard: C["a"],
        QCardSection: k["a"],
        QSeparator: x["a"],
        QPullToRefresh: N["a"],
        QPageContainer: D["a"],
        QPage: L["a"],
        QList: T["a"],
        QItem: S["a"],
        QIcon: I["a"],
        QSpinnerDots: $["a"],
        QDrawer: z["a"],
        QScrollArea: Q["a"],
        QDialog: P["a"],
        QLinearProgress: A["a"],
        QInput: M["a"],
        QTooltip: j["a"],
        QCardActions: O["a"],
        QSelect: R["a"],
        QPageSticky: B["a"],
      }),
        U()(V, "directives", { Ripple: E["a"], ClosePopup: F["a"], TouchPan: J["a"] }));
    },
  },
]);
