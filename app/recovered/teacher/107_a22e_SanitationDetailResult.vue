<!--
  Source: assets/www/js/107.js -> webpack module "a22e"
  Route: /teacher/sanitation/detailresult
  Component: SanitationDetailResult
  Restoration: template decompiled from Vue render function; logic in sibling .logic.js
  Confidence: high for DOM structure / medium for expression quoting
-->
<template>
<q-layout view="lHh lpr lFf">
  <q-header class="bg-grey-3 text-black">
    <q-toolbar>
      <q-btn flat round dense icon="keyboard_arrow_left" @click='goBack' />
      <q-toolbar-title>
        查寝结果
      </q-toolbar-title>
    </q-toolbar>
  </q-header>
  <q-page-container>
    <q-page class="bg-grey-3">
      <q-form class="q-gutter-sm full-width" @submit='saveSanitationResult'>
        <q-card v-if="menuInfo" class="full-width" flat>
          <q-list>
            <q-item>
              <q-item-section>
                <q-item-label class="text-bold">
                  寝室检查基本内容
                </q-item-label>
              </q-item-section>
            </q-item>
            <q-separator />
            <q-item>
              <q-item-section avatar>
                <div class="neu-css-before-red-asterisk">
                  执行日期
                </div>
              </q-item-section>
              <q-item-section>
                <q-field style="width:100%" outlined dense stack-label hide-bottom-space lazy-rules :rules='[function (t) { return !!t || "请填写该项"; }, function (i) { return i >= begin_date && i <= end_date || "执行时间应在任务执行时间范围内"; }]' :value='sanitation_result.check_date'>
                  <template v-slot:control>
                    {{ sanitation_result.check_date }}
                  </template>
                </q-field>
              </q-item-section>
            </q-item>
            <q-separator />
            <q-item>
              <q-item-section avatar>
                <div class="neu-css-before-red-asterisk">
                  宿舍
                </div>
              </q-item-section>
              <q-item-section>
                <q-input v-model="sanitation_result.room_name" outlined dense hide-bottom-space :readonly='readonlysuse' />
              </q-item-section>
              <q-item-section v-if="show_Suse" side>
                <q-btn outline hide-bottom-space color="primary" label="选择宿舍" @click='selectSuse()' />
              </q-item-section>
            </q-item>
            <q-separator style="height:7px" color="grey-3" />
          </q-list>
          <q-card-section>
            <div class="row">
              <div class="col-12 col-md-2 col-sm-3 text-bold q-pr-sm" :class='$q.screen.lt.sm ? "" : "text-right"'>
                宿舍检查结果
              </div>
            </div>
            <q-card class="full-width" flat>
              <q-card-section>
                <neu-widget v-for="(i, s) in infoConfig" v-model="result.info_result[index]" :key='s' style="margin-top:4px" :labelClass='"col-12 col-md-2 col-sm-9 text-right" + ($q.screen.lt.sm ? "text-right" : "")' controlClass="col-12 col-md-10 col-sm-9" :config='i' :viewMode='viewMode' />
              </q-card-section>
            </q-card>
            <q-separator />
            <div class="row">
              <div class="col-12 col-md-2 col-sm-3 neu-css-after-colon text-bold q-pr-sm" :class='$q.screen.lt.sm ? "" : "text-right"'>
                学生
              </div>
              <div class="col-12 col-md-10 col-sm-9">
                <q-btn v-for="(i, s) in stuList" :key='s' style="margin-right:5px" push :color='i.color' :text-color='i.textColor' :disabled='disabled' @click='inputStudentResult(i)'>
                  {{ "\n                          " + i.name + "\n                      " }}
                </q-btn>
              </div>
            </div>
            <div v-show="this.sanitationType !== 'd'" class="row q-mt-xs">
              <div class="col-12 col-md-2 col-sm-3 text-bold q-pr-sm" :class='$q.screen.lt.sm ? "" : "text-right"' />
              <div class="col-12 col-md-10 col-sm-3" :class='$q.screen.lt.sm ? "" : "text-left"' style="color:grey">
                点击可查看/填写/修改学生查寝结果，若在添加/修改状态再次点击,该学生查寝结果将会清空，蓝色为当前正在展开。
              </div>
            </div>
            <q-card v-for="(i, s) in stuList" v-show="item.show_key" :key='s' class="full-width" flat>
              <div class="row items-center">
                <div class="col-12 col-md-2 col-sm-3 text-bold q-pr-sm" :class='$q.screen.lt.sm ? "" : "text-right"'>
                  {{ i.name }}
                </div>
              </div>
              <q-card-section v-if="true === i.show_key">
                <neu-widget v-for="(i, o) in stuInfoConf" v-model="stuResult[stuindex].info_result[index]" :key='o' :labelClass='"col-12 col-md-2 col-sm-9 neu-css-after-colon text-right" + ($q.screen.lt.sm ? "text-right" : "")' controlClass="col-12 col-md-10 col-sm-9" :config='i' :viewMode='viewMode' />
              </q-card-section>
            </q-card>
          </q-card-section>
          <div class="bg-white" style="height:2.8rem" />
        </q-card>
        <q-footer v-if="show_time" v-show="sanitationType !== 'n'" class="bg-white text-primary" style="height:2.8rem;margin-left:0px;border:0px" bordered>
          <q-btn style="width:30%;height:100%" color="red" label="删除" @click='deleteSanitationResult()' />
          <q-btn style="width:30%;height:100%" outline color="grey" label="暂存" type="submit" @click='changeStatus(0)' />
          <q-btn style="width:40%;height:100%" color="primary" label="提交" type="submit" @click='changeStatus(1)' />
        </q-footer>
        <q-footer v-if="show_time" v-show="sanitationType === 'n'" class="bg-white text-primary" style="height:2.8rem;margin-left:0px;border:0px" bordered>
          <q-btn style="width:40%;height:100%" outline color="grey" label="暂存" type="submit" @click='changeStatus(0)' />
          <q-btn style="width:60%;height:100%" color="primary" label="提交" type="submit" @click='changeStatus(1)' />
        </q-footer>
        <q-footer v-show="(sanitationType === 'd' && roleId == 'A') || (sanitationType === 'd' && getAllowDelete && (teacherNo === sanitation_result.teacher_no))" class="bg-white text-primary" style="height:2.8rem;margin-left:0px;border:0px" bordered>
          <q-btn style="width:100%;height:100%" color="red" label="删除" @click='deleteSanitationResult()' />
        </q-footer>
      </q-form>
    </q-page>
  </q-page-container>
  <q-dialog v-model="editDialog" persistent>
    <q-card class="full-width" flat>
      <q-card-section>
        <div class="text-bold">
          选择寝室
        </div>
      </q-card-section>
      <q-card-section>
        <q-form class="q-gutter-sm full-width" @submit='saveRecord'>
          <div class="row">
            <div class="col-12 col-sm-9">
              <q-select v-model="record.building_no" outlined dense hide-bottom-space lazy-rules :rules='[function (t) { return !!t || "请选择该项"; }]' :options='buildingList' emit-value map-options label="公寓楼" @input='queryRoomList' />
              <q-select v-model="record.room_no" style="margin-top:8px" outlined dense hide-bottom-space lazy-rules :rules='[function (t) { return !!t || "请选择该项"; }]' :options='roomList' emit-value map-options label="寝室" />
            </div>
          </div>
          <div class="row">
            <div class="col-12 col-sm-3" />
            <div class="col-12 col-sm-9 q-gutter-sm row">
              <q-btn unelevated color="primary" label="保存" type="submit" />
              <q-btn outline color="grey" label="取消" @click='editDialog = false' />
            </div>
          </div>
        </q-form>
      </q-card-section>
    </q-card>
  </q-dialog>
</q-layout>
</template>

<script>
// The exact semantic component options are preserved in the sibling .logic.js file.
// This SFC isolates the original render tree for review and manual variable renaming.
export default {
  name: "SanitationDetailResult",
};
</script>
