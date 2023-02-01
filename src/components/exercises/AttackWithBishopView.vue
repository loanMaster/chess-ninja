<template>
  <div
    class="relative-position column flex-1 self-stretch"
    @click="containerClicked"
    ref="coreExercise"
  >
    <div v-if="!revealed" class="flex-1 justify-center column items-center">
      <div class="text-h5 text-center">
        {{ $t('Attack the king with your bishop') }}
      </div>
      <div
        class="g-large-font g-full-width q-mt-md pieces-bg q-pa-md"
        style="border-radius: 25px"
      >
        <div class="text-h5 q-gutter-lg row">
          <PieceList :pieces="pieces" />
        </div>
      </div>
      <div class="row q-gutter-md max-width-xs q-mt-md justify-center">
        <div v-for="move in moves" :key="move" class="text-h5">
          <q-btn push color="primary" @click="select(move, $event)" no-caps>{{
            move
          }}</q-btn>
        </div>
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
import PieceList from 'src/components/exercises/shared/PieceList.vue';
import ExerciseBoard from 'src/components/exercises/shared/ExerciseBoard.vue';
import { ref, onBeforeMount, onMounted, computed } from 'vue';
import { exerciseUtils } from 'components/exercises/exercise.utils';
import { createExerciseContext } from 'components/exercises/register-defaults';
import { useRouter } from 'vue-router';
import { ChessUtils } from 'src/util/chess-utils';
import { useExerciseStore } from 'stores/exercise.store';

const { revealed, store, inputDisabled } = createExerciseContext();

const wasCorrect = ref(false);
const router = useRouter();
const bishop = ref('');
const king = ref('');
const side = ref('w');

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
  bishop.value = ChessUtils.getOtherRandomSquare([bishop.value]);
  const bishopColor = ChessUtils.getColor(bishop.value);
  const onBishopDiagonal = ChessUtils.getSquaresOnSameDiagonal(bishop.value);
  do {
    king.value = ChessUtils.getOtherRandomSquare([bishop.value]);
  } while (
    onBishopDiagonal.indexOf(king.value) > -1 ||
    ChessUtils.getColor(king.value) !== bishopColor
  );
  useExerciseStore().$patch((store) => {
    store.board = {
      ...store.board,
      orientation: 'white',
      pieces: {
        [king.value.toLowerCase()]: `${side.value}K`,
        [bishop.value.toLowerCase()]: `${side.value === 'w' ? 'b' : 'w'}B`,
      },
      highlightPositive: [],
      highlightNegative: [],
    };
  });
  inputDisabled.value = false;
}

const pieces = computed(() => {
  return useExerciseStore().board.pieces;
});

function select(selectedSquare: string, event: Event) {
  if (inputDisabled.value) {
    return;
  }
  event.stopPropagation();
  wasCorrect.value = ChessUtils.areOnSameDiagonal(selectedSquare, king.value);
  const solutions = ChessUtils.getSquaresOnSameDiagonal(king.value).filter(
    (s) => ChessUtils.getSquaresOnSameDiagonal(bishop.value).indexOf(s) > -1
  );
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
      store.board.highlightPositive = solutions;
      store.board.highlightNegative = [selectedSquare];
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

const moves = computed(() => {
  if (bishop.value) {
    const squares = ChessUtils.getSquaresOnSameDiagonal(bishop.value);
    do {
      const random = ChessUtils.getRandomSquare();
      if (squares.indexOf(random) === -1) {
        squares.push(random);
      }
    } while (squares.length < 12);
    squares.sort((s1, s2) => (s1 > s2 ? 1 : -1));
    return squares;
  } else {
    return [];
  }
});
</script>
