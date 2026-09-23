/**
 * Vue options object recovered from webpack module AST.
 * Source: assets/www/js/91.js -> module "8060"
 * Route: /teacher/message/new
 * Component: MessageNew
 * Not guaranteed standalone: imports/module aliases must be resolved from sibling .logic.js.
 */
const componentOptions = {
  name: "MessageNew",
  components: { NeuAssignTeacher: n["a"], NeuDefineWidget: l["a"], NeuWidget: c["a"] },
  data() {
    return {
      editorToolBar: JSON.parse(window.localStorage.editorToolBar),
      editorFonts: JSON.parse(window.localStorage.editorFonts),
      menuInfo: null,
      uploader: window.localStorage.server + this.$appConf.fileUploader,
      frequencyList: [],
      applySwitchList: [],
      record: {
        apply_type: this.$route.query.apply_type,
        title: "",
        detail: "",
        attachment: [],
        frequency: "S",
        single_begin_time: "",
        single_end_time: "",
        loop_frequency: [],
        loop_begin_date: "",
        loop_end_date: "",
        loop_begin_time: "",
        loop_end_time: "",
        appointed_date: [{ begin_time: "", end_time: "" }],
        in_advance: 5,
        apply_switch: "M",
        task_target: [],
        task_target_excluding: [],
        info_config: [],
        reviewer: [],
        dep_no: null,
        composite_id: null,
      },
      taskTargetDialog: !1,
      taskTargetExcludingDialog: !1,
      shareDialog: !1,
      infoConfigDialog: !1,
      infoConfigIndex: 0,
      infoModel: [],
      reviewerDialog: !1,
      reviewerIndex: 0,
      maximizedToggle: !0,
      dep_no: JSON.parse(window.localStorage.getItem("userinfo")).dep_no,
      depoptions: [],
      counsellorlabel: localStorage.getItem("counsellorlabel"),
      cId: this.$route.query.compositeId,
      shareDisable: !1,
      isHarmonyOS: !1,
    };
  },
  destroyed() {
    window.removeEventListener("popstate", this.goBack, !1);
  },
  computed: {},
  mounted() {
    (window.localStorage.getItem("menu") &&
      (this.menuInfo = JSON.parse(window.localStorage.getItem("menu")).find(
        (e) => "message" === e.id,
      )),
      this.$axiosAction("/api/public.api", {
        action: "queryResultOfFunction",
        functionName: "basic.f_query_option_list('frequency')",
      }).then((e) => {
        0 === e.data.code && (this.frequencyList = e.data.list);
      }),
      this.$axiosAction("/api/public.api", {
        action: "queryResultOfFunction",
        functionName: "basic.f_query_option_list('apply_switch')",
      }).then((e) => {
        0 === e.data.code && (this.applySwitchList = e.data.list);
      }),
      this.$route.params && this.$route.params.record
        ? (this.getDepList(2),
          (this.record = this.$route.params.record),
          (this.record.appointed_date = this.record.appointed_date
            ? this.record.appointed_date
            : [{ begin_time: "", end_time: "" }]),
          (this.record.attachment = this.record.attachment ? this.record.attachment : []),
          (this.record.loop_frequency = this.record.loop_frequency
            ? this.record.loop_frequency
            : []),
          (this.record.task_target = this.record.task_target ? this.record.task_target : []),
          (this.record.task_target_excluding = this.record.task_target_excluding
            ? this.record.task_target_excluding
            : []),
          (this.record.info_config = this.record.info_config ? this.record.info_config : []),
          (this.record.reviewer = this.record.reviewer ? this.record.reviewer : []),
          (this.record.composite_id = this.record.composite_id ? this.record.composite_id : null),
          (this.shareDisable = null !== this.record.composite_id))
        : this.getDepList(1),
      window.history &&
        window.history.pushState &&
        (history.pushState(null, null, document.URL),
        window.addEventListener("popstate", this.goBack, !1)),
      this.$route.params &&
        this.$route.params.taskTarget &&
        (this.record.task_target = this.$route.params.taskTarget
          ? this.$route.params.taskTarget
          : []),
      null !== this.cId &&
        void 0 !== this.cId &&
        (void 0 !== this.$route.query.compositeTitle &&
          (this.record.title = this.$route.query.compositeTitle + "-" + this.menuInfo.title),
        (this.shareDisable = !0)),
      this.detectOperatingSystem());
  },
  methods: {
    detectOperatingSystem() {
      const e = navigator.userAgent.toLowerCase();
      e.indexOf("harmonyos") >= 0 || e.indexOf("huawei") >= 0 || e.indexOf("emui") >= 0
        ? (this.isHarmonyOS = !0)
        : (e.indexOf("android") >= 0 || e.indexOf("linux") >= 0) && (this.isHarmonyOS = !1);
    },
    matchingUploadedFiles(e, t) {
      return e.reduce(
        (e, i) =>
          t && t.length > 0
            ? 0 ===
              t.reduce((e, t) => {
                if (t.xhr.response) {
                  const s = JSON.parse(t.xhr.response);
                  return s.servername === i.servername ? e + 1 : e;
                }
                return e;
              }, 0)
              ? e.concat(i)
              : e
            : e.concat(i),
        [],
      );
    },
    afterUploaded(e) {
      const t = JSON.parse(e.xhr.response);
      t.error
        ? this.$showErrorNotify(t.error)
        : this.record.attachment
          ? this.record.attachment.push(t)
          : (this.record.attachment = [t]);
    },
    checkFile(e) {
      return e.filter((e) => {
        if (e.size >= 10485760) return (this.$showErrorNotify("文件大小应限制在10M以内"), !1);
        const t = e.name.lastIndexOf(".");
        if (!(t > 0)) return (this.$showErrorNotify("不支持该类型文件上传"), !1);
        {
          const i = e.name.substring(t + 1).toLowerCase();
          if (-1 === this.$appConf.fileExts.indexOf(i))
            return (this.$showErrorNotify("不支持该类型文件上传"), !1);
        }
        return !0;
      });
    },
    onRejected(e) {
      this.$q.notify({ type: "negative", message: `${e.length}份文件不符合格式限制！` });
    },
    afterRemoved(e) {
      for (const t of e) {
        const e = JSON.parse(t.xhr.response);
        this.removeFile(e.servername);
      }
    },
    removeFile(e) {
      const t = this.record.attachment.findIndex((t) => t.servername === e);
      this.record.attachment.splice(t, 1);
    },
    downloadUploaderFile(e) {
      const t = JSON.parse(e.xhr.response);
      Object(d["c"])(t.link, t.srcname);
    },
    downloadFile(e, t) {
      Object(d["c"])(e, t);
    },
    addAppointedDate() {
      this.record.appointed_date.splice(this.record.appointed_date.length, 0, {
        begin_time: "",
        end_time: "",
      });
    },
    removeAppointedDate(e) {
      this.record.appointed_date.splice(e, 1);
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
    addReviewer(e) {
      (this.record.reviewer.splice(e, 0, { review_level: e + 1, teacher: [] }),
        (this.reviewerIndex = e),
        (this.reviewerDialog = !0));
    },
    editReviewer(e) {
      ((this.reviewerIndex = e), (this.reviewerDialog = !0));
    },
    deleteReviewer(e) {
      ((this.reviewerIndex = 0),
        (this.record.reviewer = this.record.reviewer.reduce(
          (t, i, s) => (e === s ? t : t.concat({ review_level: s + 1, teacher: i.teacher })),
          [],
        )));
    },
    moveReviewer(e, t) {
      ((this.reviewerIndex = 0),
        this.record.reviewer.splice(e + t, 0, this.record.reviewer.splice(e, 1)[0]),
        (this.record.reviewer = this.record.reviewer.reduce(
          (e, t, i) => e.concat({ review_level: i + 1, teacher: t.teacher }),
          [],
        )));
    },
    saveRecord() {
      if (!this.record.detail) return void this.$showErrorNotify("请填写通知正文");
      if (!this.record.task_target || 0 === this.record.task_target.length)
        return void this.$showErrorNotify(`请设置${this.menuInfo.title}对象`);
      if (!this.record.info_config || 0 === this.record.info_config.length)
        return void this.$showErrorNotify("请设置信息收集项目");
      if (
        (("" !== this.record.dep_no && void 0 !== this.record.dep_no) ||
          (this.record.dep_no = null),
        "A" === this.record.frequency)
      ) {
        const e = this.record.appointed_date.reduce(
            (e, t) => e.concat(t.begin_time + "-" + t.end_time),
            [],
          ),
          t = [...new Set(e)];
        if (e.length > t.length) return this.$showErrorNotify("指定日期开始截止时间段不能重复！");
        const i = this.record.appointed_date.reduce((e, t) => e.concat(t.begin_time), []),
          s = [...new Set(i)];
        if (i.length > s.length) return this.$showErrorNotify("指定日期开始时间不能重复！");
      }
      this.$q.loading.show();
      const e = o()({}, this.record);
      ((e.attachment =
        e.attachment && e.attachment.length > 0 ? JSON.stringify(e.attachment) : null),
        (e.task_target = JSON.stringify(e.task_target)),
        (e.task_target_excluding =
          e.task_target_excluding && e.task_target_excluding.length > 0
            ? JSON.stringify(e.task_target_excluding)
            : null),
        (e.info_config =
          e.info_config && e.info_config.length > 0 ? JSON.stringify(e.info_config) : null),
        (e.reviewer = e.reviewer && e.reviewer.length > 0 ? JSON.stringify(e.reviewer) : null),
        "S" === e.frequency
          ? ((e.loop_frequency = null),
            (e.loop_begin_date = null),
            (e.loop_end_date = null),
            (e.loop_begin_time = null),
            (e.loop_end_time = null),
            (e.appointed_date = null))
          : "L" === e.frequency
            ? ((e.single_begin_time = null),
              (e.single_end_time = null),
              (e.appointed_date = null),
              (e.loop_frequency = JSON.stringify(e.loop_frequency)))
            : "A" === e.frequency &&
              ((e.single_begin_time = null),
              (e.single_end_time = null),
              (e.loop_frequency = null),
              (e.loop_begin_date = null),
              (e.loop_end_date = null),
              (e.loop_begin_time = null),
              (e.loop_end_time = null),
              (e.appointed_date = JSON.stringify(e.appointed_date))),
        null !== this.cId && void 0 !== this.cId
          ? (e.composite_id = this.$route.query.compositeId)
          : (e.composite_id = this.record.composite_id),
        this.$axiosAction("/api/teacher/message/message.api", o()({ action: "insert" }, e))
          .then((e) => {
            (0 === e.data.code && this.goBack(), this.$q.loading.hide());
          })
          .catch((e) => {
            this.$q.loading.hide();
          }));
    },
    goBack() {
      this.$router.push("/teacher/message/messageIndex");
    },
    submitForm() {
      this.$refs.form.submit();
    },
    getDepList(e) {
      this.$axiosAction("/api/public.api", {
        action: "queryResultOfFunction",
        functionName: "basic.f_query_department_list()",
      })
        .then((t) => {
          0 === t.data.code &&
            ((this.depoptions = t.data.list),
            1 === e &&
              (this.record.dep_no = this.depoptions.find((e) => e.value === this.dep_no).value));
        })
        .catch((e) => {
          this.options = [];
        });
    },
  },
};
export default componentOptions;
