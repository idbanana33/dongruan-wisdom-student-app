/**
 * Vue options object recovered from webpack module AST.
 * Source: assets/www/js/28.js -> module "cc5a"
 * Route: /student/leave/index
 * Component: LeaveIndex
 * Not guaranteed standalone: imports/module aliases must be resolved from sibling .logic.js.
 */
const componentOptions = {
  name: "LeaveIndex",
  data() {
    return {
      leave: [],
      paging: { pageSize: 30, pageNum: 0, pageCount: 0 },
      isLoading: !1,
      fabPos: [30, 40],
    };
  },
  computed: {},
  destroyed() {
    window.removeEventListener("popstate", this.goHome, !1);
  },
  mounted() {
    (window.history &&
      window.history.pushState &&
      (history.pushState(null, null, document.URL),
      window.addEventListener("popstate", this.goHome, !1)),
      this.getLeaveList(() => {}));
  },
  methods: {
    refresh(e) {
      this.getLeaveList(e);
    },
    goBack() {
      this.$router.push("/student/index");
    },
    onClick() {
      this.$router.push("/student/leave/leave");
    },
    goDetails(e) {
      const t = this.leave.findIndex((t) => t.id === e);
      (r["a"].set(this.leave[t]),
        this.$router.push(`/student/leave/detail?leave_id=${e}`),
        this.$addStorageEvent(2, "leave", JSON.stringify(this.leave), !1));
    },
    getLeaveList(e) {
      (e && ((this.paging.pageNum = 0), (this.leave = [])),
        (this.paging.pageNum += 1),
        (this.isLoading = !0));
      const t = JSON.parse(localStorage.getItem("userinfo"));
      this.$axiosAction("/api/student/leave/leave.api", {
        action: "getLeaveList",
        login_name: t.login_name,
        pageSize: this.paging.pageSize,
        pageNum: this.paging.pageNum,
      })
        .then((t) => {
          if (0 === t.data.code) {
            const e = t.data.list.list;
            for (let t = 0; t < e.length; t++)
              e[t].leave_time = e[t].short_time + "(" + e[t].time_info + ")";
            this.leave = this.leave.concat(t.data.list.list);
            const {
              pageSize: a,
              pageNum: s,
              rowCount: i,
              pageCount: n,
              startIndex: r,
              endIndex: l,
            } = o()({}, t.data.list);
            this.paging = {
              pageSize: a,
              pageNum: s,
              rowCount: i,
              pageCount: n,
              startIndex: r,
              endIndex: l,
            };
          } else this.setDefaultList();
          (e && e(), (this.isLoading = !1));
        })
        .catch((t) => {
          (this.setDefaultList(), e && e(), (this.isLoading = !1));
        });
    },
    setDefaultList() {
      ((this.leave = []), (this.paging = { pageSize: 30, pageNum: 0, pageCount: 0 }));
    },
    goHome() {
      this.$router.push("/student/index");
    },
    moveFab(e) {
      ((this.draggingFab = !0 !== e.isFirst && !0 !== e.isFinal),
        (this.fabPos = [this.fabPos[0] - e.delta.x, this.fabPos[1] - e.delta.y]));
    },
  },
};
export default componentOptions;
