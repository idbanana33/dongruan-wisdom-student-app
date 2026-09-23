/**
 * Vue options object recovered from webpack module AST.
 * Source: assets/www/js/84.js -> module "a858"
 * Route: /teacher/leave/index
 * Component: Navigation
 * Not guaranteed standalone: imports/module aliases must be resolved from sibling .logic.js.
 */
const componentOptions = {
  name: "Navigation",
  data() {
    return { count: 0, menuInfo: null };
  },
  destroyed() {
    window.removeEventListener("popstate", this.goBack, !1);
  },
  mounted() {
    ((this.menuInfo = JSON.parse(window.localStorage.getItem("menu")).find(
      (t) => "leave" === t.id,
    )),
      this.getCount(),
      window.history &&
        window.history.pushState &&
        (history.pushState(null, null, document.URL),
        window.addEventListener("popstate", this.goBack, !1)));
  },
  methods: {
    getCount() {
      const t = JSON.parse(localStorage.getItem("userinfo"));
      this.$axiosAction("/api/teacher/leave/leave.api", {
        action: "getWaitingReviewCount",
        teacher_no: t.login_name,
      }).then((t) => {
        0 === t.data.code && (this.count = t.data.list.waitcount);
      });
    },
    getList(t) {
      this.$router.push(`/teacher/leave/list?tab=${t}`);
    },
    getListMulti(t) {
      this.$router.push(`/teacher/leave/multilist?tab=${t}`);
    },
    goBack() {
      this.$router.push("/teacher/index");
    },
  },
};
export default componentOptions;
