/**
 * Vue options object recovered from webpack module AST.
 * Source: assets/www/js/35.js -> module "cb82"
 * Route: /student/notice/stumanage
 * Component: NoticeStumanage
 * Not guaranteed standalone: imports/module aliases must be resolved from sibling .logic.js.
 */
const componentOptions = {
  name: "NoticeStumanage",
  data() {
    return {
      list: [],
      paging: { pageSize: 30, pageNum: 0, pageCount: 0 },
      menuColor: "",
      isLoading: !1,
      badgeCount: 1,
    };
  },
  computed: {},
  destroyed() {
    window.removeEventListener("popstate", this.goBack, !1);
  },
  mounted() {
    (window.history &&
      window.history.pushState &&
      (history.pushState(null, null, document.URL),
      window.addEventListener("popstate", this.goBack, !1)),
      (this.menuColor = Object(l["d"])("notice")),
      this.loadList(() => {}));
  },
  methods: {
    loadList(t) {
      (t && ((this.paging.pageNum = 0), (this.list = [])),
        (this.paging.pageNum += 1),
        (this.isLoading = !0),
        this.$axiosAction("/api/student/notice/notice.api", {
          action: "getStuManageList",
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
                endIndex: l,
              } = o()({}, e.data.result);
              this.paging = {
                pageSize: t,
                pageNum: a,
                rowCount: s,
                pageCount: i,
                startIndex: n,
                endIndex: l,
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
      this.$router.push("/student/notice/index");
    },
    checkDetail(t) {
      this.$router.push(`/student/notice/StuManageDetail?id=${t}`);
    },
    refresh(t) {
      this.loadList(t);
    },
  },
};
export default componentOptions;
