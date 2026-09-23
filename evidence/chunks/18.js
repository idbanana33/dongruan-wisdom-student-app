(window["webpackJsonp"] = window["webpackJsonp"] || []).push([
  [18],
  {
    f26b: function (t, a, e) {
      "use strict";
      e.r(a);
      var o = function () {
          var t = this,
            a = t.$createElement,
            e = t._self._c || a;
          return e(
            "q-layout",
            { attrs: { view: "lHh lpr lFf" } },
            [
              e(
                "q-header",
                { staticClass: "bg-white text-black" },
                [
                  e(
                    "q-toolbar",
                    [
                      e("q-btn", {
                        attrs: { flat: "", round: "", dense: "", icon: "close" },
                        on: { click: t.goBack },
                      }),
                      e("q-toolbar-title", [t._v("用户协议")]),
                    ],
                    1,
                  ),
                ],
                1,
              ),
              e(
                "q-page-container",
                [
                  e(
                    "q-page",
                    { staticClass: "bg-white" },
                    [
                      e(
                        "q-card",
                        { staticClass: "full-width", attrs: { flat: "" } },
                        [
                          e(
                            "q-list",
                            { staticClass: "full-width" },
                            [
                              e(
                                "q-item",
                                [e("q-item-section", { domProps: { innerHTML: t._s(t.info) } })],
                                1,
                              ),
                            ],
                            1,
                          ),
                        ],
                        1,
                      ),
                    ],
                    1,
                  ),
                ],
                1,
              ),
            ],
            1,
          );
        },
        i = [],
        s = {
          name: "TermsOfUse",
          data() {
            return { info: "" };
          },
          mounted() {
            this.$axiosAction(`${this.$appConf.portalUrl}/api/policy.api`, {
              action: "queryTermsOfUse",
              id: this.server,
            }).then((t) => {
              0 === t.data.code && (this.info = t.data.info);
            });
          },
          methods: {
            goBack() {
              this.$router.go(-1);
            },
          },
        },
        n = s,
        l = e("2877"),
        r = e("4d5a"),
        c = e("e359"),
        d = e("65c6"),
        f = e("9c40"),
        u = e("6ac5"),
        p = e("09e3"),
        h = e("9989"),
        b = e("f09f"),
        m = e("1c1c"),
        q = e("66e5"),
        w = e("4074"),
        Q = e("eebe"),
        g = e.n(Q),
        C = Object(l["a"])(n, o, i, !1, null, null, null);
      a["default"] = C.exports;
      g()(C, "components", {
        QLayout: r["a"],
        QHeader: c["a"],
        QToolbar: d["a"],
        QBtn: f["a"],
        QToolbarTitle: u["a"],
        QPageContainer: p["a"],
        QPage: h["a"],
        QCard: b["a"],
        QList: m["a"],
        QItem: q["a"],
        QItemSection: w["a"],
      });
    },
  },
]);
