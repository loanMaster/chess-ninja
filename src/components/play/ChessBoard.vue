<template>
  <div ref="frame" class="absolute-full column items-center justify-center">
    <div
      ref="boardWrapper"
      class="g-board relative-position"
      :class="!piecesVisible ? 'g-hide-pieces' : ''"
    ></div>
  </div>
</template>

<script lang="ts" setup>
import {
  ChessBoardConfig,
  ChessBoard,
} from '/src/chess-board/chess-board.interface';
import { Move, PossibleMove } from '/src/engine/chess-game';
import { useChessGameStore } from 'stores/chess-game.store';
import { onActivated, onDeactivated, onMounted, ref, Ref } from 'vue';
import { useChessBoardStore } from 'stores/chess-board.store';
import { preloadAssets } from 'src/util/preload-assets';

let board: ChessBoard;
const frame: Ref<HTMLElement> = ref() as any;
const boardWrapper: Ref<HTMLElement> = ref() as any;

defineProps({
  piecesVisible: { type: Boolean, default: true },
});

function onDrop(source: string, target: string) {
  const moves = useChessGameStore().position.moves;
  if (
    !useChessGameStore().gameOngoing ||
    !moves.find((m: PossibleMove) => m.from === source && m.to === target)
  ) {
    return 'snapback';
  }
}

async function onPlayerMove(source: string, target: string) {
  const moveResult = await useChessGameStore().playerMove({
    from: source,
    to: target,
  });
  if (!moveResult.isValid) {
    console.warn('Move result is invalid although move was declared valid!');
  }
  board.setDraggable(false);
}

function createBoard(color: string, fen?: string) {
  const config: ChessBoardConfig = {
    onDrop: onDrop,
    orientation: color,
    onSnapEnd: onPlayerMove,
    position: fen || 'start',
    onDragStart: () => board.removeHighlighting(),
  };
  if (document.querySelector('.g-board')) {
    setBoardWrapperSize();
    board = new ChessBoard('.g-board', config);
    syncBoard();
  }
}

function setBoardWrapperSize() {
  if (frame.value && boardWrapper.value) {
    const width = frame.value.getBoundingClientRect().width;
    const height = frame.value.getBoundingClientRect().height;
    boardWrapper.value.setAttribute('width', Math.min(width, height) + 'px');
    boardWrapper.value.setAttribute('height', Math.min(width, height) + 'px');
  }
}

useChessGameStore().$onAction(({ name, after }) => {
  after(() => {
    if (!board) {
      return;
    }
    if (name === 'playerMove') {
      board.position(useChessGameStore().position.fen, false);
    }
    if (name === 'historyMoveToIdx' || name === 'aiMove' || name === 'new') {
      const lastMove = useChessGameStore().lastOpponentMove;
      board.removeHighlighting();
      highlight(lastMove);
      board.position(
        useChessGameStore().position.fen,
        useChessBoardStore().animations && name !== 'historyMoveToIdx'
      );
      board.setDraggable(
        !useChessGameStore().position.isFinished &&
          useChessGameStore().playerColor === useChessGameStore().position.turn
      );
    }
  });
});

useChessBoardStore().$onAction(({ name, after }) => {
  after(() => {
    if (name === 'rotateBoard' && board) {
      board.orientation(useChessBoardStore().orientation);
    }
  });
});

onMounted(async () => {
  await preloadAssets(
    [
      'bB',
      'bK',
      'bN',
      'bP',
      'bQ',
      'bR',
      'wB',
      'wK',
      'wN',
      'wP',
      'wQ',
      'wR',
    ].map((v) => `/img/chesspieces/wikipedia/${v}.png`)
  );
});

function highlight(move: Move): void {
  if (move) {
    board.highlight(move.from.toUpperCase());
    board.highlight(move.to.toUpperCase());
  }
}

function syncBoard(): void {
  if (board) {
    board.orientation(useChessBoardStore().orientation);
    board.setDraggable(
      !useChessGameStore().position.isFinished &&
        useChessGameStore().playerColor === useChessGameStore().position.turn
    );
  }
}

onActivated(() => {
  createBoard(
    useChessGameStore().playerColor,
    useChessGameStore().position.fen
  );
  setTimeout(() => {
    const lastMove = useChessGameStore().lastOpponentMove;
    if (lastMove) {
      highlight(lastMove);
    }
  });
});

onDeactivated(() => {
  if (board) {
    board.destroy();
    board = undefined;
  }
});
</script>
