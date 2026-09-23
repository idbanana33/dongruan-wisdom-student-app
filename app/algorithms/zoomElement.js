/**
 * NeuScale.js —— 图片查看器「缩放 / 平移」视口约束算法
 * ============================================================================
 * 来源: assets/www/js/NeuScale.js   （★ 原码，未混淆，构建残留的原始 ESM 源文件）
 *       webpack 打包时它被 tree-shake 掉了（index.html 不加载、无 chunk 引用），
 *       因此这份未压缩源码原样留在 APK 里 —— 属"零成本原码"。
 * 导出: zoomElement
 * 还原档位: A（算法类，逐行等价 + 变量语义还原 + 完整推导 + 用例）
 * 置信度: 高
 * ============================================================================
 *
 * 用途
 * ----------------------------------------------------------------------------
 * 全屏查看图片（NeuFullScreenImage 组件）时的手势缩放：
 *   · 双击 / 点按钮 → 在 scale 1 与 2 之间切换
 *   · 双指捏合      → scale ∈ [1, 3]
 *   · 单指拖动      → 平移（pan）
 *   平移量经过**边界钳制**，保证放大后的图片不会移出可视区域。
 *
 * 依赖: hammerjs（手势）
 *
 * 状态机
 * ----------------------------------------------------------------------------
 *   scale   o  ∈ [1, 3]   当前缩放倍率
 *   translate s = {x,y}   当前平移量（px，相对元素原位）
 *   start     f = {x,y}   手势开始时的 translate（基准）
 *   halfSize  m = {x,y}   元素原始尺寸的一半（元素中心相对自身的偏移，常量）
 *   center    l = {x,y}   元素中心在视口坐标系中的位置 = halfSize + translate
 *   pinchOff  h = {x,y}   手势中心相对元素中心的偏移
 *   transition r          过渡动画时间（字符串，赋给 style.transition）
 *   ticking   i            是否已排入 requestAnimationFrame（避免重复排队）
 *
 * 数学推导
 * ----------------------------------------------------------------------------
 * 设元素原始尺寸 W×H，当前缩放 s，平移 s⃗。
 * 元素中心在视口中的位置：  center = (W/2, H/2) + s⃗
 * 元素变换后包围盒宽度：    W' = W · s   （由 getBoundingClientRect 得到实测值）
 *
 * 要让缩放后的元素**仍然铺满视口**（即不能露出空白），平移量的极限为：
 *
 *      limit = W'/2 − W/2 = W(s−1)/2
 *
 * 这就是原码里的
 *      t.getBoundingClientRect().width / 2 − t.offsetWidth / 2
 *
 * ★ 用 getBoundingClientRect().width 而不是 offsetWidth*scale，
 *   是为了把可能存在的其它 CSS 变换/布局也一并算进去（更稳健）。
 *
 * 捏合时保持「手势中心所对应的图像点不动」：
 *      设手势中心相对元素中心的偏移为 h⃗，
 *      新平移量 s⃗' = (1 − s') · h⃗ + f⃗      （f⃗ 为手势开始时的平移量）
 *   推导：元素上被手指按住的点在屏幕上的位置应保持不动，
 *        该点相对元素中心的偏移为 h⃗/s，新倍率下要维持其屏幕位置，即得上式。
 *   双子（double-tap）时把 h⃗ 取为「点击点相对元素中心的偏移」，
 *   于是双击处会成为缩放中心 —— 与地图 App 的手感一致。
 * ============================================================================
 */

import Hammer from "hammerjs";

/**
 * @typedef {{x:number, y:number}} Point
 */

/** 缩放倍率的上下限 */
const MIN_SCALE = 1;
const MAX_SCALE = 3;

/** 双击放大后的倍率 */
const DOUBLE_TAP_SCALE = 2;

/**
 * 创建一个二维点。
 * @param {number} x
 * @param {number} y
 * @returns {Point}
 * @private
 */
function point(x, y) {
  return { x, y };
}

/**
 * 判断数值是否为「非负」（原码用正则校验数字格式 + 取绝对值比较）。
 *
 * ★ 原码的正则 `^-?[0-9]*.?[0-9]*$` 中的 `.` 未转义，
 *   在字符类之外 `.` 匹配任意字符 —— 属于原码写法缺陷（会放过 "1a2" 之类）。
 *   但由于本函数只用于内部产生的极限值（恒为合法数字），实际不影响。
 *
 * @param {number} value
 * @returns {boolean|undefined} 非负返回 true；负数返回 false；非法格式返回 undefined
 * @private
 */
