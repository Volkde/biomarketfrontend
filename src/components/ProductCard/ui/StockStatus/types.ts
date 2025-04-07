import { Theme as MuiTheme } from '@mui/material/styles';

declare module '@emotion/react' {
  export interface Theme extends MuiTheme {}
}

export interface StockStatusProps {
  status: 'in_stock' | 'low_stock' | 'out_of_stock' | 'pre_order';
  showLabel?: boolean;
  size?: 'small' | 'medium' | 'large';
}
