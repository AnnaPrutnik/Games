const winnerTable = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 4, 8],
  [2, 4, 6],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
];
export const checkWinner = (array: string[]): boolean => {
  const winner = winnerTable.find(
    ([a, b, c]) =>
      array[a] !== '' && array[a] === array[b] && array[a] === array[c]
  );
  if (winner) {
    return true;
  }
  return false;
};
