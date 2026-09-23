/**
 * Vue options object recovered from webpack module AST.
 * Source: assets/www/js/67.js -> module "d03a"
 * Route: /teacher/apply/statistics
 * Component: applyStatistics
 * Not guaranteed standalone: imports/module aliases must be resolved from sibling .logic.js.
 */
const componentOptions = {
  name: "applyStatistics",
  components: {
    NeuAssignStudent: l["a"],
    NeuAssignTeacher: c["a"],
    NeuViewAssignedStudent: d["a"],
    NeuViewAssignedTeacher: p["a"],
    NeuWidget: u["a"],
    NeuExportData: h["a"],
  },
  data() {
    return {
      taskTitle: "",
      menuInfo: null,
      menuId: "",
      applyId: this.$route.query.id,
      applyType: this.$route.query.apply_type,
      applyTypeName: this.$route.query.apply_type_name,
      rowList: [],
      list: [],
      color: "",
      paging: { pageSize: 30, pageNum: 0, pageCount: 0 },
      originalCond: {},
      isLoading: !1,
      drawerRight: !1,
      record: {},
      applyShortTitle: "",
      detailDialog: !1,
      taskTargetDialog: !1,
      taskTargetExcludDialog: !1,
      extendDialog: !1,
      shareDialog: !1,
      shareTarget: [],
      actionTarget: [],
      noActionTarget: [],
      infoModel: [],
      maximizedToggle: !0,
      collect_end_time: "",
      roleId: JSON.parse(window.localStorage.getItem("userinfo")).role_id,
      exportCompConfig: null,
      timeSlot: "",
      counsellorlabel: localStorage.getItem("counsellorlabel"),
      cId: this.$route.query.compositeId,
    };
  },
  destroyed() {
    window.removeEventListener("popstate", this.goBack, !1);
  },
  mounted() {
    (window.history &&
      window.history.pushState &&
      (history.pushState(null, null, document.URL),
      window.addEventListener("popstate", this.goBack, !1)),
      "A" === this.applyType
        ? ((this.menuId = "apply"),
          (this.applyShortTitle = "申请"),
          (this.menuInfo = JSON.parse(window.localStorage.getItem("menu")).find(
            (e) => e.id === this.menuId,
          )))
        : "S" === this.applyType
          ? ((this.menuId = "signup"),
            (this.applyShortTitle = "报名"),
            (this.menuInfo = JSON.parse(window.localStorage.getItem("menu")).find(
              (e) => e.id === this.menuId,
            )))
          : "C" === this.applyType &&
            ((this.menuId = "collect"),
            (this.applyShortTitle = "填写"),
            (this.menuInfo = JSON.parse(window.localStorage.getItem("menu")).find(
              (e) => e.id === this.menuId,
            ))));
    const e = this.$route.query.status;
    ((this.color =
      0 === e
        ? "border-left:0.25rem solid #f2c037;"
        : 1 === e
          ? "border-left:0.25rem solid #027be3;"
          : "border-left:0.25rem solid #b5b3b3;"),
      this.getStatisticsList(() => {}));
    const t = this.menuInfo.title;
    ((this.rowList = [
      t + "时间段",
      t + "率",
      "可" + t + "人数",
      "已" + t + "人数",
      "未" + t + "人数",
    ]),
      this.resetDetail());
  },
  methods: {
    getStatisticsList(e) {
      (e && ((this.paging.pageNum = 0), (this.list = [])),
        (this.paging.pageNum += 1),
        (this.isLoading = !0),
        this.$axiosAction("/api/teacher/apply/apply.api", {
          action: "applyStatisticsDate",
          apply_id: this.applyId,
          menu_id: this.menuId,
          pageSize: this.paging.pageSize,
          pageNum: this.paging.pageNum,
        })
          .then((t) => {
            if (0 === t.data.code) {
              ((this.taskTitle = t.data.title + this.menuInfo.title + "统计"),
                (this.list = this.list.concat(t.data.result.list)));
              const {
                pageSize: e,
                pageNum: a,
                rowCount: s,
                pageCount: i,
                startIndex: r,
                endIndex: n,
              } = o()({}, t.data.result);
              this.paging = {
                pageSize: e,
                pageNum: a,
                rowCount: s,
                pageCount: i,
                startIndex: r,
                endIndex: n,
              };
            } else this.setDefaultList();
            (e && e(), (this.isLoading = !1));
          })
          .catch((t) => {
            ((this.list = []), this.setDefaultList(), e && e(), (this.isLoading = !1));
          }));
    },
    setDefaultList() {
      ((this.list = []), (this.paging = { pageSize: 30, pageNum: 0, pageCount: 0 }));
    },
    refresh(e) {
      this.getStatisticsList(e);
    },
    goBack() {
      null !== this.cId && void 0 !== this.cId
        ? this.$router.push("/teacher/composite/detail?id=" + this.$route.query.compositeId)
        : this.$router.push("/teacher/apply/index?apply_type=" + this.applyType);
    },
    goDetail(e) {
      null !== this.cId && void 0 !== this.cId
        ? this.$router.push(
            `/teacher/apply/detail?id=${this.applyId}&batch_no=${e}&apply_type=${this.applyType}&compositeId=${this.cId}`,
          )
        : this.$router.push(
            `/teacher/apply/detail?id=${this.applyId}&batch_no=${e}&apply_type=${this.applyType}`,
          );
    },
    exportList() {
      (this.$q.loading.show(),
        (this.exportCompConfig = [
          "/api/teacher/apply/apply.api",
          "exportaApplyStatisticsDate",
          { apply_id: this.applyId, menu_id: this.menuId },
          { [this.taskTitle + "数据"]: "result" },
          this.taskTitle + "数据",
          null,
          (e) =>
            e.reduce((e, t) => {
              const a = {};
              return (
                (a[`${this.rowList[0]}`] = t.timeslot),
                (a[`${this.rowList[1]}`] = t.applyedrate + "%"),
                (a[`${this.rowList[2]}`] = t.applytotal),
                (a[`${this.rowList[3]}`] = t.applyed),
                (a[`${this.rowList[4]}`] = t.noapply),
                e.concat(a)
              );
            }, []),
          1e3,
          5e3,
        ]),
        this.$q.loading.hide());
    },
    downloadFile(e, t) {
      Object(n["c"])(e, t);
    },
    getLoopFrequencyName(e) {
      if (e && 0 !== e.length) {
        const t = ["周一", "周二", "周三", "周四", "周五", "周六", "周日"].reduce(
          (t, a, s) => (e.indexOf(((s + 1) % 7).toString()) > -1 ? t.concat(a) : t),
          [],
        );
        return t.join("、");
      }
      return "";
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
        this.$axiosAction("/api/teacher/apply/apply.api", {
          action: "updateActionTarget",
          id: this.applyId,
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
    updateNoActionTarget() {
      (this.$q.loading.show(),
        this.$axiosAction("/api/teacher/apply/apply.api", {
          action: "updateNoActionTarget",
          id: this.applyId,
          task_target_excluding:
            this.noActionTarget && this.noActionTarget.length > 0
              ? JSON.stringify(this.noActionTarget)
              : null,
        })
          .then((e) => {
            (0 === e.data.code &&
              ((this.record.task_target_excluding = this.noActionTarget),
              (this.taskTargetExcludDialog = !1)),
              this.$q.loading.hide());
          })
          .catch((e) => {
            this.$q.loading.hide();
          }));
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
        this.$axiosAction("/api/teacher/apply/apply.api", {
          action: "updateShareTarget",
          id: this.applyId,
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
    copyApply() {
      let e = "";
      (null !== this.record.composite_id && (e = "，该任务为组合任务子任务"),
        this.$q
          .dialog({
            title: "确认复制",
            message: `复制该${this.menuInfo.title}设置数据并全新发布${e}`,
            html: !0,
            persistent: !0,
            cancel: { label: "取消", outline: !0, color: "grey" },
            ok: { label: "复制", unelevated: !0, color: "primary" },
          })
          .onOk(() => {
            this.$axiosAction("/api/teacher/apply/apply.api", {
              action: "queryApplyForEditing",
              id: this.applyId,
              role_id: this.roleId,
              apply_type: this.applyType,
            })
              .then((e) => {
                if (0 === e.data.code) {
                  let t = {};
                  ((t =
                    null !== this.record.composite_id
                      ? {
                          apply_type: this.applyType,
                          compositeId: this.record.composite_id,
                          befrom: "copy",
                        }
                      : { apply_type: this.applyType }),
                    this.$router.push({
                      name: "/teacher/apply/new",
                      query: t,
                      params: { record: e.data.result },
                    }));
                }
              })
              .catch((e) => {});
          }));
    },
    openExtendDialog() {
      ((this.extendDialog = !0), (this.collect_end_time = this.record.end_time));
    },
    resetTime() {
      (this.$q.loading.show(),
        this.$axiosAction("/api/teacher/apply/apply.api", {
          action: "updateEndTime",
          id: this.applyId,
          collect_end_time: this.collect_end_time,
          title: this.record.title,
          status: this.record.status,
          apply_type: this.applyType,
          batch_no: 1,
          apply_type_name: this.menuInfo.title,
          menu_id: this.menuInfo.id,
        })
          .then((e) => {
            (0 === e.data.code && ((this.extendDialog = !1), this.resetDetail()),
              this.$q.loading.hide());
          })
          .catch((e) => {
            this.$q.loading.hide();
          }));
    },
    deleteApply() {
      this.$q
        .dialog({
          title: "确认删除",
          message: `该${this.menuInfo.title}及其产生的<span class="text-red">数据将被清空。</span>`,
          html: !0,
          persistent: !0,
          cancel: { label: "取消", outline: !0, color: "grey" },
          ok: { label: "删除", unelevated: !0, color: "negative" },
        })
        .onOk(() => {
          (this.$q.loading.show(),
            this.$axiosAction("/api/teacher/apply/apply.api", {
              action: "deleteApply",
              id: this.applyId,
              apply_type: this.applyType,
            })
              .then((e) => {
                (0 === e.data.code && this.goBack(), this.$q.loading.hide());
              })
              .catch((e) => {
                this.$q.loading.hide();
              }));
        });
    },
    terminateJoblog() {
      this.$q
        .dialog({
          title: "确认提前结束",
          message: `该${this.menuInfo.title}执行频率若为周循环则当天依然有效！`,
          html: !0,
          persistent: !0,
          cancel: { label: "取消", outline: !0, color: "grey" },
          ok: { label: "结束", unelevated: !0, color: "negative" },
        })
        .onOk(() => {
          (this.$q.loading.show(),
            this.$axiosAction("/api/teacher/apply/apply.api", {
              action: "updateEndTimeToEnd",
              id: this.applyId,
              frequency: this.record.frequency,
            })
              .then((e) => {
                (0 === e.data.code && (this.resetDetail(), this.getStatisticsList(() => {})),
                  this.$q.loading.hide());
              })
              .catch((e) => {
                this.$q.loading.hide();
              }));
        });
    },
    resetDetail() {
      this.$axiosAction("/api/teacher/apply/apply.api", {
        action: "queryApply",
        id: this.$route.query.id,
        apply_type: this.applyType,
      })
        .then((e) => {
          0 === e.data.code
            ? ((this.record = e.data.result),
              this.record.begin_time_befor === this.record.end_time_befor
                ? (this.timeSlot = this.record.begin_time + " ~ " + this.record.end_time_after)
                : (this.timeSlot = this.record.begin_time + " ~ " + this.record.end_time))
            : 2002 === e.data.code && this.goBack();
        })
        .catch((e) => {
          this.record = {};
        });
    },
    changeAllowCounsellor() {
      this.$axiosAction("/api/teacher/apply/apply.api", {
        action: "updateAllowCounsellor",
        id: this.$route.query.id,
        allow_counsellor: this.record.allow_counsellor,
      })
        .then((e) => {
          0 === e.data.code ||
            this.$router.push(
              `/teacher/apply/index?apply_type=${this.applyType}&apply_type_name=${(this.menuInfo || {}).title}`,
            );
        })
        .catch((e) => {
          this.record = {};
        });
    },
    changeAllowStuManageFlag() {
      this.$axiosAction("/api/teacher/apply/apply.api", {
        action: "updateStuManageFlag",
        id: this.$route.query.id,
        stu_manage_flag: this.record.stu_manage_flag,
      })
        .then((e) => {
          0 === e.data.code || this.$router.push("/teacher/apply/index");
        })
        .catch((e) => {
          this.record = {};
        });
    },
  },
};
export default componentOptions;
