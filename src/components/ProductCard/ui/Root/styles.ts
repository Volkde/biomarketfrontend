import { Box, styled, Typography } from "@mui/material";

export const StyledProductCard = styled(Box)(({ theme }) => ({
  position: "relative",
  width: "100%",
  maxWidth: "300px",
  height: "100%",
  display: "flex",
  flexDirection: "column",
  borderRadius: theme.shape.borderRadius,
  overflow: "hidden",
  border: `2px solid ${theme.palette.divider}`,
  padding: "0",
  transition: "all ease 0.4s",
  marginBottom: "30px",
  boxShadow: "none",
  textAlign: "center",

  ".product-images": {
    height: "250px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    transition: "all ease 0.4s"
  },

  ".product-content": {
    position: "relative",
    backgroundColor: theme.palette.divider,
    padding: "20px 0"
  },

  "&:hover": {
    borderColor: theme.palette.primary.main,

    "& img": {
      transform: `scale(1.15)`
    },

    ".product-cart-buttons": {
      visibility: "visible",
      marginTop: "-10px",
      opacity: "1"
    }
  }
}));

export const StyledProductTitle = styled(Typography)(({ theme }) => ({
  fontSize: "15px",
  fontWeight: "700",
  textTransform: "none",
  lineHeight: "1.3",
  margin: "0 0 5px 0",

  a: {
    color: "#000",
    boxShadow: "none",
    textDecoration: "none",
    transition: "all ease 0.4s"
  },

  "&:hover a": {
    color: theme.palette.primary.main
  }
}));

export const StyledButtons = styled(Box)({
  position: "absolute",
  display: "inline-block",
  width: "max-content",
  borderRadius: "777px",
  padding: "5px 15px 3px",
  lineHeight: "0",
  left: "50%",
  top: "-25px",
  marginTop: "-30px",
  backgroundColor: "#fff",
  transform: "translateX(-50%)",
  opacity: "0",
  visibility: "hidden",
  transition: "all ease 0.4s",
  boxShadow: "0px 7px 65px 0px rgba(163, 163, 163, 0.2)"
});
