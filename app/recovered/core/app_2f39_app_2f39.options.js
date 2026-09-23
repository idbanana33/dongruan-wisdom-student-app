/**
 * Vue options object recovered from webpack module AST.
 * Source: assets/www/js/app.js -> module "2f39"
 * Route: (shared/core)
 * Component: app_2f39
 * Not guaranteed standalone: imports/module aliases must be resolved from sibling .logic.js.
 */
const componentOptions = {
  name: "App",
  provide() {
    return { reload: this.reload };
  },
  data() {
    return { RouterState: !0 };
  },
  created() {
    (window.localStorage.setItem("appversion", this.$appConf.appVersion),
      this.$axios.interceptors.response.use(
        (e) => {
          if (!e.config.headers.forbid_notify && e.data.message)
            if (401 === e.data.code)
              "/" !== this.$route.path &&
                (this.$showErrorNotify("会话已过期，请重新登录"),
                this.$addStorageEvent(1, "userinfo", null, !0),
                this.$addStorageEvent(1, "menu", null, !0),
                this.$addStorageEvent(1, "menuappver", null, !0),
                this.$router.replace({
                  path: "/",
                  query: {
                    path: this.$route.path,
                    query: this.$route.query,
                    params: this.$route.params,
                  },
                }));
            else {
              if (901 === e.data.code)
                return (
                  this.$showErrorNotify(e.data.message),
                  Object(h["b"])(this, !0),
                  Promise.reject(e)
                );
              0 === e.data.code
                ? this.$showSuccessNotify(e.data.message)
                : this.$showErrorNotify(e.data.message);
            }
          return (this.checkNewlyVer(e.data.systemmillisecond), e);
        },
        (e) => (this.$q.loading.hide(), this.$showErrorNotify("服务器出现错误"), Promise.reject(e)),
      ));
  },
  methods: {
    reload() {
      ((this.RouterState = !1),
        this.$nextTick(() => {
          this.RouterState = !0;
        }));
    },
    checkNewlyVer(e) {
      try {
        if (!e) return;
        if (
          window.localStorage.lastcheckvertime &&
          !(parseInt(window.localStorage.lastcheckvertime) + 864e5 < e)
        )
          return;
        (window.localStorage.setItem("lastcheckvertime", e), Object(h["b"])(this, !0));
      } catch (n) {}
    },
  },
};
export default componentOptions;
