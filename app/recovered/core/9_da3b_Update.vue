<!--
  Source: assets/www/js/9.js -> webpack module "da3b"
  Route: /update
  Component: Update
  Restoration: template decompiled from Vue render function; logic in sibling .logic.js
  Confidence: high for DOM structure / medium for expression quoting
-->
<template>
<q-layout view="hhh lpr fFf">
  <q-page-container>
    <q-page class="bg-white">
      <div class="q-pa-xl flex flex-center">
        <q-img :src='logoImage' />
      </div>
      <h5 class="text-center q-mt-xs q-mb-xs">
        {{ title }}
      </h5>
      <div class="q-pa-md q-pb-xl flex flex-center">
        <div v-if="mandatory">
          有新版本发布，请更新后使用。
        </div>
        <div v-else>
          有新版本发布，建议您更新。
        </div>
      </div>
      <div class="q-pa-sm flex flex-center">
        <q-btn v-show="!downloading" outline rounded color="primary" @click='doUpdate'>
          立即更新
          <span class="q-ml-sm">
            {{ "V" + ver }}
          </span>
        </q-btn>
        <q-linear-progress v-show="downloading" size="25px" :value='progress' color="accent">
          <div class="absolute-full flex flex-center">
            <q-badge color="white" text-color="accent" :label='progressLabel' />
          </div>
        </q-linear-progress>
      </div>
      <div v-else class="text-center q-mt-xs" @click='moveToHomePage'>
        前往“
        <span class="text-primary">
          东软智慧学工
        </span>
        ”官网下载安装最新版
      </div>
      <div v-else class="text-center q-mt-xs" @click='moveToAndroidStore'>
        前往“
        <span class="text-primary">
          腾讯应用宝
        </span>
        ”下载安装最新版
      </div>
      <q-page-sticky v-else position="top-right" :offset='[10, 10]'>
        <q-btn outline rounded color="grey-4" label="取 消" @click='goHome' />
      </q-page-sticky>
    </q-page>
  </q-page-container>
</q-layout>
</template>

<script>
// The exact semantic component options are preserved in the sibling .logic.js file.
// This SFC isolates the original render tree for review and manual variable renaming.
export default {
  name: "Update",
};
</script>
