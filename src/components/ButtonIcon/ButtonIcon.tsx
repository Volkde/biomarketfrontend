import React from 'react';
import { styled } from '@mui/material/styles';

const StyledButton = styled('button')(({ theme }) => ({
  backgroundColor: theme.palette.primary.main,
  color: 'white',
  border: 'none',
  borderRadius: '20px',
  padding: '10px 20px',
  cursor: 'pointer',
}));

const ButtonIcon: React.FC<{ icon: React.ReactNode; onClick: () => void }> = ({ icon, onClick }) => {
  return (
    <StyledButton onClick={onClick}>
      {icon}
    </StyledButton>
  );
};

export default ButtonIcon;
