import { styled } from "@mui/material/styles";
import { Box, Typography } from "@mui/material";

export const CartContainer = styled(Box)(({ theme }) => ({
  padding: theme.spacing(2),
  borderRadius: theme.spacing(1),
  backgroundColor: theme.palette.background.paper,
  boxShadow: theme.shadows[1],
  width: "100%",
}));

export const CartHeader = styled(Typography)(({ theme }) => ({
  marginBottom: theme.spacing(2),
}));

export const CartItemsWrapper = styled(Box)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  gap: theme.spacing(2),
}));

export const CartTotal = styled(Typography)(({ theme }) => ({
  textAlign: "right",
  fontWeight: "bold",
  color: theme.palette.primary.main,
}));
