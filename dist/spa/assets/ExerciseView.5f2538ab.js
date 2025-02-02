import { _ as re } from './ExerciseHeader.7b1635f9.js';
import {
  aB as z,
  aH as ne,
  aI as N,
  aJ as H,
  aK as ae,
  aL as y,
  aM as U,
  aN as oe,
  aO as j,
  aP as V,
  aQ as g,
  aR as se,
  aS as ie,
  aT as le,
  aU as ue,
  aV as ce,
  aW as de,
  aX as fe,
  _ as ve,
  d as w,
  o as p,
  e as S,
  f as $,
  t as G,
  h as m,
  g as d,
  aY as he,
  x as X,
  P as E,
  a as l,
  G as _,
  L as P,
  ac as me,
  aZ as _e,
  ad as ye,
  a_ as ge,
  M as Y,
  w as L,
  A as F,
  r as I,
  a$ as xe,
  U as b,
  B as be,
  X as we,
  D as pe,
  b0 as Se,
  aC as $e,
  C as ke,
  b1 as qe,
  b2 as Ie,
  F as Ae,
  s as Ce,
  aF as Be,
  j as Qe,
} from './index.2385a99b.js';
import { u as D } from './exercise.store.9eb7e56f.js';
import { p as M } from './format-number.dd03eb7b.js';
import { d as Ve } from './dateTimestampProvider.aca62768.js';
var Fe = (function (e) {
    z(n, e);
    function n(t, a) {
      return e.call(this) || this;
    }
    return (
      (n.prototype.schedule = function (t, a) {
        return this;
      }),
      n
    );
  })(ne),
  A = {
    setInterval: function (e, n) {
      for (var t = [], a = 2; a < arguments.length; a++)
        t[a - 2] = arguments[a];
      var r = A.delegate;
      return r != null && r.setInterval
        ? r.setInterval.apply(r, N([e, n], H(t)))
        : setInterval.apply(void 0, N([e, n], H(t)));
    },
    clearInterval: function (e) {
      var n = A.delegate;
      return ((n == null ? void 0 : n.clearInterval) || clearInterval)(e);
    },
    delegate: void 0,
  },
  Le = (function (e) {
    z(n, e);
    function n(t, a) {
      var r = e.call(this, t, a) || this;
      return (r.scheduler = t), (r.work = a), (r.pending = !1), r;
    }
    return (
      (n.prototype.schedule = function (t, a) {
        var r;
        if ((a === void 0 && (a = 0), this.closed)) return this;
        this.state = t;
        var s = this.id,
          o = this.scheduler;
        return (
          s != null && (this.id = this.recycleAsyncId(o, s, a)),
          (this.pending = !0),
          (this.delay = a),
          (this.id =
            (r = this.id) !== null && r !== void 0
              ? r
              : this.requestAsyncId(o, this.id, a)),
          this
        );
      }),
      (n.prototype.requestAsyncId = function (t, a, r) {
        return r === void 0 && (r = 0), A.setInterval(t.flush.bind(t, this), r);
      }),
      (n.prototype.recycleAsyncId = function (t, a, r) {
        if (
          (r === void 0 && (r = 0),
          r != null && this.delay === r && this.pending === !1)
        )
          return a;
        a != null && A.clearInterval(a);
      }),
      (n.prototype.execute = function (t, a) {
        if (this.closed) return new Error('executing a cancelled action');
        this.pending = !1;
        var r = this._execute(t, a);
        if (r) return r;
        this.pending === !1 &&
          this.id != null &&
          (this.id = this.recycleAsyncId(this.scheduler, this.id, null));
      }),
      (n.prototype._execute = function (t, a) {
        var r = !1,
          s;
        try {
          this.work(t);
        } catch (o) {
          (r = !0), (s = o || new Error('Scheduled action threw falsy error'));
        }
        if (r) return this.unsubscribe(), s;
      }),
      (n.prototype.unsubscribe = function () {
        if (!this.closed) {
          var t = this,
            a = t.id,
            r = t.scheduler,
            s = r.actions;
          (this.work = this.state = this.scheduler = null),
            (this.pending = !1),
            ae(s, this),
            a != null && (this.id = this.recycleAsyncId(r, a, null)),
            (this.delay = null),
            e.prototype.unsubscribe.call(this);
        }
      }),
      n
    );
  })(Fe),
  T = (function () {
    function e(n, t) {
      t === void 0 && (t = e.now),
        (this.schedulerActionCtor = n),
        (this.now = t);
    }
    return (
      (e.prototype.schedule = function (n, t, a) {
        return (
          t === void 0 && (t = 0),
          new this.schedulerActionCtor(this, n).schedule(a, t)
        );
      }),
      (e.now = Ve.now),
      e
    );
  })(),
  ze = (function (e) {
    z(n, e);
    function n(t, a) {
      a === void 0 && (a = T.now);
      var r = e.call(this, t, a) || this;
      return (r.actions = []), (r._active = !1), r;
    }
    return (
      (n.prototype.flush = function (t) {
        var a = this.actions;
        if (this._active) {
          a.push(t);
          return;
        }
        var r;
        this._active = !0;
        do if ((r = t.execute(t.state, t.delay))) break;
        while ((t = a.shift()));
        if (((this._active = !1), r)) {
          for (; (t = a.shift()); ) t.unsubscribe();
          throw r;
        }
      }),
      n
    );
  })(T),
  K = new ze(Le),
  Ee = K;
