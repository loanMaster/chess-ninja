import {
  d as x,
  r as h,
  C as P,
  am as s,
  a as j,
  B as q,
  o as A,
  e as S,
  f as o,
  g as u,
  w as c,
  h as d,
  Q as p,
  an as W,
  u as b,
  k as m,
  t as f,
} from './index.2385a99b.js';
import { C as R } from './chess-board.interface.321ee08e.js';
import './dateTimestampProvider.aca62768.js';
const $ = {
    class: 'row-md column-sm column-xs flex-1',
    style: { 'max-height': '100%', overflow: 'hidden' },
  },
  M = o('div', { class: 'col-3 q-pt-lg xs-hide sm-hide' }, null, -1),
  N = {
    class: 'flex-1 q-my-md relative-position',
    style: { 'max-height': '100%' },
  },
  U = {
    class:
      'col-md-3 q-pt-md-lg q-pt-sm-xs q-gutter-sm column-md row-sm row-xs items-center justify-md-start justify-sm-center justify-xs-center',
  },
  Q = x({
    __name: 'SetupBoard',
    setup(V) {
      let t = h(void 0);
      const g = W(),
        r = h(),
        i = h();
      P(() => {
        s().stopGame(),
          setTimeout(() => {
            v(), s().position.fen && t.value.position(s().position.fen, !1);
          }, 1);
      });
      const l = j(() => !t.value);
      q(() => {
        t.value && t.value.destroy();
      });
      async function w() {
        await s().setupBoard({
          playerColor: 'black',
          config: { turn: 'white', pieces: y(t.value.getPosition()) },
        }),
          g.push({ name: 'play', params: { language: b().language } });
      }
      async function C() {
        await s().setupBoard({
          playerColor: 'white',
          config: { turn: 'white', pieces: y(t.value.getPosition()) },
        }),
          g.push({ name: 'play', params: { language: b().language } });
      }
      function y(e) {
        const a = {};
        return (
          Object.keys(e).forEach((n) => {
            const k = e[n].startsWith('w') ? 'white' : 'black';
            a[n.toUpperCase()] =
              k === 'white' ? e[n][1].toUpperCase() : e[n][1].toLowerCase();
          }),
          a
        );
      }
      function v() {
        t.value && t.value.destroy(),
          _(),
          (t.value = new R('.g-board', {
            dropOffBoard: 'trash',
            sparePieces: !0,
          }));
      }
      function _() {
        if (r.value && i.value) {
          const e = r.value.getBoundingClientRect().width,
            a = r.value.getBoundingClientRect().height;
          i.value.setAttribute('width', Math.min(e, a) + 'px'),
            i.value.setAttribute('height', Math.min(e, a) + 'px');
        }
      }
      function B() {
        t.value.clear(!1);
      }
      return (e, a) => (
        A(),
        S('div', $, [
          M,
          o('div', N, [
            o(
              'div',
              {
                ref_key: 'frame',
                ref: r,
                class:
                  'bg-secondary absolute-full column items-center justify-center',
              },
              [
                o(
                  'div',
                  {
                    ref_key: 'boardWrapper',
                    ref: i,
                    class: 'g-board relative-position',
                  },
                  null,
                  512
                ),
              ],
              512
            ),
          ]),
          o('div', U, [
            u(
              p,
              { color: 'primary', onClick: v, disable: d(l) },
              { default: c(() => [m(f(e.$t('Reset')), 1)]), _: 1 },
              8,
              ['disable']
            ),
            u(
              p,
              { color: 'primary', onClick: B, disable: d(l) },
              { default: c(() => [m(f(e.$t('Clear')), 1)]), _: 1 },
              8,
              ['disable']
            ),
            u(
              p,
              { color: 'primary', onClick: C, disable: d(l) },
              { default: c(() => [m(f(e.$t('Play as white')), 1)]), _: 1 },
              8,
              ['disable']
            ),
            u(
              p,
              { color: 'primary', onClick: w, disable: d(l) },
              { default: c(() => [m(f(e.$t('Play as black')), 1)]), _: 1 },
              8,
              ['disable']
            ),
          ]),
        ])
      );
    },
  });
export { Q as default };
