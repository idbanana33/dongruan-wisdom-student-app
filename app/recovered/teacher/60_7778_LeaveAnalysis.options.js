/**
 * Vue options object recovered from webpack module AST.
 * Source: assets/www/js/60.js -> module "7778"
 * Route: /teacher/analysis/stuData
 * Component: LeaveAnalysis
 * Not guaranteed standalone: imports/module aliases must be resolved from sibling .logic.js.
 */
const componentOptions = {
  name: "NoticeAnalysis",
  props: {},
  components: { NeuAssignStudent: n["a"] },
  data() {
    return {
      noticeTab: "realTime",
      TrueNotice: null,
      allNotice: null,
      allRead: null,
      read: null,
      realList: [],
      readList: [],
      readTypeList: [],
      realTypeList: [],
      label: null,
      readTate: "阅读率",
      trueTate: "确认率",
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
      getNoitceTypeList: [],
      selection: [],
      notice_priority: "",
    };
  },
  computed: {},
  mounted() {
    (window.localStorage.getItem("menu") &&
      (this.menuInfo = JSON.parse(window.localStorage.getItem("menu")).find(
        (t) => "analysis" === t.id,
      )),
      this.getWeekDate(),
      this.getNoitceType());
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
    NoticeRule(t) {
      ("confirm" === t
        ? ((this.ruleTitle = "确认率"), (this.ruleMessage = "已经确认通知总数/需要确认通知总数"))
        : "read" === t
          ? ((this.ruleTitle = "阅读率"), (this.ruleMessage = "已阅读总数/通知总数"))
          : "gradeconfirm" === t
            ? ((this.ruleTitle = "按年级统计确认率"),
              (this.ruleMessage = "(选中对应年级下所选学生)已经确认通知总数/需要确认通知总数"))
            : "graderead" === t
              ? ((this.ruleTitle = "按年级统计阅读率"),
                (this.ruleMessage = "(选中对应年级下所选学生)已阅读总数/通知总数"))
              : "majornamefeedbacked" === t
                ? ((this.ruleTitle = "按专业统计阅读率"),
                  (this.ruleMessage = "(选中对应专业下所选学生)已阅读总数/通知总数"))
                : "majornameconfirm" === t
                  ? ((this.ruleTitle = "按专业统计阅读率"),
                    (this.ruleMessage =
                      "(选中对应专业下所选学生)已经确认通知总数/需要确认通知总数"))
                  : "depconfirm" === t
                    ? ((this.ruleTitle = "按院系统计阅读率"),
                      (this.ruleMessage =
                        "(选中对应院系下所选学生)已经确认通知总数/需要确认通知总数"))
                    : "depfeedbacked" === t
                      ? ((this.ruleTitle = "按院系统计阅读率"),
                        (this.ruleMessage = "(选中对应院系下所选学生)已阅读总数/通知总数"))
                      : "classnameconfirm" === t
                        ? ((this.ruleTitle = "按班级统计阅读率"),
                          (this.ruleMessage =
                            "(选中对应班级下所选学生)已经确认通知总数/需要确认通知总数"))
                        : "classfeebacked" === t &&
                          ((this.ruleTitle = "按班级统计阅读率"),
                          (this.ruleMessage = "(选中对应班级下所选学生)已阅读总数/通知总数")),
        (this.countRuleShow = !0));
    },
    ringPic(t, e, a) {
      const i = document.getElementById(t),
        s = r["a"](i);
      var n = {};
      ((n = {
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
        n && s.setOption(n));
    },
    columnPic(t, e, a, i) {
      const s = document.getElementById(t),
        n = r["a"](s);
      var l = {};
      ((l = {
        legend: { type: "scroll" },
        tooltip: {},
        dataset: { dimensions: e, source: a },
        xAxis: { axisLabel: { show: !0, interval: "auto", formatter: "{value} %" } },
        yAxis: { type: "category" },
        series: i,
      }),
        l && n.setOption(l, !0));
    },
    getAllNum() {
      0 !== this.begin_time.length &&
        0 !== this.end_time.length &&
        0 !== this.task_target.length &&
        this.$axiosAction("/api/teacher/analysis/analysis.api", {
          action: "getNoticeAllPcNum",
          task_target: JSON.stringify(this.task_target),
          begin_time: this.begin_time,
          end_time: this.end_time,
          teacher_no: this.loginName,
          notice_priority: this.selection,
        })
          .then((t) => {
            const e = [],
              a = ["product"],
              i = { product: "年\n级\n通\n知\n确\n认\n率" },
              s = [],
              n = [],
              l = ["product"],
              o = { product: "年\n级\n通\n知\n阅\n读\n率" },
              r = [],
              c = ["product"],
              d = { product: "院\n系\n通\n知\n阅\n读\n率" },
              m = [],
              h = [],
              u = ["product"],
              p = { product: "院\n系\n通\n知\n确\n认\n率" },
              g = [],
              v = [],
              w = ["product"],
              _ = { product: "专\n业\n通\n知\n阅\n读\n率" },
              y = [],
              b = [],
              f = ["product"],
              x = { product: "专\n业\n通\n知\n确\n认\n率" },
              C = [],
              q = [],
              S = ["product"],
              k = { product: "班\n级\n通\n知\n阅\n度\n率" },
              T = [],
              N = [],
              P = ["product"],
              I = { product: "班\n级\n通\n知\n确\n认\n率" },
              L = [],
              R = [],
              D = [],
              A = [];
            if (0 === t.data.code)
              if ("realTime" === this.noticeTab) {
                this.realList = t.data.confirmResult;
                for (let e = 0; e < t.data.confirmResult.length; e++)
                  "未确认通知" === t.data.confirmResult[e].name
                    ? D.push(t.data.confirmResult[e])
                    : "已经确认通知" === t.data.confirmResult[e].name
                      ? (D.push(t.data.confirmResult[e]),
                        (this.TrueNotice = t.data.confirmResult[e].value))
                      : (this.allNotice = t.data.confirmResult[e].value);
                (this.$q.loading.hide(),
                  this.ringPic(
                    "true",
                    D,
                    this.percent(this.TrueNotice, this.allNotice) + "%\n确认率",
                  ),
                  (this.realTypeList = t.data.confirmTypeResult),
                  (this.readList = t.data.readResult));
                for (let e = 0; e < t.data.readResult.length; e++)
                  "未阅读" === t.data.readResult[e].name
                    ? A.push(t.data.readResult[e])
                    : "阅读" === t.data.readResult[e].name
                      ? (A.push(t.data.readResult[e]), (this.read = t.data.readResult[e].value))
                      : (this.allRead = t.data.readResult[e].value);
                (this.$q.loading.hide(),
                  this.ringPic("read", A, this.percent(this.read, this.allRead) + "%\n阅读率"),
                  (this.readTypeList = t.data.readTypeResult));
              } else if ("generalSituation" === this.noticeTab) {
                for (let e = 0; e < t.data.gradeReadNumResult.length; e++) {
                  const a = t.data.gradeReadNumResult[e].grade_name,
                    i =
                      this.percent(
                        t.data.gradeReadNumResult[e].gradefeedbacked,
                        t.data.gradeReadNumResult[e].total,
                      ) + "%",
                    s =
                      a +
                      " " +
                      i +
                      "(" +
                      t.data.gradeReadNumResult[e].gradefeedbacked +
                      "/" +
                      t.data.gradeReadNumResult[e].total +
                      ")";
                  (r.push({ type: "bar" }),
                    l.push(s),
                    (o[s] = this.percent(
                      t.data.gradeReadNumResult[e].gradefeedbacked,
                      t.data.gradeReadNumResult[e].total,
                    )));
                }
                (n.push(o), this.$q.loading.hide(), this.columnPic("graderead", l, n, r));
                for (let e = 0; e < t.data.gradeConfirNumResult.length; e++) {
                  const n = t.data.gradeConfirNumResult[e].grade_name,
                    l =
                      this.percent(
                        t.data.gradeConfirNumResult[e].gradeconfirm,
                        t.data.gradeConfirNumResult[e].total,
                      ) + "%",
                    o =
                      n +
                      " " +
                      l +
                      "(" +
                      t.data.gradeConfirNumResult[e].gradeconfirm +
                      "/" +
                      t.data.gradeConfirNumResult[e].total +
                      ")";
                  (a.push(o),
                    s.push({ type: "bar" }),
                    (i[o] = this.percent(
                      t.data.gradeConfirNumResult[e].gradeconfirm,
                      t.data.gradeConfirNumResult[e].total,
                    )));
                }
                (e.push(i), this.$q.loading.hide(), this.columnPic("gradeconfirm", a, e, s));
                for (let e = 0; e < t.data.majorReadNumResult.length; e++) {
                  const a = t.data.majorReadNumResult[e].majorfeedback,
                    i =
                      this.percent(
                        t.data.majorReadNumResult[e].majfeedbacked,
                        t.data.majorReadNumResult[e].total,
                      ) + "%",
                    s =
                      a +
                      " " +
                      i +
                      "(" +
                      t.data.majorReadNumResult[e].majfeedbacked +
                      "/" +
                      t.data.majorReadNumResult[e].total +
                      ")";
                  (y.push({ type: "bar" }),
                    w.push(s),
                    (_[s] = this.percent(
                      t.data.majorReadNumResult[e].majfeedbacked,
                      t.data.majorReadNumResult[e].total,
                    )));
                }
                (b.push(_), this.$q.loading.hide(), this.columnPic("majornamefeedbacked", w, b, y));
                for (let e = 0; e < t.data.majorConfirNumResult.length; e++) {
                  const a = t.data.majorConfirNumResult[e].majorconfirm,
                    i =
                      this.percent(
                        t.data.majorConfirNumResult[e].majconfirmnum,
                        t.data.majorConfirNumResult[e].total,
                      ) + "%",
                    s =
                      a +
                      " " +
                      i +
                      "(" +
                      t.data.majorConfirNumResult[e].majconfirmnum +
                      "/" +
                      t.data.majorConfirNumResult[e].total +
                      ")";
                  (C.push({ type: "bar" }),
                    f.push(s),
                    (x[s] = this.percent(
                      t.data.majorConfirNumResult[e].majconfirmnum,
                      t.data.majorConfirNumResult[e].total,
                    )));
                }
                (q.push(x), this.$q.loading.hide(), this.columnPic("majornameconfirm", f, q, C));
                for (let e = 0; e < t.data.depReadNumResult.length; e++) {
                  const a = t.data.depReadNumResult[e].depfeedback,
                    i =
                      this.percent(
                        t.data.depReadNumResult[e].depfeedbacked,
                        t.data.depReadNumResult[e].total,
                      ) + "%",
                    s =
                      a +
                      " " +
                      i +
                      "(" +
                      t.data.depReadNumResult[e].depfeedbacked +
                      "/" +
                      t.data.depReadNumResult[e].total +
                      ")";
                  (m.push({ type: "bar" }),
                    c.push(s),
                    (d[s] = this.percent(
                      t.data.depReadNumResult[e].depfeedbacked,
                      t.data.depReadNumResult[e].total,
                    )));
                }
                (h.push(d), this.$q.loading.hide(), this.columnPic("depfeedbacked", c, h, m));
                for (let e = 0; e < t.data.depConfirmNumResult.length; e++) {
                  const a = t.data.depConfirmNumResult[e].depconfirm,
                    i =
                      this.percent(
                        t.data.depConfirmNumResult[e].depconfirmnum,
                        t.data.depConfirmNumResult[e].total,
                      ) + "%",
                    s =
                      a +
                      " " +
                      i +
                      "(" +
                      t.data.depConfirmNumResult[e].depconfirmnum +
                      "/" +
                      t.data.depConfirmNumResult[e].total +
                      ")";
                  (g.push({ type: "bar" }),
                    u.push(s),
                    (p[s] = this.percent(
                      t.data.depConfirmNumResult[e].depconfirmnum,
                      t.data.depConfirmNumResult[e].total,
                    )));
                }
                (v.push(p), this.$q.loading.hide(), this.columnPic("depconfirm", u, v, g));
                for (let e = 0; e < t.data.classReadNumResult.length; e++) {
                  const a = t.data.classReadNumResult[e].class_name,
                    i =
                      this.percent(
                        t.data.classReadNumResult[e].noclassfeedback,
                        t.data.classReadNumResult[e].total,
                      ) + "%",
                    s =
                      a +
                      " " +
                      i +
                      "(" +
                      t.data.classReadNumResult[e].noclassfeedback +
                      "/" +
                      t.data.classReadNumResult[e].total +
                      ")";
                  (T.push({ type: "bar" }),
                    S.push(s),
                    (k[s] = this.percent(
                      t.data.classReadNumResult[e].noclassfeedback,
                      t.data.classReadNumResult[e].total,
                    )));
                }
                (N.push(k), this.$q.loading.hide(), this.columnPic("classfeebacked", S, N, T));
                for (let e = 0; e < t.data.classConfirmNumResult.length; e++) {
                  const a = t.data.classConfirmNumResult[e].class_name,
                    i =
                      this.percent(
                        t.data.classConfirmNumResult[e].classconfirm,
                        t.data.classConfirmNumResult[e].total,
                      ) + "%",
                    s =
                      a +
                      " " +
                      i +
                      "(" +
                      t.data.classConfirmNumResult[e].classconfirm +
                      "/" +
                      t.data.classConfirmNumResult[e].total +
                      ")";
                  (L.push({ type: "bar" }),
                    P.push(s),
                    (I[s] = this.percent(
                      t.data.classConfirmNumResult[e].classconfirm,
                      t.data.classConfirmNumResult[e].total,
                    )));
                }
                (R.push(I), this.$q.loading.hide(), this.columnPic("classnameconfirm", P, R, L));
              }
          })
          .catch((t) => {
            ((this.gradeReadList = []),
              (this.gradeConfirmList = []),
              (this.majorReadList = []),
              (this.majorConfirmList = []),
              (this.depReadList = []),
              (this.depConfirmList = []),
              (this.classReadList = []),
              (this.classConfirmList = []));
          });
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
            message: "请选择统计时间与统计学生！",
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
                message: "请选择统计学生！",
              }))
            : this.$axiosAction("/api/teacher/analysis/analysis.api", {
                action: "checkTime",
                begin_time: this.begin_time,
                end_time: this.end_time,
              }).then((t) => {
                0 === t.data.code
                  ? ((this.showPic = 1),
                    (this.begin_date = this.begin_time),
                    (this.end_date = this.end_time),
                    this.getAllNum(),
                    this.$q.loading.show(),
                    (this.showExp = !1))
                  : ((this.showPic = 0), (this.begin_date = ""), (this.end_date = ""));
              });
    },
    getNoitceType() {
      this.$axiosAction("/api/teacher/analysis/analysis.api", { action: "getNoitceType" }).then(
        (t) => {
          ((this.getNoitceTypeList = t.data.getNoitceType),
            (this.selection = this.getNoitceTypeList.reduce((t, e) => t.concat(e.value), [])));
        },
      );
    },
  },
};
export default componentOptions;
