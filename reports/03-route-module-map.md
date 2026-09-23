# 模块—路由映射表生成说明

逐条映射保存在 [`../indexes/routes.json`](../indexes/routes.json)，应用 module 清单见 [`../indexes/modules.json`](../indexes/modules.json)，恢复输出对应见 [`../indexes/recovery-index.json`](../indexes/recovery-index.json)。

原始 router 在 Webpack module `2f39` 中将页面路由嵌套为 `/` MainLayout 的 children。该表仅作静态索引，不是独立运行的 Vue Router 配置。

各 JSON 中的 `chunks` 与 `mods` 字段直接提取自 APK 原始入口 bundle；如与模板文件名猜测不一致，请以原始字段为准。
