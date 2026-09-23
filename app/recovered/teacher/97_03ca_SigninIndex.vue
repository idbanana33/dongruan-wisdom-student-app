<!--
  Source: assets/www/js/97.js -> webpack module "03ca"
  Route: /teacher/notice/detail
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
        <q-item v-ripple clickable @click='detailDialog = true'>
          <q-item-section avatar>
            <q-icon name="remove_red_eye" size="sm" />
          </q-item-section>
          <q-item-section style="font-size:1.1rem">
            预览正文
          </q-item-section>
        </q-item>
        <q-item v-if="0 == record.status && record.is_author" v-ripple clickable>
          <q-item-section avatar>
            <q-icon name="refresh" size="sm" color="primary" />
          </q-item-section>
          <q-item-section class="text-primary" style="font-size:1.1rem" @click='openExtendDialog'>
            重新开启
          </q-item-section>
        </q-item>
        <q-item v-if="1 == record.status && record.is_author" v-ripple clickable>
          <q-item-section avatar>
            <q-icon name="check" size="sm" color="primary" />
          </q-item-section>
          <q-item-section class="text-primary" style="font-size:1.1rem" @click='terminateNotice'>
            提前结束
          </q-item-section>
        </q-item>
        <q-item v-if="1 == record.status && record.is_author" v-ripple clickable>
          <q-item-section avatar>
            <q-icon name="access_time" size="sm" color="primary" />
          </q-item-section>
          <q-item-section class="text-primary" style="font-size:1.1rem" @click='openExtendDialog'>
            延期
          </q-item-section>
        </q-item>
        <q-item v-if="1 == record.status && record.is_author" v-ripple clickable>
          <q-item-section avatar>
            <q-icon name="reply" size="sm" color="negative" />
          </q-item-section>
          <q-item-section class="text-negative" style="font-size:1.1rem" @click='withdrawNotice'>
            撤回
          </q-item-section>
        </q-item>
        <q-item v-if="record.is_author || 'A' == roleId" v-ripple clickable>
          <q-item-section avatar>
            <q-icon name="delete" size="sm" color="red" />
          </q-item-section>
          <q-item-section class="text-red" style="font-size:1.1rem" @click='deleteNotice'>
            删除
          </q-item-section>
        </q-item>
        <q-item v-show="tab == 'progress'" v-ripple clickable @click='exportList'>
          <q-item-section avatar>
            <q-icon name="get_app" size="sm" />
          </q-item-section>
          <q-item-section style="font-size:1.1rem">
            导出
          </q-item-section>
        </q-item>
        <q-item v-show="tab == 'statistics'" v-ripple clickable>
          <q-item-section avatar>
            <q-icon name="get_app" size="sm" />
          </q-item-section>
          <q-item-section style="font-size:1.1rem" @click='exportLists'>
            导出
          </q-item-section>
        </q-item>
        <q-item v-show="tab == 'progress' && time != 0 && record.is_author" v-ripple clickable>
          <q-item-section avatar>
            <q-icon name="notifications" size="sm" color="primary" />
          </q-item-section>
          <q-item-section class="text-primary" style="font-size:1.1rem" @click='unnoticeAlert'>
            未阅读提醒(APP推送)
          </q-item-section>
        </q-item>
        <q-item v-show="tab == 'progress' && time != 0 && record.is_author && allowSmsRemind" v-ripple clickable>
          <q-item-section avatar>
            <q-icon name="notifications" size="sm" color="primary" />
          </q-item-section>
          <q-item-section class="text-primary" style="font-size:1.1rem" @click='sendSmsRemind'>
            未阅读提醒(短信提醒)
          </q-item-section>
        </q-item>
      </q-list>
    </q-scroll-area>
  </q-drawer>
  <q-page-container>
    <q-page class="bg-grey-3">
      <q-card flat>
        <q-item v-if="'statistics' == tab">
          <q-item-section>
            <q-item-label>
              <div class="text-grey">
                统计方式
              </div>
            </q-item-label>
            <q-item-label>
              <q-btn-toggle v-model="model.noticeStatistics" unelevated size="sm" :options='[{ label: "按班级统计", value: "1" }, { label: "按专业统计", value: "2" }, { label: "按院系统计", value: "3" }, { label: "按" + counsellorlabel + "统计", value: "4" }]' />
            </q-item-label>
          </q-item-section>
        </q-item>
      </q-card>
      <q-pull-to-refresh v-show="tab == 'progress'" @refresh='refresh'>
        <q-card v-for="e in list" :key='e.id' class="bg-white q-mb-sm q-mx-sm" :style='"未阅读" == e.feedback_status_name ? "border-left:0.25rem solid #c10015;" : "已阅读" == e.feedback_status_name && "未确认" == e.confirm_status_name ? "border-left:0.25rem solid #b5b3b3;" : "border-left:0.25rem solid #027be3;"' flat>
          <q-item>
            <q-item-section>
              <q-item-label>
                <q-icon v-show="item.sex_name == '男'" name="person" color="blue" />
                <q-icon v-show="item.sex_name == '女'" name="person" color="pink" />
                {{ "\n              " + e.student_name + " " }}
                <span class="text-grey">
                  {{ "(" + e.student_no + ")" }}
                </span>
              </q-item-label>
              <q-item-label lines="1" caption>
                {{ e.class_name + " " + e.major_name + " " + e.dep_name }}
              </q-item-label>
              <q-item-label lines="1" caption>
                {{ counsellorlabel + "：" + e.counsellor }}
              </q-item-label>
              <q-item-label v-show="item.feedback_time" caption>
                {{ "阅读时间：" + e.feedback_time }}
              </q-item-label>
            </q-item-section>
            <q-item-section side top>
              <q-item-label>
                <span :class='"未阅读" == e.feedback_status_name ? "text-red" : "已阅读" == e.feedback_status_name ? "text-primary" : "text-positive"'>
                  {{ e.feedback_status_name }}
                </span>
              </q-item-label>
              <q-item-label v-if="1 == record.confirm_flag">
                <span class="q-ml-md" :class='"未确认" == e.confirm_status_name ? "text-red" : "已确认" == e.confirm_status_name ? "text-primary" : "text-positive"'>
                  {{ e.confirm_status_name }}
                </span>
              </q-item-label>
              <q-item-label v-if="'已确认' == e.confirm_status_name && null !== e.signature" @click='showSignature(e.signature)'>
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
      <q-dialog v-model="detailDialog" :maximized='maximizedToggle'>
        <q-card class="full-width" flat>
          <q-card-section class="row items-center justify-between">
            <div class="text-h6">
              预览
            </div>
            <q-btn v-close-popup icon="close" flat round dense size="sm" />
          </q-card-section>
          <q-separator />
          <q-card-section>
            <div>
              <q-chip square text-color="white" :icon='menuInfo || {  }.icon' size="sm" :color='record.notice_priority_color'>
                {{ "\n              " + record.notice_priority_name + "\n            " }}
              </q-chip>
            </div>
            <div class="q-mt-sm text-bold">
              {{ record.title }}
            </div>
            <div class="q-mt-sm">
              <span class="text-grey neu-css-after-colon">
                发起人
              </span>
              {{ record.teacher_name + "\n          " }}
            </div>
            <div>
              <span class="text-grey neu-css-after-colon">
                反馈截止时间
              </span>
              {{ record.feedback_deadline + "\n          " }}
            </div>
            <div class="q-mt-sm" v-html='record.detail' />
            <div v-if="record.attachment && 0 != record.attachment.length" class="q-mt-sm" :class='record.attachment && 1 == record.attachment.length ? "row" : ""'>
              <span class="text-grey neu-css-after-colon">
                附件
              </span>
              <div v-for="e in record.attachment" :key='e.servername' class="cursor-pointer" @click='downloadFile(e.link, e.srcname)'>
                {{ e.srcname }}
              </div>
            </div>
          </q-card-section>
          <q-separator />
          <q-card-section>
            <div>
              <span class="text-grey neu-css-after-colon">
                允许班级干部查看任务数据
              </span>
              {{ 1 === record.stu_manage_flag ? "是" : "否" + "\n          " }}
              <div style="float:right;margin-top:-7px">
                <q-toggle v-if="record.is_author" v-model="record.stu_manage_flag" class="q-pa-sm" size="lg" checked-icon="check" unchecked-icon="clear" dense :false-value="0" :true-value="1" @input='changeAllowStuManageFlag' />
              </div>
            </div>
          </q-card-section>
          <q-separator />
          <q-card-section>
            <div>
              <span class="text-grey neu-css-after-colon">
                通知对象
              </span>
            </div>
            <neu-view-assigned-student :value='record.task_target' />
          </q-card-section>
          <q-separator />
          <q-card-section>
            <div>
              <span class="text-grey neu-css-after-colon">
                共享
              </span>
              <div style="float:right">
                <span v-show="record.is_author" class="text-grey" @click='openShareDialog'>
                  选择
                </span>
                <q-icon v-show="record.is_author" class="text-grey" name="keyboard_arrow_right" size="sm" />
              </div>
            </div>
            <neu-view-assigned-teacher :value='record.share_target' />
          </q-card-section>
        </q-card>
      </q-dialog>
      <q-dialog v-model="shareDialog" persistent fullWidth :maximized='maximizedToggle'>
        <div class="full-width bg-white">
          <div class="full-width row items-center justify-between q-px-md q-py-sm">
            <div class="text-bold">
              修改共享对象
            </div>
            <q-btn unelevated color="primary" label="完成" @click='updateShareTarget' />
          </div>
          <neu-assign-teacher v-model="shareTarget" />
        </div>
      </q-dialog>
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
                  <q-btn v-for="e in [{ label: '未阅读', value: '1' }, { label: '已阅读', value: '2' }]" :key='e.value' outline :color='e.value == queryModel.feedback_status ? "primary" : "grey"' @click='getFeedValue(e.value)'>
                    {{ "\n                    " + e.label + "\n                    " }}
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
                  <q-btn v-for="e in [{ label: '未确认', value: '1' }, { label: '已确认', value: '2' }]" :key='e.value' outline :color='e.value == queryModel.confirm_status ? "primary" : "grey"' @click='getConValue(e.value)'>
                    {{ "\n                    " + e.label + "\n                    " }}
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
                  可以查询学号、姓名、性别、手机号、年级、院系、专业、班级信息
                </q-item-label>
              </q-item-section>
            </q-item>
          </q-list>
        </q-card>
      </q-dialog>
      <q-dialog v-model="extendDialog" persistent>
        <q-card class="full-width" flat>
          <q-form @submit='extendNotice'>
            <q-card-section class="text-h6">
              {{ "\n            " + 1 == record.status ? "确认延期" : "确认重新开启" + "\n          " }}
            </q-card-section>
            <q-card-section>
              <div v-show="record.status == 0">
                重新开启后，
                <span class="text-red">
                  未阅读学生
                </span>
                将再次收到提醒。
              </div>
              <div class="row items-center">
                {{ "\n              " + 1 == record.status ? "延期" : "重新开启" + "反馈截止时间至：\n              " }}
                <q-field style="width:200px" outlined dense stack-label hide-bottom-space lazy-rules :rules='[function (e) { return !!e || "请填写该项"; }, function (t) { return t > e.record.feedback_deadline || "请填写原截止时间之后的时间"; }]' :value='feedbackDeadline'>
                  <template v-slot:control>
                    {{ feedbackDeadline }}
                  </template>
                  <template v-slot:append>
                    <q-icon class="cursor-pointer" name="event">
                      <q-popup-proxy transition-show="scale" transition-hide="scale">
                        <div>
                          <q-date v-model="feedbackDeadline" flat minimal mask="YYYY-MM-DD HH:mm">
                            <div class="row items-center justify-end">
                              <q-btn v-close-popup dense label="关闭" flat />
                            </div>
                          </q-date>
                        </div>
                      </q-popup-proxy>
                    </q-icon>
                    <q-icon class="cursor-pointer" name="access_time">
                      <q-popup-proxy transition-show="scale" transition-hide="scale">
                        <div class="row items-start">
                          <q-time v-model="feedbackDeadline" flat mask="YYYY-MM-DD HH:mm" format24h>
                            <div class="row items-center justify-end">
                              <q-btn v-close-popup dense label="关闭" flat />
                            </div>
                          </q-time>
                        </div>
                      </q-popup-proxy>
                    </q-icon>
                  </template>
                </q-field>
              </div>
            </q-card-section>
            <q-card-section class="row q-gutter-sm justify-end">
              <q-btn v-close-popup outline color="grey" label="取消" />
              <q-btn unelevated color="primary" :label='1 == record.status ? "延期" : "重新开启"' type="submit" />
            </q-card-section>
          </q-form>
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
  <q-footer class="bg-white text-primary" bordered>
    <q-tabs v-model="tab" class="text-black" no-caps active-color="primary" indicator-color="transparent" align="justify">
      <q-tab name="progress" label="通知进度" />
      <q-separator vertical />
      <q-tab name="statistics" label="通知统计" />
      <q-separator vertical />
      <q-tab name="qa" label="学生提问" />
    </q-tabs>
  </q-footer>
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
