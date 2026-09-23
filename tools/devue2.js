#!/usr/bin/env node
/**
 * devue2.js —— Vue render 函数 -> <template> 反编译器 v2
 *
 * 相比 v1 的改进：
 *  - 判定 _l / _v / _s 等 helper 时不依赖固定 vm 名（按调用形状识别）
 *  - 支持 v-for 正确嵌套（_l 作为 children 时包一层，作为元素时挂指令）
 *  - 支持 scopedSlots（_u）输出 <template v-slot:xxx>
 *  - 表达式打印带最小必要括号
 *  - 多行表达式压平，空行清理
 */
'use strict';
const acorn = require('acorn');

/* ============================= 表达式打印 ============================= */

/** JS 二元运算符优先级 */
const PREC = {
  '||': 3, '??': 3, '&&': 4,
  '|': 5, '^': 6, '&': 7,
  '==': 8, '!=': 8, '===': 8, '!==': 8,
  '<': 9, '>': 9, '<=': 9, '>=': 9, 'in': 9, 'instanceof': 9,
  '<<': 10, '>>': 10, '>>>': 10,
  '+': 11, '-': 11,
  '*': 12, '/': 12, '%': 12,
  '**': 13,
};
const PREC_COND = 2, PREC_ASSIGN = 1, PREC_SEQ = 0, PREC_ATOM = 100;

function needsParen(child, parentPrec, isRight, parentOp) {
  const cp = childPrec(child);
  if (cp > parentPrec) return false;
  if (cp < parentPrec) return true;
  // 同优先级：右侧的字面量在 - / 等运算下需要括号
  if (isRight && parentOp && '+-*/%'.indexOf(parentOp[0]) >= 0 && child.type === 'BinaryExpression') return true;
  return false;
}

function childPrec(n) {
  if (!n) return PREC_ATOM;
  switch (n.type) {
    case 'SequenceExpression': return PREC_SEQ;
    case 'AssignmentExpression': return PREC_ASSIGN;
    case 'ConditionalExpression': return PREC_COND;
    case 'BinaryExpression':
    case 'LogicalExpression': return PREC[n.operator] !== undefined ? PREC[n.operator] : 8;
    case 'UnaryExpression': return 14;
    case 'ArrowFunctionExpression':
    case 'FunctionExpression': return 15;
    default: return PREC_ATOM;
  }
}

class Printer {
  constructor(vmName, scope) {
    this.vm = vmName;
    this.scope = new Set(scope || []);
  }
  child(names) { return new Printer(this.vm, Array.from(this.scope).concat(names || [])); }
  shadowed(n) { return this.scope.has(n); }

  /** 表达式 -> 模板表达式字符串 */
  node(n) { return this.print(n, PREC_SEQ, false, null); }

  print(n, parentPrec, isRight, parentOp) {
    if (!n) return '';
    const s = this.raw(n);
    if (needsParen(n, parentPrec, isRight, parentOp)) return '(' + s + ')';
    return s;
  }

