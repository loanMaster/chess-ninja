import { defineStore } from 'pinia';
import {exerciseStats} from "src/util/exercises.const";

export interface Ratings {
  [key: string]: number;
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
  ratings: Ratings;
  exercise: Exercise;
  board: BoardState;
}

const loadRatings = (): Ratings => {
  return JSON.parse(localStorage.getItem('ratings') || '{}');
};

const saveRatings = (ratings: Ratings): void => {
  localStorage.setItem('ratings', JSON.stringify(ratings));
};

const calculateRating = (exerciseName: string, strikes: number, duration: number) => {
  if (strikes > 3) {
    return 0;
  }
  if (strikes > 1) {
    return 1;
  }
  if (strikes > 0) {
    return 2;
  }
  if (duration > exerciseStats[exerciseName].threeStarRating) {
    return 3;
  }
  if (duration > exerciseStats[exerciseName].fourStarRating) {
    return 4;
  }
  return 5;
};

export const useExerciseStore = defineStore('exercise', {
  state: (): ExerciseState => {
    const ratings = loadRatings();
    return {
      exercise: newExercise('guess-color', 10),
      ratings,
      board: {
        orientation: 'white',
        pieces: {},
        highlightNegative: [],
        highlightPositive: [],
      },
    } as ExerciseState;
  },
  actions: {
    async updateRating(rating: { value: number; nameOfTheGame: string }) {
      const gameRating = this.ratings[rating.nameOfTheGame] || -1;
      if (gameRating < rating.value) {
        this.ratings[rating.nameOfTheGame] = rating.value;
      }
      saveRatings(this.ratings);
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
      this.exercise.rating = calculateRating(
        this.exercise.nameOfTheGame,
        this.exercise.totalStrikeCount,
        this.exercise.duration
      );
      this.updateRating({
        value: this.exercise.rating,
        nameOfTheGame: this.exercise.nameOfTheGame,
      });
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
