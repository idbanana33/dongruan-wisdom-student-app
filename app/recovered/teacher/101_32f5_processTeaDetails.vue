<!--
  Source: assets/www/js/101.js -> webpack module "32f5"
  Route: /teacher/process/detail
  Component: processTeaDetails
  Restoration: template decompiled from Vue render function; logic in sibling .logic.js
  Confidence: high for DOM structure / medium for expression quoting
-->
<template>
<q-layout view="lHh lpr lFf">
  <q-header class="bg-grey-3 text-black">
    <q-toolbar>
      <q-btn flat round dense icon="keyboard_arrow_left" @click='goBack' />
      <q-toolbar-title>
        {{ menuInfo.title + "申请详情" }}
      </q-toolbar-title>
      <q-btn v-if="'A' == userinfo.role_id && 'A' == record.review_status || besureMastTeacher === userinfo.login_name && 'A' == record.review_status" class="q-mr-sm" flat round dense icon="clear" color="negative" @click='RefuseProcess' />
    </q-toolbar>
  </q-header>
  <q-page-container>
    <q-page v-if="menuInfo" class="bg-grey-3">
      <q-card class="full-width row" flat>
        <q-card-section class="full-width row justify-center text-white" :class='"bg-" + color' style="height:4rem;font-size:1.5rem">
          <q-icon v-show="record.review_status != 'W'" :name='"A" == record.review_status ? "done" : "clear"' size="2rem" />
          {{ "W" == record.review_status ? "审批中" : "A" == record.review_status ? "审批通过" : "审批驳回" + "\n        " }}
        </q-card-section>
        <q-card-section class="full-width row justify-around" avatar>
          <div class="col-12 q-mb-md text-left text-weight-bold">
            学生信息
          </div>
          <div class="col-6">
            <span class="text-grey">
              姓名：
            </span>
            <span class="text-bold">
              {{ record.name }}
            </span>
          </div>
          <div class="col-6">
            <span class="text-grey">
              性别：
            </span>
            <span class="text-bold">
              {{ "1" == record.sex ? "男" : "女" }}
            </span>
          </div>
          <div class="col-12 q-mt-sm">
            <span class="text-grey">
              学号：
            </span>
            <span>
              {{ record.student_no }}
            </span>
          </div>
          <div class="col-12 q-mt-sm">
            <span class="text-grey">
              学生手机号码：
            </span>
            <span>
              {{ record.mob }}
            </span>
          </div>
          <div class="col-12 q-mt-sm">
            <span class="text-grey">
              院系：
            </span>
            <span>
              {{ record.grade_name + "/" + record.dep_name + "/" + record.major_name + "/" + record.class_name }}
            </span>
          </div>
        </q-card-section>
      </q-card>
      <q-card class="full-width row q-mt-sm" flat>
        <q-card-section class="full-width row justify-around" avatar>
          <div class="col-12 q-mb-md text-left text-weight-bold">
            流程详情
          </div>
          <div class="col-12">
            <span class="text-grey">
              流程名称：
            </span>
            <span>
              {{ record.process_type_name }}
            </span>
          </div>
          <div class="col-12">
            <span class="text-grey">
              申请时间：
            </span>
            <span>
              {{ record.create_time }}
            </span>
          </div>
          <div v-if="1 == record.into_campus" class="col-12">
            <span class="text-grey">
              入校申请时间段：
            </span>
            <span>
              {{ record.timeslotintoapply }}
            </span>
          </div>
          <div v-if="1 == record.into_campus" class="col-12">
            <span class="text-grey">
              入校核验时间段：
            </span>
            <span>
              {{ record.timeslotintobegin }}
            </span>
          </div>
          <div v-if="1 == record.out_campus" class="col-12">
            <span class="text-grey">
              离校申请时间段：
            </span>
            <span>
              {{ record.timeslotoutapply }}
            </span>
          </div>
          <div v-if="1 == record.out_campus" class="col-12">
            <span class="text-grey">
              离校核验时间段：
            </span>
            <span>
              {{ record.timeslotoutbegin }}
            </span>
          </div>
          <div v-for="(t, i) in record.info_config" :key='i' class="col-12" style="margin-top:4px">
            <neu-widget v-model="record.info_result[index]" :labelClass='"col-12 col-md-6 col-sm-9 text-left text-grey" + ($q.screen.lt.sm ? "text-right" : "")' controlClass="col-12 col-md-11 col-sm-9" :config='t' :viewMode='viewMode' />
          </div>
          <div v-if="1 == record.process_need_locate && '' != record.location && null != record.location" class="col-12" style="margin-top:4px">
            <span class="text-grey">
              申请位置：
            </span>
            <span>
              {{ "" == record.location ? "未填写" : record.location }}
            </span>
          </div>
          <div v-if="'' != record.contact && null != record.contact" class="col-12" style="margin-top:4px">
            <span class="text-grey">
              紧急联系号码：
            </span>
            <span>
              {{ "" == record.contact ? "未填写" : record.contact }}
            </span>
          </div>
        </q-card-section>
      </q-card>
      <q-card class="full-width row q-mt-sm" flat>
        <q-list class="full-width">
          <div class="row q-ml-md q-mt-md">
            <div class="col-12 text-left text-weight-bold">
              流程记录
            </div>
          </div>
          <q-item>
            <div class="q-px-sm q-pb-xs">
              <q-timeline>
                <q-timeline-entry :subtitle='record.create_time' color="grey">
                  {{ "\n                " + record.name + " - 发起申请\n              " }}
                </q-timeline-entry>
                <q-timeline-entry v-for="t in review_list" :key='t.id' :subtitle='t.review_time' :color='"A" == t.review_status ? "positive" : "red"'>
                  {{ "\n                " + t.name + " - " + t.review_status_name + "\n                " }}
                  <p v-show="item.process_opinion != null" style="font-size:11px">
                    {{ "审批意见：" + t.process_opinion }}
                  </p>
                </q-timeline-entry>
                <q-timeline-entry v-if="record.teacher_no == userinfo.login_name && 'W' == record.tea_review_status && 'W' == record.review_status || theNextTeacher && 'W' == record.review_status" subtitle="现在" color="warning" icon="edit">
                  <div class="neu-css-after-colon">
                    审批意见
                  </div>
                  <q-input v-model="opinion" class="q-mb-sm" outlined dense type="textarea" />
                  <div class="q-gutter-sm row">
                    <q-btn unelevated color="positive" label="通过" @click='Operation("A")' />
                    <q-btn unelevated color="red" label="驳回" @click='Operation("R")' />
                  </div>
                </q-timeline-entry>
                <q-timeline-entry v-if="'reviewing' != tab && 'W' == record.review_status && nextTeacher.length > 0 && !theNextTeacher" subtitle="当前审核教师" color="warning">
                  <span v-for="(t, i) in nextTeacher.slice(0, 3)" :key='t.teacher_no'>
                    {{ t.name }}
                    <span v-if="i != nextTeacher.length - 1 && 2 != i && nextTeacher.length > 1">
                      ,
                    </span>
                  </span>
                  <span v-if="nextTeacher.length > 3">
                    {{ "等" + nextTeacher.length + "人审核中" }}
                  </span>
                </q-timeline-entry>
              </q-timeline>
            </div>
          </q-item>
          <q-separator />
        </q-list>
      </q-card>
      <q-dialog v-model="writeOpinion">
        <q-card style="width:700px;max-width:80vw">
          <q-card-section>
            <div class="text-h6">
              审批意见
            </div>
          </q-card-section>
          <q-card-section class="q-pt-none">
            <q-input v-model="opinion" dense autofocus />
          </q-card-section>
          <q-card-actions class="text-primary" align="right">
            <q-btn v-close-popup flat label="取消" />
            <q-btn v-close-popup flat label="确认" @click='Operations()' />
          </q-card-actions>
        </q-card>
      </q-dialog>
    </q-page>
    <q-page v-else v-else>
      <div v-else class="text-h6 text-bold q-mb-md row justify-center full-width">
        您没有当前页面访问权限
      </div>
    </q-page>
  </q-page-container>
</q-layout>
</template>

<script>
// The exact semantic component options are preserved in the sibling .logic.js file.
// This SFC isolates the original render tree for review and manual variable renaming.
export default {
  name: "processTeaDetails",
};
</script>
