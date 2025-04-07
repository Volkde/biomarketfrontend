import { styled } from "@mui/material/styles";

export const StyledRating = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  gap: theme.spacing(1),
}));

export const StyledRatingCount = styled("span")(({ theme }) => ({
  color: theme.palette.text.secondary,
  fontSize: "0.875rem",
}));
