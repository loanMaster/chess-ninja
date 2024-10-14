import {
  A as nt,
  r as R,
  a as r,
  B as Ke,
  C as st,
  D as Pt,
  E as Bt,
  R as Lt,
  G as q,
  H as gt,
  I as ve,
  J as At,
  K as Rt,
  x as Te,
  L as It,
  M as Ce,
  N as Et,
  O as Vt,
  P as Se,
  S as at,
  T as dt,
  U as me,
  V as yt,
  W as Ct,
  X as Dt,
  Y as Ue,
  Z as Ft,
  $ as kt,
  a0 as Z,
  a1 as wt,
  a2 as xt,
  a3 as le,
  a4 as pe,
  a5 as ye,
  a6 as _t,
  a7 as ge,
  a8 as Nt,
  a9 as zt,
  aa as jt,
  ab as Ot,
  ac as qt,
  ad as Tt,
  ae as St,
  af as vt,
  ag as ot,
  ah as Qt,
  ai as Wt,
  aj as rt,
  ak as Kt,
  al as Ut,
  z as Ht,
  am as _,
  d as ut,
  an as Xt,
  o as de,
  e as Oe,
  s as lt,
  w as Y,
  k as De,
  t as ce,
  Q as he,
  ao as ze,
  f as H,
  h as N,
  g as B,
  u as je,
  n as Yt,
  i as Gt,
  ap as Jt,
  aq as Zt,
  ar as en,
  as as tn,
  at as nn,
  au as an,
  av as ft,
  aw as on,
} from './index.2385a99b.js';
import {
  _ as rn,
  a as mt,
  Q as ln,
  b as sn,
} from './ToggleChessPieceNotation.74de14e5.js';
import { C as un } from './chess-board.interface.321ee08e.js';
import './chess-utils.4933cc4c.js';
import './dateTimestampProvider.aca62768.js';
let cn = 0;
const dn = ['click', 'keydown'],
  vn = {
    icon: String,
    label: [Number, String],
    alert: [Boolean, String],
    alertIcon: String,
    name: { type: [Number, String], default: () => `t_${cn++}` },
    noCaps: Boolean,
    tabindex: [String, Number],
    disable: Boolean,
    contentClass: String,
    ripple: { type: [Boolean, Object], default: !0 },
  };
