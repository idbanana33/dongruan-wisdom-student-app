/**
 * Webpack module logic recovery
 * Source: assets/www/js/app.js -> module "ad56"
 * Route: (shared/core)
 * Component guess: app_ad56
 * Fidelity: exact module body, beautified only (webpack wrapper retained)
 * Note: variable names inside the original production module are preserved as evidence.
 */
ad56: function(e, n, t) {
  "use strict";
  t.d(n, "d", (function() {
    return a
  })), t.d(n, "c", (function() {
    return o
  })), t.d(n, "a", (function() {
    return i
  })), t.d(n, "e", (function() {
    return l
  })), t.d(n, "b", (function() {
    return s
  }));
  t("e6cf");

  function a(e) {
    const n = (window.localStorage.menu ? JSON.parse(window.localStorage.getItem("menu")) : []).find((n => n.id === e));
    return n && n.color.backgroundValue ? n.color.backgroundValue : "A5D6A7"
  }

  function o(e, n) {
    window.requestFileSystem(window.LocalFileSystem.PERSISTENT, 0, (t => {
      t.root.getFile(n, {
        create: !0,
        exclusive: !1
      }, (t => {
        const a = new window.FileTransfer,
          o = encodeURI(`${window.localStorage.server}/${e}`),
          i = cordova.file.dataDirectory + n;
        a.download(o, i, (e => {
          e.file((e => {
            cordova.plugins.fileOpener2.showOpenWithDialog(i, e.type, (e => {}), (e => {}))
          }))
        }), (() => {}))
      }), (() => {}))
    }), (() => {}))
  }

  function i(e) {
    const n = /^[1][3,4,5,6,7,8,9][0-9]{9}$/;
    return n.test(e) ? null : "手机号码不正确"
  }

  function l(e, n, t) {
    JPush.isPushStopped((a => {
      0 === a || JPush.resumePush(), JPush.getRegistrationID((a => {
        r = 10, d(e, n, t)
      }))
    }))
  }
  var r = 10;

  function d(e, n, t) {
    0 !== r && (r--, JPush.setAlias({
      sequence: 1,
      alias: e
    }, (a => {
      c(e, n, t)
    }), (() => {
      setTimeout((() => {
        d(e, n, t)
      }), 2e3)
    })))
  }
  async function c(e, n, t) {
    let a = "";
    a = "T" === n ? "updateTeacherDeviceId" : "S" === n ? "updateStudentDeviceId" : "updateMaintainerDeviceId", t.$axiosAction("/api/user/user.api", {
      action: a,
      device_id: e,
      device_extra: JSON.stringify({
        platform: window.device.platform,
        is_ios: JPush.isPlatformIOS(),
        app_version: window.localStorage.appversion
      })
    }, "post", !1)
  }

  function s(e, n) {
    e.$axiosAction(`${e.$appConf.portalUrl}/api/server.api`, {
      action: "queryVersion",
      platform: JPush.isPlatformIOS() ? "ios" : "android",
      version: window.localStorage.appversion
    }, "post", !1).then((t => {
      0 === t.data.code && t.data.upgrading ? e.$router.push({
        path: "/update",
        query: {
          ver: t.data.ver,
          mandatory: t.data.mandatory
        }
      }) : n || e.$showSuccessNotify("无新版本")
    }))
  }
}
