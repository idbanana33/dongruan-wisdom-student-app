<!--
  Source: assets/www/js/54.js -> webpack module "4ab0"
  Route: /student/signin/signinPersonnel
  Component: signin
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
    <q-page class="bg-grey-3">
      <q-select v-model="model" dense bg-color="grey-2" filled emit-value map-options :options='[{ label: "按学号排序", value: "0" }, { label: "按姓名排序", value: "1" }]' @input='refresh(function () {  })' />
      <q-pull-to-refresh ref=""pageRefresh"" @refresh='refresh'>
        <q-card v-for="e in list" :key='e.id' class="bg-white q-mb-sm q-mx-sm" :style='1 == e.signin_status ? "border-left:0.25rem solid #c10015;" : 2 == e.signin_status ? "border-left:0.25rem solid #21ba45;" : 3 == e.signin_status ? "border-left:0.25rem solid #f2c037;" : "border-left:0.25rem solid #b5b3b3;"' flat>
          <q-item clickable>
            <q-item-section avatar>
              <q-item-label style="font-size:1.01rem">
                {{ e.name }}
              </q-item-label>
              <q-item-label caption lines="1">
                {{ e.sex_name + " (" + e.student_no + ")" }}
              </q-item-label>
            </q-item-section>
            <q-item-section />
            <q-item-section v-show="item.signin_status == 1" side @click='changeStatus(e.id)'>
              <q-item-label class="text-primary">
                变更记录
                <q-icon class="text-primary" name="keyboard_arrow_right" size="xs" />
              </q-item-label>
            </q-item-section>
            <q-item-section v-show="item.signin_status == 2" side>
              <q-item-label class="text-positive">
                已签到
              </q-item-label>
            </q-item-section>
            <q-item-section v-show="item.signin_status == 3" side>
              <q-item-label class="text-warning">
                已请假
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
                    任务状态
                  </span>
                </q-item-section>
                <q-item-section>
                  <div class="row justify-evenly">
                    <q-btn v-for="e in [{ label: '未签到', value: '1' }, { label: '已签到', value: '2' }, { label: '已请假', value: '3' }]" :key='e.value' outline :color='e.value == queryModel.status ? "primary" : "grey"' @click='getValue(e.value)'>
                      {{ "\n                      " + e.label + "\n                      " }}
                      <q-badge v-show="queryModel.status == item.value" color="orange" floating>
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
                  <q-item-label caption>
                    可以查询学号、姓名
                  </q-item-label>
                </q-item-section>
              </q-item>
            </q-list>
          </q-card>
        </q-dialog>
      </q-pull-to-refresh>
    </q-page>
  </q-page-container>
  <q-dialog v-model="changeStudentStatus" persistent full-width>
    <q-card>
      <q-card-section class="flex flex-center">
        <div class="text-weight-bold">
          变更状态
        </div>
      </q-card-section>
      <q-card-section>
        <div class="neu-css-after-colon">
          变更为
        </div>
        <div class="flex flex-center">
          <q-btn-toggle v-model="condition" size="md" toggle-color="primary" color="white" text-color="primary" unelevated emit-value map-options :options='[{ label: "已签到", value: "1" }, { label: "未签到", value: "0" }]' />
        </div>
      </q-card-section>
      <q-card-section>
        <div class="neu-css-after-colon full-width">
          变更说明
        </div>
        <q-input v-model="text" style="min-width:250px" outlined type="textarea" placeholder="变更说明选填" />
      </q-card-section>
      <q-separator />
      <q-card-actions align="around">
        <q-btn v-close-popup flat>
          取消
        </q-btn>
        <q-separator vertical />
        <q-btn v-close-popup flat color="primary" @click='changeSigninStatus(signinId)'>
          变更
        </q-btn>
      </q-card-actions>
    </q-card>
  </q-dialog>
  <q-footer class="bg-white text-primary" bordered>
    <q-tabs v-model="tabs" class="text-black" no-caps active-color="primary" indicator-color="transparent" align="justify">
      <q-tab name="scan" label="签到扫描" @click='goScan(id, batch_no, title)' />
      <q-separator vertical />
      <q-tab name="personnel" label="签到人员列表" />
    </q-tabs>
  </q-footer>
</q-layout>
</template>

<script>
// The exact semantic component options are preserved in the sibling .logic.js file.
// This SFC isolates the original render tree for review and manual variable renaming.
export default {
  name: "signin",
};
</script>
