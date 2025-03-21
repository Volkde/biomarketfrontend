import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { FaUser } from 'react-icons/fa';
import ButtonIcon from '../ButtonIcon/ButtonIcon';
import { links } from './data.ts';
import { StyledHeader, StyledNavContainer, StyledNavLink } from './styles';
import SearchBar from '../common/SearchBar/SearchBar';

const Header = () => {
  const navigate = useNavigate();
  const goToPrevPage = () => navigate(-1);

  const elLinks = links.map(({ icon, text, path }) =>
    icon ? (
      <ButtonIcon key={path} icon={icon} onClick={() => navigate(path)} />
    ) : (
      <StyledNavLink
        key={path}
        to={path}
        style={({ isActive }) => ({
          textDecoration: isActive ? 'underline' : 'none',
        })}
      >
        {text}
      </StyledNavLink>
    ),
  );

  return (
    <StyledHeader>
      <ButtonIcon onClick={goToPrevPage} icon="arrow_back_ios" />
      <StyledNavContainer>{elLinks}</StyledNavContainer>
      <div style={{ 
        padding: '20px', 
        backgroundColor: 'rgb(118, 150, 62)',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: '10px',
        width: '100%'
      }}>
        <SearchBar />
      </div>
      <div style={{ display: 'flex', gap: '20px', alignItems: 'center' }}>
        <Link to="/products">Shop</Link>
        <Link to="/cart">Cart</Link>
        <Link to="/login">
          <FaUser /> Login
        </Link>
      </div>
    </StyledHeader>
  );
};

export default Header;