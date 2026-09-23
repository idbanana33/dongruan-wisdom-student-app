/**
 * Vue options object recovered from webpack module AST.
 * Source: assets/www/js/88.js -> module "098e"
 * Route: /teacher/message/message
 * Component: MessageHistory
 * Not guaranteed standalone: imports/module aliases must be resolved from sibling .logic.js.
 */
const componentOptions = {
  components: { MessageHistory: _, MessageForm: z },
  name: "Message",
  data() {
    return { menuInfo: null, tab: this.$route.query.tab ? this.$route.query.tab : "doing" };
  },
  computed: {},
  destroyed() {
    window.removeEventListener("popstate", this.goBack, !1);
  },
  mounted() {
    ((this.menuInfo = JSON.parse(window.localStorage.getItem("menu")).find(
      (e) => "message" === e.id,
    )),
      window.history &&
        window.history.pushState &&
        (history.pushState(null, null, document.URL),
        window.addEventListener("popstate", this.goBack, !1)));
  },
  methods: {
    goBack() {
      this.$router.push("/teacher/message/index");
    },
  },
};
export default componentOptions;
