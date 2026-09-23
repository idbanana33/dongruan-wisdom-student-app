/**
 * Vue options object recovered from webpack module AST.
 * Source: assets/www/js/87.js -> module "19fe"
 * Route: /teacher/message/index
 * Component: AnalysisIndex
 * Not guaranteed standalone: imports/module aliases must be resolved from sibling .logic.js.
 */
const componentOptions = {
  name: "AnalysisIndex",
  data() {
    return { role_id: JSON.parse(localStorage.getItem("userinfo")).role_id };
  },
  destroyed() {
    window.removeEventListener("popstate", this.goBack, !1);
  },
  mounted() {
    (window.history &&
      window.history.pushState &&
      (history.pushState(null, null, document.URL),
      window.addEventListener("popstate", this.goBack, !1)),
      this.loadList(null));
  },
  computed: {
    menuInfo() {
      return window.localStorage.getItem("menu")
        ? JSON.parse(window.localStorage.getItem("menu")).find((e) => "message" === e.id)
        : null;
    },
  },
  methods: {
    goBack() {
      this.$router.push("/teacher/index");
    },
    moveTo(e) {
      e && this.$router.push(e);
    },
  },
};
export default componentOptions;
