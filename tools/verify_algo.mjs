const EARTH_RADIUS_KM = 6378.137;
function getDistance(lat1, lng1, lat2, lng2) {
  const r1 = (lat1 * Math.PI) / 180, r2 = (lat2 * Math.PI) / 180;
  const dLat = r1 - r2;
  const dLng = (lng1 * Math.PI) / 180 - (lng2 * Math.PI) / 180;
  const a = Math.pow(Math.sin(dLat / 2), 2) +
    Math.cos(r1) * Math.cos(r2) * Math.pow(Math.sin(dLng / 2), 2);
  let s = 2 * Math.asin(Math.sqrt(a));
  s *= EARTH_RADIUS_KM;
  return Math.round(s * 1e4) / 1e4;
}
console.log('=== HAVERSINE ===');
console.log('same point        ', getDistance(41.8057,123.4315,41.8057,123.4315));
console.log('shenyang->dalian  ', getDistance(41.8057,123.4315,38.9140,121.6147));
console.log('beijing->shanghai ', getDistance(39.9042,116.4074,31.2304,121.4737));
console.log('campus 0.001 deg  ', getDistance(41.8057,123.4315,41.8067,123.4315));
console.log('campus 100m check ', getDistance(41.8057,123.4315,41.8067,123.4315) <= 0.2);

// sheet name
const SHEET_NAME_MAX = 31, SHEET_NAME_TRUNCATE = 28;
const sanitize = (s) => s.replace(/\?/g,"_").replace(/\[/g,"_").replace(/\]/g,"_").replace(/\*/g,"_").replace(/\//g,"_");
function formatSheetName(name, rand) {
  if (name.length < SHEET_NAME_MAX) return sanitize(name);
  const t = `${name.substr(0, SHEET_NAME_TRUNCATE)}_${rand !== undefined ? rand : Math.floor(100*Math.random())}`;
  return sanitize(t);
}
console.log('\n=== SHEET NAME ===');
console.log('short            ', JSON.stringify(formatSheetName("学生名单")));
console.log('illegal chars    ', JSON.stringify(formatSheetName("2024/春季?班[1]*")));
const long = "一二三四五六七八九十一二三四五六七八九十一二三四五六七八九十一二";
console.log('long input len   ', long.length);
const out = formatSheetName(long, 37);
console.log('long output      ', JSON.stringify(out), 'len=', out.length);

// string2ArrayBuffer
function string2ArrayBuffer(s){const b=new ArrayBuffer(s.length),v=new Uint8Array(b);for(let i=0;i<s.length;++i)v[i]=s.charCodeAt(i)&0xFF;return v;}
console.log('\n=== ARRAYBUFFER ===');
console.log('bytes            ', Array.from(string2ArrayBuffer("\x00\x7F\xFF")), 'len=', string2ArrayBuffer("\x00\x7F\xFF").length);

// widget value
function getWidgetValue(w, ans) {
  if (w.type==="R" && w.selectPattern!=="S" && w.isOther) return ans ? ans.value + (ans.other ? ":"+ans.other : "") : "";
  if (w.type==="C") { const p=[]; const list = ans ? (w.isOther ? ans.value : ans) : [];
    for (const o of list) p.push(o + (w.isOther && o==="其他" && ans.other ? ":"+ans.other : ""));
    p.sort(); return p.toString(); }
  if (w.type==="S") return ans ? "已签名" : "未签名";
  if (w.type==="A") return ans && ans.value ? ans.value : "";
  if (w.type==="F") return (ans||[]).reduce((a,f)=>a.concat(f.srcname),[]).join("\r\n");
  return ans;
}
console.log('\n=== WIDGET VALUE ===');
console.log('checkbox sort    ', JSON.stringify(getWidgetValue({type:"C",isOther:false}, ["B","A"])), JSON.stringify(getWidgetValue({type:"C",isOther:false}, ["A","B"])));
console.log('radio other      ', JSON.stringify(getWidgetValue({type:"R",selectPattern:"R",isOther:true}, {value:"其他",other:"发烧"})));
console.log('radio plain      ', JSON.stringify(getWidgetValue({type:"R",selectPattern:"R",isOther:true}, {value:"事假"})));
console.log('signature true   ', JSON.stringify(getWidgetValue({type:"S"}, true)));
console.log('signature false  ', JSON.stringify(getWidgetValue({type:"S"}, null)));
console.log('file CRLF        ', JSON.stringify(getWidgetValue({type:"F"}, [{srcname:"a.pdf"},{srcname:"b.png"}])));

// risk
function checkWidgeRisk(w, ans) {
  if (w.riskMode && w.type==="R") { const cfg=w.riskConfig||[]; const p = w.selectPattern!=="S"&&w.isOther ? ans.value : ans; if (cfg.findIndex(i=>i===p)>-1) return true; }
  if (w.riskMode && w.type==="A" && w.riskConfig && ans) { const hit = w.riskConfig.replace(/(\r\n)/g,/\n/).split(/\n/).findIndex(x=>ans.value.indexOf(x)>-1); if (hit>-1) return true; }
  if (w.riskMode && w.type==="T" && w.riskConfig && ans) { const hit = w.riskConfig.replace(/(\r\n)/g,/\n/).split(/\n/).findIndex(x=>ans.indexOf(x)>-1); if (hit>-1) return true; }
  if (w.riskMode && w.type==="C") { const sel=[]; const list = ans ? (w.isOther ? ans.value : ans) : []; for (const o of list) sel.push(o); return sel.findIndex(o=>(w.riskConfig||[]).findIndex(x=>x===o)>-1)>-1; }
  return !(!w.riskMode || w.type!=="N" || !w.riskConfig || ans===null || ans==="" || ans===undefined) &&
    !(w.riskConfig.max!==null && w.riskConfig.max!=="" && ans>w.riskConfig.max) &&
    !(w.riskConfig.min!==null && w.riskConfig.min!=="" && ans<w.riskConfig.min);
}
console.log('\n=== RISK ===');
const t={type:"T",riskMode:true,riskConfig:"打架\n酗酒"};
console.log('T hit            ', checkWidgeRisk(t,"昨晚有人在宿舍打架"));
console.log('T miss           ', checkWidgeRisk(t,"正常请假回家"));
const n={type:"N",riskMode:true,riskConfig:{min:0,max:7}};
console.log('N in range (3)   ', checkWidgeRisk(n,3));
console.log('N over max (30)  ', checkWidgeRisk(n,30));
console.log('N under min (-1) ', checkWidgeRisk(n,-1));
console.log('N null           ', checkWidgeRisk(n,null));
const r={type:"R",selectPattern:"R",riskMode:true,riskConfig:["打架","酗酒"]};
console.log('R hit            ', checkWidgeRisk(r,"打架"));
console.log('R miss           ', checkWidgeRisk(r,"事假"));

// verify the /\n/ replace bug claim
console.log('\n=== replace(/(\r\n)/g, /\n/) behaviour ===');
const cfg = "打架\r\n酗酒";
const rep = cfg.replace(/(\r\n)/g, /\n/);
console.log('raw              ', JSON.stringify(cfg));
console.log('after replace    ', JSON.stringify(rep));
console.log('split(/\n/)      ', JSON.stringify(rep.split(/\n/)));
