/**
 * Vue options object recovered from webpack module AST.
 * Source: assets/www/js/94.js -> module "6b6a"
 * Route: /teacher/news/detail
 * Component: newsDetail
 * Not guaranteed standalone: imports/module aliases must be resolved from sibling .logic.js.
 */
const componentOptions = {
  name: "newsDetail",
  data() {
    return {
      roleId: JSON.parse(window.localStorage.getItem("userinfo")).role_id,
      role_type: JSON.parse(window.localStorage.getItem("userinfo")).role_type,
      drawerRight: !1,
      id: null,
      menuInfo: null,
      news: { detail: "" },
      extendDialog: !1,
      endDate: "",
      count: 0,
    };
  },
  destroyed() {
    window.removeEventListener("popstate", this.goBack, !1);
  },
  mounted() {
    ((this.id = this.$route.query.id),
      window.localStorage.getItem("menu") &&
        (this.menuInfo = JSON.parse(window.localStorage.getItem("menu")).find(
          (e) => "news" === e.id,
        )),
      this.$axiosAction("/api/teacher/news/news.api", {
        action: "insertNewsLog",
        id: this.id,
        roleId: this.roleId,
        role_type: this.role_type,
      })
        .then((e) => {
          0 === e.data.code || (2001 === e.data.code && this.goBack());
        })
        .catch((e) => {
          this.$showErrorNotify("系统错误");
        }),
      window.history &&
        window.history.pushState &&
        (history.pushState(null, null, document.URL),
        window.addEventListener("popstate", this.goBack, !1)),
      this.getDetailInfo());
  },
  methods: {
    getDetailInfo() {
      (this.$q.loading.show(),
        this.$axiosAction("/api/teacher/news/news.api", {
          action: "getNewsList",
          id: this.id,
          roleId: this.roleId,
        })
          .then((e) => {
            (0 === e.data.code &&
              ((this.news = e.data.result.list[0]),
              (this.count = e.data.count.count),
              this.news.is_author ||
                "A" === this.roleId ||
                1 !== this.news.external_flag ||
                (cordova.InAppBrowser.open(this.news.link, "_system"),
                "S" === this.role_type
                  ? this.$router.push("/student/index")
                  : this.$router.push("/teacher/index"))),
              this.$q.loading.hide());
          })
          .catch((e) => {
            ((this.news = {}), this.$q.loading.hide());
          }));
    },
    goBack() {
      "S" === this.role_type
        ? this.$router.push("/student/news/index")
        : this.$router.push("/teacher/news/index");
    },
    openLink() {
      cordova.InAppBrowser.open(this.news.link, "_system");
    },
    deleteNews() {
      this.$q
        .dialog({
          title: "确认删除",
          message: "该新闻将被删除。</span>",
          html: !0,
          persistent: !0,
          cancel: { label: "取消", outline: !0, color: "grey" },
          ok: { label: "删除", unelevated: !0, color: "negative" },
        })
        .onOk(() => {
          (this.$q.loading.show(),
            this.$axiosAction("/api/teacher/news/news.api", {
              action: "deleteNews",
              id: this.id,
              roleId: this.roleId,
              title: this.news.title,
            })
              .then((e) => {
                (0 === e.data.code && this.$router.push("/teacher/news/index"),
                  this.$q.loading.hide());
              })
              .catch((e) => {
                this.$q.loading.hide();
              }));
        });
    },
    openExtendDialog() {
      if ("0" === this.news.status_color) {
        const e = new Date(),
          t = e.getFullYear();
        let s = e.getMonth() + 1;
        s < 10 && (s = "0" + s.toString());
        const a = e.getDate();
        this.news.banner_end_date =
          t.toString() + "-" + s.toString() + "-" + a.toString() + " 23:59";
      }
      ((this.endDate = this.news.banner_end_date), (this.extendDialog = !0));
    },
    updateDate() {
      (this.$q.loading.show(),
        this.$axiosAction("/api/teacher/news/news.api", {
          action: "updateTime",
          id: this.id,
          endDate: this.endDate,
          roleId: this.roleId,
        })
          .then((e) => {
            (0 === e.data.code && ((this.extendDialog = !1), this.getDetailInfo()),
              this.$q.loading.hide());
          })
          .catch((e) => {
            ((this.news = {}), this.$q.loading.hide());
          }));
    },
    closeDialog() {
      ((this.extendDialog = !1),
        "0" === this.news.status_color && ((this.news.banner_end_date = ""), (this.endDate = "")));
    },
  },
};
export default componentOptions;
