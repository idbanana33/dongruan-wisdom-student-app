/**
 * Vue options object recovered from webpack module AST.
 * Source: assets/www/js/chunk-common.js -> module "4aac"
 * Route: (shared/core)
 * Component: NeuViewAssignedStudent
 * Not guaranteed standalone: imports/module aliases must be resolved from sibling .logic.js.
 */
const componentOptions = {
  name: "NeuViewAssignedStudent",
  props: { value: null },
  data() {
    return { assignedData: [], hideFlag: !0 };
  },
  mounted() {
    ((this.assignedData = this.value || []), (this.hideFlag = this.assignedData.length > o));
  },
  watch: {
    value(e) {
      ((this.assignedData = e || []), (this.hideFlag = this.assignedData.length > o));
    },
  },
  computed: {
    userData() {
      return this.hideFlag
        ? []
        : this.assignedData.reduce((e, t) => ("user" === t.target_level ? e.concat(t) : e), []);
    },
    teamData() {
      return this.hideFlag
        ? []
        : this.assignedData.reduce(
            (e, t) => (l.indexOf(t.target_level) >= 0 ? e.concat(t) : e),
            [],
          );
    },
    groupData() {
      return this.hideFlag
        ? []
        : this.assignedData.reduce((e, t) => ("group" === t.target_level ? e.concat(t) : e), []);
    },
  },
  methods: {},
};
export default componentOptions;
