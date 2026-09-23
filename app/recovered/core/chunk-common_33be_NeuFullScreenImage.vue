<!--
  Source: assets/www/js/chunk-common.js -> webpack module "33be"
  Route: (shared/core)
  Component: NeuFullScreenImage
  Restoration: template decompiled from Vue render function; logic in sibling .logic.js
  Confidence: high for DOM structure / medium for expression quoting
-->
<template>
<q-dialog v-model="showBigPic" maximized>
  <div style="background-color:black">
    <div ref=""bigPicPanel"">
      <q-img :src='serverUrl + bigPicUrl' />
    </div>
    <q-page-sticky position="bottom-right" :offset='[18, 18]'>
      <q-fab icon="keyboard_arrow_left" direction="left" color="secondary">
        <q-fab-action v-close-popup icon="close" color="accent" />
        <q-fab-action icon="get_app" color="primary" @click='downloadPicture' />
        <div ref=""plusPic"">
          <q-fab-action icon="mdi-magnify-plus" color="amber" />
        </div>
        <div ref=""minusPic"">
          <q-fab-action icon="mdi-magnify-minus" color="amber" />
        </div>
      </q-fab>
    </q-page-sticky>
  </div>
</q-dialog>
</template>

<script>
// The exact semantic component options are preserved in the sibling .logic.js file.
// This SFC isolates the original render tree for review and manual variable renaming.
export default {
  name: "NeuFullScreenImage",
};
</script>
