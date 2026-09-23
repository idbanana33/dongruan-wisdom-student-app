<!--
  Source: assets/www/js/79.js -> webpack module "f3d1"
  Route: /teacher/leave/leaveExperience
  Component: signinExperience
  Restoration: template decompiled from Vue render function; logic in sibling .logic.js
  Confidence: high for DOM structure / medium for expression quoting
-->
<template>
<q-layout view="lHh lpr lFf">
  <q-header class="bg-grey-3 text-black">
    <q-toolbar>
      <q-btn flat round dense icon="keyboard_arrow_left" @click='goBack' />
      <q-toolbar-title>
        {{ stuName + "的历史请假记录" }}
      </q-toolbar-title>
      <q-btn flat dense icon="get_app" round @click='exportList' />
    </q-toolbar>
    <q-separator />
  </q-header>
  <q-page-container>
    <q-page class="bg-grey-3 q-py-sm">
      <q-pull-to-refresh @refresh='refresh'>
        <q-card v-for="t in list" :key='t.id' class="bg-white q-mb-sm q-mx-sm" :style='"驳回" == t.review_status ? "border-left:0.25rem solid #FF0000;" : "审批中" == t.review_status ? "border-left:0.25rem solid #20B2AA;" : "border-left:0.25rem solid #32CD32;"' flat>
          <q-item>
            <q-item-section>
              <q-item-label class="q-mb-xs" caption>
                <span class="neu-css-after-colon">
                  请假类型
                </span>
                {{ t.leave_type + "\n              " }}
              </q-item-label>
              <q-item-label class="q-mb-xs" caption>
                <span class="neu-css-after-colon">
                  发起时间
                </span>
                {{ t.create_time + "\n              " }}
              </q-item-label>
              <q-item-label style="min-width:250px" caption lines="1">
                <span class="neu-css-after-colon">
                  请假时间
                </span>
                {{ t.leave_period + "\n              " }}
              </q-item-label>
              <q-item-label lines="1" caption>
                <span v-show="item.walk_out === 1" class="text-grey" style="font-size:0.8rem">
                  {{ " " + "是" == t.walk_outs ? "需要离校" : "否" + " " }}
                </span>
                <span v-show="item.city_out === 1" class="text-grey" style="font-size:0.8rem">
                  {{ " " + 1 === t.city_out ? "需要离市" : "否" + " " }}
                </span>
                <span v-show="item.province_out === 1" class="text-grey" style="font-size:0.8rem">
                  {{ " " + 1 === t.province_out ? "需要离省" : "否" + " " }}
                </span>
              </q-item-label>
            </q-item-section>
          </q-item>
        </q-card>
        <div v-show="!isLoading && paging.pageCount != paging.pageNum" class="text-center text-grey q-pt-sm q-pb-md" @click='getLeaveDetail(null)'>
          加载更多...
        </div>
        <div v-show="!isLoading && paging.pageCount == paging.pageNum && list.length != 0" class="text-center text-grey q-pt-sm q-pb-md">
          没有更多了
        </div>
        <div v-show="!isLoading && list.length == 0" class="text-center text-grey q-pt-sm q-pb-md">
          暂无请假记录
        </div>
        <div v-show="isLoading" class="text-center text-grey q-pt-sm q-pb-md">
          <q-spinner-dots color="primary" size="md" />
        </div>
      </q-pull-to-refresh>
    </q-page>
    <neu-export-data :config='exportCompConfig' />
  </q-page-container>
</q-layout>
</template>

<script>
// The exact semantic component options are preserved in the sibling .logic.js file.
// This SFC isolates the original render tree for review and manual variable renaming.
export default {
  name: "signinExperience",
};
</script>
