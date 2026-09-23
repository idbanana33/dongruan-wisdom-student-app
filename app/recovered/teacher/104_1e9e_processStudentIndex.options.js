/**
 * Vue options object recovered from webpack module AST.
 * Source: assets/www/js/104.js -> module "1e9e"
 * Route: /teacher/process/index
 * Component: processStudentIndex
 * Not guaranteed standalone: imports/module aliases must be resolved from sibling .logic.js.
 */
const componentOptions = {
  name: "processStudentIndex",
  components: { NeuExportData: l["a"] },
  data() {
    return {
      menuColor: Object(r["d"])("process"),
      menuInfo: null,
      dialog: !1,
      title: "",
      list: [],
      paging: { pageSize: 30, pageNum: 0, pageCount: 0 },
      queryModel: { status: "", mutli_search: "" },
      condCount: 0,
      originalCond: {},
      isLoading: !1,
      fabPos: [30, 40],
      user: window.localStorage.userinfo ? JSON.parse(window.localStorage.getItem("userinfo")) : {},
      toId: null,
      toTypeName: "",
      service_flag: "",
      exportCompConfig: null,
    };
  },
  mounted() {
    if (window.localStorage.getItem("menu")) {
      this.service_flag = this.$route.query.service_flag;
      let e = "process";
      ((e = "N" === this.service_flag ? "process" : "process_gate"),
        (this.menuInfo = JSON.parse(window.localStorage.getItem("menu")).find((t) => t.id === e)));
    }
    (window.history &&
      window.history.pushState &&
      (history.pushState(null, null, document.URL),
      window.addEventListener("popstate", this.goBack, !1)),
      this.loadList(() => {}));
  },
  destroyed() {
    window.removeEventListener("popstate", this.goBack, !1);
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
            n()({ action: "queryListNew" }, this.queryModel),
            {},
            {
              roleId: this.user.role_id,
              pageSize: this.paging.pageSize,
              pageNum: this.paging.pageNum,
              service_flag: this.service_flag,
            },
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
      this.$router.push("/teacher/index");
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
      ((this.condCount = Object.keys(this.queryModel).reduce(
        (e, t) => (this.queryModel[t] ? e + 1 : e),
        0,
      )),
        this.$refs.pageRefresh.trigger(),
        (this.dialog = !1));
    },
    getValue(e) {
      this.queryModel.status === e ? (this.queryModel.status = "") : (this.queryModel.status = e);
    },
    goDetail(e, t) {
      ((this.toId = e),
        (this.toTypeName = t),
        this.$router.push(
          "/teacher/process/processTypeList?type_id=" +
            this.toId +
            "&service_flag=" +
            this.service_flag,
        ));
    },
    moveFab(e) {
      ((this.draggingFab = !0 !== e.isFirst && !0 !== e.isFinal),
        (this.fabPos = [this.fabPos[0] - e.delta.x, this.fabPos[1] - e.delta.y]));
    },
    addType() {
      this.$router.push("/teacher/process/typeDetail?type=a&service_flag=" + this.service_flag);
    },
    exportList() {
      this.exportCompConfig = [
        "/api/teacher/process/process.api",
        "queryListNewExport",
        { roleId: this.user.role_id, service_flag: this.service_flag },
        { [this.menuInfo.title]: "result" },
        this.menuInfo.title,
        null,
        (e) =>
          e.reduce((e, t) => {
            const s = {
              流程名称: t.process_type_name,
              申请次数: t.applynum,
              申请人数: t.applypeo,
              已审批: t.applyar,
              审批中: t.applyw,
              通过次数: t.applya,
              通过人数: t.applyapeo,
              驳回次数: t.applyr,
              驳回人数: t.applyrpeo,
              流程说明: t.process_type_detail,
              状态: t.process_type_status_name,
              申请限制: t.processlimit,
              创建人: t.create_user,
            };
            return ("G" === this.service_flag && (s.开启核验 = t.is_check), e.concat(s));
          }, []),
        1e3,
        5e3,
      ];
    },
  },
};
export default componentOptions;
