(window["webpackJsonp"] = window["webpackJsonp"] || []).push([
  [10],
  {
    "35a8": function (e, t, o) {
      "use strict";
      o.r(t);
      var i = function () {
          var e = this,
            t = e.$createElement,
            o = e._self._c || t;
          return o(
            "q-layout",
            { attrs: { view: "hhh lpr fFf" } },
            [
              o(
                "q-page-container",
                [
                  o(
                    "q-page",
                    [
                      o(
                        "div",
                        { staticClass: "full-width" },
                        [o("q-img", { attrs: { src: e.logoImage } })],
                        1,
                      ),
                      o(
                        "div",
                        { staticClass: "absolute-bottom text-center q-mb-md" },
                        [
                          o("q-btn", {
                            staticClass: "q-px-lg q-py-xs",
                            attrs: { outline: "", label: "开始使用", color: "primary" },
                            on: {
                              click: function (t) {
                                return e.moveTo("/user/login", !0);
                              },
                            },
                          }),
                          o(
                            "div",
                            { staticClass: "text-grey q-mt-sm row items-center justify-center" },
                            [
                              o(
                                "div",
                                [
                                  o("q-icon", {
                                    directives: [
                                      {
                                        name: "show",
                                        rawName: "v-show",
                                        value: !e.agreed,
                                        expression: "!agreed",
                                      },
                                    ],
                                    attrs: { name: "check_box_outline_blank", size: "xs" },
                                    on: {
                                      click: function (t) {
                                        e.agreed = !0;
                                      },
                                    },
                                  }),
                                  o("q-icon", {
                                    directives: [
                                      {
                                        name: "show",
                                        rawName: "v-show",
                                        value: e.agreed,
                                        expression: "agreed",
                                      },
                                    ],
                                    attrs: { name: "check_box", size: "xs" },
                                    on: {
                                      click: function (t) {
                                        e.agreed = !1;
                                      },
                                    },
                                  }),
                                ],
                                1,
                              ),
                              o("div", { staticClass: "row items-center" }, [
                                e._v("\n            已同意《"),
                                o(
                                  "span",
                                  {
                                    staticStyle: { "text-decoration": "underline" },
                                    on: {
                                      click: function (t) {
                                        return e.moveTo("/policy/termsOfUse", !1);
                                      },
                                    },
                                  },
                                  [e._v("用户协议")],
                                ),
                                e._v("》及《"),
                                o(
                                  "span",
                                  {
                                    staticStyle: { "text-decoration": "underline" },
                                    on: {
                                      click: function (t) {
                                        return e.moveTo("/policy/privacyPolicy", !1);
                                      },
                                    },
                                  },
                                  [e._v("隐私政策")],
                                ),
                                e._v("》\n          "),
                              ]),
                            ],
                          ),
                        ],
                        1,
                      ),
                      o(
                        "q-dialog",
                        {
                          attrs: { "full-width": "" },
                          model: {
                            value: e.policyDialog,
                            callback: function (t) {
                              e.policyDialog = t;
                            },
                            expression: "policyDialog",
                          },
                        },
                        [
                          o(
                            "q-card",
                            { staticClass: "full-width", attrs: { flat: "" } },
                            [
                              o("q-card-section", [
                                o("div", [
                                  e._v(
                                    "\n            欢迎使用东软智慧学工，我们依据最新的监管要求更新了《",
                                  ),
                                  o(
                                    "span",
                                    {
                                      staticStyle: { "text-decoration": "underline" },
                                      on: {
                                        click: function (t) {
                                          return e.moveTo("/policy/termsOfUse", !1);
                                        },
                                      },
                                    },
                                    [e._v("用户协议")],
                                  ),
                                  e._v("》及《"),
                                  o(
                                    "span",
                                    {
                                      staticStyle: { "text-decoration": "underline" },
                                      on: {
                                        click: function (t) {
                                          return e.moveTo("/policy/privacyPolicy", !1);
                                        },
                                      },
                                    },
                                    [e._v("隐私政策")],
                                  ),
                                  e._v("》，特向您说明如下："),
                                  o("br"),
                                  e._v(
                                    "\n            1、东软智慧学工系统是由大连东软教育科技集团有限公司开发运营的为您提供学生管理服务的应用（为了方便说明，大连东软教育科技集团有限公司简称“我们”）。我们非常重视您的个人信息和隐私保护，为向您提供产品相关的基础功能和服务，我们会在遵循法律法规的前提下，收集、使用合法必要的信息；",
                                  ),
                                  o("br"),
                                  e._v(
                                    "\n            2、根据您在使用过程中的不同服务场景，我们会基于您的明示授权，获取您的位置（用于请假、签到、信息收集、流程申请等业务）、系统通知权限（用于向您推送必要的通知）、存储（用于请假、信息收集、流程申请、寝室检查等业务）、相机（用于请假、信息收集、流程申请、寝室检查等业务）、设备号信息（用于保障您的账号安全）等，您有权拒绝或取消授权；",
                                  ),
                                  o("br"),
                                  e._v(
                                    "\n            3、我们会采取业界先进的安全措施和技术保护您的信息安全，未经您同意，我们不会从第三方处获取、共享或向其提供您的信息；",
                                  ),
                                  o("br"),
                                  e._v(
                                    "\n            4、我们设立了个人信息保护专职部门（或个人信息保护专员），当您有其他投诉、建议、未成年人信息相关问题时，可将您的问题发送至我们的客服邮箱：wisestu@neuedu.com。",
                                  ),
                                  o("br"),
                                  e._v(
                                    "\n            为了更好地保护您的权益，请您务必审慎阅读、充分理解东软智慧学工的《",
                                  ),
                                  o(
                                    "span",
                                    {
                                      staticStyle: { "text-decoration": "underline" },
                                      on: {
                                        click: function (t) {
                                          return e.moveTo("/policy/termsOfUse", !1);
                                        },
                                      },
                                    },
                                    [e._v("用户协议")],
                                  ),
                                  e._v("》和《"),
                                  o(
                                    "span",
                                    {
                                      staticStyle: { "text-decoration": "underline" },
                                      on: {
                                        click: function (t) {
                                          return e.moveTo("/policy/privacyPolicy", !1);
                                        },
                                      },
                                    },
                                    [e._v("隐私政策")],
                                  ),
                                  e._v(
                                    "》。如您同意，请点击“同意”，开始接受我们的服务。\n            ",
                                  ),
                                ]),
                                o(
                                  "div",
                                  { staticClass: "text-right" },
                                  [
                                    o("q-btn", {
                                      staticClass: " q-mr-sm",
                                      attrs: { outline: "", color: "grey", label: "不同意并退出" },
                                      on: { click: e.refusePolicy },
                                    }),
                                    o("q-btn", {
                                      attrs: { unelevated: "", color: "primary", label: "同意" },
                                      on: { click: e.acceptPolicy },
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
        a = [],
        r = o("ad56"),
        n = {
          name: "Welcome",
          data() {
            return {
              logoImage: `${cordova.file.applicationDirectory}www/img/screen.png`,
              agreed: !1,
              policyDialog: !1,
            };
          },
          mounted() {
            window.localStorage.userinfo
              ? this.$axiosAction(
                  "/api/user/user.api",
                  {
                    action: "reconnect",
                    client_type: "App",
                    client_ver: window.localStorage.appversion,
                    client_extra: JSON.stringify(window.device),
                  },
                  "post",
                  !1,
                ).then((e) => {
                  if (0 === e.data.code) {
                    (window.localStorage.setItem("counsellorlabel", e.data.counsellorLabel),
                      window.localStorage.setItem("captcha", JSON.stringify(e.data.captcha)),
                      window.localStorage.setItem("remind", JSON.stringify(e.data.remind)),
                      window.localStorage.setItem("weixinmp", JSON.stringify(e.data.weixinmp)));
                    const t = JSON.parse(window.localStorage.getItem("userinfo"));
                    Object(r["e"])(
                      `${e.data.collegeId}_${t.role_type}_${t.login_name}`,
                      t.role_type,
                      this,
                    );
                    const o = new CustomEvent("resetBadge", null);
                    (window.dispatchEvent(o),
                      1 === e.data.compelMob && e.data.captcha
                        ? this.$router.push({ path: "/user/bindingMob", query: { compelMob: !0 } })
                        : this.$route.query.path && "/" !== this.$route.query.path
                          ? this.$router.push({
                              path: this.$route.query.path,
                              query: this.$route.query.query ? this.$route.query.query : {},
                            })
                          : "T" === t.role_type
                            ? this.$router.push({
                                path: "/teacher/index",
                                query: this.$route.query.query ? this.$route.query.query : {},
                              })
                            : "S" === t.role_type
                              ? this.$router.push({
                                  path: "/student/index",
                                  query: this.$route.query.query ? this.$route.query.query : {},
                                })
                              : this.$router.push({
                                  path: "/maintainer/index",
                                  query: this.$route.query.query ? this.$route.query.query : {},
                                }));
                  }
                  Object(r["b"])(this, !0);
                })
              : (Object(r["b"])(this, !0),
                JPush.isPlatformIOS() ||
                  "accepted" === window.localStorage.policystatus ||
                  (this.policyDialog = !0));
          },
          methods: {
            moveTo(e, t) {
              !t || this.agreed
                ? this.$router.push(e)
                : this.$q.notify({
                    message: "请先阅读并同意用户协议及隐私政策。",
                    position: "bottom",
                    timeout: 2e3,
                  });
            },
            refusePolicy() {
              navigator.app.exitApp();
            },
            acceptPolicy() {
              (window.localStorage.setItem("policystatus", "accepted"), (this.policyDialog = !1));
            },
          },
        },
        c = n,
        s = o("2877"),
        l = o("4d5a"),
        u = o("09e3"),
        p = o("9989"),
        d = o("068f"),
        y = o("9c40"),
        h = o("0016"),
        m = o("24e8"),
        v = o("f09f"),
        g = o("a370"),
        w = o("eebe"),
        q = o.n(w),
        f = Object(s["a"])(c, i, a, !1, null, null, null);
      t["default"] = f.exports;
      q()(f, "components", {
        QLayout: l["a"],
        QPageContainer: u["a"],
        QPage: p["a"],
        QImg: d["a"],
        QBtn: y["a"],
        QIcon: h["a"],
        QDialog: m["a"],
        QCard: v["a"],
        QCardSection: g["a"],
      });
    },
  },
]);
