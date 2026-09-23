(window["webpackJsonp"] = window["webpackJsonp"] || []).push([
  [107],
  {
    a22e: function (t, i, e) {
      "use strict";
      e.r(i);
      var s = function () {
          var t = this,
            i = t.$createElement,
            e = t._self._c || i;
          return e(
            "q-layout",
            { attrs: { view: "lHh lpr lFf" } },
            [
              e(
                "q-header",
                { staticClass: "bg-grey-3 text-black" },
                [
                  e(
                    "q-toolbar",
                    [
                      e("q-btn", {
                        attrs: { flat: "", round: "", dense: "", icon: "keyboard_arrow_left" },
                        on: { click: t.goBack },
                      }),
                      e("q-toolbar-title", [t._v("查寝结果")]),
                    ],
                    1,
                  ),
                ],
                1,
              ),
              e(
                "q-page-container",
                [
                  e(
                    "q-page",
                    { staticClass: "bg-grey-3" },
                    [
                      e(
                        "q-form",
                        {
                          staticClass: "q-gutter-sm full-width",
                          on: { submit: t.saveSanitationResult },
                        },
                        [
                          t.menuInfo
                            ? e(
                                "q-card",
                                { staticClass: "full-width", attrs: { flat: "" } },
                                [
                                  e(
                                    "q-list",
                                    [
                                      e(
                                        "q-item",
                                        [
                                          e(
                                            "q-item-section",
                                            [
                                              e("q-item-label", { staticClass: "text-bold" }, [
                                                t._v("寝室检查基本内容"),
                                              ]),
                                            ],
                                            1,
                                          ),
                                        ],
                                        1,
                                      ),
                                      e("q-separator"),
                                      e(
                                        "q-item",
                                        [
                                          e("q-item-section", { attrs: { avatar: "" } }, [
                                            e(
                                              "div",
                                              { staticClass: "neu-css-before-red-asterisk" },
                                              [
                                                t._v(
                                                  "\n                    执行日期\n                  ",
                                                ),
                                              ],
                                            ),
                                          ]),
                                          e(
                                            "q-item-section",
                                            [
                                              e("q-field", {
                                                staticStyle: { width: "100%" },
                                                attrs: {
                                                  outlined: "",
                                                  dense: "",
                                                  "stack-label": "",
                                                  "hide-bottom-space": "",
                                                  "lazy-rules": "",
                                                  rules: [
                                                    function (t) {
                                                      return !!t || "请填写该项";
                                                    },
                                                    function (i) {
                                                      return (
                                                        (i >= t.begin_date && i <= t.end_date) ||
                                                        "执行时间应在任务执行时间范围内"
                                                      );
                                                    },
                                                  ],
                                                  value: t.sanitation_result.check_date,
                                                },
                                                scopedSlots: t._u(
                                                  [
                                                    {
                                                      key: "control",
                                                      fn: function () {
                                                        return [
                                                          t._v(
                                                            t._s(t.sanitation_result.check_date),
                                                          ),
                                                        ];
                                                      },
                                                      proxy: !0,
                                                    },
                                                    t.show_time
                                                      ? {
                                                          key: "append",
                                                          fn: function () {
                                                            return [
                                                              e(
                                                                "q-icon",
                                                                {
                                                                  staticClass: "cursor-pointer",
                                                                  attrs: { name: "event" },
                                                                },
                                                                [
                                                                  e(
                                                                    "q-popup-proxy",
                                                                    {
                                                                      attrs: {
                                                                        "transition-show": "scale",
                                                                        "transition-hide": "scale",
                                                                      },
                                                                    },
                                                                    [
                                                                      e(
                                                                        "div",
                                                                        [
                                                                          e(
                                                                            "q-date",
                                                                            {
                                                                              attrs: {
                                                                                flat: "",
                                                                                minimal: "",
                                                                                mask: "YYYY-MM-DD",
                                                                              },
                                                                              model: {
                                                                                value:
                                                                                  t
                                                                                    .sanitation_result
                                                                                    .check_date,
                                                                                callback: function (
                                                                                  i,
                                                                                ) {
                                                                                  t.$set(
                                                                                    t.sanitation_result,
                                                                                    "check_date",
                                                                                    i,
                                                                                  );
                                                                                },
                                                                                expression:
                                                                                  "sanitation_result.check_date",
                                                                              },
                                                                            },
                                                                            [
                                                                              e(
                                                                                "div",
                                                                                {
                                                                                  staticClass:
                                                                                    "row items-center justify-end",
                                                                                },
                                                                                [
                                                                                  e("q-btn", {
                                                                                    directives: [
                                                                                      {
                                                                                        name: "close-popup",
                                                                                        rawName:
                                                                                          "v-close-popup",
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
                                                        }
                                                      : null,
                                                  ],
                                                  null,
                                                  !0,
                                                ),
                                              }),
                                            ],
                                            1,
                                          ),
                                        ],
                                        1,
                                      ),
                                      e("q-separator"),
                                      e(
                                        "q-item",
                                        [
                                          e("q-item-section", { attrs: { avatar: "" } }, [
                                            e(
                                              "div",
                                              { staticClass: "neu-css-before-red-asterisk" },
                                              [
                                                t._v(
                                                  "\n                    宿舍\n                  ",
                                                ),
                                              ],
                                            ),
                                          ]),
                                          e(
                                            "q-item-section",
                                            [
                                              e("q-input", {
                                                attrs: {
                                                  outlined: "",
                                                  dense: "",
                                                  "hide-bottom-space": "",
                                                  readonly: t.readonlysuse,
                                                },
                                                model: {
                                                  value: t.sanitation_result.room_name,
                                                  callback: function (i) {
                                                    t.$set(t.sanitation_result, "room_name", i);
                                                  },
                                                  expression: "sanitation_result.room_name",
                                                },
                                              }),
                                            ],
                                            1,
                                          ),
                                          t.show_Suse
                                            ? e(
                                                "q-item-section",
                                                { attrs: { side: "" } },
                                                [
                                                  e("q-btn", {
                                                    attrs: {
                                                      outline: "",
                                                      "hide-bottom-space": "",
                                                      color: "primary",
                                                      label: "选择宿舍",
                                                    },
                                                    on: {
                                                      click: function (i) {
                                                        t.selectSuse();
                                                      },
                                                    },
                                                  }),
                                                ],
                                                1,
                                              )
                                            : t._e(),
                                        ],
                                        1,
                                      ),
                                      e("q-separator", {
                                        staticStyle: { height: "7px" },
                                        attrs: { color: "grey-3" },
                                      }),
                                    ],
                                    1,
                                  ),
                                  e(
                                    "q-card-section",
                                    [
                                      e("div", { staticClass: "row" }, [
                                        e(
                                          "div",
                                          {
                                            staticClass:
                                              "col-12 col-md-2 col-sm-3 text-bold q-pr-sm",
                                            class: t.$q.screen.lt.sm ? "" : "text-right",
                                          },
                                          [t._v("宿舍检查结果")],
                                        ),
                                      ]),
                                      e(
                                        "q-card",
                                        { staticClass: "full-width", attrs: { flat: "" } },
                                        [
                                          e(
                                            "q-card-section",
                                            t._l(t.infoConfig, function (i, s) {
                                              return e("neu-widget", {
                                                key: s,
                                                staticStyle: { "margin-top": "4px" },
                                                attrs: {
                                                  labelClass:
                                                    "col-12 col-md-2 col-sm-9 text-right" +
                                                    (t.$q.screen.lt.sm ? "text-right" : ""),
                                                  controlClass: "col-12 col-md-10 col-sm-9",
                                                  config: i,
                                                  viewMode: t.viewMode,
                                                },
                                                model: {
                                                  value: t.result.info_result[s],
                                                  callback: function (i) {
                                                    t.$set(t.result.info_result, s, i);
                                                  },
                                                  expression: "result.info_result[index]",
                                                },
                                              });
                                            }),
                                            1,
                                          ),
                                        ],
                                        1,
                                      ),
                                      e("q-separator"),
                                      e("div", { staticClass: "row" }, [
                                        e(
                                          "div",
                                          {
                                            staticClass:
                                              "col-12 col-md-2 col-sm-3 neu-css-after-colon text-bold q-pr-sm",
                                            class: t.$q.screen.lt.sm ? "" : "text-right",
                                          },
                                          [t._v("学生")],
                                        ),
                                        e(
                                          "div",
                                          { staticClass: "col-12 col-md-10 col-sm-9" },
                                          t._l(t.stuList, function (i, s) {
                                            return e(
                                              "q-btn",
                                              {
                                                key: s,
                                                staticStyle: { "margin-right": "5px" },
                                                attrs: {
                                                  push: "",
                                                  color: i.color,
                                                  "text-color": i.textColor,
                                                  disabled: t.disabled,
                                                },
                                                on: {
                                                  click: function (e) {
                                                    t.inputStudentResult(i);
                                                  },
                                                },
                                              },
                                              [
                                                t._v(
                                                  "\n                          " +
                                                    t._s(i.name) +
                                                    "\n                      ",
                                                ),
                                              ],
                                            );
                                          }),
                                          1,
                                        ),
                                      ]),
                                      e(
                                        "div",
                                        {
                                          directives: [
                                            {
                                              name: "show",
                                              rawName: "v-show",
                                              value: "d" !== this.sanitationType,
                                              expression: "this.sanitationType !== 'd'",
                                            },
                                          ],
                                          staticClass: "row q-mt-xs",
                                        },
                                        [
                                          e("div", {
                                            staticClass:
                                              "col-12 col-md-2 col-sm-3 text-bold q-pr-sm",
                                            class: t.$q.screen.lt.sm ? "" : "text-right",
                                          }),
                                          e(
                                            "div",
                                            {
                                              staticClass: "col-12 col-md-10 col-sm-3",
                                              class: t.$q.screen.lt.sm ? "" : "text-left",
                                              staticStyle: { color: "grey" },
                                            },
                                            [
                                              t._v(
                                                "点击可查看/填写/修改学生查寝结果，若在添加/修改状态再次点击,该学生查寝结果将会清空，蓝色为当前正在展开。",
                                              ),
                                            ],
                                          ),
                                        ],
                                      ),
                                      t._l(t.stuList, function (i, s) {
                                        return e(
                                          "q-card",
                                          {
                                            directives: [
                                              {
                                                name: "show",
                                                rawName: "v-show",
                                                value: i.show_key,
                                                expression: "item.show_key",
                                              },
                                            ],
                                            key: s,
                                            staticClass: "full-width",
                                            attrs: { flat: "" },
                                          },
                                          [
                                            e("div", { staticClass: "row items-center" }, [
                                              e(
                                                "div",
                                                {
                                                  staticClass:
                                                    "col-12 col-md-2 col-sm-3 text-bold q-pr-sm",
                                                  class: t.$q.screen.lt.sm ? "" : "text-right",
                                                },
                                                [t._v(t._s(i.name))],
                                              ),
                                            ]),
                                            !0 === i.show_key
                                              ? e(
                                                  "q-card-section",
                                                  t._l(t.stuInfoConf, function (i, o) {
                                                    return e("neu-widget", {
                                                      key: o,
                                                      attrs: {
                                                        labelClass:
                                                          "col-12 col-md-2 col-sm-9 neu-css-after-colon text-right" +
                                                          (t.$q.screen.lt.sm ? "text-right" : ""),
                                                        controlClass: "col-12 col-md-10 col-sm-9",
                                                        config: i,
                                                        viewMode: t.viewMode,
                                                      },
                                                      model: {
                                                        value: t.stuResult[s].info_result[o],
                                                        callback: function (i) {
                                                          t.$set(t.stuResult[s].info_result, o, i);
                                                        },
                                                        expression:
                                                          "stuResult[stuindex].info_result[index]",
                                                      },
                                                    });
                                                  }),
                                                  1,
                                                )
                                              : t._e(),
                                          ],
                                          1,
                                        );
                                      }),
                                    ],
                                    2,
                                  ),
                                  e("div", {
                                    staticClass: "bg-white",
                                    staticStyle: { height: "2.8rem" },
                                  }),
                                ],
                                1,
                              )
                            : t._e(),
                          t.show_time
                            ? e(
                                "q-footer",
                                {
                                  directives: [
                                    {
                                      name: "show",
                                      rawName: "v-show",
                                      value: "n" !== t.sanitationType,
                                      expression: "sanitationType !== 'n'",
                                    },
                                  ],
                                  staticClass: "bg-white text-primary",
                                  staticStyle: {
                                    height: "2.8rem",
                                    "margin-left": "0px",
                                    border: "0px",
                                  },
                                  attrs: { bordered: "" },
                                },
                                [
                                  e("q-btn", {
                                    staticStyle: { width: "30%", height: "100%" },
                                    attrs: { color: "red", label: "删除" },
                                    on: {
                                      click: function (i) {
                                        return t.deleteSanitationResult();
                                      },
                                    },
                                  }),
                                  e("q-btn", {
                                    staticStyle: { width: "30%", height: "100%" },
                                    attrs: {
                                      outline: "",
                                      color: "grey",
                                      label: "暂存",
                                      type: "submit",
                                    },
                                    on: {
                                      click: function (i) {
                                        t.changeStatus(0);
                                      },
                                    },
                                  }),
                                  e("q-btn", {
                                    staticStyle: { width: "40%", height: "100%" },
                                    attrs: { color: "primary", label: "提交", type: "submit" },
                                    on: {
                                      click: function (i) {
                                        t.changeStatus(1);
                                      },
                                    },
                                  }),
                                ],
                                1,
                              )
                            : t._e(),
                          t.show_time
                            ? e(
                                "q-footer",
                                {
                                  directives: [
                                    {
                                      name: "show",
                                      rawName: "v-show",
                                      value: "n" === t.sanitationType,
                                      expression: "sanitationType === 'n'",
                                    },
                                  ],
                                  staticClass: "bg-white text-primary",
                                  staticStyle: {
                                    height: "2.8rem",
                                    "margin-left": "0px",
                                    border: "0px",
                                  },
                                  attrs: { bordered: "" },
                                },
                                [
                                  e("q-btn", {
                                    staticStyle: { width: "40%", height: "100%" },
                                    attrs: {
                                      outline: "",
                                      color: "grey",
                                      label: "暂存",
                                      type: "submit",
                                    },
                                    on: {
                                      click: function (i) {
                                        t.changeStatus(0);
                                      },
                                    },
                                  }),
                                  e("q-btn", {
                                    staticStyle: { width: "60%", height: "100%" },
                                    attrs: { color: "primary", label: "提交", type: "submit" },
                                    on: {
                                      click: function (i) {
                                        t.changeStatus(1);
                                      },
                                    },
                                  }),
                                ],
                                1,
                              )
                            : t._e(),
                          e(
                            "q-footer",
                            {
                              directives: [
                                {
                                  name: "show",
                                  rawName: "v-show",
                                  value:
                                    ("d" === t.sanitationType && "A" == t.roleId) ||
                                    ("d" === t.sanitationType &&
                                      t.getAllowDelete &&
                                      t.teacherNo === t.sanitation_result.teacher_no),
                                  expression:
                                    "(sanitationType === 'd' && roleId == 'A') || (sanitationType === 'd' && getAllowDelete && (teacherNo === sanitation_result.teacher_no))",
                                },
                              ],
                              staticClass: "bg-white text-primary",
                              staticStyle: {
                                height: "2.8rem",
                                "margin-left": "0px",
                                border: "0px",
                              },
                              attrs: { bordered: "" },
                            },
                            [
                              e("q-btn", {
                                staticStyle: { width: "100%", height: "100%" },
                                attrs: { color: "red", label: "删除" },
                                on: {
                                  click: function (i) {
                                    return t.deleteSanitationResult();
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
              ),
              e(
                "q-dialog",
                {
                  attrs: { persistent: "" },
                  model: {
                    value: t.editDialog,
                    callback: function (i) {
                      t.editDialog = i;
                    },
                    expression: "editDialog",
                  },
                },
                [
                  e(
                    "q-card",
                    { staticClass: "full-width", attrs: { flat: "" } },
                    [
                      e("q-card-section", [
                        e("div", { staticClass: "text-bold" }, [t._v("选择寝室")]),
                      ]),
                      e(
                        "q-card-section",
                        [
                          e(
                            "q-form",
                            { staticClass: "q-gutter-sm full-width", on: { submit: t.saveRecord } },
                            [
                              e("div", { staticClass: "row" }, [
                                e(
                                  "div",
                                  { staticClass: "col-12 col-sm-9" },
                                  [
                                    e("q-select", {
                                      attrs: {
                                        outlined: "",
                                        dense: "",
                                        "hide-bottom-space": "",
                                        "lazy-rules": "",
                                        rules: [
                                          function (t) {
                                            return !!t || "请选择该项";
                                          },
                                        ],
                                        options: t.buildingList,
                                        "emit-value": "",
                                        "map-options": "",
                                        label: "公寓楼",
                                      },
                                      on: { input: t.queryRoomList },
                                      model: {
                                        value: t.record.building_no,
                                        callback: function (i) {
                                          t.$set(t.record, "building_no", i);
                                        },
                                        expression: "record.building_no",
                                      },
                                    }),
                                    e("q-select", {
                                      staticStyle: { "margin-top": "8px" },
                                      attrs: {
                                        outlined: "",
                                        dense: "",
                                        "hide-bottom-space": "",
                                        "lazy-rules": "",
                                        rules: [
                                          function (t) {
                                            return !!t || "请选择该项";
                                          },
                                        ],
                                        options: t.roomList,
                                        "emit-value": "",
                                        "map-options": "",
                                        label: "寝室",
                                      },
                                      model: {
                                        value: t.record.room_no,
                                        callback: function (i) {
                                          t.$set(t.record, "room_no", i);
                                        },
                                        expression: "record.room_no",
                                      },
                                    }),
                                  ],
                                  1,
                                ),
                              ]),
                              e("div", { staticClass: "row" }, [
                                e("div", { staticClass: "col-12 col-sm-3" }),
                                e(
                                  "div",
                                  { staticClass: "col-12 col-sm-9 q-gutter-sm row" },
                                  [
                                    e("q-btn", {
                                      attrs: {
                                        unelevated: "",
                                        color: "primary",
                                        label: "保存",
                                        type: "submit",
                                      },
                                    }),
                                    e("q-btn", {
                                      attrs: { outline: "", color: "grey", label: "取消" },
                                      on: {
                                        click: function (i) {
                                          t.editDialog = !1;
                                        },
                                      },
                                    }),
                                  ],
                                  1,
                                ),
                              ]),
                            ],
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
        o = [],
        a = (e("c975"), e("13d5"), e("ded3")),
        n = e.n(a),
        l = e("974f"),
        r = {
          name: "SanitationDetailResult",
          components: { NeuWidget: l["a"] },
          data() {
            return {
              roleId: JSON.parse(window.localStorage.getItem("userinfo")).role_id,
              teacherNo: "",
              menuInfo: null,
              sanitationType: "",
              sanitation_id: null,
              return_url: "",
              show_time: !0,
              show_Suse: !0,
              room_no: "",
              room_name: "",
              disabled: !1,
              viewMode: !1,
              readonlysuse: !0,
              result: { info_result: [] },
              begin_date: "",
              end_date: "",
              sanitation_result: {
                id: null,
                sanitation_id: null,
                teacher_no: "",
                check_date: "",
                room_no: "",
                room_name: "",
                info_result: [],
                status: void 0,
                create_time: "",
                create_user: "",
                edit_time: "",
                edit_user: "",
              },
              editDialog: !1,
              roomList: [],
              buildingList: [],
              record: {},
              buildingRoomList: [],
              stuResult: [],
              stuList: [],
              infoConfig: [],
              stuInfoConf: [],
              getAllowDelete: !1,
            };
          },
          mounted() {
            if (
              (window.localStorage.getItem("menu") &&
                ((this.menuInfo = JSON.parse(window.localStorage.getItem("menu")).find(
                  (t) => "sanitation" === t.id,
                )),
                (this.sanitationType = this.$route.query.type),
                (this.sanitation_id = this.$route.query.sanId),
                (this.teacherNo = this.$route.query.teacher_no),
                (this.getAllowDelete = "true" === this.$route.query.getAllowDelete)),
              this.getTaskResult(),
              "d" === this.sanitationType || "u" === this.sanitationType)
            ) {
              ("u" === this.sanitationType
                ? ((this.viewMode = !1), (this.show_time = !0))
                : ((this.viewMode = !0), (this.show_time = !1), (this.disabled = !0)),
                (this.readonlysuse = !0),
                (this.show_Suse = !1));
              const t = window.localStorage.getItem("sanitation_result_detail"),
                i = JSON.parse(t);
              ((this.sanitation_result = n()({}, i)),
                (this.room_no = i.room_no),
                (this.room_name = i.room_name),
                this.queryStudent(),
                (this.result.info_result = this.sanitation_result.info_result));
            }
            ((this.return_url = window.localStorage.getItem("sanitation_detail_url")),
              this.$axiosAction("/api/teacher/sanitation/sanitation.api", {
                action: "queryAllBuilding",
              }).then((t) => {
                0 === t.data.code && (this.buildingList = t.data.list);
              }),
              this.$axiosAction("/api/teacher/basic/stuRoom.api", {
                action: "queryAllBuildingRoom",
              }).then((t) => {
                0 === t.data.code && (this.buildingRoomList = t.data.result);
              }));
          },
          methods: {
            getTaskResult() {
              this.$axiosAction("/api/teacher/sanitation/sanitation.api", {
                action: "querySanitation",
                id: this.sanitation_id,
                roleId: this.roleId,
              })
                .then((t) => {
                  0 === t.data.code &&
                    ((this.infoConfig = t.data.result.info_config),
                    (this.stuInfoConf = t.data.result.stu_info_config),
                    (this.begin_date = t.data.result.begin_date),
                    (this.end_date = t.data.result.end_date),
                    0 !== this.stuInfoConf.length && (this.show_stu_result = !0));
                })
                .catch((t) => {
                  this.$q.loading.hide();
                });
            },
            goBack() {
              this.$router.push("/teacher/sanitation/detail");
            },
            changeStatus(t) {
              this.sanitation_result.status = t;
            },
            saveSanitationResult() {
              if ("" === this.sanitation_result.check_date)
                return void this.$showErrorNotify("请填写执行日期");
              if (
                "请选择宿舍" === this.sanitation_result.room_no ||
                "" === this.sanitation_result.room_no
              )
                return void this.$showErrorNotify("请选择宿舍");
              this.sanitation_result.sanitation_id = parseInt(this.sanitation_id);
              const t = n()({}, this.result);
              ((t.info_result = JSON.stringify(t.info_result)),
                (this.sanitation_result.info_result = t.info_result));
              const i = n()({}, this.sanitation_result);
              if ((this.$q.loading.show(), "n" === this.sanitationType)) {
                const t = [];
                for (let i = 0; i < this.stuResult.length; i++)
                  t[i] = {
                    student_no: this.stuList[i].login_name,
                    info_result: JSON.stringify(this.stuResult[i].info_result),
                    sanitation_result_id: this.sanitation_result.id,
                  };
                this.$axiosAction(
                  "/api/teacher/sanitation/sanitation.api",
                  n()(n()({ action: "insertSanitationResult" }, i), {}, { sturst: t }),
                )
                  .then((t) => {
                    (0 === t.data.code &&
                      this.$router.push(
                        "/teacher/sanitation/detail?id=" +
                          this.sanitation_result.sanitation_id +
                          "&type=d",
                      ),
                      this.$q.loading.hide());
                  })
                  .catch((t) => {
                    this.$q.loading.hide();
                  });
              } else
                this.$axiosAction(
                  "/api/teacher/sanitation/sanitation.api",
                  n()({ action: "updateSanitationResult" }, i),
                )
                  .then((t) => {
                    if (0 === t.data.code) {
                      if (0 !== this.stuInfoConf.length) {
                        const t = [];
                        for (let i = 0; i < this.stuResult.length; i++)
                          t[i] = {
                            student_no: this.stuList[i].login_name,
                            info_result: JSON.stringify(this.stuResult[i].info_result),
                            sanitation_result_id: this.sanitation_result.id,
                          };
                        this.$axiosAction("/api/teacher/sanitation/sanitation.api", {
                          action: "updateStudentResult",
                          sturst: t,
                        })
                          .then((t) => {
                            t.data.code;
                          })
                          .catch((t) => {
                            this.$q.loading.hide();
                          });
                      }
                      (this.$q.loading.hide(),
                        this.$router.push(
                          "/teacher/sanitation/detail?id=" +
                            this.sanitation_result.sanitation_id +
                            "&type=d",
                        ));
                    }
                    this.$q.loading.hide();
                  })
                  .catch((t) => {
                    this.$q.loading.hide();
                  });
            },
            selectSuse() {
              ((this.editDialog = !0), this.queryRoomList());
            },
            queryRoomList() {
              if (
                ((this.roomList = []),
                this.record.building_no &&
                  ((this.roomList = this.buildingRoomList.reduce(
                    (t, i) =>
                      i.building_no === this.record.building_no
                        ? t.concat({
                            value: i.room_no,
                            label: i.room_name,
                            labelChange: i.roomlabel,
                          })
                        : t,
                    [],
                  )),
                  this.roomList.length <= 0 || this.roomList === []))
              )
                return this.$showErrorNotify("该楼寝室为空");
            },
            saveRecord() {
              const t = [];
              for (let i = 0; i < this.roomList.length; i++)
                (this.roomList[i].value === this.record.room_no &&
                  ((this.room_name = this.roomList[i].labelChange),
                  (this.sanitation_result.room_name = this.room_name)),
                  t.push(this.roomList[i].value));
              if (-1 === t.indexOf(this.record.room_no))
                return this.$showErrorNotify("该寝室不在该楼");
              ((this.editDialog = !1), (this.room_no = this.record.room_no), this.queryStudent());
            },
            queryStudent() {
              ((this.selectSuseDialog = !1),
                (this.sanitation_result.room_name = this.room_name),
                (this.sanitation_result.room_no = this.room_no),
                "请选择宿舍" !== this.sanitation_result.room_no &&
                  ("n" === this.sanitationType
                    ? this.$axiosAction("/api/teacher/sanitation/sanitation.api", {
                        action: "queryDormitoryPeople",
                        room_no: this.sanitation_result.room_no,
                      })
                        .then((t) => {
                          if (0 === t.data.code) {
                            this.stuList = t.data.result.list;
                            for (let i = 0; i < t.data.result.rowCount; i++)
                              (this.stuResult.push({ info_result: [], student_no: "" }),
                                (this.stuList[i].color = "grey-4"),
                                (this.stuList[i].textColor = "black"));
                          }
                        })
                        .catch((t) => {})
                    : this.$axiosAction("/api/teacher/sanitation/sanitation.api", {
                        action: "queryDormitoryPeopleUpdate",
                        sanitation_result_id: this.sanitation_result.id,
                      })
                        .then((t) => {
                          if (0 === t.data.code) {
                            this.stuList = t.data.result.list;
                            const i = [],
                              e = t.data.result.list;
                            for (let t = 0; t < this.stuList.length; t++)
                              (this.stuResult.push({ info_result: [], student_no: "" }),
                                (this.stuResult[t].info_result = e[t].info_result),
                                (this.stuResult[t].student_no = e[t].student_no),
                                "[]" !== this.stuResult[t].info_result[0] &&
                                this.stuResult[t].info_result[0] !== [] &&
                                "" !== this.stuResult[t].info_result[0] &&
                                void 0 !== this.stuResult[t].info_result[0]
                                  ? ((this.stuList[t].show_key = !0),
                                    (this.stuList[t].color = "primary"),
                                    (this.stuList[t].textColor = "white"))
                                  : ((this.stuList[t].show_key = !1),
                                    (this.stuList[t].color = "grey-4"),
                                    (this.stuList[t].textColor = "black")),
                                i.push(this.stuList[t]));
                            this.stuList = i;
                          }
                        })
                        .catch((t) => {})));
            },
            inputStudentResult(t) {
              if (0 === this.stuInfoConf.length)
                return void this.$showErrorNotify("该任务没有学生检查项目");
              const i = [];
              for (let e = 0; e < this.stuList.length; e++)
                (this.stuList[e].login_name === t.login_name &&
                  ((this.stuList[e].show_key = !t.show_key),
                  !1 === this.stuList[e].show_key &&
                    "d" !== this.sanitationType &&
                    (this.stuResult[e].info_result = []),
                  !1 === this.stuList[e].show_key
                    ? ((this.stuList[e].color = "grey-4"), (this.stuList[e].textColor = "black"))
                    : ((this.stuList[e].color = "primary"), (this.stuList[e].textColor = "white"))),
                  i.push(this.stuList[e]));
              this.stuList = i;
            },
            deleteSanitationResult() {
              const t = window.localStorage.getItem("sanitation_result_detail"),
                i = JSON.parse(t);
              this.$q
                .dialog({
                  title: "确认删除",
                  message: "该寝室结果将被删除。</span>",
                  html: !0,
                  persistent: !0,
                  cancel: { label: "取消", outline: !0, color: "grey" },
                  ok: { label: "删除", unelevated: !0, color: "negative" },
                })
                .onOk(() => {
                  this.$axiosAction("/api/teacher/sanitation/sanitation.api", {
                    action: "deleteSanitationResult",
                    id: i.id,
                  })
                    .then((t) => {
                      0 === t.data.code &&
                        this.$router.push(
                          `/teacher/sanitation/detail?id=${this.sanitation_id}&type=d`,
                        );
                    })
                    .catch((t) => {});
                });
            },
          },
        },
        u = r,
        c = e("2877"),
        d = e("4d5a"),
        h = e("e359"),
        m = e("65c6"),
        _ = e("9c40"),
        p = e("6ac5"),
        f = e("09e3"),
        g = e("9989"),
        y = e("0378"),
        b = e("f09f"),
        w = e("1c1c"),
        q = e("66e5"),
        v = e("4074"),
        x = e("0170"),
        S = e("eb85"),
        C = e("8572"),
        k = e("0016"),
        L = e("7cbe"),
        $ = e("52ee"),
        R = e("27f9"),
        I = e("a370"),
        N = e("7ff0"),
        Q = e("24e8"),
        T = e("ddd8"),
        D = e("7f67"),
        A = e("eebe"),
        O = e.n(A),
        J = Object(c["a"])(u, s, o, !1, null, null, null);
      i["default"] = J.exports;
      (O()(J, "components", {
        QLayout: d["a"],
        QHeader: h["a"],
        QToolbar: m["a"],
        QBtn: _["a"],
        QToolbarTitle: p["a"],
        QPageContainer: f["a"],
        QPage: g["a"],
        QForm: y["a"],
        QCard: b["a"],
        QList: w["a"],
        QItem: q["a"],
        QItemSection: v["a"],
        QItemLabel: x["a"],
        QSeparator: S["a"],
        QField: C["a"],
        QIcon: k["a"],
        QPopupProxy: L["a"],
        QDate: $["a"],
        QInput: R["a"],
        QCardSection: I["a"],
        QFooter: N["a"],
        QDialog: Q["a"],
        QSelect: T["a"],
      }),
        O()(J, "directives", { ClosePopup: D["a"] }));
    },
  },
]);
