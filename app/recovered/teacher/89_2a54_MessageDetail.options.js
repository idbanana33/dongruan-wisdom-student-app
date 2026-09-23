/**
 * Vue options object recovered from webpack module AST.
 * Source: assets/www/js/89.js -> module "2a54"
 * Route: /teacher/message/messageDetail
 * Component: MessageDetail
 * Not guaranteed standalone: imports/module aliases must be resolved from sibling .logic.js.
 */
const componentOptions = {
  components: { NeuWidgetVue: o["a"], NeuGeoLocation: r["a"] },
  name: "MessageDetail",
  data() {
    return {
      menuInfo: null,
      record: {},
      name: null,
      age: null,
      accept: !1,
      id: this.$route.query.id,
      batch_no: this.$route.query.batch_no,
      map: null,
      location: { point: null, address: null, addressComponents: null },
      research: 0,
      locationStatus: !1,
      count: 0,
      userInfo: JSON.parse(window.localStorage.getItem("userinfo")),
      applyTypeTitle: "",
      timeSlot: "",
      fabPos: [30, 40],
      draggingFab: !1,
    };
  },
  destroyed() {
    window.removeEventListener("popstate", this.goCollect, !1);
  },
  mounted() {
    (window.localStorage.getItem("menu") &&
      ((this.applyTypeTitle = "填写"),
      this.getCount(),
      this.getApplyDetail(),
      (this.menuInfo = JSON.parse(window.localStorage.getItem("menu")).find(
        (e) => "message" === e.id,
      ))),
      window.history &&
        window.history.pushState &&
        (history.pushState(null, null, document.URL),
        window.addEventListener("popstate", this.goCollect, !1)));
  },
  methods: {
    getApplyDetail() {
      this.$axiosAction("/api/teacher/message/teamessage.api", {
        action: "getMessageDetail",
        message_id: this.id,
        batch_no: this.batch_no,
      }).then((e) => {
        0 === e.data.code
          ? ((this.record = e.data.result),
            this.record.begin_time_befor === this.record.end_time_befor
              ? (this.timeSlot = this.record.begin_time + " 至 " + this.record.end_time_after)
              : (this.timeSlot = this.record.begin_time + " 至 " + this.record.end_time),
            null == this.record.info_result && (this.record.info_result = []),
            Number(this.batch_no) > 1 &&
              (null === this.record.message_time || "" === this.record.message_time) &&
              this.record.judgeend &&
              this.record.info_config &&
              this.record.info_config.length > 0 &&
              e.data.lastInfo &&
              e.data.lastInfo.length > 0 &&
              this.$q
                .dialog({
                  title: "提示",
                  message: "自动填写上次内容",
                  html: !0,
                  persistent: !0,
                  cancel: { label: "取消", outline: !0, color: "grey" },
                  ok: { label: "确定", unelevated: !0, color: "blue" },
                })
                .onOk(() => {
                  this.record.info_result = e.data.lastInfo;
                }))
          : 2002 === e.data.code && this.$router.push({ name: "/teacher/message/message" });
      });
    },
    getCount() {
      this.$axiosAction("/api/teacher/message/teamessage.api", {
        action: "getCount",
        message_id: this.id,
      }).then((e) => {
        this.count = e.data.result;
      });
    },
    downloadFile(e, t) {
      Object(n["c"])(e, t);
    },
    updateResult() {
      ((this.locationStatus = !0), (this.research = this.research + 1));
    },
    goCollect() {
      null === this.record.message_time && !0 === this.record.judetime
        ? this.$q
            .dialog({
              title: "是否保存",
              message: "保存已填写内容",
              html: !0,
              persistent: !0,
              cancel: { label: "不保存", outline: !0, color: "grey" },
              ok: { label: "保存", unelevated: !0, color: "primary" },
            })
            .onOk(() => {
              (this.stopSave(), this.$router.push({ name: "/teacher/message/message" }));
            })
            .onCancel(() => {
              this.$router.push({ name: "/teacher/message/message" });
            })
        : this.$router.push({ name: "/teacher/message/message" });
    },
    locationCompleted(e) {
      ((this.location = e), this.locationStatus && ((this.locationStatus = !1), this.saveSubmit()));
    },
    locationError(e) {
      if (this.locationStatus)
        return ((this.locationStatus = !1), this.$showErrorNotify("该任务需要定位信息，定位失败"));
    },
    saveSubmit(e) {
      this.$q.loading.show();
      let t = 0;
      null !== this.record.message_time &&
        !0 === this.record.judgeend &&
        this.record.info_config.length > 0 &&
        (t = 1);
      let s = JSON.stringify(this.location);
      this.$axiosAction("/api/teacher/message/teamessage.api", {
        action: "updateMessageDetail",
        message_id: this.id,
        batch_no: this.batch_no,
        info_result:
          "[]" === JSON.stringify(this.record.info_result)
            ? null
            : JSON.stringify(this.record.info_result),
        message_location: s,
        updateBefor: t,
      }).then((e) => {
        (this.$router.push({ name: "/teacher/message/message" }), this.$q.loading.hide());
      });
    },
    stopSave() {
      this.$q.loading.show();
      let e = {};
      ((e = JSON.stringify(this.location)),
        this.$axiosAction("/api/teacher/message/teamessage.api", {
          action: "stopSaveCollectDetail",
          message_id: this.id,
          batch_no: this.batch_no,
          info_result:
            "[]" === JSON.stringify(this.record.info_result)
              ? null
              : JSON.stringify(this.record.info_result),
          message_location: e,
        }).then((e) => {
          (this.$router.push({ name: "/teacher/message/message" }), this.$q.loading.hide());
        }));
    },
    moveFab(e) {
      ((this.draggingFab = !0 !== e.isFirst && !0 !== e.isFinal),
        (this.fabPos = [this.fabPos[0] - e.delta.x, this.fabPos[1] - e.delta.y]));
    },
  },
};
export default componentOptions;
