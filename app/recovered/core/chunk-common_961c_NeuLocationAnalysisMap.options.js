/**
 * Vue options object recovered from webpack module AST.
 * Source: assets/www/js/chunk-common.js -> module "961c"
 * Route: (shared/core)
 * Component: NeuLocationAnalysisMap
 * Not guaranteed standalone: imports/module aliases must be resolved from sibling .logic.js.
 */
const componentOptions = {
  name: "NeuLocationAnalysisMap",
  props: {
    statisticsData: { type: Array, required: !1 },
    clusterData: { type: Array, required: !1 },
    curveData: { type: Array, required: !1 },
    showMapType: { type: String, required: !1 },
  },
  data() {
    return {
      bmap: null,
      labelLayer: null,
      clusterLayer: null,
      curveLineLayer: null,
      curveMarkerLayer: null,
      curveTextLayer: null,
      mapType: "statistics",
      mapThemeName: "purpleStyle",
      mapThemes: o(),
      statisticsList: [],
      currProvinceIndex: -1,
      currCityIndex: -1,
      clusterList: [],
      mapTypeDialog: !1,
      curveList: [],
      curveDirection: "all",
      curveDirectionOptions: [
        { label: "全部路线", value: "all" },
        { label: "离开主校区所在地", value: "o" },
        { label: "返回主校区所在地", value: "i" },
        { label: "主校区所在地外迁移", value: "n" },
      ],
      curveDirectionDialog: !1,
    };
  },
  async mounted() {
    ((this.bmap = await r(this.$appConf.bMapAk, "map_container", {
      tilt: 30,
      heading: 0,
      center: [p.lng, p.lat],
      zoom: 5,
      themeName: this.mapThemeName,
    })),
      this.showMapType && f.findIndex((e) => e.value === this.showMapType) > -1
        ? ((this.mapType = this.showMapType),
          "statistics" === this.mapType && this.statisticsData
            ? this.initStatisticsMapLayer()
            : "cluster" === this.mapType && this.clusterData
              ? this.initClusterMapLayer()
              : "curve" === this.mapType && this.curveData && this.initCurveMapLayer())
        : this.statisticsData
          ? ((this.mapType = "statistics"), this.initStatisticsMapLayer())
          : this.clusterData
            ? ((this.mapType = "cluster"), this.initClusterMapLayer())
            : this.curveData && ((this.mapType = "curve"), this.initCurveMapLayer()));
  },
  watch: {
    statisticsData(e) {
      this.labelLayer && this.loadStatisticsMapData();
    },
    clusterData(e) {
      this.clusterLayer && this.loadClusterMapData();
    },
    curveData(e) {
      this.curveLineLayer && this.loadCurveMapData();
    },
    showMapType(e) {
      f.findIndex((t) => t.value === e) > -1 && this.changeMapType(e);
    },
  },
  computed: {
    mapOptions() {
      const e = [];
      return (
        this.statisticsData && e.push(f[0]),
        this.clusterData && e.push(f[1]),
        this.curveData && e.push(f[2]),
        e
      );
    },
    tipTextColor() {
      return this.isDarkTheme ? "text-white" : "";
    },
    isDarkTheme() {
      return "darkStyle" === this.mapThemeName || "purpleStyle" === this.mapThemeName;
    },
  },
  methods: {
    initStatisticsMapLayer() {
      ((this.labelLayer = new this.bmap.mapvgl.LabelLayer({
        textAlign: "center",
        textColor: h.parent,
        borderColor: "#666",
        backgroundColor: "#666",
        padding: [0, 0],
        borderRadius: 5,
        fontSize: 12,
        lineHeight: 16,
        enablePicked: !0,
        onClick: (e) => {
          this.showNextLevelData(e);
        },
      })),
        this.bmap.view.addLayer(this.labelLayer),
        this.loadStatisticsMapData());
    },
    loadStatisticsMapData() {
      const e = {
        province: "其它",
        abbreviation: "其它",
        zoom: 5,
        amount: 0,
        cities: [],
        lng: 115.330802,
        lat: 17.022071,
      };
      ((this.statisticsList = this.statisticsData.reduce(
        (t, i) =>
          m[i.province]
            ? ((i.abbreviation = m[i.province].abbreviation),
              (i.zoom = m[i.province].zoom),
              (i.lng = m[i.province].lng),
              (i.lat = m[i.province].lat),
              t.concat(i))
            : ((e.amount += i.amount), t),
        [],
      )),
        0 !== e.amount && (this.statisticsList = this.statisticsList.concat(e)),
        this.showCountryData());
    },
    showCountryData() {
      ((this.currProvinceIndex = -1),
        (this.currCityIndex = -1),
        this.bmap.map.centerAndZoom(new this.bmap.BMapGL.Point(p.lng, p.lat), 5));
      const e = [];
      for (const t of this.statisticsList) {
        const i = this.getCenterPoint(t.abbreviation, t.lng, t.lat);
        e.push({
          geometry: { type: "Point", coordinates: [i.lng, i.lat] },
          properties: {
            text: `${t.abbreviation}:${t.amount}`,
            textColor: "其它" === t.abbreviation ? h.child : h.parent,
          },
        });
      }
      this.labelLayer.setData(e);
    },
    showProvinceData() {
      const e = this.statisticsList[this.currProvinceIndex],
        t = this.getCenterPoint(e.abbreviation, e.lng, e.lat);
      this.bmap.map.centerAndZoom(new this.bmap.BMapGL.Point(t.lng, t.lat), e.zoom);
      const i = [];
      for (const a of e.cities) {
        const e = this.getCenterPoint(a.city, a.lng, a.lat);
        i.push({
          geometry: { type: "Point", coordinates: [e.lng, e.lat] },
          properties: {
            text: `${a.city}:${a.amount}`,
            textColor:
              1 === a.districts.length && "" === a.districts[0].district ? h.child : h.parent,
          },
        });
      }
      this.labelLayer.setData(i);
    },
    showCityData() {
      const e = this.statisticsList[this.currProvinceIndex].cities[this.currCityIndex],
        t = this.getCenterPoint(e.city, e.lng, e.lat);
      this.bmap.map.centerAndZoom(new this.bmap.BMapGL.Point(t.lng, t.lat), 10);
      const i = [];
      for (const a of e.districts)
        i.push({
          geometry: { type: "Point", coordinates: [a.lng, a.lat] },
          properties: { text: `${a.district}:${a.amount}`, textColor: h.child },
        });
      this.labelLayer.setData(i);
    },
    showNextLevelData(e) {
      if (-1 === this.currProvinceIndex) {
        if ("其它" === this.statisticsList[e.dataIndex].abbreviation) return;
        ((this.currProvinceIndex = e.dataIndex),
          (this.currCityIndex = -1),
          this.showProvinceData());
      } else if (this.currProvinceIndex > -1 && -1 === this.currCityIndex) {
        if (
          1 === this.statisticsList[this.currProvinceIndex].cities[e.dataIndex].districts.length &&
          "" ===
            this.statisticsList[this.currProvinceIndex].cities[e.dataIndex].districts[0].district
        )
          return;
        ((this.currCityIndex = e.dataIndex), this.showCityData());
      }
    },
    resetProvinceData() {
      if (-1 === this.currCityIndex) return;
      const e = { dataIndex: this.currProvinceIndex };
      ((this.currProvinceIndex = -1), this.showNextLevelData(e));
    },
    initClusterMapLayer() {
      ((this.clusterLayer = new this.bmap.mapvgl.ClusterLayer({
        minSize: 30,
        maxSize: 50,
        clusterRadius: 150,
        gradient: { 0: "green", 0.5: "blue", 1: "red" },
        maxZoom: 15,
        minZoom: 5,
        showText: !0,
        minPoints: 5,
        textOptions: {
          fontSize: 12,
          color: "white",
          format: (e) => (e >= 1e4 ? Math.round(e / 1e3) / 10 + "万" : e),
        },
        enablePicked: !1,
      })),
        this.bmap.view.addLayer(this.clusterLayer),
        this.loadClusterMapData());
    },
    loadClusterMapData() {
      ((this.clusterList = this.clusterData), this.showClusterData());
    },
    showClusterData() {
      (this.bmap.map.centerAndZoom(new this.bmap.BMapGL.Point(p.lng, p.lat), 5),
        this.clusterLayer.setData(
          this.clusterList.reduce(
            (e, t) => e.concat({ geometry: { type: "Point", coordinates: [t.lng, t.lat] } }),
            [],
          ),
        ));
    },
    initCurveMapLayer() {
      ((this.curveLineLayer = new this.bmap.mapvgl.LineLayer({
        blend: "lighter",
        style: "arrow",
        color: y.lineNormal,
      })),
        (this.curveMarkerLayer = new this.bmap.mapvgl.MarkerListLayer({
          fillColor: y.markerNormal,
          fillSize: 35,
          shadowSize: 35,
          fillBorderWidth: 0,
          shadowBorderWidth: 0,
        })),
        (this.curveTextLayer = new this.bmap.mapvgl.TextLayer({
          color: this.isDarkTheme ? y.pointTextLight : y.pointTextDark,
          fontSize: 12,
          collides: !1,
          offset: [0, 16],
        })),
        this.bmap.view.addLayer(this.curveTextLayer),
        this.bmap.view.addLayer(this.curveMarkerLayer),
        this.bmap.view.addLayer(this.curveLineLayer),
        this.loadCurveMapData());
    },
    loadCurveMapData() {
      ((this.curveList = this.curveData), this.showCurveMapData());
    },
    showCurveMapData() {
      this.bmap.map.centerAndZoom(new this.bmap.BMapGL.Point(p.lng, p.lat), 5);
      const e = new this.bmap.mapvgl.OdCurve(),
        t = [],
        i = [],
        a = [],
        s = [];
      for (const l of this.curveList) {
        if ("all" !== this.curveDirection && this.curveDirection !== l.direction) continue;
        e.setOptions({
          points: [
            this.getCenterPoint(this.getProvinceAbb(l.start_place), l.start_lng, l.start_lat),
            this.getCenterPoint(this.getProvinceAbb(l.end_place), l.end_lng, l.end_lat),
          ],
        });
        const o = e.getPoints();
        if (
          (t.push({
            geometry: { type: "LineString", coordinates: o },
            properties: {
              color:
                "i" === l.direction ? y.lineIn : "o" === l.direction ? y.lineOut : y.lineNormal,
            },
          }),
          i.push({
            geometry: { type: "Point", coordinates: o[Math.round(o.length / 2)] },
            properties: {
              text: l.amount >= 1e4 ? Math.round(l.amount / 1e3) / 10 + "万" : l.amount,
              fillColor:
                "i" === l.direction
                  ? y.markerIn
                  : "o" === l.direction
                    ? y.markerOut
                    : y.markerNormal,
            },
          }),
          -1 === s.indexOf(l.start_place))
        ) {
          s.push(l.start_place);
          const e = this.getCenterPoint(
            this.getProvinceAbb(l.start_place),
            l.start_lng,
            l.start_lat,
          );
          (i.push({
            geometry: { type: "Point", coordinates: [e.lng, e.lat] },
            properties: {
              fillColor: y.pointFill,
              fillSize: 8,
              shadowColor: y.pointShadow,
              shadowSize: 15,
            },
          }),
            a.push({
              geometry: { type: "Point", coordinates: [e.lng, e.lat] },
              properties: { text: l.start_place },
            }));
        }
        if (-1 === s.indexOf(l.end_place)) {
          s.push(l.end_place);
          const e = this.getCenterPoint(this.getProvinceAbb(l.end_place), l.end_lng, l.end_lat);
          (i.push({
            geometry: { type: "Point", coordinates: [e.lng, e.lat] },
            properties: {
              fillColor: y.pointFill,
              fillSize: 8,
              shadowColor: y.pointShadow,
              shadowSize: 15,
            },
          }),
            a.push({
              geometry: { type: "Point", coordinates: [e.lng, e.lat] },
              properties: { text: l.end_place },
            }));
        }
      }
      (this.curveLineLayer.setData(t),
        this.curveMarkerLayer.setData(i),
        this.curveTextLayer.setData(a));
    },
    changeMapType(e) {
      this.mapType !== e &&
        ((this.mapType = e),
        this.bmap.view.removeAllLayers(),
        "statistics" === this.mapType && this.labelLayer
          ? (this.bmap.view.addLayer(this.labelLayer), this.showCountryData())
          : "statistics" !== this.mapType || this.labelLayer
            ? "cluster" === this.mapType && this.clusterLayer
              ? (this.bmap.view.addLayer(this.clusterLayer),
                this.bmap.map.centerAndZoom(new this.bmap.BMapGL.Point(p.lng, p.lat), 5))
              : "cluster" !== this.mapType || this.clusterLayer
                ? "curve" === this.mapType && this.curveLineLayer
                  ? (this.bmap.view.addLayer(this.curveTextLayer),
                    this.bmap.view.addLayer(this.curveMarkerLayer),
                    this.bmap.view.addLayer(this.curveLineLayer),
                    this.bmap.map.centerAndZoom(new this.bmap.BMapGL.Point(p.lng, p.lat), 5))
                  : "curve" !== this.mapType || this.curveLineLayer || this.initCurveMapLayer()
                : this.initClusterMapLayer()
            : this.initStatisticsMapLayer());
    },
    changeMapStyle(e) {
      this.mapThemeName !== e &&
        ((this.mapThemeName = e),
        n(this.bmap.map, this.mapThemeName),
        this.curveTextLayer &&
          this.curveTextLayer.setOptions({
            color: this.isDarkTheme ? y.pointTextLight : y.pointTextDark,
          }));
    },
    getCenterPoint(e, t, i) {
      let a = { lng: t, lat: i };
      try {
        ((a = this.bmap.mapv.utilCityCenter.getCenterByCityName(e)), a || (a = { lng: t, lat: i }));
      } catch (s) {}
      return a;
    },
    getProvinceAbb(e) {
      return m[e] ? m[e].abbreviation : e;
    },
    changeCurveDirection(e) {
      this.curveDirection !== e && ((this.curveDirection = e), this.showCurveMapData());
    },
    curveDirectionColor(e) {
      return "n" === e
        ? "color:rgb(53, 80, 255, 0.9);"
        : "i" === e
          ? "color:rgb(80, 255, 53, 0.9);"
          : "o" === e
            ? "color:rgb(255, 53, 80, 0.9);"
            : "color:black;";
    },
  },
};
export default componentOptions;