  raw(n) {
    switch (n.type) {
      case 'Identifier': return n.name;
      case 'Literal': return this.literal(n);
      case 'TemplateLiteral':
        return '`' + n.quasis.map((q, i) =>
          q.value.raw + (i < n.expressions.length ? '${' + this.node(n.expressions[i]) + '}' : '')
        ).join('') + '`';
      case 'ThisExpression': return this.vm;
      case 'ArrayExpression':
        return '[' + n.elements.map((e) => e
          ? (e.type === 'SpreadElement' ? '...' + this.node(e.argument) : this.node(e))
          : '').join(', ') + ']';
      case 'ObjectExpression':
        return '{ ' + n.properties.map((p) => {
          if (p.type === 'SpreadElement') return '...' + this.node(p.argument);
          const k = p.computed ? '[' + this.node(p.key) + ']'
            : (p.key.type === 'Identifier' ? this.key(p.key.name) : this.key(p.key.value));
          if (p.shorthand) return k;
          return k + ': ' + this.node(p.value);
        }).join(', ') + ' }';
      case 'MemberExpression': {
        // 剥离 vm 前缀
        if (!n.computed && n.object.type === 'Identifier'
            && n.object.name === this.vm && !this.shadowed(n.object.name)) {
          return n.property.type === 'Identifier' ? n.property.name : this.node(n.property);
        }
        const obj = this.printMemberObject(n.object);
        if (n.computed) return obj + '[' + this.node(n.property) + ']';
        const pn = n.property.type === 'Identifier' ? n.property.name : String(n.property.value);
        if (/^[A-Za-z_$][A-Za-z0-9_$]*$/.test(pn)) return obj + '.' + pn;
        return obj + '["' + pn + '"]';
      }
      case 'ChainExpression': return this.node(n.expression);
      case 'CallExpression':
      case 'NewExpression': {
        // _s(x) 只是字符串化，模板里去掉
        const cal = n.callee;
        if (cal.type === 'MemberExpression' && cal.property && cal.property.name === '_s') {
          return this.node(n.arguments[0]);
        }
        const head = n.type === 'NewExpression' ? 'new ' + this.node(cal) : this.node(cal);
        return head + '(' + n.arguments.map((a) => this.node(a)).join(', ') + ')';
      }
      case 'UnaryExpression':
        // !0 / !1 是 Terser 对 true / false 的压缩写法，直接在模板里还原可读
        if (n.operator === '!' && n.argument.type === 'Literal') {
          if (n.argument.value === 0) return 'true';
          if (n.argument.value === 1) return 'false';
        }
        return n.operator + (/^[a-z]/i.test(n.operator) ? ' ' : '') + this.print(n.argument, 14, false, n.operator);
      case 'UpdateExpression':
        return n.prefix ? n.operator + this.node(n.argument) : this.node(n.argument) + n.operator;
      case 'BinaryExpression':
      case 'LogicalExpression': {
        const p = PREC[n.operator] !== undefined ? PREC[n.operator] : 8;
        return this.print(n.left, p, false, n.operator) + ' ' + n.operator + ' '
             + this.print(n.right, p, true, n.operator);
      }
      case 'AssignmentExpression':
        return this.node(n.left) + ' ' + n.operator + ' ' + this.node(n.right);
      case 'ConditionalExpression':
        return this.print(n.test, PREC_COND + 1, false, null) + ' ? '
             + this.node(n.consequent) + ' : ' + this.node(n.alternate);
      case 'SequenceExpression':
        return n.expressions.map((e) => this.node(e)).join(', ');
      case 'ArrowFunctionExpression': {
        const ps = n.params.map((p) => this.pattern(p));
        const inner = this.child(ps);
        const body = inner.body(n.body);
        return (n.async ? 'async ' : '') + '(' + ps.join(', ') + ') => ' + body;
      }
      case 'FunctionExpression': {
        const ps = n.params.map((p) => this.pattern(p));
        const inner = this.child(ps);
        // 保留 function 语法，避免把函数体内的 return 丢掉
        const body = n.body && n.body.type === 'BlockStatement'
          ? inner.block(n.body)
          : '{ return ' + inner.node(n.body) + '; }';
        return (n.async ? 'async ' : '') + 'function ' + (n.id ? n.id.name : '')
             + '(' + ps.join(', ') + ') ' + body;
      }
      case 'SpreadElement': return '...' + this.node(n.argument);
      case 'AwaitExpression': return 'await ' + this.node(n.argument);
      case 'ParenthesizedExpression': return this.node(n.expression);
      default: return '/*?' + n.type + '?*/';
    }
  }

  key(k) { return /^[A-Za-z_$][A-Za-z0-9_$]*$/.test(k) ? k : JSON.stringify(k); }

  block(b) {
    if (!b || b.type !== 'BlockStatement') return '{}';
    return '{ ' + b.body.map((s) => {
      if (s.type === 'ReturnStatement') return 'return ' + this.node(s.argument) + ';';
      if (s.type === 'ExpressionStatement') return this.node(s.expression) + ';';
      if (s.type === 'VariableDeclaration') return s.kind + ' ' + s.declarations.map((d) => this.pattern(d.id) + (d.init ? ' = ' + this.node(d.init) : '')).join(', ') + ';';
      return '';
    }).filter(Boolean).join(' ') + ' }';
  }

  /** 成员访问的对象部分：只在必要时加括号 */
  printMemberObject(obj) {
    switch (obj.type) {
      case 'Identifier': return obj.name;
      case 'ThisExpression': return this.vm;
      case 'Literal':
        // 数字字面量成员访问需要括号: (1).toFixed
        return typeof obj.value === 'number' ? '(' + this.literal(obj) + ')' : this.literal(obj);
      case 'CallExpression':
      case 'MemberExpression':
        return this.node(obj);
      case 'ObjectExpression':
      case 'ArrayExpression':
        return '(' + this.node(obj) + ')';
      default:
        return this.node(obj);
    }
  }

  pattern(p) {
    if (!p) return '';
    switch (p.type) {
      case 'Identifier': return p.name;
      case 'AssignmentPattern': return this.pattern(p.left) + ' = ' + this.node(p.right);
      case 'RestElement': return '...' + this.pattern(p.argument);
      case 'ObjectPattern':
        return '{ ' + p.properties.map((x) => x.type === 'RestElement'
          ? '...' + this.pattern(x.argument)
          : (x.shorthand ? this.pattern(x.value) : this.key(x.key.name || x.key.value) + ': ' + this.pattern(x.value))
        ).join(', ') + ' }';
      case 'ArrayPattern':
        return '[' + p.elements.map((e) => e ? this.pattern(e) : '').join(', ') + ']';
      default: return this.node(p);
    }
  }

