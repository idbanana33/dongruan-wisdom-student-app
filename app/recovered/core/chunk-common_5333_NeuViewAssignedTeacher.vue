<!--
  Source: assets/www/js/chunk-common.js -> webpack module "5333"
  Route: (shared/core)
  Component: NeuViewAssignedTeacher
  Restoration: template decompiled from Vue render function; logic in sibling .logic.js
  Confidence: high for DOM structure / medium for expression quoting
-->
<template>
<q-list separator>
  <q-item v-for="t in teamData" :key='t.target_level + t.target_no'>
    <q-item-section>
      {{ t.target_name }}
    </q-item-section>
  </q-item>
  <q-item v-for="t in roleData" :key='t.target_level + t.target_no'>
    <q-item-section>
      {{ t.target_name }}
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
  name: "NeuViewAssignedTeacher",
};
</script>