function isNonNegative(value) {
  const NUMBER_RE = /^-?[0-9]*.?[0-9]*$/;
  if (NUMBER_RE.test(value)) {
    const abs = Math.abs(value);
    return value === abs;
  }
  return undefined;
}

/**
 * 把越界的平移量钳制到极限值上，**保持符号**。
 *
 * 调用方已用 `Math.abs(v) > Math.abs(limit)` 判断越界，
 * 所以本函数只需返回 `sign(v) · |limit|`。
 *
 * ★ 原码实现用 isNonNegative 判断符号：
 *     !isNonNegative(v) && isNonNegative(limit)  → 返回 "-" + limit
 *   由于传入的 limit 恒为非负（由宽高差算得），该式等价于 sign 判定。
 *
 * @param {number} value 越界的平移量
 * @param {number} limit 极限值（非负）
 * @returns {number} 带正确符号的极限值
 * @private
 */
function clampToLimit(value, limit) {
  const valuePositive = isNonNegative(value);
  const limitPositive = isNonNegative(limit);

  // 注意原码的 `Number(!valuePositive && limitPositive ? "-" + limit : limit)`
  return Number(!valuePositive && limitPositive ? "-" + limit : limit);
}

/**
 * 计算平移量的极限（px）。
 *
 *   limit = 变换后包围盒宽/高 ÷ 2 − 元素原始宽/高 ÷ 2
 *
 * @param {HTMLElement} el 被缩放的元素
 * @returns {Point} {x: 水平极限, y: 垂直极限}（非负）
 * @private
 */
function getTranslateLimits(el) {
  const rect = el.getBoundingClientRect();
  return point(
    rect.width / 2 - el.offsetWidth / 2,
    rect.height / 2 - el.offsetHeight / 2,
  );
}

/**
 * 给元素绑定「双指缩放 + 拖动平移 + 双击放大」交互。
 *
 * @param {HTMLElement}  el            被操作的元素（通常是全屏图片）
 * @param {HTMLElement} [zoomInButton]  可选：放大按钮（点它 = 双击放大）
 * @param {HTMLElement} [zoomOutButton] 可选：缩小按钮（点它 = 双击还原）
 */
