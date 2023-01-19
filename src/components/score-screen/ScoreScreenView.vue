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
                formatDuration(store.exercise.duration / 1000, store.language)
              }}
              s</span
            >
          </div>
        </div>
      </div>
      <q-card-section>
        <div class="row justify-center">
          <q-btn @click="playAgain">{{ $t('Train again') }}</q-btn>
        </div>
      </q-card-section>
    </q-card>
  </div>
</template>

<script setup lang="ts">
import StarsRating from 'src/components/shared/StarsRating.vue';
import MovingColorsBackground from 'src/components/backgrounds/MovingColorsBackground.vue';

import { useAppStore } from 'src/stores/app-store';
import { useRouter } from 'vue-router';
import { useExerciseStore } from 'stores/exercise.store';
import { formatTime } from 'src/util/format-number';

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
</script>

<style scoped>
.semi-transparent-background {
  background-color: #ffffff77;
}

.body--dark .semi-transparent-background {
  background-color: #ffffff11;
}
</style>
