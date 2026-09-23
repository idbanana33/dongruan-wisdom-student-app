(window["webpackJsonp"] = window["webpackJsonp"] || []).push([
  [51],
  {
    df96: function (t, e, i) {
      "use strict";
      i.r(e);
      var s,
        a,
        o = function () {
          var t = this,
            e = t.$createElement,
            i = t._self._c || e;
          return i(
            "q-layout",
            { attrs: { view: "lHh lpr lFf" } },
            [
              i(
                "q-header",
                { staticClass: "bg-grey-3 text-black" },
                [
                  i(
                    "q-toolbar",
                    [
                      i("q-btn", {
                        attrs: { flat: "", round: "", dense: "", icon: "keyboard_arrow_left" },
                        on: { click: t.goBack },
                      }),
                      i("q-toolbar-title", [t._v("签到详情")]),
                    ],
                    1,
                  ),
                ],
                1,
              ),
              i(
                "q-page-container",
                [
                  i(
                    "q-page",
                    { staticClass: "bg-grey-3" },
                    [
                      i(
                        "q-card",
                        {
                          directives: [
                            {
                              name: "show",
                              rawName: "v-show",
                              value: "information" == t.tab,
                              expression: "tab == 'information'",
                            },
                          ],
                          staticClass: "full-width",
                          attrs: { flat: "" },
                        },
                        [
                          i(
                            "div",
                            [
                              i(
                                "q-chip",
                                {
                                  staticClass: "q-ma-sm",
                                  attrs: {
                                    square: "",
                                    color: "primary",
                                    "text-color": "white",
                                    icon: "event_available",
                                    size: "sm",
                                  },
                                },
                                [
                                  t._v(
                                    "\n            " +
                                      t._s((t.record || {}).signin_type_name) +
                                      "\n          ",
                                  ),
                                ],
                              ),
                            ],
                            1,
                          ),
                          i("div", { staticClass: "q-ml-sm row" }, [
                            i(
                              "span",
                              {
                                staticClass: "full-width text-weight-bold",
                                staticStyle: { "font-size": "15px" },
                              },
                              [t._v(t._s(t.record.title))],
                            ),
                            i("span", { staticClass: "neu-css-after-colon text-grey" }, [
                              t._v("发起人"),
                            ]),
                            t._v(t._s(t.record.name) + "\n        "),
                          ]),
                          i("div", { staticClass: "q-ml-sm row" }, [
                            i("span", { staticClass: "neu-css-after-colon text-grey" }, [
                              t._v("签到时间段"),
                            ]),
                            t._v(
                              t._s(t.record.begin_time) +
                                " 至 " +
                                t._s(t.record.end_time) +
                                "\n        ",
                            ),
                          ]),
                          null !== t.record.dep_name
                            ? i("div", { staticClass: "q-ml-sm row" }, [
                                i("span", { staticClass: "neu-css-after-colon text-grey" }, [
                                  t._v("发布单位"),
                                ]),
                                t._v(t._s(t.record.dep_name) + "\n        "),
                              ])
                            : t._e(),
                          i("q-separator", {
                            directives: [
                              {
                                name: "show",
                                rawName: "v-show",
                                value: null != t.record.attachment,
                                expression: "record.attachment != null",
                              },
                            ],
                            staticClass: "q-mt-sm",
                          }),
                          i(
                            "div",
                            {
                              directives: [
                                {
                                  name: "show",
                                  rawName: "v-show",
                                  value: null != t.record.attachment,
                                  expression: "record.attachment != null",
                                },
                              ],
                              staticClass: "q-ml-sm q-mt-xs row",
                            },
                            t._l(t.record.attachment, function (e) {
                              return i(
                                "div",
                                {
                                  key: e.size,
                                  staticClass: "text-grey",
                                  on: {
                                    click: function (i) {
                                      return t.downloadFile(e.link, e.srcname);
                                    },
                                  },
                                },
                                [
                                  i("span", { staticClass: "neu-css-after-colon text-grey" }, [
                                    t._v("附件"),
                                  ]),
                                  i("q-icon", {
                                    attrs: { name: "attach_file", color: "grey", size: "xs" },
                                  }),
                                  t._v("\n            " + t._s(e.srcname) + "\n          "),
                                ],
                                1,
                              );
                            }),
                            0,
                          ),
                        ],
                        1,
                      ),
                      i(
                        "q-card",
                        {
                          directives: [
                            {
                              name: "show",
                              rawName: "v-show",
                              value: "information" == t.tab,
                              expression: "tab == 'information'",
                            },
                          ],
                          staticClass: "full-width q-mt-sm",
                          attrs: { flat: "" },
                        },
                        [
                          i(
                            "q-card-section",
                            {
                              directives: [
                                {
                                  name: "show",
                                  rawName: "v-show",
                                  value: "未开始" == t.record.signin_status,
                                  expression: "record.signin_status == '未开始'",
                                },
                              ],
                            },
                            [
                              i("div", { staticClass: "flex flex-center" }, [
                                i("div", { staticClass: "row q-mb-sm q-mt-sm" }, [
                                  i("span", { staticStyle: { "font-size": "15px" } }, [
                                    t._v("签到任务还未开始，请稍后再来！"),
                                  ]),
                                ]),
                              ]),
                            ],
                          ),
                          i(
                            "q-card-section",
                            {
                              directives: [
                                {
                                  name: "show",
                                  rawName: "v-show",
                                  value: "未打卡" == t.record.signin_status,
                                  expression: "record.signin_status == '未打卡'",
                                },
                              ],
                            },
                            [
                              i("div", { staticClass: "q-mb-sm text-center" }, [
                                i("span", [t._v("当前为签到时间，请注意及时签到！")]),
                              ]),
                              "已请假" == t.record.leaved
                                ? i("div", { staticClass: "q-mb-sm text-center text-positive" }, [
                                    i("span", [t._v("本次签到任务您已请假，可自行选择是否签到！")]),
                                  ])
                                : t._e(),
                              i(
                                "div",
                                { staticClass: "text-center" },
                                [
                                  i(
                                    "q-btn",
                                    {
                                      directives: [
                                        {
                                          name: "show",
                                          rawName: "v-show",
                                          value:
                                            "L" == t.record.signin_method &&
                                            "0" == t.record.picture_evidence,
                                          expression:
                                            "record.signin_method == 'L' && record.picture_evidence == '0'",
                                        },
                                      ],
                                      attrs: { round: "", size: "3rem", color: "blue" },
                                      on: {
                                        click: function (e) {
                                          return t.signinPicLocation(t.record.id);
                                        },
                                      },
                                    },
                                    [
                                      i("q-icon", {
                                        staticStyle: { "font-size": "2.5rem" },
                                        attrs: { name: "place" },
                                      }),
                                    ],
                                    1,
                                  ),
                                  i(
                                    "q-btn",
                                    {
                                      directives: [
                                        {
                                          name: "show",
                                          rawName: "v-show",
                                          value:
                                            "L" == t.record.signin_method &&
                                            "1" == t.record.picture_evidence,
                                          expression:
                                            "record.signin_method == 'L' && record.picture_evidence == '1'",
                                        },
                                      ],
                                      attrs: { round: "", size: "3rem", color: "blue" },
                                      on: {
                                        click: function (e) {
                                          return t.signinPicLocation(t.record.id);
                                        },
                                      },
                                    },
                                    [
                                      i("q-icon", {
                                        staticStyle: { "font-size": "2.5rem" },
                                        attrs: { name: "local_see" },
                                      }),
                                    ],
                                    1,
                                  ),
                                  i(
                                    "q-btn",
                                    {
                                      directives: [
                                        {
                                          name: "show",
                                          rawName: "v-show",
                                          value:
                                            "DQR" == t.record.signin_method ||
                                            "SQR" == t.record.signin_method,
                                          expression:
                                            "record.signin_method == 'DQR' || record.signin_method == 'SQR'",
                                        },
                                      ],
                                      attrs: { round: "", size: "3rem", color: "blue" },
                                      on: {
                                        click: function (e) {
                                          return t.informationDetail(
                                            t.record.id,
                                            t.record.signin_method,
                                            t.batch_no,
                                          );
                                        },
                                      },
                                    },
                                    [
                                      i("q-icon", {
                                        staticStyle: { "font-size": "2.5rem" },
                                        attrs: { name: "mdi-qrcode-scan" },
                                      }),
                                    ],
                                    1,
                                  ),
                                ],
                                1,
                              ),
                              i(
                                "div",
                                {
                                  directives: [
                                    {
                                      name: "show",
                                      rawName: "v-show",
                                      value: "L" == t.record.signin_method,
                                      expression: "record.signin_method == 'L'",
                                    },
                                  ],
                                  staticClass: "text-center q-mt-md",
                                },
                                [
                                  t._v(
                                    "\n            当前所在位置：" +
                                      t._s(t.location.address) +
                                      "\n            ",
                                  ),
                                  i("neu-geo-location", {
                                    attrs: { needAddr: !0, location: t.research },
                                    on: { completed: t.locationCompleted, error: t.locationError },
                                  }),
                                ],
                                1,
                              ),
                            ],
                          ),
                        ],
                        1,
                      ),
                      i(
                        "q-card",
                        {
                          directives: [
                            {
                              name: "show",
                              rawName: "v-show",
                              value: "qa" == t.tab,
                              expression: "tab == 'qa'",
                            },
                          ],
                          staticClass: "bg-grey-3",
                          attrs: { flat: "" },
                        },
                        [
                          i(
                            "q-card-section",
                            [
                              i("neu-qa-list", {
                                attrs: { taskMenuId: "signin", taskId: t.id + "" },
                              }),
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
              i(
                "q-dialog",
                {
                  attrs: { persistent: "", "full-width": "" },
                  model: {
                    value: t.outPicture,
                    callback: function (e) {
                      t.outPicture = e;
                    },
                    expression: "outPicture",
                  },
                },
                [
                  i(
                    "q-card",
                    [
                      i("q-card-section", { staticClass: "flex flex-center" }, [
                        i("div", { staticClass: "text-weight-bold" }, [t._v("签到")]),
                      ]),
                      i("div", { staticClass: "text-center q-mb-md" }, [
                        t._v("\n        当前为签到范围外，是否进行拍照？\n      "),
                      ]),
                      i("q-separator"),
                      i(
                        "q-card-actions",
                        { attrs: { align: "around" } },
                        [
                          i(
                            "q-btn",
                            {
                              directives: [{ name: "close-popup", rawName: "v-close-popup" }],
                              attrs: { flat: "" },
                            },
                            [t._v("取消")],
                          ),
                          i("q-separator", { attrs: { vertical: "" } }),
                          i(
                            "q-btn",
                            {
                              directives: [{ name: "close-popup", rawName: "v-close-popup" }],
                              attrs: { flat: "", color: "primary" },
                              on: { click: t.takePhotos },
                            },
                            [t._v("确定")],
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
              i(
                "q-footer",
                {
                  directives: [
                    {
                      name: "show",
                      rawName: "v-show",
                      value: "未打卡" == t.record.signin_status,
                      expression: "record.signin_status == '未打卡'",
                    },
                  ],
                  staticClass: "bg-white text-primary",
                  attrs: { bordered: "" },
                },
                [
                  i(
                    "q-tabs",
                    {
                      staticClass: "text-black",
                      attrs: {
                        "no-caps": "",
                        "active-color": "primary",
                        "indicator-color": "transparent",
                        align: "justify",
                      },
                      model: {
                        value: t.tab,
                        callback: function (e) {
                          t.tab = e;
                        },
                        expression: "tab",
                      },
                    },
                    [
                      i("q-tab", { attrs: { name: "information", label: "任务信息" } }),
                      i("q-separator", { attrs: { vertical: "" } }),
                      i("q-tab", { attrs: { name: "qa", label: "提问" } }),
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
        n = [],
        r = (i("baa5"), i("46f3")),
        c = i("7590"),
        l = i("ad56");
      document.addEventListener(
        "deviceready",
        () => {
          ((s = navigator.camera.PictureSourceType), (a = navigator.camera.DestinationType));
        },
        !1,
      );
      var d = {
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
                ("已结束" !== this.record.signin_status &&
                  "已打卡" !== this.record.signin_status) ||
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
                              query: {
                                id: this.$route.query.id,
                                batch_no: this.$route.query.batch_no,
                              },
                            });
                          })
                        : 0 === this.locals.allow_outside && 1 === this.locals.picture_evidence
                          ? !0 === this.locals.range
                            ? this.takePhotos()
                            : this.$q
                                .dialog({
                                  title: "签到",
                                  message: "当前为签到范围外，无法进行签到打卡。",
                                })
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
                                  query: {
                                    id: this.$route.query.id,
                                    batch_no: this.$route.query.batch_no,
                                  },
                                });
                              })
                            : this.$q
                                .dialog({
                                  title: "签到",
                                  message: "当前为签到范围外，无法进行签到打卡。",
                                })
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
              ((this.research = this.research + 1),
                (this.recordId = t),
                (this.locationStatus = !0));
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
                  this.$q
                    .dialog({ title: "签到", message: "照片上传失败，无法进行签到！" })
                    .onOk(() => {
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
        },
        u = d,
        h = i("2877"),
        m = i("4d5a"),
        p = i("e359"),
        g = i("65c6"),
        v = i("9c40"),
        _ = i("6ac5"),
        b = i("09e3"),
        w = i("9989"),
        q = i("f09f"),
        f = i("b047"),
        y = i("eb85"),
        x = i("0016"),
        C = i("a370"),
        k = i("24e8"),
        $ = i("4b7e"),
        S = i("7ff0"),
        N = i("429b"),
        Q = i("7460"),
        L = i("7f67"),
        P = i("eebe"),
        I = i.n(P),
        O = Object(h["a"])(u, o, n, !1, null, null, null);
      e["default"] = O.exports;
      (I()(O, "components", {
        QLayout: m["a"],
        QHeader: p["a"],
        QToolbar: g["a"],
        QBtn: v["a"],
        QToolbarTitle: _["a"],
        QPageContainer: b["a"],
        QPage: w["a"],
        QCard: q["a"],
        QChip: f["a"],
        QSeparator: y["a"],
        QIcon: x["a"],
        QCardSection: C["a"],
        QDialog: k["a"],
        QCardActions: $["a"],
        QFooter: S["a"],
        QTabs: N["a"],
        QTab: Q["a"],
      }),
        I()(O, "directives", { ClosePopup: L["a"] }));
    },
  },
]);
