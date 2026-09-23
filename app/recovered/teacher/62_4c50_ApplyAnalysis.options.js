/**
 * Vue options object recovered from webpack module AST.
 * Source: assets/www/js/62.js -> module "4c50"
 * Route: /teacher/analysis/teaMessage
 * Component: ApplyAnalysis
 * Not guaranteed standalone: imports/module aliases must be resolved from sibling .logic.js.
 */
const componentOptions = {
  name: "ApplyAnalysis",
  props: {},
  components: { NeuAssignTeacher: l["a"] },
  computed: {
    applyShortTitle() {
      return "收集";
    },
  },
  data() {
    return {
      applyTab: "realTime",
      collectNumList: [],
      collectAllNum: 0,
      collectEdNum: 0,
      nocollectNum: 0,
      countRuleShow: !1,
      ruleTitle: "",
      ruleMessage: "",
      menuInfo: null,
      showPic: 0,
      showExp: !1,
      begin_date: "",
      end_date: "",
      begin_time: "",
      end_time: "",
      task_target: [],
      taskTargetDialog: !1,
      maximizedToggle: !0,
      teacher_no: JSON.parse(window.localStorage.getItem("userinfo")).login_name,
      loginName: "",
    };
  },
  mounted() {
    (window.localStorage.getItem("menu") &&
      (this.menuInfo = JSON.parse(window.localStorage.getItem("menu")).find(
        (t) => "analysis" === t.id,
      )),
      this.getWeekDate());
  },
  methods: {
    getWeekDate() {
      this.$axiosAction("/api/public.api", { action: "queryDefaultStatPeriod" }).then((t) => {
        0 === t.data.code &&
          ((this.begin_time = t.data.begin_date),
          (this.end_time = t.data.end_date),
          (this.begin_date = t.data.begin_date),
          (this.end_date = t.data.end_date));
      });
    },
    ApplyRule() {
      ((this.ruleTitle = "填写率"),
        (this.ruleMessage = "已填写的人数/总人数"),
        (this.countRuleShow = !0));
    },
    ringPic(t, e, a) {
      const s = document.getElementById(t),
        i = r["a"](s);
      var l = {};
      ((l = {
        tooltip: { trigger: "item", formatter: "{b}:{c}<br>{d}%" },
        legend: { show: !1 },
        series: [
          {
            type: "pie",
            radius: ["40%", "70%"],
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
            data: e,
          },
        ],
      }),
        l && i.setOption(l),
        (window.onresize = function () {
          (i.resize(), r["a"](document.getElementById("collects")).resize());
        }));
    },
    columnPic(t, e, a, s) {
      const i = document.getElementById(t),
        l = r["a"](i);
      var n = {};
      ((n = {
        legend: { type: "scroll" },
        tooltip: {},
        dataset: { dimensions: e, source: a },
        xAxis: { axisLabel: { show: !0, interval: "auto", formatter: "{value}" } },
        yAxis: { type: "category" },
        series: s,
      }),
        n && l.setOption(n, !0),
        (window.onresize = function () {
          (l.resize(), r["a"](document.getElementById("collectDep")).resize());
        }));
    },
    getCollectAllNum() {
      0 !== this.begin_time.length && 0 !== this.end_time.length && 0 !== this.task_target.length
        ? this.$axiosAction("/api/teacher/teaanalysis/tanalysis.api", {
            action: "getMessageAllNum",
            task_target: JSON.stringify(this.task_target),
            begin_time: this.begin_time,
            end_time: this.end_time,
            teacher_no: this.loginName,
          })
            .then((t) => {
              const e = [],
                a = ["product"],
                s = { product: "收\n集\n人\n数" },
                i = [],
                l = [];
              if (0 === t.data.code)
                if ("realTime" === this.applyTab) {
                  this.collectNumList = t.data.collectResult;
                  for (let s = 0; s < t.data.collectResult.length; s++)
                    (e.push(
                      {
                        name: "已收集人数",
                        value: t.data.collectResult[s].messaged,
                        itemStyle: { color: "#FA8072" },
                      },
                      {
                        name: "未收集人数",
                        value: t.data.collectResult[s].nomessage,
                        itemStyle: { color: "#33CCFF" },
                      },
                    ),
                      (this.collectAllNum = t.data.collectResult[s].total),
                      (this.collectEdNum = t.data.collectResult[s].messaged));
                  const a = this.percent(this.collectEdNum, this.collectAllNum) + "%\n收集率";
                  (this.$q.loading.hide(), this.ringPic("collects", e, a));
                } else {
                  for (let e = 0; e < t.data.depresult.length; e++) {
                    const i = t.data.depresult[e].dep_name,
                      n = t.data.depresult[e].depmessage,
                      o = i + " " + n + "人";
                    (a.push(o), l.push({ type: "bar" }), (s[o] = n));
                  }
                  (i.push(s), this.$q.loading.hide(), this.columnPic("collectDep", a, i, l));
                }
            })
            .catch((t) => {
              this.collectNumList = [];
            })
        : (this.collectNumList = []);
    },
    percent(t, e) {
      return 0 === t || 0 === e ? 0 : Math.round((t / e) * 1e4) / 100;
    },
    checkTime() {
      0 === this.begin_time.length && 0 === this.end_time.length && 0 === this.task_target.length
        ? ((this.showPic = 0),
          this.$q.notify({
            color: "red-5",
            textColor: "white",
            icon: "warning",
            message: "请选择统计时间与统计教师！",
          }))
        : 0 === this.begin_time.length || 0 === this.end_time.length
          ? ((this.showPic = 0),
            this.$q.notify({
              color: "red-5",
              textColor: "white",
              icon: "warning",
              message: "请选择统计时间！",
            }))
          : 0 === this.task_target.length
            ? ((this.showPic = 0),
              this.$q.notify({
                color: "red-5",
                textColor: "white",
                icon: "warning",
                message: "请选择统计教师！",
              }))
            : this.$axiosAction("/api/teacher/teaanalysis/tanalysis.api", {
                action: "checkTime",
                begin_time: this.begin_time,
                end_time: this.end_time,
              }).then((t) => {
                0 === t.data.code
                  ? ((this.showPic = 1),
                    (this.begin_date = this.begin_time),
                    (this.end_date = this.end_time),
                    this.getCollectAllNum(),
                    this.$q.loading.show(),
                    (this.showExp = !1))
                  : ((this.showPic = 0), (this.begin_date = ""), (this.end_date = ""));
              });
    },
  },
};
export default componentOptions;
