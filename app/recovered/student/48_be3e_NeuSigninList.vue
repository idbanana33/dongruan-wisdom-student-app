<!--
  Source: assets/www/js/48.js -> webpack module "be3e"
  Route: /student/signin/index
  Component: NeuSigninList
  Restoration: template decompiled from Vue render function; logic in sibling .logic.js
  Confidence: high for DOM structure / medium for expression quoting
-->
<template>
<q-layout view="lHh lpr lFf">
  <q-header class="bg-grey-3 text-black">
    <q-toolbar>
      <q-btn flat round dense icon="keyboard_arrow_left" @click='goBack' />
      <q-toolbar-title>
        签到
      </q-toolbar-title>
      <span v-show="badgeCount !== 0" class="text-red" @click='goStuManage'>
        班级协助>
      </span>
      <q-btn v-show="showQR" flat round dense icon="mdi-qrcode" @click='scannList' />
    </q-toolbar>
  </q-header>
  <q-page-container>
    <q-page class="bg-grey-3 q-pb-xs">
      <neu-signin-list v-show="tab == 'signin'" />
      <neu-signin-history v-show="tab == 'history'" />
    </q-page>
  </q-page-container>
  <q-footer class="bg-white text-primary" bordered>
    <q-tabs v-model="tab" class="text-black" no-caps active-color="primary" indicator-color="transparent" align="justify">
      <q-tab name="signin" label="正在进行" />
      <q-separator vertical />
      <q-tab name="history" label="历史" />
    </q-tabs>
  </q-footer>
</q-layout>
</template>

<script>
// The exact semantic component options are preserved in the sibling .logic.js file.
// This SFC isolates the original render tree for review and manual variable renaming.
export default {
  name: "NeuSigninList",
};
</script>
