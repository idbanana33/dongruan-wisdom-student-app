/**
 * Vue options object recovered from webpack module AST.
 * Source: assets/www/js/63.js -> module "64e7"
 * Route: /teacher/apply/applyExperience
 * Component: applyExperience
 * Not guaranteed standalone: imports/module aliases must be resolved from sibling .logic.js.
 */
const componentOptions = {
  name: "applyExperience",
  components: { NeuExportData: r["a"], NeuWidget: n["a"] },
  data() {
    return {
      stuNo: this.$route.query.stuNo,
      stuName: this.$route.query.stuName,
      applyType: this.$route.query.applyType,
      list: [],
      paging: { pageSize: 30, pageNum: 0, pageCount: 0 },
      isLoading: !1,
      exportCompConfig: null,
      maximizedToggle: !0,
      infoResultDialog: !1,
      record: {
        title: "",
        apply_id: null,
        info_config: [],
        frequency: "",
        batchNoDetail: 0,
        writeStatus: null,
        infoResult: [],
        batchNumber: 1,
        timeSlot: "",
      },
    };
  },
  mounted() {
    this.loadList(null);
  },
  computed: {
    applyShortTitle() {
      return "A" === this.applyType
        ? "申请"
        : "C" === this.applyType
          ? "填写"
          : "S" === this.applyType
            ? "报名"
            : "";
    },
    undoImage() {
      return "A" === this.applyType
        ? `${cordova.file.applicationDirectory}www/img/noapply.png`
        : "S" === this.applyType
          ? `${cordova.file.applicationDirectory}www/img/nosignup.png`
          : "C" === this.applyType
            ? `${cordova.file.applicationDirectory}www/img/nocollect.png`
            : "";
    },
    menuInfo() {
      return "A" === this.applyType
        ? JSON.parse(window.localStorage.getItem("menu")).find((t) => "apply" === t.id)
        : "S" === this.applyType
          ? JSON.parse(window.localStorage.getItem("menu")).find((t) => "signup" === t.id)
          : "C" === this.applyType
            ? JSON.parse(window.localStorage.getItem("menu")).find((t) => "collect" === t.id)
            : {};
    },
  },
  methods: {
    loadList(t) {
      (t && ((this.paging.pageNum = 0), (this.list = [])),
        (this.paging.pageNum += 1),
        (this.isLoading = !0),
        this.$axiosAction("/api/teacher/apply/apply.api", {
          action: "getPersonDetails",
          login_name: this.stuNo,
          applyType: this.applyType,
          pageSize: this.paging.pageSize,
          pageNum: this.paging.pageNum,
        })
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
              } = l()({}, e.data.result);
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
      this.$router.push({ name: "/teacher/experience/index", query: { stuNo: this.stuNo } });
    },
    exportList() {
      this.stuNo &&
        (this.exportCompConfig = [
          "/api/teacher/apply/apply.api",
          "getPersonDetails",
          { login_name: this.stuNo, applyType: this.applyType },
          { [`${this.stuName}的历史${this.menuInfo.title}记录`]: "result" },
          `${this.stuName}的历史${this.menuInfo.title}记录`,
          null,
          (t) =>
            t.reduce((t, e) => {
              const a = {
                [this.applyShortTitle + "名称"]: e.title,
                发起人: e.teacher_name,
                创建时间: e.create_time,
                有效时间: e.begin_time + "至" + e.end_time,
                状态:
                  1 === e.apply_status ? `已${this.applyShortTitle}` : `未${this.applyShortTitle}`,
                [this.applyShortTitle + "时间"]: e.apply_time,
              };
              return t.concat(a);
            }, []),
          1e3,
          5e3,
        ]);
    },
    getDetail(t, e) {
      if (0 === t.apply_status) return null;
      if (0 !== e) this.record.batchNoDetail = this.record.batchNoDetail + e;
      else {
        const e = this.list.reduce((e, a) => (a.apply_id === t.apply_id ? e.concat(a) : e), []);
        ((this.record.batchNumber = e.length),
          (this.record.batchNoDetail = t.batch_no),
          (this.record.apply_id = t.apply_id),
          (this.record.info_config = t.info_config),
          (this.record.timeSlot = t.begin_time + "至" + t.end_time),
          (this.record.title = t.title));
      }
      (this.$q.loading.show(),
        this.$axiosAction("/api/teacher/apply/apply.api", {
          action: "getDetaiInfoResult",
          batch_no: this.record.batchNoDetail,
          apply_id: this.record.apply_id,
          student_no: this.stuNo,
        }).then((t) => {
          (0 === t.data.code &&
            (null === t.data.result.info_result
              ? ((this.record.infoResult = []),
                null === t.data.result.apply_time
                  ? (this.record.writeStatus = 0)
                  : (this.record.writeStatus = t.data.result.apply_status))
              : ((this.record.infoResult = t.data.result.info_result),
                (this.record.writeStatus = t.data.result.apply_status)),
            (this.infoResultDialog = !0)),
            this.$q.loading.hide());
        }));
    },
  },
};
export default componentOptions;
