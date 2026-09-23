/**
 * Vue options object recovered from webpack module AST.
 * Source: assets/www/js/90.js -> module "710a"
 * Route: /teacher/message/messageIndex
 * Component: MessageIndex
 * Not guaranteed standalone: imports/module aliases must be resolved from sibling .logic.js.
 */
const componentOptions = {
  name: "MessageIndex",
  data() {
    return {
      condition: [],
      list: [],
      name: "",
      drawerRight: !1,
      fabPos: [30, 40],
      draggingFab: !1,
      paging: { pageSize: 30, pageNum: 0, pageCount: 0 },
      dialog: !1,
      queryModel: { status: "", mutli_search: "" },
      condCount: 0,
      originalCond: {},
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
      this.loadList(null));
  },
  computed: {
    menuInfo() {
      return JSON.parse(window.localStorage.getItem("menu")).find((e) => "message" === e.id);
    },
  },
  methods: {
    goBack() {
      this.$router.push("/teacher/message/index");
    },
    loadList(e) {
      (e && ((this.paging.pageNum = 0), (this.list = [])),
        (this.paging.pageNum += 1),
        (this.isLoading = !0),
        this.$axiosAction(
          "/api/teacher/message/message.api",
          o()(
            o()({ action: "queryList" }, this.queryModel),
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
                startIndex: n,
                endIndex: r,
              } = o()({}, t.data.result);
              this.paging = {
                pageSize: e,
                pageNum: a,
                rowCount: s,
                pageCount: i,
                startIndex: n,
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
        this.loadList(() => {}));
    },
    addApply() {
      this.$router.push("/teacher/message/new");
    },
    moveFab(e) {
      ((this.draggingFab = !0 !== e.isFirst && !0 !== e.isFinal),
        (this.fabPos = [this.fabPos[0] - e.delta.x, this.fabPos[1] - e.delta.y]));
    },
    goDetail(e) {
      this.$router.push(`/teacher/message/statistics?id=${e}`);
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
