import { styled } from '@mui/material/styles';

export const StyledCountdownContainer = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  gap: theme.spacing(1),
}));

export const StyledTimeUnit = styled('div')<{ size: string }>(({ theme, size }) => ({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  gap: theme.spacing(0.5),
  
  '& span': {
    fontSize: size === 'small' ? '1rem' : size === 'large' ? '2rem' : '1.5rem',
    fontWeight: 'bold',
    color: theme.palette.primary.main,
  },
  
  '& small': {
    fontSize: size === 'small' ? '0.75rem' : size === 'large' ? '1rem' : '0.875rem',
    color: theme.palette.text.secondary,
  },
}));
