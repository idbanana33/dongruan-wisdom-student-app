/**
 * Vue options object recovered from webpack module AST.
 * Source: assets/www/js/64.js -> module "6154"
 * Route: /teacher/apply/detail
 * Component: NeuApplyStatistics
 * Not guaranteed standalone: imports/module aliases must be resolved from sibling .logic.js.
 */
const componentOptions = {
  components: {
    NeuWidget: n["a"],
    NeuManageQa: c["a"],
    NeuApplyStatistics: w,
    NeuExportData: S["a"],
    NeuCollectSearch: N["a"],
  },
  name: "ApplyDetail",
  data() {
    return {
      applyId: this.$route.query.id,
      batchNoParam: this.$route.query.batch_no,
      applyType: this.$route.query.apply_type,
      uploader: window.localStorage.server + this.$appConf.fileUploader,
      tab: "progress",
      record: {},
      records: {},
      batchNoList: [],
      condition: [],
      drawerRight: !1,
      list: [],
      paging: { pageSize: 30, pageNum: 0, pageCount: 0 },
      infoResult: [],
      dialog: !1,
      queryModel: { apply_status: "", mutli_search: "" },
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
      counsellorlabel: localStorage.getItem("counsellorlabel"),
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
      return "A" === this.applyType
        ? "申请"
        : "C" === this.applyType
          ? "填写"
          : "S" === this.applyType
            ? "报名"
            : "";
    },
    checkBatchNo() {
      let t = "";
      return ((t = this.batchNo ? 1 : 0), t);
    },
    menuInfo() {
      return "A" === this.applyType
        ? JSON.parse(window.localStorage.getItem("menu")).find((t) => "apply" === t.id)
        : "S" === this.applyType
          ? JSON.parse(window.localStorage.getItem("menu")).find((t) => "signup" === t.id)
          : "C" === this.applyType
            ? JSON.parse(window.localStorage.getItem("menu")).find((t) => "collect" === t.id)
            : {};
    },
    menuId() {
      return "A" === this.applyType
        ? "apply"
        : "S" === this.applyType
          ? "signup"
          : "C" === this.applyType
            ? "collect"
            : {};
    },
  },
  destroyed() {
    window.removeEventListener("popstate", this.goBack, !1);
  },
  watch: {},
  mounted() {
    (this.initBatchNoList(),
      this.$axiosAction("/api/teacher/apply/apply.api", {
        action: "queryApply",
        id: this.applyId,
        apply_type: this.applyType,
      })
        .then((t) => {
          0 === t.data.code
            ? (this.record = t.data.result)
            : 2002 === t.data.code &&
              this.$router.push(`/teacher/apply/index?apply_type=${this.applyType}`);
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
      null !== this.cId && void 0 !== this.cId
        ? this.$router.push(
            `/teacher/apply/statistics?apply_type=${this.applyType}&id=${this.applyId}&compositeId=${this.cId}`,
          )
        : this.$router.push(
            `/teacher/apply/statistics?apply_type=${this.applyType}&id=${this.applyId}`,
          );
    },
    initBatchNoList() {
      this.$axiosAction("/api/teacher/apply/apply.api", {
        action: "queryApplyPeriodList",
        apply_id: this.applyId,
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
      (this.$axiosAction("/api/teacher/apply/apply.api", {
        action: "queryApplyResultStat",
        apply_id: this.applyId,
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
      this.applyId && this.batchNo
        ? (t && ((this.paging.pageNum = 0), (this.list = [])),
          (this.paging.pageNum += 1),
          (this.isLoading = !0),
          this.$axiosAction(
            "/api/teacher/apply/apply.api",
            l()(
              l()(
                { action: "queryApplyResultList", apply_id: this.applyId, batch_no: this.batchNo },
                this.queryModel,
              ),
              {},
              {
                pageSize: this.paging.pageSize,
                pageNum: this.paging.pageNum,
                menu_id: this.menuId,
                configsList: this.configsRessultList,
              },
            ),
          )
            .then((e) => {
              if (0 === e.data.code) {
                if (this.records.info_config)
                  for (let l = 0; l < this.records.info_config.length; l++)
                    for (const t of e.data.result.list)
                      t.info_result &&
                        (t["info" + l] = Object(r["c"])(
                          this.records.info_config[l],
                          t.info_result[l],
                        ));
                ((this.list = this.list.concat(e.data.result.list)),
                  (this.listLength = this.list.length));
                const {
                  pageSize: t,
                  pageNum: a,
                  rowCount: i,
                  pageCount: s,
                  startIndex: o,
                  endIndex: n,
                } = l()({}, e.data.result);
                this.paging = {
                  pageSize: t,
                  pageNum: a,
                  rowCount: i,
                  pageCount: s,
                  startIndex: o,
                  endIndex: n,
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
      this.applyId &&
        (this.exportCompConfig = [
          "/api/teacher/apply/apply.api",
          "exportApplyResultList",
          l()(
            l()({ apply_id: this.applyId, batch_no: this.batchNo }, this.queryModel),
            {},
            { menu_id: this.menuId, configsList: this.configsRessultList },
          ),
          { [this.record.title]: "result" },
          this.record.title,
          null,
          (t) =>
            t.reduce((t, e) => {
              const a = /^(-)?\d+(\.\d+)?$/,
                i = {
                  进度:
                    1 === e.apply_status
                      ? `已${this.applyShortTitle}`
                      : `未${this.applyShortTitle}`,
                  学号: e.student_no,
                  姓名: e.student_name,
                  性别: e.sex_name,
                  [this.counsellorlabel]: e.counsellor,
                  手机号: e.mob,
                  年级: e.grade_name,
                  院系: e.dep_name,
                  专业: e.major_name,
                  班级: e.class_name,
                };
              if (
                (1 === this.record.need_location && (i.提交时的定位信息 = e.address),
                this.record.info_config)
              )
                for (let s = 0; s < this.record.info_config.length; s++)
                  i[
                    `${s + 1}.${this.record.info_config[s].label}${a.test(this.record.info_config[s].label) ? " " : ""}`
                  ] = e.info_result
                    ? Object(r["c"])(this.record.info_config[s], e.info_result[s])
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
      this.queryModel.apply_status === t
        ? (this.queryModel.apply_status = "")
        : (this.queryModel.apply_status = t);
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
        (this.writeStatus = this.list.find((e) => e.id === t).apply_status),
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
      this.$axiosAction("/api/teacher/apply/apply.api", {
        action: "insertAgain",
        id: this.applyId,
        batch_no: this.batchNo,
        apply_type: this.applyType,
      }).then((t) => {});
    },
    sendSmsRemind() {
      (this.$q.loading.show(),
        this.$axiosAction("/api/teacher/apply/apply.api", {
          action: "sendSmsRemind",
          id: this.applyId,
          title: this.record.title,
          batch_no: this.batchNo,
          apply_type: this.applyType,
          menu_id: this.menuInfo.id,
          menu_name: this.menuInfo.title,
        }).then((t) => {
          this.$q.loading.hide();
        }));
    },
    exportLists() {
      this.applyId &&
        (this.exportCompConfig = [
          "/api/teacher/apply/apply.api",
          "getNumList",
          {
            apply_id: this.applyId,
            batch_no: this.batchNo,
            applyStatistics: this.model.applyStatistics,
            apply_type: this.applyType,
          },
          { [`${this.record.title}${this.applyShortTitle}的统计`]: "result" },
          `${this.record.title}${this.applyShortTitle}的统计`,
          null,
          (t) => ({
            [`${this.record.title}${this.applyShortTitle}的统计`]: t[
              `${this.record.title}${this.applyShortTitle}的统计`
            ].reduce(
              (t, e) =>
                "1" === this.model.applyStatistics
                  ? t.concat({
                      班级名称: e.apply_class,
                      ["已" + this.applyShortTitle + "人数"]: e.apply_count,
                      ["应" + this.applyShortTitle + "人数"]: e.apply_total,
                      ["未" + this.applyShortTitle + "人数"]: e.unapply_total,
                    })
                  : "2" === this.model.applyStatistics
                    ? t.concat({
                        专业名称: e.apply_major,
                        ["已" + this.applyShortTitle + "人数"]: e.apply_count,
                        ["应" + this.applyShortTitle + "人数"]: e.apply_total,
                        ["未" + this.applyShortTitle + "人数"]: e.unapply_total,
                      })
                    : "3" === this.model.applyStatistics
                      ? t.concat({
                          院系名称: e.apply_dep,
                          ["已" + this.applyShortTitle + "人数"]: e.apply_count,
                          ["应" + this.applyShortTitle + "人数"]: e.apply_total,
                          ["未" + this.applyShortTitle + "人数"]: e.unapply_total,
                        })
                      : "4" === this.model.applyStatistics
                        ? t.concat({
                            [this.counsellorlabel + "姓名"]: e.name + "(" + e.tea_no + ")",
                            ["已" + this.applyShortTitle + "人数"]: e.apply_count,
                            ["应" + this.applyShortTitle + "人数"]: e.apply_total,
                            ["未" + this.applyShortTitle + "人数"]: e.unapply_total,
                          })
                        : t.concat(e),
              [],
            ),
          }),
          null,
          null,
        ]);
    },
    changeDetail(t) {
      (0 !== t && (this.batchNoDetail = this.batchNoDetail + t),
        this.$q.loading.show(),
        this.$axiosAction("/api/teacher/apply/apply.api", {
          action: "getDetaiInfoResult",
          batch_no: this.batchNoDetail,
          apply_id: this.applyId,
          student_no: this.detailStudentNo,
        }).then((t) => {
          (0 === t.data.code &&
            (null === t.data.result.info_result
              ? ((this.infoResult = []), (this.writeStatus = 0))
              : ((this.infoResult = t.data.result.info_result),
                (this.writeStatus = t.data.result.apply_status))),
            this.$q.loading.hide());
        }));
    },
    returnBefor(t) {
      this.$q
        .dialog({
          title: "确认撤回",
          message: `该学生${this.applyShortTitle}将被撤回。</span>`,
          html: !0,
          persistent: !0,
          cancel: { label: "取消", outline: !0, color: "grey" },
          ok: { label: "撤回", unelevated: !0, color: "negative" },
        })
        .onOk(() => {
          (this.$q.loading.show(),
            this.$axiosAction("/api/teacher/apply/apply.api", {
              action: "getBackBefor",
              batch_no: this.batchNo,
              apply_id: this.applyId,
              id: t,
            }).then((t) => {
              (0 === t.data.code && this.changeBatchNo(), this.$q.loading.hide());
            }));
        });
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
