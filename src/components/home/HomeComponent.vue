<template>
  <MovingColorsBackground />
  <div class="max-width-sm column items-center q-mx-auto">
    <div class="column items-center q-mt-xl">
      <div class="text-h2">ChessNinja</div>
      <div class="text-h4 q-mt-lg text-center">
        {{ $t('Learn to play blind chess') }}
      </div>
      <div class="row q-gutter-sm q-mt-lg">
        <q-btn color="primary" push rouned @click="scrollTo('exercises')">{{
          $t('Learn')
        }}</q-btn>
        <q-btn
          color="primary"
          push
          rouned
          :to="{ name: 'play', language: language }"
          >{{ $t('Play') }}</q-btn
        >
      </div>
    </div>

    <q-card class="exercise-block q-mt-xl" id="exercises">
      <div class="exercise-title">{{ $t('Exercises') }}</div>
      <div class="row-sm column-xs q-col-gutter-lg q-mb-lg">
        <div v-for="exercise in exercises" :key="exercise" class="col-4 column">
          <router-link
            :to="{
              name: exercise,
              params: { game: exercise, language: language },
            }"
            class="text-color-default"
            style="text-decoration: none; display: block"
          >
            <q-card class="flex-1 cursor-pointer zoom-on-hover">
              <q-card-section class="text-bold text-center bg-exercise">
                {{ $t(`exercises.${exercise}.title`) }}
              </q-card-section>
              <q-card-section class="text-center">
                <StarsRating
                  :rating="getStars(exercise)"
                  class="text-h4 q-ml-xs"
                />
              </q-card-section>
            </q-card>
          </router-link>
        </div>
      </div>
    </q-card>

    <q-card class="exercise-block q-mt-xl">
      <div class="exercise-title">{{ $t('Scenarios') }}</div>
      <div class="row-sm column-xs q-col-gutter-lg q-mb-lg">
        <div
          v-for="exercise in scenarios"
          :key="exercise"
          class="col-3 column flex-1"
        >
          <router-link
            :to="{
              name: exercise,
              params: { game: exercise, language: language },
            }"
            class="text-color-default column flex-1"
            style="text-decoration: none; display: block"
          >
            <q-card class="flex-1 cursor-pointer zoom-on-hover">
              <q-card-section class="text-bold text-center bg-exercise">
                {{ $t(`exercises.${exercise}.title`) }}
              </q-card-section>
              <q-card-section class="text-center">
                <StarsRating
                  :max="1"
                  :rating="getStars(exercise)"
                  class="text-h4 q-ml-xs"
                />
              </q-card-section>
            </q-card>
          </router-link>
        </div>
      </div>
    </q-card>

    <q-card class="exercise-block q-mt-xl">
      <div class="exercise-title">{{ $t('Play') }}</div>
      <div class="row-sm column-xs q-col-gutter-lg q-mb-lg">
        <div
          v-for="difficulty in [0, 1, 2]"
          :key="difficulty"
          class="col-4 column"
        >
          <router-link
            :to="{
              name: 'play',
              params: { language: language },
              query: { difficulty: difficulty },
            }"
            class="text-color-default"
            style="text-decoration: none; display: block"
          >
            <q-card class="flex-1 cursor-pointer zoom-on-hover">
              <q-card-section
                class="text-bold text-center"
                :class="`bg-play-${difficulty}`"
              >
                {{ $t(`play_difficulty_${difficulty}`) }}
              </q-card-section>
            </q-card>
          </router-link>
        </div>
      </div>
    </q-card>
    <div class="q-mx-auto q-my-lg">
      <div style="user-select: text">
        {{ $t('Contact:') }}
        <a
          class="text-color-default"
          href="mailto:molari.webmaster@gmail.com"
          style="user-select: text"
          >molari.webmaster@gmail.com</a
        >
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import MovingColorsBackground from 'src/components/backgrounds/MovingColorsBackground.vue';
import StarsRating from 'src/components/shared/StarsRating.vue';
import { useAppStore } from 'stores/app-store';
import { useExerciseStore } from 'stores/exercise.store';
import { computed, ref } from 'vue';

const exercises = ref([
  'find-the-square',
  'guess-color',
  'same-diagonal',
  'attack-with-bishop',
  'attack-with-knight',
  'save-the-king',
  'move-your-knight',
]);

const scenarios = ref([
  'queen-vs-king',
  'rook-vs-king',
  'queen-vs-rook',
  'queen-vs-knights',
]);

function scrollTo(anchor: string) {
  const el = document.getElementById(anchor);
  el!.scrollIntoView();
}

const language = computed(() => {
  return useAppStore().language;
});

function getStars(exercise: string) {
  return useExerciseStore().ratings[exercise] || 0;
}
</script>

<style scoped lang="scss">
@import 'node_modules/quasar/dist/quasar.sass';

.exercise-block {
  @extend .q-pa-md;
  @extend .q-mb-lg;
  @extend .full-width;
  background-color: #ffffff00;
}

.exercise-title {
  @extend .text-h4;
  @extend .q-mx-auto;
  @extend .text-center;
  @extend .q-mb-md;
}

.bg-exercise {
  background-color: $amber-2;
}
.body--dark {
  .bg-exercise {
    background-color: $blue-grey-8;
  }
}

.bg-play-0 {
  background-color: $amber-1;
}
.bg-play-1 {
  background-color: $amber-2;
}
.bg-play-2 {
  background-color: $amber-3;
}

.body--dark {
  .bg-play-0 {
    background-color: $blue-grey-6;
  }
  .bg-play-1 {
    background-color: $blue-grey-8;
  }
  .bg-play-2 {
    background-color: $blue-grey-9;
  }
}
</style>
