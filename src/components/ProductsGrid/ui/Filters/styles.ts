import { styled } from '@mui/material/styles';
import { Box } from '@mui/material';

export const FilterBar = styled(Box)(({ theme }) => ({
  backgroundColor: '#FAFAF0',
  borderRadius: theme.spacing(2),
  padding: theme.spacing(2),
  display: 'flex',
  flexWrap: 'wrap',
  gap: theme.spacing(2),
  alignItems: 'center',
  justifyContent: 'space-between',
  boxShadow: '0 2px 8px rgba(0,0,0,0.05)',
  overflowX: 'auto',
}));
