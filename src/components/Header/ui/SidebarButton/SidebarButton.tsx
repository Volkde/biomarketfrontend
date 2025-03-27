import { Menu as MenuIcon } from "@mui/icons-material";
import { IconButton } from "@mui/material";
import { SidebarButtonProps } from "./types";

function SidebarButton({ id, onClick }: SidebarButtonProps) {
  return (
    <IconButton
      id={id}
      size="large"
      sx={{ ml: 2 }}
      aria-label="open drawer"
      onClick={onClick}
      color="inherit"
      edge="start"
    >
      <MenuIcon />
    </IconButton>
  );
}

export default SidebarButton;
