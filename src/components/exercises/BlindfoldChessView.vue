<template>
  <ExerciseHeader class="self-stretch" />
  <div class="column flex-1">
    <div class="row flex-1" style="max-height: 100%; overflow: hidden">
      <div
        class="col-lg-2 col-md-3 q-pb-sm sm-hide xs-hide"
        style="max-height: 100%; overflow-y: hidden"
      >
        <q-card class="q-pt-sm q-ma-sm" style="height: 100%">
          <MoveHistory />
        </q-card>
      </div>
      <div
        class="col-lg-7 col-md-6 col-sm-12 col-xs-12 column justify-start align-start relative-position"
        style="max-height: 100%; max-width: 100%"
      >
        <q-card
          class="q-mx-sm q-mt-sm q-pt-md-lg q-pt-sm-sm"
          style="height: 100%; overflow: auto"
        >
          <div class="text-center" v-if="!hasStarted">
            <div class="text-h5">
              {{ $t("Checkmate the opponent's king") }}
            </div>
            <div
              class="row text-h5 q-my-md-xl q-my-sm-md q-my-xs-md justify-center q-gutter-md"
            >
              <div class="column q-gutter-sm q-px-md">
                <div class="q-mb-md-sm">{{ $t('White pieces') }}</div>
                <PieceList :pieces="whitePieces" />
              </div>
              <div class="column q-gutter-sm q-px-md">
                <div class="q-mb-md-sm">{{ $t('Black pieces') }}</div>
                <PieceList :pieces="blackPieces" />
              </div>
            </div>
            <div class="text-h6 q-mb-lg">
              {{ $t('You play as') }} {{ $t(playerColor) }}
            </div>
            <div>
              <q-btn color="primary" @click="start">{{
                $t('Click here when you are ready')
              }}</q-btn>
            </div>
          </div>
          <div v-if="hasStarted" class="column full-height">
            <div
              class="flex-1"
              style="overflow-y: auto"
              :style="{ opacity: revealed ? 0 : 1 }"
            >
              <SelectMoveButtons />
            </div>
            <div class="md-hide lg-hide xl-hide text-center y-mt-lg">
              <q-btn color="primary" @click="playAgain">{{
                $t('Restart')
              }}</q-btn>
              <q-btn color="primary" @click="giveUp" :disable="revealed">{{
                $t('Give up')
              }}</q-btn>
              <ToggleChessPieceNotation />
            </div>
          </div>
          <div
            class="absolute-full"
            @click="playAgain"
            :style="{
              opacity: revealed ? 1 : 0,
              'pointer-events': revealed ? 'all' : 'none',
            }"
          >
            <ExerciseBoard />
          </div>
          <div
            class="absolute-full no-pointer-events column justify-center items-center q-mx-auto"
            style="aspect-ratio: 1; max-height: 100%; max-width: 100%"
          >
            <div
              v-if="isFinished"
              class="text-h4 bg-secondary q-pa-md non-selectable"
              style="opacity: 0.7"
            >
              <div class="text-center">
                {{ $t(checkMate ? 'Checkmate' : 'Draw') }}
              </div>
              <div v-if="checkMate">
                {{ turn !== playerColor ? $t('You won!') : $t('You lost') }}
              </div>
            </div>
          </div>
        </q-card>
      </div>
      <div
        class="col-3 q-pt-lg items-center column justify-center xs-hide sm-hide q-gutter-sm"
      >
        <q-btn color="primary" @click="playAgain">{{ $t('Restart') }}</q-btn>
        <q-btn color="primary" @click="giveUp" :disable="revealed">{{
          $t('Give up')
        }}</q-btn>
        <ToggleChessPieceNotation />
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import ExerciseHeader from 'src/components/exercises/shared/ExerciseHeader.vue';
import PieceList from 'src/components/exercises/shared/PieceList.vue';
import ExerciseBoard from 'src/components/exercises/shared/ExerciseBoard.vue';
import SelectMoveButtons from 'src/components/play/SelectMoveButtons.vue';
import ToggleChessPieceNotation from 'src/components/shared/ToggleChessPieceNotation.vue';
import MoveHistory from 'src/components/play/MoveHistory.vue';
import { computed, onBeforeUnmount, onMounted, ref } from 'vue';
import { useChessGameStore } from 'stores/chess-game.store';
import { useRoute } from 'vue-router';
import { useExerciseStore } from 'stores/exercise.store';
import { ChessGame } from 'src/engine/chess-game';
import { ChessUtils } from 'src/util/chess-utils';

const hasStarted = ref(false);
const revealed = ref(false);
const route = useRoute();

