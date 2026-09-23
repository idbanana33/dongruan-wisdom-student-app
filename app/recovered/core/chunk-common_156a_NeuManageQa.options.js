/**
 * Vue options object recovered from webpack module AST.
 * Source: assets/www/js/chunk-common.js -> module "156a"
 * Route: (shared/core)
 * Component: NeuManageQa
 * Not guaranteed standalone: imports/module aliases must be resolved from sibling .logic.js.
 */
const componentOptions = {
  name: "NeuManageQa",
  props: {
    taskMenuId: { type: String, required: !0 },
    taskId: { type: String, required: !0 },
    readonly: { type: Boolean, required: !0 },
  },
  data() {
    return {
      tMenuId: "",
      tId: "",
      fabPos: [30, 20],
      dialog: !1,
      viewMode: !0,
      askingList: [],
      answerList: [],
      message: "",
      tab: "unAnswer",
      user: window.localStorage.userinfo ? JSON.parse(window.localStorage.getItem("userinfo")) : {},
    };
  },
  mounted() {
    ((this.tMenuId = this.taskMenuId),
      (this.tId = this.taskId),
      (this.viewMode = this.readonly),
      this.loadList());
  },
  watch: {
    taskMenuId(e) {
      ((this.tMenuId = e), this.loadList());
    },
    taskId(e) {
      ((this.tId = e), this.loadList());
    },
    readonly(e) {
      this.viewMode = e;
    },
  },
  methods: {
    loadList() {
      if (!this.tMenuId || !this.tId) return ((this.askingList = []), void (this.answerList = []));
      (this.$axiosAction("/api/teacher/basic/qa.api", {
        action: "queryAskingList",
        task_menu_id: this.tMenuId,
        task_id: this.tId,
      })
        .then((e) => {
          0 === e.data.code && (this.askingList = e.data.result);
        })
        .catch((e) => {
          this.askingList = [];
        }),
        this.$axiosAction("/api/teacher/basic/qa.api", {
          action: "queryAnswerList",
          task_menu_id: this.tMenuId,
          task_id: this.tId,
        })
          .then((e) => {
            0 === e.data.code && (this.answerList = e.data.result);
          })
          .catch((e) => {
            this.answerList = [];
          }));
    },
    submitAnswer(e) {
      const t = o()({}, this.askingList[e]);
      t.answer
        ? (this.$q.loading.show(),
          this.$axiosAction("/api/teacher/basic/qa.api", o()({ action: "answerQa" }, t))
            .then((e) => {
              (this.loadList(), this.$q.loading.hide());
            })
            .catch((e) => {
              this.$q.loading.hide();
            }))
        : this.$showErrorNotify("请填写回答内容");
    },
    leaveMessage() {
      this.tMenuId && this.tId
        ? this.message
          ? (this.$q.loading.show(),
            this.$axiosAction("/api/teacher/basic/qa.api", {
              action: "leaveMessage",
              task_menu_id: this.tMenuId,
              task_id: this.tId,
              message: this.message,
            })
              .then((e) => {
                (0 === e.data.code && this.loadList(),
                  this.$q.loading.hide(),
                  (this.dialog = !1),
                  (this.message = ""));
              })
              .catch((e) => {
                this.$q.loading.hide();
              }))
          : this.$showErrorNotify("请填写留言内容")
        : this.$showErrorNotify("参数设置有误");
    },
    setTop(e, t) {
      (this.$q.loading.show(),
        this.$axiosAction("/api/teacher/basic/qa.api", {
          action: t ? "setTop" : "cancelTop",
          task_menu_id: this.tMenuId,
          task_id: this.tId,
          id: e,
        })
          .then((e) => {
            (0 === e.data.code && this.loadList(), this.$q.loading.hide());
          })
          .catch((e) => {
            this.$q.loading.hide();
          }));
    },
    deleteQa(e, t) {
      (this.$q.loading.show(),
        this.$axiosAction("/api/teacher/basic/qa.api", {
          action: "deleteQa",
          task_menu_id: this.tMenuId,
          task_id: this.tId,
          id: e,
          parent_id: t,
        })
          .then((e) => {
            (0 === e.data.code && this.loadList(), this.$q.loading.hide());
          })
          .catch((e) => {
            this.$q.loading.hide();
          }));
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
