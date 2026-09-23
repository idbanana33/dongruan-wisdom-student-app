/**
 * Vue options object recovered from webpack module AST.
 * Source: assets/www/js/83.js -> module "3865"
 * Route: /teacher/leave/multiStudent
 * Component: MultiStudent
 * Not guaranteed standalone: imports/module aliases must be resolved from sibling .logic.js.
 */
const componentOptions = {
  name: "MultiStudent",
  data() {
    return {
      student_list: [],
      paging: { pageSize: 30, pageNum: 0, pageCount: 0 },
      isLoading: !1,
      counsellorlabel: localStorage.getItem("counsellorlabel"),
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
      this.getLeaveByStudent(() => {}));
  },
  methods: {
    getLeaveByStudent(e) {
      (e && ((this.paging.pageNum = 0), (this.student_list = [])),
        (this.paging.pageNum += 1),
        (this.isLoading = !0),
        this.$axiosAction("api/teacher/leave/leave.api", {
          action: "getMultiLeaveStudent",
          student_no_list: this.$route.query.students,
          id: parseInt(this.$route.query.id),
          pageSize: this.paging.pageSize,
          pageNum: this.paging.pageNum,
        })
          .then((t) => {
            if (0 === t.data.code) {
              const e = t.data.list.list;
              this.student_list = this.student_list.concat(e);
              const {
                pageSize: a,
                pageNum: s,
                rowCount: n,
                pageCount: i,
                startIndex: r,
                endIndex: l,
              } = o()({}, t.data.list);
              this.paging = {
                pageSize: a,
                pageNum: s,
                rowCount: n,
                pageCount: i,
                startIndex: r,
                endIndex: l,
              };
            } else this.setDefaultList();
            (e && e(), (this.isLoading = !1));
          })
          .catch((t) => {
            (this.setDefaultList(), e && e(), (this.isLoading = !1));
          }));
    },
    setDefaultList() {
      ((this.student_list = []), (this.paging = { pageSize: 30, pageNum: 0, pageCount: 0 }));
    },
    refresh(e) {
      this.getLeaveByStudent(e);
    },
    goBack() {
      this.$router.push(
        `/teacher/leave/multidetail?id=${this.$route.query.id}&tab=${this.$route.query.tab}`,
      );
    },
  },
};
export default componentOptions;
