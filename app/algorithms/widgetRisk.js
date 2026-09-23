/**
 * 问卷控件取值 / 比较 / 风险判定算法集
 * ============================================================================
 * 来源: assets/www/js/chunk-common.js  →  webpack module "58a84"
 *       （与独立文件 www/js/NeuWidget.js 内容完全一致，webpack 重复内联了一份）
 * 原始文件: assets/www/js/NeuWidget.js （未压缩的 ESM 原码，可直接对照）
 * 导出: getWidgetValue / compareWidgetValue / checkWidgeRisk
 * 还原档位: A（算法类，逐行等价还原 + 完整语义注释 + 用例）
 * 置信度: 高
 * ============================================================================
 *
 * 业务背景
 * ----------------------------------------------------------------------------
 * 「智慧学工」的请假/申请/问卷等流程由「自定义表单控件」构成。每个控件是一个
 * 描述对象 kind（下称 widget），字段约定：
 *
 *   widget.type          控件类型：
 *                          "R" Radio       单选（选项型）
 *                          "C" Checkbox    多选
 *                          "S" Signature   手写签名
 *                          "A" Answer      问答题（文本，值在 .value）
 *                          "T" Text        纯文本（值就是字符串本身）
 *                          "F" File        附件（数组，每项含 srcname）
 *                          "N" Number      数值（值可直接比大小）
 *   widget.selectPattern 选择模式；"S" 表示"单值选择"（single）
 *   widget.isOther       是否带「其他____」附加输入
 *   widget.riskMode      是否开启风险词/风险区间检测
 *   widget.riskConfig    风险配置：
 *                          R/C 型 → 数组（风险选项列表）
 *                          A/T 型 → 换行分隔的字符串（风险词表）
 *                          N   型 → { min, max }
 *
 * 已确认的调用方：chunk-common/8bef（NeuDefineWidget，30KB 的问卷定义组件）、
 * chunk-common/974f（29KB 表单渲染组件）。
 * ============================================================================
 */

/**
 * 把某个控件的原始答案归一化成**可比较的字符串**。
 *
 * 这是整个风险判定与「答案是否变化」判断的基础函数 —— 因为不同控件的答案
 * 结构差异极大（字符串 / {value,other} 对象 / 数组 / 布尔），必须统一成
 * 字符串才能做 === 比较。
 *
 * ── 各类型的归一化规则（★ 逐条对应原码分支）─────────────────────────────
 *
 * 1) R 单选 + 非"S"模式 + isOther
 *      取 `value` 与 `other` 拼接：`value + ":" + other`
 *      other 为空则只返回 value；answer 为空则返回 ""
 *
 * 2) C 多选
 *      先按「isOther 时取 .value，否则答案本身就是数组」取得选项数组；
 *      每个选项若满足 `isOther && 选项 === "其他" && 有 other 文本`，
 *      则拼成 `"其他:文本"`；
 *      然后 **sort() 排序** 再 toString()。
 *      ★ 排序的意义：多选的答案顺序不影响语义，排序后才能做稳定比较。
 *
 * 3) S 签名 → 恒返回 "已签名" / "未签名"（签名内容不参与比较）
 *
 * 4) A 问答 → 取 answer.value；无值返回 ""
 *
 * 5) F 附件 → 收集每项的 srcname，用 "\r\n" 连接
 *      （★ 分隔符是 CRLF，不是 \n —— 原码如此）
 *
 * 6) 其它（T 文本 / N 数值等）→ 原样返回 answer
 *
 * @param {object} widget 控件描述对象
 * @param {*} answer 该控件的答案
 * @returns {string} 归一化后的可比字符串
 */
export function getWidgetValue(widget, answer) {
  // ── 1) Radio + 单选模式 + "其他____" ──────────────────────────────────
  // 注意：条件是 "S" !== selectPattern（即非单值模式）时才走 isOther 分支
  if (widget.type === "R" && widget.selectPattern !== "S" && widget.isOther) {
    return answer ? answer.value + (answer.other ? ":" + answer.other : "") : "";
  }

  // ── 2) Checkbox 多选 ────────────────────────────────────────────────
  if (widget.type === "C") {
    const parts = [];
    // isOther 时选项列表在 answer.value，否则 answer 本身就是选项数组
    const list = answer ? (widget.isOther ? answer.value : answer) : [];
    for (const option of list) {
      parts.push(
        option + (widget.isOther && option === "其他" && answer.other ? ":" + answer.other : ""),
      );
    }
    parts.sort(); // ★ 排序，保证多选比较与顺序无关
    return parts.toString(); // 逗号连接
  }

  // ── 3) Signature 签名 ───────────────────────────────────────────────
  if (widget.type === "S") {
    return answer ? "已签名" : "未签名";
  }

  // ── 4) Answer 问答 ──────────────────────────────────────────────────
  if (widget.type === "A") {
    return answer && answer.value ? answer.value : "";
  }

  // ── 5) File 附件 ────────────────────────────────────────────────────
  if (widget.type === "F") {
    const names = (answer || []).reduce((acc, file) => acc.concat(file.srcname), []);
    return names.join("\r\n"); // ★ CRLF
  }

  // ── 6) 其它类型原样返回 ─────────────────────────────────────────────
  return answer;
}

