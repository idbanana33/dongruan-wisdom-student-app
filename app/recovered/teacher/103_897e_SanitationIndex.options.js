/**
 * Vue options object recovered from webpack module AST.
 * Source: assets/www/js/103.js -> module "897e"
 * Route: /teacher/process/list
 * Component: SanitationIndex
 * Not guaranteed standalone: imports/module aliases must be resolved from sibling .logic.js.
 */
const componentOptions = {
  name: "SanitationIndex",
  components: { NeuExportData: l["a"] },
  data() {
    return {
      roleId: JSON.parse(window.localStorage.getItem("userinfo")).role_id,
      menuType: "",
      menuInfo: null,
      drawerRight: !1,
      teacher_name: "",
      list: [],
      paging: { pageSize: 30, pageNum: 0, pageCount: 0 },
      otherSearch: !1,
      fabPos: [30, 40],
      fab: !0,
      dialog: !1,
      condCount: 0,
      originalCond: {},
      tab: this.$route.query.tab,
      typeName: this.$route.query.typeName,
      queryModel: {
        tab: this.$route.query.tab,
        mutli_search: "",
        status: "",
        begin_time: "",
        end_time: "",
      },
      isLoading: !1,
      operateDisplay: !1,
      selected: [],
      draggingFab: !1,
      reviewStatus: "",
      opinion: "",
      writeOpinion: !1,
      alertDialog: !1,
      resErrorList: [],
      ProcessWarnList: [],
      warnDialog: !1,
      service_flag: "N",
      exportCompConfig: null,
      counsellorlabel: localStorage.getItem("counsellorlabel"),
    };
  },
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
      window.history &&
        window.history.pushState &&
        (history.pushState(null, null, document.URL),
        window.addEventListener("popstate", this.goBack, !1)),
      this.loadList(() => {}));
  },
  methods: {
    refresh(e) {
      this.loadList(e);
    },
    loadList(e) {
      (e && ((this.paging.pageNum = 0), (this.list = [])),
        (this.paging.pageNum += 1),
        (this.isLoading = !0),
        this.$axiosAction(
          "/api/teacher/process/process.api",
          n()(
            n()(
              {
                action: "getTeacherReviewNew",
                pageSize: this.paging.pageSize,
                pageNum: this.paging.pageNum,
              },
              this.queryModel,
            ),
            {},
            { type_id: this.$route.query.type_id },
          ),
        )
          .then((t) => {
            if (0 === t.data.code) {
              this.list = this.list.concat(t.data.result.list);
              const {
                pageSize: e,
                pageNum: s,
                rowCount: a,
                pageCount: i,
                startIndex: o,
                endIndex: r,
              } = n()({}, t.data.result);
              this.paging = {
                pageSize: e,
                pageNum: s,
                rowCount: a,
                pageCount: i,
                startIndex: o,
                endIndex: r,
              };
            } else this.setDefaultList();
            (e && e(), (this.isLoading = !1));
          })
          .catch((t) => {
            (this.setDefaultList(), e && e(), (this.isLoading = !1));
          }));
    },
    setDefaultList() {
      ((this.list = []), (this.paging = { pageSize: 30, pageNum: 0, pageCount: 0 }));
    },
    goBack() {
      this.$router.push(
        "/teacher/process/processTypeList?type_id=" +
          this.$route.query.type_id +
          "&service_flag=" +
          this.service_flag,
      );
    },
    goDetail(e, t, s) {
      this.operateDisplay
        ? document.getElementById("processItem" + s).click()
        : this.$router.push(
            `/teacher/process/detail?process_id=${t}&id=${e}&tab=${this.tab}&type_id=${this.$route.query.type_id}&service_flag=${this.service_flag}`,
          );
    },
    moveFab(e) {
      ((this.draggingFab = !0 !== e.isFirst && !0 !== e.isFinal),
        (this.fabPos = [this.fabPos[0] - e.delta.x, this.fabPos[1] - e.delta.y]));
    },
    open() {
      ((this.dialog = !0),
        (this.originalCond = Object.keys(this.queryModel).reduce(
          (e, t) => ((e[t] = this.queryModel[t]), e),
          {},
        )));
    },
    close() {
      ((this.dialog = !1),
        (this.queryModel = Object.keys(this.originalCond).reduce(
          (e, t) => ((e[t] = this.originalCond[t]), e),
          {},
        )));
    },
    getCondition() {
      if ("" !== this.queryModel.begin_time && "" !== this.queryModel.end_time) {
        const e = this.checkTime();
        if (!e) return this.$showErrorNotify("结束时间应大于开始时间");
      }
      ((this.condCount =
        Object.keys(this.queryModel).reduce((e, t) => (this.queryModel[t] ? e + 1 : e), 0) - 1),
        this.$refs.pageRefresh.trigger(),
        (this.dialog = !1));
    },
    getValue(e) {
      this.queryModel.status === e ? (this.queryModel.status = "") : (this.queryModel.status = e);
    },
    handleHold(e) {
      "reviewing" === this.tab &&
        ((this.operateDisplay = !0), document.getElementById("processItem" + e).click());
    },
    Pass(e) {
      "C" === e
        ? ((this.operateDisplay = !1), (this.selected = []), (this.fab = !0))
        : 0 !== this.selected.length
          ? ((this.reviewStatus = e), (this.writeOpinion = !0))
          : this.$q.notify({
              color: "red-5",
              textColor: "white",
              icon: "warning",
              message: "至少选择一项！",
            });
    },
    Operations() {
      this.ProcessWarnList = [];
      for (let e = 0; e < this.selected.length; e++)
        for (let t = 0; t < this.selected[e].info_config.length; t++) {
          const s = Object(r["a"])(
            this.selected[e].info_config[t],
            this.selected[e].info_result[t],
          );
          if (s) {
            this.ProcessWarnList.push(this.selected[e]);
            break;
          }
        }
      this.ProcessWarnList.length > 0 && "A" === this.reviewStatus
        ? (this.warnDialog = !0)
        : this.getWarnSure();
    },
    exportList() {
      this.$axiosAction(
        "/api/teacher/process/process.api",
        n()(
          n()({ action: "getTeacherReviewExportNewInfoConfigMaxLength" }, this.queryModel),
          {},
          { type_id: this.$route.query.type_id, service_flag: this.service_flag },
        ),
      ).then((e) => {
        if (0 === e.data.code) {
          const t = e.data.maxLength;
          this.exportCompConfig = [
            "/api/teacher/process/process.api",
            "getTeacherReviewExportNew",
            n()(
              n()({}, this.queryModel),
              {},
              {
                exportList: "export",
                type_id: this.$route.query.type_id,
                service_flag: this.service_flag,
              },
            ),
            {
              [this.typeName +
              "-" +
              ("reviewing" === this.tab
                ? "待审批流程申请"
                : "reviewed" === this.tab
                  ? "已审批流程申请"
                  : "流程申请记录")]: "result",
            },
            this.typeName +
              "-" +
              ("reviewing" === this.tab
                ? "待审批流程申请"
                : "reviewed" === this.tab
                  ? "已审批流程申请"
                  : "流程申请记录"),
            null,
            (e) =>
              e.reduce((e, s) => {
                const a = {
                  流程名称: s.process_type_name,
                  学号: s.student_no,
                  姓名: s.name,
                  性别: "1" === s.sex ? "男" : "女",
                  [this.counsellorlabel]: s.counsellor,
                  手机号: s.mob,
                  年级: s.grade_name,
                  院系: s.dep_name,
                  专业: s.major_name,
                  班级: s.class_name,
                  审批状态: s.review_status_name,
                  申请时间: s.create_time,
                  紧急联系号码: s.contact,
                };
                if (
                  ("G" === this.service_flag &&
                    ((a.入校核验 = 0 === s.into_campus ? "关闭" : "开启"),
                    (a.入校申请开始时间 = s.into_campus_apply_begin),
                    (a.入校申请结束时间 = s.into_campus_apply_end),
                    (a.入校核验开始时间 = s.into_campus_begin_time),
                    (a.入校核验结束时间 = s.into_campus_end_time),
                    (a.离校核验 = 0 === s.out_campus ? "关闭" : "开启"),
                    (a.离校申请开始时间 = s.out_campus_apply_begin),
                    (a.离校申请结束时间 = s.out_campus_apply_end),
                    (a.离校核验开始时间 = s.out_campus_begin_time),
                    (a.离校核验结束时间 = s.out_campus_end_time)),
                  t > 0)
                )
                  for (let i = 1; i <= t; i++) {
                    const e = s.info_config[i - 1];
                    let t = "",
                      o = "";
                    (void 0 === e
                      ? ((t = ""), (o = ""))
                      : ((t = e.label),
                        (o = Object(r["c"])(s.info_config[i - 1], s.info_result[i - 1]))),
                      this.$set(a, "标题" + i.toString(), t),
                      this.$set(a, "内容" + i.toString(), o));
                  }
                return e.concat(a);
              }, []),
            100,
            3e3,
          ];
        }
      });
    },
    getWarnSure() {
      const e = [],
        t = {};
      let s = {};
      for (const a in this.selected) {
        s = this.selected[a];
        const i = n()({}, s);
        ((t.id = i.id),
          (t.reviewStatus = this.reviewStatus),
          (t.opinion = this.opinion),
          "A" === this.reviewStatus && i.review_level < i.process_reviewer.length
            ? (t.level = i.review_level + 1)
            : (t.level = 0),
          (t.levelIng = i.review_level),
          (t.process_id = i.process_id),
          (t.student_no = i.student_no),
          (t.process_type_id = i.process_type_id),
          (t.process_type_name = i.process_type_name),
          (t.create_time = i.create_time),
          (t.name = i.name),
          (t.service_flag = this.service_flag),
          (t.menu_id = this.menuType),
          (t.menuTypeName = this.menuInfo.title));
        const o = n()({}, t);
        e.push(o);
      }
      (this.$q.loading.show(),
        this.$axiosAction("/api/teacher/process/process.api", {
          action: "updateProcessReview",
          resultViews: e,
        }).then((e) => {
          0 === e.data.code &&
            (e.data.result.length > 0
              ? ((this.resErrorList = e.data.result),
                (this.alertDialog = !0),
                (this.opinion = ""),
                this.$q.loading.hide(),
                this.$showErrorNotify("部分审批下一级审批人没有权限或被删除，请联系管理员或刷新"))
              : (this.$showSuccessNotify("操作成功"),
                this.$q.loading.hide(),
                (this.opinion = ""),
                this.loadList(() => {})));
        }));
    },
    checkTime() {
      const e = new Date(this.queryModel.begin_time),
        t = new Date(this.queryModel.end_time);
      return t > e;
    },
    resetTime() {
      ((this.queryModel.begin_time = ""), (this.queryModel.end_time = ""));
    },
  },
};
export default componentOptions;
