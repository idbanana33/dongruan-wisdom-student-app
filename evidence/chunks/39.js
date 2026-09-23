(window["webpackJsonp"] = window["webpackJsonp"] || []).push([
  [39],
  {
    f3a7: function (e, t, s) {
      "use strict";
      s.r(t);
      var a = function () {
          var e = this,
            t = e.$createElement,
            s = e._self._c || t;
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
                        attrs: { flat: "", round: "", dense: "", icon: "keyboard_arrow_left" },
                        on: { click: e.goBack },
                      }),
                      s("q-toolbar-title", [e._v("选择" + e._s(e.menuInfo.title))]),
                      s(
                        "q-btn",
                        {
                          attrs: { flat: "", round: "", dense: "", icon: "search" },
                          on: { click: e.open },
                        },
                        [
                          s(
                            "q-badge",
                            {
                              directives: [
                                {
                                  name: "show",
                                  rawName: "v-show",
                                  value: 0 != e.condCount,
                                  expression: "condCount != 0",
                                },
                              ],
                              attrs: { color: "orange", floating: "", transparent: "" },
                            },
                            [e._v(e._s(e.condCount))],
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
                "q-pull-to-refresh",
                { ref: "pageRefresh", on: { refresh: e.refresh } },
                [
                  s(
                    "q-page-container",
                    [
                      s(
                        "q-page",
                        { staticClass: "bg-grey-3 q-py-sm" },
                        [
                          e._l(e.list, function (t) {
                            return s(
                              "q-card",
                              {
                                key: t.id,
                                staticClass: "bg-white q-mb-sm q-mx-sm",
                                style:
                                  0 == t.process_type_status
                                    ? "border-left:0.25rem solid #f2c037;"
                                    : 1 == t.process_type_status
                                      ? "border-left:0.25rem solid #" + e.menuColor + ";"
                                      : "border-left:0.25rem solid #b5b3b3;",
                                attrs: { flat: "" },
                                on: {
                                  click: function (s) {
                                    return e.goDetail(t.id);
                                  },
                                },
                              },
                              [
                                s(
                                  "q-item",
                                  [
                                    s(
                                      "q-item-section",
                                      [
                                        s("q-item-label", { attrs: { lines: "1" } }, [
                                          s("span", { class: "text-bold" }, [
                                            e._v(e._s(t.process_type_name)),
                                          ]),
                                        ]),
                                        s(
                                          "q-item-label",
                                          {
                                            staticStyle: { "min-width": "250px" },
                                            attrs: { caption: "", lines: "1" },
                                          },
                                          [
                                            s(
                                              "span",
                                              {
                                                staticClass: "text-grey",
                                                staticStyle: { "font-size": "0.8rem" },
                                              },
                                              [
                                                e._v(
                                                  e._s(
                                                    0 == t.into_campus && 0 == t.out_campus
                                                      ? "不需要核验"
                                                      : 1 == t.into_campus && 1 == t.out_campus
                                                        ? "需要入校、离校核验"
                                                        : 1 == t.into_campus
                                                          ? "需要入校核验"
                                                          : "需要离校核验",
                                                  ) + " ",
                                                ),
                                              ],
                                            ),
                                          ],
                                        ),
                                        s(
                                          "q-item-label",
                                          {
                                            staticStyle: { "min-width": "250px" },
                                            attrs: { caption: "", lines: "1" },
                                          },
                                          [
                                            s("span", { staticClass: "neu-css-after-colon " }, [
                                              e._v("流程说明"),
                                            ]),
                                            e._v(
                                              e._s(t.process_type_detail) + "\n                  ",
                                            ),
                                          ],
                                        ),
                                        1 == t.into_campus
                                          ? s(
                                              "q-item-label",
                                              {
                                                staticStyle: { "min-width": "250px" },
                                                attrs: { caption: "", lines: "1" },
                                              },
                                              [
                                                s("span", { staticClass: "neu-css-after-colon " }, [
                                                  e._v("入校申请开始时间"),
                                                ]),
                                                e._v(
                                                  e._s(t.into_campus_apply_begin) +
                                                    "\n                  ",
                                                ),
                                              ],
                                            )
                                          : e._e(),
                                        1 == t.into_campus
                                          ? s(
                                              "q-item-label",
                                              {
                                                staticStyle: { "min-width": "250px" },
                                                attrs: { caption: "", lines: "1" },
                                              },
                                              [
                                                s("span", { staticClass: "neu-css-after-colon " }, [
                                                  e._v("入校申请结束时间"),
                                                ]),
                                                e._v(
                                                  e._s(t.into_campus_apply_end) +
                                                    "\n                  ",
                                                ),
                                              ],
                                            )
                                          : e._e(),
                                        1 == t.out_campus
                                          ? s(
                                              "q-item-label",
                                              {
                                                staticStyle: { "min-width": "250px" },
                                                attrs: { caption: "", lines: "1" },
                                              },
                                              [
                                                s("span", { staticClass: "neu-css-after-colon " }, [
                                                  e._v("离校申请开始时间"),
                                                ]),
                                                e._v(
                                                  e._s(t.out_campus_apply_begin) +
                                                    "\n                  ",
                                                ),
                                              ],
                                            )
                                          : e._e(),
                                        1 == t.out_campus
                                          ? s(
                                              "q-item-label",
                                              {
                                                staticStyle: { "min-width": "250px" },
                                                attrs: { caption: "", lines: "1" },
                                              },
                                              [
                                                s("span", { staticClass: "neu-css-after-colon " }, [
                                                  e._v("离校申请结束时间"),
                                                ]),
                                                e._v(
                                                  e._s(t.out_campus_apply_end) +
                                                    "\n                  ",
                                                ),
                                              ],
                                            )
                                          : e._e(),
                                      ],
                                      1,
                                    ),
                                    s(
                                      "q-item-section",
                                      { attrs: { side: "" } },
                                      [
                                        s(
                                          "q-item-label",
                                          [
                                            s("q-icon", {
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
                          s(
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
                                  return e.loadList(null);
                                },
                              },
                            },
                            [e._v("\n              加载更多...\n            ")],
                          ),
                          s(
                            "div",
                            {
                              directives: [
                                {
                                  name: "show",
                                  rawName: "v-show",
                                  value:
                                    !e.isLoading &&
                                    e.paging.pageCount == e.paging.pageNum &&
                                    0 != e.list.length,
                                  expression:
                                    "!isLoading && paging.pageCount == paging.pageNum && list.length != 0",
                                },
                              ],
                              staticClass: "text-center text-grey q-pt-sm q-pb-md",
                            },
                            [e._v("\n              没有更多了\n            ")],
                          ),
                          s(
                            "div",
                            {
                              directives: [
                                {
                                  name: "show",
                                  rawName: "v-show",
                                  value: !e.isLoading && 0 == e.list.length,
                                  expression: "!isLoading && list.length == 0",
                                },
                              ],
                              staticClass: "text-center text-grey q-pt-sm q-pb-md",
                            },
                            [e._v("\n              暂无流程\n            ")],
                          ),
                          s(
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
                            [s("q-spinner-dots", { attrs: { color: "primary", size: "md" } })],
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
              s(
                "q-dialog",
                {
                  attrs: { position: "bottom" },
                  model: {
                    value: e.dialog,
                    callback: function (t) {
                      e.dialog = t;
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
                        "q-card-section",
                        { staticClass: "row items-center justify-between", attrs: { dense: "" } },
                        [
                          s("q-btn", {
                            attrs: { outline: "", label: "取消", color: "grey", size: "md" },
                            on: {
                              click: function (t) {
                                return e.close();
                              },
                            },
                          }),
                          s("q-btn", {
                            attrs: { unelevated: "", label: "确定", color: "primary", size: "md" },
                            on: { click: e.getCondition },
                          }),
                        ],
                        1,
                      ),
                      s("q-separator"),
                      s(
                        "q-list",
                        { attrs: { bordered: "" } },
                        [
                          s(
                            "q-item",
                            {
                              directives: [{ name: "ripple", rawName: "v-ripple" }],
                              attrs: { clickable: "" },
                            },
                            [
                              s("q-item-section", { attrs: { avatar: "", top: "" } }, [
                                s("span", [e._v("综合查询")]),
                              ]),
                              s(
                                "q-item-section",
                                [
                                  s("q-input", {
                                    attrs: { outlined: "", clearable: "", dense: "" },
                                    model: {
                                      value: e.queryModel.mutli_search,
                                      callback: function (t) {
                                        e.$set(e.queryModel, "mutli_search", t);
                                      },
                                      expression: "queryModel.mutli_search",
                                    },
                                  }),
                                  s(
                                    "q-item-label",
                                    {
                                      staticStyle: { "margin-top": "4px" },
                                      attrs: { caption: "" },
                                    },
                                    [e._v("可以查询流程名称")],
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
        i = [],
        n = (s("13d5"), s("ded3")),
        o = s.n(n),
        r = s("ad56"),
        l = {
          name: "processStudentIndex",
          data() {
            return {
              menuColor: Object(r["d"])("process"),
              menuInfo: null,
              dialog: !1,
              title: "",
              list: [],
              paging: { pageSize: 30, pageNum: 0, pageCount: 0 },
              queryModel: { status: "", mutli_search: "" },
              condCount: 0,
              originalCond: {},
              isLoading: !1,
              service_flag: "N",
            };
          },
          mounted() {
            if (window.localStorage.getItem("menu")) {
              this.service_flag = this.$route.query.service_flag;
              let e = "process";
              ((e = "N" === this.service_flag ? "process" : "process_gate"),
                (this.menuInfo = JSON.parse(window.localStorage.getItem("menu")).find(
                  (t) => t.id === e,
                )));
            }
            (window.history &&
              window.history.pushState &&
              (history.pushState(null, null, document.URL),
              window.addEventListener("popstate", this.goBack, !1)),
              this.loadList(() => {}));
          },
          destroyed() {
            window.removeEventListener("popstate", this.goBack, !1);
          },
          methods: {
            refresh(e) {
              this.loadList(e);
            },
            loadList(e) {
              (e && ((this.paging.pageNum = 0), (this.list = [])),
                (this.paging.pageNum += 1),
                (this.isLoading = !0),
                this.$axiosAction(
                  "/api/student/process/process.api",
                  o()(
                    o()({ action: "queryList" }, this.queryModel),
                    {},
                    {
                      pageSize: this.paging.pageSize,
                      pageNum: this.paging.pageNum,
                      service_flag: this.service_flag,
                    },
                  ),
                )
                  .then((t) => {
                    if (0 === t.data.code) {
                      this.list = this.list.concat(t.data.result.list);
                      const {
                        pageSize: e,
                        pageNum: s,
                        rowCount: a,
                        pageCount: i,
                        startIndex: n,
                        endIndex: r,
                      } = o()({}, t.data.result);
                      this.paging = {
                        pageSize: e,
                        pageNum: s,
                        rowCount: a,
                        pageCount: i,
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
              ((this.list = []), (this.paging = { pageSize: 30, pageNum: 0, pageCount: 0 }));
            },
            goBack() {
              this.$router.push("/student/process/index?service_flag=" + this.service_flag);
            },
            open() {
              ((this.dialog = !0),
                (this.originalCond = Object.keys(this.queryModel).reduce(
                  (e, t) => ((e[t] = this.queryModel[t]), e),
                  {},
                )));
            },
            close() {
              ((this.dialog = !1),
                (this.queryModel = Object.keys(this.originalCond).reduce(
                  (e, t) => ((e[t] = this.originalCond[t]), e),
                  {},
                )));
            },
            getCondition() {
              ((this.condCount = Object.keys(this.queryModel).reduce(
                (e, t) => (this.queryModel[t] ? e + 1 : e),
                0,
              )),
                this.$refs.pageRefresh.trigger(),
                (this.dialog = !1));
            },
            getValue(e) {
              this.queryModel.status === e
                ? (this.queryModel.status = "")
                : (this.queryModel.status = e);
            },
            goDetail(e) {
              this.$router.push(
                "/student/process/NewProcess?id=" + e + "&service_flag=" + this.service_flag,
              );
            },
          },
        },
        c = l,
        p = s("2877"),
        d = s("4d5a"),
        u = s("e359"),
        g = s("65c6"),
        m = s("9c40"),
        h = s("6ac5"),
        _ = s("58a81"),
        q = s("59d7"),
        v = s("09e3"),
        f = s("9989"),
        b = s("f09f"),
        y = s("66e5"),
        w = s("4074"),
        C = s("0170"),
        x = s("0016"),
        L = s("8380"),
        S = s("24e8"),
        k = s("6b1d"),
        N = s("a370"),
        Q = s("eb85"),
        I = s("1c1c"),
        M = s("27f9"),
        z = s("714f"),
        D = s("eebe"),
        $ = s.n(D),
        j = Object(p["a"])(c, a, i, !1, null, null, null);
      t["default"] = j.exports;
      ($()(j, "components", {
        QLayout: d["a"],
        QHeader: u["a"],
        QToolbar: g["a"],
        QBtn: m["a"],
        QToolbarTitle: h["a"],
        QBadge: _["a"],
        QPullToRefresh: q["a"],
        QPageContainer: v["a"],
        QPage: f["a"],
        QCard: b["a"],
        QItem: y["a"],
        QItemSection: w["a"],
        QItemLabel: C["a"],
        QIcon: x["a"],
        QSpinnerDots: L["a"],
        QDialog: S["a"],
        QLinearProgress: k["a"],
        QCardSection: N["a"],
        QSeparator: Q["a"],
        QList: I["a"],
        QInput: M["a"],
      }),
        $()(j, "directives", { Ripple: z["a"] }));
    },
  },
]);
