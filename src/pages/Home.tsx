import React from 'react';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import GamesMenu from '../component/Home/GamesMenu';

const HomePage: React.FC = () => {
  return (
    <Container>
      <Typography
        variant='h1'
        component='h2'
        align='center'
        sx={{mt: '50px', fontWeight: 'bold'}}
        color='primary'
      >
        Chose the Game
      </Typography>

      <GamesMenu />
    </Container>
  );
};

export default HomePage;
