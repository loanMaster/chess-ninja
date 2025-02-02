import { z as r } from './index.2385a99b.js';
const a = {
    'guess-color': { threeStarRating: 25e3, fourStarRating: 15e3 },
    'find-the-square': { threeStarRating: 25e3, fourStarRating: 15e3 },
    'same-diagonal': { threeStarRating: 3e4, fourStarRating: 2e4 },
    'attack-with-knight': { threeStarRating: 35e3, fourStarRating: 25e3 },
    'attack-with-bishop': { threeStarRating: 35e3, fourStarRating: 25e3 },
    'save-the-king': { threeStarRating: 35e3, fourStarRating: 25e3 },
    'move-your-knight': { threeStarRating: 6e4, fourStarRating: 3e4 },
  },
  s = (e, t) => ({
    correctAnswers: 0,
    totalQuestions: t,
    strikes: 0,
    duration: 10,
    nameOfTheGame: e,
    state: 'created',
    beginTimeStamp: Date.now(),
    totalStrikeCount: 0,
    lastSuccessfulStrike: 0,
    lastStrike: 0,
    currentQuestion: 0,
  }),
  n = () => JSON.parse(localStorage.getItem('ratings') || '{}'),
  o = (e) => {
    localStorage.setItem('ratings', JSON.stringify(e));
  },
  g = (e, t, i) =>
    t > 3
      ? 0
      : t > 1
      ? 1
      : t > 0
      ? 2
      : i > a[e].threeStarRating
      ? 3
      : i > a[e].fourStarRating
      ? 4
      : 5,
  h = r('exercise', {
    state: () => {
      const e = n();
      return {
        exercise: s('guess-color', 10),
        ratings: e,
        board: {
          orientation: 'white',
          pieces: {},
          highlightNegative: [],
          highlightPositive: [],
        },
      };
    },
    actions: {
      async updateRating(e) {
        (this.ratings[e.nameOfTheGame] || -1) < e.value &&
          (this.ratings[e.nameOfTheGame] = e.value),
          o(this.ratings);
      },
      playerReady() {},
      beginExercise() {
        (this.exercise.state = 'started'),
          (this.exercise.beginTimeStamp = Date.now());
      },
      finishExercise() {
        (this.exercise.duration = Date.now() - this.exercise.beginTimeStamp),
          (this.exercise.state = 'finished'),
          (this.exercise.rating = g(
            this.exercise.nameOfTheGame,
            this.exercise.totalStrikeCount,
            this.exercise.duration
          )),
          this.updateRating({
            value: this.exercise.rating,
            nameOfTheGame: this.exercise.nameOfTheGame,
          });
      },
      strike() {
        return (
          (this.exercise.lastSuccessfulStrike = Date.now()),
          (this.exercise.lastStrike = Date.now()),
          this.exercise.strikes++,
          this.exercise.totalStrikeCount++,
          !0
        );
      },
    },
  });
export { a as e, s as n, h as u };
