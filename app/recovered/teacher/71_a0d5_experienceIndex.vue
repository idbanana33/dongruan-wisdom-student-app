<!--
  Source: assets/www/js/71.js -> webpack module "a0d5"
  Route: /teacher/experience/index
  Component: experienceIndex
  Restoration: template decompiled from Vue render function; logic in sibling .logic.js
  Confidence: high for DOM structure / medium for expression quoting
-->
<template>
<q-layout view="lHh lpr lFf">
  <q-header class="bg-grey-3 text-black">
    <q-toolbar>
      <q-btn flat round dense icon="keyboard_arrow_left" @click='goBack' />
      <q-toolbar-title>
        学生综合统计
      </q-toolbar-title>
    </q-toolbar>
  </q-header>
  <q-page-container>
    <q-page class="bg-grey-3 q-pb-sm">
      <q-card class="q-mx-md" flat>
        <q-item v-for="e in commonCols" :key='e.field' dense>
          <q-item-section avatar>
            <q-item-label class="text-grey">
              {{ e.label }}
            </q-item-label>
          </q-item-section>
          <q-item-section>
            <q-item-label class="text-right" :class='"device_name" == e.field && "已接入" == record[e.field] ? "text-positive" : "device_name" == e.field && "已接入" != record[e.field] ? "text-red" : ""'>
              {{ record[e.field] }}
            </q-item-label>
          </q-item-section>
        </q-item>
      </q-card>
      <q-card class="q-mx-md q-mt-sm" flat>
        <q-item>
          <q-item-section avatar>
            <q-item-label class="text-bold">
              请假
            </q-item-label>
          </q-item-section>
          <q-item-section />
          <q-item-section side @click='goLeave'>
            <q-item-label class="row items-center">
              <span class="text-primary">
                查看全部请假记录
              </span>
              <q-icon class="text-primary" name="keyboard_arrow_right" size="xs" />
            </q-item-label>
          </q-item-section>
        </q-item>
        <q-separator />
        <q-item v-for="(e, a) in leaveTimesList" :key='a' dense>
          <q-item-section avatar>
            <q-item-label class="q-pt-xs text-grey" :class='"0" != e.type_id ? "q-ml-md" : ""'>
              {{ e.leave_type_name }}
            </q-item-label>
          </q-item-section>
          <q-item-section>
            <q-item-label class="text-right" :class='e.time ? "q-pt-xs" : ""'>
              {{ e.time }}
            </q-item-label>
            <q-item-label v-show="!item.time" class="text-right">
              0分钟
            </q-item-label>
          </q-item-section>
        </q-item>
        <q-item v-for="(e, a) in leaveCountList" :key='"a" + a' dense>
          <q-item-section avatar>
            <q-item-label class="q-pt-xs text-grey" :class='"0" != e.type_id ? "q-ml-md" : ""'>
              {{ e.leave_type_name }}
            </q-item-label>
          </q-item-section>
          <q-item-section>
            <q-item-label v-show="item.total" class="q-pt-xs text-right" :class='e.total ? "q-pt-xs" : ""'>
              {{ e.total + "次" }}
            </q-item-label>
            <q-item-label v-show="!item.total" class="q-pt-xs text-right">
              0次
            </q-item-label>
          </q-item-section>
        </q-item>
        <q-item dense>
          <q-item-section avatar>
            <q-item-label class="q-pt-xs text-grey">
              待审批数
            </q-item-label>
          </q-item-section>
          <q-item-section>
            <q-item-label v-show="approvalCount" class="q-pt-xs text-right">
              {{ approvalCount + "次" }}
            </q-item-label>
            <q-item-label v-show="!approvalCount" class="q-pt-xs text-right">
              0次
            </q-item-label>
          </q-item-section>
        </q-item>
        <q-item dense>
          <q-item-section avatar>
            <q-item-label class="q-pt-xs text-grey">
              被驳回数
            </q-item-label>
          </q-item-section>
          <q-item-section>
            <q-item-label v-show="rejectCount" class="q-pt-xs text-right">
              {{ rejectCount + "次" }}
            </q-item-label>
            <q-item-label v-show="!rejectCount" class="q-pt-xs text-right">
              0次
            </q-item-label>
          </q-item-section>
        </q-item>
        <q-item dense>
          <q-item-section avatar>
            <q-item-label class="q-pt-xs text-grey">
              补假次数
            </q-item-label>
          </q-item-section>
          <q-item-section>
            <q-item-label v-show="addLeaveCount" class="q-pt-xs text-right">
              {{ addLeaveCount + "次" }}
            </q-item-label>
            <q-item-label v-show="!addLeaveCount" class="q-pt-xs text-right">
              0次
            </q-item-label>
          </q-item-section>
        </q-item>
        <q-item dense>
          <q-item-section avatar>
            <q-item-label class="q-pt-xs text-grey">
              离校次数
            </q-item-label>
          </q-item-section>
          <q-item-section>
            <q-item-label v-show="leaveSchoolCount" class="q-pt-xs text-right">
              {{ leaveSchoolCount + "次" }}
            </q-item-label>
            <q-item-label v-show="!leaveSchoolCount" class="q-pt-xs text-right">
              0次
            </q-item-label>
          </q-item-section>
        </q-item>
      </q-card>
      <q-card class="q-mx-md q-mt-sm" flat>
        <q-item>
          <q-item-section avatar>
            <q-item-label class="text-bold">
              通知
            </q-item-label>
          </q-item-section>
          <q-item-section />
          <q-item-section side @click='goNotice'>
            <q-item-label class="row items-center">
              <span class="text-primary">
                查看全部通知记录
              </span>
              <q-icon class="text-primary" name="keyboard_arrow_right" size="xs" />
            </q-item-label>
          </q-item-section>
        </q-item>
        <q-separator />
        <q-item v-for="(e, a) in confirmList" :key='"c" + a' dense>
          <q-item-section avatar>
            <q-item-label class="q-pt-xs text-grey" :class='"0" != e.seq ? "q-ml-md" : ""'>
              {{ e.notice_priority }}
            </q-item-label>
          </q-item-section>
          <q-item-section>
            <q-item-label v-show="item.total != 0" class="q-pt-xs text-right">
              {{ e.confirm_ratio + "%  (" + e.confirm_total + "/" + e.total + ")" }}
            </q-item-label>
            <q-item-label v-show="item.total == 0" class="q-pt-xs text-right">
              {{ "0%  (0/" + e.total + ")" }}
            </q-item-label>
          </q-item-section>
        </q-item>
        <q-item v-for="(e, a) in feedbackList" :key='"d" + a' dense>
          <q-item-section avatar>
            <q-item-label class="q-pt-xs text-grey" :class='"0" != e.seq ? "q-ml-md" : ""'>
              {{ e.notice_priority }}
            </q-item-label>
          </q-item-section>
          <q-item-section>
            <q-item-label v-show="item.total != 0" class="q-pt-xs text-right">
              {{ e.feedback_ratio + "%  (" + e.feedback_total + "/" + e.total + ")" }}
            </q-item-label>
            <q-item-label v-show="item.total == 0" class="q-pt-xs text-right">
              {{ "0%  (0/" + e.total + ")" }}
            </q-item-label>
          </q-item-section>
        </q-item>
      </q-card>
      <q-card class="q-mx-md q-mt-sm" flat>
        <q-item>
          <q-item-section avatar>
            <q-item-label class="text-bold">
              申请
            </q-item-label>
          </q-item-section>
          <q-item-section />
          <q-item-section side @click='goApply("A")'>
            <q-item-label class="row items-center">
              <span class="text-primary">
                查看全部申请记录
              </span>
              <q-icon class="text-primary" name="keyboard_arrow_right" size="xs" />
            </q-item-label>
          </q-item-section>
        </q-item>
        <q-separator />
        <q-item>
          <q-item-section avatar>
            <q-item-label class="text-grey">
              申请率
            </q-item-label>
          </q-item-section>
          <q-item-section>
            <q-item-label v-show="apply.total != 0" class="text-right">
              {{ apply.apply_ratio + "%  (" + apply.apply_total + "/" + apply.total + ")" }}
            </q-item-label>
            <q-item-label v-show="apply.total == 0" class="text-right">
              {{ "0%  (0/" + apply.total + ")" }}
            </q-item-label>
          </q-item-section>
        </q-item>
      </q-card>
      <q-card class="q-mx-md q-mt-sm" flat>
        <q-item>
          <q-item-section avatar>
            <q-item-label class="text-bold">
              活动报名
            </q-item-label>
          </q-item-section>
          <q-item-section />
          <q-item-section side @click='goApply("S")'>
            <q-item-label class="row items-center">
              <span class="text-primary">
                查看活动报名记录
              </span>
              <q-icon class="text-primary" name="keyboard_arrow_right" size="xs" />
            </q-item-label>
          </q-item-section>
        </q-item>
        <q-separator />
        <q-item>
          <q-item-section avatar>
            <q-item-label class="text-grey">
              报名率
            </q-item-label>
          </q-item-section>
          <q-item-section>
            <q-item-label v-show="signup.total != 0" class="text-right">
              {{ signup.signup_ratio + "%  (" + signup.signup_total + "/" + signup.total + ")" }}
            </q-item-label>
            <q-item-label v-show="signup.total == 0" class="text-right">
              {{ "0%  (0/" + signup.total + ")" }}
            </q-item-label>
          </q-item-section>
        </q-item>
      </q-card>
      <q-card class="q-mx-md q-mt-sm" flat>
        <q-item>
          <q-item-section avatar>
            <q-item-label class="text-bold">
              信息收集
            </q-item-label>
          </q-item-section>
          <q-item-section />
          <q-item-section side @click='goApply("C")'>
            <q-item-label class="row items-center">
              <span class="text-primary">
                查看信息收集记录
              </span>
              <q-icon class="text-primary" name="keyboard_arrow_right" size="xs" />
            </q-item-label>
          </q-item-section>
        </q-item>
        <q-separator />
        <q-item>
          <q-item-section avatar>
            <q-item-label class="text-grey">
              填写率
            </q-item-label>
          </q-item-section>
          <q-item-section>
            <q-item-label v-show="collect.total != 0" class="text-right">
              {{ collect.collected_ratio + "%  (" + collect.collect_total + "/" + collect.total + ")" }}
            </q-item-label>
            <q-item-label v-show="collect.total == 0" class="text-right">
              {{ "0%  (0/" + collect.total + ")" }}
            </q-item-label>
          </q-item-section>
        </q-item>
      </q-card>
      <q-card class="q-mx-md q-mt-sm" flat>
        <q-item>
          <q-item-section avatar>
            <q-item-label class="text-bold">
              签到
            </q-item-label>
          </q-item-section>
          <q-item-section />
          <q-item-section side @click='goSignin'>
            <q-item-label class="row items-center">
              <span class="text-primary">
                查看全部签到记录
              </span>
              <q-icon class="text-primary" name="keyboard_arrow_right" size="xs" />
            </q-item-label>
          </q-item-section>
        </q-item>
        <q-separator />
        <q-item v-for="(e, a) in signinList" :key='"b" + a' dense>
          <q-item-section avatar>
            <q-item-label class="q-pt-xs text-grey" :class='"0" != e.seq ? "q-ml-md" : ""'>
              {{ "\n              " + e.signin_method + "\n              " }}
              <span v-show="item.seq == '0'" class="text-primary q-ml-sm" @click='rules'>
                计算规则 >
              </span>
            </q-item-label>
          </q-item-section>
          <q-item-section>
            <q-item-label v-show="item.total != 0 && item.seq == 1" class="q-pt-xs text-right">
              {{ e.leave_ratio + "%  (" + e.leave + "/" + e.total + ")" }}
            </q-item-label>
            <q-item-label v-show="item.total != 0 && item.seq != 1" class="q-pt-xs text-right">
              {{ e.signin_ratio + "%  (" + e.signin_total + "/" + e.total - e.leave + ")" }}
            </q-item-label>
            <q-item-label v-show="item.total == 0 && item.seq == 1" class="q-pt-xs text-right">
              {{ "0%  (0/" + e.total + ")" }}
            </q-item-label>
            <q-item-label v-show="item.total == 0 && item.seq != 1" class="q-pt-xs text-right">
              {{ "0%  (0/" + e.total - e.leave + ")" }}
            </q-item-label>
          </q-item-section>
        </q-item>
        <q-item dense>
          <q-item-section avatar>
            <q-item-label class="q-pt-xs text-grey">
              已签到次数
            </q-item-label>
          </q-item-section>
          <q-item-section>
            <q-item-label v-show="signinCount" class="q-pt-xs text-right">
              {{ signinCount + "次" }}
            </q-item-label>
            <q-item-label v-show="!signinCount" class="q-pt-xs text-right">
              0次
            </q-item-label>
          </q-item-section>
        </q-item>
        <q-item dense>
          <q-item-section avatar>
            <q-item-label class="q-pt-xs text-grey">
              已请假次数
            </q-item-label>
          </q-item-section>
          <q-item-section>
            <q-item-label v-show="leaveCount" class="q-pt-xs text-right">
              {{ leaveCount + "次" }}
            </q-item-label>
            <q-item-label v-show="!leaveCount" class="q-pt-xs text-right">
              0次
            </q-item-label>
          </q-item-section>
        </q-item>
        <q-item dense>
          <q-item-section avatar>
            <q-item-label class="q-pt-xs text-grey">
              签到变更信息数
            </q-item-label>
          </q-item-section>
          <q-item-section>
            <q-item-label v-show="changeSigninCount" class="q-pt-xs text-right">
              {{ changeSigninCount + "次" }}
            </q-item-label>
            <q-item-label v-show="!changeSigninCount" class="q-pt-xs text-right">
              0次
            </q-item-label>
          </q-item-section>
        </q-item>
      </q-card>
      <q-card class="q-mx-md q-mt-sm" flat>
        <q-item>
          <q-item-section avatar>
            <q-item-label class="text-bold">
              日常流程
            </q-item-label>
          </q-item-section>
          <q-item-section />
        </q-item>
        <q-separator />
        <q-item dense>
          <q-item-section avatar>
            <q-item-label class="text-grey">
              申请数量
            </q-item-label>
          </q-item-section>
          <q-item-section>
            <q-item-label class="q-pt-xs text-right">
              {{ process.countall + "次" }}
            </q-item-label>
          </q-item-section>
        </q-item>
        <q-item class="q-ml-md" dense>
          <q-item-section avatar>
            <q-item-label class="text-grey">
              通过
            </q-item-label>
          </q-item-section>
          <q-item-section>
            <q-item-label class="text-right">
              {{ null == process.counta ? "0" : process.counta + "次" }}
            </q-item-label>
          </q-item-section>
        </q-item>
        <q-item class="q-ml-md" dense>
          <q-item-section avatar>
            <q-item-label class="text-grey">
              驳回
            </q-item-label>
          </q-item-section>
          <q-item-section>
            <q-item-label class="text-right">
              {{ null == process.countr ? "0" : process.countr + "次" }}
            </q-item-label>
          </q-item-section>
        </q-item>
        <q-item class="q-ml-md" dense>
          <q-item-section avatar>
            <q-item-label class="text-grey">
              待审批
            </q-item-label>
          </q-item-section>
          <q-item-section>
            <q-item-label class="text-right">
              {{ null == process.countw ? "0" : process.countw + "次" }}
            </q-item-label>
          </q-item-section>
        </q-item>
      </q-card>
      <q-card class="q-mx-md q-mt-sm" flat>
        <q-item>
          <q-item-section avatar>
            <q-item-label class="text-bold">
              离校返校流程
            </q-item-label>
          </q-item-section>
          <q-item-section />
        </q-item>
        <q-separator />
        <q-item dense>
          <q-item-section avatar>
            <q-item-label class="text-grey">
              申请数量
            </q-item-label>
          </q-item-section>
          <q-item-section>
            <q-item-label class="q-pt-xs text-right">
              {{ null == processGate.countall ? "0" : processGate.countall + "次" }}
            </q-item-label>
          </q-item-section>
        </q-item>
        <q-item class="q-ml-md" dense>
          <q-item-section avatar>
            <q-item-label class="text-grey">
              通过
            </q-item-label>
          </q-item-section>
          <q-item-section>
            <q-item-label class="text-right">
              {{ null == processGate.counta ? "0" : processGate.counta + "次" }}
            </q-item-label>
          </q-item-section>
        </q-item>
        <q-item class="q-ml-md" dense>
          <q-item-section avatar>
            <q-item-label class="text-grey">
              驳回
            </q-item-label>
          </q-item-section>
          <q-item-section>
            <q-item-label class="text-right">
              {{ null == processGate.countr ? "0" : processGate.countr + "次" }}
            </q-item-label>
          </q-item-section>
        </q-item>
        <q-item class="q-ml-md" dense>
          <q-item-section avatar>
            <q-item-label class="text-grey">
              待审批
            </q-item-label>
          </q-item-section>
          <q-item-section>
            <q-item-label class="text-right">
              {{ null == processGate.countw ? "0" : processGate.countw + "次" }}
            </q-item-label>
          </q-item-section>
        </q-item>
      </q-card>
      <q-dialog v-model="rulesDialog" persistent>
        <q-card style="border-radius:25px">
          <q-item>
            <q-item-section class="flex flex-center">
              <q-item-label class="text-weight-bold">
                签到率
              </q-item-label>
            </q-item-section>
          </q-item>
          <q-item class="q-my-sm" dense>
            <q-item-section>
              <q-item-label>
                签到率计算规则：已签到次数 / (应签到次数 - 已请假次数)
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
    </q-page>
  </q-page-container>
</q-layout>
</template>

<script>
// The exact semantic component options are preserved in the sibling .logic.js file.
// This SFC isolates the original render tree for review and manual variable renaming.
export default {
  name: "experienceIndex",
};
</script>
