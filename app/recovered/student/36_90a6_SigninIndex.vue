<!--
  Source: assets/www/js/36.js -> webpack module "90a6"
  Route: /student/notice/stumanagedetail
  Component: SigninIndex
  Restoration: template decompiled from Vue render function; logic in sibling .logic.js
  Confidence: high for DOM structure / medium for expression quoting
-->
<template>
<q-layout view="lHh lpr lFf">
  <q-header class="bg-grey-3 text-black">
    <q-toolbar>
      <q-btn flat round dense icon="keyboard_arrow_left" @click='goBack' />
      <q-toolbar-title v-if="menuInfo">
        {{ menuInfo.title + "详情" }}
      </q-toolbar-title>
      <q-btn v-show="tab == 'progress'" flat round dense icon="search" @click='open'>
        <q-badge v-show="condCount != 0" color="orange" floating transparent>
          {{ condCount }}
        </q-badge>
      </q-btn>
    </q-toolbar>
    <q-expansion-item class="bg-white full-width q-ml-sm" switch-toggle-side expand-icon-toggle expand-separator>
      <q-card>
        <q-item>
          <q-item-section>
            <q-item-label caption>
              <span class="neu-css-after-colon">
                发起人
              </span>
              {{ record.teacher_name + "\n            " }}
            </q-item-label>
            <q-item-label caption>
              <span class="text-grey neu-css-after-colon">
                阅读率
              </span>
              {{ record.feedback_total + "/" + record.total + " \n              " }}
              <span :class='record.feedback_ratio >= 85 ? "text-positive" : record.feedback_ratio >= 60 ? "text-warning" : "text-red"'>
                {{ record.feedback_ratio + "%" }}
              </span>
            </q-item-label>
            <q-item-label caption>
              <span class="neu-css-after-colon">
                通知时间
              </span>
              {{ record.push_time + "\n            " }}
            </q-item-label>
            <q-item-label v-if="1 == record.confirm_flag" caption>
              <span class="text-grey neu-css-after-colon">
                确认率
              </span>
              {{ record.confirm_total + "/" + record.total + " \n              " }}
              <span :class='record.confirm_ratio >= 85 ? "text-positive" : record.confirm_ratio >= 60 ? "text-warning" : "text-red"'>
                {{ record.confirm_ratio + "%" }}
              </span>
            </q-item-label>
            <q-item-label caption>
              <span class="text-grey neu-css-after-colon">
                反馈截止时间
              </span>
              {{ record.feedback_deadline + "\n            " }}
            </q-item-label>
            <q-item-label v-if="null !== record.dep_name" caption>
              <span class="text-grey neu-css-after-colon">
                发布单位
              </span>
              {{ record.dep_name + "\n            " }}
            </q-item-label>
          </q-item-section>
        </q-item>
      </q-card>
      <template v-slot:header>
        <q-item-section>
          <q-item-label style="font-size:1.3em" lines="1">
            {{ record.title }}
          </q-item-label>
          <q-item-label caption>
            {{ record.notice_priority_name + ", " + record.status_name }}
          </q-item-label>
        </q-item-section>
        <q-item-section side>
          <q-btn flat dense icon="more_vert" size="sm" @click='drawerRight = !drawerRight' />
        </q-item-section>
      </template>
    </q-expansion-item>
    <q-separator style="height:0.1rem" color="grey-3" />
  </q-header>
  <q-drawer v-model="drawerRight" side="right" :width="200" :breakpoint="100" overlay bordered content-class="bg-white-3">
    <q-scroll-area class="fit">
      <q-list style="border-left:0.15rem solid #027be3" separator>
        <q-item v-show="tab == 'progress'" v-ripple clickable @click='exportList'>
          <q-item-section avatar>
            <q-icon name="get_app" size="sm" />
          </q-item-section>
          <q-item-section style="font-size:1.1rem">
            导出
          </q-item-section>
        </q-item>
      </q-list>
    </q-scroll-area>
  </q-drawer>
  <q-page-container>
    <q-page class="bg-grey-3">
      <q-pull-to-refresh v-show="tab == 'progress'" @refresh='refresh'>
        <q-card v-for="t in list" :key='t.id' class="bg-white q-mb-sm q-mx-sm" :style='"未阅读" == t.feedback_status_name ? "border-left:0.25rem solid #c10015;" : "已阅读" == t.feedback_status_name && "未确认" == t.confirm_status_name ? "border-left:0.25rem solid #b5b3b3;" : "border-left:0.25rem solid #027be3;"' flat>
          <q-item>
            <q-item-section>
              <q-item-label>
                <q-icon v-show="item.sex_name == '男'" name="person" color="blue" />
                <q-icon v-show="item.sex_name == '女'" name="person" color="pink" />
                {{ "\n              " + t.student_name + " " }}
                <span class="text-grey">
                  {{ "(" + t.student_no + ")" }}
                </span>
              </q-item-label>
              <q-item-label v-show="item.feedback_time" caption>
                {{ "阅读时间：" + t.feedback_time }}
              </q-item-label>
            </q-item-section>
            <q-item-section side top>
              <q-item-label>
                <span :class='"未阅读" == t.feedback_status_name ? "text-red" : "已阅读" == t.feedback_status_name ? "text-primary" : "text-positive"'>
                  {{ t.feedback_status_name }}
                </span>
              </q-item-label>
              <q-item-label v-if="1 == record.confirm_flag">
                <span class="q-ml-md" :class='"未确认" == t.confirm_status_name ? "text-red" : "已确认" == t.confirm_status_name ? "text-primary" : "text-positive"'>
                  {{ t.confirm_status_name }}
                </span>
              </q-item-label>
              <q-item-label v-if="'已确认' == t.confirm_status_name && null !== t.signature" @click='showSignature(t.signature)'>
                <span class="q-ml-md text-primary">
                  显示签名
                </span>
              </q-item-label>
            </q-item-section>
          </q-item>
        </q-card>
        <div v-show="!isLoading && paging.pageCount != paging.pageNum" class="text-center text-grey q-pt-sm q-pb-md" @click='loadList(null)'>
          加载更多...
        </div>
        <div v-show="!isLoading && paging.pageCount == paging.pageNum && list.length != 0" class="text-center text-grey q-pt-sm q-pb-md">
          没有更多了
        </div>
        <div v-show="!isLoading && list.length == 0" class="text-center text-grey q-pt-sm q-pb-md">
          暂无数据
        </div>
        <div v-show="isLoading" class="text-center text-grey q-pt-sm q-pb-md">
          <q-spinner-dots color="primary" size="md" />
        </div>
      </q-pull-to-refresh>
      <q-dialog v-model="dialog" position="bottom">
        <q-card style="width:350px">
          <q-linear-progress :value="1" color="primary" />
          <q-card-section class="row items-center justify-between" dense>
            <q-btn outline label="取消" color="grey" size="md" @click='close()' />
            <q-btn unelevated label="确定" color="primary" size="md" @click='getCondition' />
          </q-card-section>
          <q-separator />
          <q-list bordered>
            <q-item clickable>
              <q-item-section avatar top>
                <span>
                  阅读状态
                </span>
              </q-item-section>
              <q-item-section>
                <div class="row justify-evenly">
                  <q-btn v-for="t in [{ label: '未阅读', value: '1' }, { label: '已阅读', value: '2' }]" :key='t.value' outline :color='t.value == queryModel.feedback_status ? "primary" : "grey"' @click='getFeedValue(t.value)'>
                    {{ "\n                    " + t.label + "\n                    " }}
                    <q-badge v-show="queryModel.feedback_status == item.value" color="orange" floating>
                      √
                    </q-badge>
                  </q-btn>
                </div>
              </q-item-section>
            </q-item>
            <q-separator />
            <q-item v-show="record.confirm_flag == 1" clickable>
              <q-item-section avatar top>
                <span>
                  确认状态
                </span>
              </q-item-section>
              <q-item-section>
                <div class="row justify-evenly">
                  <q-btn v-for="t in [{ label: '未确认', value: '1' }, { label: '已确认', value: '2' }]" :key='t.value' outline :color='t.value == queryModel.confirm_status ? "primary" : "grey"' @click='getConValue(t.value)'>
                    {{ "\n                    " + t.label + "\n                    " }}
                    <q-badge v-show="queryModel.confirm_status == item.value" color="orange" floating>
                      √
                    </q-badge>
                  </q-btn>
                </div>
              </q-item-section>
            </q-item>
            <q-separator />
            <q-item v-ripple clickable>
              <q-item-section avatar top>
                <span>
                  综合查询
                </span>
              </q-item-section>
              <q-item-section>
                <q-input v-model="queryModel.mutli_search" outlined clearable dense />
                <q-item-label class="q-mt-xs" caption>
                  可以查询学号、姓名
                </q-item-label>
              </q-item-section>
            </q-item>
          </q-list>
        </q-card>
      </q-dialog>
      <q-dialog v-model="signatureStatus" persistent>
        <q-card class="full-width" flat>
          <q-card-section class="text-h6">
            签名详情
          </q-card-section>
          <q-card-section>
            <div class="row items-center">
              <q-img :src='stu_signature' />
            </div>
          </q-card-section>
          <q-card-section class="row q-gutter-sm justify-end">
            <q-btn v-close-popup unelevated color="primary" label="确定" />
          </q-card-section>
        </q-card>
      </q-dialog>
      <neu-manage-qa v-show="tab == 'qa'" class="bg-grey-3" taskMenuId="notice" :taskId='record.id + ""' :readonly='!record.is_author' align="justify" />
      <neu-notice-statistics v-show="tab == 'statistics'" :id='id' :title='record.title' :task_target='record.task_target' :noticeStatistics='model.noticeStatistics' :confirm_flag='record.confirm_flag' />
    </q-page>
  </q-page-container>
  <neu-export-data :config='exportCompConfig' />
</q-layout>
</template>

<script>
// The exact semantic component options are preserved in the sibling .logic.js file.
// This SFC isolates the original render tree for review and manual variable renaming.
export default {
  name: "SigninIndex",
};
</script>
