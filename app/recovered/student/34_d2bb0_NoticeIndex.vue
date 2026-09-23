<!--
  Source: assets/www/js/34.js -> webpack module "d2bb0"
  Route: /student/notice/index
  Component: NoticeIndex
  Restoration: template decompiled from Vue render function; logic in sibling .logic.js
  Confidence: high for DOM structure / medium for expression quoting
-->
<template>
<q-layout view="lHh lpr lFf">
  <q-header class="bg-grey-3 text-black">
    <q-toolbar>
      <q-btn flat round dense icon="keyboard_arrow_left" @click='goBack' />
      <q-toolbar-title>
        {{ menuInfo.title }}
      </q-toolbar-title>
      <span v-show="badgeCount !== 0" class="text-red" @click='goStuManage'>
        班级协助>
      </span>
    </q-toolbar>
  </q-header>
  <q-page-container>
    <q-page class="bg-grey-3 q-pb-sm">
      <q-pull-to-refresh @refresh='refresh'>
        <q-card v-for="e in list" :key='e.notice_id' class="q-mb-sm q-mx-sm" :style='null == e.feedback_time ? "border-left:0.25rem solid #c10015;" : null != e.feedback_time && 1 == e.confirm_flag && null == e.confirm_time ? "border-left:0.25rem solid #027be3;" : "border-left:0.25rem solid #21ba45;"' flat @click='checkDetail(e.notice_id)'>
          <q-item>
            <q-item-section>
              <q-item-label>
                <q-chip square :color='"N" == e.notice_priority || "E" == e.notice_priority || "I" == e.notice_priority ? e.notice_priority_color : "gray"' text-color="white" icon="email" size="sm">
                  {{ "\n                " + e.notice_priority_name + "\n                " }}
                </q-chip>
                <q-icon v-show="contact.attachment != null" name="attach_file" color="grey" size="xs" />
              </q-item-label>
              <q-item-label lines="1">
                <span :class='null == e.feedback_time ? "text-bold" : ""'>
                  {{ e.title }}
                </span>
              </q-item-label>
              <q-item-label caption lines="2" />
            </q-item-section>
            <q-item-section side>
              <q-item-label>
                <q-icon name="keyboard_arrow_right" size="xs" />
              </q-item-label>
            </q-item-section>
            <div class="absolute-top-right q-pa-sm" style="color:grey;font-size:12px">
              {{ "\n              " + e.days > 1 ? e.published_date : 1 == e.days ? e.days + "天前" : 0 != e.hours ? e.hours + "小时前" : 0 != e.mins ? e.mins + "分钟前" : "刚刚" + "\n            " }}
            </div>
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
  </q-page-container>
</q-layout>
</template>

<script>
// The exact semantic component options are preserved in the sibling .logic.js file.
// This SFC isolates the original render tree for review and manual variable renaming.
export default {
  name: "NoticeIndex",
};
</script>
