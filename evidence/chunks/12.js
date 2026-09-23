(window["webpackJsonp"] = window["webpackJsonp"] || []).push([
  [12],
  {
    "7ee9": function (t, e, a) {
      "use strict";
      a.r(e);
      var s = function () {
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
                        attrs: { flat: "", round: "", dense: "", icon: "reorder" },
                        on: {
                          click: function (e) {
                            t.drawer = !t.drawer;
                          },
                        },
                      }),
                      a("q-toolbar-title", [t._v("智慧学工")]),
                      a(
                        "q-btn",
                        {
                          attrs: {
                            flat: "",
                            round: "",
                            dense: "",
                            icon: "mail_outline",
                            to: "/maintainer/todo",
                          },
                        },
                        [
                          a(
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
              a(
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
                  a(
                    "q-scroll-area",
                    { staticClass: "fit" },
                    [
                      a("div", { staticClass: "row q-ma-md" }, [
                        a("span", { staticStyle: { "font-size": "17px" } }, [
                          t._v("您好，" + t._s(t.user.name) + " 维修师"),
                        ]),
                      ]),
                      a(
                        "q-card",
                        { staticClass: "q-ma-sm", attrs: { flat: "" } },
                        [
                          a(
                            "q-list",
                            [
                              a(
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
                                  a("q-item-section", [t._v("账号安全")]),
                                  a(
                                    "q-item-section",
                                    { attrs: { side: "" } },
                                    [
                                      a("q-icon", {
                                        attrs: { name: "keyboard_arrow_right", size: "sm" },
                                      }),
                                    ],
                                    1,
                                  ),
                                ],
                                1,
                              ),
                              a("q-separator", {
                                staticClass: "bg-grey-3",
                                staticStyle: { height: "0.5rem" },
                              }),
                              a(
                                "q-item",
                                { attrs: { clickable: "" }, on: { click: t.checkVersion } },
                                [
                                  a("q-item-section", { staticClass: "text-center" }, [
                                    t._v("检查新版本"),
                                  ]),
                                ],
                                1,
                              ),
                              a("q-separator", {
                                staticClass: "bg-grey-3",
                                staticStyle: { height: "0.5rem" },
                              }),
                              a(
                                "q-item",
                                { attrs: { clickable: "" }, on: { click: t.logout } },
                                [
                                  a("q-item-section", { staticClass: "text-center text-red" }, [
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
                  a("div", { staticClass: "text-grey text-center absolute-bottom q-mb-xs" }, [
                    a("div", [
                      a(
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
                      a("span", { staticClass: "text-grey" }, [t._v(" | ")]),
                      a(
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
                    a("div", [t._v(t._s(t.title) + " v" + t._s(t.appVer))]),
                  ]),
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
                        "q-card",
                        {
                          staticClass: "full-width row text-white q-pb-lg",
                          staticStyle: { "background-color": "#5290FF" },
                          attrs: { flat: "" },
                        },
                        [
                          a(
                            "q-card-section",
                            { staticClass: "full-width row", attrs: { avatar: "" } },
                            [
                              a("div", { staticClass: "col-9 q-mt-md" }, [
                                a(
                                  "span",
                                  {
                                    staticClass: "text-weight-bold",
                                    staticStyle: { "font-size": "2em" },
                                  },
                                  [t._v(t._s(t.record.name))],
                                ),
                              ]),
                              a(
                                "div",
                                { staticClass: "col-3 q-mt-sm row", on: { click: t.repairList } },
                                [
                                  a("q-icon", {
                                    staticClass: "full-width justify-end q-pr-md",
                                    attrs: { name: "handyman", size: "lg" },
                                  }),
                                  a(
                                    "span",
                                    {
                                      staticClass: "full-width text-bold text-right q-pr-sm",
                                      staticStyle: { "font-size": "1.5em" },
                                    },
                                    [t._v("报修单")],
                                  ),
                                ],
                                1,
                              ),
                            ],
                          ),
                          a(
                            "q-card-section",
                            { staticClass: "full-width row", attrs: { avatar: "" } },
                            [
                              a("div", { staticClass: "col-12 q-mb-sm" }, [
                                a(
                                  "span",
                                  {
                                    staticClass: "text-bold neu-css-after-colon",
                                    staticStyle: { "font-size": "1.5em" },
                                  },
                                  [t._v("所属部门")],
                                ),
                                a("span", { staticStyle: { "font-size": "1.5em" } }, [
                                  t._v(t._s(t.record.dep_name)),
                                ]),
                              ]),
                              a("div", { staticClass: "col-12 q-mt-sm" }, [
                                a(
                                  "span",
                                  {
                                    staticClass: "text-bold neu-css-after-colon",
                                    staticStyle: { "font-size": "1.5em" },
                                  },
                                  [t._v("联系电话")],
                                ),
                                a("span", { staticStyle: { "font-size": "1.5em" } }, [
                                  t._v(t._s(t.record.mob)),
                                ]),
                              ]),
                            ],
                          ),
                          a("q-card-section", { staticClass: "q-mb-sm" }),
                        ],
                        1,
                      ),
                      a(
                        "div",
                        { staticClass: "flex flex-center", staticStyle: { "margin-top": "-3rem" } },
                        [
                          a(
                            "q-card",
                            {
                              staticClass: "row",
                              staticStyle: { width: "90%", "border-radius": "15px" },
                              attrs: { flat: "" },
                            },
                            [
                              a(
                                "q-card-section",
                                {
                                  staticClass: "full-width row justify-around",
                                  attrs: { avatar: "" },
                                },
                                [
                                  a("div", { staticClass: "col-12 q-mt-sm" }, [
                                    a(
                                      "span",
                                      {
                                        staticClass: "text-bold",
                                        staticStyle: { "font-size": "1.3em" },
                                      },
                                      [t._v("综合统计")],
                                    ),
                                  ]),
                                ],
                              ),
                              a(
                                "q-card-section",
                                {
                                  staticClass: "full-width row justify-around q-mb-sm",
                                  attrs: { avatar: "" },
                                },
                                [
                                  a("div", { staticClass: "col-4 text-center" }, [
                                    a("div", { staticClass: "q-mb-sm" }, [
                                      a(
                                        "span",
                                        {
                                          staticClass: "text-weight-bold",
                                          staticStyle: { "font-size": "1.8em" },
                                        },
                                        [t._v(t._s(t.record.today_order_num) + "单")],
                                      ),
                                    ]),
                                    a("span", { staticClass: "text-grey" }, [t._v("今日接单")]),
                                  ]),
                                  a("div", { staticClass: "col-4 text-center" }, [
                                    a("div", { staticClass: "q-mb-sm" }, [
                                      a(
                                        "span",
                                        {
                                          staticClass: "text-weight-bold",
                                          staticStyle: { "font-size": "1.8em" },
                                        },
                                        [t._v(t._s(t.record.all_order_num) + "单")],
                                      ),
                                    ]),
                                    a("span", { staticClass: "text-grey" }, [t._v("完成报修单")]),
                                  ]),
                                  a("div", { staticClass: "col-4 text-center" }, [
                                    a("div", { staticClass: "q-mb-sm" }, [
                                      a(
                                        "span",
                                        {
                                          staticClass: "text-weight-bold",
                                          staticStyle: { "font-size": "1.8em" },
                                        },
                                        [t._v(t._s(t.record.mark_mean_num) + "星")],
                                      ),
                                    ]),
                                    a("span", { staticClass: "text-grey" }, [t._v("评价星级")]),
                                  ]),
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
          );
        },
        i = [],
        o = a("ad56"),
        r = {
          name: "MaintainerIndex",
          data() {
            return {
              appVer: window.localStorage.appversion,
              title: this.$appConf.title,
              drawer: !1,
              user: window.localStorage.userinfo
                ? JSON.parse(window.localStorage.getItem("userinfo"))
                : {},
              badgeCount: 0,
              record: {},
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
              this.loadMaintainerUserInfo(),
              this.refreshTodoBadge());
          },
          methods: {
            loadMaintainerUserInfo() {
              this.$axiosAction("/api/teacher/basic/maintainer.api", {
                action: "getMaintainerInfo",
                maintainer_no: this.user.login_name,
              }).then((t) => {
                this.record = t.data.info;
              });
            },
            refreshTodoBadge() {
              cordova.plugins.notification.badge.get((t) => {
                this.badgeCount = t;
              });
            },
            repairList() {
              this.$router.push("/maintainer/repairList");
            },
            moveTo(t) {
              t && this.$router.push(t);
            },
            checkVersion() {
              Object(o["b"])(this, !1);
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
                      JPush.deleteAlias({ sequence: 1 }, null, null));
                    const e = new CustomEvent("setNotificationBadge", { detail: { badge: 0 } });
                    (window.dispatchEvent(e), this.$router.push("/"));
                  });
                });
            },
          },
        },
        n = r,
        c = a("2877"),
        l = a("4d5a"),
        d = a("e359"),
        m = a("65c6"),
        u = a("9c40"),
        p = a("6ac5"),
        v = a("58a81"),
        h = a("9404"),
        b = a("4983"),
        g = a("f09f"),
        f = a("1c1c"),
        w = a("66e5"),
        C = a("4074"),
        q = a("0016"),
        y = a("eb85"),
        _ = a("09e3"),
        x = a("9989"),
        k = a("a370"),
        S = a("714f"),
        Q = a("eebe"),
        L = a.n(Q),
        B = Object(c["a"])(n, s, i, !1, null, null, null);
      e["default"] = B.exports;
      (L()(B, "components", {
        QLayout: l["a"],
        QHeader: d["a"],
        QToolbar: m["a"],
        QBtn: u["a"],
        QToolbarTitle: p["a"],
        QBadge: v["a"],
        QDrawer: h["a"],
        QScrollArea: b["a"],
        QCard: g["a"],
        QList: f["a"],
        QItem: w["a"],
        QItemSection: C["a"],
        QIcon: q["a"],
        QSeparator: y["a"],
        QPageContainer: _["a"],
        QPage: x["a"],
        QCardSection: k["a"],
      }),
        L()(B, "directives", { Ripple: S["a"] }));
    },
  },
]);
