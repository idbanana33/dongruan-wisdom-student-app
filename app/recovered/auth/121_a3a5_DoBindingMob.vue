<!--
  Source: assets/www/js/121.js -> webpack module "a3a5"
  Route: /user/doBindingMob
  Component: DoBindingMob
  Restoration: template decompiled from Vue render function; logic in sibling .logic.js
  Confidence: high for DOM structure / medium for expression quoting
-->
<template>
<q-layout view="lHh lpr lFf">
  <q-header class="bg-grey-3 text-black">
    <q-toolbar>
      <q-btn flat round dense icon="keyboard_arrow_left" to="/teacher/index" />
      <q-toolbar-title>
        代绑手机号
      </q-toolbar-title>
    </q-toolbar>
  </q-header>
  <q-page-container>
    <q-page class="bg-grey-3 q-pb-sm">
      <q-card class="full-width" flat>
        <q-list class="full-width">
          <q-item>
            <q-item-section avatar>
              <q-item-label>
                姓名
              </q-item-label>
            </q-item-section>
            <q-item-section>
              <q-item-label>
                {{ targetInfo.name }}
              </q-item-label>
              <q-item-label caption>
                {{ targetInfo.login_name }}
              </q-item-label>
            </q-item-section>
          </q-item>
          <q-separator v-if="targetInfo.pre_mob" />
          <q-item v-if="targetInfo.pre_mob">
            <q-item-section avatar>
              <q-item-label>
                原手机号
              </q-item-label>
            </q-item-section>
            <q-item-section>
              <q-item-label>
                {{ targetInfo.pre_mob }}
              </q-item-label>
            </q-item-section>
          </q-item>
          <q-separator />
          <q-item>
            <q-item-section avatar>
              <q-item-label>
                {{ targetInfo.pre_mob ? "新" : "" + "手机号" }}
              </q-item-label>
            </q-item-section>
            <q-item-section>
              <q-item-label>
                {{ targetInfo.mob }}
              </q-item-label>
            </q-item-section>
          </q-item>
          <q-separator />
          <q-item>
            <q-item-section>
              <q-btn unelevated label="代其绑定" color="primary" @click='doBindingMob' />
            </q-item-section>
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
  name: "DoBindingMob",
};
</script>
