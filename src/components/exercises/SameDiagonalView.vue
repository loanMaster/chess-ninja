<template>
  <div
    class="relative-position column flex-1 self-stretch"
    @click="containerClicked"
    ref="coreExercise"
  >
    <div v-if="!revealed" class="flex-1 justify-center column items-center">
      <div class="text-h5 text-center">
        {{
          $t('Are { square1 } and { square2 } on the same diagonal?', {
            square1,
            square2,
          })
        }}
      </div>
      <div class="row q-gutter-xl q-mt-sm">
        <q-btn
          color="primary"
          size="xl"
          push
          rounded
          @click="select(true, $event)"
          >{{ $t('Yes') }}</q-btn
        >
        <q-btn
          color="primary"
          size="xl"
          push
          rounded
          @click="select(false, $event)"
          >{{ $t('No') }}</q-btn
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
import { ref, onBeforeMount, onMounted } from 'vue';
import { exerciseUtils } from 'components/exercises/exercise.utils';
import { createExerciseContext } from 'components/exercises/register-defaults';
import { useRouter } from 'vue-router';
import { ChessUtils } from 'src/util/chess-utils';
import { useExerciseStore } from 'stores/exercise.store';

const { revealed, store, inputDisabled } = createExerciseContext();

const wasCorrect = ref(false);
const router = useRouter();
const square1 = ref('');
const square2 = ref('');

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
  square1.value = ChessUtils.getOtherRandomSquare([
    square1.value,
    square2.value,
  ]);
  const sameDiag = Math.random() > 0.5;
  const onDiagonal = ChessUtils.getSquaresOnSameDiagonal(square1.value);
  if (sameDiag) {
    square2.value = onDiagonal[Math.floor(Math.random() * onDiagonal.length)];
  } else {
    do {
      square2.value = ChessUtils.getOtherRandomSquare([
        square1.value,
        square2.value,
      ]);
    } while (
      onDiagonal.indexOf(square2.value) > -1 &&
      square1.value === square2.value
    );
  }

  useExerciseStore().$patch((store) => {
    store.board = {
      ...store.board,
      orientation: 'white',
      pieces: {},
      highlightPositive: [],
      highlightNegative: [],
    };
  });
  inputDisabled.value = false;
}

function select(value: boolean, event: Event) {
  if (inputDisabled.value) {
    return;
  }
  event.stopPropagation();
  wasCorrect.value =
    value === ChessUtils.areOnSameDiagonal(square1.value, square2.value);
  if (wasCorrect.value) {
    inputDisabled.value = true;
    store.$patch((state) => state.exercise.correctAnswers++);
    useExerciseStore().$patch((store) => {
      store.board.highlightPositive = [square1.value, square2.value];
      store.board.highlightNegative = [];
    });
  } else {
    exerciseUtils.handleMistake(reveal, undefined);
    useExerciseStore().$patch((store) => {
      store.board.highlightPositive = [];
      store.board.highlightNegative = [square1.value, square2.value];
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
