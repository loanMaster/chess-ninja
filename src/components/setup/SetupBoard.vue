<template>
  <div class="column flex-1">
    <div
      class="row-md column-sm flex-1"
      style="max-height: 100%; overflow: hidden"
    >
      <div class="col-3 q-pt-lg xs-hide sm-hide"></div>
      <div class="flex-1">
        <div
          class="bg-secondary q-py-md"
          style="
            aspect-ratio: 1;
            max-width: 100%;
            max-height: 100%;
            margin: auto;
          "
        >
          <div class="g-board q-mx-auto"></div>
        </div>
      </div>
      <div
        class="col-3 q-pt-lg q-gutter-sm column-md row-sm row-xs items-center justify-md-start justify-sm-center justify-xs-center"
      >
        <q-btn color="primary" @click="reset" :disable="disabled">{{
          $t('Reset')
        }}</q-btn>
        <q-btn color="primary" @click="clear" :disable="disabled">{{
          $t('Clear')
        }}</q-btn>
        <q-btn color="primary" @click="playAsWhite" :disable="disabled">{{
          $t('Play as white')
        }}</q-btn>
        <q-btn color="primary" @click="playAsBlack" :disable="disabled">{{
          $t('Play as black')
        }}</q-btn>
        <div class="row items-center">
          <q-toggle v-model="blackToMove" />
          <span>{{ blackToMove ? 'Black to move' : 'White to move' }}</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { computed, onBeforeUnmount, onMounted, Ref, ref } from 'vue';
import { ChessBoard } from '/src/chess-board/chess-board.interface';
import { useChessGameStore } from 'stores/chess-game.store';
import { useRouter } from 'vue-router';
import { useAppStore } from 'stores/app-store';

let board: Ref<ChessBoard | undefined> = ref(undefined);
const router = useRouter();
const blackToMove = ref(false);

onMounted(() => {
  useChessGameStore().stopGame();
  setTimeout(() => {
    reset();
    if (useChessGameStore().position.fen) {
      board.value.position(useChessGameStore().position.fen, false);
    }
  }, 100);
});

const disabled = computed(() => {
  return !board.value;
});

onBeforeUnmount(() => {
  if (board.value) {
    board.value.destroy();
  }
});

async function playAsBlack() {
  await useChessGameStore().setupBoard({
    playerColor: 'black',
    config: {
      turn: blackToMove.value ? 'black' : 'white',
      pieces: convertPieceConfiguration(board.value.getPosition()),
    },
  });
  router.push({ name: 'play', params: { language: useAppStore().language } });
}

async function playAsWhite() {
  await useChessGameStore().setupBoard({
    playerColor: 'white',
    config: {
      turn: blackToMove.value ? 'black' : 'white',
      pieces: convertPieceConfiguration(board.value.getPosition()),
    },
  });
  router.push({ name: 'play', params: { language: useAppStore().language } });
}

function convertPieceConfiguration(pieces: any): { [key: string]: string } {
  const result: { [key: string]: string } = {};
  Object.keys(pieces).forEach((p) => {
    const color = pieces[p].startsWith('w') ? 'white' : 'black';
    result[p.toUpperCase()] =
      color === 'white'
        ? pieces[p][1].toUpperCase()
        : pieces[p][1].toLowerCase();
  });
  return result;
}

function reset() {
  if (board.value) {
    board.value.destroy();
  }
  board.value = new ChessBoard('.g-board', {
    dropOffBoard: 'trash',
    sparePieces: true,
  });
}

function clear() {
  board.value.clear(false);
}
</script>
