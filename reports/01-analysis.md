# 东软智慧学工 App 逆向分析报告

## 1. 对象与摘要

目标应用为“东软智慧学工”，Android application ID `com.neuedu.wisestu`，版本 `2.0.1` / versionCode `20001`。原始 APK 不随本仓库分发。

前端采用 Vue 2、Quasar 与 Webpack。构建代码显示生产压缩特征：模块 ID/hash 和局部变量缩短，Vue 模板编译为 render helper。静态分析未发现业务层字符串解密器或 JavaScript 自定义密码学解密器；主要工作是反向恢复模块结构、组件逻辑和模板草稿。

## 2. 统计

| 项目 | 数量 |
|---|---:|
| Web JS 文件 | 131 |
| Webpack 模块 | 592 |
| 第三方依赖模块 | 429 |
| 应用业务/公共/入口模块 | 163 |
| 原始路由表条目 | 123 |
| Vue template 草稿 | 139 |
| Vue options 提取件 | 133 |

模块索引在 `../indexes/`；原始应用模块证据在 `../evidence/modules/`。路由模块索引见 `03-route-module-map.md`。

## 3. 还原流程

1. 从本地 APK 提取 Cordova Web assets 和 Android 二进制 XML。
2. 使用模块切分器按 Webpack 边界提取应用模块，保留模块 ID 与 chunk 对应关系。
3. 对入口路由、组件名称、接口路径和可见 action 进行静态盘点。
4. 将 163 个应用模块格式化为证据文件；对 Vue 模块生成 template 草稿，并提取可识别的组件 options 对象。
5. 对高价值算法与定位逻辑进行可读化整理，并用 Node.js 执行样例核对。

Vue 模板编译会丢失原源码中的注释、空白和部分表达式写法，因此这些产物不是逐字符恢复。

## 4. 功能结构

**学生端**包含登录、请假、通知、签到/二维码、卫生、报修、新闻、流程、个人资料和待办等路由。

**教师端**包含签到管理/统计、请假审批与批量请假、通知、工作日志、申请、消息、卫生、流程、学生监测和统计页面。

**维修人员端**包含维修工单、接单详情及待办。

分类根据路由、组件名、接口地址和界面文字交叉确认。

## 5. 客户端基础设施

- API base URL 由本地服务器配置和应用 base 拼接。
- 请求以 JSON 发送，已登录时附加 JWT 与 App 版本标识。
- 响应 token 会更新本地 JWT；401 会清理用户/菜单状态并回到登录流程；901 会触发升级检查。
- 登录根据学生、教师、维修人员角色调用不同 action，并发送版本和设备信息。
- JPush alias 按角色注册并调用用户设备接口上报设备信息。

公开文件中的 SDK key 已脱敏。

## 6. 二维码接口发现

客户端将扫码结果提交到服务端 action `stuDecryptQrCode` 或 `decryptQrCodeApp`，随后依据响应更新界面。APK 客户端未发现二维码文本的本地解密实现；后端未包含于 APK，无法从该样本恢复服务端算法。

## 7. 算法与缺陷

算法详见 `02-algorithms.md` 与 `../app/algorithms/`，包括 Haversine 球面距离、问卷答案规范化/风险判定、图片缩放边界约束、Excel I/O 和定位降级流程。

对风险词配置的实测显示，原代码把 RegExp 对象作为 `String.replace` 替换值；CRLF 风险词配置可能因此静默失效。还原代码保留原行为并在报告中说明。

## 8. 还原边界

- `.vue` 为 render-to-template 草稿，script 内有占位内容；`.options.js` 中仍有未解析的 Webpack module alias，因此当前不是完整可构建工程。
- 第三方 vendor 源码不随仓库完整分发。
- 当前环境缺少 JADX、APKTool、AAPT，未完成 DEX Java 源码反编译或 Android 资源 ID 全量映射。
- 原始 APK、DEX、签名块、native binary 未纳入仓库；仅保留报告和脱敏 Manifest 摘要。
- 服务端接口逻辑不在 APK 中。

## 9. 复核入口

- 模块恢复索引：`../indexes/recovery-index.json`
- 原始路由索引：`../indexes/routes.json`
- 模块/chunk 信息：`../indexes/modules.json`、`../indexes/packets.json`
- 模块证据：`../evidence/modules/`
- 算法样例：`../tools/verify_algo.mjs`
