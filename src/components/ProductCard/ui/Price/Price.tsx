import { Typography } from "@mui/material";
import { StyledPrice } from "./styles";
import { PriceProps } from "./types";

const Price = ({ price, currency = "$" }: PriceProps) => {
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
