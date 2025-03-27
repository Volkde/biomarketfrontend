import { styled } from "@mui/material/styles";

export const StyledGridContainer = styled("div")(({ theme, spacing = 2 }) => ({
  display: "grid",
  gridTemplateColumns: "repeat(auto-fill, minmax(250px, 1fr))",
  gap: theme.spacing(spacing),
  padding: theme.spacing(2),
  width: "100%",
  maxWidth: "1200px",
  margin: "0 auto",
}));

export const StyledProductCard = styled("div")(({ theme }) => ({
  background: theme.palette.background.paper,
  borderRadius: theme.shape.borderRadius,
  padding: theme.spacing(2),
  boxShadow: theme.shadows[1],
  transition: "transform 0.2s ease",

  "&:hover": {
    transform: "translateY(-4px)",
  },
}));

export const StyledProductImage = styled("img")(({ theme }) => ({
  width: "100%",
  height: "200px",
  objectFit: "cover",
  borderRadius: theme.shape.borderRadius,
  marginBottom: theme.spacing(2),
}));

export const StyledProductInfo = styled("div")(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  gap: theme.spacing(1),
}));
