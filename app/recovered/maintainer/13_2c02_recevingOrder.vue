<!--
  Source: assets/www/js/13.js -> webpack module "2c02"
  Route: /maintainer/receivingOrder
  Component: recevingOrder
  Restoration: template decompiled from Vue render function; logic in sibling .logic.js
  Confidence: high for DOM structure / medium for expression quoting
-->
<template>
<q-layout view="lHh lpr lFf">
  <q-header class="bg-grey-3 text-black">
    <q-toolbar>
      <q-btn flat round dense icon="keyboard_arrow_left" @click='goBack' />
      <q-toolbar-title>
        接单
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
              <div v-for="a in details.attachment" :key='a.link' class="q-mt-sm" style="margin-right:10px">
                <q-img v-if="'1' == a.type" style="height:150px;width:150px" :src='serverUrl + a.link' :ratio="1" />
                <q-video v-if="'2' == a.type" style="height:150px;width:150px" :src='serverUrl + a.link' :ratio='16 / 9' />
              </div>
            </div>
          </div>
        </q-card-section>
      </q-card>
      <q-page-sticky position="bottom-right" :offset='fabPos'>
        <q-btn v-touch-pan.prevent.mouse.prevent.mouse="moveFab" round color="primary" icon="domain_verification" @click='onClick' />
      </q-page-sticky>
      <q-dialog v-model="acceptOrderDialog" persistent>
        <q-card class="full-width" flat>
          <q-card-section>
            <div class="text-bold" style="font-size:1.2em">
              接单确认
            </div>
          </q-card-section>
          <q-separator />
          <q-card-section>
            <span>
              确定要接受当前订单么?
            </span>
          </q-card-section>
          <q-card-section>
            <div class="row justify-end">
              <q-btn class="q-mx-sm q-px-sm" unelevated dense color="grey" label="取消" @click='cancel' />
              <q-btn class="q-px-sm" unelevated dense color="primary" label="确定" @click='acceptOrder' />
            </div>
          </q-card-section>
        </q-card>
      </q-dialog>
    </q-page>
  </q-page-container>
</q-layout>
</template>

<script>
// The exact semantic component options are preserved in the sibling .logic.js file.
// This SFC isolates the original render tree for review and manual variable renaming.
export default {
  name: "recevingOrder",
};
</script>
