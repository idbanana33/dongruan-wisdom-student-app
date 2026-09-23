<!--
  Source: assets/www/js/11.js -> webpack module "8456"
  Route: /maintainer/detail
  Component: repairDetail
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
          <div class="full-width q-mb-md text-left text-weight-bold">
            <span class="q-mr-sm" style="font-size:1.3em">
              报修信息
            </span>
            <q-chip square color="grey-4" text-color="black" size="sm">
              {{ "\n              " + details.statusinfo + "\n            " }}
            </q-chip>
          </div>
          <div class="full-width">
            <span class="text-grey neu-css-after-colon">
              姓名
            </span>
            <span>
              {{ details.name }}
            </span>
          </div>
          <div class="full-width q-mt-sm">
            <span class="text-grey neu-css-after-colon">
              学号
            </span>
            <span>
              {{ details.student_no }}
            </span>
          </div>
          <div class="full-width q-mt-sm">
            <span class="text-grey neu-css-after-colon">
              学院
            </span>
            <span>
              {{ details.dep_name }}
            </span>
          </div>
          <div class="full-width q-mt-sm">
            <span class="text-grey neu-css-after-colon">
              联系电话
            </span>
            <span>
              {{ details.mob }}
            </span>
          </div>
          <div class="full-width q-mt-sm">
            <span class="text-grey neu-css-after-colon">
              报修时间
            </span>
            <span>
              {{ details.repair_time }}
            </span>
          </div>
          <div class="full-width q-mt-sm">
            <span class="text-grey neu-css-after-colon">
              报修类型
            </span>
            <span>
              {{ details.repair_type_name }}
            </span>
          </div>
          <div class="full-width q-mt-sm">
            <span class="text-grey neu-css-after-colon">
              报修区域
            </span>
            <span>
              {{ details.repair_range_name }}
            </span>
          </div>
          <div class="full-width q-mt-sm">
            <span class="text-grey neu-css-after-colon">
              详细地点
            </span>
            <span>
              {{ details.address }}
            </span>
          </div>
          <div class="full-width q-mt-sm">
            <span class="text-grey neu-css-after-colon">
              故障类型
            </span>
            <span>
              {{ details.fault_type_name }}
            </span>
          </div>
          <div class="full-width q-mt-sm">
            <span class="text-grey neu-css-after-colon">
              故障描述
            </span>
            <span>
              {{ details.description }}
            </span>
          </div>
          <div class="full-width q-mt-sm">
            <span class="text-grey neu-css-after-colon">
              期望上门时间
            </span>
            <span>
              {{ details.visit_time }}
            </span>
          </div>
          <div v-if="details.attachment && 0 != details.attachment.length" class="col-12 q-mt-sm">
            <span class="text-grey neu-css-after-colon">
              故障附件
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
      <q-card v-if="'0' !== details.status && '6' !== details.status" class="full-width row q-mt-sm" flat>
        <q-card-section class="full-width row justify-around" avatar>
          <div class="full-width q-mb-md text-left text-weight-bold">
            <span class="q-mr-sm" style="font-size:1.3em">
              维修进度
            </span>
          </div>
          <div v-if="'1' == details.status" class="full-width">
            <span class="text-grey neu-css-after-colon">
              分配维修人员
            </span>
            <span>
              {{ details.maintainer_name }}
            </span>
          </div>
          <div v-if="'1' == details.status && null != details.opinion && details.opinion.length > 0" class="full-width">
            <span class="text-grey neu-css-after-colon">
              驳回时间
            </span>
            <span>
              {{ details.review_time }}
            </span>
          </div>
          <div v-if="'1' == details.status && null != details.opinion && details.opinion.length > 0" class="full-width">
            <span class="text-grey neu-css-after-colon">
              驳回原因
            </span>
            <span>
              {{ details.opinion }}
            </span>
          </div>
          <div v-if="'2' == details.status || '4' == details.status || '5' == details.status" class="full-width">
            <span class="text-grey neu-css-after-colon">
              维修人员
            </span>
            <span>
              {{ details.maintainer_name }}
            </span>
          </div>
          <div v-if="'3' == details.status" class="full-width q-mt-sm">
            <span class="text-grey neu-css-after-colon">
              原维修人员
            </span>
            <span>
              {{ details.maintainer_name }}
            </span>
          </div>
          <div v-if="'3' == details.status" class="full-width q-mt-sm">
            <span class="text-grey neu-css-after-colon">
              改派人员
            </span>
            <span>
              {{ details.new_maintainer_name }}
            </span>
          </div>
          <div v-if="'3' == details.status" class="full-width q-mt-sm">
            <span class="text-grey neu-css-after-colon">
              改派原因
            </span>
            <span>
              {{ details.reason }}
            </span>
          </div>
          <div v-if="'3' == details.status" class="full-width q-mt-sm">
            <span class="text-grey neu-css-after-colon">
              改派时间
            </span>
            <span>
              {{ details.alter_time }}
            </span>
          </div>
          <div v-if="'1' != details.status && '3' != details.status" class="full-width q-mt-sm">
            <span class="text-grey neu-css-after-colon">
              接单时间
            </span>
            <span>
              {{ details.order_receiving_time }}
            </span>
          </div>
          <div v-if="'4' == details.status || '5' == details.status" class="row full-width">
            <div class="full-width q-mt-sm">
              <span class="text-grey neu-css-after-colon">
                维修完成时间
              </span>
              <span>
                {{ details.completion_time }}
              </span>
            </div>
            <div class="full-width q-mt-sm">
              <span class="text-grey neu-css-after-colon">
                故障类型
              </span>
              <span>
                {{ details.fault_type_name }}
              </span>
            </div>
            <div class="full-width q-mt-sm">
              <span class="text-grey neu-css-after-colon">
                维修描述
              </span>
              <span>
                {{ details.repair_description }}
              </span>
            </div>
            <div v-if="details.repair_attachments && 0 != details.repair_attachments.length" class="col-12 q-mt-sm">
              <span class="text-grey neu-css-after-colon">
                维修附件
              </span>
              <div style="display:flex;overflow-x:auto;white-space:nowrap;width:100%">
                <div v-for="s in details.repair_attachments" :key='s.link' class="q-mt-sm" style="margin-right:10px">
                  <q-img v-if="'1' == s.type" style="height:150px;width:150px" :src='serverUrl + s.link' :ratio="1" />
                  <q-video v-if="'2' == s.type" style="height:150px;width:150px" :src='serverUrl + s.link' :ratio='16 / 9' />
                </div>
              </div>
            </div>
          </div>
          <div v-if="'5' == details.status" class="row full-width">
            <div class="full-width q-mt-sm">
              <span class="text-grey neu-css-after-colon">
                本次维修满意度星级评分
              </span>
              <p>
                <q-rating v-model="details.mark" readonly max="5" size="2.5em" />
                {{ "\n                " + details.mark + "星\n              " }}
              </p>
            </div>
            <div class="full-width q-mt-sm">
              <span class="text-grey neu-css-after-colon">
                意见反馈
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
    </q-page>
  </q-page-container>
</q-layout>
</template>

<script>
// The exact semantic component options are preserved in the sibling .logic.js file.
// This SFC isolates the original render tree for review and manual variable renaming.
export default {
  name: "repairDetail",
};
</script>
