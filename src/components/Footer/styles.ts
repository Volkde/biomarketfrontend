import styled from "@emotion/styled";
import { Link, NavLink } from "react-router-dom";

export const StyledFooter = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px;
  width: 100%;
  height: fit-content;
  background-color: #2f5a6e;
  color: white;
`;

export const StyledNavContainer = styled.nav`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
`;

export const StyledNavLink = styled(NavLink)`
  text-decoration: none;
  font-size: 20px;
  color: white;
`;

export const StyledLink = styled(Link)`
  text-decoration: none;
  font-size: 16px;
  color: white;
`;
