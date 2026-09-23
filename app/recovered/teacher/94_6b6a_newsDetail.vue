<!--
  Source: assets/www/js/94.js -> webpack module "6b6a"
  Route: /teacher/news/detail
  Component: newsDetail
  Restoration: template decompiled from Vue render function; logic in sibling .logic.js
  Confidence: high for DOM structure / medium for expression quoting
-->
<template>
<q-layout v-if="menuInfo" view="lHh lpr lFf">
  <q-header class="bg-grey-3 text-black">
    <q-toolbar>
      <q-btn flat round dense icon="keyboard_arrow_left" @click='goBack' />
      <q-toolbar-title>
        {{ menuInfo.title + "详情" }}
      </q-toolbar-title>
    </q-toolbar>
    <q-expansion-item v-if="'A' == roleId || news.is_author" class="bg-white full-width q-ml-sm" switch-toggle-side expand-icon-toggle expand-separator>
      <q-card>
        <q-card-section>
          <div class="row">
            <div>
              <span class="text-grey neu-css-after-colon">
                发布者
              </span>
              {{ news.name + "\n            " }}
            </div>
          </div>
          <div class="row">
            <div class="col-12">
              <span class="text-grey neu-css-after-colon">
                发布时间
              </span>
              {{ news.create_time + "\n            " }}
            </div>
          </div>
          <div class="row">
            <div class="col-12">
              <span class="text-grey neu-css-after-colon">
                结束时间
              </span>
              {{ null == news.banner_end_date ? "未设置" : news.banner_end_date + "\n            " }}
            </div>
          </div>
          <div class="row">
            <div class="col-6">
              <span class="text-grey neu-css-after-colon">
                推送教师
              </span>
              {{ news.push_teacher + "\n            " }}
            </div>
            <div class="col-6">
              <span class="text-grey neu-css-after-colon">
                推送在籍学生
              </span>
              {{ news.push_student + "\n            " }}
            </div>
          </div>
          <div v-if="'' != news.link && null != news.link" class="row">
            <div>
              <span class="text-grey neu-css-after-colon">
                链接新闻
              </span>
              <span v-if="'' != news.link && null != news.link" style="color:blue" @click='openLink'>
                {{ news.link }}
              </span>
            </div>
          </div>
          <div v-if="'' !== news.dep_name && null !== news.dep_name" class="row">
            <div class="col-12">
              <span class="text-grey neu-css-after-colon">
                发布单位
              </span>
              {{ news.dep_name + "\n            " }}
            </div>
          </div>
        </q-card-section>
      </q-card>
      <template v-slot:header>
        <q-item-section>
          <q-item-label style="font-size:1.3em">
            {{ news.title }}
          </q-item-label>
        </q-item-section>
        <q-item-section side>
          <q-btn flat dense icon="more_vert" size="sm" @click='drawerRight = !drawerRight' />
        </q-item-section>
      </template>
    </q-expansion-item>
  </q-header>
  <q-page-container>
    <q-page class="bg-grey-3 q-py-sm">
      <q-card class="bg-white q-mb-sm q-mx-sm" flat>
        <q-card-section v-else class="text-center">
          <h5>
            {{ news.title }}
          </h5>
        </q-card-section>
        <q-card-section v-else class="text-right text-grey">
          <div>
            {{ "发布者：" + news.name }}
          </div>
          <div v-if="null !== news.dep_name">
            {{ "发布单位：" + news.dep_name }}
          </div>
          <div>
            {{ "发布时间：" + news.create_time }}
          </div>
        </q-card-section>
        <q-card-section>
          <q-editor v-if="'' !== news.detail && null !== news.detail" v-model="news.detail" flat min-height="10em" readonly :toolbar='[]' hide-bottom-space />
        </q-card-section>
        <q-card-section class="text-right">
          <span class="text-grey">
            {{ "阅读量：" + count }}
          </span>
        </q-card-section>
      </q-card>
    </q-page>
  </q-page-container>
  <q-drawer v-model="drawerRight" side="right" :width="200" :breakpoint="100" overlay bordered content-class="bg-white-3">
    <q-scroll-area class="fit">
      <q-list style="border-left:0.15rem solid #027be3" separator>
        <q-item v-else v-ripple clickable @click='openExtendDialog'>
          <q-item-section avatar>
            <q-icon name="access_time" size="sm" color="primary" />
          </q-item-section>
          <q-item-section class="text-primary" style="font-size:1.1rem">
            延期
          </q-item-section>
        </q-item>
        <q-item v-if="'0' == news.status_color && news.is_author" v-ripple clickable @click='openExtendDialog'>
          <q-item-section avatar>
            <q-icon name="access_time" size="sm" color="primary" />
          </q-item-section>
          <q-item-section class="text-primary" style="font-size:1.1rem">
            设置结束时间
          </q-item-section>
        </q-item>
        <q-item v-if="news.is_author || 'A' == roleId" v-ripple clickable @click='deleteNews'>
          <q-item-section avatar>
            <q-icon name="delete" size="sm" color="red" />
          </q-item-section>
          <q-item-section class="text-red" style="font-size:1.1rem">
            删除
          </q-item-section>
        </q-item>
      </q-list>
    </q-scroll-area>
  </q-drawer>
  <q-dialog v-model="extendDialog" persistent>
    <q-card class="full-width" flat>
      <q-form @submit='updateDate'>
        <q-card-section class="text-h6">
          {{ "\n              " + "1" == news.status_color ? "确认延期" : "设置结束时间" + "\n            " }}
        </q-card-section>
        <q-card-section>
          <div class="row items-center">
            {{ "\n                " + "1" == news.status_color ? "延期" : "设置" + "结束日期至：\n                " }}
            <q-field style="width:200px" outlined dense stack-label hide-bottom-space lazy-rules :rules='[function (e) { return !!e || "请填写该项"; }, function (t) { return t >= e.news.banner_end_date || "请填写原截止日期之后或未来的日期，新设置不能设置今天"; }]' :value='endDate'>
              <template v-slot:control>
                {{ endDate }}
              </template>
              <template v-slot:append>
                <q-icon class="cursor-pointer" name="event">
                  <q-popup-proxy transition-show="scale" transition-hide="scale">
                    <div>
                      <q-date v-model="endDate" flat minimal mask="YYYY-MM-DD HH:mm">
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
                      <q-time v-model="endDate" flat mask="YYYY-MM-DD HH:mm" format24h>
                        <div class="row items-center justify-end">
                          <q-btn v-close-popup dense label="关闭" flat />
                        </div>
                      </q-time>
                    </div>
                  </q-popup-proxy>
                </q-icon>
              </template>
            </q-field>
            <span class="text-grey text-caption">
              设置该新闻在app主页中轮播的结束时间，不设置则不在app轮播中显示
            </span>
          </div>
        </q-card-section>
        <q-card-section class="row q-gutter-sm justify-end">
          <q-btn outline color="grey" label="取消" @click='closeDialog()' />
          <q-btn unelevated color="primary" :label='"1" == news.status_color ? "延期" : "设置"' type="submit" />
        </q-card-section>
      </q-form>
    </q-card>
  </q-dialog>
</q-layout>
<q-layout v-else v-else>
  <q-card style="height:3.5rem;align-items:center;display:flex;justify-content:center" flat>
    无访问权限
  </q-card>
</q-layout>
</template>

<script>
// The exact semantic component options are preserved in the sibling .logic.js file.
// This SFC isolates the original render tree for review and manual variable renaming.
export default {
  name: "newsDetail",
};
</script>
