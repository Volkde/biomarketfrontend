import styled from "@emotion/styled";
import { Link, NavLink } from "react-router-dom";

export const StyledNavContainer = styled.nav`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
`;

export const StyledNavLink = styled(NavLink)`
  text-decoration: none;
  font-size: 15px;
  color: #222;
`;

export const StyledLink = styled(Link)`
  text-decoration: none;
  font-size: 15px;
  color: #222;
`;
