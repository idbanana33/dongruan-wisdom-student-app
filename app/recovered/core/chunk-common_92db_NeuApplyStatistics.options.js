/**
 * Vue options object recovered from webpack module AST.
 * Source: assets/www/js/chunk-common.js -> module "92db"
 * Route: (shared/core)
 * Component: NeuApplyStatistics
 * Not guaranteed standalone: imports/module aliases must be resolved from sibling .logic.js.
 */
const componentOptions = {
  name: "NeuApplyStatistics",
  props: {
    id: String,
    title: String,
    task_target: Array,
    noticeStatistics: String,
    confirm_flag: Number,
  },
  data() {
    return { list: [] };
  },
  mounted() {
    this.loadList();
  },
  watch: {
    id(e) {
      ((this.id = e), this.loadList());
    },
    title(e) {
      ((this.title = e), this.loadList());
    },
    noticeStatistics(e) {
      ((this.noticeStatistics = e), this.loadList());
    },
  },
  methods: {
    loadList() {
      this.id &&
        this.title &&
        this.$axiosAction("/api/teacher/notice/notice.api", {
          action: "getNoticeNumList",
          notice_id: this.id,
          noticeStatistics: this.noticeStatistics,
        })
          .then((e) => {
            0 === e.data.code && (this.list = e.data.feedbackResult);
          })
          .catch((e) => {
            this.list = [];
          });
    },
  },
};
export default componentOptions;
