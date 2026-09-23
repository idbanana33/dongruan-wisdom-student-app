/**
 * Vue options object recovered from webpack module AST.
 * Source: assets/www/js/42.js -> module "dc02"
 * Route: /student/repair/evaluate
 * Component: Evaluate
 * Not guaranteed standalone: imports/module aliases must be resolved from sibling .logic.js.
 */
const componentOptions = {
  components: {},
  name: "Evaluate",
  data() {
    return { menuInfo: null, user: {}, record: { mark: 0, evaluate: "" } };
  },
  computed: {},
  mounted() {
    (window.localStorage.getItem("menu") &&
      (this.menuInfo = JSON.parse(window.localStorage.getItem("menu")).find(
        (e) => "leave" === e.id,
      )),
      (this.user = JSON.parse(localStorage.getItem("userinfo"))));
  },
  watch: {},
  methods: {
    goBack() {
      this.$router.push(`/student/repair/detail?repair_id=${this.$route.query.repair_id}`);
    },
    onSubmit() {
      this.$axiosAction(
        "/api/student/repair/repair.api",
        o()({ action: "updateRepairEvalutate", id: this.$route.query.repair_id }, this.record),
      ).then((e) => {
        0 === e.data.code ? (this.$q.loading.hide(), this.goBack()) : this.$q.loading.hide();
      });
    },
  },
};
export default componentOptions;