function fn(t, n, u, l) {
  const e = Pt(gt, nt);
  if (e === nt)
    return (
      console.error('QTab/QRouteTab component needs to be child of QTabs'), nt
    );
  const { proxy: a } = Ce(),
    i = R(null),
    d = R(null),
    p = R(null),
    f = r(() =>
      t.disable === !0 || t.ripple === !1
        ? !1
        : Object.assign(
            { keyCodes: [13, 32], early: !0 },
            t.ripple === !0 ? {} : t.ripple
          )
    ),
    c = r(() => e.currentModel.value === t.name),
    g = r(
      () =>
        'q-tab relative-position self-stretch flex flex-center text-center' +
        (c.value === !0
          ? ' q-tab--active' +
            (e.tabProps.value.activeClass
              ? ' ' + e.tabProps.value.activeClass
              : '') +
            (e.tabProps.value.activeColor
              ? ` text-${e.tabProps.value.activeColor}`
              : '') +
            (e.tabProps.value.activeBgColor
              ? ` bg-${e.tabProps.value.activeBgColor}`
              : '')
          : ' q-tab--inactive') +
        (t.icon && t.label && e.tabProps.value.inlineLabel === !1
          ? ' q-tab--full'
          : '') +
        (t.noCaps === !0 || e.tabProps.value.noCaps === !0
          ? ' q-tab--no-caps'
          : '') +
        (t.disable === !0
          ? ' disabled'
          : ' q-focusable q-hoverable cursor-pointer') +
        (l !== void 0 ? l.linkClass.value : '')
    ),
    h = r(
      () =>
        'q-tab__content self-stretch flex-center relative-position q-anchor--skip non-selectable ' +
        (e.tabProps.value.inlineLabel === !0
          ? 'row no-wrap q-tab__content--inline'
          : 'column') +
        (t.contentClass !== void 0 ? ` ${t.contentClass}` : '')
    ),
    y = r(() =>
      t.disable === !0 ||
      e.hasFocus.value === !0 ||
      (c.value === !1 && e.hasActiveTab.value === !0)
        ? -1
        : t.tabindex || 0
    );
  function b(v, M) {
    if ((M !== !0 && i.value !== null && i.value.focus(), t.disable === !0)) {
      l !== void 0 && l.hasRouterLink.value === !0 && ve(v);
      return;
    }
    if (l === void 0) {
      e.updateModel({ name: t.name }), u('click', v);
      return;
    }
    if (l.hasRouterLink.value === !0) {
      const V = (F = {}) => {
        let D;
        const Q =
          F.to === void 0 || Et(F.to, t.to) === !0
            ? (e.avoidRouteWatcher = Vt())
            : null;
        return l
          .navigateToRouterLink(v, { ...F, returnRouterError: !0 })
          .catch((U) => {
            D = U;
          })
          .then((U) => {
            if (
              (Q === e.avoidRouteWatcher &&
                ((e.avoidRouteWatcher = !1),
                D === void 0 &&
                  (U === void 0 ||
                    U.message.startsWith('Avoided redundant navigation') ===
                      !0) &&
                  e.updateModel({ name: t.name })),
              F.returnRouterError === !0)
            )
              return D !== void 0 ? Promise.reject(D) : U;
          });
      };
      u('click', v, V), v.defaultPrevented !== !0 && V();
      return;
    }
    u('click', v);
  }
  function $(v) {
    At(v, [13, 32])
      ? b(v, !0)
      : Rt(v) !== !0 &&
        v.keyCode >= 35 &&
        v.keyCode <= 40 &&
        v.altKey !== !0 &&
        v.metaKey !== !0 &&
        e.onKbdNavigate(v.keyCode, a.$el) === !0 &&
        ve(v),
      u('keydown', v);
  }
  function L() {
    const v = e.tabProps.value.narrowIndicator,
      M = [],
      V = q('div', {
        ref: p,
        class: ['q-tab__indicator', e.tabProps.value.indicatorClass],
      });
    t.icon !== void 0 && M.push(q(Te, { class: 'q-tab__icon', name: t.icon })),
      t.label !== void 0 &&
        M.push(q('div', { class: 'q-tab__label' }, t.label)),
      t.alert !== !1 &&
        M.push(
          t.alertIcon !== void 0
            ? q(Te, {
                class: 'q-tab__alert-icon',
                color: t.alert !== !0 ? t.alert : void 0,
                name: t.alertIcon,
              })
            : q('div', {
                class:
                  'q-tab__alert' + (t.alert !== !0 ? ` text-${t.alert}` : ''),
              })
        ),
      v === !0 && M.push(V);
    const F = [
      q('div', { class: 'q-focus-helper', tabindex: -1, ref: i }),
      q('div', { class: h.value }, It(n.default, M)),
    ];
    return v === !1 && F.push(V), F;
  }
  const z = {
    name: r(() => t.name),
    rootRef: d,
    tabIndicatorRef: p,
    routeData: l,
  };
  Ke(() => {
    e.unregisterTab(z);
  }),
    st(() => {
      e.registerTab(z);
    });
  function O(v, M) {
    const V = {
      ref: d,
      class: g.value,
      tabindex: y.value,
      role: 'tab',
      'aria-selected': c.value === !0 ? 'true' : 'false',
      'aria-disabled': t.disable === !0 ? 'true' : void 0,
      onClick: b,
      onKeydown: $,
      ...M,
    };
    return Bt(q(v, V, L()), [[Lt, f.value]]);
  }
  return { renderTab: O, $tabs: e };
}
var Fe = Se({
  name: 'QTab',
  props: vn,
  emits: dn,
  setup(t, { slots: n, emit: u }) {
    const { renderTab: l } = fn(t, n, u);
    return () => l('div');
  },
});
let $t = !1;
{
  const t = document.createElement('div');
  t.setAttribute('dir', 'rtl'),
    Object.assign(t.style, { width: '1px', height: '1px', overflow: 'auto' });
  const n = document.createElement('div');
  Object.assign(n.style, { width: '1000px', height: '1px' }),
    document.body.appendChild(t),
    t.appendChild(n),
    (t.scrollLeft = -1e3),
    ($t = t.scrollLeft >= 0),
    t.remove();
}
function mn(t, n, u) {
  const l = u === !0 ? ['left', 'right'] : ['top', 'bottom'];
  return `absolute-${n === !0 ? l[0] : l[1]}${t ? ` text-${t}` : ''}`;
}
const hn = ['left', 'center', 'right', 'justify'];
var bn = Se({
  name: 'QTabs',
  props: {
    modelValue: [Number, String],
    align: {
      type: String,
      default: 'center',
      validator: (t) => hn.includes(t),
    },
    breakpoint: { type: [String, Number], default: 600 },
    vertical: Boolean,
    shrink: Boolean,
    stretch: Boolean,
    activeClass: String,
    activeColor: String,
    activeBgColor: String,
    indicatorColor: String,
    leftIcon: String,
    rightIcon: String,
    outsideArrows: Boolean,
    mobileArrows: Boolean,
    switchIndicator: Boolean,
    narrowIndicator: Boolean,
    inlineLabel: Boolean,
    noCaps: Boolean,
    dense: Boolean,
    contentClass: String,
    'onUpdate:modelValue': [Function, Array],
  },
  setup(t, { slots: n, emit: u }) {
    const { proxy: l } = Ce(),
      { $q: e } = l,
      { registerTick: a } = at(),
      { registerTick: i } = at(),
      { registerTick: d } = at(),
      { registerTimeout: p, removeTimeout: f } = dt(),
      { registerTimeout: c, removeTimeout: g } = dt(),
      h = R(null),
      y = R(null),
      b = R(t.modelValue),
      $ = R(!1),
      L = R(!0),
      z = R(!1),
      O = R(!1),
      v = [],
      M = R(0),
      V = R(!1);
    let F = null,
      D = null,
      Q;
    const U = r(() => ({
        activeClass: t.activeClass,
        activeColor: t.activeColor,
        activeBgColor: t.activeBgColor,
        indicatorClass: mn(t.indicatorColor, t.switchIndicator, t.vertical),
        narrowIndicator: t.narrowIndicator,
        inlineLabel: t.inlineLabel,
        noCaps: t.noCaps,
      })),
      ie = r(() => {
        const s = M.value,
          m = b.value;
        for (let k = 0; k < s; k++) if (v[k].name.value === m) return !0;
        return !1;
      }),
      te = r(
        () =>
          `q-tabs__content--align-${
            $.value === !0 ? 'left' : O.value === !0 ? 'justify' : t.align
          }`
      ),
      fe = r(
        () =>
          `q-tabs row no-wrap items-center q-tabs--${
            $.value === !0 ? '' : 'not-'
          }scrollable q-tabs--${
            t.vertical === !0 ? 'vertical' : 'horizontal'
          } q-tabs__arrows--${
            t.outsideArrows === !0 ? 'outside' : 'inside'
          } q-tabs--mobile-with${t.mobileArrows === !0 ? '' : 'out'}-arrows` +
          (t.dense === !0 ? ' q-tabs--dense' : '') +
          (t.shrink === !0 ? ' col-shrink' : '') +
          (t.stretch === !0 ? ' self-stretch' : '')
      ),
      w = r(
        () =>
          'q-tabs__content scroll--mobile row no-wrap items-center self-stretch hide-scrollbar relative-position ' +
          te.value +
          (t.contentClass !== void 0 ? ` ${t.contentClass}` : '')
      ),
      S = r(() =>
        t.vertical === !0
          ? {
              container: 'height',
              content: 'offsetHeight',
              scroll: 'scrollHeight',
            }
          : {
              container: 'width',
              content: 'offsetWidth',
              scroll: 'scrollWidth',
            }
      ),
      W = r(() => t.vertical !== !0 && e.lang.rtl === !0),
      G = r(() => $t === !1 && W.value === !0);
    me(W, oe),
      me(
        () => t.modelValue,
        (s) => {
          ne({ name: s, setCurrent: !0, skipEmit: !0 });
        }
      ),
      me(() => t.outsideArrows, se);
    function ne({ name: s, setCurrent: m, skipEmit: k }) {
      b.value !== s &&
        (k !== !0 &&
          t['onUpdate:modelValue'] !== void 0 &&
          u('update:modelValue', s),
        (m === !0 || t['onUpdate:modelValue'] === void 0) &&
          (He(b.value, s), (b.value = s)));
    }
    function se() {
      a(() => {
        $e({ width: h.value.offsetWidth, height: h.value.offsetHeight });
      });
    }
    function $e(s) {
      if (S.value === void 0 || y.value === null) return;
      const m = s[S.value.container],
        k = Math.min(
          y.value[S.value.scroll],
          Array.prototype.reduce.call(
            y.value.children,
            (A, T) => A + (T[S.value.content] || 0),
            0
          )
        ),
        I = m > 0 && k > m;
      ($.value = I),
        I === !0 && i(oe),
        (O.value = m < parseInt(t.breakpoint, 10));
    }
    function He(s, m) {
      const k =
          s != null && s !== '' ? v.find((A) => A.name.value === s) : null,
        I = m != null && m !== '' ? v.find((A) => A.name.value === m) : null;
      if (k && I) {
        const A = k.tabIndicatorRef.value,
          T = I.tabIndicatorRef.value;
        F !== null && (clearTimeout(F), (F = null)),
          (A.style.transition = 'none'),
          (A.style.transform = 'none'),
          (T.style.transition = 'none'),
          (T.style.transform = 'none');
        const x = A.getBoundingClientRect(),
          j = T.getBoundingClientRect();
        (T.style.transform =
          t.vertical === !0
            ? `translate3d(0,${x.top - j.top}px,0) scale3d(1,${
                j.height ? x.height / j.height : 1
              },1)`
            : `translate3d(${x.left - j.left}px,0,0) scale3d(${
                j.width ? x.width / j.width : 1
              },1,1)`),
          d(() => {
            F = setTimeout(() => {
              (F = null),
                (T.style.transition =
                  'transform .25s cubic-bezier(.4, 0, .2, 1)'),
                (T.style.transform = 'none');
            }, 70);
          });
      }
      I && $.value === !0 && ae(I.rootRef.value);
    }
    function ae(s) {
      const {
          left: m,
          width: k,
          top: I,
          height: A,
        } = y.value.getBoundingClientRect(),
        T = s.getBoundingClientRect();
      let x = t.vertical === !0 ? T.top - I : T.left - m;
      if (x < 0) {
        (y.value[t.vertical === !0 ? 'scrollTop' : 'scrollLeft'] +=
          Math.floor(x)),
          oe();
        return;
      }
      (x += t.vertical === !0 ? T.height - A : T.width - k),
        x > 0 &&
          ((y.value[t.vertical === !0 ? 'scrollTop' : 'scrollLeft'] +=
            Math.ceil(x)),
          oe());
    }
    function oe() {
      const s = y.value;
      if (s === null) return;
      const m = s.getBoundingClientRect(),
        k = t.vertical === !0 ? s.scrollTop : Math.abs(s.scrollLeft);
      W.value === !0
        ? ((L.value = Math.ceil(k + m.width) < s.scrollWidth - 1),
          (z.value = k > 0))
        : ((L.value = k > 0),
          (z.value =
            t.vertical === !0
              ? Math.ceil(k + m.height) < s.scrollHeight
              : Math.ceil(k + m.width) < s.scrollWidth));
    }
    function Me(s) {
      D !== null && clearInterval(D),
        (D = setInterval(() => {
          Le(s) === !0 && J();
        }, 5));
    }
    function Pe() {
      Me(G.value === !0 ? Number.MAX_SAFE_INTEGER : 0);
    }
    function Be() {
      Me(G.value === !0 ? 0 : Number.MAX_SAFE_INTEGER);
    }
    function J() {
      D !== null && (clearInterval(D), (D = null));
    }
    function Xe(s, m) {
      const k = Array.prototype.filter.call(
          y.value.children,
          (j) =>
            j === m || (j.matches && j.matches('.q-tab.q-focusable') === !0)
        ),
        I = k.length;
      if (I === 0) return;
      if (s === 36) return ae(k[0]), k[0].focus(), !0;
      if (s === 35) return ae(k[I - 1]), k[I - 1].focus(), !0;
      const A = s === (t.vertical === !0 ? 38 : 37),
        T = s === (t.vertical === !0 ? 40 : 39),
        x = A === !0 ? -1 : T === !0 ? 1 : void 0;
      if (x !== void 0) {
        const j = W.value === !0 ? -1 : 1,
          X = k.indexOf(m) + x * j;
        return (
          X >= 0 && X < I && (ae(k[X]), k[X].focus({ preventScroll: !0 })), !0
        );
      }
    }
    const Ye = r(() =>
      G.value === !0
        ? {
            get: (s) => Math.abs(s.scrollLeft),
            set: (s, m) => {
              s.scrollLeft = -m;
            },
          }
        : t.vertical === !0
        ? {
            get: (s) => s.scrollTop,
            set: (s, m) => {
              s.scrollTop = m;
            },
          }
        : {
            get: (s) => s.scrollLeft,
            set: (s, m) => {
              s.scrollLeft = m;
            },
          }
    );
    function Le(s) {
      const m = y.value,
        { get: k, set: I } = Ye.value;
      let A = !1,
        T = k(m);
      const x = s < T ? -1 : 1;
      return (
        (T += x * 5),
        T < 0
          ? ((A = !0), (T = 0))
          : ((x === -1 && T <= s) || (x === 1 && T >= s)) &&
            ((A = !0), (T = s)),
        I(m, T),
        oe(),
        A
      );
    }
    function Ae(s, m) {
      for (const k in s) if (s[k] !== m[k]) return !1;
      return !0;
    }
    function ke() {
      let s = null,
        m = { matchedLen: 0, queryDiff: 9999, hrefLen: 0 };
      const k = v.filter(
          (x) =>
            x.routeData !== void 0 && x.routeData.hasRouterLink.value === !0
        ),
        { hash: I, query: A } = l.$route,
        T = Object.keys(A).length;
      for (const x of k) {
        const j = x.routeData.exact.value === !0;
        if (
          x.routeData[j === !0 ? 'linkIsExactActive' : 'linkIsActive'].value !==
          !0
        )
          continue;
        const {
            hash: X,
            query: qe,
            matched: Je,
            href: Ze,
          } = x.routeData.resolvedLink.value,
          o = Object.keys(qe).length;
        if (j === !0) {
          if (X !== I || o !== T || Ae(A, qe) === !1) continue;
          s = x.name.value;
          break;
        }
        if ((X !== '' && X !== I) || (o !== 0 && Ae(qe, A) === !1)) continue;
        const C = {
          matchedLen: Je.length,
          queryDiff: T - o,
          hrefLen: Ze.length - X.length,
        };
        if (C.matchedLen > m.matchedLen) {
          (s = x.name.value), (m = C);
          continue;
        } else if (C.matchedLen !== m.matchedLen) continue;
        if (C.queryDiff < m.queryDiff) (s = x.name.value), (m = C);
        else if (C.queryDiff !== m.queryDiff) continue;
        C.hrefLen > m.hrefLen && ((s = x.name.value), (m = C));
      }
      (s === null &&
        v.some((x) => x.routeData === void 0 && x.name.value === b.value) ===
          !0) ||
        ne({ name: s, setCurrent: !0 });
    }
    function Ge(s) {
      if (
        (f(),
        V.value !== !0 &&
          h.value !== null &&
          s.target &&
          typeof s.target.closest == 'function')
      ) {
        const m = s.target.closest('.q-tab');
        m &&
          h.value.contains(m) === !0 &&
          ((V.value = !0), $.value === !0 && ae(m));
      }
    }
    function Re() {
      p(() => {
        V.value = !1;
      }, 30);
    }
    function ue() {
      Ee.avoidRouteWatcher === !1 ? c(ke) : g();
    }
    function we() {
      if (Q === void 0) {
        const s = me(() => l.$route.fullPath, ue);
        Q = () => {
          s(), (Q = void 0);
        };
      }
    }
    function xe(s) {
      v.push(s),
        M.value++,
        se(),
        s.routeData === void 0 || l.$route === void 0
          ? c(() => {
              if ($.value === !0) {
                const m = b.value,
                  k =
                    m != null && m !== ''
                      ? v.find((I) => I.name.value === m)
                      : null;
                k && ae(k.rootRef.value);
              }
            })
          : (we(), s.routeData.hasRouterLink.value === !0 && ue());
    }
    function Ie(s) {
      v.splice(v.indexOf(s), 1),
        M.value--,
        se(),
        Q !== void 0 &&
          s.routeData !== void 0 &&
          (v.every((m) => m.routeData === void 0) === !0 && Q(), ue());
    }
    const Ee = {
      currentModel: b,
      tabProps: U,
      hasFocus: V,
      hasActiveTab: ie,
      registerTab: xe,
      unregisterTab: Ie,
      verifyRouteModel: ue,
      updateModel: ne,
      onKbdNavigate: Xe,
      avoidRouteWatcher: !1,
    };
    Ft(gt, Ee);
    function Ve() {
      F !== null && clearTimeout(F), J(), Q !== void 0 && Q();
    }
    let _e;
    return (
      Ke(Ve),
      yt(() => {
        (_e = Q !== void 0), Ve();
      }),
      Ct(() => {
        _e === !0 && we(), se();
      }),
      () =>
        q(
          'div',
          {
            ref: h,
            class: fe.value,
            role: 'tablist',
            onFocusin: Ge,
            onFocusout: Re,
          },
          [
            q(Dt, { onResize: $e }),
            q('div', { ref: y, class: w.value, onScroll: oe }, Ue(n.default)),
            q(Te, {
              class:
                'q-tabs__arrow q-tabs__arrow--left absolute q-tab__icon' +
                (L.value === !0 ? '' : ' q-tabs__arrow--faded'),
              name:
                t.leftIcon || e.iconSet.tabs[t.vertical === !0 ? 'up' : 'left'],
              onMousedownPassive: Pe,
              onTouchstartPassive: Pe,
              onMouseupPassive: J,
              onMouseleavePassive: J,
              onTouchendPassive: J,
            }),
            q(Te, {
              class:
                'q-tabs__arrow q-tabs__arrow--right absolute q-tab__icon' +
                (z.value === !0 ? '' : ' q-tabs__arrow--faded'),
              name:
                t.rightIcon ||
                e.iconSet.tabs[t.vertical === !0 ? 'down' : 'right'],
              onMousedownPassive: Be,
              onTouchstartPassive: Be,
              onMouseupPassive: J,
              onMouseleavePassive: J,
              onTouchendPassive: J,
            }),
          ]
        )
    );
  },
});
const ct = {
    left: !0,
    right: !0,
    up: !0,
    down: !0,
    horizontal: !0,
    vertical: !0,
  },
  pn = Object.keys(ct);
