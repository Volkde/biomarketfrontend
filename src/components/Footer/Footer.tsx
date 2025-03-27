import { Box } from "@mui/material";
import { links } from "./data.ts";
import { StyledNavContainer, StyledNavLink } from "./styles.ts";

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
    <Box component="footer" sx={{ flexGrow: 1, p: 3 }}>
      <StyledNavContainer>{elLinks}</StyledNavContainer>
    </Box>
  );
}

export default Footer;
