/**
 * Vue options object recovered from webpack module AST.
 * Source: assets/www/js/37.js -> module "5e52"
 * Route: /student/process/detail
 * Component: processDetails
 * Not guaranteed standalone: imports/module aliases must be resolved from sibling .logic.js.
 */
const componentOptions = {
  name: "processDetails",
  components: { NeuWidget: r["a"], NeuGeoLocation: i["a"] },
  data() {
    return {
      id: this.$route.query.id,
      userinfo: window.localStorage.userinfo
        ? JSON.parse(window.localStorage.getItem("userinfo"))
        : null,
      process_id: this.$route.query.process_id,
      menuInfo: null,
      viewMode: !0,
      record: {},
      opinion: "",
      review_list: [],
      color: "",
      deleteShow: !1,
      nextTeacher: [],
      service_flag: "N",
      location: { point: null, address: null, addressComponents: null },
      research: 0,
      locationStatus: !1,
    };
  },
  computed: {},
  destroyed() {
    window.removeEventListener("popstate", this.goBack, !1);
  },
  mounted() {
    if (window.localStorage.getItem("menu")) {
      this.service_flag = this.$route.query.service_flag;
      let e = "process";
      ((e = "N" === this.service_flag ? "process" : "process_gate"),
        (this.menuInfo = JSON.parse(window.localStorage.getItem("menu")).find((t) => t.id === e)));
    }
    (this.getProcessReviewInfo(),
      window.history &&
        window.history.pushState &&
        (history.pushState(null, null, document.URL),
        window.addEventListener("popstate", this.goBack, !1)));
  },
  methods: {
    goBack() {
      this.$router.push("/student/process/index?service_flag=" + this.service_flag);
    },
    deleteProcess() {
      this.$q
        .dialog({
          title: "确认撤回",
          message: '该流程及其产生的<span class="text-red">数据将被清空。</span>',
          html: !0,
          persistent: !0,
          cancel: { label: "取消", outline: !0, color: "grey" },
          ok: { label: "撤回", unelevated: !0, color: "negative" },
        })
        .onOk(() => {
          this.$axiosAction("/api/student/process/process.api", {
            action: "deleteProcess",
            id: this.process_id,
          }).then((e) => {
            0 === e.data.code && this.goBack();
          });
        });
    },
    getProcessReviewInfo() {
      this.$axiosAction("/api/teacher/process/process.api", {
        action: "getProcessDetail",
        process_id: this.process_id,
        tab: "reviewing",
      })
        .then((e) => {
          (0 === e.data.code && (this.record = e.data.result.list[0]),
            (null !== this.record.id && "" !== this.record.id && void 0 !== this.record.id) ||
              this.goBack(),
            (this.nextTeacher = e.data.nextTeacher.nextTeacher),
            "R" === this.record.review_status
              ? (this.color = "red")
              : "A" === this.record.review_status
                ? (this.color = "green")
                : "W" === this.record.review_status && (this.color = "teal"),
            (this.review_list = e.data.review_list.review_list),
            void 0 === this.review_list[0] && ((this.deleteShow = !0), (this.viewMode = !1)));
        })
        .catch((e) => {
          this.record = {};
        });
    },
    saveProcess() {
      if (null === this.record.id || void 0 === this.record.id || "" === this.record.id)
        return this.$showErrorNotify("系统加载错误，请返回刷新");
      ((this.locationStatus = !0), (this.research = this.research + 1));
    },
    locationCompleted(e) {
      ((this.location = e),
        this.locationStatus && ((this.locationStatus = !1), this.saveSubmit(1)));
    },
    locationError(e) {
      this.locationStatus && ((this.locationStatus = !1), this.saveSubmit(2));
    },
    saveSubmit(e) {
      let t = {};
      ((t = 1 === e ? JSON.stringify(this.location) : ""),
        this.$q.loading.show(),
        this.$axiosAction("/api/student/process/process.api", {
          action: "updateProcessStudent",
          id: this.process_id,
          info_result: JSON.stringify(this.record.info_result),
          contact: this.record.contact,
          location: t,
        })
          .then((e) => {
            (0 === e.data.code && this.goBack(), this.$q.loading.hide());
          })
          .catch((e) => {
            ((this.record = {}), this.$q.loading.hide());
          }));
    },
  },
};
export default componentOptions;
