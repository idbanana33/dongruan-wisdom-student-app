/**
 * Vue options object recovered from webpack module AST.
 * Source: assets/www/js/72.js -> module "d79d"
 * Route: /teacher/joblog/detail
 * Component: JoblogDetail
 * Not guaranteed standalone: imports/module aliases must be resolved from sibling .logic.js.
 */
const componentOptions = {
  name: "JoblogDetail",
  components: {
    NeuAssignTeacher: l["a"],
    NeuViewAssignedTeacher: n["a"],
    NeuWidget: c["a"],
    NeuExportData: d["a"],
  },
  data() {
    return {
      roleId: JSON.parse(window.localStorage.getItem("userinfo")).role_id,
      drawerRight: !1,
      tab: "DetailList",
      id: null,
      menuInfo: null,
      record: { allow_delete: 0, allow_look: 0 },
      detailDialog: !1,
      extendDialog: !1,
      endDate: null,
      shareDialog: !1,
      shareTarget: [],
      infoModel: [],
      infoConfig: [],
      viewMode: !0,
      result: { info_result: [] },
      list: [],
      paging: { pageSize: 30, pageNum: 0, pageCount: 0 },
      aCreate: !1,
      editDialog: !1,
      condition: [],
      condCount: 0,
      dialog: !1,
      originalCond: {},
      queryModel: { mutli_search: "" },
      isLoading: !1,
      fabPos: [30, 40],
      exportCompConfig: null,
      taskTargetDialog: !1,
      actionTarget: [],
    };
  },
  destroyed() {
    window.removeEventListener("popstate", this.goBack, !1);
  },
  mounted() {
    ((this.id = this.$route.query.id),
      window.localStorage.getItem("menu") &&
        (this.menuInfo = JSON.parse(window.localStorage.getItem("menu")).find(
          (e) => "joblog" === e.id,
        )),
      this.getDetail(),
      window.history &&
        window.history.pushState &&
        (history.pushState(null, null, document.URL),
        window.addEventListener("popstate", this.goBack, !1)),
      this.loadList(() => {}));
  },
  methods: {
    loadList(e) {
      (e && ((this.paging.pageNum = 0), (this.list = [])),
        (this.paging.pageNum += 1),
        (this.isLoading = !0),
        this.$axiosAction(
          "/api/teacher/joblog/joblog.api",
          r()(
            r()({ action: "queryJoblogResultList", joblog_id: this.id }, this.queryModel),
            {},
            { pageSize: this.paging.pageSize, pageNum: this.paging.pageNum },
          ),
        )
          .then((t) => {
            if (0 === t.data.code) {
              this.list = this.list.concat(t.data.result.list);
              const {
                pageSize: e,
                pageNum: a,
                rowCount: i,
                pageCount: s,
                startIndex: o,
                endIndex: l,
              } = r()({}, t.data.result);
              this.paging = {
                pageSize: e,
                pageNum: a,
                rowCount: i,
                pageCount: s,
                startIndex: o,
                endIndex: l,
              };
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
    refresh(e) {
      this.loadList(e);
    },
    goBack() {
      this.$router.push("/teacher/joblog/index");
    },
    terminateJoblog() {
      this.$q
        .dialog({
          title: "确认提前结束",
          message: "提前结束后教师将不能再填写该模板工作日志。",
          html: !0,
          persistent: !0,
          cancel: { label: "取消", outline: !0, color: "grey" },
          ok: { label: "提前结束", unelevated: !0, color: "primary" },
        })
        .onOk(() => {
          (this.$q.loading.show(),
            this.$axiosAction("/api/teacher/joblog/joblog.api", {
              action: "terminateJoblog",
              id: this.id,
            })
              .then((e) => {
                (0 === e.data.code && this.$router.push("/teacher/joblog/index"),
                  this.$q.loading.hide());
              })
              .catch((e) => {
                this.$q.loading.hide();
              }));
        });
    },
    openExtendDialog() {
      ((this.extendDialog = !0), (this.endDate = this.record.end_date));
    },
    copyApply() {
      this.$q
        .dialog({
          title: "确认复制",
          message: "复制该模板设置数据并全新发布",
          html: !0,
          persistent: !0,
          cancel: { label: "取消", outline: !0, color: "grey" },
          ok: { label: "复制", unelevated: !0, color: "primary" },
        })
        .onOk(() => {
          this.$axiosAction("/api/teacher/joblog/joblog.api", {
            action: "queryJoblogForEditing",
            id: this.id,
          })
            .then((e) => {
              0 === e.data.code &&
                this.$router.push({
                  name: "/teacher/joblog/new",
                  params: { record: e.data.result },
                });
            })
            .catch((e) => {});
        });
    },
    extendJoblog() {
      this.$axiosAction("/api/teacher/joblog/joblog.api", {
        action: 1 === this.record.status ? "extendJoblog" : "restartJoblog",
        id: this.id,
        end_date: this.endDate,
      })
        .then((e) => {
          0 === e.data.code &&
            (1 === this.record.status
              ? ((this.record.end_date = this.endDate), (this.extendDialog = !1))
              : this.$router.push("/teacher/joblog/index"));
        })
        .catch((e) => {
          this.$q.loading.hide();
        });
    },
    deleteJoblog() {
      this.$q
        .dialog({
          title: "确认删除",
          message: "该工作日志模板及各位老师已填写的数据将被清空。</span>",
          html: !0,
          persistent: !0,
          cancel: { label: "取消", outline: !0, color: "grey" },
          ok: { label: "删除", unelevated: !0, color: "negative" },
        })
        .onOk(() => {
          (this.$q.loading.show(),
            this.$axiosAction("/api/teacher/joblog/joblog.api", {
              action: "deleteJoblog",
              id: this.id,
              roleId: this.roleId,
              teacher_no: this.record.teacher_no,
              title: this.record.title,
            })
              .then((e) => {
                (0 === e.data.code && this.$router.push("/teacher/joblog/index"),
                  this.$q.loading.hide());
              })
              .catch((e) => {
                this.$q.loading.hide();
              }));
        });
    },
    submitJoblogResult() {
      const e = r()({}, this.result);
      ((e.info_result = JSON.stringify(e.info_result)),
        this.$axiosAction(
          "/api/teacher/joblog/joblog.api",
          r()({ action: e.id ? "updateJoblogResult" : "insertJoblogResult" }, e),
        )
          .then((e) => {
            0 === e.data.code && ((this.editDialog = !1), this.loadList(() => {}));
          })
          .catch((e) => {}));
    },
    exportList() {
      if (!this.id) return;
      const e = this.condition.reduce((e, t) => ((e[t.name] = t.value), e), {});
      ((e.joblog_id = this.id),
        (this.exportCompConfig = [
          "/api/teacher/joblog/joblog.api",
          "queryJoblogResultList",
          e,
          { [this.record.title]: "result" },
          this.record.title,
          null,
          (e) =>
            e.reduce((e, t) => {
              const a = {
                教工号: t.teacher_no,
                姓名: t.teacher_name,
                性别: t.sex_name,
                部门院系: t.dep_name,
                提交时间: t.submit_time,
              };
              if (this.infoConfig)
                for (let i = 0; i < this.infoConfig.length; i++)
                  a[(i + 1).toString() + "." + this.infoConfig[i].label] = t.info_result
                    ? Object(g["c"])(this.infoConfig[i], t.info_result[i])
                    : null;
              return e.concat(a);
            }, []),
          1e3,
          5e3,
        ]));
    },
    openShareDialog() {
      ((this.shareDialog = !0), (this.shareTarget = this.record.share_target));
    },
    updateShareTarget() {
      (this.$q.loading.show(),
        this.$axiosAction("/api/teacher/joblog/joblog.api", {
          action: "updateShareTarget",
          id: this.id,
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
    getCondition() {
      ((this.condCount = Object.keys(this.queryModel).reduce(
        (e, t) => (this.queryModel[t] ? e + 1 : e),
        0,
      )),
        this.$refs.pageRefresh.trigger(),
        (this.dialog = !1));
    },
    goDetail(e, t, a, i) {
      if (1 === i && "A" === this.roleId)
        this.$q.dialog({
          title: "无法查看",
          message: "该工作日志已设置管理员无法查看详情。",
          html: !0,
          persistent: !0,
          ok: { label: "确定", outline: !0, color: "primary" },
        });
      else {
        let i = "";
        ((i = t ? "d" : "u"),
          e
            ? (this.result = { info_result: this.list.find((t) => t.id === e).info_result, id: e })
            : ((i = "n"), (this.result = { info_result: [], joblog_id: this.id })));
        const s = this.aCreate && 1 === this.record.allow_delete && "n" !== i;
        ((this.viewMode = t),
          window.localStorage.setItem("joblog_result_detail", JSON.stringify(this.result)),
          window.localStorage.setItem("joblog_infoConfig", JSON.stringify(this.infoConfig)),
          this.$router.push(
            "/teacher/joblog/detailResult?type=" +
              i +
              "&jobId=" +
              this.id +
              "&joblogRstId=" +
              e +
              "&viewMode=" +
              this.viewMode +
              "&teacher_no=" +
              a +
              "&getAllowDelete=" +
              s,
          ));
      }
    },
    moveFab(e) {
      ((this.draggingFab = !0 !== e.isFirst && !0 !== e.isFinal),
        (this.fabPos = [this.fabPos[0] - e.delta.x, this.fabPos[1] - e.delta.y]));
    },
    taskTargetDialogOpen() {
      ((this.taskTargetDialog = !0),
        (this.actionTarget = JSON.parse(JSON.stringify(this.record.task_target))));
    },
    updateActionTarget() {
      (this.$q.loading.show(),
        this.$axiosAction("/api/teacher/joblog/joblog.api", {
          action: "updateActionTarget",
          id: this.id,
          task_target:
            this.actionTarget && this.actionTarget.length > 0
              ? JSON.stringify(this.actionTarget)
              : null,
        })
          .then((e) => {
            (0 === e.data.code &&
              ((this.record.task_target = this.actionTarget), (this.taskTargetDialog = !1)),
              this.$q.loading.hide());
          })
          .catch((e) => {
            this.$q.loading.hide();
          }));
    },
    changeAllowDelete() {
      this.$axiosAction("/api/teacher/joblog/joblog.api", {
        action: "updateAllowDelete",
        id: this.$route.query.id,
        allow_delete: this.record.allow_delete,
      })
        .then((e) => {
          0 === e.data.code ? this.getDetail() : this.goBack();
        })
        .catch((e) => {
          this.record = {};
        });
    },
    changeAllowLook() {
      this.$axiosAction("/api/teacher/joblog/joblog.api", {
        action: "updateAllowLook",
        id: this.$route.query.id,
        allow_look: this.record.allow_look,
      })
        .then((e) => {
          0 === e.data.code ? this.getDetail() : this.goBack();
        })
        .catch((e) => {
          this.record = {};
        });
    },
    getDetail() {
      this.$axiosAction("/api/teacher/joblog/joblog.api", {
        action: "queryJoblog",
        id: this.id,
        roleId: this.roleId,
      })
        .then((e) => {
          0 === e.data.code &&
            ("" === e.data.result &&
              (this.$showErrorNotify("该条信息不存在或您权限不足"), this.goBack()),
            (this.infoConfig = e.data.result.info_config),
            (this.record = e.data.result),
            (this.aCreate = this.record.allow_create));
        })
        .catch((e) => {
          this.record = {};
        });
    },
  },
};
export default componentOptions;
