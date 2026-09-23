/**
 * Vue options object recovered from webpack module AST.
 * Source: assets/www/js/80.js -> module "2727"
 * Route: /teacher/leave/multiHistory
 * Component: LeaveHistroy
 * Not guaranteed standalone: imports/module aliases must be resolved from sibling .logic.js.
 */
const componentOptions = {
  name: "LeaveHistroy",
  data() {
    return { history: [], paging: { pageSize: 30, pageNum: 0, pageCount: 0 }, isLoading: !1 };
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
      (e && ((this.paging.pageNum = 0), (this.history = [])),
        (this.paging.pageNum += 1),
        (this.isLoading = !0),
        this.$axiosAction("/api/teacher/leave/leave.api", {
          action: "getMultiHistory",
          id: parseInt(this.$route.query.id),
          pageSize: this.paging.pageSize,
          pageNum: this.paging.pageNum,
          teacher_no: this.$route.query.teacher_no,
        })
          .then((t) => {
            if (0 === t.data.code) {
              this.history = this.history.concat(t.data.list.list);
              const {
                pageSize: e,
                pageNum: a,
                rowCount: i,
                pageCount: s,
                startIndex: n,
                endIndex: r,
              } = o()({}, t.data.list);
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
            (this.setDefaultList(), e && e(), (this.isLoading = !1));
          }));
    },
    setDefaultList() {
      ((this.history = []), (this.paging = { pageSize: 30, pageNum: 0, pageCount: 0 }));
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
