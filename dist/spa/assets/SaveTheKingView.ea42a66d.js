import {
  d as j,
  r as u,
  aA as A,
  b1 as D,
  C as F,
  a as q,
  o as m,
  e as f,
  h as g,
  f as i,
  t as p,
  g as x,
  w as Q,
  Q as B,
  F as G,
  l as I,
  ao as U,
  av as O,
  an as z,
  k as E,
} from './index.2385a99b.js';
import { _ as W } from './PieceList.8b687bc9.js';
import { _ as H } from './ExerciseBoard.41f7421a.js';
import { c as J, e as _ } from './register-defaults.6d46d2f4.js';
import { C as M } from './chess-utils.4933cc4c.js';
import { u as v } from './exercise.store.9eb7e56f.js';
import './chess-board.interface.321ee08e.js';
import './dateTimestampProvider.aca62768.js';
const X = { key: 0, class: 'flex-1 justify-center column items-center' },
  Y = { class: 'text-h5 text-center' },
  Z = {
    class: 'g-large-font g-full-width q-mt-md pieces-bg q-pa-md',
    style: { 'border-radius': '25px' },
  },
  ee = { class: 'text-h5 q-gutter-lg row' },
  te = { class: 'row q-gutter-md max-width-xs q-mt-md justify-center' },
  se = { class: 'flex-1 relative-position', style: { 'max-height': '100%' } },
  ae = { class: 'column items-center' },
  de = j({
    __name: 'SaveTheKingView',
    setup(oe) {
      const { revealed: c, store: P, inputDisabled: l } = J(),
        d = u(!1),
        S = z(),
        a = u(''),
        C = u('w'),
        n = new A(),
        h = u('k'),
        r = u(''),
        y = ['Q', 'B', 'N', 'R'],
        w = u(!1);
      D(() => {
        _.createExercise(10);
      }),
        F(async () => {
          (l.value = !0), v().beginExercise(), b();
        });
      async function b() {
        if (
          !(await _.prepareNewQuestion({
            inputDisabled: l,
            revealed: c,
            router: S,
          }))
        )
          return;
        (h.value = y[v().exercise.currentQuestion % y.length]),
          (r.value = M.getOtherRandomSquare([r.value])),
          n.createNew({ pieces: { [r.value]: h.value } });
        const e = n.moves(r.value).map((t) => t.to);
        w.value = Math.random() > 0.5;
        do a.value = M.getOtherRandomSquare([r.value]);
        while (e.indexOf(a.value) > -1 !== w.value);
        v().$patch((t) => {
          t.board = {
            ...t.board,
            orientation: 'white',
            pieces: {
              [a.value.toLowerCase()]: `${C.value}K`,
              [r.value.toLowerCase()]: `${C.value === 'w' ? 'b' : 'w'}${
                h.value
              }`,
            },
            highlightPositive: [],
            highlightNegative: [],
          };
        }),
          (l.value = !1);
      }
      const V = q(() => v().board.pieces);
      function N(e, t) {
        if (l.value) return;
        t.stopPropagation(), n.createNew({ pieces: { [r.value]: h.value } });
        const o = n.moves(r.value).map((s) => s.to);
        n.createNew({ pieces: { [a.value]: 'K' } });
        const k = n.moves(a.value).map((s) => s.to),
          $ = w.value ? k.filter((s) => o.indexOf(s) === -1) : [a.value];
        (d.value = $.indexOf(e) > -1),
          d.value
            ? ((l.value = !0),
              P.$patch((s) => s.exercise.correctAnswers++),
              v().$patch((s) => {
                (s.board.highlightPositive = [e]),
                  (s.board.highlightNegative = []);
              }))
            : (_.handleMistake(K, void 0),
              v().$patch((s) => {
                (s.board.highlightPositive = $),
                  (s.board.highlightNegative = [e]);
              })),
          (c.value = !0);
      }
      function K() {
        (c.value = !0), (l.value = !0);
      }
      function R(e) {
        c.value && (e.stopPropagation(), b());
      }
      function L(e) {
        N(a.value, e);
      }
      const T = q(() => {
        if (a.value) {
          n.createNew({ pieces: { [a.value]: 'K' } });
          const e = n.moves(a.value).map((t) => t.to);
          return e.sort((t, o) => (t > o ? 1 : -1)), e;
        } else return [];
      });
      return (e, t) => (
        m(),
        f(
          'div',
          {
            class: 'relative-position column flex-1 self-stretch',
            onClick: R,
            ref: 'coreExercise',
          },
          [
            g(c)
              ? U('', !0)
              : (m(),
                f('div', X, [
                  i(
                    'div',
                    Y,
                    p(
                      e.$t(
                        "Is your king under attack? Bring him to safety otherwise click on 'Not in check'"
                      )
                    ),
                    1
                  ),
                  i('div', Z, [
                    i('div', ee, [x(W, { pieces: g(V) }, null, 8, ['pieces'])]),
                  ]),
                  x(
                    B,
                    {
                      push: '',
                      color: 'primary',
                      onClick: t[0] || (t[0] = (o) => L(o)),
                      class: 'q-mt-md',
                      'no-caps': '',
                    },
                    { default: Q(() => [E(p(e.$t('Not in check')), 1)]), _: 1 }
                  ),
                  i('div', te, [
                    (m(!0),
                    f(
                      G,
                      null,
                      I(
                        g(T),
                        (o) => (
                          m(),
                          f('div', { key: o, class: 'text-h5' }, [
                            x(
                              B,
                              {
                                push: '',
                                color: 'primary',
                                onClick: (k) => N(o, k),
                                'no-caps': '',
                              },
                              { default: Q(() => [E(p(o), 1)]), _: 2 },
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
            i(
              'div',
              {
                style: O({ opacity: g(c) ? 1 : 0 }),
                class:
                  'no-pointer-events absolute-full column items-stretch q-pa-lg',
              },
              [
                i(
                  'div',
                  {
                    class: 'text-h5 text-center',
                    style: O({ color: d.value ? 'green' : 'red' }),
                  },
                  p(d.value ? e.$t('Correct') : e.$t('Wrong')),
                  5
                ),
                i('div', se, [x(H)]),
                i('div', ae, [
                  i('span', null, p(e.$t('Click to continue')), 1),
                ]),
              ],
              4
            ),
          ],
          512
        )
      );
    },
  });
export { de as default };