  body(b) {
    if (!b) return '';
    if (b.type === 'BlockStatement') {
      const stmts = b.body.filter((s) => s.type !== 'EmptyStatement');
      // 单 return 折叠为表达式
      if (stmts.length === 1 && stmts[0].type === 'ReturnStatement') {
        return this.node(stmts[0].argument);
      }
      if (!stmts.length) return '{}';
      return '{\n' + stmts.map((s) => this.stmt(s, '  ')).filter(Boolean).join('\n') + '\n}';
    }
    return this.node(b);
  }

  literal(n) {
    if (n.regex) return '/' + n.regex.pattern + '/' + n.regex.flags;
    if (n.value === null) return 'null';
    if (typeof n.value === 'string') return JSON.stringify(n.value);
    if (typeof n.value === 'number') {
      // 1e3 风格还原为可读整数/小数
      if (Number.isInteger(n.value)) return String(n.value);
      const s = String(n.value);
      return s;
    }
    if (typeof n.value === 'boolean') return String(n.value);
    return String(n.raw !== undefined ? n.raw : n.value);
  }

  stmt(s, ind) {
    if (!s) return '';
    switch (s.type) {
      case 'ReturnStatement': return ind + 'return ' + this.node(s.argument) + ';';
      case 'ExpressionStatement': return ind + this.node(s.expression) + ';';
      case 'VariableDeclaration':
        return ind + s.kind + ' ' + s.declarations.map((d) =>
          this.pattern(d.id) + (d.init ? ' = ' + this.node(d.init) : '')).join(', ') + ';';
      case 'IfStatement':
        return ind + 'if (' + this.node(s.test) + ') '
          + (s.consequent ? this.block(s.consequent) : '')
          + (s.alternate ? ' else ' + this.block(s.alternate) : '');
      case 'BlockStatement':
        return ind + '{\n' + s.body.map((x) => this.stmt(x, ind + '  ')).join('\n') + '\n' + ind + '}';
      case 'ForStatement':
        return ind + 'for (...)' + this.block(s.body);
      default: return ind + '/*?stmt ' + s.type + '?*/';
    }
  }
  block(s) {
    if (s.type === 'BlockStatement') {
      return '{ ' + s.body.map((x) => this.stmt(x, '').trim()).join(' ') + ' }';
    }
    return '{ ' + this.stmt(s, '').trim() + ' }';
  }
}

/* ============================== 模板构建 ============================== */

class Tpl {
  constructor(p, staticFns) { this.p = p; this.staticFns = staticFns || []; }

  /** 表达式节点 -> 模板表达式文本 */
  expr(n) { return this.p.node(n); }

  render(n, ind) {
    if (!n) return '';
    ind = ind || '';
    switch (n.type) {
      case 'CallExpression':
        return this.call(n, ind);
      case 'ConditionalExpression':
        return this.cond(n, ind);
      case 'LogicalExpression':
        if (n.operator === '&&') {
          const left = this.expr(n.left);
          const right = this.render(n.right, ind + '  ');
          return ind + '<template v-if="' + esc(left) + '">\n' + right + '\n' + ind + '</template>';
        }
        return ind + this.expr(n);
      case 'ArrayExpression':
        return n.elements.map((e) => this.render(e, ind)).filter(Boolean).join('\n');
      case 'SequenceExpression': {
        // Vue 对「渲染为空的 v-if 分支」会生成 (cond, _e()) 序列：最终产出 _e()（空节点），
        // cond 仅用于依赖收集，视觉上不渲染任何东西。此处保留为注释以留存证据。
        const nonEmpty = n.expressions.filter(
          (e) => !(e.type === 'CallExpression' && this.callee(e) === '_e'),
        );
        if (nonEmpty.length !== n.expressions.length) {
          return ind + '<!-- 空分支（原始 render: (' +
            n.expressions.map((e) => this.expr(e)).join(', ') + ')） -->';
        }
        return nonEmpty.map((e) => this.render(e, ind)).filter(Boolean).join('\n');
      }
      default:
        return ind + this.expr(n);
    }
  }

  /* ---- v-if / v-else ---- */
  cond(node, ind) {
    const test = this.expr(node.test);
    const isAltEmpty = node.alternate && node.alternate.type === 'CallExpression'
      && this.callee(node.alternate) === '_e';
    const consStr = this.render(node.consequent, ind);
    if (isAltEmpty) return inject(consStr, 'v-if="' + escExpr(test) + '"');
    const altStr = this.render(node.alternate, ind);
    return inject(consStr, 'v-if="' + escExpr(test) + '"') + '\n'
         + inject(altStr, 'v-else');
  }

