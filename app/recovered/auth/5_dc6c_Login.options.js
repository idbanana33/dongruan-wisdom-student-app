/**
 * Vue options object recovered from webpack module AST.
 * Source: assets/www/js/5.js -> module "dc6c"
 * Route: /user/login
 * Component: Login
 * Not guaranteed standalone: imports/module aliases must be resolved from sibling .logic.js.
 */
const componentOptions = {
  name: "Login",
  data() {
    return {
      appVer: window.localStorage.appversion,
      productMode: !0,
      serverHint: "请输入学校代码(5位数字)",
      title: this.$appConf.title,
      userinfo: {
        verification_id: null,
        verification_image: null,
        verification_answer: null,
        login_name: "",
        password: "",
      },
      isPwd: !0,
      roleType: "S",
      loginNameList: window.localStorage.loginNameList
        ? JSON.parse(window.localStorage.getItem("loginNameList"))
        : [],
      loginNameOptions: this.loginNameList,
      displayNameList: !1,
      server: "",
      serverName: "",
      captcha: !1,
      serverList: window.localStorage.serverList
        ? JSON.parse(window.localStorage.getItem("serverList"))
        : [],
      serverOptions: this.serverList,
      wechatAppExists: !1,
    };
  },
  mounted() {
    (JPush.setDebugMode(!1),
      JPush.init(),
      window.localStorage.collegeId &&
        ((this.server = window.localStorage.collegeId),
        (this.serverName = window.localStorage.collegeName),
        (this.captcha = !!window.localStorage.captcha && JSON.parse(window.localStorage.captcha)),
        this.getVerificationQuestion()),
      Wechat.isInstalled((e) => {
        this.wechatAppExists = !!e;
      }));
  },
  methods: {
    async queryServerName() {
      return this.$axiosAction(
        `${this.$appConf.portalUrl}/api/server.api`,
        { action: "queryServer", id: this.server },
        "post",
        !1,
      )
        .then((e) => {
          0 === e.data.code && e.data.server
            ? this.setCollegeConfig(this.server, e.data.name, e.data.server, e.data.captcha)
            : this.setCollegeConfig("", "", "", !1);
        })
        .catch((e) => {
          this.setCollegeConfig("", "", "", !1);
        });
    },
    async changeCollegeId() {
      this.server &&
        5 === this.server.length &&
        (await this.queryServerName(), this.getVerificationQuestion());
    },
    resetCollegeId() {
      this.setCollegeConfig("", "", "", !1);
    },
    setCollegeConfig(e, t, i, a) {
      ((this.server = e),
        (this.serverName = t),
        (this.captcha = a),
        e
          ? (window.localStorage.setItem("collegeId", e),
            window.localStorage.setItem("collegeName", t),
            window.localStorage.setItem("server", i),
            window.localStorage.setItem("captcha", JSON.stringify(a)))
          : (window.localStorage.removeItem("collegeId"),
            window.localStorage.removeItem("collegeName"),
            window.localStorage.removeItem("server"),
            window.localStorage.removeItem("captcha")));
    },
    filterLoginName() {
      this.loginNameOptions = this.loginNameList.filter(
        (e) => e.indexOf(this.userinfo.login_name) > -1 && e !== this.userinfo.login_name,
      );
    },
    setLoginName(e) {
      this.userinfo.login_name = e;
    },
    setServer(e) {
      this.server = e;
    },
    filterServer(e, t, i) {
      t(() => {
        const t = e;
        this.serverOptions = this.serverList.filter((e) => e.indexOf(t) > -1);
      });
    },
    async onSubmit() {
      let e = "99999";
      this.serverName || (await this.queryServerName(), this.serverName)
        ? ((e = this.server),
          this.$q.loading.show({ message: "登录中……" }),
          "S" === this.roleType
            ? this.$axiosAction(
                "/api/user/loginout.api",
                r()(
                  r()({ action: "loginStudent" }, this.userinfo),
                  {},
                  {
                    client_type: "App",
                    client_ver: this.appVer,
                    client_extra: JSON.stringify(window.device),
                  },
                ),
              )
                .then((t) => {
                  (this.$q.loading.hide(),
                    0 === t.data.code
                      ? this.afterLogin(
                          t.data.counsellorLabel,
                          t.data.captcha,
                          t.data.remind,
                          t.data.weixinmp,
                          t.data.user,
                          t.data.menus,
                          e,
                          t.data.compelMob,
                        )
                      : 1005 !== t.data.code && this.getVerificationQuestion());
                })
                .catch(() => this.$q.loading.hide())
            : "T" === this.roleType
              ? this.$axiosAction(
                  "/api/user/loginout.api",
                  r()(
                    r()({ action: "loginTeacher" }, this.userinfo),
                    {},
                    {
                      client_type: "App",
                      client_ver: this.appVer,
                      client_extra: JSON.stringify(window.device),
                    },
                  ),
                )
                  .then((t) => {
                    (this.$q.loading.hide(),
                      0 === t.data.code
                        ? this.afterLogin(
                            t.data.counsellorLabel,
                            t.data.captcha,
                            t.data.remind,
                            t.data.weixinmp,
                            t.data.user,
                            t.data.menus,
                            e,
                            t.data.compelMob,
                          )
                        : 1005 !== t.data.code && this.getVerificationQuestion());
                  })
                  .catch(() => this.$q.loading.hide())
              : this.$axiosAction(
                  "/api/user/loginout.api",
                  r()(
                    r()({ action: "loginMaintainer" }, this.userinfo),
                    {},
                    {
                      client_type: "App",
                      client_ver: this.appVer,
                      client_extra: JSON.stringify(window.device),
                    },
                  ),
                )
                  .then((t) => {
                    (this.$q.loading.hide(),
                      0 === t.data.code
                        ? this.afterLogin(
                            t.data.counsellorLabel,
                            t.data.captcha,
                            t.data.remind,
                            t.data.weixinmp,
                            t.data.user,
                            t.data.menus,
                            e,
                            t.data.compelMob,
                          )
                        : 1005 !== t.data.code && this.getVerificationQuestion());
                  })
                  .catch(() => this.$q.loading.hide()))
        : this.$showErrorNotify("学校代码错误");
    },
    afterLogin(e, t, i, a, s, o, r, l) {
      (window.localStorage.setItem("counsellorlabel", e),
        window.localStorage.setItem("captcha", JSON.stringify(t)),
        window.localStorage.setItem("remind", JSON.stringify(i)),
        window.localStorage.setItem("weixinmp", JSON.stringify(a)),
        this.$addStorageEvent(1, "userinfo", JSON.stringify(s), !1),
        this.$addStorageEvent(1, "menu", JSON.stringify(o), !1),
        this.$addStorageEvent(1, "menuappver", this.appVer, !1),
        Object(n["e"])(`${r}_${s.role_type}_${s.login_name}`, s.role_type, this),
        this.loginNameList.findIndex((e) => e === s.login_name) < 0 &&
          window.localStorage.setItem(
            "loginNameList",
            JSON.stringify(this.loginNameList.concat(s.login_name)),
          ),
        this.serverList.findIndex((e) => e === this.server) < 0 &&
          window.localStorage.setItem(
            "serverList",
            JSON.stringify(this.serverList.concat(this.server)),
          ));
      const c = new CustomEvent("resetBadge", null);
      (window.dispatchEvent(c),
        1 === l && t
          ? this.$router.push({ path: "/user/bindingMob", query: { compelMob: !0 } })
          : "T" === this.roleType
            ? this.$router.push({
                path:
                  this.$route.query.path && "/" !== this.$route.query.path
                    ? this.$route.query.path
                    : "/teacher/index",
                query: this.$route.query.query ? this.$route.query.query : {},
              })
            : "S" === this.roleType
              ? this.$router.push({
                  path:
                    this.$route.query.path && "/" !== this.$route.query.path
                      ? this.$route.query.path
                      : "/student/index",
                  query: this.$route.query.query ? this.$route.query.query : {},
                })
              : this.$router.push({
                  path:
                    this.$route.query.path && "/" !== this.$route.query.path
                      ? this.$route.query.path
                      : "/maintainer/index",
                  query: this.$route.query.query ? this.$route.query.query : {},
                }));
    },
    moveTo(e) {
      this.$router.push(e);
    },
    goBack() {
      this.$router.go(-1);
    },
    moveToPwd() {
      this.serverName
        ? this.captcha
          ? this.moveTo("/user/findPwd")
          : this.$showErrorNotify("该学校暂未开放密码找回服务")
        : this.$showErrorNotify("请先输入学校代码");
    },
    wxLogin() {
      Wechat.isInstalled((e) => {
        if (e) {
          const e = "snsapi_userinfo",
            t = `_${Date.now()}`;
          Wechat.auth(
            e,
            t,
            (e) => {
              e.state === t
                ? (this.$q.loading.show({ message: "登录中……" }),
                  this.$axiosAction(`${this.$appConf.portalUrl}/api/server.api`, {
                    action: "wxLogin",
                    code: e.code,
                  }).then((e) => {
                    (0 === e.data.code &&
                      (this.setCollegeConfig(e.data.id, e.data.name, e.data.server, e.data.captcha),
                      this.$axiosAction("/api/user/loginout.api", {
                        action: "wxLogin",
                        login_key: e.data.login_key,
                        client_type: "App",
                        client_ver: this.appVer,
                        client_extra: JSON.stringify(window.device),
                      })
                        .then((t) => {
                          (this.$q.loading.hide(),
                            0 === t.data.code &&
                              this.afterLogin(
                                t.data.counsellorLabel,
                                t.data.captcha,
                                t.data.remind,
                                t.data.weixinmp,
                                t.data.user,
                                t.data.menus,
                                e.data.id,
                                t.data.compelMob,
                              ));
                        })
                        .catch(() => this.$q.loading.hide())),
                      this.$q.loading.hide());
                  }))
                : this.$showErrorNotify("授权处理过期");
            },
            (e) => {
              this.$showErrorNotify(e);
            },
          );
        } else this.$showErrorNotify("未安装微信");
      });
    },
    getVerificationQuestion() {
      this.$axiosAction("/api/user/loginout.api", {
        action: "queryVerificationQuestion",
        client_type: "App",
      }).then((e) => {
        (this.$q.loading.hide(),
          0 === e.data.code &&
            ((this.userinfo.verification_id = e.data.verification_id),
            (this.userinfo.verification_image = e.data.verification_image)));
      });
    },
  },
};
export default componentOptions;
