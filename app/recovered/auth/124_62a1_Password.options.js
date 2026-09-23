/**
 * Vue options object recovered from webpack module AST.
 * Source: assets/www/js/124.js -> module "62a1"
 * Route: /user/password
 * Component: Password
 * Not guaranteed standalone: imports/module aliases must be resolved from sibling .logic.js.
 */
const componentOptions = {
  name: "Password",
  data() {
    return {
      oldpassword: null,
      newpassword: null,
      password2: null,
      isPwd0: !0,
      isPwd: !0,
      isPwd2: !0,
    };
  },
  methods: {
    checkPwd(t) {
      const s = new RegExp(
        "^(?=.*[A-Z])(?=.*[a-z])(?=.*[0-9])(?=.*[~!@#$%^&*)(_+}{|:?><]).{8,30}$",
      );
      return !!s.test(t) || "密码中必须包含大小写字母、数字、特殊字符，至少8个字符，最多30个字符。";
    },
    validConfirmPwd() {
      this.$refs.password2.validate();
    },
    onSubmit() {
      let t = "";
      ((t =
        "S" === JSON.parse(window.localStorage.userinfo).role_type
          ? "updateStudentPassword"
          : "T" === JSON.parse(window.localStorage.userinfo).role_type
            ? "updateTeacherPassword"
            : "updateMaintainerPassword"),
        this.$axiosAction("/api/user/user.api", {
          action: t,
          id: window.localStorage.userinfo.id,
          oldpassword: this.oldpassword,
          newpassword: this.newpassword,
        }).then((t) => {
          0 === t.data.code && this.$router.push("/user/login");
        }));
    },
    goBack() {
      this.$router.push("/user/account");
    },
  },
};
export default componentOptions;
