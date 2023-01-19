import { constructor } from '/src/chess-board/chess-board';
import { ReplaySubject, Subject } from 'rxjs';

export interface ChessBoardConfig {
  draggable?: boolean;
  dropOffBoard?: string;
  position?: string;
  onDrop?: (from: string, to: string) => any;
  orientation?: string;
  onMoveEnd?: (from: string, to: string) => any;
  onSnapEnd?: (from: string, to: string) => any;
  onDragStart?: (from: string) => any;
  sparePieces?: boolean;
  onClick?: (e: any) => any;
}

const defaultConfig = {
  draggable: true,
  dropOffBoard: false,
  position: 'start',
};

export class ChessBoard {
  board!: any;
  boardSelector: string;
  resizeListener: () => void;
  initialized: Subject<void> = new ReplaySubject<void>(1);

  constructor(selector: string, private config: ChessBoardConfig) {
    this.boardSelector = selector;
    this.setElementSize();
    this.board = constructor(selector, { ...defaultConfig, ...config });
    this.resizeListener = () => {
      this.getElement().style.display = 'none';
      setTimeout(() => {
        this.setElementSize();
        this.board.resize();
        this.getElement().style.display = 'block';
        this.initialized.next();
      }, 150);
    };
    window.addEventListener('resize', this.resizeListener);
    this.getElement().style.display = 'none';
    setTimeout(() => {
      this.setElementSize();
      this.board.resize();
      this.getElement().style.display = 'block';
      this.initialized.next();
    });
  }

  setElementSize() {
    const board = document.querySelector(this.boardSelector);
    if (board) {
      const parentWidth = document.querySelector(this.boardSelector)!
        .parentElement!.clientWidth;
      const parentHeight = document.querySelector(this.boardSelector)!
        .parentElement!.clientHeight;
      const width = Math.min(parentWidth, parentHeight / this.ratio) - 4;
      this.getElement().style.width = `${width}px`;
      this.getElement().style.height = `${width * this.ratio}px`;
    }
  }

  get ratio(): number {
    return this.config.sparePieces ? 1.25 : 1.0;
  }

  getElement(): { style: { height: string; width: string; display: string } } {
    return document.querySelector(this.boardSelector) as any;
  }

  position(fnes: string | any, animate = true): void {
    this.board.position(fnes, animate);
  }

  getPosition(): string {
    return this.board.position();
  }

  highlight(position: string, positive = true): void {
    const className = positive ? 'g-highlight' : 'g-error-highlight';
    const square = document.querySelector(
      this.boardSelector + ' .square-' + position.toLowerCase()
    );
    if (square) {
      square.classList.add(className);
    }
  }

  removeHighlighting(): void {
    document
      .querySelectorAll(this.boardSelector + ' .g-highlight')
      .forEach((e) => e.classList.remove('g-highlight'));
    document
      .querySelectorAll(this.boardSelector + ' .g-error-highlight')
      .forEach((e) => e.classList.remove('g-error-highlight'));
  }

  clear(animate = true): void {
    this.board.clear(animate);
  }

  fen(): string {
    return this.board.fen();
  }

  move(move: string, animate = true) {
    this.board.move(move, animate);
  }

  setDraggable(draggable: boolean): void {
    this.board.setDraggable(draggable);
  }

  orientation(orientation: string): void {
    this.board.orientation(orientation);
  }

  destroy() {
    this.board.destroy();
    window.removeEventListener('resize', this.resizeListener);
  }
}
