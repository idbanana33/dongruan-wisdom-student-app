/**
 * Vue options object recovered from webpack module AST.
 * Source: assets/www/js/70.js -> module "e90c"
 * Route: /teacher/composite/index
 * Component: compositeIndex
 * Not guaranteed standalone: imports/module aliases must be resolved from sibling .logic.js.
 */
const componentOptions = {
  name: "compositeIndex",
  components: { NeuAssignTeacher: l["a"] },
  data() {
    return {
      menuInfo: null,
      drawerRight: !1,
      teacher_name: "",
      list: [],
      paging: { pageSize: 30, pageNum: 0, pageCount: 0 },
      otherSearch: !1,
      fabPos: [30, 40],
      dialog: !1,
      condCount: 0,
      originalCond: {},
      queryModel: { mutli_search: "" },
      isLoading: !1,
      menuColor: Object(n["d"])("composite"),
      newDialog: !1,
      record: { share_target: [] },
      maximizedToggle: !0,
      shareDialog: !1,
      shareTarget: [],
    };
  },
  destroyed() {
    window.removeEventListener("popstate", this.goBack, !1);
  },
  mounted() {
    (window.localStorage.getItem("menu") &&
      (this.menuInfo = JSON.parse(window.localStorage.getItem("menu")).find(
        (e) => "composite" === e.id,
      )),
      window.history &&
        window.history.pushState &&
        (history.pushState(null, null, document.URL),
        window.addEventListener("popstate", this.goBack, !1)),
      this.loadList(() => {}));
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
          "/api/teacher/composite/composite.api",
          r()(
            r()({ action: "queryList" }, this.queryModel),
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
                startIndex: o,
                endIndex: n,
              } = r()({}, t.data.result);
              this.paging = {
                pageSize: e,
                pageNum: a,
                rowCount: i,
                pageCount: s,
                startIndex: o,
                endIndex: n,
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
    goDetail(e) {
      this.$router.push(`/teacher/composite/detail?id=${e}`);
    },
    addComposite() {
      ((this.record = { share_target: [] }), (this.newDialog = !0));
    },
    moveFab(e) {
      ((this.draggingFab = !0 !== e.isFirst && !0 !== e.isFinal),
        (this.fabPos = [this.fabPos[0] - e.delta.x, this.fabPos[1] - e.delta.y]));
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
    saveNewComposite() {
      this.$q.loading.show();
      const e = r()({}, this.record);
      ((e.share_target =
        e.share_target && e.share_target.length > 0 ? JSON.stringify(e.share_target) : null),
        this.$axiosAction("/api/teacher/composite/composite.api", r()({ action: "insert" }, e))
          .then((e) => {
            (0 === e.data.code && ((this.newDialog = !1), this.loadList(() => {})),
              this.$q.loading.hide());
          })
          .catch((e) => {
            this.$q.loading.hide();
          }));
    },
  },
};
export default componentOptions;