export function zoomElement(el, zoomInButton, zoomOutButton) {
  // ── requestAnimationFrame（带 polyfill，走 Hammer 的前缀探测）──────────
  const requestFrame = (function () {
    return (
      window[Hammer.prefixed(window, "requestAnimationFrame")] ||
      function (cb) {
        window.setTimeout(cb, 1000 / 60); // 退化为 60fps 定时器
      }
    );
  })();

  // ── 状态 ────────────────────────────────────────────────────────────────
  let ticking = false;          // 是否已排队 rAF
  let scale = 1;                // 当前缩放倍率
  let transition = "";          // style.transition 的值
  let translate = point(0, 0);  // 当前平移量
  let start = point(0, 0);      // 手势开始时的平移量（基准）
  let pinchOffset = point(0, 0); // 手势中心相对元素中心的偏移

  /**
   * 元素原始尺寸的一半 —— 元素中心相对自身左上角的偏移。
   * ★ 这是**常量**，初始化后原码再未修改（只在求 center 时作为基准被引用）。
   */
  const halfSize = point(el.offsetWidth / 2, el.offsetHeight / 2);

  /** 元素中心在视口坐标系中的位置（每次手势开始时重算） */
  let center = point(el.offsetWidth / 2, el.offsetHeight / 2);

  updateButtonVisibility();

  // ── 按钮：点一下等同于一次双击 ────────────────────────────────────────
  if (zoomInButton) {
    const hammerIn = new Hammer(zoomInButton);
    hammerIn.on("tap", () => {
      toggleScale({ center: point(0, 0) });
    });
  }
  if (zoomOutButton) {
    const hammerOut = new Hammer(zoomOutButton);
    hammerOut.on("tap", () => {
      toggleScale({ center: point(0, 0) });
    });
  }

  // ══════════════════════════════════════════════════════════════════════
  //  渲染
  // ══════════════════════════════════════════════════════════════════════

  /**
   * 把当前 scale / translate 写进元素样式（带 Webkit / ms 前缀）。
   * 由 rAF 调度，避免同一帧内多次写样式。
   * @private
   */
  function applyTransform() {
    el.style.transition = transition;
    el.style.transform = `translate(${translate.x}px,${translate.y}px) scale(${scale},${scale})`;
    el.style.WebkitTransform = `translate(${translate.x}px,${translate.y}px) scale(${scale},${scale})`;
    el.style.msTransform = `translate(${translate.x}px,${translate.y}px) scale(${scale},${scale})`;
    updateButtonVisibility();
    ticking = false;
  }

  /**
   * 请求下一帧渲染（若尚未排队）。
   * @private
   */
  function scheduleRender() {
    if (ticking) return;
    requestFrame(applyTransform);
    ticking = true;
  }

  /**
   * 根据缩放状态切换两个按钮的显隐：
   * scale === 1 显示「放大」按钮，否则显示「缩小」按钮。
   * @private
   */
  function updateButtonVisibility() {
    if (zoomInButton) {
      zoomInButton.style.display = scale === 1 ? "inline" : "none";
    }
    if (zoomOutButton) {
      zoomOutButton.style.display = scale === 1 ? "none" : "inline";
    }
  }

  // ══════════════════════════════════════════════════════════════════════
  //  缩放核心
  // ══════════════════════════════════════════════════════════════════════

  /**
   * 双击 / 点按钮：在「原始尺寸」与「放大 2 倍」之间切换。
   *
   * 放大时以**手势中心**为缩放中心：
   *   newTranslate = (1 − newScale) · pinchOffset + start
   * 然后按 ±limit 钳制。
   *
   * @param {{center: Point}} event 手势事件（双击时带真实 center；按钮点击时传 (0,0)）
   * @private
   */
  function toggleScale(event) {
    transition = "";
    start = point(translate.x, translate.y);

    // 元素中心在视口中的位置 = 半尺寸 + 当前平移
    center = point(halfSize.x + start.x, halfSize.y + start.y);
    // 手势中心相对元素中心的偏移
    pinchOffset = point(event.center.x - center.x, event.center.y - center.y);

    if (scale > MIN_SCALE) {
      // 已放大 → 还原
      scale = MIN_SCALE;
      translate = point(0, 0);
    } else {
      // 未放大 → 放大到 2 倍，并把点击点作为缩放中心
      scale = DOUBLE_TAP_SCALE;

      let nextX = Number((1 - scale) * pinchOffset.x + start.x);
      let nextY = Number((1 - scale) * pinchOffset.y + start.y);

      const limit = getTranslateLimits(el);

      if (Math.abs(nextX) > Math.abs(limit.x)) {
        nextX = clampToLimit(nextX, limit.x);
      }
      if (Math.abs(nextY) > Math.abs(limit.y)) {
        nextY = clampToLimit(nextY, limit.y);
      }

      translate = point(nextX, nextY);
    }

    scheduleRender();
  }

  // ══════════════════════════════════════════════════════════════════════
  //  手势绑定
  // ══════════════════════════════════════════════════════════════════════

  const hammer = new Hammer(el);

  // —— 双击放大 / 还原 ——
  hammer.on("doubletap", (event) => {
    toggleScale(event);
  });

  // —— 拖动平移 ——
  hammer.on("panstart", () => {
    start = point(translate.x, translate.y);
  });

  hammer.on("panmove", (event) => {
    // ★ 原码把 transition 设为 "1.6" —— 缺单位，是非法 CSS 值，
    //   浏览器会忽略该赋值（保留上一次的值）。疑为 "1.6s" 的笔误。
    //   效果：平移是瞬时跟随的。还原时保持原样并标注。
    transition = "1.6";

    let nextX = Number(start.x + event.deltaX);
    let nextY = Number(start.y + event.deltaY);

    const limit = getTranslateLimits(el);

    if (Math.abs(nextX) > Math.abs(limit.x)) {
      nextX = clampToLimit(nextX, limit.x);
    }
    if (Math.abs(nextY) > Math.abs(limit.y)) {
      nextY = clampToLimit(nextY, limit.y);
    }

    translate = point(nextX, nextY);
    scheduleRender();
  });

  // —— 双指捏合 ——
  hammer.on("pinchstart", (event) => {
    transition = "";
    start = point(translate.x, translate.y);
    center = point(halfSize.x + start.x, halfSize.y + start.y);
    pinchOffset = point(event.center.x - center.x, event.center.y - center.y);
  });

  hammer.on("pinchmove", (event) => {
    // 倍率 = 起始倍率 × 手势缩放因子，钳制到 [1, 3]
    let nextScale = scale * event.scale;
    if (nextScale < MIN_SCALE) {
      nextScale = MIN_SCALE;
    } else if (nextScale > MAX_SCALE) {
      nextScale = MAX_SCALE;
    }
    scale = nextScale;

    // 保持手势中心对应的图像点不动
    let nextX = Number((1 - scale) * pinchOffset.x + start.x);
    let nextY = Number((1 - scale) * pinchOffset.y + start.y);

    const limit = getTranslateLimits(el);

    if (Math.abs(nextX) > Math.abs(limit.x)) {
      nextX = clampToLimit(nextX, limit.x);
    }
    if (Math.abs(nextY) > Math.abs(limit.y)) {
      nextY = clampToLimit(nextY, limit.y);
    }

    translate = point(nextX, nextY);
    scheduleRender();
  });
}

