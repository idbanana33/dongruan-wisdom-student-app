<!--
  Source: assets/www/js/96.js -> webpack module "8087"
  Route: /teacher/news/new
  Component: newsNew
  Restoration: template decompiled from Vue render function; logic in sibling .logic.js
  Confidence: high for DOM structure / medium for expression quoting
-->
<template>
<q-layout view="lHh lpr lFf">
  <q-header class="bg-grey-3 text-black">
    <q-toolbar>
      <q-btn flat round dense icon="keyboard_arrow_left" @click='goBack' />
      <q-toolbar-title>
        {{ "新建" + menuInfo.title }}
      </q-toolbar-title>
    </q-toolbar>
    <q-separator />
  </q-header>
  <q-page-container>
    <q-page class="bg-white-3">
      <q-form class="q-gutter-sm full-width" @submit='saveNews'>
        <q-card v-if="menuInfo" class="full-width" flat>
          <q-list>
            <q-item>
              <q-item-section>
                <q-item-label class="text-bold">
                  新闻内容
                </q-item-label>
              </q-item-section>
            </q-item>
            <q-separator />
            <q-item>
              <q-item-section avatar>
                <div class="neu-css-before-red-asterisk">
                  标题
                </div>
              </q-item-section>
              <q-item-section>
                <q-input v-model="news.title" outlined dense hide-bottom-space lazy-rules :rules='[function (e) { return !!e || "请填写该项"; }]' />
              </q-item-section>
            </q-item>
            <q-separator />
            <q-item>
              <q-item-section avatar>
                <div>
                  发布单位
                </div>
              </q-item-section>
              <q-item-section>
                <q-select v-model="news.dep_no" outlined emit-value map-options dense :options='depoptions' clearable />
              </q-item-section>
            </q-item>
            <q-separator />
            <q-item>
              <q-item-section avatar>
                <div>
                  添加链接新闻
                </div>
              </q-item-section>
              <q-item-section />
              <q-item-section side>
                <q-toggle v-model="news.external_flag" size="lg" checked-icon="check" unchecked-icon="clear" dense false-value="0" true-value="1" />
              </q-item-section>
            </q-item>
            <q-separator />
            <q-item v-if="'0' == news.external_flag">
              <q-item-section>
                <q-item-label class="neu-css-before-red-asterisk q-my-sm">
                  正文
                </q-item-label>
                <q-editor v-model="news.detail" :toolbar='editorToolBar' :fonts='editorFonts' min-height="8em" hide-bottom-space lazy-rules :rules='[function (e) { return !!e || "请填写该项"; }]' />
              </q-item-section>
            </q-item>
            <q-separator v-if="'0' == news.external_flag" />
            <q-item v-if="'1' == news.external_flag">
              <q-item-section avatar>
                <div class="neu-css-before-red-asterisk">
                  链接新闻
                </div>
              </q-item-section>
              <q-item-section>
                <q-input v-model="news.link" outlined dense hide-bottom-space lazy-rules :rules='[function (e) { return !!e || "请填写该项"; }]' />
              </q-item-section>
            </q-item>
            <q-separator v-if="'1' == news.external_flag" />
            <q-item>
              <q-item-section avatar>
                <div>
                  推送至在籍学生
                </div>
              </q-item-section>
              <q-item-section />
              <q-item-section side>
                <q-toggle v-model="news.push_to_student" size="lg" checked-icon="check" unchecked-icon="clear" dense false-value="0" true-value="1" />
              </q-item-section>
            </q-item>
            <q-separator />
            <q-item>
              <q-item-section avatar>
                <div>
                  推送至教师
                </div>
              </q-item-section>
              <q-item-section />
              <q-item-section side>
                <q-toggle v-model="news.push_to_teacher" size="lg" checked-icon="check" unchecked-icon="clear" dense false-value="0" true-value="1" />
              </q-item-section>
            </q-item>
            <q-separator />
            <q-item>
              <q-item-section avatar>
                <div>
                  结束时间
                </div>
              </q-item-section>
              <q-item-section>
                <q-field style="width:200px" outlined dense stack-label hide-bottom-space lazy-rules :value='news.banner_end_date'>
                  <template v-slot:control>
                    {{ news.banner_end_date }}
                  </template>
                  <template v-slot:append>
                    <q-icon class="cursor-pointer" name="event">
                      <q-popup-proxy transition-show="scale" transition-hide="scale">
                        <div>
                          <q-date v-model="news.banner_end_date" flat minimal mask="YYYY-MM-DD HH:mm">
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
                          <q-time v-model="news.banner_end_date" flat mask="YYYY-MM-DD HH:mm" format24h>
                            <div class="row items-center justify-end">
                              <q-btn v-close-popup dense label="关闭" flat />
                            </div>
                          </q-time>
                        </div>
                      </q-popup-proxy>
                    </q-icon>
                  </template>
                </q-field>
              </q-item-section>
            </q-item>
            <q-item>
              <q-item-label>
                <span class="text-grey text-caption">
                  设置该新闻在app主页中轮播的结束时间，不设置则不在app轮播中显示
                </span>
              </q-item-label>
            </q-item>
          </q-list>
        </q-card>
        <q-footer class="bg-white text-primary" style="height:2.8rem;margin-left:0px;border:0px" bordered>
          <q-btn style="width:40%;height:100%" outline color="grey" label="取消" to="/teacher/news/index" />
          <q-btn style="width:60%;height:100%" color="primary" label="发布" type="submit" />
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
  name: "newsNew",
};
</script>
