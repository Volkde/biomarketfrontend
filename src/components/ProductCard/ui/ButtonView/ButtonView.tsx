import { Done as DoneIcon, ShoppingCart } from "@mui/icons-material";
import { Button } from "@mui/material";

function ButtonView() {
  const isAddingToCart = false;
  const handleAddToCart = () => {
    // TODO
  };

  return (
    <Button
      variant="contained"
      size="small"
      className={` absolute top-3 right-3 z-50 rounded-full shadow-lg bg-primary text-white opacity-0 transform translate-y-4 scale-90 group-hover:opacity-100 group-hover:translate-y-0 group-hover:scale-100 transition-all duration-300",
          ${isAddingToCart} && "bg-green-600 dark:bg-green-700 `}
      onClick={handleAddToCart}
      disabled={isAddingToCart}
    >
      {isAddingToCart ? (
        <span className="flex items-center gap-1">
          <DoneIcon />
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
}

export default ButtonView;
