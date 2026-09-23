/**
 * Vue options object recovered from webpack module AST.
 * Source: assets/www/js/79.js -> module "f3d1"
 * Route: /teacher/leave/leaveExperience
 * Component: signinExperience
 * Not guaranteed standalone: imports/module aliases must be resolved from sibling .logic.js.
 */
const componentOptions = {
  name: "signinExperience",
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
  destroyed() {
    window.removeEventListener("popstate", this.goBack, !1);
  },
  mounted() {
    (window.history &&
      window.history.pushState &&
      (history.pushState(null, null, document.URL),
      window.addEventListener("popstate", this.goBack, !1)),
      this.getLeaveDetail(() => {}));
  },
  methods: {
    goBack() {
      this.$router.push({ name: "/teacher/experience/index", query: { stuNo: this.stuNo } });
    },
    refresh(e) {
      this.getLeaveDetail(e);
    },
    getLeaveDetail(e) {
      (e && ((this.paging.pageNum = 0), (this.list = [])),
        (this.paging.pageNum += 1),
        (this.isLoading = !0),
        this.$axiosAction("/api/teacher/leave/leave.api", {
          action: "getLeaveByStudent",
          pageSize: this.paging.pageSize,
          pageNum: this.paging.pageNum,
          student_no: this.stuNo,
        })
          .then((t) => {
            if (0 === t.data.code) {
              this.list = this.list.concat(t.data.leaveByStudent.list);
              const {
                pageSize: e,
                pageNum: a,
                rowCount: s,
                pageCount: i,
                startIndex: n,
                endIndex: r,
              } = o()({}, t.data.leaveByStudent);
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
    exportList() {
      this.stuNo &&
        (this.exportCompConfig = [
          "/api/teacher/leave/leave.api",
          "exportLeaveByStudent",
          { student_no: this.stuNo },
          { [`${this.stuName}的请假记录`]: "result" },
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
