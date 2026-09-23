/**
 * Webpack module logic recovery
 * Source: assets/www/js/chunk-common.js -> module "a086"
 * Route: (shared/core)
 * Component guess: NeuViewMap
 * Fidelity: exact module body, beautified only (webpack wrapper retained)
 * Note: variable names inside the original production module are preserved as evidence.
 */
a086: function(e, t, i) {
  "use strict";
  var a = function() {
      var e = this,
        t = e.$createElement,
        i = e._self._c || t;
      return i("div", {
        staticClass: "full-width"
      }, [i("baidu-map", {
        staticClass: "neu-map-view",
        attrs: {
          center: e.modelValue.center,
          zoom: 15,
          "scroll-wheel-zoom": !0,
          ak: e.$appConf.bMapAk
        }
      }, [i("div", {
        staticClass: "q-mb-sm row items-center justify-between"
      }, [i("div", {
        staticClass: "text-bold"
      }, [e._v(e._s(e.modelValue.title))]), e.popupCloseBtn ? i("q-btn", {
        directives: [{
          name: "close-popup",
          rawName: "v-close-popup"
        }],
        attrs: {
          icon: "close",
          flat: "",
          round: "",
          dense: "",
          size: "sm"
        }
      }) : e._e()], 1), i("bm-view", {
        staticStyle: {
          width: "100%",
          "min-height": "680px",
          flex: "1"
        }
      }), i("bm-scale", {
        attrs: {
          anchor: "BMAP_ANCHOR_BOTTOM_RIGHT"
        }
      }), i("bm-navigation", {
        attrs: {
          anchor: "BMAP_ANCHOR_TOP_RIGHT"
        }
      }), i("bm-marker", {
        attrs: {
          position: e.modelValue.center
        }
      }), e.modelValue.radius ? i("bm-circle", {
        attrs: {
          center: e.modelValue.center,
          radius: e.modelValue.radius,
          "stroke-color": "blue",
          "stroke-opacity": .5,
          "stroke-weight": 1
        }
      }) : e._e(), e.modelValue.path ? i("bm-polygon", {
        attrs: {
          path: e.modelValue.path,
          "stroke-color": "blue",
          "stroke-opacity": .5,
          "stroke-weight": 1
        }
      }) : e._e()], 1)], 1)
    },
    s = [],
    l = i("ded3"),
    o = i.n(l),
    n = i("df2b"),
    r = i("5098"),
    c = i("8328"),
    u = i("6f5b"),
    d = i("d9a9"),
    m = i("6285"),
    f = i("4d65"),
    p = {
      name: "NeuViewMap",
      components: {
        BaiduMap: n["a"],
        BmView: r["a"],
        BmScale: c["a"],
        BmNavigation: u["a"],
        BmMarker: d["a"],
        BmCircle: m["a"],
        BmPolygon: f["a"]
      },
      props: {
        value: null,
        popupCloseBtn: Boolean
      },
      data() {
        return {
          modelValue: {
            center: {
              lng: 116.404,
              lat: 39.915
            },
            radius: 500,
            path: [{
              lng: 116.412732,
              lat: 39.911707
            }, {
              lng: 116.39455,
              lat: 39.910932
            }, {
              lng: 116.403461,
              lat: 39.921336
            }]
          }
        }
      },
      mounted() {
        this.value && (this.modelValue = o()({}, this.value))
      },
      watch: {
        value(e) {
          this.modelValue = o()({}, this.value)
        }
      },
      methods: {}
    },
    h = p,
    y = (i("b192"), i("2877")),
    g = i("9c40"),
    b = i("7f67"),
    v = i("eebe"),
    _ = i.n(v),
    T = Object(y["a"])(h, a, s, !1, null, null, null);
  t["a"] = T.exports;
  _()(T, "components", {
    QBtn: g["a"]
  }), _()(T, "directives", {
    ClosePopup: b["a"]
  })
}
