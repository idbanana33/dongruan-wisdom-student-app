<!--
  Source: assets/www/js/42.js -> webpack module "dc02"
  Route: /student/repair/evaluate
  Component: Evaluate
  Restoration: template decompiled from Vue render function; logic in sibling .logic.js
  Confidence: high for DOM structure / medium for expression quoting
-->
<template>
<q-layout view="lHh lpr lFf">
  <q-header class="bg-grey-3 text-black">
    <q-toolbar>
      <q-btn flat round dense icon="keyboard_arrow_left" @click='goBack' />
      <q-toolbar-title>
        维修评价
      </q-toolbar-title>
    </q-toolbar>
  </q-header>
  <q-page-container>
    <q-page class="bg-grey-3">
      <q-form @submit='onSubmit'>
        <q-card class="full-width row" flat>
          <q-list class="full-width">
            <q-item>
              <q-item-section avatar>
                <div class="neu-css-before-red-asterisk">
                  本次维修满意度星级评分
                </div>
                <div>
                  <q-rating v-model="record.mark" max="5" size="2.5em" />
                  {{ "\n                " + record.mark + "星\n                " }}
                </div>
              </q-item-section>
            </q-item>
            <q-item>
              <q-item-section avatar>
                <div class="neu-css-before-white-space">
                  意见反馈
                </div>
                <q-input v-model="record.evaluate" dense outlined hide-bottom-space type="textarea" lazy-rules />
              </q-item-section>
            </q-item>
          </q-list>
        </q-card>
        <div class="row justify-center" style="margin-top:15%">
          <q-btn class="bg-primary" style="width:60%;height:2.8rem" flat unelevated color="white" label="发表评价" type="submit" />
        </div>
      </q-form>
    </q-page>
  </q-page-container>
</q-layout>
</template>

<script>
// The exact semantic component options are preserved in the sibling .logic.js file.
// This SFC isolates the original render tree for review and manual variable renaming.
export default {
  name: "Evaluate",
};
</script>
