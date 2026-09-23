<!--
  Source: assets/www/js/30.js -> webpack module "750d"
  Route: /student/leave/reportleave
  Component: ReportLeave
  Restoration: template decompiled from Vue render function; logic in sibling .logic.js
  Confidence: high for DOM structure / medium for expression quoting
-->
<template>
<q-layout view="lHh lpr lFf">
  <q-header class="bg-grey-3 text-black">
    <q-toolbar>
      <q-btn flat round dense icon="keyboard_arrow_left" @click='goBackLeave' />
      <q-toolbar-title>
        销假
      </q-toolbar-title>
    </q-toolbar>
  </q-header>
  <q-page-container>
    <q-page class="bg-grey-3">
      <q-form @submit='onSubmit'>
        <q-card class="full-width row q-mt-sm" flat>
          <q-list class="full-width">
            <q-item>
              <q-item-section>
                <q-item-label class="neu-css-before-white-space">
                  添加附件
                </q-item-label>
                <q-item-label class="neu-css-before-white-space q-my-sm" caption>
                  图片格式支持：.jpg、.png、.jpeg
                </q-item-label>
                <q-uploader v-model="filesMaxNumber" class="full-width" multiple max-files="4" :url='uploader' auto-upload max-file-size="5242880" accept=".jpg, .png, ,.jpeg, image/*" @uploaded='afterUploaded' @rejected='onRejected' @removed='afterRemoved'>
                  <template v-slot:header>
                    <div class="row no-wrap items-center q-pa-sm q-gutter-xs">
                      <div class="col">
                        图片上传(每张5M以内)
                      </div>
                      <q-btn v-if="e.canAddFiles" type="a" icon="add_box" round dense flat>
                        <q-uploader-add-trigger />
                        <q-tooltip>
                          选择文件并上传
                        </q-tooltip>
                      </q-btn>
                    </div>
                  </template>
                </q-uploader>
              </q-item-section>
            </q-item>
          </q-list>
        </q-card>
        <q-card class="full-width row q-mt-sm" flat>
          <q-list class="full-width" padding>
            <q-item>
              <q-item-section avatar>
                <div class="neu-css-before-white-space">
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
          </q-list>
        </q-card>
        <div v-else class="q-my-sm text-center">
          <span>
            你不在销假范围内，暂时不能销假
          </span>
        </div>
        <q-footer v-if="inLocal" class="bg-white text-primary" bordered>
          <div class="row justify-between">
            <q-btn class="bg-primary" style="width:100%;height:2.8rem" flat unelevated color="white" label="确认销假" type="submit" />
          </div>
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
  name: "ReportLeave",
};
</script>
