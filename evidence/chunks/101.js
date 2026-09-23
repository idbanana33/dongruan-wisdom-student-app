(window["webpackJsonp"] = window["webpackJsonp"] || []).push([
  [101],
  {
    "32f5": function (e, t, s) {
      "use strict";
      s.r(t);
      var i = function () {
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
                      s("q-toolbar-title", [e._v(e._s(e.menuInfo.title) + "申请详情")]),
                      ("A" == e.userinfo.role_id && "A" == e.record.review_status) ||
                      (e.besureMastTeacher === e.userinfo.login_name &&
                        "A" == e.record.review_status)
                        ? s("q-btn", {
                            staticClass: "q-mr-sm",
                            attrs: {
                              flat: "",
                              round: "",
                              dense: "",
                              icon: "clear",
                              color: "negative",
                            },
                            on: { click: e.RefuseProcess },
                          })
                        : e._e(),
                    ],
                    1,
                  ),
                ],
                1,
              ),
              s(
                "q-page-container",
                [
                  e.menuInfo
                    ? s(
                        "q-page",
                        { staticClass: "bg-grey-3" },
                        [
                          s(
                            "q-card",
                            { staticClass: "full-width row", attrs: { flat: "" } },
                            [
                              s(
                                "q-card-section",
                                {
                                  staticClass: "full-width row justify-center text-white",
                                  class: "bg-" + e.color,
                                  staticStyle: { height: "4rem", "font-size": "1.5rem" },
                                },
                                [
                                  s("q-icon", {
                                    directives: [
                                      {
                                        name: "show",
                                        rawName: "v-show",
                                        value: "W" != e.record.review_status,
                                        expression: "record.review_status != 'W'",
                                      },
                                    ],
                                    attrs: {
                                      name: "A" == e.record.review_status ? "done" : "clear",
                                      size: "2rem",
                                    },
                                  }),
                                  e._v(
                                    e._s(
                                      "W" == e.record.review_status
                                        ? "审批中"
                                        : "A" == e.record.review_status
                                          ? "审批通过"
                                          : "审批驳回",
                                    ) + "\n        ",
                                  ),
                                ],
                                1,
                              ),
                              s(
                                "q-card-section",
                                {
                                  staticClass: "full-width row justify-around",
                                  attrs: { avatar: "" },
                                },
                                [
                                  s(
                                    "div",
                                    { staticClass: "col-12 q-mb-md text-left text-weight-bold" },
                                    [e._v("\n            学生信息\n          ")],
                                  ),
                                  s("div", { staticClass: "col-6" }, [
                                    s("span", { staticClass: "text-grey" }, [e._v("姓名：")]),
                                    s("span", { staticClass: "text-bold" }, [
                                      e._v(e._s(e.record.name)),
                                    ]),
                                  ]),
                                  s("div", { staticClass: "col-6" }, [
                                    s("span", { staticClass: "text-grey" }, [e._v("性别：")]),
                                    s("span", { staticClass: "text-bold" }, [
                                      e._v(e._s("1" == e.record.sex ? "男" : "女")),
                                    ]),
                                  ]),
                                  s("div", { staticClass: "col-12 q-mt-sm" }, [
                                    s("span", { staticClass: "text-grey" }, [e._v("学号：")]),
                                    s("span", [e._v(e._s(e.record.student_no))]),
                                  ]),
                                  s("div", { staticClass: "col-12 q-mt-sm" }, [
                                    s("span", { staticClass: "text-grey" }, [
                                      e._v("学生手机号码："),
                                    ]),
                                    s("span", [e._v(e._s(e.record.mob))]),
                                  ]),
                                  s("div", { staticClass: "col-12 q-mt-sm" }, [
                                    s("span", { staticClass: "text-grey" }, [e._v("院系：")]),
                                    s("span", [
                                      e._v(
                                        e._s(e.record.grade_name) +
                                          "/" +
                                          e._s(e.record.dep_name) +
                                          "/" +
                                          e._s(e.record.major_name) +
                                          "/" +
                                          e._s(e.record.class_name),
                                      ),
                                    ]),
                                  ]),
                                ],
                              ),
                            ],
                            1,
                          ),
                          s(
                            "q-card",
                            { staticClass: "full-width row q-mt-sm", attrs: { flat: "" } },
                            [
                              s(
                                "q-card-section",
                                {
                                  staticClass: "full-width row justify-around",
                                  attrs: { avatar: "" },
                                },
                                [
                                  s(
                                    "div",
                                    { staticClass: "col-12 q-mb-md text-left text-weight-bold" },
                                    [e._v("\n            流程详情\n          ")],
                                  ),
                                  s("div", { staticClass: "col-12" }, [
                                    s("span", { staticClass: "text-grey" }, [e._v("流程名称：")]),
                                    s("span", [e._v(e._s(e.record.process_type_name))]),
                                  ]),
                                  s("div", { staticClass: "col-12" }, [
                                    s("span", { staticClass: "text-grey" }, [e._v("申请时间：")]),
                                    s("span", [e._v(e._s(e.record.create_time))]),
                                  ]),
                                  1 == e.record.into_campus
                                    ? s("div", { staticClass: "col-12" }, [
                                        s("span", { staticClass: "text-grey" }, [
                                          e._v("入校申请时间段："),
                                        ]),
                                        s("span", [e._v(e._s(e.record.timeslotintoapply))]),
                                      ])
                                    : e._e(),
                                  1 == e.record.into_campus
                                    ? s("div", { staticClass: "col-12" }, [
                                        s("span", { staticClass: "text-grey" }, [
                                          e._v("入校核验时间段："),
                                        ]),
                                        s("span", [e._v(e._s(e.record.timeslotintobegin))]),
                                      ])
                                    : e._e(),
                                  1 == e.record.out_campus
                                    ? s("div", { staticClass: "col-12" }, [
                                        s("span", { staticClass: "text-grey" }, [
                                          e._v("离校申请时间段："),
                                        ]),
                                        s("span", [e._v(e._s(e.record.timeslotoutapply))]),
                                      ])
                                    : e._e(),
                                  1 == e.record.out_campus
                                    ? s("div", { staticClass: "col-12" }, [
                                        s("span", { staticClass: "text-grey" }, [
                                          e._v("离校核验时间段："),
                                        ]),
                                        s("span", [e._v(e._s(e.record.timeslotoutbegin))]),
                                      ])
                                    : e._e(),
                                  e._l(e.record.info_config, function (t, i) {
                                    return s(
                                      "div",
                                      {
                                        key: i,
                                        staticClass: "col-12",
                                        staticStyle: { "margin-top": "4px" },
                                      },
                                      [
                                        s("neu-widget", {
                                          attrs: {
                                            labelClass:
                                              "col-12 col-md-6 col-sm-9 text-left text-grey" +
                                              (e.$q.screen.lt.sm ? "text-right" : ""),
                                            controlClass: "col-12 col-md-11 col-sm-9",
                                            config: t,
                                            viewMode: e.viewMode,
                                          },
                                          model: {
                                            value: e.record.info_result[i],
                                            callback: function (t) {
                                              e.$set(e.record.info_result, i, t);
                                            },
                                            expression: "record.info_result[index]",
                                          },
                                        }),
                                      ],
                                      1,
                                    );
                                  }),
                                  1 == e.record.process_need_locate &&
                                  "" != e.record.location &&
                                  null != e.record.location
                                    ? s(
                                        "div",
                                        {
                                          staticClass: "col-12",
                                          staticStyle: { "margin-top": "4px" },
                                        },
                                        [
                                          s("span", { staticClass: "text-grey" }, [
                                            e._v("申请位置："),
                                          ]),
                                          s("span", [
                                            e._v(
                                              e._s(
                                                "" == e.record.location
                                                  ? "未填写"
                                                  : e.record.location,
                                              ),
                                            ),
                                          ]),
                                        ],
                                      )
                                    : e._e(),
                                  "" != e.record.contact && null != e.record.contact
                                    ? s(
                                        "div",
                                        {
                                          staticClass: "col-12",
                                          staticStyle: { "margin-top": "4px" },
                                        },
                                        [
                                          s("span", { staticClass: "text-grey" }, [
                                            e._v("紧急联系号码："),
                                          ]),
                                          s("span", [
                                            e._v(
                                              e._s(
                                                "" == e.record.contact
                                                  ? "未填写"
                                                  : e.record.contact,
                                              ),
                                            ),
                                          ]),
                                        ],
                                      )
                                    : e._e(),
                                ],
                                2,
                              ),
                            ],
                            1,
                          ),
                          s(
                            "q-card",
                            { staticClass: "full-width row q-mt-sm", attrs: { flat: "" } },
                            [
                              s(
                                "q-list",
                                { staticClass: "full-width" },
                                [
                                  s("div", { staticClass: "row q-ml-md q-mt-md" }, [
                                    s("div", { staticClass: "col-12 text-left text-weight-bold" }, [
                                      e._v("流程记录"),
                                    ]),
                                  ]),
                                  s("q-item", [
                                    s(
                                      "div",
                                      { staticClass: "q-px-sm q-pb-xs" },
                                      [
                                        s(
                                          "q-timeline",
                                          [
                                            s(
                                              "q-timeline-entry",
                                              {
                                                attrs: {
                                                  subtitle: e.record.create_time,
                                                  color: "grey",
                                                },
                                              },
                                              [
                                                e._v(
                                                  "\n                " +
                                                    e._s(e.record.name) +
                                                    " - 发起申请\n              ",
                                                ),
                                              ],
                                            ),
                                            e._l(e.review_list, function (t) {
                                              return s(
                                                "q-timeline-entry",
                                                {
                                                  key: t.id,
                                                  attrs: {
                                                    subtitle: t.review_time,
                                                    color:
                                                      "A" == t.review_status ? "positive" : "red",
                                                  },
                                                },
                                                [
                                                  e._v(
                                                    "\n                " +
                                                      e._s(t.name) +
                                                      " - " +
                                                      e._s(t.review_status_name) +
                                                      "\n                ",
                                                  ),
                                                  s(
                                                    "p",
                                                    {
                                                      directives: [
                                                        {
                                                          name: "show",
                                                          rawName: "v-show",
                                                          value: null != t.process_opinion,
                                                          expression:
                                                            "item.process_opinion != null",
                                                        },
                                                      ],
                                                      staticStyle: { "font-size": "11px" },
                                                    },
                                                    [e._v("审批意见：" + e._s(t.process_opinion))],
                                                  ),
                                                ],
                                              );
                                            }),
                                            (e.record.teacher_no == e.userinfo.login_name &&
                                              "W" == e.record.tea_review_status &&
                                              "W" == e.record.review_status) ||
                                            (e.theNextTeacher && "W" == e.record.review_status)
                                              ? s(
                                                  "q-timeline-entry",
                                                  {
                                                    attrs: {
                                                      subtitle: "现在",
                                                      color: "warning",
                                                      icon: "edit",
                                                    },
                                                  },
                                                  [
                                                    s(
                                                      "div",
                                                      { staticClass: "neu-css-after-colon" },
                                                      [e._v("审批意见")],
                                                    ),
                                                    s("q-input", {
                                                      staticClass: "q-mb-sm",
                                                      attrs: {
                                                        outlined: "",
                                                        dense: "",
                                                        type: "textarea",
                                                      },
                                                      model: {
                                                        value: e.opinion,
                                                        callback: function (t) {
                                                          e.opinion = t;
                                                        },
                                                        expression: "opinion",
                                                      },
                                                    }),
                                                    s(
                                                      "div",
                                                      { staticClass: "q-gutter-sm row" },
                                                      [
                                                        s("q-btn", {
                                                          attrs: {
                                                            unelevated: "",
                                                            color: "positive",
                                                            label: "通过",
                                                          },
                                                          on: {
                                                            click: function (t) {
                                                              return e.Operation("A");
                                                            },
                                                          },
                                                        }),
                                                        s("q-btn", {
                                                          attrs: {
                                                            unelevated: "",
                                                            color: "red",
                                                            label: "驳回",
                                                          },
                                                          on: {
                                                            click: function (t) {
                                                              return e.Operation("R");
                                                            },
                                                          },
                                                        }),
                                                      ],
                                                      1,
                                                    ),
                                                  ],
                                                  1,
                                                )
                                              : e._e(),
                                            "reviewing" != e.tab &&
                                            "W" == e.record.review_status &&
                                            e.nextTeacher.length > 0 &&
                                            !e.theNextTeacher
                                              ? s(
                                                  "q-timeline-entry",
                                                  {
                                                    attrs: {
                                                      subtitle: "当前审核教师",
                                                      color: "warning",
                                                    },
                                                  },
                                                  [
                                                    e._l(
                                                      e.nextTeacher.slice(0, 3),
                                                      function (t, i) {
                                                        return s("span", { key: t.teacher_no }, [
                                                          e._v(e._s(t.name)),
                                                          i != e.nextTeacher.length - 1 &&
                                                          2 != i &&
                                                          e.nextTeacher.length > 1
                                                            ? s("span", [e._v(", ")])
                                                            : e._e(),
                                                        ]);
                                                      },
                                                    ),
                                                    e.nextTeacher.length > 3
                                                      ? s("span", [
                                                          e._v(
                                                            "等" +
                                                              e._s(e.nextTeacher.length) +
                                                              "人审核中",
                                                          ),
                                                        ])
                                                      : e._e(),
                                                  ],
                                                  2,
                                                )
                                              : e._e(),
                                          ],
                                          2,
                                        ),
                                      ],
                                      1,
                                    ),
                                  ]),
                                  s("q-separator"),
                                ],
                                1,
                              ),
                            ],
                            1,
                          ),
                          s(
                            "q-dialog",
                            {
                              model: {
                                value: e.writeOpinion,
                                callback: function (t) {
                                  e.writeOpinion = t;
                                },
                                expression: "writeOpinion",
                              },
                            },
                            [
                              s(
                                "q-card",
                                { staticStyle: { width: "700px", "max-width": "80vw" } },
                                [
                                  s("q-card-section", [
                                    s("div", { staticClass: "text-h6" }, [e._v("审批意见")]),
                                  ]),
                                  s(
                                    "q-card-section",
                                    { staticClass: "q-pt-none" },
                                    [
                                      s("q-input", {
                                        attrs: { dense: "", autofocus: "" },
                                        model: {
                                          value: e.opinion,
                                          callback: function (t) {
                                            e.opinion = t;
                                          },
                                          expression: "opinion",
                                        },
                                      }),
                                    ],
                                    1,
                                  ),
                                  s(
                                    "q-card-actions",
                                    { staticClass: "text-primary", attrs: { align: "right" } },
                                    [
                                      s("q-btn", {
                                        directives: [
                                          { name: "close-popup", rawName: "v-close-popup" },
                                        ],
                                        attrs: { flat: "", label: "取消" },
                                      }),
                                      s("q-btn", {
                                        directives: [
                                          { name: "close-popup", rawName: "v-close-popup" },
                                        ],
                                        attrs: { flat: "", label: "确认" },
                                        on: {
                                          click: function (t) {
                                            return e.Operations();
                                          },
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
                      )
                    : e.menuInfo
                      ? e._e()
                      : s("q-page", [
                          e.menuInfo
                            ? e._e()
                            : s(
                                "div",
                                {
                                  staticClass:
                                    "text-h6 text-bold q-mb-md row justify-center full-width",
                                },
                                [e._v("\n              您没有当前页面访问权限\n          ")],
                              ),
                        ]),
                ],
                1,
              ),
            ],
            1,
          );
        },
        r = [],
        a = s("ded3"),
        o = s.n(a),
        n = s("58a84"),
        c = s("974f"),
        l = {
          name: "processTeaDetails",
          components: { NeuWidget: c["a"] },
          data() {
            return {
              id: this.$route.query.id,
              menuType: "",
              userinfo: window.localStorage.userinfo
                ? JSON.parse(window.localStorage.getItem("userinfo"))
                : null,
              process_id: this.$route.query.process_id,
              menuInfo: null,
              viewMode: !0,
              record: {},
              opinion: "",
              edit_permit: null,
              review_list: [],
              create_time_short: "",
              level: 0,
              color: "",
              review_level: this.$route.query.review_level,
              tab: this.$route.query.tab,
              nextTeacher: [],
              theNextTeacher: !1,
              service_flag: "N",
              writeOpinion: !1,
              besureMastTeacher: "",
            };
          },
          computed: {},
          destroyed() {
            window.removeEventListener("popstate", this.goBack, !1);
          },
          mounted() {
            (window.localStorage.getItem("menu") &&
              ((this.service_flag = this.$route.query.service_flag),
              "N" === this.service_flag
                ? (this.menuType = "process")
                : (this.menuType = "process_gate"),
              (this.menuInfo = JSON.parse(window.localStorage.getItem("menu")).find(
                (e) => e.id === this.menuType,
              ))),
              this.getProcessReviewInfo(),
              window.history &&
                window.history.pushState &&
                (history.pushState(null, null, document.URL),
                window.addEventListener("popstate", this.goBack, !1)));
          },
          methods: {
            goBack() {
              this.$router.push(
                "/teacher/process/list?tab=" +
                  this.tab +
                  "&type_id=" +
                  this.$route.query.type_id +
                  "&service_flag=" +
                  this.service_flag,
              );
            },
            getProcessReviewInfo() {
              (this.$q.loading.show(),
                this.$axiosAction("/api/teacher/process/process.api", {
                  action: "getProcessDetail",
                  id: this.id,
                  process_id: this.process_id,
                  review_level: this.review_level,
                  teacher_no: this.userinfo.login_name,
                  tab: this.tab,
                }).then((e) => {
                  const t = e.data.result.list;
                  if (((this.record = t[0]), "W" === this.record.review_status)) {
                    const e = t.findIndex((e) => e.teacher_no === this.userinfo.login_name);
                    this.record = e > -1 ? t[e] : t[t.length - 1];
                  }
                  this.nextTeacher = e.data.nextTeacher.nextTeacher;
                  const s = this.nextTeacher.findIndex(
                    (e) => e.teacher_no === this.userinfo.login_name,
                  );
                  ((this.theNextTeacher = s > -1),
                    void 0 === this.record
                      ? ((this.record = {
                          sex: null,
                          review_status: null,
                          process_type_name: null,
                        }),
                        this.$showErrorNotify("该流程被撤回，或已被审批"),
                        this.goBack())
                      : ((this.id = this.record.prid),
                        "R" === this.record.review_status
                          ? (this.color = "red")
                          : "A" === this.record.review_status
                            ? (this.color = "green")
                            : "W" === this.record.review_status && (this.color = "teal"),
                        (this.review_list = e.data.review_list.review_list),
                        this.review_list.length > 0 &&
                          (this.besureMastTeacher =
                            this.review_list[this.review_list.length - 1].teacher_no)),
                    this.$q.loading.hide());
                }));
            },
            Operation(e) {
              const t = [];
              let s = "";
              for (let i = 0; i < this.record.info_config.length; i++) {
                const e = Object(n["a"])(this.record.info_config[i], this.record.info_result[i]);
                e &&
                  (t.push(this.record.info_config[i].label),
                  (s =
                    t.length > 1
                      ? s + "、" + this.record.info_config[i].label
                      : this.record.info_config[i].label));
              }
              t.length > 0 && "A" === e
                ? this.$q
                    .dialog({
                      title: "确认通过",
                      message: '<span class="text-red">' + s + "存在风险，是否通过</span>",
                      html: !0,
                      persistent: !0,
                      cancel: { label: "取消", outline: !0, color: "grey" },
                      ok: { label: "通过", unelevated: !0, color: "negative" },
                    })
                    .onOk(() => {
                      this.getWarnSure(e);
                    })
                : this.getWarnSure(e);
            },
            getWarnSure(e) {
              (this.$q.loading.show(),
                "A" === e &&
                  this.record.review_level < this.record.process_reviewer.length &&
                  (this.level = this.record.review_level + 1));
              const t = [],
                s = {};
              ((s.id = this.id),
                (s.reviewStatus = e),
                (s.opinion = this.opinion),
                (s.level = this.level),
                (s.levelIng = this.record.review_level),
                (s.process_id = this.process_id),
                (s.student_no = this.record.student_no),
                (s.process_type_id = this.record.process_type_id),
                (s.process_type_name = this.record.process_type_name),
                (s.create_time = this.record.create_time),
                (s.name = this.record.name),
                (s.service_flag = this.service_flag),
                (s.menu_id = this.menuType),
                (s.menuTypeName = this.menuInfo.title),
                t.push(s),
                this.$axiosAction("/api/teacher/process/process.api", {
                  action: "updateProcessReview",
                  resultViews: t,
                }).then((e) => {
                  (0 === e.data.code &&
                    (e.data.result.length > 0
                      ? this.$showErrorNotify(
                          e.data.result[0] + "下一级审批人被删除或无权限，请刷新或联系管理员",
                        )
                      : (this.$showSuccessNotify("操作成功"), this.goBack())),
                    this.$q.loading.hide());
                }));
            },
            deleteProcess() {
              this.$q
                .dialog({
                  title: "删除该流程",
                  message: "确定要删除此流程数据吗？",
                  persistent: !0,
                  cancel: { label: "返回", outline: !0, color: "grey" },
                  ok: { label: "确定", unelevated: !0, color: "negative" },
                })
                .onOk(() => {
                  (this.$q.loading.show(),
                    this.$axiosAction("/api/teacher/process/process.api", {
                      action: "deleteProcessAll",
                      id: this.process_id,
                      role_id: this.userinfo.role_id,
                    })
                      .then((e) => {
                        (0 === e.data.code && this.goBack(), this.$q.loading.hide());
                      })
                      .catch((e) => {
                        this.goBack();
                      }));
                });
            },
            RefuseProcess() {
              this.writeOpinion = !0;
            },
            Operations() {
              (this.$q.loading.show(), (this.level = this.review_list.length + 1));
              const e = [],
                t = { reviewStatus: "R" };
              ((t.opinion = this.opinion),
                (t.review_level = this.level),
                (t.process_id = this.process_id),
                (t.student_no = this.record.student_no),
                (t.process_type_id = this.record.process_type_id),
                (t.process_type_name = this.record.process_type_name),
                (t.create_time = this.record.create_time),
                (t.name = this.record.name),
                (t.service_flag = this.service_flag),
                (t.menu_id = this.menuType),
                (t.menuTypeName = this.menuInfo.title),
                e.push(t),
                this.$axiosAction(
                  "/api/teacher/process/process.api",
                  o()({ action: "updateProcessRefuse" }, e[0]),
                ).then((e) => {
                  (0 === e.data.code && this.goBack(), this.$q.loading.hide());
                }));
            },
          },
        },
        d = l,
        _ = s("2877"),
        h = s("4d5a"),
        p = s("e359"),
        u = s("65c6"),
        v = s("9c40"),
        m = s("6ac5"),
        g = s("09e3"),
        w = s("9989"),
        f = s("f09f"),
        y = s("a370"),
        x = s("0016"),
        q = s("1c1c"),
        b = s("66e5"),
        C = s("05eb"),
        T = s("74af"),
        k = s("27f9"),
        $ = s("eb85"),
        S = s("24e8"),
        I = s("4b7e"),
        N = s("7f67"),
        Q = s("eebe"),
        A = s.n(Q),
        O = Object(_["a"])(d, i, r, !1, null, null, null);
      t["default"] = O.exports;
      (A()(O, "components", {
        QLayout: h["a"],
        QHeader: p["a"],
        QToolbar: u["a"],
        QBtn: v["a"],
        QToolbarTitle: m["a"],
        QPageContainer: g["a"],
        QPage: w["a"],
        QCard: f["a"],
        QCardSection: y["a"],
        QIcon: x["a"],
        QList: q["a"],
        QItem: b["a"],
        QTimeline: C["a"],
        QTimelineEntry: T["a"],
        QInput: k["a"],
        QSeparator: $["a"],
        QDialog: S["a"],
        QCardActions: I["a"],
      }),
        A()(O, "directives", { ClosePopup: N["a"] }));
    },
  },
]);
