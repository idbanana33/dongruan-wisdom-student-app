/**
 * Vue options object recovered from webpack module AST.
 * Source: assets/www/js/44.js -> module "866f"
 * Route: /student/repair/maintainerInfo
 * Component: MaintainerInfo
 * Not guaranteed standalone: imports/module aliases must be resolved from sibling .logic.js.
 */
const componentOptions = {
  name: "MaintainerInfo",
  components: {},
  data() {
    return {
      serverUrl: window.localStorage.server,
      details: {},
      userInfo: JSON.parse(window.localStorage.getItem("userinfo")),
    };
  },
  computed: {},
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
      this.$router.push(`/student/repair/detail?repair_id=${this.$route.query.repair_id}`);
    },
    loadInfo() {
      this.$axiosAction("/api/student/repair/repair.api", {
        action: "getMaintainerInfo",
        maintainer_no: this.$route.query.no,
      }).then((t) => {
        this.details = t.data.info;
      });
    },
  },
};
export default componentOptions;
