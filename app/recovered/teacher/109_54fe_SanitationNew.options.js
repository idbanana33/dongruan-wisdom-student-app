/**
 * Vue options object recovered from webpack module AST.
 * Source: assets/www/js/109.js -> module "54fe"
 * Route: /teacher/sanitation/new
 * Component: SanitationNew
 * Not guaranteed standalone: imports/module aliases must be resolved from sibling .logic.js.
 */
const componentOptions = {
  name: "SanitationNew",
  components: {
    NeuAssignTeacher: r["a"],
    NeuDefineWidget: l["a"],
    NeuViewAssignedTeacher: c["a"],
    NeuWidget: f["a"],
  },
  data() {
    return {
      editorToolBar: JSON.parse(window.localStorage.editorToolBar),
      editorFonts: JSON.parse(window.localStorage.editorFonts),
      menuInfo: null,
      infoConfigDialog: !1,
      StuinfoConfigDialog: !1,
      taskTargetDialog: !1,
      shareDialog: !1,
      infoConfigIndex: 0,
      stuInfoConfigIndex: 0,
      sanitation: {
        title: "",
        detail: "",
        info_config: [],
        stu_info_config: [],
        begin_date: "",
        end_date: "",
        task_target: [],
        share_target: [],
        allow_delete: 0,
      },
      studentSet: "0",
      infoModel: [],
      stuInfoModel: [],
    };
  },
  mounted() {
    (window.localStorage.getItem("menu") &&
      (this.menuInfo = JSON.parse(window.localStorage.getItem("menu")).find(
        (t) => "sanitation" === t.id,
      )),
      this.$route.params &&
        this.$route.params.sanitation &&
        ((this.sanitation = this.$route.params.sanitation),
        this.sanitation.stu_info_config.length > 0
          ? (this.studentSet = "1")
          : (this.studentSet = "0")));
  },
  methods: {
    goBack() {
      this.$router.push("/teacher/sanitation/index");
    },
    cancelInfoConfig() {
      (this.sanitation.info_config[this.infoConfigIndex] ||
        (this.sanitation.info_config.splice(this.infoConfigIndex, 1),
        this.infoModel.splice(this.infoConfigIndex, 1)),
        (this.infoConfigDialog = !1));
    },
    stucancelInfoConfig() {
      (this.sanitation.stu_info_config[this.stuInfoConfigIndex] ||
        (this.sanitation.stu_info_config.splice(this.stuInfoConfigIndex, 1),
        this.stuInfoModel.splice(this.stuInfoConfigIndex, 1)),
        (this.StuinfoConfigDialog = !1));
    },
    addInfoConfig(t) {
      (this.sanitation.info_config.splice(t, 0, null),
        this.infoModel.splice(t, 0, null),
        (this.infoConfigDialog = !0),
        (this.infoConfigIndex = t));
    },
    addStuInfoConfig(t) {
      (this.sanitation.stu_info_config.splice(t, 0, null),
        this.stuInfoModel.splice(t, 0, null),
        (this.StuinfoConfigDialog = !0),
        (this.stuInfoConfigIndex = t));
    },
    editInfoConfig(t) {
      ((this.infoConfigDialog = !0), (this.infoConfigIndex = t));
    },
    editStuInfoConfig(t) {
      ((this.StuinfoConfigDialog = !0), (this.stuInfoConfigIndex = t));
    },
    deleteInfoConfig(t) {
      (this.sanitation.info_config.splice(t, 1), this.infoModel.splice(t, 1));
    },
    deleteStuInfoConfig(t) {
      (this.sanitation.stu_info_config.splice(t, 1), this.stuInfoModel.splice(t, 1));
    },
    moveInfoConfig(t, i) {
      (this.sanitation.info_config.splice(t + i, 0, this.sanitation.info_config.splice(t, 1)[0]),
        this.infoModel.splice(t + i, 0, this.infoModel.splice(t, 1)[0]));
    },
    moveStuInfoConfig(t, i) {
      (this.sanitation.stu_info_config.splice(
        t + i,
        0,
        this.sanitation.info_config.splice(t, 1)[0],
      ),
        this.stuInfoModel.splice(t + i, 0, this.stuInfoModel.splice(t, 1)[0]));
    },
    saveSanitation() {
      if ("1" === this.studentSet) {
        if (!this.sanitation.stu_info_config || 0 === this.sanitation.stu_info_config.length)
          return void this.$showErrorNotify("请设置学生个人检查配置");
      } else "0" === this.studentSet && (this.sanitation.stu_info_config = []);
      if (!this.sanitation.title) return void this.$showErrorNotify("请填写任务名称");
      if (!this.sanitation.detail) return void this.$showErrorNotify("请填写要求");
      if (!this.sanitation.begin_date) return void this.$showErrorNotify("请填写开始时间");
      if (!this.sanitation.end_date) return void this.$showErrorNotify("请填写结束时间");
      if (!this.sanitation.task_target || 0 === this.sanitation.task_target.length)
        return void this.$showErrorNotify("请设置执行对象");
      if (!this.sanitation.info_config || 0 === this.sanitation.info_config.length)
        return void this.$showErrorNotify("请设置寝室检查配置");
      this.$q.loading.show();
      const t = o()({}, this.sanitation);
      ((t.task_target = JSON.stringify(t.task_target)),
        (t.share_target =
          t.share_target && t.share_target.length > 0 ? JSON.stringify(t.share_target) : null),
        (t.info_config = JSON.stringify(t.info_config)),
        (t.stu_info_config = JSON.stringify(t.stu_info_config)),
        this.$axiosAction("/api/teacher/sanitation/sanitation.api", o()({ action: "insert" }, t))
          .then((t) => {
            (0 === t.data.code && this.$router.push("/teacher/sanitation/index"),
              this.$q.loading.hide());
          })
          .catch((t) => {
            this.$q.loading.hide();
          }));
    },
  },
};
export default componentOptions;
