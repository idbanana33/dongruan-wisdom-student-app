<!--
  Source: assets/www/js/chunk-common.js -> webpack module "974f"
  Route: (shared/core)
  Component: NeuWidget
  Restoration: template decompiled from Vue render function; logic in sibling .logic.js
  Confidence: high for DOM structure / medium for expression quoting
-->
<template>
<div class="full-width row items-center" :class='{ "bg-orange": riskTip }'>
  <div v-if="conf.label" :class='[{ "neu-css-before-red-asterisk": conf.required, "text-right": lTextRight, "neu-css-after-colon": lColon }, lClass]'>
    {{ "\n    " + lNo ? lNo + ". " : "" + conf.label + "\n  " }}
  </div>
  <span v-if="conf.hint" class="q-ml-xs" style="color:grey;font-size:13px">
    {{ conf.hint }}
  </span>
  <div :class='cClass'>
    <q-input v-else v-model="modelValue" outlined dense :type='conf.isTextarea ? "textarea" : "text"' :placeholder='readonly ? "" : textPlaceholder' hide-bottom-space :lazy-rules='conf.required' :rules='[function (e) { return !!e || !conf.required || readonly || "请填写该项"; }, function (i) { return conf.maxLength && (!i || i.length <= conf.maxLength) || !conf.maxLength || "最多填写" + e.conf.maxLength + "个字"; }, function (i) { return conf.minLength && (!i || i.length >= conf.minLength) || !conf.minLength || "最少填写" + e.conf.minLength + "个字"; }]' :readonly='readonly' />
    <span v-if="'T' == conf.type && readonly">
      {{ modelValue }}
    </span>
    <q-input v-if="'N' == conf.type" v-model="modelValue" outlined dense type="number" :step='numberStep' :placeholder='readonly ? "" : numberPlaceholder' hide-bottom-space :lazy-rules='conf.required' :rules='[function (e) { return checkNumber(e); }]' :readonly='readonly' />
    <q-select v-if="'R' == conf.type && 'S' == conf.selectPattern" v-model="modelValue" outlined dense hide-bottom-space lazy-rules :rules='[function (e) { return !!e || 0 == e || !conf.required || readonly || "请选择该项"; }]' :options='conf.options' emit-value map-options :readonly='readonly' :clearable='!conf.required' />
    <q-field v-else borderless dense hide-bottom-space lazy-rules :rules='[function (e) { return !!e || 0 == e || !conf.required || readonly || "请填写该项"; }]' :value='modelValue' :readonly='readonly'>
      <template v-slot:control>
        <q-radio v-for="e in conf.options" v-model="modelValue" :key='e.value' class="q-mr-sm" dense :val='e.value' :label='e.label' :disable='readonly' />
      </template>
    </q-field>
    <q-field v-if="'R' == conf.type && 'S' != conf.selectPattern && conf.isOther" borderless dense hide-bottom-space lazy-rules :rules='[function (e) { return (!!e || 0 == e) && ("其他" != e || !!modelValue.other) || !conf.required || readonly || "请填写该项"; }]' :value='modelValue.value' :readonly='readonly'>
      <template v-slot:control>
        <q-radio v-for="e in conf.options" v-model="modelValue.value" :key='e.value' class="q-mr-sm" dense :val='e.value' :label='e.label' :disable='readonly' @input='toggleOther' />
        <q-radio v-model="modelValue.value" class="q-mr-sm" dense val="其他" label="其他" :disable='readonly' @input='toggleOther' />
        <q-input v-model="modelValue.other" outlined dense :placeholder='readonly ? "" : "请填写其他内容"' :disable='"其他" != modelValue.value' :readonly='readonly' input-style="text-indent:10px;" />
      </template>
    </q-field>
    <q-field v-else borderless dense hide-bottom-space lazy-rules :rules='[function (e) { return (!!e || 0 == e) && e.length > 0 || !conf.required || readonly || "请填写该项"; }]' :value='modelValue' :readonly='readonly'>
      <template v-slot:control>
        <q-checkbox v-for="e in conf.options" v-model="modelValue" :key='e.value' class="q-mr-sm" dense :val='e.value' :label='e.label' :disable='readonly' />
      </template>
    </q-field>
    <q-field v-if="'C' == conf.type && conf.isOther" borderless dense hide-bottom-space lazy-rules :rules='[function (e) { return (!!e || 0 == e) && e.length > 0 && (e.indexOf("其他") < 0 || !!modelValue.other) || !conf.required || readonly || "请填写该项"; }]' :value='modelValue.value' :readonly='readonly'>
      <template v-slot:control>
        <q-checkbox v-for="e in conf.options" v-model="modelValue.value" :key='e.value' class="q-mr-sm" dense :val='e.value' :label='e.label' :disable='readonly' @input='toggleOther' />
        <q-checkbox v-model="modelValue.value" class="q-mr-sm" dense val="其他" label="其他" :disable='readonly' @input='toggleOther' />
        <q-input v-model="modelValue.other" outlined dense :placeholder='readonly ? "" : "请填写其他内容"' :disable='!modelValue.value || modelValue.value.indexOf("其他") < 0' :readonly='readonly' input-style="text-indent:10px;" />
      </template>
    </q-field>
    <q-field v-if="'D' == conf.type && 'T' != conf.dtPattern && 'DT' != conf.dtPattern" outlined dense hide-bottom-space lazy-rules :rules='[function (e) { return !!e || !conf.required || readonly || "请填写该项"; }]' :value='modelValue' :readonly='readonly'>
      <template v-slot:control>
        {{ modelValue }}
      </template>
      <template v-slot:append>
        <q-icon class="cursor-pointer" name="event">
          <q-popup-proxy transition-show="scale" transition-hide="scale" :target='!readonly'>
            <q-date v-model="modelValue" flat minimal mask="YYYY-MM-DD">
              <div class="row items-center justify-end">
                <q-btn v-close-popup dense label="关闭" flat />
              </div>
            </q-date>
          </q-popup-proxy>
        </q-icon>
        <q-icon v-if="!conf.required && modelValue" class="cursor-pointer" name="cancel" :color='clearIconColor' @mouseover='clearIconColor = null' @mouseleave='clearIconColor = "grey"' @click='e.stopPropagation(), modelValue = null' />
      </template>
    </q-field>
    <q-field v-if="'D' == conf.type && 'T' == conf.dtPattern" outlined dense hide-bottom-space lazy-rules :rules='[function (e) { return !!e || !conf.required || readonly || "请填写该项"; }]' :value='modelValue' :readonly='readonly'>
      <template v-slot:control>
        {{ modelValue }}
      </template>
      <template v-slot:append>
        <q-icon class="cursor-pointer" name="access_time">
          <q-popup-proxy transition-show="scale" transition-hide="scale" :target='!readonly'>
            <q-time v-model="modelValue" flat mask="HH:mm" format24h landscape>
              <div class="row items-center justify-end">
                <q-btn v-close-popup dense label="关闭" flat />
              </div>
            </q-time>
          </q-popup-proxy>
        </q-icon>
        <q-icon v-if="!conf.required && modelValue" class="cursor-pointer" name="cancel" :color='clearIconColor' @mouseover='clearIconColor = null' @mouseleave='clearIconColor = "grey"' @click='e.stopPropagation(), modelValue = null' />
      </template>
    </q-field>
    <q-field v-if="'D' == conf.type && 'DT' == conf.dtPattern" outlined dense hide-bottom-space lazy-rules :rules='[function (e) { return !!e || !conf.required || readonly || "请填写该项"; }]' :value='modelValue' :readonly='readonly'>
      <template v-slot:control>
        {{ modelValue }}
      </template>
      <template v-slot:append>
        <q-icon class="cursor-pointer" name="event">
          <q-popup-proxy transition-show="scale" transition-hide="scale" :target='!readonly'>
            <q-date v-model="modelValue" flat minimal mask="YYYY-MM-DD HH:mm">
              <div class="row items-center justify-end">
                <q-btn v-close-popup dense label="关闭" flat />
              </div>
            </q-date>
          </q-popup-proxy>
        </q-icon>
        <q-icon class="cursor-pointer" name="access_time">
          <q-popup-proxy transition-show="scale" transition-hide="scale">
            <q-time v-model="modelValue" flat mask="YYYY-MM-DD HH:mm" format24h landscape>
              <div class="row items-center justify-end">
                <q-btn v-close-popup dense label="关闭" flat />
              </div>
            </q-time>
          </q-popup-proxy>
        </q-icon>
        <q-icon v-if="!conf.required && modelValue" class="cursor-pointer" name="cancel" :color='clearIconColor' @mouseover='clearIconColor = null' @mouseleave='clearIconColor = "grey"' @click='e.stopPropagation(), modelValue = null' />
      </template>
    </q-field>
    <q-img v-if="'S' == conf.type && modelValue" :src='modelValue' width="100px" @click='dialog = !readonly' />
    <q-input v-else v-model="modelValue" borderless dense type="text" placeholder="未签名" hide-bottom-space :lazy-rules='conf.required' :rules='[function (e) { return !!e || !conf.required || readonly || "请签名"; }]' :readonly='true' @click='dialog = !readonly' />
    <q-dialog v-if="'S' == conf.type" v-model="dialog" position="bottom">
      <q-card class="full-width" flat>
        <q-card-section class="row items-center justify-between">
          <div class="text-bold">
            请签名
          </div>
          <q-btn v-close-popup icon="close" flat round dense size="sm" />
        </q-card-section>
        <q-card-section class="bg-grey-3 q-pa-xs">
          <vue-esign ref=""esign"" :height="100" :isCrop='true' :lineWidth="3" lineColor="#000000" />
        </q-card-section>
        <q-card-section class="q-gutter-sm row justify-end">
          <q-btn unelevated label="清除" @click='resetEsign' />
          <q-btn unelevated color="primary" label="完成" @click='generateEsign' />
        </q-card-section>
      </q-card>
    </q-dialog>
    <q-input v-else v-model="modelValue.value" outlined dense type="text" placeholder="省、市、区、街道" hide-bottom-space :lazy-rules='conf.required' :rules='[function (e) { return !!e || !conf.required || readonly || "请选择"; }]' :readonly='true' @click='openPcasDialog' />
    <span v-if="'A' == conf.type && readonly">
      {{ modelValue.value }}
    </span>
    <q-dialog v-else v-model="dialog" position="bottom">
      <q-card class="full-width" flat>
        <q-card-section class="row items-center justify-between">
          <div class="text-bold">
            请选择地区
            <span class="text-primary cursor-pointer q-ml-sm" @click='autoLocation'>
              自动定位
            </span>
            <neu-geo-location :needAddr='true' :nonauto='true' :location='research' @completed='locationCompleted' @error='locationError' />
          </div>
          <q-btn v-close-popup icon="close" flat round dense size="sm" />
        </q-card-section>
        <q-separator />
        <q-card-section>
          <q-list>
            <q-item v-for="(e, i) in pcas.code" :key='e' dense>
              <q-item-section @click='extendPcasByLevel(e, i + 1)'>
                <q-item-label>
                  {{ pcas.name[i] }}
                </q-item-label>
              </q-item-section>
              <q-item-section side @click='extendPcasByLevel(e, i + 1)'>
                <q-item-label>
                  <q-icon name="keyboard_arrow_right" size="xs" />
                </q-item-label>
              </q-item-section>
            </q-item>
          </q-list>
          <q-item-label v-show="currLevel == 1" caption>
            请选择省（自治区、直辖市）
          </q-item-label>
          <q-item-label v-show="currLevel == 2" caption>
            请选择市（州、盟、县、区）
          </q-item-label>
          <q-item-label v-show="currLevel == 3" caption>
            请选择区（市、县、旗、街道、镇、乡）
          </q-item-label>
          <q-item-label v-show="currLevel == 4" caption>
            请选择街道（镇、乡）
          </q-item-label>
        </q-card-section>
        <q-separator />
        <q-card-section>
          <q-list>
            <q-item v-for="e in currList" :key='e.code' dense>
              <q-item-section @click='extendPcas(e.code, e.name)'>
                {{ "\n                " + e.name + "\n              " }}
              </q-item-section>
            </q-item>
          </q-list>
        </q-card-section>
      </q-card>
    </q-dialog>
    <q-field v-if="'F' == conf.type" borderless dense hide-bottom-space lazy-rules :rules='[function (e) { return !!e && e || [].length > 0 || !conf.required || readonly || "请选择"; }]' :value='modelValue' :readonly='readonly'>
      <template v-slot:control>
        <q-uploader v-if="0 == isHarmonyOS" class="full-width" flat color="grey" :url='uploader' auto-upload :filter='checkFile' :readonly='readonly' accept=".doc, .docx, .xls, .xlsx, .ppt, .pptx, .pdf, .zip, .rar, .7z, .jpg, .jpeg, .png, audio/*, image/*" @start='startUpload' @finish='finishUpload' @uploaded='afterUploaded' @rejected='onRejected' @removed='afterRemoved'>
          <template v-slot:header>
            <div class="row no-wrap items-center q-pa-sm q-gutter-xs">
              <div class="col">
                {{ "最多" + conf.fileCount + "个文件(" + conf.fileSize + "MB以内)" }}
              </div>
              <q-btn v-if="!readonly && e.canAddFiles && modelValue || [].length < conf.fileCount" type="a" icon="add_box" round dense flat>
                <q-uploader-add-trigger />
                <q-tooltip>
                  选择文件并上传
                </q-tooltip>
              </q-btn>
            </div>
          </template>
          <template v-slot:list>
            <q-list separator>
              <q-item v-for="i in e.files" :key='i.name'>
                <q-item-section>
                  <q-item-label class="full-width ellipsis cursor-pointer" @click='downloadUploaderFile(i)'>
                    {{ "\n                    " + i.name + "\n                  " }}
                  </q-item-label>
                </q-item-section>
                <q-item-section side>
                  <q-btn v-else flat dense color="negative" icon="delete" size="sm" @click='e.removeFile(i)'>
                    <q-tooltip>
                      删除
                    </q-tooltip>
                  </q-btn>
                </q-item-section>
              </q-item>
              <q-item v-for="e in matchingUploadedFiles(modelValue, e.files)" :key='e.servername'>
                <q-item-section>
                  <q-item-label class="full-width ellipsis cursor-pointer" @click='downloadFile(e.link, e.servername)'>
                    {{ "\n                    " + e.srcname + "\n                  " }}
                  </q-item-label>
                </q-item-section>
                <q-item-section side>
                  <q-btn v-else flat dense color="negative" icon="delete" size="sm" @click='removeFile(e.servername)'>
                    <q-tooltip>
                      删除
                    </q-tooltip>
                  </q-btn>
                </q-item-section>
              </q-item>
            </q-list>
          </template>
        </q-uploader>
        <q-uploader v-if="1 == isHarmonyOS" class="full-width" flat color="grey" :url='uploader' auto-upload :filter='checkFile' :readonly='readonly' @start='startUpload' @finish='finishUpload' @uploaded='afterUploaded' @removed='afterRemoved'>
          <template v-slot:header>
            <div class="row no-wrap items-center q-pa-sm q-gutter-xs">
              <div class="col">
                {{ "最多" + conf.fileCount + "个文件(" + conf.fileSize + "MB以内)" }}
              </div>
              <q-btn v-if="!readonly && e.canAddFiles && modelValue || [].length < conf.fileCount" type="a" icon="add_box" round dense flat>
                <q-uploader-add-trigger />
                <q-tooltip>
                  选择文件并上传
                </q-tooltip>
              </q-btn>
            </div>
          </template>
          <template v-slot:list>
            <q-list separator>
              <q-item v-for="i in e.files" :key='i.name'>
                <q-item-section>
                  <q-item-label class="full-width ellipsis cursor-pointer" @click='downloadUploaderFile(i)'>
                    {{ "\n                    " + i.name + "\n                  " }}
                  </q-item-label>
                </q-item-section>
                <q-item-section side>
                  <q-btn v-else flat dense color="negative" icon="delete" size="sm" @click='e.removeFile(i)'>
                    <q-tooltip>
                      删除
                    </q-tooltip>
                  </q-btn>
                </q-item-section>
              </q-item>
              <q-item v-for="e in matchingUploadedFiles(modelValue, e.files)" :key='e.servername'>
                <q-item-section>
                  <q-item-label class="full-width ellipsis cursor-pointer" @click='downloadFile(e.link, e.servername)'>
                    {{ "\n                    " + e.srcname + "\n                  " }}
                  </q-item-label>
                </q-item-section>
                <q-item-section side>
                  <q-btn v-else flat dense color="negative" icon="delete" size="sm" @click='removeFile(e.servername)'>
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
    <div v-if="riskConfInfo" class="text-orange" v-html='riskConfInfo' />
  </div>
  <neu-full-screen-image v-if="'F' == conf.type" v-model="showBigPic" :url='bigPicUrl' :name='bigPicName' />
</div>
</template>

<script>
// The exact semantic component options are preserved in the sibling .logic.js file.
// This SFC isolates the original render tree for review and manual variable renaming.
export default {
  name: "NeuWidget",
};
</script>
