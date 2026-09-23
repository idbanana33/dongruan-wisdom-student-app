/**
 * Vue options object recovered from webpack module AST.
 * Source: assets/www/js/36.js -> module "90a6"
 * Route: /student/notice/stumanagedetail
 * Component: SigninIndex
 * Not guaranteed standalone: imports/module aliases must be resolved from sibling .logic.js.
 */
const componentOptions = {
  components: { NeuManageQa: n["a"], NeuNoticeStatistics: c["a"], NeuExportData: l["a"] },
  name: "SigninIndex",
  data() {
    return {
      id: this.$route.query.id,
      menuInfo: null,
      tab: "progress",
      record: {},
      condition: [],
      drawerRight: !1,
      draggingFab: !1,
      noticeId: this.$route.query.id,
      queryModel: { feedback_status: "", confirm_status: "", mutli_search: "" },
      list: [],
      paging: { pageSize: 30, pageNum: 0, pageCount: 0 },
      isLoading: !1,
      condCount: 0,
      originalCond: {},
      dialog: !1,
      time: "",
      model: { noticeStatistics: "1" },
      roleId: JSON.parse(window.localStorage.getItem("userinfo")).role_id,
      allowSmsRemind: !1,
      signatureStatus: !1,
      stu_signature: "",
      exportCompConfig: null,
      counsellorlabel: localStorage.getItem("counsellorlabel"),
    };
  },
  destroyed() {
    window.removeEventListener("popstate", this.goBack, !1);
  },
  mounted() {
    (window.localStorage.getItem("menu") &&
      (this.menuInfo = JSON.parse(window.localStorage.getItem("menu")).find(
        (e) => "notice" === e.id,
      )),
      this.$axiosAction("/api/student/notice/notice.api", {
        action: "queryListStu",
        id: this.noticeId,
      })
        .then((e) => {
          (0 === e.data.code && (this.record = e.data.result),
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
      this.$router.push("/student/notice/stumanage");
    },
    loadList(e) {
      this.noticeId
        ? (e && ((this.paging.pageNum = 0), (this.list = [])),
          (this.paging.pageNum += 1),
          (this.isLoading = !0),
          this.$axiosAction(
            "/api/student/notice/notice.api",
            r()(
              r()({ action: "queryFeedbackListStu", notice_id: this.noticeId }, this.queryModel),
              {},
              { pageSize: this.paging.pageSize, pageNum: this.paging.pageNum },
            ),
          )
            .then((t) => {
              if (0 === t.data.code) {
                ((this.time = t.data.time), (this.list = this.list.concat(t.data.result.list)));
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
            }))
        : e && e();
    },
    setDefaultList() {
      ((this.list = []), (this.paging = { pageSize: 30, pageNum: 0, pageCount: 0 }));
    },
    exportList() {
      this.noticeId &&
        (this.exportCompConfig = [
          "/api/student/notice/notice.api",
          "exportFeedbackList",
          r()(r()({ notice_id: this.noticeId }, this.queryModel), {}, { role_stu: 1 }),
          { [this.record.title]: "result" },
          this.record.title,
          null,
          null,
          1e3,
          5e3,
        ]);
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
    exportLists() {
      this.exportCompConfig = [
        "/api/teacher/notice/notice.api",
        "getNoticeNumList",
        { notice_id: this.id, noticeStatistics: this.model.noticeStatistics },
        { [`${this.record.title}的统计`]: "feedbackResult" },
        `${this.record.title}的统计`,
        null,
        (e) => ({
          [`${this.record.title}的统计`]: e[`${this.record.title}的统计`].reduce(
            (e, t) =>
              "1" === this.model.noticeStatistics && 1 === this.record.confirm_flag
                ? e.concat({
                    班级名称: t.class_name,
                    应阅读人数: t.feedback_total,
                    已阅读人数: t.feedback_count,
                    未阅读人数: t.no_feedback_total,
                    应确认人数: t.confirm_total,
                    已确认人数: t.confirm_count,
                    未确认人数: t.no_confirm_total,
                  })
                : "1" === this.model.noticeStatistics && 0 === this.record.confirm_flag
                  ? e.concat({
                      班级名称: t.class_name,
                      应阅读人数: t.feedback_total,
                      已阅读人数: t.feedback_count,
                      未阅读人数: t.no_feedback_total,
                    })
                  : "2" === this.model.noticeStatistics && 1 === this.record.confirm_flag
                    ? e.concat({
                        专业名称: t.major_name,
                        应阅读人数: t.feedback_total,
                        已阅读人数: t.feedback_count,
                        未阅读人数: t.no_feedback_total,
                        应确认人数: t.confirm_total,
                        已确认人数: t.confirm_count,
                        未确认人数: t.no_confirm_total,
                      })
                    : "2" === this.model.noticeStatistics && 0 === this.record.confirm_flag
                      ? e.concat({
                          专业名称: t.major_name,
                          应阅读人数: t.feedback_total,
                          已阅读人数: t.feedback_count,
                          未阅读人数: t.no_feedback_total,
                        })
                      : "3" === this.model.noticeStatistics && 1 === this.record.confirm_flag
                        ? e.concat({
                            院系名称: t.dep_name,
                            应阅读人数: t.feedback_total,
                            已阅读人数: t.feedback_count,
                            未阅读人数: t.no_feedback_total,
                            应确认人数: t.confirm_total,
                            已确认人数: t.confirm_count,
                            未确认人数: t.no_confirm_total,
                          })
                        : "3" === this.model.noticeStatistics && 0 === this.record.confirm_flag
                          ? e.concat({
                              院系名称: t.dep_name,
                              应阅读人数: t.feedback_total,
                              已阅读人数: t.feedback_count,
                              未阅读人数: t.no_feedback_total,
                            })
                          : "4" === this.model.noticeStatistics && 0 === this.record.confirm_flag
                            ? e.concat({
                                [this.counsellorlabel + "姓名"]: t.name + "(" + t.tea_no + ")",
                                应阅读人数: t.feedback_total,
                                已阅读人数: t.feedback_count,
                                未阅读人数: t.no_feedback_total,
                              })
                            : "4" === this.model.noticeStatistics && 1 === this.record.confirm_flag
                              ? e.concat({
                                  [this.counsellorlabel + "姓名"]: t.name + "(" + t.tea_no + ")",
                                  应阅读人数: t.feedback_total,
                                  已阅读人数: t.feedback_count,
                                  未阅读人数: t.no_feedback_total,
                                  应确认人数: t.confirm_total,
                                  已确认人数: t.confirm_count,
                                  未确认人数: t.no_confirm_total,
                                })
                              : e.concat(t),
            [],
          ),
        }),
        null,
        null,
      ];
    },
    showSignature(e) {
      ((this.stu_signature = e), (this.signatureStatus = !0));
    },
  },
};
export default componentOptions;
