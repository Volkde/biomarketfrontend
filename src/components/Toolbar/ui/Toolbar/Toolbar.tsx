import { useTheme } from "@mui/material";
import ToolbarContext from "../../context/ToolbarContext";
import { StyledToolbar } from "./styles";
import { ToolbarProps } from "./types";

function Toolbar(props: ToolbarProps) {
  const {
    orientation = "horizontal",
    dir = "ltr",
    children,
    ...toolbarProps
  } = props;
  const theme = useTheme();
  
  return (
    <ToolbarContext.Provider value={{ orientation, dir }}>
      <StyledToolbar
        theme={theme}
        role="toolbar"
        aria-orientation={orientation}
        dir={dir}
        className="red"
        {...toolbarProps}
      >
        {children}
      </StyledToolbar>
    </ToolbarContext.Provider>
  );
}

export default Toolbar;
