import { ChessGame } from '/src/engine/chess-game';

export class ChessUtils {
  static getSquaresOnSameDiagonal(square: string): string[] {
    const chessGame = new ChessGame();
    chessGame.createNew({ pieces: { [square.toUpperCase()]: 'B' } });
    return chessGame.moves(square).map((m) => m.to.toLowerCase());
  }

  static areOnSameDiagonal(s1: string, s2: string) {
    const diagonalSquares = this.getSquaresOnSameDiagonal(s1);
    return diagonalSquares.indexOf(s2) > -1;
  }

  static getRandomSquare(): string {
    const letters = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h'];
    const letter = letters[Math.floor(Math.random() * letters.length)];
    const number = Math.floor(Math.random() * 8) + 1;
    return `${letter}${number}`;
  }

  static getOtherRandomSquare(notTheseSquares: string[]): string {
    if (!notTheseSquares) {
      return this.getRandomSquare();
    }
    let result = '';
    do {
      result = this.getRandomSquare();
    } while (notTheseSquares.indexOf(result) > -1);
    return result;
  }

  static getColor(position: string): string | undefined {
    if (!position) {
      return undefined;
    }
    switch (position[0].toLowerCase()) {
      case 'a':
      case 'c':
      case 'e':
      case 'g':
        return Number(position[1]) % 2 === 0 ? 'white' : 'black';
      default:
        return Number(position[1]) % 2 === 0 ? 'black' : 'white';
    }
  }

  static getSymbol(shortcut: string) {
    switch (shortcut) {
      case 'K':
        return '♔';
      case 'Q':
        return '♕';
      case 'R':
        return '♖';
      case 'B':
        return '♗';
      case 'N':
        return '♘';
      case 'P':
        return '♙';
      case 'k':
        return '♚';
      case 'q':
        return '♛';
      case 'b':
        return '♝';
      case 'n':
        return '♞';
      case 'r':
        return '♜';
      default:
        return '♟';
    }
  }
}
