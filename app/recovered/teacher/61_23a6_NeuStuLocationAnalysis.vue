<!--
  Source: assets/www/js/61.js -> webpack module "23a6"
  Route: /teacher/analysis/stuLocation
  Component: NeuStuLocationAnalysis
  Restoration: template decompiled from Vue render function; logic in sibling .logic.js
  Confidence: high for DOM structure / medium for expression quoting
-->
<template>
<q-layout view="lHh lpr lFf">
  <q-header class="bg-grey-3 text-black">
    <q-toolbar>
      <q-btn flat round dense icon="keyboard_arrow_left" @click='goBack' />
      <q-toolbar-title>
        定位数据分析
      </q-toolbar-title>
      <q-btn v-show="isDone" unelevated dense label="重新分析" @click='isDone = false' />
    </q-toolbar>
  </q-header>
  <q-page-container>
    <q-page class="bg-grey-3 q-pb-sm">
      <q-card v-if="menuInfo" class="bg-white q-mb-sm q-mx-sm" flat>
        <q-list v-show="!isDone" separator>
          <q-item>
            <q-item-section avatar>
              数据来源
            </q-item-section>
            <q-item-section />
            <q-item-section side>
              <div class="q-gutter-xs">
                <q-checkbox v-for="e in locationSourceList" v-model="condition.location_source" :key='e.value' class="q-mr-sm" dense keep-color :val='e.value' :label='e.label' />
              </div>
            </q-item-section>
          </q-item>
          <q-item>
            <q-item-section avatar>
              开始时间
            </q-item-section>
            <q-item-section />
            <q-item-section side>
              <q-field style="width:200px" outlined dense stack-label hide-bottom-space :value='condition.begin_date'>
                <template v-slot:control>
                  {{ condition.begin_date }}
                </template>
                <template v-slot:append>
                  <q-icon class="cursor-pointer" name="event">
                    <q-popup-proxy transition-show="scale" transition-hide="scale">
                      <div>
                        <q-date v-model="condition.begin_date" flat minimal mask="YYYY-MM-DD">
                          <div class="row items-center justify-end">
                            <q-btn v-close-popup dense label="关闭" flat />
                          </div>
                        </q-date>
                      </div>
                    </q-popup-proxy>
                  </q-icon>
                </template>
              </q-field>
            </q-item-section>
          </q-item>
          <q-item>
            <q-item-section avatar>
              结束时间
            </q-item-section>
            <q-item-section />
            <q-item-section side>
              <q-field style="width:200px" outlined dense stack-label hide-bottom-space :value='condition.end_date'>
                <template v-slot:control>
                  {{ condition.end_date }}
                </template>
                <template v-slot:append>
                  <q-icon class="cursor-pointer" name="event">
                    <q-popup-proxy transition-show="scale" transition-hide="scale">
                      <div>
                        <q-date v-model="condition.end_date" flat minimal mask="YYYY-MM-DD">
                          <div class="row items-center justify-end">
                            <q-btn v-close-popup dense label="关闭" flat />
                          </div>
                        </q-date>
                      </div>
                    </q-popup-proxy>
                  </q-icon>
                </template>
              </q-field>
            </q-item-section>
          </q-item>
          <q-item>
            <q-item-section avatar>
              学生范围
            </q-item-section>
            <q-item-section />
            <q-item-section side>
              <q-item-label class="row items-center">
                <span v-show="!condition.student_target || condition.student_target.length == 0 " class="text-grey" @click='studentDialog = true'>
                  选择
                </span>
                <q-icon v-show="!condition.student_target || condition.student_target.length == 0 " class="text-grey" name="keyboard_arrow_right" size="sm" />
                <span v-show="condition.student_target && condition.student_target.length != 0 " class="text-primary" @click='studentDialog = true'>
                  {{ "已选择 (" + condition.student_target.length + ")" }}
                </span>
                <q-icon v-show="condition.student_target && condition.student_target.length != 0 " class="text-primary" name="keyboard_arrow_right" size="sm" />
              </q-item-label>
            </q-item-section>
          </q-item>
          <q-item>
            <q-item-section avatar>
              位置变化判断基准
            </q-item-section>
            <q-item-section />
            <q-item-section side>
              <q-select v-model="condition.base_on" outlined dense :options='baseOnList' emit-value map-options />
            </q-item-section>
          </q-item>
          <q-item>
            <q-item-section>
              <q-btn unelevated color="primary" label="生成分析数据" @click='analysisStuLocationData' />
            </q-item-section>
          </q-item>
        </q-list>
        <q-card-section v-show="isDone">
          <div class="row justify-between items-center">
            <q-btn outline icon="data_usage" label="数据分析详情" @click='dataDialog = true' />
            <q-btn outline icon="bubble_chart" label="可视化分析" @click='showAnalysisMap' />
          </div>
          <div class="q-mt-sm">
            学生定位
          </div>
          <div class="full-width" style="height:400px">
            <div style="height:100%" id="stuLocationPie" />
          </div>
          <div class="q-mt-sm">
            位置变化
          </div>
          <div class="full-width" style="height:400px">
            <div style="height:100%" id="changedLocationPie" />
          </div>
          <div class="q-mt-sm">
            位置分布(
            <q-checkbox v-model="condition.only_final" dense label="仅统计最终位置" @input='reloadDistributionData' />
            )
          </div>
          <div v-show="!emptyDistributionPieData" class="full-width" style="height:400px">
            <div style="height:100%" id="distributionPie" />
          </div>
          <div v-if="emptyDistributionPieData" class="full-width text-center text-grey q-mt-sm">
            无数据
          </div>
        </q-card-section>
      </q-card>
      <q-dialog v-model="studentDialog" persistent maximized>
        <q-layout class="bg-white" view="lHh lpr lFf" container>
          <q-header class="full-width bg-white">
            <q-toolbar>
              <div class="full-width row items-center justify-between q-px-xs q-py-sm">
                <div class="text-bold text-black">
                  选择学生范围
                </div>
                <q-btn unelevated color="primary" label="完成" @click='studentDialog = false' />
              </div>
            </q-toolbar>
          </q-header>
          <q-page-container>
            <q-page>
              <neu-assign-student v-model="condition.student_target" :permit='menuInfo ? menuInfo.view_permit : null' permit-mode="V" :menu-id='menuInfo ? menuInfo.id : null' />
            </q-page>
          </q-page-container>
        </q-layout>
      </q-dialog>
      <q-dialog v-model="mapDialog" maximized>
        <neu-location-analysis-map :statisticsData='statisticsData' :clusterData='clusterData' :curveData='curveData' />
      </q-dialog>
      <q-dialog v-model="dataDialog" maximized>
        <neu-stu-location-analysis :condition='condition' />
      </q-dialog>
    </q-page>
  </q-page-container>
</q-layout>
</template>

<script>
// The exact semantic component options are preserved in the sibling .logic.js file.
// This SFC isolates the original render tree for review and manual variable renaming.
export default {
  name: "NeuStuLocationAnalysis",
};
</script>
