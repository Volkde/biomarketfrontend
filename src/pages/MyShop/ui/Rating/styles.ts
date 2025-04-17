import { styled } from "@mui/material/styles";

export const StyledRating = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  gap: theme.spacing(1),
  marginTop: "5px"
}));

export const StyledRatingCount = styled("span")(({ theme }) => ({
  color: theme.palette.primary.main,
  fontSize: "0.875rem"
}));
