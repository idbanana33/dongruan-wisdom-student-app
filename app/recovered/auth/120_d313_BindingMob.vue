<!--
  Source: assets/www/js/120.js -> webpack module "d313"
  Route: /user/bindingMob
  Component: BindingMob
  Restoration: template decompiled from Vue render function; logic in sibling .logic.js
  Confidence: high for DOM structure / medium for expression quoting
-->
<template>
<q-layout view="lHh lpr lFf">
  <q-header class="bg-grey-3 text-black">
    <q-toolbar>
      <q-btn v-else flat round dense icon="keyboard_arrow_left" @click='goBack' />
      <q-toolbar-title>
        手机号绑定
      </q-toolbar-title>
    </q-toolbar>
  </q-header>
  <q-page-container>
    <q-page class="bg-grey-3 q-pb-sm">
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
        <q-list class="full-width">
          <q-item v-if="compelMob">
            <q-item-section>
              <q-item-label class="text-warning">
                根据学校要求，需绑定手机号后才可使用。
              </q-item-label>
            </q-item-section>
          </q-item>
          <q-separator v-if="compelMob" />
          <q-item v-if="preMob">
            <q-item-section>
              <q-item-label>
                您当前绑定的手机号为
                <span class="text-purple">
                  {{ preMob }}
                </span>
              </q-item-label>
            </q-item-section>
          </q-item>
          <q-separator v-if="preMob" />
          <q-item>
            <q-item-section avatar>
              <q-item-label>
                手机号
              </q-item-label>
            </q-item-section>
            <q-item-section>
              <q-input v-model="mob" dense hide-bottom-space lazy-rules :disable='mobLocked' placeholder="请输入11位手机号" mask="###########" @input='changeMob' />
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
              <q-btn unelevated label="绑定" color="primary" :disable='!mobLocked' @click='bindingMob' />
            </q-item-section>
          </q-item>
        </q-list>
      </q-card>
      <q-card v-if="captcha && 0 != managers.length" class="full-width" flat>
        <q-list class="full-width">
          <q-separator />
          <q-item>
            <q-item-section>
              <q-item-label>
                您可以向下列老师发送代绑手机号申请：
              </q-item-label>
            </q-item-section>
          </q-item>
          <q-separator />
          <q-item v-for="e in managers" :key='e.login_name'>
            <q-item-section>
              <q-item-label>
                {{ e.name }}
              </q-item-label>
              <q-item-label caption>
                {{ e.login_name }}
              </q-item-label>
            </q-item-section>
            <q-item-section side @click='applyBindingMob(e.login_name, e.name)'>
              <q-item-label class="text-primary cursor-pointer">
                申请
              </q-item-label>
            </q-item-section>
          </q-item>
        </q-list>
      </q-card>
      <q-card v-if="captcha && applyResult" class="full-width" flat>
        <q-list class="full-width">
          <q-separator />
          <q-item>
            <q-item-section>
              <q-item-label>
                {{ applyResult }}
              </q-item-label>
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
