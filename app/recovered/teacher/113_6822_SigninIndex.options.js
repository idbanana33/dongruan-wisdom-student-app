/**
 * Vue options object recovered from webpack module AST.
 * Source: assets/www/js/113.js -> module "6822"
 * Route: /teacher/signin/index
 * Component: SigninIndex
 * Not guaranteed standalone: imports/module aliases must be resolved from sibling .logic.js.
 */
const componentOptions = {
  name: "SigninIndex",
  data() {
    return {
      condition: [],
      list: [],
      name: "",
      title: "签到任务名称",
      dialog: !1,
      fabPos: [30, 40],
      draggingFab: !1,
      condCount: 0,
      queryModel: { status: "", mutli_search: "" },
      paging: { pageSize: 30, pageNum: 0, pageCount: 0 },
      originalCond: {},
      menuInfo: null,
      isLoading: !1,
    };
  },
  destroyed() {
    window.removeEventListener("popstate", this.goBack, !1);
  },
  mounted() {
    (window.history &&
      window.history.pushState &&
      (history.pushState(null, null, document.URL),
      window.addEventListener("popstate", this.goBack, !1)),
      (this.menuInfo = JSON.parse(window.localStorage.getItem("menu")).find(
        (e) => "signin" === e.id,
      )),
      this.getSigninList(() => {}));
  },
  methods: {
    getSigninList(e) {
      (e && ((this.paging.pageNum = 0), (this.list = [])),
        (this.paging.pageNum += 1),
        (this.isLoading = !0),
        this.$axiosAction(
          "/api/teacher/signin/signin.api",
          o()(
            o()({ action: "querySigninList" }, this.queryModel),
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
                rowCount: i,
                pageCount: s,
                startIndex: n,
                endIndex: r,
              } = o()({}, t.data.result);
              this.paging = {
                pageSize: e,
                pageNum: a,
                rowCount: i,
                pageCount: s,
                startIndex: n,
                endIndex: r,
              };
            } else this.setDefaultList();
            (e && e(), (this.isLoading = !1));
          })
          .catch((t) => {
            ((this.list = []), this.setDefaultList(), e && e(), (this.isLoading = !1));
          }));
    },
    setDefaultList() {
      ((this.list = []), (this.paging = { pageSize: 30, pageNum: 0, pageCount: 0 }));
    },
    refresh(e) {
      this.getSigninList(e);
    },
    search(e, t) {
      const a = this.condition.findIndex((t) => t.name === e);
      (a >= 0
        ? this.queryModel[e]
          ? this.condition.splice(a, 1, { name: e, label: t, value: this.queryModel[e] })
          : this.condition.splice(a, 1)
        : (this.condition = this.condition.concat({
            name: e,
            label: t,
            value: this.queryModel[e],
          })),
        this.getSigninList(() => {}));
    },
    moveFab(e) {
      ((this.draggingFab = !0 !== e.isFirst && !0 !== e.isFinal),
        (this.fabPos = [this.fabPos[0] - e.delta.x, this.fabPos[1] - e.delta.y]));
    },
    goBack() {
      this.$router.push("/teacher/index");
    },
    addSignin() {
      this.$router.push("/teacher/signin/new");
    },
    goDetail(e, t) {
      this.$router.push("/teacher/signin/statistics?id=" + e + "&status=" + t);
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
        this.$refs.pageRefresh.trigger(),
        (this.dialog = !1));
    },
  },
};
export default componentOptions;
