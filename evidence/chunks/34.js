(window["webpackJsonp"] = window["webpackJsonp"] || []).push([
  [34],
  {
    d2bb0: function (t, e, a) {
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
                      a("q-toolbar-title", [t._v(t._s(t.menuInfo.title))]),
                      a(
                        "span",
                        {
                          directives: [
                            {
                              name: "show",
                              rawName: "v-show",
                              value: 0 !== t.badgeCount,
                              expression: "badgeCount !== 0",
                            },
                          ],
                          staticClass: "text-red",
                          on: { click: t.goStuManage },
                        },
                        [t._v("班级协助>")],
                      ),
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
                        "q-pull-to-refresh",
                        { on: { refresh: t.refresh } },
                        [
                          t._l(t.list, function (e) {
                            return a(
                              "q-card",
                              {
                                key: e.notice_id,
                                staticClass: "q-mb-sm q-mx-sm",
                                style:
                                  null == e.feedback_time
                                    ? "border-left:0.25rem solid #c10015;"
                                    : null != e.feedback_time &&
                                        1 == e.confirm_flag &&
                                        null == e.confirm_time
                                      ? "border-left:0.25rem solid #027be3;"
                                      : "border-left:0.25rem solid #21ba45;",
                                attrs: { flat: "" },
                                on: {
                                  click: function (a) {
                                    return t.checkDetail(e.notice_id);
                                  },
                                },
                              },
                              [
                                a(
                                  "q-item",
                                  [
                                    a(
                                      "q-item-section",
                                      [
                                        a(
                                          "q-item-label",
                                          [
                                            a(
                                              "q-chip",
                                              {
                                                attrs: {
                                                  square: "",
                                                  color:
                                                    "N" == e.notice_priority ||
                                                    "E" == e.notice_priority ||
                                                    "I" == e.notice_priority
                                                      ? e.notice_priority_color
                                                      : "gray",
                                                  "text-color": "white",
                                                  icon: "email",
                                                  size: "sm",
                                                },
                                              },
                                              [
                                                t._v(
                                                  "\n                " +
                                                    t._s(e.notice_priority_name) +
                                                    "\n                ",
                                                ),
                                              ],
                                            ),
                                            a("q-icon", {
                                              directives: [
                                                {
                                                  name: "show",
                                                  rawName: "v-show",
                                                  value: null != e.attachment,
                                                  expression: "contact.attachment != null",
                                                },
                                              ],
                                              attrs: {
                                                name: "attach_file",
                                                color: "grey",
                                                size: "xs",
                                              },
                                            }),
                                          ],
                                          1,
                                        ),
                                        a("q-item-label", { attrs: { lines: "1" } }, [
                                          a(
                                            "span",
                                            { class: null == e.feedback_time ? "text-bold" : "" },
                                            [t._v(t._s(e.title))],
                                          ),
                                        ]),
                                        a("q-item-label", { attrs: { caption: "", lines: "2" } }),
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
                                              attrs: { name: "keyboard_arrow_right", size: "xs" },
                                            }),
                                          ],
                                          1,
                                        ),
                                      ],
                                      1,
                                    ),
                                    a(
                                      "div",
                                      {
                                        staticClass: "absolute-top-right q-pa-sm",
                                        staticStyle: { color: "grey", "font-size": "12px" },
                                      },
                                      [
                                        t._v(
                                          "\n              " +
                                            t._s(
                                              e.days > 1
                                                ? e.published_date
                                                : 1 == e.days
                                                  ? e.days + "天前"
                                                  : 0 != e.hours
                                                    ? e.hours + "小时前"
                                                    : 0 != e.mins
                                                      ? e.mins + "分钟前"
                                                      : "刚刚",
                                            ) +
                                            "\n            ",
                                        ),
                                      ],
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
                            [t._v("\n          加载更多...\n        ")],
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
                            [t._v("\n          没有更多了\n        ")],
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
                            [t._v("\n          暂无通知\n        ")],
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
            ],
            1,
          );
        },
        s = [],
        n = a("ded3"),
        o = a.n(n),
        r = {
          name: "NoticeIndex",
          data() {
            return {
              list: [],
              paging: { pageSize: 30, pageNum: 0, pageCount: 0 },
              isLoading: !1,
              badgeCount: 0,
            };
          },
          computed: {
            menuInfo() {
              return window.localStorage.getItem("menu")
                ? JSON.parse(window.localStorage.getItem("menu")).find((t) => "notice" === t.id)
                : {};
            },
          },
          destroyed() {
            window.removeEventListener("popstate", this.goBack, !1);
          },
          mounted() {
            (window.history &&
              window.history.pushState &&
              (history.pushState(null, null, document.URL),
              window.addEventListener("popstate", this.goBack, !1)),
              this.loadList(() => {}),
              this.getbadgeCount());
          },
          methods: {
            loadList(t) {
              (t && ((this.paging.pageNum = 0), (this.list = [])),
                (this.paging.pageNum += 1),
                (this.isLoading = !0),
                this.$axiosAction("/api/student/notice/notice.api", {
                  action: "getNotice",
                  pageSize: this.paging.pageSize,
                  pageNum: this.paging.pageNum,
                })
                  .then((e) => {
                    if (0 === e.data.code) {
                      this.list = this.list.concat(e.data.result.list);
                      const {
                        pageSize: t,
                        pageNum: a,
                        rowCount: i,
                        pageCount: s,
                        startIndex: n,
                        endIndex: r,
                      } = o()({}, e.data.result);
                      this.paging = {
                        pageSize: t,
                        pageNum: a,
                        rowCount: i,
                        pageCount: s,
                        startIndex: n,
                        endIndex: r,
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
            goBack() {
              this.$router.push("/student/index");
            },
            checkDetail(t) {
              this.$router.push(`/student/notice/detail?id=${t}`);
            },
            refresh(t) {
              this.loadList(t);
            },
            getbadgeCount() {
              this.$axiosAction("/api/student/notice/notice.api", { action: "getStuManageIsExist" })
                .then((t) => {
                  if (0 === t.data.code) {
                    const e = t.data.result;
                    null !== e && "" !== e && (this.badgeCount = 1);
                  }
                })
                .catch((t) => {});
            },
            goStuManage() {
              this.$router.push("/student/notice/stumanage");
            },
          },
        },
        l = r,
        c = a("2877"),
        g = a("4d5a"),
        d = a("e359"),
        u = a("65c6"),
        p = a("9c40"),
        m = a("6ac5"),
        h = a("58a81"),
        b = a("09e3"),
        w = a("9989"),
        f = a("59d7"),
        v = a("f09f"),
        _ = a("66e5"),
        q = a("4074"),
        x = a("0170"),
        y = a("b047"),
        C = a("0016"),
        L = a("8380"),
        N = a("eebe"),
        k = a.n(N),
        S = Object(c["a"])(l, i, s, !1, null, null, null);
      e["default"] = S.exports;
      k()(S, "components", {
        QLayout: g["a"],
        QHeader: d["a"],
        QToolbar: u["a"],
        QBtn: p["a"],
        QToolbarTitle: m["a"],
        QBadge: h["a"],
        QPageContainer: b["a"],
        QPage: w["a"],
        QPullToRefresh: f["a"],
        QCard: v["a"],
        QItem: _["a"],
        QItemSection: q["a"],
        QItemLabel: x["a"],
        QChip: y["a"],
        QIcon: C["a"],
        QSpinnerDots: L["a"],
      });
    },
  },
]);
