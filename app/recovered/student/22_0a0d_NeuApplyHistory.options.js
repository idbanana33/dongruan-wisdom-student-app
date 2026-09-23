/**
 * Vue options object recovered from webpack module AST.
 * Source: assets/www/js/22.js -> module "0a0d"
 * Route: /student/apply/index
 * Component: NeuApplyHistory
 * Not guaranteed standalone: imports/module aliases must be resolved from sibling .logic.js.
 */
const componentOptions = {
  components: { NeuApplyHistory: v, NeuApplyForm: z },
  name: "ApplyIndex",
  data() {
    return {
      menuInfo: null,
      applyType: "",
      tab: this.$route.query.tab ? this.$route.query.tab : "doing",
      apply_type: this.$route.query.apply_type,
      badgeCount: 0,
    };
  },
  computed: {},
  destroyed() {
    window.removeEventListener("popstate", this.goBack, !1);
  },
  mounted() {
    (window.localStorage.getItem("menu") &&
      ("A" === this.$route.query.apply_type
        ? (this.applyType = "apply")
        : "S" === this.$route.query.apply_type
          ? (this.applyType = "signup")
          : "C" === this.$route.query.apply_type && (this.applyType = "collect"),
      (this.menuInfo = JSON.parse(window.localStorage.getItem("menu")).find(
        (t) => t.id === this.applyType,
      ))),
      window.history &&
        window.history.pushState &&
        (history.pushState(null, null, document.URL),
        window.addEventListener("popstate", this.goBack, !1)),
      this.getbadgeCount());
  },
  methods: {
    goBack() {
      this.$router.push("/student/index");
    },
    getbadgeCount() {
      this.$axiosAction("/api/student/apply/apply.api", {
        action: "getStuManageIsExist",
        menu_id: this.applyType,
        apply_type: this.apply_type,
      })
        .then((t) => {
          if (0 === t.data.code) {
            const e = t.data.result;
            null !== e && "" !== e && (this.badgeCount = 1);
          }
        })
        .catch((t) => {});
    },
    goStuManage() {
      this.$router.push(
        "/student/apply/stumanage?apply_type=" +
          this.applyType +
          "&type=" +
          this.$route.query.apply_type,
      );
    },
  },
};
export default componentOptions;
