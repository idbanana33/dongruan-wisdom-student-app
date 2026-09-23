/**
 * Vue options object recovered from webpack module AST.
 * Source: assets/www/js/chunk-common.js -> module "a086"
 * Route: (shared/core)
 * Component: NeuViewMap
 * Not guaranteed standalone: imports/module aliases must be resolved from sibling .logic.js.
 */
const componentOptions = {
  name: "NeuViewMap",
  components: {
    BaiduMap: n["a"],
    BmView: r["a"],
    BmScale: c["a"],
    BmNavigation: u["a"],
    BmMarker: d["a"],
    BmCircle: m["a"],
    BmPolygon: f["a"],
  },
  props: { value: null, popupCloseBtn: Boolean },
  data() {
    return {
      modelValue: {
        center: { lng: 116.404, lat: 39.915 },
        radius: 500,
        path: [
          { lng: 116.412732, lat: 39.911707 },
          { lng: 116.39455, lat: 39.910932 },
          { lng: 116.403461, lat: 39.921336 },
        ],
      },
    };
  },
  mounted() {
    this.value && (this.modelValue = o()({}, this.value));
  },
  watch: {
    value(e) {
      this.modelValue = o()({}, this.value);
    },
  },
  methods: {},
};
export default componentOptions;
