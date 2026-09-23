/**
 * Webpack module logic recovery
 * Source: assets/www/js/chunk-common.js -> module "d852"
 * Route: (shared/core)
 * Component guess: NeuExportData
 * Fidelity: exact module body, beautified only (webpack wrapper retained)
 * Note: variable names inside the original production module are preserved as evidence.
 */
d852: function(e, t, i) {
  "use strict";
  var a = function() {
      var e = this,
        t = e.$createElement,
        i = e._self._c || t;
      return i("q-dialog", {
        attrs: {
          persistent: ""
        },
        model: {
          value: e.progressDialog,
          callback: function(t) {
            e.progressDialog = t
          },
          expression: "progressDialog"
        }
      }, [i("q-card", {
        staticClass: "full-width",
        attrs: {
          flat: ""
        }
      }, [i("q-card-section", [i("q-item-section", {
        directives: [{
          name: "show",
          rawName: "v-show",
          value: !e.progressTip,
          expression: "!progressTip"
        }]
      }, [e._v("处理中（数据量大时处理速度会比较慢，请耐心等候）...")]), i("q-item-section", {
        directives: [{
          name: "show",
          rawName: "v-show",
          value: !e.progressTip,
          expression: "!progressTip"
        }]
      }, [i("q-linear-progress", {
        attrs: {
          size: "25px",
          value: e.progress,
          color: "accent"
        }
      }, [i("div", {
        staticClass: "absolute-full flex flex-center"
      }, [i("q-badge", {
        attrs: {
          color: "white",
          "text-color": "accent",
          label: e.progressLabel
        }
      })], 1)])], 1), i("q-item-section", {
        directives: [{
          name: "show",
          rawName: "v-show",
          value: e.showMultiFilesTip,
          expression: "showMultiFilesTip"
        }],
        staticClass: "text-orange"
      }, [e._v("本次下载数据会被拆分成多个文件保存，请注意查收。")]), i("q-item-section", {
        directives: [{
          name: "show",
          rawName: "v-show",
          value: e.progressTip,
          expression: "progressTip"
        }]
      }, [e._v("处理结果")]), i("q-item-section", {
        directives: [{
          name: "show",
          rawName: "v-show",
          value: e.progressTip,
          expression: "progressTip"
        }]
      }, [e._v("\n        " + e._s(e.progressTip) + "\n      ")]), i("q-item-section", {
        directives: [{
          name: "show",
          rawName: "v-show",
          value: e.progressTip,
          expression: "progressTip"
        }]
      }, e._l(e.multiFileNames, (function(t) {
        return i("q-btn", {
          key: t,
          staticClass: "q-mt-sm",
          attrs: {
            outline: "",
            color: "primary",
            label: t
          },
          on: {
            click: function(i) {
              return e.openExcelFile(t)
            }
          }
        })
      })), 1), i("q-item-section", {
        directives: [{
          name: "show",
          rawName: "v-show",
          value: e.progressTip,
          expression: "progressTip"
        }]
      }, [i("q-btn", {
        staticClass: "q-mt-sm",
        attrs: {
          outline: "",
          color: "grey",
          label: "关闭"
        },
        on: {
          click: function(t) {
            e.progressDialog = !1
          }
        }
      })], 1)], 1)], 1)], 1)
    },
    s = [],
    l = (i("13d5"), i("e6cf"), i("ddb0"), i("ded3")),
    o = i.n(l),
    n = i("cd81"),
    r = {
      name: "NeuExportData",
      props: {
        config: {
          type: Array,
          required: !1
        }
      },
      data() {
        return {
          progressDialog: !1,
          progress: 0,
          progressTip: "",
          showMultiFilesTip: !1,
          multiFileNames: []
        }
      },
      watch: {
        config(e) {
          e && 9 === e.length && this.doExport(...e)
        }
      },
      computed: {
        progressLabel() {
          return (100 * this.progress).toFixed(2) + "%"
        }
      },
      methods: {
        doExport(e, t, i, a, s, l, o, n, r) {
          if (this.progressTip = "", this.showMultiFilesTip = !1, this.progressDialog = !0, e && t)
            if (n && r) {
              const c = Object.keys(a);
              this.exportOneSheetData(e, t, i, a[c[0]], c[0], s, l, o, n, r)
            } else this.exportMultiSheetsData(e, t, i, a, s, l, o);
          else this.exportDataDirectly(a, s, l)
        },
        exportDataDirectly(e, t, i) {
          this.progress = 100, Object(n["b"])(e, t), this.progressDialog = !1, i && i()
        },
        async exportOneSheetData(e, t, i, a, s, l, r, c, u, d) {
          this.progress = 0, this.multiFileNames = [];
          let m = 0,
            f = 1,
            p = [],
            h = 0;
          while (m < f) m++, await this.$axiosAction(e, o()(o()({
            action: t
          }, i), {}, {
            pageSize: u,
            pageNum: m
          }), "post", !1).then((e => {
            m = e.data[a].pageNum, f = e.data[a].pageCount, !this.showMultiFilesTip && e.data[a].rowCount > d && (this.showMultiFilesTip = !0), p = c ? p.concat(c(e.data[a].list)) : p.concat(e.data[a].list)
          })), this.progress = m / f, p.length >= d && (Object(n["a"])(p, `${l}${h+1}`, s, !1), this.multiFileNames.push(`${l}${h+1}`), h++, p = []);
          (p.length > 0 || 0 === h) && (Object(n["a"])(p, `${l}${0===h?"":h+1}`, s, 0 === h), h > 0 && this.multiFileNames.push(`${l}${h+1}`), h++), h > 1 ? (this.showMultiFilesTip = !1, this.progressTip = `因数据量过大本次下载数据已被拆分成${h}个文件保存，请注意查看。`) : (this.progressDialog = !1, r && r())
        },
        async exportMultiSheetsData(e, t, i, a, s, l, r) {
          this.progress = 0;
          let c = [];
          await this.$axiosAction(e, o()({
            action: t
          }, i), "post", !1).then((e => {
            if (0 === e.data.code) {
              const t = Object.keys(a);
              c = t.reduce(((t, i) => (t[i] = e.data[a[i]], t)), {}), r && (c = r(c))
            }
          })), this.progress = 100, Object(n["b"])(c, s), this.progressDialog = !1, l && l()
        },
        openExcelFile(e) {
          Object(n["d"])(e)
        }
      }
    },
    c = r,
    u = i("2877"),
    d = i("24e8"),
    m = i("f09f"),
    f = i("a370"),
    p = i("4074"),
    h = i("6b1d"),
    y = i("58a81"),
    g = i("9c40"),
    b = i("eebe"),
    v = i.n(b),
    _ = Object(u["a"])(c, a, s, !1, null, null, null);
  t["a"] = _.exports;
  v()(_, "components", {
    QDialog: d["a"],
    QCard: m["a"],
    QCardSection: f["a"],
    QItemSection: p["a"],
    QLinearProgress: h["a"],
    QBadge: y["a"],
    QBtn: g["a"]
  })
}
