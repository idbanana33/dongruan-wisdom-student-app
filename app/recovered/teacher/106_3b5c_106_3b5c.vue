<!--
  Source: assets/www/js/106.js -> webpack module "3b5c"
  Route: /teacher/sanitation/detail
  Component: 106_3b5c
  Restoration: template decompiled from Vue render function; logic in sibling .logic.js
  Confidence: high for DOM structure / medium for expression quoting
-->
<template>
<q-layout view="lHh lpr lFf">
  <q-header class="bg-grey-3 text-black">
    <q-toolbar>
      <q-btn flat round dense icon="keyboard_arrow_left" @click='goBack' />
      <q-toolbar-title>
        查寝任务详情
      </q-toolbar-title>
      <q-btn flat round dense icon="search" @click='open'>
        <q-badge v-show="condCount != 0" color="orange" floating transparent>
          {{ condCount }}
        </q-badge>
      </q-btn>
    </q-toolbar>
    <q-expansion-item class="bg-white full-width q-ml-sm" switch-toggle-side expand-icon-toggle expand-separator>
      <q-card>
        <q-card-section>
          <div class="row">
            <div>
              <span class="text-grey neu-css-after-colon">
                发起人
              </span>
              {{ sanitation.teacher_name + "\n              " }}
            </div>
            <div class="q-ml-xl">
              <span class="text-grey" />
            </div>
            <div>
              <span class="text-grey neu-css-after-colon">
                创建时间
              </span>
              {{ sanitation.create_time + "\n              " }}
            </div>
            <div>
              <span class="text-grey neu-css-after-colon">
                填写有效时间
              </span>
              {{ sanitation.begin_date + " ~ " + sanitation.end_date + "\n              " }}
            </div>
          </div>
        </q-card-section>
      </q-card>
      <template v-slot:header>
        <q-item-section>
          <q-item-label style="font-size:1.3em">
            {{ sanitation.title }}
          </q-item-label>
        </q-item-section>
        <q-item-section side>
          <q-btn flat dense icon="more_vert" size="sm" @click='drawerRight = !drawerRight' />
        </q-item-section>
      </template>
    </q-expansion-item>
  </q-header>
  <q-pull-to-refresh ref=""pageRefresh"" @refresh='refresh'>
    <q-page-container>
      <q-page class="bg-grey-3 q-py-sm">
        <q-card v-for="t in list" :key='t.id' class="bg-white q-mb-sm q-mx-sm" :style='0 == t.status ? "border-left:0.25rem solid #b5b3b3;" : "border-left:0.25rem solid #027be3;"' flat @click='goDetail(t, t.allow_edit, t.teacher_no)'>
          <q-item>
            <q-item-section>
              <q-item-label>
                <q-icon v-show="item.sex_name == '男'" name="person" color="blue" />
                <q-icon v-show="item.sex_name == '女'" name="person" color="pink" />
                {{ "\n                      " + t.teacher_name + " " }}
                <span class="text-grey">
                  {{ "(" + t.teacher_no + ")" }}
                </span>
              </q-item-label>
              <q-item-label lines="1" caption>
                {{ " " + t.dep_name + " " }}
              </q-item-label>
              <q-item-label class="q-mb-xs" caption>
                <span class="neu-css-after-colon ">
                  检查寝室
                </span>
                {{ t.room_name + "\n                    " }}
              </q-item-label>
              <q-item-label class="q-mb-xs" caption>
                <span class="neu-css-after-colon ">
                  执行日期
                </span>
                {{ t.check_date + "\n                    " }}
              </q-item-label>
              <q-item-label class="q-mb-xs" caption>
                <span class="neu-css-after-colon ">
                  创建时间
                </span>
                {{ t.create_time + "\n                    " }}
              </q-item-label>
            </q-item-section>
            <q-item-section class="q-mt-sm" side>
              <q-item-label>
                <q-icon name="keyboard_arrow_right" size="xs" />
              </q-item-label>
            </q-item-section>
          </q-item>
        </q-card>
        <div v-show="!isLoading && paging.pageCount != paging.pageNum" class="text-center text-grey q-pt-sm q-pb-md" @click='loadList(null)'>
          加载更多...
        </div>
        <div v-show="!isLoading && paging.pageCount == paging.pageNum && list.length != 0" class="text-center text-grey q-pt-sm q-pb-md">
          没有更多了
        </div>
        <div v-show="!isLoading && list.length == 0" class="text-center text-grey q-pt-sm q-pb-md">
          暂无填写数据
        </div>
        <div v-show="isLoading" class="text-center text-grey q-pt-sm q-pb-md">
          <q-spinner-dots color="primary" size="md" />
        </div>
      </q-page>
    </q-page-container>
  </q-pull-to-refresh>
  <q-dialog v-model="extendDialog" persistent>
    <q-card class="full-width" flat>
      <q-form @submit='extendSanitation'>
        <q-card-section class="text-h6">
          {{ "\n              " + 1 == sanitation.status ? "确认延期" : "确认重新开启" + "\n            " }}
        </q-card-section>
        <q-card-section>
          <div class="row items-center">
            {{ "\n                " + 1 == sanitation.status ? "延期" : "重新开启" + "截止日期至：\n                " }}
            <q-field style="width:100%" outlined dense stack-label hide-bottom-space lazy-rules :rules='[function (t) { return !!t || "请填写该项"; }, function (e) { return e >= t.sanitation.end_date || "请填写原截止日期之后的日期"; }]' :value='endDate'>
              <template v-slot:control>
                {{ endDate }}
              </template>
              <template v-slot:append>
                <q-icon class="cursor-pointer" name="event">
                  <q-popup-proxy transition-show="scale" transition-hide="scale">
                    <div>
                      <q-date v-model="endDate" flat minimal mask="YYYY-MM-DD">
                        <div class="row items-center justify-end">
                          <q-btn v-close-popup dense label="关闭" flat />
                        </div>
                      </q-date>
                    </div>
                  </q-popup-proxy>
                </q-icon>
              </template>
            </q-field>
          </div>
        </q-card-section>
        <q-card-section class="row q-gutter-sm justify-end">
          <q-btn v-close-popup outline color="grey" label="取消" />
          <q-btn unelevated color="primary" :label='1 == sanitation.status ? "延期" : "重新开启"' type="submit" />
        </q-card-section>
      </q-form>
    </q-card>
  </q-dialog>
  <q-dialog v-model="detailDialog" :maximized='true'>
    <q-card class="full-width" flat>
      <q-card-section class="row items-center justify-between">
        <div class="text-h6">
          预览
        </div>
        <q-btn v-close-popup icon="close" flat round dense size="sm" />
      </q-card-section>
      <q-separator />
      <q-card-section>
        <div class="q-mt-sm text-bold">
          {{ sanitation.title }}
        </div>
        <div class="q-mt-sm">
          <span class="text-grey neu-css-after-colon">
            发起人
          </span>
          {{ sanitation.teacher_name + "\n            " }}
        </div>
        <div>
          <span class="text-grey neu-css-after-colon">
            填写有效期间
          </span>
          {{ sanitation.begin_date + " ~ " + sanitation.end_date + "\n            " }}
        </div>
        <div class="q-mt-sm" v-html='sanitation.detail' />
      </q-card-section>
      <q-separator />
      <q-card-section>
        <div>
          <span class="text-grey neu-css-after-colon">
            允许填写人自己删除记录
          </span>
          {{ 1 === sanitation.allow_delete ? "是" : "否" + "\n            " }}
          <div style="float:right;margin-top:-7px">
            <q-toggle v-if="sanitation.is_author" v-model="sanitation.allow_delete" class="q-pa-sm" size="lg" checked-icon="check" unchecked-icon="clear" dense :false-value="0" :true-value="1" @input='changeAllowDelete' />
          </div>
        </div>
      </q-card-section>
      <q-separator />
      <q-card-section>
        <div>
          <span class="text-grey neu-css-after-colon">
            填写对象
          </span>
          <div v-if="sanitation.is_author && null !== menuInfo.edit_permit" style="float:right">
            <span class="text-grey" @click='taskTargetDialogOpen'>
              选择
            </span>
            <q-icon class="text-grey" name="keyboard_arrow_right" size="sm" />
          </div>
        </div>
        <neu-view-assigned-teacher :value='sanitation.task_target' />
      </q-card-section>
      <q-separator />
      <q-card-section>
        <div>
          <span class="text-grey neu-css-after-colon">
            共享
          </span>
          <div v-if="sanitation.is_author && null !== menuInfo.edit_permit" style="float:right">
            <span class="text-grey" @click='openShareDialog'>
              选择
            </span>
            <q-icon class="text-grey" name="keyboard_arrow_right" size="sm" />
          </div>
        </div>
        <neu-view-assigned-teacher :value='sanitation.share_target' />
      </q-card-section>
      <q-separator />
      <q-card-section>
        <div>
          <span class="text-grey neu-css-after-colon">
            寝室检查配置
          </span>
        </div>
        <div v-for="(t, a) in sanitation.info_config" :key='a' class="bg-grey-2 q-pa-sm q-mt-sm">
          <neu-widget v-model="infoModel[index]" :config='t' :viewMode='true' />
        </div>
      </q-card-section>
      <q-separator />
      <q-card-section v-show="stu_info_config_status">
        <div>
          <span class="text-grey neu-css-after-colon">
            学生个人检查配置
          </span>
        </div>
        <div v-for="(t, a) in sanitation.stu_info_config" :key='a' class="bg-grey-2 q-pa-sm q-mt-sm">
          <neu-widget v-model="stuInfoModel[index]" :config='t' :viewMode='true' />
        </div>
      </q-card-section>
    </q-card>
  </q-dialog>
  <q-dialog v-model="shareDialog" persistent fullWidth :maximized='true'>
    <div class="full-width bg-white">
      <div class="full-width row items-center justify-between q-px-md q-py-sm">
        <div class="text-bold">
          修改共享对象
        </div>
        <q-btn unelevated color="primary" label="完成" @click='updateShareTarget' />
      </div>
      <neu-assign-teacher v-model="shareTarget" />
    </div>
  </q-dialog>
  <q-dialog v-model="taskTargetDialog" persistent fullWidth :maximized='true'>
    <q-card class="full-width" flat>
      <q-toolbar>
        <div class="full-width row items-center justify-between q-px-xs q-py-sm">
          <div class="text-bold text-black">
            设置填写对象
          </div>
          <q-btn unelevated color="primary" label="完成" @click='updateActionTarget' />
        </div>
      </q-toolbar>
      <q-card-section>
        <neu-assign-teacher v-model="actionTarget" />
      </q-card-section>
    </q-card>
  </q-dialog>
  <q-drawer v-model="drawerRight" side="right" :width="200" :breakpoint="100" overlay bordered content-class="bg-white-3">
    <q-scroll-area class="fit">
      <q-list style="border-left:0.15rem solid #027be3" separator>
        <q-item v-ripple clickable @click='detailDialog = true'>
          <q-item-section avatar>
            <q-icon name="remove_red_eye" size="sm" />
          </q-item-section>
          <q-item-section style="font-size:1.1rem">
            预览任务
          </q-item-section>
        </q-item>
        <q-item v-if="1 == sanitation.status && sanitation.is_author" v-ripple clickable @click='terminateSanitation'>
          <q-item-section avatar>
            <q-icon name="check" size="sm" color="primary" />
          </q-item-section>
          <q-item-section class="text-primary" style="font-size:1.1rem">
            提前结束
          </q-item-section>
        </q-item>
        <q-item v-if="1 == sanitation.status && sanitation.is_author" v-ripple clickable @click='openExtendDialog'>
          <q-item-section avatar>
            <q-icon name="access_time" size="sm" color="primary" />
          </q-item-section>
          <q-item-section class="text-primary" style="font-size:1.1rem">
            延期
          </q-item-section>
        </q-item>
        <q-item v-if="sanitation.is_author" v-ripple clickable @click='copyApply'>
          <q-item-section avatar>
            <q-icon name="content_copy" size="sm" color="primary" />
          </q-item-section>
          <q-item-section class="text-primary" style="font-size:1.1rem">
            复制
          </q-item-section>
        </q-item>
        <q-item v-if="0 == sanitation.status && sanitation.is_author" v-ripple clickable @click='openExtendDialog'>
          <q-item-section avatar>
            <q-icon name="refresh" size="sm" color="primary" />
          </q-item-section>
          <q-item-section class="text-primary" style="font-size:1.1rem">
            重新开启
          </q-item-section>
        </q-item>
        <q-item v-if="sanitation.is_author || 'A' == roleId" v-ripple clickable @click='deleteSanitation'>
          <q-item-section avatar>
            <q-icon name="delete" size="sm" color="red" />
          </q-item-section>
          <q-item-section class="text-red" style="font-size:1.1rem">
            删除
          </q-item-section>
        </q-item>
        <q-item v-ripple clickable @click='exportList'>
          <q-item-section avatar>
            <q-icon name="get_app" size="sm" />
          </q-item-section>
          <q-item-section style="font-size:1.1rem">
            导出
          </q-item-section>
        </q-item>
      </q-list>
    </q-scroll-area>
  </q-drawer>
  <q-dialog v-model="dialog" position="bottom">
    <q-card style="width:350px">
      <q-linear-progress :value="1" color="primary" />
      <q-card-section class="row items-center justify-between" dense>
        <q-btn outline label="取消" color="grey" size="md" @click='close()' />
        <q-btn unelevated label="确定" color="primary" size="md" @click='getCondition' />
      </q-card-section>
      <q-separator />
      <q-list bordered>
        <q-item clickable>
          <q-item-section avatar top>
            <span>
              任务状态
            </span>
          </q-item-section>
          <q-item-section>
            <div class="row justify-evenly">
              <q-btn v-for="t in [{ label: '已提交', value: '1' }, { label: '暂存', value: '0' }]" :key='t.value' outline :color='t.value == queryModel.status ? "primary" : "grey"' @click='getValue(t.value)'>
                {{ "\n                        " + t.label + "\n                        " }}
                <q-badge v-show="queryModel.status == item.value" color="orange" floating>
                  √
                </q-badge>
              </q-btn>
            </div>
          </q-item-section>
        </q-item>
        <q-separator />
        <q-item v-ripple clickable>
          <q-item-section avatar top>
            <span>
              综合查询
            </span>
          </q-item-section>
          <q-item-section>
            <q-input v-model="queryModel.mutli_search" outlined clearable dense />
            <q-item-label style="margin-top:4px" caption>
              可以查寝寝室、教工号、院系
            </q-item-label>
          </q-item-section>
        </q-item>
      </q-list>
    </q-card>
  </q-dialog>
  <q-page-sticky v-if="show_createNew" position="bottom-right" :offset='fabPos' @click='createNew()'>
    <q-btn v-touch-pan.prevent.mouse.prevent.mouse="moveFab" round color="primary" icon="edit" />
  </q-page-sticky>
  <neu-export-data :config='exportCompConfig' />
</q-layout>
</template>

<script>
// The exact semantic component options are preserved in the sibling .logic.js file.
// This SFC isolates the original render tree for review and manual variable renaming.
export default {
  name: "106_3b5c",
};
</script>
