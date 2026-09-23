/**
 * Vue options object recovered from webpack module AST.
 * Source: assets/www/js/chunk-common.js -> module "f395"
 * Route: (shared/core)
 * Component: NeuImportData
 * Not guaranteed standalone: imports/module aliases must be resolved from sibling .logic.js.
 */
const componentOptions = {
  name: "NeuAssignStudent",
  components: { NeuImportData: k },
  props: { value: null, menuId: String, permit: String, permitMode: String, hideGroup: Boolean },
  data() {
    return {
      assignedData: [],
      schoolRollStatusList: [],
      educationLevelList: [],
      gradeList: [],
      gradeNo: "",
      treeDatas: [],
      teamPath: [],
      teamNode: null,
      teamSelected: [],
      list: [],
      selected: [],
      importDialog: !1,
      studentsModel: "",
      importErrorMessage: "",
      schooleRollStatusDialog: !1,
      srsItem: {},
      tab: "team",
      groupList: [],
      groupSelected: [],
      importCompConfig: null,
    };
  },
  mounted() {
    ((this.assignedData = this.value || []),
      this.$axiosAction("/api/public.api", {
        action: "queryResultOfFunction",
        functionName: "basic.f_query_grade_list()",
      }).then((e) => {
        0 === e.data.code && (this.gradeList = e.data.list);
      }),
      this.$axiosAction("/api/public.api", {
        action: "queryResultOfFunction",
        functionName: "basic.f_query_option_list('school_roll_status')",
      }).then((e) => {
        0 === e.data.code && (this.schoolRollStatusList = e.data.list);
      }),
      this.$axiosAction("/api/public.api", {
        action: "queryResultOfFunction",
        functionName: "basic.f_query_education_level_list()",
      }).then((e) => {
        0 === e.data.code && (this.educationLevelList = e.data.list);
      }),
      this.hideGroup ||
        this.$axiosAction("/api/teacher/basic/memberGroup.api", {
          action: "queryListForAssignStudent",
        }).then((e) => {
          if (0 === e.data.code) {
            this.groupList = e.data.list;
            for (const e of this.assignedData)
              if ("group" === e.target_level) {
                const t = this.groupList.findIndex((t) => t.id === e.target_no);
                t >= 0 && (this.groupSelected = this.groupSelected.concat(this.groupList[t]));
              }
          }
        }));
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
    teamData() {
      return this.assignedData.reduce(
        (e, t) => (q.indexOf(t.target_level) >= 0 ? e.concat(t) : e),
        [],
      );
    },
    groupData() {
      return this.assignedData.reduce((e, t) => ("group" === t.target_level ? e.concat(t) : e), []);
    },
  },
  methods: {
    changeGrade() {
      this.gradeNo
        ? ((this.list = []),
          (this.selected = []),
          this.$axiosAction("/api/teacher/basic/student.api", {
            action: "queryDepMajorClassListByGrade",
            menu_id: this.menuId,
            permit_mode: this.permitMode,
            grade_nos: [this.gradeNo],
          }).then((e) => {
            if (0 === e.data.code)
              if (
                ("D" === this.permit
                  ? (this.treeDatas = e.data.list.reduce(
                      (e, t) =>
                        e.concat(
                          o()(
                            o()({}, t.children[0]),
                            {},
                            { label: `${t.children[0].label} - ${t.children[0].grade_name}` },
                          ),
                        ),
                      [],
                    ))
                  : (this.treeDatas = e.data.list),
                this.treeDatas && 0 !== this.treeDatas.length)
              ) {
                ((this.teamPath = [this.treeDatas[0]]),
                  (this.teamNode = this.treeDatas[0]),
                  (this.teamSelected = []));
                for (const e of this.assignedData)
                  if (q.indexOf(e.target_level) >= 0) {
                    const t = this.findNodeByKey(
                      this.treeDatas[0],
                      e.grade_no + "_" + e.target_level + "_" + e.target_no,
                    );
                    t &&
                      (this.teamSelected = this.teamSelected
                        .concat(t)
                        .concat(this.selectAllChildren(t)));
                  }
              } else ((this.teamPath = []), (this.teamNode = null), (this.teamSelected = []));
          }))
        : ((this.treeDatas = []),
          (this.teamPath = []),
          (this.teamNode = null),
          (this.teamSelected = []));
    },
    loadList(e) {
      this.$axiosAction("/api/teacher/basic/student.api", {
        action: "queryListForAssignNoPaging",
        menu_id: this.menuId,
        permit_mode: this.permitMode,
        grade_no: e.grade_no,
        class_no: e.target_no,
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
      if (q.indexOf(e.target_level) >= 0) {
        const t = this.assignedData.findIndex(
            (t) =>
              t.target_level === e.target_level &&
              t.target_no === e.target_no &&
              t.grade_no === e.grade_no,
          ),
          i = this.findNodeByKey(
            this.treeDatas[0] || {},
            e.grade_no + "_" + e.target_level + "_" + e.target_no,
          );
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
      } else if ("group" === e.target_level) {
        let t = this.groupSelected.findIndex((t) => t.id === e.target_no);
        (t >= 0 && this.groupSelected.splice(t, 1),
          (t = this.assignedData.findIndex(
            (t) => t.target_level === e.target_level && t.target_no === e.target_no,
          )),
          this.assignedData.splice(t, 1));
      }
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
    removeAll() {
      ((this.tab = "team"),
        (this.assignedData = []),
        (this.selected = []),
        (this.teamSelected = []),
        (this.groupSelected = []));
    },
    setSchoolRollStatusName(e) {
      e.school_roll_status && e.school_roll_status.length > 0
        ? (e.school_roll_status_name = this.schoolRollStatusList
            .reduce(
              (t, i) => (e.school_roll_status.indexOf(i.value) >= 0 ? t.concat(i.label) : t),
              [],
            )
            .join(","))
        : (e.school_roll_status_name = "");
    },
    setEducationLevelName(e) {
      e.education_level && e.education_level.length > 0
        ? (e.education_level_name = this.educationLevelList
            .reduce((t, i) => (e.education_level.indexOf(i.value) >= 0 ? t.concat(i.label) : t), [])
            .join(","))
        : (e.education_level_name = "");
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
          .reduce(
            (e, t) =>
              q.indexOf(t.target_level) >= 0 && this.gradeNo === t.grade_no ? e : e.concat(t),
            [],
          )
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
        ? [
            {
              target_level: e.target_level,
              target_no: e.target_no,
              grade_no: e.grade_no,
              target_name: e.target_name,
              grade_name: e.grade_name,
            },
          ]
        : e.children
          ? e.children.reduce((e, t) => e.concat(this.createAssignedTeam(t)), [])
          : [];
    },
    openImportDialog() {
      ((this.importDialog = !0), (this.studentsModel = ""), (this.importErrorMessage = ""));
    },
    importStudents() {
      var e = new RegExp(/.*["'`^~&+%?*@#!=()|{}.,:;<> /\\]{1,}.*/);
      if (e.test(this.studentsModel)) return void this.$showErrorNotify("粘贴的内容中包含非法字符");
      if (0 === this.studentsModel.replace(/(\r\n)/g, /\n/).replace(/\n/g, "").length)
        return void this.$showErrorNotify("请粘贴有效数据");
      const t = this.studentsModel
          .replace(/(\r\n)/g, /\n/)
          .split(/\n/)
          .reduce((e, t) => (t || 0 === t ? e.concat(t) : e), []),
        i = t.length;
      this.importCompConfig = [
        "/api/teacher/basic/student.api",
        "queryImportedListForAssign",
        { menu_id: this.menuId, permit_mode: this.permitMode },
        "students",
        t.reduce((e, t) => e.concat(t), []),
        () => {
          this.afterImportStudents(i, t);
        },
        () => {
          this.afterImportStudents(i, t);
        },
        null,
        (e) => {
          for (const i of e.list) {
            if (
              this.assignedData.findIndex(
                (e) => "user" === e.target_level && e.target_no === i.login_name,
              ) < 0
            ) {
              this.assignedData = this.assignedData.concat({
                target_level: "user",
                target_no: i.login_name,
                target_name: i.name,
              });
              const e = this.list.find((e) => e.login_name === i.login_name);
              e && (this.selected = this.selected.concat(e));
            }
            t.splice(
              t.findIndex((e) => e === i.login_name),
              1,
            );
          }
        },
      ];
    },
    afterImportStudents(e, t) {
      t && 0 !== t.length
        ? ((this.importErrorMessage = `本次共计${e}名学生，其中${e - t.length}人已设置完毕，另有${t.length}名学生学号不存在或您无权设置，具体学号名单如上，请核准后重新操作。`),
          (this.studentsModel = t.reduce((e, t) => (e ? e + "\n" + t : t), "")))
        : (this.importDialog = !1);
    },
    selectGroup() {
      this.assignedData = this.assignedData
        .reduce((e, t) => ("group" === t.target_level ? e : e.concat(t)), [])
        .concat(
          this.groupSelected.reduce(
            (e, t) => e.concat({ target_level: "group", target_no: t.id, target_name: t.title }),
            [],
          ),
        );
    },
  },
};
export default componentOptions;
