import {
  FavoriteBorder as FavoriteBorderIcon,
  Favorite as FavoriteIcon
} from "@mui/icons-material";
import { StyledFavoriteButton } from "./styles";
import { FavoriteButtonProps } from "./types";

const FavoriteButton = ({
  isFavorite,
  onToggle,
  size = "medium"
}: FavoriteButtonProps) => {
  const Icon = isFavorite ? FavoriteIcon : FavoriteBorderIcon;

  return (
    <StyledFavoriteButton
      isFavorite={isFavorite}
      size={size}
      onClick={onToggle}
    >
      <Icon />
    </StyledFavoriteButton>
  );
};

export default FavoriteButton;
