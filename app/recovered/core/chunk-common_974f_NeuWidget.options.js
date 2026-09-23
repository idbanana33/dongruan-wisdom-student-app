/**
 * Vue options object recovered from webpack module AST.
 * Source: assets/www/js/chunk-common.js -> module "974f"
 * Route: (shared/core)
 * Component: NeuWidget
 * Not guaranteed standalone: imports/module aliases must be resolved from sibling .logic.js.
 */
const componentOptions = {
  name: "NeuWidget",
  components: { vueEsign: o.a, NeuGeoLocation: c["a"], NeuFullScreenImage: u["a"] },
  props: {
    value: null,
    config: Object,
    labelClass: String,
    controlClass: String,
    labelColon: Boolean,
    labelTextRight: Boolean,
    viewMode: Boolean,
    no: Number,
    showRiskInfo: Boolean,
  },
  data() {
    return {
      modelValue: null,
      conf: {},
      lClass: "col-12",
      cClass: "col-12",
      lColon: !1,
      lTextRight: !1,
      readonly: !1,
      lNo: null,
      clearIconColor: "grey",
      dialog: !1,
      provinces: [],
      areas: [],
      currList: [],
      currLevel: 1,
      pcas: {},
      uploader: window.localStorage.server + this.$appConf.fileUploader,
      research: null,
      showBigPic: !1,
      bigPicUrl: "",
      bigPicName: "",
      showRiskConf: !1,
      isHarmonyOS: !1,
    };
  },
  mounted() {
    (this.labelClass && (this.lClass = this.labelClass),
      this.controlClass && (this.cClass = this.controlClass),
      (this.readonly = this.viewMode),
      (this.modelValue = this.value),
      (this.lColon = this.labelColon),
      (this.lTextRight = this.labelTextRight),
      (this.lNo = this.no),
      (this.showRiskConf = this.showRiskInfo),
      this.initConf(this.config),
      this.detectOperatingSystem());
  },
  computed: {
    riskTip() {
      return !!this.readonly && Object(r["a"])(this.conf, this.modelValue);
    },
    riskConfInfo() {
      return this.showRiskConf && this.conf.riskMode
        ? ("R" === this.conf.type || "C" === this.conf.type) &&
          this.conf.riskConfig &&
          this.conf.riskConfig.length > 0
          ? "风险提示选项：" + this.conf.riskConfig.reduce((e, t) => `${e}<br>${t}`, "")
          : ("A" !== this.conf.type && "T" !== this.conf.type) || !this.conf.riskConfig
            ? "N" === this.conf.type && this.conf.riskConfig
              ? `风险提示区间：[${this.conf.riskConfig.min}, ${this.conf.riskConfig.max}]`
              : null
            : "风险提示数据：<br>" +
              this.conf.riskConfig.replace(/(\r\n)/g, /\n/).replace(/(\n)/g, "<br>")
        : null;
    },
    textPlaceholder() {
      return (!this.conf.minLength && 0 !== this.conf.minLength) ||
        (!this.conf.maxLength && 0 !== this.conf.maxLength)
        ? this.conf.minLength || 0 === this.conf.minLength
          ? `最少填写${this.conf.minLength}个字`
          : this.conf.maxLength || this.conf.maxLength
            ? `最多填写${this.conf.maxLength}个字`
            : ""
        : `请填写${this.conf.minLength}~${this.conf.maxLength}个字`;
    },
    numberPlaceholder() {
      return (!this.conf.minValue && 0 !== this.conf.minValue) ||
        (!this.conf.maxValue && 0 !== this.conf.maxValue)
        ? this.conf.minValue || 0 === this.conf.minValue
          ? `最小值${this.conf.minValue}`
          : this.conf.maxValue || 0 === this.conf.maxValue
            ? `最大值${this.conf.maxValue}`
            : ""
        : `请填写${this.conf.minValue}~${this.conf.maxValue}的${this.conf.isDecimal ? "" : "整"}数`;
    },
    numberStep() {
      return this.conf.isDecimal
        ? 1 / Math.pow(10, this.conf.decimalPlaces ? this.conf.decimalPlaces : 2)
        : 1;
    },
  },
  watch: {
    value(e) {
      ((this.modelValue = e), this.initConf(this.conf));
    },
    modelValue(e) {
      this.$emit("input", e);
    },
    viewMode(e) {
      this.readonly = e;
    },
    labelClass(e) {
      this.lClass = e;
    },
    controlClass(e) {
      this.cClass = e;
    },
    config(e) {
      this.initConf(e);
    },
    labelColon(e) {
      this.lColon = e;
    },
    labelTextRight(e) {
      this.lTextRight = e;
    },
    no(e) {
      this.lNo = e;
    },
    showRiskInfo(e) {
      this.showRiskConf = e;
    },
  },
  methods: {
    initConf(e) {
      ((this.conf = e || {
        label: "",
        hint: "",
        type: "T",
        required: !1,
        minLength: 1,
        maxLength: 100,
        isTextarea: !1,
        minValue: 0,
        maxValue: 100,
        isDecimal: !1,
        decimalPlaces: 2,
        selectPattern: "R",
        options: [],
        isOther: !1,
        dtPattern: "D",
        fileCount: 1,
        fileSize: 1,
        fileExts: [],
      }),
        ("T" !== this.conf.type && "D" !== this.conf.type && "S" !== this.conf.type) ||
        !this.modelValue ||
        "string" === typeof this.modelValue
          ? ("N" === this.conf.type &&
              this.modelValue &&
              "string" !== typeof this.modelValue &&
              "number" !== typeof this.modelValue) ||
            ("F" === this.conf.type && this.modelValue && !Array.isArray(this.modelValue))
            ? (this.modelValue = null)
            : "R" === this.conf.type && "S" !== this.conf.selectPattern && this.conf.isOther
              ? this.modelValue
                ? this.modelValue &&
                  ("object" !== typeof this.modelValue || Array.isArray(this.modelValue)) &&
                  (this.modelValue = { value: "", other: "" })
                : (this.modelValue = { value: "", other: "" })
              : "R" !== this.conf.type ||
                  ("S" !== this.conf.selectPattern &&
                    ("S" === this.conf.selectPattern || this.conf.isOther)) ||
                  "string" === typeof this.modelValue ||
                  "number" === typeof this.modelValue
                ? "C" !== this.conf.type || this.conf.isOther
                  ? "C" === this.conf.type && this.conf.isOther
                    ? this.modelValue
                      ? this.modelValue &&
                        ("object" !== typeof this.modelValue || Array.isArray(this.modelValue)) &&
                        (this.modelValue = { value: [], other: "" })
                      : (this.modelValue = { value: [], other: "" })
                    : "A" === this.conf.type &&
                      (this.modelValue
                        ? this.modelValue &&
                          ("object" !== typeof this.modelValue || Array.isArray(this.modelValue)) &&
                          (this.modelValue = { code: [], name: [], value: "" })
                        : (this.modelValue = { code: [], name: [], value: "" }),
                      this.$axiosAction(
                        `${this.$appConf.portalUrl}/api/pcas_new/0.json`,
                        null,
                        "post",
                        !1,
                      ).then((e) => {
                        this.provinces = e.data;
                      }))
                  : this.modelValue
                    ? this.modelValue && !Array.isArray(this.modelValue) && (this.modelValue = [])
                    : (this.modelValue = [])
                : (this.modelValue = null)
          : (this.modelValue = null));
    },
    detectOperatingSystem() {
      const e = navigator.userAgent.toLowerCase();
      e.indexOf("harmonyos") >= 0 || e.indexOf("huawei") >= 0 || e.indexOf("emui") >= 0
        ? (this.isHarmonyOS = !0)
        : (e.indexOf("android") >= 0 || e.indexOf("linux") >= 0) && (this.isHarmonyOS = !1);
    },
    checkNumber(e) {
      if (this.readonly) return;
      if (!e && 0 !== e) return !this.conf.required || "请填写该项";
      const t = this.conf.isDecimal
          ? `^(-?\\d+)(\\.\\d{1,${this.conf.decimalPlaces || 2}})?$`
          : "^-?\\d+$",
        i = new RegExp(t);
      return i.test(e)
        ? (this.conf.maxValue || 0 === this.conf.maxValue) && e > this.conf.maxValue
          ? `最大填写${this.conf.maxValue}`
          : (!this.conf.minValue && 0 !== this.conf.minValue) ||
            !(e < this.conf.minValue) ||
            `最小填写${this.conf.minValue}`
        : this.conf.isDecimal
          ? `请填写不超过${this.conf.decimalPlaces || 2}位的小数`
          : "请填写整数";
    },
    toggleOther() {
      (("R" === this.conf.type &&
        "S" !== this.conf.selectPattern &&
        "其他" !== this.modelValue.value) ||
        ("C" === this.conf.type &&
          this.modelValue.value &&
          this.modelValue.value.indexOf("其他") < 0)) &&
        (this.modelValue.other = "");
    },
    generateEsign() {
      this.$refs.esign
        .generate()
        .then((e) => {
          ((this.modelValue = e), (this.dialog = !1));
        })
        .catch(() => {
          this.conf.required
            ? this.$showErrorNotify("请签名")
            : ((this.modelValue = null), (this.dialog = !1));
        });
    },
    resetEsign() {
      this.$refs.esign.reset();
    },
    openPcasDialog() {
      this.readonly ||
        ((this.dialog = !0),
        (this.pcas = {
          code: ((this.modelValue || {}).code || []).reduce((e, t) => e.concat(t), []),
          name: ((this.modelValue || {}).name || []).reduce((e, t) => e.concat(t), []),
          value: ((this.modelValue || {}).name || []).reduce((e, t) => e + t, ""),
        }),
        0 === this.pcas.code.length
          ? ((this.currList = this.provinces), (this.currLevel = 1))
          : 1 === this.pcas.code.length
            ? ((this.currList = this.provinces.find((e) => e.code === this.pcas.code[0]).children),
              (this.currLevel = 2))
            : ((this.currList = []),
              this.$axiosAction(
                `${this.$appConf.portalUrl}/api/pcas_new/${this.pcas.code[1]}.json`,
                null,
                "post",
                !1,
              ).then((e) => {
                ((this.areas = e.data),
                  2 === this.pcas.code.length
                    ? ((this.currList = this.areas), (this.currLevel = 3))
                    : this.pcas.code.length > 2 &&
                      ((this.currList = this.areas.find(
                        (e) => e.code === this.pcas.code[2],
                      ).children),
                      (this.currLevel = 4),
                      this.currList || ((this.currList = this.areas), (this.currLevel = 3))));
              })));
    },
    extendPcas(e, t) {
      (this.resetPcas(e, t, this.currLevel),
        1 === this.currLevel
          ? (this.currList = this.provinces.find((e) => e.code === this.pcas.code[0]).children)
          : 2 === this.currLevel
            ? ((this.currList = []),
              this.$axiosAction(
                `${this.$appConf.portalUrl}/api/pcas_new/${e}.json`,
                null,
                "post",
                !1,
              ).then((e) => {
                ((this.areas = e.data), (this.currList = this.areas));
              }))
            : 3 === this.currLevel
              ? ((this.currList = this.areas.find((t) => t.code === e).children),
                (this.currList && 0 !== this.currList.length) || this.closePcasDialog())
              : 4 === this.currLevel && this.closePcasDialog(),
        (this.currLevel += 1));
    },
    extendPcasByLevel(e, t) {
      (this.resetPcas(
        t < 2 ? null : this.pcas.code[t - 2],
        t < 2 ? null : this.pcas.name[t - 2],
        t - 1,
      ),
        (this.currLevel = t),
        1 === t
          ? (this.currList = this.provinces)
          : 2 === t
            ? (this.currList = this.provinces.find(
                (e) => e.code === this.pcas.code[t - 2],
              ).children)
            : 3 === t && (this.currList = this.areas));
    },
    resetPcas(e, t, i) {
      0 === i
        ? (this.pcas = { code: [], name: [], value: "" })
        : ((this.pcas.code = this.pcas.code
            .reduce((e, t, a) => (a < i - 1 ? e.concat(t) : e), [])
            .concat(e)),
          (this.pcas.name = this.pcas.name
            .reduce((e, t, a) => (a < i - 1 ? e.concat(t) : e), [])
            .concat(t)),
          (this.pcas.value = this.pcas.name.reduce((e, t) => e + t, "")));
    },
    closePcasDialog() {
      ((this.modelValue = this.pcas), (this.dialog = !1));
    },
    matchingUploadedFiles(e, t) {
      return (e || []).reduce(
        (e, i) =>
          t && t.length > 0
            ? 0 ===
              t.reduce((e, t) => {
                if (t.xhr.response) {
                  const a = JSON.parse(t.xhr.response);
                  return a.servername === i.servername ? e + 1 : e;
                }
                return e;
              }, 0)
              ? e.concat(i)
              : e
            : e.concat(i),
        [],
      );
    },
    startUpload() {
      this.$q.loading.show();
    },
    finishUpload() {
      this.$q.loading.hide();
    },
    afterUploaded(e) {
      const t = JSON.parse(e.xhr.response);
      t.error
        ? this.$showErrorNotify(t.error)
        : this.modelValue
          ? this.modelValue.push(t)
          : (this.modelValue = [t]);
    },
    checkFile(e) {
      return e.filter((e) => {
        const t = 1048576 * this.conf.fileSize;
        if (e.size >= t)
          return (this.$showErrorNotify(`文件大小应限制在${this.conf.fileSize}MB以内`), !1);
        const i = e.name.lastIndexOf(".");
        if (!(i > 0)) return (this.$showErrorNotify("不支持该类型文件上传"), !1);
        {
          const t = e.name.substring(i + 1).toLowerCase();
          if (-1 === (this.conf.fileExts || []).indexOf(t))
            return (this.$showErrorNotify("不支持该类型文件上传"), !1);
        }
        return !0;
      });
    },
    onRejected(e) {
      this.$q.notify({ type: "negative", message: `${e.length}份文件不符合格式限制！` });
    },
    afterRemoved(e) {
      for (const t of e) {
        const e = JSON.parse(t.xhr.response);
        this.removeFile(e.servername);
      }
    },
    removeFile(e) {
      const t = this.modelValue.findIndex((t) => t.servername === e);
      this.modelValue.splice(t, 1);
    },
    downloadUploaderFile(e) {
      const t = JSON.parse(e.xhr.response),
        i = t.link.substring(t.link.lastIndexOf(".") + 1).toLowerCase();
      this.$appConf.pictureExts.findIndex((e) => e === i) > -1
        ? ((this.bigPicUrl = t.link), (this.bigPicName = t.srcname), (this.showBigPic = !0))
        : Object(n["c"])(t.link, t.srcname);
    },
    downloadFile(e, t) {
      const i = e.substring(e.lastIndexOf(".") + 1).toLowerCase();
      this.$appConf.pictureExts.findIndex((e) => e === i) > -1
        ? ((this.bigPicUrl = e), (this.bigPicName = t), (this.showBigPic = !0))
        : Object(n["c"])(e, t);
    },
    autoLocation() {
      this.research = (this.research ? this.research : 0) + 1;
    },
    locationCompleted(e) {
      const { province: t, city: i, district: a } = e.addressComponents;
      if (i && t !== i) {
        const e = this.provinces.find((e) => e.name === t);
        if (e) {
          this.resetPcas(e.code, e.name, 1);
          const t = e.children.find((e) => e.name === i);
          t
            ? (this.resetPcas(t.code, t.name, 2),
              (this.currList = []),
              this.$axiosAction(
                `${this.$appConf.portalUrl}/api/pcas_new/${t.code}.json`,
                null,
                "post",
                !1,
              ).then((e) => {
                this.areas = e.data;
                const t = this.areas.find((e) => e.name === a);
                t
                  ? (this.resetPcas(t.code, t.name, 3),
                    (this.currList = t.children),
                    (this.currLevel = 4))
                  : ((this.currList = this.areas), (this.currLevel = 3));
              }))
            : ((this.currList = e.children), (this.currLevel = 2));
        }
      } else {
        const e = this.provinces.find((e) => e.name === t);
        if (e) {
          this.resetPcas(e.code, e.name, 1);
          const t = e.children.find((e) => e.name === a);
          t
            ? (this.resetPcas(t.code, t.name, 2),
              (this.currList = []),
              this.$axiosAction(
                `${this.$appConf.portalUrl}/api/pcas_new/${t.code}.json`,
                null,
                "post",
                !1,
              ).then((e) => {
                ((this.areas = e.data), (this.currList = this.areas), (this.currLevel = 3));
              }))
            : ((this.currList = e.children), (this.currLevel = 2));
        }
      }
    },
    locationError(e) {
      this.$showErrorNotify("定位失败");
    },
  },
};
export default componentOptions;
