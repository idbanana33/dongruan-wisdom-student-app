/**
 * Vue options object recovered from webpack module AST.
 * Source: assets/www/js/76.js -> module "efa0"
 * Route: /teacher/leave/detail
 * Component: LeaveDetail
 * Not guaranteed standalone: imports/module aliases must be resolved from sibling .logic.js.
 */
const componentOptions = {
  name: "LeaveDetail",
  components: { NeuFullScreenImage: o["a"] },
  data() {
    return {
      serverUrl: window.localStorage.server,
      paging: { pageSize: 30, pageNum: 1, rowCount: 1, pageCount: 1, startIndex: 1, endIndex: 1 },
      menuInfo: null,
      historyDialog: !1,
      record: {},
      history: [],
      pagination: { rowsPerPage: 0 },
      chooseReview: null,
      opition: "",
      leaveTypeId: null,
      student_no: null,
      r_review: {},
      begin_time: null,
      end_time: null,
      student_name: null,
      pageType: 0,
      bigPicUrl: "",
      bigPicName: "",
      showBigPic: !1,
      m_teacher_name: "",
      review_num: "",
      showReview: 0,
      m_teacher_no: "",
      review_list: [],
      create_time_short: "",
      courseInfoDialog: !1,
      courseInfo: [],
      courseInfoTitle: "",
      nextTeacher: [],
      userinfo: window.localStorage.userinfo
        ? JSON.parse(window.localStorage.getItem("userinfo"))
        : {},
      writeOpinion: !1,
      leaveLevel: 0,
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
      this.menuInfo
        ? this.getLeaveReviewInfo()
        : ((this.pageType = 1),
          this.$q.notify({
            color: "red-5",
            textColor: "white",
            icon: "warning",
            message: "您无权限查看此详情！",
          }),
          this.$router.push("/teacher/index")),
      window.history &&
        window.history.pushState &&
        (history.pushState(null, null, document.URL),
        window.addEventListener("popstate", this.goBack, !1)));
  },
  computed: {},
  methods: {
    showBig(e, t) {
      ((this.bigPicUrl = e), (this.bigPicName = t), (this.showBigPic = !0));
    },
    getLeaveReviewInfo() {
      const e = JSON.parse(localStorage.getItem("userinfo"));
      this.$axiosAction("/api/teacher/leave/leave.api", {
        action: "getLeaveReviewInfo",
        id: parseInt(this.$route.query.id),
        pageSize: this.paging.pageSize,
        pageNum: this.paging.pageNum,
        teacher_no: e.login_name,
      }).then((e) => {
        if (2001 === e.data.code)
          ((this.pageType = 1),
            this.$router.push(`/teacher/leave/list?tab=${this.$route.query.tab}`));
        else {
          this.pageType = 0;
          const t = e.data.reviewInfo,
            s = e.data.leaveByStudent.list;
          ((this.r_review = e.data.reviewStauts[0]),
            (t.leave_period = t.short_time + "(" + t.time_info + ")"),
            (this.begin_time = t.begin_time),
            (this.end_time = t.end_time),
            (t.review_list = e.data.review_list),
            (this.leaveLevel = e.data.review_list.length + 1),
            null !== t.leave_multi_id
              ? ((this.showReview = 1), this.getMultiReviewInfo(t.leave_multi_id))
              : (this.showReview = 0),
            (this.record = t),
            (this.nextTeacher = e.data.nextTeacher),
            (this.student_no = t.student_no),
            (this.leaveTypeId = t.leave_type_id),
            (this.student_name = t.name));
          for (let e = 0; e < s.length; e++)
            s[e].leave_period = s[e].short_time + "(" + s[e].time_info + ")";
          this.history = s;
          const {
            pageSize: a,
            pageNum: i,
            rowCount: r,
            pageCount: o,
            startIndex: l,
            endIndex: c,
          } = n()({}, e.data.leaveByStudent);
          this.paging = {
            pageSize: a,
            pageNum: i,
            rowCount: r,
            pageCount: o,
            startIndex: l,
            endIndex: c,
          };
        }
      });
    },
    showCourseInfo(e, t, s, a) {
      ((this.courseInfo = []),
        (this.courseInfoDialog = !0),
        (this.courseInfoTitle = t),
        this.$axiosAction("api/teacher/leave/leave.api", {
          action: "getStudentCourseInfo",
          student_no: e,
        }).then((e) => {
          if (0 === e.data.code) {
            const t = new Date(s),
              i = new Date(a),
              r = [];
            for (const s in e.data.list.course_info) {
              const a = new Date(s);
              t <= a &&
                a <= i &&
                r.push({
                  date: s,
                  content: e.data.list.course_info[s]
                    .replace(/(\r\n)/g, "<br>")
                    .replace(/\n/g, "<br>"),
                });
            }
            this.courseInfo = r;
          }
        }));
    },
    getMultiReviewInfo(e) {
      this.$axiosAction("/api/teacher/leave/leave.api", {
        action: "getMultiLeaveTeacherInfo",
        id: e,
      }).then((e) => {
        ((this.review_list = e.data.review_list),
          (this.m_teacher_name = e.data.list.teacher_name),
          (this.m_teacher_no = e.data.list.teacher_no),
          (this.create_time_short = e.data.list.create_time_short));
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
        const t = JSON.parse(localStorage.getItem("userinfo"));
        this.chooseReview = 1 === e ? "A" : "R";
        let s = "updateLeaveReview";
        (this.writeOpinion && (s = "updateLeaveRefuse"),
          this.$axiosAction("/api/teacher/leave/leave.api", {
            action: s,
            teacher_no: t.login_name,
            id: parseInt(this.$route.query.id),
            review_status: this.chooseReview,
            opinion: this.opition,
            leave_type_id: this.leaveTypeId,
            begin_time: this.begin_time,
            end_time: this.end_time,
            student_no: this.student_no,
            student_name: this.student_name,
            leave_level: this.leaveLevel,
          }).then((e) => {
            0 === e.data.code && this.getLeaveReviewInfo();
          }));
      }
    },
    getStudentHistory(e, t) {
      this.$router.push(
        `/teacher/leave/history?student_no=${e}&id=${this.$route.query.id}&student_name=${t}&tab=${this.$route.query.tab}`,
      );
    },
    goBack() {
      this.$router.push(`/teacher/leave/list?tab=${this.$route.query.tab}`);
    },
    RefuseLeave() {
      ((this.opition = ""), (this.writeOpinion = !0));
    },
    forceOperation() {
      this.Operation(2);
    },
  },
};
export default componentOptions;
