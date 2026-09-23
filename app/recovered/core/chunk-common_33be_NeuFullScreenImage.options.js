/**
 * Vue options object recovered from webpack module AST.
 * Source: assets/www/js/chunk-common.js -> module "33be"
 * Route: (shared/core)
 * Component: NeuFullScreenImage
 * Not guaranteed standalone: imports/module aliases must be resolved from sibling .logic.js.
 */
const componentOptions = {
  name: "NeuFullScreenImage",
  props: { value: null, url: { type: String, required: !1 }, name: { type: String, required: !1 } },
  data() {
    return { serverUrl: window.localStorage.server, showBigPic: !1, bigPicUrl: "", bigPicName: "" };
  },
  mounted() {
    ((this.bigPicUrl = this.url), (this.bigPicName = this.name));
  },
  computed: {},
  watch: {
    value(e) {
      ((this.showBigPic = e),
        this.showBigPic &&
          this.$nextTick(() => {
            r(this.$refs.bigPicPanel, this.$refs.plusPic, this.$refs.minusPic);
          }));
    },
    url(e) {
      this.bigPicUrl = e;
    },
    name(e) {
      this.bigPicName = e;
    },
    showBigPic(e) {
      this.$emit("input", e);
    },
  },
  methods: {
    downloadPicture() {
      Object(l["c"])(this.bigPicUrl, this.bigPicName);
    },
  },
};
export default componentOptions;
