<!--
  Source: assets/www/js/35.js -> webpack module "cb82"
  Route: /student/notice/stumanage
  Component: NoticeStumanage
  Restoration: template decompiled from Vue render function; logic in sibling .logic.js
  Confidence: high for DOM structure / medium for expression quoting
-->
<template>
<q-layout view="lHh lpr lFf">
  <q-header class="bg-grey-3 text-black">
    <q-toolbar>
      <q-btn flat round dense icon="keyboard_arrow_left" @click='goBack' />
      <q-toolbar-title>
        班级协助
      </q-toolbar-title>
    </q-toolbar>
  </q-header>
  <q-page-container>
    <q-page class="bg-grey-3 q-pb-sm">
      <q-pull-to-refresh @refresh='refresh'>
        <q-card v-for="e in list" :key='e.notice_id' class="q-mb-sm q-mx-sm" :style='"border-left:0.25rem solid #" + menuColor' flat @click='checkDetail(e.notice_id)'>
          <q-item>
            <q-item-section>
              <q-item-label lines="1">
                <span class="text-bold">
                  {{ e.title }}
                </span>
              </q-item-label>
              <q-item-label caption lines="2">
                <span class="neu-css-after-colon">
                  应阅读
                </span>
                {{ e.feedback_total + "\n                  " }}
                <span class="neu-css-after-colon q-ml-lg">
                  未阅读
                </span>
                <span :class='e.no_feedback_total > 0 ? "text-red" : ""'>
                  {{ e.no_feedback_total }}
                </span>
              </q-item-label>
              <q-item-label v-show="item.confirm_flag === 1" caption lines="2">
                <span class="neu-css-after-colon">
                  应确认
                </span>
                {{ e.confirm_total + "\n                  " }}
                <span class="neu-css-after-colon q-ml-lg">
                  未确认
                </span>
                <span :class='e.no_confirm_total > 0 ? "text-red" : ""'>
                  {{ e.no_confirm_total }}
                </span>
              </q-item-label>
            </q-item-section>
            <q-item-section side>
              <q-item-label>
                <q-icon name="keyboard_arrow_right" size="xs" />
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
  </q-page-container>
</q-layout>
</template>

<script>
// The exact semantic component options are preserved in the sibling .logic.js file.
// This SFC isolates the original render tree for review and manual variable renaming.
export default {
  name: "NoticeStumanage",
};
</script>
