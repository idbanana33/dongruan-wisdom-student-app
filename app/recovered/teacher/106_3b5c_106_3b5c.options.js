/**
 * Vue options object recovered from webpack module AST.
 * Source: assets/www/js/106.js -> module "3b5c"
 * Route: /teacher/sanitation/detail
 * Component: 106_3b5c
 * Not guaranteed standalone: imports/module aliases must be resolved from sibling .logic.js.
 */
const componentOptions = {
  components: {
    NeuAssignTeacher: r["a"],
    NeuViewAssignedTeacher: l["a"],
    NeuWidget: c["a"],
    NeuExportData: h["a"],
  },
  name: "SanitationDetail",
  filters: {
    ellipsis(t) {
      return t ? (t.length > 9 ? t.slice(0, 9) + "..." : t) : "";
    },
  },
  data() {
    return {
      roleId: JSON.parse(window.localStorage.getItem("userinfo")).role_id,
      drawerRight: !1,
      id: null,
      menuInfo: null,
      sanitation: {},
      stu_info_config_status: !1,
      detailDialog: !1,
      extendDialog: !1,
      endDate: null,
      shareDialog: !1,
      shareTarget: [],
      infoModel: [],
      stuInfoModel: [],
      list: [],
      paging: { pageSize: 30, pageNum: 0, pageCount: 0 },
      show_createNew: !1,
      condition: [],
      condCount: 0,
      dialog: !1,
      originalCond: {},
      queryModel: { status: "", mutli_search: "" },
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
      void 0 === this.id && (this.id = window.localStorage.getItem("sanitation_id")),
      window.localStorage.getItem("menu") &&
        (this.menuInfo = JSON.parse(window.localStorage.getItem("menu")).find(
          (t) => "sanitation" === t.id,
        )),
      this.$axiosAction("/api/teacher/sanitation/sanitation.api", {
        action: "querySanitation",
        id: this.id,
        roleId: this.roleId,
      })
        .then((t) => {
          0 === t.data.code &&
            ("" === t.data.result &&
              (this.$showErrorNotify("该条信息不存在或您权限不足"), this.goBack()),
            (this.sanitation = t.data.result),
            (this.show_createNew = t.data.result.allow_create),
            0 !== this.sanitation.stu_info_config.length && (this.stu_info_config_status = !0));
        })
        .catch((t) => {
          this.sanitation = {};
        }),
      window.history &&
        window.history.pushState &&
        (history.pushState(null, null, document.URL),
        window.addEventListener("popstate", this.goBack, !1)),
      this.loadList(() => {}));
  },
  methods: {
    loadList(t) {
      (t && ((this.paging.pageNum = 0), (this.list = [])),
        (this.paging.pageNum += 1),
        (this.isLoading = !0),
        this.$axiosAction(
          "/api/teacher/sanitation/sanitation.api",
          o()(
            o()({ action: "querySanitationResultList" }, this.queryModel),
            {},
            {
              sanitation_id: this.id,
              pageSize: this.paging.pageSize,
              pageNum: this.paging.pageNum,
            },
          ),
        )
          .then((e) => {
            if (0 === e.data.code) {
              this.list = this.list.concat(e.data.result.list);
              const {
                pageSize: t,
                pageNum: a,
                rowCount: i,
                pageCount: s,
                startIndex: n,
                endIndex: r,
              } = o()({}, e.data.result);
              this.paging = {
                pageSize: t,
                pageNum: a,
                rowCount: i,
                pageCount: s,
                startIndex: n,
                endIndex: r,
              };
            } else this.setDefaultList();
            (t && t(), (this.isLoading = !1));
          })
          .catch((e) => {
            (this.setDefaultList(), t && t(), (this.isLoading = !1));
          }));
    },
    setDefaultList() {
      ((this.list = []), (this.paging = { pageSize: 30, pageNum: 0, pageCount: 0 }));
    },
    refresh(t) {
      this.loadList(t);
    },
    goBack() {
      this.$router.push("/teacher/sanitation/index");
    },
    terminateSanitation() {
      this.$q
        .dialog({
          title: "确认提前结束",
          message: "提前结束后教师将不能再填写寝室结果。",
          html: !0,
          persistent: !0,
          cancel: { label: "取消", outline: !0, color: "grey" },
          ok: { label: "提前结束", unelevated: !0, color: "primary" },
        })
        .onOk(() => {
          (this.$q.loading.show(),
            this.$axiosAction("/api/teacher/sanitation/sanitation.api", {
              action: "terminateSanitation",
              id: this.id,
            })
              .then((t) => {
                (0 === t.data.code && this.$router.push("/teacher/Sanitation/index"),
                  this.$q.loading.hide());
              })
              .catch((t) => {
                this.$q.loading.hide();
              }));
        });
    },
    openExtendDialog() {
      ((this.extendDialog = !0), (this.endDate = this.sanitation.end_date));
    },
    extendSanitation() {
      this.$axiosAction("/api/teacher/sanitation/sanitation.api", {
        action: 1 === this.sanitation.status ? "extendSanitation" : "restartSanitation",
        id: this.id,
        end_date: this.endDate,
      })
        .then((t) => {
          0 === t.data.code &&
            (1 === this.sanitation.status
              ? ((this.sanitation.end_date = this.endDate), (this.extendDialog = !1))
              : this.$router.push("/teacher/Sanitation/index"));
        })
        .catch((t) => {
          this.$q.loading.hide();
        });
    },
    deleteSanitation() {
      this.$q
        .dialog({
          title: "确认删除",
          message: "该寝室任务及各位老师已填写的数据将被清空。</span>",
          html: !0,
          persistent: !0,
          cancel: { label: "取消", outline: !0, color: "grey" },
          ok: { label: "删除", unelevated: !0, color: "negative" },
        })
        .onOk(() => {
          (this.$q.loading.show(),
            this.$axiosAction("/api/teacher/sanitation/sanitation.api", {
              action: "deleteSanitation",
              id: this.id,
              roleId: this.roleId,
              teacher_no: this.sanitation.teacher_no,
              title: this.sanitation.title,
            })
              .then((t) => {
                (0 === t.data.code && this.$router.push("/teacher/Sanitation/index"),
                  this.$q.loading.hide());
              })
              .catch((t) => {
                this.$q.loading.hide();
              }));
        });
    },
    goDetail(t, e, a) {
      let i = "";
      i = e ? "u" : "d";
      const s = this.show_createNew && 1 === this.sanitation.allow_delete && "n" !== i;
      (this.$router.push(
        "/teacher/sanitation/detailresult?type=" +
          i +
          "&sanId=" +
          this.id +
          "&teacher_no=" +
          a +
          "&getAllowDelete=" +
          s,
      ),
        window.localStorage.setItem("sanitation_result_detail", JSON.stringify(t)));
    },
    createNew() {
      this.$router.push(`/teacher/sanitation/detailresult?type=n&sanId=${this.id}`);
    },
    openShareDialog() {
      ((this.shareDialog = !0), (this.shareTarget = this.sanitation.share_target));
    },
    updateShareTarget() {
      (this.$q.loading.show(),
        this.$axiosAction("/api/teacher/sanitation/sanitation.api", {
          action: "updateShareTarget",
          id: this.id,
          share_target:
            this.shareTarget && this.shareTarget.length > 0
              ? JSON.stringify(this.shareTarget)
              : null,
        })
          .then((t) => {
            (0 === t.data.code &&
              ((this.sanitation.share_target = this.shareTarget), (this.shareDialog = !1)),
              this.$q.loading.hide());
          })
          .catch((t) => {
            this.$q.loading.hide();
          }));
    },
    exportList() {
      const t = this.condition.reduce((t, e) => ((t[e.name] = e.value), t), {});
      ((t.sanitation_id = parseInt(this.id)),
        (t.status = this.tab),
        (this.exportCompConfig = [
          "/api/teacher/sanitation/sanitation.api",
          "exportSanitationResultDetailList",
          t,
          { [this.sanitation.title]: "result" },
          this.sanitation.title,
          null,
          (t) =>
            t.reduce((t, e) => {
              const a = {
                教工号: e.teacher_no,
                姓名: e.teacher_name,
                性别: e.sex_name,
                部门院系: e.dep_name,
                寝室: e.room_name,
                执行日期: e.check_date,
                提交时间: e.create_time,
              };
              if (this.sanitation.info_config !== [])
                for (let i = 0; i < this.sanitation.info_config.length; i++)
                  a[(i + 1).toString() + "." + this.sanitation.info_config[i].label] = e.info_result
                    ? Object(d["c"])(this.sanitation.info_config[i], e.info_result[i])
                    : null;
              return t.concat(a);
            }, []),
          1e3,
          5e3,
        ]));
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
    getCondition() {
      ((this.condCount = Object.keys(this.queryModel).reduce(
        (t, e) => (this.queryModel[e] ? t + 1 : t),
        0,
      )),
        this.$refs.pageRefresh.trigger(),
        (this.dialog = !1));
    },
    getValue(t) {
      this.queryModel.status === t ? (this.queryModel.status = "") : (this.queryModel.status = t);
    },
    moveFab(t) {
      ((this.draggingFab = !0 !== t.isFirst && !0 !== t.isFinal),
        (this.fabPos = [this.fabPos[0] - t.delta.x, this.fabPos[1] - t.delta.y]));
    },
    taskTargetDialogOpen() {
      ((this.taskTargetDialog = !0),
        (this.actionTarget = JSON.parse(JSON.stringify(this.sanitation.task_target))));
    },
    updateActionTarget() {
      (this.$q.loading.show(),
        this.$axiosAction("/api/teacher/sanitation/sanitation.api", {
          action: "updateActionTarget",
          id: this.id,
          task_target:
            this.actionTarget && this.actionTarget.length > 0
              ? JSON.stringify(this.actionTarget)
              : null,
        })
          .then((t) => {
            (0 === t.data.code &&
              ((this.sanitation.task_target = this.actionTarget), (this.taskTargetDialog = !1)),
              this.$q.loading.hide());
          })
          .catch((t) => {
            this.$q.loading.hide();
          }));
    },
    changeAllowDelete() {
      this.$axiosAction("/api/teacher/sanitation/sanitation.api", {
        action: "updateAllowDelete",
        id: this.id,
        allow_delete: this.sanitation.allow_delete,
      })
        .then((t) => {
          0 === t.data.code || this.$router.push("/teacher/sanitation/index");
        })
        .catch((t) => {
          this.record = {};
        });
    },
    copyApply() {
      this.$q
        .dialog({
          title: "确认复制",
          message: "复制该寝室检查设置数据并全新发布",
          html: !0,
          persistent: !0,
          cancel: { label: "取消", outline: !0, color: "grey" },
          ok: { label: "复制", unelevated: !0, color: "primary" },
        })
        .onOk(() => {
          this.$router.push({
            name: "/teacher/sanitation/new",
            params: { sanitation: this.sanitation },
          });
        });
    },
  },
};
export default componentOptions;
