import { links } from "./data.ts";
import { StyledFooter, StyledNavContainer, StyledNavLink } from "./styles.ts";

function Footer() {
  const elLinks = links.map(({ text, path }) => (
    <StyledNavLink
      key={path}
      to={path}
      style={({ isActive }) => ({
        textDecoration: isActive ? "underline" : "none",
      })}
    >
      {text}
    </StyledNavLink>
  ));

  return (
    <StyledFooter>
      <StyledNavContainer>{elLinks}</StyledNavContainer>
    </StyledFooter>
  );
}

export default Footer;
