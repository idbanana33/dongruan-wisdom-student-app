<!--
  Source: assets/www/js/105.js -> webpack module "0fc5"
  Route: /teacher/process/typeDetail
  Component: processTypeNew
  Restoration: template decompiled from Vue render function; logic in sibling .logic.js
  Confidence: high for DOM structure / medium for expression quoting
-->
<template>
<q-layout view="lHh lpr lFf">
  <q-header class="bg-grey-3 text-black">
    <q-toolbar>
      <q-btn flat round dense icon="keyboard_arrow_left" @click='goBack' />
      <q-toolbar-title>
        {{ "a" == type ? "新建" : "编辑" + menuInfo.title }}
      </q-toolbar-title>
    </q-toolbar>
  </q-header>
  <q-page-container>
    <q-page class="bg-white-3">
      <q-form class="q-gutter-sm full-width" @submit='saveProcessType'>
        <q-card v-if="menuInfo" class="full-width" flat>
          <q-list>
            <q-item>
              <q-item-section avatar>
                <div class="neu-css-before-red-asterisk">
                  流程名称
                </div>
              </q-item-section>
              <q-item-section>
                <q-input v-model="record.process_type_name" outlined dense :disable='!record.is_author && "e" == type' hide-bottom-space lazy-rules :rules='[function (e) { return !!e || "请填写该项"; }]' />
              </q-item-section>
            </q-item>
            <q-separator />
            <q-item>
              <q-item-section avatar>
                <div class="neu-css-before-red-asterisk">
                  流程描述
                </div>
              </q-item-section>
              <q-item-section>
                <q-input v-model="record.process_type_detail" outlined dense :disable='!record.is_author && "e" == type' hide-bottom-space lazy-rules :rules='[function (e) { return !!e || "请填写该项"; }]' />
              </q-item-section>
            </q-item>
            <q-separator />
            <q-item>
              <q-item-section avatar>
                <div class="neu-css-before-red-asterisk">
                  申请限制
                </div>
              </q-item-section>
              <q-item-section>
                <q-select v-model="record.processlimit" outlined dense :disable='!record.is_author && "e" == type' :options='options' label="选择申请限制" />
              </q-item-section>
            </q-item>
            <q-separator />
            <q-item>
              <q-item-section avatar>
                <div class="neu-css-before-red-asterisk">
                  启用
                </div>
              </q-item-section>
              <q-item-section />
              <q-item-section side>
                <q-toggle v-model="record.process_type_status_app" size="lg" checked-icon="check" :disable='!record.is_author && "e" == type' unchecked-icon="clear" dense false-value="0" true-value="1" />
              </q-item-section>
            </q-item>
            <q-separator />
            <q-item>
              <q-item-section avatar>
                <div class="neu-css-before-red-asterisk">
                  是否需要学生定位信息
                </div>
              </q-item-section>
              <q-item-section />
              <q-item-section side>
                <q-toggle v-model="record.process_need_locate_app" size="lg" checked-icon="check" :disable='!record.is_author && "e" == type' unchecked-icon="clear" dense false-value="0" true-value="1" />
              </q-item-section>
            </q-item>
            <q-separator v-if="'G' === service_flag" />
            <q-item v-if="'G' === service_flag">
              <q-item-section avatar>
                <div class="neu-css-before-red-asterisk">
                  开启入校核验
                </div>
                <span v-show="checkSwitch.into_campus != 1" class="text-grey text-caption">
                  入校园核验功能已关闭，相关内容不能修改
                </span>
              </q-item-section>
              <q-item-section />
              <q-item-section side>
                <q-toggle v-model="record.into_campus_app" size="lg" checked-icon="check" :disable='!record.is_author && "e" == type || 1 != checkSwitch.into_campus' unchecked-icon="clear" dense false-value="0" true-value="1" />
              </q-item-section>
            </q-item>
            <q-item v-if="'1' == record.into_campus_app">
              <q-item-section avatar>
                <div>
                  入校申请开始时间
                </div>
              </q-item-section>
              <q-item-section>
                <q-field style="width:200px" outlined dense stack-label :disable='1 != checkSwitch.into_campus || !record.is_author && "e" == type' hide-bottom-space lazy-rules :rules='[function (e) { return !!e || "请填写该项"; }]' :value='record.into_campus_apply_begin'>
                  <template v-slot:control>
                    {{ record.into_campus_apply_begin }}
                  </template>
                  <template v-slot:append>
                    <q-icon class="cursor-pointer" name="event">
                      <q-popup-proxy transition-show="scale" transition-hide="scale">
                        <div>
                          <q-date v-model="record.into_campus_apply_begin" flat minimal mask="YYYY-MM-DD HH:mm">
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
                          <q-time v-model="record.into_campus_apply_begin" flat mask="YYYY-MM-DD HH:mm" format24h>
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
            <q-item v-if="'1' == record.into_campus_app">
              <q-item-section avatar>
                <div>
                  入校申请结束时间
                </div>
              </q-item-section>
              <q-item-section>
                <q-field style="width:200px" outlined dense stack-label :disable='1 != checkSwitch.into_campus || !record.is_author && "e" == type' hide-bottom-space lazy-rules :rules='[function (e) { return !!e || "请填写该项"; }, function (t) { return t > e.record.into_campus_apply_begin || "请填写申请时间之后的时间"; }]' :value='record.into_campus_apply_end'>
                  <template v-slot:control>
                    {{ record.into_campus_apply_end }}
                  </template>
                  <template v-slot:append>
                    <q-icon class="cursor-pointer" name="event">
                      <q-popup-proxy transition-show="scale" transition-hide="scale">
                        <div>
                          <q-date v-model="record.into_campus_apply_end" flat minimal mask="YYYY-MM-DD HH:mm">
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
                          <q-time v-model="record.into_campus_apply_end" flat mask="YYYY-MM-DD HH:mm" format24h>
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
            <q-item v-if="'1' == record.into_campus_app">
              <q-item-section avatar>
                <div>
                  入校核验开始时间
                </div>
              </q-item-section>
              <q-item-section>
                <q-field style="width:200px" outlined dense stack-label :disable='1 != checkSwitch.into_campus || !record.is_author && "e" == type' hide-bottom-space lazy-rules :rules='[function (e) { return !!e || "请填写该项"; }]' :value='record.into_campus_begin_time'>
                  <template v-slot:control>
                    {{ record.into_campus_begin_time }}
                  </template>
                  <template v-slot:append>
                    <q-icon class="cursor-pointer" name="event">
                      <q-popup-proxy transition-show="scale" transition-hide="scale">
                        <div>
                          <q-date v-model="record.into_campus_begin_time" flat minimal mask="YYYY-MM-DD HH:mm">
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
                          <q-time v-model="record.into_campus_begin_time" flat mask="YYYY-MM-DD HH:mm" format24h>
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
            <q-item v-if="'1' == record.into_campus_app">
              <q-item-section avatar>
                <div>
                  入校核验结束时间
                </div>
              </q-item-section>
              <q-item-section>
                <q-field style="width:200px" outlined dense stack-label :disable='1 != checkSwitch.into_campus || !record.is_author && "e" == type' hide-bottom-space lazy-rules :rules='[function (e) { return !!e || "请填写该项"; }, function (t) { return t > e.record.into_campus_begin_time || "请填写申请时间之后的时间"; }]' :value='record.into_campus_end_time'>
                  <template v-slot:control>
                    {{ record.into_campus_end_time }}
                  </template>
                  <template v-slot:append>
                    <q-icon class="cursor-pointer" name="event">
                      <q-popup-proxy transition-show="scale" transition-hide="scale">
                        <div>
                          <q-date v-model="record.into_campus_end_time" flat minimal mask="YYYY-MM-DD HH:mm">
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
                          <q-time v-model="record.into_campus_end_time" flat mask="YYYY-MM-DD HH:mm" format24h>
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
            <q-separator v-if="'G' === service_flag" />
            <q-item v-if="'G' === service_flag">
              <q-item-section avatar>
                <div class="neu-css-before-red-asterisk">
                  开启离校核验
                </div>
                <span v-show="checkSwitch.out_campus != 1" class="text-grey text-caption">
                  出校园核验功能已关闭，相关内容不能修改
                </span>
              </q-item-section>
              <q-item-section />
              <q-item-section side>
                <q-toggle v-model="record.out_campus_app" size="lg" checked-icon="check" :disable='!record.is_author && "e" == type || 1 != checkSwitch.out_campus' unchecked-icon="clear" dense false-value="0" true-value="1" />
              </q-item-section>
            </q-item>
            <q-item v-if="'1' == record.out_campus_app">
              <q-item-section avatar>
                <div>
                  离校申请开始时间
                </div>
              </q-item-section>
              <q-item-section>
                <q-field style="width:200px" outlined dense stack-label :disable='1 != checkSwitch.out_campus || !record.is_author && "e" == type' hide-bottom-space lazy-rules :rules='[function (e) { return !!e || "请填写该项"; }]' :value='record.out_campus_apply_begin'>
                  <template v-slot:control>
                    {{ record.out_campus_apply_begin }}
                  </template>
                  <template v-slot:append>
                    <q-icon class="cursor-pointer" name="event">
                      <q-popup-proxy transition-show="scale" transition-hide="scale">
                        <div>
                          <q-date v-model="record.out_campus_apply_begin" flat minimal mask="YYYY-MM-DD HH:mm">
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
                          <q-time v-model="record.out_campus_apply_begin" flat mask="YYYY-MM-DD HH:mm" format24h>
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
            <q-item v-if="'1' == record.out_campus_app">
              <q-item-section avatar>
                <div>
                  离校申请结束时间
                </div>
              </q-item-section>
              <q-item-section>
                <q-field style="width:200px" outlined dense stack-label :disable='1 != checkSwitch.out_campus || !record.is_author && "e" == type' hide-bottom-space lazy-rules :rules='[function (e) { return !!e || "请填写该项"; }, function (t) { return t > e.record.out_campus_apply_begin || "请填写申请时间之后的时间"; }]' :value='record.out_campus_apply_end'>
                  <template v-slot:control>
                    {{ record.out_campus_apply_end }}
                  </template>
                  <template v-slot:append>
                    <q-icon class="cursor-pointer" name="event">
                      <q-popup-proxy transition-show="scale" transition-hide="scale">
                        <div>
                          <q-date v-model="record.out_campus_apply_end" flat minimal mask="YYYY-MM-DD HH:mm">
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
                          <q-time v-model="record.out_campus_apply_end" flat mask="YYYY-MM-DD HH:mm" format24h>
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
            <q-item v-if="'1' == record.out_campus_app">
              <q-item-section avatar>
                <div>
                  离校核验开始时间
                </div>
              </q-item-section>
              <q-item-section>
                <q-field style="width:200px" outlined dense stack-label :disable='1 != checkSwitch.out_campus || !record.is_author && "e" == type' hide-bottom-space lazy-rules :rules='[function (e) { return !!e || "请填写该项"; }]' :value='record.out_campus_begin_time'>
                  <template v-slot:control>
                    {{ record.out_campus_begin_time }}
                  </template>
                  <template v-slot:append>
                    <q-icon class="cursor-pointer" name="event">
                      <q-popup-proxy transition-show="scale" transition-hide="scale">
                        <div>
                          <q-date v-model="record.out_campus_begin_time" flat minimal mask="YYYY-MM-DD HH:mm">
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
                          <q-time v-model="record.out_campus_begin_time" flat mask="YYYY-MM-DD HH:mm" format24h>
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
            <q-item v-if="'1' == record.out_campus_app">
              <q-item-section avatar>
                <div>
                  离校核验结束时间
                </div>
              </q-item-section>
              <q-item-section>
                <q-field style="width:200px" outlined dense stack-label :disable='1 != checkSwitch.out_campus || !record.is_author && "e" == type' hide-bottom-space lazy-rules :rules='[function (e) { return !!e || "请填写该项"; }, function (t) { return t > e.record.out_campus_begin_time || "请填写申请时间之后的时间"; }]' :value='record.out_campus_end_time'>
                  <template v-slot:control>
                    {{ record.out_campus_end_time }}
                  </template>
                  <template v-slot:append>
                    <q-icon class="cursor-pointer" name="event">
                      <q-popup-proxy transition-show="scale" transition-hide="scale">
                        <div>
                          <q-date v-model="record.out_campus_end_time" flat minimal mask="YYYY-MM-DD HH:mm">
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
                          <q-time v-model="record.out_campus_end_time" flat mask="YYYY-MM-DD HH:mm" format24h>
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
            <q-separator />
            <q-item>
              <q-item-section v-if="record.is_author || 'e' != type" avatar>
                <q-item-label>
                  可申请对象
                </q-item-label>
                <q-item-label caption>
                  不设置则全校学生可申请
                </q-item-label>
              </q-item-section>
              <q-item-section v-else>
                <q-item-label>
                  可申请对象
                </q-item-label>
                <q-item-label caption>
                  不设置则全校学生可申请
                </q-item-label>
                <q-item-label caption>
                  <neu-view-assigned-student :value='record.task_target' />
                </q-item-label>
              </q-item-section>
              <q-item-section v-if="record.is_author && 'e' == type || 'a' == type" />
              <q-item-section v-if="record.is_author && 'e' == type || 'a' == type" side>
                <q-item-label class="row items-center">
                  <span :class='0 === record.task_target.length ? "text-grey" : "text-primary"' size="md" @click='taskTargetDialog = true'>
                    {{ 0 === record.task_target.length ? "请选择" : "已选择 (" + record.task_target.length + ")" }}
                  </span>
                  <q-icon :class='0 === record.task_target.length ? "text-grey" : "text-primary"' name="keyboard_arrow_right" size="sm" />
                </q-item-label>
              </q-item-section>
            </q-item>
            <q-separator />
            <q-item>
              <q-item-section avatar>
                <div>
                  表单项目
                </div>
              </q-item-section>
              <q-item-section />
              <q-item-section v-if="record.is_author || 'a' == type" side>
                <q-item-label class="row items-center">
                  <span :class='0 === record.process_info_config.length ? "text-grey" : "text-primary"' size="md" @click='addInfoConfig(record.process_info_config.length)'>
                    添加
                  </span>
                  <q-icon :class='0 === record.process_info_config.length ? "text-grey" : "text-primary"' name="keyboard_arrow_right" size="sm" />
                </q-item-label>
              </q-item-section>
            </q-item>
            <q-item v-show="record.process_info_config.length !== 0">
              <q-item-section>
                <div v-for="(e, s) in record.process_info_config" :key='s' class="bg-grey-2 q-pa-sm q-mt-sm">
                  <div v-if="record.is_author || 'a' == type">
                    <span class="neu-css-after-colon">
                      {{ "第" + s + 1 + "检查项" }}
                    </span>
                    <span class="text-primary cursor-pointer q-ml-sm" @click='editInfoConfig(s)'>
                      编辑
                    </span>
                    <span class="text-negative cursor-pointer q-ml-sm" @click='deleteInfoConfig(s)'>
                      删除
                    </span>
                    <span v-show="index + 1 != record.process_info_config.length" class="text-primary cursor-pointer q-ml-sm" @click='moveInfoConfig(s, 1)'>
                      下移
                    </span>
                    <span v-show="index != 0" class="text-primary cursor-pointer q-ml-sm" @click='moveInfoConfig(s, -1)'>
                      上移
                    </span>
                  </div>
                  <neu-widget v-model="infoModel[index]" :config='e' :viewMode='true' :showRiskInfo='true' />
                </div>
              </q-item-section>
            </q-item>
            <q-separator v-if="'e' == type" style="height:7px" color="grey-3" />
            <q-item v-if="'e' == type">
              <q-item-section>
                <q-item-label class="text-bold">
                  审批流程
                </q-item-label>
                <span class="text-grey text-caption">
                  更改后自动保存
                </span>
              </q-item-section>
            </q-item>
            <q-separator v-if="'e' == type" />
            <q-item v-for="(e, s) in record.configs" :key='e.review_level'>
              <q-card v-if="'e' == type" style="width:100%" flat bordered>
                <q-card-section>
                  <div>
                    {{ "\n                    " + e.review_level + "级审核人\n                    " }}
                    <q-btn v-if="editPermit && record.is_author" v-show="lvlIndex == record.configs.length - 1" style="width:50px" flat dense color="primary" icon="add" size="sm" @click='openReviewerProcessDialog(record.id, null)'>
                      <q-tooltip>
                        新增下一级审核人
                      </q-tooltip>
                    </q-btn>
                    <q-btn v-if="editPermit && record.is_author" style="width:50px" flat dense color="primary" icon="edit" size="sm" @click='openReviewerProcessDialog(record.id, e)'>
                      <q-tooltip>
                        编辑
                      </q-tooltip>
                    </q-btn>
                    <q-btn v-if="editPermit && record.is_author" v-show="lvlIndex != 0" style="width:50px" flat dense color="primary" icon="keyboard_arrow_up" size="sm" @click='moveProcessReviewer(record.id, e, e.review_level, -1)'>
                      <q-tooltip>
                        {{ "降为" + e.review_level - 1 + "级审核人" }}
                      </q-tooltip>
                    </q-btn>
                    <q-btn v-if="editPermit && record.is_author" v-show="lvlIndex != record.configs.length - 1" style="width:50px" flat dense color="primary" icon="keyboard_arrow_down" size="sm" @click='moveProcessReviewer(record.id, e, e.review_level, 1)'>
                      <q-tooltip>
                        {{ "升为" + e.review_level + 1 + "级审核人" }}
                      </q-tooltip>
                    </q-btn>
                    <q-btn v-if="editPermit && record.configs.length > 1 && record.is_author" style="width:50px" flat dense color="negative" icon="delete" size="sm" @click='deleteProcessReviewer(record.id, e.review_level)'>
                      <q-tooltip>
                        删除
                      </q-tooltip>
                    </q-btn>
                  </div>
                  <div>
                    <neu-view-assigned-teacher :value='e.teacher' />
                  </div>
                </q-card-section>
              </q-card>
            </q-item>
          </q-list>
        </q-card>
        <q-footer v-if="record.is_author || 'a' == type" class="bg-white text-primary" style="height:2.8rem;margin-left:0px;border:0px" bordered>
          <q-btn v-if="'a' == type" style="width:40%;height:100%" outline color="grey" label="取消" @click='goBack()' />
          <q-btn v-if="'e' == type" style="width:40%;height:100%" color="red" label="删除" @click='deleteProcessType' />
          <q-btn style="width:60%;height:100%" color="primary" :label='"a" == type ? "发布" : "保存"' type="submit" />
        </q-footer>
      </q-form>
      <q-dialog v-model="infoConfigDialog" persistent :maximized='true'>
        <q-card class="full-width" flat>
          <q-card-section>
            <div class="text-bold">
              流程配置
            </div>
          </q-card-section>
          <q-card-section>
            <neu-define-widget v-model="record.process_info_config[infoConfigIndex]" :risk='true' @save='infoConfigDialog = false' @cancel='cancelInfoConfig' />
          </q-card-section>
        </q-card>
      </q-dialog>
      <q-dialog v-model="teacherDialog" persistent :maximized='true'>
        <q-card class="full-width" flat>
          <q-card-section>
            <div class="text-bold">
              设置审核人
            </div>
          </q-card-section>
          <q-card-section>
            <neu-assign-teacher v-model="reviewer.teacher" />
          </q-card-section>
          <q-card-section class="q-gutter-sm row justify-end">
            <q-btn unelevated color="primary" label="保存" @click='saveTypeConfigReviewer' />
            <q-btn outline color="grey" label="取消" @click='teacherDialog = false' />
          </q-card-section>
        </q-card>
      </q-dialog>
      <q-dialog v-model="taskTargetDialog" persistent fullWidth :maximized='true'>
        <q-layout class="bg-white" view="lHh lpr lFf" container>
          <q-header class="full-width bg-white">
            <q-toolbar>
              <div class="full-width row items-center justify-between q-px-xs q-py-sm">
                <div class="text-bold text-black">
                  设置可申请对象
                </div>
                <q-btn unelevated color="primary" label="完成" @click='taskTargetDialog = false' />
              </div>
            </q-toolbar>
          </q-header>
          <q-page-container>
            <q-page>
              <neu-assign-student v-model="record.task_target" :permit='menuInfo ? menuInfo.edit_permit : null' permit-mode="E" :menu-id='menuInfo ? menuInfo.id : null' />
            </q-page>
          </q-page-container>
        </q-layout>
      </q-dialog>
    </q-page>
  </q-page-container>
</q-layout>
</template>

<script>
// The exact semantic component options are preserved in the sibling .logic.js file.
// This SFC isolates the original render tree for review and manual variable renaming.
export default {
  name: "processTypeNew",
};
</script>
