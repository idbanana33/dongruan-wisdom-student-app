<!--
  Source: assets/www/js/119.js -> webpack module "f7d9"
  Route: /user/account
  Component: Password
  Restoration: template decompiled from Vue render function; logic in sibling .logic.js
  Confidence: high for DOM structure / medium for expression quoting
-->
<template>
<q-layout view="lHh lpr lFf">
  <q-header class="bg-grey-3 text-black">
    <q-toolbar>
      <q-btn flat round dense icon="keyboard_arrow_left" @click='goBack' />
      <q-toolbar-title>
        账号安全
      </q-toolbar-title>
    </q-toolbar>
  </q-header>
  <q-page-container>
    <q-page class="bg-grey-3 q-pb-sm">
      <q-card class="q-mx-sm" flat>
        <q-item>
          <q-item-section avatar>
            登录密码
          </q-item-section>
          <q-item-section @click='moveTo("/user/password", null)'>
            <q-item-label class="text-right text-grey">
              修改
              <q-icon name="keyboard_arrow_right" size="sm" />
            </q-item-label>
          </q-item-section>
        </q-item>
        <q-separator v-if="mobLink" class="bg-grey-3" style="height:0.5rem" />
        <q-item v-if="mobLink">
          <q-item-section avatar>
            手机号
          </q-item-section>
          <q-item-section @click='moveTo(mobLink, { mob: record.mob })'>
            <q-item-label class="text-right" :class='record.mob ? "" : "text-grey"'>
              {{ "\n              " + record.mob ? record.mob : "绑定" + "\n              " }}
              <q-icon class="text-grey" name="keyboard_arrow_right" size="sm" />
            </q-item-label>
          </q-item-section>
        </q-item>
        <q-separator v-show="isStu != 'P'" class="bg-grey-3" style="height:0.5rem" />
        <q-item v-show="isStu != 'P'">
          <q-item-section avatar>
            微信
          </q-item-section>
          <q-item-section @click='registerWechat'>
            <q-item-label class="text-right" :class='record.wx_userinfo ? "" : "text-grey"'>
              {{ "\n              " + record.wx_userinfo ? record.wx_userinfo.nickname : "绑定" + "\n              " }}
              <q-icon class="text-grey" name="keyboard_arrow_right" size="sm" />
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
  name: "Password",
};
</script>
