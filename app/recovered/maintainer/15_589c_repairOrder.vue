<!--
  Source: assets/www/js/15.js -> webpack module "589c"
  Route: /maintainer/repairOrder
  Component: repairOrder
  Restoration: template decompiled from Vue render function; logic in sibling .logic.js
  Confidence: high for DOM structure / medium for expression quoting
-->
<template>
<q-layout view="lHh lpr lFf">
  <q-header class="bg-grey-3 text-black">
    <q-toolbar>
      <q-btn flat round dense icon="keyboard_arrow_left" @click='goBack' />
      <q-toolbar-title>
        维修
      </q-toolbar-title>
    </q-toolbar>
  </q-header>
  <q-page-container>
    <q-page class="bg-grey-3">
      <q-form @submit='onSubmit'>
        <q-card class="full-width" flat>
          <q-card-section>
            <span class="neu-css-after-colon text-bold neu-css-before-white-space">
              报修单号
            </span>
            {{ record.order + "\n          " }}
          </q-card-section>
          <q-card-section>
            <span class="neu-css-after-colon text-bold neu-css-before-red-asterisk">
              故障类型
            </span>
            <q-select v-model="record.fault_type_id" emit-value map-options outlined hide-bottom-space dense lazy-rules :rules='[function (e) { return null !== e && "" !== e || "请选择故障类型"; }]' :options='fault_type_list' />
          </q-card-section>
          <q-card-section>
            <div class="text-bold neu-css-after-colon neu-css-before-red-asterisk q-mb-sm">
              维修描述
            </div>
            <q-input v-model="record.repair_description" dense outlined hide-bottom-space placeholder="请填写该项" type="textarea" lazy-rules :rules='[function (e) { return !!e || "请填写该项"; }, function (e) { return e.length <= 200 || "最多填写200个字"; }, function (e) { return e.length >= 1 || "最少填写1个字"; }]' />
          </q-card-section>
        </q-card>
        <q-card class="full-width row q-mt-sm" flat>
          <q-list class="full-width" padding>
            <q-item>
              <q-item-section>
                <q-item-label class="neu-css-before-white-space">
                  <span class="neu-css-after-colon text-bold">
                    维修附件
                  </span>
                </q-item-label>
                <q-item-label class="neu-css-before-white-space q-my-sm" caption>
                  文件格式支持：
                </q-item-label>
                <q-item-label class="neu-css-before-white-space q-my-sm" caption>
                  .jpg、.png、.jpeg、.mp4
                </q-item-label>
                <q-field borderless dense hide-bottom-space lazy-rules :value='record.repair_attachments'>
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
                          <q-item v-for="a in t.files" :key='a.name'>
                            <q-item-section>
                              <q-item-label class="full-width ellipsis cursor-pointer">
                                {{ "\n                                " + a.name + "\n                              " }}
                              </q-item-label>
                            </q-item-section>
                            <q-item-section side>
                              <q-btn flat dense color="negative" icon="delete" size="sm" @click='t.removeFile(a)'>
                                <q-tooltip>
                                  删除
                                </q-tooltip>
                              </q-btn>
                            </q-item-section>
                          </q-item>
                          <q-item v-for="t in matchingUploadedFiles(record.repair_attachments, t.files)" :key='t.servername'>
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
                          <q-item v-for="a in t.files" :key='a.name'>
                            <q-item-section>
                              <q-item-label class="full-width ellipsis cursor-pointer">
                                {{ "\n                                " + a.name + "\n                              " }}
                              </q-item-label>
                            </q-item-section>
                            <q-item-section side>
                              <q-btn flat dense color="negative" icon="delete" size="sm" @click='t.removeFile(a)'>
                                <q-tooltip>
                                  删除
                                </q-tooltip>
                              </q-btn>
                            </q-item-section>
                          </q-item>
                          <q-item v-for="t in matchingUploadedFiles(record.repair_attachments, t.files)" :key='t.servername'>
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
            <q-btn style="width:40%;height:2.8rem" flat color="grey" label="取消" to="/maintainer/repairList" />
            <q-btn class="bg-primary" style="width:60%;height:2.8rem" flat unelevated color="white" label="维修完成" type="submit" />
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
  name: "repairOrder",
};
</script>
