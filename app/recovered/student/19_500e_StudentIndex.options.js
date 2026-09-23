/**
 * Vue options object recovered from webpack module AST.
 * Source: assets/www/js/19.js -> module "500e"
 * Route: /student/index
 * Component: StudentIndex
 * Not guaranteed standalone: imports/module aliases must be resolved from sibling .logic.js.
 */
const componentOptions = {
  name: "StudentIndex",
  data() {
    return {
      appVer: window.localStorage.appversion,
      title: this.$appConf.title,
      drawer: !1,
      note: !1,
      menus: window.localStorage.menu ? JSON.parse(window.localStorage.getItem("menu")) : [],
      user: window.localStorage.userinfo ? JSON.parse(window.localStorage.getItem("userinfo")) : {},
      newslist: [],
      newstitle: "加载中",
      menuColor: Object(i["d"])("news"),
      topId: 0,
      badgeCount: 0,
    };
  },
  mounted() {
    (window.history &&
      window.history.pushState &&
      (history.pushState(null, null, document.URL),
      window.addEventListener("popstate", this.goBack, !1)),
      this.appVer !== window.localStorage.getItem("menuappver") && this.refreshMenu(() => {}),
      this.newList(),
      this.refreshTodoBadge());
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
  computed: {
    apps() {
      return (this.menus || []).reduce((t, e) => ("S" === e.domain ? t.concat(e) : t), []);
    },
    topApps() {
      return this.apps && this.apps.length > 3
        ? this.apps.reduce((t, e, s) => (s < 4 ? t.concat(e) : t), [])
        : null;
    },
    normalApps() {
      return this.apps && this.apps.length > 3
        ? this.apps.reduce((t, e, s) => (s > 3 ? t.concat(e) : t), [])
        : this.apps;
    },
    newsInfo() {
      return (this.menus || []).find((t) => "news" === t.id);
    },
  },
  watch: {
    topId() {
      this.setCarousel();
    },
  },
  methods: {
    refreshTodoBadge() {
      cordova.plugins.notification.badge.get((t) => {
        this.badgeCount = t;
      });
    },
    moveTo(t) {
      t && this.$router.push(t);
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
              this.$addStorageEvent(1, "menu", null, !0),
              this.$addStorageEvent(1, "menuappver", null, !0),
              JPush.deleteAlias({ sequence: 1 }, null, null));
            const e = new CustomEvent("setNotificationBadge", { detail: { badge: 0 } });
            (window.dispatchEvent(e), this.$router.push("/"));
          });
        });
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
    getMenuColor(t) {
      return Object(i["d"])(t);
    },
    goExperience() {
      this.$router.push({
        name: "/student/experience/index",
        query: { stuNo: this.user.login_name },
      });
    },
    newList() {
      this.$axiosAction("/api/teacher/news/news.api", { action: "getPublicNewList" })
        .then((t) => {
          0 === t.data.code &&
            ((this.newslist = t.data.result),
            (this.newstitle = this.newslist[this.topId].title),
            this.setCarousel());
        })
        .catch((t) => {
          this.newslist = [];
        });
    },
    toNews(t, e) {
      "" !== e && null !== e
        ? (this.$axiosAction("/api/teacher/news/news.api", {
            action: "insertNewsLog",
            id: t,
            roleId: this.user.role_id,
            role_type: this.user.role_type,
          })
            .then((t) => {
              0 === t.data.code ||
                ("2001" === t.data.code &&
                  (this.$showErrorNotify("该新闻被删除或不存在"),
                  this.$router.push("student/news/index")));
            })
            .catch((t) => {
              this.$showErrorNotify("系统错误");
            }),
          cordova.InAppBrowser.open(e, "_system"))
        : this.$router.push(`/student/news/detail?id=${t}`);
    },
    setCarousel() {
      this.newslist.length > 0 &&
        setTimeout(() => {
          ((this.topId = this.topId + 1),
            this.topId > this.newslist.length && (this.topId = 0),
            (this.newstitle = this.newslist[this.topId].title));
        }, 4e3);
    },
    checkVersion() {
      Object(i["b"])(this, !1);
    },
    refreshMenu(t) {
      this.$axiosAction("/api/user/user.api", { action: "queryMenus" }).then((e) => {
        (0 === e.data.code &&
          ((this.menus = e.data.menus),
          this.$addStorageEvent(1, "menu", JSON.stringify(e.data.menus), !1),
          this.$addStorageEvent(1, "menuappver", this.appVer, !1)),
          t());
      });
    },
  },
};
export default componentOptions;
