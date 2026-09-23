<!--
  Source: assets/www/js/109.js -> webpack module "54fe"
  Route: /teacher/sanitation/new
  Component: SanitationNew
  Restoration: template decompiled from Vue render function; logic in sibling .logic.js
  Confidence: high for DOM structure / medium for expression quoting
-->
<template>
<q-layout view="lHh lpr lFf">
  <q-header class="bg-grey-3 text-black">
    <q-toolbar>
      <q-btn flat round dense icon="keyboard_arrow_left" @click='goBack' />
      <q-toolbar-title>
        新建查寝任务
      </q-toolbar-title>
    </q-toolbar>
  </q-header>
  <q-page-container>
    <q-page class="bg-white-3">
      <q-form class="q-gutter-sm full-width" @submit='saveSanitation'>
        <q-card v-if="menuInfo" class="full-width" flat>
          <q-list>
            <q-item>
              <q-item-section>
                <q-item-label class="text-bold">
                  寝室检查通知内容
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
                <q-input v-model="sanitation.title" outlined dense hide-bottom-space lazy-rules :rules='[function (t) { return !!t || "请填写该项"; }]' />
              </q-item-section>
            </q-item>
            <q-separator />
            <q-item>
              <div class="row">
                <div class="col-12 col-md-2 col-sm-3 neu-css-before-red-asterisk" :class='$q.screen.lt.sm ? "" : "text-right"'>
                  要求
                </div>
                <div class="col-12 col-md-10 col-sm-9">
                  <q-editor v-model="sanitation.detail" :toolbar='editorToolBar' :fonts='editorFonts' min-height="10em" hide-bottom-space lazy-rules :rules='[function (t) { return !!t || "请填写该项"; }]' />
                </div>
              </div>
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
                <q-field style="width:100%" outlined dense stack-label hide-bottom-space lazy-rules :rules='[function (t) { return !!t || "请填写该项"; }]' :value='sanitation.begin_date'>
                  <template v-slot:control>
                    {{ sanitation.begin_date }}
                  </template>
                  <template v-slot:append>
                    <q-icon class="cursor-pointer" name="event">
                      <q-popup-proxy transition-show="scale" transition-hide="scale">
                        <div>
                          <q-date v-model="sanitation.begin_date" flat minimal mask="YYYY-MM-DD">
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
                <q-field style="width:100%" outlined dense stack-label hide-bottom-space lazy-rules :rules='[function (t) { return !!t || "请填写该项"; }, function (i) { return i > sanitation.begin_date || "截止日期应在开始日期之后"; }]' :value='sanitation.end_date'>
                  <template v-slot:control>
                    {{ sanitation.end_date }}
                  </template>
                  <template v-slot:append>
                    <q-icon class="cursor-pointer" name="event">
                      <q-popup-proxy transition-show="scale" transition-hide="scale">
                        <div>
                          <q-date v-model="sanitation.end_date" flat minimal mask="YYYY-MM-DD">
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
                  {{ "\n                " + menuInfo.title + "配置\n              " }}
                </div>
              </q-item-section>
              <q-item-section />
              <q-item-section side>
                <q-item-label class="row items-center">
                  <span :class='0 === sanitation.info_config.length ? "text-grey" : "text-primary"' size="md" @click='addInfoConfig(sanitation.info_config.length)'>
                    添加
                  </span>
                  <q-icon :class='0 === sanitation.info_config.length ? "text-grey" : "text-primary"' name="keyboard_arrow_right" size="sm" />
                </q-item-label>
              </q-item-section>
            </q-item>
            <q-item v-show="sanitation.info_config.length !== 0">
              <q-item-section>
                <q-item-label class="q-my-sm">
                  {{ menuInfo.title + "项目" }}
                </q-item-label>
                <div v-for="(i, n) in sanitation.info_config" :key='n' class="bg-grey-2 q-pa-sm q-mt-sm">
                  <div>
                    <span class="neu-css-after-colon">
                      {{ "第" + n + 1 + "检查项" }}
                    </span>
                    <span class="text-primary cursor-pointer q-ml-sm" @click='editInfoConfig(n)'>
                      编辑
                    </span>
                    <span class="text-negative cursor-pointer q-ml-sm" @click='deleteInfoConfig(n)'>
                      删除
                    </span>
                    <span v-show="index + 1 != sanitation.info_config.length" class="text-primary cursor-pointer q-ml-sm" @click='moveInfoConfig(n, 1)'>
                      下移
                    </span>
                    <span v-show="index != 0" class="text-primary cursor-pointer q-ml-sm" @click='moveInfoConfig(n, -1)'>
                      上移
                    </span>
                  </div>
                  <neu-widget v-model="infoModel[index]" :config='i' :viewMode='true' />
                </div>
              </q-item-section>
            </q-item>
            <q-separator style="height:7px" color="grey-3" />
            <q-item>
              <q-item-section avatar>
                <div>
                  学生个人检查配置
                </div>
              </q-item-section>
              <q-item-section />
              <q-item-section side>
                <q-toggle v-model="studentSet" size="lg" checked-icon="check" unchecked-icon="clear" dense false-value="0" true-value="1" />
              </q-item-section>
            </q-item>
            <q-item v-show="studentSet === '1'">
              <q-item-section>
                <div class="row">
                  <q-item-label class="neu-css-before-red-asterisk q-my-sm">
                    学生个人检查配置项目
                  </q-item-label>
                  <div style="margin-left:128px">
                    <span :class='0 === sanitation.stu_info_config.length ? "text-grey" : "text-primary"' size="md" @click='addStuInfoConfig(sanitation.stu_info_config.length)'>
                      添加
                    </span>
                    <q-icon :class='0 === sanitation.stu_info_config.length ? "text-grey" : "text-primary"' name="keyboard_arrow_right" size="sm" />
                  </div>
                </div>
                <div v-for="(i, n) in sanitation.stu_info_config" :key='n' class="bg-grey-2 q-pa-sm q-mt-sm">
                  <div>
                    <span class="neu-css-after-colon">
                      {{ "第" + n + 1 + "检查项" }}
                    </span>
                    <span class="text-primary cursor-pointer q-ml-sm" @click='editStuInfoConfig(n)'>
                      编辑
                    </span>
                    <span class="text-negative cursor-pointer q-ml-sm" @click='deleteStuInfoConfig(n)'>
                      删除
                    </span>
                    <span v-show="index + 1 != sanitation.stu_info_config.length" class="text-primary cursor-pointer q-ml-sm" @click='moveStuInfoConfig(n, 1)'>
                      下移
                    </span>
                    <span v-show="index != 0" class="text-primary cursor-pointer q-ml-sm" @click='moveStuInfoConfig(n, -1)'>
                      上移
                    </span>
                  </div>
                  <neu-widget v-model="stuInfoModel[index]" :config='i' :viewMode='true' />
                </div>
              </q-item-section>
            </q-item>
            <q-separator style="height:7px" color="grey-3" />
            <q-item>
              <q-item-section avatar>
                <div class="neu-css-before-red-asterisk">
                  {{ "\n                " + menuInfo.title + "执行对象\n              " }}
                </div>
              </q-item-section>
              <q-item-section />
              <q-item-section side>
                <q-item-label class="row items-center">
                  <span :class='0 === sanitation.task_target.length ? "text-grey" : "text-primary"' size="md" @click='taskTargetDialog = true'>
                    {{ 0 === sanitation.task_target.length ? "请选择" : "已选择 (" + sanitation.task_target.length + ")" }}
                  </span>
                  <q-icon :class='0 === sanitation.task_target.length ? "text-grey" : "text-primary"' name="keyboard_arrow_right" size="sm" />
                </q-item-label>
              </q-item-section>
            </q-item>
            <div v-show="false" class="row items-center">
              <div class="col-12 col-md-2 col-sm-3 neu-css-after-colon neu-css-before-red-asterisk" :class='$q.screen.lt.sm ? "" : "text-right"'>
                已选择
              </div>
              <div class="col-12 col-md-10 col-sm-9">
                <neu-view-assigned-teacher :value='sanitation.task_target' />
              </div>
            </div>
            <q-separator style="height:7px" color="grey-3" />
            <q-item>
              <q-item-section avatar>
                <div class="neu-css-before-red-asterisk">
                  允许填写人自己删除记录
                </div>
              </q-item-section>
              <q-item-section />
              <q-item-section side>
                <q-toggle v-model="sanitation.allow_delete" size="lg" checked-icon="check" unchecked-icon="clear" dense :false-value="0" :true-value="1" />
              </q-item-section>
            </q-item>
            <q-separator style="height:7px" color="grey-3" />
            <q-item>
              <q-item-section avatar>
                <q-item-label>
                  共享对象
                </q-item-label>
                <q-item-label caption>
                  将该查寝统计数据共享给其他老师
                </q-item-label>
              </q-item-section>
              <q-item-section />
              <q-item-section side>
                <q-item-label class="row items-center">
                  <span :class='0 === sanitation.share_target.length ? "text-grey" : "text-primary"' size="md" @click='shareDialog = true'>
                    {{ 0 === sanitation.share_target.length ? "请选择" : "已选择 (" + sanitation.share_target.length + ")" }}
                  </span>
                  <q-icon :class='0 === sanitation.share_target.length ? "text-grey" : "text-primary"' name="keyboard_arrow_right" size="sm" />
                </q-item-label>
              </q-item-section>
            </q-item>
            <div v-show="false" class="row items-center">
              <div class="col-12 col-md-2 col-sm-3 neu-css-after-colon" :class='$q.screen.lt.sm ? "" : "text-right"'>
                已选择
              </div>
              <div class="col-12 col-md-10 col-sm-9">
                <neu-view-assigned-teacher :value='sanitation.share_target' />
              </div>
            </div>
            <q-separator />
          </q-list>
        </q-card>
        <q-footer class="bg-white text-primary" style="height:2.8rem;margin-left:0px;border:0px" bordered>
          <q-btn style="width:40%;height:100%" outline color="grey" label="取消" to="/teacher/sanitation/index" />
          <q-btn style="width:60%;height:100%" color="primary" label="发布" type="submit" />
        </q-footer>
      </q-form>
      <q-dialog v-model="infoConfigDialog" persistent>
        <q-card class="full-width" flat>
          <q-card-section>
            <div class="text-bold">
              寝室检查配置
            </div>
          </q-card-section>
          <q-card-section>
            <neu-define-widget v-model="sanitation.info_config[infoConfigIndex]" @save='infoConfigDialog = false' @cancel='cancelInfoConfig' />
          </q-card-section>
        </q-card>
      </q-dialog>
      <q-dialog v-model="StuinfoConfigDialog" persistent>
        <q-card class="full-width" flat>
          <q-card-section>
            <div class="text-bold">
              学生检查配置
            </div>
          </q-card-section>
          <q-card-section>
            <neu-define-widget v-model="sanitation.stu_info_config[stuInfoConfigIndex]" @save='StuinfoConfigDialog = false' @cancel='stucancelInfoConfig' />
          </q-card-section>
        </q-card>
      </q-dialog>
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
            <neu-assign-teacher v-model="sanitation.task_target" />
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
            <neu-assign-teacher v-model="sanitation.share_target" />
          </q-card-section>
        </q-card>
      </q-dialog>
      <q-dialog v-model="infoConfigDialog" persistent :maximized='true'>
        <q-card class="full-width" flat>
          <q-card-section>
            <div class="text-bold">
              寝室检查配置
            </div>
          </q-card-section>
          <q-card-section>
            <neu-define-widget v-model="sanitation.info_config[infoConfigIndex]" @save='infoConfigDialog = false' @cancel='cancelInfoConfig' />
          </q-card-section>
        </q-card>
      </q-dialog>
      <q-dialog v-model="StuinfoConfigDialog" persistent :maximized='true'>
        <q-card class="full-width" flat>
          <q-card-section>
            <div class="text-bold">
              学生检查配置
            </div>
          </q-card-section>
          <q-card-section>
            <neu-define-widget v-model="sanitation.stu_info_config[stuInfoConfigIndex]" @save='StuinfoConfigDialog = false' @cancel='stucancelInfoConfig' />
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
  name: "SanitationNew",
};
</script>
