/**
 * Vue options object recovered from webpack module AST.
 * Source: assets/www/js/121.js -> module "a3a5"
 * Route: /user/doBindingMob
 * Component: DoBindingMob
 * Not guaranteed standalone: imports/module aliases must be resolved from sibling .logic.js.
 */
const componentOptions = {
  name: "DoBindingMob",
  data() {
    return { targetInfo: n()({}, this.$route.query) };
  },
  mounted() {},
  methods: {
    doBindingMob() {
      this.$axiosAction(
        "/api/user/bindingMob.api",
        n()({ action: "doBindingMob" }, this.targetInfo),
      ).then((t) => {
        0 === t.data.code && this.$router.push("/teacher/index");
      });
    },
  },
};
export default componentOptions;
