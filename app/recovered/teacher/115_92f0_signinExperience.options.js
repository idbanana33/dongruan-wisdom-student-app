/**
 * Vue options object recovered from webpack module AST.
 * Source: assets/www/js/115.js -> module "92f0"
 * Route: /teacher/signin/signinExperience
 * Component: signinExperience
 * Not guaranteed standalone: imports/module aliases must be resolved from sibling .logic.js.
 */
const componentOptions = {
  name: "signinExperience",
  components: { NeuExportData: r["a"] },
  data() {
    return {
      nosigninImage: `${cordova.file.applicationDirectory}www/img/nosignin.png`,
      timeoffImage: `${cordova.file.applicationDirectory}www/img/timeoff.png`,
      stuNo: this.$route.query.stuNo,
      stuName: this.$route.query.stuName,
      list: [],
      paging: { pageSize: 30, pageNum: 0, pageCount: 0 },
      isLoading: !1,
      exportCompConfig: null,
    };
  },
  mounted() {
    this.getStuSigninMessageDetail(() => {});
  },
  methods: {
    goBack() {
      this.$router.push({ name: "/teacher/experience/index", query: { stuNo: this.stuNo } });
    },
    refresh(t) {
      this.getStuSigninMessageDetail(t);
    },
    getStuSigninMessageDetail(t) {
      (t && ((this.paging.pageNum = 0), (this.list = [])),
        (this.paging.pageNum += 1),
        (this.isLoading = !0),
        this.$axiosAction("/api/teacher/signin/signin.api", {
          action: "getSigninExperienceMessage",
          pageSize: this.paging.pageSize,
          pageNum: this.paging.pageNum,
          stuNo: this.stuNo,
        })
          .then((e) => {
            if (0 === e.data.code) {
              this.list = this.list.concat(e.data.result.list);
              const {
                pageSize: t,
                pageNum: s,
                rowCount: a,
                pageCount: i,
                startIndex: n,
                endIndex: r,
              } = o()({}, e.data.result);
              this.paging = {
                pageSize: t,
                pageNum: s,
                rowCount: a,
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
          "/api/teacher/signin/signin.api",
          "exportStuSigninDetail",
          { stuNo: this.stuNo },
          { [`${this.stuName}的签到记录`]: "result" },
          `${this.stuName}的签到记录`,
          null,
          null,
          1e3,
          5e3,
        ]);
    },
  },
};
export default componentOptions;
