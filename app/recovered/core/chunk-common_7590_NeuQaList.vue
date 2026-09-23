<!--
  Source: assets/www/js/chunk-common.js -> webpack module "7590"
  Route: (shared/core)
  Component: NeuQaList
  Restoration: template decompiled from Vue render function; logic in sibling .logic.js
  Confidence: high for DOM structure / medium for expression quoting
-->
<template>
<q-card class="full-width bg-grey-3" flat>
  <div class="text-weight-bold">
    我的问题
  </div>
  <div v-show="!messageList || messageList.length == 0" class="text-center text-grey">
    暂无数据
  </div>
  <div v-for="(t, a) in messageList" :key='a' class="q-pa-md row justify-center">
    <div style="width:100%;max-width:400px">
      <q-chat-message :name='(t.login_name == user.login_name ? "我" : t.name) + (null != t.istop_time ? "(置顶)" : "")' :text='[t.content]' :sent='"T" != t.role_type' :text-color='t.role_type, "white"' :bg-color='"T" != t.role_type ? "blue-grey-5" : "brown-5"' :stamp='1 == t.secret_flag ? t.create_time + "(仅自己可见)" : t.create_time' />
    </div>
    <div v-for="e in t.answer" :key='e.id' style="width:100%;max-width:400px">
      <q-chat-message :name='e.name' :text='[e.content]' :stamp='e.create_time' text-color="black" bg-color="white" />
    </div>
  </div>
  <q-page-sticky position="bottom-right" :offset='fabPos'>
    <q-btn v-touch-pan.prevent.mouse.prevent.mouse="moveFab" round color="primary" icon="create" @click='open' />
  </q-page-sticky>
  <q-dialog v-model="dialog" position="bottom">
    <q-card style="width:350px">
      <q-linear-progress :value="1" color="primary" />
      <q-card-section class="row items-center justify-between" dense>
        <q-input v-model="contact" outlined dense placeholder="在此输入你的问题。" clearable clear-icon="close" filled>
          <template v-slot:prepend>
            <q-icon class="cursor-pointer" name="create" />
          </template>
          <template v-slot:after>
            <q-btn class="q-ml-md" color="primary" label="提交" @click='updateQuestion()' />
          </template>
        </q-input>
      </q-card-section>
    </q-card>
  </q-dialog>
</q-card>
</template>

<script>
// The exact semantic component options are preserved in the sibling .logic.js file.
// This SFC isolates the original render tree for review and manual variable renaming.
export default {
  name: "NeuQaList",
};
</script>
