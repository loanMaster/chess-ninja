import {
  _ as t,
  d as o,
  e as s,
  f as e,
  g as n,
  o as a,
  Q as r,
} from './index.2385a99b.js';
const c = o({ name: 'ErrorNotFound' }),
  l = {
    class: 'fullscreen bg-blue text-white text-center q-pa-md flex flex-center',
  },
  d = e('div', { style: { 'font-size': '30vh' } }, '404', -1),
  i = e(
    'div',
    { class: 'text-h2', style: { opacity: '0.4' } },
    'Oops. Nothing here...',
    -1
  );
function _(p, f, u, h, x, m) {
  return (
    a(),
    s('div', l, [
      e('div', null, [
        d,
        i,
        n(r, {
          class: 'q-mt-xl',
          color: 'white',
          'text-color': 'blue',
          unelevated: '',
          to: '/',
          label: 'Go Home',
          'no-caps': '',
        }),
      ]),
    ])
  );
}
var N = t(c, [['render', _]]);
export { N as default };
