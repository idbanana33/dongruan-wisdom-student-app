<!--
  Source: assets/www/js/78.js -> webpack module "3cd2"
  Route: /teacher/leave/list
  Component: LeaveIndex
  Restoration: template decompiled from Vue render function; logic in sibling .logic.js
  Confidence: high for DOM structure / medium for expression quoting
-->
<template>
<q-layout view="lHh lpr lFf">
  <q-header class="bg-grey-3 text-black">
    <q-toolbar>
      <q-btn flat round dense icon="keyboard_arrow_left" @click='goBack' />
      <q-toolbar-title>
        {{ title }}
      </q-toolbar-title>
      <q-btn flat round dense icon="search" @click='open'>
        <q-badge v-show="condCount != 0" color="orange" floating transparent>
          {{ condCount }}
        </q-badge>
      </q-btn>
    </q-toolbar>
  </q-header>
  <q-page-container>
    <q-page class="bg-grey-3 q-pb-sm">
      <q-pull-to-refresh ref=""pageRefresh"" @refresh='refresh'>
        <q-card v-for="(t, a) in data" v-touch-hold.mouse.mouse="(e)=>handleHold(index)" :key='t.id' class="bg-white q-mb-sm q-mx-sm" :style='"驳回" == t.review_name ? "border-left:0.25rem solid #FF0000;" : "审批中" == t.review_name ? "border-left:0.25rem solid #20B2AA;" : "border-left:0.25rem solid #32CD32;"' flat @click='goDetail(t.leave_id, a)'>
          <q-item>
            <q-item-section v-show="tab === 'reviewing' && operateDisplay" avatar>
              <q-item-label>
                <q-checkbox v-model="selected" :id='"leaveItem" + a' :val='t' />
              </q-item-label>
            </q-item-section>
            <q-item-section>
              <q-item-label>
                <q-icon v-show="item.sex_name == '男'" name="person" color="blue" />
                <q-icon v-show="item.sex_name == '女'" name="person" color="pink" />
                {{ "\n                " + t.name + " " }}
                <span class="text-grey">
                  {{ "(" + t.student_no + ") " }}
                </span>
                <span class="text-grey" style="font-size:0.8rem">
                  {{ t.report_status_name }}
                </span>
              </q-item-label>
              <q-item-label lines="1" caption>
                <q-badge square color="grey-5" text-color="white" size="sm">
                  {{ "\n                  " + t.leave_type_name + "\n                " }}
                </q-badge>
                <span v-show="item.walk_out === 1" class="text-grey" style="font-size:0.8rem">
                  {{ " " + "是" == t.walk_outs ? "需要离校" : "否" + " " }}
                </span>
                <span v-show="item.city_out === 1" class="text-grey" style="font-size:0.8rem">
                  {{ " " + 1 === t.city_out ? "需要离市" : "否" + " " }}
                </span>
                <span v-show="item.province_out === 1" class="text-grey" style="font-size:0.8rem">
                  {{ " " + 1 === t.province_out ? "需要离省" : "否" + " " }}
                </span>
              </q-item-label>
              <q-item-label lines="1" caption>
                {{ t.class_name + " " + t.major_name + " " + t.dep_name }}
              </q-item-label>
              <q-item-label lines="1" caption>
                {{ counsellorlabel + "：" + t.counsellor }}
              </q-item-label>
              <q-item-label lines="2">
                {{ "\n                " + t.leave_period + "\n              " }}
              </q-item-label>
            </q-item-section>
            <q-item-section side>
              <q-item-label>
                <q-icon name="keyboard_arrow_right" size="sm" />
              </q-item-label>
            </q-item-section>
          </q-item>
        </q-card>
        <div v-show="!isLoading && paging.pageCount != paging.pageNum" class="text-center text-grey q-pt-sm q-pb-md" @click='getLeaveReviewList(null)'>
          加载更多...
        </div>
        <div v-show="!isLoading && paging.pageCount == paging.pageNum && data.length != 0" class="text-center text-grey q-pt-sm q-pb-md">
          没有更多了
        </div>
        <div v-show="!isLoading && data.length == 0" class="text-center text-grey q-pt-sm q-pb-md">
          暂无请假记录
        </div>
        <div v-show="isLoading" class="text-center text-grey q-pt-sm q-pb-md">
          <q-spinner-dots color="primary" size="md" />
        </div>
      </q-pull-to-refresh>
      <q-page-sticky position="bottom-right" :offset='fabPos'>
        <q-fab v-model="fab" v-touch-pan.prevent.mouse.prevent.mouse="moveFab" v-show="tab === 'reviewing' && operateDisplay" label="操作" icon="keyboard_arrow_up" direction="up" color="primary" :disable='draggingFab'>
          <q-fab-action color="primary" label="通过" :disable='draggingFab' @click='Pass(1)' />
          <q-fab-action color="primary" label="驳回" :disable='draggingFab' @click='Pass(2)' />
          <q-fab-action color="primary" label="取消" :disable='draggingFab' @click='Pass(3)' />
        </q-fab>
      </q-page-sticky>
    </q-page>
  </q-page-container>
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
              请假时间
            </span>
            <div class="row justify-evenly q-gutter-sm">
              <q-btn v-for="t in [{ label: '最近1周', value: '1' }, { label: '最近1个月', value: '2' }, { label: '最近3个月', value: '3' }]" :key='t.value' outline :color='t.value == queryModel.status1 ? "primary" : "grey"' @click='chooseLeaveTime(t.value)'>
                {{ "\n                    " + t.label + "\n                    " }}
                <q-badge v-show="queryModel.status1 == item.value" color="orange" floating>
                  √
                </q-badge>
              </q-btn>
            </div>
          </q-item-section>
        </q-item>
        <q-item clickable>
          <q-item-section avatar top>
            <span>
              请假时长
            </span>
            <div class="row justify-evenly q-gutter-sm">
              <q-btn v-for="t in [{ label: '1天以内', value: '1' }, { label: '1-3天', value: '2' }, { label: '超过3天', value: '3' }]" :key='t.value' outline :color='t.value == queryModel.status2 ? "primary" : "grey"' @click='chooseLeavePeriod(t.value)'>
                {{ "\n                    " + t.label + "\n                    " }}
                <q-badge v-show="queryModel.status2 == item.value" color="orange" floating>
                  √
                </q-badge>
              </q-btn>
            </div>
          </q-item-section>
        </q-item>
        <q-item v-show="tab!= 'reviewing'" clickable>
          <q-item-section avatar top>
            <span>
              审批状态
            </span>
            <div class="row justify-evenly q-gutter-sm">
              <q-btn v-for="t in [{ label: '审批中', value: 'W' }, { label: '审批通过', value: 'A' }, { label: '驳回', value: 'R' }]" :key='t.value' outline :color='t.value == queryModel.status3 ? "primary" : "grey"' @click='chooseLeaveType(t.value)'>
                {{ "\n                    " + t.label + "\n                    " }}
                <q-badge v-show="queryModel.status3 == item.value" color="orange" floating>
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
            <q-item-label class="q-mt-xs" caption lines="1">
              可以查询学号、姓名、院系、专业、年级信息
            </q-item-label>
          </q-item-section>
        </q-item>
      </q-list>
    </q-card>
  </q-dialog>
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
        <q-btn v-close-popup flat label="确认" @click='Rigth()' />
      </q-card-actions>
    </q-card>
  </q-dialog>
  <neu-export-data :config='exportCompConfig' />
</q-layout>
</template>

<script>
// The exact semantic component options are preserved in the sibling .logic.js file.
// This SFC isolates the original render tree for review and manual variable renaming.
export default {
  name: "LeaveIndex",
};
</script>
