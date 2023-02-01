<template>
  <div v-for="piece in pieceDescriptions" :key="piece" style="color: black">
    {{ piece.symbol }}: {{ piece.square }}
  </div>
</template>

<script lang="ts" setup>
import { ChessUtils } from 'src/util/chess-utils';
import { computed } from 'vue';

const props = defineProps({
  pieces: Object,
});

const pieceDescriptions = computed(
  (): { square: string; color: string; symbol: string }[] => {
    if (!props.pieces) {
      return [];
    }
    return Object.keys(props.pieces).map((key) => {
      const piece =
        props.pieces![key].length > 1
          ? convertToSingleLetterNotation(props.pieces![key])
          : props.pieces![key];
      return {
        square: key.toLowerCase(),
        color: piece.toLowerCase() === piece ? 'Black' : 'White',
        symbol: ChessUtils.getSymbol(piece),
      };
    });
  }
);

function convertToSingleLetterNotation(piece: string): string {
  const type = piece[1];
  const color = piece[0];
  return color === 'w' ? type.toUpperCase() : type.toLowerCase();
}
</script>
