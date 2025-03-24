import { StyledSpinner } from "./styles";
import type { SpinnerProps } from "./types";

function Spinner(props: SpinnerProps) {
  const { style } = props;

  return <StyledSpinner style={style}></StyledSpinner>;
}

export default Spinner;
