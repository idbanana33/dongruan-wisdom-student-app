<!--
  Source: assets/www/js/89.js -> webpack module "2a54"
  Route: /teacher/message/messageDetail
  Component: MessageDetail
  Restoration: template decompiled from Vue render function; logic in sibling .logic.js
  Confidence: high for DOM structure / medium for expression quoting
-->
<template>
<q-layout view="lHh lpr lFf">
  <q-header class="bg-grey-3 text-black">
    <q-toolbar>
      <q-btn flat round dense icon="keyboard_arrow_left" @click='goCollect' />
      <q-toolbar-title v-if="menuInfo">
        {{ menuInfo.title + "详情" }}
      </q-toolbar-title>
    </q-toolbar>
  </q-header>
  <q-page-container>
    <q-page class="bg-grey-3">
      <q-card class="full-width row" flat>
        <q-card-section v-if="null != record.message_time" class="full-width row justify-center bg-positive text-white" style="height:4rem;font-size:1.5rem">
          <q-icon name="done" size="2rem" />
          {{ menuInfo.title + "成功\n        " }}
        </q-card-section>
        <q-card-section v-if="null == record.message_time && 0 == record.judgeend" class="full-width row justify-center bg-red text-white" style="height:4rem;font-size:1.5rem">
          <q-icon name="clear" size="2rem" />
          {{ "未进行" + menuInfo.title + "\n        " }}
        </q-card-section>
        <q-card-section v-if="null == record.message_time && 0 == record.judgebegin" class="full-width row justify-center bg-warning text-white" style="height:4rem;font-size:1.5rem">
          <q-icon name="warning" size="2rem" />
          {{ "未到" + menuInfo.title + "时间\n        " }}
        </q-card-section>
      </q-card>
      <q-card class="full-width" flat>
        <q-tab-panel name="detail">
          <q-chip class="q-mb-sm" square color="primary" text-color="white" icon="collections" size="sm">
            信息收集
          </q-chip>
          <div class="q-ml-sm row">
            <span class="full-width text-weight-bold" style="font-size:15px" v-html='record.title' />
          </div>
          <div class="q-ml-sm row">
            <span v-if="menuInfo" class="neu-css-after-colon text-grey q-mt-xs" style="font-size:12px">
              {{ applyTypeTitle + "时间段" }}
            </span>
            <span class="q-mt-xs" style="font-size:12px">
              {{ timeSlot }}
            </span>
          </div>
          <div v-if="null !== record.dep_name" class="q-ml-sm row">
            <span class="neu-css-after-colon text-grey q-mt-xs" style="font-size:12px">
              发布单位
            </span>
            <span class="q-mt-xs" style="font-size:12px">
              {{ record.dep_name }}
            </span>
          </div>
          <div class="q-ml-sm row">
            <span class="neu-css-after-colon text-grey q-mt-xs" style="font-size:12px">
              {{ applyTypeTitle + "人" }}
            </span>
            <span class="q-mt-xs" style="font-size:12px">
              {{ userInfo.name + "(" + userInfo.login_name + ")" }}
            </span>
          </div>
          <div v-if="null != record.message_time" class="q-ml-sm row">
            <span v-if="menuInfo" class="neu-css-after-colon text-grey q-mt-xs" style="font-size:12px">
              填写时间
            </span>
            <span class="q-mt-xs" style="font-size:12px">
              {{ record.message_time }}
            </span>
          </div>
          <div v-show="record.message_time !== null" class="q-ml-sm row">
            <span class="neu-css-after-colon text-grey q-mt-xs" style="font-size:12px">
              提交的定位信息
            </span>
            <span class="q-mt-xs" style="font-size:12px">
              {{ record.address }}
            </span>
          </div>
          <q-separator class="q-mt-sm" />
          <div class="q-ml-sm row">
            <span class="full-width q-mt-sm" style="font-size:12px" v-html='record.detail' />
          </div>
          <q-separator v-show="record.attachment != null" class="q-mt-sm" />
          <div v-show="record.attachment != null" class="q-mt-sm">
            <div v-for="t in record.attachment" :key='t.size' class="text-grey" @click='downloadFile(t.link, t.srcname)'>
              <q-icon name="attach_file" color="grey" size="xs" />
              {{ "\n              " + t.srcname + "\n            " }}
            </div>
          </div>
          <q-form @submit='updateResult'>
            <q-separator class="q-mt-md" />
            <neu-widget-vue v-for="(t, a) in record.info_config" v-model="record.info_result[index]" :key='a' class="bg-grey-2 q-pa-sm q-mt-sm" :config='t' :viewMode='null !== record.message_time && 1 != record.judgeend' />
            <q-item>
              <q-item-section avatar>
                <div>
                  定位：
                </div>
              </q-item-section>
              <q-item-section>
                {{ "\n                " + location.address + "\n                " }}
                <neu-geo-location :needAddr='true' :location='research' @completed='locationCompleted' @error='locationError' />
              </q-item-section>
              <q-item-section side>
                <span class="text-primary cursor-pointer" @click='research = research + 1'>
                  重新定位
                </span>
              </q-item-section>
            </q-item>
            <div v-if="null !== record.message_time && 1 == record.judgeend && record.info_config.length > 0">
              <q-btn class="full-width q-mt-md" color="primary" label="修改提交" type="submit" />
            </div>
            <div v-if="null == record.message_time && 1 == record.judetime">
              <q-btn class="full-width q-mt-md" color="primary" label="提交" type="submit" />
            </div>
          </q-form>
        </q-tab-panel>
      </q-card>
      <q-page-sticky position="bottom-right" :offset='fabPos'>
        <q-btn v-show="record.message_time == null && record.judetime == true" v-touch-pan.prevent.mouse.prevent.mouse="moveFab" round color="primary" icon="save" @click='stopSave' />
      </q-page-sticky>
    </q-page>
  </q-page-container>
</q-layout>
</template>

<script>
// The exact semantic component options are preserved in the sibling .logic.js file.
// This SFC isolates the original render tree for review and manual variable renaming.
export default {
  name: "MessageDetail",
};
</script>
