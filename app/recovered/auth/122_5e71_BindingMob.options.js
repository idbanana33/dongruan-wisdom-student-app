/**
 * Vue options object recovered from webpack module AST.
 * Source: assets/www/js/122.js -> module "5e71"
 * Route: /user/findPwd
 * Component: BindingMob
 * Not guaranteed standalone: imports/module aliases must be resolved from sibling .logic.js.
 */
const componentOptions = {
  name: "BindingMob",
  data() {
    return {
      captcha: window.localStorage.captcha && JSON.parse(window.localStorage.captcha),
      step: 1,
      login_name: "",
      mob: "",
      vcode: "",
      mobLocked: !1,
      sendLabel: "获取验证码",
      sent: !1,
      newpassword: null,
      password2: null,
      isPwd: !0,
      isPwd2: !0,
      counsellorLabel: "",
    };
  },
  mounted() {
    this.$axiosAction("/api/memory.api", { action: "queryCounsellorLabelConfig" }, "post", !1).then(
      (t) => {
        0 === t.data.code && (this.counsellorLabel = t.data.counsellorLabel);
      },
    );
  },
  methods: {
    goBack() {
      this.$router.go(-1);
    },
    nextStep(t) {
      if (2 === t && !this.login_name) return (this.$showErrorNotify("请输入学号/教工号"), !1);
      this.step = t;
    },
    handleNextStep(t) {
      this.checkVcode().then((e) => {
        if (!e) return (this.$showErrorNotify("输入的验证码不正确"), !1);
        this.step = t;
      });
    },
    async checkVcode() {
      if (!this.mob) return (this.$showErrorNotify("请输入手机号"), !1);
      if (!this.vcode) return (this.$showErrorNotify("请输入验证码"), !1);
      try {
        const t = await this.$axiosAction(
          "/api/user/findPwd.api",
          { action: "checkVcode", login_name: this.login_name, mob: this.mob, vcode: this.vcode },
          "post",
          !1,
        );
        return 0 === t.data.code;
      } catch (t) {
        return (this.$showErrorNotify("验证失败，请稍后再试"), !1);
      }
    },
    sendVcode() {
      const t = Object(o["a"])(this.mob);
      t
        ? this.$showErrorNotify(t)
        : (this.$q.loading.show(),
          this.$axiosAction("/api/user/findPwd.api", {
            action: "sendVcode",
            login_name: this.login_name,
            mob: this.mob,
          })
            .then((t) => {
              if (0 === t.data.code) {
                ((this.mobLocked = !0), (this.sent = !0));
                let t = 600;
                const e = setInterval(() => {
                  (t--,
                    t <= 0
                      ? (clearInterval(e), (this.sendLabel = "获取验证码"), (this.sent = !1))
                      : (this.sendLabel = `${t}秒后可重发`));
                }, 1e3);
              }
              this.$q.loading.hide();
            })
            .catch((t) => {
              this.$q.loading.hide();
            }));
    },
    checkPwd() {
      const t = new RegExp("(?=.*[0-9])(?=.*[a-zA-Z])(?=.*[^a-zA-Z0-9]).{8,30}");
      return (
        !!t.test(this.newpassword) ||
        (this.$showErrorNotify("密码中必须包含字母、数字、特称字符，至少8个字符，最多30个字符。"),
        !1)
      );
    },
    validConfirmPwd() {
      return (
        this.newpassword === this.password2 || (this.$showErrorNotify("两次密码输入不一致"), !1)
      );
    },
    resetPwd() {
      this.checkPwd() &&
        this.validConfirmPwd() &&
        this.$axiosAction("/api/user/findPwd.api", {
          action: "resetPwd",
          login_name: this.login_name,
          mob: this.mob,
          newpassword: this.newpassword,
        }).then((t) => {
          0 === t.data.code && this.goBack();
        });
    },
  },
};
export default componentOptions;
