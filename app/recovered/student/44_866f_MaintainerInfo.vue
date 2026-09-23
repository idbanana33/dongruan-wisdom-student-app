<!--
  Source: assets/www/js/44.js -> webpack module "866f"
  Route: /student/repair/maintainerInfo
  Component: MaintainerInfo
  Restoration: template decompiled from Vue render function; logic in sibling .logic.js
  Confidence: high for DOM structure / medium for expression quoting
-->
<template>
<q-layout view="lHh lpr lFf">
  <q-header class="bg-grey-3 text-black">
    <q-toolbar>
      <q-btn flat round dense icon="keyboard_arrow_left" @click='goBack' />
      <q-toolbar-title>
        个人主页
      </q-toolbar-title>
    </q-toolbar>
  </q-header>
  <q-page-container>
    <q-page class="bg-grey-3">
      <q-card class="full-width row q-mt-sm" flat>
        <q-card-section class="full-width row justify-around" avatar>
          <div class="col-12">
            <span>
              姓名：
            </span>
            <span class="text-weight-bold" style="font-size:16px">
              {{ details.name }}
            </span>
          </div>
          <div class="col-12 q-mt-sm">
            <span>
              所属部门：
            </span>
            <span>
              {{ details.dep_name }}
            </span>
          </div>
          <div class="col-12 q-mt-sm">
            <span>
              联系电话：
            </span>
            <span>
              {{ details.mob }}
            </span>
          </div>
          <div class="col-12 q-mt-sm" style="margin-top:10%">
            <span style="font-size:18px">
              综合统计
            </span>
          </div>
          <div class="col-12 q-mt-sm row" style="margin-top:2%">
            <div class="col-4 q-mt-sm text-center">
              <span class="text-grey">
                今日接单
              </span>
              <p>
                <span class="text-weight-bold" style="font-size:18px">
                  {{ details.today_order_num + "单" }}
                </span>
              </p>
            </div>
            <div class="col-4 q-mt-sm text-center">
              <span class="text-grey">
                完成报修单
              </span>
              <p>
                <span class="text-weight-bold" style="font-size:18px">
                  {{ details.all_order_num + "单" }}
                </span>
              </p>
            </div>
            <div class="col-4 q-mt-sm text-center">
              <span class="text-grey">
                评价星级
              </span>
              <p>
                <span class="text-weight-bold" style="font-size:18px">
                  {{ details.mark_mean_num + "星" }}
                </span>
              </p>
            </div>
          </div>
        </q-card-section>
      </q-card>
    </q-page>
  </q-page-container>
</q-layout>
</template>

<script>
// The exact semantic component options are preserved in the sibling .logic.js file.
// This SFC isolates the original render tree for review and manual variable renaming.
export default {
  name: "MaintainerInfo",
};
</script>
