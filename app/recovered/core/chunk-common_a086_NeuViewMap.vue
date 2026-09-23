<!--
  Source: assets/www/js/chunk-common.js -> webpack module "a086"
  Route: (shared/core)
  Component: NeuViewMap
  Restoration: template decompiled from Vue render function; logic in sibling .logic.js
  Confidence: high for DOM structure / medium for expression quoting
-->
<template>
<div class="full-width">
  <baidu-map class="neu-map-view" :center='modelValue.center' :zoom="15" :scroll-wheel-zoom='true' :ak='$appConf.bMapAk'>
    <div class="q-mb-sm row items-center justify-between">
      <div class="text-bold">
        {{ modelValue.title }}
      </div>
      <q-btn v-if="popupCloseBtn" v-close-popup icon="close" flat round dense size="sm" />
    </div>
    <bm-view style="width:100%;min-height:680px;flex:1" />
    <bm-scale anchor="BMAP_ANCHOR_BOTTOM_RIGHT" />
    <bm-navigation anchor="BMAP_ANCHOR_TOP_RIGHT" />
    <bm-marker :position='modelValue.center' />
    <bm-circle v-if="modelValue.radius" :center='modelValue.center' :radius='modelValue.radius' stroke-color="blue" :stroke-opacity="0.5" :stroke-weight="1" />
    <bm-polygon v-if="modelValue.path" :path='modelValue.path' stroke-color="blue" :stroke-opacity="0.5" :stroke-weight="1" />
  </baidu-map>
</div>
</template>

<script>
// The exact semantic component options are preserved in the sibling .logic.js file.
// This SFC isolates the original render tree for review and manual variable renaming.
export default {
  name: "NeuViewMap",
};
</script>