ct.all = !0;
function Qe(t) {
  const n = {};
  for (const u of pn) t[u] === !0 && (n[u] = !0);
  return Object.keys(n).length === 0
    ? ct
    : (n.horizontal === !0
        ? (n.left = n.right = !0)
        : n.left === !0 && n.right === !0 && (n.horizontal = !0),
      n.vertical === !0
        ? (n.up = n.down = !0)
        : n.up === !0 && n.down === !0 && (n.vertical = !0),
      n.horizontal === !0 && n.vertical === !0 && (n.all = !0),
      n);
}
function We(t, n) {
  return (
    n.event === void 0 &&
    t.target !== void 0 &&
    t.target.draggable !== !0 &&
    typeof n.handler == 'function' &&
    t.target.nodeName.toUpperCase() !== 'INPUT' &&
    (t.qClonedBy === void 0 || t.qClonedBy.indexOf(n.uid) === -1)
  );
}
function gn(t) {
  const n = [0.06, 6, 50];
  return (
    typeof t == 'string' &&
      t.length &&
      t.split(':').forEach((u, l) => {
        const e = parseFloat(u);
        e && (n[l] = e);
      }),
    n
  );
}
var yn = kt({
  name: 'touch-swipe',
  beforeMount(t, { value: n, arg: u, modifiers: l }) {
    if (l.mouse !== !0 && Z.has.touch !== !0) return;
    const e = l.mouseCapture === !0 ? 'Capture' : '',
      a = {
        handler: n,
        sensitivity: gn(u),
        direction: Qe(l),
        noop: wt,
        mouseStart(i) {
          We(i, a) &&
            xt(i) &&
            (le(a, 'temp', [
              [document, 'mousemove', 'move', `notPassive${e}`],
              [document, 'mouseup', 'end', 'notPassiveCapture'],
            ]),
            a.start(i, !0));
        },
        touchStart(i) {
          if (We(i, a)) {
            const d = i.target;
            le(a, 'temp', [
              [d, 'touchmove', 'move', 'notPassiveCapture'],
              [d, 'touchcancel', 'end', 'notPassiveCapture'],
              [d, 'touchend', 'end', 'notPassiveCapture'],
            ]),
              a.start(i);
          }
        },
        start(i, d) {
          Z.is.firefox === !0 && pe(t, !0);
          const p = ye(i);
          a.event = {
            x: p.left,
            y: p.top,
            time: Date.now(),
            mouse: d === !0,
            dir: !1,
          };
        },
        move(i) {
          if (a.event === void 0) return;
          if (a.event.dir !== !1) {
            ve(i);
            return;
          }
          const d = Date.now() - a.event.time;
          if (d === 0) return;
          const p = ye(i),
            f = p.left - a.event.x,
            c = Math.abs(f),
            g = p.top - a.event.y,
            h = Math.abs(g);
          if (a.event.mouse !== !0) {
            if (c < a.sensitivity[1] && h < a.sensitivity[1]) {
              a.end(i);
              return;
            }
          } else if (c < a.sensitivity[2] && h < a.sensitivity[2]) return;
          const y = c / d,
            b = h / d;
          a.direction.vertical === !0 &&
            c < h &&
            c < 100 &&
            b > a.sensitivity[0] &&
            (a.event.dir = g < 0 ? 'up' : 'down'),
            a.direction.horizontal === !0 &&
              c > h &&
              h < 100 &&
              y > a.sensitivity[0] &&
              (a.event.dir = f < 0 ? 'left' : 'right'),
            a.direction.up === !0 &&
              c < h &&
              g < 0 &&
              c < 100 &&
              b > a.sensitivity[0] &&
              (a.event.dir = 'up'),
            a.direction.down === !0 &&
              c < h &&
              g > 0 &&
              c < 100 &&
              b > a.sensitivity[0] &&
              (a.event.dir = 'down'),
            a.direction.left === !0 &&
              c > h &&
              f < 0 &&
              h < 100 &&
              y > a.sensitivity[0] &&
              (a.event.dir = 'left'),
            a.direction.right === !0 &&
              c > h &&
              f > 0 &&
              h < 100 &&
              y > a.sensitivity[0] &&
              (a.event.dir = 'right'),
            a.event.dir !== !1
              ? (ve(i),
                a.event.mouse === !0 &&
                  (document.body.classList.add('no-pointer-events--children'),
                  document.body.classList.add('non-selectable'),
                  _t(),
                  (a.styleCleanup = ($) => {
                    (a.styleCleanup = void 0),
                      document.body.classList.remove('non-selectable');
                    const L = () => {
                      document.body.classList.remove(
                        'no-pointer-events--children'
                      );
                    };
                    $ === !0 ? setTimeout(L, 50) : L();
                  })),
                a.handler({
                  evt: i,
                  touch: a.event.mouse !== !0,
                  mouse: a.event.mouse,
                  direction: a.event.dir,
                  duration: d,
                  distance: { x: c, y: h },
                }))
              : a.end(i);
        },
        end(i) {
          a.event !== void 0 &&
            (ge(a, 'temp'),
            Z.is.firefox === !0 && pe(t, !1),
            a.styleCleanup !== void 0 && a.styleCleanup(!0),
            i !== void 0 && a.event.dir !== !1 && ve(i),
            (a.event = void 0));
        },
      };
    if (((t.__qtouchswipe = a), l.mouse === !0)) {
      const i = l.mouseCapture === !0 || l.mousecapture === !0 ? 'Capture' : '';
      le(a, 'main', [[t, 'mousedown', 'mouseStart', `passive${i}`]]);
    }
    Z.has.touch === !0 &&
      le(a, 'main', [
        [
          t,
          'touchstart',
          'touchStart',
          `passive${l.capture === !0 ? 'Capture' : ''}`,
        ],
        [t, 'touchmove', 'noop', 'notPassiveCapture'],
      ]);
  },
  updated(t, n) {
    const u = t.__qtouchswipe;
    u !== void 0 &&
      (n.oldValue !== n.value &&
        (typeof n.value != 'function' && u.end(), (u.handler = n.value)),
      (u.direction = Qe(n.modifiers)));
  },
  beforeUnmount(t) {
    const n = t.__qtouchswipe;
    n !== void 0 &&
      (ge(n, 'main'),
      ge(n, 'temp'),
      Z.is.firefox === !0 && pe(t, !1),
      n.styleCleanup !== void 0 && n.styleCleanup(),
      delete t.__qtouchswipe);
  },
});
function Cn() {
  const t = new Map();
  return {
    getCache: function (n, u) {
      return t[n] === void 0 ? (t[n] = u) : t[n];
    },
    getCacheWithFn: function (n, u) {
      return t[n] === void 0 ? (t[n] = u()) : t[n];
    },
  };
}
const kn = { name: { required: !0 }, disable: Boolean },
  ht = {
    setup(t, { slots: n }) {
      return () =>
        q('div', { class: 'q-panel scroll', role: 'tabpanel' }, Ue(n.default));
    },
  },
  wn = {
    modelValue: { required: !0 },
    animated: Boolean,
    infinite: Boolean,
    swipeable: Boolean,
    vertical: Boolean,
    transitionPrev: String,
    transitionNext: String,
    transitionDuration: { type: [String, Number], default: 300 },
    keepAlive: Boolean,
    keepAliveInclude: [String, Array, RegExp],
    keepAliveExclude: [String, Array, RegExp],
    keepAliveMax: Number,
  },
  xn = ['update:modelValue', 'beforeTransition', 'transition'];
