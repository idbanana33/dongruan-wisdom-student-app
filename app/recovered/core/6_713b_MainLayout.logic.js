/**
 * Webpack module logic recovery
 * Source: assets/www/js/6.js -> module "713b"
 * Route: (shared/core)
 * Component guess: MainLayout
 * Fidelity: exact module body, beautified only (webpack wrapper retained)
 * Note: variable names inside the original production module are preserved as evidence.
 */
"713b": function(e, i, t) {
  "use strict";
  t.r(i);
  var a = function() {
      var e = this,
        i = e.$createElement,
        t = e._self._c || i;
      return t("router-view")
    },
    n = [],
    s = {
      name: "MainLayout",
      data() {
        return {}
      },
      mounted() {
        window.localStorage.editorToolBar = JSON.stringify([
          [{
            label: "格式",
            options: ["bold", "italic", "underline", "strike", "subscript", "superscript"]
          }, {
            label: "字体",
            list: "no-icons",
            options: ["default_font", "simsun", "kaiti", "simhei", "lishu", "fangsong", "nsimsun", "stsong", "stkaiti", "stheiti", "stfangsong", "arial", "arial_black", "comic_sans", "courier_new", "impact", "lucida_grande", "times_new_roman", "verdana"]
          }],
          [{
            label: "字号",
            list: "no-icons",
            options: ["size-1", "size-2", "size-3", "size-4", "size-5", "size-6", "size-7"]
          }, {
            label: "标题",
            list: "no-icons",
            options: ["p", "h1", "h2", "h3", "h4", "h5", "h6"]
          }],
          [{
            label: "对齐方式",
            options: ["left", "center", "right", "justify"]
          }, {
            label: "排版",
            options: ["quote", "unordered", "ordered", "outdent", "indent"]
          }],
          [{
            label: "操作",
            options: ["removeFormat", "undo", "redo"]
          }, "fullscreen"]
        ]), window.localStorage.editorFonts = JSON.stringify({
          simsun: "宋体",
          kaiti: "楷体",
          simhei: "黑体",
          lishu: "隶书",
          fangsong: "仿宋",
          nsimsun: "新宋体",
          stsong: "华文宋体",
          stkaiti: "华文楷体",
          stheiti: "华文黑体",
          stfangsong: "华文仿宋",
          arial: "Arial",
          arial_black: "Arial Black",
          comic_sans: "Comic Sans MS",
          courier_new: "Courier New",
          impact: "Impact",
          lucida_grande: "Lucida Grande",
          times_new_roman: "Times New Roman",
          verdana: "Verdana"
        })
      },
      created() {
        document.addEventListener("deviceready", (() => {
          window.addEventListener("setNotificationBadge", (({
            detail: {
              badge: e
            }
          }) => {
            cordova.plugins.notification.badge.set(e);
            const i = new CustomEvent("refreshTodoBadge", null);
            window.dispatchEvent(i)
          }), !1), window.addEventListener("resetBadge", (() => {
            this.$axiosAction("/api/push/push.api", {
              action: "queryBadgeCount"
            }, "post", !1).then((e => {
              if (0 === e.data.code) {
                const i = new CustomEvent("setNotificationBadge", {
                  detail: {
                    badge: e.data.badge
                  }
                });
                window.dispatchEvent(i)
              }
            }))
          }), !1), window.addEventListener("updateBadge", (({
            detail: {
              id: e
            }
          }) => {
            this.$axiosAction("/api/push/push.api", {
              action: "updateStatus",
              id: e
            }, "post", !1).then((e => {
              if (0 === e.data.code) {
                const i = new CustomEvent("setNotificationBadge", {
                  detail: {
                    badge: e.data.badge
                  }
                });
                window.dispatchEvent(i)
              }
            }))
          }), !1)
        }), !1)
      },
      methods: {}
    },
    o = s,
    d = t("2877"),
    r = Object(d["a"])(o, a, n, !1, null, null, null);
  i["default"] = r.exports
}
