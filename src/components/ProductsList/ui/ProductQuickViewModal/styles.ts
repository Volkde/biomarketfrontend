import { Box, styled } from '@mui/material';

export const Backdrop = styled(Box)({
  position: 'fixed',
  top: 0,
  left: 0,
  width: '100%',
  height: '100%',
  background: 'rgba(0,0,0,0.5)',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  zIndex: 3000,
});

export const Modal = styled(Box)({
  background: 'white',
  borderRadius: '16px',
  padding: '24px',
  width: '100%',
  maxWidth: '500px',
  position: 'relative',
});

export const CloseButton = styled(Box)({
  position: 'absolute',
  top: '16px',
  right: '16px',
  cursor: 'pointer',
  fontSize: '24px',
  color: '#333',
});