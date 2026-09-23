<!--
  Source: assets/www/js/83.js -> webpack module "3865"
  Route: /teacher/leave/multiStudent
  Component: MultiStudent
  Restoration: template decompiled from Vue render function; logic in sibling .logic.js
  Confidence: high for DOM structure / medium for expression quoting
-->
<template>
<q-layout view="lHh lpr lFf">
  <q-header class="bg-grey-3 text-black">
    <q-toolbar>
      <q-btn flat round dense icon="keyboard_arrow_left" @click='goBack' />
      <q-toolbar-title>
        请假学生
      </q-toolbar-title>
    </q-toolbar>
  </q-header>
  <q-page-container>
    <q-page class="bg-grey-3">
      <q-pull-to-refresh @refresh='refresh'>
        <q-card v-for="t in student_list" :key='t.id' class="bg-white q-mb-sm q-mx-sm" flat>
          <q-item>
            <q-item-section>
              <q-item-label>
                <q-icon v-show="item.sex_name == '男'" name="person" color="blue" />
                <q-icon v-show="item.sex_name == '女'" name="person" color="pink" />
                {{ "\n                " + t.name + " (" + t.login_name + ")\n              " }}
              </q-item-label>
              <q-item-label>
                {{ "\n                " + t.report_status_name + " " + t.mob + "\n              " }}
              </q-item-label>
              <q-item-label caption>
                {{ "\n                " + counsellorlabel + "：" + t.counsellor + "\n              " }}
              </q-item-label>
              <q-item-label lines="2" caption>
                {{ t.class_name + " " + t.major_name + " " + t.dep_name + " " + t.grade_name }}
              </q-item-label>
            </q-item-section>
          </q-item>
        </q-card>
        <div v-show="!isLoading && paging.pageCount != paging.pageNum" class="text-center text-grey q-pt-sm q-pb-md" @click='getLeaveByStudent(null)'>
          加载更多...
        </div>
        <div v-show="!isLoading && paging.pageCount == paging.pageNum && student_list.length != 0" class="text-center text-grey q-pt-sm q-pb-md">
          没有更多了
        </div>
        <div v-show="!isLoading && student_list.length == 0" class="text-center text-grey q-pt-sm q-pb-md">
          暂无学生
        </div>
        <div v-show="isLoading" class="text-center text-grey q-pt-sm q-pb-md">
          <q-spinner-dots color="primary" size="md" />
        </div>
      </q-pull-to-refresh>
    </q-page>
  </q-page-container>
</q-layout>
</template>

<script>
// The exact semantic component options are preserved in the sibling .logic.js file.
// This SFC isolates the original render tree for review and manual variable renaming.
export default {
  name: "MultiStudent",
};
</script>
