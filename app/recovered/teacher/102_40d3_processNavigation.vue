<!--
  Source: assets/www/js/102.js -> webpack module "40d3"
  Route: /teacher/process/processTypeList
  Component: processNavigation
  Restoration: template decompiled from Vue render function; logic in sibling .logic.js
  Confidence: high for DOM structure / medium for expression quoting
-->
<template>
<q-layout view="lHh lpr lFf">
  <q-header class="bg-grey-3 text-black">
    <q-toolbar>
      <q-btn flat round dense icon="keyboard_arrow_left" @click='goBack' />
      <q-toolbar-title>
        {{ typeName }}
      </q-toolbar-title>
    </q-toolbar>
  </q-header>
  <q-page-container>
    <q-page class="bg-grey-3 q-py-sm">
      <q-card class="bg-white q-mb-sm q-mx-sm q-py-md" flat @click='getList("reviewing")'>
        <q-item>
          <q-item-section avatar>
            <q-item-label>
              <span class="material-icons" style="font-size:30px;color:#1E90FF">
                pending_actions
              </span>
            </q-item-label>
          </q-item-section>
          <q-item-section>
            <q-item-label style="font-size:1.01rem">
              待审批
            </q-item-label>
            <q-item-label caption>
              {{ "\n            待审批的" + menuInfo.title + "申请信息\n          " }}
            </q-item-label>
          </q-item-section>
          <q-item-section side>
            <q-item-label>
              <span v-show="count !== 0" style="color:#FF0000">
                {{ "(" + count + ")" }}
              </span>
              <q-icon name="keyboard_arrow_right" size="sm" />
            </q-item-label>
          </q-item-section>
        </q-item>
      </q-card>
      <q-card class="bg-white q-mb-sm q-mx-sm q-py-md" flat @click='getList("reviewed")'>
        <q-item>
          <q-item-section avatar>
            <q-item-label>
              <span class="material-icons" style="font-size:30px;color:#32CD32">
                assignment_turned_in
              </span>
            </q-item-label>
          </q-item-section>
          <q-item-section>
            <q-item-label style="font-size:1.01rem">
              已审批
            </q-item-label>
            <q-item-label caption>
              {{ "\n            审批完成的" + menuInfo.title + "申请信息\n          " }}
            </q-item-label>
          </q-item-section>
          <q-item-section side>
            <q-item-label>
              <q-icon name="keyboard_arrow_right" size="sm" />
            </q-item-label>
          </q-item-section>
        </q-item>
      </q-card>
      <q-card class="bg-white q-mb-sm q-mx-sm q-py-md" flat @click='getList("all")'>
        <q-item>
          <q-item-section avatar>
            <q-item-label>
              <span class="material-icons" style="font-size:30px;color:#696969">
                receipt_long
              </span>
            </q-item-label>
          </q-item-section>
          <q-item-section>
            <q-item-label style="font-size:1.01rem">
              {{ "\n            " + menuInfo.title + "申请记录\n          " }}
            </q-item-label>
            <q-item-label caption>
              {{ "\n            全部的" + menuInfo.title + "申请信息\n          " }}
            </q-item-label>
          </q-item-section>
          <q-item-section side>
            <q-item-label>
              <q-icon name="keyboard_arrow_right" size="sm" />
            </q-item-label>
          </q-item-section>
        </q-item>
      </q-card>
      <q-card class="bg-white q-mb-sm q-mx-sm q-py-md" flat @click='getList("typeList")'>
        <q-item>
          <q-item-section avatar>
            <q-item-label>
              <span class="material-icons" style="font-size:30px;color:#32CD32">
                remove_red_eye
              </span>
            </q-item-label>
          </q-item-section>
          <q-item-section>
            <q-item-label style="font-size:1.01rem">
              流程详情
            </q-item-label>
            <q-item-label caption>
              查看或编辑当前流程
            </q-item-label>
          </q-item-section>
          <q-item-section side>
            <q-item-label>
              <q-icon name="keyboard_arrow_right" size="sm" />
            </q-item-label>
          </q-item-section>
        </q-item>
      </q-card>
      <q-card v-if="record.is_author" class="bg-white q-mb-sm q-mx-sm q-py-md" flat @click='copy()'>
        <q-item>
          <q-item-section avatar>
            <q-item-label>
              <span class="material-icons" style="font-size:30px;color:#1E90FF">
                content_copy
              </span>
            </q-item-label>
          </q-item-section>
          <q-item-section>
            <q-item-label style="font-size:1.01rem">
              复制
            </q-item-label>
            <q-item-label caption>
              {{ "\n            复制该流程设置数据并创建新" + menuInfo.title + "\n          " }}
            </q-item-label>
          </q-item-section>
          <q-item-section side>
            <q-item-label>
              <q-icon name="keyboard_arrow_right" size="sm" />
            </q-item-label>
          </q-item-section>
        </q-item>
      </q-card>
    </q-page>
  </q-page-container>
</q-layout>
</template>

<script>
// The exact semantic component options are preserved in the sibling .logic.js file.
// This SFC isolates the original render tree for review and manual variable renaming.
export default {
  name: "processNavigation",
};
</script>
