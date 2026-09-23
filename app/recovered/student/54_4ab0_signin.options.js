/**
 * Vue options object recovered from webpack module AST.
 * Source: assets/www/js/54.js -> module "4ab0"
 * Route: /student/signin/signinPersonnel
 * Component: signin
 * Not guaranteed standalone: imports/module aliases must be resolved from sibling .logic.js.
 */
const componentOptions = {
  name: "signin",
  data() {
    return {
      tabs: "personnel",
      condition: "1",
      text: "",
      list: [],
      paging: { pageSize: 30, pageNum: 0, pageCount: 0 },
      changeStudentStatus: !1,
      model: "0",
      signinId: "",
      id: this.$route.query.id,
      batch_no: this.$route.query.batch_no,
      title: this.$route.query.title,
      dialog: !1,
      queryModel: { status: "", mutli_search: "" },
      originalCond: {},
      condCount: 0,
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
      this.loadList(() => {}));
  },
  methods: {
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
    refresh(t) {
      this.loadList(t);
    },
    loadList(t) {
      (t && ((this.paging.pageNum = 0), (this.list = [])),
        (this.paging.pageNum += 1),
        (this.isLoading = !0),
        this.$axiosAction(
          "/api/student/signin/signin.api",
          o()(
            o()({ action: "getStudentStatusList" }, this.queryModel),
            {},
            {
              id: this.id,
              batch_no: this.batch_no,
              model: this.model,
              pageSize: this.paging.pageSize,
              pageNum: this.paging.pageNum,
            },
          ),
        )
          .then((e) => {
            if (0 === e.data.code) {
              this.list = this.list.concat(e.data.result.list);
              const {
                pageSize: t,
                pageNum: a,
                rowCount: s,
                pageCount: i,
                startIndex: n,
                endIndex: r,
              } = o()({}, e.data.result);
              this.paging = {
                pageSize: t,
                pageNum: a,
                rowCount: s,
                pageCount: i,
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
    getValue(t) {
      this.queryModel.status === t ? (this.queryModel.status = "") : (this.queryModel.status = t);
    },
    getCondition() {
      ((this.condCount = Object.keys(this.queryModel).reduce(
        (t, e) => (this.queryModel[e] ? t + 1 : t),
        0,
      )),
        this.$refs.pageRefresh.trigger(),
        (this.dialog = !1));
    },
    changeStatus(t) {
      ((this.signinId = t), (this.changeStudentStatus = !0), (this.text = ""));
    },
    changeSigninStatus(t) {
      this.$axiosAction("/api/student/signin/signin.api", {
        action: "changeStudentSigninStatus",
        id: t,
        status: this.condition,
        reason: this.text,
      }).then(() => {
        this.refresh(() => {});
      });
    },
    goBack() {
      this.$router.push("/student/signin/qrcodePerson");
    },
    goScan(t, e, a) {
      this.$router.push({
        name: "/student/signin/qrcodePersonDetails",
        params: { id: t, batch_no: e, title: a },
      });
    },
  },
};
export default componentOptions;
