(window["webpackJsonp"] = window["webpackJsonp"] || []).push([
  [59],
  {
    c676: function (e, t, a) {
      "use strict";
      a.r(t);
      var n = function () {
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
                        on: {
                          click: function (t) {
                            return e.moveTo("/teacher/index");
                          },
                        },
                      }),
                      a("q-toolbar-title", [e._v(e._s((e.menuInfo || {}).title))]),
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
                            click: function (t) {
                              return e.moveTo("/teacher/analysis/stuData");
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
                                  a(
                                    "q-item-label",
                                    [
                                      a("q-icon", {
                                        attrs: {
                                          size: "sm",
                                          name: e.menuInfo.icon,
                                          color: e.menuInfo.color.background,
                                        },
                                      }),
                                    ],
                                    1,
                                  ),
                                ],
                                1,
                              ),
                              a(
                                "q-item-section",
                                [
                                  a("q-item-label", { staticStyle: { "font-size": "1.01rem" } }, [
                                    e._v("\n            业务数据分析\n          "),
                                  ]),
                                  a("q-item-label", { attrs: { caption: "" } }, [
                                    e._v(
                                      "\n            对学生在各业务模块中产生的数据进行统计分析\n          ",
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
                      a(
                        "q-card",
                        {
                          staticClass: "bg-white q-mb-sm q-mx-sm q-py-md",
                          attrs: { flat: "" },
                          on: {
                            click: function (t) {
                              return e.moveTo("/teacher/analysis/stuLocation");
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
                                  a(
                                    "q-item-label",
                                    [
                                      a("q-icon", {
                                        attrs: {
                                          size: "sm",
                                          name: e.menuInfo.icon,
                                          color: e.menuInfo.color.background,
                                        },
                                      }),
                                    ],
                                    1,
                                  ),
                                ],
                                1,
                              ),
                              a(
                                "q-item-section",
                                [
                                  a("q-item-label", { staticStyle: { "font-size": "1.01rem" } }, [
                                    e._v("\n            定位数据分析\n          "),
                                  ]),
                                  a("q-item-label", { attrs: { caption: "" } }, [
                                    e._v("\n            对学生的定位数据进行统计分析\n          "),
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
                          directives: [
                            {
                              name: "show",
                              rawName: "v-show",
                              value: "A" == e.roleId || "D" == e.roleId || "M" == e.roleId,
                              expression: "roleId == 'A' || roleId == 'D' || roleId == 'M'",
                            },
                          ],
                          staticClass: "bg-white q-mb-sm q-mx-sm q-py-md",
                          attrs: { flat: "" },
                          on: {
                            click: function (t) {
                              return e.moveTo("/teacher/analysis/teaMessage");
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
                                  a(
                                    "q-item-label",
                                    [
                                      a("q-icon", {
                                        attrs: {
                                          size: "sm",
                                          name: e.menuInfo.icon,
                                          color: e.menuInfo.color.background,
                                        },
                                      }),
                                    ],
                                    1,
                                  ),
                                ],
                                1,
                              ),
                              a(
                                "q-item-section",
                                [
                                  a("q-item-label", { staticStyle: { "font-size": "1.01rem" } }, [
                                    e._v("\n            教师信息收集数据分析\n          "),
                                  ]),
                                  a("q-item-label", { attrs: { caption: "" } }, [
                                    e._v(
                                      "\n            对教师的信息收集数据进行统计分析\n          ",
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
        o = [],
        i = {
          name: "AnalysisIndex",
          data() {
            return { roleId: JSON.parse(window.localStorage.getItem("userinfo")).role_id };
          },
          computed: {
            menuInfo() {
              return window.localStorage.getItem("menu")
                ? JSON.parse(window.localStorage.getItem("menu")).find((e) => "analysis" === e.id)
                : null;
            },
          },
          methods: {
            moveTo(e) {
              e && this.$router.push(e);
            },
          },
        },
        r = i,
        s = a("2877"),
        l = a("4d5a"),
        m = a("e359"),
        c = a("65c6"),
        q = a("9c40"),
        d = a("6ac5"),
        u = a("09e3"),
        b = a("9989"),
        f = a("f09f"),
        g = a("66e5"),
        w = a("4074"),
        I = a("0170"),
        p = a("0016"),
        v = a("eebe"),
        h = a.n(v),
        y = Object(s["a"])(r, n, o, !1, null, null, null);
      t["default"] = y.exports;
      h()(y, "components", {
        QLayout: l["a"],
        QHeader: m["a"],
        QToolbar: c["a"],
        QBtn: q["a"],
        QToolbarTitle: d["a"],
        QPageContainer: u["a"],
        QPage: b["a"],
        QCard: f["a"],
        QItem: g["a"],
        QItemSection: w["a"],
        QItemLabel: I["a"],
        QIcon: p["a"],
      });
    },
  },
]);
