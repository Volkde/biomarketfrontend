import styled from "@emotion/styled";
import type { StyledFlexBoxProps } from "./types";

export const StyledFlexBox = styled.div<StyledFlexBoxProps>`
  display: flex;
  flex-direction: ${({ direction }) => direction};
`;
