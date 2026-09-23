/**
 * Vue options object recovered from webpack module AST.
 * Source: assets/www/js/57.js -> module "58c1"
 * Route: /teacher/todo
 * Component: TeacherTodo
 * Not guaranteed standalone: imports/module aliases must be resolved from sibling .logic.js.
 */
const componentOptions = {
  name: "TeacherTodo",
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
    loadList(e) {
      (e && ((this.paging.pageNum = 0), (this.list = [])),
        (this.paging.pageNum += 1),
        (this.isLoading = !0),
        this.$axiosAction("/api/teacher/home/home.api", {
          action: "getHomeList",
          pageSize: this.paging.pageSize,
          pageNum: this.paging.pageNum,
        })
          .then((t) => {
            if (0 === t.data.code) {
              this.list = this.list.concat(t.data.result.list);
              const {
                pageSize: e,
                pageNum: i,
                rowCount: a,
                pageCount: s,
                startIndex: n,
                endIndex: r,
              } = o()({}, t.data.result);
              this.paging = {
                pageSize: e,
                pageNum: i,
                rowCount: a,
                pageCount: s,
                startIndex: n,
                endIndex: r,
              };
              const d = new CustomEvent("setNotificationBadge", { detail: { badge: a } });
              window.dispatchEvent(d);
            } else this.setDefaultList();
            (e && e(), (this.isLoading = !1));
          })
          .catch((t) => {
            (this.setDefaultList(), e && e(), (this.isLoading = !1));
          }));
    },
    setDefaultList() {
      ((this.list = []), (this.paging = { pageSize: 30, pageNum: 0, pageCount: 0 }));
      const e = new CustomEvent("setNotificationBadge", { detail: { badge: 0 } });
      window.dispatchEvent(e);
    },
    refresh(e) {
      this.loadList(e);
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
    goDetail(e, t) {
      t &&
        (this.$axiosAction(
          "/api/push/push.api",
          { action: "updateStatus", id: e },
          "post",
          !1,
        ).then((e) => {
          if (0 === e.data.code) {
            const t = new CustomEvent("setNotificationBadge", { detail: { badge: e.data.badge } });
            window.dispatchEvent(t);
          }
        }),
        this.$router.push(t));
    },
    getMenuColor(e) {
      return Object(r["d"])(e);
    },
    goBack() {
      this.$router.push("/teacher/index");
    },
  },
};
export default componentOptions;
