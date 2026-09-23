<!--
  Source: assets/www/js/55.js -> webpack module "a6f6"
  Route: /student/signin/stumanagedetail
  Component: SigninStuManageDetail
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
      <q-btn flat round dense icon="search" @click='open'>
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
              {{ record.name + "\n            " }}
            </q-item-label>
            <q-item-label caption>
              <span class="neu-css-after-colon">
                {{ menuInfo.title + "时间" }}
              </span>
              {{ timeSlot + "\n            " }}
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
                {{ menuInfo.title + "方式" }}
              </span>
              {{ "L" === record.signin_method ? "定位" : "DQR" === record.signin_method ? "动态二维码" : "静态二维码" + "\n            " }}
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
            {{ record.label }}
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
        <q-item v-ripple clickable @click='exportList'>
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
      <q-pull-to-refresh ref=""pageRefresh"" @refresh='refresh'>
        <q-card v-for="(t, s) in list" :key='s' class="bg-white q-my-sm q-mx-sm" :style='"未签到" == t.signin_status ? "border-left:0.25rem solid #c10015;" : "已请假" == t.signin_status ? "border-left:0.25rem solid #027be3;" : "border-left:0.25rem solid #21ba45;"' flat>
          <q-item>
            <q-item-section>
              <q-item-label>
                <q-icon v-show="item.sex_name == '男'" name="person" color="blue" />
                <q-icon v-show="item.sex_name == '女'" name="person" color="pink" />
                {{ "\n                  " + t.name + " " }}
                <span class="text-grey">
                  {{ "(" + t.student_no + ")" }}
                </span>
              </q-item-label>
              <q-item-label v-show="item.location_status && record.signin_method == 'L'" caption>
                <span :class='1 == t.outside_flag ? "text-red" : ""'>
                  {{ "签到" + t.location_status }}
                </span>
              </q-item-label>
              <q-item-label v-show="item.picture_evidence && record.signin_method == 'L' && record.picture_evidence == 1" caption>
                <span v-show="item.picture_evidence == '查看照片'" class="text-primary cursor-pointer" @click='showPic(t.picture)'>
                  {{ t.picture_evidence }}
                </span>
              </q-item-label>
              <q-item-label v-show="item.qrcode_source && (record.signin_method == 'SQR' || record.signin_method == 'DQR')" caption>
                <span class="neu-css-after-colon">
                  二维码来源
                </span>
                {{ t.qrcode_source + "\n                " }}
              </q-item-label>
            </q-item-section>
            <q-item-section side top>
              <q-item-label>
                <div :class='"未签到" == t.signin_status ? "text-red" : "已请假" == t.signin_status ? "text-primary" : "text-positive"'>
                  {{ "\n                    " + t.signin_status }}
                  <q-icon v-show="record.is_author || record.tea_show" name="keyboard_arrow_right" size="sm" />
                </div>
              </q-item-label>
              <q-item-label v-show="item.signin_time" caption>
                {{ t.signin_time }}
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
          {{ "\n            暂无" + menuInfo.title + "数据\n          " }}
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
          <q-list bordered>
            <q-item clickable>
              <q-item-section avatar top>
                <span>
                  签到结果
                </span>
              </q-item-section>
              <q-item-section>
                <div class="row justify-evenly">
                  <q-btn v-for="t in [{ label: '未签到', value: '1' }, { label: '已请假', value: '2' }, { label: '已签到', value: '3' }]" :key='t.value' outline :color='t.value == queryModel.signin_status ? "primary" : "grey"' @click='getValue("signin_status", t.value)'>
                    {{ "\n                  " + t.label + "\n                  " }}
                    <q-badge v-show="queryModel.signin_status == item.value" color="orange" floating>
                      √
                    </q-badge>
                  </q-btn>
                </div>
              </q-item-section>
            </q-item>
            <q-separator v-show="record.signin_method == 'L'" />
            <q-item v-show="record.signin_method == 'L'" clickable>
              <q-item-section avatar top>
                <span>
                  位置状态
                </span>
              </q-item-section>
              <q-item-section>
                <div class="row justify-evenly">
                  <q-btn v-for="t in [{ label: '位置正常', value: '1' }, { label: '位置异常', value: '2' }]" :key='t.value' outline :color='t.value == queryModel.location_status ? "primary" : "grey"' @click='getValue("location_status", t.value)'>
                    {{ "\n                  " + t.label + "\n                  " }}
                    <q-badge v-show="queryModel.location_status == items.value" color="orange" floating>
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
                <q-item-label class="q-mt-sm" caption>
                  可以查询学号、姓名、性别、手机号
                </q-item-label>
              </q-item-section>
            </q-item>
          </q-list>
        </q-card>
      </q-dialog>
    </q-page>
  </q-page-container>
  <neu-export-data :config='exportCompConfig' />
</q-layout>
</template>

<script>
// The exact semantic component options are preserved in the sibling .logic.js file.
// This SFC isolates the original render tree for review and manual variable renaming.
export default {
  name: "SigninStuManageDetail",
};
</script>
