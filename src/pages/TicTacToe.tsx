import React, {useEffect, useState} from 'react';
import Board from '../component/TicTacToe/Board';
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import ResultModal from '../component/ResultModal';
import {Values, Results} from '../component/TicTacToe/types';
import {checkWinner} from '../helpers/tictoctoe';

type TBoard = string[];

const TicTacToe: React.FC = () => {
  const [board, setBoard] = useState<TBoard>(Array(9).fill(Values.start));
  const [xIsNext, setXisNext] = useState(true);
  const [openResult, setOpenResult] = useState(false);
  const [modalMsg, setModalMsg] = useState(Results.start);

  useEffect(() => {
    const winner = checkWinner(board);
    if (winner) {
      const newMsg = xIsNext ? Results.win0 : Results.winX;
      setModalMsg(newMsg);
      openModal();
    }
    const continueGame = board.some((item) => item === '');
    if (!continueGame) {
      setModalMsg(Results.draw);
      openModal();
    }
  }, [board, xIsNext]);

  const changeBoardValue = async (index: number) => {
    const newBoard = [...board];
    newBoard[index] = xIsNext ? Values.stepX : Values.step0;
    setBoard(newBoard);
    setXisNext((prev) => !prev);
  };

  const openModal = () => setOpenResult(true);

  const closeModal = () => {
    setOpenResult(false);
    setBoard(Array(9).fill(Values.start));
    setXisNext(true);
    setModalMsg(Results.start);
  };

  return (
    <Container>
      <Typography variant='h2' color='primary' sx={{mt: '50px'}} align='center'>
        Tic-Tac-Toe
      </Typography>
      <Box sx={{mt: '50px'}}>
        <Board board={board} changeBoard={changeBoardValue} />
      </Box>
      <Typography variant='h5' color='primary' sx={{mt: '50px'}} align='center'>
        Move {xIsNext ? Values.stepX : Values.step0}
      </Typography>
      <ResultModal
        msg={modalMsg}
        showModal={openResult}
        closeModal={closeModal}
      />
    </Container>
  );
};

export default TicTacToe;
