import ToolbarContext from "../../context/ToolbarContext";
import { ToolbarProps } from "./types";

function Toolbar(props: ToolbarProps) {
  const {
    orientation = "horizontal",
    dir = "ltr",
    children,
    ...toolbarProps
  } = props;

  return (
    <ToolbarContext.Provider value={{ orientation, dir }}>
      <div
        role="toolbar"
        aria-orientation={orientation}
        dir={dir}
        {...toolbarProps}
      >
        {children}
      </div>
    </ToolbarContext.Provider>
  );
}

export default Toolbar;
