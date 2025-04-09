import { styled } from "@mui/material";
import { NavLink } from "react-router-dom";

export const HeaderLink = styled(NavLink)`
  text-decoration: none;
  color: rgba(255, 255, 255, 0.8);
  font-size: 15px;
  margin-bottom: 12px;
  transition: all 0.3s ease;
  display: block;
  position: relative;
  padding-left: 25px;
`;
