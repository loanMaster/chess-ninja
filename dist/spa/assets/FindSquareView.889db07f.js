import { _ as $ } from './ExerciseBoard.41f7421a.js';
import { c as w, e as d } from './register-defaults.6d46d2f4.js';
import {
  _ as S,
  d as N,
  r as l,
  b1 as V,
  C as B,
  a as E,
  o as u,
  e as c,
  h as o,
  t as h,
  ao as p,
  av as x,
  f,
  g as Q,
  n as P,
  an as F,
} from './index.2385a99b.js';
import { C as M } from './chess-utils.4933cc4c.js';
import { u as i } from './exercise.store.9eb7e56f.js';
import './chess-board.interface.321ee08e.js';
import './dateTimestampProvider.aca62768.js';
const O = { class: 'column items-stretch flex-1 q-pa-lg' },
  z = {
    key: 0,
    class: 'flex-1 relative-position',
    style: { 'max-height': '100%' },
  },
  D = { class: 'column items-center' },
  R = N({
    __name: 'FindSquareView',
    setup(U) {
      const { revealed: a, store: C, inputDisabled: s } = w(),
        n = l(!1),
        y = F(),
        r = l(''),
        m = l([]),
        g = l(!1);
      V(() => {
        d.createExercise(10);
      }),
        B(async () => {
          (s.value = !0),
            i().beginExercise(),
            setTimeout(() => {
              g.value = !0;
            }),
            _();
        });
      async function _() {
        !(await d.prepareNewQuestion({
          inputDisabled: s,
          revealed: a,
          router: y,
        })) ||
          ((r.value = M.getOtherRandomSquare(m.value)),
          m.value.push(r.value),
          i().$patch((e) => {
            e.board = {
              orientation: 'white',
              pieces: {},
              highlightPositive: [],
              highlightNegative: [],
            };
          }),
          (s.value = !1));
      }
      function k(e) {
        s.value ||
          ((n.value = e === r.value),
          n.value
            ? ((s.value = !0),
              C.$patch((t) => t.exercise.correctAnswers++),
              i().$patch((t) => {
                (t.board.highlightPositive = [e]),
                  (t.board.highlightNegative = []);
              }))
            : (d.handleMistake(b, void 0),
              i().$patch((t) => {
                (t.board.highlightPositive = [r.value]),
                  (t.board.highlightNegative = [e]);
              })),
          (a.value = !0));
      }
      function b() {
        (a.value = !0), (s.value = !0);
      }
      const v = E(() => i().exercise.currentQuestion > 5);
      function q(e) {
        a.value && (e.stopPropagation(), _());
      }
      return (e, t) => (
        u(),
        c(
          'div',
          { class: 'relative-position column flex-1 self-stretch', onClick: q },
          [
            o(a)
              ? p('', !0)
              : (u(),
                c(
                  'div',
                  {
                    key: 0,
                    class: 'text-h5 text-center',
                    onClick: t[0] || (t[0] = (A) => (v.value = !o(v))),
                  },
                  h(
                    e.$t('Click on the square { square }', { square: r.value })
                  ),
                  1
                )),
            o(a)
              ? (u(),
                c(
                  'div',
                  {
                    key: 1,
                    class: 'text-h5 text-center',
                    style: x({ color: n.value ? 'green' : 'red' }),
                  },
                  h(n.value ? e.$t('Correct') : e.$t('Wrong')),
                  5
                ))
              : p('', !0),
            f('div', O, [
              g.value
                ? (u(),
                  c('div', z, [
                    Q(
                      $,
                      {
                        class: P([
                          o(v) ? 'c-rotate-board' : '',
                          'g-hide-notations',
                        ]),
                        onSquareClicked: k,
                      },
                      null,
                      8,
                      ['class']
                    ),
                  ]))
                : p('', !0),
              f('div', D, [
                f(
                  'span',
                  { style: x({ opacity: o(a) ? 1 : 0 }) },
                  h(e.$t('Click to continue')),
                  5
                ),
              ]),
            ]),
          ]
        )
      );
    },
  });
var K = S(R, [['__scopeId', 'data-v-930a4ef2']]);
export { K as default };
