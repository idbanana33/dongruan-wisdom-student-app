<!--
  Source: assets/www/js/113.js -> webpack module "6822"
  Route: /teacher/signin/index
  Component: SigninIndex
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
      <q-btn flat round dense icon="search" @click='open'>
        <q-badge v-show="condCount != 0" color="orange" floating transparent>
          {{ condCount }}
        </q-badge>
      </q-btn>
    </q-toolbar>
  </q-header>
  <q-page-container>
    <q-page class="bg-grey-3 q-pb-sm">
      <q-pull-to-refresh ref=""pageRefresh"" @refresh='refresh'>
        <q-card v-for="t in list" :key='t.id' class="bg-white q-mb-sm q-mx-sm" :style='0 == t.status ? "border-left:0.25rem solid #f2c037;" : 1 == t.status ? "border-left:0.25rem solid #027be3;" : "border-left:0.25rem solid #b5b3b3;"' flat @click='goDetail(t.id, t.status)'>
          <q-item>
            <q-item-section>
              <q-item-label class="text-subtitle1 row items-center">
                {{ "\n                  " + t.title + "\n                  " }}
                <q-badge class="q-ml-xs" color="grey-5" text-color="white">
                  {{ t.signin_type_name }}
                </q-badge>
              </q-item-label>
              <q-item-label class="q-mb-xs" caption>
                <span class="neu-css-after-colon">
                  签到频率
                </span>
                {{ t.frequency_name + "\n                  " }}
                <span class="neu-css-after-colon q-ml-lg">
                  签到方式
                </span>
                {{ t.sigme_name + "\n                " }}
              </q-item-label>
              <q-item-label class="q-mb-xs" caption>
                <span class="neu-css-after-colon">
                  发起人
                </span>
                {{ t.creator + "\n                  " }}
                <span class="neu-css-after-colon q-ml-lg">
                  已/总执行次数
                </span>
                {{ t.done_count + "/" + t.total + "\n                " }}
              </q-item-label>
              <q-item-label style="min-width:250px" caption lines="1">
                <span class="neu-css-after-colon">
                  执行时间
                </span>
                {{ t.begin_time + " 至 " + t.end_time + "\n                " }}
              </q-item-label>
            </q-item-section>
            <q-item-section side>
              <q-item-label>
                <q-icon name="keyboard_arrow_right" size="xs" />
              </q-item-label>
            </q-item-section>
          </q-item>
        </q-card>
        <div v-show="!isLoading && paging.pageCount != paging.pageNum" class="text-center text-grey q-pt-sm q-pb-md" @click='getSigninList(null)'>
          加载更多...
        </div>
        <div v-show="!isLoading && paging.pageCount == paging.pageNum && list.length != 0" class="text-center text-grey q-pt-sm q-pb-md">
          没有更多了
        </div>
        <div v-show="!isLoading && list.length == 0" class="text-center text-grey q-pt-sm q-pb-md">
          {{ "\n            暂无" + menuInfo.title + "数据\n          " }}
        </div>
        <div v-show="isLoading" class="text-center text-grey q-pt-sm q-pb-md">
          <q-spinner-dots color="primary" size="md" />
        </div>
        <q-dialog v-model="dialog" position="bottom">
          <q-card style="width:350px">
            <q-linear-progress :value="1" color="primary" />
            <q-card-section class="row items-center justify-between" dense>
              <q-btn outline label="取消" color="grey" size="md" @click='close()' />
              <q-btn unelevated label="确定" color="primary" size="md" @click='getCondition' />
            </q-card-section>
            <q-separator />
            <q-list bordered>
              <q-item clickable>
                <q-item-section avatar top>
                  <span>
                    任务状态
                  </span>
                </q-item-section>
                <q-item-section>
                  <div class="row justify-evenly">
                    <q-btn v-for="t in [{ label: '进行中', value: '1' }, { label: '已结束/未进行', value: '2' }]" :key='t.value' outline :color='t.value == queryModel.status ? "primary" : "grey"' @click='getValue(t.value)'>
                      {{ "\n                      " + t.label + "\n                      " }}
                      <q-badge v-show="queryModel.status == item.value" color="orange" floating>
                        √
                      </q-badge>
                    </q-btn>
                  </div>
                </q-item-section>
              </q-item>
              <q-separator />
              <q-item v-ripple clickable>
                <q-item-section avatar top>
                  <span>
                    综合查询
                  </span>
                </q-item-section>
                <q-item-section>
                  <q-input v-model="queryModel.mutli_search" outlined clearable dense />
                  <q-item-label class="q-mt-xs" caption>
                    可以查询任务名称
                  </q-item-label>
                </q-item-section>
              </q-item>
            </q-list>
          </q-card>
        </q-dialog>
      </q-pull-to-refresh>
      <q-page-sticky v-show="menuInfo.edit_permit" position="bottom-right" :offset='fabPos'>
        <q-btn v-touch-pan.prevent.mouse.prevent.mouse="moveFab" round color="primary" icon="add" @click='addSignin' />
      </q-page-sticky>
    </q-page>
  </q-page-container>
</q-layout>
</template>

<script>
// The exact semantic component options are preserved in the sibling .logic.js file.
// This SFC isolates the original render tree for review and manual variable renaming.
export default {
  name: "SigninIndex",
};
</script>