function _n() {
  const { props: t, emit: n, proxy: u } = Ce(),
    { getCacheWithFn: l } = Cn();
  let e, a;
  const i = R(null),
    d = R(null);
  function p(w) {
    const S = t.vertical === !0 ? 'up' : 'left';
    D((u.$q.lang.rtl === !0 ? -1 : 1) * (w.direction === S ? 1 : -1));
  }
  const f = r(() => [
      [
        yn,
        p,
        void 0,
        { horizontal: t.vertical !== !0, vertical: t.vertical, mouse: !0 },
      ],
    ]),
    c = r(
      () => t.transitionPrev || `slide-${t.vertical === !0 ? 'down' : 'right'}`
    ),
    g = r(
      () => t.transitionNext || `slide-${t.vertical === !0 ? 'up' : 'left'}`
    ),
    h = r(() => `--q-transition-duration: ${t.transitionDuration}ms`),
    y = r(() =>
      typeof t.modelValue == 'string' || typeof t.modelValue == 'number'
        ? t.modelValue
        : String(t.modelValue)
    ),
    b = r(() => ({
      include: t.keepAliveInclude,
      exclude: t.keepAliveExclude,
      max: t.keepAliveMax,
    })),
    $ = r(() => t.keepAliveInclude !== void 0 || t.keepAliveExclude !== void 0);
  me(
    () => t.modelValue,
    (w, S) => {
      const W = v(w) === !0 ? M(w) : -1;
      a !== !0 && F(W === -1 ? 0 : W < M(S) ? -1 : 1),
        i.value !== W &&
          ((i.value = W),
          n('beforeTransition', w, S),
          jt(() => {
            n('transition', w, S);
          }));
    }
  );
  function L() {
    D(1);
  }
  function z() {
    D(-1);
  }
  function O(w) {
    n('update:modelValue', w);
  }
  function v(w) {
    return w != null && w !== '';
  }
  function M(w) {
    return e.findIndex(
      (S) =>
        S.props.name === w && S.props.disable !== '' && S.props.disable !== !0
    );
  }
  function V() {
    return e.filter((w) => w.props.disable !== '' && w.props.disable !== !0);
  }
  function F(w) {
    const S =
      w !== 0 && t.animated === !0 && i.value !== -1
        ? 'q-transition--' + (w === -1 ? c.value : g.value)
        : null;
    d.value !== S && (d.value = S);
  }
  function D(w, S = i.value) {
    let W = S + w;
    for (; W > -1 && W < e.length; ) {
      const G = e[W];
      if (G !== void 0 && G.props.disable !== '' && G.props.disable !== !0) {
        F(w),
          (a = !0),
          n('update:modelValue', G.props.name),
          setTimeout(() => {
            a = !1;
          });
        return;
      }
      W += w;
    }
    t.infinite === !0 &&
      e.length > 0 &&
      S !== -1 &&
      S !== e.length &&
      D(w, w === -1 ? e.length : -1);
  }
  function Q() {
    const w = M(t.modelValue);
    return i.value !== w && (i.value = w), !0;
  }
  function U() {
    const w = v(t.modelValue) === !0 && Q() && e[i.value];
    return t.keepAlive === !0
      ? [
          q(Ot, b.value, [
            q(
              $.value === !0
                ? l(y.value, () => ({ ...ht, name: y.value }))
                : ht,
              { key: y.value, style: h.value },
              () => w
            ),
          ]),
        ]
      : [
          q(
            'div',
            {
              class: 'q-panel scroll',
              style: h.value,
              key: y.value,
              role: 'tabpanel',
            },
            [w]
          ),
        ];
  }
  function ie() {
    if (e.length !== 0)
      return t.animated === !0 ? [q(Nt, { name: d.value }, U)] : U();
  }
  function te(w) {
    return (
      (e = zt(Ue(w.default, [])).filter(
        (S) =>
          S.props !== null && S.props.slot === void 0 && v(S.props.name) === !0
      )),
      e.length
    );
  }
  function fe() {
    return e;
  }
  return (
    Object.assign(u, { next: L, previous: z, goTo: O }),
    {
      panelIndex: i,
      panelDirectives: f,
      updatePanelsList: te,
      updatePanelIndex: Q,
      getPanelContent: ie,
      getEnabledPanels: V,
      getPanels: fe,
      isValidPanelName: v,
      keepAliveProps: b,
      needsUniqueKeepAliveWrapper: $,
      goToPanelByOffset: D,
      goToPanel: O,
      nextPanel: L,
      previousPanel: z,
    }
  );
}
var Ne = Se({
    name: 'QTabPanel',
    props: kn,
    setup(t, { slots: n }) {
      return () =>
        q('div', { class: 'q-tab-panel', role: 'tabpanel' }, Ue(n.default));
    },
  }),
  qn = Se({
    name: 'QTabPanels',
    props: { ...wn, ...qt },
    emits: xn,
    setup(t, { slots: n }) {
      const u = Ce(),
        l = Tt(t, u.proxy.$q),
        { updatePanelsList: e, getPanelContent: a, panelDirectives: i } = _n(),
        d = r(
          () =>
            'q-tab-panels q-panel-parent' +
            (l.value === !0 ? ' q-tab-panels--dark q-dark' : '')
        );
      return () => (
        e(n),
        St('div', { class: d.value }, a(), 'pan', t.swipeable, () => i.value)
      );
    },
  });
