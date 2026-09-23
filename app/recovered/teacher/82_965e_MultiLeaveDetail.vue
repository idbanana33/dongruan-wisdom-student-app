<!--
  Source: assets/www/js/82.js -> webpack module "965e"
  Route: /teacher/leave/multidetail
  Component: MultiLeaveDetail
  Restoration: template decompiled from Vue render function; logic in sibling .logic.js
  Confidence: high for DOM structure / medium for expression quoting
-->
<template>
<q-layout view="lHh lpr lFf">
  <q-header class="bg-grey-3 text-black">
    <q-toolbar>
      <q-btn flat round dense icon="keyboard_arrow_left" @click='goBack' />
      <q-toolbar-title>
        批量请假详情
      </q-toolbar-title>
      <q-btn v-show="menuInfo && menuInfo.edit_permit && tab == 'leave'" flat round dense icon="delete" @click='deleteMultiLeave' />
    </q-toolbar>
  </q-header>
  <q-page-container>
    <q-page class="bg-grey-3">
      <div v-if="1 == pageType && menuInfo">
        <q-card style="height:100px;align-items:center;display:flex;justify-content:center" flat>
          该请假信息已被撤回！
        </q-card>
      </div>
      <div v-else>
        <q-card style="height:100px;align-items:center;display:flex;justify-content:center" flat>
          您无权限查看此详情！
        </q-card>
      </div>
      <q-card v-if="0 == pageType && menuInfo" class="full-width row q-mt-sm" flat>
        <q-card-section class="full-width row justify-around" avatar>
          <div class="col-6 q-mb-md text-left text-weight-bold">
            教师信息
          </div>
          <div class="col-6 q-mb-md text-right text-weight-bold">
            <span v-if="'review' == tab" class="text-primary cursor-pointer" @click='getStudentHistory(record.teacher_no, record.name)'>
              查看历史请假
            </span>
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
              {{ record.sex_name }}
            </span>
          </div>
          <div class="col-6 q-mt-sm">
            <span class="text-grey">
              教工号：
            </span>
            <span>
              {{ record.teacher_no }}
            </span>
          </div>
          <div class="col-6 q-mt-sm">
            <span class="text-grey">
              请假次数：
            </span>
            <span>
              {{ record.leave_history_count }}
            </span>
          </div>
        </q-card-section>
      </q-card>
      <q-card v-if="0 == pageType" class="full-width row q-mt-sm" flat>
        <q-card-section class="full-width row justify-around" avatar>
          <div class="col-12 q-mb-md text-left text-weight-bold">
            请假详情
          </div>
          <div class="col-12">
            <span class="text-grey">
              请假时间：
            </span>
            <span>
              {{ record.leave_period }}
            </span>
          </div>
          <div class="col-12 q-mt-sm">
            <span class="text-grey">
              发起时间：
            </span>
            <span>
              {{ record.create_time }}
            </span>
          </div>
          <div class="col-12 q-mt-sm">
            <span class="text-grey">
              请假类型：
            </span>
            <span>
              {{ record.leave_type_name }}
            </span>
          </div>
          <div class="col-12 q-mt-sm">
            <span class="text-grey">
              是否离校：
            </span>
            <span>
              {{ record.walk_outs }}
            </span>
          </div>
          <div class="col-12 q-mt-sm">
            <span class="text-grey">
              是否出市：
            </span>
            <span>
              {{ 1 == record.city_out ? "是" : "否" }}
            </span>
          </div>
          <div class="col-12 q-mt-sm">
            <span class="text-grey">
              是否出省：
            </span>
            <span>
              {{ 1 == record.province_out ? "是" : "否" }}
            </span>
          </div>
          <div class="col-12 q-mt-sm">
            <span class="text-grey">
              审批状态：
            </span>
            <q-chip v-show="record.review_status == 'A'" class="text-positive" dense>
              <q-avatar icon="check" color="positive" text-color="white" />
              {{ "\n              " + record.review_status_name }}
              <span v-show="record.auto_passed == 1">
                (无需审批)
              </span>
            </q-chip>
            <q-chip v-show="record.review_status == 'R'" class="text-red" dense>
              <q-avatar icon="clear" color="red" text-color="white" />
              {{ "\n              " + record.review_status_name + "\n            " }}
            </q-chip>
            <span v-show="record.review_status == 'W'">
              {{ record.review_status_name }}
            </span>
          </div>
          <div class="col-12 q-mt-sm">
            <span class="text-grey">
              请假原因：
            </span>
            <span>
              {{ record.reason }}
            </span>
          </div>
          <div class="col-12 q-mt-sm">
            <span class="text-grey">
              学生数量：
            </span>
            <span class="text-primary cursor-pointer" @click='showStudent()'>
              {{ record.student_num }}
            </span>
          </div>
          <div class="col-12 q-mt-sm">
            <span class="text-grey">
              发起位置：
            </span>
            <span>
              {{ record.location }}
            </span>
          </div>
          <div v-show="record.attachment && record.attachment.length != 0" class="col-12 q-mt-sm">
            <span class="text-grey">
              附件：
            </span>
            <div v-for="t in record.attachment" :key='t' class="q-mt-sm">
              <q-img style="height:200px;max-width:200px" :src='serverUrl + t.link' :ratio="1" @click='showBig(t.link, t.srcname)' />
            </div>
          </div>
        </q-card-section>
      </q-card>
      <q-card v-if="0 == pageType" class="full-width row q-mt-sm" flat>
        <q-list class="full-width">
          <div class="row q-ml-md q-mt-md">
            <div class="col-12 text-left text-weight-bold">
              审批流程
            </div>
          </div>
          <q-item>
            <div class="q-px-sm q-pb-xs">
              <q-timeline>
                <q-timeline-entry :subtitle='record.create_time_short' color="grey">
                  {{ "\n                " + record.name + " - 发起申请\n              " }}
                </q-timeline-entry>
                <q-timeline-entry v-for="(t, s) in record.review_list" :key='t.id' :subtitle='t.review_time' :color='"W" != record.review_status && record.review_list && s == record.review_list.length - 1 ? "A" == t.review_status ? "positive" : "red" : "grey"'>
                  {{ "\n                " + t.teacher_name + " - " + t.review_status_name + "\n                " }}
                  <p v-show="item.opinion != null" style="font-size:11px">
                    {{ "审批意见：" + t.opinion }}
                  </p>
                </q-timeline-entry>
                <q-timeline-entry v-if="'W' != r_status && nextTeacher.length > 0" subtitle="当前审核教师" color="warning">
                  <span v-for="(t, s) in nextTeacher.slice(0, 3)" :key='t.teacher_no'>
                    {{ t.name }}
                    <span v-if="s != nextTeacher.length - 1 && 2 != s && nextTeacher.length > 1">
                      ,
                    </span>
                  </span>
                  <span v-if="nextTeacher.length > 3">
                    {{ "等" + nextTeacher.length + "人审核中" }}
                  </span>
                </q-timeline-entry>
                <q-timeline-entry v-if="'review' == tab && 'W' == r_status" subtitle="现在" color="warning" icon="check">
                  <div class="neu-css-after-colon">
                    审批意见
                  </div>
                  <q-input v-model="opition" class="q-mb-sm" outlined dense type="textarea" />
                  <div class="q-gutter-sm row">
                    <q-btn unelevated color="positive" label="通过" @click='Operation(1)' />
                    <q-btn unelevated color="red" label="驳回" @click='Operation(2)' />
                  </div>
                </q-timeline-entry>
              </q-timeline>
            </div>
          </q-item>
          <q-separator />
        </q-list>
      </q-card>
    </q-page>
  </q-page-container>
  <neu-full-screen-image v-model="showBigPic" :url='bigPicUrl' :name='bigPicName' />
</q-layout>
</template>

<script>
// The exact semantic component options are preserved in the sibling .logic.js file.
// This SFC isolates the original render tree for review and manual variable renaming.
export default {
  name: "MultiLeaveDetail",
};
</script>
