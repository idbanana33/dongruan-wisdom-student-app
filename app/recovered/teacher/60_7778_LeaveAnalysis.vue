<!--
  Source: assets/www/js/60.js -> webpack module "7778"
  Route: /teacher/analysis/stuData
  Component: LeaveAnalysis
  Restoration: template decompiled from Vue render function; logic in sibling .logic.js
  Confidence: high for DOM structure / medium for expression quoting
-->
<template>
<q-layout view="lHh lpr lFf">
  <q-header class="bg-grey-3 text-black">
    <q-toolbar>
      <q-btn flat round dense icon="keyboard_arrow_left" @click='goBack' />
      <q-toolbar-title>
        业务数据分析
      </q-toolbar-title>
      <q-btn-dropdown auto-close stretch flat :label='tabName'>
        <q-list>
          <q-item clickable @click='tab = "leave", tabName = "请假"'>
            <q-item-section>
              请假
            </q-item-section>
          </q-item>
          <q-item clickable @click='tab = "notice", tabName = "通知"'>
            <q-item-section>
              通知
            </q-item-section>
          </q-item>
          <q-item clickable @click='tab = "apply", tabName = "申请"'>
            <q-item-section>
              申请
            </q-item-section>
          </q-item>
          <q-item clickable @click='tab = "signup", tabName = "活动报名"'>
            <q-item-section>
              活动报名
            </q-item-section>
          </q-item>
          <q-item clickable @click='tab = "collect", tabName = "信息收集"'>
            <q-item-section>
              信息收集
            </q-item-section>
          </q-item>
          <q-item clickable @click='tab = "signin", tabName = "签到"'>
            <q-item-section>
              签到
            </q-item-section>
          </q-item>
          <q-item clickable @click='tab = "process", tabName = "日常流程"'>
            <q-item-section>
              日常流程
            </q-item-section>
          </q-item>
          <q-item clickable @click='tab = "process_gate", tabName = "返校离校流程"'>
            <q-item-section>
              返校离校流程
            </q-item-section>
          </q-item>
        </q-list>
      </q-btn-dropdown>
    </q-toolbar>
  </q-header>
  <q-page-container>
    <q-page class="bg-grey-3 q-pb-sm">
      <leave-analysis v-show="tab == 'leave'" />
      <signin-analysis v-show="tab == 'signin'" />
      <notice-analysis v-show="tab == 'notice'" />
      <apply-analysis v-show="tab == 'apply'" applyType="A" />
      <signup-analysis v-show="tab == 'signup'" applyType="S" />
      <collects-analysis v-show="tab == 'collect'" applyType="C" />
      <process-analysis v-show="tab == 'process'" service_flag="N" />
      <process-gate-analysis v-show="tab == 'process_gate'" service_flag="G" />
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
            <neu-assign-student v-model="task_target" :permit='menuInfo ? menuInfo.view_permit : null' permit-mode="V" :menu-id='menuInfo ? menuInfo.id : null' />
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
  name: "LeaveAnalysis",
};
</script>
