/**
 * Vue options object recovered from webpack module AST.
 * Source: assets/www/js/61.js -> module "23a6"
 * Route: /teacher/analysis/stuLocation
 * Component: NeuStuLocationAnalysis
 * Not guaranteed standalone: imports/module aliases must be resolved from sibling .logic.js.
 */
const componentOptions = {
  name: "NeuStuLocationAnalysis",
  components: { NeuExportData: p["a"] },
  props: { condition: Object },
  data() {
    return {
      tab: "stuLocation",
      directionConfig: [
        { value: "o", label: "离开" },
        { value: "i", label: "返回" },
        { value: "n", label: "区间外" },
      ],
      stuLocationData: [],
      slFilterModel: {},
      slFilterCond: [],
      paging: { pageSize: 30, pageNum: 0, pageCount: 0 },
      changedLocationData: [],
      clFilterModel: {},
      clFilterCond: [],
      distributionData: [],
      dFilterModel: {},
      dFilterCond: [],
      locationHistory: {},
      historyDialog: !1,
      isLoading: !1,
      exportCompConfig: null,
      counsellorlabel: localStorage.getItem("counsellorlabel"),
    };
  },
  mounted() {
    this.initData();
  },
  watch: {
    condition(t) {
      this.initData();
    },
  },
  computed: {
    cond() {
      const t = o()({}, this.condition);
      return ((t.student_target = JSON.stringify(t.student_target)), t);
    },
    baseOnLabel() {
      return "P" === this.condition.base_on
        ? "省(自治区、直辖市、特别行政区)"
        : "地市(州、盟、省直县、自治区直县)";
    },
    changedLocationList() {
      return this.changedLocationData.reduce((t, e) => {
        let a = !0;
        for (const i of Object.keys(this.clFilterModel))
          if (this.clFilterModel[i] && -1 === (!e[i] || e[i].indexOf(this.clFilterModel[i]))) {
            a = !1;
            break;
          }
        return a ? t.concat(e) : t;
      }, []);
    },
    distributionList() {
      return this.distributionData.reduce((t, e) => {
        let a = !0;
        for (const i of Object.keys(this.dFilterModel))
          if (this.dFilterModel[i] && -1 === (!e[i] || e[i].indexOf(this.dFilterModel[i]))) {
            a = !1;
            break;
          }
        return a ? t.concat(e) : t;
      }, []);
    },
  },
  methods: {
    initData() {
      (this.$axiosAction(
        "/api/teacher/analysis/analysis.api",
        o()({ action: "analysisStuLocationChangedData" }, this.cond),
      ).then((t) => {
        0 === t.data.code && (this.changedLocationData = t.data.result.changedLocation);
      }),
        this.$axiosAction(
          "/api/teacher/analysis/analysis.api",
          o()({ action: "analysisStuLocationDistributionData" }, this.cond),
        ).then((t) => {
          0 === t.data.code && (this.distributionData = t.data.result.distribution);
        }),
        this.loadStuLocationData(() => {}));
    },
    loadStuLocationData(t) {
      (t && ((this.paging.pageNum = 0), (this.stuLocationData = [])),
        (this.paging.pageNum += 1),
        (this.isLoading = !0));
      const e = this.slFilterCond.reduce((t, e) => ((t[e.name] = e.value), t), {});
      this.$axiosAction(
        "/api/teacher/analysis/analysis.api",
        o()(
          o()(o()({ action: "queryStuLocationData", export_flag: !1 }, this.cond), e),
          {},
          { pageSize: this.paging.pageSize, pageNum: this.paging.pageNum },
        ),
      )
        .then((e) => {
          if (0 === e.data.code) {
            this.stuLocationData = this.stuLocationData.concat(e.data.result.list);
            const {
              pageSize: t,
              pageNum: a,
              rowCount: i,
              pageCount: n,
              startIndex: s,
              endIndex: l,
            } = o()({}, e.data.result);
            this.paging = {
              pageSize: t,
              pageNum: a,
              rowCount: i,
              pageCount: n,
              startIndex: s,
              endIndex: l,
            };
          } else this.setDefaultStuLocationData();
          (t && t(), (this.isLoading = !1));
        })
        .catch((e) => {
          (this.setDefaultStuLocationData(), t && t(), (this.isLoading = !1));
        });
    },
    setDefaultStuLocationData() {
      ((this.stuLocationData = []), (this.paging = { pageSize: 30, pageNum: 0, pageCount: 0 }));
    },
    search(t, e) {
      let a, i;
      if ("stuLocation" === this.tab) ((a = this.slFilterCond), (i = this.slFilterModel));
      else if ("changedLocation" === this.tab) ((a = this.clFilterCond), (i = this.clFilterModel));
      else {
        if ("distribution" !== this.tab) return;
        ((a = this.dFilterCond), (i = this.dFilterModel));
      }
      const n = a.findIndex((e) => e.name === t);
      (n >= 0
        ? i[t]
          ? a.splice(n, 1, { name: t, label: e, value: i[t] })
          : a.splice(n, 1)
        : a.push({ name: t, label: e, value: i[t] }),
        "stuLocation" === this.tab && this.loadStuLocationData(() => {}));
    },
    research(t) {
      let e, a;
      if ("stuLocation" === this.tab) ((e = this.slFilterCond), (a = this.slFilterModel));
      else if ("changedLocation" === this.tab) ((e = this.clFilterCond), (a = this.clFilterModel));
      else {
        if ("distribution" !== this.tab) return;
        ((e = this.dFilterCond), (a = this.dFilterModel));
      }
      const i = e.findIndex((e) => e.name === t);
      i >= 0 &&
        (e.splice(i, 1),
        (a[t] = ""),
        "stuLocation" === this.tab && this.loadStuLocationData(() => {}));
    },
    exportData() {
      if ("stuLocation" === this.tab) {
        const t = this.slFilterCond.reduce((t, e) => ((t[e.name] = e.value), t), {});
        this.exportCompConfig = [
          "/api/teacher/analysis/analysis.api",
          "queryStuLocationData",
          o()(o()({ export_flag: !0 }, this.cond), t),
          { 学生定位数据: "result" },
          "学生定位数据",
          null,
          null,
          1e3,
          5e3,
        ];
      } else if ("changedLocation" === this.tab) {
        const t = this.changedLocationList.reduce(
          (t, e) =>
            t.concat({
              起点: e.start_place,
              终点: e.end_place,
              人数: e.amount,
              与主校区所在地关系: (this.directionConfig.find((t) => t.value === e.direction) || {})
                .label,
            }),
          [],
        );
        this.exportCompConfig = [
          null,
          null,
          null,
          { 位置变化数据: t },
          "位置变化数据",
          null,
          null,
          null,
          null,
        ];
      } else if ("distribution" === this.tab) {
        const t = this.distributionList.reduce(
          (t, e) => t.concat({ [this.baseOnLabel]: e.name, 人数: e.value }),
          [],
        );
        this.exportCompConfig = [
          null,
          null,
          null,
          { 位置分布数据: t },
          "位置分布数据",
          null,
          null,
          null,
          null,
        ];
      }
    },
    showLocationHistory(t, e) {
      (this.$q.loading.show(),
        (this.locationHistory = {}),
        this.$axiosAction(
          "/api/teacher/analysis/analysis.api",
          o()(o()({ action: "queryStuLocationDataByStudentNo" }, this.cond), {}, { student_no: t }),
        ).then((t) => {
          (0 === t.data.code && (this.locationHistory = { name: e, list: t.data.list }),
            (this.historyDialog = !0),
            this.$q.loading.hide());
        }));
    },
    exportHistoryData() {
      const t = this.locationHistory.list.reduce(
          (t, e) =>
            t.concat({
              数据来源: e.location_source_name,
              时间: e.location_time,
              位置: e.area,
              详细地址: e.address,
            }),
          [],
        ),
        e = `${this.locationHistory.name}的定位数据`;
      this.exportCompConfig = [null, null, null, { [e]: t }, e, null, null, null, null];
    },
  },
};
export default componentOptions;
