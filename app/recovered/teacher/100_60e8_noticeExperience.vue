<!--
  Source: assets/www/js/100.js -> webpack module "60e8"
  Route: /teacher/notice/noticeExperience
  Component: noticeExperience
  Restoration: template decompiled from Vue render function; logic in sibling .logic.js
  Confidence: high for DOM structure / medium for expression quoting
-->
<template>
<q-layout view="lHh lpr lFf">
  <q-header class="bg-grey-3 text-black">
    <q-toolbar>
      <q-btn flat round dense icon="keyboard_arrow_left" @click='goBack' />
      <q-toolbar-title>
        {{ stuName + "的通知记录" }}
      </q-toolbar-title>
      <q-btn flat round dense icon="get_app" @click='exportList' />
    </q-toolbar>
  </q-header>
  <q-page-container>
    <q-page class="bg-grey-3 q-pb-sm">
      <q-pull-to-refresh @refresh='refresh'>
        <q-card v-for="e in list" :key='e.id' class="bg-white q-mb-sm q-mx-sm" :style='null == e.feedback_time ? "border-left:0.25rem solid #c10015;" : null != e.feedback_time && 1 == e.confirm_flag && null == e.confirm_time ? "border-left:0.25rem solid #027be3;" : "border-left:0.25rem solid #21ba45;"' flat>
          <q-item>
            <q-item-section>
              <q-item-label class="text-subtitle1 row items-center">
                {{ e.title }}
                <q-badge class="q-ml-xs" :color='e.notice_priority_color' text-color="white">
                  {{ e.notice_priority_name }}
                </q-badge>
              </q-item-label>
              <q-item-label class="q-mb-xs" caption>
                <span class="neu-css-after-colon">
                  发起人
                </span>
                {{ e.teacher_name + "\n              " }}
              </q-item-label>
              <q-item-label class="q-mb-xs" caption>
                <span class="neu-css-after-colon">
                  发起时间
                </span>
                {{ e.push_time + "\n              " }}
              </q-item-label>
              <q-item-label class="q-mb-xs" caption>
                <span class="neu-css-after-colon">
                  阅读时间
                </span>
                {{ e.feedback_time + "\n              " }}
              </q-item-label>
              <q-item-label class="q-mb-xs" caption>
                <span class="neu-css-after-colon">
                  反馈截止时间
                </span>
                {{ e.feedback_deadline + "\n              " }}
              </q-item-label>
            </q-item-section>
            <q-item-section side top>
              <q-item-label>
                <span :class='"未阅读" == e.feedback_status_name ? "text-red" : "已阅读" == e.feedback_status_name ? "text-primary" : "text-positive"'>
                  {{ e.feedback_status_name }}
                </span>
              </q-item-label>
              <q-item-label v-if="1 == e.confirm_flag">
                <span class="q-ml-md" :class='"未确认" == e.confirm_status_name ? "text-red" : "已确认" == e.confirm_status_name ? "text-primary" : "text-positive"'>
                  {{ e.confirm_status_name }}
                </span>
              </q-item-label>
            </q-item-section>
          </q-item>
        </q-card>
        <div v-show="!isLoading && paging.pageCount != paging.pageNum" class="text-center text-grey q-pt-sm q-pb-md" @click='loadList(null)'>
          加载更多...
        </div>
        <div v-show="!isLoading && paging.pageCount == paging.pageNum && list.length != 0" class="text-center text-grey q-pt-sm q-pb-md">
          没有更多了
        </div>
        <div v-show="!isLoading && list.length == 0" class="text-center text-grey q-pt-sm q-pb-md">
          暂无通知
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
  name: "noticeExperience",
};
</script>
