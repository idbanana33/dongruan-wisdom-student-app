/**
 * Vue options object recovered from webpack module AST.
 * Source: assets/www/js/97.js -> module "03ca"
 * Route: /teacher/notice/detail
 * Component: SigninIndex
 * Not guaranteed standalone: imports/module aliases must be resolved from sibling .logic.js.
 */
const componentOptions = {
  components: {
    NeuManageQa: n["a"],
    NeuAssignTeacher: c["a"],
    NeuViewAssignedTeacher: l["a"],
    NeuViewAssignedStudent: d["a"],
    NeuNoticeStatistics: u["a"],
    NeuExportData: p["a"],
  },
  name: "SigninIndex",
  data() {
    return {
      id: this.$route.query.id,
      menuInfo: null,
      tab: "progress",
      record: {},
      detailDialog: !1,
      extendDialog: !1,
      feedbackDeadline: null,
      shareDialog: !1,
      shareTarget: [],
      condition: [],
      drawerRight: !1,
      draggingFab: !1,
      noticeId: this.$route.query.id,
      noticeConfirmFlag: 0,
      queryModel: { feedback_status: "", confirm_status: "", mutli_search: "" },
      pagination: { rowsPerPage: 0 },
      list: [],
      paging: { pageSize: 30, pageNum: 0, pageCount: 0 },
      isLoading: !1,
      condCount: 0,
      originalCond: {},
      dialog: !1,
      maximizedToggle: !0,
      time: "",
      model: { noticeStatistics: "1" },
      roleId: JSON.parse(window.localStorage.getItem("userinfo")).role_id,
      allowSmsRemind: !1,
      signatureStatus: !1,
      stu_signature: "",
      exportCompConfig: null,
      counsellorlabel: localStorage.getItem("counsellorlabel"),
      cId: this.$route.query.compositeId,
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
      this.$axiosAction("/api/teacher/notice/notice.api", {
        action: "queryNotice",
        id: this.noticeId,
      })
        .then((e) => {
          (0 === e.data.code &&
            ((this.record = e.data.result), (this.noticeConfirmFlag = this.record.confirm_flag)),
            (this.record && this.record.id) ||
              (this.$showErrorNotify("该条信息不存在或您权限不足！"),
              this.$router.push("/teacher/notice/index")));
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
      null !== this.cId && void 0 !== this.cId
        ? this.$router.push("/teacher/composite/detail?id=" + this.$route.query.compositeId)
        : this.$router.push("/teacher/notice/index");
    },
    loadList(e) {
      this.noticeId
        ? (e && ((this.paging.pageNum = 0), (this.list = [])),
          (this.paging.pageNum += 1),
          (this.isLoading = !0),
          this.$axiosAction(
            "/api/teacher/notice/notice.api",
            r()(
              r()({ action: "queryFeedbackList", notice_id: this.noticeId }, this.queryModel),
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
                  rowCount: i,
                  pageCount: s,
                  startIndex: o,
                  endIndex: n,
                } = r()({}, t.data.result);
                this.paging = {
                  pageSize: e,
                  pageNum: a,
                  rowCount: i,
                  pageCount: s,
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
          "/api/teacher/notice/notice.api",
          "exportFeedbackList",
          r()({ notice_id: this.noticeId }, this.queryModel),
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
    deleteNotice() {
      this.$q
        .dialog({
          title: "确认删除",
          message: '该通知及其产生的<span class="text-red">数据将被清空。</span>',
          html: !0,
          persistent: !0,
          cancel: { label: "取消", outline: !0, color: "grey" },
          ok: { label: "删除", unelevated: !0, color: "negative" },
        })
        .onOk(() => {
          (this.$q.loading.show(),
            this.$axiosAction("/api/teacher/notice/notice.api", {
              action: "deleteNotice",
              id: this.noticeId,
            })
              .then((e) => {
                (0 === e.data.code && this.$router.push("/teacher/notice/index"),
                  this.$q.loading.hide());
              })
              .catch((e) => {
                this.$q.loading.hide();
              }));
        });
    },
    terminateNotice() {
      this.$q
        .dialog({
          title: "确认提前结束",
          message: "提前结束后将不再统计后续学生的阅读率。",
          html: !0,
          persistent: !0,
          cancel: { label: "取消", outline: !0, color: "grey" },
          ok: { label: "提前结束", unelevated: !0, color: "primary" },
        })
        .onOk(() => {
          (this.$q.loading.show(),
            this.$axiosAction("/api/teacher/notice/notice.api", {
              action: "terminateNotice",
              id: this.noticeId,
            })
              .then((e) => {
                (0 === e.data.code && this.$router.push("/teacher/notice/index"),
                  this.$q.loading.hide());
              })
              .catch((e) => {
                this.$q.loading.hide();
              }));
        });
    },
    openExtendDialog() {
      ((this.extendDialog = !0), (this.feedbackDeadline = this.record.feedback_deadline));
    },
    extendNotice() {
      (this.$q.loading.show(),
        this.$axiosAction("/api/teacher/notice/notice.api", {
          action: 1 === this.record.status ? "extendNotice" : "restartNotice",
          id: this.noticeId,
          feedback_deadline: this.feedbackDeadline,
        })
          .then((e) => {
            (0 === e.data.code &&
              (1 === this.record.status
                ? ((this.record.feedback_deadline = this.feedbackDeadline),
                  (this.extendDialog = !1))
                : this.$router.push("/teacher/notice/index")),
              this.$q.loading.hide());
          })
          .catch((e) => {
            this.$q.loading.hide();
          }));
    },
    withdrawNotice() {
      this.$q
        .dialog({
          title: "确认撤回",
          message:
            '您可再次编辑并发布该通知。<br>原通知及其产生的<span class="text-red">数据将被清空。</span>',
          html: !0,
          persistent: !0,
          cancel: { label: "取消", outline: !0, color: "grey" },
          ok: { label: "撤回", unelevated: !0, color: "negative" },
        })
        .onOk(() => {
          this.$axiosAction("/api/teacher/notice/notice.api", {
            action: "queryNoticeForEditing",
            id: this.noticeId,
          })
            .then((e) => {
              0 === e.data.code &&
                this.$axiosAction("/api/teacher/notice/notice.api", {
                  action: "deleteNotice",
                  id: this.noticeId,
                }).then((t) => {
                  0 === t.data.code &&
                    this.$router.push({
                      name: "/teacher/notice/new",
                      params: { record: e.data.result },
                    });
                });
            })
            .catch((e) => {});
        });
    },
    openShareDialog() {
      (null !== this.cId && void 0 !== this.cId) || null !== this.record.composite_id
        ? this.$q
            .dialog({
              title: "修改组合共享",
              message: `该${this.menuInfo.title}为组合任务<span class="text-red">点击确定进入组合详情修改。</span>`,
              html: !0,
              persistent: !0,
              cancel: { label: "取消", outline: !0, color: "grey" },
              ok: { label: "确定", unelevated: !0, color: "primary" },
            })
            .onOk(() => {
              (null !== this.record.composite_id && (this.cId = this.record.composite_id),
                this.$router.push("/teacher/composite/detail?id=" + this.cId));
            })
        : ((this.shareDialog = !0), (this.shareTarget = this.record.share_target));
    },
    updateShareTarget() {
      (this.$q.loading.show(),
        this.$axiosAction("/api/teacher/notice/notice.api", {
          action: "updateShareTarget",
          id: this.noticeId,
          share_target:
            this.shareTarget && this.shareTarget.length > 0
              ? JSON.stringify(this.shareTarget)
              : null,
        })
          .then((e) => {
            (0 === e.data.code &&
              ((this.record.share_target = this.shareTarget), (this.shareDialog = !1)),
              this.$q.loading.hide());
          })
          .catch((e) => {
            this.$q.loading.hide();
          }));
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
    downloadFile(e, t) {
      Object(m["c"])(e, t);
    },
    unnoticeAlert() {
      this.$axiosAction("/api/teacher/notice/notice.api", {
        action: "insertAgain",
        id: this.noticeId,
      }).then((e) => {});
    },
    sendSmsRemind() {
      (this.$q.loading.show(),
        this.$axiosAction("/api/teacher/notice/notice.api", {
          action: "sendSmsRemind",
          id: this.noticeId,
          title: this.record.title,
          menu_id: this.menuInfo.id,
          menu_name: this.menuInfo.title,
        }).then((e) => {
          this.$q.loading.hide();
        }));
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
    changeAllowStuManageFlag() {
      this.$axiosAction("/api/teacher/notice/notice.api", {
        action: "updateStuManageFlag",
        id: this.noticeId,
        stu_manage_flag: this.record.stu_manage_flag,
      })
        .then((e) => {
          0 === e.data.code || this.$router.push("/teacher/notice/index");
        })
        .catch((e) => {
          this.record = {};
        });
    },
  },
};
export default componentOptions;
