import {
  FavoriteBorder as FavoriteBorderIcon,
  Favorite as FavoriteIcon
} from "@mui/icons-material";
import { StyledButton } from "./styles";
import { FavoriteButtonProps } from "./types";

const FavoriteButton = ({
  isFavorite,
  onToggle,
  size = "small"
}: FavoriteButtonProps) => {
  const Icon = isFavorite ? FavoriteIcon : FavoriteBorderIcon;

  return (
    <StyledButton isFavorite={isFavorite} size={size} onClick={onToggle}>
      <Icon />
    </StyledButton>
  );
};

export default FavoriteButton;
