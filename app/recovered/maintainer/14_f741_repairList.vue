<!--
  Source: assets/www/js/14.js -> webpack module "f741"
  Route: /maintainer/repairList
  Component: repairList
  Restoration: template decompiled from Vue render function; logic in sibling .logic.js
  Confidence: high for DOM structure / medium for expression quoting
-->
<template>
<q-layout view="lHh lpr lFf">
  <q-header class="bg-grey-3 text-black">
    <q-toolbar class="row">
      <q-btn flat round dense icon="keyboard_arrow_left" @click='goBack' />
      <q-toolbar-title class="items-center">
        报修单列表
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
        <q-card v-for="e in t.repair" :key='e.id' class="bg-white q-mb-sm q-mx-sm" flat>
          <q-item>
            <q-item-section>
              <q-item-label class="text-bold" style="font-size:1.2em" lines="1">
                {{ "\n                " + e.description + "\n              " }}
              </q-item-label>
              <q-item-label>
                <span class="text-bold">
                  {{ e.repair_time }}
                </span>
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
                <span class="neu-css-after-colon text-bold">
                  报修单号
                </span>
                {{ e.order + "\n              " }}
              </q-item-label>
              <q-item-label>
                <span class="neu-css-after-colon text-bold">
                  期望上门时间
                </span>
                {{ e.visit_time + "\n              " }}
              </q-item-label>
              <q-item-label>
                <span class="neu-css-after-colon text-bold">
                  已分配
                </span>
                {{ e.maintainer_name + "\n              " }}
              </q-item-label>
              <q-item-label v-if="'3' == e.status">
                <span class="neu-css-after-colon text-bold">
                  改派人员
                </span>
                {{ e.reassignment_maintainer_name + "\n              " }}
              </q-item-label>
              <q-item-label v-if="'3' == e.status">
                <span class="neu-css-after-colon text-bold">
                  改派原因
                </span>
                {{ e.reason + "\n              " }}
              </q-item-label>
              <q-item-label v-if="'2' == e.status || '4' == e.status || '5' == e.status">
                <span class="neu-css-after-colon text-bold">
                  接单时间
                </span>
                {{ e.order_receiving_time + "\n              " }}
              </q-item-label>
              <q-item-label v-if="'4' == e.status || '5' == e.status">
                <span class="neu-css-after-colon text-bold">
                  维修完成时间
                </span>
                {{ e.completion_time + "\n              " }}
              </q-item-label>
              <q-item-label>
                <q-btn class="bg-primary q-ml-sm" style="float:right" flat unelevated color="white" label="查看详情" size="sm" @click='goDetails(e.id)' />
                <q-btn v-if="'2' == e.status" class="bg-primary q-ml-sm" style="float:right" flat unelevated color="white" label="维修" size="sm" @click='goMaintenance(e.id)' />
                <q-btn v-if="'1' == e.status" class="bg-primary q-ml-sm" style="float:right" flat unelevated color="white" label="申请改派" size="sm" @click='applyForReassignment(e.id)' />
                <q-btn v-if="'1' == e.status" class="bg-primary q-ml-sm" style="float:right" flat unelevated color="white" label="接单" size="sm" @click='receivingOrders(e.id)' />
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
      <q-dialog v-model="applyForReassignmentDialog" persistent>
        <q-card class="full-width" flat>
          <q-card-section>
            <div class="text-bold" style="font-size:1.2em">
              申请改派
            </div>
          </q-card-section>
          <q-separator />
          <q-card-section>
            <div class="text-bold neu-css-after-colon neu-css-before-red-asterisk q-mb-sm">
              改派人员
            </div>
            <q-select v-model="record.maintainer_no" emit-value map-options outlined hide-bottom-space dense lazy-rules :rules='[function (t) { return null !== t && "" !== t || "请选择改派人员"; }]' :options='maintainerList' />
          </q-card-section>
          <q-card-section>
            <div class="text-bold neu-css-after-colon neu-css-before-red-asterisk q-mb-sm">
              改派原因
            </div>
            <q-input v-model="record.reason" dense outlined hide-bottom-space placeholder="请填写该项" type="textarea" lazy-rules :rules='[function (t) { return !!t || "请填写该项"; }, function (t) { return t.length <= 200 || "最多填写200个字"; }, function (t) { return t.length >= 1 || "最少填写1个字"; }]' />
          </q-card-section>
          <q-card-section>
            <div class="row justify-end">
              <q-btn class="q-mx-sm q-px-sm" unelevated dense color="grey" label="取消" @click='cancel' />
              <q-btn class="q-px-sm" unelevated dense color="primary" label="确定" @click='submitReassignment' />
            </div>
          </q-card-section>
        </q-card>
      </q-dialog>
    </q-page>
  </q-page-container>
</q-layout>
</template>

<script>
// The exact semantic component options are preserved in the sibling .logic.js file.
// This SFC isolates the original render tree for review and manual variable renaming.
export default {
  name: "repairList",
};
</script>
