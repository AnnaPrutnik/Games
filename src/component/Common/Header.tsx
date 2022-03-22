import React from 'react';
import {useNavigate} from 'react-router-dom';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Button from '@mui/material/Button';
import {grey} from '@mui/material/colors';
import Divider from '@mui/material/Divider';

interface HeaderProps {
  onOpenSideBar(): void;
}

const Header: React.FC<HeaderProps> = ({onOpenSideBar}) => {
  const navigate = useNavigate();

  const onClickBtn = (path: string) => {
    navigate(path);
  };

  return (
    <AppBar position='static'>
      <Toolbar>
        <Button sx={{color: grey[50]}} onClick={() => onClickBtn('/')}>
          Home
        </Button>
        <Divider
          orientation='vertical'
          variant='middle'
          flexItem
          color={grey[50]}
        />
        <Button sx={{color: grey[50]}} onClick={onOpenSideBar}>
          Games List
        </Button>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
