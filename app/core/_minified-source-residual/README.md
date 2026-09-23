# 构建残留文件说明（_minified-source-residual）

## 这是什么

`assets/www/js/` 目录下除了 webpack 打包产物（`app.js` / `vendor.js` / `chunk-common.js` / `<数字>.js`），
还残留了 **5 个独立文件**：

| 文件 | 大小 | 是否被使用 |
|---|---|---|
| `NeuCommon.js` | 1981 B | ✖ 构建残留 |
| `NeuScale.js` | 2156 B | ✖ 构建残留 |
| `NeuWidget.js` | 1522 B | ✖ 构建残留 |
| `excel.js` | 2625 B | ✖ 构建残留 |
| `BMapVGL.js` | 30795 B | ✖ 构建残留 |

## 为什么判定是"残留"

1. **`index.html` 只加载 3 个脚本**：
   ```html
   <script src=cordova.js></script>
   <script src=js/vendor.js></script>
   <script src=js/app.js></script>
   ```
   这 5 个文件都不在其中。webpack 的 chunk 是按需动态加载的，而它们的文件名
   不符合 chunk 命名规则（`<数字>.js`），所以也不会被 `__webpack_require__.e` 加载。

2. **无任何 chunk 引用它们**：`grep -r "zoomElement" assets/www/js/*.js`
   只命中 `NeuScale.js` 自己。

3. **webpack 把同样内容内联进了 chunk**：
   | 独立文件 | 对应的 webpack 模块 |
   |---|---|
   | `NeuCommon.js` | `app.js` 模块 `ad56` |
   | `NeuWidget.js` | `chunk-common.js` 模块 `58a84` |
   | `excel.js` | `chunk-common.js` 模块 `cd81` |
   | `NeuScale.js` | **未被内联**（tree-shake 掉了） |
   | `BMapVGL.js` | **未被内联**（tree-shake 掉了，相关逻辑改用 vue-baidu-map） |

   → 原项目的构建流程应是：Vue CLI 把 `www/js/*.js` 作为外部依赖做 DCE，
   打包结果写回 `www/`，但**没有清理源目录**，于是旧文件留了下来。

## ★ 重要更正：它们不是"未混淆原码"

这 5 个文件**同样经过 Terser 压缩**（全部为 1 行、变量名已压成 `e/t/i/a/o`）。
所以它们 **不是**可以直接作为公开源码分发的“原始源码”，但仍有很高的分析价值：

### 价值 1：暴露了原项目的真实文件结构

由文件名可知，开发者在 `www/js/` 下按功能拆分了独立模块，而不是全部堆在 Vue SFC 里：

```
www/js/
  NeuCommon.js    业务工具库（菜单色、下载、手机号校验、JPush 注册、版本检查）
  NeuWidget.js    ★ 问卷控件取值/比较/风险判定算法
  NeuScale.js     ★ 手势缩放与视口约束算法
  excel.js        ★ Excel 导入导出算法
  BMapVGL.js      ★ 百度地图省级配置 + 地图主题/样式
```

这是**还原目录结构的直接证据**——说明这些算法在原始工程里本就是独立文件，
因此本项目的 `restored/app/algorithms/` 与之对应。

### 价值 2：与 webpack 副本可交叉验证

`NeuCommon.js` vs `app.js#ad56`、`NeuWidget.js` vs `chunk-common.js#58a84`、
`excel.js` vs `chunk-common.js#cd81` 内容一致，**互为佐证**——
证明还原时的模块切分正确，也证明没有代码被额外混淆。

### 价值 3：`NeuScale.js` / `BMapVGL.js` 的**唯一**来源

这两个模块**没有被 webpack 内联**，因此这 4/30KB 的残留文件是它们
在 APK 中的唯一存在形式。若不识别出这是"独立文件"，
很容易误判为"未被使用的死代码"而漏掉整个缩放算法与地图配置。

## 处理方式

- 原始文件完整保留在本目录（`.min.js` 后缀标明其仍为压缩态）。
- 内容已在 `restored/app/algorithms/` 中完成可读化还原：
  - `zoomElement.js`        ← `NeuScale.min.js`
  - `widgetRisk.js`         ← `NeuWidget.min.js`
  - `excelIO.js`            ← `excel.min.js`
- `NeuCommon.js` 的还原在 `restored/app/core/NeuCommon.js`。
- `BMapVGL.js` 处理为**数据资产**（省级经纬度/缩放配置 + 地图样式 JSON），
  未做逐行还原——其主体是静态数据表，压缩不影响可读性。
