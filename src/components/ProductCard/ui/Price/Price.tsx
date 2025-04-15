import { Typography } from "@mui/material";
import { StyledOldPrice, StyledPrice, StyledPriceWrapper } from "./styles";
import { PriceProps } from "./types";

const Price = ({ price, oldPrice, currency = "€" }: PriceProps) => {
  return (
    <StyledPriceWrapper>
      <ins>
        <StyledPrice>
          <Typography component="span">{currency}</Typography>
          <Typography component="span">{price}</Typography>
        </StyledPrice>
      </ins>
      {oldPrice && (
        <del>
          <StyledOldPrice>
            <Typography component="span">{currency}</Typography>
            <Typography component="span">{oldPrice}</Typography>
          </StyledOldPrice>
        </del>
      )}
    </StyledPriceWrapper>
  );
};

export default Price;
