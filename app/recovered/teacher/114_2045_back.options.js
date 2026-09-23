/**
 * Vue options object recovered from webpack module AST.
 * Source: assets/www/js/114.js -> module "2045"
 * Route: /teacher/signin/new
 * Component: back
 * Not guaranteed standalone: imports/module aliases must be resolved from sibling .logic.js.
 */
const componentOptions = {
  name: "back",
  components: { NeuViewMap: c["a"] },
  props: { value: Array },
  data() {
    return {
      subTitle: "",
      list: [],
      selected: [],
      paging: { pageSize: 10, pageNum: 1, pageCount: 2 },
      record: {},
      modelValue: null,
      maximizedToggle: !0,
      mapViewDialog: !1,
    };
  },
  mounted() {
    ((this.subTitle = this.title),
      this.refresh(null),
      (this.modelValue = this.value),
      (this.selected = this.modelValue),
      this.changeSelect());
  },
  watch: {
    value(e) {
      ((this.modelValue = e), (this.selected = this.modelValue), this.changeSelect());
    },
    modelValue(e) {
      this.$emit("input", e);
    },
  },
  methods: {
    loadList(e, t) {
      (t && (this.paging.pageNum = 0),
        this.paging.pageCount !== this.paging.pageNum
          ? ((this.paging.pageNum += 1),
            this.$axiosAction("/api/teacher/basic/location.api", {
              action: "getLocationShareList",
              pageSize: this.paging.pageSize,
              pageNum: this.paging.pageNum,
            })
              .then((s) => {
                if (0 === s.data.code) {
                  this.list = t ? s.data.result.list : this.list.concat(s.data.result.list);
                  const {
                    pageSize: e,
                    pageNum: a,
                    rowCount: i,
                    pageCount: r,
                    startIndex: n,
                    endIndex: l,
                  } = o()({}, s.data.result);
                  this.paging = {
                    pageSize: e,
                    pageNum: a,
                    rowCount: i,
                    pageCount: r,
                    startIndex: n,
                    endIndex: l,
                  };
                }
                (e && e(), this.changeSelect());
              })
              .catch((t) => {
                ((this.list = []), e && e());
              }))
          : e && e());
    },
    refresh(e) {
      this.loadList(e, !0);
    },
    onLoad(e, t) {
      this.loadList(t, !1);
    },
    viewMap(e) {
      ((this.mapViewDialog = !0), (this.record = o()({}, this.list[e])));
    },
    goConfig() {
      this.$router.push("/teacher/basic/config");
    },
    getValue() {
      this.modelValue = this.selected;
    },
    changeSelect() {
      const e = this.selected;
      for (let t = 0; t < e.length; t++)
        for (let s = 0; s < this.list.length; s++)
          e[t].id === this.list[s].id && (e[t] = this.list[s]);
      this.selected = e;
    },
  },
};
export default componentOptions;
