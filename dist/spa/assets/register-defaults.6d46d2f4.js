import {
  u as d,
  ap as f,
  b3 as p,
  az as h,
  r as u,
  aC as y,
  B as x,
} from './index.2385a99b.js';
import { u as t, n as S } from './exercise.store.9eb7e56f.js';
class C {
  setVisible(s, a) {
    s &&
      s.isConnected &&
      s.style.setProperty('visibility', a ? 'visible' : 'hidden');
  }
  setDisplay(s, a) {
    s && s.isConnected && s.style.setProperty('display', a);
  }
  async fadeOut(s, a = 0.5) {
    s &&
      s.isConnected &&
      (await this._animateCSS(s, 'fadeOut', a),
      s.isConnected &&
        s.classList.contains('fadeOut') &&
        (s.classList.remove('animated', 'fadeOut', '_x_headShake'),
        s.style.setProperty('opacity', '0')));
  }
  async fadeIn(s, a = 0.5) {
    s &&
      s.isConnected &&
      (await this._animateCSS(s, 'fadeIn', a),
      s.isConnected &&
        s.classList.contains('fadeIn') &&
        (s.classList.remove('animated', 'fadeIn', '_x_headShake'),
        s.style.setProperty('opacity', '1')));
  }
  isAnimating(s, a) {
    return s && s.isConnected && s.classList.contains(a), !1;
  }
  stopAnimations(s) {
    if (s && s.isConnected) {
      s.style.removeProperty('--animate-duration'),
        s.classList.remove('animated');
      const a = [];
      s.classList.forEach((i) => a.push(i)),
        a
          .filter((i) => i.startsWith('_x_'))
          .forEach((i) => {
            s.classList.remove(i, i.replace('_x_', ''));
          });
    }
  }
  async wiggle(s, a = 0.5) {
    s &&
      s.isConnected &&
      (await this._animateCSS(s, 'headShake', a),
      s.isConnected &&
        s.classList.remove('animated', 'headShake', '_x_headShake'));
  }
  async animateCSS(s, a, i) {
    s &&
      s.isConnected &&
      (await this._animateCSS(s, a, i),
      s.isConnected && s.classList.remove('animated', a, '_x_' + a));
  }
  _animateCSS(s, a, i = 0.5) {
    return new Promise((c) => {
      const n = `${a}`;
      s.classList.add('animated', n, '_x_' + n),
        i && s.style.setProperty('--animate-duration', String(i) + 's');
      function r(o) {
        o.stopPropagation(),
          s.isConnected && i && s.style.removeProperty('--animate-duration'),
          c('Animation ended');
      }
      s.addEventListener('animationend', r, { once: !0 });
    });
  }
}
const _ = {
  wait: (e) => new Promise((s) => setTimeout(s, e)),
  difficulty: (e) => e.params.difficulty,
  nameOfTheGame: (e) => e.params.game,
  finishExercise: (e) => {
    t().finishExercise(),
      e.push({ name: 'score-screen', params: { language: d().language } });
  },
  handleMistake: function (e, s) {
    t().strike() && t().exercise.strikes >= 1 && e(),
      s && new C().wiggle(s.value);
  },
  createExercise: (e) => {
    t().$patch((s) => {
      s.exercise = S(f().params.game, e);
    });
  },
  prepareNewQuestion: async ({ inputDisabled: e, revealed: s, router: a }) => (
    (e.value = !0),
    t().$patch((i) => i.exercise.currentQuestion++),
    t().exercise.currentQuestion === t().exercise.totalQuestions + 1
      ? (await _.wait(200),
        await t().finishExercise(),
        await a.push({
          name: 'score-screen',
          params: { language: d().language },
        }),
        !1)
      : (t().$patch((i) => (i.exercise.strikes = 0)), (s.value = !1), !0)
  ),
};
function g() {
  const e = t(),
    s = p(),
    { t: a } = h(),
    i = f(),
    c = u(!0),
    n = u(!1),
    r = new y();
  return (
    x(() => {
      e.$patch((o) => (o.exercise.state = 'created')), r.next(), r.complete();
    }),
    {
      revealed: n,
      inputDisabled: c,
      destroy: r,
      store: e,
      $q: s,
      route: i,
      t: a,
    }
  );
}
export { C as T, g as c, _ as e };
