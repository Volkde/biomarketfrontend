import { styled } from "@mui/material/styles";

export const StyledDiscountBadge = styled("div")<{
  size: string;
}>(({ theme }) => ({
  display: "inline-block",
  position: "absolute",
  left: "-10px",
  top: "0",
  minWidth: "60px",
  height: "30px",
  lineHeight: "30px",
  padding: "0 10px",
  borderTopRightRadius: "0",
  borderBottomRightRadius: "0",
  borderTopLeftRadius: "30px",
  borderBottomLeftRadius: "30px",
  textAlign: "center",
  zIndex: 3,
  transform: "rotate(-90deg)",
  transformOrigin: "top right",
  fontWeight: 700,
  letterSpacing: 1,
  boxShadow: `0 2px 8px ${theme.palette.error.light}33`,
  pointerEvents: "none",
  fontSize: "15px",
  backgroundColor: theme.palette.error.main,
  color: "#fff"
}));
