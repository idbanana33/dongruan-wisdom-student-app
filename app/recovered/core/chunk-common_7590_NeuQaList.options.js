/**
 * Vue options object recovered from webpack module AST.
 * Source: assets/www/js/chunk-common.js -> module "7590"
 * Route: (shared/core)
 * Component: NeuQaList
 * Not guaranteed standalone: imports/module aliases must be resolved from sibling .logic.js.
 */
const componentOptions = {
  name: "NeuQaList",
  props: { taskMenuId: String, taskId: String },
  data() {
    return {
      messageList: [],
      contact: null,
      fabPos: [30, 40],
      dialog: !1,
      user: window.localStorage.userinfo ? JSON.parse(window.localStorage.getItem("userinfo")) : {},
    };
  },
  mounted() {
    this.getQuestion();
  },
  methods: {
    getQuestion() {
      this.$axiosAction("/api/student/basic/qa.api", {
        action: "getQaQuestionList",
        task_menu_id: this.taskMenuId,
        task_id: this.taskId,
      }).then((e) => {
        this.messageList = e.data.result;
      });
    },
    updateQuestion() {
      if (null == this.contact || "" === this.contact) return this.$showErrorNotify("问题不能为空");
      this.$axiosAction("/api/student/basic/qa.api", {
        action: "AddQaQuestion",
        task_menu_id: this.taskMenuId,
        task_id: this.taskId,
        role_type: "S",
        login_name: this.user.login_name,
        content: this.contact,
      }).then((e) => {
        (this.getQuestion(), (this.contact = null), (this.dialog = !1));
      });
    },
    moveFab(e) {
      ((this.draggingFab = !0 !== e.isFirst && !0 !== e.isFinal),
        (this.fabPos = [this.fabPos[0] - e.delta.x, this.fabPos[1] - e.delta.y]));
    },
    open() {
      this.dialog = !0;
    },
  },
};
export default componentOptions;