onMounted(() => {
  useExerciseStore().$patch((store) => {
    store.board = {
      ...store.board,
      orientation: 'white',
      pieces: {},
      highlightPositive: [],
      highlightNegative: [],
    };
  });
  useChessGameStore().$subscribe(() => {
    if (isFinished.value) {
      revealed.value = true;
      if (checkMate.value && turn.value !== playerColor.value) {
        useExerciseStore().updateRating({
          nameOfTheGame: nameOfTheGame.value,
          value: 1,
        });
      }
    }
    useExerciseStore().$patch((store) => {
      store.board.pieces = convertToBoardDisplayCoordinates(
        useChessGameStore().position.pieces
      );
    });
  });
  playAgain();
});

function giveUp() {
  revealed.value = true;
  return useChessGameStore().$patch({ gameOngoing: false });
}

const whitePieces = computed((): any => {
  return filterOnColor(useChessGameStore().position.pieces, 'white');
});

const blackPieces = computed((): any => {
  return filterOnColor(useChessGameStore().position.pieces, 'black');
});

function filterOnColor(pieces: any, color: 'white' | 'black') {
  const result: any = {};
  Object.keys(useChessGameStore().position.pieces).forEach((pos) => {
    if (pieces[pos].toUpperCase() === pieces[pos] && color === 'white') {
      result[pos] = pieces[pos];
    } else if (pieces[pos].toUpperCase() !== pieces[pos] && color === 'black') {
      result[pos] = pieces[pos];
    }
  });
  return result;
}

const isFinished = computed(() => {
  return (
    useChessGameStore().position.isFinished ||
    Object.keys(useChessGameStore().position.pieces).length < 3
  );
});

const checkMate = computed(() => {
  return useChessGameStore().position.check;
});

const turn = computed(() => {
  return useChessGameStore().position.turn;
});

const nameOfTheGame = computed((): string => {
  return route.params.game as string;
});

async function playAgain() {
  await useChessGameStore().setupBoard({
    playerColor: playerColor.value,
    config: {
      turn: playerColor.value,
      pieces: getInitialPosition(),
    },
  });
  useChessGameStore().start();
  useChessGameStore().$patch({ engineLevel: 3 });
  revealed.value = false;
  hasStarted.value = false;
  useChessGameStore().$patch({ gameOngoing: true });
}

function getInitialPosition() {
  switch (nameOfTheGame.value) {
    case 'queen-vs-rook':
      return { E7: 'k', F7: 'r', A3: 'K', C1: 'Q' };
    case 'rook-vs-king':
      return randomConfiguration(['k', 'K', 'R']);
    case 'queen-vs-knights':
      return queenVsKnights();
    case 'queen-vs-king':
    default:
      return randomConfiguration(['k', 'K', 'Q']);
  }
}

function queenVsKnights(): { [key: string]: string } {
  const chessGame: ChessGame = new ChessGame();
  let check1 = false;
  let check2 = false;
  let pieces: { [key: string]: string } = {};
  do {
    pieces = randomConfiguration(['k', 'K', 'Q', 'n']);
    const knightPosition = Object.keys(pieces).find(
      (pos) => pieces[pos] === 'n'
    )!;
    chessGame.createNew({
      turn: 'black',
      pieces,
    });
    const knightMoves = chessGame.moves(knightPosition);
    const knightMove =
      knightMoves[Math.floor(Math.random() * knightMoves.length)];
    if (!knightMove) {
      continue;
    }
    pieces[knightMove.to] = 'n';
    chessGame.createNew({
      turn: 'white',
      pieces,
    });
    check1 = chessGame.exportJson().check;
    chessGame.createNew({
      turn: 'black',
      pieces,
    });
    check2 = chessGame.exportJson().check;
  } while (
    check1 ||
    check2 ||
    Object.keys(chessGame.exportJson().pieces).length < 5
  );
  chessGame.terminate();
  return pieces;
}

function randomConfiguration(piecesList: string[]): { [key: string]: string } {
  const chessGame: ChessGame = new ChessGame();
  let squares = ChessUtils.getRandomSquares(piecesList.length);
  let pieces: { [key: string]: string } = {};
  do {
    squares = ChessUtils.getRandomSquares(piecesList.length);
    pieces = {};
    for (let idx = 0; idx < squares.length; idx++) {
      pieces[squares[idx]] = piecesList[idx];
    }
    chessGame.createNew({
      turn: playerColor.value === 'white' ? 'black' : 'white',
      pieces,
    });
  } while (chessGame.exportJson().check);
  chessGame.terminate();
  return pieces;
}

const playerColor = computed(() => {
  return 'white';
});

function convertToBoardDisplayCoordinates(pieces: { [key: string]: string }) {
  const result: { [key: string]: string } = {};
  Object.keys(pieces).forEach((position) => {
    const prefix =
      pieces[position] === pieces[position].toUpperCase() ? 'w' : 'b';
    result[position.toLowerCase()] = prefix + pieces[position].toUpperCase();
  });
  return result;
}

async function start() {
  hasStarted.value = true;
}

onBeforeUnmount(() => {
  useChessGameStore().stopGame();
});
</script>
