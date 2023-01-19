import {
  ChessGame,
  ChessMoveResult,
  Config,
  HistoryMove,
  Move,
  PossibleMove,
} from '/src/engine/chess-game';
import { defineStore } from 'pinia';

const chessGame = new ChessGame();

export interface Position {
  moveHistory: HistoryMove[];
  indexInHistory: number;
  moves: PossibleMove[];
  pieces: any;
  turn: string;
  fen: string;
  isFinished: boolean;
  checkMate: boolean;
  check: boolean;
}

export interface ChessGameState {
  position: Position;
  engineLevel: number;
  playerColor: string;
  gameOngoing: boolean;
}

const createPosition = (game: ChessGame, state?: ChessGameState): Position => {
  const history = game.getHistory(false);
  const historyLastElement =
    history.length > 0 ? history[history.length - 1] : undefined;
  if (historyLastElement) {
    historyLastElement.check = game.exportJson().check;
    historyLastElement.checkmate = game.exportJson().checkMate;
  }
  const previousHistory =
    state?.position?.moveHistory.splice(
      0,
      state?.position.indexInHistory + 1 || 0
    ) || [];
  const newIdx =
    state !== undefined
      ? historyLastElement
        ? state?.position.indexInHistory + 1
        : state?.position.indexInHistory
      : -1;
  return {
    fen: game.exportFEN(),
    moves: game.moves(),
    turn: game.exportJson().turn,
    isFinished: game.exportJson().isFinished,
    moveHistory: ([] as HistoryMove[])
      .concat(previousHistory)
      .concat(historyLastElement ? [historyLastElement] : []),
    pieces: game.gamePieces(),
    indexInHistory: newIdx,
    check: game.exportJson().check,
    checkMate: game.exportJson().checkMate,
  };
};

const applyHistory = (
  game: ChessGame,
  history: HistoryMove[],
  lastIdx: number
): void => {
  if (history.length === 0) {
    return;
  }
  const historyMove = history[Math.max(0, lastIdx)];
  chessGame.createNew(historyMove.configuration);
  if (lastIdx > -1) {
    chessGame.move(historyMove.from, historyMove.to);
  }
};

export const useChessGameStore = defineStore('chessgame', {
  state: (): ChessGameState => {
    return {
      engineLevel: 0,
      gameOngoing: false,
      position: createPosition(chessGame),
      playerColor: 'white',
    } as ChessGameState;
  },
  getters: {
    lastOpponentMove(state): HistoryMove | undefined {
      if (state.position.indexInHistory > -1) {
        const last = state.position.moveHistory[state.position.indexInHistory];
        if (
          last.configuration.turn === state.playerColor &&
          state.position.indexInHistory > 0
        ) {
          return state.position.moveHistory[state.position.indexInHistory - 1];
        } else if (last.configuration.turn !== state.playerColor) {
          return last;
        }
      }
    },
    playersTurn(state): boolean {
      return state.playerColor === state.position.turn;
    },
  },
  actions: {
    async setupBoard(data?: {
      playerColor: string;
      fen?: string;
      config?: Config;
    }) {
      this.gameOngoing = false;
      if (data?.config) {
        chessGame.createNew(data?.config);
      } else {
        chessGame.createNew(data?.fen || undefined);
      }
      this.position.moveHistory = [];
      this.position.indexInHistory = -1;
      this.updatePosition();
      this.playerColor = data?.playerColor || 'white';
    },
    async new(data?: { playerColor: string; fen?: string; config?: Config }) {
      this.setupBoard(data);
      this.start();
    },
    async start() {
      this.gameOngoing = true;
      if (this.playerColor !== this.position.turn) {
        await this.aiMove();
      }
    },
    async clear() {
      this.gameOngoing = false;
      chessGame.createNew({ pieces: [] });
      await this.updatePosition();
    },
    async playerMove(move: Move): Promise<ChessMoveResult> {
      const result = chessGame.move(move.from, move.to);
      await this.updatePosition();
      if (!this.position.isFinished) {
        this.aiMove();
      }
      return result;
    },
    async aiMove(): Promise<Move> {
      if (this.gameOngoing) {
        const result = await chessGame.aiMove(this.engineLevel);
        await this.updatePosition();
        return result;
      }
    },
    updatePosition() {
      this.position = createPosition(chessGame, this);
    },
    historyMoveToIdx(idx: number) {
      const historyCopy = JSON.parse(JSON.stringify(this.position.moveHistory));
      applyHistory(chessGame, this.position.moveHistory, idx);
      this.position = {
        ...createPosition(chessGame, this),
        indexInHistory: idx,
        moveHistory: historyCopy,
      };
    },
    async historyBack() {
      await this.historyMoveToIdx(
        Math.max(
          this.playerColor === 'white' ? -1 : 0,
          this.position.indexInHistory - 2
        )
      );
    },
    async historyForward() {
      await this.historyMoveToIdx(
        Math.min(
          this.position.moveHistory.length - 1,
          this.position.indexInHistory + 2
        )
      );
    },
    async stopGame() {
      this.gameOngoing = false;
      chessGame.terminate();
    },
  },
});
