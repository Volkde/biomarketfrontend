import { ShoppingCart } from "@mui/icons-material";
import { Button } from "@mui/material";
import { AddToCartButtonProps } from "./types";

/**
 * Компонент кнопки добавления в корзину
 * 
 * @param onClick - функция обратного вызова при нажатии на кнопку
 * @param isAddingToCart - флаг процесса добавления в корзину
 * @param isAnimating - флаг анимации
 * @param disabled - флаг отключения кнопки
 * @param size - размер кнопки (small, medium, large)
 * @param fullWidth - флаг растягивания кнопки на всю ширину
 * @param showIcon - флаг отображения иконки
 * @param label - текст кнопки
 */
const AddToCartButton = ({
  onClick,
  isAddingToCart = false,
  // isAnimating используется для анимации при добавлении в корзину
  isAnimating = false,
  disabled = false,
  size = "small",
  fullWidth = false,
  showIcon = true,
  label = "Add"
}: AddToCartButtonProps) => {
  // Комбинированный флаг отключения кнопки
  const isDisabled = disabled || isAddingToCart;
  
  // Спиннер загрузки
  const LoadingSpinner = () => (
    <svg
      className="animate-spin h-4 w-4 text-white"
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
    >
      <circle
        className="opacity-25"
        cx="12"
        cy="12"
        r="10"
        stroke="currentColor"
        strokeWidth="4"
      ></circle>
      <path
        className="opacity-75"
        fill="currentColor"
        d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
      ></path>
    </svg>
  );

  return (
    <Button
      variant="contained"
      size={size}
      onClick={onClick}
      disabled={isDisabled}
      fullWidth={fullWidth}
      sx={{
        position: 'relative',
        borderRadius: fullWidth ? '4px' : '50%',
        boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
        backgroundColor: isAddingToCart ? '#28a745' : '#007bff',
        color: '#fff',
        opacity: 0.9,
        transform: 'translateY(0)',
        transition: 'all 0.3s ease',
        '&:hover': {
          opacity: 1,
          transform: 'translateY(-2px) scale(1.02)',
          backgroundColor: isAddingToCart ? '#218838' : '#0069d9'
        },
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        gap: '4px'
      }}
    >
      {isAddingToCart ? (
        <>
          <LoadingSpinner />
          <span>Added</span>
        </>
      ) : (
        <>
          {showIcon && <ShoppingCart sx={{ fontSize: size === 'small' ? 16 : 20 }} />}
          <span>{label}</span>
        </>
      )}
    </Button>
  );
};

export default AddToCartButton;
