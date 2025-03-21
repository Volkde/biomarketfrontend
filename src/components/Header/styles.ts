import styled from 'styled-components';
import { NavLink, Link } from 'react-router-dom';

export const StyledHeader = styled.header`
  padding: 20px;
  width: 100%;
  height: fit-content;
  background-color: #2f5a6e;
  color: white;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const StyledNavContainer = styled.nav`
  display: 'flex';
  gap: '10px';
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