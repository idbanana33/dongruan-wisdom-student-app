<!--
  Source: assets/www/js/115.js -> webpack module "92f0"
  Route: /teacher/signin/signinExperience
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
        {{ stuName + "的签到记录" }}
      </q-toolbar-title>
      <q-btn flat round dense icon="get_app" @click='exportList' />
    </q-toolbar>
  </q-header>
  <q-page-container>
    <q-page class="bg-grey-3 q-pb-sm">
      <q-pull-to-refresh @refresh='refresh'>
        <q-card v-for="e in list" :key='e.id' class="bg-white q-mb-sm q-mx-sm" :style='1 == e.status ? "border-left:0.25rem solid #c10015;" : 2 == e.status ? "border-left:0.25rem solid #21ba45;" : "border-left:0.25rem solid #027be3;"' flat>
          <q-item>
            <q-item-section>
              <q-item-label class="text-subtitle1 row items-center">
                {{ "\n                  " + e.title + "\n                  " }}
                <q-badge class="q-ml-xs" color="grey-5" text-color="white">
                  {{ e.signin_type_name }}
                </q-badge>
              </q-item-label>
              <q-item-label class="q-mb-xs" caption>
                <span class="neu-css-after-colon">
                  签到频率
                </span>
                {{ e.label + "\n                  " }}
                <span class="neu-css-after-colon q-ml-lg">
                  签到方式
                </span>
                {{ e.signin_method_name + "\n                " }}
              </q-item-label>
              <q-item-label class="q-mb-xs" caption>
                <span class="neu-css-after-colon">
                  发起人
                </span>
                {{ e.name + "\n                " }}
              </q-item-label>
              <q-item-label class="q-mb-xs" caption>
                <span v-show="item.status == '2'" class="text-positive">
                  已签到
                </span>
                <span v-show="item.status == '2'" class="text-positive q-ml-sm">
                  {{ e.signin_time }}
                </span>
                <span v-show="item.status == '1'" class="text-red">
                  未签到
                </span>
                <span v-show="item.status == '3'" class="text-primary">
                  已请假
                </span>
              </q-item-label>
              <q-item-label style="min-width:250px" caption lines="1">
                <span class="neu-css-after-colon">
                  签到时间段
                </span>
                {{ e.begin_time + " 至 " + e.end_time + "\n                " }}
              </q-item-label>
            </q-item-section>
          </q-item>
          <div v-show="item.status == 1" class="absolute-right q-mr-xl q-mt-lg" style="width:50px;height:50px" :style='"background: url(" + nosigninImage + ") no-repeat;"' />
          <div v-show="item.status == 3" class="absolute-right q-mr-xl q-mt-lg" style="width:50px;height:50px" :style='"background: url(" + timeoffImage + ") no-repeat;"' />
        </q-card>
        <div v-show="!isLoading && paging.pageCount != paging.pageNum" class="text-center text-grey q-pt-sm q-pb-md" @click='getStuSigninMessageDetail(null)'>
          加载更多...
        </div>
        <div v-show="!isLoading && paging.pageCount == paging.pageNum && list.length != 0" class="text-center text-grey q-pt-sm q-pb-md">
          没有更多了
        </div>
        <div v-show="!isLoading && list.length == 0" class="text-center text-grey q-pt-sm q-pb-md">
          暂无签到记录
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
