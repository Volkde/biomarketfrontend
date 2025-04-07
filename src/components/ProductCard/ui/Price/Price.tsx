import React from "react";
import { Typography } from "@mui/material";
import { StyledPrice, StyledOldPrice, PriceContainer } from "./styles";
import { PriceProps } from "./types";

/**
 * Компонент отображения цены продукта
 *
 * @param price - текущая цена
 * @param oldPrice - старая цена (если есть скидка)
 * @param isSale - флаг наличия скидки
 * @param currency - валюта (по умолчанию евро)
 */
const Price = ({ price, oldPrice, isSale = false, currency = "€" }: PriceProps) => {
  return (
    <PriceContainer>
      <StyledPrice isSale={isSale}>
        <Typography variant="h6" component="span">
          {currency}
        </Typography>
        <Typography variant="h6" component="span">
          {price.toFixed(2)}
        </Typography>
      </StyledPrice>
      {oldPrice && isSale && (
        <StyledOldPrice>
          <Typography variant="body2" component="span">
            {currency}
          </Typography>
          <Typography variant="body2" component="span">
            {oldPrice.toFixed(2)}
          </Typography>
        </StyledOldPrice>
      )}
    </PriceContainer>
  );
};

export default Price;
