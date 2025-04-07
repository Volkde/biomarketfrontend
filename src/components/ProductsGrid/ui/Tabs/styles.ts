import { styled } from '@mui/material/styles';

export const StyledTabs = styled('div')(({ theme }) => ({
  display: 'flex',
  gap: theme.spacing(1),
  overflow: 'auto',
  padding: theme.spacing(1),
  background: theme.palette.background.paper,
  borderRadius: theme.shape.borderRadius,
  border: `1px solid ${theme.palette.divider}`,
}));

export const StyledTab = styled('button')<{ isActive: boolean }>(({
  theme,
  isActive,
}) => ({
  display: 'flex',
  alignItems: 'center',
  gap: theme.spacing(0.5),
  padding: theme.spacing(0.5, 1.5),
  borderRadius: theme.shape.borderRadius,
  background: isActive ? theme.palette.primary.main : 'transparent',
  color: isActive ? theme.palette.primary.contrastText : theme.palette.text.primary,
  border: 'none',
  cursor: 'pointer',
  transition: 'all 0.2s ease',

  '&:hover': {
    opacity: 0.8,
  },

  '& svg': {
    fontSize: '1.25rem',
  },
}));
