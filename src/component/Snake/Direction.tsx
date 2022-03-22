import React from 'react';
import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';
import ArrowCircleLeftOutlinedIcon from '@mui/icons-material/ArrowCircleLeftOutlined';
import ArrowCircleDownOutlinedIcon from '@mui/icons-material/ArrowCircleDownOutlined';
import ArrowCircleRightOutlinedIcon from '@mui/icons-material/ArrowCircleRightOutlined';
import ArrowCircleUpOutlinedIcon from '@mui/icons-material/ArrowCircleUpOutlined';

interface IDirectionProp {
  direction: string | null;
  OnClickBtn(directionValue: string): void;
}

const Direction: React.FC<IDirectionProp> = ({direction, OnClickBtn}) => {
  const onClickDirection = (e: React.MouseEvent<HTMLButtonElement>) => {
    const value = e.currentTarget.ariaLabel;
    if (value) {
      OnClickBtn(value);
    }
  };

  return (
    <ButtonGroup variant='contained' sx={{my: '10px'}}>
      <Button
        color={direction === 'ArrowLeft' ? 'primary' : 'info'}
        disabled={direction === 'ArrowLeft'}
        aria-label='ArrowLeft'
        onClick={onClickDirection}
      >
        <ArrowCircleLeftOutlinedIcon
          color={direction === 'ArrowLeft' ? 'action' : 'inherit'}
        />
      </Button>
      <Button
        color={direction === 'ArrowDown' ? 'primary' : 'info'}
        disabled={direction === 'ArrowDown'}
        aria-label='ArrowDown'
        onClick={onClickDirection}
      >
        <ArrowCircleDownOutlinedIcon
          color={direction === 'ArrowDown' ? 'action' : 'inherit'}
        />
      </Button>
      <Button
        color={direction === 'ArrowUp' ? 'primary' : 'info'}
        disabled={direction === 'ArrowUp'}
        aria-label='ArrowUp'
        onClick={onClickDirection}
      >
        <ArrowCircleUpOutlinedIcon
          color={direction === 'ArrowUp' ? 'action' : 'inherit'}
        />
      </Button>
      <Button
        color={direction === 'ArrowRight' ? 'primary' : 'info'}
        disabled={direction === 'ArrowRight'}
        aria-label='ArrowRight'
        onClick={onClickDirection}
      >
        <ArrowCircleRightOutlinedIcon
          color={direction === 'ArrowRight' ? 'action' : 'inherit'}
        />
      </Button>
    </ButtonGroup>
  );
};

export default Direction;
