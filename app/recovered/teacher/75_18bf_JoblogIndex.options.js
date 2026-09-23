/**
 * Vue options object recovered from webpack module AST.
 * Source: assets/www/js/75.js -> module "18bf"
 * Route: /teacher/joblog/new
 * Component: JoblogIndex
 * Not guaranteed standalone: imports/module aliases must be resolved from sibling .logic.js.
 */
const componentOptions = {
  name: "JoblogIndex",
  components: {
    NeuAssignTeacher: n["a"],
    NeuViewAssignedTeacher: l["a"],
    NeuDefineWidget: c["a"],
    NeuWidget: d["a"],
  },
  data() {
    return {
      editorToolBar: JSON.parse(window.localStorage.editorToolBar),
      editorFonts: JSON.parse(window.localStorage.editorFonts),
      menuInfo: null,
      record: {
        title: "",
        detail: "",
        begin_date: "",
        end_date: "",
        task_target: [],
        share_target: [],
        info_config: [],
        allow_delete: 0,
        allow_look: 0,
      },
      taskTargetDialog: !1,
      shareDialog: !1,
      infoConfigDialog: !1,
      infoConfigIndex: 0,
      infoModel: [],
    };
  },
  mounted() {
    (window.localStorage.getItem("menu") &&
      (this.menuInfo = JSON.parse(window.localStorage.getItem("menu")).find(
        (e) => "joblog" === e.id,
      )),
      this.$route.params &&
        this.$route.params.record &&
        ((this.record = this.$route.params.record),
        null == this.record.share_target && (this.record.share_target = [])));
  },
  methods: {
    goBack() {
      this.$router.push("/teacher/joblog/index");
    },
    addInfoConfig(e) {
      (this.record.info_config.splice(e, 0, null),
        this.infoModel.splice(e, 0, null),
        (this.infoConfigDialog = !0),
        (this.infoConfigIndex = e));
    },
    cancelInfoConfig() {
      (this.record.info_config[this.infoConfigIndex] ||
        (this.record.info_config.splice(this.infoConfigIndex, 1),
        this.infoModel.splice(this.infoConfigIndex, 1)),
        (this.infoConfigDialog = !1));
    },
    editInfoConfig(e) {
      ((this.infoConfigDialog = !0), (this.infoConfigIndex = e));
    },
    deleteInfoConfig(e) {
      (this.record.info_config.splice(e, 1), this.infoModel.splice(e, 1));
    },
    moveInfoConfig(e, t) {
      (this.record.info_config.splice(e + t, 0, this.record.info_config.splice(e, 1)[0]),
        this.infoModel.splice(e + t, 0, this.infoModel.splice(e, 1)[0]));
    },
    saveRecord() {
      if (!this.record.detail) return void this.$showErrorNotify("请填写要求");
      if (!this.record.task_target || 0 === this.record.task_target.length)
        return void this.$showErrorNotify("请设置填写对象");
      if (!this.record.info_config || 0 === this.record.info_config.length)
        return void this.$showErrorNotify("请设置工作日志表单项目");
      this.$q.loading.show();
      const e = r()({}, this.record);
      ((e.task_target = JSON.stringify(e.task_target)),
        (e.share_target =
          e.share_target && e.share_target.length > 0 ? JSON.stringify(e.share_target) : null),
        (e.info_config = JSON.stringify(e.info_config)),
        this.$axiosAction("/api/teacher/joblog/joblog.api", r()({ action: "insert" }, e))
          .then((e) => {
            (0 === e.data.code && this.$router.push("/teacher/joblog/index"),
              this.$q.loading.hide());
          })
          .catch((e) => {
            this.$q.loading.hide();
          }));
    },
  },
};
export default componentOptions;
