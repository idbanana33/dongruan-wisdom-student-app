/**
 * Vue options object recovered from webpack module AST.
 * Source: assets/www/js/45.js -> module "b25f"
 * Route: /student/repair/new
 * Component: NewRepair
 * Not guaranteed standalone: imports/module aliases must be resolved from sibling .logic.js.
 */
const componentOptions = {
  components: {},
  name: "NewRepair",
  data() {
    return {
      doType: "",
      menuInfo: null,
      user: {},
      uploader: window.localStorage.server + this.$appConf.fileUploader,
      filesMaxNumber: null,
      record: {
        id: "",
        name: "",
        stu_number: "",
        dep_name: "",
        mob: "",
        repair_type: "",
        repair_range: "",
        address: "",
        fault_type: "",
        description: "",
        visit_time: "",
        attachment: [],
      },
      repair_type_list: [],
      repair_range_list: [],
      fault_type_list: [],
      checkFileType: ["jpg", "png", "jpeg", "mp4"],
      isHarmonyOS: !1,
    };
  },
  computed: {},
  mounted() {
    ((this.doType = this.$route.query.type),
      "update" === this.doType && this.getInfo(),
      window.localStorage.getItem("menu") &&
        (this.menuInfo = JSON.parse(window.localStorage.getItem("menu")).find(
          (e) => "leave" === e.id,
        )),
      (this.user = JSON.parse(localStorage.getItem("userinfo"))),
      this.getSelectList(),
      this.detectOperatingSystem());
  },
  watch: {},
  methods: {
    detectOperatingSystem() {
      const e = navigator.userAgent.toLowerCase();
      e.indexOf("harmonyos") >= 0 || e.indexOf("huawei") >= 0 || e.indexOf("emui") >= 0
        ? (this.isHarmonyOS = !0)
        : (e.indexOf("android") >= 0 || e.indexOf("linux") >= 0) && (this.isHarmonyOS = !1);
    },
    goBack() {
      this.$router.push("/student/repair/index");
    },
    getSelectList() {
      this.$axiosAction("/api/student/repair/repair.api", {
        action: "queryListForRepairType",
        login_name: this.user.login_name,
      }).then((e) => {
        ((this.record.name = this.user.name),
          (this.record.login_name = this.user.login_name),
          (this.record.dep_name = e.data.dep_name),
          (this.repair_type_list = e.data.repair_type_list),
          (this.repair_range_list = e.data.repair_range_list),
          (this.fault_type_list = e.data.fault_type_list));
      });
    },
    getInfo() {
      this.$axiosAction("/api/student/repair/repair.api", {
        action: "query",
        id: this.$route.query.id,
      }).then((e) => {
        this.record = e.data.info;
      });
    },
    onRejected(e) {
      this.$q.notify({ type: "negative", message: `${e.length}份文件不符合格式限制！` });
    },
    afterUploaded(e) {
      const t = JSON.parse(e.xhr.response);
      t.error
        ? this.$showErrorNotify(t.error)
        : this.record.attachment
          ? this.record.attachment.push(t)
          : (this.record.attachment = [t]);
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
    onSubmit() {
      null !== this.record.attachment && this.record.attachment.length > 3
        ? this.$showErrorNotify("最多可上传3个文件")
        : null !== this.record.description && this.record.description.length > 200
          ? this.$showErrorNotify("故障描述不得超过200字")
          : ((this.record.attachment =
              null !== this.record.attachment ? JSON.stringify(this.record.attachment) : null),
            this.$axiosAction(
              "/api/student/repair/repair.api",
              o()({ action: this.doType }, this.record),
            ).then((e) => {
              0 === e.data.code
                ? (this.$q.loading.hide(), this.$router.push("/student/repair/index"))
                : ((this.record.attachment =
                    "string" === typeof this.record.attachment
                      ? JSON.parse(this.record.attachment)
                      : this.record.attachment),
                  this.$q.loading.hide());
            }));
    },
    matchingUploadedFiles(e, t) {
      if (((e = "string" === typeof e ? JSON.parse(e) : e), "update" === this.doType && null != e))
        return (e || []).reduce(
          (e, r) =>
            t && t.length > 0
              ? 0 ===
                t.reduce((e, t) => {
                  if (t.xhr.response) {
                    const s = JSON.parse(t.xhr.response);
                    return s.servername === r.servername ? e + 1 : e;
                  }
                  return e;
                }, 0)
                ? e.concat(r)
                : e
              : e.concat(r),
          [],
        );
    },
    checkFile(e) {
      return e.filter((e) => {
        if (e.size >= 31457280) return (this.$showErrorNotify("文件大小应限制在30M以内"), !1);
        const t = e.name.lastIndexOf(".");
        if (!(t > 0)) return (this.$showErrorNotify("不支持该类型文件上传"), !1);
        {
          const r = e.name.substring(t + 1).toLowerCase();
          if (-1 === this.checkFileType.indexOf(r))
            return (this.$showErrorNotify("不支持该类型文件上传"), !1);
        }
        return !0;
      });
    },
  },
};
export default componentOptions;
