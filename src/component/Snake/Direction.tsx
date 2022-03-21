import React from 'react';
import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';
import ArrowCircleLeftOutlinedIcon from '@mui/icons-material/ArrowCircleLeftOutlined';
import ArrowCircleDownOutlinedIcon from '@mui/icons-material/ArrowCircleDownOutlined';
import ArrowCircleRightOutlinedIcon from '@mui/icons-material/ArrowCircleRightOutlined';
import ArrowCircleUpOutlinedIcon from '@mui/icons-material/ArrowCircleUpOutlined';

interface IDirectionProp {
  direction: string;
}

const Direction: React.FC<IDirectionProp> = ({direction}) => {
  return (
    <ButtonGroup variant='contained' sx={{my: '10px'}}>
      <Button
        color={direction === 'ArrowLeft' ? 'primary' : 'info'}
        aria-label='arrowLeft'
      >
        <ArrowCircleLeftOutlinedIcon
          color={direction === 'ArrowLeft' ? 'action' : 'inherit'}
        />
      </Button>
      <Button
        color={direction === 'ArrowDown' ? 'primary' : 'info'}
        aria-label='arrowDown'
      >
        <ArrowCircleDownOutlinedIcon
          color={direction === 'ArrowDown' ? 'action' : 'inherit'}
        />
      </Button>
      <Button
        color={direction === 'ArrowUp' ? 'primary' : 'info'}
        aria-label='arrowUp'
      >
        <ArrowCircleUpOutlinedIcon
          color={direction === 'ArrowUp' ? 'action' : 'inherit'}
        />
      </Button>
      <Button
        color={direction === 'ArrowRight' ? 'primary' : 'info'}
        aria-label='arrowRight'
      >
        <ArrowCircleRightOutlinedIcon
          color={direction === 'ArrowRight' ? 'action' : 'inherit'}
        />
      </Button>
    </ButtonGroup>
  );
};

export default Direction;
