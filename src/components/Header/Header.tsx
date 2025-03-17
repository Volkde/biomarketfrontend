import { ButtonIcon } from "components/ButtonIcon";
import { useNavigate } from "react-router-dom";
import { links } from "./data.ts";
import { StyledHeader, StyledNavContainer, StyledNavLink } from "./styles";

function Header() {
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
          textDecoration: isActive ? "underline" : "none",
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
    </StyledHeader>
  );
}

export default Header;
