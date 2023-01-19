<template>
  <div class="d-flex justify-content-between q-gutter-xs">
    <q-btn color="primary" @click="positionToStart" :disable="aiTurn">⇤</q-btn>
    <q-btn color="primary" @click="moveBack" :disable="aiTurn">←</q-btn>
    <q-btn color="primary" @click="moveForward" :disable="aiTurn">→</q-btn>
    <q-btn color="primary" @click="positionToEnd" :disable="aiTurn">⇥</q-btn>
  </div>
</template>

<script lang="ts" setup>
import { useChessGameStore } from 'stores/chess-game.store';
import { computed } from 'vue';

function positionToStart() {
  useChessGameStore().historyMoveToIdx(-1);
}

const aiTurn = computed(() => {
  return (
    !useChessGameStore().playersTurn && !useChessGameStore().position.isFinished
  );
});

function moveBack() {
  useChessGameStore().historyBack();
}

function moveForward() {
  useChessGameStore().historyForward();
}

function positionToEnd() {
  useChessGameStore().historyMoveToIdx(
    useChessGameStore().position.moveHistory.length - 1
  );
}
</script>

<style scoped>
q-btn {
  transition-delay: 0.75s;
  transition-duration: 0.3s;
  transition-property: all;
}
</style>
