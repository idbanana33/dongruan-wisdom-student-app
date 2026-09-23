<!--
  Source: assets/www/js/chunk-common.js -> webpack module "971b"
  Route: (shared/core)
  Component: NeuCollectSearch
  Restoration: template decompiled from Vue render function; logic in sibling .logic.js
  Confidence: high for DOM structure / medium for expression quoting
-->
<template>
<div>
  <div v-if="0 == infoConfigList.length">
    <q-card style="height:3.5rem;align-items:center;display:flex;justify-content:center" flat>
      暂无查询内容
    </q-card>
  </div>
  <q-card class="full-width" flat>
    <q-list v-for="(t, a) in infoConfigList" :key='a' bordered>
      <q-card-section>
        <div v-if="'T' == t.type || 'N' == t.type || 'R' == t.type" :class='$q.screen.lt.sm ? "" : "text-left"'>
          {{ t.label }}
          <q-btn dense icon="cancel" flat color="grey" @click='closeIndex(a)' />
        </div>
        <div v-if="'T' == t.type" class="col-12">
          <q-input v-model="infoResultList[index]" outlined dense hide-bottom-space lazy-rules />
        </div>
        <div v-if="'N' == t.type" class="row col-12">
          <div class="col-12">
            <q-input v-model="infoResultList[index].more" type="number" outlined dense input-class="text-right" hide-bottom-space lazy-rules>
              <template v-slot:prepend>
                <span class="text-body2">
                  大于等于
                </span>
              </template>
            </q-input>
          </div>
          <div class="col-12" style="margin-top:6px">
            <q-input v-model="infoResultList[index].less" type="number" outlined dense input-class="text-right" hide-bottom-space lazy-rules>
              <template v-slot:prepend>
                <span class="text-body2">
                  小于等于
                </span>
              </template>
            </q-input>
          </div>
        </div>
        <div v-if="'R' == t.type" class="row col-12">
          <div v-if="'R' == t.selectPattern" class="q-gutter-sm">
            <q-radio v-for="(t, s) in t.options" v-model="infoResultList[index]" :key='s' :val='t.value' :label='t.label' />
            <q-radio v-model="infoResultList[index]" v-show="item.isOther" val="其他" label="其他" />
          </div>
          <q-select v-if="'S' == t.selectPattern" v-model="infoResultList[index]" style="width:330px" outlined dense :options='t.options' emit-value map-options label="请选择" />
        </div>
      </q-card-section>
    </q-list>
  </q-card>
  <q-footer class="bg-white text-primary" style="height:2.8rem;margin-left:0px;border:0px" bordered>
    <q-btn style="width:40%;height:100%" outline color="grey" label="重置" @click='resetInfoResultList' />
    <q-btn style="width:60%;height:100%" color="primary" label="查询" @click='searchInfo' />
  </q-footer>
</div>
</template>

<script>
// The exact semantic component options are preserved in the sibling .logic.js file.
// This SFC isolates the original render tree for review and manual variable renaming.
export default {
  name: "NeuCollectSearch",
};
</script>
