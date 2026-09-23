/**
 * Vue options object recovered from webpack module AST.
 * Source: assets/www/js/49.js -> module "048f"
 * Route: /student/signin/qrcodePerson
 * Component: NeuSigninList
 * Not guaranteed standalone: imports/module aliases must be resolved from sibling .logic.js.
 */
const componentOptions = {
  name: "NeuSigninList",
  data() {
    return { list: [], paging: { pageSize: 10, pageNum: 0, pageCount: 0 }, isLoading: !1 };
  },
  destroyed() {
    window.removeEventListener("popstate", this.goBack, !1);
  },
  mounted() {
    (window.history &&
      window.history.pushState &&
      (history.pushState(null, null, document.URL),
      window.addEventListener("popstate", this.goBack, !1)),
      this.getQrPersonList(() => {}));
  },
  methods: {
    getQrPersonList(t) {
      (t && ((this.paging.pageNum = 0), (this.list = [])),
        (this.paging.pageNum += 1),
        (this.isLoading = !0),
        this.$axiosAction("/api/student/signin/signin.api", {
          action: "getQrcodeList",
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
                endIndex: r,
              } = o()({}, e.data.result);
              this.paging = {
                pageSize: t,
                pageNum: a,
                rowCount: s,
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
    refresh(t) {
      this.getQrPersonList(t);
    },
    goBack() {
      this.$router.push("/student/signin/index");
    },
    goDetail(t, e, a) {
      this.$axiosAction("/api/student/signin/signin.api", {
        action: "updateSigninPersonalSigninSuccess",
        id: t,
        batch_no: a,
      }).then((s) => {
        0 === s.data.code &&
          this.$router.push({
            name: "/student/signin/qrcodePersonDetails",
            params: { id: t, batch_no: a, title: e },
          });
      });
    },
  },
};
export default componentOptions;
