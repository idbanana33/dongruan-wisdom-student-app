/**
 * Webpack module logic recovery
 * Source: assets/www/js/chunk-common.js -> module "46f3"
 * Route: (shared/core)
 * Component guess: NeuGeoLocation
 * Fidelity: exact module body, beautified only (webpack wrapper retained)
 * Note: variable names inside the original production module are preserved as evidence.
 */
"46f3": function(e, t, i) {
  "use strict";
  var a = function() {
      var e = this,
        t = e.$createElement,
        i = e._self._c || t;
      return i("baidu-map", {
        staticStyle: {
          display: "none"
        },
        attrs: {
          zoom: 15,
          "scroll-wheel-zoom": !0,
          ak: e.$appConf.bMapAk
        },
        on: {
          ready: e.mapReady
        }
      })
    },
    s = [],
    l = i("df2b"),
    o = {
      name: "NeuGeoLocation",
      components: {
        BaiduMap: l["a"]
      },
      props: {
        needAddr: Boolean,
        nonauto: Boolean,
        location: null
      },
      data() {
        return {
          map: null
        }
      },
      watch: {
        location(e) {
          this.locationAvailable((() => {
            this.getCurrentPoint()
          }))
        }
      },
      methods: {
        mapReady({
          BMap: e
        }) {
          this.map = e, this.nonauto || this.locationAvailable((() => {
            this.getCurrentPoint()
          }))
        },
        getCurrentPoint() {
          try {
            navigator.geolocation.getCurrentPosition((e => {
              let t = [],
                i = new this.map.Point(e.coords.longitude, e.coords.latitude);
              t.push(i);
              let a = new this.map.Convertor;
              a.translate(t, 1, 5, (e => {
                0 === e.status ? this.completeLocation(e.points[0].lng, e.points[0].lat) : this.getCurrentPointUsingBaiduSdk()
              }))
            }), (() => {
              this.getCurrentPointUsingBaiduSdk()
            }), {
              timeout: 3e3
            })
          } catch (e) {
            this.getCurrentPointUsingBaiduSdk()
          }
        },
        getCurrentPointUsingBaiduSdk() {
          try {
            JPush.isPlatformIOS() ? this.getCurrentPointUsingBaiduMap() : baidumap_location ? baidumap_location.getCurrentPosition((e => {
              5e-324 === e.longitude ? this.getCurrentPointUsingBaiduMap() : this.completeLocation(e.lontitude, e.latitude)
            }), (() => {
              this.getCurrentPointUsingBaiduMap()
            }), {
              timeout: 3e3
            }) : this.getCurrentPointUsingBaiduMap()
          } catch (e) {
            this.getCurrentPointUsingBaiduMap()
          }
        },
        getCurrentPointUsingBaiduMap() {
          try {
            const e = new this.map.Geolocation;
            e.enableSDKLocation(), e.getCurrentPosition((e => {
              e ? this.completeLocation(e.point.lng, e.point.lat) : this.$emit("error", {
                code: 2001,
                message: "定位处理超时"
              })
            }), {
              timeout: 3e3,
              maximumAge: 0,
              enableHighAccuracy: !0
            })
          } catch (e) {
            this.$emit("error", {
              code: 2001,
              message: "定位处理超时"
            })
          }
        },
        completeLocation(e, t) {
          const i = new this.map.Point(e, t);
          this.needAddr ? this.searchAddress(i) : this.$emit("completed", {
            point: i
          })
        },
        searchAddress(e) {
          const t = new this.map.Geocoder;
          t.getLocation(e, (t => {
            let i = {},
              a = null;
            t && (a = t.surroundingPois.length > 0 ? t.surroundingPois[0].address + t.surroundingPois[0].title : t.address, i = t.addressComponents), this.$emit("completed", {
              point: e,
              address: a,
              addressComponents: i
            })
          }))
        },
        getDistance(e, t, i, a) {
          var s = e * Math.PI / 180,
            l = i * Math.PI / 180,
            o = s - l,
            n = t * Math.PI / 180 - a * Math.PI / 180,
            r = 2 * Math.asin(Math.sqrt(Math.pow(Math.sin(o / 2), 2) + Math.cos(s) * Math.cos(l) * Math.pow(Math.sin(n / 2), 2)));
          return r *= 6378.137, r = Math.round(1e4 * r) / 1e4, r
        },
        locationAvailable(e) {
          cordova.plugins.diagnostic.isLocationAuthorized((t => {
            t ? this.isLocationEnabled(e) : this.getLocationAuthorizationStatus()
          }), (() => {
            this.$emit("error", {
              code: 1001,
              message: "定位权限获取失败"
            })
          }))
        },
        isLocationEnabled(e) {
          cordova.plugins.diagnostic.isLocationEnabled((t => {
            t ? e() : this.$q.dialog({
              icon: "warning",
              dark: !0,
              message: "需要开启GPS定位",
              cancel: !0,
              persistent: !0,
              ok: "立即开启"
            }).onOk((() => {
              cordova.plugins.diagnostic.switchToLocationSettings()
            }))
          }), (() => {
            this.$emit("error", {
              code: 1002,
              message: "GPS状态获取失败"
            })
          }))
        },
        getLocationAuthorizationStatus() {
          cordova.plugins.diagnostic.getLocationAuthorizationStatus((e => {
            switch (e) {
              case cordova.plugins.diagnostic.permissionStatus.NOT_REQUESTED:
                break;
              case cordova.plugins.diagnostic.permissionStatus.DENIED_ALWAYS:
                break;
              case cordova.plugins.diagnostic.permissionStatus.GRANTED:
                break;
              case cordova.plugins.diagnostic.permissionStatus.GRANTED_WHEN_IN_USE:
                break;
              case cordova.plugins.diagnostic.permissionStatus.DENIED_ONCE:
                break
            }
            e !== cordova.plugins.diagnostic.permissionStatus.DENIED_ALWAYS ? cordova.plugins.diagnostic.requestLocationAuthorization((e => {
              this.isLocationEnabled()
            }), (() => {
              this.$emit("error", {
                code: 1005,
                message: "用户位置授权失败，请手动设置应用权限"
              })
            }), cordova.plugins.diagnostic.locationAuthorizationMode.WHEN_IN_USE) : cordova.plugins.diagnostic.switchToSettings((() => {
              this.isLocationEnabled()
            }), (() => {
              this.$emit("error", {
                code: 1003,
                message: "权限设置页面跳转失败，请手动设置应用权限"
              })
            }))
          }), (() => {
            this.$emit("error", {
              code: 1004,
              message: "位置授权状态获取失败"
            })
          }))
        }
      }
    },
    n = o,
    r = i("2877"),
    c = Object(r["a"])(n, a, s, !1, null, null, null);
  t["a"] = c.exports
}
