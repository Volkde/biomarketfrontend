import { ShoppingCart } from "@mui/icons-material";
import { Button } from "@mui/material";
import { styles } from "./styles";
import { AddToCartButtonProps } from "./types";

const AddToCartButton = ({
  isAddingToCart = false,
  onClick
}: AddToCartButtonProps) => {
  return (
    <Button
      variant="contained"
      size="small"
      style={styles.button}
      onClick={onClick}
      disabled={isAddingToCart}
      className={isAddingToCart ? "adding" : ""}
    >
      {isAddingToCart ? (
        <span className="flex items-center gap-1">
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
          Added
        </span>
      ) : (
        <span className="flex items-center gap-1">
          <ShoppingCart className="w-3 h-3" />
          Add
        </span>
      )}
    </Button>
  );
};

export default AddToCartButton;
