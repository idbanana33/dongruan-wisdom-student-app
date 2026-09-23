<!--
  Source: assets/www/js/5.js -> webpack module "dc6c"
  Route: /user/login
  Component: Login
  Restoration: template decompiled from Vue render function; logic in sibling .logic.js
  Confidence: high for DOM structure / medium for expression quoting
-->
<template>
<q-layout view="lHh lpr lFf">
  <q-header class="bg-white text-black">
    <q-toolbar>
      <q-btn flat round dense icon="close" @click='goBack' />
      <q-toolbar-title>
        用户登录
      </q-toolbar-title>
    </q-toolbar>
  </q-header>
  <q-page-container>
    <q-page class="bg-white">
      <q-form @submit='onSubmit'>
        <q-list>
          <q-item>
            <q-item-section avatar>
              学校
            </q-item-section>
            <q-item-section>
              <q-input v-if="productMode && !serverName" v-model="server" dense hide-bottom-space lazy-rules :rules='[function (t) { return t && t.length > 0 || serverHint; }]' :placeholder='serverHint' mask="#####" @input='changeCollegeId' />
              <q-field v-if="productMode && serverName" dense>
                <template v-slot:control>
                  <div class="self-center full-width no-outline" tabindex="0">
                    {{ serverName }}
                  </div>
                </template>
                <template v-slot:append>
                  <q-icon class="cursor-pointer" name="cancel" @click='resetCollegeId' />
                </template>
              </q-field>
              <q-select v-else dense :value='server' use-input hide-selected fill-input input-debounce="0" :options='serverOptions' hide-bottom-space lazy-rules :rules='[function (t) { return t && t.length > 0 || serverHint; }]' :placeholder='serverHint' @filter='filterServer' @input-value='setServer' />
            </q-item-section>
          </q-item>
          <q-item>
            <q-item-section avatar>
              用户名
            </q-item-section>
            <q-item-section>
              <q-input v-model="userinfo.login_name" dense hide-bottom-space lazy-rules :rules='[function (e) { return e && e.length > 0 || "请输入学号/教工号/员工号"; }]' placeholder="请输入学号/教工号/员工号" @focus='displayNameList = true' @blur='displayNameList = false' @input='filterLoginName' />
              <q-list v-show="displayNameList && loginNameOptions" bordered dense separator>
                <q-item v-for="t in loginNameOptions" :key='t'>
                  <q-item-section @click='setLoginName(t)'>
                    {{ t }}
                  </q-item-section>
                </q-item>
              </q-list>
            </q-item-section>
          </q-item>
          <q-item>
            <q-item-section avatar>
              密码
            </q-item-section>
            <q-item-section>
              <q-input v-model="userinfo.password" dense :type='isPwd ? "password" : "text"' hide-bottom-space lazy-rules :rules='[function (e) { return e && e.length > 0 || "请输入密码"; }]' placeholder="请输入密码">
                <template v-slot:append>
                  <q-icon class="cursor-pointer" :name='isPwd ? "visibility_off" : "visibility"' @click='isPwd = !isPwd' />
                </template>
              </q-input>
            </q-item-section>
          </q-item>
          <q-item>
            <q-item-section avatar>
              验证码
            </q-item-section>
            <q-item-section>
              <q-input v-model="userinfo.verification_answer" dense hide-bottom-space lazy-rules :rules='[function (e) { return e && e.length > 0 || "请输入验证码"; }]' placeholder="请输入验证码" mask="###" />
            </q-item-section>
            <q-item-section side top>
              <img v-show="userinfo.verification_image" class="cursor-pointer" :src='"data:image/png;base64," + userinfo.verification_image' @click='getVerificationQuestion' />
            </q-item-section>
          </q-item>
          <q-item>
            <q-item-section>
              <q-btn-toggle v-model="roleType" class="my-custom-toggle" spread no-caps rounded unelevated toggle-color="primary" color="white" text-color="primary" :options='[{ label: "学生", value: "S" }, { label: "教师", value: "T" }, { label: "维修", value: "P" }]' />
            </q-item-section>
          </q-item>
          <q-item>
            <q-item-section>
              <q-item-label>
                <q-btn class="full-width" unelevated label="登 录" type="submit" color="primary" />
              </q-item-label>
              <q-item-label v-if="productMode" class="text-primary text-right" @click='moveToPwd'>
                忘记密码
              </q-item-label>
            </q-item-section>
          </q-item>
        </q-list>
      </q-form>
      <q-list v-show="wechatAppExists" class="q-mt-sm">
        <q-item>
          <q-item-section class="text-center">
            <div class="text-grey">
              其他登录方式
            </div>
            <div>
              <q-btn flat round icon="mdi-wechat" color="positive" @click='wxLogin' />
            </div>
          </q-item-section>
        </q-item>
      </q-list>
      <div class="text-grey text-center absolute-bottom q-mb-xs">
        <div class="row justify-between q-mx-sm">
          <div>
            {{ title + " v" + appVer }}
          </div>
          <div>
            <span class="text-primary" @click='moveTo("/policy/termsOfUse")'>
              用户协议
            </span>
            <span class="text-grey q-mx-xs">
              |
            </span>
            <span class="text-primary" @click='moveTo("/policy/privacyPolicy")'>
              隐私政策
            </span>
          </div>
        </div>
      </div>
    </q-page>
  </q-page-container>
</q-layout>
</template>

<script>
// The exact semantic component options are preserved in the sibling .logic.js file.
// This SFC isolates the original render tree for review and manual variable renaming.
export default {
  name: "Login",
};
</script>
