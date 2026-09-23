<!--
  Source: assets/www/js/87.js -> webpack module "19fe"
  Route: /teacher/message/index
  Component: AnalysisIndex
  Restoration: template decompiled from Vue render function; logic in sibling .logic.js
  Confidence: high for DOM structure / medium for expression quoting
-->
<template>
<q-layout view="lHh lpr lFf">
  <q-header class="bg-grey-3 text-black">
    <q-toolbar>
      <q-btn flat round dense icon="keyboard_arrow_left" @click='goBack' />
      <q-toolbar-title>
        {{ menuInfo || {  }.title }}
      </q-toolbar-title>
    </q-toolbar>
  </q-header>
  <q-page-container>
    <q-page class="bg-grey-3 q-pb-sm">
      <q-card v-if="'A' == role_id || 'M' == role_id || 'D' == role_id" class="bg-white q-mb-sm q-mx-sm q-py-md" flat @click='moveTo("/teacher/message/messageIndex")'>
        <q-item>
          <q-item-section avatar>
            <q-item-label>
              <q-icon size="sm" :name='menuInfo.icon' :color='menuInfo.color.background' />
            </q-item-label>
          </q-item-section>
          <q-item-section>
            <q-item-label style="font-size:1.01rem">
              教师信息收集管理
            </q-item-label>
            <q-item-label caption>
              管理教师信息收集的数据
            </q-item-label>
          </q-item-section>
          <q-item-section side>
            <q-item-label>
              <q-icon name="keyboard_arrow_right" size="sm" />
            </q-item-label>
          </q-item-section>
        </q-item>
      </q-card>
      <q-card class="bg-white q-mb-sm q-mx-sm q-py-md" flat @click='moveTo("/teacher/message/message")'>
        <q-item>
          <q-item-section avatar>
            <q-item-label>
              <q-icon size="sm" :name='menuInfo.icon' :color='menuInfo.color.background' />
            </q-item-label>
          </q-item-section>
          <q-item-section>
            <q-item-label style="font-size:1.01rem">
              教师信息收集填报
            </q-item-label>
            <q-item-label caption>
              需要进行填报的教师信息收集
            </q-item-label>
          </q-item-section>
          <q-item-section side>
            <q-item-label>
              <q-icon name="keyboard_arrow_right" size="sm" />
            </q-item-label>
          </q-item-section>
        </q-item>
      </q-card>
    </q-page>
  </q-page-container>
</q-layout>
</template>

<script>
// The exact semantic component options are preserved in the sibling .logic.js file.
// This SFC isolates the original render tree for review and manual variable renaming.
export default {
  name: "AnalysisIndex",
};
</script>
