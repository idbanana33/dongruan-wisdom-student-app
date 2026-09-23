/**
 * Vue options object recovered from webpack module AST.
 * Source: assets/www/js/15.js -> module "589c"
 * Route: /maintainer/repairOrder
 * Component: repairOrder
 * Not guaranteed standalone: imports/module aliases must be resolved from sibling .logic.js.
 */
const componentOptions = {
  name: "repairOrder",
  data() {
    return {
      uploader: window.localStorage.server + this.$appConf.fileUploader,
      filesMaxNumber: null,
      user: {},
      record: {
        id: "",
        order: null,
        maintainer_no: null,
        fault_type_id: "",
        repair_description: null,
        repair_attachments: [],
      },
      fault_type_list: [],
      repairId: this.$route.query.id,
      checkFileType: ["jpg", "png", "jpeg", "mp4"],
      isHarmonyOS: !1,
    };
  },
  destroyed() {
    window.removeEventListener("popstate", this.goBack, !1);
  },
  mounted() {
    ((this.user = JSON.parse(localStorage.getItem("userinfo"))),
      window.history &&
        window.history.pushState &&
        (history.pushState(null, null, document.URL),
        window.addEventListener("popstate", this.goBack, !1)),
      this.getInfo(),
      this.getSelectList(),
      this.detectOperatingSystem());
  },
  methods: {
    detectOperatingSystem() {
      const e = navigator.userAgent.toLowerCase();
      e.indexOf("harmonyos") >= 0 || e.indexOf("huawei") >= 0 || e.indexOf("emui") >= 0
        ? (this.isHarmonyOS = !0)
        : (e.indexOf("android") >= 0 || e.indexOf("linux") >= 0) && (this.isHarmonyOS = !1);
    },
    getInfo() {
      this.$axiosAction("/api/teacher/basic/maintainer.api", {
        action: "queryForRepairOrder",
        id: this.repairId,
      }).then((e) => {
        this.record = e.data.info;
      });
    },
    getSelectList() {
      this.$axiosAction("/api/teacher/basic/maintainer.api", {
        action: "queryListForFaultType",
      }).then((e) => {
        this.fault_type_list = e.data.fault_type_list;
      });
    },
    onRejected(e) {
      this.$q.notify({ type: "negative", message: `${e.length}份文件不符合格式限制！` });
    },
    afterUploaded(e) {
      const t = JSON.parse(e.xhr.response);
      t.error
        ? this.$showErrorNotify(t.error)
        : this.record.repair_attachments
          ? this.record.repair_attachments.push(t)
          : (this.record.repair_attachments = [t]);
    },
    afterRemoved(e) {
      for (const t of e) {
        const e = JSON.parse(t.xhr.response);
        this.removeFile(e.servername);
      }
    },
    removeFile(e) {
      const t = this.record.repair_attachments.findIndex((t) => t.servername === e);
      this.record.repair_attachments.splice(t, 1);
    },
    matchingUploadedFiles(e, t) {
      return (e || []).reduce(
        (e, r) =>
          t && t.length > 0
            ? 0 ===
              t.reduce((e, t) => {
                if (t.xhr.response) {
                  const a = JSON.parse(t.xhr.response);
                  return a.servername === r.servername ? e + 1 : e;
                }
                return e;
              }, 0)
              ? e.concat(r)
              : e
            : e.concat(r),
        [],
      );
    },
    onSubmit() {
      null !== this.record.repair_attachments && this.record.repair_attachments.length > 3
        ? this.$showErrorNotify("最多可上传3个文件")
        : (null !== this.record.repair_attachments && 0 !== this.record.repair_attachments.length
            ? (this.record.repair_attachments = JSON.stringify(this.record.repair_attachments))
            : (this.record.repair_attachments = null),
          this.$axiosAction(
            "/api/teacher/basic/maintainer.api",
            n()({ action: "updateMaintainerRepairOrderInfo" }, this.record),
          ).then((e) => {
            0 === e.data.code
              ? (this.$q.loading.hide(), this.$router.push("/maintainer/repairList"))
              : this.$q.loading.hide();
          }));
    },
    goBack() {
      this.$router.push("/maintainer/repairList");
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
