import {
  _ as w,
  d as S,
  a as d,
  o as _,
  e as m,
  g as r,
  w as o,
  i as v,
  an as y,
  u as i,
  m as c,
  f as e,
  t as s,
  h as n,
  ao as C,
  Q as k,
  k as T,
} from './index.2385a99b.js';
import { _ as V } from './StarsRating.b9408a2c.js';
import { u as j, e as f } from './exercise.store.9eb7e56f.js';
import { f as N } from './format-number.dd03eb7b.js';
const $ = {
    class: 'column items-center justify-center non-selectable q-ma-lg',
  },
  b = { class: 'text-h4' },
  B = { class: 'text-h3' },
  O = { class: 'row-sm column-xs justify-center no-wrap' },
  G = { class: 'column col-6' },
  Q = { class: 'row justify-between' },
  R = { class: 'row justify-between' },
  q = { key: 0, class: 'row justify-center' },
  A = { class: 'row justify-center' },
  D = S({
    __name: 'ScoreScreenView',
    setup(E) {
      const t = j(),
        p = y();
      function g() {
        p.push({
          name: t.exercise.nameOfTheGame.toLowerCase(),
          params: {
            game: t.exercise.nameOfTheGame.toLowerCase(),
            language: i().language,
          },
        });
      }
      function u(a, l) {
        return N(a, l);
      }
      const h = d(() => {
          const a =
            t.exercise.rating === 3
              ? f[t.exercise.nameOfTheGame].threeStarRating
              : f[t.exercise.nameOfTheGame].fourStarRating;
          return u(a / 1e3, i().language);
        }),
        x = d(() => i().language);
      return (a, l) => (
        _(),
        m('div', $, [
          r(
            v,
            {
              class:
                'max-width-sm q-pa-lg full-width text-center semi-transparent-background',
            },
            {
              default: o(() => [
                r(c, null, {
                  default: o(() => [
                    e('div', b, s(a.$t('Exercise finished')), 1),
                  ]),
                  _: 1,
                }),
                r(
                  c,
                  { style: { padding: '0' } },
                  {
                    default: o(() => [
                      e('div', B, [
                        r(V, { rating: n(t).exercise.rating || 0 }, null, 8, [
                          'rating',
                        ]),
                      ]),
                    ]),
                    _: 1,
                  }
                ),
                e('div', O, [
                  e('div', G, [
                    e('div', Q, [
                      e('span', null, s(a.$t('Mistakes')), 1),
                      e('span', null, s(n(t).exercise.totalStrikeCount), 1),
                    ]),
                    e('div', R, [
                      e('span', null, s(a.$t('Time required')), 1),
                      e(
                        'span',
                        null,
                        s(u(n(t).exercise.duration / 1e3, n(x))) + ' s',
                        1
                      ),
                    ]),
                    n(t).exercise.totalStrikeCount === 0 &&
                    n(t).exercise.rating < 5
                      ? (_(),
                        m('div', q, [
                          e(
                            'span',
                            null,
                            s(
                              a.$t('Beat _DURATION_s to get one more star', {
                                duration: n(h),
                              })
                            ),
                            1
                          ),
                        ]))
                      : C('', !0),
                  ]),
                ]),
                r(c, null, {
                  default: o(() => [
                    e('div', A, [
                      r(
                        k,
                        { onClick: g },
                        {
                          default: o(() => [T(s(a.$t('Train again')), 1)]),
                          _: 1,
                        }
                      ),
                    ]),
                  ]),
                  _: 1,
                }),
              ]),
              _: 1,
            }
          ),
        ])
      );
    },
  });
var U = w(D, [['__scopeId', 'data-v-6febd610']]);
export { U as default };
