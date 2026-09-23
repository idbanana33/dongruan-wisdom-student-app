# 东软智慧学工 App 算法还原报告

## 说明与证据等级

本文只整理本地 APK 中可直接核对的算法。接口、action、字段和边界行为以应用 JS 模块为证据。完整注释代码在 `../app/algorithms/`；原始 chunk/module 对应见 `../indexes/` 和 `../evidence/`。

## A. Haversine 球面距离（高置信度）

- **来源**：Webpack chunk `chunk-common.js` → module `46f3` → `NeuGeoLocation.methods.getDistance`
- **参数**：`lat1, lng1, lat2, lng2`，十进制度
- **返回**：公里，`Math.round(distance * 1e4) / 1e4`，分辨率 0.1 米
- **半径**：`6378.137 km`（赤道半径）
- **公式**：

```text
φ1 = lat1 × π/180       φ2 = lat2 × π/180
Δφ = φ1 − φ2             Δλ = lng1 × π/180 − lng2 × π/180
a = sin²(Δφ/2) + cos(φ1)cos(φ2)sin²(Δλ/2)
d = 2 asin(√a) × 6378.137
```

### Node 实测

| 输入 | 输出 km |
|---|---:|
| 同一点 `(41.8057,123.4315)` | `0` |
| 沈阳 `(41.8057,123.4315)` → 大连 `(38.9140,121.6147)` | `356.8671` |
| 北京 `(39.9042,116.4074)` → 上海 `(31.2304,121.4737)` | `1068.5058` |
| 纬度相差 `0.001°` | `0.1113` |

> 此方法在原组件中定义，但当前 bundle 未发现业务代码对它的直接调用。不能据此断言签到范围检查实际使用该公式。

## B. 手势缩放、平移与边界约束（高置信度）

- **来源**：APK 中的独立压缩模块 `NeuScale.js`。
- **函数**：`zoomElement(element, zoomInButton, zoomOutButton)`；使用 Hammer.js 手势事件。
- 双击在倍率 `1 ↔ 2` 间切换；捏合倍率限制为 `[1, 3]`。
- 平移边界按变换后尺寸一半减去原尺寸一半计算；超限时保持方向并将偏移钳制到边缘。
- 捏合中心补偿：`newTranslate = (1 - newScale) * pinchOffset + gestureStartTranslate`。
- 原始实现存在 `transition = "1.6"` 缺少 CSS 单位、数值正则中的 `.` 未转义等问题。
- **时序风险**：缩放后会在 transform 写入 requestAnimationFrame 前读取 `getBoundingClientRect()`，边界计算可能暂时滞后一帧。这是根据代码执行次序推导的风险，不代表已实机复现。

## C. 问卷答案归一化、比较和风险判断（高置信度）

- **来源**：模块 `NeuWidget.js`；bundle 副本在 `chunk-common.js` module `58a84`。
- 控件类型包括 R 单选、C 多选、S 签名、A 问答、T 文本、F 附件、N 数值。
- `getWidgetValue` 把结构化答案归一化：C 多选排序后连接；other 文本格式为 `其他:文本`；签名转为“已签名/未签名”；附件名用 CRLF 连接。
- `compareWidgetValue` 对 R(other)/C/A/F 先归一化再比较；其他类型直接用 `===`。
- `checkWidgeRisk`：R/C 按选项匹配；A/T 以 substring 匹配风险词；N 检查 min/max 区间。

### 已确认的风险词表缺陷（Node 实测）

原式 `riskConfig.replace(/(\r\n)/g, /\n/).split(/\n/)` 将正则对象作为替换值，JavaScript 会把它转成字符串 `"/\\n/"`，而非换行符。

- LF 配置 `"打架\n酗酒"` → `"打架"`、`"酗酒"`，可命中。
- CRLF 配置 `"打架\r\n酗酒"` → 风险词项含 `"/\\n/"` 字面量，`"我打架了"` 匹配失败。

若服务端下发 CRLF 风险词表，风险词检测会静默失效。还原代码保留原行为，没有擅自修复。

N 型数值分支返回 true 表示值在配置区间内；这与 R/C/A/T 型的 true=命中风险不同。

## D. Excel I/O 与 SheetJS（高置信度）

- **来源**：独立压缩模块 `excel.js`；bundle 副本为 `chunk-common.js` module `cd81`。
- SheetJS 模块中可见版本 `0.16.9`。
- 导入只读取第一个 sheet，空单元格通过 `defval:""` 填充。
- 导出路径为 JSON → worksheet → binary XLSX → ArrayBuffer → Blob → Cordova cache directory。
- Sheet 名长度小于 31 时替换 `?[]*/` 为 `_`；长度达到 31 时截取 28 个 UTF-16 code unit，再拼 `_` 和 `floor(100*random)`。
- `string2ArrayBuffer` 逐字符执行 `charCodeAt(i) & 0xff`。
- 边界：仅导入首个 sheet；随机后缀有碰撞可能；文件错误主要由 `console.error` 报告。

## E. 定位与坐标转换链（高置信度）

- **来源**：Webpack chunk `chunk-common.js` → module `46f3` → `NeuGeoLocation`。
- HTML5 定位成功后调用 BMap `Convertor.translate(points, 1, 5, ...)`；失败时降级到 Cordova 百度定位插件或 BMap `Geolocation`。
- 定位权限和 GPS 状态由 `cordova.plugins.diagnostic` 管理；组件通过 `completed` / `error` 事件返回结果。
- 原始字段拼写为 `result.lontitude`，疑似与 `longitude` 不一致；公开还原中保持原字段并标注。
- 类型参数 `1`、`5` 依原调用保留；其坐标体系语义未在本仓库中独立核实。

## F. 二维码解密在服务端

客户端把扫码原文发送到服务端接口：

- `/api/student/signin/signin.api`，action `stuDecryptQrCode`
- `/api/teacher/scanning/scanning.api`，action `decryptQrCodeApp`

APK 客户端未发现二维码文本的本地解密实现；服务端算法无法从客户端 APK 恢复。

## G. 密码学算法普查结论

应用业务 JavaScript 中未发现 AES/MD5/RSA 或自定义密码学实现。百度定位 native SDK 字符号中包含相关函数名，但这只能证明该第三方库含相应实现，不能推断为应用自有业务加密。