/**
 * 比较两个答案在语义上是否相同。
 *
 * 对「结构复杂」的类型（R+isOther、C、A、F）先归一化再比较；
 * 对简单类型（T 文本、N 数值、S 签名）直接用 `===` 比较原始值。
 *
 * ★ 为什么 S 签名不需要归一化？因为签名控件作比较时用原始值（真/假），
 *   而 getWidgetValue 会把签名归一成中文串 —— 两者都自洽，但不通用。
 *
 * @param {object} widget 控件描述对象
 * @param {*} a 答案 1
 * @param {*} b 答案 2
 * @returns {boolean}
 */
export function compareWidgetValue(widget, a, b) {
  const needsNormalize =
    (widget.type === "R" && widget.selectPattern !== "S" && widget.isOther) ||
    widget.type === "C" ||
    widget.type === "A" ||
    widget.type === "F";

  return needsNormalize
    ? getWidgetValue(widget, a) === getWidgetValue(widget, b)
    : a === b;
}

/**
 * 风险判定 —— 判断某控件的答案是否命中「风险」。
 *
 * 用于学工管理：请假事由、申请理由等若命中风险词（如"打架""酗酒"），
 * 或数值越过阈值（如请假天数 > max），则在审批列表里标红提醒。
 *
 * ── 五种分支（按控件类型）──────────────────────────────────────────────
 *
 *  A) 开关未开（!widget.riskMode）→ 全部返回 false，除非落到 N 型
 *
 *  B) R 单选：把答案（isOther 时取 .value）在 riskConfig 数组里找，
 *             findIndex(...) > -1 即命中 → true
 *
 *  C) A 问答：riskConfig 是换行分隔的风险词表；
 *             逐词检查 `answer.value.indexOf(词) > -1` → 命中 true
 *
 *  D) T 文本：同上，但检查 `answer.indexOf(词)`
 *
 *  E) C 多选：任一所选项在 riskConfig 里 → true
 *
 *  F) N 数值：**返回语义与其他分支相反** ——
 *             返回 true 表示「在合法区间内」（不是风险！）
 *             返回 false 表示「越界」（是风险）
 *             判定：riskMode 开启 && type==="N" && riskConfig 存在
 *                   && answer 非 null/""/undefined
 *                   && !(max 有效 && answer > max)
 *                   && !(min 有效 && answer < min)
 *             即：在 [min, max] 内返回 true。
 *
 * ★ 注意 F 分支的坑：`null !== riskConfig.max && "" !== riskConfig.max`
 *   表示「max 既不是 null 也不是空串才算有效边界」；
 *   为便于阅读下文的 isBoundSet 辅助函数保留了原判断。
 *
 * ★★ 已知缺陷（本还原用 Node 实测确认，详见文末用例 8）★★
 *   `replace(/(\r\n)/g, /\n/)` 的第二参是**正则字面量 /\n/**，而不是字符串。
 *   JS 会先把它 toString() 成 **4 个字符的字符串 `"/\n/"`**（斜杠、反斜杠、n、斜杠），
 *   替换进去的不是换行符。实测后果：
 *
 *     riskConfig = "打架\n酗酒"      → split 得 ["打架","酗酒"]         ✔ 正常
 *     riskConfig = "打架\r\n酗酒"    → split 得 ["打架/\\n/酗酒"]        ✘ 失效
 *
 *   即：**服务端若用 CRLF 分隔风险词，风险词检测会完全失效**（永远匹配不到），
 *   因为切出来的"词"里混进了 `/\n/` 字面量。这是一个真实的静默安全缺陷 ——
 *   且完全静默（无报错、无日志），风险问卷会被判为"无风险"。
 *   仅当服务端使用纯 `\n` 分隔时功能才正常。
 *
 *   → 还原时**保持原样**（忠实还原），并在报告中标为高优先级缺陷。
 *
 * @param {object} widget 控件描述对象
 * @param {*} answer 答案
 * @returns {boolean} 对 R/A/T/C 型：true=命中风险；对 N 型：true=在合法区间
 */
