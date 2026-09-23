/**
 * Vue options object recovered from webpack module AST.
 * Source: assets/www/js/96.js -> module "8087"
 * Route: /teacher/news/new
 * Component: newsNew
 * Not guaranteed standalone: imports/module aliases must be resolved from sibling .logic.js.
 */
const componentOptions = {
  name: "newsNew",
  data() {
    return {
      editorToolBar: JSON.parse(window.localStorage.editorToolBar),
      editorFonts: JSON.parse(window.localStorage.editorFonts),
      menuInfo: null,
      news: {
        portal_flag: 0,
        banner_end_date: null,
        detail: "",
        external_flag: "0",
        push_to_student: "0",
        push_to_teacher: "0",
        link: null,
        dep_no: null,
      },
      pushType: 0,
      depoptions: [],
      dep_no: JSON.parse(localStorage.getItem("userinfo")).dep_no,
      roleId: JSON.parse(localStorage.getItem("userinfo")).role_id,
    };
  },
  mounted() {
    (window.localStorage.getItem("menu") &&
      (this.menuInfo = JSON.parse(window.localStorage.getItem("menu")).find(
        (e) => "news" === e.id,
      )),
      this.getDepList());
  },
  methods: {
    goBack() {
      this.$router.push("/teacher/news/index");
    },
    saveNews() {
      (this.news.link && !1 === this.checkLink()) ||
        (this.news.title.length > 50
          ? this.$showErrorNotify("标题长度不能超过50")
          : "0" !== this.news.external_flag || "" !== this.news.detail
            ? ("1" === this.news.external_flag ? (this.news.detail = "") : (this.news.link = ""),
              "1" === this.news.push_to_student && "1" === this.news.push_to_teacher
                ? (this.pushType = 3)
                : "0" === this.news.push_to_student && "1" === this.news.push_to_teacher
                  ? (this.pushType = 1)
                  : "1" === this.news.push_to_student &&
                    "0" === this.news.push_to_teacher &&
                    (this.pushType = 2),
              ("" !== this.news.dep_no && void 0 !== this.news.dep_no) || (this.news.dep_no = null),
              this.$q.loading.show(),
              this.$axiosAction(
                "/api/teacher/news/news.api",
                o()(
                  o()({ action: "insertNews" }, this.news),
                  {},
                  { roleId: this.roleId, pushType: this.pushType },
                ),
              )
                .then((e) => {
                  (0 === e.data.code && this.$router.push("/teacher/news/index"),
                    this.$q.loading.hide());
                })
                .catch((e) => {
                  (this.$q.loading.hide(), (this.list = []));
                }))
            : this.$showErrorNotify("请填写正文"));
    },
    checkLink() {
      const e = this.news.link;
      return (
        "http://" === e.slice(0, 7) ||
        "https://" === e.slice(0, 8) ||
        (this.$showErrorNotify("链接开头必须包含http://或者https://"), !1)
      );
    },
    getDepList() {
      this.$axiosAction("/api/public.api", {
        action: "queryResultOfFunction",
        functionName: "basic.f_query_department_list()",
      })
        .then((e) => {
          0 === e.data.code &&
            ((this.depoptions = e.data.list),
            (this.news.dep_no = this.depoptions.find((e) => e.value === this.dep_no).value));
        })
        .catch((e) => {
          this.options = [];
        });
    },
  },
};
export default componentOptions;
