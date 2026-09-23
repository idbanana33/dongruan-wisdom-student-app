(window["webpackJsonp"] = window["webpackJsonp"] || []).push([
  [56],
  {
    "69c3": function (t, e, s) {
      "use strict";
      s.r(e);
      var a = function () {
          var t = this,
            e = t.$createElement,
            s = t._self._c || e;
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
                        attrs: { flat: "", round: "", dense: "", icon: "reorder" },
                        on: {
                          click: function (e) {
                            t.drawer = !t.drawer;
                          },
                        },
                      }),
                      s("q-toolbar-title", [t._v("智慧学工")]),
                      t.achieveMenuInfo && t.achieveMenuInfo.view_permit
                        ? s("q-btn", {
                            attrs: { flat: "", round: "", dense: "", icon: "search" },
                            on: { click: t.open },
                          })
                        : t._e(),
                      s(
                        "q-btn",
                        {
                          attrs: {
                            flat: "",
                            round: "",
                            dense: "",
                            icon: "mail_outline",
                            to: "/teacher/todo",
                          },
                        },
                        [
                          s(
                            "q-badge",
                            {
                              directives: [
                                {
                                  name: "show",
                                  rawName: "v-show",
                                  value: 0 != t.badgeCount,
                                  expression: "badgeCount != 0",
                                },
                              ],
                              attrs: { color: "red", floating: "", rounded: "" },
                            },
                            [t._v(t._s(t.badgeCount > 99 ? "···" : t.badgeCount))],
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
                "q-drawer",
                {
                  attrs: { width: 250, overlay: "", bordered: "", "content-class": "bg-grey-3" },
                  model: {
                    value: t.drawer,
                    callback: function (e) {
                      t.drawer = e;
                    },
                    expression: "drawer",
                  },
                },
                [
                  s(
                    "q-scroll-area",
                    { staticClass: "fit" },
                    [
                      s("div", { staticClass: "row q-ma-md" }, [
                        s("span", { staticStyle: { "font-size": "17px" } }, [
                          t._v("您好，" + t._s(t.user.name) + "老师"),
                        ]),
                      ]),
                      s(
                        "q-card",
                        { staticClass: "q-ma-sm", attrs: { flat: "" } },
                        [
                          s(
                            "q-list",
                            [
                              s(
                                "q-item",
                                {
                                  directives: [{ name: "ripple", rawName: "v-ripple" }],
                                  attrs: { clickable: "" },
                                  on: {
                                    click: function (e) {
                                      return t.moveTo("/user/account");
                                    },
                                  },
                                },
                                [
                                  s("q-item-section", [t._v("账号安全")]),
                                  s(
                                    "q-item-section",
                                    { attrs: { side: "" } },
                                    [
                                      s("q-icon", {
                                        attrs: { name: "keyboard_arrow_right", size: "sm" },
                                      }),
                                    ],
                                    1,
                                  ),
                                ],
                                1,
                              ),
                              s("q-separator", {
                                staticClass: "bg-grey-3",
                                staticStyle: { height: "0.5rem" },
                              }),
                              s(
                                "q-item",
                                {
                                  directives: [{ name: "ripple", rawName: "v-ripple" }],
                                  attrs: { clickable: "" },
                                  on: {
                                    click: function (e) {
                                      return t.moveTo("/teacher/basic/teaInfo");
                                    },
                                  },
                                },
                                [
                                  s("q-item-section", [t._v("我的信息")]),
                                  s(
                                    "q-item-section",
                                    { attrs: { side: "" } },
                                    [
                                      s("q-icon", {
                                        attrs: { name: "keyboard_arrow_right", size: "sm" },
                                      }),
                                    ],
                                    1,
                                  ),
                                ],
                                1,
                              ),
                              s("q-separator", {
                                staticClass: "bg-grey-3",
                                staticStyle: { height: "0.5rem" },
                              }),
                              s(
                                "q-item",
                                {
                                  directives: [{ name: "ripple", rawName: "v-ripple" }],
                                  attrs: { clickable: "" },
                                  on: {
                                    click: function (e) {
                                      return t.moveTo("/user/qrCode");
                                    },
                                  },
                                },
                                [
                                  s("q-item-section", [t._v("我的二维码")]),
                                  s(
                                    "q-item-section",
                                    { attrs: { side: "" } },
                                    [
                                      s("q-icon", {
                                        attrs: { name: "keyboard_arrow_right", size: "sm" },
                                      }),
                                    ],
                                    1,
                                  ),
                                ],
                                1,
                              ),
                              s("q-separator", {
                                staticClass: "bg-grey-3",
                                staticStyle: { height: "0.5rem" },
                              }),
                              s(
                                "q-item",
                                {
                                  directives: [{ name: "ripple", rawName: "v-ripple" }],
                                  attrs: { clickable: "" },
                                  on: {
                                    click: function (e) {
                                      return t.moveTo(
                                        "/teacher/achievement/index?stuNo=" + t.user.login_name,
                                      );
                                    },
                                  },
                                },
                                [
                                  s("q-item-section", [t._v("综合统计")]),
                                  s(
                                    "q-item-section",
                                    { attrs: { side: "" } },
                                    [
                                      s("q-icon", {
                                        attrs: { name: "keyboard_arrow_right", size: "sm" },
                                      }),
                                    ],
                                    1,
                                  ),
                                ],
                                1,
                              ),
                              s("q-separator", {
                                staticClass: "bg-grey-3",
                                staticStyle: { height: "0.5rem" },
                              }),
                              t.scanMenuInfo && t.scanMenuInfo.view_permit
                                ? s(
                                    "q-item",
                                    {
                                      directives: [{ name: "ripple", rawName: "v-ripple" }],
                                      attrs: { clickable: "" },
                                      on: {
                                        click: function (e) {
                                          return t.moveTo("/teacher/qrcodescanning");
                                        },
                                      },
                                    },
                                    [
                                      s("q-item-section", [t._v("信息核验")]),
                                      s(
                                        "q-item-section",
                                        { attrs: { side: "" } },
                                        [
                                          s("q-icon", {
                                            attrs: { name: "keyboard_arrow_right", size: "sm" },
                                          }),
                                        ],
                                        1,
                                      ),
                                    ],
                                    1,
                                  )
                                : t._e(),
                              s("q-separator", {
                                staticClass: "bg-grey-3",
                                staticStyle: { height: "0.5rem" },
                              }),
                              s(
                                "q-item",
                                { attrs: { clickable: "" }, on: { click: t.checkVersion } },
                                [
                                  s("q-item-section", { staticClass: "text-center" }, [
                                    t._v("检查新版本"),
                                  ]),
                                ],
                                1,
                              ),
                              s("q-separator", {
                                staticClass: "bg-grey-3",
                                staticStyle: { height: "0.5rem" },
                              }),
                              s(
                                "q-item",
                                { attrs: { clickable: "" }, on: { click: t.logout } },
                                [
                                  s("q-item-section", { staticClass: "text-center text-red" }, [
                                    t._v("退出当前帐号"),
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
                    ],
                    1,
                  ),
                  s("div", { staticClass: "text-grey text-center absolute-bottom q-mb-xs" }, [
                    s("div", [
                      s(
                        "span",
                        {
                          staticClass: "text-primary",
                          on: {
                            click: function (e) {
                              return t.moveTo("/policy/termsOfUse");
                            },
                          },
                        },
                        [t._v("用户协议")],
                      ),
                      s("span", { staticClass: "text-grey" }, [t._v(" | ")]),
                      s(
                        "span",
                        {
                          staticClass: "text-primary",
                          on: {
                            click: function (e) {
                              return t.moveTo("/policy/privacyPolicy");
                            },
                          },
                        },
                        [t._v("隐私政策")],
                      ),
                    ]),
                    s("div", [t._v(t._s(t.title) + " v" + t._s(t.appVer))]),
                  ]),
                ],
                1,
              ),
              s(
                "q-page-container",
                [
                  s(
                    "q-page",
                    { staticClass: "bg-grey-3" },
                    [
                      t.newsInfo && t.newsInfo.view_permit && 0 !== t.newslist.length
                        ? s(
                            "q-card",
                            { staticClass: "q-px-sm q-pb-xs bg-grey-3", attrs: { flat: "" } },
                            [
                              s(
                                "q-item",
                                {
                                  staticClass: "text-white",
                                  style: "background-color: #" + t.menuColor + ";",
                                },
                                [
                                  s(
                                    "q-item-section",
                                    { attrs: { avatar: "" } },
                                    [s("q-icon", { attrs: { size: "sm", name: "mdi-trumpet" } })],
                                    1,
                                  ),
                                  s(
                                    "q-item-section",
                                    {
                                      on: {
                                        click: function (e) {
                                          return t.toNews(
                                            t.newslist[t.topId].id,
                                            t.newslist[t.topId].link,
                                          );
                                        },
                                      },
                                    },
                                    [t._v("\n            " + t._s(t.newstitle) + "\n          ")],
                                  ),
                                ],
                                1,
                              ),
                            ],
                            1,
                          )
                        : t._e(),
                      s(
                        "q-pull-to-refresh",
                        { on: { refresh: t.refreshMenu } },
                        [
                          t.topApps
                            ? s("div", { staticClass: "q-px-sm q-py-xs" }, [
                                s(
                                  "div",
                                  { staticClass: "row items-start q-gutter-sm" },
                                  [
                                    s(
                                      "q-responsive",
                                      {
                                        staticClass: "col",
                                        attrs: { ratio: 1 },
                                        on: {
                                          click: function (e) {
                                            return t.moveTo(t.topApps[0].link);
                                          },
                                        },
                                      },
                                      [
                                        s(
                                          "div",
                                          {
                                            staticClass: "rounded-borders q-pa-sm",
                                            class: [
                                              "bg-" +
                                                (t.topApps[0].color.background,
                                                t.topApps[0].color.background),
                                              "text-" + t.topApps[0].color.text,
                                            ],
                                          },
                                          [
                                            t._v(
                                              "\n                " +
                                                t._s(t.topApps[0].title) +
                                                "\n                ",
                                            ),
                                            s("q-icon", {
                                              staticClass: "absolute-bottom-right q-mb-sm q-mr-sm",
                                              attrs: { size: "xl", name: t.topApps[0].icon },
                                            }),
                                          ],
                                          1,
                                        ),
                                      ],
                                    ),
                                    s("q-responsive", { staticClass: "col", attrs: { ratio: 1 } }, [
                                      s("div", { staticClass: "column justify-between" }, [
                                        s(
                                          "div",
                                          { staticClass: "col row" },
                                          [
                                            s(
                                              "q-responsive",
                                              {
                                                staticClass: "col",
                                                attrs: { ratio: 2 },
                                                on: {
                                                  click: function (e) {
                                                    return t.moveTo(t.topApps[1].link);
                                                  },
                                                },
                                              },
                                              [
                                                s(
                                                  "div",
                                                  {
                                                    staticClass: "rounded-borders q-pa-sm",
                                                    class: [
                                                      "bg-" +
                                                        (t.topApps[1].color.background,
                                                        t.topApps[1].color.background),
                                                      "text-" + t.topApps[1].color.text,
                                                    ],
                                                  },
                                                  [
                                                    t._v(
                                                      "\n                      " +
                                                        t._s(t.topApps[1].title) +
                                                        "\n                      ",
                                                    ),
                                                    s("q-icon", {
                                                      staticClass:
                                                        "absolute-bottom-right q-mb-sm q-mr-sm",
                                                      attrs: {
                                                        size: "sm",
                                                        name: t.topApps[1].icon,
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
                                        s(
                                          "div",
                                          { staticClass: "col row q-mt-sm" },
                                          [
                                            s(
                                              "q-responsive",
                                              {
                                                staticClass: "col",
                                                attrs: { ratio: 1 },
                                                on: {
                                                  click: function (e) {
                                                    return t.moveTo(t.topApps[2].link);
                                                  },
                                                },
                                              },
                                              [
                                                s(
                                                  "div",
                                                  {
                                                    staticClass: "rounded-borders q-pa-sm",
                                                    class: [
                                                      "bg-" +
                                                        (t.topApps[2].color.background,
                                                        t.topApps[2].color.background),
                                                      "text-" + t.topApps[2].color.text,
                                                    ],
                                                  },
                                                  [
                                                    t._v(
                                                      "\n                      " +
                                                        t._s(t.topApps[2].title) +
                                                        "\n                      ",
                                                    ),
                                                    s("q-icon", {
                                                      staticClass:
                                                        "absolute-bottom-right q-mb-sm q-mr-sm",
                                                      attrs: {
                                                        size: "sm",
                                                        name: t.topApps[2].icon,
                                                      },
                                                    }),
                                                  ],
                                                  1,
                                                ),
                                              ],
                                            ),
                                            s(
                                              "q-responsive",
                                              {
                                                staticClass: "col q-ml-sm",
                                                attrs: { ratio: 1 },
                                                on: {
                                                  click: function (e) {
                                                    return t.moveTo(t.topApps[3].link);
                                                  },
                                                },
                                              },
                                              [
                                                s(
                                                  "div",
                                                  {
                                                    staticClass: "rounded-borders q-pa-sm",
                                                    class: [
                                                      "bg-" +
                                                        (t.topApps[3].color.background,
                                                        t.topApps[3].color.background),
                                                      "text-" + t.topApps[3].color.text,
                                                    ],
                                                  },
                                                  [
                                                    t._v(
                                                      "\n                      " +
                                                        t._s(t.topApps[3].title) +
                                                        "\n                      ",
                                                    ),
                                                    s("q-icon", {
                                                      staticClass:
                                                        "absolute-bottom-right q-mb-sm q-mr-sm",
                                                      attrs: {
                                                        size: "sm",
                                                        name: t.topApps[3].icon,
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
                                      ]),
                                    ]),
                                  ],
                                  1,
                                ),
                              ])
                            : t._e(),
                          t._l(
                            Math.ceil((t.normalApps ? t.normalApps.length : 0) / 4),
                            function (e) {
                              return s("div", { key: e, staticClass: "q-px-sm q-py-xs" }, [
                                s(
                                  "div",
                                  { staticClass: "row items-start q-gutter-sm" },
                                  t._l(
                                    Math.min(
                                      (t.normalApps ? t.normalApps.length : 0) - 4 * (e - 1),
                                      4,
                                    ),
                                    function (a) {
                                      return s(
                                        "q-responsive",
                                        {
                                          key: a,
                                          staticClass: "col",
                                          attrs: {
                                            ratio:
                                              4 /
                                              Math.min(
                                                (t.normalApps ? t.normalApps.length : 0) -
                                                  4 * (e - 1),
                                                4,
                                              ) /
                                              1,
                                          },
                                          on: {
                                            click: function (s) {
                                              t.moveTo(t.normalApps[4 * (e - 1) + a - 1].link);
                                            },
                                          },
                                        },
                                        [
                                          s(
                                            "div",
                                            {
                                              staticClass: "rounded-borders q-pa-sm",
                                              class: [
                                                "bg-" +
                                                  (t.normalApps[4 * (e - 1) + a - 1].color
                                                    .background,
                                                  t.normalApps[4 * (e - 1) + a - 1].color
                                                    .background),
                                                "text-" +
                                                  t.normalApps[4 * (e - 1) + a - 1].color.text,
                                              ],
                                            },
                                            [
                                              t._v(
                                                "\n                " +
                                                  t._s(t.normalApps[4 * (e - 1) + a - 1].title) +
                                                  "\n                ",
                                              ),
                                              s("q-icon", {
                                                staticClass:
                                                  "absolute-bottom-right q-mb-sm q-mr-sm",
                                                attrs: {
                                                  size: "sm",
                                                  name: t.normalApps[4 * (e - 1) + a - 1].icon,
                                                },
                                              }),
                                            ],
                                            1,
                                          ),
                                        ],
                                      );
                                    },
                                  ),
                                  1,
                                ),
                              ]);
                            },
                          ),
                        ],
                        2,
                      ),
                      s(
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
                          s(
                            "q-card",
                            { staticStyle: { width: "350px" } },
                            [
                              s("q-linear-progress", { attrs: { value: 1, color: "primary" } }),
                              s(
                                "q-item",
                                { staticClass: "q-my-sm" },
                                [
                                  s(
                                    "q-item-section",
                                    [
                                      s("q-input", {
                                        attrs: {
                                          outlined: "",
                                          dense: "",
                                          placeholder: "请准确输入学号/教工号或姓名。",
                                          clearable: "",
                                          filled: "",
                                          "hide-bottom-space": "",
                                          "lazy-rules": "",
                                          rules: [
                                            function (t) {
                                              return (t && t.length > 1) || "请至少输入两个字符";
                                            },
                                          ],
                                        },
                                        model: {
                                          value: t.stuNo,
                                          callback: function (e) {
                                            t.stuNo = e;
                                          },
                                          expression: "stuNo",
                                        },
                                      }),
                                    ],
                                    1,
                                  ),
                                  s(
                                    "q-item-section",
                                    { attrs: { side: "" } },
                                    [
                                      s("q-btn", {
                                        attrs: {
                                          unelevated: "",
                                          label: "确定",
                                          color: "primary",
                                          size: "md",
                                        },
                                        on: { click: t.goExperience },
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
                      s(
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
                          s(
                            "q-card",
                            { staticStyle: { width: "350px" } },
                            [
                              s("q-linear-progress", { attrs: { value: 1, color: "primary" } }),
                              s(
                                "q-item",
                                { staticClass: "q-my-sm" },
                                [
                                  s(
                                    "q-item-section",
                                    [
                                      s("q-input", {
                                        attrs: {
                                          outlined: "",
                                          dense: "",
                                          placeholder: "请准确输入学号/教工号或姓名。",
                                          clearable: "",
                                          filled: "",
                                          "hide-bottom-space": "",
                                          "lazy-rules": "",
                                          rules: [
                                            function (t) {
                                              return (t && t.length > 1) || "请至少输入两个字符";
                                            },
                                          ],
                                        },
                                        model: {
                                          value: t.stuNo,
                                          callback: function (e) {
                                            t.stuNo = e;
                                          },
                                          expression: "stuNo",
                                        },
                                      }),
                                    ],
                                    1,
                                  ),
                                  s(
                                    "q-item-section",
                                    { attrs: { side: "" } },
                                    [
                                      s("q-btn", {
                                        attrs: {
                                          unelevated: "",
                                          label: "确定",
                                          color: "primary",
                                          size: "md",
                                        },
                                        on: { click: t.getMessage },
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
                      s(
                        "q-dialog",
                        {
                          model: {
                            value: t.message,
                            callback: function (e) {
                              t.message = e;
                            },
                            expression: "message",
                          },
                        },
                        [
                          s(
                            "q-card",
                            { staticClass: "full-width", attrs: { flat: "" } },
                            [
                              s(
                                "q-card-section",
                                { staticClass: "row items-center justify-between" },
                                [
                                  s("div", { staticClass: "text-bold" }, [
                                    t._v("请选择要查看的人员"),
                                  ]),
                                  s("q-btn", {
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
                              s("q-separator"),
                              s(
                                "q-item",
                                { attrs: { clickable: "" } },
                                [
                                  s(
                                    "q-item-section",
                                    [
                                      s(
                                        "q-item-label",
                                        t._l(t.messageList, function (e, a) {
                                          return s("q-radio", {
                                            key: a,
                                            staticClass: "q-mr-sm",
                                            attrs: {
                                              "keep-color": "",
                                              val: e.login_name,
                                              label:
                                                e.name +
                                                "(" +
                                                e.role_name +
                                                "/" +
                                                e.login_name +
                                                ")",
                                            },
                                            on: {
                                              input: function (s) {
                                                return t.goExperience(e.role_type);
                                              },
                                            },
                                            model: {
                                              value: t.stuNo,
                                              callback: function (e) {
                                                t.stuNo = e;
                                              },
                                              expression: "stuNo",
                                            },
                                          });
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
        i = (s("13d5"), s("ad56")),
        r = {
          name: "TeacherIndex",
          data() {
            return {
              appVer: window.localStorage.appversion,
              title: this.$appConf.title,
              drawer: !1,
              stuNo: "",
              note: !1,
              dialog: !1,
              message: !1,
              messageList: [],
              menus: window.localStorage.menu
                ? JSON.parse(window.localStorage.getItem("menu"))
                : [],
              user: window.localStorage.userinfo
                ? JSON.parse(window.localStorage.getItem("userinfo"))
                : {},
              newslist: [],
              newstitle: "加载中",
              menuColor: Object(i["d"])("news"),
              topId: 0,
              badgeCount: 0,
            };
          },
          created() {
            (document.addEventListener("backbutton", this.backButton, !1),
              document.addEventListener("refreshTodoBadge", this.refreshTodoBadge, !1));
          },
          destroyed() {
            (window.removeEventListener("popstate", this.goBack, !1),
              document.removeEventListener("backbutton", this.exitApp, !1),
              document.removeEventListener("backbutton", this.backButton, !1),
              document.removeEventListener("refreshTodoBadge", this.refreshTodoBadge, !1));
          },
          mounted() {
            (window.history &&
              window.history.pushState &&
              (history.pushState(null, null, document.URL),
              window.addEventListener("popstate", this.goBack, !1)),
              this.appVer !== window.localStorage.getItem("menuappver") &&
                this.refreshMenu(() => {}),
              this.newList(),
              this.refreshTodoBadge());
          },
          computed: {
            apps() {
              return (this.menus || []).reduce(
                (t, e) => ("S" === e.domain && "repair" !== e.id ? t.concat(e) : t),
                [],
              );
            },
            topApps() {
              return this.apps && this.apps.length > 3
                ? this.apps.reduce((t, e, s) => (s < 4 ? t.concat(e) : t), [])
                : null;
            },
            normalApps() {
              return this.apps && this.apps.length > 3
                ? this.apps.reduce((t, e, s) => (s > 3 ? t.concat(e) : t), [])
                : this.apps;
            },
            achieveMenuInfo() {
              return (this.menus || []).find((t) => "achievement" === t.id);
            },
            scanMenuInfo() {
              return (this.menus || []).find((t) => "scanning" === t.id);
            },
            newsInfo() {
              return (this.menus || []).find((t) => "news" === t.id);
            },
          },
          watch: {
            topId() {
              this.setCarousel();
            },
          },
          methods: {
            refreshTodoBadge() {
              cordova.plugins.notification.badge.get((t) => {
                this.badgeCount = t;
              });
            },
            moveTo(t) {
              t && this.$router.push(t);
            },
            logout() {
              this.$q
                .dialog({
                  title: "确认",
                  message: "是否退出当前帐号？",
                  persistent: !0,
                  cancel: { label: "取消", outline: !0, color: "grey" },
                  ok: { label: "确认", unelevated: !0, color: "negative" },
                })
                .onOk(() => {
                  this.$axiosAction("/api/user/user.api", { action: "logout" }).then((t) => {
                    (this.$addStorageEvent(1, "userinfo", null, !0),
                      this.$addStorageEvent(1, "menu", null, !0),
                      this.$addStorageEvent(1, "menuappver", null, !0),
                      JPush.deleteAlias({ sequence: 1 }, null, null));
                    const e = new CustomEvent("setNotificationBadge", { detail: { badge: 0 } });
                    (window.dispatchEvent(e), this.$router.push("/"));
                  });
                });
            },
            goBack() {
              history.pushState(null, null, document.URL);
            },
            backButton() {
              if (!1 === this.note) {
                (this.$q.notify({
                  message: `再按一次退出${this.$appConf.title}`,
                  timeout: 1500,
                  position: "bottom",
                }),
                  (this.note = !0));
                var t = setInterval(() => {
                  ((this.note = !1), clearInterval(t));
                }, 2e3);
              }
              document.addEventListener("backbutton", this.exitApp, !1);
              var e = setInterval(() => {
                (clearInterval(e), document.removeEventListener("backbutton", this.exitApp, !1));
              }, 2e3);
            },
            exitApp() {
              navigator.app.exitApp();
            },
            getMenuColor(t) {
              return Object(i["d"])(t);
            },
            open() {
              this.dialog = !0;
            },
            getMessage() {
              this.stuNo &&
                this.$axiosAction("/api/teacher/experience/experience.api", {
                  action: "getCheckMessageCount",
                  stuNo: this.stuNo,
                }).then((t) => {
                  if (0 === t.data.code)
                    if (t.data.result.length > 1)
                      ((this.messageList = t.data.result), (this.message = !0));
                    else {
                      if (0 === t.data.result.length) return this.$showErrorNotify("无该学生/老师");
                      ((this.stuNo = t.data.result[0].login_name),
                        this.goExperience(t.data.result[0].role_type));
                    }
                });
            },
            goExperience(t) {
              "S" === t
                ? this.$router.push({
                    name: "/teacher/experience/index",
                    query: { stuNo: this.stuNo },
                  })
                : this.$router.push({
                    name: "/teacher/achievement/index",
                    query: { stuNo: this.stuNo },
                  });
            },
            newList() {
              this.$axiosAction("/api/teacher/news/news.api", { action: "getPublicNewList" })
                .then((t) => {
                  0 === t.data.code &&
                    ((this.newslist = t.data.result),
                    (this.newstitle = this.newslist[this.topId].title),
                    this.setCarousel());
                })
                .catch((t) => {
                  this.newslist = [];
                });
            },
            toNews(t, e) {
              "" !== e && null !== e
                ? (this.$axiosAction("/api/teacher/news/news.api", {
                    action: "insertNewsLog",
                    id: t,
                    roleId: this.user.role_id,
                    role_type: this.user.role_type,
                  })
                    .then((t) => {
                      0 === t.data.code ||
                        ("2001" === t.data.code &&
                          (this.$showErrorNotify("该新闻被删除或不存在"),
                          this.$router.push("teacher/news/index")));
                    })
                    .catch((t) => {
                      this.$showErrorNotify("系统错误");
                    }),
                  cordova.InAppBrowser.open(e, "_system"))
                : this.$router.push(`/teacher/news/detail?id=${t}`);
            },
            setCarousel() {
              this.newslist.length > 0 &&
                setTimeout(() => {
                  ((this.topId = this.topId + 1),
                    this.topId > this.newslist.length && (this.topId = 0),
                    (this.newstitle = this.newslist[this.topId].title));
                }, 4e3);
            },
            checkVersion() {
              Object(i["b"])(this, !1);
            },
            refreshMenu(t) {
              this.$axiosAction("/api/user/user.api", { action: "queryMenus" }).then((e) => {
                (0 === e.data.code &&
                  ((this.menus = e.data.menus),
                  this.$addStorageEvent(1, "menu", JSON.stringify(e.data.menus), !1),
                  this.$addStorageEvent(1, "menuappver", this.appVer, !1)),
                  t());
              });
            },
          },
        },
        n = r,
        l = s("2877"),
        c = s("4d5a"),
        p = s("e359"),
        d = s("65c6"),
        u = s("9c40"),
        m = s("6ac5"),
        h = s("58a81"),
        g = s("9404"),
        v = s("4983"),
        b = s("f09f"),
        q = s("1c1c"),
        w = s("66e5"),
        f = s("4074"),
        k = s("0016"),
        y = s("eb85"),
        C = s("09e3"),
        _ = s("9989"),
        x = s("59d7"),
        A = s("0e51"),
        N = s("24e8"),
        I = s("6b1d"),
        S = s("27f9"),
        $ = s("a370"),
        T = s("0170"),
        E = s("3786"),
        Q = s("714f"),
        L = s("7f67"),
        z = s("eebe"),
        M = s.n(z),
        B = Object(l["a"])(n, a, o, !1, null, null, null);
      e["default"] = B.exports;
      (M()(B, "components", {
        QLayout: c["a"],
        QHeader: p["a"],
        QToolbar: d["a"],
        QBtn: u["a"],
        QToolbarTitle: m["a"],
        QBadge: h["a"],
        QDrawer: g["a"],
        QScrollArea: v["a"],
        QCard: b["a"],
        QList: q["a"],
        QItem: w["a"],
        QItemSection: f["a"],
        QIcon: k["a"],
        QSeparator: y["a"],
        QPageContainer: C["a"],
        QPage: _["a"],
        QPullToRefresh: x["a"],
        QResponsive: A["a"],
        QDialog: N["a"],
        QLinearProgress: I["a"],
        QInput: S["a"],
        QCardSection: $["a"],
        QItemLabel: T["a"],
        QRadio: E["a"],
      }),
        M()(B, "directives", { Ripple: Q["a"], ClosePopup: L["a"] }));
    },
  },
]);
