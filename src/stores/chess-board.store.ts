import { defineStore } from 'pinia';
import { useChessGameStore } from 'stores/chess-game.store';

export interface ChessBoardState {
  animations: boolean;
  orientation: string;
  piecesVisible: boolean;
}

export const useChessBoardStore = defineStore('chessboard', {
  state: (): ChessBoardState => {
    return {
      animations: true,
      orientation: 'white',
      piecesVisible: false,
    } as ChessBoardState;
  },
  actions: {
    rotateBoard() {
      this.orientation = this.orientation === 'white' ? 'black' : 'white';
    },
  },
});

useChessGameStore().$onAction(({ name }) => {
  if (name === 'start') {
    useChessBoardStore().piecesVisible = false;
    if (useChessBoardStore().orientation !== useChessGameStore().playerColor) {
      useChessBoardStore().rotateBoard();
    }
  }
});
