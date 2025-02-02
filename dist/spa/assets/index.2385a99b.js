var Kd = Object.defineProperty;
var Qd = (e, t, n) =>
  t in e
    ? Kd(e, t, { enumerable: !0, configurable: !0, writable: !0, value: n })
    : (e[t] = n);
var hr = (e, t, n) => (Qd(e, typeof t != 'symbol' ? t + '' : t, n), n);
const Xd = (function () {
    const t = document.createElement('link').relList;
    return t && t.supports && t.supports('modulepreload')
      ? 'modulepreload'
      : 'preload';
  })(),
  xl = {},
  Yd = '',
  ze = function (t, n) {
    return !n || n.length === 0
      ? t()
      : Promise.all(
          n.map((r) => {
            if (((r = `${Yd}${r}`), r in xl)) return;
            xl[r] = !0;
            const o = r.endsWith('.css'),
              i = o ? '[rel="stylesheet"]' : '';
            if (document.querySelector(`link[href="${r}"]${i}`)) return;
            const s = document.createElement('link');
            if (
              ((s.rel = o ? 'stylesheet' : Xd),
              o || ((s.as = 'script'), (s.crossOrigin = '')),
              (s.href = r),
              document.head.appendChild(s),
              o)
            )
              return new Promise((l, a) => {
                s.addEventListener('load', l),
                  s.addEventListener('error', () =>
                    a(new Error(`Unable to preload CSS for ${r}`))
                  );
              });
          })
        ).then(() => t());
  };
function qs(e, t) {
  const n = Object.create(null),
    r = e.split(',');
  for (let o = 0; o < r.length; o++) n[r[o]] = !0;
  return t ? (o) => !!n[o.toLowerCase()] : (o) => !!n[o];
}
function $s(e) {
  if (ue(e)) {
    const t = {};
    for (let n = 0; n < e.length; n++) {
      const r = e[n],
        o = Re(r) ? th(r) : $s(r);
      if (o) for (const i in o) t[i] = o[i];
    }
    return t;
  } else {
    if (Re(e)) return e;
    if (Me(e)) return e;
  }
}
const Jd = /;(?![^(]*\))/g,
  Zd = /:([^]+)/,
  eh = /\/\*.*?\*\//gs;
function th(e) {
  const t = {};
  return (
    e
      .replace(eh, '')
      .split(Jd)
      .forEach((n) => {
        if (n) {
          const r = n.split(Zd);
          r.length > 1 && (t[r[0].trim()] = r[1].trim());
        }
      }),
    t
  );
}
function Vs(e) {
  let t = '';
  if (Re(e)) t = e;
  else if (ue(e))
    for (let n = 0; n < e.length; n++) {
      const r = Vs(e[n]);
      r && (t += r + ' ');
    }
  else if (Me(e)) for (const n in e) e[n] && (t += n + ' ');
  return t.trim();
}
const nh =
    'itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly',
  rh = qs(nh);
function ic(e) {
  return !!e || e === '';
}
const oh = (e) =>
    Re(e)
      ? e
      : e == null
      ? ''
      : ue(e) || (Me(e) && (e.toString === uc || !me(e.toString)))
      ? JSON.stringify(e, sc, 2)
      : String(e),
  sc = (e, t) =>
    t && t.__v_isRef
      ? sc(e, t.value)
      : Gn(t)
      ? {
          [`Map(${t.size})`]: [...t.entries()].reduce(
            (n, [r, o]) => ((n[`${r} =>`] = o), n),
            {}
          ),
        }
      : lc(t)
      ? { [`Set(${t.size})`]: [...t.values()] }
      : Me(t) && !ue(t) && !cc(t)
      ? String(t)
      : t,
  Le = {},
  Wn = [],
  xt = () => {},
  ih = () => !1,
  sh = /^on[^a-z]/,
  Uo = (e) => sh.test(e),
  js = (e) => e.startsWith('onUpdate:'),
  Xe = Object.assign,
  Us = (e, t) => {
    const n = e.indexOf(t);
    n > -1 && e.splice(n, 1);
  },
  lh = Object.prototype.hasOwnProperty,
  ye = (e, t) => lh.call(e, t),
  ue = Array.isArray,
  Gn = (e) => Wo(e) === '[object Map]',
  lc = (e) => Wo(e) === '[object Set]',
  me = (e) => typeof e == 'function',
  Re = (e) => typeof e == 'string',
  Ws = (e) => typeof e == 'symbol',
  Me = (e) => e !== null && typeof e == 'object',
  ac = (e) => Me(e) && me(e.then) && me(e.catch),
  uc = Object.prototype.toString,
  Wo = (e) => uc.call(e),
  ah = (e) => Wo(e).slice(8, -1),
  cc = (e) => Wo(e) === '[object Object]',
  Gs = (e) =>
    Re(e) && e !== 'NaN' && e[0] !== '-' && '' + parseInt(e, 10) === e,
  bo = qs(
    ',key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted'
  ),
  Go = (e) => {
    const t = Object.create(null);
    return (n) => t[n] || (t[n] = e(n));
  },
  uh = /-(\w)/g,
  Ht = Go((e) => e.replace(uh, (t, n) => (n ? n.toUpperCase() : ''))),
  ch = /\B([A-Z])/g,
  sr = Go((e) => e.replace(ch, '-$1').toLowerCase()),
  Ko = Go((e) => e.charAt(0).toUpperCase() + e.slice(1)),
  hi = Go((e) => (e ? `on${Ko(e)}` : '')),
  Br = (e, t) => !Object.is(e, t),
  xr = (e, t) => {
    for (let n = 0; n < e.length; n++) e[n](t);
  },
  Po = (e, t, n) => {
    Object.defineProperty(e, t, { configurable: !0, enumerable: !1, value: n });
  },
  Ks = (e) => {
    const t = parseFloat(e);
    return isNaN(t) ? e : t;
  };
let Sl;
const fh = () =>
  Sl ||
  (Sl =
    typeof globalThis != 'undefined'
      ? globalThis
      : typeof self != 'undefined'
      ? self
      : typeof window != 'undefined'
      ? window
      : typeof global != 'undefined'
      ? global
      : {});
let ut;
class fc {
  constructor(t = !1) {
    (this.detached = t),
      (this.active = !0),
      (this.effects = []),
      (this.cleanups = []),
      (this.parent = ut),
      !t && ut && (this.index = (ut.scopes || (ut.scopes = [])).push(this) - 1);
  }
  run(t) {
    if (this.active) {
      const n = ut;
      try {
        return (ut = this), t();
      } finally {
        ut = n;
      }
    }
  }
  on() {
    ut = this;
  }
  off() {
    ut = this.parent;
  }
  stop(t) {
    if (this.active) {
      let n, r;
      for (n = 0, r = this.effects.length; n < r; n++) this.effects[n].stop();
      for (n = 0, r = this.cleanups.length; n < r; n++) this.cleanups[n]();
      if (this.scopes)
        for (n = 0, r = this.scopes.length; n < r; n++) this.scopes[n].stop(!0);
      if (!this.detached && this.parent && !t) {
        const o = this.parent.scopes.pop();
        o &&
          o !== this &&
          ((this.parent.scopes[this.index] = o), (o.index = this.index));
      }
      (this.parent = void 0), (this.active = !1);
    }
  }
}
function Qs(e) {
  return new fc(e);
}
function dh(e, t = ut) {
  t && t.active && t.effects.push(e);
}
function hh() {
  return ut;
}
function mh(e) {
  ut && ut.cleanups.push(e);
}
const Xs = (e) => {
    const t = new Set(e);
    return (t.w = 0), (t.n = 0), t;
  },
  dc = (e) => (e.w & an) > 0,
  hc = (e) => (e.n & an) > 0,
  gh = ({ deps: e }) => {
    if (e.length) for (let t = 0; t < e.length; t++) e[t].w |= an;
  },
  vh = (e) => {
    const { deps: t } = e;
    if (t.length) {
      let n = 0;
      for (let r = 0; r < t.length; r++) {
        const o = t[r];
        dc(o) && !hc(o) ? o.delete(e) : (t[n++] = o),
          (o.w &= ~an),
          (o.n &= ~an);
      }
      t.length = n;
    }
  },
  Gi = new WeakMap();
let Cr = 0,
  an = 1;
const Ki = 30;
let kt;
const Mn = Symbol(''),
  Qi = Symbol('');
class Ys {
  constructor(t, n = null, r) {
    (this.fn = t),
      (this.scheduler = n),
      (this.active = !0),
      (this.deps = []),
      (this.parent = void 0),
      dh(this, r);
  }
  run() {
    if (!this.active) return this.fn();
    let t = kt,
      n = on;
    for (; t; ) {
      if (t === this) return;
      t = t.parent;
    }
    try {
      return (
        (this.parent = kt),
        (kt = this),
        (on = !0),
        (an = 1 << ++Cr),
        Cr <= Ki ? gh(this) : Ll(this),
        this.fn()
      );
    } finally {
      Cr <= Ki && vh(this),
        (an = 1 << --Cr),
        (kt = this.parent),
        (on = n),
        (this.parent = void 0),
        this.deferStop && this.stop();
    }
  }
  stop() {
    kt === this
      ? (this.deferStop = !0)
      : this.active &&
        (Ll(this), this.onStop && this.onStop(), (this.active = !1));
  }
}
function Ll(e) {
  const { deps: t } = e;
  if (t.length) {
    for (let n = 0; n < t.length; n++) t[n].delete(e);
    t.length = 0;
  }
}
let on = !0;
const mc = [];
function lr() {
  mc.push(on), (on = !1);
}
function ar() {
  const e = mc.pop();
  on = e === void 0 ? !0 : e;
}
function ft(e, t, n) {
  if (on && kt) {
    let r = Gi.get(e);
    r || Gi.set(e, (r = new Map()));
    let o = r.get(n);
    o || r.set(n, (o = Xs())), gc(o);
  }
}
function gc(e, t) {
  let n = !1;
  Cr <= Ki ? hc(e) || ((e.n |= an), (n = !dc(e))) : (n = !e.has(kt)),
    n && (e.add(kt), kt.deps.push(e));
}
function Vt(e, t, n, r, o, i) {
  const s = Gi.get(e);
  if (!s) return;
  let l = [];
  if (t === 'clear') l = [...s.values()];
  else if (n === 'length' && ue(e)) {
    const a = Ks(r);
    s.forEach((u, c) => {
      (c === 'length' || c >= a) && l.push(u);
    });
  } else
    switch ((n !== void 0 && l.push(s.get(n)), t)) {
      case 'add':
        ue(e)
          ? Gs(n) && l.push(s.get('length'))
          : (l.push(s.get(Mn)), Gn(e) && l.push(s.get(Qi)));
        break;
      case 'delete':
        ue(e) || (l.push(s.get(Mn)), Gn(e) && l.push(s.get(Qi)));
        break;
      case 'set':
        Gn(e) && l.push(s.get(Mn));
        break;
    }
  if (l.length === 1) l[0] && Xi(l[0]);
  else {
    const a = [];
    for (const u of l) u && a.push(...u);
    Xi(Xs(a));
  }
}
function Xi(e, t) {
  const n = ue(e) ? e : [...e];
  for (const r of n) r.computed && Ml(r);
  for (const r of n) r.computed || Ml(r);
}
function Ml(e, t) {
  (e !== kt || e.allowRecurse) && (e.scheduler ? e.scheduler() : e.run());
}
const ph = qs('__proto__,__v_isRef,__isVue'),
  vc = new Set(
    Object.getOwnPropertyNames(Symbol)
      .filter((e) => e !== 'arguments' && e !== 'caller')
      .map((e) => Symbol[e])
      .filter(Ws)
  ),
  bh = Js(),
  yh = Js(!1, !0),
  _h = Js(!0),
  Al = Eh();
function Eh() {
  const e = {};
  return (
    ['includes', 'indexOf', 'lastIndexOf'].forEach((t) => {
      e[t] = function (...n) {
        const r = ge(this);
        for (let i = 0, s = this.length; i < s; i++) ft(r, 'get', i + '');
        const o = r[t](...n);
        return o === -1 || o === !1 ? r[t](...n.map(ge)) : o;
      };
    }),
    ['push', 'pop', 'shift', 'unshift', 'splice'].forEach((t) => {
      e[t] = function (...n) {
        lr();
        const r = ge(this)[t].apply(this, n);
        return ar(), r;
      };
    }),
    e
  );
}
function Js(e = !1, t = !1) {
  return function (r, o, i) {
    if (o === '__v_isReactive') return !e;
    if (o === '__v_isReadonly') return e;
    if (o === '__v_isShallow') return t;
    if (o === '__v_raw' && i === (e ? (t ? Dh : Ec) : t ? _c : yc).get(r))
      return r;
    const s = ue(r);
    if (!e && s && ye(Al, o)) return Reflect.get(Al, o, i);
    const l = Reflect.get(r, o, i);
    return (Ws(o) ? vc.has(o) : ph(o)) || (e || ft(r, 'get', o), t)
      ? l
      : Ae(l)
      ? s && Gs(o)
        ? l
        : l.value
      : Me(l)
      ? e
        ? wc(l)
        : bt(l)
      : l;
  };
}
const wh = pc(),
  Ch = pc(!0);
function pc(e = !1) {
  return function (n, r, o, i) {
    let s = n[r];
    if (Zn(s) && Ae(s) && !Ae(o)) return !1;
    if (
      !e &&
      (!xo(o) && !Zn(o) && ((s = ge(s)), (o = ge(o))),
      !ue(n) && Ae(s) && !Ae(o))
    )
      return (s.value = o), !0;
    const l = ue(n) && Gs(r) ? Number(r) < n.length : ye(n, r),
      a = Reflect.set(n, r, o, i);
    return (
      n === ge(i) && (l ? Br(o, s) && Vt(n, 'set', r, o) : Vt(n, 'add', r, o)),
      a
    );
  };
}
function kh(e, t) {
  const n = ye(e, t);
  e[t];
  const r = Reflect.deleteProperty(e, t);
  return r && n && Vt(e, 'delete', t, void 0), r;
}
function Ph(e, t) {
  const n = Reflect.has(e, t);
  return (!Ws(t) || !vc.has(t)) && ft(e, 'has', t), n;
}
function xh(e) {
  return ft(e, 'iterate', ue(e) ? 'length' : Mn), Reflect.ownKeys(e);
}
const bc = { get: bh, set: wh, deleteProperty: kh, has: Ph, ownKeys: xh },
  Sh = {
    get: _h,
    set(e, t) {
      return !0;
    },
    deleteProperty(e, t) {
      return !0;
    },
  },
  Lh = Xe({}, bc, { get: yh, set: Ch }),
  Zs = (e) => e,
  Qo = (e) => Reflect.getPrototypeOf(e);
function to(e, t, n = !1, r = !1) {
  e = e.__v_raw;
  const o = ge(e),
    i = ge(t);
  n || (t !== i && ft(o, 'get', t), ft(o, 'get', i));
  const { has: s } = Qo(o),
    l = r ? Zs : n ? nl : zr;
  if (s.call(o, t)) return l(e.get(t));
  if (s.call(o, i)) return l(e.get(i));
  e !== o && e.get(t);
}
function no(e, t = !1) {
  const n = this.__v_raw,
    r = ge(n),
    o = ge(e);
  return (
    t || (e !== o && ft(r, 'has', e), ft(r, 'has', o)),
    e === o ? n.has(e) : n.has(e) || n.has(o)
  );
}
function ro(e, t = !1) {
  return (
    (e = e.__v_raw), !t && ft(ge(e), 'iterate', Mn), Reflect.get(e, 'size', e)
  );
}
function Tl(e) {
  e = ge(e);
  const t = ge(this);
  return Qo(t).has.call(t, e) || (t.add(e), Vt(t, 'add', e, e)), this;
}
function Ol(e, t) {
  t = ge(t);
  const n = ge(this),
    { has: r, get: o } = Qo(n);
  let i = r.call(n, e);
  i || ((e = ge(e)), (i = r.call(n, e)));
  const s = o.call(n, e);
  return (
    n.set(e, t), i ? Br(t, s) && Vt(n, 'set', e, t) : Vt(n, 'add', e, t), this
  );
}
function Rl(e) {
  const t = ge(this),
    { has: n, get: r } = Qo(t);
  let o = n.call(t, e);
  o || ((e = ge(e)), (o = n.call(t, e))), r && r.call(t, e);
  const i = t.delete(e);
  return o && Vt(t, 'delete', e, void 0), i;
}
function Il() {
  const e = ge(this),
    t = e.size !== 0,
    n = e.clear();
  return t && Vt(e, 'clear', void 0, void 0), n;
}
function oo(e, t) {
  return function (r, o) {
    const i = this,
      s = i.__v_raw,
      l = ge(s),
      a = t ? Zs : e ? nl : zr;
    return (
      !e && ft(l, 'iterate', Mn), s.forEach((u, c) => r.call(o, a(u), a(c), i))
    );
  };
}
function io(e, t, n) {
  return function (...r) {
    const o = this.__v_raw,
      i = ge(o),
      s = Gn(i),
      l = e === 'entries' || (e === Symbol.iterator && s),
      a = e === 'keys' && s,
      u = o[e](...r),
      c = n ? Zs : t ? nl : zr;
    return (
      !t && ft(i, 'iterate', a ? Qi : Mn),
      {
        next() {
          const { value: h, done: f } = u.next();
          return f
            ? { value: h, done: f }
            : { value: l ? [c(h[0]), c(h[1])] : c(h), done: f };
        },
        [Symbol.iterator]() {
          return this;
        },
      }
    );
  };
}
function Kt(e) {
  return function (...t) {
    return e === 'delete' ? !1 : this;
  };
}
function Mh() {
  const e = {
      get(i) {
        return to(this, i);
      },
      get size() {
        return ro(this);
      },
      has: no,
      add: Tl,
      set: Ol,
      delete: Rl,
      clear: Il,
      forEach: oo(!1, !1),
    },
    t = {
      get(i) {
        return to(this, i, !1, !0);
      },
      get size() {
        return ro(this);
      },
      has: no,
      add: Tl,
      set: Ol,
      delete: Rl,
      clear: Il,
      forEach: oo(!1, !0),
    },
    n = {
      get(i) {
        return to(this, i, !0);
      },
      get size() {
        return ro(this, !0);
      },
      has(i) {
        return no.call(this, i, !0);
      },
      add: Kt('add'),
      set: Kt('set'),
      delete: Kt('delete'),
      clear: Kt('clear'),
      forEach: oo(!0, !1),
    },
    r = {
      get(i) {
        return to(this, i, !0, !0);
      },
      get size() {
        return ro(this, !0);
      },
      has(i) {
        return no.call(this, i, !0);
      },
      add: Kt('add'),
      set: Kt('set'),
      delete: Kt('delete'),
      clear: Kt('clear'),
      forEach: oo(!0, !0),
    };
  return (
    ['keys', 'values', 'entries', Symbol.iterator].forEach((i) => {
      (e[i] = io(i, !1, !1)),
        (n[i] = io(i, !0, !1)),
        (t[i] = io(i, !1, !0)),
        (r[i] = io(i, !0, !0));
    }),
    [e, n, t, r]
  );
}
const [Ah, Th, Oh, Rh] = Mh();
function el(e, t) {
  const n = t ? (e ? Rh : Oh) : e ? Th : Ah;
  return (r, o, i) =>
    o === '__v_isReactive'
      ? !e
      : o === '__v_isReadonly'
      ? e
      : o === '__v_raw'
      ? r
      : Reflect.get(ye(n, o) && o in r ? n : r, o, i);
}
const Ih = { get: el(!1, !1) },
  Fh = { get: el(!1, !0) },
  Hh = { get: el(!0, !1) },
  yc = new WeakMap(),
  _c = new WeakMap(),
  Ec = new WeakMap(),
  Dh = new WeakMap();
function Nh(e) {
  switch (e) {
    case 'Object':
    case 'Array':
      return 1;
    case 'Map':
    case 'Set':
    case 'WeakMap':
    case 'WeakSet':
      return 2;
    default:
      return 0;
  }
}
function Bh(e) {
  return e.__v_skip || !Object.isExtensible(e) ? 0 : Nh(ah(e));
}
function bt(e) {
  return Zn(e) ? e : tl(e, !1, bc, Ih, yc);
}
function zh(e) {
  return tl(e, !1, Lh, Fh, _c);
}
function wc(e) {
  return tl(e, !0, Sh, Hh, Ec);
}
function tl(e, t, n, r, o) {
  if (!Me(e) || (e.__v_raw && !(t && e.__v_isReactive))) return e;
  const i = o.get(e);
  if (i) return i;
  const s = Bh(e);
  if (s === 0) return e;
  const l = new Proxy(e, s === 2 ? r : n);
  return o.set(e, l), l;
}
function sn(e) {
  return Zn(e) ? sn(e.__v_raw) : !!(e && e.__v_isReactive);
}
function Zn(e) {
  return !!(e && e.__v_isReadonly);
}
function xo(e) {
  return !!(e && e.__v_isShallow);
}
function Cc(e) {
  return sn(e) || Zn(e);
}
function ge(e) {
  const t = e && e.__v_raw;
  return t ? ge(t) : e;
}
function jt(e) {
  return Po(e, '__v_skip', !0), e;
}
const zr = (e) => (Me(e) ? bt(e) : e),
  nl = (e) => (Me(e) ? wc(e) : e);
function kc(e) {
  on && kt && ((e = ge(e)), gc(e.dep || (e.dep = Xs())));
}
function Pc(e, t) {
  (e = ge(e)), e.dep && Xi(e.dep);
}
function Ae(e) {
  return !!(e && e.__v_isRef === !0);
}
function ae(e) {
  return xc(e, !1);
}
function qh(e) {
  return xc(e, !0);
}
function xc(e, t) {
  return Ae(e) ? e : new $h(e, t);
}
class $h {
  constructor(t, n) {
    (this.__v_isShallow = n),
      (this.dep = void 0),
      (this.__v_isRef = !0),
      (this._rawValue = n ? t : ge(t)),
      (this._value = n ? t : zr(t));
  }
  get value() {
    return kc(this), this._value;
  }
  set value(t) {
    const n = this.__v_isShallow || xo(t) || Zn(t);
    (t = n ? t : ge(t)),
      Br(t, this._rawValue) &&
        ((this._rawValue = t), (this._value = n ? t : zr(t)), Pc(this));
  }
}
function et(e) {
  return Ae(e) ? e.value : e;
}
const Vh = {
  get: (e, t, n) => et(Reflect.get(e, t, n)),
  set: (e, t, n, r) => {
    const o = e[t];
    return Ae(o) && !Ae(n) ? ((o.value = n), !0) : Reflect.set(e, t, n, r);
  },
};
function Sc(e) {
  return sn(e) ? e : new Proxy(e, Vh);
}
function jh(e) {
  const t = ue(e) ? new Array(e.length) : {};
  for (const n in e) t[n] = Wh(e, n);
  return t;
}
class Uh {
  constructor(t, n, r) {
    (this._object = t),
      (this._key = n),
      (this._defaultValue = r),
      (this.__v_isRef = !0);
  }
  get value() {
    const t = this._object[this._key];
    return t === void 0 ? this._defaultValue : t;
  }
  set value(t) {
    this._object[this._key] = t;
  }
}
function Wh(e, t, n) {
  const r = e[t];
  return Ae(r) ? r : new Uh(e, t, n);
}
var Lc;
class Gh {
  constructor(t, n, r, o) {
    (this._setter = n),
      (this.dep = void 0),
      (this.__v_isRef = !0),
      (this[Lc] = !1),
      (this._dirty = !0),
      (this.effect = new Ys(t, () => {
        this._dirty || ((this._dirty = !0), Pc(this));
      })),
      (this.effect.computed = this),
      (this.effect.active = this._cacheable = !o),
      (this.__v_isReadonly = r);
  }
  get value() {
    const t = ge(this);
    return (
      kc(t),
      (t._dirty || !t._cacheable) &&
        ((t._dirty = !1), (t._value = t.effect.run())),
      t._value
    );
  }
  set value(t) {
    this._setter(t);
  }
}
Lc = '__v_isReadonly';
function Kh(e, t, n = !1) {
  let r, o;
  const i = me(e);
  return (
    i ? ((r = e), (o = xt)) : ((r = e.get), (o = e.set)),
    new Gh(r, o, i || !o, n)
  );
}
function ln(e, t, n, r) {
  let o;
  try {
    o = r ? e(...r) : e();
  } catch (i) {
    Xo(i, t, n);
  }
  return o;
}
function yt(e, t, n, r) {
  if (me(e)) {
    const i = ln(e, t, n, r);
    return (
      i &&
        ac(i) &&
        i.catch((s) => {
          Xo(s, t, n);
        }),
      i
    );
  }
  const o = [];
  for (let i = 0; i < e.length; i++) o.push(yt(e[i], t, n, r));
  return o;
}
function Xo(e, t, n, r = !0) {
  const o = t ? t.vnode : null;
  if (t) {
    let i = t.parent;
    const s = t.proxy,
      l = n;
    for (; i; ) {
      const u = i.ec;
      if (u) {
        for (let c = 0; c < u.length; c++) if (u[c](e, s, l) === !1) return;
      }
      i = i.parent;
    }
    const a = t.appContext.config.errorHandler;
    if (a) {
      ln(a, null, 10, [e, s, l]);
      return;
    }
  }
  Qh(e, n, o, r);
}
function Qh(e, t, n, r = !0) {
  console.error(e);
}
let qr = !1,
  Yi = !1;
const tt = [];
let Rt = 0;
const Kn = [];
let qt = null,
  Cn = 0;
const Mc = Promise.resolve();
let rl = null;
function Ge(e) {
  const t = rl || Mc;
  return e ? t.then(this ? e.bind(this) : e) : t;
}
function Xh(e) {
  let t = Rt + 1,
    n = tt.length;
  for (; t < n; ) {
    const r = (t + n) >>> 1;
    $r(tt[r]) < e ? (t = r + 1) : (n = r);
  }
  return t;
}
function ol(e) {
  (!tt.length || !tt.includes(e, qr && e.allowRecurse ? Rt + 1 : Rt)) &&
    (e.id == null ? tt.push(e) : tt.splice(Xh(e.id), 0, e), Ac());
}
function Ac() {
  !qr && !Yi && ((Yi = !0), (rl = Mc.then(Oc)));
}
function Yh(e) {
  const t = tt.indexOf(e);
  t > Rt && tt.splice(t, 1);
}
function Jh(e) {
  ue(e)
    ? Kn.push(...e)
    : (!qt || !qt.includes(e, e.allowRecurse ? Cn + 1 : Cn)) && Kn.push(e),
    Ac();
}
function Fl(e, t = qr ? Rt + 1 : 0) {
  for (; t < tt.length; t++) {
    const n = tt[t];
    n && n.pre && (tt.splice(t, 1), t--, n());
  }
}
function Tc(e) {
  if (Kn.length) {
    const t = [...new Set(Kn)];
    if (((Kn.length = 0), qt)) {
      qt.push(...t);
      return;
    }
    for (qt = t, qt.sort((n, r) => $r(n) - $r(r)), Cn = 0; Cn < qt.length; Cn++)
      qt[Cn]();
    (qt = null), (Cn = 0);
  }
}
const $r = (e) => (e.id == null ? 1 / 0 : e.id),
  Zh = (e, t) => {
    const n = $r(e) - $r(t);
    if (n === 0) {
      if (e.pre && !t.pre) return -1;
      if (t.pre && !e.pre) return 1;
    }
    return n;
  };
function Oc(e) {
  (Yi = !1), (qr = !0), tt.sort(Zh);
  const t = xt;
  try {
    for (Rt = 0; Rt < tt.length; Rt++) {
      const n = tt[Rt];
      n && n.active !== !1 && ln(n, null, 14);
    }
  } finally {
    (Rt = 0),
      (tt.length = 0),
      Tc(),
      (qr = !1),
      (rl = null),
      (tt.length || Kn.length) && Oc();
  }
}
function em(e, t, ...n) {
  if (e.isUnmounted) return;
  const r = e.vnode.props || Le;
  let o = n;
  const i = t.startsWith('update:'),
    s = i && t.slice(7);
  if (s && s in r) {
    const c = `${s === 'modelValue' ? 'model' : s}Modifiers`,
      { number: h, trim: f } = r[c] || Le;
    f && (o = n.map((m) => (Re(m) ? m.trim() : m))), h && (o = n.map(Ks));
  }
  let l,
    a = r[(l = hi(t))] || r[(l = hi(Ht(t)))];
  !a && i && (a = r[(l = hi(sr(t)))]), a && yt(a, e, 6, o);
  const u = r[l + 'Once'];
  if (u) {
    if (!e.emitted) e.emitted = {};
    else if (e.emitted[l]) return;
    (e.emitted[l] = !0), yt(u, e, 6, o);
  }
}
function Rc(e, t, n = !1) {
  const r = t.emitsCache,
    o = r.get(e);
  if (o !== void 0) return o;
  const i = e.emits;
  let s = {},
    l = !1;
  if (!me(e)) {
    const a = (u) => {
      const c = Rc(u, t, !0);
      c && ((l = !0), Xe(s, c));
    };
    !n && t.mixins.length && t.mixins.forEach(a),
      e.extends && a(e.extends),
      e.mixins && e.mixins.forEach(a);
  }
  return !i && !l
    ? (Me(e) && r.set(e, null), null)
    : (ue(i) ? i.forEach((a) => (s[a] = null)) : Xe(s, i),
      Me(e) && r.set(e, s),
      s);
}
function Yo(e, t) {
  return !e || !Uo(t)
    ? !1
    : ((t = t.slice(2).replace(/Once$/, '')),
      ye(e, t[0].toLowerCase() + t.slice(1)) || ye(e, sr(t)) || ye(e, t));
}
let ct = null,
  Jo = null;
function So(e) {
  const t = ct;
  return (ct = e), (Jo = (e && e.type.__scopeId) || null), t;
}
function tm(e) {
  Jo = e;
}
function nm() {
  Jo = null;
}
function rt(e, t = ct, n) {
  if (!t || e._n) return e;
  const r = (...o) => {
    r._d && Wl(-1);
    const i = So(t);
    let s;
    try {
      s = e(...o);
    } finally {
      So(i), r._d && Wl(1);
    }
    return s;
  };
  return (r._n = !0), (r._c = !0), (r._d = !0), r;
}
function mi(e) {
  const {
    type: t,
    vnode: n,
    proxy: r,
    withProxy: o,
    props: i,
    propsOptions: [s],
    slots: l,
    attrs: a,
    emit: u,
    render: c,
    renderCache: h,
    data: f,
    setupState: m,
    ctx: P,
    inheritAttrs: A,
  } = e;
  let O, w;
  const g = So(e);
  try {
    if (n.shapeFlag & 4) {
      const k = o || r;
      (O = Ot(c.call(k, k, h, i, m, f, P))), (w = a);
    } else {
      const k = t;
      (O = Ot(
        k.length > 1 ? k(i, { attrs: a, slots: l, emit: u }) : k(i, null)
      )),
        (w = t.props ? a : rm(a));
    }
  } catch (k) {
    (Ar.length = 0), Xo(k, e, 1), (O = ke(St));
  }
  let E = O;
  if (w && A !== !1) {
    const k = Object.keys(w),
      { shapeFlag: S } = E;
    k.length && S & 7 && (s && k.some(js) && (w = om(w, s)), (E = Ut(E, w)));
  }
  return (
    n.dirs && ((E = Ut(E)), (E.dirs = E.dirs ? E.dirs.concat(n.dirs) : n.dirs)),
    n.transition && (E.transition = n.transition),
    (O = E),
    So(g),
    O
  );
}
const rm = (e) => {
    let t;
    for (const n in e)
      (n === 'class' || n === 'style' || Uo(n)) && ((t || (t = {}))[n] = e[n]);
    return t;
  },
  om = (e, t) => {
    const n = {};
    for (const r in e) (!js(r) || !(r.slice(9) in t)) && (n[r] = e[r]);
    return n;
  };
function im(e, t, n) {
  const { props: r, children: o, component: i } = e,
    { props: s, children: l, patchFlag: a } = t,
    u = i.emitsOptions;
  if (t.dirs || t.transition) return !0;
  if (n && a >= 0) {
    if (a & 1024) return !0;
    if (a & 16) return r ? Hl(r, s, u) : !!s;
    if (a & 8) {
      const c = t.dynamicProps;
      for (let h = 0; h < c.length; h++) {
        const f = c[h];
        if (s[f] !== r[f] && !Yo(u, f)) return !0;
      }
    }
  } else
    return (o || l) && (!l || !l.$stable)
      ? !0
      : r === s
      ? !1
      : r
      ? s
        ? Hl(r, s, u)
        : !0
      : !!s;
  return !1;
}
function Hl(e, t, n) {
  const r = Object.keys(t);
  if (r.length !== Object.keys(e).length) return !0;
  for (let o = 0; o < r.length; o++) {
    const i = r[o];
    if (t[i] !== e[i] && !Yo(n, i)) return !0;
  }
  return !1;
}
function sm({ vnode: e, parent: t }, n) {
  for (; t && t.subTree === e; ) ((e = t.vnode).el = n), (t = t.parent);
}
const Ic = (e) => e.__isSuspense;
function lm(e, t) {
  t && t.pendingBranch
    ? ue(e)
      ? t.effects.push(...e)
      : t.effects.push(e)
    : Jh(e);
}
function Qn(e, t) {
  if (qe) {
    let n = qe.provides;
    const r = qe.parent && qe.parent.provides;
    r === n && (n = qe.provides = Object.create(r)), (n[e] = t);
  }
}
function Qe(e, t, n = !1) {
  const r = qe || ct;
  if (r) {
    const o =
      r.parent == null
        ? r.vnode.appContext && r.vnode.appContext.provides
        : r.parent.provides;
    if (o && e in o) return o[e];
    if (arguments.length > 1) return n && me(t) ? t.call(r.proxy) : t;
  }
}
const so = {};
function fe(e, t, n) {
  return Fc(e, t, n);
}
function Fc(
  e,
  t,
  { immediate: n, deep: r, flush: o, onTrack: i, onTrigger: s } = Le
) {
  const l = qe;
  let a,
    u = !1,
    c = !1;
  if (
    (Ae(e)
      ? ((a = () => e.value), (u = xo(e)))
      : sn(e)
      ? ((a = () => e), (r = !0))
      : ue(e)
      ? ((c = !0),
        (u = e.some((E) => sn(E) || xo(E))),
        (a = () =>
          e.map((E) => {
            if (Ae(E)) return E.value;
            if (sn(E)) return xn(E);
            if (me(E)) return ln(E, l, 2);
          })))
      : me(e)
      ? t
        ? (a = () => ln(e, l, 2))
        : (a = () => {
            if (!(l && l.isUnmounted)) return h && h(), yt(e, l, 3, [f]);
          })
      : (a = xt),
    t && r)
  ) {
    const E = a;
    a = () => xn(E());
  }
  let h,
    f = (E) => {
      h = w.onStop = () => {
        ln(E, l, 4);
      };
    },
    m;
  if (jr)
    if (
      ((f = xt),
      t ? n && yt(t, l, 3, [a(), c ? [] : void 0, f]) : a(),
      o === 'sync')
    ) {
      const E = Jm();
      m = E.__watcherHandles || (E.__watcherHandles = []);
    } else return xt;
  let P = c ? new Array(e.length).fill(so) : so;
  const A = () => {
    if (!!w.active)
      if (t) {
        const E = w.run();
        (r || u || (c ? E.some((k, S) => Br(k, P[S])) : Br(E, P))) &&
          (h && h(),
          yt(t, l, 3, [E, P === so ? void 0 : c && P[0] === so ? [] : P, f]),
          (P = E));
      } else w.run();
  };
  A.allowRecurse = !!t;
  let O;
  o === 'sync'
    ? (O = A)
    : o === 'post'
    ? (O = () => je(A, l && l.suspense))
    : ((A.pre = !0), l && (A.id = l.uid), (O = () => ol(A)));
  const w = new Ys(a, O);
  t
    ? n
      ? A()
      : (P = w.run())
    : o === 'post'
    ? je(w.run.bind(w), l && l.suspense)
    : w.run();
  const g = () => {
    w.stop(), l && l.scope && Us(l.scope.effects, w);
  };
  return m && m.push(g), g;
}
function am(e, t, n) {
  const r = this.proxy,
    o = Re(e) ? (e.includes('.') ? Hc(r, e) : () => r[e]) : e.bind(r, r);
  let i;
  me(t) ? (i = t) : ((i = t.handler), (n = t));
  const s = qe;
  er(this);
  const l = Fc(o, i.bind(r), n);
  return s ? er(s) : Tn(), l;
}
function Hc(e, t) {
  const n = t.split('.');
  return () => {
    let r = e;
    for (let o = 0; o < n.length && r; o++) r = r[n[o]];
    return r;
  };
}
function xn(e, t) {
  if (!Me(e) || e.__v_skip || ((t = t || new Set()), t.has(e))) return e;
  if ((t.add(e), Ae(e))) xn(e.value, t);
  else if (ue(e)) for (let n = 0; n < e.length; n++) xn(e[n], t);
  else if (lc(e) || Gn(e))
    e.forEach((n) => {
      xn(n, t);
    });
  else if (cc(e)) for (const n in e) xn(e[n], t);
  return e;
}
function um() {
  const e = {
    isMounted: !1,
    isLeaving: !1,
    isUnmounting: !1,
    leavingVNodes: new Map(),
  };
  return (
    st(() => {
      e.isMounted = !0;
    }),
    De(() => {
      e.isUnmounting = !0;
    }),
    e
  );
}
const mt = [Function, Array],
  cm = {
    name: 'BaseTransition',
    props: {
      mode: String,
      appear: Boolean,
      persisted: Boolean,
      onBeforeEnter: mt,
      onEnter: mt,
      onAfterEnter: mt,
      onEnterCancelled: mt,
      onBeforeLeave: mt,
      onLeave: mt,
      onAfterLeave: mt,
      onLeaveCancelled: mt,
      onBeforeAppear: mt,
      onAppear: mt,
      onAfterAppear: mt,
      onAppearCancelled: mt,
    },
    setup(e, { slots: t }) {
      const n = Ee(),
        r = um();
      let o;
      return () => {
        const i = t.default && Bc(t.default(), !0);
        if (!i || !i.length) return;
        let s = i[0];
        if (i.length > 1) {
          for (const A of i)
            if (A.type !== St) {
              s = A;
              break;
            }
        }
        const l = ge(e),
          { mode: a } = l;
        if (r.isLeaving) return gi(s);
        const u = Dl(s);
        if (!u) return gi(s);
        const c = Ji(u, l, r, n);
        Lo(u, c);
        const h = n.subTree,
          f = h && Dl(h);
        let m = !1;
        const { getTransitionKey: P } = u.type;
        if (P) {
          const A = P();
          o === void 0 ? (o = A) : A !== o && ((o = A), (m = !0));
        }
        if (f && f.type !== St && (!kn(u, f) || m)) {
          const A = Ji(f, l, r, n);
          if ((Lo(f, A), a === 'out-in'))
            return (
              (r.isLeaving = !0),
              (A.afterLeave = () => {
                (r.isLeaving = !1), n.update.active !== !1 && n.update();
              }),
              gi(s)
            );
          a === 'in-out' &&
            u.type !== St &&
            (A.delayLeave = (O, w, g) => {
              const E = Nc(r, f);
              (E[String(f.key)] = f),
                (O._leaveCb = () => {
                  w(), (O._leaveCb = void 0), delete c.delayedLeave;
                }),
                (c.delayedLeave = g);
            });
        }
        return s;
      };
    },
  },
  Dc = cm;
function Nc(e, t) {
  const { leavingVNodes: n } = e;
  let r = n.get(t.type);
  return r || ((r = Object.create(null)), n.set(t.type, r)), r;
}
function Ji(e, t, n, r) {
  const {
      appear: o,
      mode: i,
      persisted: s = !1,
      onBeforeEnter: l,
      onEnter: a,
      onAfterEnter: u,
      onEnterCancelled: c,
      onBeforeLeave: h,
      onLeave: f,
      onAfterLeave: m,
      onLeaveCancelled: P,
      onBeforeAppear: A,
      onAppear: O,
      onAfterAppear: w,
      onAppearCancelled: g,
    } = t,
    E = String(e.key),
    k = Nc(n, e),
    S = (R, D) => {
      R && yt(R, r, 9, D);
    },
    L = (R, D) => {
      const z = D[1];
      S(R, D),
        ue(R) ? R.every((j) => j.length <= 1) && z() : R.length <= 1 && z();
    },
    T = {
      mode: i,
      persisted: s,
      beforeEnter(R) {
        let D = l;
        if (!n.isMounted)
          if (o) D = A || l;
          else return;
        R._leaveCb && R._leaveCb(!0);
        const z = k[E];
        z && kn(e, z) && z.el._leaveCb && z.el._leaveCb(), S(D, [R]);
      },
      enter(R) {
        let D = a,
          z = u,
          j = c;
        if (!n.isMounted)
          if (o) (D = O || a), (z = w || u), (j = g || c);
          else return;
        let N = !1;
        const Y = (R._enterCb = ($) => {
          N ||
            ((N = !0),
            $ ? S(j, [R]) : S(z, [R]),
            T.delayedLeave && T.delayedLeave(),
            (R._enterCb = void 0));
        });
        D ? L(D, [R, Y]) : Y();
      },
      leave(R, D) {
        const z = String(e.key);
        if ((R._enterCb && R._enterCb(!0), n.isUnmounting)) return D();
        S(h, [R]);
        let j = !1;
        const N = (R._leaveCb = (Y) => {
          j ||
            ((j = !0),
            D(),
            Y ? S(P, [R]) : S(m, [R]),
            (R._leaveCb = void 0),
            k[z] === e && delete k[z]);
        });
        (k[z] = e), f ? L(f, [R, N]) : N();
      },
      clone(R) {
        return Ji(R, t, n, r);
      },
    };
  return T;
}
function gi(e) {
  if (Zo(e)) return (e = Ut(e)), (e.children = null), e;
}
function Dl(e) {
  return Zo(e) ? (e.children ? e.children[0] : void 0) : e;
}
function Lo(e, t) {
  e.shapeFlag & 6 && e.component
    ? Lo(e.component.subTree, t)
    : e.shapeFlag & 128
    ? ((e.ssContent.transition = t.clone(e.ssContent)),
      (e.ssFallback.transition = t.clone(e.ssFallback)))
    : (e.transition = t);
}
function Bc(e, t = !1, n) {
  let r = [],
    o = 0;
  for (let i = 0; i < e.length; i++) {
    let s = e[i];
    const l = n == null ? s.key : String(n) + String(s.key != null ? s.key : i);
    s.type === Ct
      ? (s.patchFlag & 128 && o++, (r = r.concat(Bc(s.children, t, l))))
      : (t || s.type !== St) && r.push(l != null ? Ut(s, { key: l }) : s);
  }
  if (o > 1) for (let i = 0; i < r.length; i++) r[i].patchFlag = -2;
  return r;
}
function Qr(e) {
  return me(e) ? { setup: e, name: e.name } : e;
}
const Sr = (e) => !!e.type.__asyncLoader,
  Zo = (e) => e.type.__isKeepAlive,
  fm = {
    name: 'KeepAlive',
    __isKeepAlive: !0,
    props: {
      include: [String, RegExp, Array],
      exclude: [String, RegExp, Array],
      max: [String, Number],
    },
    setup(e, { slots: t }) {
      const n = Ee(),
        r = n.ctx;
      if (!r.renderer)
        return () => {
          const g = t.default && t.default();
          return g && g.length === 1 ? g[0] : g;
        };
      const o = new Map(),
        i = new Set();
      let s = null;
      const l = n.suspense,
        {
          renderer: {
            p: a,
            m: u,
            um: c,
            o: { createElement: h },
          },
        } = r,
        f = h('div');
      (r.activate = (g, E, k, S, L) => {
        const T = g.component;
        u(g, E, k, 0, l),
          a(T.vnode, g, E, k, T, l, S, g.slotScopeIds, L),
          je(() => {
            (T.isDeactivated = !1), T.a && xr(T.a);
            const R = g.props && g.props.onVnodeMounted;
            R && vt(R, T.parent, g);
          }, l);
      }),
        (r.deactivate = (g) => {
          const E = g.component;
          u(g, f, null, 1, l),
            je(() => {
              E.da && xr(E.da);
              const k = g.props && g.props.onVnodeUnmounted;
              k && vt(k, E.parent, g), (E.isDeactivated = !0);
            }, l);
        });
      function m(g) {
        vi(g), c(g, n, l, !0);
      }
      function P(g) {
        o.forEach((E, k) => {
          const S = ls(E.type);
          S && (!g || !g(S)) && A(k);
        });
      }
      function A(g) {
        const E = o.get(g);
        !s || E.type !== s.type ? m(E) : s && vi(s), o.delete(g), i.delete(g);
      }
      fe(
        () => [e.include, e.exclude],
        ([g, E]) => {
          g && P((k) => kr(g, k)), E && P((k) => !kr(E, k));
        },
        { flush: 'post', deep: !0 }
      );
      let O = null;
      const w = () => {
        O != null && o.set(O, pi(n.subTree));
      };
      return (
        st(w),
        Vc(w),
        De(() => {
          o.forEach((g) => {
            const { subTree: E, suspense: k } = n,
              S = pi(E);
            if (g.type === S.type) {
              vi(S);
              const L = S.component.da;
              L && je(L, k);
              return;
            }
            m(g);
          });
        }),
        () => {
          if (((O = null), !t.default)) return null;
          const g = t.default(),
            E = g[0];
          if (g.length > 1) return (s = null), g;
          if (!To(E) || (!(E.shapeFlag & 4) && !(E.shapeFlag & 128)))
            return (s = null), E;
          let k = pi(E);
          const S = k.type,
            L = ls(Sr(k) ? k.type.__asyncResolved || {} : S),
            { include: T, exclude: R, max: D } = e;
          if ((T && (!L || !kr(T, L))) || (R && L && kr(R, L)))
            return (s = k), E;
          const z = k.key == null ? S : k.key,
            j = o.get(z);
          return (
            k.el && ((k = Ut(k)), E.shapeFlag & 128 && (E.ssContent = k)),
            (O = z),
            j
              ? ((k.el = j.el),
                (k.component = j.component),
                k.transition && Lo(k, k.transition),
                (k.shapeFlag |= 512),
                i.delete(z),
                i.add(z))
              : (i.add(z),
                D && i.size > parseInt(D, 10) && A(i.values().next().value)),
            (k.shapeFlag |= 256),
            (s = k),
            Ic(E.type) ? E : k
          );
        }
      );
    },
  },
  I_ = fm;
function kr(e, t) {
  return ue(e)
    ? e.some((n) => kr(n, t))
    : Re(e)
    ? e.split(',').includes(t)
    : e.test
    ? e.test(t)
    : !1;
}
function il(e, t) {
  zc(e, 'a', t);
}
function Xr(e, t) {
  zc(e, 'da', t);
}
function zc(e, t, n = qe) {
  const r =
    e.__wdc ||
    (e.__wdc = () => {
      let o = n;
      for (; o; ) {
        if (o.isDeactivated) return;
        o = o.parent;
      }
      return e();
    });
  if ((ei(t, r, n), n)) {
    let o = n.parent;
    for (; o && o.parent; )
      Zo(o.parent.vnode) && dm(r, t, n, o), (o = o.parent);
  }
}
function dm(e, t, n, r) {
  const o = ei(t, e, r, !0);
  ur(() => {
    Us(r[t], o);
  }, n);
}
function vi(e) {
  (e.shapeFlag &= -257), (e.shapeFlag &= -513);
}
function pi(e) {
  return e.shapeFlag & 128 ? e.ssContent : e;
}
function ei(e, t, n = qe, r = !1) {
  if (n) {
    const o = n[e] || (n[e] = []),
      i =
        t.__weh ||
        (t.__weh = (...s) => {
          if (n.isUnmounted) return;
          lr(), er(n);
          const l = yt(t, n, e, s);
          return Tn(), ar(), l;
        });
    return r ? o.unshift(i) : o.push(i), i;
  }
}
const Wt =
    (e) =>
    (t, n = qe) =>
      (!jr || e === 'sp') && ei(e, (...r) => t(...r), n),
  qc = Wt('bm'),
  st = Wt('m'),
  $c = Wt('bu'),
  Vc = Wt('u'),
  De = Wt('bum'),
  ur = Wt('um'),
  hm = Wt('sp'),
  mm = Wt('rtg'),
  gm = Wt('rtc');
function vm(e, t = qe) {
  ei('ec', e, t);
}
function Mo(e, t) {
  const n = ct;
  if (n === null) return e;
  const r = ni(n) || n.proxy,
    o = e.dirs || (e.dirs = []);
  for (let i = 0; i < t.length; i++) {
    let [s, l, a, u = Le] = t[i];
    s &&
      (me(s) && (s = { mounted: s, updated: s }),
      s.deep && xn(l),
      o.push({
        dir: s,
        instance: r,
        value: l,
        oldValue: void 0,
        arg: a,
        modifiers: u,
      }));
  }
  return e;
}
function gn(e, t, n, r) {
  const o = e.dirs,
    i = t && t.dirs;
  for (let s = 0; s < o.length; s++) {
    const l = o[s];
    i && (l.oldValue = i[s].value);
    let a = l.dir[r];
    a && (lr(), yt(a, n, 8, [e.el, l, e, t]), ar());
  }
}
const jc = 'components';
function Zi(e, t) {
  return bm(jc, e, !0, t) || e;
}
const pm = Symbol();
function bm(e, t, n = !0, r = !1) {
  const o = ct || qe;
  if (o) {
    const i = o.type;
    if (e === jc) {
      const l = ls(i, !1);
      if (l && (l === t || l === Ht(t) || l === Ko(Ht(t)))) return i;
    }
    const s = Nl(o[e] || i[e], t) || Nl(o.appContext[e], t);
    return !s && r ? i : s;
  }
}
function Nl(e, t) {
  return e && (e[t] || e[Ht(t)] || e[Ko(Ht(t))]);
}
function F_(e, t, n, r) {
  let o;
  const i = n && n[r];
  if (ue(e) || Re(e)) {
    o = new Array(e.length);
    for (let s = 0, l = e.length; s < l; s++)
      o[s] = t(e[s], s, void 0, i && i[s]);
  } else if (typeof e == 'number') {
    o = new Array(e);
    for (let s = 0; s < e; s++) o[s] = t(s + 1, s, void 0, i && i[s]);
  } else if (Me(e))
    if (e[Symbol.iterator])
      o = Array.from(e, (s, l) => t(s, l, void 0, i && i[l]));
    else {
      const s = Object.keys(e);
      o = new Array(s.length);
      for (let l = 0, a = s.length; l < a; l++) {
        const u = s[l];
        o[l] = t(e[u], u, l, i && i[l]);
      }
    }
  else o = [];
  return n && (n[r] = o), o;
}
const es = (e) => (e ? (tf(e) ? ni(e) || e.proxy : es(e.parent)) : null),
  Lr = Xe(Object.create(null), {
    $: (e) => e,
    $el: (e) => e.vnode.el,
    $data: (e) => e.data,
    $props: (e) => e.props,
    $attrs: (e) => e.attrs,
    $slots: (e) => e.slots,
    $refs: (e) => e.refs,
    $parent: (e) => es(e.parent),
    $root: (e) => es(e.root),
    $emit: (e) => e.emit,
    $options: (e) => sl(e),
    $forceUpdate: (e) => e.f || (e.f = () => ol(e.update)),
    $nextTick: (e) => e.n || (e.n = Ge.bind(e.proxy)),
    $watch: (e) => am.bind(e),
  }),
  bi = (e, t) => e !== Le && !e.__isScriptSetup && ye(e, t),
  ym = {
    get({ _: e }, t) {
      const {
        ctx: n,
        setupState: r,
        data: o,
        props: i,
        accessCache: s,
        type: l,
        appContext: a,
      } = e;
      let u;
      if (t[0] !== '$') {
        const m = s[t];
        if (m !== void 0)
          switch (m) {
            case 1:
              return r[t];
            case 2:
              return o[t];
            case 4:
              return n[t];
            case 3:
              return i[t];
          }
        else {
          if (bi(r, t)) return (s[t] = 1), r[t];
          if (o !== Le && ye(o, t)) return (s[t] = 2), o[t];
          if ((u = e.propsOptions[0]) && ye(u, t)) return (s[t] = 3), i[t];
          if (n !== Le && ye(n, t)) return (s[t] = 4), n[t];
          ts && (s[t] = 0);
        }
      }
      const c = Lr[t];
      let h, f;
      if (c) return t === '$attrs' && ft(e, 'get', t), c(e);
      if ((h = l.__cssModules) && (h = h[t])) return h;
      if (n !== Le && ye(n, t)) return (s[t] = 4), n[t];
      if (((f = a.config.globalProperties), ye(f, t))) return f[t];
    },
    set({ _: e }, t, n) {
      const { data: r, setupState: o, ctx: i } = e;
      return bi(o, t)
        ? ((o[t] = n), !0)
        : r !== Le && ye(r, t)
        ? ((r[t] = n), !0)
        : ye(e.props, t) || (t[0] === '$' && t.slice(1) in e)
        ? !1
        : ((i[t] = n), !0);
    },
    has(
      {
        _: {
          data: e,
          setupState: t,
          accessCache: n,
          ctx: r,
          appContext: o,
          propsOptions: i,
        },
      },
      s
    ) {
      let l;
      return (
        !!n[s] ||
        (e !== Le && ye(e, s)) ||
        bi(t, s) ||
        ((l = i[0]) && ye(l, s)) ||
        ye(r, s) ||
        ye(Lr, s) ||
        ye(o.config.globalProperties, s)
      );
    },
    defineProperty(e, t, n) {
      return (
        n.get != null
          ? (e._.accessCache[t] = 0)
          : ye(n, 'value') && this.set(e, t, n.value, null),
        Reflect.defineProperty(e, t, n)
      );
    },
  };
let ts = !0;
function _m(e) {
  const t = sl(e),
    n = e.proxy,
    r = e.ctx;
  (ts = !1), t.beforeCreate && Bl(t.beforeCreate, e, 'bc');
  const {
    data: o,
    computed: i,
    methods: s,
    watch: l,
    provide: a,
    inject: u,
    created: c,
    beforeMount: h,
    mounted: f,
    beforeUpdate: m,
    updated: P,
    activated: A,
    deactivated: O,
    beforeDestroy: w,
    beforeUnmount: g,
    destroyed: E,
    unmounted: k,
    render: S,
    renderTracked: L,
    renderTriggered: T,
    errorCaptured: R,
    serverPrefetch: D,
    expose: z,
    inheritAttrs: j,
    components: N,
    directives: Y,
    filters: $,
  } = t;
  if ((u && Em(u, r, null, e.appContext.config.unwrapInjectedRef), s))
    for (const V in s) {
      const ee = s[V];
      me(ee) && (r[V] = ee.bind(n));
    }
  if (o) {
    const V = o.call(n, n);
    Me(V) && (e.data = bt(V));
  }
  if (((ts = !0), i))
    for (const V in i) {
      const ee = i[V],
        de = me(ee) ? ee.bind(n, n) : me(ee.get) ? ee.get.bind(n, n) : xt,
        be = !me(ee) && me(ee.set) ? ee.set.bind(n) : xt,
        J = H({ get: de, set: be });
      Object.defineProperty(r, V, {
        enumerable: !0,
        configurable: !0,
        get: () => J.value,
        set: (ce) => (J.value = ce),
      });
    }
  if (l) for (const V in l) Uc(l[V], r, n, V);
  if (a) {
    const V = me(a) ? a.call(n) : a;
    Reflect.ownKeys(V).forEach((ee) => {
      Qn(ee, V[ee]);
    });
  }
  c && Bl(c, e, 'c');
  function se(V, ee) {
    ue(ee) ? ee.forEach((de) => V(de.bind(n))) : ee && V(ee.bind(n));
  }
  if (
    (se(qc, h),
    se(st, f),
    se($c, m),
    se(Vc, P),
    se(il, A),
    se(Xr, O),
    se(vm, R),
    se(gm, L),
    se(mm, T),
    se(De, g),
    se(ur, k),
    se(hm, D),
    ue(z))
  )
    if (z.length) {
      const V = e.exposed || (e.exposed = {});
      z.forEach((ee) => {
        Object.defineProperty(V, ee, {
          get: () => n[ee],
          set: (de) => (n[ee] = de),
        });
      });
    } else e.exposed || (e.exposed = {});
  S && e.render === xt && (e.render = S),
    j != null && (e.inheritAttrs = j),
    N && (e.components = N),
    Y && (e.directives = Y);
}
function Em(e, t, n = xt, r = !1) {
  ue(e) && (e = ns(e));
  for (const o in e) {
    const i = e[o];
    let s;
    Me(i)
      ? 'default' in i
        ? (s = Qe(i.from || o, i.default, !0))
        : (s = Qe(i.from || o))
      : (s = Qe(i)),
      Ae(s) && r
        ? Object.defineProperty(t, o, {
            enumerable: !0,
            configurable: !0,
            get: () => s.value,
            set: (l) => (s.value = l),
          })
        : (t[o] = s);
  }
}
function Bl(e, t, n) {
  yt(ue(e) ? e.map((r) => r.bind(t.proxy)) : e.bind(t.proxy), t, n);
}
function Uc(e, t, n, r) {
  const o = r.includes('.') ? Hc(n, r) : () => n[r];
  if (Re(e)) {
    const i = t[e];
    me(i) && fe(o, i);
  } else if (me(e)) fe(o, e.bind(n));
  else if (Me(e))
    if (ue(e)) e.forEach((i) => Uc(i, t, n, r));
    else {
      const i = me(e.handler) ? e.handler.bind(n) : t[e.handler];
      me(i) && fe(o, i, e);
    }
}
function sl(e) {
  const t = e.type,
    { mixins: n, extends: r } = t,
    {
      mixins: o,
      optionsCache: i,
      config: { optionMergeStrategies: s },
    } = e.appContext,
    l = i.get(t);
  let a;
  return (
    l
      ? (a = l)
      : !o.length && !n && !r
      ? (a = t)
      : ((a = {}), o.length && o.forEach((u) => Ao(a, u, s, !0)), Ao(a, t, s)),
    Me(t) && i.set(t, a),
    a
  );
}
function Ao(e, t, n, r = !1) {
  const { mixins: o, extends: i } = t;
  i && Ao(e, i, n, !0), o && o.forEach((s) => Ao(e, s, n, !0));
  for (const s in t)
    if (!(r && s === 'expose')) {
      const l = wm[s] || (n && n[s]);
      e[s] = l ? l(e[s], t[s]) : t[s];
    }
  return e;
}
const wm = {
  data: zl,
  props: En,
  emits: En,
  methods: En,
  computed: En,
  beforeCreate: ot,
  created: ot,
  beforeMount: ot,
  mounted: ot,
  beforeUpdate: ot,
  updated: ot,
  beforeDestroy: ot,
  beforeUnmount: ot,
  destroyed: ot,
  unmounted: ot,
  activated: ot,
  deactivated: ot,
  errorCaptured: ot,
  serverPrefetch: ot,
  components: En,
  directives: En,
  watch: km,
  provide: zl,
  inject: Cm,
};
function zl(e, t) {
  return t
    ? e
      ? function () {
          return Xe(
            me(e) ? e.call(this, this) : e,
            me(t) ? t.call(this, this) : t
          );
        }
      : t
    : e;
}
function Cm(e, t) {
  return En(ns(e), ns(t));
}
function ns(e) {
  if (ue(e)) {
    const t = {};
    for (let n = 0; n < e.length; n++) t[e[n]] = e[n];
    return t;
  }
  return e;
}
function ot(e, t) {
  return e ? [...new Set([].concat(e, t))] : t;
}
function En(e, t) {
  return e ? Xe(Xe(Object.create(null), e), t) : t;
}
function km(e, t) {
  if (!e) return t;
  if (!t) return e;
  const n = Xe(Object.create(null), e);
  for (const r in t) n[r] = ot(e[r], t[r]);
  return n;
}
function Pm(e, t, n, r = !1) {
  const o = {},
    i = {};
  Po(i, ti, 1), (e.propsDefaults = Object.create(null)), Wc(e, t, o, i);
  for (const s in e.propsOptions[0]) s in o || (o[s] = void 0);
  n ? (e.props = r ? o : zh(o)) : e.type.props ? (e.props = o) : (e.props = i),
    (e.attrs = i);
}
function xm(e, t, n, r) {
  const {
      props: o,
      attrs: i,
      vnode: { patchFlag: s },
    } = e,
    l = ge(o),
    [a] = e.propsOptions;
  let u = !1;
  if ((r || s > 0) && !(s & 16)) {
    if (s & 8) {
      const c = e.vnode.dynamicProps;
      for (let h = 0; h < c.length; h++) {
        let f = c[h];
        if (Yo(e.emitsOptions, f)) continue;
        const m = t[f];
        if (a)
          if (ye(i, f)) m !== i[f] && ((i[f] = m), (u = !0));
          else {
            const P = Ht(f);
            o[P] = rs(a, l, P, m, e, !1);
          }
        else m !== i[f] && ((i[f] = m), (u = !0));
      }
    }
  } else {
    Wc(e, t, o, i) && (u = !0);
    let c;
    for (const h in l)
      (!t || (!ye(t, h) && ((c = sr(h)) === h || !ye(t, c)))) &&
        (a
          ? n &&
            (n[h] !== void 0 || n[c] !== void 0) &&
            (o[h] = rs(a, l, h, void 0, e, !0))
          : delete o[h]);
    if (i !== l)
      for (const h in i) (!t || (!ye(t, h) && !0)) && (delete i[h], (u = !0));
  }
  u && Vt(e, 'set', '$attrs');
}
function Wc(e, t, n, r) {
  const [o, i] = e.propsOptions;
  let s = !1,
    l;
  if (t)
    for (let a in t) {
      if (bo(a)) continue;
      const u = t[a];
      let c;
      o && ye(o, (c = Ht(a)))
        ? !i || !i.includes(c)
          ? (n[c] = u)
          : ((l || (l = {}))[c] = u)
        : Yo(e.emitsOptions, a) ||
          ((!(a in r) || u !== r[a]) && ((r[a] = u), (s = !0)));
    }
  if (i) {
    const a = ge(n),
      u = l || Le;
    for (let c = 0; c < i.length; c++) {
      const h = i[c];
      n[h] = rs(o, a, h, u[h], e, !ye(u, h));
    }
  }
  return s;
}
function rs(e, t, n, r, o, i) {
  const s = e[n];
  if (s != null) {
    const l = ye(s, 'default');
    if (l && r === void 0) {
      const a = s.default;
      if (s.type !== Function && me(a)) {
        const { propsDefaults: u } = o;
        n in u ? (r = u[n]) : (er(o), (r = u[n] = a.call(null, t)), Tn());
      } else r = a;
    }
    s[0] &&
      (i && !l ? (r = !1) : s[1] && (r === '' || r === sr(n)) && (r = !0));
  }
  return r;
}
function Gc(e, t, n = !1) {
  const r = t.propsCache,
    o = r.get(e);
  if (o) return o;
  const i = e.props,
    s = {},
    l = [];
  let a = !1;
  if (!me(e)) {
    const c = (h) => {
      a = !0;
      const [f, m] = Gc(h, t, !0);
      Xe(s, f), m && l.push(...m);
    };
    !n && t.mixins.length && t.mixins.forEach(c),
      e.extends && c(e.extends),
      e.mixins && e.mixins.forEach(c);
  }
  if (!i && !a) return Me(e) && r.set(e, Wn), Wn;
  if (ue(i))
    for (let c = 0; c < i.length; c++) {
      const h = Ht(i[c]);
      ql(h) && (s[h] = Le);
    }
  else if (i)
    for (const c in i) {
      const h = Ht(c);
      if (ql(h)) {
        const f = i[c],
          m = (s[h] = ue(f) || me(f) ? { type: f } : Object.assign({}, f));
        if (m) {
          const P = jl(Boolean, m.type),
            A = jl(String, m.type);
          (m[0] = P > -1),
            (m[1] = A < 0 || P < A),
            (P > -1 || ye(m, 'default')) && l.push(h);
        }
      }
    }
  const u = [s, l];
  return Me(e) && r.set(e, u), u;
}
function ql(e) {
  return e[0] !== '$';
}
function $l(e) {
  const t = e && e.toString().match(/^\s*function (\w+)/);
  return t ? t[1] : e === null ? 'null' : '';
}
function Vl(e, t) {
  return $l(e) === $l(t);
}
function jl(e, t) {
  return ue(t) ? t.findIndex((n) => Vl(n, e)) : me(t) && Vl(t, e) ? 0 : -1;
}
const Kc = (e) => e[0] === '_' || e === '$stable',
  ll = (e) => (ue(e) ? e.map(Ot) : [Ot(e)]),
  Sm = (e, t, n) => {
    if (t._n) return t;
    const r = rt((...o) => ll(t(...o)), n);
    return (r._c = !1), r;
  },
  Qc = (e, t, n) => {
    const r = e._ctx;
    for (const o in e) {
      if (Kc(o)) continue;
      const i = e[o];
      if (me(i)) t[o] = Sm(o, i, r);
      else if (i != null) {
        const s = ll(i);
        t[o] = () => s;
      }
    }
  },
  Xc = (e, t) => {
    const n = ll(t);
    e.slots.default = () => n;
  },
  Lm = (e, t) => {
    if (e.vnode.shapeFlag & 32) {
      const n = t._;
      n ? ((e.slots = ge(t)), Po(t, '_', n)) : Qc(t, (e.slots = {}));
    } else (e.slots = {}), t && Xc(e, t);
    Po(e.slots, ti, 1);
  },
  Mm = (e, t, n) => {
    const { vnode: r, slots: o } = e;
    let i = !0,
      s = Le;
    if (r.shapeFlag & 32) {
      const l = t._;
      l
        ? n && l === 1
          ? (i = !1)
          : (Xe(o, t), !n && l === 1 && delete o._)
        : ((i = !t.$stable), Qc(t, o)),
        (s = t);
    } else t && (Xc(e, t), (s = { default: 1 }));
    if (i) for (const l in o) !Kc(l) && !(l in s) && delete o[l];
  };
function Yc() {
  return {
    app: null,
    config: {
      isNativeTag: ih,
      performance: !1,
      globalProperties: {},
      optionMergeStrategies: {},
      errorHandler: void 0,
      warnHandler: void 0,
      compilerOptions: {},
    },
    mixins: [],
    components: {},
    directives: {},
    provides: Object.create(null),
    optionsCache: new WeakMap(),
    propsCache: new WeakMap(),
    emitsCache: new WeakMap(),
  };
}
let Am = 0;
function Tm(e, t) {
  return function (r, o = null) {
    me(r) || (r = Object.assign({}, r)), o != null && !Me(o) && (o = null);
    const i = Yc(),
      s = new Set();
    let l = !1;
    const a = (i.app = {
      _uid: Am++,
      _component: r,
      _props: o,
      _container: null,
      _context: i,
      _instance: null,
      version: Zm,
      get config() {
        return i.config;
      },
      set config(u) {},
      use(u, ...c) {
        return (
          s.has(u) ||
            (u && me(u.install)
              ? (s.add(u), u.install(a, ...c))
              : me(u) && (s.add(u), u(a, ...c))),
          a
        );
      },
      mixin(u) {
        return i.mixins.includes(u) || i.mixins.push(u), a;
      },
      component(u, c) {
        return c ? ((i.components[u] = c), a) : i.components[u];
      },
      directive(u, c) {
        return c ? ((i.directives[u] = c), a) : i.directives[u];
      },
      mount(u, c, h) {
        if (!l) {
          const f = ke(r, o);
          return (
            (f.appContext = i),
            c && t ? t(f, u) : e(f, u, h),
            (l = !0),
            (a._container = u),
            (u.__vue_app__ = a),
            ni(f.component) || f.component.proxy
          );
        }
      },
      unmount() {
        l && (e(null, a._container), delete a._container.__vue_app__);
      },
      provide(u, c) {
        return (i.provides[u] = c), a;
      },
    });
    return a;
  };
}
function os(e, t, n, r, o = !1) {
  if (ue(e)) {
    e.forEach((f, m) => os(f, t && (ue(t) ? t[m] : t), n, r, o));
    return;
  }
  if (Sr(r) && !o) return;
  const i = r.shapeFlag & 4 ? ni(r.component) || r.component.proxy : r.el,
    s = o ? null : i,
    { i: l, r: a } = e,
    u = t && t.r,
    c = l.refs === Le ? (l.refs = {}) : l.refs,
    h = l.setupState;
  if (
    (u != null &&
      u !== a &&
      (Re(u)
        ? ((c[u] = null), ye(h, u) && (h[u] = null))
        : Ae(u) && (u.value = null)),
    me(a))
  )
    ln(a, l, 12, [s, c]);
  else {
    const f = Re(a),
      m = Ae(a);
    if (f || m) {
      const P = () => {
        if (e.f) {
          const A = f ? (ye(h, a) ? h[a] : c[a]) : a.value;
          o
            ? ue(A) && Us(A, i)
            : ue(A)
            ? A.includes(i) || A.push(i)
            : f
            ? ((c[a] = [i]), ye(h, a) && (h[a] = c[a]))
            : ((a.value = [i]), e.k && (c[e.k] = a.value));
        } else
          f
            ? ((c[a] = s), ye(h, a) && (h[a] = s))
            : m && ((a.value = s), e.k && (c[e.k] = s));
      };
      s ? ((P.id = -1), je(P, n)) : P();
    }
  }
}
const je = lm;
function Om(e) {
  return Rm(e);
}
function Rm(e, t) {
  const n = fh();
  n.__VUE__ = !0;
  const {
      insert: r,
      remove: o,
      patchProp: i,
      createElement: s,
      createText: l,
      createComment: a,
      setText: u,
      setElementText: c,
      parentNode: h,
      nextSibling: f,
      setScopeId: m = xt,
      insertStaticContent: P,
    } = e,
    A = (
      C,
      d,
      b,
      M = null,
      I = null,
      U = null,
      Q = !1,
      F = null,
      p = !!d.dynamicChildren
    ) => {
      if (C === d) return;
      C && !kn(C, d) && ((M = G(C)), ce(C, I, U, !0), (C = null)),
        d.patchFlag === -2 && ((p = !1), (d.dynamicChildren = null));
      const { type: _, ref: y, shapeFlag: x } = d;
      switch (_) {
        case Yr:
          O(C, d, b, M);
          break;
        case St:
          w(C, d, b, M);
          break;
        case yi:
          C == null && g(d, b, M, Q);
          break;
        case Ct:
          N(C, d, b, M, I, U, Q, F, p);
          break;
        default:
          x & 1
            ? S(C, d, b, M, I, U, Q, F, p)
            : x & 6
            ? Y(C, d, b, M, I, U, Q, F, p)
            : (x & 64 || x & 128) && _.process(C, d, b, M, I, U, Q, F, p, Z);
      }
      y != null && I && os(y, C && C.ref, U, d || C, !d);
    },
    O = (C, d, b, M) => {
      if (C == null) r((d.el = l(d.children)), b, M);
      else {
        const I = (d.el = C.el);
        d.children !== C.children && u(I, d.children);
      }
    },
    w = (C, d, b, M) => {
      C == null ? r((d.el = a(d.children || '')), b, M) : (d.el = C.el);
    },
    g = (C, d, b, M) => {
      [C.el, C.anchor] = P(C.children, d, b, M, C.el, C.anchor);
    },
    E = ({ el: C, anchor: d }, b, M) => {
      let I;
      for (; C && C !== d; ) (I = f(C)), r(C, b, M), (C = I);
      r(d, b, M);
    },
    k = ({ el: C, anchor: d }) => {
      let b;
      for (; C && C !== d; ) (b = f(C)), o(C), (C = b);
      o(d);
    },
    S = (C, d, b, M, I, U, Q, F, p) => {
      (Q = Q || d.type === 'svg'),
        C == null ? L(d, b, M, I, U, Q, F, p) : D(C, d, I, U, Q, F, p);
    },
    L = (C, d, b, M, I, U, Q, F) => {
      let p, _;
      const { type: y, props: x, shapeFlag: v, transition: B, dirs: X } = C;
      if (
        ((p = C.el = s(C.type, U, x && x.is, x)),
        v & 8
          ? c(p, C.children)
          : v & 16 &&
            R(C.children, p, null, M, I, U && y !== 'foreignObject', Q, F),
        X && gn(C, null, M, 'created'),
        x)
      ) {
        for (const ie in x)
          ie !== 'value' &&
            !bo(ie) &&
            i(p, ie, null, x[ie], U, C.children, M, I, ne);
        'value' in x && i(p, 'value', null, x.value),
          (_ = x.onVnodeBeforeMount) && vt(_, M, C);
      }
      T(p, C, C.scopeId, Q, M), X && gn(C, null, M, 'beforeMount');
      const K = (!I || (I && !I.pendingBranch)) && B && !B.persisted;
      K && B.beforeEnter(p),
        r(p, d, b),
        ((_ = x && x.onVnodeMounted) || K || X) &&
          je(() => {
            _ && vt(_, M, C), K && B.enter(p), X && gn(C, null, M, 'mounted');
          }, I);
    },
    T = (C, d, b, M, I) => {
      if ((b && m(C, b), M)) for (let U = 0; U < M.length; U++) m(C, M[U]);
      if (I) {
        let U = I.subTree;
        if (d === U) {
          const Q = I.vnode;
          T(C, Q, Q.scopeId, Q.slotScopeIds, I.parent);
        }
      }
    },
    R = (C, d, b, M, I, U, Q, F, p = 0) => {
      for (let _ = p; _ < C.length; _++) {
        const y = (C[_] = F ? en(C[_]) : Ot(C[_]));
        A(null, y, d, b, M, I, U, Q, F);
      }
    },
    D = (C, d, b, M, I, U, Q) => {
      const F = (d.el = C.el);
      let { patchFlag: p, dynamicChildren: _, dirs: y } = d;
      p |= C.patchFlag & 16;
      const x = C.props || Le,
        v = d.props || Le;
      let B;
      b && vn(b, !1),
        (B = v.onVnodeBeforeUpdate) && vt(B, b, d, C),
        y && gn(d, C, b, 'beforeUpdate'),
        b && vn(b, !0);
      const X = I && d.type !== 'foreignObject';
      if (
        (_
          ? z(C.dynamicChildren, _, F, b, M, X, U)
          : Q || ee(C, d, F, null, b, M, X, U, !1),
        p > 0)
      ) {
        if (p & 16) j(F, d, x, v, b, M, I);
        else if (
          (p & 2 && x.class !== v.class && i(F, 'class', null, v.class, I),
          p & 4 && i(F, 'style', x.style, v.style, I),
          p & 8)
        ) {
          const K = d.dynamicProps;
          for (let ie = 0; ie < K.length; ie++) {
            const pe = K[ie],
              Ne = x[pe],
              Ye = v[pe];
            (Ye !== Ne || pe === 'value') &&
              i(F, pe, Ne, Ye, I, C.children, b, M, ne);
          }
        }
        p & 1 && C.children !== d.children && c(F, d.children);
      } else !Q && _ == null && j(F, d, x, v, b, M, I);
      ((B = v.onVnodeUpdated) || y) &&
        je(() => {
          B && vt(B, b, d, C), y && gn(d, C, b, 'updated');
        }, M);
    },
    z = (C, d, b, M, I, U, Q) => {
      for (let F = 0; F < d.length; F++) {
        const p = C[F],
          _ = d[F],
          y =
            p.el && (p.type === Ct || !kn(p, _) || p.shapeFlag & 70)
              ? h(p.el)
              : b;
        A(p, _, y, null, M, I, U, Q, !0);
      }
    },
    j = (C, d, b, M, I, U, Q) => {
      if (b !== M) {
        if (b !== Le)
          for (const F in b)
            !bo(F) && !(F in M) && i(C, F, b[F], null, Q, d.children, I, U, ne);
        for (const F in M) {
          if (bo(F)) continue;
          const p = M[F],
            _ = b[F];
          p !== _ && F !== 'value' && i(C, F, _, p, Q, d.children, I, U, ne);
        }
        'value' in M && i(C, 'value', b.value, M.value);
      }
    },
    N = (C, d, b, M, I, U, Q, F, p) => {
      const _ = (d.el = C ? C.el : l('')),
        y = (d.anchor = C ? C.anchor : l(''));
      let { patchFlag: x, dynamicChildren: v, slotScopeIds: B } = d;
      B && (F = F ? F.concat(B) : B),
        C == null
          ? (r(_, b, M), r(y, b, M), R(d.children, b, y, I, U, Q, F, p))
          : x > 0 && x & 64 && v && C.dynamicChildren
          ? (z(C.dynamicChildren, v, b, I, U, Q, F),
            (d.key != null || (I && d === I.subTree)) && al(C, d, !0))
          : ee(C, d, b, y, I, U, Q, F, p);
    },
    Y = (C, d, b, M, I, U, Q, F, p) => {
      (d.slotScopeIds = F),
        C == null
          ? d.shapeFlag & 512
            ? I.ctx.activate(d, b, M, Q, p)
            : $(d, b, M, I, U, Q, p)
          : re(C, d, p);
    },
    $ = (C, d, b, M, I, U, Q) => {
      const F = (C.component = Um(C, M, I));
      if ((Zo(C) && (F.ctx.renderer = Z), Wm(F), F.asyncDep)) {
        if ((I && I.registerDep(F, se), !C.el)) {
          const p = (F.subTree = ke(St));
          w(null, p, d, b);
        }
        return;
      }
      se(F, C, d, b, I, U, Q);
    },
    re = (C, d, b) => {
      const M = (d.component = C.component);
      if (im(C, d, b))
        if (M.asyncDep && !M.asyncResolved) {
          V(M, d, b);
          return;
        } else (M.next = d), Yh(M.update), M.update();
      else (d.el = C.el), (M.vnode = d);
    },
    se = (C, d, b, M, I, U, Q) => {
      const F = () => {
          if (C.isMounted) {
            let { next: y, bu: x, u: v, parent: B, vnode: X } = C,
              K = y,
              ie;
            vn(C, !1),
              y ? ((y.el = X.el), V(C, y, Q)) : (y = X),
              x && xr(x),
              (ie = y.props && y.props.onVnodeBeforeUpdate) && vt(ie, B, y, X),
              vn(C, !0);
            const pe = mi(C),
              Ne = C.subTree;
            (C.subTree = pe),
              A(Ne, pe, h(Ne.el), G(Ne), C, I, U),
              (y.el = pe.el),
              K === null && sm(C, pe.el),
              v && je(v, I),
              (ie = y.props && y.props.onVnodeUpdated) &&
                je(() => vt(ie, B, y, X), I);
          } else {
            let y;
            const { el: x, props: v } = d,
              { bm: B, m: X, parent: K } = C,
              ie = Sr(d);
            if (
              (vn(C, !1),
              B && xr(B),
              !ie && (y = v && v.onVnodeBeforeMount) && vt(y, K, d),
              vn(C, !0),
              x && le)
            ) {
              const pe = () => {
                (C.subTree = mi(C)), le(x, C.subTree, C, I, null);
              };
              ie
                ? d.type.__asyncLoader().then(() => !C.isUnmounted && pe())
                : pe();
            } else {
              const pe = (C.subTree = mi(C));
              A(null, pe, b, M, C, I, U), (d.el = pe.el);
            }
            if ((X && je(X, I), !ie && (y = v && v.onVnodeMounted))) {
              const pe = d;
              je(() => vt(y, K, pe), I);
            }
            (d.shapeFlag & 256 ||
              (K && Sr(K.vnode) && K.vnode.shapeFlag & 256)) &&
              C.a &&
              je(C.a, I),
              (C.isMounted = !0),
              (d = b = M = null);
          }
        },
        p = (C.effect = new Ys(F, () => ol(_), C.scope)),
        _ = (C.update = () => p.run());
      (_.id = C.uid), vn(C, !0), _();
    },
    V = (C, d, b) => {
      d.component = C;
      const M = C.vnode.props;
      (C.vnode = d),
        (C.next = null),
        xm(C, d.props, M, b),
        Mm(C, d.children, b),
        lr(),
        Fl(),
        ar();
    },
    ee = (C, d, b, M, I, U, Q, F, p = !1) => {
      const _ = C && C.children,
        y = C ? C.shapeFlag : 0,
        x = d.children,
        { patchFlag: v, shapeFlag: B } = d;
      if (v > 0) {
        if (v & 128) {
          be(_, x, b, M, I, U, Q, F, p);
          return;
        } else if (v & 256) {
          de(_, x, b, M, I, U, Q, F, p);
          return;
        }
      }
      B & 8
        ? (y & 16 && ne(_, I, U), x !== _ && c(b, x))
        : y & 16
        ? B & 16
          ? be(_, x, b, M, I, U, Q, F, p)
          : ne(_, I, U, !0)
        : (y & 8 && c(b, ''), B & 16 && R(x, b, M, I, U, Q, F, p));
    },
    de = (C, d, b, M, I, U, Q, F, p) => {
      (C = C || Wn), (d = d || Wn);
      const _ = C.length,
        y = d.length,
        x = Math.min(_, y);
      let v;
      for (v = 0; v < x; v++) {
        const B = (d[v] = p ? en(d[v]) : Ot(d[v]));
        A(C[v], B, b, null, I, U, Q, F, p);
      }
      _ > y ? ne(C, I, U, !0, !1, x) : R(d, b, M, I, U, Q, F, p, x);
    },
    be = (C, d, b, M, I, U, Q, F, p) => {
      let _ = 0;
      const y = d.length;
      let x = C.length - 1,
        v = y - 1;
      for (; _ <= x && _ <= v; ) {
        const B = C[_],
          X = (d[_] = p ? en(d[_]) : Ot(d[_]));
        if (kn(B, X)) A(B, X, b, null, I, U, Q, F, p);
        else break;
        _++;
      }
      for (; _ <= x && _ <= v; ) {
        const B = C[x],
          X = (d[v] = p ? en(d[v]) : Ot(d[v]));
        if (kn(B, X)) A(B, X, b, null, I, U, Q, F, p);
        else break;
        x--, v--;
      }
      if (_ > x) {
        if (_ <= v) {
          const B = v + 1,
            X = B < y ? d[B].el : M;
          for (; _ <= v; )
            A(null, (d[_] = p ? en(d[_]) : Ot(d[_])), b, X, I, U, Q, F, p), _++;
        }
      } else if (_ > v) for (; _ <= x; ) ce(C[_], I, U, !0), _++;
      else {
        const B = _,
          X = _,
          K = new Map();
        for (_ = X; _ <= v; _++) {
          const Je = (d[_] = p ? en(d[_]) : Ot(d[_]));
          Je.key != null && K.set(Je.key, _);
        }
        let ie,
          pe = 0;
        const Ne = v - X + 1;
        let Ye = !1,
          Gt = 0;
        const ht = new Array(Ne);
        for (_ = 0; _ < Ne; _++) ht[_] = 0;
        for (_ = B; _ <= x; _++) {
          const Je = C[_];
          if (pe >= Ne) {
            ce(Je, I, U, !0);
            continue;
          }
          let At;
          if (Je.key != null) At = K.get(Je.key);
          else
            for (ie = X; ie <= v; ie++)
              if (ht[ie - X] === 0 && kn(Je, d[ie])) {
                At = ie;
                break;
              }
          At === void 0
            ? ce(Je, I, U, !0)
            : ((ht[At - X] = _ + 1),
              At >= Gt ? (Gt = At) : (Ye = !0),
              A(Je, d[At], b, null, I, U, Q, F, p),
              pe++);
        }
        const dr = Ye ? Im(ht) : Wn;
        for (ie = dr.length - 1, _ = Ne - 1; _ >= 0; _--) {
          const Je = X + _,
            At = d[Je],
            Pl = Je + 1 < y ? d[Je + 1].el : M;
          ht[_] === 0
            ? A(null, At, b, Pl, I, U, Q, F, p)
            : Ye && (ie < 0 || _ !== dr[ie] ? J(At, b, Pl, 2) : ie--);
        }
      }
    },
    J = (C, d, b, M, I = null) => {
      const { el: U, type: Q, transition: F, children: p, shapeFlag: _ } = C;
      if (_ & 6) {
        J(C.component.subTree, d, b, M);
        return;
      }
      if (_ & 128) {
        C.suspense.move(d, b, M);
        return;
      }
      if (_ & 64) {
        Q.move(C, d, b, Z);
        return;
      }
      if (Q === Ct) {
        r(U, d, b);
        for (let x = 0; x < p.length; x++) J(p[x], d, b, M);
        r(C.anchor, d, b);
        return;
      }
      if (Q === yi) {
        E(C, d, b);
        return;
      }
      if (M !== 2 && _ & 1 && F)
        if (M === 0) F.beforeEnter(U), r(U, d, b), je(() => F.enter(U), I);
        else {
          const { leave: x, delayLeave: v, afterLeave: B } = F,
            X = () => r(U, d, b),
            K = () => {
              x(U, () => {
                X(), B && B();
              });
            };
          v ? v(U, X, K) : K();
        }
      else r(U, d, b);
    },
    ce = (C, d, b, M = !1, I = !1) => {
      const {
        type: U,
        props: Q,
        ref: F,
        children: p,
        dynamicChildren: _,
        shapeFlag: y,
        patchFlag: x,
        dirs: v,
      } = C;
      if ((F != null && os(F, null, b, C, !0), y & 256)) {
        d.ctx.deactivate(C);
        return;
      }
      const B = y & 1 && v,
        X = !Sr(C);
      let K;
      if ((X && (K = Q && Q.onVnodeBeforeUnmount) && vt(K, d, C), y & 6))
        W(C.component, b, M);
      else {
        if (y & 128) {
          C.suspense.unmount(b, M);
          return;
        }
        B && gn(C, null, d, 'beforeUnmount'),
          y & 64
            ? C.type.remove(C, d, b, I, Z, M)
            : _ && (U !== Ct || (x > 0 && x & 64))
            ? ne(_, d, b, !1, !0)
            : ((U === Ct && x & 384) || (!I && y & 16)) && ne(p, d, b),
          M && ve(C);
      }
      ((X && (K = Q && Q.onVnodeUnmounted)) || B) &&
        je(() => {
          K && vt(K, d, C), B && gn(C, null, d, 'unmounted');
        }, b);
    },
    ve = (C) => {
      const { type: d, el: b, anchor: M, transition: I } = C;
      if (d === Ct) {
        Pe(b, M);
        return;
      }
      if (d === yi) {
        k(C);
        return;
      }
      const U = () => {
        o(b), I && !I.persisted && I.afterLeave && I.afterLeave();
      };
      if (C.shapeFlag & 1 && I && !I.persisted) {
        const { leave: Q, delayLeave: F } = I,
          p = () => Q(b, U);
        F ? F(C.el, U, p) : p();
      } else U();
    },
    Pe = (C, d) => {
      let b;
      for (; C !== d; ) (b = f(C)), o(C), (C = b);
      o(d);
    },
    W = (C, d, b) => {
      const { bum: M, scope: I, update: U, subTree: Q, um: F } = C;
      M && xr(M),
        I.stop(),
        U && ((U.active = !1), ce(Q, C, d, b)),
        F && je(F, d),
        je(() => {
          C.isUnmounted = !0;
        }, d),
        d &&
          d.pendingBranch &&
          !d.isUnmounted &&
          C.asyncDep &&
          !C.asyncResolved &&
          C.suspenseId === d.pendingId &&
          (d.deps--, d.deps === 0 && d.resolve());
    },
    ne = (C, d, b, M = !1, I = !1, U = 0) => {
      for (let Q = U; Q < C.length; Q++) ce(C[Q], d, b, M, I);
    },
    G = (C) =>
      C.shapeFlag & 6
        ? G(C.component.subTree)
        : C.shapeFlag & 128
        ? C.suspense.next()
        : f(C.anchor || C.el),
    te = (C, d, b) => {
      C == null
        ? d._vnode && ce(d._vnode, null, null, !0)
        : A(d._vnode || null, C, d, null, null, null, b),
        Fl(),
        Tc(),
        (d._vnode = C);
    },
    Z = { p: A, um: ce, m: J, r: ve, mt: $, mc: R, pc: ee, pbc: z, n: G, o: e };
  let he, le;
  return (
    t && ([he, le] = t(Z)), { render: te, hydrate: he, createApp: Tm(te, he) }
  );
}
function vn({ effect: e, update: t }, n) {
  e.allowRecurse = t.allowRecurse = n;
}
function al(e, t, n = !1) {
  const r = e.children,
    o = t.children;
  if (ue(r) && ue(o))
    for (let i = 0; i < r.length; i++) {
      const s = r[i];
      let l = o[i];
      l.shapeFlag & 1 &&
        !l.dynamicChildren &&
        ((l.patchFlag <= 0 || l.patchFlag === 32) &&
          ((l = o[i] = en(o[i])), (l.el = s.el)),
        n || al(s, l)),
        l.type === Yr && (l.el = s.el);
    }
}
function Im(e) {
  const t = e.slice(),
    n = [0];
  let r, o, i, s, l;
  const a = e.length;
  for (r = 0; r < a; r++) {
    const u = e[r];
    if (u !== 0) {
      if (((o = n[n.length - 1]), e[o] < u)) {
        (t[r] = o), n.push(r);
        continue;
      }
      for (i = 0, s = n.length - 1; i < s; )
        (l = (i + s) >> 1), e[n[l]] < u ? (i = l + 1) : (s = l);
      u < e[n[i]] && (i > 0 && (t[r] = n[i - 1]), (n[i] = r));
    }
  }
  for (i = n.length, s = n[i - 1]; i-- > 0; ) (n[i] = s), (s = t[s]);
  return n;
}
const Fm = (e) => e.__isTeleport,
  Mr = (e) => e && (e.disabled || e.disabled === ''),
  Ul = (e) => typeof SVGElement != 'undefined' && e instanceof SVGElement,
  is = (e, t) => {
    const n = e && e.to;
    return Re(n) ? (t ? t(n) : null) : n;
  },
  Hm = {
    __isTeleport: !0,
    process(e, t, n, r, o, i, s, l, a, u) {
      const {
          mc: c,
          pc: h,
          pbc: f,
          o: { insert: m, querySelector: P, createText: A, createComment: O },
        } = u,
        w = Mr(t.props);
      let { shapeFlag: g, children: E, dynamicChildren: k } = t;
      if (e == null) {
        const S = (t.el = A('')),
          L = (t.anchor = A(''));
        m(S, n, r), m(L, n, r);
        const T = (t.target = is(t.props, P)),
          R = (t.targetAnchor = A(''));
        T && (m(R, T), (s = s || Ul(T)));
        const D = (z, j) => {
          g & 16 && c(E, z, j, o, i, s, l, a);
        };
        w ? D(n, L) : T && D(T, R);
      } else {
        t.el = e.el;
        const S = (t.anchor = e.anchor),
          L = (t.target = e.target),
          T = (t.targetAnchor = e.targetAnchor),
          R = Mr(e.props),
          D = R ? n : L,
          z = R ? S : T;
        if (
          ((s = s || Ul(L)),
          k
            ? (f(e.dynamicChildren, k, D, o, i, s, l), al(e, t, !0))
            : a || h(e, t, D, z, o, i, s, l, !1),
          w)
        )
          R || lo(t, n, S, u, 1);
        else if ((t.props && t.props.to) !== (e.props && e.props.to)) {
          const j = (t.target = is(t.props, P));
          j && lo(t, j, null, u, 0);
        } else R && lo(t, L, T, u, 1);
      }
      Jc(t);
    },
    remove(e, t, n, r, { um: o, o: { remove: i } }, s) {
      const {
        shapeFlag: l,
        children: a,
        anchor: u,
        targetAnchor: c,
        target: h,
        props: f,
      } = e;
      if ((h && i(c), (s || !Mr(f)) && (i(u), l & 16)))
        for (let m = 0; m < a.length; m++) {
          const P = a[m];
          o(P, t, n, !0, !!P.dynamicChildren);
        }
    },
    move: lo,
    hydrate: Dm,
  };
function lo(e, t, n, { o: { insert: r }, m: o }, i = 2) {
  i === 0 && r(e.targetAnchor, t, n);
  const { el: s, anchor: l, shapeFlag: a, children: u, props: c } = e,
    h = i === 2;
  if ((h && r(s, t, n), (!h || Mr(c)) && a & 16))
    for (let f = 0; f < u.length; f++) o(u[f], t, n, 2);
  h && r(l, t, n);
}
function Dm(
  e,
  t,
  n,
  r,
  o,
  i,
  { o: { nextSibling: s, parentNode: l, querySelector: a } },
  u
) {
  const c = (t.target = is(t.props, a));
  if (c) {
    const h = c._lpa || c.firstChild;
    if (t.shapeFlag & 16)
      if (Mr(t.props))
        (t.anchor = u(s(e), t, l(e), n, r, o, i)), (t.targetAnchor = h);
      else {
        t.anchor = s(e);
        let f = h;
        for (; f; )
          if (
            ((f = s(f)), f && f.nodeType === 8 && f.data === 'teleport anchor')
          ) {
            (t.targetAnchor = f),
              (c._lpa = t.targetAnchor && s(t.targetAnchor));
            break;
          }
        u(h, t, c, n, r, o, i);
      }
    Jc(t);
  }
  return t.anchor && s(t.anchor);
}
const Nm = Hm;
function Jc(e) {
  const t = e.ctx;
  if (t && t.ut) {
    let n = e.children[0].el;
    for (; n !== e.targetAnchor; )
      n.nodeType === 1 && n.setAttribute('data-v-owner', t.uid),
        (n = n.nextSibling);
    t.ut();
  }
}
const Ct = Symbol(void 0),
  Yr = Symbol(void 0),
  St = Symbol(void 0),
  yi = Symbol(void 0),
  Ar = [];
let Pt = null;
function Tr(e = !1) {
  Ar.push((Pt = e ? null : []));
}
function Bm() {
  Ar.pop(), (Pt = Ar[Ar.length - 1] || null);
}
let Vr = 1;
function Wl(e) {
  Vr += e;
}
function Zc(e) {
  return (
    (e.dynamicChildren = Vr > 0 ? Pt || Wn : null),
    Bm(),
    Vr > 0 && Pt && Pt.push(e),
    e
  );
}
function H_(e, t, n, r, o, i) {
  return Zc(An(e, t, n, r, o, i, !0));
}
function Or(e, t, n, r, o) {
  return Zc(ke(e, t, n, r, o, !0));
}
function To(e) {
  return e ? e.__v_isVNode === !0 : !1;
}
function kn(e, t) {
  return e.type === t.type && e.key === t.key;
}
const ti = '__vInternal',
  ef = ({ key: e }) => (e != null ? e : null),
  yo = ({ ref: e, ref_key: t, ref_for: n }) =>
    e != null
      ? Re(e) || Ae(e) || me(e)
        ? { i: ct, r: e, k: t, f: !!n }
        : e
      : null;
function An(
  e,
  t = null,
  n = null,
  r = 0,
  o = null,
  i = e === Ct ? 0 : 1,
  s = !1,
  l = !1
) {
  const a = {
    __v_isVNode: !0,
    __v_skip: !0,
    type: e,
    props: t,
    key: t && ef(t),
    ref: t && yo(t),
    scopeId: Jo,
    slotScopeIds: null,
    children: n,
    component: null,
    suspense: null,
    ssContent: null,
    ssFallback: null,
    dirs: null,
    transition: null,
    el: null,
    anchor: null,
    target: null,
    targetAnchor: null,
    staticCount: 0,
    shapeFlag: i,
    patchFlag: r,
    dynamicProps: o,
    dynamicChildren: null,
    appContext: null,
    ctx: ct,
  };
  return (
    l
      ? (ul(a, n), i & 128 && e.normalize(a))
      : n && (a.shapeFlag |= Re(n) ? 8 : 16),
    Vr > 0 &&
      !s &&
      Pt &&
      (a.patchFlag > 0 || i & 6) &&
      a.patchFlag !== 32 &&
      Pt.push(a),
    a
  );
}
const ke = zm;
function zm(e, t = null, n = null, r = 0, o = null, i = !1) {
  if (((!e || e === pm) && (e = St), To(e))) {
    const l = Ut(e, t, !0);
    return (
      n && ul(l, n),
      Vr > 0 &&
        !i &&
        Pt &&
        (l.shapeFlag & 6 ? (Pt[Pt.indexOf(e)] = l) : Pt.push(l)),
      (l.patchFlag |= -2),
      l
    );
  }
  if ((Xm(e) && (e = e.__vccOpts), t)) {
    t = qm(t);
    let { class: l, style: a } = t;
    l && !Re(l) && (t.class = Vs(l)),
      Me(a) && (Cc(a) && !ue(a) && (a = Xe({}, a)), (t.style = $s(a)));
  }
  const s = Re(e) ? 1 : Ic(e) ? 128 : Fm(e) ? 64 : Me(e) ? 4 : me(e) ? 2 : 0;
  return An(e, t, n, r, o, s, i, !0);
}
function qm(e) {
  return e ? (Cc(e) || ti in e ? Xe({}, e) : e) : null;
}
function Ut(e, t, n = !1) {
  const { props: r, ref: o, patchFlag: i, children: s } = e,
    l = t ? $m(r || {}, t) : r;
  return {
    __v_isVNode: !0,
    __v_skip: !0,
    type: e.type,
    props: l,
    key: l && ef(l),
    ref:
      t && t.ref
        ? n && o
          ? ue(o)
            ? o.concat(yo(t))
            : [o, yo(t)]
          : yo(t)
        : o,
    scopeId: e.scopeId,
    slotScopeIds: e.slotScopeIds,
    children: s,
    target: e.target,
    targetAnchor: e.targetAnchor,
    staticCount: e.staticCount,
    shapeFlag: e.shapeFlag,
    patchFlag: t && e.type !== Ct ? (i === -1 ? 16 : i | 16) : i,
    dynamicProps: e.dynamicProps,
    dynamicChildren: e.dynamicChildren,
    appContext: e.appContext,
    dirs: e.dirs,
    transition: e.transition,
    component: e.component,
    suspense: e.suspense,
    ssContent: e.ssContent && Ut(e.ssContent),
    ssFallback: e.ssFallback && Ut(e.ssFallback),
    el: e.el,
    anchor: e.anchor,
    ctx: e.ctx,
  };
}
function ss(e = ' ', t = 0) {
  return ke(Yr, null, e, t);
}
function D_(e = '', t = !1) {
  return t ? (Tr(), Or(St, null, e)) : ke(St, null, e);
}
function Ot(e) {
  return e == null || typeof e == 'boolean'
    ? ke(St)
    : ue(e)
    ? ke(Ct, null, e.slice())
    : typeof e == 'object'
    ? en(e)
    : ke(Yr, null, String(e));
}
function en(e) {
  return (e.el === null && e.patchFlag !== -1) || e.memo ? e : Ut(e);
}
function ul(e, t) {
  let n = 0;
  const { shapeFlag: r } = e;
  if (t == null) t = null;
  else if (ue(t)) n = 16;
  else if (typeof t == 'object')
    if (r & 65) {
      const o = t.default;
      o && (o._c && (o._d = !1), ul(e, o()), o._c && (o._d = !0));
      return;
    } else {
      n = 32;
      const o = t._;
      !o && !(ti in t)
        ? (t._ctx = ct)
        : o === 3 &&
          ct &&
          (ct.slots._ === 1 ? (t._ = 1) : ((t._ = 2), (e.patchFlag |= 1024)));
    }
  else
    me(t)
      ? ((t = { default: t, _ctx: ct }), (n = 32))
      : ((t = String(t)), r & 64 ? ((n = 16), (t = [ss(t)])) : (n = 8));
  (e.children = t), (e.shapeFlag |= n);
}
function $m(...e) {
  const t = {};
  for (let n = 0; n < e.length; n++) {
    const r = e[n];
    for (const o in r)
      if (o === 'class')
        t.class !== r.class && (t.class = Vs([t.class, r.class]));
      else if (o === 'style') t.style = $s([t.style, r.style]);
      else if (Uo(o)) {
        const i = t[o],
          s = r[o];
        s &&
          i !== s &&
          !(ue(i) && i.includes(s)) &&
          (t[o] = i ? [].concat(i, s) : s);
      } else o !== '' && (t[o] = r[o]);
  }
  return t;
}
function vt(e, t, n, r = null) {
  yt(e, t, 7, [n, r]);
}
const Vm = Yc();
let jm = 0;
function Um(e, t, n) {
  const r = e.type,
    o = (t ? t.appContext : e.appContext) || Vm,
    i = {
      uid: jm++,
      vnode: e,
      type: r,
      parent: t,
      appContext: o,
      root: null,
      next: null,
      subTree: null,
      effect: null,
      update: null,
      scope: new fc(!0),
      render: null,
      proxy: null,
      exposed: null,
      exposeProxy: null,
      withProxy: null,
      provides: t ? t.provides : Object.create(o.provides),
      accessCache: null,
      renderCache: [],
      components: null,
      directives: null,
      propsOptions: Gc(r, o),
      emitsOptions: Rc(r, o),
      emit: null,
      emitted: null,
      propsDefaults: Le,
      inheritAttrs: r.inheritAttrs,
      ctx: Le,
      data: Le,
      props: Le,
      attrs: Le,
      slots: Le,
      refs: Le,
      setupState: Le,
      setupContext: null,
      suspense: n,
      suspenseId: n ? n.pendingId : 0,
      asyncDep: null,
      asyncResolved: !1,
      isMounted: !1,
      isUnmounted: !1,
      isDeactivated: !1,
      bc: null,
      c: null,
      bm: null,
      m: null,
      bu: null,
      u: null,
      um: null,
      bum: null,
      da: null,
      a: null,
      rtg: null,
      rtc: null,
      ec: null,
      sp: null,
    };
  return (
    (i.ctx = { _: i }),
    (i.root = t ? t.root : i),
    (i.emit = em.bind(null, i)),
    e.ce && e.ce(i),
    i
  );
}
let qe = null;
const Ee = () => qe || ct,
  er = (e) => {
    (qe = e), e.scope.on();
  },
  Tn = () => {
    qe && qe.scope.off(), (qe = null);
  };
function tf(e) {
  return e.vnode.shapeFlag & 4;
}
let jr = !1;
function Wm(e, t = !1) {
  jr = t;
  const { props: n, children: r } = e.vnode,
    o = tf(e);
  Pm(e, n, o, t), Lm(e, r);
  const i = o ? Gm(e, t) : void 0;
  return (jr = !1), i;
}
function Gm(e, t) {
  const n = e.type;
  (e.accessCache = Object.create(null)), (e.proxy = jt(new Proxy(e.ctx, ym)));
  const { setup: r } = n;
  if (r) {
    const o = (e.setupContext = r.length > 1 ? Qm(e) : null);
    er(e), lr();
    const i = ln(r, e, 0, [e.props, o]);
    if ((ar(), Tn(), ac(i))) {
      if ((i.then(Tn, Tn), t))
        return i
          .then((s) => {
            Gl(e, s, t);
          })
          .catch((s) => {
            Xo(s, e, 0);
          });
      e.asyncDep = i;
    } else Gl(e, i, t);
  } else nf(e, t);
}
function Gl(e, t, n) {
  me(t)
    ? e.type.__ssrInlineRender
      ? (e.ssrRender = t)
      : (e.render = t)
    : Me(t) && (e.setupState = Sc(t)),
    nf(e, n);
}
let Kl;
function nf(e, t, n) {
  const r = e.type;
  if (!e.render) {
    if (!t && Kl && !r.render) {
      const o = r.template || sl(e).template;
      if (o) {
        const { isCustomElement: i, compilerOptions: s } = e.appContext.config,
          { delimiters: l, compilerOptions: a } = r,
          u = Xe(Xe({ isCustomElement: i, delimiters: l }, s), a);
        r.render = Kl(o, u);
      }
    }
    e.render = r.render || xt;
  }
  er(e), lr(), _m(e), ar(), Tn();
}
function Km(e) {
  return new Proxy(e.attrs, {
    get(t, n) {
      return ft(e, 'get', '$attrs'), t[n];
    },
  });
}
function Qm(e) {
  const t = (r) => {
    e.exposed = r || {};
  };
  let n;
  return {
    get attrs() {
      return n || (n = Km(e));
    },
    slots: e.slots,
    emit: e.emit,
    expose: t,
  };
}
function ni(e) {
  if (e.exposed)
    return (
      e.exposeProxy ||
      (e.exposeProxy = new Proxy(Sc(jt(e.exposed)), {
        get(t, n) {
          if (n in t) return t[n];
          if (n in Lr) return Lr[n](e);
        },
        has(t, n) {
          return n in t || n in Lr;
        },
      }))
    );
}
function ls(e, t = !0) {
  return me(e) ? e.displayName || e.name : e.name || (t && e.__name);
}
function Xm(e) {
  return me(e) && '__vccOpts' in e;
}
const H = (e, t) => Kh(e, t, jr);
function q(e, t, n) {
  const r = arguments.length;
  return r === 2
    ? Me(t) && !ue(t)
      ? To(t)
        ? ke(e, null, [t])
        : ke(e, t)
      : ke(e, null, t)
    : (r > 3
        ? (n = Array.prototype.slice.call(arguments, 2))
        : r === 3 && To(n) && (n = [n]),
      ke(e, t, n));
}
const Ym = Symbol(''),
  Jm = () => Qe(Ym),
  Zm = '3.2.45',
  eg = 'http://www.w3.org/2000/svg',
  Pn = typeof document != 'undefined' ? document : null,
  Ql = Pn && Pn.createElement('template'),
  tg = {
    insert: (e, t, n) => {
      t.insertBefore(e, n || null);
    },
    remove: (e) => {
      const t = e.parentNode;
      t && t.removeChild(e);
    },
    createElement: (e, t, n, r) => {
      const o = t
        ? Pn.createElementNS(eg, e)
        : Pn.createElement(e, n ? { is: n } : void 0);
      return (
        e === 'select' &&
          r &&
          r.multiple != null &&
          o.setAttribute('multiple', r.multiple),
        o
      );
    },
    createText: (e) => Pn.createTextNode(e),
    createComment: (e) => Pn.createComment(e),
    setText: (e, t) => {
      e.nodeValue = t;
    },
    setElementText: (e, t) => {
      e.textContent = t;
    },
    parentNode: (e) => e.parentNode,
    nextSibling: (e) => e.nextSibling,
    querySelector: (e) => Pn.querySelector(e),
    setScopeId(e, t) {
      e.setAttribute(t, '');
    },
    insertStaticContent(e, t, n, r, o, i) {
      const s = n ? n.previousSibling : t.lastChild;
      if (o && (o === i || o.nextSibling))
        for (
          ;
          t.insertBefore(o.cloneNode(!0), n),
            !(o === i || !(o = o.nextSibling));

        );
      else {
        Ql.innerHTML = r ? `<svg>${e}</svg>` : e;
        const l = Ql.content;
        if (r) {
          const a = l.firstChild;
          for (; a.firstChild; ) l.appendChild(a.firstChild);
          l.removeChild(a);
        }
        t.insertBefore(l, n);
      }
      return [
        s ? s.nextSibling : t.firstChild,
        n ? n.previousSibling : t.lastChild,
      ];
    },
  };
function ng(e, t, n) {
  const r = e._vtc;
  r && (t = (t ? [t, ...r] : [...r]).join(' ')),
    t == null
      ? e.removeAttribute('class')
      : n
      ? e.setAttribute('class', t)
      : (e.className = t);
}
function rg(e, t, n) {
  const r = e.style,
    o = Re(n);
  if (n && !o) {
    for (const i in n) as(r, i, n[i]);
    if (t && !Re(t)) for (const i in t) n[i] == null && as(r, i, '');
  } else {
    const i = r.display;
    o ? t !== n && (r.cssText = n) : t && e.removeAttribute('style'),
      '_vod' in e && (r.display = i);
  }
}
const Xl = /\s*!important$/;
function as(e, t, n) {
  if (ue(n)) n.forEach((r) => as(e, t, r));
  else if ((n == null && (n = ''), t.startsWith('--'))) e.setProperty(t, n);
  else {
    const r = og(e, t);
    Xl.test(n)
      ? e.setProperty(sr(r), n.replace(Xl, ''), 'important')
      : (e[r] = n);
  }
}
const Yl = ['Webkit', 'Moz', 'ms'],
  _i = {};
function og(e, t) {
  const n = _i[t];
  if (n) return n;
  let r = Ht(t);
  if (r !== 'filter' && r in e) return (_i[t] = r);
  r = Ko(r);
  for (let o = 0; o < Yl.length; o++) {
    const i = Yl[o] + r;
    if (i in e) return (_i[t] = i);
  }
  return t;
}
const Jl = 'http://www.w3.org/1999/xlink';
function ig(e, t, n, r, o) {
  if (r && t.startsWith('xlink:'))
    n == null
      ? e.removeAttributeNS(Jl, t.slice(6, t.length))
      : e.setAttributeNS(Jl, t, n);
  else {
    const i = rh(t);
    n == null || (i && !ic(n))
      ? e.removeAttribute(t)
      : e.setAttribute(t, i ? '' : n);
  }
}
function sg(e, t, n, r, o, i, s) {
  if (t === 'innerHTML' || t === 'textContent') {
    r && s(r, o, i), (e[t] = n == null ? '' : n);
    return;
  }
  if (t === 'value' && e.tagName !== 'PROGRESS' && !e.tagName.includes('-')) {
    e._value = n;
    const a = n == null ? '' : n;
    (e.value !== a || e.tagName === 'OPTION') && (e.value = a),
      n == null && e.removeAttribute(t);
    return;
  }
  let l = !1;
  if (n === '' || n == null) {
    const a = typeof e[t];
    a === 'boolean'
      ? (n = ic(n))
      : n == null && a === 'string'
      ? ((n = ''), (l = !0))
      : a === 'number' && ((n = 0), (l = !0));
  }
  try {
    e[t] = n;
  } catch {}
  l && e.removeAttribute(t);
}
function lg(e, t, n, r) {
  e.addEventListener(t, n, r);
}
function ag(e, t, n, r) {
  e.removeEventListener(t, n, r);
}
function ug(e, t, n, r, o = null) {
  const i = e._vei || (e._vei = {}),
    s = i[t];
  if (r && s) s.value = r;
  else {
    const [l, a] = cg(t);
    if (r) {
      const u = (i[t] = hg(r, o));
      lg(e, l, u, a);
    } else s && (ag(e, l, s, a), (i[t] = void 0));
  }
}
const Zl = /(?:Once|Passive|Capture)$/;
function cg(e) {
  let t;
  if (Zl.test(e)) {
    t = {};
    let r;
    for (; (r = e.match(Zl)); )
      (e = e.slice(0, e.length - r[0].length)), (t[r[0].toLowerCase()] = !0);
  }
  return [e[2] === ':' ? e.slice(3) : sr(e.slice(2)), t];
}
let Ei = 0;
const fg = Promise.resolve(),
  dg = () => Ei || (fg.then(() => (Ei = 0)), (Ei = Date.now()));
function hg(e, t) {
  const n = (r) => {
    if (!r._vts) r._vts = Date.now();
    else if (r._vts <= n.attached) return;
    yt(mg(r, n.value), t, 5, [r]);
  };
  return (n.value = e), (n.attached = dg()), n;
}
function mg(e, t) {
  if (ue(t)) {
    const n = e.stopImmediatePropagation;
    return (
      (e.stopImmediatePropagation = () => {
        n.call(e), (e._stopped = !0);
      }),
      t.map((r) => (o) => !o._stopped && r && r(o))
    );
  } else return t;
}
const ea = /^on[a-z]/,
  gg = (e, t, n, r, o = !1, i, s, l, a) => {
    t === 'class'
      ? ng(e, r, o)
      : t === 'style'
      ? rg(e, n, r)
      : Uo(t)
      ? js(t) || ug(e, t, n, r, s)
      : (
          t[0] === '.'
            ? ((t = t.slice(1)), !0)
            : t[0] === '^'
            ? ((t = t.slice(1)), !1)
            : vg(e, t, r, o)
        )
      ? sg(e, t, r, i, s, l, a)
      : (t === 'true-value'
          ? (e._trueValue = r)
          : t === 'false-value' && (e._falseValue = r),
        ig(e, t, r, o));
  };
function vg(e, t, n, r) {
  return r
    ? !!(
        t === 'innerHTML' ||
        t === 'textContent' ||
        (t in e && ea.test(t) && me(n))
      )
    : t === 'spellcheck' ||
      t === 'draggable' ||
      t === 'translate' ||
      t === 'form' ||
      (t === 'list' && e.tagName === 'INPUT') ||
      (t === 'type' && e.tagName === 'TEXTAREA') ||
      (ea.test(t) && Re(n))
    ? !1
    : t in e;
}
const Qt = 'transition',
  mr = 'animation',
  un = (e, { slots: t }) => q(Dc, pg(e), t);
un.displayName = 'Transition';
const rf = {
  name: String,
  type: String,
  css: { type: Boolean, default: !0 },
  duration: [String, Number, Object],
  enterFromClass: String,
  enterActiveClass: String,
  enterToClass: String,
  appearFromClass: String,
  appearActiveClass: String,
  appearToClass: String,
  leaveFromClass: String,
  leaveActiveClass: String,
  leaveToClass: String,
};
un.props = Xe({}, Dc.props, rf);
const pn = (e, t = []) => {
    ue(e) ? e.forEach((n) => n(...t)) : e && e(...t);
  },
  ta = (e) => (e ? (ue(e) ? e.some((t) => t.length > 1) : e.length > 1) : !1);
function pg(e) {
  const t = {};
  for (const N in e) N in rf || (t[N] = e[N]);
  if (e.css === !1) return t;
  const {
      name: n = 'v',
      type: r,
      duration: o,
      enterFromClass: i = `${n}-enter-from`,
      enterActiveClass: s = `${n}-enter-active`,
      enterToClass: l = `${n}-enter-to`,
      appearFromClass: a = i,
      appearActiveClass: u = s,
      appearToClass: c = l,
      leaveFromClass: h = `${n}-leave-from`,
      leaveActiveClass: f = `${n}-leave-active`,
      leaveToClass: m = `${n}-leave-to`,
    } = e,
    P = bg(o),
    A = P && P[0],
    O = P && P[1],
    {
      onBeforeEnter: w,
      onEnter: g,
      onEnterCancelled: E,
      onLeave: k,
      onLeaveCancelled: S,
      onBeforeAppear: L = w,
      onAppear: T = g,
      onAppearCancelled: R = E,
    } = t,
    D = (N, Y, $) => {
      bn(N, Y ? c : l), bn(N, Y ? u : s), $ && $();
    },
    z = (N, Y) => {
      (N._isLeaving = !1), bn(N, h), bn(N, m), bn(N, f), Y && Y();
    },
    j = (N) => (Y, $) => {
      const re = N ? T : g,
        se = () => D(Y, N, $);
      pn(re, [Y, se]),
        na(() => {
          bn(Y, N ? a : i), Xt(Y, N ? c : l), ta(re) || ra(Y, r, A, se);
        });
    };
  return Xe(t, {
    onBeforeEnter(N) {
      pn(w, [N]), Xt(N, i), Xt(N, s);
    },
    onBeforeAppear(N) {
      pn(L, [N]), Xt(N, a), Xt(N, u);
    },
    onEnter: j(!1),
    onAppear: j(!0),
    onLeave(N, Y) {
      N._isLeaving = !0;
      const $ = () => z(N, Y);
      Xt(N, h),
        Eg(),
        Xt(N, f),
        na(() => {
          !N._isLeaving || (bn(N, h), Xt(N, m), ta(k) || ra(N, r, O, $));
        }),
        pn(k, [N, $]);
    },
    onEnterCancelled(N) {
      D(N, !1), pn(E, [N]);
    },
    onAppearCancelled(N) {
      D(N, !0), pn(R, [N]);
    },
    onLeaveCancelled(N) {
      z(N), pn(S, [N]);
    },
  });
}
function bg(e) {
  if (e == null) return null;
  if (Me(e)) return [wi(e.enter), wi(e.leave)];
  {
    const t = wi(e);
    return [t, t];
  }
}
function wi(e) {
  return Ks(e);
}
function Xt(e, t) {
  t.split(/\s+/).forEach((n) => n && e.classList.add(n)),
    (e._vtc || (e._vtc = new Set())).add(t);
}
function bn(e, t) {
  t.split(/\s+/).forEach((r) => r && e.classList.remove(r));
  const { _vtc: n } = e;
  n && (n.delete(t), n.size || (e._vtc = void 0));
}
function na(e) {
  requestAnimationFrame(() => {
    requestAnimationFrame(e);
  });
}
let yg = 0;
function ra(e, t, n, r) {
  const o = (e._endId = ++yg),
    i = () => {
      o === e._endId && r();
    };
  if (n) return setTimeout(i, n);
  const { type: s, timeout: l, propCount: a } = _g(e, t);
  if (!s) return r();
  const u = s + 'end';
  let c = 0;
  const h = () => {
      e.removeEventListener(u, f), i();
    },
    f = (m) => {
      m.target === e && ++c >= a && h();
    };
  setTimeout(() => {
    c < a && h();
  }, l + 1),
    e.addEventListener(u, f);
}
function _g(e, t) {
  const n = window.getComputedStyle(e),
    r = (P) => (n[P] || '').split(', '),
    o = r(`${Qt}Delay`),
    i = r(`${Qt}Duration`),
    s = oa(o, i),
    l = r(`${mr}Delay`),
    a = r(`${mr}Duration`),
    u = oa(l, a);
  let c = null,
    h = 0,
    f = 0;
  t === Qt
    ? s > 0 && ((c = Qt), (h = s), (f = i.length))
    : t === mr
    ? u > 0 && ((c = mr), (h = u), (f = a.length))
    : ((h = Math.max(s, u)),
      (c = h > 0 ? (s > u ? Qt : mr) : null),
      (f = c ? (c === Qt ? i.length : a.length) : 0));
  const m =
    c === Qt && /\b(transform|all)(,|$)/.test(r(`${Qt}Property`).toString());
  return { type: c, timeout: h, propCount: f, hasTransform: m };
}
function oa(e, t) {
  for (; e.length < t.length; ) e = e.concat(e);
  return Math.max(...t.map((n, r) => ia(n) + ia(e[r])));
}
function ia(e) {
  return Number(e.slice(0, -1).replace(',', '.')) * 1e3;
}
function Eg() {
  return document.body.offsetHeight;
}
const wg = Xe({ patchProp: gg }, tg);
let sa;
function Cg() {
  return sa || (sa = Om(wg));
}
const of = (...e) => {
  const t = Cg().createApp(...e),
    { mount: n } = t;
  return (
    (t.mount = (r) => {
      const o = kg(r);
      if (!o) return;
      const i = t._component;
      !me(i) && !i.render && !i.template && (i.template = o.innerHTML),
        (o.innerHTML = '');
      const s = n(o, !1, o instanceof SVGElement);
      return (
        o instanceof Element &&
          (o.removeAttribute('v-cloak'), o.setAttribute('data-v-app', '')),
        s
      );
    }),
    t
  );
};
function kg(e) {
  return Re(e) ? document.querySelector(e) : e;
}
function cr(e, t, n, r) {
  return Object.defineProperty(e, t, { get: n, set: r, enumerable: !0 }), e;
}
const Lt = ae(!1);
let ri;
function Pg(e, t) {
  const n =
    /(edg|edge|edga|edgios)\/([\w.]+)/.exec(e) ||
    /(opr)[\/]([\w.]+)/.exec(e) ||
    /(vivaldi)[\/]([\w.]+)/.exec(e) ||
    /(chrome|crios)[\/]([\w.]+)/.exec(e) ||
    /(version)(applewebkit)[\/]([\w.]+).*(safari)[\/]([\w.]+)/.exec(e) ||
    /(webkit)[\/]([\w.]+).*(version)[\/]([\w.]+).*(safari)[\/]([\w.]+)/.exec(
      e
    ) ||
    /(firefox|fxios)[\/]([\w.]+)/.exec(e) ||
    /(webkit)[\/]([\w.]+)/.exec(e) ||
    /(opera)(?:.*version|)[\/]([\w.]+)/.exec(e) ||
    [];
  return {
    browser: n[5] || n[3] || n[1] || '',
    version: n[2] || n[4] || '0',
    versionNumber: n[4] || n[2] || '0',
    platform: t[0] || '',
  };
}
function xg(e) {
  return (
    /(ipad)/.exec(e) ||
    /(ipod)/.exec(e) ||
    /(windows phone)/.exec(e) ||
    /(iphone)/.exec(e) ||
    /(kindle)/.exec(e) ||
    /(silk)/.exec(e) ||
    /(android)/.exec(e) ||
    /(win)/.exec(e) ||
    /(mac)/.exec(e) ||
    /(linux)/.exec(e) ||
    /(cros)/.exec(e) ||
    /(playbook)/.exec(e) ||
    /(bb)/.exec(e) ||
    /(blackberry)/.exec(e) ||
    []
  );
}
const sf = 'ontouchstart' in window || window.navigator.maxTouchPoints > 0;
function Sg(e) {
  (ri = { is: { ...e } }), delete e.mac, delete e.desktop;
  const t =
    Math.min(window.innerHeight, window.innerWidth) > 414 ? 'ipad' : 'iphone';
  Object.assign(e, { mobile: !0, ios: !0, platform: t, [t]: !0 });
}
function Lg(e) {
  const t = e.toLowerCase(),
    n = xg(t),
    r = Pg(t, n),
    o = {};
  r.browser &&
    ((o[r.browser] = !0),
    (o.version = r.version),
    (o.versionNumber = parseInt(r.versionNumber, 10))),
    r.platform && (o[r.platform] = !0);
  const i =
    o.android ||
    o.ios ||
    o.bb ||
    o.blackberry ||
    o.ipad ||
    o.iphone ||
    o.ipod ||
    o.kindle ||
    o.playbook ||
    o.silk ||
    o['windows phone'];
  return (
    i === !0 || t.indexOf('mobile') > -1
      ? ((o.mobile = !0),
        o.edga || o.edgios
          ? ((o.edge = !0), (r.browser = 'edge'))
          : o.crios
          ? ((o.chrome = !0), (r.browser = 'chrome'))
          : o.fxios && ((o.firefox = !0), (r.browser = 'firefox')))
      : (o.desktop = !0),
    (o.ipod || o.ipad || o.iphone) && (o.ios = !0),
    o['windows phone'] && ((o.winphone = !0), delete o['windows phone']),
    (o.chrome ||
      o.opr ||
      o.safari ||
      o.vivaldi ||
      (o.mobile === !0 && o.ios !== !0 && i !== !0)) &&
      (o.webkit = !0),
    o.edg && ((r.browser = 'edgechromium'), (o.edgeChromium = !0)),
    ((o.safari && o.blackberry) || o.bb) &&
      ((r.browser = 'blackberry'), (o.blackberry = !0)),
    o.safari && o.playbook && ((r.browser = 'playbook'), (o.playbook = !0)),
    o.opr && ((r.browser = 'opera'), (o.opera = !0)),
    o.safari && o.android && ((r.browser = 'android'), (o.android = !0)),
    o.safari && o.kindle && ((r.browser = 'kindle'), (o.kindle = !0)),
    o.safari && o.silk && ((r.browser = 'silk'), (o.silk = !0)),
    o.vivaldi && ((r.browser = 'vivaldi'), (o.vivaldi = !0)),
    (o.name = r.browser),
    (o.platform = r.platform),
    t.indexOf('electron') > -1
      ? (o.electron = !0)
      : document.location.href.indexOf('-extension://') > -1
      ? (o.bex = !0)
      : (window.Capacitor !== void 0
          ? ((o.capacitor = !0),
            (o.nativeMobile = !0),
            (o.nativeMobileWrapper = 'capacitor'))
          : (window._cordovaNative !== void 0 || window.cordova !== void 0) &&
            ((o.cordova = !0),
            (o.nativeMobile = !0),
            (o.nativeMobileWrapper = 'cordova')),
        sf === !0 &&
          o.mac === !0 &&
          ((o.desktop === !0 && o.safari === !0) ||
            (o.nativeMobile === !0 &&
              o.android !== !0 &&
              o.ios !== !0 &&
              o.ipad !== !0)) &&
          Sg(o)),
    o
  );
}
const la = navigator.userAgent || navigator.vendor || window.opera,
  Mg = { has: { touch: !1, webStorage: !1 }, within: { iframe: !1 } },
  Te = {
    userAgent: la,
    is: Lg(la),
    has: { touch: sf },
    within: { iframe: window.self !== window.top },
  },
  Oo = {
    install(e) {
      const { $q: t } = e;
      Lt.value === !0
        ? (e.onSSRHydrated.push(() => {
            Object.assign(t.platform, Te), (Lt.value = !1), (ri = void 0);
          }),
          (t.platform = bt(this)))
        : (t.platform = this);
    },
  };
{
  let e;
  cr(Te.has, 'webStorage', () => {
    if (e !== void 0) return e;
    try {
      if (window.localStorage) return (e = !0), !0;
    } catch {}
    return (e = !1), !1;
  }),
    Te.is.ios === !0 && window.navigator.vendor.toLowerCase().indexOf('apple'),
    Lt.value === !0 ? Object.assign(Oo, Te, ri, Mg) : Object.assign(Oo, Te);
}
var fr = (e, t) => {
  const n = bt(e);
  for (const r in e)
    cr(
      t,
      r,
      () => n[r],
      (o) => {
        n[r] = o;
      }
    );
  return t;
};
const Ie = { hasPassive: !1, passiveCapture: !0, notPassiveCapture: !0 };
try {
  const e = Object.defineProperty({}, 'passive', {
    get() {
      Object.assign(Ie, {
        hasPassive: !0,
        passive: { passive: !0 },
        notPassive: { passive: !1 },
        passiveCapture: { passive: !0, capture: !0 },
        notPassiveCapture: { passive: !1, capture: !0 },
      });
    },
  });
  window.addEventListener('qtest', null, e),
    window.removeEventListener('qtest', null, e);
} catch {}
function Hn() {}
function N_(e) {
  return e.button === 0;
}
function lf(e) {
  return (
    e.touches && e.touches[0]
      ? (e = e.touches[0])
      : e.changedTouches && e.changedTouches[0]
      ? (e = e.changedTouches[0])
      : e.targetTouches && e.targetTouches[0] && (e = e.targetTouches[0]),
    { top: e.clientY, left: e.clientX }
  );
}
function Ag(e) {
  if (e.path) return e.path;
  if (e.composedPath) return e.composedPath();
  const t = [];
  let n = e.target;
  for (; n; ) {
    if ((t.push(n), n.tagName === 'HTML'))
      return t.push(document), t.push(window), t;
    n = n.parentElement;
  }
}
function Ro(e) {
  e.stopPropagation();
}
function It(e) {
  e.cancelable !== !1 && e.preventDefault();
}
function at(e) {
  e.cancelable !== !1 && e.preventDefault(), e.stopPropagation();
}
function B_(e, t) {
  if (e === void 0 || (t === !0 && e.__dragPrevented === !0)) return;
  const n =
    t === !0
      ? (r) => {
          (r.__dragPrevented = !0),
            r.addEventListener('dragstart', It, Ie.notPassiveCapture);
        }
      : (r) => {
          delete r.__dragPrevented,
            r.removeEventListener('dragstart', It, Ie.notPassiveCapture);
        };
  e.querySelectorAll('a, img').forEach(n);
}
function us(e, t, n) {
  const r = `__q_${t}_evt`;
  (e[r] = e[r] !== void 0 ? e[r].concat(n) : n),
    n.forEach((o) => {
      o[0].addEventListener(o[1], e[o[2]], Ie[o[3]]);
    });
}
function af(e, t) {
  const n = `__q_${t}_evt`;
  e[n] !== void 0 &&
    (e[n].forEach((r) => {
      r[0].removeEventListener(r[1], e[r[2]], Ie[r[3]]);
    }),
    (e[n] = void 0));
}
function uf(e, t = 250, n) {
  let r = null;
  function o() {
    const i = arguments,
      s = () => {
        (r = null), n !== !0 && e.apply(this, i);
      };
    r !== null ? clearTimeout(r) : n === !0 && e.apply(this, i),
      (r = setTimeout(s, t));
  }
  return (
    (o.cancel = () => {
      r !== null && clearTimeout(r);
    }),
    o
  );
}
const Ci = ['sm', 'md', 'lg', 'xl'],
  { passive: aa } = Ie;
var Tg = fr(
  {
    width: 0,
    height: 0,
    name: 'xs',
    sizes: { sm: 600, md: 1024, lg: 1440, xl: 1920 },
    lt: { sm: !0, md: !0, lg: !0, xl: !0 },
    gt: { xs: !1, sm: !1, md: !1, lg: !1 },
    xs: !0,
    sm: !1,
    md: !1,
    lg: !1,
    xl: !1,
  },
  {
    setSizes: Hn,
    setDebounce: Hn,
    install({ $q: e, onSSRHydrated: t }) {
      if (((e.screen = this), this.__installed === !0)) {
        e.config.screen !== void 0 &&
          (e.config.screen.bodyClasses === !1
            ? document.body.classList.remove(`screen--${this.name}`)
            : this.__update(!0));
        return;
      }
      const { visualViewport: n } = window,
        r = n || window,
        o = document.scrollingElement || document.documentElement,
        i =
          n === void 0 || Te.is.mobile === !0
            ? () => [
                Math.max(window.innerWidth, o.clientWidth),
                Math.max(window.innerHeight, o.clientHeight),
              ]
            : () => [
                n.width * n.scale + window.innerWidth - o.clientWidth,
                n.height * n.scale + window.innerHeight - o.clientHeight,
              ],
        s = e.config.screen !== void 0 && e.config.screen.bodyClasses === !0;
      this.__update = (h) => {
        const [f, m] = i();
        if ((m !== this.height && (this.height = m), f !== this.width))
          this.width = f;
        else if (h !== !0) return;
        let P = this.sizes;
        (this.gt.xs = f >= P.sm),
          (this.gt.sm = f >= P.md),
          (this.gt.md = f >= P.lg),
          (this.gt.lg = f >= P.xl),
          (this.lt.sm = f < P.sm),
          (this.lt.md = f < P.md),
          (this.lt.lg = f < P.lg),
          (this.lt.xl = f < P.xl),
          (this.xs = this.lt.sm),
          (this.sm = this.gt.xs === !0 && this.lt.md === !0),
          (this.md = this.gt.sm === !0 && this.lt.lg === !0),
          (this.lg = this.gt.md === !0 && this.lt.xl === !0),
          (this.xl = this.gt.lg),
          (P =
            (this.xs === !0 && 'xs') ||
            (this.sm === !0 && 'sm') ||
            (this.md === !0 && 'md') ||
            (this.lg === !0 && 'lg') ||
            'xl'),
          P !== this.name &&
            (s === !0 &&
              (document.body.classList.remove(`screen--${this.name}`),
              document.body.classList.add(`screen--${P}`)),
            (this.name = P));
      };
      let l,
        a = {},
        u = 16;
      (this.setSizes = (h) => {
        Ci.forEach((f) => {
          h[f] !== void 0 && (a[f] = h[f]);
        });
      }),
        (this.setDebounce = (h) => {
          u = h;
        });
      const c = () => {
        const h = getComputedStyle(document.body);
        h.getPropertyValue('--q-size-sm') &&
          Ci.forEach((f) => {
            this.sizes[f] = parseInt(h.getPropertyValue(`--q-size-${f}`), 10);
          }),
          (this.setSizes = (f) => {
            Ci.forEach((m) => {
              f[m] && (this.sizes[m] = f[m]);
            }),
              this.__update(!0);
          }),
          (this.setDebounce = (f) => {
            l !== void 0 && r.removeEventListener('resize', l, aa),
              (l = f > 0 ? uf(this.__update, f) : this.__update),
              r.addEventListener('resize', l, aa);
          }),
          this.setDebounce(u),
          Object.keys(a).length > 0
            ? (this.setSizes(a), (a = void 0))
            : this.__update(),
          s === !0 &&
            this.name === 'xs' &&
            document.body.classList.add('screen--xs');
      };
      Lt.value === !0 ? t.push(c) : c();
    },
  }
);
const Ze = fr(
    { isActive: !1, mode: !1 },
    {
      __media: void 0,
      set(e) {
        (Ze.mode = e),
          e === 'auto'
            ? (Ze.__media === void 0 &&
                ((Ze.__media = window.matchMedia(
                  '(prefers-color-scheme: dark)'
                )),
                (Ze.__updateMedia = () => {
                  Ze.set('auto');
                }),
                Ze.__media.addListener(Ze.__updateMedia)),
              (e = Ze.__media.matches))
            : Ze.__media !== void 0 &&
              (Ze.__media.removeListener(Ze.__updateMedia),
              (Ze.__media = void 0)),
          (Ze.isActive = e === !0),
          document.body.classList.remove(
            `body--${e === !0 ? 'light' : 'dark'}`
          ),
          document.body.classList.add(`body--${e === !0 ? 'dark' : 'light'}`);
      },
      toggle() {
        Ze.set(Ze.isActive === !1);
      },
      install({ $q: e, onSSRHydrated: t, ssrContext: n }) {
        const { dark: r } = e.config;
        if (((e.dark = this), this.__installed === !0 && r === void 0)) return;
        this.isActive = r === !0;
        const o = r !== void 0 ? r : !1;
        if (Lt.value === !0) {
          const i = (l) => {
              this.__fromSSR = l;
            },
            s = this.set;
          (this.set = i),
            i(o),
            t.push(() => {
              (this.set = s), this.set(this.__fromSSR);
            });
        } else this.set(o);
      },
    }
  ),
  cf = () => !0;
function Og(e) {
  return typeof e == 'string' && e !== '' && e !== '/' && e !== '#/';
}
function Rg(e) {
  return (
    e.startsWith('#') === !0 && (e = e.substring(1)),
    e.startsWith('/') === !1 && (e = '/' + e),
    e.endsWith('/') === !0 && (e = e.substring(0, e.length - 1)),
    '#' + e
  );
}
function Ig(e) {
  if (e.backButtonExit === !1) return () => !1;
  if (e.backButtonExit === '*') return cf;
  const t = ['#/'];
  return (
    Array.isArray(e.backButtonExit) === !0 &&
      t.push(...e.backButtonExit.filter(Og).map(Rg)),
    () => t.includes(window.location.hash)
  );
}
var cs = {
    __history: [],
    add: Hn,
    remove: Hn,
    install({ $q: e }) {
      if (this.__installed === !0) return;
      const { cordova: t, capacitor: n } = Te.is;
      if (t !== !0 && n !== !0) return;
      const r = e.config[t === !0 ? 'cordova' : 'capacitor'];
      if (
        (r !== void 0 && r.backButton === !1) ||
        (n === !0 &&
          (window.Capacitor === void 0 ||
            window.Capacitor.Plugins.App === void 0))
      )
        return;
      (this.add = (s) => {
        s.condition === void 0 && (s.condition = cf), this.__history.push(s);
      }),
        (this.remove = (s) => {
          const l = this.__history.indexOf(s);
          l >= 0 && this.__history.splice(l, 1);
        });
      const o = Ig(Object.assign({ backButtonExit: !0 }, r)),
        i = () => {
          if (this.__history.length) {
            const s = this.__history[this.__history.length - 1];
            s.condition() === !0 && (this.__history.pop(), s.handler());
          } else o() === !0 ? navigator.app.exitApp() : window.history.back();
        };
      t === !0
        ? document.addEventListener('deviceready', () => {
            document.addEventListener('backbutton', i, !1);
          })
        : window.Capacitor.Plugins.App.addListener('backButton', i);
    },
  },
  ua = {
    isoName: 'en-US',
    nativeName: 'English (US)',
    label: {
      clear: 'Clear',
      ok: 'OK',
      cancel: 'Cancel',
      close: 'Close',
      set: 'Set',
      select: 'Select',
      reset: 'Reset',
      remove: 'Remove',
      update: 'Update',
      create: 'Create',
      search: 'Search',
      filter: 'Filter',
      refresh: 'Refresh',
      expand: (e) => (e ? `Expand "${e}"` : 'Expand'),
      collapse: (e) => (e ? `Collapse "${e}"` : 'Collapse'),
    },
    date: {
      days: 'Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday'.split(
        '_'
      ),
      daysShort: 'Sun_Mon_Tue_Wed_Thu_Fri_Sat'.split('_'),
      months:
        'January_February_March_April_May_June_July_August_September_October_November_December'.split(
          '_'
        ),
      monthsShort: 'Jan_Feb_Mar_Apr_May_Jun_Jul_Aug_Sep_Oct_Nov_Dec'.split('_'),
      firstDayOfWeek: 0,
      format24h: !1,
      pluralDay: 'days',
    },
    table: {
      noData: 'No data available',
      noResults: 'No matching records found',
      loading: 'Loading...',
      selectedRecords: (e) =>
        e === 1
          ? '1 record selected.'
          : (e === 0 ? 'No' : e) + ' records selected.',
      recordsPerPage: 'Records per page:',
      allRows: 'All',
      pagination: (e, t, n) => e + '-' + t + ' of ' + n,
      columns: 'Columns',
    },
    editor: {
      url: 'URL',
      bold: 'Bold',
      italic: 'Italic',
      strikethrough: 'Strikethrough',
      underline: 'Underline',
      unorderedList: 'Unordered List',
      orderedList: 'Ordered List',
      subscript: 'Subscript',
      superscript: 'Superscript',
      hyperlink: 'Hyperlink',
      toggleFullscreen: 'Toggle Fullscreen',
      quote: 'Quote',
      left: 'Left align',
      center: 'Center align',
      right: 'Right align',
      justify: 'Justify align',
      print: 'Print',
      outdent: 'Decrease indentation',
      indent: 'Increase indentation',
      removeFormat: 'Remove formatting',
      formatting: 'Formatting',
      fontSize: 'Font Size',
      align: 'Align',
      hr: 'Insert Horizontal Rule',
      undo: 'Undo',
      redo: 'Redo',
      heading1: 'Heading 1',
      heading2: 'Heading 2',
      heading3: 'Heading 3',
      heading4: 'Heading 4',
      heading5: 'Heading 5',
      heading6: 'Heading 6',
      paragraph: 'Paragraph',
      code: 'Code',
      size1: 'Very small',
      size2: 'A bit small',
      size3: 'Normal',
      size4: 'Medium-large',
      size5: 'Big',
      size6: 'Very big',
      size7: 'Maximum',
      defaultFont: 'Default Font',
      viewSource: 'View Source',
    },
    tree: {
      noNodes: 'No nodes available',
      noResults: 'No matching nodes found',
    },
  };
function ca() {
  const e =
    Array.isArray(navigator.languages) === !0 && navigator.languages.length > 0
      ? navigator.languages[0]
      : navigator.language;
  if (typeof e == 'string')
    return e
      .split(/[-_]/)
      .map((t, n) =>
        n === 0
          ? t.toLowerCase()
          : n > 1 || t.length < 4
          ? t.toUpperCase()
          : t[0].toUpperCase() + t.slice(1).toLowerCase()
      )
      .join('-');
}
const wt = fr(
  { __langPack: {} },
  {
    getLocale: ca,
    set(e = ua, t) {
      const n = { ...e, rtl: e.rtl === !0, getLocale: ca };
      {
        if (
          ((n.set = wt.set),
          wt.__langConfig === void 0 || wt.__langConfig.noHtmlAttrs !== !0)
        ) {
          const r = document.documentElement;
          r.setAttribute('dir', n.rtl === !0 ? 'rtl' : 'ltr'),
            r.setAttribute('lang', n.isoName);
        }
        Object.assign(wt.__langPack, n),
          (wt.props = n),
          (wt.isoName = n.isoName),
          (wt.nativeName = n.nativeName);
      }
    },
    install({ $q: e, lang: t, ssrContext: n }) {
      (e.lang = wt.__langPack),
        (wt.__langConfig = e.config.lang),
        this.__installed === !0
          ? t !== void 0 && this.set(t)
          : this.set(t || ua);
    },
  }
);
function wn(e, t, n = document.body) {
  if (typeof e != 'string')
    throw new TypeError('Expected a string as propName');
  if (typeof t != 'string') throw new TypeError('Expected a string as value');
  if (!(n instanceof Element)) throw new TypeError('Expected a DOM element');
  n.style.setProperty(`--q-${e}`, t);
}
let ff = !1;
function Fg(e) {
  ff = e.isComposing === !0;
}
function df(e) {
  return (
    ff === !0 || e !== Object(e) || e.isComposing === !0 || e.qKeyEvent === !0
  );
}
function cn(e, t) {
  return df(e) === !0 ? !1 : [].concat(t).includes(e.keyCode);
}
function hf(e) {
  if (e.ios === !0) return 'ios';
  if (e.android === !0) return 'android';
}
function Hg({ is: e, has: t, within: n }, r) {
  const o = [
    e.desktop === !0 ? 'desktop' : 'mobile',
    `${t.touch === !1 ? 'no-' : ''}touch`,
  ];
  if (e.mobile === !0) {
    const i = hf(e);
    i !== void 0 && o.push('platform-' + i);
  }
  if (e.nativeMobile === !0) {
    const i = e.nativeMobileWrapper;
    o.push(i),
      o.push('native-mobile'),
      e.ios === !0 &&
        (r[i] === void 0 || r[i].iosStatusBarPadding !== !1) &&
        o.push('q-ios-padding');
  } else e.electron === !0 ? o.push('electron') : e.bex === !0 && o.push('bex');
  return n.iframe === !0 && o.push('within-iframe'), o;
}
function Dg() {
  const { is: e } = Te,
    t = document.body.className,
    n = new Set(t.replace(/ {2}/g, ' ').split(' '));
  if (ri !== void 0)
    n.delete('desktop'), n.add('platform-ios'), n.add('mobile');
  else if (e.nativeMobile !== !0 && e.electron !== !0 && e.bex !== !0) {
    if (e.desktop === !0)
      n.delete('mobile'),
        n.delete('platform-ios'),
        n.delete('platform-android'),
        n.add('desktop');
    else if (e.mobile === !0) {
      n.delete('desktop'), n.add('mobile');
      const o = hf(e);
      o !== void 0
        ? (n.add(`platform-${o}`),
          n.delete(`platform-${o === 'ios' ? 'android' : 'ios'}`))
        : (n.delete('platform-ios'), n.delete('platform-android'));
    }
  }
  Te.has.touch === !0 && (n.delete('no-touch'), n.add('touch')),
    Te.within.iframe === !0 && n.add('within-iframe');
  const r = Array.from(n).join(' ');
  t !== r && (document.body.className = r);
}
function Ng(e) {
  for (const t in e) wn(t, e[t]);
}
var Bg = {
    install(e) {
      if (this.__installed !== !0) {
        if (Lt.value === !0) Dg();
        else {
          const { $q: t } = e;
          t.config.brand !== void 0 && Ng(t.config.brand);
          const n = Hg(Te, t.config);
          document.body.classList.add.apply(document.body.classList, n);
        }
        Te.is.ios === !0 && document.body.addEventListener('touchstart', Hn),
          window.addEventListener('keydown', Fg, !0);
      }
    },
  },
  zg = {
    name: 'material-icons',
    type: {
      positive: 'check_circle',
      negative: 'warning',
      info: 'info',
      warning: 'priority_high',
    },
    arrow: {
      up: 'arrow_upward',
      right: 'arrow_forward',
      down: 'arrow_downward',
      left: 'arrow_back',
      dropdown: 'arrow_drop_down',
    },
    chevron: { left: 'chevron_left', right: 'chevron_right' },
    colorPicker: { spectrum: 'gradient', tune: 'tune', palette: 'style' },
    pullToRefresh: { icon: 'refresh' },
    carousel: {
      left: 'chevron_left',
      right: 'chevron_right',
      up: 'keyboard_arrow_up',
      down: 'keyboard_arrow_down',
      navigationIcon: 'lens',
    },
    chip: { remove: 'cancel', selected: 'check' },
    datetime: {
      arrowLeft: 'chevron_left',
      arrowRight: 'chevron_right',
      now: 'access_time',
      today: 'today',
    },
    editor: {
      bold: 'format_bold',
      italic: 'format_italic',
      strikethrough: 'strikethrough_s',
      underline: 'format_underlined',
      unorderedList: 'format_list_bulleted',
      orderedList: 'format_list_numbered',
      subscript: 'vertical_align_bottom',
      superscript: 'vertical_align_top',
      hyperlink: 'link',
      toggleFullscreen: 'fullscreen',
      quote: 'format_quote',
      left: 'format_align_left',
      center: 'format_align_center',
      right: 'format_align_right',
      justify: 'format_align_justify',
      print: 'print',
      outdent: 'format_indent_decrease',
      indent: 'format_indent_increase',
      removeFormat: 'format_clear',
      formatting: 'text_format',
      fontSize: 'format_size',
      align: 'format_align_left',
      hr: 'remove',
      undo: 'undo',
      redo: 'redo',
      heading: 'format_size',
      code: 'code',
      size: 'format_size',
      font: 'font_download',
      viewSource: 'code',
    },
    expansionItem: {
      icon: 'keyboard_arrow_down',
      denseIcon: 'arrow_drop_down',
    },
    fab: { icon: 'add', activeIcon: 'close' },
    field: { clear: 'cancel', error: 'error' },
    pagination: {
      first: 'first_page',
      prev: 'keyboard_arrow_left',
      next: 'keyboard_arrow_right',
      last: 'last_page',
    },
    rating: { icon: 'grade' },
    stepper: { done: 'check', active: 'edit', error: 'warning' },
    tabs: {
      left: 'chevron_left',
      right: 'chevron_right',
      up: 'keyboard_arrow_up',
      down: 'keyboard_arrow_down',
    },
    table: {
      arrowUp: 'arrow_upward',
      warning: 'warning',
      firstPage: 'first_page',
      prevPage: 'chevron_left',
      nextPage: 'chevron_right',
      lastPage: 'last_page',
    },
    tree: { icon: 'play_arrow' },
    uploader: {
      done: 'done',
      clear: 'clear',
      add: 'add_box',
      upload: 'cloud_upload',
      removeQueue: 'clear_all',
      removeUploaded: 'done_all',
    },
  };
const Io = fr(
    { iconMapFn: null, __icons: {} },
    {
      set(e, t) {
        const n = { ...e, rtl: e.rtl === !0 };
        (n.set = Io.set), Object.assign(Io.__icons, n);
      },
      install({ $q: e, iconSet: t, ssrContext: n }) {
        e.config.iconMapFn !== void 0 && (this.iconMapFn = e.config.iconMapFn),
          (e.iconSet = this.__icons),
          cr(
            e,
            'iconMapFn',
            () => this.iconMapFn,
            (r) => {
              this.iconMapFn = r;
            }
          ),
          this.__installed === !0
            ? t !== void 0 && this.set(t)
            : this.set(t || zg);
      },
    }
  ),
  mf = '_q_',
  cl = '_q_l_',
  qg = '_q_pc_',
  $g = '_q_fo_',
  z_ = '_q_tabs_',
  Xn = () => {},
  Fo = {};
let gf = !1;
function Vg() {
  gf = !0;
}
function ki(e, t) {
  if (e === t) return !0;
  if (
    e !== null &&
    t !== null &&
    typeof e == 'object' &&
    typeof t == 'object'
  ) {
    if (e.constructor !== t.constructor) return !1;
    let n, r;
    if (e.constructor === Array) {
      if (((n = e.length), n !== t.length)) return !1;
      for (r = n; r-- !== 0; ) if (ki(e[r], t[r]) !== !0) return !1;
      return !0;
    }
    if (e.constructor === Map) {
      if (e.size !== t.size) return !1;
      let i = e.entries();
      for (r = i.next(); r.done !== !0; ) {
        if (t.has(r.value[0]) !== !0) return !1;
        r = i.next();
      }
      for (i = e.entries(), r = i.next(); r.done !== !0; ) {
        if (ki(r.value[1], t.get(r.value[0])) !== !0) return !1;
        r = i.next();
      }
      return !0;
    }
    if (e.constructor === Set) {
      if (e.size !== t.size) return !1;
      const i = e.entries();
      for (r = i.next(); r.done !== !0; ) {
        if (t.has(r.value[0]) !== !0) return !1;
        r = i.next();
      }
      return !0;
    }
    if (e.buffer != null && e.buffer.constructor === ArrayBuffer) {
      if (((n = e.length), n !== t.length)) return !1;
      for (r = n; r-- !== 0; ) if (e[r] !== t[r]) return !1;
      return !0;
    }
    if (e.constructor === RegExp)
      return e.source === t.source && e.flags === t.flags;
    if (e.valueOf !== Object.prototype.valueOf)
      return e.valueOf() === t.valueOf();
    if (e.toString !== Object.prototype.toString)
      return e.toString() === t.toString();
    const o = Object.keys(e).filter((i) => e[i] !== void 0);
    if (
      ((n = o.length),
      n !== Object.keys(t).filter((i) => t[i] !== void 0).length)
    )
      return !1;
    for (r = n; r-- !== 0; ) {
      const i = o[r];
      if (ki(e[i], t[i]) !== !0) return !1;
    }
    return !0;
  }
  return e !== e && t !== t;
}
function $t(e) {
  return e !== null && typeof e == 'object' && Array.isArray(e) !== !0;
}
function q_(e) {
  return typeof e == 'number' && isFinite(e);
}
const fa = [Oo, Bg, Ze, Tg, cs, wt, Io];
function vf(e, t) {
  const n = of(e);
  n.config.globalProperties = t.config.globalProperties;
  const { reload: r, ...o } = t._context;
  return Object.assign(n._context, o), n;
}
function da(e, t) {
  t.forEach((n) => {
    n.install(e), (n.__installed = !0);
  });
}
function jg(e, t, n) {
  (e.config.globalProperties.$q = n.$q),
    e.provide(mf, n.$q),
    da(n, fa),
    t.components !== void 0 &&
      Object.values(t.components).forEach((r) => {
        $t(r) === !0 && r.name !== void 0 && e.component(r.name, r);
      }),
    t.directives !== void 0 &&
      Object.values(t.directives).forEach((r) => {
        $t(r) === !0 && r.name !== void 0 && e.directive(r.name, r);
      }),
    t.plugins !== void 0 &&
      da(
        n,
        Object.values(t.plugins).filter(
          (r) => typeof r.install == 'function' && fa.includes(r) === !1
        )
      ),
    Lt.value === !0 &&
      (n.$q.onSSRHydrated = () => {
        n.onSSRHydrated.forEach((r) => {
          r();
        }),
          (n.$q.onSSRHydrated = () => {});
      });
}
var Ug = function (e, t = {}) {
    const n = { version: '2.11.5' };
    gf === !1
      ? (t.config !== void 0 && Object.assign(Fo, t.config),
        (n.config = { ...Fo }),
        Vg())
      : (n.config = t.config || {}),
      jg(e, t, {
        parentApp: e,
        $q: n,
        lang: t.lang,
        iconSet: t.iconSet,
        onSSRHydrated: [],
      });
  },
  Wg = { version: '2.11.5', install: Ug, lang: wt, iconSet: Io },
  Gg = !1;
/*!
 * pinia v2.0.29
 * (c) 2023 Eduardo San Martin Morote
 * @license MIT
 */ let pf;
const oi = (e) => (pf = e),
  bf = Symbol();
function fs(e) {
  return (
    e &&
    typeof e == 'object' &&
    Object.prototype.toString.call(e) === '[object Object]' &&
    typeof e.toJSON != 'function'
  );
}
var Rr;
(function (e) {
  (e.direct = 'direct'),
    (e.patchObject = 'patch object'),
    (e.patchFunction = 'patch function');
})(Rr || (Rr = {}));
function Kg() {
  const e = Qs(!0),
    t = e.run(() => ae({}));
  let n = [],
    r = [];
  const o = jt({
    install(i) {
      oi(o),
        (o._a = i),
        i.provide(bf, o),
        (i.config.globalProperties.$pinia = o),
        r.forEach((s) => n.push(s)),
        (r = []);
    },
    use(i) {
      return !this._a && !Gg ? r.push(i) : n.push(i), this;
    },
    _p: n,
    _a: null,
    _e: e,
    _s: new Map(),
    state: t,
  });
  return o;
}
const yf = () => {};
function ha(e, t, n, r = yf) {
  e.push(t);
  const o = () => {
    const i = e.indexOf(t);
    i > -1 && (e.splice(i, 1), r());
  };
  return !n && hh() && mh(o), o;
}
function Dn(e, ...t) {
  e.slice().forEach((n) => {
    n(...t);
  });
}
function ds(e, t) {
  e instanceof Map && t instanceof Map && t.forEach((n, r) => e.set(r, n)),
    e instanceof Set && t instanceof Set && t.forEach(e.add, e);
  for (const n in t) {
    if (!t.hasOwnProperty(n)) continue;
    const r = t[n],
      o = e[n];
    fs(o) && fs(r) && e.hasOwnProperty(n) && !Ae(r) && !sn(r)
      ? (e[n] = ds(o, r))
      : (e[n] = r);
  }
  return e;
}
const Qg = Symbol();
function Xg(e) {
  return !fs(e) || !e.hasOwnProperty(Qg);
}
const { assign: tn } = Object;
function Yg(e) {
  return !!(Ae(e) && e.effect);
}
function Jg(e, t, n, r) {
  const { state: o, actions: i, getters: s } = t,
    l = n.state.value[e];
  let a;
  function u() {
    l || (n.state.value[e] = o ? o() : {});
    const c = jh(n.state.value[e]);
    return tn(
      c,
      i,
      Object.keys(s || {}).reduce(
        (h, f) => (
          (h[f] = jt(
            H(() => {
              oi(n);
              const m = n._s.get(e);
              return s[f].call(m, m);
            })
          )),
          h
        ),
        {}
      )
    );
  }
  return (
    (a = _f(e, u, t, n, r, !0)),
    (a.$reset = function () {
      const h = o ? o() : {};
      this.$patch((f) => {
        tn(f, h);
      });
    }),
    a
  );
}
function _f(e, t, n = {}, r, o, i) {
  let s;
  const l = tn({ actions: {} }, n),
    a = { deep: !0 };
  let u,
    c,
    h = jt([]),
    f = jt([]),
    m;
  const P = r.state.value[e];
  !i && !P && (r.state.value[e] = {}), ae({});
  let A;
  function O(T) {
    let R;
    (u = c = !1),
      typeof T == 'function'
        ? (T(r.state.value[e]),
          (R = { type: Rr.patchFunction, storeId: e, events: m }))
        : (ds(r.state.value[e], T),
          (R = { type: Rr.patchObject, payload: T, storeId: e, events: m }));
    const D = (A = Symbol());
    Ge().then(() => {
      A === D && (u = !0);
    }),
      (c = !0),
      Dn(h, R, r.state.value[e]);
  }
  const w = yf;
  function g() {
    s.stop(), (h = []), (f = []), r._s.delete(e);
  }
  function E(T, R) {
    return function () {
      oi(r);
      const D = Array.from(arguments),
        z = [],
        j = [];
      function N(re) {
        z.push(re);
      }
      function Y(re) {
        j.push(re);
      }
      Dn(f, { args: D, name: T, store: S, after: N, onError: Y });
      let $;
      try {
        $ = R.apply(this && this.$id === e ? this : S, D);
      } catch (re) {
        throw (Dn(j, re), re);
      }
      return $ instanceof Promise
        ? $.then((re) => (Dn(z, re), re)).catch(
            (re) => (Dn(j, re), Promise.reject(re))
          )
        : (Dn(z, $), $);
    };
  }
  const k = {
      _p: r,
      $id: e,
      $onAction: ha.bind(null, f),
      $patch: O,
      $reset: w,
      $subscribe(T, R = {}) {
        const D = ha(h, T, R.detached, () => z()),
          z = s.run(() =>
            fe(
              () => r.state.value[e],
              (j) => {
                (R.flush === 'sync' ? c : u) &&
                  T({ storeId: e, type: Rr.direct, events: m }, j);
              },
              tn({}, a, R)
            )
          );
        return D;
      },
      $dispose: g,
    },
    S = bt(k);
  r._s.set(e, S);
  const L = r._e.run(() => ((s = Qs()), s.run(() => t())));
  for (const T in L) {
    const R = L[T];
    if ((Ae(R) && !Yg(R)) || sn(R))
      i ||
        (P && Xg(R) && (Ae(R) ? (R.value = P[T]) : ds(R, P[T])),
        (r.state.value[e][T] = R));
    else if (typeof R == 'function') {
      const D = E(T, R);
      (L[T] = D), (l.actions[T] = R);
    }
  }
  return (
    tn(S, L),
    tn(ge(S), L),
    Object.defineProperty(S, '$state', {
      get: () => r.state.value[e],
      set: (T) => {
        O((R) => {
          tn(R, T);
        });
      },
    }),
    r._p.forEach((T) => {
      tn(
        S,
        s.run(() => T({ store: S, app: r._a, pinia: r, options: l }))
      );
    }),
    P && i && n.hydrate && n.hydrate(S.$state, P),
    (u = !0),
    (c = !0),
    S
  );
}
function Ef(e, t, n) {
  let r, o;
  const i = typeof t == 'function';
  typeof e == 'string' ? ((r = e), (o = i ? n : t)) : ((o = e), (r = e.id));
  function s(l, a) {
    const u = Ee();
    return (
      (l = l || (u && Qe(bf, null))),
      l && oi(l),
      (l = pf),
      l._s.has(r) || (i ? _f(r, t, o, l) : Jg(r, o, l)),
      l._s.get(r)
    );
  }
  return (s.$id = r), s;
}
const Zg = () => {
    switch (
      (navigator.language || navigator.userLanguage || 'en')
        .toLowerCase()
        .substring(0, 2)
    ) {
      case 'de':
        return 'de';
      default:
        return 'en';
    }
  },
  _o = Ef('main', {
    state: () => ({
      _language: localStorage.getItem('language') || Zg(),
      _themePreference: localStorage.getItem('themePreference') || 'dark',
      _neverPlayed: localStorage.getItem('neverPlayed') !== 'false',
      _showChessPieceSymbols:
        localStorage.getItem('showChessPieceSymbols') === 'true',
    }),
    getters: {
      themePreference() {
        return this._themePreference;
      },
      language() {
        return this._language;
      },
      neverPlayed() {
        return this._neverPlayed;
      },
      showChessPieceSymbols() {
        return this._showChessPieceSymbols;
      },
    },
    actions: {
      setShowChessPieceSymbols(e) {
        (this._showChessPieceSymbols = e),
          localStorage.setItem('showChessPieceSymbols', String(e));
      },
      playerStartedPlaying() {
        this._neverPlayed &&
          ((this._neverPlayed = !1),
          localStorage.setItem('neverPlayed', 'false'));
      },
      setLanguage(e, t, n = !0) {
        console.log(n),
          (e.locale.value = t),
          (this._language = t),
          localStorage.setItem('language', t);
      },
      setThemePreference(e) {
        (this._themePreference = e), localStorage.setItem('themePreference', e);
      },
    },
  });
/*!
 * shared v9.2.2
 * (c) 2022 kazuya kawaguchi
 * Released under the MIT License.
 */ const hs = typeof window != 'undefined',
  ev = typeof Symbol == 'function' && typeof Symbol.toStringTag == 'symbol',
  hn = (e) => (ev ? Symbol(e) : e),
  tv = (e, t, n) => nv({ l: e, k: t, s: n }),
  nv = (e) =>
    JSON.stringify(e)
      .replace(/\u2028/g, '\\u2028')
      .replace(/\u2029/g, '\\u2029')
      .replace(/\u0027/g, '\\u0027'),
  $e = (e) => typeof e == 'number' && isFinite(e),
  rv = (e) => dl(e) === '[object Date]',
  Ho = (e) => dl(e) === '[object RegExp]',
  ii = (e) => _e(e) && Object.keys(e).length === 0;
function ov(e, t) {
  typeof console != 'undefined' &&
    (console.warn('[intlify] ' + e), t && console.warn(t.stack));
}
const nt = Object.assign;
function ma(e) {
  return e
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&apos;');
}
const iv = Object.prototype.hasOwnProperty;
function fl(e, t) {
  return iv.call(e, t);
}
const Fe = Array.isArray,
  We = (e) => typeof e == 'function',
  oe = (e) => typeof e == 'string',
  Oe = (e) => typeof e == 'boolean',
  xe = (e) => e !== null && typeof e == 'object',
  wf = Object.prototype.toString,
  dl = (e) => wf.call(e),
  _e = (e) => dl(e) === '[object Object]',
  sv = (e) =>
    e == null
      ? ''
      : Fe(e) || (_e(e) && e.toString === wf)
      ? JSON.stringify(e, null, 2)
      : String(e);
/*!
 * message-compiler v9.2.2
 * (c) 2022 kazuya kawaguchi
 * Released under the MIT License.
 */ const we = {
  EXPECTED_TOKEN: 1,
  INVALID_TOKEN_IN_PLACEHOLDER: 2,
  UNTERMINATED_SINGLE_QUOTE_IN_PLACEHOLDER: 3,
  UNKNOWN_ESCAPE_SEQUENCE: 4,
  INVALID_UNICODE_ESCAPE_SEQUENCE: 5,
  UNBALANCED_CLOSING_BRACE: 6,
  UNTERMINATED_CLOSING_BRACE: 7,
  EMPTY_PLACEHOLDER: 8,
  NOT_ALLOW_NEST_PLACEHOLDER: 9,
  INVALID_LINKED_FORMAT: 10,
  MUST_HAVE_MESSAGES_IN_PLURAL: 11,
  UNEXPECTED_EMPTY_LINKED_MODIFIER: 12,
  UNEXPECTED_EMPTY_LINKED_KEY: 13,
  UNEXPECTED_LEXICAL_ANALYSIS: 14,
  __EXTEND_POINT__: 15,
};
function si(e, t, n = {}) {
  const { domain: r, messages: o, args: i } = n,
    s = e,
    l = new SyntaxError(String(s));
  return (l.code = e), t && (l.location = t), (l.domain = r), l;
}
function lv(e) {
  throw e;
}
function av(e, t, n) {
  return { line: e, column: t, offset: n };
}
function ms(e, t, n) {
  const r = { start: e, end: t };
  return n != null && (r.source = n), r;
}
const Bt = ' ',
  uv = '\r',
  it = `
`,
  cv = String.fromCharCode(8232),
  fv = String.fromCharCode(8233);
function dv(e) {
  const t = e;
  let n = 0,
    r = 1,
    o = 1,
    i = 0;
  const s = (T) => t[T] === uv && t[T + 1] === it,
    l = (T) => t[T] === it,
    a = (T) => t[T] === fv,
    u = (T) => t[T] === cv,
    c = (T) => s(T) || l(T) || a(T) || u(T),
    h = () => n,
    f = () => r,
    m = () => o,
    P = () => i,
    A = (T) => (s(T) || a(T) || u(T) ? it : t[T]),
    O = () => A(n),
    w = () => A(n + i);
  function g() {
    return (i = 0), c(n) && (r++, (o = 0)), s(n) && n++, n++, o++, t[n];
  }
  function E() {
    return s(n + i) && i++, i++, t[n + i];
  }
  function k() {
    (n = 0), (r = 1), (o = 1), (i = 0);
  }
  function S(T = 0) {
    i = T;
  }
  function L() {
    const T = n + i;
    for (; T !== n; ) g();
    i = 0;
  }
  return {
    index: h,
    line: f,
    column: m,
    peekOffset: P,
    charAt: A,
    currentChar: O,
    currentPeek: w,
    next: g,
    peek: E,
    reset: k,
    resetPeek: S,
    skipToPeek: L,
  };
}
const Yt = void 0,
  ga = "'",
  hv = 'tokenizer';
function mv(e, t = {}) {
  const n = t.location !== !1,
    r = dv(e),
    o = () => r.index(),
    i = () => av(r.line(), r.column(), r.index()),
    s = i(),
    l = o(),
    a = {
      currentType: 14,
      offset: l,
      startLoc: s,
      endLoc: s,
      lastType: 14,
      lastOffset: l,
      lastStartLoc: s,
      lastEndLoc: s,
      braceNest: 0,
      inLinked: !1,
      text: '',
    },
    u = () => a,
    { onError: c } = t;
  function h(d, b, M, ...I) {
    const U = u();
    if (((b.column += M), (b.offset += M), c)) {
      const Q = ms(U.startLoc, b),
        F = si(d, Q, { domain: hv, args: I });
      c(F);
    }
  }
  function f(d, b, M) {
    (d.endLoc = i()), (d.currentType = b);
    const I = { type: b };
    return (
      n && (I.loc = ms(d.startLoc, d.endLoc)), M != null && (I.value = M), I
    );
  }
  const m = (d) => f(d, 14);
  function P(d, b) {
    return d.currentChar() === b
      ? (d.next(), b)
      : (h(we.EXPECTED_TOKEN, i(), 0, b), '');
  }
  function A(d) {
    let b = '';
    for (; d.currentPeek() === Bt || d.currentPeek() === it; )
      (b += d.currentPeek()), d.peek();
    return b;
  }
  function O(d) {
    const b = A(d);
    return d.skipToPeek(), b;
  }
  function w(d) {
    if (d === Yt) return !1;
    const b = d.charCodeAt(0);
    return (b >= 97 && b <= 122) || (b >= 65 && b <= 90) || b === 95;
  }
  function g(d) {
    if (d === Yt) return !1;
    const b = d.charCodeAt(0);
    return b >= 48 && b <= 57;
  }
  function E(d, b) {
    const { currentType: M } = b;
    if (M !== 2) return !1;
    A(d);
    const I = w(d.currentPeek());
    return d.resetPeek(), I;
  }
  function k(d, b) {
    const { currentType: M } = b;
    if (M !== 2) return !1;
    A(d);
    const I = d.currentPeek() === '-' ? d.peek() : d.currentPeek(),
      U = g(I);
    return d.resetPeek(), U;
  }
  function S(d, b) {
    const { currentType: M } = b;
    if (M !== 2) return !1;
    A(d);
    const I = d.currentPeek() === ga;
    return d.resetPeek(), I;
  }
  function L(d, b) {
    const { currentType: M } = b;
    if (M !== 8) return !1;
    A(d);
    const I = d.currentPeek() === '.';
    return d.resetPeek(), I;
  }
  function T(d, b) {
    const { currentType: M } = b;
    if (M !== 9) return !1;
    A(d);
    const I = w(d.currentPeek());
    return d.resetPeek(), I;
  }
  function R(d, b) {
    const { currentType: M } = b;
    if (!(M === 8 || M === 12)) return !1;
    A(d);
    const I = d.currentPeek() === ':';
    return d.resetPeek(), I;
  }
  function D(d, b) {
    const { currentType: M } = b;
    if (M !== 10) return !1;
    const I = () => {
        const Q = d.currentPeek();
        return Q === '{'
          ? w(d.peek())
          : Q === '@' ||
            Q === '%' ||
            Q === '|' ||
            Q === ':' ||
            Q === '.' ||
            Q === Bt ||
            !Q
          ? !1
          : Q === it
          ? (d.peek(), I())
          : w(Q);
      },
      U = I();
    return d.resetPeek(), U;
  }
  function z(d) {
    A(d);
    const b = d.currentPeek() === '|';
    return d.resetPeek(), b;
  }
  function j(d) {
    const b = A(d),
      M = d.currentPeek() === '%' && d.peek() === '{';
    return d.resetPeek(), { isModulo: M, hasSpace: b.length > 0 };
  }
  function N(d, b = !0) {
    const M = (U = !1, Q = '', F = !1) => {
        const p = d.currentPeek();
        return p === '{'
          ? Q === '%'
            ? !1
            : U
          : p === '@' || !p
          ? Q === '%'
            ? !0
            : U
          : p === '%'
          ? (d.peek(), M(U, '%', !0))
          : p === '|'
          ? Q === '%' || F
            ? !0
            : !(Q === Bt || Q === it)
          : p === Bt
          ? (d.peek(), M(!0, Bt, F))
          : p === it
          ? (d.peek(), M(!0, it, F))
          : !0;
      },
      I = M();
    return b && d.resetPeek(), I;
  }
  function Y(d, b) {
    const M = d.currentChar();
    return M === Yt ? Yt : b(M) ? (d.next(), M) : null;
  }
  function $(d) {
    return Y(d, (M) => {
      const I = M.charCodeAt(0);
      return (
        (I >= 97 && I <= 122) ||
        (I >= 65 && I <= 90) ||
        (I >= 48 && I <= 57) ||
        I === 95 ||
        I === 36
      );
    });
  }
  function re(d) {
    return Y(d, (M) => {
      const I = M.charCodeAt(0);
      return I >= 48 && I <= 57;
    });
  }
  function se(d) {
    return Y(d, (M) => {
      const I = M.charCodeAt(0);
      return (
        (I >= 48 && I <= 57) || (I >= 65 && I <= 70) || (I >= 97 && I <= 102)
      );
    });
  }
  function V(d) {
    let b = '',
      M = '';
    for (; (b = re(d)); ) M += b;
    return M;
  }
  function ee(d) {
    O(d);
    const b = d.currentChar();
    return b !== '%' && h(we.EXPECTED_TOKEN, i(), 0, b), d.next(), '%';
  }
  function de(d) {
    let b = '';
    for (;;) {
      const M = d.currentChar();
      if (M === '{' || M === '}' || M === '@' || M === '|' || !M) break;
      if (M === '%')
        if (N(d)) (b += M), d.next();
        else break;
      else if (M === Bt || M === it)
        if (N(d)) (b += M), d.next();
        else {
          if (z(d)) break;
          (b += M), d.next();
        }
      else (b += M), d.next();
    }
    return b;
  }
  function be(d) {
    O(d);
    let b = '',
      M = '';
    for (; (b = $(d)); ) M += b;
    return (
      d.currentChar() === Yt && h(we.UNTERMINATED_CLOSING_BRACE, i(), 0), M
    );
  }
  function J(d) {
    O(d);
    let b = '';
    return (
      d.currentChar() === '-' ? (d.next(), (b += `-${V(d)}`)) : (b += V(d)),
      d.currentChar() === Yt && h(we.UNTERMINATED_CLOSING_BRACE, i(), 0),
      b
    );
  }
  function ce(d) {
    O(d), P(d, "'");
    let b = '',
      M = '';
    const I = (Q) => Q !== ga && Q !== it;
    for (; (b = Y(d, I)); ) b === '\\' ? (M += ve(d)) : (M += b);
    const U = d.currentChar();
    return U === it || U === Yt
      ? (h(we.UNTERMINATED_SINGLE_QUOTE_IN_PLACEHOLDER, i(), 0),
        U === it && (d.next(), P(d, "'")),
        M)
      : (P(d, "'"), M);
  }
  function ve(d) {
    const b = d.currentChar();
    switch (b) {
      case '\\':
      case "'":
        return d.next(), `\\${b}`;
      case 'u':
        return Pe(d, b, 4);
      case 'U':
        return Pe(d, b, 6);
      default:
        return h(we.UNKNOWN_ESCAPE_SEQUENCE, i(), 0, b), '';
    }
  }
  function Pe(d, b, M) {
    P(d, b);
    let I = '';
    for (let U = 0; U < M; U++) {
      const Q = se(d);
      if (!Q) {
        h(
          we.INVALID_UNICODE_ESCAPE_SEQUENCE,
          i(),
          0,
          `\\${b}${I}${d.currentChar()}`
        );
        break;
      }
      I += Q;
    }
    return `\\${b}${I}`;
  }
  function W(d) {
    O(d);
    let b = '',
      M = '';
    const I = (U) => U !== '{' && U !== '}' && U !== Bt && U !== it;
    for (; (b = Y(d, I)); ) M += b;
    return M;
  }
  function ne(d) {
    let b = '',
      M = '';
    for (; (b = $(d)); ) M += b;
    return M;
  }
  function G(d) {
    const b = (M = !1, I) => {
      const U = d.currentChar();
      return U === '{' || U === '%' || U === '@' || U === '|' || !U || U === Bt
        ? I
        : U === it
        ? ((I += U), d.next(), b(M, I))
        : ((I += U), d.next(), b(!0, I));
    };
    return b(!1, '');
  }
  function te(d) {
    O(d);
    const b = P(d, '|');
    return O(d), b;
  }
  function Z(d, b) {
    let M = null;
    switch (d.currentChar()) {
      case '{':
        return (
          b.braceNest >= 1 && h(we.NOT_ALLOW_NEST_PLACEHOLDER, i(), 0),
          d.next(),
          (M = f(b, 2, '{')),
          O(d),
          b.braceNest++,
          M
        );
      case '}':
        return (
          b.braceNest > 0 &&
            b.currentType === 2 &&
            h(we.EMPTY_PLACEHOLDER, i(), 0),
          d.next(),
          (M = f(b, 3, '}')),
          b.braceNest--,
          b.braceNest > 0 && O(d),
          b.inLinked && b.braceNest === 0 && (b.inLinked = !1),
          M
        );
      case '@':
        return (
          b.braceNest > 0 && h(we.UNTERMINATED_CLOSING_BRACE, i(), 0),
          (M = he(d, b) || m(b)),
          (b.braceNest = 0),
          M
        );
      default:
        let U = !0,
          Q = !0,
          F = !0;
        if (z(d))
          return (
            b.braceNest > 0 && h(we.UNTERMINATED_CLOSING_BRACE, i(), 0),
            (M = f(b, 1, te(d))),
            (b.braceNest = 0),
            (b.inLinked = !1),
            M
          );
        if (
          b.braceNest > 0 &&
          (b.currentType === 5 || b.currentType === 6 || b.currentType === 7)
        )
          return (
            h(we.UNTERMINATED_CLOSING_BRACE, i(), 0),
            (b.braceNest = 0),
            le(d, b)
          );
        if ((U = E(d, b))) return (M = f(b, 5, be(d))), O(d), M;
        if ((Q = k(d, b))) return (M = f(b, 6, J(d))), O(d), M;
        if ((F = S(d, b))) return (M = f(b, 7, ce(d))), O(d), M;
        if (!U && !Q && !F)
          return (
            (M = f(b, 13, W(d))),
            h(we.INVALID_TOKEN_IN_PLACEHOLDER, i(), 0, M.value),
            O(d),
            M
          );
        break;
    }
    return M;
  }
  function he(d, b) {
    const { currentType: M } = b;
    let I = null;
    const U = d.currentChar();
    switch (
      ((M === 8 || M === 9 || M === 12 || M === 10) &&
        (U === it || U === Bt) &&
        h(we.INVALID_LINKED_FORMAT, i(), 0),
      U)
    ) {
      case '@':
        return d.next(), (I = f(b, 8, '@')), (b.inLinked = !0), I;
      case '.':
        return O(d), d.next(), f(b, 9, '.');
      case ':':
        return O(d), d.next(), f(b, 10, ':');
      default:
        return z(d)
          ? ((I = f(b, 1, te(d))), (b.braceNest = 0), (b.inLinked = !1), I)
          : L(d, b) || R(d, b)
          ? (O(d), he(d, b))
          : T(d, b)
          ? (O(d), f(b, 12, ne(d)))
          : D(d, b)
          ? (O(d), U === '{' ? Z(d, b) || I : f(b, 11, G(d)))
          : (M === 8 && h(we.INVALID_LINKED_FORMAT, i(), 0),
            (b.braceNest = 0),
            (b.inLinked = !1),
            le(d, b));
    }
  }
  function le(d, b) {
    let M = { type: 14 };
    if (b.braceNest > 0) return Z(d, b) || m(b);
    if (b.inLinked) return he(d, b) || m(b);
    switch (d.currentChar()) {
      case '{':
        return Z(d, b) || m(b);
      case '}':
        return h(we.UNBALANCED_CLOSING_BRACE, i(), 0), d.next(), f(b, 3, '}');
      case '@':
        return he(d, b) || m(b);
      default:
        if (z(d))
          return (M = f(b, 1, te(d))), (b.braceNest = 0), (b.inLinked = !1), M;
        const { isModulo: U, hasSpace: Q } = j(d);
        if (U) return Q ? f(b, 0, de(d)) : f(b, 4, ee(d));
        if (N(d)) return f(b, 0, de(d));
        break;
    }
    return M;
  }
  function C() {
    const { currentType: d, offset: b, startLoc: M, endLoc: I } = a;
    return (
      (a.lastType = d),
      (a.lastOffset = b),
      (a.lastStartLoc = M),
      (a.lastEndLoc = I),
      (a.offset = o()),
      (a.startLoc = i()),
      r.currentChar() === Yt ? f(a, 14) : le(r, a)
    );
  }
  return { nextToken: C, currentOffset: o, currentPosition: i, context: u };
}
const gv = 'parser',
  vv = /(?:\\\\|\\'|\\u([0-9a-fA-F]{4})|\\U([0-9a-fA-F]{6}))/g;
function pv(e, t, n) {
  switch (e) {
    case '\\\\':
      return '\\';
    case "\\'":
      return "'";
    default: {
      const r = parseInt(t || n, 16);
      return r <= 55295 || r >= 57344 ? String.fromCodePoint(r) : '\uFFFD';
    }
  }
}
function bv(e = {}) {
  const t = e.location !== !1,
    { onError: n } = e;
  function r(w, g, E, k, ...S) {
    const L = w.currentPosition();
    if (((L.offset += k), (L.column += k), n)) {
      const T = ms(E, L),
        R = si(g, T, { domain: gv, args: S });
      n(R);
    }
  }
  function o(w, g, E) {
    const k = { type: w, start: g, end: g };
    return t && (k.loc = { start: E, end: E }), k;
  }
  function i(w, g, E, k) {
    (w.end = g), k && (w.type = k), t && w.loc && (w.loc.end = E);
  }
  function s(w, g) {
    const E = w.context(),
      k = o(3, E.offset, E.startLoc);
    return (k.value = g), i(k, w.currentOffset(), w.currentPosition()), k;
  }
  function l(w, g) {
    const E = w.context(),
      { lastOffset: k, lastStartLoc: S } = E,
      L = o(5, k, S);
    return (
      (L.index = parseInt(g, 10)),
      w.nextToken(),
      i(L, w.currentOffset(), w.currentPosition()),
      L
    );
  }
  function a(w, g) {
    const E = w.context(),
      { lastOffset: k, lastStartLoc: S } = E,
      L = o(4, k, S);
    return (
      (L.key = g),
      w.nextToken(),
      i(L, w.currentOffset(), w.currentPosition()),
      L
    );
  }
  function u(w, g) {
    const E = w.context(),
      { lastOffset: k, lastStartLoc: S } = E,
      L = o(9, k, S);
    return (
      (L.value = g.replace(vv, pv)),
      w.nextToken(),
      i(L, w.currentOffset(), w.currentPosition()),
      L
    );
  }
  function c(w) {
    const g = w.nextToken(),
      E = w.context(),
      { lastOffset: k, lastStartLoc: S } = E,
      L = o(8, k, S);
    return g.type !== 12
      ? (r(w, we.UNEXPECTED_EMPTY_LINKED_MODIFIER, E.lastStartLoc, 0),
        (L.value = ''),
        i(L, k, S),
        { nextConsumeToken: g, node: L })
      : (g.value == null &&
          r(w, we.UNEXPECTED_LEXICAL_ANALYSIS, E.lastStartLoc, 0, Tt(g)),
        (L.value = g.value || ''),
        i(L, w.currentOffset(), w.currentPosition()),
        { node: L });
  }
  function h(w, g) {
    const E = w.context(),
      k = o(7, E.offset, E.startLoc);
    return (k.value = g), i(k, w.currentOffset(), w.currentPosition()), k;
  }
  function f(w) {
    const g = w.context(),
      E = o(6, g.offset, g.startLoc);
    let k = w.nextToken();
    if (k.type === 9) {
      const S = c(w);
      (E.modifier = S.node), (k = S.nextConsumeToken || w.nextToken());
    }
    switch (
      (k.type !== 10 &&
        r(w, we.UNEXPECTED_LEXICAL_ANALYSIS, g.lastStartLoc, 0, Tt(k)),
      (k = w.nextToken()),
      k.type === 2 && (k = w.nextToken()),
      k.type)
    ) {
      case 11:
        k.value == null &&
          r(w, we.UNEXPECTED_LEXICAL_ANALYSIS, g.lastStartLoc, 0, Tt(k)),
          (E.key = h(w, k.value || ''));
        break;
      case 5:
        k.value == null &&
          r(w, we.UNEXPECTED_LEXICAL_ANALYSIS, g.lastStartLoc, 0, Tt(k)),
          (E.key = a(w, k.value || ''));
        break;
      case 6:
        k.value == null &&
          r(w, we.UNEXPECTED_LEXICAL_ANALYSIS, g.lastStartLoc, 0, Tt(k)),
          (E.key = l(w, k.value || ''));
        break;
      case 7:
        k.value == null &&
          r(w, we.UNEXPECTED_LEXICAL_ANALYSIS, g.lastStartLoc, 0, Tt(k)),
          (E.key = u(w, k.value || ''));
        break;
      default:
        r(w, we.UNEXPECTED_EMPTY_LINKED_KEY, g.lastStartLoc, 0);
        const S = w.context(),
          L = o(7, S.offset, S.startLoc);
        return (
          (L.value = ''),
          i(L, S.offset, S.startLoc),
          (E.key = L),
          i(E, S.offset, S.startLoc),
          { nextConsumeToken: k, node: E }
        );
    }
    return i(E, w.currentOffset(), w.currentPosition()), { node: E };
  }
  function m(w) {
    const g = w.context(),
      E = g.currentType === 1 ? w.currentOffset() : g.offset,
      k = g.currentType === 1 ? g.endLoc : g.startLoc,
      S = o(2, E, k);
    S.items = [];
    let L = null;
    do {
      const D = L || w.nextToken();
      switch (((L = null), D.type)) {
        case 0:
          D.value == null &&
            r(w, we.UNEXPECTED_LEXICAL_ANALYSIS, g.lastStartLoc, 0, Tt(D)),
            S.items.push(s(w, D.value || ''));
          break;
        case 6:
          D.value == null &&
            r(w, we.UNEXPECTED_LEXICAL_ANALYSIS, g.lastStartLoc, 0, Tt(D)),
            S.items.push(l(w, D.value || ''));
          break;
        case 5:
          D.value == null &&
            r(w, we.UNEXPECTED_LEXICAL_ANALYSIS, g.lastStartLoc, 0, Tt(D)),
            S.items.push(a(w, D.value || ''));
          break;
        case 7:
          D.value == null &&
            r(w, we.UNEXPECTED_LEXICAL_ANALYSIS, g.lastStartLoc, 0, Tt(D)),
            S.items.push(u(w, D.value || ''));
          break;
        case 8:
          const z = f(w);
          S.items.push(z.node), (L = z.nextConsumeToken || null);
          break;
      }
    } while (g.currentType !== 14 && g.currentType !== 1);
    const T = g.currentType === 1 ? g.lastOffset : w.currentOffset(),
      R = g.currentType === 1 ? g.lastEndLoc : w.currentPosition();
    return i(S, T, R), S;
  }
  function P(w, g, E, k) {
    const S = w.context();
    let L = k.items.length === 0;
    const T = o(1, g, E);
    (T.cases = []), T.cases.push(k);
    do {
      const R = m(w);
      L || (L = R.items.length === 0), T.cases.push(R);
    } while (S.currentType !== 14);
    return (
      L && r(w, we.MUST_HAVE_MESSAGES_IN_PLURAL, E, 0),
      i(T, w.currentOffset(), w.currentPosition()),
      T
    );
  }
  function A(w) {
    const g = w.context(),
      { offset: E, startLoc: k } = g,
      S = m(w);
    return g.currentType === 14 ? S : P(w, E, k, S);
  }
  function O(w) {
    const g = mv(w, nt({}, e)),
      E = g.context(),
      k = o(0, E.offset, E.startLoc);
    return (
      t && k.loc && (k.loc.source = w),
      (k.body = A(g)),
      E.currentType !== 14 &&
        r(
          g,
          we.UNEXPECTED_LEXICAL_ANALYSIS,
          E.lastStartLoc,
          0,
          w[E.offset] || ''
        ),
      i(k, g.currentOffset(), g.currentPosition()),
      k
    );
  }
  return { parse: O };
}
function Tt(e) {
  if (e.type === 14) return 'EOF';
  const t = (e.value || '').replace(/\r?\n/gu, '\\n');
  return t.length > 10 ? t.slice(0, 9) + '\u2026' : t;
}
function yv(e, t = {}) {
  const n = { ast: e, helpers: new Set() };
  return { context: () => n, helper: (i) => (n.helpers.add(i), i) };
}
function va(e, t) {
  for (let n = 0; n < e.length; n++) hl(e[n], t);
}
function hl(e, t) {
  switch (e.type) {
    case 1:
      va(e.cases, t), t.helper('plural');
      break;
    case 2:
      va(e.items, t);
      break;
    case 6:
      hl(e.key, t), t.helper('linked'), t.helper('type');
      break;
    case 5:
      t.helper('interpolate'), t.helper('list');
      break;
    case 4:
      t.helper('interpolate'), t.helper('named');
      break;
  }
}
function _v(e, t = {}) {
  const n = yv(e);
  n.helper('normalize'), e.body && hl(e.body, n);
  const r = n.context();
  e.helpers = Array.from(r.helpers);
}
function Ev(e, t) {
  const { sourceMap: n, filename: r, breakLineCode: o, needIndent: i } = t,
    s = {
      source: e.loc.source,
      filename: r,
      code: '',
      column: 1,
      line: 1,
      offset: 0,
      map: void 0,
      breakLineCode: o,
      needIndent: i,
      indentLevel: 0,
    },
    l = () => s;
  function a(A, O) {
    s.code += A;
  }
  function u(A, O = !0) {
    const w = O ? o : '';
    a(i ? w + '  '.repeat(A) : w);
  }
  function c(A = !0) {
    const O = ++s.indentLevel;
    A && u(O);
  }
  function h(A = !0) {
    const O = --s.indentLevel;
    A && u(O);
  }
  function f() {
    u(s.indentLevel);
  }
  return {
    context: l,
    push: a,
    indent: c,
    deindent: h,
    newline: f,
    helper: (A) => `_${A}`,
    needIndent: () => s.needIndent,
  };
}
function wv(e, t) {
  const { helper: n } = e;
  e.push(`${n('linked')}(`),
    tr(e, t.key),
    t.modifier
      ? (e.push(', '), tr(e, t.modifier), e.push(', _type'))
      : e.push(', undefined, _type'),
    e.push(')');
}
function Cv(e, t) {
  const { helper: n, needIndent: r } = e;
  e.push(`${n('normalize')}([`), e.indent(r());
  const o = t.items.length;
  for (let i = 0; i < o && (tr(e, t.items[i]), i !== o - 1); i++) e.push(', ');
  e.deindent(r()), e.push('])');
}
function kv(e, t) {
  const { helper: n, needIndent: r } = e;
  if (t.cases.length > 1) {
    e.push(`${n('plural')}([`), e.indent(r());
    const o = t.cases.length;
    for (let i = 0; i < o && (tr(e, t.cases[i]), i !== o - 1); i++)
      e.push(', ');
    e.deindent(r()), e.push('])');
  }
}
function Pv(e, t) {
  t.body ? tr(e, t.body) : e.push('null');
}
function tr(e, t) {
  const { helper: n } = e;
  switch (t.type) {
    case 0:
      Pv(e, t);
      break;
    case 1:
      kv(e, t);
      break;
    case 2:
      Cv(e, t);
      break;
    case 6:
      wv(e, t);
      break;
    case 8:
      e.push(JSON.stringify(t.value), t);
      break;
    case 7:
      e.push(JSON.stringify(t.value), t);
      break;
    case 5:
      e.push(`${n('interpolate')}(${n('list')}(${t.index}))`, t);
      break;
    case 4:
      e.push(`${n('interpolate')}(${n('named')}(${JSON.stringify(t.key)}))`, t);
      break;
    case 9:
      e.push(JSON.stringify(t.value), t);
      break;
    case 3:
      e.push(JSON.stringify(t.value), t);
      break;
  }
}
const xv = (e, t = {}) => {
  const n = oe(t.mode) ? t.mode : 'normal',
    r = oe(t.filename) ? t.filename : 'message.intl',
    o = !!t.sourceMap,
    i =
      t.breakLineCode != null
        ? t.breakLineCode
        : n === 'arrow'
        ? ';'
        : `
`,
    s = t.needIndent ? t.needIndent : n !== 'arrow',
    l = e.helpers || [],
    a = Ev(e, {
      mode: n,
      filename: r,
      sourceMap: o,
      breakLineCode: i,
      needIndent: s,
    });
  a.push(n === 'normal' ? 'function __msg__ (ctx) {' : '(ctx) => {'),
    a.indent(s),
    l.length > 0 &&
      (a.push(`const { ${l.map((h) => `${h}: _${h}`).join(', ')} } = ctx`),
      a.newline()),
    a.push('return '),
    tr(a, e),
    a.deindent(s),
    a.push('}');
  const { code: u, map: c } = a.context();
  return { ast: e, code: u, map: c ? c.toJSON() : void 0 };
};
function Sv(e, t = {}) {
  const n = nt({}, t),
    o = bv(n).parse(e);
  return _v(o, n), xv(o, n);
}
/*!
 * devtools-if v9.2.2
 * (c) 2022 kazuya kawaguchi
 * Released under the MIT License.
 */ const Lv = {
  I18nInit: 'i18n:init',
  FunctionTranslate: 'function:translate',
};
/*!
 * core-base v9.2.2
 * (c) 2022 kazuya kawaguchi
 * Released under the MIT License.
 */ const mn = [];
mn[0] = { w: [0], i: [3, 0], ['[']: [4], o: [7] };
mn[1] = { w: [1], ['.']: [2], ['[']: [4], o: [7] };
mn[2] = { w: [2], i: [3, 0], [0]: [3, 0] };
mn[3] = {
  i: [3, 0],
  [0]: [3, 0],
  w: [1, 1],
  ['.']: [2, 1],
  ['[']: [4, 1],
  o: [7, 1],
};
mn[4] = {
  ["'"]: [5, 0],
  ['"']: [6, 0],
  ['[']: [4, 2],
  [']']: [1, 3],
  o: 8,
  l: [4, 0],
};
mn[5] = { ["'"]: [4, 0], o: 8, l: [5, 0] };
mn[6] = { ['"']: [4, 0], o: 8, l: [6, 0] };
const Mv = /^\s?(?:true|false|-?[\d.]+|'[^']*'|"[^"]*")\s?$/;
function Av(e) {
  return Mv.test(e);
}
function Tv(e) {
  const t = e.charCodeAt(0),
    n = e.charCodeAt(e.length - 1);
  return t === n && (t === 34 || t === 39) ? e.slice(1, -1) : e;
}
function Ov(e) {
  if (e == null) return 'o';
  switch (e.charCodeAt(0)) {
    case 91:
    case 93:
    case 46:
    case 34:
    case 39:
      return e;
    case 95:
    case 36:
    case 45:
      return 'i';
    case 9:
    case 10:
    case 13:
    case 160:
    case 65279:
    case 8232:
    case 8233:
      return 'w';
  }
  return 'i';
}
function Rv(e) {
  const t = e.trim();
  return e.charAt(0) === '0' && isNaN(parseInt(e))
    ? !1
    : Av(t)
    ? Tv(t)
    : '*' + t;
}
function Iv(e) {
  const t = [];
  let n = -1,
    r = 0,
    o = 0,
    i,
    s,
    l,
    a,
    u,
    c,
    h;
  const f = [];
  (f[0] = () => {
    s === void 0 ? (s = l) : (s += l);
  }),
    (f[1] = () => {
      s !== void 0 && (t.push(s), (s = void 0));
    }),
    (f[2] = () => {
      f[0](), o++;
    }),
    (f[3] = () => {
      if (o > 0) o--, (r = 4), f[0]();
      else {
        if (((o = 0), s === void 0 || ((s = Rv(s)), s === !1))) return !1;
        f[1]();
      }
    });
  function m() {
    const P = e[n + 1];
    if ((r === 5 && P === "'") || (r === 6 && P === '"'))
      return n++, (l = '\\' + P), f[0](), !0;
  }
  for (; r !== null; )
    if ((n++, (i = e[n]), !(i === '\\' && m()))) {
      if (
        ((a = Ov(i)),
        (h = mn[r]),
        (u = h[a] || h.l || 8),
        u === 8 ||
          ((r = u[0]),
          u[1] !== void 0 && ((c = f[u[1]]), c && ((l = i), c() === !1))))
      )
        return;
      if (r === 7) return t;
    }
}
const pa = new Map();
function Fv(e, t) {
  return xe(e) ? e[t] : null;
}
function Hv(e, t) {
  if (!xe(e)) return null;
  let n = pa.get(t);
  if ((n || ((n = Iv(t)), n && pa.set(t, n)), !n)) return null;
  const r = n.length;
  let o = e,
    i = 0;
  for (; i < r; ) {
    const s = o[n[i]];
    if (s === void 0) return null;
    (o = s), i++;
  }
  return o;
}
const Dv = (e) => e,
  Nv = (e) => '',
  Bv = 'text',
  zv = (e) => (e.length === 0 ? '' : e.join('')),
  qv = sv;
function ba(e, t) {
  return (
    (e = Math.abs(e)),
    t === 2 ? (e ? (e > 1 ? 1 : 0) : 1) : e ? Math.min(e, 2) : 0
  );
}
function $v(e) {
  const t = $e(e.pluralIndex) ? e.pluralIndex : -1;
  return e.named && ($e(e.named.count) || $e(e.named.n))
    ? $e(e.named.count)
      ? e.named.count
      : $e(e.named.n)
      ? e.named.n
      : t
    : t;
}
function Vv(e, t) {
  t.count || (t.count = e), t.n || (t.n = e);
}
function jv(e = {}) {
  const t = e.locale,
    n = $v(e),
    r =
      xe(e.pluralRules) && oe(t) && We(e.pluralRules[t])
        ? e.pluralRules[t]
        : ba,
    o = xe(e.pluralRules) && oe(t) && We(e.pluralRules[t]) ? ba : void 0,
    i = (w) => w[r(n, w.length, o)],
    s = e.list || [],
    l = (w) => s[w],
    a = e.named || {};
  $e(e.pluralIndex) && Vv(n, a);
  const u = (w) => a[w];
  function c(w) {
    const g = We(e.messages)
      ? e.messages(w)
      : xe(e.messages)
      ? e.messages[w]
      : !1;
    return g || (e.parent ? e.parent.message(w) : Nv);
  }
  const h = (w) => (e.modifiers ? e.modifiers[w] : Dv),
    f =
      _e(e.processor) && We(e.processor.normalize) ? e.processor.normalize : zv,
    m =
      _e(e.processor) && We(e.processor.interpolate)
        ? e.processor.interpolate
        : qv,
    P = _e(e.processor) && oe(e.processor.type) ? e.processor.type : Bv,
    O = {
      list: l,
      named: u,
      plural: i,
      linked: (w, ...g) => {
        const [E, k] = g;
        let S = 'text',
          L = '';
        g.length === 1
          ? xe(E)
            ? ((L = E.modifier || L), (S = E.type || S))
            : oe(E) && (L = E || L)
          : g.length === 2 && (oe(E) && (L = E || L), oe(k) && (S = k || S));
        let T = c(w)(O);
        return S === 'vnode' && Fe(T) && L && (T = T[0]), L ? h(L)(T, S) : T;
      },
      message: c,
      type: P,
      interpolate: m,
      normalize: f,
    };
  return O;
}
let Uv = null;
Lv.FunctionTranslate;
function Wv(e) {
  return (t) => Uv;
}
const Gv = {
  NOT_FOUND_KEY: 1,
  FALLBACK_TO_TRANSLATE: 2,
  CANNOT_FORMAT_NUMBER: 3,
  FALLBACK_TO_NUMBER_FORMAT: 4,
  CANNOT_FORMAT_DATE: 5,
  FALLBACK_TO_DATE_FORMAT: 6,
  __EXTEND_POINT__: 7,
};
function Kv(e, t, n) {
  return [
    ...new Set([
      n,
      ...(Fe(t) ? t : xe(t) ? Object.keys(t) : oe(t) ? [t] : [n]),
    ]),
  ];
}
function Cf(e, t, n) {
  const r = oe(n) ? n : ml,
    o = e;
  o.__localeChainCache || (o.__localeChainCache = new Map());
  let i = o.__localeChainCache.get(r);
  if (!i) {
    i = [];
    let s = [n];
    for (; Fe(s); ) s = ya(i, s, t);
    const l = Fe(t) || !_e(t) ? t : t.default ? t.default : null;
    (s = oe(l) ? [l] : l),
      Fe(s) && ya(i, s, !1),
      o.__localeChainCache.set(r, i);
  }
  return i;
}
function ya(e, t, n) {
  let r = !0;
  for (let o = 0; o < t.length && Oe(r); o++) {
    const i = t[o];
    oe(i) && (r = Qv(e, t[o], n));
  }
  return r;
}
function Qv(e, t, n) {
  let r;
  const o = t.split('-');
  do {
    const i = o.join('-');
    (r = Xv(e, i, n)), o.splice(-1, 1);
  } while (o.length && r === !0);
  return r;
}
function Xv(e, t, n) {
  let r = !1;
  if (!e.includes(t) && ((r = !0), t)) {
    r = t[t.length - 1] !== '!';
    const o = t.replace(/!/g, '');
    e.push(o), (Fe(n) || _e(n)) && n[o] && (r = n[o]);
  }
  return r;
}
const Yv = '9.2.2',
  li = -1,
  ml = 'en-US',
  _a = '',
  Ea = (e) => `${e.charAt(0).toLocaleUpperCase()}${e.substr(1)}`;
function Jv() {
  return {
    upper: (e, t) =>
      t === 'text' && oe(e)
        ? e.toUpperCase()
        : t === 'vnode' && xe(e) && '__v_isVNode' in e
        ? e.children.toUpperCase()
        : e,
    lower: (e, t) =>
      t === 'text' && oe(e)
        ? e.toLowerCase()
        : t === 'vnode' && xe(e) && '__v_isVNode' in e
        ? e.children.toLowerCase()
        : e,
    capitalize: (e, t) =>
      t === 'text' && oe(e)
        ? Ea(e)
        : t === 'vnode' && xe(e) && '__v_isVNode' in e
        ? Ea(e.children)
        : e,
  };
}
let kf;
function Zv(e) {
  kf = e;
}
let Pf;
function ep(e) {
  Pf = e;
}
let xf;
function tp(e) {
  xf = e;
}
let wa = 0;
function np(e = {}) {
  const t = oe(e.version) ? e.version : Yv,
    n = oe(e.locale) ? e.locale : ml,
    r =
      Fe(e.fallbackLocale) ||
      _e(e.fallbackLocale) ||
      oe(e.fallbackLocale) ||
      e.fallbackLocale === !1
        ? e.fallbackLocale
        : n,
    o = _e(e.messages) ? e.messages : { [n]: {} },
    i = _e(e.datetimeFormats) ? e.datetimeFormats : { [n]: {} },
    s = _e(e.numberFormats) ? e.numberFormats : { [n]: {} },
    l = nt({}, e.modifiers || {}, Jv()),
    a = e.pluralRules || {},
    u = We(e.missing) ? e.missing : null,
    c = Oe(e.missingWarn) || Ho(e.missingWarn) ? e.missingWarn : !0,
    h = Oe(e.fallbackWarn) || Ho(e.fallbackWarn) ? e.fallbackWarn : !0,
    f = !!e.fallbackFormat,
    m = !!e.unresolving,
    P = We(e.postTranslation) ? e.postTranslation : null,
    A = _e(e.processor) ? e.processor : null,
    O = Oe(e.warnHtmlMessage) ? e.warnHtmlMessage : !0,
    w = !!e.escapeParameter,
    g = We(e.messageCompiler) ? e.messageCompiler : kf,
    E = We(e.messageResolver) ? e.messageResolver : Pf || Fv,
    k = We(e.localeFallbacker) ? e.localeFallbacker : xf || Kv,
    S = xe(e.fallbackContext) ? e.fallbackContext : void 0,
    L = We(e.onWarn) ? e.onWarn : ov,
    T = e,
    R = xe(T.__datetimeFormatters) ? T.__datetimeFormatters : new Map(),
    D = xe(T.__numberFormatters) ? T.__numberFormatters : new Map(),
    z = xe(T.__meta) ? T.__meta : {};
  wa++;
  const j = {
    version: t,
    cid: wa,
    locale: n,
    fallbackLocale: r,
    messages: o,
    modifiers: l,
    pluralRules: a,
    missing: u,
    missingWarn: c,
    fallbackWarn: h,
    fallbackFormat: f,
    unresolving: m,
    postTranslation: P,
    processor: A,
    warnHtmlMessage: O,
    escapeParameter: w,
    messageCompiler: g,
    messageResolver: E,
    localeFallbacker: k,
    fallbackContext: S,
    onWarn: L,
    __meta: z,
  };
  return (
    (j.datetimeFormats = i),
    (j.numberFormats = s),
    (j.__datetimeFormatters = R),
    (j.__numberFormatters = D),
    j
  );
}
function gl(e, t, n, r, o) {
  const { missing: i, onWarn: s } = e;
  if (i !== null) {
    const l = i(e, n, t, o);
    return oe(l) ? l : t;
  } else return t;
}
function gr(e, t, n) {
  const r = e;
  (r.__localeChainCache = new Map()), e.localeFallbacker(e, n, t);
}
const rp = (e) => e;
let Ca = Object.create(null);
function op(e, t = {}) {
  {
    const r = (t.onCacheKey || rp)(e),
      o = Ca[r];
    if (o) return o;
    let i = !1;
    const s = t.onError || lv;
    t.onError = (u) => {
      (i = !0), s(u);
    };
    const { code: l } = Sv(e, t),
      a = new Function(`return ${l}`)();
    return i ? a : (Ca[r] = a);
  }
}
let Sf = we.__EXTEND_POINT__;
const Pi = () => ++Sf,
  jn = {
    INVALID_ARGUMENT: Sf,
    INVALID_DATE_ARGUMENT: Pi(),
    INVALID_ISO_DATE_ARGUMENT: Pi(),
    __EXTEND_POINT__: Pi(),
  };
function Un(e) {
  return si(e, null, void 0);
}
const ka = () => '',
  On = (e) => We(e);
function Pa(e, ...t) {
  const {
      fallbackFormat: n,
      postTranslation: r,
      unresolving: o,
      messageCompiler: i,
      fallbackLocale: s,
      messages: l,
    } = e,
    [a, u] = gs(...t),
    c = Oe(u.missingWarn) ? u.missingWarn : e.missingWarn,
    h = Oe(u.fallbackWarn) ? u.fallbackWarn : e.fallbackWarn,
    f = Oe(u.escapeParameter) ? u.escapeParameter : e.escapeParameter,
    m = !!u.resolvedMessage,
    P =
      oe(u.default) || Oe(u.default)
        ? Oe(u.default)
          ? i
            ? a
            : () => a
          : u.default
        : n
        ? i
          ? a
          : () => a
        : '',
    A = n || P !== '',
    O = oe(u.locale) ? u.locale : e.locale;
  f && ip(u);
  let [w, g, E] = m ? [a, O, l[O] || {}] : Lf(e, a, O, s, h, c),
    k = w,
    S = a;
  if (
    (!m && !(oe(k) || On(k)) && A && ((k = P), (S = k)),
    !m && (!(oe(k) || On(k)) || !oe(g)))
  )
    return o ? li : a;
  let L = !1;
  const T = () => {
      L = !0;
    },
    R = On(k) ? k : Mf(e, a, g, k, S, T);
  if (L) return k;
  const D = ap(e, g, E, u),
    z = jv(D),
    j = sp(e, R, z);
  return r ? r(j, a) : j;
}
function ip(e) {
  Fe(e.list)
    ? (e.list = e.list.map((t) => (oe(t) ? ma(t) : t)))
    : xe(e.named) &&
      Object.keys(e.named).forEach((t) => {
        oe(e.named[t]) && (e.named[t] = ma(e.named[t]));
      });
}
function Lf(e, t, n, r, o, i) {
  const { messages: s, onWarn: l, messageResolver: a, localeFallbacker: u } = e,
    c = u(e, r, n);
  let h = {},
    f,
    m = null;
  const P = 'translate';
  for (
    let A = 0;
    A < c.length &&
    ((f = c[A]),
    (h = s[f] || {}),
    (m = a(h, t)) === null && (m = h[t]),
    !(oe(m) || We(m)));
    A++
  ) {
    const O = gl(e, t, f, i, P);
    O !== t && (m = O);
  }
  return [m, f, h];
}
function Mf(e, t, n, r, o, i) {
  const { messageCompiler: s, warnHtmlMessage: l } = e;
  if (On(r)) {
    const u = r;
    return (u.locale = u.locale || n), (u.key = u.key || t), u;
  }
  if (s == null) {
    const u = () => r;
    return (u.locale = n), (u.key = t), u;
  }
  const a = s(r, lp(e, n, o, r, l, i));
  return (a.locale = n), (a.key = t), (a.source = r), a;
}
function sp(e, t, n) {
  return t(n);
}
function gs(...e) {
  const [t, n, r] = e,
    o = {};
  if (!oe(t) && !$e(t) && !On(t)) throw Un(jn.INVALID_ARGUMENT);
  const i = $e(t) ? String(t) : (On(t), t);
  return (
    $e(n)
      ? (o.plural = n)
      : oe(n)
      ? (o.default = n)
      : _e(n) && !ii(n)
      ? (o.named = n)
      : Fe(n) && (o.list = n),
    $e(r) ? (o.plural = r) : oe(r) ? (o.default = r) : _e(r) && nt(o, r),
    [i, o]
  );
}
function lp(e, t, n, r, o, i) {
  return {
    warnHtmlMessage: o,
    onError: (s) => {
      throw (i && i(s), s);
    },
    onCacheKey: (s) => tv(t, n, s),
  };
}
function ap(e, t, n, r) {
  const {
      modifiers: o,
      pluralRules: i,
      messageResolver: s,
      fallbackLocale: l,
      fallbackWarn: a,
      missingWarn: u,
      fallbackContext: c,
    } = e,
    f = {
      locale: t,
      modifiers: o,
      pluralRules: i,
      messages: (m) => {
        let P = s(n, m);
        if (P == null && c) {
          const [, , A] = Lf(c, m, t, l, a, u);
          P = s(A, m);
        }
        if (oe(P)) {
          let A = !1;
          const w = Mf(e, m, t, P, m, () => {
            A = !0;
          });
          return A ? ka : w;
        } else return On(P) ? P : ka;
      },
    };
  return (
    e.processor && (f.processor = e.processor),
    r.list && (f.list = r.list),
    r.named && (f.named = r.named),
    $e(r.plural) && (f.pluralIndex = r.plural),
    f
  );
}
function xa(e, ...t) {
  const {
      datetimeFormats: n,
      unresolving: r,
      fallbackLocale: o,
      onWarn: i,
      localeFallbacker: s,
    } = e,
    { __datetimeFormatters: l } = e,
    [a, u, c, h] = vs(...t),
    f = Oe(c.missingWarn) ? c.missingWarn : e.missingWarn;
  Oe(c.fallbackWarn) ? c.fallbackWarn : e.fallbackWarn;
  const m = !!c.part,
    P = oe(c.locale) ? c.locale : e.locale,
    A = s(e, o, P);
  if (!oe(a) || a === '') return new Intl.DateTimeFormat(P, h).format(u);
  let O = {},
    w,
    g = null;
  const E = 'datetime format';
  for (
    let L = 0;
    L < A.length && ((w = A[L]), (O = n[w] || {}), (g = O[a]), !_e(g));
    L++
  )
    gl(e, a, w, f, E);
  if (!_e(g) || !oe(w)) return r ? li : a;
  let k = `${w}__${a}`;
  ii(h) || (k = `${k}__${JSON.stringify(h)}`);
  let S = l.get(k);
  return (
    S || ((S = new Intl.DateTimeFormat(w, nt({}, g, h))), l.set(k, S)),
    m ? S.formatToParts(u) : S.format(u)
  );
}
const Af = [
  'localeMatcher',
  'weekday',
  'era',
  'year',
  'month',
  'day',
  'hour',
  'minute',
  'second',
  'timeZoneName',
  'formatMatcher',
  'hour12',
  'timeZone',
  'dateStyle',
  'timeStyle',
  'calendar',
  'dayPeriod',
  'numberingSystem',
  'hourCycle',
  'fractionalSecondDigits',
];
function vs(...e) {
  const [t, n, r, o] = e,
    i = {};
  let s = {},
    l;
  if (oe(t)) {
    const a = t.match(/(\d{4}-\d{2}-\d{2})(T|\s)?(.*)/);
    if (!a) throw Un(jn.INVALID_ISO_DATE_ARGUMENT);
    const u = a[3]
      ? a[3].trim().startsWith('T')
        ? `${a[1].trim()}${a[3].trim()}`
        : `${a[1].trim()}T${a[3].trim()}`
      : a[1].trim();
    l = new Date(u);
    try {
      l.toISOString();
    } catch {
      throw Un(jn.INVALID_ISO_DATE_ARGUMENT);
    }
  } else if (rv(t)) {
    if (isNaN(t.getTime())) throw Un(jn.INVALID_DATE_ARGUMENT);
    l = t;
  } else if ($e(t)) l = t;
  else throw Un(jn.INVALID_ARGUMENT);
  return (
    oe(n)
      ? (i.key = n)
      : _e(n) &&
        Object.keys(n).forEach((a) => {
          Af.includes(a) ? (s[a] = n[a]) : (i[a] = n[a]);
        }),
    oe(r) ? (i.locale = r) : _e(r) && (s = r),
    _e(o) && (s = o),
    [i.key || '', l, i, s]
  );
}
function Sa(e, t, n) {
  const r = e;
  for (const o in n) {
    const i = `${t}__${o}`;
    !r.__datetimeFormatters.has(i) || r.__datetimeFormatters.delete(i);
  }
}
function La(e, ...t) {
  const {
      numberFormats: n,
      unresolving: r,
      fallbackLocale: o,
      onWarn: i,
      localeFallbacker: s,
    } = e,
    { __numberFormatters: l } = e,
    [a, u, c, h] = ps(...t),
    f = Oe(c.missingWarn) ? c.missingWarn : e.missingWarn;
  Oe(c.fallbackWarn) ? c.fallbackWarn : e.fallbackWarn;
  const m = !!c.part,
    P = oe(c.locale) ? c.locale : e.locale,
    A = s(e, o, P);
  if (!oe(a) || a === '') return new Intl.NumberFormat(P, h).format(u);
  let O = {},
    w,
    g = null;
  const E = 'number format';
  for (
    let L = 0;
    L < A.length && ((w = A[L]), (O = n[w] || {}), (g = O[a]), !_e(g));
    L++
  )
    gl(e, a, w, f, E);
  if (!_e(g) || !oe(w)) return r ? li : a;
  let k = `${w}__${a}`;
  ii(h) || (k = `${k}__${JSON.stringify(h)}`);
  let S = l.get(k);
  return (
    S || ((S = new Intl.NumberFormat(w, nt({}, g, h))), l.set(k, S)),
    m ? S.formatToParts(u) : S.format(u)
  );
}
const Tf = [
  'localeMatcher',
  'style',
  'currency',
  'currencyDisplay',
  'currencySign',
  'useGrouping',
  'minimumIntegerDigits',
  'minimumFractionDigits',
  'maximumFractionDigits',
  'minimumSignificantDigits',
  'maximumSignificantDigits',
  'compactDisplay',
  'notation',
  'signDisplay',
  'unit',
  'unitDisplay',
  'roundingMode',
  'roundingPriority',
  'roundingIncrement',
  'trailingZeroDisplay',
];
function ps(...e) {
  const [t, n, r, o] = e,
    i = {};
  let s = {};
  if (!$e(t)) throw Un(jn.INVALID_ARGUMENT);
  const l = t;
  return (
    oe(n)
      ? (i.key = n)
      : _e(n) &&
        Object.keys(n).forEach((a) => {
          Tf.includes(a) ? (s[a] = n[a]) : (i[a] = n[a]);
        }),
    oe(r) ? (i.locale = r) : _e(r) && (s = r),
    _e(o) && (s = o),
    [i.key || '', l, i, s]
  );
}
function Ma(e, t, n) {
  const r = e;
  for (const o in n) {
    const i = `${t}__${o}`;
    !r.__numberFormatters.has(i) || r.__numberFormatters.delete(i);
  }
}
/*!
 * vue-i18n v9.2.2
 * (c) 2022 kazuya kawaguchi
 * Released under the MIT License.
 */ const up = '9.2.2';
Gv.__EXTEND_POINT__;
let Of = we.__EXTEND_POINT__;
const lt = () => ++Of,
  dt = {
    UNEXPECTED_RETURN_TYPE: Of,
    INVALID_ARGUMENT: lt(),
    MUST_BE_CALL_SETUP_TOP: lt(),
    NOT_INSLALLED: lt(),
    NOT_AVAILABLE_IN_LEGACY_MODE: lt(),
    REQUIRED_VALUE: lt(),
    INVALID_VALUE: lt(),
    CANNOT_SETUP_VUE_DEVTOOLS_PLUGIN: lt(),
    NOT_INSLALLED_WITH_PROVIDE: lt(),
    UNEXPECTED_ERROR: lt(),
    NOT_COMPATIBLE_LEGACY_VUE_I18N: lt(),
    BRIDGE_SUPPORT_VUE_2_ONLY: lt(),
    MUST_DEFINE_I18N_OPTION_IN_ALLOW_COMPOSITION: lt(),
    NOT_AVAILABLE_COMPOSITION_IN_LEGACY: lt(),
    __EXTEND_POINT__: lt(),
  };
function _t(e, ...t) {
  return si(e, null, void 0);
}
const bs = hn('__transrateVNode'),
  ys = hn('__datetimeParts'),
  _s = hn('__numberParts'),
  cp = hn('__setPluralRules');
hn('__intlifyMeta');
const fp = hn('__injectWithOption');
function Es(e) {
  if (!xe(e)) return e;
  for (const t in e)
    if (!!fl(e, t))
      if (!t.includes('.')) xe(e[t]) && Es(e[t]);
      else {
        const n = t.split('.'),
          r = n.length - 1;
        let o = e;
        for (let i = 0; i < r; i++) n[i] in o || (o[n[i]] = {}), (o = o[n[i]]);
        (o[n[r]] = e[t]), delete e[t], xe(o[n[r]]) && Es(o[n[r]]);
      }
  return e;
}
function Rf(e, t) {
  const { messages: n, __i18n: r, messageResolver: o, flatJson: i } = t,
    s = _e(n) ? n : Fe(r) ? {} : { [e]: {} };
  if (
    (Fe(r) &&
      r.forEach((l) => {
        if ('locale' in l && 'resource' in l) {
          const { locale: a, resource: u } = l;
          a ? ((s[a] = s[a] || {}), Ir(u, s[a])) : Ir(u, s);
        } else oe(l) && Ir(JSON.parse(l), s);
      }),
    o == null && i)
  )
    for (const l in s) fl(s, l) && Es(s[l]);
  return s;
}
const ao = (e) => !xe(e) || Fe(e);
function Ir(e, t) {
  if (ao(e) || ao(t)) throw _t(dt.INVALID_VALUE);
  for (const n in e)
    fl(e, n) && (ao(e[n]) || ao(t[n]) ? (t[n] = e[n]) : Ir(e[n], t[n]));
}
function dp(e) {
  return e.type;
}
function hp(e, t, n) {
  let r = xe(t.messages) ? t.messages : {};
  '__i18nGlobal' in n &&
    (r = Rf(e.locale.value, { messages: r, __i18n: n.__i18nGlobal }));
  const o = Object.keys(r);
  o.length &&
    o.forEach((i) => {
      e.mergeLocaleMessage(i, r[i]);
    });
  {
    if (xe(t.datetimeFormats)) {
      const i = Object.keys(t.datetimeFormats);
      i.length &&
        i.forEach((s) => {
          e.mergeDateTimeFormat(s, t.datetimeFormats[s]);
        });
    }
    if (xe(t.numberFormats)) {
      const i = Object.keys(t.numberFormats);
      i.length &&
        i.forEach((s) => {
          e.mergeNumberFormat(s, t.numberFormats[s]);
        });
    }
  }
}
function Aa(e) {
  return ke(Yr, null, e, 0);
}
let Ta = 0;
function Oa(e) {
  return (t, n, r, o) => e(n, r, Ee() || void 0, o);
}
function If(e = {}, t) {
  const { __root: n } = e,
    r = n === void 0;
  let o = Oe(e.inheritLocale) ? e.inheritLocale : !0;
  const i = ae(n && o ? n.locale.value : oe(e.locale) ? e.locale : ml),
    s = ae(
      n && o
        ? n.fallbackLocale.value
        : oe(e.fallbackLocale) ||
          Fe(e.fallbackLocale) ||
          _e(e.fallbackLocale) ||
          e.fallbackLocale === !1
        ? e.fallbackLocale
        : i.value
    ),
    l = ae(Rf(i.value, e)),
    a = ae(_e(e.datetimeFormats) ? e.datetimeFormats : { [i.value]: {} }),
    u = ae(_e(e.numberFormats) ? e.numberFormats : { [i.value]: {} });
  let c = n
      ? n.missingWarn
      : Oe(e.missingWarn) || Ho(e.missingWarn)
      ? e.missingWarn
      : !0,
    h = n
      ? n.fallbackWarn
      : Oe(e.fallbackWarn) || Ho(e.fallbackWarn)
      ? e.fallbackWarn
      : !0,
    f = n ? n.fallbackRoot : Oe(e.fallbackRoot) ? e.fallbackRoot : !0,
    m = !!e.fallbackFormat,
    P = We(e.missing) ? e.missing : null,
    A = We(e.missing) ? Oa(e.missing) : null,
    O = We(e.postTranslation) ? e.postTranslation : null,
    w = n ? n.warnHtmlMessage : Oe(e.warnHtmlMessage) ? e.warnHtmlMessage : !0,
    g = !!e.escapeParameter;
  const E = n ? n.modifiers : _e(e.modifiers) ? e.modifiers : {};
  let k = e.pluralRules || (n && n.pluralRules),
    S;
  (S = (() => {
    const y = {
      version: up,
      locale: i.value,
      fallbackLocale: s.value,
      messages: l.value,
      modifiers: E,
      pluralRules: k,
      missing: A === null ? void 0 : A,
      missingWarn: c,
      fallbackWarn: h,
      fallbackFormat: m,
      unresolving: !0,
      postTranslation: O === null ? void 0 : O,
      warnHtmlMessage: w,
      escapeParameter: g,
      messageResolver: e.messageResolver,
      __meta: { framework: 'vue' },
    };
    return (
      (y.datetimeFormats = a.value),
      (y.numberFormats = u.value),
      (y.__datetimeFormatters = _e(S) ? S.__datetimeFormatters : void 0),
      (y.__numberFormatters = _e(S) ? S.__numberFormatters : void 0),
      np(y)
    );
  })()),
    gr(S, i.value, s.value);
  function T() {
    return [i.value, s.value, l.value, a.value, u.value];
  }
  const R = H({
      get: () => i.value,
      set: (y) => {
        (i.value = y), (S.locale = i.value);
      },
    }),
    D = H({
      get: () => s.value,
      set: (y) => {
        (s.value = y), (S.fallbackLocale = s.value), gr(S, i.value, y);
      },
    }),
    z = H(() => l.value),
    j = H(() => a.value),
    N = H(() => u.value);
  function Y() {
    return We(O) ? O : null;
  }
  function $(y) {
    (O = y), (S.postTranslation = y);
  }
  function re() {
    return P;
  }
  function se(y) {
    y !== null && (A = Oa(y)), (P = y), (S.missing = A);
  }
  const V = (y, x, v, B, X, K) => {
    T();
    let ie;
    if (((ie = y(S)), $e(ie) && ie === li)) {
      const [pe, Ne] = x();
      return n && f ? B(n) : X(pe);
    } else {
      if (K(ie)) return ie;
      throw _t(dt.UNEXPECTED_RETURN_TYPE);
    }
  };
  function ee(...y) {
    return V(
      (x) => Reflect.apply(Pa, null, [x, ...y]),
      () => gs(...y),
      'translate',
      (x) => Reflect.apply(x.t, x, [...y]),
      (x) => x,
      (x) => oe(x)
    );
  }
  function de(...y) {
    const [x, v, B] = y;
    if (B && !xe(B)) throw _t(dt.INVALID_ARGUMENT);
    return ee(x, v, nt({ resolvedMessage: !0 }, B || {}));
  }
  function be(...y) {
    return V(
      (x) => Reflect.apply(xa, null, [x, ...y]),
      () => vs(...y),
      'datetime format',
      (x) => Reflect.apply(x.d, x, [...y]),
      () => _a,
      (x) => oe(x)
    );
  }
  function J(...y) {
    return V(
      (x) => Reflect.apply(La, null, [x, ...y]),
      () => ps(...y),
      'number format',
      (x) => Reflect.apply(x.n, x, [...y]),
      () => _a,
      (x) => oe(x)
    );
  }
  function ce(y) {
    return y.map((x) => (oe(x) || $e(x) || Oe(x) ? Aa(String(x)) : x));
  }
  const Pe = { normalize: ce, interpolate: (y) => y, type: 'vnode' };
  function W(...y) {
    return V(
      (x) => {
        let v;
        const B = x;
        try {
          (B.processor = Pe), (v = Reflect.apply(Pa, null, [B, ...y]));
        } finally {
          B.processor = null;
        }
        return v;
      },
      () => gs(...y),
      'translate',
      (x) => x[bs](...y),
      (x) => [Aa(x)],
      (x) => Fe(x)
    );
  }
  function ne(...y) {
    return V(
      (x) => Reflect.apply(La, null, [x, ...y]),
      () => ps(...y),
      'number format',
      (x) => x[_s](...y),
      () => [],
      (x) => oe(x) || Fe(x)
    );
  }
  function G(...y) {
    return V(
      (x) => Reflect.apply(xa, null, [x, ...y]),
      () => vs(...y),
      'datetime format',
      (x) => x[ys](...y),
      () => [],
      (x) => oe(x) || Fe(x)
    );
  }
  function te(y) {
    (k = y), (S.pluralRules = k);
  }
  function Z(y, x) {
    const v = oe(x) ? x : i.value,
      B = C(v);
    return S.messageResolver(B, y) !== null;
  }
  function he(y) {
    let x = null;
    const v = Cf(S, s.value, i.value);
    for (let B = 0; B < v.length; B++) {
      const X = l.value[v[B]] || {},
        K = S.messageResolver(X, y);
      if (K != null) {
        x = K;
        break;
      }
    }
    return x;
  }
  function le(y) {
    const x = he(y);
    return x != null ? x : n ? n.tm(y) || {} : {};
  }
  function C(y) {
    return l.value[y] || {};
  }
  function d(y, x) {
    (l.value[y] = x), (S.messages = l.value);
  }
  function b(y, x) {
    (l.value[y] = l.value[y] || {}), Ir(x, l.value[y]), (S.messages = l.value);
  }
  function M(y) {
    return a.value[y] || {};
  }
  function I(y, x) {
    (a.value[y] = x), (S.datetimeFormats = a.value), Sa(S, y, x);
  }
  function U(y, x) {
    (a.value[y] = nt(a.value[y] || {}, x)),
      (S.datetimeFormats = a.value),
      Sa(S, y, x);
  }
  function Q(y) {
    return u.value[y] || {};
  }
  function F(y, x) {
    (u.value[y] = x), (S.numberFormats = u.value), Ma(S, y, x);
  }
  function p(y, x) {
    (u.value[y] = nt(u.value[y] || {}, x)),
      (S.numberFormats = u.value),
      Ma(S, y, x);
  }
  Ta++,
    n &&
      hs &&
      (fe(n.locale, (y) => {
        o && ((i.value = y), (S.locale = y), gr(S, i.value, s.value));
      }),
      fe(n.fallbackLocale, (y) => {
        o && ((s.value = y), (S.fallbackLocale = y), gr(S, i.value, s.value));
      }));
  const _ = {
    id: Ta,
    locale: R,
    fallbackLocale: D,
    get inheritLocale() {
      return o;
    },
    set inheritLocale(y) {
      (o = y),
        y &&
          n &&
          ((i.value = n.locale.value),
          (s.value = n.fallbackLocale.value),
          gr(S, i.value, s.value));
    },
    get availableLocales() {
      return Object.keys(l.value).sort();
    },
    messages: z,
    get modifiers() {
      return E;
    },
    get pluralRules() {
      return k || {};
    },
    get isGlobal() {
      return r;
    },
    get missingWarn() {
      return c;
    },
    set missingWarn(y) {
      (c = y), (S.missingWarn = c);
    },
    get fallbackWarn() {
      return h;
    },
    set fallbackWarn(y) {
      (h = y), (S.fallbackWarn = h);
    },
    get fallbackRoot() {
      return f;
    },
    set fallbackRoot(y) {
      f = y;
    },
    get fallbackFormat() {
      return m;
    },
    set fallbackFormat(y) {
      (m = y), (S.fallbackFormat = m);
    },
    get warnHtmlMessage() {
      return w;
    },
    set warnHtmlMessage(y) {
      (w = y), (S.warnHtmlMessage = y);
    },
    get escapeParameter() {
      return g;
    },
    set escapeParameter(y) {
      (g = y), (S.escapeParameter = y);
    },
    t: ee,
    getLocaleMessage: C,
    setLocaleMessage: d,
    mergeLocaleMessage: b,
    getPostTranslationHandler: Y,
    setPostTranslationHandler: $,
    getMissingHandler: re,
    setMissingHandler: se,
    [cp]: te,
  };
  return (
    (_.datetimeFormats = j),
    (_.numberFormats = N),
    (_.rt = de),
    (_.te = Z),
    (_.tm = le),
    (_.d = be),
    (_.n = J),
    (_.getDateTimeFormat = M),
    (_.setDateTimeFormat = I),
    (_.mergeDateTimeFormat = U),
    (_.getNumberFormat = Q),
    (_.setNumberFormat = F),
    (_.mergeNumberFormat = p),
    (_[fp] = e.__injectWithOption),
    (_[bs] = W),
    (_[ys] = G),
    (_[_s] = ne),
    _
  );
}
const vl = {
  tag: { type: [String, Object] },
  locale: { type: String },
  scope: {
    type: String,
    validator: (e) => e === 'parent' || e === 'global',
    default: 'parent',
  },
  i18n: { type: Object },
};
function mp({ slots: e }, t) {
  return t.length === 1 && t[0] === 'default'
    ? (e.default ? e.default() : []).reduce(
        (r, o) => (r = [...r, ...(Fe(o.children) ? o.children : [o])]),
        []
      )
    : t.reduce((n, r) => {
        const o = e[r];
        return o && (n[r] = o()), n;
      }, {});
}
function Ff(e) {
  return Ct;
}
const Ra = {
  name: 'i18n-t',
  props: nt(
    {
      keypath: { type: String, required: !0 },
      plural: { type: [Number, String], validator: (e) => $e(e) || !isNaN(e) },
    },
    vl
  ),
  setup(e, t) {
    const { slots: n, attrs: r } = t,
      o = e.i18n || nr({ useScope: e.scope, __useComponent: !0 });
    return () => {
      const i = Object.keys(n).filter((h) => h !== '_'),
        s = {};
      e.locale && (s.locale = e.locale),
        e.plural !== void 0 && (s.plural = oe(e.plural) ? +e.plural : e.plural);
      const l = mp(t, i),
        a = o[bs](e.keypath, l, s),
        u = nt({}, r),
        c = oe(e.tag) || xe(e.tag) ? e.tag : Ff();
      return q(c, u, a);
    };
  },
};
function gp(e) {
  return Fe(e) && !oe(e[0]);
}
function Hf(e, t, n, r) {
  const { slots: o, attrs: i } = t;
  return () => {
    const s = { part: !0 };
    let l = {};
    e.locale && (s.locale = e.locale),
      oe(e.format)
        ? (s.key = e.format)
        : xe(e.format) &&
          (oe(e.format.key) && (s.key = e.format.key),
          (l = Object.keys(e.format).reduce(
            (f, m) => (n.includes(m) ? nt({}, f, { [m]: e.format[m] }) : f),
            {}
          )));
    const a = r(e.value, s, l);
    let u = [s.key];
    Fe(a)
      ? (u = a.map((f, m) => {
          const P = o[f.type],
            A = P ? P({ [f.type]: f.value, index: m, parts: a }) : [f.value];
          return gp(A) && (A[0].key = `${f.type}-${m}`), A;
        }))
      : oe(a) && (u = [a]);
    const c = nt({}, i),
      h = oe(e.tag) || xe(e.tag) ? e.tag : Ff();
    return q(h, c, u);
  };
}
const Ia = {
    name: 'i18n-n',
    props: nt(
      {
        value: { type: Number, required: !0 },
        format: { type: [String, Object] },
      },
      vl
    ),
    setup(e, t) {
      const n = e.i18n || nr({ useScope: 'parent', __useComponent: !0 });
      return Hf(e, t, Tf, (...r) => n[_s](...r));
    },
  },
  Fa = {
    name: 'i18n-d',
    props: nt(
      {
        value: { type: [Number, Date], required: !0 },
        format: { type: [String, Object] },
      },
      vl
    ),
    setup(e, t) {
      const n = e.i18n || nr({ useScope: 'parent', __useComponent: !0 });
      return Hf(e, t, Af, (...r) => n[ys](...r));
    },
  };
function vp(e, t) {
  const n = e;
  if (e.mode === 'composition') return n.__getInstance(t) || e.global;
  {
    const r = n.__getInstance(t);
    return r != null ? r.__composer : e.global.__composer;
  }
}
function pp(e) {
  const t = (s) => {
    const { instance: l, modifiers: a, value: u } = s;
    if (!l || !l.$) throw _t(dt.UNEXPECTED_ERROR);
    const c = vp(e, l.$),
      h = Ha(u);
    return [Reflect.apply(c.t, c, [...Da(h)]), c];
  };
  return {
    created: (s, l) => {
      const [a, u] = t(l);
      hs &&
        e.global === u &&
        (s.__i18nWatcher = fe(u.locale, () => {
          l.instance && l.instance.$forceUpdate();
        })),
        (s.__composer = u),
        (s.textContent = a);
    },
    unmounted: (s) => {
      hs &&
        s.__i18nWatcher &&
        (s.__i18nWatcher(), (s.__i18nWatcher = void 0), delete s.__i18nWatcher),
        s.__composer && ((s.__composer = void 0), delete s.__composer);
    },
    beforeUpdate: (s, { value: l }) => {
      if (s.__composer) {
        const a = s.__composer,
          u = Ha(l);
        s.textContent = Reflect.apply(a.t, a, [...Da(u)]);
      }
    },
    getSSRProps: (s) => {
      const [l] = t(s);
      return { textContent: l };
    },
  };
}
function Ha(e) {
  if (oe(e)) return { path: e };
  if (_e(e)) {
    if (!('path' in e)) throw _t(dt.REQUIRED_VALUE, 'path');
    return e;
  } else throw _t(dt.INVALID_VALUE);
}
function Da(e) {
  const { path: t, locale: n, args: r, choice: o, plural: i } = e,
    s = {},
    l = r || {};
  return (
    oe(n) && (s.locale = n),
    $e(o) && (s.plural = o),
    $e(i) && (s.plural = i),
    [t, l, s]
  );
}
function bp(e, t, ...n) {
  const r = _e(n[0]) ? n[0] : {},
    o = !!r.useI18nComponentName;
  (Oe(r.globalInstall) ? r.globalInstall : !0) &&
    (e.component(o ? 'i18n' : Ra.name, Ra),
    e.component(Ia.name, Ia),
    e.component(Fa.name, Fa)),
    e.directive('t', pp(t));
}
const yp = hn('global-vue-i18n');
function $_(e = {}, t) {
  const n = Oe(e.globalInjection) ? e.globalInjection : !0,
    r = !0,
    o = new Map(),
    [i, s] = _p(e),
    l = hn('');
  function a(h) {
    return o.get(h) || null;
  }
  function u(h, f) {
    o.set(h, f);
  }
  function c(h) {
    o.delete(h);
  }
  {
    const h = {
      get mode() {
        return 'composition';
      },
      get allowComposition() {
        return r;
      },
      async install(f, ...m) {
        (f.__VUE_I18N_SYMBOL__ = l),
          f.provide(f.__VUE_I18N_SYMBOL__, h),
          n && Lp(f, h.global),
          bp(f, h, ...m);
        const P = f.unmount;
        f.unmount = () => {
          h.dispose(), P();
        };
      },
      get global() {
        return s;
      },
      dispose() {
        i.stop();
      },
      __instances: o,
      __getInstance: a,
      __setInstance: u,
      __deleteInstance: c,
    };
    return h;
  }
}
function nr(e = {}) {
  const t = Ee();
  if (t == null) throw _t(dt.MUST_BE_CALL_SETUP_TOP);
  if (
    !t.isCE &&
    t.appContext.app != null &&
    !t.appContext.app.__VUE_I18N_SYMBOL__
  )
    throw _t(dt.NOT_INSLALLED);
  const n = Ep(t),
    r = Cp(n),
    o = dp(t),
    i = wp(e, o);
  if (i === 'global') return hp(r, e, o), r;
  if (i === 'parent') {
    let a = kp(n, t, e.__useComponent);
    return a == null && (a = r), a;
  }
  const s = n;
  let l = s.__getInstance(t);
  if (l == null) {
    const a = nt({}, e);
    '__i18n' in o && (a.__i18n = o.__i18n),
      r && (a.__root = r),
      (l = If(a)),
      Pp(s, t),
      s.__setInstance(t, l);
  }
  return l;
}
function _p(e, t, n) {
  const r = Qs();
  {
    const o = r.run(() => If(e));
    if (o == null) throw _t(dt.UNEXPECTED_ERROR);
    return [r, o];
  }
}
function Ep(e) {
  {
    const t = Qe(e.isCE ? yp : e.appContext.app.__VUE_I18N_SYMBOL__);
    if (!t)
      throw _t(e.isCE ? dt.NOT_INSLALLED_WITH_PROVIDE : dt.UNEXPECTED_ERROR);
    return t;
  }
}
function wp(e, t) {
  return ii(e)
    ? '__i18n' in t
      ? 'local'
      : 'global'
    : e.useScope
    ? e.useScope
    : 'local';
}
function Cp(e) {
  return e.mode === 'composition' ? e.global : e.global.__composer;
}
function kp(e, t, n = !1) {
  let r = null;
  const o = t.root;
  let i = t.parent;
  for (; i != null; ) {
    const s = e;
    if (
      (e.mode === 'composition' && (r = s.__getInstance(i)),
      r != null || o === i)
    )
      break;
    i = i.parent;
  }
  return r;
}
function Pp(e, t, n) {
  st(() => {}, t),
    ur(() => {
      e.__deleteInstance(t);
    }, t);
}
const xp = ['locale', 'fallbackLocale', 'availableLocales'],
  Sp = ['t', 'rt', 'd', 'n', 'tm'];
function Lp(e, t) {
  const n = Object.create(null);
  xp.forEach((r) => {
    const o = Object.getOwnPropertyDescriptor(t, r);
    if (!o) throw _t(dt.UNEXPECTED_ERROR);
    const i = Ae(o.value)
      ? {
          get() {
            return o.value.value;
          },
          set(s) {
            o.value.value = s;
          },
        }
      : {
          get() {
            return o.get && o.get();
          },
        };
    Object.defineProperty(n, r, i);
  }),
    (e.config.globalProperties.$i18n = n),
    Sp.forEach((r) => {
      const o = Object.getOwnPropertyDescriptor(t, r);
      if (!o || !o.value) throw _t(dt.UNEXPECTED_ERROR);
      Object.defineProperty(e.config.globalProperties, `$${r}`, o);
    });
}
Zv(op);
ep(Hv);
tp(Cf);
/*!
 * vue-router v4.1.6
 * (c) 2022 Eduardo San Martin Morote
 * @license MIT
 */ const Vn = typeof window != 'undefined';
function Mp(e) {
  return e.__esModule || e[Symbol.toStringTag] === 'Module';
}
const Ce = Object.assign;
function xi(e, t) {
  const n = {};
  for (const r in t) {
    const o = t[r];
    n[r] = Mt(o) ? o.map(e) : e(o);
  }
  return n;
}
const Fr = () => {},
  Mt = Array.isArray,
  Ap = /\/$/,
  Tp = (e) => e.replace(Ap, '');
function Si(e, t, n = '/') {
  let r,
    o = {},
    i = '',
    s = '';
  const l = t.indexOf('#');
  let a = t.indexOf('?');
  return (
    l < a && l >= 0 && (a = -1),
    a > -1 &&
      ((r = t.slice(0, a)),
      (i = t.slice(a + 1, l > -1 ? l : t.length)),
      (o = e(i))),
    l > -1 && ((r = r || t.slice(0, l)), (s = t.slice(l, t.length))),
    (r = Fp(r != null ? r : t, n)),
    { fullPath: r + (i && '?') + i + s, path: r, query: o, hash: s }
  );
}
function Op(e, t) {
  const n = t.query ? e(t.query) : '';
  return t.path + (n && '?') + n + (t.hash || '');
}
function Na(e, t) {
  return !t || !e.toLowerCase().startsWith(t.toLowerCase())
    ? e
    : e.slice(t.length) || '/';
}
function Rp(e, t, n) {
  const r = t.matched.length - 1,
    o = n.matched.length - 1;
  return (
    r > -1 &&
    r === o &&
    rr(t.matched[r], n.matched[o]) &&
    Df(t.params, n.params) &&
    e(t.query) === e(n.query) &&
    t.hash === n.hash
  );
}
function rr(e, t) {
  return (e.aliasOf || e) === (t.aliasOf || t);
}
function Df(e, t) {
  if (Object.keys(e).length !== Object.keys(t).length) return !1;
  for (const n in e) if (!Ip(e[n], t[n])) return !1;
  return !0;
}
function Ip(e, t) {
  return Mt(e) ? Ba(e, t) : Mt(t) ? Ba(t, e) : e === t;
}
function Ba(e, t) {
  return Mt(t)
    ? e.length === t.length && e.every((n, r) => n === t[r])
    : e.length === 1 && e[0] === t;
}
function Fp(e, t) {
  if (e.startsWith('/')) return e;
  if (!e) return t;
  const n = t.split('/'),
    r = e.split('/');
  let o = n.length - 1,
    i,
    s;
  for (i = 0; i < r.length; i++)
    if (((s = r[i]), s !== '.'))
      if (s === '..') o > 1 && o--;
      else break;
  return (
    n.slice(0, o).join('/') +
    '/' +
    r.slice(i - (i === r.length ? 1 : 0)).join('/')
  );
}
var Ur;
(function (e) {
  (e.pop = 'pop'), (e.push = 'push');
})(Ur || (Ur = {}));
var Hr;
(function (e) {
  (e.back = 'back'), (e.forward = 'forward'), (e.unknown = '');
})(Hr || (Hr = {}));
function Hp(e) {
  if (!e)
    if (Vn) {
      const t = document.querySelector('base');
      (e = (t && t.getAttribute('href')) || '/'),
        (e = e.replace(/^\w+:\/\/[^\/]+/, ''));
    } else e = '/';
  return e[0] !== '/' && e[0] !== '#' && (e = '/' + e), Tp(e);
}
const Dp = /^[^#]+#/;
function Np(e, t) {
  return e.replace(Dp, '#') + t;
}
function Bp(e, t) {
  const n = document.documentElement.getBoundingClientRect(),
    r = e.getBoundingClientRect();
  return {
    behavior: t.behavior,
    left: r.left - n.left - (t.left || 0),
    top: r.top - n.top - (t.top || 0),
  };
}
const ai = () => ({ left: window.pageXOffset, top: window.pageYOffset });
function zp(e) {
  let t;
  if ('el' in e) {
    const n = e.el,
      r = typeof n == 'string' && n.startsWith('#'),
      o =
        typeof n == 'string'
          ? r
            ? document.getElementById(n.slice(1))
            : document.querySelector(n)
          : n;
    if (!o) return;
    t = Bp(o, e);
  } else t = e;
  'scrollBehavior' in document.documentElement.style
    ? window.scrollTo(t)
    : window.scrollTo(
        t.left != null ? t.left : window.pageXOffset,
        t.top != null ? t.top : window.pageYOffset
      );
}
function za(e, t) {
  return (history.state ? history.state.position - t : -1) + e;
}
const ws = new Map();
function qp(e, t) {
  ws.set(e, t);
}
function $p(e) {
  const t = ws.get(e);
  return ws.delete(e), t;
}
let Vp = () => location.protocol + '//' + location.host;
function Nf(e, t) {
  const { pathname: n, search: r, hash: o } = t,
    i = e.indexOf('#');
  if (i > -1) {
    let l = o.includes(e.slice(i)) ? e.slice(i).length : 1,
      a = o.slice(l);
    return a[0] !== '/' && (a = '/' + a), Na(a, '');
  }
  return Na(n, e) + r + o;
}
function jp(e, t, n, r) {
  let o = [],
    i = [],
    s = null;
  const l = ({ state: f }) => {
    const m = Nf(e, location),
      P = n.value,
      A = t.value;
    let O = 0;
    if (f) {
      if (((n.value = m), (t.value = f), s && s === P)) {
        s = null;
        return;
      }
      O = A ? f.position - A.position : 0;
    } else r(m);
    o.forEach((w) => {
      w(n.value, P, {
        delta: O,
        type: Ur.pop,
        direction: O ? (O > 0 ? Hr.forward : Hr.back) : Hr.unknown,
      });
    });
  };
  function a() {
    s = n.value;
  }
  function u(f) {
    o.push(f);
    const m = () => {
      const P = o.indexOf(f);
      P > -1 && o.splice(P, 1);
    };
    return i.push(m), m;
  }
  function c() {
    const { history: f } = window;
    !f.state || f.replaceState(Ce({}, f.state, { scroll: ai() }), '');
  }
  function h() {
    for (const f of i) f();
    (i = []),
      window.removeEventListener('popstate', l),
      window.removeEventListener('beforeunload', c);
  }
  return (
    window.addEventListener('popstate', l),
    window.addEventListener('beforeunload', c),
    { pauseListeners: a, listen: u, destroy: h }
  );
}
function qa(e, t, n, r = !1, o = !1) {
  return {
    back: e,
    current: t,
    forward: n,
    replaced: r,
    position: window.history.length,
    scroll: o ? ai() : null,
  };
}
function Up(e) {
  const { history: t, location: n } = window,
    r = { value: Nf(e, n) },
    o = { value: t.state };
  o.value ||
    i(
      r.value,
      {
        back: null,
        current: r.value,
        forward: null,
        position: t.length - 1,
        replaced: !0,
        scroll: null,
      },
      !0
    );
  function i(a, u, c) {
    const h = e.indexOf('#'),
      f =
        h > -1
          ? (n.host && document.querySelector('base') ? e : e.slice(h)) + a
          : Vp() + e + a;
    try {
      t[c ? 'replaceState' : 'pushState'](u, '', f), (o.value = u);
    } catch (m) {
      console.error(m), n[c ? 'replace' : 'assign'](f);
    }
  }
  function s(a, u) {
    const c = Ce({}, t.state, qa(o.value.back, a, o.value.forward, !0), u, {
      position: o.value.position,
    });
    i(a, c, !0), (r.value = a);
  }
  function l(a, u) {
    const c = Ce({}, o.value, t.state, { forward: a, scroll: ai() });
    i(c.current, c, !0);
    const h = Ce({}, qa(r.value, a, null), { position: c.position + 1 }, u);
    i(a, h, !1), (r.value = a);
  }
  return { location: r, state: o, push: l, replace: s };
}
function Wp(e) {
  e = Hp(e);
  const t = Up(e),
    n = jp(e, t.state, t.location, t.replace);
  function r(i, s = !0) {
    s || n.pauseListeners(), history.go(i);
  }
  const o = Ce(
    { location: '', base: e, go: r, createHref: Np.bind(null, e) },
    t,
    n
  );
  return (
    Object.defineProperty(o, 'location', {
      enumerable: !0,
      get: () => t.location.value,
    }),
    Object.defineProperty(o, 'state', {
      enumerable: !0,
      get: () => t.state.value,
    }),
    o
  );
}
function Gp(e) {
  return (
    (e = location.host ? e || location.pathname + location.search : ''),
    e.includes('#') || (e += '#'),
    Wp(e)
  );
}
function Kp(e) {
  return typeof e == 'string' || (e && typeof e == 'object');
}
function Bf(e) {
  return typeof e == 'string' || typeof e == 'symbol';
}
const Jt = {
    path: '/',
    name: void 0,
    params: {},
    query: {},
    hash: '',
    fullPath: '/',
    matched: [],
    meta: {},
    redirectedFrom: void 0,
  },
  zf = Symbol('');
var $a;
(function (e) {
  (e[(e.aborted = 4)] = 'aborted'),
    (e[(e.cancelled = 8)] = 'cancelled'),
    (e[(e.duplicated = 16)] = 'duplicated');
})($a || ($a = {}));
function or(e, t) {
  return Ce(new Error(), { type: e, [zf]: !0 }, t);
}
function zt(e, t) {
  return e instanceof Error && zf in e && (t == null || !!(e.type & t));
}
const Va = '[^/]+?',
  Qp = { sensitive: !1, strict: !1, start: !0, end: !0 },
  Xp = /[.+*?^${}()[\]/\\]/g;
function Yp(e, t) {
  const n = Ce({}, Qp, t),
    r = [];
  let o = n.start ? '^' : '';
  const i = [];
  for (const u of e) {
    const c = u.length ? [] : [90];
    n.strict && !u.length && (o += '/');
    for (let h = 0; h < u.length; h++) {
      const f = u[h];
      let m = 40 + (n.sensitive ? 0.25 : 0);
      if (f.type === 0)
        h || (o += '/'), (o += f.value.replace(Xp, '\\$&')), (m += 40);
      else if (f.type === 1) {
        const { value: P, repeatable: A, optional: O, regexp: w } = f;
        i.push({ name: P, repeatable: A, optional: O });
        const g = w || Va;
        if (g !== Va) {
          m += 10;
          try {
            new RegExp(`(${g})`);
          } catch (k) {
            throw new Error(
              `Invalid custom RegExp for param "${P}" (${g}): ` + k.message
            );
          }
        }
        let E = A ? `((?:${g})(?:/(?:${g}))*)` : `(${g})`;
        h || (E = O && u.length < 2 ? `(?:/${E})` : '/' + E),
          O && (E += '?'),
          (o += E),
          (m += 20),
          O && (m += -8),
          A && (m += -20),
          g === '.*' && (m += -50);
      }
      c.push(m);
    }
    r.push(c);
  }
  if (n.strict && n.end) {
    const u = r.length - 1;
    r[u][r[u].length - 1] += 0.7000000000000001;
  }
  n.strict || (o += '/?'), n.end ? (o += '$') : n.strict && (o += '(?:/|$)');
  const s = new RegExp(o, n.sensitive ? '' : 'i');
  function l(u) {
    const c = u.match(s),
      h = {};
    if (!c) return null;
    for (let f = 1; f < c.length; f++) {
      const m = c[f] || '',
        P = i[f - 1];
      h[P.name] = m && P.repeatable ? m.split('/') : m;
    }
    return h;
  }
  function a(u) {
    let c = '',
      h = !1;
    for (const f of e) {
      (!h || !c.endsWith('/')) && (c += '/'), (h = !1);
      for (const m of f)
        if (m.type === 0) c += m.value;
        else if (m.type === 1) {
          const { value: P, repeatable: A, optional: O } = m,
            w = P in u ? u[P] : '';
          if (Mt(w) && !A)
            throw new Error(
              `Provided param "${P}" is an array but it is not repeatable (* or + modifiers)`
            );
          const g = Mt(w) ? w.join('/') : w;
          if (!g)
            if (O)
              f.length < 2 &&
                (c.endsWith('/') ? (c = c.slice(0, -1)) : (h = !0));
            else throw new Error(`Missing required param "${P}"`);
          c += g;
        }
    }
    return c || '/';
  }
  return { re: s, score: r, keys: i, parse: l, stringify: a };
}
function Jp(e, t) {
  let n = 0;
  for (; n < e.length && n < t.length; ) {
    const r = t[n] - e[n];
    if (r) return r;
    n++;
  }
  return e.length < t.length
    ? e.length === 1 && e[0] === 40 + 40
      ? -1
      : 1
    : e.length > t.length
    ? t.length === 1 && t[0] === 40 + 40
      ? 1
      : -1
    : 0;
}
function Zp(e, t) {
  let n = 0;
  const r = e.score,
    o = t.score;
  for (; n < r.length && n < o.length; ) {
    const i = Jp(r[n], o[n]);
    if (i) return i;
    n++;
  }
  if (Math.abs(o.length - r.length) === 1) {
    if (ja(r)) return 1;
    if (ja(o)) return -1;
  }
  return o.length - r.length;
}
function ja(e) {
  const t = e[e.length - 1];
  return e.length > 0 && t[t.length - 1] < 0;
}
const e0 = { type: 0, value: '' },
  t0 = /[a-zA-Z0-9_]/;
function n0(e) {
  if (!e) return [[]];
  if (e === '/') return [[e0]];
  if (!e.startsWith('/')) throw new Error(`Invalid path "${e}"`);
  function t(m) {
    throw new Error(`ERR (${n})/"${u}": ${m}`);
  }
  let n = 0,
    r = n;
  const o = [];
  let i;
  function s() {
    i && o.push(i), (i = []);
  }
  let l = 0,
    a,
    u = '',
    c = '';
  function h() {
    !u ||
      (n === 0
        ? i.push({ type: 0, value: u })
        : n === 1 || n === 2 || n === 3
        ? (i.length > 1 &&
            (a === '*' || a === '+') &&
            t(
              `A repeatable param (${u}) must be alone in its segment. eg: '/:ids+.`
            ),
          i.push({
            type: 1,
            value: u,
            regexp: c,
            repeatable: a === '*' || a === '+',
            optional: a === '*' || a === '?',
          }))
        : t('Invalid state to consume buffer'),
      (u = ''));
  }
  function f() {
    u += a;
  }
  for (; l < e.length; ) {
    if (((a = e[l++]), a === '\\' && n !== 2)) {
      (r = n), (n = 4);
      continue;
    }
    switch (n) {
      case 0:
        a === '/' ? (u && h(), s()) : a === ':' ? (h(), (n = 1)) : f();
        break;
      case 4:
        f(), (n = r);
        break;
      case 1:
        a === '('
          ? (n = 2)
          : t0.test(a)
          ? f()
          : (h(), (n = 0), a !== '*' && a !== '?' && a !== '+' && l--);
        break;
      case 2:
        a === ')'
          ? c[c.length - 1] == '\\'
            ? (c = c.slice(0, -1) + a)
            : (n = 3)
          : (c += a);
        break;
      case 3:
        h(), (n = 0), a !== '*' && a !== '?' && a !== '+' && l--, (c = '');
        break;
      default:
        t('Unknown state');
        break;
    }
  }
  return n === 2 && t(`Unfinished custom RegExp for param "${u}"`), h(), s(), o;
}
function r0(e, t, n) {
  const r = Yp(n0(e.path), n),
    o = Ce(r, { record: e, parent: t, children: [], alias: [] });
  return t && !o.record.aliasOf == !t.record.aliasOf && t.children.push(o), o;
}
function o0(e, t) {
  const n = [],
    r = new Map();
  t = Ga({ strict: !1, end: !0, sensitive: !1 }, t);
  function o(c) {
    return r.get(c);
  }
  function i(c, h, f) {
    const m = !f,
      P = i0(c);
    P.aliasOf = f && f.record;
    const A = Ga(t, c),
      O = [P];
    if ('alias' in c) {
      const E = typeof c.alias == 'string' ? [c.alias] : c.alias;
      for (const k of E)
        O.push(
          Ce({}, P, {
            components: f ? f.record.components : P.components,
            path: k,
            aliasOf: f ? f.record : P,
          })
        );
    }
    let w, g;
    for (const E of O) {
      const { path: k } = E;
      if (h && k[0] !== '/') {
        const S = h.record.path,
          L = S[S.length - 1] === '/' ? '' : '/';
        E.path = h.record.path + (k && L + k);
      }
      if (
        ((w = r0(E, h, A)),
        f
          ? f.alias.push(w)
          : ((g = g || w),
            g !== w && g.alias.push(w),
            m && c.name && !Wa(w) && s(c.name)),
        P.children)
      ) {
        const S = P.children;
        for (let L = 0; L < S.length; L++) i(S[L], w, f && f.children[L]);
      }
      (f = f || w),
        ((w.record.components && Object.keys(w.record.components).length) ||
          w.record.name ||
          w.record.redirect) &&
          a(w);
    }
    return g
      ? () => {
          s(g);
        }
      : Fr;
  }
  function s(c) {
    if (Bf(c)) {
      const h = r.get(c);
      h &&
        (r.delete(c),
        n.splice(n.indexOf(h), 1),
        h.children.forEach(s),
        h.alias.forEach(s));
    } else {
      const h = n.indexOf(c);
      h > -1 &&
        (n.splice(h, 1),
        c.record.name && r.delete(c.record.name),
        c.children.forEach(s),
        c.alias.forEach(s));
    }
  }
  function l() {
    return n;
  }
  function a(c) {
    let h = 0;
    for (
      ;
      h < n.length &&
      Zp(c, n[h]) >= 0 &&
      (c.record.path !== n[h].record.path || !qf(c, n[h]));

    )
      h++;
    n.splice(h, 0, c), c.record.name && !Wa(c) && r.set(c.record.name, c);
  }
  function u(c, h) {
    let f,
      m = {},
      P,
      A;
    if ('name' in c && c.name) {
      if (((f = r.get(c.name)), !f)) throw or(1, { location: c });
      (A = f.record.name),
        (m = Ce(
          Ua(
            h.params,
            f.keys.filter((g) => !g.optional).map((g) => g.name)
          ),
          c.params &&
            Ua(
              c.params,
              f.keys.map((g) => g.name)
            )
        )),
        (P = f.stringify(m));
    } else if ('path' in c)
      (P = c.path),
        (f = n.find((g) => g.re.test(P))),
        f && ((m = f.parse(P)), (A = f.record.name));
    else {
      if (((f = h.name ? r.get(h.name) : n.find((g) => g.re.test(h.path))), !f))
        throw or(1, { location: c, currentLocation: h });
      (A = f.record.name),
        (m = Ce({}, h.params, c.params)),
        (P = f.stringify(m));
    }
    const O = [];
    let w = f;
    for (; w; ) O.unshift(w.record), (w = w.parent);
    return { name: A, path: P, params: m, matched: O, meta: l0(O) };
  }
  return (
    e.forEach((c) => i(c)),
    {
      addRoute: i,
      resolve: u,
      removeRoute: s,
      getRoutes: l,
      getRecordMatcher: o,
    }
  );
}
function Ua(e, t) {
  const n = {};
  for (const r of t) r in e && (n[r] = e[r]);
  return n;
}
function i0(e) {
  return {
    path: e.path,
    redirect: e.redirect,
    name: e.name,
    meta: e.meta || {},
    aliasOf: void 0,
    beforeEnter: e.beforeEnter,
    props: s0(e),
    children: e.children || [],
    instances: {},
    leaveGuards: new Set(),
    updateGuards: new Set(),
    enterCallbacks: {},
    components:
      'components' in e
        ? e.components || null
        : e.component && { default: e.component },
  };
}
function s0(e) {
  const t = {},
    n = e.props || !1;
  if ('component' in e) t.default = n;
  else for (const r in e.components) t[r] = typeof n == 'boolean' ? n : n[r];
  return t;
}
function Wa(e) {
  for (; e; ) {
    if (e.record.aliasOf) return !0;
    e = e.parent;
  }
  return !1;
}
function l0(e) {
  return e.reduce((t, n) => Ce(t, n.meta), {});
}
function Ga(e, t) {
  const n = {};
  for (const r in e) n[r] = r in t ? t[r] : e[r];
  return n;
}
function qf(e, t) {
  return t.children.some((n) => n === e || qf(e, n));
}
const $f = /#/g,
  a0 = /&/g,
  u0 = /\//g,
  c0 = /=/g,
  f0 = /\?/g,
  Vf = /\+/g,
  d0 = /%5B/g,
  h0 = /%5D/g,
  jf = /%5E/g,
  m0 = /%60/g,
  Uf = /%7B/g,
  g0 = /%7C/g,
  Wf = /%7D/g,
  v0 = /%20/g;
function pl(e) {
  return encodeURI('' + e)
    .replace(g0, '|')
    .replace(d0, '[')
    .replace(h0, ']');
}
function p0(e) {
  return pl(e).replace(Uf, '{').replace(Wf, '}').replace(jf, '^');
}
function Cs(e) {
  return pl(e)
    .replace(Vf, '%2B')
    .replace(v0, '+')
    .replace($f, '%23')
    .replace(a0, '%26')
    .replace(m0, '`')
    .replace(Uf, '{')
    .replace(Wf, '}')
    .replace(jf, '^');
}
function b0(e) {
  return Cs(e).replace(c0, '%3D');
}
function y0(e) {
  return pl(e).replace($f, '%23').replace(f0, '%3F');
}
function _0(e) {
  return e == null ? '' : y0(e).replace(u0, '%2F');
}
function Do(e) {
  try {
    return decodeURIComponent('' + e);
  } catch {}
  return '' + e;
}
function E0(e) {
  const t = {};
  if (e === '' || e === '?') return t;
  const r = (e[0] === '?' ? e.slice(1) : e).split('&');
  for (let o = 0; o < r.length; ++o) {
    const i = r[o].replace(Vf, ' '),
      s = i.indexOf('='),
      l = Do(s < 0 ? i : i.slice(0, s)),
      a = s < 0 ? null : Do(i.slice(s + 1));
    if (l in t) {
      let u = t[l];
      Mt(u) || (u = t[l] = [u]), u.push(a);
    } else t[l] = a;
  }
  return t;
}
function Ka(e) {
  let t = '';
  for (let n in e) {
    const r = e[n];
    if (((n = b0(n)), r == null)) {
      r !== void 0 && (t += (t.length ? '&' : '') + n);
      continue;
    }
    (Mt(r) ? r.map((i) => i && Cs(i)) : [r && Cs(r)]).forEach((i) => {
      i !== void 0 &&
        ((t += (t.length ? '&' : '') + n), i != null && (t += '=' + i));
    });
  }
  return t;
}
function w0(e) {
  const t = {};
  for (const n in e) {
    const r = e[n];
    r !== void 0 &&
      (t[n] = Mt(r)
        ? r.map((o) => (o == null ? null : '' + o))
        : r == null
        ? r
        : '' + r);
  }
  return t;
}
const C0 = Symbol(''),
  Qa = Symbol(''),
  ui = Symbol(''),
  bl = Symbol(''),
  ks = Symbol('');
function vr() {
  let e = [];
  function t(r) {
    return (
      e.push(r),
      () => {
        const o = e.indexOf(r);
        o > -1 && e.splice(o, 1);
      }
    );
  }
  function n() {
    e = [];
  }
  return { add: t, list: () => e, reset: n };
}
function nn(e, t, n, r, o) {
  const i = r && (r.enterCallbacks[o] = r.enterCallbacks[o] || []);
  return () =>
    new Promise((s, l) => {
      const a = (h) => {
          h === !1
            ? l(or(4, { from: n, to: t }))
            : h instanceof Error
            ? l(h)
            : Kp(h)
            ? l(or(2, { from: t, to: h }))
            : (i &&
                r.enterCallbacks[o] === i &&
                typeof h == 'function' &&
                i.push(h),
              s());
        },
        u = e.call(r && r.instances[o], t, n, a);
      let c = Promise.resolve(u);
      e.length < 3 && (c = c.then(a)), c.catch((h) => l(h));
    });
}
function Li(e, t, n, r) {
  const o = [];
  for (const i of e)
    for (const s in i.components) {
      let l = i.components[s];
      if (!(t !== 'beforeRouteEnter' && !i.instances[s]))
        if (k0(l)) {
          const u = (l.__vccOpts || l)[t];
          u && o.push(nn(u, n, r, i, s));
        } else {
          let a = l();
          o.push(() =>
            a.then((u) => {
              if (!u)
                return Promise.reject(
                  new Error(`Couldn't resolve component "${s}" at "${i.path}"`)
                );
              const c = Mp(u) ? u.default : u;
              i.components[s] = c;
              const f = (c.__vccOpts || c)[t];
              return f && nn(f, n, r, i, s)();
            })
          );
        }
    }
  return o;
}
function k0(e) {
  return (
    typeof e == 'object' ||
    'displayName' in e ||
    'props' in e ||
    '__vccOpts' in e
  );
}
function Xa(e) {
  const t = Qe(ui),
    n = Qe(bl),
    r = H(() => t.resolve(et(e.to))),
    o = H(() => {
      const { matched: a } = r.value,
        { length: u } = a,
        c = a[u - 1],
        h = n.matched;
      if (!c || !h.length) return -1;
      const f = h.findIndex(rr.bind(null, c));
      if (f > -1) return f;
      const m = Ya(a[u - 2]);
      return u > 1 && Ya(c) === m && h[h.length - 1].path !== m
        ? h.findIndex(rr.bind(null, a[u - 2]))
        : f;
    }),
    i = H(() => o.value > -1 && L0(n.params, r.value.params)),
    s = H(
      () =>
        o.value > -1 &&
        o.value === n.matched.length - 1 &&
        Df(n.params, r.value.params)
    );
  function l(a = {}) {
    return S0(a)
      ? t[et(e.replace) ? 'replace' : 'push'](et(e.to)).catch(Fr)
      : Promise.resolve();
  }
  return {
    route: r,
    href: H(() => r.value.href),
    isActive: i,
    isExactActive: s,
    navigate: l,
  };
}
const P0 = Qr({
    name: 'RouterLink',
    compatConfig: { MODE: 3 },
    props: {
      to: { type: [String, Object], required: !0 },
      replace: Boolean,
      activeClass: String,
      exactActiveClass: String,
      custom: Boolean,
      ariaCurrentValue: { type: String, default: 'page' },
    },
    useLink: Xa,
    setup(e, { slots: t }) {
      const n = bt(Xa(e)),
        { options: r } = Qe(ui),
        o = H(() => ({
          [Ja(e.activeClass, r.linkActiveClass, 'router-link-active')]:
            n.isActive,
          [Ja(
            e.exactActiveClass,
            r.linkExactActiveClass,
            'router-link-exact-active'
          )]: n.isExactActive,
        }));
      return () => {
        const i = t.default && t.default(n);
        return e.custom
          ? i
          : q(
              'a',
              {
                'aria-current': n.isExactActive ? e.ariaCurrentValue : null,
                href: n.href,
                onClick: n.navigate,
                class: o.value,
              },
              i
            );
      };
    },
  }),
  x0 = P0;
function S0(e) {
  if (
    !(e.metaKey || e.altKey || e.ctrlKey || e.shiftKey) &&
    !e.defaultPrevented &&
    !(e.button !== void 0 && e.button !== 0)
  ) {
    if (e.currentTarget && e.currentTarget.getAttribute) {
      const t = e.currentTarget.getAttribute('target');
      if (/\b_blank\b/i.test(t)) return;
    }
    return e.preventDefault && e.preventDefault(), !0;
  }
}
function L0(e, t) {
  for (const n in t) {
    const r = t[n],
      o = e[n];
    if (typeof r == 'string') {
      if (r !== o) return !1;
    } else if (!Mt(o) || o.length !== r.length || r.some((i, s) => i !== o[s]))
      return !1;
  }
  return !0;
}
function Ya(e) {
  return e ? (e.aliasOf ? e.aliasOf.path : e.path) : '';
}
const Ja = (e, t, n) => (e != null ? e : t != null ? t : n),
  M0 = Qr({
    name: 'RouterView',
    inheritAttrs: !1,
    props: { name: { type: String, default: 'default' }, route: Object },
    compatConfig: { MODE: 3 },
    setup(e, { attrs: t, slots: n }) {
      const r = Qe(ks),
        o = H(() => e.route || r.value),
        i = Qe(Qa, 0),
        s = H(() => {
          let u = et(i);
          const { matched: c } = o.value;
          let h;
          for (; (h = c[u]) && !h.components; ) u++;
          return u;
        }),
        l = H(() => o.value.matched[s.value]);
      Qn(
        Qa,
        H(() => s.value + 1)
      ),
        Qn(C0, l),
        Qn(ks, o);
      const a = ae();
      return (
        fe(
          () => [a.value, l.value, e.name],
          ([u, c, h], [f, m, P]) => {
            c &&
              ((c.instances[h] = u),
              m &&
                m !== c &&
                u &&
                u === f &&
                (c.leaveGuards.size || (c.leaveGuards = m.leaveGuards),
                c.updateGuards.size || (c.updateGuards = m.updateGuards))),
              u &&
                c &&
                (!m || !rr(c, m) || !f) &&
                (c.enterCallbacks[h] || []).forEach((A) => A(u));
          },
          { flush: 'post' }
        ),
        () => {
          const u = o.value,
            c = e.name,
            h = l.value,
            f = h && h.components[c];
          if (!f) return Za(n.default, { Component: f, route: u });
          const m = h.props[c],
            P = m
              ? m === !0
                ? u.params
                : typeof m == 'function'
                ? m(u)
                : m
              : null,
            O = q(
              f,
              Ce({}, P, t, {
                onVnodeUnmounted: (w) => {
                  w.component.isUnmounted && (h.instances[c] = null);
                },
                ref: a,
              })
            );
          return Za(n.default, { Component: O, route: u }) || O;
        }
      );
    },
  });
function Za(e, t) {
  if (!e) return null;
  const n = e(t);
  return n.length === 1 ? n[0] : n;
}
const A0 = M0;
function T0(e) {
  const t = o0(e.routes, e),
    n = e.parseQuery || E0,
    r = e.stringifyQuery || Ka,
    o = e.history,
    i = vr(),
    s = vr(),
    l = vr(),
    a = qh(Jt);
  let u = Jt;
  Vn &&
    e.scrollBehavior &&
    'scrollRestoration' in history &&
    (history.scrollRestoration = 'manual');
  const c = xi.bind(null, (W) => '' + W),
    h = xi.bind(null, _0),
    f = xi.bind(null, Do);
  function m(W, ne) {
    let G, te;
    return (
      Bf(W) ? ((G = t.getRecordMatcher(W)), (te = ne)) : (te = W),
      t.addRoute(te, G)
    );
  }
  function P(W) {
    const ne = t.getRecordMatcher(W);
    ne && t.removeRoute(ne);
  }
  function A() {
    return t.getRoutes().map((W) => W.record);
  }
  function O(W) {
    return !!t.getRecordMatcher(W);
  }
  function w(W, ne) {
    if (((ne = Ce({}, ne || a.value)), typeof W == 'string')) {
      const C = Si(n, W, ne.path),
        d = t.resolve({ path: C.path }, ne),
        b = o.createHref(C.fullPath);
      return Ce(C, d, {
        params: f(d.params),
        hash: Do(C.hash),
        redirectedFrom: void 0,
        href: b,
      });
    }
    let G;
    if ('path' in W) G = Ce({}, W, { path: Si(n, W.path, ne.path).path });
    else {
      const C = Ce({}, W.params);
      for (const d in C) C[d] == null && delete C[d];
      (G = Ce({}, W, { params: h(W.params) })), (ne.params = h(ne.params));
    }
    const te = t.resolve(G, ne),
      Z = W.hash || '';
    te.params = c(f(te.params));
    const he = Op(r, Ce({}, W, { hash: p0(Z), path: te.path })),
      le = o.createHref(he);
    return Ce(
      { fullPath: he, hash: Z, query: r === Ka ? w0(W.query) : W.query || {} },
      te,
      { redirectedFrom: void 0, href: le }
    );
  }
  function g(W) {
    return typeof W == 'string' ? Si(n, W, a.value.path) : Ce({}, W);
  }
  function E(W, ne) {
    if (u !== W) return or(8, { from: ne, to: W });
  }
  function k(W) {
    return T(W);
  }
  function S(W) {
    return k(Ce(g(W), { replace: !0 }));
  }
  function L(W) {
    const ne = W.matched[W.matched.length - 1];
    if (ne && ne.redirect) {
      const { redirect: G } = ne;
      let te = typeof G == 'function' ? G(W) : G;
      return (
        typeof te == 'string' &&
          ((te =
            te.includes('?') || te.includes('#') ? (te = g(te)) : { path: te }),
          (te.params = {})),
        Ce(
          {
            query: W.query,
            hash: W.hash,
            params: 'path' in te ? {} : W.params,
          },
          te
        )
      );
    }
  }
  function T(W, ne) {
    const G = (u = w(W)),
      te = a.value,
      Z = W.state,
      he = W.force,
      le = W.replace === !0,
      C = L(G);
    if (C)
      return T(
        Ce(g(C), {
          state: typeof C == 'object' ? Ce({}, Z, C.state) : Z,
          force: he,
          replace: le,
        }),
        ne || G
      );
    const d = G;
    d.redirectedFrom = ne;
    let b;
    return (
      !he &&
        Rp(r, te, G) &&
        ((b = or(16, { to: d, from: te })), be(te, te, !0, !1)),
      (b ? Promise.resolve(b) : D(d, te))
        .catch((M) => (zt(M) ? (zt(M, 2) ? M : de(M)) : V(M, d, te)))
        .then((M) => {
          if (M) {
            if (zt(M, 2))
              return T(
                Ce({ replace: le }, g(M.to), {
                  state: typeof M.to == 'object' ? Ce({}, Z, M.to.state) : Z,
                  force: he,
                }),
                ne || d
              );
          } else M = j(d, te, !0, le, Z);
          return z(d, te, M), M;
        })
    );
  }
  function R(W, ne) {
    const G = E(W, ne);
    return G ? Promise.reject(G) : Promise.resolve();
  }
  function D(W, ne) {
    let G;
    const [te, Z, he] = O0(W, ne);
    G = Li(te.reverse(), 'beforeRouteLeave', W, ne);
    for (const C of te)
      C.leaveGuards.forEach((d) => {
        G.push(nn(d, W, ne));
      });
    const le = R.bind(null, W, ne);
    return (
      G.push(le),
      Nn(G)
        .then(() => {
          G = [];
          for (const C of i.list()) G.push(nn(C, W, ne));
          return G.push(le), Nn(G);
        })
        .then(() => {
          G = Li(Z, 'beforeRouteUpdate', W, ne);
          for (const C of Z)
            C.updateGuards.forEach((d) => {
              G.push(nn(d, W, ne));
            });
          return G.push(le), Nn(G);
        })
        .then(() => {
          G = [];
          for (const C of W.matched)
            if (C.beforeEnter && !ne.matched.includes(C))
              if (Mt(C.beforeEnter))
                for (const d of C.beforeEnter) G.push(nn(d, W, ne));
              else G.push(nn(C.beforeEnter, W, ne));
          return G.push(le), Nn(G);
        })
        .then(
          () => (
            W.matched.forEach((C) => (C.enterCallbacks = {})),
            (G = Li(he, 'beforeRouteEnter', W, ne)),
            G.push(le),
            Nn(G)
          )
        )
        .then(() => {
          G = [];
          for (const C of s.list()) G.push(nn(C, W, ne));
          return G.push(le), Nn(G);
        })
        .catch((C) => (zt(C, 8) ? C : Promise.reject(C)))
    );
  }
  function z(W, ne, G) {
    for (const te of l.list()) te(W, ne, G);
  }
  function j(W, ne, G, te, Z) {
    const he = E(W, ne);
    if (he) return he;
    const le = ne === Jt,
      C = Vn ? history.state : {};
    G &&
      (te || le
        ? o.replace(W.fullPath, Ce({ scroll: le && C && C.scroll }, Z))
        : o.push(W.fullPath, Z)),
      (a.value = W),
      be(W, ne, G, le),
      de();
  }
  let N;
  function Y() {
    N ||
      (N = o.listen((W, ne, G) => {
        if (!Pe.listening) return;
        const te = w(W),
          Z = L(te);
        if (Z) {
          T(Ce(Z, { replace: !0 }), te).catch(Fr);
          return;
        }
        u = te;
        const he = a.value;
        Vn && qp(za(he.fullPath, G.delta), ai()),
          D(te, he)
            .catch((le) =>
              zt(le, 12)
                ? le
                : zt(le, 2)
                ? (T(le.to, te)
                    .then((C) => {
                      zt(C, 20) &&
                        !G.delta &&
                        G.type === Ur.pop &&
                        o.go(-1, !1);
                    })
                    .catch(Fr),
                  Promise.reject())
                : (G.delta && o.go(-G.delta, !1), V(le, te, he))
            )
            .then((le) => {
              (le = le || j(te, he, !1)),
                le &&
                  (G.delta && !zt(le, 8)
                    ? o.go(-G.delta, !1)
                    : G.type === Ur.pop && zt(le, 20) && o.go(-1, !1)),
                z(te, he, le);
            })
            .catch(Fr);
      }));
  }
  let $ = vr(),
    re = vr(),
    se;
  function V(W, ne, G) {
    de(W);
    const te = re.list();
    return (
      te.length ? te.forEach((Z) => Z(W, ne, G)) : console.error(W),
      Promise.reject(W)
    );
  }
  function ee() {
    return se && a.value !== Jt
      ? Promise.resolve()
      : new Promise((W, ne) => {
          $.add([W, ne]);
        });
  }
  function de(W) {
    return (
      se ||
        ((se = !W),
        Y(),
        $.list().forEach(([ne, G]) => (W ? G(W) : ne())),
        $.reset()),
      W
    );
  }
  function be(W, ne, G, te) {
    const { scrollBehavior: Z } = e;
    if (!Vn || !Z) return Promise.resolve();
    const he =
      (!G && $p(za(W.fullPath, 0))) ||
      ((te || !G) && history.state && history.state.scroll) ||
      null;
    return Ge()
      .then(() => Z(W, ne, he))
      .then((le) => le && zp(le))
      .catch((le) => V(le, W, ne));
  }
  const J = (W) => o.go(W);
  let ce;
  const ve = new Set(),
    Pe = {
      currentRoute: a,
      listening: !0,
      addRoute: m,
      removeRoute: P,
      hasRoute: O,
      getRoutes: A,
      resolve: w,
      options: e,
      push: k,
      replace: S,
      go: J,
      back: () => J(-1),
      forward: () => J(1),
      beforeEach: i.add,
      beforeResolve: s.add,
      afterEach: l.add,
      onError: re.add,
      isReady: ee,
      install(W) {
        const ne = this;
        W.component('RouterLink', x0),
          W.component('RouterView', A0),
          (W.config.globalProperties.$router = ne),
          Object.defineProperty(W.config.globalProperties, '$route', {
            enumerable: !0,
            get: () => et(a),
          }),
          Vn &&
            !ce &&
            a.value === Jt &&
            ((ce = !0), k(o.location).catch((Z) => {}));
        const G = {};
        for (const Z in Jt) G[Z] = H(() => a.value[Z]);
        W.provide(ui, ne), W.provide(bl, bt(G)), W.provide(ks, a);
        const te = W.unmount;
        ve.add(W),
          (W.unmount = function () {
            ve.delete(W),
              ve.size < 1 &&
                ((u = Jt),
                N && N(),
                (N = null),
                (a.value = Jt),
                (ce = !1),
                (se = !1)),
              te();
          });
      },
    };
  return Pe;
}
function Nn(e) {
  return e.reduce((t, n) => t.then(() => n()), Promise.resolve());
}
function O0(e, t) {
  const n = [],
    r = [],
    o = [],
    i = Math.max(t.matched.length, e.matched.length);
  for (let s = 0; s < i; s++) {
    const l = t.matched[s];
    l && (e.matched.find((u) => rr(u, l)) ? r.push(l) : n.push(l));
    const a = e.matched[s];
    a && (t.matched.find((u) => rr(u, a)) || o.push(a));
  }
  return [n, r, o];
}
function R0() {
  return Qe(ui);
}
function I0() {
  return Qe(bl);
}
function Gf() {
  return Qe(mf);
}
const F0 = Object.prototype.toString,
  Mi = Object.prototype.hasOwnProperty,
  H0 = new Set(
    ['Boolean', 'Number', 'String', 'Function', 'Array', 'Date', 'RegExp'].map(
      (e) => '[object ' + e + ']'
    )
  );
function eu(e) {
  if (
    e !== Object(e) ||
    H0.has(F0.call(e)) === !0 ||
    (e.constructor &&
      Mi.call(e, 'constructor') === !1 &&
      Mi.call(e.constructor.prototype, 'isPrototypeOf') === !1)
  )
    return !1;
  let t;
  for (t in e);
  return t === void 0 || Mi.call(e, t);
}
function Kf() {
  let e,
    t,
    n,
    r,
    o,
    i,
    s = arguments[0] || {},
    l = 1,
    a = !1;
  const u = arguments.length;
  for (
    typeof s == 'boolean' && ((a = s), (s = arguments[1] || {}), (l = 2)),
      Object(s) !== s && typeof s != 'function' && (s = {}),
      u === l && ((s = this), l--);
    l < u;
    l++
  )
    if ((e = arguments[l]) !== null)
      for (t in e)
        (n = s[t]),
          (r = e[t]),
          s !== r &&
            (a === !0 && r && ((o = Array.isArray(r)) || eu(r) === !0)
              ? (o === !0
                  ? (i = Array.isArray(n) === !0 ? n : [])
                  : (i = eu(n) === !0 ? n : {}),
                (s[t] = Kf(a, i, r)))
              : r !== void 0 && (s[t] = r));
  return s;
}
let Eo = null,
  Ps;
const Dr = [];
function D0(e) {
  e.title &&
    ((e.title = e.titleTemplate ? e.titleTemplate(e.title) : e.title),
    delete e.titleTemplate),
    [
      ['meta', 'content'],
      ['link', 'href'],
    ].forEach((t) => {
      const n = e[t[0]],
        r = t[1];
      for (const o in n) {
        const i = n[o];
        i.template &&
          (Object.keys(i).length === 1
            ? delete n[o]
            : ((i[r] = i.template(i[r] || '')), delete i.template));
      }
    });
}
function N0(e, t) {
  if (Object.keys(e).length !== Object.keys(t).length) return !0;
  for (const n in e) if (e[n] !== t[n]) return !0;
}
function tu(e) {
  return ['class', 'style'].includes(e) === !1;
}
function nu(e) {
  return ['lang', 'dir'].includes(e) === !1;
}
function B0(e, t) {
  const n = {},
    r = {};
  return e === void 0
    ? { add: t, remove: r }
    : (e.title !== t.title && (n.title = t.title),
      ['meta', 'link', 'script', 'htmlAttr', 'bodyAttr'].forEach((o) => {
        const i = e[o],
          s = t[o];
        if (((r[o] = []), i == null)) {
          n[o] = s;
          return;
        }
        n[o] = {};
        for (const l in i) s.hasOwnProperty(l) === !1 && r[o].push(l);
        for (const l in s)
          i.hasOwnProperty(l) === !1
            ? (n[o][l] = s[l])
            : N0(i[l], s[l]) === !0 && (r[o].push(l), (n[o][l] = s[l]));
      }),
      { add: n, remove: r });
}
function z0({ add: e, remove: t }) {
  e.title && (document.title = e.title),
    Object.keys(t).length > 0 &&
      (['meta', 'link', 'script'].forEach((n) => {
        t[n].forEach((r) => {
          document.head.querySelector(`${n}[data-qmeta="${r}"]`).remove();
        });
      }),
      t.htmlAttr.filter(nu).forEach((n) => {
        document.documentElement.removeAttribute(n);
      }),
      t.bodyAttr.filter(tu).forEach((n) => {
        document.body.removeAttribute(n);
      })),
    ['meta', 'link', 'script'].forEach((n) => {
      const r = e[n];
      for (const o in r) {
        const i = document.createElement(n);
        for (const s in r[o]) s !== 'innerHTML' && i.setAttribute(s, r[o][s]);
        i.setAttribute('data-qmeta', o),
          n === 'script' && (i.innerHTML = r[o].innerHTML || ''),
          document.head.appendChild(i);
      }
    }),
    Object.keys(e.htmlAttr)
      .filter(nu)
      .forEach((n) => {
        document.documentElement.setAttribute(n, e.htmlAttr[n] || '');
      }),
    Object.keys(e.bodyAttr)
      .filter(tu)
      .forEach((n) => {
        document.body.setAttribute(n, e.bodyAttr[n] || '');
      });
}
function q0() {
  Eo = null;
  const e = {
    title: '',
    titleTemplate: null,
    meta: {},
    link: {},
    script: {},
    htmlAttr: {},
    bodyAttr: {},
  };
  for (let t = 0; t < Dr.length; t++) {
    const { active: n, val: r } = Dr[t];
    n === !0 && Kf(!0, e, r);
  }
  D0(e), z0(B0(Ps, e)), (Ps = e);
}
function pr() {
  Eo !== null && clearTimeout(Eo), (Eo = setTimeout(q0, 50));
}
var $0 = {
  install(e) {
    this.__installed !== !0 &&
      Lt.value === !0 &&
      ((Ps = window.__Q_META__),
      document.getElementById('qmeta-init').remove());
  },
};
function V0(e) {
  {
    const t = { active: !0 };
    if (typeof e == 'function') {
      const n = H(e);
      (t.val = n.value),
        fe(n, (r) => {
          (t.val = r), t.active === !0 && pr();
        });
    } else t.val = e;
    Dr.push(t),
      pr(),
      il(() => {
        (t.active = !0), pr();
      }),
      Xr(() => {
        (t.active = !1), pr();
      }),
      ur(() => {
        Dr.splice(Dr.indexOf(t), 1), pr();
      });
  }
}
const j0 = Qr({
  __name: 'App',
  setup(e) {
    const t = _o(),
      n = R0(),
      r = I0(),
      o = Gf(),
      i = nr(),
      { t: s } = nr();
    qc(() => {
      o.dark.set(t.themePreference === 'dark'),
        (Ee().appContext.app.config.errorHandler = (a) => {
          console.error(a),
            o
              .dialog({
                persistent: !0,
                message: s(
                  'An error has occurred. Please refresh this site or try again later.'
                ),
              })
              .onOk(() => location.reload());
        });
    });
    const l = (a) =>
      a.length > 1 && a.endsWith('/') ? a.substring(0, a.length - 1) : a;
    return (
      n.beforeEach(async (a, u, c) => {
        const h = a.params.language;
        h
          ? (h && _o().language !== h && _o().setLanguage(i, h, !1), c())
          : c({
              name: a.name,
              params: { ...a.params, language: h || t.language },
              query: a.query,
            });
      }),
      n.beforeEach((a, u, c) => {
        a !== u && o.loading.show({ delay: 300 }), c();
      }),
      V0(() => ({
        title: s('APP_NAME') + ' - ' + s('Learn to play blind chess'),
        meta: {
          description: {
            name: 'description',
            content: s(
              'ChessNinja is a website that teaches you to play chess blind.'
            ),
          },
          keywords: {
            name: 'keywords',
            content:
              'Chess, learn, blind, blind chess, play, exercises, Schach, lernen, Blindschach, spielen, \xDCbungen',
          },
        },
      })),
      n.afterEach(() => {
        o.loading.hide();
      }),
      t.$onAction(({ name: a, after: u, args: c }) => {
        u(() => {
          if (a == 'setLanguage' && (c.length < 3 || c[2])) {
            const h = r.params.language;
            if (t.language !== h) {
              const f = (n.currentRoute.value.fullPath + '/')
                .replaceAll('//', '')
                .replace(`/${h}/`, '/');
              n.push(l(`/${t.language}${f}`));
            }
            n.currentRoute.value.name === 'setup-board' &&
              setTimeout(() => {
                location.reload();
              });
          }
        });
      }),
      (a, u) => {
        const c = Zi('router-view');
        return Tr(), Or(c);
      }
    );
  },
});
function V_(e) {
  return e;
}
var Ai = () => Kg();
const xs = { xs: 18, sm: 24, md: 32, lg: 38, xl: 46 },
  Jr = { size: String };
function Zr(e, t = xs) {
  return H(() =>
    e.size !== void 0
      ? { fontSize: e.size in t ? `${t[e.size]}px` : e.size }
      : null
  );
}
const Se = (e) => jt(Qr(e)),
  Qf = (e) => jt(e);
function Ke(e, t) {
  return (e !== void 0 && e()) || t;
}
function Xf(e, t) {
  if (e !== void 0) {
    const n = e();
    if (n != null) return n.slice();
  }
  return t;
}
function rn(e, t) {
  return e !== void 0 ? t.concat(e()) : t;
}
function U0(e, t) {
  return e === void 0 ? t : t !== void 0 ? t.concat(e()) : e();
}
function j_(e, t, n, r, o, i) {
  t.key = r + o;
  const s = q(e, t, n);
  return o === !0 ? Mo(s, i()) : s;
}
const ru = '0 0 24 24',
  ou = (e) => e,
  Ti = (e) => `ionicons ${e}`,
  Yf = {
    'mdi-': (e) => `mdi ${e}`,
    'icon-': ou,
    'bt-': (e) => `bt ${e}`,
    'eva-': (e) => `eva ${e}`,
    'ion-md': Ti,
    'ion-ios': Ti,
    'ion-logo': Ti,
    'iconfont ': ou,
    'ti-': (e) => `themify-icon ${e}`,
    'bi-': (e) => `bootstrap-icons ${e}`,
  },
  Jf = { o_: '-outlined', r_: '-round', s_: '-sharp' },
  Zf = { sym_o_: '-outlined', sym_r_: '-rounded', sym_s_: '-sharp' },
  W0 = new RegExp('^(' + Object.keys(Yf).join('|') + ')'),
  G0 = new RegExp('^(' + Object.keys(Jf).join('|') + ')'),
  iu = new RegExp('^(' + Object.keys(Zf).join('|') + ')'),
  K0 = /^[Mm]\s?[-+]?\.?\d/,
  Q0 = /^img:/,
  X0 = /^svguse:/,
  Y0 = /^ion-/,
  J0 = /^(fa-(solid|regular|light|brands|duotone|thin)|[lf]a[srlbdk]?) /;
var fn = Se({
    name: 'QIcon',
    props: {
      ...Jr,
      tag: { type: String, default: 'i' },
      name: String,
      color: String,
      left: Boolean,
      right: Boolean,
    },
    setup(e, { slots: t }) {
      const {
          proxy: { $q: n },
        } = Ee(),
        r = Zr(e),
        o = H(
          () =>
            'q-icon' +
            (e.left === !0 ? ' on-left' : '') +
            (e.right === !0 ? ' on-right' : '') +
            (e.color !== void 0 ? ` text-${e.color}` : '')
        ),
        i = H(() => {
          let s,
            l = e.name;
          if (l === 'none' || !l) return { none: !0 };
          if (n.iconMapFn !== null) {
            const c = n.iconMapFn(l);
            if (c !== void 0)
              if (c.icon !== void 0) {
                if (((l = c.icon), l === 'none' || !l)) return { none: !0 };
              } else
                return {
                  cls: c.cls,
                  content: c.content !== void 0 ? c.content : ' ',
                };
          }
          if (K0.test(l) === !0) {
            const [c, h = ru] = l.split('|');
            return {
              svg: !0,
              viewBox: h,
              nodes: c.split('&&').map((f) => {
                const [m, P, A] = f.split('@@');
                return q('path', { style: P, d: m, transform: A });
              }),
            };
          }
          if (Q0.test(l) === !0) return { img: !0, src: l.substring(4) };
          if (X0.test(l) === !0) {
            const [c, h = ru] = l.split('|');
            return { svguse: !0, src: c.substring(7), viewBox: h };
          }
          let a = ' ';
          const u = l.match(W0);
          if (u !== null) s = Yf[u[1]](l);
          else if (J0.test(l) === !0) s = l;
          else if (Y0.test(l) === !0)
            s = `ionicons ion-${
              n.platform.is.ios === !0 ? 'ios' : 'md'
            }${l.substring(3)}`;
          else if (iu.test(l) === !0) {
            s = 'notranslate material-symbols';
            const c = l.match(iu);
            c !== null && ((l = l.substring(6)), (s += Zf[c[1]])), (a = l);
          } else {
            s = 'notranslate material-icons';
            const c = l.match(G0);
            c !== null && ((l = l.substring(2)), (s += Jf[c[1]])), (a = l);
          }
          return { cls: s, content: a };
        });
      return () => {
        const s = {
          class: o.value,
          style: r.value,
          'aria-hidden': 'true',
          role: 'presentation',
        };
        return i.value.none === !0
          ? q(e.tag, s, Ke(t.default))
          : i.value.img === !0
          ? q('span', s, rn(t.default, [q('img', { src: i.value.src })]))
          : i.value.svg === !0
          ? q(
              'span',
              s,
              rn(t.default, [
                q(
                  'svg',
                  { viewBox: i.value.viewBox || '0 0 24 24' },
                  i.value.nodes
                ),
              ])
            )
          : i.value.svguse === !0
          ? q(
              'span',
              s,
              rn(t.default, [
                q('svg', { viewBox: i.value.viewBox }, [
                  q('use', { 'xlink:href': i.value.src }),
                ]),
              ])
            )
          : (i.value.cls !== void 0 && (s.class += ' ' + i.value.cls),
            q(e.tag, s, rn(t.default, [i.value.content])));
      };
    },
  }),
  Z0 = Se({
    name: 'QAvatar',
    props: {
      ...Jr,
      fontSize: String,
      color: String,
      textColor: String,
      icon: String,
      square: Boolean,
      rounded: Boolean,
    },
    setup(e, { slots: t }) {
      const n = Zr(e),
        r = H(
          () =>
            'q-avatar' +
            (e.color ? ` bg-${e.color}` : '') +
            (e.textColor ? ` text-${e.textColor} q-chip--colored` : '') +
            (e.square === !0
              ? ' q-avatar--square'
              : e.rounded === !0
              ? ' rounded-borders'
              : '')
        ),
        o = H(() => (e.fontSize ? { fontSize: e.fontSize } : null));
      return () => {
        const i = e.icon !== void 0 ? [q(fn, { name: e.icon })] : void 0;
        return q('div', { class: r.value, style: n.value }, [
          q(
            'div',
            {
              class: 'q-avatar__content row flex-center overflow-hidden',
              style: o.value,
            },
            U0(t.default, i)
          ),
        ]);
      };
    },
  }),
  e1 = Se({
    name: 'QToolbarTitle',
    props: { shrink: Boolean },
    setup(e, { slots: t }) {
      const n = H(
        () =>
          'q-toolbar__title ellipsis' + (e.shrink === !0 ? ' col-shrink' : '')
      );
      return () => q('div', { class: n.value }, Ke(t.default));
    },
  });
const t1 = { size: { type: [Number, String], default: '1em' }, color: String };
function n1(e) {
  return {
    cSize: H(() => (e.size in xs ? `${xs[e.size]}px` : e.size)),
    classes: H(() => 'q-spinner' + (e.color ? ` text-${e.color}` : '')),
  };
}
var Wr = Se({
  name: 'QSpinner',
  props: { ...t1, thickness: { type: Number, default: 5 } },
  setup(e) {
    const { cSize: t, classes: n } = n1(e);
    return () =>
      q(
        'svg',
        {
          class: n.value + ' q-spinner-mat',
          width: t.value,
          height: t.value,
          viewBox: '25 25 50 50',
        },
        [
          q('circle', {
            class: 'path',
            cx: '50',
            cy: '50',
            r: '20',
            fill: 'none',
            stroke: 'currentColor',
            'stroke-width': e.thickness,
            'stroke-miterlimit': '10',
          }),
        ]
      );
  },
});
function Ss(e, t) {
  const n = e.style;
  for (const r in t) n[r] = t[r];
}
function r1(e) {
  if (e == null) return;
  if (typeof e == 'string')
    try {
      return document.querySelector(e) || void 0;
    } catch {
      return;
    }
  const t = et(e);
  if (t) return t.$el || t;
}
function ed(e, t) {
  if (e == null || e.contains(t) === !0) return !0;
  for (let n = e.nextElementSibling; n !== null; n = n.nextElementSibling)
    if (n.contains(t)) return !0;
  return !1;
}
function o1(e, t = 250) {
  let n = !1,
    r;
  return function () {
    return (
      n === !1 &&
        ((n = !0),
        setTimeout(() => {
          n = !1;
        }, t),
        (r = e.apply(this, arguments))),
      r
    );
  };
}
function su(e, t, n, r) {
  n.modifiers.stop === !0 && Ro(e);
  const o = n.modifiers.color;
  let i = n.modifiers.center;
  i = i === !0 || r === !0;
  const s = document.createElement('span'),
    l = document.createElement('span'),
    a = lf(e),
    { left: u, top: c, width: h, height: f } = t.getBoundingClientRect(),
    m = Math.sqrt(h * h + f * f),
    P = m / 2,
    A = `${(h - m) / 2}px`,
    O = i ? A : `${a.left - u - P}px`,
    w = `${(f - m) / 2}px`,
    g = i ? w : `${a.top - c - P}px`;
  (l.className = 'q-ripple__inner'),
    Ss(l, {
      height: `${m}px`,
      width: `${m}px`,
      transform: `translate3d(${O},${g},0) scale3d(.2,.2,1)`,
      opacity: 0,
    }),
    (s.className = `q-ripple${o ? ' text-' + o : ''}`),
    s.setAttribute('dir', 'ltr'),
    s.appendChild(l),
    t.appendChild(s);
  const E = () => {
    s.remove(), clearTimeout(k);
  };
  n.abort.push(E);
  let k = setTimeout(() => {
    l.classList.add('q-ripple__inner--enter'),
      (l.style.transform = `translate3d(${A},${w},0) scale3d(1,1,1)`),
      (l.style.opacity = 0.2),
      (k = setTimeout(() => {
        l.classList.remove('q-ripple__inner--enter'),
          l.classList.add('q-ripple__inner--leave'),
          (l.style.opacity = 0),
          (k = setTimeout(() => {
            s.remove(), n.abort.splice(n.abort.indexOf(E), 1);
          }, 275));
      }, 250));
  }, 50);
}
function lu(e, { modifiers: t, value: n, arg: r }) {
  const o = Object.assign({}, e.cfg.ripple, t, n);
  e.modifiers = {
    early: o.early === !0,
    stop: o.stop === !0,
    center: o.center === !0,
    color: o.color || r,
    keyCodes: [].concat(o.keyCodes || 13),
  };
}
var i1 = Qf({
  name: 'ripple',
  beforeMount(e, t) {
    const n = t.instance.$.appContext.config.globalProperties.$q.config || {};
    if (n.ripple === !1) return;
    const r = {
      cfg: n,
      enabled: t.value !== !1,
      modifiers: {},
      abort: [],
      start(o) {
        r.enabled === !0 &&
          o.qSkipRipple !== !0 &&
          o.type === (r.modifiers.early === !0 ? 'pointerdown' : 'click') &&
          su(o, e, r, o.qKeyEvent === !0);
      },
      keystart: o1((o) => {
        r.enabled === !0 &&
          o.qSkipRipple !== !0 &&
          cn(o, r.modifiers.keyCodes) === !0 &&
          o.type === `key${r.modifiers.early === !0 ? 'down' : 'up'}` &&
          su(o, e, r, !0);
      }, 300),
    };
    lu(r, t),
      (e.__qripple = r),
      us(r, 'main', [
        [e, 'pointerdown', 'start', 'passive'],
        [e, 'click', 'start', 'passive'],
        [e, 'keydown', 'keystart', 'passive'],
        [e, 'keyup', 'keystart', 'passive'],
      ]);
  },
  updated(e, t) {
    if (t.oldValue !== t.value) {
      const n = e.__qripple;
      n !== void 0 &&
        ((n.enabled = t.value !== !1),
        n.enabled === !0 && Object(t.value) === t.value && lu(n, t));
    }
  },
  beforeUnmount(e) {
    const t = e.__qripple;
    t !== void 0 &&
      (t.abort.forEach((n) => {
        n();
      }),
      af(t, 'main'),
      delete e._qripple);
  },
});
const td = {
    left: 'start',
    center: 'center',
    right: 'end',
    between: 'between',
    around: 'around',
    evenly: 'evenly',
    stretch: 'stretch',
  },
  s1 = Object.keys(td),
  nd = { align: { type: String, validator: (e) => s1.includes(e) } };
function rd(e) {
  return H(() => {
    const t =
      e.align === void 0 ? (e.vertical === !0 ? 'stretch' : 'left') : e.align;
    return `${e.vertical === !0 ? 'items' : 'justify'}-${td[t]}`;
  });
}
function wo(e) {
  if (Object(e.$parent) === e.$parent) return e.$parent;
  let { parent: t } = e.$;
  for (; Object(t) === t; ) {
    if (Object(t.proxy) === t.proxy) return t.proxy;
    t = t.parent;
  }
}
function od(e, t) {
  typeof t.type == 'symbol'
    ? Array.isArray(t.children) === !0 &&
      t.children.forEach((n) => {
        od(e, n);
      })
    : e.add(t);
}
function U_(e) {
  const t = new Set();
  return (
    e.forEach((n) => {
      od(t, n);
    }),
    Array.from(t)
  );
}
function id(e) {
  return e.appContext.config.globalProperties.$router !== void 0;
}
function sd(e) {
  return e.isUnmounted === !0 || e.isDeactivated === !0;
}
function au(e) {
  return e ? (e.aliasOf ? e.aliasOf.path : e.path) : '';
}
function uu(e, t) {
  return (e.aliasOf || e) === (t.aliasOf || t);
}
function l1(e, t) {
  for (const n in t) {
    const r = t[n],
      o = e[n];
    if (typeof r == 'string') {
      if (r !== o) return !1;
    } else if (
      Array.isArray(o) === !1 ||
      o.length !== r.length ||
      r.some((i, s) => i !== o[s])
    )
      return !1;
  }
  return !0;
}
function cu(e, t) {
  return Array.isArray(t) === !0
    ? e.length === t.length && e.every((n, r) => n === t[r])
    : e.length === 1 && e[0] === t;
}
function a1(e, t) {
  return Array.isArray(e) === !0
    ? cu(e, t)
    : Array.isArray(t) === !0
    ? cu(t, e)
    : e === t;
}
function u1(e, t) {
  if (Object.keys(e).length !== Object.keys(t).length) return !1;
  for (const n in e) if (a1(e[n], t[n]) === !1) return !1;
  return !0;
}
const ld = {
  to: [String, Object],
  replace: Boolean,
  exact: Boolean,
  activeClass: { type: String, default: 'q-router-link--active' },
  exactActiveClass: { type: String, default: 'q-router-link--exact-active' },
  href: String,
  target: String,
  disable: Boolean,
};
function ad({ fallbackTag: e, useDisableForRouterLinkProps: t = !0 } = {}) {
  const n = Ee(),
    { props: r, proxy: o, emit: i } = n,
    s = id(n),
    l = H(() => r.disable !== !0 && r.href !== void 0),
    a = H(
      t === !0
        ? () =>
            s === !0 &&
            r.disable !== !0 &&
            l.value !== !0 &&
            r.to !== void 0 &&
            r.to !== null &&
            r.to !== ''
        : () =>
            s === !0 &&
            l.value !== !0 &&
            r.to !== void 0 &&
            r.to !== null &&
            r.to !== ''
    ),
    u = H(() => (a.value === !0 ? g(r.to) : null)),
    c = H(() => u.value !== null),
    h = H(() => l.value === !0 || c.value === !0),
    f = H(() => (r.type === 'a' || h.value === !0 ? 'a' : r.tag || e || 'div')),
    m = H(() =>
      l.value === !0
        ? { href: r.href, target: r.target }
        : c.value === !0
        ? { href: u.value.href, target: r.target }
        : {}
    ),
    P = H(() => {
      if (c.value === !1) return -1;
      const { matched: S } = u.value,
        { length: L } = S,
        T = S[L - 1];
      if (T === void 0) return -1;
      const R = o.$route.matched;
      if (R.length === 0) return -1;
      const D = R.findIndex(uu.bind(null, T));
      if (D > -1) return D;
      const z = au(S[L - 2]);
      return L > 1 && au(T) === z && R[R.length - 1].path !== z
        ? R.findIndex(uu.bind(null, S[L - 2]))
        : D;
    }),
    A = H(
      () =>
        c.value === !0 && P.value !== -1 && l1(o.$route.params, u.value.params)
    ),
    O = H(
      () =>
        A.value === !0 &&
        P.value === o.$route.matched.length - 1 &&
        u1(o.$route.params, u.value.params)
    ),
    w = H(() =>
      c.value === !0
        ? O.value === !0
          ? ` ${r.exactActiveClass} ${r.activeClass}`
          : r.exact === !0
          ? ''
          : A.value === !0
          ? ` ${r.activeClass}`
          : ''
        : ''
    );
  function g(S) {
    try {
      return o.$router.resolve(S);
    } catch {}
    return null;
  }
  function E(
    S,
    { returnRouterError: L, to: T = r.to, replace: R = r.replace } = {}
  ) {
    if (r.disable === !0) return S.preventDefault(), Promise.resolve(!1);
    if (
      S.metaKey ||
      S.altKey ||
      S.ctrlKey ||
      S.shiftKey ||
      (S.button !== void 0 && S.button !== 0) ||
      r.target === '_blank'
    )
      return Promise.resolve(!1);
    S.preventDefault();
    const D = o.$router[R === !0 ? 'replace' : 'push'](T);
    return L === !0 ? D : D.then(() => {}).catch(() => {});
  }
  function k(S) {
    if (c.value === !0) {
      const L = (T) => E(S, T);
      i('click', S, L), S.defaultPrevented !== !0 && L();
    } else i('click', S);
  }
  return {
    hasRouterLink: c,
    hasHrefLink: l,
    hasLink: h,
    linkTag: f,
    resolvedLink: u,
    linkIsActive: A,
    linkIsExactActive: O,
    linkClass: w,
    linkAttrs: m,
    getLink: g,
    navigateToRouterLink: E,
    navigateOnClick: k,
  };
}
const fu = { none: 0, xs: 4, sm: 8, md: 16, lg: 24, xl: 32 },
  c1 = { xs: 8, sm: 10, md: 14, lg: 20, xl: 24 },
  f1 = ['button', 'submit', 'reset'],
  d1 = /[^\s]\/[^\s]/,
  h1 = ['flat', 'outline', 'push', 'unelevated'],
  m1 = (e, t) =>
    e.flat === !0
      ? 'flat'
      : e.outline === !0
      ? 'outline'
      : e.push === !0
      ? 'push'
      : e.unelevated === !0
      ? 'unelevated'
      : t,
  g1 = {
    ...Jr,
    ...ld,
    type: { type: String, default: 'button' },
    label: [Number, String],
    icon: String,
    iconRight: String,
    ...h1.reduce((e, t) => (e[t] = Boolean) && e, {}),
    square: Boolean,
    round: Boolean,
    rounded: Boolean,
    glossy: Boolean,
    size: String,
    fab: Boolean,
    fabMini: Boolean,
    padding: String,
    color: String,
    textColor: String,
    noCaps: Boolean,
    noWrap: Boolean,
    dense: Boolean,
    tabindex: [Number, String],
    ripple: { type: [Boolean, Object], default: !0 },
    align: { ...nd.align, default: 'center' },
    stack: Boolean,
    stretch: Boolean,
    loading: { type: Boolean, default: null },
    disable: Boolean,
  };
function v1(e) {
  const t = Zr(e, c1),
    n = rd(e),
    {
      hasRouterLink: r,
      hasLink: o,
      linkTag: i,
      linkAttrs: s,
      navigateOnClick: l,
    } = ad({ fallbackTag: 'button' }),
    a = H(() => {
      const O = e.fab === !1 && e.fabMini === !1 ? t.value : {};
      return e.padding !== void 0
        ? Object.assign({}, O, {
            padding: e.padding
              .split(/\s+/)
              .map((w) => (w in fu ? fu[w] + 'px' : w))
              .join(' '),
            minWidth: '0',
            minHeight: '0',
          })
        : O;
    }),
    u = H(() => e.rounded === !0 || e.fab === !0 || e.fabMini === !0),
    c = H(() => e.disable !== !0 && e.loading !== !0),
    h = H(() => (c.value === !0 ? e.tabindex || 0 : -1)),
    f = H(() => m1(e, 'standard')),
    m = H(() => {
      const O = { tabindex: h.value };
      return (
        o.value === !0
          ? Object.assign(O, s.value)
          : f1.includes(e.type) === !0 && (O.type = e.type),
        i.value === 'a'
          ? (e.disable === !0
              ? (O['aria-disabled'] = 'true')
              : O.href === void 0 && (O.role = 'button'),
            r.value !== !0 && d1.test(e.type) === !0 && (O.type = e.type))
          : e.disable === !0 &&
            ((O.disabled = ''), (O['aria-disabled'] = 'true')),
        e.loading === !0 &&
          e.percentage !== void 0 &&
          Object.assign(O, {
            role: 'progressbar',
            'aria-valuemin': 0,
            'aria-valuemax': 100,
            'aria-valuenow': e.percentage,
          }),
        O
      );
    }),
    P = H(() => {
      let O;
      e.color !== void 0
        ? e.flat === !0 || e.outline === !0
          ? (O = `text-${e.textColor || e.color}`)
          : (O = `bg-${e.color} text-${e.textColor || 'white'}`)
        : e.textColor && (O = `text-${e.textColor}`);
      const w =
        e.round === !0
          ? 'round'
          : `rectangle${
              u.value === !0
                ? ' q-btn--rounded'
                : e.square === !0
                ? ' q-btn--square'
                : ''
            }`;
      return (
        `q-btn--${f.value} q-btn--${w}` +
        (O !== void 0 ? ' ' + O : '') +
        (c.value === !0
          ? ' q-btn--actionable q-focusable q-hoverable'
          : e.disable === !0
          ? ' disabled'
          : '') +
        (e.fab === !0
          ? ' q-btn--fab'
          : e.fabMini === !0
          ? ' q-btn--fab-mini'
          : '') +
        (e.noCaps === !0 ? ' q-btn--no-uppercase' : '') +
        (e.dense === !0 ? ' q-btn--dense' : '') +
        (e.stretch === !0 ? ' no-border-radius self-stretch' : '') +
        (e.glossy === !0 ? ' glossy' : '') +
        (e.square ? ' q-btn--square' : '')
      );
    }),
    A = H(
      () =>
        n.value +
        (e.stack === !0 ? ' column' : ' row') +
        (e.noWrap === !0 ? ' no-wrap text-no-wrap' : '') +
        (e.loading === !0 ? ' q-btn__content--hidden' : '')
    );
  return {
    classes: P,
    style: a,
    innerClasses: A,
    attributes: m,
    hasLink: o,
    linkTag: i,
    navigateOnClick: l,
    isActionable: c,
  };
}
const { passiveCapture: gt } = Ie;
let Bn = null,
  zn = null,
  qn = null;
var No = Se({
  name: 'QBtn',
  props: {
    ...g1,
    percentage: Number,
    darkPercentage: Boolean,
    onTouchstart: [Function, Array],
  },
  emits: ['click', 'keydown', 'mousedown', 'keyup'],
  setup(e, { slots: t, emit: n }) {
    const { proxy: r } = Ee(),
      {
        classes: o,
        style: i,
        innerClasses: s,
        attributes: l,
        hasLink: a,
        linkTag: u,
        navigateOnClick: c,
        isActionable: h,
      } = v1(e),
      f = ae(null),
      m = ae(null);
    let P = null,
      A,
      O = null;
    const w = H(() => e.label !== void 0 && e.label !== null && e.label !== ''),
      g = H(() =>
        e.disable === !0 || e.ripple === !1
          ? !1
          : {
              keyCodes: a.value === !0 ? [13, 32] : [13],
              ...(e.ripple === !0 ? {} : e.ripple),
            }
      ),
      E = H(() => ({ center: e.round })),
      k = H(() => {
        const $ = Math.max(0, Math.min(100, e.percentage));
        return $ > 0
          ? {
              transition: 'transform 0.6s',
              transform: `translateX(${$ - 100}%)`,
            }
          : {};
      }),
      S = H(() => {
        if (e.loading === !0)
          return {
            onMousedown: Y,
            onTouchstart: Y,
            onClick: Y,
            onKeydown: Y,
            onKeyup: Y,
          };
        if (h.value === !0) {
          const $ = { onClick: T, onKeydown: R, onMousedown: z };
          if (r.$q.platform.has.touch === !0) {
            const re = e.onTouchstart !== void 0 ? '' : 'Passive';
            $[`onTouchstart${re}`] = D;
          }
          return $;
        }
        return { onClick: at };
      }),
      L = H(() => ({
        ref: f,
        class: 'q-btn q-btn-item non-selectable no-outline ' + o.value,
        style: i.value,
        ...l.value,
        ...S.value,
      }));
    function T($) {
      if (f.value !== null) {
        if ($ !== void 0) {
          if ($.defaultPrevented === !0) return;
          const re = document.activeElement;
          if (
            e.type === 'submit' &&
            re !== document.body &&
            f.value.contains(re) === !1 &&
            re.contains(f.value) === !1
          ) {
            f.value.focus();
            const se = () => {
              document.removeEventListener('keydown', at, !0),
                document.removeEventListener('keyup', se, gt),
                f.value !== null && f.value.removeEventListener('blur', se, gt);
            };
            document.addEventListener('keydown', at, !0),
              document.addEventListener('keyup', se, gt),
              f.value.addEventListener('blur', se, gt);
          }
        }
        c($);
      }
    }
    function R($) {
      f.value !== null &&
        (n('keydown', $),
        cn($, [13, 32]) === !0 &&
          zn !== f.value &&
          (zn !== null && N(),
          $.defaultPrevented !== !0 &&
            (f.value.focus(),
            (zn = f.value),
            f.value.classList.add('q-btn--active'),
            document.addEventListener('keyup', j, !0),
            f.value.addEventListener('blur', j, gt)),
          at($)));
    }
    function D($) {
      f.value !== null &&
        (n('touchstart', $),
        $.defaultPrevented !== !0 &&
          (Bn !== f.value &&
            (Bn !== null && N(),
            (Bn = f.value),
            (P = $.target),
            P.addEventListener('touchcancel', j, gt),
            P.addEventListener('touchend', j, gt)),
          (A = !0),
          O !== null && clearTimeout(O),
          (O = setTimeout(() => {
            (O = null), (A = !1);
          }, 200))));
    }
    function z($) {
      f.value !== null &&
        (($.qSkipRipple = A === !0),
        n('mousedown', $),
        $.defaultPrevented !== !0 &&
          qn !== f.value &&
          (qn !== null && N(),
          (qn = f.value),
          f.value.classList.add('q-btn--active'),
          document.addEventListener('mouseup', j, gt)));
    }
    function j($) {
      if (
        f.value !== null &&
        !(
          $ !== void 0 &&
          $.type === 'blur' &&
          document.activeElement === f.value
        )
      ) {
        if ($ !== void 0 && $.type === 'keyup') {
          if (zn === f.value && cn($, [13, 32]) === !0) {
            const re = new MouseEvent('click', $);
            (re.qKeyEvent = !0),
              $.defaultPrevented === !0 && It(re),
              $.cancelBubble === !0 && Ro(re),
              f.value.dispatchEvent(re),
              at($),
              ($.qKeyEvent = !0);
          }
          n('keyup', $);
        }
        N();
      }
    }
    function N($) {
      const re = m.value;
      $ !== !0 &&
        (Bn === f.value || qn === f.value) &&
        re !== null &&
        re !== document.activeElement &&
        (re.setAttribute('tabindex', -1), re.focus()),
        Bn === f.value &&
          (P !== null &&
            (P.removeEventListener('touchcancel', j, gt),
            P.removeEventListener('touchend', j, gt)),
          (Bn = P = null)),
        qn === f.value &&
          (document.removeEventListener('mouseup', j, gt), (qn = null)),
        zn === f.value &&
          (document.removeEventListener('keyup', j, !0),
          f.value !== null && f.value.removeEventListener('blur', j, gt),
          (zn = null)),
        f.value !== null && f.value.classList.remove('q-btn--active');
    }
    function Y($) {
      at($), ($.qSkipRipple = !0);
    }
    return (
      De(() => {
        N(!0);
      }),
      Object.assign(r, { click: T }),
      () => {
        let $ = [];
        e.icon !== void 0 &&
          $.push(
            q(fn, {
              name: e.icon,
              left: e.stack === !1 && w.value === !0,
              role: 'img',
              'aria-hidden': 'true',
            })
          ),
          w.value === !0 && $.push(q('span', { class: 'block' }, [e.label])),
          ($ = rn(t.default, $)),
          e.iconRight !== void 0 &&
            e.round === !1 &&
            $.push(
              q(fn, {
                name: e.iconRight,
                right: e.stack === !1 && w.value === !0,
                role: 'img',
                'aria-hidden': 'true',
              })
            );
        const re = [q('span', { class: 'q-focus-helper', ref: m })];
        return (
          e.loading === !0 &&
            e.percentage !== void 0 &&
            re.push(
              q(
                'span',
                {
                  class:
                    'q-btn__progress absolute-full overflow-hidden' +
                    (e.darkPercentage === !0 ? ' q-btn__progress--dark' : ''),
                },
                [
                  q('span', {
                    class: 'q-btn__progress-indicator fit block',
                    style: k.value,
                  }),
                ]
              )
            ),
          re.push(
            q(
              'span',
              {
                class:
                  'q-btn__content text-center col items-center q-anchor--skip ' +
                  s.value,
              },
              $
            )
          ),
          e.loading !== null &&
            re.push(
              q(un, { name: 'q-transition--fade' }, () =>
                e.loading === !0
                  ? [
                      q(
                        'span',
                        {
                          key: 'loading',
                          class: 'absolute-full flex flex-center',
                        },
                        t.loading !== void 0 ? t.loading() : [q(Wr)]
                      ),
                    ]
                  : null
              )
            ),
          Mo(q(u.value, L.value, re), [[i1, g.value, void 0, E.value]])
        );
      }
    );
  },
});
const Dt = { dark: { type: Boolean, default: null } };
function Nt(e, t) {
  return H(() => (e.dark === null ? t.dark.isActive : e.dark));
}
function ud(e, t) {
  const n = ae(null),
    r = H(() =>
      e.disable === !0
        ? null
        : q('span', { ref: n, class: 'no-outline', tabindex: -1 })
    );
  function o(i) {
    const s = t.value;
    i !== void 0 && i.type.indexOf('key') === 0
      ? s !== null &&
        document.activeElement !== s &&
        s.contains(document.activeElement) === !0 &&
        s.focus()
      : n.value !== null &&
        (i === void 0 || (s !== null && s.contains(i.target) === !0)) &&
        n.value.focus();
  }
  return { refocusTargetEl: r, refocusTarget: o };
}
const yl = { name: String };
function W_(e) {
  return H(() => ({ type: 'hidden', name: e.name, value: e.modelValue }));
}
function cd(e = {}) {
  return (t, n, r) => {
    t[n](q('input', { class: 'hidden' + (r || ''), ...e.value }));
  };
}
function p1(e) {
  return H(() => e.name || e.for);
}
var fd = { xs: 30, sm: 35, md: 40, lg: 50, xl: 60 };
const dd = {
    ...Dt,
    ...Jr,
    ...yl,
    modelValue: { required: !0, default: null },
    val: {},
    trueValue: { default: !0 },
    falseValue: { default: !1 },
    indeterminateValue: { default: null },
    checkedIcon: String,
    uncheckedIcon: String,
    indeterminateIcon: String,
    toggleOrder: { type: String, validator: (e) => e === 'tf' || e === 'ft' },
    toggleIndeterminate: Boolean,
    label: String,
    leftLabel: Boolean,
    color: String,
    keepColor: Boolean,
    dense: Boolean,
    disable: Boolean,
    tabindex: [String, Number],
  },
  hd = ['update:modelValue'];
function md(e, t) {
  const { props: n, slots: r, emit: o, proxy: i } = Ee(),
    { $q: s } = i,
    l = Nt(n, s),
    a = ae(null),
    { refocusTargetEl: u, refocusTarget: c } = ud(n, a),
    h = Zr(n, fd),
    f = H(() => n.val !== void 0 && Array.isArray(n.modelValue)),
    m = H(() => {
      const N = ge(n.val);
      return f.value === !0 ? n.modelValue.findIndex((Y) => ge(Y) === N) : -1;
    }),
    P = H(() =>
      f.value === !0 ? m.value > -1 : ge(n.modelValue) === ge(n.trueValue)
    ),
    A = H(() =>
      f.value === !0 ? m.value === -1 : ge(n.modelValue) === ge(n.falseValue)
    ),
    O = H(() => P.value === !1 && A.value === !1),
    w = H(() => (n.disable === !0 ? -1 : n.tabindex || 0)),
    g = H(
      () =>
        `q-${e} cursor-pointer no-outline row inline no-wrap items-center` +
        (n.disable === !0 ? ' disabled' : '') +
        (l.value === !0 ? ` q-${e}--dark` : '') +
        (n.dense === !0 ? ` q-${e}--dense` : '') +
        (n.leftLabel === !0 ? ' reverse' : '')
    ),
    E = H(() => {
      const N = P.value === !0 ? 'truthy' : A.value === !0 ? 'falsy' : 'indet',
        Y =
          n.color !== void 0 &&
          (n.keepColor === !0 ||
            (e === 'toggle' ? P.value === !0 : A.value !== !0))
            ? ` text-${n.color}`
            : '';
      return `q-${e}__inner relative-position non-selectable q-${e}__inner--${N}${Y}`;
    }),
    k = H(() => {
      const N = { type: 'checkbox' };
      return (
        n.name !== void 0 &&
          Object.assign(N, {
            '.checked': P.value,
            '^checked': P.value === !0 ? 'checked' : void 0,
            name: n.name,
            value: f.value === !0 ? n.val : n.trueValue,
          }),
        N
      );
    }),
    S = cd(k),
    L = H(() => {
      const N = {
        tabindex: w.value,
        role: e === 'toggle' ? 'switch' : 'checkbox',
        'aria-label': n.label,
        'aria-checked':
          O.value === !0 ? 'mixed' : P.value === !0 ? 'true' : 'false',
      };
      return n.disable === !0 && (N['aria-disabled'] = 'true'), N;
    });
  function T(N) {
    N !== void 0 && (at(N), c(N)),
      n.disable !== !0 && o('update:modelValue', R(), N);
  }
  function R() {
    if (f.value === !0) {
      if (P.value === !0) {
        const N = n.modelValue.slice();
        return N.splice(m.value, 1), N;
      }
      return n.modelValue.concat([n.val]);
    }
    if (P.value === !0) {
      if (n.toggleOrder !== 'ft' || n.toggleIndeterminate === !1)
        return n.falseValue;
    } else if (A.value === !0) {
      if (n.toggleOrder === 'ft' || n.toggleIndeterminate === !1)
        return n.trueValue;
    } else return n.toggleOrder !== 'ft' ? n.trueValue : n.falseValue;
    return n.indeterminateValue;
  }
  function D(N) {
    (N.keyCode === 13 || N.keyCode === 32) && at(N);
  }
  function z(N) {
    (N.keyCode === 13 || N.keyCode === 32) && T(N);
  }
  const j = t(P, O);
  return (
    Object.assign(i, { toggle: T }),
    () => {
      const N = j();
      n.disable !== !0 &&
        S(N, 'unshift', ` q-${e}__native absolute q-ma-none q-pa-none`);
      const Y = [
        q('div', { class: E.value, style: h.value, 'aria-hidden': 'true' }, N),
      ];
      u.value !== null && Y.push(u.value);
      const $ = n.label !== void 0 ? rn(r.default, [n.label]) : Ke(r.default);
      return (
        $ !== void 0 &&
          Y.push(q('div', { class: `q-${e}__label q-anchor--skip` }, $)),
        q(
          'div',
          {
            ref: a,
            class: g.value,
            ...L.value,
            onClick: T,
            onKeydown: D,
            onKeyup: z,
          },
          Y
        )
      );
    }
  );
}
var gd = Se({
    name: 'QToggle',
    props: { ...dd, icon: String, iconColor: String },
    emits: hd,
    setup(e) {
      function t(n, r) {
        const o = H(
            () =>
              (n.value === !0
                ? e.checkedIcon
                : r.value === !0
                ? e.indeterminateIcon
                : e.uncheckedIcon) || e.icon
          ),
          i = H(() => (n.value === !0 ? e.iconColor : null));
        return () => [
          q('div', { class: 'q-toggle__track' }),
          q(
            'div',
            { class: 'q-toggle__thumb absolute flex flex-center no-wrap' },
            o.value !== void 0
              ? [q(fn, { name: o.value, color: i.value })]
              : void 0
          ),
        ];
      }
      return md('toggle', t);
    },
  }),
  du = Se({
    name: 'QItemSection',
    props: {
      avatar: Boolean,
      thumbnail: Boolean,
      side: Boolean,
      top: Boolean,
      noWrap: Boolean,
    },
    setup(e, { slots: t }) {
      const n = H(
        () =>
          `q-item__section column q-item__section--${
            e.avatar === !0 || e.side === !0 || e.thumbnail === !0
              ? 'side'
              : 'main'
          }` +
          (e.top === !0
            ? ' q-item__section--top justify-start'
            : ' justify-center') +
          (e.avatar === !0 ? ' q-item__section--avatar' : '') +
          (e.thumbnail === !0 ? ' q-item__section--thumbnail' : '') +
          (e.noWrap === !0 ? ' q-item__section--nowrap' : '')
      );
      return () => q('div', { class: n.value }, Ke(t.default));
    },
  }),
  hu = Se({
    name: 'QItem',
    props: {
      ...Dt,
      ...ld,
      tag: { type: String, default: 'div' },
      active: { type: Boolean, default: null },
      clickable: Boolean,
      dense: Boolean,
      insetLevel: Number,
      tabindex: [String, Number],
      focused: Boolean,
      manualFocus: Boolean,
    },
    emits: ['click', 'keyup'],
    setup(e, { slots: t, emit: n }) {
      const {
          proxy: { $q: r },
        } = Ee(),
        o = Nt(e, r),
        {
          hasLink: i,
          linkAttrs: s,
          linkClass: l,
          linkTag: a,
          navigateOnClick: u,
        } = ad(),
        c = ae(null),
        h = ae(null),
        f = H(() => e.clickable === !0 || i.value === !0 || e.tag === 'label'),
        m = H(() => e.disable !== !0 && f.value === !0),
        P = H(
          () =>
            'q-item q-item-type row no-wrap' +
            (e.dense === !0 ? ' q-item--dense' : '') +
            (o.value === !0 ? ' q-item--dark' : '') +
            (i.value === !0 && e.active === null
              ? l.value
              : e.active === !0
              ? ` q-item--active${
                  e.activeClass !== void 0 ? ` ${e.activeClass}` : ''
                }`
              : '') +
            (e.disable === !0 ? ' disabled' : '') +
            (m.value === !0
              ? ' q-item--clickable q-link cursor-pointer ' +
                (e.manualFocus === !0
                  ? 'q-manual-focusable'
                  : 'q-focusable q-hoverable') +
                (e.focused === !0 ? ' q-manual-focusable--focused' : '')
              : '')
        ),
        A = H(() => {
          if (e.insetLevel === void 0) return null;
          const E = r.lang.rtl === !0 ? 'Right' : 'Left';
          return { ['padding' + E]: 16 + e.insetLevel * 56 + 'px' };
        });
      function O(E) {
        m.value === !0 &&
          (h.value !== null &&
            (E.qKeyEvent !== !0 && document.activeElement === c.value
              ? h.value.focus()
              : document.activeElement === h.value && c.value.focus()),
          u(E));
      }
      function w(E) {
        if (m.value === !0 && cn(E, 13) === !0) {
          at(E), (E.qKeyEvent = !0);
          const k = new MouseEvent('click', E);
          (k.qKeyEvent = !0), c.value.dispatchEvent(k);
        }
        n('keyup', E);
      }
      function g() {
        const E = Xf(t.default, []);
        return (
          m.value === !0 &&
            E.unshift(
              q('div', { class: 'q-focus-helper', tabindex: -1, ref: h })
            ),
          E
        );
      }
      return () => {
        const E = {
          ref: c,
          class: P.value,
          style: A.value,
          role: 'listitem',
          onClick: O,
          onKeyup: w,
        };
        return (
          m.value === !0
            ? ((E.tabindex = e.tabindex || '0'), Object.assign(E, s.value))
            : f.value === !0 && (E['aria-disabled'] = 'true'),
          q(a.value, E, g())
        );
      };
    },
  }),
  b1 = Se({
    name: 'QList',
    props: {
      ...Dt,
      bordered: Boolean,
      dense: Boolean,
      separator: Boolean,
      padding: Boolean,
      tag: { type: String, default: 'div' },
    },
    setup(e, { slots: t }) {
      const n = Ee(),
        r = Nt(e, n.proxy.$q),
        o = H(
          () =>
            'q-list' +
            (e.bordered === !0 ? ' q-list--bordered' : '') +
            (e.dense === !0 ? ' q-list--dense' : '') +
            (e.separator === !0 ? ' q-list--separator' : '') +
            (r.value === !0 ? ' q-list--dark' : '') +
            (e.padding === !0 ? ' q-list--padding' : '')
        );
      return () => q(e.tag, { class: o.value }, Ke(t.default));
    },
  });
function y1() {
  if (window.getSelection !== void 0) {
    const e = window.getSelection();
    e.empty !== void 0
      ? e.empty()
      : e.removeAllRanges !== void 0 &&
        (e.removeAllRanges(),
        Oo.is.mobile !== !0 && e.addRange(document.createRange()));
  } else document.selection !== void 0 && document.selection.empty();
}
const _1 = {
  target: { default: !0 },
  noParentEvent: Boolean,
  contextMenu: Boolean,
};
function E1({ showing: e, avoidEmit: t, configureAnchorEl: n }) {
  const { props: r, proxy: o, emit: i } = Ee(),
    s = ae(null);
  let l = null;
  function a(m) {
    return s.value === null
      ? !1
      : m === void 0 || m.touches === void 0 || m.touches.length <= 1;
  }
  const u = {};
  n === void 0 &&
    (Object.assign(u, {
      hide(m) {
        o.hide(m);
      },
      toggle(m) {
        o.toggle(m), (m.qAnchorHandled = !0);
      },
      toggleKey(m) {
        cn(m, 13) === !0 && u.toggle(m);
      },
      contextClick(m) {
        o.hide(m),
          It(m),
          Ge(() => {
            o.show(m), (m.qAnchorHandled = !0);
          });
      },
      prevent: It,
      mobileTouch(m) {
        if ((u.mobileCleanup(m), a(m) !== !0)) return;
        o.hide(m), s.value.classList.add('non-selectable');
        const P = m.target;
        us(u, 'anchor', [
          [P, 'touchmove', 'mobileCleanup', 'passive'],
          [P, 'touchend', 'mobileCleanup', 'passive'],
          [P, 'touchcancel', 'mobileCleanup', 'passive'],
          [s.value, 'contextmenu', 'prevent', 'notPassive'],
        ]),
          (l = setTimeout(() => {
            (l = null), o.show(m), (m.qAnchorHandled = !0);
          }, 300));
      },
      mobileCleanup(m) {
        s.value.classList.remove('non-selectable'),
          l !== null && (clearTimeout(l), (l = null)),
          e.value === !0 && m !== void 0 && y1();
      },
    }),
    (n = function (m = r.contextMenu) {
      if (r.noParentEvent === !0 || s.value === null) return;
      let P;
      m === !0
        ? o.$q.platform.is.mobile === !0
          ? (P = [[s.value, 'touchstart', 'mobileTouch', 'passive']])
          : (P = [
              [s.value, 'mousedown', 'hide', 'passive'],
              [s.value, 'contextmenu', 'contextClick', 'notPassive'],
            ])
        : (P = [
            [s.value, 'click', 'toggle', 'passive'],
            [s.value, 'keyup', 'toggleKey', 'passive'],
          ]),
        us(u, 'anchor', P);
    }));
  function c() {
    af(u, 'anchor');
  }
  function h(m) {
    for (s.value = m; s.value.classList.contains('q-anchor--skip'); )
      s.value = s.value.parentNode;
    n();
  }
  function f() {
    if (r.target === !1 || r.target === '' || o.$el.parentNode === null)
      s.value = null;
    else if (r.target === !0) h(o.$el.parentNode);
    else {
      let m = r.target;
      if (typeof r.target == 'string')
        try {
          m = document.querySelector(r.target);
        } catch {
          m = void 0;
        }
      m != null
        ? ((s.value = m.$el || m), n())
        : ((s.value = null),
          console.error(`Anchor: target "${r.target}" not found`));
    }
  }
  return (
    fe(
      () => r.contextMenu,
      (m) => {
        s.value !== null && (c(), n(m));
      }
    ),
    fe(
      () => r.target,
      () => {
        s.value !== null && c(), f();
      }
    ),
    fe(
      () => r.noParentEvent,
      (m) => {
        s.value !== null && (m === !0 ? c() : n());
      }
    ),
    st(() => {
      f(),
        t !== !0 &&
          r.modelValue === !0 &&
          s.value === null &&
          i('update:modelValue', !1);
    }),
    De(() => {
      l !== null && clearTimeout(l), c();
    }),
    { anchorEl: s, canShow: a, anchorEvents: u }
  );
}
function w1(e, t) {
  const n = ae(null);
  let r;
  function o(l, a) {
    const u = `${a !== void 0 ? 'add' : 'remove'}EventListener`,
      c = a !== void 0 ? a : r;
    l !== window && l[u]('scroll', c, Ie.passive),
      window[u]('scroll', c, Ie.passive),
      (r = a);
  }
  function i() {
    n.value !== null && (o(n.value), (n.value = null));
  }
  const s = fe(
    () => e.noParentEvent,
    () => {
      n.value !== null && (i(), t());
    }
  );
  return (
    De(s),
    { localScrollTarget: n, unconfigureScrollTarget: i, changeScrollEvent: o }
  );
}
const vd = {
    modelValue: { type: Boolean, default: null },
    'onUpdate:modelValue': [Function, Array],
  },
  pd = ['beforeShow', 'show', 'beforeHide', 'hide'];
function bd({
  showing: e,
  canShow: t,
  hideOnRouteChange: n,
  handleShow: r,
  handleHide: o,
  processOnMount: i,
}) {
  const s = Ee(),
    { props: l, emit: a, proxy: u } = s;
  let c;
  function h(g) {
    e.value === !0 ? P(g) : f(g);
  }
  function f(g) {
    if (
      l.disable === !0 ||
      (g !== void 0 && g.qAnchorHandled === !0) ||
      (t !== void 0 && t(g) !== !0)
    )
      return;
    const E = l['onUpdate:modelValue'] !== void 0;
    E === !0 &&
      (a('update:modelValue', !0),
      (c = g),
      Ge(() => {
        c === g && (c = void 0);
      })),
      (l.modelValue === null || E === !1) && m(g);
  }
  function m(g) {
    e.value !== !0 &&
      ((e.value = !0), a('beforeShow', g), r !== void 0 ? r(g) : a('show', g));
  }
  function P(g) {
    if (l.disable === !0) return;
    const E = l['onUpdate:modelValue'] !== void 0;
    E === !0 &&
      (a('update:modelValue', !1),
      (c = g),
      Ge(() => {
        c === g && (c = void 0);
      })),
      (l.modelValue === null || E === !1) && A(g);
  }
  function A(g) {
    e.value !== !1 &&
      ((e.value = !1), a('beforeHide', g), o !== void 0 ? o(g) : a('hide', g));
  }
  function O(g) {
    l.disable === !0 && g === !0
      ? l['onUpdate:modelValue'] !== void 0 && a('update:modelValue', !1)
      : (g === !0) !== e.value && (g === !0 ? m : A)(c);
  }
  fe(() => l.modelValue, O),
    n !== void 0 &&
      id(s) === !0 &&
      fe(
        () => u.$route.fullPath,
        () => {
          n.value === !0 && e.value === !0 && P();
        }
      ),
    i === !0 &&
      st(() => {
        O(l.modelValue);
      });
  const w = { show: f, hide: P, toggle: h };
  return Object.assign(u, w), w;
}
let Sn = [],
  Gr = [];
function yd(e) {
  Gr = Gr.filter((t) => t !== e);
}
function C1(e) {
  yd(e), Gr.push(e);
}
function mu(e) {
  yd(e), Gr.length === 0 && Sn.length > 0 && (Sn[Sn.length - 1](), (Sn = []));
}
function ci(e) {
  Gr.length === 0 ? e() : Sn.push(e);
}
function k1(e) {
  Sn = Sn.filter((t) => t !== e);
}
const Yn = [],
  Nr = [];
let P1 = 1,
  Zt = document.body;
function _l(e, t) {
  const n = document.createElement('div');
  if (
    ((n.id = t !== void 0 ? `q-portal--${t}--${P1++}` : e),
    Fo.globalNodes !== void 0)
  ) {
    const r = Fo.globalNodes.class;
    r !== void 0 && (n.className = r);
  }
  return Zt.appendChild(n), Yn.push(n), Nr.push(t), n;
}
function El(e) {
  const t = Yn.indexOf(e);
  Yn.splice(t, 1), Nr.splice(t, 1), e.remove();
}
function x1(e) {
  if (e === Zt) return;
  if (
    ((Zt = e),
    Zt === document.body ||
      Nr.reduce((n, r) => (r === 'dialog' ? n + 1 : n), 0) < 2)
  ) {
    Yn.forEach((n) => {
      n.contains(Zt) === !1 && Zt.appendChild(n);
    });
    return;
  }
  const t = Nr.lastIndexOf('dialog');
  for (let n = 0; n < Yn.length; n++) {
    const r = Yn[n];
    (n === t || Nr[n] !== 'dialog') &&
      r.contains(Zt) === !1 &&
      Zt.appendChild(r);
  }
}
const Jn = [];
function S1(e) {
  return Jn.find((t) => t.contentEl !== null && t.contentEl.contains(e));
}
function _d(e, t) {
  do {
    if (e.$options.name === 'QMenu') {
      if ((e.hide(t), e.$props.separateClosePopup === !0)) return wo(e);
    } else if (e.__qPortal === !0) {
      const n = wo(e);
      return n !== void 0 && n.$options.name === 'QPopupProxy'
        ? (e.hide(t), n)
        : e;
    }
    e = wo(e);
  } while (e != null);
}
function L1(e, t, n) {
  for (; n !== 0 && e !== void 0 && e !== null; ) {
    if (e.__qPortal === !0) {
      if ((n--, e.$options.name === 'QMenu')) {
        e = _d(e, t);
        continue;
      }
      e.hide(t);
    }
    e = wo(e);
  }
}
function M1(e) {
  for (e = e.parent; e != null; ) {
    if (e.type.name === 'QGlobalDialog') return !0;
    if (e.type.name === 'QDialog' || e.type.name === 'QMenu') return !1;
    e = e.parent;
  }
  return !1;
}
function Ed(e, t, n, r) {
  const o = ae(!1),
    i = ae(!1);
  let s = null;
  const l = {},
    a = r === 'dialog' && M1(e);
  function u(h) {
    if (h === !0) {
      mu(l), (i.value = !0);
      return;
    }
    (i.value = !1),
      o.value === !1 &&
        (a === !1 && s === null && (s = _l(!1, r)),
        (o.value = !0),
        Jn.push(e.proxy),
        C1(l));
  }
  function c(h) {
    if (((i.value = !1), h !== !0)) return;
    mu(l), (o.value = !1);
    const f = Jn.indexOf(e.proxy);
    f !== -1 && Jn.splice(f, 1), s !== null && (El(s), (s = null));
  }
  return (
    ur(() => {
      c(!0);
    }),
    (e.proxy.__qPortal = !0),
    cr(e.proxy, 'contentEl', () => t.value),
    {
      showPortal: u,
      hidePortal: c,
      portalIsActive: o,
      portalIsAccessible: i,
      renderPortal: () =>
        a === !0 ? n() : o.value === !0 ? [q(Nm, { to: s }, n())] : void 0,
    }
  );
}
const wd = {
  transitionShow: { type: String, default: 'fade' },
  transitionHide: { type: String, default: 'fade' },
  transitionDuration: { type: [String, Number], default: 300 },
};
function Cd(e, t = () => {}, n = () => {}) {
  return {
    transitionProps: H(() => {
      const r = `q-transition--${e.transitionShow || t()}`,
        o = `q-transition--${e.transitionHide || n()}`;
      return {
        appear: !0,
        enterFromClass: `${r}-enter-from`,
        enterActiveClass: `${r}-enter-active`,
        enterToClass: `${r}-enter-to`,
        leaveFromClass: `${o}-leave-from`,
        leaveActiveClass: `${o}-leave-active`,
        leaveToClass: `${o}-leave-to`,
      };
    }),
    transitionStyle: H(
      () => `--q-transition-duration: ${e.transitionDuration}ms`
    ),
  };
}
function kd() {
  let e;
  const t = Ee();
  function n() {
    e = void 0;
  }
  return (
    Xr(n),
    De(n),
    {
      removeTick: n,
      registerTick(r) {
        (e = r),
          Ge(() => {
            e === r && (sd(t) === !1 && e(), (e = void 0));
          });
      },
    }
  );
}
function Pd() {
  let e = null;
  const t = Ee();
  function n() {
    e !== null && (clearTimeout(e), (e = null));
  }
  return (
    Xr(n),
    De(n),
    {
      removeTimeout: n,
      registerTimeout(r, o) {
        n(), sd(t) === !1 && (e = setTimeout(r, o));
      },
    }
  );
}
const A1 = [
  null,
  document,
  document.body,
  document.scrollingElement,
  document.documentElement,
];
function xd(e, t) {
  let n = r1(t);
  if (n === void 0) {
    if (e == null) return window;
    n = e.closest('.scroll,.scroll-y,.overflow-auto');
  }
  return A1.includes(n) ? window : n;
}
function Sd(e) {
  return e === window
    ? window.pageYOffset || window.scrollY || document.body.scrollTop || 0
    : e.scrollTop;
}
function Ld(e) {
  return e === window
    ? window.pageXOffset || window.scrollX || document.body.scrollLeft || 0
    : e.scrollLeft;
}
let uo;
function Co() {
  if (uo !== void 0) return uo;
  const e = document.createElement('p'),
    t = document.createElement('div');
  Ss(e, { width: '100%', height: '200px' }),
    Ss(t, {
      position: 'absolute',
      top: '0px',
      left: '0px',
      visibility: 'hidden',
      width: '200px',
      height: '150px',
      overflow: 'hidden',
    }),
    t.appendChild(e),
    document.body.appendChild(t);
  const n = e.offsetWidth;
  t.style.overflow = 'scroll';
  let r = e.offsetWidth;
  return n === r && (r = t.clientWidth), t.remove(), (uo = n - r), uo;
}
function T1(e, t = !0) {
  return !e || e.nodeType !== Node.ELEMENT_NODE
    ? !1
    : t
    ? e.scrollHeight > e.clientHeight &&
      (e.classList.contains('scroll') ||
        e.classList.contains('overflow-auto') ||
        ['auto', 'scroll'].includes(window.getComputedStyle(e)['overflow-y']))
    : e.scrollWidth > e.clientWidth &&
      (e.classList.contains('scroll') ||
        e.classList.contains('overflow-auto') ||
        ['auto', 'scroll'].includes(window.getComputedStyle(e)['overflow-x']));
}
const Rn = [];
let ir;
function O1(e) {
  ir = e.keyCode === 27;
}
function R1() {
  ir === !0 && (ir = !1);
}
function I1(e) {
  ir === !0 && ((ir = !1), cn(e, 27) === !0 && Rn[Rn.length - 1](e));
}
function Md(e) {
  window[e]('keydown', O1),
    window[e]('blur', R1),
    window[e]('keyup', I1),
    (ir = !1);
}
function Ad(e) {
  Te.is.desktop === !0 &&
    (Rn.push(e), Rn.length === 1 && Md('addEventListener'));
}
function Bo(e) {
  const t = Rn.indexOf(e);
  t > -1 && (Rn.splice(t, 1), Rn.length === 0 && Md('removeEventListener'));
}
const In = [];
function Td(e) {
  In[In.length - 1](e);
}
function Od(e) {
  Te.is.desktop === !0 &&
    (In.push(e),
    In.length === 1 && document.body.addEventListener('focusin', Td));
}
function Ls(e) {
  const t = In.indexOf(e);
  t > -1 &&
    (In.splice(t, 1),
    In.length === 0 && document.body.removeEventListener('focusin', Td));
}
const { notPassiveCapture: zo } = Ie,
  Fn = [];
function qo(e) {
  const t = e.target;
  if (
    t === void 0 ||
    t.nodeType === 8 ||
    t.classList.contains('no-pointer-events') === !0
  )
    return;
  let n = Jn.length - 1;
  for (; n >= 0; ) {
    const r = Jn[n].$;
    if (r.type.name !== 'QDialog') break;
    if (r.props.seamless !== !0) return;
    n--;
  }
  for (let r = Fn.length - 1; r >= 0; r--) {
    const o = Fn[r];
    if (
      (o.anchorEl.value === null || o.anchorEl.value.contains(t) === !1) &&
      (t === document.body ||
        (o.innerRef.value !== null && o.innerRef.value.contains(t) === !1))
    )
      (e.qClickOutside = !0), o.onClickOutside(e);
    else return;
  }
}
function F1(e) {
  Fn.push(e),
    Fn.length === 1 &&
      (document.addEventListener('mousedown', qo, zo),
      document.addEventListener('touchstart', qo, zo));
}
function gu(e) {
  const t = Fn.findIndex((n) => n === e);
  t > -1 &&
    (Fn.splice(t, 1),
    Fn.length === 0 &&
      (document.removeEventListener('mousedown', qo, zo),
      document.removeEventListener('touchstart', qo, zo)));
}
let vu, pu;
function bu(e) {
  const t = e.split(' ');
  return t.length !== 2
    ? !1
    : ['top', 'center', 'bottom'].includes(t[0]) !== !0
    ? (console.error(
        'Anchor/Self position must start with one of top/center/bottom'
      ),
      !1)
    : ['left', 'middle', 'right', 'start', 'end'].includes(t[1]) !== !0
    ? (console.error(
        'Anchor/Self position must end with one of left/middle/right/start/end'
      ),
      !1)
    : !0;
}
function H1(e) {
  return e
    ? !(e.length !== 2 || typeof e[0] != 'number' || typeof e[1] != 'number')
    : !0;
}
const Ms = {
  'start#ltr': 'left',
  'start#rtl': 'right',
  'end#ltr': 'right',
  'end#rtl': 'left',
};
['left', 'middle', 'right'].forEach((e) => {
  (Ms[`${e}#ltr`] = e), (Ms[`${e}#rtl`] = e);
});
function yu(e, t) {
  const n = e.split(' ');
  return {
    vertical: n[0],
    horizontal: Ms[`${n[1]}#${t === !0 ? 'rtl' : 'ltr'}`],
  };
}
function D1(e, t) {
  let {
    top: n,
    left: r,
    right: o,
    bottom: i,
    width: s,
    height: l,
  } = e.getBoundingClientRect();
  return (
    t !== void 0 &&
      ((n -= t[1]),
      (r -= t[0]),
      (i += t[1]),
      (o += t[0]),
      (s += t[0]),
      (l += t[1])),
    {
      top: n,
      bottom: i,
      height: l,
      left: r,
      right: o,
      width: s,
      middle: r + (o - r) / 2,
      center: n + (i - n) / 2,
    }
  );
}
function N1(e, t, n) {
  let { top: r, left: o } = e.getBoundingClientRect();
  return (
    (r += t.top),
    (o += t.left),
    n !== void 0 && ((r += n[1]), (o += n[0])),
    {
      top: r,
      bottom: r + 1,
      height: 1,
      left: o,
      right: o + 1,
      width: 1,
      middle: o,
      center: r,
    }
  );
}
function B1(e) {
  return {
    top: 0,
    center: e.offsetHeight / 2,
    bottom: e.offsetHeight,
    left: 0,
    middle: e.offsetWidth / 2,
    right: e.offsetWidth,
  };
}
function _u(e, t, n) {
  return {
    top: e[n.anchorOrigin.vertical] - t[n.selfOrigin.vertical],
    left: e[n.anchorOrigin.horizontal] - t[n.selfOrigin.horizontal],
  };
}
function z1(e) {
  if (Te.is.ios === !0 && window.visualViewport !== void 0) {
    const l = document.body.style,
      { offsetLeft: a, offsetTop: u } = window.visualViewport;
    a !== vu && (l.setProperty('--q-pe-left', a + 'px'), (vu = a)),
      u !== pu && (l.setProperty('--q-pe-top', u + 'px'), (pu = u));
  }
  const { scrollLeft: t, scrollTop: n } = e.el,
    r =
      e.absoluteOffset === void 0
        ? D1(e.anchorEl, e.cover === !0 ? [0, 0] : e.offset)
        : N1(e.anchorEl, e.absoluteOffset, e.offset);
  let o = {
    maxHeight: e.maxHeight,
    maxWidth: e.maxWidth,
    visibility: 'visible',
  };
  (e.fit === !0 || e.cover === !0) &&
    ((o.minWidth = r.width + 'px'),
    e.cover === !0 && (o.minHeight = r.height + 'px')),
    Object.assign(e.el.style, o);
  const i = B1(e.el);
  let s = _u(r, i, e);
  if (e.absoluteOffset === void 0 || e.offset === void 0)
    Oi(s, r, i, e.anchorOrigin, e.selfOrigin);
  else {
    const { top: l, left: a } = s;
    Oi(s, r, i, e.anchorOrigin, e.selfOrigin);
    let u = !1;
    if (s.top !== l) {
      u = !0;
      const c = 2 * e.offset[1];
      (r.center = r.top -= c), (r.bottom -= c + 2);
    }
    if (s.left !== a) {
      u = !0;
      const c = 2 * e.offset[0];
      (r.middle = r.left -= c), (r.right -= c + 2);
    }
    u === !0 && ((s = _u(r, i, e)), Oi(s, r, i, e.anchorOrigin, e.selfOrigin));
  }
  (o = { top: s.top + 'px', left: s.left + 'px' }),
    s.maxHeight !== void 0 &&
      ((o.maxHeight = s.maxHeight + 'px'),
      r.height > s.maxHeight && (o.minHeight = o.maxHeight)),
    s.maxWidth !== void 0 &&
      ((o.maxWidth = s.maxWidth + 'px'),
      r.width > s.maxWidth && (o.minWidth = o.maxWidth)),
    Object.assign(e.el.style, o),
    e.el.scrollTop !== n && (e.el.scrollTop = n),
    e.el.scrollLeft !== t && (e.el.scrollLeft = t);
}
function Oi(e, t, n, r, o) {
  const i = n.bottom,
    s = n.right,
    l = Co(),
    a = window.innerHeight - l,
    u = document.body.clientWidth;
  if (e.top < 0 || e.top + i > a)
    if (o.vertical === 'center')
      (e.top = t[r.vertical] > a / 2 ? Math.max(0, a - i) : 0),
        (e.maxHeight = Math.min(i, a));
    else if (t[r.vertical] > a / 2) {
      const c = Math.min(
        a,
        r.vertical === 'center'
          ? t.center
          : r.vertical === o.vertical
          ? t.bottom
          : t.top
      );
      (e.maxHeight = Math.min(i, c)), (e.top = Math.max(0, c - i));
    } else
      (e.top = Math.max(
        0,
        r.vertical === 'center'
          ? t.center
          : r.vertical === o.vertical
          ? t.top
          : t.bottom
      )),
        (e.maxHeight = Math.min(i, a - e.top));
  if (e.left < 0 || e.left + s > u)
    if (((e.maxWidth = Math.min(s, u)), o.horizontal === 'middle'))
      e.left = t[r.horizontal] > u / 2 ? Math.max(0, u - s) : 0;
    else if (t[r.horizontal] > u / 2) {
      const c = Math.min(
        u,
        r.horizontal === 'middle'
          ? t.middle
          : r.horizontal === o.horizontal
          ? t.right
          : t.left
      );
      (e.maxWidth = Math.min(s, c)), (e.left = Math.max(0, c - e.maxWidth));
    } else
      (e.left = Math.max(
        0,
        r.horizontal === 'middle'
          ? t.middle
          : r.horizontal === o.horizontal
          ? t.left
          : t.right
      )),
        (e.maxWidth = Math.min(s, u - e.left));
}
var q1 = Se({
    name: 'QMenu',
    inheritAttrs: !1,
    props: {
      ..._1,
      ...vd,
      ...Dt,
      ...wd,
      persistent: Boolean,
      autoClose: Boolean,
      separateClosePopup: Boolean,
      noRouteDismiss: Boolean,
      noRefocus: Boolean,
      noFocus: Boolean,
      fit: Boolean,
      cover: Boolean,
      square: Boolean,
      anchor: { type: String, validator: bu },
      self: { type: String, validator: bu },
      offset: { type: Array, validator: H1 },
      scrollTarget: { default: void 0 },
      touchPosition: Boolean,
      maxHeight: { type: String, default: null },
      maxWidth: { type: String, default: null },
    },
    emits: [...pd, 'click', 'escapeKey'],
    setup(e, { slots: t, emit: n, attrs: r }) {
      let o = null,
        i,
        s,
        l;
      const a = Ee(),
        { proxy: u } = a,
        { $q: c } = u,
        h = ae(null),
        f = ae(!1),
        m = H(() => e.persistent !== !0 && e.noRouteDismiss !== !0),
        P = Nt(e, c),
        { registerTick: A, removeTick: O } = kd(),
        { registerTimeout: w } = Pd(),
        { transitionProps: g, transitionStyle: E } = Cd(e),
        {
          localScrollTarget: k,
          changeScrollEvent: S,
          unconfigureScrollTarget: L,
        } = w1(e, ve),
        { anchorEl: T, canShow: R } = E1({ showing: f }),
        { hide: D } = bd({
          showing: f,
          canShow: R,
          handleShow: be,
          handleHide: J,
          hideOnRouteChange: m,
          processOnMount: !0,
        }),
        {
          showPortal: z,
          hidePortal: j,
          renderPortal: N,
        } = Ed(a, h, te, 'menu'),
        Y = {
          anchorEl: T,
          innerRef: h,
          onClickOutside(Z) {
            if (e.persistent !== !0 && f.value === !0)
              return (
                D(Z),
                (Z.type === 'touchstart' ||
                  Z.target.classList.contains('q-dialog__backdrop')) &&
                  at(Z),
                !0
              );
          },
        },
        $ = H(() =>
          yu(
            e.anchor || (e.cover === !0 ? 'center middle' : 'bottom start'),
            c.lang.rtl
          )
        ),
        re = H(() =>
          e.cover === !0 ? $.value : yu(e.self || 'top start', c.lang.rtl)
        ),
        se = H(
          () =>
            (e.square === !0 ? ' q-menu--square' : '') +
            (P.value === !0 ? ' q-menu--dark q-dark' : '')
        ),
        V = H(() => (e.autoClose === !0 ? { onClick: Pe } : {})),
        ee = H(() => f.value === !0 && e.persistent !== !0);
      fe(ee, (Z) => {
        Z === !0 ? (Ad(ne), F1(Y)) : (Bo(ne), gu(Y));
      });
      function de() {
        ci(() => {
          let Z = h.value;
          Z &&
            Z.contains(document.activeElement) !== !0 &&
            ((Z =
              Z.querySelector(
                '[autofocus][tabindex], [data-autofocus][tabindex]'
              ) ||
              Z.querySelector(
                '[autofocus] [tabindex], [data-autofocus] [tabindex]'
              ) ||
              Z.querySelector('[autofocus], [data-autofocus]') ||
              Z),
            Z.focus({ preventScroll: !0 }));
        });
      }
      function be(Z) {
        if (
          ((o = e.noRefocus === !1 ? document.activeElement : null),
          Od(W),
          z(),
          ve(),
          (i = void 0),
          Z !== void 0 && (e.touchPosition || e.contextMenu))
        ) {
          const he = lf(Z);
          if (he.left !== void 0) {
            const { top: le, left: C } = T.value.getBoundingClientRect();
            i = { left: he.left - C, top: he.top - le };
          }
        }
        s === void 0 &&
          (s = fe(
            () =>
              c.screen.width +
              '|' +
              c.screen.height +
              '|' +
              e.self +
              '|' +
              e.anchor +
              '|' +
              c.lang.rtl,
            G
          )),
          e.noFocus !== !0 && document.activeElement.blur(),
          A(() => {
            G(), e.noFocus !== !0 && de();
          }),
          w(() => {
            c.platform.is.ios === !0 && ((l = e.autoClose), h.value.click()),
              G(),
              z(!0),
              n('show', Z);
          }, e.transitionDuration);
      }
      function J(Z) {
        O(),
          j(),
          ce(!0),
          o !== null &&
            (Z === void 0 || Z.qClickOutside !== !0) &&
            ((
              (Z && Z.type.indexOf('key') === 0
                ? o.closest('[tabindex]:not([tabindex^="-"])')
                : void 0) || o
            ).focus(),
            (o = null)),
          w(() => {
            j(!0), n('hide', Z);
          }, e.transitionDuration);
      }
      function ce(Z) {
        (i = void 0),
          s !== void 0 && (s(), (s = void 0)),
          (Z === !0 || f.value === !0) && (Ls(W), L(), gu(Y), Bo(ne)),
          Z !== !0 && (o = null);
      }
      function ve() {
        (T.value !== null || e.scrollTarget !== void 0) &&
          ((k.value = xd(T.value, e.scrollTarget)), S(k.value, G));
      }
      function Pe(Z) {
        l !== !0 ? (_d(u, Z), n('click', Z)) : (l = !1);
      }
      function W(Z) {
        ee.value === !0 &&
          e.noFocus !== !0 &&
          ed(h.value, Z.target) !== !0 &&
          de();
      }
      function ne(Z) {
        n('escapeKey'), D(Z);
      }
      function G() {
        const Z = h.value;
        Z === null ||
          T.value === null ||
          z1({
            el: Z,
            offset: e.offset,
            anchorEl: T.value,
            anchorOrigin: $.value,
            selfOrigin: re.value,
            absoluteOffset: i,
            fit: e.fit,
            cover: e.cover,
            maxHeight: e.maxHeight,
            maxWidth: e.maxWidth,
          });
      }
      function te() {
        return q(un, g.value, () =>
          f.value === !0
            ? q(
                'div',
                {
                  role: 'menu',
                  ...r,
                  ref: h,
                  tabindex: -1,
                  class: [
                    'q-menu q-position-engine scroll' + se.value,
                    r.class,
                  ],
                  style: [r.style, E.value],
                  ...V.value,
                },
                Ke(t.default)
              )
            : null
        );
      }
      return De(ce), Object.assign(u, { focus: de, updatePosition: G }), N;
    },
  }),
  $1 = Se({
    name: 'QToolbar',
    props: { inset: Boolean },
    setup(e, { slots: t }) {
      const n = H(
        () =>
          'q-toolbar row no-wrap items-center' +
          (e.inset === !0 ? ' q-toolbar--inset' : '')
      );
      return () => q('div', { class: n.value, role: 'toolbar' }, Ke(t.default));
    },
  });
function V1() {
  const e = ae(!Lt.value);
  return (
    e.value === !1 &&
      st(() => {
        e.value = !0;
      }),
    e
  );
}
const Rd = typeof ResizeObserver != 'undefined',
  Eu =
    Rd === !0
      ? {}
      : {
          style:
            'display:block;position:absolute;top:0;left:0;right:0;bottom:0;height:100%;width:100%;overflow:hidden;pointer-events:none;z-index:-1;',
          url: 'about:blank',
        };
var As = Se({
    name: 'QResizeObserver',
    props: { debounce: { type: [String, Number], default: 100 } },
    emits: ['resize'],
    setup(e, { emit: t }) {
      let n = null,
        r,
        o = { width: -1, height: -1 };
      function i(a) {
        a === !0 || e.debounce === 0 || e.debounce === '0'
          ? s()
          : n === null && (n = setTimeout(s, e.debounce));
      }
      function s() {
        if ((n !== null && (clearTimeout(n), (n = null)), r)) {
          const { offsetWidth: a, offsetHeight: u } = r;
          (a !== o.width || u !== o.height) &&
            ((o = { width: a, height: u }), t('resize', o));
        }
      }
      const { proxy: l } = Ee();
      if (Rd === !0) {
        let a;
        const u = (c) => {
          (r = l.$el.parentNode),
            r
              ? ((a = new ResizeObserver(i)), a.observe(r), s())
              : c !== !0 &&
                Ge(() => {
                  u(!0);
                });
        };
        return (
          st(() => {
            u();
          }),
          De(() => {
            n !== null && clearTimeout(n),
              a !== void 0 &&
                (a.disconnect !== void 0
                  ? a.disconnect()
                  : r && a.unobserve(r));
          }),
          Hn
        );
      } else {
        let c = function () {
            n !== null && (clearTimeout(n), (n = null)),
              u !== void 0 &&
                (u.removeEventListener !== void 0 &&
                  u.removeEventListener('resize', i, Ie.passive),
                (u = void 0));
          },
          h = function () {
            c(),
              r &&
                r.contentDocument &&
                ((u = r.contentDocument.defaultView),
                u.addEventListener('resize', i, Ie.passive),
                s());
          };
        const a = V1();
        let u;
        return (
          st(() => {
            Ge(() => {
              (r = l.$el), r && h();
            });
          }),
          De(c),
          (l.trigger = i),
          () => {
            if (a.value === !0)
              return q('object', {
                style: Eu.style,
                tabindex: -1,
                type: 'text/html',
                data: Eu.url,
                'aria-hidden': 'true',
                onLoad: h,
              });
          }
        );
      }
    },
  }),
  j1 = Se({
    name: 'QHeader',
    props: {
      modelValue: { type: Boolean, default: !0 },
      reveal: Boolean,
      revealOffset: { type: Number, default: 250 },
      bordered: Boolean,
      elevated: Boolean,
      heightHint: { type: [String, Number], default: 50 },
    },
    emits: ['reveal', 'focusin'],
    setup(e, { slots: t, emit: n }) {
      const {
          proxy: { $q: r },
        } = Ee(),
        o = Qe(cl, Xn);
      if (o === Xn)
        return console.error('QHeader needs to be child of QLayout'), Xn;
      const i = ae(parseInt(e.heightHint, 10)),
        s = ae(!0),
        l = H(
          () =>
            e.reveal === !0 ||
            o.view.value.indexOf('H') > -1 ||
            (r.platform.is.ios && o.isContainer.value === !0)
        ),
        a = H(() => {
          if (e.modelValue !== !0) return 0;
          if (l.value === !0) return s.value === !0 ? i.value : 0;
          const g = i.value - o.scroll.value.position;
          return g > 0 ? g : 0;
        }),
        u = H(() => e.modelValue !== !0 || (l.value === !0 && s.value !== !0)),
        c = H(() => e.modelValue === !0 && u.value === !0 && e.reveal === !0),
        h = H(
          () =>
            'q-header q-layout__section--marginal ' +
            (l.value === !0 ? 'fixed' : 'absolute') +
            '-top' +
            (e.bordered === !0 ? ' q-header--bordered' : '') +
            (u.value === !0 ? ' q-header--hidden' : '') +
            (e.modelValue !== !0 ? ' q-layout--prevent-focus' : '')
        ),
        f = H(() => {
          const g = o.rows.value.top,
            E = {};
          return (
            g[0] === 'l' &&
              o.left.space === !0 &&
              (E[r.lang.rtl === !0 ? 'right' : 'left'] = `${o.left.size}px`),
            g[2] === 'r' &&
              o.right.space === !0 &&
              (E[r.lang.rtl === !0 ? 'left' : 'right'] = `${o.right.size}px`),
            E
          );
        });
      function m(g, E) {
        o.update('header', g, E);
      }
      function P(g, E) {
        g.value !== E && (g.value = E);
      }
      function A({ height: g }) {
        P(i, g), m('size', g);
      }
      function O(g) {
        c.value === !0 && P(s, !0), n('focusin', g);
      }
      fe(
        () => e.modelValue,
        (g) => {
          m('space', g), P(s, !0), o.animate();
        }
      ),
        fe(a, (g) => {
          m('offset', g);
        }),
        fe(
          () => e.reveal,
          (g) => {
            g === !1 && P(s, e.modelValue);
          }
        ),
        fe(s, (g) => {
          o.animate(), n('reveal', g);
        }),
        fe(o.scroll, (g) => {
          e.reveal === !0 &&
            P(
              s,
              g.direction === 'up' ||
                g.position <= e.revealOffset ||
                g.position - g.inflectionPoint < 100
            );
        });
      const w = {};
      return (
        (o.instances.header = w),
        e.modelValue === !0 && m('size', i.value),
        m('space', e.modelValue),
        m('offset', a.value),
        De(() => {
          o.instances.header === w &&
            ((o.instances.header = void 0),
            m('size', 0),
            m('offset', 0),
            m('space', !1));
        }),
        () => {
          const g = Xf(t.default, []);
          return (
            e.elevated === !0 &&
              g.push(
                q('div', {
                  class:
                    'q-layout__shadow absolute-full overflow-hidden no-pointer-events',
                })
              ),
            g.push(q(As, { debounce: 0, onResize: A })),
            q('header', { class: h.value, style: f.value, onFocusin: O }, g)
          );
        }
      );
    },
  }),
  U1 = Se({
    name: 'QPageContainer',
    setup(e, { slots: t }) {
      const {
          proxy: { $q: n },
        } = Ee(),
        r = Qe(cl, Xn);
      if (r === Xn)
        return console.error('QPageContainer needs to be child of QLayout'), Xn;
      Qn(qg, !0);
      const o = H(() => {
        const i = {};
        return (
          r.header.space === !0 && (i.paddingTop = `${r.header.size}px`),
          r.right.space === !0 &&
            (i[
              `padding${n.lang.rtl === !0 ? 'Left' : 'Right'}`
            ] = `${r.right.size}px`),
          r.footer.space === !0 && (i.paddingBottom = `${r.footer.size}px`),
          r.left.space === !0 &&
            (i[
              `padding${n.lang.rtl === !0 ? 'Right' : 'Left'}`
            ] = `${r.left.size}px`),
          i
        );
      });
      return () =>
        q('div', { class: 'q-page-container', style: o.value }, Ke(t.default));
    },
  });
const { passive: wu } = Ie,
  W1 = ['both', 'horizontal', 'vertical'];
var G1 = Se({
    name: 'QScrollObserver',
    props: {
      axis: {
        type: String,
        validator: (e) => W1.includes(e),
        default: 'vertical',
      },
      debounce: [String, Number],
      scrollTarget: { default: void 0 },
    },
    emits: ['scroll'],
    setup(e, { emit: t }) {
      const n = {
        position: { top: 0, left: 0 },
        direction: 'down',
        directionChanged: !1,
        delta: { top: 0, left: 0 },
        inflectionPoint: { top: 0, left: 0 },
      };
      let r = null,
        o,
        i;
      fe(
        () => e.scrollTarget,
        () => {
          a(), l();
        }
      );
      function s() {
        r !== null && r();
        const h = Math.max(0, Sd(o)),
          f = Ld(o),
          m = { top: h - n.position.top, left: f - n.position.left };
        if (
          (e.axis === 'vertical' && m.top === 0) ||
          (e.axis === 'horizontal' && m.left === 0)
        )
          return;
        const P =
          Math.abs(m.top) >= Math.abs(m.left)
            ? m.top < 0
              ? 'up'
              : 'down'
            : m.left < 0
            ? 'left'
            : 'right';
        (n.position = { top: h, left: f }),
          (n.directionChanged = n.direction !== P),
          (n.delta = m),
          n.directionChanged === !0 &&
            ((n.direction = P), (n.inflectionPoint = n.position)),
          t('scroll', { ...n });
      }
      function l() {
        (o = xd(i, e.scrollTarget)), o.addEventListener('scroll', u, wu), u(!0);
      }
      function a() {
        o !== void 0 && (o.removeEventListener('scroll', u, wu), (o = void 0));
      }
      function u(h) {
        if (h === !0 || e.debounce === 0 || e.debounce === '0') s();
        else if (r === null) {
          const [f, m] = e.debounce
            ? [setTimeout(s, e.debounce), clearTimeout]
            : [requestAnimationFrame(s), cancelAnimationFrame];
          r = () => {
            m(f), (r = null);
          };
        }
      }
      const { proxy: c } = Ee();
      return (
        fe(() => c.$q.lang.rtl, s),
        st(() => {
          (i = c.$el.parentNode), l();
        }),
        De(() => {
          r !== null && r(), a();
        }),
        Object.assign(c, { trigger: u, getPosition: () => n }),
        Hn
      );
    },
  }),
  K1 = Se({
    name: 'QLayout',
    props: {
      container: Boolean,
      view: {
        type: String,
        default: 'hhh lpr fff',
        validator: (e) => /^(h|l)h(h|r) lpr (f|l)f(f|r)$/.test(e.toLowerCase()),
      },
      onScroll: Function,
      onScrollHeight: Function,
      onResize: Function,
    },
    setup(e, { slots: t, emit: n }) {
      const {
          proxy: { $q: r },
        } = Ee(),
        o = ae(null),
        i = ae(r.screen.height),
        s = ae(e.container === !0 ? 0 : r.screen.width),
        l = ae({ position: 0, direction: 'down', inflectionPoint: 0 }),
        a = ae(0),
        u = ae(Lt.value === !0 ? 0 : Co()),
        c = H(
          () =>
            'q-layout q-layout--' +
            (e.container === !0 ? 'containerized' : 'standard')
        ),
        h = H(() =>
          e.container === !1 ? { minHeight: r.screen.height + 'px' } : null
        ),
        f = H(() =>
          u.value !== 0
            ? { [r.lang.rtl === !0 ? 'left' : 'right']: `${u.value}px` }
            : null
        ),
        m = H(() =>
          u.value !== 0
            ? {
                [r.lang.rtl === !0 ? 'right' : 'left']: 0,
                [r.lang.rtl === !0 ? 'left' : 'right']: `-${u.value}px`,
                width: `calc(100% + ${u.value}px)`,
              }
            : null
        );
      function P(k) {
        if (e.container === !0 || document.qScrollPrevented !== !0) {
          const S = {
            position: k.position.top,
            direction: k.direction,
            directionChanged: k.directionChanged,
            inflectionPoint: k.inflectionPoint.top,
            delta: k.delta.top,
          };
          (l.value = S), e.onScroll !== void 0 && n('scroll', S);
        }
      }
      function A(k) {
        const { height: S, width: L } = k;
        let T = !1;
        i.value !== S &&
          ((T = !0),
          (i.value = S),
          e.onScrollHeight !== void 0 && n('scrollHeight', S),
          w()),
          s.value !== L && ((T = !0), (s.value = L)),
          T === !0 && e.onResize !== void 0 && n('resize', k);
      }
      function O({ height: k }) {
        a.value !== k && ((a.value = k), w());
      }
      function w() {
        if (e.container === !0) {
          const k = i.value > a.value ? Co() : 0;
          u.value !== k && (u.value = k);
        }
      }
      let g = null;
      const E = {
        instances: {},
        view: H(() => e.view),
        isContainer: H(() => e.container),
        rootRef: o,
        height: i,
        containerHeight: a,
        scrollbarWidth: u,
        totalWidth: H(() => s.value + u.value),
        rows: H(() => {
          const k = e.view.toLowerCase().split(' ');
          return {
            top: k[0].split(''),
            middle: k[1].split(''),
            bottom: k[2].split(''),
          };
        }),
        header: bt({ size: 0, offset: 0, space: !1 }),
        right: bt({ size: 300, offset: 0, space: !1 }),
        footer: bt({ size: 0, offset: 0, space: !1 }),
        left: bt({ size: 300, offset: 0, space: !1 }),
        scroll: l,
        animate() {
          g !== null
            ? clearTimeout(g)
            : document.body.classList.add('q-body--layout-animate'),
            (g = setTimeout(() => {
              (g = null),
                document.body.classList.remove('q-body--layout-animate');
            }, 155));
        },
        update(k, S, L) {
          E[k][S] = L;
        },
      };
      if ((Qn(cl, E), Co() > 0)) {
        let L = function () {
            (k = null), S.classList.remove('hide-scrollbar');
          },
          T = function () {
            if (k === null) {
              if (S.scrollHeight > r.screen.height) return;
              S.classList.add('hide-scrollbar');
            } else clearTimeout(k);
            k = setTimeout(L, 300);
          },
          R = function (D) {
            k !== null && D === 'remove' && (clearTimeout(k), L()),
              window[`${D}EventListener`]('resize', T);
          },
          k = null;
        const S = document.body;
        fe(() => (e.container !== !0 ? 'add' : 'remove'), R),
          e.container !== !0 && R('add'),
          ur(() => {
            R('remove');
          });
      }
      return () => {
        const k = rn(t.default, [
            q(G1, { onScroll: P }),
            q(As, { onResize: A }),
          ]),
          S = q(
            'div',
            {
              class: c.value,
              style: h.value,
              ref: e.container === !0 ? void 0 : o,
              tabindex: -1,
            },
            k
          );
        return e.container === !0
          ? q('div', { class: 'q-layout-container overflow-hidden', ref: o }, [
              q(As, { onResize: O }),
              q('div', { class: 'absolute-full', style: f.value }, [
                q('div', { class: 'scroll', style: m.value }, [S]),
              ]),
            ])
          : S;
      };
    },
  });
function Cu(e) {
  if (e === !1) return 0;
  if (e === !0 || e === void 0) return 1;
  const t = parseInt(e, 10);
  return isNaN(t) ? 0 : t;
}
var ku = Qf({
  name: 'close-popup',
  beforeMount(e, { value: t }) {
    const n = {
      depth: Cu(t),
      handler(r) {
        n.depth !== 0 &&
          setTimeout(() => {
            const o = S1(e);
            o !== void 0 && L1(o, r, n.depth);
          });
      },
      handlerKey(r) {
        cn(r, 13) === !0 && n.handler(r);
      },
    };
    (e.__qclosepopup = n),
      e.addEventListener('click', n.handler),
      e.addEventListener('keyup', n.handlerKey);
  },
  updated(e, { value: t, oldValue: n }) {
    t !== n && (e.__qclosepopup.depth = Cu(t));
  },
  beforeUnmount(e) {
    const t = e.__qclosepopup;
    e.removeEventListener('click', t.handler),
      e.removeEventListener('keyup', t.handlerKey),
      delete e.__qclosepopup;
  },
});
const Q1 =
    'M0 0h24v24H0z@@fill:none;&&M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8z&&M12.5 7H11v6l5.25 3.15.75-1.23-4.5-2.67z',
  X1 = 'M0 0h24v24H0z@@fill:none;&&M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z',
  Y1 =
    'M0 0h24v24H0z@@fill:none;&&M19 3H5c-1.11 0-2 .9-2 2v14c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-2 10h-4v4h-2v-4H7v-2h4V7h2v4h4v2z',
  J1 =
    'M0 0h24v24H0z@@fill:none;&&M20 11H7.83l5.59-5.59L12 4l-8 8 8 8 1.41-1.41L7.83 13H20v-2z',
  Z1 =
    'M0 0h24v24H0V0z@@fill:none;&&M20 12l-1.41-1.41L13 16.17V4h-2v12.17l-5.58-5.59L4 12l8 8 8-8z',
  Pu = 'M0 0h24v24H0z@@fill:none;&&M7 10l5 5 5-5z',
  eb =
    'M0 0h24v24H0z@@fill:none;&&M12 4l-1.41 1.41L16.17 11H4v2h12.17l-5.58 5.59L12 20l8-8z',
  xu =
    'M0 0h24v24H0V0z@@fill:none;&&M4 12l1.41 1.41L11 7.83V20h2V7.83l5.58 5.59L20 12l-8-8-8 8z',
  Su =
    'M0 0h24v24H0z@@fill:none;&&M12 2C6.47 2 2 6.47 2 12s4.47 10 10 10 10-4.47 10-10S17.53 2 12 2zm5 13.59L15.59 17 12 13.41 8.41 17 7 15.59 10.59 12 7 8.41 8.41 7 12 10.59 15.59 7 17 8.41 13.41 12 17 15.59z',
  Lu =
    'M0 0h24v24H0z@@fill:none;&&M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z',
  tb =
    'M0 0h24v24H0z@@fill:none;&&M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z',
  br =
    'M0 0h24v24H0z@@fill:none;&&M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12z',
  yr =
    'M0 0h24v24H0z@@fill:none;&&M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z',
  nb =
    'M0 0h24v24H0z@@fill:none;&&M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z',
  rb =
    'M0 0h24v24H0z@@fill:none;&&M5 13h14v-2H5v2zm-2 4h14v-2H3v2zM7 7v2h14V7H7z',
  ob =
    'M0 0h24v24H0z@@fill:none;&&M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z',
  ib =
    'M0 0h24v24H0z@@fill:none;&&M19.35 10.04C18.67 6.59 15.64 4 12 4 9.11 4 6.6 5.64 5.35 8.04 2.34 8.36 0 10.91 0 14c0 3.31 2.69 6 6 6h13c2.76 0 5-2.24 5-5 0-2.64-2.05-4.78-4.65-4.96zM14 13v4h-4v-4H7l5-5 5 5h-3z',
  Mu =
    'M0 0h24v24H0V0z@@fill:none;&&M9.4 16.6L4.8 12l4.6-4.6L8 6l-6 6 6 6 1.4-1.4zm5.2 0l4.6-4.6-4.6-4.6L16 6l6 6-6 6-1.4-1.4z',
  sb =
    'M0 0 H24 V24 H0 V0 z@@fill:none;&&M12,3c-4.97,0-9,4.03-9,9s4.03,9,9,9s9-4.03,9-9c0-0.46-0.04-0.92-0.1-1.36c-0.98,1.37-2.58,2.26-4.4,2.26 c-2.98,0-5.4-2.42-5.4-5.4c0-1.81,0.89-3.42,2.26-4.4C12.92,3.04,12.46,3,12,3L12,3z',
  lb =
    'M0 0h24v24H0z@@fill:none;&&M9 16.2L4.8 12l-1.4 1.4L9 19 21 7l-1.4-1.4L9 16.2z',
  ab =
    'M0 0h24v24H0z@@fill:none;&&M18 7l-1.41-1.41-6.34 6.34 1.41 1.41L18 7zm4.24-1.41L11.66 16.17 7.48 12l-1.41 1.41L11.66 19l12-12-1.42-1.41zM.41 13.41L6 19l1.41-1.41L1.83 12 .41 13.41z',
  ub =
    'M0 0h24v24H0z@@fill:none;&&M3 17.25V21h3.75L17.81 9.94l-3.75-3.75L3 17.25zM20.71 7.04c.39-.39.39-1.02 0-1.41l-2.34-2.34c-.39-.39-1.02-.39-1.41 0l-1.83 1.83 3.75 3.75 1.83-1.83z',
  cb =
    'M0 0h24v24H0z@@fill:none;&&M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-2h2v2zm0-4h-2V7h2v6z',
  Au =
    'M18.41 16.59L13.82 12l4.59-4.59L17 6l-6 6 6 6zM6 6h2v12H6z&&M24 24H0V0h24v24z@@fill:none;',
  fb =
    'M0 0h24v24H0V0z@@fill:none;&&M9.93 13.5h4.14L12 7.98zM20 2H4c-1.1 0-2 .9-2 2v16c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm-4.05 16.5l-1.14-3H9.17l-1.12 3H5.96l5.11-13h1.86l5.11 13h-2.09z',
  db =
    'M0 0h24v24H0z@@fill:none;&&M7 15v2h10v-2H7zm-4 6h18v-2H3v2zm0-8h18v-2H3v2zm4-6v2h10V7H7zM3 3v2h18V3H3z',
  hb =
    'M0 0h24v24H0z@@fill:none;&&M3 21h18v-2H3v2zm0-4h18v-2H3v2zm0-4h18v-2H3v2zm0-4h18V7H3v2zm0-6v2h18V3H3z',
  Tu =
    'M0 0h24v24H0z@@fill:none;&&M15 15H3v2h12v-2zm0-8H3v2h12V7zM3 13h18v-2H3v2zm0 8h18v-2H3v2zM3 3v2h18V3H3z',
  mb =
    'M0 0h24v24H0z@@fill:none;&&M3 21h18v-2H3v2zm6-4h12v-2H9v2zm-6-4h18v-2H3v2zm6-4h12V7H9v2zM3 3v2h18V3H3z',
  gb =
    'M0 0h24v24H0z@@fill:none;&&M15.6 10.79c.97-.67 1.65-1.77 1.65-2.79 0-2.26-1.75-4-4-4H7v14h7.04c2.09 0 3.71-1.7 3.71-3.79 0-1.52-.86-2.82-2.15-3.42zM10 6.5h3c.83 0 1.5.67 1.5 1.5s-.67 1.5-1.5 1.5h-3v-3zm3.5 9H10v-3h3.5c.83 0 1.5.67 1.5 1.5s-.67 1.5-1.5 1.5z',
  vb =
    'M0 0h24v24H0z@@fill:none;&&M3.27 5L2 6.27l6.97 6.97L6.5 19h3l1.57-3.66L16.73 21 18 19.73 3.55 5.27 3.27 5zM6 5v.18L8.82 8h2.4l-.72 1.68 2.1 2.1L14.21 8H20V5H6z',
  pb =
    'M0 0h24v24H0z@@fill:none;&&M11 17h10v-2H11v2zm-8-5l4 4V8l-4 4zm0 9h18v-2H3v2zM3 3v2h18V3H3zm8 6h10V7H11v2zm0 4h10v-2H11v2z',
  bb =
    'M0 0h24v24H0z@@fill:none;&&M3 21h18v-2H3v2zM3 8v8l4-4-4-4zm8 9h10v-2H11v2zM3 3v2h18V3H3zm8 6h10V7H11v2zm0 4h10v-2H11v2z',
  yb =
    'M0 0h24v24H0z@@fill:none;&&M10 4v3h2.21l-3.42 8H6v3h8v-3h-2.21l3.42-8H18V4z',
  _b =
    'M0 0h24v24H0V0z@@fill:none;&&M4 10.5c-.83 0-1.5.67-1.5 1.5s.67 1.5 1.5 1.5 1.5-.67 1.5-1.5-.67-1.5-1.5-1.5zm0-6c-.83 0-1.5.67-1.5 1.5S3.17 7.5 4 7.5 5.5 6.83 5.5 6 4.83 4.5 4 4.5zm0 12c-.83 0-1.5.68-1.5 1.5s.68 1.5 1.5 1.5 1.5-.68 1.5-1.5-.67-1.5-1.5-1.5zM7 19h14v-2H7v2zm0-6h14v-2H7v2zm0-8v2h14V5H7z',
  Eb =
    'M0 0h24v24H0z@@fill:none;&&M2 17h2v.5H3v1h1v.5H2v1h3v-4H2v1zm1-9h1V4H2v1h1v3zm-1 3h1.8L2 13.1v.9h3v-1H3.2L5 10.9V10H2v1zm5-6v2h14V5H7zm0 14h14v-2H7v2zm0-6h14v-2H7v2z',
  wb = 'M0 0h24v24H0z@@fill:none;&&M6 17h3l2-4V7H5v6h3zm8 0h3l2-4V7h-6v6h3z',
  Ri =
    'M0 0h24v24H0z@@fill:none;&&M9 4v3h5v12h3V7h5V4H9zm-6 8h3v7h3v-7h3V9H3v3z',
  Cb =
    'M0 0h24v24H0z@@fill:none;&&M12 17c3.31 0 6-2.69 6-6V3h-2.5v8c0 1.93-1.57 3.5-3.5 3.5S8.5 12.93 8.5 11V3H6v8c0 3.31 2.69 6 6 6zm-7 2v2h14v-2H5z',
  Id =
    'M0 0h24v24H0z@@fill:none;&&M7 14H5v5h5v-2H7v-3zm-2-4h2V7h3V5H5v5zm12 7h-3v2h5v-5h-2v3zM14 5v2h3v3h2V5h-5z',
  kb =
    'M0 0h24v24H0z@@fill:none;&&M5 16h3v3h2v-5H5v2zm3-8H5v2h5V5H8v3zm6 11h2v-3h3v-2h-5v5zm2-11V5h-2v5h5V8h-3z',
  Pb =
    'M0 0h24v24H0z@@fill:none;&&M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z',
  xb =
    'M0 0h24v24H0z@@fill:none;&&M11 9h2v2h-2zm-2 2h2v2H9zm4 0h2v2h-2zm2-2h2v2h-2zM7 9h2v2H7zm12-6H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zM9 18H7v-2h2v2zm4 0h-2v-2h2v2zm4 0h-2v-2h2v2zm2-7h-2v2h2v2h-2v-2h-2v2h-2v-2h-2v2H9v-2H7v2H5v-2h2v-2H5V5h14v6z',
  Sb =
    'M0 0h24v24H0z@@fill:none;&&M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-6h2v6zm0-8h-2V7h2v2z',
  Ii =
    'M0 0h24v24H0V0z@@fill:none;&&M7.41 8.59L12 13.17l4.59-4.58L18 10l-6 6-6-6 1.41-1.41z',
  Lb =
    'M0 0h24v24H0V0z@@fill:none;&&M15.41 16.59L10.83 12l4.58-4.59L14 6l-6 6 6 6 1.41-1.41z',
  Mb =
    'M0 0h24v24H0V0z@@fill:none;&&M8.59 16.59L13.17 12 8.59 7.41 10 6l6 6-6 6-1.41-1.41z',
  Ou =
    'M0 0h24v24H0z@@fill:none;&&M7.41 15.41L12 10.83l4.59 4.58L18 14l-6-6-6 6z',
  Ab =
    'M0 0h24v24H0z@@fill:none;&&M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zm6.93 6h-2.95c-.32-1.25-.78-2.45-1.38-3.56 1.84.63 3.37 1.91 4.33 3.56zM12 4.04c.83 1.2 1.48 2.53 1.91 3.96h-3.82c.43-1.43 1.08-2.76 1.91-3.96zM4.26 14C4.1 13.36 4 12.69 4 12s.1-1.36.26-2h3.38c-.08.66-.14 1.32-.14 2 0 .68.06 1.34.14 2H4.26zm.82 2h2.95c.32 1.25.78 2.45 1.38 3.56-1.84-.63-3.37-1.9-4.33-3.56zm2.95-8H5.08c.96-1.66 2.49-2.93 4.33-3.56C8.81 5.55 8.35 6.75 8.03 8zM12 19.96c-.83-1.2-1.48-2.53-1.91-3.96h3.82c-.43 1.43-1.08 2.76-1.91 3.96zM14.34 14H9.66c-.09-.66-.16-1.32-.16-2 0-.68.07-1.35.16-2h4.68c.09.65.16 1.32.16 2 0 .68-.07 1.34-.16 2zm.25 5.56c.6-1.11 1.06-2.31 1.38-3.56h2.95c-.96 1.65-2.49 2.93-4.33 3.56zM16.36 14c.08-.66.14-1.32.14-2 0-.68-.06-1.34-.14-2h3.38c.16.64.26 1.31.26 2s-.1 1.36-.26 2h-3.38z',
  Ru =
    'M0 0h24v24H0V0z@@fill:none;&&M5.59 7.41L10.18 12l-4.59 4.59L7 18l6-6-6-6zM16 6h2v12h-2z',
  Tb =
    'M0 0h24v24H0z@@fill:none;&&M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2z',
  Ob =
    'M0 0 H24 V24 H0 V0 z@@fill:none;&&M12,7c-2.76,0-5,2.24-5,5s2.24,5,5,5s5-2.24,5-5S14.76,7,12,7L12,7z M2,13l2,0c0.55,0,1-0.45,1-1s-0.45-1-1-1l-2,0 c-0.55,0-1,0.45-1,1S1.45,13,2,13z M20,13l2,0c0.55,0,1-0.45,1-1s-0.45-1-1-1l-2,0c-0.55,0-1,0.45-1,1S19.45,13,20,13z M11,2v2 c0,0.55,0.45,1,1,1s1-0.45,1-1V2c0-0.55-0.45-1-1-1S11,1.45,11,2z M11,20v2c0,0.55,0.45,1,1,1s1-0.45,1-1v-2c0-0.55-0.45-1-1-1 C11.45,19,11,19.45,11,20z M5.99,4.58c-0.39-0.39-1.03-0.39-1.41,0c-0.39,0.39-0.39,1.03,0,1.41l1.06,1.06 c0.39,0.39,1.03,0.39,1.41,0s0.39-1.03,0-1.41L5.99,4.58z M18.36,16.95c-0.39-0.39-1.03-0.39-1.41,0c-0.39,0.39-0.39,1.03,0,1.41 l1.06,1.06c0.39,0.39,1.03,0.39,1.41,0c0.39-0.39,0.39-1.03,0-1.41L18.36,16.95z M19.42,5.99c0.39-0.39,0.39-1.03,0-1.41 c-0.39-0.39-1.03-0.39-1.41,0l-1.06,1.06c-0.39,0.39-0.39,1.03,0,1.41s1.03,0.39,1.41,0L19.42,5.99z M7.05,18.36 c0.39-0.39,0.39-1.03,0-1.41c-0.39-0.39-1.03-0.39-1.41,0l-1.06,1.06c-0.39,0.39-0.39,1.03,0,1.41s1.03,0.39,1.41,0L7.05,18.36z',
  Rb =
    'M0 0h24v24H0z@@fill:none;&&M3.9 12c0-1.71 1.39-3.1 3.1-3.1h4V7H7c-2.76 0-5 2.24-5 5s2.24 5 5 5h4v-1.9H7c-1.71 0-3.1-1.39-3.1-3.1zM8 13h8v-2H8v2zm9-6h-4v1.9h4c1.71 0 3.1 1.39 3.1 3.1s-1.39 3.1-3.1 3.1h-4V17h4c2.76 0 5-2.24 5-5s-2.24-5-5-5z',
  G_ =
    'M0 0 H24 V24 H0 V0 z@@fill:none;&&M19.98,14.82l-0.63,4.46C19.21,20.27,18.36,21,17.37,21h-6.16c-0.53,0-1.29-0.21-1.66-0.59L5,15.62l0.83-0.84 c0.24-0.24,0.58-0.35,0.92-0.28L10,15.24V4.5C10,3.67,10.67,3,11.5,3S13,3.67,13,4.5v6h0.91c0.31,0,0.62,0.07,0.89,0.21l4.09,2.04 C19.66,13.14,20.1,13.97,19.98,14.82z',
  Ib = 'M0 0h24v24H0z@@fill:none;&&M8 5v14l11-7z',
  Fb =
    'M0 0h24v24H0z@@fill:none;&&M19 8H5c-1.66 0-3 1.34-3 3v6h4v4h12v-4h4v-6c0-1.66-1.34-3-3-3zm-3 11H8v-5h8v5zm3-7c-.55 0-1-.45-1-1s.45-1 1-1 1 .45 1 1-.45 1-1 1zm-1-9H6v4h12V3z',
  Hb =
    'M0 0h24v24H0z@@fill:none;&&M12 19 m-2, 0 a2,2 0 1,0 4,0 a2,2 0 1,0 -4,0&&M10 3h4v12h-4z',
  Db =
    'M0 0h24v24H0z@@fill:none;&&M18.4 10.6C16.55 8.99 14.15 8 11.5 8c-4.65 0-8.58 3.03-9.96 7.22L3.9 16c1.05-3.19 4.05-5.5 7.6-5.5 1.95 0 3.73.72 5.12 1.88L13 16h9V7l-3.6 3.6z',
  Nb =
    'M0 0h24v24H0z@@fill:none;&&M17.65 6.35C16.2 4.9 14.21 4 12 4c-4.42 0-7.99 3.58-7.99 8s3.57 8 7.99 8c3.73 0 6.84-2.55 7.73-6h-2.08c-.82 2.33-3.04 4-5.65 4-3.31 0-6-2.69-6-6s2.69-6 6-6c1.66 0 3.14.69 4.22 1.78L13 11h7V4l-2.35 2.35z',
  Bb = 'M0 0h24v24H0z@@fill:none;&&M19 13H5v-2h14v2z',
  K_ =
    'M0 0h24v24H0z@@fill:none;&&M0 0h24v24H0z@@fill:none;&&M12 17.27 18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z',
  Q_ =
    'M0 0h24v24H0z@@fill:none;&&M22 9.24l-7.19-.62L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21 12 17.27 18.18 21l-1.63-7.03L22 9.24zM12 15.4l-3.76 2.27 1-4.28-3.32-2.88 4.38-.38L12 6.1l1.71 4.04 4.38.38-3.32 2.88 1 4.28L12 15.4z',
  zb =
    'M0 0 H24 V24 H0 V0 z@@fill:none;&&M6.85,7.08C6.85,4.37,9.45,3,12.24,3c1.64,0,3,0.49,3.9,1.28c0.77,0.65,1.46,1.73,1.46,3.24h-3.01 c0-0.31-0.05-0.59-0.15-0.85c-0.29-0.86-1.2-1.28-2.25-1.28c-1.86,0-2.34,1.02-2.34,1.7c0,0.48,0.25,0.88,0.74,1.21 C10.97,8.55,11.36,8.78,12,9H7.39C7.18,8.66,6.85,8.11,6.85,7.08z M21,12v-2H3v2h9.62c1.15,0.45,1.96,0.75,1.96,1.97 c0,1-0.81,1.67-2.28,1.67c-1.54,0-2.93-0.54-2.93-2.51H6.4c0,0.55,0.08,1.13,0.24,1.58c0.81,2.29,3.29,3.3,5.67,3.3 c2.27,0,5.3-0.89,5.3-4.05c0-0.3-0.01-1.16-0.48-1.94H21V12z',
  qb =
    'M0 0h24v24H0z@@fill:none;&&M2.53 19.65l1.34.56v-9.03l-2.43 5.86c-.41 1.02.08 2.19 1.09 2.61zm19.5-3.7L17.07 3.98c-.31-.75-1.04-1.21-1.81-1.23-.26 0-.53.04-.79.15L7.1 5.95c-.75.31-1.21 1.03-1.23 1.8-.01.27.04.54.15.8l4.96 11.97c.31.76 1.05 1.22 1.83 1.23.26 0 .52-.05.77-.15l7.36-3.05c1.02-.42 1.51-1.59 1.09-2.6zM7.88 8.75c-.55 0-1-.45-1-1s.45-1 1-1 1 .45 1 1-.45 1-1 1zm-2 11c0 1.1.9 2 2 2h1.45l-3.45-8.34v6.34z',
  $b =
    'M0 0h24v24H0z@@fill:none;&&M5 17v2h14v-2H5zm4.5-4.2h5l.9 2.2h2.1L12.75 4h-1.5L6.5 15h2.1l.9-2.2zM12 5.98L13.87 11h-3.74L12 5.98z',
  X_ =
    'M0 0 H24 V24 H0 V0 z@@fill:none;&&M9 1 H15 V3 H9 V1 z&&M19.03,7.39l1.42-1.42c-0.43-0.51-0.9-0.99-1.41-1.41l-1.42,1.42C16.07,4.74,14.12,4,12,4c-4.97,0-9,4.03-9,9 c0,4.97,4.02,9,9,9s9-4.03,9-9C21,10.88,20.26,8.93,19.03,7.39z M13,14h-2V8h2V14z',
  Vb =
    'M0 0h24v24H0z@@fill:none;&&M19 3h-1V1h-2v2H8V1H6v2H5c-1.11 0-1.99.9-1.99 2L3 19c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 16H5V8h14v11zM7 10h5v5H7z',
  jb =
    'M0 0h24v24H0z@@fill:none;&&M3 17v2h6v-2H3zM3 5v2h10V5H3zm10 16v-2h8v-2h-8v-2h-2v6h2zM7 9v2H3v2h4v2h2V9H7zm14 4v-2H11v2h10zm-6-4h2V7h4V5h-4V3h-2v6z',
  Ub =
    'M0 0h24v24H0z@@fill:none;&&M12.5 8c-2.65 0-5.05.99-6.9 2.6L2 7v9h9l-3.62-3.62c1.39-1.16 3.16-1.88 5.12-1.88 3.54 0 6.55 2.31 7.6 5.5l2.37-.78C21.08 11.03 17.15 8 12.5 8z',
  Wb =
    'M0 0h24v24H0z@@fill:none;&&M16 13h-3V3h-2v10H8l4 4 4-4zM4 19v2h16v-2H4z',
  Gb = 'M0 0h24v24H0z@@fill:none;&&M8 11h3v10h2V11h3l-4-4-4 4zM4 3v2h16V3H4z',
  Y_ =
    'M0 0h24v24H0z@@fill:none;&&M12 4.5C7 4.5 2.73 7.61 1 12c1.73 4.39 6 7.5 11 7.5s9.27-3.11 11-7.5c-1.73-4.39-6-7.5-11-7.5zM12 17c-2.76 0-5-2.24-5-5s2.24-5 5-5 5 2.24 5 5-2.24 5-5 5zm0-8c-1.66 0-3 1.34-3 3s1.34 3 3 3 3-1.34 3-3-1.34-3-3-3z',
  J_ =
    'M0 0h24v24H0zm0 0h24v24H0zm0 0h24v24H0zm0 0h24v24H0z@@fill:none;&&M12 7c2.76 0 5 2.24 5 5 0 .65-.13 1.26-.36 1.83l2.92 2.92c1.51-1.26 2.7-2.89 3.43-4.75-1.73-4.39-6-7.5-11-7.5-1.4 0-2.74.25-3.98.7l2.16 2.16C10.74 7.13 11.35 7 12 7zM2 4.27l2.28 2.28.46.46C3.08 8.3 1.78 10.02 1 12c1.73 4.39 6 7.5 11 7.5 1.55 0 3.03-.3 4.38-.84l.42.42L19.73 22 21 20.73 3.27 3 2 4.27zM7.53 9.8l1.55 1.55c-.05.21-.08.43-.08.65 0 1.66 1.34 3 3 3 .22 0 .44-.03.65-.08l1.55 1.55c-.67.33-1.41.53-2.2.53-2.76 0-5-2.24-5-5 0-.79.2-1.53.53-2.2zm4.31-.78l3.15 3.15.02-.16c0-1.66-1.34-3-3-3l-.17.01z',
  Fi =
    'M0 0h24v24H0z@@fill:none;&&M1 21h22L12 2 1 21zm12-3h-2v-2h2v2zm0-4h-2v-4h2v4z',
  Kb = /^rgb(a)?\((\d{1,3}),(\d{1,3}),(\d{1,3}),?([01]?\.?\d*?)?\)$/;
function fi({ r: e, g: t, b: n, a: r }) {
  const o = r !== void 0;
  if (
    ((e = Math.round(e)),
    (t = Math.round(t)),
    (n = Math.round(n)),
    e > 255 || t > 255 || n > 255 || (o && r > 100))
  )
    throw new TypeError(
      'Expected 3 numbers below 256 (and optionally one below 100)'
    );
  return (
    (r = o
      ? (Math.round((255 * r) / 100) | (1 << 8)).toString(16).slice(1)
      : ''),
    '#' + (n | (t << 8) | (e << 16) | (1 << 24)).toString(16).slice(1) + r
  );
}
function Fd(e) {
  if (typeof e != 'string') throw new TypeError('Expected a string');
  (e = e.replace(/^#/, '')),
    e.length === 3
      ? (e = e[0] + e[0] + e[1] + e[1] + e[2] + e[2])
      : e.length === 4 &&
        (e = e[0] + e[0] + e[1] + e[1] + e[2] + e[2] + e[3] + e[3]);
  const t = parseInt(e, 16);
  return e.length > 6
    ? {
        r: (t >> 24) & 255,
        g: (t >> 16) & 255,
        b: (t >> 8) & 255,
        a: Math.round((t & 255) / 2.55),
      }
    : { r: t >> 16, g: (t >> 8) & 255, b: t & 255 };
}
function Qb({ h: e, s: t, v: n, a: r }) {
  let o, i, s;
  (t = t / 100), (n = n / 100), (e = e / 360);
  const l = Math.floor(e * 6),
    a = e * 6 - l,
    u = n * (1 - t),
    c = n * (1 - a * t),
    h = n * (1 - (1 - a) * t);
  switch (l % 6) {
    case 0:
      (o = n), (i = h), (s = u);
      break;
    case 1:
      (o = c), (i = n), (s = u);
      break;
    case 2:
      (o = u), (i = n), (s = h);
      break;
    case 3:
      (o = u), (i = c), (s = n);
      break;
    case 4:
      (o = h), (i = u), (s = n);
      break;
    case 5:
      (o = n), (i = u), (s = c);
      break;
  }
  return {
    r: Math.round(o * 255),
    g: Math.round(i * 255),
    b: Math.round(s * 255),
    a: r,
  };
}
function Xb({ r: e, g: t, b: n, a: r }) {
  const o = Math.max(e, t, n),
    i = Math.min(e, t, n),
    s = o - i,
    l = o === 0 ? 0 : s / o,
    a = o / 255;
  let u;
  switch (o) {
    case i:
      u = 0;
      break;
    case e:
      (u = t - n + s * (t < n ? 6 : 0)), (u /= 6 * s);
      break;
    case t:
      (u = n - e + s * 2), (u /= 6 * s);
      break;
    case n:
      (u = e - t + s * 4), (u /= 6 * s);
      break;
  }
  return {
    h: Math.round(u * 360),
    s: Math.round(l * 100),
    v: Math.round(a * 100),
    a: r,
  };
}
function dn(e) {
  if (typeof e != 'string') throw new TypeError('Expected a string');
  const t = e.replace(/ /g, ''),
    n = Kb.exec(t);
  if (n === null) return Fd(t);
  const r = {
    r: Math.min(255, parseInt(n[2], 10)),
    g: Math.min(255, parseInt(n[3], 10)),
    b: Math.min(255, parseInt(n[4], 10)),
  };
  if (n[1]) {
    const o = parseFloat(n[5]);
    r.a = Math.min(1, isNaN(o) === !0 ? 1 : o) * 100;
  }
  return r;
}
function Yb(e, t) {
  if (typeof e != 'string') throw new TypeError('Expected a string as color');
  if (typeof t != 'number') throw new TypeError('Expected a numeric percent');
  const n = dn(e),
    r = t < 0 ? 0 : 255,
    o = Math.abs(t) / 100,
    i = n.r,
    s = n.g,
    l = n.b;
  return (
    '#' +
    (
      16777216 +
      (Math.round((r - i) * o) + i) * 65536 +
      (Math.round((r - s) * o) + s) * 256 +
      (Math.round((r - l) * o) + l)
    )
      .toString(16)
      .slice(1)
  );
}
function Jb(e) {
  if (typeof e != 'string' && (!e || e.r === void 0))
    throw new TypeError('Expected a string or a {r, g, b} object as color');
  const t = typeof e == 'string' ? dn(e) : e,
    n = t.r / 255,
    r = t.g / 255,
    o = t.b / 255,
    i = n <= 0.03928 ? n / 12.92 : Math.pow((n + 0.055) / 1.055, 2.4),
    s = r <= 0.03928 ? r / 12.92 : Math.pow((r + 0.055) / 1.055, 2.4),
    l = o <= 0.03928 ? o / 12.92 : Math.pow((o + 0.055) / 1.055, 2.4);
  return 0.2126 * i + 0.7152 * s + 0.0722 * l;
}
function Zb(e) {
  if (typeof e != 'string' && (!e || e.r === void 0))
    throw new TypeError('Expected a string or a {r, g, b} object as color');
  const t = typeof e == 'string' ? dn(e) : e;
  return (t.r * 299 + t.g * 587 + t.b * 114) / 1e3;
}
function ey(e, t) {
  if (typeof e != 'string' && (!e || e.r === void 0))
    throw new TypeError(
      'Expected a string or a {r, g, b[, a]} object as fgColor'
    );
  if (typeof t != 'string' && (!t || t.r === void 0))
    throw new TypeError(
      'Expected a string or a {r, g, b[, a]} object as bgColor'
    );
  const n = typeof e == 'string' ? dn(e) : e,
    r = n.r / 255,
    o = n.g / 255,
    i = n.b / 255,
    s = n.a !== void 0 ? n.a / 100 : 1,
    l = typeof t == 'string' ? dn(t) : t,
    a = l.r / 255,
    u = l.g / 255,
    c = l.b / 255,
    h = l.a !== void 0 ? l.a / 100 : 1,
    f = s + h * (1 - s),
    m = Math.round(((r * s + a * h * (1 - s)) / f) * 255),
    P = Math.round(((o * s + u * h * (1 - s)) / f) * 255),
    A = Math.round(((i * s + c * h * (1 - s)) / f) * 255),
    O = { r: m, g: P, b: A, a: Math.round(f * 100) };
  return typeof e == 'string' ? fi(O) : O;
}
function ty(e, t) {
  if (typeof e != 'string') throw new TypeError('Expected a string as color');
  if (t === void 0 || t < -1 || t > 1)
    throw new TypeError('Expected offset to be between -1 and 1');
  const { r: n, g: r, b: o, a: i } = dn(e),
    s = i !== void 0 ? i / 100 : 0;
  return fi({
    r: n,
    g: r,
    b: o,
    a: Math.round(Math.min(1, Math.max(0, s + t)) * 100),
  });
}
function ny(e) {
  if (typeof e != 'string') throw new TypeError('Expected a string as color');
  const t = document.createElement('div');
  (t.className = `text-${e} invisible fixed no-pointer-events`),
    document.body.appendChild(t);
  const n = getComputedStyle(t).getPropertyValue('color');
  return t.remove(), fi(dn(n));
}
var ry = {
  rgbToHex: fi,
  hexToRgb: Fd,
  hsvToRgb: Qb,
  rgbToHsv: Xb,
  textToRgb: dn,
  lighten: Yb,
  luminosity: Jb,
  brightness: Zb,
  blend: ey,
  changeAlpha: ty,
  getPaletteColor: ny,
};
function wl(e, t = document.body) {
  if (typeof e != 'string')
    throw new TypeError('Expected a string as propName');
  if (!(t instanceof Element)) throw new TypeError('Expected a DOM element');
  return getComputedStyle(t).getPropertyValue(`--q-${e}`).trim() || null;
}
const Iu = wl('primary'),
  Fu = wl('secondary'),
  Hu = wl('accent'),
  oy = (e, t) => {
    e.dark.set(t);
    const { lighten: n } = ry;
    e.dark.isActive
      ? (wn('primary', n(Iu, -50)),
        wn('secondary', n(Fu, -50)),
        wn('accent', n(Hu, -60)))
      : (wn('primary', Iu), wn('secondary', Fu), wn('accent', Hu));
  };
var iy = (e, t) => {
  const n = e.__vccOpts || e;
  for (const [r, o] of t) n[r] = o;
  return n;
};
const Hd = (e) => (tm('data-v-f0686180'), (e = e()), nm(), e),
  sy = { class: 'row' },
  ly = Hd(() => An('img', { src: '/chessninja.png' }, null, -1)),
  ay = { class: 'q-ml-sm' },
  uy = Hd(() =>
    An(
      'div',
      { class: 'desktop-only', style: { '{\n              flex': '1 0 auto' } },
      null,
      -1
    )
  ),
  cy = { class: 'row no-wrap' },
  fy = Qr({
    __name: 'MainLayout',
    setup(e) {
      const t = ae(!1),
        n = Gf(),
        r = _o();
      st(() => {
        t.value = !1;
      });
      const o = H(() => !n.dark.isActive);
      function i() {
        oy(n, !n.dark.isActive),
          r.setThemePreference(n.dark.isActive ? 'dark' : 'light');
      }
      const s = nr();
      function l(a) {
        r.setLanguage(s, a);
      }
      return (a, u) => {
        const c = Zi('router-link'),
          h = Zi('router-view');
        return (
          Tr(),
          Or(
            K1,
            { view: 'hHh lpR fFf', class: 'column' },
            {
              default: rt(() => [
                ke(
                  j1,
                  { elevated: '', class: 'bg-primary' },
                  {
                    default: rt(() => [
                      ke(
                        $1,
                        { class: 'justify-between' },
                        {
                          default: rt(() => [
                            An('div', sy, [
                              ke(
                                e1,
                                { class: 'non-selectable no-padding-left' },
                                {
                                  default: rt(() => [
                                    ke(
                                      c,
                                      {
                                        to: {
                                          name: 'home',
                                          params: { language: et(r).language },
                                        },
                                        class: 'text-white',
                                      },
                                      {
                                        default: rt(() => [
                                          ke(Z0, null, {
                                            default: rt(() => [ly]),
                                            _: 1,
                                          }),
                                          An(
                                            'span',
                                            ay,
                                            oh(a.$t('APP_NAME')),
                                            1
                                          ),
                                        ]),
                                        _: 1,
                                      },
                                      8,
                                      ['to']
                                    ),
                                  ]),
                                  _: 1,
                                }
                              ),
                            ]),
                            uy,
                            An('div', cy, [
                              ke(
                                No,
                                {
                                  flat: '',
                                  dense: '',
                                  onClick:
                                    u[0] ||
                                    (u[0] = (f) => et(n).fullscreen.toggle()),
                                  'data-testid': 'fullScreenToggle',
                                  icon: et(n).fullscreen.isActive
                                    ? et(kb)
                                    : et(Id),
                                },
                                null,
                                8,
                                ['icon']
                              ),
                              ke(
                                gd,
                                {
                                  modelValue: et(o),
                                  'data-testid': 'darkModeToggle',
                                  'onUpdate:modelValue':
                                    u[1] || (u[1] = (f) => i(f)),
                                  'checked-icon': et(Ob),
                                  color: 'secondary',
                                  'unchecked-icon': et(sb),
                                },
                                null,
                                8,
                                ['modelValue', 'checked-icon', 'unchecked-icon']
                              ),
                              ke(
                                No,
                                {
                                  flat: '',
                                  round: '',
                                  dense: '',
                                  icon: et(Ab),
                                  class: 'q-mr-xs',
                                  'data-testid': 'languageDropdown',
                                },
                                {
                                  default: rt(() => [
                                    ke(q1, null, {
                                      default: rt(() => [
                                        ke(
                                          b1,
                                          {
                                            dense: '',
                                            style: { 'min-width': '100px' },
                                          },
                                          {
                                            default: rt(() => [
                                              Mo(
                                                (Tr(),
                                                Or(
                                                  hu,
                                                  {
                                                    clickable: '',
                                                    onClick:
                                                      u[2] ||
                                                      (u[2] = (f) => l('en')),
                                                    'data-testid':
                                                      'select-language-en',
                                                  },
                                                  {
                                                    default: rt(() => [
                                                      ke(du, null, {
                                                        default: rt(() => [
                                                          ss('English'),
                                                        ]),
                                                        _: 1,
                                                      }),
                                                    ]),
                                                    _: 1,
                                                  }
                                                )),
                                                [[ku]]
                                              ),
                                              Mo(
                                                (Tr(),
                                                Or(
                                                  hu,
                                                  {
                                                    clickable: '',
                                                    onClick:
                                                      u[3] ||
                                                      (u[3] = (f) => l('de')),
                                                    'data-testid':
                                                      'select-language-de',
                                                  },
                                                  {
                                                    default: rt(() => [
                                                      ke(du, null, {
                                                        default: rt(() => [
                                                          ss('deutsch'),
                                                        ]),
                                                        _: 1,
                                                      }),
                                                    ]),
                                                    _: 1,
                                                  }
                                                )),
                                                [[ku]]
                                              ),
                                            ]),
                                            _: 1,
                                          }
                                        ),
                                      ]),
                                      _: 1,
                                    }),
                                  ]),
                                  _: 1,
                                },
                                8,
                                ['icon']
                              ),
                            ]),
                          ]),
                          _: 1,
                        }
                      ),
                    ]),
                    _: 1,
                  }
                ),
                ke(
                  U1,
                  {
                    class: 'column flex-auto',
                    style: { 'max-width': '100vw', 'overflow-x': 'hidden' },
                  },
                  { default: rt(() => [ke(h)]), _: 1 }
                ),
              ]),
              _: 1,
            }
          )
        );
      };
    },
  });
var dy = iy(fy, [['__scopeId', 'data-v-f0686180']]),
  hy =
    typeof globalThis != 'undefined'
      ? globalThis
      : typeof window != 'undefined'
      ? window
      : typeof global != 'undefined'
      ? global
      : typeof self != 'undefined'
      ? self
      : {},
  Ts = { exports: {} };
(function (e, t) {
  (function (n, r) {
    e.exports = r();
  })(hy, function () {
    return (function (n) {
      var r = {};
      function o(i) {
        if (r[i]) return r[i].exports;
        var s = (r[i] = { i, l: !1, exports: {} });
        return n[i].call(s.exports, s, s.exports, o), (s.l = !0), s.exports;
      }
      return (
        (o.m = n),
        (o.c = r),
        (o.d = function (i, s, l) {
          o.o(i, s) || Object.defineProperty(i, s, { enumerable: !0, get: l });
        }),
        (o.r = function (i) {
          typeof Symbol != 'undefined' &&
            Symbol.toStringTag &&
            Object.defineProperty(i, Symbol.toStringTag, { value: 'Module' }),
            Object.defineProperty(i, '__esModule', { value: !0 });
        }),
        (o.t = function (i, s) {
          if (
            (1 & s && (i = o(i)),
            8 & s || (4 & s && typeof i == 'object' && i && i.__esModule))
          )
            return i;
          var l = Object.create(null);
          if (
            (o.r(l),
            Object.defineProperty(l, 'default', { enumerable: !0, value: i }),
            2 & s && typeof i != 'string')
          )
            for (var a in i)
              o.d(
                l,
                a,
                function (u) {
                  return i[u];
                }.bind(null, a)
              );
          return l;
        }),
        (o.n = function (i) {
          var s =
            i && i.__esModule
              ? function () {
                  return i.default;
                }
              : function () {
                  return i;
                };
          return o.d(s, 'a', s), s;
        }),
        (o.o = function (i, s) {
          return Object.prototype.hasOwnProperty.call(i, s);
        }),
        (o.p = ''),
        o((o.s = 0))
      );
    })([
      function (n, r, o) {
        o.r(r),
          o.d(r, 'Game', function () {
            return d;
          }),
          o.d(r, 'moves', function () {
            return b;
          }),
          o.d(r, 'status', function () {
            return M;
          }),
          o.d(r, 'getFen', function () {
            return I;
          }),
          o.d(r, 'move', function () {
            return U;
          }),
          o.d(r, 'aiMove', function () {
            return Q;
          });
        const i = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H'],
          s = ['1', '2', '3', '4', '5', '6', '7', '8'],
          l = {
            KING_W: 'K',
            QUEEN_W: 'Q',
            ROOK_W: 'R',
            BISHOP_W: 'B',
            KNIGHT_W: 'N',
            PAWN_W: 'P',
            KING_B: 'k',
            QUEEN_B: 'q',
            ROOK_B: 'r',
            BISHOP_B: 'b',
            KNIGHT_B: 'n',
            PAWN_B: 'p',
          },
          a = 'black',
          u = 'white',
          c = [0, 1, 2, 3, 4],
          h = { 0: 1, 1: 2, 2: 2, 3: 3, 4: 3, 5: 4 },
          f = { 0: 2, 1: 2, 2: 4, 3: 4, 4: 5, 5: 5 },
          m = {
            fullMove: 1,
            halfMove: 0,
            enPassant: null,
            isFinished: !1,
            checkMate: !1,
            check: !1,
            turn: u,
          },
          P = Object.assign(
            {
              pieces: {
                E1: 'K',
                D1: 'Q',
                A1: 'R',
                H1: 'R',
                C1: 'B',
                F1: 'B',
                B1: 'N',
                G1: 'N',
                A2: 'P',
                B2: 'P',
                C2: 'P',
                D2: 'P',
                E2: 'P',
                F2: 'P',
                G2: 'P',
                H2: 'P',
                E8: 'k',
                D8: 'q',
                A8: 'r',
                H8: 'r',
                C8: 'b',
                F8: 'b',
                B8: 'n',
                G8: 'n',
                A7: 'p',
                B7: 'p',
                C7: 'p',
                D7: 'p',
                E7: 'p',
                F7: 'p',
                G7: 'p',
                H7: 'p',
              },
              castling: {
                whiteShort: !0,
                blackShort: !0,
                whiteLong: !0,
                blackLong: !0,
              },
            },
            m
          ),
          A = {
            UP: {
              A1: 'A2',
              A2: 'A3',
              A3: 'A4',
              A4: 'A5',
              A5: 'A6',
              A6: 'A7',
              A7: 'A8',
              A8: null,
              B1: 'B2',
              B2: 'B3',
              B3: 'B4',
              B4: 'B5',
              B5: 'B6',
              B6: 'B7',
              B7: 'B8',
              B8: null,
              C1: 'C2',
              C2: 'C3',
              C3: 'C4',
              C4: 'C5',
              C5: 'C6',
              C6: 'C7',
              C7: 'C8',
              C8: null,
              D1: 'D2',
              D2: 'D3',
              D3: 'D4',
              D4: 'D5',
              D5: 'D6',
              D6: 'D7',
              D7: 'D8',
              D8: null,
              E1: 'E2',
              E2: 'E3',
              E3: 'E4',
              E4: 'E5',
              E5: 'E6',
              E6: 'E7',
              E7: 'E8',
              E8: null,
              F1: 'F2',
              F2: 'F3',
              F3: 'F4',
              F4: 'F5',
              F5: 'F6',
              F6: 'F7',
              F7: 'F8',
              F8: null,
              G1: 'G2',
              G2: 'G3',
              G3: 'G4',
              G4: 'G5',
              G5: 'G6',
              G6: 'G7',
              G7: 'G8',
              G8: null,
              H1: 'H2',
              H2: 'H3',
              H3: 'H4',
              H4: 'H5',
              H5: 'H6',
              H6: 'H7',
              H7: 'H8',
              H8: null,
            },
            DOWN: {
              A1: null,
              A2: 'A1',
              A3: 'A2',
              A4: 'A3',
              A5: 'A4',
              A6: 'A5',
              A7: 'A6',
              A8: 'A7',
              B1: null,
              B2: 'B1',
              B3: 'B2',
              B4: 'B3',
              B5: 'B4',
              B6: 'B5',
              B7: 'B6',
              B8: 'B7',
              C1: null,
              C2: 'C1',
              C3: 'C2',
              C4: 'C3',
              C5: 'C4',
              C6: 'C5',
              C7: 'C6',
              C8: 'C7',
              D1: null,
              D2: 'D1',
              D3: 'D2',
              D4: 'D3',
              D5: 'D4',
              D6: 'D5',
              D7: 'D6',
              D8: 'D7',
              E1: null,
              E2: 'E1',
              E3: 'E2',
              E4: 'E3',
              E5: 'E4',
              E6: 'E5',
              E7: 'E6',
              E8: 'E7',
              F1: null,
              F2: 'F1',
              F3: 'F2',
              F4: 'F3',
              F5: 'F4',
              F6: 'F5',
              F7: 'F6',
              F8: 'F7',
              G1: null,
              G2: 'G1',
              G3: 'G2',
              G4: 'G3',
              G5: 'G4',
              G6: 'G5',
              G7: 'G6',
              G8: 'G7',
              H1: null,
              H2: 'H1',
              H3: 'H2',
              H4: 'H3',
              H5: 'H4',
              H6: 'H5',
              H7: 'H6',
              H8: 'H7',
            },
            LEFT: {
              A1: null,
              A2: null,
              A3: null,
              A4: null,
              A5: null,
              A6: null,
              A7: null,
              A8: null,
              B1: 'A1',
              B2: 'A2',
              B3: 'A3',
              B4: 'A4',
              B5: 'A5',
              B6: 'A6',
              B7: 'A7',
              B8: 'A8',
              C1: 'B1',
              C2: 'B2',
              C3: 'B3',
              C4: 'B4',
              C5: 'B5',
              C6: 'B6',
              C7: 'B7',
              C8: 'B8',
              D1: 'C1',
              D2: 'C2',
              D3: 'C3',
              D4: 'C4',
              D5: 'C5',
              D6: 'C6',
              D7: 'C7',
              D8: 'C8',
              E1: 'D1',
              E2: 'D2',
              E3: 'D3',
              E4: 'D4',
              E5: 'D5',
              E6: 'D6',
              E7: 'D7',
              E8: 'D8',
              F1: 'E1',
              F2: 'E2',
              F3: 'E3',
              F4: 'E4',
              F5: 'E5',
              F6: 'E6',
              F7: 'E7',
              F8: 'E8',
              G1: 'F1',
              G2: 'F2',
              G3: 'F3',
              G4: 'F4',
              G5: 'F5',
              G6: 'F6',
              G7: 'F7',
              G8: 'F8',
              H1: 'G1',
              H2: 'G2',
              H3: 'G3',
              H4: 'G4',
              H5: 'G5',
              H6: 'G6',
              H7: 'G7',
              H8: 'G8',
            },
            RIGHT: {
              A1: 'B1',
              A2: 'B2',
              A3: 'B3',
              A4: 'B4',
              A5: 'B5',
              A6: 'B6',
              A7: 'B7',
              A8: 'B8',
              B1: 'C1',
              B2: 'C2',
              B3: 'C3',
              B4: 'C4',
              B5: 'C5',
              B6: 'C6',
              B7: 'C7',
              B8: 'C8',
              C1: 'D1',
              C2: 'D2',
              C3: 'D3',
              C4: 'D4',
              C5: 'D5',
              C6: 'D6',
              C7: 'D7',
              C8: 'D8',
              D1: 'E1',
              D2: 'E2',
              D3: 'E3',
              D4: 'E4',
              D5: 'E5',
              D6: 'E6',
              D7: 'E7',
              D8: 'E8',
              E1: 'F1',
              E2: 'F2',
              E3: 'F3',
              E4: 'F4',
              E5: 'F5',
              E6: 'F6',
              E7: 'F7',
              E8: 'F8',
              F1: 'G1',
              F2: 'G2',
              F3: 'G3',
              F4: 'G4',
              F5: 'G5',
              F6: 'G6',
              F7: 'G7',
              F8: 'G8',
              G1: 'H1',
              G2: 'H2',
              G3: 'H3',
              G4: 'H4',
              G5: 'H5',
              G6: 'H6',
              G7: 'H7',
              G8: 'H8',
              H1: null,
              H2: null,
              H3: null,
              H4: null,
              H5: null,
              H6: null,
              H7: null,
              H8: null,
            },
            UP_LEFT: {
              A1: null,
              A2: null,
              A3: null,
              A4: null,
              A5: null,
              A6: null,
              A7: null,
              A8: null,
              B1: 'A2',
              B2: 'A3',
              B3: 'A4',
              B4: 'A5',
              B5: 'A6',
              B6: 'A7',
              B7: 'A8',
              B8: null,
              C1: 'B2',
              C2: 'B3',
              C3: 'B4',
              C4: 'B5',
              C5: 'B6',
              C6: 'B7',
              C7: 'B8',
              C8: null,
              D1: 'C2',
              D2: 'C3',
              D3: 'C4',
              D4: 'C5',
              D5: 'C6',
              D6: 'C7',
              D7: 'C8',
              D8: null,
              E1: 'D2',
              E2: 'D3',
              E3: 'D4',
              E4: 'D5',
              E5: 'D6',
              E6: 'D7',
              E7: 'D8',
              E8: null,
              F1: 'E2',
              F2: 'E3',
              F3: 'E4',
              F4: 'E5',
              F5: 'E6',
              F6: 'E7',
              F7: 'E8',
              F8: null,
              G1: 'F2',
              G2: 'F3',
              G3: 'F4',
              G4: 'F5',
              G5: 'F6',
              G6: 'F7',
              G7: 'F8',
              G8: null,
              H1: 'G2',
              H2: 'G3',
              H3: 'G4',
              H4: 'G5',
              H5: 'G6',
              H6: 'G7',
              H7: 'G8',
              H8: null,
            },
            DOWN_RIGHT: {
              A1: null,
              A2: 'B1',
              A3: 'B2',
              A4: 'B3',
              A5: 'B4',
              A6: 'B5',
              A7: 'B6',
              A8: 'B7',
              B1: null,
              B2: 'C1',
              B3: 'C2',
              B4: 'C3',
              B5: 'C4',
              B6: 'C5',
              B7: 'C6',
              B8: 'C7',
              C1: null,
              C2: 'D1',
              C3: 'D2',
              C4: 'D3',
              C5: 'D4',
              C6: 'D5',
              C7: 'D6',
              C8: 'D7',
              D1: null,
              D2: 'E1',
              D3: 'E2',
              D4: 'E3',
              D5: 'E4',
              D6: 'E5',
              D7: 'E6',
              D8: 'E7',
              E1: null,
              E2: 'F1',
              E3: 'F2',
              E4: 'F3',
              E5: 'F4',
              E6: 'F5',
              E7: 'F6',
              E8: 'F7',
              F1: null,
              F2: 'G1',
              F3: 'G2',
              F4: 'G3',
              F5: 'G4',
              F6: 'G5',
              F7: 'G6',
              F8: 'G7',
              G1: null,
              G2: 'H1',
              G3: 'H2',
              G4: 'H3',
              G5: 'H4',
              G6: 'H5',
              G7: 'H6',
              G8: 'H7',
              H1: null,
              H2: null,
              H3: null,
              H4: null,
              H5: null,
              H6: null,
              H7: null,
              H8: null,
            },
            UP_RIGHT: {
              A1: 'B2',
              A2: 'B3',
              A3: 'B4',
              A4: 'B5',
              A5: 'B6',
              A6: 'B7',
              A7: 'B8',
              A8: null,
              B1: 'C2',
              B2: 'C3',
              B3: 'C4',
              B4: 'C5',
              B5: 'C6',
              B6: 'C7',
              B7: 'C8',
              B8: null,
              C1: 'D2',
              C2: 'D3',
              C3: 'D4',
              C4: 'D5',
              C5: 'D6',
              C6: 'D7',
              C7: 'D8',
              C8: null,
              D1: 'E2',
              D2: 'E3',
              D3: 'E4',
              D4: 'E5',
              D5: 'E6',
              D6: 'E7',
              D7: 'E8',
              D8: null,
              E1: 'F2',
              E2: 'F3',
              E3: 'F4',
              E4: 'F5',
              E5: 'F6',
              E6: 'F7',
              E7: 'F8',
              E8: null,
              F1: 'G2',
              F2: 'G3',
              F3: 'G4',
              F4: 'G5',
              F5: 'G6',
              F6: 'G7',
              F7: 'G8',
              F8: null,
              G1: 'H2',
              G2: 'H3',
              G3: 'H4',
              G4: 'H5',
              G5: 'H6',
              G6: 'H7',
              G7: 'H8',
              G8: null,
              H1: null,
              H2: null,
              H3: null,
              H4: null,
              H5: null,
              H6: null,
              H7: null,
              H8: null,
            },
            DOWN_LEFT: {
              A1: null,
              A2: null,
              A3: null,
              A4: null,
              A5: null,
              A6: null,
              A7: null,
              A8: null,
              B1: null,
              B2: 'A1',
              B3: 'A2',
              B4: 'A3',
              B5: 'A4',
              B6: 'A5',
              B7: 'A6',
              B8: 'A7',
              C1: null,
              C2: 'B1',
              C3: 'B2',
              C4: 'B3',
              C5: 'B4',
              C6: 'B5',
              C7: 'B6',
              C8: 'B7',
              D1: null,
              D2: 'C1',
              D3: 'C2',
              D4: 'C3',
              D5: 'C4',
              D6: 'C5',
              D7: 'C6',
              D8: 'C7',
              E1: null,
              E2: 'D1',
              E3: 'D2',
              E4: 'D3',
              E5: 'D4',
              E6: 'D5',
              E7: 'D6',
              E8: 'D7',
              F1: null,
              F2: 'E1',
              F3: 'E2',
              F4: 'E3',
              F5: 'E4',
              F6: 'E5',
              F7: 'E6',
              F8: 'E7',
              G1: null,
              G2: 'F1',
              G3: 'F2',
              G4: 'F3',
              G5: 'F4',
              G6: 'F5',
              G7: 'F6',
              G8: 'F7',
              H1: null,
              H2: 'G1',
              H3: 'G2',
              H4: 'G3',
              H5: 'G4',
              H6: 'G5',
              H7: 'G6',
              H8: 'G7',
            },
          },
          O = [
            [0, 0, 0, 0, 0, 0, 0, 0],
            [5, 5, 5, 5, 5, 5, 5, 5],
            [1, 1, 2, 3, 3, 2, 1, 1],
            [0.5, 0.5, 1, 2.5, 2.5, 1, 0.5, 0.5],
            [0, 0, 0, 2, 2, 0, 0, 0],
            [0.5, 0, 1, 0, 0, 1, 0, 0.5],
            [0.5, 0, 0, -2, -2, 0, 0, 0.5],
            [0, 0, 0, 0, 0, 0, 0, 0],
          ],
          w = [
            [-4, -3, -2, -2, -2, -2, -3, -4],
            [-3, -2, 0, 0, 0, 0, -2, -3],
            [-2, 0, 1, 1.5, 1.5, 1, 0, -2],
            [-2, 0.5, 1.5, 2, 2, 1.5, 0.5, -2],
            [-2, 0, 1.5, 2, 2, 1.5, 0, -2],
            [-2, 0.5, 1, 1.5, 1.5, 1, 0.5, -2],
            [-3, -2, 0, 0.5, 0.5, 0, -2, -3],
            [-4, -3, -2, -2, -2, -2, -3, -4],
          ],
          g = [
            [-2, -1, -1, -1, -1, -1, -1, -2],
            [-1, 0, 0, 0, 0, 0, 0, -1],
            [-1, 0, 0.5, 1, 1, 0.5, 0, -1],
            [-1, 0.5, 0.5, 1, 1, 0.5, 0.5, -1],
            [-1, 0, 1, 1, 1, 1, 0, -1],
            [-1, 1, 1, 1, 1, 1, 1, -1],
            [-1, 0.5, 0, 0, 0, 0, 0.5, -1],
            [-2, -1, -1, -1, -1, -1, -1, -2],
          ],
          E = [
            [0, 0, 0, 0, 0, 0, 0, 0],
            [0.5, 1, 1, 1, 1, 1, 1, 0.5],
            [-0.5, 0, 0, 0, 0, 0, 0, -0.5],
            [-0.5, 0, 0, 0, 0, 0, 0, -0.5],
            [-0.5, 0, 0, 0, 0, 0, 0, -0.5],
            [-0.5, 0, 0, 0, 0, 0, 0, -0.5],
            [-0.5, 0, 0, 0, 0, 0, 0, -0.5],
            [0, 0, 0, 0.5, 0.5, 0, 0, 0],
          ],
          k = [
            [-3, -4, -4, -5, -5, -4, -4, -3],
            [-3, -4, -4, -5, -5, -4, -4, -3],
            [-3, -4, -4, -5, -5, -4, -4, -3],
            [-3, -4, -4, -5, -5, -4, -4, -3],
            [-2, -3, -3, -4, -4, -3, -3, -2],
            [-1, -2, -2, -2, -2, -2, -2, -1],
            [2, 2, 0, 0, 0, 0, 2, 2],
            [2, 3, 1, 0, 0, 1, 3, 2],
          ],
          S = [
            [-2, -1, -1, -0.5, -0.5, -1, -1, -2],
            [-1, 0, 0, 0, 0, 0, 0, -1],
            [-1, 0, 0.5, 0.5, 0.5, 0.5, 0, -1],
            [-0.5, 0, 0.5, 0.5, 0.5, 0.5, 0, -0.5],
            [0, 0, 0.5, 0.5, 0.5, 0.5, 0, -0.5],
            [-1, 0.5, 0.5, 0.5, 0.5, 0.5, 0, -1],
            [-1, 0, 0.5, 0, 0, 0, 0, -1],
            [-2, -1, -1, -0.5, -0.5, -1, -1, -2],
          ],
          L = {
            P: O.slice().reverse(),
            p: O,
            N: w.slice().reverse(),
            n: w,
            B: g.slice().reverse(),
            b: g,
            R: E.slice().reverse(),
            r: E,
            K: k.slice().reverse(),
            k,
            Q: S.slice().reverse(),
            q: S,
          };
        function T(F) {
          return A.UP[F];
        }
        function R(F) {
          return A.DOWN[F];
        }
        function D(F) {
          return A.LEFT[F];
        }
        function z(F) {
          return A.RIGHT[F];
        }
        function j(F) {
          return A.UP_LEFT[F];
        }
        function N(F) {
          return A.UP_RIGHT[F];
        }
        function Y(F) {
          return A.DOWN_LEFT[F];
        }
        function $(F) {
          return A.DOWN_RIGHT[F];
        }
        function re(F) {
          const p = j(F);
          return p ? T(p) : null;
        }
        function se(F) {
          const p = j(F);
          return p ? D(p) : null;
        }
        function V(F) {
          const p = N(F);
          return p ? T(p) : null;
        }
        function ee(F) {
          const p = N(F);
          return p ? z(p) : null;
        }
        function de(F) {
          const p = Y(F);
          return p ? R(p) : null;
        }
        function be(F) {
          const p = Y(F);
          return p ? D(p) : null;
        }
        function J(F) {
          const p = $(F);
          return p ? R(p) : null;
        }
        function ce(F) {
          const p = $(F);
          return p ? z(p) : null;
        }
        function ve(F, p) {
          return p === u ? A.UP[F] : A.DOWN[F];
        }
        function Pe(F, p) {
          return p === u ? A.UP_LEFT[F] : A.DOWN_RIGHT[F];
        }
        function W(F, p) {
          return p === u ? A.UP_RIGHT[F] : A.DOWN_LEFT[F];
        }
        function ne(F, p) {
          return p === u ? A.DOWN_LEFT[F] : A.UP_RIGHT[F];
        }
        function G(F, p) {
          return p === u ? A.DOWN_RIGHT[F] : A.UP_LEFT[F];
        }
        function te(F) {
          return { k: 10, q: 9, r: 5, b: 3, n: 3, p: 1 }[F.toLowerCase()] || 0;
        }
        function Z(F) {
          return typeof F == 'string' && F.match('^[a-hA-H]{1}[1-8]{1}$');
        }
        const he = -1e3,
          le = 1e3;
        class C {
          constructor(p = JSON.parse(JSON.stringify(P))) {
            if (typeof p == 'object')
              this.configuration = Object.assign({}, m, p);
            else {
              if (typeof p != 'string')
                throw new Error(`Unknown configuration type ${typeof config}.`);
              this.configuration = Object.assign(
                {},
                m,
                (function (_ = '') {
                  const [y, x, v, B, X, K] = _.split(' '),
                    ie = {
                      pieces: Object.fromEntries(
                        y.split('/').flatMap((pe, Ne) => {
                          let Ye = 0;
                          return pe.split('').reduce((Gt, ht) => {
                            const dr = ht.match(/k|b|q|n|p|r/i);
                            dr &&
                              (Gt.push([`${i[Ye]}${s[7 - Ne]}`, dr[0]]),
                              (Ye += 1));
                            const Je = ht.match(/[1-8]/);
                            return Je && (Ye += Number(Je)), Gt;
                          }, []);
                        })
                      ),
                    };
                  return (
                    (ie.turn = x === 'b' ? a : u),
                    (ie.castling = {
                      whiteLong: !1,
                      whiteShort: !1,
                      blackLong: !1,
                      blackShort: !1,
                    }),
                    v.includes('K') && (ie.castling.whiteShort = !0),
                    v.includes('k') && (ie.castling.blackShort = !0),
                    v.includes('Q') && (ie.castling.whiteLong = !0),
                    v.includes('q') && (ie.castling.blackLong = !0),
                    Z(B) && (ie.enPassant = B.toUpperCase()),
                    (ie.halfMove = parseInt(X)),
                    (ie.fullMove = parseInt(K)),
                    ie
                  );
                })(p)
              );
            }
            this.configuration.castling ||
              (this.configuration.castling = {
                whiteShort: !0,
                blackShort: !0,
                whiteLong: !0,
                blackLong: !0,
              }),
              (this.history = []);
          }
          getAttackingFields(p = this.getPlayingColor()) {
            let _ = [];
            for (const y in this.configuration.pieces) {
              const x = this.getPiece(y);
              this.getPieceColor(x) === p &&
                (_ = [..._, ...this.getPieceMoves(x, y)]);
            }
            return _;
          }
          isAttackingKing(p = this.getPlayingColor()) {
            let _ = null;
            for (const y in this.configuration.pieces) {
              const x = this.getPiece(y);
              if (this.isKing(x) && this.getPieceColor(x) !== p) {
                _ = y;
                break;
              }
            }
            return this.isPieceUnderAttack(_);
          }
          isPieceUnderAttack(p) {
            const _ = this.getPieceOnLocationColor(p),
              y = this.getEnemyColor(_);
            let x = !1,
              v = p,
              B = 0;
            for (; T(v) && !x; ) {
              (v = T(v)), B++;
              const K = this.getPiece(v);
              if (
                (K &&
                  this.getPieceColor(K) === y &&
                  (this.isRook(K) ||
                    this.isQueen(K) ||
                    (this.isKing(K) && B === 1)) &&
                  (x = !0),
                K)
              )
                break;
            }
            for (v = p, B = 0; R(v) && !x; ) {
              (v = R(v)), B++;
              const K = this.getPiece(v);
              if (
                (K &&
                  this.getPieceColor(K) === y &&
                  (this.isRook(K) ||
                    this.isQueen(K) ||
                    (this.isKing(K) && B === 1)) &&
                  (x = !0),
                K)
              )
                break;
            }
            for (v = p, B = 0; D(v) && !x; ) {
              (v = D(v)), B++;
              const K = this.getPiece(v);
              if (
                (K &&
                  this.getPieceColor(K) === y &&
                  (this.isRook(K) ||
                    this.isQueen(K) ||
                    (this.isKing(K) && B === 1)) &&
                  (x = !0),
                K)
              )
                break;
            }
            for (v = p, B = 0; z(v) && !x; ) {
              (v = z(v)), B++;
              const K = this.getPiece(v);
              if (
                (K &&
                  this.getPieceColor(K) === y &&
                  (this.isRook(K) ||
                    this.isQueen(K) ||
                    (this.isKing(K) && B === 1)) &&
                  (x = !0),
                K)
              )
                break;
            }
            for (v = p, B = 0; W(v, _) && !x; ) {
              (v = W(v, _)), B++;
              const K = this.getPiece(v);
              if (
                (K &&
                  this.getPieceColor(K) === y &&
                  (this.isBishop(K) ||
                    this.isQueen(K) ||
                    (B === 1 && (this.isKing(K) || this.isPawn(K)))) &&
                  (x = !0),
                K)
              )
                break;
            }
            for (v = p, B = 0; Pe(v, _) && !x; ) {
              (v = Pe(v, _)), B++;
              const K = this.getPiece(v);
              if (
                (K &&
                  this.getPieceColor(K) === y &&
                  (this.isBishop(K) ||
                    this.isQueen(K) ||
                    (B === 1 && (this.isKing(K) || this.isPawn(K)))) &&
                  (x = !0),
                K)
              )
                break;
            }
            for (v = p, B = 0; G(v, _) && !x; ) {
              (v = G(v, _)), B++;
              const K = this.getPiece(v);
              if (
                (K &&
                  this.getPieceColor(K) === y &&
                  (this.isBishop(K) ||
                    this.isQueen(K) ||
                    (this.isKing(K) && B === 1)) &&
                  (x = !0),
                K)
              )
                break;
            }
            for (v = p, B = 0; ne(v, _) && !x; ) {
              (v = ne(v, _)), B++;
              const K = this.getPiece(v);
              if (
                (K &&
                  this.getPieceColor(K) === y &&
                  (this.isBishop(K) ||
                    this.isQueen(K) ||
                    (this.isKing(K) && B === 1)) &&
                  (x = !0),
                K)
              )
                break;
            }
            v = V(p);
            let X = this.getPiece(v);
            return (
              X && this.getPieceColor(X) === y && this.isKnight(X) && (x = !0),
              (v = ee(p)),
              (X = this.getPiece(v)),
              X && this.getPieceColor(X) === y && this.isKnight(X) && (x = !0),
              (v = se(p)),
              (X = this.getPiece(v)),
              X && this.getPieceColor(X) === y && this.isKnight(X) && (x = !0),
              (v = re(p)),
              (X = this.getPiece(v)),
              X && this.getPieceColor(X) === y && this.isKnight(X) && (x = !0),
              (v = de(p)),
              (X = this.getPiece(v)),
              X && this.getPieceColor(X) === y && this.isKnight(X) && (x = !0),
              (v = be(p)),
              (X = this.getPiece(v)),
              X && this.getPieceColor(X) === y && this.isKnight(X) && (x = !0),
              (v = J(p)),
              (X = this.getPiece(v)),
              X && this.getPieceColor(X) === y && this.isKnight(X) && (x = !0),
              (v = ce(p)),
              (X = this.getPiece(v)),
              X && this.getPieceColor(X) === y && this.isKnight(X) && (x = !0),
              x
            );
          }
          hasPlayingPlayerCheck() {
            return this.isAttackingKing(this.getNonPlayingColor());
          }
          hasNonPlayingPlayerCheck() {
            return this.isAttackingKing(this.getPlayingColor());
          }
          getLowestValuePieceAttackingLocation(p, _ = this.getPlayingColor()) {
            let y = null;
            for (const x in this.configuration.pieces) {
              const v = this.getPiece(x);
              this.getPieceColor(v) === _ &&
                this.getPieceMoves(v, x).map((B) => {
                  B === p && (y === null || te(v) < y) && (y = te(v));
                });
            }
            return y;
          }
          getMoves(p = this.getPlayingColor(), _ = null) {
            const y = {};
            let x = 0;
            for (const X in this.configuration.pieces) {
              const K = this.getPiece(X);
              if (this.getPieceColor(K) === p) {
                const ie = this.getPieceMoves(K, X);
                ie.length && x++, Object.assign(y, { [X]: ie });
              }
            }
            const v = this.getAttackingFields(this.getNonPlayingColor());
            if (
              (this.isLeftCastlingPossible(v) &&
                (this.isPlayingWhite() && y.E1.push('C1'),
                this.isPlayingBlack() && y.E8.push('C8')),
              this.isRightCastlingPossible(v) &&
                (this.isPlayingWhite() && y.E1.push('G1'),
                this.isPlayingBlack() && y.E8.push('G8')),
              _ && x > _)
            )
              return y;
            const B = {};
            for (const X in y)
              y[X].map((K) => {
                const ie = {
                    pieces: Object.assign({}, this.configuration.pieces),
                    castling: Object.assign({}, this.configuration.castling),
                  },
                  pe = new C(ie);
                pe.move(X, K),
                  ((this.isPlayingWhite() && !pe.isAttackingKing(a)) ||
                    (this.isPlayingBlack() && !pe.isAttackingKing(u))) &&
                    (B[X] || (B[X] = []), B[X].push(K));
              });
            return (
              Object.keys(B).length ||
                ((this.configuration.isFinished = !0),
                this.hasPlayingPlayerCheck() &&
                  (this.configuration.checkMate = !0)),
              B
            );
          }
          isLeftCastlingPossible(p) {
            if (
              (this.isPlayingWhite() &&
                !this.configuration.castling.whiteLong) ||
              (this.isPlayingBlack() && !this.configuration.castling.blackLong)
            )
              return !1;
            let _ = null;
            if (
              (this.isPlayingWhite() &&
              this.getPiece('E1') === 'K' &&
              this.getPiece('A1') === 'R' &&
              !p.includes('E1')
                ? (_ = 'E1')
                : this.isPlayingBlack() &&
                  this.getPiece('E8') === 'k' &&
                  this.getPiece('A8') === 'r' &&
                  !p.includes('E8') &&
                  (_ = 'E8'),
              !_)
            )
              return !1;
            let y = D(_);
            return (
              !this.getPiece(y) &&
              !p.includes(y) &&
              ((y = D(y)),
              !this.getPiece(y) &&
                !p.includes(y) &&
                ((y = D(y)), !this.getPiece(y)))
            );
          }
          isRightCastlingPossible(p) {
            if (
              (this.isPlayingWhite() &&
                !this.configuration.castling.whiteShort) ||
              (this.isPlayingBlack() && !this.configuration.castling.blackShort)
            )
              return !1;
            let _ = null;
            if (
              (this.isPlayingWhite() &&
              this.getPiece('E1') === 'K' &&
              this.getPiece('H1') === 'R' &&
              !p.includes('E1')
                ? (_ = 'E1')
                : this.isPlayingBlack() &&
                  this.getPiece('E8') === 'k' &&
                  this.getPiece('H8') === 'r' &&
                  !p.includes('E8') &&
                  (_ = 'E8'),
              !_)
            )
              return !1;
            let y = z(_);
            return (
              !this.getPiece(y) &&
              !p.includes(y) &&
              ((y = z(y)), !this.getPiece(y) && !p.includes(y))
            );
          }
          getPieceMoves(p, _) {
            return this.isPawn(p)
              ? this.getPawnMoves(p, _)
              : this.isKnight(p)
              ? this.getKnightMoves(p, _)
              : this.isRook(p)
              ? this.getRookMoves(p, _)
              : this.isBishop(p)
              ? this.getBishopMoves(p, _)
              : this.isQueen(p)
              ? this.getQueenMoves(p, _)
              : this.isKing(p)
              ? this.getKingMoves(p, _)
              : [];
          }
          isPawn(p) {
            return p.toUpperCase() === 'P';
          }
          isKnight(p) {
            return p.toUpperCase() === 'N';
          }
          isRook(p) {
            return p.toUpperCase() === 'R';
          }
          isBishop(p) {
            return p.toUpperCase() === 'B';
          }
          isQueen(p) {
            return p.toUpperCase() === 'Q';
          }
          isKing(p) {
            return p.toUpperCase() === 'K';
          }
          getPawnMoves(p, _) {
            const y = [],
              x = this.getPieceColor(p);
            let v = ve(_, x);
            return (
              v &&
                !this.getPiece(v) &&
                (y.push(v),
                (v = ve(v, x)),
                (function (B, X) {
                  return (B === u && X[1] === '2') || (B === a && X[1] === '7');
                })(x, _) &&
                  v &&
                  !this.getPiece(v) &&
                  y.push(v)),
              (v = Pe(_, x)),
              v &&
                ((this.getPiece(v) && this.getPieceOnLocationColor(v) !== x) ||
                  v === this.configuration.enPassant) &&
                y.push(v),
              (v = W(_, x)),
              v &&
                ((this.getPiece(v) && this.getPieceOnLocationColor(v) !== x) ||
                  v === this.configuration.enPassant) &&
                y.push(v),
              y
            );
          }
          getKnightMoves(p, _) {
            const y = [],
              x = this.getPieceColor(p);
            let v = V(_);
            return (
              v && this.getPieceOnLocationColor(v) !== x && y.push(v),
              (v = ee(_)),
              v && this.getPieceOnLocationColor(v) !== x && y.push(v),
              (v = re(_)),
              v && this.getPieceOnLocationColor(v) !== x && y.push(v),
              (v = se(_)),
              v && this.getPieceOnLocationColor(v) !== x && y.push(v),
              (v = be(_)),
              v && this.getPieceOnLocationColor(v) !== x && y.push(v),
              (v = de(_)),
              v && this.getPieceOnLocationColor(v) !== x && y.push(v),
              (v = ce(_)),
              v && this.getPieceOnLocationColor(v) !== x && y.push(v),
              (v = J(_)),
              v && this.getPieceOnLocationColor(v) !== x && y.push(v),
              y
            );
          }
          getRookMoves(p, _) {
            const y = [],
              x = this.getPieceColor(p);
            let v = _;
            for (; T(v); ) {
              v = T(v);
              const B = this.getPieceOnLocationColor(v);
              if ((this.getPieceOnLocationColor(v) !== x && y.push(v), B))
                break;
            }
            for (v = _; R(v); ) {
              v = R(v);
              const B = this.getPieceOnLocationColor(v);
              if ((this.getPieceOnLocationColor(v) !== x && y.push(v), B))
                break;
            }
            for (v = _; z(v); ) {
              v = z(v);
              const B = this.getPieceOnLocationColor(v);
              if ((this.getPieceOnLocationColor(v) !== x && y.push(v), B))
                break;
            }
            for (v = _; D(v); ) {
              v = D(v);
              const B = this.getPieceOnLocationColor(v);
              if ((this.getPieceOnLocationColor(v) !== x && y.push(v), B))
                break;
            }
            return y;
          }
          getBishopMoves(p, _) {
            const y = [],
              x = this.getPieceColor(p);
            let v = _;
            for (; j(v); ) {
              v = j(v);
              const B = this.getPieceOnLocationColor(v);
              if ((this.getPieceOnLocationColor(v) !== x && y.push(v), B))
                break;
            }
            for (v = _; N(v); ) {
              v = N(v);
              const B = this.getPieceOnLocationColor(v);
              if ((this.getPieceOnLocationColor(v) !== x && y.push(v), B))
                break;
            }
            for (v = _; Y(v); ) {
              v = Y(v);
              const B = this.getPieceOnLocationColor(v);
              if ((this.getPieceOnLocationColor(v) !== x && y.push(v), B))
                break;
            }
            for (v = _; $(v); ) {
              v = $(v);
              const B = this.getPieceOnLocationColor(v);
              if ((this.getPieceOnLocationColor(v) !== x && y.push(v), B))
                break;
            }
            return y;
          }
          getQueenMoves(p, _) {
            return [...this.getRookMoves(p, _), ...this.getBishopMoves(p, _)];
          }
          getKingMoves(p, _) {
            const y = [],
              x = this.getPieceColor(p);
            let v = _;
            return (
              (v = T(v)),
              v && this.getPieceOnLocationColor(v) !== x && y.push(v),
              (v = _),
              (v = z(v)),
              v && this.getPieceOnLocationColor(v) !== x && y.push(v),
              (v = _),
              (v = R(v)),
              v && this.getPieceOnLocationColor(v) !== x && y.push(v),
              (v = _),
              (v = D(v)),
              v && this.getPieceOnLocationColor(v) !== x && y.push(v),
              (v = _),
              (v = j(v)),
              v && this.getPieceOnLocationColor(v) !== x && y.push(v),
              (v = _),
              (v = N(v)),
              v && this.getPieceOnLocationColor(v) !== x && y.push(v),
              (v = _),
              (v = Y(v)),
              v && this.getPieceOnLocationColor(v) !== x && y.push(v),
              (v = _),
              (v = $(v)),
              v && this.getPieceOnLocationColor(v) !== x && y.push(v),
              y
            );
          }
          getPieceColor(p) {
            return p.toUpperCase() === p ? u : a;
          }
          getPieceOnLocationColor(p) {
            const _ = this.getPiece(p);
            return _ ? (_.toUpperCase() === _ ? u : a) : null;
          }
          getPiece(p) {
            return this.configuration.pieces[p];
          }
          setPiece(p, _) {
            if (
              !(function (y) {
                return Object.values(l).includes(y);
              })(_)
            )
              throw new Error('Invalid piece ' + _);
            if (!Z(p)) throw new Error('Invalid location ' + p);
            this.configuration.pieces[p.toUpperCase()] = _;
          }
          removePiece(p) {
            if (!Z(p)) throw new Error('Invalid location ' + p);
            delete this.configuration.pieces[p.toUpperCase()];
          }
          isEmpty(p) {
            if (!Z(p)) throw new Error('Invalid location ' + p);
            return !this.configuration.pieces[p.toUpperCase()];
          }
          getEnemyColor(p) {
            return p === u ? a : u;
          }
          getPlayingColor() {
            return this.configuration.turn;
          }
          getNonPlayingColor() {
            return this.isPlayingWhite() ? a : u;
          }
          isPlayingWhite() {
            return this.configuration.turn === u;
          }
          isPlayingBlack() {
            return this.configuration.turn === a;
          }
          addMoveToHistory(p, _) {
            this.history.push({
              from: p,
              to: _,
              configuration: JSON.parse(JSON.stringify(this.configuration)),
            });
          }
          move(p, _) {
            const y = this.getPiece(p),
              x = this.getPiece(_);
            if (!y) throw new Error('There is no piece at ' + p);
            var v, B;
            if (
              (Object.assign(this.configuration.pieces, { [_]: y }),
              delete this.configuration.pieces[p],
              this.isPlayingWhite() &&
                this.isPawn(y) &&
                _[1] === '8' &&
                Object.assign(this.configuration.pieces, { [_]: 'Q' }),
              this.isPlayingBlack() &&
                this.isPawn(y) &&
                _[1] === '1' &&
                Object.assign(this.configuration.pieces, { [_]: 'q' }),
              this.isPawn(y) &&
                _ === this.configuration.enPassant &&
                delete this.configuration.pieces[
                  ((v = _),
                  (B = this.getPlayingColor()),
                  B === u ? A.DOWN[v] : A.UP[v])
                ],
              this.isPawn(y) &&
              this.isPlayingWhite() &&
              p[1] === '2' &&
              _[1] === '4'
                ? (this.configuration.enPassant = p[0] + '3')
                : this.isPawn(y) &&
                  this.isPlayingBlack() &&
                  p[1] === '7' &&
                  _[1] === '5'
                ? (this.configuration.enPassant = p[0] + '6')
                : (this.configuration.enPassant = null),
              p === 'E1' &&
                Object.assign(this.configuration.castling, {
                  whiteLong: !1,
                  whiteShort: !1,
                }),
              p === 'E8' &&
                Object.assign(this.configuration.castling, {
                  blackLong: !1,
                  blackShort: !1,
                }),
              p === 'A1' &&
                Object.assign(this.configuration.castling, { whiteLong: !1 }),
              p === 'H1' &&
                Object.assign(this.configuration.castling, { whiteShort: !1 }),
              p === 'A8' &&
                Object.assign(this.configuration.castling, { blackLong: !1 }),
              p === 'H8' &&
                Object.assign(this.configuration.castling, { blackShort: !1 }),
              this.isKing(y))
            ) {
              if (p === 'E1' && _ === 'C1') return this.move('A1', 'D1');
              if (p === 'E8' && _ === 'C8') return this.move('A8', 'D8');
              if (p === 'E1' && _ === 'G1') return this.move('H1', 'F1');
              if (p === 'E8' && _ === 'G8') return this.move('H8', 'F8');
            }
            (this.configuration.turn = this.isPlayingWhite() ? a : u),
              this.isPlayingWhite() && this.configuration.fullMove++,
              this.configuration.halfMove++,
              (x || this.isPawn(y)) && (this.configuration.halfMove = 0);
          }
          exportJson() {
            return {
              moves: this.getMoves(),
              pieces: this.configuration.pieces,
              turn: this.configuration.turn,
              isFinished: this.configuration.isFinished,
              check: this.hasPlayingPlayerCheck(),
              checkMate: this.configuration.checkMate,
              castling: this.configuration.castling,
              enPassant: this.configuration.enPassant,
              halfMove: this.configuration.halfMove,
              fullMove: this.configuration.fullMove,
            };
          }
          calculateAiMove(p) {
            return this.calculateAiMoves(p)[0];
          }
          calculateAiMoves(p) {
            if (((p = parseInt(p)), !c.includes(p)))
              throw new Error(
                `Invalid level ${p}. You can choose ${c.join(',')}`
              );
            this.shouldIncreaseLevel() && p++;
            const _ = [],
              y = this.calculateScore(this.getPlayingColor()),
              x = this.getMoves();
            for (const v in x)
              x[v].map((B) => {
                const X = this.getTestBoard(),
                  K = Boolean(X.getPiece(B));
                X.move(v, B),
                  _.push({
                    from: v,
                    to: B,
                    score:
                      X.testMoveScores(
                        this.getPlayingColor(),
                        p,
                        K,
                        K ? X.calculateScore(this.getPlayingColor()) : y,
                        B
                      ).score +
                      X.calculateScoreByPiecesLocation(this.getPlayingColor()) +
                      Math.floor(
                        Math.random() *
                          (this.configuration.halfMove > 10
                            ? this.configuration.halfMove - 10
                            : 1) *
                          10
                      ) /
                        10,
                  });
              });
            return (
              _.sort((v, B) =>
                v.score < B.score ? 1 : v.score > B.score ? -1 : 0
              ),
              _
            );
          }
          shouldIncreaseLevel() {
            return this.getIngamePiecesValue() < 50;
          }
          getIngamePiecesValue() {
            let p = 0;
            for (const _ in this.configuration.pieces)
              p += te(this.getPiece(_));
            return p;
          }
          getTestBoard() {
            const p = {
              pieces: Object.assign({}, this.configuration.pieces),
              castling: Object.assign({}, this.configuration.castling),
              turn: this.configuration.turn,
              enPassant: this.configuration.enPassant,
            };
            return new C(p);
          }
          testMoveScores(p, _, y, x, v, B = 1) {
            let X = null;
            if (
              (B < f[_] && this.hasPlayingPlayerCheck()
                ? (X = this.getMoves(this.getPlayingColor()))
                : (B < h[_] || (y && B < f[_])) &&
                  (X = this.getMoves(this.getPlayingColor(), 5)),
              this.configuration.isFinished)
            )
              return {
                score:
                  this.calculateScore(p) +
                  (this.getPlayingColor() === p ? B : -B),
                max: !0,
              };
            if (!X)
              return x !== null
                ? { score: x, max: !1 }
                : { score: this.calculateScore(p), max: !1 };
            let K = this.getPlayingColor() === p ? he : le,
              ie = !1;
            for (const pe in X)
              ie ||
                X[pe].map((Ne) => {
                  if (ie) return;
                  const Ye = this.getTestBoard(),
                    Gt = Boolean(Ye.getPiece(Ne));
                  if ((Ye.move(pe, Ne), Ye.hasNonPlayingPlayerCheck())) return;
                  const ht = Ye.testMoveScores(
                    p,
                    _,
                    Gt,
                    Gt ? Ye.calculateScore(p) : x,
                    Ne,
                    B + 1
                  );
                  ht.max && (ie = !0),
                    (K =
                      this.getPlayingColor() === p
                        ? Math.max(K, ht.score)
                        : Math.min(K, ht.score));
                });
            return { score: K, max: !1 };
          }
          calculateScoreByPiecesLocation(p = this.getPlayingColor()) {
            const _ = { A: 0, B: 1, C: 2, D: 3, E: 4, F: 5, G: 6, H: 7 };
            let y = 0;
            for (const x in this.configuration.pieces) {
              const v = this.getPiece(x);
              if (L[v]) {
                const B = L[v][x[1] - 1][_[x[0]]];
                y += 0.5 * (this.getPieceColor(v) === p ? B : -B);
              }
            }
            return y;
          }
          calculateScore(p = this.getPlayingColor()) {
            let _ = 0;
            if (this.configuration.checkMate)
              return this.getPlayingColor() === p ? he : le;
            if (this.configuration.isFinished)
              return this.getPlayingColor() === p ? le : he;
            for (const y in this.configuration.pieces) {
              const x = this.getPiece(y);
              this.getPieceColor(x) === p
                ? (_ += 10 * te(x))
                : (_ -= 10 * te(x));
            }
            return _;
          }
        }
        class d {
          constructor(p) {
            this.board = new C(p);
          }
          move(p, _) {
            (p = p.toUpperCase()), (_ = _.toUpperCase());
            const y = this.board.getMoves();
            if (!y[p] || !y[p].includes(_))
              throw new Error(
                `Invalid move from ${p} to ${_} for ${this.board.getPlayingColor()}`
              );
            return (
              this.board.addMoveToHistory(p, _),
              this.board.move(p, _),
              { [p]: _ }
            );
          }
          moves(p = null) {
            return (
              (p
                ? this.board.getMoves()[p.toUpperCase()]
                : this.board.getMoves()) || []
            );
          }
          setPiece(p, _) {
            this.board.setPiece(p, _);
          }
          removePiece(p) {
            this.board.removePiece(p);
          }
          aiMove(p = 2) {
            const _ = this.board.calculateAiMove(p);
            return this.move(_.from, _.to);
          }
          getHistory(p = !1) {
            return p ? this.board.history.reverse() : this.board.history;
          }
          printToConsole() {
            (function (p) {
              process.stdout.write(`
`);
              let _ = u;
              Object.assign([], s)
                .reverse()
                .map((y) => {
                  process.stdout.write('' + y),
                    i.map((x) => {
                      switch (p.pieces[`${x}${y}`]) {
                        case 'K':
                          process.stdout.write('\u265A');
                          break;
                        case 'Q':
                          process.stdout.write('\u265B');
                          break;
                        case 'R':
                          process.stdout.write('\u265C');
                          break;
                        case 'B':
                          process.stdout.write('\u265D');
                          break;
                        case 'N':
                          process.stdout.write('\u265E');
                          break;
                        case 'P':
                          process.stdout.write('\u265F');
                          break;
                        case 'k':
                          process.stdout.write('\u2654');
                          break;
                        case 'q':
                          process.stdout.write('\u2655');
                          break;
                        case 'r':
                          process.stdout.write('\u2656');
                          break;
                        case 'b':
                          process.stdout.write('\u2657');
                          break;
                        case 'n':
                          process.stdout.write('\u2658');
                          break;
                        case 'p':
                          process.stdout.write('\u2659');
                          break;
                        default:
                          process.stdout.write(_ === u ? '\u2588' : '\u2591');
                      }
                      _ = _ === u ? a : u;
                    }),
                    (_ = _ === u ? a : u),
                    process.stdout.write(`
`);
                }),
                process.stdout.write(' '),
                i.map((y) => {
                  process.stdout.write('' + y);
                }),
                process.stdout.write(`
`);
            })(this.board.configuration);
          }
          exportJson() {
            return this.board.exportJson();
          }
          exportFEN() {
            return (function (p) {
              let _ = '';
              Object.assign([], s)
                .reverse()
                .map((X) => {
                  let K = 0;
                  X < 8 && (_ += '/'),
                    i.map((ie) => {
                      const pe = p.pieces[`${ie}${X}`];
                      pe
                        ? (K && ((_ += K.toString()), (K = 0)), (_ += pe))
                        : K++;
                    }),
                    (_ += '' + (K || ''));
                }),
                (_ += p.turn === u ? ' w ' : ' b ');
              const {
                whiteShort: y,
                whiteLong: x,
                blackLong: v,
                blackShort: B,
              } = p.castling;
              return (
                x || y || v || B
                  ? (y && (_ += 'K'),
                    x && (_ += 'Q'),
                    B && (_ += 'k'),
                    v && (_ += 'q'))
                  : (_ += '-'),
                (_ += ' ' + (p.enPassant ? p.enPassant.toLowerCase() : '-')),
                (_ += ' ' + p.halfMove),
                (_ += ' ' + p.fullMove),
                _
              );
            })(this.board.configuration);
          }
        }
        function b(F) {
          if (!F) throw new Error('Configuration param required.');
          return new d(F).moves();
        }
        function M(F) {
          if (!F) throw new Error('Configuration param required.');
          return new d(F).exportJson();
        }
        function I(F) {
          if (!F) throw new Error('Configuration param required.');
          return new d(F).exportFEN();
        }
        function U(F, p, _) {
          if (!F) throw new Error('Configuration param required.');
          const y = new d(F);
          return (
            y.move(p, _), typeof F == 'object' ? y.exportJson() : y.exportFEN()
          );
        }
        function Q(F, p = 2) {
          if (!F) throw new Error('Configuration param required.');
          const _ = new d(F).board.calculateAiMove(p);
          return { [_.from]: _.to };
        }
      },
    ]);
  });
})(Ts);
var Os = function (e, t) {
  return (
    (Os =
      Object.setPrototypeOf ||
      ({ __proto__: [] } instanceof Array &&
        function (n, r) {
          n.__proto__ = r;
        }) ||
      function (n, r) {
        for (var o in r)
          Object.prototype.hasOwnProperty.call(r, o) && (n[o] = r[o]);
      }),
    Os(e, t)
  );
};
function eo(e, t) {
  if (typeof t != 'function' && t !== null)
    throw new TypeError(
      'Class extends value ' + String(t) + ' is not a constructor or null'
    );
  Os(e, t);
  function n() {
    this.constructor = e;
  }
  e.prototype =
    t === null ? Object.create(t) : ((n.prototype = t.prototype), new n());
}
function Z_(e, t, n, r) {
  function o(i) {
    return i instanceof n
      ? i
      : new n(function (s) {
          s(i);
        });
  }
  return new (n || (n = Promise))(function (i, s) {
    function l(c) {
      try {
        u(r.next(c));
      } catch (h) {
        s(h);
      }
    }
    function a(c) {
      try {
        u(r.throw(c));
      } catch (h) {
        s(h);
      }
    }
    function u(c) {
      c.done ? i(c.value) : o(c.value).then(l, a);
    }
    u((r = r.apply(e, t || [])).next());
  });
}
function e2(e, t) {
  var n = {
      label: 0,
      sent: function () {
        if (i[0] & 1) throw i[1];
        return i[1];
      },
      trys: [],
      ops: [],
    },
    r,
    o,
    i,
    s;
  return (
    (s = { next: l(0), throw: l(1), return: l(2) }),
    typeof Symbol == 'function' &&
      (s[Symbol.iterator] = function () {
        return this;
      }),
    s
  );
  function l(u) {
    return function (c) {
      return a([u, c]);
    };
  }
  function a(u) {
    if (r) throw new TypeError('Generator is already executing.');
    for (; n; )
      try {
        if (
          ((r = 1),
          o &&
            (i =
              u[0] & 2
                ? o.return
                : u[0]
                ? o.throw || ((i = o.return) && i.call(o), 0)
                : o.next) &&
            !(i = i.call(o, u[1])).done)
        )
          return i;
        switch (((o = 0), i && (u = [u[0] & 2, i.value]), u[0])) {
          case 0:
          case 1:
            i = u;
            break;
          case 4:
            return n.label++, { value: u[1], done: !1 };
          case 5:
            n.label++, (o = u[1]), (u = [0]);
            continue;
          case 7:
            (u = n.ops.pop()), n.trys.pop();
            continue;
          default:
            if (
              ((i = n.trys),
              !(i = i.length > 0 && i[i.length - 1]) &&
                (u[0] === 6 || u[0] === 2))
            ) {
              n = 0;
              continue;
            }
            if (u[0] === 3 && (!i || (u[1] > i[0] && u[1] < i[3]))) {
              n.label = u[1];
              break;
            }
            if (u[0] === 6 && n.label < i[1]) {
              (n.label = i[1]), (i = u);
              break;
            }
            if (i && n.label < i[2]) {
              (n.label = i[2]), n.ops.push(u);
              break;
            }
            i[2] && n.ops.pop(), n.trys.pop();
            continue;
        }
        u = t.call(e, n);
      } catch (c) {
        (u = [6, c]), (o = 0);
      } finally {
        r = i = 0;
      }
    if (u[0] & 5) throw u[1];
    return { value: u[0] ? u[1] : void 0, done: !0 };
  }
}
function Kr(e) {
  var t = typeof Symbol == 'function' && Symbol.iterator,
    n = t && e[t],
    r = 0;
  if (n) return n.call(e);
  if (e && typeof e.length == 'number')
    return {
      next: function () {
        return (
          e && r >= e.length && (e = void 0), { value: e && e[r++], done: !e }
        );
      },
    };
  throw new TypeError(
    t ? 'Object is not iterable.' : 'Symbol.iterator is not defined.'
  );
}
function $o(e, t) {
  var n = typeof Symbol == 'function' && e[Symbol.iterator];
  if (!n) return e;
  var r = n.call(e),
    o,
    i = [],
    s;
  try {
    for (; (t === void 0 || t-- > 0) && !(o = r.next()).done; ) i.push(o.value);
  } catch (l) {
    s = { error: l };
  } finally {
    try {
      o && !o.done && (n = r.return) && n.call(r);
    } finally {
      if (s) throw s.error;
    }
  }
  return i;
}
function Vo(e, t, n) {
  if (n || arguments.length === 2)
    for (var r = 0, o = t.length, i; r < o; r++)
      (i || !(r in t)) &&
        (i || (i = Array.prototype.slice.call(t, 0, r)), (i[r] = t[r]));
  return e.concat(i || Array.prototype.slice.call(t));
}
function Rs(e) {
  return this instanceof Rs ? ((this.v = e), this) : new Rs(e);
}
function t2(e, t, n) {
  if (!Symbol.asyncIterator)
    throw new TypeError('Symbol.asyncIterator is not defined.');
  var r = n.apply(e, t || []),
    o,
    i = [];
  return (
    (o = {}),
    s('next'),
    s('throw'),
    s('return'),
    (o[Symbol.asyncIterator] = function () {
      return this;
    }),
    o
  );
  function s(f) {
    r[f] &&
      (o[f] = function (m) {
        return new Promise(function (P, A) {
          i.push([f, m, P, A]) > 1 || l(f, m);
        });
      });
  }
  function l(f, m) {
    try {
      a(r[f](m));
    } catch (P) {
      h(i[0][3], P);
    }
  }
  function a(f) {
    f.value instanceof Rs
      ? Promise.resolve(f.value.v).then(u, c)
      : h(i[0][2], f);
  }
  function u(f) {
    l('next', f);
  }
  function c(f) {
    l('throw', f);
  }
  function h(f, m) {
    f(m), i.shift(), i.length && l(i[0][0], i[0][1]);
  }
}
function n2(e) {
  if (!Symbol.asyncIterator)
    throw new TypeError('Symbol.asyncIterator is not defined.');
  var t = e[Symbol.asyncIterator],
    n;
  return t
    ? t.call(e)
    : ((e = typeof Kr == 'function' ? Kr(e) : e[Symbol.iterator]()),
      (n = {}),
      r('next'),
      r('throw'),
      r('return'),
      (n[Symbol.asyncIterator] = function () {
        return this;
      }),
      n);
  function r(i) {
    n[i] =
      e[i] &&
      function (s) {
        return new Promise(function (l, a) {
          (s = e[i](s)), o(l, a, s.done, s.value);
        });
      };
  }
  function o(i, s, l, a) {
    Promise.resolve(a).then(function (u) {
      i({ value: u, done: l });
    }, s);
  }
}
function Ft(e) {
  return typeof e == 'function';
}
function Dd(e) {
  var t = function (r) {
      Error.call(r), (r.stack = new Error().stack);
    },
    n = e(t);
  return (
    (n.prototype = Object.create(Error.prototype)),
    (n.prototype.constructor = n),
    n
  );
}
var Hi = Dd(function (e) {
  return function (n) {
    e(this),
      (this.message = n
        ? n.length +
          ` errors occurred during unsubscription:
` +
          n.map(function (r, o) {
            return o + 1 + ') ' + r.toString();
          }).join(`
  `)
        : ''),
      (this.name = 'UnsubscriptionError'),
      (this.errors = n);
  };
});
function Is(e, t) {
  if (e) {
    var n = e.indexOf(t);
    0 <= n && e.splice(n, 1);
  }
}
var di = (function () {
    function e(t) {
      (this.initialTeardown = t),
        (this.closed = !1),
        (this._parentage = null),
        (this._finalizers = null);
    }
    return (
      (e.prototype.unsubscribe = function () {
        var t, n, r, o, i;
        if (!this.closed) {
          this.closed = !0;
          var s = this._parentage;
          if (s)
            if (((this._parentage = null), Array.isArray(s)))
              try {
                for (var l = Kr(s), a = l.next(); !a.done; a = l.next()) {
                  var u = a.value;
                  u.remove(this);
                }
              } catch (A) {
                t = { error: A };
              } finally {
                try {
                  a && !a.done && (n = l.return) && n.call(l);
                } finally {
                  if (t) throw t.error;
                }
              }
            else s.remove(this);
          var c = this.initialTeardown;
          if (Ft(c))
            try {
              c();
            } catch (A) {
              i = A instanceof Hi ? A.errors : [A];
            }
          var h = this._finalizers;
          if (h) {
            this._finalizers = null;
            try {
              for (var f = Kr(h), m = f.next(); !m.done; m = f.next()) {
                var P = m.value;
                try {
                  Du(P);
                } catch (A) {
                  (i = i != null ? i : []),
                    A instanceof Hi
                      ? (i = Vo(Vo([], $o(i)), $o(A.errors)))
                      : i.push(A);
                }
              }
            } catch (A) {
              r = { error: A };
            } finally {
              try {
                m && !m.done && (o = f.return) && o.call(f);
              } finally {
                if (r) throw r.error;
              }
            }
          }
          if (i) throw new Hi(i);
        }
      }),
      (e.prototype.add = function (t) {
        var n;
        if (t && t !== this)
          if (this.closed) Du(t);
          else {
            if (t instanceof e) {
              if (t.closed || t._hasParent(this)) return;
              t._addParent(this);
            }
            (this._finalizers =
              (n = this._finalizers) !== null && n !== void 0 ? n : []).push(t);
          }
      }),
      (e.prototype._hasParent = function (t) {
        var n = this._parentage;
        return n === t || (Array.isArray(n) && n.includes(t));
      }),
      (e.prototype._addParent = function (t) {
        var n = this._parentage;
        this._parentage = Array.isArray(n) ? (n.push(t), n) : n ? [n, t] : t;
      }),
      (e.prototype._removeParent = function (t) {
        var n = this._parentage;
        n === t ? (this._parentage = null) : Array.isArray(n) && Is(n, t);
      }),
      (e.prototype.remove = function (t) {
        var n = this._finalizers;
        n && Is(n, t), t instanceof e && t._removeParent(this);
      }),
      (e.EMPTY = (function () {
        var t = new e();
        return (t.closed = !0), t;
      })()),
      e
    );
  })(),
  Nd = di.EMPTY;
function Bd(e) {
  return (
    e instanceof di ||
    (e && 'closed' in e && Ft(e.remove) && Ft(e.add) && Ft(e.unsubscribe))
  );
}
function Du(e) {
  Ft(e) ? e() : e.unsubscribe();
}
var Cl = {
    onUnhandledError: null,
    onStoppedNotification: null,
    Promise: void 0,
    useDeprecatedSynchronousErrorHandling: !1,
    useDeprecatedNextContext: !1,
  },
  Fs = {
    setTimeout: function (e, t) {
      for (var n = [], r = 2; r < arguments.length; r++)
        n[r - 2] = arguments[r];
      var o = Fs.delegate;
      return o != null && o.setTimeout
        ? o.setTimeout.apply(o, Vo([e, t], $o(n)))
        : setTimeout.apply(void 0, Vo([e, t], $o(n)));
    },
    clearTimeout: function (e) {
      var t = Fs.delegate;
      return ((t == null ? void 0 : t.clearTimeout) || clearTimeout)(e);
    },
    delegate: void 0,
  };
function my(e) {
  Fs.setTimeout(function () {
    throw e;
  });
}
function Nu() {}
var co = null;
function ko(e) {
  if (Cl.useDeprecatedSynchronousErrorHandling) {
    var t = !co;
    if ((t && (co = { errorThrown: !1, error: null }), e(), t)) {
      var n = co,
        r = n.errorThrown,
        o = n.error;
      if (((co = null), r)) throw o;
    }
  } else e();
}
var kl = (function (e) {
    eo(t, e);
    function t(n) {
      var r = e.call(this) || this;
      return (
        (r.isStopped = !1),
        n ? ((r.destination = n), Bd(n) && n.add(r)) : (r.destination = by),
        r
      );
    }
    return (
      (t.create = function (n, r, o) {
        return new Hs(n, r, o);
      }),
      (t.prototype.next = function (n) {
        this.isStopped || this._next(n);
      }),
      (t.prototype.error = function (n) {
        this.isStopped || ((this.isStopped = !0), this._error(n));
      }),
      (t.prototype.complete = function () {
        this.isStopped || ((this.isStopped = !0), this._complete());
      }),
      (t.prototype.unsubscribe = function () {
        this.closed ||
          ((this.isStopped = !0),
          e.prototype.unsubscribe.call(this),
          (this.destination = null));
      }),
      (t.prototype._next = function (n) {
        this.destination.next(n);
      }),
      (t.prototype._error = function (n) {
        try {
          this.destination.error(n);
        } finally {
          this.unsubscribe();
        }
      }),
      (t.prototype._complete = function () {
        try {
          this.destination.complete();
        } finally {
          this.unsubscribe();
        }
      }),
      t
    );
  })(di),
  gy = Function.prototype.bind;
function Di(e, t) {
  return gy.call(e, t);
}
var vy = (function () {
    function e(t) {
      this.partialObserver = t;
    }
    return (
      (e.prototype.next = function (t) {
        var n = this.partialObserver;
        if (n.next)
          try {
            n.next(t);
          } catch (r) {
            fo(r);
          }
      }),
      (e.prototype.error = function (t) {
        var n = this.partialObserver;
        if (n.error)
          try {
            n.error(t);
          } catch (r) {
            fo(r);
          }
        else fo(t);
      }),
      (e.prototype.complete = function () {
        var t = this.partialObserver;
        if (t.complete)
          try {
            t.complete();
          } catch (n) {
            fo(n);
          }
      }),
      e
    );
  })(),
  Hs = (function (e) {
    eo(t, e);
    function t(n, r, o) {
      var i = e.call(this) || this,
        s;
      if (Ft(n) || !n)
        s = {
          next: n != null ? n : void 0,
          error: r != null ? r : void 0,
          complete: o != null ? o : void 0,
        };
      else {
        var l;
        i && Cl.useDeprecatedNextContext
          ? ((l = Object.create(n)),
            (l.unsubscribe = function () {
              return i.unsubscribe();
            }),
            (s = {
              next: n.next && Di(n.next, l),
              error: n.error && Di(n.error, l),
              complete: n.complete && Di(n.complete, l),
            }))
          : (s = n);
      }
      return (i.destination = new vy(s)), i;
    }
    return t;
  })(kl);
function fo(e) {
  my(e);
}
function py(e) {
  throw e;
}
var by = { closed: !0, next: Nu, error: py, complete: Nu },
  yy = (function () {
    return (typeof Symbol == 'function' && Symbol.observable) || '@@observable';
  })();
function _y(e) {
  return e;
}
function Ey(e) {
  return e.length === 0
    ? _y
    : e.length === 1
    ? e[0]
    : function (n) {
        return e.reduce(function (r, o) {
          return o(r);
        }, n);
      };
}
var Ds = (function () {
  function e(t) {
    t && (this._subscribe = t);
  }
  return (
    (e.prototype.lift = function (t) {
      var n = new e();
      return (n.source = this), (n.operator = t), n;
    }),
    (e.prototype.subscribe = function (t, n, r) {
      var o = this,
        i = Cy(t) ? t : new Hs(t, n, r);
      return (
        ko(function () {
          var s = o,
            l = s.operator,
            a = s.source;
          i.add(l ? l.call(i, a) : a ? o._subscribe(i) : o._trySubscribe(i));
        }),
        i
      );
    }),
    (e.prototype._trySubscribe = function (t) {
      try {
        return this._subscribe(t);
      } catch (n) {
        t.error(n);
      }
    }),
    (e.prototype.forEach = function (t, n) {
      var r = this;
      return (
        (n = Bu(n)),
        new n(function (o, i) {
          var s = new Hs({
            next: function (l) {
              try {
                t(l);
              } catch (a) {
                i(a), s.unsubscribe();
              }
            },
            error: i,
            complete: o,
          });
          r.subscribe(s);
        })
      );
    }),
    (e.prototype._subscribe = function (t) {
      var n;
      return (n = this.source) === null || n === void 0
        ? void 0
        : n.subscribe(t);
    }),
    (e.prototype[yy] = function () {
      return this;
    }),
    (e.prototype.pipe = function () {
      for (var t = [], n = 0; n < arguments.length; n++) t[n] = arguments[n];
      return Ey(t)(this);
    }),
    (e.prototype.toPromise = function (t) {
      var n = this;
      return (
        (t = Bu(t)),
        new t(function (r, o) {
          var i;
          n.subscribe(
            function (s) {
              return (i = s);
            },
            function (s) {
              return o(s);
            },
            function () {
              return r(i);
            }
          );
        })
      );
    }),
    (e.create = function (t) {
      return new e(t);
    }),
    e
  );
})();
function Bu(e) {
  var t;
  return (t = e != null ? e : Cl.Promise) !== null && t !== void 0
    ? t
    : Promise;
}
function wy(e) {
  return e && Ft(e.next) && Ft(e.error) && Ft(e.complete);
}
function Cy(e) {
  return (e && e instanceof kl) || (wy(e) && Bd(e));
}
function ky(e) {
  return Ft(e == null ? void 0 : e.lift);
}
function Py(e) {
  return function (t) {
    if (ky(t))
      return t.lift(function (n) {
        try {
          return e(n, this);
        } catch (r) {
          this.error(r);
        }
      });
    throw new TypeError('Unable to lift unknown Observable type');
  };
}
function xy(e, t, n, r, o) {
  return new Sy(e, t, n, r, o);
}
var Sy = (function (e) {
    eo(t, e);
    function t(n, r, o, i, s, l) {
      var a = e.call(this, n) || this;
      return (
        (a.onFinalize = s),
        (a.shouldUnsubscribe = l),
        (a._next = r
          ? function (u) {
              try {
                r(u);
              } catch (c) {
                n.error(c);
              }
            }
          : e.prototype._next),
        (a._error = i
          ? function (u) {
              try {
                i(u);
              } catch (c) {
                n.error(c);
              } finally {
                this.unsubscribe();
              }
            }
          : e.prototype._error),
        (a._complete = o
          ? function () {
              try {
                o();
              } catch (u) {
                n.error(u);
              } finally {
                this.unsubscribe();
              }
            }
          : e.prototype._complete),
        a
      );
    }
    return (
      (t.prototype.unsubscribe = function () {
        var n;
        if (!this.shouldUnsubscribe || this.shouldUnsubscribe()) {
          var r = this.closed;
          e.prototype.unsubscribe.call(this),
            !r &&
              ((n = this.onFinalize) === null || n === void 0 || n.call(this));
        }
      }),
      t
    );
  })(kl),
  Ly = Dd(function (e) {
    return function () {
      e(this),
        (this.name = 'ObjectUnsubscribedError'),
        (this.message = 'object unsubscribed');
    };
  }),
  zd = (function (e) {
    eo(t, e);
    function t() {
      var n = e.call(this) || this;
      return (
        (n.closed = !1),
        (n.currentObservers = null),
        (n.observers = []),
        (n.isStopped = !1),
        (n.hasError = !1),
        (n.thrownError = null),
        n
      );
    }
    return (
      (t.prototype.lift = function (n) {
        var r = new zu(this, this);
        return (r.operator = n), r;
      }),
      (t.prototype._throwIfClosed = function () {
        if (this.closed) throw new Ly();
      }),
      (t.prototype.next = function (n) {
        var r = this;
        ko(function () {
          var o, i;
          if ((r._throwIfClosed(), !r.isStopped)) {
            r.currentObservers ||
              (r.currentObservers = Array.from(r.observers));
            try {
              for (
                var s = Kr(r.currentObservers), l = s.next();
                !l.done;
                l = s.next()
              ) {
                var a = l.value;
                a.next(n);
              }
            } catch (u) {
              o = { error: u };
            } finally {
              try {
                l && !l.done && (i = s.return) && i.call(s);
              } finally {
                if (o) throw o.error;
              }
            }
          }
        });
      }),
      (t.prototype.error = function (n) {
        var r = this;
        ko(function () {
          if ((r._throwIfClosed(), !r.isStopped)) {
            (r.hasError = r.isStopped = !0), (r.thrownError = n);
            for (var o = r.observers; o.length; ) o.shift().error(n);
          }
        });
      }),
      (t.prototype.complete = function () {
        var n = this;
        ko(function () {
          if ((n._throwIfClosed(), !n.isStopped)) {
            n.isStopped = !0;
            for (var r = n.observers; r.length; ) r.shift().complete();
          }
        });
      }),
      (t.prototype.unsubscribe = function () {
        (this.isStopped = this.closed = !0),
          (this.observers = this.currentObservers = null);
      }),
      Object.defineProperty(t.prototype, 'observed', {
        get: function () {
          var n;
          return (
            ((n = this.observers) === null || n === void 0
              ? void 0
              : n.length) > 0
          );
        },
        enumerable: !1,
        configurable: !0,
      }),
      (t.prototype._trySubscribe = function (n) {
        return this._throwIfClosed(), e.prototype._trySubscribe.call(this, n);
      }),
      (t.prototype._subscribe = function (n) {
        return (
          this._throwIfClosed(),
          this._checkFinalizedStatuses(n),
          this._innerSubscribe(n)
        );
      }),
      (t.prototype._innerSubscribe = function (n) {
        var r = this,
          o = this,
          i = o.hasError,
          s = o.isStopped,
          l = o.observers;
        return i || s
          ? Nd
          : ((this.currentObservers = null),
            l.push(n),
            new di(function () {
              (r.currentObservers = null), Is(l, n);
            }));
      }),
      (t.prototype._checkFinalizedStatuses = function (n) {
        var r = this,
          o = r.hasError,
          i = r.thrownError,
          s = r.isStopped;
        o ? n.error(i) : s && n.complete();
      }),
      (t.prototype.asObservable = function () {
        var n = new Ds();
        return (n.source = this), n;
      }),
      (t.create = function (n, r) {
        return new zu(n, r);
      }),
      t
    );
  })(Ds),
  zu = (function (e) {
    eo(t, e);
    function t(n, r) {
      var o = e.call(this) || this;
      return (o.destination = n), (o.source = r), o;
    }
    return (
      (t.prototype.next = function (n) {
        var r, o;
        (o =
          (r = this.destination) === null || r === void 0 ? void 0 : r.next) ===
          null ||
          o === void 0 ||
          o.call(r, n);
      }),
      (t.prototype.error = function (n) {
        var r, o;
        (o =
          (r = this.destination) === null || r === void 0
            ? void 0
            : r.error) === null ||
          o === void 0 ||
          o.call(r, n);
      }),
      (t.prototype.complete = function () {
        var n, r;
        (r =
          (n = this.destination) === null || n === void 0
            ? void 0
            : n.complete) === null ||
          r === void 0 ||
          r.call(n);
      }),
      (t.prototype._subscribe = function (n) {
        var r, o;
        return (o =
          (r = this.source) === null || r === void 0
            ? void 0
            : r.subscribe(n)) !== null && o !== void 0
          ? o
          : Nd;
      }),
      t
    );
  })(zd),
  My = new Ds(function (e) {
    return e.complete();
  });
function Ay(e) {
  return e <= 0
    ? function () {
        return My;
      }
    : Py(function (t, n) {
        var r = 0;
        t.subscribe(
          xy(n, function (o) {
            ++r <= e && (n.next(o), e <= r && n.complete());
          })
        );
      });
}
function Ty() {
  return new Worker('assets/chess-engine.worker.c1662189.js', {
    type: 'module',
  });
}
class Oy {
  constructor() {
    hr(this, 'chessEngineWorker');
    hr(this, '_aiMove', new zd());
    (this.chessEngineWorker = new Ty()),
      (this.chessEngineWorker.onmessage = (t) => {
        this._aiMove.next(t.data.aiMove);
      });
  }
  terminate() {
    this.chessEngineWorker.terminate();
  }
  aiMove({ fen: t, level: n }) {
    return (
      this.chessEngineWorker.postMessage({ fen: t, level: n }),
      this._aiMove.pipe(Ay(1)).toPromise()
    );
  }
}
const Ry = (e) => {
    const t = {};
    return (
      Object.keys(e).forEach((n) => {
        const r = n.toLowerCase();
        (t[r] = t[r] || {}), (t[r] = e[n].map((o) => o.toLowerCase()));
      }),
      t
    );
  },
  Iy = (e) => {
    const t = e.pieces,
      n = {};
    Object.keys(t).forEach((r) => {
      const o = r.toUpperCase();
      n[o] = t[r];
    }),
      (e.pieces = n);
  },
  qu = (e) => {
    const t = {};
    return (
      Object.keys(e).forEach((n) => {
        const r = n.toLowerCase();
        t[r] = e[n];
      }),
      t
    );
  },
  $u = (e) => Ry(e.moves());
class Fy {
  constructor(t) {
    hr(this, 'engine');
    hr(this, 'game');
    this.createNew(t);
  }
  createNew(t) {
    this.engine && this.engine.terminate(),
      (this.engine = new Oy()),
      t != null && t.pieces && Iy(t),
      (this.game = new Ts.exports.Game(t));
  }
  move(t, n) {
    try {
      return (
        this.game.move(t.toUpperCase(), n.toUpperCase()),
        {
          isValid: !0,
          finished: this.game.exportJson().isFinished,
          turn: this.game.exportJson().turn,
        }
      );
    } catch {
      return {
        isValid: !0,
        finished: this.game.exportJson().isFinished,
        turn: this.game.exportJson().turn,
      };
    }
  }
  async aiMove(t = 0) {
    const n = await this.engine.aiMove({
      fen: this.game.exportFEN(),
      level: t,
    });
    return this.game.move(n.from.toUpperCase(), n.to.toUpperCase()), n;
  }
  exportFEN() {
    return this.game.exportFEN();
  }
  exportJson() {
    return this.game.exportJson();
  }
  getHistory(t) {
    return this.game.getHistory(t).map((n) => {
      const r = new Ts.exports.Game(n.configuration);
      return {
        ...n,
        description: this.getDescription(
          n.from.toLowerCase(),
          n.to.toLowerCase(),
          qu(n.configuration.pieces),
          $u(r)
        ),
      };
    });
  }
  moves(t) {
    const n = this.gamePieces(),
      r = $u(this.game);
    if (t)
      return this.game
        .moves(t.toUpperCase())
        .map((i) => i.toLowerCase())
        .map((i) => ({
          from: t,
          to: i,
          description: this.getDescription(t, i, n, r),
        }));
    {
      const o = [];
      return (
        Object.keys(r).forEach((i) => {
          r[i].forEach((s) => {
            o.push({
              from: i,
              to: s,
              description: this.getDescription(i, s, n, r),
            });
          });
        }),
        o
      );
    }
  }
  getDescription(t, n, r, o) {
    if (r[t].toLowerCase() === 'k' && t.startsWith('e')) {
      if (n.startsWith('c')) return '0-0-0';
      if (n.startsWith('g')) return '0-0';
    }
    const i = [];
    if (
      (Object.keys(o).forEach((u) => {
        o[u].forEach((c) => {
          c === n && t !== u && r[u] === r[t] && i.push({ from: u, to: c });
        });
      }),
      i.length > 1)
    )
      return `${t}-${n}`;
    const s = r[n] ? 'x' : '',
      l = r[t].toUpperCase();
    let a = '';
    return (
      i.length === 1 &&
        (i[0].from[0] === t[0] ? (a = t[1]) : (a = t[0].toLowerCase())),
      `${l}${a}${s}${n.toLowerCase()}`
    );
  }
  validate(t, n) {
    return this.game.moves(t.toUpperCase()).indexOf(n.toUpperCase()) > -1;
  }
  gamePieces() {
    return qu(this.game.exportJson().pieces);
  }
  terminate() {
    this.engine.terminate();
  }
}
const pt = new Fy(),
  Ni = (e, t) => {
    var s;
    const n = e.getHistory(!1),
      r = n.length > 0 ? n[n.length - 1] : void 0;
    r &&
      ((r.check = e.exportJson().check),
      (r.checkmate = e.exportJson().checkMate));
    const o =
        ((s = t == null ? void 0 : t.position) == null
          ? void 0
          : s.moveHistory.splice(
              0,
              (t == null ? void 0 : t.position.indexInHistory) + 1 || 0
            )) || [],
      i =
        t !== void 0
          ? r
            ? (t == null ? void 0 : t.position.indexInHistory) + 1
            : t == null
            ? void 0
            : t.position.indexInHistory
          : -1;
    return {
      fen: e.exportFEN(),
      moves: e.moves(),
      turn: e.exportJson().turn,
      isFinished: e.exportJson().isFinished,
      moveHistory: [].concat(o).concat(r ? [r] : []),
      pieces: e.gamePieces(),
      indexInHistory: i,
      check: e.exportJson().check,
      checkMate: e.exportJson().checkMate,
    };
  },
  Hy = (e, t, n) => {
    if (t.length === 0) return;
    const r = t[Math.max(0, n)];
    pt.createNew(r.configuration), n > -1 && pt.move(r.from, r.to);
  },
  Dy = Ef('chessgame', {
    state: () => ({
      engineLevel: 0,
      gameOngoing: !1,
      position: Ni(pt),
      playerColor: 'white',
    }),
    getters: {
      lastOpponentMove(e) {
        if (e.position.indexInHistory > -1) {
          const t = e.position.moveHistory[e.position.indexInHistory];
          if (
            t.configuration.turn === e.playerColor &&
            e.position.indexInHistory > 0
          )
            return e.position.moveHistory[e.position.indexInHistory - 1];
          if (t.configuration.turn !== e.playerColor) return t;
        }
      },
      playersTurn(e) {
        return e.playerColor === e.position.turn;
      },
    },
    actions: {
      async setupBoard(e) {
        (this.gameOngoing = !1),
          e != null && e.config
            ? pt.createNew(e == null ? void 0 : e.config)
            : pt.createNew((e == null ? void 0 : e.fen) || void 0),
          (this.position.moveHistory = []),
          (this.position.indexInHistory = -1),
          this.updatePosition(),
          (this.playerColor = (e == null ? void 0 : e.playerColor) || 'white');
      },
      async new(e) {
        this.setupBoard(e), this.start();
      },
      async start() {
        (this.gameOngoing = !0),
          this.playerColor !== this.position.turn && (await this.aiMove());
      },
      async clear() {
        (this.gameOngoing = !1),
          pt.createNew({ pieces: [] }),
          await this.updatePosition();
      },
      async playerMove(e) {
        const t = pt.move(e.from, e.to);
        return (
          await this.updatePosition(),
          this.position.isFinished || this.aiMove(),
          t
        );
      },
      async aiMove() {
        if (this.gameOngoing) {
          const e = await pt.aiMove(this.engineLevel);
          return await this.updatePosition(), e;
        }
      },
      updatePosition() {
        this.position = Ni(pt, this);
      },
      historyMoveToIdx(e) {
        const t = JSON.parse(JSON.stringify(this.position.moveHistory));
        Hy(pt, this.position.moveHistory, e),
          (this.position = {
            ...Ni(pt, this),
            indexInHistory: e,
            moveHistory: t,
          });
      },
      async historyBack() {
        await this.historyMoveToIdx(
          Math.max(
            this.playerColor === 'white' ? -1 : 0,
            this.position.indexInHistory - 2
          )
        );
      },
      async historyForward() {
        await this.historyMoveToIdx(
          Math.min(
            this.position.moveHistory.length - 1,
            this.position.indexInHistory + 2
          )
        );
      },
      async stopGame() {
        (this.gameOngoing = !1), pt.terminate();
      },
    },
  }),
  Ny = [
    {
      path: '/:language(es|de|en)?',
      component: dy,
      children: [
        {
          path: '',
          name: 'home',
          component: () =>
            ze(
              () => import('./HomeComponent.9bf58686.js'),
              [
                'assets/HomeComponent.9bf58686.js',
                'assets/HomeComponent.144a8918.css',
                'assets/StarsRating.b9408a2c.js',
                'assets/exercise.store.9eb7e56f.js',
              ]
            ),
        },
        {
          path: 'play',
          name: 'play',
          component: () =>
            ze(
              () => import('./PlayChess.5662f8d2.js'),
              [
                'assets/PlayChess.5662f8d2.js',
                'assets/PlayChess.88946931.css',
                'assets/ToggleChessPieceNotation.74de14e5.js',
                'assets/chess-utils.4933cc4c.js',
                'assets/chess-board.interface.321ee08e.js',
                'assets/dateTimestampProvider.aca62768.js',
              ]
            ),
          beforeEnter: async (e, t, n) => {
            t.path.endsWith('setup-board') || (await Dy().new()), n();
          },
        },
        {
          path: 'setup-board',
          name: 'setup-board',
          component: () =>
            ze(
              () => import('./SetupBoard.9d7f2c7f.js'),
              [
                'assets/SetupBoard.9d7f2c7f.js',
                'assets/chess-board.interface.321ee08e.js',
                'assets/dateTimestampProvider.aca62768.js',
              ]
            ),
        },
        {
          path: 'scenario',
          children: [
            {
              path: ':game(queen-vs-king)',
              name: 'queen-vs-king',
              component: () =>
                ze(
                  () => import('./BlindfoldChessView.73aff341.js'),
                  [
                    'assets/BlindfoldChessView.73aff341.js',
                    'assets/ExerciseHeader.7b1635f9.js',
                    'assets/PieceList.8b687bc9.js',
                    'assets/chess-utils.4933cc4c.js',
                    'assets/ExerciseBoard.41f7421a.js',
                    'assets/chess-board.interface.321ee08e.js',
                    'assets/dateTimestampProvider.aca62768.js',
                    'assets/exercise.store.9eb7e56f.js',
                    'assets/ToggleChessPieceNotation.74de14e5.js',
                  ]
                ),
            },
            {
              path: ':game(queen-vs-rook)',
              name: 'queen-vs-rook',
              component: () =>
                ze(
                  () => import('./BlindfoldChessView.73aff341.js'),
                  [
                    'assets/BlindfoldChessView.73aff341.js',
                    'assets/ExerciseHeader.7b1635f9.js',
                    'assets/PieceList.8b687bc9.js',
                    'assets/chess-utils.4933cc4c.js',
                    'assets/ExerciseBoard.41f7421a.js',
                    'assets/chess-board.interface.321ee08e.js',
                    'assets/dateTimestampProvider.aca62768.js',
                    'assets/exercise.store.9eb7e56f.js',
                    'assets/ToggleChessPieceNotation.74de14e5.js',
                  ]
                ),
            },
            {
              path: ':game(rook-vs-king)',
              name: 'rook-vs-king',
              component: () =>
                ze(
                  () => import('./BlindfoldChessView.73aff341.js'),
                  [
                    'assets/BlindfoldChessView.73aff341.js',
                    'assets/ExerciseHeader.7b1635f9.js',
                    'assets/PieceList.8b687bc9.js',
                    'assets/chess-utils.4933cc4c.js',
                    'assets/ExerciseBoard.41f7421a.js',
                    'assets/chess-board.interface.321ee08e.js',
                    'assets/dateTimestampProvider.aca62768.js',
                    'assets/exercise.store.9eb7e56f.js',
                    'assets/ToggleChessPieceNotation.74de14e5.js',
                  ]
                ),
            },
            {
              path: ':game(queen-vs-knights)',
              name: 'queen-vs-knights',
              component: () =>
                ze(
                  () => import('./BlindfoldChessView.73aff341.js'),
                  [
                    'assets/BlindfoldChessView.73aff341.js',
                    'assets/ExerciseHeader.7b1635f9.js',
                    'assets/PieceList.8b687bc9.js',
                    'assets/chess-utils.4933cc4c.js',
                    'assets/ExerciseBoard.41f7421a.js',
                    'assets/chess-board.interface.321ee08e.js',
                    'assets/dateTimestampProvider.aca62768.js',
                    'assets/exercise.store.9eb7e56f.js',
                    'assets/ToggleChessPieceNotation.74de14e5.js',
                  ]
                ),
            },
          ],
        },
        {
          path: 'exercise',
          component: () =>
            ze(
              () => import('./ExerciseView.5f2538ab.js'),
              [
                'assets/ExerciseView.5f2538ab.js',
                'assets/ExerciseView.4fe829a6.css',
                'assets/ExerciseHeader.7b1635f9.js',
                'assets/exercise.store.9eb7e56f.js',
                'assets/format-number.dd03eb7b.js',
                'assets/dateTimestampProvider.aca62768.js',
              ]
            ),
          children: [
            {
              path: ':game(guess-color)',
              name: 'guess-color',
              component: () =>
                ze(
                  () => import('./GuessColorView.e417ebee.js'),
                  [
                    'assets/GuessColorView.e417ebee.js',
                    'assets/ExerciseBoard.41f7421a.js',
                    'assets/chess-board.interface.321ee08e.js',
                    'assets/dateTimestampProvider.aca62768.js',
                    'assets/exercise.store.9eb7e56f.js',
                    'assets/register-defaults.6d46d2f4.js',
                    'assets/chess-utils.4933cc4c.js',
                  ]
                ),
            },
            {
              path: ':game(same-diagonal)',
              name: 'same-diagonal',
              component: () =>
                ze(
                  () => import('./SameDiagonalView.2a19cf3f.js'),
                  [
                    'assets/SameDiagonalView.2a19cf3f.js',
                    'assets/ExerciseBoard.41f7421a.js',
                    'assets/chess-board.interface.321ee08e.js',
                    'assets/dateTimestampProvider.aca62768.js',
                    'assets/exercise.store.9eb7e56f.js',
                    'assets/register-defaults.6d46d2f4.js',
                    'assets/chess-utils.4933cc4c.js',
                  ]
                ),
            },
            {
              path: ':game(attack-with-bishop)',
              name: 'attack-with-bishop',
              component: () =>
                ze(
                  () => import('./AttackWithBishopView.5c7b13df.js'),
                  [
                    'assets/AttackWithBishopView.5c7b13df.js',
                    'assets/PieceList.8b687bc9.js',
                    'assets/chess-utils.4933cc4c.js',
                    'assets/ExerciseBoard.41f7421a.js',
                    'assets/chess-board.interface.321ee08e.js',
                    'assets/dateTimestampProvider.aca62768.js',
                    'assets/exercise.store.9eb7e56f.js',
                    'assets/register-defaults.6d46d2f4.js',
                  ]
                ),
            },
            {
              path: ':game(attack-with-knight)',
              name: 'attack-with-knight',
              component: () =>
                ze(
                  () => import('./AttackWithKnightView.3a394e28.js'),
                  [
                    'assets/AttackWithKnightView.3a394e28.js',
                    'assets/PieceList.8b687bc9.js',
                    'assets/chess-utils.4933cc4c.js',
                    'assets/ExerciseBoard.41f7421a.js',
                    'assets/chess-board.interface.321ee08e.js',
                    'assets/dateTimestampProvider.aca62768.js',
                    'assets/exercise.store.9eb7e56f.js',
                    'assets/register-defaults.6d46d2f4.js',
                  ]
                ),
            },
            {
              path: ':game(save-the-king)',
              name: 'save-the-king',
              component: () =>
                ze(
                  () => import('./SaveTheKingView.ea42a66d.js'),
                  [
                    'assets/SaveTheKingView.ea42a66d.js',
                    'assets/PieceList.8b687bc9.js',
                    'assets/chess-utils.4933cc4c.js',
                    'assets/ExerciseBoard.41f7421a.js',
                    'assets/chess-board.interface.321ee08e.js',
                    'assets/dateTimestampProvider.aca62768.js',
                    'assets/exercise.store.9eb7e56f.js',
                    'assets/register-defaults.6d46d2f4.js',
                  ]
                ),
            },
            {
              path: ':game(find-the-square)',
              name: 'find-the-square',
              component: () =>
                ze(
                  () => import('./FindSquareView.889db07f.js'),
                  [
                    'assets/FindSquareView.889db07f.js',
                    'assets/FindSquareView.ca6d0d8c.css',
                    'assets/ExerciseBoard.41f7421a.js',
                    'assets/chess-board.interface.321ee08e.js',
                    'assets/dateTimestampProvider.aca62768.js',
                    'assets/exercise.store.9eb7e56f.js',
                    'assets/register-defaults.6d46d2f4.js',
                    'assets/chess-utils.4933cc4c.js',
                  ]
                ),
            },
            {
              path: ':game(move-your-knight)',
              name: 'move-your-knight',
              component: () =>
                ze(
                  () => import('./MoveTheKnight.4ee9c170.js'),
                  [
                    'assets/MoveTheKnight.4ee9c170.js',
                    'assets/register-defaults.6d46d2f4.js',
                    'assets/exercise.store.9eb7e56f.js',
                    'assets/chess-utils.4933cc4c.js',
                  ]
                ),
            },
          ],
        },
        {
          path: 'score-screen',
          name: 'score-screen',
          component: () =>
            ze(
              () => import('./ScoreScreenView.2e0a4cf2.js'),
              [
                'assets/ScoreScreenView.2e0a4cf2.js',
                'assets/ScoreScreenView.4219e5ff.css',
                'assets/StarsRating.b9408a2c.js',
                'assets/exercise.store.9eb7e56f.js',
                'assets/format-number.dd03eb7b.js',
              ]
            ),
        },
      ],
    },
    {
      path: '/:catchAll(.*)*',
      component: () => ze(() => import('./ErrorNotFound.b5fe1f1f.js'), []),
    },
  ],
  By = T0({
    history: Gp(),
    scrollBehavior: () => ({ left: 0, top: 0 }),
    routes: Ny,
    linkActiveClass: 'router-link-active',
    linkExactActiveClass: 'exact-active-link',
  });
var Bi = function () {
  return By;
};
async function zy(e, t) {
  const n = e(j0);
  n.use(Wg, t);
  const r = typeof Ai == 'function' ? await Ai({}) : Ai;
  n.use(r);
  const o = jt(typeof Bi == 'function' ? await Bi({ store: r }) : Bi);
  return (
    r.use(({ store: i }) => {
      i.router = o;
    }),
    { app: n, store: r, router: o }
  );
}
var qy = {
  name: 'svg-material-icons',
  type: { positive: tb, negative: Fi, info: Sb, warning: Hb },
  arrow: { up: xu, right: eb, down: Z1, left: J1, dropdown: Pu },
  chevron: { left: br, right: yr },
  colorPicker: { spectrum: xb, tune: jb, palette: qb },
  pullToRefresh: { icon: Nb },
  carousel: { left: br, right: yr, up: Ou, down: Ii, navigationIcon: Tb },
  chip: { remove: Su, selected: Lu },
  datetime: { arrowLeft: br, arrowRight: yr, now: Q1, today: Vb },
  editor: {
    bold: gb,
    italic: yb,
    strikethrough: zb,
    underline: Cb,
    unorderedList: _b,
    orderedList: Eb,
    subscript: Wb,
    superscript: Gb,
    hyperlink: Rb,
    toggleFullscreen: Id,
    quote: wb,
    left: Tu,
    center: db,
    right: mb,
    justify: hb,
    print: Fb,
    outdent: pb,
    indent: bb,
    removeFormat: vb,
    formatting: $b,
    fontSize: Ri,
    align: Tu,
    hr: Bb,
    undo: Ub,
    redo: Db,
    heading: Ri,
    code: Mu,
    size: Ri,
    font: fb,
    viewSource: Mu,
  },
  expansionItem: { icon: Ii, denseIcon: Pu },
  fab: { icon: X1, activeIcon: ob },
  field: { clear: Su, error: cb },
  pagination: { first: Au, prev: Lb, next: Mb, last: Ru },
  rating: { icon: Pb },
  stepper: { done: Lu, active: ub, error: Fi },
  tabs: { left: br, right: yr, up: Ou, down: Ii },
  table: {
    arrowUp: xu,
    warning: Fi,
    firstPage: Au,
    prevPage: br,
    nextPage: yr,
    lastPage: Ru,
  },
  tree: { icon: Ib },
  uploader: {
    done: lb,
    clear: nb,
    add: Y1,
    upload: ib,
    removeQueue: rb,
    removeUploaded: ab,
  },
};
let _r = 0,
  zi,
  qi,
  Pr,
  $i = !1,
  Vu,
  ju,
  Uu,
  yn = null;
function $y(e) {
  Vy(e) && at(e);
}
function Vy(e) {
  if (
    e.target === document.body ||
    e.target.classList.contains('q-layout__backdrop')
  )
    return !0;
  const t = Ag(e),
    n = e.shiftKey && !e.deltaX,
    r = !n && Math.abs(e.deltaX) <= Math.abs(e.deltaY),
    o = n || r ? e.deltaY : e.deltaX;
  for (let i = 0; i < t.length; i++) {
    const s = t[i];
    if (T1(s, r))
      return r
        ? o < 0 && s.scrollTop === 0
          ? !0
          : o > 0 && s.scrollTop + s.clientHeight === s.scrollHeight
        : o < 0 && s.scrollLeft === 0
        ? !0
        : o > 0 && s.scrollLeft + s.clientWidth === s.scrollWidth;
  }
  return !0;
}
function Wu(e) {
  e.target === document &&
    (document.scrollingElement.scrollTop = document.scrollingElement.scrollTop);
}
function ho(e) {
  $i !== !0 &&
    (($i = !0),
    requestAnimationFrame(() => {
      $i = !1;
      const { height: t } = e.target,
        { clientHeight: n, scrollTop: r } = document.scrollingElement;
      (Pr === void 0 || t !== window.innerHeight) &&
        ((Pr = n - t), (document.scrollingElement.scrollTop = r)),
        r > Pr &&
          (document.scrollingElement.scrollTop -= Math.ceil((r - Pr) / 8));
    }));
}
function Gu(e) {
  const t = document.body,
    n = window.visualViewport !== void 0;
  if (e === 'add') {
    const { overflowY: r, overflowX: o } = window.getComputedStyle(t);
    (zi = Ld(window)),
      (qi = Sd(window)),
      (Vu = t.style.left),
      (ju = t.style.top),
      (Uu = window.location.href),
      (t.style.left = `-${zi}px`),
      (t.style.top = `-${qi}px`),
      o !== 'hidden' &&
        (o === 'scroll' || t.scrollWidth > window.innerWidth) &&
        t.classList.add('q-body--force-scrollbar-x'),
      r !== 'hidden' &&
        (r === 'scroll' || t.scrollHeight > window.innerHeight) &&
        t.classList.add('q-body--force-scrollbar-y'),
      t.classList.add('q-body--prevent-scroll'),
      (document.qScrollPrevented = !0),
      Te.is.ios === !0 &&
        (n === !0
          ? (window.scrollTo(0, 0),
            window.visualViewport.addEventListener(
              'resize',
              ho,
              Ie.passiveCapture
            ),
            window.visualViewport.addEventListener(
              'scroll',
              ho,
              Ie.passiveCapture
            ),
            window.scrollTo(0, 0))
          : window.addEventListener('scroll', Wu, Ie.passiveCapture));
  }
  Te.is.desktop === !0 &&
    Te.is.mac === !0 &&
    window[`${e}EventListener`]('wheel', $y, Ie.notPassive),
    e === 'remove' &&
      (Te.is.ios === !0 &&
        (n === !0
          ? (window.visualViewport.removeEventListener(
              'resize',
              ho,
              Ie.passiveCapture
            ),
            window.visualViewport.removeEventListener(
              'scroll',
              ho,
              Ie.passiveCapture
            ))
          : window.removeEventListener('scroll', Wu, Ie.passiveCapture)),
      t.classList.remove('q-body--prevent-scroll'),
      t.classList.remove('q-body--force-scrollbar-x'),
      t.classList.remove('q-body--force-scrollbar-y'),
      (document.qScrollPrevented = !1),
      (t.style.left = Vu),
      (t.style.top = ju),
      window.location.href === Uu && window.scrollTo(zi, qi),
      (Pr = void 0));
}
function Ns(e) {
  let t = 'add';
  if (e === !0) {
    if ((_r++, yn !== null)) {
      clearTimeout(yn), (yn = null);
      return;
    }
    if (_r > 1) return;
  } else {
    if (_r === 0 || (_r--, _r > 0)) return;
    if (((t = 'remove'), Te.is.ios === !0 && Te.is.nativeMobile === !0)) {
      yn !== null && clearTimeout(yn),
        (yn = setTimeout(() => {
          Gu(t), (yn = null);
        }, 100));
      return;
    }
  }
  Gu(t);
}
let $n,
  Vi,
  Ku = 0,
  _n = null,
  Be = {},
  Ln = {};
const qd = {
    group: '__default_quasar_group__',
    delay: 0,
    message: !1,
    html: !1,
    spinnerSize: 80,
    spinnerColor: '',
    messageColor: '',
    backgroundColor: '',
    boxClass: '',
    spinner: Wr,
    customClass: '',
  },
  $d = { ...qd };
function jy(e) {
  if (e && e.group !== void 0 && Ln[e.group] !== void 0)
    return Object.assign(Ln[e.group], e);
  const t =
    $t(e) === !0 && e.ignoreDefaults === !0 ? { ...qd, ...e } : { ...$d, ...e };
  return (Ln[t.group] = t), t;
}
const Et = fr(
    { isActive: !1 },
    {
      show(e) {
        Be = jy(e);
        const { group: t } = Be;
        return (
          (Et.isActive = !0),
          $n !== void 0
            ? ((Be.uid = Ku), Vi.$forceUpdate())
            : ((Be.uid = ++Ku),
              _n !== null && clearTimeout(_n),
              (_n = setTimeout(() => {
                _n = null;
                const n = _l('q-loading');
                ($n = vf(
                  {
                    name: 'QLoading',
                    setup() {
                      st(() => {
                        Ns(!0);
                      });
                      function r() {
                        Et.isActive !== !0 &&
                          $n !== void 0 &&
                          (Ns(!1),
                          $n.unmount(n),
                          El(n),
                          ($n = void 0),
                          (Vi = void 0));
                      }
                      function o() {
                        if (Et.isActive !== !0) return null;
                        const i = [
                          q(Be.spinner, {
                            class: 'q-loading__spinner',
                            color: Be.spinnerColor,
                            size: Be.spinnerSize,
                          }),
                        ];
                        return (
                          Be.message &&
                            i.push(
                              q('div', {
                                class:
                                  'q-loading__message' +
                                  (Be.messageColor
                                    ? ` text-${Be.messageColor}`
                                    : ''),
                                [Be.html === !0 ? 'innerHTML' : 'textContent']:
                                  Be.message,
                              })
                            ),
                          q(
                            'div',
                            {
                              class:
                                'q-loading fullscreen flex flex-center z-max ' +
                                Be.customClass.trim(),
                              key: Be.uid,
                            },
                            [
                              q('div', {
                                class:
                                  'q-loading__backdrop' +
                                  (Be.backgroundColor
                                    ? ` bg-${Be.backgroundColor}`
                                    : ''),
                              }),
                              q(
                                'div',
                                {
                                  class:
                                    'q-loading__box column items-center ' +
                                    Be.boxClass,
                                },
                                i
                              ),
                            ]
                          )
                        );
                      }
                      return () =>
                        q(
                          un,
                          {
                            name: 'q-transition--fade',
                            appear: !0,
                            onAfterLeave: r,
                          },
                          o
                        );
                    },
                  },
                  Et.__parentApp
                )),
                  (Vi = $n.mount(n));
              }, Be.delay))),
          (n) => {
            if (n === void 0 || Object(n) !== n) {
              Et.hide(t);
              return;
            }
            Et.show({ ...n, group: t });
          }
        );
      },
      hide(e) {
        if (Et.isActive === !0) {
          if (e === void 0) Ln = {};
          else {
            if (Ln[e] === void 0) return;
            {
              delete Ln[e];
              const t = Object.keys(Ln);
              if (t.length !== 0) {
                const n = t[t.length - 1];
                Et.show({ group: n });
                return;
              }
            }
          }
          _n !== null && (clearTimeout(_n), (_n = null)), (Et.isActive = !1);
        }
      },
      setDefaults(e) {
        $t(e) === !0 && Object.assign($d, e);
      },
      install({ $q: e, parentApp: t }) {
        (e.loading = this),
          (Et.__parentApp = t),
          e.config.loading !== void 0 && this.setDefaults(e.config.loading);
      },
    }
  ),
  Er = {};
function Uy(e) {
  Object.assign(Ue, { request: e, exit: e, toggle: e });
}
function Vd() {
  return (
    document.fullscreenElement ||
    document.mozFullScreenElement ||
    document.webkitFullscreenElement ||
    document.msFullscreenElement ||
    null
  );
}
function jd() {
  const e = (Ue.activeEl = Ue.isActive === !1 ? null : Vd());
  x1(e === null || e === document.documentElement ? document.body : e);
}
function Wy() {
  (Ue.isActive = Ue.isActive === !1), jd();
}
function Qu(e, t) {
  try {
    const n = e[t]();
    return n === void 0 ? Promise.resolve() : n;
  } catch (n) {
    return Promise.reject(n);
  }
}
const Ue = fr(
  { isActive: !1, activeEl: null },
  {
    isCapable: !1,
    install({ $q: e }) {
      e.fullscreen = this;
    },
  }
);
(Er.request = [
  'requestFullscreen',
  'msRequestFullscreen',
  'mozRequestFullScreen',
  'webkitRequestFullscreen',
].find((e) => document.documentElement[e] !== void 0)),
  (Ue.isCapable = Er.request !== void 0),
  Ue.isCapable === !1
    ? Uy(() => Promise.reject('Not capable'))
    : (Object.assign(Ue, {
        request(e) {
          const t = e || document.documentElement,
            { activeEl: n } = Ue;
          return t === n
            ? Promise.resolve()
            : (n !== null && t.contains(n) === !0
                ? Ue.exit()
                : Promise.resolve()
              ).finally(() => Qu(t, Er.request));
        },
        exit() {
          return Ue.isActive === !0 ? Qu(document, Er.exit) : Promise.resolve();
        },
        toggle(e) {
          return Ue.isActive === !0 ? Ue.exit() : Ue.request(e);
        },
      }),
      (Er.exit = [
        'exitFullscreen',
        'msExitFullscreen',
        'mozCancelFullScreen',
        'webkitExitFullscreen',
      ].find((e) => document[e])),
      (Ue.isActive = Boolean(Vd())),
      Ue.isActive === !0 && jd(),
      [
        'onfullscreenchange',
        'onmsfullscreenchange',
        'onwebkitfullscreenchange',
      ].forEach((e) => {
        document[e] = Wy;
      }));
function Gy(e, t, n) {
  let r;
  function o() {
    r !== void 0 && (cs.remove(r), (r = void 0));
  }
  return (
    De(() => {
      e.value === !0 && o();
    }),
    {
      removeFromHistory: o,
      addToHistory() {
        (r = { condition: () => n.value === !0, handler: t }), cs.add(r);
      },
    }
  );
}
function Ky() {
  let e;
  return {
    preventBodyScroll(t) {
      t !== e && (e !== void 0 || t === !0) && ((e = t), Ns(t));
    },
  };
}
let mo = 0;
const Qy = {
    standard: 'fixed-full flex-center',
    top: 'fixed-top justify-center',
    bottom: 'fixed-bottom justify-center',
    right: 'fixed-right items-center',
    left: 'fixed-left items-center',
  },
  Xu = {
    standard: ['scale', 'scale'],
    top: ['slide-down', 'slide-up'],
    bottom: ['slide-up', 'slide-down'],
    right: ['slide-left', 'slide-right'],
    left: ['slide-right', 'slide-left'],
  };
var Xy = Se({
    name: 'QDialog',
    inheritAttrs: !1,
    props: {
      ...vd,
      ...wd,
      transitionShow: String,
      transitionHide: String,
      persistent: Boolean,
      autoClose: Boolean,
      allowFocusOutside: Boolean,
      noEscDismiss: Boolean,
      noBackdropDismiss: Boolean,
      noRouteDismiss: Boolean,
      noRefocus: Boolean,
      noFocus: Boolean,
      noShake: Boolean,
      seamless: Boolean,
      maximized: Boolean,
      fullWidth: Boolean,
      fullHeight: Boolean,
      square: Boolean,
      position: {
        type: String,
        default: 'standard',
        validator: (e) =>
          e === 'standard' || ['top', 'bottom', 'left', 'right'].includes(e),
      },
    },
    emits: [...pd, 'shake', 'click', 'escapeKey'],
    setup(e, { slots: t, emit: n, attrs: r }) {
      const o = Ee(),
        {
          proxy: { $q: i },
        } = o,
        s = ae(null),
        l = ae(!1),
        a = ae(!1);
      let u = null,
        c = null,
        h,
        f;
      const m = H(
          () =>
            e.persistent !== !0 && e.noRouteDismiss !== !0 && e.seamless !== !0
        ),
        { preventBodyScroll: P } = Ky(),
        { registerTimeout: A } = Pd(),
        { registerTick: O, removeTick: w } = kd(),
        { transitionProps: g, transitionStyle: E } = Cd(
          e,
          () => Xu[e.position][0],
          () => Xu[e.position][1]
        ),
        {
          showPortal: k,
          hidePortal: S,
          portalIsAccessible: L,
          renderPortal: T,
        } = Ed(o, s, ne, 'dialog'),
        { hide: R } = bd({
          showing: l,
          hideOnRouteChange: m,
          handleShow: re,
          handleHide: se,
          processOnMount: !0,
        }),
        { addToHistory: D, removeFromHistory: z } = Gy(l, R, m),
        j = H(
          () =>
            `q-dialog__inner flex no-pointer-events q-dialog__inner--${
              e.maximized === !0 ? 'maximized' : 'minimized'
            } q-dialog__inner--${e.position} ${Qy[e.position]}` +
            (a.value === !0 ? ' q-dialog__inner--animating' : '') +
            (e.fullWidth === !0 ? ' q-dialog__inner--fullwidth' : '') +
            (e.fullHeight === !0 ? ' q-dialog__inner--fullheight' : '') +
            (e.square === !0 ? ' q-dialog__inner--square' : '')
        ),
        N = H(() => l.value === !0 && e.seamless !== !0),
        Y = H(() => (e.autoClose === !0 ? { onClick: ce } : {})),
        $ = H(() => [
          `q-dialog fullscreen no-pointer-events q-dialog--${
            N.value === !0 ? 'modal' : 'seamless'
          }`,
          r.class,
        ]);
      fe(
        () => e.maximized,
        (G) => {
          l.value === !0 && J(G);
        }
      ),
        fe(N, (G) => {
          P(G), G === !0 ? (Od(Pe), Ad(de)) : (Ls(Pe), Bo(de));
        });
      function re(G) {
        D(),
          (c =
            e.noRefocus === !1 && document.activeElement !== null
              ? document.activeElement
              : null),
          J(e.maximized),
          k(),
          (a.value = !0),
          e.noFocus !== !0
            ? (document.activeElement !== null && document.activeElement.blur(),
              O(V))
            : w(),
          A(() => {
            if (o.proxy.$q.platform.is.ios === !0) {
              if (e.seamless !== !0 && document.activeElement) {
                const { top: te, bottom: Z } =
                    document.activeElement.getBoundingClientRect(),
                  { innerHeight: he } = window,
                  le =
                    window.visualViewport !== void 0
                      ? window.visualViewport.height
                      : he;
                te > 0 &&
                  Z > le / 2 &&
                  (document.scrollingElement.scrollTop = Math.min(
                    document.scrollingElement.scrollHeight - le,
                    Z >= he
                      ? 1 / 0
                      : Math.ceil(
                          document.scrollingElement.scrollTop + Z - le / 2
                        )
                  )),
                  document.activeElement.scrollIntoView();
              }
              (f = !0), s.value.click(), (f = !1);
            }
            k(!0), (a.value = !1), n('show', G);
          }, e.transitionDuration);
      }
      function se(G) {
        w(),
          z(),
          be(!0),
          (a.value = !0),
          S(),
          c !== null &&
            ((
              (G && G.type.indexOf('key') === 0
                ? c.closest('[tabindex]:not([tabindex^="-"])')
                : void 0) || c
            ).focus(),
            (c = null)),
          A(() => {
            S(!0), (a.value = !1), n('hide', G);
          }, e.transitionDuration);
      }
      function V(G) {
        ci(() => {
          let te = s.value;
          te === null ||
            te.contains(document.activeElement) === !0 ||
            ((te =
              (G !== '' ? te.querySelector(G) : null) ||
              te.querySelector(
                '[autofocus][tabindex], [data-autofocus][tabindex]'
              ) ||
              te.querySelector(
                '[autofocus] [tabindex], [data-autofocus] [tabindex]'
              ) ||
              te.querySelector('[autofocus], [data-autofocus]') ||
              te),
            te.focus({ preventScroll: !0 }));
        });
      }
      function ee(G) {
        G && typeof G.focus == 'function'
          ? G.focus({ preventScroll: !0 })
          : V(),
          n('shake');
        const te = s.value;
        te !== null &&
          (te.classList.remove('q-animate--scale'),
          te.classList.add('q-animate--scale'),
          u !== null && clearTimeout(u),
          (u = setTimeout(() => {
            (u = null),
              s.value !== null &&
                (te.classList.remove('q-animate--scale'), V());
          }, 170)));
      }
      function de() {
        e.seamless !== !0 &&
          (e.persistent === !0 || e.noEscDismiss === !0
            ? e.maximized !== !0 && e.noShake !== !0 && ee()
            : (n('escapeKey'), R()));
      }
      function be(G) {
        u !== null && (clearTimeout(u), (u = null)),
          (G === !0 || l.value === !0) &&
            (J(!1), e.seamless !== !0 && (P(!1), Ls(Pe), Bo(de))),
          G !== !0 && (c = null);
      }
      function J(G) {
        G === !0
          ? h !== !0 &&
            (mo < 1 && document.body.classList.add('q-body--dialog'),
            mo++,
            (h = !0))
          : h === !0 &&
            (mo < 2 && document.body.classList.remove('q-body--dialog'),
            mo--,
            (h = !1));
      }
      function ce(G) {
        f !== !0 && (R(G), n('click', G));
      }
      function ve(G) {
        e.persistent !== !0 && e.noBackdropDismiss !== !0
          ? R(G)
          : e.noShake !== !0 && ee(G.relatedTarget);
      }
      function Pe(G) {
        e.allowFocusOutside !== !0 &&
          L.value === !0 &&
          ed(s.value, G.target) !== !0 &&
          V('[tabindex]:not([tabindex="-1"])');
      }
      Object.assign(o.proxy, {
        focus: V,
        shake: ee,
        __updateRefocusTarget(G) {
          c = G || null;
        },
      }),
        De(be);
      const W =
        i.platform.is.ios === !0 || i.platform.is.safari
          ? 'onClick'
          : 'onFocusin';
      function ne() {
        return q(
          'div',
          {
            role: 'dialog',
            'aria-modal': N.value === !0 ? 'true' : 'false',
            ...r,
            class: $.value,
          },
          [
            q(un, { name: 'q-transition--fade', appear: !0 }, () =>
              N.value === !0
                ? q('div', {
                    class: 'q-dialog__backdrop fixed-full',
                    style: E.value,
                    'aria-hidden': 'true',
                    tabindex: -1,
                    [W]: ve,
                  })
                : null
            ),
            q(un, g.value, () =>
              l.value === !0
                ? q(
                    'div',
                    {
                      ref: s,
                      class: j.value,
                      style: E.value,
                      tabindex: -1,
                      ...Y.value,
                    },
                    Ke(t.default)
                  )
                : null
            ),
          ]
        );
      }
      return T;
    },
  }),
  Yy = Se({
    name: 'QCard',
    props: {
      ...Dt,
      tag: { type: String, default: 'div' },
      square: Boolean,
      flat: Boolean,
      bordered: Boolean,
    },
    setup(e, { slots: t }) {
      const {
          proxy: { $q: n },
        } = Ee(),
        r = Nt(e, n),
        o = H(
          () =>
            'q-card' +
            (r.value === !0 ? ' q-card--dark q-dark' : '') +
            (e.bordered === !0 ? ' q-card--bordered' : '') +
            (e.square === !0 ? ' q-card--square no-border-radius' : '') +
            (e.flat === !0 ? ' q-card--flat no-shadow' : '')
        );
      return () => q(e.tag, { class: o.value }, Ke(t.default));
    },
  }),
  wr = Se({
    name: 'QCardSection',
    props: { tag: { type: String, default: 'div' }, horizontal: Boolean },
    setup(e, { slots: t }) {
      const n = H(
        () =>
          `q-card__section q-card__section--${
            e.horizontal === !0 ? 'horiz row no-wrap' : 'vert'
          }`
      );
      return () => q(e.tag, { class: n.value }, Ke(t.default));
    },
  }),
  Jy = Se({
    name: 'QCardActions',
    props: { ...nd, vertical: Boolean },
    setup(e, { slots: t }) {
      const n = rd(e),
        r = H(
          () =>
            `q-card__actions ${n.value} q-card__actions--${
              e.vertical === !0 ? 'vert column' : 'horiz row'
            }`
        );
      return () => q('div', { class: r.value }, Ke(t.default));
    },
  });
const Zy = {
    true: 'inset',
    item: 'item-inset',
    'item-thumbnail': 'item-thumbnail-inset',
  },
  ji = { xs: 2, sm: 4, md: 8, lg: 16, xl: 24 };
var Yu = Se({
  name: 'QSeparator',
  props: {
    ...Dt,
    spaced: [Boolean, String],
    inset: [Boolean, String],
    vertical: Boolean,
    color: String,
    size: String,
  },
  setup(e) {
    const t = Ee(),
      n = Nt(e, t.proxy.$q),
      r = H(() => (e.vertical === !0 ? 'vertical' : 'horizontal')),
      o = H(() => ` q-separator--${r.value}`),
      i = H(() => (e.inset !== !1 ? `${o.value}-${Zy[e.inset]}` : '')),
      s = H(
        () =>
          `q-separator${o.value}${i.value}` +
          (e.color !== void 0 ? ` bg-${e.color}` : '') +
          (n.value === !0 ? ' q-separator--dark' : '')
      ),
      l = H(() => {
        const a = {};
        if (
          (e.size !== void 0 &&
            (a[e.vertical === !0 ? 'width' : 'height'] = e.size),
          e.spaced !== !1)
        ) {
          const u =
              e.spaced === !0
                ? `${ji.md}px`
                : e.spaced in ji
                ? `${ji[e.spaced]}px`
                : e.spaced,
            c = e.vertical === !0 ? ['Left', 'Right'] : ['Top', 'Bottom'];
          a[`margin${c[0]}`] = a[`margin${c[1]}`] = u;
        }
        return a;
      });
    return () =>
      q('hr', { class: s.value, style: l.value, 'aria-orientation': r.value });
  },
});
function e_({ validate: e, resetValidation: t, requiresQForm: n }) {
  const r = Qe($g, !1);
  if (r !== !1) {
    const { props: o, proxy: i } = Ee();
    Object.assign(i, { validate: e, resetValidation: t }),
      fe(
        () => o.disable,
        (s) => {
          s === !0
            ? (typeof t == 'function' && t(), r.unbindComponent(i))
            : r.bindComponent(i);
        }
      ),
      st(() => {
        o.disable !== !0 && r.bindComponent(i);
      }),
      De(() => {
        o.disable !== !0 && r.unbindComponent(i);
      });
  } else n === !0 && console.error('Parent QForm not found on useFormChild()!');
}
const Ju = /^#[0-9a-fA-F]{3}([0-9a-fA-F]{3})?$/,
  Zu = /^#[0-9a-fA-F]{4}([0-9a-fA-F]{4})?$/,
  ec = /^#([0-9a-fA-F]{3}|[0-9a-fA-F]{4}|[0-9a-fA-F]{6}|[0-9a-fA-F]{8})$/,
  go =
    /^rgb\(((0|[1-9][\d]?|1[\d]{0,2}|2[\d]?|2[0-4][\d]|25[0-5]),){2}(0|[1-9][\d]?|1[\d]{0,2}|2[\d]?|2[0-4][\d]|25[0-5])\)$/,
  vo =
    /^rgba\(((0|[1-9][\d]?|1[\d]{0,2}|2[\d]?|2[0-4][\d]|25[0-5]),){2}(0|[1-9][\d]?|1[\d]{0,2}|2[\d]?|2[0-4][\d]|25[0-5]),(0|0\.[0-9]+[1-9]|0\.[1-9]+|1)\)$/,
  Ui = {
    date: (e) => /^-?[\d]+\/[0-1]\d\/[0-3]\d$/.test(e),
    time: (e) => /^([0-1]?\d|2[0-3]):[0-5]\d$/.test(e),
    fulltime: (e) => /^([0-1]?\d|2[0-3]):[0-5]\d:[0-5]\d$/.test(e),
    timeOrFulltime: (e) => /^([0-1]?\d|2[0-3]):[0-5]\d(:[0-5]\d)?$/.test(e),
    email: (e) =>
      /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
        e
      ),
    hexColor: (e) => Ju.test(e),
    hexaColor: (e) => Zu.test(e),
    hexOrHexaColor: (e) => ec.test(e),
    rgbColor: (e) => go.test(e),
    rgbaColor: (e) => vo.test(e),
    rgbOrRgbaColor: (e) => go.test(e) || vo.test(e),
    hexOrRgbColor: (e) => Ju.test(e) || go.test(e),
    hexaOrRgbaColor: (e) => Zu.test(e) || vo.test(e),
    anyColor: (e) => ec.test(e) || go.test(e) || vo.test(e),
  },
  t_ = [!0, !1, 'ondemand'],
  n_ = {
    modelValue: {},
    error: { type: Boolean, default: null },
    errorMessage: String,
    noErrorIcon: Boolean,
    rules: Array,
    reactiveRules: Boolean,
    lazyRules: { type: [Boolean, String], validator: (e) => t_.includes(e) },
  };
function r_(e, t) {
  const { props: n, proxy: r } = Ee(),
    o = ae(!1),
    i = ae(null),
    s = ae(null);
  e_({ validate: P, resetValidation: m });
  let l = 0,
    a;
  const u = H(
      () => n.rules !== void 0 && n.rules !== null && n.rules.length > 0
    ),
    c = H(() => n.disable !== !0 && u.value === !0),
    h = H(() => n.error === !0 || o.value === !0),
    f = H(() =>
      typeof n.errorMessage == 'string' && n.errorMessage.length > 0
        ? n.errorMessage
        : i.value
    );
  fe(
    () => n.modelValue,
    () => {
      A();
    }
  ),
    fe(
      () => n.reactiveRules,
      (w) => {
        w === !0
          ? a === void 0 &&
            (a = fe(
              () => n.rules,
              () => {
                A(!0);
              }
            ))
          : a !== void 0 && (a(), (a = void 0));
      },
      { immediate: !0 }
    ),
    fe(e, (w) => {
      w === !0
        ? s.value === null && (s.value = !1)
        : s.value === !1 &&
          ((s.value = !0),
          c.value === !0 &&
            n.lazyRules !== 'ondemand' &&
            t.value === !1 &&
            O());
    });
  function m() {
    l++,
      (t.value = !1),
      (s.value = null),
      (o.value = !1),
      (i.value = null),
      O.cancel();
  }
  function P(w = n.modelValue) {
    if (c.value !== !0) return !0;
    const g = ++l,
      E =
        t.value !== !0
          ? () => {
              s.value = !0;
            }
          : () => {},
      k = (L, T) => {
        L === !0 && E(), (o.value = L), (i.value = T || null), (t.value = !1);
      },
      S = [];
    for (let L = 0; L < n.rules.length; L++) {
      const T = n.rules[L];
      let R;
      if (
        (typeof T == 'function'
          ? (R = T(w, Ui))
          : typeof T == 'string' && Ui[T] !== void 0 && (R = Ui[T](w)),
        R === !1 || typeof R == 'string')
      )
        return k(!0, R), !1;
      R !== !0 && R !== void 0 && S.push(R);
    }
    return S.length === 0
      ? (k(!1), !0)
      : ((t.value = !0),
        Promise.all(S).then(
          (L) => {
            if (L === void 0 || Array.isArray(L) === !1 || L.length === 0)
              return g === l && k(!1), !0;
            const T = L.find((R) => R === !1 || typeof R == 'string');
            return g === l && k(T !== void 0, T), T === void 0;
          },
          (L) => (g === l && (console.error(L), k(!0)), !1)
        ));
  }
  function A(w) {
    c.value === !0 &&
      n.lazyRules !== 'ondemand' &&
      (s.value === !0 || (n.lazyRules !== !0 && w !== !0)) &&
      O();
  }
  const O = uf(P, 0);
  return (
    De(() => {
      a !== void 0 && a(), O.cancel();
    }),
    Object.assign(r, { resetValidation: m, validate: P }),
    cr(r, 'hasError', () => h.value),
    {
      isDirtyModel: s,
      hasRules: u,
      hasError: h,
      errorMessage: f,
      validate: P,
      resetValidation: m,
    }
  );
}
const tc = /^on[A-Z]/;
function o_(e, t) {
  const n = { listeners: ae({}), attributes: ae({}) };
  function r() {
    const o = {},
      i = {};
    for (const s in e)
      s !== 'class' && s !== 'style' && tc.test(s) === !1 && (o[s] = e[s]);
    for (const s in t.props) tc.test(s) === !0 && (i[s] = t.props[s]);
    (n.attributes.value = o), (n.listeners.value = i);
  }
  return $c(r), r(), n;
}
let Wi,
  po = 0;
const Ve = new Array(256);
for (let e = 0; e < 256; e++) Ve[e] = (e + 256).toString(16).substring(1);
const i_ = (() => {
    const e =
      typeof crypto != 'undefined'
        ? crypto
        : typeof window != 'undefined'
        ? window.crypto || window.msCrypto
        : void 0;
    if (e !== void 0) {
      if (e.randomBytes !== void 0) return e.randomBytes;
      if (e.getRandomValues !== void 0)
        return (t) => {
          const n = new Uint8Array(t);
          return e.getRandomValues(n), n;
        };
    }
    return (t) => {
      const n = [];
      for (let r = t; r > 0; r--) n.push(Math.floor(Math.random() * 256));
      return n;
    };
  })(),
  nc = 4096;
function s_() {
  (Wi === void 0 || po + 16 > nc) && ((po = 0), (Wi = i_(nc)));
  const e = Array.prototype.slice.call(Wi, po, (po += 16));
  return (
    (e[6] = (e[6] & 15) | 64),
    (e[8] = (e[8] & 63) | 128),
    Ve[e[0]] +
      Ve[e[1]] +
      Ve[e[2]] +
      Ve[e[3]] +
      '-' +
      Ve[e[4]] +
      Ve[e[5]] +
      '-' +
      Ve[e[6]] +
      Ve[e[7]] +
      '-' +
      Ve[e[8]] +
      Ve[e[9]] +
      '-' +
      Ve[e[10]] +
      Ve[e[11]] +
      Ve[e[12]] +
      Ve[e[13]] +
      Ve[e[14]] +
      Ve[e[15]]
  );
}
function Bs(e) {
  return e === void 0 ? `f_${s_()}` : e;
}
function zs(e) {
  return e != null && ('' + e).length > 0;
}
const l_ = {
    ...Dt,
    ...n_,
    label: String,
    stackLabel: Boolean,
    hint: String,
    hideHint: Boolean,
    prefix: String,
    suffix: String,
    labelColor: String,
    color: String,
    bgColor: String,
    filled: Boolean,
    outlined: Boolean,
    borderless: Boolean,
    standout: [Boolean, String],
    square: Boolean,
    loading: Boolean,
    labelSlot: Boolean,
    bottomSlots: Boolean,
    hideBottomSpace: Boolean,
    rounded: Boolean,
    dense: Boolean,
    itemAligned: Boolean,
    counter: Boolean,
    clearable: Boolean,
    clearIcon: String,
    disable: Boolean,
    readonly: Boolean,
    autofocus: Boolean,
    for: String,
    maxlength: [Number, String],
  },
  a_ = [
    'update:modelValue',
    'clear',
    'focus',
    'blur',
    'popupShow',
    'popupHide',
  ];
function u_() {
  const { props: e, attrs: t, proxy: n, vnode: r } = Ee();
  return {
    isDark: Nt(e, n.$q),
    editable: H(() => e.disable !== !0 && e.readonly !== !0),
    innerLoading: ae(!1),
    focused: ae(!1),
    hasPopupOpen: !1,
    splitAttrs: o_(t, r),
    targetUid: ae(Bs(e.for)),
    rootRef: ae(null),
    targetRef: ae(null),
    controlRef: ae(null),
  };
}
function c_(e) {
  const { props: t, emit: n, slots: r, attrs: o, proxy: i } = Ee(),
    { $q: s } = i;
  let l = null;
  e.hasValue === void 0 && (e.hasValue = H(() => zs(t.modelValue))),
    e.emitValue === void 0 &&
      (e.emitValue = (V) => {
        n('update:modelValue', V);
      }),
    e.controlEvents === void 0 &&
      (e.controlEvents = { onFocusin: D, onFocusout: z }),
    Object.assign(e, {
      clearValue: j,
      onControlFocusin: D,
      onControlFocusout: z,
      focus: T,
    }),
    e.computedCounter === void 0 &&
      (e.computedCounter = H(() => {
        if (t.counter !== !1) {
          const V =
              typeof t.modelValue == 'string' || typeof t.modelValue == 'number'
                ? ('' + t.modelValue).length
                : Array.isArray(t.modelValue) === !0
                ? t.modelValue.length
                : 0,
            ee = t.maxlength !== void 0 ? t.maxlength : t.maxValues;
          return V + (ee !== void 0 ? ' / ' + ee : '');
        }
      }));
  const {
      isDirtyModel: a,
      hasRules: u,
      hasError: c,
      errorMessage: h,
      resetValidation: f,
    } = r_(e.focused, e.innerLoading),
    m =
      e.floatingLabel !== void 0
        ? H(
            () =>
              t.stackLabel === !0 ||
              e.focused.value === !0 ||
              e.floatingLabel.value === !0
          )
        : H(
            () =>
              t.stackLabel === !0 ||
              e.focused.value === !0 ||
              e.hasValue.value === !0
          ),
    P = H(
      () =>
        t.bottomSlots === !0 ||
        t.hint !== void 0 ||
        u.value === !0 ||
        t.counter === !0 ||
        t.error !== null
    ),
    A = H(() =>
      t.filled === !0
        ? 'filled'
        : t.outlined === !0
        ? 'outlined'
        : t.borderless === !0
        ? 'borderless'
        : t.standout
        ? 'standout'
        : 'standard'
    ),
    O = H(
      () =>
        `q-field row no-wrap items-start q-field--${A.value}` +
        (e.fieldClass !== void 0 ? ` ${e.fieldClass.value}` : '') +
        (t.rounded === !0 ? ' q-field--rounded' : '') +
        (t.square === !0 ? ' q-field--square' : '') +
        (m.value === !0 ? ' q-field--float' : '') +
        (g.value === !0 ? ' q-field--labeled' : '') +
        (t.dense === !0 ? ' q-field--dense' : '') +
        (t.itemAligned === !0 ? ' q-field--item-aligned q-item-type' : '') +
        (e.isDark.value === !0 ? ' q-field--dark' : '') +
        (e.getControl === void 0 ? ' q-field--auto-height' : '') +
        (e.focused.value === !0 ? ' q-field--focused' : '') +
        (c.value === !0 ? ' q-field--error' : '') +
        (c.value === !0 || e.focused.value === !0
          ? ' q-field--highlighted'
          : '') +
        (t.hideBottomSpace !== !0 && P.value === !0
          ? ' q-field--with-bottom'
          : '') +
        (t.disable === !0
          ? ' q-field--disabled'
          : t.readonly === !0
          ? ' q-field--readonly'
          : '')
    ),
    w = H(
      () =>
        'q-field__control relative-position row no-wrap' +
        (t.bgColor !== void 0 ? ` bg-${t.bgColor}` : '') +
        (c.value === !0
          ? ' text-negative'
          : typeof t.standout == 'string' &&
            t.standout.length > 0 &&
            e.focused.value === !0
          ? ` ${t.standout}`
          : t.color !== void 0
          ? ` text-${t.color}`
          : '')
    ),
    g = H(() => t.labelSlot === !0 || t.label !== void 0),
    E = H(
      () =>
        'q-field__label no-pointer-events absolute ellipsis' +
        (t.labelColor !== void 0 && c.value !== !0
          ? ` text-${t.labelColor}`
          : '')
    ),
    k = H(() => ({
      id: e.targetUid.value,
      editable: e.editable.value,
      focused: e.focused.value,
      floatingLabel: m.value,
      modelValue: t.modelValue,
      emitValue: e.emitValue,
    })),
    S = H(() => {
      const V = { for: e.targetUid.value };
      return (
        t.disable === !0
          ? (V['aria-disabled'] = 'true')
          : t.readonly === !0 && (V['aria-readonly'] = 'true'),
        V
      );
    });
  fe(
    () => t.for,
    (V) => {
      e.targetUid.value = Bs(V);
    }
  );
  function L() {
    const V = document.activeElement;
    let ee = e.targetRef !== void 0 && e.targetRef.value;
    ee &&
      (V === null || V.id !== e.targetUid.value) &&
      (ee.hasAttribute('tabindex') === !0 ||
        (ee = ee.querySelector('[tabindex]')),
      ee && ee !== V && ee.focus({ preventScroll: !0 }));
  }
  function T() {
    ci(L);
  }
  function R() {
    k1(L);
    const V = document.activeElement;
    V !== null && e.rootRef.value.contains(V) && V.blur();
  }
  function D(V) {
    l !== null && (clearTimeout(l), (l = null)),
      e.editable.value === !0 &&
        e.focused.value === !1 &&
        ((e.focused.value = !0), n('focus', V));
  }
  function z(V, ee) {
    l !== null && clearTimeout(l),
      (l = setTimeout(() => {
        (l = null),
          !(
            document.hasFocus() === !0 &&
            (e.hasPopupOpen === !0 ||
              e.controlRef === void 0 ||
              e.controlRef.value === null ||
              e.controlRef.value.contains(document.activeElement) !== !1)
          ) &&
            (e.focused.value === !0 && ((e.focused.value = !1), n('blur', V)),
            ee !== void 0 && ee());
      }));
  }
  function j(V) {
    at(V),
      s.platform.is.mobile !== !0
        ? (
            (e.targetRef !== void 0 && e.targetRef.value) ||
            e.rootRef.value
          ).focus()
        : e.rootRef.value.contains(document.activeElement) === !0 &&
          document.activeElement.blur(),
      t.type === 'file' && (e.inputRef.value.value = null),
      n('update:modelValue', null),
      n('clear', t.modelValue),
      Ge(() => {
        f(), s.platform.is.mobile !== !0 && (a.value = !1);
      });
  }
  function N() {
    const V = [];
    return (
      r.prepend !== void 0 &&
        V.push(
          q(
            'div',
            {
              class:
                'q-field__prepend q-field__marginal row no-wrap items-center',
              key: 'prepend',
              onClick: It,
            },
            r.prepend()
          )
        ),
      V.push(
        q(
          'div',
          {
            class:
              'q-field__control-container col relative-position row no-wrap q-anchor--skip',
          },
          Y()
        )
      ),
      c.value === !0 &&
        t.noErrorIcon === !1 &&
        V.push(
          re('error', [
            q(fn, { name: s.iconSet.field.error, color: 'negative' }),
          ])
        ),
      t.loading === !0 || e.innerLoading.value === !0
        ? V.push(
            re(
              'inner-loading-append',
              r.loading !== void 0 ? r.loading() : [q(Wr, { color: t.color })]
            )
          )
        : t.clearable === !0 &&
          e.hasValue.value === !0 &&
          e.editable.value === !0 &&
          V.push(
            re('inner-clearable-append', [
              q(fn, {
                class: 'q-field__focusable-action',
                tag: 'button',
                name: t.clearIcon || s.iconSet.field.clear,
                tabindex: 0,
                type: 'button',
                'aria-hidden': null,
                role: null,
                onClick: j,
              }),
            ])
          ),
      r.append !== void 0 &&
        V.push(
          q(
            'div',
            {
              class:
                'q-field__append q-field__marginal row no-wrap items-center',
              key: 'append',
              onClick: It,
            },
            r.append()
          )
        ),
      e.getInnerAppend !== void 0 &&
        V.push(re('inner-append', e.getInnerAppend())),
      e.getControlChild !== void 0 && V.push(e.getControlChild()),
      V
    );
  }
  function Y() {
    const V = [];
    return (
      t.prefix !== void 0 &&
        t.prefix !== null &&
        V.push(
          q(
            'div',
            { class: 'q-field__prefix no-pointer-events row items-center' },
            t.prefix
          )
        ),
      e.getShadowControl !== void 0 &&
        e.hasShadow.value === !0 &&
        V.push(e.getShadowControl()),
      e.getControl !== void 0
        ? V.push(e.getControl())
        : r.rawControl !== void 0
        ? V.push(r.rawControl())
        : r.control !== void 0 &&
          V.push(
            q(
              'div',
              {
                ref: e.targetRef,
                class: 'q-field__native row',
                tabindex: -1,
                ...e.splitAttrs.attributes.value,
                'data-autofocus': t.autofocus === !0 || void 0,
              },
              r.control(k.value)
            )
          ),
      g.value === !0 &&
        V.push(q('div', { class: E.value }, Ke(r.label, t.label))),
      t.suffix !== void 0 &&
        t.suffix !== null &&
        V.push(
          q(
            'div',
            { class: 'q-field__suffix no-pointer-events row items-center' },
            t.suffix
          )
        ),
      V.concat(Ke(r.default))
    );
  }
  function $() {
    let V, ee;
    c.value === !0
      ? h.value !== null
        ? ((V = [q('div', { role: 'alert' }, h.value)]),
          (ee = `q--slot-error-${h.value}`))
        : ((V = Ke(r.error)), (ee = 'q--slot-error'))
      : (t.hideHint !== !0 || e.focused.value === !0) &&
        (t.hint !== void 0
          ? ((V = [q('div', t.hint)]), (ee = `q--slot-hint-${t.hint}`))
          : ((V = Ke(r.hint)), (ee = 'q--slot-hint')));
    const de = t.counter === !0 || r.counter !== void 0;
    if (t.hideBottomSpace === !0 && de === !1 && V === void 0) return;
    const be = q('div', { key: ee, class: 'q-field__messages col' }, V);
    return q(
      'div',
      {
        class:
          'q-field__bottom row items-start q-field__bottom--' +
          (t.hideBottomSpace !== !0 ? 'animated' : 'stale'),
        onClick: It,
      },
      [
        t.hideBottomSpace === !0
          ? be
          : q(un, { name: 'q-transition--field-message' }, () => be),
        de === !0
          ? q(
              'div',
              { class: 'q-field__counter' },
              r.counter !== void 0 ? r.counter() : e.computedCounter.value
            )
          : null,
      ]
    );
  }
  function re(V, ee) {
    return ee === null
      ? null
      : q(
          'div',
          {
            key: V,
            class:
              'q-field__append q-field__marginal row no-wrap items-center q-anchor--skip',
          },
          ee
        );
  }
  let se = !1;
  return (
    Xr(() => {
      se = !0;
    }),
    il(() => {
      se === !0 && t.autofocus === !0 && i.focus();
    }),
    st(() => {
      Lt.value === !0 && t.for === void 0 && (e.targetUid.value = Bs()),
        t.autofocus === !0 && i.focus();
    }),
    De(() => {
      l !== null && clearTimeout(l);
    }),
    Object.assign(i, { focus: T, blur: R }),
    function () {
      const ee =
        e.getControl === void 0 && r.control === void 0
          ? {
              ...e.splitAttrs.attributes.value,
              'data-autofocus': t.autofocus === !0 || void 0,
              ...S.value,
            }
          : S.value;
      return q(
        'label',
        { ref: e.rootRef, class: [O.value, o.class], style: o.style, ...ee },
        [
          r.before !== void 0
            ? q(
                'div',
                {
                  class:
                    'q-field__before q-field__marginal row no-wrap items-center',
                  onClick: It,
                },
                r.before()
              )
            : null,
          q(
            'div',
            { class: 'q-field__inner relative-position col self-stretch' },
            [
              q(
                'div',
                {
                  ref: e.controlRef,
                  class: w.value,
                  tabindex: -1,
                  ...e.controlEvents,
                },
                N()
              ),
              P.value === !0 ? $() : null,
            ]
          ),
          r.after !== void 0
            ? q(
                'div',
                {
                  class:
                    'q-field__after q-field__marginal row no-wrap items-center',
                  onClick: It,
                },
                r.after()
              )
            : null,
        ]
      );
    }
  );
}
const rc = {
    date: '####/##/##',
    datetime: '####/##/## ##:##',
    time: '##:##',
    fulltime: '##:##:##',
    phone: '(###) ### - ####',
    card: '#### #### #### ####',
  },
  jo = {
    '#': { pattern: '[\\d]', negate: '[^\\d]' },
    S: { pattern: '[a-zA-Z]', negate: '[^a-zA-Z]' },
    N: { pattern: '[0-9a-zA-Z]', negate: '[^0-9a-zA-Z]' },
    A: {
      pattern: '[a-zA-Z]',
      negate: '[^a-zA-Z]',
      transform: (e) => e.toLocaleUpperCase(),
    },
    a: {
      pattern: '[a-zA-Z]',
      negate: '[^a-zA-Z]',
      transform: (e) => e.toLocaleLowerCase(),
    },
    X: {
      pattern: '[0-9a-zA-Z]',
      negate: '[^0-9a-zA-Z]',
      transform: (e) => e.toLocaleUpperCase(),
    },
    x: {
      pattern: '[0-9a-zA-Z]',
      negate: '[^0-9a-zA-Z]',
      transform: (e) => e.toLocaleLowerCase(),
    },
  },
  Ud = Object.keys(jo);
Ud.forEach((e) => {
  jo[e].regex = new RegExp(jo[e].pattern);
});
const f_ = new RegExp(
    '\\\\([^.*+?^${}()|([\\]])|([.*+?^${}()|[\\]])|([' + Ud.join('') + '])|(.)',
    'g'
  ),
  oc = /[.*+?^${}()|[\]\\]/g,
  He = String.fromCharCode(1),
  d_ = {
    mask: String,
    reverseFillMask: Boolean,
    fillMask: [Boolean, String],
    unmaskedValue: Boolean,
  };
function h_(e, t, n, r) {
  let o, i, s, l;
  const a = ae(null),
    u = ae(h());
  function c() {
    return (
      e.autogrow === !0 ||
      ['textarea', 'text', 'search', 'url', 'tel', 'password'].includes(e.type)
    );
  }
  fe(() => e.type + e.autogrow, m),
    fe(
      () => e.mask,
      (L) => {
        if (L !== void 0) P(u.value, !0);
        else {
          const T = k(u.value);
          m(), e.modelValue !== T && t('update:modelValue', T);
        }
      }
    ),
    fe(
      () => e.fillMask + e.reverseFillMask,
      () => {
        a.value === !0 && P(u.value, !0);
      }
    ),
    fe(
      () => e.unmaskedValue,
      () => {
        a.value === !0 && P(u.value);
      }
    );
  function h() {
    if ((m(), a.value === !0)) {
      const L = g(k(e.modelValue));
      return e.fillMask !== !1 ? S(L) : L;
    }
    return e.modelValue;
  }
  function f(L) {
    if (L < o.length) return o.slice(-L);
    let T = '',
      R = o;
    const D = R.indexOf(He);
    if (D > -1) {
      for (let z = L - R.length; z > 0; z--) T += He;
      R = R.slice(0, D) + T + R.slice(D);
    }
    return R;
  }
  function m() {
    if (
      ((a.value = e.mask !== void 0 && e.mask.length > 0 && c()),
      a.value === !1)
    ) {
      (l = void 0), (o = ''), (i = '');
      return;
    }
    const L = rc[e.mask] === void 0 ? e.mask : rc[e.mask],
      T =
        typeof e.fillMask == 'string' && e.fillMask.length > 0
          ? e.fillMask.slice(0, 1)
          : '_',
      R = T.replace(oc, '\\$&'),
      D = [],
      z = [],
      j = [];
    let N = e.reverseFillMask === !0,
      Y = '',
      $ = '';
    L.replace(f_, (ee, de, be, J, ce) => {
      if (J !== void 0) {
        const ve = jo[J];
        j.push(ve),
          ($ = ve.negate),
          N === !0 &&
            (z.push(
              '(?:' +
                $ +
                '+)?(' +
                ve.pattern +
                '+)?(?:' +
                $ +
                '+)?(' +
                ve.pattern +
                '+)?'
            ),
            (N = !1)),
          z.push('(?:' + $ + '+)?(' + ve.pattern + ')?');
      } else if (be !== void 0)
        (Y = '\\' + (be === '\\' ? '' : be)),
          j.push(be),
          D.push('([^' + Y + ']+)?' + Y + '?');
      else {
        const ve = de !== void 0 ? de : ce;
        (Y = ve === '\\' ? '\\\\\\\\' : ve.replace(oc, '\\\\$&')),
          j.push(ve),
          D.push('([^' + Y + ']+)?' + Y + '?');
      }
    });
    const re = new RegExp(
        '^' +
          D.join('') +
          '(' +
          (Y === '' ? '.' : '[^' + Y + ']') +
          '+)?' +
          (Y === '' ? '' : '[' + Y + ']*') +
          '$'
      ),
      se = z.length - 1,
      V = z.map((ee, de) =>
        de === 0 && e.reverseFillMask === !0
          ? new RegExp('^' + R + '*' + ee)
          : de === se
          ? new RegExp(
              '^' +
                ee +
                '(' +
                ($ === '' ? '.' : $) +
                '+)?' +
                (e.reverseFillMask === !0 ? '$' : R + '*')
            )
          : new RegExp('^' + ee)
      );
    (s = j),
      (l = (ee) => {
        const de = re.exec(
          e.reverseFillMask === !0 ? ee : ee.slice(0, j.length)
        );
        de !== null && (ee = de.slice(1).join(''));
        const be = [],
          J = V.length;
        for (let ce = 0, ve = ee; ce < J; ce++) {
          const Pe = V[ce].exec(ve);
          if (Pe === null) break;
          (ve = ve.slice(Pe.shift().length)), be.push(...Pe);
        }
        return be.length > 0 ? be.join('') : ee;
      }),
      (o = j.map((ee) => (typeof ee == 'string' ? ee : He)).join('')),
      (i = o.split(He).join(T));
  }
  function P(L, T, R) {
    const D = r.value,
      z = D.selectionEnd,
      j = D.value.length - z,
      N = k(L);
    T === !0 && m();
    const Y = g(N),
      $ = e.fillMask !== !1 ? S(Y) : Y,
      re = u.value !== $;
    D.value !== $ && (D.value = $),
      re === !0 && (u.value = $),
      document.activeElement === D &&
        Ge(() => {
          if ($ === i) {
            const V = e.reverseFillMask === !0 ? i.length : 0;
            D.setSelectionRange(V, V, 'forward');
            return;
          }
          if (R === 'insertFromPaste' && e.reverseFillMask !== !0) {
            const V = z - 1;
            O.right(D, V, V);
            return;
          }
          if (
            ['deleteContentBackward', 'deleteContentForward'].indexOf(R) > -1
          ) {
            const V =
              e.reverseFillMask === !0
                ? z === 0
                  ? $.length > Y.length
                    ? 1
                    : 0
                  : Math.max(
                      0,
                      $.length - ($ === i ? 0 : Math.min(Y.length, j) + 1)
                    ) + 1
                : z;
            D.setSelectionRange(V, V, 'forward');
            return;
          }
          if (e.reverseFillMask === !0)
            if (re === !0) {
              const V = Math.max(
                0,
                $.length - ($ === i ? 0 : Math.min(Y.length, j + 1))
              );
              V === 1 && z === 1
                ? D.setSelectionRange(V, V, 'forward')
                : O.rightReverse(D, V, V);
            } else {
              const V = $.length - j;
              D.setSelectionRange(V, V, 'backward');
            }
          else if (re === !0) {
            const V = Math.max(0, o.indexOf(He), Math.min(Y.length, z) - 1);
            O.right(D, V, V);
          } else {
            const V = z - 1;
            O.right(D, V, V);
          }
        });
    const se = e.unmaskedValue === !0 ? k($) : $;
    String(e.modelValue) !== se && n(se, !0);
  }
  function A(L, T, R) {
    const D = g(k(L.value));
    (T = Math.max(0, o.indexOf(He), Math.min(D.length, T))),
      L.setSelectionRange(T, R, 'forward');
  }
  const O = {
    left(L, T, R, D) {
      const z = o.slice(T - 1).indexOf(He) === -1;
      let j = Math.max(0, T - 1);
      for (; j >= 0; j--)
        if (o[j] === He) {
          (T = j), z === !0 && T++;
          break;
        }
      if (j < 0 && o[T] !== void 0 && o[T] !== He) return O.right(L, 0, 0);
      T >= 0 && L.setSelectionRange(T, D === !0 ? R : T, 'backward');
    },
    right(L, T, R, D) {
      const z = L.value.length;
      let j = Math.min(z, R + 1);
      for (; j <= z; j++)
        if (o[j] === He) {
          R = j;
          break;
        } else o[j - 1] === He && (R = j);
      if (j > z && o[R - 1] !== void 0 && o[R - 1] !== He)
        return O.left(L, z, z);
      L.setSelectionRange(D ? T : R, R, 'forward');
    },
    leftReverse(L, T, R, D) {
      const z = f(L.value.length);
      let j = Math.max(0, T - 1);
      for (; j >= 0; j--)
        if (z[j - 1] === He) {
          T = j;
          break;
        } else if (z[j] === He && ((T = j), j === 0)) break;
      if (j < 0 && z[T] !== void 0 && z[T] !== He)
        return O.rightReverse(L, 0, 0);
      T >= 0 && L.setSelectionRange(T, D === !0 ? R : T, 'backward');
    },
    rightReverse(L, T, R, D) {
      const z = L.value.length,
        j = f(z),
        N = j.slice(0, R + 1).indexOf(He) === -1;
      let Y = Math.min(z, R + 1);
      for (; Y <= z; Y++)
        if (j[Y - 1] === He) {
          (R = Y), R > 0 && N === !0 && R--;
          break;
        }
      if (Y > z && j[R - 1] !== void 0 && j[R - 1] !== He)
        return O.leftReverse(L, z, z);
      L.setSelectionRange(D === !0 ? T : R, R, 'forward');
    },
  };
  function w(L) {
    if ((t('keydown', L), df(L) === !0)) return;
    const T = r.value,
      R = T.selectionStart,
      D = T.selectionEnd;
    if (L.keyCode === 37 || L.keyCode === 39) {
      const z =
        O[
          (L.keyCode === 39 ? 'right' : 'left') +
            (e.reverseFillMask === !0 ? 'Reverse' : '')
        ];
      L.preventDefault(), z(T, R, D, L.shiftKey);
    } else
      L.keyCode === 8 && e.reverseFillMask !== !0 && R === D
        ? O.left(T, R, D, !0)
        : L.keyCode === 46 &&
          e.reverseFillMask === !0 &&
          R === D &&
          O.rightReverse(T, R, D, !0);
  }
  function g(L) {
    if (L == null || L === '') return '';
    if (e.reverseFillMask === !0) return E(L);
    const T = s;
    let R = 0,
      D = '';
    for (let z = 0; z < T.length; z++) {
      const j = L[R],
        N = T[z];
      if (typeof N == 'string') (D += N), j === N && R++;
      else if (j !== void 0 && N.regex.test(j))
        (D += N.transform !== void 0 ? N.transform(j) : j), R++;
      else return D;
    }
    return D;
  }
  function E(L) {
    const T = s,
      R = o.indexOf(He);
    let D = L.length - 1,
      z = '';
    for (let j = T.length - 1; j >= 0 && D > -1; j--) {
      const N = T[j];
      let Y = L[D];
      if (typeof N == 'string') (z = N + z), Y === N && D--;
      else if (Y !== void 0 && N.regex.test(Y))
        do
          (z = (N.transform !== void 0 ? N.transform(Y) : Y) + z),
            D--,
            (Y = L[D]);
        while (R === j && Y !== void 0 && N.regex.test(Y));
      else return z;
    }
    return z;
  }
  function k(L) {
    return typeof L != 'string' || l === void 0
      ? typeof L == 'number'
        ? l('' + L)
        : L
      : l(L);
  }
  function S(L) {
    return i.length - L.length <= 0
      ? L
      : e.reverseFillMask === !0 && L.length > 0
      ? i.slice(0, -L.length) + L
      : L + i.slice(L.length);
  }
  return {
    innerValue: u,
    hasMask: a,
    moveCursorForPaste: A,
    updateMaskValue: P,
    onMaskedKeydown: w,
  };
}
function m_(e, t) {
  function n() {
    const r = e.modelValue;
    try {
      const o =
        'DataTransfer' in window
          ? new DataTransfer()
          : 'ClipboardEvent' in window
          ? new ClipboardEvent('').clipboardData
          : void 0;
      return (
        Object(r) === r &&
          ('length' in r ? Array.from(r) : [r]).forEach((i) => {
            o.items.add(i);
          }),
        { files: o.files }
      );
    } catch {
      return { files: void 0 };
    }
  }
  return H(
    t === !0
      ? () => {
          if (e.type === 'file') return n();
        }
      : n
  );
}
const g_ =
    /[\u3000-\u303f\u3040-\u309f\u30a0-\u30ff\uff00-\uff9f\u4e00-\u9faf\u3400-\u4dbf]/,
  v_ =
    /[\u4e00-\u9fff\u3400-\u4dbf\u{20000}-\u{2a6df}\u{2a700}-\u{2b73f}\u{2b740}-\u{2b81f}\u{2b820}-\u{2ceaf}\uf900-\ufaff\u3300-\u33ff\ufe30-\ufe4f\uf900-\ufaff\u{2f800}-\u{2fa1f}]/u,
  p_ = /[\u3131-\u314e\u314f-\u3163\uac00-\ud7a3]/,
  b_ = /[a-z0-9_ -]$/i;
function y_(e) {
  return function (n) {
    if (n.type === 'compositionend' || n.type === 'change') {
      if (n.target.qComposing !== !0) return;
      (n.target.qComposing = !1), e(n);
    } else
      n.type === 'compositionupdate' &&
        n.target.qComposing !== !0 &&
        typeof n.data == 'string' &&
        (Te.is.firefox === !0
          ? b_.test(n.data) === !1
          : g_.test(n.data) === !0 ||
            v_.test(n.data) === !0 ||
            p_.test(n.data) === !0) === !0 &&
        (n.target.qComposing = !0);
  };
}
var __ = Se({
  name: 'QInput',
  inheritAttrs: !1,
  props: {
    ...l_,
    ...d_,
    ...yl,
    modelValue: { required: !1 },
    shadowText: String,
    type: { type: String, default: 'text' },
    debounce: [String, Number],
    autogrow: Boolean,
    inputClass: [Array, String, Object],
    inputStyle: [Array, String, Object],
  },
  emits: [...a_, 'paste', 'change', 'keydown', 'animationend'],
  setup(e, { emit: t, attrs: n }) {
    const { proxy: r } = Ee(),
      { $q: o } = r,
      i = {};
    let s = NaN,
      l,
      a,
      u = null,
      c;
    const h = ae(null),
      f = p1(e),
      {
        innerValue: m,
        hasMask: P,
        moveCursorForPaste: A,
        updateMaskValue: O,
        onMaskedKeydown: w,
      } = h_(e, t, re, h),
      g = m_(e, !0),
      E = H(() => zs(m.value)),
      k = y_(Y),
      S = u_(),
      L = H(() => e.type === 'textarea' || e.autogrow === !0),
      T = H(
        () =>
          L.value === !0 ||
          ['text', 'search', 'url', 'tel', 'password'].includes(e.type)
      ),
      R = H(() => {
        const J = {
          ...S.splitAttrs.listeners.value,
          onInput: Y,
          onPaste: N,
          onChange: V,
          onBlur: ee,
          onFocus: Ro,
        };
        return (
          (J.onCompositionstart =
            J.onCompositionupdate =
            J.onCompositionend =
              k),
          P.value === !0 && (J.onKeydown = w),
          e.autogrow === !0 && (J.onAnimationend = $),
          J
        );
      }),
      D = H(() => {
        const J = {
          tabindex: 0,
          'data-autofocus': e.autofocus === !0 || void 0,
          rows: e.type === 'textarea' ? 6 : void 0,
          'aria-label': e.label,
          name: f.value,
          ...S.splitAttrs.attributes.value,
          id: S.targetUid.value,
          maxlength: e.maxlength,
          disabled: e.disable === !0,
          readonly: e.readonly === !0,
        };
        return (
          L.value === !1 && (J.type = e.type),
          e.autogrow === !0 && (J.rows = 1),
          J
        );
      });
    fe(
      () => e.type,
      () => {
        h.value && (h.value.value = e.modelValue);
      }
    ),
      fe(
        () => e.modelValue,
        (J) => {
          if (P.value === !0) {
            if (a === !0 && ((a = !1), String(J) === s)) return;
            O(J);
          } else
            m.value !== J &&
              ((m.value = J),
              e.type === 'number' &&
                i.hasOwnProperty('value') === !0 &&
                (l === !0 ? (l = !1) : delete i.value));
          e.autogrow === !0 && Ge(se);
        }
      ),
      fe(
        () => e.autogrow,
        (J) => {
          J === !0
            ? Ge(se)
            : h.value !== null && n.rows > 0 && (h.value.style.height = 'auto');
        }
      ),
      fe(
        () => e.dense,
        () => {
          e.autogrow === !0 && Ge(se);
        }
      );
    function z() {
      ci(() => {
        const J = document.activeElement;
        h.value !== null &&
          h.value !== J &&
          (J === null || J.id !== S.targetUid.value) &&
          h.value.focus({ preventScroll: !0 });
      });
    }
    function j() {
      h.value !== null && h.value.select();
    }
    function N(J) {
      if (P.value === !0 && e.reverseFillMask !== !0) {
        const ce = J.target;
        A(ce, ce.selectionStart, ce.selectionEnd);
      }
      t('paste', J);
    }
    function Y(J) {
      if (!J || !J.target) return;
      if (e.type === 'file') {
        t('update:modelValue', J.target.files);
        return;
      }
      const ce = J.target.value;
      if (J.target.qComposing === !0) {
        i.value = ce;
        return;
      }
      if (P.value === !0) O(ce, !1, J.inputType);
      else if (
        (re(ce), T.value === !0 && J.target === document.activeElement)
      ) {
        const { selectionStart: ve, selectionEnd: Pe } = J.target;
        ve !== void 0 &&
          Pe !== void 0 &&
          Ge(() => {
            J.target === document.activeElement &&
              ce.indexOf(J.target.value) === 0 &&
              J.target.setSelectionRange(ve, Pe);
          });
      }
      e.autogrow === !0 && se();
    }
    function $(J) {
      t('animationend', J), se();
    }
    function re(J, ce) {
      (c = () => {
        (u = null),
          e.type !== 'number' &&
            i.hasOwnProperty('value') === !0 &&
            delete i.value,
          e.modelValue !== J &&
            s !== J &&
            ((s = J),
            ce === !0 && (a = !0),
            t('update:modelValue', J),
            Ge(() => {
              s === J && (s = NaN);
            })),
          (c = void 0);
      }),
        e.type === 'number' && ((l = !0), (i.value = J)),
        e.debounce !== void 0
          ? (u !== null && clearTimeout(u),
            (i.value = J),
            (u = setTimeout(c, e.debounce)))
          : c();
    }
    function se() {
      requestAnimationFrame(() => {
        const J = h.value;
        if (J !== null) {
          const ce = J.parentNode.style,
            { overflow: ve } = J.style;
          o.platform.is.firefox !== !0 && (J.style.overflow = 'hidden'),
            (ce.marginBottom = J.scrollHeight - 1 + 'px'),
            (J.style.height = '1px'),
            (J.style.height = J.scrollHeight + 'px'),
            (J.style.overflow = ve),
            (ce.marginBottom = '');
        }
      });
    }
    function V(J) {
      k(J),
        u !== null && (clearTimeout(u), (u = null)),
        c !== void 0 && c(),
        t('change', J.target.value);
    }
    function ee(J) {
      J !== void 0 && Ro(J),
        u !== null && (clearTimeout(u), (u = null)),
        c !== void 0 && c(),
        (l = !1),
        (a = !1),
        delete i.value,
        e.type !== 'file' &&
          setTimeout(() => {
            h.value !== null &&
              (h.value.value = m.value !== void 0 ? m.value : '');
          });
    }
    function de() {
      return i.hasOwnProperty('value') === !0
        ? i.value
        : m.value !== void 0
        ? m.value
        : '';
    }
    De(() => {
      ee();
    }),
      st(() => {
        e.autogrow === !0 && se();
      }),
      Object.assign(S, {
        innerValue: m,
        fieldClass: H(
          () =>
            `q-${L.value === !0 ? 'textarea' : 'input'}` +
            (e.autogrow === !0 ? ' q-textarea--autogrow' : '')
        ),
        hasShadow: H(
          () =>
            e.type !== 'file' &&
            typeof e.shadowText == 'string' &&
            e.shadowText.length > 0
        ),
        inputRef: h,
        emitValue: re,
        hasValue: E,
        floatingLabel: H(() => E.value === !0 || zs(e.displayValue)),
        getControl: () =>
          q(L.value === !0 ? 'textarea' : 'input', {
            ref: h,
            class: ['q-field__native q-placeholder', e.inputClass],
            style: e.inputStyle,
            ...D.value,
            ...R.value,
            ...(e.type !== 'file' ? { value: de() } : g.value),
          }),
        getShadowControl: () =>
          q(
            'div',
            {
              class:
                'q-field__native q-field__shadow absolute-bottom no-pointer-events' +
                (L.value === !0 ? '' : ' text-no-wrap'),
            },
            [q('span', { class: 'invisible' }, de()), q('span', e.shadowText)]
          ),
      });
    const be = c_(S);
    return (
      Object.assign(r, {
        focus: z,
        select: j,
        getNativeElement: () => h.value,
      }),
      cr(r, 'nativeEl', () => h.value),
      be
    );
  },
});
const E_ = q(
  'svg',
  {
    key: 'svg',
    class: 'q-radio__bg absolute non-selectable',
    viewBox: '0 0 24 24',
  },
  [
    q('path', {
      d: 'M12,22a10,10 0 0 1 -10,-10a10,10 0 0 1 10,-10a10,10 0 0 1 10,10a10,10 0 0 1 -10,10m0,-22a12,12 0 0 0 -12,12a12,12 0 0 0 12,12a12,12 0 0 0 12,-12a12,12 0 0 0 -12,-12',
    }),
    q('path', {
      class: 'q-radio__check',
      d: 'M12,6a6,6 0 0 0 -6,6a6,6 0 0 0 6,6a6,6 0 0 0 6,-6a6,6 0 0 0 -6,-6',
    }),
  ]
);
var w_ = Se({
  name: 'QRadio',
  props: {
    ...Dt,
    ...Jr,
    ...yl,
    modelValue: { required: !0 },
    val: { required: !0 },
    label: String,
    leftLabel: Boolean,
    checkedIcon: String,
    uncheckedIcon: String,
    color: String,
    keepColor: Boolean,
    dense: Boolean,
    disable: Boolean,
    tabindex: [String, Number],
  },
  emits: ['update:modelValue'],
  setup(e, { slots: t, emit: n }) {
    const { proxy: r } = Ee(),
      o = Nt(e, r.$q),
      i = Zr(e, fd),
      s = ae(null),
      { refocusTargetEl: l, refocusTarget: a } = ud(e, s),
      u = H(() => ge(e.modelValue) === ge(e.val)),
      c = H(
        () =>
          'q-radio cursor-pointer no-outline row inline no-wrap items-center' +
          (e.disable === !0 ? ' disabled' : '') +
          (o.value === !0 ? ' q-radio--dark' : '') +
          (e.dense === !0 ? ' q-radio--dense' : '') +
          (e.leftLabel === !0 ? ' reverse' : '')
      ),
      h = H(() => {
        const E =
          e.color !== void 0 && (e.keepColor === !0 || u.value === !0)
            ? ` text-${e.color}`
            : '';
        return `q-radio__inner relative-position q-radio__inner--${
          u.value === !0 ? 'truthy' : 'falsy'
        }${E}`;
      }),
      f = H(() => (u.value === !0 ? e.checkedIcon : e.uncheckedIcon) || null),
      m = H(() => (e.disable === !0 ? -1 : e.tabindex || 0)),
      P = H(() => {
        const E = { type: 'radio' };
        return (
          e.name !== void 0 &&
            Object.assign(E, {
              '.checked': u.value === !0,
              '^checked': u.value === !0 ? 'checked' : void 0,
              name: e.name,
              value: e.val,
            }),
          E
        );
      }),
      A = cd(P);
    function O(E) {
      E !== void 0 && (at(E), a(E)),
        e.disable !== !0 && u.value !== !0 && n('update:modelValue', e.val, E);
    }
    function w(E) {
      (E.keyCode === 13 || E.keyCode === 32) && at(E);
    }
    function g(E) {
      (E.keyCode === 13 || E.keyCode === 32) && O(E);
    }
    return (
      Object.assign(r, { set: O }),
      () => {
        const E =
          f.value !== null
            ? [
                q(
                  'div',
                  {
                    key: 'icon',
                    class:
                      'q-radio__icon-container absolute-full flex flex-center no-wrap',
                  },
                  [q(fn, { class: 'q-radio__icon', name: f.value })]
                ),
              ]
            : [E_];
        e.disable !== !0 &&
          A(E, 'unshift', ' q-radio__native q-ma-none q-pa-none');
        const k = [
          q(
            'div',
            { class: h.value, style: i.value, 'aria-hidden': 'true' },
            E
          ),
        ];
        l.value !== null && k.push(l.value);
        const S = e.label !== void 0 ? rn(t.default, [e.label]) : Ke(t.default);
        return (
          S !== void 0 &&
            k.push(q('div', { class: 'q-radio__label q-anchor--skip' }, S)),
          q(
            'div',
            {
              ref: s,
              class: c.value,
              tabindex: m.value,
              role: 'radio',
              'aria-label': e.label,
              'aria-checked': u.value === !0 ? 'true' : 'false',
              'aria-disabled': e.disable === !0 ? 'true' : void 0,
              onClick: O,
              onKeydown: w,
              onKeyup: g,
            },
            k
          )
        );
      }
    );
  },
});
const C_ = q('div', { key: 'svg', class: 'q-checkbox__bg absolute' }, [
  q(
    'svg',
    { class: 'q-checkbox__svg fit absolute-full', viewBox: '0 0 24 24' },
    [
      q('path', {
        class: 'q-checkbox__truthy',
        fill: 'none',
        d: 'M1.73,12.91 8.1,19.28 22.79,4.59',
      }),
      q('path', { class: 'q-checkbox__indet', d: 'M4,14H20V10H4' }),
    ]
  ),
]);
var k_ = Se({
  name: 'QCheckbox',
  props: dd,
  emits: hd,
  setup(e) {
    function t(n, r) {
      const o = H(
        () =>
          (n.value === !0
            ? e.checkedIcon
            : r.value === !0
            ? e.indeterminateIcon
            : e.uncheckedIcon) || null
      );
      return () =>
        o.value !== null
          ? [
              q(
                'div',
                {
                  key: 'icon',
                  class:
                    'q-checkbox__icon-container absolute-full flex flex-center no-wrap',
                },
                [q(fn, { class: 'q-checkbox__icon', name: o.value })]
              ),
            ]
          : [C_];
    }
    return md('checkbox', t);
  },
});
const Wd = { radio: w_, checkbox: k_, toggle: gd },
  P_ = Object.keys(Wd);
var x_ = Se({
    name: 'QOptionGroup',
    props: {
      ...Dt,
      modelValue: { required: !0 },
      options: {
        type: Array,
        validator: (e) => e.every((t) => 'value' in t && 'label' in t),
      },
      name: String,
      type: { default: 'radio', validator: (e) => P_.includes(e) },
      color: String,
      keepColor: Boolean,
      dense: Boolean,
      size: String,
      leftLabel: Boolean,
      inline: Boolean,
      disable: Boolean,
    },
    emits: ['update:modelValue'],
    setup(e, { emit: t, slots: n }) {
      const {
          proxy: { $q: r },
        } = Ee(),
        o = Array.isArray(e.modelValue);
      e.type === 'radio'
        ? o === !0 && console.error('q-option-group: model should not be array')
        : o === !1 &&
          console.error('q-option-group: model should be array in your case');
      const i = Nt(e, r),
        s = H(() => Wd[e.type]),
        l = H(
          () =>
            'q-option-group q-gutter-x-sm' +
            (e.inline === !0 ? ' q-option-group--inline' : '')
        ),
        a = H(() => {
          const c = { role: 'group' };
          return (
            e.type === 'radio' &&
              ((c.role = 'radiogroup'),
              e.disable === !0 && (c['aria-disabled'] = 'true')),
            c
          );
        });
      function u(c) {
        t('update:modelValue', c);
      }
      return () =>
        q(
          'div',
          { class: l.value, ...a.value },
          e.options.map((c, h) => {
            const f =
              n['label-' + h] !== void 0
                ? () => n['label-' + h](c)
                : n.label !== void 0
                ? () => n.label(c)
                : void 0;
            return q('div', [
              q(
                s.value,
                {
                  modelValue: e.modelValue,
                  val: c.value,
                  name: c.name === void 0 ? e.name : c.name,
                  disable: e.disable || c.disable,
                  label: f === void 0 ? c.label : null,
                  leftLabel: c.leftLabel === void 0 ? e.leftLabel : c.leftLabel,
                  color: c.color === void 0 ? e.color : c.color,
                  checkedIcon: c.checkedIcon,
                  uncheckedIcon: c.uncheckedIcon,
                  dark: c.dark || i.value,
                  size: c.size === void 0 ? e.size : c.size,
                  dense: e.dense,
                  keepColor: c.keepColor === void 0 ? e.keepColor : c.keepColor,
                  'onUpdate:modelValue': u,
                },
                f
              ),
            ]);
          })
        );
    },
  }),
  S_ = Se({
    name: 'DialogPlugin',
    props: {
      ...Dt,
      title: String,
      message: String,
      prompt: Object,
      options: Object,
      progress: [Boolean, Object],
      html: Boolean,
      ok: { type: [String, Object, Boolean], default: !0 },
      cancel: [String, Object, Boolean],
      focus: {
        type: String,
        default: 'ok',
        validator: (e) => ['ok', 'cancel', 'none'].includes(e),
      },
      stackButtons: Boolean,
      color: String,
      cardClass: [String, Array, Object],
      cardStyle: [String, Array, Object],
    },
    emits: ['ok', 'hide'],
    setup(e, { emit: t }) {
      const { proxy: n } = Ee(),
        { $q: r } = n,
        o = Nt(e, r),
        i = ae(null),
        s = ae(
          e.prompt !== void 0
            ? e.prompt.model
            : e.options !== void 0
            ? e.options.model
            : void 0
        ),
        l = H(
          () =>
            'q-dialog-plugin' +
            (o.value === !0 ? ' q-dialog-plugin--dark q-dark' : '') +
            (e.progress !== !1 ? ' q-dialog-plugin--progress' : '')
        ),
        a = H(() => e.color || (o.value === !0 ? 'amber' : 'primary')),
        u = H(() =>
          e.progress === !1
            ? null
            : $t(e.progress) === !0
            ? {
                component: e.progress.spinner || Wr,
                props: { color: e.progress.color || a.value },
              }
            : { component: Wr, props: { color: a.value } }
        ),
        c = H(() => e.prompt !== void 0 || e.options !== void 0),
        h = H(() => {
          if (c.value !== !0) return {};
          const {
            model: $,
            isValid: re,
            items: se,
            ...V
          } = e.prompt !== void 0 ? e.prompt : e.options;
          return V;
        }),
        f = H(() => ($t(e.ok) === !0 || e.ok === !0 ? r.lang.label.ok : e.ok)),
        m = H(() =>
          $t(e.cancel) === !0 || e.cancel === !0
            ? r.lang.label.cancel
            : e.cancel
        ),
        P = H(() =>
          e.prompt !== void 0
            ? e.prompt.isValid !== void 0 && e.prompt.isValid(s.value) !== !0
            : e.options !== void 0
            ? e.options.isValid !== void 0 && e.options.isValid(s.value) !== !0
            : !1
        ),
        A = H(() => ({
          color: a.value,
          label: f.value,
          ripple: !1,
          disable: P.value,
          ...($t(e.ok) === !0 ? e.ok : { flat: !0 }),
          'data-autofocus': (e.focus === 'ok' && c.value !== !0) || void 0,
          onClick: E,
        })),
        O = H(() => ({
          color: a.value,
          label: m.value,
          ripple: !1,
          ...($t(e.cancel) === !0 ? e.cancel : { flat: !0 }),
          'data-autofocus': (e.focus === 'cancel' && c.value !== !0) || void 0,
          onClick: k,
        }));
      fe(() => e.prompt && e.prompt.model, L),
        fe(() => e.options && e.options.model, L);
      function w() {
        i.value.show();
      }
      function g() {
        i.value.hide();
      }
      function E() {
        t('ok', ge(s.value)), g();
      }
      function k() {
        g();
      }
      function S() {
        t('hide');
      }
      function L($) {
        s.value = $;
      }
      function T($) {
        P.value !== !0 &&
          e.prompt.type !== 'textarea' &&
          cn($, 13) === !0 &&
          E();
      }
      function R($, re) {
        return e.html === !0
          ? q(wr, { class: $, innerHTML: re })
          : q(wr, { class: $ }, () => re);
      }
      function D() {
        return [
          q(__, {
            color: a.value,
            dense: !0,
            autofocus: !0,
            dark: o.value,
            ...h.value,
            modelValue: s.value,
            'onUpdate:modelValue': L,
            onKeyup: T,
          }),
        ];
      }
      function z() {
        return [
          q(x_, {
            color: a.value,
            options: e.options.items,
            dark: o.value,
            ...h.value,
            modelValue: s.value,
            'onUpdate:modelValue': L,
          }),
        ];
      }
      function j() {
        const $ = [];
        return (
          e.cancel && $.push(q(No, O.value)),
          e.ok && $.push(q(No, A.value)),
          q(
            Jy,
            {
              class: e.stackButtons === !0 ? 'items-end' : '',
              vertical: e.stackButtons,
              align: 'right',
            },
            () => $
          )
        );
      }
      function N() {
        const $ = [];
        return (
          e.title && $.push(R('q-dialog__title', e.title)),
          e.progress !== !1 &&
            $.push(
              q(wr, { class: 'q-dialog__progress' }, () =>
                q(u.value.component, u.value.props)
              )
            ),
          e.message && $.push(R('q-dialog__message', e.message)),
          e.prompt !== void 0
            ? $.push(q(wr, { class: 'scroll q-dialog-plugin__form' }, D))
            : e.options !== void 0 &&
              $.push(
                q(Yu, { dark: o.value }),
                q(wr, { class: 'scroll q-dialog-plugin__form' }, z),
                q(Yu, { dark: o.value })
              ),
          (e.ok || e.cancel) && $.push(j()),
          $
        );
      }
      function Y() {
        return [
          q(
            Yy,
            {
              class: [l.value, e.cardClass],
              style: e.cardStyle,
              dark: o.value,
            },
            N
          ),
        ];
      }
      return (
        Object.assign(n, { show: w, hide: g }),
        () => q(Xy, { ref: i, onHide: S }, Y)
      );
    },
  });
function Gd(e, t) {
  for (const n in t)
    n !== 'spinner' && Object(t[n]) === t[n]
      ? ((e[n] = Object(e[n]) !== e[n] ? {} : { ...e[n] }), Gd(e[n], t[n]))
      : (e[n] = t[n]);
}
function L_(e, t, n) {
  return (r) => {
    let o, i;
    const s = t === !0 && r.component !== void 0;
    if (s === !0) {
      const { component: g, componentProps: E } = r;
      (o = typeof g == 'string' ? n.component(g) : g), (i = E || {});
    } else {
      const { class: g, style: E, ...k } = r;
      (o = e),
        (i = k),
        g !== void 0 && (k.cardClass = g),
        E !== void 0 && (k.cardStyle = E);
    }
    let l,
      a = !1;
    const u = ae(null),
      c = _l(!1, 'dialog'),
      h = (g) => {
        if (u.value !== null && u.value[g] !== void 0) {
          u.value[g]();
          return;
        }
        const E = l.$.subTree;
        if (E && E.component) {
          if (E.component.proxy && E.component.proxy[g]) {
            E.component.proxy[g]();
            return;
          }
          if (
            E.component.subTree &&
            E.component.subTree.component &&
            E.component.subTree.component.proxy &&
            E.component.subTree.component.proxy[g]
          ) {
            E.component.subTree.component.proxy[g]();
            return;
          }
        }
        console.error('[Quasar] Incorrectly defined Dialog component');
      },
      f = [],
      m = [],
      P = {
        onOk(g) {
          return f.push(g), P;
        },
        onCancel(g) {
          return m.push(g), P;
        },
        onDismiss(g) {
          return f.push(g), m.push(g), P;
        },
        hide() {
          return h('hide'), P;
        },
        update(g) {
          if (l !== null) {
            if (s === !0) Object.assign(i, g);
            else {
              const { class: E, style: k, ...S } = g;
              E !== void 0 && (S.cardClass = E),
                k !== void 0 && (S.cardStyle = k),
                Gd(i, S);
            }
            l.$forceUpdate();
          }
          return P;
        },
      },
      A = (g) => {
        (a = !0),
          f.forEach((E) => {
            E(g);
          });
      },
      O = () => {
        w.unmount(c),
          El(c),
          (w = null),
          (l = null),
          a !== !0 &&
            m.forEach((g) => {
              g();
            });
      };
    let w = vf(
      {
        name: 'QGlobalDialog',
        setup: () => () =>
          q(o, {
            ...i,
            ref: u,
            onOk: A,
            onHide: O,
            onVnodeMounted(...g) {
              typeof i.onVnodeMounted == 'function' && i.onVnodeMounted(...g),
                Ge(() => h('show'));
            },
          }),
      },
      n
    );
    return (l = w.mount(c)), P;
  };
}
var M_ = {
    install({ $q: e, parentApp: t }) {
      (e.dialog = L_(S_, !0, t)),
        this.__installed !== !0 && (this.create = e.dialog);
    },
  },
  A_ = {
    config: {},
    iconSet: qy,
    plugins: { Loading: Et, AppFullscreen: Ue, Meta: $0, Dialog: M_ },
  };
const T_ = '/';
async function O_({ app: e, router: t, store: n }, r) {
  let o = !1;
  const i = (a) => {
      try {
        return t.resolve(a).href;
      } catch {}
      return Object(a) === a ? null : a;
    },
    s = (a) => {
      if (((o = !0), typeof a == 'string' && /^https?:\/\//.test(a))) {
        window.location.href = a;
        return;
      }
      const u = i(a);
      u !== null && (window.location.href = u);
    },
    l = window.location.href.replace(window.location.origin, '');
  for (let a = 0; o === !1 && a < r.length; a++)
    try {
      await r[a]({
        app: e,
        router: t,
        store: n,
        ssrContext: null,
        redirect: s,
        urlPath: l,
        publicPath: T_,
      });
    } catch (u) {
      if (u && u.url) {
        s(u.url);
        return;
      }
      console.error('[Quasar] boot error:', u);
      return;
    }
  o !== !0 && (e.use(t), e.mount('#q-app'));
}
zy(of, A_).then((e) => {
  const [t, n] =
    Promise.allSettled !== void 0
      ? [
          'allSettled',
          (r) =>
            r.map((o) => {
              if (o.status === 'rejected') {
                console.error('[Quasar] boot error:', o.reason);
                return;
              }
              return o.value.default;
            }),
        ]
      : ['all', (r) => r.map((o) => o.default)];
  return Promise[t]([ze(() => import('./i18n.f10c6978.js'), [])]).then((r) => {
    const o = n(r).filter((i) => typeof i == 'function');
    O_(e, o);
  });
});
export {
  Qf as $,
  Xn as A,
  De as B,
  st as C,
  Qe as D,
  Mo as E,
  Ct as F,
  q as G,
  z_ as H,
  at as I,
  cn as J,
  df as K,
  rn as L,
  Ee as M,
  ki as N,
  s_ as O,
  Se as P,
  No as Q,
  i1 as R,
  kd as S,
  Pd as T,
  fe as U,
  Xr as V,
  il as W,
  As as X,
  Ke as Y,
  Qn as Z,
  iy as _,
  H as a,
  Lt as a$,
  Te as a0,
  Hn as a1,
  N_ as a2,
  us as a3,
  B_ as a4,
  lf as a5,
  y1 as a6,
  af as a7,
  un as a8,
  U_ as a9,
  Fy as aA,
  eo as aB,
  zd as aC,
  hy as aD,
  e1 as aE,
  $1 as aF,
  Ay as aG,
  di as aH,
  Vo as aI,
  $o as aJ,
  Is as aK,
  Ft as aL,
  yy as aM,
  t2 as aN,
  e2 as aO,
  Rs as aP,
  Ds as aQ,
  my as aR,
  Kr as aS,
  Z_ as aT,
  n2 as aU,
  Py as aV,
  xy as aW,
  Nu as aX,
  ob as aY,
  Jr as aZ,
  Zr as a_,
  Ge as aa,
  I_ as ab,
  Dt as ac,
  Nt as ad,
  j_ as ae,
  It as af,
  Ro as ag,
  yl as ah,
  q_ as ai,
  $t as aj,
  cd as ak,
  W_ as al,
  Dy as am,
  R0 as an,
  D_ as ao,
  I0 as ap,
  gd as aq,
  Y_ as ar,
  J_ as as,
  Ub as at,
  Db as au,
  $s as av,
  G_ as aw,
  t1 as ax,
  n1 as ay,
  nr as az,
  V_ as b,
  cl as b0,
  qc as b1,
  X_ as b2,
  Gf as b3,
  tb as b4,
  $_ as c,
  Qr as d,
  H_ as e,
  An as f,
  ke as g,
  et as h,
  Yy as i,
  Zi as j,
  ss as k,
  F_ as l,
  wr as m,
  Vs as n,
  Tr as o,
  tm as p,
  nm as q,
  ae as r,
  Or as s,
  oh as t,
  _o as u,
  K_ as v,
  rt as w,
  fn as x,
  Q_ as y,
  Ef as z,
};
