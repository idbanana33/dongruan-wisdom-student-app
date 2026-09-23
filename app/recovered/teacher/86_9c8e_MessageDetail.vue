<!--
  Source: assets/www/js/86.js -> webpack module "9c8e"
  Route: /teacher/message/detail
  Component: MessageDetail
  Restoration: template decompiled from Vue render function; logic in sibling .logic.js
  Confidence: high for DOM structure / medium for expression quoting
-->
<template>
<q-layout view="lHh lpr lFf">
  <q-header class="bg-grey-3 text-black">
    <q-toolbar>
      <q-btn flat round dense icon="keyboard_arrow_left" @click='goBack' />
      <q-toolbar-title v-if="menuInfo">
        {{ menuInfo.title + "进度" }}
      </q-toolbar-title>
      <q-btn v-show="checkBatchNo == 1" flat round dense icon="search" @click='open'>
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
        <q-item v-show="checkBatchNo == 1" v-ripple clickable @click='exportList'>
          <q-item-section avatar>
            <q-icon name="get_app" size="sm" />
          </q-item-section>
          <q-item-section style="font-size:1.1rem">
            导出
          </q-item-section>
        </q-item>
        <q-item v-show="time != 0 && record.is_author" v-ripple clickable>
          <q-item-section avatar>
            <q-icon name="notifications" size="sm" color="primary" />
          </q-item-section>
          <q-item-section class="text-primary" style="font-size:1.1rem" @click='unApplyAlert'>
            {{ "未" + applyShortTitle + "提醒(APP推送)" }}
          </q-item-section>
        </q-item>
        <q-item v-show="time != 0 && record.is_author && allowSmsRemind" v-ripple clickable>
          <q-item-section avatar>
            <q-icon name="notifications" size="sm" color="primary" />
          </q-item-section>
          <q-item-section class="text-primary" style="font-size:1.1rem" @click='sendSmsRemind'>
            {{ "未" + applyShortTitle + "提醒(短信提醒)" }}
          </q-item-section>
        </q-item>
        <q-item v-ripple clickable>
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
      <q-pull-to-refresh @refresh='refresh'>
        <q-card v-for="e in list" :key='e.id' class="bg-white q-my-sm q-mx-sm" :style='0 == e.message_status ? "border-left:0.25rem solid #c10015;" : 1 == e.message_status ? "border-left:0.25rem solid #21ba45;" : "border-left:0.25rem solid #027be3;"' flat>
          <q-item>
            <q-item-section>
              <q-item-label>
                <q-icon v-show="item.sex_name == '男'" name="person" color="blue" />
                <q-icon v-show="item.sex_name == '女'" name="person" color="pink" />
                {{ "\n                " + e.teacher_name + " " }}
                <span class="text-grey">
                  {{ "(" + e.teacher_no + ")" }}
                </span>
              </q-item-label>
              <q-item-label lines="1" caption>
                {{ e.dep_name }}
              </q-item-label>
              <q-item-label v-show="item.address !== null" lines="1" caption>
                {{ "提交时的定位信息：" + e.address }}
              </q-item-label>
            </q-item-section>
            <q-item-section side top>
              <q-item-label>
                <span v-if="0 == e.message_status" class="text-red" @click='showInfoResult(e.id)'>
                  {{ "未" + applyShortTitle }}
                  <q-icon name="keyboard_arrow_right" size="sm" />
                </span>
                <span v-if="1 == e.message_status && null == e.info_result" class="text-black">
                  {{ "已" + applyShortTitle }}
                </span>
                <span v-if="1 == e.message_status && null != e.info_result" class="text-primary" @click='showInfoResult(e.id)'>
                  {{ "已" + applyShortTitle }}
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
                    <q-btn v-for="e in [{ label: '未' + applyShortTitle, value: '1' }, { label: '已' + applyShortTitle, value: '2' }]" :key='e.value' outline :color='e.value == queryModel.message_status ? "primary" : "grey"' @click='getValue(e.value)'>
                      {{ "\n                    " + e.label + "\n                    " }}
                      <q-badge v-show="queryModel.message_status == item.value" color="orange" floating>
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
    </q-page>
  </q-page-container>
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
  name: "MessageDetail",
};
</script>
