<!--
  Source: assets/www/js/91.js -> webpack module "8060"
  Route: /teacher/message/new
  Component: MessageNew
  Restoration: template decompiled from Vue render function; logic in sibling .logic.js
  Confidence: high for DOM structure / medium for expression quoting
-->
<template>
<q-layout view="lHh lpr lFf">
  <q-header class="bg-grey-3 text-black">
    <q-toolbar>
      <q-btn flat round dense icon="keyboard_arrow_left" @click='goBack' />
      <q-toolbar-title v-if="menuInfo">
        {{ "新建" + menuInfo.title }}
      </q-toolbar-title>
    </q-toolbar>
  </q-header>
  <q-page-container>
    <q-page class="bg-grey-3">
      <div v-else class="text-h6 text-bold q-mb-md row justify-center full-width">
        您没有当前页面访问权限
      </div>
      <q-form ref=""form"" class="full-width" @submit='saveRecord'>
        <q-card class="full-width row" flat>
          <q-list class="full-width">
            <q-item>
              <q-item-section>
                <q-item-label class="text-bold">
                  {{ menuInfo || {  }.title + "通知内容" }}
                </q-item-label>
              </q-item-section>
            </q-item>
            <q-separator />
            <q-item>
              <q-item-section avatar>
                <q-item-label class="neu-css-before-red-asterisk">
                  名称
                </q-item-label>
              </q-item-section>
              <q-item-section>
                <q-input v-model="record.title" outlined dense hide-bottom-space lazy-rules :rules='[function (e) { return !!e || "请填写该项"; }]' />
              </q-item-section>
            </q-item>
            <q-separator />
            <q-item>
              <q-item-section avatar>
                <div>
                  发布单位
                </div>
              </q-item-section>
              <q-item-section>
                <q-select v-model="record.dep_no" outlined emit-value map-options dense :options='depoptions' clearable />
              </q-item-section>
            </q-item>
            <q-separator />
            <q-item>
              <q-item-section>
                <q-item-label class="neu-css-before-red-asterisk q-my-sm">
                  说明
                </q-item-label>
                <q-editor v-model="record.detail" :toolbar='editorToolBar' :fonts='editorFonts' min-height="10em" hide-bottom-space lazy-rules :rules='[function (e) { return !!e || "请填写该项"; }]' />
              </q-item-section>
            </q-item>
            <q-separator />
            <q-item>
              <q-item-section>
                <q-item-label class="q-my-sm">
                  附件
                </q-item-label>
                <q-item-label class="q-mb-sm" caption>
                  附件格式支持：Word、Excel、PowerPoint、PDF
                </q-item-label>
                <q-uploader v-if="0 == isHarmonyOS" class="full-width" flat color="grey" :url='uploader' auto-upload :filter='checkFile' accept=".pdf, .pptx, .ppt, .xls, .xlsx, .doc, .docx, audio/*, video/*" @uploaded='afterUploaded' @rejected='onRejected' @removed='afterRemoved'>
                  <template v-slot:header>
                    <div class="row no-wrap items-center q-pa-sm q-gutter-xs">
                      <div class="col">
                        附件上传(10M以内)
                      </div>
                      <q-btn v-if="t.canAddFiles" type="a" icon="add_box" round dense flat>
                        <q-uploader-add-trigger />
                        <q-tooltip>
                          选择文件并上传
                        </q-tooltip>
                      </q-btn>
                    </div>
                  </template>
                  <template v-slot:list>
                    <q-list separator>
                      <q-item v-for="s in t.files" :key='s.name'>
                        <q-item-section>
                          <q-item-label class="full-width ellipsis cursor-pointer" @click='downloadUploaderFile(s)'>
                            {{ "\n                            " + s.name + "\n                          " }}
                          </q-item-label>
                        </q-item-section>
                        <q-item-section side>
                          <q-btn flat dense color="negative" icon="delete" size="sm" @click='t.removeFile(s)'>
                            <q-tooltip>
                              删除
                            </q-tooltip>
                          </q-btn>
                        </q-item-section>
                      </q-item>
                      <q-item v-for="t in matchingUploadedFiles(record.attachment, t.files)" :key='t.servername'>
                        <q-item-section>
                          <q-item-label class="full-width ellipsis cursor-pointer" @click='downloadFile(t.link, t.servername)'>
                            {{ "\n                            " + t.srcname + "\n                          " }}
                          </q-item-label>
                        </q-item-section>
                        <q-item-section side>
                          <q-btn flat dense color="negative" icon="delete" size="sm" @click='removeFile(t.servername)'>
                            <q-tooltip>
                              删除
                            </q-tooltip>
                          </q-btn>
                        </q-item-section>
                      </q-item>
                    </q-list>
                  </template>
                </q-uploader>
                <q-uploader v-if="1 == isHarmonyOS" class="full-width" flat color="grey" :url='uploader' auto-upload :filter='checkFile' @uploaded='afterUploaded' @removed='afterRemoved'>
                  <template v-slot:header>
                    <div class="row no-wrap items-center q-pa-sm q-gutter-xs">
                      <div class="col">
                        附件上传(10M以内)
                      </div>
                      <q-btn v-if="t.canAddFiles" type="a" icon="add_box" round dense flat>
                        <q-uploader-add-trigger />
                        <q-tooltip>
                          选择文件并上传
                        </q-tooltip>
                      </q-btn>
                    </div>
                  </template>
                  <template v-slot:list>
                    <q-list separator>
                      <q-item v-for="s in t.files" :key='s.name'>
                        <q-item-section>
                          <q-item-label class="full-width ellipsis cursor-pointer" @click='downloadUploaderFile(s)'>
                            {{ "\n                            " + s.name + "\n                          " }}
                          </q-item-label>
                        </q-item-section>
                        <q-item-section side>
                          <q-btn flat dense color="negative" icon="delete" size="sm" @click='t.removeFile(s)'>
                            <q-tooltip>
                              删除
                            </q-tooltip>
                          </q-btn>
                        </q-item-section>
                      </q-item>
                      <q-item v-for="t in matchingUploadedFiles(record.attachment, t.files)" :key='t.servername'>
                        <q-item-section>
                          <q-item-label class="full-width ellipsis cursor-pointer" @click='downloadFile(t.link, t.servername)'>
                            {{ "\n                            " + t.srcname + "\n                          " }}
                          </q-item-label>
                        </q-item-section>
                        <q-item-section side>
                          <q-btn flat dense color="negative" icon="delete" size="sm" @click='removeFile(t.servername)'>
                            <q-tooltip>
                              删除
                            </q-tooltip>
                          </q-btn>
                        </q-item-section>
                      </q-item>
                    </q-list>
                  </template>
                </q-uploader>
              </q-item-section>
            </q-item>
          </q-list>
        </q-card>
        <q-card class="full-width row q-mt-sm" flat>
          <q-list class="full-width">
            <q-item>
              <q-item-section>
                <q-item-label class="text-bold">
                  执行频率
                </q-item-label>
              </q-item-section>
            </q-item>
            <q-separator />
            <q-item>
              <q-item-section avatar>
                <q-item-label class="neu-css-before-red-asterisk">
                  {{ menuInfo || {  }.title + "频率" }}
                </q-item-label>
              </q-item-section>
              <q-item-section>
                <q-item-label>
                  <q-select v-model="record.frequency" dense outlined emit-value map-options :options='frequencyList' />
                </q-item-label>
              </q-item-section>
            </q-item>
            <q-separator />
            <q-item v-if="'S' == record.frequency">
              <q-item-section avatar>
                <q-item-label class="neu-css-before-red-asterisk">
                  开始时间
                </q-item-label>
              </q-item-section>
              <q-item-section>
                <q-field class="full-width" style="width:200px" outlined dense stack-label hide-bottom-space lazy-rules :rules='[function (e) { return !!e || "请填写该项"; }]' :value='record.single_begin_time'>
                  <template v-slot:control>
                    {{ record.single_begin_time }}
                  </template>
                  <template v-slot:append>
                    <q-icon class="cursor-pointer" name="event">
                      <q-popup-proxy transition-show="scale" transition-hide="scale">
                        <div>
                          <q-date v-model="record.single_begin_time" flat minimal mask="YYYY-MM-DD HH:mm">
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
                          <q-time v-model="record.single_begin_time" flat mask="YYYY-MM-DD HH:mm" format24h>
                            <div class="row items-center justify-end">
                              <q-btn v-close-popup dense label="关闭" flat />
                            </div>
                          </q-time>
                        </div>
                      </q-popup-proxy>
                    </q-icon>
                  </template>
                </q-field>
              </q-item-section>
            </q-item>
            <q-separator v-if="'S' == record.frequency" />
            <q-item v-if="'S' == record.frequency">
              <q-item-section avatar>
                <q-item-label class="neu-css-before-red-asterisk">
                  截止时间
                </q-item-label>
              </q-item-section>
              <q-item-section>
                <q-field class="full-width" style="width:200px" outlined dense stack-label hide-bottom-space lazy-rules :rules='[function (e) { return !!e || "请填写该项"; }, function (t) { return t > record.single_begin_time || "截止时间应在开始时间之后"; }]' :value='record.single_end_time'>
                  <template v-slot:control>
                    {{ record.single_end_time }}
                  </template>
                  <template v-slot:append>
                    <q-icon class="cursor-pointer" name="event">
                      <q-popup-proxy transition-show="scale" transition-hide="scale">
                        <div>
                          <q-date v-model="record.single_end_time" flat minimal mask="YYYY-MM-DD HH:mm">
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
                          <q-time v-model="record.single_end_time" flat mask="YYYY-MM-DD HH:mm" format24h>
                            <div class="row items-center justify-end">
                              <q-btn v-close-popup dense label="关闭" flat />
                            </div>
                          </q-time>
                        </div>
                      </q-popup-proxy>
                    </q-icon>
                  </template>
                </q-field>
              </q-item-section>
            </q-item>
            <q-item v-if="'L' == record.frequency">
              <q-item-section>
                <q-item-label class="neu-css-before-red-asterisk q-my-sm">
                  {{ "循环" + menuInfo || {  }.title + "频率" }}
                </q-item-label>
                <q-item-label>
                  <q-checkbox v-for="t in [{ value: '1', label: '周一' }, { value: '2', label: '周二' }, { value: '3', label: '周三' }, { value: '4', label: '周四' }, { value: '5', label: '周五' }, { value: '6', label: '周六' }, { value: '0', label: '周日' }]" v-model="record.loop_frequency" :key='t.value' class="q-mr-sm" dense keep-color :val='t.value' :label='t.label' />
                </q-item-label>
              </q-item-section>
            </q-item>
            <q-separator v-if="'L' == record.frequency" />
            <q-item v-if="'L' == record.frequency">
              <q-item-section avatar>
                <q-item-label class="neu-css-before-red-asterisk">
                  开始日期
                </q-item-label>
              </q-item-section>
              <q-item-section>
                <q-field class="full-width" outlined dense stack-label hide-bottom-space lazy-rules :rules='[function (e) { return !!e || "请填写该项"; }]' :value='record.loop_begin_date'>
                  <template v-slot:control>
                    {{ record.loop_begin_date }}
                  </template>
                  <template v-slot:append>
                    <q-icon class="cursor-pointer" name="event">
                      <q-popup-proxy transition-show="scale" transition-hide="scale">
                        <div>
                          <q-date v-model="record.loop_begin_date" flat minimal mask="YYYY-MM-DD">
                            <div class="row items-center justify-end">
                              <q-btn v-close-popup dense label="关闭" flat />
                            </div>
                          </q-date>
                        </div>
                      </q-popup-proxy>
                    </q-icon>
                  </template>
                </q-field>
              </q-item-section>
            </q-item>
            <q-separator v-if="'L' == record.frequency" />
            <q-item v-if="'L' == record.frequency">
              <q-item-section avatar>
                <q-item-label class="neu-css-before-red-asterisk">
                  截止日期
                </q-item-label>
              </q-item-section>
              <q-item-section>
                <q-field class="full-width" outlined dense stack-label hide-bottom-space lazy-rules :rules='[function (e) { return !!e || "请填写该项"; }, function (t) { return t > record.loop_begin_date || "截止日期应在开始日期之后"; }]' :value='record.loop_end_date'>
                  <template v-slot:control>
                    {{ record.loop_end_date }}
                  </template>
                  <template v-slot:append>
                    <q-icon class="cursor-pointer" name="event">
                      <q-popup-proxy transition-show="scale" transition-hide="scale">
                        <div>
                          <q-date v-model="record.loop_end_date" flat minimal mask="YYYY-MM-DD">
                            <div class="row items-center justify-end">
                              <q-btn v-close-popup dense label="关闭" flat />
                            </div>
                          </q-date>
                        </div>
                      </q-popup-proxy>
                    </q-icon>
                  </template>
                </q-field>
              </q-item-section>
            </q-item>
            <q-separator v-if="'L' == record.frequency" />
            <q-item v-if="'L' == record.frequency">
              <q-item-section avatar>
                <q-item-label class="neu-css-before-red-asterisk">
                  开始时间
                </q-item-label>
              </q-item-section>
              <q-item-section>
                <q-field class="full-width" outlined dense stack-label hide-bottom-space lazy-rules :rules='[function (e) { return !!e || "请填写该项"; }]' :value='record.loop_begin_time'>
                  <template v-slot:control>
                    {{ record.loop_begin_time }}
                  </template>
                  <template v-slot:append>
                    <q-icon class="cursor-pointer" name="access_time">
                      <q-popup-proxy transition-show="scale" transition-hide="scale">
                        <div class="row items-start">
                          <q-time v-model="record.loop_begin_time" flat mask="HH:mm" format24h>
                            <div class="row items-center justify-end">
                              <q-btn v-close-popup dense label="关闭" flat />
                            </div>
                          </q-time>
                        </div>
                      </q-popup-proxy>
                    </q-icon>
                  </template>
                </q-field>
              </q-item-section>
            </q-item>
            <q-separator v-if="'L' == record.frequency" />
            <q-item v-if="'L' == record.frequency">
              <q-item-section avatar>
                <q-item-label class="neu-css-before-red-asterisk">
                  结束时间
                </q-item-label>
              </q-item-section>
              <q-item-section>
                <q-field class="full-width" outlined dense stack-label hide-bottom-space lazy-rules :rules='[function (e) { return !!e || "请填写该项"; }, function (t) { return t > record.loop_begin_time || "截止时间应在开始时间之后"; }]' :value='record.loop_end_time'>
                  <template v-slot:control>
                    {{ record.loop_end_time }}
                  </template>
                  <template v-slot:append>
                    <q-icon class="cursor-pointer" name="access_time">
                      <q-popup-proxy transition-show="scale" transition-hide="scale">
                        <div class="row items-start">
                          <q-time v-model="record.loop_end_time" flat mask="HH:mm" format24h>
                            <div class="row items-center justify-end">
                              <q-btn v-close-popup dense label="关闭" flat />
                            </div>
                          </q-time>
                        </div>
                      </q-popup-proxy>
                    </q-icon>
                  </template>
                </q-field>
              </q-item-section>
            </q-item>
            <q-item v-if="'A' == record.frequency">
              <q-item-section avatar>
                <q-item-label class="neu-css-before-red-asterisk">
                  开始截止时间
                </q-item-label>
              </q-item-section>
              <q-item-section />
              <q-item-section side>
                <q-item-label class="text-primary" @click='addAppointedDate'>
                  添加
                </q-item-label>
              </q-item-section>
            </q-item>
            <q-item v-for="(t, s) in 'A' == record.frequency ? record.appointed_date : []" :key='t.begin_time'>
              <q-item-section avatar>
                <q-item-label>
                  {{ "时间段" + s + 1 }}
                </q-item-label>
              </q-item-section>
              <q-item-section>
                <q-item-label>
                  <q-field class="full-width" outlined dense stack-label hide-bottom-space lazy-rules :rules='[function (e) { return !!e || "请填写该项"; }]' :value='t.begin_time'>
                    <template v-slot:control>
                      {{ t.begin_time }}
                    </template>
                    <template v-slot:append>
                      <q-icon class="cursor-pointer" name="event">
                        <q-popup-proxy transition-show="scale" transition-hide="scale">
                          <div>
                            <q-date v-model="item.begin_time" flat minimal mask="YYYY-MM-DD HH:mm">
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
                            <q-time v-model="item.begin_time" flat mask="YYYY-MM-DD HH:mm" format24h>
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
                  <q-field class="full-width" outlined dense stack-label hide-bottom-space lazy-rules :rules='[function (e) { return !!e || "请填写该项"; }, function (e) { return e > t.begin_time || "截止时间应在开始时间之后"; }]' :value='t.end_time'>
                    <template v-slot:control>
                      {{ t.end_time }}
                    </template>
                    <template v-slot:append>
                      <q-icon class="cursor-pointer" name="event">
                        <q-popup-proxy transition-show="scale" transition-hide="scale">
                          <div>
                            <q-date v-model="item.end_time" flat minimal mask="YYYY-MM-DD HH:mm">
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
                            <q-time v-model="item.end_time" flat mask="YYYY-MM-DD HH:mm" format24h>
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
              <q-item-section side>
                <q-item-label v-show="record.appointed_date.length > 1" class="text-negative cursor-pointer" @click='removeAppointedDate(s)'>
                  删除
                  <q-tooltip>
                    删除该时间段
                  </q-tooltip>
                </q-item-label>
              </q-item-section>
            </q-item>
          </q-list>
        </q-card>
        <q-card class="full-width row q-mt-sm" flat>
          <q-list class="full-width">
            <q-item>
              <q-item-section>
                <q-item-label class="text-bold">
                  通知设定
                </q-item-label>
              </q-item-section>
            </q-item>
            <q-separator />
            <q-item>
              <q-item-section class="full-width">
                <q-item-label class="neu-css-before-red-asterisk">
                  通知提前推送时间(分)
                </q-item-label>
                <div class="full-width q-mt-lg">
                  <q-slider v-model="record.in_advance" label label-always :min="0" :max="60" />
                </div>
              </q-item-section>
            </q-item>
          </q-list>
        </q-card>
        <q-card class="full-width row q-mt-sm" flat>
          <q-list class="full-width">
            <q-item>
              <q-item-section avatar>
                <q-item-label class="neu-css-before-red-asterisk">
                  {{ menuInfo || {  }.title + "对象" }}
                </q-item-label>
              </q-item-section>
              <q-item-section />
              <q-item-section side>
                <q-item-label class="row items-center">
                  <span v-show="!record.task_target || record.task_target.length == 0" class="text-grey" @click='taskTargetDialog = true'>
                    选择
                  </span>
                  <q-icon v-show="!record.task_target || record.task_target.length == 0" class="text-grey" name="keyboard_arrow_right" size="sm" />
                  <span v-show="record.task_target && record.task_target.length != 0" class="text-primary" @click='taskTargetDialog = true'>
                    {{ "已选择 (" + record.task_target.length + ")" }}
                  </span>
                  <q-icon v-show="record.task_target && record.task_target.length != 0" class="text-primary" name="keyboard_arrow_right" size="sm" />
                </q-item-label>
              </q-item-section>
            </q-item>
          </q-list>
        </q-card>
        <q-card class="full-width row q-mt-sm" flat>
          <q-list class="full-width">
            <q-item>
              <q-item-section avatar>
                <q-item-label>
                  {{ "无需" + menuInfo || {  }.title + "对象" }}
                </q-item-label>
              </q-item-section>
              <q-item-section />
              <q-item-section side>
                <q-item-label class="row items-center">
                  <span v-show="!record.task_target_excluding || record.task_target_excluding.length == 0 " class="text-grey" @click='taskTargetExcludingDialog = true'>
                    选择
                  </span>
                  <q-icon v-show="!record.task_target_excluding || record.task_target_excluding.length == 0 " class="text-grey" name="keyboard_arrow_right" size="sm" />
                  <span v-show="record.task_target_excluding && record.task_target_excluding.length != 0 " class="text-primary" @click='taskTargetExcludingDialog = true'>
                    {{ "已选择 (" + record.task_target_excluding.length + ")" }}
                  </span>
                  <q-icon v-show="record.task_target_excluding && record.task_target_excluding.length != 0 " class="text-primary" name="keyboard_arrow_right" size="sm" />
                </q-item-label>
              </q-item-section>
            </q-item>
          </q-list>
        </q-card>
        <q-card class="full-width row q-mt-sm" flat>
          <q-list class="full-width">
            <q-item>
              <q-item-section avatar>
                <q-item-label>
                  信息收集
                </q-item-label>
              </q-item-section>
              <q-item-section />
              <q-item-section side>
                <q-item-label class="row items-center">
                  <span class="text-primary" @click='addInfoConfig(record.info_config.length)'>
                    添加
                  </span>
                  <q-icon class="text-primary" name="keyboard_arrow_right" size="sm" />
                </q-item-label>
              </q-item-section>
            </q-item>
            <q-item v-if="0 !== record.info_config.length">
              <q-item-section>
                <div class="row items-center">
                  <div class="col-12 col-md-2 col-sm-3 neu-css-after-colon neu-css-before-red-asterisk" :class='{ "text-right": !$q.screen.lt.sm }'>
                    信息收集项目
                  </div>
                  <div class="col-12 col-md-10 col-sm-9">
                    <div v-for="(t, s) in record.info_config" :key='s' class="bg-grey-2 q-pa-sm q-mt-sm">
                      <div>
                        <span class="neu-css-after-colon">
                          {{ "第" + s + 1 + "题" }}
                        </span>
                        <span class="text-primary cursor-pointer q-ml-sm" @click='editInfoConfig(s)'>
                          编辑
                        </span>
                        <span class="text-negative cursor-pointer q-ml-sm" @click='deleteInfoConfig(s)'>
                          删除
                        </span>
                        <span v-show="index + 1 != record.info_config.length" class="text-primary cursor-pointer q-ml-sm" @click='moveInfoConfig(s, 1)'>
                          下移
                        </span>
                        <span v-show="index != 0" class="text-primary cursor-pointer q-ml-sm" @click='moveInfoConfig(s, -1)'>
                          上移
                        </span>
                      </div>
                      <neu-widget v-model="infoModel[index]" :config='t' :viewMode='true' />
                    </div>
                  </div>
                </div>
              </q-item-section>
            </q-item>
          </q-list>
        </q-card>
        <q-separator class="bg-grey-3" style="height:0.5rem" />
      </q-form>
      <q-dialog v-model="taskTargetDialog" persistent fullWidth :maximized='maximizedToggle'>
        <q-layout class="bg-white" view="lHh lpr lFf" container>
          <q-header class="full-width bg-white">
            <q-toolbar>
              <div class="full-width row items-center justify-between q-px-xs q-py-sm">
                <div class="text-bold text-black">
                  设置填写对象
                </div>
                <q-btn unelevated color="primary" label="完成" @click='taskTargetDialog = false' />
              </div>
            </q-toolbar>
          </q-header>
          <q-page-container>
            <q-page>
              <neu-assign-teacher v-model="record.task_target" />
            </q-page>
          </q-page-container>
        </q-layout>
      </q-dialog>
      <q-dialog v-model="taskTargetExcludingDialog" persistent fullWidth :maximized='maximizedToggle'>
        <q-layout class="bg-white" view="lHh lpr lFf" container>
          <q-header class="full-width bg-white">
            <q-toolbar>
              <div class="full-width row items-center justify-between q-px-xs q-py-sm">
                <div class="text-bold text-black">
                  设置无需填写对象
                </div>
                <q-btn unelevated color="primary" label="完成" @click='taskTargetExcludingDialog = false' />
              </div>
            </q-toolbar>
          </q-header>
          <q-page-container>
            <q-page>
              <neu-assign-teacher v-model="record.task_target_excluding" />
            </q-page>
          </q-page-container>
        </q-layout>
      </q-dialog>
      <q-dialog v-model="infoConfigDialog" persistent :maximized='maximizedToggle'>
        <q-card class="full-width" flat>
          <q-card-section>
            <div class="text-bold">
              设置信息收集项目
            </div>
          </q-card-section>
          <q-card-section>
            <neu-define-widget v-model="record.info_config[infoConfigIndex]" @save='infoConfigDialog = false' @cancel='cancelInfoConfig' />
          </q-card-section>
        </q-card>
      </q-dialog>
      <q-dialog v-model="reviewerDialog" persistent fullWidth>
        <q-card class="full-width" flat>
          <q-card-section>
            <div class="text-bold">
              设置审批人员
            </div>
          </q-card-section>
          <q-card-section>
            <neu-assign-teacher v-if="record.reviewer && record.reviewer.length > 0" v-model="record.reviewer[reviewerIndex].teacher" />
          </q-card-section>
          <q-card-section class="q-gutter-sm row justify-end">
            <q-btn unelevated color="primary" label="完成" @click='reviewerDialog = false' />
          </q-card-section>
        </q-card>
      </q-dialog>
    </q-page>
  </q-page-container>
  <q-footer class="bg-white text-primary" bordered>
    <div class="row justify-between">
      <q-btn style="width:40%;height:2.8rem" flat color="grey" label="取消" to="/teacher/message/index" />
      <q-btn class="bg-primary" style="width:60%;height:2.8rem" flat unelevated color="white" label="发布" @click='submitForm' />
    </div>
  </q-footer>
</q-layout>
</template>

<script>
// The exact semantic component options are preserved in the sibling .logic.js file.
// This SFC isolates the original render tree for review and manual variable renaming.
export default {
  name: "MessageNew",
};
</script>
