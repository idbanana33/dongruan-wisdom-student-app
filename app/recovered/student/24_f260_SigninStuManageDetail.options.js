/**
 * Vue options object recovered from webpack module AST.
 * Source: assets/www/js/24.js -> module "f260"
 * Route: /student/apply/stumanagedetail
 * Component: SigninStuManageDetail
 * Not guaranteed standalone: imports/module aliases must be resolved from sibling .logic.js.
 */
const componentOptions = {
  components: { NeuExportData: n["a"] },
  name: "SigninStuManageDetail",
  data() {
    return {
      id: this.$route.query.id,
      batchNo: this.$route.query.batch_no,
      apply_type: this.$route.query.apply_type,
      type: this.$route.query.type,
      menuInfo: {},
      condCount: 0,
      record: {},
      drawerRight: !1,
      applyShortTitle: "",
      list: [],
      menuColor: "",
      paging: { pageSize: 30, pageNum: 0, pageCount: 0 },
      isLoading: !1,
      dialog: !1,
      queryModel: { apply_status: "", location_status: "", mutli_search: "" },
      originalCond: {},
      exportCompConfig: null,
      timeSlot: "",
    };
  },
  destroyed() {
    window.removeEventListener("popstate", this.goBack, !1);
  },
  computed: {},
  mounted() {
    ((this.menuInfo = JSON.parse(window.localStorage.getItem("menu")).find(
      (e) => e.id === this.apply_type,
    )),
      (this.menuColor = Object(l["d"])(this.apply_type)),
      "A" === this.type
        ? (this.applyShortTitle = "申请")
        : "C" === this.type
          ? (this.applyShortTitle = "收集")
          : (this.applyShortTitle = "报名"),
      this.$axiosAction("/api/student/apply/apply.api", {
        action: "queryListStu",
        id: this.id,
        batch_no: this.batchNo,
      })
        .then((e) => {
          (0 === e.data.code && ((this.record = e.data.result), this.getTimeSlot()),
            (this.record && this.record.apply_id) ||
              (this.$showErrorNotify("该条信息不存在或您权限不足！"), this.goBack()));
        })
        .catch((e) => {
          this.record = {};
        }),
      this.loadList(() => {}));
  },
  methods: {
    goBack() {
      this.$router.push(
        "/student/apply/stumanage?apply_type=" +
          this.$route.query.apply_type +
          "&type=" +
          this.$route.query.type,
      );
    },
    exportList() {
      this.id &&
        (this.exportCompConfig = [
          "/api/student/apply/apply.api",
          "queryFeedbackListStu",
          r()(
            r()({}, this.queryModel),
            {},
            { batch_no: this.batchNo, id: this.id, menu_id: this.apply_type },
          ),
          { [this.record.title]: "result" },
          this.record.title,
          null,
          (e) =>
            e.reduce((e, t) => {
              const a = {
                进度:
                  1 === t.apply_status ? `已${this.applyShortTitle}` : `未${this.applyShortTitle}`,
                学号: t.student_no,
                姓名: t.student_name,
                性别: t.sex_name,
                手机号: t.mob,
              };
              return (
                1 === this.record.need_location && (a.提交时的定位信息 = t.address),
                e.concat(a)
              );
            }, []),
          1e3,
          5e3,
        ]);
    },
    loadList(e) {
      (e && ((this.paging.pageNum = 0), (this.list = [])),
        (this.paging.pageNum += 1),
        (this.isLoading = !0),
        this.id &&
          this.$axiosAction(
            "/api/student/apply/apply.api",
            r()(
              r()({ action: "queryFeedbackListStu" }, this.queryModel),
              {},
              {
                batch_no: this.batchNo,
                id: this.id,
                pageSize: this.paging.pageSize,
                pageNum: this.paging.pageNum,
                menu_id: this.apply_type,
              },
            ),
          )
            .then((t) => {
              if (0 === t.data.code) {
                this.list = this.list.concat(t.data.result.list);
                const {
                  pageSize: e,
                  pageNum: a,
                  rowCount: s,
                  pageCount: i,
                  startIndex: o,
                  endIndex: n,
                } = r()({}, t.data.result);
                this.paging = {
                  pageSize: e,
                  pageNum: a,
                  rowCount: s,
                  pageCount: i,
                  startIndex: o,
                  endIndex: n,
                };
              } else this.setDefaultList();
              (e && e(), (this.isLoading = !1));
            })
            .catch((t) => {
              (this.setDefaultList(), e && e(), (this.isLoading = !1));
            }));
    },
    showInfoResult(e) {},
    setDefaultList() {
      ((this.list = []), (this.paging = { pageSize: 30, pageNum: 0, pageCount: 0 }));
    },
    open() {
      ((this.dialog = !0),
        (this.originalCond = Object.keys(this.queryModel).reduce(
          (e, t) => ((e[t] = this.queryModel[t]), e),
          {},
        )));
    },
    close() {
      ((this.dialog = !1),
        (this.queryModel = Object.keys(this.originalCond).reduce(
          (e, t) => ((e[t] = this.originalCond[t]), e),
          {},
        )));
    },
    getValue(e, t) {
      this.queryModel[e] === t ? (this.queryModel[e] = "") : (this.queryModel[e] = t);
    },
    getCondition() {
      ((this.condCount = Object.keys(this.queryModel).reduce(
        (e, t) => (this.queryModel[t] ? e + 1 : e),
        0,
      )),
        this.loadList(() => {}),
        (this.dialog = !1));
    },
    refresh(e) {
      this.loadList(e);
    },
    getTimeSlot() {
      const e = this.record.begin_time.slice(0, 10),
        t = this.record.end_time.slice(0, 10),
        a = this.record.end_time.slice(-5);
      this.timeSlot =
        e === t
          ? this.record.begin_time + "~" + a
          : this.record.begin_time + "~" + this.record.end_time;
    },
  },
};
export default componentOptions;
