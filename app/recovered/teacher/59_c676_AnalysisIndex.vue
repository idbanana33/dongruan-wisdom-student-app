<!--
  Source: assets/www/js/59.js -> webpack module "c676"
  Route: /teacher/analysis/index
  Component: AnalysisIndex
  Restoration: template decompiled from Vue render function; logic in sibling .logic.js
  Confidence: high for DOM structure / medium for expression quoting
-->
<template>
<q-layout view="lHh lpr lFf">
  <q-header class="bg-grey-3 text-black">
    <q-toolbar>
      <q-btn flat round dense icon="keyboard_arrow_left" @click='moveTo("/teacher/index")' />
      <q-toolbar-title>
        {{ menuInfo || {  }.title }}
      </q-toolbar-title>
    </q-toolbar>
  </q-header>
  <q-page-container>
    <q-page class="bg-grey-3 q-pb-sm">
      <q-card class="bg-white q-mb-sm q-mx-sm q-py-md" flat @click='moveTo("/teacher/analysis/stuData")'>
        <q-item>
          <q-item-section avatar>
            <q-item-label>
              <q-icon size="sm" :name='menuInfo.icon' :color='menuInfo.color.background' />
            </q-item-label>
          </q-item-section>
          <q-item-section>
            <q-item-label style="font-size:1.01rem">
              业务数据分析
            </q-item-label>
            <q-item-label caption>
              对学生在各业务模块中产生的数据进行统计分析
            </q-item-label>
          </q-item-section>
          <q-item-section side>
            <q-item-label>
              <q-icon name="keyboard_arrow_right" size="sm" />
            </q-item-label>
          </q-item-section>
        </q-item>
      </q-card>
      <q-card class="bg-white q-mb-sm q-mx-sm q-py-md" flat @click='moveTo("/teacher/analysis/stuLocation")'>
        <q-item>
          <q-item-section avatar>
            <q-item-label>
              <q-icon size="sm" :name='menuInfo.icon' :color='menuInfo.color.background' />
            </q-item-label>
          </q-item-section>
          <q-item-section>
            <q-item-label style="font-size:1.01rem">
              定位数据分析
            </q-item-label>
            <q-item-label caption>
              对学生的定位数据进行统计分析
            </q-item-label>
          </q-item-section>
          <q-item-section side>
            <q-item-label>
              <q-icon name="keyboard_arrow_right" size="sm" />
            </q-item-label>
          </q-item-section>
        </q-item>
      </q-card>
      <q-card v-show="roleId == 'A' || roleId == 'D' || roleId == 'M'" class="bg-white q-mb-sm q-mx-sm q-py-md" flat @click='moveTo("/teacher/analysis/teaMessage")'>
        <q-item>
          <q-item-section avatar>
            <q-item-label>
              <q-icon size="sm" :name='menuInfo.icon' :color='menuInfo.color.background' />
            </q-item-label>
          </q-item-section>
          <q-item-section>
            <q-item-label style="font-size:1.01rem">
              教师信息收集数据分析
            </q-item-label>
            <q-item-label caption>
              对教师的信息收集数据进行统计分析
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
