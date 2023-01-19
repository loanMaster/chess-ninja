<template>
  <div class="relative-position col-grow non-selectable">
    <q-linear-progress
      animation-speed="400"
      size="40px"
      :value="
        Math.max(0, store.exercise.currentQuestion - 1) /
        store.exercise.totalQuestions
      "
      color="primary"
    >
      <div class="absolute-full flex flex-center">
        <q-badge
          color="white"
          text-color="primary"
          class="text-h6"
          :label="
            Math.max(store.exercise.currentQuestion - 1, 0) +
            '/' +
            store.exercise.totalQuestions
          "
        />
      </div>
    </q-linear-progress>
  </div>
</template>

<script setup lang="ts">
import { useExerciseStore } from 'stores/exercise.store';
const store = useExerciseStore();
</script>
