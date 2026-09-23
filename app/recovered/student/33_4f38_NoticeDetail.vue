<!--
  Source: assets/www/js/33.js -> webpack module "4f38"
  Route: /student/notice/detail
  Component: NoticeDetail
  Restoration: template decompiled from Vue render function; logic in sibling .logic.js
  Confidence: high for DOM structure / medium for expression quoting
-->
<template>
<q-layout view="lHh lpr lFf">
  <q-header class="bg-grey-3 text-black">
    <q-toolbar>
      <q-btn flat round dense icon="keyboard_arrow_left" @click='goBack' />
      <q-toolbar-title>
        通知详情
      </q-toolbar-title>
    </q-toolbar>
  </q-header>
  <q-page-container>
    <q-page class="bg-grey-3">
      <q-card class="full-width" flat>
        <q-tab-panels v-model="tab">
          <q-tab-panel name="detail">
            <div>
              <q-chip square :color='record.notice_priority_color' text-color="white" icon="email" size="sm">
                {{ "\n                " + record.notice_priority_name + "\n              " }}
              </q-chip>
            </div>
            <div class="text-h6">
              {{ record.title }}
            </div>
            <div v-if="null !== record.dep_name" class="q-ml-sm row">
              <span class="neu-css-after-colon text-grey">
                发布单位
              </span>
              {{ record.dep_name + "\n            " }}
            </div>
            <div class="q-ml-sm row">
              <span class="neu-css-after-colon text-grey">
                查阅学生
              </span>
              <span>
                {{ userInfo.name + "(" + userInfo.login_name + ")" }}
              </span>
            </div>
            <q-separator class="q-mt-sm q-mb-md" />
            <div class="q-pt-none" v-html='record.detail' />
            <q-separator v-show="record.attachment != null" class="q-mt-md q-mb-md" />
            <div v-show="record.attachment != null" class="q-mt-sm">
              <div v-for="t in record.attachment" :key='t.size' class="text-grey" @click='downloadFile(t.link, t.srcname)'>
                <q-icon name="attach_file" color="grey" size="xs" />
                {{ "\n                " + t.srcname + "\n              " }}
              </div>
            </div>
            <q-separator v-show="record.confirm_flag == 1 && record.confirm_time == null && record.jude == 2" class="q-mt-md q-mb-md" />
            <div v-show="record.confirm_flag == 1 && record.confirm_time == null && record.jude == 2" class="row">
              <div v-for="(t, r) in info_config" :key='r' class="col-12">
                <neu-widget v-model="info_result[index]" :labelClass='"col-12 col-md-6 col-sm-9 text-left text-grey" + ($q.screen.lt.sm ? "text-right" : "")' controlClass="col-12 col-md-11 col-sm-9" :config='t' :viewMode='false' />
              </div>
            </div>
            <q-btn v-show="record.confirm_flag == 1 && record.confirm_time == null && record.jude == 2" class="full-width q-mt-md" color="primary" @click='update_confirm_flag'>
              确认已读
            </q-btn>
          </q-tab-panel>
        </q-tab-panels>
        <q-card v-show="tab == 'qa'" class="bg-grey-3" flat>
          <q-card-section>
            <neu-qa-list taskMenuId="notice" :taskId='id + ""' />
          </q-card-section>
        </q-card>
      </q-card>
    </q-page>
  </q-page-container>
  <q-footer class="bg-white text-primary" bordered>
    <q-tabs v-model="tab" class="text-grey" no-caps active-color="primary" indicator-color="transparent" align="justify">
      <q-tab name="detail" label="通知详情" />
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
  name: "NoticeDetail",
};
</script>
