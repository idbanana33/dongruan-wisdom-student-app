/**
 * Vue options object recovered from webpack module AST.
 * Source: assets/www/js/81.js -> module "493a"
 * Route: /teacher/leave/multilist
 * Component: MultiLeave
 * Not guaranteed standalone: imports/module aliases must be resolved from sibling .logic.js.
 */
const componentOptions = {
  name: "MultiLeave",
  components: { NeuExportData: l["a"] },
  data() {
    return {
      operateDisplay: !1,
      drawer: !1,
      tab: this.$route.query.tab,
      condition: [],
      writeOpinion: !1,
      mode: "",
      dialog: !1,
      queryPanel: !1,
      queryModel: {
        status1: "",
        status2: "",
        status3: "",
        leave_time: "",
        review_status: "",
        leave_period: "",
        mutli_search: null,
      },
      pagination: { rowsPerPage: 0 },
      data: [],
      selected: [],
      timeList: { includeTime: null, minTime: null, maxTime: null, leaveTypeStatus: null },
      review: null,
      pageType: null,
      chooseReview: null,
      opinion: "",
      queryCols: ["login_name", "name"],
      leave_notes: null,
      leaveAction: "",
      exportAction: "",
      fabPos: [18, 18],
      draggingFab: !1,
      fab: !0,
      originalCond: {},
      condCount: 0,
      real_selected: [],
      menuInfo: null,
      title: null,
      paging: { pageSize: 30, pageNum: 0, pageCount: 0 },
      isLoading: !1,
      exportCompConfig: null,
      fabPosAdd: [30, 40],
    };
  },
  destroyed() {
    window.removeEventListener("popstate", this.goBack, !1);
  },
  mounted() {
    ("leave" === this.tab ? (this.title = "我的批量请假") : (this.title = "批量请假审批"),
      window.history &&
        window.history.pushState &&
        (history.pushState(null, null, document.URL),
        window.addEventListener("popstate", this.goBack, !1)),
      (this.menuInfo = JSON.parse(window.localStorage.getItem("menu")).find(
        (e) => "leave" === e.id,
      )),
      this.getLeaveReviewList(() => {}));
  },
  methods: {
    moveFab(e) {
      ((this.draggingFab = !0 !== e.isFirst && !0 !== e.isFinal),
        (this.fabPos = [this.fabPos[0] - e.delta.x, this.fabPos[1] - e.delta.y]));
    },
    handleHold(e) {
      "review" === this.tab &&
        ((this.operateDisplay = !0), document.getElementById("leaveMultiItem" + e).click());
    },
    chooseLeaveTime(e) {
      if (this.queryModel.status1 === e)
        ((this.queryModel.status1 = ""), (this.timeList.includeTime = null));
      else {
        this.queryModel.status1 = e;
        const t = new Date();
        "1" === e
          ? (t.setDate(t.getDate() - 7), (this.timeList.includeTime = t))
          : "2" === e
            ? (t.setMonth(t.getMonth() - 1), (this.timeList.includeTime = t))
            : "3" === e && (t.setMonth(t.getMonth() - 3), (this.timeList.includeTime = t));
      }
    },
    chooseLeavePeriod(e) {
      this.queryModel.status2 === e
        ? ((this.queryModel.status2 = ""),
          (this.timeList.minTime = null),
          (this.timeList.maxTime = null))
        : ((this.queryModel.status2 = e),
          "1" === e
            ? ((this.timeList.minTime = null), (this.timeList.maxTime = 24))
            : "2" === e
              ? ((this.timeList.minTime = 24), (this.timeList.maxTime = 72))
              : "3" === e && ((this.timeList.minTime = 72), (this.timeList.maxTime = null)));
    },
    chooseLeaveType(e) {
      this.queryModel.status3 === e
        ? ((this.queryModel.status3 = ""), (this.review = null))
        : ((this.queryModel.status3 = e), (this.review = "" !== e ? e : null));
    },
    refresh(e) {
      this.getLeaveReviewList(e);
    },
    getLeaveReviewList(e, t) {
      (e && ((this.paging.pageNum = 0), (this.data = [])),
        (this.paging.pageNum += 1),
        (this.isLoading = !0),
        "leave" === this.tab
          ? (this.leaveAction = "getMyMultiLeaveList")
          : "review" === this.tab && (this.leaveAction = "getMultiLeaveReviewList"));
      const i = this.condition.reduce((e, t) => ((e[t.name] = t.value), e), {});
      this.$axiosAction(
        "/api/teacher/leave/leave.api",
        n()(
          {
            action: this.leaveAction,
            include_time: this.timeList.includeTime,
            max_time: this.timeList.maxTime,
            min_time: this.timeList.minTime,
            review_status: this.review,
            page_type: this.pageType,
            pageSize: this.paging.pageSize,
            pageNum: this.paging.pageNum,
            mutli_search: this.queryModel.mutli_search,
          },
          i,
        ),
      )
        .then((t) => {
          if (0 === t.data.code) {
            const e = t.data.list.list;
            for (let t = 0; t < e.length; t++)
              "W" === e[t].review_status
                ? (e[t].color = "secondary")
                : "R" === e[t].review_status
                  ? (e[t].color = "negative")
                  : (e[t].color = "positive");
            this.data = this.data.concat(t.data.list.list);
            const {
              pageSize: i,
              pageNum: a,
              rowCount: s,
              pageCount: o,
              startIndex: l,
              endIndex: r,
            } = n()({}, t.data.list);
            this.paging = {
              pageSize: i,
              pageNum: a,
              rowCount: s,
              pageCount: o,
              startIndex: l,
              endIndex: r,
            };
          } else this.setDefaultList();
          (e && e(), (this.isLoading = !1));
        })
        .catch((t) => {
          (this.setDefaultList(), e && e(), (this.isLoading = !1));
        });
    },
    setDefaultList() {
      ((this.data = []), (this.paging = { pageSize: 30, pageNum: 0, pageCount: 0 }));
    },
    exportList() {
      "reviewing" === this.tab
        ? ((this.pageType = 1), (this.exportAction = "exportLeaveReviewList"))
        : "reviewed" === this.tab
          ? ((this.pageType = 2), (this.exportAction = "exportLeaveReviewList"))
          : "all" === this.tab &&
            ((this.pageType = null), (this.exportAction = "exportReviewList"));
      const e = JSON.parse(localStorage.getItem("userinfo")),
        t = this.condition.reduce((e, t) => ((e[t.name] = t.value), e), {});
      this.exportCompConfig = [
        "/api/teacher/leave/leave.api",
        this.exportAction,
        n()(
          {
            teacher_no: e.login_name,
            include_time: this.timeList.includeTime,
            max_time: this.timeList.maxTime,
            min_time: this.timeList.minTime,
            review_status: this.review,
            page_type: this.pageType,
          },
          t,
        ),
        { 请假记录: "result" },
        "请假记录",
        null,
        (e) =>
          e.reduce(
            (e, t) => (
              (t.请假时间 = t.short_time + "(" + t.time_info + ")"),
              delete t.short_time,
              delete t.time_info,
              e.concat(t)
            ),
            [],
          ),
        1e3,
        5e3,
      ];
    },
    Pass(e) {
      this.menuInfo && null !== this.menuInfo.edit_permit
        ? 0 !== this.selected.length || 3 === e
          ? 1 === e
            ? ((this.chooseReview = "A"), this.getRealSe())
            : 2 === e
              ? ((this.chooseReview = "R"), this.getRealSe())
              : ((this.operateDisplay = !1), (this.selected = []), (this.fab = !0))
          : this.$q.notify({
              color: "red-5",
              textColor: "white",
              icon: "warning",
              message: "至少勾选一项请假！",
            })
        : this.$q.notify({
            color: "red-5",
            textColor: "white",
            icon: "warning",
            message: "您没有权限执行此操作！",
          });
    },
    getRealSe() {
      for (let e = 0; e < this.selected.length; e++)
        "W" === this.selected[e].review_status &&
          ((this.selected[e].review_status = this.chooseReview),
          (this.selected[e].opinion = this.opinion),
          null === this.selected[e].attachment
            ? (this.selected[e].attachment = "")
            : (this.selected[e].attachment = JSON.stringify(this.selected[e].attachment)),
          null === this.selected[e].contact && (this.selected[e].contact = ""),
          null === this.selected[e].location
            ? (this.selected[e].location = "")
            : (this.selected[e].location = JSON.stringify(this.selected[e].location)),
          this.real_selected.push(this.selected[e]));
      0 === this.real_selected.length
        ? this.$q.notify({
            color: "red-5",
            textColor: "white",
            icon: "warning",
            message: "请选择未审批的请假！",
          })
        : (this.writeOpinion = !0);
    },
    Rigth() {
      const e = JSON.parse(localStorage.getItem("userinfo"));
      (this.$axiosAction("/api/teacher/leave/leave.api", {
        action: "updateMultiLeaveReviewM",
        selected: this.real_selected,
        teacher_no: e.login_name,
      }).then((e) => {
        0 === e.data.code && this.getLeaveReviewList(null);
      }),
        (this.opinion = ""),
        (this.operateDisplay = !1),
        (this.selected = []),
        (this.real_selected = []));
    },
    goBack() {
      this.$router.push("/teacher/leave/index");
    },
    goDetail(e, t, i) {
      this.operateDisplay
        ? document.getElementById("leaveMultiItem" + i).click()
        : "leave" === this.tab
          ? this.$router.push(`/teacher/leave/multidetail?id=${e}&tab=${this.tab}`)
          : this.$router.push(`/teacher/leave/multidetail?id=${t}&tab=${this.tab}`);
    },
    open() {
      ((this.dialog = !0),
        (this.originalCond = Object.keys(this.queryModel).reduce(
          (e, t) => ((e[t] = this.queryModel[t]), e),
          {},
        )));
    },
    onClick() {
      this.$router.push(`/teacher/leave/newMultiLeave?tab=${this.tab}`);
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
    getLeaveReview() {
      this.$refs.pageRefresh.trigger();
    },
    moveFabAdd(e) {
      ((this.draggingFab = !0 !== e.isFirst && !0 !== e.isFinal),
        (this.fabPosAdd = [this.fabPosAdd[0] - e.delta.x, this.fabPosAdd[1] - e.delta.y]));
    },
  },
};
export default componentOptions;
