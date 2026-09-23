/**
 * Vue options object recovered from webpack module AST.
 * Source: assets/www/js/102.js -> module "40d3"
 * Route: /teacher/process/processTypeList
 * Component: processNavigation
 * Not guaranteed standalone: imports/module aliases must be resolved from sibling .logic.js.
 */
const componentOptions = {
  name: "processNavigation",
  data() {
    return {
      count: 0,
      menuInfo: null,
      typeName: "",
      type_id: this.$route.query.type_id,
      service_flag: "N",
      record: {},
    };
  },
  destroyed() {
    window.removeEventListener("popstate", this.goBack, !1);
  },
  mounted() {
    if (window.localStorage.getItem("menu")) {
      this.service_flag = this.$route.query.service_flag;
      let t = "process";
      ((t = "N" === this.service_flag ? "process" : "process_gate"),
        (this.menuInfo = JSON.parse(window.localStorage.getItem("menu")).find((e) => e.id === t)));
    }
    (this.getCount(),
      window.history &&
        window.history.pushState &&
        (history.pushState(null, null, document.URL),
        window.addEventListener("popstate", this.goBack, !1)));
  },
  methods: {
    getCount() {
      const t = { tab: "reviewing" };
      ((t.type_id = this.type_id),
        this.$axiosAction(
          "/api/teacher/process/process.api",
          n()({ action: "getTeacherReviewNew" }, t),
        ).then((t) => {
          ("" === t.data.typeName && (this.$showErrorNotify("该流程类型被删除"), this.goBack()),
            (this.count = t.data.count.count),
            (this.typeName = t.data.typeName.process_type_name),
            this.getRecord());
        }));
    },
    getList(t) {
      "typeList" === t
        ? this.$router.push(
            "/teacher/process/typeDetail?id=" +
              this.type_id +
              "&type=e&service_flag=" +
              this.service_flag,
          )
        : this.$router.push(
            `/teacher/process/list?tab=${t}&type_id=${this.type_id}&typeName=${this.typeName}&service_flag=${this.service_flag}`,
          );
    },
    goBack() {
      this.$router.push("/teacher/process/index?service_flag=" + this.service_flag);
    },
    copy() {
      this.$q
        .dialog({
          title: "确认复制",
          message: "复制该模板设置数据",
          html: !0,
          persistent: !0,
          cancel: { label: "取消", outline: !0, color: "grey" },
          ok: { label: "复制", unelevated: !0, color: "primary" },
        })
        .onOk(() => {
          this.$router.push({
            name: "/teacher/process/processTypeNew",
            params: { record: this.record, type: "a", service_flag: this.service_flag },
          });
        });
    },
    getRecord() {
      ((this.record.process_info_config = []),
        this.$axiosAction("/api/teacher/process/process.api", {
          action: "checkIntoOrOutNew",
          id: this.type_id,
          type: "e",
        })
          .then((t) => {
            (0 === t.data.code &&
              ((this.record = t.data.typeDetail),
              null === this.record.process_info_config && (this.record.process_info_config = []),
              (this.record.id = null),
              (this.record.is_copy = !0)),
              this.$q.loading.hide());
          })
          .catch((t) => {
            this.$q.loading.hide();
          }));
    },
  },
};
export default componentOptions;