function Pe(e) {
  return e && y(e.schedule);
}
var De = function (e) {
  return e && typeof e.length == 'number' && typeof e != 'function';
};
function Re(e) {
  return y(e == null ? void 0 : e.then);
}
function Ne(e) {
  return y(e[U]);
}
function He(e) {
  return (
    Symbol.asyncIterator && y(e == null ? void 0 : e[Symbol.asyncIterator])
  );
}
function Me(e) {
  return new TypeError(
    'You provided ' +
      (e !== null && typeof e == 'object'
        ? 'an invalid object'
        : "'" + e + "'") +
      ' where a stream was expected. You can provide an Observable, Promise, ReadableStream, Array, AsyncIterable, or Iterable.'
  );
}
function Te() {
  return typeof Symbol != 'function' || !Symbol.iterator
    ? '@@iterator'
    : Symbol.iterator;
}
var Oe = Te();
function Ue(e) {
  return y(e == null ? void 0 : e[Oe]);
}
function je(e) {
  return oe(this, arguments, function () {
    var t, a, r, s;
    return j(this, function (o) {
      switch (o.label) {
        case 0:
          (t = e.getReader()), (o.label = 1);
        case 1:
          o.trys.push([1, , 9, 10]), (o.label = 2);
        case 2:
          return [4, V(t.read())];
        case 3:
          return (
            (a = o.sent()),
            (r = a.value),
            (s = a.done),
            s ? [4, V(void 0)] : [3, 5]
          );
        case 4:
          return [2, o.sent()];
        case 5:
          return [4, V(r)];
        case 6:
          return [4, o.sent()];
        case 7:
          return o.sent(), [3, 2];
        case 8:
          return [3, 10];
        case 9:
          return t.releaseLock(), [7];
        case 10:
          return [2];
      }
    });
  });
}
function Ge(e) {
  return y(e == null ? void 0 : e.getReader);
}
function Xe(e) {
  if (e instanceof g) return e;
  if (e != null) {
    if (Ne(e)) return Ye(e);
    if (De(e)) return Ke(e);
    if (Re(e)) return Je(e);
    if (He(e)) return J(e);
    if (Ue(e)) return We(e);
    if (Ge(e)) return Ze(e);
  }
  throw Me(e);
}
function Ye(e) {
  return new g(function (n) {
    var t = e[U]();
    if (y(t.subscribe)) return t.subscribe(n);
    throw new TypeError(
      'Provided object does not correctly implement Symbol.observable'
    );
  });
}
function Ke(e) {
  return new g(function (n) {
    for (var t = 0; t < e.length && !n.closed; t++) n.next(e[t]);
    n.complete();
  });
}
function Je(e) {
  return new g(function (n) {
    e.then(
      function (t) {
        n.closed || (n.next(t), n.complete());
      },
      function (t) {
        return n.error(t);
      }
    ).then(null, se);
  });
}
function We(e) {
  return new g(function (n) {
    var t, a;
    try {
      for (var r = ie(e), s = r.next(); !s.done; s = r.next()) {
        var o = s.value;
        if ((n.next(o), n.closed)) return;
      }
    } catch (c) {
      t = { error: c };
    } finally {
      try {
        s && !s.done && (a = r.return) && a.call(r);
      } finally {
        if (t) throw t.error;
      }
    }
    n.complete();
  });
}
function J(e) {
  return new g(function (n) {
    et(e, n).catch(function (t) {
      return n.error(t);
    });
  });
}
function Ze(e) {
  return J(je(e));
}
function et(e, n) {
  var t, a, r, s;
  return le(this, void 0, void 0, function () {
    var o, c;
    return j(this, function (u) {
      switch (u.label) {
        case 0:
          u.trys.push([0, 5, 6, 11]), (t = ue(e)), (u.label = 1);
        case 1:
          return [4, t.next()];
        case 2:
          if (((a = u.sent()), !!a.done)) return [3, 4];
          if (((o = a.value), n.next(o), n.closed)) return [2];
          u.label = 3;
        case 3:
          return [3, 1];
        case 4:
          return [3, 11];
        case 5:
          return (c = u.sent()), (r = { error: c }), [3, 11];
        case 6:
          return (
            u.trys.push([6, , 9, 10]),
            a && !a.done && (s = t.return) ? [4, s.call(t)] : [3, 8]
          );
        case 7:
          u.sent(), (u.label = 8);
        case 8:
          return [3, 10];
        case 9:
          if (r) throw r.error;
          return [7];
        case 10:
          return [7];
        case 11:
          return n.complete(), [2];
      }
    });
  });
}
function tt(e) {
  return e instanceof Date && !isNaN(e);
}
function rt(e, n, t) {
  e === void 0 && (e = 0), t === void 0 && (t = Ee);
  var a = -1;
  return (
    n != null && (Pe(n) ? (t = n) : (a = n)),
    new g(function (r) {
      var s = tt(e) ? +e - t.now() : e;
      s < 0 && (s = 0);
      var o = 0;
      return t.schedule(function () {
        r.closed ||
          (r.next(o++), 0 <= a ? this.schedule(void 0, a) : r.complete());
      }, s);
    })
  );
}
function nt(e, n) {
  return (
    e === void 0 && (e = 0),
    n === void 0 && (n = K),
    e < 0 && (e = 0),
    rt(e, e, n)
  );
}
function at(e) {
  return ce(function (n, t) {
    Xe(e).subscribe(
      de(
        t,
        function () {
          return t.complete();
        },
        fe
      )
    ),
      !t.closed && n.subscribe(t);
  });
}
const ot = {
    class:
      'c-wrapper no-pointer-events row flex-center text-negative non-selectable',
  },
  st = w({
    __name: 'StrikeCounter',
    setup(e) {
      const n = D();
      return (t, a) => (
        p(),
        S('div', ot, [
          $('span', null, G(m(n).exercise.totalStrikeCount), 1),
          d(X, { name: m(he) }, null, 8, ['name']),
        ])
      );
    },
  });
