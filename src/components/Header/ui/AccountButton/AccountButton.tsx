import { AccountCircleOutlined as AccountCircleIcon } from "@mui/icons-material";
import { Avatar, IconButton, Tooltip } from "@mui/material";
import { AccountButtonProps } from "./types";

function AccountButton({
  id,
  open,
  login,
  userFullName,
  userAvatarUrl,
  onClick,
}: AccountButtonProps) {
  return (
    <Tooltip title="Open settings">
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
        {login === true ? (
          <Avatar
            alt={userFullName}
            src={userAvatarUrl}
            sx={{ width: 32, height: 32 }}
          />
        ) : (
          <AccountCircleIcon />
        )}
      </IconButton>
    </Tooltip>
  );
}

export default AccountButton;
