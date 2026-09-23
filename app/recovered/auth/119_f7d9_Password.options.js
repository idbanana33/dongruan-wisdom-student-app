/**
 * Vue options object recovered from webpack module AST.
 * Source: assets/www/js/119.js -> module "f7d9"
 * Route: /user/account
 * Component: Password
 * Not guaranteed standalone: imports/module aliases must be resolved from sibling .logic.js.
 */
const componentOptions = {
  name: "Password",
  data() {
    return {
      isStu: JSON.parse(window.localStorage.userinfo).role_type,
      mobLink:
        window.localStorage.captcha && JSON.parse(window.localStorage.captcha)
          ? "/user/bindingMob"
          : "",
      record: {},
    };
  },
  destroyed() {
    window.removeEventListener("popstate", this.goBack, !1);
  },
  mounted() {
    (window.history &&
      window.history.pushState &&
      (history.pushState(null, null, document.URL),
      window.addEventListener("popstate", this.goBack, !1)),
      "S" === this.isStu
        ? this.$axiosAction("/api/student/basic/stuInfo.api", { action: "queryMyStuInfo" }).then(
            (t) => {
              0 === t.data.code && (this.record = t.data.result);
            },
          )
        : "T" === this.isStu
          ? this.$axiosAction("/api/teacher/basic/teaInfo.api", { action: "queryMyTeaInfo" }).then(
              (t) => {
                0 === t.data.code && (this.record = t.data.result);
              },
            )
          : this.$axiosAction("/api/teacher/basic/mainInfo.api", {
              action: "queryMyMainInfo",
            }).then((t) => {
              0 === t.data.code && (this.record = t.data.result);
            }));
  },
  methods: {
    goBack() {
      "S" === JSON.parse(window.localStorage.userinfo).role_type
        ? this.$router.push("/student/index")
        : "T" === JSON.parse(window.localStorage.userinfo).role_type
          ? this.$router.push("/teacher/index")
          : this.$router.push("/maintainer/index");
    },
    moveTo(t, e) {
      t && (e ? this.$router.push({ path: t, query: e }) : this.$router.push(t));
    },
    registerWechat() {
      this.record.wx_userinfo
        ? this.$q
            .dialog({
              title: "微信解绑确认",
              message: "您确认要解除绑定微信账号关联吗？",
              persistent: !0,
              cancel: { label: "取消", outline: !0, color: "grey" },
              ok: { label: "确认", unelevated: !0, color: "negative" },
            })
            .onOk(() => {
              (this.$q.loading.show({ message: "解绑中……" }),
                this.$axiosAction("/api/user/user.api", { action: "unregisterWechat" }).then(
                  (t) => {
                    (0 === t.data.code && i["a"].set(this.record, "wx_userinfo", null),
                      this.$q.loading.hide());
                  },
                ));
            })
        : Wechat.isInstalled((t) => {
            if (t) {
              const t = "snsapi_userinfo",
                e = `_${Date.now()}`;
              Wechat.auth(
                t,
                e,
                (t) => {
                  t.state === e
                    ? (this.$q.loading.show({ message: "绑定中……" }),
                      this.$axiosAction("/api/user/user.api", {
                        action: "registerWechat",
                        code: t.code,
                      }).then((t) => {
                        (0 === t.data.code &&
                          i["a"].set(this.record, "wx_userinfo", t.data.wx_userinfo),
                          this.$q.loading.hide());
                      }))
                    : this.$showErrorNotify("授权处理过期");
                },
                (t) => {
                  this.$showErrorNotify(t);
                },
              );
            } else this.$showErrorNotify("未安装微信");
          });
    },
  },
};
export default componentOptions;
