/**
 * Vue options object recovered from webpack module AST.
 * Source: assets/www/js/12.js -> module "7ee9"
 * Route: /maintainer/index
 * Component: MaintainerIndex
 * Not guaranteed standalone: imports/module aliases must be resolved from sibling .logic.js.
 */
const componentOptions = {
  name: "MaintainerIndex",
  data() {
    return {
      appVer: window.localStorage.appversion,
      title: this.$appConf.title,
      drawer: !1,
      user: window.localStorage.userinfo ? JSON.parse(window.localStorage.getItem("userinfo")) : {},
      badgeCount: 0,
      record: {},
    };
  },
  created() {
    (document.addEventListener("backbutton", this.backButton, !1),
      document.addEventListener("refreshTodoBadge", this.refreshTodoBadge, !1));
  },
  destroyed() {
    (window.removeEventListener("popstate", this.goBack, !1),
      document.removeEventListener("backbutton", this.exitApp, !1),
      document.removeEventListener("backbutton", this.backButton, !1),
      document.removeEventListener("refreshTodoBadge", this.refreshTodoBadge, !1));
  },
  mounted() {
    (window.history &&
      window.history.pushState &&
      (history.pushState(null, null, document.URL),
      window.addEventListener("popstate", this.goBack, !1)),
      this.loadMaintainerUserInfo(),
      this.refreshTodoBadge());
  },
  methods: {
    loadMaintainerUserInfo() {
      this.$axiosAction("/api/teacher/basic/maintainer.api", {
        action: "getMaintainerInfo",
        maintainer_no: this.user.login_name,
      }).then((t) => {
        this.record = t.data.info;
      });
    },
    refreshTodoBadge() {
      cordova.plugins.notification.badge.get((t) => {
        this.badgeCount = t;
      });
    },
    repairList() {
      this.$router.push("/maintainer/repairList");
    },
    moveTo(t) {
      t && this.$router.push(t);
    },
    checkVersion() {
      Object(o["b"])(this, !1);
    },
    goBack() {
      history.pushState(null, null, document.URL);
    },
    backButton() {
      if (!1 === this.note) {
        (this.$q.notify({
          message: `再按一次退出${this.$appConf.title}`,
          timeout: 1500,
          position: "bottom",
        }),
          (this.note = !0));
        var t = setInterval(() => {
          ((this.note = !1), clearInterval(t));
        }, 2e3);
      }
      document.addEventListener("backbutton", this.exitApp, !1);
      var e = setInterval(() => {
        (clearInterval(e), document.removeEventListener("backbutton", this.exitApp, !1));
      }, 2e3);
    },
    exitApp() {
      navigator.app.exitApp();
    },
    logout() {
      this.$q
        .dialog({
          title: "确认",
          message: "是否退出当前帐号？",
          persistent: !0,
          cancel: { label: "取消", outline: !0, color: "grey" },
          ok: { label: "确认", unelevated: !0, color: "negative" },
        })
        .onOk(() => {
          this.$axiosAction("/api/user/user.api", { action: "logout" }).then((t) => {
            (this.$addStorageEvent(1, "userinfo", null, !0),
              JPush.deleteAlias({ sequence: 1 }, null, null));
            const e = new CustomEvent("setNotificationBadge", { detail: { badge: 0 } });
            (window.dispatchEvent(e), this.$router.push("/"));
          });
        });
    },
  },
};
export default componentOptions;
