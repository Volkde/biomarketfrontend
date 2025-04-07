import { styled } from '@mui/material/styles';
import { Box, Grid } from '@mui/material';

export const LoadingContainer = styled(Box)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  padding: theme.spacing(4, 0),
  width: '100%',
}));

export const SkeletonGrid = styled(Grid)(({ theme }) => ({
  width: '100%',
  marginTop: theme.spacing(2),
}));

export const SkeletonItem = styled(Box)(({ theme }) => ({
  padding: theme.spacing(2),
  borderRadius: theme.shape.borderRadius,
}));
