<!--
  Source: assets/www/js/10.js -> webpack module "35a8"
  Route: (shared/core)
  Component: Welcome
  Restoration: template decompiled from Vue render function; logic in sibling .logic.js
  Confidence: high for DOM structure / medium for expression quoting
-->
<template>
<q-layout view="hhh lpr fFf">
  <q-page-container>
    <q-page>
      <div class="full-width">
        <q-img :src='logoImage' />
      </div>
      <div class="absolute-bottom text-center q-mb-md">
        <q-btn class="q-px-lg q-py-xs" outline label="开始使用" color="primary" @click='moveTo("/user/login", true)' />
        <div class="text-grey q-mt-sm row items-center justify-center">
          <div>
            <q-icon v-show="!agreed" name="check_box_outline_blank" size="xs" @click='agreed = true' />
            <q-icon v-show="agreed" name="check_box" size="xs" @click='agreed = false' />
          </div>
          <div class="row items-center">
            已同意《
            <span style="text-decoration:underline" @click='moveTo("/policy/termsOfUse", false)'>
              用户协议
            </span>
            》及《
            <span style="text-decoration:underline" @click='moveTo("/policy/privacyPolicy", false)'>
              隐私政策
            </span>
            》
          </div>
        </div>
      </div>
      <q-dialog v-model="policyDialog" full-width>
        <q-card class="full-width" flat>
          <q-card-section>
            <div>
              欢迎使用东软智慧学工，我们依据最新的监管要求更新了《
              <span style="text-decoration:underline" @click='moveTo("/policy/termsOfUse", false)'>
                用户协议
              </span>
              》及《
              <span style="text-decoration:underline" @click='moveTo("/policy/privacyPolicy", false)'>
                隐私政策
              </span>
              》，特向您说明如下：
              <br />
              1、东软智慧学工系统是由大连东软教育科技集团有限公司开发运营的为您提供学生管理服务的应用（为了方便说明，大连东软教育科技集团有限公司简称“我们”）。我们非常重视您的个人信息和隐私保护，为向您提供产品相关的基础功能和服务，我们会在遵循法律法规的前提下，收集、使用合法必要的信息；
              <br />
              2、根据您在使用过程中的不同服务场景，我们会基于您的明示授权，获取您的位置（用于请假、签到、信息收集、流程申请等业务）、系统通知权限（用于向您推送必要的通知）、存储（用于请假、信息收集、流程申请、寝室检查等业务）、相机（用于请假、信息收集、流程申请、寝室检查等业务）、设备号信息（用于保障您的账号安全）等，您有权拒绝或取消授权；
              <br />
              3、我们会采取业界先进的安全措施和技术保护您的信息安全，未经您同意，我们不会从第三方处获取、共享或向其提供您的信息；
              <br />
              4、我们设立了个人信息保护专职部门（或个人信息保护专员），当您有其他投诉、建议、未成年人信息相关问题时，可将您的问题发送至我们的客服邮箱：wisestu@neuedu.com。
              <br />
              为了更好地保护您的权益，请您务必审慎阅读、充分理解东软智慧学工的《
              <span style="text-decoration:underline" @click='moveTo("/policy/termsOfUse", false)'>
                用户协议
              </span>
              》和《
              <span style="text-decoration:underline" @click='moveTo("/policy/privacyPolicy", false)'>
                隐私政策
              </span>
              》。如您同意，请点击“同意”，开始接受我们的服务。
            </div>
            <div class="text-right">
              <q-btn class=" q-mr-sm" outline color="grey" label="不同意并退出" @click='refusePolicy' />
              <q-btn unelevated color="primary" label="同意" @click='acceptPolicy' />
            </div>
          </q-card-section>
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
  name: "Welcome",
};
</script>
