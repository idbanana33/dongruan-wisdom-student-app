<!--
  Source: assets/www/js/chunk-common.js -> webpack module "961c"
  Route: (shared/core)
  Component: NeuLocationAnalysisMap
  Restoration: template decompiled from Vue render function; logic in sibling .logic.js
  Confidence: high for DOM structure / medium for expression quoting
-->
<template>
<div class="full-width">
  <div class="neu-map-view" id="map_container" />
  <q-btn v-close-popup class="absolute-top-right q-mr-sm q-mt-sm" :class='tipTextColor' style="z-index:100" icon="close" flat round dense size="sm" />
  <div class="absolute-top-left q-ml-sm q-mt-sm row items-center" :class='tipTextColor' style="z-index:100">
    <q-item-label class="q-mr-sm cursor-pointer" @click='mapTypeDialog = true'>
      <span v-text='mapOptions.find(function (t) { return t.value == mapType; }) || {  }.label' />
      <q-icon name="arrow_drop_down" size="sm" />
    </q-item-label>
    <span v-show="mapType == 'statistics'" :class='{ "cursor-pointer": currProvinceIndex > -1 }' @click='showCountryData'>
      全国
    </span>
    <span v-show="mapType == 'statistics' && currProvinceIndex > -1" :class='{ "cursor-pointer": currCityIndex > -1 }' @click='resetProvinceData'>
      {{ " > " + currProvinceIndex > -1 ? statisticsList[currProvinceIndex].province + " (" + statisticsList[currProvinceIndex].amount + ")" : "" }}
    </span>
    <span v-show="mapType == 'statistics' && currCityIndex > -1">
      {{ " > " + currCityIndex > -1 ? statisticsList[currProvinceIndex].cities[currCityIndex].city + " (" + statisticsList[currProvinceIndex].cities[currCityIndex].amount + ")" : "" }}
    </span>
    <q-item-label v-show="mapType == 'curve'" class="q-mr-sm cursor-pointer" @click='curveDirectionDialog = true'>
      <span v-text='curveDirectionOptions.find(function (t) { return t.value == curveDirection; }) || {  }.label' />
      <q-icon name="arrow_drop_down" size="sm" />
    </q-item-label>
  </div>
  <q-dialog v-model="mapTypeDialog">
    <q-list class="bg-white" dense bordered separator>
      <q-item v-ripple class="text-primary items-center">
        数据图
      </q-item>
      <q-item v-for="t in mapOptions" v-close-popup v-ripple :key='t.value' class="items-center" clickable @click='changeMapType(t.value)'>
        <q-icon class="q-mr-sm" name="bubble_chart" />
        {{ "\n        " + t.label + "\n      " }}
      </q-item>
      <q-item v-ripple class="text-primary items-center">
        主题色
      </q-item>
      <q-item v-for="t in mapThemes" v-close-popup v-ripple :key='t.value' class="items-center" clickable @click='changeMapStyle(t.value)'>
        <q-icon class="q-mr-sm" name="color_lens" />
        {{ "\n        " + t.label + "\n      " }}
      </q-item>
    </q-list>
  </q-dialog>
  <q-dialog v-model="curveDirectionDialog">
    <q-list class="bg-white" dense bordered separator>
      <q-item v-for="t in curveDirectionOptions" v-close-popup v-ripple :key='t.value' class="items-center" clickable @click='changeCurveDirection(t.value)'>
        <q-icon class="q-mr-sm" :style='curveDirectionColor(t.value)' name="router" />
        {{ "\n        " + t.label + "\n      " }}
      </q-item>
    </q-list>
  </q-dialog>
</div>
</template>

<script>
// The exact semantic component options are preserved in the sibling .logic.js file.
// This SFC isolates the original render tree for review and manual variable renaming.
export default {
  name: "NeuLocationAnalysisMap",
};
</script>
