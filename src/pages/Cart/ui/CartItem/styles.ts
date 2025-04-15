import { Box, IconButton } from "@mui/material";
import { styled } from "@mui/material/styles";

export const CartItemContainer = styled(Box)({
  display: "flex",
  alignItems: "center",
  padding: "1rem",
  borderBottom: "1px solid #eee"
});

export const ProductInfo = styled(Box)({
  flex: 1,
  display: "flex",
  flexDirection: "column",
  gap: "0.5rem"
});

export const QuantityControls = styled(Box)({
  display: "flex",
  alignItems: "center",
  gap: "0.5rem",
  marginRight: "15px",
  border: "2px solid #eeeeee",
  borderRadius: "50px",
  padding: "5px"
});

export const RemoveButton = styled(IconButton)(({ theme }) => ({
  opacity: 0.25,
  color: "inherit",

  "&:hover": {
    color: theme.palette.error.main,
    opacity: 1,
    backgroundColor: "transparent" // если не нужен фон
  }
}));
