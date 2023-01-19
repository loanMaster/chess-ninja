import { RouteLocationNormalizedLoaded, Router, useRoute } from 'vue-router';
import { Ref } from 'vue';
import { TweenService } from 'src/util/tween.service';
import { newExercise, useExerciseStore } from 'stores/exercise.store';
import { useAppStore } from 'stores/app-store';

export const exerciseUtils = {
  wait: (time: number) => new Promise((resolve) => setTimeout(resolve, time)),
  difficulty: (route: RouteLocationNormalizedLoaded) =>
    route.params.difficulty as string,
  nameOfTheGame: (route: RouteLocationNormalizedLoaded) =>
    route.params.game as string,
  finishExercise: (router: Router) => {
    useExerciseStore().finishExercise();
    router.push({
      name: 'score-screen',
      params: { language: useAppStore().language },
    });
  },
  handleMistake: function (
    reveal: () => any,
    elementToWiggle?: Ref<HTMLElement>
  ) {
    if (useExerciseStore().strike()) {
      if (useExerciseStore().exercise.strikes >= 1) {
        reveal();
      }
    }
    if (elementToWiggle) {
      new TweenService().wiggle(elementToWiggle.value);
    }
  },
  createExercise: (numberOfQuestions: number) => {
    useExerciseStore().$patch((store) => {
      store.exercise = newExercise(
        useRoute().params.game as string,
        numberOfQuestions
      );
    });
  },
  prepareNewQuestion: async ({
    inputDisabled,
    revealed,
    router,
  }: {
    inputDisabled: Ref<boolean>;
    revealed: Ref<boolean>;
    router: Router;
  }): Promise<boolean> => {
    inputDisabled.value = true;
    useExerciseStore().$patch((store) => store.exercise.currentQuestion++);
    if (
      useExerciseStore().exercise.currentQuestion ===
      useExerciseStore().exercise.totalQuestions + 1
    ) {
      await exerciseUtils.wait(200);
      await useExerciseStore().finishExercise();
      await router.push({
        name: 'score-screen',
        params: { language: useAppStore().language },
      });
      return false;
    } else {
      useExerciseStore().$patch((store) => (store.exercise.strikes = 0));
      revealed.value = false;
      return true;
    }
  },
};
