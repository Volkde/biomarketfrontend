import { StyledButton } from "./styles";
import type { ButtonProps } from "./types";

function Button(props: ButtonProps) {
  const {
    type = "button",
    style,
    disabled = false,
    onClick,
    name = "OK",
  } = props;

  return (
    <StyledButton
      type={type}
      style={style}
      disabled={disabled}
      onClick={onClick}
    >
      {name}
    </StyledButton>
  );
}

export default Button;
