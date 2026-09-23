/**
 * Vue options object recovered from webpack module AST.
 * Source: assets/www/js/33.js -> module "4f38"
 * Route: /student/notice/detail
 * Component: NoticeDetail
 * Not guaranteed standalone: imports/module aliases must be resolved from sibling .logic.js.
 */
const componentOptions = {
  components: { NeuQaList: i["a"], NeuWidget: o["a"] },
  name: "NoticeDetail",
  data() {
    return {
      record: {},
      tab: "detail",
      id: this.$route.query.id,
      dialog: !1,
      modelValue: null,
      info_result: [],
      info_config: [{ type: "S", label: "请签名", required: !1 }],
      userInfo: JSON.parse(window.localStorage.getItem("userinfo")),
    };
  },
  destroyed() {
    window.removeEventListener("popstate", this.goBack, !1);
  },
  mounted() {
    (this.$axiosAction("/api/student/notice/notice.api", {
      action: "getNoticeDetail",
      id: this.id,
    }).then((e) => {
      0 === e.data.code
        ? (this.record = e.data.result)
        : 2002 === e.data.code && this.$router.push("/student/notice/index");
    }),
      window.history &&
        window.history.pushState &&
        (history.pushState(null, null, document.URL),
        window.addEventListener("popstate", this.goBack, !1)));
  },
  computed: {},
  methods: {
    update_confirm_flag() {
      if (
        1 === this.record.confirm_flag &&
        null === this.record.confirm_time &&
        2 === this.record.jude &&
        void 0 === this.info_result[0]
      )
        return this.$showErrorNotify("请签名");
      this.$q.loading.show();
      const e =
        this.info_result && this.info_result.length > 0 && void 0 !== this.info_result[0]
          ? JSON.stringify(this.info_result)
          : null;
      this.$axiosAction("/api/student/notice/notice.api", {
        action: "updateConfirmtime",
        id: this.id,
        signature: e,
      }).then((e) => {
        (this.$q.loading.hide(), this.$router.push("/student/notice/index"));
      });
    },
    downloadFile(e, t) {
      Object(n["c"])(e, t);
    },
    goBack() {
      this.$router.push("/student/notice/index");
    },
    generateEsign() {
      this.$refs.esign
        .generate()
        .then((e) => {
          ((this.modelValue = e), (this.dialog = !1));
        })
        .catch(() => {
          null === this.modelValue
            ? this.$showErrorNotify("请签名")
            : ((this.modelValue = null), (this.dialog = !1));
        });
    },
    resetEsign() {
      this.$refs.esign.reset();
    },
  },
};
export default componentOptions;
