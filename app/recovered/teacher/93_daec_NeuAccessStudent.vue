<!--
  Source: assets/www/js/93.js -> webpack module "daec"
  Route: /teacher/monitor/index
  Component: NeuAccessStudent
  Restoration: template decompiled from Vue render function; logic in sibling .logic.js
  Confidence: high for DOM structure / medium for expression quoting
-->
<template>
<q-layout view="lHh lpr lFf">
  <q-header class="bg-grey-3 text-black">
    <q-toolbar>
      <q-btn flat round dense icon="keyboard_arrow_left" @click='goBack' />
      <q-toolbar-title>
        {{ menuInfo.title }}
      </q-toolbar-title>
    </q-toolbar>
  </q-header>
  <q-page-container>
    <q-page class="bg-grey-3 q-pb-xs">
      <neu-access-student v-if="'studentConnect' == tab" ref=""childstudentConnect"" :task-target='record.task_target' />
      <neu-stat-active v-if="'statActive' == tab" />
      <neu-stat-app v-if="'statApp' == tab" />
    </q-page>
  </q-page-container>
  <q-footer class="bg-white text-primary" bordered>
    <q-tabs v-model="tab" class="text-black" no-caps active-color="primary" indicator-color="transparent" align="justify">
      <q-tab name="studentConnect" label="学生接入" />
      <q-separator vertical />
      <q-tab name="statActive" label="活跃度" />
      <q-separator vertical />
      <q-tab name="statApp" label="App终端分布" />
    </q-tabs>
  </q-footer>
</q-layout>
</template>

<script>
// The exact semantic component options are preserved in the sibling .logic.js file.
// This SFC isolates the original render tree for review and manual variable renaming.
export default {
  name: "NeuAccessStudent",
};
</script>
