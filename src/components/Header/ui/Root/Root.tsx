import { links } from "./data";
import { StyledHeader, StyledNavContainer } from "./styles";

const elLinks = links.map(item => <span key={item.text}>{item.text}</span>);

function Root() {
  return (
    <StyledHeader>
      <StyledNavContainer>{elLinks}</StyledNavContainer>
    </StyledHeader>
  );
}

export default Root;