function it(t, n, u) {
  const l = ye(t);
  let e,
    a = l.left - n.event.x,
    i = l.top - n.event.y,
    d = Math.abs(a),
    p = Math.abs(i);
  const f = n.direction;
  f.horizontal === !0 && f.vertical !== !0
    ? (e = a < 0 ? 'left' : 'right')
    : f.horizontal !== !0 && f.vertical === !0
    ? (e = i < 0 ? 'up' : 'down')
    : f.up === !0 && i < 0
    ? ((e = 'up'),
      d > p &&
        (f.left === !0 && a < 0
          ? (e = 'left')
          : f.right === !0 && a > 0 && (e = 'right')))
    : f.down === !0 && i > 0
    ? ((e = 'down'),
      d > p &&
        (f.left === !0 && a < 0
          ? (e = 'left')
          : f.right === !0 && a > 0 && (e = 'right')))
    : f.left === !0 && a < 0
    ? ((e = 'left'),
      d < p &&
        (f.up === !0 && i < 0
          ? (e = 'up')
          : f.down === !0 && i > 0 && (e = 'down')))
    : f.right === !0 &&
      a > 0 &&
      ((e = 'right'),
      d < p &&
        (f.up === !0 && i < 0
          ? (e = 'up')
          : f.down === !0 && i > 0 && (e = 'down')));
  let c = !1;
  if (e === void 0 && u === !1) {
    if (n.event.isFirst === !0 || n.event.lastDir === void 0) return {};
    (e = n.event.lastDir),
      (c = !0),
      e === 'left' || e === 'right'
        ? ((l.left -= a), (d = 0), (a = 0))
        : ((l.top -= i), (p = 0), (i = 0));
  }
  return {
    synthetic: c,
    payload: {
      evt: t,
      touch: n.event.mouse !== !0,
      mouse: n.event.mouse === !0,
      position: l,
      direction: e,
      isFirst: n.event.isFirst,
      isFinal: u === !0,
      duration: Date.now() - n.event.time,
      distance: { x: d, y: p },
      offset: { x: a, y: i },
      delta: { x: l.left - n.event.lastX, y: l.top - n.event.lastY },
    },
  };
}
let Tn = 0;
var Sn = kt({
  name: 'touch-pan',
  beforeMount(t, { value: n, modifiers: u }) {
    if (u.mouse !== !0 && Z.has.touch !== !0) return;
    function l(a, i) {
      u.mouse === !0 && i === !0
        ? ve(a)
        : (u.stop === !0 && ot(a), u.prevent === !0 && vt(a));
    }
    const e = {
      uid: 'qvtp_' + Tn++,
      handler: n,
      modifiers: u,
      direction: Qe(u),
      noop: wt,
      mouseStart(a) {
        We(a, e) &&
          xt(a) &&
          (le(e, 'temp', [
            [document, 'mousemove', 'move', 'notPassiveCapture'],
            [document, 'mouseup', 'end', 'passiveCapture'],
          ]),
          e.start(a, !0));
      },
      touchStart(a) {
        if (We(a, e)) {
          const i = a.target;
          le(e, 'temp', [
            [i, 'touchmove', 'move', 'notPassiveCapture'],
            [i, 'touchcancel', 'end', 'passiveCapture'],
            [i, 'touchend', 'end', 'passiveCapture'],
          ]),
            e.start(a);
        }
      },
      start(a, i) {
        if (
          (Z.is.firefox === !0 && pe(t, !0),
          (e.lastEvt = a),
          i === !0 || u.stop === !0)
        ) {
          if (
            e.direction.all !== !0 &&
            (i !== !0 ||
              (e.modifiers.mouseAllDir !== !0 &&
                e.modifiers.mousealldir !== !0))
          ) {
            const f =
              a.type.indexOf('mouse') > -1
                ? new MouseEvent(a.type, a)
                : new TouchEvent(a.type, a);
            a.defaultPrevented === !0 && vt(f),
              a.cancelBubble === !0 && ot(f),
              Object.assign(f, {
                qKeyEvent: a.qKeyEvent,
                qClickOutside: a.qClickOutside,
                qAnchorHandled: a.qAnchorHandled,
                qClonedBy:
                  a.qClonedBy === void 0 ? [e.uid] : a.qClonedBy.concat(e.uid),
              }),
              (e.initialEvent = { target: a.target, event: f });
          }
          ot(a);
        }
        const { left: d, top: p } = ye(a);
        e.event = {
          x: d,
          y: p,
          time: Date.now(),
          mouse: i === !0,
          detected: !1,
          isFirst: !0,
          isFinal: !1,
          lastX: d,
          lastY: p,
        };
      },
      move(a) {
        if (e.event === void 0) return;
        const i = ye(a),
          d = i.left - e.event.x,
          p = i.top - e.event.y;
        if (d === 0 && p === 0) return;
        e.lastEvt = a;
        const f = e.event.mouse === !0,
          c = () => {
            l(a, f);
            let y;
            u.preserveCursor !== !0 &&
              u.preservecursor !== !0 &&
              ((y = document.documentElement.style.cursor || ''),
              (document.documentElement.style.cursor = 'grabbing')),
              f === !0 &&
                document.body.classList.add('no-pointer-events--children'),
              document.body.classList.add('non-selectable'),
              _t(),
              (e.styleCleanup = (b) => {
                if (
                  ((e.styleCleanup = void 0),
                  y !== void 0 && (document.documentElement.style.cursor = y),
                  document.body.classList.remove('non-selectable'),
                  f === !0)
                ) {
                  const $ = () => {
                    document.body.classList.remove(
                      'no-pointer-events--children'
                    );
                  };
                  b !== void 0
                    ? setTimeout(() => {
                        $(), b();
                      }, 50)
                    : $();
                } else b !== void 0 && b();
              });
          };
        if (e.event.detected === !0) {
          e.event.isFirst !== !0 && l(a, e.event.mouse);
          const { payload: y, synthetic: b } = it(a, e, !1);
          y !== void 0 &&
            (e.handler(y) === !1
              ? e.end(a)
              : (e.styleCleanup === void 0 && e.event.isFirst === !0 && c(),
                (e.event.lastX = y.position.left),
                (e.event.lastY = y.position.top),
                (e.event.lastDir = b === !0 ? void 0 : y.direction),
                (e.event.isFirst = !1)));
          return;
        }
        if (
          e.direction.all === !0 ||
          (f === !0 &&
            (e.modifiers.mouseAllDir === !0 || e.modifiers.mousealldir === !0))
        ) {
          c(), (e.event.detected = !0), e.move(a);
          return;
        }
        const g = Math.abs(d),
          h = Math.abs(p);
        g !== h &&
          ((e.direction.horizontal === !0 && g > h) ||
          (e.direction.vertical === !0 && g < h) ||
          (e.direction.up === !0 && g < h && p < 0) ||
          (e.direction.down === !0 && g < h && p > 0) ||
          (e.direction.left === !0 && g > h && d < 0) ||
          (e.direction.right === !0 && g > h && d > 0)
            ? ((e.event.detected = !0), e.move(a))
            : e.end(a, !0));
      },
      end(a, i) {
        if (e.event !== void 0) {
          if ((ge(e, 'temp'), Z.is.firefox === !0 && pe(t, !1), i === !0))
            e.styleCleanup !== void 0 && e.styleCleanup(),
              e.event.detected !== !0 &&
                e.initialEvent !== void 0 &&
                e.initialEvent.target.dispatchEvent(e.initialEvent.event);
          else if (e.event.detected === !0) {
            e.event.isFirst === !0 &&
              e.handler(it(a === void 0 ? e.lastEvt : a, e).payload);
            const { payload: d } = it(a === void 0 ? e.lastEvt : a, e, !0),
              p = () => {
                e.handler(d);
              };
            e.styleCleanup !== void 0 ? e.styleCleanup(p) : p();
          }
          (e.event = void 0), (e.initialEvent = void 0), (e.lastEvt = void 0);
        }
      },
    };
    if (((t.__qtouchpan = e), u.mouse === !0)) {
      const a = u.mouseCapture === !0 || u.mousecapture === !0 ? 'Capture' : '';
      le(e, 'main', [[t, 'mousedown', 'mouseStart', `passive${a}`]]);
    }
    Z.has.touch === !0 &&
      le(e, 'main', [
        [
          t,
          'touchstart',
          'touchStart',
          `passive${u.capture === !0 ? 'Capture' : ''}`,
        ],
        [t, 'touchmove', 'noop', 'notPassiveCapture'],
      ]);
  },
  updated(t, n) {
    const u = t.__qtouchpan;
    u !== void 0 &&
      (n.oldValue !== n.value &&
        (typeof value != 'function' && u.end(), (u.handler = n.value)),
      (u.direction = Qe(n.modifiers)));
  },
  beforeUnmount(t) {
    const n = t.__qtouchpan;
    n !== void 0 &&
      (n.event !== void 0 && n.end(),
      ge(n, 'main'),
      ge(n, 'temp'),
      Z.is.firefox === !0 && pe(t, !1),
      n.styleCleanup !== void 0 && n.styleCleanup(),
      delete t.__qtouchpan);
  },
});
function be(t, n, u) {
  return u <= n ? n : Math.min(u, Math.max(n, t));
}
const bt = 'q-slider__marker-labels',
  $n = (t) => ({ value: t }),
  Mn = ({ marker: t }) =>
    q('div', { key: t.value, style: t.style, class: t.classes }, t.label),
  Mt = [34, 37, 40, 33, 39, 38],
  Pn = {
    ...qt,
    ...Qt,
    min: { type: Number, default: 0 },
    max: { type: Number, default: 100 },
    innerMin: Number,
    innerMax: Number,
    step: { type: Number, default: 1, validator: (t) => t >= 0 },
    snap: Boolean,
    vertical: Boolean,
    reverse: Boolean,
    hideSelection: Boolean,
    color: String,
    markerLabelsClass: String,
    label: Boolean,
    labelColor: String,
    labelTextColor: String,
    labelAlways: Boolean,
    switchLabelSide: Boolean,
    markers: [Boolean, Number],
    markerLabels: [Boolean, Array, Object, Function],
    switchMarkerLabelsSide: Boolean,
    trackImg: String,
    trackColor: String,
    innerTrackImg: String,
    innerTrackColor: String,
    selectionColor: String,
    selectionImg: String,
    thumbSize: { type: String, default: '20px' },
    trackSize: { type: String, default: '4px' },
    disable: Boolean,
    readonly: Boolean,
    dense: Boolean,
    tabindex: [String, Number],
    thumbColor: String,
    thumbPath: {
      type: String,
      default: 'M 4, 10 a 6,6 0 1,0 12,0 a 6,6 0 1,0 -12,0',
    },
  },
  Bn = ['pan', 'update:modelValue', 'change'];
