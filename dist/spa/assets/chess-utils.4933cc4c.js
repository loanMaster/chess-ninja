import { aA as r } from './index.2385a99b.js';
class n {
  static getSquaresOnSameDiagonal(e) {
    const t = new r();
    return (
      t.createNew({ pieces: { [e.toUpperCase()]: 'B' } }),
      t.moves(e).map((a) => a.to.toLowerCase())
    );
  }
  static areOnSameDiagonal(e, t) {
    return this.getSquaresOnSameDiagonal(e).indexOf(t) > -1;
  }
  static getRandomSquares(e) {
    const t = [];
    for (let a = 0; a < e; a++) t.push(this.getOtherRandomSquare(t));
    return t;
  }
  static getRandomSquare() {
    const e = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h'],
      t = e[Math.floor(Math.random() * e.length)],
      a = Math.floor(Math.random() * 8) + 1;
    return `${t}${a}`;
  }
  static getOtherRandomSquare(e) {
    if (!e) return this.getRandomSquare();
    let t = '';
    do t = this.getRandomSquare();
    while (e.indexOf(t) > -1);
    return t;
  }
  static getColor(e) {
    if (!!e)
      switch (e[0].toLowerCase()) {
        case 'a':
        case 'c':
        case 'e':
        case 'g':
          return Number(e[1]) % 2 === 0 ? 'white' : 'black';
        default:
          return Number(e[1]) % 2 === 0 ? 'black' : 'white';
      }
  }
  static getSymbol(e) {
    switch (e) {
      case 'K':
        return '\u2654';
      case 'Q':
        return '\u2655';
      case 'R':
        return '\u2656';
      case 'B':
        return '\u2657';
      case 'N':
        return '\u2658';
      case 'P':
        return '\u2659';
      case 'k':
        return '\u265A';
      case 'q':
        return '\u265B';
      case 'b':
        return '\u265D';
      case 'n':
        return '\u265E';
      case 'r':
        return '\u265C';
      default:
        return '\u265F';
    }
  }
}
export { n as C };
