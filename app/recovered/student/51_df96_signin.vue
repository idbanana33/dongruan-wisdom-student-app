<!--
  Source: assets/www/js/51.js -> webpack module "df96"
  Route: /student/signin/signin
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
        签到详情
      </q-toolbar-title>
    </q-toolbar>
  </q-header>
  <q-page-container>
    <q-page class="bg-grey-3">
      <q-card v-show="tab == 'information'" class="full-width" flat>
        <div>
          <q-chip class="q-ma-sm" square color="primary" text-color="white" icon="event_available" size="sm">
            {{ "\n            " + record || {  }.signin_type_name + "\n          " }}
          </q-chip>
        </div>
        <div class="q-ml-sm row">
          <span class="full-width text-weight-bold" style="font-size:15px">
            {{ record.title }}
          </span>
          <span class="neu-css-after-colon text-grey">
            发起人
          </span>
          {{ record.name + "\n        " }}
        </div>
        <div class="q-ml-sm row">
          <span class="neu-css-after-colon text-grey">
            签到时间段
          </span>
          {{ record.begin_time + " 至 " + record.end_time + "\n        " }}
        </div>
        <div v-if="null !== record.dep_name" class="q-ml-sm row">
          <span class="neu-css-after-colon text-grey">
            发布单位
          </span>
          {{ record.dep_name + "\n        " }}
        </div>
        <q-separator v-show="record.attachment != null" class="q-mt-sm" />
        <div v-show="record.attachment != null" class="q-ml-sm q-mt-xs row">
          <div v-for="e in record.attachment" :key='e.size' class="text-grey" @click='downloadFile(e.link, e.srcname)'>
            <span class="neu-css-after-colon text-grey">
              附件
            </span>
            <q-icon name="attach_file" color="grey" size="xs" />
            {{ "\n            " + e.srcname + "\n          " }}
          </div>
        </div>
      </q-card>
      <q-card v-show="tab == 'information'" class="full-width q-mt-sm" flat>
        <q-card-section v-show="record.signin_status == '未开始'">
          <div class="flex flex-center">
            <div class="row q-mb-sm q-mt-sm">
              <span style="font-size:15px">
                签到任务还未开始，请稍后再来！
              </span>
            </div>
          </div>
        </q-card-section>
        <q-card-section v-show="record.signin_status == '未打卡'">
          <div class="q-mb-sm text-center">
            <span>
              当前为签到时间，请注意及时签到！
            </span>
          </div>
          <div v-if="'已请假' == record.leaved" class="q-mb-sm text-center text-positive">
            <span>
              本次签到任务您已请假，可自行选择是否签到！
            </span>
          </div>
          <div class="text-center">
            <q-btn v-show="record.signin_method == 'L' && record.picture_evidence == '0'" round size="3rem" color="blue" @click='signinPicLocation(record.id)'>
              <q-icon style="font-size:2.5rem" name="place" />
            </q-btn>
            <q-btn v-show="record.signin_method == 'L' && record.picture_evidence == '1'" round size="3rem" color="blue" @click='signinPicLocation(record.id)'>
              <q-icon style="font-size:2.5rem" name="local_see" />
            </q-btn>
            <q-btn v-show="record.signin_method == 'DQR' || record.signin_method == 'SQR'" round size="3rem" color="blue" @click='informationDetail(record.id, record.signin_method, batch_no)'>
              <q-icon style="font-size:2.5rem" name="mdi-qrcode-scan" />
            </q-btn>
          </div>
          <div v-show="record.signin_method == 'L'" class="text-center q-mt-md">
            {{ "\n            当前所在位置：" + location.address + "\n            " }}
            <neu-geo-location :needAddr='true' :location='research' @completed='locationCompleted' @error='locationError' />
          </div>
        </q-card-section>
      </q-card>
      <q-card v-show="tab == 'qa'" class="bg-grey-3" flat>
        <q-card-section>
          <neu-qa-list taskMenuId="signin" :taskId='id + ""' />
        </q-card-section>
      </q-card>
    </q-page>
  </q-page-container>
  <q-dialog v-model="outPicture" persistent full-width>
    <q-card>
      <q-card-section class="flex flex-center">
        <div class="text-weight-bold">
          签到
        </div>
      </q-card-section>
      <div class="text-center q-mb-md">
        当前为签到范围外，是否进行拍照？
      </div>
      <q-separator />
      <q-card-actions align="around">
        <q-btn v-close-popup flat>
          取消
        </q-btn>
        <q-separator vertical />
        <q-btn v-close-popup flat color="primary" @click='takePhotos'>
          确定
        </q-btn>
      </q-card-actions>
    </q-card>
  </q-dialog>
  <q-footer v-show="record.signin_status == '未打卡'" class="bg-white text-primary" bordered>
    <q-tabs v-model="tab" class="text-black" no-caps active-color="primary" indicator-color="transparent" align="justify">
      <q-tab name="information" label="任务信息" />
      <q-separator vertical />
      <q-tab name="qa" label="提问" />
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
