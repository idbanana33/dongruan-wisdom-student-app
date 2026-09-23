<!--
  来源: assets/www/js/chunk-common.js  ->  webpack module "46f3"
  组件: NeuGeoLocation（全局定位组件，隐藏的百度地图实例）
  还原档位: A
  置信度: 高
  说明:
    这是一个"看不见的地图"组件 —— 它渲染一个 display:none 的 baidu-map，
    只为拿到 BMap 对象，然后走四级降级链获取当前坐标。
    被签到类页面广泛引用（student/signin、teacher/signin 等）。
-->
<template>
  <!--
    隐藏的百度地图，唯一作用是把 BMap 命名空间暴露给 mapReady 回调。
    ak 来自 app.json 的 bMapAk（$appConf.bMapAk）。
  -->
  <baidu-map
    style="display: none"
    :zoom="15"
    :scroll-wheel-zoom="true"
    :ak="$appConf.bMapAk"
    @ready="mapReady"
  />
</template>

<script>
import { BaiduMap } from "vue-baidu-map"; // webpack module "df2b"

export default {
  name: "NeuGeoLocation",

  components: { BaiduMap },

  props: {
    /** 是否额外反查地址（需要地址时多一次 Geocoder 请求） */
    needAddr: Boolean,
    /** 非自动模式：不自动触发定位，等外部调用 */
    nonauto: Boolean,
    /** 外部传入的坐标，变化时重新走一次定位可用性检查 */
    location: null,
  },

  data() {
    return {
      /** BMap 命名空间（mapReady 后可用） */
      map: null,
    };
  },

  watch: {
    location() {
      // 外部坐标变化 -> 重新检查权限并取点
      this.locationAvailable(() => {
        this.getCurrentPoint();
      });
    },
  },

  methods: {
    /**
     * 地图就绪回调。参数是 vue-baidu-map 解构出来的 { BMap }。
     */
    mapReady({ BMap }) {
      this.map = BMap;
      if (!this.nonauto) {
        this.locationAvailable(() => {
          this.getCurrentPoint();
        });
      }
    },

    /* ======================================================================
     * 坐标获取四级降级链（★ 本组件最核心的逻辑）
     * ======================================================================
     *
     *  ① navigator.geolocation（HTML5，得到 WGS-84）
     *       └ 失败 → ②
     *  ② getCurrentPointUsingBaiduSdk()
     *       ├ iOS  → 直接用 BMap.Geolocation
     *       └ Android → baidumap_location 插件（百度地图定位 SDK）
     *            └ 插件不存在/失败 → ③
     *  ③ getCurrentPointUsingBaiduMap()  BMap.Geolocation + enableSDKLocation
     *       └ 失败 → $emit("error", {code:2001})
     *
     *  ①成功时还会做坐标纠偏：BMap.Convertor.translate(points, 1, 5, cb)
     *      1 = WGS-84(GPS)，5 = BD-09LL（百度经纬度）→ 统一到百度坐标系
     */

    /**
     * ① HTML5 定位 + 坐标系转换（WGS-84 → BD-09LL）。
     * 超时 3000ms；失败回退到百度 SDK。
     */
    getCurrentPoint() {
      try {
        navigator.geolocation.getCurrentPosition(
          (position) => {
            const points = [];
            const point = new this.map.Point(
              position.coords.longitude,
              position.coords.latitude,
            );
            points.push(point);

            // ★ 坐标系转换：1 = WGS-84, 5 = BD-09LL
            const convertor = new this.map.Convertor();
            convertor.translate(points, 1, 5, (result) => {
              if (result.status === 0) {
                this.completeLocation(result.points[0].lng, result.points[0].lat);
              } else {
                this.getCurrentPointUsingBaiduSdk();
              }
            });
          },
          () => {
            this.getCurrentPointUsingBaiduSdk();
          },
          { timeout: 3000 },
        );
      } catch (err) {
        this.getCurrentPointUsingBaiduSdk();
      }
    },

    /**
     * ② 走百度定位 SDK（iOS 与 Android 路径不同）。
     * ★ 原码这里有个已知笔误：读的是 `e.lontitude`（多了一个 t），
     *   正确字段应为 `e.longitude`。同时它还检查 `5e-324 === e.longitude`
     *   （Number.MIN_VALUE，百度 SDK 在定位失败时会用这个值）。
     *   因为拼错的 lontitude 恒为 undefined，completeLocation 会被传入 undefined，
     *   实际效果是退化到地图 SDK 定位。还原时保留原样并标注。
     */
    getCurrentPointUsingBaiduSdk() {
      try {
        if (JPush.isPlatformIOS()) {
          this.getCurrentPointUsingBaiduMap();
        } else if (baidumap_location) {
          baidumap_location.getCurrentPosition(
            (result) => {
              if (result.longitude === Number.MIN_VALUE) {
                // 百度 SDK 的"定位失败"哨兵值
                this.getCurrentPointUsingBaiduMap();
              } else {
                // TODO(uncertain): 原码字段名为 lontitude（疑似笔误），此处保持原样
                this.completeLocation(result.lontitude, result.latitude);
              }
            },
            () => {
              this.getCurrentPointUsingBaiduMap();
            },
            { timeout: 3000 },
          );
        } else {
          this.getCurrentPointUsingBaiduMap();
        }
      } catch (err) {
        this.getCurrentPointUsingBaiduMap();
      }
    },

    /**
     * ③ BMap.Geolocation + enableSDKLocation（需要开启百度定位 SDK）。
     * 失败时 $emit("error", { code: 2001, message: "定位处理超时" })。
     */
    getCurrentPointUsingBaiduMap() {
      try {
        const geolocation = new this.map.Geolocation();
        geolocation.enableSDKLocation();
        geolocation.getCurrentPosition(
          (result) => {
            if (result) {
              this.completeLocation(result.point.lng, result.point.lat);
            } else {
              this.$emit("error", { code: 2001, message: "定位处理超时" });
            }
          },
          { timeout: 3000, maximumAge: 0, enableHighAccuracy: true },
        );
      } catch (err) {
        this.$emit("error", { code: 2001, message: "定位处理超时" });
      }
    },

    /**
     * 拿到坐标后的收尾：需要地址则反查，否则直接抛出 completed 事件。
     * @param {number} lng 经度
     * @param {number} lat 纬度
     */
    completeLocation(lng, lat) {
      const point = new this.map.Point(lng, lat);
      if (this.needAddr) {
        this.searchAddress(point);
      } else {
        this.$emit("completed", { point });
      }
    },

    /**
     * 逆地理编码（坐标 -> 地址）。
     * 优先取附近 POI（第一个）的 address+title 拼成更精确的位置描述；
     * 没有 POI 时退回 t.address。
     */
    searchAddress(point) {
      const geocoder = new this.map.Geocoder();
      geocoder.getLocation(point, (result) => {
        let addressComponents = {};
        let address = null;
        if (result) {
          address =
            result.surroundingPois.length > 0
              ? result.surroundingPois[0].address + result.surroundingPois[0].title
              : result.address;
          addressComponents = result.addressComponents;
        }
        this.$emit("completed", { point, address, addressComponents });
      });
    },

    /**
     * 球面距离（公里）。算法详情见
     * restored/app/algorithms/haversineDistance.js
     */
    getDistance(lat1, lng1, lat2, lng2) {
      const radLat1 = (lat1 * Math.PI) / 180;
      const radLat2 = (lat2 * Math.PI) / 180;
      const deltaLat = radLat1 - radLat2;
      const deltaLng = (lng1 * Math.PI) / 180 - (lng2 * Math.PI) / 180;

      let distance =
        2 *
        Math.asin(
          Math.sqrt(
            Math.pow(Math.sin(deltaLat / 2), 2) +
              Math.cos(radLat1) *
                Math.cos(radLat2) *
                Math.pow(Math.sin(deltaLng / 2), 2),
          ),
        );
      distance *= 6378.137; // 地球赤道半径 km
      return Math.round(distance * 1e4) / 1e4;
    },

    /* ======================================================================
     * 权限处理
     * ====================================================================== */

    /**
     * 检查定位权限：已授权 -> 检查系统定位开关；否则走授权申请流程。
     * 失败 $emit("error", { code: 1001, message: "定位权限获取失败" })。
     */
    locationAvailable(callback) {
      cordova.plugins.diagnostic.isLocationAuthorized(
        (authorized) => {
          if (authorized) {
            this.isLocationEnabled(callback);
          } else {
            this.getLocationAuthorizationStatus();
          }
        },
        () => {
          this.$emit("error", { code: 1001, message: "定位权限获取失败" });
        },
      );
    },

    /**
     * 系统 GPS 开关是否打开；未打开则弹窗引导跳转到系统定位设置。
     * 失败 $emit("error", { code: 1002, message: "GPS状态获取失败" })。
     */
    isLocationEnabled(callback) {
      cordova.plugins.diagnostic.isLocationEnabled(
        (enabled) => {
          if (enabled) {
            callback();
          } else {
            this.$q
              .dialog({
                icon: "warning",
                dark: true,
                message: "需要开启GPS定位",
                cancel: true,
                persistent: true,
                ok: "立即开启",
              })
              .onOk(() => {
                cordova.plugins.diagnostic.switchToLocationSettings();
              });
          }
        },
        () => {
          this.$emit("error", { code: 1002, message: "GPS状态获取失败" });
        },
      );
    },

    /**
     * 申请定位授权。
     *
     * ★ 原码这里的 switch 五个分支**全是空 break** —— 没有任何处理逻辑，
     *   所以 switch 整体是空操作，等价于"什么都不做"。
     *   真正的分支在 switch 之后的 `!== DENIED_ALWAYS` 三元判断。
     *   还原时保留空 switch 以忠实反映原实现意图（可能是预留）。
     *
     * - 从未永久拒绝 -> requestLocationAuthorization（WHEN_IN_USE 模式）
     * - 已被永久拒绝 -> switchToSettings 跳系统设置页
     */
    getLocationAuthorizationStatus() {
      cordova.plugins.diagnostic.getLocationAuthorizationStatus(
        (status) => {
          switch (status) {
            case cordova.plugins.diagnostic.permissionStatus.NOT_REQUESTED:
              break;
            case cordova.plugins.diagnostic.permissionStatus.DENIED_ALWAYS:
              break;
            case cordova.plugins.diagnostic.permissionStatus.GRANTED:
              break;
            case cordova.plugins.diagnostic.permissionStatus.GRANTED_WHEN_IN_USE:
              break;
            case cordova.plugins.diagnostic.permissionStatus.DENIED_ONCE:
              break;
            // 原码没有 default，未匹配状态直接落到下面的三元判断
          }

          if (status !== cordova.plugins.diagnostic.permissionStatus.DENIED_ALWAYS) {
            // 还能弹系统授权框
            cordova.plugins.diagnostic.requestLocationAuthorization(
              () => {
                this.isLocationEnabled();
              },
              () => {
                this.$emit("error", {
                  code: 1005,
                  message: "用户位置授权失败，请手动设置应用权限",
                });
              },
              cordova.plugins.diagnostic.locationAuthorizationMode.WHEN_IN_USE,
            );
          } else {
            // 已被"永久拒绝" -> 只能引导去设置页
            cordova.plugins.diagnostic.switchToSettings(
              () => {
                this.isLocationEnabled();
              },
              () => {
                this.$emit("error", {
                  code: 1003,
                  message: "权限设置页面跳转失败，请手动设置应用权限",
                });
              },
            );
          }
        },
        () => {
          this.$emit("error", { code: 1004, message: "位置授权状态获取失败" });
        },
      );
    },
  },
};
</script>

<!--
  ============================================================================
  还原说明
  ============================================================================
  组件用途：全局定位组件。渲染一个隐藏的 baidu-map 以获取 BMap 对象，
            再通过四级降级链取当前坐标（WGS-84 → BD-09LL 纠偏），
            可选反查地址，最终 $emit("completed", { point, address, addressComponents })。
            失败 $emit("error", { code, message })，错误码：
              1001 定位权限获取失败      1002 GPS状态获取失败
              1003 权限设置页面跳转失败  1004 位置授权状态获取失败
              1005 用户位置授权失败      2001 定位处理超时

  事件契约：
    completed  { point: BMap.Point, address?: string, addressComponents?: object }
    error      { code: number, message: string }

  算法抽取：
    getDistance → restored/app/algorithms/haversineDistance.js

  原码缺陷（保留并标注）：
    1. getCurrentPointUsingBaiduSdk 读取 result.lontitude（应为 longitude）
    2. getLocationAuthorizationStatus 的 switch 全为空 break
    3. getDistance 用 asin 形式，a 略 >1 时返回 NaN
  ============================================================================
-->
