/**
 * Vue options object recovered from webpack module AST.
 * Source: assets/www/js/26.js -> module "a1b2"
 * Route: /student/experience/index
 * Component: experienceIndex
 * Not guaranteed standalone: imports/module aliases must be resolved from sibling .logic.js.
 */
const componentOptions = {
  name: "experienceIndex",
  data() {
    return {
      stuNo: this.$route.query.stuNo,
      record: {},
      signinCount: "",
      leaveCount: "",
      changeSigninCount: "",
      leaveTimesList: [],
      approvalCount: "",
      rejectCount: "",
      addLeaveCount: "",
      leaveSchoolCount: "",
      leaveCountList: [],
      signinList: [],
      confirmList: [],
      feedbackList: [],
      apply: {},
      signup: {},
      collect: {},
      rulesDialog: !1,
      process: {},
      processGate: {},
    };
  },
  mounted() {
    (this.getStudentMessage(),
      this.getLeaveTimesMessage(),
      this.getLeaveCountMessage(),
      this.getSigninMessage(),
      this.getNoticeConfirmMessage(),
      this.getNoticeFeedbackMessage(),
      this.getApplyMessage(),
      this.getSignupMessage(),
      this.getCollectMessage());
  },
  methods: {
    getStudentMessage() {
      this.$axiosAction("/api/teacher/experience/experience.api", {
        action: "getStudentMessage",
        stuNo: this.stuNo,
      }).then((t) => {
        0 === t.data.code &&
          ((this.record = t.data.result),
          (this.process = t.data.process),
          (this.processGate = t.data.process_gate));
      });
    },
    getLeaveTimesMessage() {
      this.$axiosAction("/api/teacher/experience/experience.api", {
        action: "getStuLeaveTimesMessage",
        stuNo: this.stuNo,
      }).then((t) => {
        0 === t.data.code && (this.leaveTimesList = t.data.result);
      });
    },
    getLeaveCountMessage() {
      this.$axiosAction("/api/teacher/experience/experience.api", {
        action: "getStuLeaveCountMessage",
        stuNo: this.stuNo,
      }).then((t) => {
        0 === t.data.code &&
          ((this.leaveCountList = t.data.result),
          (this.approvalCount = this.leaveCountList[0].approval),
          (this.rejectCount = this.leaveCountList[0].reject),
          (this.addLeaveCount = this.leaveCountList[0].add_leave),
          (this.leaveSchoolCount = this.leaveCountList[0].leave_school));
      });
    },
    getSigninMessage() {
      this.$axiosAction("/api/teacher/experience/experience.api", {
        action: "getStuSigninMessage",
        stuNo: this.stuNo,
      }).then((t) => {
        0 === t.data.code &&
          ((this.signinList = t.data.result),
          (this.signinCount = this.signinList[0].signin_total),
          (this.leaveCount = this.signinList[0].leave),
          (this.changeSigninCount = this.signinList[0].modified_total));
      });
    },
    getNoticeConfirmMessage() {
      this.$axiosAction("/api/teacher/experience/experience.api", {
        action: "getStuNoticeConfirmMessage",
        stuNo: this.stuNo,
      }).then((t) => {
        0 === t.data.code && (this.confirmList = t.data.result);
      });
    },
    getNoticeFeedbackMessage() {
      this.$axiosAction("/api/teacher/experience/experience.api", {
        action: "getStuNoticeFeedbackMessage",
        stuNo: this.stuNo,
      }).then((t) => {
        0 === t.data.code && (this.feedbackList = t.data.result);
      });
    },
    getApplyMessage() {
      this.$axiosAction("/api/teacher/experience/experience.api", {
        action: "getStuApplyMessage",
        stuNo: this.stuNo,
      }).then((t) => {
        0 === t.data.code && (this.apply = t.data.result);
      });
    },
    getSignupMessage() {
      this.$axiosAction("/api/teacher/experience/experience.api", {
        action: "getStuSignupMessage",
        stuNo: this.stuNo,
      }).then((t) => {
        0 === t.data.code && (this.signup = t.data.result);
      });
    },
    getCollectMessage() {
      this.$axiosAction("/api/teacher/experience/experience.api", {
        action: "getStuCollectMessage",
        stuNo: this.stuNo,
      }).then((t) => {
        0 === t.data.code && (this.collect = t.data.result);
      });
    },
    rules() {
      this.rulesDialog = !0;
    },
    goBack() {
      this.$router.push("/student/index");
    },
  },
};
export default componentOptions;
