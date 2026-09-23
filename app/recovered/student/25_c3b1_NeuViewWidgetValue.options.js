/**
 * Vue options object recovered from webpack module AST.
 * Source: assets/www/js/25.js -> module "c3b1"
 * Route: /student/basic/stuInfo
 * Component: NeuViewWidgetValue
 * Not guaranteed standalone: imports/module aliases must be resolved from sibling .logic.js.
 */
const componentOptions = {
  name: "NeuViewWidgetValue",
  components: { NeuFullScreenImage: c["a"] },
  props: { value: null, config: Object },
  data() {
    return { modelValue: null, conf: {}, showBigPic: !1, bigPicUrl: "", bigPicName: "" };
  },
  mounted() {
    ((this.modelValue = this.value), (this.conf = this.config));
  },
  computed: {
    dispValue() {
      return "S" !== this.conf.type && "F" !== this.conf.type
        ? Object(l["c"])(this.conf, this.modelValue)
        : "";
    },
  },
  watch: {
    value(e) {
      this.modelValue = e;
    },
    config(e) {
      this.conf = e;
    },
  },
  methods: {
    downloadFile(e, t) {
      const i = e.substring(e.lastIndexOf(".") + 1).toLowerCase();
      this.$appConf.pictureExts.findIndex((e) => e === i) > -1
        ? ((this.bigPicUrl = e), (this.bigPicName = t), (this.showBigPic = !0))
        : Object(d["c"])(e, t);
    },
  },
};
export default componentOptions;
