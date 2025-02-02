import {
  d as S,
  r as d,
  b1 as D,
  C as O,
  o as g,
  e as x,
  h as C,
  f as r,
  t as l,
  g as h,
  w as _,
  Q as b,
  ao as E,
  av as q,
  an as M,
  k as y,
} from './index.2385a99b.js';
import { _ as Q } from './ExerciseBoard.41f7421a.js';
import { c as B, e as m } from './register-defaults.6d46d2f4.js';
import { C as c } from './chess-utils.4933cc4c.js';
import { u as v } from './exercise.store.9eb7e56f.js';
import './chess-board.interface.321ee08e.js';
import './dateTimestampProvider.aca62768.js';
const P = { key: 0, class: 'flex-1 justify-center column items-center' },
  V = { class: 'text-h5 text-center' },
  z = { class: 'row q-gutter-xl q-mt-sm' },
  R = { class: 'flex-1 relative-position', style: { 'max-height': '100%' } },
  A = { class: 'column items-center' },
  I = S({
    __name: 'SameDiagonalView',
    setup(U) {
      const { revealed: i, store: $, inputDisabled: n } = B(),
        u = d(!1),
        k = M(),
        o = d(''),
        a = d('');
      D(() => {
        m.createExercise(10);
      }),
        O(async () => {
          (n.value = !0), v().beginExercise(), f();
        });
      async function f() {
        if (
          !(await m.prepareNewQuestion({
            inputDisabled: n,
            revealed: i,
            router: k,
          }))
        )
          return;
        o.value = c.getOtherRandomSquare([o.value, a.value]);
        const t = Math.random() > 0.5,
          s = c.getSquaresOnSameDiagonal(o.value);
        if (t) a.value = s[Math.floor(Math.random() * s.length)];
        else
          do a.value = c.getOtherRandomSquare([o.value, a.value]);
          while (s.indexOf(a.value) > -1 && o.value === a.value);
        v().$patch((e) => {
          e.board = {
            ...e.board,
            orientation: 'white',
            pieces: {},
            highlightPositive: [],
            highlightNegative: [],
          };
        }),
          (n.value = !1);
      }
      function p(t, s) {
        n.value ||
          (s.stopPropagation(),
          (u.value = t === c.areOnSameDiagonal(o.value, a.value)),
          u.value
            ? ((n.value = !0),
              $.$patch((e) => e.exercise.correctAnswers++),
              v().$patch((e) => {
                (e.board.highlightPositive = [o.value, a.value]),
                  (e.board.highlightNegative = []);
              }))
            : (m.handleMistake(w, void 0),
              v().$patch((e) => {
                (e.board.highlightPositive = []),
                  (e.board.highlightNegative = [o.value, a.value]);
              })),
          (i.value = !0));
      }
      function w() {
        (i.value = !0), (n.value = !0);
      }
      function N(t) {
        i.value && (t.stopPropagation(), f());
      }
      return (t, s) => (
        g(),
        x(
          'div',
          {
            class: 'relative-position column flex-1 self-stretch',
            onClick: N,
            ref: 'coreExercise',
          },
          [
            C(i)
              ? E('', !0)
              : (g(),
                x('div', P, [
                  r(
                    'div',
                    V,
                    l(
                      t.$t(
                        'Are { square1 } and { square2 } on the same diagonal?',
                        { square1: o.value, square2: a.value }
                      )
                    ),
                    1
                  ),
                  r('div', z, [
                    h(
                      b,
                      {
                        color: 'primary',
                        size: 'xl',
                        push: '',
                        rounded: '',
                        onClick: s[0] || (s[0] = (e) => p(!0, e)),
                      },
                      { default: _(() => [y(l(t.$t('Yes')), 1)]), _: 1 }
                    ),
                    h(
                      b,
                      {
                        color: 'primary',
                        size: 'xl',
                        push: '',
                        rounded: '',
                        onClick: s[1] || (s[1] = (e) => p(!1, e)),
                      },
                      { default: _(() => [y(l(t.$t('No')), 1)]), _: 1 }
                    ),
                  ]),
                ])),
            r(
              'div',
              {
                style: q({ opacity: C(i) ? 1 : 0 }),
                class:
                  'no-pointer-events absolute-full column items-stretch q-pa-lg',
              },
              [
                r(
                  'div',
                  {
                    class: 'text-h5 text-center',
                    style: q({ color: u.value ? 'green' : 'red' }),
                  },
                  l(u.value ? t.$t('Correct') : t.$t('Wrong')),
                  5
                ),
                r('div', R, [h(Q)]),
                r('div', A, [r('span', null, l(t.$t('Click to continue')), 1)]),
              ],
              4
            ),
          ],
          512
        )
      );
    },
  });
export { I as default };
