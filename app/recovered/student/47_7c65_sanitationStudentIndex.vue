<!--
  Source: assets/www/js/47.js -> webpack module "7c65"
  Route: /student/sanitation/index
  Component: sanitationStudentIndex
  Restoration: template decompiled from Vue render function; logic in sibling .logic.js
  Confidence: high for DOM structure / medium for expression quoting
-->
<template>
<q-layout view="lHh lpr lFf">
  <q-header class="bg-grey-3 text-black">
    <q-toolbar>
      <q-btn flat round dense icon="keyboard_arrow_left" @click='goBack' />
      <q-toolbar-title>
        寝室检查
      </q-toolbar-title>
      <q-btn flat round dense icon="search" @click='open'>
        <q-badge v-show="condCount != 0" color="orange" floating transparent>
          {{ condCount }}
        </q-badge>
      </q-btn>
    </q-toolbar>
  </q-header>
  <q-pull-to-refresh ref=""pageRefresh"" @refresh='refresh'>
    <q-page-container>
      <q-page class="bg-grey-3 q-pb-sm">
        <q-card v-for="e in list" :key='e.id' class="bg-white q-mb-sm q-mx-sm" :style='"0" == e.status_color ? "border-left:0.25rem solid #f2c037;" : "1" == e.status_color ? "border-left:0.25rem solid #" + menuColor + ";" : "border-left:0.25rem solid #b5b3b3;"' flat @click='goDetail(e.sanitation_id, e.sanitation_result_id)'>
          <q-item>
            <q-item-section>
              <q-item-label class="q-mb-xs" caption>
                <span class="neu-css-after-colon">
                  检查教师
                </span>
                {{ e.name + "\n                  " }}
              </q-item-label>
              <q-item-label style="min-width:250px" caption lines="1">
                <span class="neu-css-after-colon ">
                  检查日期
                </span>
                {{ e.check_date + "\n                  " }}
              </q-item-label>
              <q-item-label v-if="null === e.edit_time" style="min-width:250px" caption lines="1">
                <span class="neu-css-after-colon ">
                  提交时间
                </span>
                {{ e.create_time + "\n                  " }}
              </q-item-label>
              <q-item-label v-if="null !== e.edit_time" style="min-width:250px" caption lines="1">
                <span class="neu-css-after-colon ">
                  提交时间
                </span>
                {{ e.edit_time + "\n                  " }}
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
          暂无寝室检查结果
        </div>
        <div v-show="isLoading" class="text-center text-grey q-pt-sm q-pb-md">
          <q-spinner-dots color="primary" size="md" />
        </div>
      </q-page>
    </q-page-container>
  </q-pull-to-refresh>
  <q-dialog v-model="dialog" position="bottom">
    <q-card style="width:350px">
      <q-linear-progress :value="1" color="primary" />
      <q-card-section class="row items-center justify-between" dense>
        <q-btn outline label="取消" color="grey" size="md" @click='close()' />
        <q-btn unelevated label="确定" color="primary" size="md" @click='getCondition' />
      </q-card-section>
      <q-separator />
      <q-list bordered>
        <q-item v-ripple clickable>
          <q-item-section avatar top>
            <span>
              综合查询
            </span>
          </q-item-section>
          <q-item-section>
            <q-input v-model="queryModel.mutli_search" outlined clearable dense />
            <q-item-label class="q-mt-xs" caption>
              可以查询检查老师
            </q-item-label>
          </q-item-section>
        </q-item>
      </q-list>
    </q-card>
  </q-dialog>
</q-layout>
</template>

<script>
// The exact semantic component options are preserved in the sibling .logic.js file.
// This SFC isolates the original render tree for review and manual variable renaming.
export default {
  name: "sanitationStudentIndex",
};
</script>
