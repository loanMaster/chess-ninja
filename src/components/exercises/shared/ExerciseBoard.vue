<template>
  <div ref="frame" class="absolute-full column items-center justify-center">
    <div ref="boardWrapper" class="g-board"></div>
  </div>
</template>

<script lang="ts" setup>
import {
  ChessBoardConfig,
  ChessBoard,
} from '/src/chess-board/chess-board.interface';
import { take } from 'rxjs/operators';
import { computed, onBeforeUnmount, onMounted, ref, Ref } from 'vue';
import { BoardState, useExerciseStore } from 'stores/exercise.store';

const emits = defineEmits(['square-clicked']);
let board!: ChessBoard;
const frame: Ref<HTMLElement> = ref() as any;
const boardWrapper: Ref<HTMLElement> = ref() as any;

async function createBoard() {
  const config: ChessBoardConfig = {
    draggable: false,
    onClick: (square: string) => {
      emits('square-clicked', square);
    },
  };
  setBoardWrapperSize();
  board = new ChessBoard('.g-board', config);
  await board.initialized.pipe(take(1)).toPromise();
}

function setBoardWrapperSize() {
  if (frame.value && boardWrapper.value) {
    const width = frame.value.getBoundingClientRect().width;
    const height = frame.value.getBoundingClientRect().height;
    boardWrapper.value.setAttribute('width', Math.min(width, height) + 'px');
    boardWrapper.value.setAttribute('height', Math.min(width, height) + 'px');
  }
}

onMounted(async () => {
  useExerciseStore().$subscribe(() => {
    syncBoard();
  });
  await createBoard();
  syncBoard();
});

async function syncBoard() {
  if (!board) {
    return;
  }
  board.clear();
  board.removeHighlighting();
  board.position(boardState.value.pieces, false);
  board.orientation(boardState.value.orientation);
  for (const pos of boardState.value.highlightPositive) {
    board.highlight(pos);
  }
  for (const pos of boardState.value.highlightNegative) {
    board.highlight(pos, false);
  }
}

const boardState = computed((): BoardState => {
  return useExerciseStore().board;
});

onBeforeUnmount(() => {
  if (board) {
    board.destroy();
  }
});
</script>
