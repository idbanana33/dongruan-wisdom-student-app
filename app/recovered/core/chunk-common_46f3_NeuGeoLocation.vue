<!--
  Source: assets/www/js/chunk-common.js -> webpack module "46f3"
  Route: (shared/core)
  Component: NeuGeoLocation
  Restoration: template decompiled from Vue render function; logic in sibling .logic.js
  Confidence: high for DOM structure / medium for expression quoting
-->
<template>
<baidu-map style="display:none" :zoom="15" :scroll-wheel-zoom='true' :ak='$appConf.bMapAk' @ready='mapReady' />
</template>

<script>
// The exact semantic component options are preserved in the sibling .logic.js file.
// This SFC isolates the original render tree for review and manual variable renaming.
export default {
  name: "NeuGeoLocation",
};
</script>
