import * as jsChessEngine from 'js-chess-engine';
import { ChessEngine } from './chess-engine';

export interface ChessMoveResult {
  isValid: boolean;
  finished: boolean;
  turn: string;
}

export interface Move {
  from: string;
  to: string;
}

export interface PossibleMove {
  from: string;
  to: string;
  description: string;
}

export interface HistoryMove {
  from: string;
  to: string;
  check?: boolean;
  checkmate?: boolean;
  description: string;
  configuration: {
    turn: string;
    check: boolean;
    pieces: any;
    moves?: any;
  };
}

export interface Config {
  pieces: any;
  turn?: string;
}

const mapToLower = (moves: any): any => {
  const lowerMoves: any = {};
  Object.keys(moves).forEach((key) => {
    const lowerKey = key.toLowerCase();
    lowerMoves[lowerKey] = lowerMoves[lowerKey] || {};
    lowerMoves[lowerKey] = moves[key].map((to: string) => to.toLowerCase());
  });
  return lowerMoves;
};

const mapPiecesToUpper = (config: Config): void => {
  const piecesLower: any = config.pieces;
  const piecesUpper: any = {};
  Object.keys(piecesLower).forEach((key) => {
    const upperKey = key.toUpperCase();
    piecesUpper[upperKey] = piecesLower[key];
  });
  config.pieces = piecesUpper;
};

const mapPiecesToLower = (pieces: any): void => {
  const piecesLower: any = {};
  Object.keys(pieces).forEach((key) => {
    const lowerKey = key.toLowerCase();
    piecesLower[lowerKey] = pieces[key];
  });
  return piecesLower;
};

const gameMoves = (game: any) => {
  return mapToLower(game.moves());
};

export class ChessGame {
  private engine!: ChessEngine;
  private game: any;

  constructor(config?: string | Config) {
    this.createNew(config);
  }

  createNew(config?: string | Config) {
    if (this.engine) {
      this.engine.terminate();
    }
    this.engine = new ChessEngine();
    if ((config as Config)?.pieces) {
      mapPiecesToUpper(config as Config);
    }
    this.game = new jsChessEngine.Game(config);
  }

  move(source: string, target: string): ChessMoveResult {
    try {
      this.game.move(source.toUpperCase(), target.toUpperCase());
      return {
        isValid: true,
        finished: this.game.exportJson().isFinished,
        turn: this.game.exportJson().turn,
      };
    } catch (error) {
      return {
        isValid: true,
        finished: this.game.exportJson().isFinished,
        turn: this.game.exportJson().turn,
      };
    }
  }

  async aiMove(level = 0): Promise<Move> {
    const move = await this.engine.aiMove({
      fen: this.game.exportFEN(),
      level,
    });
    this.game.move(move.from.toUpperCase(), move.to.toUpperCase());
    return move;
  }

  exportFEN(): string {
    return this.game.exportFEN();
  }

  exportJson(): {
    isFinished: boolean;
    turn: string;
    pieces: any;
    checkMate: boolean;
    check: boolean;
  } {
    return this.game.exportJson();
  }

  getHistory(sortReverse: boolean): HistoryMove[] {
    return this.game.getHistory(sortReverse).map((h: HistoryMove) => {
      const tempGame = new jsChessEngine.Game(h.configuration);
      return {
        ...h,
        description: this.getDescription(
          h.from.toLowerCase(),
          h.to.toLowerCase(),
          mapPiecesToLower(h.configuration.pieces),
          gameMoves(tempGame)
        ),
      };
    });
  }

  moves(from?: string): PossibleMove[] {
    const pieces = this.gamePieces();
    const movesLower = gameMoves(this.game);
    if (from) {
      const moves = this.game
        .moves(from.toUpperCase())
        .map((to: string) => to.toLowerCase());
      return moves.map((move: string) => ({
        from,
        to: move,
        description: this.getDescription(from, move, pieces, movesLower),
      }));
    } else {
      const result: PossibleMove[] = [];
      Object.keys(movesLower).forEach((from) => {
        movesLower[from].forEach((move: string) => {
          result.push({
            from,
            to: move,
            description: this.getDescription(from, move, pieces, movesLower),
          });
        });
      });
      return result;
    }
  }

  getDescription(from: string, to: string, pieces: any, moves: any) {
    if (pieces[from].toLowerCase() === 'k' && from.startsWith('e')) {
      if (to.startsWith('c')) {
        return '0-0-0';
      } else if (to.startsWith('g')) {
        return '0-0';
      }
    }
    const alternativePieces: Move[] = [];
    Object.keys(moves).forEach((fromTemp) => {
      moves[fromTemp].forEach((move: string) => {
        if (
          move === to &&
          from !== fromTemp &&
          pieces[fromTemp] === pieces[from]
        ) {
          alternativePieces.push({ from: fromTemp, to: move });
        }
      });
    });
    if (alternativePieces.length > 1) {
      return `${from}-${to}`;
    }
    const capture = pieces[to] ? 'x' : '';
    const piecesShortcut = pieces[from].toUpperCase();
    let altPieceIndicator = '';
    if (alternativePieces.length === 1) {
      if (alternativePieces[0].from[0] === from[0]) {
        altPieceIndicator = from[1];
      } else {
        altPieceIndicator = from[0].toLowerCase();
      }
    }
    return `${piecesShortcut}${altPieceIndicator}${capture}${to.toLowerCase()}`;
  }

  validate(from: string, to: string): boolean {
    const possibleMoves = this.game.moves(from.toUpperCase());
    return possibleMoves.indexOf(to.toUpperCase()) > -1;
  }

  gamePieces(): any {
    return mapPiecesToLower(this.game.exportJson().pieces);
  }

  terminate() {
    this.engine.terminate();
  }
}
