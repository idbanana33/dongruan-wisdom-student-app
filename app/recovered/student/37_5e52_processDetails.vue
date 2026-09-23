<!--
  Source: assets/www/js/37.js -> webpack module "5e52"
  Route: /student/process/detail
  Component: processDetails
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
    </q-toolbar>
  </q-header>
  <q-page-container>
    <q-page class="bg-grey-3">
      <q-card class="full-width row" flat>
        <q-card-section class="full-width row justify-center text-white" :class='"bg-" + color' style="height:4rem;font-size:1.5rem">
          <q-icon v-show="record.review_status != 'W'" :name='"A" == record.review_status ? "done" : "clear"' size="2rem" />
          {{ "W" == record.review_status ? "审批中" : "A" == record.review_status ? "审批通过" : "审批驳回" + "\n        " }}
        </q-card-section>
        <q-card-section class="full-width row">
          <div class="text-left">
            <span class="text-grey">
              流程名称：
            </span>
            <span>
              {{ record.process_type_name }}
            </span>
          </div>
          <div class="col-12 q-mt-sm">
            <span class="text-grey">
              申请学生：
            </span>
            <span>
              {{ userinfo.name + "(" + userinfo.login_name + ")" }}
            </span>
            <q-btn class="absolute-top-right q-mr-mb q-mt-sm" style="color:red;z-index:100;margin-right:8px" outline size="sm" color="negative" label="撤回" @click='deleteProcess' />
          </div>
        </q-card-section>
      </q-card>
      <q-form @submit='saveProcess'>
        <q-card class="full-width row q-mt-sm" flat>
          <q-card-section class="full-width row justify-around" avatar>
            <div class="col-12 q-mb-md text-left text-weight-bold">
              流程详情
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
            <div v-for="(t, o) in record.info_config" :key='o' class="col-12">
              <neu-widget v-model="record.info_result[index]" style="margin-top:4px" :labelClass='"col-12 col-md-6 col-sm-9 text-left text-grey" + ($q.screen.lt.sm ? "text-right" : "")' controlClass="col-12 col-md-11 col-sm-9" :config='t' :viewMode='viewMode' />
            </div>
            <div v-show="deleteShow" class="col-12" style="margin-top:6px">
              <span class="text-grey">
                紧急联系号码：
              </span>
              <span>
                <q-input v-model="record.contact" outlined type="number" dense hide-bottom-space />
              </span>
            </div>
            <div v-show="!deleteShow && !(record.contact == '' || record.contact == null)" class="col-12" style="margin-top:4px">
              <span class="text-grey">
                紧急联系号码：
              </span>
              <span>
                {{ "" == record.contact ? "未填写" : record.contact }}
              </span>
            </div>
            <div v-else class="col-12" style="margin-top:4px">
              <span class="text-grey">
                申请位置：
              </span>
              <span>
                {{ "" == record.location ? "未填写" : record.location }}
              </span>
            </div>
            <div v-show="record.process_need_locate == 1 && deleteShow" class="col-12" style="margin-top:4px">
              {{ "\n            当前所在位置：" + location.address + "\n            " }}
              <neu-geo-location :needAddr='true' :location='research' @completed='locationCompleted' @error='locationError' />
            </div>
          </q-card-section>
        </q-card>
        <q-footer v-show="deleteShow" class="bg-white text-primary" style="height:2.8rem;margin-left:0px;border:0px" bordered>
          <q-btn style="width:100%;height:100%" color="primary" label="保存" type="submit" />
        </q-footer>
      </q-form>
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
                <q-timeline-entry v-if="'W' == record.review_status && nextTeacher.length > 0" subtitle="当前审核教师" color="warning">
                  <span v-for="(t, o) in nextTeacher.slice(0, 3)" :key='t.teacher_no'>
                    {{ t.name }}
                    <span v-if="o != nextTeacher.length - 1 && 2 != o && nextTeacher.length > 1">
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
    </q-page>
  </q-page-container>
</q-layout>
</template>

<script>
// The exact semantic component options are preserved in the sibling .logic.js file.
// This SFC isolates the original render tree for review and manual variable renaming.
export default {
  name: "processDetails",
};
</script>
