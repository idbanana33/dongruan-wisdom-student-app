<!--
  Source: assets/www/js/122.js -> webpack module "5e71"
  Route: /user/findPwd
  Component: BindingMob
  Restoration: template decompiled from Vue render function; logic in sibling .logic.js
  Confidence: high for DOM structure / medium for expression quoting
-->
<template>
<q-layout view="lHh lpr lFf">
  <q-header class="bg-white text-black">
    <q-toolbar>
      <q-btn flat round dense icon="close" @click='goBack' />
      <q-toolbar-title>
        密码找回
      </q-toolbar-title>
    </q-toolbar>
  </q-header>
  <q-page-container>
    <q-page class="bg-white">
      <q-card v-else class="full-width" flat>
        <q-list class="full-width">
          <q-item>
            <q-item-section>
              <q-item-label class="text-center" caption>
                该功能暂未开放
              </q-item-label>
            </q-item-section>
          </q-item>
        </q-list>
      </q-card>
      <q-card v-if="captcha" class="full-width" flat>
        <q-list v-show="step == 1" class="full-width">
          <q-item>
            <q-item-section avatar>
              <q-item-label>
                用户名
              </q-item-label>
            </q-item-section>
            <q-item-section>
              <q-input v-model="login_name" dense hide-bottom-space lazy-rules :disable='mobLocked' placeholder="请输入学号/教工号" />
            </q-item-section>
          </q-item>
          <q-item>
            <q-item-section>
              <q-btn unelevated label="下一步" color="primary" @click='nextStep(2)' />
            </q-item-section>
          </q-item>
        </q-list>
        <q-list v-show="step == 2" class="full-width">
          <q-item>
            <q-item-section avatar>
              <q-item-label>
                手机号
              </q-item-label>
            </q-item-section>
            <q-item-section>
              <q-input v-model="mob" dense hide-bottom-space lazy-rules :disable='mobLocked' placeholder="请输入11位手机号" mask="###########" />
            </q-item-section>
          </q-item>
          <q-item>
            <q-item-section avatar>
              <q-item-label>
                验证码
              </q-item-label>
            </q-item-section>
            <q-item-section>
              <q-input v-model="vcode" dense hide-bottom-space lazy-rules :disable='!mobLocked' placeholder="请输入6位验证码" mask="######" />
            </q-item-section>
            <q-item-section side>
              <q-item-label :class='sent ? "" : "text-primary cursor-pointer"' @click='!sent && sendVcode()'>
                {{ sendLabel }}
              </q-item-label>
            </q-item-section>
          </q-item>
          <q-item>
            <q-item-section>
              <q-btn unelevated label="下一步" color="primary" :disable='!mobLocked' @click='handleNextStep(3)' />
            </q-item-section>
          </q-item>
          <q-item>
            <q-item-section class="text-grey">
              {{ "\n              若未绑定手机号或长时间接收不到验证码，请联系管理员（教师用户）或" + counsellorLabel + "（学生用户）重置登录密码。\n            " }}
            </q-item-section>
          </q-item>
        </q-list>
        <q-list v-show="step == 3" class="full-width">
          <q-item>
            <q-item-section avatar>
              新密码
            </q-item-section>
            <q-item-section>
              <q-input v-model="newpassword" ref=""password"" :type='isPwd ? "password" : "text"' dense lazy-rules hide-bottom-space placeholder="请输入新密码(8-30位数字字母特殊符号混合)">
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
              <q-input v-model="password2" ref=""password2"" :type='isPwd2 ? "password" : "text"' dense lazy-rules hide-bottom-space placeholder="请输入确认密码">
                <template v-slot:append>
                  <q-icon class="cursor-pointer" :name='isPwd2 ? "visibility_off" : "visibility"' @click='isPwd2 = !isPwd2' />
                </template>
              </q-input>
            </q-item-section>
          </q-item>
          <q-item>
            <q-item-section>
              <q-btn unelevated label="保存" color="primary" @click='resetPwd' />
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
  name: "BindingMob",
};
</script>
