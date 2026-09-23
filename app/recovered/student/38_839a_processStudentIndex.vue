<!--
  Source: assets/www/js/38.js -> webpack module "839a"
  Route: /student/process/index
  Component: processStudentIndex
  Restoration: template decompiled from Vue render function; logic in sibling .logic.js
  Confidence: high for DOM structure / medium for expression quoting
-->
<template>
<q-layout view="lHh lpr lFf">
  <q-header class="bg-grey-3 text-black">
    <q-toolbar>
      <q-btn flat round dense icon="keyboard_arrow_left" @click='goBack' />
      <q-toolbar-title>
        {{ "我的" + menuInfo.title + "申请" }}
      </q-toolbar-title>
    </q-toolbar>
  </q-header>
  <q-pull-to-refresh ref=""pageRefresh"" @refresh='refresh'>
    <q-page-container>
      <q-page class="bg-grey-3 q-py-sm">
        <q-card v-for="t in list" :key='t.id' class="bg-white q-mb-sm q-mx-sm" :style='"W" == t.review_status ? "border-left:0.25rem solid #77ac98;" : "A" == t.review_status ? "border-left:0.25rem solid #" + menuColor + ";" : "border-left:0.25rem solid #d71345;"' flat @click='goDetail(t.id)'>
          <q-item>
            <q-item-section>
              <q-item-label class="q-mb-xs" caption>
                <span class="neu-css-after-colon">
                  流程名称
                </span>
                {{ t.process_type_name + "\n                  " }}
              </q-item-label>
              <q-item-label v-if="'G' === service_flag" style="min-width:250px" caption lines="1">
                <span class="text-grey" style="font-size:0.8rem">
                  {{ 0 == t.into_campus && 0 == t.out_campus ? "不需要核验" : 1 == t.into_campus && 1 == t.out_campus ? "需要入校、离校核验" : 1 == t.into_campus ? "需要入校核验" : "需要离校核验" + " " }}
                </span>
              </q-item-label>
              <q-item-label style="min-width:250px" caption lines="1">
                <span class="neu-css-after-colon ">
                  提交日期
                </span>
                {{ t.create_time + "\n                  " }}
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
          暂无流程申请
        </div>
        <div v-show="isLoading" class="text-center text-grey q-pt-sm q-pb-md">
          <q-spinner-dots color="primary" size="md" />
        </div>
      </q-page>
    </q-page-container>
  </q-pull-to-refresh>
  <q-page-sticky position="bottom-right" :offset='fabPos'>
    <q-btn v-touch-pan.prevent.mouse.prevent.mouse="moveFab" round color="primary" icon="add" @click='addClick' />
  </q-page-sticky>
</q-layout>
</template>

<script>
// The exact semantic component options are preserved in the sibling .logic.js file.
// This SFC isolates the original render tree for review and manual variable renaming.
export default {
  name: "processStudentIndex",
};
</script>
