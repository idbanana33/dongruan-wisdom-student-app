/**
 * Vue options object recovered from webpack module AST.
 * Source: assets/www/js/82.js -> module "965e"
 * Route: /teacher/leave/multidetail
 * Component: MultiLeaveDetail
 * Not guaranteed standalone: imports/module aliases must be resolved from sibling .logic.js.
 */
const componentOptions = {
  name: "MultiLeaveDetail",
  components: { NeuFullScreenImage: r["a"] },
  data() {
    return {
      serverUrl: window.localStorage.server,
      menuInfo: null,
      historyDialog: !1,
      record: {},
      history: [],
      chooseReview: null,
      opition: "",
      pageType: 0,
      bigPicUrl: "",
      bigPicName: "",
      showBigPic: !1,
      parameter: {
        leave_multi_id: "",
        begin_time: null,
        end_time: null,
        leaveTypeId: null,
        attachment: null,
        contact: null,
        location: null,
        walk_out: null,
        reason: "",
      },
      leave_teacher_no: "",
      leave_teacher_name: "",
      tab: this.$route.query.tab,
      r_status: "",
      students: [],
      nextTeacher: [],
    };
  },
  destroyed() {
    window.removeEventListener("popstate", this.goBack, !1);
  },
  mounted() {
    (window.localStorage.getItem("menu") &&
      (this.menuInfo = JSON.parse(window.localStorage.getItem("menu")).find(
        (e) => "leave" === e.id,
      )),
      window.history &&
        window.history.pushState &&
        (history.pushState(null, null, document.URL),
        window.addEventListener("popstate", this.goBack, !1)),
      this.menuInfo
        ? this.getLeaveReviewInfo()
        : ((this.pageType = 1),
          this.$q.notify({
            color: "red-5",
            textColor: "white",
            icon: "warning",
            message: "您没有权限执行此操作！",
          }),
          this.$router.push("/teacher/index")));
  },
  computed: {},
  methods: {
    deleteMultiLeave() {
      this.$q
        .dialog({
          title: "确认撤回",
          message: '该请假及其产生的<span class="text-red">数据将被清空。</span>',
          html: !0,
          persistent: !0,
          cancel: { label: "取消", outline: !0, color: "grey" },
          ok: { label: "撤回", unelevated: !0, color: "negative" },
        })
        .onOk(() => {
          this.$axiosAction("/api/teacher/leave/leave.api", {
            action: "deleteMultiLeave",
            leave_multi_id: parseInt(this.$route.query.id),
          }).then((e) => {
            0 === e.data.code && this.$router.push("/teacher/leave/index");
          });
        });
    },
    showBig(e, t) {
      ((this.bigPicUrl = e), (this.bigPicName = t), (this.showBigPic = !0));
    },
    getLeaveReviewInfo() {
      this.$axiosAction("/api/teacher/leave/leave.api", {
        action: "getMultiLeaveInfo",
        id: parseInt(this.$route.query.id),
        pageSize: 30,
        pageNum: 1,
      }).then((e) => {
        if (2001 === e.data.code)
          ((this.pageType = 1),
            this.$router.push(`/teacher/leave/multilist?tab=${this.$route.query.tab}`));
        else {
          this.pageType = 0;
          const t = e.data.list;
          if (
            ((t.leave_period = t.short_time + "(" + t.time_info + ")"),
            (this.students = e.data.list.students),
            (this.nextTeacher = e.data.nextTeacher),
            (this.parameter.leave_multi_id = t.id),
            (this.parameter.begin_time = t.begin_time),
            (this.parameter.end_time = t.end_time),
            (this.parameter.leaveTypeId = t.leave_type_id),
            (this.parameter.attachment = t.attachment),
            (this.parameter.contact = t.contact),
            (this.parameter.location = t.location),
            (this.parameter.walk_out = t.walk_out),
            (this.parameter.reason = t.reason),
            (this.leave_teacher_no = t.teacher_no),
            (this.leave_teacher_name = t.name),
            (t.review_list = e.data.review_list),
            "" !== t.location &&
              null !== t.location &&
              ((t.location = { name: t.location.address }), (t.location = t.location.name)),
            "review" === this.$route.query.tab && 0 !== e.data.review_s.length)
          ) {
            const t = e.data.review_s.length - 1;
            "W" === e.data.review_s[t].review_status
              ? (this.r_status = e.data.review_s[t].review_status)
              : (this.r_status = "");
          }
          this.record = t;
        }
      });
    },
    Operation(e) {
      if (null === this.menuInfo.edit_permit)
        this.$q.notify({
          color: "red-5",
          textColor: "white",
          icon: "warning",
          message: "您没有权限执行此操作！",
        });
      else {
        (null === this.parameter.attachment
          ? (this.parameter.attachment = "")
          : (this.parameter.attachment = JSON.stringify(this.parameter.attachment)),
          null === this.parameter.location
            ? (this.parameter.location = "")
            : (this.parameter.location = JSON.stringify(this.parameter.location)),
          null === this.parameter.contact && (this.parameter.contact = ""));
        const t = JSON.parse(localStorage.getItem("userinfo"));
        ((this.chooseReview = 1 === e ? "A" : "R"),
          this.$axiosAction("/api/teacher/leave/leave.api", {
            action: "updateMultiLeaveReview",
            leave_teacher_no: this.leave_teacher_no,
            leave_teacher_name: this.leave_teacher_name,
            id: parseInt(this.$route.query.id),
            review_status: this.chooseReview,
            leave_multi_id: this.parameter.leave_multi_id,
            opinion: this.opition,
            leave_type_id: this.parameter.leaveTypeId,
            begin_time: this.parameter.begin_time,
            end_time: this.parameter.end_time,
            attachment: this.parameter.attachment,
            contact: this.parameter.contact,
            location: this.parameter.location,
            walk_out: this.parameter.walk_out,
            reason: this.parameter.reason,
            teacher_name: t.name,
            teacher_no: t.login_name,
            student_no_list: this.students,
          }).then((e) => {
            0 === e.data.code && this.getLeaveReviewInfo();
          }));
      }
    },
    getStudentHistory(e, t) {
      this.$router.push(
        `/teacher/leave/multiHistory?teacher_no=${e}&id=${this.$route.query.id}&teacher_name=${t}&tab=${this.$route.query.tab}`,
      );
    },
    showStudent() {
      this.$router.push(
        `/teacher/leave/multiStudent?students=${encodeURIComponent(JSON.stringify(this.students))}&id=${this.$route.query.id}&tab=${this.$route.query.tab}`,
      );
    },
    goBack() {
      this.$router.push(`/teacher/leave/multilist?tab=${this.$route.query.tab}`);
    },
  },
};
export default componentOptions;
