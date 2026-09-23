<!--
  Source: assets/www/js/21.js -> webpack module "d0ce"
  Route: /student/apply/applyDetail
  Component: ApplyDetail
  Restoration: template decompiled from Vue render function; logic in sibling .logic.js
  Confidence: high for DOM structure / medium for expression quoting
-->
<template>
<q-layout view="lHh lpr lFf">
  <q-header class="bg-grey-3 text-black">
    <q-toolbar>
      <q-btn v-if="'A' == apply_type" flat round dense icon="keyboard_arrow_left" @click='goApply' />
      <q-btn v-if="'S' == apply_type" flat round dense icon="keyboard_arrow_left" @click='goSignup' />
      <q-btn v-if="'C' == apply_type" flat round dense icon="keyboard_arrow_left" @click='goCollect' />
      <q-toolbar-title v-if="menuInfo">
        {{ menuInfo.title + "详情" }}
      </q-toolbar-title>
    </q-toolbar>
  </q-header>
  <q-page-container>
    <q-page class="bg-grey-3">
      <q-card class="full-width row" flat>
        <q-card-section v-if="null != record.apply_time && 'detail' == tab" class="full-width row justify-center bg-positive text-white" style="height:4rem;font-size:1.5rem">
          <q-icon name="done" size="2rem" />
          {{ menuInfo.title + "成功\n        " }}
        </q-card-section>
        <q-card-section v-if="null == record.apply_time && 0 == record.judgeend && 'detail' == tab" class="full-width row justify-center bg-red text-white" style="height:4rem;font-size:1.5rem">
          <q-icon name="clear" size="2rem" />
          {{ "未进行" + menuInfo.title + "\n        " }}
        </q-card-section>
        <q-card-section v-if="null == record.apply_time && 0 == record.judgebegin && 'detail' == tab" class="full-width row justify-center bg-warning text-white" style="height:4rem;font-size:1.5rem">
          <q-icon name="warning" size="2rem" />
          {{ "未到" + menuInfo.title + "时间\n        " }}
        </q-card-section>
      </q-card>
      <q-card class="full-width" flat>
        <q-tab-panels v-model="tab">
          <q-tab-panel name="detail">
            <q-chip v-show="apply_type == 'A'" class="q-mb-sm" square color="primary" text-color="white" icon="pan_tool" size="sm">
              我的申请
            </q-chip>
            <q-chip v-show="apply_type == 'S'" class="q-mb-sm" square color="primary" text-color="white" icon="send" size="sm">
              活动报名
            </q-chip>
            <q-chip v-show="apply_type == 'C'" class="q-mb-sm" square color="primary" text-color="white" icon="collections" size="sm">
              信息收集
            </q-chip>
            <div class="q-ml-sm row">
              <span v-show="apply_type == 'A'" class="full-width text-weight-bold" style="font-size:15px" v-html='record.title' />
              <span v-show="apply_type == 'S'" class="full-width text-weight-bold" style="font-size:15px" v-html='record.title' />
              <span v-show="apply_type == 'C'" class="full-width text-weight-bold" style="font-size:15px" v-html='record.title' />
            </div>
            <div class="q-ml-sm row">
              <span v-if="menuInfo" class="neu-css-after-colon text-grey q-mt-xs" style="font-size:12px">
                {{ applyTypeTitle + "时间段" }}
              </span>
              <span class="q-mt-xs" style="font-size:12px">
                {{ timeSlot }}
              </span>
            </div>
            <div v-if="0 != record.apply_max && menuInfo && 'C' == apply_type" class="q-ml-sm row">
              <span class="neu-css-after-colon text-grey q-mt-xs" style="font-size:12px">
                {{ "已提交人数/" + menuInfo.title + "限额" }}
              </span>
              <span class="q-mt-xs" style="font-size:12px">
                {{ count.count + "/" + record.apply_max + "人" }}
              </span>
            </div>
            <div v-if="0 != record.apply_max && menuInfo && 'S' == apply_type" class="q-ml-sm row">
              <span class="neu-css-after-colon text-grey q-mt-xs" style="font-size:12px">
                {{ "已报名人数/" + menuInfo.title + "限额" }}
              </span>
              <span class="q-mt-xs" style="font-size:12px">
                {{ count.count + "/" + record.apply_max + "人" }}
              </span>
            </div>
            <div v-if="0 != record.apply_max && menuInfo && 'A' == apply_type" class="q-ml-sm row">
              <span class="neu-css-after-colon text-grey q-mt-xs" style="font-size:12px">
                {{ "已申请人数/" + menuInfo.title + "限额" }}
              </span>
              <span class="q-mt-xs" style="font-size:12px">
                {{ count.count + "/" + record.apply_max + "人" }}
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
            <div v-if="null != record.apply_time && 'A' === apply_type" class="q-ml-sm row">
              <span class="neu-css-after-colon text-grey q-mt-xs" style="font-size:12px">
                申请时间
              </span>
              <span class="q-mt-xs" style="font-size:12px">
                {{ record.apply_time }}
              </span>
            </div>
            <div v-if="null != record.apply_time && 'S' === apply_type" class="q-ml-sm row">
              <span class="neu-css-after-colon text-grey q-mt-xs" style="font-size:12px">
                报名时间
              </span>
              <span class="q-mt-xs" style="font-size:12px">
                {{ record.apply_time }}
              </span>
            </div>
            <div v-if="null != record.apply_time && 'C' === apply_type" class="q-ml-sm row">
              <span v-if="menuInfo" class="neu-css-after-colon text-grey q-mt-xs" style="font-size:12px">
                填写时间
              </span>
              <span class="q-mt-xs" style="font-size:12px">
                {{ record.apply_time }}
              </span>
            </div>
            <div v-show="record.need_location === 1 && record.apply_time !== null" class="q-ml-sm row">
              <span class="neu-css-after-colon text-grey q-mt-xs" style="font-size:12px">
                提交的定位信息
              </span>
              <span class="q-mt-xs" style="font-size:12px">
                {{ record.address }}
              </span>
            </div>
            <q-separator class="q-mt-sm" />
            <div class="q-ml-sm row">
              <span v-show="apply_type == 'A'" class="full-width q-mt-sm" style="font-size:12px" v-html='record.detail' />
              <span v-show="apply_type == 'S'" class="full-width q-mt-sm" style="font-size:12px" v-html='record.detail' />
              <span v-show="apply_type == 'C'" class="full-width q-mt-sm" style="font-size:12px" v-html='record.detail' />
            </div>
            <q-separator v-show="record.attachment != null" class="q-mt-sm" />
            <div v-show="record.attachment != null" class="q-mt-sm">
              <div v-for="e in record.attachment" :key='e.size' class="text-grey" @click='downloadFile(e.link, e.srcname)'>
                <q-icon name="attach_file" color="grey" size="xs" />
                {{ "\n                " + e.srcname + "\n              " }}
              </div>
            </div>
            <q-form @submit='updateResult'>
              <q-separator v-show="record.info_config != null" class="q-mt-md" />
              <neu-widget-vue v-for="(e, s) in record.info_config" v-model="record.info_result[index]" :key='s' class="bg-grey-2 q-pa-sm q-mt-sm" :config='e' :viewMode='null !== record.apply_time && (1 != record.judgeend || "C" != record.apply_type)' />
              <q-item v-show="(record.need_location === 1 && record.apply_time == null && record.judetime == true  && tab == 'detail') || (record.need_location === 1 && record.apply_time !==null && record.judgeend == true && record.apply_type == 'C' && record.info_config.length > 0)">
                <q-item-section avatar>
                  <div>
                    定位
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
              <div v-if="null !== record.apply_time && 1 == record.judgeend && 'C' == record.apply_type && record.info_config.length > 0">
                <q-btn class="full-width q-mt-md" color="primary" label="修改提交" type="submit" />
              </div>
              <div v-if="null == record.apply_time && 1 == record.judetime && 'detail' == tab">
                <q-btn v-show="apply_type == 'A'" class="full-width q-mt-md" color="primary" label="申请" type="submit" />
                <q-btn v-show="apply_type == 'S'" class="full-width q-mt-md" color="primary" label="报名" type="submit" />
                <q-btn v-show="apply_type == 'C'" class="full-width q-mt-md" color="primary" label="提交" type="submit" />
              </div>
            </q-form>
          </q-tab-panel>
        </q-tab-panels>
        <q-card v-show="tab == 'qa' && apply_type == 'A'" class="bg-grey-3" flat>
          <q-card-section>
            <neu-qa-list taskMenuId="apply" :taskId='id + ""' />
          </q-card-section>
        </q-card>
        <q-card v-show="tab == 'qa' && apply_type == 'S'" class="bg-grey-3" flat>
          <q-card-section>
            <neu-qa-list taskMenuId="signup" :taskId='id + ""' />
          </q-card-section>
        </q-card>
        <q-card v-show="tab == 'qa' && apply_type == 'C'" class="bg-grey-3" flat>
          <q-card-section>
            <neu-qa-list taskMenuId="collect" :taskId='id + ""' />
          </q-card-section>
        </q-card>
      </q-card>
      <q-page-sticky position="bottom-right" :offset='fabPos'>
        <q-btn v-show="record.apply_time == null && record.judetime == true  && tab == 'detail' && record.apply_type == 'C'" v-touch-pan.prevent.mouse.prevent.mouse="moveFab" round color="primary" icon="save" @click='stopSave' />
      </q-page-sticky>
    </q-page>
  </q-page-container>
  <q-footer class="bg-white text-primary" bordered>
    <q-tabs v-model="tab" class="text-black" no-caps active-color="primary" indicator-color="transparent" align="justify">
      <q-tab v-if="'A' == apply_type" name="detail" label="申请正文" />
      <q-tab v-if="'C' == apply_type" name="detail" label="信息收集正文" />
      <q-tab v-if="'S' == apply_type" name="detail" label="活动报名正文" />
      <q-separator vertical />
      <q-tab name="qa" label="提问" />
    </q-tabs>
  </q-footer>
</q-layout>
</template>

<script>
// The exact semantic component options are preserved in the sibling .logic.js file.
// This SFC isolates the original render tree for review and manual variable renaming.
export default {
  name: "ApplyDetail",
};
</script>
