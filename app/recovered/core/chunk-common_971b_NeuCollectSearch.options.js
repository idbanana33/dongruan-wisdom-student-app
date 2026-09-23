/**
 * Vue options object recovered from webpack module AST.
 * Source: assets/www/js/chunk-common.js -> module "971b"
 * Route: (shared/core)
 * Component: NeuCollectSearch
 * Not guaranteed standalone: imports/module aliases must be resolved from sibling .logic.js.
 */
const componentOptions = {
  name: "NeuCollectSearch",
  props: { configList: Array, configSet: Array, returnForm: Array },
  data() {
    return { infoResultList: [], infoConfigList: [], configsRessultList: [], beforResult: [] };
  },
  mounted() {
    this.initModelValue(this.configList);
  },
  watch: {
    configList(e) {
      this.initModelValue(e);
    },
    configSet(e) {
      this.configSet = null !== e ? e : [];
    },
  },
  methods: {
    initModelValue(e) {
      ((this.infoConfigList = JSON.parse(JSON.stringify(e))),
        (this.infoResultList = []),
        this.returnForm.length > 0 && (this.beforResult = this.returnForm));
      for (const t in this.infoConfigList)
        ("T" === this.infoConfigList[t].type && this.$set(this.infoResultList, t, ""),
          "N" === this.infoConfigList[t].type &&
            this.$set(this.infoResultList, t, { more: null, less: null }),
          "R" === this.infoConfigList[t].type && this.$set(this.infoResultList, t, null),
          ("T" !== this.infoConfigList[t].type &&
            "N" !== this.infoConfigList[t].type &&
            "R" !== this.infoConfigList[t].type) ||
            (-1 !==
              this.beforResult.findIndex(
                (e) =>
                  e.label === this.infoConfigList[t].label &&
                  e.index === this.infoConfigList[t].index,
              ) &&
              this.$set(
                this.infoResultList,
                t,
                this.beforResult[
                  this.beforResult.findIndex(
                    (e) =>
                      e.label === this.infoConfigList[t].label &&
                      e.index === this.infoConfigList[t].index,
                  )
                ].value,
              )));
    },
    searchInfo() {
      this.configsRessultList = [];
      for (const e in this.infoResultList)
        ("" !== this.infoResultList[e] &&
          "T" === this.infoConfigList[e].type &&
          this.configsRessultList.push({
            index: this.configSet.findIndex(
              (t) =>
                t.label === this.infoConfigList[e].label &&
                t.index === this.infoConfigList[e].index,
            ),
            value: this.infoResultList[e],
            configType: this.infoConfigList[e].type,
            label: this.infoConfigList[e].label,
          }),
          "N" !== this.infoConfigList[e].type ||
            (null === this.infoResultList[e].more && null === this.infoResultList[e].less) ||
            this.configsRessultList.push({
              index: this.configSet.findIndex(
                (t) =>
                  t.label === this.infoConfigList[e].label &&
                  t.index === this.infoConfigList[e].index,
              ),
              value: this.infoResultList[e],
              configType: this.infoConfigList[e].type,
              label: this.infoConfigList[e].label,
            }),
          null !== this.infoResultList[e] &&
            "R" === this.infoConfigList[e].type &&
            ("R" === this.infoConfigList[e].selectPattern
              ? this.configsRessultList.push({
                  index: this.configSet.findIndex(
                    (t) =>
                      t.label === this.infoConfigList[e].label &&
                      t.index === this.infoConfigList[e].index,
                  ),
                  value: this.infoResultList[e],
                  configType: this.infoConfigList[e].type,
                  label: this.infoConfigList[e].label,
                })
              : "S" === this.infoConfigList[e].selectPattern &&
                this.configsRessultList.push({
                  index: this.configSet.findIndex(
                    (t) =>
                      t.label === this.infoConfigList[e].label &&
                      t.index === this.infoConfigList[e].index,
                  ),
                  value: this.infoResultList[e],
                  configType: this.infoConfigList[e].type + "S",
                  label: this.infoConfigList[e].label,
                })));
      (this.$emit("input", [...this.configsRessultList]),
        this.$emit("saveForm", JSON.parse(JSON.stringify(this.configsRessultList))),
        (this.beforResult = JSON.parse(JSON.stringify(this.configsRessultList))));
    },
    resetInfoResultList() {
      ((this.infoResultList = []), (this.beforResult = []), this.$emit("reset"));
    },
    closeIndex(e) {
      this.configList.splice(e, 1);
    },
  },
};
export default componentOptions;
