import {
  Menu as MenuIcon,
  MenuOpen as MenuOpenIcon
} from "@mui/icons-material";
import { IconButton, Tooltip } from "@mui/material";
import { useDispatch } from "react-redux";
import { useAppSelector } from "store/hooks";
import { selectUiState } from "store/redux/ui/selectors/selectUiState";
import { uiActions } from "store/redux/ui/slice/uiSlice";
import { SidebarButtonProps } from "./types";

function SidebarButton({ id }: SidebarButtonProps) {
  const dispatch = useDispatch();
  const { isSidebarPanelOpen } = useAppSelector(selectUiState);
  const handleDrawerToggle = () => dispatch(uiActions.toggleSidebarPanel());

  return (
    <Tooltip title={isSidebarPanelOpen ? "Close drawer" : "Open drawer"}>
      <IconButton
        id={id}
        size="large"
        aria-label={isSidebarPanelOpen ? "Close drawer" : "Open drawer"}
        onClick={handleDrawerToggle}
        sx={{
          ml: 2,
          color: "white"
        }}
        edge="start"
      >
        {isSidebarPanelOpen ? <MenuOpenIcon /> : <MenuIcon />}
      </IconButton>
    </Tooltip>
  );
}

export default SidebarButton;
