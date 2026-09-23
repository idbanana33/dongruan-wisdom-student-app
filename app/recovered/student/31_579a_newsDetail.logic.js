/**
 * Webpack module logic recovery
 * Source: assets/www/js/31.js -> module "579a"
 * Route: /student/news/detail
 * Component guess: newsDetail
 * Fidelity: exact module body, beautified only (webpack wrapper retained)
 * Note: variable names inside the original production module are preserved as evidence.
 */
"579a": function(e, t, i) {
  "use strict";
  i.r(t);
  var a = function() {
      var e = this,
        t = e.$createElement,
        i = e._self._c || t;
      return e.menuInfo ? i("q-layout", {
        attrs: {
          view: "lHh lpr lFf"
        }
      }, [i("q-header", {
        staticClass: "bg-grey-3 text-black"
      }, [i("q-toolbar", [i("q-btn", {
        attrs: {
          flat: "",
          round: "",
          dense: "",
          icon: "keyboard_arrow_left"
        },
        on: {
          click: e.goBack
        }
      }), e.menuInfo ? i("q-toolbar-title", [e._v(e._s(e.menuInfo.title) + "详情")]) : e._e()], 1)], 1), i("q-page-container", [i("q-page", {
        staticClass: "bg-grey-3 q-pb-sm"
      }, [i("q-card", {
        staticClass: "bg-white q-mb-sm q-mx-sm",
        attrs: {
          flat: ""
        }
      }, [i("q-card-section", {
        staticClass: "text-center"
      }, [i("h5", [e._v(e._s(e.news.title))])]), i("q-card-section", {
        staticClass: "text-right text-grey"
      }, [i("div", [e._v("发布者：" + e._s(e.news.name))]), i("div", [e._v("发布时间：" + e._s(e.news.create_time))]), null !== e.news.dep_name ? i("div", [e._v("发布单位：" + e._s(e.news.dep_name))]) : e._e()]), i("q-card-section", ["" !== e.news.detail && null !== e.news.detail ? i("q-editor", {
        attrs: {
          flat: "",
          "min-height": "10em",
          readonly: "",
          toolbar: [],
          "hide-bottom-space": ""
        },
        model: {
          value: e.news.detail,
          callback: function(t) {
            e.$set(e.news, "detail", t)
          },
          expression: "news.detail"
        }
      }) : e._e()], 1), i("q-card-section", {
        staticClass: "text-right"
      }, [i("span", {
        staticClass: "text-grey"
      }, [e._v("阅读量：" + e._s(e.count))])])], 1)], 1)], 1)], 1) : e.menuInfo ? e._e() : i("q-layout", [i("q-card", {
        staticStyle: {
          height: "3.5rem",
          "align-items": "center",
          display: "flex",
          "justify-content": "center"
        },
        attrs: {
          flat: ""
        }
      }, [e._v("\n    无访问权限\n  ")])], 1)
    },
    n = [],
    s = {
      name: "newsDetail",
      data() {
        return {
          roleId: JSON.parse(window.localStorage.getItem("userinfo")).role_id,
          role_type: JSON.parse(window.localStorage.getItem("userinfo")).role_type,
          id: null,
          menuInfo: null,
          news: {
            detail: ""
          },
          extendDialog: !1,
          endDate: "",
          count: 0
        }
      },
      destroyed() {
        window.removeEventListener("popstate", this.goBack, !1)
      },
      mounted() {
        this.id = this.$route.query.id, window.localStorage.getItem("menu") && (this.menuInfo = JSON.parse(window.localStorage.getItem("menu")).find((e => "news" === e.id))), this.$axiosAction("/api/teacher/news/news.api", {
          action: "insertNewsLog",
          id: this.id,
          roleId: this.roleId,
          role_type: this.role_type
        }).then((e => {
          0 === e.data.code || 2001 === e.data.code && this.$router.push("/student/news/index")
        })).catch((e => {
          this.$showErrorNotify("系统错误")
        })), window.history && window.history.pushState && (history.pushState(null, null, document.URL), window.addEventListener("popstate", this.goBack, !1)), this.getDetailInfo()
      },
      methods: {
        getDetailInfo() {
          this.$q.loading.show(), this.$axiosAction("/api/teacher/news/news.api", {
            action: "getNewsList",
            id: this.id,
            roleId: this.roleId
          }).then((e => {
            0 === e.data.code && (this.news = e.data.result.list[0], this.count = e.data.count.count), this.$q.loading.hide()
          })).catch((e => {
            this.news = {}, this.$q.loading.hide()
          }))
        },
        goBack() {
          this.$router.push("/student/news/index")
        },
        openLink() {
          cordova.InAppBrowser.open(this.news.link, "_system")
        },
        deleteNews() {
          this.$q.dialog({
            title: "确认删除",
            message: "该新闻将被删除。</span>",
            html: !0,
            persistent: !0,
            cancel: {
              label: "取消",
              outline: !0,
              color: "grey"
            },
            ok: {
              label: "删除",
              unelevated: !0,
              color: "negative"
            }
          }).onOk((() => {
            this.$q.loading.show(), this.$axiosAction("/api/teacher/news/news.api", {
              action: "deleteNews",
              id: this.id,
              roleId: this.roleId,
              title: this.news.title
            }).then((e => {
              0 === e.data.code && this.$router.push("/teacher/news/index"), this.$q.loading.hide()
            })).catch((e => {
              this.$q.loading.hide()
            }))
          }))
        },
        openExtendDialog() {
          if ("0" === this.news.status_color) {
            const e = new Date,
              t = e.getFullYear();
            let i = e.getMonth() + 1;
            i < 10 && (i = "0" + i.toString());
            const a = e.getDate();
            this.news.banner_end_date = t.toString() + "-" + i.toString() + "-" + a.toString()
          }
          this.endDate = this.news.banner_end_date, this.extendDialog = !0
        },
        updateDate() {
          this.$q.loading.show(), this.$axiosAction("/api/teacher/news/news.api", {
            action: "updateTime",
            id: this.id,
            endDate: this.endDate,
            roleId: this.roleId
          }).then((e => {
            0 === e.data.code && (this.extendDialog = !1, this.getDetailInfo()), this.$q.loading.hide()
          })).catch((e => {
            this.news = {}, this.$q.loading.hide()
          }))
        },
        closeDialog() {
          this.extendDialog = !1, "0" === this.news.status_color && (this.news.banner_end_date = "", this.endDate = "")
        }
      }
    },
    o = s,
    l = i("2877"),
    d = i("4d5a"),
    r = i("e359"),
    h = i("65c6"),
    c = i("9c40"),
    w = i("6ac5"),
    u = i("09e3"),
    g = i("9989"),
    p = i("f09f"),
    m = i("a370"),
    _ = i("d66b"),
    f = i("eebe"),
    q = i.n(f),
    b = Object(l["a"])(o, a, n, !1, null, null, null);
  t["default"] = b.exports;
  q()(b, "components", {
    QLayout: d["a"],
    QHeader: r["a"],
    QToolbar: h["a"],
    QBtn: c["a"],
    QToolbarTitle: w["a"],
    QPageContainer: u["a"],
    QPage: g["a"],
    QCard: p["a"],
    QCardSection: m["a"],
    QEditor: _["a"]
  })
}
