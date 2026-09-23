(window["webpackJsonp"] = window["webpackJsonp"] || []).push([
  [14],
  {
    f741: function (t, e, a) {
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
                    { staticClass: "row" },
                    [
                      a("q-btn", {
                        attrs: { flat: "", round: "", dense: "", icon: "keyboard_arrow_left" },
                        on: { click: t.goBack },
                      }),
                      a("q-toolbar-title", { staticClass: "items-center" }, [t._v("报修单列表")]),
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
                        "q-card-section",
                        [
                          a(
                            "q-tabs",
                            {
                              attrs: {
                                dense: "",
                                align: "justify",
                                "indicator-color": "primary",
                                "active-color": "primary",
                              },
                              model: {
                                value: t.checkStatus,
                                callback: function (e) {
                                  t.checkStatus = e;
                                },
                                expression: "checkStatus",
                              },
                            },
                            [
                              a("q-tab", { attrs: { name: "-1", label: "全部" } }),
                              t._l(t.statusOption, function (t) {
                                return a("q-tab", {
                                  key: t.value,
                                  attrs: { name: t.value, label: t.label },
                                });
                              }),
                            ],
                            2,
                          ),
                        ],
                        1,
                      ),
                      a(
                        "q-pull-to-refresh",
                        { ref: "pageRefresh", on: { refresh: t.refresh } },
                        [
                          t._l(this.repair, function (e) {
                            return a(
                              "q-card",
                              {
                                key: e.id,
                                staticClass: "bg-white q-mb-sm q-mx-sm",
                                attrs: { flat: "" },
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
                                          {
                                            staticClass: "text-bold",
                                            staticStyle: { "font-size": "1.2em" },
                                            attrs: { lines: "1" },
                                          },
                                          [
                                            t._v(
                                              "\n                " +
                                                t._s(e.description) +
                                                "\n              ",
                                            ),
                                          ],
                                        ),
                                        a(
                                          "q-item-label",
                                          [
                                            a("span", { staticClass: "text-bold" }, [
                                              t._v(t._s(e.repair_time)),
                                            ]),
                                            a(
                                              "q-chip",
                                              {
                                                staticStyle: { "max-width": "40%" },
                                                attrs: {
                                                  square: "",
                                                  color: "grey-4",
                                                  "text-color": "black",
                                                  size: "sm",
                                                },
                                              },
                                              [
                                                a(
                                                  "span",
                                                  {
                                                    staticStyle: {
                                                      "max-width": "100%",
                                                      overflow: "hidden",
                                                      "text-overflow": "ellipsis",
                                                      "white-space": "nowrap",
                                                    },
                                                  },
                                                  [t._v(t._s(e.repair_type_name))],
                                                ),
                                              ],
                                            ),
                                            a(
                                              "q-chip",
                                              {
                                                attrs: {
                                                  square: "",
                                                  color: "grey-4",
                                                  "text-color": "black",
                                                  size: "sm",
                                                },
                                              },
                                              [
                                                t._v(
                                                  "\n                  " +
                                                    t._s(e.statusinfo) +
                                                    "\n                ",
                                                ),
                                              ],
                                            ),
                                          ],
                                          1,
                                        ),
                                        a("q-item-label", [
                                          a(
                                            "span",
                                            { staticClass: "neu-css-after-colon text-bold" },
                                            [t._v("报修单号")],
                                          ),
                                          t._v(t._s(e.order) + "\n              "),
                                        ]),
                                        a("q-item-label", [
                                          a(
                                            "span",
                                            { staticClass: "neu-css-after-colon text-bold" },
                                            [t._v("期望上门时间")],
                                          ),
                                          t._v(t._s(e.visit_time) + "\n              "),
                                        ]),
                                        a("q-item-label", [
                                          a(
                                            "span",
                                            { staticClass: "neu-css-after-colon text-bold" },
                                            [t._v("已分配")],
                                          ),
                                          t._v(t._s(e.maintainer_name) + "\n              "),
                                        ]),
                                        "3" == e.status
                                          ? a("q-item-label", [
                                              a(
                                                "span",
                                                { staticClass: "neu-css-after-colon text-bold" },
                                                [t._v("改派人员")],
                                              ),
                                              t._v(
                                                t._s(e.reassignment_maintainer_name) +
                                                  "\n              ",
                                              ),
                                            ])
                                          : t._e(),
                                        "3" == e.status
                                          ? a("q-item-label", [
                                              a(
                                                "span",
                                                { staticClass: "neu-css-after-colon text-bold" },
                                                [t._v("改派原因")],
                                              ),
                                              t._v(t._s(e.reason) + "\n              "),
                                            ])
                                          : t._e(),
                                        "2" == e.status || "4" == e.status || "5" == e.status
                                          ? a("q-item-label", [
                                              a(
                                                "span",
                                                { staticClass: "neu-css-after-colon text-bold" },
                                                [t._v("接单时间")],
                                              ),
                                              t._v(
                                                t._s(e.order_receiving_time) + "\n              ",
                                              ),
                                            ])
                                          : t._e(),
                                        "4" == e.status || "5" == e.status
                                          ? a("q-item-label", [
                                              a(
                                                "span",
                                                { staticClass: "neu-css-after-colon text-bold" },
                                                [t._v("维修完成时间")],
                                              ),
                                              t._v(t._s(e.completion_time) + "\n              "),
                                            ])
                                          : t._e(),
                                        a(
                                          "q-item-label",
                                          [
                                            a("q-btn", {
                                              staticClass: "bg-primary q-ml-sm",
                                              staticStyle: { float: "right" },
                                              attrs: {
                                                flat: "",
                                                unelevated: "",
                                                color: "white",
                                                label: "查看详情",
                                                size: "sm",
                                              },
                                              on: {
                                                click: function (a) {
                                                  return t.goDetails(e.id);
                                                },
                                              },
                                            }),
                                            "2" == e.status
                                              ? a("q-btn", {
                                                  staticClass: "bg-primary q-ml-sm",
                                                  staticStyle: { float: "right" },
                                                  attrs: {
                                                    flat: "",
                                                    unelevated: "",
                                                    color: "white",
                                                    label: "维修",
                                                    size: "sm",
                                                  },
                                                  on: {
                                                    click: function (a) {
                                                      return t.goMaintenance(e.id);
                                                    },
                                                  },
                                                })
                                              : t._e(),
                                            "1" == e.status
                                              ? a("q-btn", {
                                                  staticClass: "bg-primary q-ml-sm",
                                                  staticStyle: { float: "right" },
                                                  attrs: {
                                                    flat: "",
                                                    unelevated: "",
                                                    color: "white",
                                                    label: "申请改派",
                                                    size: "sm",
                                                  },
                                                  on: {
                                                    click: function (a) {
                                                      return t.applyForReassignment(e.id);
                                                    },
                                                  },
                                                })
                                              : t._e(),
                                            "1" == e.status
                                              ? a("q-btn", {
                                                  staticClass: "bg-primary q-ml-sm",
                                                  staticStyle: { float: "right" },
                                                  attrs: {
                                                    flat: "",
                                                    unelevated: "",
                                                    color: "white",
                                                    label: "接单",
                                                    size: "sm",
                                                  },
                                                  on: {
                                                    click: function (a) {
                                                      return t.receivingOrders(e.id);
                                                    },
                                                  },
                                                })
                                              : t._e(),
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
                                  return t.loadRepairList(null);
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
                                    0 != t.repair.length,
                                  expression:
                                    "!isLoading && paging.pageCount == paging.pageNum && repair.length != 0",
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
                                  value: !t.isLoading && 0 == t.repair.length,
                                  expression: "!isLoading && repair.length == 0",
                                },
                              ],
                              staticClass: "text-center text-grey q-pt-sm q-pb-md",
                            },
                            [t._v("\n          暂无报修\n        ")],
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
                      a(
                        "q-dialog",
                        {
                          attrs: { persistent: "" },
                          model: {
                            value: t.applyForReassignmentDialog,
                            callback: function (e) {
                              t.applyForReassignmentDialog = e;
                            },
                            expression: "applyForReassignmentDialog",
                          },
                        },
                        [
                          a(
                            "q-card",
                            { staticClass: "full-width", attrs: { flat: "" } },
                            [
                              a("q-card-section", [
                                a(
                                  "div",
                                  {
                                    staticClass: "text-bold",
                                    staticStyle: { "font-size": "1.2em" },
                                  },
                                  [t._v("申请改派")],
                                ),
                              ]),
                              a("q-separator"),
                              a(
                                "q-card-section",
                                [
                                  a(
                                    "div",
                                    {
                                      staticClass:
                                        "text-bold neu-css-after-colon neu-css-before-red-asterisk q-mb-sm",
                                    },
                                    [t._v("改派人员")],
                                  ),
                                  a("q-select", {
                                    attrs: {
                                      "emit-value": "",
                                      "map-options": "",
                                      outlined: "",
                                      "hide-bottom-space": "",
                                      dense: "",
                                      "lazy-rules": "",
                                      rules: [
                                        function (t) {
                                          return (null !== t && "" !== t) || "请选择改派人员";
                                        },
                                      ],
                                      options: t.maintainerList,
                                    },
                                    model: {
                                      value: t.record.maintainer_no,
                                      callback: function (e) {
                                        t.$set(t.record, "maintainer_no", e);
                                      },
                                      expression: "record.maintainer_no",
                                    },
                                  }),
                                ],
                                1,
                              ),
                              a(
                                "q-card-section",
                                [
                                  a(
                                    "div",
                                    {
                                      staticClass:
                                        "text-bold neu-css-after-colon neu-css-before-red-asterisk q-mb-sm",
                                    },
                                    [t._v("改派原因")],
                                  ),
                                  a("q-input", {
                                    attrs: {
                                      dense: "",
                                      outlined: "",
                                      "hide-bottom-space": "",
                                      placeholder: "请填写该项",
                                      type: "textarea",
                                      "lazy-rules": "",
                                      rules: [
                                        function (t) {
                                          return !!t || "请填写该项";
                                        },
                                        function (t) {
                                          return t.length <= 200 || "最多填写200个字";
                                        },
                                        function (t) {
                                          return t.length >= 1 || "最少填写1个字";
                                        },
                                      ],
                                    },
                                    model: {
                                      value: t.record.reason,
                                      callback: function (e) {
                                        t.$set(t.record, "reason", e);
                                      },
                                      expression: "record.reason",
                                    },
                                  }),
                                ],
                                1,
                              ),
                              a("q-card-section", [
                                a(
                                  "div",
                                  { staticClass: "row justify-end" },
                                  [
                                    a("q-btn", {
                                      staticClass: "q-mx-sm q-px-sm",
                                      attrs: {
                                        unelevated: "",
                                        dense: "",
                                        color: "grey",
                                        label: "取消",
                                      },
                                      on: { click: t.cancel },
                                    }),
                                    a("q-btn", {
                                      staticClass: "q-px-sm",
                                      attrs: {
                                        unelevated: "",
                                        dense: "",
                                        color: "primary",
                                        label: "确定",
                                      },
                                      on: { click: t.submitReassignment },
                                    }),
                                  ],
                                  1,
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
        r = a.n(n),
        o = {
          name: "repairList",
          data() {
            return {
              checkStatus: "-1",
              statusOption: [],
              repair: [],
              paging: { pageSize: 30, pageNum: 0, pageCount: 0 },
              isLoading: !1,
              userinfo: JSON.parse(localStorage.getItem("userinfo")),
              applyForReassignmentDialog: !1,
              maximizedToggle: !0,
              record: { reason: "", maintainer_no: "" },
              maintainerList: [],
              repairId: null,
            };
          },
          watch: {
            checkStatus() {
              this.loadRepairList(() => {});
            },
          },
          destroyed() {
            window.removeEventListener("popstate", this.goBack, !1);
          },
          mounted() {
            (this.getRepairStatusList(),
              this.loadRepairList(() => {}),
              window.history &&
                window.history.pushState &&
                (history.pushState(null, null, document.URL),
                window.addEventListener("popstate", this.goBack, !1)),
              this.getSelectList());
          },
          methods: {
            getRepairStatusList() {
              this.$axiosAction("/api/teacher/basic/maintainer.api", {
                action: "queryListForRepairStatus",
              }).then((t) => {
                this.statusOption = t.data.list;
              });
            },
            loadRepairList(t) {
              (t && ((this.paging.pageNum = 0), (this.repair = [])),
                (this.paging.pageNum += 1),
                (this.isLoading = !0),
                this.$axiosAction("/api/teacher/basic/maintainer.api", {
                  action: "queryRepairList",
                  login_name: this.userinfo.login_name,
                  status: this.checkStatus,
                  pageSize: this.paging.pageSize,
                  pageNum: this.paging.pageNum,
                })
                  .then((e) => {
                    if (0 === e.data.code) {
                      this.repair = this.repair.concat(e.data.list.list);
                      const {
                        pageSize: t,
                        pageNum: a,
                        rowCount: s,
                        pageCount: i,
                        startIndex: n,
                        endIndex: o,
                      } = r()({}, e.data.list);
                      this.paging = {
                        pageSize: t,
                        pageNum: a,
                        rowCount: s,
                        pageCount: i,
                        startIndex: n,
                        endIndex: o,
                      };
                    } else this.setDefaultList();
                    (t && t(), (this.isLoading = !1));
                  })
                  .catch((e) => {
                    (this.setDefaultList(), t && t(), (this.isLoading = !1));
                  }));
            },
            getSelectList() {
              this.$axiosAction("/api/teacher/basic/maintainer.api", {
                action: "queryListForMaintainer",
              }).then((t) => {
                this.maintainerList = t.data.maintainerList;
              });
            },
            submitReassignment() {
              "" !== this.record.maintainer_no
                ? "" !== this.record.reason
                  ? this.$axiosAction(
                      "/api/teacher/basic/maintainer.api",
                      r()({ action: "applyForReassignment", id: this.repairId }, this.record),
                    ).then((t) => {
                      0 === t.data.code
                        ? (this.$q.loading.hide(),
                          this.loadRepairList(() => {}),
                          (this.applyForReassignmentDialog = !1))
                        : this.$q.loading.hide();
                    })
                  : this.$showErrorNotify("请填写改派原因")
                : this.$showErrorNotify("请选择改派人员");
            },
            cancel() {
              ((this.applyForReassignmentDialog = !1),
                (this.record.reason = ""),
                (this.record.maintainer_no = ""));
            },
            setDefaultList() {
              ((this.repair = []), (this.paging = { pageSize: 30, pageNum: 0, pageCount: 0 }));
            },
            refresh(t) {
              this.loadRepairList(t);
            },
            goBack() {
              this.$router.push("/maintainer/index");
            },
            goDetails(t) {
              this.$router.push(`/maintainer/detail?id=${t}`);
            },
            applyForReassignment(t) {
              ((this.applyForReassignmentDialog = !0), (this.repairId = t));
            },
            receivingOrders(t) {
              this.$router.push(`/maintainer/receivingOrder?id=${t}`);
            },
            goMaintenance(t) {
              this.$router.push(`/maintainer/repairOrder?id=${t}`);
            },
          },
        },
        l = o,
        c = a("2877"),
        p = a("4d5a"),
        d = a("e359"),
        u = a("65c6"),
        m = a("9c40"),
        g = a("6ac5"),
        h = a("09e3"),
        b = a("9989"),
        v = a("a370"),
        f = a("429b"),
        q = a("7460"),
        _ = a("59d7"),
        y = a("f09f"),
        x = a("66e5"),
        w = a("4074"),
        C = a("0170"),
        L = a("b047"),
        S = a("8380"),
        k = a("24e8"),
        R = a("eb85"),
        Q = a("ddd8"),
        N = a("27f9"),
        z = a("eebe"),
        $ = a.n(z),
        D = Object(c["a"])(l, s, i, !1, null, null, null);
      e["default"] = D.exports;
      $()(D, "components", {
        QLayout: p["a"],
        QHeader: d["a"],
        QToolbar: u["a"],
        QBtn: m["a"],
        QToolbarTitle: g["a"],
        QPageContainer: h["a"],
        QPage: b["a"],
        QCardSection: v["a"],
        QTabs: f["a"],
        QTab: q["a"],
        QPullToRefresh: _["a"],
        QCard: y["a"],
        QItem: x["a"],
        QItemSection: w["a"],
        QItemLabel: C["a"],
        QChip: L["a"],
        QSpinnerDots: S["a"],
        QDialog: k["a"],
        QSeparator: R["a"],
        QSelect: Q["a"],
        QInput: N["a"],
      });
    },
  },
]);
