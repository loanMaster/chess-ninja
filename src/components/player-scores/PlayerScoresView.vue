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
      class="words-table-header"
      v-if="scores.length > 0"
      data-testid="words-table"
    >
      <PlayerScoresTable
        @show-progress-diagram="showProgress"
        :scores="scores"
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

const scores = computed(() => {
  return useExerciseStore().playerScores?.scores;
});
</script>

<style scoped lang="scss">
.diagram-min-height {
  min-height: 40vh;
}
</style>
