import { styled } from "@mui/material/styles";

export const StyledPriceWrapper = styled("div")(({ theme }) => ({
  display: "flex",
  flexDirection: "row",
  justifyContent: "center",
  alignItems: "baseline",
  gap: "10px",

  ins: {
    textDecoration: "none"
  }
}));

export const StyledPrice = styled("bdi")(({ theme }) => ({
  display: "flex",
  alignItems: "baseline",
  justifyContent: "center",

  span: {
    color: "#777",
    fontSize: "14px",
    fontWeight: "300"
  }
}));

export const StyledUnitOfMeasure = styled("span")(({ theme }) => ({
  display: "flex",
  alignItems: "baseline",
  justifyContent: "center",

  span: {
    color: "#777",
    fontSize: "14px",
    fontWeight: "300"
  }
}));

export const StyledOldPrice = styled("bdi")(({ theme }) => ({
  display: "flex",
  alignItems: "baseline",
  justifyContent: "center",

  span: {
    color: "#777",
    fontSize: "12px",
    fontWeight: "300"
  }
}));
