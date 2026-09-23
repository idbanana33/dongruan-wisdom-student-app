<!--
  Source: assets/www/js/chunk-common.js -> webpack module "f395"
  Route: (shared/core)
  Component: NeuImportData
  Restoration: template decompiled from Vue render function; logic in sibling .logic.js
  Confidence: high for DOM structure / medium for expression quoting
-->
<template>
<div class="full-width">
  <q-list bordered separator>
    <q-expansion-item expand-icon-toggle switch-toggle-side>
      <q-list separator>
        <q-item v-for="t in teamData" :key='t.target_level + t.target_no + t.grade_no'>
          <q-item-section avatar>
            <q-icon class="cursor-pointer" name="more_vert" @click='schooleRollStatusDialog = true, srsItem = t' />
          </q-item-section>
          <q-item-section>
            <q-item-label>
              {{ t.target_name }}
              <span v-if="'class' != t.target_level">
                {{ " - " + t.grade_name }}
              </span>
            </q-item-label>
            <q-item-label caption>
              <span v-show="item.school_roll_status_name">
                {{ t.school_roll_status_name }}
              </span>
              <span v-show="item.education_level_name">
                {{ " " + t.education_level_name }}
              </span>
            </q-item-label>
          </q-item-section>
          <q-item-section side>
            <q-icon name="cancel" color="negative" @click='removeData(t)' />
          </q-item-section>
        </q-item>
        <q-item v-for="t in userData" :key='t.target_level + t.target_no'>
          <q-item-section v-show="teamData && teamData.length != 0" avatar />
          <q-item-section>
            <q-item-label>
              {{ t.target_name }}
            </q-item-label>
            <q-item-label caption>
              {{ t.target_no }}
            </q-item-label>
          </q-item-section>
          <q-item-section side>
            <q-icon name="cancel" color="negative" @click='removeData(t)' />
          </q-item-section>
        </q-item>
        <q-item v-for="t in groupData" :key='t.target_level + t.target_no'>
          <q-item-section>
            {{ t.target_name }}
          </q-item-section>
          <q-item-section side>
            <q-icon name="cancel" color="negative" @click='removeData(t)' />
          </q-item-section>
        </q-item>
      </q-list>
      <template v-slot:header>
        <q-item-section class="text-center">
          {{ "\n          已选择（" + assignedData ? assignedData.length : 0 + "）\n        " }}
        </q-item-section>
        <q-item-section side>
          <span class="text-primary cursor-pointer" @click='openImportDialog'>
            学号批量导入
          </span>
          <span class="text-negative cursor-pointer" @click='removeAll'>
            清空已选
          </span>
        </q-item-section>
      </template>
    </q-expansion-item>
  </q-list>
  <q-tabs v-model="tab" class="text-grey" dense active-color="primary" indicator-color="primary" align="justify" narrow-indicator>
    <q-tab name="team" label="组织架构" />
    <q-tab v-else name="group" label="分组" />
  </q-tabs>
  <q-select v-model="gradeNo" v-show="tab == 'team'" class="q-mt-sm" filled dense label="年级" :options='gradeList' emit-value map-options @input='changeGrade' />
  <div v-show="tab == 'team' && gradeNo && (!treeDatas || treeDatas.length == 0)" class="text-center text-grey">
    该年级下暂无数据
  </div>
  <q-breadcrumbs v-show="tab == 'team' && teamPath.length != 0" class="q-mt-sm q-ml-md">
    <q-breadcrumbs-el v-for="(t, a) in teamPath" :key='a' :label='t.label' @click='changeNavi(t)' />
    <template v-slot:separator>
      <q-icon name="chevron_right" />
    </template>
  </q-breadcrumbs>
  <q-list v-show="tab == 'team' && teamNode && (!list || list.length == 0)" bordered separator>
    <q-item v-if="'all' == teamNode || {  }.target_level">
      <q-item-section avatar>
        <q-checkbox v-model="teamSelected" dense :val='teamNode || {  }' @input='selectTeam(teamNode || {  })' />
      </q-item-section>
      <q-item-section>
        {{ teamNode || {  }.label }}
      </q-item-section>
    </q-item>
    <q-item v-for="t in teamNode || {  }.children" :key='t.node_key'>
      <q-item-section avatar>
        <q-checkbox v-model="teamSelected" dense :val='t' @input='selectTeam(t)' />
      </q-item-section>
      <q-item-section>
        {{ t.label }}
      </q-item-section>
      <q-item-section side>
        <span class="text-primary cursor-pointer" @click='expandNode(t)'>
          展开
        </span>
      </q-item-section>
    </q-item>
  </q-list>
  <q-list v-show="tab == 'team' && list && list.length != 0" bordered separator>
    <q-item v-for="t in list" :key='t.login_name'>
      <q-item-section avatar>
        <q-checkbox v-model="selected" dense :val='t' @input='selectUser(t)' />
      </q-item-section>
      <q-item-section>
        <q-item-label>
          {{ t.name }}
        </q-item-label>
        <q-item-label caption>
          {{ t.login_name + " " + t.sex_name + " " + t.school_roll_status }}
        </q-item-label>
      </q-item-section>
    </q-item>
  </q-list>
  <q-list v-show="tab == 'group'" bordered separator>
    <q-item v-for="t in groupList" :key='t.id'>
      <q-item-section avatar>
        <q-checkbox v-model="groupSelected" dense :val='t' @input='selectGroup' />
      </q-item-section>
      <q-item-section>
        {{ t.title }}
      </q-item-section>
    </q-item>
  </q-list>
  <q-dialog v-model="importDialog">
    <q-card class="full-width" flat>
      <q-card-section>
        <div class="text-bold">
          学号批量导入
        </div>
      </q-card-section>
      <q-card-section>
        <q-form class="q-gutter-sm full-width" @submit='importStudents'>
          <div class="full-width">
            <q-input v-model="studentsModel" outlined dense type="textarea" placeholder="请将学号粘贴至此，每个学号占一行。" hide-bottom-space lazy-rules :rules='[function (e) { return !!e || "请填写该项"; }]' />
            <div v-show="importErrorMessage" class="text-red">
              {{ importErrorMessage }}
            </div>
          </div>
          <div class="q-gutter-sm">
            <q-btn unelevated color="primary" label="导入" type="submit" />
            <q-btn outline color="grey" label="取消" @click='importDialog = false' />
          </div>
        </q-form>
      </q-card-section>
    </q-card>
  </q-dialog>
  <q-dialog v-model="schooleRollStatusDialog">
    <q-card class="full-width" flat>
      <q-item>
        <q-item-section avatar>
          学籍状态
        </q-item-section>
        <q-item-section>
          <q-select v-model="srsItem.school_roll_status" outlined dense :options='schoolRollStatusList' emit-value map-options multiple @input='setSchoolRollStatusName(srsItem)' />
        </q-item-section>
      </q-item>
      <q-item v-if="'class' != srsItem.target_level">
        <q-item-section avatar>
          培养层次
        </q-item-section>
        <q-item-section>
          <q-select v-model="srsItem.education_level" outlined dense :options='educationLevelList' emit-value map-options multiple @input='setEducationLevelName(srsItem)' />
        </q-item-section>
      </q-item>
    </q-card>
  </q-dialog>
  <neu-import-data :config='importCompConfig' />
</div>
</template>

<script>
// The exact semantic component options are preserved in the sibling .logic.js file.
// This SFC isolates the original render tree for review and manual variable renaming.
export default {
  name: "NeuImportData",
};
</script>
