import React from 'react';
import {Routes, Route} from 'react-router-dom';
import Header from './component/Header';
import HomePage from './pages/Home';
import TicTacToe from './pages/TicTacToe';
import CssBaseline from '@mui/material/CssBaseline';

function App() {
  return (
    <div className='App'>
      <CssBaseline />
      <Header />
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/tictactoe' element={<TicTacToe />} />
      </Routes>
    </div>
  );
}

export default App;
