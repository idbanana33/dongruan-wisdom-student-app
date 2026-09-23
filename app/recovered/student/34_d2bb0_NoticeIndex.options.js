/**
 * Vue options object recovered from webpack module AST.
 * Source: assets/www/js/34.js -> module "d2bb0"
 * Route: /student/notice/index
 * Component: NoticeIndex
 * Not guaranteed standalone: imports/module aliases must be resolved from sibling .logic.js.
 */
const componentOptions = {
  name: "NoticeIndex",
  data() {
    return {
      list: [],
      paging: { pageSize: 30, pageNum: 0, pageCount: 0 },
      isLoading: !1,
      badgeCount: 0,
    };
  },
  computed: {
    menuInfo() {
      return window.localStorage.getItem("menu")
        ? JSON.parse(window.localStorage.getItem("menu")).find((t) => "notice" === t.id)
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
      this.loadList(() => {}),
      this.getbadgeCount());
  },
  methods: {
    loadList(t) {
      (t && ((this.paging.pageNum = 0), (this.list = [])),
        (this.paging.pageNum += 1),
        (this.isLoading = !0),
        this.$axiosAction("/api/student/notice/notice.api", {
          action: "getNotice",
          pageSize: this.paging.pageSize,
          pageNum: this.paging.pageNum,
        })
          .then((e) => {
            if (0 === e.data.code) {
              this.list = this.list.concat(e.data.result.list);
              const {
                pageSize: t,
                pageNum: a,
                rowCount: i,
                pageCount: s,
                startIndex: n,
                endIndex: r,
              } = o()({}, e.data.result);
              this.paging = {
                pageSize: t,
                pageNum: a,
                rowCount: i,
                pageCount: s,
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
    goBack() {
      this.$router.push("/student/index");
    },
    checkDetail(t) {
      this.$router.push(`/student/notice/detail?id=${t}`);
    },
    refresh(t) {
      this.loadList(t);
    },
    getbadgeCount() {
      this.$axiosAction("/api/student/notice/notice.api", { action: "getStuManageIsExist" })
        .then((t) => {
          if (0 === t.data.code) {
            const e = t.data.result;
            null !== e && "" !== e && (this.badgeCount = 1);
          }
        })
        .catch((t) => {});
    },
    goStuManage() {
      this.$router.push("/student/notice/stumanage");
    },
  },
};
export default componentOptions;
