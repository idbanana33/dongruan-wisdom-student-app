<!--
  Source: assets/www/js/chunk-common.js -> webpack module "92db"
  Route: (shared/core)
  Component: NeuApplyStatistics
  Restoration: template decompiled from Vue render function; logic in sibling .logic.js
  Confidence: high for DOM structure / medium for expression quoting
-->
<template>
<div>
  <q-card v-for="(t, a) in list" :key='a' class="bg-white q-my-sm q-mx-sm" style="border-left:0.25rem solid #b5b3b3" flat>
    <q-item>
      <q-item-section>
        <q-item-label v-show="noticeStatistics == '1'">
          {{ t.class_name }}
        </q-item-label>
        <q-item-label v-show="noticeStatistics == '2'">
          {{ t.major_name }}
        </q-item-label>
        <q-item-label v-show="noticeStatistics == '3'">
          {{ t.dep_name }}
        </q-item-label>
        <q-item-label v-show="noticeStatistics == '4'">
          {{ t.name + "(" + t.tea_no + ")" }}
        </q-item-label>
        <q-item-label class="row justify-between" lines="1" caption>
          {{ "\n          应阅读人数：" + t.feedback_total + "\n          " }}
          <span>
            {{ "已阅读人数：" + t.feedback_count }}
          </span>
          <span>
            {{ " 未阅读人数：" + t.no_feedback_total }}
          </span>
        </q-item-label>
        <q-item-label v-show="confirm_flag === 1" class="row justify-between" lines="1" caption>
          {{ "\n          应确认人数：" + t.confirm_total + "\n          " }}
          <span>
            {{ "已确认人数：" + t.confirm_count }}
          </span>
          <span>
            {{ " 未确认人数：" + t.no_confirm_total }}
          </span>
        </q-item-label>
      </q-item-section>
    </q-item>
  </q-card>
</div>
</template>

<script>
// The exact semantic component options are preserved in the sibling .logic.js file.
// This SFC isolates the original render tree for review and manual variable renaming.
export default {
  name: "NeuApplyStatistics",
};
</script>
