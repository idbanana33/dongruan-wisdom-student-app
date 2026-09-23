/**
 * Vue options object recovered from webpack module AST.
 * Source: assets/www/js/23.js -> module "def2"
 * Route: /student/apply/stumanage
 * Component: applyStumanage
 * Not guaranteed standalone: imports/module aliases must be resolved from sibling .logic.js.
 */
const componentOptions = {
  name: "applyStumanage",
  data() {
    return {
      list: [],
      menuColor: "",
      paging: { pageSize: 30, pageNum: 0, pageCount: 0 },
      isLoading: !1,
      applyType: "",
      menuInfo: {},
      apply_type: this.$route.query.type,
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
      (this.applyType = this.$route.query.apply_type),
      (this.menuColor = Object(p["d"])(this.applyType)),
      (this.menuInfo = JSON.parse(window.localStorage.getItem("menu")).find(
        (t) => t.id === this.applyType,
      )),
      this.loadList(() => {}));
  },
  methods: {
    loadList(t) {
      (t && ((this.paging.pageNum = 0), (this.list = [])),
        (this.paging.pageNum += 1),
        (this.isLoading = !0),
        this.$axiosAction("/api/student/apply/apply.api", {
          action: "getStuManageList",
          pageSize: this.paging.pageSize,
          pageNum: this.paging.pageNum,
          menu_id: this.applyType,
          apply_type: this.apply_type,
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
                endIndex: p,
              } = o()({}, e.data.result);
              this.paging = {
                pageSize: t,
                pageNum: a,
                rowCount: s,
                pageCount: i,
                startIndex: n,
                endIndex: p,
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
      this.$router.push("/student/apply/index?apply_type=" + this.$route.query.type);
    },
    checkDetail(t, e) {
      this.$router.push(
        `/student/apply/StuManageDetail?id=${t}&batch_no=${e}&apply_type=${this.applyType}&type=${this.$route.query.type}`,
      );
    },
    refresh(t) {
      this.loadList(t);
    },
  },
};
export default componentOptions;
