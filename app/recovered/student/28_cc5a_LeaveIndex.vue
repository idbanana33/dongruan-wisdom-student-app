<!--
  Source: assets/www/js/28.js -> webpack module "cc5a"
  Route: /student/leave/index
  Component: LeaveIndex
  Restoration: template decompiled from Vue render function; logic in sibling .logic.js
  Confidence: high for DOM structure / medium for expression quoting
-->
<template>
<q-layout view="lHh lpr lFf">
  <q-header class="bg-grey-3 text-black">
    <q-toolbar>
      <q-btn flat round dense icon="keyboard_arrow_left" @click='goBack' />
      <q-toolbar-title>
        请假
      </q-toolbar-title>
    </q-toolbar>
  </q-header>
  <q-page-container>
    <q-page class="bg-grey-3">
      <q-pull-to-refresh ref=""pageRefresh"" @refresh='refresh'>
        <q-card v-for="t in leave" :key='t.id' class="bg-white q-mb-sm q-mx-sm" :style='"驳回" == t.review_name ? "border-left:0.25rem solid #FF0000;" : "审批中" == t.review_name ? "border-left:0.25rem solid #20B2AA;" : "border-left:0.25rem solid #32CD32;"' flat @click='goDetails(t.id)'>
          <q-item>
            <q-item-section>
              <q-item-label>
                <q-chip square color="primary" text-color="white" size="sm">
                  {{ "\n                  " + t.leave_type_name + "\n                " }}
                </q-chip>
                <span v-show="item.walk_out === 1" class="text-grey" style="font-size:0.8rem">
                  {{ " " + 1 == t.walk_out ? "需要离校" : "否" + " " }}
                </span>
                <span v-show="item.city_out === 1" class="text-grey" style="font-size:0.8rem">
                  {{ " " + 1 == t.city_out ? "需要离市" : "否" + " " }}
                </span>
                <span v-show="item.province_out === 1" class="text-grey" style="font-size:0.8rem">
                  {{ " " + 1 == t.province_out ? "需要离省" : "否" + " " }}
                </span>
                <span v-if="1 === t.need_report" class="text-grey" style="font-size:0.8rem">
                  {{ t.report_status_name }}
                </span>
              </q-item-label>
              <q-item-label lines="2">
                {{ "\n                " + t.leave_time + "\n              " }}
              </q-item-label>
            </q-item-section>
            <q-item-section side>
              <q-item-label>
                <q-icon name="keyboard_arrow_right" size="sm" />
              </q-item-label>
            </q-item-section>
          </q-item>
        </q-card>
        <div v-show="!isLoading && paging.pageCount != paging.pageNum" class="text-center text-grey q-pt-sm q-pb-md" @click='getLeaveList(null)'>
          加载更多...
        </div>
        <div v-show="!isLoading && paging.pageCount == paging.pageNum && leave.length != 0" class="text-center text-grey q-pt-sm q-pb-md">
          没有更多了
        </div>
        <div v-show="!isLoading && leave.length == 0" class="text-center text-grey q-pt-sm q-pb-md">
          暂无请假
        </div>
        <div v-show="isLoading" class="text-center text-grey q-pt-sm q-pb-md">
          <q-spinner-dots color="primary" size="md" />
        </div>
      </q-pull-to-refresh>
      <q-page-sticky position="bottom-right" :offset='fabPos'>
        <q-btn v-touch-pan.prevent.mouse.prevent.mouse="moveFab" round color="primary" icon="add" @click='onClick' />
      </q-page-sticky>
    </q-page>
  </q-page-container>
</q-layout>
</template>

<script>
// The exact semantic component options are preserved in the sibling .logic.js file.
// This SFC isolates the original render tree for review and manual variable renaming.
export default {
  name: "LeaveIndex",
};
</script>
