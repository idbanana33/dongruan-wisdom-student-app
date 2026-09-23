<!--
  Source: assets/www/js/70.js -> webpack module "e90c"
  Route: /teacher/composite/index
  Component: compositeIndex
  Restoration: template decompiled from Vue render function; logic in sibling .logic.js
  Confidence: high for DOM structure / medium for expression quoting
-->
<template>
<q-layout view="lHh lpr lFf">
  <q-header class="bg-grey-3 text-black">
    <q-toolbar>
      <q-btn flat round dense icon="keyboard_arrow_left" @click='goBack' />
      <q-toolbar-title>
        {{ menuInfo.title }}
      </q-toolbar-title>
      <q-btn flat round dense icon="search" @click='open'>
        <q-badge v-show="condCount != 0" color="orange" floating transparent>
          {{ condCount }}
        </q-badge>
      </q-btn>
    </q-toolbar>
  </q-header>
  <q-dialog v-model="dialog" position="bottom">
    <q-card style="width:350px">
      <q-linear-progress :value="1" color="primary" />
      <q-card-section class="row items-center justify-between" dense>
        <q-btn outline label="取消" color="grey" size="md" @click='close()' />
        <q-btn unelevated label="确定" color="primary" size="md" @click='getCondition' />
      </q-card-section>
      <q-separator />
      <q-list bordered>
        <q-item v-ripple clickable>
          <q-item-section avatar top>
            <span>
              综合查询
            </span>
          </q-item-section>
          <q-item-section>
            <q-input v-model="queryModel.mutli_search" outlined clearable dense />
            <q-item-label style="margin-top:4px" caption>
              可以查询组合名称
            </q-item-label>
          </q-item-section>
        </q-item>
      </q-list>
    </q-card>
  </q-dialog>
  <q-pull-to-refresh ref=""pageRefresh"" @refresh='refresh'>
    <q-page-container>
      <q-page class="bg-grey-3 q-pb-sm">
        <q-card v-for="t in list" :key='t.id' class="bg-white q-mb-sm q-mx-sm" :style='"border-left:0.25rem solid #" + menuColor' flat @click='goDetail(t.id)'>
          <q-item>
            <q-item-section>
              <q-item-label class="text-subtitle1 row items-center">
                {{ "\n                    " + t.title + "\n                  " }}
              </q-item-label>
              <q-item-label class="q-mb-xs" caption>
                <span class="neu-css-after-colon">
                  创建人
                </span>
                {{ t.name + "\n                  " }}
              </q-item-label>
              <q-item-label style="min-width:250px" caption lines="1">
                <span class="neu-css-after-colon ">
                  创建时间
                </span>
                {{ t.create_time + "\n                  " }}
              </q-item-label>
            </q-item-section>
            <q-item-section side>
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
          {{ "\n              暂无" + menuInfo.title + "\n            " }}
        </div>
        <div v-show="isLoading" class="text-center text-grey q-pt-sm q-pb-md">
          <q-spinner-dots color="primary" size="md" />
        </div>
        <q-dialog v-model="newDialog" :maximized='maximizedToggle'>
          <q-card class="full-width" flat>
            <q-card-section class="row items-center justify-between">
              <div class="text-h6">
                新建组合
              </div>
              <q-btn v-close-popup icon="close" flat round dense size="sm" />
            </q-card-section>
            <q-form @submit='saveNewComposite()'>
              <q-card-section>
                <q-list>
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
                    <q-item-section avatar>
                      <q-item-label>
                        共享对象
                      </q-item-label>
                      <q-item-label caption>
                        {{ "将" + menuInfo.title + "共享给其他老师" }}
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
                </q-list>
              </q-card-section>
              <q-card-section class="q-gutter-sm row justify-end">
                <q-btn outline color="grey" label="取消" @click='newDialog = false' />
                <q-btn unelevated color="primary" label="完成" type="submit" />
              </q-card-section>
            </q-form>
          </q-card>
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
      </q-page>
    </q-page-container>
  </q-pull-to-refresh>
  <q-page-sticky v-if="menuInfo.edit_permit" position="bottom-right" :offset='fabPos'>
    <q-btn v-touch-pan.prevent.mouse.prevent.mouse="moveFab" round color="primary" icon="add" @click='addComposite' />
  </q-page-sticky>
</q-layout>
</template>

<script>
// The exact semantic component options are preserved in the sibling .logic.js file.
// This SFC isolates the original render tree for review and manual variable renaming.
export default {
  name: "compositeIndex",
};
</script>
