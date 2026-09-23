<!--
  Source: assets/www/js/84.js -> webpack module "a858"
  Route: /teacher/leave/index
  Component: Navigation
  Restoration: template decompiled from Vue render function; logic in sibling .logic.js
  Confidence: high for DOM structure / medium for expression quoting
-->
<template>
<q-layout view="lHh lpr lFf">
  <q-header class="bg-grey-3 text-black">
    <q-toolbar>
      <q-btn flat round dense icon="keyboard_arrow_left" @click='goBack' />
      <q-toolbar-title>
        {{ menuInfo || {  }.title }}
      </q-toolbar-title>
    </q-toolbar>
  </q-header>
  <q-page-container>
    <q-page class="bg-grey-3 q-pb-sm">
      <q-card class="bg-white q-mb-sm q-mx-sm q-py-md" flat @click='getList("reviewing")'>
        <q-item>
          <q-item-section avatar>
            <q-item-label>
              <span class="material-icons" style="font-size:30px;color:#1E90FF">
                pending_actions
              </span>
            </q-item-label>
          </q-item-section>
          <q-item-section>
            <q-item-label style="font-size:1.01rem">
              待审批
            </q-item-label>
            <q-item-label caption>
              待审批的请假信息
            </q-item-label>
          </q-item-section>
          <q-item-section side>
            <q-item-label>
              <span v-show="count !== 0" style="color:#FF0000">
                {{ "(" + count + ")" }}
              </span>
              <q-icon name="keyboard_arrow_right" size="sm" />
            </q-item-label>
          </q-item-section>
        </q-item>
      </q-card>
      <q-card class="bg-white q-mb-sm q-mx-sm q-py-md" flat @click='getList("reviewed")'>
        <q-item>
          <q-item-section avatar>
            <q-item-label>
              <span class="material-icons" style="font-size:30px;color:#32CD32">
                assignment_turned_in
              </span>
            </q-item-label>
          </q-item-section>
          <q-item-section>
            <q-item-label style="font-size:1.01rem">
              已审批
            </q-item-label>
            <q-item-label caption>
              审批完成的请假信息
            </q-item-label>
          </q-item-section>
          <q-item-section side>
            <q-item-label>
              <q-icon name="keyboard_arrow_right" size="sm" />
            </q-item-label>
          </q-item-section>
        </q-item>
      </q-card>
      <q-card class="bg-white q-mb-sm q-mx-sm q-py-md" flat @click='getList("all")'>
        <q-item>
          <q-item-section avatar>
            <q-item-label>
              <span class="material-icons" style="font-size:30px;color:#696969">
                receipt_long
              </span>
            </q-item-label>
          </q-item-section>
          <q-item-section>
            <q-item-label style="font-size:1.01rem">
              请假记录
            </q-item-label>
            <q-item-label caption>
              全部的请假信息
            </q-item-label>
          </q-item-section>
          <q-item-section side>
            <q-item-label>
              <q-icon name="keyboard_arrow_right" size="sm" />
            </q-item-label>
          </q-item-section>
        </q-item>
      </q-card>
      <q-card class="bg-white q-mb-sm q-mx-sm q-py-md" flat @click='getListMulti("leave")'>
        <q-item>
          <q-item-section avatar>
            <q-item-label>
              <span class="material-icons" style="font-size:30px;color:#696969">
                assignment_ind
              </span>
            </q-item-label>
          </q-item-section>
          <q-item-section>
            <q-item-label style="font-size:1.01rem">
              我的批量请假
            </q-item-label>
            <q-item-label caption>
              教师的全部批量请假信息
            </q-item-label>
          </q-item-section>
          <q-item-section side>
            <q-item-label>
              <q-icon name="keyboard_arrow_right" size="sm" />
            </q-item-label>
          </q-item-section>
        </q-item>
      </q-card>
      <q-card class="bg-white q-mb-sm q-mx-sm q-py-md" flat @click='getListMulti("review")'>
        <q-item>
          <q-item-section avatar>
            <q-item-label>
              <span class="material-icons" style="font-size:30px;color:#696969">
                assignment
              </span>
            </q-item-label>
          </q-item-section>
          <q-item-section>
            <q-item-label style="font-size:1.01rem">
              批量请假审批
            </q-item-label>
            <q-item-label caption>
              需要教师审批的全部批量请假信息
            </q-item-label>
          </q-item-section>
          <q-item-section side>
            <q-item-label>
              <q-icon name="keyboard_arrow_right" size="sm" />
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
  name: "Navigation",
};
</script>
