/**
 * Vue options object recovered from webpack module AST.
 * Source: assets/www/js/98.js -> module "7f35"
 * Route: /teacher/notice/index
 * Component: SigninIndex
 * Not guaranteed standalone: imports/module aliases must be resolved from sibling .logic.js.
 */
const componentOptions = {
  name: "SigninIndex",
  data() {
    return {
      list: [],
      paging: { pageSize: 30, pageNum: 0, pageCount: 0 },
      isLoading: !1,
      fabPos: [30, 40],
      dialog: !1,
      queryModel: { status: "", mutli_search: "" },
      condCount: 0,
      originalCond: {},
    };
  },
  computed: {
    menuInfo() {
      return window.localStorage.getItem("menu")
        ? JSON.parse(window.localStorage.getItem("menu")).find((e) => "notice" === e.id)
        : {};
    },
  },
  destroyed() {
    window.removeEventListener("popstate", this.goBack, !1);
  },
  mounted() {
    (window.history &&
      window.history.pushState &&
      (history.pushState(null, null, document.URL),
      window.addEventListener("popstate", this.goBack, !1)),
      this.loadList(() => {}));
  },
  methods: {
    goBack() {
      this.$router.push("/teacher/index");
    },
    loadList(e) {
      (e && ((this.paging.pageNum = 0), (this.list = [])),
        (this.paging.pageNum += 1),
        (this.isLoading = !0),
        this.$axiosAction(
          "/api/teacher/notice/notice.api",
          n()(
            n()({ action: "queryList" }, this.queryModel),
            {},
            { pageSize: this.paging.pageSize, pageNum: this.paging.pageNum },
          ),
        )
          .then((t) => {
            if (0 === t.data.code) {
              this.list = this.list.concat(t.data.result.list);
              const {
                pageSize: e,
                pageNum: a,
                rowCount: s,
                pageCount: i,
                startIndex: o,
                endIndex: r,
              } = n()({}, t.data.result);
              this.paging = {
                pageSize: e,
                pageNum: a,
                rowCount: s,
                pageCount: i,
                startIndex: o,
                endIndex: r,
              };
            } else this.setDefaultList();
            (e && e(), (this.isLoading = !1));
          })
          .catch((t) => {
            (this.setDefaultList(), e && e(), (this.isLoading = !1));
          }));
    },
    setDefaultList() {
      ((this.list = []), (this.paging = { pageSize: 30, pageNum: 0, pageCount: 0 }));
    },
    refresh(e) {
      this.loadList(e);
    },
    addNotice() {
      this.$router.push("/teacher/notice/new");
    },
    moveFab(e) {
      this.fabPos = [this.fabPos[0] - e.delta.x, this.fabPos[1] - e.delta.y];
    },
    goDetail(e) {
      this.$router.push(`/teacher/notice/detail?id=${e}`);
    },
    open() {
      ((this.dialog = !0),
        (this.originalCond = Object.keys(this.queryModel).reduce(
          (e, t) => ((e[t] = this.queryModel[t]), e),
          {},
        )));
    },
    close() {
      ((this.dialog = !1),
        (this.queryModel = Object.keys(this.originalCond).reduce(
          (e, t) => ((e[t] = this.originalCond[t]), e),
          {},
        )));
    },
    getValue(e) {
      this.queryModel.status === e ? (this.queryModel.status = "") : (this.queryModel.status = e);
    },
    getCondition() {
      ((this.condCount = Object.keys(this.queryModel).reduce(
        (e, t) => (this.queryModel[t] ? e + 1 : e),
        0,
      )),
        this.loadList(() => {}),
        (this.dialog = !1));
    },
  },
};
export default componentOptions;
