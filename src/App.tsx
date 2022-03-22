import React, {useState} from 'react';
import {Routes, Route} from 'react-router-dom';
import Header from './component/Common/Header';
import HomePage from './pages/Home';
import TicTacToe from './pages/TicTacToe';
import Snake from './pages/Snake';
import CssBaseline from '@mui/material/CssBaseline';
import SideBar from './component/Common/SideBar';

function App() {
  const [isOpenMenu, setIsOpenMenu] = useState(false);

  const onOpenSideBar = () => setIsOpenMenu(true);

  const onCloseSideBar = () => setIsOpenMenu(false);

  return (
    <div className='App'>
      <CssBaseline />
      <Header onOpenSideBar={onOpenSideBar} />
      <SideBar isOpenSideBar={isOpenMenu} onCloseSideBar={onCloseSideBar} />
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/tictactoe' element={<TicTacToe />} />
        <Route path='/snake' element={<Snake />} />
      </Routes>
    </div>
  );
}

export default App;
