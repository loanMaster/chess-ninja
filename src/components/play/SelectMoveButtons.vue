<template>
  <div>
    <div
      class="row q-mb-lg justify-center items-center relative-position"
      style="height: 2rem"
    >
      <div>
        <div class="text-h5" v-if="playersTurn">
          {{ lastOpponentMoveDescription
          }}{{ checkMate ? '#' : inCheck ? '!' : '' }}
        </div>
        <div class="text-h5" v-if="!playersTurn && isFinished">
          {{ checkMate ? $t('Checkmate') : $t('Draw') }}
        </div>
        <q-spinner-hourglass
          v-if="!playersTurn && !isFinished"
          color="gray"
          size="1.5rem"
        />
      </div>
    </div>
    <div
      ref="buttons"
      class="row wrap justify-center q-gutter-md-sm q-gutter-xs-xs q-gutter-sm-xs"
    >
      <div v-for="move in moves" :key="move">
        <q-btn
          class="text-h6"
          style="padding: 0.5rem"
          no-caps
          :disable="!playersTurn"
          @click="makeMove(move)"
          >{{ updateDescription(move.description) }}</q-btn
        >
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { computed, onMounted, Ref, ref } from 'vue';
import { Move, PossibleMove } from '/src/engine/chess-game';
import { useChessGameStore } from 'stores/chess-game.store';
import { useI18n } from 'vue-i18n';
import { ChessUtils } from 'src/util/chess-utils';
import { useAppStore } from 'stores/app-store';

const { t } = useI18n();
const moves: Ref<PossibleMove[]> = ref([]);
const appStore = useAppStore();

const piecesOrderPriority: { [key: string]: string } = {
  p: '1',
  n: '2',
  b: '3',
  r: '4',
  q: '5',
  k: '6',
};

const inCheck = computed(() => {
  return (
    useChessGameStore().position.check &&
    useChessGameStore().position.turn === useChessGameStore().playerColor
  );
});

const checkMate = computed(() => {
  return useChessGameStore().position.checkMate;
});

const isFinished = computed(() => {
  return useChessGameStore().position.isFinished;
});

onMounted(() => {
  const updateMoves = () => {
    if (useChessGameStore().playersTurn) {
      moves.value = useChessGameStore().position.moves.sort(
        (m1: PossibleMove, m2: PossibleMove) => {
          const desc1 =
            piecesOrderPriority[m1.description[0].toLowerCase()] +
            m1.description.substring(1);
          const desc2 =
            piecesOrderPriority[m2.description[0].toLowerCase()] +
            m2.description.substring(1);
          return desc1 > desc2 ? 1 : -1;
        }
      );
    }
  };
  useChessGameStore().$subscribe(() => {
    updateMoves();
  });
  updateMoves();
});

const lastOpponentMoveDescription = computed(() => {
  return (
    updateDescription(useChessGameStore().lastOpponentMove?.description) || t('Make a move')
  );
});

function updateDescription(desc: string) {
  if (!desc) {
    return desc
  }
  if (appStore.showChessPieceSymbols) {
    return (
      (desc[0].toLowerCase() === 'p' ? '' : ChessUtils.getSymbol(desc[0])) +
      desc.substring(1)
    );
  } else {
    return desc.replace('p', '').replace('P', '');
  }
}

function makeMove(move: Move) {
  useChessGameStore().playerMove(move);
}

const playersTurn = computed(() => {
  return useChessGameStore().playersTurn;
});
</script>
