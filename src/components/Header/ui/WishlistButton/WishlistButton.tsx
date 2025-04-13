import { FavoriteBorder as FavoriteBorderIcon } from "@mui/icons-material";
import { Badge, IconButton, Tooltip } from "@mui/material";
import { useLocation } from "react-router-dom";
import { WishlistButtonProps } from "./types";

function WishlistButton({
  id,
  wishlistItemsCount,
  onClick
}: WishlistButtonProps) {
  const location = useLocation();

  return (
    <Tooltip title="Open wishlist">
      <IconButton
        id={id}
        size="large"
        sx={{ ml: 2 }}
        aria-label="show more"
        onClick={onClick}
        color={location.pathname === "/wishlist" ? "primary" : "inherit"}
      >
        <Badge badgeContent={wishlistItemsCount} color="success">
          <FavoriteBorderIcon />
        </Badge>
      </IconButton>
    </Tooltip>
  );
}

export default WishlistButton;
