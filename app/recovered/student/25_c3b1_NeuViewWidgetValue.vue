<!--
  Source: assets/www/js/25.js -> webpack module "c3b1"
  Route: /student/basic/stuInfo
  Component: NeuViewWidgetValue
  Restoration: template decompiled from Vue render function; logic in sibling .logic.js
  Confidence: high for DOM structure / medium for expression quoting
-->
<template>
<q-layout view="lHh lpr lFf">
  <q-header class="bg-grey-3 text-black">
    <q-toolbar>
      <q-btn flat round dense icon="keyboard_arrow_left" @click='goBack' />
      <q-toolbar-title>
        我的信息
      </q-toolbar-title>
    </q-toolbar>
  </q-header>
  <q-page-container>
    <q-page class="bg-grey-3 q-pb-sm">
      <q-card class="q-mx-md" flat>
        <q-item v-for="t in commonCols" :key='t.field' dense>
          <q-item-section avatar>
            <q-item-label class="text-grey">
              {{ t.label }}
            </q-item-label>
          </q-item-section>
          <q-item-section>
            <q-item-label class="text-right">
              {{ "\n              " + record[t.field] }}
              <span v-if="record.role_id = 'class_name' === t.field">
                {{ "(" + record.role_name + ")" }}
              </span>
            </q-item-label>
          </q-item-section>
        </q-item>
      </q-card>
      <q-card v-for="(t, a) in record.stu_info_config || []" :key='a' class="q-mx-md q-mt-sm" flat>
        <q-item>
          <q-item-section avatar>
            <q-item-label class="text-bold">
              {{ t.group }}
            </q-item-label>
          </q-item-section>
        </q-item>
        <q-item v-for="t in t.items" :key='t.id' dense>
          <q-item-section avatar>
            <q-item-label class="text-grey">
              {{ t.config.label }}
            </q-item-label>
          </q-item-section>
          <q-item-section @click='-1 != t.authority.indexOf("O") && openEditDialog(t.id, t.config)'>
            <q-item-label class="text-right" :class='record.stu_info && record.stu_info[t.id] && 1 != record.stu_info[t.id].status ? "text-red" : ""'>
              <neu-view-widget-value :config='t.config' :value='record.stu_info && record.stu_info[t.id] ? record.stu_info[t.id].value : ""' />
              <q-icon v-show="item.authority.indexOf('O') != -1" :class='record.stu_info && record.stu_info[t.id] && 1 != record.stu_info[t.id].status ? "text-red" : "text-grey"' name="keyboard_arrow_right" size="xs" />
            </q-item-label>
          </q-item-section>
        </q-item>
      </q-card>
      <q-dialog v-model="editDialog" position="bottom">
        <q-card style="width:350px">
          <q-linear-progress :value="1" color="primary" />
          <q-card-section class="row items-center justify-between" dense>
            <q-btn outline label="取消" color="grey" size="md" @click='editDialog = false' />
            <q-btn unelevated label="保存" color="primary" size="md" @click='saveEditDialog' />
          </q-card-section>
          <q-separator />
          <q-list bordered>
            <q-item v-ripple>
              <q-item-section>
                <q-form ref=""editForm"" @submit='saveStuInfo'>
                  <neu-widget v-model="editModel.value" :config='editModel.config' />
                </q-form>
              </q-item-section>
            </q-item>
          </q-list>
        </q-card>
      </q-dialog>
    </q-page>
  </q-page-container>
</q-layout>
</template>

<script>
// The exact semantic component options are preserved in the sibling .logic.js file.
// This SFC isolates the original render tree for review and manual variable renaming.
export default {
  name: "NeuViewWidgetValue",
};
</script>
