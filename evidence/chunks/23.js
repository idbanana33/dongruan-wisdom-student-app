(window["webpackJsonp"] = window["webpackJsonp"] || []).push([
  [23],
  {
    def2: function (t, e, a) {
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
                      a("q-toolbar-title", [t._v("班级协助")]),
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
                                style: "border-left:0.25rem solid #" + t.menuColor,
                                attrs: { flat: "" },
                              },
                              [
                                a(
                                  "q-item",
                                  {
                                    attrs: { clickable: "" },
                                    on: {
                                      click: function (a) {
                                        return t.checkDetail(e.apply_id, e.batch_no);
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
                                          ],
                                        ),
                                        a("q-item-label", { attrs: { caption: "", lines: "2" } }, [
                                          a("span", { staticClass: "neu-css-after-colon" }, [
                                            t._v("可" + t._s(t.menuInfo.title) + "人数"),
                                          ]),
                                          t._v(t._s(e.applytotal) + "\n                  "),
                                        ]),
                                        a("q-item-label", { attrs: { caption: "", lines: "2" } }, [
                                          a("span", { staticClass: "neu-css-after-colon" }, [
                                            t._v("已" + t._s(t.menuInfo.title) + "人数"),
                                          ]),
                                          t._v(t._s(e.applyed) + "\n                      "),
                                          a(
                                            "span",
                                            { staticClass: "neu-css-after-colon q-ml-lg" },
                                            [t._v("未" + t._s(t.menuInfo.title) + "人数")],
                                          ),
                                          a("span", { class: e.noapply > 0 ? "text-red" : "" }, [
                                            t._v(t._s(e.noapply)),
                                          ]),
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
                                  return t.loadList(null);
                                },
                              },
                            },
                            [t._v("\n              加载更多...\n          ")],
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
                            [t._v("\n              没有更多了\n          ")],
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
                            [
                              t._v(
                                "\n              暂无进行的" +
                                  t._s(t.menuInfo.title) +
                                  "\n          ",
                              ),
                            ],
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
        p = a("ad56"),
        l = {
          name: "applyStumanage",
          data() {
            return {
              list: [],
              menuColor: "",
              paging: { pageSize: 30, pageNum: 0, pageCount: 0 },
              isLoading: !1,
              applyType: "",
              menuInfo: {},
              apply_type: this.$route.query.type,
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
              (this.applyType = this.$route.query.apply_type),
              (this.menuColor = Object(p["d"])(this.applyType)),
              (this.menuInfo = JSON.parse(window.localStorage.getItem("menu")).find(
                (t) => t.id === this.applyType,
              )),
              this.loadList(() => {}));
          },
          methods: {
            loadList(t) {
              (t && ((this.paging.pageNum = 0), (this.list = [])),
                (this.paging.pageNum += 1),
                (this.isLoading = !0),
                this.$axiosAction("/api/student/apply/apply.api", {
                  action: "getStuManageList",
                  pageSize: this.paging.pageSize,
                  pageNum: this.paging.pageNum,
                  menu_id: this.applyType,
                  apply_type: this.apply_type,
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
                        endIndex: p,
                      } = o()({}, e.data.result);
                      this.paging = {
                        pageSize: t,
                        pageNum: a,
                        rowCount: s,
                        pageCount: i,
                        startIndex: n,
                        endIndex: p,
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
              this.$router.push("/student/apply/index?apply_type=" + this.$route.query.type);
            },
            checkDetail(t, e) {
              this.$router.push(
                `/student/apply/StuManageDetail?id=${t}&batch_no=${e}&apply_type=${this.applyType}&type=${this.$route.query.type}`,
              );
            },
            refresh(t) {
              this.loadList(t);
            },
          },
        },
        r = l,
        g = a("2877"),
        u = a("4d5a"),
        d = a("e359"),
        c = a("65c6"),
        h = a("9c40"),
        m = a("6ac5"),
        y = a("09e3"),
        _ = a("9989"),
        w = a("59d7"),
        f = a("f09f"),
        q = a("66e5"),
        v = a("4074"),
        b = a("0170"),
        C = a("58a81"),
        x = a("0016"),
        L = a("8380"),
        N = a("eebe"),
        k = a.n(N),
        I = Object(g["a"])(r, s, i, !1, null, null, null);
      e["default"] = I.exports;
      k()(I, "components", {
        QLayout: u["a"],
        QHeader: d["a"],
        QToolbar: c["a"],
        QBtn: h["a"],
        QToolbarTitle: m["a"],
        QPageContainer: y["a"],
        QPage: _["a"],
        QPullToRefresh: w["a"],
        QCard: f["a"],
        QItem: q["a"],
        QItemSection: v["a"],
        QItemLabel: b["a"],
        QBadge: C["a"],
        QIcon: x["a"],
        QSpinnerDots: L["a"],
      });
    },
  },
]);
