<template>
  <div
    class="relative-position column flex-1 self-stretch"
    @click="containerClicked"
  >
    <div v-if="!revealed" class="text-h5 text-center" @click="rotate = !rotate">
      {{ $t('Click on the square { square }', { square }) }}
    </div>
    <div
      v-if="revealed"
      class="text-h5 text-center"
      :style="{ color: wasCorrect ? 'green' : 'red' }"
    >
      {{ wasCorrect ? $t('Correct') : $t('Wrong') }}
    </div>
    <div class="column items-stretch flex-1 q-pa-lg">
      <div class="flex-1" style="max-height: 100%" v-if="showBoard">
        <ExerciseBoard
          :class="rotate ? 'c-rotate-board' : ''"
          class="g-hide-notations"
          @square-clicked="selectSquare"
        />
      </div>
      <div class="column items-center">
        <span :style="{ opacity: revealed ? 1 : 0 }">{{
          $t('Click to continue')
        }}</span>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import ExerciseBoard from 'src/components/exercises/shared/ExerciseBoard.vue';
import { ref, Ref, onBeforeMount, computed, onMounted } from 'vue';
import { exerciseUtils } from 'components/exercises/exercise.utils';
import { createExerciseContext } from 'components/exercises/register-defaults';
import { useRouter } from 'vue-router';
import { ChessUtils } from 'src/util/chess-utils';
import { useExerciseStore } from 'stores/exercise.store';

const { revealed, store, inputDisabled } = createExerciseContext();

const wasCorrect = ref(false);
const router = useRouter();
const square = ref('');
const alreadySquares: Ref<string[]> = ref([]);
const showBoard = ref(false);

onBeforeMount(() => {
  const numberOfQuestions = 10;
  exerciseUtils.createExercise(numberOfQuestions);
});

onMounted(async () => {
  inputDisabled.value = true;
  useExerciseStore().beginExercise();
  setTimeout(() => {
    showBoard.value = true;
  });
  nextQuestion();
});

async function nextQuestion() {
  if (
    !(await exerciseUtils.prepareNewQuestion({
      inputDisabled,
      revealed,
      router,
    }))
  ) {
    return;
  }
  square.value = ChessUtils.getOtherRandomSquare(alreadySquares.value);
  alreadySquares.value.push(square.value);
  useExerciseStore().$patch((store) => {
    store.board = {
      orientation: 'white',
      pieces: {},
      highlightPositive: [],
      highlightNegative: [],
    };
  });
  inputDisabled.value = false;
}

function selectSquare(selectedSquare: string) {
  if (inputDisabled.value) {
    return;
  }
  wasCorrect.value = selectedSquare === square.value;
  if (wasCorrect.value) {
    inputDisabled.value = true;
    store.$patch((state) => state.exercise.correctAnswers++);
    useExerciseStore().$patch((store) => {
      store.board.highlightPositive = [selectedSquare];
      store.board.highlightNegative = [];
    });
  } else {
    exerciseUtils.handleMistake(reveal, undefined);
    useExerciseStore().$patch((store) => {
      store.board.highlightPositive = [square.value];
      store.board.highlightNegative = [selectedSquare];
    });
  }
  revealed.value = true;
}

function reveal() {
  revealed.value = true;
  inputDisabled.value = true;
}

const rotate = computed(() => {
  return useExerciseStore().exercise.currentQuestion > 5;
});

function containerClicked(event: Event) {
  if (revealed.value) {
    event.stopPropagation();
    nextQuestion();
  }
}
</script>

<style scoped>
.c-rotate-board {
  animation-name: myRotate;
  animation-duration: 2s;
  animation-fill-mode: forwards;
}
@keyframes myRotate {
  0% {
    transform: rotate(0deg) scale(1);
  }
  20% {
    transform: rotate(0deg) scale(0.7);
  }
  80% {
    transform: rotate(180deg) scale(0.7);
  }
  100% {
    transform: rotate(180deg) scale(1);
  }
}
</style>
