import React from 'react';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';

interface IResultModalProps {
  msg: string;
  showModal: boolean;
  closeModal(): void;
}

const style = {
  position: 'absolute' as 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  borderRadius: '20px',
  boxShadow: 24,
  p: 4,
  textAlign: 'center',
};

const ResultModal = ({msg, showModal, closeModal}: IResultModalProps) => {
  return (
    <Modal
      open={showModal}
      onClose={closeModal}
      aria-labelledby='modal-modal-title'
      aria-describedby='modal-modal-description'
    >
      <Box sx={style}>
        <Typography
          id='modal-modal-title'
          variant='h6'
          component='h2'
          color='primary'
          sx={{mb: '15px'}}
        >
          {msg}
        </Typography>
        <Button onClick={closeModal} variant='contained'>
          Play again
        </Button>
      </Box>
    </Modal>
  );
};

export default ResultModal;
