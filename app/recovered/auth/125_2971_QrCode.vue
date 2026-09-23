<!--
  Source: assets/www/js/125.js -> webpack module "2971"
  Route: /user/qrCode
  Component: QrCode
  Restoration: template decompiled from Vue render function; logic in sibling .logic.js
  Confidence: high for DOM structure / medium for expression quoting
-->
<template>
<q-layout view="lHh lpr lFf">
  <q-header class="bg-white text-black">
    <q-toolbar>
      <q-btn flat round dense icon="close" @click='goBack' />
      <q-toolbar-title>
        我的二维码
      </q-toolbar-title>
    </q-toolbar>
  </q-header>
  <q-page-container>
    <q-page class="bg-white">
      <q-card class="full-width" flat>
        <q-card-section class="text-center">
          <vue-qr class="q-mb-xl" :text='qrCodeValue' :margin="0" colorDark="#3B3B3B" colorLight="#fff" :size="250" />
          <div>
            {{ downcount + "秒后二维码自动刷新" }}
          </div>
        </q-card-section>
      </q-card>
    </q-page>
  </q-page-container>
</q-layout>
</template>

<script>
// The exact semantic component options are preserved in the sibling .logic.js file.
// This SFC isolates the original render tree for review and manual variable renaming.
export default {
  name: "QrCode",
};
</script>
