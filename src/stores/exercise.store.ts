import { defineStore } from 'pinia';
import { mapScoreToRating } from 'src/util/calculate-rating';
import { calculateScore } from 'src/util/calculate-score';

export interface Score {
  nameOfTheGame: string;
  score: number;
  date: number;
}

export interface Exercise {
  correctAnswers: number;
  totalQuestions: number;
  strikes: number;
  duration: number;
  nameOfTheGame: string;
  state: 'created' | 'started' | 'finished';
  beginTimeStamp: number;
  totalStrikeCount: number;
  lastStrike: number;
  lastSuccessfulStrike: number;
  currentQuestion: number;
  score?: number;
  rating?: number;
}

export const newExercise = (
  nameOfTheGame: string,
  totalQuestions: number
): Exercise => ({
  correctAnswers: 0,
  totalQuestions,
  strikes: 0,
  duration: 10,
  nameOfTheGame,
  state: 'created',
  beginTimeStamp: Date.now(),
  totalStrikeCount: 0,
  lastSuccessfulStrike: 0,
  lastStrike: 0,
  currentQuestion: 0,
});

export interface BoardState {
  pieces: { [key: string]: string };
  orientation: string;
  highlightPositive: string[];
  highlightNegative: string[];
}

export interface ExerciseState {
  playerScores: { scores: Score[] };
  scoreHistory: Score[];
  exercise: Exercise;
  board: BoardState;
}

const store = (data: any, key: string) => {
  localStorage.setItem(key, btoa(JSON.stringify(data)));
};
const fetch = (key: string) => {
  const data = localStorage.getItem(key);
  if (data) {
    return JSON.parse(atob(data));
  } else {
    return undefined;
  }
};

export const useExerciseStore = defineStore('exercise', {
  state: (): ExerciseState => {
    const playerScores = fetch('playerScores');
    if (playerScores === undefined) {
      store({ scores: [] }, 'playerScores');
    }
    const scoreHistory = fetch('scoreHistory');
    if (scoreHistory === undefined) {
      store([], 'scoreHistory');
    }
    return {
      exercise: newExercise('guess-color', 10),
      playerScores,
      scoreHistory,
      board: {
        orientation: 'white',
        pieces: {},
        highlightNegative: [],
        highlightPositive: [],
      },
    } as ExerciseState;
  },
  actions: {
    updateRating(score: number, nameOfTheGame: string) {
      const matchingScore = this.playerScores.scores.find(
        (s) => s.nameOfTheGame === this.exercise.nameOfTheGame
      );
      if (!matchingScore) {
        this.playerScores.scores.push({
          nameOfTheGame,
          score,
          date: Date.now(),
        });
      } else if (matchingScore.score < score) {
        matchingScore.score = score;
        matchingScore.date = Date.now();
      }
      store(this.playerScores, 'playerScores');
    },
    playerReady() {
      // noop
    },
    beginExercise() {
      this.exercise.state = 'started';
      this.exercise.beginTimeStamp = Date.now();
    },
    finishExercise() {
      this.exercise.duration = Date.now() - this.exercise.beginTimeStamp;
      this.exercise.state = 'finished';
      this.exercise.score = calculateScore(
        this.exercise.totalQuestions,
        this.exercise.totalStrikeCount,
        this.exercise.duration,
        6_000
      );
      this.exercise.rating = mapScoreToRating(this.exercise.score);
      if (this.scoreHistory !== undefined) {
        this.scoreHistory.push({
          nameOfTheGame: this.exercise.nameOfTheGame,
          score: this.exercise.score,
          date: Date.now(),
        });
        store(this.scoreHistory, 'scoreHistory');
      }
      this.updateRating(this.exercise.score, this.exercise.nameOfTheGame);
    },
    strike(): boolean {
      this.exercise.lastSuccessfulStrike = Date.now();
      this.exercise.lastStrike = Date.now();
      this.exercise.strikes++;
      this.exercise.totalStrikeCount++;
      return true;
    },
  },
});
