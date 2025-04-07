import { styled } from "@mui/material/styles";

export const StyledDescription = styled("div")(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  gap: theme.spacing(1),
}));

export const StyledTitle = styled("h3")(({ theme }) => ({
  margin: 0,
  fontSize: "1.125rem",
  fontWeight: 600,
  color: theme.palette.text.primary,
}));

export const StyledDescriptionText = styled("p")(({ theme }) => ({
  margin: 0,
  color: theme.palette.text.secondary,
  fontSize: "0.875rem",
}));

export const StyledFeaturesList = styled("ul")(({ theme }) => ({
  margin: 0,
  padding: 0,
  listStyle: "none",
  display: "flex",
  flexDirection: "column",
  gap: theme.spacing(0.5),
}));

export const StyledFeatureItem = styled("li")(({ theme }) => ({
  color: theme.palette.text.secondary,
  fontSize: "0.875rem",
  display: "flex",
  alignItems: "center",
  gap: theme.spacing(0.5),
}));
