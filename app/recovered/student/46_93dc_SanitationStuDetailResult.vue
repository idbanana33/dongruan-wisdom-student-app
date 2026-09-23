<!--
  Source: assets/www/js/46.js -> webpack module "93dc"
  Route: /student/sanitation/detailResult
  Component: SanitationStuDetailResult
  Restoration: template decompiled from Vue render function; logic in sibling .logic.js
  Confidence: high for DOM structure / medium for expression quoting
-->
<template>
<q-layout view="lHh lpr lFf">
  <q-header class="bg-grey-3 text-black">
    <q-toolbar>
      <q-btn flat round dense icon="keyboard_arrow_left" @click='goBack' />
      <q-toolbar-title>
        寝室检查详情
      </q-toolbar-title>
    </q-toolbar>
  </q-header>
  <q-page-container>
    <q-page class="bg-grey-3">
      <q-form class="q-gutter-sm full-width">
        <q-card v-if="menuInfo" class="full-width" flat>
          <q-list>
            <q-item>
              <q-item-section>
                <q-item-label class="text-bold">
                  寝室检查基本内容
                </q-item-label>
              </q-item-section>
            </q-item>
            <q-separator />
            <q-item>
              <q-item-section avatar>
                <div>
                  执行日期
                </div>
              </q-item-section>
              <q-item-section>
                <q-field style="width:100%" outlined dense stack-label hide-bottom-space :readonly='true'>
                  <template v-slot:control>
                    {{ resultAll.check_date }}
                  </template>
                </q-field>
              </q-item-section>
            </q-item>
            <q-separator />
            <q-item>
              <q-item-section avatar>
                <div>
                  宿舍
                </div>
              </q-item-section>
              <q-item-section>
                <q-input v-model="resultAll.room_name" outlined dense hide-bottom-space :readonly='true' />
              </q-item-section>
            </q-item>
            <q-separator style="height:7px" color="grey-3" />
          </q-list>
          <q-card-section>
            <div class="row">
              <div class="col-12 col-md-2 col-sm-3 text-bold q-pr-sm" :class='$q.screen.lt.sm ? "" : "text-right"'>
                宿舍检查结果
              </div>
            </div>
            <q-card class="full-width" flat>
              <q-card-section>
                <neu-widget v-for="(e, s) in resultAll.info_config" v-model="resultAll.info_result[index]" :key='s' :labelClass='"col-12 col-md-2 col-sm-9 text-right" + ($q.screen.lt.sm ? "text-right" : "")' controlClass="col-12 col-md-10 col-sm-9" :config='e' :viewMode='true' />
              </q-card-section>
            </q-card>
            <q-separator />
            <div class="row">
              <div class="col-12 col-md-2 col-sm-3 text-bold q-pr-sm" :class='$q.screen.lt.sm ? "" : "text-right"'>
                {{ stuConfigTitle }}
              </div>
            </div>
            <q-card v-if="0 !== t.resultAll.stu_info_result.length" class="full-width" flat>
              <q-card-section>
                <neu-widget v-for="(e, s) in resultAll.stu_info_config" v-model="resultAll.stu_info_result[index]" :key='s' style="margin-top:4px" :labelClass='"col-12 col-md-2 col-sm-9 neu-css-after-colon text-right" + ($q.screen.lt.sm ? "text-right" : "")' controlClass="col-12 col-md-10 col-sm-9" :config='e' :viewMode='true' />
              </q-card-section>
            </q-card>
          </q-card-section>
        </q-card>
      </q-form>
    </q-page>
  </q-page-container>
</q-layout>
</template>

<script>
// The exact semantic component options are preserved in the sibling .logic.js file.
// This SFC isolates the original render tree for review and manual variable renaming.
export default {
  name: "SanitationStuDetailResult",
};
</script>
