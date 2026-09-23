<!--
  Source: assets/www/js/58.js -> webpack module "9ddf"
  Route: /teacher/achievement/index
  Component: achievementIndex
  Restoration: template decompiled from Vue render function; logic in sibling .logic.js
  Confidence: high for DOM structure / medium for expression quoting
-->
<template>
<q-layout view="lHh lpr lFf">
  <q-header class="bg-grey-3 text-black">
    <q-toolbar>
      <q-btn flat round dense icon="keyboard_arrow_left" @click='goBack' />
      <q-toolbar-title>
        {{ TeacherTitle }}
      </q-toolbar-title>
    </q-toolbar>
  </q-header>
  <q-page-container>
    <q-page v-if="roleSet" class="bg-grey-3 q-pb-sm">
      <q-card v-if="stuNo !== user.login_name" class="q-mx-md q-mb-sm" flat>
        <q-item>
          <q-item-section avatar>
            <q-item-label class="text-bold">
              教师信息
            </q-item-label>
          </q-item-section>
          <q-item-section />
        </q-item>
        <q-separator />
        <q-item v-for="(e, s) in teacherInfoSet.slice(0, 6)" :key='s' dense>
          <q-item-section avatar>
            <q-item-label class="q-pt-xs text-grey">
              {{ " " + e }}
            </q-item-label>
          </q-item-section>
          <q-item-section>
            <q-item-label class="q-pt-xs text-right">
              {{ teacherInfo[s] }}
            </q-item-label>
          </q-item-section>
        </q-item>
        <q-item dense>
          <q-item-section avatar>
            <q-item-label class="q-pt-xs text-grey">
              {{ " " + teacherInfoSet[6] }}
            </q-item-label>
          </q-item-section>
          <q-item-section>
            <q-item-label class="q-pt-xs text-right" :class='"已接入" == teacherInfo[6] ? "text-positive" : "text-red"'>
              {{ teacherInfo[6] }}
            </q-item-label>
          </q-item-section>
        </q-item>
      </q-card>
      <q-card class="q-mx-md" flat>
        <q-item>
          <q-item-section avatar>
            <q-item-label class="text-bold">
              请假
            </q-item-label>
          </q-item-section>
          <q-item-section />
        </q-item>
        <q-separator />
        <q-item v-for="(e, s) in leave" :key='e.id' :class='0 != s && s != leave.length - 1 && s != leave.length - 2 ? "q-ml-md" : ""' dense>
          <q-item-section avatar>
            <q-item-label class="q-pt-xs text-grey">
              {{ " " + e.title }}
            </q-item-label>
          </q-item-section>
          <q-item-section>
            <q-item-label class="q-pt-xs text-right">
              {{ e.total + "次" }}
            </q-item-label>
          </q-item-section>
        </q-item>
      </q-card>
      <q-card class="q-mx-md q-mt-sm" flat>
        <q-item>
          <q-item-section avatar>
            <q-item-label class="text-bold">
              批量请假
            </q-item-label>
          </q-item-section>
          <q-item-section />
        </q-item>
        <q-separator />
        <q-item v-for="(e, s) in leaveMutil" :key='e.id' :class='0 != s && 1 != s ? "q-ml-md" : ""' dense>
          <q-item-section avatar>
            <q-item-label class="q-pt-xs text-grey">
              {{ " " + e.title }}
            </q-item-label>
          </q-item-section>
          <q-item-section>
            <q-item-label class="q-pt-xs text-right">
              {{ e.total + "次" }}
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
        </q-item>
        <q-separator />
        <q-item v-for="(e, s) in notice" :key='e.id' :class='0 != s ? "q-ml-md" : ""' dense>
          <q-item-section avatar>
            <q-item-label class="q-pt-xs text-grey">
              {{ " " + e.title }}
            </q-item-label>
          </q-item-section>
          <q-item-section>
            <q-item-label class="q-pt-xs text-right">
              {{ e.total + "次" }}
            </q-item-label>
          </q-item-section>
        </q-item>
      </q-card>
      <q-card v-for="e in apply.slice(0, 2)" :key='e.seq' class="q-mx-md q-mt-sm" flat>
        <q-item>
          <q-item-section avatar>
            <q-item-label class="text-bold">
              {{ e.title }}
            </q-item-label>
          </q-item-section>
        </q-item>
        <q-separator />
        <q-item dense>
          <q-item-section avatar>
            <q-item-label class="q-pt-xs text-grey">
              发布数量
            </q-item-label>
          </q-item-section>
          <q-item-section>
            <q-item-label class="q-pt-xs text-right">
              {{ e.total + "次" }}
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
        </q-item>
        <q-separator />
        <q-item dense>
          <q-item-section avatar>
            <q-item-label class="q-pt-xs text-grey">
              发布数量
            </q-item-label>
          </q-item-section>
          <q-item-section>
            <q-item-label class="q-pt-xs text-right">
              {{ apply[2].total + "次" }}
            </q-item-label>
          </q-item-section>
        </q-item>
        <q-item dense>
          <q-item-section avatar>
            <q-item-label class="q-pt-xs text-grey">
              收集率
            </q-item-label>
          </q-item-section>
          <q-item-section>
            <q-item-label class="q-pt-xs text-right">
              {{ apply_c.rate + "%(" + apply_c.status_one + "/" + apply_c.status_one + apply_c.status_zeno + ")" }}
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
        </q-item>
        <q-separator />
        <q-item v-for="(e, s) in sign" :key='e.id' :class='0 != s ? "q-ml-md" : ""' dense>
          <q-item-section avatar>
            <q-item-label class="q-pt-xs text-grey">
              {{ " " + e.title }}
            </q-item-label>
          </q-item-section>
          <q-item-section>
            <q-item-label class="q-pt-xs text-right">
              {{ e.total + "次" }}
            </q-item-label>
          </q-item-section>
        </q-item>
      </q-card>
      <q-card class="q-mx-md q-mt-sm" flat>
        <q-item>
          <q-item-section avatar>
            <q-item-label class="text-bold">
              日志
            </q-item-label>
          </q-item-section>
        </q-item>
        <q-separator />
        <q-item dense>
          <q-item-section avatar>
            <q-item-label class="q-pt-xs text-grey">
              提交数量
            </q-item-label>
          </q-item-section>
          <q-item-section>
            <q-item-label class="q-pt-xs text-right">
              {{ t.joblogCount + "次" }}
            </q-item-label>
          </q-item-section>
        </q-item>
      </q-card>
      <q-card class="q-mx-md q-mt-sm" flat>
        <q-item>
          <q-item-section avatar>
            <q-item-label class="text-bold">
              寝室检查
            </q-item-label>
          </q-item-section>
        </q-item>
        <q-separator />
        <q-item dense>
          <q-item-section avatar>
            <q-item-label class="q-pt-xs text-grey">
              提交数量
            </q-item-label>
          </q-item-section>
          <q-item-section>
            <q-item-label class="q-pt-xs text-right">
              {{ t.sanitationCount + "次" }}
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
        <q-item v-for="(e, s) in process" :key='e.id' :class='0 != s ? "q-ml-md" : ""' dense>
          <q-item-section avatar>
            <q-item-label class="q-pt-xs text-grey">
              {{ " " + e.title }}
            </q-item-label>
          </q-item-section>
          <q-item-section>
            <q-item-label class="q-pt-xs text-right">
              {{ e.total }}
            </q-item-label>
          </q-item-section>
        </q-item>
      </q-card>
      <q-card class="q-mx-md q-mt-sm" flat>
        <q-item>
          <q-item-section avatar>
            <q-item-label class="text-bold">
              返校离校流程
            </q-item-label>
          </q-item-section>
          <q-item-section />
        </q-item>
        <q-separator />
        <q-item v-for="(e, s) in processGate" :key='e.id' :class='0 != s ? "q-ml-md" : ""' dense>
          <q-item-section avatar>
            <q-item-label class="q-pt-xs text-grey">
              {{ " " + e.title }}
            </q-item-label>
          </q-item-section>
          <q-item-section>
            <q-item-label class="q-pt-xs text-right">
              {{ e.total }}
            </q-item-label>
          </q-item-section>
        </q-item>
      </q-card>
    </q-page>
    <q-page v-else v-else class="flex column justify-start items-start q-pa-md bg-grey-3">
      <div class="text-h6 text-bold q-mb-md row justify-center full-width">
        {{ "\n        " + titleTip + "\n      " }}
      </div>
    </q-page>
  </q-page-container>
</q-layout>
</template>

<script>
// The exact semantic component options are preserved in the sibling .logic.js file.
// This SFC isolates the original render tree for review and manual variable renaming.
export default {
  name: "achievementIndex",
};
</script>
