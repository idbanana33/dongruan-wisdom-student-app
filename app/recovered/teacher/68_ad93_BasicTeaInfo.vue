<!--
  Source: assets/www/js/68.js -> webpack module "ad93"
  Route: /teacher/basic/teaInfo
  Component: BasicTeaInfo
  Restoration: template decompiled from Vue render function; logic in sibling .logic.js
  Confidence: high for DOM structure / medium for expression quoting
-->
<template>
<q-layout view="lHh lpr lFf">
  <q-header class="bg-grey-3 text-black">
    <q-toolbar>
      <q-btn flat round dense icon="keyboard_arrow_left" @click='goBack' />
      <q-toolbar-title>
        我的信息
      </q-toolbar-title>
    </q-toolbar>
  </q-header>
  <q-page-container>
    <q-page class="bg-grey-3 q-pb-sm">
      <q-card class="q-mx-md" flat>
        <q-item v-for="a in commonCols" :key='a.field' dense>
          <q-item-section avatar>
            <q-item-label class="text-grey">
              {{ a.label }}
            </q-item-label>
          </q-item-section>
          <q-item-section>
            <q-item-label class="text-right">
              {{ "\n              " + record[a.field] + "\n            " }}
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
  name: "BasicTeaInfo",
};
</script>
