/**
 * Vue options object recovered from webpack module AST.
 * Source: assets/www/js/69.js -> module "ebc5"
 * Route: /teacher/composite/detail
 * Component: 69_ebc5
 * Not guaranteed standalone: imports/module aliases must be resolved from sibling .logic.js.
 */
const componentOptions = {
  components: { NeuExportData: c["a"], NeuAssignTeacher: n["a"], NeuViewAssignedTeacher: l["a"] },
  name: "CompositeDetail",
  filters: {
    ellipsis(t) {
      return t ? (t.length > 9 ? t.slice(0, 9) + "..." : t) : "";
    },
  },
  data() {
    return {
      userInfo: JSON.parse(window.localStorage.getItem("userinfo")),
      drawerRight: !1,
      id: null,
      menuInfo: null,
      list: [],
      paging: { pageSize: 30, pageNum: 0, pageCount: 0 },
      condition: [],
      condCount: 0,
      dialog: !1,
      originalCond: {},
      queryModel: { mutli_search: "" },
      isLoading: !1,
      fabPos: [30, 40],
      exportCompConfig: null,
      cCreate: !1,
      record: {},
      resNewList: [],
      toNewType: 1,
      toNewTypeMenu: "",
      newDialog: !1,
      linkDetailList: [
        { type: "notice", link: "/teacher/notice/detail?id=" },
        { type: "apply", link: "/teacher/apply/statistics?apply_type=A&apply_type_name=申请&id=" },
        {
          type: "collect",
          link: "/teacher/apply/statistics?apply_type=C&apply_type_name=信息收集&id=",
        },
        {
          type: "signup",
          link: "/teacher/apply/statistics?apply_type=S&apply_type_name=活动报名&id=",
        },
        { type: "signin", link: "/teacher/signin/statistics?id=" },
      ],
      linkListParam: [
        { type: "notice", link: "/teacher/notice/new", query: {} },
        {
          type: "apply",
          link: "/teacher/apply/new",
          query: { apply_type: "A", apply_type_name: "申请" },
        },
        {
          type: "collect",
          link: "/teacher/apply/new",
          query: { apply_type: "C", apply_type_name: "信息收集" },
        },
        {
          type: "signup",
          link: "/teacher/apply/new",
          query: { apply_type: "S", apply_type_name: "活动报名" },
        },
        { type: "signin", link: "/teacher/signin/new", query: {} },
      ],
      newTaskDialog: !1,
      menuColor: Object(d["d"])("composite"),
      rowInfo: { batch_no: 1 },
      taskTargetList: [
        { type: "1", title: "选择已完成任务对象" },
        { type: "2", title: "选择全部任务对象" },
      ],
      batchNoList: [],
      batchNoDialog: !1,
      deleteDialog: !1,
      typeListCount: [],
      detailDialog: !1,
      maximizedToggle: !0,
      shareTarget: [],
      shareDialog: !1,
    };
  },
  destroyed() {
    window.removeEventListener("popstate", this.goBack, !1);
  },
  mounted() {
    ((this.id = this.$route.query.id),
      this.id,
      window.localStorage.getItem("menu") &&
        (this.menuInfo = JSON.parse(window.localStorage.getItem("menu")).find(
          (t) => "composite" === t.id,
        )),
      this.showDetailInfo(),
      window.history &&
        window.history.pushState &&
        (history.pushState(null, null, document.URL),
        window.addEventListener("popstate", this.goBack, !1)),
      this.loadList(() => {}));
  },
  methods: {
    showDetailInfo() {
      (this.$q.loading.show(),
        this.$axiosAction("/api/teacher/composite/composite.api", {
          action: "queryListDetail",
          id: this.id,
        })
          .then((t) => {
            (0 === t.data.code &&
              ((this.record = t.data.result),
              (this.record.teacher_no !== this.userInfo.login_name &&
                "A" !== this.userInfo.role_id) ||
                (this.cCreate = !0),
              "" === t.data.result &&
                (this.$showErrorNotify("该内容为空，或无权限"), this.goBack())),
              this.$q.loading.hide());
          })
          .catch((t) => {
            ((this.record = []), this.$q.loading.hide());
          }));
    },
    loadList(t) {
      (t && ((this.paging.pageNum = 0), (this.list = [])),
        (this.paging.pageNum += 1),
        (this.isLoading = !0),
        this.$axiosAction(
          "/api/teacher/composite/composite.api",
          r()(
            r()({ action: "queryChildrenList" }, this.queryModel),
            {},
            { composite_id: this.id, pageSize: this.paging.pageSize, pageNum: this.paging.pageNum },
          ),
        )
          .then((e) => {
            if (0 === e.data.code) {
              this.list = this.list.concat(e.data.result.list);
              const {
                pageSize: t,
                pageNum: a,
                rowCount: i,
                pageCount: s,
                startIndex: o,
                endIndex: n,
              } = r()({}, e.data.result);
              this.paging = {
                pageSize: t,
                pageNum: a,
                rowCount: i,
                pageCount: s,
                startIndex: o,
                endIndex: n,
              };
            } else this.setDefaultList();
            (t && t(), (this.isLoading = !1));
          })
          .catch((e) => {
            (this.setDefaultList(), t && t(), (this.isLoading = !1));
          }));
    },
    setDefaultList() {
      ((this.list = []), (this.paging = { pageSize: 30, pageNum: 0, pageCount: 0 }));
    },
    refresh(t) {
      this.loadList(t);
    },
    goBack() {
      this.$router.push("/teacher/composite/index");
    },
    openEditDialog(t, e, a) {
      let i = this.linkDetailList.find((t) => t.type === a).link;
      ((i = i + t + "&compositeId=" + this.id), this.$router.push(i));
    },
    openNewDialog(t) {
      this.resNewList = [];
      const e = ["notice", "apply", "collect", "signup", "signin"];
      for (const a of e) {
        const t = JSON.parse(window.localStorage.getItem("menu")).find((t) => t.id === a);
        void 0 !== t &&
          this.resNewList.push({
            id: t.id,
            title: t.title,
            edit_permit: t.edit_permit,
            color: t.color.background,
          });
      }
      this.resNewList.length < 1
        ? this.$showErrorNotify("您没有新建相关任务权限，请联系管理员")
        : ((this.toNewType = t), (this.newDialog = !0));
    },
    exportList() {
      this.exportCompConfig = [
        "/api/teacher/composite/composite.api",
        "queryChildrenList",
        r()(r()({}, this.queryModel), {}, { composite_id: this.id }),
        { [this.record.title]: "result" },
        this.record.title,
        null,
        (t) =>
          t.reduce((t, e) => {
            const a = { 任务名称: e.title, 类型: e.typetitle, 创建时间: e.create_time };
            return t.concat(a);
          }, []),
        1e3,
        5e3,
      ];
    },
    open() {
      ((this.dialog = !0),
        (this.originalCond = Object.keys(this.queryModel).reduce(
          (t, e) => ((t[e] = this.queryModel[e]), t),
          {},
        )));
    },
    close() {
      ((this.dialog = !1),
        (this.queryModel = Object.keys(this.originalCond).reduce(
          (t, e) => ((t[e] = this.originalCond[e]), t),
          {},
        )));
    },
    getCondition() {
      ((this.condCount = Object.keys(this.queryModel).reduce(
        (t, e) => (this.queryModel[e] ? t + 1 : t),
        0,
      )),
        this.$refs.pageRefresh.trigger(),
        (this.dialog = !1));
    },
    moveFab(t) {
      ((this.draggingFab = !0 !== t.isFirst && !0 !== t.isFinal),
        (this.fabPos = [this.fabPos[0] - t.delta.x, this.fabPos[1] - t.delta.y]));
    },
    goNewLink(t) {
      if (1 === this.toNewType) {
        const e = this.linkListParam.find((e) => e.type === t);
        ((e.query.compositeId = this.id),
          (e.query.compositeTitle = this.record.title),
          this.$router.push({
            name: e.link,
            query: e.query,
            params: { share_target: this.record.share_target },
          }));
      } else ((this.toNewTypeMenu = t), (this.newTaskDialog = !0));
    },
    newTaskOpenDialog(t, e, a) {
      "S" === a
        ? ((this.rowInfo.id = t), (this.rowInfo.type = e), this.openNewDialog(2))
        : (this.$q.loading.show(),
          this.$axiosAction("/api/teacher/composite/composite.api", {
            action: "getBatchNo",
            id: t,
            type: e,
          })
            .then((a) => {
              (0 === a.data.code &&
                ((this.batchNoList = a.data.result),
                (this.rowInfo.batch_no = this.batchNoList.length),
                (this.rowInfo.id = t),
                (this.rowInfo.type = e),
                (this.batchNoDialog = !0)),
                this.$q.loading.hide());
            })
            .catch((t) => {
              this.$q.loading.hide();
            }));
    },
    newTask(t) {
      (this.$q.loading.show(),
        (this.rowInfo.typeId = t),
        this.$axiosAction(
          "/api/teacher/composite/composite.api",
          r()({ action: "getTaskTarget" }, this.rowInfo),
        )
          .then((e) => {
            if (0 === e.data.code) {
              const a = this.linkListParam.find((t) => t.type === this.toNewTypeMenu);
              ((a.query.compositeId = this.id),
                (a.query.compositeTitle = this.record.title),
                ("1" === t || ("2" === t && "A" !== this.userInfo.role_id)) && "1" === t
                  ? this.$router.push({
                      name: a.link,
                      query: a.query,
                      params: {
                        taskTarget: e.data.tasklist,
                        share_target: this.record.share_target,
                      },
                    })
                  : this.$router.push({
                      name: a.link,
                      query: a.query,
                      params: {
                        taskTarget: e.data.tasklist.task_target,
                        share_target: this.record.share_target,
                      },
                    }),
                (this.batchNoDialog = !1));
            }
            this.$q.loading.hide();
          })
          .catch((t) => {
            this.$q.loading.hide();
          }));
    },
    openSelectTaskDialog() {
      this.openNewDialog(2);
    },
    deleteComposite() {
      (this.$q.loading.show(),
        this.$axiosAction("/api/teacher/composite/composite.api", {
          action: "queryChildrenListCount",
          composite_id: this.id,
        })
          .then((t) => {
            (0 === t.data.code && ((this.typeListCount = t.data.result), (this.deleteDialog = !0)),
              this.$q.loading.hide());
          })
          .catch((t) => {
            this.$q.loading.hide();
          }));
    },
    deleteSure() {
      (this.$q.loading.show(),
        this.$axiosAction("/api/teacher/composite/composite.api", {
          action: "deleteComposite",
          composite_id: this.id,
        })
          .then((t) => {
            (0 === t.data.code && this.goBack(), this.$q.loading.hide());
          })
          .catch((t) => {
            this.$q.loading.hide();
          }));
    },
    openShareDialog() {
      ((this.shareDialog = !0), (this.shareTarget = this.record.share_target));
    },
    updateShareTarget() {
      (this.$q.loading.show(),
        this.$axiosAction("/api/teacher/composite/composite.api", {
          action: "updateShareTarget",
          composite_id: this.id,
          share_target:
            this.shareTarget && this.shareTarget.length > 0
              ? JSON.stringify(this.shareTarget)
              : null,
        })
          .then((t) => {
            (0 === t.data.code &&
              ((this.record.share_target = this.shareTarget), (this.shareDialog = !1)),
              this.$q.loading.hide());
          })
          .catch((t) => {
            this.$q.loading.hide();
          }));
    },
  },
};
export default componentOptions;
