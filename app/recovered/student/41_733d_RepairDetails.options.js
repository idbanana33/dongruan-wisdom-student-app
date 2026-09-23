/**
 * Vue options object recovered from webpack module AST.
 * Source: assets/www/js/41.js -> module "733d"
 * Route: /student/repair/detail
 * Component: RepairDetails
 * Not guaranteed standalone: imports/module aliases must be resolved from sibling .logic.js.
 */
const componentOptions = {
  name: "RepairDetails",
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
      this.$router.push("/student/repair/index");
    },
    loadInfo() {
      this.$axiosAction("/api/student/repair/repair.api", {
        action: "queryForRepairInfo",
        id: this.$route.query.repair_id,
      }).then((t) => {
        this.details = t.data.info;
      });
    },
    goEvaluate() {
      this.$router.push(`/student/repair/evaluate?repair_id=${this.details.id}`);
    },
    goMaintainerInfo(t) {
      this.$router.push(`/student/repair/maintainerInfo?repair_id=${this.details.id}&no=${t}`);
    },
  },
};
export default componentOptions;
