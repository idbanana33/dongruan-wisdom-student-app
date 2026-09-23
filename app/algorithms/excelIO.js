/**
 * excel.js —— Excel 导入/导出算法
 * ============================================================================
 * 来源: assets/www/js/excel.js            （★ 未混淆原始 ESM 源文件，构建残留）
 *       webpack 另有一份压缩副本: assets/www/js/chunk-common.js → module "cd81"
 * 依赖: SheetJS xlsx（webpack 原始 module "1146"，版本 0.16.9）
 * 导出: importExcel2Json / exportJson2Excel / exportJson2MultiSheetsExcel / openExcelFile
 * 还原档位: A（算法类，逐行等价 + sheet 名规则推导 + 用例）
 * 置信度: 高
 * ============================================================================
 *
 * 用途
 * ----------------------------------------------------------------------------
 * 教师端「导出数据」「导出统计」「导入学生名单」等功能的底层实现。
 * 走 Cordova 文件系统：写到 cacheDirectory，再交给 fileOpener2 调系统打开。
 *
 * cordova 插件依赖：
 *   cordova-plugin-file            resolveLocalFileSystemURL / createWriter
 *   cordova-plugin-file-opener2    showOpenWithDialog
 * ============================================================================
 */

import XLSX from "xlsx";

/**
 * Excel 文件的标准 MIME。
 * ★ 注意：Blob 创建时原码用的是 "text/plain"（不是 xlsx 的 MIME），
 *   只影响内存中的 Blob 声明，最终写盘与打开用的是下面这个常量。
 */
const XLSX_MIME = "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet";

/** Sheet 名的最大长度（Excel 规范限制 31 个字符） */
const SHEET_NAME_MAX = 31;

/** 超长时截断到的长度（留出位置给 "_" + 随机数后缀） */
const SHEET_NAME_TRUNCATE = 28;

/**
 * 规范化 Sheet 名称。
 *
 * 规则（★ 逐条对应原码）：
 *   1. 长度 < 31 → 直接把非法字符替换为下划线
 *   2. 长度 ≥ 31 → 截取前 28 字符，追加 "_" + 两位随机数（0-99），
 *                  再替换非法字符
 *   非法字符：? [ ] * /
 *
 * ★ 随机数是 Math.floor(100 * Math.random())，范围 0..99，**不补零**，
 *   所以后缀长度可能是 1 或 2 位。极端情况下两个长名 sheet 仍可能撞名。
 * ★ Workbook 的 SheetNames 是数组，重名会导致后写覆盖前写。
 *
 * @param {string} name 原始 sheet 名
 * @returns {string} 合法且 ≤31 字符的名称
 * @private
 */
