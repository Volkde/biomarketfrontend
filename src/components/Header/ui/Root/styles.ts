import { styled } from "@mui/material";
import { NavLink } from "react-router-dom";

export const HeaderLink = styled(NavLink, {
  shouldForwardProp: prop => prop !== "active"
})<{ active?: boolean }>(({ theme, active }) => ({
  color: "rgba(255, 255, 255, 0.8)",
  fontSize: "15px",
  transition: "all 0.3s ease",
  display: "block",
  position: "relative",
  marginLeft: "25px",
  textDecoration: "none",
  borderBottom: `2px solid ${active ? "rgba(255, 255, 255, 0.5)" : theme.palette.primary.main}`
}));
