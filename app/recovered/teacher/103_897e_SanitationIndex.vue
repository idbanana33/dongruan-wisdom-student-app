<!--
  Source: assets/www/js/103.js -> webpack module "897e"
  Route: /teacher/process/list
  Component: SanitationIndex
  Restoration: template decompiled from Vue render function; logic in sibling .logic.js
  Confidence: high for DOM structure / medium for expression quoting
-->
<template>
<q-layout view="lHh lpr lFf">
  <q-header class="bg-grey-3 text-black">
    <q-toolbar>
      <q-btn flat round dense icon="keyboard_arrow_left" @click='goBack' />
      <q-toolbar-title>
        {{ "reviewing" == tab ? "待审批" + menuInfo.title + "申请" : "reviewed" == tab ? "已审批" + menuInfo.title + "申请" : menuInfo.title + "申请记录" }}
      </q-toolbar-title>
      <q-btn flat round dense icon="get_app" @click='exportList' />
      <q-btn flat round dense icon="search" @click='open'>
        <q-badge v-show="condCount != 0" color="orange" floating transparent>
          {{ condCount }}
        </q-badge>
      </q-btn>
    </q-toolbar>
  </q-header>
  <q-dialog v-model="dialog" position="bottom">
    <q-card style="width:350px">
      <q-linear-progress :value="1" color="primary" />
      <q-card-section class="row items-center justify-between" dense>
        <q-btn outline label="取消" color="grey" size="md" @click='close()' />
        <q-btn unelevated label="重置时间" color="grey" size="md" @click='resetTime()' />
        <q-btn unelevated label="确定" color="primary" size="md" @click='getCondition' />
      </q-card-section>
      <q-list bordered>
        <q-item v-if="'reviewing' !== tab">
          <q-item-section avatar top>
            <span>
              审批状态
            </span>
          </q-item-section>
          <q-item-section>
            <div class="row justify-evenly">
              <q-btn v-for="t in [{ label: '通过', value: '1' }, { label: '驳回', value: '2' }, { label: '审批中', value: '3' }]" :key='t.value' outline :color='t.value == queryModel.status ? "primary" : "grey"' @click='getValue(t.value)'>
                {{ "\n                      " + t.label + "\n                      " }}
                <q-badge v-show="queryModel.status == item.value" color="orange" floating>
                  √
                </q-badge>
              </q-btn>
            </div>
          </q-item-section>
        </q-item>
        <q-separator />
        <q-item>
          <q-item-section avatar top>
            <span>
              提交时间
            </span>
          </q-item-section>
          <q-item-section>
            <q-item-label>
              <q-field outlined dense stack-label hide-bottom-space lazy-rules label="开始时间" :value='queryModel.begin_time'>
                <template v-slot:control>
                  {{ queryModel.begin_time }}
                </template>
                <template v-slot:append>
                  <q-icon class="cursor-pointer" name="event">
                    <q-popup-proxy transition-show="scale" transition-hide="scale">
                      <div>
                        <q-date v-model="queryModel.begin_time" flat minimal mask="YYYY-MM-DD HH:mm">
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
                        <q-time v-model="queryModel.begin_time" flat mask="YYYY-MM-DD HH:mm" format24h>
                          <div class="row items-center justify-end">
                            <q-btn v-close-popup dense label="关闭" flat />
                          </div>
                        </q-time>
                      </div>
                    </q-popup-proxy>
                  </q-icon>
                </template>
              </q-field>
            </q-item-label>
            <q-item-label>
              <q-field outlined dense stack-label hide-bottom-space label="结束时间" lazy-rules :value='queryModel.end_time'>
                <template v-slot:control>
                  {{ queryModel.end_time }}
                </template>
                <template v-slot:append>
                  <q-icon class="cursor-pointer" name="event">
                    <q-popup-proxy transition-show="scale" transition-hide="scale">
                      <div>
                        <q-date v-model="queryModel.end_time" flat minimal mask="YYYY-MM-DD HH:mm">
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
                        <q-time v-model="queryModel.end_time" flat mask="YYYY-MM-DD HH:mm" format24h>
                          <div class="row items-center justify-end">
                            <q-btn v-close-popup dense label="关闭" flat />
                          </div>
                        </q-time>
                      </div>
                    </q-popup-proxy>
                  </q-icon>
                </template>
              </q-field>
            </q-item-label>
          </q-item-section>
        </q-item>
        <q-item>
          <q-item-section avatar top>
            <span>
              综合查询
            </span>
          </q-item-section>
          <q-item-section>
            <q-input v-model="queryModel.mutli_search" outlined clearable dense />
            <q-item-label style="margin-top:4px" caption>
              可以查询学号、姓名、院系、专业、年级信息、流程名称
            </q-item-label>
          </q-item-section>
        </q-item>
      </q-list>
    </q-card>
  </q-dialog>
  <q-pull-to-refresh ref=""pageRefresh"" @refresh='refresh'>
    <q-page-container>
      <q-page class="bg-grey-3 q-py-sm">
        <div v-else class="text-h6 text-bold q-mb-md row justify-center full-width">
          您没有当前页面访问权限
        </div>
        <q-card v-for="(t, a) in list" v-touch-hold.mouse.mouse="(e)=>handleHold(index)" :key='t.id' class="bg-white q-mb-sm q-mx-sm" :style='"R" == t.review_status ? "border-left:0.25rem solid #FF0000;" : "W" == t.review_status ? "border-left:0.25rem solid #20B2AA;" : "border-left:0.25rem solid #32CD32;"' flat @click='goDetail(t.id, t.process_id, a)'>
          <q-item v-if="menuInfo">
            <q-item-section v-show="tab === 'reviewing' && operateDisplay" avatar>
              <q-item-label>
                <q-checkbox v-model="selected" :id='"processItem" + a' :val='t' />
              </q-item-label>
            </q-item-section>
            <q-item-section>
              <q-item-label>
                <q-icon v-show="item.sex == '1'" name="person" color="blue" />
                <q-icon v-show="item.sex == '2'" name="person" color="pink" />
                {{ "\n                  " + t.name + " " }}
                <span class="text-grey">
                  {{ "(" + t.student_no + ") " }}
                </span>
                <span class="text-grey" style="font-size:0.8rem">
                  {{ t.report_status_name }}
                </span>
              </q-item-label>
              <q-item-label lines="1" caption>
                <q-badge square color="grey-5" text-color="white" size="sm">
                  {{ "\n                    " + t.process_type_name + "\n                  " }}
                </q-badge>
                <span class="text-grey" style="font-size:0.8rem">
                  {{ " " + 0 == t.into_campus && 0 == t.out_campus ? "不需要核验" : 1 == t.into_campus && 1 == t.out_campus ? "需要入校、离校核验" : 1 == t.into_campus ? "需要入校核验" : "需要离校核验" + " " }}
                </span>
              </q-item-label>
              <q-item-label lines="1" caption>
                {{ t.class_name + " " + t.major_name + " " + t.dep_name }}
              </q-item-label>
              <q-item-label lines="2">
                {{ "\n                  " + t.leave_period + "\n                " }}
              </q-item-label>
              <q-item-label style="min-width:250px" caption lines="1">
                <span class="neu-css-after-colon ">
                  提交日期
                </span>
                {{ t.create_time + "\n                " }}
              </q-item-label>
              <q-item-label style="min-width:250px" caption lines="1">
                <span class="neu-css-after-colon ">
                  {{ counsellorlabel }}
                </span>
                {{ t.counsellor + "\n                " }}
              </q-item-label>
            </q-item-section>
            <q-item-section side>
              <q-item-label>
                <q-icon name="keyboard_arrow_right" size="sm" />
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
          暂无流程申请
        </div>
        <div v-show="isLoading" class="text-center text-grey q-pt-sm q-pb-md">
          <q-spinner-dots color="primary" size="md" />
        </div>
      </q-page>
      <q-dialog v-model="writeOpinion">
        <q-card style="width:700px;max-width:80vw">
          <q-card-section>
            <div class="text-h6">
              审批意见
            </div>
          </q-card-section>
          <q-card-section class="q-pt-none">
            <q-input v-model="opinion" dense autofocus />
          </q-card-section>
          <q-card-actions class="text-primary" align="right">
            <q-btn v-close-popup flat label="取消" />
            <q-btn v-close-popup flat label="确认" @click='Operations()' />
          </q-card-actions>
        </q-card>
      </q-dialog>
      <q-dialog v-model="alertDialog">
        <q-card>
          <q-card-section>
            <div class="text-h6">
              审批提示
            </div>
          </q-card-section>
          <q-card-section class="q-pt-none">
            <q-list bordered separator>
              <q-item v-for="(t, a) in resErrorList" v-ripple :key='a' clickable>
                <q-item-section>
                  {{ t }}
                </q-item-section>
              </q-item>
            </q-list>
            <span class="text-grey text-caption q-ml-sm">
              部分审批下一级审批人没有权限或被删除，请联系管理员或刷新
            </span>
          </q-card-section>
          <q-card-actions align="right">
            <q-btn v-close-popup flat label="确认" color="primary" />
          </q-card-actions>
        </q-card>
      </q-dialog>
      <q-dialog v-model="warnDialog">
        <q-card>
          <q-card-section>
            <div class="text-h6">
              以下学生存在风险选项
            </div>
          </q-card-section>
          <q-card-section class="q-pt-none">
            <q-item v-for="t in ProcessWarnList" :key='t.id'>
              <q-item-section>
                <q-item-label>
                  <q-icon v-show="item.sex == '1'" name="person" color="blue" />
                  <q-icon v-show="item.sex == '2'" name="person" color="pink" />
                  {{ "\n                      " + t.name + " " }}
                  <span class="text-grey">
                    {{ "(" + t.student_no + ") " }}
                  </span>
                  <span class="text-grey" style="font-size:0.8rem">
                    {{ t.report_status_name }}
                  </span>
                </q-item-label>
                <q-item-label lines="1" caption>
                  <q-badge square color="grey-5" text-color="white" size="sm">
                    {{ "\n                        " + t.process_type_name + "\n                      " }}
                  </q-badge>
                  <span class="text-grey" style="font-size:0.8rem">
                    {{ " " + 0 == t.into_campus && 0 == t.out_campus ? "不需要核验" : 1 == t.into_campus && 1 == t.out_campus ? "需要入校、离校核验" : 1 == t.into_campus ? "需要入校核验" : "需要离校核验" + " " }}
                  </span>
                </q-item-label>
                <q-item-label lines="2">
                  {{ "\n                      " + t.leave_period + "\n                    " }}
                </q-item-label>
                <q-item-label style="min-width:250px" caption lines="1">
                  <span class="neu-css-after-colon ">
                    提交日期
                  </span>
                  {{ t.create_time + "\n                      " }}
                  <q-separator />
                </q-item-label>
              </q-item-section>
            </q-item>
          </q-card-section>
          <q-card-actions align="right">
            <q-btn flat label="取消" color="grey" @click='warnDialog = false' />
            <q-btn flat label="确认" color="primary" @click='getWarnSure' />
          </q-card-actions>
        </q-card>
      </q-dialog>
    </q-page-container>
  </q-pull-to-refresh>
  <q-page-sticky position="bottom-right" :offset='fabPos'>
    <q-fab v-model="fab" v-touch-pan.prevent.mouse.prevent.mouse="moveFab" v-show="tab === 'reviewing' && operateDisplay" label="操作" icon="keyboard_arrow_up" direction="up" color="primary" :disable='draggingFab'>
      <q-fab-action color="primary" label="通过" :disable='draggingFab' @click='Pass("A")' />
      <q-fab-action color="primary" label="驳回" :disable='draggingFab' @click='Pass("R")' />
      <q-fab-action color="primary" label="取消" :disable='draggingFab' @click='Pass("C")' />
    </q-fab>
  </q-page-sticky>
  <neu-export-data :config='exportCompConfig' />
</q-layout>
</template>

<script>
// The exact semantic component options are preserved in the sibling .logic.js file.
// This SFC isolates the original render tree for review and manual variable renaming.
export default {
  name: "SanitationIndex",
};
</script>
