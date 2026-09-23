/**
 * Vue options object recovered from webpack module AST.
 * Source: assets/www/js/10.js -> module "35a8"
 * Route: (shared/core)
 * Component: Welcome
 * Not guaranteed standalone: imports/module aliases must be resolved from sibling .logic.js.
 */
const componentOptions = {
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
            Object(r["e"])(`${e.data.collegeId}_${t.role_type}_${t.login_name}`, t.role_type, this);
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
};
export default componentOptions;
