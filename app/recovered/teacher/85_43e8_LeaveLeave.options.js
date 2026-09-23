/**
 * Vue options object recovered from webpack module AST.
 * Source: assets/www/js/85.js -> module "43e8"
 * Route: /teacher/leave/newMultiLeave
 * Component: LeaveLeave
 * Not guaranteed standalone: imports/module aliases must be resolved from sibling .logic.js.
 */
const componentOptions = {
  components: { NeuGeoLocation: o["a"], NeuAssignStudent: r["a"] },
  name: "LeaveLeave",
  data() {
    return {
      menuInfo: null,
      uploader: window.localStorage.server + this.$appConf.fileUploader,
      model: null,
      location_share: "0",
      city_out: "0",
      province_out: "0",
      call_person: "",
      filesMaxNumber: null,
      queryModel: { begin_time: "", end_time: "", review_status: "", leave_period: "" },
      location: { point: null, address: null, addressComponents: null },
      research: 0,
      locationStatus: !1,
      user: {},
      walk_num: null,
      leave_type_num: 0,
      leave_types: {},
      type_list: [],
      attachment: [],
      showPicList: [],
      atta: "",
      task_target: [],
      taskTargetDialog: !1,
      maximizedToggle: !0,
      text: "",
    };
  },
  computed: {},
  mounted() {
    (window.localStorage.getItem("menu") &&
      (this.menuInfo = JSON.parse(window.localStorage.getItem("menu")).find(
        (t) => "leave" === t.id,
      )),
      this.getLeaveType());
  },
  watch: {
    city_out(t) {
      return "1" === t
        ? ((this.location_share = "1"), this.location_share)
        : "0" === t
          ? ((this.province_out = "0"), this.province_out)
          : void 0;
    },
    province_out(t) {
      "1" === t && ((this.location_share = "1"), (this.city_out = "1"));
    },
    location_share(t) {
      "0" === t && ((this.city_out = "0"), (this.province_out = "0"));
    },
  },
  methods: {
    getLeaveType() {
      this.$axiosAction("api/student/leave/leave.api", {
        action: "getLeaveType",
        edit_permit: this.menuInfo.edit_permit,
      }).then((t) => {
        for (let e = 0; e < t.data.list.length; e++) this.type_list.push(t.data.list[e]);
      });
    },
    locationCompleted(t) {
      ((this.location = t),
        this.locationStatus && ((this.locationStatus = !1), this.saveSubmit(1)));
    },
    goBackLeave() {
      this.$router.push(`/teacher/leave/multilist?tab=${this.$route.query.tab}`);
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
    afterRemoved(t) {
      for (const e of t) {
        const t = JSON.parse(e.xhr.response);
        this.removeFile(t.servername);
      }
    },
    onSubmit() {
      0 === this.task_target.length
        ? this.$showErrorNotify("请选择请假学生")
        : ((this.locationStatus = !0), (this.research = this.research + 1));
    },
    locationError(t) {
      this.locationStatus && ((this.locationStatus = !1), this.saveSubmit(2));
    },
    saveSubmit(t) {
      let e = {};
      ((e = 1 === t ? JSON.stringify(this.location) : ""),
        this.$q.loading.show(),
        (this.user = JSON.parse(localStorage.getItem("userinfo"))),
        this.$axiosAction("/api/teacher/leave/leave.api", {
          action: "getPassAndLimit",
          leave_type_id: this.model.value,
          begin_time: this.queryModel.begin_time,
          end_time: this.queryModel.end_time,
        }).then((t) => {
          2001 !== t.data.code
            ? (0 !== this.attachment.length && (this.atta = JSON.stringify(this.attachment)),
              this.$axiosAction("/api/teacher/leave/leave.api", {
                action: "inserMultitLeave",
                teacher_no: this.user.login_name,
                leave_type_id: this.model.value,
                begin_time: this.queryModel.begin_time,
                task_target: JSON.stringify(this.task_target),
                end_time: this.queryModel.end_time,
                walk_out: parseInt(this.location_share),
                city_out: this.city_out,
                province_out: this.province_out,
                reason: this.text,
                contact: this.call_person,
                attachment: this.atta,
                location: e,
                teacher_name: this.user.name,
              }).then((t) => {
                0 === t.data.code
                  ? ((this.atta = ""),
                    this.$q.loading.hide(),
                    this.$router.push(`/teacher/leave/multilist?tab=${this.$route.query.tab}`))
                  : this.$q.loading.hide();
              }))
            : this.$q.loading.hide();
        }));
    },
  },
};
export default componentOptions;
