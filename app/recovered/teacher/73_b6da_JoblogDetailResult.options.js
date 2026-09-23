/**
 * Vue options object recovered from webpack module AST.
 * Source: assets/www/js/73.js -> module "b6da"
 * Route: /teacher/joblog/detailresult
 * Component: JoblogDetailResult
 * Not guaranteed standalone: imports/module aliases must be resolved from sibling .logic.js.
 */
const componentOptions = {
  name: "JoblogDetailResult",
  components: { NeuWidget: r["a"] },
  data() {
    return {
      roleId: JSON.parse(window.localStorage.getItem("userinfo")).role_id,
      teacherNo: "",
      menuInfo: null,
      jobId: null,
      detailType: "",
      joblogRstId: null,
      getAllowDelete: !1,
      infoModel: [],
      infoConfig: [],
      viewMode: !0,
      result: { info_result: [] },
      teacher_no_ing: JSON.parse(window.localStorage.getItem("userinfo")).login_name,
    };
  },
  mounted() {
    ((this.jobId = this.$route.query.jobId),
      (this.joblogRstId = this.$route.query.joblogRstId),
      (this.teacherNo = this.$route.query.teacher_no),
      (this.getAllowDelete = "true" === this.$route.query.getAllowDelete),
      (this.detailType = this.$route.query.type),
      window.localStorage.getItem("menu") &&
        (this.menuInfo = JSON.parse(window.localStorage.getItem("menu")).find(
          (e) => "joblog" === e.id,
        )));
    const e = window.localStorage.getItem("joblog_result_detail"),
      t = window.localStorage.getItem("joblog_infoConfig"),
      o = JSON.parse(e),
      i = JSON.parse(t);
    ((this.result = s()({}, o)),
      (this.infoConfig = s()({}, i)),
      ("u" !== this.detailType && "n" !== this.detailType) || (this.viewMode = !1));
  },
  methods: {
    goBack() {
      this.$router.push("/teacher/joblog/Detail?id=" + this.jobId);
    },
    submitJoblogResult() {
      const e = s()({}, this.result);
      ((e.info_result = JSON.stringify(e.info_result)),
        this.$axiosAction(
          "/api/teacher/joblog/joblog.api",
          s()({ action: e.id ? "updateJoblogResult" : "insertJoblogResult" }, e),
        )
          .then((e) => {
            0 === e.data.code &&
              ((this.editDialog = !1),
              this.$router.push("/teacher/joblog/Detail?id=" + this.jobId));
          })
          .catch((e) => {}));
    },
    deleteJoblogResult() {
      this.$q
        .dialog({
          title: "确认删除",
          message: "该工作日志内容将被删除。</span>",
          html: !0,
          persistent: !0,
          cancel: { label: "取消", outline: !0, color: "grey" },
          ok: { label: "删除", unelevated: !0, color: "negative" },
        })
        .onOk(() => {
          this.$axiosAction("/api/teacher/joblog/joblog.api", {
            action: "deleteJoblogResult",
            id: this.joblogRstId,
          })
            .then((e) => {
              0 === e.data.code && this.$router.push("/teacher/joblog/Detail?id=" + this.jobId);
            })
            .catch((e) => {});
        });
    },
  },
};
export default componentOptions;
