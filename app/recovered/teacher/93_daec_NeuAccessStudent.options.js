/**
 * Vue options object recovered from webpack module AST.
 * Source: assets/www/js/93.js -> module "daec"
 * Route: /teacher/monitor/index
 * Component: NeuAccessStudent
 * Not guaranteed standalone: imports/module aliases must be resolved from sibling .logic.js.
 */
const componentOptions = {
  name: "NeuAccessStudent",
  components: { NeuAssignStudent: l["a"] },
  data() {
    return {
      menuInfo: null,
      roleId: JSON.parse(localStorage.getItem("userinfo")).role_id,
      collectTab: "collectStuData",
      countRuleShow: !1,
      studentDate: {},
      num1: 0,
      num2: 0,
      dataValue: 0,
      collectGradeList: [],
      gradeBar: [],
      gradeTitleData: "",
      gradeData: [],
      titleType: "班级",
      collectDepList: [],
      depBar: [],
      depTitleData: "",
      depData: [],
      cardHight: "400px",
      ruleTitle: "",
      ruleMessage: "",
      record: { task_target: [] },
      taskTargetDialog: !1,
      maximizedToggle: !0,
    };
  },
  mounted() {
    (window.localStorage.getItem("menu") &&
      (this.menuInfo = JSON.parse(window.localStorage.getItem("menu")).find(
        (t) => "monitor" === t.id,
      )),
      this.chooseReal());
  },
  methods: {
    CountRule(t) {
      ("collectStuData" === t &&
        ((this.ruleTitle = "接入率"),
        (this.ruleMessage = "接入率计算规则：学生接入人数/学生总人数")),
        (this.countRuleShow = !0));
    },
    chooseReal() {
      0 !== this.record.task_target.length &&
        ("collectStuData" === this.collectTab
          ? this.getAllStudent()
          : "generalSituation" === this.collectTab &&
            ("D" === this.menuInfo.view_permit
              ? (this.titleType = "专业")
              : "A" === this.menuInfo.view_permit && (this.titleType = "学院"),
            this.getGradeStudent()));
    },
    getAllStudent() {
      this.$axiosAction("/api/teacher/achievement/achievement.api", {
        action: "getstudent",
        task_target: JSON.stringify(this.record.task_target),
      })
        .then((t) => {
          (0 === t.data.code &&
            ((this.studentDate = t.data.student),
            (this.num1 = t.data.student.status_one),
            (this.num2 = t.data.student.status_zero),
            (this.dataValue = this.num1 + this.num2),
            this.ringPic(
              "stucollect",
              this.studentDate,
              this.Percentage(this.num1, this.dataValue) + "%\n接入率",
            )),
            this.$q.loading.hide());
        })
        .catch((t) => {});
    },
    getGradeStudent() {
      this.$axiosAction("/api/teacher/achievement/achievement.api", {
        action: "getgrade",
        task_target: JSON.stringify(this.record.task_target),
        view_permit: this.menuInfo.view_permit,
      })
        .then((t) => {
          (0 === t.data.code &&
            (this.changeGradeBar("stugrade", t.data.grade),
            (this.collectGradeList = t.data.grade),
            this.changeDepBar("studep", t.data.dep),
            (this.collectDepList = t.data.dep)),
            this.$q.loading.hide());
        })
        .catch((t) => {
          ((this.collectGradeList = []), (this.collectDepList = []));
        });
    },
    ringPic(t, e, a) {
      const i = document.getElementById(t),
        s = r["a"](i, { height: "260px" });
      var o = {};
      ((o = {
        tooltip: { trigger: "item" },
        legend: { show: !1 },
        color: ["#FA8072", "#33CCFF"],
        series: [
          {
            type: "pie",
            radius: ["45%", "70%"],
            avoidLabelOverlap: !1,
            label: {
              show: !0,
              position: "center",
              formatter: function () {
                return a;
              },
              textStyle: { fontSize: 20, fontWeight: "bold" },
            },
            labelLine: { show: !1 },
            data: [
              { value: e.status_one, name: "已接入" },
              { value: e.status_zero, name: "未接入" },
            ],
          },
        ],
      }),
        o && s.setOption(o),
        window.addEventListener("resize", () => {
          s.resize();
        }));
    },
    columnPic(t, e, a, i) {
      const s = document.getElementById(t),
        o = r["a"](s);
      var n = {};
      ((n = {
        legend: { type: "scroll" },
        tooltip: {},
        dataset: { dimensions: e, source: a },
        xAxis: { max: 100, axisLabel: { show: !0, interval: "auto", formatter: "{value} %" } },
        yAxis: {
          type: "category",
          axisLabel: {
            interval: 0,
            formatter: function (t) {
              var e = t.split("");
              return e.join("\n");
            },
          },
        },
        series: i,
      }),
        o.resize(),
        n && o.setOption(n, !0),
        window.addEventListener("resize", () => {
          o.resize();
        }));
    },
    Percentage(t, e) {
      return 0 === t || 0 === e ? 0 : Math.round((t / e) * 1e4) / 100;
    },
    changeGradeBar(t, e) {
      const a = e.reduce(
          (t, e) =>
            t.concat(
              e.name +
                " " +
                e.rate.toString() +
                "% (" +
                e.total_status.toString() +
                "/" +
                e.total.toString() +
                ")",
            ),
          ["label"],
        ),
        i = e.reduce(
          (t, e) => (
            (e.name =
              e.name +
              " " +
              e.rate.toString() +
              "% (" +
              e.total_status.toString() +
              "/" +
              e.total.toString() +
              ")"),
            (t[e.name] = e.rate),
            t
          ),
          { label: "接入率" },
        );
      ((this.gradeTitleData = a), (this.gradeData = [i]));
      for (let s = 0; s < a.length - 1; s++) this.gradeBar.push({ type: "bar" });
      (this.columnPic(t, this.gradeTitleData, this.gradeData, this.gradeBar), (this.gradeBar = []));
    },
    changeDepBar(t, e) {
      const a = e.reduce(
          (t, e) =>
            t.concat(
              e.name +
                " " +
                e.rate.toString() +
                "% (" +
                e.total_status.toString() +
                "/" +
                e.total.toString() +
                ")",
            ),
          ["label"],
        ),
        i = e.reduce(
          (t, e) => (
            (e.name =
              e.name +
              " " +
              e.rate.toString() +
              "% (" +
              e.total_status.toString() +
              "/" +
              e.total.toString() +
              ")"),
            (t[e.name] = e.rate),
            t
          ),
          { label: "接入率" },
        );
      ((this.depTitleData = a), (this.depData = [i]));
      for (let s = 0; s < a.length - 1; s++) this.depBar.push({ type: "bar" });
      (this.columnPic(t, this.depTitleData, this.depData, this.depBar), (this.depBar = []));
    },
    createPic() {
      ((this.taskTargetDialog = !1), this.chooseReal());
    },
  },
};
export default componentOptions;
