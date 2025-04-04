import { FavoriteBorder as FavoriteBorderIcon } from "@mui/icons-material";
import { Badge, IconButton, Tooltip } from "@mui/material";
import { WishlistButtonProps } from "./types";

function WishlistButton({
  id,
  wishlistItemsCount,
  onClick,
}: WishlistButtonProps) {
  return (
    <Tooltip title="Open settings">
      <IconButton
        id={id}
        size="large"
        sx={{ ml: 2 }}
        aria-label="show more"
        onClick={onClick}
        color="inherit"
      >
        <Badge badgeContent={wishlistItemsCount} color="success">
          <FavoriteBorderIcon />
        </Badge>
      </IconButton>
    </Tooltip>
  );
}

export default WishlistButton;
