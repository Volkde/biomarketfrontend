import { Typography } from '@mui/material';
import { StockStatusProps } from './types';
import { StyledStockStatus } from './styles';

const statusLabels: Record<string, string> = {
  in_stock: 'In Stock',
  low_stock: 'Low Stock',
  out_of_stock: 'Out of Stock',
  pre_order: 'Pre-Order',
};

/**
 * Компонент отображения статуса наличия товара
 * 
 * @param status - текущий статус товара (in_stock, low_stock, out_of_stock, pre_order)
 * @param showLabel - флаг отображения текстового описания статуса
 * @param size - размер компонента (small, medium, large)
 * 
 * @example
 * // Пример использования
 * <StockStatus status="in_stock" showLabel={true} size="medium" />
 */
const StockStatus = ({ status, showLabel = true, size = 'medium' }: StockStatusProps) => {
  return (
    <StyledStockStatus status={status} size={size}>
      {showLabel && (
        <Typography variant="body2" component="span">
          {statusLabels[status]}
        </Typography>
      )}
    </StyledStockStatus>
  );
};

export default StockStatus;
