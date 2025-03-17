import { StyledMain } from "./styles.ts";
import type { MainProps } from "./types.ts";

function Main({ children }: MainProps) {
  return <StyledMain>{children}</StyledMain>;
}

export default Main;
