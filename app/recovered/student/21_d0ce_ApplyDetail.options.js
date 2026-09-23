/**
 * Vue options object recovered from webpack module AST.
 * Source: assets/www/js/21.js -> module "d0ce"
 * Route: /student/apply/applyDetail
 * Component: ApplyDetail
 * Not guaranteed standalone: imports/module aliases must be resolved from sibling .logic.js.
 */
const componentOptions = {
  components: { NeuQaList: o["a"], NeuWidgetVue: l["a"], NeuGeoLocation: r["a"] },
  name: "ApplyDetail",
  data() {
    return {
      menuInfo: null,
      tab: "detail",
      tabs: this.$route.query.tab,
      record: {},
      name: null,
      age: null,
      apply_type: this.$route.query.apply_type,
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
    "A" === this.apply_type
      ? window.removeEventListener("popstate", this.goApply, !1)
      : "S" === this.apply_type
        ? window.removeEventListener("popstate", this.goSignup, !1)
        : "C" === this.apply_type && window.removeEventListener("popstate", this.goCollect, !1);
  },
  mounted() {
    if (window.localStorage.getItem("menu")) {
      let t = "";
      ("A" === this.$route.query.apply_type
        ? ((t = "apply"), (this.applyTypeTitle = "申请"))
        : "S" === this.$route.query.apply_type
          ? ((t = "signup"), (this.applyTypeTitle = "报名"))
          : "C" === this.$route.query.apply_type &&
            ((t = "collect"), (this.applyTypeTitle = "填写")),
        this.getCount(),
        this.getApplyDetail(),
        (this.menuInfo = JSON.parse(window.localStorage.getItem("menu")).find((e) => e.id === t)));
    }
    window.history &&
      window.history.pushState &&
      (history.pushState(null, null, document.URL),
      "A" === this.apply_type
        ? window.addEventListener("popstate", this.goApply, !1)
        : "S" === this.apply_type
          ? window.addEventListener("popstate", this.goSignup, !1)
          : "C" === this.apply_type && window.addEventListener("popstate", this.goCollect, !1));
  },
  methods: {
    getApplyDetail() {
      this.$axiosAction("/api/student/apply/apply.api", {
        action: "getApplyDetail",
        apply_id: this.id,
        apply_type: this.apply_type,
        batch_no: this.batch_no,
      }).then((t) => {
        0 === t.data.code
          ? ((this.record = t.data.result),
            this.record.begin_time_befor === this.record.end_time_befor
              ? (this.timeSlot = this.record.begin_time + " 至 " + this.record.end_time_after)
              : (this.timeSlot = this.record.begin_time + " 至 " + this.record.end_time),
            null == this.record.info_result && (this.record.info_result = []),
            Number(this.batch_no) > 1 &&
              (null === this.record.apply_time || "" === this.record.apply_time) &&
              this.record.judgeend &&
              this.record.info_config &&
              this.record.info_config.length > 0 &&
              t.data.lastInfo &&
              t.data.lastInfo.length > 0 &&
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
                  this.record.info_result = t.data.lastInfo;
                }))
          : 2002 === t.data.code &&
            this.$router.push({
              name: "/student/apply/index",
              query: { apply_type: this.apply_type, tab: this.tabs },
            });
      });
    },
    getCount() {
      this.$axiosAction("/api/student/apply/apply.api", {
        action: "getCount",
        apply_id: this.id,
      }).then((t) => {
        this.count = t.data.result;
      });
    },
    downloadFile(t, e) {
      Object(n["c"])(t, e);
    },
    updateResult() {
      ((this.locationStatus = !0), (this.research = this.research + 1));
    },
    goApply() {
      this.$router.push({
        name: "/student/apply/index",
        query: { apply_type: "A", tab: this.tabs },
      });
    },
    goSignup() {
      this.$router.push({
        name: "/student/apply/index",
        query: { apply_type: "S", tab: this.tabs },
      });
    },
    goCollect() {
      null === this.record.apply_time && !0 === this.record.judetime && "detail" === this.tab
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
              (this.stopSave(),
                this.$router.push({
                  name: "/student/apply/index",
                  query: { apply_type: "C", tab: this.tabs },
                }));
            })
            .onCancel(() => {
              this.$router.push({
                name: "/student/apply/index",
                query: { apply_type: "C", tab: this.tabs },
              });
            })
        : this.$router.push({
            name: "/student/apply/index",
            query: { apply_type: "C", tab: this.tabs },
          });
    },
    locationCompleted(t) {
      ((this.location = t),
        this.locationStatus && ((this.locationStatus = !1), this.saveSubmit(1)));
    },
    updateCollect() {
      this.$axiosAction("/api/student/apply/apply.api", {
        action: "updateCollectDetail",
        apply_id: this.id,
        batch_no: this.batch_no,
        info_result:
          "[]" === JSON.stringify(this.record.info_result)
            ? null
            : JSON.stringify(this.record.info_result),
        apply_location: JSON.stringify(this.location),
      }).then((t) => {
        this.goCollect();
      });
    },
    locationError(t) {
      if (this.locationStatus) {
        if (((this.locationStatus = !1), 1 === this.record.need_location))
          return this.$showErrorNotify("该任务需要定位信息，定位失败");
        this.saveSubmit(2);
      }
    },
    saveSubmit(t) {
      this.$q.loading.show();
      let e = 0;
      null !== this.record.apply_time &&
        !0 === this.record.judgeend &&
        "C" === this.record.apply_type &&
        this.record.info_config.length > 0 &&
        (e = 1);
      let a = {};
      ((a = 1 === t ? JSON.stringify(this.location) : null),
        this.$axiosAction("/api/student/apply/apply.api", {
          action: "updateApplyDetail",
          apply_id: this.id,
          batch_no: this.batch_no,
          info_result:
            "[]" === JSON.stringify(this.record.info_result)
              ? null
              : JSON.stringify(this.record.info_result),
          apply_location: a,
          updateBefor: e,
        }).then((t) => {
          ("A" === this.$route.query.apply_type
            ? this.goApply()
            : "S" === this.$route.query.apply_type
              ? this.goSignup()
              : "C" === this.$route.query.apply_type &&
                this.$router.push({
                  name: "/student/apply/index",
                  query: { apply_type: "C", tab: this.tabs },
                }),
            this.$q.loading.hide());
        }));
    },
    stopSave() {
      this.$q.loading.show();
      let t = {};
      ((t = 1 === this.record.need_location ? JSON.stringify(this.location) : null),
        this.$axiosAction("/api/student/apply/apply.api", {
          action: "stopSaveCollectDetail",
          apply_id: this.id,
          batch_no: this.batch_no,
          info_result:
            "[]" === JSON.stringify(this.record.info_result)
              ? null
              : JSON.stringify(this.record.info_result),
          apply_location: t,
        }).then((t) => {
          (this.$router.push({
            name: "/student/apply/index",
            query: { apply_type: "C", tab: this.tabs },
          }),
            this.$q.loading.hide());
        }));
    },
    moveFab(t) {
      ((this.draggingFab = !0 !== t.isFirst && !0 !== t.isFinal),
        (this.fabPos = [this.fabPos[0] - t.delta.x, this.fabPos[1] - t.delta.y]));
    },
  },
};
export default componentOptions;
