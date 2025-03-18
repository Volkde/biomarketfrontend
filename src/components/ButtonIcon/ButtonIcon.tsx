import { SpanIcon, StyledButtonIcon } from "./styles";
import type { ButtonProps } from "./types";

function ButtonIcon(props: ButtonProps) {
  const {
    icon,
    title,
    type = "button",
    disabled = false,
    onClick,
    style,
  } = props;

  return (
    <StyledButtonIcon
      type={type}
      onClick={onClick}
      disabled={disabled}
      title={title}
      style={style}
    >
      <SpanIcon translate="no" className="material-symbols-outlined">
        {icon}
      </SpanIcon>
    </StyledButtonIcon>
  );
}
export default ButtonIcon;
