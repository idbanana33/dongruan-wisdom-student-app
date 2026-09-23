(window["webpackJsonp"] = window["webpackJsonp"] || []).push([
  [49],
  {
    "048f": function (t, e, a) {
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
                        attrs: { flat: "", round: "", dense: "", icon: "keyboard_arrow_left" },
                        on: { click: t.goBack },
                      }),
                      a("q-toolbar-title", [t._v("我负责的签到")]),
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
                                key: e.id,
                                staticClass: "bg-white q-mb-sm q-mx-sm",
                                staticStyle: { "border-left": "0.25rem solid #21ba45" },
                                attrs: { flat: "" },
                              },
                              [
                                a(
                                  "q-item",
                                  {
                                    attrs: { clickable: "进行中" == e.status },
                                    on: {
                                      click: function (a) {
                                        return t.goDetail(e.id, e.title, e.batch_no);
                                      },
                                    },
                                  },
                                  [
                                    a(
                                      "q-item-section",
                                      [
                                        a(
                                          "q-item-label",
                                          { staticClass: "text-subtitle1 row items-center" },
                                          [
                                            t._v(
                                              "\n                  " +
                                                t._s(e.title) +
                                                "\n                  ",
                                            ),
                                            a(
                                              "q-badge",
                                              {
                                                staticClass: "q-ml-xs",
                                                attrs: { color: "grey-5", "text-color": "white" },
                                              },
                                              [t._v(t._s(e.signin_type_name))],
                                            ),
                                          ],
                                          1,
                                        ),
                                        a(
                                          "q-item-label",
                                          { staticClass: "q-mb-xs", attrs: { caption: "" } },
                                          [
                                            a("span", { staticClass: "neu-css-after-colon" }, [
                                              t._v("发起人"),
                                            ]),
                                            t._v(t._s(e.name) + "\n                "),
                                          ],
                                        ),
                                        a(
                                          "q-item-label",
                                          {
                                            staticStyle: { "min-width": "250px" },
                                            attrs: { caption: "", lines: "1" },
                                          },
                                          [
                                            a("span", { staticClass: "neu-css-after-colon " }, [
                                              t._v("签到时间"),
                                            ]),
                                            t._v(
                                              t._s(e.begin_time) +
                                                " 至 " +
                                                t._s(e.end_time) +
                                                "\n                ",
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
                                          "q-item-label",
                                          [
                                            a("q-icon", {
                                              staticClass: "text-grey",
                                              attrs: { name: "keyboard_arrow_right", size: "xs" },
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
                                  return t.getQrPersonList(null);
                                },
                              },
                            },
                            [t._v("\n              加载更多...\n            ")],
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
                            [t._v("\n              没有更多了\n            ")],
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
                            [t._v("\n              暂无需要处理的任务\n            ")],
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
        i = [],
        n = a("ded3"),
        o = a.n(n),
        r = {
          name: "NeuSigninList",
          data() {
            return { list: [], paging: { pageSize: 10, pageNum: 0, pageCount: 0 }, isLoading: !1 };
          },
          destroyed() {
            window.removeEventListener("popstate", this.goBack, !1);
          },
          mounted() {
            (window.history &&
              window.history.pushState &&
              (history.pushState(null, null, document.URL),
              window.addEventListener("popstate", this.goBack, !1)),
              this.getQrPersonList(() => {}));
          },
          methods: {
            getQrPersonList(t) {
              (t && ((this.paging.pageNum = 0), (this.list = [])),
                (this.paging.pageNum += 1),
                (this.isLoading = !0),
                this.$axiosAction("/api/student/signin/signin.api", {
                  action: "getQrcodeList",
                  pageSize: this.paging.pageSize,
                  pageNum: this.paging.pageNum,
                })
                  .then((e) => {
                    if (0 === e.data.code) {
                      this.list = this.list.concat(e.data.result.list);
                      const {
                        pageSize: t,
                        pageNum: a,
                        rowCount: s,
                        pageCount: i,
                        startIndex: n,
                        endIndex: r,
                      } = o()({}, e.data.result);
                      this.paging = {
                        pageSize: t,
                        pageNum: a,
                        rowCount: s,
                        pageCount: i,
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
            refresh(t) {
              this.getQrPersonList(t);
            },
            goBack() {
              this.$router.push("/student/signin/index");
            },
            goDetail(t, e, a) {
              this.$axiosAction("/api/student/signin/signin.api", {
                action: "updateSigninPersonalSigninSuccess",
                id: t,
                batch_no: a,
              }).then((s) => {
                0 === s.data.code &&
                  this.$router.push({
                    name: "/student/signin/qrcodePersonDetails",
                    params: { id: t, batch_no: a, title: e },
                  });
              });
            },
          },
        },
        g = r,
        l = a("2877"),
        c = a("4d5a"),
        p = a("e359"),
        d = a("65c6"),
        u = a("9c40"),
        m = a("6ac5"),
        h = a("09e3"),
        b = a("9989"),
        w = a("59d7"),
        q = a("f09f"),
        v = a("66e5"),
        x = a("4074"),
        _ = a("0170"),
        f = a("58a81"),
        L = a("0016"),
        C = a("8380"),
        y = a("eebe"),
        Q = a.n(y),
        N = Object(l["a"])(g, s, i, !1, null, null, null);
      e["default"] = N.exports;
      Q()(N, "components", {
        QLayout: c["a"],
        QHeader: p["a"],
        QToolbar: d["a"],
        QBtn: u["a"],
        QToolbarTitle: m["a"],
        QPageContainer: h["a"],
        QPage: b["a"],
        QPullToRefresh: w["a"],
        QCard: q["a"],
        QItem: v["a"],
        QItemSection: x["a"],
        QItemLabel: _["a"],
        QBadge: f["a"],
        QIcon: L["a"],
        QSpinnerDots: C["a"],
      });
    },
  },
]);
