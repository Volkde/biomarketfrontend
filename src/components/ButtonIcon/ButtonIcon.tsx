import React from 'react';
import { Button, styled } from '@mui/material';

const StyledButton = styled(Button)(({ theme }) => ({
  backgroundColor: theme.palette.primary.main,
  color: 'white',
  border: 'none',
  borderRadius: '20px',
  padding: '10px 20px',
  cursor: 'pointer',
}));

interface ButtonIconProps {
  icon: React.ReactNode;
  onClick: () => void;
}

const ButtonIcon = ({ icon, onClick }: ButtonIconProps) => (
  <StyledButton onClick={onClick}>
    {icon}
  </StyledButton>
);

export default ButtonIcon;