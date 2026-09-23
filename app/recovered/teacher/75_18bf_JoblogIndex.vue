<!--
  Source: assets/www/js/75.js -> webpack module "18bf"
  Route: /teacher/joblog/new
  Component: JoblogIndex
  Restoration: template decompiled from Vue render function; logic in sibling .logic.js
  Confidence: high for DOM structure / medium for expression quoting
-->
<template>
<q-layout view="lHh lpr lFf">
  <q-header class="bg-grey-3 text-black">
    <q-toolbar>
      <q-btn flat round dense icon="keyboard_arrow_left" @click='goBack' />
      <q-toolbar-title>
        新建模板
      </q-toolbar-title>
    </q-toolbar>
  </q-header>
  <q-page-container>
    <q-page class="bg-white-3">
      <q-form class="q-gutter-sm full-width" @submit='saveRecord'>
        <q-card v-if="menuInfo" class="full-width" flat>
          <q-list>
            <q-item>
              <q-item-section>
                <q-item-label class="text-bold">
                  模板说明
                </q-item-label>
              </q-item-section>
            </q-item>
            <q-separator />
            <q-item>
              <q-item-section avatar>
                <div class="neu-css-before-red-asterisk">
                  名称
                </div>
              </q-item-section>
              <q-item-section>
                <q-input v-model="record.title" outlined dense hide-bottom-space lazy-rules :rules='[function (e) { return !!e || "请填写该项"; }]' />
              </q-item-section>
            </q-item>
            <q-separator />
            <q-item>
              <q-item-section>
                <q-item-label class="neu-css-before-red-asterisk q-my-sm">
                  要求
                </q-item-label>
                <q-editor v-model="record.detail" :toolbar='editorToolBar' :fonts='editorFonts' min-height="8em" hide-bottom-space lazy-rules :rules='[function (e) { return !!e || "请填写该项"; }]' />
              </q-item-section>
            </q-item>
            <q-separator style="height:7px" color="grey-3" />
            <q-item>
              <q-item-section>
                <q-item-label class="text-bold">
                  填写有效期间
                </q-item-label>
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
                <q-field style="width:100%" outlined dense stack-label hide-bottom-space lazy-rules :rules='[function (e) { return !!e || "请填写该项"; }]' :value='record.begin_date'>
                  <template v-slot:control>
                    {{ record.begin_date }}
                  </template>
                  <template v-slot:append>
                    <q-icon class="cursor-pointer" name="event">
                      <q-popup-proxy transition-show="scale" transition-hide="scale">
                        <div>
                          <q-date v-model="record.begin_date" flat minimal mask="YYYY-MM-DD">
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
            <q-separator />
            <q-item>
              <q-item-section avatar>
                <div class="neu-css-before-red-asterisk">
                  截止时间
                </div>
              </q-item-section>
              <q-item-section>
                <q-field style="width:100%" outlined dense stack-label hide-bottom-space lazy-rules :rules='[function (e) { return !!e || "请填写该项"; }, function (t) { return t > record.begin_date || "截止日期应在开始日期之后"; }]' :value='record.end_date'>
                  <template v-slot:control>
                    {{ record.end_date }}
                  </template>
                  <template v-slot:append>
                    <q-icon class="cursor-pointer" name="event">
                      <q-popup-proxy transition-show="scale" transition-hide="scale">
                        <div>
                          <q-date v-model="record.end_date" flat minimal mask="YYYY-MM-DD">
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
            <q-separator style="height:7px" color="grey-3" />
            <q-item>
              <q-item-section avatar>
                <div class="neu-css-before-red-asterisk">
                  填写对象
                </div>
              </q-item-section>
              <q-item-section />
              <q-item-section side>
                <q-item-label class="row items-center">
                  <span :class='0 === record.task_target.length ? "text-grey" : "text-primary"' size="md" @click='taskTargetDialog = true'>
                    {{ 0 === record.task_target.length ? "请选择" : "已选择 (" + record.task_target.length + ")" }}
                  </span>
                  <q-icon :class='0 === record.task_target.length ? "text-grey" : "text-primary"' name="keyboard_arrow_right" size="sm" />
                </q-item-label>
              </q-item-section>
            </q-item>
            <q-separator style="height:7px" color="grey-3" />
            <q-item>
              <q-item-section avatar>
                <div class="neu-css-before-red-asterisk">
                  允许填报人自己删除记录
                </div>
              </q-item-section>
              <q-item-section />
              <q-item-section side>
                <q-toggle v-model="record.allow_delete" size="lg" checked-icon="check" unchecked-icon="clear" dense :false-value="0" :true-value="1" />
              </q-item-section>
            </q-item>
            <q-separator style="height:7px" color="grey-3" />
            <q-item>
              <q-item-section avatar>
                <div class="neu-css-before-red-asterisk">
                  填报日志系统管理员是否可见
                </div>
              </q-item-section>
              <q-item-section />
              <q-item-section side>
                <q-toggle v-model="record.allow_look" size="lg" checked-icon="check" unchecked-icon="clear" dense :false-value="1" :true-value="0" />
              </q-item-section>
            </q-item>
            <q-separator style="height:7px" color="grey-3" />
            <q-item>
              <q-item-section avatar>
                <q-item-label>
                  共享对象
                </q-item-label>
                <q-item-label caption>
                  将该日志统计数据共享给他老师
                </q-item-label>
              </q-item-section>
              <q-item-section />
              <q-item-section side>
                <q-item-label class="row items-center">
                  <span :class='0 === record.share_target.length ? "text-grey" : "text-primary"' size="md" @click='shareDialog = true'>
                    {{ 0 === record.share_target.length ? "请选择" : "已选择 (" + record.share_target.length + ")" }}
                  </span>
                  <q-icon :class='0 === record.share_target.length ? "text-grey" : "text-primary"' name="keyboard_arrow_right" size="sm" />
                </q-item-label>
              </q-item-section>
            </q-item>
            <div v-show="false" class="row items-center">
              <div class="col-12 col-md-2 col-sm-3 neu-css-after-colon neu-css-before-red-asterisk" :class='$q.screen.lt.sm ? "" : "text-right"'>
                已选择
              </div>
              <div class="col-12 col-md-10 col-sm-9">
                <neu-view-assigned-teacher :value='record.task_target' />
              </div>
            </div>
            <q-separator style="height:7px" color="grey-3" />
            <div v-show="false" class="row items-center">
              <div class="col-12 col-md-2 col-sm-3 neu-css-after-colon" :class='$q.screen.lt.sm ? "" : "text-right"'>
                已选择
              </div>
              <div class="col-12 col-md-10 col-sm-9">
                <neu-view-assigned-teacher :value='record.share_target' />
              </div>
            </div>
            <q-item>
              <q-item-section avatar>
                <div class="neu-css-before-red-asterisk">
                  工作日志表单设置
                </div>
              </q-item-section>
              <q-item-section />
              <q-item-section side>
                <q-item-label class="row items-center">
                  <span :class='0 === record.info_config.length ? "text-grey" : "text-primary"' size="md" @click='addInfoConfig(record.info_config.length)'>
                    添加
                  </span>
                  <q-icon :class='0 === record.info_config.length ? "text-grey" : "text-primary"' name="keyboard_arrow_right" size="sm" />
                </q-item-label>
              </q-item-section>
            </q-item>
            <q-item v-show="record.info_config.length !==0 ">
              <q-item-section>
                <q-item-label class="q-my-sm">
                  工作日志表单项目
                </q-item-label>
                <div v-for="(t, i) in record.info_config" :key='i' class="bg-grey-2 q-pa-sm q-mt-sm">
                  <div>
                    <span class="neu-css-after-colon">
                      {{ "第" + i + 1 + "题" }}
                    </span>
                    <span class="text-primary cursor-pointer q-ml-sm" @click='editInfoConfig(i)'>
                      编辑
                    </span>
                    <span class="text-negative cursor-pointer q-ml-sm" @click='deleteInfoConfig(i)'>
                      删除
                    </span>
                    <span v-show="index + 1 != record.info_config.length" class="text-primary cursor-pointer q-ml-sm" @click='moveInfoConfig(i, 1)'>
                      下移
                    </span>
                    <span v-show="index != 0" class="text-primary cursor-pointer q-ml-sm" @click='moveInfoConfig(i, -1)'>
                      上移
                    </span>
                  </div>
                  <neu-widget v-model="infoModel[index]" :config='t' :viewMode='true' />
                </div>
              </q-item-section>
            </q-item>
          </q-list>
        </q-card>
        <q-footer class="bg-white text-primary" style="height:2.8rem;margin-left:0px;border:0px" bordered>
          <q-btn style="width:40%;height:100%" outline color="grey" label="取消" to="/teacher/joblog/index" />
          <q-btn style="width:60%;height:100%" color="primary" label="发布" type="submit" />
        </q-footer>
      </q-form>
      <q-dialog v-model="taskTargetDialog" persistent fullWidth :maximized='true'>
        <q-card class="full-width" flat>
          <q-toolbar>
            <div class="full-width row items-center justify-between q-px-xs q-py-sm">
              <div class="text-bold text-black">
                设置填写对象
              </div>
              <q-btn unelevated color="primary" label="完成" @click='taskTargetDialog = false' />
            </div>
          </q-toolbar>
          <q-card-section>
            <neu-assign-teacher v-model="record.task_target" />
          </q-card-section>
        </q-card>
      </q-dialog>
      <q-dialog v-model="shareDialog" persistent fullWidth :maximized='true'>
        <q-card class="full-width" flat>
          <q-toolbar>
            <div class="full-width row items-center justify-between q-px-xs q-py-sm">
              <div class="text-bold text-black">
                设置共享对象
              </div>
              <q-btn unelevated color="primary" label="完成" @click='shareDialog = false' />
            </div>
          </q-toolbar>
          <q-card-section>
            <neu-assign-teacher v-model="record.share_target" />
          </q-card-section>
        </q-card>
      </q-dialog>
      <q-dialog v-model="infoConfigDialog" persistent :maximized='true'>
        <q-card class="full-width" flat>
          <q-card-section>
            <div class="text-bold">
              设置工作日志表单
            </div>
          </q-card-section>
          <q-card-section>
            <neu-define-widget v-model="record.info_config[infoConfigIndex]" @save='infoConfigDialog = false' @cancel='cancelInfoConfig' />
          </q-card-section>
        </q-card>
      </q-dialog>
    </q-page>
  </q-page-container>
</q-layout>
</template>

<script>
// The exact semantic component options are preserved in the sibling .logic.js file.
// This SFC isolates the original render tree for review and manual variable renaming.
export default {
  name: "JoblogIndex",
};
</script>
