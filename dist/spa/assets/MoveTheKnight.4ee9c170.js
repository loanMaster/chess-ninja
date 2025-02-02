import {
  d as B,
  r as i,
  aA as E,
  b1 as L,
  C as M,
  a as O,
  o as d,
  e as m,
  f as t,
  t as o,
  k as f,
  F as T,
  l as j,
  h as p,
  g,
  x as A,
  an as S,
  w as $,
  Q as R,
  b4 as V,
} from './index.2385a99b.js';
import { c as D, e as w, T as _ } from './register-defaults.6d46d2f4.js';
import { C as x } from './chess-utils.4933cc4c.js';
import { u as y } from './exercise.store.9eb7e56f.js';
const F = { class: 'relative-position column flex-1 self-stretch' },
  G = { class: 'flex-1 justify-center column items-center' },
  I = { class: 'text-h5 text-center' },
  U = { class: 'relative-position justify-center column items-center' },
  K = {
    class: 'g-large-font g-full-width q-mt-md q-pa-md text-h5 text-center',
  },
  P = {
    class: 'row q-gutter-md max-width-xs q-mt-md justify-center',
    style: { flex: '1 0 auto', 'min-height': '7rem' },
  },
  Y = {
    class: 'column justify-center items-center',
    style: { height: '100%' },
  },
  z = { class: 'bg-white q-pa-md rounded-borders shadow-5' },
  ee = B({
    __name: 'MoveTheKnight',
    setup(H) {
      const { revealed: C, store: k, inputDisabled: n } = D(),
        v = i(!1),
        q = S(),
        s = i(''),
        l = i(''),
        u = i(''),
        c = new E();
      L(() => {
        w.createExercise(5);
      }),
        M(async () => {
          (n.value = !0), y().beginExercise(), h();
        });
      async function h() {
        if (
          !(await w.prepareNewQuestion({
            inputDisabled: n,
            revealed: C,
            router: q,
          }))
        )
          return;
        (s.value = x.getOtherRandomSquare([])),
          c.createNew({ pieces: { [s.value]: 'N' } });
        const e = c.moves(s.value);
        (u.value = x.getOtherRandomSquare([...e.map((a) => a.to), s.value])),
          y().exercise.currentQuestion > 1 &&
            (await new _().fadeOut(l.value, 0.5)),
          (n.value = !1);
      }
      async function N(e, a) {
        n.value ||
          (a.stopPropagation(),
          (v.value = u.value.toLocaleLowerCase() === e.toLocaleLowerCase()),
          v.value
            ? ((n.value = !0),
              k.$patch((r) => r.exercise.correctAnswers++),
              await new _().fadeIn(l.value, 0.5),
              h())
            : ((s.value = e), c.createNew({ pieces: { [s.value]: 'N' } })));
      }
      const b = O(() => {
        if (s.value) {
          c.createNew({ pieces: { [s.value]: 'N' } });
          const e = c.moves(s.value).map((a) => a.to);
          return e.sort((a, r) => (a > r ? 1 : -1)), e;
        } else return [];
      });
      return (e, a) => (
        d(),
        m('div', F, [
          t('div', G, [
            t('div', I, o(e.$t('Move your knight to the target square')), 1),
            t('div', U, [
              t('div', K, [
                t(
                  'div',
                  null,
                  o(e.$t('The target square is')) + ' ' + o(u.value),
                  1
                ),
                t('div', null, [
                  f(o(e.$t('Your knight is on square')) + ' ', 1),
                  t('span', null, o(s.value), 1),
                ]),
              ]),
              t('div', P, [
                (d(!0),
                m(
                  T,
                  null,
                  j(
                    p(b),
                    (r) => (
                      d(),
                      m('div', { key: r, class: 'text-h5' }, [
                        g(
                          R,
                          {
                            push: '',
                            color: 'primary',
                            onClick: (Q) => N(r, Q),
                            'no-caps': '',
                          },
                          { default: $(() => [f(o(r), 1)]), _: 2 },
                          1032,
                          ['onClick']
                        ),
                      ])
                    )
                  ),
                  128
                )),
              ]),
              t(
                'div',
                {
                  class: 'absolute-full no-pointer-events',
                  style: { opacity: '0' },
                  ref_key: 'correctAnswer',
                  ref: l,
                },
                [
                  t('div', Y, [
                    t('div', z, [
                      g(
                        A,
                        {
                          name: p(V),
                          color: 'green',
                          class: 'text-h1 margin-auto',
                        },
                        null,
                        8,
                        ['name']
                      ),
                    ]),
                  ]),
                ],
                512
              ),
            ]),
          ]),
        ])
      );
    },
  });
export { ee as default };
