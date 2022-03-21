export enum Values {
  start = '',
  stepX = 'X',
  step0 = 'O',
}

export enum Results {
  start = '',
  winX = 'Winner is player X',
  win0 = 'Winner is player 0',
  draw = 'It is a draw. Try again!',
}
export interface IBoardProps {
  board: string[];
  changeBoard(index: number): void;
}

export interface ISquareProps {
  value?: string | null;
}
