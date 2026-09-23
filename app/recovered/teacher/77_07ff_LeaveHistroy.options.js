/**
 * Vue options object recovered from webpack module AST.
 * Source: assets/www/js/77.js -> module "07ff"
 * Route: /teacher/leave/history
 * Component: LeaveHistroy
 * Not guaranteed standalone: imports/module aliases must be resolved from sibling .logic.js.
 */
const componentOptions = {
  name: "LeaveHistroy",
  data() {
    return { history: [], paging: { pageSize: 30, pageNum: 0, pageCount: 0 }, isLoading: !1 };
  },
  computed: {
    menuInfo() {
      return window.localStorage.getItem("menu")
        ? JSON.parse(window.localStorage.getItem("menu")).find((e) => "leave" === e.id)
        : {};
    },
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
          action: "getLeaveByStudent",
          id: parseInt(this.$route.query.id),
          pageSize: this.paging.pageSize,
          pageNum: this.paging.pageNum,
          student_no: this.$route.query.student_no,
        })
          .then((t) => {
            if (0 === t.data.code) {
              const e = t.data.leaveByStudent.list;
              this.history = this.history.concat(e);
              const {
                pageSize: a,
                pageNum: s,
                rowCount: i,
                pageCount: n,
                startIndex: r,
                endIndex: g,
              } = o()({}, t.data.leaveByStudent);
              this.paging = {
                pageSize: a,
                pageNum: s,
                rowCount: i,
                pageCount: n,
                startIndex: r,
                endIndex: g,
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
        `/teacher/leave/detail?id=${this.$route.query.id}&tab=${this.$route.query.tab}`,
      );
    },
  },
};
export default componentOptions;
