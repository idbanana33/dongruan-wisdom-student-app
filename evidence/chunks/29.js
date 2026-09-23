(window["webpackJsonp"] = window["webpackJsonp"] || []).push([
  [29],
  {
    fffb: function (e, t, a) {
      "use strict";
      a.r(t);
      var s = function () {
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
                        on: { click: e.goBackLeave },
                      }),
                      a("q-toolbar-title", [e._v("我要请假")]),
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
                      a(
                        "q-form",
                        { on: { submit: e.onSubmit } },
                        [
                          a(
                            "q-card",
                            { staticClass: "full-width row", attrs: { flat: "" } },
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
                                          e._v("\n                  请假类型\n                "),
                                        ]),
                                      ]),
                                      a(
                                        "q-item-section",
                                        [
                                          a("q-select", {
                                            attrs: {
                                              outlined: "",
                                              "hide-bottom-space": "",
                                              options: e.type_list,
                                              dense: "",
                                              "lazy-rules": "",
                                              rules: [
                                                function (e) {
                                                  return (
                                                    (null !== e && "" !== e) || "请填选择请假类型"
                                                  );
                                                },
                                              ],
                                            },
                                            model: {
                                              value: e.model,
                                              callback: function (t) {
                                                e.model = t;
                                              },
                                              expression: "model",
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
                                        a("div", { staticClass: "neu-css-before-red-asterisk" }, [
                                          e._v("\n                  开始时间\n                "),
                                        ]),
                                      ]),
                                      a(
                                        "q-item-section",
                                        [
                                          a("q-field", {
                                            attrs: {
                                              outlined: "",
                                              dense: "",
                                              "stack-label": "",
                                              "hide-bottom-space": "",
                                              "lazy-rules": "",
                                              rules: [
                                                function (e) {
                                                  return (
                                                    (null !== e && "" !== e) || "请填选择开始时间"
                                                  );
                                                },
                                              ],
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
                                                                      color: "secondary",
                                                                      minimal: "",
                                                                      mask: "YYYY-MM-DD HH:mm",
                                                                    },
                                                                    model: {
                                                                      value:
                                                                        e.queryModel.begin_time,
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
                                                                            color: "secondary",
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
                                                              { staticClass: "row items-start" },
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
                                                                        e.queryModel.begin_time,
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
                                                                            color: "secondary",
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
                                          e._v("\n                  结束时间\n                "),
                                        ]),
                                      ]),
                                      a(
                                        "q-item-section",
                                        [
                                          a("q-field", {
                                            attrs: {
                                              outlined: "",
                                              dense: "",
                                              "stack-label": "",
                                              value: e.queryModel.end_time,
                                              "hide-bottom-space": "",
                                              "lazy-rules": "",
                                              rules: [
                                                function (e) {
                                                  return (
                                                    (null !== e && "" !== e) || "请填选择结束时间"
                                                  );
                                                },
                                              ],
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
                                                                      color: "secondary",
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
                                                                      expression:
                                                                        "queryModel.end_time",
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
                                                                            color: "secondary",
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
                                                              { staticClass: "row items-start" },
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
                                                                      value: e.queryModel.end_time,
                                                                      callback: function (t) {
                                                                        e.$set(
                                                                          e.queryModel,
                                                                          "end_time",
                                                                          t,
                                                                        );
                                                                      },
                                                                      expression:
                                                                        "queryModel.end_time",
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
                                                                            color: "secondary",
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
                                          e._v("\n                  需要离校\n                "),
                                        ]),
                                      ]),
                                      a("q-item-section"),
                                      a(
                                        "q-item-section",
                                        { attrs: { side: "" } },
                                        [
                                          a("q-toggle", {
                                            attrs: {
                                              size: "lg",
                                              dense: "",
                                              "false-value": "0",
                                              "true-value": "1",
                                            },
                                            model: {
                                              value: e.location_share,
                                              callback: function (t) {
                                                e.location_share = t;
                                              },
                                              expression: "location_share",
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
                                        a("div", { staticClass: "neu-css-before-red-asterisk" }, [
                                          e._v("\n                  需要出市\n                "),
                                        ]),
                                      ]),
                                      a("q-item-section"),
                                      a(
                                        "q-item-section",
                                        { attrs: { side: "" } },
                                        [
                                          a("q-toggle", {
                                            attrs: {
                                              size: "lg",
                                              dense: "",
                                              "false-value": "0",
                                              "true-value": "1",
                                            },
                                            model: {
                                              value: e.city_out,
                                              callback: function (t) {
                                                e.city_out = t;
                                              },
                                              expression: "city_out",
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
                                        a("div", { staticClass: "neu-css-before-red-asterisk" }, [
                                          e._v("\n                  需要出省\n                "),
                                        ]),
                                      ]),
                                      a("q-item-section"),
                                      a(
                                        "q-item-section",
                                        { attrs: { side: "" } },
                                        [
                                          a("q-toggle", {
                                            attrs: {
                                              size: "lg",
                                              dense: "",
                                              "false-value": "0",
                                              "true-value": "1",
                                            },
                                            model: {
                                              value: e.province_out,
                                              callback: function (t) {
                                                e.province_out = t;
                                              },
                                              expression: "province_out",
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
                                        a("div", { staticClass: "neu-css-before-red-asterisk" }, [
                                          e._v("\n                  请假原因\n                "),
                                        ]),
                                      ]),
                                      a(
                                        "q-item-section",
                                        [
                                          a("q-input", {
                                            attrs: {
                                              dense: "",
                                              outlined: "",
                                              "hide-bottom-space": "",
                                              type: "textarea",
                                              "lazy-rules": "",
                                              rules: [
                                                function (e) {
                                                  return (
                                                    (null !== e && "" !== e) || "请填写请假原因"
                                                  );
                                                },
                                              ],
                                            },
                                            model: {
                                              value: e.text,
                                              callback: function (t) {
                                                e.text = t;
                                              },
                                              expression: "text",
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
                                      a("q-item-section", { attrs: { avatar: "" } }, [
                                        a("div", { staticClass: "neu-css-before-white-space" }, [
                                          e._v("\n                  紧急联系人\n                "),
                                        ]),
                                      ]),
                                      a(
                                        "q-item-section",
                                        [
                                          a("q-input", {
                                            attrs: { dense: "", outlined: "" },
                                            model: {
                                              value: e.call_person,
                                              callback: function (t) {
                                                e.call_person = t;
                                              },
                                              expression: "call_person",
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
                                            { staticClass: "neu-css-before-white-space" },
                                            [
                                              e._v(
                                                "\n                  添加附件\n                ",
                                              ),
                                            ],
                                          ),
                                          a(
                                            "q-item-label",
                                            {
                                              staticClass: "neu-css-before-white-space q-my-sm",
                                              attrs: { caption: "" },
                                            },
                                            [e._v("图片格式支持：.jpg、.png、.jpeg")],
                                          ),
                                          a("q-uploader", {
                                            staticClass: "full-width",
                                            attrs: {
                                              multiple: "",
                                              "max-files": "4",
                                              url: e.uploader,
                                              "auto-upload": "",
                                              "max-file-size": "5242880",
                                              accept: ".jpg, .png, ,.jpeg, image/*",
                                            },
                                            on: {
                                              uploaded: e.afterUploaded,
                                              rejected: e.onRejected,
                                              removed: e.afterRemoved,
                                            },
                                            scopedSlots: e._u([
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
                                                          e._v("图片上传(每张5M以内)"),
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
                                                                a("q-uploader-add-trigger"),
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
                                            ]),
                                            model: {
                                              value: e.filesMaxNumber,
                                              callback: function (t) {
                                                e.filesMaxNumber = t;
                                              },
                                              expression: "filesMaxNumber",
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
                            "q-card",
                            { staticClass: "full-width row q-mt-sm", attrs: { flat: "" } },
                            [
                              a(
                                "q-list",
                                { staticClass: "full-width", attrs: { padding: "" } },
                                [
                                  a(
                                    "q-item",
                                    [
                                      a("q-item-section", { attrs: { avatar: "" } }, [
                                        a("div", { staticClass: "neu-css-before-white-space" }, [
                                          e._v("\n                  定位\n                "),
                                        ]),
                                      ]),
                                      a(
                                        "q-item-section",
                                        [
                                          e._v(
                                            "\n                " +
                                              e._s(e.location.address) +
                                              "\n                ",
                                          ),
                                          a("neu-geo-location", {
                                            attrs: { needAddr: !0, location: e.research },
                                            on: {
                                              completed: e.locationCompleted,
                                              error: e.locationError,
                                            },
                                          }),
                                        ],
                                        1,
                                      ),
                                      a("q-item-section", { attrs: { side: "" } }, [
                                        a(
                                          "span",
                                          {
                                            staticClass: "text-primary cursor-pointer",
                                            on: {
                                              click: function (t) {
                                                e.research = e.research + 1;
                                              },
                                            },
                                          },
                                          [e._v("重新定位")],
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
                          a(
                            "q-footer",
                            { staticClass: "bg-white text-primary", attrs: { bordered: "" } },
                            [
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
                                      to: "/student/leave/index",
                                    },
                                  }),
                                  a("q-btn", {
                                    staticClass: "bg-primary",
                                    staticStyle: { width: "60%", height: "2.8rem" },
                                    attrs: {
                                      flat: "",
                                      unelevated: "",
                                      color: "white",
                                      label: "提交请假",
                                      type: "submit",
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
        o = (a("a434"), a("ddb0"), a("46f3")),
        n = {
          components: { NeuGeoLocation: o["a"] },
          name: "LeaveLeave",
          data() {
            return {
              menuInfo: null,
              uploader: window.localStorage.server + this.$appConf.fileUploader,
              model: null,
              location_share: "0",
              city_out: "0",
              province_out: "0",
              text: "",
              call_person: "",
              filesMaxNumber: null,
              queryModel: { begin_time: "", end_time: "", review_status: "", leave_period: "" },
              location: { point: null, address: null, addressComponents: null },
              research: 0,
              locationStatus: !1,
              user: {},
              type_list: [],
              attachment: [],
              showPicList: [],
              atta: "",
            };
          },
          computed: {},
          mounted() {
            (window.localStorage.getItem("menu") &&
              (this.menuInfo = JSON.parse(window.localStorage.getItem("menu")).find(
                (e) => "leave" === e.id,
              )),
              this.getLeaveType());
          },
          watch: {
            city_out(e) {
              return "1" === e
                ? ((this.location_share = "1"), this.location_share)
                : "0" === e
                  ? ((this.province_out = "0"), this.province_out)
                  : void 0;
            },
            province_out(e) {
              "1" === e && ((this.location_share = "1"), (this.city_out = "1"));
            },
            location_share(e) {
              "0" === e && ((this.city_out = "0"), (this.province_out = "0"));
            },
          },
          methods: {
            getLeaveType() {
              this.$axiosAction("api/student/leave/leave.api", {
                action: "getLeaveType",
                edit_permit: this.menuInfo.edit_permit,
              }).then((e) => {
                for (let t = 0; t < e.data.list.length; t++) this.type_list.push(e.data.list[t]);
              });
            },
            locationCompleted(e) {
              ((this.location = e),
                this.locationStatus && ((this.locationStatus = !1), this.saveSunmit(1)));
            },
            goBackLeave() {
              this.$router.push("/student/leave/index");
            },
            onRejected(e) {
              this.$q.notify({ type: "negative", message: `${e.length}份文件不符合格式限制！` });
            },
            afterUploaded(e) {
              this.showPicList = [];
              const t = JSON.parse(e.xhr.response);
              (t.error
                ? this.$showErrorNotify(t.error)
                : this.attachment
                  ? this.attachment.push(t)
                  : (this.attachment = [t]),
                this.addUrl());
            },
            afterRemoved(e) {
              for (const t of e) {
                const e = JSON.parse(t.xhr.response);
                this.removeFile(e.servername);
              }
            },
            addUrl() {
              for (let e = 0; e < this.attachment.length; e++)
                this.showPicList.push({
                  link: encodeURI(`${window.localStorage.server}${this.attachment[e].link}`),
                  servername: this.attachment[e].servername,
                });
            },
            removeFile(e) {
              this.showPicList = [];
              const t = this.attachment.findIndex((t) => t.servername === e);
              (this.attachment.splice(t, 1), this.addUrl());
            },
            onSubmit() {
              return "1" === this.city_out && "0" === this.location_share
                ? this.$showErrorNotify("需要出市则需要离校必选")
                : "1" === this.province_out && "0" === this.city_out
                  ? this.$showErrorNotify("需要出省则需要出市必选")
                  : "1" === this.province_out && "0" === this.location_share
                    ? this.$showErrorNotify("需要出省则需要离校必选")
                    : ((this.locationStatus = !0), void (this.research = this.research + 1));
            },
            locationError(e) {
              this.locationStatus && ((this.locationStatus = !1), this.saveSunmit(2));
            },
            saveSunmit(e) {
              (this.$q.loading.show(),
                (this.user = JSON.parse(localStorage.getItem("userinfo"))),
                this.$axiosAction("/api/student/leave/leave.api", {
                  action: "getPassAndLimit",
                  leave_type_id: this.model.value,
                  begin_time: this.queryModel.begin_time,
                  end_time: this.queryModel.end_time,
                }).then((t) => {
                  if (2001 !== t.data.code) {
                    0 !== this.attachment.length && (this.atta = JSON.stringify(this.attachment));
                    let t = {};
                    ((t = 1 === e ? JSON.stringify(this.location) : ""),
                      this.$axiosAction("/api/student/leave/leave.api", {
                        action: "insertLeave",
                        student_no: this.user.login_name,
                        leave_type_id: this.model.value,
                        begin_time: this.queryModel.begin_time,
                        end_time: this.queryModel.end_time,
                        walk_out: parseInt(this.location_share),
                        city_out: this.city_out,
                        province_out: this.province_out,
                        reason: this.text,
                        contact: this.call_person,
                        attachment: this.atta,
                        location: t,
                        student_name: this.user.name,
                      }).then((e) => {
                        0 === e.data.code
                          ? ((this.atta = ""),
                            this.$q.loading.hide(),
                            this.$router.push("/student/leave/index"))
                          : this.$q.loading.hide();
                      }));
                  } else this.$q.loading.hide();
                }));
            },
          },
        },
        r = n,
        l = a("2877"),
        c = a("4d5a"),
        d = a("e359"),
        u = a("65c6"),
        m = a("6ac5"),
        p = a("0016"),
        h = a("9c40"),
        v = a("09e3"),
        f = a("9989"),
        q = a("0378"),
        _ = a("f09f"),
        y = a("1c1c"),
        b = a("66e5"),
        g = a("4074"),
        w = a("ddd8"),
        x = a("eb85"),
        C = a("8572"),
        k = a("7cbe"),
        M = a("52ee"),
        S = a("ca78"),
        Q = a("9564"),
        $ = a("27f9"),
        N = a("0170"),
        L = a("ee89"),
        Y = a("cc04"),
        I = a("05c0"),
        j = a("7ff0"),
        H = a("7f67"),
        P = a("eebe"),
        T = a.n(P),
        D = Object(l["a"])(r, s, i, !1, null, null, null);
      t["default"] = D.exports;
      (T()(D, "components", {
        QLayout: c["a"],
        QHeader: d["a"],
        QToolbar: u["a"],
        QToolbarTitle: m["a"],
        QIcon: p["a"],
        QBtn: h["a"],
        QPageContainer: v["a"],
        QPage: f["a"],
        QForm: q["a"],
        QCard: _["a"],
        QList: y["a"],
        QItem: b["a"],
        QItemSection: g["a"],
        QSelect: w["a"],
        QSeparator: x["a"],
        QField: C["a"],
        QPopupProxy: k["a"],
        QDate: M["a"],
        QTime: S["a"],
        QToggle: Q["a"],
        QInput: $["a"],
        QItemLabel: N["a"],
        QUploader: L["a"],
        QUploaderAddTrigger: Y["a"],
        QTooltip: I["a"],
        QFooter: j["a"],
      }),
        T()(D, "directives", { ClosePopup: H["a"] }));
    },
  },
]);
