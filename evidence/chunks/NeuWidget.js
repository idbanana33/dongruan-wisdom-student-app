function getWidgetValue(e, i) {
  if ("R" === e.type && "S" !== e.selectPattern && e.isOther)
    return i ? i.value + (i.other ? ":" + i.other : "") : "";
  if ("C" === e.type) {
    const t = [];
    for (const r of i ? (e.isOther ? i.value : i) : [])
      t.push(r + (e.isOther && "其他" === r && i.other ? ":" + i.other : ""));
    return (t.sort(), t.toString());
  }
  if ("S" === e.type) return i ? "已签名" : "未签名";
  if ("A" === e.type) return i && i.value ? i.value : "";
  if ("F" === e.type) {
    const e = (i || []).reduce((e, i) => e.concat(i.srcname), []);
    return e.join("\r\n");
  }
  return i;
}
function compareWidgetValue(e, i, t) {
  return ("R" === e.type && "S" !== e.selectPattern && e.isOther) ||
    "C" === e.type ||
    "A" === e.type ||
    "F" === e.type
    ? getWidgetValue(e, i) === getWidgetValue(e, t)
    : i === t;
}
function checkWidgeRisk(e, i) {
  if (
    e.riskMode &&
    "R" === e.type &&
    (e.riskConfig || []).findIndex(
      (t) => t === ("S" !== e.selectPattern && e.isOther ? i.value : i),
    ) > -1
  )
    return !0;
  if (
    e.riskMode &&
    "A" === e.type &&
    e.riskConfig &&
    i &&
    e.riskConfig
      .replace(/(\r\n)/g, /\n/)
      .split(/\n/)
      .findIndex((e) => i.value.indexOf(e) > -1) > -1
  )
    return !0;
  if (
    e.riskMode &&
    "T" === e.type &&
    e.riskConfig &&
    i &&
    e.riskConfig
      .replace(/(\r\n)/g, /\n/)
      .split(/\n/)
      .findIndex((e) => i.indexOf(e) > -1) > -1
  )
    return !0;
  if (e.riskMode && "C" === e.type) {
    const t = [];
    for (const r of i ? (e.isOther ? i.value : i) : []) t.push(r);
    return t.findIndex((i) => (e.riskConfig || []).findIndex((e) => e === i) > -1) > -1;
  }
  return (
    !(!e.riskMode || "N" !== e.type || !e.riskConfig || null === i || "" === i || void 0 === i) &&
    !(null !== e.riskConfig.max && "" !== e.riskConfig.max && i > e.riskConfig.max) &&
    !(null !== e.riskConfig.min && "" !== e.riskConfig.min && i < e.riskConfig.min)
  );
}
export { getWidgetValue, compareWidgetValue, checkWidgeRisk };
