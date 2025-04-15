import { styled } from "@mui/material/styles";
import { Box, Typography } from "@mui/material";

export const Wrapper = styled(Box)(({ theme }) => ({
  padding: theme.spacing(4),
  maxWidth: "960px",
  margin: "0 auto"
}));

export const Title = styled(Typography)(({ theme }) => ({
  fontSize: "2rem",
  fontWeight: 600,
  marginBottom: theme.spacing(4)
}));

export const List = styled(Box)(() => ({
  display: "flex",
  flexDirection: "column",
  gap: "1.5rem"
}));

export const CartItem = styled(Box)(({ theme }) => ({
  display: "flex",
  backgroundColor: theme.palette.background.paper,
  borderRadius: theme.shape.borderRadius,
  overflow: "hidden",
  boxShadow: theme.shadows[1]
}));

export const ProductImage = styled("img")(({ theme }) => ({
  width: "120px",
  height: "120px",
  objectFit: "cover",
  borderRight: `1px solid ${theme.palette.divider}`
}));

export const Info = styled(Box)(() => ({
  display: "flex",
  flexDirection: "column",
  gap: "0.25rem",
  marginBottom: "0.5rem"
}));

export const Name = styled(Typography)(() => ({
  fontWeight: 600,
  fontSize: "1rem"
}));

export const Vendor = styled(Typography)(() => ({
  fontSize: "0.875rem",
  color: "#888"
}));

export const Unit = styled(Typography)(() => ({
  fontSize: "0.875rem",
  color: "#aaa"
}));

export const Controls = styled(Box)(() => ({
  display: "flex",
  alignItems: "center",
  gap: "0.75rem"
}));

export const Quantity = styled(Typography)(() => ({
  minWidth: "2rem",
  textAlign: "center"
}));

export const Price = styled(Typography)(({ theme }) => ({
  fontWeight: 600,
  marginLeft: "auto"
}));

export const Total = styled(Typography)(({ theme }) => ({
  marginTop: theme.spacing(4),
  fontSize: "1.25rem",
  fontWeight: 600,
  textAlign: "right"
}));

export const Actions = styled(Box)(({ theme }) => ({
  marginTop: theme.spacing(2),
  display: "flex",
  justifyContent: "flex-end",
  gap: theme.spacing(2)
}));
