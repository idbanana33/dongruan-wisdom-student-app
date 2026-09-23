/**
 * Vue options object recovered from webpack module AST.
 * Source: assets/www/js/38.js -> module "839a"
 * Route: /student/process/index
 * Component: processStudentIndex
 * Not guaranteed standalone: imports/module aliases must be resolved from sibling .logic.js.
 */
const componentOptions = {
  name: "processStudentIndex",
  data() {
    return {
      menuColor: Object(r["d"])("process"),
      menuInfo: null,
      title: "",
      list: [],
      paging: { pageSize: 30, pageNum: 0, pageCount: 0 },
      queryModel: { status: "", mutli_search: "" },
      isLoading: !1,
      service_flag: "N",
      fabPos: [30, 40],
    };
  },
  mounted() {
    if (window.localStorage.getItem("menu")) {
      this.service_flag = this.$route.query.service_flag;
      let e = "process";
      ((e = "N" === this.service_flag ? "process" : "process_gate"),
        (this.menuInfo = JSON.parse(window.localStorage.getItem("menu")).find((t) => t.id === e)));
    }
    (window.history &&
      window.history.pushState &&
      (history.pushState(null, null, document.URL),
      window.addEventListener("popstate", this.goBack, !1)),
      this.loadList(() => {}));
  },
  destroyed() {
    window.removeEventListener("popstate", this.goBack, !1);
  },
  methods: {
    refresh(e) {
      this.loadList(e);
    },
    loadList(e) {
      (e && ((this.paging.pageNum = 0), (this.list = [])),
        (this.paging.pageNum += 1),
        (this.isLoading = !0),
        this.$axiosAction(
          "/api/student/process/process.api",
          o()(
            o()({ action: "getStudentProcess" }, this.queryModel),
            {},
            {
              pageSize: this.paging.pageSize,
              pageNum: this.paging.pageNum,
              service_flag: this.service_flag,
            },
          ),
        )
          .then((t) => {
            if (0 === t.data.code) {
              this.list = this.list.concat(t.data.result.list);
              const {
                pageSize: e,
                pageNum: s,
                rowCount: a,
                pageCount: i,
                startIndex: n,
                endIndex: r,
              } = o()({}, t.data.result);
              this.paging = {
                pageSize: e,
                pageNum: s,
                rowCount: a,
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
    goBack() {
      this.$router.push("/student/index");
    },
    goDetail(e) {
      this.$router.push(
        `/student/process/detail?process_id=${e}&service_flag=${this.service_flag}`,
      );
    },
    addClick() {
      this.$router.push(`/student/process/new?service_flag=${this.service_flag}`);
    },
    moveFab(e) {
      ((this.draggingFab = !0 !== e.isFirst && !0 !== e.isFinal),
        (this.fabPos = [this.fabPos[0] - e.delta.x, this.fabPos[1] - e.delta.y]));
    },
  },
};
export default componentOptions;
