/**
 * Vue options object recovered from webpack module AST.
 * Source: assets/www/js/14.js -> module "f741"
 * Route: /maintainer/repairList
 * Component: repairList
 * Not guaranteed standalone: imports/module aliases must be resolved from sibling .logic.js.
 */
const componentOptions = {
  name: "repairList",
  data() {
    return {
      checkStatus: "-1",
      statusOption: [],
      repair: [],
      paging: { pageSize: 30, pageNum: 0, pageCount: 0 },
      isLoading: !1,
      userinfo: JSON.parse(localStorage.getItem("userinfo")),
      applyForReassignmentDialog: !1,
      maximizedToggle: !0,
      record: { reason: "", maintainer_no: "" },
      maintainerList: [],
      repairId: null,
    };
  },
  watch: {
    checkStatus() {
      this.loadRepairList(() => {});
    },
  },
  destroyed() {
    window.removeEventListener("popstate", this.goBack, !1);
  },
  mounted() {
    (this.getRepairStatusList(),
      this.loadRepairList(() => {}),
      window.history &&
        window.history.pushState &&
        (history.pushState(null, null, document.URL),
        window.addEventListener("popstate", this.goBack, !1)),
      this.getSelectList());
  },
  methods: {
    getRepairStatusList() {
      this.$axiosAction("/api/teacher/basic/maintainer.api", {
        action: "queryListForRepairStatus",
      }).then((t) => {
        this.statusOption = t.data.list;
      });
    },
    loadRepairList(t) {
      (t && ((this.paging.pageNum = 0), (this.repair = [])),
        (this.paging.pageNum += 1),
        (this.isLoading = !0),
        this.$axiosAction("/api/teacher/basic/maintainer.api", {
          action: "queryRepairList",
          login_name: this.userinfo.login_name,
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
                rowCount: s,
                pageCount: i,
                startIndex: n,
                endIndex: o,
              } = r()({}, e.data.list);
              this.paging = {
                pageSize: t,
                pageNum: a,
                rowCount: s,
                pageCount: i,
                startIndex: n,
                endIndex: o,
              };
            } else this.setDefaultList();
            (t && t(), (this.isLoading = !1));
          })
          .catch((e) => {
            (this.setDefaultList(), t && t(), (this.isLoading = !1));
          }));
    },
    getSelectList() {
      this.$axiosAction("/api/teacher/basic/maintainer.api", {
        action: "queryListForMaintainer",
      }).then((t) => {
        this.maintainerList = t.data.maintainerList;
      });
    },
    submitReassignment() {
      "" !== this.record.maintainer_no
        ? "" !== this.record.reason
          ? this.$axiosAction(
              "/api/teacher/basic/maintainer.api",
              r()({ action: "applyForReassignment", id: this.repairId }, this.record),
            ).then((t) => {
              0 === t.data.code
                ? (this.$q.loading.hide(),
                  this.loadRepairList(() => {}),
                  (this.applyForReassignmentDialog = !1))
                : this.$q.loading.hide();
            })
          : this.$showErrorNotify("请填写改派原因")
        : this.$showErrorNotify("请选择改派人员");
    },
    cancel() {
      ((this.applyForReassignmentDialog = !1),
        (this.record.reason = ""),
        (this.record.maintainer_no = ""));
    },
    setDefaultList() {
      ((this.repair = []), (this.paging = { pageSize: 30, pageNum: 0, pageCount: 0 }));
    },
    refresh(t) {
      this.loadRepairList(t);
    },
    goBack() {
      this.$router.push("/maintainer/index");
    },
    goDetails(t) {
      this.$router.push(`/maintainer/detail?id=${t}`);
    },
    applyForReassignment(t) {
      ((this.applyForReassignmentDialog = !0), (this.repairId = t));
    },
    receivingOrders(t) {
      this.$router.push(`/maintainer/receivingOrder?id=${t}`);
    },
    goMaintenance(t) {
      this.$router.push(`/maintainer/repairOrder?id=${t}`);
    },
  },
};
export default componentOptions;
