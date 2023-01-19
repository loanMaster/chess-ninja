<template>
  <div style="aspect-ratio: 1; max-width: 100%; max-height: 100%; margin: auto">
    <div class="g-board"></div>
  </div>
</template>

<script lang="ts" setup>
import {
  ChessBoardConfig,
  ChessBoard,
} from '/src/chess-board/chess-board.interface';
import { take } from 'rxjs/operators';
import { computed, onBeforeUnmount, onMounted } from 'vue';
import { BoardState, useExerciseStore } from 'stores/exercise.store';

const emits = defineEmits(['square-clicked']);
let board!: ChessBoard;

async function createBoard() {
  const config: ChessBoardConfig = {
    draggable: false,
    onClick: (square: string) => {
      emits('square-clicked', square);
    },
  };
  board = new ChessBoard('.g-board', config);
  await board.initialized.pipe(take(1)).toPromise();
}

onMounted(async () => {
  useExerciseStore().$subscribe(() => {
    syncBoard();
  });
  await createBoard();
  syncBoard();
});

async function syncBoard() {
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
