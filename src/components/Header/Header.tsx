import AcUnitIcon from "@mui/icons-material/AcUnit";
import { Tooltip } from "@mui/material";
import * as Toolbar from "components/Toolbar";
import { links } from "./data";
import { StyledHeader, StyledNavContainer } from "./styles";

const elLinks = links.map(item => <span key={item.text}>{item.text}</span>);

function Header() {
  return (
    <StyledHeader>
      <StyledNavContainer>{elLinks}</StyledNavContainer>

      <Toolbar.Root orientation="horizontal">
        <Toolbar.Button>
          <AcUnitIcon />
        </Toolbar.Button>
        <Tooltip title="Button 2">
          <Toolbar.Button>Button 2</Toolbar.Button>
        </Tooltip>
        <Toolbar.Separator />
        <Tooltip title="Title">
          <Toolbar.Link href="/" target="_blank">
            Go to Example
          </Toolbar.Link>
        </Tooltip>
        <Toolbar.Link href="/" target="_blank">
          <AcUnitIcon />
        </Toolbar.Link>
      </Toolbar.Root>
    </StyledHeader>
  );
};

export default Header;