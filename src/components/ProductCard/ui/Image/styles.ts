import { styled } from "@mui/material";

export const StyledImage = styled("img")(() => ({
  position: "relative",
  maxWidth: "100%",
  width: "100%",
  height: "100%",
  border: "none",
  borderRadius: "0",
  boxShadow: "none",
  transform: "scale(1)",
  transition: "all ease 0.4s",
  objectFit: "cover"
}));
