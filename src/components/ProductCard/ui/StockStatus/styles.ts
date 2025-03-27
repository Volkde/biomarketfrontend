import { styled } from '@mui/material/styles';

export const StyledStockStatus = styled('div')<{ status: string; size: string }>(({
  theme,
  status,
  size,
}) => ({
  display: 'flex',
  alignItems: 'center',
  gap: theme.spacing(0.5),
  padding: theme.spacing(0.5, 1),
  borderRadius: theme.shape.borderRadius,
  fontSize: size === 'small' ? '0.75rem' : size === 'large' ? '1rem' : '0.875rem',
  
  ...(status === 'in_stock' && {
    backgroundColor: theme.palette.success.light,
    color: theme.palette.success.main,
  }),
  
  ...(status === 'low_stock' && {
    backgroundColor: theme.palette.warning.light,
    color: theme.palette.warning.main,
  }),
  
  ...(status === 'out_of_stock' && {
    backgroundColor: theme.palette.error.light,
    color: theme.palette.error.main,
  }),
  
  ...(status === 'pre_order' && {
    backgroundColor: theme.palette.info.light,
    color: theme.palette.info.main,
  }),

  '&:hover': {
    opacity: 0.8,
  },
}));
