<!--
  Source: assets/www/js/85.js -> webpack module "43e8"
  Route: /teacher/leave/newMultiLeave
  Component: LeaveLeave
  Restoration: template decompiled from Vue render function; logic in sibling .logic.js
  Confidence: high for DOM structure / medium for expression quoting
-->
<template>
<q-layout view="lHh lpr lFf">
  <q-header class="bg-grey-3 text-black">
    <q-toolbar>
      <q-btn flat round dense icon="keyboard_arrow_left" @click='goBackLeave' />
      <q-toolbar-title>
        批量请假
      </q-toolbar-title>
    </q-toolbar>
  </q-header>
  <q-page-container>
    <q-page class="bg-grey-3">
      <q-form @submit='onSubmit'>
        <q-card class="full-width row" flat>
          <q-list class="full-width">
            <q-item>
              <q-item-section avatar>
                <div class="neu-css-before-red-asterisk">
                  请假类型
                </div>
              </q-item-section>
              <q-item-section>
                <q-select v-model="model" outlined hide-bottom-space :options='type_list' dense lazy-rules :rules='[function (t) { return null !== t && "" !== t || "请填选择请假类型"; }]' />
              </q-item-section>
            </q-item>
            <q-separator />
            <q-item>
              <q-item-section avatar>
                <div class="neu-css-before-red-asterisk">
                  开始时间
                </div>
              </q-item-section>
              <q-item-section>
                <q-field outlined dense stack-label hide-bottom-space lazy-rules :rules='[function (t) { return null !== t && "" !== t || "请填选择开始时间"; }]' :value='queryModel.begin_time'>
                  <template v-slot:control>
                    {{ queryModel.begin_time }}
                  </template>
                  <template v-slot:append>
                    <q-icon class="cursor-pointer" name="event">
                      <q-popup-proxy transition-show="scale" transition-hide="scale">
                        <div>
                          <q-date v-model="queryModel.begin_time" flat color="secondary" minimal mask="YYYY-MM-DD HH:mm">
                            <div class="row items-center justify-end">
                              <q-btn v-close-popup dense label="关闭" color="secondary" flat />
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
                              <q-btn v-close-popup dense label="关闭" color="secondary" flat />
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
              <q-item-section avatar>
                <div class="neu-css-before-red-asterisk">
                  结束时间
                </div>
              </q-item-section>
              <q-item-section>
                <q-field outlined dense stack-label :value='queryModel.end_time' hide-bottom-space lazy-rules :rules='[function (t) { return null !== t && "" !== t || "请填选择结束时间"; }]'>
                  <template v-slot:control>
                    {{ queryModel.end_time }}
                  </template>
                  <template v-slot:append>
                    <q-icon class="cursor-pointer" name="event">
                      <q-popup-proxy transition-show="scale" transition-hide="scale">
                        <div>
                          <q-date v-model="queryModel.end_time" flat color="secondary" minimal mask="YYYY-MM-DD HH:mm">
                            <div class="row items-center justify-end">
                              <q-btn v-close-popup dense label="关闭" color="secondary" flat />
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
                              <q-btn v-close-popup dense label="关闭" color="secondary" flat />
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
              <q-item-section avatar>
                <div class="neu-css-before-red-asterisk">
                  需要离校
                </div>
              </q-item-section>
              <q-item-section />
              <q-item-section side>
                <q-toggle v-model="location_share" size="lg" dense false-value="0" true-value="1" />
              </q-item-section>
            </q-item>
            <q-separator />
            <q-item>
              <q-item-section avatar>
                <div class="neu-css-before-red-asterisk">
                  需要出市
                </div>
              </q-item-section>
              <q-item-section />
              <q-item-section side>
                <q-toggle v-model="city_out" size="lg" dense false-value="0" true-value="1" />
              </q-item-section>
            </q-item>
            <q-separator />
            <q-item>
              <q-item-section avatar>
                <div class="neu-css-before-red-asterisk">
                  需要出省
                </div>
              </q-item-section>
              <q-item-section />
              <q-item-section side>
                <q-toggle v-model="province_out" size="lg" dense false-value="0" true-value="1" />
              </q-item-section>
            </q-item>
            <q-separator />
            <q-item>
              <q-item-section avatar>
                <div class="neu-css-before-red-asterisk">
                  请假原因
                </div>
              </q-item-section>
              <q-item-section>
                <q-input v-model="text" dense outlined hide-bottom-space type="textarea" lazy-rules :rules='[function (t) { return null !== t && "" !== t || "请填写请假原因"; }]' />
              </q-item-section>
            </q-item>
          </q-list>
        </q-card>
        <q-card class="full-width row q-mt-sm" flat>
          <q-list class="full-width">
            <q-item>
              <q-item-section avatar>
                <div class="neu-css-before-red-asterisk">
                  请假学生
                </div>
              </q-item-section>
              <q-item-section />
              <q-item-section side>
                <q-item-label class="row items-center">
                  <span v-show="!task_target || task_target.length == 0 " class="text-grey" @click='taskTargetDialog = true'>
                    选择
                  </span>
                  <q-icon v-show="!task_target || task_target.length == 0 " class="text-grey" name="keyboard_arrow_right" size="sm" />
                  <span v-show="task_target && task_target.length != 0 " class="text-primary" @click='taskTargetDialog = true'>
                    {{ "已选择 (" + task_target.length + ")" }}
                  </span>
                  <q-icon v-show="task_target && task_target.length != 0 " class="text-primary" name="keyboard_arrow_right" size="sm" />
                </q-item-label>
              </q-item-section>
            </q-item>
            <q-separator />
            <q-item>
              <q-item-section avatar>
                <div class="neu-css-before-white-space">
                  紧急联系人
                </div>
              </q-item-section>
              <q-item-section>
                <q-input v-model="call_person" dense outlined />
              </q-item-section>
            </q-item>
            <q-separator />
            <q-item>
              <q-item-section>
                <q-item-label class="neu-css-before-white-space">
                  添加附件
                </q-item-label>
                <q-item-label class="neu-css-before-white-space q-my-sm" caption>
                  图片格式支持：.jpg、.png、.jpeg
                </q-item-label>
                <q-uploader v-model="filesMaxNumber" class="full-width" multiple max-files="4" :url='uploader' auto-upload max-file-size="5242880" accept=".jpg, .png, .jpeg, image/*" @uploaded='afterUploaded' @rejected='onRejected' @removed='afterRemoved'>
                  <template v-slot:header>
                    <div class="row no-wrap items-center q-pa-sm q-gutter-xs">
                      <div class="col">
                        图片上传(每张5M以内)
                      </div>
                      <q-btn v-if="e.canAddFiles" type="a" icon="add_box" round dense flat>
                        <q-uploader-add-trigger />
                        <q-tooltip>
                          选择文件并上传
                        </q-tooltip>
                      </q-btn>
                    </div>
                  </template>
                </q-uploader>
              </q-item-section>
            </q-item>
          </q-list>
        </q-card>
        <q-card class="full-width row q-mt-sm" flat>
          <q-list class="full-width" padding>
            <q-item>
              <q-item-section avatar>
                <div class="neu-css-before-white-space">
                  定位
                </div>
              </q-item-section>
              <q-item-section>
                {{ "\n                " + location.address + "\n                " }}
                <neu-geo-location :needAddr='true' :location='research' @completed='locationCompleted' @error='locationError' />
              </q-item-section>
              <q-item-section side>
                <span class="text-primary cursor-pointer" @click='research = research + 1'>
                  重新定位
                </span>
              </q-item-section>
            </q-item>
          </q-list>
        </q-card>
        <q-footer class="bg-white text-primary" bordered>
          <div class="row justify-between">
            <q-btn style="width:40%;height:2.8rem" flat color="grey" label="取消" to="/student/leave/index" />
            <q-btn class="bg-primary" style="width:60%;height:2.8rem" flat unelevated color="white" label="提交请假" type="submit" />
          </div>
        </q-footer>
      </q-form>
      <q-dialog v-model="taskTargetDialog" persistent fullWidth :maximized='maximizedToggle'>
        <q-layout class="bg-white" view="lHh lpr lFf" container>
          <q-header class="full-width bg-white">
            <q-toolbar>
              <div class="full-width row items-center justify-between q-px-xs q-py-sm">
                <div class="text-bold text-black">
                  设置请假对象
                </div>
                <q-btn unelevated color="primary" label="完成" @click='taskTargetDialog = false' />
              </div>
            </q-toolbar>
          </q-header>
          <q-page-container>
            <q-page>
              <neu-assign-student v-model="task_target" :permit='menuInfo ? menuInfo.view_permit : null' permit-mode="V" :menu-id='menuInfo ? menuInfo.id : null' />
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
  name: "LeaveLeave",
};
</script>
