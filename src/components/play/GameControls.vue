<template>
  <div class="column items-center q-gutter-sm">
    <q-btn @click="startAsWhite" color="primary" v-if="showNewGame">{{
      $t('New game as white')
    }}</q-btn>
    <q-btn @click="startAsBlack" color="primary" v-if="showNewGame">{{
      $t('New game as black')
    }}</q-btn>
    <q-btn @click="setupBoard" color="primary" v-if="showSetup">{{
      $t('Setup board')
    }}</q-btn>
    <div>
      <div>{{ $t('Engine level:') }} {{ engineLevel }}</div>
      <q-slider
        :model-value="engineLevel"
        @update:model-value="setEngineLevel($event)"
        :min="0"
        :max="4"
        id="aiLevel"
      />
    </div>
    <q-btn @click="flipBoard" color="primary">{{ $t('Rotate board') }}</q-btn>
  </div>
</template>

<script lang="ts" setup>
import { useChessGameStore } from 'stores/chess-game.store';
import { computed } from 'vue';
import { useRouter } from 'vue-router';
import { useAppStore } from 'stores/app-store';
import { useChessBoardStore } from 'stores/chess-board.store';

defineProps({
  showSetup: { Boolean, default: true },
  showNewGame: { Boolean, default: true },
});

const router = useRouter();

function startAsBlack() {
  start('black');
}

function startAsWhite() {
  start('white');
}

async function start(color?: string) {
  useChessGameStore().new({ playerColor: color || 'white' });
}

const engineLevel = computed(() => {
  return useChessGameStore().engineLevel;
});

function setEngineLevel(newVal: number) {
  useChessGameStore().$patch({ engineLevel: newVal });
}

function setupBoard() {
  router.push({
    name: 'setup-board',
    params: { language: useAppStore().language },
  });
}

function flipBoard() {
  useChessBoardStore().rotateBoard();
}
</script>
