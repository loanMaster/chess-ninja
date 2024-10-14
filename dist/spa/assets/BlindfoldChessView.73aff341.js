import {
  d as A,
  r as N,
  C as D,
  am as a,
  a as u,
  aA as R,
  B as Y,
  o as m,
  e as d,
  g as i,
  f as s,
  w as h,
  i as U,
  Q as _,
  F as I,
  ap as W,
  t as r,
  h as c,
  k as g,
  ao as v,
} from './index.2385a99b.js';
import { _ as z } from './ExerciseHeader.7b1635f9.js';
import { _ as M } from './PieceList.8b687bc9.js';
import { _ as H } from './ExerciseBoard.41f7421a.js';
import { _ as L, a as X, b as Z } from './ToggleChessPieceNotation.74de14e5.js';
import { u as w } from './exercise.store.9eb7e56f.js';
import { C as Q } from './chess-utils.4933cc4c.js';
import './chess-board.interface.321ee08e.js';
import './dateTimestampProvider.aca62768.js';
const ee = { class: 'column flex-1' },
  te = {
    class: 'row flex-1',
    style: { 'max-height': '100%', overflow: 'hidden' },
  },
  se = {
    class: 'col-lg-2 col-md-3 q-pb-sm sm-hide xs-hide',
    style: { 'max-height': '100%', 'overflow-y': 'hidden' },
  },
  oe = {
    class:
      'col-lg-7 col-md-6 col-sm-12 col-xs-12 column justify-start align-start relative-position',
    style: { 'max-height': '100%', 'max-width': '100%' },
  },
  ae = { key: 0, class: 'text-center q-mb-sm' },
  ie = { class: 'text-h5' },
  ne = {
    class:
      'row text-h5 q-my-md-xl q-my-sm-md q-my-xs-md justify-center q-gutter-md',
  },
  re = { class: 'column q-gutter-sm q-px-md' },
  le = { class: 'q-mb-md-sm' },
  ce = { class: 'pieces-bg q-pa-md', style: { 'border-radius': '25px' } },
  ue = { class: 'column q-gutter-sm q-px-md' },
  me = { class: 'q-mb-md-sm' },
  de = { class: 'pieces-bg q-pa-md', style: { 'border-radius': '25px' } },
  he = { class: 'text-h6 q-mb-lg' },
  pe = { key: 1, class: 'column full-height' },
  fe = { key: 0, class: 'flex-1', style: { 'overflow-y': 'auto' } },
  ve = { key: 1, class: 'flex-1 q-my-md relative-position' },
  _e = {
    class:
      'absolute-full no-pointer-events column justify-center items-center q-mx-auto',
    style: { 'aspect-ratio': '1', 'max-height': '100%', 'max-width': '100%' },
  },
  ge = {
    key: 0,
    class: 'text-h4 bg-secondary q-pa-md non-selectable',
    style: { opacity: '0.7' },
  },
  ke = { class: 'text-center' },
  ye = { key: 0 },
  be = {
    class:
      'row md-hide q-mb-sm lg-hide justify-center xl-hide items-center q-gutter-sm',
  },
  qe = {
    class:
      'col-3 q-pt-lg items-center column justify-center xs-hide sm-hide q-gutter-sm',
  },
  Ue = A({
    __name: 'BlindfoldChessView',
    setup(we) {
      const k = N(!1),
        l = N(!1),
        S = W();
      D(() => {
        w().$patch((e) => {
          e.board = {
            ...e.board,
            orientation: 'white',
            pieces: {},
            highlightPositive: [],
            highlightNegative: [],
          };
        }),
          a().$subscribe(() => {
            $.value &&
              ((l.value = !0),
              y.value &&
                j.value !== p.value &&
                w().updateRating({ nameOfTheGame: B.value, value: 1 })),
              w().$patch((e) => {
                e.board.pieces = P(a().position.pieces);
              });
          }),
          b();
      });
      function C() {
        return (l.value = !0), a().$patch({ gameOngoing: !1 });
      }
      const V = u(() => x(a().position.pieces, 'white')),
        E = u(() => x(a().position.pieces, 'black'));
      function x(e, n) {
        const o = {};
        return (
          Object.keys(a().position.pieces).forEach((t) => {
            ((e[t].toUpperCase() === e[t] && n === 'white') ||
              (e[t].toUpperCase() !== e[t] && n === 'black')) &&
              (o[t] = e[t]);
          }),
          o
        );
      }
      const $ = u(
          () =>
            a().position.isFinished ||
            Object.keys(a().position.pieces).length < 3
        ),
        y = u(() => a().position.check),
        j = u(() => a().position.turn),
        B = u(() => S.params.game);
      async function b() {
        await a().setupBoard({
          playerColor: p.value,
          config: { turn: p.value, pieces: F() },
        }),
          a().start(),
          a().$patch({ engineLevel: 3 }),
          (l.value = !1),
          (k.value = !1),
          a().$patch({ gameOngoing: !0 });
      }
      function F() {
        switch (B.value) {
          case 'queen-vs-rook':
            return { E7: 'k', F7: 'r', A3: 'K', C1: 'Q' };
          case 'rook-vs-king':
            return q(['k', 'K', 'R']);
          case 'queen-vs-knights':
            return K();
          case 'queen-vs-king':
          default:
            return q(['k', 'K', 'Q']);
        }
      }
      function K() {
        const e = new R();
        let n = !1,
          o = !1,
          t = {};
        do {
          t = q(['k', 'K', 'Q', 'n']);
          const f = Object.keys(t).find((T) => t[T] === 'n');
          e.createNew({ turn: 'black', pieces: t });
          const O = e.moves(f),
            G = O[Math.floor(Math.random() * O.length)];
          !G ||
            ((t[G.to] = 'n'),
            e.createNew({ turn: 'white', pieces: t }),
            (n = e.exportJson().check),
            e.createNew({ turn: 'black', pieces: t }),
            (o = e.exportJson().check));
        } while (n || o || Object.keys(e.exportJson().pieces).length < 5);
        return e.terminate(), t;
      }
      function q(e) {
        const n = new R();
        let o = Q.getRandomSquares(e.length),
          t = {};
        do {
          (o = Q.getRandomSquares(e.length)), (t = {});
          for (let f = 0; f < o.length; f++) t[o[f]] = e[f];
          n.createNew({
            turn: p.value === 'white' ? 'black' : 'white',
            pieces: t,
          });
        } while (n.exportJson().check);
        return n.terminate(), t;
      }
      const p = u(() => 'white');
      function P(e) {
        const n = {};
        return (
          Object.keys(e).forEach((o) => {
            const t = e[o] === e[o].toUpperCase() ? 'w' : 'b';
            n[o.toLowerCase()] = t + e[o].toUpperCase();
          }),
          n
        );
      }
      async function J() {
        k.value = !0;
      }
      return (
        Y(() => {
          a().stopGame();
        }),
        (e, n) => (
          m(),
          d(
            I,
            null,
            [
              i(z, { class: 'self-stretch' }),
              s('div', ee, [
                s('div', te, [
                  s('div', se, [
                    i(
                      U,
                      { class: 'q-pt-sm q-ma-sm', style: { height: '100%' } },
                      { default: h(() => [i(X)]), _: 1 }
                    ),
                  ]),
                  s('div', oe, [
                    i(
                      U,
                      {
                        class:
                          'q-mx-sm q-mt-sm q-pt-md-lg q-pt-sm-sm q-mb-md-none q-mb-xs-sm q-mb-sm-sm',
                        style: { height: '100%', overflow: 'auto' },
                      },
                      {
                        default: h(() => [
                          !k.value && !l.value
                            ? (m(),
                              d('div', ae, [
                                s(
                                  'div',
                                  ie,
                                  r(e.$t("Checkmate the opponent's king")),
                                  1
                                ),
                                s('div', ne, [
                                  s('div', re, [
                                    s('div', le, r(e.$t('White pieces')), 1),
                                    s('div', ce, [
                                      i(M, { pieces: c(V) }, null, 8, [
                                        'pieces',
                                      ]),
                                    ]),
                                  ]),
                                  s('div', ue, [
                                    s('div', me, r(e.$t('Black pieces')), 1),
                                    s('div', de, [
                                      i(M, { pieces: c(E) }, null, 8, [
                                        'pieces',
                                      ]),
                                    ]),
                                  ]),
                                ]),
                                s(
                                  'div',
                                  he,
                                  r(e.$t('You play as')) + ' ' + r(e.$t(c(p))),
                                  1
                                ),
                                s('div', null, [
                                  i(
                                    _,
                                    { color: 'primary', onClick: J },
                                    {
                                      default: h(() => [
                                        g(
                                          r(
                                            e.$t(
                                              'Click here when you are ready'
                                            )
                                          ),
                                          1
                                        ),
                                      ]),
                                      _: 1,
                                    }
                                  ),
                                ]),
                              ]))
                            : v('', !0),
                          k.value || l.value
                            ? (m(),
                              d('div', pe, [
                                l.value
                                  ? v('', !0)
                                  : (m(), d('div', fe, [i(Z)])),
                                l.value
                                  ? (m(),
                                    d('div', ve, [
                                      i(H),
                                      s('div', _e, [
                                        c($)
                                          ? (m(),
                                            d('div', ge, [
                                              s(
                                                'div',
                                                ke,
                                                r(
                                                  e.$t(
                                                    c(y) ? 'Checkmate' : 'Draw'
                                                  )
                                                ),
                                                1
                                              ),
                                              c(y)
                                                ? (m(),
                                                  d(
                                                    'div',
                                                    ye,
                                                    r(
                                                      c(j) !== c(p)
                                                        ? e.$t('You won!')
                                                        : e.$t('You lost')
                                                    ),
                                                    1
                                                  ))
                                                : v('', !0),
                                            ]))
                                          : v('', !0),
                                      ]),
                                    ]))
                                  : v('', !0),
                                s('div', be, [
                                  i(
                                    _,
                                    { color: 'primary', onClick: b },
                                    {
                                      default: h(() => [
                                        g(r(e.$t('Restart')), 1),
                                      ]),
                                      _: 1,
                                    }
                                  ),
                                  i(
                                    _,
                                    {
                                      color: 'primary',
                                      onClick: C,
                                      disable: l.value,
                                    },
                                    {
                                      default: h(() => [
                                        g(r(e.$t('Give up')), 1),
                                      ]),
                                      _: 1,
                                    },
                                    8,
                                    ['disable']
                                  ),
                                ]),
                              ]))
                            : v('', !0),
                        ]),
                        _: 1,
                      }
                    ),
                  ]),
                  s('div', qe, [
                    i(
                      _,
                      { color: 'primary', onClick: b },
                      { default: h(() => [g(r(e.$t('Restart')), 1)]), _: 1 }
                    ),
                    i(
                      _,
                      { color: 'primary', onClick: C, disable: l.value },
                      { default: h(() => [g(r(e.$t('Give up')), 1)]), _: 1 },
                      8,
                      ['disable']
                    ),
                    i(L),
                  ]),
                ]),
              ]),
            ],
            64
          )
        )
      );
    },
  });
export { Ue as default };
