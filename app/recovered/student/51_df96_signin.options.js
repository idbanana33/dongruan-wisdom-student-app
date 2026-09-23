/**
 * Vue options object recovered from webpack module AST.
 * Source: assets/www/js/51.js -> module "df96"
 * Route: /student/signin/signin
 * Component: signin
 * Not guaranteed standalone: imports/module aliases must be resolved from sibling .logic.js.
 */
const componentOptions = {
  components: { NeuGeoLocation: r["a"], NeuQaList: c["a"] },
  name: "signin",
  data() {
    return {
      tab: "information",
      distance: 0,
      signinDetail: !1,
      map: null,
      record: {},
      location: { point: null, address: null, addressComponents: null },
      locals: {},
      research: 0,
      id: this.$route.query.id,
      batch_no: this.$route.query.batch_no,
      downloadData: { text: "" },
      outPicture: !1,
      recordId: null,
      locationStatus: !1,
    };
  },
  destroyed() {
    window.removeEventListener("popstate", this.goBack, !1);
  },
  mounted() {
    (this.$axiosAction("/api/student/signin/signin.api", {
      action: "getSigninDetails",
      id: this.$route.query.id,
      batch_no: this.$route.query.batch_no,
    })
      .then((t) => {
        0 === t.data.code ? (this.record = t.data.result) : this.goBack();
      })
      .then(() => {
        ("已结束" !== this.record.signin_status && "已打卡" !== this.record.signin_status) ||
          this.$router.push({
            name: "/student/signin/signinSuccess",
            query: { id: this.$route.query.id, batch_no: this.$route.query.batch_no },
          });
      }),
      window.history &&
        window.history.pushState &&
        (history.pushState(null, null, document.URL),
        window.addEventListener("popstate", this.goBack, !1)));
  },
  methods: {
    informationDetail(t, e, i) {
      this.$router.push({
        name: "/student/signin/qrScanning",
        params: { id: t, sig: e, batch_no: i },
      });
    },
    locationCompleted(t) {
      if (((this.location = t), this.locationStatus)) {
        this.locationStatus = !1;
        const t = {
            point: this.location.point,
            address: this.location.address,
            addressComponents: this.location.addressComponents,
          },
          e = this.location.point.lng,
          i = this.location.point.lat,
          s = this.recordId;
        this.$axiosAction("/api/student/signin/signin.api", {
          action: "checkOutsideFlag",
          id: s,
          lng: e,
          lat: i,
        })
          .then((t) => {
            0 === t.data.code && (this.locals = t.data.result);
          })
          .then(() => {
            1 === this.locals.allow_outside && 1 === this.locals.picture_evidence
              ? this.takePhotos()
              : 1 === this.locals.allow_outside && 0 === this.locals.picture_evidence
                ? this.$axiosAction("/api/student/signin/signin.api", {
                    action: "updateLocationSignin",
                    id: s,
                    batch_no: this.record.batch_no,
                    signin_location: JSON.stringify(t),
                    outside_flag: this.locals.outside_flag,
                  }).then(() => {
                    this.$router.push({
                      name: "/student/signin/signinSuccess",
                      query: { id: this.$route.query.id, batch_no: this.$route.query.batch_no },
                    });
                  })
                : 0 === this.locals.allow_outside && 1 === this.locals.picture_evidence
                  ? !0 === this.locals.range
                    ? this.takePhotos()
                    : this.$q
                        .dialog({ title: "签到", message: "当前为签到范围外，无法进行签到打卡。" })
                        .onOk(() => {
                          this.$router.back();
                        })
                  : !0 === this.locals.range
                    ? this.$axiosAction("/api/student/signin/signin.api", {
                        action: "updateLocationSignin",
                        id: s,
                        batch_no: this.record.batch_no,
                        signin_location: JSON.stringify(t),
                        outside_flag: this.locals.outside_flag,
                      }).then(() => {
                        this.$router.push({
                          name: "/student/signin/signinSuccess",
                          query: { id: this.$route.query.id, batch_no: this.$route.query.batch_no },
                        });
                      })
                    : this.$q
                        .dialog({ title: "签到", message: "当前为签到范围外，无法进行签到打卡。" })
                        .onOk(() => {
                          this.$router.back();
                        });
          });
      }
    },
    goBack() {
      this.$router.push("/student/signin/index");
    },
    downloadFile(t, e) {
      Object(l["c"])(t, e);
    },
    signinPicLocation(t) {
      ((this.research = this.research + 1), (this.recordId = t), (this.locationStatus = !0));
    },
    takePhotos() {
      this.getPhoto(s.CAMERA);
    },
    getPhoto(t) {
      navigator.camera.getPicture(this.onPhotoURISuccess, null, {
        quality: 50,
        destinationType: a.FILE_URI,
        sourceType: t,
        cameraDirection: navigator.camera.Direction.FRONT,
      });
    },
    onPhotoURISuccess(t) {
      this.upload(t);
    },
    upload(t) {
      var e = () => {
          this.$q.dialog({ title: "签到", message: "照片上传失败，无法进行签到！" }).onOk(() => {
            this.$router.back();
          });
        },
        i = new window.FileUploadOptions();
      ((i.fileKey = "imgFile"), (i.fileName = t.substr(t.lastIndexOf("/") + 1)));
      var s = {};
      i.params = s;
      var a = new window.FileTransfer(),
        o = window.localStorage.server + this.$appConf.fileUploader;
      a.upload(
        t,
        encodeURI(o),
        (t) => {
          const e = {
              point: this.location.point,
              address: this.location.address,
              addressComponents: this.location.addressComponents,
            },
            i = this.record.id,
            s = "[" + t.response + "]";
          this.$axiosAction("/api/student/signin/signin.api", {
            action: "updateLocationSignin",
            id: i,
            batch_no: this.record.batch_no,
            signin_location: JSON.stringify(e),
            outside_flag: this.locals.outside_flag,
            picture: s,
          }).then(() => {
            this.$router.push({
              name: "/student/signin/signinSuccess",
              query: { id: this.$route.query.id, batch_no: this.$route.query.batch_no },
            });
          });
        },
        e,
        i,
      );
    },
    locationError(t) {
      this.$showErrorNotify("定位失败");
    },
  },
};
export default componentOptions;
