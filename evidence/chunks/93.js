(window["webpackJsonp"] = window["webpackJsonp"] || []).push([
  [93],
  {
    daec: function (t, e, a) {
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
                    { staticClass: "bg-grey-3 q-pb-xs" },
                    [
                      "studentConnect" == t.tab
                        ? a("neu-access-student", {
                            ref: "childstudentConnect",
                            attrs: { "task-target": t.record.task_target },
                          })
                        : t._e(),
                      "statActive" == t.tab ? a("neu-stat-active") : t._e(),
                      "statApp" == t.tab ? a("neu-stat-app") : t._e(),
                    ],
                    1,
                  ),
                ],
                1,
              ),
              a(
                "q-footer",
                { staticClass: "bg-white text-primary", attrs: { bordered: "" } },
                [
                  a(
                    "q-tabs",
                    {
                      staticClass: "text-black",
                      attrs: {
                        "no-caps": "",
                        "active-color": "primary",
                        "indicator-color": "transparent",
                        align: "justify",
                      },
                      model: {
                        value: t.tab,
                        callback: function (e) {
                          t.tab = e;
                        },
                        expression: "tab",
                      },
                    },
                    [
                      a("q-tab", { attrs: { name: "studentConnect", label: "学生接入" } }),
                      a("q-separator", { attrs: { vertical: "" } }),
                      a("q-tab", { attrs: { name: "statActive", label: "活跃度" } }),
                      a("q-separator", { attrs: { vertical: "" } }),
                      a("q-tab", { attrs: { name: "statApp", label: "App终端分布" } }),
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
        o = function () {
          var t = this,
            e = t.$createElement,
            a = t._self._c || e;
          return a(
            "q-card",
            { staticClass: "bg-white q-mb-sm q-mx-sm", attrs: { flat: "" } },
            [
              a(
                "q-card",
                { staticClass: "q-mb-sm row items-center" },
                [
                  a(
                    "q-list",
                    { staticStyle: { width: "100%" }, attrs: { bordered: "" } },
                    [
                      a(
                        "q-item",
                        [
                          a("div", { staticClass: "col row items-center" }, [
                            a(
                              "div",
                              { staticClass: "q-mx-md text-grey", staticStyle: { width: "80px" } },
                              [t._v("统计学生：")],
                            ),
                          ]),
                          a(
                            "q-item-section",
                            { attrs: { side: "" } },
                            [
                              a(
                                "q-item-label",
                                { staticClass: "row items-center" },
                                [
                                  a(
                                    "span",
                                    {
                                      class:
                                        0 === t.record.task_target.length
                                          ? "text-grey"
                                          : "text-primary",
                                      attrs: { size: "md" },
                                      on: {
                                        click: function (e) {
                                          t.taskTargetDialog = !0;
                                        },
                                      },
                                    },
                                    [
                                      t._v(
                                        t._s(
                                          0 === t.record.task_target.length
                                            ? "请选择"
                                            : "已选择 (" + t.record.task_target.length + ")",
                                        ),
                                      ),
                                    ],
                                  ),
                                  a("q-icon", {
                                    class:
                                      0 === t.record.task_target.length
                                        ? "text-grey"
                                        : "text-primary",
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
                      0 === t.record.task_target.length
                        ? a("q-item", [
                            a("div", { staticClass: "col q-mx-md text-center text-grey" }, [
                              a("label", [t._v("请选择统计学生！")]),
                            ]),
                          ])
                        : t._e(),
                    ],
                    1,
                  ),
                ],
                1,
              ),
              0 !== t.record.task_target.length
                ? a(
                    "q-tabs",
                    {
                      staticClass: "text-grey",
                      attrs: {
                        dense: "",
                        "active-color": "primary",
                        "indicator-color": "primary",
                        align: "justify",
                        "narrow-indicator": "",
                      },
                      on: { click: t.chooseReal },
                      model: {
                        value: t.collectTab,
                        callback: function (e) {
                          t.collectTab = e;
                        },
                        expression: "collectTab",
                      },
                    },
                    [
                      a("q-tab", { attrs: { name: "collectStuData", label: "接入数据" } }),
                      a("q-tab", { attrs: { name: "generalSituation", label: "接入概况" } }),
                    ],
                    1,
                  )
                : t._e(),
              a("q-separator"),
              0 !== t.record.task_target.length
                ? [
                    a(
                      "div",
                      {
                        directives: [
                          {
                            name: "show",
                            rawName: "v-show",
                            value: "collectStuData" == t.collectTab,
                            expression: "collectTab == 'collectStuData'",
                          },
                        ],
                        staticClass: "text-center q-my-md",
                      },
                      [
                        a("div", { staticClass: "row" }, [
                          a("div", { staticClass: "col" }),
                          a("div", { staticClass: "col-6" }, [
                            a(
                              "label",
                              {
                                staticStyle: {
                                  "font-size": "16px",
                                  color: "#454c5c",
                                  "font-weight": "700",
                                  "margin-top": "10px",
                                },
                              },
                              [t._v("接入率")],
                            ),
                          ]),
                          a(
                            "div",
                            {
                              staticClass: "col row items-center",
                              staticStyle: { float: "right" },
                            },
                            [
                              a(
                                "label",
                                {
                                  staticClass: "text-right",
                                  staticStyle: { color: "#1E90FF" },
                                  on: {
                                    click: function (e) {
                                      return t.CountRule("collectStuData");
                                    },
                                  },
                                },
                                [t._v("计算规则>")],
                              ),
                            ],
                          ),
                        ]),
                        a("div", { staticStyle: { height: "260px" }, attrs: { id: "stucollect" } }),
                        a("div", { staticClass: "text-center", staticStyle: { height: "35%" } }, [
                          a("div", { staticClass: "row" }, [
                            a("div", { staticClass: "col" }),
                            a("div", { staticClass: "row q-mt-sm col-7 justify-bewteen" }, [
                              a("div", { staticClass: "col-9 row items-center" }, [
                                a("span", {
                                  staticClass: "q-mx-sm",
                                  staticStyle: {
                                    float: "left",
                                    width: "10px",
                                    height: "10px",
                                    "border-radius": "50px",
                                  },
                                }),
                                a("span", { staticClass: "text-grey" }, [t._v("总人数")]),
                              ]),
                              a("div", { staticClass: "col text-grey" }, [
                                a("label", { staticStyle: { float: "right" } }, [
                                  t._v(t._s(t.num1 + t.num2)),
                                ]),
                              ]),
                            ]),
                            a("div", { staticClass: "col" }),
                          ]),
                          a("div", { staticClass: "row" }, [
                            a("div", { staticClass: "col" }),
                            a("div", { staticClass: "row q-mt-sm col-7 justify-bewteen" }, [
                              a("div", { staticClass: "col-9 row items-center" }, [
                                a("span", {
                                  staticClass: "q-mx-sm",
                                  staticStyle: {
                                    float: "left",
                                    width: "10px",
                                    height: "10px",
                                    "border-radius": "50px",
                                  },
                                  style: { background: "#FA8072" },
                                }),
                                a("span", { staticClass: "text-grey" }, [t._v("已接入")]),
                              ]),
                              a("div", { staticClass: "col text-grey" }, [
                                a("label", { staticStyle: { float: "right" } }, [
                                  t._v(t._s(t.num1)),
                                ]),
                              ]),
                            ]),
                            a("div", { staticClass: "col" }),
                          ]),
                          a("div", { staticClass: "row" }, [
                            a("div", { staticClass: "col" }),
                            a("div", { staticClass: "row q-mt-sm col-7 justify-bewteen" }, [
                              a("div", { staticClass: "col-9 row items-center" }, [
                                a("span", {
                                  staticClass: "q-mx-sm",
                                  staticStyle: {
                                    float: "left",
                                    width: "10px",
                                    height: "10px",
                                    "border-radius": "50px",
                                  },
                                  style: { background: "#33CCFF" },
                                }),
                                a("span", { staticClass: "text-grey" }, [t._v("未接入")]),
                              ]),
                              a("div", { staticClass: "col text-grey" }, [
                                a("label", { staticStyle: { float: "right" } }, [
                                  t._v(t._s(t.num2)),
                                ]),
                              ]),
                            ]),
                            a("div", { staticClass: "col" }),
                          ]),
                        ]),
                      ],
                    ),
                  ]
                : t._e(),
              0 !== t.record.task_target.length
                ? [
                    a(
                      "div",
                      {
                        directives: [
                          {
                            name: "show",
                            rawName: "v-show",
                            value: "generalSituation" == t.collectTab,
                            expression: "collectTab == 'generalSituation'",
                          },
                        ],
                        staticClass: "text-center q-my-md",
                        staticStyle: { height: "260px", overflow: "auto" },
                      },
                      [
                        a("div", { staticClass: "row" }, [
                          a("div", { staticClass: "col" }),
                          a("div", { staticClass: "col-6" }, [
                            a(
                              "label",
                              {
                                staticStyle: {
                                  "font-size": "16px",
                                  color: "#454c5c",
                                  "font-weight": "700",
                                  "margin-top": "10px",
                                },
                              },
                              [t._v("按年级统计接入率")],
                            ),
                          ]),
                          a("div", {
                            staticClass: "col row items-center",
                            staticStyle: { float: "right" },
                          }),
                        ]),
                        a("div", { staticStyle: { height: "260px" }, attrs: { id: "stugrade" } }),
                      ],
                    ),
                    a("hr", {
                      directives: [
                        {
                          name: "show",
                          rawName: "v-show",
                          value: "generalSituation" == t.collectTab,
                          expression: "collectTab == 'generalSituation'",
                        },
                      ],
                    }),
                    a(
                      "div",
                      {
                        directives: [
                          {
                            name: "show",
                            rawName: "v-show",
                            value: "generalSituation" == t.collectTab,
                            expression: "collectTab == 'generalSituation'",
                          },
                        ],
                        staticClass: "text-center q-my-md",
                        staticStyle: { height: "260px", overflow: "auto" },
                      },
                      [
                        a("div", { staticClass: "row" }, [
                          a("div", { staticClass: "col" }),
                          a("div", { staticClass: "col-6" }, [
                            a(
                              "label",
                              {
                                staticStyle: {
                                  "font-size": "16px",
                                  color: "#454c5c",
                                  "font-weight": "700",
                                  "margin-top": "10px",
                                },
                              },
                              [t._v("按" + t._s(t.titleType) + "统计接入率")],
                            ),
                          ]),
                          a("div", {
                            staticClass: "col row items-center",
                            staticStyle: { float: "right" },
                          }),
                        ]),
                        a("div", { staticStyle: { height: "260px" }, attrs: { id: "studep" } }),
                      ],
                    ),
                  ]
                : t._e(),
              a(
                "q-dialog",
                {
                  attrs: { countRuleShow: "" },
                  model: {
                    value: t.countRuleShow,
                    callback: function (e) {
                      t.countRuleShow = e;
                    },
                    expression: "countRuleShow",
                  },
                },
                [
                  a(
                    "q-card",
                    { staticStyle: { "border-radius": "25px" } },
                    [
                      a(
                        "q-item",
                        [
                          a(
                            "q-item-section",
                            { staticClass: "flex flex-center" },
                            [
                              a("q-item-label", { staticClass: "text-weight-bold" }, [
                                t._v(t._s(t.ruleTitle)),
                              ]),
                            ],
                            1,
                          ),
                        ],
                        1,
                      ),
                      a(
                        "q-item",
                        { staticClass: "q-my-sm", attrs: { dense: "" } },
                        [a("q-item-section", [a("q-item-label", [t._v(t._s(t.ruleMessage))])], 1)],
                        1,
                      ),
                      a("q-separator"),
                      a(
                        "q-card-actions",
                        { attrs: { align: "around" } },
                        [
                          a(
                            "q-btn",
                            {
                              directives: [{ name: "close-popup", rawName: "v-close-popup" }],
                              attrs: { flat: "", color: "primary" },
                            },
                            [t._v("知道了")],
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
                "q-dialog",
                {
                  attrs: { persistent: "", fullWidth: "", maximized: t.maximizedToggle },
                  model: {
                    value: t.taskTargetDialog,
                    callback: function (e) {
                      t.taskTargetDialog = e;
                    },
                    expression: "taskTargetDialog",
                  },
                },
                [
                  a(
                    "q-layout",
                    { staticClass: "bg-white", attrs: { view: "lHh lpr lFf", container: "" } },
                    [
                      a(
                        "q-header",
                        { staticClass: "full-width bg-white" },
                        [
                          a("q-toolbar", [
                            a(
                              "div",
                              {
                                staticClass:
                                  "full-width row items-center justify-between q-px-xs q-py-sm",
                              },
                              [
                                a("div", { staticClass: "text-bold text-black" }, [
                                  t._v("设置统计对象"),
                                ]),
                                a("q-btn", {
                                  attrs: { unelevated: "", color: "primary", label: "完成" },
                                  on: { click: t.createPic },
                                }),
                              ],
                              1,
                            ),
                          ]),
                        ],
                        1,
                      ),
                      a(
                        "q-page-container",
                        [
                          a(
                            "q-page",
                            [
                              a("neu-assign-student", {
                                attrs: {
                                  permit: t.menuInfo ? t.menuInfo.view_permit : null,
                                  "permit-mode": "V",
                                  "menu-id": t.menuInfo ? t.menuInfo.id : null,
                                },
                                model: {
                                  value: t.record.task_target,
                                  callback: function (e) {
                                    t.$set(t.record, "task_target", e);
                                  },
                                  expression: "record.task_target",
                                },
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
            ],
            2,
          );
        },
        n = [],
        r = (a("13d5"), a("313e")),
        l = a("f395"),
        c = {
          name: "NeuAccessStudent",
          components: { NeuAssignStudent: l["a"] },
          data() {
            return {
              menuInfo: null,
              roleId: JSON.parse(localStorage.getItem("userinfo")).role_id,
              collectTab: "collectStuData",
              countRuleShow: !1,
              studentDate: {},
              num1: 0,
              num2: 0,
              dataValue: 0,
              collectGradeList: [],
              gradeBar: [],
              gradeTitleData: "",
              gradeData: [],
              titleType: "班级",
              collectDepList: [],
              depBar: [],
              depTitleData: "",
              depData: [],
              cardHight: "400px",
              ruleTitle: "",
              ruleMessage: "",
              record: { task_target: [] },
              taskTargetDialog: !1,
              maximizedToggle: !0,
            };
          },
          mounted() {
            (window.localStorage.getItem("menu") &&
              (this.menuInfo = JSON.parse(window.localStorage.getItem("menu")).find(
                (t) => "monitor" === t.id,
              )),
              this.chooseReal());
          },
          methods: {
            CountRule(t) {
              ("collectStuData" === t &&
                ((this.ruleTitle = "接入率"),
                (this.ruleMessage = "接入率计算规则：学生接入人数/学生总人数")),
                (this.countRuleShow = !0));
            },
            chooseReal() {
              0 !== this.record.task_target.length &&
                ("collectStuData" === this.collectTab
                  ? this.getAllStudent()
                  : "generalSituation" === this.collectTab &&
                    ("D" === this.menuInfo.view_permit
                      ? (this.titleType = "专业")
                      : "A" === this.menuInfo.view_permit && (this.titleType = "学院"),
                    this.getGradeStudent()));
            },
            getAllStudent() {
              this.$axiosAction("/api/teacher/achievement/achievement.api", {
                action: "getstudent",
                task_target: JSON.stringify(this.record.task_target),
              })
                .then((t) => {
                  (0 === t.data.code &&
                    ((this.studentDate = t.data.student),
                    (this.num1 = t.data.student.status_one),
                    (this.num2 = t.data.student.status_zero),
                    (this.dataValue = this.num1 + this.num2),
                    this.ringPic(
                      "stucollect",
                      this.studentDate,
                      this.Percentage(this.num1, this.dataValue) + "%\n接入率",
                    )),
                    this.$q.loading.hide());
                })
                .catch((t) => {});
            },
            getGradeStudent() {
              this.$axiosAction("/api/teacher/achievement/achievement.api", {
                action: "getgrade",
                task_target: JSON.stringify(this.record.task_target),
                view_permit: this.menuInfo.view_permit,
              })
                .then((t) => {
                  (0 === t.data.code &&
                    (this.changeGradeBar("stugrade", t.data.grade),
                    (this.collectGradeList = t.data.grade),
                    this.changeDepBar("studep", t.data.dep),
                    (this.collectDepList = t.data.dep)),
                    this.$q.loading.hide());
                })
                .catch((t) => {
                  ((this.collectGradeList = []), (this.collectDepList = []));
                });
            },
            ringPic(t, e, a) {
              const i = document.getElementById(t),
                s = r["a"](i, { height: "260px" });
              var o = {};
              ((o = {
                tooltip: { trigger: "item" },
                legend: { show: !1 },
                color: ["#FA8072", "#33CCFF"],
                series: [
                  {
                    type: "pie",
                    radius: ["45%", "70%"],
                    avoidLabelOverlap: !1,
                    label: {
                      show: !0,
                      position: "center",
                      formatter: function () {
                        return a;
                      },
                      textStyle: { fontSize: 20, fontWeight: "bold" },
                    },
                    labelLine: { show: !1 },
                    data: [
                      { value: e.status_one, name: "已接入" },
                      { value: e.status_zero, name: "未接入" },
                    ],
                  },
                ],
              }),
                o && s.setOption(o),
                window.addEventListener("resize", () => {
                  s.resize();
                }));
            },
            columnPic(t, e, a, i) {
              const s = document.getElementById(t),
                o = r["a"](s);
              var n = {};
              ((n = {
                legend: { type: "scroll" },
                tooltip: {},
                dataset: { dimensions: e, source: a },
                xAxis: {
                  max: 100,
                  axisLabel: { show: !0, interval: "auto", formatter: "{value} %" },
                },
                yAxis: {
                  type: "category",
                  axisLabel: {
                    interval: 0,
                    formatter: function (t) {
                      var e = t.split("");
                      return e.join("\n");
                    },
                  },
                },
                series: i,
              }),
                o.resize(),
                n && o.setOption(n, !0),
                window.addEventListener("resize", () => {
                  o.resize();
                }));
            },
            Percentage(t, e) {
              return 0 === t || 0 === e ? 0 : Math.round((t / e) * 1e4) / 100;
            },
            changeGradeBar(t, e) {
              const a = e.reduce(
                  (t, e) =>
                    t.concat(
                      e.name +
                        " " +
                        e.rate.toString() +
                        "% (" +
                        e.total_status.toString() +
                        "/" +
                        e.total.toString() +
                        ")",
                    ),
                  ["label"],
                ),
                i = e.reduce(
                  (t, e) => (
                    (e.name =
                      e.name +
                      " " +
                      e.rate.toString() +
                      "% (" +
                      e.total_status.toString() +
                      "/" +
                      e.total.toString() +
                      ")"),
                    (t[e.name] = e.rate),
                    t
                  ),
                  { label: "接入率" },
                );
              ((this.gradeTitleData = a), (this.gradeData = [i]));
              for (let s = 0; s < a.length - 1; s++) this.gradeBar.push({ type: "bar" });
              (this.columnPic(t, this.gradeTitleData, this.gradeData, this.gradeBar),
                (this.gradeBar = []));
            },
            changeDepBar(t, e) {
              const a = e.reduce(
                  (t, e) =>
                    t.concat(
                      e.name +
                        " " +
                        e.rate.toString() +
                        "% (" +
                        e.total_status.toString() +
                        "/" +
                        e.total.toString() +
                        ")",
                    ),
                  ["label"],
                ),
                i = e.reduce(
                  (t, e) => (
                    (e.name =
                      e.name +
                      " " +
                      e.rate.toString() +
                      "% (" +
                      e.total_status.toString() +
                      "/" +
                      e.total.toString() +
                      ")"),
                    (t[e.name] = e.rate),
                    t
                  ),
                  { label: "接入率" },
                );
              ((this.depTitleData = a), (this.depData = [i]));
              for (let s = 0; s < a.length - 1; s++) this.depBar.push({ type: "bar" });
              (this.columnPic(t, this.depTitleData, this.depData, this.depBar), (this.depBar = []));
            },
            createPic() {
              ((this.taskTargetDialog = !1), this.chooseReal());
            },
          },
        },
        d = c,
        u = a("2877"),
        m = a("f09f"),
        p = a("1c1c"),
        h = a("66e5"),
        g = a("4074"),
        v = a("0170"),
        b = a("0016"),
        f = a("429b"),
        w = a("7460"),
        y = a("eb85"),
        x = a("24e8"),
        _ = a("4b7e"),
        q = a("9c40"),
        S = a("4d5a"),
        C = a("e359"),
        k = a("65c6"),
        D = a("09e3"),
        T = a("9989"),
        Q = a("7f67"),
        I = a("eebe"),
        A = a.n(I),
        $ = Object(u["a"])(d, o, n, !1, null, null, null),
        N = $.exports;
      (A()($, "components", {
        QCard: m["a"],
        QList: p["a"],
        QItem: h["a"],
        QItemSection: g["a"],
        QItemLabel: v["a"],
        QIcon: b["a"],
        QTabs: f["a"],
        QTab: w["a"],
        QSeparator: y["a"],
        QDialog: x["a"],
        QCardActions: _["a"],
        QBtn: q["a"],
        QLayout: S["a"],
        QHeader: C["a"],
        QToolbar: k["a"],
        QPageContainer: D["a"],
        QPage: T["a"],
      }),
        A()($, "directives", { ClosePopup: Q["a"] }));
      var P = function () {
          var t = this,
            e = t.$createElement,
            a = t._self._c || e;
          return a(
            "q-card",
            { staticClass: "bg-white q-mb-sm q-mx-sm", attrs: { flat: "" } },
            [
              a(
                "q-card",
                { staticClass: "q-md-sm row items-center" },
                [
                  a(
                    "q-list",
                    { staticStyle: { width: "100%" }, attrs: { bordered: "" } },
                    [
                      a(
                        "q-item",
                        { staticClass: "q-gutter-sm" },
                        [
                          a("q-select", {
                            attrs: {
                              outlined: "",
                              dense: "",
                              options: t.targetList,
                              "emit-value": "",
                              "map-options": "",
                            },
                            model: {
                              value: t.condition.target,
                              callback: function (e) {
                                t.$set(t.condition, "target", e);
                              },
                              expression: "condition.target",
                            },
                          }),
                          a("q-select", {
                            attrs: {
                              outlined: "",
                              dense: "",
                              options: t.granularityList,
                              "emit-value": "",
                              "map-options": "",
                            },
                            model: {
                              value: t.condition.granularity,
                              callback: function (e) {
                                t.$set(t.condition, "granularity", e);
                              },
                              expression: "condition.granularity",
                            },
                          }),
                        ],
                        1,
                      ),
                      a(
                        "q-item",
                        { staticClass: "row items-center q-py-xs" },
                        [
                          a("q-field", {
                            staticStyle: { width: "140px" },
                            attrs: {
                              outlined: "",
                              dense: "",
                              "stack-label": "",
                              "hide-bottom-space": "",
                              value: t.condition.begin_date,
                            },
                            scopedSlots: t._u([
                              {
                                key: "control",
                                fn: function () {
                                  return [t._v(t._s(t.condition.begin_date))];
                                },
                                proxy: !0,
                              },
                              {
                                key: "append",
                                fn: function () {
                                  return [
                                    a(
                                      "q-icon",
                                      { staticClass: "cursor-pointer", attrs: { name: "event" } },
                                      [
                                        a(
                                          "q-popup-proxy",
                                          {
                                            attrs: {
                                              "transition-show": "scale",
                                              "transition-hide": "scale",
                                            },
                                          },
                                          [
                                            a(
                                              "div",
                                              [
                                                a(
                                                  "q-date",
                                                  {
                                                    attrs: {
                                                      flat: "",
                                                      minimal: "",
                                                      mask: "YYYY-MM-DD",
                                                    },
                                                    model: {
                                                      value: t.condition.begin_date,
                                                      callback: function (e) {
                                                        t.$set(t.condition, "begin_date", e);
                                                      },
                                                      expression: "condition.begin_date",
                                                    },
                                                  },
                                                  [
                                                    a(
                                                      "div",
                                                      {
                                                        staticClass: "row items-center justify-end",
                                                      },
                                                      [
                                                        a("q-btn", {
                                                          directives: [
                                                            {
                                                              name: "close-popup",
                                                              rawName: "v-close-popup",
                                                            },
                                                          ],
                                                          attrs: {
                                                            dense: "",
                                                            label: "关闭",
                                                            flat: "",
                                                          },
                                                        }),
                                                      ],
                                                      1,
                                                    ),
                                                  ],
                                                ),
                                              ],
                                              1,
                                            ),
                                          ],
                                        ),
                                      ],
                                      1,
                                    ),
                                  ];
                                },
                                proxy: !0,
                              },
                            ]),
                          }),
                          a("span", { staticClass: "q-mx-xs" }, [t._v("至")]),
                          a("q-field", {
                            staticStyle: { width: "140px" },
                            attrs: {
                              outlined: "",
                              dense: "",
                              "stack-label": "",
                              "lazy-rules": "",
                              "hide-bottom-space": "",
                              value: t.condition.end_date,
                            },
                            scopedSlots: t._u([
                              {
                                key: "control",
                                fn: function () {
                                  return [t._v(t._s(t.condition.end_date))];
                                },
                                proxy: !0,
                              },
                              {
                                key: "append",
                                fn: function () {
                                  return [
                                    a(
                                      "q-icon",
                                      { staticClass: "cursor-pointer", attrs: { name: "event" } },
                                      [
                                        a(
                                          "q-popup-proxy",
                                          {
                                            attrs: {
                                              "transition-show": "scale",
                                              "transition-hide": "scale",
                                            },
                                          },
                                          [
                                            a(
                                              "div",
                                              [
                                                a(
                                                  "q-date",
                                                  {
                                                    attrs: {
                                                      flat: "",
                                                      minimal: "",
                                                      mask: "YYYY-MM-DD",
                                                    },
                                                    model: {
                                                      value: t.condition.end_date,
                                                      callback: function (e) {
                                                        t.$set(t.condition, "end_date", e);
                                                      },
                                                      expression: "condition.end_date",
                                                    },
                                                  },
                                                  [
                                                    a(
                                                      "div",
                                                      {
                                                        staticClass: "row items-center justify-end",
                                                      },
                                                      [
                                                        a("q-btn", {
                                                          directives: [
                                                            {
                                                              name: "close-popup",
                                                              rawName: "v-close-popup",
                                                            },
                                                          ],
                                                          attrs: {
                                                            dense: "",
                                                            label: "关闭",
                                                            flat: "",
                                                          },
                                                        }),
                                                      ],
                                                      1,
                                                    ),
                                                  ],
                                                ),
                                              ],
                                              1,
                                            ),
                                          ],
                                        ),
                                      ],
                                      1,
                                    ),
                                  ];
                                },
                                proxy: !0,
                              },
                            ]),
                          }),
                        ],
                        1,
                      ),
                      a(
                        "q-item",
                        [
                          a("q-btn", {
                            attrs: { unelevated: "", color: "primary", label: "生成统计图" },
                            on: { click: t.query },
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
              a("q-separator"),
              [
                a("div", { staticClass: "text-center q-my-md" }, [
                  a(
                    "div",
                    { staticClass: "col-12" },
                    [a("ve-line", { attrs: { data: t.chartData, settings: t.chartSettings } })],
                    1,
                  ),
                ]),
              ],
            ],
            2,
          );
        },
        L = [],
        z = a("ded3"),
        B = a.n(z),
        E = a("2b0e"),
        j = a("c3da"),
        Y = a.n(j);
      E["a"].component(Y.a.name, Y.a);
      var O = {
          name: "NeuStatActive",
          data() {
            return {
              viewPermit: JSON.parse(window.localStorage.getItem("menu")).find(
                (t) => "monitor" === t.id,
              ).view_permit,
              granularityList: [
                { label: "日粒度", value: "day" },
                { label: "周粒度", value: "week" },
                { label: "月粒度", value: "month" },
              ],
              condition: { target: "student", granularity: "day", begin_date: "", end_date: "" },
              chartSettings: { labelMap: { amount: "活跃度" } },
              chartData: { columns: ["date", "amount"], rows: [] },
            };
          },
          computed: {
            targetList() {
              return "A" === this.viewPermit || "D" === this.viewPermit
                ? [
                    { label: "全体用户", value: "user" },
                    { label: "学生用户", value: "student" },
                    { label: "教师用户", value: "teacher" },
                    { label: "App设备", value: "device" },
                    { label: "学生设备", value: "student_device" },
                    { label: "教师设备", value: "teacher_device" },
                  ]
                : [
                    { label: "学生用户", value: "student" },
                    { label: "学生设备", value: "student_device" },
                  ];
            },
          },
          mounted() {
            this.$axiosAction("/api/public.api", { action: "queryDefaultStatPeriod" }).then((t) => {
              0 === t.data.code &&
                ((this.condition.begin_date = t.data.begin_date),
                (this.condition.end_date = t.data.end_date),
                this.query());
            });
          },
          methods: {
            query() {
              this.condition.begin_date
                ? this.condition.end_date
                  ? (this.$q.loading.show(),
                    this.$axiosAction(
                      "/api/teacher/monitor/monitor.api",
                      B()(
                        B()({ action: "queryStatActive" }, this.condition),
                        {},
                        { view_permit: this.viewPermit },
                      ),
                    )
                      .then((t) => {
                        (0 === t.data.code && (this.chartData.rows = t.data.result),
                          this.$q.loading.hide());
                      })
                      .catch((t) => {
                        this.$q.loading.hide();
                      }))
                  : this.$showErrorNotify("请输入统计截止日期")
                : this.$showErrorNotify("请输入统计开始日期");
            },
          },
        },
        F = O,
        M = a("ddd8"),
        R = a("8572"),
        J = a("7cbe"),
        G = a("52ee"),
        H = Object(u["a"])(F, P, L, !1, null, null, null),
        V = H.exports;
      (A()(H, "components", {
        QCard: m["a"],
        QList: p["a"],
        QItem: h["a"],
        QSelect: M["a"],
        QField: R["a"],
        QIcon: b["a"],
        QPopupProxy: J["a"],
        QDate: G["a"],
        QBtn: q["a"],
        QSeparator: y["a"],
      }),
        A()(H, "directives", { ClosePopup: Q["a"] }));
      var W = function () {
          var t = this,
            e = t.$createElement,
            a = t._self._c || e;
          return a(
            "q-card",
            { staticClass: "bg-white q-mb-sm q-mx-sm", attrs: { flat: "" } },
            [
              a(
                "q-card",
                { staticClass: "q-md-sm row items-center" },
                [
                  a(
                    "q-list",
                    { staticStyle: { width: "100%" }, attrs: { bordered: "" } },
                    [
                      a("q-item", [
                        a(
                          "div",
                          { staticClass: "q-md-xs row items-center" },
                          [
                            a("q-field", {
                              staticStyle: { width: "140px" },
                              attrs: {
                                outlined: "",
                                dense: "",
                                "stack-label": "",
                                "hide-bottom-space": "",
                                value: t.condition.begin_date,
                              },
                              scopedSlots: t._u([
                                {
                                  key: "control",
                                  fn: function () {
                                    return [t._v(t._s(t.condition.begin_date))];
                                  },
                                  proxy: !0,
                                },
                                {
                                  key: "append",
                                  fn: function () {
                                    return [
                                      a(
                                        "q-icon",
                                        { staticClass: "cursor-pointer", attrs: { name: "event" } },
                                        [
                                          a(
                                            "q-popup-proxy",
                                            {
                                              attrs: {
                                                "transition-show": "scale",
                                                "transition-hide": "scale",
                                              },
                                            },
                                            [
                                              a(
                                                "div",
                                                [
                                                  a(
                                                    "q-date",
                                                    {
                                                      attrs: {
                                                        flat: "",
                                                        minimal: "",
                                                        mask: "YYYY-MM-DD",
                                                      },
                                                      model: {
                                                        value: t.condition.begin_date,
                                                        callback: function (e) {
                                                          t.$set(t.condition, "begin_date", e);
                                                        },
                                                        expression: "condition.begin_date",
                                                      },
                                                    },
                                                    [
                                                      a(
                                                        "div",
                                                        {
                                                          staticClass:
                                                            "row items-center justify-end",
                                                        },
                                                        [
                                                          a("q-btn", {
                                                            directives: [
                                                              {
                                                                name: "close-popup",
                                                                rawName: "v-close-popup",
                                                              },
                                                            ],
                                                            attrs: {
                                                              dense: "",
                                                              label: "关闭",
                                                              flat: "",
                                                            },
                                                          }),
                                                        ],
                                                        1,
                                                      ),
                                                    ],
                                                  ),
                                                ],
                                                1,
                                              ),
                                            ],
                                          ),
                                        ],
                                        1,
                                      ),
                                    ];
                                  },
                                  proxy: !0,
                                },
                              ]),
                            }),
                            a("span", { staticClass: "q-mx-xs" }, [t._v("至")]),
                            a("q-field", {
                              staticStyle: { width: "140px" },
                              attrs: {
                                outlined: "",
                                dense: "",
                                "stack-label": "",
                                "lazy-rules": "",
                                "hide-bottom-space": "",
                                value: t.condition.end_date,
                              },
                              scopedSlots: t._u([
                                {
                                  key: "control",
                                  fn: function () {
                                    return [t._v(t._s(t.condition.end_date))];
                                  },
                                  proxy: !0,
                                },
                                {
                                  key: "append",
                                  fn: function () {
                                    return [
                                      a(
                                        "q-icon",
                                        { staticClass: "cursor-pointer", attrs: { name: "event" } },
                                        [
                                          a(
                                            "q-popup-proxy",
                                            {
                                              attrs: {
                                                "transition-show": "scale",
                                                "transition-hide": "scale",
                                              },
                                            },
                                            [
                                              a(
                                                "div",
                                                [
                                                  a(
                                                    "q-date",
                                                    {
                                                      attrs: {
                                                        flat: "",
                                                        minimal: "",
                                                        mask: "YYYY-MM-DD",
                                                      },
                                                      model: {
                                                        value: t.condition.end_date,
                                                        callback: function (e) {
                                                          t.$set(t.condition, "end_date", e);
                                                        },
                                                        expression: "condition.end_date",
                                                      },
                                                    },
                                                    [
                                                      a(
                                                        "div",
                                                        {
                                                          staticClass:
                                                            "row items-center justify-end",
                                                        },
                                                        [
                                                          a("q-btn", {
                                                            directives: [
                                                              {
                                                                name: "close-popup",
                                                                rawName: "v-close-popup",
                                                              },
                                                            ],
                                                            attrs: {
                                                              dense: "",
                                                              label: "关闭",
                                                              flat: "",
                                                            },
                                                          }),
                                                        ],
                                                        1,
                                                      ),
                                                    ],
                                                  ),
                                                ],
                                                1,
                                              ),
                                            ],
                                          ),
                                        ],
                                        1,
                                      ),
                                    ];
                                  },
                                  proxy: !0,
                                },
                              ]),
                            }),
                          ],
                          1,
                        ),
                      ]),
                      a(
                        "q-item",
                        { staticClass: "q-py-xs" },
                        [
                          a("q-btn", {
                            attrs: { unelevated: "", color: "primary", label: "生成统计图" },
                            on: { click: t.query },
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
              a(
                "q-tabs",
                {
                  staticClass: "text-grey",
                  attrs: {
                    dense: "",
                    "active-color": "primary",
                    "indicator-color": "primary",
                    align: "justify",
                    "narrow-indicator": "",
                  },
                  model: {
                    value: t.appTab,
                    callback: function (e) {
                      t.appTab = e;
                    },
                    expression: "appTab",
                  },
                },
                [
                  a("q-tab", { attrs: { name: "platformData", label: "终端平台分布" } }),
                  a("q-tab", { attrs: { name: "manufacturerData", label: "终端机型分布" } }),
                ],
                1,
              ),
              a("q-separator"),
              "platformData" === t.appTab
                ? [
                    a("div", { staticClass: "text-center q-my-md" }, [
                      a(
                        "div",
                        { staticClass: "col-12" },
                        [
                          a(
                            "div",
                            {
                              staticStyle: {
                                "font-size": "16px",
                                color: "#454c5c",
                                "font-weight": "700",
                                "margin-top": "10px",
                              },
                            },
                            [t._v("终端平台分布")],
                          ),
                          a(
                            "div",
                            {
                              directives: [
                                {
                                  name: "show",
                                  rawName: "v-show",
                                  value: 0 == t.platformData.rows.length,
                                  expression: "platformData.rows.length == 0",
                                },
                              ],
                              staticClass: "text-grey text-center",
                            },
                            [t._v("暂无统计数据")],
                          ),
                          a("ve-ring", {
                            attrs: {
                              data: t.platformData,
                              settings: t.platformSettings,
                              extend: t.platformExtend,
                            },
                          }),
                        ],
                        1,
                      ),
                    ]),
                  ]
                : t._e(),
              "manufacturerData" === t.appTab
                ? [
                    a("div", { staticClass: "text-center q-my-md" }, [
                      a(
                        "div",
                        { staticClass: "col-12" },
                        [
                          a(
                            "div",
                            {
                              staticStyle: {
                                "font-size": "16px",
                                color: "#454c5c",
                                "font-weight": "700",
                                "margin-top": "10px",
                              },
                            },
                            [t._v("终端机型分布")],
                          ),
                          a(
                            "div",
                            {
                              directives: [
                                {
                                  name: "show",
                                  rawName: "v-show",
                                  value: 0 == t.manufacturerData.rows.length,
                                  expression: "manufacturerData.rows.length == 0",
                                },
                              ],
                              staticClass: "text-grey text-center",
                            },
                            [t._v("暂无统计数据")],
                          ),
                          a("ve-ring", {
                            attrs: {
                              data: t.manufacturerData,
                              settings: t.manufacturerSettings,
                              extend: t.manufacturerExtend,
                            },
                          }),
                        ],
                        1,
                      ),
                    ]),
                  ]
                : t._e(),
            ],
            2,
          );
        },
        K = [],
        U = a("2cd2"),
        X = a.n(U);
      E["a"].component(X.a.name, X.a);
      var Z = {
          name: "NeuStatApp",
          data() {
            return {
              viewPermit: JSON.parse(window.localStorage.getItem("menu")).find(
                (t) => "monitor" === t.id,
              ).view_permit,
              appTab: "platformData",
              condition: { begin_date: "", end_date: "" },
              platformExtend: {
                legend: {
                  formatter: (t) =>
                    t + " (" + this.platformData.rows.find((e) => e.platform === t).amount + ")",
                  tooltip: { show: !0 },
                },
              },
              platformSettings: { dimension: "platform", metrics: "amount" },
              platformData: { columns: ["platform", "amount"], rows: [] },
              manufacturerExtend: {
                legend: {
                  formatter: (t) =>
                    t +
                    " (" +
                    this.manufacturerData.rows.find((e) => e.manufacturer === t).amount +
                    ")",
                  tooltip: { show: !0 },
                },
              },
              manufacturerSettings: { dimension: "manufacturer", metrics: "amount" },
              manufacturerData: { columns: ["manufacturer", "amount"], rows: [] },
            };
          },
          mounted() {
            this.$axiosAction("/api/public.api", { action: "queryDefaultStatPeriod" }).then((t) => {
              0 === t.data.code &&
                ((this.condition.begin_date = t.data.begin_date),
                (this.condition.end_date = t.data.end_date),
                this.query());
            });
          },
          methods: {
            query() {
              this.condition.begin_date
                ? this.condition.end_date
                  ? (this.$q.loading.show(),
                    this.$axiosAction(
                      "/api/teacher/monitor/monitor.api",
                      B()(
                        B()({ action: "queryStatApp" }, this.condition),
                        {},
                        { view_permit: this.viewPermit },
                      ),
                    )
                      .then((t) => {
                        (0 === t.data.code &&
                          ((this.platformData.rows = t.data.result.platform),
                          t.data.result.manufacturer.length > 10
                            ? (this.manufacturerData.rows = t.data.result.manufacturer.reduce(
                                (t, e, a) =>
                                  a < 10
                                    ? t.concat(e)
                                    : ((t[9].manufacturer = "其他"), (t[9].amount += e.amount), t),
                                [],
                              ))
                            : (this.manufacturerData.rows = t.data.result.manufacturer)),
                          this.$q.loading.hide());
                      })
                      .catch((t) => {
                        this.$q.loading.hide();
                      }))
                  : this.$showErrorNotify("请输入统计截止日期")
                : this.$showErrorNotify("请输入统计开始日期");
            },
          },
        },
        tt = Z,
        et = Object(u["a"])(tt, W, K, !1, null, null, null),
        at = et.exports;
      (A()(et, "components", {
        QCard: m["a"],
        QList: p["a"],
        QItem: h["a"],
        QField: R["a"],
        QIcon: b["a"],
        QPopupProxy: J["a"],
        QDate: G["a"],
        QBtn: q["a"],
        QTabs: f["a"],
        QTab: w["a"],
        QSeparator: y["a"],
      }),
        A()(et, "directives", { ClosePopup: Q["a"] }));
      var it = {
          name: "monitorIndex",
          components: { NeuAccessStudent: N, NeuStatActive: V, NeuStatApp: at },
          data() {
            return {
              menuInfo: null,
              tab: "studentConnect",
              record: { task_target: [] },
              taskTargetDialog: !1,
              maximizedToggle: !0,
            };
          },
          mounted() {
            window.localStorage.getItem("menu") &&
              (this.menuInfo = JSON.parse(window.localStorage.getItem("menu")).find(
                (t) => "monitor" === t.id,
              ));
          },
          methods: {
            goBack() {
              this.$router.push("/teacher/index");
            },
          },
        },
        st = it,
        ot = a("6ac5"),
        nt = a("7ff0"),
        rt = Object(u["a"])(st, i, s, !1, null, null, null);
      e["default"] = rt.exports;
      A()(rt, "components", {
        QLayout: S["a"],
        QHeader: C["a"],
        QToolbar: k["a"],
        QBtn: q["a"],
        QToolbarTitle: ot["a"],
        QPageContainer: D["a"],
        QPage: T["a"],
        QFooter: nt["a"],
        QTabs: f["a"],
        QTab: w["a"],
        QSeparator: y["a"],
      });
    },
  },
]);
