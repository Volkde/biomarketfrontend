import { styled } from "@mui/material/styles";

export const StyledButton = styled("button")<{
  isAddingToCart: boolean;
  size: string;
}>(({ theme, isAddingToCart, size }) => ({
  background: "transparent",
  border: "none",
  cursor: "pointer",
  padding: theme.spacing(0.5),
  fontSize: size === "small" ? "1rem" : size === "large" ? "1.5rem" : "1.25rem",
  color: isAddingToCart
    ? theme.palette.error.main
    : theme.palette.text.secondary,
  transition: "color 0.2s ease",

  "&:hover": {
    opacity: 0.8
  }
}));
