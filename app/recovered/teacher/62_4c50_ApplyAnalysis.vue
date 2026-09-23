<!--
  Source: assets/www/js/62.js -> webpack module "4c50"
  Route: /teacher/analysis/teaMessage
  Component: ApplyAnalysis
  Restoration: template decompiled from Vue render function; logic in sibling .logic.js
  Confidence: high for DOM structure / medium for expression quoting
-->
<template>
<q-layout view="lHh lpr lFf">
  <q-header class="bg-grey-3 text-black">
    <q-toolbar>
      <q-btn flat round dense icon="keyboard_arrow_left" @click='goBack' />
      <q-toolbar-title>
        教师信息收集数据分析
      </q-toolbar-title>
    </q-toolbar>
  </q-header>
  <q-page-container>
    <q-page class="bg-grey-3 q-pb-sm">
      <message-analysis />
    </q-page>
    <q-dialog v-model="taskTargetDialog" persistent fullWidth :maximized='maximizedToggle'>
      <q-layout class="bg-white" view="lHh lpr lFf" container>
        <q-header class="full-width bg-white">
          <q-toolbar>
            <div class="full-width row items-center justify-between q-px-xs q-py-sm">
              <div class="text-bold text-black">
                设置统计对象
              </div>
              <q-btn unelevated color="primary" label="完成" @click='taskTargetDialog = false' />
            </div>
          </q-toolbar>
        </q-header>
        <q-page-container>
          <q-page>
            <neu-assign-teacher v-model="task_target" />
          </q-page>
        </q-page-container>
      </q-layout>
    </q-dialog>
  </q-page-container>
</q-layout>
</template>

<script>
// The exact semantic component options are preserved in the sibling .logic.js file.
// This SFC isolates the original render tree for review and manual variable renaming.
export default {
  name: "ApplyAnalysis",
};
</script>
