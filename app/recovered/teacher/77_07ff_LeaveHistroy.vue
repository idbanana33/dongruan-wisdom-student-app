<!--
  Source: assets/www/js/77.js -> webpack module "07ff"
  Route: /teacher/leave/history
  Component: LeaveHistroy
  Restoration: template decompiled from Vue render function; logic in sibling .logic.js
  Confidence: high for DOM structure / medium for expression quoting
-->
<template>
<q-layout view="lHh lpr lFf">
  <q-header class="bg-grey-3 text-black">
    <q-toolbar>
      <q-btn flat round dense icon="keyboard_arrow_left" @click='goBack' />
      <q-toolbar-title>
        {{ e.$route.query.student_name + " 的请假历史" }}
      </q-toolbar-title>
    </q-toolbar>
  </q-header>
  <q-page-container>
    <q-page class="bg-grey-3">
      <q-pull-to-refresh @refresh='refresh'>
        <q-card v-for="t in history" :key='t.id' class="bg-white q-mb-sm q-mx-sm" :style='"驳回" == t.review_status ? "border-left:0.25rem solid #FF0000;" : "审批中" == t.review_status ? "border-left:0.25rem solid #20B2AA;" : "border-left:0.25rem solid #32CD32;"' flat>
          <q-item>
            <q-item-section>
              <q-item-label>
                {{ "\n                " + t.create_time + "\n              " }}
              </q-item-label>
              <q-item-label lines="1" caption>
                {{ t.class_name + " " + t.major_name + " " + t.dep_name }}
              </q-item-label>
              <q-item-label lines="2">
                {{ "\n                " + t.leave_type + " " }}
                <span v-show="item.walk_out === 1">
                  {{ "是" == t.walk_outs ? "需要离校 " : "不需要离校 " }}
                </span>
                <span v-show="item.city_out === 1">
                  {{ 1 === t.city_out ? "需要离市 " : "不需要离市 " }}
                </span>
                <span v-show="item.province_out === 1">
                  {{ 1 === t.province_out ? "需要离省 " : "不需要离省 " }}
                </span>
                {{ t.report_status_name + "\n              " }}
              </q-item-label>
              <q-item-label lines="2">
                {{ "\n                " + t.leave_period + "\n              " }}
              </q-item-label>
            </q-item-section>
          </q-item>
        </q-card>
        <div v-show="!isLoading && paging.pageCount != paging.pageNum" class="text-center text-grey q-pt-sm q-pb-md" @click='getLeaveByStudent(null)'>
          加载更多...
        </div>
        <div v-show="!isLoading && paging.pageCount == paging.pageNum && history.length != 0" class="text-center text-grey q-pt-sm q-pb-md">
          没有更多了
        </div>
        <div v-show="!isLoading && history.length == 0" class="text-center text-grey q-pt-sm q-pb-md">
          暂无请假记录
        </div>
        <div v-show="isLoading" class="text-center text-grey q-pt-sm q-pb-md">
          <q-spinner-dots color="primary" size="md" />
        </div>
      </q-pull-to-refresh>
    </q-page>
  </q-page-container>
</q-layout>
</template>

<script>
// The exact semantic component options are preserved in the sibling .logic.js file.
// This SFC isolates the original render tree for review and manual variable renaming.
export default {
  name: "LeaveHistroy",
};
</script>
