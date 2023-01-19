import * as jsChessEngine from 'js-chess-engine';

self.onmessage = ({ data: { fen, level } }) => {
  const aiMove = new jsChessEngine.Game(fen).aiMove(level);
  const from = Object.keys(aiMove)[0].toLowerCase();
  const to = aiMove[Object.keys(aiMove)[0]].toLowerCase();
  self.postMessage({ aiMove: { from, to } });
};
