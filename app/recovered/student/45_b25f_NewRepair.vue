<!--
  Source: assets/www/js/45.js -> webpack module "b25f"
  Route: /student/repair/new
  Component: NewRepair
  Restoration: template decompiled from Vue render function; logic in sibling .logic.js
  Confidence: high for DOM structure / medium for expression quoting
-->
<template>
<q-layout view="lHh lpr lFf">
  <q-header class="bg-grey-3 text-black">
    <q-toolbar>
      <q-btn flat round dense icon="keyboard_arrow_left" @click='goBack' />
      <q-toolbar-title>
        申请报修
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
                  姓名
                </div>
              </q-item-section>
              <q-item-section>
                <q-input v-model="record.name" hide-bottom-space readonly dense outlined />
              </q-item-section>
            </q-item>
            <q-item>
              <q-item-section avatar>
                <div class="neu-css-before-red-asterisk">
                  学号
                </div>
              </q-item-section>
              <q-item-section>
                <q-input v-model="record.login_name" hide-bottom-space readonly dense outlined />
              </q-item-section>
            </q-item>
            <q-item>
              <q-item-section avatar>
                <div class="neu-css-before-red-asterisk">
                  学院
                </div>
              </q-item-section>
              <q-item-section>
                <q-input v-model="record.dep_name" hide-bottom-space readonly dense outlined />
              </q-item-section>
            </q-item>
          </q-list>
        </q-card>
        <q-card class="full-width row q-mt-sm" flat>
          <q-list class="full-width">
            <q-item>
              <q-item-section avatar>
                <div class="neu-css-before-red-asterisk">
                  联系电话
                </div>
              </q-item-section>
              <q-item-section>
                <q-input v-model="record.mob" hide-bottom-space :rules='[function (e) { return null !== e && "" !== e && "" === e || /^1[3-9]\d{9}$/.test(e) || "请填写有效的联系电话"; }]' dense outlined />
              </q-item-section>
            </q-item>
            <q-item>
              <q-item-section avatar>
                <div class="neu-css-before-red-asterisk">
                  报修类型
                </div>
              </q-item-section>
              <q-item-section>
                <q-select v-if="'update' == doType" v-model="record.repair_type" emit-value readonly map-options outlined hide-bottom-space :options='repair_type_list' dense lazy-rules :rules='[function (e) { return null !== e && "" !== e || "请填选择报修类型"; }]' />
                <q-select v-if="'insert' == doType" v-model="record.repair_type" emit-value map-options outlined hide-bottom-space :options='repair_type_list' dense lazy-rules :rules='[function (e) { return null !== e && "" !== e || "请填选择报修类型"; }]' />
              </q-item-section>
            </q-item>
            <q-item>
              <q-item-section avatar>
                <div class="neu-css-before-red-asterisk">
                  报修区域
                </div>
              </q-item-section>
              <q-item-section>
                <q-select v-model="record.repair_range" outlined emit-value map-options hide-bottom-space :options='repair_range_list' dense lazy-rules :rules='[function (e) { return null !== e && "" !== e || "请填选择报修区域"; }]' />
              </q-item-section>
            </q-item>
            <q-item>
              <q-item-section avatar>
                <div class="neu-css-before-red-asterisk">
                  详细地点
                </div>
              </q-item-section>
              <q-item-section>
                <q-input v-model="record.address" hide-bottom-space :rules='[function (e) { return null !== e && "" !== e || "请填写详细地点"; }]' dense outlined />
              </q-item-section>
            </q-item>
            <q-item>
              <q-item-section avatar>
                <div class="neu-css-before-red-asterisk">
                  故障类型
                </div>
              </q-item-section>
              <q-item-section>
                <q-select v-model="record.fault_type" outlined emit-value map-options hide-bottom-space :options='fault_type_list' dense lazy-rules :rules='[function (e) { return null !== e && "" !== e || "请填选择故障类型"; }]' />
              </q-item-section>
            </q-item>
            <q-item>
              <q-item-section avatar>
                <div class="neu-css-before-red-asterisk">
                  故障描述
                </div>
              </q-item-section>
              <q-item-section>
                <q-input v-model="record.description" dense outlined hide-bottom-space type="textarea" lazy-rules :rules='[function (e) { return null !== e && "" !== e || "请填写故障描述"; }]' />
              </q-item-section>
            </q-item>
            <q-item>
              <q-item-section avatar>
                <div class="neu-css-before-red-asterisk">
                  期望上门时间
                </div>
              </q-item-section>
              <q-item-section>
                <q-field outlined dense stack-label hide-bottom-space lazy-rules :rules='[function (e) { return null !== e && "" !== e || "请填选择期望上门时间"; }]' :value='record.visit_time'>
                  <template v-slot:control>
                    {{ record.visit_time }}
                  </template>
                  <template v-slot:append>
                    <q-icon class="cursor-pointer" name="event">
                      <q-popup-proxy transition-show="scale" transition-hide="scale">
                        <div>
                          <q-date v-model="record.visit_time" flat color="secondary" minimal mask="YYYY-MM-DD HH:mm">
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
                          <q-time v-model="record.visit_time" flat mask="YYYY-MM-DD HH:mm" format24h>
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
          </q-list>
        </q-card>
        <q-card class="full-width row q-mt-sm" flat>
          <q-list class="full-width" padding>
            <q-item>
              <q-item-section>
                <q-item-label class="neu-css-before-white-space">
                  添加附件
                </q-item-label>
                <q-item-label class="neu-css-before-white-space q-my-sm" caption>
                  文件格式支持：
                </q-item-label>
                <q-item-label class="neu-css-before-white-space q-my-sm" caption>
                  .jpg、.png、.jpeg、.mp4
                </q-item-label>
                <q-field borderless dense hide-bottom-space lazy-rules :value='record.attachment'>
                  <template v-slot:control>
                    <q-uploader v-if="0 == isHarmonyOS" v-model="filesMaxNumber" class="full-width" flat multiple max-files="3" :url='uploader' auto-upload :filter='checkFile' accept=".jpg, .png, .jpeg, .mp4, audio/*, image/*, video/*" max-file-size="31457280" @uploaded='afterUploaded' @rejected='onRejected' @removed='afterRemoved'>
                      <template v-slot:header>
                        <div class="row no-wrap items-center q-pa-sm q-gutter-xs">
                          <div class="col">
                            上传(每个30M以内)
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
                              <q-item-label class="full-width ellipsis cursor-pointer">
                                {{ "\n                                " + s.name + "\n                              " }}
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
                              <q-item-label class="full-width ellipsis cursor-pointer">
                                {{ "\n                                " + t.srcname + "\n                              " }}
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
                    <q-uploader v-if="1 == isHarmonyOS" v-model="filesMaxNumber" class="full-width" flat multiple max-files="3" :url='uploader' auto-upload :filter='checkFile' max-file-size="31457280" @uploaded='afterUploaded' @removed='afterRemoved'>
                      <template v-slot:header>
                        <div class="row no-wrap items-center q-pa-sm q-gutter-xs">
                          <div class="col">
                            上传(每个30M以内)
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
                              <q-item-label class="full-width ellipsis cursor-pointer">
                                {{ "\n                                " + s.name + "\n                              " }}
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
                              <q-item-label class="full-width ellipsis cursor-pointer">
                                {{ "\n                                " + t.srcname + "\n                              " }}
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
                  </template>
                </q-field>
              </q-item-section>
            </q-item>
          </q-list>
        </q-card>
        <q-footer class="bg-white text-primary" bordered>
          <div class="row justify-between">
            <q-btn style="width:40%;height:2.8rem" flat color="grey" label="取消" to="/student/repair/index" />
            <q-btn class="bg-primary" style="width:60%;height:2.8rem" flat unelevated color="white" label="提交报修" type="submit" />
          </div>
        </q-footer>
      </q-form>
    </q-page>
  </q-page-container>
</q-layout>
</template>

<script>
// The exact semantic component options are preserved in the sibling .logic.js file.
// This SFC isolates the original render tree for review and manual variable renaming.
export default {
  name: "NewRepair",
};
</script>