  callee(call) {
    const c = call.callee;
    if (c.type === 'Identifier') return c.name === this.cName ? '_c' : c.name;
    if (c.type === 'MemberExpression' && c.property.type === 'Identifier') {
      const name = c.property.name;
      // vm._c / t._c
      if (name === '_c') return '_c';
      if (name === '_l') return '_l';
      if (name === '_v') return '_v';
      if (name === '_s') return '_s';
      return name;
    }
    return null;
  }

  call(call, ind) {
    const name = this.callee(call);
    const a = call.arguments;
    switch (name) {
      case '_c': return this.element(a, ind);
      case '_v': return this.text(a[0], ind);
      case '_e': return '';
      case '_l': return this.list(a, ind);
      case '_t': return this.slot(a, ind);
      case '_u': return this.scopedSlots(a, ind);
      case '_m': return this.static(a, ind);
      default:   return ind + this.expr(call);
    }
  }

  /* ---- 元素 ---- */
  element(args, ind) {
    const tagArg = args[0];
    if (!tagArg || tagArg.type !== 'Literal') {
      return ind + '<!-- dynamic tag: ' + this.expr(tagArg) + ' -->';
    }
    const tag = String(tagArg.value);
    let data = null, children = null;
    if (args.length >= 2) {
      if (args[1].type === 'ObjectExpression') { data = args[1]; children = args[2] || null; }
      else children = args[1];
    }
    const { attrs, dirs, scoped } = this.parseData(data, ind);

    let body = '';
    if (children) {
      if (children.type === 'CallExpression' && this.callee(children) === '_l') {
        // v-for 会包住循环函数产生的根节点；列表若直接作为父子树，这里不额外加一层 template。
        body = this.listAsChild(children.arguments, ind + '  ');
      } else if (children.type === 'CallExpression' && this.callee(children) === '_u') {
        body = this.scopedSlots(children.arguments, ind + '  ');
      } else {
        body = this.children(children, ind + '  ');
      }
    }
    if (scoped) body = (body ? body + '\n' : '') + scoped;

    let open = ind + '<' + tag;
    if (attrs.length) open += ' ' + attrs.join(' ');
    let html;
    if (!body.trim()) {
      html = open + ' />';
    } else {
      html = open + '>\n' + body + '\n' + ind + '</' + tag + '>';
    }
    for (const d of dirs) html = inject(html, d);
    return html;
  }

  /* ---- 文本 ---- */
  text(arg, ind) {
    if (!arg) return '';
    if (arg.type === 'Literal') {
      const s = String(arg.value);
      if (!s.trim()) return '';
      const t = s.replace(/\r/g, '').replace(/[ \t]+$/gm, '').replace(/^\n+/, '').replace(/\n+$/, '');
      if (!t) return '';
      const fixed = t.split('\n').map((l, i) => i === 0 ? ind + l.trim() : ind + l.trim()).join('\n');
      return fixed;
    }
    if (arg.type === 'CallExpression') {
      const cn = this.callee(arg);
      if (cn === '_s') return ind + '{{ ' + this.expr(arg.arguments[0]) + ' }}';
      // 字符串拼接 e._v("X" + e._s(y))  -> {{ 'X' + y }} 形式
      return ind + '{{ ' + this.expr(arg) + ' }}';
    }
    return ind + '{{ ' + this.expr(arg) + ' }}';
  }

  children(node, ind) {
    if (!node) return '';
    if (node.type === 'ArrayExpression') {
      return node.elements.map((c) => this.render(c, ind)).filter(Boolean).join('\n');
    }
    return this.render(node, ind);
  }

  /* ---- v-for ---- */
  list(args, ind) {
    const r = this.listParts(args);
    return inject(r.html, 'v-for="' + escExpr(this.forExpr(r, args[1])) + '"');
  }

  /** 组合 v-for 表达式：优先用 render 元数据里的原始别名 */
  forExpr(r, fnNode) {
    const aliases = fnNode ? Tpl.vforAliases(fnNode) : null;
    if (!aliases || !aliases.length) return r.forExpr;
    const listPart = r.forExpr.split(' in ').slice(1).join(' in ');
    return (aliases.length >= 2 ? '(' + aliases.join(', ') + ')' : aliases[0]) + ' in ' + listPart;
  }

