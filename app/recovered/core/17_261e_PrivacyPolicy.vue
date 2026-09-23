<!--
  Source: assets/www/js/17.js -> webpack module "261e"
  Route: /policy/privacyPolicy
  Component: PrivacyPolicy
  Restoration: template decompiled from Vue render function; logic in sibling .logic.js
  Confidence: high for DOM structure / medium for expression quoting
-->
<template>
<q-layout view="lHh lpr lFf">
  <q-header class="bg-white text-black">
    <q-toolbar>
      <q-btn flat round dense icon="close" @click='goBack' />
      <q-toolbar-title>
        隐私政策
      </q-toolbar-title>
    </q-toolbar>
  </q-header>
  <q-page-container>
    <q-page class="bg-white">
      <q-card class="full-width" flat>
        <q-list class="full-width">
          <q-item>
            <q-item-section v-html='info' />
          </q-item>
        </q-list>
      </q-card>
    </q-page>
  </q-page-container>
</q-layout>
</template>

<script>
// The exact semantic component options are preserved in the sibling .logic.js file.
// This SFC isolates the original render tree for review and manual variable renaming.
export default {
  name: "PrivacyPolicy",
};
</script>
