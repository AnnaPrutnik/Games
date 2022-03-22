import React from 'react';
import {useNavigate} from 'react-router-dom';
import Drawer from '@mui/material/Drawer';
import Divider from '@mui/material/Divider';
import Button from '@mui/material/Button';
import gamesList from '../../helpers/games-list.json';

interface ISideBarProps {
  isOpenSideBar: boolean;
  onCloseSideBar(): void;
}

const drawerWidth = 240;

const SideBar: React.FC<ISideBarProps> = ({isOpenSideBar, onCloseSideBar}) => {
  const navigate = useNavigate();

  const onClickBtn = (path: string) => {
    navigate(path);
    onCloseSideBar();
  };

  return (
    <>
      <Drawer
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          '& .MuiDrawer-paper': {
            width: drawerWidth,
            boxSizing: 'border-box',
          },
        }}
        variant='temporary'
        anchor='left'
        open={isOpenSideBar}
        onClose={onCloseSideBar}
      >
        <Divider sx={{mt: '50px', mb: '10px'}} />
        {gamesList.map((game) => (
          <div key={game.title}>
            <Button onClick={() => onClickBtn(game.path)}>{game.title}</Button>
            <Divider sx={{my: '10px'}} />
          </div>
        ))}
      </Drawer>
    </>
  );
};

export default SideBar;
