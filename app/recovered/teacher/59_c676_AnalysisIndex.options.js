/**
 * Vue options object recovered from webpack module AST.
 * Source: assets/www/js/59.js -> module "c676"
 * Route: /teacher/analysis/index
 * Component: AnalysisIndex
 * Not guaranteed standalone: imports/module aliases must be resolved from sibling .logic.js.
 */
const componentOptions = {
  name: "AnalysisIndex",
  data() {
    return { roleId: JSON.parse(window.localStorage.getItem("userinfo")).role_id };
  },
  computed: {
    menuInfo() {
      return window.localStorage.getItem("menu")
        ? JSON.parse(window.localStorage.getItem("menu")).find((e) => "analysis" === e.id)
        : null;
    },
  },
  methods: {
    moveTo(e) {
      e && this.$router.push(e);
    },
  },
};
export default componentOptions;
