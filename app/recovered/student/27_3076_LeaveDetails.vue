<!--
  Source: assets/www/js/27.js -> webpack module "3076"
  Route: /student/leave/detail
  Component: LeaveDetails
  Restoration: template decompiled from Vue render function; logic in sibling .logic.js
  Confidence: high for DOM structure / medium for expression quoting
-->
<template>
<q-layout view="lHh lpr lFf">
  <q-header class="bg-grey-3 text-black">
    <q-toolbar>
      <q-btn flat round dense icon="keyboard_arrow_left" @click='goBack' />
      <q-toolbar-title>
        请假信息
      </q-toolbar-title>
      <q-btn v-show="reviewNum === 0 && details.review_name === '审批中'" flat round dense icon="delete" @click='deleteLeave' />
    </q-toolbar>
  </q-header>
  <q-page-container>
    <q-page class="bg-grey-3">
      <q-card class="full-width row" flat>
        <q-card-section class="full-width text-center text-white" :class='"bg-" + details.color'>
          <div v-if="1 == needReport" class="row items-center justify-center">
            <q-icon v-show="details.review_name != '审批中'" :name='"审批通过" == details.review_name ? "done" : "clear"' size="0.9rem" />
            <span style="font-size:0.9rem">
              {{ details.review_name }}
            </span>
          </div>
          <div v-if="0 == needReport" class="row items-center justify-center">
            <q-icon v-show="details.review_name != '审批中'" :name='"审批通过" == details.review_name ? "done" : "clear"' size="2rem" />
            <span style="font-size:1.5rem">
              {{ details.review_name }}
            </span>
          </div>
          <div v-if="1 == needReport" class="row items-center justify-center">
            <span style="font-size:1.5rem">
              {{ details.report_status_name }}
            </span>
            <span v-if="'已销假' == details.report_status_name" style="font-size:1rem">
              {{ "(" + details.report_time + ")" }}
            </span>
          </div>
        </q-card-section>
        <q-card-section class="full-width row justify-around">
          <div class="col-6">
            <span class="text-grey">
              请假类型：
            </span>
            <span>
              {{ details.leave_type_name }}
            </span>
          </div>
          <div class="col-6">
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
          <div class="col-6">
            <span class="text-grey">
              需要出市：
            </span>
            <span :class='1 == details.city_out ? "text-warning" : ""'>
              {{ 1 == details.city_out ? "是" : "否" }}
            </span>
          </div>
          <div class="col-6">
            <span class="text-grey">
              需要出省：
            </span>
            <span :class='1 == details.province_out ? "text-warning" : ""'>
              {{ 1 == details.province_out ? "是" : "否" }}
            </span>
          </div>
          <div class="col-12">
            <span class="text-grey">
              请假学生：
            </span>
            <span>
              {{ userInfo.name + "(" + userInfo.login_name + ")" }}
            </span>
          </div>
          <div v-if="details.leave_multi_id" class="col-12">
            <span class="text-grey">
              批量请假教师：
            </span>
            <span>
              {{ m_teacher_name }}
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
              请假时间：
            </span>
            <span>
              {{ details.leave_time }}
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
          <div class="col-12 q-mt-sm">
            <span class="text-grey">
              请假原因：
            </span>
            <span>
              {{ details.reason }}
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
          <div v-if="details.attachment && 0 != details.attachment.length" class="col-12 q-mt-sm">
            <span class="text-grey">
              附件：
            </span>
            <div v-for="t in details.attachment" :key='t.link' class="q-mt-sm">
              <q-img style="height:200px;max-width:200px" :src='serverUrl + t.link' :ratio="1" @click='showBig(t.link, t.srcname)' />
            </div>
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
                <q-timeline-entry v-for="(t, a) in details.review_list" :key='t.id' :subtitle='t.review_time' :color='"W" != details.review_status && details.review_list && a == details.review_list.length - 1 ? "A" == t.review_status ? "positive" : "red" : "grey"'>
                  {{ "\n                " + t.teacher_name + " - " + t.review_status_name + "\n                " }}
                  <p v-show="item.opinion != null" style="font-size:11px">
                    {{ "审批意见：" + t.opinion }}
                  </p>
                </q-timeline-entry>
                <q-timeline-entry v-if="'W' == details.review_status && nextTeacher.length > 0" subtitle="当前审核教师" color="warning">
                  <span v-for="(t, a) in nextTeacher.slice(0, 3)" :key='t.teacher_no'>
                    {{ t.name }}
                    <span v-if="a != nextTeacher.length - 1 && 2 != a && nextTeacher.length > 1">
                      ,
                    </span>
                  </span>
                  <span v-if="nextTeacher.length > 3">
                    {{ "等" + nextTeacher.length + "人审核中" }}
                  </span>
                </q-timeline-entry>
                <q-timeline-entry v-if="details.report_time" :subtitle='details.report_time' color="grey">
                  {{ "\n                " + details.name + " - 销假成功\n                " }}
                  <div class="row full-width">
                    <q-img v-for="t in details.report_attachment" :key='t.link' class="q-mx-sm q-my-sm" style="cursor:pointer;height:auto;width:40%" :src='serverUrl + t.link' :ratio="1" @click='showBig(t.link, t.srcname)' />
                  </div>
                </q-timeline-entry>
              </q-timeline>
            </div>
            <div v-if="1 == showReview" class="q-px-sm q-pb-xs">
              <q-timeline>
                <q-timeline-entry :subtitle='create_time_short' color="grey">
                  {{ "\n                " + m_teacher_name + " - 发起申请\n              " }}
                </q-timeline-entry>
                <q-timeline-entry v-for="(t, a) in review_list" :key='t.id' :subtitle='t.review_time' :color='"W" != details.review_status && details.review_list && a == details.review_list.length - 1 ? "A" == t.review_status ? "positive" : "red" : "grey"'>
                  {{ "\n                " + t.teacher_name + " - " + t.review_status_name + "\n                " }}
                  <p v-show="item.opinion != null" style="font-size:11px">
                    {{ "审批意见：" + t.opinion }}
                  </p>
                </q-timeline-entry>
                <q-timeline-entry v-if="details.report_time" :subtitle='details.report_time' color="grey">
                  {{ "\n                " + details.name + " - 销假成功\n                " }}
                  <div class="row full-width">
                    <q-img v-for="t in details.report_attachment" :key='t.link' class="q-mx-sm q-my-sm" style="cursor:pointer;height:auto;width:40%" :src='serverUrl + t.link' :ratio="1" @click='showBig(t.link, t.srcname)' />
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
  <q-dialog v-model="qrShowingDialog">
    <q-card class="full-width" flat>
      <q-card-section class="row items-center justify-between">
        <div class="text-h6">
          二维码展示
        </div>
        <q-btn v-close-popup icon="close" flat round dense size="sm" @click='clearScan' />
      </q-card-section>
      <q-separator />
      <q-card-section class="text-center">
        <vue-qr class="q-mb-xl" :text='downloadData.text' :margin="0" colorDark="#3B3B3B" colorLight="#fff" :logoScale="0.3" :size="250" />
      </q-card-section>
    </q-card>
  </q-dialog>
  <neu-full-screen-image v-model="showBigPic" :url='bigPicUrl' :name='bigPicName' />
  <q-footer v-show="details.review_status == 'A'" class="bg-white text-primary" style="height:55px" bordered>
    <div class="row justify-between">
      <q-btn v-else style="width:60%;height:55px" @click='showQrCode'>
        <span style="font-size:16px">
          请假信息二维码
        </span>
      </q-btn>
      <q-btn v-if="0 == needReport || details.report_time" style="width:100%;height:55px" @click='showQrCode'>
        <span style="font-size:16px">
          请假信息二维码
        </span>
      </q-btn>
      <q-btn v-else class="bg-primary" style="width:40%;height:55px" flat unelevated color="white" label="销假" @click='goReport()' />
    </div>
  </q-footer>
</q-layout>
</template>

<script>
// The exact semantic component options are preserved in the sibling .logic.js file.
// This SFC isolates the original render tree for review and manual variable renaming.
export default {
  name: "LeaveDetails",
};
</script>
