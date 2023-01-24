<template>
  <div
    class="row-md column-sm column-xs flex-1"
    style="max-height: 100%; overflow: hidden"
  >
    <div class="col-3 q-pt-lg xs-hide sm-hide"></div>
    <div class="flex-1 q-my-md relative-position" style="max-height: 100%">
      <div
        ref="frame"
        class="bg-secondary absolute-full column items-center justify-center"
      >
        <div ref="boardWrapper" class="g-board relative-position"></div>
      </div>
    </div>
    <div
      class="col-md-3 q-pt-md-lg q-pt-sm-xs q-gutter-sm column-md row-sm row-xs items-center justify-md-start justify-sm-center justify-xs-center"
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
const frame: Ref<HTMLElement> = ref() as any;
const boardWrapper: Ref<HTMLElement> = ref() as any;

onMounted(() => {
  useChessGameStore().stopGame();
  setTimeout(() => {
    reset();
    if (useChessGameStore().position.fen) {
      board.value.position(useChessGameStore().position.fen, false);
    }
  }, 1);
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
      turn: 'white',
      pieces: convertPieceConfiguration(board.value.getPosition()),
    },
  });
  router.push({ name: 'play', params: { language: useAppStore().language } });
}

async function playAsWhite() {
  await useChessGameStore().setupBoard({
    playerColor: 'white',
    config: {
      turn: 'white',
      pieces: convertPieceConfiguration(board.value.getPosition()),
    },
  });
  console.log(board.value.getPosition());
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
  setBoardWrapperSize();
  board.value = new ChessBoard('.g-board', {
    dropOffBoard: 'trash',
    sparePieces: true,
  });
}

function setBoardWrapperSize() {
  if (frame.value && boardWrapper.value) {
    const width = frame.value.getBoundingClientRect().width;
    const height = frame.value.getBoundingClientRect().height;
    boardWrapper.value.setAttribute('width', Math.min(width, height) + 'px');
    boardWrapper.value.setAttribute('height', Math.min(width, height) + 'px');
  }
}

function clear() {
  board.value.clear(false);
}
</script>
