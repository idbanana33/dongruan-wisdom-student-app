<!--
  Source: assets/www/js/chunk-common.js -> webpack module "156a"
  Route: (shared/core)
  Component: NeuManageQa
  Restoration: template decompiled from Vue render function; logic in sibling .logic.js
  Confidence: high for DOM structure / medium for expression quoting
-->
<template>
<q-card class="full-width" flat>
  <q-tabs v-model="tab" class="bg-white" dense active-color="primary" indicator-color="primary" align="justify">
    <q-tab name="unAnswer" label="待回答" />
    <q-tab name="answer" label="已回答" />
  </q-tabs>
  <q-card-section v-show="tab == 'unAnswer'">
    <div v-show="!askingList || askingList.length == 0" class="text-center text-grey">
      暂无待回答问题
    </div>
    <q-item v-for="(t, a) in askingList" :key='t.id' class="q-pa-md row justify-center">
      <q-item-section style="width:100%;max-width:400px">
        <q-chat-message :name='t.sender_name + "(" + t.sender_no + ")"' text-color="black" bg-color="white" :stamp='t.create_time'>
          {{ "\n            " + t.content + "\n          " }}
        </q-chat-message>
        <q-chat-message v-show="!viewMode" name="我" sent text-color="white" bg-color="blue-grey-5">
          <div v-show="!viewMode">
            <q-input v-model="item.answer" class="bg-white" outlined dense placeholder="请在此处填写回答内容" clearable clear-icon="close">
              <template v-slot:after>
                <q-btn class="q-mr-xs" color="blue-grey-5" label="回答" @click='submitAnswer(a)' />
              </template>
            </q-input>
            <q-checkbox v-model="item.secret_flag" class="q-mt-xs" dense label="仅提问人可见（隐私保护）" :true-value="1" :false-value="0" />
          </div>
        </q-chat-message>
      </q-item-section>
    </q-item>
  </q-card-section>
  <q-card-section v-show="tab == 'answer'">
    <div v-show="!answerList || answerList.length == 0" class="text-center text-grey">
      暂无已回答问题
    </div>
    <q-item v-for="t in answerList" :key='t.id' class="q-pa-md row justify-center">
      <div style="width:100%;max-width:400px">
        <q-chat-message :name='t.sender_no == user.login_name ? "我" : t.sender_name + "(" + t.sender_no + ")"' :sent='"T" == t.role_type' :text-color='"T" == t.role_type ? "white" : "black"' :bg-color='"T" == t.role_type ? "brown-5" : "white"' :stamp='t.create_time'>
          <span v-show="item.secret_flag == 1" class="text-grey text-caption q-mr-sm">
            仅提问人可见
          </span>
          <q-badge v-show="!viewMode && item.istop_time" class="cursor-pointer" :outline='"T" != t.role_type' color="grey" label="取消置顶" @click='setTop(t.id, 0)' />
          <q-badge v-show="!viewMode && !item.istop_time" class="cursor-pointer" :outline='"T" != t.role_type' color="grey" label="置顶" @click='setTop(t.id, 1)' />
          <q-badge v-show="!viewMode && item.role_type == 'T'" class="q-ml-sm cursor-pointer" :outline='"T" != t.role_type' color="negative" label="删除" @click='deleteQa(t.id, 0)' />
          <div class="q-mt-xs">
            {{ t.content }}
          </div>
        </q-chat-message>
        <div v-for="t in t.answers" :key='t.id' style="width:100%;max-width:400px">
          <q-chat-message :name='t.sender_no == user.login_name ? "我" : t.sender_name + "(" + t.sender_no + ")"' :stamp='t.create_time' text-color="white" bg-color="blue-grey-5" sent>
            <div class="text-right">
              <q-badge v-show="!viewMode && sub.role_type == 'T'" class="cursor-pointer" color="negative" label="删除" @click='deleteQa(t.id, t.parent_id)' />
            </div>
            <div class="q-mt-xs">
              {{ t.content }}
            </div>
          </q-chat-message>
        </div>
      </div>
    </q-item>
    <q-page-sticky position="bottom-right" :offset='fabPos'>
      <q-btn v-touch-pan.prevent.mouse.prevent.mouse="moveFab" round color="primary" icon="question_answer" @click='open' />
    </q-page-sticky>
  </q-card-section>
  <q-dialog v-model="dialog" position="bottom">
    <q-card style="width:350px">
      <q-linear-progress :value="1" color="primary" />
      <q-card-section class="row items-center justify-between" dense>
        <q-input v-model="message" class="full-width" outlined dense placeholder="输入留言内容，所有学生均可见" clearable clear-icon="close" filled>
          <template v-slot:prepend>
            <q-icon class="cursor-pointer" name="create" />
          </template>
          <template v-slot:after>
            <q-btn class="q-ml-md" color="primary" label="留言" @click='leaveMessage' />
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
  name: "NeuManageQa",
};
</script>
