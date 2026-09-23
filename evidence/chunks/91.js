(window["webpackJsonp"] = window["webpackJsonp"] || []).push([
  [91],
  {
    8060: function (e, t, i) {
      "use strict";
      i.r(t);
      var s = function () {
          var e = this,
            t = e.$createElement,
            i = e._self._c || t;
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
                        on: { click: e.goBack },
                      }),
                      e.menuInfo
                        ? i("q-toolbar-title", [e._v("新建" + e._s(e.menuInfo.title))])
                        : e._e(),
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
                      e.menuInfo
                        ? e._e()
                        : i(
                            "div",
                            {
                              staticClass:
                                "text-h6 text-bold q-mb-md row justify-center full-width",
                            },
                            [e._v("\n          您没有当前页面访问权限\n      ")],
                          ),
                      i(
                        "q-form",
                        { ref: "form", staticClass: "full-width", on: { submit: e.saveRecord } },
                        [
                          i(
                            "q-card",
                            { staticClass: "full-width row", attrs: { flat: "" } },
                            [
                              i(
                                "q-list",
                                { staticClass: "full-width" },
                                [
                                  i(
                                    "q-item",
                                    [
                                      i(
                                        "q-item-section",
                                        [
                                          i("q-item-label", { staticClass: "text-bold" }, [
                                            e._v(e._s((e.menuInfo || {}).title) + "通知内容"),
                                          ]),
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
                                      i(
                                        "q-item-section",
                                        { attrs: { avatar: "" } },
                                        [
                                          i(
                                            "q-item-label",
                                            { staticClass: "neu-css-before-red-asterisk" },
                                            [e._v("名称")],
                                          ),
                                        ],
                                        1,
                                      ),
                                      i(
                                        "q-item-section",
                                        [
                                          i("q-input", {
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
                                  i("q-separator"),
                                  i(
                                    "q-item",
                                    [
                                      i("q-item-section", { attrs: { avatar: "" } }, [
                                        i("div", [
                                          e._v("\n                发布单位\n              "),
                                        ]),
                                      ]),
                                      i(
                                        "q-item-section",
                                        [
                                          i("q-select", {
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
                                  i("q-separator"),
                                  i(
                                    "q-item",
                                    [
                                      i(
                                        "q-item-section",
                                        [
                                          i(
                                            "q-item-label",
                                            { staticClass: "neu-css-before-red-asterisk q-my-sm" },
                                            [e._v("说明")],
                                          ),
                                          i("q-editor", {
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
                                  i("q-separator"),
                                  i(
                                    "q-item",
                                    [
                                      i(
                                        "q-item-section",
                                        [
                                          i("q-item-label", { staticClass: "q-my-sm" }, [
                                            e._v("附件"),
                                          ]),
                                          i(
                                            "q-item-label",
                                            { staticClass: "q-mb-sm", attrs: { caption: "" } },
                                            [e._v("附件格式支持：Word、Excel、PowerPoint、PDF")],
                                          ),
                                          0 == e.isHarmonyOS
                                            ? i("q-uploader", {
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
                                                          i(
                                                            "div",
                                                            {
                                                              staticClass:
                                                                "row no-wrap items-center q-pa-sm q-gutter-xs",
                                                            },
                                                            [
                                                              i("div", { staticClass: "col" }, [
                                                                e._v("附件上传(10M以内)"),
                                                              ]),
                                                              t.canAddFiles
                                                                ? i(
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
                                                                      i("q-uploader-add-trigger"),
                                                                      i("q-tooltip", [
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
                                                          i(
                                                            "q-list",
                                                            { attrs: { separator: "" } },
                                                            [
                                                              e._l(t.files, function (s) {
                                                                return i(
                                                                  "q-item",
                                                                  { key: s.name },
                                                                  [
                                                                    i(
                                                                      "q-item-section",
                                                                      [
                                                                        i(
                                                                          "q-item-label",
                                                                          {
                                                                            staticClass:
                                                                              "full-width ellipsis cursor-pointer",
                                                                            on: {
                                                                              click: function (t) {
                                                                                return e.downloadUploaderFile(
                                                                                  s,
                                                                                );
                                                                              },
                                                                            },
                                                                          },
                                                                          [
                                                                            e._v(
                                                                              "\n                            " +
                                                                                e._s(s.name) +
                                                                                "\n                          ",
                                                                            ),
                                                                          ],
                                                                        ),
                                                                      ],
                                                                      1,
                                                                    ),
                                                                    i(
                                                                      "q-item-section",
                                                                      { attrs: { side: "" } },
                                                                      [
                                                                        i(
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
                                                                              click: function (e) {
                                                                                return t.removeFile(
                                                                                  s,
                                                                                );
                                                                              },
                                                                            },
                                                                          },
                                                                          [
                                                                            i("q-tooltip", [
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
                                                                  return i(
                                                                    "q-item",
                                                                    { key: t.servername },
                                                                    [
                                                                      i(
                                                                        "q-item-section",
                                                                        [
                                                                          i(
                                                                            "q-item-label",
                                                                            {
                                                                              staticClass:
                                                                                "full-width ellipsis cursor-pointer",
                                                                              on: {
                                                                                click: function (
                                                                                  i,
                                                                                ) {
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
                                                                                  e._s(t.srcname) +
                                                                                  "\n                          ",
                                                                              ),
                                                                            ],
                                                                          ),
                                                                        ],
                                                                        1,
                                                                      ),
                                                                      i(
                                                                        "q-item-section",
                                                                        { attrs: { side: "" } },
                                                                        [
                                                                          i(
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
                                                                                  i,
                                                                                ) {
                                                                                  return e.removeFile(
                                                                                    t.servername,
                                                                                  );
                                                                                },
                                                                              },
                                                                            },
                                                                            [
                                                                              i("q-tooltip", [
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
                                            ? i("q-uploader", {
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
                                                          i(
                                                            "div",
                                                            {
                                                              staticClass:
                                                                "row no-wrap items-center q-pa-sm q-gutter-xs",
                                                            },
                                                            [
                                                              i("div", { staticClass: "col" }, [
                                                                e._v("附件上传(10M以内)"),
                                                              ]),
                                                              t.canAddFiles
                                                                ? i(
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
                                                                      i("q-uploader-add-trigger"),
                                                                      i("q-tooltip", [
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
                                                          i(
                                                            "q-list",
                                                            { attrs: { separator: "" } },
                                                            [
                                                              e._l(t.files, function (s) {
                                                                return i(
                                                                  "q-item",
                                                                  { key: s.name },
                                                                  [
                                                                    i(
                                                                      "q-item-section",
                                                                      [
                                                                        i(
                                                                          "q-item-label",
                                                                          {
                                                                            staticClass:
                                                                              "full-width ellipsis cursor-pointer",
                                                                            on: {
                                                                              click: function (t) {
                                                                                return e.downloadUploaderFile(
                                                                                  s,
                                                                                );
                                                                              },
                                                                            },
                                                                          },
                                                                          [
                                                                            e._v(
                                                                              "\n                            " +
                                                                                e._s(s.name) +
                                                                                "\n                          ",
                                                                            ),
                                                                          ],
                                                                        ),
                                                                      ],
                                                                      1,
                                                                    ),
                                                                    i(
                                                                      "q-item-section",
                                                                      { attrs: { side: "" } },
                                                                      [
                                                                        i(
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
                                                                              click: function (e) {
                                                                                return t.removeFile(
                                                                                  s,
                                                                                );
                                                                              },
                                                                            },
                                                                          },
                                                                          [
                                                                            i("q-tooltip", [
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
                                                                  return i(
                                                                    "q-item",
                                                                    { key: t.servername },
                                                                    [
                                                                      i(
                                                                        "q-item-section",
                                                                        [
                                                                          i(
                                                                            "q-item-label",
                                                                            {
                                                                              staticClass:
                                                                                "full-width ellipsis cursor-pointer",
                                                                              on: {
                                                                                click: function (
                                                                                  i,
                                                                                ) {
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
                                                                                  e._s(t.srcname) +
                                                                                  "\n                          ",
                                                                              ),
                                                                            ],
                                                                          ),
                                                                        ],
                                                                        1,
                                                                      ),
                                                                      i(
                                                                        "q-item-section",
                                                                        { attrs: { side: "" } },
                                                                        [
                                                                          i(
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
                                                                                  i,
                                                                                ) {
                                                                                  return e.removeFile(
                                                                                    t.servername,
                                                                                  );
                                                                                },
                                                                              },
                                                                            },
                                                                            [
                                                                              i("q-tooltip", [
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
                          ),
                          i(
                            "q-card",
                            { staticClass: "full-width row q-mt-sm", attrs: { flat: "" } },
                            [
                              i(
                                "q-list",
                                { staticClass: "full-width" },
                                [
                                  i(
                                    "q-item",
                                    [
                                      i(
                                        "q-item-section",
                                        [
                                          i("q-item-label", { staticClass: "text-bold" }, [
                                            e._v("执行频率"),
                                          ]),
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
                                      i(
                                        "q-item-section",
                                        { attrs: { avatar: "" } },
                                        [
                                          i(
                                            "q-item-label",
                                            { staticClass: "neu-css-before-red-asterisk" },
                                            [e._v(e._s((e.menuInfo || {}).title) + "频率")],
                                          ),
                                        ],
                                        1,
                                      ),
                                      i(
                                        "q-item-section",
                                        [
                                          i(
                                            "q-item-label",
                                            [
                                              i("q-select", {
                                                attrs: {
                                                  dense: "",
                                                  outlined: "",
                                                  "emit-value": "",
                                                  "map-options": "",
                                                  options: e.frequencyList,
                                                },
                                                model: {
                                                  value: e.record.frequency,
                                                  callback: function (t) {
                                                    e.$set(e.record, "frequency", t);
                                                  },
                                                  expression: "record.frequency",
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
                                  i("q-separator"),
                                  "S" == e.record.frequency
                                    ? i(
                                        "q-item",
                                        [
                                          i(
                                            "q-item-section",
                                            { attrs: { avatar: "" } },
                                            [
                                              i(
                                                "q-item-label",
                                                { staticClass: "neu-css-before-red-asterisk" },
                                                [e._v("开始时间")],
                                              ),
                                            ],
                                            1,
                                          ),
                                          i(
                                            "q-item-section",
                                            [
                                              i("q-field", {
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
                                                  value: e.record.single_begin_time,
                                                },
                                                scopedSlots: e._u(
                                                  [
                                                    {
                                                      key: "control",
                                                      fn: function () {
                                                        return [
                                                          e._v(e._s(e.record.single_begin_time)),
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
                                                                              e.record
                                                                                .single_begin_time,
                                                                            callback: function (t) {
                                                                              e.$set(
                                                                                e.record,
                                                                                "single_begin_time",
                                                                                t,
                                                                              );
                                                                            },
                                                                            expression:
                                                                              "record.single_begin_time",
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
                                                                              e.record
                                                                                .single_begin_time,
                                                                            callback: function (t) {
                                                                              e.$set(
                                                                                e.record,
                                                                                "single_begin_time",
                                                                                t,
                                                                              );
                                                                            },
                                                                            expression:
                                                                              "record.single_begin_time",
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
                                                  212698312,
                                                ),
                                              }),
                                            ],
                                            1,
                                          ),
                                        ],
                                        1,
                                      )
                                    : e._e(),
                                  "S" == e.record.frequency ? i("q-separator") : e._e(),
                                  "S" == e.record.frequency
                                    ? i(
                                        "q-item",
                                        [
                                          i(
                                            "q-item-section",
                                            { attrs: { avatar: "" } },
                                            [
                                              i(
                                                "q-item-label",
                                                { staticClass: "neu-css-before-red-asterisk" },
                                                [e._v("截止时间")],
                                              ),
                                            ],
                                            1,
                                          ),
                                          i(
                                            "q-item-section",
                                            [
                                              i("q-field", {
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
                                                    function (t) {
                                                      return (
                                                        t > e.record.single_begin_time ||
                                                        "截止时间应在开始时间之后"
                                                      );
                                                    },
                                                  ],
                                                  value: e.record.single_end_time,
                                                },
                                                scopedSlots: e._u(
                                                  [
                                                    {
                                                      key: "control",
                                                      fn: function () {
                                                        return [
                                                          e._v(e._s(e.record.single_end_time)),
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
                                                                              e.record
                                                                                .single_end_time,
                                                                            callback: function (t) {
                                                                              e.$set(
                                                                                e.record,
                                                                                "single_end_time",
                                                                                t,
                                                                              );
                                                                            },
                                                                            expression:
                                                                              "record.single_end_time",
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
                                                                              e.record
                                                                                .single_end_time,
                                                                            callback: function (t) {
                                                                              e.$set(
                                                                                e.record,
                                                                                "single_end_time",
                                                                                t,
                                                                              );
                                                                            },
                                                                            expression:
                                                                              "record.single_end_time",
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
                                                  1003576768,
                                                ),
                                              }),
                                            ],
                                            1,
                                          ),
                                        ],
                                        1,
                                      )
                                    : e._e(),
                                  "L" == e.record.frequency
                                    ? i(
                                        "q-item",
                                        [
                                          i(
                                            "q-item-section",
                                            [
                                              i(
                                                "q-item-label",
                                                {
                                                  staticClass:
                                                    "neu-css-before-red-asterisk q-my-sm",
                                                },
                                                [
                                                  e._v(
                                                    "循环" +
                                                      e._s((e.menuInfo || {}).title) +
                                                      "频率",
                                                  ),
                                                ],
                                              ),
                                              i(
                                                "q-item-label",
                                                e._l(
                                                  [
                                                    { value: "1", label: "周一" },
                                                    { value: "2", label: "周二" },
                                                    { value: "3", label: "周三" },
                                                    { value: "4", label: "周四" },
                                                    { value: "5", label: "周五" },
                                                    { value: "6", label: "周六" },
                                                    { value: "0", label: "周日" },
                                                  ],
                                                  function (t) {
                                                    return i("q-checkbox", {
                                                      key: t.value,
                                                      staticClass: "q-mr-sm",
                                                      attrs: {
                                                        dense: "",
                                                        "keep-color": "",
                                                        val: t.value,
                                                        label: t.label,
                                                      },
                                                      model: {
                                                        value: e.record.loop_frequency,
                                                        callback: function (t) {
                                                          e.$set(e.record, "loop_frequency", t);
                                                        },
                                                        expression: "record.loop_frequency",
                                                      },
                                                    });
                                                  },
                                                ),
                                                1,
                                              ),
                                            ],
                                            1,
                                          ),
                                        ],
                                        1,
                                      )
                                    : e._e(),
                                  "L" == e.record.frequency ? i("q-separator") : e._e(),
                                  "L" == e.record.frequency
                                    ? i(
                                        "q-item",
                                        [
                                          i(
                                            "q-item-section",
                                            { attrs: { avatar: "" } },
                                            [
                                              i(
                                                "q-item-label",
                                                { staticClass: "neu-css-before-red-asterisk" },
                                                [e._v("开始日期")],
                                              ),
                                            ],
                                            1,
                                          ),
                                          i(
                                            "q-item-section",
                                            [
                                              i("q-field", {
                                                staticClass: "full-width",
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
                                                  value: e.record.loop_begin_date,
                                                },
                                                scopedSlots: e._u(
                                                  [
                                                    {
                                                      key: "control",
                                                      fn: function () {
                                                        return [
                                                          e._v(e._s(e.record.loop_begin_date)),
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
                                                                            mask: "YYYY-MM-DD",
                                                                          },
                                                                          model: {
                                                                            value:
                                                                              e.record
                                                                                .loop_begin_date,
                                                                            callback: function (t) {
                                                                              e.$set(
                                                                                e.record,
                                                                                "loop_begin_date",
                                                                                t,
                                                                              );
                                                                            },
                                                                            expression:
                                                                              "record.loop_begin_date",
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
                                                  3353248819,
                                                ),
                                              }),
                                            ],
                                            1,
                                          ),
                                        ],
                                        1,
                                      )
                                    : e._e(),
                                  "L" == e.record.frequency ? i("q-separator") : e._e(),
                                  "L" == e.record.frequency
                                    ? i(
                                        "q-item",
                                        [
                                          i(
                                            "q-item-section",
                                            { attrs: { avatar: "" } },
                                            [
                                              i(
                                                "q-item-label",
                                                { staticClass: "neu-css-before-red-asterisk" },
                                                [e._v("截止日期")],
                                              ),
                                            ],
                                            1,
                                          ),
                                          i(
                                            "q-item-section",
                                            [
                                              i("q-field", {
                                                staticClass: "full-width",
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
                                                        t > e.record.loop_begin_date ||
                                                        "截止日期应在开始日期之后"
                                                      );
                                                    },
                                                  ],
                                                  value: e.record.loop_end_date,
                                                },
                                                scopedSlots: e._u(
                                                  [
                                                    {
                                                      key: "control",
                                                      fn: function () {
                                                        return [e._v(e._s(e.record.loop_end_date))];
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
                                                                            value:
                                                                              e.record
                                                                                .loop_end_date,
                                                                            callback: function (t) {
                                                                              e.$set(
                                                                                e.record,
                                                                                "loop_end_date",
                                                                                t,
                                                                              );
                                                                            },
                                                                            expression:
                                                                              "record.loop_end_date",
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
                                                  2647163443,
                                                ),
                                              }),
                                            ],
                                            1,
                                          ),
                                        ],
                                        1,
                                      )
                                    : e._e(),
                                  "L" == e.record.frequency ? i("q-separator") : e._e(),
                                  "L" == e.record.frequency
                                    ? i(
                                        "q-item",
                                        [
                                          i(
                                            "q-item-section",
                                            { attrs: { avatar: "" } },
                                            [
                                              i(
                                                "q-item-label",
                                                { staticClass: "neu-css-before-red-asterisk" },
                                                [e._v("开始时间")],
                                              ),
                                            ],
                                            1,
                                          ),
                                          i(
                                            "q-item-section",
                                            [
                                              i("q-field", {
                                                staticClass: "full-width",
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
                                                  value: e.record.loop_begin_time,
                                                },
                                                scopedSlots: e._u(
                                                  [
                                                    {
                                                      key: "control",
                                                      fn: function () {
                                                        return [
                                                          e._v(e._s(e.record.loop_begin_time)),
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
                                                                            mask: "HH:mm",
                                                                            format24h: "",
                                                                          },
                                                                          model: {
                                                                            value:
                                                                              e.record
                                                                                .loop_begin_time,
                                                                            callback: function (t) {
                                                                              e.$set(
                                                                                e.record,
                                                                                "loop_begin_time",
                                                                                t,
                                                                              );
                                                                            },
                                                                            expression:
                                                                              "record.loop_begin_time",
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
                                                  2154724003,
                                                ),
                                              }),
                                            ],
                                            1,
                                          ),
                                        ],
                                        1,
                                      )
                                    : e._e(),
                                  "L" == e.record.frequency ? i("q-separator") : e._e(),
                                  "L" == e.record.frequency
                                    ? i(
                                        "q-item",
                                        [
                                          i(
                                            "q-item-section",
                                            { attrs: { avatar: "" } },
                                            [
                                              i(
                                                "q-item-label",
                                                { staticClass: "neu-css-before-red-asterisk" },
                                                [e._v("结束时间")],
                                              ),
                                            ],
                                            1,
                                          ),
                                          i(
                                            "q-item-section",
                                            [
                                              i("q-field", {
                                                staticClass: "full-width",
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
                                                        t > e.record.loop_begin_time ||
                                                        "截止时间应在开始时间之后"
                                                      );
                                                    },
                                                  ],
                                                  value: e.record.loop_end_time,
                                                },
                                                scopedSlots: e._u(
                                                  [
                                                    {
                                                      key: "control",
                                                      fn: function () {
                                                        return [e._v(e._s(e.record.loop_end_time))];
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
                                                                            mask: "HH:mm",
                                                                            format24h: "",
                                                                          },
                                                                          model: {
                                                                            value:
                                                                              e.record
                                                                                .loop_end_time,
                                                                            callback: function (t) {
                                                                              e.$set(
                                                                                e.record,
                                                                                "loop_end_time",
                                                                                t,
                                                                              );
                                                                            },
                                                                            expression:
                                                                              "record.loop_end_time",
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
                                                  3580282019,
                                                ),
                                              }),
                                            ],
                                            1,
                                          ),
                                        ],
                                        1,
                                      )
                                    : e._e(),
                                  "A" == e.record.frequency
                                    ? i(
                                        "q-item",
                                        [
                                          i(
                                            "q-item-section",
                                            { attrs: { avatar: "" } },
                                            [
                                              i(
                                                "q-item-label",
                                                { staticClass: "neu-css-before-red-asterisk" },
                                                [e._v("开始截止时间")],
                                              ),
                                            ],
                                            1,
                                          ),
                                          i("q-item-section"),
                                          i(
                                            "q-item-section",
                                            { attrs: { side: "" } },
                                            [
                                              i(
                                                "q-item-label",
                                                {
                                                  staticClass: "text-primary",
                                                  on: { click: e.addAppointedDate },
                                                },
                                                [e._v("添加")],
                                              ),
                                            ],
                                            1,
                                          ),
                                        ],
                                        1,
                                      )
                                    : e._e(),
                                  e._l(
                                    "A" == e.record.frequency ? e.record.appointed_date : [],
                                    function (t, s) {
                                      return i(
                                        "q-item",
                                        { key: t.begin_time },
                                        [
                                          i(
                                            "q-item-section",
                                            { attrs: { avatar: "" } },
                                            [i("q-item-label", [e._v("时间段" + e._s(s + 1))])],
                                            1,
                                          ),
                                          i(
                                            "q-item-section",
                                            [
                                              i(
                                                "q-item-label",
                                                [
                                                  i("q-field", {
                                                    staticClass: "full-width",
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
                                                      value: t.begin_time,
                                                    },
                                                    scopedSlots: e._u(
                                                      [
                                                        {
                                                          key: "control",
                                                          fn: function () {
                                                            return [e._v(e._s(t.begin_time))];
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
                                                                                value: t.begin_time,
                                                                                callback: function (
                                                                                  i,
                                                                                ) {
                                                                                  e.$set(
                                                                                    t,
                                                                                    "begin_time",
                                                                                    i,
                                                                                  );
                                                                                },
                                                                                expression:
                                                                                  "item.begin_time",
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
                                                                                value: t.begin_time,
                                                                                callback: function (
                                                                                  i,
                                                                                ) {
                                                                                  e.$set(
                                                                                    t,
                                                                                    "begin_time",
                                                                                    i,
                                                                                  );
                                                                                },
                                                                                expression:
                                                                                  "item.begin_time",
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
                                                      !0,
                                                    ),
                                                  }),
                                                ],
                                                1,
                                              ),
                                              i(
                                                "q-item-label",
                                                [
                                                  i("q-field", {
                                                    staticClass: "full-width",
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
                                                        function (e) {
                                                          return (
                                                            e > t.begin_time ||
                                                            "截止时间应在开始时间之后"
                                                          );
                                                        },
                                                      ],
                                                      value: t.end_time,
                                                    },
                                                    scopedSlots: e._u(
                                                      [
                                                        {
                                                          key: "control",
                                                          fn: function () {
                                                            return [e._v(e._s(t.end_time))];
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
                                                                                value: t.end_time,
                                                                                callback: function (
                                                                                  i,
                                                                                ) {
                                                                                  e.$set(
                                                                                    t,
                                                                                    "end_time",
                                                                                    i,
                                                                                  );
                                                                                },
                                                                                expression:
                                                                                  "item.end_time",
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
                                                                                value: t.end_time,
                                                                                callback: function (
                                                                                  i,
                                                                                ) {
                                                                                  e.$set(
                                                                                    t,
                                                                                    "end_time",
                                                                                    i,
                                                                                  );
                                                                                },
                                                                                expression:
                                                                                  "item.end_time",
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
                                                      !0,
                                                    ),
                                                  }),
                                                ],
                                                1,
                                              ),
                                            ],
                                            1,
                                          ),
                                          i(
                                            "q-item-section",
                                            { attrs: { side: "" } },
                                            [
                                              i(
                                                "q-item-label",
                                                {
                                                  directives: [
                                                    {
                                                      name: "show",
                                                      rawName: "v-show",
                                                      value: e.record.appointed_date.length > 1,
                                                      expression:
                                                        "record.appointed_date.length > 1",
                                                    },
                                                  ],
                                                  staticClass: "text-negative cursor-pointer",
                                                  on: {
                                                    click: function (t) {
                                                      return e.removeAppointedDate(s);
                                                    },
                                                  },
                                                },
                                                [
                                                  e._v("\n                  删除"),
                                                  i("q-tooltip", [e._v("删除该时间段")]),
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
                            ],
                            1,
                          ),
                          i(
                            "q-card",
                            { staticClass: "full-width row q-mt-sm", attrs: { flat: "" } },
                            [
                              i(
                                "q-list",
                                { staticClass: "full-width" },
                                [
                                  i(
                                    "q-item",
                                    [
                                      i(
                                        "q-item-section",
                                        [
                                          i("q-item-label", { staticClass: "text-bold" }, [
                                            e._v("通知设定"),
                                          ]),
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
                                      i(
                                        "q-item-section",
                                        { staticClass: "full-width" },
                                        [
                                          i(
                                            "q-item-label",
                                            { staticClass: "neu-css-before-red-asterisk" },
                                            [e._v("通知提前推送时间(分)")],
                                          ),
                                          i(
                                            "div",
                                            { staticClass: "full-width q-mt-lg" },
                                            [
                                              i("q-slider", {
                                                attrs: {
                                                  label: "",
                                                  "label-always": "",
                                                  min: 0,
                                                  max: 60,
                                                },
                                                model: {
                                                  value: e.record.in_advance,
                                                  callback: function (t) {
                                                    e.$set(e.record, "in_advance", t);
                                                  },
                                                  expression: "record.in_advance",
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
                          i(
                            "q-card",
                            { staticClass: "full-width row q-mt-sm", attrs: { flat: "" } },
                            [
                              i(
                                "q-list",
                                { staticClass: "full-width" },
                                [
                                  i(
                                    "q-item",
                                    [
                                      i(
                                        "q-item-section",
                                        { attrs: { avatar: "" } },
                                        [
                                          i(
                                            "q-item-label",
                                            { staticClass: "neu-css-before-red-asterisk" },
                                            [e._v(e._s((e.menuInfo || {}).title) + "对象")],
                                          ),
                                        ],
                                        1,
                                      ),
                                      i("q-item-section"),
                                      i(
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
                                                  directives: [
                                                    {
                                                      name: "show",
                                                      rawName: "v-show",
                                                      value:
                                                        !e.record.task_target ||
                                                        0 == e.record.task_target.length,
                                                      expression:
                                                        "!record.task_target || record.task_target.length == 0",
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
                                              i("q-icon", {
                                                directives: [
                                                  {
                                                    name: "show",
                                                    rawName: "v-show",
                                                    value:
                                                      !e.record.task_target ||
                                                      0 == e.record.task_target.length,
                                                    expression:
                                                      "!record.task_target || record.task_target.length == 0",
                                                  },
                                                ],
                                                staticClass: "text-grey",
                                                attrs: { name: "keyboard_arrow_right", size: "sm" },
                                              }),
                                              i(
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
                                                        "record.task_target && record.task_target.length != 0",
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
                                              i("q-icon", {
                                                directives: [
                                                  {
                                                    name: "show",
                                                    rawName: "v-show",
                                                    value:
                                                      e.record.task_target &&
                                                      0 != e.record.task_target.length,
                                                    expression:
                                                      "record.task_target && record.task_target.length != 0",
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
                                ],
                                1,
                              ),
                            ],
                            1,
                          ),
                          i(
                            "q-card",
                            { staticClass: "full-width row q-mt-sm", attrs: { flat: "" } },
                            [
                              i(
                                "q-list",
                                { staticClass: "full-width" },
                                [
                                  i(
                                    "q-item",
                                    [
                                      i(
                                        "q-item-section",
                                        { attrs: { avatar: "" } },
                                        [
                                          i("q-item-label", [
                                            e._v("无需" + e._s((e.menuInfo || {}).title) + "对象"),
                                          ]),
                                        ],
                                        1,
                                      ),
                                      i("q-item-section"),
                                      i(
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
                                                  directives: [
                                                    {
                                                      name: "show",
                                                      rawName: "v-show",
                                                      value:
                                                        !e.record.task_target_excluding ||
                                                        0 == e.record.task_target_excluding.length,
                                                      expression:
                                                        "!record.task_target_excluding || record.task_target_excluding.length == 0 ",
                                                    },
                                                  ],
                                                  staticClass: "text-grey",
                                                  on: {
                                                    click: function (t) {
                                                      e.taskTargetExcludingDialog = !0;
                                                    },
                                                  },
                                                },
                                                [e._v("选择")],
                                              ),
                                              i("q-icon", {
                                                directives: [
                                                  {
                                                    name: "show",
                                                    rawName: "v-show",
                                                    value:
                                                      !e.record.task_target_excluding ||
                                                      0 == e.record.task_target_excluding.length,
                                                    expression:
                                                      "!record.task_target_excluding || record.task_target_excluding.length == 0 ",
                                                  },
                                                ],
                                                staticClass: "text-grey",
                                                attrs: { name: "keyboard_arrow_right", size: "sm" },
                                              }),
                                              i(
                                                "span",
                                                {
                                                  directives: [
                                                    {
                                                      name: "show",
                                                      rawName: "v-show",
                                                      value:
                                                        e.record.task_target_excluding &&
                                                        0 != e.record.task_target_excluding.length,
                                                      expression:
                                                        "record.task_target_excluding && record.task_target_excluding.length != 0 ",
                                                    },
                                                  ],
                                                  staticClass: "text-primary",
                                                  on: {
                                                    click: function (t) {
                                                      e.taskTargetExcludingDialog = !0;
                                                    },
                                                  },
                                                },
                                                [
                                                  e._v(
                                                    "已选择 (" +
                                                      e._s(e.record.task_target_excluding.length) +
                                                      ")",
                                                  ),
                                                ],
                                              ),
                                              i("q-icon", {
                                                directives: [
                                                  {
                                                    name: "show",
                                                    rawName: "v-show",
                                                    value:
                                                      e.record.task_target_excluding &&
                                                      0 != e.record.task_target_excluding.length,
                                                    expression:
                                                      "record.task_target_excluding && record.task_target_excluding.length != 0 ",
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
                                ],
                                1,
                              ),
                            ],
                            1,
                          ),
                          i(
                            "q-card",
                            { staticClass: "full-width row q-mt-sm", attrs: { flat: "" } },
                            [
                              i(
                                "q-list",
                                { staticClass: "full-width" },
                                [
                                  i(
                                    "q-item",
                                    [
                                      i(
                                        "q-item-section",
                                        { attrs: { avatar: "" } },
                                        [i("q-item-label", [e._v("信息收集")])],
                                        1,
                                      ),
                                      i("q-item-section"),
                                      i(
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
                                                  staticClass: "text-primary",
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
                                              i("q-icon", {
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
                                  0 !== e.record.info_config.length
                                    ? i(
                                        "q-item",
                                        [
                                          i("q-item-section", [
                                            i("div", { staticClass: "row items-center" }, [
                                              i(
                                                "div",
                                                {
                                                  staticClass:
                                                    "col-12 col-md-2 col-sm-3 neu-css-after-colon neu-css-before-red-asterisk",
                                                  class: { "text-right": !e.$q.screen.lt.sm },
                                                },
                                                [e._v("信息收集项目")],
                                              ),
                                              i(
                                                "div",
                                                { staticClass: "col-12 col-md-10 col-sm-9" },
                                                e._l(e.record.info_config, function (t, s) {
                                                  return i(
                                                    "div",
                                                    {
                                                      key: s,
                                                      staticClass: "bg-grey-2 q-pa-sm q-mt-sm",
                                                    },
                                                    [
                                                      i("div", [
                                                        i(
                                                          "span",
                                                          { staticClass: "neu-css-after-colon" },
                                                          [e._v("第" + e._s(s + 1) + "题")],
                                                        ),
                                                        i(
                                                          "span",
                                                          {
                                                            staticClass:
                                                              "text-primary cursor-pointer q-ml-sm",
                                                            on: {
                                                              click: function (t) {
                                                                return e.editInfoConfig(s);
                                                              },
                                                            },
                                                          },
                                                          [e._v("编辑")],
                                                        ),
                                                        i(
                                                          "span",
                                                          {
                                                            staticClass:
                                                              "text-negative cursor-pointer q-ml-sm",
                                                            on: {
                                                              click: function (t) {
                                                                return e.deleteInfoConfig(s);
                                                              },
                                                            },
                                                          },
                                                          [e._v("删除")],
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
                                                                  e.record.info_config.length,
                                                                expression:
                                                                  "index + 1 != record.info_config.length",
                                                              },
                                                            ],
                                                            staticClass:
                                                              "text-primary cursor-pointer q-ml-sm",
                                                            on: {
                                                              click: function (t) {
                                                                return e.moveInfoConfig(s, 1);
                                                              },
                                                            },
                                                          },
                                                          [e._v("下移")],
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
                                                              click: function (t) {
                                                                return e.moveInfoConfig(s, -1);
                                                              },
                                                            },
                                                          },
                                                          [e._v("上移")],
                                                        ),
                                                      ]),
                                                      i("neu-widget", {
                                                        attrs: { config: t, viewMode: !0 },
                                                        model: {
                                                          value: e.infoModel[s],
                                                          callback: function (t) {
                                                            e.$set(e.infoModel, s, t);
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
                                            ]),
                                          ]),
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
                          i("q-separator", {
                            staticClass: "bg-grey-3",
                            staticStyle: { height: "0.5rem" },
                          }),
                        ],
                        1,
                      ),
                      i(
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
                                          e._v("设置填写对象"),
                                        ]),
                                        i("q-btn", {
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
                              i(
                                "q-page-container",
                                [
                                  i(
                                    "q-page",
                                    [
                                      i("neu-assign-teacher", {
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
                      i(
                        "q-dialog",
                        {
                          attrs: { persistent: "", fullWidth: "", maximized: e.maximizedToggle },
                          model: {
                            value: e.taskTargetExcludingDialog,
                            callback: function (t) {
                              e.taskTargetExcludingDialog = t;
                            },
                            expression: "taskTargetExcludingDialog",
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
                                          e._v("设置无需填写对象"),
                                        ]),
                                        i("q-btn", {
                                          attrs: {
                                            unelevated: "",
                                            color: "primary",
                                            label: "完成",
                                          },
                                          on: {
                                            click: function (t) {
                                              e.taskTargetExcludingDialog = !1;
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
                                      i("neu-assign-teacher", {
                                        model: {
                                          value: e.record.task_target_excluding,
                                          callback: function (t) {
                                            e.$set(e.record, "task_target_excluding", t);
                                          },
                                          expression: "record.task_target_excluding",
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
                          attrs: { persistent: "", maximized: e.maximizedToggle },
                          model: {
                            value: e.infoConfigDialog,
                            callback: function (t) {
                              e.infoConfigDialog = t;
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
                                i("div", { staticClass: "text-bold" }, [e._v("设置信息收集项目")]),
                              ]),
                              i(
                                "q-card-section",
                                [
                                  i("neu-define-widget", {
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
                      i(
                        "q-dialog",
                        {
                          attrs: { persistent: "", fullWidth: "" },
                          model: {
                            value: e.reviewerDialog,
                            callback: function (t) {
                              e.reviewerDialog = t;
                            },
                            expression: "reviewerDialog",
                          },
                        },
                        [
                          i(
                            "q-card",
                            { staticClass: "full-width", attrs: { flat: "" } },
                            [
                              i("q-card-section", [
                                i("div", { staticClass: "text-bold" }, [e._v("设置审批人员")]),
                              ]),
                              i(
                                "q-card-section",
                                [
                                  e.record.reviewer && e.record.reviewer.length > 0
                                    ? i("neu-assign-teacher", {
                                        model: {
                                          value: e.record.reviewer[e.reviewerIndex].teacher,
                                          callback: function (t) {
                                            e.$set(
                                              e.record.reviewer[e.reviewerIndex],
                                              "teacher",
                                              t,
                                            );
                                          },
                                          expression: "record.reviewer[reviewerIndex].teacher",
                                        },
                                      })
                                    : e._e(),
                                ],
                                1,
                              ),
                              i(
                                "q-card-section",
                                { staticClass: "q-gutter-sm row justify-end" },
                                [
                                  i("q-btn", {
                                    attrs: { unelevated: "", color: "primary", label: "完成" },
                                    on: {
                                      click: function (t) {
                                        e.reviewerDialog = !1;
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
                ],
                1,
              ),
              i("q-footer", { staticClass: "bg-white text-primary", attrs: { bordered: "" } }, [
                i(
                  "div",
                  { staticClass: "row justify-between" },
                  [
                    i("q-btn", {
                      staticStyle: { width: "40%", height: "2.8rem" },
                      attrs: {
                        flat: "",
                        color: "grey",
                        label: "取消",
                        to: "/teacher/message/index",
                      },
                    }),
                    i("q-btn", {
                      staticClass: "bg-primary",
                      staticStyle: { width: "60%", height: "2.8rem" },
                      attrs: { flat: "", unelevated: "", color: "white", label: "发布" },
                      on: { click: e.submitForm },
                    }),
                  ],
                  1,
                ),
              ]),
            ],
            1,
          );
        },
        r = [],
        a = (i("c975"), i("baa5"), i("13d5"), i("a434"), i("ddb0"), i("ded3")),
        o = i.n(a),
        n = i("9a3d"),
        l = i("8bef"),
        c = i("974f"),
        d = i("ad56"),
        u = {
          name: "MessageNew",
          components: { NeuAssignTeacher: n["a"], NeuDefineWidget: l["a"], NeuWidget: c["a"] },
          data() {
            return {
              editorToolBar: JSON.parse(window.localStorage.editorToolBar),
              editorFonts: JSON.parse(window.localStorage.editorFonts),
              menuInfo: null,
              uploader: window.localStorage.server + this.$appConf.fileUploader,
              frequencyList: [],
              applySwitchList: [],
              record: {
                apply_type: this.$route.query.apply_type,
                title: "",
                detail: "",
                attachment: [],
                frequency: "S",
                single_begin_time: "",
                single_end_time: "",
                loop_frequency: [],
                loop_begin_date: "",
                loop_end_date: "",
                loop_begin_time: "",
                loop_end_time: "",
                appointed_date: [{ begin_time: "", end_time: "" }],
                in_advance: 5,
                apply_switch: "M",
                task_target: [],
                task_target_excluding: [],
                info_config: [],
                reviewer: [],
                dep_no: null,
                composite_id: null,
              },
              taskTargetDialog: !1,
              taskTargetExcludingDialog: !1,
              shareDialog: !1,
              infoConfigDialog: !1,
              infoConfigIndex: 0,
              infoModel: [],
              reviewerDialog: !1,
              reviewerIndex: 0,
              maximizedToggle: !0,
              dep_no: JSON.parse(window.localStorage.getItem("userinfo")).dep_no,
              depoptions: [],
              counsellorlabel: localStorage.getItem("counsellorlabel"),
              cId: this.$route.query.compositeId,
              shareDisable: !1,
              isHarmonyOS: !1,
            };
          },
          destroyed() {
            window.removeEventListener("popstate", this.goBack, !1);
          },
          computed: {},
          mounted() {
            (window.localStorage.getItem("menu") &&
              (this.menuInfo = JSON.parse(window.localStorage.getItem("menu")).find(
                (e) => "message" === e.id,
              )),
              this.$axiosAction("/api/public.api", {
                action: "queryResultOfFunction",
                functionName: "basic.f_query_option_list('frequency')",
              }).then((e) => {
                0 === e.data.code && (this.frequencyList = e.data.list);
              }),
              this.$axiosAction("/api/public.api", {
                action: "queryResultOfFunction",
                functionName: "basic.f_query_option_list('apply_switch')",
              }).then((e) => {
                0 === e.data.code && (this.applySwitchList = e.data.list);
              }),
              this.$route.params && this.$route.params.record
                ? (this.getDepList(2),
                  (this.record = this.$route.params.record),
                  (this.record.appointed_date = this.record.appointed_date
                    ? this.record.appointed_date
                    : [{ begin_time: "", end_time: "" }]),
                  (this.record.attachment = this.record.attachment ? this.record.attachment : []),
                  (this.record.loop_frequency = this.record.loop_frequency
                    ? this.record.loop_frequency
                    : []),
                  (this.record.task_target = this.record.task_target
                    ? this.record.task_target
                    : []),
                  (this.record.task_target_excluding = this.record.task_target_excluding
                    ? this.record.task_target_excluding
                    : []),
                  (this.record.info_config = this.record.info_config
                    ? this.record.info_config
                    : []),
                  (this.record.reviewer = this.record.reviewer ? this.record.reviewer : []),
                  (this.record.composite_id = this.record.composite_id
                    ? this.record.composite_id
                    : null),
                  (this.shareDisable = null !== this.record.composite_id))
                : this.getDepList(1),
              window.history &&
                window.history.pushState &&
                (history.pushState(null, null, document.URL),
                window.addEventListener("popstate", this.goBack, !1)),
              this.$route.params &&
                this.$route.params.taskTarget &&
                (this.record.task_target = this.$route.params.taskTarget
                  ? this.$route.params.taskTarget
                  : []),
              null !== this.cId &&
                void 0 !== this.cId &&
                (void 0 !== this.$route.query.compositeTitle &&
                  (this.record.title =
                    this.$route.query.compositeTitle + "-" + this.menuInfo.title),
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
                (e, i) =>
                  t && t.length > 0
                    ? 0 ===
                      t.reduce((e, t) => {
                        if (t.xhr.response) {
                          const s = JSON.parse(t.xhr.response);
                          return s.servername === i.servername ? e + 1 : e;
                        }
                        return e;
                      }, 0)
                      ? e.concat(i)
                      : e
                    : e.concat(i),
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
                  const i = e.name.substring(t + 1).toLowerCase();
                  if (-1 === this.$appConf.fileExts.indexOf(i))
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
            addAppointedDate() {
              this.record.appointed_date.splice(this.record.appointed_date.length, 0, {
                begin_time: "",
                end_time: "",
              });
            },
            removeAppointedDate(e) {
              this.record.appointed_date.splice(e, 1);
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
            addReviewer(e) {
              (this.record.reviewer.splice(e, 0, { review_level: e + 1, teacher: [] }),
                (this.reviewerIndex = e),
                (this.reviewerDialog = !0));
            },
            editReviewer(e) {
              ((this.reviewerIndex = e), (this.reviewerDialog = !0));
            },
            deleteReviewer(e) {
              ((this.reviewerIndex = 0),
                (this.record.reviewer = this.record.reviewer.reduce(
                  (t, i, s) =>
                    e === s ? t : t.concat({ review_level: s + 1, teacher: i.teacher }),
                  [],
                )));
            },
            moveReviewer(e, t) {
              ((this.reviewerIndex = 0),
                this.record.reviewer.splice(e + t, 0, this.record.reviewer.splice(e, 1)[0]),
                (this.record.reviewer = this.record.reviewer.reduce(
                  (e, t, i) => e.concat({ review_level: i + 1, teacher: t.teacher }),
                  [],
                )));
            },
            saveRecord() {
              if (!this.record.detail) return void this.$showErrorNotify("请填写通知正文");
              if (!this.record.task_target || 0 === this.record.task_target.length)
                return void this.$showErrorNotify(`请设置${this.menuInfo.title}对象`);
              if (!this.record.info_config || 0 === this.record.info_config.length)
                return void this.$showErrorNotify("请设置信息收集项目");
              if (
                (("" !== this.record.dep_no && void 0 !== this.record.dep_no) ||
                  (this.record.dep_no = null),
                "A" === this.record.frequency)
              ) {
                const e = this.record.appointed_date.reduce(
                    (e, t) => e.concat(t.begin_time + "-" + t.end_time),
                    [],
                  ),
                  t = [...new Set(e)];
                if (e.length > t.length)
                  return this.$showErrorNotify("指定日期开始截止时间段不能重复！");
                const i = this.record.appointed_date.reduce((e, t) => e.concat(t.begin_time), []),
                  s = [...new Set(i)];
                if (i.length > s.length) return this.$showErrorNotify("指定日期开始时间不能重复！");
              }
              this.$q.loading.show();
              const e = o()({}, this.record);
              ((e.attachment =
                e.attachment && e.attachment.length > 0 ? JSON.stringify(e.attachment) : null),
                (e.task_target = JSON.stringify(e.task_target)),
                (e.task_target_excluding =
                  e.task_target_excluding && e.task_target_excluding.length > 0
                    ? JSON.stringify(e.task_target_excluding)
                    : null),
                (e.info_config =
                  e.info_config && e.info_config.length > 0 ? JSON.stringify(e.info_config) : null),
                (e.reviewer =
                  e.reviewer && e.reviewer.length > 0 ? JSON.stringify(e.reviewer) : null),
                "S" === e.frequency
                  ? ((e.loop_frequency = null),
                    (e.loop_begin_date = null),
                    (e.loop_end_date = null),
                    (e.loop_begin_time = null),
                    (e.loop_end_time = null),
                    (e.appointed_date = null))
                  : "L" === e.frequency
                    ? ((e.single_begin_time = null),
                      (e.single_end_time = null),
                      (e.appointed_date = null),
                      (e.loop_frequency = JSON.stringify(e.loop_frequency)))
                    : "A" === e.frequency &&
                      ((e.single_begin_time = null),
                      (e.single_end_time = null),
                      (e.loop_frequency = null),
                      (e.loop_begin_date = null),
                      (e.loop_end_date = null),
                      (e.loop_begin_time = null),
                      (e.loop_end_time = null),
                      (e.appointed_date = JSON.stringify(e.appointed_date))),
                null !== this.cId && void 0 !== this.cId
                  ? (e.composite_id = this.$route.query.compositeId)
                  : (e.composite_id = this.record.composite_id),
                this.$axiosAction("/api/teacher/message/message.api", o()({ action: "insert" }, e))
                  .then((e) => {
                    (0 === e.data.code && this.goBack(), this.$q.loading.hide());
                  })
                  .catch((e) => {
                    this.$q.loading.hide();
                  }));
            },
            goBack() {
              this.$router.push("/teacher/message/messageIndex");
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
          },
        },
        m = u,
        p = i("2877"),
        f = i("4d5a"),
        _ = i("e359"),
        g = i("65c6"),
        h = i("9c40"),
        v = i("6ac5"),
        q = i("09e3"),
        b = i("9989"),
        w = i("0378"),
        y = i("f09f"),
        k = i("1c1c"),
        x = i("66e5"),
        C = i("4074"),
        D = i("0170"),
        S = i("eb85"),
        $ = i("27f9"),
        I = i("ddd8"),
        N = i("d66b"),
        Y = i("ee89"),
        F = i("cc04"),
        M = i("05c0"),
        O = i("8572"),
        T = i("0016"),
        Q = i("7cbe"),
        H = i("52ee"),
        z = i("ca78"),
        L = i("8f8e"),
        j = i("c1d0"),
        E = i("24e8"),
        A = i("a370"),
        J = i("7ff0"),
        R = i("7f67"),
        U = i("eebe"),
        B = i.n(U),
        P = Object(p["a"])(m, s, r, !1, null, null, null);
      t["default"] = P.exports;
      (B()(P, "components", {
        QLayout: f["a"],
        QHeader: _["a"],
        QToolbar: g["a"],
        QBtn: h["a"],
        QToolbarTitle: v["a"],
        QPageContainer: q["a"],
        QPage: b["a"],
        QForm: w["a"],
        QCard: y["a"],
        QList: k["a"],
        QItem: x["a"],
        QItemSection: C["a"],
        QItemLabel: D["a"],
        QSeparator: S["a"],
        QInput: $["a"],
        QSelect: I["a"],
        QEditor: N["a"],
        QUploader: Y["a"],
        QUploaderAddTrigger: F["a"],
        QTooltip: M["a"],
        QField: O["a"],
        QIcon: T["a"],
        QPopupProxy: Q["a"],
        QDate: H["a"],
        QTime: z["a"],
        QCheckbox: L["a"],
        QSlider: j["a"],
        QDialog: E["a"],
        QCardSection: A["a"],
        QFooter: J["a"],
      }),
        B()(P, "directives", { ClosePopup: R["a"] }));
    },
  },
]);
