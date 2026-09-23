<!--
  Source: assets/www/js/112.js -> webpack module "a0ab"
  Route: /teacher/signin/detail
  Component: NeuSigninStatistics
  Restoration: template decompiled from Vue render function; logic in sibling .logic.js
  Confidence: high for DOM structure / medium for expression quoting
-->
<template>
<q-layout view="lHh lpr lFf">
  <q-header class="bg-grey-3 text-black">
    <q-toolbar>
      <q-btn flat round dense icon="keyboard_arrow_left" @click='goBack' />
      <q-toolbar-title>
        {{ menuInfo.title + "详情" }}
      </q-toolbar-title>
      <q-btn v-if="'progress' == tab && 1 == checkBatchNo" flat round dense icon="search" @click='open'>
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
          <q-btn flat dense icon="more_vert" size="sm" @click='drawerRight = !drawerRight' />
        </q-item-section>
      </q-item>
    </q-card>
    <q-separator style="height:0.1rem" color="grey-3" />
  </q-header>
  <q-drawer v-model="drawerRight" side="right" :width="200" :breakpoint="10" overlay bordered content-class="bg-white-3">
    <q-scroll-area class="fit">
      <q-list style="border-left:0.15rem solid #027be3" separator>
        <q-item v-if="'progress' == tab && 1 == checkBatchNo && 'L' == record.signin_method" v-ripple clickable>
          <q-item-section avatar>
            <q-icon name="bubble_chart" size="sm" />
          </q-item-section>
          <q-item-section style="font-size:1.1rem" @click='showAnalysisMap'>
            签到位置可视化分析
          </q-item-section>
        </q-item>
        <q-item v-if="'progress' == tab && 1 == checkBatchNo" v-ripple clickable>
          <q-item-section avatar>
            <q-icon name="get_app" size="sm" />
          </q-item-section>
          <q-item-section style="font-size:1.1rem" @click='exportList'>
            导出签到数据
          </q-item-section>
        </q-item>
        <q-item v-if="'progress' == tab && 1 == checkBatchNo && 'L' == record.signin_method" v-ripple clickable>
          <q-item-section avatar>
            <q-icon name="get_app" size="sm" />
          </q-item-section>
          <q-item-section style="font-size:1.1rem" @click='exportStatisticsData'>
            导出位置分布数据
          </q-item-section>
        </q-item>
        <q-item v-if="'statistics' == tab && 1 == checkBatchNo" v-ripple clickable>
          <q-item-section avatar>
            <q-icon name="get_app" size="sm" />
          </q-item-section>
          <q-item-section style="font-size:1.1rem" @click='exportSigninList'>
            导出
          </q-item-section>
        </q-item>
        <q-item v-show="tab == 'progress' && time != '0' && record.is_author" v-ripple clickable>
          <q-item-section avatar>
            <q-icon name="notifications" size="sm" color="primary" />
          </q-item-section>
          <q-item-section class="text-primary" style="font-size:1.1rem" @click='unsigninAlert'>
            未签到提醒(App推送)
          </q-item-section>
        </q-item>
        <q-item v-show="tab == 'progress' && time != '0' && record.is_author && allowSmsRemind" v-ripple clickable>
          <q-item-section avatar>
            <q-icon name="notifications" size="sm" color="primary" />
          </q-item-section>
          <q-item-section class="text-primary" style="font-size:1.1rem" @click='sendSigninSmsRemind'>
            未签到提醒(短信提醒)
          </q-item-section>
        </q-item>
        <q-item v-show="(record.tea_show && record.signin_method_name != '定位' && tab == 'progress') || (record.teacher_no == loginName && record.signin_method_name != '定位' && tab == 'progress')" v-ripple clickable>
          <q-item-section avatar>
            <q-icon name="mdi-qrcode" size="sm" />
          </q-item-section>
          <q-item-section style="font-size:1.1rem" @click='qrShowing(record.id)'>
            展示二维码
          </q-item-section>
        </q-item>
      </q-list>
    </q-scroll-area>
  </q-drawer>
  <q-page-container>
    <q-page class="bg-grey-3">
      <q-card v-if="'progress' == tab || 'statistics' == tab" flat>
        <q-item v-if="batchNoList && 0 != batchNoList.length" clickable @click='changeSigninTime'>
          <q-item-section>
            <q-item-label>
              <div class="text-grey">
                签到时间段
              </div>
            </q-item-label>
            <q-item-label class="q-mb-sm">
              {{ "\n              " + batchLabel + "\n            " }}
            </q-item-label>
            <q-item-label v-if="initDetail.total && 'progress' == tab">
              <div class="text-grey">
                本次签到率
                <span class="text-black">
                  {{ initDetail.signined_ratio + "% (" + initDetail.signin_total + "/" + initDetail.total - initDetail.leave_total + ")" }}
                </span>
              </div>
              <div class="text-grey q-mt-sm">
                本次请假率
                <span class="text-black">
                  {{ initDetail.leaved_ratio + "% (" + initDetail.leave_total + "/" + initDetail.total + ")" }}
                </span>
              </div>
            </q-item-label>
          </q-item-section>
          <q-item-section v-if="'单次' != record.frequency_name" side top>
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
              <q-btn-toggle v-model="model.signin_statistics" unelevated size="sm" :options='[{ label: "按班级统计", value: "1" }, { label: "按专业统计", value: "2" }, { label: "按院系统计", value: "3" }, { label: "按" + counsellorlabel + "统计", value: "4" }]' />
            </q-item-label>
          </q-item-section>
        </q-item>
      </q-card>
      <neu-manage-qa v-show="tab == 'qa'" class="bg-grey-3" taskMenuId="signin" :taskId='record.id + ""' :readonly='!record.is_author' />
      <neu-signin-statistics v-show="tab == 'statistics'" :id='record.id' :title='record.title' :batch_no='batchNo' :signin_statistics='model.signin_statistics' :tea_show='record.tea_show' />
      <q-pull-to-refresh v-show="tab == 'progress'" ref=""pageRefresh"" @refresh='refresh'>
        <q-card v-for="(e, a) in initList" :key='a' class="bg-white q-my-sm q-mx-sm" :style='"未签到" == e.signin_status ? "border-left:0.25rem solid #c10015;" : "已请假" == e.signin_status ? "border-left:0.25rem solid #027be3;" : "border-left:0.25rem solid #21ba45;"' flat>
          <q-item>
            <q-item-section>
              <q-item-label>
                <q-icon v-show="item.sex_name == '男'" name="person" color="blue" />
                <q-icon v-show="item.sex_name == '女'" name="person" color="pink" />
                {{ "\n                  " + e.name + " " }}
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
              <q-item-label v-show="item.location_status && record.signin_method == 'L'" caption>
                <span :class='1 == e.outside_flag ? "text-red" : ""'>
                  {{ "签到" + e.location_status }}
                </span>
              </q-item-label>
              <q-item-label v-show="item.picture_evidence && record.signin_method == 'L' && record.picture_evidence == 1" caption>
                <span v-show="item.picture_evidence == '查看照片'" class="text-primary cursor-pointer" @click='showPic(e.picture)'>
                  {{ e.picture_evidence }}
                </span>
              </q-item-label>
              <q-item-label v-show="item.qrcode_source && (record.signin_method == 'SQR' || record.signin_method == 'DQR')" caption>
                <span class="neu-css-after-colon">
                  二维码来源
                </span>
                {{ e.qrcode_source + "\n                " }}
              </q-item-label>
              <q-item-label v-show="item.modified_log == '有变更'" caption>
                <span class="text-primary cursor-pointer" @click='checkModifiedLog(e.id)'>
                  查看签到状态变更记录
                </span>
              </q-item-label>
            </q-item-section>
            <q-item-section side top @click='(record.is_author || record.tea_show) && changeStatus(e.id, e.signin_status)'>
              <q-item-label>
                <div :class='"未签到" == e.signin_status ? "text-red" : "已请假" == e.signin_status ? "text-primary" : "text-positive"'>
                  {{ "\n                    " + e.signin_status }}
                  <q-icon v-show="record.is_author || record.tea_show" name="keyboard_arrow_right" size="sm" />
                </div>
              </q-item-label>
              <q-item-label v-show="item.signin_time" caption>
                {{ e.signin_time }}
              </q-item-label>
            </q-item-section>
          </q-item>
        </q-card>
        <div v-show="!isLoading && paging.pageCount != paging.pageNum" class="text-center text-grey q-pt-sm q-pb-md" @click='loadList(null)'>
          加载更多...
        </div>
        <div v-show="!isLoading && paging.pageCount == paging.pageNum && initList.length != 0" class="text-center text-grey q-pt-sm q-pb-md">
          没有更多了
        </div>
        <div v-show="!isLoading && initList.length == 0" class="text-center text-grey q-pt-sm q-pb-md">
          {{ "\n            暂无" + menuInfo.title + "数据\n          " }}
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
            <q-list bordered>
              <q-item clickable>
                <q-item-section avatar top>
                  <span>
                    签到结果
                  </span>
                </q-item-section>
                <q-item-section>
                  <div class="row justify-evenly">
                    <q-btn v-for="e in [{ label: '未签到', value: '1' }, { label: '已请假', value: '2' }, { label: '已签到', value: '3' }]" :key='e.value' outline :color='e.value == queryModel.signin_status ? "primary" : "grey"' @click='getValue("signin_status", e.value)'>
                      {{ "\n                      " + e.label + "\n                      " }}
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
                    <q-btn v-for="e in [{ label: '位置正常', value: '1' }, { label: '位置异常', value: '2' }]" :key='e.value' outline :color='e.value == queryModel.location_status ? "primary" : "grey"' @click='getValue("location_status", e.value)'>
                      {{ "\n                      " + e.label + "\n                      " }}
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
  <q-dialog v-model="signinTime">
    <q-card class="full-width" flat>
      <q-card-section class="row items-center justify-between">
        <div class="text-bold">
          签到时间段选择
        </div>
        <q-btn v-close-popup icon="close" flat round dense size="sm" />
      </q-card-section>
      <q-separator />
      <q-list v-for="(e, a) in batchNoList" :key='e.value'>
        <q-item clickable>
          <q-item-section>
            {{ "\n            " + e.label + "\n          " }}
          </q-item-section>
          <q-item-section side>
            <q-toggle v-model="getBatchnoList[index]" checked-icon="check" color="primary" :val='e.value' @input='checkBatchno(a)' />
          </q-item-section>
        </q-item>
      </q-list>
    </q-card>
  </q-dialog>
  <q-dialog v-model="qrShowingDialog">
    <q-card class="full-width" flat>
      <q-card-section class="row items-center justify-between">
        <div class="text-bold">
          二维码展示
        </div>
        <q-btn v-close-popup icon="close" flat round dense size="sm" />
      </q-card-section>
      <q-separator />
      <q-card-section class="text-center">
        <vue-qr class="q-mb-xl" :text='downloadData.text' :margin="0" colorDark="#3B3B3B" colorLight="#fff" :logoScale="0.3" :size="250" />
      </q-card-section>
    </q-card>
  </q-dialog>
  <q-dialog v-model="teacherChangeStatus" persistent>
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
          <q-btn-toggle v-model="change" size="md" toggle-color="primary" color="white" text-color="primary" unelevated emit-value map-options :options='[{ label: "已签到", value: "1" }, { label: "未签到", value: "0" }]' />
        </div>
      </q-card-section>
      <q-card-section>
        <div class="neu-css-after-colon full-width">
          变更说明
        </div>
        <q-input v-model="texterea" style="min-width:250px" outlined type="textarea" placeholder="变更说明选填" />
      </q-card-section>
      <q-separator />
      <q-card-actions align="around">
        <q-btn v-close-popup flat>
          取消
        </q-btn>
        <q-separator vertical />
        <q-btn v-close-popup flat color="primary" @click='changeSigninStatus(stuSigninId)'>
          变更
        </q-btn>
      </q-card-actions>
    </q-card>
  </q-dialog>
  <q-dialog v-model="checkModified">
    <q-card class="full-width" flat>
      <q-card-section class="row items-center justify-between">
        <div class="text-bold">
          变更记录详情
        </div>
        <q-btn v-close-popup icon="close" flat round dense size="sm" />
      </q-card-section>
      <q-separator />
      <q-card-section>
        <q-list v-for="e in modList" :key='e.id' class="q-mt-sm" bordered>
          <q-item>
            <q-item-section>
              <div class="row q-mt-xs">
                <span class="neu-css-after-colon text-grey" style="font-size:15px">
                  签到状态变更为
                </span>
                <span :class='"未签到" == e.status ? "text-red" : "text-positive"'>
                  {{ e.status }}
                </span>
              </div>
              <div class="row q-mt-xs">
                <span class="neu-css-after-colon text-grey" style="font-size:15px">
                  变更人
                </span>
                {{ e.name + "\n              " }}
              </div>
              <div class="row q-mt-xs">
                <span class="neu-css-after-colon text-grey" style="font-size:15px">
                  变更原因
                </span>
                {{ e.reason + "\n              " }}
              </div>
              <div class="row q-mt-xs">
                <span class="neu-css-after-colon text-grey" style="font-size:15px">
                  变更时间
                </span>
                {{ e.modified_time + "\n              " }}
              </div>
            </q-item-section>
          </q-item>
        </q-list>
      </q-card-section>
    </q-card>
  </q-dialog>
  <q-dialog v-model="checkPicture">
    <q-card class="full-width" flat>
      <q-card-section class="row items-center justify-between">
        <div class="text-bold">
          上传的照片
        </div>
        <q-btn v-close-popup icon="close" flat round dense size="sm" />
      </q-card-section>
      <q-separator />
      <q-card-section class="text-center">
        <q-img :src='baseUrl + link' :ratio="1" />
      </q-card-section>
    </q-card>
  </q-dialog>
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
  <q-dialog v-model="mapDialog" maximized>
    <neu-location-analysis-map :statisticsData='statisticsData' :clusterData='clusterData' />
  </q-dialog>
  <q-footer class="bg-white text-primary" bordered>
    <q-tabs v-model="tab" class="text-black" no-caps active-color="primary" indicator-color="transparent" align="justify">
      <q-tab name="progress" label="签到进度" />
      <q-separator vertical />
      <q-tab name="statistics" label="签到统计" />
      <q-separator vertical />
      <q-tab name="qa" label="学生提问" />
    </q-tabs>
  </q-footer>
  <neu-full-screen-image v-model="showBigPic" :url='bigPicUrl' :name='bigPicName' />
  <neu-export-data :config='exportCompConfig' />
</q-layout>
</template>

<script>
// The exact semantic component options are preserved in the sibling .logic.js file.
// This SFC isolates the original render tree for review and manual variable renaming.
export default {
  name: "NeuSigninStatistics",
};
</script>
