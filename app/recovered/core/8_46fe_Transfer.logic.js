/**
 * Webpack module logic recovery
 * Source: assets/www/js/8.js -> module "46fe"
 * Route: /transfer
 * Component guess: Transfer
 * Fidelity: exact module body, beautified only (webpack wrapper retained)
 * Note: variable names inside the original production module are preserved as evidence.
 */
"46fe": function(e, t, a) {
  "use strict";
  a.r(t);
  var n = function() {
      var e = this,
        t = e.$createElement,
        a = e._self._c || t;
      return a("q-layout", {
        attrs: {
          view: "hhh lpr fFf"
        }
      }, [a("q-page-container", [a("div")])], 1)
    },
    r = [],
    o = {
      name: "Transfer",
      data() {
        return {}
      },
      mounted() {
        this.$router.push({
          path: this.$route.params.path
        })
      }
    },
    u = o,
    s = a("2877"),
    p = a("4d5a"),
    i = a("09e3"),
    l = a("eebe"),
    c = a.n(l),
    h = Object(s["a"])(u, n, r, !1, null, null, null);
  t["default"] = h.exports;
  c()(h, "components", {
    QLayout: p["a"],
    QPageContainer: i["a"]
  })
}
