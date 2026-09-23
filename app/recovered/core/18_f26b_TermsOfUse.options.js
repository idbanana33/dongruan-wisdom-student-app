/**
 * Vue options object recovered from webpack module AST.
 * Source: assets/www/js/18.js -> module "f26b"
 * Route: /policy/termsOfUse
 * Component: TermsOfUse
 * Not guaranteed standalone: imports/module aliases must be resolved from sibling .logic.js.
 */
const componentOptions = {
  name: "TermsOfUse",
  data() {
    return { info: "" };
  },
  mounted() {
    this.$axiosAction(`${this.$appConf.portalUrl}/api/policy.api`, {
      action: "queryTermsOfUse",
      id: this.server,
    }).then((t) => {
      0 === t.data.code && (this.info = t.data.info);
    });
  },
  methods: {
    goBack() {
      this.$router.go(-1);
    },
  },
};
export default componentOptions;
