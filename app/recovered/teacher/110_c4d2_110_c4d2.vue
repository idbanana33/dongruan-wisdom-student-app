<!--
  Source: assets/www/js/110.js -> webpack module "c4d2"
  Route: /teacher/scanning/leaveVer
  Component: 110_c4d2
  Restoration: template decompiled from Vue render function; logic in sibling .logic.js
  Confidence: high for DOM structure / medium for expression quoting
-->
<template>
<q-layout view="lHh lpr lFf">
  <q-header class="bg-grey-3 text-black">
    <q-toolbar>
      <q-btn flat round dense icon="keyboard_arrow_left" @click='goBack' />
      <q-toolbar-title>
        请假信息核验
      </q-toolbar-title>
    </q-toolbar>
  </q-header>
  <q-page-container>
    <q-page class="bg-grey-3">
      <q-card class="full-width row" flat>
        <q-card-section class="full-width row justify-center" :class='"bg-" + details.color' style="height:65px">
          <div class="text-white" caption>
            <q-icon v-show="details.time_type == '3'" name="check" size="sm">
              <span style="font-size:25px">
                {{ details.leave_s }}
              </span>
            </q-icon>
            <span v-show="details.time_type == '1'" style="font-size:25px" size="sm">
              {{ details.leave_s }}
            </span>
            <q-icon v-show="details.time_type == '2'" name="×" size="sm">
              <span style="font-size:25px">
                {{ details.leave_s }}
              </span>
            </q-icon>
          </div>
        </q-card-section>
        <q-card-section class="full-width row justify-around">
          <div class="col-12">
            <span class="text-grey">
              请假时间：
            </span>
            <span>
              {{ details.leave_time }}
            </span>
          </div>
        </q-card-section>
      </q-card>
      <q-card class="full-width row q-mt-sm" flat>
        <q-card-section class="full-width row justify-around" avatar>
          <div class="col-12 q-mb-md text-left text-weight-bold">
            请假详情
          </div>
          <div class="col-12">
            <span class="text-grey">
              请假类型：
            </span>
            <span>
              {{ details.leave_type_name }}
            </span>
          </div>
          <div class="col-12 q-mt-sm">
            <span class="text-grey">
              需要离校：
            </span>
            <span v-show="details.walk_out == '是'" class="text-warning">
              {{ details.walk_out }}
            </span>
            <span v-show="details.walk_out == '否'">
              {{ details.walk_out }}
            </span>
          </div>
          <div class="col-12 q-mt-sm">
            <span class="text-grey">
              需要离市：
            </span>
            <span :class='1 === details.city_out ? "text-warning" : ""'>
              {{ 1 === details.city_out ? "是" : "否" }}
            </span>
          </div>
          <div class="col-12 q-mt-sm">
            <span class="text-grey">
              需要离省：
            </span>
            <span :class='1 === details.province_out ? "text-warning" : ""'>
              {{ 1 === details.province_out ? "是" : "否" }}
            </span>
          </div>
          <div class="col-12 q-mt-sm">
            <span class="text-grey">
              请假原因：
            </span>
            <span>
              {{ details.reason }}
            </span>
          </div>
          <div class="col-12 q-mt-sm">
            <span class="text-grey">
              发起时间：
            </span>
            <span>
              {{ details.create_time }}
            </span>
          </div>
          <div v-if="details.location" class="col-12 q-mt-sm">
            <span class="text-grey">
              发起位置：
            </span>
            <span>
              {{ details.location.address }}
            </span>
          </div>
        </q-card-section>
      </q-card>
      <q-card class="full-width row q-mt-sm" flat>
        <q-list class="full-width">
          <div class="row q-ml-md q-mt-md">
            <div class="col-12 text-left text-weight-bold">
              请假流程记录
            </div>
          </div>
          <q-item>
            <div v-if="0 == showReview" class="q-px-sm q-pb-xs">
              <q-timeline>
                <q-timeline-entry :subtitle='details.create_time' color="grey">
                  {{ "\n                " + details.name + " - 发起申请\n              " }}
                </q-timeline-entry>
                <q-timeline-entry v-for="(e, a) in details.review_list" :key='e.id' :subtitle='e.review_time' :color='"W" != details.review_status && details.review_list && a == details.review_list.length - 1 ? "A" == e.review_status ? "positive" : "red" : "grey"'>
                  {{ "\n                " + e.teacher_name + " - " + e.review_status_name + "\n                " }}
                  <p v-show="item.opinion != null" style="font-size:11px">
                    {{ "审批意见：" + e.opinion }}
                  </p>
                </q-timeline-entry>
              </q-timeline>
            </div>
            <div v-if="1 == showReview" class="q-px-sm q-pb-xs">
              <q-timeline>
                <q-timeline-entry :subtitle='create_time_short' color="grey">
                  {{ "\n                " + m_teacher_name + " - 发起申请\n              " }}
                </q-timeline-entry>
                <q-timeline-entry v-for="(e, a) in review_list" :key='e.id' :subtitle='e.review_time' :color='"W" != details.review_status && details.review_list && a == details.review_list.length - 1 ? "A" == e.review_status ? "positive" : "red" : "grey"'>
                  {{ "\n                " + e.teacher_name + " - " + e.review_status_name + "\n                " }}
                  <p v-show="item.opinion != null" style="font-size:11px">
                    {{ "审批意见：" + e.opinion }}
                  </p>
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
  name: "110_c4d2",
};
</script>
