<!--
  Source: assets/www/js/chunk-common.js -> webpack module "9a3d"
  Route: (shared/core)
  Component: NeuAssignTeacher
  Restoration: template decompiled from Vue render function; logic in sibling .logic.js
  Confidence: high for DOM structure / medium for expression quoting
-->
<template>
<div class="full-width">
  <q-list bordered separator>
    <q-expansion-item expand-icon-toggle switch-toggle-side>
      <q-list separator>
        <q-item v-for="t in teamData" :key='t.target_level + t.target_no'>
          <q-item-section>
            {{ t.target_name }}
          </q-item-section>
          <q-item-section side>
            <q-icon name="cancel" color="negative" @click='removeData(t)' />
          </q-item-section>
        </q-item>
        <q-item v-for="t in roleData" :key='t.target_level + t.target_no'>
          <q-item-section>
            {{ t.target_name }}
          </q-item-section>
          <q-item-section side>
            <q-icon name="cancel" color="negative" @click='removeData(t)' />
          </q-item-section>
        </q-item>
        <q-item v-for="t in userData" :key='t.target_level + t.target_no'>
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
      </q-list>
      <template v-slot:header>
        <q-item-section class="text-center">
          {{ "\n          已选择（" + assignedData ? assignedData.length : 0 + "）\n        " }}
        </q-item-section>
        <q-item-section side>
          <span class="text-primary cursor-pointer" @click='removeAll'>
            清空已选
          </span>
        </q-item-section>
      </template>
    </q-expansion-item>
  </q-list>
  <q-tabs v-model="tab" class="text-grey" dense active-color="primary" indicator-color="primary" align="justify" narrow-indicator>
    <q-tab name="team" label="组织架构" />
    <q-tab name="role" label="角色" />
  </q-tabs>
  <q-breadcrumbs v-show="tab == 'team' && teamPath.length != 0" class="q-mt-sm q-ml-md">
    <q-breadcrumbs-el v-for="(t, a) in teamPath" :key='a' :label='t.target_name' @click='changeNavi(t)' />
    <template v-slot:separator>
      <q-icon name="chevron_right" />
    </template>
  </q-breadcrumbs>
  <div v-show="tab == 'team' && (!treeDatas || treeDatas.length == 0)" class="text-center text-grey">
    暂无组织架构数据
  </div>
  <q-list v-show="tab == 'team' && teamNode && (!list || list.length == 0)" bordered separator>
    <q-item v-if="'all' == teamNode || {  }.target_level">
      <q-item-section avatar>
        <q-checkbox v-model="teamSelected" dense :val='teamNode || {  }' @input='selectTeam(teamNode || {  })' />
      </q-item-section>
      <q-item-section>
        {{ teamNode || {  }.target_name }}
      </q-item-section>
    </q-item>
    <q-item v-for="t in teamNode || {  }.children" :key='t.node_key'>
      <q-item-section avatar>
        <q-checkbox v-model="teamSelected" dense :val='t' @input='selectTeam(t)' />
      </q-item-section>
      <q-item-section>
        {{ t.target_name }}
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
          {{ t.login_name + " " + t.sex_name + " " + t.role_name }}
        </q-item-label>
      </q-item-section>
    </q-item>
  </q-list>
  <q-list v-show="tab == 'role'" bordered separator>
    <q-item v-for="t in roleList" :key='t.role_id'>
      <q-item-section avatar>
        <q-checkbox v-model="roleSelected" dense :val='t' @input='selectRole' />
      </q-item-section>
      <q-item-section>
        {{ t.role_name }}
      </q-item-section>
    </q-item>
  </q-list>
</div>
</template>

<script>
// The exact semantic component options are preserved in the sibling .logic.js file.
// This SFC isolates the original render tree for review and manual variable renaming.
export default {
  name: "NeuAssignTeacher",
};
</script>
