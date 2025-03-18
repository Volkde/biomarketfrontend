import { StyledFlexBox } from "./styles";
import type { FlexBoxProps } from "./types";

function FlexBox(props: FlexBoxProps) {
  const { direction = "column", children, style } = props;

  return (
    <StyledFlexBox direction={direction} style={style}>
      {children}
    </StyledFlexBox>
  );
}

export default FlexBox;