function Ln({
  updateValue: t,
  updatePosition: n,
  getDragging: u,
  formAttrs: l,
}) {
  const {
      props: e,
      emit: a,
      slots: i,
      proxy: { $q: d },
    } = Ce(),
    p = Tt(e, d),
    f = Kt(l),
    c = R(!1),
    g = R(!1),
    h = R(!1),
    y = R(!1),
    b = r(() => (e.vertical === !0 ? '--v' : '--h')),
    $ = r(() => '-' + (e.switchLabelSide === !0 ? 'switched' : 'standard')),
    L = r(() =>
      e.vertical === !0 ? e.reverse === !0 : e.reverse !== (d.lang.rtl === !0)
    ),
    z = r(() =>
      isNaN(e.innerMin) === !0 || e.innerMin < e.min ? e.min : e.innerMin
    ),
    O = r(() =>
      isNaN(e.innerMax) === !0 || e.innerMax > e.max ? e.max : e.innerMax
    ),
    v = r(() => e.disable !== !0 && e.readonly !== !0 && z.value < O.value),
    M = r(() => (String(e.step).trim().split('.')[1] || '').length),
    V = r(() => (e.step === 0 ? 1 : e.step)),
    F = r(() => (v.value === !0 ? e.tabindex || 0 : -1)),
    D = r(() => e.max - e.min),
    Q = r(() => O.value - z.value),
    U = r(() => ke(z.value)),
    ie = r(() => ke(O.value)),
    te = r(() =>
      e.vertical === !0
        ? L.value === !0
          ? 'bottom'
          : 'top'
        : L.value === !0
        ? 'right'
        : 'left'
    ),
    fe = r(() => (e.vertical === !0 ? 'height' : 'width')),
    w = r(() => (e.vertical === !0 ? 'width' : 'height')),
    S = r(() => (e.vertical === !0 ? 'vertical' : 'horizontal')),
    W = r(() => {
      const o = {
        role: 'slider',
        'aria-valuemin': z.value,
        'aria-valuemax': O.value,
        'aria-orientation': S.value,
        'data-step': e.step,
      };
      return (
        e.disable === !0
          ? (o['aria-disabled'] = 'true')
          : e.readonly === !0 && (o['aria-readonly'] = 'true'),
        o
      );
    }),
    G = r(
      () =>
        `q-slider q-slider${b.value} q-slider--${
          c.value === !0 ? '' : 'in'
        }active inline no-wrap ` +
        (e.vertical === !0 ? 'row' : 'column') +
        (e.disable === !0
          ? ' disabled'
          : ' q-slider--enabled' +
            (v.value === !0 ? ' q-slider--editable' : '')) +
        (h.value === 'both' ? ' q-slider--focus' : '') +
        (e.label || e.labelAlways === !0 ? ' q-slider--label' : '') +
        (e.labelAlways === !0 ? ' q-slider--label-always' : '') +
        (p.value === !0 ? ' q-slider--dark' : '') +
        (e.dense === !0 ? ' q-slider--dense q-slider--dense' + b.value : '')
    );
  function ne(o) {
    const C = 'q-slider__' + o;
    return `${C} ${C}${b.value} ${C}${b.value}${$.value}`;
  }
  function se(o) {
    const C = 'q-slider__' + o;
    return `${C} ${C}${b.value}`;
  }
  const $e = r(() => {
      const o = e.selectionColor || e.color;
      return (
        'q-slider__selection absolute' + (o !== void 0 ? ` text-${o}` : '')
      );
    }),
    He = r(() => se('markers') + ' absolute overflow-hidden'),
    ae = r(() => se('track-container')),
    oe = r(() => ne('pin')),
    Me = r(() => ne('label')),
    Pe = r(() => ne('text-container')),
    Be = r(
      () =>
        ne('marker-labels-container') +
        (e.markerLabelsClass !== void 0 ? ` ${e.markerLabelsClass}` : '')
    ),
    J = r(
      () =>
        'q-slider__track relative-position no-outline' +
        (e.trackColor !== void 0 ? ` bg-${e.trackColor}` : '')
    ),
    Xe = r(() => {
      const o = { [w.value]: e.trackSize };
      return (
        e.trackImg !== void 0 &&
          (o.backgroundImage = `url(${e.trackImg}) !important`),
        o
      );
    }),
    Ye = r(
      () =>
        'q-slider__inner absolute' +
        (e.innerTrackColor !== void 0 ? ` bg-${e.innerTrackColor}` : '')
    ),
    Le = r(() => {
      const o = {
        [te.value]: `${100 * U.value}%`,
        [fe.value]: `${100 * (ie.value - U.value)}%`,
      };
      return (
        e.innerTrackImg !== void 0 &&
          (o.backgroundImage = `url(${e.innerTrackImg}) !important`),
        o
      );
    });
  function Ae(o) {
    const { min: C, max: P, step: E } = e;
    let K = C + o * (P - C);
    if (E > 0) {
      const re = (K - C) % E;
      K += (Math.abs(re) >= E / 2 ? (re < 0 ? -1 : 1) * E : 0) - re;
    }
    return (
      M.value > 0 && (K = parseFloat(K.toFixed(M.value))),
      be(K, z.value, O.value)
    );
  }
  function ke(o) {
    return D.value === 0 ? 0 : (o - e.min) / D.value;
  }
  function Ge(o, C) {
    const P = ye(o),
      E =
        e.vertical === !0
          ? be((P.top - C.top) / C.height, 0, 1)
          : be((P.left - C.left) / C.width, 0, 1);
    return be(L.value === !0 ? 1 - E : E, U.value, ie.value);
  }
  const Re = r(() => (Wt(e.markers) === !0 ? e.markers : V.value)),
    ue = r(() => {
      const o = [],
        C = Re.value,
        P = e.max;
      let E = e.min;
      do o.push(E), (E += C);
      while (E < P);
      return o.push(P), o;
    }),
    we = r(() => {
      const o = ` ${bt}${b.value}-`;
      return (
        bt +
        `${o}${e.switchMarkerLabelsSide === !0 ? 'switched' : 'standard'}${o}${
          L.value === !0 ? 'rtl' : 'ltr'
        }`
      );
    }),
    xe = r(() =>
      e.markerLabels === !1
        ? null
        : Ve(e.markerLabels).map((o, C) => ({
            index: C,
            value: o.value,
            label: o.label || o.value,
            classes: we.value + (o.classes !== void 0 ? ' ' + o.classes : ''),
            style: { ..._e(o.value), ...(o.style || {}) },
          }))
    ),
    Ie = r(() => ({
      markerList: xe.value,
      markerMap: s.value,
      classes: we.value,
      getStyle: _e,
    })),
    Ee = r(() => {
      if (Q.value !== 0) {
        const o = (100 * Re.value) / Q.value;
        return {
          ...Le.value,
          backgroundSize: e.vertical === !0 ? `2px ${o}%` : `${o}% 2px`,
        };
      }
      return null;
    });
  function Ve(o) {
    if (o === !1) return null;
    if (o === !0) return ue.value.map($n);
    if (typeof o == 'function')
      return ue.value.map((P) => {
        const E = o(P);
        return rt(E) === !0 ? { ...E, value: P } : { value: P, label: E };
      });
    const C = ({ value: P }) => P >= e.min && P <= e.max;
    return Array.isArray(o) === !0
      ? o.map((P) => (rt(P) === !0 ? P : { value: P })).filter(C)
      : Object.keys(o)
          .map((P) => {
            const E = o[P],
              K = Number(P);
            return rt(E) === !0 ? { ...E, value: K } : { value: K, label: E };
          })
          .filter(C);
  }
  function _e(o) {
    return { [te.value]: `${(100 * (o - e.min)) / D.value}%` };
  }
  const s = r(() => {
    if (e.markerLabels === !1) return null;
    const o = {};
    return (
      xe.value.forEach((C) => {
        o[C.value] = C;
      }),
      o
    );
  });
  function m() {
    if (i['marker-label-group'] !== void 0)
      return i['marker-label-group'](Ie.value);
    const o = i['marker-label'] || Mn;
    return xe.value.map((C) => o({ marker: C, ...Ie.value }));
  }
  const k = r(() => [
    [
      Sn,
      I,
      void 0,
      { [S.value]: !0, prevent: !0, stop: !0, mouse: !0, mouseAllDir: !0 },
    ],
  ]);
  function I(o) {
    o.isFinal === !0
      ? (y.value !== void 0 &&
          (n(o.evt),
          o.touch === !0 && t(!0),
          (y.value = void 0),
          a('pan', 'end')),
        (c.value = !1),
        (h.value = !1))
      : o.isFirst === !0
      ? ((y.value = u(o.evt)), n(o.evt), t(), (c.value = !0), a('pan', 'start'))
      : (n(o.evt), t());
  }
  function A() {
    h.value = !1;
  }
  function T(o) {
    n(o, u(o)),
      t(),
      (g.value = !0),
      (c.value = !0),
      document.addEventListener('mouseup', x, !0);
  }
  function x() {
    (g.value = !1),
      (c.value = !1),
      t(!0),
      A(),
      document.removeEventListener('mouseup', x, !0);
  }
  function j(o) {
    n(o, u(o)), t(!0);
  }
  function X(o) {
    Mt.includes(o.keyCode) && t(!0);
  }
  function qe(o) {
    if (e.vertical === !0) return null;
    const C = d.lang.rtl !== e.reverse ? 1 - o : o;
    return {
      transform: `translateX(calc(${2 * C - 1} * ${e.thumbSize} / 2 + ${
        50 - 100 * C
      }%))`,
    };
  }
  function Je(o) {
    const C = r(() =>
        g.value === !1 && (h.value === o.focusValue || h.value === 'both')
          ? ' q-slider--focus'
          : ''
      ),
      P = r(
        () =>
          `q-slider__thumb q-slider__thumb${b.value} q-slider__thumb${
            b.value
          }-${L.value === !0 ? 'rtl' : 'ltr'} absolute non-selectable` +
          C.value +
          (o.thumbColor.value !== void 0 ? ` text-${o.thumbColor.value}` : '')
      ),
      E = r(() => ({
        width: e.thumbSize,
        height: e.thumbSize,
        [te.value]: `${100 * o.ratio.value}%`,
        zIndex: h.value === o.focusValue ? 2 : void 0,
      })),
      K = r(() =>
        o.labelColor.value !== void 0 ? ` text-${o.labelColor.value}` : ''
      ),
      re = r(() => qe(o.ratio.value)),
      et = r(
        () =>
          'q-slider__text' +
          (o.labelTextColor.value !== void 0
            ? ` text-${o.labelTextColor.value}`
            : '')
      );
    return () => {
      const tt = [
        q(
          'svg',
          {
            class: 'q-slider__thumb-shape absolute-full',
            viewBox: '0 0 20 20',
            'aria-hidden': 'true',
          },
          [q('path', { d: e.thumbPath })]
        ),
        q('div', { class: 'q-slider__focus-ring fit' }),
      ];
      return (
        (e.label === !0 || e.labelAlways === !0) &&
          (tt.push(
            q(
              'div',
              { class: oe.value + ' absolute fit no-pointer-events' + K.value },
              [
                q(
                  'div',
                  { class: Me.value, style: { minWidth: e.thumbSize } },
                  [
                    q('div', { class: Pe.value, style: re.value }, [
                      q('span', { class: et.value }, o.label.value),
                    ]),
                  ]
                ),
              ]
            )
          ),
          e.name !== void 0 && e.disable !== !0 && f(tt, 'push')),
        q('div', { class: P.value, style: E.value, ...o.getNodeData() }, tt)
      );
    };
  }
  function Ze(o, C, P, E) {
    const K = [];
    e.innerTrackColor !== 'transparent' &&
      K.push(q('div', { key: 'inner', class: Ye.value, style: Le.value })),
      e.selectionColor !== 'transparent' &&
        K.push(q('div', { key: 'selection', class: $e.value, style: o.value })),
      e.markers !== !1 &&
        K.push(q('div', { key: 'marker', class: He.value, style: Ee.value })),
      E(K);
    const re = [
      St(
        'div',
        { key: 'trackC', class: ae.value, tabindex: C.value, ...P.value },
        [q('div', { class: J.value, style: Xe.value }, K)],
        'slide',
        v.value,
        () => k.value
      ),
    ];
    if (e.markerLabels !== !1) {
      const et = e.switchMarkerLabelsSide === !0 ? 'unshift' : 'push';
      re[et](q('div', { key: 'markerL', class: Be.value }, m()));
    }
    return re;
  }
  return (
    Ke(() => {
      document.removeEventListener('mouseup', x, !0);
    }),
    {
      state: {
        active: c,
        focus: h,
        preventFocus: g,
        dragging: y,
        editable: v,
        classes: G,
        tabindex: F,
        attributes: W,
        step: V,
        decimals: M,
        trackLen: D,
        innerMin: z,
        innerMinRatio: U,
        innerMax: O,
        innerMaxRatio: ie,
        positionProp: te,
        sizeProp: fe,
        isReversed: L,
      },
      methods: {
        onActivate: T,
        onMobileClick: j,
        onBlur: A,
        onKeyup: X,
        getContent: Ze,
        getThumbRenderFn: Je,
        convertRatioToModel: Ae,
        convertModelToRatio: ke,
        getDraggingRatio: Ge,
      },
    }
  );
}
const An = () => ({});
var Rn = Se({
  name: 'QSlider',
  props: {
    ...Pn,
    modelValue: {
      required: !0,
      default: null,
      validator: (t) => typeof t == 'number' || t === null,
    },
    labelValue: [String, Number],
  },
  emits: Bn,
  setup(t, { emit: n }) {
    const {
        proxy: { $q: u },
      } = Ce(),
      { state: l, methods: e } = Ln({
        updateValue: b,
        updatePosition: L,
        getDragging: $,
        formAttrs: Ut(t),
      }),
      a = R(null),
      i = R(0),
      d = R(0);
    function p() {
      d.value =
        t.modelValue === null
          ? l.innerMin.value
          : be(t.modelValue, l.innerMin.value, l.innerMax.value);
    }
    me(() => `${t.modelValue}|${l.innerMin.value}|${l.innerMax.value}`, p), p();
    const f = r(() => e.convertModelToRatio(d.value)),
      c = r(() => (l.active.value === !0 ? i.value : f.value)),
      g = r(() => {
        const v = {
          [l.positionProp.value]: `${100 * l.innerMinRatio.value}%`,
          [l.sizeProp.value]: `${100 * (c.value - l.innerMinRatio.value)}%`,
        };
        return (
          t.selectionImg !== void 0 &&
            (v.backgroundImage = `url(${t.selectionImg}) !important`),
          v
        );
      }),
      h = e.getThumbRenderFn({
        focusValue: !0,
        getNodeData: An,
        ratio: c,
        label: r(() => (t.labelValue !== void 0 ? t.labelValue : d.value)),
        thumbColor: r(() => t.thumbColor || t.color),
        labelColor: r(() => t.labelColor),
        labelTextColor: r(() => t.labelTextColor),
      }),
      y = r(() =>
        l.editable.value !== !0
          ? {}
          : u.platform.is.mobile === !0
          ? { onClick: e.onMobileClick }
          : {
              onMousedown: e.onActivate,
              onFocus: z,
              onBlur: e.onBlur,
              onKeydown: O,
              onKeyup: e.onKeyup,
            }
      );
    function b(v) {
      d.value !== t.modelValue && n('update:modelValue', d.value),
        v === !0 && n('change', d.value);
    }
    function $() {
      return a.value.getBoundingClientRect();
    }
    function L(v, M = l.dragging.value) {
      const V = e.getDraggingRatio(v, M);
      (d.value = e.convertRatioToModel(V)),
        (i.value =
          t.snap !== !0 || t.step === 0 ? V : e.convertModelToRatio(d.value));
    }
    function z() {
      l.focus.value = !0;
    }
    function O(v) {
      if (!Mt.includes(v.keyCode)) return;
      ve(v);
      const M = ([34, 33].includes(v.keyCode) ? 10 : 1) * l.step.value,
        V =
          ([34, 37, 40].includes(v.keyCode) ? -1 : 1) *
          (l.isReversed.value === !0 ? -1 : 1) *
          (t.vertical === !0 ? -1 : 1) *
          M;
      (d.value = be(
        parseFloat((d.value + V).toFixed(l.decimals.value)),
        l.innerMin.value,
        l.innerMax.value
      )),
        b();
    }
    return () => {
      const v = e.getContent(g, l.tabindex, y, (M) => {
        M.push(h());
      });
      return q(
        'div',
        {
          ref: a,
          class:
            l.classes.value +
            (t.modelValue === null ? ' q-slider--no-value' : ''),
          ...l.attributes.value,
          'aria-valuenow': t.modelValue,
        },
        v
      );
    };
  },
});
const ee = Ht('chessboard', {
  state: () => ({ animations: !0, orientation: 'white', piecesVisible: !1 }),
  actions: {
    rotateBoard() {
      this.orientation = this.orientation === 'white' ? 'black' : 'white';
    },
  },
});
_().$onAction(({ name: t }) => {
  t === 'start' && ee().orientation !== _().playerColor && ee().rotateBoard();
});
const In = { class: 'column items-center q-gutter-sm' },
  pt = ut({
    __name: 'GameControls',
    props: {
      showSetup: { Boolean, default: !0 },
      showNewGame: { Boolean, default: !0 },
    },
    setup(t) {
      const n = Xt();
      function u() {
        e('black');
      }
      function l() {
        e('white');
      }
      async function e(f) {
        _().new({ playerColor: f || 'white' });
      }
      const a = r(() => _().engineLevel);
      function i(f) {
        _().$patch({ engineLevel: f });
      }
      function d() {
        n.push({ name: 'setup-board', params: { language: je().language } });
      }
      function p() {
        ee().rotateBoard();
      }
      return (f, c) => (
        de(),
        Oe('div', In, [
          t.showNewGame
            ? (de(),
              lt(
                he,
                { key: 0, onClick: l, color: 'primary' },
                {
                  default: Y(() => [De(ce(f.$t('New game as white')), 1)]),
                  _: 1,
                }
              ))
            : ze('', !0),
          t.showNewGame
            ? (de(),
              lt(
                he,
                { key: 1, onClick: u, color: 'primary' },
                {
                  default: Y(() => [De(ce(f.$t('New game as black')), 1)]),
                  _: 1,
                }
              ))
            : ze('', !0),
          t.showSetup
            ? (de(),
              lt(
                he,
                { key: 2, onClick: d, color: 'primary' },
                { default: Y(() => [De(ce(f.$t('Setup board')), 1)]), _: 1 }
              ))
            : ze('', !0),
          H('div', null, [
            H('div', null, ce(f.$t('Engine level:')) + ' ' + ce(N(a)), 1),
            B(
              Rn,
              {
                'model-value': N(a),
                'onUpdate:modelValue': c[0] || (c[0] = (g) => i(g)),
                min: 0,
                max: 4,
                id: 'aiLevel',
              },
              null,
              8,
              ['model-value']
            ),
          ]),
          B(
            he,
            { onClick: p, color: 'primary' },
            { default: Y(() => [De(ce(f.$t('Rotate board')), 1)]), _: 1 }
          ),
          B(rn),
        ])
      );
    },
  }),
  En = (t) =>
    new Promise((n) => {
      let u = t.length;
      for (let l = 0; l < t.length; l++) {
        const e = new Image();
        (e.onload = function () {
          u--, u <= 0 && n();
        }),
          (e.src = t[l]);
      }
    }),
  Vn = ut({
    __name: 'ChessBoard',
    props: { piecesVisible: { type: Boolean, default: !0 } },
    setup(t) {
      let n;
      const u = R(),
        l = R();
      function e(c, g) {
        const h = _().position.moves;
        if (!_().gameOngoing || !h.find((y) => y.from === c && y.to === g))
          return 'snapback';
      }
      async function a(c, g) {
        (await _().playerMove({ from: c, to: g })).isValid ||
          console.warn(
            'Move result is invalid although move was declared valid!'
          ),
          n.setDraggable(!1);
      }
      function i(c, g) {
        const h = {
          onDrop: e,
          orientation: c,
          onSnapEnd: a,
          position: g || 'start',
          onDragStart: () => n.removeHighlighting(),
        };
        document.querySelector('.g-board') &&
          (d(), (n = new un('.g-board', h)), f());
      }
      function d() {
        if (u.value && l.value) {
          const c = u.value.getBoundingClientRect().width,
            g = u.value.getBoundingClientRect().height;
          l.value.setAttribute('width', Math.min(c, g) + 'px'),
            l.value.setAttribute('height', Math.min(c, g) + 'px');
        }
      }
      _().$onAction(({ name: c, after: g }) => {
        g(() => {
          if (
            !!n &&
            (c === 'playerMove' && n.position(_().position.fen, !1),
            c === 'historyMoveToIdx' || c === 'aiMove' || c === 'new')
          ) {
            const h = _().lastOpponentMove;
            n.removeHighlighting(),
              p(h),
              n.position(
                _().position.fen,
                ee().animations && c !== 'historyMoveToIdx'
              ),
              n.setDraggable(
                !_().position.isFinished &&
                  _().playerColor === _().position.turn
              );
          }
        });
      }),
        ee().$onAction(({ name: c, after: g }) => {
          g(() => {
            c === 'rotateBoard' && n && n.orientation(ee().orientation);
          });
        }),
        st(async () => {
          await En(
            [
              'bB',
              'bK',
              'bN',
              'bP',
              'bQ',
              'bR',
              'wB',
              'wK',
              'wN',
              'wP',
              'wQ',
              'wR',
            ].map((c) => `/img/chesspieces/wikipedia/${c}.png`)
          );
        });
      function p(c) {
        c &&
          (n.highlight(c.from.toUpperCase()), n.highlight(c.to.toUpperCase()));
      }
      function f() {
        n &&
          (n.orientation(ee().orientation),
          n.setDraggable(
            !_().position.isFinished && _().playerColor === _().position.turn
          ));
      }
      return (
        Ct(() => {
          i(_().playerColor, _().position.fen),
            setTimeout(() => {
              const c = _().lastOpponentMove;
              c && p(c);
            });
        }),
        yt(() => {
          n && (n.destroy(), (n = void 0));
        }),
        (c, g) => (
          de(),
          Oe(
            'div',
            {
              ref_key: 'frame',
              ref: u,
              class: 'absolute-full column items-center justify-center',
            },
            [
              H(
                'div',
                {
                  ref_key: 'boardWrapper',
                  ref: l,
                  class: Yt([
                    'g-board relative-position',
                    t.piecesVisible ? '' : 'g-hide-pieces',
                  ]),
                },
                null,
                2
              ),
            ],
            512
          )
        )
      );
    },
  });
