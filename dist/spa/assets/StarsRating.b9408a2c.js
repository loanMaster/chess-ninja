import {
  d as u,
  o as r,
  e as n,
  F as t,
  l as m,
  s as l,
  h as o,
  v as c,
  x as s,
  y,
} from './index.2385a99b.js';
const d = u({
  __name: 'StarsRating',
  props: { rating: Number, max: { type: Number, default: 5 } },
  setup(e) {
    return (i, f) => (
      r(),
      n('div', null, [
        (r(!0),
        n(
          t,
          null,
          m(
            Array.from(Array(e.rating).keys()),
            (a) => (
              r(),
              l(s, { name: o(c), color: 'amber-4', key: a }, null, 8, ['name'])
            )
          ),
          128
        )),
        (r(!0),
        n(
          t,
          null,
          m(
            Array.from(Array(e.max - e.rating).keys()),
            (a) => (
              r(),
              l(s, { name: o(y), color: 'amber-4', key: a }, null, 8, ['name'])
            )
          ),
          128
        )),
      ])
    );
  },
});
export { d as _ };
