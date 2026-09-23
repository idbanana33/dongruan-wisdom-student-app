/**
 * Vue options object recovered from webpack module AST.
 * Source: assets/www/js/68.js -> module "ad93"
 * Route: /teacher/basic/teaInfo
 * Component: BasicTeaInfo
 * Not guaranteed standalone: imports/module aliases must be resolved from sibling .logic.js.
 */
const componentOptions = {
  name: "BasicTeaInfo",
  data() {
    return {
      record: {},
      commonCols: [
        { label: "教工号", field: "login_name" },
        { label: "姓名", field: "name" },
        { label: "性别", field: "sex_name" },
        { label: "院系", field: "dep_name" },
        { label: "角色", field: "role_name" },
        { label: "身份证号", field: "id_card" },
        { label: "手机号", field: "mob" },
      ],
    };
  },
  mounted() {
    this.loadData();
  },
  methods: {
    loadData() {
      this.$axiosAction("/api/teacher/basic/teaInfo.api", { action: "queryMyTeaInfo" }).then(
        (e) => {
          0 === e.data.code && (this.record = e.data.result);
        },
      );
    },
    goBack() {
      this.$router.push("/teacher/index");
    },
    moveTo(e, a, t) {
      this.$router.push({ path: e, query: { [a]: t } });
    },
  },
};
export default componentOptions;
