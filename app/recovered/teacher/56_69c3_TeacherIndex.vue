<!--
  Source: assets/www/js/56.js -> webpack module "69c3"
  Route: /teacher/index
  Component: TeacherIndex
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
      <q-btn v-if="achieveMenuInfo && achieveMenuInfo.view_permit" flat round dense icon="search" @click='open' />
      <q-btn flat round dense icon="mail_outline" to="/teacher/todo">
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
          {{ "您好，" + user.name + "老师" }}
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
          <q-item v-ripple clickable @click='moveTo("/teacher/basic/teaInfo")'>
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
          <q-item v-ripple clickable @click='moveTo("/teacher/achievement/index?stuNo=" + user.login_name)'>
            <q-item-section>
              综合统计
            </q-item-section>
            <q-item-section side>
              <q-icon name="keyboard_arrow_right" size="sm" />
            </q-item-section>
          </q-item>
          <q-separator class="bg-grey-3" style="height:0.5rem" />
          <q-item v-if="scanMenuInfo && scanMenuInfo.view_permit" v-ripple clickable @click='moveTo("/teacher/qrcodescanning")'>
            <q-item-section>
              信息核验
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
            <q-responsive v-for="a in Math.min((normalApps ? normalApps.length : 0) - 4 * (e - 1), 4)" :key='a' class="col" :ratio='4 / Math.min((normalApps ? normalApps.length : 0) - 4 * (e - 1), 4) / 1' @click='moveTo(normalApps[4 * (e - 1) + a - 1].link)'>
              <div class="rounded-borders q-pa-sm" :class='["bg-" + (normalApps[4 * (e - 1) + a - 1].color.background, normalApps[4 * (e - 1) + a - 1].color.background), "text-" + normalApps[4 * (e - 1) + a - 1].color.text]'>
                {{ "\n                " + normalApps[4 * (e - 1) + a - 1].title + "\n                " }}
                <q-icon class="absolute-bottom-right q-mb-sm q-mr-sm" size="sm" :name='normalApps[4 * (e - 1) + a - 1].icon' />
              </div>
            </q-responsive>
          </div>
        </div>
      </q-pull-to-refresh>
      <q-dialog v-model="dialog" position="bottom">
        <q-card style="width:350px">
          <q-linear-progress :value="1" color="primary" />
          <q-item class="q-my-sm">
            <q-item-section>
              <q-input v-model="stuNo" outlined dense placeholder="请准确输入学号/教工号或姓名。" clearable filled hide-bottom-space lazy-rules :rules='[function (t) { return t && t.length > 1 || "请至少输入两个字符"; }]' />
            </q-item-section>
            <q-item-section side>
              <q-btn unelevated label="确定" color="primary" size="md" @click='goExperience' />
            </q-item-section>
          </q-item>
        </q-card>
      </q-dialog>
      <q-dialog v-model="dialog" position="bottom">
        <q-card style="width:350px">
          <q-linear-progress :value="1" color="primary" />
          <q-item class="q-my-sm">
            <q-item-section>
              <q-input v-model="stuNo" outlined dense placeholder="请准确输入学号/教工号或姓名。" clearable filled hide-bottom-space lazy-rules :rules='[function (t) { return t && t.length > 1 || "请至少输入两个字符"; }]' />
            </q-item-section>
            <q-item-section side>
              <q-btn unelevated label="确定" color="primary" size="md" @click='getMessage' />
            </q-item-section>
          </q-item>
        </q-card>
      </q-dialog>
      <q-dialog v-model="message">
        <q-card class="full-width" flat>
          <q-card-section class="row items-center justify-between">
            <div class="text-bold">
              请选择要查看的人员
            </div>
            <q-btn v-close-popup icon="close" flat round dense size="sm" />
          </q-card-section>
          <q-separator />
          <q-item clickable>
            <q-item-section>
              <q-item-label>
                <q-radio v-for="(e, a) in messageList" v-model="stuNo" :key='a' class="q-mr-sm" keep-color :val='e.login_name' :label='e.name + "(" + e.role_name + "/" + e.login_name + ")"' @input='goExperience(e.role_type)' />
              </q-item-label>
            </q-item-section>
          </q-item>
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
  name: "TeacherIndex",
};
</script>
