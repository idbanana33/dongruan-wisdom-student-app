<!--
  Source: assets/www/js/52.js -> webpack module "1a43"
  Route: /student/signin/signinSuccess
  Component: 52_1a43
  Restoration: template decompiled from Vue render function; logic in sibling .logic.js
  Confidence: high for DOM structure / medium for expression quoting
-->
<template>
<q-layout view="lHh lpr lFf">
  <q-header class="bg-grey-3 text-black">
    <q-toolbar>
      <q-btn flat round dense icon="keyboard_arrow_left" @click='goBack' />
      <q-toolbar-title>
        我的签到
      </q-toolbar-title>
    </q-toolbar>
  </q-header>
  <q-page-container>
    <q-page v-if="record" class="bg-grey-3">
      <q-card class="full-width row" flat>
        <q-card-section v-show="record.status == 2 && tab == 'result'" class="full-width row justify-center bg-positive text-white" style="height:4rem;font-size:1.5rem">
          <q-icon name="done" size="2rem" />
          签到成功
        </q-card-section>
        <q-card-section v-show="record.status == 1 && tab == 'result'" class="full-width row justify-center bg-red text-white" style="height:4rem;font-size:1.5rem">
          <q-icon name="clear" size="2rem" />
          未签到
        </q-card-section>
        <q-card-section v-show="record.status == 3 && tab == 'result'" class="full-width row justify-center bg-primary text-white" style="height:4rem;font-size:1.5rem">
          <q-icon name="schedule" size="2rem" />
          已请假
        </q-card-section>
      </q-card>
      <q-card v-show="record.si_time != null && tab == 'result'" class="full-width q-my-sm" flat>
        <q-card-section class="full-width row justify-center">
          <div class="row">
            <span class="text-primary" style="font-size:0.9rem" @click='showQrCode'>
              点击展示二维码
            </span>
          </div>
        </q-card-section>
      </q-card>
      <q-card v-show="tab == 'result'" class="full-width" flat>
        <q-card-section>
          <div class="row">
            <span class="full-width text-weight-bold" style="font-size:18px">
              {{ record.title }}
            </span>
          </div>
          <div class="row q-mt-xs">
            <span class="neu-css-after-colon text-grey" style="font-size:15px">
              姓名(学号)
            </span>
            {{ record.stu_name + "（" + record.student_no + "）\n          " }}
          </div>
          <div class="row q-mt-xs">
            <span class="neu-css-after-colon text-grey" style="font-size:15px">
              性别
            </span>
            {{ record.sex_name + "\n          " }}
          </div>
          <div v-show="record.status == 1" class="row q-mt-xs">
            <span class="neu-css-after-colon text-grey" style="font-size:15px">
              签到状态
            </span>
            未签到
          </div>
          <div v-show="record.status == 3" class="row q-mt-xs">
            <span class="neu-css-after-colon text-grey" style="font-size:15px">
              签到状态
            </span>
            已请假
          </div>
          <div v-show="record.qrcode_source != null" class="row q-mt-xs">
            <span class="neu-css-after-colon text-grey" style="font-size:15px">
              扫码来源
            </span>
            {{ record.qr_name + "\n          " }}
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
          <div v-show="record.signin_time != null" class="row q-mt-xs">
            <span class="neu-css-after-colon text-grey" style="font-size:15px">
              签到时间
            </span>
            {{ record.signin_time + "\n          " }}
          </div>
          <div v-show="record.signin_location != null" class="row q-mt-xs">
            <span class="neu-css-after-colon text-grey" style="font-size:15px">
              签到位置
            </span>
            {{ record.address + "\n          " }}
          </div>
        </q-card-section>
      </q-card>
      <q-card v-show="tab == 'result'" class="q-mt-sm" flat full-width>
        <q-card-section>
          <div v-show="record.info_result != null" class="q-mt-xs row">
            <span class="neu-css-after-colon text-grey" style="font-size:15px">
              附加信息
            </span>
            已填写
          </div>
          <div class="row q-mt-xs">
            <span class="neu-css-after-colon text-grey" style="font-size:15px">
              发起人
            </span>
            <span>
              {{ record.tea_name }}
            </span>
          </div>
          <div class="row q-mt-xs">
            <span class="neu-css-after-colon text-grey" style="font-size:15px">
              签到时间段
            </span>
            <span>
              {{ timeSlot }}
            </span>
          </div>
          <div class="row q-mt-xs">
            <span class="neu-css-after-colon text-grey" style="font-size:15px">
              详情
            </span>
            <span class="full-width" v-html='record.detail' />
          </div>
        </q-card-section>
      </q-card>
      <q-card v-show="tab == 'qa'" class="bg-grey-3" flat>
        <q-card-section>
          <neu-qa-list taskMenuId="signin" :taskId='id + ""' />
        </q-card-section>
      </q-card>
    </q-page>
  </q-page-container>
  <q-dialog v-model="qrShowingDialog">
    <q-card class="full-width" flat>
      <q-card-section class="row items-center justify-between">
        <div class="text-h6">
          二维码展示
        </div>
        <q-btn icon="close" flat round dense size="sm" @click='clearScan' />
      </q-card-section>
      <q-separator />
      <q-card-section class="text-center">
        <vue-qr class="q-mb-xl" :text='downloadData.text' :margin="0" colorDark="#3B3B3B" colorLight="#fff" :size="250" />
      </q-card-section>
    </q-card>
  </q-dialog>
  <q-footer class="bg-white text-primary" bordered>
    <q-tabs v-model="tab" class="text-black" no-caps active-color="primary" indicator-color="transparent" align="justify">
      <q-tab name="result" label="签到结果" />
      <q-separator vertical />
      <q-tab name="qa" label="提问" />
    </q-tabs>
  </q-footer>
</q-layout>
</template>

<script>
// The exact semantic component options are preserved in the sibling .logic.js file.
// This SFC isolates the original render tree for review and manual variable renaming.
export default {
  name: "52_1a43",
};
</script>
