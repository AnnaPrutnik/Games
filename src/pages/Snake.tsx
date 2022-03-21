import React from 'react';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Board from '../component/Snake/Board';

const Snake: React.FC = () => {
  return (
    <Container>
      <Typography variant='h2' color='primary' sx={{mt: '50px'}} align='center'>
        Snake
      </Typography>
      <Board />
    </Container>
  );
};

export default Snake;
