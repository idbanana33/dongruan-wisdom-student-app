<!--
  Source: assets/www/js/19.js -> webpack module "500e"
  Route: /student/index
  Component: StudentIndex
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
      <q-btn flat round dense icon="mail_outline" to="/student/todo">
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
          {{ "您好，" + user.name + "同学" }}
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
          <q-item v-ripple clickable @click='moveTo("/student/basic/stuInfo")'>
            <q-item-section>
              我的信息
            </q-item-section>
            <q-item-section side>
              <q-icon name="keyboard_arrow_right" size="sm" />
            </q-item-section>
          </q-item>
          <q-separator class="bg-grey-3" style="height:0.5rem" />
          <q-item v-ripple clickable @click='moveTo("/user/qrCode")'>
            <q-item-section>
              我的二维码
            </q-item-section>
            <q-item-section side>
              <q-icon name="keyboard_arrow_right" size="sm" />
            </q-item-section>
          </q-item>
          <q-separator class="bg-grey-3" style="height:0.5rem" />
          <q-item v-ripple clickable @click='goExperience'>
            <q-item-section>
              综合统计
            </q-item-section>
            <q-item-section side>
              <q-icon name="keyboard_arrow_right" size="sm" />
            </q-item-section>
          </q-item>
          <q-separator class="bg-grey-3" style="height:0.5rem" />
          <q-item v-ripple clickable @click='moveTo("/user/passport?direction=in")'>
            <q-item-section>
              入校通行卡
            </q-item-section>
            <q-item-section side>
              <q-icon name="keyboard_arrow_right" size="sm" />
            </q-item-section>
          </q-item>
          <q-separator class="bg-grey-3" style="height:0.5rem" />
          <q-item v-ripple clickable @click='moveTo("/user/passport?direction=out")'>
            <q-item-section>
              离校通行卡
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
      <q-card v-if="newsInfo && newsInfo.view_permit && 0 !== newslist.length" class="q-px-sm q-pb-xs bg-grey-3" flat>
        <q-item class="text-white" :style='"background-color: #" + menuColor + ";"'>
          <q-item-section avatar>
            <q-icon size="sm" name="mdi-trumpet" />
          </q-item-section>
          <q-item-section @click='toNews(newslist[topId].id, newslist[topId].link)'>
            {{ "\n            " + newstitle + "\n          " }}
          </q-item-section>
        </q-item>
      </q-card>
      <q-pull-to-refresh @refresh='refreshMenu'>
        <div v-if="topApps" class="q-px-sm q-py-xs">
          <div class="row items-start q-gutter-sm">
            <q-responsive class="col" :ratio="1" @click='moveTo(topApps[0].link)'>
              <div class="rounded-borders q-pa-sm" :class='["bg-" + (topApps[0].color.background, topApps[0].color.background), "text-" + topApps[0].color.text]'>
                {{ "\n                " + topApps[0].title + "\n                " }}
                <q-icon class="absolute-bottom-right q-mb-sm q-mr-sm" size="xl" :name='topApps[0].icon' />
              </div>
            </q-responsive>
            <q-responsive class="col" :ratio="1">
              <div class="column justify-between">
                <div class="col row">
                  <q-responsive class="col" :ratio="2" @click='moveTo(topApps[1].link)'>
                    <div class="rounded-borders q-pa-sm" :class='["bg-" + (topApps[1].color.background, topApps[1].color.background), "text-" + topApps[1].color.text]'>
                      {{ "\n                      " + topApps[1].title + "\n                      " }}
                      <q-icon class="absolute-bottom-right q-mb-sm q-mr-sm" size="sm" :name='topApps[1].icon' />
                    </div>
                  </q-responsive>
                </div>
                <div class="col row q-mt-sm">
                  <q-responsive class="col" :ratio="1" @click='moveTo(topApps[2].link)'>
                    <div class="rounded-borders q-pa-sm" :class='["bg-" + (topApps[2].color.background, topApps[2].color.background), "text-" + topApps[2].color.text]'>
                      {{ "\n                      " + topApps[2].title + "\n                      " }}
                      <q-icon class="absolute-bottom-right q-mb-sm q-mr-sm" size="sm" :name='topApps[2].icon' />
                    </div>
                  </q-responsive>
                  <q-responsive class="col q-ml-sm" :ratio="1" @click='moveTo(topApps[3].link)'>
                    <div class="rounded-borders q-pa-sm" :class='["bg-" + (topApps[3].color.background, topApps[3].color.background), "text-" + topApps[3].color.text]'>
                      {{ "\n                      " + topApps[3].title + "\n                      " }}
                      <q-icon class="absolute-bottom-right q-mb-sm q-mr-sm" size="sm" :name='topApps[3].icon' />
                    </div>
                  </q-responsive>
                </div>
              </div>
            </q-responsive>
          </div>
        </div>
        <div v-for="e in Math.ceil((normalApps ? normalApps.length : 0) / 4)" :key='e' class="q-px-sm q-py-xs">
          <div class="row items-start q-gutter-sm">
            <q-responsive v-for="o in Math.min((normalApps ? normalApps.length : 0) - 4 * (e - 1), 4)" :key='o' class="col" :ratio='4 / Math.min((normalApps ? normalApps.length : 0) - 4 * (e - 1), 4) / 1' @click='moveTo(normalApps[4 * (e - 1) + o - 1].link)'>
              <div class="rounded-borders q-pa-sm" :class='["bg-" + (normalApps[4 * (e - 1) + o - 1].color.background, normalApps[4 * (e - 1) + o - 1].color.background), "text-" + normalApps[4 * (e - 1) + o - 1].color.text]'>
                {{ "\n                " + normalApps[4 * (e - 1) + o - 1].title + "\n                " }}
                <q-icon class="absolute-bottom-right q-mb-sm q-mr-sm" size="sm" :name='normalApps[4 * (e - 1) + o - 1].icon' />
              </div>
            </q-responsive>
          </div>
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
  name: "StudentIndex",
};
</script>
