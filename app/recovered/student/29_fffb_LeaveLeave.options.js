/**
 * Vue options object recovered from webpack module AST.
 * Source: assets/www/js/29.js -> module "fffb"
 * Route: /student/leave/leave
 * Component: LeaveLeave
 * Not guaranteed standalone: imports/module aliases must be resolved from sibling .logic.js.
 */
const componentOptions = {
  components: { NeuGeoLocation: o["a"] },
  name: "LeaveLeave",
  data() {
    return {
      menuInfo: null,
      uploader: window.localStorage.server + this.$appConf.fileUploader,
      model: null,
      location_share: "0",
      city_out: "0",
      province_out: "0",
      text: "",
      call_person: "",
      filesMaxNumber: null,
      queryModel: { begin_time: "", end_time: "", review_status: "", leave_period: "" },
      location: { point: null, address: null, addressComponents: null },
      research: 0,
      locationStatus: !1,
      user: {},
      type_list: [],
      attachment: [],
      showPicList: [],
      atta: "",
    };
  },
  computed: {},
  mounted() {
    (window.localStorage.getItem("menu") &&
      (this.menuInfo = JSON.parse(window.localStorage.getItem("menu")).find(
        (e) => "leave" === e.id,
      )),
      this.getLeaveType());
  },
  watch: {
    city_out(e) {
      return "1" === e
        ? ((this.location_share = "1"), this.location_share)
        : "0" === e
          ? ((this.province_out = "0"), this.province_out)
          : void 0;
    },
    province_out(e) {
      "1" === e && ((this.location_share = "1"), (this.city_out = "1"));
    },
    location_share(e) {
      "0" === e && ((this.city_out = "0"), (this.province_out = "0"));
    },
  },
  methods: {
    getLeaveType() {
      this.$axiosAction("api/student/leave/leave.api", {
        action: "getLeaveType",
        edit_permit: this.menuInfo.edit_permit,
      }).then((e) => {
        for (let t = 0; t < e.data.list.length; t++) this.type_list.push(e.data.list[t]);
      });
    },
    locationCompleted(e) {
      ((this.location = e),
        this.locationStatus && ((this.locationStatus = !1), this.saveSunmit(1)));
    },
    goBackLeave() {
      this.$router.push("/student/leave/index");
    },
    onRejected(e) {
      this.$q.notify({ type: "negative", message: `${e.length}份文件不符合格式限制！` });
    },
    afterUploaded(e) {
      this.showPicList = [];
      const t = JSON.parse(e.xhr.response);
      (t.error
        ? this.$showErrorNotify(t.error)
        : this.attachment
          ? this.attachment.push(t)
          : (this.attachment = [t]),
        this.addUrl());
    },
    afterRemoved(e) {
      for (const t of e) {
        const e = JSON.parse(t.xhr.response);
        this.removeFile(e.servername);
      }
    },
    addUrl() {
      for (let e = 0; e < this.attachment.length; e++)
        this.showPicList.push({
          link: encodeURI(`${window.localStorage.server}${this.attachment[e].link}`),
          servername: this.attachment[e].servername,
        });
    },
    removeFile(e) {
      this.showPicList = [];
      const t = this.attachment.findIndex((t) => t.servername === e);
      (this.attachment.splice(t, 1), this.addUrl());
    },
    onSubmit() {
      return "1" === this.city_out && "0" === this.location_share
        ? this.$showErrorNotify("需要出市则需要离校必选")
        : "1" === this.province_out && "0" === this.city_out
          ? this.$showErrorNotify("需要出省则需要出市必选")
          : "1" === this.province_out && "0" === this.location_share
            ? this.$showErrorNotify("需要出省则需要离校必选")
            : ((this.locationStatus = !0), void (this.research = this.research + 1));
    },
    locationError(e) {
      this.locationStatus && ((this.locationStatus = !1), this.saveSunmit(2));
    },
    saveSunmit(e) {
      (this.$q.loading.show(),
        (this.user = JSON.parse(localStorage.getItem("userinfo"))),
        this.$axiosAction("/api/student/leave/leave.api", {
          action: "getPassAndLimit",
          leave_type_id: this.model.value,
          begin_time: this.queryModel.begin_time,
          end_time: this.queryModel.end_time,
        }).then((t) => {
          if (2001 !== t.data.code) {
            0 !== this.attachment.length && (this.atta = JSON.stringify(this.attachment));
            let t = {};
            ((t = 1 === e ? JSON.stringify(this.location) : ""),
              this.$axiosAction("/api/student/leave/leave.api", {
                action: "insertLeave",
                student_no: this.user.login_name,
                leave_type_id: this.model.value,
                begin_time: this.queryModel.begin_time,
                end_time: this.queryModel.end_time,
                walk_out: parseInt(this.location_share),
                city_out: this.city_out,
                province_out: this.province_out,
                reason: this.text,
                contact: this.call_person,
                attachment: this.atta,
                location: t,
                student_name: this.user.name,
              }).then((e) => {
                0 === e.data.code
                  ? ((this.atta = ""),
                    this.$q.loading.hide(),
                    this.$router.push("/student/leave/index"))
                  : this.$q.loading.hide();
              }));
          } else this.$q.loading.hide();
        }));
    },
  },
};
export default componentOptions;
