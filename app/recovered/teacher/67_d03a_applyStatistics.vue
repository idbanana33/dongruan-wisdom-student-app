<!--
  Source: assets/www/js/67.js -> webpack module "d03a"
  Route: /teacher/apply/statistics
  Component: applyStatistics
  Restoration: template decompiled from Vue render function; logic in sibling .logic.js
  Confidence: high for DOM structure / medium for expression quoting
-->
<template>
<q-layout view="lHh lpr lFf">
  <q-header class="bg-grey-3 text-black">
    <q-toolbar>
      <q-btn flat round dense icon="keyboard_arrow_left" @click='goBack' />
      <q-toolbar-title>
        {{ t.taskTitle }}
      </q-toolbar-title>
      <q-btn flat round dense icon="get_app" @click='exportList' />
    </q-toolbar>
    <q-expansion-item class="bg-white full-width q-ml-sm" switch-toggle-side expand-icon-toggle expand-separator>
      <q-card>
        <q-item>
          <q-item-section>
            <q-item-label caption>
              <span class="neu-css-after-colon">
                发起人
              </span>
              {{ record.teacher_name + "\n              " }}
              <span class="neu-css-after-colon q-ml-lg">
                已/总执行次数
              </span>
              {{ record.done_total + "/" + record.total + "\n            " }}
            </q-item-label>
            <q-item-label caption>
              <span class="neu-css-after-colon">
                执行频率
              </span>
              {{ record.frequency_name + "\n            " }}
            </q-item-label>
            <q-item-label caption>
              <span class="neu-css-after-colon">
                执行时间
              </span>
              {{ timeSlot + "\n            " }}
            </q-item-label>
            <q-item-label v-if="0 != record.apply_max && menuInfo" caption>
              <span class="text-grey neu-css-after-colon">
                {{ applyShortTitle + "人数限制" }}
              </span>
              {{ record.apply_max + "\n            " }}
            </q-item-label>
            <q-item-label v-if="0 == record.apply_max && menuInfo" caption>
              <span class="text-grey neu-css-after-colon">
                {{ applyShortTitle + "人数限制" }}
              </span>
              无
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
            {{ record.notice_priority_name }}
          </q-item-label>
        </q-item-section>
        <q-item-section side>
          <q-btn flat dense icon="more_vert" size="sm" @click='drawerRight = !drawerRight' />
        </q-item-section>
      </template>
    </q-expansion-item>
    <q-separator style="height:0.1rem" color="grey-3" />
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
          <q-item v-if="record.is_author" v-ripple clickable @click='copyApply'>
            <q-item-section avatar>
              <q-icon name="content_copy" size="sm" color="primary" />
            </q-item-section>
            <q-item-section class="text-primary" style="font-size:1.1rem">
              复制
            </q-item-section>
          </q-item>
          <q-item v-if="1 == record.status && record.is_author" v-ripple clickable @click='terminateJoblog'>
            <q-item-section avatar>
              <q-icon name="check" size="sm" color="primary" />
            </q-item-section>
            <q-item-section class="text-primary" style="font-size:1.1rem">
              提前结束
            </q-item-section>
          </q-item>
          <q-item v-if="record.is_author && 'S' == record.frequency && 0 !== record.status" v-ripple clickable @click='openExtendDialog'>
            <q-item-section avatar>
              <q-icon :name='2 == record.status ? "refresh" : "access_time"' size="sm" color="primary" />
            </q-item-section>
            <q-item-section class="text-primary" style="font-size:1.1rem">
              {{ 2 == record.status ? "重新开启" : "延期" }}
            </q-item-section>
          </q-item>
          <q-item v-if="record.is_author || 'A' == roleId" v-ripple clickable @click='deleteApply'>
            <q-item-section avatar>
              <q-icon name="delete" size="sm" color="red" />
            </q-item-section>
            <q-item-section class="text-red" style="font-size:1.1rem">
              删除
            </q-item-section>
          </q-item>
        </q-list>
      </q-scroll-area>
    </q-drawer>
  </q-header>
  <q-page-container>
    <q-page class="bg-grey-3 q-pb-sm">
      <q-pull-to-refresh ref=""pageRefresh"" @refresh='refresh'>
        <q-card v-for="e in list" :key='e.id' class="bg-white q-mb-sm q-mx-sm" flat @click='goDetail(e.batch_no)'>
          <q-item>
            <q-item-section>
              <q-item-label class="q-mb-xs" caption lines="1">
                <span class="neu-css-after-colon">
                  {{ menuInfo.title + "时间段" }}
                </span>
                {{ e.timeslot + "\n                " }}
              </q-item-label>
              <q-item-label class="row" style="min-width:250px" caption lines="1">
                <div class="col-6">
                  <span class="neu-css-after-colon">
                    {{ menuInfo.title + "率" }}
                  </span>
                  {{ e.applyedrate + " %" }}
                </div>
                <div class="col-6">
                  <span class="neu-css-after-colon">
                    {{ "可" + menuInfo.title + "人数" }}
                  </span>
                  {{ e.applytotal }}
                </div>
              </q-item-label>
              <q-item-label class="row" style="min-width:250px" caption lines="1">
                <div class="col-6">
                  <span class="neu-css-after-colon">
                    {{ "已" + menuInfo.title + "人数" }}
                  </span>
                  {{ e.applyed }}
                </div>
                <div class="col-6">
                  <span class="neu-css-after-colon">
                    {{ "未" + menuInfo.title + "人数" }}
                  </span>
                  {{ e.noapply }}
                </div>
              </q-item-label>
            </q-item-section>
            <q-item-section side>
              <q-item-label>
                <q-icon name="keyboard_arrow_right" size="xs" />
              </q-item-label>
            </q-item-section>
          </q-item>
        </q-card>
        <div v-show="!isLoading && paging.pageCount != paging.pageNum" class="text-center text-grey q-pt-sm q-pb-md" @click='getStatisticsList(null)'>
          加载更多...
        </div>
        <div v-show="!isLoading && paging.pageCount == paging.pageNum && list.length != 0" class="text-center text-grey q-pt-sm q-pb-md">
          没有更多了
        </div>
        <div v-show="!isLoading && list.length == 0" class="text-center text-grey q-pt-sm q-pb-md">
          {{ "\n            暂无" + menuInfo.title + "数据\n          " }}
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
            <div class="q-mt-sm text-bold">
              {{ record.title }}
            </div>
            <div class="q-mt-sm">
              <span class="text-grey neu-css-after-colon">
                发起人
              </span>
              {{ record.teacher_name + "\n              " }}
            </div>
            <div>
              <span class="text-grey neu-css-after-colon">
                创建时间
              </span>
              {{ record.create_time + "\n              " }}
            </div>
            <div class="q-mt-sm" v-html='record.detail' />
            <div v-if="record.attachment && 0 != record.attachment.length" class="q-mt-sm" :class='record.attachment && 1 == record.attachment.length ? "row" : ""'>
              <div class="text-grey neu-css-after-colon">
                附件
              </div>
              <div>
                <div v-for="e in record.attachment" :key='e.servername' class="cursor-pointer" @click='downloadFile(e.link, e.srcname)'>
                  {{ e.srcname }}
                </div>
              </div>
            </div>
          </q-card-section>
          <q-separator />
          <q-card-section>
            <div>
              <span class="text-grey neu-css-after-colon">
                执行频率
              </span>
              {{ record.frequency_name + "\n              " }}
            </div>
            <div v-if="'S' == record.frequency">
              <span class="text-grey neu-css-after-colon">
                开始截止时间
              </span>
              {{ record.single_begin_time + " ~ " + record.single_end_time + "\n              " }}
            </div>
            <div v-if="'L' == record.frequency">
              <span class="text-grey neu-css-after-colon">
                循环频率
              </span>
              {{ getLoopFrequencyName(record.loop_frequency) + "\n              " }}
            </div>
            <div v-if="'L' == record.frequency">
              <span class="text-grey neu-css-after-colon">
                开始截止日期
              </span>
              {{ record.loop_begin_date + " ~ " + record.loop_end_date + "\n              " }}
            </div>
            <div v-if="'L' == record.frequency">
              <span class="text-grey neu-css-after-colon">
                {{ menuInfo || {  }.title + "时间段" }}
              </span>
              {{ record.loop_begin_time + " ~ " + record.loop_end_time + "\n              " }}
            </div>
            <div v-if="'A' == record.frequency" class="row">
              <span class="text-grey neu-css-after-colon">
                开始截止时间
              </span>
              <div>
                <div v-for="(e, a) in record.appointed_date" :key='a'>
                  {{ e.begin_time + " ~ " + e.end_time }}
                </div>
              </div>
            </div>
            <div>
              <span class="text-grey neu-css-after-colon">
                {{ applyShortTitle + "人数限制" }}
              </span>
              {{ record.apply_max > 0 ? record.apply_max : "无" + "\n              " }}
            </div>
            <div>
              <span class="text-grey neu-css-after-colon">
                需要学生定位信息
              </span>
              {{ 1 === record.need_location ? "是" : "否" + "\n              " }}
            </div>
            <div>
              <span class="text-grey neu-css-after-colon">
                {{ "允许" + counsellorlabel + "撤回学生数据" }}
              </span>
              {{ 1 === record.allow_counsellor ? "是" : "否" + "\n                " }}
              <div style="float:right;margin-top:-10px">
                <q-toggle v-if="record.is_author" v-model="record.allow_counsellor" class="q-pa-sm" size="lg" checked-icon="check" unchecked-icon="clear" dense :false-value="0" :true-value="1" @input='changeAllowCounsellor' />
              </div>
            </div>
          </q-card-section>
          <q-separator />
          <q-card-section>
            <div>
              <span class="text-grey neu-css-after-colon">
                允许班级干部查看任务数据
              </span>
              {{ 1 === record.stu_manage_flag ? "是" : "否" + "\n              " }}
              <div style="float:right;margin-top:-7px">
                <q-toggle v-if="record.is_author" v-model="record.stu_manage_flag" class="q-pa-sm" size="lg" checked-icon="check" unchecked-icon="clear" dense :false-value="0" :true-value="1" @input='changeAllowStuManageFlag' />
              </div>
            </div>
          </q-card-section>
          <q-separator />
          <q-card-section>
            <div>
              <span class="text-grey neu-css-after-colon">
                {{ menuInfo || {  }.title + "对象" }}
              </span>
              <div style="float:right">
                <span v-show="record.is_author && record.frequency != 'S'" class="text-grey" @click='taskTargetDialogOpen()'>
                  选择
                </span>
                <q-icon v-show="record.is_author && record.frequency != 'S'" class="text-grey" name="keyboard_arrow_right" size="sm" />
              </div>
              <br />
              <span v-if="record.is_author && 'S' != record.frequency" class="text-grey text-caption">
                周循环，指定日期频率修改任务对象后下次执行生效
              </span>
            </div>
            <neu-view-assigned-student :value='record.task_target' />
          </q-card-section>
          <q-separator />
          <q-card-section>
            <div>
              <span class="text-grey neu-css-after-colon">
                {{ "无需" + menuInfo || {  }.title + "对象" }}
              </span>
              <div style="float:right">
                <span v-show="record.is_author && record.frequency != 'S'" class="text-grey" @click='taskTargetExcludDialogOpen()'>
                  选择
                </span>
                <q-icon v-show="record.is_author && record.frequency != 'S'" class="text-grey" name="keyboard_arrow_right" size="sm" />
              </div>
              <br />
              <span v-if="record.is_author && 'S' != record.frequency" class="text-grey text-caption">
                周循环，指定日期频率修改无需任务对象后下次执行生效
              </span>
            </div>
            <neu-view-assigned-student :value='record.task_target_excluding' />
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
          <q-separator v-if="record.info_config" />
          <q-card-section v-if="record.info_config">
            <div>
              <span class="text-grey neu-css-after-colon">
                信息收集表单
              </span>
            </div>
            <div v-for="(e, a) in record.info_config" :key='a' class="bg-grey-2 q-pa-sm q-mt-sm">
              <neu-widget v-model="infoModel[index]" :config='e' :viewMode='true' />
            </div>
          </q-card-section>
          <q-separator v-if="record.reviewer" />
          <q-card-section v-if="record.reviewer">
            <div>
              <span class="text-grey neu-css-after-colon">
                审批流程
              </span>
            </div>
            <div v-for="(e, a) in record.reviewer" :key='a' class="bg-grey-2 q-pa-sm q-mt-sm">
              <div>
                <span class="neu-css-after-colon">
                  {{ e.review_level + "级审批人员" }}
                </span>
              </div>
              <neu-view-assigned-teacher :value='e.teacher' />
            </div>
          </q-card-section>
        </q-card>
      </q-dialog>
      <q-dialog v-model="taskTargetDialog" persistent :maximized='true'>
        <q-card class="full-width" flat>
          <q-toolbar>
            <div class="full-width row items-center justify-between q-px-xs q-py-sm">
              <div class="text-bold text-black">
                {{ "设置" + menuInfo || {  }.title + "对象" }}
              </div>
              <q-btn unelevated color="primary" label="完成" @click='updateActionTarget' />
            </div>
          </q-toolbar>
          <q-card-section>
            <neu-assign-student v-model="actionTarget" :permit='menuInfo ? menuInfo.edit_permit : null' permit-mode="E" :menu-id='menuInfo ? menuInfo.id : null' />
          </q-card-section>
        </q-card>
      </q-dialog>
      <q-dialog v-model="taskTargetExcludDialog" persistent :maximized='true'>
        <q-card class="full-width" flat>
          <q-toolbar>
            <div class="full-width row items-center justify-between q-px-xs q-py-sm">
              <div class="text-bold text-black">
                {{ "设置无需" + menuInfo || {  }.title + "对象" }}
              </div>
              <q-btn unelevated color="primary" label="完成" @click='updateNoActionTarget' />
            </div>
          </q-toolbar>
          <q-card-section>
            <neu-assign-student v-model="noActionTarget" :permit='menuInfo ? menuInfo.edit_permit : null' permit-mode="E" :menu-id='menuInfo ? menuInfo.id : null' />
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
      <q-dialog v-model="extendDialog" persistent>
        <q-card class="full-width" flat>
          <q-form @submit='resetTime'>
            <q-card-section class="text-h6">
              {{ "\n                " + 1 == record.status ? "确认延期" : "确认重新开启" + "\n              " }}
            </q-card-section>
            <q-card-section>
              <div v-show="record.status == 2">
                重新开启后，
                <span class="text-red">
                  未填写学生
                </span>
                将再次收到提醒。
              </div>
              <div class="row items-center">
                {{ "\n                  " + 1 == record.status ? "延期" : "重新开启" + "反馈截止时间至：\n                  " }}
                <q-field style="width:200px" outlined dense stack-label hide-bottom-space lazy-rules :rules='[function (e) { return !!e || "请填写该项"; }, function (t) { return t > e.record.end_time || "请填写原截止时间之后的时间"; }]' :value='collect_end_time'>
                  <template v-slot:control>
                    {{ collect_end_time }}
                  </template>
                  <template v-slot:append>
                    <q-icon class="cursor-pointer" name="event">
                      <q-popup-proxy transition-show="scale" transition-hide="scale">
                        <div>
                          <q-date v-model="collect_end_time" flat minimal mask="YYYY-MM-DD HH:mm">
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
                          <q-time v-model="collect_end_time" flat mask="YYYY-MM-DD HH:mm" format24h>
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
      <neu-export-data :config='exportCompConfig' />
    </q-page>
  </q-page-container>
</q-layout>
</template>

<script>
// The exact semantic component options are preserved in the sibling .logic.js file.
// This SFC isolates the original render tree for review and manual variable renaming.
export default {
  name: "applyStatistics",
};
</script>
