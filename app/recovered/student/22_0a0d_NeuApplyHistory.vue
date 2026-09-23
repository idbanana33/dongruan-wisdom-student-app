<!--
  Source: assets/www/js/22.js -> webpack module "0a0d"
  Route: /student/apply/index
  Component: NeuApplyHistory
  Restoration: template decompiled from Vue render function; logic in sibling .logic.js
  Confidence: high for DOM structure / medium for expression quoting
-->
<template>
<q-layout view="lHh lpr lFf">
  <q-header class="bg-grey-3 text-black">
    <q-toolbar>
      <q-btn flat round dense icon="keyboard_arrow_left" @click='goBack' />
      <q-toolbar-title v-if="menuInfo">
        {{ menuInfo.title }}
      </q-toolbar-title>
      <span v-show="badgeCount !== 0" class="text-red" @click='goStuManage'>
        班级协助>
      </span>
    </q-toolbar>
  </q-header>
  <q-page-container>
    <q-page class="bg-grey-3 q-pb-sm">
      <neu-apply-form v-if="'doing' == tab" />
      <neu-apply-history v-if="'history' == tab" />
    </q-page>
  </q-page-container>
  <q-footer v-if="menuInfo" class="bg-white text-primary" bordered>
    <q-tabs v-model="tab" class="text-black" no-caps active-color="primary" indicator-color="transparent" align="justify">
      <q-tab name="doing" label="正在进行" />
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
  name: "NeuApplyHistory",
};
</script>
