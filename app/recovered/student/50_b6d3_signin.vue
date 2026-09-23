<!--
  Source: assets/www/js/50.js -> webpack module "b6d3"
  Route: /student/signin/qrcodePersonDetails
  Component: signin
  Restoration: template decompiled from Vue render function; logic in sibling .logic.js
  Confidence: high for DOM structure / medium for expression quoting
-->
<template>
<q-layout view="lHh lpr lFf">
  <q-header v-show="tab == 'scan'" class="bg-grey-3 text-black">
    <q-toolbar>
      <q-btn flat round dense icon="keyboard_arrow_left" @click='goBack' />
      <q-toolbar-title>
        {{ title }}
      </q-toolbar-title>
    </q-toolbar>
  </q-header>
  <q-page-container>
    <q-page class="bg-grey-3">
      <q-card class="full-width" flat>
        <div>
          <q-chip class="q-ma-sm" square color="red" text-color="white" icon="gradient" size="sm">
            二维码负责人
          </q-chip>
        </div>
        <div class="q-ml-sm row">
          <span class="full-width text-weight-bold" style="font-size:15px">
            {{ record.title }}
          </span>
          <span class="neu-css-after-colon text-grey">
            发起人
          </span>
          {{ record.name + "\n        " }}
        </div>
        <div class="q-ml-sm row">
          <span class="neu-css-after-colon text-grey">
            签到时间段
          </span>
          {{ record.begin_time + " 至 " + record.end_time + "\n        " }}
        </div>
        <div class="q-ml-sm row">
          <span class="neu-css-after-colon text-grey">
            二维码负责人
          </span>
          {{ stuName + " (" + loginName + ")\n        " }}
        </div>
      </q-card>
      <q-card v-show="tab == 'scan'" class="full-width q-mt-sm" flat>
        <q-card-section v-show="record.signin_method == 'SQR'" class="text-center">
          <vue-qr :text='downloadData.text' colorDark="#3B3B3B" colorLight="#fff" :size="350" />
        </q-card-section>
        <q-card-section v-show="record.signin_method == 'DQR'" class="text-center">
          <vue-qr :text='downloadData.text' colorDark="#3B3B3B" colorLight="#fff" :size="350" />
        </q-card-section>
      </q-card>
    </q-page>
  </q-page-container>
  <q-footer class="bg-white text-primary" bordered>
    <q-tabs v-model="tab" class="text-black" no-caps active-color="primary" indicator-color="transparent" align="justify">
      <q-tab name="scan" label="签到扫描" />
      <q-separator vertical />
      <q-tab name="personnel" label="签到人员列表" @click='goPersonnel(id, batch_no, title)' />
    </q-tabs>
  </q-footer>
</q-layout>
</template>

<script>
// The exact semantic component options are preserved in the sibling .logic.js file.
// This SFC isolates the original render tree for review and manual variable renaming.
export default {
  name: "signin",
};
</script>
