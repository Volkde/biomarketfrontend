import { StyledTitle } from "./styles";
import type { TitleProps } from "./types";

function Title(props: TitleProps) {
  const { content } = props;

  return <StyledTitle>{content}</StyledTitle>;
}

export default Title;
