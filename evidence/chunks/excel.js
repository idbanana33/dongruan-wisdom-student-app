import XLSX from "xlsx";
function importExcel2Json(e, o) {
  const t = new FileReader();
  ((t.onload = function (e) {
    const t = XLSX.read(e.target.result, { type: "binary" });
    o && o(XLSX.utils.sheet_to_json(t.Sheets[t.SheetNames[0]], { defval: "" }));
  }),
    t.readAsBinaryString(e));
}
function exportJson2Excel(e, o, t = "sheet1", r = !0) {
  const n = XLSX.utils.json_to_sheet(e);
  var c = new Blob([sheet2Blob({ [formatSheetName(t)]: n })], { type: "text/plain" });
  window.resolveLocalFileSystemURL(
    cordova.file.cacheDirectory,
    function (e) {
      e.getFile(
        `${o}.xlsx`,
        { create: !0, exclusive: !1 },
        function (e) {
          e.createWriter(function (e) {
            ((e.onwriteend = function () {
              r &&
                cordova.plugins.fileOpener2.showOpenWithDialog(
                  `${cordova.file.cacheDirectory}${o}.xlsx`,
                  "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
                  (e) => {},
                );
            }),
              (e.onerror = function (e) {
                console.error("写入文件失败：" + e.toString());
              }),
              e.write(c));
          });
        },
        function (e) {
          console.error("写入文件失败：" + e.toString());
        },
      );
    },
    function (e) {
      console.error("写入文件失败：" + e.toString());
    },
  );
}
function exportJson2MultiSheetsExcel(e, o) {
  const t = Object.keys(e).reduce(
    (o, t) => ((o[formatSheetName(t)] = XLSX.utils.json_to_sheet(e[t])), o),
    {},
  );
  var r = new Blob([sheet2Blob(t)], { type: "text/plain" });
  window.resolveLocalFileSystemURL(
    cordova.file.cacheDirectory,
    function (e) {
      e.getFile(
        `${o}.xlsx`,
        { create: !0, exclusive: !1 },
        function (e) {
          e.createWriter(function (e) {
            ((e.onwriteend = function () {
              cordova.plugins.fileOpener2.showOpenWithDialog(
                `${cordova.file.cacheDirectory}${o}.xlsx`,
                "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
                (e) => {},
              );
            }),
              (e.onerror = function (e) {
                console.error("写入文件失败：" + e.toString());
              }),
              e.write(r));
          });
        },
        function (e) {
          console.error("写入文件失败：" + e.toString());
        },
      );
    },
    function (e) {
      console.error("写入文件失败：" + e.toString());
    },
  );
}
function openExcelFile(e) {
  cordova.plugins.fileOpener2.showOpenWithDialog(
    `${cordova.file.cacheDirectory}${e}.xlsx`,
    "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
    (e) => {},
  );
}
function formatSheetName(e) {
  if (e.length < 31)
    return e
      .replace(/\?/g, "_")
      .replace(/\[/g, "_")
      .replace(/\]/g, "_")
      .replace(/\*/g, "_")
      .replace(/\//g, "_");
  {
    const o = `${e.substr(0, 28)}_${Math.floor(100 * Math.random())}`;
    return o
      .replace(/\?/g, "_")
      .replace(/\[/g, "_")
      .replace(/\]/g, "_")
      .replace(/\*/g, "_")
      .replace(/\//g, "_");
  }
}
function sheet2Blob(e) {
  const o = { SheetNames: Object.keys(e), Sheets: e },
    t = { bookType: "xlsx", bookSST: !1, type: "binary" },
    r = XLSX.write(o, t),
    n = new Blob([string2ArrayBuffer(r)], { type: "application/octet-stream" });
  return n;
}
function string2ArrayBuffer(e) {
  const o = new ArrayBuffer(e.length),
    t = new Uint8Array(o);
  for (let r = 0; r < e.length; ++r) t[r] = 255 & e.charCodeAt(r);
  return o;
}
export { importExcel2Json, exportJson2Excel, exportJson2MultiSheetsExcel, openExcelFile };
