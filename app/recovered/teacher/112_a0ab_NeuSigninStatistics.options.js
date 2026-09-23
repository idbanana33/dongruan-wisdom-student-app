/**
 * Vue options object recovered from webpack module AST.
 * Source: assets/www/js/112.js -> module "a0ab"
 * Route: /teacher/signin/detail
 * Component: NeuSigninStatistics
 * Not guaranteed standalone: imports/module aliases must be resolved from sibling .logic.js.
 */
const componentOptions = {
  components: {
    NeuManageQa: l["a"],
    NeuSigninStatistics: S,
    vueQr: y.a,
    NeuLocationAnalysisMap: k["a"],
    NeuExportData: C["a"],
    NeuFullScreenImage: r["a"],
  },
  name: "SigninDetail",
  data() {
    return {
      loginName: JSON.parse(window.localStorage.getItem("userinfo")).login_name,
      baseUrl: window.localStorage.server,
      roleId: JSON.parse(window.localStorage.getItem("userinfo")).role_id,
      batchNoParam: this.$route.query.batch_no,
      getBatchnoList: [],
      id: null,
      menuInfo: null,
      drawerRight: !1,
      tab: "progress",
      change: "",
      texterea: "",
      stuSigninId: "",
      list: [],
      initList: [],
      modList: [],
      batchNoList: [],
      condition: [],
      record: {},
      initDetail: {},
      link: "",
      batchNo: "",
      batchLabel: "",
      queryModel: { signin_status: "", location_status: "", mutli_search: "" },
      model: { signin_statistics: "1" },
      downloadData: { text: "" },
      showStuDialog: !1,
      studentShowing: [],
      showTeaDialog: !1,
      teacherShowing: [],
      dialog: !1,
      detailDialog: !1,
      shareDialog: !1,
      timeDialog: !1,
      qrShowingDialog: !1,
      signinTime: !1,
      teacherChangeStatus: !1,
      checkModified: !1,
      checkPicture: !1,
      maximizedToggle: !0,
      shareTarget: [],
      taskTargetDialog: !1,
      taskTargetExcludDialog: !1,
      actionTarget: [],
      noActionTarget: [],
      infoModel: [],
      condCount: 0,
      paging: { pageSize: 30, pageNum: 0, pageCount: 0 },
      originalCond: {},
      getPageStatus: !1,
      time: "",
      editPermit: null,
      countRuleShow: !1,
      ruleTitle: "",
      ruleMessage: "",
      isLoading: !1,
      mapDialog: !1,
      statisticsData: null,
      clusterData: null,
      allowSmsRemind: !1,
      exportCompConfig: null,
      showBigPic: !1,
      bigPicUrl: "",
      bigPicName: "",
      counsellorlabel: localStorage.getItem("counsellorlabel"),
      cId: this.$route.query.compositeId,
    };
  },
  destroyed() {
    window.removeEventListener("popstate", this.goBack, !1);
  },
  computed: {
    checkBatchNo() {
      let t = "";
      return ((t = this.batchNo ? 1 : 0), t);
    },
  },
  mounted() {
    ((this.id = this.$route.query.id),
      window.localStorage.getItem("menu") &&
        ((this.menuInfo = JSON.parse(window.localStorage.getItem("menu")).find(
          (t) => "signin" === t.id,
        )),
        (this.editPermit = this.menuInfo.edit_permit)),
      this.initBatchNoList(),
      (this.allowSmsRemind = "true" === localStorage.getItem("remind")),
      window.history &&
        window.history.pushState &&
        (history.pushState(null, null, document.URL),
        window.addEventListener("popstate", this.goBack, !1)));
  },
  methods: {
    CountRule(t) {
      ("signin" === t
        ? ((this.ruleTitle = "签到率"),
          (this.ruleMessage = "签到率计算规则：已签到次数/(应签到次数-已请假次数)"))
        : "leave" === t &&
          ((this.ruleTitle = "请假率"),
          (this.ruleMessage = "请假率计算规则：已请假次数/应签到次数")),
        (this.countRuleShow = !0));
    },
    getData() {
      this.$axiosAction("/api/teacher/signin/signin.api", { action: "querySignin", id: this.id })
        .then((t) => {
          0 === t.data.code ? ((this.record = t.data.result), this.changeBatchNo()) : this.goBack();
        })
        .catch((t) => {
          this.record = {};
        });
    },
    initBatchNoList() {
      ((this.id = this.$route.query.id),
        this.$axiosAction("/api/teacher/signin/signin.api", {
          action: "querySigninPeriodList",
          signin_id: this.id,
        })
          .then((t) => {
            if (0 === t.data.code)
              if (
                ((this.batchNoList = t.data.result),
                (this.getBatchnoList.length = this.batchNoList.length),
                this.batchNoList && this.batchNoList.length > 0)
              ) {
                if (
                  void 0 !== this.batchNoParam &&
                  "" !== this.batchNoParam &&
                  null !== this.batchNoParam
                ) {
                  this.batchNo = Number(this.batchNoParam);
                  const t = this.batchNoList.findIndex((t) => t.value === this.batchNo);
                  this.batchLabel = this.batchNoList[t].label;
                  for (let e = 0; e < this.batchNoList.length; e++)
                    this.getBatchnoList[e] = e === t;
                } else {
                  ((this.batchNo = this.batchNoList[0].value),
                    (this.batchLabel = this.batchNoList[0].label));
                  for (let t = 0; t < this.batchNoList.length; t++)
                    this.getBatchnoList[t] = 0 === t;
                }
                this.getData();
              } else ((this.batchNo = ""), (this.initList = []), (this.initDetail = {}));
            else this.goBack();
          })
          .catch((t) => {
            ((this.batchNoList = []), (this.initList = []), (this.initDetail = {}));
          }));
    },
    changeBatchNo() {
      let t = "";
      ((t = !0 === this.record.tea_show ? 1 : 0),
        (this.id = this.$route.query.id),
        this.$axiosAction("/api/teacher/signin/signin.api", {
          action: "querySigninResultStat",
          signin_id: this.id,
          batch_no: this.batchNo,
          teaShow: t,
        })
          .then((t) => {
            0 === t.data.code &&
              ((this.initDetail = t.data.result),
              (this.time = t.data.time),
              this.loadList(() => {}));
          })
          .catch((t) => {
            this.initDetail = {};
          }),
        (this.signinTime = !1));
    },
    changeSigninTime() {
      "单次" !== this.record.frequency_name && (this.signinTime = !0);
    },
    checkBatchno(t) {
      if (null != t) {
        ((this.batchNo = this.batchNoList[t].value), (this.batchLabel = this.batchNoList[t].label));
        for (let e = 0; e < this.getBatchnoList.length; e++)
          e !== t && (this.getBatchnoList[e] = !1);
        !1 === this.getBatchnoList[t]
          ? ((this.timeDialog = !0), (this.getBatchnoList[t] = !0))
          : this.changeBatchNo();
      }
    },
    chooseSigninTime() {
      ((this.timeDialog = !1), (this.signinTime = !0));
    },
    loadList(t) {
      if (
        (t && ((this.paging.pageNum = 0), (this.initList = [])),
        (this.paging.pageNum += 1),
        (this.isLoading = !0),
        !this.id)
      )
        return;
      let e = "";
      ((e = !0 === this.record.tea_show ? 1 : 0),
        this.$axiosAction(
          "/api/teacher/signin/signin.api",
          o()(
            o()({ action: "querySigninResultList" }, this.queryModel),
            {},
            {
              teaShow: e,
              batch_no: this.batchNo,
              signin_id: this.$route.query.id,
              pageSize: this.paging.pageSize,
              pageNum: this.paging.pageNum,
            },
          ),
        )
          .then((e) => {
            if (0 === e.data.code) {
              this.initList = this.initList.concat(e.data.result.list);
              const {
                pageSize: t,
                pageNum: i,
                rowCount: a,
                pageCount: s,
                startIndex: n,
                endIndex: r,
              } = o()({}, e.data.result);
              if (
                ((this.paging = {
                  pageSize: t,
                  pageNum: i,
                  rowCount: a,
                  pageCount: s,
                  startIndex: n,
                  endIndex: r,
                }),
                this.record.info_config)
              )
                for (let e = 0; e < this.record.info_config.length; e++)
                  for (const t of this.list)
                    t.info_result &&
                      (t["info" + e] = Object(c["c"])(
                        this.record.info_config[e],
                        t.info_result[e],
                      ));
            } else this.setDefaultList();
            (t && t(), (this.isLoading = !1));
          })
          .catch((e) => {
            (this.setDefaultList(), t && t(), (this.isLoading = !1));
          }));
    },
    setDefaultList() {
      ((this.initList = []), (this.paging = { pageSize: 30, pageNum: 0, pageCount: 0 }));
    },
    refresh(t) {
      this.loadList(t);
    },
    qrShowing(t) {
      ((this.qrShowingDialog = !0),
        "DQR" === this.record.signin_method
          ? (this.getDqrCode(t),
            (this.setInter = setInterval(() => {
              this.getDqrCode(t);
            }, 6e4)))
          : (this.getSqrCode(t),
            (this.setInter = setInterval(() => {
              this.getSqrCode(t);
            }, 31536e7))));
    },
    getSqrCode(t) {
      this.$axiosAction("/api/teacher/signin/signin.api", {
        action: "teaEncrytedQrCode",
        signin_method: this.record.signin_method,
        id: t,
        batch_no: this.batchNo,
        role_type: "T",
        login_name: JSON.parse(window.localStorage.getItem("userinfo")).login_name,
        name: JSON.parse(window.localStorage.getItem("userinfo")).name,
      }).then((t) => {
        this.downloadData.text = t.data.qrcode;
      });
    },
    getDqrCode(t) {
      this.$axiosAction("/api/teacher/signin/signin.api", {
        action: "teaEncrytedQrCode",
        signin_method: this.record.signin_method,
        id: t,
        batch_no: this.batchNo,
        role_type: "T",
        login_name: JSON.parse(window.localStorage.getItem("userinfo")).login_name,
        name: JSON.parse(window.localStorage.getItem("userinfo")).name,
      }).then((t) => {
        this.downloadData.text = t.data.qrcode;
      });
    },
    deleteSignin() {
      ((this.id = this.$route.query.id),
        this.$q
          .dialog({
            title: "确认删除",
            message: '该签到信息及其产生的<span class="text-red">数据将被清空。</span>',
            html: !0,
            persistent: !0,
            cancel: { label: "取消", outline: !0, color: "grey" },
            ok: { label: "删除", unelevated: !0, color: "negative" },
          })
          .onOk(() => {
            (this.$q.loading.show(),
              this.$axiosAction("/api/teacher/signin/signin.api", {
                action: "deleteSignin",
                id: this.id,
              })
                .then((t) => {
                  (0 === t.data.code && this.$router.push("/teacher/signin/index"),
                    this.$q.loading.hide());
                })
                .catch((t) => {
                  this.$q.loading.hide();
                }));
          }));
    },
    openShareDialog() {
      ((this.shareDialog = !0), (this.shareTarget = this.record.share_target));
    },
    updateShareTarget() {
      ((this.id = this.$route.query.id),
        this.$q.loading.show(),
        this.$axiosAction("/api/teacher/signin/signin.api", {
          action: "updateShareTarget",
          id: this.id,
          share_target:
            this.shareTarget && this.shareTarget.length > 0
              ? JSON.stringify(this.shareTarget)
              : null,
        })
          .then((t) => {
            (0 === t.data.code &&
              ((this.record.share_target = this.shareTarget), (this.shareDialog = !1)),
              this.$q.loading.hide());
          })
          .catch((t) => {
            this.$q.loading.hide();
          }));
    },
    copySignin() {
      ((this.id = this.$route.query.id),
        this.$q
          .dialog({
            title: "确认复制",
            message: "复制该签到信息设置数据并全新发布",
            html: !0,
            persistent: !0,
            cancel: { label: "取消", outline: !0, color: "grey" },
            ok: { label: "复制", unelevated: !0, color: "primary" },
          })
          .onOk(() => {
            this.$axiosAction("/api/teacher/signin/signin.api", {
              action: "querySigninForEditing",
              id: this.id,
            })
              .then((t) => {
                0 === t.data.code &&
                  this.$router.push({
                    name: "/teacher/signin/new",
                    params: { record: t.data.result },
                  });
              })
              .catch((t) => {});
          }));
    },
    getLoopFrequencyName(t) {
      if (t && 0 !== t.length) {
        const e = ["周一", "周二", "周三", "周四", "周五", "周六", "周日"].reduce(
          (e, i, a) => (t.indexOf(((a + 1) % 7).toString()) > -1 ? e.concat(i) : e),
          [],
        );
        return e.join("、");
      }
      return "";
    },
    exportList() {
      if (!this.id) return;
      let t = "";
      ((t = !0 === this.record.tea_show ? 1 : 0),
        (this.exportCompConfig = [
          "/api/teacher/signin/signin.api",
          "querySigninResultList",
          o()(
            o()({}, this.queryModel),
            {},
            { signin_id: this.$route.query.id, batch_no: this.batchNo, teaShow: t },
          ),
          { [this.record.title]: "result" },
          this.record.title,
          null,
          (t) =>
            t.reduce((t, e) => {
              const i = {
                签到结果:
                  "未签到" === e.signin_status
                    ? "未签到"
                    : "已请假" === e.signin_status
                      ? "已请假"
                      : "已签到",
                签到时间: e.signin_time,
              };
              return (
                "L" === this.record.signin_method
                  ? ((i.学号 = e.student_no),
                    (i.姓名 = e.name),
                    (i.性别 = e.sex_name),
                    (i.位置状态 = e.location_status),
                    (i.一级行政区 = e.province),
                    (i.二级行政区 = e.city),
                    (i.详细地址 = e.address),
                    (i[this.counsellorlabel] = e.counsellor),
                    (i.手机号 = e.mob),
                    (i.年级 = e.grade_name),
                    (i.院系 = e.dep_name),
                    (i.专业 = e.major_name),
                    (i.班级 = e.class_name))
                  : ((i.二维码来源 = e.qrcode_source),
                    (i.学号 = e.student_no),
                    (i.姓名 = e.name),
                    (i.性别 = e.sex_name),
                    (i[this.counsellorlabel] = e.counsellor),
                    (i.手机号 = e.mob),
                    (i.年级 = e.grade_name),
                    (i.院系 = e.dep_name),
                    (i.专业 = e.major_name),
                    (i.班级 = e.class_name)),
                t.concat(i)
              );
            }, []),
          1e3,
          5e3,
        ]));
    },
    exportSigninList() {
      this.exportCompConfig = [
        "/api/teacher/signin/signin.api",
        "exportCompleteSigninRate",
        {
          id: this.record.id,
          batch_no: this.batchNo,
          signinStatistics: this.model.signin_statistics,
        },
        { [`${this.record.title}的签到统计`]: "result" },
        `${this.record.title}的签到统计`,
        null,
        null,
        null,
        null,
      ];
    },
    changeStatus(t, e) {
      ((this.stuSigninId = t),
        (this.change = "已签到" === e ? "1" : "0"),
        (this.teacherChangeStatus = !0));
    },
    changeSigninStatus(t) {
      this.$axiosAction("/api/teacher/signin/signin.api", {
        action: "changeStudentSigninStatus",
        id: t,
        status: this.change,
        reason: this.texterea,
      }).then(() => {
        this.getData();
      });
    },
    checkModifiedLog(t) {
      ((this.checkModified = !0),
        this.$axiosAction("/api/teacher/signin/signin.api", { action: "queryModifiedLog", id: t })
          .then((t) => {
            0 === t.data.code && (this.modList = t.data.result);
          })
          .catch((t) => {
            this.modList = [];
          }));
    },
    checkStuPicture(t) {
      ((this.checkPicture = !0), (this.link = this.$appConf.base + t[0].link));
    },
    goBack() {
      null !== this.cId && void 0 !== this.cId
        ? this.$router.push(`/teacher/signin/statistics?id=${this.id}&compositeId=${this.cId}`)
        : this.$router.push("/teacher/signin/statistics?id=" + this.id);
    },
    open() {
      ((this.dialog = !0),
        (this.originalCond = Object.keys(this.queryModel).reduce(
          (t, e) => ((t[e] = this.queryModel[e]), t),
          {},
        )));
    },
    close() {
      ((this.dialog = !1),
        (this.queryModel = Object.keys(this.originalCond).reduce(
          (t, e) => ((t[e] = this.originalCond[e]), t),
          {},
        )));
    },
    getValue(t, e) {
      this.queryModel[t] === e ? (this.queryModel[t] = "") : (this.queryModel[t] = e);
    },
    getCondition() {
      ((this.condCount = Object.keys(this.queryModel).reduce(
        (t, e) => (this.queryModel[e] ? t + 1 : t),
        0,
      )),
        this.$refs.pageRefresh.trigger(),
        (this.dialog = !1));
    },
    downloadFile(t, e) {
      Object(N["c"])(t, e);
    },
    unsigninAlert() {
      this.$axiosAction("/api/teacher/signin/signin.api", {
        action: "warnUnSigninStudent",
        id: this.record.id,
        batch_no: this.batchNo,
      });
    },
    sendSigninSmsRemind() {
      this.$q.loading.show();
      const t = JSON.parse(window.localStorage.getItem("menu")).find((t) => "signin" === t.id);
      this.$axiosAction("/api/teacher/signin/signin.api", {
        action: "sendSmsRemind",
        id: this.record.id,
        title: this.record.title,
        batch_no: this.batchNo,
        menu_id: t.id,
        menu_name: t.title,
      }).then((t) => {
        this.$q.loading.hide();
      });
    },
    taskTargetDialogOpen() {
      ((this.taskTargetDialog = !0),
        (this.actionTarget = JSON.parse(JSON.stringify(this.record.task_target))));
    },
    taskTargetExcludDialogOpen() {
      ((this.taskTargetExcludDialog = !0),
        (this.noActionTarget = JSON.parse(JSON.stringify(this.record.task_target_excluding))));
    },
    updateActionTarget() {
      if (this.actionTarget.length <= 0) return this.$showErrorNotify("任务对象不能为空");
      (this.$q.loading.show(),
        this.$axiosAction("/api/teacher/signin/signin.api", {
          action: "updateActionTarget",
          id: this.$route.query.id,
          task_target:
            this.actionTarget && this.actionTarget.length > 0
              ? JSON.stringify(this.actionTarget)
              : null,
        })
          .then((t) => {
            (0 === t.data.code &&
              ((this.record.task_target = this.actionTarget), (this.taskTargetDialog = !1)),
              this.$q.loading.hide());
          })
          .catch((t) => {
            this.$q.loading.hide();
          }));
    },
    updateNoActionTarget() {
      (this.$q.loading.show(),
        this.$axiosAction("/api/teacher/signin/signin.api", {
          action: "updateNoActionTarget",
          id: this.$route.query.id,
          task_target_excluding:
            this.noActionTarget && this.noActionTarget.length > 0
              ? JSON.stringify(this.noActionTarget)
              : null,
        })
          .then((t) => {
            (0 === t.data.code &&
              ((this.record.task_target_excluding = this.noActionTarget),
              (this.taskTargetExcludDialog = !1)),
              this.$q.loading.hide());
          })
          .catch((t) => {
            this.$q.loading.hide();
          }));
    },
    detailDialogOpen() {
      (this.$q.loading.show(),
        this.$axiosAction("/api/teacher/signin/signin.api", {
          action: "querySigninAfter",
          id: this.id,
        })
          .then((t) => {
            (0 === t.data.code &&
              ((this.record.loop_frequency = t.data.result.loop_frequency),
              (this.record.attachment = t.data.result.attachment),
              (this.record.create_time = t.data.result.create_time),
              (this.record.detail = t.data.result.detail),
              (this.record.frequency = t.data.result.frequency),
              (this.record.info_config = t.data.result.info_config),
              (this.record.is_author = t.data.result.is_author),
              (this.record.loop_begin_date = t.data.result.loop_begin_date),
              (this.record.loop_begin_time = t.data.result.loop_begin_time),
              (this.record.loop_end_date = t.data.result.loop_end_date),
              (this.record.loop_end_time = t.data.result.loop_end_time),
              (this.record.share_target = t.data.result.share_target),
              (this.record.single_begin_time = t.data.result.single_begin_time),
              (this.record.single_end_time = t.data.result.single_end_time),
              (this.record.student_showing = t.data.result.student_showing),
              (this.record.task_target = t.data.result.task_target),
              (this.record.task_target_excluding = t.data.result.task_target_excluding),
              (this.record.teacher_showing = t.data.result.teacher_showing),
              (this.record.appointed_date = t.data.result.appointed_date),
              (this.detailDialog = !0)),
              this.$q.loading.hide());
          })
          .catch((t) => {
            this.$q.loading.hide();
          }));
    },
    updateShowOpen(t) {
      if (1 === t)
        return (
          (this.showStuDialog = !0),
          void (this.studentShowing = JSON.parse(JSON.stringify(this.record.student_showing)))
        );
      2 === t &&
        ((this.showTeaDialog = !0),
        (this.teacherShowing = JSON.parse(JSON.stringify(this.record.teacher_showing))));
    },
    updateShowTarget(t) {
      (this.$q.loading.show(),
        1 !== t
          ? 2 === t &&
            this.$axiosAction("/api/teacher/signin/signin.api", {
              action: "updateTeaShow",
              id: this.id,
              teacher_showing:
                this.teacherShowing && this.teacherShowing.length > 0
                  ? JSON.stringify(this.teacherShowing)
                  : null,
            })
              .then((t) => {
                (0 === t.data.code &&
                  ((this.record.teacher_showing = this.teacherShowing), (this.showTeaDialog = !1)),
                  this.$q.loading.hide());
              })
              .catch((t) => {
                this.$q.loading.hide();
              })
          : this.$axiosAction("/api/teacher/signin/signin.api", {
              action: "updateStuShow",
              id: this.id,
              student_showing:
                this.studentShowing && this.studentShowing.length > 0
                  ? JSON.stringify(this.studentShowing)
                  : null,
            })
              .then((t) => {
                (0 === t.data.code &&
                  ((this.record.student_showing = this.studentShowing), (this.showStuDialog = !1)),
                  this.$q.loading.hide());
              })
              .catch((t) => {
                this.$q.loading.hide();
              }));
    },
    exportStatisticsData() {
      this.exportCompConfig = [
        "/api/teacher/signin/signin.api",
        "exportSigninLocationStatistics",
        { signin_id: this.id, batch_no: this.batchNo },
        { 一级行政区分布: "province", 二级行政区分布: "city", 三级行政区分布: "district" },
        `${this.record.title}(签到位置分布数据)`,
        null,
        null,
        null,
        null,
      ];
    },
    showAnalysisMap() {
      (this.$q.loading.show(),
        this.$axiosAction("/api/teacher/signin/signin.api", {
          action: "querySigninLocationAnalysisMap",
          signin_id: this.id,
          batch_no: this.batchNo,
        }).then((t) => {
          (0 === t.data.code &&
            ((this.statisticsData = t.data.statisticsData),
            (this.clusterData = t.data.clusterData),
            (this.mapDialog = !0)),
            this.$q.loading.hide());
        }));
    },
    showPic(t, e) {
      ((this.bigPicUrl = t[0].link), (this.bigPicName = t[0].srcname), (this.showBigPic = !0));
    },
  },
};
export default componentOptions;
