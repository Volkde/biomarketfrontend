import { useNavigate } from 'react-router-dom';
import { FaUser, FaShoppingCart, FaHeart } from 'react-icons/fa';
import { links } from './data.ts';
import { 
  StyledHeader, 
  StyledNavContainer, 
  StyledNavLink, 
  LogoContainer,
  ActionsContainer,
  ActionLink
} from './styles';
import SearchBar from '../common/SearchBar/SearchBar';

const Header = () => {
  const navigate = useNavigate();
  
  const handleLogoClick = () => {
    navigate('/');
    window.location.reload(); // Перезагрузка страницы для гарантии
  };
  
  return (
    <StyledHeader>
      <LogoContainer to="/" onClick={handleLogoClick}>
        <img src="/FarmVibe_logo2.svg" alt="FarmVibe Logo" width="120" />
      </LogoContainer>
      
      <StyledNavContainer>
        {links.map(({ text, path }) => (
          <StyledNavLink
            key={path}
            to={path}
            style={({ isActive }) => ({
              fontWeight: isActive ? 'bold' : 'normal',
              borderBottom: isActive ? '2px solid white' : 'none',
            })}
          >
            {text}
          </StyledNavLink>
        ))}
      </StyledNavContainer>
      
      <SearchBar apiUrl="/api/search" />
      
      <ActionsContainer>
        <ActionLink to="/favorites">
          <FaHeart size={18} />
        </ActionLink>
        <ActionLink to="/products">
          Shop
        </ActionLink>
        <ActionLink to="/cart">
          <FaShoppingCart size={18} />
          Cart
        </ActionLink>
        <ActionLink to="/login">
          <FaUser size={18} />
          Login
        </ActionLink>
      </ActionsContainer>
    </StyledHeader>
  );
};

export default Header;