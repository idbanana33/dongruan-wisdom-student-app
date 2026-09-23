<!--
  Source: assets/www/js/116.js -> webpack module "49de"
  Route: /teacher/signin/statistics
  Component: NeuSigninRangeNow
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
            <q-item-label>
              <span class="text-grey neu-css-after-colon">
                发起人
              </span>
              {{ record.creator + "\n            " }}
            </q-item-label>
            <q-item-label>
              <span class="text-grey neu-css-after-colon">
                总签到率
              </span>
              <label class="text-right" style="color:#1E90FF" @click='CountRule("signin")'>
                计算规则>
              </label>
              <span class="q-ml-md q-mr-sm">
                {{ record.signin_total + "/" + record.signin_count - record.leave_total }}
              </span>
              <span :class='record.signin_ratio >= 85 ? "text-positive" : record.signin_ratio >= 60 ? "text-warning" : "text-red"'>
                {{ record.signin_ratio + "%" }}
              </span>
            </q-item-label>
            <q-item-label>
              <span class="text-grey neu-css-after-colon">
                总请假率
              </span>
              <label class="text-right" style="color:#1E90FF" @click='CountRule("leave")'>
                计算规则>
              </label>
              <span class="q-ml-md">
                {{ record.leave_total + "/" + record.signin_count }}
              </span>
              <span class="q-ml-sm">
                {{ record.leave_ratio + "%" }}
              </span>
            </q-item-label>
            <q-item-label v-show="record.picture_evidence == '1'">
              <span class="text-grey neu-css-after-colon">
                签到方式
              </span>
              {{ record.signin_method_name + " + 拍照" }}
              <span v-if="'L' == record.signin_method">
                {{ "(" + 1 == record.allow_outside ? "允许范围外签到" : "不允许范围外签到" + ")" }}
                <span class="text-primary cursor-pointer" @click='lookRange'>
                  查看范围
                </span>
              </span>
            </q-item-label>
            <q-item-label v-show="record.picture_evidence == '0'">
              <span class="text-grey neu-css-after-colon">
                签到方式
              </span>
              {{ record.signin_method_name }}
              <span v-if="'L' == record.signin_method">
                {{ "(" + 1 == record.allow_outside ? "允许范围外签到" : "不允许范围外签到" + ")" }}
                <span class="text-primary cursor-pointer" @click='lookRange'>
                  查看范围
                </span>
              </span>
            </q-item-label>
            <q-item-label>
              <span class="text-grey neu-css-after-colon">
                签到频率
              </span>
              {{ record.frequency_name + "\n              " }}
              <span class="text-grey neu-css-after-colon q-ml-lg">
                已/总执行次数
              </span>
              {{ record.done_count + "/" + record.total + "\n            " }}
            </q-item-label>
            <q-item-label>
              <span class="text-grey neu-css-after-colon">
                执行周期
              </span>
              {{ record.begin_time + " ~ " + record.end_time + "\n            " }}
            </q-item-label>
            <q-item-label v-if="null !== record.dep_name">
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
          <q-item-label style="font-size:1.3em">
            {{ record.title }}
          </q-item-label>
          <q-item-label caption>
            {{ record.signin_type_name }}
          </q-item-label>
        </q-item-section>
        <q-item-section side>
          <q-btn flat dense icon="more_vert" size="sm" @click='drawerRight = !drawerRight' />
        </q-item-section>
      </template>
    </q-expansion-item>
    <q-separator style="height:0.1rem" color="grey-3" />
  </q-header>
  <q-drawer v-model="drawerRight" side="right" :width="200" :breakpoint="10" overlay bordered content-class="bg-white-3">
    <q-scroll-area class="fit">
      <q-list style="border-left:0.15rem solid #027be3" separator>
        <q-item v-ripple clickable>
          <q-item-section avatar>
            <q-icon name="remove_red_eye" size="sm" />
          </q-item-section>
          <q-item-section style="font-size:1.1rem" @click='detailDialogOpen()'>
            预览正文
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
        <q-item v-if="record.is_author" v-ripple clickable>
          <q-item-section avatar>
            <q-icon name="content_copy" size="sm" color="primary" />
          </q-item-section>
          <q-item-section class="text-primary" style="font-size:1.1rem" @click='copySignin'>
            复制
          </q-item-section>
        </q-item>
        <q-item v-if="record.is_author || 'A' == roleId" v-ripple clickable>
          <q-item-section avatar>
            <q-icon name="delete" size="sm" color="red" />
          </q-item-section>
          <q-item-section class="text-red" style="font-size:1.1rem" @click='deleteSignin'>
            删除
          </q-item-section>
        </q-item>
      </q-list>
    </q-scroll-area>
  </q-drawer>
  <q-page-container>
    <q-page class="bg-grey-3 q-pb-sm">
      <q-pull-to-refresh ref=""pageRefresh"" @refresh='refresh'>
        <q-card v-for="e in list" :key='e.id' class="bg-white q-mb-sm q-mx-sm" flat @click='goDetail(e.batch_no)'>
          <q-item>
            <q-item-section>
              <q-item-label class="q-mb-xs" caption lines="1">
                <span class="neu-css-after-colon">
                  签到时间段
                </span>
                {{ e.timeslot + "\n                " }}
              </q-item-label>
              <q-item-label class="row" style="min-width:250px" caption lines="1">
                <div class="col-6">
                  <span class="neu-css-after-colon">
                    签到率
                  </span>
                  {{ e.signinedrate + " %" }}
                </div>
                <div class="col-6">
                  <span class="neu-css-after-colon">
                    请假率
                  </span>
                  {{ e.leaverate + " %" }}
                </div>
              </q-item-label>
              <q-item-label class="row" style="min-width:250px" caption lines="1">
                <div class="col-6">
                  <span class="neu-css-after-colon">
                    应签人数
                  </span>
                  {{ e.signintotal }}
                </div>
                <div class="col-6">
                  <span class="neu-css-after-colon">
                    已签人数
                  </span>
                  {{ e.signined }}
                </div>
              </q-item-label>
              <q-item-label class="row" style="min-width:250px" caption lines="1">
                <div class="col-6">
                  <span class="neu-css-after-colon">
                    已请假人数
                  </span>
                  {{ e.leaved }}
                </div>
                <div class="col-6">
                  <span class="neu-css-after-colon">
                    未签到人数
                  </span>
                  {{ e.nosignin }}
                </div>
              </q-item-label>
              <q-item-label v-show="allowOutside" class="row" caption lines="1">
                <span class="neu-css-after-colon">
                  范围外签到人数
                </span>
                {{ e.outsidecount + "\n                  " }}
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
            <div class="text-bold">
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
              {{ record.creator + "\n        " }}
            </div>
            <div>
              <span class="text-grey neu-css-after-colon">
                创建时间
              </span>
              {{ record.create_time + "\n        " }}
            </div>
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
              {{ record.frequency_name + "\n        " }}
            </div>
            <div v-if="'S' == record.frequency" class="row">
              <span class="text-grey neu-css-after-colon">
                开始截止时间
              </span>
              {{ record.single_begin_time + " ~ " + record.single_end_time + "\n        " }}
            </div>
            <div v-if="'L' == record.frequency">
              <span class="text-grey neu-css-after-colon">
                循环频率
              </span>
              {{ getLoopFrequencyName(record.loop_frequency) + "\n        " }}
            </div>
            <div v-if="'L' == record.frequency" class="row">
              <span class="text-grey neu-css-after-colon">
                开始截止日期
              </span>
              {{ record.loop_begin_date + " ~ " + record.loop_end_date + "\n        " }}
            </div>
            <div v-if="'L' == record.frequency" class="row">
              <span class="text-grey neu-css-after-colon">
                签到时间段
              </span>
              {{ record.loop_begin_time + " ~ " + record.loop_end_time + "\n        " }}
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
          </q-card-section>
          <q-separator v-if="'SQR' == record.signin_method || 'DQR' == record.signin_method" />
          <q-card-section v-if="'SQR' == record.signin_method || 'DQR' == record.signin_method">
            <div>
              <span class="text-grey neu-css-after-colon">
                二维码负责人（学生）
              </span>
              <div v-if="record.is_author" style="float:right">
                <span class="text-grey" @click='updateShowOpen(1)'>
                  选择
                </span>
                <q-icon class="text-grey" name="keyboard_arrow_right" size="sm" />
              </div>
            </div>
            <neu-view-assigned-student :value='record.student_showing' />
          </q-card-section>
          <q-separator v-if="'SQR' == record.signin_method || 'DQR' == record.signin_method" />
          <q-card-section v-if="'SQR' == record.signin_method || 'DQR' == record.signin_method">
            <div>
              <span class="text-grey neu-css-after-colon">
                二维码负责人（教师）
              </span>
              <div v-if="record.is_author" style="float:right">
                <span class="text-grey" @click='updateShowOpen(2)'>
                  选择
                </span>
                <q-icon class="text-grey" name="keyboard_arrow_right" size="sm" />
              </div>
            </div>
            <neu-view-assigned-teacher :value='record.teacher_showing' />
          </q-card-section>
          <q-separator />
          <q-card-section>
            <div>
              <span class="text-grey neu-css-after-colon">
                允许班级干部查看任务数据
              </span>
              {{ 1 === record.stu_manage_flag ? "是" : "否" + "\n        " }}
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
                周循环，指定日期频率修改签到对象后下次执行生效
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
                周循环，指定日期频率修改无需签到对象后下次执行生效
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
              <div v-show="record.is_author && editPermit" style="float:right">
                <span class="text-grey" @click='openShareDialog'>
                  选择
                </span>
                <q-icon class="text-grey" name="keyboard_arrow_right" size="sm" />
              </div>
            </div>
            <neu-view-assigned-teacher :value='record.share_target' />
          </q-card-section>
          <q-separator v-if="record.info_config" />
          <q-card-section v-if="record.info_config">
            <div>
              <span class="text-grey neu-css-after-colon">
                签到附加题表单
              </span>
            </div>
            <div v-for="(e, a) in record.info_config" :key='a' class="bg-grey-2 q-pa-sm q-mt-sm">
              <neu-widget v-model="infoModel[index]" :config='e' />
            </div>
          </q-card-section>
        </q-card>
      </q-dialog>
      <q-dialog v-model="showStuDialog" persistent fullWidth>
        <q-card class="full-width" flat>
          <q-toolbar>
            <div class="full-width row items-center justify-between q-px-xs q-py-sm">
              <div class="text-bold text-black">
                设置二维码负责人(学生)
              </div>
              <q-btn unelevated color="primary" label="完成" @click='updateShowTarget(1)' />
            </div>
          </q-toolbar>
          <q-card-section>
            <neu-assign-student v-model="studentShowing" :permit='menuInfo ? menuInfo.edit_permit : null' permit-mode="E" :menu-id='menuInfo ? menuInfo.id : null' />
          </q-card-section>
        </q-card>
      </q-dialog>
      <q-dialog v-model="showTeaDialog" persistent fullWidth>
        <q-card class="full-width" flat>
          <q-toolbar>
            <div class="full-width row items-center justify-between q-px-xs q-py-sm">
              <div class="text-bold text-black">
                设置二维码负责人(教师)
              </div>
              <q-btn unelevated color="primary" label="完成" @click='updateShowTarget(2)' />
            </div>
          </q-toolbar>
          <q-card-section>
            <neu-assign-teacher v-model="teacherShowing" :permit='menuInfo ? menuInfo.edit_permit : null' permit-mode="E" :menu-id='menuInfo ? menuInfo.id : null' />
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
      <q-dialog v-model="showStuDialog" persistent fullWidth>
        <q-card class="full-width" flat>
          <q-toolbar>
            <div class="full-width row items-center justify-between q-px-xs q-py-sm">
              <div class="text-bold text-black">
                设置二维码负责人(学生)
              </div>
              <q-btn unelevated color="primary" label="完成" @click='updateShowTarget(1)' />
            </div>
          </q-toolbar>
          <q-card-section>
            <neu-assign-student v-model="studentShowing" :permit='menuInfo ? menuInfo.edit_permit : null' permit-mode="E" :menu-id='menuInfo ? menuInfo.id : null' />
          </q-card-section>
        </q-card>
      </q-dialog>
      <q-dialog v-model="showTeaDialog" persistent fullWidth>
        <q-card class="full-width" flat>
          <q-toolbar>
            <div class="full-width row items-center justify-between q-px-xs q-py-sm">
              <div class="text-bold text-black">
                设置二维码负责人(教师)
              </div>
              <q-btn unelevated color="primary" label="完成" @click='updateShowTarget(2)' />
            </div>
          </q-toolbar>
          <q-card-section>
            <neu-assign-teacher v-model="teacherShowing" :permit='menuInfo ? menuInfo.edit_permit : null' permit-mode="E" :menu-id='menuInfo ? menuInfo.id : null' />
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
      <q-dialog v-model="countRuleShow" countRuleShow>
        <q-card style="border-radius:25px">
          <q-item>
            <q-item-section class="flex flex-center">
              <q-item-label class="text-weight-bold">
                {{ ruleTitle }}
              </q-item-label>
            </q-item-section>
          </q-item>
          <q-item class="q-my-sm" dense>
            <q-item-section>
              <q-item-label>
                {{ ruleMessage }}
              </q-item-label>
            </q-item-section>
          </q-item>
          <q-separator />
          <q-card-actions align="around">
            <q-btn v-close-popup flat color="primary">
              知道了
            </q-btn>
          </q-card-actions>
        </q-card>
      </q-dialog>
      <neu-export-data :config='exportCompConfig' />
      <q-dialog v-model="rangeDialog" persistent fullWidth :maximized='maximizedToggle'>
        <q-layout class="bg-white" view="lHh lpr lFf" container>
          <q-header class="bg-white">
            <q-toolbar>
              <div class="full-width row items-center justify-between q-px-xs q-py-sm">
                <div class="text-bold text-black">
                  签到范围
                </div>
                <div>
                  <!-- 空分支（原始 render: (record.is_author, _e())） -->
                  <q-btn class="q-ml-sm" outline color="grey" label="关闭" @click='rangeDialog = false' />
                </div>
              </div>
            </q-toolbar>
            <q-separator />
          </q-header>
          <q-page-container>
            <q-page>
              <neu-signin-range-now v-model="record.range" :selectList='selectList' :id='signinId' />
            </q-page>
          </q-page-container>
        </q-layout>
      </q-dialog>
    </q-page>
  </q-page-container>
</q-layout>
</template>

<script>
// The exact semantic component options are preserved in the sibling .logic.js file.
// This SFC isolates the original render tree for review and manual variable renaming.
export default {
  name: "NeuSigninRangeNow",
};
</script>
