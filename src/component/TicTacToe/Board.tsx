import React from 'react';
import Box from '@mui/material/Box';
import {grey} from '@mui/material/colors';
import Square from './Square';
import Grid from '@mui/material/Grid';
import {IBoardProps} from './types';

const Board: React.FC<IBoardProps> = ({board, changeBoard}) => {
  const onCLickSquare = (index: number) => {
    if (board[index] !== '') {
      return;
    }
    changeBoard(index);
  };

  return (
    <Box
      sx={{
        width: '300px',
        height: '300px',
        mx: 'auto',
        backgroundColor: grey[400],
      }}
    >
      <Grid container>
        {board.map((elem, index) => (
          <Grid item key={index} xs={4} onClick={() => onCLickSquare(index)}>
            <Square value={elem} />
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default Board;
