import { useToolbarContext } from "../../hooks/useToolbarContext";
import { ToolbarSeparatorProps } from "./types";

function ToolbarSeparator(props: ToolbarSeparatorProps) {
  const { orientation } = useToolbarContext();

  return (
    <div
      role="separator"
      className="toolbar-separator"
      style={{
        width: orientation === "horizontal" ? "1px" : "100%",
        height: orientation === "horizontal" ? "100%" : "1px",
        backgroundColor: "#ccc",
        margin: orientation === "horizontal" ? "0 8px" : "8px 0",
      }}
      {...props}
    />
  );
}

export default ToolbarSeparator;
