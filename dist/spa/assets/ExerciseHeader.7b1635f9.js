import {
  d as s,
  a as o,
  ap as r,
  o as n,
  s as c,
  w as a,
  g as l,
  k as i,
  t as p,
  h as m,
  aE as u,
  aF as _,
} from './index.2385a99b.js';
const h = s({
  __name: 'ExerciseHeader',
  setup(d) {
    const t = o(() => {
      var e;
      return (e = r().params) == null ? void 0 : e.game;
    });
    return (e, f) => (
      n(),
      c(
        _,
        { class: 'bg-secondary text-white no-pointer-events non-selectable' },
        {
          default: a(() => [
            l(u, null, {
              default: a(() => [i(p(e.$t('exercises.' + m(t) + '.title')), 1)]),
              _: 1,
            }),
          ]),
          _: 1,
        }
      )
    );
  },
});
export { h as _ };
