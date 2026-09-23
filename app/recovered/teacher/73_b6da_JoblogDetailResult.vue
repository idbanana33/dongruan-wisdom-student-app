<!--
  Source: assets/www/js/73.js -> webpack module "b6da"
  Route: /teacher/joblog/detailresult
  Component: JoblogDetailResult
  Restoration: template decompiled from Vue render function; logic in sibling .logic.js
  Confidence: high for DOM structure / medium for expression quoting
-->
<template>
<q-layout view="lHh lpr lFf">
  <q-header class="bg-grey-3 text-black">
    <q-toolbar>
      <q-btn flat round dense icon="keyboard_arrow_left" @click='goBack' />
      <q-toolbar-title>
        日志内容
      </q-toolbar-title>
    </q-toolbar>
  </q-header>
  <q-page-container>
    <q-page class="bg-grey-3">
      <q-form class="q-gutter-sm full-width" @submit='submitJoblogResult'>
        <q-card v-if="menuInfo" class="full-width" flat>
          <q-list>
            <q-card-section>
              <div v-for="(t, i) in infoConfig" :key='i' class="bg-grey-2 q-pa-sm q-mt-sm">
                <neu-widget v-model="result.info_result[index]" :config='t' :view-mode='viewMode' />
              </div>
            </q-card-section>
          </q-list>
        </q-card>
        <q-footer v-if="'u' === detailType" class="bg-white text-primary" style="height:2.8rem;margin-left:0px;border:0px" bordered>
          <q-btn style="width:30%;height:100%" color="red" label="删除" @click='deleteJoblogResult()' />
          <q-btn v-show="!viewMode" style="width:30%;height:100%" outline color="grey" label="暂存" type="submit" @click='result.status = 0' />
          <q-btn v-show="!viewMode" style="width:40%;height:100%" color="primary" label="提交" type="submit" @click='result.status = 1' />
        </q-footer>
        <q-footer v-show="detailType === 'n'" class="bg-white text-primary" style="height:2.8rem;margin-left:0px;border:0px" bordered>
          <q-btn style="width:40%;height:100%" outline color="grey" label="暂存" type="submit" @click='result.status = 0' />
          <q-btn style="width:60%;height:100%" color="primary" label="提交" type="submit" @click='result.status = 1' />
        </q-footer>
        <q-footer v-show="(getAllowDelete && (detailType === 'd') && (teacherNo === teacher_no_ing)) || (roleId === 'A' && detailType === 'd')" class="bg-white text-primary" style="height:2.8rem;margin-left:0px;border:0px" bordered>
          <q-btn style="width:100%;height:100%" color="red" label="删除" @click='deleteJoblogResult()' />
        </q-footer>
      </q-form>
    </q-page>
  </q-page-container>
</q-layout>
</template>

<script>
// The exact semantic component options are preserved in the sibling .logic.js file.
// This SFC isolates the original render tree for review and manual variable renaming.
export default {
  name: "JoblogDetailResult",
};
</script>