var it = ve(st, [['__scopeId', 'data-v-4543cf09']]);
const lt = ['top', 'middle', 'bottom'];
var ut = E({
  name: 'QBadge',
  props: {
    color: String,
    textColor: String,
    floating: Boolean,
    transparent: Boolean,
    multiLine: Boolean,
    outline: Boolean,
    rounded: Boolean,
    label: [Number, String],
    align: { type: String, validator: (e) => lt.includes(e) },
  },
  setup(e, { slots: n }) {
    const t = l(() => (e.align !== void 0 ? { verticalAlign: e.align } : null)),
      a = l(() => {
        const r = (e.outline === !0 && e.color) || e.textColor;
        return (
          `q-badge flex inline items-center no-wrap q-badge--${
            e.multiLine === !0 ? 'multi' : 'single'
          }-line` +
          (e.outline === !0
            ? ' q-badge--outline'
            : e.color !== void 0
            ? ` bg-${e.color}`
            : '') +
          (r !== void 0 ? ` text-${r}` : '') +
          (e.floating === !0 ? ' q-badge--floating' : '') +
          (e.rounded === !0 ? ' q-badge--rounded' : '') +
          (e.transparent === !0 ? ' q-badge--transparent' : '')
        );
      });
    return () =>
      _(
        'div',
        {
          class: a.value,
          style: t.value,
          role: 'status',
          'aria-label': e.label,
        },
        P(n.default, e.label !== void 0 ? [e.label] : [])
      );
  },
});
const ct = { xs: 2, sm: 4, md: 6, lg: 10, xl: 14 };
function O(e, n, t) {
  return {
    transform:
      n === !0
        ? `translateX(${t.lang.rtl === !0 ? '-' : ''}100%) scale3d(${-e},1,1)`
        : `scale3d(${e},1,1)`,
  };
}
var dt = E({
  name: 'QLinearProgress',
  props: {
    ...me,
    ..._e,
    value: { type: Number, default: 0 },
    buffer: Number,
    color: String,
    trackColor: String,
    reverse: Boolean,
    stripe: Boolean,
    indeterminate: Boolean,
    query: Boolean,
    rounded: Boolean,
    animationSpeed: { type: [String, Number], default: 2100 },
    instantFeedback: Boolean,
  },
  setup(e, { slots: n }) {
    const { proxy: t } = Y(),
      a = ye(e, t.$q),
      r = ge(e, ct),
      s = l(() => e.indeterminate === !0 || e.query === !0),
      o = l(() => e.reverse !== e.query),
      c = l(() => ({
        ...(r.value !== null ? r.value : {}),
        '--q-linear-progress-speed': `${e.animationSpeed}ms`,
      })),
      u = l(
        () =>
          'q-linear-progress' +
          (e.color !== void 0 ? ` text-${e.color}` : '') +
          (e.reverse === !0 || e.query === !0
            ? ' q-linear-progress--reverse'
            : '') +
          (e.rounded === !0 ? ' rounded-borders' : '')
      ),
      k = l(() => O(e.buffer !== void 0 ? e.buffer : 1, o.value, t.$q)),
      x = l(() => `with${e.instantFeedback === !0 ? 'out' : ''}-transition`),
      q = l(
        () =>
          `q-linear-progress__track absolute-full q-linear-progress__track--${
            x.value
          } q-linear-progress__track--${a.value === !0 ? 'dark' : 'light'}` +
          (e.trackColor !== void 0 ? ` bg-${e.trackColor}` : '')
      ),
      C = l(() => O(s.value === !0 ? 1 : e.value, o.value, t.$q)),
      B = l(
        () =>
          `q-linear-progress__model absolute-full q-linear-progress__model--${
            x.value
          } q-linear-progress__model--${s.value === !0 ? 'in' : ''}determinate`
      ),
      Q = l(() => ({ width: `${e.value * 100}%` })),
      f = l(
        () =>
          `q-linear-progress__stripe absolute-${
            e.reverse === !0 ? 'right' : 'left'
          } q-linear-progress__stripe--${x.value}`
      );
    return () => {
      const h = [
        _('div', { class: q.value, style: k.value }),
        _('div', { class: B.value, style: C.value }),
      ];
      return (
        e.stripe === !0 &&
          s.value === !1 &&
          h.push(_('div', { class: f.value, style: Q.value })),
        _(
          'div',
          {
            class: u.value,
            style: c.value,
            role: 'progressbar',
            'aria-valuemin': 0,
            'aria-valuemax': 1,
            'aria-valuenow': e.indeterminate === !0 ? void 0 : e.value,
          },
          P(n.default, h)
        )
      );
    };
  },
});
const ft = { class: 'relative-position col-grow non-selectable' },
  vt = { class: 'absolute-full flex flex-center' },
  ht = w({
    __name: 'QuestionNumberIndicator',
    setup(e) {
      const n = D();
      return (t, a) => (
        p(),
        S('div', ft, [
          d(
            dt,
            {
              'animation-speed': '400',
              size: '40px',
              value:
                Math.max(0, m(n).exercise.currentQuestion - 1) /
                m(n).exercise.totalQuestions,
              color: 'primary',
            },
            {
              default: L(() => [
                $('div', vt, [
                  d(
                    ut,
                    {
                      color: 'white',
                      'text-color': 'primary',
                      class: 'text-h6',
                      label:
                        Math.max(m(n).exercise.currentQuestion - 1, 0) +
                        '/' +
                        m(n).exercise.totalQuestions,
                    },
                    null,
                    8,
                    ['label']
                  ),
                ]),
              ]),
              _: 1,
            },
            8,
            ['value']
          ),
        ])
      );
    },
  }),
  mt = { class: 'row justify-between q-pa-xs' },
  _t = { class: 'relative-position row col-grow q-px-sm items-center' },
  yt = w({
    __name: 'ExerciseHUD',
    setup(e) {
      return (n, t) => (
        p(),
        S('div', mt, [
          d(it, { ref: 'strikeCounter' }, null, 512),
          $('div', _t, [d(ht)]),
        ])
      );
    },
  });