function formatSheetName(name) {
  /** 把 Excel 禁止的字符替换为下划线 */
  const sanitize = (s) =>
    s.replace(/\?/g, "_").replace(/\[/g, "_").replace(/\]/g, "_")
     .replace(/\*/g, "_").replace(/\//g, "_");

  if (name.length < SHEET_NAME_MAX) {
    return sanitize(name);
  }

  // 超长：截 28 字符 + "_" + 0..99 的随机数
  const truncated = `${name.substr(0, SHEET_NAME_TRUNCATE)}_${Math.floor(100 * Math.random())}`;
  return sanitize(truncated);
}

/**
 * 把「二进制字符串」逐字节转成 ArrayBuffer。
 *
 * ★ 为什么要 & 0xFF —— XLSX.write({type:"binary"}) 返回的是每个字符代表一个
 *   字节的字符串（Latin-1）。charCodeAt 得到 0..255，& 0xFF 是防御性掩码
 *   （理论上不会有高位）。这是 SheetJS 官方的标准转换写法。
 *
 * @param {string} binaryStr 每个字符为 1 字节的字符串
 * @returns {ArrayBuffer}
 * @private
 */
function string2ArrayBuffer(binaryStr) {
  const buf = new ArrayBuffer(binaryStr.length);
  const view = new Uint8Array(buf);
  for (let i = 0; i < binaryStr.length; ++i) {
    view[i] = binaryStr.charCodeAt(i) & 0xFF;
  }
  return buf;
}

/**
 * 把「{sheet名 -> worksheet}」映射打包成一个 xlsx 的 Blob。
 *
 * 步骤：
 *   1. 组装 SheetJS Workbook：{ SheetNames, Sheets }
 *   2. 写出配置 { bookType:"xlsx", bookSST:false, type:"binary" }
 *      ★ bookSST=false：不生成 sharedStrings 表，直接用内联字符串
 *        （文件略大，但生成更快、兼容性更好）
 *   3. write → 二进制字符串 → 逐字节 ArrayBuffer → Blob
 *
 * @param {Object<string, object>} sheets 已 formatSheetName 过的映射
 * @returns {Blob}
 * @private
 */
function sheet2Blob(sheets) {
  const workbook = {
    SheetNames: Object.keys(sheets),
    Sheets: sheets,
  };
  const writeOptions = { bookType: "xlsx", bookSST: false, type: "binary" };
  const binary = XLSX.write(workbook, writeOptions);
  return new Blob([string2ArrayBuffer(binary)], { type: "application/octet-stream" });
}

/* ============================================================================
 * 公开 API
 * ============================================================================ */

/**
 * 把本地 Excel 文件读成 JSON 数组。
 *
 * 只读**第一个 sheet**；用 sheet_to_json 转成对象数组，
 * `defval:""` 表示空单元格填空串（而不是 undefined）。
 *
 * @param {File} file 用户选择的文件对象
 * @param {(rows: object[]) => void} callback 读取完成回调（不一定被调用）
 */
export function importExcel2Json(file, callback) {
  const reader = new FileReader();
  reader.onload = function (evt) {
    // type:"binary" + readAsBinaryString 是 SheetJS 的配套读法
    const workbook = XLSX.read(evt.target.result, { type: "binary" });
    if (callback) {
      callback(
        XLSX.utils.sheet_to_json(workbook.Sheets[workbook.SheetNames[0]], { defval: "" }),
      );
    }
  };
  reader.readAsBinaryString(file);
}

/**
 * 把 JSON 数组导出成单 sheet 的 xlsx 并打开。
 *
 * @param {object[]} rows        行数据
 * @param {string}   fileName    文件名（不含扩展名）
 * @param {string}   [sheetName="sheet1"] sheet 名
 * @param {boolean}  [autoOpen=true] 写完后是否自动弹出「打开方式」
 */
export function exportJson2Excel(rows, fileName, sheetName = "sheet1", autoOpen = true) {
  const worksheet = XLSX.utils.json_to_sheet(rows);
  const blob = new Blob([sheet2Blob({ [formatSheetName(sheetName)]: worksheet })], {
    type: "text/plain",
  });

  window.resolveLocalFileSystemURL(cordova.file.cacheDirectory, (dirEntry) => {
    dirEntry.getFile(
      `${fileName}.xlsx`,
      { create: true, exclusive: false },
      (fileEntry) => {
        fileEntry.createWriter(
          (writer) => {
            writer.onwriteend = function () {
              if (autoOpen) {
                // 交给系统选择打开方式（WPS / Office / 表格 App）
                cordova.plugins.fileOpener2.showOpenWithDialog(
                  `${cordova.file.cacheDirectory}${fileName}.xlsx`,
                  XLSX_MIME,
                  (_ok) => {},
                );
              }
            };
            writer.onerror = function (e) {
              console.error("写入文件失败：" + e.toString());
            };
            writer.write(blob);
          },
          (e) => {
            console.error("写入文件失败：" + e.toString());
          },
        );
      },
      (e) => {
        console.error("写入文件失败：" + e.toString());
      },
    );
  },
  (e) => {
    console.error("写入文件失败：" + e.toString());
  });
}

/**
 * 把「{sheet名 -> 行数组}」导成多 sheet 的 xlsx 并打开。
 *
 * ★ 与 exportJson2Excel 的差别：没有 autoOpen 开关，写完总是打开。
 *
 * @param {Object<string, object[]>} sheetMap sheet 名 -> 行数据
 * @param {string} fileName 文件名（不含扩展名）
 */
export function exportJson2MultiSheetsExcel(sheetMap, fileName) {
  // 逐个 sheet 转 worksheet，同时对 sheet 名做规范化
  const sheets = Object.keys(sheetMap).reduce((acc, key) => {
    acc[formatSheetName(key)] = XLSX.utils.json_to_sheet(sheetMap[key]);
    return acc;
  }, {});

  const blob = new Blob([sheet2Blob(sheets)], { type: "text/plain" });

  window.resolveLocalFileSystemURL(cordova.file.cacheDirectory, (dirEntry) => {
    dirEntry.getFile(
      `${fileName}.xlsx`,
      { create: true, exclusive: false },
      (fileEntry) => {
        fileEntry.createWriter(
          (writer) => {
            writer.onwriteend = function () {
              cordova.plugins.fileOpener2.showOpenWithDialog(
                `${cordova.file.cacheDirectory}${fileName}.xlsx`,
                XLSX_MIME,
                (_ok) => {},
              );
            };
            writer.onerror = function (e) {
              console.error("写入文件失败：" + e.toString());
            };
            writer.write(blob);
          },
          (e) => {
            console.error("写入文件失败：" + e.toString());
          },
        );
      },
      (e) => {
        console.error("写入文件失败：" + e.toString());
      },
    );
  },
  (e) => {
    console.error("写入文件失败：" + e.toString());
  });
}

/**
 * 打开 cacheDirectory 下已存在的 xlsx。
 * @param {string} fileName 文件名（不含扩展名）
 */
export function openExcelFile(fileName) {
  cordova.plugins.fileOpener2.showOpenWithDialog(
    `${cordova.file.cacheDirectory}${fileName}.xlsx`,
    XLSX_MIME,
    (_ok) => {},
  );
}

/* ============================================================================
 * 验证用例
 * ============================================================================
 *
 * 用例 1 —— sheet 名短于 31 → 原样（仅替换非法字符）
 *   formatSheetName("学生名单")          → "学生名单"
 *   formatSheetName("2024/春季?班[1]*")  → "2024_春季_班_1__"
 *
 * 用例 2 —— sheet 名 ≥31 字符 → 截 28 + "_" + 0..99
 *   输入: "一二三四五六七八九十一二三四五六七八九十一二三四五六七八九十一二"
 *         （**32 个字符**，≥31 触发截断）
 *   假设随机数取 37：
 *   → "一二三四五六七八九十一二三四五六七八九十一二三四五六七八_37"
 *     长度 = 28 + 1 + 2 = 31  ✔（实测确认长度为 31）
 *   ★ 注意：若随机数为个位数（如 5），结果长度为 30；始终 ≤31 合规。
 *
 * 用例 3 —— string2ArrayBuffer 逐字节
 *   string2ArrayBuffer("\x00\x7F\xFF")
 *   → Uint8Array [0, 127, 255]，byteLength = 3  ✔（实测确认）
 *
 * 用例 4 —— json_to_sheet 空数据
 *   exportJson2Excel([], "空表") → 生成只有表头的 xlsx，写 cacheDirectory/空表.xlsx
 *
 * 用例 5 —— 多 sheet 名规范化
 *   exportJson2MultiSheetsExcel({
 *     "一班/名单": [...], "二班?名单": [...]
 *   }, "班级名册")
 *   → SheetNames = ["一班_名单", "二班_名单"]
 *
 * 边界与缺陷（保留并标注）
 * ----------------------------------------------------------------------------
 * 1. 随机数不补零（"5" 而非 "05"），长名 sheet 仍有撞名风险。
 * 2. importExcel2Json 只读第一个 sheet，多 sheet 导入会丢数据。
 * 3. 所有错误只 console.error，不向用户提示（静默失败）。
 * 4. Blob 的 MIME 声明为 "text/plain"，与实际内容不符（不影响功能）。
 * 5. 文件名未做非法字符过滤，仅对 sheet 名做了处理。
 * ============================================================================ */
