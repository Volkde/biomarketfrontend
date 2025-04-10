import { CartItemProps } from "./types";

function CartItem({ value }: CartItemProps) {
  return (
    <div>
      <li>Title: {value.title}</li>
    </div>
  );
}

export default CartItem;
