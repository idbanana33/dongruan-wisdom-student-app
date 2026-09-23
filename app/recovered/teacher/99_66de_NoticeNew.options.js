/**
 * Vue options object recovered from webpack module AST.
 * Source: assets/www/js/99.js -> module "66de"
 * Route: /teacher/notice/new
 * Component: NoticeNew
 * Not guaranteed standalone: imports/module aliases must be resolved from sibling .logic.js.
 */
const componentOptions = {
  name: "NoticeNew",
  components: {
    NeuAssignStudent: n["a"],
    NeuAssignTeacher: l["a"],
    NeuViewAssignedTeacher: c["a"],
  },
  data() {
    return {
      editorToolBar: JSON.parse(window.localStorage.editorToolBar),
      editorFonts: JSON.parse(window.localStorage.editorFonts),
      menuInfo: null,
      uploader: window.localStorage.server + this.$appConf.fileUploader,
      noticePriorityList: [],
      record: {
        notice_priority: "N",
        title: "",
        detail: "",
        attachment: [],
        feedback_deadline: "",
        confirm_flag: 0,
        fixed_time_flag: 0,
        fixed_time: "",
        task_target: [],
        share_target: [],
        dep_no: null,
        stu_manage_flag: 0,
        composite_id: null,
      },
      assignDialog: !1,
      shareDialog: !1,
      taskTargetDialog: !1,
      maximizedToggle: !0,
      dep_no: JSON.parse(localStorage.getItem("userinfo")).dep_no,
      depoptions: [],
      cId: this.$route.query.compositeId,
      compositeShareDialog: !1,
      shareDisable: !1,
      isHarmonyOS: !1,
    };
  },
  destroyed() {
    window.removeEventListener("popstate", this.goBack, !1);
  },
  mounted() {
    (window.localStorage.getItem("menu") &&
      (this.menuInfo = JSON.parse(window.localStorage.getItem("menu")).find(
        (e) => "notice" === e.id,
      )),
      this.$axiosAction("/api/public.api", {
        action: "queryResultOfFunction",
        functionName: "basic.f_query_option_list('notice_priority')",
      }).then((e) => {
        0 === e.data.code && (this.noticePriorityList = e.data.list);
      }),
      this.$route.params && this.$route.params.record
        ? (this.getDepList(2),
          (this.record = this.$route.params.record),
          (this.record.attachment = this.record.attachment ? this.record.attachment : []),
          (this.record.task_target = this.record.task_target ? this.record.task_target : []),
          (this.record.share_target = this.record.share_target ? this.record.share_target : []))
        : this.getDepList(1),
      window.history &&
        window.history.pushState &&
        (history.pushState(null, null, document.URL),
        window.addEventListener("popstate", this.goBack, !1)),
      this.$route.params &&
        this.$route.params.taskTarget &&
        (this.record.task_target = this.$route.params.taskTarget),
      null !== this.cId &&
        void 0 !== this.cId &&
        ((this.record.title = this.$route.query.compositeTitle + "-" + this.menuInfo.title),
        (this.record.share_target = this.$route.params.share_target
          ? this.$route.params.share_target
          : []),
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
        (e, a) =>
          t && t.length > 0
            ? 0 ===
              t.reduce((e, t) => {
                if (t.xhr.response) {
                  const r = JSON.parse(t.xhr.response);
                  return r.servername === a.servername ? e + 1 : e;
                }
                return e;
              }, 0)
              ? e.concat(a)
              : e
            : e.concat(a),
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
          const a = e.name.substring(t + 1).toLowerCase();
          if (-1 === this.$appConf.fileExts.indexOf(a))
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
    saveRecord() {
      if (!this.record.detail) return void this.$showErrorNotify("请填写通知正文");
      if (!this.record.task_target || 0 === this.record.task_target.length)
        return void this.$showErrorNotify("请设置通知对象");
      (("" !== this.record.dep_no && void 0 !== this.record.dep_no) || (this.record.dep_no = null),
        this.$q.loading.show());
      const e = o()({}, this.record);
      ((e.attachment =
        e.attachment && e.attachment.length > 0 ? JSON.stringify(e.attachment) : null),
        (e.task_target = JSON.stringify(e.task_target)),
        (e.share_target =
          e.share_target && e.share_target.length > 0 ? JSON.stringify(e.share_target) : null),
        null !== this.cId && void 0 !== this.cId
          ? (e.composite_id = this.$route.query.compositeId)
          : (e.composite_id = this.record.composite_id),
        this.$axiosAction("/api/teacher/notice/notice.api", o()({ action: "insert" }, e))
          .then((e) => {
            (0 === e.data.code && this.goBack(), this.$q.loading.hide());
          })
          .catch((e) => {
            this.$q.loading.hide();
          }));
    },
    goBack() {
      null !== this.cId && void 0 !== this.cId
        ? this.$router.push("/teacher/composite/detail?id=" + this.$route.query.compositeId)
        : this.$router.push("/teacher/notice/index");
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
    openSharetarget() {
      this.compositeShareDialog = !0;
    },
  },
};
export default componentOptions;
