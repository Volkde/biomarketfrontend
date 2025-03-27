import { styled } from "@mui/material/styles";

export const StyledFavoriteButton = styled("button")<{
  isFavorite: boolean;
  size: string;
}>(({ theme, isFavorite, size }) => ({
  background: "transparent",
  border: "none",
  cursor: "pointer",
  padding: theme.spacing(0.5),
  fontSize: size === "small" ? "1rem" : size === "large" ? "1.5rem" : "1.25rem",
  color: isFavorite ? theme.palette.error.main : theme.palette.text.secondary,
  transition: "color 0.2s ease",

  "&:hover": {
    opacity: 0.8,
  },
}));
