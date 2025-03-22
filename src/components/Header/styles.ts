import styled from '@emotion/styled';
import { NavLink, Link } from 'react-router-dom';

export const StyledHeader = styled.header`
  padding: 0 40px;
  width: 100%;
  height: 80px;
  background: white;
  color: #333;
  display: flex;
  justify-content: space-between;
  align-items: center;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.15);
  position: sticky;
  top: 0;
  z-index: 1000;
`;

export const LogoContainer = styled(Link)`
  display: flex;
  align-items: center;
  gap: 10px;
  cursor: pointer;
  font-size: 28px;
  font-weight: bold;
  color: #28a745;
  transition: all 0.3s ease;
  width: auto; /* Автоматическая ширина */
  max-width: 120px; /* Максимальная ширина логотипа */
  flex-shrink: 0; /* Запрет сжатия */

  &:hover {
    opacity: 0.8;
  }

  img {
    width: 100%; /* Логотип занимает всю ширину контейнера */
    height: auto; /* Сохраняет пропорции */
  }
`;

export const StyledNavContainer = styled.nav`
  display: flex;
  align-items: center;
  gap: 20px;
`;

export const StyledNavLink = styled(NavLink)`
  text-decoration: none;
  color: #333;
  font-size: 16px;
  font-weight: 500;
  padding: 8px 16px;
  border-radius: 8px;
  transition: all 0.3s ease;

  &:hover {
    background-color: #f8f9fa;
    color: #28a745;
  }

  &.active {
    color: #28a745;
    font-weight: bold;
    border-bottom: 2px solid #28a745;
  }
`;

export const SearchWrapper = styled.div`
  position: relative;
  width: 100%;
  max-width: 400px;

  @media (max-width: 768px) {
    display: none; // или сделать адаптивный выпадающий поиск
  }

  input {
    width: 100%;
    padding: 10px 40px 10px 15px;
    border-radius: 20px;
    border: none;
    background-color: rgba(255, 255, 255, 0.2);
    color: white;
    font-size: 14px;
    outline: none;
    transition: all 0.3s ease;

    &::placeholder {
      color: rgba(255, 255, 255, 0.7);
    }

    &:focus {
      background-color: rgba(255, 255, 255, 0.3);
    }
  }
`;

export const ActionsContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 16px;
`;

export const ActionLink = styled(Link)`
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 8px 12px;
  border-radius: 8px;
  color: #28a745;
  background-color: transparent;
  transition: all 0.3s ease;
  text-decoration: none;

  &:hover {
    background-color: #f8f9fa;
  }

  &.active {
    background-color: #28a745;
    color: white;
  }
`;

export const StyledLink = styled(Link)`
  text-decoration: none;
  font-size: 16px;
  color: white;
`;