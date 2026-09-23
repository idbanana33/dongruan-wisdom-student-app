# 复现工具

本目录包含模板转换器、恢复脚本和样本验证脚本。为避免将依赖缓存和第三方库实现提交到仓库，未包含 `node_modules`。

## 前置条件

- Node.js 18 或更高版本
- Python 3.10 或更高版本
- 有权分析的 APK 样本（仓库不提供）

## 安装本地工具依赖

从仓库根目录运行：

```sh
cd tools
npm install
npm run verify:algorithms
```

工具直接依赖：`acorn`、`js-beautify`、`prettier`。

## 输入目录约定

脚本以解包后的分析工作目录为输入，例如：

```text
analysis-work/
  assets/www/js/       APK 中提取的 Web JS
  work/deob/           split_modules.py 生成的模块证据
  work/packets.json    build_packets.py 生成的 chunk 元信息
  work/routes.json     build_routes.py 生成的路由索引
```

`split_modules.py` 和索引生成脚本是从项目分析过程整理出来的工具；建议在本地分析副本中运行，不要将 APK 或未脱敏配置上传到 GitHub。

## 运行模板转换器

单模块转换：

```sh
node tools/devue2.js analysis-work/work/deob/5/dc6c.js
```

转换器把 Vue render 函数转为模板草稿。它不是官方 Vue 编译器，生成结果需要人工核对。

## 恢复脚本状态

完整恢复脚本仍依赖本地解包目录与索引；并且当前批量生成脚本对公开仓库的模块/索引结构有未完全统一之处。模板转换器与算法验证脚本可独立使用，但从 APK 到全部还原产物的一键流水线**尚未验证**。不要将工具清单视为完整可复现保证。

## 样本算法验证

`verify_algo.mjs` 包含距离、问卷值/风险判断、Sheet 名与字节转换的独立验证示例：

```sh
node tools/verify_algo.mjs
```

验证示例是针对分析报告中记录的算法行为，不是应用端到端测试。
