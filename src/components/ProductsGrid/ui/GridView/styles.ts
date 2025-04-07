import { styled } from '@mui/material/styles';
import { Box } from '@mui/material';

// Используем Box вместо Grid для избежания проблем с MUI Grid v2
export const ProductItem = styled(Box)(({ theme }) => ({
  display: 'flex',
  padding: theme.spacing(1),
}));
