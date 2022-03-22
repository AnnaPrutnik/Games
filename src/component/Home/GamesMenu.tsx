import React, {useState} from 'react';
import {useNavigate} from 'react-router-dom';
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import gamesList from '../../helpers/games-list.json';

const GamesMenu: React.FC = () => {
  const [activeItem, setActiveItem] = useState(0);
  const navigate = useNavigate();

  const onClickCard = () => {
    const path = gamesList[activeItem].path;
    navigate(path);
  };

  const onClickPagination = (
    event: React.ChangeEvent<unknown>,
    page: number
  ) => {
    setActiveItem(page - 1);
  };

  return (
    <Stack alignItems='center'>
      <Card
        sx={{maxWidth: '80%', height: 500, my: '20px', cursor: 'pointer'}}
        onClick={onClickCard}
      >
        <Typography gutterBottom variant='h3' color='primary' align='center'>
          {gamesList[activeItem].title}
        </Typography>
        <CardMedia
          component='img'
          image={gamesList[activeItem].image}
          alt={gamesList[activeItem].title}
        />
      </Card>
      <Pagination
        count={gamesList.length}
        color='primary'
        onChange={onClickPagination}
      />
    </Stack>
  );
};

export default GamesMenu;
