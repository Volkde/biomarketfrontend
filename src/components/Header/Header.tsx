import { Toolbar, ToolbarButton, ToolbarLink, ToolbarSeparator } from "components/Toolbar";
import { links } from "./data";
import { Root, StyledNavContainer } from "./styles";

const elLinks = links.map(item => <span key={item.text}>{item.text}</span>);

function Header() {
  return (
    <Root>
      <StyledNavContainer>{elLinks}</StyledNavContainer>

      <Toolbar orientation="horizontal">
        <ToolbarButton>Button 1</ToolbarButton>
        <ToolbarButton>Button 2</ToolbarButton>
        <ToolbarSeparator />
        <ToolbarLink href="/" target="_blank">
          Go to Example
        </ToolbarLink>
      </Toolbar>
    </Root>
  );
}

export default Header;
