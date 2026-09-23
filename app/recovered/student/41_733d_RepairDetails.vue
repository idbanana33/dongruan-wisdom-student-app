<!--
  Source: assets/www/js/41.js -> webpack module "733d"
  Route: /student/repair/detail
  Component: RepairDetails
  Restoration: template decompiled from Vue render function; logic in sibling .logic.js
  Confidence: high for DOM structure / medium for expression quoting
-->
<template>
<q-layout view="lHh lpr lFf">
  <q-header class="bg-grey-3 text-black">
    <q-toolbar>
      <q-btn flat round dense icon="keyboard_arrow_left" @click='goBack' />
      <q-toolbar-title>
        报修详情
      </q-toolbar-title>
    </q-toolbar>
  </q-header>
  <q-page-container>
    <q-page class="bg-grey-3">
      <q-card class="full-width row q-mt-sm" flat>
        <q-card-section class="full-width row justify-around" avatar>
          <div class="col-12 q-mb-md text-left text-weight-bold">
            报修信息
            <q-chip square color="grey-4" text-color="black" size="sm">
              {{ "\n              " + details.statusinfo + "\n            " }}
            </q-chip>
          </div>
          <div class="col-12">
            <span class="text-grey">
              姓名：
            </span>
            <span>
              {{ details.name }}
            </span>
          </div>
          <div class="col-12 q-mt-sm">
            <span class="text-grey">
              学号：
            </span>
            <span>
              {{ details.student_no }}
            </span>
          </div>
          <div class="col-12 q-mt-sm">
            <span class="text-grey">
              学院：
            </span>
            <span>
              {{ details.dep_name }}
            </span>
          </div>
          <div class="col-12 q-mt-sm">
            <span class="text-grey">
              联系电话：
            </span>
            <span>
              {{ details.mob }}
            </span>
          </div>
          <div class="col-12 q-mt-sm">
            <span class="text-grey">
              报修时间：
            </span>
            <span>
              {{ details.repair_time }}
            </span>
          </div>
          <div class="col-12 q-mt-sm">
            <span class="text-grey">
              报修类型：
            </span>
            <span>
              {{ details.repair_type_name }}
            </span>
          </div>
          <div class="col-12 q-mt-sm">
            <span class="text-grey">
              报修区域：
            </span>
            <span>
              {{ details.repair_range_name }}
            </span>
          </div>
          <div class="col-12 q-mt-sm">
            <span class="text-grey">
              详细地点：
            </span>
            <span>
              {{ details.address }}
            </span>
          </div>
          <div class="col-12 q-mt-sm">
            <span class="text-grey">
              故障类型：
            </span>
            <span>
              {{ details.fault_type_name }}
            </span>
          </div>
          <div class="col-12 q-mt-sm">
            <span class="text-grey">
              故障描述：
            </span>
            <span>
              {{ details.description }}
            </span>
          </div>
          <div class="col-12 q-mt-sm">
            <span class="text-grey">
              期望上门时间：
            </span>
            <span>
              {{ details.visit_time }}
            </span>
          </div>
          <div v-if="details.attachment && 0 != details.attachment.length" class="col-12 q-mt-sm">
            <span class="text-grey">
              故障附件：
            </span>
            <div style="display:flex;overflow-x:auto;white-space:nowrap;width:100%">
              <div v-for="s in details.attachment" :key='s.link' class="q-mt-sm" style="margin-right:10px">
                <q-img v-if="'1' == s.type" style="height:150px;width:150px" :src='serverUrl + s.link' :ratio="1" />
                <q-video v-if="'2' == s.type" style="height:150px;width:150px" :src='serverUrl + s.link' :ratio='16 / 9' />
              </div>
            </div>
          </div>
        </q-card-section>
      </q-card>
      <q-card v-if="'0' !== details.status && '3' !== details.status && '6' !== details.status" class="full-width row q-mt-sm" flat>
        <q-card-section class="full-width row justify-around" avatar>
          <div class="col-12 q-mb-md text-left text-weight-bold">
            维修进度
          </div>
          <div class="col-12">
            <span v-if="'1' == details.status" class="text-grey">
              分配维修人员：
            </span>
            <span v-else class="text-grey">
              维修人员：
            </span>
            <span>
              {{ details.maintainer_name }}
            </span>
            <span class="text-blue" style="font-size:11px;margin-left:5%" @click='goMaintainerInfo(details.maintainer_no)'>
              个人主页
            </span>
          </div>
          <div v-if="'1' != details.status" class="col-12 q-mt-sm">
            <span class="text-grey">
              接单时间：
            </span>
            <span>
              {{ details.order_receiving_time }}
            </span>
          </div>
          <div v-if="'4' == details.status || '5' == details.status" class="row col-12">
            <div class="col-12 q-mt-sm">
              <span class="text-grey">
                维修完成时间：
              </span>
              <span>
                {{ details.completion_time }}
              </span>
            </div>
            <div class="col-12 q-mt-sm">
              <span class="text-grey">
                故障类型：
              </span>
              <span>
                {{ details.fault_type_name }}
              </span>
            </div>
            <div class="col-12 q-mt-sm">
              <span class="text-grey">
                维修描述：
              </span>
              <span>
                {{ details.repair_description }}
              </span>
            </div>
            <div v-if="details.repair_attachments && 0 != details.repair_attachments.length" class="col-12 q-mt-sm">
              <span class="text-grey">
                维修附件：
              </span>
              <div style="display:flex;overflow-x:auto;white-space:nowrap;width:100%">
                <div v-for="s in details.repair_attachments" :key='s.link' class="q-mt-sm" style="margin-right:10px">
                  <q-img v-if="'1' == s.type" style="height:150px;width:150px" :src='serverUrl + s.link' :ratio="1" />
                  <q-video v-if="'2' == s.type" style="height:150px;width:150px" :src='serverUrl + s.link' :ratio='16 / 9' />
                </div>
              </div>
            </div>
          </div>
          <div v-if="'5' == details.status" class="row col-12">
            <div class="col-12 q-mt-sm">
              <span class="text-grey">
                本次维修满意度星级评分：
              </span>
              <p>
                <q-rating v-model="details.mark" readonly max="5" size="2.5em" />
                {{ "\n                " + details.mark + "星\n              " }}
              </p>
            </div>
            <div class="col-12 q-mt-sm">
              <span class="text-grey">
                意见反馈：
              </span>
              <p>
                <span>
                  {{ details.evaluate }}
                </span>
              </p>
            </div>
          </div>
        </q-card-section>
      </q-card>
      <q-card v-if="'3' == details.status" class="full-width row q-mt-sm" flat>
        <q-card-section class="full-width row justify-around" avatar>
          <div class="col-12 q-mb-md text-left text-weight-bold">
            维修进度
          </div>
          <div class="col-12">
            <span class="text-grey">
              原维修人员：
            </span>
            <span>
              {{ details.original_maintainer_name }}
            </span>
            <span class="text-blue" style="font-size:11px;margin-left:5%" @click='goMaintainerInfo(details.original_maintainer_no)'>
              个人主页
            </span>
          </div>
          <div class="col-12 q-mt-sm">
            <span class="text-grey">
              改派人员：
            </span>
            <span>
              {{ details.new_maintainer_name }}
            </span>
            <span class="text-blue" style="font-size:11px;margin-left:5%" @click='goMaintainerInfo(details.new_maintainer_no)'>
              个人主页
            </span>
          </div>
          <div class="col-12 q-mt-sm">
            <span class="text-grey">
              改派原因：
            </span>
            <span>
              {{ details.reason }}
            </span>
          </div>
          <div class="col-12 q-mt-sm">
            <span class="text-grey">
              改派时间：
            </span>
            <span>
              {{ details.alter_time }}
            </span>
          </div>
        </q-card-section>
      </q-card>
      <q-card v-if="'6' == details.status" class="full-width row q-mt-sm" flat>
        <q-card-section class="full-width row justify-around" avatar>
          <div class="col-12 q-mb-md text-left text-weight-bold">
            维修进度
          </div>
          <div class="col-12">
            <span class="text-grey">
              退回原因：
            </span>
            <span>
              {{ details.opinion }}
            </span>
          </div>
          <div class="col-12 q-mt-sm">
            <span class="text-grey">
              退回时间：
            </span>
            <span>
              {{ details.review_time }}
            </span>
          </div>
        </q-card-section>
      </q-card>
      <q-footer v-if="'4' == details.status" class="bg-white text-primary" bordered>
        <div class="row justify-center">
          <q-btn class="bg-primary" style="width:100%;height:2.8rem" flat unelevated color="white" label="评价" @click='goEvaluate' />
        </div>
      </q-footer>
    </q-page>
  </q-page-container>
</q-layout>
</template>

<script>
// The exact semantic component options are preserved in the sibling .logic.js file.
// This SFC isolates the original render tree for review and manual variable renaming.
export default {
  name: "RepairDetails",
};
</script>
