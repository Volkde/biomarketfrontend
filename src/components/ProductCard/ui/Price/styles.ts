import { styled } from "@mui/material/styles";

export const StyledPrice = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "baseline",
  gap: theme.spacing(0.5),
  color: theme.palette.primary.main,
  fontWeight: "bold"
}));
