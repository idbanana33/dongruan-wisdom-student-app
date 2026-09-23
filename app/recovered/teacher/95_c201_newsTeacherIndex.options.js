/**
 * Vue options object recovered from webpack module AST.
 * Source: assets/www/js/95.js -> module "c201"
 * Route: /teacher/news/index
 * Component: newsTeacherIndex
 * Not guaranteed standalone: imports/module aliases must be resolved from sibling .logic.js.
 */
const componentOptions = {
  name: "newsTeacherIndex",
  data() {
    return {
      roleId: JSON.parse(window.localStorage.getItem("userinfo")).role_id,
      login_name: JSON.parse(window.localStorage.getItem("userinfo")).login_name,
      role_type: JSON.parse(window.localStorage.getItem("userinfo")).role_type,
      menuInfo: null,
      dialog: !1,
      list: [],
      fabPos: [30, 40],
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
        (e) => "news" === e.id,
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
    refresh(e) {
      this.loadList(e);
    },
    loadList(e) {
      (e && ((this.paging.pageNum = 0), (this.list = [])),
        (this.paging.pageNum += 1),
        (this.isLoading = !0),
        this.$axiosAction(
          "/api/teacher/news/news.api",
          o()(
            o()({ action: "getNewsList" }, this.queryModel),
            {},
            { pageSize: this.paging.pageSize, pageNum: this.paging.pageNum, roleId: this.roleId },
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
    goBack() {
      this.$router.push("/teacher/index");
    },
    goDetail(e, t, a) {
      this.login_name === a || "A" === this.roleId
        ? this.$router.push(`/teacher/news/detail?id=${e}`)
        : t
          ? this.$axiosAction("/api/teacher/news/news.api", {
              action: "insertNewsLog",
              id: e,
              roleId: this.roleId,
              role_type: this.role_type,
            })
              .then((e) => {
                0 === e.data.code
                  ? cordova.InAppBrowser.open(t, "_system")
                  : 2001 === e.data.code && this.refresh(() => {});
              })
              .catch((e) => {
                this.$showErrorNotify("系统错误");
              })
          : this.$router.push(`/teacher/news/detail?id=${e}`);
    },
    moveFab(e) {
      ((this.draggingFab = !0 !== e.isFirst && !0 !== e.isFinal),
        (this.fabPos = [this.fabPos[0] - e.delta.x, this.fabPos[1] - e.delta.y]));
    },
    addJoblog() {
      this.$router.push("/teacher/news/new");
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
    getCondition() {
      ((this.condCount = Object.keys(this.queryModel).reduce(
        (e, t) => (this.queryModel[t] ? e + 1 : e),
        0,
      )),
        this.$refs.pageRefresh.trigger(),
        (this.dialog = !1));
    },
    getValue(e) {
      this.queryModel.status === e ? (this.queryModel.status = "") : (this.queryModel.status = e);
    },
  },
};
export default componentOptions;
