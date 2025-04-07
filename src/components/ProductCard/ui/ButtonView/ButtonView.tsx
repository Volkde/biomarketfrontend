import { Done as DoneIcon, ShoppingCart } from "@mui/icons-material";
import { Button } from "@mui/material";
import { useCart } from "contexts/CartContext";
import { useState } from "react";

type ButtonViewProps = {};

function ButtonView(props: ButtonViewProps) {
  const [isAddingToCart, setIsAddingToCart] = useState(false);
  const [isAnimating, setIsAnimating] = useState(false);
  const [id, setId] = useState("");
  const [name, setName] = useState("");

  const [image, setImage] = useState("");
  const [price, setPrice] = useState("");
  const [category, setCategory] = useState("");

  // Get cart functions and currency
  const { addToCart } = useCart();
  const { currency } = useCurrency();

  const handleAddToCart = (e?: React.MouseEvent) => {
    if (e) {
      e.stopPropagation();
      e.preventDefault();
    }

    setIsAddingToCart(true);
    setIsAnimating(true);

    // Add to cart using context
    addToCart({
      id,
      name,
      image,
      price,
      category,
    });

    setTimeout(() => {
      setIsAddingToCart(false);
      setTimeout(() => {
        setIsAnimating(false);
      }, 300);
    }, 1000);
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
