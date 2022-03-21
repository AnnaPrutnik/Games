import React from 'react';
import Button from '@mui/material/Box';
import {grey} from '@mui/material/colors';
import {ISquareProps} from './types';

const Square: React.FC<ISquareProps> = ({value = null}) => {
  return (
    <Button
      sx={{
        width: '100px',
        height: '100px',
        mx: 'auto',
        backgroundColor: grey[50],
        border: `1px solid ${grey[900]}`,
        display: 'flex',
        justifyContent: 'center',
        cursor: 'pointer',
        fontSize: '70px',
      }}
    >
      {value}
    </Button>
  );
};

export default Square;
