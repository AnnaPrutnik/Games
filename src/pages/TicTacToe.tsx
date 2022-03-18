import React, {useEffect, useState} from 'react';
import Board from '../component/TicTacToe/Board';

import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import Button from '@mui/material/Button';
import {Values} from '../component/TicTacToe/types';
import {checkWinner} from '../helpers/tictoctoe';

type TBoard = string[];

const style = {
  position: 'absolute' as 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  borderRadius: '20px',
  boxShadow: 24,
  p: 4,
  textAlign: 'center',
};

const TicTacToe: React.FC = () => {
  const [board, setBoard] = useState<TBoard>(Array(9).fill(Values.start));
  const [xIsNext, setXisNext] = useState(true);
  const [openResult, setOpenResult] = useState(false);

  useEffect(() => {
    const winner = checkWinner(board);
    if (winner) {
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
      <Modal
        open={openResult}
        onClose={closeModal}
        aria-labelledby='modal-modal-title'
        aria-describedby='modal-modal-description'
      >
        <Box sx={style}>
          <Typography
            id='modal-modal-title'
            variant='h6'
            component='h2'
            color='primary'
            sx={{mb: '15px'}}
          >
            Winner is {xIsNext ? Values.step0 : Values.stepX}
          </Typography>
          <Button onClick={closeModal} variant='contained'>
            Play again
          </Button>
        </Box>
      </Modal>
    </Container>
  );
};

export default TicTacToe;
