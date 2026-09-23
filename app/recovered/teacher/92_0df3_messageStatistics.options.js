/**
 * Vue options object recovered from webpack module AST.
 * Source: assets/www/js/92.js -> module "0df3"
 * Route: /teacher/message/statistics
 * Component: messageStatistics
 * Not guaranteed standalone: imports/module aliases must be resolved from sibling .logic.js.
 */
const componentOptions = {
  name: "messageStatistics",
  components: {
    NeuAssignTeacher: c["a"],
    NeuViewAssignedTeacher: l["a"],
    NeuWidget: d["a"],
    NeuExportData: g["a"],
  },
  data() {
    return {
      taskTitle: "",
      menuInfo: null,
      messageId: this.$route.query.id,
      rowList: [],
      list: [],
      color: "",
      paging: { pageSize: 30, pageNum: 0, pageCount: 0 },
      originalCond: {},
      isLoading: !1,
      drawerRight: !1,
      record: {},
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
      message_end_time: "",
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
      (this.menuInfo = JSON.parse(window.localStorage.getItem("menu")).find(
        (e) => "message" === e.id,
      )));
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
        this.$axiosAction("/api/teacher/message/message.api", {
          action: "messageStatisticsDate",
          message_id: this.messageId,
          pageSize: this.paging.pageSize,
          pageNum: this.paging.pageNum,
        })
          .then((t) => {
            if (0 === t.data.code) {
              ((this.taskTitle = t.data.title + this.menuInfo.title + "统计"),
                (this.list = this.list.concat(t.data.result.list)));
              const {
                pageSize: e,
                pageNum: s,
                rowCount: a,
                pageCount: i,
                startIndex: r,
                endIndex: n,
              } = o()({}, t.data.result);
              this.paging = {
                pageSize: e,
                pageNum: s,
                rowCount: a,
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
      this.$router.push("/teacher/message/messageIndex");
    },
    goDetail(e) {
      this.$router.push(`/teacher/message/detail?id=${this.messageId}&batch_no=${e}`);
    },
    exportList() {
      (this.$q.loading.show(),
        (this.exportCompConfig = [
          "/api/teacher/message/message.api",
          "exportMessageStatisticsDate",
          { message_id: this.messageId },
          { [this.taskTitle + "数据"]: "result" },
          this.taskTitle + "数据",
          null,
          (e) =>
            e.reduce((e, t) => {
              const s = {};
              return (
                (s[`${this.rowList[0]}`] = t.timeslot),
                (s[`${this.rowList[1]}`] = t.messagedrate + "%"),
                (s[`${this.rowList[2]}`] = t.messagetotal),
                (s[`${this.rowList[3]}`] = t.messaged),
                (s[`${this.rowList[4]}`] = t.nomessage),
                e.concat(s)
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
          (t, s, a) => (e.indexOf(((a + 1) % 7).toString()) > -1 ? t.concat(s) : t),
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
        this.$axiosAction("/api/teacher/message/message.api", {
          action: "updateActionTarget",
          id: this.messageId,
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
        this.$axiosAction("/api/teacher/message/message.api", {
          action: "updateNoActionTarget",
          id: this.messageId,
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
    copyApply() {
      let e = "";
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
          this.$axiosAction("/api/teacher/message/message.api", {
            action: "queryMessageForEditing",
            id: this.messageId,
            role_id: this.roleId,
          })
            .then((e) => {
              if (0 === e.data.code) {
                let t = {};
                this.$router.push({
                  name: "/teacher/message/new",
                  query: t,
                  params: { record: e.data.result },
                });
              }
            })
            .catch((e) => {});
        });
    },
    openExtendDialog() {
      ((this.extendDialog = !0), (this.message_end_time = this.record.end_time));
    },
    resetTime() {
      (this.$q.loading.show(),
        this.$axiosAction("/api/teacher/message/message.api", {
          action: "updateEndTime",
          id: this.messageId,
          message_end_time: this.message_end_time,
          title: this.record.title,
          status: this.record.status,
          batch_no: 1,
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
            this.$axiosAction("/api/teacher/message/message.api", {
              action: "deleteMessage",
              id: this.messageId,
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
            this.$axiosAction("/api/teacher/message/message.api", {
              action: "updateEndTimeToEnd",
              id: this.messageId,
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
      this.$axiosAction("/api/teacher/message/message.api", {
        action: "queryMessage",
        id: this.$route.query.id,
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
  },
};
export default componentOptions;
