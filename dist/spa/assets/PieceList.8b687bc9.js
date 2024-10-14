import { C as l } from './chess-utils.4933cc4c.js';
import {
  d as u,
  a as m,
  o as r,
  e as n,
  l as f,
  t as c,
  h as C,
  F as _,
} from './index.2385a99b.js';
const d = u({
  __name: 'PieceList',
  props: { pieces: Object },
  setup(a) {
    const o = a,
      i = m(() =>
        o.pieces
          ? Object.keys(o.pieces).map((e) => {
              const t = o.pieces[e].length > 1 ? p(o.pieces[e]) : o.pieces[e];
              return {
                square: e.toLowerCase(),
                color: t.toLowerCase() === t ? 'Black' : 'White',
                symbol: l.getSymbol(t),
              };
            })
          : []
      );
    function p(e) {
      const t = e[1];
      return e[0] === 'w' ? t.toUpperCase() : t.toLowerCase();
    }
    return (e, t) => (
      r(!0),
      n(
        _,
        null,
        f(
          C(i),
          (s) => (
            r(),
            n(
              'div',
              { key: s, style: { color: 'black' } },
              c(s.symbol) + ': ' + c(s.square),
              1
            )
          )
        ),
        128
      )
    );
  },
});
export { d as _ };
