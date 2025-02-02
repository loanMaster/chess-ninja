import { C as d } from './chess-board.interface.321ee08e.js';
import { u as n } from './exercise.store.9eb7e56f.js';
import {
  d as h,
  r as c,
  C as g,
  a as p,
  B as m,
  o as v,
  e as b,
  f as B,
  aG as _,
} from './index.2385a99b.js';
const x = h({
  __name: 'ExerciseBoard',
  emits: ['square-clicked'],
  setup(k, { emit: l }) {
    let e;
    const o = c(),
      i = c();
    async function u() {
      const t = {
        draggable: !1,
        onClick: (a) => {
          l('square-clicked', a);
        },
      };
      f(),
        (e = new d('.g-board', t)),
        await e.initialized.pipe(_(1)).toPromise();
    }
    function f() {
      if (o.value && i.value) {
        const t = o.value.getBoundingClientRect().width,
          a = o.value.getBoundingClientRect().height;
        i.value.setAttribute('width', Math.min(t, a) + 'px'),
          i.value.setAttribute('height', Math.min(t, a) + 'px');
      }
    }
    g(async () => {
      n().$subscribe(() => {
        s();
      }),
        await u(),
        s();
    });
    async function s() {
      if (!!e) {
        e.clear(),
          e.removeHighlighting(),
          e.position(r.value.pieces, !1),
          e.orientation(r.value.orientation);
        for (const t of r.value.highlightPositive) e.highlight(t);
        for (const t of r.value.highlightNegative) e.highlight(t, !1);
      }
    }
    const r = p(() => n().board);
    return (
      m(() => {
        e && e.destroy();
      }),
      (t, a) => (
        v(),
        b(
          'div',
          {
            ref_key: 'frame',
            ref: o,
            class: 'absolute-full column items-center justify-center',
          },
          [
            B(
              'div',
              { ref_key: 'boardWrapper', ref: i, class: 'g-board' },
              null,
              512
            ),
          ],
          512
        )
      )
    );
  },
});
export { x as _ };
