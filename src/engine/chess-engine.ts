import { Subject, take } from 'rxjs';
import MyWorker from './chess-engine.worker?worker';
export interface AiMove {
  from: string;
  to: string;
}

export class ChessEngine {
  chessEngineWorker: Worker;
  _aiMove: Subject<AiMove> = new Subject<AiMove>();

  constructor() {
    this.chessEngineWorker = new MyWorker();
    this.chessEngineWorker.onmessage = (msg) => {
      this._aiMove.next(msg.data.aiMove);
    };
  }

  terminate() {
    this.chessEngineWorker.terminate();
  }

  aiMove({ fen, level }: { fen: string; level: number }): Promise<AiMove> {
    this.chessEngineWorker.postMessage({ fen, level });
    return this._aiMove.pipe(take(1)).toPromise() as Promise<AiMove>;
  }
}
