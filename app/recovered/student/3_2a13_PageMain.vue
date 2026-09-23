<!--
  Source: assets/www/js/3.js -> webpack module "2a13"
  Route: /student/signin/qrScanning
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
        二维码扫描
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
  <q-dialog v-model="qrcode" qrcode>
    <q-card style="border-radius:25px;width:15rem">
      <q-item>
        <q-item-section class="flex flex-center">
          <q-item-label class="text-weight-bold">
            签到失败
          </q-item-label>
        </q-item-section>
      </q-item>
      <q-item class="text-center q-mb-sm" dense>
        <q-item-section>
          <q-item-label class="text-red">
            请扫描正确的二维码!
          </q-item-label>
        </q-item-section>
      </q-item>
      <q-separator />
      <q-card-actions align="around">
        <q-btn flat color="primary" @click='closeQrcode'>
          确定
        </q-btn>
      </q-card-actions>
    </q-card>
  </q-dialog>
</q-layout>
</template>

<script>
// The exact semantic component options are preserved in the sibling .logic.js file.
// This SFC isolates the original render tree for review and manual variable renaming.
export default {
  name: "PageMain",
};
</script>
