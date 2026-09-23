<!--
  Source: assets/www/js/118.js -> webpack module "87c4"
  Route: /teacher/verification/signinVer
  Component: 118_87c4
  Restoration: template decompiled from Vue render function; logic in sibling .logic.js
  Confidence: high for DOM structure / medium for expression quoting
-->
<template>
<q-layout view="lHh lpr lFf">
  <q-header class="bg-grey-3 text-black">
    <q-toolbar>
      <q-btn flat round dense icon="keyboard_arrow_left" @click='goBack' />
      <q-toolbar-title>
        签到信息核验
      </q-toolbar-title>
    </q-toolbar>
  </q-header>
  <q-page-container>
    <q-page class="bg-grey-3">
      <q-card class="bg-positive" flat full-width>
        <q-card-section class="text-white">
          <q-icon class="full-width" name="check_circle" size="80px" />
          <div class="row">
            <div class="q-mt-xs full-width text-center">
              <span style="font-size:18px">
                已签到
              </span>
            </div>
            <div class="q-mt-xs">
              <span class="neu-css-after-colon" style="font-size:15px">
                签到时间
              </span>
              {{ record.signin_time + "\n            " }}
            </div>
          </div>
          <div class="row">
            <div v-show="record.signin_location != null" class="q-mt-xs">
              <span class="neu-css-after-colon">
                签到位置
              </span>
              {{ record.address + "\n            " }}
            </div>
            <div v-show="record.qrcode_source != null" class="q-mt-xs">
              <span class="neu-css-after-colon" style="font-size:15px">
                扫码来源
              </span>
              {{ record.qr_name + "\n            " }}
            </div>
          </div>
        </q-card-section>
      </q-card>
      <q-card class="full-width" flat>
        <q-card-section>
          <div class="row">
            <span class="full-width text-weight-bold" style="font-size:18px">
              {{ record.title }}
            </span>
          </div>
          <div v-show="record.info_result != null" class="q-mt-xs row">
            <span class="neu-css-after-colon text-grey">
              附加信息
            </span>
            已填写
          </div>
        </q-card-section>
      </q-card>
      <q-card class="q-mt-sm" flat full-width>
        <q-card-section>
          <div class="row q-mt-xs">
            <span class="neu-css-after-colon text-grey" style="font-size:15px">
              姓名(学号)
            </span>
            {{ record.stu_name + "(" + record.student_no + ")\n          " }}
          </div>
          <div class="row q-mt-xs">
            <span class="neu-css-after-colon text-grey" style="font-size:15px">
              性别
            </span>
            {{ record.sex_name + "\n          " }}
          </div>
          <div class="row q-mt-xs">
            <span class="neu-css-after-colon text-grey" style="font-size:15px">
              学院
            </span>
            {{ record.dep_name + "\n          " }}
          </div>
          <div class="row q-mt-xs">
            <span class="neu-css-after-colon text-grey" style="font-size:15px">
              专业
            </span>
            {{ record.major_name + "\n          " }}
          </div>
          <div class="row q-mt-xs">
            <span class="neu-css-after-colon text-grey" style="font-size:15px">
              班级
            </span>
            {{ record.class_name + "\n          " }}
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
  name: "118_87c4",
};
</script>
