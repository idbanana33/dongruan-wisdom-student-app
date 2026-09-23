(window["webpackJsonp"] = window["webpackJsonp"] || []).push([
  [99],
  {
    "66de": function (e, t, a) {
      "use strict";
      a.r(t);
      var r = function () {
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
                      e.menuInfo
                        ? a("q-toolbar-title", [e._v("新建" + e._s(e.menuInfo.title))])
                        : e._e(),
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
                    { staticClass: "bg-grey-3" },
                    [
                      e.menuInfo
                        ? e._e()
                        : a(
                            "div",
                            {
                              staticClass:
                                "text-h6 text-bold q-mb-md row justify-center full-width",
                            },
                            [e._v("\n          您没有当前页面访问权限\n      ")],
                          ),
                      a(
                        "q-form",
                        { ref: "form", staticClass: "full-width", on: { submit: e.saveRecord } },
                        [
                          e.menuInfo
                            ? a(
                                "q-card",
                                { staticClass: "full-width", attrs: { flat: "" } },
                                [
                                  a(
                                    "q-list",
                                    { staticClass: "full-width" },
                                    [
                                      a(
                                        "q-item",
                                        [
                                          a(
                                            "q-item-section",
                                            [
                                              a("q-item-label", { staticClass: "text-bold" }, [
                                                e._v("通知内容"),
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
                                          a(
                                            "q-item-section",
                                            { attrs: { avatar: "" } },
                                            [
                                              a(
                                                "q-item-label",
                                                { staticClass: "neu-css-before-red-asterisk" },
                                                [e._v("通知类型")],
                                              ),
                                            ],
                                            1,
                                          ),
                                          a(
                                            "q-item-section",
                                            [
                                              a("q-select", {
                                                attrs: {
                                                  dense: "",
                                                  outlined: "",
                                                  "emit-value": "",
                                                  "map-options": "",
                                                  options: e.noticePriorityList,
                                                },
                                                model: {
                                                  value: e.record.notice_priority,
                                                  callback: function (t) {
                                                    e.$set(e.record, "notice_priority", t);
                                                  },
                                                  expression: "record.notice_priority",
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
                                            { attrs: { avatar: "" } },
                                            [
                                              a(
                                                "q-item-label",
                                                { staticClass: "neu-css-before-red-asterisk" },
                                                [e._v("通知标题")],
                                              ),
                                            ],
                                            1,
                                          ),
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
                                          a("q-item-section", { attrs: { avatar: "" } }, [
                                            a("div", [
                                              e._v(
                                                "\n                  发布单位\n                ",
                                              ),
                                            ]),
                                          ]),
                                          a(
                                            "q-item-section",
                                            [
                                              a("q-select", {
                                                attrs: {
                                                  outlined: "",
                                                  "emit-value": "",
                                                  "map-options": "",
                                                  dense: "",
                                                  options: e.depoptions,
                                                  clearable: "",
                                                },
                                                model: {
                                                  value: e.record.dep_no,
                                                  callback: function (t) {
                                                    e.$set(e.record, "dep_no", t);
                                                  },
                                                  expression: "record.dep_no",
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
                                                [e._v("正文")],
                                              ),
                                              a("q-editor", {
                                                attrs: {
                                                  toolbar: e.editorToolBar,
                                                  fonts: e.editorFonts,
                                                  "min-height": "10em",
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
                                      a("q-separator"),
                                      a(
                                        "q-item",
                                        [
                                          a(
                                            "q-item-section",
                                            [
                                              a("q-item-label", { staticClass: "q-my-sm" }, [
                                                e._v("附件"),
                                              ]),
                                              a(
                                                "q-item-label",
                                                { staticClass: "q-mb-sm", attrs: { caption: "" } },
                                                [
                                                  e._v(
                                                    "附件格式支持：Word、Excel、PowerPoint、PDF",
                                                  ),
                                                ],
                                              ),
                                              0 == e.isHarmonyOS
                                                ? a("q-uploader", {
                                                    staticClass: "full-width",
                                                    attrs: {
                                                      flat: "",
                                                      color: "grey",
                                                      url: e.uploader,
                                                      "auto-upload": "",
                                                      filter: e.checkFile,
                                                      accept:
                                                        ".pdf, .pptx, .ppt, .xls, .xlsx, .doc, .docx, audio/*, video/*",
                                                    },
                                                    on: {
                                                      uploaded: e.afterUploaded,
                                                      rejected: e.onRejected,
                                                      removed: e.afterRemoved,
                                                    },
                                                    scopedSlots: e._u(
                                                      [
                                                        {
                                                          key: "header",
                                                          fn: function (t) {
                                                            return [
                                                              a(
                                                                "div",
                                                                {
                                                                  staticClass:
                                                                    "row no-wrap items-center q-pa-sm q-gutter-xs",
                                                                },
                                                                [
                                                                  a("div", { staticClass: "col" }, [
                                                                    e._v("附件上传(10M以内)"),
                                                                  ]),
                                                                  t.canAddFiles
                                                                    ? a(
                                                                        "q-btn",
                                                                        {
                                                                          attrs: {
                                                                            type: "a",
                                                                            icon: "add_box",
                                                                            round: "",
                                                                            dense: "",
                                                                            flat: "",
                                                                          },
                                                                        },
                                                                        [
                                                                          a(
                                                                            "q-uploader-add-trigger",
                                                                          ),
                                                                          a("q-tooltip", [
                                                                            e._v("选择文件并上传"),
                                                                          ]),
                                                                        ],
                                                                        1,
                                                                      )
                                                                    : e._e(),
                                                                ],
                                                                1,
                                                              ),
                                                            ];
                                                          },
                                                        },
                                                        {
                                                          key: "list",
                                                          fn: function (t) {
                                                            return [
                                                              a(
                                                                "q-list",
                                                                { attrs: { separator: "" } },
                                                                [
                                                                  e._l(t.files, function (r) {
                                                                    return a(
                                                                      "q-item",
                                                                      { key: r.name },
                                                                      [
                                                                        a(
                                                                          "q-item-section",
                                                                          [
                                                                            a(
                                                                              "q-item-label",
                                                                              {
                                                                                staticClass:
                                                                                  "full-width ellipsis cursor-pointer",
                                                                                on: {
                                                                                  click: function (
                                                                                    t,
                                                                                  ) {
                                                                                    return e.downloadUploaderFile(
                                                                                      r,
                                                                                    );
                                                                                  },
                                                                                },
                                                                              },
                                                                              [
                                                                                e._v(
                                                                                  "\n                            " +
                                                                                    e._s(r.name) +
                                                                                    "\n                          ",
                                                                                ),
                                                                              ],
                                                                            ),
                                                                          ],
                                                                          1,
                                                                        ),
                                                                        a(
                                                                          "q-item-section",
                                                                          { attrs: { side: "" } },
                                                                          [
                                                                            a(
                                                                              "q-btn",
                                                                              {
                                                                                attrs: {
                                                                                  flat: "",
                                                                                  dense: "",
                                                                                  color: "negative",
                                                                                  icon: "delete",
                                                                                  size: "sm",
                                                                                },
                                                                                on: {
                                                                                  click: function (
                                                                                    e,
                                                                                  ) {
                                                                                    return t.removeFile(
                                                                                      r,
                                                                                    );
                                                                                  },
                                                                                },
                                                                              },
                                                                              [
                                                                                a("q-tooltip", [
                                                                                  e._v("删除"),
                                                                                ]),
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
                                                                  e._l(
                                                                    e.matchingUploadedFiles(
                                                                      e.record.attachment,
                                                                      t.files,
                                                                    ),
                                                                    function (t) {
                                                                      return a(
                                                                        "q-item",
                                                                        { key: t.servername },
                                                                        [
                                                                          a(
                                                                            "q-item-section",
                                                                            [
                                                                              a(
                                                                                "q-item-label",
                                                                                {
                                                                                  staticClass:
                                                                                    "full-width ellipsis cursor-pointer",
                                                                                  on: {
                                                                                    click:
                                                                                      function (a) {
                                                                                        return e.downloadFile(
                                                                                          t.link,
                                                                                          t.servername,
                                                                                        );
                                                                                      },
                                                                                  },
                                                                                },
                                                                                [
                                                                                  e._v(
                                                                                    "\n                            " +
                                                                                      e._s(
                                                                                        t.srcname,
                                                                                      ) +
                                                                                      "\n                          ",
                                                                                  ),
                                                                                ],
                                                                              ),
                                                                            ],
                                                                            1,
                                                                          ),
                                                                          a(
                                                                            "q-item-section",
                                                                            { attrs: { side: "" } },
                                                                            [
                                                                              a(
                                                                                "q-btn",
                                                                                {
                                                                                  attrs: {
                                                                                    flat: "",
                                                                                    dense: "",
                                                                                    color:
                                                                                      "negative",
                                                                                    icon: "delete",
                                                                                    size: "sm",
                                                                                  },
                                                                                  on: {
                                                                                    click:
                                                                                      function (a) {
                                                                                        return e.removeFile(
                                                                                          t.servername,
                                                                                        );
                                                                                      },
                                                                                  },
                                                                                },
                                                                                [
                                                                                  a("q-tooltip", [
                                                                                    e._v("删除"),
                                                                                  ]),
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
                                                                  ),
                                                                ],
                                                                2,
                                                              ),
                                                            ];
                                                          },
                                                        },
                                                      ],
                                                      null,
                                                      !1,
                                                      2478645286,
                                                    ),
                                                  })
                                                : e._e(),
                                              1 == e.isHarmonyOS
                                                ? a("q-uploader", {
                                                    staticClass: "full-width",
                                                    attrs: {
                                                      flat: "",
                                                      color: "grey",
                                                      url: e.uploader,
                                                      "auto-upload": "",
                                                      filter: e.checkFile,
                                                    },
                                                    on: {
                                                      uploaded: e.afterUploaded,
                                                      removed: e.afterRemoved,
                                                    },
                                                    scopedSlots: e._u(
                                                      [
                                                        {
                                                          key: "header",
                                                          fn: function (t) {
                                                            return [
                                                              a(
                                                                "div",
                                                                {
                                                                  staticClass:
                                                                    "row no-wrap items-center q-pa-sm q-gutter-xs",
                                                                },
                                                                [
                                                                  a("div", { staticClass: "col" }, [
                                                                    e._v("附件上传(10M以内)"),
                                                                  ]),
                                                                  t.canAddFiles
                                                                    ? a(
                                                                        "q-btn",
                                                                        {
                                                                          attrs: {
                                                                            type: "a",
                                                                            icon: "add_box",
                                                                            round: "",
                                                                            dense: "",
                                                                            flat: "",
                                                                          },
                                                                        },
                                                                        [
                                                                          a(
                                                                            "q-uploader-add-trigger",
                                                                          ),
                                                                          a("q-tooltip", [
                                                                            e._v("选择文件并上传"),
                                                                          ]),
                                                                        ],
                                                                        1,
                                                                      )
                                                                    : e._e(),
                                                                ],
                                                                1,
                                                              ),
                                                            ];
                                                          },
                                                        },
                                                        {
                                                          key: "list",
                                                          fn: function (t) {
                                                            return [
                                                              a(
                                                                "q-list",
                                                                { attrs: { separator: "" } },
                                                                [
                                                                  e._l(t.files, function (r) {
                                                                    return a(
                                                                      "q-item",
                                                                      { key: r.name },
                                                                      [
                                                                        a(
                                                                          "q-item-section",
                                                                          [
                                                                            a(
                                                                              "q-item-label",
                                                                              {
                                                                                staticClass:
                                                                                  "full-width ellipsis cursor-pointer",
                                                                                on: {
                                                                                  click: function (
                                                                                    t,
                                                                                  ) {
                                                                                    return e.downloadUploaderFile(
                                                                                      r,
                                                                                    );
                                                                                  },
                                                                                },
                                                                              },
                                                                              [
                                                                                e._v(
                                                                                  "\n                            " +
                                                                                    e._s(r.name) +
                                                                                    "\n                          ",
                                                                                ),
                                                                              ],
                                                                            ),
                                                                          ],
                                                                          1,
                                                                        ),
                                                                        a(
                                                                          "q-item-section",
                                                                          { attrs: { side: "" } },
                                                                          [
                                                                            a(
                                                                              "q-btn",
                                                                              {
                                                                                attrs: {
                                                                                  flat: "",
                                                                                  dense: "",
                                                                                  color: "negative",
                                                                                  icon: "delete",
                                                                                  size: "sm",
                                                                                },
                                                                                on: {
                                                                                  click: function (
                                                                                    e,
                                                                                  ) {
                                                                                    return t.removeFile(
                                                                                      r,
                                                                                    );
                                                                                  },
                                                                                },
                                                                              },
                                                                              [
                                                                                a("q-tooltip", [
                                                                                  e._v("删除"),
                                                                                ]),
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
                                                                  e._l(
                                                                    e.matchingUploadedFiles(
                                                                      e.record.attachment,
                                                                      t.files,
                                                                    ),
                                                                    function (t) {
                                                                      return a(
                                                                        "q-item",
                                                                        { key: t.servername },
                                                                        [
                                                                          a(
                                                                            "q-item-section",
                                                                            [
                                                                              a(
                                                                                "q-item-label",
                                                                                {
                                                                                  staticClass:
                                                                                    "full-width ellipsis cursor-pointer",
                                                                                  on: {
                                                                                    click:
                                                                                      function (a) {
                                                                                        return e.downloadFile(
                                                                                          t.link,
                                                                                          t.servername,
                                                                                        );
                                                                                      },
                                                                                  },
                                                                                },
                                                                                [
                                                                                  e._v(
                                                                                    "\n                            " +
                                                                                      e._s(
                                                                                        t.srcname,
                                                                                      ) +
                                                                                      "\n                          ",
                                                                                  ),
                                                                                ],
                                                                              ),
                                                                            ],
                                                                            1,
                                                                          ),
                                                                          a(
                                                                            "q-item-section",
                                                                            { attrs: { side: "" } },
                                                                            [
                                                                              a(
                                                                                "q-btn",
                                                                                {
                                                                                  attrs: {
                                                                                    flat: "",
                                                                                    dense: "",
                                                                                    color:
                                                                                      "negative",
                                                                                    icon: "delete",
                                                                                    size: "sm",
                                                                                  },
                                                                                  on: {
                                                                                    click:
                                                                                      function (a) {
                                                                                        return e.removeFile(
                                                                                          t.servername,
                                                                                        );
                                                                                      },
                                                                                  },
                                                                                },
                                                                                [
                                                                                  a("q-tooltip", [
                                                                                    e._v("删除"),
                                                                                  ]),
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
                                                                  ),
                                                                ],
                                                                2,
                                                              ),
                                                            ];
                                                          },
                                                        },
                                                      ],
                                                      null,
                                                      !1,
                                                      2478645286,
                                                    ),
                                                  })
                                                : e._e(),
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
                              )
                            : e._e(),
                          e.menuInfo
                            ? a(
                                "q-card",
                                { staticClass: "full-width row q-mt-sm", attrs: { flat: "" } },
                                [
                                  a(
                                    "q-list",
                                    { staticClass: "full-width" },
                                    [
                                      a(
                                        "q-item",
                                        [
                                          a(
                                            "q-item-section",
                                            { attrs: { avatar: "" } },
                                            [
                                              a("q-item-label", { staticClass: "text-bold" }, [
                                                e._v("通知参数"),
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
                                          a(
                                            "q-item-section",
                                            { attrs: { avatar: "" } },
                                            [
                                              a(
                                                "q-item-label",
                                                { staticClass: "neu-css-before-red-asterisk" },
                                                [e._v("反馈截止时间")],
                                              ),
                                            ],
                                            1,
                                          ),
                                          a(
                                            "q-item-section",
                                            [
                                              a("q-field", {
                                                staticClass: "full-width",
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
                                                  ],
                                                  value: e.record.feedback_deadline,
                                                },
                                                scopedSlots: e._u(
                                                  [
                                                    {
                                                      key: "control",
                                                      fn: function () {
                                                        return [
                                                          e._v(e._s(e.record.feedback_deadline)),
                                                        ];
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
                                                                            mask: "YYYY-MM-DD HH:mm",
                                                                          },
                                                                          model: {
                                                                            value:
                                                                              e.record
                                                                                .feedback_deadline,
                                                                            callback: function (t) {
                                                                              e.$set(
                                                                                e.record,
                                                                                "feedback_deadline",
                                                                                t,
                                                                              );
                                                                            },
                                                                            expression:
                                                                              "record.feedback_deadline",
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
                                                          a(
                                                            "q-icon",
                                                            {
                                                              staticClass: "cursor-pointer",
                                                              attrs: { name: "access_time" },
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
                                                                    {
                                                                      staticClass:
                                                                        "row items-start",
                                                                    },
                                                                    [
                                                                      a(
                                                                        "q-time",
                                                                        {
                                                                          attrs: {
                                                                            flat: "",
                                                                            mask: "YYYY-MM-DD HH:mm",
                                                                            format24h: "",
                                                                          },
                                                                          model: {
                                                                            value:
                                                                              e.record
                                                                                .feedback_deadline,
                                                                            callback: function (t) {
                                                                              e.$set(
                                                                                e.record,
                                                                                "feedback_deadline",
                                                                                t,
                                                                              );
                                                                            },
                                                                            expression:
                                                                              "record.feedback_deadline",
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
                                                  3711654684,
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
                                          a(
                                            "q-item-section",
                                            [
                                              a(
                                                "q-item-label",
                                                { staticClass: "neu-css-before-red-asterisk" },
                                                [e._v("手动确认已读")],
                                              ),
                                            ],
                                            1,
                                          ),
                                          a(
                                            "q-item-section",
                                            { attrs: { side: "" } },
                                            [
                                              a("q-toggle", {
                                                attrs: {
                                                  size: "lg",
                                                  dense: "",
                                                  "false-value": 0,
                                                  "true-value": 1,
                                                },
                                                model: {
                                                  value: e.record.confirm_flag,
                                                  callback: function (t) {
                                                    e.$set(e.record, "confirm_flag", t);
                                                  },
                                                  expression: "record.confirm_flag",
                                                },
                                              }),
                                              a("span", { staticClass: "text-grey text-caption" }, [
                                                e._v("开启后学生需要点击确认按钮对内容进行确认"),
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
                                          a(
                                            "q-item-section",
                                            [
                                              a(
                                                "q-item-label",
                                                { staticClass: "neu-css-before-red-asterisk" },
                                                [e._v("允许班级干部查看任务数据")],
                                              ),
                                            ],
                                            1,
                                          ),
                                          a(
                                            "q-item-section",
                                            { attrs: { side: "" } },
                                            [
                                              a("q-toggle", {
                                                attrs: {
                                                  size: "lg",
                                                  dense: "",
                                                  "false-value": 0,
                                                  "true-value": 1,
                                                },
                                                model: {
                                                  value: e.record.stu_manage_flag,
                                                  callback: function (t) {
                                                    e.$set(e.record, "stu_manage_flag", t);
                                                  },
                                                  expression: "record.stu_manage_flag",
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
                                                { staticClass: "neu-css-before-red-asterisk" },
                                                [e._v("定时发送")],
                                              ),
                                            ],
                                            1,
                                          ),
                                          a(
                                            "q-item-section",
                                            { attrs: { side: "" } },
                                            [
                                              a("q-toggle", {
                                                attrs: {
                                                  size: "lg",
                                                  dense: "",
                                                  "false-value": 0,
                                                  "true-value": 1,
                                                },
                                                model: {
                                                  value: e.record.fixed_time_flag,
                                                  callback: function (t) {
                                                    e.$set(e.record, "fixed_time_flag", t);
                                                  },
                                                  expression: "record.fixed_time_flag",
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
                                        {
                                          directives: [
                                            {
                                              name: "show",
                                              rawName: "v-show",
                                              value: 1 == e.record.fixed_time_flag,
                                              expression: "record.fixed_time_flag == 1",
                                            },
                                          ],
                                        },
                                        [
                                          a(
                                            "q-item-section",
                                            { attrs: { avatar: "" } },
                                            [
                                              a(
                                                "q-item-label",
                                                { staticClass: "neu-css-before-red-asterisk" },
                                                [e._v("定时发送时间")],
                                              ),
                                            ],
                                            1,
                                          ),
                                          a(
                                            "q-item-section",
                                            [
                                              a("q-field", {
                                                staticClass: "full-width",
                                                staticStyle: { width: "200px" },
                                                attrs: {
                                                  outlined: "",
                                                  dense: "",
                                                  "stack-label": "",
                                                  "hide-bottom-space": "",
                                                  "lazy-rules": "",
                                                  rules: [
                                                    function (t) {
                                                      return (
                                                        !!t ||
                                                        0 == e.record.fixed_time_flag ||
                                                        "请填写该项"
                                                      );
                                                    },
                                                  ],
                                                  value: e.record.fixed_time,
                                                },
                                                scopedSlots: e._u(
                                                  [
                                                    {
                                                      key: "control",
                                                      fn: function () {
                                                        return [e._v(e._s(e.record.fixed_time))];
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
                                                                            mask: "YYYY-MM-DD HH:mm",
                                                                          },
                                                                          model: {
                                                                            value:
                                                                              e.record.fixed_time,
                                                                            callback: function (t) {
                                                                              e.$set(
                                                                                e.record,
                                                                                "fixed_time",
                                                                                t,
                                                                              );
                                                                            },
                                                                            expression:
                                                                              "record.fixed_time",
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
                                                          a(
                                                            "q-icon",
                                                            {
                                                              staticClass: "cursor-pointer",
                                                              attrs: { name: "access_time" },
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
                                                                    {
                                                                      staticClass:
                                                                        "row items-start",
                                                                    },
                                                                    [
                                                                      a(
                                                                        "q-time",
                                                                        {
                                                                          attrs: {
                                                                            flat: "",
                                                                            mask: "YYYY-MM-DD HH:mm",
                                                                            format24h: "",
                                                                          },
                                                                          model: {
                                                                            value:
                                                                              e.record.fixed_time,
                                                                            callback: function (t) {
                                                                              e.$set(
                                                                                e.record,
                                                                                "fixed_time",
                                                                                t,
                                                                              );
                                                                            },
                                                                            expression:
                                                                              "record.fixed_time",
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
                                                  4273526524,
                                                ),
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
                              )
                            : e._e(),
                          e.menuInfo
                            ? a(
                                "q-card",
                                { staticClass: "full-width row q-mt-sm", attrs: { flat: "" } },
                                [
                                  a(
                                    "q-list",
                                    { staticClass: "full-width" },
                                    [
                                      a(
                                        "q-item",
                                        [
                                          a(
                                            "q-item-section",
                                            { attrs: { avatar: "" } },
                                            [
                                              a(
                                                "q-item-label",
                                                { staticClass: "neu-css-before-red-asterisk" },
                                                [e._v("通知对象")],
                                              ),
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
                                                      directives: [
                                                        {
                                                          name: "show",
                                                          rawName: "v-show",
                                                          value:
                                                            !e.record.task_target ||
                                                            0 == e.record.task_target.length,
                                                          expression:
                                                            "!record.task_target || record.task_target.length == 0 ",
                                                        },
                                                      ],
                                                      staticClass: "text-grey",
                                                      on: {
                                                        click: function (t) {
                                                          e.taskTargetDialog = !0;
                                                        },
                                                      },
                                                    },
                                                    [e._v("选择")],
                                                  ),
                                                  a("q-icon", {
                                                    directives: [
                                                      {
                                                        name: "show",
                                                        rawName: "v-show",
                                                        value:
                                                          !e.record.task_target ||
                                                          0 == e.record.task_target.length,
                                                        expression:
                                                          "!record.task_target || record.task_target.length == 0 ",
                                                      },
                                                    ],
                                                    staticClass: "text-grey",
                                                    attrs: {
                                                      name: "keyboard_arrow_right",
                                                      size: "sm",
                                                    },
                                                  }),
                                                  a(
                                                    "span",
                                                    {
                                                      directives: [
                                                        {
                                                          name: "show",
                                                          rawName: "v-show",
                                                          value:
                                                            e.record.task_target &&
                                                            0 != e.record.task_target.length,
                                                          expression:
                                                            "record.task_target && record.task_target.length != 0 ",
                                                        },
                                                      ],
                                                      staticClass: "text-primary",
                                                      on: {
                                                        click: function (t) {
                                                          e.taskTargetDialog = !0;
                                                        },
                                                      },
                                                    },
                                                    [
                                                      e._v(
                                                        "已选择 (" +
                                                          e._s(e.record.task_target.length) +
                                                          ")",
                                                      ),
                                                    ],
                                                  ),
                                                  a("q-icon", {
                                                    directives: [
                                                      {
                                                        name: "show",
                                                        rawName: "v-show",
                                                        value:
                                                          e.record.task_target &&
                                                          0 != e.record.task_target.length,
                                                        expression:
                                                          "record.task_target && record.task_target.length != 0 ",
                                                      },
                                                    ],
                                                    staticClass: "text-primary",
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
                                    ],
                                    1,
                                  ),
                                ],
                                1,
                              )
                            : e._e(),
                          e.menuInfo
                            ? a(
                                "q-card",
                                { staticClass: "full-width row q-mt-sm", attrs: { flat: "" } },
                                [
                                  a(
                                    "q-list",
                                    { staticClass: "full-width" },
                                    [
                                      a(
                                        "q-item",
                                        [
                                          a(
                                            "q-item-section",
                                            { attrs: { avatar: "" } },
                                            [
                                              a("q-item-label", [e._v("共享对象")]),
                                              e.shareDisable
                                                ? e._e()
                                                : a("q-item-label", { attrs: { caption: "" } }, [
                                                    e._v(
                                                      "将该" +
                                                        e._s((e.menuInfo || {}).title) +
                                                        "统计数据共享给其他老师",
                                                    ),
                                                  ]),
                                              e.shareDisable
                                                ? a("q-item-label", { attrs: { caption: "" } }, [
                                                    e._v("组合子任务不可更改分享对象"),
                                                  ])
                                                : e._e(),
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
                                                      directives: [
                                                        {
                                                          name: "show",
                                                          rawName: "v-show",
                                                          value:
                                                            (!e.record.share_target ||
                                                              0 == e.record.share_target.length) &&
                                                            !e.shareDisable,
                                                          expression:
                                                            "(!record.share_target || record.share_target.length == 0) && !shareDisable ",
                                                        },
                                                      ],
                                                      staticClass: "text-grey",
                                                      on: {
                                                        click: function (t) {
                                                          e.shareDialog = !0;
                                                        },
                                                      },
                                                    },
                                                    [e._v("选择")],
                                                  ),
                                                  a("q-icon", {
                                                    directives: [
                                                      {
                                                        name: "show",
                                                        rawName: "v-show",
                                                        value:
                                                          (!e.record.share_target ||
                                                            0 == e.record.share_target.length) &&
                                                          !e.shareDisable,
                                                        expression:
                                                          "(!record.share_target || record.share_target.length == 0) && !shareDisable ",
                                                      },
                                                    ],
                                                    staticClass: "text-grey",
                                                    attrs: {
                                                      name: "keyboard_arrow_right",
                                                      size: "sm",
                                                    },
                                                  }),
                                                  a(
                                                    "span",
                                                    {
                                                      directives: [
                                                        {
                                                          name: "show",
                                                          rawName: "v-show",
                                                          value:
                                                            e.record.share_target &&
                                                            0 != e.record.share_target.length &&
                                                            !e.shareDisable,
                                                          expression:
                                                            "record.share_target && record.share_target.length != 0 && !shareDisable",
                                                        },
                                                      ],
                                                      staticClass: "text-primary",
                                                      on: {
                                                        click: function (t) {
                                                          e.shareDialog = !0;
                                                        },
                                                      },
                                                    },
                                                    [
                                                      e._v(
                                                        "已选择 (" +
                                                          e._s(e.record.share_target.length) +
                                                          ")",
                                                      ),
                                                    ],
                                                  ),
                                                  a("q-icon", {
                                                    directives: [
                                                      {
                                                        name: "show",
                                                        rawName: "v-show",
                                                        value:
                                                          e.record.share_target &&
                                                          0 != e.record.share_target.length &&
                                                          !e.shareDisable,
                                                        expression:
                                                          "record.share_target && record.share_target.length != 0 && !shareDisable",
                                                      },
                                                    ],
                                                    staticClass: "text-primary",
                                                    attrs: {
                                                      name: "keyboard_arrow_right",
                                                      size: "sm",
                                                    },
                                                  }),
                                                  a(
                                                    "span",
                                                    {
                                                      directives: [
                                                        {
                                                          name: "show",
                                                          rawName: "v-show",
                                                          value: e.shareDisable,
                                                          expression: "shareDisable ",
                                                        },
                                                      ],
                                                      class:
                                                        0 == e.record.share_target.length
                                                          ? "text-grey"
                                                          : "text-primary",
                                                      on: { click: e.openSharetarget },
                                                    },
                                                    [
                                                      e._v(
                                                        "查看(" +
                                                          e._s(
                                                            e.record.share_target.length > 0
                                                              ? e.record.share_target.length
                                                              : "",
                                                          ) +
                                                          ")",
                                                      ),
                                                    ],
                                                  ),
                                                  a("q-icon", {
                                                    directives: [
                                                      {
                                                        name: "show",
                                                        rawName: "v-show",
                                                        value: e.shareDisable,
                                                        expression: "shareDisable ",
                                                      },
                                                    ],
                                                    class:
                                                      0 == e.record.share_target.length
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
                                    ],
                                    1,
                                  ),
                                ],
                                1,
                              )
                            : e._e(),
                          a("q-separator", {
                            staticClass: "bg-grey-3",
                            staticStyle: { height: "0.5rem" },
                          }),
                        ],
                        1,
                      ),
                      a(
                        "q-dialog",
                        {
                          attrs: { persistent: "", fullWidth: "", maximized: e.maximizedToggle },
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
                            "q-layout",
                            {
                              staticClass: "bg-white",
                              attrs: { view: "lHh lpr lFf", container: "" },
                            },
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
                                          e._v("设置通知对象"),
                                        ]),
                                        a("q-btn", {
                                          attrs: {
                                            unelevated: "",
                                            color: "primary",
                                            label: "完成",
                                          },
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
                                          permit: e.menuInfo ? e.menuInfo.edit_permit : null,
                                          "permit-mode": "E",
                                          "menu-id": e.menuInfo ? e.menuInfo.id : null,
                                        },
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
                        ],
                        1,
                      ),
                      a(
                        "q-dialog",
                        {
                          attrs: { persistent: "", fullWidth: "", maximized: e.maximizedToggle },
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
                            "q-layout",
                            {
                              staticClass: "bg-white",
                              attrs: { view: "lHh lpr lFf", container: "" },
                            },
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
                                          e._v("设置共享对象"),
                                        ]),
                                        a("q-btn", {
                                          attrs: {
                                            unelevated: "",
                                            color: "primary",
                                            label: "完成",
                                          },
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
                        ],
                        1,
                      ),
                      a(
                        "q-dialog",
                        {
                          attrs: { maximized: e.maximizedToggle },
                          model: {
                            value: e.compositeShareDialog,
                            callback: function (t) {
                              e.compositeShareDialog = t;
                            },
                            expression: "compositeShareDialog",
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
                                  a("div", { staticClass: "text-h6" }, [e._v("共享对象")]),
                                  a("q-btn", {
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
                              a("q-separator"),
                              a(
                                "q-card-section",
                                [
                                  a("neu-view-assigned-teacher", {
                                    attrs: { value: e.record.share_target },
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
              e.menuInfo
                ? a("q-footer", { staticClass: "bg-white text-primary", attrs: { bordered: "" } }, [
                    a(
                      "div",
                      { staticClass: "row justify-between" },
                      [
                        a("q-btn", {
                          staticStyle: { width: "40%", height: "2.8rem" },
                          attrs: {
                            flat: "",
                            color: "grey",
                            label: "取消",
                            to: "/teacher/notice/index",
                          },
                        }),
                        a("q-btn", {
                          staticClass: "bg-primary",
                          staticStyle: { width: "60%", height: "2.8rem" },
                          attrs: { flat: "", unelevated: "", color: "white", label: "发布" },
                          on: { click: e.submitForm },
                        }),
                      ],
                      1,
                    ),
                  ])
                : e._e(),
            ],
            1,
          );
        },
        s = [],
        i = (a("c975"), a("baa5"), a("13d5"), a("a434"), a("ddb0"), a("ded3")),
        o = a.n(i),
        n = a("f395"),
        l = a("9a3d"),
        c = a("5333"),
        d = a("ad56"),
        m = {
          name: "NoticeNew",
          components: {
            NeuAssignStudent: n["a"],
            NeuAssignTeacher: l["a"],
            NeuViewAssignedTeacher: c["a"],
          },
          data() {
            return {
              editorToolBar: JSON.parse(window.localStorage.editorToolBar),
              editorFonts: JSON.parse(window.localStorage.editorFonts),
              menuInfo: null,
              uploader: window.localStorage.server + this.$appConf.fileUploader,
              noticePriorityList: [],
              record: {
                notice_priority: "N",
                title: "",
                detail: "",
                attachment: [],
                feedback_deadline: "",
                confirm_flag: 0,
                fixed_time_flag: 0,
                fixed_time: "",
                task_target: [],
                share_target: [],
                dep_no: null,
                stu_manage_flag: 0,
                composite_id: null,
              },
              assignDialog: !1,
              shareDialog: !1,
              taskTargetDialog: !1,
              maximizedToggle: !0,
              dep_no: JSON.parse(localStorage.getItem("userinfo")).dep_no,
              depoptions: [],
              cId: this.$route.query.compositeId,
              compositeShareDialog: !1,
              shareDisable: !1,
              isHarmonyOS: !1,
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
              this.$axiosAction("/api/public.api", {
                action: "queryResultOfFunction",
                functionName: "basic.f_query_option_list('notice_priority')",
              }).then((e) => {
                0 === e.data.code && (this.noticePriorityList = e.data.list);
              }),
              this.$route.params && this.$route.params.record
                ? (this.getDepList(2),
                  (this.record = this.$route.params.record),
                  (this.record.attachment = this.record.attachment ? this.record.attachment : []),
                  (this.record.task_target = this.record.task_target
                    ? this.record.task_target
                    : []),
                  (this.record.share_target = this.record.share_target
                    ? this.record.share_target
                    : []))
                : this.getDepList(1),
              window.history &&
                window.history.pushState &&
                (history.pushState(null, null, document.URL),
                window.addEventListener("popstate", this.goBack, !1)),
              this.$route.params &&
                this.$route.params.taskTarget &&
                (this.record.task_target = this.$route.params.taskTarget),
              null !== this.cId &&
                void 0 !== this.cId &&
                ((this.record.title = this.$route.query.compositeTitle + "-" + this.menuInfo.title),
                (this.record.share_target = this.$route.params.share_target
                  ? this.$route.params.share_target
                  : []),
                (this.shareDisable = !0)),
              this.detectOperatingSystem());
          },
          methods: {
            detectOperatingSystem() {
              const e = navigator.userAgent.toLowerCase();
              e.indexOf("harmonyos") >= 0 || e.indexOf("huawei") >= 0 || e.indexOf("emui") >= 0
                ? (this.isHarmonyOS = !0)
                : (e.indexOf("android") >= 0 || e.indexOf("linux") >= 0) && (this.isHarmonyOS = !1);
            },
            matchingUploadedFiles(e, t) {
              return e.reduce(
                (e, a) =>
                  t && t.length > 0
                    ? 0 ===
                      t.reduce((e, t) => {
                        if (t.xhr.response) {
                          const r = JSON.parse(t.xhr.response);
                          return r.servername === a.servername ? e + 1 : e;
                        }
                        return e;
                      }, 0)
                      ? e.concat(a)
                      : e
                    : e.concat(a),
                [],
              );
            },
            afterUploaded(e) {
              const t = JSON.parse(e.xhr.response);
              t.error
                ? this.$showErrorNotify(t.error)
                : this.record.attachment
                  ? this.record.attachment.push(t)
                  : (this.record.attachment = [t]);
            },
            checkFile(e) {
              return e.filter((e) => {
                if (e.size >= 10485760)
                  return (this.$showErrorNotify("文件大小应限制在10M以内"), !1);
                const t = e.name.lastIndexOf(".");
                if (!(t > 0)) return (this.$showErrorNotify("不支持该类型文件上传"), !1);
                {
                  const a = e.name.substring(t + 1).toLowerCase();
                  if (-1 === this.$appConf.fileExts.indexOf(a))
                    return (this.$showErrorNotify("不支持该类型文件上传"), !1);
                }
                return !0;
              });
            },
            onRejected(e) {
              this.$q.notify({ type: "negative", message: `${e.length}份文件不符合格式限制！` });
            },
            afterRemoved(e) {
              for (const t of e) {
                const e = JSON.parse(t.xhr.response);
                this.removeFile(e.servername);
              }
            },
            removeFile(e) {
              const t = this.record.attachment.findIndex((t) => t.servername === e);
              this.record.attachment.splice(t, 1);
            },
            downloadUploaderFile(e) {
              const t = JSON.parse(e.xhr.response);
              Object(d["c"])(t.link, t.srcname);
            },
            downloadFile(e, t) {
              Object(d["c"])(e, t);
            },
            saveRecord() {
              if (!this.record.detail) return void this.$showErrorNotify("请填写通知正文");
              if (!this.record.task_target || 0 === this.record.task_target.length)
                return void this.$showErrorNotify("请设置通知对象");
              (("" !== this.record.dep_no && void 0 !== this.record.dep_no) ||
                (this.record.dep_no = null),
                this.$q.loading.show());
              const e = o()({}, this.record);
              ((e.attachment =
                e.attachment && e.attachment.length > 0 ? JSON.stringify(e.attachment) : null),
                (e.task_target = JSON.stringify(e.task_target)),
                (e.share_target =
                  e.share_target && e.share_target.length > 0
                    ? JSON.stringify(e.share_target)
                    : null),
                null !== this.cId && void 0 !== this.cId
                  ? (e.composite_id = this.$route.query.compositeId)
                  : (e.composite_id = this.record.composite_id),
                this.$axiosAction("/api/teacher/notice/notice.api", o()({ action: "insert" }, e))
                  .then((e) => {
                    (0 === e.data.code && this.goBack(), this.$q.loading.hide());
                  })
                  .catch((e) => {
                    this.$q.loading.hide();
                  }));
            },
            goBack() {
              null !== this.cId && void 0 !== this.cId
                ? this.$router.push("/teacher/composite/detail?id=" + this.$route.query.compositeId)
                : this.$router.push("/teacher/notice/index");
            },
            submitForm() {
              this.$refs.form.submit();
            },
            getDepList(e) {
              this.$axiosAction("/api/public.api", {
                action: "queryResultOfFunction",
                functionName: "basic.f_query_department_list()",
              })
                .then((t) => {
                  0 === t.data.code &&
                    ((this.depoptions = t.data.list),
                    1 === e &&
                      (this.record.dep_no = this.depoptions.find(
                        (e) => e.value === this.dep_no,
                      ).value));
                })
                .catch((e) => {
                  this.options = [];
                });
            },
            openSharetarget() {
              this.compositeShareDialog = !0;
            },
          },
        },
        u = m,
        h = a("2877"),
        p = a("4d5a"),
        f = a("e359"),
        g = a("65c6"),
        _ = a("9c40"),
        q = a("6ac5"),
        v = a("09e3"),
        b = a("9989"),
        w = a("0378"),
        k = a("f09f"),
        x = a("1c1c"),
        y = a("66e5"),
        C = a("4074"),
        D = a("0170"),
        S = a("eb85"),
        $ = a("ddd8"),
        N = a("27f9"),
        I = a("d66b"),
        F = a("ee89"),
        O = a("cc04"),
        Q = a("05c0"),
        T = a("8572"),
        z = a("0016"),
        H = a("7cbe"),
        Y = a("52ee"),
        j = a("ca78"),
        L = a("9564"),
        E = a("24e8"),
        J = a("a370"),
        U = a("7ff0"),
        M = a("7f67"),
        P = a("eebe"),
        A = a.n(P),
        R = Object(h["a"])(u, r, s, !1, null, null, null);
      t["default"] = R.exports;
      (A()(R, "components", {
        QLayout: p["a"],
        QHeader: f["a"],
        QToolbar: g["a"],
        QBtn: _["a"],
        QToolbarTitle: q["a"],
        QPageContainer: v["a"],
        QPage: b["a"],
        QForm: w["a"],
        QCard: k["a"],
        QList: x["a"],
        QItem: y["a"],
        QItemSection: C["a"],
        QItemLabel: D["a"],
        QSeparator: S["a"],
        QSelect: $["a"],
        QInput: N["a"],
        QEditor: I["a"],
        QUploader: F["a"],
        QUploaderAddTrigger: O["a"],
        QTooltip: Q["a"],
        QField: T["a"],
        QIcon: z["a"],
        QPopupProxy: H["a"],
        QDate: Y["a"],
        QTime: j["a"],
        QToggle: L["a"],
        QDialog: E["a"],
        QCardSection: J["a"],
        QFooter: U["a"],
      }),
        A()(R, "directives", { ClosePopup: M["a"] }));
    },
  },
]);
