<!--
  Source: assets/www/js/63.js -> webpack module "64e7"
  Route: /teacher/apply/applyExperience
  Component: applyExperience
  Restoration: template decompiled from Vue render function; logic in sibling .logic.js
  Confidence: high for DOM structure / medium for expression quoting
-->
<template>
<q-layout view="lHh lpr lFf">
  <q-header class="bg-grey-3 text-black">
    <q-toolbar>
      <q-btn flat round dense icon="keyboard_arrow_left" @click='goBack' />
      <q-toolbar-title v-if="menuInfo">
        {{ stuName + "的" + menuInfo.title + "记录" }}
      </q-toolbar-title>
      <q-btn flat round dense icon="get_app" @click='exportList' />
    </q-toolbar>
  </q-header>
  <q-page-container>
    <q-page class="bg-grey-3 q-pb-sm">
      <q-pull-to-refresh @refresh='refresh'>
        <q-card v-for="e in list" :key='e.id' class="bg-white q-mb-sm q-mx-sm" :style='0 == e.apply_status ? "border-left:0.25rem solid #c10015;" : 1 == e.apply_status ? "border-left:0.25rem solid #21ba45;" : "border-left:0.25rem solid #027be3;"' flat @click='getDetail(e, 0)'>
          <q-item>
            <q-item-section>
              <q-item-label class="text-subtitle1 row items-center">
                {{ e.title }}
              </q-item-label>
              <q-item-label class="q-mb-xs" caption>
                <span class="neu-css-after-colon">
                  发起人
                </span>
                {{ e.teacher_name + "\n              " }}
              </q-item-label>
              <q-item-label class="q-mb-xs" caption>
                <span class="neu-css-after-colon">
                  创建时间
                </span>
                {{ e.create_time + "\n              " }}
              </q-item-label>
              <q-item-label v-show="item.apply_time != null" class="q-mb-xs" caption>
                <span class="neu-css-after-colon">
                  {{ applyShortTitle + "时间" }}
                </span>
                {{ e.apply_time + "\n              " }}
              </q-item-label>
              <q-item-label style="min-width:250px" caption lines="1">
                <span class="neu-css-after-colon" style="font-size:12px">
                  有效时间
                </span>
                <span style="font-size:12px">
                  {{ e.begin_time + " 至 " + e.end_time }}
                </span>
              </q-item-label>
            </q-item-section>
          </q-item>
          <div v-show="item.apply_time == null" class="absolute-right q-mr-xl q-mt-sm" style="width:50px;height:50px" :style='"background: url(" + undoImage + ") no-repeat;"' />
        </q-card>
        <div v-show="!isLoading && paging.pageCount != paging.pageNum" class="text-center text-grey q-pt-sm q-pb-md" @click='loadList(null)'>
          加载更多...
        </div>
        <div v-show="!isLoading && paging.pageCount == paging.pageNum && list.length != 0" class="text-center text-grey q-pt-sm q-pb-md">
          没有更多了
        </div>
        <div v-show="!isLoading && list.length == 0" class="text-center text-grey q-pt-sm q-pb-md">
          {{ "\n          暂无" + menuInfo.title + "数据\n        " }}
        </div>
        <div v-show="isLoading" class="text-center text-grey q-pt-sm q-pb-md">
          <q-spinner-dots color="primary" size="md" />
        </div>
      </q-pull-to-refresh>
      <q-dialog v-model="infoResultDialog" :maximized='maximizedToggle'>
        <q-card class="full-width" flat>
          <q-card-section class="row items-center justify-between">
            <div class="text-h6">
              {{ record.title }}
            </div>
            <span :class='0 == record.writeStatus ? "text-red" : "text-blue"'>
              {{ 0 == record.writeStatus ? "未" + applyShortTitle : "已" + applyShortTitle }}
            </span>
            <q-btn v-close-popup icon="close" flat round dense size="sm" />
          </q-card-section>
          <q-card-section>
            <div class="row q-gutter-md">
              <span>
                {{ record.timeSlot }}
              </span>
            </div>
            <div v-for="(e, i) in record.info_config" :key='i' class="bg-grey-2 q-pa-sm q-mt-sm">
              <neu-widget :config='e' :value='record.infoResult[i]' :no='i + 1' :viewMode='true' />
            </div>
          </q-card-section>
        </q-card>
      </q-dialog>
      <neu-export-data :config='exportCompConfig' />
    </q-page>
  </q-page-container>
</q-layout>
</template>

<script>
// The exact semantic component options are preserved in the sibling .logic.js file.
// This SFC isolates the original render tree for review and manual variable renaming.
export default {
  name: "applyExperience",
};
</script>
