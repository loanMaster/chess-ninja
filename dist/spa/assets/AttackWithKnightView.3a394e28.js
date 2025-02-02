import {
  d as B,
  r as d,
  aA as S,
  b1 as V,
  C as A,
  a as b,
  o as m,
  e as p,
  h as f,
  f as r,
  t as g,
  g as w,
  F as K,
  l as L,
  ao as R,
  av as C,
  an as j,
  w as D,
  k as F,
  Q as G,
} from './index.2385a99b.js';
import { _ as U } from './PieceList.8b687bc9.js';
import { _ as W } from './ExerciseBoard.41f7421a.js';
import { c as z, e as x } from './register-defaults.6d46d2f4.js';
import { C as y } from './chess-utils.4933cc4c.js';
import { u as h } from './exercise.store.9eb7e56f.js';
import './chess-board.interface.321ee08e.js';
import './dateTimestampProvider.aca62768.js';
const T = { key: 0, class: 'flex-1 justify-center column items-center' },
  H = { class: 'text-h5 text-center' },
  I = {
    class: 'g-large-font g-full-width q-mt-md pieces-bg q-pa-md',
    style: { 'border-radius': '25px' },
  },
  J = { class: 'text-h5 q-gutter-lg row' },
  X = { class: 'row q-gutter-md max-width-xs q-mt-md justify-center' },
  Y = { class: 'flex-1 relative-position', style: { 'max-height': '100%' } },
  Z = { class: 'column items-center' },
  le = B({
    __name: 'AttackWithKnightView',
    setup(ee) {
      const { revealed: c, store: $, inputDisabled: l } = z(),
        v = d(!1),
        M = j(),
        a = d(''),
        u = d(''),
        _ = d('w'),
        o = new S();
      V(() => {
        x.createExercise(10);
      }),
        A(async () => {
          (l.value = !0), h().beginExercise(), k();
        });
      async function k() {
        if (
          !(await x.prepareNewQuestion({
            inputDisabled: l,
            revealed: c,
            router: M,
          }))
        )
          return;
        (a.value = y.getOtherRandomSquare([a.value])),
          o.createNew({ pieces: { [a.value]: 'N' } });
        const e = o.moves(a.value),
          s = e[Math.floor(Math.random() * e.length)];
        o.createNew({ pieces: { [s.to]: 'N' } });
        const i = o.moves(s.to).map((n) => n.to);
        do u.value = i[Math.floor(Math.random() * i.length)];
        while (u.value === a.value);
        h().$patch((n) => {
          n.board = {
            ...n.board,
            orientation: 'white',
            pieces: {
              [u.value.toLowerCase()]: `${_.value}K`,
              [a.value.toLowerCase()]: `${_.value === 'w' ? 'b' : 'w'}N`,
            },
            highlightPositive: [],
            highlightNegative: [],
          };
        }),
          (l.value = !1);
      }
      const q = b(() => h().board.pieces);
      function E(e, s) {
        if (l.value) return;
        s.stopPropagation(), o.createNew({ pieces: { [a.value]: 'N' } });
        const i = o.moves(a.value).map((t) => t.to);
        o.createNew({ pieces: { [u.value]: 'N' } });
        const n = o.moves(u.value).map((t) => t.to),
          N = i.filter((t) => n.indexOf(t) > -1);
        (v.value = N.indexOf(e) > -1),
          v.value
            ? ((l.value = !0),
              $.$patch((t) => t.exercise.correctAnswers++),
              h().$patch((t) => {
                (t.board.highlightPositive = [e]),
                  (t.board.highlightNegative = []);
              }))
            : (x.handleMistake(O, void 0),
              h().$patch((t) => {
                (t.board.highlightPositive = N),
                  (t.board.highlightNegative = [e]);
              })),
          (c.value = !0);
      }
      function O() {
        (c.value = !0), (l.value = !0);
      }
      function P(e) {
        c.value && (e.stopPropagation(), k());
      }
      const Q = b(() => {
        if (a.value) {
          o.createNew({ pieces: { [a.value]: 'N' } });
          const e = o.moves(a.value).map((s) => s.to);
          do {
            const s = y.getRandomSquare();
            e.indexOf(s) === -1 && e.push(s);
          } while (e.length < 12);
          return e.sort((s, i) => (s > i ? 1 : -1)), e;
        } else return [];
      });
      return (e, s) => (
        m(),
        p(
          'div',
          {
            class: 'relative-position column flex-1 self-stretch',
            onClick: P,
            ref: 'coreExercise',
          },
          [
            f(c)
              ? R('', !0)
              : (m(),
                p('div', T, [
                  r('div', H, g(e.$t('Attack the king with your knight')), 1),
                  r('div', I, [
                    r('div', J, [w(U, { pieces: f(q) }, null, 8, ['pieces'])]),
                  ]),
                  r('div', X, [
                    (m(!0),
                    p(
                      K,
                      null,
                      L(
                        f(Q),
                        (i) => (
                          m(),
                          p('div', { key: i, class: 'text-h5' }, [
                            w(
                              G,
                              {
                                push: '',
                                color: 'primary',
                                onClick: (n) => E(i, n),
                                'no-caps': '',
                              },
                              { default: D(() => [F(g(i), 1)]), _: 2 },
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
                style: C({ opacity: f(c) ? 1 : 0 }),
                class:
                  'no-pointer-events absolute-full column items-stretch q-pa-lg',
              },
              [
                r(
                  'div',
                  {
                    class: 'text-h5 text-center',
                    style: C({ color: v.value ? 'green' : 'red' }),
                  },
                  g(v.value ? e.$t('Correct') : e.$t('Wrong')),
                  5
                ),
                r('div', Y, [w(W)]),
                r('div', Z, [r('span', null, g(e.$t('Click to continue')), 1)]),
              ],
              4
            ),
          ],
          512
        )
      );
    },
  });
export { le as default };