var gt = E({
  name: 'QFooter',
  props: {
    modelValue: { type: Boolean, default: !0 },
    reveal: Boolean,
    bordered: Boolean,
    elevated: Boolean,
    heightHint: { type: [String, Number], default: 50 },
  },
  emits: ['reveal', 'focusin'],
  setup(e, { slots: n, emit: t }) {
    const {
        proxy: { $q: a },
      } = Y(),
      r = pe(Se, F);
    if (r === F)
      return console.error('QFooter needs to be child of QLayout'), F;
    const s = I(parseInt(e.heightHint, 10)),
      o = I(!0),
      c = I(
        xe.value === !0 || r.isContainer.value === !0 ? 0 : window.innerHeight
      ),
      u = l(
        () =>
          e.reveal === !0 ||
          r.view.value.indexOf('F') > -1 ||
          (a.platform.is.ios && r.isContainer.value === !0)
      ),
      k = l(() =>
        r.isContainer.value === !0 ? r.containerHeight.value : c.value
      ),
      x = l(() => {
        if (e.modelValue !== !0) return 0;
        if (u.value === !0) return o.value === !0 ? s.value : 0;
        const i = r.scroll.value.position + k.value + s.value - r.height.value;
        return i > 0 ? i : 0;
      }),
      q = l(() => e.modelValue !== !0 || (u.value === !0 && o.value !== !0)),
      C = l(() => e.modelValue === !0 && q.value === !0 && e.reveal === !0),
      B = l(
        () =>
          'q-footer q-layout__section--marginal ' +
          (u.value === !0 ? 'fixed' : 'absolute') +
          '-bottom' +
          (e.bordered === !0 ? ' q-footer--bordered' : '') +
          (q.value === !0 ? ' q-footer--hidden' : '') +
          (e.modelValue !== !0
            ? ' q-layout--prevent-focus' + (u.value !== !0 ? ' hidden' : '')
            : '')
      ),
      Q = l(() => {
        const i = r.rows.value.bottom,
          v = {};
        return (
          i[0] === 'l' &&
            r.left.space === !0 &&
            (v[a.lang.rtl === !0 ? 'right' : 'left'] = `${r.left.size}px`),
          i[2] === 'r' &&
            r.right.space === !0 &&
            (v[a.lang.rtl === !0 ? 'left' : 'right'] = `${r.right.size}px`),
          v
        );
      });
    function f(i, v) {
      r.update('footer', i, v);
    }
    function h(i, v) {
      i.value !== v && (i.value = v);
    }
    function W({ height: i }) {
      h(s, i), f('size', i);
    }
    function Z() {
      if (e.reveal !== !0) return;
      const { direction: i, position: v, inflectionPoint: te } = r.scroll.value;
      h(
        o,
        i === 'up' ||
          v - te < 100 ||
          r.height.value - k.value - v - s.value < 300
      );
    }
    function ee(i) {
      C.value === !0 && h(o, !0), t('focusin', i);
    }
    b(
      () => e.modelValue,
      (i) => {
        f('space', i), h(o, !0), r.animate();
      }
    ),
      b(x, (i) => {
        f('offset', i);
      }),
      b(
        () => e.reveal,
        (i) => {
          i === !1 && h(o, e.modelValue);
        }
      ),
      b(o, (i) => {
        r.animate(), t('reveal', i);
      }),
      b([s, r.scroll, r.height], Z),
      b(
        () => a.screen.height,
        (i) => {
          r.isContainer.value !== !0 && h(c, i);
        }
      );
    const R = {};
    return (
      (r.instances.footer = R),
      e.modelValue === !0 && f('size', s.value),
      f('space', e.modelValue),
      f('offset', x.value),
      be(() => {
        r.instances.footer === R &&
          ((r.instances.footer = void 0),
          f('size', 0),
          f('offset', 0),
          f('space', !1));
      }),
      () => {
        const i = P(n.default, [_(we, { debounce: 0, onResize: W })]);
        return (
          e.elevated === !0 &&
            i.push(
              _('div', {
                class:
                  'q-layout__shadow absolute-full overflow-hidden no-pointer-events',
              })
            ),
          _('footer', { class: B.value, style: Q.value, onFocusin: ee }, i)
        );
      }
    );
  },
});
const xt = { class: 'text-h6 non-selectable' },
  bt = w({
    __name: 'ExerciseTimer',
    setup(e) {
      const n = D(),
        t = new $e();
      let a = I(0),
        r = Date.now();
      ke(() => {
        nt(200)
          .pipe(at(t))
          .subscribe(() => {
            n.exercise.state === 'started' &&
              !n.exercise.paused &&
              ((a.value += Date.now() - r), (r = Date.now()));
          });
      });
      const s = l(() => {
        const o = Math.floor(a.value / 1e3 / 60),
          c = Math.floor((a.value - 6e4 * o) / 1e3);
        return `${M(o, 2)}:${M(c, 2)}`;
      });
      return (
        n.$onAction(({ name: o }) => {
          o === 'beginExercise' && (r = Date.now());
        }),
        qe(() => {
          t.next(), t.complete();
        }),
        (o, c) => (
          p(),
          S(
            Ae,
            null,
            [
              $('span', xt, G(m(s)), 1),
              d(
                X,
                { name: m(Ie), tag: 'timer-outline', size: '2rem' },
                null,
                8,
                ['name']
              ),
            ],
            64
          )
        )
      );
    },
  }),
  wt = w({
    __name: 'ExerciseFooter',
    setup(e) {
      return (n, t) => (
        p(),
        Ce(
          gt,
          { class: 'bg-secondary text-white no-pointer-events' },
          {
            default: L(() => [
              d(
                Be,
                { class: 'justify-center' },
                { default: L(() => [d(bt)]), _: 1 }
              ),
            ]),
            _: 1,
          }
        )
      );
    },
  }),
  pt = { class: 'column flex-auto relative-position full-width items-center' },
  St = { class: 'column justify-center flex-auto content' },
  Ct = w({
    __name: 'ExerciseView',
    setup(e) {
      return (n, t) => {
        const a = Qe('router-view');
        return (
          p(),
          S('div', pt, [
            d(re, { class: 'self-stretch' }),
            d(yt, { class: 'self-stretch' }),
            $('div', St, [d(a)]),
            d(wt),
          ])
        );
      };
    },
  });
export { Ct as default };
