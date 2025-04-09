import { styled } from "@mui/material/styles";

export const StyledStockStatus = styled("div")<{
  status: string;
  size: string;
}>(({ theme, status }) => ({
  display: "none",
  position: "absolute",
  left: "-40px",
  top: "0",
  minWidth: "60px",
  height: "30px",
  lineHeight: "30px",
  padding: "0 10px",
  borderTopLeftRadius: "30px",
  borderBottomLeftRadius: "30px",
  textAlign: "center",
  zIndex: "2",
  textTransform: "capitalize",
  transform: "rotate(-90deg)",
  transformOrigin: "top right",

  ...(status === "in_stock" && {
    display: "inline-block",
    backgroundColor: theme.palette.primary.main,
    color: "#fff"
  })
}));