/* ============================================================================
 * 验证用例
 * ============================================================================
 *
 * 用例 1 —— 同点距离：双击关闭状态 → 放大 2 倍
 *   初始: scale=1, translate=(0,0), halfSize=(200,150)  (元素 400×300)
 *   双击于元素正中: event.center = (200,150)
 *     center      = (200+0, 150+0) = (200,150)
 *     pinchOffset = (200−200, 150−150) = (0,0)
 *     scale = 2
 *     nextX = (1−2)*0 + 0 = 0    nextY = 0
 *     limit = (400*2/2 − 400/2, 300*2/2 − 300/2) = (200, 150)
 *     |0| > |200|? 否 → translate = (0,0)
 *   → 元素以中心放大 2 倍，不偏移  ✔
 *
 * 用例 2 —— 双击右上角（以点击点为缩放中心）
 *   元素 400×300，halfSize=(200,150)，双击点 center=(350,250)
 *     center      = (200,150)
 *     pinchOffset = (350−200, 250−150) = (150, 100)
 *     scale = 2
 *     nextX = (1−2)*150 + 0 = −150     nextY = (1−2)*100 + 0 = −100
 *     limit = (200, 150)
 *     |−150| > |200|? 否  |−100| > |150|? 否
 *     → translate = (−150, −100)
 *   → 右下方内容被拉入视野，双击点保持原位  ✔
 *
 * 用例 3 —— 边界钳制触发
 *   元素 400×300 已放大到 scale=2，translate=(200,150)（已顶到右/下极限）
 *   继续拖动 deltaX=+100:
 *     nextX = 200+100 = 300
 *     limit.x = 200（scale=2 时）
 *     |300| > |200| → clampToLimit(300, 200)
 *        isNonNegative(300)=true → !true = false → 返回 Number(200) = 200
 *     → translate.x = 200  被钳在极限上  ✔
 *
 *   若向左拖到 nextX = −300：
 *     |−300| > |200| → clampToLimit(−300, 200)
 *        isNonNegative(−300)=false → !false = true
 *        isNonNegative(200)=true → 返回 Number("-200") = −200
 *     → translate.x = −200  符号保留、幅值钳到极限  ✔
 *
 * 用例 4 —— 捏合倍率钳制
 *   当前 scale=2，捏合 event.scale=2.5 → nextScale=5 → 钳到 MAX_SCALE=3
 *   当前 scale=1，捏合 event.scale=0.3 → nextScale=0.3 → 钳到 MIN_SCALE=1
 *
 * 用例 5 —— 按钮显隐
 *   scale=1  → zoomIn 按钮 display:"inline"，zoomOut display:"none"
 *   scale=2  → zoomIn display:"none"，zoomOut display:"inline"
 *
 * 已知缺陷（保留原样并标注）
 * ----------------------------------------------------------------------------
 * 1. `transition = "1.6"` 缺单位（应为 "1.6s"），非法 CSS 值被浏览器忽略。
 * 2. isNonNegative 的正则 `.` 未转义。
 * 3. halfSize 在元素尺寸变化（旋转屏幕）后不会更新。
 * 4. clampToLimit 只判断越界并贴边，不做"软回弹"。
 * ============================================================================ */
