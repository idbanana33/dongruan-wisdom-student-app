(window["webpackJsonp"] = window["webpackJsonp"] || []).push([
  [102],
  {
    "40d3": function (t, e, i) {
      "use strict";
      i.r(e);
      var s = function () {
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
                      i("q-toolbar-title", [t._v(t._s(t.typeName))]),
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
                    { staticClass: "bg-grey-3 q-py-sm" },
                    [
                      i(
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
                          i(
                            "q-item",
                            [
                              i(
                                "q-item-section",
                                { attrs: { avatar: "" } },
                                [
                                  i("q-item-label", [
                                    i(
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
                              i(
                                "q-item-section",
                                [
                                  i("q-item-label", { staticStyle: { "font-size": "1.01rem" } }, [
                                    t._v("\n            待审批\n          "),
                                  ]),
                                  i("q-item-label", { attrs: { caption: "" } }, [
                                    t._v(
                                      "\n            待审批的" +
                                        t._s(t.menuInfo.title) +
                                        "申请信息\n          ",
                                    ),
                                  ]),
                                ],
                                1,
                              ),
                              i(
                                "q-item-section",
                                { attrs: { side: "" } },
                                [
                                  i(
                                    "q-item-label",
                                    [
                                      i(
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
                                      i("q-icon", {
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
                      i(
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
                          i(
                            "q-item",
                            [
                              i(
                                "q-item-section",
                                { attrs: { avatar: "" } },
                                [
                                  i("q-item-label", [
                                    i(
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
                              i(
                                "q-item-section",
                                [
                                  i("q-item-label", { staticStyle: { "font-size": "1.01rem" } }, [
                                    t._v("\n            已审批\n          "),
                                  ]),
                                  i("q-item-label", { attrs: { caption: "" } }, [
                                    t._v(
                                      "\n            审批完成的" +
                                        t._s(t.menuInfo.title) +
                                        "申请信息\n          ",
                                    ),
                                  ]),
                                ],
                                1,
                              ),
                              i(
                                "q-item-section",
                                { attrs: { side: "" } },
                                [
                                  i(
                                    "q-item-label",
                                    [
                                      i("q-icon", {
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
                      i(
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
                          i(
                            "q-item",
                            [
                              i(
                                "q-item-section",
                                { attrs: { avatar: "" } },
                                [
                                  i("q-item-label", [
                                    i(
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
                              i(
                                "q-item-section",
                                [
                                  i("q-item-label", { staticStyle: { "font-size": "1.01rem" } }, [
                                    t._v(
                                      "\n            " +
                                        t._s(t.menuInfo.title) +
                                        "申请记录\n          ",
                                    ),
                                  ]),
                                  i("q-item-label", { attrs: { caption: "" } }, [
                                    t._v(
                                      "\n            全部的" +
                                        t._s(t.menuInfo.title) +
                                        "申请信息\n          ",
                                    ),
                                  ]),
                                ],
                                1,
                              ),
                              i(
                                "q-item-section",
                                { attrs: { side: "" } },
                                [
                                  i(
                                    "q-item-label",
                                    [
                                      i("q-icon", {
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
                      i(
                        "q-card",
                        {
                          staticClass: "bg-white q-mb-sm q-mx-sm q-py-md",
                          attrs: { flat: "" },
                          on: {
                            click: function (e) {
                              return t.getList("typeList");
                            },
                          },
                        },
                        [
                          i(
                            "q-item",
                            [
                              i(
                                "q-item-section",
                                { attrs: { avatar: "" } },
                                [
                                  i("q-item-label", [
                                    i(
                                      "span",
                                      {
                                        staticClass: "material-icons",
                                        staticStyle: { "font-size": "30px", color: "#32CD32" },
                                      },
                                      [t._v("\n              remove_red_eye\n            ")],
                                    ),
                                  ]),
                                ],
                                1,
                              ),
                              i(
                                "q-item-section",
                                [
                                  i("q-item-label", { staticStyle: { "font-size": "1.01rem" } }, [
                                    t._v("\n            流程详情\n          "),
                                  ]),
                                  i("q-item-label", { attrs: { caption: "" } }, [
                                    t._v("\n            查看或编辑当前流程\n          "),
                                  ]),
                                ],
                                1,
                              ),
                              i(
                                "q-item-section",
                                { attrs: { side: "" } },
                                [
                                  i(
                                    "q-item-label",
                                    [
                                      i("q-icon", {
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
                      t.record.is_author
                        ? i(
                            "q-card",
                            {
                              staticClass: "bg-white q-mb-sm q-mx-sm q-py-md",
                              attrs: { flat: "" },
                              on: {
                                click: function (e) {
                                  return t.copy();
                                },
                              },
                            },
                            [
                              i(
                                "q-item",
                                [
                                  i(
                                    "q-item-section",
                                    { attrs: { avatar: "" } },
                                    [
                                      i("q-item-label", [
                                        i(
                                          "span",
                                          {
                                            staticClass: "material-icons",
                                            staticStyle: { "font-size": "30px", color: "#1E90FF" },
                                          },
                                          [t._v("\n              content_copy\n            ")],
                                        ),
                                      ]),
                                    ],
                                    1,
                                  ),
                                  i(
                                    "q-item-section",
                                    [
                                      i(
                                        "q-item-label",
                                        { staticStyle: { "font-size": "1.01rem" } },
                                        [t._v("\n            复制\n          ")],
                                      ),
                                      i("q-item-label", { attrs: { caption: "" } }, [
                                        t._v(
                                          "\n            复制该流程设置数据并创建新" +
                                            t._s(t.menuInfo.title) +
                                            "\n          ",
                                        ),
                                      ]),
                                    ],
                                    1,
                                  ),
                                  i(
                                    "q-item-section",
                                    { attrs: { side: "" } },
                                    [
                                      i(
                                        "q-item-label",
                                        [
                                          i("q-icon", {
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
                          )
                        : t._e(),
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
        a = [],
        o = i("ded3"),
        n = i.n(o),
        r = {
          name: "processNavigation",
          data() {
            return {
              count: 0,
              menuInfo: null,
              typeName: "",
              type_id: this.$route.query.type_id,
              service_flag: "N",
              record: {},
            };
          },
          destroyed() {
            window.removeEventListener("popstate", this.goBack, !1);
          },
          mounted() {
            if (window.localStorage.getItem("menu")) {
              this.service_flag = this.$route.query.service_flag;
              let t = "process";
              ((t = "N" === this.service_flag ? "process" : "process_gate"),
                (this.menuInfo = JSON.parse(window.localStorage.getItem("menu")).find(
                  (e) => e.id === t,
                )));
            }
            (this.getCount(),
              window.history &&
                window.history.pushState &&
                (history.pushState(null, null, document.URL),
                window.addEventListener("popstate", this.goBack, !1)));
          },
          methods: {
            getCount() {
              const t = { tab: "reviewing" };
              ((t.type_id = this.type_id),
                this.$axiosAction(
                  "/api/teacher/process/process.api",
                  n()({ action: "getTeacherReviewNew" }, t),
                ).then((t) => {
                  ("" === t.data.typeName &&
                    (this.$showErrorNotify("该流程类型被删除"), this.goBack()),
                    (this.count = t.data.count.count),
                    (this.typeName = t.data.typeName.process_type_name),
                    this.getRecord());
                }));
            },
            getList(t) {
              "typeList" === t
                ? this.$router.push(
                    "/teacher/process/typeDetail?id=" +
                      this.type_id +
                      "&type=e&service_flag=" +
                      this.service_flag,
                  )
                : this.$router.push(
                    `/teacher/process/list?tab=${t}&type_id=${this.type_id}&typeName=${this.typeName}&service_flag=${this.service_flag}`,
                  );
            },
            goBack() {
              this.$router.push("/teacher/process/index?service_flag=" + this.service_flag);
            },
            copy() {
              this.$q
                .dialog({
                  title: "确认复制",
                  message: "复制该模板设置数据",
                  html: !0,
                  persistent: !0,
                  cancel: { label: "取消", outline: !0, color: "grey" },
                  ok: { label: "复制", unelevated: !0, color: "primary" },
                })
                .onOk(() => {
                  this.$router.push({
                    name: "/teacher/process/processTypeNew",
                    params: { record: this.record, type: "a", service_flag: this.service_flag },
                  });
                });
            },
            getRecord() {
              ((this.record.process_info_config = []),
                this.$axiosAction("/api/teacher/process/process.api", {
                  action: "checkIntoOrOutNew",
                  id: this.type_id,
                  type: "e",
                })
                  .then((t) => {
                    (0 === t.data.code &&
                      ((this.record = t.data.typeDetail),
                      null === this.record.process_info_config &&
                        (this.record.process_info_config = []),
                      (this.record.id = null),
                      (this.record.is_copy = !0)),
                      this.$q.loading.hide());
                  })
                  .catch((t) => {
                    this.$q.loading.hide();
                  }));
            },
          },
        },
        c = r,
        l = i("2877"),
        m = i("4d5a"),
        p = i("e359"),
        d = i("65c6"),
        h = i("9c40"),
        q = i("6ac5"),
        _ = i("09e3"),
        u = i("9989"),
        y = i("f09f"),
        g = i("66e5"),
        f = i("4074"),
        b = i("0170"),
        v = i("0016"),
        w = i("eebe"),
        k = i.n(w),
        C = Object(l["a"])(c, s, a, !1, null, null, null);
      e["default"] = C.exports;
      k()(C, "components", {
        QLayout: m["a"],
        QHeader: p["a"],
        QToolbar: d["a"],
        QBtn: h["a"],
        QToolbarTitle: q["a"],
        QPageContainer: _["a"],
        QPage: u["a"],
        QCard: y["a"],
        QItem: g["a"],
        QItemSection: f["a"],
        QItemLabel: b["a"],
        QIcon: v["a"],
      });
    },
  },
]);
