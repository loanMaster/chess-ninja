<template>
  <div
    class="q-mx-sm text-h6 scroll-y"
    data="history"
    style="height: 100%; overflow-y: auto"
  >
    <div v-if="history.length === 0">-</div>
    <div
      v-for="(move, idx) in history"
      :key="idx"
      :class="isNavigatingThroughHistory && isCurrentMove(idx) ? 'bg-red' : ''"
    >
      {{ idx + 1 }}.
      {{
        move.white
          ? `${updateDescription(move.white.description)}${
              move.white.checkmate ? '#' : move.white.check ? '!' : ''
            }`
          : ''
      }}
      {{
        move.black
          ? `${updateDescription(move.black.description)}${
              move.black.checkmate ? '#' : move.black.check ? '!' : ''
            }`
          : ''
      }}
    </div>
  </div>
</template>

<script lang="ts" setup>
import { computed, onMounted } from 'vue';
import { HistoryMove } from '/src/engine/chess-game';
import { useChessGameStore } from 'stores/chess-game.store';
import { useAppStore } from 'stores/app-store';
import { ChessUtils } from 'src/util/chess-utils';

const appStore = useAppStore();

const moveHistory = computed(() => {
  return useChessGameStore().position.moveHistory;
});

const history = computed(() => {
  const pairs: {
    black: HistoryMove | undefined;
    white: HistoryMove | undefined;
  }[] = [];
  if (
    useChessGameStore().position.moveHistory.length > 0 &&
    moveHistory.value[0].configuration.turn === 'black'
  ) {
    pairs.push({ white: undefined, black: undefined });
  }
  for (let idx = 0; idx < moveHistory.value.length; idx++) {
    if (idx % 2 === 0) {
      pairs.push({ white: moveHistory.value[idx], black: undefined });
    } else {
      pairs[(idx - 1) / 2].black = moveHistory.value[idx];
    }
  }
  return pairs;
});

function updateDescription(desc: string) {
  if (appStore.showChessPieceSymbols) {
    return ChessUtils.getSymbol(desc[0]) + desc.substring(1);
  } else {
    return desc.replace('p', '').replace('P', '');
  }
}

onMounted(() => {
  useChessGameStore().$onAction(({ name, after }) => {
    after(() => {
      if (name === 'playerMove' || name === 'aiMove') {
        scrollToBottom();
      }
    });
  });
});

function scrollToBottom() {
  const messageBody = document.querySelector('[data="history"]') as HTMLElement;
  messageBody.scrollTop = messageBody.scrollHeight - messageBody.clientHeight;
}

const isNavigatingThroughHistory = computed(() => {
  return (
    useChessGameStore().position.indexInHistory <
    useChessGameStore().position.moveHistory.length - 1
  );
});

function isCurrentMove(idx: number): boolean {
  if (moveHistory.value[0].configuration.turn === 'black') {
    return (
      idx === Math.floor((useChessGameStore().position.indexInHistory + 1) / 2)
    );
  } else {
    return idx === Math.floor(useChessGameStore().position.indexInHistory / 2);
  }
}
</script>
