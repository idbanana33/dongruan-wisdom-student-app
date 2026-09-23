<!--
  Source: assets/www/js/43.js -> webpack module "8a70"
  Route: /student/repair/index
  Component: RepairIndex
  Restoration: template decompiled from Vue render function; logic in sibling .logic.js
  Confidence: high for DOM structure / medium for expression quoting
-->
<template>
<q-layout view="lHh lpr lFf">
  <q-header class="bg-grey-3 text-black">
    <q-toolbar>
      <q-btn flat round dense icon="keyboard_arrow_left" @click='goBack' />
      <q-toolbar-title>
        报修
      </q-toolbar-title>
    </q-toolbar>
  </q-header>
  <q-page-container>
    <q-page class="bg-grey-3">
      <q-card-section>
        <q-tabs v-model="checkStatus" dense align="justify" indicator-color="primary" active-color="primary">
          <q-tab name="-1" label="全部" />
          <q-tab v-for="t in statusOption" :key='t.value' :name='t.value' :label='t.label' />
        </q-tabs>
      </q-card-section>
      <q-pull-to-refresh ref=""pageRefresh"" @refresh='refresh'>
        <q-card v-for="e in repair" :key='e.id' class="bg-white q-mb-sm q-mx-sm" flat>
          <q-item>
            <q-item-section>
              <q-item-label style="font-size:16px;max-width:100%;overflow:hidden;text-overflow:ellipsis;white-space:nowrap">
                {{ "\n                " + e.description + "\n              " }}
              </q-item-label>
              <q-item-label>
                {{ "\n                " + e.repair_time + "\n                " }}
                <q-chip style="max-width:40%" square color="grey-4" text-color="black" size="sm">
                  <span style="max-width:100%;overflow:hidden;text-overflow:ellipsis;white-space:nowrap">
                    {{ e.repair_type_name }}
                  </span>
                </q-chip>
                <q-chip square color="grey-4" text-color="black" size="sm">
                  {{ "\n                  " + e.statusinfo + "\n                " }}
                </q-chip>
              </q-item-label>
              <q-item-label>
                {{ "\n                报修单号：" + e.order + "\n              " }}
              </q-item-label>
              <q-item-label>
                {{ "\n                期望上门时间：" + e.visit_time + "\n              " }}
              </q-item-label>
              <q-item-label v-if="'0' == e.status">
                接单人：————
              </q-item-label>
              <q-item-label v-if="'1' == e.status">
                {{ "\n                已分配：" + e.maintainer_name + "\n              " }}
              </q-item-label>
              <q-item-label v-if="'0' != e.status && '1' != e.status && 6 != e.status">
                {{ "\n                接单人：" + e.maintainer_name + "\n              " }}
              </q-item-label>
              <q-item-label v-if="'0' != e.status && '1' != e.status && 6 != e.status">
                {{ "\n                接单时间：" + e.order_receiving_time + "\n              " }}
              </q-item-label>
              <q-item-label v-if="'0' != e.status && '1' != e.status && 6 != e.status">
                {{ "\n                维修完成时间：" + e.completion_time + "\n              " }}
              </q-item-label>
              <q-item-label>
                <q-btn class="bg-primary" style="float:right;margin-left:5px" flat unelevated color="white" label="查看详情" @click='goDetails(e.id)' />
                <q-btn v-if="'0' == e.status" class="bg-primary" style="float:right" flat unelevated color="white" label="编辑" @click='update(e.id)' />
              </q-item-label>
            </q-item-section>
          </q-item>
        </q-card>
        <div v-show="!isLoading && paging.pageCount != paging.pageNum" class="text-center text-grey q-pt-sm q-pb-md" @click='loadRepairList(null)'>
          加载更多...
        </div>
        <div v-show="!isLoading && paging.pageCount == paging.pageNum && repair.length != 0" class="text-center text-grey q-pt-sm q-pb-md">
          没有更多了
        </div>
        <div v-show="!isLoading && repair.length == 0" class="text-center text-grey q-pt-sm q-pb-md">
          暂无报修
        </div>
        <div v-show="isLoading" class="text-center text-grey q-pt-sm q-pb-md">
          <q-spinner-dots color="primary" size="md" />
        </div>
      </q-pull-to-refresh>
      <q-page-sticky position="bottom-right" :offset='fabPos'>
        <q-btn v-touch-pan.prevent.mouse.prevent.mouse="moveFab" round color="primary" icon="add" @click='onClick' />
      </q-page-sticky>
    </q-page>
  </q-page-container>
</q-layout>
</template>

<script>
// The exact semantic component options are preserved in the sibling .logic.js file.
// This SFC isolates the original render tree for review and manual variable renaming.
export default {
  name: "RepairIndex",
};
</script>
