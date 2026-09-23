/**
 * Vue options object recovered from webpack module AST.
 * Source: assets/www/js/11.js -> module "8456"
 * Route: /maintainer/detail
 * Component: repairDetail
 * Not guaranteed standalone: imports/module aliases must be resolved from sibling .logic.js.
 */
const componentOptions = {
  name: "repairDetail",
  data() {
    return { serverUrl: window.localStorage.server, details: {} };
  },
  destroyed() {
    window.removeEventListener("popstate", this.goBack, !1);
  },
  mounted() {
    (this.loadInfo(),
      window.history &&
        window.history.pushState &&
        (history.pushState(null, null, document.URL),
        window.addEventListener("popstate", this.goBack, !1)));
  },
  methods: {
    goBack() {
      this.$router.push("/maintainer/repairList");
    },
    loadInfo() {
      this.$axiosAction("/api/teacher/basic/maintainer.api", {
        action: "queryMaintainerDetailInfo",
        id: this.$route.query.id,
      }).then((t) => {
        this.details = t.data.info;
      });
    },
  },
};
export default componentOptions;