  /** v-for 作为父元素的 children：renderList 返回每个循环项的根节点集合。 */
  listAsChild(args, ind) {
    const r = this.listParts(args);
    const fn = args[1];
    const forExpr = this.forExpr(r, fn);
    let bodyNode = fn && fn.body;
    if (bodyNode && bodyNode.type === 'BlockStatement') {
      const ret = bodyNode.body.find((s) => s.type === 'ReturnStatement');
      bodyNode = ret ? ret.argument : null;
    }
    const params = fn ? fn.params.map((x) => this.p.pattern(x)) : [];
    const inner = new Tpl(this.p.child(params), this.staticFns);
    inner.cName = this.cName;
    const roots = bodyNode && bodyNode.type === 'ArrayExpression' ? bodyNode.elements : [bodyNode];
    return roots.map((root) => inject(inner.render(root, ind), 'v-for="' + escExpr(forExpr) + '"'))
      .filter(Boolean).join('\n');
  }

  /** 共用：解析 _l(list, fn) -> { html, forExpr, params } */
  listParts(args) {
    const listExpr = this.expr(args[0]);
    const fn = args[1];
    if (!fn || (fn.type !== 'FunctionExpression' && fn.type !== 'ArrowFunctionExpression')) {
      return { html: '<!-- v-for (unparsed) -->', forExpr: '', params: [] };
    }
    const params = fn.params.map((x) => this.p.pattern(x));
    let bodyNode = fn.body;
    if (bodyNode.type === 'BlockStatement') {
      const ret = bodyNode.body.find((s) => s.type === 'ReturnStatement');
      bodyNode = ret ? ret.argument : null;
    }
    const inner = new Tpl(this.p.child(params), this.staticFns);
    inner.cName = this.cName;
    const html = inner.render(bodyNode, '');
    const forExpr = params.length >= 2
      ? '(' + params[0] + ', ' + params[1] + ') in ' + listExpr
      : params[0] + ' in ' + listExpr;
    return { html, forExpr, params };
  }