export function checkWidgeRisk(widget, answer) {
  // ── B) Radio 单选：命中风险选项 ──────────────────────────────────────
  if (widget.riskMode && widget.type === "R") {
    const cfg = widget.riskConfig || [];
    const probe = widget.selectPattern !== "S" && widget.isOther ? answer.value : answer;
    if (cfg.findIndex((item) => item === probe) > -1) return true;
  }

  // ── C) Answer 问答：命中风险词（包含匹配）────────────────────────────
  if (widget.riskMode && widget.type === "A" && widget.riskConfig && answer) {
    // ★ 原码笔误：/\n/ 作为替换值（见上方说明），保持原样
    const hit = widget.riskConfig
      .replace(/(\r\n)/g, /\n/)
      .split(/\n/)
      .findIndex((word) => answer.value.indexOf(word) > -1);
    if (hit > -1) return true;
  }

  // ── D) Text 文本：命中风险词 ────────────────────────────────────────
  if (widget.riskMode && widget.type === "T" && widget.riskConfig && answer) {
    const hit = widget.riskConfig
      .replace(/(\r\n)/g, /\n/)
      .split(/\n/)
      .findIndex((word) => answer.indexOf(word) > -1);
    if (hit > -1) return true;
  }

  // ── E) Checkbox 多选：任一选项命中 ──────────────────────────────────
  if (widget.riskMode && widget.type === "C") {
    const selected = [];
    const list = answer ? (widget.isOther ? answer.value : answer) : [];
    for (const option of list) selected.push(option);
    const cfg = widget.riskConfig || [];
    return selected.findIndex((option) => cfg.findIndex((item) => item === option) > -1) > -1;
  }

  // ── F) Number 数值：返回「是否在合法区间」─────────────────────────────
  const numberChecked =
    !(!widget.riskMode || widget.type !== "N" || !widget.riskConfig ||
      answer === null || answer === "" || answer === undefined) &&
    !(widget.riskConfig.max !== null && widget.riskConfig.max !== "" && answer > widget.riskConfig.max) &&
    !(widget.riskConfig.min !== null && widget.riskConfig.min !== "" && answer < widget.riskConfig.min);

  return numberChecked;
}

/* ============================================================================
 * 验证用例（用真实结构跑一遍，数值均为手工核算）
 * ============================================================================
 *
 * 用例 1 —— 多选排序稳定性
 *   widget = { type:"C", isOther:false }
 *   getWidgetValue(widget, ["B","A"]) → "A,B"
 *   getWidgetValue(widget, ["A","B"]) → "A,B"
 *   compareWidgetValue(widget, ["B","A"], ["A","B"]) → true   ✔ 顺序无关
 *
 * 用例 2 —— 单选 + 其他
 *   widget = { type:"R", selectPattern:"R", isOther:true }
 *   getWidgetValue(widget, { value:"其他", other:"发烧" }) → "其他:发烧"
 *   getWidgetValue(widget, { value:"事假" })               → "事假"
 *
 * 用例 3 —— 签名
 *   getWidgetValue({type:"S"}, true)  → "已签名"
 *   getWidgetValue({type:"S"}, null)  → "未签名"
 *
 * 用例 4 —— 附件 CRLF 连接
 *   getWidgetValue({type:"F"}, [{srcname:"a.pdf"},{srcname:"b.png"}]) → "a.pdf\r\nb.png"
 *
 * 用例 5 —— 风险词命中（T 文本）
 *   widget = { type:"T", riskMode:true, riskConfig:"打架\n酗酒" }
 *   checkWidgeRisk(widget, "昨晚有人在宿舍打架") → true
 *   checkWidgeRisk(widget, "正常请假回家")       → false
 *
 * 用例 6 —— 数值区间（★ 语义相反，重点）
 *   widget = { type:"N", riskMode:true, riskConfig:{ min:0, max:7 } }
 *   checkWidgeRisk(widget, 3)  → true   在区间内（正常）
 *   checkWidgeRisk(widget, 30) → false  超出 max=7（风险）
 *   checkWidgeRisk(widget, -1) → false  低于 min=0（风险）
 *   checkWidgeRisk(widget, null) → false 空值不算合法
 *
 * 用例 8 —— ★ 分隔符缺陷实测（Node 复跑确认）
 *   const words = cfg => cfg.replace(/(\r\n)/g, /\n/).split(/\n/);
 *
 *   words("打架\n酗酒")      → ["打架","酗酒"]
 *   words("打架\r\n酗酒")    → ["打架/\\n/酗酒"]      ← 4 字符字面量混入
 *
 *   后果（answer = "我打架了"）：
 *     LF 分隔配置   → 命中 "打架"  → checkWidgeRisk = true   ✔
 *     CRLF 分隔配置 → 词变成 "打架/\n/酗酒"，indexOf 全部落空 → false  ✘
 *   即 **CRLF 风险词表下风险检测静默失效**。
 * ============================================================================ */
