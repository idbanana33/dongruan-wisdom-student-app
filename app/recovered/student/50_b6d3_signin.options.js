/**
 * Vue options object recovered from webpack module AST.
 * Source: assets/www/js/50.js -> module "b6d3"
 * Route: /student/signin/qrcodePersonDetails
 * Component: signin
 * Not guaranteed standalone: imports/module aliases must be resolved from sibling .logic.js.
 */
const componentOptions = {
  components: { vueQr: n.a },
  name: "signin",
  data() {
    return {
      tab: "scan",
      record: {},
      loginName: JSON.parse(localStorage.getItem("userinfo")).login_name,
      stuName: JSON.parse(localStorage.getItem("userinfo")).name,
      downloadData: { text: "" },
      setInter: "",
      title: this.$route.params.title,
      id: this.$route.params.id,
      batch_no: this.$route.params.batch_no,
    };
  },
  destroyed() {
    window.removeEventListener("popstate", this.goBack, !1);
  },
  mounted() {
    (this.onload(),
      window.history &&
        window.history.pushState &&
        (history.pushState(null, null, document.URL),
        window.addEventListener("popstate", this.goBack, !1)));
  },
  methods: {
    onload() {
      this.$axiosAction("/api/student/signin/signin.api", {
        action: "getSigninPersonalDetails",
        id: this.$route.params.id,
        batch_no: this.$route.params.batch_no,
      }).then((t) => {
        0 === t.data.code
          ? ((this.record = t.data.result),
            "SQR" === this.record.signin_method
              ? (this.getSqrCode(),
                (this.setInter = setInterval(() => {
                  this.getSqrCode();
                }, 31536e7)))
              : (this.getQrCode(),
                (this.setInter = setInterval(() => {
                  this.getQrCode();
                }, 6e4))))
          : this.goBack();
      });
    },
    getSqrCode() {
      this.$axiosAction("/api/student/signin/signin.api", {
        action: "stuEncrytedQrCode",
        signin_method: this.record.signin_method,
        id: this.$route.params.id,
        batch_no: this.$route.params.batch_no,
        role_type: "S",
        login_name: this.loginName,
        name: this.stuName,
      }).then((t) => {
        this.downloadData.text = t.data.qrcode;
      });
    },
    getQrCode() {
      (this.$q.loading.show(),
        this.$axiosAction("/api/student/signin/signin.api", {
          action: "stuEncrytedQrCode",
          signin_method: this.record.signin_method,
          id: this.$route.params.id,
          batch_no: this.$route.params.batch_no,
          role_type: "S",
          login_name: this.loginName,
          name: this.stuName,
        }).then((t) => {
          ((this.downloadData.text = t.data.qrcode), this.$q.loading.hide());
        }));
    },
    goBack() {
      this.$router.push("/student/signin/qrcodePerson");
    },
    goPersonnel(t, e, a) {
      this.$router.push({
        name: "/student/signin/signinPersonnel",
        query: { id: t, batch_no: e, title: a },
      });
    },
  },
};
export default componentOptions;
