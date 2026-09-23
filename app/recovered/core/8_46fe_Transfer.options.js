/**
 * Vue options object recovered from webpack module AST.
 * Source: assets/www/js/8.js -> module "46fe"
 * Route: /transfer
 * Component: Transfer
 * Not guaranteed standalone: imports/module aliases must be resolved from sibling .logic.js.
 */
const componentOptions = {
  name: "Transfer",
  data() {
    return {};
  },
  mounted() {
    this.$router.push({ path: this.$route.params.path });
  },
};
export default componentOptions;
