/**
 * Vue options object recovered from webpack module AST.
 * Source: assets/www/js/120.js -> module "d313"
 * Route: /user/bindingMob
 * Component: BindingMob
 * Not guaranteed standalone: imports/module aliases must be resolved from sibling .logic.js.
 */
const componentOptions = {
  name: "BindingMob",
  data() {
    return {
      compelMob: this.$route.query.compelMob,
      captcha: window.localStorage.captcha && JSON.parse(window.localStorage.captcha),
      preMob: this.$route.query.mob,
      mob: "",
      vcode: "",
      mobLocked: !1,
      sendLabel: "获取验证码",
      sent: !1,
      userRoleType: JSON.parse(window.localStorage.userinfo).role_type,
      managers: [],
      applyResult: "",
    };
  },
  mounted() {},
  methods: {
    goBack() {
      this.$router.push("/user/account");
    },
    sendVcode() {
      const t = Object(o["a"])(this.mob);
      t
        ? this.$showErrorNotify(t)
        : this.mob === this.preMob
          ? this.$showErrorNotify("新手机号与原手机号相同")
          : (this.$q.loading.show(),
            this.$axiosAction("/api/user/bindingMob.api", { action: "sendVcode", mob: this.mob })
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
                } else
                  t.data.managers &&
                    t.data.managers.length > 0 &&
                    (this.managers = t.data.managers);
                this.$q.loading.hide();
              })
              .catch((t) => {
                this.$q.loading.hide();
              }));
    },
    bindingMob() {
      this.mob
        ? this.vcode
          ? this.$axiosAction("/api/user/bindingMob.api", {
              action: "bindingMob",
              mob: this.mob,
              vcode: this.vcode,
            }).then((t) => {
              0 === t.data.code &&
                (this.compelMob
                  ? "T" === this.userRoleType
                    ? this.$router.push("/teacher/index")
                    : "S" === this.userRoleType
                      ? this.$router.push("/student/index")
                      : this.$router.push("/maintainer/index")
                  : this.goBack());
            })
          : this.$showErrorNotify("请输入验证码")
        : this.$showErrorNotify("请输入手机号");
    },
    changeMob() {
      ((this.managers = []), (this.applyResult = ""));
    },
    applyBindingMob(t, e) {
      this.$axiosAction("/api/user/bindingMob.api", {
        action: "applyBindingMob",
        mob: this.mob,
        pre_mob: this.preMob ? this.preMob : "",
        teacher_no: t,
      }).then((t) => {
        0 === t.data.code &&
          ((this.managers = []),
          this.compelMob
            ? (this.applyResult = `申请已发送，待${e}老师帮您绑定完成后，可重新登录。`)
            : this.goBack());
      });
    },
  },
};
export default componentOptions;
