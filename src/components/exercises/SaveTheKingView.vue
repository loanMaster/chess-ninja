<template>
  <div
    class="relative-position column flex-1 self-stretch"
    @click="containerClicked"
    ref="coreExercise"
  >
    <div v-if="!revealed" class="flex-1 justify-center column items-center">
      <div class="text-h5 text-center">
        {{
          $t(
            "Is your king under attack? Bring him to safety otherwise click on 'Not in check'"
          )
        }}
      </div>
      <div class="g-large-font g-full-width q-mt-md">
        <PieceList :pieces="pieces" />
      </div>
      <q-btn
        push
        color="primary"
        @click="selectNotInCheck($event)"
        class="q-mt-md"
        >{{ $t('Not in check') }}</q-btn
      >
      <div class="row q-gutter-md max-width-xs q-mt-md justify-center">
        <div v-for="move in moves" :key="move" class="text-h5">
          <q-btn push color="primary" @click="select(move, $event)">{{
            move
          }}</q-btn>
        </div>
      </div>
    </div>
    <div v-if="revealed" class="column items-stretch flex-1 q-pa-lg">
      <div
        class="text-h5 text-center"
        :style="{ color: wasCorrect ? 'green' : 'red' }"
      >
        {{ wasCorrect ? $t('Correct') : $t('Wrong') }}
      </div>
      <div class="flex-1" style="max-height: 100%">
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
import { ChessGame } from 'src/engine/chess-game';

const { revealed, store, inputDisabled } = createExerciseContext();

const wasCorrect = ref(false);
const router = useRouter();
const king = ref('');
const side = ref('w');
const chessGame: ChessGame = new ChessGame();

const opponentpiece = ref('k');
const opponentsquare = ref('');
const pieceTypes = ['Q', 'B', 'N', 'R'];
const isCheck = ref(false);

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

  opponentpiece.value =
    pieceTypes[useExerciseStore().exercise.currentQuestion % pieceTypes.length];
  opponentsquare.value = ChessUtils.getOtherRandomSquare([
    opponentsquare.value,
  ]);
  chessGame.createNew({
    pieces: { [opponentsquare.value]: opponentpiece.value },
  });
  const attackedSquares = chessGame
    .moves(opponentsquare.value)
    .map((m) => m.to);
  isCheck.value = Math.random() > 0.5;
  do {
    king.value = ChessUtils.getOtherRandomSquare([opponentsquare.value]);
  } while (attackedSquares.indexOf(king.value) > -1 !== isCheck.value);

  useExerciseStore().$patch((store) => {
    store.board = {
      ...store.board,
      orientation: 'white',
      pieces: {
        [king.value.toLowerCase()]: `${side.value}K`,
        [opponentsquare.value.toLowerCase()]: `${
          side.value === 'w' ? 'b' : 'w'
        }${opponentpiece.value}`,
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

  chessGame.createNew({
    pieces: { [opponentsquare.value]: opponentpiece.value },
  });
  const opponentMoves = chessGame.moves(opponentsquare.value).map((s) => s.to);

  chessGame.createNew({ pieces: { [king.value]: 'K' } });
  const kingMoves = chessGame.moves(king.value).map((s) => s.to);

  const solutions = isCheck.value
    ? kingMoves.filter((s) => opponentMoves.indexOf(s) === -1)
    : [king.value];

  wasCorrect.value = solutions.indexOf(selectedSquare) > -1;

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

function selectNotInCheck(event: Event) {
  select(king.value, event);
}

const moves = computed(() => {
  if (king.value) {
    chessGame.createNew({ pieces: { [king.value]: 'K' } });
    const squares = chessGame.moves(king.value).map((m) => m.to);
    squares.sort((s1: string, s2: string) => (s1 > s2 ? 1 : -1));
    return squares;
  } else {
    return [];
  }
});
</script>
