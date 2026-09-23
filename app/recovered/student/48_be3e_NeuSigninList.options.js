/**
 * Vue options object recovered from webpack module AST.
 * Source: assets/www/js/48.js -> module "be3e"
 * Route: /student/signin/index
 * Component: NeuSigninList
 * Not guaranteed standalone: imports/module aliases must be resolved from sibling .logic.js.
 */
const componentOptions = {
  components: { NeuSigninList: _, NeuSigninHistory: I },
  name: "SigninIndex",
  data() {
    return {
      tab: this.$route.query.tab ? this.$route.query.tab : "signin",
      record: "",
      showQR: !1,
      badgeCount: 0,
    };
  },
  mounted() {
    (this.loadList(),
      window.history &&
        window.history.pushState &&
        (history.pushState(null, null, document.URL),
        window.addEventListener("popstate", this.goBack, !1)),
      this.getbadgeCount());
  },
  destroyed() {
    window.removeEventListener("popstate", this.goBack, !1);
  },
  watch: {
    tab(t) {
      "signin" === t && this.loadList();
    },
  },
  methods: {
    loadList() {
      this.$axiosAction("/api/student/signin/signin.api", { action: "checkQrcodePerson" }).then(
        (t) => {
          0 === t.data.code &&
            ((this.record = t.data.result),
            0 !== this.record && "signin" === this.tab ? (this.showQR = !0) : (this.showQR = !1));
        },
      );
    },
    goBack() {
      this.$router.push("/student/index");
    },
    getbadgeCount() {
      this.$axiosAction("/api/student/signin/signin.api", { action: "getStuManageIsExist" })
        .then((t) => {
          if (0 === t.data.code) {
            const e = t.data.result;
            null !== e && "" !== e && (this.badgeCount = 1);
          }
        })
        .catch((t) => {});
    },
    scannList() {
      this.$router.push("/student/signin/qrcodePerson");
    },
    goStuManage() {
      this.$router.push("/student/signin/stumanage");
    },
  },
};
export default componentOptions;
