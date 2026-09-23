/**
 * Vue options object recovered from webpack module AST.
 * Source: assets/www/js/47.js -> module "7c65"
 * Route: /student/sanitation/index
 * Component: sanitationStudentIndex
 * Not guaranteed standalone: imports/module aliases must be resolved from sibling .logic.js.
 */
const componentOptions = {
  name: "sanitationStudentIndex",
  data() {
    return {
      menuColor: Object(r["d"])("sanitation"),
      menuInfo: null,
      dialog: !1,
      title: "",
      list: [],
      paging: { pageSize: 30, pageNum: 0, pageCount: 0 },
      queryModel: { status: "", mutli_search: "" },
      condCount: 0,
      originalCond: {},
      isLoading: !1,
    };
  },
  mounted() {
    (window.localStorage.getItem("menu") &&
      (this.menuInfo = JSON.parse(window.localStorage.getItem("menu")).find(
        (t) => "sanitation" === t.id,
      )),
      window.history &&
        window.history.pushState &&
        (history.pushState(null, null, document.URL),
        window.addEventListener("popstate", this.goBack, !1)),
      this.loadList(() => {}));
  },
  destroyed() {
    window.removeEventListener("popstate", this.goBack, !1);
  },
  methods: {
    refresh(t) {
      this.loadList(t);
    },
    loadList(t) {
      (t && ((this.paging.pageNum = 0), (this.list = [])),
        (this.paging.pageNum += 1),
        (this.isLoading = !0),
        this.$axiosAction(
          "/api/student/sanitation/sanitation.api",
          o()(
            o()({ action: "querySanitationStuResultList" }, this.queryModel),
            {},
            { pageSize: this.paging.pageSize, pageNum: this.paging.pageNum },
          ),
        )
          .then((e) => {
            if (0 === e.data.code) {
              this.list = this.list.concat(e.data.result.list);
              const {
                pageSize: t,
                pageNum: a,
                rowCount: i,
                pageCount: s,
                startIndex: n,
                endIndex: r,
              } = o()({}, e.data.result);
              this.paging = {
                pageSize: t,
                pageNum: a,
                rowCount: i,
                pageCount: s,
                startIndex: n,
                endIndex: r,
              };
            } else this.setDefaultList();
            (t && t(), (this.isLoading = !1));
          })
          .catch((e) => {
            (this.setDefaultList(), t && t(), (this.isLoading = !1));
          }));
    },
    setDefaultList() {
      ((this.list = []), (this.paging = { pageSize: 30, pageNum: 0, pageCount: 0 }));
    },
    goBack() {
      this.$router.push("/student/index");
    },
    open() {
      ((this.dialog = !0),
        (this.originalCond = Object.keys(this.queryModel).reduce(
          (t, e) => ((t[e] = this.queryModel[e]), t),
          {},
        )));
    },
    close() {
      ((this.dialog = !1),
        (this.queryModel = Object.keys(this.originalCond).reduce(
          (t, e) => ((t[e] = this.originalCond[e]), t),
          {},
        )));
    },
    getCondition() {
      ((this.condCount = Object.keys(this.queryModel).reduce(
        (t, e) => (this.queryModel[e] ? t + 1 : t),
        0,
      )),
        this.$refs.pageRefresh.trigger(),
        (this.dialog = !1));
    },
    getValue(t) {
      this.queryModel.status === t ? (this.queryModel.status = "") : (this.queryModel.status = t);
    },
    goDetail(t, e) {
      this.$router.push("/student/sanitation/detailResult?id=" + t + "&rId=" + e);
    },
  },
};
export default componentOptions;
