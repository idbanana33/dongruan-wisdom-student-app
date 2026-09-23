<!--
  Source: assets/www/js/16.js -> webpack module "b6c5"
  Route: /maintainer/todo
  Component: StudentTodo
  Restoration: template decompiled from Vue render function; logic in sibling .logic.js
  Confidence: high for DOM structure / medium for expression quoting
-->
<template>
<q-layout view="lHh lpr lFf">
  <q-header class="bg-grey-3 text-black">
    <q-toolbar>
      <q-btn flat round dense icon="keyboard_arrow_left" @click='goBack' />
      <q-toolbar-title>
        未读消息
      </q-toolbar-title>
      <q-item-label v-show="list.length != 0" caption @click='clearList'>
        清除
      </q-item-label>
    </q-toolbar>
  </q-header>
  <q-page-container>
    <q-page class="bg-grey-3 q-pb-sm">
      <q-pull-to-refresh @refresh='refresh'>
        <q-card v-for="e in list" :key='e.id' class="bg-white q-mb-sm q-mx-sm" :style='"border-left:0.25rem solid #" + getMenuColor(e.menu_id)' flat>
          <q-item v-ripple clickable @click='goDetail(e.id, e.link)'>
            <q-item-section>
              <q-item-label lines="1">
                {{ e.title }}
              </q-item-label>
              <q-item-label caption lines="2">
                {{ "\n                " + e.message + "\n              " }}
              </q-item-label>
            </q-item-section>
            <q-item-section side top>
              <q-item-label caption>
                {{ "\n                " + e.days > 1 ? e.push_date : 1 == e.days ? e.days + "天前" : 0 != e.hours ? e.hours + "小时前" : 0 != e.mins ? e.mins + "分钟前" : "刚刚" + "\n              " }}
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
          暂无未读消息
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
  name: "StudentTodo",
};
</script>
