import {
  FavoriteBorder as FavoriteBorderIcon,
  Favorite as FavoriteIcon
} from "@mui/icons-material";
import { Tooltip } from "@mui/material";
import { StyledButton } from "./styles";
import { FavoriteButtonProps } from "./types";

const FavoriteButton = ({
  isFavorite,
  onToggle,
  size = "medium"
}: FavoriteButtonProps) => {
  const Icon = isFavorite ? FavoriteIcon : FavoriteBorderIcon;

  return (
    <Tooltip title={isFavorite ? "Added to wishlist" : "Add to wishlist"}>
      <StyledButton isFavorite={isFavorite} size={size} onClick={onToggle}>
        <Icon />
      </StyledButton>
    </Tooltip>
  );
};

export default FavoriteButton;
