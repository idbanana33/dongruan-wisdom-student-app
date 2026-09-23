/**
 * Vue options object recovered from webpack module AST.
 * Source: assets/www/js/4.js -> module "0611"
 * Route: /teacher/qrcodeScanning
 * Component: PageMain
 * Not guaranteed standalone: imports/module aliases must be resolved from sibling .logic.js.
 */
const componentOptions = {
  name: "PageMain",
  data() {
    return {
      light: !1,
      scanning: !0,
      menus: window.localStorage.menu ? JSON.parse(window.localStorage.getItem("menu")) : [],
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
  computed: {
    scanMenuInfo() {
      return (this.menus || []).find((t) => "scanning" === t.id);
    },
  },
  methods: {
    onScan() {
      try {
        (QRScanner.show((t) => {}),
          QRScanner.scan((t, n) => {
            t
              ? QRScanner.destroy((t) => {
                  this.$router.back();
                })
              : this.scanMenuInfo &&
                this.scanMenuInfo.view_permit &&
                this.$axiosAction(
                  "/api/teacher/scanning/scanning.api",
                  { action: "decryptQrCodeApp", text: n, jobType: "V" },
                  "post",
                  !1,
                ).then((t) => {
                  0 === t.data.code
                    ? "leave" === t.data.menu_id
                      ? QRScanner.destroy(() => {
                          this.$router.push({
                            name: "/teacher/scanning/leaveVer",
                            params: { qrcode: n },
                          });
                        })
                      : "signin" === t.data.menu_id &&
                        QRScanner.destroy(() => {
                          this.$router.push({
                            name: "/teacher/scanning/signinVer",
                            params: { qrcode: n },
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
                          this.onScan();
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
    back() {
      QRScanner.destroy(() => {
        this.$router.back();
      });
    },
  },
};
export default componentOptions;
