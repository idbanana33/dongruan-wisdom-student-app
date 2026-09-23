(window["webpackJsonp"] = window["webpackJsonp"] || []).push([
  [84],
  {
    a858: function (t, e, a) {
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
                      a("q-toolbar-title", [t._v(t._s((t.menuInfo || {}).title))]),
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
                    { staticClass: "bg-grey-3 q-pb-sm" },
                    [
                      a(
                        "q-card",
                        {
                          staticClass: "bg-white q-mb-sm q-mx-sm q-py-md",
                          attrs: { flat: "" },
                          on: {
                            click: function (e) {
                              return t.getList("reviewing");
                            },
                          },
                        },
                        [
                          a(
                            "q-item",
                            [
                              a(
                                "q-item-section",
                                { attrs: { avatar: "" } },
                                [
                                  a("q-item-label", [
                                    a(
                                      "span",
                                      {
                                        staticClass: "material-icons",
                                        staticStyle: { "font-size": "30px", color: "#1E90FF" },
                                      },
                                      [t._v("\n              pending_actions\n            ")],
                                    ),
                                  ]),
                                ],
                                1,
                              ),
                              a(
                                "q-item-section",
                                [
                                  a("q-item-label", { staticStyle: { "font-size": "1.01rem" } }, [
                                    t._v("\n            待审批\n          "),
                                  ]),
                                  a("q-item-label", { attrs: { caption: "" } }, [
                                    t._v("\n            待审批的请假信息\n          "),
                                  ]),
                                ],
                                1,
                              ),
                              a(
                                "q-item-section",
                                { attrs: { side: "" } },
                                [
                                  a(
                                    "q-item-label",
                                    [
                                      a(
                                        "span",
                                        {
                                          directives: [
                                            {
                                              name: "show",
                                              rawName: "v-show",
                                              value: 0 !== t.count,
                                              expression: "count !== 0",
                                            },
                                          ],
                                          staticStyle: { color: "#FF0000" },
                                        },
                                        [t._v("(" + t._s(t.count) + ")")],
                                      ),
                                      a("q-icon", {
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
                      a(
                        "q-card",
                        {
                          staticClass: "bg-white q-mb-sm q-mx-sm q-py-md",
                          attrs: { flat: "" },
                          on: {
                            click: function (e) {
                              return t.getList("reviewed");
                            },
                          },
                        },
                        [
                          a(
                            "q-item",
                            [
                              a(
                                "q-item-section",
                                { attrs: { avatar: "" } },
                                [
                                  a("q-item-label", [
                                    a(
                                      "span",
                                      {
                                        staticClass: "material-icons",
                                        staticStyle: { "font-size": "30px", color: "#32CD32" },
                                      },
                                      [t._v("\n              assignment_turned_in\n            ")],
                                    ),
                                  ]),
                                ],
                                1,
                              ),
                              a(
                                "q-item-section",
                                [
                                  a("q-item-label", { staticStyle: { "font-size": "1.01rem" } }, [
                                    t._v("\n            已审批\n          "),
                                  ]),
                                  a("q-item-label", { attrs: { caption: "" } }, [
                                    t._v("\n            审批完成的请假信息\n          "),
                                  ]),
                                ],
                                1,
                              ),
                              a(
                                "q-item-section",
                                { attrs: { side: "" } },
                                [
                                  a(
                                    "q-item-label",
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
                            ],
                            1,
                          ),
                        ],
                        1,
                      ),
                      a(
                        "q-card",
                        {
                          staticClass: "bg-white q-mb-sm q-mx-sm q-py-md",
                          attrs: { flat: "" },
                          on: {
                            click: function (e) {
                              return t.getList("all");
                            },
                          },
                        },
                        [
                          a(
                            "q-item",
                            [
                              a(
                                "q-item-section",
                                { attrs: { avatar: "" } },
                                [
                                  a("q-item-label", [
                                    a(
                                      "span",
                                      {
                                        staticClass: "material-icons",
                                        staticStyle: { "font-size": "30px", color: "#696969" },
                                      },
                                      [t._v("\n              receipt_long\n            ")],
                                    ),
                                  ]),
                                ],
                                1,
                              ),
                              a(
                                "q-item-section",
                                [
                                  a("q-item-label", { staticStyle: { "font-size": "1.01rem" } }, [
                                    t._v("\n            请假记录\n          "),
                                  ]),
                                  a("q-item-label", { attrs: { caption: "" } }, [
                                    t._v("\n            全部的请假信息\n          "),
                                  ]),
                                ],
                                1,
                              ),
                              a(
                                "q-item-section",
                                { attrs: { side: "" } },
                                [
                                  a(
                                    "q-item-label",
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
                            ],
                            1,
                          ),
                        ],
                        1,
                      ),
                      a(
                        "q-card",
                        {
                          staticClass: "bg-white q-mb-sm q-mx-sm q-py-md",
                          attrs: { flat: "" },
                          on: {
                            click: function (e) {
                              return t.getListMulti("leave");
                            },
                          },
                        },
                        [
                          a(
                            "q-item",
                            [
                              a(
                                "q-item-section",
                                { attrs: { avatar: "" } },
                                [
                                  a("q-item-label", [
                                    a(
                                      "span",
                                      {
                                        staticClass: "material-icons",
                                        staticStyle: { "font-size": "30px", color: "#696969" },
                                      },
                                      [t._v("\n              assignment_ind\n            ")],
                                    ),
                                  ]),
                                ],
                                1,
                              ),
                              a(
                                "q-item-section",
                                [
                                  a("q-item-label", { staticStyle: { "font-size": "1.01rem" } }, [
                                    t._v("\n            我的批量请假\n          "),
                                  ]),
                                  a("q-item-label", { attrs: { caption: "" } }, [
                                    t._v("\n            教师的全部批量请假信息\n          "),
                                  ]),
                                ],
                                1,
                              ),
                              a(
                                "q-item-section",
                                { attrs: { side: "" } },
                                [
                                  a(
                                    "q-item-label",
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
                            ],
                            1,
                          ),
                        ],
                        1,
                      ),
                      a(
                        "q-card",
                        {
                          staticClass: "bg-white q-mb-sm q-mx-sm q-py-md",
                          attrs: { flat: "" },
                          on: {
                            click: function (e) {
                              return t.getListMulti("review");
                            },
                          },
                        },
                        [
                          a(
                            "q-item",
                            [
                              a(
                                "q-item-section",
                                { attrs: { avatar: "" } },
                                [
                                  a("q-item-label", [
                                    a(
                                      "span",
                                      {
                                        staticClass: "material-icons",
                                        staticStyle: { "font-size": "30px", color: "#696969" },
                                      },
                                      [t._v("\n              assignment\n            ")],
                                    ),
                                  ]),
                                ],
                                1,
                              ),
                              a(
                                "q-item-section",
                                [
                                  a("q-item-label", { staticStyle: { "font-size": "1.01rem" } }, [
                                    t._v("\n            批量请假审批\n          "),
                                  ]),
                                  a("q-item-label", { attrs: { caption: "" } }, [
                                    t._v(
                                      "\n            需要教师审批的全部批量请假信息\n          ",
                                    ),
                                  ]),
                                ],
                                1,
                              ),
                              a(
                                "q-item-section",
                                { attrs: { side: "" } },
                                [
                                  a(
                                    "q-item-label",
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
        s = [],
        n = {
          name: "Navigation",
          data() {
            return { count: 0, menuInfo: null };
          },
          destroyed() {
            window.removeEventListener("popstate", this.goBack, !1);
          },
          mounted() {
            ((this.menuInfo = JSON.parse(window.localStorage.getItem("menu")).find(
              (t) => "leave" === t.id,
            )),
              this.getCount(),
              window.history &&
                window.history.pushState &&
                (history.pushState(null, null, document.URL),
                window.addEventListener("popstate", this.goBack, !1)));
          },
          methods: {
            getCount() {
              const t = JSON.parse(localStorage.getItem("userinfo"));
              this.$axiosAction("/api/teacher/leave/leave.api", {
                action: "getWaitingReviewCount",
                teacher_no: t.login_name,
              }).then((t) => {
                0 === t.data.code && (this.count = t.data.list.waitcount);
              });
            },
            getList(t) {
              this.$router.push(`/teacher/leave/list?tab=${t}`);
            },
            getListMulti(t) {
              this.$router.push(`/teacher/leave/multilist?tab=${t}`);
            },
            goBack() {
              this.$router.push("/teacher/index");
            },
          },
        },
        o = n,
        r = a("2877"),
        l = a("4d5a"),
        c = a("e359"),
        m = a("65c6"),
        q = a("9c40"),
        u = a("6ac5"),
        d = a("09e3"),
        b = a("9989"),
        p = a("f09f"),
        g = a("66e5"),
        v = a("4074"),
        h = a("0170"),
        _ = a("0016"),
        w = a("eebe"),
        f = a.n(w),
        y = Object(r["a"])(o, i, s, !1, null, null, null);
      e["default"] = y.exports;
      f()(y, "components", {
        QLayout: l["a"],
        QHeader: c["a"],
        QToolbar: m["a"],
        QBtn: q["a"],
        QToolbarTitle: u["a"],
        QPageContainer: d["a"],
        QPage: b["a"],
        QCard: p["a"],
        QItem: g["a"],
        QItemSection: v["a"],
        QItemLabel: h["a"],
        QIcon: _["a"],
      });
    },
  },
]);
