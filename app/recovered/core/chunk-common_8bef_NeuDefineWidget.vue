<!--
  Source: assets/www/js/chunk-common.js -> webpack module "8bef"
  Route: (shared/core)
  Component: NeuDefineWidget
  Restoration: template decompiled from Vue render function; logic in sibling .logic.js
  Confidence: high for DOM structure / medium for expression quoting
-->
<template>
<q-form class="full-width" @submit='submit'>
  <q-list separator>
    <q-item>
      <q-item-section avatar>
        <q-item-label class="neu-css-before-red-asterisk">
          标题
        </q-item-label>
      </q-item-section>
      <q-item-section>
        <q-input v-model="modelValue.label" outlined dense hide-bottom-space lazy-rules :rules='[function (t) { return checkLabel(t); }]' />
      </q-item-section>
    </q-item>
    <q-item>
      <q-item-section avatar>
        <q-item-label>
          说明文字
        </q-item-label>
      </q-item-section>
      <q-item-section>
        <q-input v-model="modelValue.hint" outlined dense />
      </q-item-section>
    </q-item>
    <q-item>
      <q-item-section avatar>
        <q-item-label class="neu-css-before-red-asterisk">
          是否必须
        </q-item-label>
      </q-item-section>
      <q-item-section />
      <q-item-section side>
        <q-toggle v-model="modelValue.required" checked-icon="check" unchecked-icon="clear" />
      </q-item-section>
    </q-item>
    <q-item>
      <q-item-section avatar>
        <q-item-label class="neu-css-before-red-asterisk">
          类型
        </q-item-label>
      </q-item-section>
      <q-item-section>
        <q-select v-model="modelValue.type" outlined dense :options='widgetList' emit-value map-options @input='changeType' />
      </q-item-section>
    </q-item>
    <q-item v-if="'T' == modelValue.type">
      <q-item-section avatar>
        最多填写
      </q-item-section>
      <q-item-section>
        <q-input v-model="modelValue.maxLength" outlined dense type="number" input-class="text-right" hide-bottom-space lazy-rules :rules='[function (t) { return checkMaxLengthMinLength(t, "max"); }]' />
      </q-item-section>
    </q-item>
    <q-item v-if="'T' == modelValue.type">
      <q-item-section avatar>
        最少填写
      </q-item-section>
      <q-item-section>
        <q-input v-model="modelValue.minLength" outlined dense type="number" input-class="text-right" hide-bottom-space lazy-rules :rules='[function (t) { return checkMaxLengthMinLength(t, "min"); }]' />
      </q-item-section>
    </q-item>
    <q-item v-if="'T' == modelValue.type">
      <q-item-section avatar>
        允许多行
      </q-item-section>
      <q-item-section />
      <q-item-section side>
        <q-toggle v-model="modelValue.isTextarea" checked-icon="check" unchecked-icon="clear" />
      </q-item-section>
    </q-item>
    <q-item v-if="'N' == modelValue.type">
      <q-item-section avatar>
        最大值
      </q-item-section>
      <q-item-section>
        <q-input v-model="modelValue.maxValue" outlined dense type="number" :step='numberStep' input-class="text-right" hide-bottom-space lazy-rules :rules='[function (t) { return checkMaxValueMinValue(t, "max"); }]' />
      </q-item-section>
    </q-item>
    <q-item v-if="'N' == modelValue.type">
      <q-item-section avatar>
        最小值
      </q-item-section>
      <q-item-section>
        <q-input v-model="modelValue.minValue" outlined dense type="number" :step='numberStep' input-class="text-right" hide-bottom-space lazy-rules :rules='[function (t) { return checkMaxValueMinValue(t, "min"); }]' />
      </q-item-section>
    </q-item>
    <q-item v-if="'N' == modelValue.type">
      <q-item-section avatar>
        允许小数
      </q-item-section>
      <q-item-section />
      <q-item-section side>
        <q-toggle v-model="modelValue.isDecimal" checked-icon="check" unchecked-icon="clear" />
      </q-item-section>
    </q-item>
    <q-item v-if="'N' == modelValue.type && modelValue.isDecimal">
      <q-item-section avatar>
        小数位数
      </q-item-section>
      <q-item-section>
        <q-input v-model="modelValue.decimalPlaces" outlined dense type="number" input-class="text-right" hide-bottom-space lazy-rules :rules='[function (t) { return checkDecimalPlaces(t); }]' />
      </q-item-section>
    </q-item>
    <q-item v-if="'R' == modelValue.type">
      <q-item-section avatar>
        展现形式
      </q-item-section>
      <q-item-section>
        <q-select v-model="modelValue.selectPattern" outlined dense :options='[{ value: "R", label: "单选按钮" }, { value: "S", label: "下拉框" }]' emit-value map-options />
      </q-item-section>
    </q-item>
    <q-item v-if="'R' == modelValue.type || 'C' == modelValue.type">
      <q-item-section avatar>
        选项
      </q-item-section>
      <q-item-section />
      <q-item-section class="text-primary" side @click='addOption'>
        添加选项
      </q-item-section>
    </q-item>
    <q-item v-for="(t, a) in 'R' == modelValue.type || 'C' == modelValue.type ? options : []" :key='a'>
      <q-item-section avatar>
        <q-btn v-show="index != 0" flat dense size="sm" color="primary" icon="arrow_drop_up" @click='moveOption(a, "up")'>
          <q-tooltip>
            上移
          </q-tooltip>
        </q-btn>
        <q-btn v-show="index != options.length - 1" flat dense size="sm" color="primary" icon="arrow_drop_down" @click='moveOption(a, "down")'>
          <q-tooltip>
            下移
          </q-tooltip>
        </q-btn>
      </q-item-section>
      <q-item-section>
        <q-input v-model="options[index]" outlined dense hide-bottom-space lazy-rules :rules='[function (e) { return !!e || "请填写该项"; }, function (t) { return checkOption(t, a); }]'>
          <template v-slot:prepend>
            <span class="text-body2">
              {{ "选项" + a + 1 }}
            </span>
          </template>
        </q-input>
      </q-item-section>
      <q-item-section side>
        <q-btn v-show="options.length > 1" flat dense size="sm" color="negative" icon="delete" @click='deleteOption(a)'>
          <q-tooltip>
            删除
          </q-tooltip>
        </q-btn>
      </q-item-section>
    </q-item>
    <q-item v-if="'R' == modelValue.type && 'R' == modelValue.selectPattern || 'C' == modelValue.type">
      <q-item-section avatar>
        添加[其他]项
      </q-item-section>
      <q-item-section />
      <q-item-section side>
        <q-toggle v-model="modelValue.isOther" checked-icon="check" unchecked-icon="clear" />
      </q-item-section>
    </q-item>
    <q-item v-if="'D' == modelValue.type">
      <q-item-section avatar>
        时间维度
      </q-item-section>
      <q-item-section>
        <q-select v-model="modelValue.dtPattern" outlined dense :options='[{ value: "D", label: "日期" }, { value: "T", label: "时分" }, { value: "DT", label: "日期+时分" }]' emit-value map-options />
      </q-item-section>
    </q-item>
    <q-item v-if="'F' == modelValue.type">
      <q-item-section avatar>
        最大上传数量
      </q-item-section>
      <q-item-section>
        <q-input v-model="modelValue.fileCount" outlined dense type="number" input-class="text-right" hide-bottom-space lazy-rules :rules='[function (t) { return checkFileCount(t); }]' />
      </q-item-section>
    </q-item>
    <q-item v-if="'F' == modelValue.type">
      <q-item-section avatar>
        单个文件大小
      </q-item-section>
      <q-item-section>
        <q-input v-model="modelValue.fileSize" outlined dense type="number" input-class="text-right" hide-bottom-space lazy-rules :rules='[function (t) { return checkFileSize(t); }]' />
      </q-item-section>
    </q-item>
    <q-item v-if="'F' == modelValue.type">
      <q-item-section avatar>
        文件类型
      </q-item-section>
      <q-item-section>
        <q-field borderless dense hide-bottom-space lazy-rules :rules='[function (e) { return !!e && e.length > 0 || "请至少选择一项"; }]' :value='modelValue.fileExts'>
          <template v-slot:control>
            <q-checkbox v-for="t in $appConf.fileExts" v-model="modelValue.fileExts" :key='t' class="q-mr-sm" dense :val='t' :label='t' />
            <q-checkbox v-for="t in $appConf.pictureExts" v-model="modelValue.fileExts" :key='t' class="q-mr-sm" dense :val='t' :label='t' />
          </template>
        </q-field>
      </q-item-section>
    </q-item>
    <q-item v-else>
      <q-item-section avatar>
        风险提示
      </q-item-section>
      <q-item-section>
        开启审核时风险提示功能
      </q-item-section>
      <q-item-section side>
        <q-toggle v-model="riskMode" checked-icon="check" unchecked-icon="clear" />
      </q-item-section>
    </q-item>
    <q-item v-if="isRisk && ('R' == modelValue.type || 'C' == modelValue.type) && riskMode">
      <q-item-section avatar>
        风险提示选项
      </q-item-section>
      <q-item-section>
        <q-checkbox v-for="t in options || [].reduce(function (e, t) { return t ? e.concat(t) : e; }, [])" v-model="riskConfig" :key='t' class="q-mr-sm" dense :val='t' :label='t' color="orange" />
      </q-item-section>
    </q-item>
    <q-item v-if="isRisk && ('A' == modelValue.type || 'T' == modelValue.type) && riskMode">
      <q-item-section avatar>
        风险提示数据
      </q-item-section>
      <q-item-section>
        <q-input v-model="riskConfig" outlined dense type="textarea" :placeholder='"一行数据为一个匹配项（用户" + ("A" == modelValue.type ? "选择的地区" : "输入的内容") + "包含匹配项文本即算匹配成功）。"' color="orange" />
      </q-item-section>
    </q-item>
    <q-item v-if="isRisk && 'N' == modelValue.type && riskMode">
      <q-item-section avatar>
        风险提示区间
      </q-item-section>
      <q-item-section>
        <q-input v-model="riskConfig.max" ref=""riskMax"" outlined dense type="number" :step='numberStep' input-class="text-right" placeholder="上限值" hide-bottom-space color="orange" />
        <q-input v-model="riskConfig.min" outlined dense type="number" :step='numberStep' input-class="text-right" placeholder="下限值" hide-bottom-space lazy-rules :rules='[function (t) { return checkRiskMaxValueMinValue(t); }]' color="orange" />
      </q-item-section>
    </q-item>
    <q-item>
      <q-item-section>
        <q-item-label class="full-width q-gutter-sm row justify-end">
          <q-btn outline color="grey" label="取消" @click='cancel' />
          <q-btn unelevated color="primary" label="确定" type="submit" />
        </q-item-label>
      </q-item-section>
    </q-item>
  </q-list>
</q-form>
</template>

<script>
// The exact semantic component options are preserved in the sibling .logic.js file.
// This SFC isolates the original render tree for review and manual variable renaming.
export default {
  name: "NeuDefineWidget",
};
</script>
