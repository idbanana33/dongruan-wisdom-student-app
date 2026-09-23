# 原生层与 Manifest 分析

## 基本信息

- package：`com.neuedu.wisestu`
- versionName：`2.0.1`；versionCode：`20001`
- minSdk：19；targetSdk：28；compileSdk：28
- 原 APK、DEX、签名块和 `.so` 文件不包含在此公开仓库中。
- 解码后的 Manifest 摘要：`reports/manifest-decoded.xml`（敏感凭据已脱敏）。

## 权限与组件观察

Manifest 声明网络、外部存储读写、录音/视频、相机、粗/精定位、后台定位、蓝牙、网络状态与桌面 badge 权限。本公开仓库只保留摘要和脱敏摘录，不提供完整原始权限清单。

静态可观察项：

- `application usesCleartextTraffic="true"`：允许应用发起明文 HTTP 流量。该设置本身不证明实际接口存在明文传输，但与网络配置应进一步核查。
- Activity 包含 `wisestu://wisestu.neumooc.com` deep-link 过滤器，以及微信 URI scheme（已脱敏）。
- JPush 与百度定位 SDK 元数据原含 AppKey/API key；公开副本替换为脱敏标记。
- 部分厂商/SDK 组件标记 `exported=true`，包括 JPush `DaemonService`、`DownloadProvider`、JPush 通知 Activity、微信入口/支付 Activity。Android 目标版本是 28；对外组件应结合 action/data 权限和 SDK 实现进一步评估，不能单凭 exported 属性断言可被利用。
- 文件 Provider 标记 `exported=false` 且 `grantUriPermissions=true`，提供 paths 资源引用。

## DEX 与 native 库分析边界

本地样本分析发现自有类包括 `MainActivity`、BuildConfig、R 资源类和微信入口 Activity；其余主要来自 Cordova、Android support/AndroidX、Glide、ZXing、百度定位、极光推送、微信 SDK 和多媒体选择器。

百度定位 SDK 的 `liblocSDK7b.so` 符号包括百度定位坐标转换、`bd_encrypt` / `bd_decrypt` 和 MD5 实现符号。该结果来自本地样本字符串/符号检查，不证明这些函数用于应用自定义业务加密。

由于分析环境没有 JADX、APKTool、AAPT，本次未完成 Java DEX 反编译和完整 Android 资源 ID 映射。公开仓库不分发原始 DEX/native binary/签名块；需要复核时请基于有权使用的本地样本重跑。

