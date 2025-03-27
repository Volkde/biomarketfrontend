export interface FavoriteButtonProps {
  isFavorite: boolean;
  onToggle: () => void;
  size?: "small" | "medium" | "large";
}
