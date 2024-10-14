<template>
  <div class="flex-1 max-width-sm full-width q-mx-sm q-my-sm">
    <q-dialog v-model="showProgressDiagram">
      <q-card class="full-width">
        <div class="full-width q-pa-sm column no-wrap">
          <div class="test-h5">
            {{ $t('exercises.' + nameOfTheGame + '.title') }}
          </div>
          <ProgressDiagram
            :nameOfTheGame="nameOfTheGame"
            class="diagram-min-height"
          />
        </div>
      </q-card>
    </q-dialog>

    <div
      class="exercise-table-header"
      v-if="scores.length > 0"
      data-testid="exercise-table"
    >
      <div class="text-h5">{{ $t('Exercises') }}</div>
      <PlayerScoresTable
        @show-progress-diagram="showProgress"
        :scores="scores"
        :progress-diagram="true"
      />
    </div>
    <div
      class="scenario-table-header q-mt-md"
      v-if="scenarioScores.length > 0"
      data-testid="scenario-table"
    >
      <div class="text-h5">{{ $t('Scenarios') }}</div>
      <PlayerScoresTable
        :max-stars="1"
        :progress-diagram="false"
        :scores="scenarioScores"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, computed } from 'vue';
import PlayerScoresTable from './PlayerScoresTable.vue';
import ProgressDiagram from 'src/components/shared/ProgressDiagram.vue';
import { useExerciseStore } from 'stores/exercise.store';

const showLoadingIndicator = ref(false);
const nameOfTheGame = ref('');
const showProgressDiagram = ref(false);

onMounted(async () => {
  showLoadingIndicator.value = true;
  showLoadingIndicator.value = false;
});

function showProgress(props: { game: string }) {
  nameOfTheGame.value = props.game;
  showProgressDiagram.value = true;
}

const exercises = [
  'guess-color',
  'same-diagonal',
  'attack-with-bishop',
  'attack-with-knight',
  'save-the-king',
  'find-the-square',
  'move-your-knight',
];
const scenarios = [
  'queen-vs-king',
  'queen-vs-rook',
  'rook-vs-king',
  'queen-vs-knights',
];
const scores = computed(() => {
  return useExerciseStore().playerScores?.scores.filter(
    (s) => exercises.indexOf(s.nameOfTheGame) > -1
  );
});
const scenarioScores = computed(() => {
  return useExerciseStore().playerScores?.scores.filter(
    (s) => scenarios.indexOf(s.nameOfTheGame) > -1
  );
});
</script>

<style scoped lang="scss">
.diagram-min-height {
  min-height: 40vh;
}
</style>
