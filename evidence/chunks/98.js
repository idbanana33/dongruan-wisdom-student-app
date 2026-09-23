(window["webpackJsonp"] = window["webpackJsonp"] || []).push([
  [98],
  {
    "7f35": function (e, t, a) {
      "use strict";
      a.r(t);
      var s = function () {
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
                      a("q-toolbar-title", [e._v(e._s(e.menuInfo.title))]),
                      a(
                        "q-btn",
                        {
                          attrs: { flat: "", round: "", dense: "", icon: "search" },
                          on: { click: e.open },
                        },
                        [
                          a(
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
              a(
                "q-page-container",
                [
                  a(
                    "q-page",
                    { staticClass: "bg-grey-3 q-pb-sm" },
                    [
                      a(
                        "q-pull-to-refresh",
                        { on: { refresh: e.refresh } },
                        [
                          e._l(e.list, function (t) {
                            return a(
                              "q-card",
                              {
                                key: t.id,
                                staticClass: "bg-white q-mb-sm q-mx-sm",
                                style:
                                  0 == t.status
                                    ? "border-left:0.25rem solid #b5b3b3;"
                                    : "border-left:0.25rem solid #027be3;",
                                attrs: { flat: "" },
                                on: {
                                  click: function (a) {
                                    return e.goDetail(t.id);
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
                                          { staticClass: "text-subtitle1 row items-center" },
                                          [
                                            e._v(e._s(t.title)),
                                            a(
                                              "q-badge",
                                              {
                                                staticClass: "q-ml-xs",
                                                attrs: {
                                                  color: t.notice_priority_color,
                                                  "text-color": "white",
                                                },
                                              },
                                              [e._v(e._s(t.notice_priority_name))],
                                            ),
                                          ],
                                          1,
                                        ),
                                        a(
                                          "q-item-label",
                                          { staticClass: "q-mb-xs", attrs: { caption: "" } },
                                          [
                                            a("span", { staticClass: "neu-css-after-colon" }, [
                                              e._v("阅读率"),
                                            ]),
                                            e._v(
                                              e._s(t.feedback_total) +
                                                "/" +
                                                e._s(t.total) +
                                                "\n                ",
                                            ),
                                            a(
                                              "span",
                                              {
                                                class:
                                                  t.feedback_ratio >= 85
                                                    ? "text-positive"
                                                    : t.feedback_ratio >= 60
                                                      ? "text-warning"
                                                      : "text-red",
                                              },
                                              [e._v("(" + e._s(t.feedback_ratio) + "%)")],
                                            ),
                                            a(
                                              "span",
                                              {
                                                directives: [
                                                  {
                                                    name: "show",
                                                    rawName: "v-show",
                                                    value: 1 == t.confirm_flag,
                                                    expression: "item.confirm_flag == 1",
                                                  },
                                                ],
                                                staticClass: "q-ml-lg",
                                              },
                                              [
                                                e._v(
                                                  "确认率：" +
                                                    e._s(t.confirm_total) +
                                                    "/" +
                                                    e._s(t.total),
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
                                                    value: 1 == t.confirm_flag,
                                                    expression: "item.confirm_flag == 1",
                                                  },
                                                ],
                                                class:
                                                  t.confirm_ratio >= 85
                                                    ? "text-positive"
                                                    : t.confirm_ratio >= 60
                                                      ? "text-warning"
                                                      : "text-red",
                                              },
                                              [e._v("(" + e._s(t.confirm_ratio) + "%)")],
                                            ),
                                          ],
                                        ),
                                        a(
                                          "q-item-label",
                                          { staticClass: "q-mb-xs", attrs: { caption: "" } },
                                          [
                                            a("span", { staticClass: "neu-css-after-colon" }, [
                                              e._v("发起人"),
                                            ]),
                                            e._v(e._s(t.teacher_name) + "\n              "),
                                          ],
                                        ),
                                        a(
                                          "q-item-label",
                                          {
                                            staticStyle: { "min-width": "250px" },
                                            attrs: { caption: "", lines: "1" },
                                          },
                                          [
                                            a("span", { staticClass: "neu-css-after-colon" }, [
                                              e._v("执行时间"),
                                            ]),
                                            e._v(
                                              e._s(t.push_time) +
                                                " 至 " +
                                                e._s(t.feedback_deadline) +
                                                "\n              ",
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
                                    0 != e.list.length,
                                  expression:
                                    "!isLoading && paging.pageCount == paging.pageNum && list.length != 0",
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
                                  value: !e.isLoading && 0 == e.list.length,
                                  expression: "!isLoading && list.length == 0",
                                },
                              ],
                              staticClass: "text-center text-grey q-pt-sm q-pb-md",
                            },
                            [e._v("\n          暂无通知\n        ")],
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
                      a(
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
                          a(
                            "q-card",
                            { staticStyle: { width: "350px" } },
                            [
                              a("q-linear-progress", { attrs: { value: 1, color: "primary" } }),
                              a(
                                "q-card-section",
                                {
                                  staticClass: "row items-center justify-between",
                                  attrs: { dense: "" },
                                },
                                [
                                  a("q-btn", {
                                    attrs: {
                                      outline: "",
                                      label: "取消",
                                      color: "grey",
                                      size: "md",
                                    },
                                    on: {
                                      click: function (t) {
                                        return e.close();
                                      },
                                    },
                                  }),
                                  a("q-btn", {
                                    attrs: {
                                      unelevated: "",
                                      label: "确定",
                                      color: "primary",
                                      size: "md",
                                    },
                                    on: { click: e.getCondition },
                                  }),
                                ],
                                1,
                              ),
                              a("q-separator"),
                              a(
                                "q-list",
                                { attrs: { bordered: "" } },
                                [
                                  a(
                                    "q-item",
                                    { attrs: { clickable: "" } },
                                    [
                                      a("q-item-section", { attrs: { avatar: "", top: "" } }, [
                                        a("span", [e._v("阅读状态")]),
                                      ]),
                                      a("q-item-section", [
                                        a(
                                          "div",
                                          { staticClass: "row justify-evenly" },
                                          e._l(
                                            [
                                              { label: "统计中", value: "1" },
                                              { label: "已结束", value: "2" },
                                            ],
                                            function (t) {
                                              return a(
                                                "q-btn",
                                                {
                                                  key: t.value,
                                                  attrs: {
                                                    outline: "",
                                                    color:
                                                      t.value == e.queryModel.status
                                                        ? "primary"
                                                        : "grey",
                                                  },
                                                  on: {
                                                    click: function (a) {
                                                      return e.getValue(t.value);
                                                    },
                                                  },
                                                },
                                                [
                                                  e._v(
                                                    "\n                  " +
                                                      e._s(t.label) +
                                                      "\n                  ",
                                                  ),
                                                  a(
                                                    "q-badge",
                                                    {
                                                      directives: [
                                                        {
                                                          name: "show",
                                                          rawName: "v-show",
                                                          value: e.queryModel.status == t.value,
                                                          expression:
                                                            "queryModel.status == item.value",
                                                        },
                                                      ],
                                                      attrs: { color: "orange", floating: "" },
                                                    },
                                                    [e._v("√")],
                                                  ),
                                                ],
                                                1,
                                              );
                                            },
                                          ),
                                          1,
                                        ),
                                      ]),
                                    ],
                                    1,
                                  ),
                                  a("q-separator"),
                                  a(
                                    "q-item",
                                    {
                                      directives: [{ name: "ripple", rawName: "v-ripple" }],
                                      attrs: { clickable: "" },
                                    },
                                    [
                                      a("q-item-section", { attrs: { avatar: "", top: "" } }, [
                                        a("span", [e._v("综合查询")]),
                                      ]),
                                      a(
                                        "q-item-section",
                                        [
                                          a("q-input", {
                                            attrs: { outlined: "", clearable: "", dense: "" },
                                            model: {
                                              value: e.queryModel.mutli_search,
                                              callback: function (t) {
                                                e.$set(e.queryModel, "mutli_search", t);
                                              },
                                              expression: "queryModel.mutli_search",
                                            },
                                          }),
                                          a(
                                            "q-item-label",
                                            { staticClass: "q-mt-xs", attrs: { caption: "" } },
                                            [e._v("可以查询标题信息")],
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
                      a(
                        "q-page-sticky",
                        { attrs: { position: "bottom-right", offset: e.fabPos } },
                        [
                          a("q-btn", {
                            directives: [
                              {
                                name: "touch-pan",
                                rawName: "v-touch-pan.prevent.mouse",
                                value: e.moveFab,
                                expression: "moveFab",
                                modifiers: { prevent: !0, mouse: !0 },
                              },
                              {
                                name: "show",
                                rawName: "v-show",
                                value: null != e.menuInfo.edit_permit,
                                expression: "menuInfo.edit_permit != null",
                              },
                            ],
                            attrs: { round: "", color: "primary", icon: "add" },
                            on: { click: e.addNotice },
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
        },
        i = [],
        o = (a("13d5"), a("ded3")),
        n = a.n(o),
        r = {
          name: "SigninIndex",
          data() {
            return {
              list: [],
              paging: { pageSize: 30, pageNum: 0, pageCount: 0 },
              isLoading: !1,
              fabPos: [30, 40],
              dialog: !1,
              queryModel: { status: "", mutli_search: "" },
              condCount: 0,
              originalCond: {},
            };
          },
          computed: {
            menuInfo() {
              return window.localStorage.getItem("menu")
                ? JSON.parse(window.localStorage.getItem("menu")).find((e) => "notice" === e.id)
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
              this.loadList(() => {}));
          },
          methods: {
            goBack() {
              this.$router.push("/teacher/index");
            },
            loadList(e) {
              (e && ((this.paging.pageNum = 0), (this.list = [])),
                (this.paging.pageNum += 1),
                (this.isLoading = !0),
                this.$axiosAction(
                  "/api/teacher/notice/notice.api",
                  n()(
                    n()({ action: "queryList" }, this.queryModel),
                    {},
                    { pageSize: this.paging.pageSize, pageNum: this.paging.pageNum },
                  ),
                )
                  .then((t) => {
                    if (0 === t.data.code) {
                      this.list = this.list.concat(t.data.result.list);
                      const {
                        pageSize: e,
                        pageNum: a,
                        rowCount: s,
                        pageCount: i,
                        startIndex: o,
                        endIndex: r,
                      } = n()({}, t.data.result);
                      this.paging = {
                        pageSize: e,
                        pageNum: a,
                        rowCount: s,
                        pageCount: i,
                        startIndex: o,
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
            refresh(e) {
              this.loadList(e);
            },
            addNotice() {
              this.$router.push("/teacher/notice/new");
            },
            moveFab(e) {
              this.fabPos = [this.fabPos[0] - e.delta.x, this.fabPos[1] - e.delta.y];
            },
            goDetail(e) {
              this.$router.push(`/teacher/notice/detail?id=${e}`);
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
            getValue(e) {
              this.queryModel.status === e
                ? (this.queryModel.status = "")
                : (this.queryModel.status = e);
            },
            getCondition() {
              ((this.condCount = Object.keys(this.queryModel).reduce(
                (e, t) => (this.queryModel[t] ? e + 1 : e),
                0,
              )),
                this.loadList(() => {}),
                (this.dialog = !1));
            },
          },
        },
        l = r,
        c = a("2877"),
        d = a("4d5a"),
        u = a("e359"),
        p = a("65c6"),
        g = a("9c40"),
        m = a("6ac5"),
        h = a("58a81"),
        v = a("09e3"),
        b = a("9989"),
        q = a("59d7"),
        f = a("f09f"),
        _ = a("66e5"),
        w = a("4074"),
        y = a("0170"),
        x = a("0016"),
        C = a("8380"),
        k = a("24e8"),
        L = a("6b1d"),
        N = a("a370"),
        Q = a("eb85"),
        S = a("1c1c"),
        I = a("27f9"),
        M = a("de5e"),
        P = a("714f"),
        z = a("75c3"),
        D = a("eebe"),
        $ = a.n(D),
        j = Object(c["a"])(l, s, i, !1, null, null, null);
      t["default"] = j.exports;
      ($()(j, "components", {
        QLayout: d["a"],
        QHeader: u["a"],
        QToolbar: p["a"],
        QBtn: g["a"],
        QToolbarTitle: m["a"],
        QBadge: h["a"],
        QPageContainer: v["a"],
        QPage: b["a"],
        QPullToRefresh: q["a"],
        QCard: f["a"],
        QItem: _["a"],
        QItemSection: w["a"],
        QItemLabel: y["a"],
        QIcon: x["a"],
        QSpinnerDots: C["a"],
        QDialog: k["a"],
        QLinearProgress: L["a"],
        QCardSection: N["a"],
        QSeparator: Q["a"],
        QList: S["a"],
        QInput: I["a"],
        QPageSticky: M["a"],
      }),
        $()(j, "directives", { Ripple: P["a"], TouchPan: z["a"] }));
    },
  },
]);
