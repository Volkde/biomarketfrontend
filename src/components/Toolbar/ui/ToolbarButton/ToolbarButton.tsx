import { useToolbarContext } from "../../hooks/useToolbarContext";
import { ToolbarButtonProps } from "./types";

function ToolbarButton({ children, ...props }: ToolbarButtonProps) {
  const { orientation } = useToolbarContext();

  return (
    <button {...props}>
      {children} ({orientation})
    </button>
  );
}

export default ToolbarButton;
