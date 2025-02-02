import {
  _ as w,
  d as C,
  r as v,
  a as S,
  o as n,
  e as r,
  f as a,
  t as l,
  g as e,
  w as s,
  Q as k,
  h as _,
  i as c,
  u as I,
  j as B,
  k as i,
  F as x,
  l as f,
  m as u,
  n as z,
  p as E,
  q as N,
} from './index.2385a99b.js';
import { _ as q } from './StarsRating.b9408a2c.js';
import { u as Q } from './exercise.store.9eb7e56f.js';
const V = (d) => (E('data-v-3067902c'), (d = d()), N(), d),
  H = { class: 'max-width-sm column items-center q-mx-auto' },
  L = { class: 'column items-center q-mt-xl' },
  j = V(() => a('div', { class: 'text-h2' }, 'ChessNinja', -1)),
  F = { class: 'text-h4 q-mt-lg text-center' },
  P = { class: 'row q-gutter-sm q-mt-lg' },
  T = { class: 'exercise-title' },
  A = { class: 'row-sm column-xs q-col-gutter-lg q-mb-lg' },
  D = { class: 'exercise-title' },
  G = { class: 'row-sm column-xs q-col-gutter-lg q-mb-lg' },
  J = { class: 'exercise-title' },
  K = { class: 'row-sm column-xs q-col-gutter-lg q-mb-lg' },
  M = C({
    __name: 'HomeComponent',
    setup(d) {
      const y = v([
          'find-the-square',
          'guess-color',
          'same-diagonal',
          'attack-with-bishop',
          'attack-with-knight',
          'save-the-king',
          'move-your-knight',
        ]),
        b = v([
          'queen-vs-king',
          'rook-vs-king',
          'queen-vs-rook',
          'queen-vs-knights',
        ]);
      function $(o) {
        document.getElementById(o).scrollIntoView();
      }
      const m = S(() => I().language);
      function h(o) {
        return Q().ratings[o] || 0;
      }
      return (o, g) => {
        const p = B('router-link');
        return (
          n(),
          r('div', H, [
            a('div', L, [
              j,
              a('div', F, l(o.$t('Learn to play blind chess')), 1),
              a('div', P, [
                e(
                  k,
                  {
                    color: 'primary',
                    push: '',
                    rouned: '',
                    onClick: g[0] || (g[0] = (t) => $('exercises')),
                  },
                  { default: s(() => [i(l(o.$t('Learn')), 1)]), _: 1 }
                ),
                e(
                  k,
                  {
                    color: 'primary',
                    push: '',
                    rouned: '',
                    to: { name: 'play', language: _(m) },
                  },
                  { default: s(() => [i(l(o.$t('Play')), 1)]), _: 1 },
                  8,
                  ['to']
                ),
              ]),
            ]),
            e(
              c,
              { class: 'exercise-block q-mt-xl', id: 'exercises' },
              {
                default: s(() => [
                  a('div', T, l(o.$t('Exercises')), 1),
                  a('div', A, [
                    (n(!0),
                    r(
                      x,
                      null,
                      f(
                        y.value,
                        (t) => (
                          n(),
                          r('div', { key: t, class: 'col-4 column' }, [
                            e(
                              p,
                              {
                                to: {
                                  name: t,
                                  params: { game: t, language: _(m) },
                                },
                                class: 'text-color-default',
                                style: {
                                  'text-decoration': 'none',
                                  display: 'block',
                                },
                              },
                              {
                                default: s(() => [
                                  e(
                                    c,
                                    {
                                      class:
                                        'flex-1 cursor-pointer zoom-on-hover',
                                    },
                                    {
                                      default: s(() => [
                                        e(
                                          u,
                                          {
                                            class:
                                              'text-bold text-center bg-exercise',
                                          },
                                          {
                                            default: s(() => [
                                              i(
                                                l(o.$t(`exercises.${t}.title`)),
                                                1
                                              ),
                                            ]),
                                            _: 2,
                                          },
                                          1024
                                        ),
                                        e(
                                          u,
                                          { class: 'text-center' },
                                          {
                                            default: s(() => [
                                              e(
                                                q,
                                                {
                                                  rating: h(t),
                                                  class: 'text-h4 q-ml-xs',
                                                },
                                                null,
                                                8,
                                                ['rating']
                                              ),
                                            ]),
                                            _: 2,
                                          },
                                          1024
                                        ),
                                      ]),
                                      _: 2,
                                    },
                                    1024
                                  ),
                                ]),
                                _: 2,
                              },
                              1032,
                              ['to']
                            ),
                          ])
                        )
                      ),
                      128
                    )),
                  ]),
                ]),
                _: 1,
              }
            ),
            e(
              c,
              { class: 'exercise-block q-mt-xl' },
              {
                default: s(() => [
                  a('div', D, l(o.$t('Scenarios')), 1),
                  a('div', G, [
                    (n(!0),
                    r(
                      x,
                      null,
                      f(
                        b.value,
                        (t) => (
                          n(),
                          r('div', { key: t, class: 'col-3 column flex-1' }, [
                            e(
                              p,
                              {
                                to: {
                                  name: t,
                                  params: { game: t, language: _(m) },
                                },
                                class: 'text-color-default column flex-1',
                                style: {
                                  'text-decoration': 'none',
                                  display: 'block',
                                },
                              },
                              {
                                default: s(() => [
                                  e(
                                    c,
                                    {
                                      class:
                                        'flex-1 cursor-pointer zoom-on-hover',
                                    },
                                    {
                                      default: s(() => [
                                        e(
                                          u,
                                          {
                                            class:
                                              'text-bold text-center bg-exercise',
                                          },
                                          {
                                            default: s(() => [
                                              i(
                                                l(o.$t(`exercises.${t}.title`)),
                                                1
                                              ),
                                            ]),
                                            _: 2,
                                          },
                                          1024
                                        ),
                                        e(
                                          u,
                                          { class: 'text-center' },
                                          {
                                            default: s(() => [
                                              e(
                                                q,
                                                {
                                                  max: 1,
                                                  rating: h(t),
                                                  class: 'text-h4 q-ml-xs',
                                                },
                                                null,
                                                8,
                                                ['rating']
                                              ),
                                            ]),
                                            _: 2,
                                          },
                                          1024
                                        ),
                                      ]),
                                      _: 2,
                                    },
                                    1024
                                  ),
                                ]),
                                _: 2,
                              },
                              1032,
                              ['to']
                            ),
                          ])
                        )
                      ),
                      128
                    )),
                  ]),
                ]),
                _: 1,
              }
            ),
            e(
              c,
              { class: 'exercise-block q-mt-xl' },
              {
                default: s(() => [
                  a('div', J, l(o.$t('Play')), 1),
                  a('div', K, [
                    (n(),
                    r(
                      x,
                      null,
                      f([0, 1, 2], (t) =>
                        a('div', { key: t, class: 'col-4 column' }, [
                          e(
                            p,
                            {
                              to: {
                                name: 'play',
                                params: { language: _(m) },
                                query: { difficulty: t },
                              },
                              class: 'text-color-default',
                              style: {
                                'text-decoration': 'none',
                                display: 'block',
                              },
                            },
                            {
                              default: s(() => [
                                e(
                                  c,
                                  {
                                    class:
                                      'flex-1 cursor-pointer zoom-on-hover',
                                  },
                                  {
                                    default: s(() => [
                                      e(
                                        u,
                                        {
                                          class: z([
                                            'text-bold text-center',
                                            `bg-play-${t}`,
                                          ]),
                                        },
                                        {
                                          default: s(() => [
                                            i(
                                              l(o.$t(`play_difficulty_${t}`)),
                                              1
                                            ),
                                          ]),
                                          _: 2,
                                        },
                                        1032,
                                        ['class']
                                      ),
                                    ]),
                                    _: 2,
                                  },
                                  1024
                                ),
                              ]),
                              _: 2,
                            },
                            1032,
                            ['to']
                          ),
                        ])
                      ),
                      64
                    )),
                  ]),
                ]),
                _: 1,
              }
            ),
          ])
        );
      };
    },
  });
var W = w(M, [['__scopeId', 'data-v-3067902c']]);
export { W as default };
