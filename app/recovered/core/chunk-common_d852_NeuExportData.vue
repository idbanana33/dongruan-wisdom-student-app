<!--
  Source: assets/www/js/chunk-common.js -> webpack module "d852"
  Route: (shared/core)
  Component: NeuExportData
  Restoration: template decompiled from Vue render function; logic in sibling .logic.js
  Confidence: high for DOM structure / medium for expression quoting
-->
<template>
<q-dialog v-model="progressDialog" persistent>
  <q-card class="full-width" flat>
    <q-card-section>
      <q-item-section v-show="!progressTip">
        处理中（数据量大时处理速度会比较慢，请耐心等候）...
      </q-item-section>
      <q-item-section v-show="!progressTip">
        <q-linear-progress size="25px" :value='progress' color="accent">
          <div class="absolute-full flex flex-center">
            <q-badge color="white" text-color="accent" :label='progressLabel' />
          </div>
        </q-linear-progress>
      </q-item-section>
      <q-item-section v-show="showMultiFilesTip" class="text-orange">
        本次下载数据会被拆分成多个文件保存，请注意查收。
      </q-item-section>
      <q-item-section v-show="progressTip">
        处理结果
      </q-item-section>
      <q-item-section v-show="progressTip">
        {{ "\n        " + progressTip + "\n      " }}
      </q-item-section>
      <q-item-section v-show="progressTip">
        <q-btn v-for="t in multiFileNames" :key='t' class="q-mt-sm" outline color="primary" :label='t' @click='openExcelFile(t)' />
      </q-item-section>
      <q-item-section v-show="progressTip">
        <q-btn class="q-mt-sm" outline color="grey" label="关闭" @click='progressDialog = false' />
      </q-item-section>
    </q-card-section>
  </q-card>
</q-dialog>
</template>

<script>
// The exact semantic component options are preserved in the sibling .logic.js file.
// This SFC isolates the original render tree for review and manual variable renaming.
export default {
  name: "NeuExportData",
};
</script>
