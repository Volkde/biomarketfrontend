import styled from "@emotion/styled";
import { Box } from "@mui/material";
import { PriceProps } from "./types";

interface StyledPriceProps {
  isSale?: boolean;
}

export const PriceContainer = styled(Box)(({ theme }) => ({
  display: "flex",
  alignItems: "baseline",
  gap: theme.spacing(1),
}));

export const StyledPrice = styled("div")<StyledPriceProps>(({ theme, isSale }) => ({
  display: "flex",
  alignItems: "baseline",
  gap: theme.spacing(0.5),
  color: isSale ? theme.palette.error.main : theme.palette.primary.main,
  fontWeight: "bold",
}));

export const StyledOldPrice = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "baseline",
  gap: theme.spacing(0.5),
  color: theme.palette.text.secondary,
  textDecoration: "line-through",
  opacity: 0.7,
}));
