/**
 * Vue options object recovered from webpack module AST.
 * Source: assets/www/js/43.js -> module "8a70"
 * Route: /student/repair/index
 * Component: RepairIndex
 * Not guaranteed standalone: imports/module aliases must be resolved from sibling .logic.js.
 */
const componentOptions = {
  name: "RepairIndex",
  data() {
    return {
      checkStatus: "-1",
      statusOption: [],
      repair: [],
      paging: { pageSize: 30, pageNum: 0, pageCount: 0 },
      isLoading: !1,
      fabPos: [30, 40],
    };
  },
  watch: {
    checkStatus() {
      this.loadRepairList(() => {});
    },
  },
  computed: {},
  destroyed() {
    window.removeEventListener("popstate", this.goBack, !1);
  },
  mounted() {
    (this.getRepairStatusList(),
      this.loadRepairList(() => {}),
      window.history &&
        window.history.pushState &&
        (history.pushState(null, null, document.URL),
        window.addEventListener("popstate", this.goBack, !1)));
  },
  methods: {
    refresh(t) {
      this.loadRepairList(t);
    },
    goBack() {
      this.$router.push("/student/index");
    },
    getRepairStatusList() {
      this.$axiosAction("/api/student/repair/repair.api", {
        action: "queryListForRepairStatus",
      }).then((t) => {
        this.statusOption = t.data.list;
      });
    },
    loadRepairList(t) {
      (t && ((this.paging.pageNum = 0), (this.repair = [])),
        (this.paging.pageNum += 1),
        (this.isLoading = !0));
      const e = JSON.parse(localStorage.getItem("userinfo"));
      this.$axiosAction("/api/student/repair/repair.api", {
        action: "queryListForRepair",
        login_name: e.login_name,
        status: this.checkStatus,
        pageSize: this.paging.pageSize,
        pageNum: this.paging.pageNum,
      })
        .then((e) => {
          if (0 === e.data.code) {
            this.repair = this.repair.concat(e.data.list.list);
            const {
              pageSize: t,
              pageNum: a,
              rowCount: i,
              pageCount: s,
              startIndex: n,
              endIndex: o,
            } = r()({}, e.data.list);
            this.paging = {
              pageSize: t,
              pageNum: a,
              rowCount: i,
              pageCount: s,
              startIndex: n,
              endIndex: o,
            };
          } else this.setDefaultList();
          (t && t(), (this.isLoading = !1));
        })
        .catch((e) => {
          (this.setDefaultList(), t && t(), (this.isLoading = !1));
        });
    },
    setDefaultList() {
      ((this.repair = []), (this.paging = { pageSize: 30, pageNum: 0, pageCount: 0 }));
    },
    moveFab(t) {
      ((this.draggingFab = !0 !== t.isFirst && !0 !== t.isFinal),
        (this.fabPos = [this.fabPos[0] - t.delta.x, this.fabPos[1] - t.delta.y]));
    },
    onClick() {
      this.$router.push("/student/repair/new?type=insert&id=0");
    },
    update(t) {
      this.$router.push(`/student/repair/new?type=update&id=${t}`);
    },
    goDetails(t) {
      this.$router.push(`/student/repair/detail?repair_id=${t}`);
    },
  },
};
export default componentOptions;
