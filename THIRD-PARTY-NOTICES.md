# 第三方依赖与代码来源说明

## 依赖组件

目标 App 的 Web 包含 Vue/Quasar/Axios、SheetJS、Hammer.js、ECharts、Cordova 插件，以及百度地图、极光推送、微信等 SDK。本仓库只保留对应用模块依赖的识别摘要，不复制完整第三方 vendor bundle 或厂商 SDK 源码。

## 本项目分析输出

- `evidence/modules/`：从 APK Webpack bundle 中拆分并格式化的应用自有模块证据；这些仍是原应用分发代码的衍生分析材料，不等同于原作者源码。
- `app/recovered/`：Vue render 模板草稿、component options 提取和模块证据副本。
- `app/algorithms/`：从公开 APK 客户端逻辑中整理出的可读化实现及分析注释。

提交或再分发前，请自行核查 APK/应用代码的版权、许可和授权范围。SDK AppKey/API key 已从本仓库副本脱敏；脱敏不代表原密钥已失效，如这些 key 属于你或组织，应按厂商流程轮换。
