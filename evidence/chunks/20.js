(window["webpackJsonp"] = window["webpackJsonp"] || []).push([
  [20],
  {
    "700f": function (t, e, i) {
      "use strict";
      i.r(e);
      var a = function () {
          var t = this,
            e = t.$createElement,
            i = t._self._c || e;
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
                        on: { click: t.goBack },
                      }),
                      i("q-toolbar-title", [t._v("未读消息")]),
                      i(
                        "q-item-label",
                        {
                          directives: [
                            {
                              name: "show",
                              rawName: "v-show",
                              value: 0 != t.list.length,
                              expression: "list.length != 0",
                            },
                          ],
                          attrs: { caption: "" },
                          on: { click: t.clearList },
                        },
                        [t._v("清除")],
                      ),
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
                    { staticClass: "bg-grey-3 q-pb-sm" },
                    [
                      i(
                        "q-pull-to-refresh",
                        { on: { refresh: t.refresh } },
                        [
                          t._l(t.list, function (e) {
                            return i(
                              "q-card",
                              {
                                key: e.id,
                                staticClass: "bg-white q-mb-sm q-mx-sm",
                                style: "border-left:0.25rem solid #" + t.getMenuColor(e.menu_id),
                                attrs: { flat: "" },
                              },
                              [
                                i(
                                  "q-item",
                                  {
                                    directives: [{ name: "ripple", rawName: "v-ripple" }],
                                    attrs: { clickable: "" },
                                    on: {
                                      click: function (i) {
                                        return t.goDetail(e.id, e.link);
                                      },
                                    },
                                  },
                                  [
                                    i(
                                      "q-item-section",
                                      [
                                        i("q-item-label", { attrs: { lines: "1" } }, [
                                          t._v(t._s(e.title)),
                                        ]),
                                        i("q-item-label", { attrs: { caption: "", lines: "2" } }, [
                                          t._v(
                                            "\n                " +
                                              t._s(e.message) +
                                              "\n              ",
                                          ),
                                        ]),
                                      ],
                                      1,
                                    ),
                                    i(
                                      "q-item-section",
                                      { attrs: { side: "", top: "" } },
                                      [
                                        i("q-item-label", { attrs: { caption: "" } }, [
                                          t._v(
                                            "\n                " +
                                              t._s(
                                                e.days > 1
                                                  ? e.push_date
                                                  : 1 == e.days
                                                    ? e.days + "天前"
                                                    : 0 != e.hours
                                                      ? e.hours + "小时前"
                                                      : 0 != e.mins
                                                        ? e.mins + "分钟前"
                                                        : "刚刚",
                                              ) +
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
                          i(
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
                          i(
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
                          i(
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
                            [t._v("\n          暂无未读消息\n        ")],
                          ),
                          i(
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
                            [i("q-spinner-dots", { attrs: { color: "primary", size: "md" } })],
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
        n = i("ded3"),
        o = i.n(n),
        r = i("ad56"),
        d = {
          name: "StudentTodo",
          data() {
            return { list: [], paging: { pageSize: 30, pageNum: 0, pageCount: 0 }, isLoading: !1 };
          },
          computed: {},
          created() {
            window.addEventListener("refreshTodoList", this.refreshTodoList, !1);
          },
          destroyed() {
            (window.removeEventListener("popstate", this.goBack, !1),
              window.removeEventListener("refreshTodoList", this.refreshTodoList, !1));
          },
          mounted() {
            (window.history &&
              window.history.pushState &&
              (history.pushState(null, null, document.URL),
              window.addEventListener("popstate", this.goBack, !1)),
              this.refreshTodoList());
          },
          methods: {
            refreshTodoList() {
              this.loadList(() => {});
            },
            loadList(t) {
              (t && ((this.paging.pageNum = 0), (this.list = [])),
                (this.paging.pageNum += 1),
                (this.isLoading = !0),
                this.$axiosAction("/api/student/home/home.api", {
                  action: "getHomeList",
                  pageSize: this.paging.pageSize,
                  pageNum: this.paging.pageNum,
                })
                  .then((e) => {
                    if (0 === e.data.code) {
                      this.list = this.list.concat(e.data.result.list);
                      const {
                        pageSize: t,
                        pageNum: i,
                        rowCount: a,
                        pageCount: s,
                        startIndex: n,
                        endIndex: r,
                      } = o()({}, e.data.result);
                      this.paging = {
                        pageSize: t,
                        pageNum: i,
                        rowCount: a,
                        pageCount: s,
                        startIndex: n,
                        endIndex: r,
                      };
                      const d = new CustomEvent("setNotificationBadge", { detail: { badge: a } });
                      window.dispatchEvent(d);
                    } else this.setDefaultList();
                    (t && t(), (this.isLoading = !1));
                  })
                  .catch((e) => {
                    (this.setDefaultList(), t && t(), (this.isLoading = !1));
                  }));
            },
            setDefaultList() {
              ((this.list = []), (this.paging = { pageSize: 30, pageNum: 0, pageCount: 0 }));
              const t = new CustomEvent("setNotificationBadge", { detail: { badge: 0 } });
              window.dispatchEvent(t);
            },
            refresh(t) {
              this.loadList(t);
            },
            clearList() {
              this.$q
                .dialog({ title: "确认清除", message: "确认清除当前列表信息？", cancel: !0 })
                .onOk(() => {
                  this.$axiosAction("/api/push/push.api", { action: "clearStatus" }).then(() => {
                    this.refreshTodoList();
                  });
                });
            },
            goDetail(t, e) {
              e &&
                (this.$axiosAction(
                  "/api/push/push.api",
                  { action: "updateStatus", id: t },
                  "post",
                  !1,
                ).then((t) => {
                  if (0 === t.data.code) {
                    const e = new CustomEvent("setNotificationBadge", {
                      detail: { badge: t.data.badge },
                    });
                    window.dispatchEvent(e);
                  }
                }),
                this.$router.push(e));
            },
            getMenuColor(t) {
              return Object(r["d"])(t);
            },
            goBack() {
              this.$router.push("/student/index");
            },
          },
        },
        l = d,
        g = i("2877"),
        p = i("4d5a"),
        c = i("e359"),
        h = i("65c6"),
        u = i("9c40"),
        m = i("6ac5"),
        w = i("0170"),
        v = i("09e3"),
        f = i("9989"),
        L = i("59d7"),
        b = i("f09f"),
        q = i("66e5"),
        x = i("4074"),
        C = i("8380"),
        N = i("714f"),
        y = i("eebe"),
        _ = i.n(y),
        k = Object(g["a"])(l, a, s, !1, null, null, null);
      e["default"] = k.exports;
      (_()(k, "components", {
        QLayout: p["a"],
        QHeader: c["a"],
        QToolbar: h["a"],
        QBtn: u["a"],
        QToolbarTitle: m["a"],
        QItemLabel: w["a"],
        QPageContainer: v["a"],
        QPage: f["a"],
        QPullToRefresh: L["a"],
        QCard: b["a"],
        QItem: q["a"],
        QItemSection: x["a"],
        QSpinnerDots: C["a"],
      }),
        _()(k, "directives", { Ripple: N["a"] }));
    },
  },
]);
