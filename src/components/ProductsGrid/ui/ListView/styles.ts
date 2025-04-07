import { styled } from '@mui/material/styles';
import { Box, Paper } from '@mui/material';

export const ListContainer = styled(Box)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  gap: theme.spacing(2),
  width: '100%',
  marginBottom: theme.spacing(4),
}));

export const ListItem = styled(Paper)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'row',
  padding: theme.spacing(2),
  borderRadius: theme.shape.borderRadius,
  transition: 'box-shadow 0.2s ease-in-out',
  '&:hover': {
    boxShadow: theme.shadows[4],
  },
  [theme.breakpoints.down('sm')]: {
    flexDirection: 'column',
  },
}));

export const ImageContainer = styled(Box)(({ theme }) => ({
  width: '200px',
  minWidth: '200px',
  marginRight: theme.spacing(3),
  [theme.breakpoints.down('sm')]: {
    width: '100%',
    marginRight: 0,
    marginBottom: theme.spacing(2),
  },
}));

export const ContentContainer = styled(Box)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  flexGrow: 1,
  justifyContent: 'space-between',
}));

export const ActionContainer = styled(Box)(({ theme }) => ({
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  marginTop: theme.spacing(2),
}));
