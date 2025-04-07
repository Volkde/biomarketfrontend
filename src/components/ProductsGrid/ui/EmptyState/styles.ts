import { styled } from '@mui/material/styles';
import { Box, Typography, Button } from '@mui/material';

export const EmptyStateContainer = styled(Box)(({ theme }) => ({
  textAlign: 'center',
  padding: theme.spacing(6),
  backgroundColor: '#FAFAF0',
  borderRadius: theme.shape.borderRadius * 2,
  boxShadow: theme.shadows[1],
  transition: 'all 0.3s ease',
  '&:hover': {
    boxShadow: theme.shadows[3],
  },
}));

export const EmptyStateIcon = styled('div')(({ theme }) => ({
  fontSize: 64,
  color: theme.palette.text.secondary,
  marginBottom: theme.spacing(2),
}));

export const EmptyStateTitle = styled(Typography)(({ theme }) => ({
  color: theme.palette.text.secondary,
  fontWeight: 600,
}));

export const EmptyStateDescription = styled(Typography)(({ theme }) => ({
  color: theme.palette.text.secondary,
  marginTop: theme.spacing(1),
  marginBottom: theme.spacing(3),
}));

export const ResetButton = styled(Button)(({ theme }) => ({
  textTransform: 'none',
  borderRadius: theme.shape.borderRadius * 1.5,
  padding: theme.spacing(1, 3),
  fontWeight: 500,
}));
