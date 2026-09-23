/**
 * Vue options object recovered from webpack module AST.
 * Source: assets/www/js/101.js -> module "32f5"
 * Route: /teacher/process/detail
 * Component: processTeaDetails
 * Not guaranteed standalone: imports/module aliases must be resolved from sibling .logic.js.
 */
const componentOptions = {
  name: "processTeaDetails",
  components: { NeuWidget: c["a"] },
  data() {
    return {
      id: this.$route.query.id,
      menuType: "",
      userinfo: window.localStorage.userinfo
        ? JSON.parse(window.localStorage.getItem("userinfo"))
        : null,
      process_id: this.$route.query.process_id,
      menuInfo: null,
      viewMode: !0,
      record: {},
      opinion: "",
      edit_permit: null,
      review_list: [],
      create_time_short: "",
      level: 0,
      color: "",
      review_level: this.$route.query.review_level,
      tab: this.$route.query.tab,
      nextTeacher: [],
      theNextTeacher: !1,
      service_flag: "N",
      writeOpinion: !1,
      besureMastTeacher: "",
    };
  },
  computed: {},
  destroyed() {
    window.removeEventListener("popstate", this.goBack, !1);
  },
  mounted() {
    (window.localStorage.getItem("menu") &&
      ((this.service_flag = this.$route.query.service_flag),
      "N" === this.service_flag ? (this.menuType = "process") : (this.menuType = "process_gate"),
      (this.menuInfo = JSON.parse(window.localStorage.getItem("menu")).find(
        (e) => e.id === this.menuType,
      ))),
      this.getProcessReviewInfo(),
      window.history &&
        window.history.pushState &&
        (history.pushState(null, null, document.URL),
        window.addEventListener("popstate", this.goBack, !1)));
  },
  methods: {
    goBack() {
      this.$router.push(
        "/teacher/process/list?tab=" +
          this.tab +
          "&type_id=" +
          this.$route.query.type_id +
          "&service_flag=" +
          this.service_flag,
      );
    },
    getProcessReviewInfo() {
      (this.$q.loading.show(),
        this.$axiosAction("/api/teacher/process/process.api", {
          action: "getProcessDetail",
          id: this.id,
          process_id: this.process_id,
          review_level: this.review_level,
          teacher_no: this.userinfo.login_name,
          tab: this.tab,
        }).then((e) => {
          const t = e.data.result.list;
          if (((this.record = t[0]), "W" === this.record.review_status)) {
            const e = t.findIndex((e) => e.teacher_no === this.userinfo.login_name);
            this.record = e > -1 ? t[e] : t[t.length - 1];
          }
          this.nextTeacher = e.data.nextTeacher.nextTeacher;
          const s = this.nextTeacher.findIndex((e) => e.teacher_no === this.userinfo.login_name);
          ((this.theNextTeacher = s > -1),
            void 0 === this.record
              ? ((this.record = { sex: null, review_status: null, process_type_name: null }),
                this.$showErrorNotify("该流程被撤回，或已被审批"),
                this.goBack())
              : ((this.id = this.record.prid),
                "R" === this.record.review_status
                  ? (this.color = "red")
                  : "A" === this.record.review_status
                    ? (this.color = "green")
                    : "W" === this.record.review_status && (this.color = "teal"),
                (this.review_list = e.data.review_list.review_list),
                this.review_list.length > 0 &&
                  (this.besureMastTeacher =
                    this.review_list[this.review_list.length - 1].teacher_no)),
            this.$q.loading.hide());
        }));
    },
    Operation(e) {
      const t = [];
      let s = "";
      for (let i = 0; i < this.record.info_config.length; i++) {
        const e = Object(n["a"])(this.record.info_config[i], this.record.info_result[i]);
        e &&
          (t.push(this.record.info_config[i].label),
          (s =
            t.length > 1
              ? s + "、" + this.record.info_config[i].label
              : this.record.info_config[i].label));
      }
      t.length > 0 && "A" === e
        ? this.$q
            .dialog({
              title: "确认通过",
              message: '<span class="text-red">' + s + "存在风险，是否通过</span>",
              html: !0,
              persistent: !0,
              cancel: { label: "取消", outline: !0, color: "grey" },
              ok: { label: "通过", unelevated: !0, color: "negative" },
            })
            .onOk(() => {
              this.getWarnSure(e);
            })
        : this.getWarnSure(e);
    },
    getWarnSure(e) {
      (this.$q.loading.show(),
        "A" === e &&
          this.record.review_level < this.record.process_reviewer.length &&
          (this.level = this.record.review_level + 1));
      const t = [],
        s = {};
      ((s.id = this.id),
        (s.reviewStatus = e),
        (s.opinion = this.opinion),
        (s.level = this.level),
        (s.levelIng = this.record.review_level),
        (s.process_id = this.process_id),
        (s.student_no = this.record.student_no),
        (s.process_type_id = this.record.process_type_id),
        (s.process_type_name = this.record.process_type_name),
        (s.create_time = this.record.create_time),
        (s.name = this.record.name),
        (s.service_flag = this.service_flag),
        (s.menu_id = this.menuType),
        (s.menuTypeName = this.menuInfo.title),
        t.push(s),
        this.$axiosAction("/api/teacher/process/process.api", {
          action: "updateProcessReview",
          resultViews: t,
        }).then((e) => {
          (0 === e.data.code &&
            (e.data.result.length > 0
              ? this.$showErrorNotify(
                  e.data.result[0] + "下一级审批人被删除或无权限，请刷新或联系管理员",
                )
              : (this.$showSuccessNotify("操作成功"), this.goBack())),
            this.$q.loading.hide());
        }));
    },
    deleteProcess() {
      this.$q
        .dialog({
          title: "删除该流程",
          message: "确定要删除此流程数据吗？",
          persistent: !0,
          cancel: { label: "返回", outline: !0, color: "grey" },
          ok: { label: "确定", unelevated: !0, color: "negative" },
        })
        .onOk(() => {
          (this.$q.loading.show(),
            this.$axiosAction("/api/teacher/process/process.api", {
              action: "deleteProcessAll",
              id: this.process_id,
              role_id: this.userinfo.role_id,
            })
              .then((e) => {
                (0 === e.data.code && this.goBack(), this.$q.loading.hide());
              })
              .catch((e) => {
                this.goBack();
              }));
        });
    },
    RefuseProcess() {
      this.writeOpinion = !0;
    },
    Operations() {
      (this.$q.loading.show(), (this.level = this.review_list.length + 1));
      const e = [],
        t = { reviewStatus: "R" };
      ((t.opinion = this.opinion),
        (t.review_level = this.level),
        (t.process_id = this.process_id),
        (t.student_no = this.record.student_no),
        (t.process_type_id = this.record.process_type_id),
        (t.process_type_name = this.record.process_type_name),
        (t.create_time = this.record.create_time),
        (t.name = this.record.name),
        (t.service_flag = this.service_flag),
        (t.menu_id = this.menuType),
        (t.menuTypeName = this.menuInfo.title),
        e.push(t),
        this.$axiosAction(
          "/api/teacher/process/process.api",
          o()({ action: "updateProcessRefuse" }, e[0]),
        ).then((e) => {
          (0 === e.data.code && this.goBack(), this.$q.loading.hide());
        }));
    },
  },
};
export default componentOptions;
