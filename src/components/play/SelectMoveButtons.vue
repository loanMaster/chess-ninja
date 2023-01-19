<template>
  <div>
    <div class="row q-mb-lg justify-center items-center" style="height: 2rem">
      <div class="text-h5" v-if="playersTurn">
        {{ lastOpponentMove.description
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
    <div
      ref="buttons"
      class="row wrap justify-center q-gutter-md-sm q-gutter-xs-xs q-gutter-sm-xs"
    >
      <div v-for="move in moves" :key="move">
        <q-btn
          class="text-h6"
          style="padding: 0.5rem"
          :disable="!playersTurn"
          @click="makeMove(move)"
          >{{ move.description }}</q-btn
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

const { t } = useI18n();
const moves: Ref<PossibleMove[]> = ref([]);

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
          return m1.description > m2.description ? 1 : -1;
        }
      );
    }
  };
  useChessGameStore().$subscribe(() => {
    updateMoves();
  });
  updateMoves();
});

const lastOpponentMove = computed(() => {
  return (
    useChessGameStore().lastOpponentMove || {
      description: t('Make a move'),
    }
  );
});

function makeMove(move: Move) {
  useChessGameStore().playerMove(move);
}

const playersTurn = computed(() => {
  return useChessGameStore().playersTurn;
});
</script>
