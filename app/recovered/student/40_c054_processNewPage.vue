<!--
  Source: assets/www/js/40.js -> webpack module "c054"
  Route: /student/process/NewProcess
  Component: processNewPage
  Restoration: template decompiled from Vue render function; logic in sibling .logic.js
  Confidence: high for DOM structure / medium for expression quoting
-->
<template>
<q-layout view="lHh lpr lFf">
  <q-header class="bg-grey-3 text-black">
    <q-toolbar>
      <q-btn flat round dense icon="keyboard_arrow_left" @click='goBack' />
      <q-toolbar-title>
        {{ "新建" + record.process_type_name + "流程申请" }}
      </q-toolbar-title>
    </q-toolbar>
  </q-header>
  <q-page-container>
    <q-page class="bg-white-3">
      <q-form class="q-gutter-sm full-width" @submit='saveProcess'>
        <q-card v-if="menuInfo" class="full-width" flat>
          <q-list>
            <q-item v-for="(t, o) in record.process_info_config" :key='o'>
              <q-item-section>
                <neu-widget v-model="process.info_result[index]" :labelClass='"col-12 col-md-2 col-sm-9 text-right" + ($q.screen.lt.sm ? "text-right" : "")' controlClass="col-12 col-md-10 col-sm-9" :config='t' :viewMode='viewMode' />
                <q-separator style="margin-top:6px" />
              </q-item-section>
            </q-item>
            <q-item>
              <q-item-section avatar>
                <div>
                  紧急联系号码
                </div>
              </q-item-section>
              <q-item-section>
                <q-input v-model="process.contact" outlined type="number" dense hide-bottom-space />
              </q-item-section>
            </q-item>
            <q-separator v-show="record.process_need_locate == 1" style="width:92%;margin-left:16px" />
            <q-item v-show="record.process_need_locate == 1">
              <q-item-section avatar>
                <div>
                  当前所在位置
                </div>
              </q-item-section>
              <q-item-section>
                {{ "\n              " + location.address + "\n              " }}
                <neu-geo-location :needAddr='true' :location='research' @completed='locationCompleted' @error='locationError' />
              </q-item-section>
            </q-item>
          </q-list>
        </q-card>
        <q-footer class="bg-white text-primary" style="height:2.8rem;margin-left:0px;border:0px" bordered>
          <q-btn style="width:40%;height:100%" outline color="grey" label="取消" @click='goBack' />
          <q-btn style="width:60%;height:100%" color="primary" label="申请" type="submit" />
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
  name: "processNewPage",
};
</script>
