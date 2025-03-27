import {
  FavoriteBorder as FavoriteBorderIcon,
  Favorite as FavoriteIcon,
} from "@mui/icons-material";
import { StyledFavoriteButton } from "./styles";
import { FavoriteButtonProps } from "./types";

/**
 * Кнопка добавления товара в избранное
 *
 * @param isFavorite - текущее состояние (в избранном/не в избранном)
 * @param onToggle - callback при изменении состояния
 * @param size - размер кнопки (small, medium, large)
 *
 * @example
 * // Пример использования
 * <FavoriteButton isFavorite={false} onToggle={() => {}} size="medium" />
 */
const FavoriteButton = ({
  isFavorite,
  onToggle,
  size = "medium",
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
