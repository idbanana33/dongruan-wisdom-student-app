/**
 * Vue options object recovered from webpack module AST.
 * Source: assets/www/js/58.js -> module "9ddf"
 * Route: /teacher/achievement/index
 * Component: achievementIndex
 * Not guaranteed standalone: imports/module aliases must be resolved from sibling .logic.js.
 */
const componentOptions = {
  name: "achievementIndex",
  data() {
    return {
      stuNo: this.$route.query.stuNo,
      menuInfo: null,
      leave: [],
      leaveMutil: [],
      sign: [],
      notice: [],
      joblogCount: 0,
      apply: [],
      apply_c: {},
      sanitationCount: 0,
      roleSet: !1,
      titleTip: "正在加载",
      teacherInfoSet: ["教工号", "姓名", "性别", "院系", "角色", "手机号", "App接入"],
      teacherInfo: [],
      user: window.localStorage.userinfo ? JSON.parse(window.localStorage.getItem("userinfo")) : {},
      TeacherTitle: "教师综合统计",
      process: [],
      processGate: [],
    };
  },
  mounted() {
    (this.stuNo === this.user.login_name && (this.TeacherTitle = "综合统计"),
      window.localStorage.getItem("menu") &&
        ((this.menuInfo = JSON.parse(window.localStorage.getItem("menu")).find(
          (t) => "achievement" === t.id,
        )),
        void 0 === this.menuInfo && (this.menuInfo = { view_permit: "S" })),
      this.getAchievement());
  },
  methods: {
    goBack() {
      this.$router.push("/teacher/index");
    },
    getAchievement() {
      (this.$q.loading.show(),
        this.$axiosAction("/api/teacher/achievement/achievement.api", {
          action: "getAchievement",
          stuNo: this.stuNo,
          view_permit: this.menuInfo.view_permit,
        })
          .then((t) => {
            if (0 === t.data.code) {
              ((this.leave = t.data.leave),
                (this.leaveMutil = t.data.leaveMulti),
                (this.sign = t.data.sign),
                (this.notice = t.data.notice),
                (this.joblogCount = t.data.joblog.count),
                (this.sanitationCount = t.data.sanitation.count),
                (this.apply = t.data.apply),
                (this.apply_c = t.data.apply_c),
                (this.process = t.data.process),
                (this.processGate = t.data.process_gate));
              const e = Object.values(t.data.teaInfo);
              ((this.teacherInfo = e), (this.roleSet = !0));
            } else ((this.roleSet = !1), (this.titleTip = "您没有访问权限"));
            this.$q.loading.hide();
          })
          .catch((t) => {}));
    },
  },
};
export default componentOptions;