  /** 从 render 里嵌套的 `expression:"(t, a) in list"` 取原始别名 */
  static vforAliases(node) {
    let out = null;
    walk(node, (n) => {
      if (out) return;
      if (n.type !== 'Property' && n.type !== 'ObjectProperty') return;
      const k = n.key && (n.key.name !== undefined ? n.key.name : n.key.value);
      if (k !== 'expression') return;
      if (!n.value || n.value.type !== 'Literal') return;
      const s = String(n.value.value);
      const m = s.match(/^\(([^)]*)\)\s+in\s+/);
      if (m) out = m[1].split(',').map((x) => x.trim()).filter(Boolean);
    });
    return out;
  }

  /* ---- <slot> ---- */
  slot(args, ind) {
    const n = args[0];
    if (!n || n.type !== 'Literal' || n.value === 'default') return ind + '<slot />';
    return ind + '<slot name="' + n.value + '" />';
  }

  /* ---- scoped slots (_u) ---- */
  scopedSlots(args, ind) {
    const arr = args[0];
    if (!arr || arr.type !== 'ArrayExpression') return '';
    const out = [];
    for (const el of arr.elements) {
      if (!el || el.type !== 'ObjectExpression') continue;
      let key = 'default', fn = null, proxy = false;
      for (const pr of el.properties) {
        const k = pr.key.name !== undefined ? pr.key.name : pr.key.value;
        if (k === 'key' && pr.value.type === 'Literal') key = String(pr.value.value);
        if (k === 'fn') fn = pr.value;
        if (k === 'proxy' && pr.value.type === 'Literal') proxy = !!pr.value.value;
      }
      if (!fn || (fn.type !== 'FunctionExpression' && fn.type !== 'ArrowFunctionExpression')) continue;
      let bodyNode = fn.body;
      if (bodyNode.type === 'BlockStatement') {
        const ret = bodyNode.body.find((s) => s.type === 'ReturnStatement');
        bodyNode = ret ? ret.argument : null;
      }
      const inner = new Tpl(this.p.child([]), this.staticFns);
      inner.cName = this.cName;
      let html;
      if (bodyNode && bodyNode.type === 'ArrayExpression') {
        html = bodyNode.elements.map((e) => inner.render(e, ind + '  ')).filter(Boolean).join('\n');
      } else {
        html = inner.render(bodyNode, ind + '  ');
      }
      const attr = key === 'default' ? 'v-slot' : 'v-slot:' + key;
      out.push(ind + '<template ' + attr + '>\n' + html + '\n' + ind + '</template>');
    }
    return out.join('\n');
  }

  /* ---- 静态节点 (_m) ---- */
  static(args, ind) {
    const idx = args[0] && args[0].type === 'Literal' ? args[0].value : null;
    if (idx === null || !this.staticFns[idx]) return ind + '<!-- static node -->';
    const fn = this.staticFns[idx];
    let bodyNode = fn.body;
    if (bodyNode.type === 'BlockStatement') {
      const ret = bodyNode.body.find((s) => s.type === 'ReturnStatement');
      bodyNode = ret ? ret.argument : null;
    }
    return this.render(bodyNode, ind);
  }

  /* ---- data -> attrs/dirs ---- */
  parseData(data, ind) {
    const attrs = [], dirs = [];
    let scoped = '';
    if (!data || data.type !== 'ObjectExpression') return { attrs, dirs, scoped };

    for (const pr of data.properties) {
      if (pr.type !== 'Property' && pr.type !== 'ObjectProperty') continue;
      const key = pr.key.name !== undefined ? pr.key.name : pr.key.value;
      const val = pr.value;
      switch (key) {
        case 'staticClass': attrs.push('class=' + JSON.stringify(String(val.value))); break;
        case 'class': attrs.push(':class=\'' + esc(this.expr(val), true) + '\''); break;
        case 'staticStyle': { const c = this.css(val); if (c) attrs.push('style="' + c + '"'); break; }
        case 'style': attrs.push(':style=\'' + esc(this.expr(val), true) + '\''); break;
        case 'key': attrs.push(':key=\'' + esc(this.expr(val), true) + '\''); break;
        case 'ref': attrs.push('ref="' + this.expr(val) + '"'); break;
        case 'refInFor': break;
        case 'slot': attrs.push('slot="' + (val.value !== undefined ? val.value : this.expr(val)) + '"'); break;
        case 'attrs':
        case 'props':
          for (const a of (val.properties || [])) {
            if (a.type !== 'Property' && a.type !== 'ObjectProperty') continue;
            const ak = a.key.name !== undefined ? a.key.name : a.key.value;
            attrs.push(this.attr(ak, a.value));
          }
          break;
        case 'domProps':
          for (const a of (val.properties || [])) {
            const ak = a.key.name !== undefined ? a.key.name : a.key.value;
            if (ak === 'innerHTML') attrs.push('v-html=\'' + esc(this.expr(a.value), true) + '\'');
            else if (ak === 'textContent') attrs.push('v-text=\'' + esc(this.expr(a.value), true) + '\'');
            else attrs.push(':' + ak + '=\'' + esc(this.expr(a.value), true) + '\'');
          }
          break;
        case 'on':
        case 'nativeOn': {
          const suf = key === 'nativeOn' ? '.native' : '';
          for (const a of (val.properties || [])) {
            const ak = a.key.name !== undefined ? a.key.name : a.key.value;
            // Vue template listeners compile from `on:{click:...}` to `@click="..."`.
            // Keep the JavaScript expression in single-quoted attribute delimiters so embedded
            // string literals such as `setTop(id, "1")` remain valid template syntax.
            attrs.push('@' + ak + suf + "='" + escEvent(this.handler(a.value)) + "'");
          }
          break;
        }
        case 'directives':
          for (const d of (val.elements || [])) { const r = this.directive(d); if (r) dirs.push(r); }
          break;
        case 'model': {
          let expr = null;
          for (const a of (val.properties || [])) {
            const ak = a.key.name !== undefined ? a.key.name : a.key.value;
            if (ak === 'expression' && a.value.type === 'Literal') expr = String(a.value.value);
          }
          if (expr === null) {
            for (const a of (val.properties || [])) {
              const ak = a.key.name !== undefined ? a.key.name : a.key.value;
              if (ak === 'value') expr = this.expr(a.value);
            }
          }
          dirs.push('v-model="' + escExpr(expr) + '"');
          break;
        }
        case 'scopedSlots':
          // 值可能是 _u([...]) 调用，也可能是数组字面量
          if (val.type === 'CallExpression' && this.callee(val) === '_u') {
            scoped = this.scopedSlots(val.arguments, (ind || '') + '  ');
          } else if (val.type === 'ArrayExpression') {
            scoped = this.scopedSlots([val], (ind || '') + '  ');
          }
          break;
        default: break;
      }
    }
    return { attrs, dirs, scoped };
  }

  attr(name, val) {
    if (val.type === 'Literal') {
      const v = val.value;
      if (v === '') return name;                 // 布尔属性 (dense/flat/outline)
      if (v === true) return name;
      if (typeof v === 'string') return name + '="' + esc(String(v)) + '"';
      return ':' + name + '="' + String(v) + '"';
    }
    return ':' + name + '=\'' + esc(this.expr(val), true) + '\'';
  }

  css(node) {
    if (!node || node.type !== 'ObjectExpression') return '';
    return node.properties.map((p) => {
      const k = p.key.name !== undefined ? p.key.name : p.key.value;
      let v;
      if (p.value.type === 'Literal') v = p.value.value;
      else if (p.value.type === 'UnaryExpression' && p.value.operator === '-'
               && p.value.argument.type === 'Literal') v = -p.value.argument.value;
      else v = this.expr(p.value);
      const cssKey = k.replace(/([a-z0-9])([A-Z])/g, '$1-$2').toLowerCase();
      return cssKey + ':' + v;
    }).join(';');
  }

  directive(node) {
    if (!node || node.type !== 'ObjectExpression') return '';
    let name = '', rawName = '', expr = null, arg = null, mods = [];
    for (const pr of (node.properties || [])) {
      const k = pr.key.name !== undefined ? pr.key.name : pr.key.value;
      if (k === 'name' && pr.value.type === 'Literal') name = pr.value.value;
      else if (k === 'rawName' && pr.value.type === 'Literal') rawName = pr.value.value;
      else if (k === 'expression' && pr.value.type === 'Literal') expr = String(pr.value.value);
      else if (k === 'value' && pr.value.type !== 'Literal') { if (expr === null) expr = this.expr(pr.value); }
      else if (k === 'arg' && pr.value.type === 'Literal') arg = pr.value.value;
      else if (k === 'modifiers' && pr.value.type === 'ObjectExpression') {
        mods = pr.value.properties.map((x) => x.key.name !== undefined ? x.key.name : x.key.value);
      }
    }
    let out = rawName || ('v-' + name);
    if (arg) out += ':' + arg;
    for (const m of mods) out += '.' + m;
    if (expr !== null) out += '="' + escExpr(String(expr)) + '"';
    return out;
  }

  handler(node) {
    if (node.type === 'FunctionExpression' || node.type === 'ArrowFunctionExpression') {
      const params = node.params.map((x) => this.p.pattern(x));
      const inner = this.p.child(params);
      if (node.body.type === 'BlockStatement') {
        if (node.body.body.length === 1 && node.body.body[0].type === 'ExpressionStatement') {
          return inner.node(node.body.body[0].expression);
        }
        return inner.body(node.body).trim();
      }
      return inner.node(node.body);
    }
    return this.expr(node);
  }
}

