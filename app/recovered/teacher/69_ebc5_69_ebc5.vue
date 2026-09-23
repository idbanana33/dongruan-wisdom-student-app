<!--
  Source: assets/www/js/69.js -> webpack module "ebc5"
  Route: /teacher/composite/detail
  Component: 69_ebc5
  Restoration: template decompiled from Vue render function; logic in sibling .logic.js
  Confidence: high for DOM structure / medium for expression quoting
-->
<template>
<q-layout view="lHh lpr lFf">
  <q-header class="bg-grey-3 text-black">
    <q-toolbar>
      <q-btn flat round dense icon="keyboard_arrow_left" @click='goBack' />
      <q-toolbar-title>
        组合任务详情
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
              {{ record.name + "\n            " }}
            </div>
            <div class="q-ml-xl">
              <span class="text-grey" />
            </div>
            <div>
              <span class="text-grey neu-css-after-colon">
                创建时间
              </span>
              {{ record.create_time + "\n            " }}
            </div>
          </div>
        </q-card-section>
      </q-card>
      <template v-slot:header>
        <q-item-section>
          <q-item-label style="font-size:1.3em">
            {{ record.title }}
          </q-item-label>
        </q-item-section>
        <q-item-section side>
          <q-btn flat dense icon="more_vert" size="sm" @click='drawerRight = !drawerRight' />
        </q-item-section>
      </template>
    </q-expansion-item>
    <q-separator />
  </q-header>
  <q-pull-to-refresh ref=""pageRefresh"" @refresh='refresh'>
    <q-page-container>
      <q-page class="bg-grey-3 q-py-sm">
        <q-card v-for="e in list" :key='e.id' class="bg-white q-mb-sm q-mx-sm" :style='"border-left:0.25rem solid #" + menuColor' flat>
          <q-item>
            <q-item-section>
              <q-item-label lines="1" caption>
                {{ " " + e.dep_name + " " }}
              </q-item-label>
              <q-item-label class="q-mb-xs" caption>
                <span class="neu-css-after-colon ">
                  任务名称
                </span>
                {{ e.title + "\n                  " }}
              </q-item-label>
              <q-item-label class="q-mb-xs" caption>
                <span class="neu-css-after-colon ">
                  类型
                </span>
                {{ e.typetitle + "\n                  " }}
              </q-item-label>
              <q-item-label class="q-mb-xs" caption>
                <span class="neu-css-after-colon ">
                  创建时间
                </span>
                {{ e.create_time + "\n                  " }}
              </q-item-label>
            </q-item-section>
            <q-item-section side>
              <q-item-label>
                <span class="text-primary" @click='openEditDialog(e.id, e.allow_edit, e.typename)'>
                  查看
                  <q-icon name="keyboard_arrow_right" size="sm" />
                </span>
              </q-item-label>
              <q-item-label v-if="record.teacher_no == userInfo.login_name">
                <span class="text-primary" @click='newTaskOpenDialog(e.id, e.typename, e.frequency)'>
                  发布新任务
                  <q-icon name="keyboard_arrow_right" size="sm" />
                </span>
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
          暂无任务
        </div>
        <div v-show="isLoading" class="text-center text-grey q-pt-sm q-pb-md">
          <q-spinner-dots color="primary" size="md" />
        </div>
      </q-page>
    </q-page-container>
  </q-pull-to-refresh>
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
        <q-item v-if="cCreate" v-ripple clickable @click='deleteComposite'>
          <q-item-section avatar>
            <q-icon name="delete" size="sm" color="red" />
          </q-item-section>
          <q-item-section class="text-red" style="font-size:1.1rem">
            删除
          </q-item-section>
        </q-item>
        <q-item v-if="cCreate" v-ripple clickable @click='exportList'>
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
              可以查询任务名称和类型
            </q-item-label>
          </q-item-section>
        </q-item>
      </q-list>
    </q-card>
  </q-dialog>
  <q-dialog v-model="newDialog">
    <q-card class="full-width" flat>
      <q-card-section class="row items-center justify-between">
        <div class="text-h6">
          新建
        </div>
        <q-btn v-close-popup icon="close" flat round dense size="sm" />
      </q-card-section>
      <q-card-section class="q-pt-none">
        <q-list class="q-gutter-sm" separator>
          <q-btn v-for="(e, i) in resNewList" :key='i' :color='e.color' @click='goNewLink(e.id)'>
            {{ e.title }}
          </q-btn>
        </q-list>
      </q-card-section>
    </q-card>
  </q-dialog>
  <q-dialog v-model="newTaskDialog">
    <q-card class="full-width" flat>
      <q-card-section class="row items-center justify-between">
        <div class="text-h6">
          获取对象发布
        </div>
        <q-btn v-close-popup icon="close" flat round dense size="sm" />
      </q-card-section>
      <q-card-section class="q-pt-none">
        <q-list bordered separator>
          <q-item v-for="(e, i) in taskTargetList" v-ripple :key='i' clickable @click='newTask(e.type)'>
            <q-item-section>
              {{ e.title }}
              <q-tooltip>
                点击去发布
              </q-tooltip>
            </q-item-section>
          </q-item>
        </q-list>
      </q-card-section>
    </q-card>
  </q-dialog>
  <q-dialog v-model="batchNoDialog">
    <q-card class="full-width" flat>
      <q-card-section class="row items-center justify-between">
        <div class="text-h6">
          选择时间段
        </div>
        <q-btn v-close-popup icon="close" flat round dense size="sm" />
      </q-card-section>
      <q-card-section class="q-pt-none">
        <q-select v-model="rowInfo.batch_no" outlined dense option-value="batch_no" option-label="label" emit-value map-options :options='batchNoList' />
      </q-card-section>
      <q-card-actions align="right">
        <q-btn unelevated color="primary" label="确认" @click='openSelectTaskDialog' />
      </q-card-actions>
    </q-card>
  </q-dialog>
  <q-dialog v-model="deleteDialog">
    <q-card class="full-width" flat>
      <q-card-section class="row items-center justify-between">
        <div class="text-h6">
          确定删除
        </div>
        <q-btn v-close-popup icon="close" flat round dense size="sm" />
      </q-card-section>
      <q-card-section class="q-pt-none">
        <span class="text-red">
          组合任务包含
        </span>
        <span v-for="(e, i) in typeListCount" :key='e.type' class="text-red">
          {{ e.typetitle + e.count + "个" }}
          <span>
            {{ i !== typeListCount.length - 1 ? "," : "。" }}
          </span>
        </span>
        <span class="text-red">
          任务及其下面的数据也会被删除！
        </span>
      </q-card-section>
      <q-card-actions align="right">
        <q-btn unelevated color="red" label="确认" @click='deleteSure' />
      </q-card-actions>
    </q-card>
  </q-dialog>
  <q-dialog v-model="detailDialog" :maximized='maximizedToggle'>
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
          {{ record.title }}
        </div>
        <div class="q-mt-sm">
          <span class="text-grey neu-css-after-colon">
            创建人
          </span>
          {{ record.name + "\n        " }}
        </div>
        <div>
          <span class="text-grey neu-css-after-colon">
            创建时间
          </span>
          {{ record.create_time + "\n        " }}
        </div>
        <div class="q-mt-sm" v-html='record.detail' />
        <div v-if="record.attachment && 0 != record.attachment.length" class="q-mt-sm" :class='record.attachment && 1 == record.attachment.length ? "row" : ""'>
          <div class="text-grey neu-css-after-colon">
            附件
          </div>
          <div>
            <div v-for="e in record.attachment" :key='e.servername' class="cursor-pointer" @click='downloadFile(e.link, e.srcname)'>
              {{ e.srcname }}
            </div>
          </div>
        </div>
      </q-card-section>
      <q-separator />
      <q-card-section>
        <div>
          <span class="text-grey neu-css-after-colon">
            共享
          </span>
          <div v-if="record.teacher_no == userInfo.login_name" style="float:right">
            <span class="text-grey" @click='openShareDialog'>
              选择
            </span>
            <q-icon class="text-grey" name="keyboard_arrow_right" size="sm" />
          </div>
        </div>
        <neu-view-assigned-teacher :value='record.share_target' />
      </q-card-section>
    </q-card>
  </q-dialog>
  <q-dialog v-model="shareDialog" persistent fullWidth :maximized='maximizedToggle'>
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
  <q-page-sticky v-if="record.teacher_no == userInfo.login_name" position="bottom-right" :offset='fabPos' @click='openNewDialog(1)'>
    <q-btn v-touch-pan.prevent.mouse.prevent.mouse="moveFab" round color="primary" icon="add" />
  </q-page-sticky>
  <neu-export-data :config='exportCompConfig' />
</q-layout>
</template>

<script>
// The exact semantic component options are preserved in the sibling .logic.js file.
// This SFC isolates the original render tree for review and manual variable renaming.
export default {
  name: "69_ebc5",
};
</script>
