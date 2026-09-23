/**
 * Vue options object recovered from webpack module AST.
 * Source: assets/www/js/30.js -> module "750d"
 * Route: /student/leave/reportleave
 * Component: ReportLeave
 * Not guaranteed standalone: imports/module aliases must be resolved from sibling .logic.js.
 */
const componentOptions = {
  components: { NeuGeoLocation: o["a"] },
  name: "ReportLeave",
  data() {
    return {
      menuInfo: null,
      uploader: window.localStorage.server + this.$appConf.fileUploader,
      model: null,
      text: "",
      filesMaxNumber: null,
      location: { point: null, address: null, addressComponents: null },
      research: 0,
      locationStatus: !1,
      user: {},
      attachment: [],
      showPicList: [],
      atta: "",
      inLocal: !1,
      reportNeedPicture: 0,
    };
  },
  computed: {},
  mounted() {
    window.localStorage.getItem("menu") &&
      (this.menuInfo = JSON.parse(window.localStorage.getItem("menu")).find(
        (t) => "leave" === t.id,
      ));
  },
  methods: {
    checkOutReportFlag() {
      this.location.point.lng &&
        this.location.point.lat &&
        this.$axiosAction("/api/student/leave/leave.api", {
          action: "checkOutReportFlag",
          lng: this.location.point.lng,
          lat: this.location.point.lat,
        }).then((t) => {
          0 === t.data.code &&
            ((this.inLocal = t.data.result.range),
            (this.reportNeedPicture = t.data.result.report_need_picture));
        });
    },
    locationCompleted(t) {
      ((this.location = t),
        this.checkOutReportFlag(),
        this.locationStatus && ((this.locationStatus = !1), this.saveSunmit(1)));
    },
    goBackLeave() {
      this.$router.push(`/student/leave/detail?leave_id=${this.$route.query.id}`);
    },
    onRejected(t) {
      this.$q.notify({ type: "negative", message: `${t.length}份文件不符合格式限制！` });
    },
    afterUploaded(t) {
      this.showPicList = [];
      const e = JSON.parse(t.xhr.response);
      (e.error
        ? this.$showErrorNotify(e.error)
        : this.attachment
          ? this.attachment.push(e)
          : (this.attachment = [e]),
        this.addUrl());
    },
    afterRemoved(t) {
      for (const e of t) {
        const t = JSON.parse(e.xhr.response);
        this.removeFile(t.servername);
      }
    },
    addUrl() {
      for (let t = 0; t < this.attachment.length; t++)
        this.showPicList.push({
          link: encodeURI(`${window.localStorage.server}${this.attachment[t].link}`),
          servername: this.attachment[t].servername,
        });
    },
    removeFile(t) {
      this.showPicList = [];
      const e = this.attachment.findIndex((e) => e.servername === t);
      (this.attachment.splice(e, 1), this.addUrl());
    },
    onSubmit() {
      1 === this.reportNeedPicture && 0 === this.attachment.length
        ? this.$q.notify({
            color: "red-5",
            textColor: "white",
            icon: "warning",
            message: "请上传附件！",
          })
        : ((this.locationStatus = !0), (this.research = this.research + 1));
    },
    locationError(t) {
      this.$showErrorNotify("定位失败,不能销假");
    },
    saveSunmit(t) {
      ((this.atta = JSON.stringify(this.attachment)),
        this.$q.loading.show(),
        (this.user = JSON.parse(localStorage.getItem("userinfo"))),
        this.$axiosAction("/api/student/leave/leave.api", {
          action: "updateLeaveReport",
          id: parseInt(this.$route.query.id),
          report_attachment: this.atta,
          report_location: JSON.stringify(this.location),
          student_name: this.user.name,
          teacher_no: this.$route.query.teacher_no,
          begin_time: this.$route.query.begin_time,
          end_time: this.$route.query.end_time,
        }).then((t) => {
          0 === t.data.code
            ? ((this.atta = ""), this.$q.loading.hide(), this.goBackLeave())
            : this.$q.loading.hide();
        }));
    },
  },
};
export default componentOptions;