/** 把指令插进元素的开始标签 */
function inject(html, directive) {
  if (!html) return html;
  const lines = html.split('\n');
  for (let i = 0; i < lines.length; i++) {
    const m = lines[i].match(/^(\s*<[A-Za-z][-A-Za-z0-9_.:]*)([\s\S]*?)(\s*\/?>)$/);
    if (m && m[1] !== '<template') {
      lines[i] = m[1] + ' ' + directive + m[2] + m[3];
      return lines.join('\n');
    }
    if (m && m[1] === '<template') {
      lines[i] = m[1] + ' ' + directive + m[2] + m[3];
      return lines.join('\n');
    }
  }
  return html;
}

/* ============================== 缩进规范化 ============================== */

/**
 * 重新缩进模板：按标签嵌套深度统一缩进。
 * 反编译过程中 v-for / scopedSlots 会产出层级不一致的片段，
 * 这一步保证最终 .vue 的 <template> 结构规整。
 */
function reindent(tpl) {
  const VOID = new Set(['br', 'hr', 'img', 'input', 'meta', 'link', 'area', 'base', 'col', 'embed', 'source', 'track', 'wbr']);
  const lines = tpl.split('\n');
  const out = [];
  let depth = 0;
  for (let raw of lines) {
    const line = raw.trim();
    if (!line) continue;
    // 纯文本 / 插值：用当前深度缩进，深度不变
    if (!line.startsWith('<')) {
      out.push('  '.repeat(depth) + line);
      continue;
    }
    // 结束标签先降一级
    const closeMatch = line.match(/^<\/([A-Za-z][-A-Za-z0-9_.:]*)/);
    if (closeMatch) depth = Math.max(0, depth - 1);
    out.push('  '.repeat(depth) + line);
    // 计算该行净变化
    const opens = [];
    const tagRe = /<([A-Za-z][-A-Za-z0-9_.:]*)((?:"[^"]*"|'[^']*'|[^>"'])*?)(\/?)>/g;
    let m;
    const closes = (line.match(/<\/[A-Za-z][-A-Za-z0-9_.:]*>/g) || []).length;
    let selfClose = 0;
    let openCount = 0;
    while ((m = tagRe.exec(line)) !== null) {
      const tag = m[1];
      const selfClosing = m[3] === '/';
      if (selfClosing || VOID.has(tag)) selfClose++;
      else openCount++;
    }
    // 该行自身闭合掉的：closes（不含开头的结束标签）
    const leadingClose = closeMatch ? 1 : 0;
    const net = openCount - (closes - leadingClose);
    depth = Math.max(0, depth + net);
  }
  return out.join('\n');
}

function escEvent(s) {
  // @event expression is delimited by single quotes; HTML-escape those delimiters inside JS strings.
  return String(s === null || s === undefined ? '' : s).replace(/'/g, '&#39;');
}

/** 指令值转义：用双引号包裹，值内的表达式字符串字面量改用单引号 */
function escExpr(s) {
  let t = String(s === null || s === undefined ? '' : s);
  // 把表达式里的 "xxx" 转成 'xxx'（模板指令用双引号包裹，内部不能再出现双引号）
  t = t.replace(/"([^"\\]*)"/g, (m, inner) => "'" + inner + "'");
  return t;
}

function esc(s, useSingle) {
  let t = String(s === null || s === undefined ? '' : s);
  if (useSingle) return t;
  return t.replace(/"/g, '&quot;');
}

/* =============================== 解析 =============================== */

function walk(node, cb) {
  if (!node || typeof node.type !== 'string') return;
  cb(node);
  for (const k of Object.keys(node)) {
    if (k === 'type' || k === 'start' || k === 'end') continue;
    const v = node[k];
    if (Array.isArray(v)) { for (const c of v) if (c && typeof c.type === 'string') walk(c, cb); }
    else if (v && typeof v.type === 'string') walk(v, cb);
  }
}

function normalize(src) {
  const m = src.match(/^\s*(?:"[0-9a-zA-Z_$]+"|'[0-9a-zA-Z_$]+'|[A-Za-z_$][\w$]*|\d+)\s*:\s*(?=function\b)/);
  if (m) return '(' + src.slice(m[0].length) + ')';
  return '(function(){})';
}

function findRender(ast) {
  let hit = null;
  walk(ast, (node) => {
    if (hit) return;
    if (node.type !== 'FunctionExpression') return;
    const body = node.body;
    if (!body || body.type !== 'BlockStatement') return;
    for (const s of body.body) {
      if (s.type !== 'VariableDeclaration') continue;
      for (const d of s.declarations) {
        if (!d.init || d.init.type !== 'LogicalExpression') continue;
        const L = d.init.left;
        if (L.type === 'MemberExpression' && L.property.name === '_c' &&
            L.object.type === 'MemberExpression' && L.object.property.name === '_self') {
          const ret = body.body.find((x) => x.type === 'ReturnStatement');
          if (ret) {
            hit = {
              fn: node,
              vm: L.object.object && L.object.object.name,
              cName: d.id.name,
              ret: ret.argument,
            };
            return;
          }
        }
      }
    }
  });
  return hit;
}

function findStaticFns(ast) {
  // 只有当 _m(idx) 真的被调用时才需要 staticRenderFns。
  // 否则任意一个「函数数组」变量都会被误判（例如 slots 定义数组）。
  const used = [];
  walk(ast, (node) => {
    if (node.type !== 'CallExpression') return;
    if (node.callee.type === 'MemberExpression' && node.callee.property
        && node.callee.property.name === '_m') {
      const a = node.arguments[0];
      if (a && a.type === 'Literal' && typeof a.value === 'number') used.push(a.value);
    }
  });
  if (!used.length) return [];
  const maxIdx = Math.max.apply(null, used);

  // 找到那个长度足够、且元素都是 render 形状（形参含 _c 声明）的数组
  let best = [];
  walk(ast, (node) => {
    if (node.type !== 'VariableDeclaration') return;
    for (const d of node.declarations) {
      if (!d.init || d.init.type !== 'ArrayExpression') continue;
      const els = d.init.elements;
      if (els.length <= maxIdx) continue;
      const allFns = els.every((e) => e && e.type === 'FunctionExpression');
      if (!allFns) continue;
      // render 形状：体内有 `var X = this.$createElement` 或 `._self._c`
      const looksLikeRender = els.some((e) => {
        const src = JSON.stringify(e).slice(0, 400);
        return src.indexOf('_self') >= 0 || src.indexOf('$createElement') >= 0;
      });
      if (looksLikeRender && els.length > best.length) best = els;
    }
  });
  return best;
}

function compile(src) {
  const ast = acorn.parse(normalize(src), { ecmaVersion: 2022, sourceType: 'script' });
  const info = findRender(ast);
  if (!info) return null;
  const staticFns = findStaticFns(ast);
  const p = new Printer(info.vm, []);
  const t = new Tpl(p, staticFns);
  t.cName = info.cName;
  let tpl = t.render(info.ret, '');
  // 清理：多余空行、行尾空白
  tpl = tpl.replace(/[ \t]+$/gm, '').replace(/\n{3,}/g, '\n\n').replace(/^\n+/, '').replace(/\n+$/, '');
  tpl = reindent(tpl);
  return { template: tpl, vm: info.vm, cName: info.cName };
}

module.exports = { compile, reindent };

if (require.main === module) {
  const fs = require('fs');
  const r = compile(fs.readFileSync(process.argv[2], 'utf8'));
  if (!r) { console.error('no render fn'); process.exit(2); }
  console.log(r.template);
}
