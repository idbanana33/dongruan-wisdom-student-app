/**
 * Vue options object recovered from webpack module AST.
 * Source: assets/www/js/107.js -> module "a22e"
 * Route: /teacher/sanitation/detailresult
 * Component: SanitationDetailResult
 * Not guaranteed standalone: imports/module aliases must be resolved from sibling .logic.js.
 */
const componentOptions = {
  name: "SanitationDetailResult",
  components: { NeuWidget: l["a"] },
  data() {
    return {
      roleId: JSON.parse(window.localStorage.getItem("userinfo")).role_id,
      teacherNo: "",
      menuInfo: null,
      sanitationType: "",
      sanitation_id: null,
      return_url: "",
      show_time: !0,
      show_Suse: !0,
      room_no: "",
      room_name: "",
      disabled: !1,
      viewMode: !1,
      readonlysuse: !0,
      result: { info_result: [] },
      begin_date: "",
      end_date: "",
      sanitation_result: {
        id: null,
        sanitation_id: null,
        teacher_no: "",
        check_date: "",
        room_no: "",
        room_name: "",
        info_result: [],
        status: void 0,
        create_time: "",
        create_user: "",
        edit_time: "",
        edit_user: "",
      },
      editDialog: !1,
      roomList: [],
      buildingList: [],
      record: {},
      buildingRoomList: [],
      stuResult: [],
      stuList: [],
      infoConfig: [],
      stuInfoConf: [],
      getAllowDelete: !1,
    };
  },
  mounted() {
    if (
      (window.localStorage.getItem("menu") &&
        ((this.menuInfo = JSON.parse(window.localStorage.getItem("menu")).find(
          (t) => "sanitation" === t.id,
        )),
        (this.sanitationType = this.$route.query.type),
        (this.sanitation_id = this.$route.query.sanId),
        (this.teacherNo = this.$route.query.teacher_no),
        (this.getAllowDelete = "true" === this.$route.query.getAllowDelete)),
      this.getTaskResult(),
      "d" === this.sanitationType || "u" === this.sanitationType)
    ) {
      ("u" === this.sanitationType
        ? ((this.viewMode = !1), (this.show_time = !0))
        : ((this.viewMode = !0), (this.show_time = !1), (this.disabled = !0)),
        (this.readonlysuse = !0),
        (this.show_Suse = !1));
      const t = window.localStorage.getItem("sanitation_result_detail"),
        i = JSON.parse(t);
      ((this.sanitation_result = n()({}, i)),
        (this.room_no = i.room_no),
        (this.room_name = i.room_name),
        this.queryStudent(),
        (this.result.info_result = this.sanitation_result.info_result));
    }
    ((this.return_url = window.localStorage.getItem("sanitation_detail_url")),
      this.$axiosAction("/api/teacher/sanitation/sanitation.api", {
        action: "queryAllBuilding",
      }).then((t) => {
        0 === t.data.code && (this.buildingList = t.data.list);
      }),
      this.$axiosAction("/api/teacher/basic/stuRoom.api", { action: "queryAllBuildingRoom" }).then(
        (t) => {
          0 === t.data.code && (this.buildingRoomList = t.data.result);
        },
      ));
  },
  methods: {
    getTaskResult() {
      this.$axiosAction("/api/teacher/sanitation/sanitation.api", {
        action: "querySanitation",
        id: this.sanitation_id,
        roleId: this.roleId,
      })
        .then((t) => {
          0 === t.data.code &&
            ((this.infoConfig = t.data.result.info_config),
            (this.stuInfoConf = t.data.result.stu_info_config),
            (this.begin_date = t.data.result.begin_date),
            (this.end_date = t.data.result.end_date),
            0 !== this.stuInfoConf.length && (this.show_stu_result = !0));
        })
        .catch((t) => {
          this.$q.loading.hide();
        });
    },
    goBack() {
      this.$router.push("/teacher/sanitation/detail");
    },
    changeStatus(t) {
      this.sanitation_result.status = t;
    },
    saveSanitationResult() {
      if ("" === this.sanitation_result.check_date)
        return void this.$showErrorNotify("请填写执行日期");
      if ("请选择宿舍" === this.sanitation_result.room_no || "" === this.sanitation_result.room_no)
        return void this.$showErrorNotify("请选择宿舍");
      this.sanitation_result.sanitation_id = parseInt(this.sanitation_id);
      const t = n()({}, this.result);
      ((t.info_result = JSON.stringify(t.info_result)),
        (this.sanitation_result.info_result = t.info_result));
      const i = n()({}, this.sanitation_result);
      if ((this.$q.loading.show(), "n" === this.sanitationType)) {
        const t = [];
        for (let i = 0; i < this.stuResult.length; i++)
          t[i] = {
            student_no: this.stuList[i].login_name,
            info_result: JSON.stringify(this.stuResult[i].info_result),
            sanitation_result_id: this.sanitation_result.id,
          };
        this.$axiosAction(
          "/api/teacher/sanitation/sanitation.api",
          n()(n()({ action: "insertSanitationResult" }, i), {}, { sturst: t }),
        )
          .then((t) => {
            (0 === t.data.code &&
              this.$router.push(
                "/teacher/sanitation/detail?id=" + this.sanitation_result.sanitation_id + "&type=d",
              ),
              this.$q.loading.hide());
          })
          .catch((t) => {
            this.$q.loading.hide();
          });
      } else
        this.$axiosAction(
          "/api/teacher/sanitation/sanitation.api",
          n()({ action: "updateSanitationResult" }, i),
        )
          .then((t) => {
            if (0 === t.data.code) {
              if (0 !== this.stuInfoConf.length) {
                const t = [];
                for (let i = 0; i < this.stuResult.length; i++)
                  t[i] = {
                    student_no: this.stuList[i].login_name,
                    info_result: JSON.stringify(this.stuResult[i].info_result),
                    sanitation_result_id: this.sanitation_result.id,
                  };
                this.$axiosAction("/api/teacher/sanitation/sanitation.api", {
                  action: "updateStudentResult",
                  sturst: t,
                })
                  .then((t) => {
                    t.data.code;
                  })
                  .catch((t) => {
                    this.$q.loading.hide();
                  });
              }
              (this.$q.loading.hide(),
                this.$router.push(
                  "/teacher/sanitation/detail?id=" +
                    this.sanitation_result.sanitation_id +
                    "&type=d",
                ));
            }
            this.$q.loading.hide();
          })
          .catch((t) => {
            this.$q.loading.hide();
          });
    },
    selectSuse() {
      ((this.editDialog = !0), this.queryRoomList());
    },
    queryRoomList() {
      if (
        ((this.roomList = []),
        this.record.building_no &&
          ((this.roomList = this.buildingRoomList.reduce(
            (t, i) =>
              i.building_no === this.record.building_no
                ? t.concat({ value: i.room_no, label: i.room_name, labelChange: i.roomlabel })
                : t,
            [],
          )),
          this.roomList.length <= 0 || this.roomList === []))
      )
        return this.$showErrorNotify("该楼寝室为空");
    },
    saveRecord() {
      const t = [];
      for (let i = 0; i < this.roomList.length; i++)
        (this.roomList[i].value === this.record.room_no &&
          ((this.room_name = this.roomList[i].labelChange),
          (this.sanitation_result.room_name = this.room_name)),
          t.push(this.roomList[i].value));
      if (-1 === t.indexOf(this.record.room_no)) return this.$showErrorNotify("该寝室不在该楼");
      ((this.editDialog = !1), (this.room_no = this.record.room_no), this.queryStudent());
    },
    queryStudent() {
      ((this.selectSuseDialog = !1),
        (this.sanitation_result.room_name = this.room_name),
        (this.sanitation_result.room_no = this.room_no),
        "请选择宿舍" !== this.sanitation_result.room_no &&
          ("n" === this.sanitationType
            ? this.$axiosAction("/api/teacher/sanitation/sanitation.api", {
                action: "queryDormitoryPeople",
                room_no: this.sanitation_result.room_no,
              })
                .then((t) => {
                  if (0 === t.data.code) {
                    this.stuList = t.data.result.list;
                    for (let i = 0; i < t.data.result.rowCount; i++)
                      (this.stuResult.push({ info_result: [], student_no: "" }),
                        (this.stuList[i].color = "grey-4"),
                        (this.stuList[i].textColor = "black"));
                  }
                })
                .catch((t) => {})
            : this.$axiosAction("/api/teacher/sanitation/sanitation.api", {
                action: "queryDormitoryPeopleUpdate",
                sanitation_result_id: this.sanitation_result.id,
              })
                .then((t) => {
                  if (0 === t.data.code) {
                    this.stuList = t.data.result.list;
                    const i = [],
                      e = t.data.result.list;
                    for (let t = 0; t < this.stuList.length; t++)
                      (this.stuResult.push({ info_result: [], student_no: "" }),
                        (this.stuResult[t].info_result = e[t].info_result),
                        (this.stuResult[t].student_no = e[t].student_no),
                        "[]" !== this.stuResult[t].info_result[0] &&
                        this.stuResult[t].info_result[0] !== [] &&
                        "" !== this.stuResult[t].info_result[0] &&
                        void 0 !== this.stuResult[t].info_result[0]
                          ? ((this.stuList[t].show_key = !0),
                            (this.stuList[t].color = "primary"),
                            (this.stuList[t].textColor = "white"))
                          : ((this.stuList[t].show_key = !1),
                            (this.stuList[t].color = "grey-4"),
                            (this.stuList[t].textColor = "black")),
                        i.push(this.stuList[t]));
                    this.stuList = i;
                  }
                })
                .catch((t) => {})));
    },
    inputStudentResult(t) {
      if (0 === this.stuInfoConf.length)
        return void this.$showErrorNotify("该任务没有学生检查项目");
      const i = [];
      for (let e = 0; e < this.stuList.length; e++)
        (this.stuList[e].login_name === t.login_name &&
          ((this.stuList[e].show_key = !t.show_key),
          !1 === this.stuList[e].show_key &&
            "d" !== this.sanitationType &&
            (this.stuResult[e].info_result = []),
          !1 === this.stuList[e].show_key
            ? ((this.stuList[e].color = "grey-4"), (this.stuList[e].textColor = "black"))
            : ((this.stuList[e].color = "primary"), (this.stuList[e].textColor = "white"))),
          i.push(this.stuList[e]));
      this.stuList = i;
    },
    deleteSanitationResult() {
      const t = window.localStorage.getItem("sanitation_result_detail"),
        i = JSON.parse(t);
      this.$q
        .dialog({
          title: "确认删除",
          message: "该寝室结果将被删除。</span>",
          html: !0,
          persistent: !0,
          cancel: { label: "取消", outline: !0, color: "grey" },
          ok: { label: "删除", unelevated: !0, color: "negative" },
        })
        .onOk(() => {
          this.$axiosAction("/api/teacher/sanitation/sanitation.api", {
            action: "deleteSanitationResult",
            id: i.id,
          })
            .then((t) => {
              0 === t.data.code &&
                this.$router.push(`/teacher/sanitation/detail?id=${this.sanitation_id}&type=d`);
            })
            .catch((t) => {});
        });
    },
  },
};
export default componentOptions;
