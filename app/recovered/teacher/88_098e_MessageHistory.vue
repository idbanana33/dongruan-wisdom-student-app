<!--
  Source: assets/www/js/88.js -> webpack module "098e"
  Route: /teacher/message/message
  Component: MessageHistory
  Restoration: template decompiled from Vue render function; logic in sibling .logic.js
  Confidence: high for DOM structure / medium for expression quoting
-->
<template>
<q-layout view="lHh lpr lFf">
  <q-header class="bg-grey-3 text-black">
    <q-toolbar>
      <q-btn flat round dense icon="keyboard_arrow_left" @click='goBack' />
      <q-toolbar-title v-if="menuInfo">
        {{ menuInfo.title }}
      </q-toolbar-title>
    </q-toolbar>
  </q-header>
  <q-page-container>
    <q-page class="bg-grey-3 q-pb-sm">
      <message-form v-if="'doing' == tab" />
      <message-history v-if="'history' == tab" />
    </q-page>
  </q-page-container>
  <q-footer v-if="menuInfo" class="bg-white text-primary" bordered>
    <q-tabs v-model="tab" class="text-black" no-caps active-color="primary" indicator-color="transparent" align="justify">
      <q-tab name="doing" label="正在进行" />
      <q-separator vertical />
      <q-tab name="history" label="历史" />
    </q-tabs>
  </q-footer>
</q-layout>
</template>

<script>
// The exact semantic component options are preserved in the sibling .logic.js file.
// This SFC isolates the original render tree for review and manual variable renaming.
export default {
  name: "MessageHistory",
};
</script>
