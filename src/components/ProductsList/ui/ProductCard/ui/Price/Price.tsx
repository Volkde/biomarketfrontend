import { Typography } from '@mui/material';
import { PriceProps } from './types';
import { StyledPrice } from './styles';

const Price = ({ price, currency = '$' }: PriceProps) => {
  return (
    <StyledPrice>
      <Typography variant="h6" component="span">
        {currency}
      </Typography>
      <Typography variant="h6" component="span">
        {price}
      </Typography>
    </StyledPrice>
  );
};

export default Price;
