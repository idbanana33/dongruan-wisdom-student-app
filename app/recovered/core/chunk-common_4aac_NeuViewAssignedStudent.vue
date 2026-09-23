<!--
  Source: assets/www/js/chunk-common.js -> webpack module "4aac"
  Route: (shared/core)
  Component: NeuViewAssignedStudent
  Restoration: template decompiled from Vue render function; logic in sibling .logic.js
  Confidence: high for DOM structure / medium for expression quoting
-->
<template>
<q-list separator>
  <q-item v-for="t in teamData" :key='t.target_level + t.target_no + t.grade_no'>
    <q-item-section>
      <q-item-label>
        {{ t.target_name }}
        <span v-if="'class' != t.target_level">
          {{ " - " + t.grade_name }}
        </span>
      </q-item-label>
      <q-item-label caption>
        <span v-show="item.school_roll_status_name">
          {{ t.school_roll_status_name }}
        </span>
        <span v-show="item.education_level_name">
          {{ " " + t.education_level_name }}
        </span>
      </q-item-label>
    </q-item-section>
  </q-item>
  <q-item v-for="t in userData" :key='t.target_level + t.target_no'>
    <q-item-section>
      <q-item-label>
        {{ t.target_name }}
      </q-item-label>
      <q-item-label caption>
        {{ t.target_no }}
      </q-item-label>
    </q-item-section>
  </q-item>
  <q-item v-for="t in groupData" :key='t.target_level + t.target_no'>
    <q-item-section>
      <q-item-label>
        {{ t.target_name }}
      </q-item-label>
    </q-item-section>
  </q-item>
  <q-item v-show="hideFlag">
    <q-item-section @click='hideFlag = false'>
      {{ "共" + assignedData.length + "个对象，" }}
      <span class="text-primary">
        点击
      </span>
      显示全部。
    </q-item-section>
  </q-item>
</q-list>
</template>

<script>
// The exact semantic component options are preserved in the sibling .logic.js file.
// This SFC isolates the original render tree for review and manual variable renaming.
export default {
  name: "NeuViewAssignedStudent",
};
</script>
