<!--
  Source: assets/www/js/31.js -> webpack module "579a"
  Route: /student/news/detail
  Component: newsDetail
  Restoration: template decompiled from Vue render function; logic in sibling .logic.js
  Confidence: high for DOM structure / medium for expression quoting
-->
<template>
<q-layout v-if="menuInfo" view="lHh lpr lFf">
  <q-header class="bg-grey-3 text-black">
    <q-toolbar>
      <q-btn flat round dense icon="keyboard_arrow_left" @click='goBack' />
      <q-toolbar-title v-if="menuInfo">
        {{ menuInfo.title + "详情" }}
      </q-toolbar-title>
    </q-toolbar>
  </q-header>
  <q-page-container>
    <q-page class="bg-grey-3 q-pb-sm">
      <q-card class="bg-white q-mb-sm q-mx-sm" flat>
        <q-card-section class="text-center">
          <h5>
            {{ news.title }}
          </h5>
        </q-card-section>
        <q-card-section class="text-right text-grey">
          <div>
            {{ "发布者：" + news.name }}
          </div>
          <div>
            {{ "发布时间：" + news.create_time }}
          </div>
          <div v-if="null !== news.dep_name">
            {{ "发布单位：" + news.dep_name }}
          </div>
        </q-card-section>
        <q-card-section>
          <q-editor v-if="'' !== news.detail && null !== news.detail" v-model="news.detail" flat min-height="10em" readonly :toolbar='[]' hide-bottom-space />
        </q-card-section>
        <q-card-section class="text-right">
          <span class="text-grey">
            {{ "阅读量：" + count }}
          </span>
        </q-card-section>
      </q-card>
    </q-page>
  </q-page-container>
</q-layout>
<q-layout v-else v-else>
  <q-card style="height:3.5rem;align-items:center;display:flex;justify-content:center" flat>
    无访问权限
  </q-card>
</q-layout>
</template>

<script>
// The exact semantic component options are preserved in the sibling .logic.js file.
// This SFC isolates the original render tree for review and manual variable renaming.
export default {
  name: "newsDetail",
};
</script>
