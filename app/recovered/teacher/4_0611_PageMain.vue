<!--
  Source: assets/www/js/4.js -> webpack module "0611"
  Route: /teacher/qrcodeScanning
  Component: PageMain
  Restoration: template decompiled from Vue render function; logic in sibling .logic.js
  Confidence: high for DOM structure / medium for expression quoting
-->
<template>
<q-layout view="lHh lpr lFf">
  <q-header class="bg-grey-3 text-black">
    <q-toolbar>
      <q-btn flat round dense icon="keyboard_arrow_left" @click='back' />
      <q-toolbar-title>
        信息核验
      </q-toolbar-title>
    </q-toolbar>
  </q-header>
  <div class="scroll-container scan-container">
    <div class="scan-none-1" />
    <div class="scan-box-container">
      <div class="scan-none-2" />
      <div class="scan-box">
        <div class="scan-box-area">
          <div class="top-left" />
          <div class="top-right" />
          <div class="bottom-left" />
          <div class="bottom-right" />
          <div v-show="scanning" class="through-line" />
          <div class="light text-center" @click='onLightTrigger'>
            <q-btn class="lighti full-width" flat :icon='1 == light ? "mdi-flashlight" : "mdi-flashlight-off"' />
            <span class="full-width">
              {{ "轻触 " + light ? "关闭" : "打开" }}
            </span>
          </div>
        </div>
      </div>
      <div class="scan-none-2" />
    </div>
    <div class="scan-none-1">
      放入框内，自动扫描
    </div>
  </div>
</q-layout>
</template>

<script>
// The exact semantic component options are preserved in the sibling .logic.js file.
// This SFC isolates the original render tree for review and manual variable renaming.
export default {
  name: "PageMain",
};
</script>
