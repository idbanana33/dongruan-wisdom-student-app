/**
 * Vue options object recovered from webpack module AST.
 * Source: assets/www/js/123.js -> module "1e4d"
 * Route: /user/passport
 * Component: Passport
 * Not guaranteed standalone: imports/module aliases must be resolved from sibling .logic.js.
 */
const componentOptions = {
  name: "Passport",
  data() {
    return {
      direction: this.$route.query.direction,
      status: "ng",
      color: "",
      message: "",
      info: {},
      currentTime: "",
      count: 0,
      countInterval: null,
      commonCols: [
        { label: "学号", field: "login_name" },
        { label: "姓名", field: "name" },
        { label: "性别", field: "sex_name" },
        { label: "年级", field: "grade_name" },
        { label: "班级", field: "class_name" },
        { label: "专业", field: "major_name" },
        { label: "院系", field: "dep_name" },
        { label: "培养层次", field: "edu_level_name" },
        { label: "学籍状态", field: "school_roll_status" },
        { label: "寝室", field: "room_name" },
      ],
    };
  },
  mounted() {
    this.showPassport();
  },
  computed: {
    imageUrl() {
      return `${cordova.file.applicationDirectory}www/img/${this.direction}-college-${this.status}.png`;
    },
  },
  destroyed() {
    clearInterval(this.countInterval);
  },
  methods: {
    showPassport() {
      this.$axiosAction(
        "/api/user/passport.api",
        { action: "queryPassport", direction: this.direction },
        "post",
        !1,
      ).then((e) => {
        ((this.message = e.data.message),
          (this.info = e.data.info),
          (this.currentTime = e.data.currentTime),
          0 === e.data.code
            ? ((this.status = "ok"), (this.color = "bg-green"))
            : ((this.status = "ng"), (this.color = "bg-red")),
          (this.count = 0),
          (this.countInterval = setInterval(() => {
            (this.count >= 59 && (clearInterval(this.countInterval), this.showPassport()),
              this.count++,
              (this.currentTime += 1e3));
          }, 1e3)));
      });
    },
    goBack() {
      "S" === JSON.parse(window.localStorage.userinfo).role_type
        ? this.$router.push("/student/index")
        : this.$router.push("/teacher/index");
    },
  },
};
export default componentOptions;
