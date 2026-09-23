/**
 * Vue options object recovered from webpack module AST.
 * Source: assets/www/js/40.js -> module "c054"
 * Route: /student/process/NewProcess
 * Component: processNewPage
 * Not guaranteed standalone: imports/module aliases must be resolved from sibling .logic.js.
 */
const componentOptions = {
  name: "processNewPage",
  components: { NeuWidget: c["a"], NeuGeoLocation: n["a"] },
  data() {
    return {
      id: this.$route.query.id,
      menuType: "",
      viewMode: !1,
      menuInfo: null,
      process: { info_result: [], contact: "" },
      record: {},
      user: JSON.parse(window.localStorage.getItem("userinfo")),
      service_flag: "N",
      location: { point: null, address: null, addressComponents: null },
      research: 0,
      locationStatus: !1,
    };
  },
  mounted() {
    (window.localStorage.getItem("menu") &&
      ((this.service_flag = this.$route.query.service_flag),
      "N" === this.service_flag ? (this.menuType = "process") : (this.menuType = "process_gate"),
      (this.menuInfo = JSON.parse(window.localStorage.getItem("menu")).find(
        (e) => e.id === this.menuType,
      ))),
      this.getProcessType(this.id));
  },
  methods: {
    getProcessType(e) {
      this.$axiosAction("/api/student/process/process.api", { action: "queryList", id: e })
        .then((e) => {
          (0 === e.data.code && (this.record = e.data.result.list[0]),
            (null !== this.record.process_apply_limit &&
              "" !== this.record.process_apply_limit &&
              void 0 !== this.record.process_apply_limit) ||
              this.goBack());
        })
        .catch((e) => {
          this.record = {};
        });
    },
    goBack() {
      this.$router.push("/student/process/new?service_flag=" + this.service_flag);
    },
    saveProcess() {
      if (
        null === this.record.process_apply_limit ||
        "" === this.record.process_apply_limit ||
        void 0 === this.record.process_apply_limit
      )
        return this.$showErrorNotify("数据加载错误，请重新加载或联系管理员");
      (this.$q.loading.show(), (this.locationStatus = !0), (this.research = this.research + 1));
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
        (this.process = {
          info_config: JSON.stringify(this.record.process_info_config),
          info_result: JSON.stringify(this.process.info_result),
          process_type_id: this.id,
          review_status: "W",
          contact: this.process.contact,
          type_name: this.record.process_type_name,
          student_name: this.user.name,
          process_apply_limit: this.record.process_apply_limit,
          service_flag: this.record.service_flag,
          location: t,
          menu_id: this.menuType,
          menuTypeName: this.menuInfo.title,
        }),
        this.$axiosAction(
          "/api/student/process/process.api",
          a()({ action: "insertProcess" }, this.process),
        )
          .then((e) => {
            (e.data.code,
              this.$router.push("/student/process/index?service_flag=" + this.service_flag),
              this.$q.loading.hide());
          })
          .catch((e) => {
            ((this.process = []), this.$q.loading.hide());
          }));
    },
  },
};
export default componentOptions;
