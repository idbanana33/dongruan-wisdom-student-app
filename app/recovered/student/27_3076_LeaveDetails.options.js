/**
 * Vue options object recovered from webpack module AST.
 * Source: assets/www/js/27.js -> module "3076"
 * Route: /student/leave/detail
 * Component: LeaveDetails
 * Not guaranteed standalone: imports/module aliases must be resolved from sibling .logic.js.
 */
const componentOptions = {
  name: "LeaveDetails",
  components: { vueQr: l.a, NeuFullScreenImage: n["a"] },
  data() {
    return {
      serverUrl: window.localStorage.server,
      details: {},
      user: {},
      qrShowingDialog: !1,
      downloadData: { text: "" },
      reviewNum: 0,
      bigPicUrl: "",
      bigPicName: "",
      showBigPic: !1,
      m_teacher_name: "",
      review_num: "",
      showReview: 0,
      m_teacher_no: "",
      review_list: [],
      create_time_short: "",
      needReport: 0,
      firstTeacherNo: "",
      nextTeacher: [],
      userInfo: JSON.parse(window.localStorage.getItem("userinfo")),
    };
  },
  computed: {},
  destroyed() {
    window.removeEventListener("popstate", this.goBack, !1);
  },
  mounted() {
    (this.getLeaveInfo(),
      window.history &&
        window.history.pushState &&
        (history.pushState(null, null, document.URL),
        window.addEventListener("popstate", this.goBack, !1)));
  },
  methods: {
    clearScan() {
      ((this.qrShowingDialog = !1), clearInterval(this.setInter));
    },
    showBig(e, t) {
      ((this.bigPicUrl = e), (this.bigPicName = t), (this.showBigPic = !0));
    },
    goBack() {
      this.$router.push("/student/leave/index");
    },
    goReport() {
      this.$router.push(
        `/student/leave/reportleave?id=${this.details.id}&teacher_no=${this.firstTeacherNo}&begin_time=${this.details.begin_time}&end_time=${this.details.end_time}`,
      );
    },
    getLeaveInfo() {
      ((this.user = JSON.parse(localStorage.getItem("userinfo"))),
        this.$axiosAction("/api/student/leave/leave.api", {
          action: "getLeaveInfo",
          login_name: this.user.login_name,
          leave_id: parseInt(this.$route.query.leave_id),
        }).then((e) => {
          const t = e.data.list;
          ((this.needReport = t.need_report),
            (this.reviewNum = e.data.review_num.count),
            (t.leave_time = t.short_time + "(" + t.time_info + ")"),
            (this.details = t),
            (this.nextTeacher = e.data.nextTeacher),
            null !== e.data.list.leave_multi_id
              ? ((this.showReview = 1), this.getMultiReviewInfo(e.data.list.leave_multi_id))
              : ((this.showReview = 0),
                (this.details.review_list = e.data.review_list),
                (this.firstTeacherNo = e.data.review_list[0].teacher_no)));
        }));
    },
    getMultiReviewInfo(e) {
      this.$axiosAction("/api/student/leave/leave.api", {
        action: "getMultiLeaveInfoReview",
        id: e,
      }).then((e) => {
        ((this.review_list = e.data.review_list),
          (this.m_teacher_name = e.data.list.teacher_name),
          (this.m_teacher_no = e.data.list.teacher_no),
          (this.firstTeacherNo = e.data.list.teacher_no),
          (this.create_time_short = e.data.list.create_time_short));
      });
    },
    deleteLeave() {
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
          this.$axiosAction("/api/student/leave/leave.api", {
            action: "deleteLeave",
            leave_id: parseInt(this.$route.query.leave_id),
          }).then((e) => {
            0 === e.data.code && this.$router.push("/student/leave/index");
          });
        });
    },
    showQrCode() {
      ((this.qrShowingDialog = !0),
        this.getEncryptionQrCode(),
        (this.setInter = setInterval(() => {
          this.getEncryptionQrCode();
        }, 6e4)));
    },
    getEncryptionQrCode() {
      (this.$q.loading.show(),
        this.$axiosAction("/api/student/leave/leave.api", {
          action: "getEncryptionQrCode",
          leave_id: this.details.id,
        }).then((e) => {
          (0 === e.data.code && (this.downloadData.text = e.data.qrcode), this.$q.loading.hide());
        }));
    },
  },
};
export default componentOptions;
