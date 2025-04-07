import React from 'react';
import { Typography } from '@mui/material';
import { StockStatusProps } from './types';
import { StyledStockStatus } from './styles';

const statusLabels: Record<StockStatusProps['status'], string> = {
  in_stock: 'In Stock',
  low_stock: 'Low Stock',
  out_of_stock: 'Out of Stock',
  pre_order: 'Pre-Order',
};

const StockStatus = ({ status, showLabel = true, size = 'medium' }: StockStatusProps) => {
  return (
    <StyledStockStatus status={status} size={size}>
      {showLabel && <Typography>{statusLabels[status]}</Typography>}
    </StyledStockStatus>
  );
};

export default StockStatus;
