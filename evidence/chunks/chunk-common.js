(window["webpackJsonp"] = window["webpackJsonp"] || []).push([
  [1],
  {
    0: function (e, t) {},
    "156a": function (e, t, i) {
      "use strict";
      var a = function () {
          var e = this,
            t = e.$createElement,
            i = e._self._c || t;
          return i(
            "q-card",
            { staticClass: "full-width", attrs: { flat: "" } },
            [
              i(
                "q-tabs",
                {
                  staticClass: "bg-white",
                  attrs: {
                    dense: "",
                    "active-color": "primary",
                    "indicator-color": "primary",
                    align: "justify",
                  },
                  model: {
                    value: e.tab,
                    callback: function (t) {
                      e.tab = t;
                    },
                    expression: "tab",
                  },
                },
                [
                  i("q-tab", { attrs: { name: "unAnswer", label: "待回答" } }),
                  i("q-tab", { attrs: { name: "answer", label: "已回答" } }),
                ],
                1,
              ),
              i(
                "q-card-section",
                {
                  directives: [
                    {
                      name: "show",
                      rawName: "v-show",
                      value: "unAnswer" == e.tab,
                      expression: "tab == 'unAnswer'",
                    },
                  ],
                },
                [
                  i(
                    "div",
                    {
                      directives: [
                        {
                          name: "show",
                          rawName: "v-show",
                          value: !e.askingList || 0 == e.askingList.length,
                          expression: "!askingList || askingList.length == 0",
                        },
                      ],
                      staticClass: "text-center text-grey",
                    },
                    [e._v("暂无待回答问题")],
                  ),
                  e._l(e.askingList, function (t, a) {
                    return i(
                      "q-item",
                      { key: t.id, staticClass: "q-pa-md row justify-center" },
                      [
                        i(
                          "q-item-section",
                          { staticStyle: { width: "100%", "max-width": "400px" } },
                          [
                            i(
                              "q-chat-message",
                              {
                                attrs: {
                                  name: t.sender_name + "(" + t.sender_no + ")",
                                  "text-color": "black",
                                  "bg-color": "white",
                                  stamp: t.create_time,
                                },
                              },
                              [e._v("\n            " + e._s(t.content) + "\n          ")],
                            ),
                            i(
                              "q-chat-message",
                              {
                                directives: [
                                  {
                                    name: "show",
                                    rawName: "v-show",
                                    value: !e.viewMode,
                                    expression: "!viewMode",
                                  },
                                ],
                                attrs: {
                                  name: "我",
                                  sent: "",
                                  "text-color": "white",
                                  "bg-color": "blue-grey-5",
                                },
                              },
                              [
                                i(
                                  "div",
                                  {
                                    directives: [
                                      {
                                        name: "show",
                                        rawName: "v-show",
                                        value: !e.viewMode,
                                        expression: "!viewMode",
                                      },
                                    ],
                                  },
                                  [
                                    i("q-input", {
                                      staticClass: "bg-white",
                                      attrs: {
                                        outlined: "",
                                        dense: "",
                                        placeholder: "请在此处填写回答内容",
                                        clearable: "",
                                        "clear-icon": "close",
                                      },
                                      scopedSlots: e._u(
                                        [
                                          {
                                            key: "after",
                                            fn: function () {
                                              return [
                                                i("q-btn", {
                                                  staticClass: "q-mr-xs",
                                                  attrs: { color: "blue-grey-5", label: "回答" },
                                                  on: {
                                                    click: function (t) {
                                                      return e.submitAnswer(a);
                                                    },
                                                  },
                                                }),
                                              ];
                                            },
                                            proxy: !0,
                                          },
                                        ],
                                        null,
                                        !0,
                                      ),
                                      model: {
                                        value: t.answer,
                                        callback: function (i) {
                                          e.$set(t, "answer", i);
                                        },
                                        expression: "item.answer",
                                      },
                                    }),
                                    i("q-checkbox", {
                                      staticClass: "q-mt-xs",
                                      attrs: {
                                        dense: "",
                                        label: "仅提问人可见（隐私保护）",
                                        "true-value": 1,
                                        "false-value": 0,
                                      },
                                      model: {
                                        value: t.secret_flag,
                                        callback: function (i) {
                                          e.$set(t, "secret_flag", i);
                                        },
                                        expression: "item.secret_flag",
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
                      1,
                    );
                  }),
                ],
                2,
              ),
              i(
                "q-card-section",
                {
                  directives: [
                    {
                      name: "show",
                      rawName: "v-show",
                      value: "answer" == e.tab,
                      expression: "tab == 'answer'",
                    },
                  ],
                },
                [
                  i(
                    "div",
                    {
                      directives: [
                        {
                          name: "show",
                          rawName: "v-show",
                          value: !e.answerList || 0 == e.answerList.length,
                          expression: "!answerList || answerList.length == 0",
                        },
                      ],
                      staticClass: "text-center text-grey",
                    },
                    [e._v("暂无已回答问题")],
                  ),
                  e._l(e.answerList, function (t) {
                    return i("q-item", { key: t.id, staticClass: "q-pa-md row justify-center" }, [
                      i(
                        "div",
                        { staticStyle: { width: "100%", "max-width": "400px" } },
                        [
                          i(
                            "q-chat-message",
                            {
                              attrs: {
                                name:
                                  t.sender_no == e.user.login_name
                                    ? "我"
                                    : t.sender_name + "(" + t.sender_no + ")",
                                sent: "T" == t.role_type,
                                "text-color": "T" == t.role_type ? "white" : "black",
                                "bg-color": "T" == t.role_type ? "brown-5" : "white",
                                stamp: t.create_time,
                              },
                            },
                            [
                              i(
                                "span",
                                {
                                  directives: [
                                    {
                                      name: "show",
                                      rawName: "v-show",
                                      value: 1 == t.secret_flag,
                                      expression: "item.secret_flag == 1",
                                    },
                                  ],
                                  staticClass: "text-grey text-caption q-mr-sm",
                                },
                                [e._v("仅提问人可见")],
                              ),
                              i("q-badge", {
                                directives: [
                                  {
                                    name: "show",
                                    rawName: "v-show",
                                    value: !e.viewMode && t.istop_time,
                                    expression: "!viewMode && item.istop_time",
                                  },
                                ],
                                staticClass: "cursor-pointer",
                                attrs: {
                                  outline: "T" != t.role_type,
                                  color: "grey",
                                  label: "取消置顶",
                                },
                                on: {
                                  click: function (i) {
                                    return e.setTop(t.id, 0);
                                  },
                                },
                              }),
                              i("q-badge", {
                                directives: [
                                  {
                                    name: "show",
                                    rawName: "v-show",
                                    value: !e.viewMode && !t.istop_time,
                                    expression: "!viewMode && !item.istop_time",
                                  },
                                ],
                                staticClass: "cursor-pointer",
                                attrs: {
                                  outline: "T" != t.role_type,
                                  color: "grey",
                                  label: "置顶",
                                },
                                on: {
                                  click: function (i) {
                                    return e.setTop(t.id, 1);
                                  },
                                },
                              }),
                              i("q-badge", {
                                directives: [
                                  {
                                    name: "show",
                                    rawName: "v-show",
                                    value: !e.viewMode && "T" == t.role_type,
                                    expression: "!viewMode && item.role_type == 'T'",
                                  },
                                ],
                                staticClass: "q-ml-sm cursor-pointer",
                                attrs: {
                                  outline: "T" != t.role_type,
                                  color: "negative",
                                  label: "删除",
                                },
                                on: {
                                  click: function (i) {
                                    return e.deleteQa(t.id, 0);
                                  },
                                },
                              }),
                              i("div", { staticClass: "q-mt-xs" }, [e._v(e._s(t.content))]),
                            ],
                            1,
                          ),
                          e._l(t.answers, function (t) {
                            return i(
                              "div",
                              { key: t.id, staticStyle: { width: "100%", "max-width": "400px" } },
                              [
                                i(
                                  "q-chat-message",
                                  {
                                    attrs: {
                                      name:
                                        t.sender_no == e.user.login_name
                                          ? "我"
                                          : t.sender_name + "(" + t.sender_no + ")",
                                      stamp: t.create_time,
                                      "text-color": "white",
                                      "bg-color": "blue-grey-5",
                                      sent: "",
                                    },
                                  },
                                  [
                                    i(
                                      "div",
                                      { staticClass: "text-right" },
                                      [
                                        i("q-badge", {
                                          directives: [
                                            {
                                              name: "show",
                                              rawName: "v-show",
                                              value: !e.viewMode && "T" == t.role_type,
                                              expression: "!viewMode && sub.role_type == 'T'",
                                            },
                                          ],
                                          staticClass: "cursor-pointer",
                                          attrs: { color: "negative", label: "删除" },
                                          on: {
                                            click: function (i) {
                                              return e.deleteQa(t.id, t.parent_id);
                                            },
                                          },
                                        }),
                                      ],
                                      1,
                                    ),
                                    i("div", { staticClass: "q-mt-xs" }, [e._v(e._s(t.content))]),
                                  ],
                                ),
                              ],
                              1,
                            );
                          }),
                        ],
                        2,
                      ),
                    ]);
                  }),
                  i(
                    "q-page-sticky",
                    { attrs: { position: "bottom-right", offset: e.fabPos } },
                    [
                      i("q-btn", {
                        directives: [
                          {
                            name: "touch-pan",
                            rawName: "v-touch-pan.prevent.mouse",
                            value: e.moveFab,
                            expression: "moveFab",
                            modifiers: { prevent: !0, mouse: !0 },
                          },
                        ],
                        attrs: { round: "", color: "primary", icon: "question_answer" },
                        on: { click: e.open },
                      }),
                    ],
                    1,
                  ),
                ],
                2,
              ),
              i(
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
                  i(
                    "q-card",
                    { staticStyle: { width: "350px" } },
                    [
                      i("q-linear-progress", { attrs: { value: 1, color: "primary" } }),
                      i(
                        "q-card-section",
                        { staticClass: "row items-center justify-between", attrs: { dense: "" } },
                        [
                          i("q-input", {
                            staticClass: "full-width",
                            attrs: {
                              outlined: "",
                              dense: "",
                              placeholder: "输入留言内容，所有学生均可见",
                              clearable: "",
                              "clear-icon": "close",
                              filled: "",
                            },
                            scopedSlots: e._u([
                              {
                                key: "prepend",
                                fn: function () {
                                  return [
                                    i("q-icon", {
                                      staticClass: "cursor-pointer",
                                      attrs: { name: "create" },
                                    }),
                                  ];
                                },
                                proxy: !0,
                              },
                              {
                                key: "after",
                                fn: function () {
                                  return [
                                    i("q-btn", {
                                      staticClass: "q-ml-md",
                                      attrs: { color: "primary", label: "留言" },
                                      on: { click: e.leaveMessage },
                                    }),
                                  ];
                                },
                                proxy: !0,
                              },
                            ]),
                            model: {
                              value: e.message,
                              callback: function (t) {
                                e.message = t;
                              },
                              expression: "message",
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
          );
        },
        s = [],
        l = i("ded3"),
        o = i.n(l),
        n = {
          name: "NeuManageQa",
          props: {
            taskMenuId: { type: String, required: !0 },
            taskId: { type: String, required: !0 },
            readonly: { type: Boolean, required: !0 },
          },
          data() {
            return {
              tMenuId: "",
              tId: "",
              fabPos: [30, 20],
              dialog: !1,
              viewMode: !0,
              askingList: [],
              answerList: [],
              message: "",
              tab: "unAnswer",
              user: window.localStorage.userinfo
                ? JSON.parse(window.localStorage.getItem("userinfo"))
                : {},
            };
          },
          mounted() {
            ((this.tMenuId = this.taskMenuId),
              (this.tId = this.taskId),
              (this.viewMode = this.readonly),
              this.loadList());
          },
          watch: {
            taskMenuId(e) {
              ((this.tMenuId = e), this.loadList());
            },
            taskId(e) {
              ((this.tId = e), this.loadList());
            },
            readonly(e) {
              this.viewMode = e;
            },
          },
          methods: {
            loadList() {
              if (!this.tMenuId || !this.tId)
                return ((this.askingList = []), void (this.answerList = []));
              (this.$axiosAction("/api/teacher/basic/qa.api", {
                action: "queryAskingList",
                task_menu_id: this.tMenuId,
                task_id: this.tId,
              })
                .then((e) => {
                  0 === e.data.code && (this.askingList = e.data.result);
                })
                .catch((e) => {
                  this.askingList = [];
                }),
                this.$axiosAction("/api/teacher/basic/qa.api", {
                  action: "queryAnswerList",
                  task_menu_id: this.tMenuId,
                  task_id: this.tId,
                })
                  .then((e) => {
                    0 === e.data.code && (this.answerList = e.data.result);
                  })
                  .catch((e) => {
                    this.answerList = [];
                  }));
            },
            submitAnswer(e) {
              const t = o()({}, this.askingList[e]);
              t.answer
                ? (this.$q.loading.show(),
                  this.$axiosAction("/api/teacher/basic/qa.api", o()({ action: "answerQa" }, t))
                    .then((e) => {
                      (this.loadList(), this.$q.loading.hide());
                    })
                    .catch((e) => {
                      this.$q.loading.hide();
                    }))
                : this.$showErrorNotify("请填写回答内容");
            },
            leaveMessage() {
              this.tMenuId && this.tId
                ? this.message
                  ? (this.$q.loading.show(),
                    this.$axiosAction("/api/teacher/basic/qa.api", {
                      action: "leaveMessage",
                      task_menu_id: this.tMenuId,
                      task_id: this.tId,
                      message: this.message,
                    })
                      .then((e) => {
                        (0 === e.data.code && this.loadList(),
                          this.$q.loading.hide(),
                          (this.dialog = !1),
                          (this.message = ""));
                      })
                      .catch((e) => {
                        this.$q.loading.hide();
                      }))
                  : this.$showErrorNotify("请填写留言内容")
                : this.$showErrorNotify("参数设置有误");
            },
            setTop(e, t) {
              (this.$q.loading.show(),
                this.$axiosAction("/api/teacher/basic/qa.api", {
                  action: t ? "setTop" : "cancelTop",
                  task_menu_id: this.tMenuId,
                  task_id: this.tId,
                  id: e,
                })
                  .then((e) => {
                    (0 === e.data.code && this.loadList(), this.$q.loading.hide());
                  })
                  .catch((e) => {
                    this.$q.loading.hide();
                  }));
            },
            deleteQa(e, t) {
              (this.$q.loading.show(),
                this.$axiosAction("/api/teacher/basic/qa.api", {
                  action: "deleteQa",
                  task_menu_id: this.tMenuId,
                  task_id: this.tId,
                  id: e,
                  parent_id: t,
                })
                  .then((e) => {
                    (0 === e.data.code && this.loadList(), this.$q.loading.hide());
                  })
                  .catch((e) => {
                    this.$q.loading.hide();
                  }));
            },
            moveFab(e) {
              ((this.draggingFab = !0 !== e.isFirst && !0 !== e.isFinal),
                (this.fabPos = [this.fabPos[0] - e.delta.x, this.fabPos[1] - e.delta.y]));
            },
            open() {
              this.dialog = !0;
            },
          },
        },
        r = n,
        c = i("2877"),
        u = i("f09f"),
        d = i("429b"),
        m = i("7460"),
        f = i("a370"),
        p = i("66e5"),
        h = i("4074"),
        y = i("8169"),
        g = i("27f9"),
        b = i("9c40"),
        v = i("8f8e"),
        _ = i("58a81"),
        T = i("de5e"),
        x = i("24e8"),
        w = i("6b1d"),
        k = i("0016"),
        q = i("75c3"),
        C = i("eebe"),
        L = i.n(C),
        V = Object(c["a"])(r, a, s, !1, null, null, null);
      t["a"] = V.exports;
      (L()(V, "components", {
        QCard: u["a"],
        QTabs: d["a"],
        QTab: m["a"],
        QCardSection: f["a"],
        QItem: p["a"],
        QItemSection: h["a"],
        QChatMessage: y["a"],
        QInput: g["a"],
        QBtn: b["a"],
        QCheckbox: v["a"],
        QBadge: _["a"],
        QPageSticky: T["a"],
        QDialog: x["a"],
        QLinearProgress: w["a"],
        QIcon: k["a"],
      }),
        L()(V, "directives", { TouchPan: q["a"] }));
    },
    2: function (e, t) {},
    3: function (e, t) {},
    "33be": function (e, t, i) {
      "use strict";
      var a = function () {
          var e = this,
            t = e.$createElement,
            i = e._self._c || t;
          return i(
            "q-dialog",
            {
              attrs: { maximized: "" },
              model: {
                value: e.showBigPic,
                callback: function (t) {
                  e.showBigPic = t;
                },
                expression: "showBigPic",
              },
            },
            [
              i(
                "div",
                { staticStyle: { "background-color": "black" } },
                [
                  i(
                    "div",
                    { ref: "bigPicPanel" },
                    [i("q-img", { attrs: { src: e.serverUrl + e.bigPicUrl } })],
                    1,
                  ),
                  i(
                    "q-page-sticky",
                    { attrs: { position: "bottom-right", offset: [18, 18] } },
                    [
                      i(
                        "q-fab",
                        {
                          attrs: {
                            icon: "keyboard_arrow_left",
                            direction: "left",
                            color: "secondary",
                          },
                        },
                        [
                          i("q-fab-action", {
                            directives: [{ name: "close-popup", rawName: "v-close-popup" }],
                            attrs: { icon: "close", color: "accent" },
                          }),
                          i("q-fab-action", {
                            attrs: { icon: "get_app", color: "primary" },
                            on: { click: e.downloadPicture },
                          }),
                          i(
                            "div",
                            { ref: "plusPic" },
                            [
                              i("q-fab-action", {
                                attrs: { icon: "mdi-magnify-plus", color: "amber" },
                              }),
                            ],
                            1,
                          ),
                          i(
                            "div",
                            { ref: "minusPic" },
                            [
                              i("q-fab-action", {
                                attrs: { icon: "mdi-magnify-minus", color: "amber" },
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
          );
        },
        s = [],
        l = i("ad56"),
        o = i("c8b5"),
        n = i.n(o);
      function r(e, t, i) {
        var a = (function () {
            return (
              window[n.a.prefixed(window, "requestAnimationFrame")] ||
              function (e) {
                window.setTimeout(e, 1e3 / 60);
              }
            );
          })(),
          s = !1,
          l = 1,
          o = "",
          r = x(0, 0),
          c = x(0, 0),
          u = x(0, 0),
          d = x(e.offsetWidth / 2, e.offsetHeight / 2),
          m = x(e.offsetWidth / 2, e.offsetHeight / 2);
        if ((v(), t)) {
          var f = new n.a(t);
          f.on("tap", () => {
            y({ center: x(0, 0) });
          });
        }
        if (i) {
          var p = new n.a(i);
          p.on("tap", () => {
            y({ center: x(0, 0) });
          });
        }
        var h = new n.a(e);
        function y(t) {
          if (
            ((o = ""),
            (c = x(r.x, r.y)),
            (d = x(m.x + c.x, m.y + c.y)),
            (u = x(t.center.x - d.x, t.center.y - d.y)),
            l > 1)
          )
            ((l = 1), (r = x(0, 0)));
          else {
            l = 2;
            let t = Number((1 - l) * u.x + c.x),
              i = Number((1 - l) * u.y + c.y),
              a = e.getBoundingClientRect().width / 2 - e.offsetWidth / 2,
              s = e.getBoundingClientRect().height / 2 - e.offsetHeight / 2;
            (Math.abs(t) > Math.abs(a) && (t = _(t, a)),
              Math.abs(i) > Math.abs(s) && (i = _(i, s)),
              (r = x(t, i)));
          }
          g();
        }
        function g() {
          s || (a(b), (s = !0));
        }
        function b() {
          ((e.style.transition = o),
            (e.style.transform =
              "translate(" + r.x + "px," + r.y + "px) scale(" + l + "," + l + ")"),
            (e.style.WebkitTransform =
              "translate(" + r.x + "px," + r.y + "px) scale(" + l + "," + l + ")"),
            (e.style.msTransform =
              "translate(" + r.x + "px," + r.y + "px) scale(" + l + "," + l + ")"),
            v(),
            (s = !1));
        }
        function v() {
          (t && (t.style.display = 1 === l ? "inline" : "none"),
            i && (i.style.display = 1 === l ? "none" : "inline"));
        }
        function _(e, t) {
          let i = T(e),
            a = T(t),
            s = 0;
          return ((s = Number(!i && a ? "-" + t : t)), s);
        }
        function T(e) {
          var t = new RegExp("^-?[0-9]*.?[0-9]*$");
          if (t.test(e)) {
            var i = Math.abs(e);
            return e === i;
          }
        }
        function x(e, t) {
          return { x: e, y: t };
        }
        (h.on("doubletap", (e) => {
          y(e);
        }),
          h.on("panstart", (e) => {
            c = x(r.x, r.y);
          }),
          h.on("panmove", (t) => {
            o = "1.6";
            let i = Number(c.x + t.deltaX),
              a = Number(c.y + t.deltaY),
              s = e.getBoundingClientRect().width / 2 - e.offsetWidth / 2,
              l = e.getBoundingClientRect().height / 2 - e.offsetHeight / 2;
            (Math.abs(i) > Math.abs(s) && (i = _(i, s)),
              Math.abs(a) > Math.abs(l) && (a = _(a, l)),
              (r = x(i, a)),
              g());
          }),
          h.on("pinchstart", (e) => {
            ((o = ""),
              (c = x(r.x, r.y)),
              (d = x(m.x + c.x, m.y + c.y)),
              (u = x(e.center.x - d.x, e.center.y - d.y)));
          }),
          h.on("pinchmove", (t) => {
            let i = l * t.scale;
            (i < 1 ? (i = 1) : i > 3 && (i = 3), (l = i));
            let a = Number((1 - l) * u.x + c.x),
              s = Number((1 - l) * u.y + c.y),
              o = e.getBoundingClientRect().width / 2 - e.offsetWidth / 2,
              n = e.getBoundingClientRect().height / 2 - e.offsetHeight / 2;
            (Math.abs(a) > Math.abs(o) && (a = _(a, o)),
              Math.abs(s) > Math.abs(n) && (s = _(s, n)),
              (r = x(a, s)),
              g());
          }));
      }
      var c = {
          name: "NeuFullScreenImage",
          props: {
            value: null,
            url: { type: String, required: !1 },
            name: { type: String, required: !1 },
          },
          data() {
            return {
              serverUrl: window.localStorage.server,
              showBigPic: !1,
              bigPicUrl: "",
              bigPicName: "",
            };
          },
          mounted() {
            ((this.bigPicUrl = this.url), (this.bigPicName = this.name));
          },
          computed: {},
          watch: {
            value(e) {
              ((this.showBigPic = e),
                this.showBigPic &&
                  this.$nextTick(() => {
                    r(this.$refs.bigPicPanel, this.$refs.plusPic, this.$refs.minusPic);
                  }));
            },
            url(e) {
              this.bigPicUrl = e;
            },
            name(e) {
              this.bigPicName = e;
            },
            showBigPic(e) {
              this.$emit("input", e);
            },
          },
          methods: {
            downloadPicture() {
              Object(l["c"])(this.bigPicUrl, this.bigPicName);
            },
          },
        },
        u = c,
        d = i("2877"),
        m = i("24e8"),
        f = i("068f"),
        p = i("de5e"),
        h = i("c294"),
        y = i("72db"),
        g = i("7f67"),
        b = i("eebe"),
        v = i.n(b),
        _ = Object(d["a"])(u, a, s, !1, null, null, null);
      t["a"] = _.exports;
      (v()(_, "components", {
        QDialog: m["a"],
        QImg: f["a"],
        QPageSticky: p["a"],
        QFab: h["a"],
        QFabAction: y["a"],
      }),
        v()(_, "directives", { ClosePopup: g["a"] }));
    },
    "3fc4": function (e, t, i) {
      "use strict";
      i("ce02");
    },
    "46f3": function (e, t, i) {
      "use strict";
      var a = function () {
          var e = this,
            t = e.$createElement,
            i = e._self._c || t;
          return i("baidu-map", {
            staticStyle: { display: "none" },
            attrs: { zoom: 15, "scroll-wheel-zoom": !0, ak: e.$appConf.bMapAk },
            on: { ready: e.mapReady },
          });
        },
        s = [],
        l = i("df2b"),
        o = {
          name: "NeuGeoLocation",
          components: { BaiduMap: l["a"] },
          props: { needAddr: Boolean, nonauto: Boolean, location: null },
          data() {
            return { map: null };
          },
          watch: {
            location(e) {
              this.locationAvailable(() => {
                this.getCurrentPoint();
              });
            },
          },
          methods: {
            mapReady({ BMap: e }) {
              ((this.map = e),
                this.nonauto ||
                  this.locationAvailable(() => {
                    this.getCurrentPoint();
                  }));
            },
            getCurrentPoint() {
              try {
                navigator.geolocation.getCurrentPosition(
                  (e) => {
                    let t = [],
                      i = new this.map.Point(e.coords.longitude, e.coords.latitude);
                    t.push(i);
                    let a = new this.map.Convertor();
                    a.translate(t, 1, 5, (e) => {
                      0 === e.status
                        ? this.completeLocation(e.points[0].lng, e.points[0].lat)
                        : this.getCurrentPointUsingBaiduSdk();
                    });
                  },
                  () => {
                    this.getCurrentPointUsingBaiduSdk();
                  },
                  { timeout: 3e3 },
                );
              } catch (e) {
                this.getCurrentPointUsingBaiduSdk();
              }
            },
            getCurrentPointUsingBaiduSdk() {
              try {
                JPush.isPlatformIOS()
                  ? this.getCurrentPointUsingBaiduMap()
                  : baidumap_location
                    ? baidumap_location.getCurrentPosition(
                        (e) => {
                          5e-324 === e.longitude
                            ? this.getCurrentPointUsingBaiduMap()
                            : this.completeLocation(e.lontitude, e.latitude);
                        },
                        () => {
                          this.getCurrentPointUsingBaiduMap();
                        },
                        { timeout: 3e3 },
                      )
                    : this.getCurrentPointUsingBaiduMap();
              } catch (e) {
                this.getCurrentPointUsingBaiduMap();
              }
            },
            getCurrentPointUsingBaiduMap() {
              try {
                const e = new this.map.Geolocation();
                (e.enableSDKLocation(),
                  e.getCurrentPosition(
                    (e) => {
                      e
                        ? this.completeLocation(e.point.lng, e.point.lat)
                        : this.$emit("error", { code: 2001, message: "定位处理超时" });
                    },
                    { timeout: 3e3, maximumAge: 0, enableHighAccuracy: !0 },
                  ));
              } catch (e) {
                this.$emit("error", { code: 2001, message: "定位处理超时" });
              }
            },
            completeLocation(e, t) {
              const i = new this.map.Point(e, t);
              this.needAddr ? this.searchAddress(i) : this.$emit("completed", { point: i });
            },
            searchAddress(e) {
              const t = new this.map.Geocoder();
              t.getLocation(e, (t) => {
                let i = {},
                  a = null;
                (t &&
                  ((a =
                    t.surroundingPois.length > 0
                      ? t.surroundingPois[0].address + t.surroundingPois[0].title
                      : t.address),
                  (i = t.addressComponents)),
                  this.$emit("completed", { point: e, address: a, addressComponents: i }));
              });
            },
            getDistance(e, t, i, a) {
              var s = (e * Math.PI) / 180,
                l = (i * Math.PI) / 180,
                o = s - l,
                n = (t * Math.PI) / 180 - (a * Math.PI) / 180,
                r =
                  2 *
                  Math.asin(
                    Math.sqrt(
                      Math.pow(Math.sin(o / 2), 2) +
                        Math.cos(s) * Math.cos(l) * Math.pow(Math.sin(n / 2), 2),
                    ),
                  );
              return ((r *= 6378.137), (r = Math.round(1e4 * r) / 1e4), r);
            },
            locationAvailable(e) {
              cordova.plugins.diagnostic.isLocationAuthorized(
                (t) => {
                  t ? this.isLocationEnabled(e) : this.getLocationAuthorizationStatus();
                },
                () => {
                  this.$emit("error", { code: 1001, message: "定位权限获取失败" });
                },
              );
            },
            isLocationEnabled(e) {
              cordova.plugins.diagnostic.isLocationEnabled(
                (t) => {
                  t
                    ? e()
                    : this.$q
                        .dialog({
                          icon: "warning",
                          dark: !0,
                          message: "需要开启GPS定位",
                          cancel: !0,
                          persistent: !0,
                          ok: "立即开启",
                        })
                        .onOk(() => {
                          cordova.plugins.diagnostic.switchToLocationSettings();
                        });
                },
                () => {
                  this.$emit("error", { code: 1002, message: "GPS状态获取失败" });
                },
              );
            },
            getLocationAuthorizationStatus() {
              cordova.plugins.diagnostic.getLocationAuthorizationStatus(
                (e) => {
                  switch (e) {
                    case cordova.plugins.diagnostic.permissionStatus.NOT_REQUESTED:
                      break;
                    case cordova.plugins.diagnostic.permissionStatus.DENIED_ALWAYS:
                      break;
                    case cordova.plugins.diagnostic.permissionStatus.GRANTED:
                      break;
                    case cordova.plugins.diagnostic.permissionStatus.GRANTED_WHEN_IN_USE:
                      break;
                    case cordova.plugins.diagnostic.permissionStatus.DENIED_ONCE:
                      break;
                  }
                  e !== cordova.plugins.diagnostic.permissionStatus.DENIED_ALWAYS
                    ? cordova.plugins.diagnostic.requestLocationAuthorization(
                        (e) => {
                          this.isLocationEnabled();
                        },
                        () => {
                          this.$emit("error", {
                            code: 1005,
                            message: "用户位置授权失败，请手动设置应用权限",
                          });
                        },
                        cordova.plugins.diagnostic.locationAuthorizationMode.WHEN_IN_USE,
                      )
                    : cordova.plugins.diagnostic.switchToSettings(
                        () => {
                          this.isLocationEnabled();
                        },
                        () => {
                          this.$emit("error", {
                            code: 1003,
                            message: "权限设置页面跳转失败，请手动设置应用权限",
                          });
                        },
                      );
                },
                () => {
                  this.$emit("error", { code: 1004, message: "位置授权状态获取失败" });
                },
              );
            },
          },
        },
        n = o,
        r = i("2877"),
        c = Object(r["a"])(n, a, s, !1, null, null, null);
      t["a"] = c.exports;
    },
    "4aac": function (e, t, i) {
      "use strict";
      var a = function () {
          var e = this,
            t = e.$createElement,
            i = e._self._c || t;
          return i(
            "q-list",
            { attrs: { separator: "" } },
            [
              e._l(e.teamData, function (t) {
                return i(
                  "q-item",
                  { key: t.target_level + t.target_no + t.grade_no },
                  [
                    i(
                      "q-item-section",
                      [
                        i("q-item-label", [
                          e._v(e._s(t.target_name)),
                          "class" != t.target_level
                            ? i("span", [e._v(" - " + e._s(t.grade_name))])
                            : e._e(),
                        ]),
                        i("q-item-label", { attrs: { caption: "" } }, [
                          i(
                            "span",
                            {
                              directives: [
                                {
                                  name: "show",
                                  rawName: "v-show",
                                  value: t.school_roll_status_name,
                                  expression: "item.school_roll_status_name",
                                },
                              ],
                            },
                            [e._v(e._s(t.school_roll_status_name))],
                          ),
                          i(
                            "span",
                            {
                              directives: [
                                {
                                  name: "show",
                                  rawName: "v-show",
                                  value: t.education_level_name,
                                  expression: "item.education_level_name",
                                },
                              ],
                            },
                            [e._v(" " + e._s(t.education_level_name))],
                          ),
                        ]),
                      ],
                      1,
                    ),
                  ],
                  1,
                );
              }),
              e._l(e.userData, function (t) {
                return i(
                  "q-item",
                  { key: t.target_level + t.target_no },
                  [
                    i(
                      "q-item-section",
                      [
                        i("q-item-label", [e._v(e._s(t.target_name))]),
                        i("q-item-label", { attrs: { caption: "" } }, [e._v(e._s(t.target_no))]),
                      ],
                      1,
                    ),
                  ],
                  1,
                );
              }),
              e._l(e.groupData, function (t) {
                return i(
                  "q-item",
                  { key: t.target_level + t.target_no },
                  [i("q-item-section", [i("q-item-label", [e._v(e._s(t.target_name))])], 1)],
                  1,
                );
              }),
              i(
                "q-item",
                {
                  directives: [
                    { name: "show", rawName: "v-show", value: e.hideFlag, expression: "hideFlag" },
                  ],
                },
                [
                  i(
                    "q-item-section",
                    {
                      on: {
                        click: function (t) {
                          e.hideFlag = !1;
                        },
                      },
                    },
                    [
                      e._v("共" + e._s(e.assignedData.length) + "个对象，"),
                      i("span", { staticClass: "text-primary" }, [e._v("点击")]),
                      e._v("显示全部。"),
                    ],
                  ),
                ],
                1,
              ),
            ],
            2,
          );
        },
        s = [];
      (i("c975"), i("13d5"));
      const l = ["all", "dep", "major", "class"],
        o = 20;
      var n = {
          name: "NeuViewAssignedStudent",
          props: { value: null },
          data() {
            return { assignedData: [], hideFlag: !0 };
          },
          mounted() {
            ((this.assignedData = this.value || []),
              (this.hideFlag = this.assignedData.length > o));
          },
          watch: {
            value(e) {
              ((this.assignedData = e || []), (this.hideFlag = this.assignedData.length > o));
            },
          },
          computed: {
            userData() {
              return this.hideFlag
                ? []
                : this.assignedData.reduce(
                    (e, t) => ("user" === t.target_level ? e.concat(t) : e),
                    [],
                  );
            },
            teamData() {
              return this.hideFlag
                ? []
                : this.assignedData.reduce(
                    (e, t) => (l.indexOf(t.target_level) >= 0 ? e.concat(t) : e),
                    [],
                  );
            },
            groupData() {
              return this.hideFlag
                ? []
                : this.assignedData.reduce(
                    (e, t) => ("group" === t.target_level ? e.concat(t) : e),
                    [],
                  );
            },
          },
          methods: {},
        },
        r = n,
        c = i("2877"),
        u = i("1c1c"),
        d = i("66e5"),
        m = i("4074"),
        f = i("0170"),
        p = i("eebe"),
        h = i.n(p),
        y = Object(c["a"])(r, a, s, !1, null, null, null);
      t["a"] = y.exports;
      h()(y, "components", {
        QList: u["a"],
        QItem: d["a"],
        QItemSection: m["a"],
        QItemLabel: f["a"],
      });
    },
    5333: function (e, t, i) {
      "use strict";
      var a = function () {
          var e = this,
            t = e.$createElement,
            i = e._self._c || t;
          return i(
            "q-list",
            { attrs: { separator: "" } },
            [
              e._l(e.teamData, function (t) {
                return i(
                  "q-item",
                  { key: t.target_level + t.target_no },
                  [i("q-item-section", [e._v(e._s(t.target_name))])],
                  1,
                );
              }),
              e._l(e.roleData, function (t) {
                return i(
                  "q-item",
                  { key: t.target_level + t.target_no },
                  [i("q-item-section", [e._v(e._s(t.target_name))])],
                  1,
                );
              }),
              e._l(e.userData, function (t) {
                return i(
                  "q-item",
                  { key: t.target_level + t.target_no },
                  [
                    i(
                      "q-item-section",
                      [
                        i("q-item-label", [e._v(e._s(t.target_name))]),
                        i("q-item-label", { attrs: { caption: "" } }, [e._v(e._s(t.target_no))]),
                      ],
                      1,
                    ),
                  ],
                  1,
                );
              }),
              i(
                "q-item",
                {
                  directives: [
                    { name: "show", rawName: "v-show", value: e.hideFlag, expression: "hideFlag" },
                  ],
                },
                [
                  i(
                    "q-item-section",
                    {
                      on: {
                        click: function (t) {
                          e.hideFlag = !1;
                        },
                      },
                    },
                    [
                      e._v("共" + e._s(e.assignedData.length) + "个对象，"),
                      i("span", { staticClass: "text-primary" }, [e._v("点击")]),
                      e._v("显示全部。"),
                    ],
                  ),
                ],
                1,
              ),
            ],
            2,
          );
        },
        s = [];
      (i("c975"), i("13d5"));
      const l = ["all", "dep"],
        o = 20;
      var n = {
          name: "NeuViewAssignedTeacher",
          props: { value: null },
          data() {
            return { assignedData: [], hideFlag: !0 };
          },
          mounted() {
            ((this.assignedData = this.value || []),
              (this.hideFlag = this.assignedData.length > o));
          },
          watch: {
            value(e) {
              ((this.assignedData = e || []), (this.hideFlag = this.assignedData.length > o));
            },
          },
          computed: {
            userData() {
              return this.hideFlag
                ? []
                : this.assignedData.reduce(
                    (e, t) => ("user" === t.target_level ? e.concat(t) : e),
                    [],
                  );
            },
            roleData() {
              return this.hideFlag
                ? []
                : this.assignedData.reduce(
                    (e, t) => ("role" === t.target_level ? e.concat(t) : e),
                    [],
                  );
            },
            teamData() {
              return this.hideFlag
                ? []
                : this.assignedData.reduce(
                    (e, t) => (l.indexOf(t.target_level) >= 0 ? e.concat(t) : e),
                    [],
                  );
            },
          },
          methods: {},
        },
        r = n,
        c = i("2877"),
        u = i("1c1c"),
        d = i("66e5"),
        m = i("4074"),
        f = i("0170"),
        p = i("eebe"),
        h = i.n(p),
        y = Object(c["a"])(r, a, s, !1, null, null, null);
      t["a"] = y.exports;
      h()(y, "components", {
        QList: u["a"],
        QItem: d["a"],
        QItemSection: m["a"],
        QItemLabel: f["a"],
      });
    },
    "58a84": function (e, t, i) {
      "use strict";
      (i.d(t, "c", function () {
        return a;
      }),
        i.d(t, "b", function () {
          return s;
        }),
        i.d(t, "a", function () {
          return l;
        }));
      (i("c975"), i("13d5"), i("4e82"), i("5319"), i("ddb0"));
      function a(e, t) {
        if ("R" === e.type && "S" !== e.selectPattern && e.isOther)
          return t ? t.value + (t.other ? ":" + t.other : "") : "";
        if ("C" === e.type) {
          const i = [];
          for (const a of t ? (e.isOther ? t.value : t) : [])
            i.push(a + (e.isOther && "其他" === a && t.other ? ":" + t.other : ""));
          return (i.sort(), i.toString());
        }
        if ("S" === e.type) return t ? "已签名" : "未签名";
        if ("A" === e.type) return t && t.value ? t.value : "";
        if ("F" === e.type) {
          const e = (t || []).reduce((e, t) => e.concat(t.srcname), []);
          return e.join("\r\n");
        }
        return t;
      }
      function s(e, t, i) {
        return ("R" === e.type && "S" !== e.selectPattern && e.isOther) ||
          "C" === e.type ||
          "A" === e.type ||
          "F" === e.type
          ? a(e, t) === a(e, i)
          : t === i;
      }
      function l(e, t) {
        if (
          e.riskMode &&
          "R" === e.type &&
          (e.riskConfig || []).findIndex(
            (i) => i === ("S" !== e.selectPattern && e.isOther ? t.value : t),
          ) > -1
        )
          return !0;
        if (
          e.riskMode &&
          "A" === e.type &&
          e.riskConfig &&
          t &&
          e.riskConfig
            .replace(/(\r\n)/g, /\n/)
            .split(/\n/)
            .findIndex((e) => t.value.indexOf(e) > -1) > -1
        )
          return !0;
        if (
          e.riskMode &&
          "T" === e.type &&
          e.riskConfig &&
          t &&
          e.riskConfig
            .replace(/(\r\n)/g, /\n/)
            .split(/\n/)
            .findIndex((e) => t.indexOf(e) > -1) > -1
        )
          return !0;
        if (e.riskMode && "C" === e.type) {
          const i = [];
          for (const a of t ? (e.isOther ? t.value : t) : []) i.push(a);
          return i.findIndex((t) => (e.riskConfig || []).findIndex((e) => e === t) > -1) > -1;
        }
        return (
          !(
            !e.riskMode ||
            "N" !== e.type ||
            !e.riskConfig ||
            null === t ||
            "" === t ||
            void 0 === t
          ) &&
          !(null !== e.riskConfig.max && "" !== e.riskConfig.max && t > e.riskConfig.max) &&
          !(null !== e.riskConfig.min && "" !== e.riskConfig.min && t < e.riskConfig.min)
        );
      }
    },
    7590: function (e, t, i) {
      "use strict";
      var a = function () {
          var e = this,
            t = e.$createElement,
            i = e._self._c || t;
          return i(
            "q-card",
            { staticClass: "full-width bg-grey-3", attrs: { flat: "" } },
            [
              i("div", { staticClass: "text-weight-bold" }, [e._v("我的问题")]),
              i(
                "div",
                {
                  directives: [
                    {
                      name: "show",
                      rawName: "v-show",
                      value: !e.messageList || 0 == e.messageList.length,
                      expression: "!messageList || messageList.length == 0",
                    },
                  ],
                  staticClass: "text-center text-grey",
                },
                [e._v("暂无数据")],
              ),
              e._l(e.messageList, function (t, a) {
                return i(
                  "div",
                  { key: a, staticClass: "q-pa-md row justify-center" },
                  [
                    i(
                      "div",
                      { staticStyle: { width: "100%", "max-width": "400px" } },
                      [
                        i("q-chat-message", {
                          attrs: {
                            name:
                              (t.login_name == e.user.login_name ? "我" : t.name) +
                              (null != t.istop_time ? "(置顶)" : ""),
                            text: [t.content],
                            sent: "T" != t.role_type,
                            "text-color": (t.role_type, "white"),
                            "bg-color": "T" != t.role_type ? "blue-grey-5" : "brown-5",
                            stamp:
                              1 == t.secret_flag ? t.create_time + "(仅自己可见)" : t.create_time,
                          },
                        }),
                      ],
                      1,
                    ),
                    e._l(t.answer, function (e) {
                      return i(
                        "div",
                        { key: e.id, staticStyle: { width: "100%", "max-width": "400px" } },
                        [
                          i("q-chat-message", {
                            attrs: {
                              name: e.name,
                              text: [e.content],
                              stamp: e.create_time,
                              "text-color": "black",
                              "bg-color": "white",
                            },
                          }),
                        ],
                        1,
                      );
                    }),
                  ],
                  2,
                );
              }),
              i(
                "q-page-sticky",
                { attrs: { position: "bottom-right", offset: e.fabPos } },
                [
                  i("q-btn", {
                    directives: [
                      {
                        name: "touch-pan",
                        rawName: "v-touch-pan.prevent.mouse",
                        value: e.moveFab,
                        expression: "moveFab",
                        modifiers: { prevent: !0, mouse: !0 },
                      },
                    ],
                    attrs: { round: "", color: "primary", icon: "create" },
                    on: { click: e.open },
                  }),
                ],
                1,
              ),
              i(
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
                  i(
                    "q-card",
                    { staticStyle: { width: "350px" } },
                    [
                      i("q-linear-progress", { attrs: { value: 1, color: "primary" } }),
                      i(
                        "q-card-section",
                        { staticClass: "row items-center justify-between", attrs: { dense: "" } },
                        [
                          i("q-input", {
                            attrs: {
                              outlined: "",
                              dense: "",
                              placeholder: "在此输入你的问题。",
                              clearable: "",
                              "clear-icon": "close",
                              filled: "",
                            },
                            scopedSlots: e._u([
                              {
                                key: "prepend",
                                fn: function () {
                                  return [
                                    i("q-icon", {
                                      staticClass: "cursor-pointer",
                                      attrs: { name: "create" },
                                    }),
                                  ];
                                },
                                proxy: !0,
                              },
                              {
                                key: "after",
                                fn: function () {
                                  return [
                                    i("q-btn", {
                                      staticClass: "q-ml-md",
                                      attrs: { color: "primary", label: "提交" },
                                      on: {
                                        click: function (t) {
                                          return e.updateQuestion();
                                        },
                                      },
                                    }),
                                  ];
                                },
                                proxy: !0,
                              },
                            ]),
                            model: {
                              value: e.contact,
                              callback: function (t) {
                                e.contact = t;
                              },
                              expression: "contact",
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
            2,
          );
        },
        s = [],
        l = {
          name: "NeuQaList",
          props: { taskMenuId: String, taskId: String },
          data() {
            return {
              messageList: [],
              contact: null,
              fabPos: [30, 40],
              dialog: !1,
              user: window.localStorage.userinfo
                ? JSON.parse(window.localStorage.getItem("userinfo"))
                : {},
            };
          },
          mounted() {
            this.getQuestion();
          },
          methods: {
            getQuestion() {
              this.$axiosAction("/api/student/basic/qa.api", {
                action: "getQaQuestionList",
                task_menu_id: this.taskMenuId,
                task_id: this.taskId,
              }).then((e) => {
                this.messageList = e.data.result;
              });
            },
            updateQuestion() {
              if (null == this.contact || "" === this.contact)
                return this.$showErrorNotify("问题不能为空");
              this.$axiosAction("/api/student/basic/qa.api", {
                action: "AddQaQuestion",
                task_menu_id: this.taskMenuId,
                task_id: this.taskId,
                role_type: "S",
                login_name: this.user.login_name,
                content: this.contact,
              }).then((e) => {
                (this.getQuestion(), (this.contact = null), (this.dialog = !1));
              });
            },
            moveFab(e) {
              ((this.draggingFab = !0 !== e.isFirst && !0 !== e.isFinal),
                (this.fabPos = [this.fabPos[0] - e.delta.x, this.fabPos[1] - e.delta.y]));
            },
            open() {
              this.dialog = !0;
            },
          },
        },
        o = l,
        n = i("2877"),
        r = i("f09f"),
        c = i("8169"),
        u = i("de5e"),
        d = i("9c40"),
        m = i("24e8"),
        f = i("6b1d"),
        p = i("a370"),
        h = i("27f9"),
        y = i("0016"),
        g = i("75c3"),
        b = i("eebe"),
        v = i.n(b),
        _ = Object(n["a"])(o, a, s, !1, null, null, null);
      t["a"] = _.exports;
      (v()(_, "components", {
        QCard: r["a"],
        QChatMessage: c["a"],
        QPageSticky: u["a"],
        QBtn: d["a"],
        QDialog: m["a"],
        QLinearProgress: f["a"],
        QCardSection: p["a"],
        QInput: h["a"],
        QIcon: y["a"],
      }),
        v()(_, "directives", { TouchPan: g["a"] }));
    },
    "8bef": function (e, t, i) {
      "use strict";
      var a = function () {
          var e = this,
            t = e.$createElement,
            i = e._self._c || t;
          return i(
            "q-form",
            { staticClass: "full-width", on: { submit: e.submit } },
            [
              i(
                "q-list",
                { attrs: { separator: "" } },
                [
                  i(
                    "q-item",
                    [
                      i(
                        "q-item-section",
                        { attrs: { avatar: "" } },
                        [
                          i("q-item-label", { staticClass: "neu-css-before-red-asterisk" }, [
                            e._v("标题"),
                          ]),
                        ],
                        1,
                      ),
                      i(
                        "q-item-section",
                        [
                          i("q-input", {
                            attrs: {
                              outlined: "",
                              dense: "",
                              "hide-bottom-space": "",
                              "lazy-rules": "",
                              rules: [
                                function (t) {
                                  return e.checkLabel(t);
                                },
                              ],
                            },
                            model: {
                              value: e.modelValue.label,
                              callback: function (t) {
                                e.$set(e.modelValue, "label", t);
                              },
                              expression: "modelValue.label",
                            },
                          }),
                        ],
                        1,
                      ),
                    ],
                    1,
                  ),
                  i(
                    "q-item",
                    [
                      i(
                        "q-item-section",
                        { attrs: { avatar: "" } },
                        [i("q-item-label", [e._v("说明文字")])],
                        1,
                      ),
                      i(
                        "q-item-section",
                        [
                          i("q-input", {
                            attrs: { outlined: "", dense: "" },
                            model: {
                              value: e.modelValue.hint,
                              callback: function (t) {
                                e.$set(e.modelValue, "hint", t);
                              },
                              expression: "modelValue.hint",
                            },
                          }),
                        ],
                        1,
                      ),
                    ],
                    1,
                  ),
                  i(
                    "q-item",
                    [
                      i(
                        "q-item-section",
                        { attrs: { avatar: "" } },
                        [
                          i("q-item-label", { staticClass: "neu-css-before-red-asterisk" }, [
                            e._v("是否必须"),
                          ]),
                        ],
                        1,
                      ),
                      i("q-item-section"),
                      i(
                        "q-item-section",
                        { attrs: { side: "" } },
                        [
                          i("q-toggle", {
                            attrs: { "checked-icon": "check", "unchecked-icon": "clear" },
                            model: {
                              value: e.modelValue.required,
                              callback: function (t) {
                                e.$set(e.modelValue, "required", t);
                              },
                              expression: "modelValue.required",
                            },
                          }),
                        ],
                        1,
                      ),
                    ],
                    1,
                  ),
                  i(
                    "q-item",
                    [
                      i(
                        "q-item-section",
                        { attrs: { avatar: "" } },
                        [
                          i("q-item-label", { staticClass: "neu-css-before-red-asterisk" }, [
                            e._v("类型"),
                          ]),
                        ],
                        1,
                      ),
                      i(
                        "q-item-section",
                        [
                          i("q-select", {
                            attrs: {
                              outlined: "",
                              dense: "",
                              options: e.widgetList,
                              "emit-value": "",
                              "map-options": "",
                            },
                            on: { input: e.changeType },
                            model: {
                              value: e.modelValue.type,
                              callback: function (t) {
                                e.$set(e.modelValue, "type", t);
                              },
                              expression: "modelValue.type",
                            },
                          }),
                        ],
                        1,
                      ),
                    ],
                    1,
                  ),
                  "T" == e.modelValue.type
                    ? i(
                        "q-item",
                        [
                          i("q-item-section", { attrs: { avatar: "" } }, [e._v("最多填写")]),
                          i(
                            "q-item-section",
                            [
                              i("q-input", {
                                attrs: {
                                  outlined: "",
                                  dense: "",
                                  type: "number",
                                  "input-class": "text-right",
                                  "hide-bottom-space": "",
                                  "lazy-rules": "",
                                  rules: [
                                    function (t) {
                                      return e.checkMaxLengthMinLength(t, "max");
                                    },
                                  ],
                                },
                                scopedSlots: e._u(
                                  [
                                    "T" == e.modelValue.type
                                      ? {
                                          key: "append",
                                          fn: function () {
                                            return [
                                              i("span", { staticClass: "text-body2" }, [
                                                e._v("字"),
                                              ]),
                                            ];
                                          },
                                          proxy: !0,
                                        }
                                      : null,
                                  ],
                                  null,
                                  !0,
                                ),
                                model: {
                                  value: e.modelValue.maxLength,
                                  callback: function (t) {
                                    e.$set(e.modelValue, "maxLength", e._n(t));
                                  },
                                  expression: "modelValue.maxLength",
                                },
                              }),
                            ],
                            1,
                          ),
                        ],
                        1,
                      )
                    : e._e(),
                  "T" == e.modelValue.type
                    ? i(
                        "q-item",
                        [
                          i("q-item-section", { attrs: { avatar: "" } }, [e._v("最少填写")]),
                          i(
                            "q-item-section",
                            [
                              i("q-input", {
                                attrs: {
                                  outlined: "",
                                  dense: "",
                                  type: "number",
                                  "input-class": "text-right",
                                  "hide-bottom-space": "",
                                  "lazy-rules": "",
                                  rules: [
                                    function (t) {
                                      return e.checkMaxLengthMinLength(t, "min");
                                    },
                                  ],
                                },
                                scopedSlots: e._u(
                                  [
                                    "T" == e.modelValue.type
                                      ? {
                                          key: "append",
                                          fn: function () {
                                            return [
                                              i("span", { staticClass: "text-body2" }, [
                                                e._v("字"),
                                              ]),
                                            ];
                                          },
                                          proxy: !0,
                                        }
                                      : null,
                                  ],
                                  null,
                                  !0,
                                ),
                                model: {
                                  value: e.modelValue.minLength,
                                  callback: function (t) {
                                    e.$set(e.modelValue, "minLength", e._n(t));
                                  },
                                  expression: "modelValue.minLength",
                                },
                              }),
                            ],
                            1,
                          ),
                        ],
                        1,
                      )
                    : e._e(),
                  "T" == e.modelValue.type
                    ? i(
                        "q-item",
                        [
                          i("q-item-section", { attrs: { avatar: "" } }, [e._v("允许多行")]),
                          i("q-item-section"),
                          i(
                            "q-item-section",
                            { attrs: { side: "" } },
                            [
                              i("q-toggle", {
                                attrs: { "checked-icon": "check", "unchecked-icon": "clear" },
                                model: {
                                  value: e.modelValue.isTextarea,
                                  callback: function (t) {
                                    e.$set(e.modelValue, "isTextarea", t);
                                  },
                                  expression: "modelValue.isTextarea",
                                },
                              }),
                            ],
                            1,
                          ),
                        ],
                        1,
                      )
                    : e._e(),
                  "N" == e.modelValue.type
                    ? i(
                        "q-item",
                        [
                          i("q-item-section", { attrs: { avatar: "" } }, [e._v("最大值")]),
                          i(
                            "q-item-section",
                            [
                              i("q-input", {
                                attrs: {
                                  outlined: "",
                                  dense: "",
                                  type: "number",
                                  step: e.numberStep,
                                  "input-class": "text-right",
                                  "hide-bottom-space": "",
                                  "lazy-rules": "",
                                  rules: [
                                    function (t) {
                                      return e.checkMaxValueMinValue(t, "max");
                                    },
                                  ],
                                },
                                model: {
                                  value: e.modelValue.maxValue,
                                  callback: function (t) {
                                    e.$set(e.modelValue, "maxValue", e._n(t));
                                  },
                                  expression: "modelValue.maxValue",
                                },
                              }),
                            ],
                            1,
                          ),
                        ],
                        1,
                      )
                    : e._e(),
                  "N" == e.modelValue.type
                    ? i(
                        "q-item",
                        [
                          i("q-item-section", { attrs: { avatar: "" } }, [e._v("最小值")]),
                          i(
                            "q-item-section",
                            [
                              i("q-input", {
                                attrs: {
                                  outlined: "",
                                  dense: "",
                                  type: "number",
                                  step: e.numberStep,
                                  "input-class": "text-right",
                                  "hide-bottom-space": "",
                                  "lazy-rules": "",
                                  rules: [
                                    function (t) {
                                      return e.checkMaxValueMinValue(t, "min");
                                    },
                                  ],
                                },
                                model: {
                                  value: e.modelValue.minValue,
                                  callback: function (t) {
                                    e.$set(e.modelValue, "minValue", e._n(t));
                                  },
                                  expression: "modelValue.minValue",
                                },
                              }),
                            ],
                            1,
                          ),
                        ],
                        1,
                      )
                    : e._e(),
                  "N" == e.modelValue.type
                    ? i(
                        "q-item",
                        [
                          i("q-item-section", { attrs: { avatar: "" } }, [e._v("允许小数")]),
                          i("q-item-section"),
                          i(
                            "q-item-section",
                            { attrs: { side: "" } },
                            [
                              i("q-toggle", {
                                attrs: { "checked-icon": "check", "unchecked-icon": "clear" },
                                model: {
                                  value: e.modelValue.isDecimal,
                                  callback: function (t) {
                                    e.$set(e.modelValue, "isDecimal", t);
                                  },
                                  expression: "modelValue.isDecimal",
                                },
                              }),
                            ],
                            1,
                          ),
                        ],
                        1,
                      )
                    : e._e(),
                  "N" == e.modelValue.type && e.modelValue.isDecimal
                    ? i(
                        "q-item",
                        [
                          i("q-item-section", { attrs: { avatar: "" } }, [e._v("小数位数")]),
                          i(
                            "q-item-section",
                            [
                              i("q-input", {
                                attrs: {
                                  outlined: "",
                                  dense: "",
                                  type: "number",
                                  "input-class": "text-right",
                                  "hide-bottom-space": "",
                                  "lazy-rules": "",
                                  rules: [
                                    function (t) {
                                      return e.checkDecimalPlaces(t);
                                    },
                                  ],
                                },
                                scopedSlots: e._u(
                                  [
                                    "N" == e.modelValue.type && e.modelValue.isDecimal
                                      ? {
                                          key: "append",
                                          fn: function () {
                                            return [
                                              i("span", { staticClass: "text-body2" }, [
                                                e._v("位"),
                                              ]),
                                            ];
                                          },
                                          proxy: !0,
                                        }
                                      : null,
                                  ],
                                  null,
                                  !0,
                                ),
                                model: {
                                  value: e.modelValue.decimalPlaces,
                                  callback: function (t) {
                                    e.$set(e.modelValue, "decimalPlaces", e._n(t));
                                  },
                                  expression: "modelValue.decimalPlaces",
                                },
                              }),
                            ],
                            1,
                          ),
                        ],
                        1,
                      )
                    : e._e(),
                  "R" == e.modelValue.type
                    ? i(
                        "q-item",
                        [
                          i("q-item-section", { attrs: { avatar: "" } }, [e._v("展现形式")]),
                          i(
                            "q-item-section",
                            [
                              i("q-select", {
                                attrs: {
                                  outlined: "",
                                  dense: "",
                                  options: [
                                    { value: "R", label: "单选按钮" },
                                    { value: "S", label: "下拉框" },
                                  ],
                                  "emit-value": "",
                                  "map-options": "",
                                },
                                model: {
                                  value: e.modelValue.selectPattern,
                                  callback: function (t) {
                                    e.$set(e.modelValue, "selectPattern", t);
                                  },
                                  expression: "modelValue.selectPattern",
                                },
                              }),
                            ],
                            1,
                          ),
                        ],
                        1,
                      )
                    : e._e(),
                  "R" == e.modelValue.type || "C" == e.modelValue.type
                    ? i(
                        "q-item",
                        [
                          i("q-item-section", { attrs: { avatar: "" } }, [e._v("选项")]),
                          i("q-item-section"),
                          i(
                            "q-item-section",
                            {
                              staticClass: "text-primary",
                              attrs: { side: "" },
                              on: { click: e.addOption },
                            },
                            [e._v("\n        添加选项\n      ")],
                          ),
                        ],
                        1,
                      )
                    : e._e(),
                  e._l(
                    "R" == e.modelValue.type || "C" == e.modelValue.type ? e.options : [],
                    function (t, a) {
                      return i(
                        "q-item",
                        { key: a },
                        [
                          i(
                            "q-item-section",
                            { attrs: { avatar: "" } },
                            [
                              i(
                                "q-btn",
                                {
                                  directives: [
                                    {
                                      name: "show",
                                      rawName: "v-show",
                                      value: 0 != a,
                                      expression: "index != 0",
                                    },
                                  ],
                                  attrs: {
                                    flat: "",
                                    dense: "",
                                    size: "sm",
                                    color: "primary",
                                    icon: "arrow_drop_up",
                                  },
                                  on: {
                                    click: function (t) {
                                      return e.moveOption(a, "up");
                                    },
                                  },
                                },
                                [i("q-tooltip", [e._v("上移")])],
                                1,
                              ),
                              i(
                                "q-btn",
                                {
                                  directives: [
                                    {
                                      name: "show",
                                      rawName: "v-show",
                                      value: a != e.options.length - 1,
                                      expression: "index != options.length - 1",
                                    },
                                  ],
                                  attrs: {
                                    flat: "",
                                    dense: "",
                                    size: "sm",
                                    color: "primary",
                                    icon: "arrow_drop_down",
                                  },
                                  on: {
                                    click: function (t) {
                                      return e.moveOption(a, "down");
                                    },
                                  },
                                },
                                [i("q-tooltip", [e._v("下移")])],
                                1,
                              ),
                            ],
                            1,
                          ),
                          i(
                            "q-item-section",
                            [
                              i("q-input", {
                                attrs: {
                                  outlined: "",
                                  dense: "",
                                  "hide-bottom-space": "",
                                  "lazy-rules": "",
                                  rules: [
                                    function (e) {
                                      return !!e || "请填写该项";
                                    },
                                    function (t) {
                                      return e.checkOption(t, a);
                                    },
                                  ],
                                },
                                scopedSlots: e._u(
                                  [
                                    {
                                      key: "prepend",
                                      fn: function () {
                                        return [
                                          i("span", { staticClass: "text-body2" }, [
                                            e._v("选项" + e._s(a + 1)),
                                          ]),
                                        ];
                                      },
                                      proxy: !0,
                                    },
                                  ],
                                  null,
                                  !0,
                                ),
                                model: {
                                  value: e.options[a],
                                  callback: function (t) {
                                    e.$set(e.options, a, t);
                                  },
                                  expression: "options[index]",
                                },
                              }),
                            ],
                            1,
                          ),
                          i(
                            "q-item-section",
                            { attrs: { side: "" } },
                            [
                              i(
                                "q-btn",
                                {
                                  directives: [
                                    {
                                      name: "show",
                                      rawName: "v-show",
                                      value: e.options.length > 1,
                                      expression: "options.length > 1",
                                    },
                                  ],
                                  attrs: {
                                    flat: "",
                                    dense: "",
                                    size: "sm",
                                    color: "negative",
                                    icon: "delete",
                                  },
                                  on: {
                                    click: function (t) {
                                      return e.deleteOption(a);
                                    },
                                  },
                                },
                                [i("q-tooltip", [e._v("删除")])],
                                1,
                              ),
                            ],
                            1,
                          ),
                        ],
                        1,
                      );
                    },
                  ),
                  ("R" == e.modelValue.type && "R" == e.modelValue.selectPattern) ||
                  "C" == e.modelValue.type
                    ? i(
                        "q-item",
                        [
                          i("q-item-section", { attrs: { avatar: "" } }, [e._v("添加[其他]项")]),
                          i("q-item-section"),
                          i(
                            "q-item-section",
                            { attrs: { side: "" } },
                            [
                              i("q-toggle", {
                                attrs: { "checked-icon": "check", "unchecked-icon": "clear" },
                                model: {
                                  value: e.modelValue.isOther,
                                  callback: function (t) {
                                    e.$set(e.modelValue, "isOther", t);
                                  },
                                  expression: "modelValue.isOther",
                                },
                              }),
                            ],
                            1,
                          ),
                        ],
                        1,
                      )
                    : e._e(),
                  "D" == e.modelValue.type
                    ? i(
                        "q-item",
                        [
                          i("q-item-section", { attrs: { avatar: "" } }, [e._v("时间维度")]),
                          i(
                            "q-item-section",
                            [
                              i("q-select", {
                                attrs: {
                                  outlined: "",
                                  dense: "",
                                  options: [
                                    { value: "D", label: "日期" },
                                    { value: "T", label: "时分" },
                                    { value: "DT", label: "日期+时分" },
                                  ],
                                  "emit-value": "",
                                  "map-options": "",
                                },
                                model: {
                                  value: e.modelValue.dtPattern,
                                  callback: function (t) {
                                    e.$set(e.modelValue, "dtPattern", t);
                                  },
                                  expression: "modelValue.dtPattern",
                                },
                              }),
                            ],
                            1,
                          ),
                        ],
                        1,
                      )
                    : e._e(),
                  "F" == e.modelValue.type
                    ? i(
                        "q-item",
                        [
                          i("q-item-section", { attrs: { avatar: "" } }, [e._v("最大上传数量")]),
                          i(
                            "q-item-section",
                            [
                              i("q-input", {
                                attrs: {
                                  outlined: "",
                                  dense: "",
                                  type: "number",
                                  "input-class": "text-right",
                                  "hide-bottom-space": "",
                                  "lazy-rules": "",
                                  rules: [
                                    function (t) {
                                      return e.checkFileCount(t);
                                    },
                                  ],
                                },
                                scopedSlots: e._u(
                                  [
                                    "F" == e.modelValue.type
                                      ? {
                                          key: "append",
                                          fn: function () {
                                            return [
                                              i("span", { staticClass: "text-body2" }, [
                                                e._v("个"),
                                              ]),
                                            ];
                                          },
                                          proxy: !0,
                                        }
                                      : null,
                                  ],
                                  null,
                                  !0,
                                ),
                                model: {
                                  value: e.modelValue.fileCount,
                                  callback: function (t) {
                                    e.$set(e.modelValue, "fileCount", e._n(t));
                                  },
                                  expression: "modelValue.fileCount",
                                },
                              }),
                            ],
                            1,
                          ),
                        ],
                        1,
                      )
                    : e._e(),
                  "F" == e.modelValue.type
                    ? i(
                        "q-item",
                        [
                          i("q-item-section", { attrs: { avatar: "" } }, [e._v("单个文件大小")]),
                          i(
                            "q-item-section",
                            [
                              i("q-input", {
                                attrs: {
                                  outlined: "",
                                  dense: "",
                                  type: "number",
                                  "input-class": "text-right",
                                  "hide-bottom-space": "",
                                  "lazy-rules": "",
                                  rules: [
                                    function (t) {
                                      return e.checkFileSize(t);
                                    },
                                  ],
                                },
                                scopedSlots: e._u(
                                  [
                                    "F" == e.modelValue.type
                                      ? {
                                          key: "append",
                                          fn: function () {
                                            return [
                                              i("span", { staticClass: "text-body2" }, [
                                                e._v("MB"),
                                              ]),
                                            ];
                                          },
                                          proxy: !0,
                                        }
                                      : null,
                                  ],
                                  null,
                                  !0,
                                ),
                                model: {
                                  value: e.modelValue.fileSize,
                                  callback: function (t) {
                                    e.$set(e.modelValue, "fileSize", e._n(t));
                                  },
                                  expression: "modelValue.fileSize",
                                },
                              }),
                            ],
                            1,
                          ),
                        ],
                        1,
                      )
                    : e._e(),
                  "F" == e.modelValue.type
                    ? i(
                        "q-item",
                        [
                          i("q-item-section", { attrs: { avatar: "" } }, [e._v("文件类型")]),
                          i(
                            "q-item-section",
                            [
                              i("q-field", {
                                attrs: {
                                  borderless: "",
                                  dense: "",
                                  "hide-bottom-space": "",
                                  "lazy-rules": "",
                                  rules: [
                                    function (e) {
                                      return (!!e && e.length > 0) || "请至少选择一项";
                                    },
                                  ],
                                  value: e.modelValue.fileExts,
                                },
                                scopedSlots: e._u(
                                  [
                                    {
                                      key: "control",
                                      fn: function () {
                                        return [
                                          e._l(e.$appConf.fileExts, function (t) {
                                            return i("q-checkbox", {
                                              key: t,
                                              staticClass: "q-mr-sm",
                                              attrs: { dense: "", val: t, label: t },
                                              model: {
                                                value: e.modelValue.fileExts,
                                                callback: function (t) {
                                                  e.$set(e.modelValue, "fileExts", t);
                                                },
                                                expression: "modelValue.fileExts",
                                              },
                                            });
                                          }),
                                          e._l(e.$appConf.pictureExts, function (t) {
                                            return i("q-checkbox", {
                                              key: t,
                                              staticClass: "q-mr-sm",
                                              attrs: { dense: "", val: t, label: t },
                                              model: {
                                                value: e.modelValue.fileExts,
                                                callback: function (t) {
                                                  e.$set(e.modelValue, "fileExts", t);
                                                },
                                                expression: "modelValue.fileExts",
                                              },
                                            });
                                          }),
                                        ];
                                      },
                                      proxy: !0,
                                    },
                                  ],
                                  null,
                                  !1,
                                  1976671668,
                                ),
                              }),
                            ],
                            1,
                          ),
                        ],
                        1,
                      )
                    : e._e(),
                  !e.isRisk ||
                  ("R" != e.modelValue.type &&
                    "C" != e.modelValue.type &&
                    "A" != e.modelValue.type &&
                    "T" != e.modelValue.type &&
                    "N" != e.modelValue.type)
                    ? e._e()
                    : i(
                        "q-item",
                        [
                          i("q-item-section", { attrs: { avatar: "" } }, [e._v("风险提示")]),
                          i("q-item-section", [e._v("开启审核时风险提示功能")]),
                          i(
                            "q-item-section",
                            { attrs: { side: "" } },
                            [
                              i("q-toggle", {
                                attrs: { "checked-icon": "check", "unchecked-icon": "clear" },
                                model: {
                                  value: e.riskMode,
                                  callback: function (t) {
                                    e.riskMode = t;
                                  },
                                  expression: "riskMode",
                                },
                              }),
                            ],
                            1,
                          ),
                        ],
                        1,
                      ),
                  e.isRisk && ("R" == e.modelValue.type || "C" == e.modelValue.type) && e.riskMode
                    ? i(
                        "q-item",
                        [
                          i("q-item-section", { attrs: { avatar: "" } }, [e._v("风险提示选项")]),
                          i(
                            "q-item-section",
                            e._l(
                              (e.options || []).reduce(function (e, t) {
                                return t ? e.concat(t) : e;
                              }, []),
                              function (t) {
                                return i("q-checkbox", {
                                  key: t,
                                  staticClass: "q-mr-sm",
                                  attrs: { dense: "", val: t, label: t, color: "orange" },
                                  model: {
                                    value: e.riskConfig,
                                    callback: function (t) {
                                      e.riskConfig = t;
                                    },
                                    expression: "riskConfig",
                                  },
                                });
                              },
                            ),
                            1,
                          ),
                        ],
                        1,
                      )
                    : e._e(),
                  e.isRisk && ("A" == e.modelValue.type || "T" == e.modelValue.type) && e.riskMode
                    ? i(
                        "q-item",
                        [
                          i("q-item-section", { attrs: { avatar: "" } }, [e._v("风险提示数据")]),
                          i(
                            "q-item-section",
                            [
                              i("q-input", {
                                attrs: {
                                  outlined: "",
                                  dense: "",
                                  type: "textarea",
                                  placeholder:
                                    "一行数据为一个匹配项（用户" +
                                    ("A" == e.modelValue.type ? "选择的地区" : "输入的内容") +
                                    "包含匹配项文本即算匹配成功）。",
                                  color: "orange",
                                },
                                model: {
                                  value: e.riskConfig,
                                  callback: function (t) {
                                    e.riskConfig = t;
                                  },
                                  expression: "riskConfig",
                                },
                              }),
                            ],
                            1,
                          ),
                        ],
                        1,
                      )
                    : e._e(),
                  e.isRisk && "N" == e.modelValue.type && e.riskMode
                    ? i(
                        "q-item",
                        [
                          i("q-item-section", { attrs: { avatar: "" } }, [e._v("风险提示区间")]),
                          i(
                            "q-item-section",
                            [
                              i("q-input", {
                                ref: "riskMax",
                                attrs: {
                                  outlined: "",
                                  dense: "",
                                  type: "number",
                                  step: e.numberStep,
                                  "input-class": "text-right",
                                  placeholder: "上限值",
                                  "hide-bottom-space": "",
                                  color: "orange",
                                },
                                model: {
                                  value: e.riskConfig.max,
                                  callback: function (t) {
                                    e.$set(e.riskConfig, "max", e._n(t));
                                  },
                                  expression: "riskConfig.max",
                                },
                              }),
                              i("q-input", {
                                attrs: {
                                  outlined: "",
                                  dense: "",
                                  type: "number",
                                  step: e.numberStep,
                                  "input-class": "text-right",
                                  placeholder: "下限值",
                                  "hide-bottom-space": "",
                                  "lazy-rules": "",
                                  rules: [
                                    function (t) {
                                      return e.checkRiskMaxValueMinValue(t);
                                    },
                                  ],
                                  color: "orange",
                                },
                                model: {
                                  value: e.riskConfig.min,
                                  callback: function (t) {
                                    e.$set(e.riskConfig, "min", e._n(t));
                                  },
                                  expression: "riskConfig.min",
                                },
                              }),
                            ],
                            1,
                          ),
                        ],
                        1,
                      )
                    : e._e(),
                  i(
                    "q-item",
                    [
                      i(
                        "q-item-section",
                        [
                          i(
                            "q-item-label",
                            { staticClass: "full-width q-gutter-sm row justify-end" },
                            [
                              i("q-btn", {
                                attrs: { outline: "", color: "grey", label: "取消" },
                                on: { click: e.cancel },
                              }),
                              i("q-btn", {
                                attrs: {
                                  unelevated: "",
                                  color: "primary",
                                  label: "确定",
                                  type: "submit",
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
                2,
              ),
            ],
            1,
          );
        },
        s = [],
        l = (i("c975"), i("13d5"), i("a434"), i("ded3")),
        o = i.n(l),
        n = {
          name: "NeuDefineWidget",
          props: { value: null, risk: Boolean },
          data() {
            return {
              widgetList: [
                { value: "T", label: "文本", icon: "translate" },
                { value: "N", label: "数字", icon: "looks_one" },
                { value: "R", label: "单选", icon: "radio_button_checked" },
                { value: "C", label: "多选", icon: "check_box" },
                { value: "D", label: "日期时间", icon: "access_time" },
                { value: "S", label: "电子签名", icon: "mdi-draw" },
                { value: "A", label: "地区", icon: "map" },
                { value: "F", label: "文件上传", icon: "mdi-file-word" },
              ],
              modelValue: this.defaultModelValue(),
              options: [""],
              isRisk: !1,
              riskMode: !1,
              riskConfig: null,
            };
          },
          mounted() {
            (this.initModelValue(this.value), (this.isRisk = this.risk));
          },
          watch: {
            value(e) {
              this.initModelValue(e);
            },
            risk(e) {
              this.isRisk = e;
            },
          },
          computed: {
            numberStep() {
              return this.modelValue.isDecimal
                ? 1 /
                    Math.pow(10, this.modelValue.decimalPlaces ? this.modelValue.decimalPlaces : 2)
                : 1;
            },
          },
          methods: {
            defaultModelValue() {
              return {
                label: "",
                type: "T",
                required: !1,
                isTextarea: !1,
                isDecimal: !1,
                decimalPlaces: 2,
                isOther: !1,
                selectPattern: "R",
                dtPattern: "D",
                fileCount: 1,
                fileSize: 1,
                fileExts: this.$appConf.fileExts.concat(this.$appConf.pictureExts),
              };
            },
            initModelValue(e) {
              e
                ? ((this.modelValue = o()({}, e)),
                  e.options && (this.options = e.options.reduce((e, t) => e.concat(t.value), [])),
                  e.riskConfig
                    ? (this.riskConfig = JSON.parse(JSON.stringify(e.riskConfig)))
                    : "R" === e.type || "C" === e.type
                      ? (this.riskConfig = [])
                      : "A" === e.type || "T" === e.type
                        ? (this.riskConfig = "")
                        : "N" === e.type && (this.riskConfig = { min: null, max: null }),
                  (this.riskMode = !!e.riskMode && e.riskMode))
                : (this.modelValue = this.defaultModelValue());
            },
            cancel() {
              this.$emit("cancel");
            },
            submit() {
              const e = {
                  label: this.modelValue.label,
                  hint: this.modelValue.hint,
                  type: this.modelValue.type,
                  required: this.modelValue.required,
                },
                t = {};
              ("T" === this.modelValue.type
                ? ((this.modelValue.minLength || 0 === this.modelValue.minLength) &&
                    (t.minLength = this.modelValue.minLength),
                  (this.modelValue.maxLength || 0 === this.modelValue.maxLength) &&
                    (t.maxLength = this.modelValue.maxLength),
                  (t.isTextarea = this.modelValue.isTextarea || !1))
                : "N" === this.modelValue.type
                  ? ((this.modelValue.minValue || 0 === this.modelValue.minValue) &&
                      (t.minValue = this.modelValue.minValue),
                    (this.modelValue.maxValue || 0 === this.modelValue.maxValue) &&
                      (t.maxValue = this.modelValue.maxValue),
                    (t.isDecimal = this.modelValue.isDecimal || !1),
                    (this.modelValue.decimalPlaces || 0 === this.modelValue.decimalPlaces) &&
                      (t.decimalPlaces = this.modelValue.decimalPlaces))
                  : "R" === this.modelValue.type || "C" === this.modelValue.type
                    ? ((t.options = this.options.reduce(
                        (e, t) => e.concat({ value: t, label: t }),
                        [],
                      )),
                      (t.isOther = this.modelValue.isOther || !1),
                      "R" === this.modelValue.type &&
                        (t.selectPattern = this.modelValue.selectPattern || "R"))
                    : "D" === this.modelValue.type
                      ? (t.dtPattern = this.modelValue.dtPattern || "D")
                      : "F" === this.modelValue.type &&
                        ((t.fileCount = this.modelValue.fileCount),
                        (t.fileSize = this.modelValue.fileSize),
                        (t.fileExts = this.modelValue.fileExts)),
                this.riskMode &&
                  ((t.riskMode = this.riskMode),
                  "R" === this.modelValue.type || "C" === this.modelValue.type
                    ? (t.riskConfig = this.riskConfig.reduce(
                        (e, t) => (-1 !== this.options.findIndex((e) => e === t) ? e.concat(t) : e),
                        [],
                      ))
                    : "A" === this.modelValue.type || "T" === this.modelValue.type
                      ? (t.riskConfig = this.riskConfig)
                      : "N" === this.modelValue.type && (t.riskConfig = o()({}, this.riskConfig))),
                this.$emit("input", o()(o()({}, e), t)),
                this.$emit("save"));
            },
            changeType(e) {
              ("R" === e || "C" === e
                ? (this.riskConfig = [])
                : "A" === e || "T" === e
                  ? (this.riskConfig = "")
                  : "N" === e && (this.riskConfig = { min: null, max: null }),
                "F" === e &&
                  (this.modelValue = {
                    label: this.modelValue.label,
                    type: "F",
                    required: !1,
                    isTextarea: !1,
                    isDecimal: !1,
                    decimalPlaces: 2,
                    isOther: !1,
                    selectPattern: "R",
                    dtPattern: "D",
                    fileCount: 1,
                    fileSize: 1,
                    fileExts: this.$appConf.fileExts.concat(this.$appConf.pictureExts),
                  }));
            },
            checkMaxLengthMinLength(e, t) {
              let i = /^[1-9]\d*$/;
              "min" === t && (i = /^\d+$/);
              const a = new RegExp(i);
              return null == e || "" === e || a.test(e)
                ? !(
                    "min" === t &&
                    null != this.modelValue.maxLength &&
                    "" !== this.modelValue.maxLength &&
                    null != this.modelValue.minLength &&
                    "" !== this.modelValue.minLength &&
                    this.modelValue.maxLength < this.modelValue.minLength
                  ) || "最少填写字数应小于等于最多填写字数"
                : "min" === t
                  ? "请填写非负整数"
                  : "请填写正整数";
            },
            checkMaxValueMinValue(e, t) {
              if (
                "min" === t &&
                null != this.modelValue.maxValue &&
                "" !== this.modelValue.maxValue &&
                null != this.modelValue.minValue &&
                "" !== this.modelValue.minValue &&
                this.modelValue.maxValue < this.modelValue.minValue
              )
                return "最小值应小于等于最大值";
              if (!this.modelValue.isDecimal) {
                const t = new RegExp(/^-?\d+$/);
                return !(null != e && "" !== e && !t.test(e)) || "请填写整数";
              }
            },
            checkDecimalPlaces(e) {
              if (this.modelValue.isDecimal) {
                const t = new RegExp(/^[1-9]\d*$/);
                return !!t.test(e) || "请填写正整数";
              }
              return !0;
            },
            checkOption(e, t) {
              return this.options.some((i, a) => i === e && a !== t)
                ? "选项重复"
                : e.indexOf(":") > -1 || e.indexOf(",") > -1
                  ? "选项不允许包含“:”和“,”号"
                  : ("C" !== this.modelValue.type &&
                      ("R" !== this.modelValue.type || "R" !== this.modelValue.selectPattern)) ||
                    !this.modelValue.isOther ||
                    "其他" !== e ||
                    "选项与[其他]重名，请更换";
            },
            addOption() {
              this.options.splice(this.options.length, 0, "");
            },
            moveOption(e, t) {
              "up" === t
                ? this.options.splice(e - 1, 0, this.options.splice(e, 1)[0])
                : this.options.splice(e + 1, 0, this.options.splice(e, 1)[0]);
            },
            deleteOption(e) {
              this.options.splice(e, 1);
            },
            checkFileCount(e) {
              const t = new RegExp(/^([1-9]|10)$/);
              return !!t.test(e) || "请填写1-10之间的整数";
            },
            checkFileSize(e) {
              const t = new RegExp(/^[1-5]$/);
              return !!t.test(e) || "请填写1-5之间的整数";
            },
            checkRiskMaxValueMinValue(e) {
              return (
                !(
                  null != this.$refs.riskMax.value &&
                  "" !== this.$refs.riskMax.value &&
                  null != e &&
                  "" !== e &&
                  this.$refs.riskMax.value < e
                ) || "下限值不应超过上限值"
              );
            },
            checkLabel(e) {
              if (!e && 0 !== e) return "请填写该项";
              const t = new RegExp("^(-?\\d+)(\\.\\d+)?$");
              return !t.test(e) || "不可以为纯数字表达式";
            },
          },
        },
        r = n,
        c = (i("bab8"), i("2877")),
        u = i("0378"),
        d = i("1c1c"),
        m = i("66e5"),
        f = i("4074"),
        p = i("0170"),
        h = i("27f9"),
        y = i("9564"),
        g = i("ddd8"),
        b = i("9c40"),
        v = i("05c0"),
        _ = i("8572"),
        T = i("8f8e"),
        x = i("eebe"),
        w = i.n(x),
        k = Object(c["a"])(r, a, s, !1, null, null, null);
      t["a"] = k.exports;
      w()(k, "components", {
        QForm: u["a"],
        QList: d["a"],
        QItem: m["a"],
        QItemSection: f["a"],
        QItemLabel: p["a"],
        QInput: h["a"],
        QToggle: y["a"],
        QSelect: g["a"],
        QBtn: b["a"],
        QTooltip: v["a"],
        QField: _["a"],
        QCheckbox: T["a"],
      });
    },
    "92db": function (e, t, i) {
      "use strict";
      var a = function () {
          var e = this,
            t = e.$createElement,
            i = e._self._c || t;
          return i(
            "div",
            e._l(e.list, function (t, a) {
              return i(
                "q-card",
                {
                  key: a,
                  staticClass: "bg-white q-my-sm q-mx-sm",
                  staticStyle: { "border-left": "0.25rem solid #b5b3b3" },
                  attrs: { flat: "" },
                },
                [
                  i(
                    "q-item",
                    [
                      i(
                        "q-item-section",
                        [
                          i(
                            "q-item-label",
                            {
                              directives: [
                                {
                                  name: "show",
                                  rawName: "v-show",
                                  value: "1" == e.noticeStatistics,
                                  expression: "noticeStatistics == '1'",
                                },
                              ],
                            },
                            [e._v(e._s(t.class_name))],
                          ),
                          i(
                            "q-item-label",
                            {
                              directives: [
                                {
                                  name: "show",
                                  rawName: "v-show",
                                  value: "2" == e.noticeStatistics,
                                  expression: "noticeStatistics == '2'",
                                },
                              ],
                            },
                            [e._v(e._s(t.major_name))],
                          ),
                          i(
                            "q-item-label",
                            {
                              directives: [
                                {
                                  name: "show",
                                  rawName: "v-show",
                                  value: "3" == e.noticeStatistics,
                                  expression: "noticeStatistics == '3'",
                                },
                              ],
                            },
                            [e._v(e._s(t.dep_name))],
                          ),
                          i(
                            "q-item-label",
                            {
                              directives: [
                                {
                                  name: "show",
                                  rawName: "v-show",
                                  value: "4" == e.noticeStatistics,
                                  expression: "noticeStatistics == '4'",
                                },
                              ],
                            },
                            [e._v(e._s(t.name) + "(" + e._s(t.tea_no) + ")")],
                          ),
                          i(
                            "q-item-label",
                            {
                              staticClass: "row justify-between",
                              attrs: { lines: "1", caption: "" },
                            },
                            [
                              e._v(
                                "\n          应阅读人数：" +
                                  e._s(t.feedback_total) +
                                  "\n          ",
                              ),
                              i("span", [e._v("已阅读人数：" + e._s(t.feedback_count))]),
                              i("span", [e._v(" 未阅读人数：" + e._s(t.no_feedback_total))]),
                            ],
                          ),
                          i(
                            "q-item-label",
                            {
                              directives: [
                                {
                                  name: "show",
                                  rawName: "v-show",
                                  value: 1 === e.confirm_flag,
                                  expression: "confirm_flag === 1",
                                },
                              ],
                              staticClass: "row justify-between",
                              attrs: { lines: "1", caption: "" },
                            },
                            [
                              e._v(
                                "\n          应确认人数：" + e._s(t.confirm_total) + "\n          ",
                              ),
                              i("span", [e._v("已确认人数：" + e._s(t.confirm_count))]),
                              i("span", [e._v(" 未确认人数：" + e._s(t.no_confirm_total))]),
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
              );
            }),
            1,
          );
        },
        s = [],
        l = {
          name: "NeuApplyStatistics",
          props: {
            id: String,
            title: String,
            task_target: Array,
            noticeStatistics: String,
            confirm_flag: Number,
          },
          data() {
            return { list: [] };
          },
          mounted() {
            this.loadList();
          },
          watch: {
            id(e) {
              ((this.id = e), this.loadList());
            },
            title(e) {
              ((this.title = e), this.loadList());
            },
            noticeStatistics(e) {
              ((this.noticeStatistics = e), this.loadList());
            },
          },
          methods: {
            loadList() {
              this.id &&
                this.title &&
                this.$axiosAction("/api/teacher/notice/notice.api", {
                  action: "getNoticeNumList",
                  notice_id: this.id,
                  noticeStatistics: this.noticeStatistics,
                })
                  .then((e) => {
                    0 === e.data.code && (this.list = e.data.feedbackResult);
                  })
                  .catch((e) => {
                    this.list = [];
                  });
            },
          },
        },
        o = l,
        n = i("2877"),
        r = i("f09f"),
        c = i("66e5"),
        u = i("4074"),
        d = i("0170"),
        m = i("eebe"),
        f = i.n(m),
        p = Object(n["a"])(o, a, s, !1, null, null, null);
      t["a"] = p.exports;
      f()(p, "components", {
        QCard: r["a"],
        QItem: c["a"],
        QItemSection: u["a"],
        QItemLabel: d["a"],
      });
    },
    "961c": function (e, t, i) {
      "use strict";
      var a = function () {
          var e = this,
            t = e.$createElement,
            i = e._self._c || t;
          return i(
            "div",
            { staticClass: "full-width" },
            [
              i("div", { staticClass: "neu-map-view", attrs: { id: "map_container" } }),
              i("q-btn", {
                directives: [{ name: "close-popup", rawName: "v-close-popup" }],
                staticClass: "absolute-top-right q-mr-sm q-mt-sm",
                class: e.tipTextColor,
                staticStyle: { "z-index": "100" },
                attrs: { icon: "close", flat: "", round: "", dense: "", size: "sm" },
              }),
              i(
                "div",
                {
                  staticClass: "absolute-top-left q-ml-sm q-mt-sm row items-center",
                  class: e.tipTextColor,
                  staticStyle: { "z-index": "100" },
                },
                [
                  i(
                    "q-item-label",
                    {
                      staticClass: "q-mr-sm cursor-pointer",
                      on: {
                        click: function (t) {
                          e.mapTypeDialog = !0;
                        },
                      },
                    },
                    [
                      [
                        i("span", {
                          domProps: {
                            textContent: e._s(
                              (
                                e.mapOptions.find(function (t) {
                                  return t.value == e.mapType;
                                }) || {}
                              ).label,
                            ),
                          },
                        }),
                        i("q-icon", { attrs: { name: "arrow_drop_down", size: "sm" } }),
                      ],
                    ],
                    2,
                  ),
                  i(
                    "span",
                    {
                      directives: [
                        {
                          name: "show",
                          rawName: "v-show",
                          value: "statistics" == e.mapType,
                          expression: "mapType == 'statistics'",
                        },
                      ],
                      class: { "cursor-pointer": e.currProvinceIndex > -1 },
                      on: { click: e.showCountryData },
                    },
                    [e._v("全国")],
                  ),
                  i(
                    "span",
                    {
                      directives: [
                        {
                          name: "show",
                          rawName: "v-show",
                          value: "statistics" == e.mapType && e.currProvinceIndex > -1,
                          expression: "mapType == 'statistics' && currProvinceIndex > -1",
                        },
                      ],
                      class: { "cursor-pointer": e.currCityIndex > -1 },
                      on: { click: e.resetProvinceData },
                    },
                    [
                      e._v(
                        " > " +
                          e._s(
                            e.currProvinceIndex > -1
                              ? e.statisticsList[e.currProvinceIndex].province +
                                  " (" +
                                  e.statisticsList[e.currProvinceIndex].amount +
                                  ")"
                              : "",
                          ),
                      ),
                    ],
                  ),
                  i(
                    "span",
                    {
                      directives: [
                        {
                          name: "show",
                          rawName: "v-show",
                          value: "statistics" == e.mapType && e.currCityIndex > -1,
                          expression: "mapType == 'statistics' && currCityIndex > -1",
                        },
                      ],
                    },
                    [
                      e._v(
                        " > " +
                          e._s(
                            e.currCityIndex > -1
                              ? e.statisticsList[e.currProvinceIndex].cities[e.currCityIndex].city +
                                  " (" +
                                  e.statisticsList[e.currProvinceIndex].cities[e.currCityIndex]
                                    .amount +
                                  ")"
                              : "",
                          ),
                      ),
                    ],
                  ),
                  i(
                    "q-item-label",
                    {
                      directives: [
                        {
                          name: "show",
                          rawName: "v-show",
                          value: "curve" == e.mapType,
                          expression: "mapType == 'curve'",
                        },
                      ],
                      staticClass: "q-mr-sm cursor-pointer",
                      on: {
                        click: function (t) {
                          e.curveDirectionDialog = !0;
                        },
                      },
                    },
                    [
                      [
                        i("span", {
                          domProps: {
                            textContent: e._s(
                              (
                                e.curveDirectionOptions.find(function (t) {
                                  return t.value == e.curveDirection;
                                }) || {}
                              ).label,
                            ),
                          },
                        }),
                        i("q-icon", { attrs: { name: "arrow_drop_down", size: "sm" } }),
                      ],
                    ],
                    2,
                  ),
                ],
                1,
              ),
              i(
                "q-dialog",
                {
                  model: {
                    value: e.mapTypeDialog,
                    callback: function (t) {
                      e.mapTypeDialog = t;
                    },
                    expression: "mapTypeDialog",
                  },
                },
                [
                  i(
                    "q-list",
                    { staticClass: "bg-white", attrs: { dense: "", bordered: "", separator: "" } },
                    [
                      i(
                        "q-item",
                        {
                          directives: [{ name: "ripple", rawName: "v-ripple" }],
                          staticClass: "text-primary items-center",
                        },
                        [e._v("数据图")],
                      ),
                      e._l(e.mapOptions, function (t) {
                        return i(
                          "q-item",
                          {
                            directives: [
                              { name: "ripple", rawName: "v-ripple" },
                              { name: "close-popup", rawName: "v-close-popup" },
                            ],
                            key: t.value,
                            staticClass: "items-center",
                            attrs: { clickable: "" },
                            on: {
                              click: function (i) {
                                return e.changeMapType(t.value);
                              },
                            },
                          },
                          [
                            i("q-icon", {
                              staticClass: "q-mr-sm",
                              attrs: { name: "bubble_chart" },
                            }),
                            e._v("\n        " + e._s(t.label) + "\n      "),
                          ],
                          1,
                        );
                      }),
                      i(
                        "q-item",
                        {
                          directives: [{ name: "ripple", rawName: "v-ripple" }],
                          staticClass: "text-primary items-center",
                        },
                        [e._v("主题色")],
                      ),
                      e._l(e.mapThemes, function (t) {
                        return i(
                          "q-item",
                          {
                            directives: [
                              { name: "ripple", rawName: "v-ripple" },
                              { name: "close-popup", rawName: "v-close-popup" },
                            ],
                            key: t.value,
                            staticClass: "items-center",
                            attrs: { clickable: "" },
                            on: {
                              click: function (i) {
                                return e.changeMapStyle(t.value);
                              },
                            },
                          },
                          [
                            i("q-icon", { staticClass: "q-mr-sm", attrs: { name: "color_lens" } }),
                            e._v("\n        " + e._s(t.label) + "\n      "),
                          ],
                          1,
                        );
                      }),
                    ],
                    2,
                  ),
                ],
                1,
              ),
              i(
                "q-dialog",
                {
                  model: {
                    value: e.curveDirectionDialog,
                    callback: function (t) {
                      e.curveDirectionDialog = t;
                    },
                    expression: "curveDirectionDialog",
                  },
                },
                [
                  i(
                    "q-list",
                    { staticClass: "bg-white", attrs: { dense: "", bordered: "", separator: "" } },
                    e._l(e.curveDirectionOptions, function (t) {
                      return i(
                        "q-item",
                        {
                          directives: [
                            { name: "ripple", rawName: "v-ripple" },
                            { name: "close-popup", rawName: "v-close-popup" },
                          ],
                          key: t.value,
                          staticClass: "items-center",
                          attrs: { clickable: "" },
                          on: {
                            click: function (i) {
                              return e.changeCurveDirection(t.value);
                            },
                          },
                        },
                        [
                          i("q-icon", {
                            staticClass: "q-mr-sm",
                            style: e.curveDirectionColor(t.value),
                            attrs: { name: "router" },
                          }),
                          e._v("\n        " + e._s(t.label) + "\n      "),
                        ],
                        1,
                      );
                    }),
                    1,
                  ),
                ],
                1,
              ),
            ],
            1,
          );
        },
        s = [];
      (i("c975"), i("13d5"), i("e6cf"), i("ddb0"));
      function l() {
        return {
          北京市: { abbreviation: "北京", zoom: 10, lng: 116.395645, lat: 39.929986 },
          上海市: { abbreviation: "上海", zoom: 10, lng: 121.487899, lat: 31.249162 },
          天津市: { abbreviation: "天津", zoom: 10, lng: 117.210813, lat: 39.14393 },
          重庆市: { abbreviation: "重庆", zoom: 9, lng: 106.530635, lat: 29.544606 },
          河北省: { abbreviation: "河北", zoom: 7, lng: 115.661434, lat: 38.61384 },
          山西省: { abbreviation: "山西", zoom: 7, lng: 112.515496, lat: 37.866566 },
          辽宁省: { abbreviation: "辽宁", zoom: 7, lng: 122.753592, lat: 41.6216 },
          吉林省: { abbreviation: "吉林", zoom: 7, lng: 126.262876, lat: 43.678846 },
          黑龙江省: { abbreviation: "黑龙江", zoom: 7, lng: 128.047414, lat: 47.356592 },
          江苏省: { abbreviation: "江苏", zoom: 8, lng: 119.368489, lat: 33.013797 },
          浙江省: { abbreviation: "浙江", zoom: 8, lng: 119.957202, lat: 29.159494 },
          安徽省: { abbreviation: "安徽", zoom: 8, lng: 117.216005, lat: 31.859252 },
          福建省: { abbreviation: "福建", zoom: 7, lng: 117.984943, lat: 26.050118 },
          江西省: { abbreviation: "江西", zoom: 8, lng: 115.676082, lat: 27.757258 },
          山东省: { abbreviation: "山东", zoom: 8, lng: 118.527663, lat: 36.09929 },
          河南省: { abbreviation: "河南", zoom: 8, lng: 113.486804, lat: 34.157184 },
          湖北省: { abbreviation: "湖北", zoom: 8, lng: 112.410562, lat: 31.209316 },
          湖南省: { abbreviation: "湖南", zoom: 8, lng: 111.720664, lat: 27.695864 },
          广东省: { abbreviation: "广东", zoom: 8, lng: 113.394818, lat: 23.408004 },
          海南省: { abbreviation: "海南", zoom: 9, lng: 109.733755, lat: 19.180501 },
          四川省: { abbreviation: "四川", zoom: 7, lng: 102.89916, lat: 30.367481 },
          贵州省: { abbreviation: "贵州", zoom: 8, lng: 106.734996, lat: 26.902826 },
          云南省: { abbreviation: "云南", zoom: 7, lng: 101.592952, lat: 24.864213 },
          陕西省: { abbreviation: "陕西", zoom: 7, lng: 109.503789, lat: 35.860026 },
          甘肃省: { abbreviation: "甘肃", zoom: 6, lng: 102.457625, lat: 38.103267 },
          青海省: { abbreviation: "青海", zoom: 7, lng: 96.202544, lat: 35.499761 },
          台湾省: { abbreviation: "台湾", zoom: 8, lng: 120.961454, lat: 23.80406 },
          内蒙古自治区: { abbreviation: "内蒙古", zoom: 6, lng: 114.415868, lat: 43.468238 },
          广西壮族自治区: { abbreviation: "广西", zoom: 8, lng: 108.924274, lat: 23.552255 },
          宁夏回族自治区: { abbreviation: "宁夏", zoom: 8, lng: 106.155481, lat: 37.321323 },
          新疆维吾尔自治区: { abbreviation: "新疆", zoom: 6, lng: 85.614899, lat: 42.127001 },
          西藏自治区: { abbreviation: "西藏", zoom: 6, lng: 89.137982, lat: 31.367315 },
          香港特别行政区: { abbreviation: "香港", zoom: 7, lng: 114.186124, lat: 22.293586 },
          澳门特别行政区: { abbreviation: "澳门", zoom: 7, lng: 113.557519, lat: 22.204118 },
        };
      }
      function o() {
        return [
          { label: "深黑", value: "darkStyle" },
          { label: "紫灰", value: "purpleStyle" },
          { label: "雪白", value: "snowStyle" },
          { label: "灰白", value: "whiteStyle" },
        ];
      }
      function n(e, t) {
        d[t] && e.setMapStyleV2({ styleJson: d[t] });
      }
      async function r(e, t, i) {
        let a,
          s = null;
        return (
          await c(e).then((e) => {
            ((a = u(t, i)), (s = new mapvgl.View({ map: a })));
          }),
          { map: a, view: s, BMapGL: BMapGL, mapv: mapv, mapvgl: mapvgl }
        );
      }
      function c(e) {
        return new Promise((t, i) => {
          try {
            t(BMapGL);
          } catch (a) {
            window.init = () => {
              t(BMapGL);
            };
            const s = document.createElement("script");
            ((s.type = "text/javascript"),
              (s.src = `https://api.map.baidu.com/api?v=1.0&type=webgl&ak=${e}&callback=init`),
              (s.onerror = i),
              document.head.appendChild(s));
            const l = document.createElement("script");
            ((l.type = "text/javascript"),
              (l.src = "https://mapv.baidu.com/build/mapv.min.js"),
              (l.onerror = i),
              document.head.appendChild(l));
            const o = document.createElement("script");
            ((o.type = "text/javascript"),
              (o.src = "https://code.bdstatic.com/npm/mapvgl@1.0.0-beta.131/dist/mapvgl.min.js"),
              (o.onerror = i),
              document.head.appendChild(o));
          }
        });
      }
      function u(e, t) {
        t = Object.assign({ tilt: 60, heading: 0 }, t);
        const i = new BMapGL.Map(e, {
          restrictCenter: !1,
          style: { styleJson: d[t.themeName] || d.darkStyle },
        });
        return (
          i.enableKeyboard(),
          i.enableScrollWheelZoom(),
          i.enableInertialDragging(),
          i.enableContinuousZoom(),
          i.setDisplayOptions(
            t.displayOptions || {
              indoor: !1,
              poi: !0,
              skyColors: t.skyColors || ["rgba(5, 5, 30, 0.01)", "rgba(5, 5, 30, 1.0)"],
            },
          ),
          t.center && t.zoom && i.centerAndZoom(new BMapGL.Point(t.center[0], t.center[1]), t.zoom),
          i.setTilt(t.tilt),
          i.setHeading(t.heading),
          i
        );
      }
      const d = {
          darkStyle: [
            { featureType: "background", elementType: "geometry", stylers: { color: "#070c17ff" } },
            { featureType: "poilabel", elementType: "labels.icon", stylers: { visibility: "off" } },
            { featureType: "road", elementType: "labels", stylers: { visibility: "off" } },
            { featureType: "road", elementType: "geometry.fill", stylers: { color: "#151e25ff" } },
            {
              featureType: "road",
              elementType: "geometry.stroke",
              stylers: { color: "#ffffff00" },
            },
            {
              featureType: "highway",
              elementType: "geometry.fill",
              stylers: { color: "#27303bff" },
            },
            {
              featureType: "highway",
              elementType: "geometry.stroke",
              stylers: { color: "#ffffff00" },
            },
            {
              featureType: "nationalway",
              elementType: "geometry.fill",
              stylers: { color: "#27303bff" },
            },
            {
              featureType: "nationalway",
              elementType: "geometry.stroke",
              stylers: { color: "#ffffff00" },
            },
            {
              featureType: "provincialway",
              elementType: "geometry.fill",
              stylers: { color: "#27303bff" },
            },
            {
              featureType: "provincialway",
              elementType: "geometry.stroke",
              stylers: { color: "#ffffff00" },
            },
            { featureType: "railway", elementType: "geometry", stylers: { visibility: "off" } },
            { featureType: "highwaysign", elementType: "labels", stylers: { visibility: "off" } },
            {
              featureType: "highwaysign",
              elementType: "labels.icon",
              stylers: { visibility: "off" },
            },
            {
              featureType: "nationalwaysign",
              elementType: "labels.icon",
              stylers: { visibility: "off" },
            },
            {
              featureType: "nationalwaysign",
              elementType: "labels",
              stylers: { visibility: "off" },
            },
            {
              featureType: "provincialwaysign",
              elementType: "labels",
              stylers: { visibility: "off" },
            },
            {
              featureType: "provincialwaysign",
              elementType: "labels.icon",
              stylers: { visibility: "off" },
            },
            {
              featureType: "tertiarywaysign",
              elementType: "labels",
              stylers: { visibility: "off" },
            },
            {
              featureType: "tertiarywaysign",
              elementType: "labels.icon",
              stylers: { visibility: "off" },
            },
            { featureType: "subwaylabel", elementType: "labels", stylers: { visibility: "off" } },
            {
              featureType: "subwaylabel",
              elementType: "labels.icon",
              stylers: { visibility: "off" },
            },
            {
              featureType: "poilabel",
              elementType: "labels.text.fill",
              stylers: { color: "#80868dff" },
            },
            {
              featureType: "poilabel",
              elementType: "labels.text.stroke",
              stylers: { color: "#ffffff00" },
            },
            {
              featureType: "districtlabel",
              elementType: "labels.text.fill",
              stylers: { color: "#71767aff" },
            },
            {
              featureType: "districtlabel",
              elementType: "labels.text.stroke",
              stylers: { color: "#ffffff00" },
            },
            { featureType: "poilabel", elementType: "labels", stylers: { visibility: "off" } },
            { featureType: "airportlabel", elementType: "labels", stylers: { visibility: "on" } },
            {
              featureType: "airportlabel",
              elementType: "labels.icon",
              stylers: { visibility: "off" },
            },
            {
              featureType: "airportlabel",
              elementType: "labels.text.fill",
              stylers: { color: "#80868dff" },
            },
            {
              featureType: "airportlabel",
              elementType: "labels.text.stroke",
              stylers: { color: "#ffffff00" },
            },
            { featureType: "manmade", elementType: "labels", stylers: { visibility: "off" } },
            { featureType: "manmade", elementType: "geometry", stylers: { color: "#070c17ff" } },
            { featureType: "water", elementType: "labels", stylers: { visibility: "off" } },
            { featureType: "water", elementType: "geometry", stylers: { color: "#141d27ff" } },
            {
              featureType: "green",
              elementType: "geometry",
              stylers: { color: "#122228ff", visibility: "off" },
            },
            { featureType: "subway", elementType: "geometry", stylers: { visibility: "off" } },
            { featureType: "highway", elementType: "labels", stylers: { visibility: "on" } },
            {
              featureType: "highway",
              elementType: "labels.text.stroke",
              stylers: { color: "#ffffff00" },
            },
            {
              featureType: "highway",
              elementType: "labels.text.fill",
              stylers: { color: "#5f6468ff" },
            },
            { featureType: "town", elementType: "labels", stylers: { visibility: "off" } },
            { featureType: "village", elementType: "labels", stylers: { visibility: "off" } },
            { featureType: "highway", elementType: "geometry", stylers: { weight: 3 } },
            {
              featureType: "cityhighway",
              elementType: "geometry.fill",
              stylers: { color: "#27303bff" },
            },
            {
              featureType: "arterial",
              elementType: "geometry.fill",
              stylers: { color: "#27303bff" },
            },
            {
              featureType: "arterial",
              elementType: "geometry.stroke",
              stylers: { color: "#ffffff00" },
            },
            {
              featureType: "cityhighway",
              elementType: "geometry.stroke",
              stylers: { color: "#ffffff00" },
            },
          ],
          purpleStyle: [
            { featureType: "water", elementType: "all", stylers: { color: "#021019ff" } },
            {
              featureType: "highway",
              elementType: "geometry.fill",
              stylers: { color: "#000000ff" },
            },
            {
              featureType: "highway",
              elementType: "geometry.stroke",
              stylers: { color: "#147a92ff" },
            },
            {
              featureType: "arterial",
              elementType: "geometry.fill",
              stylers: { color: "#000000ff" },
            },
            {
              featureType: "arterial",
              elementType: "geometry.stroke",
              stylers: { color: "#0b3d51ff" },
            },
            { featureType: "local", elementType: "geometry", stylers: { color: "#000000ff" } },
            {
              featureType: "railway",
              elementType: "geometry.fill",
              stylers: { color: "#000000ff" },
            },
            {
              featureType: "railway",
              elementType: "geometry.stroke",
              stylers: { color: "#08304bff" },
            },
            { featureType: "subway", elementType: "geometry", stylers: { visibility: "off" } },
            {
              featureType: "all",
              elementType: "labels.text.fill",
              stylers: { color: "#857f7fff" },
            },
            {
              featureType: "all",
              elementType: "labels.text.stroke",
              stylers: { color: "#000000ff" },
            },
            { featureType: "green", elementType: "geometry", stylers: { color: "#062032ff" } },
            { featureType: "manmade", elementType: "geometry", stylers: { color: "#022338ff" } },
            { featureType: "poilabel", elementType: "all", stylers: { visibility: "off" } },
            { featureType: "all", elementType: "labels.icon", stylers: { visibility: "off" } },
            {
              featureType: "water",
              elementType: "all",
              stylers: { visibility: "on", color: "#505565ff" },
            },
            { featureType: "green", elementType: "all", stylers: { color: "#353b4dff" } },
            {
              featureType: "road",
              elementType: "geometry.fill",
              stylers: { visibility: "on", color: "#2a2e3bff" },
            },
            {
              featureType: "road",
              elementType: "geometry.stroke",
              stylers: { color: "#4b5163ff" },
            },
            {
              featureType: "administrative",
              elementType: "labels.text.fill",
              stylers: { color: "#8e99bdff" },
            },
            {
              featureType: "administrative",
              elementType: "labels.text.stroke",
              stylers: { color: "#2f3547ff" },
            },
            {
              featureType: "poilabel",
              elementType: "labels.text.fill",
              stylers: { color: "#727c9aff" },
            },
            {
              featureType: "road",
              elementType: "labels.text.stroke",
              stylers: { color: "#293045ff" },
            },
            {
              featureType: "road",
              elementType: "labels.text.fill",
              stylers: { color: "#777e93ff" },
            },
            { featureType: "town", elementType: "all", stylers: { visibility: "on" } },
            {
              featureType: "subway",
              elementType: "labels.text.fill",
              stylers: { visibility: "off", color: "#787f95ff" },
            },
            {
              featureType: "subway",
              elementType: "labels.text.stroke",
              stylers: { color: "#40475eff" },
            },
            {
              featureType: "building",
              elementType: "geometry.fill",
              stylers: { color: "#485161ff" },
            },
            {
              featureType: "manmade",
              elementType: "geometry.fill",
              stylers: { color: "#374053ff" },
            },
            {
              featureType: "manmade",
              elementType: "labels.text.fill",
              stylers: { color: "#8792adff" },
            },
            {
              featureType: "manmade",
              elementType: "labels.text.stroke",
              stylers: { color: "#292f48ff" },
            },
            {
              featureType: "scenicspotslabel",
              elementType: "labels",
              stylers: { visibility: "off" },
            },
            { featureType: "railway", elementType: "geometry", stylers: { visibility: "off" } },
            {
              featureType: "scenicspotslabel",
              elementType: "labels.icon",
              stylers: { visibility: "off" },
            },
            { featureType: "highwaysign", elementType: "labels", stylers: { visibility: "off" } },
            {
              featureType: "highwaysign",
              elementType: "labels.icon",
              stylers: { visibility: "off" },
            },
            {
              featureType: "nationalwaysign",
              elementType: "labels.icon",
              stylers: { visibility: "off" },
            },
            {
              featureType: "nationalwaysign",
              elementType: "labels",
              stylers: { visibility: "off" },
            },
            {
              featureType: "provincialwaysign",
              elementType: "labels.icon",
              stylers: { visibility: "off" },
            },
            {
              featureType: "provincialwaysign",
              elementType: "labels",
              stylers: { visibility: "off" },
            },
            {
              featureType: "tertiarywaysign",
              elementType: "labels.icon",
              stylers: { visibility: "off" },
            },
            {
              featureType: "tertiarywaysign",
              elementType: "labels",
              stylers: { visibility: "off" },
            },
            {
              featureType: "subwaylabel",
              elementType: "labels.icon",
              stylers: { visibility: "off" },
            },
            { featureType: "subwaylabel", elementType: "labels", stylers: { visibility: "off" } },
            { featureType: "village", elementType: "labels", stylers: { visibility: "off" } },
            { featureType: "town", elementType: "labels", stylers: { visibility: "off" } },
            {
              featureType: "land",
              elementType: "geometry",
              stylers: { color: "#40495aff", visibility: "on" },
            },
          ],
          snowStyle: [
            { featureType: "background", elementType: "geometry", stylers: { color: "#fefefeff" } },
            { featureType: "poilabel", elementType: "labels.icon", stylers: { visibility: "off" } },
            { featureType: "road", elementType: "labels", stylers: { visibility: "off" } },
            { featureType: "road", elementType: "geometry.fill", stylers: { color: "#f0f1f7ff" } },
            {
              featureType: "road",
              elementType: "geometry.stroke",
              stylers: { color: "#ffffff00" },
            },
            {
              featureType: "highway",
              elementType: "geometry.fill",
              stylers: { color: "#e8eaf5ff" },
            },
            {
              featureType: "highway",
              elementType: "geometry.stroke",
              stylers: { color: "#ffffff00" },
            },
            {
              featureType: "nationalway",
              elementType: "geometry.fill",
              stylers: { color: "#e8eaf5ff" },
            },
            {
              featureType: "nationalway",
              elementType: "geometry.stroke",
              stylers: { color: "#ffffff00" },
            },
            {
              featureType: "provincialway",
              elementType: "geometry.fill",
              stylers: { color: "#e8eaf5ff" },
            },
            {
              featureType: "provincialway",
              elementType: "geometry.stroke",
              stylers: { color: "#ffffff00" },
            },
            { featureType: "railway", elementType: "geometry", stylers: { visibility: "off" } },
            { featureType: "highwaysign", elementType: "labels", stylers: { visibility: "off" } },
            {
              featureType: "highwaysign",
              elementType: "labels.icon",
              stylers: { visibility: "off" },
            },
            {
              featureType: "nationalwaysign",
              elementType: "labels.icon",
              stylers: { visibility: "off" },
            },
            {
              featureType: "nationalwaysign",
              elementType: "labels",
              stylers: { visibility: "off" },
            },
            {
              featureType: "provincialwaysign",
              elementType: "labels",
              stylers: { visibility: "off" },
            },
            {
              featureType: "provincialwaysign",
              elementType: "labels.icon",
              stylers: { visibility: "off" },
            },
            {
              featureType: "tertiarywaysign",
              elementType: "labels",
              stylers: { visibility: "off" },
            },
            {
              featureType: "tertiarywaysign",
              elementType: "labels.icon",
              stylers: { visibility: "off" },
            },
            { featureType: "subwaylabel", elementType: "labels", stylers: { visibility: "off" } },
            {
              featureType: "subwaylabel",
              elementType: "labels.icon",
              stylers: { visibility: "off" },
            },
            {
              featureType: "poilabel",
              elementType: "labels.text.fill",
              stylers: { color: "#80868dff" },
            },
            {
              featureType: "poilabel",
              elementType: "labels.text.stroke",
              stylers: { color: "#ffffff00" },
            },
            {
              featureType: "districtlabel",
              elementType: "labels.text.fill",
              stylers: { color: "#7d82b0ff" },
            },
            {
              featureType: "districtlabel",
              elementType: "labels.text.stroke",
              stylers: { color: "#ffffff00" },
            },
            { featureType: "poilabel", elementType: "labels", stylers: { visibility: "off" } },
            { featureType: "airportlabel", elementType: "labels", stylers: { visibility: "on" } },
            {
              featureType: "airportlabel",
              elementType: "labels.icon",
              stylers: { visibility: "off" },
            },
            {
              featureType: "airportlabel",
              elementType: "labels.text.fill",
              stylers: { color: "#80868dff" },
            },
            {
              featureType: "airportlabel",
              elementType: "labels.text.stroke",
              stylers: { color: "#ffffff00" },
            },
            { featureType: "manmade", elementType: "labels", stylers: { visibility: "off" } },
            { featureType: "manmade", elementType: "geometry", stylers: { color: "#eef1fbff" } },
            { featureType: "water", elementType: "labels", stylers: { visibility: "off" } },
            { featureType: "water", elementType: "geometry", stylers: { color: "#a7c9ffff" } },
            {
              featureType: "green",
              elementType: "geometry",
              stylers: { color: "#eef1fbff", visibility: "off" },
            },
            { featureType: "subway", elementType: "geometry", stylers: { visibility: "off" } },
            { featureType: "highway", elementType: "labels", stylers: { visibility: "on" } },
            {
              featureType: "highway",
              elementType: "labels.text.stroke",
              stylers: { color: "#ffffff00" },
            },
            {
              featureType: "highway",
              elementType: "labels.text.fill",
              stylers: { color: "#7d82b0ff" },
            },
            { featureType: "town", elementType: "labels", stylers: { visibility: "off" } },
            { featureType: "village", elementType: "labels", stylers: { visibility: "off" } },
            { featureType: "highway", elementType: "geometry", stylers: { weight: 3 } },
            {
              featureType: "cityhighway",
              elementType: "geometry.fill",
              stylers: { color: "#e8eaf5ff" },
            },
            {
              featureType: "arterial",
              elementType: "geometry.fill",
              stylers: { color: "#e8eaf5ff" },
            },
            {
              featureType: "arterial",
              elementType: "geometry.stroke",
              stylers: { color: "#ffffff00" },
            },
            {
              featureType: "cityhighway",
              elementType: "geometry.stroke",
              stylers: { color: "#ffffff00" },
            },
          ],
          whiteStyle: [
            {
              featureType: "water",
              elementType: "geometry",
              stylers: { visibility: "on", color: "#ccd6d7ff" },
            },
            {
              featureType: "green",
              elementType: "geometry",
              stylers: { visibility: "on", color: "#dee5e5ff" },
            },
            { featureType: "building", elementType: "geometry", stylers: { visibility: "on" } },
            {
              featureType: "building",
              elementType: "geometry.fill",
              stylers: { color: "#d1dbdbff" },
            },
            {
              featureType: "building",
              elementType: "geometry.stroke",
              stylers: { color: "#aab6b6ff" },
            },
            {
              featureType: "subwaystation",
              elementType: "geometry",
              stylers: { visibility: "off", color: "#888fa0ff" },
            },
            {
              featureType: "education",
              elementType: "geometry",
              stylers: { visibility: "on", color: "#e1e7e7ff" },
            },
            {
              featureType: "medical",
              elementType: "geometry",
              stylers: { visibility: "on", color: "#d1dbdbff" },
            },
            {
              featureType: "scenicspots",
              elementType: "geometry",
              stylers: { visibility: "on", color: "#d1dbdbff" },
            },
            {
              featureType: "highway",
              elementType: "geometry",
              stylers: { visibility: "on", weight: "4" },
            },
            {
              featureType: "highway",
              elementType: "geometry.fill",
              stylers: { color: "#ffffffff" },
            },
            {
              featureType: "highway",
              elementType: "geometry.stroke",
              stylers: { color: "#cacfcfff" },
            },
            { featureType: "highway", elementType: "labels", stylers: { visibility: "off" } },
            {
              featureType: "highway",
              elementType: "labels.text.fill",
              stylers: { color: "#999999ff" },
            },
            {
              featureType: "highway",
              elementType: "labels.text.stroke",
              stylers: { color: "#ffffffff" },
            },
            { featureType: "highway", elementType: "labels.icon", stylers: { visibility: "on" } },
            {
              featureType: "arterial",
              elementType: "geometry",
              stylers: { visibility: "on", weight: "2" },
            },
            {
              featureType: "arterial",
              elementType: "geometry.fill",
              stylers: { color: "#fbfffeff" },
            },
            {
              featureType: "arterial",
              elementType: "geometry.stroke",
              stylers: { color: "#cacfcfff" },
            },
            { featureType: "arterial", elementType: "labels", stylers: { visibility: "off" } },
            {
              featureType: "arterial",
              elementType: "labels.text.fill",
              stylers: { color: "#999999ff" },
            },
            {
              featureType: "arterial",
              elementType: "labels.text.stroke",
              stylers: { color: "#ffffffff" },
            },
            {
              featureType: "local",
              elementType: "geometry",
              stylers: { visibility: "on", weight: "1" },
            },
            { featureType: "local", elementType: "geometry.fill", stylers: { color: "#fbfffeff" } },
            {
              featureType: "local",
              elementType: "geometry.stroke",
              stylers: { color: "#cacfcfff" },
            },
            { featureType: "local", elementType: "labels", stylers: { visibility: "off" } },
            {
              featureType: "local",
              elementType: "labels.text.fill",
              stylers: { color: "#999999ff" },
            },
            {
              featureType: "local",
              elementType: "labels.text.stroke",
              stylers: { color: "#ffffffff" },
            },
            {
              featureType: "railway",
              elementType: "geometry",
              stylers: { visibility: "off", weight: "1" },
            },
            {
              featureType: "railway",
              elementType: "geometry.fill",
              stylers: { color: "#9494941a" },
            },
            {
              featureType: "railway",
              elementType: "geometry.stroke",
              stylers: { color: "#ffffff1a" },
            },
            {
              featureType: "subway",
              elementType: "geometry",
              stylers: { visibility: "off", weight: "1" },
            },
            {
              featureType: "subway",
              elementType: "geometry.fill",
              stylers: { color: "#c3bed433" },
            },
            {
              featureType: "subway",
              elementType: "geometry.stroke",
              stylers: { color: "#ffffff33" },
            },
            { featureType: "subway", elementType: "labels", stylers: { visibility: "off" } },
            {
              featureType: "subway",
              elementType: "labels.text.fill",
              stylers: { color: "#979c9aff" },
            },
            {
              featureType: "subway",
              elementType: "labels.text.stroke",
              stylers: { color: "#ffffffff" },
            },
            { featureType: "continent", elementType: "labels", stylers: { visibility: "on" } },
            { featureType: "continent", elementType: "labels.icon", stylers: { visibility: "on" } },
            {
              featureType: "continent",
              elementType: "labels.text.fill",
              stylers: { color: "#333333ff" },
            },
            {
              featureType: "continent",
              elementType: "labels.text.stroke",
              stylers: { color: "#ffffffff" },
            },
            { featureType: "city", elementType: "labels.icon", stylers: { visibility: "on" } },
            { featureType: "city", elementType: "labels", stylers: { visibility: "on" } },
            {
              featureType: "city",
              elementType: "labels.text.fill",
              stylers: { color: "#454d50ff" },
            },
            {
              featureType: "city",
              elementType: "labels.text.stroke",
              stylers: { color: "#ffffffff" },
            },
            { featureType: "town", elementType: "labels.icon", stylers: { visibility: "on" } },
            { featureType: "town", elementType: "labels", stylers: { visibility: "off" } },
            {
              featureType: "town",
              elementType: "labels.text.fill",
              stylers: { color: "#454d50ff" },
            },
            {
              featureType: "town",
              elementType: "labels.text.stroke",
              stylers: { color: "#ffffffff" },
            },
            { featureType: "road", elementType: "labels", stylers: { visibility: "off" } },
            { featureType: "road", elementType: "geometry.fill", stylers: { color: "#fbfffeff" } },
            { featureType: "poilabel", elementType: "labels.icon", stylers: { visibility: "off" } },
            {
              featureType: "districtlabel",
              elementType: "labels.icon",
              stylers: { visibility: "off" },
            },
            {
              featureType: "poilabel",
              elementType: "labels.text.fill",
              stylers: { color: "#999999ff" },
            },
            {
              featureType: "districtlabel",
              elementType: "labels.text.fill",
              stylers: { color: "#888fa0ff" },
            },
            {
              featureType: "transportation",
              elementType: "geometry",
              stylers: { color: "#d1dbdbff" },
            },
            { featureType: "companylabel", elementType: "labels", stylers: { visibility: "off" } },
            {
              featureType: "restaurantlabel",
              elementType: "labels",
              stylers: { visibility: "off" },
            },
            {
              featureType: "lifeservicelabel",
              elementType: "labels",
              stylers: { visibility: "off" },
            },
            {
              featureType: "carservicelabel",
              elementType: "labels",
              stylers: { visibility: "off" },
            },
            { featureType: "financelabel", elementType: "labels", stylers: { visibility: "off" } },
            { featureType: "otherlabel", elementType: "labels", stylers: { visibility: "off" } },
            { featureType: "village", elementType: "labels", stylers: { visibility: "off" } },
            { featureType: "district", elementType: "labels", stylers: { visibility: "off" } },
            { featureType: "land", elementType: "geometry", stylers: { color: "#edf3f3ff" } },
            {
              featureType: "nationalway",
              elementType: "geometry.stroke",
              stylers: { color: "#cacfcfff" },
            },
            {
              featureType: "provincialway",
              elementType: "geometry.stroke",
              stylers: { color: "#cacfcfff" },
            },
            {
              featureType: "cityhighway",
              elementType: "geometry.stroke",
              stylers: { color: "#cacfcfff" },
            },
            {
              featureType: "road",
              elementType: "geometry.stroke",
              stylers: { color: "#cacfcfff" },
            },
            {
              featureType: "subwaylabel",
              elementType: "labels.icon",
              stylers: { visibility: "off" },
            },
            { featureType: "subwaylabel", elementType: "labels", stylers: { visibility: "off" } },
            {
              featureType: "tertiarywaysign",
              elementType: "labels.icon",
              stylers: { visibility: "off" },
            },
            {
              featureType: "tertiarywaysign",
              elementType: "labels",
              stylers: { visibility: "off" },
            },
            {
              featureType: "provincialwaysign",
              elementType: "labels.icon",
              stylers: { visibility: "off" },
            },
            {
              featureType: "provincialwaysign",
              elementType: "labels",
              stylers: { visibility: "off" },
            },
            {
              featureType: "nationalwaysign",
              elementType: "labels.icon",
              stylers: { visibility: "off" },
            },
            {
              featureType: "nationalwaysign",
              elementType: "labels",
              stylers: { visibility: "off" },
            },
            {
              featureType: "highwaysign",
              elementType: "labels.icon",
              stylers: { visibility: "off" },
            },
            { featureType: "highwaysign", elementType: "labels", stylers: { visibility: "off" } },
            {
              featureType: "nationalway",
              elementType: "geometry.fill",
              stylers: { color: "#fbfffeff" },
            },
            {
              featureType: "nationalway",
              elementType: "labels.text.fill",
              stylers: { color: "#999999ff" },
            },
            {
              featureType: "provincialway",
              elementType: "labels.text.fill",
              stylers: { color: "#999999ff" },
            },
            {
              featureType: "cityhighway",
              elementType: "labels.text.fill",
              stylers: { color: "#999999ff" },
            },
            {
              featureType: "cityhighway",
              elementType: "labels.text.stroke",
              stylers: { color: "#ffffffff" },
            },
            {
              featureType: "highway",
              stylers: { level: "6", curZoomRegionId: "0", curZoomRegion: "6-8" },
            },
            {
              featureType: "highway",
              stylers: { level: "7", curZoomRegionId: "0", curZoomRegion: "6-8" },
            },
            {
              featureType: "highway",
              stylers: { level: "8", curZoomRegionId: "0", curZoomRegion: "6-8" },
            },
            {
              featureType: "highway",
              elementType: "geometry",
              stylers: {
                visibility: "off",
                level: "6",
                curZoomRegionId: "0",
                curZoomRegion: "6-8",
              },
            },
            {
              featureType: "highway",
              elementType: "geometry",
              stylers: {
                visibility: "off",
                level: "7",
                curZoomRegionId: "0",
                curZoomRegion: "6-8",
              },
            },
            {
              featureType: "highway",
              elementType: "geometry",
              stylers: {
                visibility: "off",
                level: "8",
                curZoomRegionId: "0",
                curZoomRegion: "6-8",
              },
            },
            {
              featureType: "highway",
              elementType: "labels",
              stylers: {
                visibility: "off",
                level: "6",
                curZoomRegionId: "0",
                curZoomRegion: "6-8",
              },
            },
            {
              featureType: "highway",
              elementType: "labels",
              stylers: {
                visibility: "off",
                level: "7",
                curZoomRegionId: "0",
                curZoomRegion: "6-8",
              },
            },
            {
              featureType: "highway",
              elementType: "labels",
              stylers: {
                visibility: "off",
                level: "8",
                curZoomRegionId: "0",
                curZoomRegion: "6-8",
              },
            },
            {
              featureType: "nationalway",
              stylers: { level: "6", curZoomRegionId: "0", curZoomRegion: "6-8" },
            },
            {
              featureType: "nationalway",
              stylers: { level: "7", curZoomRegionId: "0", curZoomRegion: "6-8" },
            },
            {
              featureType: "nationalway",
              stylers: { level: "8", curZoomRegionId: "0", curZoomRegion: "6-8" },
            },
            {
              featureType: "nationalway",
              elementType: "geometry",
              stylers: {
                visibility: "off",
                level: "6",
                curZoomRegionId: "0",
                curZoomRegion: "6-8",
              },
            },
            {
              featureType: "nationalway",
              elementType: "geometry",
              stylers: {
                visibility: "off",
                level: "7",
                curZoomRegionId: "0",
                curZoomRegion: "6-8",
              },
            },
            {
              featureType: "nationalway",
              elementType: "geometry",
              stylers: {
                visibility: "off",
                level: "8",
                curZoomRegionId: "0",
                curZoomRegion: "6-8",
              },
            },
            {
              featureType: "nationalway",
              elementType: "labels",
              stylers: {
                visibility: "off",
                level: "6",
                curZoomRegionId: "0",
                curZoomRegion: "6-8",
              },
            },
            {
              featureType: "nationalway",
              elementType: "labels",
              stylers: {
                visibility: "off",
                level: "7",
                curZoomRegionId: "0",
                curZoomRegion: "6-8",
              },
            },
            {
              featureType: "nationalway",
              elementType: "labels",
              stylers: {
                visibility: "off",
                level: "8",
                curZoomRegionId: "0",
                curZoomRegion: "6-8",
              },
            },
            {
              featureType: "provincialway",
              stylers: { level: "8", curZoomRegionId: "0", curZoomRegion: "8-8" },
            },
            {
              featureType: "provincialway",
              elementType: "geometry",
              stylers: {
                visibility: "off",
                level: "8",
                curZoomRegionId: "0",
                curZoomRegion: "8-8",
              },
            },
            {
              featureType: "provincialway",
              elementType: "labels",
              stylers: {
                visibility: "off",
                level: "8",
                curZoomRegionId: "0",
                curZoomRegion: "8-8",
              },
            },
            {
              featureType: "cityhighway",
              stylers: { level: "6", curZoomRegionId: "0", curZoomRegion: "6-8" },
            },
            {
              featureType: "cityhighway",
              stylers: { level: "7", curZoomRegionId: "0", curZoomRegion: "6-8" },
            },
            {
              featureType: "cityhighway",
              stylers: { level: "8", curZoomRegionId: "0", curZoomRegion: "6-8" },
            },
            {
              featureType: "cityhighway",
              elementType: "geometry",
              stylers: {
                visibility: "off",
                level: "6",
                curZoomRegionId: "0",
                curZoomRegion: "6-8",
              },
            },
            {
              featureType: "cityhighway",
              elementType: "geometry",
              stylers: {
                visibility: "off",
                level: "7",
                curZoomRegionId: "0",
                curZoomRegion: "6-8",
              },
            },
            {
              featureType: "cityhighway",
              elementType: "geometry",
              stylers: {
                visibility: "off",
                level: "8",
                curZoomRegionId: "0",
                curZoomRegion: "6-8",
              },
            },
            {
              featureType: "cityhighway",
              elementType: "labels",
              stylers: {
                visibility: "off",
                level: "6",
                curZoomRegionId: "0",
                curZoomRegion: "6-8",
              },
            },
            {
              featureType: "cityhighway",
              elementType: "labels",
              stylers: {
                visibility: "off",
                level: "7",
                curZoomRegionId: "0",
                curZoomRegion: "6-8",
              },
            },
            {
              featureType: "cityhighway",
              elementType: "labels",
              stylers: {
                visibility: "off",
                level: "8",
                curZoomRegionId: "0",
                curZoomRegion: "6-8",
              },
            },
            {
              featureType: "cityhighway",
              elementType: "geometry.fill",
              stylers: { color: "#fbfffeff" },
            },
            {
              featureType: "water",
              elementType: "labels.text.fill",
              stylers: { color: "#8f5a33ff" },
            },
            {
              featureType: "water",
              elementType: "labels.text.stroke",
              stylers: { color: "#ffffffff" },
            },
            {
              featureType: "country",
              elementType: "labels.text.fill",
              stylers: { color: "#8f5a33ff" },
            },
            {
              featureType: "country",
              elementType: "labels.text.stroke",
              stylers: { color: "#ffffffff" },
            },
            { featureType: "country", elementType: "labels.text", stylers: { fontsize: "28" } },
            { featureType: "manmade", elementType: "geometry", stylers: { color: "#dfe7e7ff" } },
            {
              featureType: "provincialway",
              elementType: "geometry.fill",
              stylers: { color: "#fbfffeff" },
            },
            {
              featureType: "tertiaryway",
              elementType: "geometry.fill",
              stylers: { color: "#fbfffeff" },
            },
            {
              featureType: "manmade",
              elementType: "labels.text.fill",
              stylers: { color: "#999999ff" },
            },
            {
              featureType: "manmade",
              elementType: "labels.text.stroke",
              stylers: { color: "#ffffffff" },
            },
            {
              featureType: "scenicspots",
              elementType: "labels.text.fill",
              stylers: { color: "#999999ff" },
            },
            {
              featureType: "scenicspots",
              elementType: "labels.text.stroke",
              stylers: { color: "#ffffffff" },
            },
            {
              featureType: "airportlabel",
              elementType: "labels.text.fill",
              stylers: { color: "#999999ff" },
            },
            {
              featureType: "airportlabel",
              elementType: "labels.icon",
              stylers: { visibility: "off" },
            },
            {
              featureType: "scenicspotslabel",
              elementType: "labels.text.fill",
              stylers: { color: "#999999ff" },
            },
            {
              featureType: "scenicspotslabel",
              elementType: "labels.icon",
              stylers: { visibility: "off" },
            },
            {
              featureType: "educationlabel",
              elementType: "labels.text.fill",
              stylers: { color: "#999999ff" },
            },
            {
              featureType: "educationlabel",
              elementType: "labels.icon",
              stylers: { visibility: "off" },
            },
            {
              featureType: "medicallabel",
              elementType: "labels.text.fill",
              stylers: { color: "#999999ff" },
            },
            {
              featureType: "medicallabel",
              elementType: "labels.icon",
              stylers: { visibility: "off" },
            },
            {
              featureType: "companylabel",
              elementType: "labels.icon",
              stylers: { visibility: "off" },
            },
            {
              featureType: "restaurantlabel",
              elementType: "labels.icon",
              stylers: { visibility: "off" },
            },
            {
              featureType: "hotellabel",
              elementType: "labels.icon",
              stylers: { visibility: "off" },
            },
            { featureType: "hotellabel", elementType: "labels", stylers: { visibility: "off" } },
            {
              featureType: "shoppinglabel",
              elementType: "labels.icon",
              stylers: { visibility: "off" },
            },
            { featureType: "shoppinglabel", elementType: "labels", stylers: { visibility: "off" } },
            {
              featureType: "lifeservicelabel",
              elementType: "labels.icon",
              stylers: { visibility: "off" },
            },
            {
              featureType: "carservicelabel",
              elementType: "labels.icon",
              stylers: { visibility: "off" },
            },
            {
              featureType: "transportationlabel",
              elementType: "labels.icon",
              stylers: { visibility: "off" },
            },
            {
              featureType: "transportationlabel",
              elementType: "labels",
              stylers: { visibility: "off" },
            },
            {
              featureType: "financelabel",
              elementType: "labels.icon",
              stylers: { visibility: "off" },
            },
            {
              featureType: "entertainment",
              elementType: "geometry",
              stylers: { color: "#d1dbdbff" },
            },
            { featureType: "estate", elementType: "geometry", stylers: { color: "#d1dbdbff" } },
            { featureType: "shopping", elementType: "geometry", stylers: { color: "#d1dbdbff" } },
            {
              featureType: "education",
              elementType: "labels.text.fill",
              stylers: { color: "#999999ff" },
            },
            {
              featureType: "education",
              elementType: "labels.text.stroke",
              stylers: { color: "#ffffffff" },
            },
            {
              featureType: "medical",
              elementType: "labels.text.fill",
              stylers: { color: "#999999ff" },
            },
            {
              featureType: "medical",
              elementType: "labels.text.stroke",
              stylers: { color: "#ffffffff" },
            },
            {
              featureType: "transportation",
              elementType: "labels.text.fill",
              stylers: { color: "#999999ff" },
            },
            {
              featureType: "transportation",
              elementType: "labels.text.stroke",
              stylers: { color: "#ffffffff" },
            },
            { featureType: "road", elementType: "geometry", stylers: { visibility: "on" } },
            { featureType: "nationalway", elementType: "labels", stylers: { visibility: "off" } },
            { featureType: "provincialway", elementType: "labels", stylers: { visibility: "off" } },
            { featureType: "cityhighway", elementType: "labels", stylers: { visibility: "off" } },
            { featureType: "tertiaryway", elementType: "labels", stylers: { visibility: "off" } },
            { featureType: "fourlevelway", elementType: "labels", stylers: { visibility: "off" } },
            { featureType: "water", elementType: "labels", stylers: { visibility: "off" } },
            { featureType: "manmade", elementType: "labels", stylers: { visibility: "off" } },
            { featureType: "education", elementType: "labels", stylers: { visibility: "off" } },
            { featureType: "medical", elementType: "labels", stylers: { visibility: "off" } },
            { featureType: "scenicspots", elementType: "labels", stylers: { visibility: "off" } },
            {
              featureType: "transportation",
              elementType: "labels",
              stylers: { visibility: "off" },
            },
            {
              featureType: "entertainmentlabel",
              elementType: "labels.icon",
              stylers: { visibility: "off" },
            },
            {
              featureType: "estatelabel",
              elementType: "labels.icon",
              stylers: { visibility: "off" },
            },
            {
              featureType: "businesstowerlabel",
              elementType: "labels.icon",
              stylers: { visibility: "off" },
            },
            {
              featureType: "governmentlabel",
              elementType: "labels.icon",
              stylers: { visibility: "off" },
            },
            {
              featureType: "governmentlabel",
              elementType: "labels",
              stylers: { visibility: "off" },
            },
            {
              featureType: "businesstowerlabel",
              elementType: "labels",
              stylers: { visibility: "off" },
            },
            { featureType: "estatelabel", elementType: "labels", stylers: { visibility: "off" } },
            {
              featureType: "entertainmentlabel",
              elementType: "labels",
              stylers: { visibility: "off" },
            },
            { featureType: "medicallabel", elementType: "labels", stylers: { visibility: "off" } },
            {
              featureType: "educationlabel",
              elementType: "labels",
              stylers: { visibility: "off" },
            },
            {
              featureType: "scenicspotslabel",
              elementType: "labels",
              stylers: { visibility: "off" },
            },
            { featureType: "airportlabel", elementType: "labels", stylers: { visibility: "off" } },
            { featureType: "poilabel", elementType: "labels", stylers: { visibility: "off" } },
          ],
        },
        m = l(),
        f = [
          { label: "分布图", value: "statistics" },
          { label: "聚合图", value: "cluster" },
          { label: "迁移图", value: "curve" },
        ],
        p = { lng: 109.792816, lat: 27.702774 },
        h = { parent: "#fc0", child: "#fff" },
        y = {
          lineIn: "rgb(80, 255, 53, 0.9)",
          lineOut: "rgb(255, 53, 80, 0.9)",
          lineNormal: "rgb(53, 80, 255, 0.9)",
          markerIn: "rgba(80, 255, 53, 0.8)",
          markerOut: "rgb(255, 53, 80, 0.8)",
          markerNormal: "rgb(53, 80, 255, 0.8)",
          pointFill: "rgba(255, 255, 255, 1)",
          pointShadow: "rgba(255, 255, 255, 0.6)",
          pointTextLight: "#fff",
          pointTextDark: "#000",
        };
      var g = {
          name: "NeuLocationAnalysisMap",
          props: {
            statisticsData: { type: Array, required: !1 },
            clusterData: { type: Array, required: !1 },
            curveData: { type: Array, required: !1 },
            showMapType: { type: String, required: !1 },
          },
          data() {
            return {
              bmap: null,
              labelLayer: null,
              clusterLayer: null,
              curveLineLayer: null,
              curveMarkerLayer: null,
              curveTextLayer: null,
              mapType: "statistics",
              mapThemeName: "purpleStyle",
              mapThemes: o(),
              statisticsList: [],
              currProvinceIndex: -1,
              currCityIndex: -1,
              clusterList: [],
              mapTypeDialog: !1,
              curveList: [],
              curveDirection: "all",
              curveDirectionOptions: [
                { label: "全部路线", value: "all" },
                { label: "离开主校区所在地", value: "o" },
                { label: "返回主校区所在地", value: "i" },
                { label: "主校区所在地外迁移", value: "n" },
              ],
              curveDirectionDialog: !1,
            };
          },
          async mounted() {
            ((this.bmap = await r(this.$appConf.bMapAk, "map_container", {
              tilt: 30,
              heading: 0,
              center: [p.lng, p.lat],
              zoom: 5,
              themeName: this.mapThemeName,
            })),
              this.showMapType && f.findIndex((e) => e.value === this.showMapType) > -1
                ? ((this.mapType = this.showMapType),
                  "statistics" === this.mapType && this.statisticsData
                    ? this.initStatisticsMapLayer()
                    : "cluster" === this.mapType && this.clusterData
                      ? this.initClusterMapLayer()
                      : "curve" === this.mapType && this.curveData && this.initCurveMapLayer())
                : this.statisticsData
                  ? ((this.mapType = "statistics"), this.initStatisticsMapLayer())
                  : this.clusterData
                    ? ((this.mapType = "cluster"), this.initClusterMapLayer())
                    : this.curveData && ((this.mapType = "curve"), this.initCurveMapLayer()));
          },
          watch: {
            statisticsData(e) {
              this.labelLayer && this.loadStatisticsMapData();
            },
            clusterData(e) {
              this.clusterLayer && this.loadClusterMapData();
            },
            curveData(e) {
              this.curveLineLayer && this.loadCurveMapData();
            },
            showMapType(e) {
              f.findIndex((t) => t.value === e) > -1 && this.changeMapType(e);
            },
          },
          computed: {
            mapOptions() {
              const e = [];
              return (
                this.statisticsData && e.push(f[0]),
                this.clusterData && e.push(f[1]),
                this.curveData && e.push(f[2]),
                e
              );
            },
            tipTextColor() {
              return this.isDarkTheme ? "text-white" : "";
            },
            isDarkTheme() {
              return "darkStyle" === this.mapThemeName || "purpleStyle" === this.mapThemeName;
            },
          },
          methods: {
            initStatisticsMapLayer() {
              ((this.labelLayer = new this.bmap.mapvgl.LabelLayer({
                textAlign: "center",
                textColor: h.parent,
                borderColor: "#666",
                backgroundColor: "#666",
                padding: [0, 0],
                borderRadius: 5,
                fontSize: 12,
                lineHeight: 16,
                enablePicked: !0,
                onClick: (e) => {
                  this.showNextLevelData(e);
                },
              })),
                this.bmap.view.addLayer(this.labelLayer),
                this.loadStatisticsMapData());
            },
            loadStatisticsMapData() {
              const e = {
                province: "其它",
                abbreviation: "其它",
                zoom: 5,
                amount: 0,
                cities: [],
                lng: 115.330802,
                lat: 17.022071,
              };
              ((this.statisticsList = this.statisticsData.reduce(
                (t, i) =>
                  m[i.province]
                    ? ((i.abbreviation = m[i.province].abbreviation),
                      (i.zoom = m[i.province].zoom),
                      (i.lng = m[i.province].lng),
                      (i.lat = m[i.province].lat),
                      t.concat(i))
                    : ((e.amount += i.amount), t),
                [],
              )),
                0 !== e.amount && (this.statisticsList = this.statisticsList.concat(e)),
                this.showCountryData());
            },
            showCountryData() {
              ((this.currProvinceIndex = -1),
                (this.currCityIndex = -1),
                this.bmap.map.centerAndZoom(new this.bmap.BMapGL.Point(p.lng, p.lat), 5));
              const e = [];
              for (const t of this.statisticsList) {
                const i = this.getCenterPoint(t.abbreviation, t.lng, t.lat);
                e.push({
                  geometry: { type: "Point", coordinates: [i.lng, i.lat] },
                  properties: {
                    text: `${t.abbreviation}:${t.amount}`,
                    textColor: "其它" === t.abbreviation ? h.child : h.parent,
                  },
                });
              }
              this.labelLayer.setData(e);
            },
            showProvinceData() {
              const e = this.statisticsList[this.currProvinceIndex],
                t = this.getCenterPoint(e.abbreviation, e.lng, e.lat);
              this.bmap.map.centerAndZoom(new this.bmap.BMapGL.Point(t.lng, t.lat), e.zoom);
              const i = [];
              for (const a of e.cities) {
                const e = this.getCenterPoint(a.city, a.lng, a.lat);
                i.push({
                  geometry: { type: "Point", coordinates: [e.lng, e.lat] },
                  properties: {
                    text: `${a.city}:${a.amount}`,
                    textColor:
                      1 === a.districts.length && "" === a.districts[0].district
                        ? h.child
                        : h.parent,
                  },
                });
              }
              this.labelLayer.setData(i);
            },
            showCityData() {
              const e = this.statisticsList[this.currProvinceIndex].cities[this.currCityIndex],
                t = this.getCenterPoint(e.city, e.lng, e.lat);
              this.bmap.map.centerAndZoom(new this.bmap.BMapGL.Point(t.lng, t.lat), 10);
              const i = [];
              for (const a of e.districts)
                i.push({
                  geometry: { type: "Point", coordinates: [a.lng, a.lat] },
                  properties: { text: `${a.district}:${a.amount}`, textColor: h.child },
                });
              this.labelLayer.setData(i);
            },
            showNextLevelData(e) {
              if (-1 === this.currProvinceIndex) {
                if ("其它" === this.statisticsList[e.dataIndex].abbreviation) return;
                ((this.currProvinceIndex = e.dataIndex),
                  (this.currCityIndex = -1),
                  this.showProvinceData());
              } else if (this.currProvinceIndex > -1 && -1 === this.currCityIndex) {
                if (
                  1 ===
                    this.statisticsList[this.currProvinceIndex].cities[e.dataIndex].districts
                      .length &&
                  "" ===
                    this.statisticsList[this.currProvinceIndex].cities[e.dataIndex].districts[0]
                      .district
                )
                  return;
                ((this.currCityIndex = e.dataIndex), this.showCityData());
              }
            },
            resetProvinceData() {
              if (-1 === this.currCityIndex) return;
              const e = { dataIndex: this.currProvinceIndex };
              ((this.currProvinceIndex = -1), this.showNextLevelData(e));
            },
            initClusterMapLayer() {
              ((this.clusterLayer = new this.bmap.mapvgl.ClusterLayer({
                minSize: 30,
                maxSize: 50,
                clusterRadius: 150,
                gradient: { 0: "green", 0.5: "blue", 1: "red" },
                maxZoom: 15,
                minZoom: 5,
                showText: !0,
                minPoints: 5,
                textOptions: {
                  fontSize: 12,
                  color: "white",
                  format: (e) => (e >= 1e4 ? Math.round(e / 1e3) / 10 + "万" : e),
                },
                enablePicked: !1,
              })),
                this.bmap.view.addLayer(this.clusterLayer),
                this.loadClusterMapData());
            },
            loadClusterMapData() {
              ((this.clusterList = this.clusterData), this.showClusterData());
            },
            showClusterData() {
              (this.bmap.map.centerAndZoom(new this.bmap.BMapGL.Point(p.lng, p.lat), 5),
                this.clusterLayer.setData(
                  this.clusterList.reduce(
                    (e, t) =>
                      e.concat({ geometry: { type: "Point", coordinates: [t.lng, t.lat] } }),
                    [],
                  ),
                ));
            },
            initCurveMapLayer() {
              ((this.curveLineLayer = new this.bmap.mapvgl.LineLayer({
                blend: "lighter",
                style: "arrow",
                color: y.lineNormal,
              })),
                (this.curveMarkerLayer = new this.bmap.mapvgl.MarkerListLayer({
                  fillColor: y.markerNormal,
                  fillSize: 35,
                  shadowSize: 35,
                  fillBorderWidth: 0,
                  shadowBorderWidth: 0,
                })),
                (this.curveTextLayer = new this.bmap.mapvgl.TextLayer({
                  color: this.isDarkTheme ? y.pointTextLight : y.pointTextDark,
                  fontSize: 12,
                  collides: !1,
                  offset: [0, 16],
                })),
                this.bmap.view.addLayer(this.curveTextLayer),
                this.bmap.view.addLayer(this.curveMarkerLayer),
                this.bmap.view.addLayer(this.curveLineLayer),
                this.loadCurveMapData());
            },
            loadCurveMapData() {
              ((this.curveList = this.curveData), this.showCurveMapData());
            },
            showCurveMapData() {
              this.bmap.map.centerAndZoom(new this.bmap.BMapGL.Point(p.lng, p.lat), 5);
              const e = new this.bmap.mapvgl.OdCurve(),
                t = [],
                i = [],
                a = [],
                s = [];
              for (const l of this.curveList) {
                if ("all" !== this.curveDirection && this.curveDirection !== l.direction) continue;
                e.setOptions({
                  points: [
                    this.getCenterPoint(
                      this.getProvinceAbb(l.start_place),
                      l.start_lng,
                      l.start_lat,
                    ),
                    this.getCenterPoint(this.getProvinceAbb(l.end_place), l.end_lng, l.end_lat),
                  ],
                });
                const o = e.getPoints();
                if (
                  (t.push({
                    geometry: { type: "LineString", coordinates: o },
                    properties: {
                      color:
                        "i" === l.direction
                          ? y.lineIn
                          : "o" === l.direction
                            ? y.lineOut
                            : y.lineNormal,
                    },
                  }),
                  i.push({
                    geometry: { type: "Point", coordinates: o[Math.round(o.length / 2)] },
                    properties: {
                      text: l.amount >= 1e4 ? Math.round(l.amount / 1e3) / 10 + "万" : l.amount,
                      fillColor:
                        "i" === l.direction
                          ? y.markerIn
                          : "o" === l.direction
                            ? y.markerOut
                            : y.markerNormal,
                    },
                  }),
                  -1 === s.indexOf(l.start_place))
                ) {
                  s.push(l.start_place);
                  const e = this.getCenterPoint(
                    this.getProvinceAbb(l.start_place),
                    l.start_lng,
                    l.start_lat,
                  );
                  (i.push({
                    geometry: { type: "Point", coordinates: [e.lng, e.lat] },
                    properties: {
                      fillColor: y.pointFill,
                      fillSize: 8,
                      shadowColor: y.pointShadow,
                      shadowSize: 15,
                    },
                  }),
                    a.push({
                      geometry: { type: "Point", coordinates: [e.lng, e.lat] },
                      properties: { text: l.start_place },
                    }));
                }
                if (-1 === s.indexOf(l.end_place)) {
                  s.push(l.end_place);
                  const e = this.getCenterPoint(
                    this.getProvinceAbb(l.end_place),
                    l.end_lng,
                    l.end_lat,
                  );
                  (i.push({
                    geometry: { type: "Point", coordinates: [e.lng, e.lat] },
                    properties: {
                      fillColor: y.pointFill,
                      fillSize: 8,
                      shadowColor: y.pointShadow,
                      shadowSize: 15,
                    },
                  }),
                    a.push({
                      geometry: { type: "Point", coordinates: [e.lng, e.lat] },
                      properties: { text: l.end_place },
                    }));
                }
              }
              (this.curveLineLayer.setData(t),
                this.curveMarkerLayer.setData(i),
                this.curveTextLayer.setData(a));
            },
            changeMapType(e) {
              this.mapType !== e &&
                ((this.mapType = e),
                this.bmap.view.removeAllLayers(),
                "statistics" === this.mapType && this.labelLayer
                  ? (this.bmap.view.addLayer(this.labelLayer), this.showCountryData())
                  : "statistics" !== this.mapType || this.labelLayer
                    ? "cluster" === this.mapType && this.clusterLayer
                      ? (this.bmap.view.addLayer(this.clusterLayer),
                        this.bmap.map.centerAndZoom(new this.bmap.BMapGL.Point(p.lng, p.lat), 5))
                      : "cluster" !== this.mapType || this.clusterLayer
                        ? "curve" === this.mapType && this.curveLineLayer
                          ? (this.bmap.view.addLayer(this.curveTextLayer),
                            this.bmap.view.addLayer(this.curveMarkerLayer),
                            this.bmap.view.addLayer(this.curveLineLayer),
                            this.bmap.map.centerAndZoom(
                              new this.bmap.BMapGL.Point(p.lng, p.lat),
                              5,
                            ))
                          : "curve" !== this.mapType ||
                            this.curveLineLayer ||
                            this.initCurveMapLayer()
                        : this.initClusterMapLayer()
                    : this.initStatisticsMapLayer());
            },
            changeMapStyle(e) {
              this.mapThemeName !== e &&
                ((this.mapThemeName = e),
                n(this.bmap.map, this.mapThemeName),
                this.curveTextLayer &&
                  this.curveTextLayer.setOptions({
                    color: this.isDarkTheme ? y.pointTextLight : y.pointTextDark,
                  }));
            },
            getCenterPoint(e, t, i) {
              let a = { lng: t, lat: i };
              try {
                ((a = this.bmap.mapv.utilCityCenter.getCenterByCityName(e)),
                  a || (a = { lng: t, lat: i }));
              } catch (s) {}
              return a;
            },
            getProvinceAbb(e) {
              return m[e] ? m[e].abbreviation : e;
            },
            changeCurveDirection(e) {
              this.curveDirection !== e && ((this.curveDirection = e), this.showCurveMapData());
            },
            curveDirectionColor(e) {
              return "n" === e
                ? "color:rgb(53, 80, 255, 0.9);"
                : "i" === e
                  ? "color:rgb(80, 255, 53, 0.9);"
                  : "o" === e
                    ? "color:rgb(255, 53, 80, 0.9);"
                    : "color:black;";
            },
          },
        },
        b = g,
        v = (i("3fc4"), i("2877")),
        _ = i("9c40"),
        T = i("0170"),
        x = i("0016"),
        w = i("24e8"),
        k = i("1c1c"),
        q = i("66e5"),
        C = i("7f67"),
        L = i("714f"),
        V = i("eebe"),
        D = i.n(V),
        S = Object(v["a"])(b, a, s, !1, null, null, null);
      t["a"] = S.exports;
      (D()(S, "components", {
        QBtn: _["a"],
        QItemLabel: T["a"],
        QIcon: x["a"],
        QDialog: w["a"],
        QList: k["a"],
        QItem: q["a"],
      }),
        D()(S, "directives", { ClosePopup: C["a"], Ripple: L["a"] }));
    },
    "971b": function (e, t, i) {
      "use strict";
      var a = function () {
          var e = this,
            t = e.$createElement,
            i = e._self._c || t;
          return i(
            "div",
            [
              0 == e.infoConfigList.length
                ? i(
                    "div",
                    [
                      i(
                        "q-card",
                        {
                          staticStyle: {
                            height: "3.5rem",
                            "align-items": "center",
                            display: "flex",
                            "justify-content": "center",
                          },
                          attrs: { flat: "" },
                        },
                        [e._v("\n      暂无查询内容\n    ")],
                      ),
                    ],
                    1,
                  )
                : e._e(),
              i(
                "q-card",
                { staticClass: "full-width", attrs: { flat: "" } },
                e._l(e.infoConfigList, function (t, a) {
                  return i(
                    "q-list",
                    { key: a, attrs: { bordered: "" } },
                    [
                      i("q-card-section", [
                        "T" == t.type || "N" == t.type || "R" == t.type
                          ? i(
                              "div",
                              { class: e.$q.screen.lt.sm ? "" : "text-left" },
                              [
                                e._v(e._s(t.label)),
                                i("q-btn", {
                                  attrs: { dense: "", icon: "cancel", flat: "", color: "grey" },
                                  on: {
                                    click: function (t) {
                                      return e.closeIndex(a);
                                    },
                                  },
                                }),
                              ],
                              1,
                            )
                          : e._e(),
                        "T" == t.type
                          ? i(
                              "div",
                              { staticClass: "col-12" },
                              [
                                i("q-input", {
                                  attrs: {
                                    outlined: "",
                                    dense: "",
                                    "hide-bottom-space": "",
                                    "lazy-rules": "",
                                  },
                                  model: {
                                    value: e.infoResultList[a],
                                    callback: function (t) {
                                      e.$set(e.infoResultList, a, t);
                                    },
                                    expression: "infoResultList[index]",
                                  },
                                }),
                              ],
                              1,
                            )
                          : e._e(),
                        "N" == t.type
                          ? i("div", { staticClass: "row col-12" }, [
                              i(
                                "div",
                                { staticClass: "col-12" },
                                [
                                  i("q-input", {
                                    attrs: {
                                      type: "number",
                                      outlined: "",
                                      dense: "",
                                      "input-class": "text-right",
                                      "hide-bottom-space": "",
                                      "lazy-rules": "",
                                    },
                                    scopedSlots: e._u(
                                      [
                                        {
                                          key: "prepend",
                                          fn: function () {
                                            return [
                                              i("span", { staticClass: "text-body2" }, [
                                                e._v("大于等于"),
                                              ]),
                                            ];
                                          },
                                          proxy: !0,
                                        },
                                      ],
                                      null,
                                      !0,
                                    ),
                                    model: {
                                      value: e.infoResultList[a].more,
                                      callback: function (t) {
                                        e.$set(e.infoResultList[a], "more", e._n(t));
                                      },
                                      expression: "infoResultList[index].more",
                                    },
                                  }),
                                ],
                                1,
                              ),
                              i(
                                "div",
                                { staticClass: "col-12", staticStyle: { "margin-top": "6px" } },
                                [
                                  i("q-input", {
                                    attrs: {
                                      type: "number",
                                      outlined: "",
                                      dense: "",
                                      "input-class": "text-right",
                                      "hide-bottom-space": "",
                                      "lazy-rules": "",
                                    },
                                    scopedSlots: e._u(
                                      [
                                        {
                                          key: "prepend",
                                          fn: function () {
                                            return [
                                              i("span", { staticClass: "text-body2" }, [
                                                e._v("小于等于"),
                                              ]),
                                            ];
                                          },
                                          proxy: !0,
                                        },
                                      ],
                                      null,
                                      !0,
                                    ),
                                    model: {
                                      value: e.infoResultList[a].less,
                                      callback: function (t) {
                                        e.$set(e.infoResultList[a], "less", e._n(t));
                                      },
                                      expression: "infoResultList[index].less",
                                    },
                                  }),
                                ],
                                1,
                              ),
                            ])
                          : e._e(),
                        "R" == t.type
                          ? i(
                              "div",
                              { staticClass: "row col-12" },
                              [
                                "R" == t.selectPattern
                                  ? i(
                                      "div",
                                      { staticClass: "q-gutter-sm" },
                                      [
                                        e._l(t.options, function (t, s) {
                                          return i("q-radio", {
                                            key: s,
                                            attrs: { val: t.value, label: t.label },
                                            model: {
                                              value: e.infoResultList[a],
                                              callback: function (t) {
                                                e.$set(e.infoResultList, a, t);
                                              },
                                              expression: "infoResultList[index]",
                                            },
                                          });
                                        }),
                                        i("q-radio", {
                                          directives: [
                                            {
                                              name: "show",
                                              rawName: "v-show",
                                              value: t.isOther,
                                              expression: "item.isOther",
                                            },
                                          ],
                                          attrs: { val: "其他", label: "其他" },
                                          model: {
                                            value: e.infoResultList[a],
                                            callback: function (t) {
                                              e.$set(e.infoResultList, a, t);
                                            },
                                            expression: "infoResultList[index]",
                                          },
                                        }),
                                      ],
                                      2,
                                    )
                                  : e._e(),
                                "S" == t.selectPattern
                                  ? i("q-select", {
                                      staticStyle: { width: "330px" },
                                      attrs: {
                                        outlined: "",
                                        dense: "",
                                        options: t.options,
                                        "emit-value": "",
                                        "map-options": "",
                                        label: "请选择",
                                      },
                                      model: {
                                        value: e.infoResultList[a],
                                        callback: function (t) {
                                          e.$set(e.infoResultList, a, t);
                                        },
                                        expression: "infoResultList[index]",
                                      },
                                    })
                                  : e._e(),
                              ],
                              1,
                            )
                          : e._e(),
                      ]),
                    ],
                    1,
                  );
                }),
                1,
              ),
              i(
                "q-footer",
                {
                  staticClass: "bg-white text-primary",
                  staticStyle: { height: "2.8rem", "margin-left": "0px", border: "0px" },
                  attrs: { bordered: "" },
                },
                [
                  i("q-btn", {
                    staticStyle: { width: "40%", height: "100%" },
                    attrs: { outline: "", color: "grey", label: "重置" },
                    on: { click: e.resetInfoResultList },
                  }),
                  i("q-btn", {
                    staticStyle: { width: "60%", height: "100%" },
                    attrs: { color: "primary", label: "查询" },
                    on: { click: e.searchInfo },
                  }),
                ],
                1,
              ),
            ],
            1,
          );
        },
        s = [],
        l =
          (i("a434"),
          i("ddb0"),
          {
            name: "NeuCollectSearch",
            props: { configList: Array, configSet: Array, returnForm: Array },
            data() {
              return {
                infoResultList: [],
                infoConfigList: [],
                configsRessultList: [],
                beforResult: [],
              };
            },
            mounted() {
              this.initModelValue(this.configList);
            },
            watch: {
              configList(e) {
                this.initModelValue(e);
              },
              configSet(e) {
                this.configSet = null !== e ? e : [];
              },
            },
            methods: {
              initModelValue(e) {
                ((this.infoConfigList = JSON.parse(JSON.stringify(e))),
                  (this.infoResultList = []),
                  this.returnForm.length > 0 && (this.beforResult = this.returnForm));
                for (const t in this.infoConfigList)
                  ("T" === this.infoConfigList[t].type && this.$set(this.infoResultList, t, ""),
                    "N" === this.infoConfigList[t].type &&
                      this.$set(this.infoResultList, t, { more: null, less: null }),
                    "R" === this.infoConfigList[t].type && this.$set(this.infoResultList, t, null),
                    ("T" !== this.infoConfigList[t].type &&
                      "N" !== this.infoConfigList[t].type &&
                      "R" !== this.infoConfigList[t].type) ||
                      (-1 !==
                        this.beforResult.findIndex(
                          (e) =>
                            e.label === this.infoConfigList[t].label &&
                            e.index === this.infoConfigList[t].index,
                        ) &&
                        this.$set(
                          this.infoResultList,
                          t,
                          this.beforResult[
                            this.beforResult.findIndex(
                              (e) =>
                                e.label === this.infoConfigList[t].label &&
                                e.index === this.infoConfigList[t].index,
                            )
                          ].value,
                        )));
              },
              searchInfo() {
                this.configsRessultList = [];
                for (const e in this.infoResultList)
                  ("" !== this.infoResultList[e] &&
                    "T" === this.infoConfigList[e].type &&
                    this.configsRessultList.push({
                      index: this.configSet.findIndex(
                        (t) =>
                          t.label === this.infoConfigList[e].label &&
                          t.index === this.infoConfigList[e].index,
                      ),
                      value: this.infoResultList[e],
                      configType: this.infoConfigList[e].type,
                      label: this.infoConfigList[e].label,
                    }),
                    "N" !== this.infoConfigList[e].type ||
                      (null === this.infoResultList[e].more &&
                        null === this.infoResultList[e].less) ||
                      this.configsRessultList.push({
                        index: this.configSet.findIndex(
                          (t) =>
                            t.label === this.infoConfigList[e].label &&
                            t.index === this.infoConfigList[e].index,
                        ),
                        value: this.infoResultList[e],
                        configType: this.infoConfigList[e].type,
                        label: this.infoConfigList[e].label,
                      }),
                    null !== this.infoResultList[e] &&
                      "R" === this.infoConfigList[e].type &&
                      ("R" === this.infoConfigList[e].selectPattern
                        ? this.configsRessultList.push({
                            index: this.configSet.findIndex(
                              (t) =>
                                t.label === this.infoConfigList[e].label &&
                                t.index === this.infoConfigList[e].index,
                            ),
                            value: this.infoResultList[e],
                            configType: this.infoConfigList[e].type,
                            label: this.infoConfigList[e].label,
                          })
                        : "S" === this.infoConfigList[e].selectPattern &&
                          this.configsRessultList.push({
                            index: this.configSet.findIndex(
                              (t) =>
                                t.label === this.infoConfigList[e].label &&
                                t.index === this.infoConfigList[e].index,
                            ),
                            value: this.infoResultList[e],
                            configType: this.infoConfigList[e].type + "S",
                            label: this.infoConfigList[e].label,
                          })));
                (this.$emit("input", [...this.configsRessultList]),
                  this.$emit("saveForm", JSON.parse(JSON.stringify(this.configsRessultList))),
                  (this.beforResult = JSON.parse(JSON.stringify(this.configsRessultList))));
              },
              resetInfoResultList() {
                ((this.infoResultList = []), (this.beforResult = []), this.$emit("reset"));
              },
              closeIndex(e) {
                this.configList.splice(e, 1);
              },
            },
          }),
        o = l,
        n = i("2877"),
        r = i("f09f"),
        c = i("1c1c"),
        u = i("a370"),
        d = i("9c40"),
        m = i("27f9"),
        f = i("3786"),
        p = i("ddd8"),
        h = i("7ff0"),
        y = i("eebe"),
        g = i.n(y),
        b = Object(n["a"])(o, a, s, !1, null, null, null);
      t["a"] = b.exports;
      g()(b, "components", {
        QCard: r["a"],
        QList: c["a"],
        QCardSection: u["a"],
        QBtn: d["a"],
        QInput: m["a"],
        QRadio: f["a"],
        QSelect: p["a"],
        QFooter: h["a"],
      });
    },
    "974f": function (e, t, i) {
      "use strict";
      var a = function () {
          var e = this,
            t = this,
            i = t.$createElement,
            a = t._self._c || i;
          return a(
            "div",
            { staticClass: "full-width row items-center", class: { "bg-orange": t.riskTip } },
            [
              t.conf.label
                ? a(
                    "div",
                    {
                      class: [
                        {
                          "neu-css-before-red-asterisk": t.conf.required,
                          "text-right": t.lTextRight,
                          "neu-css-after-colon": t.lColon,
                        },
                        t.lClass,
                      ],
                    },
                    [
                      t._v(
                        "\n    " + t._s(t.lNo ? t.lNo + ". " : "") + t._s(t.conf.label) + "\n  ",
                      ),
                    ],
                  )
                : t._e(),
              t.conf.hint
                ? a(
                    "span",
                    { staticClass: "q-ml-xs", staticStyle: { color: "grey", "font-size": "13px" } },
                    [t._v(t._s(t.conf.hint))],
                  )
                : t._e(),
              a(
                "div",
                { class: t.cClass },
                [
                  "T" != t.conf.type || t.readonly
                    ? t._e()
                    : a("q-input", {
                        attrs: {
                          outlined: "",
                          dense: "",
                          type: t.conf.isTextarea ? "textarea" : "text",
                          placeholder: t.readonly ? "" : t.textPlaceholder,
                          "hide-bottom-space": "",
                          "lazy-rules": t.conf.required,
                          rules: [
                            function (e) {
                              return !!e || !t.conf.required || t.readonly || "请填写该项";
                            },
                            function (i) {
                              return (
                                (t.conf.maxLength && (!i || i.length <= t.conf.maxLength)) ||
                                !t.conf.maxLength ||
                                "最多填写" + e.conf.maxLength + "个字"
                              );
                            },
                            function (i) {
                              return (
                                (t.conf.minLength && (!i || i.length >= t.conf.minLength)) ||
                                !t.conf.minLength ||
                                "最少填写" + e.conf.minLength + "个字"
                              );
                            },
                          ],
                          readonly: t.readonly,
                        },
                        model: {
                          value: t.modelValue,
                          callback: function (e) {
                            t.modelValue = e;
                          },
                          expression: "modelValue",
                        },
                      }),
                  "T" == t.conf.type && t.readonly ? a("span", [t._v(t._s(t.modelValue))]) : t._e(),
                  "N" == t.conf.type
                    ? a("q-input", {
                        attrs: {
                          outlined: "",
                          dense: "",
                          type: "number",
                          step: t.numberStep,
                          placeholder: t.readonly ? "" : t.numberPlaceholder,
                          "hide-bottom-space": "",
                          "lazy-rules": t.conf.required,
                          rules: [
                            function (e) {
                              return t.checkNumber(e);
                            },
                          ],
                          readonly: t.readonly,
                        },
                        model: {
                          value: t.modelValue,
                          callback: function (e) {
                            t.modelValue = t._n(e);
                          },
                          expression: "modelValue",
                        },
                      })
                    : t._e(),
                  "R" == t.conf.type && "S" == t.conf.selectPattern
                    ? a("q-select", {
                        attrs: {
                          outlined: "",
                          dense: "",
                          "hide-bottom-space": "",
                          "lazy-rules": "",
                          rules: [
                            function (e) {
                              return (
                                !!e || 0 == e || !t.conf.required || t.readonly || "请选择该项"
                              );
                            },
                          ],
                          options: t.conf.options,
                          "emit-value": "",
                          "map-options": "",
                          readonly: t.readonly,
                          clearable: !t.conf.required,
                        },
                        model: {
                          value: t.modelValue,
                          callback: function (e) {
                            t.modelValue = e;
                          },
                          expression: "modelValue",
                        },
                      })
                    : t._e(),
                  "R" != t.conf.type || "S" == t.conf.selectPattern || t.conf.isOther
                    ? t._e()
                    : a("q-field", {
                        attrs: {
                          borderless: "",
                          dense: "",
                          "hide-bottom-space": "",
                          "lazy-rules": "",
                          rules: [
                            function (e) {
                              return (
                                !!e || 0 == e || !t.conf.required || t.readonly || "请填写该项"
                              );
                            },
                          ],
                          value: t.modelValue,
                          readonly: t.readonly,
                        },
                        scopedSlots: t._u(
                          [
                            {
                              key: "control",
                              fn: function () {
                                return t._l(t.conf.options, function (e) {
                                  return a("q-radio", {
                                    key: e.value,
                                    staticClass: "q-mr-sm",
                                    attrs: {
                                      dense: "",
                                      val: e.value,
                                      label: e.label,
                                      disable: t.readonly,
                                    },
                                    model: {
                                      value: t.modelValue,
                                      callback: function (e) {
                                        t.modelValue = e;
                                      },
                                      expression: "modelValue",
                                    },
                                  });
                                });
                              },
                              proxy: !0,
                            },
                          ],
                          null,
                          !1,
                          3508303379,
                        ),
                      }),
                  "R" == t.conf.type && "S" != t.conf.selectPattern && t.conf.isOther
                    ? a("q-field", {
                        attrs: {
                          borderless: "",
                          dense: "",
                          "hide-bottom-space": "",
                          "lazy-rules": "",
                          rules: [
                            function (e) {
                              return (
                                ((!!e || 0 == e) && ("其他" != e || !!t.modelValue.other)) ||
                                !t.conf.required ||
                                t.readonly ||
                                "请填写该项"
                              );
                            },
                          ],
                          value: t.modelValue.value,
                          readonly: t.readonly,
                        },
                        scopedSlots: t._u(
                          [
                            {
                              key: "control",
                              fn: function () {
                                return [
                                  t._l(t.conf.options, function (e) {
                                    return a("q-radio", {
                                      key: e.value,
                                      staticClass: "q-mr-sm",
                                      attrs: {
                                        dense: "",
                                        val: e.value,
                                        label: e.label,
                                        disable: t.readonly,
                                      },
                                      on: { input: t.toggleOther },
                                      model: {
                                        value: t.modelValue.value,
                                        callback: function (e) {
                                          t.$set(t.modelValue, "value", e);
                                        },
                                        expression: "modelValue.value",
                                      },
                                    });
                                  }),
                                  a("q-radio", {
                                    staticClass: "q-mr-sm",
                                    attrs: {
                                      dense: "",
                                      val: "其他",
                                      label: "其他",
                                      disable: t.readonly,
                                    },
                                    on: { input: t.toggleOther },
                                    model: {
                                      value: t.modelValue.value,
                                      callback: function (e) {
                                        t.$set(t.modelValue, "value", e);
                                      },
                                      expression: "modelValue.value",
                                    },
                                  }),
                                  a("q-input", {
                                    attrs: {
                                      outlined: "",
                                      dense: "",
                                      placeholder: t.readonly ? "" : "请填写其他内容",
                                      disable: "其他" != t.modelValue.value,
                                      readonly: t.readonly,
                                      "input-style": "text-indent:10px;",
                                    },
                                    model: {
                                      value: t.modelValue.other,
                                      callback: function (e) {
                                        t.$set(t.modelValue, "other", e);
                                      },
                                      expression: "modelValue.other",
                                    },
                                  }),
                                ];
                              },
                              proxy: !0,
                            },
                          ],
                          null,
                          !1,
                          2131013615,
                        ),
                      })
                    : t._e(),
                  "C" != t.conf.type || t.conf.isOther
                    ? t._e()
                    : a("q-field", {
                        attrs: {
                          borderless: "",
                          dense: "",
                          "hide-bottom-space": "",
                          "lazy-rules": "",
                          rules: [
                            function (e) {
                              return (
                                ((!!e || 0 == e) && e.length > 0) ||
                                !t.conf.required ||
                                t.readonly ||
                                "请填写该项"
                              );
                            },
                          ],
                          value: t.modelValue,
                          readonly: t.readonly,
                        },
                        scopedSlots: t._u(
                          [
                            {
                              key: "control",
                              fn: function () {
                                return t._l(t.conf.options, function (e) {
                                  return a("q-checkbox", {
                                    key: e.value,
                                    staticClass: "q-mr-sm",
                                    attrs: {
                                      dense: "",
                                      val: e.value,
                                      label: e.label,
                                      disable: t.readonly,
                                    },
                                    model: {
                                      value: t.modelValue,
                                      callback: function (e) {
                                        t.modelValue = e;
                                      },
                                      expression: "modelValue",
                                    },
                                  });
                                });
                              },
                              proxy: !0,
                            },
                          ],
                          null,
                          !1,
                          740339825,
                        ),
                      }),
                  "C" == t.conf.type && t.conf.isOther
                    ? a("q-field", {
                        attrs: {
                          borderless: "",
                          dense: "",
                          "hide-bottom-space": "",
                          "lazy-rules": "",
                          rules: [
                            function (e) {
                              return (
                                ((!!e || 0 == e) &&
                                  e.length > 0 &&
                                  (e.indexOf("其他") < 0 || !!t.modelValue.other)) ||
                                !t.conf.required ||
                                t.readonly ||
                                "请填写该项"
                              );
                            },
                          ],
                          value: t.modelValue.value,
                          readonly: t.readonly,
                        },
                        scopedSlots: t._u(
                          [
                            {
                              key: "control",
                              fn: function () {
                                return [
                                  t._l(t.conf.options, function (e) {
                                    return a("q-checkbox", {
                                      key: e.value,
                                      staticClass: "q-mr-sm",
                                      attrs: {
                                        dense: "",
                                        val: e.value,
                                        label: e.label,
                                        disable: t.readonly,
                                      },
                                      on: { input: t.toggleOther },
                                      model: {
                                        value: t.modelValue.value,
                                        callback: function (e) {
                                          t.$set(t.modelValue, "value", e);
                                        },
                                        expression: "modelValue.value",
                                      },
                                    });
                                  }),
                                  a("q-checkbox", {
                                    staticClass: "q-mr-sm",
                                    attrs: {
                                      dense: "",
                                      val: "其他",
                                      label: "其他",
                                      disable: t.readonly,
                                    },
                                    on: { input: t.toggleOther },
                                    model: {
                                      value: t.modelValue.value,
                                      callback: function (e) {
                                        t.$set(t.modelValue, "value", e);
                                      },
                                      expression: "modelValue.value",
                                    },
                                  }),
                                  a("q-input", {
                                    attrs: {
                                      outlined: "",
                                      dense: "",
                                      placeholder: t.readonly ? "" : "请填写其他内容",
                                      disable:
                                        !t.modelValue.value ||
                                        t.modelValue.value.indexOf("其他") < 0,
                                      readonly: t.readonly,
                                      "input-style": "text-indent:10px;",
                                    },
                                    model: {
                                      value: t.modelValue.other,
                                      callback: function (e) {
                                        t.$set(t.modelValue, "other", e);
                                      },
                                      expression: "modelValue.other",
                                    },
                                  }),
                                ];
                              },
                              proxy: !0,
                            },
                          ],
                          null,
                          !1,
                          4047062791,
                        ),
                      })
                    : t._e(),
                  "D" == t.conf.type && "T" != t.conf.dtPattern && "DT" != t.conf.dtPattern
                    ? a("q-field", {
                        attrs: {
                          outlined: "",
                          dense: "",
                          "hide-bottom-space": "",
                          "lazy-rules": "",
                          rules: [
                            function (e) {
                              return !!e || !t.conf.required || t.readonly || "请填写该项";
                            },
                          ],
                          value: t.modelValue,
                          readonly: t.readonly,
                        },
                        scopedSlots: t._u(
                          [
                            {
                              key: "control",
                              fn: function () {
                                return [t._v(t._s(t.modelValue))];
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
                                            target: !t.readonly,
                                          },
                                        },
                                        [
                                          a(
                                            "q-date",
                                            {
                                              attrs: { flat: "", minimal: "", mask: "YYYY-MM-DD" },
                                              model: {
                                                value: t.modelValue,
                                                callback: function (e) {
                                                  t.modelValue = e;
                                                },
                                                expression: "modelValue",
                                              },
                                            },
                                            [
                                              a(
                                                "div",
                                                { staticClass: "row items-center justify-end" },
                                                [
                                                  a("q-btn", {
                                                    directives: [
                                                      {
                                                        name: "close-popup",
                                                        rawName: "v-close-popup",
                                                      },
                                                    ],
                                                    attrs: { dense: "", label: "关闭", flat: "" },
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
                                    1,
                                  ),
                                  !t.conf.required && t.modelValue
                                    ? a("q-icon", {
                                        staticClass: "cursor-pointer",
                                        attrs: { name: "cancel", color: t.clearIconColor },
                                        on: {
                                          mouseover: function (e) {
                                            t.clearIconColor = null;
                                          },
                                          mouseleave: function (e) {
                                            t.clearIconColor = "grey";
                                          },
                                          click: function (e) {
                                            (e.stopPropagation(), (t.modelValue = null));
                                          },
                                        },
                                      })
                                    : t._e(),
                                ];
                              },
                              proxy: !0,
                            },
                          ],
                          null,
                          !1,
                          1103268238,
                        ),
                      })
                    : t._e(),
                  "D" == t.conf.type && "T" == t.conf.dtPattern
                    ? a("q-field", {
                        attrs: {
                          outlined: "",
                          dense: "",
                          "hide-bottom-space": "",
                          "lazy-rules": "",
                          rules: [
                            function (e) {
                              return !!e || !t.conf.required || t.readonly || "请填写该项";
                            },
                          ],
                          value: t.modelValue,
                          readonly: t.readonly,
                        },
                        scopedSlots: t._u(
                          [
                            {
                              key: "control",
                              fn: function () {
                                return [t._v(t._s(t.modelValue))];
                              },
                              proxy: !0,
                            },
                            {
                              key: "append",
                              fn: function () {
                                return [
                                  a(
                                    "q-icon",
                                    {
                                      staticClass: "cursor-pointer",
                                      attrs: { name: "access_time" },
                                    },
                                    [
                                      a(
                                        "q-popup-proxy",
                                        {
                                          attrs: {
                                            "transition-show": "scale",
                                            "transition-hide": "scale",
                                            target: !t.readonly,
                                          },
                                        },
                                        [
                                          a(
                                            "q-time",
                                            {
                                              attrs: {
                                                flat: "",
                                                mask: "HH:mm",
                                                format24h: "",
                                                landscape: "",
                                              },
                                              model: {
                                                value: t.modelValue,
                                                callback: function (e) {
                                                  t.modelValue = e;
                                                },
                                                expression: "modelValue",
                                              },
                                            },
                                            [
                                              a(
                                                "div",
                                                { staticClass: "row items-center justify-end" },
                                                [
                                                  a("q-btn", {
                                                    directives: [
                                                      {
                                                        name: "close-popup",
                                                        rawName: "v-close-popup",
                                                      },
                                                    ],
                                                    attrs: { dense: "", label: "关闭", flat: "" },
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
                                    1,
                                  ),
                                  !t.conf.required && t.modelValue
                                    ? a("q-icon", {
                                        staticClass: "cursor-pointer",
                                        attrs: { name: "cancel", color: t.clearIconColor },
                                        on: {
                                          mouseover: function (e) {
                                            t.clearIconColor = null;
                                          },
                                          mouseleave: function (e) {
                                            t.clearIconColor = "grey";
                                          },
                                          click: function (e) {
                                            (e.stopPropagation(), (t.modelValue = null));
                                          },
                                        },
                                      })
                                    : t._e(),
                                ];
                              },
                              proxy: !0,
                            },
                          ],
                          null,
                          !1,
                          4024011308,
                        ),
                      })
                    : t._e(),
                  "D" == t.conf.type && "DT" == t.conf.dtPattern
                    ? a("q-field", {
                        attrs: {
                          outlined: "",
                          dense: "",
                          "hide-bottom-space": "",
                          "lazy-rules": "",
                          rules: [
                            function (e) {
                              return !!e || !t.conf.required || t.readonly || "请填写该项";
                            },
                          ],
                          value: t.modelValue,
                          readonly: t.readonly,
                        },
                        scopedSlots: t._u(
                          [
                            {
                              key: "control",
                              fn: function () {
                                return [t._v(t._s(t.modelValue))];
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
                                            target: !t.readonly,
                                          },
                                        },
                                        [
                                          a(
                                            "q-date",
                                            {
                                              attrs: {
                                                flat: "",
                                                minimal: "",
                                                mask: "YYYY-MM-DD HH:mm",
                                              },
                                              model: {
                                                value: t.modelValue,
                                                callback: function (e) {
                                                  t.modelValue = e;
                                                },
                                                expression: "modelValue",
                                              },
                                            },
                                            [
                                              a(
                                                "div",
                                                { staticClass: "row items-center justify-end" },
                                                [
                                                  a("q-btn", {
                                                    directives: [
                                                      {
                                                        name: "close-popup",
                                                        rawName: "v-close-popup",
                                                      },
                                                    ],
                                                    attrs: { dense: "", label: "关闭", flat: "" },
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
                                    1,
                                  ),
                                  a(
                                    "q-icon",
                                    {
                                      staticClass: "cursor-pointer",
                                      attrs: { name: "access_time" },
                                    },
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
                                            "q-time",
                                            {
                                              attrs: {
                                                flat: "",
                                                mask: "YYYY-MM-DD HH:mm",
                                                format24h: "",
                                                landscape: "",
                                              },
                                              model: {
                                                value: t.modelValue,
                                                callback: function (e) {
                                                  t.modelValue = e;
                                                },
                                                expression: "modelValue",
                                              },
                                            },
                                            [
                                              a(
                                                "div",
                                                { staticClass: "row items-center justify-end" },
                                                [
                                                  a("q-btn", {
                                                    directives: [
                                                      {
                                                        name: "close-popup",
                                                        rawName: "v-close-popup",
                                                      },
                                                    ],
                                                    attrs: { dense: "", label: "关闭", flat: "" },
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
                                    1,
                                  ),
                                  !t.conf.required && t.modelValue
                                    ? a("q-icon", {
                                        staticClass: "cursor-pointer",
                                        attrs: { name: "cancel", color: t.clearIconColor },
                                        on: {
                                          mouseover: function (e) {
                                            t.clearIconColor = null;
                                          },
                                          mouseleave: function (e) {
                                            t.clearIconColor = "grey";
                                          },
                                          click: function (e) {
                                            (e.stopPropagation(), (t.modelValue = null));
                                          },
                                        },
                                      })
                                    : t._e(),
                                ];
                              },
                              proxy: !0,
                            },
                          ],
                          null,
                          !1,
                          1355562672,
                        ),
                      })
                    : t._e(),
                  "S" == t.conf.type && t.modelValue
                    ? a("q-img", {
                        attrs: { src: t.modelValue, width: "100px" },
                        on: {
                          click: function (e) {
                            t.dialog = !t.readonly;
                          },
                        },
                      })
                    : t._e(),
                  "S" != t.conf.type || t.modelValue
                    ? t._e()
                    : a("q-input", {
                        attrs: {
                          borderless: "",
                          dense: "",
                          type: "text",
                          placeholder: "未签名",
                          "hide-bottom-space": "",
                          "lazy-rules": t.conf.required,
                          rules: [
                            function (e) {
                              return !!e || !t.conf.required || t.readonly || "请签名";
                            },
                          ],
                          readonly: !0,
                        },
                        on: {
                          click: function (e) {
                            t.dialog = !t.readonly;
                          },
                        },
                        model: {
                          value: t.modelValue,
                          callback: function (e) {
                            t.modelValue = e;
                          },
                          expression: "modelValue",
                        },
                      }),
                  "S" == t.conf.type
                    ? a(
                        "q-dialog",
                        {
                          attrs: { position: "bottom" },
                          model: {
                            value: t.dialog,
                            callback: function (e) {
                              t.dialog = e;
                            },
                            expression: "dialog",
                          },
                        },
                        [
                          a(
                            "q-card",
                            { staticClass: "full-width", attrs: { flat: "" } },
                            [
                              a(
                                "q-card-section",
                                { staticClass: "row items-center justify-between" },
                                [
                                  a("div", { staticClass: "text-bold" }, [t._v("请签名")]),
                                  a("q-btn", {
                                    directives: [{ name: "close-popup", rawName: "v-close-popup" }],
                                    attrs: {
                                      icon: "close",
                                      flat: "",
                                      round: "",
                                      dense: "",
                                      size: "sm",
                                    },
                                  }),
                                ],
                                1,
                              ),
                              a(
                                "q-card-section",
                                { staticClass: "bg-grey-3 q-pa-xs" },
                                [
                                  a("vue-esign", {
                                    ref: "esign",
                                    attrs: {
                                      height: 100,
                                      isCrop: !0,
                                      lineWidth: 3,
                                      lineColor: "#000000",
                                    },
                                  }),
                                ],
                                1,
                              ),
                              a(
                                "q-card-section",
                                { staticClass: "q-gutter-sm row justify-end" },
                                [
                                  a("q-btn", {
                                    attrs: { unelevated: "", label: "清除" },
                                    on: { click: t.resetEsign },
                                  }),
                                  a("q-btn", {
                                    attrs: { unelevated: "", color: "primary", label: "完成" },
                                    on: { click: t.generateEsign },
                                  }),
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
                  "A" != t.conf.type || t.readonly
                    ? t._e()
                    : a("q-input", {
                        attrs: {
                          outlined: "",
                          dense: "",
                          type: "text",
                          placeholder: "省、市、区、街道",
                          "hide-bottom-space": "",
                          "lazy-rules": t.conf.required,
                          rules: [
                            function (e) {
                              return !!e || !t.conf.required || t.readonly || "请选择";
                            },
                          ],
                          readonly: !0,
                        },
                        on: { click: t.openPcasDialog },
                        model: {
                          value: t.modelValue.value,
                          callback: function (e) {
                            t.$set(t.modelValue, "value", e);
                          },
                          expression: "modelValue.value",
                        },
                      }),
                  "A" == t.conf.type && t.readonly
                    ? a("span", [t._v(t._s(t.modelValue.value))])
                    : t._e(),
                  "A" != t.conf.type || t.readonly
                    ? t._e()
                    : a(
                        "q-dialog",
                        {
                          attrs: { position: "bottom" },
                          model: {
                            value: t.dialog,
                            callback: function (e) {
                              t.dialog = e;
                            },
                            expression: "dialog",
                          },
                        },
                        [
                          a(
                            "q-card",
                            { staticClass: "full-width", attrs: { flat: "" } },
                            [
                              a(
                                "q-card-section",
                                { staticClass: "row items-center justify-between" },
                                [
                                  a(
                                    "div",
                                    { staticClass: "text-bold" },
                                    [
                                      t._v("\n            请选择地区\n            "),
                                      a(
                                        "span",
                                        {
                                          staticClass: "text-primary cursor-pointer q-ml-sm",
                                          on: { click: t.autoLocation },
                                        },
                                        [t._v("自动定位")],
                                      ),
                                      a("neu-geo-location", {
                                        attrs: { needAddr: !0, nonauto: !0, location: t.research },
                                        on: {
                                          completed: t.locationCompleted,
                                          error: t.locationError,
                                        },
                                      }),
                                    ],
                                    1,
                                  ),
                                  a("q-btn", {
                                    directives: [{ name: "close-popup", rawName: "v-close-popup" }],
                                    attrs: {
                                      icon: "close",
                                      flat: "",
                                      round: "",
                                      dense: "",
                                      size: "sm",
                                    },
                                  }),
                                ],
                                1,
                              ),
                              a("q-separator"),
                              a(
                                "q-card-section",
                                [
                                  a(
                                    "q-list",
                                    t._l(t.pcas.code, function (e, i) {
                                      return a(
                                        "q-item",
                                        { key: e, attrs: { dense: "" } },
                                        [
                                          a(
                                            "q-item-section",
                                            {
                                              on: {
                                                click: function (a) {
                                                  return t.extendPcasByLevel(e, i + 1);
                                                },
                                              },
                                            },
                                            [a("q-item-label", [t._v(t._s(t.pcas.name[i]))])],
                                            1,
                                          ),
                                          a(
                                            "q-item-section",
                                            {
                                              attrs: { side: "" },
                                              on: {
                                                click: function (a) {
                                                  return t.extendPcasByLevel(e, i + 1);
                                                },
                                              },
                                            },
                                            [
                                              a(
                                                "q-item-label",
                                                [
                                                  a("q-icon", {
                                                    attrs: {
                                                      name: "keyboard_arrow_right",
                                                      size: "xs",
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
                                      );
                                    }),
                                    1,
                                  ),
                                  a(
                                    "q-item-label",
                                    {
                                      directives: [
                                        {
                                          name: "show",
                                          rawName: "v-show",
                                          value: 1 == t.currLevel,
                                          expression: "currLevel == 1",
                                        },
                                      ],
                                      attrs: { caption: "" },
                                    },
                                    [t._v("请选择省（自治区、直辖市）")],
                                  ),
                                  a(
                                    "q-item-label",
                                    {
                                      directives: [
                                        {
                                          name: "show",
                                          rawName: "v-show",
                                          value: 2 == t.currLevel,
                                          expression: "currLevel == 2",
                                        },
                                      ],
                                      attrs: { caption: "" },
                                    },
                                    [t._v("请选择市（州、盟、县、区）")],
                                  ),
                                  a(
                                    "q-item-label",
                                    {
                                      directives: [
                                        {
                                          name: "show",
                                          rawName: "v-show",
                                          value: 3 == t.currLevel,
                                          expression: "currLevel == 3",
                                        },
                                      ],
                                      attrs: { caption: "" },
                                    },
                                    [t._v("请选择区（市、县、旗、街道、镇、乡）")],
                                  ),
                                  a(
                                    "q-item-label",
                                    {
                                      directives: [
                                        {
                                          name: "show",
                                          rawName: "v-show",
                                          value: 4 == t.currLevel,
                                          expression: "currLevel == 4",
                                        },
                                      ],
                                      attrs: { caption: "" },
                                    },
                                    [t._v("请选择街道（镇、乡）")],
                                  ),
                                ],
                                1,
                              ),
                              a("q-separator"),
                              a(
                                "q-card-section",
                                [
                                  a(
                                    "q-list",
                                    t._l(t.currList, function (e) {
                                      return a(
                                        "q-item",
                                        { key: e.code, attrs: { dense: "" } },
                                        [
                                          a(
                                            "q-item-section",
                                            {
                                              on: {
                                                click: function (i) {
                                                  return t.extendPcas(e.code, e.name);
                                                },
                                              },
                                            },
                                            [
                                              t._v(
                                                "\n                " +
                                                  t._s(e.name) +
                                                  "\n              ",
                                              ),
                                            ],
                                          ),
                                        ],
                                        1,
                                      );
                                    }),
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
                  "F" == t.conf.type
                    ? a("q-field", {
                        attrs: {
                          borderless: "",
                          dense: "",
                          "hide-bottom-space": "",
                          "lazy-rules": "",
                          rules: [
                            function (e) {
                              return (
                                (!!e && (e || []).length > 0) ||
                                !t.conf.required ||
                                t.readonly ||
                                "请选择"
                              );
                            },
                          ],
                          value: t.modelValue,
                          readonly: t.readonly,
                        },
                        scopedSlots: t._u(
                          [
                            {
                              key: "control",
                              fn: function () {
                                return [
                                  0 == t.isHarmonyOS
                                    ? a("q-uploader", {
                                        staticClass: "full-width",
                                        attrs: {
                                          flat: "",
                                          color: "grey",
                                          url: t.uploader,
                                          "auto-upload": "",
                                          filter: t.checkFile,
                                          readonly: t.readonly,
                                          accept:
                                            ".doc, .docx, .xls, .xlsx, .ppt, .pptx, .pdf, .zip, .rar, .7z, .jpg, .jpeg, .png, audio/*, image/*",
                                        },
                                        on: {
                                          start: t.startUpload,
                                          finish: t.finishUpload,
                                          uploaded: t.afterUploaded,
                                          rejected: t.onRejected,
                                          removed: t.afterRemoved,
                                        },
                                        scopedSlots: t._u(
                                          [
                                            {
                                              key: "header",
                                              fn: function (e) {
                                                return [
                                                  a(
                                                    "div",
                                                    {
                                                      staticClass:
                                                        "row no-wrap items-center q-pa-sm q-gutter-xs",
                                                    },
                                                    [
                                                      a("div", { staticClass: "col" }, [
                                                        t._v(
                                                          "最多" +
                                                            t._s(t.conf.fileCount) +
                                                            "个文件(" +
                                                            t._s(t.conf.fileSize) +
                                                            "MB以内)",
                                                        ),
                                                      ]),
                                                      !t.readonly &&
                                                      e.canAddFiles &&
                                                      (t.modelValue || []).length < t.conf.fileCount
                                                        ? a(
                                                            "q-btn",
                                                            {
                                                              attrs: {
                                                                type: "a",
                                                                icon: "add_box",
                                                                round: "",
                                                                dense: "",
                                                                flat: "",
                                                              },
                                                            },
                                                            [
                                                              a("q-uploader-add-trigger"),
                                                              a("q-tooltip", [
                                                                t._v("选择文件并上传"),
                                                              ]),
                                                            ],
                                                            1,
                                                          )
                                                        : t._e(),
                                                    ],
                                                    1,
                                                  ),
                                                ];
                                              },
                                            },
                                            {
                                              key: "list",
                                              fn: function (e) {
                                                return [
                                                  a(
                                                    "q-list",
                                                    { attrs: { separator: "" } },
                                                    [
                                                      t._l(e.files, function (i) {
                                                        return a(
                                                          "q-item",
                                                          { key: i.name },
                                                          [
                                                            a(
                                                              "q-item-section",
                                                              [
                                                                a(
                                                                  "q-item-label",
                                                                  {
                                                                    staticClass:
                                                                      "full-width ellipsis cursor-pointer",
                                                                    on: {
                                                                      click: function (e) {
                                                                        return t.downloadUploaderFile(
                                                                          i,
                                                                        );
                                                                      },
                                                                    },
                                                                  },
                                                                  [
                                                                    t._v(
                                                                      "\n                    " +
                                                                        t._s(i.name) +
                                                                        "\n                  ",
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
                                                                t.readonly
                                                                  ? t._e()
                                                                  : a(
                                                                      "q-btn",
                                                                      {
                                                                        attrs: {
                                                                          flat: "",
                                                                          dense: "",
                                                                          color: "negative",
                                                                          icon: "delete",
                                                                          size: "sm",
                                                                        },
                                                                        on: {
                                                                          click: function (t) {
                                                                            return e.removeFile(i);
                                                                          },
                                                                        },
                                                                      },
                                                                      [
                                                                        a("q-tooltip", [
                                                                          t._v("删除"),
                                                                        ]),
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
                                                      t._l(
                                                        t.matchingUploadedFiles(
                                                          t.modelValue,
                                                          e.files,
                                                        ),
                                                        function (e) {
                                                          return a(
                                                            "q-item",
                                                            { key: e.servername },
                                                            [
                                                              a(
                                                                "q-item-section",
                                                                [
                                                                  a(
                                                                    "q-item-label",
                                                                    {
                                                                      staticClass:
                                                                        "full-width ellipsis cursor-pointer",
                                                                      on: {
                                                                        click: function (i) {
                                                                          return t.downloadFile(
                                                                            e.link,
                                                                            e.servername,
                                                                          );
                                                                        },
                                                                      },
                                                                    },
                                                                    [
                                                                      t._v(
                                                                        "\n                    " +
                                                                          t._s(e.srcname) +
                                                                          "\n                  ",
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
                                                                  t.readonly
                                                                    ? t._e()
                                                                    : a(
                                                                        "q-btn",
                                                                        {
                                                                          attrs: {
                                                                            flat: "",
                                                                            dense: "",
                                                                            color: "negative",
                                                                            icon: "delete",
                                                                            size: "sm",
                                                                          },
                                                                          on: {
                                                                            click: function (i) {
                                                                              return t.removeFile(
                                                                                e.servername,
                                                                              );
                                                                            },
                                                                          },
                                                                        },
                                                                        [
                                                                          a("q-tooltip", [
                                                                            t._v("删除"),
                                                                          ]),
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
                                                      ),
                                                    ],
                                                    2,
                                                  ),
                                                ];
                                              },
                                            },
                                          ],
                                          null,
                                          !1,
                                          865478785,
                                        ),
                                      })
                                    : t._e(),
                                  1 == t.isHarmonyOS
                                    ? a("q-uploader", {
                                        staticClass: "full-width",
                                        attrs: {
                                          flat: "",
                                          color: "grey",
                                          url: t.uploader,
                                          "auto-upload": "",
                                          filter: t.checkFile,
                                          readonly: t.readonly,
                                        },
                                        on: {
                                          start: t.startUpload,
                                          finish: t.finishUpload,
                                          uploaded: t.afterUploaded,
                                          removed: t.afterRemoved,
                                        },
                                        scopedSlots: t._u(
                                          [
                                            {
                                              key: "header",
                                              fn: function (e) {
                                                return [
                                                  a(
                                                    "div",
                                                    {
                                                      staticClass:
                                                        "row no-wrap items-center q-pa-sm q-gutter-xs",
                                                    },
                                                    [
                                                      a("div", { staticClass: "col" }, [
                                                        t._v(
                                                          "最多" +
                                                            t._s(t.conf.fileCount) +
                                                            "个文件(" +
                                                            t._s(t.conf.fileSize) +
                                                            "MB以内)",
                                                        ),
                                                      ]),
                                                      !t.readonly &&
                                                      e.canAddFiles &&
                                                      (t.modelValue || []).length < t.conf.fileCount
                                                        ? a(
                                                            "q-btn",
                                                            {
                                                              attrs: {
                                                                type: "a",
                                                                icon: "add_box",
                                                                round: "",
                                                                dense: "",
                                                                flat: "",
                                                              },
                                                            },
                                                            [
                                                              a("q-uploader-add-trigger"),
                                                              a("q-tooltip", [
                                                                t._v("选择文件并上传"),
                                                              ]),
                                                            ],
                                                            1,
                                                          )
                                                        : t._e(),
                                                    ],
                                                    1,
                                                  ),
                                                ];
                                              },
                                            },
                                            {
                                              key: "list",
                                              fn: function (e) {
                                                return [
                                                  a(
                                                    "q-list",
                                                    { attrs: { separator: "" } },
                                                    [
                                                      t._l(e.files, function (i) {
                                                        return a(
                                                          "q-item",
                                                          { key: i.name },
                                                          [
                                                            a(
                                                              "q-item-section",
                                                              [
                                                                a(
                                                                  "q-item-label",
                                                                  {
                                                                    staticClass:
                                                                      "full-width ellipsis cursor-pointer",
                                                                    on: {
                                                                      click: function (e) {
                                                                        return t.downloadUploaderFile(
                                                                          i,
                                                                        );
                                                                      },
                                                                    },
                                                                  },
                                                                  [
                                                                    t._v(
                                                                      "\n                    " +
                                                                        t._s(i.name) +
                                                                        "\n                  ",
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
                                                                t.readonly
                                                                  ? t._e()
                                                                  : a(
                                                                      "q-btn",
                                                                      {
                                                                        attrs: {
                                                                          flat: "",
                                                                          dense: "",
                                                                          color: "negative",
                                                                          icon: "delete",
                                                                          size: "sm",
                                                                        },
                                                                        on: {
                                                                          click: function (t) {
                                                                            return e.removeFile(i);
                                                                          },
                                                                        },
                                                                      },
                                                                      [
                                                                        a("q-tooltip", [
                                                                          t._v("删除"),
                                                                        ]),
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
                                                      t._l(
                                                        t.matchingUploadedFiles(
                                                          t.modelValue,
                                                          e.files,
                                                        ),
                                                        function (e) {
                                                          return a(
                                                            "q-item",
                                                            { key: e.servername },
                                                            [
                                                              a(
                                                                "q-item-section",
                                                                [
                                                                  a(
                                                                    "q-item-label",
                                                                    {
                                                                      staticClass:
                                                                        "full-width ellipsis cursor-pointer",
                                                                      on: {
                                                                        click: function (i) {
                                                                          return t.downloadFile(
                                                                            e.link,
                                                                            e.servername,
                                                                          );
                                                                        },
                                                                      },
                                                                    },
                                                                    [
                                                                      t._v(
                                                                        "\n                    " +
                                                                          t._s(e.srcname) +
                                                                          "\n                  ",
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
                                                                  t.readonly
                                                                    ? t._e()
                                                                    : a(
                                                                        "q-btn",
                                                                        {
                                                                          attrs: {
                                                                            flat: "",
                                                                            dense: "",
                                                                            color: "negative",
                                                                            icon: "delete",
                                                                            size: "sm",
                                                                          },
                                                                          on: {
                                                                            click: function (i) {
                                                                              return t.removeFile(
                                                                                e.servername,
                                                                              );
                                                                            },
                                                                          },
                                                                        },
                                                                        [
                                                                          a("q-tooltip", [
                                                                            t._v("删除"),
                                                                          ]),
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
                                                      ),
                                                    ],
                                                    2,
                                                  ),
                                                ];
                                              },
                                            },
                                          ],
                                          null,
                                          !1,
                                          865478785,
                                        ),
                                      })
                                    : t._e(),
                                ];
                              },
                              proxy: !0,
                            },
                          ],
                          null,
                          !1,
                          2730052466,
                        ),
                      })
                    : t._e(),
                  t.riskConfInfo
                    ? a("div", {
                        staticClass: "text-orange",
                        domProps: { innerHTML: t._s(t.riskConfInfo) },
                      })
                    : t._e(),
                ],
                1,
              ),
              "F" == t.conf.type
                ? a("neu-full-screen-image", {
                    attrs: { url: t.bigPicUrl, name: t.bigPicName },
                    model: {
                      value: t.showBigPic,
                      callback: function (e) {
                        t.showBigPic = e;
                      },
                      expression: "showBigPic",
                    },
                  })
                : t._e(),
            ],
            1,
          );
        },
        s = [],
        l = (i("c975"), i("baa5"), i("13d5"), i("a434"), i("5319"), i("ddb0"), i("afcb")),
        o = i.n(l),
        n = i("ad56"),
        r = i("58a84"),
        c = i("46f3"),
        u = i("33be"),
        d = {
          name: "NeuWidget",
          components: { vueEsign: o.a, NeuGeoLocation: c["a"], NeuFullScreenImage: u["a"] },
          props: {
            value: null,
            config: Object,
            labelClass: String,
            controlClass: String,
            labelColon: Boolean,
            labelTextRight: Boolean,
            viewMode: Boolean,
            no: Number,
            showRiskInfo: Boolean,
          },
          data() {
            return {
              modelValue: null,
              conf: {},
              lClass: "col-12",
              cClass: "col-12",
              lColon: !1,
              lTextRight: !1,
              readonly: !1,
              lNo: null,
              clearIconColor: "grey",
              dialog: !1,
              provinces: [],
              areas: [],
              currList: [],
              currLevel: 1,
              pcas: {},
              uploader: window.localStorage.server + this.$appConf.fileUploader,
              research: null,
              showBigPic: !1,
              bigPicUrl: "",
              bigPicName: "",
              showRiskConf: !1,
              isHarmonyOS: !1,
            };
          },
          mounted() {
            (this.labelClass && (this.lClass = this.labelClass),
              this.controlClass && (this.cClass = this.controlClass),
              (this.readonly = this.viewMode),
              (this.modelValue = this.value),
              (this.lColon = this.labelColon),
              (this.lTextRight = this.labelTextRight),
              (this.lNo = this.no),
              (this.showRiskConf = this.showRiskInfo),
              this.initConf(this.config),
              this.detectOperatingSystem());
          },
          computed: {
            riskTip() {
              return !!this.readonly && Object(r["a"])(this.conf, this.modelValue);
            },
            riskConfInfo() {
              return this.showRiskConf && this.conf.riskMode
                ? ("R" === this.conf.type || "C" === this.conf.type) &&
                  this.conf.riskConfig &&
                  this.conf.riskConfig.length > 0
                  ? "风险提示选项：" + this.conf.riskConfig.reduce((e, t) => `${e}<br>${t}`, "")
                  : ("A" !== this.conf.type && "T" !== this.conf.type) || !this.conf.riskConfig
                    ? "N" === this.conf.type && this.conf.riskConfig
                      ? `风险提示区间：[${this.conf.riskConfig.min}, ${this.conf.riskConfig.max}]`
                      : null
                    : "风险提示数据：<br>" +
                      this.conf.riskConfig.replace(/(\r\n)/g, /\n/).replace(/(\n)/g, "<br>")
                : null;
            },
            textPlaceholder() {
              return (!this.conf.minLength && 0 !== this.conf.minLength) ||
                (!this.conf.maxLength && 0 !== this.conf.maxLength)
                ? this.conf.minLength || 0 === this.conf.minLength
                  ? `最少填写${this.conf.minLength}个字`
                  : this.conf.maxLength || this.conf.maxLength
                    ? `最多填写${this.conf.maxLength}个字`
                    : ""
                : `请填写${this.conf.minLength}~${this.conf.maxLength}个字`;
            },
            numberPlaceholder() {
              return (!this.conf.minValue && 0 !== this.conf.minValue) ||
                (!this.conf.maxValue && 0 !== this.conf.maxValue)
                ? this.conf.minValue || 0 === this.conf.minValue
                  ? `最小值${this.conf.minValue}`
                  : this.conf.maxValue || 0 === this.conf.maxValue
                    ? `最大值${this.conf.maxValue}`
                    : ""
                : `请填写${this.conf.minValue}~${this.conf.maxValue}的${this.conf.isDecimal ? "" : "整"}数`;
            },
            numberStep() {
              return this.conf.isDecimal
                ? 1 / Math.pow(10, this.conf.decimalPlaces ? this.conf.decimalPlaces : 2)
                : 1;
            },
          },
          watch: {
            value(e) {
              ((this.modelValue = e), this.initConf(this.conf));
            },
            modelValue(e) {
              this.$emit("input", e);
            },
            viewMode(e) {
              this.readonly = e;
            },
            labelClass(e) {
              this.lClass = e;
            },
            controlClass(e) {
              this.cClass = e;
            },
            config(e) {
              this.initConf(e);
            },
            labelColon(e) {
              this.lColon = e;
            },
            labelTextRight(e) {
              this.lTextRight = e;
            },
            no(e) {
              this.lNo = e;
            },
            showRiskInfo(e) {
              this.showRiskConf = e;
            },
          },
          methods: {
            initConf(e) {
              ((this.conf = e || {
                label: "",
                hint: "",
                type: "T",
                required: !1,
                minLength: 1,
                maxLength: 100,
                isTextarea: !1,
                minValue: 0,
                maxValue: 100,
                isDecimal: !1,
                decimalPlaces: 2,
                selectPattern: "R",
                options: [],
                isOther: !1,
                dtPattern: "D",
                fileCount: 1,
                fileSize: 1,
                fileExts: [],
              }),
                ("T" !== this.conf.type && "D" !== this.conf.type && "S" !== this.conf.type) ||
                !this.modelValue ||
                "string" === typeof this.modelValue
                  ? ("N" === this.conf.type &&
                      this.modelValue &&
                      "string" !== typeof this.modelValue &&
                      "number" !== typeof this.modelValue) ||
                    ("F" === this.conf.type && this.modelValue && !Array.isArray(this.modelValue))
                    ? (this.modelValue = null)
                    : "R" === this.conf.type && "S" !== this.conf.selectPattern && this.conf.isOther
                      ? this.modelValue
                        ? this.modelValue &&
                          ("object" !== typeof this.modelValue || Array.isArray(this.modelValue)) &&
                          (this.modelValue = { value: "", other: "" })
                        : (this.modelValue = { value: "", other: "" })
                      : "R" !== this.conf.type ||
                          ("S" !== this.conf.selectPattern &&
                            ("S" === this.conf.selectPattern || this.conf.isOther)) ||
                          "string" === typeof this.modelValue ||
                          "number" === typeof this.modelValue
                        ? "C" !== this.conf.type || this.conf.isOther
                          ? "C" === this.conf.type && this.conf.isOther
                            ? this.modelValue
                              ? this.modelValue &&
                                ("object" !== typeof this.modelValue ||
                                  Array.isArray(this.modelValue)) &&
                                (this.modelValue = { value: [], other: "" })
                              : (this.modelValue = { value: [], other: "" })
                            : "A" === this.conf.type &&
                              (this.modelValue
                                ? this.modelValue &&
                                  ("object" !== typeof this.modelValue ||
                                    Array.isArray(this.modelValue)) &&
                                  (this.modelValue = { code: [], name: [], value: "" })
                                : (this.modelValue = { code: [], name: [], value: "" }),
                              this.$axiosAction(
                                `${this.$appConf.portalUrl}/api/pcas_new/0.json`,
                                null,
                                "post",
                                !1,
                              ).then((e) => {
                                this.provinces = e.data;
                              }))
                          : this.modelValue
                            ? this.modelValue &&
                              !Array.isArray(this.modelValue) &&
                              (this.modelValue = [])
                            : (this.modelValue = [])
                        : (this.modelValue = null)
                  : (this.modelValue = null));
            },
            detectOperatingSystem() {
              const e = navigator.userAgent.toLowerCase();
              e.indexOf("harmonyos") >= 0 || e.indexOf("huawei") >= 0 || e.indexOf("emui") >= 0
                ? (this.isHarmonyOS = !0)
                : (e.indexOf("android") >= 0 || e.indexOf("linux") >= 0) && (this.isHarmonyOS = !1);
            },
            checkNumber(e) {
              if (this.readonly) return;
              if (!e && 0 !== e) return !this.conf.required || "请填写该项";
              const t = this.conf.isDecimal
                  ? `^(-?\\d+)(\\.\\d{1,${this.conf.decimalPlaces || 2}})?$`
                  : "^-?\\d+$",
                i = new RegExp(t);
              return i.test(e)
                ? (this.conf.maxValue || 0 === this.conf.maxValue) && e > this.conf.maxValue
                  ? `最大填写${this.conf.maxValue}`
                  : (!this.conf.minValue && 0 !== this.conf.minValue) ||
                    !(e < this.conf.minValue) ||
                    `最小填写${this.conf.minValue}`
                : this.conf.isDecimal
                  ? `请填写不超过${this.conf.decimalPlaces || 2}位的小数`
                  : "请填写整数";
            },
            toggleOther() {
              (("R" === this.conf.type &&
                "S" !== this.conf.selectPattern &&
                "其他" !== this.modelValue.value) ||
                ("C" === this.conf.type &&
                  this.modelValue.value &&
                  this.modelValue.value.indexOf("其他") < 0)) &&
                (this.modelValue.other = "");
            },
            generateEsign() {
              this.$refs.esign
                .generate()
                .then((e) => {
                  ((this.modelValue = e), (this.dialog = !1));
                })
                .catch(() => {
                  this.conf.required
                    ? this.$showErrorNotify("请签名")
                    : ((this.modelValue = null), (this.dialog = !1));
                });
            },
            resetEsign() {
              this.$refs.esign.reset();
            },
            openPcasDialog() {
              this.readonly ||
                ((this.dialog = !0),
                (this.pcas = {
                  code: ((this.modelValue || {}).code || []).reduce((e, t) => e.concat(t), []),
                  name: ((this.modelValue || {}).name || []).reduce((e, t) => e.concat(t), []),
                  value: ((this.modelValue || {}).name || []).reduce((e, t) => e + t, ""),
                }),
                0 === this.pcas.code.length
                  ? ((this.currList = this.provinces), (this.currLevel = 1))
                  : 1 === this.pcas.code.length
                    ? ((this.currList = this.provinces.find(
                        (e) => e.code === this.pcas.code[0],
                      ).children),
                      (this.currLevel = 2))
                    : ((this.currList = []),
                      this.$axiosAction(
                        `${this.$appConf.portalUrl}/api/pcas_new/${this.pcas.code[1]}.json`,
                        null,
                        "post",
                        !1,
                      ).then((e) => {
                        ((this.areas = e.data),
                          2 === this.pcas.code.length
                            ? ((this.currList = this.areas), (this.currLevel = 3))
                            : this.pcas.code.length > 2 &&
                              ((this.currList = this.areas.find(
                                (e) => e.code === this.pcas.code[2],
                              ).children),
                              (this.currLevel = 4),
                              this.currList ||
                                ((this.currList = this.areas), (this.currLevel = 3))));
                      })));
            },
            extendPcas(e, t) {
              (this.resetPcas(e, t, this.currLevel),
                1 === this.currLevel
                  ? (this.currList = this.provinces.find(
                      (e) => e.code === this.pcas.code[0],
                    ).children)
                  : 2 === this.currLevel
                    ? ((this.currList = []),
                      this.$axiosAction(
                        `${this.$appConf.portalUrl}/api/pcas_new/${e}.json`,
                        null,
                        "post",
                        !1,
                      ).then((e) => {
                        ((this.areas = e.data), (this.currList = this.areas));
                      }))
                    : 3 === this.currLevel
                      ? ((this.currList = this.areas.find((t) => t.code === e).children),
                        (this.currList && 0 !== this.currList.length) || this.closePcasDialog())
                      : 4 === this.currLevel && this.closePcasDialog(),
                (this.currLevel += 1));
            },
            extendPcasByLevel(e, t) {
              (this.resetPcas(
                t < 2 ? null : this.pcas.code[t - 2],
                t < 2 ? null : this.pcas.name[t - 2],
                t - 1,
              ),
                (this.currLevel = t),
                1 === t
                  ? (this.currList = this.provinces)
                  : 2 === t
                    ? (this.currList = this.provinces.find(
                        (e) => e.code === this.pcas.code[t - 2],
                      ).children)
                    : 3 === t && (this.currList = this.areas));
            },
            resetPcas(e, t, i) {
              0 === i
                ? (this.pcas = { code: [], name: [], value: "" })
                : ((this.pcas.code = this.pcas.code
                    .reduce((e, t, a) => (a < i - 1 ? e.concat(t) : e), [])
                    .concat(e)),
                  (this.pcas.name = this.pcas.name
                    .reduce((e, t, a) => (a < i - 1 ? e.concat(t) : e), [])
                    .concat(t)),
                  (this.pcas.value = this.pcas.name.reduce((e, t) => e + t, "")));
            },
            closePcasDialog() {
              ((this.modelValue = this.pcas), (this.dialog = !1));
            },
            matchingUploadedFiles(e, t) {
              return (e || []).reduce(
                (e, i) =>
                  t && t.length > 0
                    ? 0 ===
                      t.reduce((e, t) => {
                        if (t.xhr.response) {
                          const a = JSON.parse(t.xhr.response);
                          return a.servername === i.servername ? e + 1 : e;
                        }
                        return e;
                      }, 0)
                      ? e.concat(i)
                      : e
                    : e.concat(i),
                [],
              );
            },
            startUpload() {
              this.$q.loading.show();
            },
            finishUpload() {
              this.$q.loading.hide();
            },
            afterUploaded(e) {
              const t = JSON.parse(e.xhr.response);
              t.error
                ? this.$showErrorNotify(t.error)
                : this.modelValue
                  ? this.modelValue.push(t)
                  : (this.modelValue = [t]);
            },
            checkFile(e) {
              return e.filter((e) => {
                const t = 1048576 * this.conf.fileSize;
                if (e.size >= t)
                  return (this.$showErrorNotify(`文件大小应限制在${this.conf.fileSize}MB以内`), !1);
                const i = e.name.lastIndexOf(".");
                if (!(i > 0)) return (this.$showErrorNotify("不支持该类型文件上传"), !1);
                {
                  const t = e.name.substring(i + 1).toLowerCase();
                  if (-1 === (this.conf.fileExts || []).indexOf(t))
                    return (this.$showErrorNotify("不支持该类型文件上传"), !1);
                }
                return !0;
              });
            },
            onRejected(e) {
              this.$q.notify({ type: "negative", message: `${e.length}份文件不符合格式限制！` });
            },
            afterRemoved(e) {
              for (const t of e) {
                const e = JSON.parse(t.xhr.response);
                this.removeFile(e.servername);
              }
            },
            removeFile(e) {
              const t = this.modelValue.findIndex((t) => t.servername === e);
              this.modelValue.splice(t, 1);
            },
            downloadUploaderFile(e) {
              const t = JSON.parse(e.xhr.response),
                i = t.link.substring(t.link.lastIndexOf(".") + 1).toLowerCase();
              this.$appConf.pictureExts.findIndex((e) => e === i) > -1
                ? ((this.bigPicUrl = t.link), (this.bigPicName = t.srcname), (this.showBigPic = !0))
                : Object(n["c"])(t.link, t.srcname);
            },
            downloadFile(e, t) {
              const i = e.substring(e.lastIndexOf(".") + 1).toLowerCase();
              this.$appConf.pictureExts.findIndex((e) => e === i) > -1
                ? ((this.bigPicUrl = e), (this.bigPicName = t), (this.showBigPic = !0))
                : Object(n["c"])(e, t);
            },
            autoLocation() {
              this.research = (this.research ? this.research : 0) + 1;
            },
            locationCompleted(e) {
              const { province: t, city: i, district: a } = e.addressComponents;
              if (i && t !== i) {
                const e = this.provinces.find((e) => e.name === t);
                if (e) {
                  this.resetPcas(e.code, e.name, 1);
                  const t = e.children.find((e) => e.name === i);
                  t
                    ? (this.resetPcas(t.code, t.name, 2),
                      (this.currList = []),
                      this.$axiosAction(
                        `${this.$appConf.portalUrl}/api/pcas_new/${t.code}.json`,
                        null,
                        "post",
                        !1,
                      ).then((e) => {
                        this.areas = e.data;
                        const t = this.areas.find((e) => e.name === a);
                        t
                          ? (this.resetPcas(t.code, t.name, 3),
                            (this.currList = t.children),
                            (this.currLevel = 4))
                          : ((this.currList = this.areas), (this.currLevel = 3));
                      }))
                    : ((this.currList = e.children), (this.currLevel = 2));
                }
              } else {
                const e = this.provinces.find((e) => e.name === t);
                if (e) {
                  this.resetPcas(e.code, e.name, 1);
                  const t = e.children.find((e) => e.name === a);
                  t
                    ? (this.resetPcas(t.code, t.name, 2),
                      (this.currList = []),
                      this.$axiosAction(
                        `${this.$appConf.portalUrl}/api/pcas_new/${t.code}.json`,
                        null,
                        "post",
                        !1,
                      ).then((e) => {
                        ((this.areas = e.data), (this.currList = this.areas), (this.currLevel = 3));
                      }))
                    : ((this.currList = e.children), (this.currLevel = 2));
                }
              }
            },
            locationError(e) {
              this.$showErrorNotify("定位失败");
            },
          },
        },
        m = d,
        f = i("2877"),
        p = i("27f9"),
        h = i("ddd8"),
        y = i("8572"),
        g = i("3786"),
        b = i("8f8e"),
        v = i("0016"),
        _ = i("7cbe"),
        T = i("52ee"),
        x = i("9c40"),
        w = i("ca78"),
        k = i("068f"),
        q = i("24e8"),
        C = i("f09f"),
        L = i("a370"),
        V = i("eb85"),
        D = i("1c1c"),
        S = i("66e5"),
        P = i("4074"),
        N = i("0170"),
        I = i("ee89"),
        M = i("cc04"),
        R = i("05c0"),
        $ = i("7f67"),
        O = i("eebe"),
        A = i.n(O),
        Q = Object(f["a"])(m, a, s, !1, null, null, null);
      t["a"] = Q.exports;
      (A()(Q, "components", {
        QInput: p["a"],
        QSelect: h["a"],
        QField: y["a"],
        QRadio: g["a"],
        QCheckbox: b["a"],
        QIcon: v["a"],
        QPopupProxy: _["a"],
        QDate: T["a"],
        QBtn: x["a"],
        QTime: w["a"],
        QImg: k["a"],
        QDialog: q["a"],
        QCard: C["a"],
        QCardSection: L["a"],
        QSeparator: V["a"],
        QList: D["a"],
        QItem: S["a"],
        QItemSection: P["a"],
        QItemLabel: N["a"],
        QUploader: I["a"],
        QUploaderAddTrigger: M["a"],
        QTooltip: R["a"],
      }),
        A()(Q, "directives", { ClosePopup: $["a"] }));
    },
    "9a3d": function (e, t, i) {
      "use strict";
      var a = function () {
          var e = this,
            t = e.$createElement,
            i = e._self._c || t;
          return i(
            "div",
            { staticClass: "full-width" },
            [
              i(
                "q-list",
                { attrs: { bordered: "", separator: "" } },
                [
                  i(
                    "q-expansion-item",
                    {
                      attrs: { "expand-icon-toggle": "", "switch-toggle-side": "" },
                      scopedSlots: e._u([
                        {
                          key: "header",
                          fn: function () {
                            return [
                              i("q-item-section", { staticClass: "text-center" }, [
                                e._v(
                                  "\n          已选择（" +
                                    e._s(e.assignedData ? e.assignedData.length : 0) +
                                    "）\n        ",
                                ),
                              ]),
                              i("q-item-section", { attrs: { side: "" } }, [
                                i(
                                  "span",
                                  {
                                    staticClass: "text-primary cursor-pointer",
                                    on: { click: e.removeAll },
                                  },
                                  [e._v("清空已选")],
                                ),
                              ]),
                            ];
                          },
                          proxy: !0,
                        },
                      ]),
                    },
                    [
                      i(
                        "q-list",
                        { attrs: { separator: "" } },
                        [
                          e._l(e.teamData, function (t) {
                            return i(
                              "q-item",
                              { key: t.target_level + t.target_no },
                              [
                                i("q-item-section", [e._v(e._s(t.target_name))]),
                                i(
                                  "q-item-section",
                                  { attrs: { side: "" } },
                                  [
                                    i("q-icon", {
                                      attrs: { name: "cancel", color: "negative" },
                                      on: {
                                        click: function (i) {
                                          return e.removeData(t);
                                        },
                                      },
                                    }),
                                  ],
                                  1,
                                ),
                              ],
                              1,
                            );
                          }),
                          e._l(e.roleData, function (t) {
                            return i(
                              "q-item",
                              { key: t.target_level + t.target_no },
                              [
                                i("q-item-section", [e._v(e._s(t.target_name))]),
                                i(
                                  "q-item-section",
                                  { attrs: { side: "" } },
                                  [
                                    i("q-icon", {
                                      attrs: { name: "cancel", color: "negative" },
                                      on: {
                                        click: function (i) {
                                          return e.removeData(t);
                                        },
                                      },
                                    }),
                                  ],
                                  1,
                                ),
                              ],
                              1,
                            );
                          }),
                          e._l(e.userData, function (t) {
                            return i(
                              "q-item",
                              { key: t.target_level + t.target_no },
                              [
                                i(
                                  "q-item-section",
                                  [
                                    i("q-item-label", [e._v(e._s(t.target_name))]),
                                    i("q-item-label", { attrs: { caption: "" } }, [
                                      e._v(e._s(t.target_no)),
                                    ]),
                                  ],
                                  1,
                                ),
                                i(
                                  "q-item-section",
                                  { attrs: { side: "" } },
                                  [
                                    i("q-icon", {
                                      attrs: { name: "cancel", color: "negative" },
                                      on: {
                                        click: function (i) {
                                          return e.removeData(t);
                                        },
                                      },
                                    }),
                                  ],
                                  1,
                                ),
                              ],
                              1,
                            );
                          }),
                        ],
                        2,
                      ),
                    ],
                    1,
                  ),
                ],
                1,
              ),
              i(
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
                    value: e.tab,
                    callback: function (t) {
                      e.tab = t;
                    },
                    expression: "tab",
                  },
                },
                [
                  i("q-tab", { attrs: { name: "team", label: "组织架构" } }),
                  i("q-tab", { attrs: { name: "role", label: "角色" } }),
                ],
                1,
              ),
              i(
                "q-breadcrumbs",
                {
                  directives: [
                    {
                      name: "show",
                      rawName: "v-show",
                      value: "team" == e.tab && 0 != e.teamPath.length,
                      expression: "tab == 'team' && teamPath.length != 0",
                    },
                  ],
                  staticClass: "q-mt-sm q-ml-md",
                  scopedSlots: e._u([
                    {
                      key: "separator",
                      fn: function () {
                        return [i("q-icon", { attrs: { name: "chevron_right" } })];
                      },
                      proxy: !0,
                    },
                  ]),
                },
                e._l(e.teamPath, function (t, a) {
                  return i("q-breadcrumbs-el", {
                    key: a,
                    attrs: { label: t.target_name },
                    on: {
                      click: function (i) {
                        return e.changeNavi(t);
                      },
                    },
                  });
                }),
                1,
              ),
              i(
                "div",
                {
                  directives: [
                    {
                      name: "show",
                      rawName: "v-show",
                      value: "team" == e.tab && (!e.treeDatas || 0 == e.treeDatas.length),
                      expression: "tab == 'team' && (!treeDatas || treeDatas.length == 0)",
                    },
                  ],
                  staticClass: "text-center text-grey",
                },
                [e._v("暂无组织架构数据")],
              ),
              i(
                "q-list",
                {
                  directives: [
                    {
                      name: "show",
                      rawName: "v-show",
                      value: "team" == e.tab && e.teamNode && (!e.list || 0 == e.list.length),
                      expression: "tab == 'team' && teamNode && (!list || list.length == 0)",
                    },
                  ],
                  attrs: { bordered: "", separator: "" },
                },
                [
                  "all" == (e.teamNode || {}).target_level
                    ? i(
                        "q-item",
                        [
                          i(
                            "q-item-section",
                            { attrs: { avatar: "" } },
                            [
                              i("q-checkbox", {
                                attrs: { dense: "", val: e.teamNode || {} },
                                on: {
                                  input: function (t) {
                                    return e.selectTeam(e.teamNode || {});
                                  },
                                },
                                model: {
                                  value: e.teamSelected,
                                  callback: function (t) {
                                    e.teamSelected = t;
                                  },
                                  expression: "teamSelected",
                                },
                              }),
                            ],
                            1,
                          ),
                          i("q-item-section", [e._v(e._s((e.teamNode || {}).target_name))]),
                        ],
                        1,
                      )
                    : e._e(),
                  e._l((e.teamNode || {}).children, function (t) {
                    return i(
                      "q-item",
                      { key: t.node_key },
                      [
                        i(
                          "q-item-section",
                          { attrs: { avatar: "" } },
                          [
                            i("q-checkbox", {
                              attrs: { dense: "", val: t },
                              on: {
                                input: function (i) {
                                  return e.selectTeam(t);
                                },
                              },
                              model: {
                                value: e.teamSelected,
                                callback: function (t) {
                                  e.teamSelected = t;
                                },
                                expression: "teamSelected",
                              },
                            }),
                          ],
                          1,
                        ),
                        i("q-item-section", [e._v(e._s(t.target_name))]),
                        i("q-item-section", { attrs: { side: "" } }, [
                          i(
                            "span",
                            {
                              staticClass: "text-primary cursor-pointer",
                              on: {
                                click: function (i) {
                                  return e.expandNode(t);
                                },
                              },
                            },
                            [e._v("展开")],
                          ),
                        ]),
                      ],
                      1,
                    );
                  }),
                ],
                2,
              ),
              i(
                "q-list",
                {
                  directives: [
                    {
                      name: "show",
                      rawName: "v-show",
                      value: "team" == e.tab && e.list && 0 != e.list.length,
                      expression: "tab == 'team' && list && list.length != 0",
                    },
                  ],
                  attrs: { bordered: "", separator: "" },
                },
                e._l(e.list, function (t) {
                  return i(
                    "q-item",
                    { key: t.login_name },
                    [
                      i(
                        "q-item-section",
                        { attrs: { avatar: "" } },
                        [
                          i("q-checkbox", {
                            attrs: { dense: "", val: t },
                            on: {
                              input: function (i) {
                                return e.selectUser(t);
                              },
                            },
                            model: {
                              value: e.selected,
                              callback: function (t) {
                                e.selected = t;
                              },
                              expression: "selected",
                            },
                          }),
                        ],
                        1,
                      ),
                      i(
                        "q-item-section",
                        [
                          i("q-item-label", [e._v(e._s(t.name))]),
                          i("q-item-label", { attrs: { caption: "" } }, [
                            e._v(
                              e._s(t.login_name) + " " + e._s(t.sex_name) + " " + e._s(t.role_name),
                            ),
                          ]),
                        ],
                        1,
                      ),
                    ],
                    1,
                  );
                }),
                1,
              ),
              i(
                "q-list",
                {
                  directives: [
                    {
                      name: "show",
                      rawName: "v-show",
                      value: "role" == e.tab,
                      expression: "tab == 'role'",
                    },
                  ],
                  attrs: { bordered: "", separator: "" },
                },
                e._l(e.roleList, function (t) {
                  return i(
                    "q-item",
                    { key: t.role_id },
                    [
                      i(
                        "q-item-section",
                        { attrs: { avatar: "" } },
                        [
                          i("q-checkbox", {
                            attrs: { dense: "", val: t },
                            on: { input: e.selectRole },
                            model: {
                              value: e.roleSelected,
                              callback: function (t) {
                                e.roleSelected = t;
                              },
                              expression: "roleSelected",
                            },
                          }),
                        ],
                        1,
                      ),
                      i("q-item-section", [e._v(e._s(t.role_name))]),
                    ],
                    1,
                  );
                }),
                1,
              ),
            ],
            1,
          );
        },
        s = [];
      (i("c975"), i("13d5"), i("a434"), i("ddb0"));
      const l = ["all", "dep"];
      var o = {
          name: "NeuAssignTeacher",
          props: { value: null },
          data() {
            return {
              tab: "team",
              assignedData: [],
              treeDatas: [],
              teamNode: null,
              teamSelected: [],
              teamPath: [],
              roleList: [],
              roleSelected: [],
              list: [],
              selected: [],
            };
          },
          mounted() {
            ((this.assignedData = this.value || []),
              this.$axiosAction("/api/teacher/basic/teacher.api", { action: "queryDepTree" }).then(
                (e) => {
                  if (
                    0 === e.data.code &&
                    ((this.treeDatas = e.data.list), this.treeDatas && 0 !== this.treeDatas.length)
                  ) {
                    ((this.teamPath = [this.treeDatas[0]]), (this.teamNode = this.treeDatas[0]));
                    for (const e of this.assignedData)
                      if (l.indexOf(e.target_level) >= 0) {
                        const t = this.findNodeByKey(
                          this.treeDatas[0],
                          "_" + e.target_level + "_" + e.target_no,
                        );
                        t &&
                          (this.teamSelected = this.teamSelected
                            .concat(t)
                            .concat(this.selectAllChildren(t)));
                      }
                  }
                },
              ),
              this.$axiosAction("/api/teacher/basic/role.api", {
                action: "queryTeacherRoleList",
              }).then((e) => {
                if (0 === e.data.code) {
                  this.roleList = e.data.list;
                  for (const e of this.assignedData)
                    if ("role" === e.target_level) {
                      const t = this.roleList.findIndex((t) => t.role_id === e.target_no);
                      t >= 0 && (this.roleSelected = this.roleSelected.concat(this.roleList[t]));
                    }
                }
              }));
          },
          watch: {
            value(e) {
              this.assignedData = e || [];
            },
            assignedData(e) {
              this.$emit("input", e);
            },
          },
          computed: {
            userData() {
              return this.assignedData.reduce(
                (e, t) => ("user" === t.target_level ? e.concat(t) : e),
                [],
              );
            },
            roleData() {
              return this.assignedData.reduce(
                (e, t) => ("role" === t.target_level ? e.concat(t) : e),
                [],
              );
            },
            teamData() {
              return this.assignedData.reduce(
                (e, t) => (l.indexOf(t.target_level) >= 0 ? e.concat(t) : e),
                [],
              );
            },
          },
          methods: {
            loadList(e) {
              this.$axiosAction("/api/teacher/basic/teacher.api", {
                action: "queryListForAssignNoPaging",
                dep_no: e.target_no,
              })
                .then((e) => {
                  0 === e.data.code &&
                    ((this.list = e.data.list),
                    (this.selected = this.assignedData.reduce(
                      (e, t) =>
                        "user" === t.target_level &&
                        this.list.find((e) => e.login_name === t.target_no)
                          ? e.concat(this.list.find((e) => e.login_name === t.target_no))
                          : e,
                      [],
                    )));
                })
                .catch((e) => {
                  ((this.list = []), (this.selected = []));
                });
            },
            removeData(e) {
              if (l.indexOf(e.target_level) >= 0) {
                const t = this.assignedData.findIndex(
                    (t) => t.target_level === e.target_level && t.target_no === e.target_no,
                  ),
                  i = this.findNodeByKey(
                    this.treeDatas[0] || {},
                    "_" + e.target_level + "_" + e.target_no,
                  );
                if (i) {
                  const e = this.teamSelected.findIndex((e) => e.node_key === i.node_key);
                  (e >= 0 && this.teamSelected.splice(e, 1), this.unselectAllChildren(i));
                }
                this.assignedData.splice(t, 1);
              } else if ("user" === e.target_level) {
                let t = this.selected.findIndex((t) => t.login_name === e.target_no);
                (t >= 0 && this.selected.splice(t, 1),
                  (t = this.assignedData.findIndex(
                    (t) => t.target_level === e.target_level && t.target_no === e.target_no,
                  )),
                  this.assignedData.splice(t, 1));
              } else if ("role" === e.target_level) {
                let t = this.roleSelected.findIndex((t) => t.role_id === e.target_no);
                (t >= 0 && this.roleSelected.splice(t, 1),
                  (t = this.assignedData.findIndex(
                    (t) => t.target_level === e.target_level && t.target_no === e.target_no,
                  )),
                  this.assignedData.splice(t, 1));
              }
            },
            removeAll() {
              ((this.assignedData = []),
                (this.selected = []),
                (this.roleSelected = []),
                (this.teamSelected = []));
            },
            selectUser(e) {
              if (this.selected.findIndex((t) => t.login_name === e.login_name) >= 0)
                this.assignedData.findIndex(
                  (t) => "user" === t.target_level && t.target_no === e.login_name,
                ) < 0 &&
                  (this.assignedData = this.assignedData.concat({
                    target_level: "user",
                    target_no: e.login_name,
                    target_name: e.name,
                  }));
              else {
                const t = this.assignedData.findIndex(
                  (t) => "user" === t.target_level && t.target_no === e.login_name,
                );
                t >= 0 && this.assignedData.splice(t, 1);
              }
            },
            selectRole() {
              this.assignedData = this.assignedData
                .reduce((e, t) => ("role" === t.target_level ? e : e.concat(t)), [])
                .concat(
                  this.roleSelected.reduce(
                    (e, t) =>
                      e.concat({
                        target_level: "role",
                        target_no: t.role_id,
                        target_name: t.role_name,
                      }),
                    [],
                  ),
                );
            },
            expandNode(e) {
              ((this.teamPath = this.teamPath.concat(e)),
                (this.teamNode = e),
                e.children ? ((this.list = []), (this.selected = [])) : this.loadList(e));
            },
            changeNavi(e) {
              const t = this.teamPath.findIndex((t) => t.node_key === e.node_key);
              (this.teamPath !== t + 1 &&
                (this.teamPath.splice(t + 1, this.teamPath.length - (t + 1)), (this.teamNode = e)),
                e.children && ((this.list = []), (this.selected = [])));
            },
            selectTeam(e) {
              (this.teamSelected.findIndex((t) => t.node_key === e.node_key) >= 0
                ? (this.teamSelected = this.teamSelected
                    .concat(this.selectAllChildren(e))
                    .concat(this.selectParent(e)))
                : (this.unselectAllChildren(e), this.unselectParent(e)),
                (this.assignedData = this.assignedData
                  .reduce((e, t) => (l.indexOf(t.target_level) >= 0 ? e : e.concat(t)), [])
                  .concat(
                    this.treeDatas.reduce((e, t) => e.concat(this.createAssignedTeam(t)), []),
                  )));
            },
            findNodeByKey(e, t) {
              if (e.node_key === t) return e;
              if (e.children) {
                for (const i of e.children) {
                  if (i.node_key === t) return i;
                  if (i.children) {
                    const e = this.findNodeByKey(i, t);
                    if (e) return e;
                  }
                }
                return null;
              }
              return null;
            },
            findParentOfNode(e, t) {
              for (const i of e.children) {
                if (i.node_key === t) return e;
                if (i.children) {
                  const e = this.findParentOfNode(i, t);
                  if (e) return e;
                }
              }
              return null;
            },
            selectParent(e) {
              const t = this.findParentOfNode(this.treeDatas[0], e.node_key);
              return t &&
                t.children.reduce(
                  (t, i) =>
                    this.teamSelected.findIndex(
                      (t) => t.node_key === i.node_key && i.node_key !== e.node_key,
                    ) >= 0
                      ? t + 1
                      : t,
                  0,
                ) ===
                  t.children.length - 1
                ? [t].concat(this.selectParent(t))
                : [];
            },
            selectAllChildren(e) {
              return e.children
                ? e.children.reduce(
                    (e, t) =>
                      this.teamSelected.findIndex((e) => e.node_key === t.node_key) >= 0
                        ? e
                        : e.concat(t).concat(this.selectAllChildren(t)),
                    [],
                  )
                : [];
            },
            unselectParent(e) {
              const t = this.findParentOfNode(this.treeDatas[0], e.node_key);
              if (t) {
                const e = this.teamSelected.findIndex((e) => e.node_key === t.node_key);
                e >= 0 && (this.teamSelected.splice(e, 1), this.unselectParent(t));
              }
            },
            unselectAllChildren(e) {
              if (e.children)
                for (const t of e.children) {
                  const e = this.teamSelected.findIndex((e) => e.node_key === t.node_key);
                  (e >= 0 && this.teamSelected.splice(e, 1), this.unselectAllChildren(t));
                }
            },
            createAssignedTeam(e) {
              return this.teamSelected.findIndex((t) => t.node_key === e.node_key) >= 0
                ? [
                    {
                      target_level: e.target_level,
                      target_no: e.target_no,
                      target_name: e.target_name,
                    },
                  ]
                : e.children
                  ? e.children.reduce((e, t) => e.concat(this.createAssignedTeam(t)), [])
                  : [];
            },
          },
        },
        n = o,
        r = i("2877"),
        c = i("1c1c"),
        u = i("3b73"),
        d = i("4074"),
        m = i("66e5"),
        f = i("0016"),
        p = i("0170"),
        h = i("429b"),
        y = i("7460"),
        g = i("ead5"),
        b = i("079e"),
        v = i("8f8e"),
        _ = i("eebe"),
        T = i.n(_),
        x = Object(r["a"])(n, a, s, !1, null, null, null);
      t["a"] = x.exports;
      T()(x, "components", {
        QList: c["a"],
        QExpansionItem: u["a"],
        QItemSection: d["a"],
        QItem: m["a"],
        QIcon: f["a"],
        QItemLabel: p["a"],
        QTabs: h["a"],
        QTab: y["a"],
        QBreadcrumbs: g["a"],
        QBreadcrumbsEl: b["a"],
        QCheckbox: v["a"],
      });
    },
    "9fa4": function (e, t, i) {},
    a086: function (e, t, i) {
      "use strict";
      var a = function () {
          var e = this,
            t = e.$createElement,
            i = e._self._c || t;
          return i(
            "div",
            { staticClass: "full-width" },
            [
              i(
                "baidu-map",
                {
                  staticClass: "neu-map-view",
                  attrs: {
                    center: e.modelValue.center,
                    zoom: 15,
                    "scroll-wheel-zoom": !0,
                    ak: e.$appConf.bMapAk,
                  },
                },
                [
                  i(
                    "div",
                    { staticClass: "q-mb-sm row items-center justify-between" },
                    [
                      i("div", { staticClass: "text-bold" }, [e._v(e._s(e.modelValue.title))]),
                      e.popupCloseBtn
                        ? i("q-btn", {
                            directives: [{ name: "close-popup", rawName: "v-close-popup" }],
                            attrs: { icon: "close", flat: "", round: "", dense: "", size: "sm" },
                          })
                        : e._e(),
                    ],
                    1,
                  ),
                  i("bm-view", {
                    staticStyle: { width: "100%", "min-height": "680px", flex: "1" },
                  }),
                  i("bm-scale", { attrs: { anchor: "BMAP_ANCHOR_BOTTOM_RIGHT" } }),
                  i("bm-navigation", { attrs: { anchor: "BMAP_ANCHOR_TOP_RIGHT" } }),
                  i("bm-marker", { attrs: { position: e.modelValue.center } }),
                  e.modelValue.radius
                    ? i("bm-circle", {
                        attrs: {
                          center: e.modelValue.center,
                          radius: e.modelValue.radius,
                          "stroke-color": "blue",
                          "stroke-opacity": 0.5,
                          "stroke-weight": 1,
                        },
                      })
                    : e._e(),
                  e.modelValue.path
                    ? i("bm-polygon", {
                        attrs: {
                          path: e.modelValue.path,
                          "stroke-color": "blue",
                          "stroke-opacity": 0.5,
                          "stroke-weight": 1,
                        },
                      })
                    : e._e(),
                ],
                1,
              ),
            ],
            1,
          );
        },
        s = [],
        l = i("ded3"),
        o = i.n(l),
        n = i("df2b"),
        r = i("5098"),
        c = i("8328"),
        u = i("6f5b"),
        d = i("d9a9"),
        m = i("6285"),
        f = i("4d65"),
        p = {
          name: "NeuViewMap",
          components: {
            BaiduMap: n["a"],
            BmView: r["a"],
            BmScale: c["a"],
            BmNavigation: u["a"],
            BmMarker: d["a"],
            BmCircle: m["a"],
            BmPolygon: f["a"],
          },
          props: { value: null, popupCloseBtn: Boolean },
          data() {
            return {
              modelValue: {
                center: { lng: 116.404, lat: 39.915 },
                radius: 500,
                path: [
                  { lng: 116.412732, lat: 39.911707 },
                  { lng: 116.39455, lat: 39.910932 },
                  { lng: 116.403461, lat: 39.921336 },
                ],
              },
            };
          },
          mounted() {
            this.value && (this.modelValue = o()({}, this.value));
          },
          watch: {
            value(e) {
              this.modelValue = o()({}, this.value);
            },
          },
          methods: {},
        },
        h = p,
        y = (i("b192"), i("2877")),
        g = i("9c40"),
        b = i("7f67"),
        v = i("eebe"),
        _ = i.n(v),
        T = Object(y["a"])(h, a, s, !1, null, null, null);
      t["a"] = T.exports;
      (_()(T, "components", { QBtn: g["a"] }), _()(T, "directives", { ClosePopup: b["a"] }));
    },
    b192: function (e, t, i) {
      "use strict";
      i("b872");
    },
    b872: function (e, t, i) {},
    bab8: function (e, t, i) {
      "use strict";
      i("9fa4");
    },
    cd81: function (e, t, i) {
      "use strict";
      (i.d(t, "c", function () {
        return l;
      }),
        i.d(t, "a", function () {
          return o;
        }),
        i.d(t, "b", function () {
          return n;
        }),
        i.d(t, "d", function () {
          return r;
        }));
      (i("13d5"), i("c19f"), i("ace4"), i("5319"), i("5cc6"));
      var a = i("1146"),
        s = i.n(a);
      function l(e, t) {
        const i = new FileReader();
        ((i.onload = function (e) {
          const i = s.a.read(e.target.result, { type: "binary" });
          t && t(s.a.utils.sheet_to_json(i.Sheets[i.SheetNames[0]], { defval: "" }));
        }),
          i.readAsBinaryString(e));
      }
      function o(e, t, i = "sheet1", a = !0) {
        const l = s.a.utils.json_to_sheet(e);
        var o = new Blob([u({ [c(i)]: l })], { type: "text/plain" });
        window.resolveLocalFileSystemURL(
          cordova.file.cacheDirectory,
          function (e) {
            e.getFile(
              `${t}.xlsx`,
              { create: !0, exclusive: !1 },
              function (e) {
                e.createWriter(function (e) {
                  ((e.onwriteend = function () {
                    a &&
                      cordova.plugins.fileOpener2.showOpenWithDialog(
                        `${cordova.file.cacheDirectory}${t}.xlsx`,
                        "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
                        (e) => {},
                      );
                  }),
                    (e.onerror = function (e) {
                      console.error("写入文件失败：" + e.toString());
                    }),
                    e.write(o));
                });
              },
              function (e) {
                console.error("写入文件失败：" + e.toString());
              },
            );
          },
          function (e) {
            console.error("写入文件失败：" + e.toString());
          },
        );
      }
      function n(e, t) {
        const i = Object.keys(e).reduce(
          (t, i) => ((t[c(i)] = s.a.utils.json_to_sheet(e[i])), t),
          {},
        );
        var a = new Blob([u(i)], { type: "text/plain" });
        window.resolveLocalFileSystemURL(
          cordova.file.cacheDirectory,
          function (e) {
            e.getFile(
              `${t}.xlsx`,
              { create: !0, exclusive: !1 },
              function (e) {
                e.createWriter(function (e) {
                  ((e.onwriteend = function () {
                    cordova.plugins.fileOpener2.showOpenWithDialog(
                      `${cordova.file.cacheDirectory}${t}.xlsx`,
                      "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
                      (e) => {},
                    );
                  }),
                    (e.onerror = function (e) {
                      console.error("写入文件失败：" + e.toString());
                    }),
                    e.write(a));
                });
              },
              function (e) {
                console.error("写入文件失败：" + e.toString());
              },
            );
          },
          function (e) {
            console.error("写入文件失败：" + e.toString());
          },
        );
      }
      function r(e) {
        cordova.plugins.fileOpener2.showOpenWithDialog(
          `${cordova.file.cacheDirectory}${e}.xlsx`,
          "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
          (e) => {},
        );
      }
      function c(e) {
        if (e.length < 31)
          return e
            .replace(/\?/g, "_")
            .replace(/\[/g, "_")
            .replace(/\]/g, "_")
            .replace(/\*/g, "_")
            .replace(/\//g, "_");
        {
          const t = `${e.substr(0, 28)}_${Math.floor(100 * Math.random())}`;
          return t
            .replace(/\?/g, "_")
            .replace(/\[/g, "_")
            .replace(/\]/g, "_")
            .replace(/\*/g, "_")
            .replace(/\//g, "_");
        }
      }
      function u(e) {
        const t = { SheetNames: Object.keys(e), Sheets: e },
          i = { bookType: "xlsx", bookSST: !1, type: "binary" },
          a = s.a.write(t, i),
          l = new Blob([d(a)], { type: "application/octet-stream" });
        return l;
      }
      function d(e) {
        const t = new ArrayBuffer(e.length),
          i = new Uint8Array(t);
        for (let a = 0; a < e.length; ++a) i[a] = 255 & e.charCodeAt(a);
        return t;
      }
    },
    ce02: function (e, t, i) {},
    d852: function (e, t, i) {
      "use strict";
      var a = function () {
          var e = this,
            t = e.$createElement,
            i = e._self._c || t;
          return i(
            "q-dialog",
            {
              attrs: { persistent: "" },
              model: {
                value: e.progressDialog,
                callback: function (t) {
                  e.progressDialog = t;
                },
                expression: "progressDialog",
              },
            },
            [
              i(
                "q-card",
                { staticClass: "full-width", attrs: { flat: "" } },
                [
                  i(
                    "q-card-section",
                    [
                      i(
                        "q-item-section",
                        {
                          directives: [
                            {
                              name: "show",
                              rawName: "v-show",
                              value: !e.progressTip,
                              expression: "!progressTip",
                            },
                          ],
                        },
                        [e._v("处理中（数据量大时处理速度会比较慢，请耐心等候）...")],
                      ),
                      i(
                        "q-item-section",
                        {
                          directives: [
                            {
                              name: "show",
                              rawName: "v-show",
                              value: !e.progressTip,
                              expression: "!progressTip",
                            },
                          ],
                        },
                        [
                          i(
                            "q-linear-progress",
                            { attrs: { size: "25px", value: e.progress, color: "accent" } },
                            [
                              i(
                                "div",
                                { staticClass: "absolute-full flex flex-center" },
                                [
                                  i("q-badge", {
                                    attrs: {
                                      color: "white",
                                      "text-color": "accent",
                                      label: e.progressLabel,
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
                      i(
                        "q-item-section",
                        {
                          directives: [
                            {
                              name: "show",
                              rawName: "v-show",
                              value: e.showMultiFilesTip,
                              expression: "showMultiFilesTip",
                            },
                          ],
                          staticClass: "text-orange",
                        },
                        [e._v("本次下载数据会被拆分成多个文件保存，请注意查收。")],
                      ),
                      i(
                        "q-item-section",
                        {
                          directives: [
                            {
                              name: "show",
                              rawName: "v-show",
                              value: e.progressTip,
                              expression: "progressTip",
                            },
                          ],
                        },
                        [e._v("处理结果")],
                      ),
                      i(
                        "q-item-section",
                        {
                          directives: [
                            {
                              name: "show",
                              rawName: "v-show",
                              value: e.progressTip,
                              expression: "progressTip",
                            },
                          ],
                        },
                        [e._v("\n        " + e._s(e.progressTip) + "\n      ")],
                      ),
                      i(
                        "q-item-section",
                        {
                          directives: [
                            {
                              name: "show",
                              rawName: "v-show",
                              value: e.progressTip,
                              expression: "progressTip",
                            },
                          ],
                        },
                        e._l(e.multiFileNames, function (t) {
                          return i("q-btn", {
                            key: t,
                            staticClass: "q-mt-sm",
                            attrs: { outline: "", color: "primary", label: t },
                            on: {
                              click: function (i) {
                                return e.openExcelFile(t);
                              },
                            },
                          });
                        }),
                        1,
                      ),
                      i(
                        "q-item-section",
                        {
                          directives: [
                            {
                              name: "show",
                              rawName: "v-show",
                              value: e.progressTip,
                              expression: "progressTip",
                            },
                          ],
                        },
                        [
                          i("q-btn", {
                            staticClass: "q-mt-sm",
                            attrs: { outline: "", color: "grey", label: "关闭" },
                            on: {
                              click: function (t) {
                                e.progressDialog = !1;
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
          );
        },
        s = [],
        l = (i("13d5"), i("e6cf"), i("ddb0"), i("ded3")),
        o = i.n(l),
        n = i("cd81"),
        r = {
          name: "NeuExportData",
          props: { config: { type: Array, required: !1 } },
          data() {
            return {
              progressDialog: !1,
              progress: 0,
              progressTip: "",
              showMultiFilesTip: !1,
              multiFileNames: [],
            };
          },
          watch: {
            config(e) {
              e && 9 === e.length && this.doExport(...e);
            },
          },
          computed: {
            progressLabel() {
              return (100 * this.progress).toFixed(2) + "%";
            },
          },
          methods: {
            doExport(e, t, i, a, s, l, o, n, r) {
              if (
                ((this.progressTip = ""),
                (this.showMultiFilesTip = !1),
                (this.progressDialog = !0),
                e && t)
              )
                if (n && r) {
                  const c = Object.keys(a);
                  this.exportOneSheetData(e, t, i, a[c[0]], c[0], s, l, o, n, r);
                } else this.exportMultiSheetsData(e, t, i, a, s, l, o);
              else this.exportDataDirectly(a, s, l);
            },
            exportDataDirectly(e, t, i) {
              ((this.progress = 100), Object(n["b"])(e, t), (this.progressDialog = !1), i && i());
            },
            async exportOneSheetData(e, t, i, a, s, l, r, c, u, d) {
              ((this.progress = 0), (this.multiFileNames = []));
              let m = 0,
                f = 1,
                p = [],
                h = 0;
              while (m < f)
                (m++,
                  await this.$axiosAction(
                    e,
                    o()(o()({ action: t }, i), {}, { pageSize: u, pageNum: m }),
                    "post",
                    !1,
                  ).then((e) => {
                    ((m = e.data[a].pageNum),
                      (f = e.data[a].pageCount),
                      !this.showMultiFilesTip &&
                        e.data[a].rowCount > d &&
                        (this.showMultiFilesTip = !0),
                      (p = c ? p.concat(c(e.data[a].list)) : p.concat(e.data[a].list)));
                  }),
                  (this.progress = m / f),
                  p.length >= d &&
                    (Object(n["a"])(p, `${l}${h + 1}`, s, !1),
                    this.multiFileNames.push(`${l}${h + 1}`),
                    h++,
                    (p = [])));
              ((p.length > 0 || 0 === h) &&
                (Object(n["a"])(p, `${l}${0 === h ? "" : h + 1}`, s, 0 === h),
                h > 0 && this.multiFileNames.push(`${l}${h + 1}`),
                h++),
                h > 1
                  ? ((this.showMultiFilesTip = !1),
                    (this.progressTip = `因数据量过大本次下载数据已被拆分成${h}个文件保存，请注意查看。`))
                  : ((this.progressDialog = !1), r && r()));
            },
            async exportMultiSheetsData(e, t, i, a, s, l, r) {
              this.progress = 0;
              let c = [];
              (await this.$axiosAction(e, o()({ action: t }, i), "post", !1).then((e) => {
                if (0 === e.data.code) {
                  const t = Object.keys(a);
                  ((c = t.reduce((t, i) => ((t[i] = e.data[a[i]]), t), {})), r && (c = r(c)));
                }
              }),
                (this.progress = 100),
                Object(n["b"])(c, s),
                (this.progressDialog = !1),
                l && l());
            },
            openExcelFile(e) {
              Object(n["d"])(e);
            },
          },
        },
        c = r,
        u = i("2877"),
        d = i("24e8"),
        m = i("f09f"),
        f = i("a370"),
        p = i("4074"),
        h = i("6b1d"),
        y = i("58a81"),
        g = i("9c40"),
        b = i("eebe"),
        v = i.n(b),
        _ = Object(u["a"])(c, a, s, !1, null, null, null);
      t["a"] = _.exports;
      v()(_, "components", {
        QDialog: d["a"],
        QCard: m["a"],
        QCardSection: f["a"],
        QItemSection: p["a"],
        QLinearProgress: h["a"],
        QBadge: y["a"],
        QBtn: g["a"],
      });
    },
    f395: function (e, t, i) {
      "use strict";
      var a = function () {
          var e = this,
            t = e.$createElement,
            i = e._self._c || t;
          return i(
            "div",
            { staticClass: "full-width" },
            [
              i(
                "q-list",
                { attrs: { bordered: "", separator: "" } },
                [
                  i(
                    "q-expansion-item",
                    {
                      attrs: { "expand-icon-toggle": "", "switch-toggle-side": "" },
                      scopedSlots: e._u([
                        {
                          key: "header",
                          fn: function () {
                            return [
                              i("q-item-section", { staticClass: "text-center" }, [
                                e._v(
                                  "\n          已选择（" +
                                    e._s(e.assignedData ? e.assignedData.length : 0) +
                                    "）\n        ",
                                ),
                              ]),
                              i("q-item-section", { attrs: { side: "" } }, [
                                i(
                                  "span",
                                  {
                                    staticClass: "text-primary cursor-pointer",
                                    on: { click: e.openImportDialog },
                                  },
                                  [e._v("学号批量导入")],
                                ),
                                i(
                                  "span",
                                  {
                                    staticClass: "text-negative cursor-pointer",
                                    on: { click: e.removeAll },
                                  },
                                  [e._v("清空已选")],
                                ),
                              ]),
                            ];
                          },
                          proxy: !0,
                        },
                      ]),
                    },
                    [
                      i(
                        "q-list",
                        { attrs: { separator: "" } },
                        [
                          e._l(e.teamData, function (t) {
                            return i(
                              "q-item",
                              { key: t.target_level + t.target_no + t.grade_no },
                              [
                                i(
                                  "q-item-section",
                                  { attrs: { avatar: "" } },
                                  [
                                    i("q-icon", {
                                      staticClass: "cursor-pointer",
                                      attrs: { name: "more_vert" },
                                      on: {
                                        click: function (i) {
                                          ((e.schooleRollStatusDialog = !0), (e.srsItem = t));
                                        },
                                      },
                                    }),
                                  ],
                                  1,
                                ),
                                i(
                                  "q-item-section",
                                  [
                                    i("q-item-label", [
                                      e._v(e._s(t.target_name)),
                                      "class" != t.target_level
                                        ? i("span", [e._v(" - " + e._s(t.grade_name))])
                                        : e._e(),
                                    ]),
                                    i("q-item-label", { attrs: { caption: "" } }, [
                                      i(
                                        "span",
                                        {
                                          directives: [
                                            {
                                              name: "show",
                                              rawName: "v-show",
                                              value: t.school_roll_status_name,
                                              expression: "item.school_roll_status_name",
                                            },
                                          ],
                                        },
                                        [e._v(e._s(t.school_roll_status_name))],
                                      ),
                                      i(
                                        "span",
                                        {
                                          directives: [
                                            {
                                              name: "show",
                                              rawName: "v-show",
                                              value: t.education_level_name,
                                              expression: "item.education_level_name",
                                            },
                                          ],
                                        },
                                        [e._v(" " + e._s(t.education_level_name))],
                                      ),
                                    ]),
                                  ],
                                  1,
                                ),
                                i(
                                  "q-item-section",
                                  { attrs: { side: "" } },
                                  [
                                    i("q-icon", {
                                      attrs: { name: "cancel", color: "negative" },
                                      on: {
                                        click: function (i) {
                                          return e.removeData(t);
                                        },
                                      },
                                    }),
                                  ],
                                  1,
                                ),
                              ],
                              1,
                            );
                          }),
                          e._l(e.userData, function (t) {
                            return i(
                              "q-item",
                              { key: t.target_level + t.target_no },
                              [
                                i("q-item-section", {
                                  directives: [
                                    {
                                      name: "show",
                                      rawName: "v-show",
                                      value: e.teamData && 0 != e.teamData.length,
                                      expression: "teamData && teamData.length != 0",
                                    },
                                  ],
                                  attrs: { avatar: "" },
                                }),
                                i(
                                  "q-item-section",
                                  [
                                    i("q-item-label", [e._v(e._s(t.target_name))]),
                                    i("q-item-label", { attrs: { caption: "" } }, [
                                      e._v(e._s(t.target_no)),
                                    ]),
                                  ],
                                  1,
                                ),
                                i(
                                  "q-item-section",
                                  { attrs: { side: "" } },
                                  [
                                    i("q-icon", {
                                      attrs: { name: "cancel", color: "negative" },
                                      on: {
                                        click: function (i) {
                                          return e.removeData(t);
                                        },
                                      },
                                    }),
                                  ],
                                  1,
                                ),
                              ],
                              1,
                            );
                          }),
                          e._l(e.groupData, function (t) {
                            return i(
                              "q-item",
                              { key: t.target_level + t.target_no },
                              [
                                i("q-item-section", [e._v(e._s(t.target_name))]),
                                i(
                                  "q-item-section",
                                  { attrs: { side: "" } },
                                  [
                                    i("q-icon", {
                                      attrs: { name: "cancel", color: "negative" },
                                      on: {
                                        click: function (i) {
                                          return e.removeData(t);
                                        },
                                      },
                                    }),
                                  ],
                                  1,
                                ),
                              ],
                              1,
                            );
                          }),
                        ],
                        2,
                      ),
                    ],
                    1,
                  ),
                ],
                1,
              ),
              i(
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
                    value: e.tab,
                    callback: function (t) {
                      e.tab = t;
                    },
                    expression: "tab",
                  },
                },
                [
                  i("q-tab", { attrs: { name: "team", label: "组织架构" } }),
                  e.hideGroup ? e._e() : i("q-tab", { attrs: { name: "group", label: "分组" } }),
                ],
                1,
              ),
              i("q-select", {
                directives: [
                  {
                    name: "show",
                    rawName: "v-show",
                    value: "team" == e.tab,
                    expression: "tab == 'team'",
                  },
                ],
                staticClass: "q-mt-sm",
                attrs: {
                  filled: "",
                  dense: "",
                  label: "年级",
                  options: e.gradeList,
                  "emit-value": "",
                  "map-options": "",
                },
                on: { input: e.changeGrade },
                model: {
                  value: e.gradeNo,
                  callback: function (t) {
                    e.gradeNo = t;
                  },
                  expression: "gradeNo",
                },
              }),
              i(
                "div",
                {
                  directives: [
                    {
                      name: "show",
                      rawName: "v-show",
                      value:
                        "team" == e.tab && e.gradeNo && (!e.treeDatas || 0 == e.treeDatas.length),
                      expression:
                        "tab == 'team' && gradeNo && (!treeDatas || treeDatas.length == 0)",
                    },
                  ],
                  staticClass: "text-center text-grey",
                },
                [e._v("该年级下暂无数据")],
              ),
              i(
                "q-breadcrumbs",
                {
                  directives: [
                    {
                      name: "show",
                      rawName: "v-show",
                      value: "team" == e.tab && 0 != e.teamPath.length,
                      expression: "tab == 'team' && teamPath.length != 0",
                    },
                  ],
                  staticClass: "q-mt-sm q-ml-md",
                  scopedSlots: e._u([
                    {
                      key: "separator",
                      fn: function () {
                        return [i("q-icon", { attrs: { name: "chevron_right" } })];
                      },
                      proxy: !0,
                    },
                  ]),
                },
                e._l(e.teamPath, function (t, a) {
                  return i("q-breadcrumbs-el", {
                    key: a,
                    attrs: { label: t.label },
                    on: {
                      click: function (i) {
                        return e.changeNavi(t);
                      },
                    },
                  });
                }),
                1,
              ),
              i(
                "q-list",
                {
                  directives: [
                    {
                      name: "show",
                      rawName: "v-show",
                      value: "team" == e.tab && e.teamNode && (!e.list || 0 == e.list.length),
                      expression: "tab == 'team' && teamNode && (!list || list.length == 0)",
                    },
                  ],
                  attrs: { bordered: "", separator: "" },
                },
                [
                  "all" == (e.teamNode || {}).target_level
                    ? i(
                        "q-item",
                        [
                          i(
                            "q-item-section",
                            { attrs: { avatar: "" } },
                            [
                              i("q-checkbox", {
                                attrs: { dense: "", val: e.teamNode || {} },
                                on: {
                                  input: function (t) {
                                    return e.selectTeam(e.teamNode || {});
                                  },
                                },
                                model: {
                                  value: e.teamSelected,
                                  callback: function (t) {
                                    e.teamSelected = t;
                                  },
                                  expression: "teamSelected",
                                },
                              }),
                            ],
                            1,
                          ),
                          i("q-item-section", [e._v(e._s((e.teamNode || {}).label))]),
                        ],
                        1,
                      )
                    : e._e(),
                  e._l((e.teamNode || {}).children, function (t) {
                    return i(
                      "q-item",
                      { key: t.node_key },
                      [
                        i(
                          "q-item-section",
                          { attrs: { avatar: "" } },
                          [
                            i("q-checkbox", {
                              attrs: { dense: "", val: t },
                              on: {
                                input: function (i) {
                                  return e.selectTeam(t);
                                },
                              },
                              model: {
                                value: e.teamSelected,
                                callback: function (t) {
                                  e.teamSelected = t;
                                },
                                expression: "teamSelected",
                              },
                            }),
                          ],
                          1,
                        ),
                        i("q-item-section", [e._v(e._s(t.label))]),
                        i("q-item-section", { attrs: { side: "" } }, [
                          i(
                            "span",
                            {
                              staticClass: "text-primary cursor-pointer",
                              on: {
                                click: function (i) {
                                  return e.expandNode(t);
                                },
                              },
                            },
                            [e._v("展开")],
                          ),
                        ]),
                      ],
                      1,
                    );
                  }),
                ],
                2,
              ),
              i(
                "q-list",
                {
                  directives: [
                    {
                      name: "show",
                      rawName: "v-show",
                      value: "team" == e.tab && e.list && 0 != e.list.length,
                      expression: "tab == 'team' && list && list.length != 0",
                    },
                  ],
                  attrs: { bordered: "", separator: "" },
                },
                e._l(e.list, function (t) {
                  return i(
                    "q-item",
                    { key: t.login_name },
                    [
                      i(
                        "q-item-section",
                        { attrs: { avatar: "" } },
                        [
                          i("q-checkbox", {
                            attrs: { dense: "", val: t },
                            on: {
                              input: function (i) {
                                return e.selectUser(t);
                              },
                            },
                            model: {
                              value: e.selected,
                              callback: function (t) {
                                e.selected = t;
                              },
                              expression: "selected",
                            },
                          }),
                        ],
                        1,
                      ),
                      i(
                        "q-item-section",
                        [
                          i("q-item-label", [e._v(e._s(t.name))]),
                          i("q-item-label", { attrs: { caption: "" } }, [
                            e._v(
                              e._s(t.login_name) +
                                " " +
                                e._s(t.sex_name) +
                                " " +
                                e._s(t.school_roll_status),
                            ),
                          ]),
                        ],
                        1,
                      ),
                    ],
                    1,
                  );
                }),
                1,
              ),
              i(
                "q-list",
                {
                  directives: [
                    {
                      name: "show",
                      rawName: "v-show",
                      value: "group" == e.tab,
                      expression: "tab == 'group'",
                    },
                  ],
                  attrs: { bordered: "", separator: "" },
                },
                e._l(e.groupList, function (t) {
                  return i(
                    "q-item",
                    { key: t.id },
                    [
                      i(
                        "q-item-section",
                        { attrs: { avatar: "" } },
                        [
                          i("q-checkbox", {
                            attrs: { dense: "", val: t },
                            on: { input: e.selectGroup },
                            model: {
                              value: e.groupSelected,
                              callback: function (t) {
                                e.groupSelected = t;
                              },
                              expression: "groupSelected",
                            },
                          }),
                        ],
                        1,
                      ),
                      i("q-item-section", [e._v(e._s(t.title))]),
                    ],
                    1,
                  );
                }),
                1,
              ),
              i(
                "q-dialog",
                {
                  model: {
                    value: e.importDialog,
                    callback: function (t) {
                      e.importDialog = t;
                    },
                    expression: "importDialog",
                  },
                },
                [
                  i(
                    "q-card",
                    { staticClass: "full-width", attrs: { flat: "" } },
                    [
                      i("q-card-section", [
                        i("div", { staticClass: "text-bold" }, [e._v("学号批量导入")]),
                      ]),
                      i(
                        "q-card-section",
                        [
                          i(
                            "q-form",
                            {
                              staticClass: "q-gutter-sm full-width",
                              on: { submit: e.importStudents },
                            },
                            [
                              i(
                                "div",
                                { staticClass: "full-width" },
                                [
                                  i("q-input", {
                                    attrs: {
                                      outlined: "",
                                      dense: "",
                                      type: "textarea",
                                      placeholder: "请将学号粘贴至此，每个学号占一行。",
                                      "hide-bottom-space": "",
                                      "lazy-rules": "",
                                      rules: [
                                        function (e) {
                                          return !!e || "请填写该项";
                                        },
                                      ],
                                    },
                                    model: {
                                      value: e.studentsModel,
                                      callback: function (t) {
                                        e.studentsModel = t;
                                      },
                                      expression: "studentsModel",
                                    },
                                  }),
                                  i(
                                    "div",
                                    {
                                      directives: [
                                        {
                                          name: "show",
                                          rawName: "v-show",
                                          value: e.importErrorMessage,
                                          expression: "importErrorMessage",
                                        },
                                      ],
                                      staticClass: "text-red",
                                    },
                                    [e._v(e._s(e.importErrorMessage))],
                                  ),
                                ],
                                1,
                              ),
                              i(
                                "div",
                                { staticClass: "q-gutter-sm" },
                                [
                                  i("q-btn", {
                                    attrs: {
                                      unelevated: "",
                                      color: "primary",
                                      label: "导入",
                                      type: "submit",
                                    },
                                  }),
                                  i("q-btn", {
                                    attrs: { outline: "", color: "grey", label: "取消" },
                                    on: {
                                      click: function (t) {
                                        e.importDialog = !1;
                                      },
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
                    1,
                  ),
                ],
                1,
              ),
              i(
                "q-dialog",
                {
                  model: {
                    value: e.schooleRollStatusDialog,
                    callback: function (t) {
                      e.schooleRollStatusDialog = t;
                    },
                    expression: "schooleRollStatusDialog",
                  },
                },
                [
                  i(
                    "q-card",
                    { staticClass: "full-width", attrs: { flat: "" } },
                    [
                      i(
                        "q-item",
                        [
                          i("q-item-section", { attrs: { avatar: "" } }, [e._v("学籍状态")]),
                          i(
                            "q-item-section",
                            [
                              i("q-select", {
                                attrs: {
                                  outlined: "",
                                  dense: "",
                                  options: e.schoolRollStatusList,
                                  "emit-value": "",
                                  "map-options": "",
                                  multiple: "",
                                },
                                on: {
                                  input: function (t) {
                                    return e.setSchoolRollStatusName(e.srsItem);
                                  },
                                },
                                model: {
                                  value: e.srsItem.school_roll_status,
                                  callback: function (t) {
                                    e.$set(e.srsItem, "school_roll_status", t);
                                  },
                                  expression: "srsItem.school_roll_status",
                                },
                              }),
                            ],
                            1,
                          ),
                        ],
                        1,
                      ),
                      "class" != e.srsItem.target_level
                        ? i(
                            "q-item",
                            [
                              i("q-item-section", { attrs: { avatar: "" } }, [e._v("培养层次")]),
                              i(
                                "q-item-section",
                                [
                                  i("q-select", {
                                    attrs: {
                                      outlined: "",
                                      dense: "",
                                      options: e.educationLevelList,
                                      "emit-value": "",
                                      "map-options": "",
                                      multiple: "",
                                    },
                                    on: {
                                      input: function (t) {
                                        return e.setEducationLevelName(e.srsItem);
                                      },
                                    },
                                    model: {
                                      value: e.srsItem.education_level,
                                      callback: function (t) {
                                        e.$set(e.srsItem, "education_level", t);
                                      },
                                      expression: "srsItem.education_level",
                                    },
                                  }),
                                ],
                                1,
                              ),
                            ],
                            1,
                          )
                        : e._e(),
                    ],
                    1,
                  ),
                ],
                1,
              ),
              i("neu-import-data", { attrs: { config: e.importCompConfig } }),
            ],
            1,
          );
        },
        s = [],
        l = (i("c975"), i("13d5"), i("a434"), i("5319"), i("ddb0"), i("ded3")),
        o = i.n(l),
        n = function () {
          var e = this,
            t = e.$createElement,
            i = e._self._c || t;
          return i(
            "q-dialog",
            {
              attrs: { persistent: "" },
              model: {
                value: e.progressDialog,
                callback: function (t) {
                  e.progressDialog = t;
                },
                expression: "progressDialog",
              },
            },
            [
              i(
                "q-card",
                { staticClass: "full-width", attrs: { flat: "" } },
                [
                  i(
                    "q-card-section",
                    [
                      i(
                        "q-item-section",
                        {
                          directives: [
                            {
                              name: "show",
                              rawName: "v-show",
                              value: !e.progressError,
                              expression: "!progressError",
                            },
                          ],
                        },
                        [e._v("处理中（数据量大时处理速度会比较慢，请耐心等候）...")],
                      ),
                      i(
                        "q-item-section",
                        {
                          directives: [
                            {
                              name: "show",
                              rawName: "v-show",
                              value: !e.progressError,
                              expression: "!progressError",
                            },
                          ],
                        },
                        [
                          i(
                            "q-linear-progress",
                            { attrs: { size: "25px", value: e.progress, color: "accent" } },
                            [
                              i(
                                "div",
                                { staticClass: "absolute-full flex flex-center" },
                                [
                                  i("q-badge", {
                                    attrs: {
                                      color: "white",
                                      "text-color": "accent",
                                      label: e.progressLabel,
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
                      i(
                        "q-item-section",
                        {
                          directives: [
                            {
                              name: "show",
                              rawName: "v-show",
                              value: e.progressError,
                              expression: "progressError",
                            },
                          ],
                        },
                        [e._v("处理结果")],
                      ),
                      i(
                        "q-item-section",
                        {
                          directives: [
                            {
                              name: "show",
                              rawName: "v-show",
                              value: e.progressError,
                              expression: "progressError",
                            },
                          ],
                        },
                        [
                          i("q-input", {
                            attrs: { type: "textarea", readonly: "" },
                            model: {
                              value: e.progressError,
                              callback: function (t) {
                                e.progressError = t;
                              },
                              expression: "progressError",
                            },
                          }),
                        ],
                        1,
                      ),
                      i(
                        "q-item-section",
                        {
                          directives: [
                            {
                              name: "show",
                              rawName: "v-show",
                              value: e.progressError,
                              expression: "progressError",
                            },
                          ],
                        },
                        [
                          i("q-btn", {
                            staticClass: "q-mt-sm",
                            attrs: { outline: "", color: "grey", label: "关闭" },
                            on: {
                              click: function (t) {
                                e.progressDialog = !1;
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
          );
        },
        r = [],
        c = (i("fb6a"), i("e6cf"), i("cd81")),
        u = {
          name: "NeuImportData",
          props: { config: { type: Array, required: !1 }, excel: { type: Array, required: !1 } },
          data() {
            return { progressDialog: !1, progress: 0, progressError: "" };
          },
          watch: {
            config(e) {
              !e || (8 !== e.length && 9 !== e.length) || this.doImport(...e);
            },
            excel(e) {
              e && 2 === e.length && this.doReadExcel(...e);
            },
          },
          computed: {
            progressLabel() {
              return (100 * this.progress).toFixed(2) + "%";
            },
          },
          methods: {
            async doImport(e, t, i, a, s, l, n, r, c = null) {
              const u = 10,
                d = Math.ceil(s.length / u);
              let m = "",
                f = "";
              ((this.progress = 0), (this.progressError = ""), (this.progressDialog = !0));
              for (let p = 0; p < d; p++)
                if (
                  (await this.$axiosAction(
                    e,
                    o()(
                      o()({ action: t }, i),
                      {},
                      { [a]: s.slice(p * u, Math.min(p * u + u, s.length)) },
                    ),
                    "post",
                    !1,
                  ).then((e) => {
                    ((this.progress = ((p + 1) * u) / s.length),
                      0 === e.data.code || e.data.count
                        ? 0 !== e.data.code && e.data.count && r
                          ? (f += `${r(p * u + e.data.count, p * u + 1, Math.min(p * u + u, s.length))}\n`)
                          : 0 === e.data.code && c && c(e.data)
                        : (m = e.data.message));
                  }),
                  m)
                )
                  break;
              m
                ? ((this.progressError = m), n && n())
                : f
                  ? ((this.progressError = f), n && n())
                  : ((this.progressDialog = !1), this.$showSuccessNotify("处理成功"), l && l());
            },
            doReadExcel(e, t) {
              Object(c["c"])(e, (e) => {
                t && t(e);
              });
            },
          },
        },
        d = u,
        m = i("2877"),
        f = i("24e8"),
        p = i("f09f"),
        h = i("a370"),
        y = i("4074"),
        g = i("6b1d"),
        b = i("58a81"),
        v = i("27f9"),
        _ = i("9c40"),
        T = i("eebe"),
        x = i.n(T),
        w = Object(m["a"])(d, n, r, !1, null, null, null),
        k = w.exports;
      x()(w, "components", {
        QDialog: f["a"],
        QCard: p["a"],
        QCardSection: h["a"],
        QItemSection: y["a"],
        QLinearProgress: g["a"],
        QBadge: b["a"],
        QInput: v["a"],
        QBtn: _["a"],
      });
      const q = ["all", "dep", "major", "class"];
      var C = {
          name: "NeuAssignStudent",
          components: { NeuImportData: k },
          props: {
            value: null,
            menuId: String,
            permit: String,
            permitMode: String,
            hideGroup: Boolean,
          },
          data() {
            return {
              assignedData: [],
              schoolRollStatusList: [],
              educationLevelList: [],
              gradeList: [],
              gradeNo: "",
              treeDatas: [],
              teamPath: [],
              teamNode: null,
              teamSelected: [],
              list: [],
              selected: [],
              importDialog: !1,
              studentsModel: "",
              importErrorMessage: "",
              schooleRollStatusDialog: !1,
              srsItem: {},
              tab: "team",
              groupList: [],
              groupSelected: [],
              importCompConfig: null,
            };
          },
          mounted() {
            ((this.assignedData = this.value || []),
              this.$axiosAction("/api/public.api", {
                action: "queryResultOfFunction",
                functionName: "basic.f_query_grade_list()",
              }).then((e) => {
                0 === e.data.code && (this.gradeList = e.data.list);
              }),
              this.$axiosAction("/api/public.api", {
                action: "queryResultOfFunction",
                functionName: "basic.f_query_option_list('school_roll_status')",
              }).then((e) => {
                0 === e.data.code && (this.schoolRollStatusList = e.data.list);
              }),
              this.$axiosAction("/api/public.api", {
                action: "queryResultOfFunction",
                functionName: "basic.f_query_education_level_list()",
              }).then((e) => {
                0 === e.data.code && (this.educationLevelList = e.data.list);
              }),
              this.hideGroup ||
                this.$axiosAction("/api/teacher/basic/memberGroup.api", {
                  action: "queryListForAssignStudent",
                }).then((e) => {
                  if (0 === e.data.code) {
                    this.groupList = e.data.list;
                    for (const e of this.assignedData)
                      if ("group" === e.target_level) {
                        const t = this.groupList.findIndex((t) => t.id === e.target_no);
                        t >= 0 &&
                          (this.groupSelected = this.groupSelected.concat(this.groupList[t]));
                      }
                  }
                }));
          },
          watch: {
            value(e) {
              this.assignedData = e || [];
            },
            assignedData(e) {
              this.$emit("input", e);
            },
          },
          computed: {
            userData() {
              return this.assignedData.reduce(
                (e, t) => ("user" === t.target_level ? e.concat(t) : e),
                [],
              );
            },
            teamData() {
              return this.assignedData.reduce(
                (e, t) => (q.indexOf(t.target_level) >= 0 ? e.concat(t) : e),
                [],
              );
            },
            groupData() {
              return this.assignedData.reduce(
                (e, t) => ("group" === t.target_level ? e.concat(t) : e),
                [],
              );
            },
          },
          methods: {
            changeGrade() {
              this.gradeNo
                ? ((this.list = []),
                  (this.selected = []),
                  this.$axiosAction("/api/teacher/basic/student.api", {
                    action: "queryDepMajorClassListByGrade",
                    menu_id: this.menuId,
                    permit_mode: this.permitMode,
                    grade_nos: [this.gradeNo],
                  }).then((e) => {
                    if (0 === e.data.code)
                      if (
                        ("D" === this.permit
                          ? (this.treeDatas = e.data.list.reduce(
                              (e, t) =>
                                e.concat(
                                  o()(
                                    o()({}, t.children[0]),
                                    {},
                                    {
                                      label: `${t.children[0].label} - ${t.children[0].grade_name}`,
                                    },
                                  ),
                                ),
                              [],
                            ))
                          : (this.treeDatas = e.data.list),
                        this.treeDatas && 0 !== this.treeDatas.length)
                      ) {
                        ((this.teamPath = [this.treeDatas[0]]),
                          (this.teamNode = this.treeDatas[0]),
                          (this.teamSelected = []));
                        for (const e of this.assignedData)
                          if (q.indexOf(e.target_level) >= 0) {
                            const t = this.findNodeByKey(
                              this.treeDatas[0],
                              e.grade_no + "_" + e.target_level + "_" + e.target_no,
                            );
                            t &&
                              (this.teamSelected = this.teamSelected
                                .concat(t)
                                .concat(this.selectAllChildren(t)));
                          }
                      } else
                        ((this.teamPath = []), (this.teamNode = null), (this.teamSelected = []));
                  }))
                : ((this.treeDatas = []),
                  (this.teamPath = []),
                  (this.teamNode = null),
                  (this.teamSelected = []));
            },
            loadList(e) {
              this.$axiosAction("/api/teacher/basic/student.api", {
                action: "queryListForAssignNoPaging",
                menu_id: this.menuId,
                permit_mode: this.permitMode,
                grade_no: e.grade_no,
                class_no: e.target_no,
              })
                .then((e) => {
                  0 === e.data.code &&
                    ((this.list = e.data.list),
                    (this.selected = this.assignedData.reduce(
                      (e, t) =>
                        "user" === t.target_level &&
                        this.list.find((e) => e.login_name === t.target_no)
                          ? e.concat(this.list.find((e) => e.login_name === t.target_no))
                          : e,
                      [],
                    )));
                })
                .catch((e) => {
                  ((this.list = []), (this.selected = []));
                });
            },
            removeData(e) {
              if (q.indexOf(e.target_level) >= 0) {
                const t = this.assignedData.findIndex(
                    (t) =>
                      t.target_level === e.target_level &&
                      t.target_no === e.target_no &&
                      t.grade_no === e.grade_no,
                  ),
                  i = this.findNodeByKey(
                    this.treeDatas[0] || {},
                    e.grade_no + "_" + e.target_level + "_" + e.target_no,
                  );
                if (i) {
                  const e = this.teamSelected.findIndex((e) => e.node_key === i.node_key);
                  (e >= 0 && this.teamSelected.splice(e, 1), this.unselectAllChildren(i));
                }
                this.assignedData.splice(t, 1);
              } else if ("user" === e.target_level) {
                let t = this.selected.findIndex((t) => t.login_name === e.target_no);
                (t >= 0 && this.selected.splice(t, 1),
                  (t = this.assignedData.findIndex(
                    (t) => t.target_level === e.target_level && t.target_no === e.target_no,
                  )),
                  this.assignedData.splice(t, 1));
              } else if ("group" === e.target_level) {
                let t = this.groupSelected.findIndex((t) => t.id === e.target_no);
                (t >= 0 && this.groupSelected.splice(t, 1),
                  (t = this.assignedData.findIndex(
                    (t) => t.target_level === e.target_level && t.target_no === e.target_no,
                  )),
                  this.assignedData.splice(t, 1));
              }
            },
            selectUser(e) {
              if (this.selected.findIndex((t) => t.login_name === e.login_name) >= 0)
                this.assignedData.findIndex(
                  (t) => "user" === t.target_level && t.target_no === e.login_name,
                ) < 0 &&
                  (this.assignedData = this.assignedData.concat({
                    target_level: "user",
                    target_no: e.login_name,
                    target_name: e.name,
                  }));
              else {
                const t = this.assignedData.findIndex(
                  (t) => "user" === t.target_level && t.target_no === e.login_name,
                );
                t >= 0 && this.assignedData.splice(t, 1);
              }
            },
            removeAll() {
              ((this.tab = "team"),
                (this.assignedData = []),
                (this.selected = []),
                (this.teamSelected = []),
                (this.groupSelected = []));
            },
            setSchoolRollStatusName(e) {
              e.school_roll_status && e.school_roll_status.length > 0
                ? (e.school_roll_status_name = this.schoolRollStatusList
                    .reduce(
                      (t, i) =>
                        e.school_roll_status.indexOf(i.value) >= 0 ? t.concat(i.label) : t,
                      [],
                    )
                    .join(","))
                : (e.school_roll_status_name = "");
            },
            setEducationLevelName(e) {
              e.education_level && e.education_level.length > 0
                ? (e.education_level_name = this.educationLevelList
                    .reduce(
                      (t, i) => (e.education_level.indexOf(i.value) >= 0 ? t.concat(i.label) : t),
                      [],
                    )
                    .join(","))
                : (e.education_level_name = "");
            },
            expandNode(e) {
              ((this.teamPath = this.teamPath.concat(e)),
                (this.teamNode = e),
                e.children ? ((this.list = []), (this.selected = [])) : this.loadList(e));
            },
            changeNavi(e) {
              const t = this.teamPath.findIndex((t) => t.node_key === e.node_key);
              (this.teamPath !== t + 1 &&
                (this.teamPath.splice(t + 1, this.teamPath.length - (t + 1)), (this.teamNode = e)),
                e.children && ((this.list = []), (this.selected = [])));
            },
            selectTeam(e) {
              (this.teamSelected.findIndex((t) => t.node_key === e.node_key) >= 0
                ? (this.teamSelected = this.teamSelected
                    .concat(this.selectAllChildren(e))
                    .concat(this.selectParent(e)))
                : (this.unselectAllChildren(e), this.unselectParent(e)),
                (this.assignedData = this.assignedData
                  .reduce(
                    (e, t) =>
                      q.indexOf(t.target_level) >= 0 && this.gradeNo === t.grade_no
                        ? e
                        : e.concat(t),
                    [],
                  )
                  .concat(
                    this.treeDatas.reduce((e, t) => e.concat(this.createAssignedTeam(t)), []),
                  )));
            },
            findNodeByKey(e, t) {
              if (e.node_key === t) return e;
              if (e.children) {
                for (const i of e.children) {
                  if (i.node_key === t) return i;
                  if (i.children) {
                    const e = this.findNodeByKey(i, t);
                    if (e) return e;
                  }
                }
                return null;
              }
              return null;
            },
            findParentOfNode(e, t) {
              for (const i of e.children) {
                if (i.node_key === t) return e;
                if (i.children) {
                  const e = this.findParentOfNode(i, t);
                  if (e) return e;
                }
              }
              return null;
            },
            selectParent(e) {
              const t = this.findParentOfNode(this.treeDatas[0], e.node_key);
              return t &&
                t.children.reduce(
                  (t, i) =>
                    this.teamSelected.findIndex(
                      (t) => t.node_key === i.node_key && i.node_key !== e.node_key,
                    ) >= 0
                      ? t + 1
                      : t,
                  0,
                ) ===
                  t.children.length - 1
                ? [t].concat(this.selectParent(t))
                : [];
            },
            selectAllChildren(e) {
              return e.children
                ? e.children.reduce(
                    (e, t) =>
                      this.teamSelected.findIndex((e) => e.node_key === t.node_key) >= 0
                        ? e
                        : e.concat(t).concat(this.selectAllChildren(t)),
                    [],
                  )
                : [];
            },
            unselectParent(e) {
              const t = this.findParentOfNode(this.treeDatas[0], e.node_key);
              if (t) {
                const e = this.teamSelected.findIndex((e) => e.node_key === t.node_key);
                e >= 0 && (this.teamSelected.splice(e, 1), this.unselectParent(t));
              }
            },
            unselectAllChildren(e) {
              if (e.children)
                for (const t of e.children) {
                  const e = this.teamSelected.findIndex((e) => e.node_key === t.node_key);
                  (e >= 0 && this.teamSelected.splice(e, 1), this.unselectAllChildren(t));
                }
            },
            createAssignedTeam(e) {
              return this.teamSelected.findIndex((t) => t.node_key === e.node_key) >= 0
                ? [
                    {
                      target_level: e.target_level,
                      target_no: e.target_no,
                      grade_no: e.grade_no,
                      target_name: e.target_name,
                      grade_name: e.grade_name,
                    },
                  ]
                : e.children
                  ? e.children.reduce((e, t) => e.concat(this.createAssignedTeam(t)), [])
                  : [];
            },
            openImportDialog() {
              ((this.importDialog = !0), (this.studentsModel = ""), (this.importErrorMessage = ""));
            },
            importStudents() {
              var e = new RegExp(/.*["'`^~&+%?*@#!=()|{}.,:;<> /\\]{1,}.*/);
              if (e.test(this.studentsModel))
                return void this.$showErrorNotify("粘贴的内容中包含非法字符");
              if (0 === this.studentsModel.replace(/(\r\n)/g, /\n/).replace(/\n/g, "").length)
                return void this.$showErrorNotify("请粘贴有效数据");
              const t = this.studentsModel
                  .replace(/(\r\n)/g, /\n/)
                  .split(/\n/)
                  .reduce((e, t) => (t || 0 === t ? e.concat(t) : e), []),
                i = t.length;
              this.importCompConfig = [
                "/api/teacher/basic/student.api",
                "queryImportedListForAssign",
                { menu_id: this.menuId, permit_mode: this.permitMode },
                "students",
                t.reduce((e, t) => e.concat(t), []),
                () => {
                  this.afterImportStudents(i, t);
                },
                () => {
                  this.afterImportStudents(i, t);
                },
                null,
                (e) => {
                  for (const i of e.list) {
                    if (
                      this.assignedData.findIndex(
                        (e) => "user" === e.target_level && e.target_no === i.login_name,
                      ) < 0
                    ) {
                      this.assignedData = this.assignedData.concat({
                        target_level: "user",
                        target_no: i.login_name,
                        target_name: i.name,
                      });
                      const e = this.list.find((e) => e.login_name === i.login_name);
                      e && (this.selected = this.selected.concat(e));
                    }
                    t.splice(
                      t.findIndex((e) => e === i.login_name),
                      1,
                    );
                  }
                },
              ];
            },
            afterImportStudents(e, t) {
              t && 0 !== t.length
                ? ((this.importErrorMessage = `本次共计${e}名学生，其中${e - t.length}人已设置完毕，另有${t.length}名学生学号不存在或您无权设置，具体学号名单如上，请核准后重新操作。`),
                  (this.studentsModel = t.reduce((e, t) => (e ? e + "\n" + t : t), "")))
                : (this.importDialog = !1);
            },
            selectGroup() {
              this.assignedData = this.assignedData
                .reduce((e, t) => ("group" === t.target_level ? e : e.concat(t)), [])
                .concat(
                  this.groupSelected.reduce(
                    (e, t) =>
                      e.concat({ target_level: "group", target_no: t.id, target_name: t.title }),
                    [],
                  ),
                );
            },
          },
        },
        L = C,
        V = i("1c1c"),
        D = i("3b73"),
        S = i("66e5"),
        P = i("0016"),
        N = i("0170"),
        I = i("429b"),
        M = i("7460"),
        R = i("ddd8"),
        $ = i("ead5"),
        O = i("079e"),
        A = i("8f8e"),
        Q = i("0378"),
        z = Object(m["a"])(L, a, s, !1, null, null, null);
      t["a"] = z.exports;
      x()(z, "components", {
        QList: V["a"],
        QExpansionItem: D["a"],
        QItemSection: y["a"],
        QItem: S["a"],
        QIcon: P["a"],
        QItemLabel: N["a"],
        QTabs: I["a"],
        QTab: M["a"],
        QSelect: R["a"],
        QBreadcrumbs: $["a"],
        QBreadcrumbsEl: O["a"],
        QCheckbox: A["a"],
        QDialog: f["a"],
        QCard: p["a"],
        QCardSection: h["a"],
        QForm: Q["a"],
        QInput: v["a"],
        QBtn: _["a"],
      });
    },
  },
]);
