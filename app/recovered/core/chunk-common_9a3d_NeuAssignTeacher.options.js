/**
 * Vue options object recovered from webpack module AST.
 * Source: assets/www/js/chunk-common.js -> module "9a3d"
 * Route: (shared/core)
 * Component: NeuAssignTeacher
 * Not guaranteed standalone: imports/module aliases must be resolved from sibling .logic.js.
 */
const componentOptions = {
  name: "NeuAssignTeacher",
  props: { value: null },
  data() {
    return {
      tab: "team",
      assignedData: [],
      treeDatas: [],
      teamNode: null,
      teamSelected: [],
      teamPath: [],
      roleList: [],
      roleSelected: [],
      list: [],
      selected: [],
    };
  },
  mounted() {
    ((this.assignedData = this.value || []),
      this.$axiosAction("/api/teacher/basic/teacher.api", { action: "queryDepTree" }).then((e) => {
        if (
          0 === e.data.code &&
          ((this.treeDatas = e.data.list), this.treeDatas && 0 !== this.treeDatas.length)
        ) {
          ((this.teamPath = [this.treeDatas[0]]), (this.teamNode = this.treeDatas[0]));
          for (const e of this.assignedData)
            if (l.indexOf(e.target_level) >= 0) {
              const t = this.findNodeByKey(
                this.treeDatas[0],
                "_" + e.target_level + "_" + e.target_no,
              );
              t &&
                (this.teamSelected = this.teamSelected.concat(t).concat(this.selectAllChildren(t)));
            }
        }
      }),
      this.$axiosAction("/api/teacher/basic/role.api", { action: "queryTeacherRoleList" }).then(
        (e) => {
          if (0 === e.data.code) {
            this.roleList = e.data.list;
            for (const e of this.assignedData)
              if ("role" === e.target_level) {
                const t = this.roleList.findIndex((t) => t.role_id === e.target_no);
                t >= 0 && (this.roleSelected = this.roleSelected.concat(this.roleList[t]));
              }
          }
        },
      ));
  },
  watch: {
    value(e) {
      this.assignedData = e || [];
    },
    assignedData(e) {
      this.$emit("input", e);
    },
  },
  computed: {
    userData() {
      return this.assignedData.reduce((e, t) => ("user" === t.target_level ? e.concat(t) : e), []);
    },
    roleData() {
      return this.assignedData.reduce((e, t) => ("role" === t.target_level ? e.concat(t) : e), []);
    },
    teamData() {
      return this.assignedData.reduce(
        (e, t) => (l.indexOf(t.target_level) >= 0 ? e.concat(t) : e),
        [],
      );
    },
  },
  methods: {
    loadList(e) {
      this.$axiosAction("/api/teacher/basic/teacher.api", {
        action: "queryListForAssignNoPaging",
        dep_no: e.target_no,
      })
        .then((e) => {
          0 === e.data.code &&
            ((this.list = e.data.list),
            (this.selected = this.assignedData.reduce(
              (e, t) =>
                "user" === t.target_level && this.list.find((e) => e.login_name === t.target_no)
                  ? e.concat(this.list.find((e) => e.login_name === t.target_no))
                  : e,
              [],
            )));
        })
        .catch((e) => {
          ((this.list = []), (this.selected = []));
        });
    },
    removeData(e) {
      if (l.indexOf(e.target_level) >= 0) {
        const t = this.assignedData.findIndex(
            (t) => t.target_level === e.target_level && t.target_no === e.target_no,
          ),
          i = this.findNodeByKey(this.treeDatas[0] || {}, "_" + e.target_level + "_" + e.target_no);
        if (i) {
          const e = this.teamSelected.findIndex((e) => e.node_key === i.node_key);
          (e >= 0 && this.teamSelected.splice(e, 1), this.unselectAllChildren(i));
        }
        this.assignedData.splice(t, 1);
      } else if ("user" === e.target_level) {
        let t = this.selected.findIndex((t) => t.login_name === e.target_no);
        (t >= 0 && this.selected.splice(t, 1),
          (t = this.assignedData.findIndex(
            (t) => t.target_level === e.target_level && t.target_no === e.target_no,
          )),
          this.assignedData.splice(t, 1));
      } else if ("role" === e.target_level) {
        let t = this.roleSelected.findIndex((t) => t.role_id === e.target_no);
        (t >= 0 && this.roleSelected.splice(t, 1),
          (t = this.assignedData.findIndex(
            (t) => t.target_level === e.target_level && t.target_no === e.target_no,
          )),
          this.assignedData.splice(t, 1));
      }
    },
    removeAll() {
      ((this.assignedData = []),
        (this.selected = []),
        (this.roleSelected = []),
        (this.teamSelected = []));
    },
    selectUser(e) {
      if (this.selected.findIndex((t) => t.login_name === e.login_name) >= 0)
        this.assignedData.findIndex(
          (t) => "user" === t.target_level && t.target_no === e.login_name,
        ) < 0 &&
          (this.assignedData = this.assignedData.concat({
            target_level: "user",
            target_no: e.login_name,
            target_name: e.name,
          }));
      else {
        const t = this.assignedData.findIndex(
          (t) => "user" === t.target_level && t.target_no === e.login_name,
        );
        t >= 0 && this.assignedData.splice(t, 1);
      }
    },
    selectRole() {
      this.assignedData = this.assignedData
        .reduce((e, t) => ("role" === t.target_level ? e : e.concat(t)), [])
        .concat(
          this.roleSelected.reduce(
            (e, t) =>
              e.concat({ target_level: "role", target_no: t.role_id, target_name: t.role_name }),
            [],
          ),
        );
    },
    expandNode(e) {
      ((this.teamPath = this.teamPath.concat(e)),
        (this.teamNode = e),
        e.children ? ((this.list = []), (this.selected = [])) : this.loadList(e));
    },
    changeNavi(e) {
      const t = this.teamPath.findIndex((t) => t.node_key === e.node_key);
      (this.teamPath !== t + 1 &&
        (this.teamPath.splice(t + 1, this.teamPath.length - (t + 1)), (this.teamNode = e)),
        e.children && ((this.list = []), (this.selected = [])));
    },
    selectTeam(e) {
      (this.teamSelected.findIndex((t) => t.node_key === e.node_key) >= 0
        ? (this.teamSelected = this.teamSelected
            .concat(this.selectAllChildren(e))
            .concat(this.selectParent(e)))
        : (this.unselectAllChildren(e), this.unselectParent(e)),
        (this.assignedData = this.assignedData
          .reduce((e, t) => (l.indexOf(t.target_level) >= 0 ? e : e.concat(t)), [])
          .concat(this.treeDatas.reduce((e, t) => e.concat(this.createAssignedTeam(t)), []))));
    },
    findNodeByKey(e, t) {
      if (e.node_key === t) return e;
      if (e.children) {
        for (const i of e.children) {
          if (i.node_key === t) return i;
          if (i.children) {
            const e = this.findNodeByKey(i, t);
            if (e) return e;
          }
        }
        return null;
      }
      return null;
    },
    findParentOfNode(e, t) {
      for (const i of e.children) {
        if (i.node_key === t) return e;
        if (i.children) {
          const e = this.findParentOfNode(i, t);
          if (e) return e;
        }
      }
      return null;
    },
    selectParent(e) {
      const t = this.findParentOfNode(this.treeDatas[0], e.node_key);
      return t &&
        t.children.reduce(
          (t, i) =>
            this.teamSelected.findIndex(
              (t) => t.node_key === i.node_key && i.node_key !== e.node_key,
            ) >= 0
              ? t + 1
              : t,
          0,
        ) ===
          t.children.length - 1
        ? [t].concat(this.selectParent(t))
        : [];
    },
    selectAllChildren(e) {
      return e.children
        ? e.children.reduce(
            (e, t) =>
              this.teamSelected.findIndex((e) => e.node_key === t.node_key) >= 0
                ? e
                : e.concat(t).concat(this.selectAllChildren(t)),
            [],
          )
        : [];
    },
    unselectParent(e) {
      const t = this.findParentOfNode(this.treeDatas[0], e.node_key);
      if (t) {
        const e = this.teamSelected.findIndex((e) => e.node_key === t.node_key);
        e >= 0 && (this.teamSelected.splice(e, 1), this.unselectParent(t));
      }
    },
    unselectAllChildren(e) {
      if (e.children)
        for (const t of e.children) {
          const e = this.teamSelected.findIndex((e) => e.node_key === t.node_key);
          (e >= 0 && this.teamSelected.splice(e, 1), this.unselectAllChildren(t));
        }
    },
    createAssignedTeam(e) {
      return this.teamSelected.findIndex((t) => t.node_key === e.node_key) >= 0
        ? [{ target_level: e.target_level, target_no: e.target_no, target_name: e.target_name }]
        : e.children
          ? e.children.reduce((e, t) => e.concat(this.createAssignedTeam(t)), [])
          : [];
    },
  },
};
export default componentOptions;
