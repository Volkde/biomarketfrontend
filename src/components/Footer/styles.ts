import { Box, Link as MuiLink, Stack, styled, Typography } from "@mui/material";
import { Link, NavLink } from "react-router-dom";

export const StyledFooter = styled(Box)`
  background: linear-gradient(135deg, #4b8a08 0%, #6ab04c 100%);
  color: white;
  padding: 60px 0 30px;
  width: 100%;
  box-shadow: 0 -4px 15px rgba(0, 0, 0, 0.1);
`;

export const FooterContainer = styled(Box)`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
  gap: 30px;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

export const FooterSection = styled(Box)`
  display: flex;
  flex-direction: column;
  min-width: 200px;
  flex: 1;
`;

export const LogoContainer = styled(Box)`
  display: flex;
  align-items: center;
  gap: 10px;
  margin-bottom: 15px;
  font-size: 24px;
  font-weight: bold;
  color: white;

  span {
    margin-left: 5px;
  }
`;

export const CopyrightText = styled(Typography)`
  font-size: 14px;
  margin-top: 15px;
  color: rgba(255, 255, 255, 0.8);
`;

export const FooterTitle = styled(Typography)`
  font-size: 18px;
  font-weight: bold;
  margin-bottom: 20px;
  color: white;
  position: relative;
  padding-bottom: 10px;
  
  &:after {
    content: '';
    position: absolute;
    bottom: 0,
    left: 0,
    width: 40px,
    height: 2px,
    background-color: white,
    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.2),
  }
`;

export const FooterLink = styled(MuiLink)`
  text-decoration: none;
  color: rgba(255, 255, 255, 0.8);
  font-size: 15px;
  margin-bottom: 12px;
  transition: all 0.3s ease;
  display: block;
  position: relative;
  padding-left: 5px;

  &:hover {
    color: white;
    transform: translateX(5px);
  }

  &:before {
    content: "";
    position: absolute;
    left: -5px;
    top: 50%;
    transform: translateY(-50%);
    width: 0;
    height: 0;
    border-style: solid;
    border-width: 4px 0 4px 4px;
    border-color: transparent transparent transparent rgba(255, 255, 255, 0);
    transition: all 0.3s ease;
  }

  &:hover:before {
    left: 0;
    border-color: transparent transparent transparent rgba(255, 255, 255, 0.8);
  }
`;

export const SocialContainer = styled(Stack)`
  display: flex;
  gap: 15px;
  margin-top: 5px;
`;

export const SocialLink = styled(MuiLink)`
  color: white;
  background-color: rgba(255, 255, 255, 0.2);
  width: 40px;
  height: 40px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.3s ease;

  &:hover {
    background-color: rgba(255, 255, 255, 0.3);
    transform: translateY(-3px) scale(1.1);
    box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
  }
`;

export const StyledNavContainer = styled(Box)`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 10px;
`;

export const StyledNavLink = styled(NavLink)`
  text-decoration: none;
  font-size: 16px;
  color: white;
`;

export const StyledLink = styled(Link)`
  text-decoration: none;
  font-size: 15px;
  color: white;
`;
