<template>
  <div class="column items-center justify-center non-selectable q-ma-lg">
    <MovingColorsBackground />
    <q-card
      class="max-width-sm q-pa-lg full-width text-center semi-transparent-background"
    >
      <q-card-section>
        <div class="text-h4">{{ $t('Exercise finished') }}</div>
      </q-card-section>
      <q-card-section style="padding: 0">
        <div class="text-h3">
          <StarsRating :rating="store.exercise.rating || 0"></StarsRating>
        </div>
      </q-card-section>
      <div class="row-sm column-xs justify-center no-wrap">
        <div class="column col-6">
          <div class="row justify-between">
            <span>{{ $t('Mistakes') }}</span>
            <span>{{ store.exercise.totalStrikeCount }}</span>
          </div>
          <div class="row justify-between">
            <span>{{ $t('Time required') }}</span>
            <span
              >{{
                formatDuration(store.exercise.duration / 1000, language)
              }}
              s</span
            >
          </div>
          <div
            class="row justify-center"
            v-if="
              store.exercise.totalStrikeCount === 0 && store.exercise.rating < 5
            "
          >
            <span>{{
              $t('Beat _DURATION_s to get one more star', {
                duration: durationForNextStar,
              })
            }}</span>
          </div>
        </div>
      </div>
      <q-card-section>
        <div class="row justify-center">
          <q-btn @click="playAgain">{{ $t('Train again') }}</q-btn>
        </div>
      </q-card-section>
    </q-card>
    <div class="q-mx-auto text-h6 text-center q-mt-xl">
      <div class="">
        {{ $t('Please take the following survey to improve ChessNinja:') }}
      </div>
      <a
        class="text-color-default"
        style="word-break: break-all"
        target="_blank"
        :href="$t('https://freeonlinesurveys.com/s/X4gSL5Fu')"
        >{{ $t('https://freeonlinesurveys.com/s/X4gSL5Fu') }}</a
      >
    </div>
  </div>
</template>

<script setup lang="ts">
import StarsRating from 'src/components/shared/StarsRating.vue';
import MovingColorsBackground from 'src/components/backgrounds/MovingColorsBackground.vue';

import { useAppStore } from 'src/stores/app-store';
import { useRouter } from 'vue-router';
import { useExerciseStore } from 'stores/exercise.store';
import { formatTime } from 'src/util/format-number';
import { computed } from 'vue';
import { exerciseStats } from 'src/util/exercises.const';

const store = useExerciseStore();
const router = useRouter();

function playAgain() {
  router.push({
    name: store.exercise.nameOfTheGame.toLowerCase(),
    params: {
      game: store.exercise.nameOfTheGame.toLowerCase(),
      language: useAppStore().language,
    },
  });
}

function formatDuration(num: number, lang: string) {
  return formatTime(num, lang);
}

const durationForNextStar = computed(() => {
  const duration =
    store.exercise.rating === 3
      ? exerciseStats[store.exercise.nameOfTheGame].threeStarRating
      : exerciseStats[store.exercise.nameOfTheGame].fourStarRating;
  return formatDuration(duration / 1000, useAppStore().language);
});

const language = computed(() => {
  return useAppStore().language;
});
</script>

<style scoped>
.semi-transparent-background {
  background-color: #ffffff77;
}

.body--dark .semi-transparent-background {
  background-color: #ffffff11;
}
</style>
