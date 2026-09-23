/**
 * Vue options object recovered from webpack module AST.
 * Source: assets/www/js/13.js -> module "2c02"
 * Route: /maintainer/receivingOrder
 * Component: recevingOrder
 * Not guaranteed standalone: imports/module aliases must be resolved from sibling .logic.js.
 */
const componentOptions = {
  name: "recevingOrder",
  data() {
    return {
      serverUrl: window.localStorage.server,
      details: {},
      fabPos: [30, 40],
      acceptOrderDialog: !1,
    };
  },
  destroyed() {
    window.removeEventListener("popstate", this.goBack, !1);
  },
  mounted() {
    (this.loadInfo(),
      window.history &&
        window.history.pushState &&
        (history.pushState(null, null, document.URL),
        window.addEventListener("popstate", this.goBack, !1)));
  },
  methods: {
    goBack() {
      this.$router.push("/maintainer/repairList");
    },
    loadInfo() {
      this.$axiosAction("/api/teacher/basic/maintainer.api", {
        action: "queryMaintainerDetailInfo",
        id: this.$route.query.id,
      }).then((t) => {
        this.details = t.data.info;
      });
    },
    moveFab(t) {
      ((this.draggingFab = !0 !== t.isFirst && !0 !== t.isFinal),
        (this.fabPos = [this.fabPos[0] - t.delta.x, this.fabPos[1] - t.delta.y]));
    },
    onClick() {
      this.acceptOrderDialog = !0;
    },
    acceptOrder() {
      this.$axiosAction("/api/teacher/basic/maintainer.api", {
        action: "acceptOrder",
        id: this.$route.query.id,
      }).then((t) => {
        0 === t.data.code
          ? (this.$q.loading.hide(),
            (this.acceptOrderDialog = !1),
            this.$router.push("/maintainer/repairList"))
          : this.$q.loading.hide();
      });
    },
    cancel() {
      this.acceptOrderDialog = !1;
    },
  },
};
export default componentOptions;
