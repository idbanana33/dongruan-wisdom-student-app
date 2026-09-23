# 东软智慧学工 App 逆向分析与代码还原

本仓库记录对 Android/Cordova 应用“东软智慧学工”的静态分析，整理 Vue/Webpack 前端模块、页面路由及关键算法。保留应用自有模块的证据副本，并提供可读化模板草稿。

> 这是分析与教学用途的静态还原项目，不是原始工程的完整替代品，当前内容不能直接构建成 APK。

## 应用信息

| 项目 | 信息 |
|---|---|
| 应用名称 | 东软智慧学工 |
| Android application ID | `com.neuedu.wisestu` |
| 版本 | `2.0.1`（versionCode `20001`） |
| 技术栈 | Android、Cordova、Vue 2、Quasar、Webpack |
| APK 样本 | 未包含在仓库中 |

## 目录结构

```text
reports/                  逆向分析、算法、路由和原生层报告
app/algorithms/            算法还原代码和验证说明
app/core/                  公共工具和地图模块
app/components/            公共组件草稿
app/recovered/             页面模板、options 提取件和模块索引
indexes/                   模块、路由和恢复索引
evidence/modules/          项目自有 Webpack 模块拆分证据
evidence/chunks/           Webpack chunk 格式化副本
tools/                     分析脚本（不含 node_modules）
```

## 分析结果

- 共识别 592 个 Webpack 模块：429 个第三方依赖模块、163 个应用业务/公共/入口模块。
- 提取 123 条应用路由及页面 chunk/module 对应关系。
- 保存 163 个应用模块的证据副本。
- 139 个 Vue render 模块生成了模板草稿，133 个组件提取了 options 对象。
- 还原并验证 Haversine 距离、问卷风险判断、图片缩放、Excel I/O 等算法。
- 解码 Android binary XML Manifest，并提供脱敏摘要。原始 Manifest、DEX、APK、签名块、native 二进制和完整 vendor 源码不随仓库分发。

## 重要限制

- `.vue` 是 render-to-template 草稿；script 含占位内容。`.options.js` 中的 Webpack 模块引用尚未全部解析，因此不是完整可构建的 Vue 工程。
- 模板草稿未由 Vue 官方 compiler 编译；仓库不附带模板结构检查结果。
- 目前未完成 DEX Java 源码反编译及 Android 资源 ID 的完整映射。
- 客户端将二维码内容传给服务端接口处理；服务端解密实现不包含在 APK 中。

## 阅读顺序

1. `reports/01-逆向分析报告.md`
2. `reports/02-算法还原.md`
3. `reports/03-模块路由映射.md`
4. `app/algorithms/`
5. `indexes/recovery-index.json` 与 `evidence/modules/`

## 复现工具

脚本位于 `tools/`，运行步骤见 `tools/README.md`。脚本要求用户自行取得并解包有权分析的 APK；本仓库不提供 APK 文件。

## 使用说明

本仓库用于静态代码结构研究。请遵守适用法律、软件许可和个人信息保护要求；不得将样本中的 SDK 标识或接口信息用于未授权访问。
