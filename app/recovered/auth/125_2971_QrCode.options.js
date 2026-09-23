/**
 * Vue options object recovered from webpack module AST.
 * Source: assets/www/js/125.js -> module "2971"
 * Route: /user/qrCode
 * Component: QrCode
 * Not guaranteed standalone: imports/module aliases must be resolved from sibling .logic.js.
 */
const componentOptions = {
  components: { vueQr: s.a },
  name: "QrCode",
  data() {
    return { qrCodeValue: "", qrCodeInterval: null, downcount: 60, downcountInterval: null };
  },
  mounted() {
    (this.showQrCode(),
      (this.qrCodeInterval = setInterval(() => {
        this.showQrCode();
      }, 6e4)));
  },
  destroyed() {
    (clearInterval(this.qrCodeInterval), clearInterval(this.downcountInterval));
  },
  methods: {
    showQrCode() {
      (clearInterval(this.downcountInterval),
        (this.downcount = 60),
        this.$axiosAction("/api/user/user.api", { action: "queryUserQrCode" }).then((t) => {
          0 === t.data.code &&
            ((this.qrCodeValue = t.data.qrcode),
            (this.downcountInterval = setInterval(() => {
              this.downcount--;
            }, 1e3)));
        }));
    },
    goBack() {
      "S" === JSON.parse(window.localStorage.userinfo).role_type
        ? this.$router.push("/student/index")
        : this.$router.push("/teacher/index");
    },
  },
};
export default componentOptions;
