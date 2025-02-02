import {
  G as r,
  P as z,
  ax as L,
  ay as Q,
  d as M,
  u as f,
  a as p,
  am as s,
  C as P,
  o as a,
  e as u,
  h as o,
  ao as C,
  F as x,
  l as T,
  n as D,
  t as h,
  az as $,
  r as V,
  f as w,
  s as F,
  g as N,
  w as I,
  k as A,
  Q as O,
  aq as j,
} from './index.2385a99b.js';
import { C as q } from './chess-utils.4933cc4c.js';
const G = [
  r('g', [
    r('path', {
      fill: 'none',
      stroke: 'currentColor',
      'stroke-width': '5',
      'stroke-miterlimit': '10',
      d: 'M58.4,51.7c-0.9-0.9-1.4-2-1.4-2.3s0.5-0.4,1.4-1.4 C70.8,43.8,79.8,30.5,80,15.5H70H30H20c0.2,15,9.2,28.1,21.6,32.3c0.9,0.9,1.4,1.2,1.4,1.5s-0.5,1.6-1.4,2.5 C29.2,56.1,20.2,69.5,20,85.5h10h40h10C79.8,69.5,70.8,55.9,58.4,51.7z',
    }),
    r('clipPath', { id: 'uil-hourglass-clip1' }, [
      r('rect', { x: '15', y: '20', width: ' 70', height: '25' }, [
        r('animate', {
          attributeName: 'height',
          from: '25',
          to: '0',
          dur: '1s',
          repeatCount: 'indefinite',
          values: '25;0;0',
          keyTimes: '0;0.5;1',
        }),
        r('animate', {
          attributeName: 'y',
          from: '20',
          to: '45',
          dur: '1s',
          repeatCount: 'indefinite',
          values: '20;45;45',
          keyTimes: '0;0.5;1',
        }),
      ]),
    ]),
    r('clipPath', { id: 'uil-hourglass-clip2' }, [
      r('rect', { x: '15', y: '55', width: ' 70', height: '25' }, [
        r('animate', {
          attributeName: 'height',
          from: '0',
          to: '25',
          dur: '1s',
          repeatCount: 'indefinite',
          values: '0;25;25',
          keyTimes: '0;0.5;1',
        }),
        r('animate', {
          attributeName: 'y',
          from: '80',
          to: '55',
          dur: '1s',
          repeatCount: 'indefinite',
          values: '80;55;55',
          keyTimes: '0;0.5;1',
        }),
      ]),
    ]),
    r('path', {
      d: 'M29,23c3.1,11.4,11.3,19.5,21,19.5S67.9,34.4,71,23H29z',
      'clip-path': 'url(#uil-hourglass-clip1)',
      fill: 'currentColor',
    }),
    r('path', {
      d: 'M71.6,78c-3-11.6-11.5-20-21.5-20s-18.5,8.4-21.5,20H71.6z',
      'clip-path': 'url(#uil-hourglass-clip2)',
      fill: 'currentColor',
    }),
    r('animateTransform', {
      attributeName: 'transform',
      type: 'rotate',
      from: '0 50 50',
      to: '180 50 50',
      repeatCount: 'indefinite',
      dur: '1s',
      values: '0 50 50;0 50 50;180 50 50',
      keyTimes: '0;0.7;1',
    }),
  ]),
];
var U = z({
  name: 'QSpinnerHourglass',
  props: L,
  setup(v) {
    const { cSize: l, classes: i } = Q(v);
    return () =>
      r(
        'svg',
        {
          class: i.value,
          width: l.value,
          height: l.value,
          viewBox: '0 0 100 100',
          preserveAspectRatio: 'xMidYMid',
          xmlns: 'http://www.w3.org/2000/svg',
        },
        G
      );
  },
});
const E = {
    class: 'q-mx-sm text-h6 scroll-y',
    data: 'history',
    style: { height: '100%', 'overflow-y': 'auto' },
  },
  R = { key: 0 },
  te = M({
    __name: 'MoveHistory',
    setup(v) {
      const l = f(),
        i = p(() => s().position.moveHistory),
        m = p(() => {
          const e = [];
          s().position.moveHistory.length > 0 &&
            i.value[0].configuration.turn === 'black' &&
            e.push({ white: void 0, black: void 0 });
          for (let n = 0; n < i.value.length; n++)
            n % 2 === 0
              ? e.push({ white: i.value[n], black: void 0 })
              : (e[(n - 1) / 2].black = i.value[n]);
          return e;
        });
      function y(e) {
        return l.showChessPieceSymbols
          ? e[0].toLowerCase() === '0'
            ? e
            : q.getSymbol(e[0]) + e.substring(1)
          : e.replace('p', '').replace('P', '');
      }
      P(() => {
        s().$onAction(({ name: e, after: n }) => {
          n(() => {
            (e === 'playerMove' || e === 'aiMove') && k();
          });
        });
      });
      function k() {
        const e = document.querySelector('[data="history"]');
        e.scrollTop = e.scrollHeight - e.clientHeight;
      }
      const _ = p(
        () => s().position.indexInHistory < s().position.moveHistory.length - 1
      );
      function b(e) {
        return i.value[0].configuration.turn === 'black'
          ? e === Math.floor((s().position.indexInHistory + 1) / 2)
          : e === Math.floor(s().position.indexInHistory / 2);
      }
      return (e, n) => (
        a(),
        u('div', E, [
          o(m).length === 0 ? (a(), u('div', R, '-')) : C('', !0),
          (a(!0),
          u(
            x,
            null,
            T(
              o(m),
              (c, d) => (
                a(),
                u(
                  'div',
                  { key: d, class: D(o(_) && b(d) ? 'bg-red' : '') },
                  h(d + 1) +
                    '. ' +
                    h(
                      c.white
                        ? `${y(c.white.description)}${
                            c.white.checkmate ? '#' : c.white.check ? '!' : ''
                          }`
                        : ''
                    ) +
                    ' ' +
                    h(
                      c.black
                        ? `${y(c.black.description)}${
                            c.black.checkmate ? '#' : c.black.check ? '!' : ''
                          }`
                        : ''
                    ),
                  3
                )
              )
            ),
            128
          )),
        ])
      );
    },
  }),
  Y = {
    class: 'row q-mb-lg justify-center items-center relative-position',
    style: { height: '2rem' },
  },
  J = { key: 0, class: 'text-h5' },
  K = { key: 1, class: 'text-h5' },
  W = {
    ref: 'buttons',
    class:
      'row wrap justify-center q-gutter-md-sm q-gutter-xs-xs q-gutter-sm-xs',
  },
  se = M({
    __name: 'SelectMoveButtons',
    setup(v) {
      const { t: l } = $(),
        i = V([]),
        m = f(),
        y = { p: '1', n: '2', b: '3', r: '4', q: '5', k: '6' },
        k = p(
          () => s().position.check && s().position.turn === s().playerColor
        ),
        _ = p(() => s().position.checkMate),
        b = p(() => s().position.isFinished);
      P(() => {
        const t = () => {
          s().playersTurn &&
            (i.value = s().position.moves.sort((S, g) => {
              const H =
                  y[S.description[0].toLowerCase()] +
                  S.description.substring(1),
                B =
                  y[g.description[0].toLowerCase()] +
                  g.description.substring(1);
              return H > B ? 1 : -1;
            }));
        };
        s().$subscribe(() => {
          t();
        }),
          t();
      });
      const e = p(() => {
        var t;
        return (
          n((t = s().lastOpponentMove) == null ? void 0 : t.description) ||
          l('Make a move')
        );
      });
      function n(t) {
        return (
          t &&
          (m.showChessPieceSymbols
            ? t[0] === '0'
              ? t
              : (t[0].toLowerCase() === 'p' ? '' : q.getSymbol(t[0])) +
                t.substring(1)
            : t.replace('p', '').replace('P', ''))
        );
      }
      function c(t) {
        s().playerMove(t);
      }
      const d = p(() => s().playersTurn);
      return (t, S) => (
        a(),
        u('div', null, [
          w('div', Y, [
            w('div', null, [
              o(d)
                ? (a(),
                  u('div', J, h(o(e)) + h(o(_) ? '#' : o(k) ? '!' : ''), 1))
                : C('', !0),
              !o(d) && o(b)
                ? (a(),
                  u('div', K, h(o(_) ? t.$t('Checkmate') : t.$t('Draw')), 1))
                : C('', !0),
              !o(d) && !o(b)
                ? (a(), F(U, { key: 2, color: 'gray', size: '1.5rem' }))
                : C('', !0),
            ]),
          ]),
          w(
            'div',
            W,
            [
              (a(!0),
              u(
                x,
                null,
                T(
                  i.value,
                  (g) => (
                    a(),
                    u('div', { key: g }, [
                      N(
                        O,
                        {
                          class: 'text-h6',
                          style: { padding: '0.5rem' },
                          'no-caps': '',
                          disable: !o(d),
                          onClick: (H) => c(g),
                        },
                        { default: I(() => [A(h(n(g.description)), 1)]), _: 2 },
                        1032,
                        ['disable', 'onClick']
                      ),
                    ])
                  )
                ),
                128
              )),
            ],
            512
          ),
        ])
      );
    },
  }),
  X = { class: 'q-mt-md' },
  oe = M({
    __name: 'ToggleChessPieceNotation',
    setup(v) {
      const { t: l } = $(),
        i = p(() => f().showChessPieceSymbols);
      function m() {
        f().setShowChessPieceSymbols(!f().showChessPieceSymbols);
      }
      return (y, k) => (
        a(),
        u(
          x,
          null,
          [
            w(
              'div',
              X,
              h(o(l)('Chess pieces notation:')) +
                ' ' +
                h(o(i) ? o(l)('Symbols') : o(l)('Letters')),
              1
            ),
            N(
              j,
              {
                style: { 'margin-top': '0', 'padding-top': '0' },
                'model-value': o(i),
                'onUpdate:modelValue': m,
                color: 'secondary',
              },
              null,
              8,
              ['model-value']
            ),
          ],
          64
        )
      );
    },
  });
export { U as Q, oe as _, te as a, se as b };
