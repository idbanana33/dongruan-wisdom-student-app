(window["webpackJsonp"] = window["webpackJsonp"] || []).push([
  [13],
  {
    "2c02": function (t, a, s) {
      "use strict";
      s.r(a);
      var e = function () {
          var t = this,
            a = t.$createElement,
            s = t._self._c || a;
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
                        on: { click: t.goBack },
                      }),
                      s("q-toolbar-title", [t._v("接单")]),
                    ],
                    1,
                  ),
                ],
                1,
              ),
              s(
                "q-page-container",
                [
                  s(
                    "q-page",
                    { staticClass: "bg-grey-3" },
                    [
                      s(
                        "q-card",
                        { staticClass: "full-width row q-mt-sm", attrs: { flat: "" } },
                        [
                          s(
                            "q-card-section",
                            { staticClass: "full-width row justify-around", attrs: { avatar: "" } },
                            [
                              s(
                                "div",
                                { staticClass: "full-width q-mb-md text-left text-weight-bold" },
                                [
                                  s(
                                    "span",
                                    {
                                      staticClass: "q-mr-sm",
                                      staticStyle: { "font-size": "1.3em" },
                                    },
                                    [t._v("报修信息")],
                                  ),
                                  s(
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
                                        "\n              " +
                                          t._s(t.details.statusinfo) +
                                          "\n            ",
                                      ),
                                    ],
                                  ),
                                ],
                                1,
                              ),
                              s("div", { staticClass: "full-width" }, [
                                s("span", { staticClass: "text-grey neu-css-after-colon" }, [
                                  t._v("姓名"),
                                ]),
                                s("span", [t._v(t._s(t.details.name))]),
                              ]),
                              s("div", { staticClass: "full-width q-mt-sm" }, [
                                s("span", { staticClass: "text-grey neu-css-after-colon" }, [
                                  t._v("学号"),
                                ]),
                                s("span", [t._v(t._s(t.details.student_no))]),
                              ]),
                              s("div", { staticClass: "full-width q-mt-sm" }, [
                                s("span", { staticClass: "text-grey neu-css-after-colon" }, [
                                  t._v("学院"),
                                ]),
                                s("span", [t._v(t._s(t.details.dep_name))]),
                              ]),
                              s("div", { staticClass: "full-width q-mt-sm" }, [
                                s("span", { staticClass: "text-grey neu-css-after-colon" }, [
                                  t._v("联系电话"),
                                ]),
                                s("span", [t._v(t._s(t.details.mob))]),
                              ]),
                              s("div", { staticClass: "full-width q-mt-sm" }, [
                                s("span", { staticClass: "text-grey neu-css-after-colon" }, [
                                  t._v("报修时间"),
                                ]),
                                s("span", [t._v(t._s(t.details.repair_time))]),
                              ]),
                              s("div", { staticClass: "full-width q-mt-sm" }, [
                                s("span", { staticClass: "text-grey neu-css-after-colon" }, [
                                  t._v("报修类型"),
                                ]),
                                s("span", [t._v(t._s(t.details.repair_type_name))]),
                              ]),
                              s("div", { staticClass: "full-width q-mt-sm" }, [
                                s("span", { staticClass: "text-grey neu-css-after-colon" }, [
                                  t._v("报修区域"),
                                ]),
                                s("span", [t._v(t._s(t.details.repair_range_name))]),
                              ]),
                              s("div", { staticClass: "full-width q-mt-sm" }, [
                                s("span", { staticClass: "text-grey neu-css-after-colon" }, [
                                  t._v("详细地点"),
                                ]),
                                s("span", [t._v(t._s(t.details.address))]),
                              ]),
                              s("div", { staticClass: "full-width q-mt-sm" }, [
                                s("span", { staticClass: "text-grey neu-css-after-colon" }, [
                                  t._v("故障类型"),
                                ]),
                                s("span", [t._v(t._s(t.details.fault_type_name))]),
                              ]),
                              s("div", { staticClass: "full-width q-mt-sm" }, [
                                s("span", { staticClass: "text-grey neu-css-after-colon" }, [
                                  t._v("故障描述"),
                                ]),
                                s("span", [t._v(t._s(t.details.description))]),
                              ]),
                              s("div", { staticClass: "full-width q-mt-sm" }, [
                                s("span", { staticClass: "text-grey neu-css-after-colon" }, [
                                  t._v("期望上门时间"),
                                ]),
                                s("span", [t._v(t._s(t.details.visit_time))]),
                              ]),
                              t.details.attachment && 0 != t.details.attachment.length
                                ? s("div", { staticClass: "col-12 q-mt-sm" }, [
                                    s("span", { staticClass: "text-grey neu-css-after-colon" }, [
                                      t._v("故障附件"),
                                    ]),
                                    s(
                                      "div",
                                      {
                                        staticStyle: {
                                          display: "flex",
                                          "overflow-x": "auto",
                                          "white-space": "nowrap",
                                          width: "100%",
                                        },
                                      },
                                      t._l(t.details.attachment, function (a) {
                                        return s(
                                          "div",
                                          {
                                            key: a.link,
                                            staticClass: "q-mt-sm",
                                            staticStyle: { "margin-right": "10px" },
                                          },
                                          [
                                            "1" == a.type
                                              ? s("q-img", {
                                                  staticStyle: { height: "150px", width: "150px" },
                                                  attrs: { src: t.serverUrl + a.link, ratio: 1 },
                                                })
                                              : t._e(),
                                            "2" == a.type
                                              ? s("q-video", {
                                                  staticStyle: { height: "150px", width: "150px" },
                                                  attrs: {
                                                    src: t.serverUrl + a.link,
                                                    ratio: 16 / 9,
                                                  },
                                                })
                                              : t._e(),
                                          ],
                                          1,
                                        );
                                      }),
                                      0,
                                    ),
                                  ])
                                : t._e(),
                            ],
                          ),
                        ],
                        1,
                      ),
                      s(
                        "q-page-sticky",
                        { attrs: { position: "bottom-right", offset: t.fabPos } },
                        [
                          s("q-btn", {
                            directives: [
                              {
                                name: "touch-pan",
                                rawName: "v-touch-pan.prevent.mouse",
                                value: t.moveFab,
                                expression: "moveFab",
                                modifiers: { prevent: !0, mouse: !0 },
                              },
                            ],
                            attrs: { round: "", color: "primary", icon: "domain_verification" },
                            on: { click: t.onClick },
                          }),
                        ],
                        1,
                      ),
                      s(
                        "q-dialog",
                        {
                          attrs: { persistent: "" },
                          model: {
                            value: t.acceptOrderDialog,
                            callback: function (a) {
                              t.acceptOrderDialog = a;
                            },
                            expression: "acceptOrderDialog",
                          },
                        },
                        [
                          s(
                            "q-card",
                            { staticClass: "full-width", attrs: { flat: "" } },
                            [
                              s("q-card-section", [
                                s(
                                  "div",
                                  {
                                    staticClass: "text-bold",
                                    staticStyle: { "font-size": "1.2em" },
                                  },
                                  [t._v("接单确认")],
                                ),
                              ]),
                              s("q-separator"),
                              s("q-card-section", [s("span", [t._v("确定要接受当前订单么?")])]),
                              s("q-card-section", [
                                s(
                                  "div",
                                  { staticClass: "row justify-end" },
                                  [
                                    s("q-btn", {
                                      staticClass: "q-mx-sm q-px-sm",
                                      attrs: {
                                        unelevated: "",
                                        dense: "",
                                        color: "grey",
                                        label: "取消",
                                      },
                                      on: { click: t.cancel },
                                    }),
                                    s("q-btn", {
                                      staticClass: "q-px-sm",
                                      attrs: {
                                        unelevated: "",
                                        dense: "",
                                        color: "primary",
                                        label: "确定",
                                      },
                                      on: { click: t.acceptOrder },
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
        l = {
          name: "recevingOrder",
          data() {
            return {
              serverUrl: window.localStorage.server,
              details: {},
              fabPos: [30, 40],
              acceptOrderDialog: !1,
            };
          },
          destroyed() {
            window.removeEventListener("popstate", this.goBack, !1);
          },
          mounted() {
            (this.loadInfo(),
              window.history &&
                window.history.pushState &&
                (history.pushState(null, null, document.URL),
                window.addEventListener("popstate", this.goBack, !1)));
          },
          methods: {
            goBack() {
              this.$router.push("/maintainer/repairList");
            },
            loadInfo() {
              this.$axiosAction("/api/teacher/basic/maintainer.api", {
                action: "queryMaintainerDetailInfo",
                id: this.$route.query.id,
              }).then((t) => {
                this.details = t.data.info;
              });
            },
            moveFab(t) {
              ((this.draggingFab = !0 !== t.isFirst && !0 !== t.isFinal),
                (this.fabPos = [this.fabPos[0] - t.delta.x, this.fabPos[1] - t.delta.y]));
            },
            onClick() {
              this.acceptOrderDialog = !0;
            },
            acceptOrder() {
              this.$axiosAction("/api/teacher/basic/maintainer.api", {
                action: "acceptOrder",
                id: this.$route.query.id,
              }).then((t) => {
                0 === t.data.code
                  ? (this.$q.loading.hide(),
                    (this.acceptOrderDialog = !1),
                    this.$router.push("/maintainer/repairList"))
                  : this.$q.loading.hide();
              });
            },
            cancel() {
              this.acceptOrderDialog = !1;
            },
          },
        },
        r = l,
        n = s("2877"),
        c = s("4d5a"),
        o = s("e359"),
        d = s("65c6"),
        p = s("9c40"),
        u = s("6ac5"),
        m = s("09e3"),
        v = s("9989"),
        h = s("f09f"),
        f = s("a370"),
        _ = s("b047"),
        g = s("068f"),
        q = s("6ac0"),
        y = s("de5e"),
        w = s("24e8"),
        C = s("eb85"),
        b = s("75c3"),
        x = s("eebe"),
        k = s.n(x),
        Q = Object(n["a"])(r, e, i, !1, null, null, null);
      a["default"] = Q.exports;
      (k()(Q, "components", {
        QLayout: c["a"],
        QHeader: o["a"],
        QToolbar: d["a"],
        QBtn: p["a"],
        QToolbarTitle: u["a"],
        QPageContainer: m["a"],
        QPage: v["a"],
        QCard: h["a"],
        QCardSection: f["a"],
        QChip: _["a"],
        QImg: g["a"],
        QVideo: q["a"],
        QPageSticky: y["a"],
        QDialog: w["a"],
        QSeparator: C["a"],
      }),
        k()(Q, "directives", { TouchPan: b["a"] }));
    },
  },
]);
