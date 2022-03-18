export enum Values {
  start = '',
  stepX = 'X',
  step0 = 'O',
}

export interface IBoardProps {
  board: string[];
  changeBoard(index: number): void;
}

export interface ISquareProps {
  value?: string | null;
}
