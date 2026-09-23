<!--
  Source: assets/www/js/99.js -> webpack module "66de"
  Route: /teacher/notice/new
  Component: NoticeNew
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
        <q-card v-if="menuInfo" class="full-width" flat>
          <q-list class="full-width">
            <q-item>
              <q-item-section>
                <q-item-label class="text-bold">
                  通知内容
                </q-item-label>
              </q-item-section>
            </q-item>
            <q-separator />
            <q-item>
              <q-item-section avatar>
                <q-item-label class="neu-css-before-red-asterisk">
                  通知类型
                </q-item-label>
              </q-item-section>
              <q-item-section>
                <q-select v-model="record.notice_priority" dense outlined emit-value map-options :options='noticePriorityList' />
              </q-item-section>
            </q-item>
            <q-separator />
            <q-item>
              <q-item-section avatar>
                <q-item-label class="neu-css-before-red-asterisk">
                  通知标题
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
                  正文
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
                      <q-item v-for="r in t.files" :key='r.name'>
                        <q-item-section>
                          <q-item-label class="full-width ellipsis cursor-pointer" @click='downloadUploaderFile(r)'>
                            {{ "\n                            " + r.name + "\n                          " }}
                          </q-item-label>
                        </q-item-section>
                        <q-item-section side>
                          <q-btn flat dense color="negative" icon="delete" size="sm" @click='t.removeFile(r)'>
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
                      <q-item v-for="r in t.files" :key='r.name'>
                        <q-item-section>
                          <q-item-label class="full-width ellipsis cursor-pointer" @click='downloadUploaderFile(r)'>
                            {{ "\n                            " + r.name + "\n                          " }}
                          </q-item-label>
                        </q-item-section>
                        <q-item-section side>
                          <q-btn flat dense color="negative" icon="delete" size="sm" @click='t.removeFile(r)'>
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
        <q-card v-if="menuInfo" class="full-width row q-mt-sm" flat>
          <q-list class="full-width">
            <q-item>
              <q-item-section avatar>
                <q-item-label class="text-bold">
                  通知参数
                </q-item-label>
              </q-item-section>
            </q-item>
            <q-separator />
            <q-item>
              <q-item-section avatar>
                <q-item-label class="neu-css-before-red-asterisk">
                  反馈截止时间
                </q-item-label>
              </q-item-section>
              <q-item-section>
                <q-field class="full-width" style="width:200px" outlined dense stack-label hide-bottom-space lazy-rules :rules='[function (e) { return !!e || "请填写该项"; }]' :value='record.feedback_deadline'>
                  <template v-slot:control>
                    {{ record.feedback_deadline }}
                  </template>
                  <template v-slot:append>
                    <q-icon class="cursor-pointer" name="event">
                      <q-popup-proxy transition-show="scale" transition-hide="scale">
                        <div>
                          <q-date v-model="record.feedback_deadline" flat minimal mask="YYYY-MM-DD HH:mm">
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
                          <q-time v-model="record.feedback_deadline" flat mask="YYYY-MM-DD HH:mm" format24h>
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
              <q-item-section>
                <q-item-label class="neu-css-before-red-asterisk">
                  手动确认已读
                </q-item-label>
              </q-item-section>
              <q-item-section side>
                <q-toggle v-model="record.confirm_flag" size="lg" dense :false-value="0" :true-value="1" />
                <span class="text-grey text-caption">
                  开启后学生需要点击确认按钮对内容进行确认
                </span>
              </q-item-section>
            </q-item>
            <q-separator />
            <q-item>
              <q-item-section>
                <q-item-label class="neu-css-before-red-asterisk">
                  允许班级干部查看任务数据
                </q-item-label>
              </q-item-section>
              <q-item-section side>
                <q-toggle v-model="record.stu_manage_flag" size="lg" dense :false-value="0" :true-value="1" />
              </q-item-section>
            </q-item>
            <q-separator />
            <q-item>
              <q-item-section>
                <q-item-label class="neu-css-before-red-asterisk">
                  定时发送
                </q-item-label>
              </q-item-section>
              <q-item-section side>
                <q-toggle v-model="record.fixed_time_flag" size="lg" dense :false-value="0" :true-value="1" />
              </q-item-section>
            </q-item>
            <q-separator />
            <q-item v-show="record.fixed_time_flag == 1">
              <q-item-section avatar>
                <q-item-label class="neu-css-before-red-asterisk">
                  定时发送时间
                </q-item-label>
              </q-item-section>
              <q-item-section>
                <q-field class="full-width" style="width:200px" outlined dense stack-label hide-bottom-space lazy-rules :rules='[function (t) { return !!t || 0 == record.fixed_time_flag || "请填写该项"; }]' :value='record.fixed_time'>
                  <template v-slot:control>
                    {{ record.fixed_time }}
                  </template>
                  <template v-slot:append>
                    <q-icon class="cursor-pointer" name="event">
                      <q-popup-proxy transition-show="scale" transition-hide="scale">
                        <div>
                          <q-date v-model="record.fixed_time" flat minimal mask="YYYY-MM-DD HH:mm">
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
                          <q-time v-model="record.fixed_time" flat mask="YYYY-MM-DD HH:mm" format24h>
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
          </q-list>
        </q-card>
        <q-card v-if="menuInfo" class="full-width row q-mt-sm" flat>
          <q-list class="full-width">
            <q-item>
              <q-item-section avatar>
                <q-item-label class="neu-css-before-red-asterisk">
                  通知对象
                </q-item-label>
              </q-item-section>
              <q-item-section />
              <q-item-section side>
                <q-item-label class="row items-center">
                  <span v-show="!record.task_target || record.task_target.length == 0 " class="text-grey" @click='taskTargetDialog = true'>
                    选择
                  </span>
                  <q-icon v-show="!record.task_target || record.task_target.length == 0 " class="text-grey" name="keyboard_arrow_right" size="sm" />
                  <span v-show="record.task_target && record.task_target.length != 0 " class="text-primary" @click='taskTargetDialog = true'>
                    {{ "已选择 (" + record.task_target.length + ")" }}
                  </span>
                  <q-icon v-show="record.task_target && record.task_target.length != 0 " class="text-primary" name="keyboard_arrow_right" size="sm" />
                </q-item-label>
              </q-item-section>
            </q-item>
          </q-list>
        </q-card>
        <q-card v-if="menuInfo" class="full-width row q-mt-sm" flat>
          <q-list class="full-width">
            <q-item>
              <q-item-section avatar>
                <q-item-label>
                  共享对象
                </q-item-label>
                <q-item-label v-else caption>
                  {{ "将该" + menuInfo || {  }.title + "统计数据共享给其他老师" }}
                </q-item-label>
                <q-item-label v-if="shareDisable" caption>
                  组合子任务不可更改分享对象
                </q-item-label>
              </q-item-section>
              <q-item-section />
              <q-item-section side>
                <q-item-label class="row items-center">
                  <span v-show="(!record.share_target || record.share_target.length == 0) && !shareDisable " class="text-grey" @click='shareDialog = true'>
                    选择
                  </span>
                  <q-icon v-show="(!record.share_target || record.share_target.length == 0) && !shareDisable " class="text-grey" name="keyboard_arrow_right" size="sm" />
                  <span v-show="record.share_target && record.share_target.length != 0 && !shareDisable" class="text-primary" @click='shareDialog = true'>
                    {{ "已选择 (" + record.share_target.length + ")" }}
                  </span>
                  <q-icon v-show="record.share_target && record.share_target.length != 0 && !shareDisable" class="text-primary" name="keyboard_arrow_right" size="sm" />
                  <span v-show="shareDisable " :class='0 == record.share_target.length ? "text-grey" : "text-primary"' @click='openSharetarget'>
                    {{ "查看(" + record.share_target.length > 0 ? record.share_target.length : "" + ")" }}
                  </span>
                  <q-icon v-show="shareDisable " :class='0 == record.share_target.length ? "text-grey" : "text-primary"' name="keyboard_arrow_right" size="sm" />
                </q-item-label>
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
                  设置通知对象
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
      <q-dialog v-model="shareDialog" persistent fullWidth :maximized='maximizedToggle'>
        <q-layout class="bg-white" view="lHh lpr lFf" container>
          <q-header class="full-width bg-white">
            <q-toolbar>
              <div class="full-width row items-center justify-between q-px-xs q-py-sm">
                <div class="text-bold text-black">
                  设置共享对象
                </div>
                <q-btn unelevated color="primary" label="完成" @click='shareDialog = false' />
              </div>
            </q-toolbar>
          </q-header>
          <q-page-container>
            <q-page>
              <neu-assign-teacher v-model="record.share_target" />
            </q-page>
          </q-page-container>
        </q-layout>
      </q-dialog>
      <q-dialog v-model="compositeShareDialog" :maximized='maximizedToggle'>
        <q-card class="full-width" flat>
          <q-card-section class="row items-center justify-between">
            <div class="text-h6">
              共享对象
            </div>
            <q-btn v-close-popup icon="close" flat round dense size="sm" />
          </q-card-section>
          <q-separator />
          <q-card-section>
            <neu-view-assigned-teacher :value='record.share_target' />
          </q-card-section>
        </q-card>
      </q-dialog>
    </q-page>
  </q-page-container>
  <q-footer v-if="menuInfo" class="bg-white text-primary" bordered>
    <div class="row justify-between">
      <q-btn style="width:40%;height:2.8rem" flat color="grey" label="取消" to="/teacher/notice/index" />
      <q-btn class="bg-primary" style="width:60%;height:2.8rem" flat unelevated color="white" label="发布" @click='submitForm' />
    </div>
  </q-footer>
</q-layout>
</template>

<script>
// The exact semantic component options are preserved in the sibling .logic.js file.
// This SFC isolates the original render tree for review and manual variable renaming.
export default {
  name: "NoticeNew",
};
</script>
