/**
 * Vue options object recovered from webpack module AST.
 * Source: assets/www/js/chunk-common.js -> module "d852"
 * Route: (shared/core)
 * Component: NeuExportData
 * Not guaranteed standalone: imports/module aliases must be resolved from sibling .logic.js.
 */
const componentOptions = {
  name: "NeuExportData",
  props: { config: { type: Array, required: !1 } },
  data() {
    return {
      progressDialog: !1,
      progress: 0,
      progressTip: "",
      showMultiFilesTip: !1,
      multiFileNames: [],
    };
  },
  watch: {
    config(e) {
      e && 9 === e.length && this.doExport(...e);
    },
  },
  computed: {
    progressLabel() {
      return (100 * this.progress).toFixed(2) + "%";
    },
  },
  methods: {
    doExport(e, t, i, a, s, l, o, n, r) {
      if (
        ((this.progressTip = ""), (this.showMultiFilesTip = !1), (this.progressDialog = !0), e && t)
      )
        if (n && r) {
          const c = Object.keys(a);
          this.exportOneSheetData(e, t, i, a[c[0]], c[0], s, l, o, n, r);
        } else this.exportMultiSheetsData(e, t, i, a, s, l, o);
      else this.exportDataDirectly(a, s, l);
    },
    exportDataDirectly(e, t, i) {
      ((this.progress = 100), Object(n["b"])(e, t), (this.progressDialog = !1), i && i());
    },
    async exportOneSheetData(e, t, i, a, s, l, r, c, u, d) {
      ((this.progress = 0), (this.multiFileNames = []));
      let m = 0,
        f = 1,
        p = [],
        h = 0;
      while (m < f)
        (m++,
          await this.$axiosAction(
            e,
            o()(o()({ action: t }, i), {}, { pageSize: u, pageNum: m }),
            "post",
            !1,
          ).then((e) => {
            ((m = e.data[a].pageNum),
              (f = e.data[a].pageCount),
              !this.showMultiFilesTip && e.data[a].rowCount > d && (this.showMultiFilesTip = !0),
              (p = c ? p.concat(c(e.data[a].list)) : p.concat(e.data[a].list)));
          }),
          (this.progress = m / f),
          p.length >= d &&
            (Object(n["a"])(p, `${l}${h + 1}`, s, !1),
            this.multiFileNames.push(`${l}${h + 1}`),
            h++,
            (p = [])));
      ((p.length > 0 || 0 === h) &&
        (Object(n["a"])(p, `${l}${0 === h ? "" : h + 1}`, s, 0 === h),
        h > 0 && this.multiFileNames.push(`${l}${h + 1}`),
        h++),
        h > 1
          ? ((this.showMultiFilesTip = !1),
            (this.progressTip = `因数据量过大本次下载数据已被拆分成${h}个文件保存，请注意查看。`))
          : ((this.progressDialog = !1), r && r()));
    },
    async exportMultiSheetsData(e, t, i, a, s, l, r) {
      this.progress = 0;
      let c = [];
      (await this.$axiosAction(e, o()({ action: t }, i), "post", !1).then((e) => {
        if (0 === e.data.code) {
          const t = Object.keys(a);
          ((c = t.reduce((t, i) => ((t[i] = e.data[a[i]]), t), {})), r && (c = r(c)));
        }
      }),
        (this.progress = 100),
        Object(n["b"])(c, s),
        (this.progressDialog = !1),
        l && l());
    },
    openExcelFile(e) {
      Object(n["d"])(e);
    },
  },
};
export default componentOptions;
