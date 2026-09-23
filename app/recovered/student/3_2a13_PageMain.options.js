/**
 * Vue options object recovered from webpack module AST.
 * Source: assets/www/js/3.js -> module "2a13"
 * Route: /student/signin/qrScanning
 * Component: PageMain
 * Not guaranteed standalone: imports/module aliases must be resolved from sibling .logic.js.
 */
const componentOptions = {
  name: "PageMain",
  data() {
    return {
      light: !1,
      id: this.$route.params.id,
      sig: this.$route.params.sig,
      batch_no: this.$route.params.batch_no,
      qrcode: !1,
      scanning: !0,
    };
  },
  beforeCreate() {
    ((document.getElementById("q-app").style.backgroundColor = "transparent"),
      (document.querySelector("body").style.backgroundColor = "transparent"));
  },
  beforeDestroy() {
    ((document.getElementById("q-app").style.backgroundColor = "#ffffff"),
      (document.querySelector("body").style.backgroundColor = "#ffffff"));
    try {
      (QRScanner.hide((t) => {}), QRScanner.destroy(function (t) {}));
    } catch (t) {}
  },
  destroyed() {
    window.removeEventListener("popstate", this.back, !1);
  },
  mounted() {
    (this.onScan(),
      window.history &&
        window.history.pushState &&
        (history.pushState(null, null, document.URL),
        window.addEventListener("popstate", this.back, !1)));
  },
  methods: {
    onScan() {
      try {
        (QRScanner.show((t) => {}),
          QRScanner.scan((t, a) => {
            t
              ? QRScanner.destroy((t) => {
                  this.$router.back();
                })
              : this.$axiosAction(
                  "/api/student/signin/signin.api",
                  {
                    action: "stuDecryptQrCode",
                    text: a,
                    id: this.$route.params.id,
                    batch_no: this.$route.params.batch_no,
                  },
                  "post",
                  !1,
                ).then((t) => {
                  0 === t.data.code
                    ? QRScanner.destroy(() => {
                        this.$router.push({
                          name: "/student/signin/signinSuccess",
                          query: {
                            id: this.$route.params.id,
                            batch_no: this.$route.params.batch_no,
                          },
                        });
                      })
                    : (QRScanner.destroy(() => {
                        this.scanning = !1;
                      }),
                      this.$q
                        .dialog({
                          title: "扫码失败",
                          message: "不合法的二维码。",
                          ok: "重新扫描",
                          cancel: "返回",
                        })
                        .onOk(() => {
                          ((this.scanning = !0), QRScanner.prepare(this.onScan));
                        })
                        .onCancel(() => {
                          this.$router.back();
                        })
                        .onDismiss(() => {}));
                });
          }));
      } catch (t) {}
    },
    onLightTrigger() {
      try {
        this.light ? QRScanner.disableLight(() => {}) : QRScanner.enableLight(() => {});
      } catch (t) {
        return;
      }
      this.light = !this.light;
    },
    closeQrcode() {
      ((this.qrcode = !1), (this.scanning = !0), QRScanner.prepare(this.onScan));
    },
    back() {
      QRScanner.destroy(() => {
        this.$router.push({
          name: "/student/signin/signin",
          query: { id: this.$route.params.id, batch_no: this.$route.params.batch_no },
        });
      });
    },
  },
};
export default componentOptions;
