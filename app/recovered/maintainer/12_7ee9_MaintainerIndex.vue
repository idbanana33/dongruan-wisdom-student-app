<!--
  Source: assets/www/js/12.js -> webpack module "7ee9"
  Route: /maintainer/index
  Component: MaintainerIndex
  Restoration: template decompiled from Vue render function; logic in sibling .logic.js
  Confidence: high for DOM structure / medium for expression quoting
-->
<template>
<q-layout view="lHh lpr lFf">
  <q-header class="bg-grey-3 text-black">
    <q-toolbar>
      <q-btn flat round dense icon="reorder" @click='drawer = !drawer' />
      <q-toolbar-title>
        智慧学工
      </q-toolbar-title>
      <q-btn flat round dense icon="mail_outline" to="/maintainer/todo">
        <q-badge v-show="badgeCount != 0" color="red" floating rounded>
          {{ badgeCount > 99 ? "···" : badgeCount }}
        </q-badge>
      </q-btn>
    </q-toolbar>
  </q-header>
  <q-drawer v-model="drawer" :width="250" overlay bordered content-class="bg-grey-3">
    <q-scroll-area class="fit">
      <div class="row q-ma-md">
        <span style="font-size:17px">
          {{ "您好，" + user.name + " 维修师" }}
        </span>
      </div>
      <q-card class="q-ma-sm" flat>
        <q-list>
          <q-item v-ripple clickable @click='moveTo("/user/account")'>
            <q-item-section>
              账号安全
            </q-item-section>
            <q-item-section side>
              <q-icon name="keyboard_arrow_right" size="sm" />
            </q-item-section>
          </q-item>
          <q-separator class="bg-grey-3" style="height:0.5rem" />
          <q-item clickable @click='checkVersion'>
            <q-item-section class="text-center">
              检查新版本
            </q-item-section>
          </q-item>
          <q-separator class="bg-grey-3" style="height:0.5rem" />
          <q-item clickable @click='logout'>
            <q-item-section class="text-center text-red">
              退出当前帐号
            </q-item-section>
          </q-item>
        </q-list>
      </q-card>
    </q-scroll-area>
    <div class="text-grey text-center absolute-bottom q-mb-xs">
      <div>
        <span class="text-primary" @click='moveTo("/policy/termsOfUse")'>
          用户协议
        </span>
        <span class="text-grey">
          |
        </span>
        <span class="text-primary" @click='moveTo("/policy/privacyPolicy")'>
          隐私政策
        </span>
      </div>
      <div>
        {{ title + " v" + appVer }}
      </div>
    </div>
  </q-drawer>
  <q-page-container>
    <q-page class="bg-grey-3">
      <q-card class="full-width row text-white q-pb-lg" style="background-color:#5290FF" flat>
        <q-card-section class="full-width row" avatar>
          <div class="col-9 q-mt-md">
            <span class="text-weight-bold" style="font-size:2em">
              {{ record.name }}
            </span>
          </div>
          <div class="col-3 q-mt-sm row" @click='repairList'>
            <q-icon class="full-width justify-end q-pr-md" name="handyman" size="lg" />
            <span class="full-width text-bold text-right q-pr-sm" style="font-size:1.5em">
              报修单
            </span>
          </div>
        </q-card-section>
        <q-card-section class="full-width row" avatar>
          <div class="col-12 q-mb-sm">
            <span class="text-bold neu-css-after-colon" style="font-size:1.5em">
              所属部门
            </span>
            <span style="font-size:1.5em">
              {{ record.dep_name }}
            </span>
          </div>
          <div class="col-12 q-mt-sm">
            <span class="text-bold neu-css-after-colon" style="font-size:1.5em">
              联系电话
            </span>
            <span style="font-size:1.5em">
              {{ record.mob }}
            </span>
          </div>
        </q-card-section>
        <q-card-section class="q-mb-sm" />
      </q-card>
      <div class="flex flex-center" style="margin-top:-3rem">
        <q-card class="row" style="width:90%;border-radius:15px" flat>
          <q-card-section class="full-width row justify-around" avatar>
            <div class="col-12 q-mt-sm">
              <span class="text-bold" style="font-size:1.3em">
                综合统计
              </span>
            </div>
          </q-card-section>
          <q-card-section class="full-width row justify-around q-mb-sm" avatar>
            <div class="col-4 text-center">
              <div class="q-mb-sm">
                <span class="text-weight-bold" style="font-size:1.8em">
                  {{ record.today_order_num + "单" }}
                </span>
              </div>
              <span class="text-grey">
                今日接单
              </span>
            </div>
            <div class="col-4 text-center">
              <div class="q-mb-sm">
                <span class="text-weight-bold" style="font-size:1.8em">
                  {{ record.all_order_num + "单" }}
                </span>
              </div>
              <span class="text-grey">
                完成报修单
              </span>
            </div>
            <div class="col-4 text-center">
              <div class="q-mb-sm">
                <span class="text-weight-bold" style="font-size:1.8em">
                  {{ record.mark_mean_num + "星" }}
                </span>
              </div>
              <span class="text-grey">
                评价星级
              </span>
            </div>
          </q-card-section>
        </q-card>
      </div>
    </q-page>
  </q-page-container>
</q-layout>
</template>

<script>
// The exact semantic component options are preserved in the sibling .logic.js file.
// This SFC isolates the original render tree for review and manual variable renaming.
export default {
  name: "MaintainerIndex",
};
</script>
