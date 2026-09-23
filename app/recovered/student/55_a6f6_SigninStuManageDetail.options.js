/**
 * Vue options object recovered from webpack module AST.
 * Source: assets/www/js/55.js -> module "a6f6"
 * Route: /student/signin/stumanagedetail
 * Component: SigninStuManageDetail
 * Not guaranteed standalone: imports/module aliases must be resolved from sibling .logic.js.
 */
const componentOptions = {
  components: { NeuExportData: r["a"] },
  name: "SigninStuManageDetail",
  data() {
    return {
      id: this.$route.query.id,
      batchNo: this.$route.query.batch_no,
      menuInfo: null,
      record: {},
      condition: [],
      drawerRight: !1,
      queryModel: { signin_status: "", location_status: "", mutli_search: "" },
      list: [],
      paging: { pageSize: 30, pageNum: 0, pageCount: 0 },
      isLoading: !1,
      condCount: 0,
      originalCond: {},
      dialog: !1,
      time: "",
      allowSmsRemind: !1,
      stu_signature: "",
      exportCompConfig: null,
      timeSlot: "",
    };
  },
  destroyed() {
    window.removeEventListener("popstate", this.goBack, !1);
  },
  mounted() {
    (window.localStorage.getItem("menu") &&
      (this.menuInfo = JSON.parse(window.localStorage.getItem("menu")).find(
        (e) => "signin" === e.id,
      )),
      this.$axiosAction("/api/student/signin/signin.api", {
        action: "querySigninListSimpleDetail",
        id: this.id,
      })
        .then((e) => {
          (0 === e.data.code && ((this.record = e.data.result), this.getTimeSlot()),
            (this.record && this.record.id) ||
              (this.$showErrorNotify("该条信息不存在或您权限不足！"), this.goBack()));
        })
        .catch((e) => {
          this.record = {};
        }),
      (this.allowSmsRemind = "true" === localStorage.getItem("remind")),
      window.history &&
        window.history.pushState &&
        (history.pushState(null, null, document.URL),
        window.addEventListener("popstate", this.goBack, !1)),
      this.loadList(() => {}));
  },
  methods: {
    goBack() {
      this.$router.push("/student/signin/stumanage");
    },
    loadList(e) {
      (e && ((this.paging.pageNum = 0), (this.list = [])),
        (this.paging.pageNum += 1),
        (this.isLoading = !0),
        this.id &&
          this.$axiosAction(
            "/api/student/signin/signin.api",
            n()(
              n()({ action: "querySigninResultListStu" }, this.queryModel),
              {},
              {
                batch_no: this.batchNo,
                signin_id: this.$route.query.id,
                pageSize: this.paging.pageSize,
                pageNum: this.paging.pageNum,
              },
            ),
          )
            .then((t) => {
              if (0 === t.data.code) {
                this.list = this.list.concat(t.data.result.list);
                const {
                  pageSize: e,
                  pageNum: i,
                  rowCount: s,
                  pageCount: a,
                  startIndex: o,
                  endIndex: r,
                } = n()({}, t.data.result);
                if (
                  ((this.paging = {
                    pageSize: e,
                    pageNum: i,
                    rowCount: s,
                    pageCount: a,
                    startIndex: o,
                    endIndex: r,
                  }),
                  this.record.info_config)
                )
                  for (let t = 0; t < this.record.info_config.length; t++)
                    for (const e of this.list)
                      e.info_result &&
                        (e["info" + t] = Object(l["c"])(
                          this.record.info_config[t],
                          e.info_result[t],
                        ));
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
    exportList() {
      this.exportCompConfig = [
        "/api/student/signin/signin.api",
        "querySigninResultListStu",
        n()(
          n()({}, this.queryModel),
          {},
          { signin_id: this.$route.query.id, batch_no: this.batchNo },
        ),
        { [this.record.title]: "result" },
        this.record.title,
        null,
        (e) =>
          e.reduce((e, t) => {
            const i = {
              签到结果:
                "未签到" === t.signin_status
                  ? "未签到"
                  : "已请假" === t.signin_status
                    ? "已请假"
                    : "已签到",
              签到时间: t.signin_time,
            };
            return (
              "L" === this.record.signin_method
                ? ((i.学号 = t.student_no),
                  (i.姓名 = t.name),
                  (i.性别 = t.sex_name),
                  (i.位置状态 = t.location_status),
                  (i.一级行政区 = t.province),
                  (i.二级行政区 = t.city),
                  (i.详细地址 = t.address),
                  (i.手机号 = t.mob))
                : ((i.二维码来源 = t.qrcode_source),
                  (i.学号 = t.student_no),
                  (i.姓名 = t.name),
                  (i.性别 = t.sex_name),
                  (i.手机号 = t.mob)),
              e.concat(i)
            );
          }, []),
        1e3,
        5e3,
      ];
    },
    refresh(e) {
      this.loadList(e);
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
    getFeedValue(e) {
      this.queryModel.feedback_status === e
        ? (this.queryModel.feedback_status = "")
        : (this.queryModel.feedback_status = e);
    },
    getConValue(e) {
      this.queryModel.confirm_status === e
        ? (this.queryModel.confirm_status = "")
        : (this.queryModel.confirm_status = e);
    },
    getCondition() {
      ((this.condCount = Object.keys(this.queryModel).reduce(
        (e, t) => (this.queryModel[t] ? e + 1 : e),
        0,
      )),
        this.loadList(() => {}),
        (this.dialog = !1));
    },
    getValue(e, t) {
      this.queryModel[e] === t ? (this.queryModel[e] = "") : (this.queryModel[e] = t);
    },
    getTimeSlot() {
      const e = this.record.begin_time.slice(0, 10),
        t = this.record.end_time.slice(0, 10),
        i = this.record.end_time.slice(-5);
      this.timeSlot =
        e === t
          ? this.record.begin_time + "~" + i
          : this.record.begin_time + "~" + this.record.end_time;
    },
  },
};
export default componentOptions;
