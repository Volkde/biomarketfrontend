export interface AddToCartButtonProps {
  onClick: () => void;
  isAddingToCart?: boolean;
  isAnimating?: boolean;
  disabled?: boolean;
  size?: 'small' | 'medium' | 'large';
  fullWidth?: boolean;
  showIcon?: boolean;
  label?: string;
}
