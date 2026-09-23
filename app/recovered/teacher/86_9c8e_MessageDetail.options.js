/**
 * Vue options object recovered from webpack module AST.
 * Source: assets/www/js/86.js -> module "9c8e"
 * Route: /teacher/message/detail
 * Component: MessageDetail
 * Not guaranteed standalone: imports/module aliases must be resolved from sibling .logic.js.
 */
const componentOptions = {
  components: { NeuWidget: l["a"], NeuExportData: c["a"], NeuCollectSearch: h["a"] },
  name: "MessageDetail",
  data() {
    return {
      messageId: this.$route.query.id,
      batchNoParam: this.$route.query.batch_no,
      applyType: this.$route.query.apply_type,
      uploader: window.localStorage.server + this.$appConf.fileUploader,
      record: {},
      records: {},
      batchNoList: [],
      condition: [],
      drawerRight: !1,
      list: [],
      paging: { pageSize: 30, pageNum: 0, pageCount: 0 },
      infoResult: [],
      dialog: !1,
      queryModel: { message_status: "", mutli_search: "" },
      condCount: 0,
      batchNo: "",
      originalCond: {},
      infoResultDialog: !1,
      maximizedToggle: !0,
      isLoading: !1,
      batchLabel: "",
      applyTime: !1,
      getBatchnoList: [],
      timeDialog: !1,
      time: "",
      model: { applyStatistics: "1" },
      roleId: JSON.parse(window.localStorage.getItem("userinfo")).role_id,
      batchNoDetail: null,
      writeStatus: null,
      detailStudentNo: "",
      allowSmsRemind: !1,
      exportCompConfig: null,
      cId: this.$route.query.compositeId,
      configsRessultList: [],
      searchDialog: !1,
      infoConfigList: [],
      configSet: [],
      saveFormInit: [],
    };
  },
  computed: {
    applyShortTitle() {
      return "填写";
    },
    checkBatchNo() {
      let t = "";
      return ((t = this.batchNo ? 1 : 0), t);
    },
    menuInfo() {
      return JSON.parse(window.localStorage.getItem("menu")).find((t) => "message" === t.id);
    },
  },
  destroyed() {
    window.removeEventListener("popstate", this.goBack, !1);
  },
  watch: {},
  mounted() {
    (this.initBatchNoList(),
      this.$axiosAction("/api/teacher/message/message.api", {
        action: "queryMessage",
        id: this.messageId,
      })
        .then((t) => {
          0 === t.data.code
            ? (this.record = t.data.result)
            : 2002 === t.data.code && this.$router.push("/teacher/message/messageIndex");
        })
        .catch((t) => {
          this.record = {};
        }),
      (this.allowSmsRemind = "true" === localStorage.getItem("remind")),
      window.history &&
        window.history.pushState &&
        (history.pushState(null, null, document.URL),
        window.addEventListener("popstate", this.goBack, !1)));
  },
  methods: {
    goBack() {
      this.$router.push(`/teacher/message/statistics?id=${this.messageId}`);
    },
    initBatchNoList() {
      this.$axiosAction("/api/teacher/message/message.api", {
        action: "queryMessagePeriodList",
        message_id: this.messageId,
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
                for (let e = 0; e < this.batchNoList.length; e++) this.getBatchnoList[e] = e === t;
              } else {
                ((this.batchNo = this.batchNoList[0].value),
                  (this.batchLabel = this.batchNoList[0].label));
                for (let t = 0; t < this.batchNoList.length; t++) this.getBatchnoList[t] = 0 === t;
              }
              this.changeBatchNo();
            } else ((this.batchNo = ""), (this.list = []), (this.records = {}));
        })
        .catch((t) => {
          ((this.batchNoList = []), (this.list = []), (this.records = {}));
        });
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
    changeBatchNo() {
      (this.$axiosAction("/api/teacher/message/message.api", {
        action: "queryMessageResultStat",
        message_id: this.messageId,
        batch_no: this.batchNo,
      })
        .then((t) => {
          if (0 === t.data.code) {
            if (
              ((this.records = t.data.result),
              (this.configSet = JSON.parse(
                JSON.stringify(this.record.info_config ? this.record.info_config : []),
              )),
              this.configSet.length > 0)
            )
              for (const t in this.configSet) this.configSet[t].index = Number(t);
            ((this.time = t.data.time), this.loadList(() => {}));
          }
        })
        .catch((t) => {
          this.records = {};
        }),
        (this.applyTime = !1));
    },
    loadList(t) {
      this.messageId && this.batchNo
        ? (t && ((this.paging.pageNum = 0), (this.list = [])),
          (this.paging.pageNum += 1),
          (this.isLoading = !0),
          this.$axiosAction(
            "/api/teacher/message/message.api",
            n()(
              n()(
                {
                  action: "queryMessageResultList",
                  message_id: this.messageId,
                  batch_no: this.batchNo,
                },
                this.queryModel,
              ),
              {},
              {
                pageSize: this.paging.pageSize,
                pageNum: this.paging.pageNum,
                configsList: this.configsRessultList,
              },
            ),
          )
            .then((e) => {
              if (0 === e.data.code) {
                if (this.records.info_config)
                  for (let n = 0; n < this.records.info_config.length; n++)
                    for (const t of e.data.result.list)
                      t.info_result &&
                        (t["info" + n] = Object(r["c"])(
                          this.records.info_config[n],
                          t.info_result[n],
                        ));
                ((this.list = this.list.concat(e.data.result.list)),
                  (this.listLength = this.list.length));
                const {
                  pageSize: t,
                  pageNum: s,
                  rowCount: i,
                  pageCount: a,
                  startIndex: o,
                  endIndex: l,
                } = n()({}, e.data.result);
                this.paging = {
                  pageSize: t,
                  pageNum: s,
                  rowCount: i,
                  pageCount: a,
                  startIndex: o,
                  endIndex: l,
                };
              } else this.setDefaultList();
              (t && t(), (this.isLoading = !1), (this.searchDialog = !1));
            })
            .catch((e) => {
              (this.setDefaultList(), t && t(), (this.listLength = 0), (this.isLoading = !1));
            }))
        : t && t();
    },
    setDefaultList() {
      ((this.list = []), (this.paging = { pageSize: 30, pageNum: 0, pageCount: 0 }));
    },
    refresh(t) {
      this.loadList(t);
    },
    exportList() {
      this.messageId &&
        (this.exportCompConfig = [
          "/api/teacher/message/message.api",
          "exportMessageResultList",
          n()(
            n()({ message_id: this.messageId, batch_no: this.batchNo }, this.queryModel),
            {},
            { configsList: this.configsRessultList },
          ),
          { [this.record.title]: "result" },
          this.record.title,
          null,
          (t) =>
            t.reduce((t, e) => {
              const s = /^(-)?\d+(\.\d+)?$/,
                i = {
                  进度:
                    1 === e.message_status
                      ? `已${this.applyShortTitle}`
                      : `未${this.applyShortTitle}`,
                  教工号: e.teacher_no,
                  姓名: e.teacher_name,
                  性别: e.sex_name,
                  手机号: e.mob,
                  院系: e.dep_name,
                  定位信息: e.address,
                };
              if (
                (1 === this.record.need_location && (i.提交时的定位信息 = e.address),
                this.record.info_config)
              )
                for (let a = 0; a < this.record.info_config.length; a++)
                  i[
                    `${a + 1}.${this.record.info_config[a].label}${s.test(this.record.info_config[a].label) ? " " : ""}`
                  ] = e.info_result
                    ? Object(r["c"])(this.record.info_config[a], e.info_result[a])
                    : null;
              return t.concat(i);
            }, []),
          1e3,
          5e3,
        ]);
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
    getValue(t) {
      this.queryModel.message_status === t
        ? (this.queryModel.message_status = "")
        : (this.queryModel.message_status = t);
    },
    getCondition() {
      ((this.condCount = Object.keys(this.queryModel).reduce(
        (t, e) => (this.queryModel[e] ? t + 1 : t),
        0,
      )),
        this.loadList(() => {}),
        (this.dialog = !1));
    },
    showInfoResult(t) {
      ((this.batchNoDetail = this.batchNo),
        (this.infoResultDialog = !0),
        (this.detailStudentNo = this.list.find((e) => e.id === t).student_no),
        (this.writeStatus = this.list.find((e) => e.id === t).message_status),
        (this.infoResult = this.list.find((e) => e.id === t).info_result),
        null === this.infoResult && (this.infoResult = []));
    },
    changeApplyTime() {
      "单次" !== this.record.frequency_name && (this.applyTime = !0);
    },
    chooseSigninTime() {
      ((this.timeDialog = !1), (this.signinTime = !0));
    },
    unApplyAlert() {
      this.$axiosAction("/api/teacher/message/message.api", {
        action: "insertAgain",
        id: this.messageId,
        batch_no: this.batchNo,
      }).then((t) => {});
    },
    sendSmsRemind() {
      (this.$q.loading.show(),
        this.$axiosAction("/api/teacher/message/message.api", {
          action: "sendSmsRemind",
          id: this.messageId,
          title: this.record.title,
          batch_no: this.batchNo,
          menu_id: this.menuInfo.id,
          menu_name: this.menuInfo.title,
        }).then((t) => {
          this.$q.loading.hide();
        }));
    },
    changeDetail(t) {
      (0 !== t && (this.batchNoDetail = this.batchNoDetail + t),
        this.$q.loading.show(),
        this.$axiosAction("/api/teacher/message/message.api", {
          action: "getDetaiInfoResult",
          batch_no: this.batchNoDetail,
          message_id: this.messageId,
          student_no: this.detailStudentNo,
        }).then((t) => {
          (0 === t.data.code &&
            (null === t.data.result.info_result
              ? ((this.infoResult = []), (this.writeStatus = 0))
              : ((this.infoResult = t.data.result.info_result),
                (this.writeStatus = t.data.result.message_status))),
            this.$q.loading.hide());
        }));
    },
    showConfigSearch() {
      if (this.saveFormInit.length > 0) {
        this.infoConfigList = [];
        for (const t in this.configSet)
          this.saveFormInit.findIndex(
            (e) => e.label === this.configSet[t].label && e.index === this.configSet[t].index,
          ) > -1 && this.infoConfigList.push(this.configSet[t]);
      }
      this.searchDialog = !0;
    },
    searchInfo(t) {
      ((this.configsRessultList = JSON.parse(JSON.stringify(t))), this.loadList(() => {}));
    },
    resetInfoResultList() {
      ((this.infoConfigList = []),
        (this.configsRessultList = []),
        (this.saveFormInit = []),
        this.changeBatchNo());
    },
    saveForm(t) {
      this.saveFormInit = t;
    },
  },
};
export default componentOptions;
