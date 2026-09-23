/**
 * Webpack module logic recovery
 * Source: assets/www/js/9.js -> module "da3b"
 * Route: /update
 * Component guess: Update
 * Fidelity: exact module body, beautified only (webpack wrapper retained)
 * Note: variable names inside the original production module are preserved as evidence.
 */
da3b: function(e, t, o) {
  "use strict";
  o.r(t);
  var a = function() {
      var e = this,
        t = e.$createElement,
        o = e._self._c || t;
      return o("q-layout", {
        attrs: {
          view: "hhh lpr fFf"
        }
      }, [o("q-page-container", [o("q-page", {
        staticClass: "bg-white"
      }, [o("div", {
        staticClass: "q-pa-xl flex flex-center"
      }, [o("q-img", {
        attrs: {
          src: e.logoImage
        }
      })], 1), o("h5", {
        staticClass: "text-center q-mt-xs q-mb-xs"
      }, [e._v(e._s(e.title))]), o("div", {
        staticClass: "q-pa-md q-pb-xl flex flex-center"
      }, [e.mandatory ? o("div", [e._v("有新版本发布，请更新后使用。")]) : e._e(), e.mandatory ? e._e() : o("div", [e._v("有新版本发布，建议您更新。")])]), o("div", {
        staticClass: "q-pa-sm flex flex-center",
        staticStyle: {}
      }, [o("q-btn", {
        directives: [{
          name: "show",
          rawName: "v-show",
          value: !e.downloading,
          expression: "!downloading"
        }],
        attrs: {
          outline: "",
          rounded: "",
          color: "primary"
        },
        on: {
          click: e.doUpdate
        }
      }, [e._v("\n          立即更新"), o("span", {
        staticClass: "q-ml-sm"
      }, [e._v("V" + e._s(e.ver))])]), o("q-linear-progress", {
        directives: [{
          name: "show",
          rawName: "v-show",
          value: e.downloading,
          expression: "downloading"
        }],
        attrs: {
          size: "25px",
          value: e.progress,
          color: "accent"
        }
      }, [o("div", {
        staticClass: "absolute-full flex flex-center"
      }, [o("q-badge", {
        attrs: {
          color: "white",
          "text-color": "accent",
          label: e.progressLabel
        }
      })], 1)])], 1), e.isIOSPlatform ? e._e() : o("div", {
        staticClass: "text-center q-mt-xs",
        on: {
          click: e.moveToHomePage
        }
      }, [e._v("前往“"), o("span", {
        staticClass: "text-primary"
      }, [e._v("东软智慧学工")]), e._v("”官网下载安装最新版")]), e.isIOSPlatform ? e._e() : o("div", {
        staticClass: "text-center q-mt-xs",
        on: {
          click: e.moveToAndroidStore
        }
      }, [e._v("前往“"), o("span", {
        staticClass: "text-primary"
      }, [e._v("腾讯应用宝")]), e._v("”下载安装最新版")]), e.mandatory ? e._e() : o("q-page-sticky", {
        attrs: {
          position: "top-right",
          offset: [10, 10]
        }
      }, [o("q-btn", {
        attrs: {
          outline: "",
          rounded: "",
          color: "grey-4",
          label: "取 消"
        },
        on: {
          click: e.goHome
        }
      })], 1)], 1)], 1)], 1)
    },
    s = [],
    r = (o("baa5"), {
      name: "Update",
      data() {
        return {
          logoImage: `${cordova.file.applicationDirectory}www/img/logo.png`,
          title: this.$appConf.title,
          ver: this.$route.query.ver,
          mandatory: this.$route.query.mandatory,
          downloading: !1,
          progress: 0,
          isIOSPlatform: JPush.isPlatformIOS()
        }
      },
      destroyed() {
        window.removeEventListener("popstate", this.goBack, !1)
      },
      mounted() {
        window.history && window.history.pushState && (history.pushState(null, null, document.URL), window.addEventListener("popstate", this.goBack, !1))
      },
      computed: {
        progressLabel() {
          return (100 * this.progress).toFixed(2) + "%"
        }
      },
      methods: {
        goBack() {
          history.pushState(null, null, document.URL)
        },
        goHome() {
          this.$router.go(-2)
        },
        doUpdate() {
          JPush.isPlatformIOS() ? cordova.InAppBrowser.open(this.$appConf.appleStore, "_blank", "location=yes") : (this.downloading = !0, window.requestFileSystem(window.LocalFileSystem.PERSISTENT, 0, (e => {
            e.root.getFile(`${this.$appConf.androidAppName}${this.ver}.apk`, {
              create: !0,
              exclusive: !1
            }, (e => {
              const t = new window.FileTransfer;
              t.onprogress = e => {
                e.lengthComputable && (this.progress = e.loaded / e.total)
              };
              const o = encodeURI(`${this.$appConf.portalUrl}/${this.$appConf.androidAppName}${this.ver}.apk`),
                a = cordova.file.dataDirectory + o.substr(o.lastIndexOf("/") + 1);
              t.download(o, a, (e => {
                e.file((e => {
                  cordova.plugins.fileOpener2.showOpenWithDialog(a, e.type, (e => {}), (e => {}))
                }))
              }), (() => {}))
            }), (() => {}))
          }), (() => {})))
        },
        moveToHomePage() {
          cordova.InAppBrowser.open(this.$appConf.homepage, "_system")
        },
        moveToAndroidStore() {
          cordova.InAppBrowser.open(this.$appConf.androidStore, "_system")
        }
      }
    }),
    i = r,
    n = o("2877"),
    l = o("4d5a"),
    d = o("09e3"),
    p = o("9989"),
    c = o("068f"),
    m = o("9c40"),
    g = o("6b1d"),
    v = o("58a81"),
    u = o("de5e"),
    h = o("eebe"),
    w = o.n(h),
    f = Object(n["a"])(i, a, s, !1, null, null, null);
  t["default"] = f.exports;
  w()(f, "components", {
    QLayout: l["a"],
    QPageContainer: d["a"],
    QPage: p["a"],
    QImg: c["a"],
    QBtn: m["a"],
    QLinearProgress: g["a"],
    QBadge: v["a"],
    QPageSticky: u["a"]
  })
}
