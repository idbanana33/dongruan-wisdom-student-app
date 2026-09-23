<!--
  Source: assets/www/js/123.js -> webpack module "1e4d"
  Route: /user/passport
  Component: Passport
  Restoration: template decompiled from Vue render function; logic in sibling .logic.js
  Confidence: high for DOM structure / medium for expression quoting
-->
<template>
<q-layout view="lHh lpr lFf">
  <q-header class="bg-white text-black">
    <q-toolbar>
      <q-btn flat round dense icon="close" @click='goBack' />
      <q-toolbar-title>
        {{ "in" == direction ? "入校" : "离校" + "通行卡" }}
      </q-toolbar-title>
    </q-toolbar>
  </q-header>
  <q-page-container>
    <q-page class="bg-white">
      <q-card class="full-width" flat>
        <q-card-section class="text-center text-white" :class='color'>
          {{ "\n          " + message }}
          <br />
          {{ "\n          " + new Date(currentTime).toLocaleString() + "\n        " }}
        </q-card-section>
        <q-card-section class="text-center">
          <q-img :src='imageUrl' />
        </q-card-section>
        <q-item v-for="t in commonCols" :key='t.field' dense>
          <q-item-section avatar>
            <q-item-label class="text-grey">
              {{ t.label }}
            </q-item-label>
          </q-item-section>
          <q-item-section>
            <q-item-label class="text-right">
              {{ "\n              " + info[t.field] + "\n            " }}
            </q-item-label>
          </q-item-section>
        </q-item>
      </q-card>
    </q-page>
  </q-page-container>
</q-layout>
</template>

<script>
// The exact semantic component options are preserved in the sibling .logic.js file.
// This SFC isolates the original render tree for review and manual variable renaming.
export default {
  name: "Passport",
};
</script>
