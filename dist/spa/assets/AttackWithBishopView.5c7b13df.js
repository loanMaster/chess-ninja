import {
  d as D,
  r as d,
  b1 as N,
  C as E,
  a as b,
  o as v,
  e as m,
  h as g,
  f as r,
  t as p,
  g as f,
  F as Q,
  l as P,
  ao as V,
  av as C,
  an as R,
  w as A,
  k as L,
  Q as M,
} from './index.2385a99b.js';
import { _ as j } from './PieceList.8b687bc9.js';
import { _ as F } from './ExerciseBoard.41f7421a.js';
import { c as U, e as x } from './register-defaults.6d46d2f4.js';
import { C as s } from './chess-utils.4933cc4c.js';
import { u } from './exercise.store.9eb7e56f.js';
import './chess-board.interface.321ee08e.js';
import './dateTimestampProvider.aca62768.js';
const W = { key: 0, class: 'flex-1 justify-center column items-center' },
  z = { class: 'text-h5 text-center' },
  K = {
    class: 'g-large-font g-full-width q-mt-md pieces-bg q-pa-md',
    style: { 'border-radius': '25px' },
  },
  T = { class: 'text-h5 q-gutter-lg row' },
  G = { class: 'row q-gutter-md max-width-xs q-mt-md justify-center' },
  H = { class: 'flex-1 relative-position', style: { 'max-height': '100%' } },
  I = { class: 'column items-center' },
  ie = D({
    __name: 'AttackWithBishopView',
    setup(J) {
      const { revealed: n, store: k, inputDisabled: l } = U(),
        h = d(!1),
        y = R(),
        o = d(''),
        c = d(''),
        _ = d('w');
      N(() => {
        x.createExercise(10);
      }),
        E(async () => {
          (l.value = !0), u().beginExercise(), w();
        });
      async function w() {
        if (
          !(await x.prepareNewQuestion({
            inputDisabled: l,
            revealed: n,
            router: y,
          }))
        )
          return;
        o.value = s.getOtherRandomSquare([o.value]);
        const e = s.getColor(o.value),
          i = s.getSquaresOnSameDiagonal(o.value);
        do c.value = s.getOtherRandomSquare([o.value]);
        while (i.indexOf(c.value) > -1 || s.getColor(c.value) !== e);
        u().$patch((a) => {
          a.board = {
            ...a.board,
            orientation: 'white',
            pieces: {
              [c.value.toLowerCase()]: `${_.value}K`,
              [o.value.toLowerCase()]: `${_.value === 'w' ? 'b' : 'w'}B`,
            },
            highlightPositive: [],
            highlightNegative: [],
          };
        }),
          (l.value = !1);
      }
      const S = b(() => u().board.pieces);
      function q(e, i) {
        if (l.value) return;
        i.stopPropagation(), (h.value = s.areOnSameDiagonal(e, c.value));
        const a = s
          .getSquaresOnSameDiagonal(c.value)
          .filter((t) => s.getSquaresOnSameDiagonal(o.value).indexOf(t) > -1);
        h.value
          ? ((l.value = !0),
            k.$patch((t) => t.exercise.correctAnswers++),
            u().$patch((t) => {
              (t.board.highlightPositive = [e]),
                (t.board.highlightNegative = []);
            }))
          : (x.handleMistake(O, void 0),
            u().$patch((t) => {
              (t.board.highlightPositive = a),
                (t.board.highlightNegative = [e]);
            })),
          (n.value = !0);
      }
      function O() {
        (n.value = !0), (l.value = !0);
      }
      function $(e) {
        n.value && (e.stopPropagation(), w());
      }
      const B = b(() => {
        if (o.value) {
          const e = s.getSquaresOnSameDiagonal(o.value);
          do {
            const i = s.getRandomSquare();
            e.indexOf(i) === -1 && e.push(i);
          } while (e.length < 12);
          return e.sort((i, a) => (i > a ? 1 : -1)), e;
        } else return [];
      });
      return (e, i) => (
        v(),
        m(
          'div',
          {
            class: 'relative-position column flex-1 self-stretch',
            onClick: $,
            ref: 'coreExercise',
          },
          [
            g(n)
              ? V('', !0)
              : (v(),
                m('div', W, [
                  r('div', z, p(e.$t('Attack the king with your bishop')), 1),
                  r('div', K, [
                    r('div', T, [f(j, { pieces: g(S) }, null, 8, ['pieces'])]),
                  ]),
                  r('div', G, [
                    (v(!0),
                    m(
                      Q,
                      null,
                      P(
                        g(B),
                        (a) => (
                          v(),
                          m('div', { key: a, class: 'text-h5' }, [
                            f(
                              M,
                              {
                                push: '',
                                color: 'primary',
                                onClick: (t) => q(a, t),
                                'no-caps': '',
                              },
                              { default: A(() => [L(p(a), 1)]), _: 2 },
                              1032,
                              ['onClick']
                            ),
                          ])
                        )
                      ),
                      128
                    )),
                  ]),
                ])),
            r(
              'div',
              {
                style: C({ opacity: g(n) ? 1 : 0 }),
                class:
                  'no-pointer-events absolute-full column items-stretch q-pa-lg',
              },
              [
                r(
                  'div',
                  {
                    class: 'text-h5 text-center',
                    style: C({ color: h.value ? 'green' : 'red' }),
                  },
                  p(h.value ? e.$t('Correct') : e.$t('Wrong')),
                  5
                ),
                r('div', H, [f(F)]),
                r('div', I, [r('span', null, p(e.$t('Click to continue')), 1)]),
              ],
              4
            ),
          ],
          512
        )
      );
    },
  });
export { ie as default };
