(window["webpackJsonp"] = window["webpackJsonp"] || []).push([
  [80],
  {
    2727: function (e, t, a) {
      "use strict";
      a.r(t);
      var i = function () {
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
                      a("q-toolbar-title", [
                        e._v(e._s(this.$route.query.teacher_name) + " 的请假历史"),
                      ]),
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
                        "q-pull-to-refresh",
                        { on: { refresh: e.refresh } },
                        [
                          e._l(e.history, function (t) {
                            return a(
                              "q-card",
                              {
                                key: t.id,
                                staticClass: "bg-white q-mb-sm q-mx-sm",
                                style:
                                  "驳回" == t.review_name
                                    ? "border-left:0.25rem solid #FF0000;"
                                    : "审批中" == t.review_name
                                      ? "border-left:0.25rem solid #20B2AA;"
                                      : "border-left:0.25rem solid #32CD32;",
                                attrs: { flat: "" },
                              },
                              [
                                a(
                                  "q-item",
                                  [
                                    a(
                                      "q-item-section",
                                      [
                                        a("q-item-label", [
                                          e._v(
                                            "\n                " +
                                              e._s(t.create_time) +
                                              "\n              ",
                                          ),
                                        ]),
                                        a("q-item-label", [
                                          e._v(
                                            "\n                学生数量： " +
                                              e._s(t.student_num) +
                                              "\n              ",
                                          ),
                                        ]),
                                        a("q-item-label", { attrs: { lines: "1", caption: "" } }, [
                                          e._v(
                                            e._s(t.class_name) +
                                              " " +
                                              e._s(t.major_name) +
                                              " " +
                                              e._s(t.dep_name),
                                          ),
                                        ]),
                                        a("q-item-label", { attrs: { lines: "2" } }, [
                                          e._v(
                                            "\n                " + e._s(t.leave_type_name) + " ",
                                          ),
                                          a(
                                            "span",
                                            {
                                              directives: [
                                                {
                                                  name: "show",
                                                  rawName: "v-show",
                                                  value: 1 === t.walk_out,
                                                  expression: "item.walk_out === 1",
                                                },
                                              ],
                                            },
                                            [
                                              e._v(
                                                e._s(
                                                  "是" == t.walk_outs ? "需要离校" : "不需要离校",
                                                ),
                                              ),
                                            ],
                                          ),
                                          a(
                                            "span",
                                            {
                                              directives: [
                                                {
                                                  name: "show",
                                                  rawName: "v-show",
                                                  value: 1 === t.city_out,
                                                  expression: "item.city_out === 1",
                                                },
                                              ],
                                            },
                                            [
                                              e._v(
                                                e._s(1 === t.city_out ? "需要离市" : "不需要离市"),
                                              ),
                                            ],
                                          ),
                                          a(
                                            "span",
                                            {
                                              directives: [
                                                {
                                                  name: "show",
                                                  rawName: "v-show",
                                                  value: 1 === t.province_out,
                                                  expression: "item.province_out === 1",
                                                },
                                              ],
                                            },
                                            [
                                              e._v(
                                                e._s(
                                                  1 === t.province_out ? "需要离省" : "不需要离省",
                                                ),
                                              ),
                                            ],
                                          ),
                                        ]),
                                        a("q-item-label", { attrs: { lines: "2" } }, [
                                          e._v(
                                            "\n                " +
                                              e._s(t.leave_period) +
                                              "\n              ",
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
                            );
                          }),
                          a(
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
                                  return e.getLeaveByStudent(null);
                                },
                              },
                            },
                            [e._v("\n          加载更多...\n        ")],
                          ),
                          a(
                            "div",
                            {
                              directives: [
                                {
                                  name: "show",
                                  rawName: "v-show",
                                  value:
                                    !e.isLoading &&
                                    e.paging.pageCount == e.paging.pageNum &&
                                    0 != e.history.length,
                                  expression:
                                    "!isLoading && paging.pageCount == paging.pageNum && history.length != 0",
                                },
                              ],
                              staticClass: "text-center text-grey q-pt-sm q-pb-md",
                            },
                            [e._v("\n          没有更多了\n        ")],
                          ),
                          a(
                            "div",
                            {
                              directives: [
                                {
                                  name: "show",
                                  rawName: "v-show",
                                  value: !e.isLoading && 0 == e.history.length,
                                  expression: "!isLoading && history.length == 0",
                                },
                              ],
                              staticClass: "text-center text-grey q-pt-sm q-pb-md",
                            },
                            [e._v("\n          暂无请假记录\n        ")],
                          ),
                          a(
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
            ],
            1,
          );
        },
        s = [],
        n = a("ded3"),
        o = a.n(n),
        r = {
          name: "LeaveHistroy",
          data() {
            return {
              history: [],
              paging: { pageSize: 30, pageNum: 0, pageCount: 0 },
              isLoading: !1,
            };
          },
          destroyed() {
            window.removeEventListener("popstate", this.goBack, !1);
          },
          mounted() {
            (window.history &&
              window.history.pushState &&
              (history.pushState(null, null, document.URL),
              window.addEventListener("popstate", this.goBack, !1)),
              this.getLeaveByStudent(() => {}));
          },
          methods: {
            getLeaveByStudent(e) {
              (e && ((this.paging.pageNum = 0), (this.history = [])),
                (this.paging.pageNum += 1),
                (this.isLoading = !0),
                this.$axiosAction("/api/teacher/leave/leave.api", {
                  action: "getMultiHistory",
                  id: parseInt(this.$route.query.id),
                  pageSize: this.paging.pageSize,
                  pageNum: this.paging.pageNum,
                  teacher_no: this.$route.query.teacher_no,
                })
                  .then((t) => {
                    if (0 === t.data.code) {
                      this.history = this.history.concat(t.data.list.list);
                      const {
                        pageSize: e,
                        pageNum: a,
                        rowCount: i,
                        pageCount: s,
                        startIndex: n,
                        endIndex: r,
                      } = o()({}, t.data.list);
                      this.paging = {
                        pageSize: e,
                        pageNum: a,
                        rowCount: i,
                        pageCount: s,
                        startIndex: n,
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
              ((this.history = []), (this.paging = { pageSize: 30, pageNum: 0, pageCount: 0 }));
            },
            refresh(e) {
              this.getLeaveByStudent(e);
            },
            goBack() {
              this.$router.push(
                `/teacher/leave/multidetail?id=${this.$route.query.id}&tab=${this.$route.query.tab}`,
              );
            },
          },
        },
        l = r,
        g = a("2877"),
        p = a("4d5a"),
        u = a("e359"),
        d = a("65c6"),
        h = a("6ac5"),
        m = a("0016"),
        c = a("9c40"),
        v = a("09e3"),
        _ = a("9989"),
        w = a("59d7"),
        y = a("f09f"),
        q = a("66e5"),
        b = a("4074"),
        L = a("0170"),
        f = a("8380"),
        x = a("eebe"),
        C = a.n(x),
        N = Object(g["a"])(l, i, s, !1, null, null, null);
      t["default"] = N.exports;
      C()(N, "components", {
        QLayout: p["a"],
        QHeader: u["a"],
        QToolbar: d["a"],
        QToolbarTitle: h["a"],
        QIcon: m["a"],
        QBtn: c["a"],
        QPageContainer: v["a"],
        QPage: _["a"],
        QPullToRefresh: w["a"],
        QCard: y["a"],
        QItem: q["a"],
        QItemSection: b["a"],
        QItemLabel: L["a"],
        QSpinnerDots: f["a"],
      });
    },
  },
]);
