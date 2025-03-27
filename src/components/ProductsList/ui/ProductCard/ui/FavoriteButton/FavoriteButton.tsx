import { IconButton } from '@mui/material';
import { Favorite as FavoriteIcon, FavoriteBorder as FavoriteBorderIcon } from '@mui/icons-material';
import { FavoriteButtonProps } from './types';
import { StyledFavoriteButton } from './styles';

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
const FavoriteButton = ({ isFavorite, onToggle, size = 'medium' }: FavoriteButtonProps) => {
  const Icon = isFavorite ? FavoriteIcon : FavoriteBorderIcon;

  return (
    <StyledFavoriteButton isFavorite={isFavorite} size={size} onClick={onToggle}>
      <Icon />
    </StyledFavoriteButton>
  );
};

export default FavoriteButton;
