/**
 * Vue options object recovered from webpack module AST.
 * Source: assets/www/js/9.js -> module "da3b"
 * Route: /update
 * Component: Update
 * Not guaranteed standalone: imports/module aliases must be resolved from sibling .logic.js.
 */
const componentOptions = {
  name: "Update",
  data() {
    return {
      logoImage: `${cordova.file.applicationDirectory}www/img/logo.png`,
      title: this.$appConf.title,
      ver: this.$route.query.ver,
      mandatory: this.$route.query.mandatory,
      downloading: !1,
      progress: 0,
      isIOSPlatform: JPush.isPlatformIOS(),
    };
  },
  destroyed() {
    window.removeEventListener("popstate", this.goBack, !1);
  },
  mounted() {
    window.history &&
      window.history.pushState &&
      (history.pushState(null, null, document.URL),
      window.addEventListener("popstate", this.goBack, !1));
  },
  computed: {
    progressLabel() {
      return (100 * this.progress).toFixed(2) + "%";
    },
  },
  methods: {
    goBack() {
      history.pushState(null, null, document.URL);
    },
    goHome() {
      this.$router.go(-2);
    },
    doUpdate() {
      JPush.isPlatformIOS()
        ? cordova.InAppBrowser.open(this.$appConf.appleStore, "_blank", "location=yes")
        : ((this.downloading = !0),
          window.requestFileSystem(
            window.LocalFileSystem.PERSISTENT,
            0,
            (e) => {
              e.root.getFile(
                `${this.$appConf.androidAppName}${this.ver}.apk`,
                { create: !0, exclusive: !1 },
                (e) => {
                  const t = new window.FileTransfer();
                  t.onprogress = (e) => {
                    e.lengthComputable && (this.progress = e.loaded / e.total);
                  };
                  const o = encodeURI(
                      `${this.$appConf.portalUrl}/${this.$appConf.androidAppName}${this.ver}.apk`,
                    ),
                    a = cordova.file.dataDirectory + o.substr(o.lastIndexOf("/") + 1);
                  t.download(
                    o,
                    a,
                    (e) => {
                      e.file((e) => {
                        cordova.plugins.fileOpener2.showOpenWithDialog(
                          a,
                          e.type,
                          (e) => {},
                          (e) => {},
                        );
                      });
                    },
                    () => {},
                  );
                },
                () => {},
              );
            },
            () => {},
          ));
    },
    moveToHomePage() {
      cordova.InAppBrowser.open(this.$appConf.homepage, "_system");
    },
    moveToAndroidStore() {
      cordova.InAppBrowser.open(this.$appConf.androidStore, "_system");
    },
  },
};
export default componentOptions;
