import React, {useState, useEffect, useCallback, useRef} from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import ResultModal from '../ResultModal';
import Direction from './Direction';

const BOARD_SIZE = 10;
const DEFAULT_CELL_VALUE = Array(BOARD_SIZE).fill(Array(BOARD_SIZE).fill(0));
const AVAILABLE_MOVE = ['ArrowDown', 'ArrowUp', 'ArrowLeft', 'ArrowRight'];
const SPEED = 500;
const FOOD_START = [5, 5];
const SNAKE_START = [[0, 0]];

const Board: React.FC = () => {
  const [direction, setDirection] = useState(AVAILABLE_MOVE[0]);
  const [snake, setSnake] = useState(SNAKE_START);
  const [food, setFood] = useState(FOOD_START);
  const [openModal, setOpenModal] = useState(false);
  const [msg, setMsg] = useState('');
  const [play, setPlay] = useState(true);
  const board = useRef<number[][]>(DEFAULT_CELL_VALUE);
  const timer: {current: NodeJS.Timeout | null} = useRef(null);

  useEffect(() => {
    document.addEventListener('keydown', onClickKeyDown);
    return () => document.removeEventListener('keydown', onClickKeyDown);
  }, []);

  const gameLoop = useCallback(() => {
    const move = choseMove();
    const newSnake = [...snake];
    const head = [
      newSnake[newSnake.length - 1][0] + move[0],
      newSnake[newSnake.length - 1][1] + move[1],
    ];

    const isItBoardOut = head.some((el) => el > 9 || el < 0);
    if (isItBoardOut) {
      onEndGame('Sorry! You lose!');
      return;
    }

    const isItSnakeBody = isItSnake(head);
    if (isItSnakeBody) {
      onEndGame('Sorry! You lose!');
      return;
    }

    newSnake.push(head);
    if (head[0] === food[0] && head[1] === food[1]) {
      const newFood = generateFoodPosotion();
      setFood(newFood);
    } else {
      newSnake.shift();
    }
    setSnake(newSnake);
    if (newSnake.length > 20) {
      onEndGame('Congrats! You win!');
    }
  }, [direction, snake]);

  useEffect(() => {
    timer.current = setTimeout(gameLoop, SPEED);
    return () => clearTimeout(timer.current as NodeJS.Timeout);
  }, [gameLoop]);

  const choseMove = () => {
    let move: number[] = [];
    switch (direction) {
      case AVAILABLE_MOVE[0]:
        move = [1, 0];
        break;
      case AVAILABLE_MOVE[1]:
        move = [-1, 0];
        break;
      case AVAILABLE_MOVE[2]:
        move = [0, -1];
        break;
      case AVAILABLE_MOVE[3]:
        move = [0, 1];
        break;
      default:
        break;
    }
    return move;
  };

  const onClickKeyDown = (e: KeyboardEvent) => {
    const index = AVAILABLE_MOVE.indexOf(e.key);
    if (index > -1) {
      setDirection(AVAILABLE_MOVE[index]);
    }
  };

  const isItSnake = (newFood: number[]) => {
    return snake.some((el) => el[0] === newFood[0] && el[1] === newFood[1]);
  };

  const generateFoodPosotion = () => {
    let newFood: number[] = [];
    let isEmptyCell = true;
    do {
      newFood = [
        Math.floor(Math.random() * BOARD_SIZE),
        Math.floor(Math.random() * BOARD_SIZE),
      ];
      isEmptyCell = isItSnake(newFood);
    } while (isEmptyCell);

    return newFood;
  };

  const onEndGame = (msg: string) => {
    setMsg(msg);
    setOpenModal(true);
    clearTimeout(timer.current as NodeJS.Timeout);
  };

  const onStartNewGame = () => {
    setSnake(SNAKE_START);
    setFood(FOOD_START);
    setDirection(AVAILABLE_MOVE[0]);
    setOpenModal(false);
    setMsg('');
    setPlay(true);
  };

  const onPauseGame = () => {
    clearTimeout(timer.current as NodeJS.Timeout);
    setPlay(false);
  };

  const onContinueGame = () => {
    timer.current = setTimeout(gameLoop, SPEED);
    setPlay(true);
  };

  return (
    <Box sx={{textAlign: 'center'}}>
      {board.current.map((row, indexR) => (
        <Box key={indexR} sx={{display: 'flex', justifyContent: 'center'}}>
          {row.map((cell, indexC: number) => {
            const snakeType = snake.some(
              (el) => el[0] === indexR && el[1] === indexC
            );
            let foodType = false;
            if (!snakeType) {
              foodType = food[0] === indexR && food[1] === indexC;
            }
            return (
              <Box
                key={indexC}
                sx={{
                  width: 30,
                  height: 30,
                  backgroundColor: snakeType
                    ? 'green'
                    : foodType
                    ? 'yellow'
                    : 'white',
                  border: '1px solid black',
                  m: '2px',
                }}
              />
            );
          })}
        </Box>
      ))}
      <Direction direction={direction} />
      <br />
      <Button variant='contained' onClick={onPauseGame} disabled={!play}>
        Pause
      </Button>
      <Button variant='contained' onClick={onContinueGame} disabled={play}>
        Continue
      </Button>
      <ResultModal
        closeModal={onStartNewGame}
        showModal={openModal}
        msg={msg}
      />
    </Box>
  );
};

export default Board;
