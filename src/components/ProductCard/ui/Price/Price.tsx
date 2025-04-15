import { Typography } from "@mui/material";
import {
  StyledOldPrice,
  StyledPrice,
  StyledPriceWrapper,
  StyledUnitOfMeasure
} from "./styles";
import { PriceProps } from "./types";

const Price = ({
  price,
  oldPrice,
  currency = "€",
  unitOfMeasure
}: PriceProps) => {
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
      {unitOfMeasure && (
        <StyledUnitOfMeasure>
          <Typography component="span">per 1 {unitOfMeasure}</Typography>
        </StyledUnitOfMeasure>
      )}
    </StyledPriceWrapper>
  );
};

export default Price;
