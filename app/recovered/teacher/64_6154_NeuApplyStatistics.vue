<!--
  Source: assets/www/js/64.js -> webpack module "6154"
  Route: /teacher/apply/detail
  Component: NeuApplyStatistics
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
      <q-btn v-show="tab == 'progress' && checkBatchNo == 1" flat round dense icon="search" @click='open'>
        <q-badge v-show="condCount != 0" color="orange" floating transparent>
          {{ condCount }}
        </q-badge>
      </q-btn>
    </q-toolbar>
    <q-card class="bg-white" flat>
      <q-item>
        <q-item-section>
          <q-item-label style="font-size:1.3em">
            {{ record.title }}
          </q-item-label>
          <q-item-label caption>
            {{ record.signin_type_name }}
          </q-item-label>
        </q-item-section>
        <q-item-section side>
          <q-btn flat dense icon="more_vert" size="sm" @click='drawerRight = !drawerRight'>
            <q-badge v-show="configsRessultList.length != 0" color="orange" floating transparent>
              {{ configsRessultList.length }}
            </q-badge>
          </q-btn>
        </q-item-section>
      </q-item>
    </q-card>
    <q-separator style="height:0.1rem" color="grey-3" />
  </q-header>
  <q-drawer v-model="drawerRight" side="right" :width="200" :breakpoint="100" overlay bordered content-class="bg-white-3">
    <q-scroll-area class="fit">
      <q-list style="border-left:0.15rem solid #027be3" separator>
        <q-item v-show="tab == 'progress' && checkBatchNo == 1" v-ripple clickable @click='exportList'>
          <q-item-section avatar>
            <q-icon name="get_app" size="sm" />
          </q-item-section>
          <q-item-section style="font-size:1.1rem">
            导出
          </q-item-section>
        </q-item>
        <q-item v-show="tab == 'statistics' && checkBatchNo == 1" v-ripple clickable>
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
          <q-item-section class="text-primary" style="font-size:1.1rem" @click='unApplyAlert'>
            {{ "未" + applyShortTitle + "提醒(APP推送)" }}
          </q-item-section>
        </q-item>
        <q-item v-show="tab == 'progress' && time != 0 && record.is_author && allowSmsRemind" v-ripple clickable>
          <q-item-section avatar>
            <q-icon name="notifications" size="sm" color="primary" />
          </q-item-section>
          <q-item-section class="text-primary" style="font-size:1.1rem" @click='sendSmsRemind'>
            {{ "未" + applyShortTitle + "提醒(短信提醒)" }}
          </q-item-section>
        </q-item>
        <q-item v-show="tab == 'progress' && applyType === 'C'" v-ripple clickable>
          <q-item-section avatar>
            <q-icon name="search" size="sm" color="primary" />
          </q-item-section>
          <q-item-section class="text-primary" style="font-size:1.1rem" @click='showConfigSearch'>
            {{ "收集内容查询\n              " + 0 != configsRessultList.length ? "(" + configsRessultList.length + ")" : "" + "\n            " }}
          </q-item-section>
        </q-item>
      </q-list>
    </q-scroll-area>
  </q-drawer>
  <q-page-container>
    <q-page class="bg-grey-3">
      <q-card v-show="tab == 'progress' || tab == 'statistics'" flat>
        <q-item v-show="batchNoList && batchNoList.length != 0" clickable @click='changeApplyTime'>
          <q-item-section>
            <q-item-label>
              <div class="text-grey">
                {{ applyShortTitle + "时间段" }}
              </div>
            </q-item-label>
            <q-item-label class="q-mb-sm">
              {{ "\n              " + batchLabel + "\n            " }}
            </q-item-label>
            <q-item-label>
              <div v-show="records.total" class="text-grey">
                {{ "\n                本次" + applyShortTitle + "率 " }}
                <span class="text-black">
                  {{ records.applied_ratio + "%(" + records.applied_total + "/" + records.total + ")" }}
                </span>
              </div>
            </q-item-label>
          </q-item-section>
          <q-item-section v-show="record.frequency_name != '单次'" side top>
            <q-icon name="arrow_drop_down" />
          </q-item-section>
        </q-item>
        <q-item v-if="'statistics' == tab">
          <q-item-section>
            <q-item-label>
              <div class="text-grey">
                统计方式
              </div>
            </q-item-label>
            <q-item-label>
              <q-btn-toggle v-model="model.applyStatistics" unelevated size="sm" :options='[{ label: "按班级统计", value: "1" }, { label: "按专业统计", value: "2" }, { label: "按院系统计", value: "3" }, { label: "按" + counsellorlabel + "统计", value: "4" }]' />
            </q-item-label>
          </q-item-section>
        </q-item>
      </q-card>
      <q-pull-to-refresh v-show="tab == 'progress'" @refresh='refresh'>
        <q-card v-for="e in list" :key='e.id' class="bg-white q-my-sm q-mx-sm" :style='0 == e.apply_status ? "border-left:0.25rem solid #c10015;" : 1 == e.apply_status ? "border-left:0.25rem solid #21ba45;" : "border-left:0.25rem solid #027be3;"' flat>
          <q-item>
            <q-item-section>
              <q-item-label>
                <q-icon v-show="item.sex_name == '男'" name="person" color="blue" />
                <q-icon v-show="item.sex_name == '女'" name="person" color="pink" />
                {{ "\n                " + e.student_name + " " }}
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
              <q-item-label v-show="record.need_location === 1 && item.address !== null" lines="1" caption>
                {{ "提交时的定位信息：" + e.address }}
              </q-item-label>
            </q-item-section>
            <q-item-section side top>
              <q-item-label>
                <span v-if="0 == e.apply_status" class="text-red" @click='showInfoResult(e.id)'>
                  {{ "未" + applyShortTitle }}
                  <q-icon name="keyboard_arrow_right" size="sm" />
                </span>
                <span v-if="1 == e.apply_status && null == e.info_result" class="text-black">
                  {{ "已" + applyShortTitle }}
                </span>
                <span v-if="1 == e.apply_status && null != e.info_result" class="text-primary" @click='showInfoResult(e.id)'>
                  {{ "已" + applyShortTitle }}
                  <q-icon name="keyboard_arrow_right" size="sm" />
                </span>
              </q-item-label>
              <q-item-label>
                <span v-if="1 == e.apply_status && record.is_author && 0 != time || 1 == e.apply_status && 1 == record.allow_counsellor && 'C' == roleId && 0 != time" class="text-primary" @click='returnBefor(e.id)'>
                  {{ "撤回" + applyShortTitle }}
                  <q-icon name="keyboard_arrow_right" size="sm" />
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
        <q-dialog v-model="timeDialog" timeDialog>
          <q-card style="border-radius:25px;width:15rem">
            <q-item>
              <q-item-section class="flex flex-center">
                <q-item-label class="text-weight-bold">
                  时间段选择
                </q-item-label>
              </q-item-section>
            </q-item>
            <q-item class="text-center q-mb-sm" dense>
              <q-item-section>
                <q-item-label>
                  请至少选择一个时间段!
                </q-item-label>
              </q-item-section>
            </q-item>
            <q-separator />
            <q-card-actions align="around">
              <q-btn flat color="primary" @click='chooseSigninTime'>
                确定
              </q-btn>
            </q-card-actions>
          </q-card>
        </q-dialog>
        <q-dialog v-model="applyTime">
          <q-card class="full-width" flat>
            <q-card-section class="row items-center justify-between">
              <div class="text-bold">
                {{ applyShortTitle + "时间段选择" }}
              </div>
              <q-btn v-close-popup icon="close" flat round dense size="sm" />
            </q-card-section>
            <q-separator />
            <q-list v-for="(e, i) in batchNoList" :key='e.value'>
              <q-item clickable>
                <q-item-section>
                  {{ "\n                  " + e.label + "\n                " }}
                </q-item-section>
                <q-item-section side>
                  <q-toggle v-model="getBatchnoList[index]" checked-icon="check" color="primary" :val='e.value' @input='checkBatchno(i)' />
                </q-item-section>
              </q-item>
            </q-list>
          </q-card>
        </q-dialog>
        <q-dialog v-model="infoResultDialog" :maximized='maximizedToggle'>
          <q-card class="full-width" flat>
            <q-card-section class="row items-center justify-between">
              <div class="text-h6">
                表单填写详情
              </div>
              <span :class='0 == writeStatus ? "text-red" : "text-blue"'>
                {{ 0 == writeStatus ? "未填写" : "已填写" }}
              </span>
              <q-btn v-close-popup icon="close" flat round dense size="sm" />
            </q-card-section>
            <q-card-section>
              <div class="row q-gutter-md">
                <q-select v-if="'S' !== record.frequency" v-model="batchNoDetail" style="width:230px" outlined dense emit-value label="填写时间段" map-options :options='batchNoList' @input='changeDetail(0)' />
                <q-btn v-if="batchNoDetail > 1" icon="mdi-arrow-up" flat round dense size="sm" @click='changeDetail(-1)'>
                  <q-tooltip>
                    上个时间段
                  </q-tooltip>
                </q-btn>
                <q-btn v-if="batchNoDetail < batchNoList.length" icon="mdi-arrow-down" flat round dense size="sm" @click='changeDetail(1)'>
                  <q-tooltip>
                    下个时间段
                  </q-tooltip>
                </q-btn>
              </div>
              <div v-for="(e, i) in record.info_config" :key='i' class="bg-grey-2 q-pa-sm q-mt-sm">
                <neu-widget :config='e' :value='infoResult[i]' :no='i + 1' :viewMode='true' />
              </div>
            </q-card-section>
          </q-card>
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
                    进度
                  </span>
                </q-item-section>
                <q-item-section>
                  <div class="row justify-evenly">
                    <q-btn v-for="e in [{ label: '未' + applyShortTitle, value: '1' }, { label: '已' + applyShortTitle, value: '2' }]" :key='e.value' outline :color='e.value == queryModel.apply_status ? "primary" : "grey"' @click='getValue(e.value)'>
                      {{ "\n                    " + e.label + "\n                    " }}
                      <q-badge v-show="queryModel.apply_status == item.value" color="orange" floating>
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
      </q-pull-to-refresh>
      <neu-manage-qa v-show="tab == 'qa'" class="bg-grey-3" :taskMenuId='"A" == applyType ? "apply" : "S" == applyType ? "signup" : "collect"' :taskId='record.id + ""' :readonly='!record.is_author' />
      <neu-apply-statistics v-show="tab == 'statistics'" :id='applyId' :title='record.title' :task_target='record.task_target' :apply_type='applyType' :applyShortTitle='applyShortTitle' :batchNo='batchNo.toString()' :applyStatistics='model.applyStatistics' />
    </q-page>
  </q-page-container>
  <q-footer v-if="'A' == applyType" class="bg-white text-primary" bordered>
    <q-tabs v-model="tab" class="text-black" no-caps active-color="primary" indicator-color="transparent" align="justify">
      <q-tab name="progress" label="申请进度" />
      <q-separator vertical />
      <q-tab name="statistics" label="申请统计" />
      <q-separator vertical />
      <q-tab name="qa" label="学生提问" />
    </q-tabs>
  </q-footer>
  <q-footer v-if="'S' == applyType" class="bg-white text-primary" bordered>
    <q-tabs v-model="tab" class="text-black" no-caps active-color="primary" indicator-color="transparent" align="justify">
      <q-tab name="progress" label="报名进度" />
      <q-separator vertical />
      <q-tab name="statistics" label="报名统计" />
      <q-separator vertical />
      <q-tab name="qa" label="学生提问" />
    </q-tabs>
  </q-footer>
  <q-footer v-if="'C' == applyType" class="bg-white text-primary" bordered>
    <q-tabs v-model="tab" class="text-black" no-caps active-color="primary" indicator-color="transparent" align="justify">
      <q-tab name="progress" label="收集进度" />
      <q-separator vertical />
      <q-tab name="statistics" label="收集统计" />
      <q-separator vertical />
      <q-tab name="qa" label="学生提问" />
    </q-tabs>
  </q-footer>
  <neu-export-data :config='exportCompConfig' />
  <q-dialog v-model="searchDialog" persistent fullWidth :maximized='maximizedToggle'>
    <q-layout class="bg-white" view="lHh lpr lFf" container>
      <q-header class="bg-white">
        <q-toolbar>
          <div class="full-width row items-center justify-between q-px-xs q-py-sm">
            <div class="text-bold text-black">
              收集内容查询
            </div>
            <div>
              <q-btn class="q-ml-sm" outline color="grey" label="关闭" @click='searchDialog = false' />
            </div>
          </div>
        </q-toolbar>
        <q-separator />
      </q-header>
      <q-page-container>
        <q-page>
          <q-card-section>
            <q-select v-model="infoConfigList" outlined dense label="选择查询内容" hint="仅支持查询文本、数字、单选类型收集内容" :options='t.configSet' emit-value map-options multiple :option-disable='function (t) { return Object(t) !== t || "T" !== t.type && "N" !== t.type && "R" !== t.type; }' />
          </q-card-section>
          <neu-collect-search :configList='infoConfigList' :configSet='configSet' :returnForm='saveFormInit' @input='searchInfo' @reset='resetInfoResultList' @saveForm='saveForm' />
        </q-page>
      </q-page-container>
    </q-layout>
  </q-dialog>
</q-layout>
</template>

<script>
// The exact semantic component options are preserved in the sibling .logic.js file.
// This SFC isolates the original render tree for review and manual variable renaming.
export default {
  name: "NeuApplyStatistics",
};
</script>
