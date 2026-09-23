/**
 * Vue options object recovered from webpack module AST.
 * Source: assets/www/js/chunk-common.js -> module "8bef"
 * Route: (shared/core)
 * Component: NeuDefineWidget
 * Not guaranteed standalone: imports/module aliases must be resolved from sibling .logic.js.
 */
const componentOptions = {
  name: "NeuDefineWidget",
  props: { value: null, risk: Boolean },
  data() {
    return {
      widgetList: [
        { value: "T", label: "文本", icon: "translate" },
        { value: "N", label: "数字", icon: "looks_one" },
        { value: "R", label: "单选", icon: "radio_button_checked" },
        { value: "C", label: "多选", icon: "check_box" },
        { value: "D", label: "日期时间", icon: "access_time" },
        { value: "S", label: "电子签名", icon: "mdi-draw" },
        { value: "A", label: "地区", icon: "map" },
        { value: "F", label: "文件上传", icon: "mdi-file-word" },
      ],
      modelValue: this.defaultModelValue(),
      options: [""],
      isRisk: !1,
      riskMode: !1,
      riskConfig: null,
    };
  },
  mounted() {
    (this.initModelValue(this.value), (this.isRisk = this.risk));
  },
  watch: {
    value(e) {
      this.initModelValue(e);
    },
    risk(e) {
      this.isRisk = e;
    },
  },
  computed: {
    numberStep() {
      return this.modelValue.isDecimal
        ? 1 / Math.pow(10, this.modelValue.decimalPlaces ? this.modelValue.decimalPlaces : 2)
        : 1;
    },
  },
  methods: {
    defaultModelValue() {
      return {
        label: "",
        type: "T",
        required: !1,
        isTextarea: !1,
        isDecimal: !1,
        decimalPlaces: 2,
        isOther: !1,
        selectPattern: "R",
        dtPattern: "D",
        fileCount: 1,
        fileSize: 1,
        fileExts: this.$appConf.fileExts.concat(this.$appConf.pictureExts),
      };
    },
    initModelValue(e) {
      e
        ? ((this.modelValue = o()({}, e)),
          e.options && (this.options = e.options.reduce((e, t) => e.concat(t.value), [])),
          e.riskConfig
            ? (this.riskConfig = JSON.parse(JSON.stringify(e.riskConfig)))
            : "R" === e.type || "C" === e.type
              ? (this.riskConfig = [])
              : "A" === e.type || "T" === e.type
                ? (this.riskConfig = "")
                : "N" === e.type && (this.riskConfig = { min: null, max: null }),
          (this.riskMode = !!e.riskMode && e.riskMode))
        : (this.modelValue = this.defaultModelValue());
    },
    cancel() {
      this.$emit("cancel");
    },
    submit() {
      const e = {
          label: this.modelValue.label,
          hint: this.modelValue.hint,
          type: this.modelValue.type,
          required: this.modelValue.required,
        },
        t = {};
      ("T" === this.modelValue.type
        ? ((this.modelValue.minLength || 0 === this.modelValue.minLength) &&
            (t.minLength = this.modelValue.minLength),
          (this.modelValue.maxLength || 0 === this.modelValue.maxLength) &&
            (t.maxLength = this.modelValue.maxLength),
          (t.isTextarea = this.modelValue.isTextarea || !1))
        : "N" === this.modelValue.type
          ? ((this.modelValue.minValue || 0 === this.modelValue.minValue) &&
              (t.minValue = this.modelValue.minValue),
            (this.modelValue.maxValue || 0 === this.modelValue.maxValue) &&
              (t.maxValue = this.modelValue.maxValue),
            (t.isDecimal = this.modelValue.isDecimal || !1),
            (this.modelValue.decimalPlaces || 0 === this.modelValue.decimalPlaces) &&
              (t.decimalPlaces = this.modelValue.decimalPlaces))
          : "R" === this.modelValue.type || "C" === this.modelValue.type
            ? ((t.options = this.options.reduce((e, t) => e.concat({ value: t, label: t }), [])),
              (t.isOther = this.modelValue.isOther || !1),
              "R" === this.modelValue.type &&
                (t.selectPattern = this.modelValue.selectPattern || "R"))
            : "D" === this.modelValue.type
              ? (t.dtPattern = this.modelValue.dtPattern || "D")
              : "F" === this.modelValue.type &&
                ((t.fileCount = this.modelValue.fileCount),
                (t.fileSize = this.modelValue.fileSize),
                (t.fileExts = this.modelValue.fileExts)),
        this.riskMode &&
          ((t.riskMode = this.riskMode),
          "R" === this.modelValue.type || "C" === this.modelValue.type
            ? (t.riskConfig = this.riskConfig.reduce(
                (e, t) => (-1 !== this.options.findIndex((e) => e === t) ? e.concat(t) : e),
                [],
              ))
            : "A" === this.modelValue.type || "T" === this.modelValue.type
              ? (t.riskConfig = this.riskConfig)
              : "N" === this.modelValue.type && (t.riskConfig = o()({}, this.riskConfig))),
        this.$emit("input", o()(o()({}, e), t)),
        this.$emit("save"));
    },
    changeType(e) {
      ("R" === e || "C" === e
        ? (this.riskConfig = [])
        : "A" === e || "T" === e
          ? (this.riskConfig = "")
          : "N" === e && (this.riskConfig = { min: null, max: null }),
        "F" === e &&
          (this.modelValue = {
            label: this.modelValue.label,
            type: "F",
            required: !1,
            isTextarea: !1,
            isDecimal: !1,
            decimalPlaces: 2,
            isOther: !1,
            selectPattern: "R",
            dtPattern: "D",
            fileCount: 1,
            fileSize: 1,
            fileExts: this.$appConf.fileExts.concat(this.$appConf.pictureExts),
          }));
    },
    checkMaxLengthMinLength(e, t) {
      let i = /^[1-9]\d*$/;
      "min" === t && (i = /^\d+$/);
      const a = new RegExp(i);
      return null == e || "" === e || a.test(e)
        ? !(
            "min" === t &&
            null != this.modelValue.maxLength &&
            "" !== this.modelValue.maxLength &&
            null != this.modelValue.minLength &&
            "" !== this.modelValue.minLength &&
            this.modelValue.maxLength < this.modelValue.minLength
          ) || "最少填写字数应小于等于最多填写字数"
        : "min" === t
          ? "请填写非负整数"
          : "请填写正整数";
    },
    checkMaxValueMinValue(e, t) {
      if (
        "min" === t &&
        null != this.modelValue.maxValue &&
        "" !== this.modelValue.maxValue &&
        null != this.modelValue.minValue &&
        "" !== this.modelValue.minValue &&
        this.modelValue.maxValue < this.modelValue.minValue
      )
        return "最小值应小于等于最大值";
      if (!this.modelValue.isDecimal) {
        const t = new RegExp(/^-?\d+$/);
        return !(null != e && "" !== e && !t.test(e)) || "请填写整数";
      }
    },
    checkDecimalPlaces(e) {
      if (this.modelValue.isDecimal) {
        const t = new RegExp(/^[1-9]\d*$/);
        return !!t.test(e) || "请填写正整数";
      }
      return !0;
    },
    checkOption(e, t) {
      return this.options.some((i, a) => i === e && a !== t)
        ? "选项重复"
        : e.indexOf(":") > -1 || e.indexOf(",") > -1
          ? "选项不允许包含“:”和“,”号"
          : ("C" !== this.modelValue.type &&
              ("R" !== this.modelValue.type || "R" !== this.modelValue.selectPattern)) ||
            !this.modelValue.isOther ||
            "其他" !== e ||
            "选项与[其他]重名，请更换";
    },
    addOption() {
      this.options.splice(this.options.length, 0, "");
    },
    moveOption(e, t) {
      "up" === t
        ? this.options.splice(e - 1, 0, this.options.splice(e, 1)[0])
        : this.options.splice(e + 1, 0, this.options.splice(e, 1)[0]);
    },
    deleteOption(e) {
      this.options.splice(e, 1);
    },
    checkFileCount(e) {
      const t = new RegExp(/^([1-9]|10)$/);
      return !!t.test(e) || "请填写1-10之间的整数";
    },
    checkFileSize(e) {
      const t = new RegExp(/^[1-5]$/);
      return !!t.test(e) || "请填写1-5之间的整数";
    },
    checkRiskMaxValueMinValue(e) {
      return (
        !(
          null != this.$refs.riskMax.value &&
          "" !== this.$refs.riskMax.value &&
          null != e &&
          "" !== e &&
          this.$refs.riskMax.value < e
        ) || "下限值不应超过上限值"
      );
    },
    checkLabel(e) {
      if (!e && 0 !== e) return "请填写该项";
      const t = new RegExp("^(-?\\d+)(\\.\\d+)?$");
      return !t.test(e) || "不可以为纯数字表达式";
    },
  },
};
export default componentOptions;
