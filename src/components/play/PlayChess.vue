<template>
  <div class="column flex-1">
    <div class="row flex-1" style="max-height: 100%; overflow: hidden">
      <div
        class="col-lg-2 col-md-3 q-pb-sm sm-hide xs-hide"
        style="max-height: 100%; overflow-y: hidden"
      >
        <q-card class="q-px-sm q-ma-sm" style="height: 100%">
          <MoveHistory />
        </q-card>
      </div>
      <div
        class="col-lg-7 col-md-6 col-sm-12 column justify-start align-start"
        style="max-height: 100%; max-width: 100%"
      >
        <q-tabs v-model="tab" style="flex-wrap: wrap">
          <q-tab name="chess-board" :label="$t('Chess board')" />
          <q-tab name="hide-board" :label="$t('Move selection')" />
          <q-tab
            name="history"
            :label="$t('History')"
            class="md-hide lg-hide xl-hide xxl-hide"
          />
          <q-tab
            name="settings"
            :label="$t('Settings')"
            class="md-hide lg-hide xl-hide xxl-hide"
          />
        </q-tabs>
        <q-tab-panels
          v-model="tab"
          animated
          :keep-alive="true"
          class="flex-1 column shadow-2"
        >
          <q-tab-panel
            name="chess-board"
            class="column flex-1 q-py-xs q-px-xs-xs q-px-sm-xs overflow-hidden"
          >
            <div class="row items-center justify-between overflow-hidden">
              <div />
              <div>
                <q-toggle
                  :model-value="piecesVisible"
                  @update:model-value="togglePiecesVisibility"
                  :checked-icon="matVisibility"
                  color="secondary"
                  :unchecked-icon="matVisibilityOff"
                />
                <q-btn
                  :icon="matUndo"
                  flat
                  @click="undo"
                  :disable="firstTurn || aiTurn"
                  style="transition-duration: 0.5s; transition-delay: 0.2s"
                />
                <q-btn
                  :icon="matRedo"
                  flat
                  @click="redo"
                  :disable="lastTurn || aiTurn"
                  style="transition-duration: 0.5s; transition-delay: 0.2s"
                />
              </div>
              <q-spinner-hourglass
                :style="{
                  opacity: aiTurn && !isFinished ? 1 : 0,
                  'transition-delay': aiTurn ? '0.75s' : '0s',
                }"
                color="gray"
                style="transition-duration: 0.5s; transition-property: opacity"
                size="2em"
              />
            </div>
            <div class="flex-1 relative-position overflow-hidden">
              <div
                style="
                  aspect-ratio: 1;
                  max-width: 100%;
                  max-height: 100%;
                  margin: auto;
                  position: relative;
                  overflow: hidden;
                "
              >
                <ChessBoard :pieces-visible="piecesVisible || isFinished" />
                <q-icon
                  :name="matPanToolAlt"
                  color="red"
                  class="text-h1 instructions no-pointer-events"
                  :style="{ display: neverPlayed ? 'block' : 'none' }"
                  style="
                    transition-duration: 1s;
                    opacity: 1;
                    position: absolute;
                  "
                />s
                <div
                  class="absolute-full no-pointer-events column justify-center items-center q-mx-auto"
                  style="aspect-ratio: 1; max-height: 100%; max-width: 100%"
                >
                  <div
                    v-if="isFinished"
                    class="text-h4 bg-secondary q-pa-md non-selectable"
                    style="opacity: 0.7"
                  >
                    {{ $t(isCheckmate ? 'Checkmate' : 'Draw') }}
                  </div>
                </div>
              </div>
            </div>
          </q-tab-panel>
          <q-tab-panel name="hide-board">
            <SelectMoveButtons />
          </q-tab-panel>
          <q-tab-panel name="history">
            <MoveHistory />
          </q-tab-panel>
          <q-tab-panel name="settings">
            <GameControls />
          </q-tab-panel>
        </q-tab-panels>
      </div>
      <div
        class="col-3 q-pt-lg items-center column justify-center xs-hide sm-hide"
      >
        <GameControls />
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import {
  matPanToolAlt,
  matVisibility,
  matVisibilityOff,
  matUndo,
  matRedo,
} from '@quasar/extras/material-icons';
import MoveHistory from './MoveHistory.vue';
import SelectMoveButtons from './SelectMoveButtons.vue';
import GameControls from './GameControls.vue';
import ChessBoard from './ChessBoard.vue';
import { useChessBoardStore } from 'stores/chess-board.store';
import { useChessGameStore } from 'stores/chess-game.store';
import { computed, onBeforeUnmount, onMounted, ref } from 'vue';
import { useAppStore } from 'stores/app-store';
import { useRoute } from 'vue-router';

const tab = ref('chess-board');
const route = useRoute();
let timeout: any;

onMounted(() => {
  const difficulty = route.query.difficulty;
  if (difficulty) {
    useChessGameStore().$patch({ engineLevel: Number(difficulty) });
  }
  useChessGameStore().$subscribe(() => {
    if (useChessGameStore().position.isFinished) {
      tab.value = 'chess-board';
    }
  });
  useChessGameStore().$onAction(({ name }) => {
    if (name === 'playerMove' && useAppStore().neverPlayed) {
      madeFirstMode();
    }
  });
  useChessGameStore().start();
});

onBeforeUnmount(() => {
  if (timeout !== undefined) {
    clearTimeout(timeout);
  }
  useChessGameStore().stopGame();
});

const piecesVisible = computed(() => {
  return useChessBoardStore().piecesVisible;
});

function undo() {
  useChessGameStore().historyBack();
}

function redo() {
  useChessGameStore().historyForward();
}

function togglePiecesVisibility() {
  useChessBoardStore().$patch({
    piecesVisible: !useChessBoardStore().piecesVisible,
  });
}

function madeFirstMode() {
  useAppStore().playerStartedPlaying();
}

const isFinished = computed(() => {
  return useChessGameStore().position.isFinished;
});
const isCheckmate = computed(() => {
  return useChessGameStore().position.checkMate;
});
const aiTurn = computed(() => {
  return !useChessGameStore().playersTurn;
});
const firstTurn = computed(() => {
  return useChessGameStore().position.indexInHistory < 1;
});
const lastTurn = computed(() => {
  return (
    useChessGameStore().position.indexInHistory ===
    useChessGameStore().position.moveHistory.length - 1
  );
});
const neverPlayed = computed(() => {
  return useAppStore().neverPlayed;
});
</script>

<style>
.q-tabs__content {
  flex-wrap: wrap !important;
}

@keyframes instructions {
  0% {
    top: 77%;
    opacity: 0;
  }
  25% {
    top: 77%;
    opacity: 1;
  }
  75% {
    top: 52%;
    opacity: 1;
  }
  100% {
    top: 52%;
    opacity: 0;
  }
}

.instructions {
  top: 75%;
  left: 50%;
  animation-name: instructions;
  animation-duration: 2s;
  animation-iteration-count: infinite;
}
</style>
