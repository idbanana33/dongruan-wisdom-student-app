/**
 * Vue options object recovered from webpack module AST.
 * Source: assets/www/js/116.js -> module "49de"
 * Route: /teacher/signin/statistics
 * Component: NeuSigninRangeNow
 * Not guaranteed standalone: imports/module aliases must be resolved from sibling .logic.js.
 */
const componentOptions = {
  name: "NeuSigninRangeNow",
  components: { NeuViewMap: _["a"] },
  props: { selectList: Array, id: String },
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
      (this.modelValue = this.selectList),
      (this.selected = this.modelValue),
      this.changeSelect());
  },
  watch: {
    selectList(t) {
      ((this.modelValue = t), (this.selected = this.modelValue), this.changeSelect());
    },
    modelValue(t) {
      this.$emit("input", t);
    },
    id(t) {
      this.loadList();
    },
  },
  methods: {
    loadList(t, e) {
      (e && (this.paging.pageNum = 0),
        this.paging.pageCount !== this.paging.pageNum
          ? ((this.paging.pageNum += 1),
            this.$axiosAction("/api/teacher/signin/signin.api", {
              action: "querySelectedRangePage",
              id: this.id,
              pageSize: this.paging.pageSize,
              pageNum: this.paging.pageNum,
            })
              .then((i) => {
                if (0 === i.data.code) {
                  this.list = e ? i.data.result.list : this.list.concat(i.data.result.list);
                  const {
                    pageSize: t,
                    pageNum: a,
                    rowCount: s,
                    pageCount: n,
                    startIndex: o,
                    endIndex: l,
                  } = r()({}, i.data.result);
                  this.paging = {
                    pageSize: t,
                    pageNum: a,
                    rowCount: s,
                    pageCount: n,
                    startIndex: o,
                    endIndex: l,
                  };
                }
                (t && t(), this.changeSelect());
              })
              .catch((e) => {
                ((this.list = []), t && t());
              }))
          : t && t());
    },
    refresh(t) {
      this.loadList(t, !0);
    },
    onLoad(t, e) {
      this.loadList(e, !1);
    },
    viewMap(t) {
      ((this.mapViewDialog = !0), (this.record = r()({}, this.list[t])));
    },
    goConfig() {
      this.$router.push("/teacher/basic/config");
    },
    getValue() {
      this.modelValue = this.selected;
    },
    changeSelect() {
      const t = this.selected;
      for (let e = 0; e < t.length; e++)
        for (let i = 0; i < this.list.length; i++)
          t[e].id === this.list[i].id && (t[e] = this.list[i]);
      this.selected = t;
    },
  },
};
export default componentOptions;
