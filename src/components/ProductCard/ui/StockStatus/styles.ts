import styled from '@emotion/styled';
import { Theme } from '@mui/material/styles';
import { StockStatusProps } from './types';

export const StyledStockStatus = styled('div')<StockStatusProps>((props) => {
  const { theme, status, size = 'medium' } = props; // используем 'medium' по умолчанию

  let fontSize: string;
  switch (size) {
    case 'small':
      fontSize = '0.75rem';
      break;
    case 'large':
      fontSize = '1rem';
      break;
    case 'medium':
    default:
      fontSize = '0.875rem';
      break;
  }

  const statusStyles = {
    in_stock: {
      backgroundColor: theme.palette.success.light,
      color: theme.palette.success.contrastText,
    },
    low_stock: {
      backgroundColor: theme.palette.warning.light,
      color: theme.palette.warning.contrastText,
    },
    out_of_stock: {
      backgroundColor: theme.palette.error.light,
      color: theme.palette.error.contrastText,
    },
    pre_order: {
      backgroundColor: theme.palette.info.light,
      color: theme.palette.info.contrastText,
    },
  };

  return {
    display: 'flex',
    alignItems: 'center',
    gap: theme.spacing(0.5),
    padding: theme.spacing(0.5, 1),
    borderRadius: theme.shape.borderRadius,
    fontSize,
    ...statusStyles[status],
    '&:hover': {
      opacity: 0.8,
    },
  };
});
