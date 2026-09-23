/**
 * Vue options object recovered from webpack module AST.
 * Source: assets/www/js/100.js -> module "60e8"
 * Route: /teacher/notice/noticeExperience
 * Component: noticeExperience
 * Not guaranteed standalone: imports/module aliases must be resolved from sibling .logic.js.
 */
const componentOptions = {
  name: "noticeExperience",
  components: { NeuExportData: r["a"] },
  data() {
    return {
      stuNo: this.$route.query.stuNo,
      stuName: this.$route.query.stuName,
      list: [],
      paging: { pageSize: 30, pageNum: 0, pageCount: 0 },
      isLoading: !1,
      exportCompConfig: null,
    };
  },
  mounted() {
    this.loadList(() => {});
  },
  methods: {
    goBack() {
      this.$router.push({ name: "/teacher/experience/index", query: { stuNo: this.stuNo } });
    },
    refresh(t) {
      this.loadList(t);
    },
    loadList(t) {
      (t && ((this.paging.pageNum = 0), (this.list = [])),
        (this.paging.pageNum += 1),
        (this.isLoading = !0),
        this.$axiosAction("/api/teacher/notice/notice.api", {
          action: "getPersonDetails",
          login_name: this.stuNo,
          pageSize: this.paging.pageSize,
          pageNum: this.paging.pageNum,
        })
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
    exportList() {
      this.stuNo &&
        (this.exportCompConfig = [
          "/api/teacher/notice/notice.api",
          "exportgetPersonDetails",
          { login_name: this.stuNo },
          { [`${this.stuName}的通知记录`]: "result" },
          `${this.stuName}的通知记录`,
          null,
          null,
          1e3,
          5e3,
        ]);
    },
  },
};
export default componentOptions;
