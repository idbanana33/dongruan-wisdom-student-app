<!--
  Source: assets/www/js/124.js -> webpack module "62a1"
  Route: /user/password
  Component: Password
  Restoration: template decompiled from Vue render function; logic in sibling .logic.js
  Confidence: high for DOM structure / medium for expression quoting
-->
<template>
<q-layout view="lHh lpr lFf">
  <q-header class="bg-white text-black">
    <q-toolbar>
      <q-btn flat round dense icon="close" @click='goBack' />
      <q-toolbar-title>
        修改密码
      </q-toolbar-title>
    </q-toolbar>
  </q-header>
  <q-page-container>
    <q-page class="bg-white">
      <q-form @submit='onSubmit'>
        <q-list>
          <q-item>
            <q-item-section avatar>
              原密码
            </q-item-section>
            <q-item-section>
              <q-input v-model="oldpassword" :type='isPwd0 ? "password" : "text"' dense hide-bottom-space lazy-rules :rules='[function (t) { return t && t.length > 0 || "请输入原密码"; }]'>
                <template v-slot:append>
                  <q-icon class="cursor-pointer" :name='isPwd0 ? "visibility_off" : "visibility"' @click='isPwd0 = !isPwd0' />
                </template>
              </q-input>
            </q-item-section>
          </q-item>
          <q-item>
            <q-item-section avatar>
              新密码
            </q-item-section>
            <q-item-section>
              <q-input v-model="newpassword" ref=""password"" :type='isPwd ? "password" : "text"' dense hide-bottom-space lazy-rules :rules='[function (t) { return checkPwd(t); }]' @blur='validConfirmPwd'>
                <template v-slot:append>
                  <q-icon class="cursor-pointer" :name='isPwd ? "visibility_off" : "visibility"' @click='isPwd = !isPwd' />
                </template>
              </q-input>
            </q-item-section>
          </q-item>
          <q-item>
            <q-item-section avatar>
              确认密码
            </q-item-section>
            <q-item-section>
              <q-input v-model="password2" ref=""password2"" :type='isPwd2 ? "password" : "text"' dense hide-bottom-space lazy-rules :rules='[function (s) { return s == t.$refs.password.value || "两次密码输入的不一致"; }]'>
                <template v-slot:append>
                  <q-icon class="cursor-pointer" :name='isPwd2 ? "visibility_off" : "visibility"' @click='isPwd2 = !isPwd2' />
                </template>
              </q-input>
            </q-item-section>
          </q-item>
          <q-item>
            <q-item-section>
              <q-btn class="full-width" unelevated label="修改" type="submit" color="primary" />
            </q-item-section>
          </q-item>
        </q-list>
      </q-form>
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
