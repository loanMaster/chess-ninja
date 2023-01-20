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
          class="flex-1 column"
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
                />{{ $t('Chess pieces visible') }}
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
                  overflow: hidden;
                "
              >
                <ChessBoard :pieces-visible="piecesVisible || isFinished" />
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
    <div
      ref="touchIcon"
      style="position: fixed; transition-duration: 1s; opacity: 0"
      class="no-pointer-events"
    >
      <q-icon :name="matTouchApp" color="red" class="text-h1" />
    </div>
  </div>
</template>

<script lang="ts" setup>
import {
  matTouchApp,
  matVisibility,
  matVisibilityOff,
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
const touchIcon = ref();
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
    if (name === 'playerMove') {
      madeFirstMode();
    }
  });
  useChessGameStore().start();
  showInstructions();
});

onBeforeUnmount(() => {
  if (timeout !== undefined) {
    clearTimeout(timeout);
  }
  useChessGameStore().stopGame();
});

async function showInstructions() {
  const animate = async () => {
    const e2 = document.querySelector('.square-e2')!;
    const e4 = document.querySelector('.square-e4')!;
    if (e2 && e4 && touchIcon.value && e2.getBoundingClientRect().x > 0) {
      if (touchIcon.value) {
        touchIcon.value.style.setProperty('transition-duration', '0s');
        touchIcon.value.style.setProperty('opacity', 0);
        touchIcon.value.style.setProperty(
          'left',
          e2.getBoundingClientRect().x + 'px'
        );
        touchIcon.value.style.setProperty(
          'top',
          e2.getBoundingClientRect().y + 'px'
        );
        touchIcon.value.style.setProperty('scale', '1.2');
      }
      await new Promise((resolve) => setTimeout(resolve, 100));
      if (touchIcon.value) {
        touchIcon.value.style.setProperty('transition-duration', '1s');
        touchIcon.value.style.setProperty('opacity', 1);
      }
      await new Promise((resolve) => setTimeout(resolve, 500));
      if (touchIcon.value) {
        touchIcon.value.style.setProperty('scale', '1');
      }
      await new Promise((resolve) => setTimeout(resolve, 1000));
      if (touchIcon.value) {
        touchIcon.value.style.setProperty(
          'top',
          e4.getBoundingClientRect().y + 'px'
        );
      }
      await new Promise((resolve) => setTimeout(resolve, 1000));
      if (touchIcon.value) {
        touchIcon.value.style.setProperty('opacity', 0);
      }
      await new Promise((resolve) => setTimeout(resolve, 1000));
    }
  };
  const createTimer = () => {
    timeout = setTimeout(async () => {
      if (useAppStore().neverPlayed) {
        await animate();
      }
      if (useAppStore().neverPlayed) {
        createTimer();
      }
    });
  };
  createTimer();
}

const piecesVisible = computed(() => {
  return useChessBoardStore().piecesVisible;
});

function togglePiecesVisibility() {
  useChessBoardStore().$patch({
    piecesVisible: !useChessBoardStore().piecesVisible,
  });
}

function madeFirstMode() {
  if (touchIcon.value) {
    touchIcon.value.style.setProperty('display', 'none');
  }
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
</script>

<style>
.q-tabs__content {
  flex-wrap: wrap !important;
}
</style>
