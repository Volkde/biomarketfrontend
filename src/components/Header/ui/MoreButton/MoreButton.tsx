import { MoreVert as MoreVertIcon } from "@mui/icons-material";
import { IconButton, Tooltip } from "@mui/material";
import { MoreButtonProps } from "./types";

function MoreButton({ id, open, onClick }: MoreButtonProps) {
  return (
    <Tooltip title="Open cart">
      <IconButton
        id={id}
        size="large"
        sx={{ ml: 2 }}
        aria-label="show more"
        aria-controls={open ? `menu-${id}` : undefined}
        aria-haspopup="true"
        aria-expanded={open ? "true" : undefined}
        onClick={onClick}
        color="inherit"
        edge="end"
      >
        <MoreVertIcon />
      </IconButton>
    </Tooltip>
  );
}

export default MoreButton;
