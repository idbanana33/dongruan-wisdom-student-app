/**
 * Vue options object recovered from webpack module AST.
 * Source: assets/www/js/105.js -> module "0fc5"
 * Route: /teacher/process/typeDetail
 * Component: processTypeNew
 * Not guaranteed standalone: imports/module aliases must be resolved from sibling .logic.js.
 */
const componentOptions = {
  name: "processTypeNew",
  components: {
    NeuWidget: l["a"],
    NeuDefineWidget: p["a"],
    NeuViewAssignedTeacher: d["a"],
    NeuAssignTeacher: u["a"],
    NeuAssignStudent: c["a"],
    NeuViewAssignedStudent: n["a"],
  },
  data() {
    return {
      editPermit: !0,
      id: null,
      type: null,
      menuInfo: null,
      infoConfigDialog: !1,
      infoConfigIndex: 0,
      record: {
        process_info_config: [],
        process_type_status_app: "1",
        process_need_locate_app: "1",
        out_campus: 0,
        out_campus_app: "0",
        out_campus_apply_begin: null,
        out_campus_apply_end: null,
        out_campus_begin_time: null,
        out_campus_end_time: null,
        into_campus: 0,
        into_campus_app: "0",
        into_campus_apply_begin: null,
        into_campus_apply_end: null,
        into_campus_begin_time: null,
        into_campus_end_time: null,
        task_target: [],
      },
      infoModel: [],
      reviewer: { teacher: [] },
      typeConfig: {},
      teacherDialog: !1,
      user: window.localStorage.userinfo ? JSON.parse(window.localStorage.getItem("userinfo")) : {},
      options: [],
      checkSwitch: {},
      taskTargetDialog: !1,
      service_flag: "N",
      is_copy: !1,
    };
  },
  mounted() {
    let e = "process";
    (this.$route.params && this.$route.params.record
      ? ((this.record = this.$route.params.record),
        (this.record.task_target = this.record.task_target ? this.record.task_target : []),
        (this.record.process_info_config = this.record.process_info_config
          ? this.record.process_info_config
          : []),
        (this.type = this.$route.params.type),
        (this.is_copy = this.record.is_copy),
        (this.id = this.record.id),
        window.localStorage.getItem("menu") &&
          ((this.service_flag = this.$route.params.service_flag),
          (e = "N" === this.service_flag ? "process" : "process_gate"),
          (this.menuInfo = JSON.parse(window.localStorage.getItem("menu")).find(
            (t) => t.id === e,
          ))))
      : (window.localStorage.getItem("menu") &&
          ((this.service_flag = this.$route.query.service_flag),
          (e = "N" === this.service_flag ? "process" : "process_gate"),
          (this.menuInfo = JSON.parse(window.localStorage.getItem("menu")).find(
            (t) => t.id === e,
          ))),
        (this.id = this.$route.query.id),
        (this.type = this.$route.query.type)),
      this.getSys(),
      void 0 !== this.id && null !== this.id ? this.getTypeDetail() : this.getTypeDetailOption());
  },
  methods: {
    goBack() {
      "a" === this.type
        ? this.$router.push("/teacher/process/index?service_flag=" + this.service_flag)
        : this.$router.push(
            "/teacher/process/processTypeList?type_id=" +
              this.id +
              "&service_flag=" +
              this.service_flag,
          );
    },
    getTypeDetail() {
      this.$axiosAction("/api/teacher/process/process.api", {
        action: "queryList",
        id: this.id,
        roleId: this.user.role_id,
      })
        .then((e) => {
          0 === e.data.code &&
            ((this.record = e.data.result.list[0]),
            void 0 === this.record && this.goBack(),
            null === this.record.task_target && (this.record.task_target = []),
            (this.options = e.data.opinion));
        })
        .catch((e) => {});
    },
    getTypeDetailOption() {
      this.$axiosAction("/api/teacher/process/process.api", {
        action: "queryListOpinion",
        roleId: this.user.role_id,
      })
        .then((e) => {
          0 === e.data.code && (this.options = e.data.opinion);
        })
        .catch((e) => {});
    },
    saveProcessType() {
      if ((this.$q.loading.show(), void 0 === this.record.processlimit))
        return (this.$q.loading.hide(), this.$showErrorNotify("请选择申请限制"));
      (void 0 === this.record.processlimit.value
        ? (this.record.process_apply_limit = this.options.find(
            (e) => e.label === this.record.processlimit,
          ).value)
        : (this.record.process_apply_limit = this.options.find(
            (e) => e.label === this.record.processlimit.label,
          ).value),
        "1" === this.record.process_type_status_app
          ? (this.record.process_type_status = 1)
          : (this.record.process_type_status = 0),
        "1" === this.record.process_need_locate_app
          ? (this.record.process_need_locate = 1)
          : (this.record.process_need_locate = 0),
        "1" === this.record.into_campus_app
          ? (this.record.into_campus = 1)
          : ((this.record.into_campus = 0),
            (this.into_campus_apply_begin = null),
            (this.into_campus_apply_end = null),
            (this.into_campus_begin_time = null),
            (this.into_campus_end_time = null)),
        "1" === this.record.out_campus_app
          ? (this.record.out_campus = 1)
          : ((this.record.out_campus = 0),
            (this.out_campus_apply_begin = null),
            (this.out_campus_apply_end = null),
            (this.out_campus_begin_time = null),
            (this.out_campus_end_time = null)));
      const e = r()({}, this.record);
      ((e.process_info_config = JSON.stringify(e.process_info_config)),
        (e.task_target =
          e.task_target && e.task_target.length > 0 ? JSON.stringify(e.task_target) : null),
        (e.service_flag = this.service_flag),
        this.is_copy
          ? ((e.configs = JSON.stringify(e.configs)),
            this.$axiosAction(
              "/api/teacher/process/process.api",
              r()({ action: "copyProcessType" }, e),
            )
              .then((e) => {
                (0 === e.data.code && this.goBack(), this.$q.loading.hide());
              })
              .catch((e) => {
                this.$q.loading.hide();
              }))
          : this.$axiosAction(
              "/api/teacher/process/process.api",
              r()({ action: "insertProcessType" }, e),
            )
              .then((e) => {
                (0 === e.data.code && this.goBack(), this.$q.loading.hide());
              })
              .catch((e) => {
                this.$q.loading.hide();
              }));
    },
    cancelInfoConfig() {
      (this.record.process_info_config[this.infoConfigIndex] ||
        (this.record.process_info_config.splice(this.infoConfigIndex, 1),
        this.infoModel.splice(this.infoConfigIndex, 1)),
        (this.infoConfigDialog = !1));
    },
    addInfoConfig(e) {
      (this.record.process_info_config.splice(e, 0, null),
        this.infoModel.splice(e, 0, null),
        (this.infoConfigDialog = !0),
        (this.infoConfigIndex = e));
    },
    editInfoConfig(e) {
      ((this.infoConfigDialog = !0), (this.infoConfigIndex = e));
    },
    deleteInfoConfig(e) {
      (this.record.process_info_config.splice(e, 1), this.infoModel.splice(e, 1));
    },
    moveInfoConfig(e, t) {
      (this.record.process_info_config.splice(
        e + t,
        0,
        this.record.process_info_config.splice(e, 1)[0],
      ),
        this.infoModel.splice(e + t, 0, this.infoModel.splice(e, 1)[0]));
    },
    deleteProcessType() {
      this.doDelete([this.record.id]);
    },
    openReviewerProcessDialog(e, t) {
      ((this.teacherDialog = !0),
        (this.reviewer = {
          id: e,
          teacher: t ? t.teacher : [],
          review_level: t ? t.review_level : null,
        }));
    },
    moveProcessReviewer(e, t, s, i) {
      const a = this.record.configs,
        o = a.findIndex((e) => e.review_level === s),
        r = Math.min(o, o + i),
        c = a.splice(r, 1);
      a.splice(r + 1, 0, c[0]);
      for (let l = 0; l < a.length; l++) a[l].review_level = l + 1;
      const n = { id: e, reviewer: JSON.stringify(a) };
      this.doUpdateTypeConfigReviewer(n);
    },
    deleteProcessReviewer(e, t) {
      this.$q
        .dialog({
          title: "确认删除",
          message: "该审核人将被删除。</span>",
          html: !0,
          persistent: !0,
          cancel: { label: "取消", outline: !0, color: "grey" },
          ok: { label: "删除", unelevated: !0, color: "negative" },
        })
        .onOk(() => {
          const s = {
            id: e,
            reviewer: JSON.stringify(
              this.record.configs.reduce(
                (e, s) =>
                  s.review_level < t
                    ? e.concat(s)
                    : s.review_level > t
                      ? e.concat({ teacher: s.teacher, review_level: s.review_level - 1 })
                      : e,
                [],
              ),
            ),
          };
          this.doUpdateTypeConfigReviewer(s);
        });
    },
    saveTypeConfigReviewer() {
      if (!this.reviewer.teacher || 0 === this.reviewer.teacher.length)
        return void this.$showErrorNotify("请设置审核人");
      const e = this.record.configs,
        t = {
          id: this.reviewer.id,
          reviewer: JSON.stringify(
            this.reviewer.review_level
              ? e.reduce(
                  (e, t) =>
                    t.review_level !== this.reviewer.review_level
                      ? e.concat(t)
                      : e.concat({
                          teacher: this.reviewer.teacher,
                          review_level: this.reviewer.review_level,
                        }),
                  [],
                )
              : e.concat({ teacher: this.reviewer.teacher, review_level: e.length + 1 }),
          ),
        };
      this.doUpdateTypeConfigReviewer(t);
    },
    doUpdateTypeConfigReviewer(e) {
      (this.$q.loading.show(),
        this.$axiosAction(
          "/api/teacher/process/process.api",
          r()({ action: "updateTypeConfigReviewer" }, e),
        )
          .then((e) => {
            (0 === e.data.code && ((this.teacherDialog = !1), this.getTypeDetail()),
              this.$q.loading.hide());
          })
          .catch((e) => {
            this.$q.loading.hide();
          }));
    },
    doDelete(e) {
      this.$q
        .dialog({
          title: "确认删除",
          message: "该流程将被删除。</span>",
          html: !0,
          persistent: !0,
          cancel: { label: "取消", outline: !0, color: "grey" },
          ok: { label: "删除", unelevated: !0, color: "negative" },
        })
        .onOk(() => {
          (this.$q.loading.show(),
            this.$axiosAction("/api/teacher/process/process.api", {
              action: "deleteProcessType",
              ids: e,
            })
              .then((e) => {
                (0 === e.data.code &&
                  this.$router.push("/teacher/process/index?service_flag=" + this.service_flag),
                  this.$q.loading.hide());
              })
              .catch((e) => {
                this.$q.loading.hide();
              }));
        });
    },
    getSys() {
      this.$axiosAction("/api/teacher/process/process.api", { action: "checkIntoOrOut" })
        .then((e) => {
          0 === e.data.code && (this.checkSwitch = e.data.result);
        })
        .catch((e) => {});
    },
  },
};
export default componentOptions;
