<template>
  <div
    class="relative-position column flex-1 self-stretch"
    @click="containerClicked"
    ref="coreExercise"
  >
    <div v-if="!revealed" class="flex-1 justify-center column items-center">
      <div class="text-h5 text-center">
        {{ $t('What color does square { square } have?', { square }) }}
      </div>
      <div class="row q-gutter-xl q-mt-sm">
        <q-btn
          class="text-black bg-white shadow-5"
          size="xl"
          outline
          rounded
          @click="select('white', $event)"
          >{{ $t('White') }}</q-btn
        >
        <q-btn
          class="text-white bg-black shadow-5"
          size="xl"
          outline
          rounded
          @click="select('black', $event)"
          >{{ $t('Black') }}</q-btn
        >
      </div>
    </div>
    <div
      :style="{ opacity: revealed ? 1 : 0 }"
      class="no-pointer-events absolute-full column items-stretch q-pa-lg"
    >
      <div
        class="text-h5 text-center"
        :style="{ color: wasCorrect ? 'green' : 'red' }"
      >
        {{ wasCorrect ? $t('Correct') : $t('Wrong') }}
      </div>
      <div class="flex-1 relative-position" style="max-height: 100%">
        <ExerciseBoard />
      </div>
      <div class="column items-center">
        <span>{{ $t('Click to continue') }}</span>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import ExerciseBoard from 'src/components/exercises/shared/ExerciseBoard.vue';
import { ref, Ref, onBeforeMount, onMounted } from 'vue';
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

onBeforeMount(() => {
  const numberOfQuestions = 10;
  exerciseUtils.createExercise(numberOfQuestions);
});

onMounted(async () => {
  inputDisabled.value = true;
  useExerciseStore().beginExercise();
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
      highlightPositive: [square.value],
      highlightNegative: [],
    };
  });
  inputDisabled.value = false;
}

function select(color: string, event: Event) {
  if (inputDisabled.value) {
    return;
  }
  event.stopPropagation();
  wasCorrect.value = ChessUtils.getColor(square.value) === color;
  if (wasCorrect.value) {
    inputDisabled.value = true;
    store.$patch((state) => state.exercise.correctAnswers++);
    useExerciseStore().$patch((store) => {
      store.board.highlightPositive = [square.value];
      store.board.highlightNegative = [];
    });
  } else {
    exerciseUtils.handleMistake(reveal, undefined);
    useExerciseStore().$patch((store) => {
      store.board.highlightPositive = [];
      store.board.highlightNegative = [square.value];
    });
  }
  revealed.value = true;
}

function reveal() {
  revealed.value = true;
  inputDisabled.value = true;
}

function containerClicked(event: Event) {
  if (revealed.value) {
    event.stopPropagation();
    nextQuestion();
  }
}
</script>
