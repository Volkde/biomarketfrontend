import { styled } from '@mui/material/styles';

export const StyledSection = styled('section')(({ theme }) => ({
  padding: theme.spacing(4, 2),
  background: theme.palette.background.paper,
}));

export const StyledSectionHeader = styled('div')(({ theme }) => ({
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  marginBottom: theme.spacing(3),
}));

export const StyledSectionTitle = styled('h2')(({ theme }) => ({
  margin: 0,
  fontSize: '1.5rem',
  fontWeight: 600,
  color: theme.palette.text.primary,
}));

export const StyledSectionSubtitle = styled('p')(({ theme }) => ({
  margin: theme.spacing(0.5, 0),
  fontSize: '0.875rem',
  color: theme.palette.text.secondary,
}));

export const StyledSeeAllLink = styled('a')(({ theme }) => ({
  color: theme.palette.primary.main,
  textDecoration: 'none',
  fontSize: '0.875rem',
  fontWeight: 600,
  display: 'flex',
  alignItems: 'center',
  gap: theme.spacing(0.5),
  
  '&:hover': {
    opacity: 0.8,
  },
}));
