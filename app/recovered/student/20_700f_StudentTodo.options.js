/**
 * Vue options object recovered from webpack module AST.
 * Source: assets/www/js/20.js -> module "700f"
 * Route: /student/todo
 * Component: StudentTodo
 * Not guaranteed standalone: imports/module aliases must be resolved from sibling .logic.js.
 */
const componentOptions = {
  name: "StudentTodo",
  data() {
    return { list: [], paging: { pageSize: 30, pageNum: 0, pageCount: 0 }, isLoading: !1 };
  },
  computed: {},
  created() {
    window.addEventListener("refreshTodoList", this.refreshTodoList, !1);
  },
  destroyed() {
    (window.removeEventListener("popstate", this.goBack, !1),
      window.removeEventListener("refreshTodoList", this.refreshTodoList, !1));
  },
  mounted() {
    (window.history &&
      window.history.pushState &&
      (history.pushState(null, null, document.URL),
      window.addEventListener("popstate", this.goBack, !1)),
      this.refreshTodoList());
  },
  methods: {
    refreshTodoList() {
      this.loadList(() => {});
    },
    loadList(t) {
      (t && ((this.paging.pageNum = 0), (this.list = [])),
        (this.paging.pageNum += 1),
        (this.isLoading = !0),
        this.$axiosAction("/api/student/home/home.api", {
          action: "getHomeList",
          pageSize: this.paging.pageSize,
          pageNum: this.paging.pageNum,
        })
          .then((e) => {
            if (0 === e.data.code) {
              this.list = this.list.concat(e.data.result.list);
              const {
                pageSize: t,
                pageNum: i,
                rowCount: a,
                pageCount: s,
                startIndex: n,
                endIndex: r,
              } = o()({}, e.data.result);
              this.paging = {
                pageSize: t,
                pageNum: i,
                rowCount: a,
                pageCount: s,
                startIndex: n,
                endIndex: r,
              };
              const d = new CustomEvent("setNotificationBadge", { detail: { badge: a } });
              window.dispatchEvent(d);
            } else this.setDefaultList();
            (t && t(), (this.isLoading = !1));
          })
          .catch((e) => {
            (this.setDefaultList(), t && t(), (this.isLoading = !1));
          }));
    },
    setDefaultList() {
      ((this.list = []), (this.paging = { pageSize: 30, pageNum: 0, pageCount: 0 }));
      const t = new CustomEvent("setNotificationBadge", { detail: { badge: 0 } });
      window.dispatchEvent(t);
    },
    refresh(t) {
      this.loadList(t);
    },
    clearList() {
      this.$q
        .dialog({ title: "确认清除", message: "确认清除当前列表信息？", cancel: !0 })
        .onOk(() => {
          this.$axiosAction("/api/push/push.api", { action: "clearStatus" }).then(() => {
            this.refreshTodoList();
          });
        });
    },
    goDetail(t, e) {
      e &&
        (this.$axiosAction(
          "/api/push/push.api",
          { action: "updateStatus", id: t },
          "post",
          !1,
        ).then((t) => {
          if (0 === t.data.code) {
            const e = new CustomEvent("setNotificationBadge", { detail: { badge: t.data.badge } });
            window.dispatchEvent(e);
          }
        }),
        this.$router.push(e));
    },
    getMenuColor(t) {
      return Object(r["d"])(t);
    },
    goBack() {
      this.$router.push("/student/index");
    },
  },
};
export default componentOptions;
