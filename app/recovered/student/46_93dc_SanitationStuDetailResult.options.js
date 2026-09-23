/**
 * Vue options object recovered from webpack module AST.
 * Source: assets/www/js/46.js -> module "93dc"
 * Route: /student/sanitation/detailResult
 * Component: SanitationStuDetailResult
 * Not guaranteed standalone: imports/module aliases must be resolved from sibling .logic.js.
 */
const componentOptions = {
  name: "SanitationStuDetailResult",
  components: { NeuWidget: n["a"] },
  data() {
    return {
      menuInfo: null,
      id: void 0,
      rId: void 0,
      resultAll: {
        check_date: "",
        room_name: "",
        info_result: [],
        stu_info_result: [],
        info_config: [],
        stu_info_config: [],
      },
      stuConfigTitle: "个人检查结果",
    };
  },
  mounted() {
    (window.localStorage.getItem("menu") &&
      (this.menuInfo = JSON.parse(window.localStorage.getItem("menu")).find(
        (t) => "sanitation" === t.id,
      )),
      (this.id = this.$route.query.id),
      (this.rId = this.$route.query.rId),
      this.$axiosAction("/api/student/sanitation/sanitation.api", {
        action: "querySanitationStuResultList",
        id: this.id,
        rId: this.rId,
      })
        .then((t) => {
          0 === t.data.code &&
            (0 === t.data.result.list.length
              ? (this.$showErrorNotify("该条信息不存在或您权限不足"), this.goBack())
              : ((this.resultAll = i()({}, t.data.result.list[0])),
                0 === this.resultAll.stu_info_config.length
                  ? (this.stuConfigTitle = "无个人检查结果")
                  : 0 === this.resultAll.stu_info_result.length &&
                    (this.stuConfigTitle = "个人检查结果教师未填写")));
        })
        .catch((t) => {
          this.resultAll = {};
        }));
  },
  methods: {
    goBack() {
      this.$router.push("/student/sanitation/index");
    },
  },
};
export default componentOptions;