const Dn = { class: 'column flex-1' },
  Fn = {
    class: 'row flex-1',
    style: { 'max-height': '100%', overflow: 'hidden' },
  },
  Nn = {
    class: 'col-lg-2 col-md-3 q-pb-sm sm-hide xs-hide',
    style: { 'max-height': '100%', 'overflow-y': 'hidden' },
  },
  zn = {
    class:
      'col-lg-7 col-md-6 col-sm-12 col-xs-12 column justify-start align-start',
    style: { 'max-height': '100%', 'max-width': '100%' },
  },
  jn = { class: 'row items-center justify-between overflow-hidden' },
  On = H('div', null, null, -1),
  Qn = { class: 'flex-1 relative-position overflow-hidden' },
  Wn = {
    class:
      'absolute-full no-pointer-events column justify-center items-center q-mx-auto',
    style: { 'aspect-ratio': '1', 'max-height': '100%', 'max-width': '100%' },
  },
  Kn = {
    key: 0,
    class: 'text-h4 bg-secondary q-pa-md non-selectable',
    style: { opacity: '0.7' },
  },
  Un = {
    class: 'col-3 q-pt-lg items-center column justify-center xs-hide sm-hide',
  },
  Zn = ut({
    __name: 'PlayChess',
    setup(t) {
      const n = R('chess-board'),
        u = Jt();
      st(() => {
        const b = u.query.difficulty;
        b && _().$patch({ engineLevel: Number(b) }),
          _().$subscribe(() => {
            _().position.isFinished && (n.value = 'chess-board');
          }),
          _().$onAction(({ name: $ }) => {
            $ === 'playerMove' && je().neverPlayed && d();
          }),
          _().start();
      }),
        Ke(() => {
          _().stopGame();
        });
      const l = r(() => ee().piecesVisible);
      function e() {
        _().historyBack();
      }
      function a() {
        _().historyForward();
      }
      function i() {
        ee().$patch({ piecesVisible: !ee().piecesVisible });
      }
      function d() {
        je().playerStartedPlaying();
      }
      const p = r(() => _().position.isFinished),
        f = r(() => _().position.checkMate),
        c = r(() => !_().playersTurn),
        g = r(() => _().position.indexInHistory < 1),
        h = r(
          () =>
            _().position.indexInHistory === _().position.moveHistory.length - 1
        ),
        y = r(() => je().neverPlayed);
      return (b, $) => (
        de(),
        Oe('div', Dn, [
          H('div', Fn, [
            H('div', Nn, [
              B(
                Gt,
                { class: 'q-px-sm q-ma-sm', style: { height: '100%' } },
                { default: Y(() => [B(mt)]), _: 1 }
              ),
            ]),
            H('div', zn, [
              B(
                bn,
                {
                  modelValue: n.value,
                  'onUpdate:modelValue': $[0] || ($[0] = (L) => (n.value = L)),
                  style: { 'flex-wrap': 'wrap' },
                },
                {
                  default: Y(() => [
                    B(
                      Fe,
                      { name: 'chess-board', label: b.$t('Chess board') },
                      null,
                      8,
                      ['label']
                    ),
                    B(
                      Fe,
                      { name: 'hide-board', label: b.$t('Move selection') },
                      null,
                      8,
                      ['label']
                    ),
                    B(
                      Fe,
                      {
                        name: 'history',
                        label: b.$t('History'),
                        class: 'md-hide lg-hide xl-hide xxl-hide',
                      },
                      null,
                      8,
                      ['label']
                    ),
                    B(
                      Fe,
                      {
                        name: 'settings',
                        label: b.$t('Settings'),
                        class: 'md-hide lg-hide xl-hide xxl-hide',
                      },
                      null,
                      8,
                      ['label']
                    ),
                  ]),
                  _: 1,
                },
                8,
                ['modelValue']
              ),
              B(
                qn,
                {
                  modelValue: n.value,
                  'onUpdate:modelValue': $[1] || ($[1] = (L) => (n.value = L)),
                  animated: '',
                  'keep-alive': !0,
                  class: 'flex-1 column shadow-2',
                },
                {
                  default: Y(() => [
                    B(
                      Ne,
                      {
                        name: 'chess-board',
                        class:
                          'column flex-1 q-py-xs q-px-xs-xs q-px-sm-xs overflow-hidden',
                      },
                      {
                        default: Y(() => [
                          H('div', jn, [
                            On,
                            H('div', null, [
                              B(
                                Zt,
                                {
                                  'model-value': N(l),
                                  'onUpdate:modelValue': i,
                                  'checked-icon': N(en),
                                  color: 'secondary',
                                  'unchecked-icon': N(tn),
                                },
                                null,
                                8,
                                [
                                  'model-value',
                                  'checked-icon',
                                  'unchecked-icon',
                                ]
                              ),
                              B(
                                he,
                                {
                                  icon: N(nn),
                                  flat: '',
                                  onClick: e,
                                  disable: N(g) || N(c),
                                  style: {
                                    'transition-duration': '0.5s',
                                    'transition-delay': '0.2s',
                                  },
                                },
                                null,
                                8,
                                ['icon', 'disable']
                              ),
                              B(
                                he,
                                {
                                  icon: N(an),
                                  flat: '',
                                  onClick: a,
                                  disable: N(h) || N(c),
                                  style: {
                                    'transition-duration': '0.5s',
                                    'transition-delay': '0.2s',
                                  },
                                },
                                null,
                                8,
                                ['icon', 'disable']
                              ),
                            ]),
                            B(
                              ln,
                              {
                                style: ft([
                                  {
                                    opacity: N(c) && !N(p) ? 1 : 0,
                                    'transition-delay': N(c) ? '0.75s' : '0s',
                                  },
                                  {
                                    'transition-duration': '0.5s',
                                    'transition-property': 'opacity',
                                  },
                                ]),
                                color: 'gray',
                                size: '2em',
                              },
                              null,
                              8,
                              ['style']
                            ),
                          ]),
                          H('div', Qn, [
                            B(Vn, { 'pieces-visible': N(l) || N(p) }, null, 8, [
                              'pieces-visible',
                            ]),
                            B(
                              Te,
                              {
                                name: N(on),
                                color: 'red',
                                class: 'text-h1 instructions no-pointer-events',
                                style: ft([
                                  { display: N(y) ? 'block' : 'none' },
                                  {
                                    'transition-duration': '1s',
                                    opacity: '1',
                                    position: 'absolute',
                                  },
                                ]),
                              },
                              null,
                              8,
                              ['name', 'style']
                            ),
                            H('div', Wn, [
                              N(p)
                                ? (de(),
                                  Oe(
                                    'div',
                                    Kn,
                                    ce(b.$t(N(f) ? 'Checkmate' : 'Draw')),
                                    1
                                  ))
                                : ze('', !0),
                            ]),
                          ]),
                        ]),
                        _: 1,
                      }
                    ),
                    B(
                      Ne,
                      { name: 'hide-board' },
                      { default: Y(() => [B(sn)]), _: 1 }
                    ),
                    B(
                      Ne,
                      { name: 'history' },
                      { default: Y(() => [B(mt)]), _: 1 }
                    ),
                    B(
                      Ne,
                      { name: 'settings' },
                      { default: Y(() => [B(pt)]), _: 1 }
                    ),
                  ]),
                  _: 1,
                },
                8,
                ['modelValue']
              ),
            ]),
            H('div', Un, [B(pt)]),
          ]),
        ])
      );
    },
  });
export { Zn as default };
